(ns games.connect4.view
  (:require [rum.core :as rum :refer-macros [defc]]
            [games.connect4.core :as c4]))

(defc display-board < rum/reactive [game-atom]
      (let [g (rum/react game-atom)]
        (let [board (c4/generate-board-state (:turns g))
              winner (c4/get-winner board (last (:turns g)))]
          (when winner (c4/game-over game-atom winner))
          (println :winner winner)
          [:div
           (when winner [:div (case winner
                                :p1 "Player 1"
                                :p2 "Player 2")
                         " won!"])
           [:div [:span {:on-click #(c4/reset-game game-atom)} "New Game"] " | " [:span.cell.small {:class (name (c4/whose-turn g))}] "'s turn"]
           [:div.connect4
            {:class (when winner (str "winner-" (name winner)))}
            (for [w (range 7)]
              [:div.col {:key (str "col-" w)
                         :on-click #(c4/move! game-atom w)}
               (for [h (range 6)]
                 (let [pt (-> (get-in board [w h] :none)
                              (name))]
                   [:span.cell {:key (str "cell-" w "-" h)
                                :class pt :data-coords (str "(" h ", " w ")")}
                    [:span.space]]))])]])))

(defn display [{:keys [difficulty human-player]}]
  (println :displaying-board)
  (let [p1 (cond (= human-player "p1") :human
                 :else (keyword difficulty))
        p2 (cond (= human-player "p2") :human
                 :else (keyword difficulty))]
    (display-board (c4/new-game {:player-1   p1
                                 :player-2   p2
                                 :difficulty (keyword difficulty)}))))