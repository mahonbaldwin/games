goog.provide('maze_generator.util');
/**
 * returns the ith value and returns a coll 
 */
maze_generator.util.pop_i = (function maze_generator$util$pop_i(coll,i){
var coll__$1 = cljs.core.vec(coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,i),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll__$1,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll__$1,((1) + i)))], null);
});

//# sourceMappingURL=maze_generator.util.js.map
