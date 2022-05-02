(ns games.connect4-test
  (:require [clojure.test :refer :all]
            [games.core :as c4]))

(defn visualize-board [b]
  (mapv println b))

(defn falsey? [v]
  (or (false? v)
      (nil? v)))

(defn winner-from-game [moves]
  (let [game-atom (c4/new-game)
        _ (mapv #(c4/move! game-atom %) moves)
        b1 (c4/generate-board-state (:turns @game-atom))
        w1 (c4/get-winner b1 (last (:turns @game-atom)))]
    w1))

(deftest get-winner
  (testing "Does four horizontal markers from the same player indicate they won?"
    ; no win
    (is (nil? (winner-from-game [0 1 1 2 2 3 3])))
    (is (nil? (winner-from-game [0 0 1 1 2 2])))
    (is (nil? (winner-from-game [1 2 1 2 1 2])))
    (is (nil? (winner-from-game [0 1 1 1 2 2 2 3 3 3])))
    (is (nil? (winner-from-game [6 5 4 4 4 3 3 3 2 2 2])))
    ; horizontal wins
    (is (= :p2 (winner-from-game [0 1 1 2 2 3 3 4])))
    (is (= :p1 (winner-from-game [0 0 1 1 2 2 3])))
    ; vertical win
    (is (= :p1 (winner-from-game [1 2 1 2 1 2 1])))
    ; diagonal win from sw
    (is (= :p1 (winner-from-game [0 1 1 1 2 2 2 3 3 3 3])))
    ; diagonal win from nw
    (is (= :p2 (winner-from-game [6 5 4 4 4 3 3 3 2 2 2 2])))))



