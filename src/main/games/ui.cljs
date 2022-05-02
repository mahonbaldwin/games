(ns games.ui
  (:require [games.connect4.view :as connect4-view]
            [games.maze :as maze]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.schema :as rsc]
            [rum.core :as rum :refer-macros [defc]]
            [schema.core :as s]))

(defc homepage []
  [:div
   [:h2 "Welcome"]
   [:ul
    [:li [:a {:href (rfe/href ::connect-4 {:difficulty "human" :human-player "p1"})} "Connect 4"]]
    [:li [:a {:href (rfe/href ::maze {:width 10 :height 10 :seed (rand-int 99999999)})} "Maze"]]]])

(defc connect-4 [{{path :path} :parameters}]
  [:div
   [:h2 "Connect 4"]
   [:div.nav
    "New Game (select difficulty) "
    [:span [:a {:href (rfe/href ::connect-4 {:difficulty "human" :human-player "p1"})} "human"] " "]
    (let [s (rand-int 999999999)]
      (for [p ["p1" "p2"]
            d ["easy" "medium" "hard"]]
        [:span [:a {:href (rfe/href ::connect-4 {:difficulty d :human-player p :seed s})} (str p " - " d)] " "]))]
   (connect4-view/display path)])

(defc display-maze [{{path :path} :parameters}]
  [:div
   [:h2 "Maze"]
   [:div.nav
    "New Game (select size) "
    (let [s (rand-int 999999999)]
      (for [d [10 20 30 40 50]]
        [:span [:a {:href (rfe/href ::maze {:width d :height d :seed s})} d "x" d] " "]))]
   (maze/display-maze path)])

(defonce page (atom nil))

(defc root < rum/reactive []
  (let [p (rum/react page)]
    [:div
     [:a {:href (rfe/href ::home)} [:h1 "MB Games"]]
     (when p
       (let [view (:view (:data p))]
         (view p)))]))


(def routes
  (rf/router
    ["/"
     ["" {:name ::home
          :view homepage}]
     ["connect4/:difficulty/:human-player" {:name ::connect-4
                                            :view connect-4
                                            :parameters {:path {:difficulty s/Str
                                                                :human-player s/Str}}}]
     ["maze/w/:width/h/:height/s/:seed" {:name       ::maze
                                         :view       display-maze
                                         :parameters {:path {:width  s/Int
                                                             :height s/Int
                                                             :seed   s/Str}}}]]
    {:data {:coercion rsc/coercion}}))

(defn ^:export start []
  (rfe/start!
    routes
    (fn [new-match]
      (println :new-match new-match)
      (swap! page (fn [old-match]
                    (println :old-match old-match)
                    (when new-match
                      (assoc new-match :controllers (rfc/apply-controllers (:controllers old-match) new-match))))))
    {:use-fragment false})
  (rum/mount (root) (.getElementById js/document "app")))
