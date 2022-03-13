goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51182,p__51183){
var map__51184 = p__51182;
var map__51184__$1 = cljs.core.__destructure_map(map__51184);
var svc = map__51184__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51185 = p__51183;
var map__51185__$1 = cljs.core.__destructure_map(map__51185);
var msg = map__51185__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51185__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51185__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51185__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51185__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51195,p__51196){
var map__51197 = p__51195;
var map__51197__$1 = cljs.core.__destructure_map(map__51197);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51197__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51198 = p__51196;
var map__51198__$1 = cljs.core.__destructure_map(map__51198);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51204,p__51205){
var map__51211 = p__51204;
var map__51211__$1 = cljs.core.__destructure_map(map__51211);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51211__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51211__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51212 = p__51205;
var map__51212__$1 = cljs.core.__destructure_map(map__51212);
var msg = map__51212__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51212__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51217,tid){
var map__51218 = p__51217;
var map__51218__$1 = cljs.core.__destructure_map(map__51218);
var svc = map__51218__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51218__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51227 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51228 = null;
var count__51229 = (0);
var i__51230 = (0);
while(true){
if((i__51230 < count__51229)){
var vec__51256 = chunk__51228.cljs$core$IIndexed$_nth$arity$2(null,i__51230);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51256,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51256,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51281 = seq__51227;
var G__51282 = chunk__51228;
var G__51283 = count__51229;
var G__51284 = (i__51230 + (1));
seq__51227 = G__51281;
chunk__51228 = G__51282;
count__51229 = G__51283;
i__51230 = G__51284;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51227);
if(temp__5753__auto__){
var seq__51227__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51227__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51227__$1);
var G__51285 = cljs.core.chunk_rest(seq__51227__$1);
var G__51286 = c__4679__auto__;
var G__51287 = cljs.core.count(c__4679__auto__);
var G__51288 = (0);
seq__51227 = G__51285;
chunk__51228 = G__51286;
count__51229 = G__51287;
i__51230 = G__51288;
continue;
} else {
var vec__51264 = cljs.core.first(seq__51227__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51264,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51264,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51289 = cljs.core.next(seq__51227__$1);
var G__51290 = null;
var G__51291 = (0);
var G__51292 = (0);
seq__51227 = G__51289;
chunk__51228 = G__51290;
count__51229 = G__51291;
i__51230 = G__51292;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51219_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51219_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51220_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51220_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51221_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51221_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51222_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51222_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51272){
var map__51273 = p__51272;
var map__51273__$1 = cljs.core.__destructure_map(map__51273);
var svc = map__51273__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51273__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51273__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
