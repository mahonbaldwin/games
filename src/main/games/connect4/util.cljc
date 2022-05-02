(ns games.connect4.util)

(defn available-moves [board]
  (->> board
       (map-indexed (fn [i c]
                      (when (< (count c) 6)
                        i)))
       (remove nil?)))

(defn generate-board-state [turns]
  (reduce
    (fn [p t]
      (assoc-in p [(:column t)] (conj (nth p (:column t)) (:player t))))
    [[] [] [] [] [] [] []]
    turns))
