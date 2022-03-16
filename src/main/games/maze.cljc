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

;(def temp-maze
;  {:height 4
;   :width  5
;   :cells  [(cell-for-ui 0 0 :start :west) (cell-for-ui 1 0 :north :west) (cell-for-ui 2 0 :north) (cell-for-ui 3 0 :north) (cell-for-ui 4 0 :north :east)
;            (cell-for-ui 0 1 :west) (cell-for-ui 1 1 :north) (cell-for-ui 2 1) (cell-for-ui 3 1 :west) (cell-for-ui 4 1 :west :east)
;            (cell-for-ui 0 2 :north :west) (cell-for-ui 1 2) (cell-for-ui 2 2 :north) (cell-for-ui 3 2 :west) (cell-for-ui 4 2 :west :east)
;            (cell-for-ui 0 3 :north :west :south) (cell-for-ui 1 3 :north :south) (cell-for-ui 2 3 :south) (cell-for-ui 3 3 :end :north) (cell-for-ui 4 3 :east :west :south)]})

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
  (let [indx (random/random-int (count coll) rng)
        [cell coll] (util/pop-i coll indx)]
    [cell coll]))

(defn- direction-compliment [direction]
  (condp = direction
    :north :south
    :south :north
    :east :west
    :west :east))

(defn- dead-end [maze] ;todo work on this
  (println :we've-come-to-a-dead-end)
  (cljs.pprint/pprint maze))

(defn- retry-cell [rng path maze]
  (as-> path $
       (filter #(not (:revisited %)) $)
       (random/random-nth $ rng)))

; while there are cells that have not been added to the maze
; pick a cell randomly add it to the maze
; pick another cell randomly
; create a random walk until you meet a cell already in the maze avoiding creating loops in the current walk

(defn cell-in-maze? [{:keys [cell]}]
  (or (:initial-cell? cell)
      (< 0 (count (:connected-neighbors cell)))))

(defn mark-neighbors [maze from-index to-index direction]
  (-> maze
      (update-in [:cells from-index :connected-neighbors] conj to-index)
      (update-in [:cells from-index :connected-directions] conj direction)
      (update-in [:cells to-index :connected-neighbors] conj from-index)
      (update-in [:cells to-index :connected-directions] conj (direction-compliment direction))))

(defn- path-gen [rng selected-index path-indexes maze unvisited-cells]
  (println :selected-index selected-index)
  (let [cell (nth (:cells maze) selected-index)
        eligible-neighbors (filter (fn [c]
                                     (not (some path-indexes [(:index c)])))
                                   (maze-neighbors cell maze))
        {new-index :index :as new-cell} (random/random-nth eligible-neighbors rng)]
    (println :new-cell new-cell (cell-in-maze? new-cell))
    (cond (= 0 (count eligible-neighbors)) (let [maze (assoc-in maze [:cells selected-index :revisited?] true)
                                                 retry-c (retry-cell rng path-indexes maze)]
                                             (recur rng retry-c (conj path-indexes new-index) maze (remove #(= new-index %) unvisited-cells))) ; recur on a previous cell in the path, mark cell with :path-checked
          (cell-in-maze? new-cell) [(mark-neighbors maze selected-index new-index (:direction new-cell))
                                    unvisited-cells]
          :else (let [new-path (conj path-indexes new-index)
                      new-maze (mark-neighbors maze selected-index new-index (:direction new-cell))
                      unvisited-cells (remove #(= new-index %) unvisited-cells)]
                  (recur rng new-index new-path new-maze (remove #(= new-index %) unvisited-cells)))))) ; todo temporary, change this
; does the selected cell have neighbors that are not already part of the path?
;   select a random neighbor (that exists and is not part of the path
;   is it part of the maze already
;     join it to the maze
; mark this cell as a dead-end and check one of the previous cells (it should not be possible for all parts of a path to be a dead end as at least one should be able to connect to the maze)


(defn- maze-gen [rng current-maze unvisited-indexes]
  ; pick a cell at random
  (let [[new-index unvisited-indexes] (rand-from-coll rng unvisited-indexes)
        [maze unvisited-indexes] (path-gen rng new-index #{new-index} current-maze unvisited-indexes)]
    (if (empty? unvisited-indexes)
      maze
      (recur rng maze unvisited-indexes))))

; if there are neighbors (including the maze itself)
;   pick a random neighbor and add to the list
; else
;   look at earlier part of path and try again

(defn generate [{:keys [height width start-cell end-cell seed] :or {height 10 width 10 start-cell [:top :left] end-cell [:bottom :right]}}]
  (let [rng (random/rng (or seed (rand-int 1000000000)))
        cells (vec (populate height width))
        [starting-index unvisited-indexes] (rand-from-coll rng (range (count cells)))
        cells (assoc-in cells [starting-index :initial-cell?] true)
        initial-maze {:height height :width width :starting-index starting-index :cells cells}
        m (maze-gen rng initial-maze unvisited-indexes)
        new-cells (map (fn [{:keys [x y connected-directions] :as cell}]
                         (let [borders (s/difference #{:north :south :east :west} connected-directions)
                               borders (cond (and (= x 0) (= y 0)) (conj borders :start)
                                             (and (= x (- width 1)) (= y (- height 1))) (conj borders :end)
                                             :else borders)]
                           (cell-for-ui x y borders)))
                       (:cells m))
        m (assoc m :cells new-cells)]
    (cljs.pprint/pprint m)
    m))


;(maze-gen initial-maze)))
; pick starting point (using rng) and add it to the maze with no parent or children
; call (maze-gen [start-cell [] {:height height :width width :cells [start-cell]})



