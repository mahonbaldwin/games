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
var len__4864__auto___54423 = arguments.length;
var i__4865__auto___54424 = (0);
while(true){
if((i__4865__auto___54424 < len__4864__auto___54423)){
args__4870__auto__.push((arguments[i__4865__auto___54424]));

var G__54425 = (i__4865__auto___54424 + (1));
i__4865__auto___54424 = G__54425;
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
var G__54426 = rn_fn;
var G__54427 = (n - (1));
var G__54428 = func;
var G__54429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = return_val;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(rn_fn) : func.call(null,rn_fn)));
rn_fn = G__54426;
n = G__54427;
func = G__54428;
return_val = G__54429;
continue;
}
break;
}
}));

(maze_generator.random.looper.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(maze_generator.random.looper.cljs$lang$applyTo = (function (seq54419){
var G__54420 = cljs.core.first(seq54419);
var seq54419__$1 = cljs.core.next(seq54419);
var G__54421 = cljs.core.first(seq54419__$1);
var seq54419__$2 = cljs.core.next(seq54419__$1);
var G__54422 = cljs.core.first(seq54419__$2);
var seq54419__$3 = cljs.core.next(seq54419__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54420,G__54421,G__54422,seq54419__$3);
}));


//# sourceMappingURL=maze_generator.random.js.map
