(ns maze-generator.ui
  (:require [maze-generator.maze :as maze]
            [maze-generator.random :as random]
            [reitit.core :as r]
            [reitit.frontend :as rfe]
            [rum.core :as rum :refer-macros [defc]]))

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
  (let [seed 98293889112244
        r (random/rng seed)]
    [:div
     [:h1 "A-maze-ing"]
     [:div (display-maze (maze/generate {:seed seed :height 40 :width 80}))]]))

(defn ^:export start []
  (rum/mount (root) (.getElementById js/document "app")))