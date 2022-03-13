(ns maze-generator.util)

(defn pop-i
  "returns the ith value and returns a coll "
  [coll i]
  (let [coll (vec coll)] ; it doesn't work if you don't convert it to a vector
    [(nth coll i) (concat (subvec coll 0 i) (subvec coll (+ 1 i)))]))
