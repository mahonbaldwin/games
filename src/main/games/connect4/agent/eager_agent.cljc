(ns games.connect4.agent.eager-agent
  (:require [games.connect4.util :as util]))

; agent that always takes the first move in the list

(defn play [game]
  (first (util/available-moves (util/generate-board-state (:turns game)))))
