(ns games.connect4.agent.random-agent
  (:require [games.connect4.util :as util]))

(defn play [game]
  (rand-nth (util/available-moves (util/generate-board-state (:turns game)))))
