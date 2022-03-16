(ns games.maze
  (:require [clojure.set :as s]
            [games.random :as random]
            [games.util :as util]))

(defn cell-index [{:keys [x y] :as cell} {:keys [width] :as maze}]
  (+ (* y width) x))

(defn cell-for-ui [x y opts]
  (let [cells (set opts)]
    {:x     x
     :y     y
     :north (contains? cells :north)
     :east  (contains? cells :east)
     :south (contains? cells :south)
     :west  (contains? cells :west)
     :start (contains? cells :start)
     :end   (contains? cells :end)}))

(defn- maze-neighbors [{:keys [x y]} {:keys [width height cells] :as maze}]
  (let [surrounding-cells {:north {:x x :y (- y 1)}
                           :south {:x x :y (+ y 1)}
                           :west  {:x (- x 1) :y y}
                           :east  {:x (+ x 1) :y y}}]
    (->> surrounding-cells
         (remove (fn [[_ cell]]
                   (let [{:keys [x y]} cell]
                     (or (neg? x)
                         (neg? y)
                         (<= width x)
                         (<= height y)))))
         (into {})
         (map (fn [[dir cel]]
                (let [index (cell-index cel maze)]
                  {:index     index
                   :cell      (nth cells index)
                   :direction dir}))))))


(defn- random-neighbor [rng {:keys [x y] :as cell} maze unvisited-cells]
  (let [new-x 0]))

(defn- populate [height width]
  (for [h (range height)
        w (range width)]
    {:i (cell-index {:x w :y h} {:width width}) :x w :y h :connected-neighbors #{} :connected-directions #{}}))

(defn- rand-from-coll [rng coll]
  (when (not-empty coll)
    (let [indx (random/random-int (count coll) rng)
          [cell coll] (util/pop-i coll indx)]
      [cell coll])))

(defn- direction-compliment [direction]
  (condp = direction
    :north :south
    :south :north
    :east :west
    :west :east))

(defn- retry-cell [rng path retried-cells]
  (as-> path $
       (filter #(not (contains? retried-cells %)) $)
       (remove nil? $)
       (random/random-nth $ rng)))

(defn cell-in-maze? [{:keys [cell]}]
  (or (:initial-cell? cell)
      (< 0 (count (:connected-neighbors cell)))))

(defn mark-neighbors [maze from-index to-index direction]
  (-> maze
      (update-in [:cells from-index :connected-neighbors] conj to-index)
      (update-in [:cells from-index :connected-directions] conj direction)
      (update-in [:cells to-index :connected-neighbors] conj from-index)
      (update-in [:cells to-index :connected-directions] conj (direction-compliment direction))))

(defn- path-gen [rng selected-index path-indexes maze unvisited-cells {:keys [prev-maze prev-unvisited-cells retried-cells] :as opts}]
  (let [cell (nth (:cells maze) selected-index)
        eligible-neighbors (filter (fn [c]
                                     (not (some path-indexes [(:index c)])))
                                   (maze-neighbors cell maze))
        {new-index :index :as new-cell} (random/random-nth eligible-neighbors rng)]
    (cond (= 0 (count eligible-neighbors)) (let [retried-cells (conj (or retried-cells #{}) selected-index)
                                                 retry-c (retry-cell rng path-indexes (or retried-cells {}))
                                                 retried-cells (conj retried-cells retry-c)]
                                             (recur rng retry-c (conj path-indexes new-index) maze (remove #(= new-index %) unvisited-cells) (assoc opts :retried-cells retried-cells))) ; recur on a previous cell in the path, mark cell with :path-checked
          (cell-in-maze? new-cell) [(mark-neighbors maze selected-index new-index (:direction new-cell))
                                    unvisited-cells]
          :else (let [new-path (conj path-indexes new-index)
                      new-maze (mark-neighbors maze selected-index new-index (:direction new-cell))
                      unvisited-cells (remove #(= new-index %) unvisited-cells)]
                  (recur rng new-index new-path new-maze (remove #(= new-index %) unvisited-cells) opts)))))

(defn- maze-gen [rng current-maze unvisited-indexes]
  ; pick a cell at random
  (let [[new-index unvisited-indexes] (rand-from-coll rng unvisited-indexes)
        [maze unvisited-indexes] (path-gen rng new-index #{new-index} current-maze unvisited-indexes {:prev-maze current-maze :prev-unvisited-cells unvisited-indexes})]
    (if (empty? unvisited-indexes)
      maze
      (recur rng maze unvisited-indexes))))

(defn- generate [{:keys [height width start-cell end-cell seed] :or {height 10 width 10 start-cell [:top :left] end-cell [:bottom :right]}}]
  (let [rng (random/rng (or seed (rand-int 1000000000)))
        cells (vec (populate height width))
        [starting-index unvisited-indexes] (rand-from-coll rng (range (count cells)))
        cells (assoc-in cells [starting-index :initial-cell?] true)
        initial-maze {:height height :width width :starting-index starting-index :cells cells}
        m (maze-gen rng initial-maze unvisited-indexes)
        new-cells (map (fn [{:keys [x y connected-directions] :as cell}]
                         (let [borders (s/difference #{:north :south :east :west} connected-directions)
                               borders (cond (and (= x 0) (= y 0)) (disj (conj borders :start) :north)
                                             (and (= x (- width 1)) (= y (- height 1))) (disj (conj borders :end) :south)
                                             :else borders)]
                           (cell-for-ui x y borders)))
                       (:cells m))
        m (assoc m :cells new-cells)]
    m))

(defn- compute-class-name [cell]
  (->> (select-keys cell [:north :east :south :west :start :end])
       (filter (comp true? last))
       (map first)
       (map name)))

(defn display-maze [{:keys [seed height width]}]
  (let [{:keys [cells] :as maze} (generate {:seed seed :height height :width width})
        cells (sort-by (juxt :y :x) cells)]
    [:div.maze.rectangle
     (for [y (range height)]
       [:div.row
        (for [x (range width)]
          (let [i (+ (* y width) x)]
            [:span.cell {:class (compute-class-name (nth cells i)) :data-test (str "(" x ", " y ")")}]))])]))
