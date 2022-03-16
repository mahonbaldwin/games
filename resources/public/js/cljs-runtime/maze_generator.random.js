goog.provide('maze_generator.random');
var module$node_modules$seedrandom$index=shadow.js.require("module$node_modules$seedrandom$index", {});
maze_generator.random.rng = (function maze_generator$random$rng(seed){
return module$node_modules$seedrandom$index(seed);
});
maze_generator.random.pap = (function maze_generator$random$pap(v){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));

return v;
});
maze_generator.random.random_int = (function maze_generator$random$random_int(n,rn_fn){
return Math.floor(((rn_fn.cljs$core$IFn$_invoke$arity$0 ? rn_fn.cljs$core$IFn$_invoke$arity$0() : rn_fn.call(null)) * n));
});
maze_generator.random.random_nth = (function maze_generator$random$random_nth(coll,rn){
if(cljs.core.truth_(cljs.core.not_empty(coll))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,maze_generator.random.random_int(cljs.core.count(coll),rn));
} else {
return null;
}
});
maze_generator.random.looper = (function maze_generator$random$looper(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45752 = arguments.length;
var i__4865__auto___45753 = (0);
while(true){
if((i__4865__auto___45753 < len__4864__auto___45752)){
args__4870__auto__.push((arguments[i__4865__auto___45753]));

var G__45754 = (i__4865__auto___45753 + (1));
i__4865__auto___45753 = G__45754;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return maze_generator.random.looper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(maze_generator.random.looper.cljs$core$IFn$_invoke$arity$variadic = (function (rn_fn,n,func,return_val){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return return_val;
} else {
var G__45755 = rn_fn;
var G__45756 = (n - (1));
var G__45757 = func;
var G__45758 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = return_val;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(rn_fn) : func.call(null,rn_fn)));
rn_fn = G__45755;
n = G__45756;
func = G__45757;
return_val = G__45758;
continue;
}
break;
}
}));

(maze_generator.random.looper.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(maze_generator.random.looper.cljs$lang$applyTo = (function (seq45748){
var G__45749 = cljs.core.first(seq45748);
var seq45748__$1 = cljs.core.next(seq45748);
var G__45750 = cljs.core.first(seq45748__$1);
var seq45748__$2 = cljs.core.next(seq45748__$1);
var G__45751 = cljs.core.first(seq45748__$2);
var seq45748__$3 = cljs.core.next(seq45748__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45749,G__45750,G__45751,seq45748__$3);
}));


//# sourceMappingURL=maze_generator.random.js.map
