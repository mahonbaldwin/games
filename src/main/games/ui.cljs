(ns games.ui
  (:require [games.maze :as maze]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.schema :as rsc]
            [rum.core :as rum :refer-macros [defc]]
            [schema.core :as s]))

(defc homepage []
  [:div
   [:h2 "Welcome"]
   [:ul [:li [:a {:href (rfe/href ::maze {:width 10 :height 10 :seed (rand-int 99999999)})} "Maze"]]]])

(defc display-maze [{{path :path} :parameters}]
  [:div
   [:h2 "Maze"]
   [:navigation.nav
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

;(defc root []
;  [:div "hello?"])

(def routes
  (rf/router
    ["/"
     ["" {:name ::home
          :view homepage}]
     ["maze/w/:width/h/:height/s/:seed" {:name       ::maze
                                         :view       display-maze
                                         :parameters {:path {:width  s/Int
                                                             :height s/Int
                                                             :seed   s/Int}}}]]
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
