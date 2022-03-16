(ns games.random
  (:require ["seedrandom" :as sr]))

(defn rng [seed]
  (sr seed))

(defn random-int
  ([n rn-fn]
   (Math/floor (* (rn-fn) n))))

(defn random-nth [coll rn]
  (when (not-empty coll)
    (nth coll (random-int (count coll) rn))))

(defn looper [rn-fn n func & return-val]
  (if (= n 0)
    return-val
    (recur rn-fn (- n 1) func (conj (or return-val []) (func rn-fn)))))
