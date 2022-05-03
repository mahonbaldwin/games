(ns games.connect4.core
 (:require [games.connect4.util :as util]
           [games.connect4.agent.random-agent :as rand-agent]
           [games.connect4.agent.eager-agent :as eager-agent]))

;(defonce game (atom {:turns []}))

(defn new-game
  ([] (new-game {}))
  ([{:keys [player-1 player-2 difficulty] :or {player-1 :human player-2 :human} :as opts}]
   (atom (merge {:turns []
                 :p1    player-1
                 :p2    player-2}
                (when difficulty {:difficulty difficulty})))))

(defn reset-game [game-atom]
  (reset! game-atom {:turns []}))

(defn generate-board-state [turns]
  (util/generate-board-state turns))

;(add-watch game :game-state
;           (fn [k a old-state new-state]
;             (println "-- Game Atom Changed --")
;             (println "key" k)
;             (println "new-state")
;             (cljs.pprint/pprint new-state)))

(defn game-over [game winner]
  (swap! game (fn [prev-game]
                (assoc prev-game :winner winner))))

(defn nav-to-neighbor
  "Goes `direction` n times"
  [[x y] n direction]
  ; north add to y
  ; south sub from y
  ; east add to x
  ; west sub from x
  (case direction
    :n [x (+ y n)]
    :s [x (- y n)]
    :e [(+ x n) y]
    :w [(- x n) y]
    :se [(+ x n) (- y n)]
    :ne [(+ x n) (+ y n)]
    :nw [(- x n) (+ y n)]
    :sw [(- x n) (- y n)]))

(defn valid-cell? [[x y]]
  (and (< -1 x 7)
       (< -1 y 6)))

(defn all-valid? [cells]
  (->> (map #(valid-cell? %) cells)
       (every? true?)))

(defn filter-contain-cell? [cell cells]
  (filter (fn [r]
            (some #(= % cell) r))
          cells))

(defn all= [board cells]
  (->> cells
       (map #(get-in board %))
       (apply =)))

(defn first-valid-in-direction
  "gets the first valid cell from provided ordinance in the direction provided"
  ([cell direction] (first-valid-in-direction cell direction 0))
  ([[x y :as cell] direction attempts]
   (if (> attempts 20)
     (do (println "Invalid cell attempted." :attempts attempts :direction direction :cell cell)
       :invalid!)
     (if (valid-cell? cell)
       cell
       (recur (nav-to-neighbor [x y] 1 direction) direction (inc attempts))))))

(defn opposite [dir]
  (case dir
    :n :s
    :ne :sw
    :e :w
    :se :nw
    :s :n
    :sw :ne
    :w :e
    :nw :se))

(defn get-vertical-ranges [cell]
  (->> [(map #(nav-to-neighbor cell % :s)
             (range 4))]
       (filter all-valid?)))

(defn get-range [cell from-dir]
  (let [opp-dir (opposite from-dir)
        first-cell (-> (nav-to-neighbor cell 3 from-dir)
                       (first-valid-in-direction opp-dir))]
    (->> (map #(nav-to-neighbor first-cell % opp-dir) (range 4))
         (map (fn [start-cell]
                (map #(nav-to-neighbor start-cell % opp-dir) (range 4))))
         (filter all-valid?)
         (filter-contain-cell? cell))))

(defn get-possible-ranges
  "takes a board, a cell of [x y], and a direction for ranges
  ex. cell is part of four possible horizontal ranges, one diagonal range from nw and another from sw
  cell = [3 0], dir = :w -> [[[0 0] [1 0] [2 0] [3 0]], ; horizontal
                             [[1 0] [2 0] [3 0] [4 0]],
                             [[2 0] [3 0] [4 0] [5 0]],
                             [[3 0] [4 0] [5 0] [6 0]],
                             [[0 3] [1 2] [2 1] [3 0]], ; from nw
                             [[3 0] [4 1] [5 2] [6 3]]] ' from sw
  ex. cell = [0 0], dir = :s -> []"
  [cell-played]
  (let [ranges (concat (get-vertical-ranges cell-played)
                 (get-range cell-played :w)
                 (get-range cell-played :nw)
                 (get-range cell-played :sw))]
    ranges))

(defn last-played-a-win? [board cell]
  (->> (get-possible-ranges cell)
       (map #(all= board %))
       (some true?)))

(defn get-winner [board last-turn]
  (println :last-turn last-turn)
  (let [x (:column last-turn)
        y (when x (-> (nth board x) count dec))]
    (when (last-played-a-win? board [x y])
      (:player last-turn))))


(defn whose-turn [{turns :turns}]
  (cond (even? (count turns)) :p1
        (odd? (count turns)) :p2))

(defn move! [game column]
  (let [{:keys [turns winner p1 p2]} @game
        player (whose-turn @game)
        next-player (if (= player :p1)
                      :p2
                      :p1)]
    (println :***** :game)
    (cljs.pprint/pprint @game)
    (when (nil? winner)
      (swap! game (fn [prev-game]
                    (update prev-game :turns #(conj % {:player player :column column}))))
      (when (not (get-winner (generate-board-state (:turns @game)) (last (:turns @game))))
        (cond (= :easy (get @game next-player))
              (swap! game (fn [prev-game]
                            (let [agent-choice (eager-agent/play @game)]
                              (println :agent-choice agent-choice)
                              (update prev-game :turns #(conj % {:player next-player :column agent-choice})))))
              :else nil)))))

(comment
  (defn visualize-board [b]
    (map println b)))


(comment ;vertical win for player 1
  (def game (new-game {}))
  (mapv #(move! game %) [1 2 1 2 1 2 1])

  (get-winner (util/generate-board-state (:turns @game)) (last (:turns @game))))

(comment ;horizontal win for player 2
  (def game (new-game {}))
  (mapv #(move! game %) [0 1 1 2 2 3 3 4])

  (get-winner (util/generate-board-state (:turns @game)) (last (:turns @game))))

(comment ;diagonal win for player 1 from nw
  (def game (new-game {}))
  (mapv #(move! game %) [1 0 0 0 0 1 1 2 2 6 3])
  (util/generate-board-state (:turns @game))

  (get-winner (util/generate-board-state (:turns @game)) (last (:turns @game))))

(comment ;diagonal win for player 2 from se
  (def game (new-game {}))
  (mapv #(move! game %) [4 5 5 5 4 4 3 5 0 3 3 2])

  (def board (util/generate-board-state (:turns @game)))

  (visualize-board (util/generate-board-state (:turns @game)))

  (get-winner (util/generate-board-state (:turns @game)) (last (:turns @game))))

(comment ;diagonal win for player 2 from se
  (def game (new-game {}))
  (mapv #(move! game %) [4 5 5 5 4 4 3 5 0 3 3 2])

  (visualize-board (generate-board-state (:turns @game)))

  (get-winner (generate-board-state (:turns @game)) (last (:turns @game))))
