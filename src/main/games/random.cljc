(ns games.random
  (:require ["seedrandom" :as sr]))

(defn rng [seed]
  (sr seed))

(defn pap [v]
  (print v)
  v)

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


;// Make a predictable pseudorandom number generator.
;var myrng = new Math.seedrandom('hello.');
;console.log(myrng());                // Always 0.9282578795792454
;console.log(myrng());                // Always 0.3752569768646784
;
;// Use "quick" to get only 32 bits of randomness in a float.
;console.log(myrng.quick());          // Always 0.7316977467853576
;
;// Use "int32" to get a 32 bit (signed) integer
;console.log(myrng.int32());
;(defn rand-integer
;  ([end] (rand-integer (clojure.core/rand-int 99999999999) end))
;  ([seed end]
;   (rng/rand-int (rng/rng seed) end)))
;
;(defn rand-num
;  ([end] (rand-num (clojure.core/rand-int 99999999999) end))
;  ([seed end]
;   (rng/rand (rng/rng seed) end)))
;
;(defn shuf
;  ([end] (shuf (clojure.core/rand-int 99999999999) end))
;  ([seed end]
;   (rng/shuffle (rng/rng seed) end)))
;
;(defn random-nth
;  ([end] (random-nth (clojure.core/rand-int 99999999999) end))
;  ([seed end]
;   (rng/rand-nth (rng/rng seed) end)))


;(let [rng (rng/rng)
;      coll (range 10)]
;  (println (rng/rand rng)) ;; 0.8188531
;  (println (rng/rand-int rng 10)) ;; 7
;  (println (rng/rand-nth rng coll)) ;; 6
;  (println (rng/random-sample rng 0.3 coll)) ;; (3 8 9)
;  (println (rng/shuffle rng coll))) ;; [3 5 2 0 1 9 4 7 8 6]
;
;(rng) can of course also take a seed:
;
;(let [seed 19239492
;      rng1 (rng/rng seed)
;      rng2 (rng/rng seed)
;      coll (range 10)]
;  (println (= (rng/rand rng1) (rng/rand rng2))) ;; true
;  (println (= (rng/shuffle rng1 coll) (rng/shuffle rng2 coll)))) ;; true
