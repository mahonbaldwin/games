(ns games.ui
  (:require [games.maze :as maze]
            [games.random :as random]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.schema :as rsc]
            [rum.core :as rum :refer-macros [defc]]
            [schema.core :as s]))

(defonce page (atom {:location :home}))

(defn compute-class-name [cell]
  (->> (select-keys cell [:north :east :south :west :start :end])
       (filter (comp true? last))
       (map first)
       (map name)))

(defc display-maze [{:keys [height width cells]}]
  (let [cells (sort-by (juxt :y :x) cells)]
    [:div.maze.rectangle
     (for [y (range height)]
       [:div.row
        (for [x (range width)]
          (let [i (+ (* y width) x)]
            [:span.cell {:class (compute-class-name (nth cells i)) :data-test (str "(" x ", " y ")")}]))])]))

(defc root < rum/reactive []
  (let [seed 98293889112244]
    [:div
     [:h1 "A-maze-ing"]
     [:div (display-maze (maze/generate {:seed seed :height 70 :width 60}))]]))

(defn ^:export start []
  (rum/mount (root) (.getElementById js/document "app")))