goog.provide('maze_generator.core');
maze_generator.core.cell = (function maze_generator$core$cell(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43137 = arguments.length;
var i__4865__auto___43138 = (0);
while(true){
if((i__4865__auto___43138 < len__4864__auto___43137)){
args__4870__auto__.push((arguments[i__4865__auto___43138]));

var G__43139 = (i__4865__auto___43138 + (1));
i__4865__auto___43138 = G__43139;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var cells = cljs.core.set(opts);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"north","north",651323902),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"north","north",651323902)),new cljs.core.Keyword(null,"east","east",1189821678),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"east","east",1189821678)),new cljs.core.Keyword(null,"south","south",1586796293),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"south","south",1586796293)),new cljs.core.Keyword(null,"west","west",708776677),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"west","west",708776677)),new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"start","start",-355208981)),new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"end","end",-268185958))], null);
}));

(maze_generator.core.cell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(maze_generator.core.cell.cljs$lang$applyTo = (function (seq43136){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43136));
}));

maze_generator.core.maze = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"south","south",1586796293)], 0)),maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293)], 0)),maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293)], 0)),maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"east","east",1189821678)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"west","west",708776677)], 0)),maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"south","south",1586796293)], 0)),maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"south","south",1586796293)], 0)),maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"south","south",1586796293)], 0)),maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"south","south",1586796293)], 0)),maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"south","south",1586796293)], 0)),maze_generator.core.cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"end","end",-268185958)], 0))], null)], null);

//# sourceMappingURL=maze_generator.core.js.map
