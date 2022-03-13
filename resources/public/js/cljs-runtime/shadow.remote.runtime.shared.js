goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__47705,res){
var map__47706 = p__47705;
var map__47706__$1 = cljs.core.__destructure_map(map__47706);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47706__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47706__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__47707 = res;
var G__47707__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47707,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__47707);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47707__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__47707__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__47711 = arguments.length;
switch (G__47711) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__47715,msg,handlers,timeout_after_ms){
var map__47716 = p__47715;
var map__47716__$1 = cljs.core.__destructure_map(map__47716);
var runtime = map__47716__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47716__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47789 = arguments.length;
var i__4865__auto___47790 = (0);
while(true){
if((i__4865__auto___47790 < len__4864__auto___47789)){
args__4870__auto__.push((arguments[i__4865__auto___47790]));

var G__47792 = (i__4865__auto___47790 + (1));
i__4865__auto___47790 = G__47792;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47721,ev,args){
var map__47722 = p__47721;
var map__47722__$1 = cljs.core.__destructure_map(map__47722);
var runtime = map__47722__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47722__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__47723 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47726 = null;
var count__47727 = (0);
var i__47728 = (0);
while(true){
if((i__47728 < count__47727)){
var ext = chunk__47726.cljs$core$IIndexed$_nth$arity$2(null,i__47728);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47793 = seq__47723;
var G__47794 = chunk__47726;
var G__47795 = count__47727;
var G__47796 = (i__47728 + (1));
seq__47723 = G__47793;
chunk__47726 = G__47794;
count__47727 = G__47795;
i__47728 = G__47796;
continue;
} else {
var G__47797 = seq__47723;
var G__47798 = chunk__47726;
var G__47799 = count__47727;
var G__47800 = (i__47728 + (1));
seq__47723 = G__47797;
chunk__47726 = G__47798;
count__47727 = G__47799;
i__47728 = G__47800;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47723);
if(temp__5753__auto__){
var seq__47723__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47723__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47723__$1);
var G__47801 = cljs.core.chunk_rest(seq__47723__$1);
var G__47802 = c__4679__auto__;
var G__47803 = cljs.core.count(c__4679__auto__);
var G__47804 = (0);
seq__47723 = G__47801;
chunk__47726 = G__47802;
count__47727 = G__47803;
i__47728 = G__47804;
continue;
} else {
var ext = cljs.core.first(seq__47723__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47805 = cljs.core.next(seq__47723__$1);
var G__47806 = null;
var G__47807 = (0);
var G__47808 = (0);
seq__47723 = G__47805;
chunk__47726 = G__47806;
count__47727 = G__47807;
i__47728 = G__47808;
continue;
} else {
var G__47809 = cljs.core.next(seq__47723__$1);
var G__47810 = null;
var G__47811 = (0);
var G__47812 = (0);
seq__47723 = G__47809;
chunk__47726 = G__47810;
count__47727 = G__47811;
i__47728 = G__47812;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq47717){
var G__47718 = cljs.core.first(seq47717);
var seq47717__$1 = cljs.core.next(seq47717);
var G__47719 = cljs.core.first(seq47717__$1);
var seq47717__$2 = cljs.core.next(seq47717__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47718,G__47719,seq47717__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__47734,p__47735){
var map__47736 = p__47734;
var map__47736__$1 = cljs.core.__destructure_map(map__47736);
var runtime = map__47736__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47736__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47737 = p__47735;
var map__47737__$1 = cljs.core.__destructure_map(map__47737);
var msg = map__47737__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47737__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__47738 = cljs.core.deref(state_ref);
var map__47738__$1 = cljs.core.__destructure_map(map__47738);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47738__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47738__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__47740){
var map__47742 = p__47740;
var map__47742__$1 = cljs.core.__destructure_map(map__47742);
var runtime = map__47742__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47742__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__47743,msg){
var map__47744 = p__47743;
var map__47744__$1 = cljs.core.__destructure_map(map__47744);
var runtime = map__47744__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47744__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__47747,key,p__47748){
var map__47749 = p__47747;
var map__47749__$1 = cljs.core.__destructure_map(map__47749);
var state = map__47749__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47749__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__47750 = p__47748;
var map__47750__$1 = cljs.core.__destructure_map(map__47750);
var spec = map__47750__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47750__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__47751,key,spec){
var map__47752 = p__47751;
var map__47752__$1 = cljs.core.__destructure_map(map__47752);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47752__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__47753_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__47753_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__47754_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__47754_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__47755_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__47755_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__47756_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__47756_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__47757_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__47757_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__47760,key){
var map__47761 = p__47760;
var map__47761__$1 = cljs.core.__destructure_map(map__47761);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47761__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__47762,msg){
var map__47763 = p__47762;
var map__47763__$1 = cljs.core.__destructure_map(map__47763);
var runtime = map__47763__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47763__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__47767,p__47768){
var map__47769 = p__47767;
var map__47769__$1 = cljs.core.__destructure_map(map__47769);
var runtime = map__47769__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47769__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47770 = p__47768;
var map__47770__$1 = cljs.core.__destructure_map(map__47770);
var msg = map__47770__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47770__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47770__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__47771 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47773 = null;
var count__47774 = (0);
var i__47775 = (0);
while(true){
if((i__47775 < count__47774)){
var map__47782 = chunk__47773.cljs$core$IIndexed$_nth$arity$2(null,i__47775);
var map__47782__$1 = cljs.core.__destructure_map(map__47782);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47782__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47824 = seq__47771;
var G__47825 = chunk__47773;
var G__47826 = count__47774;
var G__47827 = (i__47775 + (1));
seq__47771 = G__47824;
chunk__47773 = G__47825;
count__47774 = G__47826;
i__47775 = G__47827;
continue;
} else {
var G__47828 = seq__47771;
var G__47829 = chunk__47773;
var G__47830 = count__47774;
var G__47831 = (i__47775 + (1));
seq__47771 = G__47828;
chunk__47773 = G__47829;
count__47774 = G__47830;
i__47775 = G__47831;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47771);
if(temp__5753__auto__){
var seq__47771__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47771__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47771__$1);
var G__47833 = cljs.core.chunk_rest(seq__47771__$1);
var G__47834 = c__4679__auto__;
var G__47835 = cljs.core.count(c__4679__auto__);
var G__47836 = (0);
seq__47771 = G__47833;
chunk__47773 = G__47834;
count__47774 = G__47835;
i__47775 = G__47836;
continue;
} else {
var map__47783 = cljs.core.first(seq__47771__$1);
var map__47783__$1 = cljs.core.__destructure_map(map__47783);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47783__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47837 = cljs.core.next(seq__47771__$1);
var G__47838 = null;
var G__47839 = (0);
var G__47840 = (0);
seq__47771 = G__47837;
chunk__47773 = G__47838;
count__47774 = G__47839;
i__47775 = G__47840;
continue;
} else {
var G__47841 = cljs.core.next(seq__47771__$1);
var G__47842 = null;
var G__47843 = (0);
var G__47844 = (0);
seq__47771 = G__47841;
chunk__47773 = G__47842;
count__47774 = G__47843;
i__47775 = G__47844;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
