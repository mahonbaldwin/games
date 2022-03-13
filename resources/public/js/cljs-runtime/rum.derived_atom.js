goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__52262 = arguments.length;
switch (G__52262) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__52264 = opts;
var map__52264__$1 = cljs.core.__destructure_map(map__52264);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52264__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52264__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__52265 = cljs.core.count(refs);
switch (G__52265) {
case (1):
var vec__52269 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52269,(0),null);
return (function (){
var G__52272 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52272) : f.call(null,G__52272));
});

break;
case (2):
var vec__52273 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52273,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52273,(1),null);
return (function (){
var G__52276 = cljs.core.deref(a);
var G__52277 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__52276,G__52277) : f.call(null,G__52276,G__52277));
});

break;
case (3):
var vec__52278 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52278,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52278,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52278,(2),null);
return (function (){
var G__52281 = cljs.core.deref(a);
var G__52282 = cljs.core.deref(b);
var G__52283 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__52281,G__52282,G__52283) : f.call(null,G__52281,G__52282,G__52283));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__52284 = ref;
cljs.core.reset_BANG_(G__52284,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__52284;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__52285_52297 = cljs.core.seq(refs);
var chunk__52286_52298 = null;
var count__52287_52299 = (0);
var i__52288_52300 = (0);
while(true){
if((i__52288_52300 < count__52287_52299)){
var ref_52301__$1 = chunk__52286_52298.cljs$core$IIndexed$_nth$arity$2(null,i__52288_52300);
cljs.core.add_watch(ref_52301__$1,key,watch);


var G__52303 = seq__52285_52297;
var G__52304 = chunk__52286_52298;
var G__52305 = count__52287_52299;
var G__52306 = (i__52288_52300 + (1));
seq__52285_52297 = G__52303;
chunk__52286_52298 = G__52304;
count__52287_52299 = G__52305;
i__52288_52300 = G__52306;
continue;
} else {
var temp__5753__auto___52308 = cljs.core.seq(seq__52285_52297);
if(temp__5753__auto___52308){
var seq__52285_52310__$1 = temp__5753__auto___52308;
if(cljs.core.chunked_seq_QMARK_(seq__52285_52310__$1)){
var c__4679__auto___52311 = cljs.core.chunk_first(seq__52285_52310__$1);
var G__52312 = cljs.core.chunk_rest(seq__52285_52310__$1);
var G__52313 = c__4679__auto___52311;
var G__52314 = cljs.core.count(c__4679__auto___52311);
var G__52315 = (0);
seq__52285_52297 = G__52312;
chunk__52286_52298 = G__52313;
count__52287_52299 = G__52314;
i__52288_52300 = G__52315;
continue;
} else {
var ref_52316__$1 = cljs.core.first(seq__52285_52310__$1);
cljs.core.add_watch(ref_52316__$1,key,watch);


var G__52317 = cljs.core.next(seq__52285_52310__$1);
var G__52318 = null;
var G__52319 = (0);
var G__52320 = (0);
seq__52285_52297 = G__52317;
chunk__52286_52298 = G__52318;
count__52287_52299 = G__52319;
i__52288_52300 = G__52320;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
