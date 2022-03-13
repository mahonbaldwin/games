goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__52831,match){
var map__52832 = p__52831;
var map__52832__$1 = cljs.core.__destructure_map(map__52832);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52832__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52832__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52832__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4251__auto__ = identity;
if(cljs.core.truth_(and__4251__auto__)){
return parameters;
} else {
return and__4251__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__52833(s__52834){
return (new cljs.core.LazySeq(null,(function (){
var s__52834__$1 = s__52834;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52834__$1);
if(temp__5753__auto__){
var s__52834__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52834__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52834__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52836 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52835 = (0);
while(true){
if((i__52835 < size__4651__auto__)){
var vec__52837 = cljs.core._nth(c__4650__auto__,i__52835);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52837,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52837,(1),null);
cljs.core.chunk_append(b__52836,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__52852 = (i__52835 + (1));
i__52835 = G__52852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52836),reitit$frontend$controllers$get_identity_$_iter__52833(cljs.core.chunk_rest(s__52834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52836),null);
}
} else {
var vec__52840 = cljs.core.first(s__52834__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52840,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52840,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__52833(cljs.core.rest(s__52834__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
var G__52843 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52843) : f.call(null,G__52843));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__52844_52853 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__52845_52854 = null;
var count__52846_52855 = (0);
var i__52847_52856 = (0);
while(true){
if((i__52847_52856 < count__52846_52855)){
var controller_52857 = chunk__52845_52854.cljs$core$IIndexed$_nth$arity$2(null,i__52847_52856);
reitit.frontend.controllers.apply_controller(controller_52857,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__52858 = seq__52844_52853;
var G__52859 = chunk__52845_52854;
var G__52860 = count__52846_52855;
var G__52861 = (i__52847_52856 + (1));
seq__52844_52853 = G__52858;
chunk__52845_52854 = G__52859;
count__52846_52855 = G__52860;
i__52847_52856 = G__52861;
continue;
} else {
var temp__5753__auto___52862 = cljs.core.seq(seq__52844_52853);
if(temp__5753__auto___52862){
var seq__52844_52863__$1 = temp__5753__auto___52862;
if(cljs.core.chunked_seq_QMARK_(seq__52844_52863__$1)){
var c__4679__auto___52864 = cljs.core.chunk_first(seq__52844_52863__$1);
var G__52865 = cljs.core.chunk_rest(seq__52844_52863__$1);
var G__52866 = c__4679__auto___52864;
var G__52867 = cljs.core.count(c__4679__auto___52864);
var G__52868 = (0);
seq__52844_52853 = G__52865;
chunk__52845_52854 = G__52866;
count__52846_52855 = G__52867;
i__52847_52856 = G__52868;
continue;
} else {
var controller_52869 = cljs.core.first(seq__52844_52863__$1);
reitit.frontend.controllers.apply_controller(controller_52869,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__52870 = cljs.core.next(seq__52844_52863__$1);
var G__52871 = null;
var G__52872 = (0);
var G__52873 = (0);
seq__52844_52853 = G__52870;
chunk__52845_52854 = G__52871;
count__52846_52855 = G__52872;
i__52847_52856 = G__52873;
continue;
}
} else {
}
}
break;
}

var seq__52848_52874 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__52849_52875 = null;
var count__52850_52876 = (0);
var i__52851_52877 = (0);
while(true){
if((i__52851_52877 < count__52850_52876)){
var controller_52878 = chunk__52849_52875.cljs$core$IIndexed$_nth$arity$2(null,i__52851_52877);
reitit.frontend.controllers.apply_controller(controller_52878,new cljs.core.Keyword(null,"start","start",-355208981));


var G__52879 = seq__52848_52874;
var G__52880 = chunk__52849_52875;
var G__52881 = count__52850_52876;
var G__52882 = (i__52851_52877 + (1));
seq__52848_52874 = G__52879;
chunk__52849_52875 = G__52880;
count__52850_52876 = G__52881;
i__52851_52877 = G__52882;
continue;
} else {
var temp__5753__auto___52883 = cljs.core.seq(seq__52848_52874);
if(temp__5753__auto___52883){
var seq__52848_52884__$1 = temp__5753__auto___52883;
if(cljs.core.chunked_seq_QMARK_(seq__52848_52884__$1)){
var c__4679__auto___52885 = cljs.core.chunk_first(seq__52848_52884__$1);
var G__52886 = cljs.core.chunk_rest(seq__52848_52884__$1);
var G__52887 = c__4679__auto___52885;
var G__52888 = cljs.core.count(c__4679__auto___52885);
var G__52889 = (0);
seq__52848_52874 = G__52886;
chunk__52849_52875 = G__52887;
count__52850_52876 = G__52888;
i__52851_52877 = G__52889;
continue;
} else {
var controller_52890 = cljs.core.first(seq__52848_52884__$1);
reitit.frontend.controllers.apply_controller(controller_52890,new cljs.core.Keyword(null,"start","start",-355208981));


var G__52891 = cljs.core.next(seq__52848_52884__$1);
var G__52892 = null;
var G__52893 = (0);
var G__52894 = (0);
seq__52848_52874 = G__52891;
chunk__52849_52875 = G__52892;
count__52850_52876 = G__52893;
i__52851_52877 = G__52894;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
