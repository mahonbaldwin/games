goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53923 = arguments.length;
var i__4865__auto___53924 = (0);
while(true){
if((i__4865__auto___53924 < len__4864__auto___53923)){
args__4870__auto__.push((arguments[i__4865__auto___53924]));

var G__53925 = (i__4865__auto___53924 + (1));
i__4865__auto___53924 = G__53925;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53503){
var G__53504 = cljs.core.first(seq53503);
var seq53503__$1 = cljs.core.next(seq53503);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53504,seq53503__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53505 = cljs.core.seq(sources);
var chunk__53506 = null;
var count__53507 = (0);
var i__53508 = (0);
while(true){
if((i__53508 < count__53507)){
var map__53517 = chunk__53506.cljs$core$IIndexed$_nth$arity$2(null,i__53508);
var map__53517__$1 = cljs.core.__destructure_map(map__53517);
var src = map__53517__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53517__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53517__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53517__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53517__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53518){var e_53926 = e53518;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53926);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53926.message)].join('')));
}

var G__53927 = seq__53505;
var G__53928 = chunk__53506;
var G__53929 = count__53507;
var G__53930 = (i__53508 + (1));
seq__53505 = G__53927;
chunk__53506 = G__53928;
count__53507 = G__53929;
i__53508 = G__53930;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53505);
if(temp__5753__auto__){
var seq__53505__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53505__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53505__$1);
var G__53931 = cljs.core.chunk_rest(seq__53505__$1);
var G__53932 = c__4679__auto__;
var G__53933 = cljs.core.count(c__4679__auto__);
var G__53934 = (0);
seq__53505 = G__53931;
chunk__53506 = G__53932;
count__53507 = G__53933;
i__53508 = G__53934;
continue;
} else {
var map__53523 = cljs.core.first(seq__53505__$1);
var map__53523__$1 = cljs.core.__destructure_map(map__53523);
var src = map__53523__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53524){var e_53935 = e53524;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53935);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53935.message)].join('')));
}

var G__53936 = cljs.core.next(seq__53505__$1);
var G__53937 = null;
var G__53938 = (0);
var G__53939 = (0);
seq__53505 = G__53936;
chunk__53506 = G__53937;
count__53507 = G__53938;
i__53508 = G__53939;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__53525 = cljs.core.seq(js_requires);
var chunk__53526 = null;
var count__53527 = (0);
var i__53528 = (0);
while(true){
if((i__53528 < count__53527)){
var js_ns = chunk__53526.cljs$core$IIndexed$_nth$arity$2(null,i__53528);
var require_str_53940 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53940);


var G__53941 = seq__53525;
var G__53942 = chunk__53526;
var G__53943 = count__53527;
var G__53944 = (i__53528 + (1));
seq__53525 = G__53941;
chunk__53526 = G__53942;
count__53527 = G__53943;
i__53528 = G__53944;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53525);
if(temp__5753__auto__){
var seq__53525__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53525__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53525__$1);
var G__53945 = cljs.core.chunk_rest(seq__53525__$1);
var G__53946 = c__4679__auto__;
var G__53947 = cljs.core.count(c__4679__auto__);
var G__53948 = (0);
seq__53525 = G__53945;
chunk__53526 = G__53946;
count__53527 = G__53947;
i__53528 = G__53948;
continue;
} else {
var js_ns = cljs.core.first(seq__53525__$1);
var require_str_53949 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53949);


var G__53950 = cljs.core.next(seq__53525__$1);
var G__53951 = null;
var G__53952 = (0);
var G__53953 = (0);
seq__53525 = G__53950;
chunk__53526 = G__53951;
count__53527 = G__53952;
i__53528 = G__53953;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53538){
var map__53539 = p__53538;
var map__53539__$1 = cljs.core.__destructure_map(map__53539);
var msg = map__53539__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53539__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53539__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53540(s__53541){
return (new cljs.core.LazySeq(null,(function (){
var s__53541__$1 = s__53541;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53541__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__53546 = cljs.core.first(xs__6308__auto__);
var map__53546__$1 = cljs.core.__destructure_map(map__53546);
var src = map__53546__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__53541__$1,map__53546,map__53546__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53539,map__53539__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53540_$_iter__53542(s__53543){
return (new cljs.core.LazySeq(null,((function (s__53541__$1,map__53546,map__53546__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53539,map__53539__$1,msg,info,reload_info){
return (function (){
var s__53543__$1 = s__53543;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53543__$1);
if(temp__5753__auto____$1){
var s__53543__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53543__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53543__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53545 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53544 = (0);
while(true){
if((i__53544 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__53544);
cljs.core.chunk_append(b__53545,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53954 = (i__53544 + (1));
i__53544 = G__53954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53545),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53540_$_iter__53542(cljs.core.chunk_rest(s__53543__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53545),null);
}
} else {
var warning = cljs.core.first(s__53543__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53540_$_iter__53542(cljs.core.rest(s__53543__$2)));
}
} else {
return null;
}
break;
}
});})(s__53541__$1,map__53546,map__53546__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53539,map__53539__$1,msg,info,reload_info))
,null,null));
});})(s__53541__$1,map__53546,map__53546__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53539,map__53539__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53540(cljs.core.rest(s__53541__$1)));
} else {
var G__53955 = cljs.core.rest(s__53541__$1);
s__53541__$1 = G__53955;
continue;
}
} else {
var G__53956 = cljs.core.rest(s__53541__$1);
s__53541__$1 = G__53956;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53551_53957 = cljs.core.seq(warnings);
var chunk__53552_53958 = null;
var count__53553_53959 = (0);
var i__53554_53960 = (0);
while(true){
if((i__53554_53960 < count__53553_53959)){
var map__53559_53961 = chunk__53552_53958.cljs$core$IIndexed$_nth$arity$2(null,i__53554_53960);
var map__53559_53962__$1 = cljs.core.__destructure_map(map__53559_53961);
var w_53963 = map__53559_53962__$1;
var msg_53964__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559_53962__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559_53962__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559_53962__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559_53962__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53967)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53965),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53966),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53964__$1)].join(''));


var G__53968 = seq__53551_53957;
var G__53969 = chunk__53552_53958;
var G__53970 = count__53553_53959;
var G__53971 = (i__53554_53960 + (1));
seq__53551_53957 = G__53968;
chunk__53552_53958 = G__53969;
count__53553_53959 = G__53970;
i__53554_53960 = G__53971;
continue;
} else {
var temp__5753__auto___53972 = cljs.core.seq(seq__53551_53957);
if(temp__5753__auto___53972){
var seq__53551_53973__$1 = temp__5753__auto___53972;
if(cljs.core.chunked_seq_QMARK_(seq__53551_53973__$1)){
var c__4679__auto___53974 = cljs.core.chunk_first(seq__53551_53973__$1);
var G__53975 = cljs.core.chunk_rest(seq__53551_53973__$1);
var G__53976 = c__4679__auto___53974;
var G__53977 = cljs.core.count(c__4679__auto___53974);
var G__53978 = (0);
seq__53551_53957 = G__53975;
chunk__53552_53958 = G__53976;
count__53553_53959 = G__53977;
i__53554_53960 = G__53978;
continue;
} else {
var map__53560_53979 = cljs.core.first(seq__53551_53973__$1);
var map__53560_53980__$1 = cljs.core.__destructure_map(map__53560_53979);
var w_53981 = map__53560_53980__$1;
var msg_53982__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53560_53980__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53560_53980__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53560_53980__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53560_53980__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53985)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53983),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53984),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53982__$1)].join(''));


var G__53986 = cljs.core.next(seq__53551_53973__$1);
var G__53987 = null;
var G__53988 = (0);
var G__53989 = (0);
seq__53551_53957 = G__53986;
chunk__53552_53958 = G__53987;
count__53553_53959 = G__53988;
i__53554_53960 = G__53989;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53537_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53537_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53567){
var map__53568 = p__53567;
var map__53568__$1 = cljs.core.__destructure_map(map__53568);
var msg = map__53568__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53568__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53568__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__53569 = cljs.core.seq(updates);
var chunk__53571 = null;
var count__53572 = (0);
var i__53573 = (0);
while(true){
if((i__53573 < count__53572)){
var path = chunk__53571.cljs$core$IIndexed$_nth$arity$2(null,i__53573);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53795_53990 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53799_53991 = null;
var count__53800_53992 = (0);
var i__53801_53993 = (0);
while(true){
if((i__53801_53993 < count__53800_53992)){
var node_53994 = chunk__53799_53991.cljs$core$IIndexed$_nth$arity$2(null,i__53801_53993);
if(cljs.core.not(node_53994.shadow$old)){
var path_match_53995 = shadow.cljs.devtools.client.browser.match_paths(node_53994.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53995)){
var new_link_53996 = (function (){var G__53827 = node_53994.cloneNode(true);
G__53827.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53995),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53827;
})();
(node_53994.shadow$old = true);

(new_link_53996.onload = ((function (seq__53795_53990,chunk__53799_53991,count__53800_53992,i__53801_53993,seq__53569,chunk__53571,count__53572,i__53573,new_link_53996,path_match_53995,node_53994,path,map__53568,map__53568__$1,msg,updates,reload_info){
return (function (e){
var seq__53828_53997 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__53830_53998 = null;
var count__53831_53999 = (0);
var i__53832_54000 = (0);
while(true){
if((i__53832_54000 < count__53831_53999)){
var map__53836_54001 = chunk__53830_53998.cljs$core$IIndexed$_nth$arity$2(null,i__53832_54000);
var map__53836_54002__$1 = cljs.core.__destructure_map(map__53836_54001);
var task_54003 = map__53836_54002__$1;
var fn_str_54004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53836_54002__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53836_54002__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54006 = goog.getObjectByName(fn_str_54004,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54005)].join(''));

(fn_obj_54006.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54006.cljs$core$IFn$_invoke$arity$2(path,new_link_53996) : fn_obj_54006.call(null,path,new_link_53996));


var G__54007 = seq__53828_53997;
var G__54008 = chunk__53830_53998;
var G__54009 = count__53831_53999;
var G__54010 = (i__53832_54000 + (1));
seq__53828_53997 = G__54007;
chunk__53830_53998 = G__54008;
count__53831_53999 = G__54009;
i__53832_54000 = G__54010;
continue;
} else {
var temp__5753__auto___54011 = cljs.core.seq(seq__53828_53997);
if(temp__5753__auto___54011){
var seq__53828_54012__$1 = temp__5753__auto___54011;
if(cljs.core.chunked_seq_QMARK_(seq__53828_54012__$1)){
var c__4679__auto___54013 = cljs.core.chunk_first(seq__53828_54012__$1);
var G__54014 = cljs.core.chunk_rest(seq__53828_54012__$1);
var G__54015 = c__4679__auto___54013;
var G__54016 = cljs.core.count(c__4679__auto___54013);
var G__54017 = (0);
seq__53828_53997 = G__54014;
chunk__53830_53998 = G__54015;
count__53831_53999 = G__54016;
i__53832_54000 = G__54017;
continue;
} else {
var map__53837_54018 = cljs.core.first(seq__53828_54012__$1);
var map__53837_54019__$1 = cljs.core.__destructure_map(map__53837_54018);
var task_54020 = map__53837_54019__$1;
var fn_str_54021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53837_54019__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53837_54019__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54023 = goog.getObjectByName(fn_str_54021,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54022)].join(''));

(fn_obj_54023.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54023.cljs$core$IFn$_invoke$arity$2(path,new_link_53996) : fn_obj_54023.call(null,path,new_link_53996));


var G__54024 = cljs.core.next(seq__53828_54012__$1);
var G__54025 = null;
var G__54026 = (0);
var G__54027 = (0);
seq__53828_53997 = G__54024;
chunk__53830_53998 = G__54025;
count__53831_53999 = G__54026;
i__53832_54000 = G__54027;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_53994);
});})(seq__53795_53990,chunk__53799_53991,count__53800_53992,i__53801_53993,seq__53569,chunk__53571,count__53572,i__53573,new_link_53996,path_match_53995,node_53994,path,map__53568,map__53568__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53995], 0));

goog.dom.insertSiblingAfter(new_link_53996,node_53994);


var G__54028 = seq__53795_53990;
var G__54029 = chunk__53799_53991;
var G__54030 = count__53800_53992;
var G__54031 = (i__53801_53993 + (1));
seq__53795_53990 = G__54028;
chunk__53799_53991 = G__54029;
count__53800_53992 = G__54030;
i__53801_53993 = G__54031;
continue;
} else {
var G__54032 = seq__53795_53990;
var G__54033 = chunk__53799_53991;
var G__54034 = count__53800_53992;
var G__54035 = (i__53801_53993 + (1));
seq__53795_53990 = G__54032;
chunk__53799_53991 = G__54033;
count__53800_53992 = G__54034;
i__53801_53993 = G__54035;
continue;
}
} else {
var G__54036 = seq__53795_53990;
var G__54037 = chunk__53799_53991;
var G__54038 = count__53800_53992;
var G__54039 = (i__53801_53993 + (1));
seq__53795_53990 = G__54036;
chunk__53799_53991 = G__54037;
count__53800_53992 = G__54038;
i__53801_53993 = G__54039;
continue;
}
} else {
var temp__5753__auto___54040 = cljs.core.seq(seq__53795_53990);
if(temp__5753__auto___54040){
var seq__53795_54041__$1 = temp__5753__auto___54040;
if(cljs.core.chunked_seq_QMARK_(seq__53795_54041__$1)){
var c__4679__auto___54042 = cljs.core.chunk_first(seq__53795_54041__$1);
var G__54043 = cljs.core.chunk_rest(seq__53795_54041__$1);
var G__54044 = c__4679__auto___54042;
var G__54045 = cljs.core.count(c__4679__auto___54042);
var G__54046 = (0);
seq__53795_53990 = G__54043;
chunk__53799_53991 = G__54044;
count__53800_53992 = G__54045;
i__53801_53993 = G__54046;
continue;
} else {
var node_54047 = cljs.core.first(seq__53795_54041__$1);
if(cljs.core.not(node_54047.shadow$old)){
var path_match_54048 = shadow.cljs.devtools.client.browser.match_paths(node_54047.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54048)){
var new_link_54049 = (function (){var G__53838 = node_54047.cloneNode(true);
G__53838.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54048),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53838;
})();
(node_54047.shadow$old = true);

(new_link_54049.onload = ((function (seq__53795_53990,chunk__53799_53991,count__53800_53992,i__53801_53993,seq__53569,chunk__53571,count__53572,i__53573,new_link_54049,path_match_54048,node_54047,seq__53795_54041__$1,temp__5753__auto___54040,path,map__53568,map__53568__$1,msg,updates,reload_info){
return (function (e){
var seq__53839_54050 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__53841_54051 = null;
var count__53842_54052 = (0);
var i__53843_54053 = (0);
while(true){
if((i__53843_54053 < count__53842_54052)){
var map__53847_54054 = chunk__53841_54051.cljs$core$IIndexed$_nth$arity$2(null,i__53843_54053);
var map__53847_54055__$1 = cljs.core.__destructure_map(map__53847_54054);
var task_54056 = map__53847_54055__$1;
var fn_str_54057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53847_54055__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53847_54055__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54059 = goog.getObjectByName(fn_str_54057,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54058)].join(''));

(fn_obj_54059.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54059.cljs$core$IFn$_invoke$arity$2(path,new_link_54049) : fn_obj_54059.call(null,path,new_link_54049));


var G__54060 = seq__53839_54050;
var G__54061 = chunk__53841_54051;
var G__54062 = count__53842_54052;
var G__54063 = (i__53843_54053 + (1));
seq__53839_54050 = G__54060;
chunk__53841_54051 = G__54061;
count__53842_54052 = G__54062;
i__53843_54053 = G__54063;
continue;
} else {
var temp__5753__auto___54064__$1 = cljs.core.seq(seq__53839_54050);
if(temp__5753__auto___54064__$1){
var seq__53839_54065__$1 = temp__5753__auto___54064__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53839_54065__$1)){
var c__4679__auto___54066 = cljs.core.chunk_first(seq__53839_54065__$1);
var G__54067 = cljs.core.chunk_rest(seq__53839_54065__$1);
var G__54068 = c__4679__auto___54066;
var G__54069 = cljs.core.count(c__4679__auto___54066);
var G__54070 = (0);
seq__53839_54050 = G__54067;
chunk__53841_54051 = G__54068;
count__53842_54052 = G__54069;
i__53843_54053 = G__54070;
continue;
} else {
var map__53848_54071 = cljs.core.first(seq__53839_54065__$1);
var map__53848_54072__$1 = cljs.core.__destructure_map(map__53848_54071);
var task_54073 = map__53848_54072__$1;
var fn_str_54074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53848_54072__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53848_54072__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54076 = goog.getObjectByName(fn_str_54074,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54075)].join(''));

(fn_obj_54076.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54076.cljs$core$IFn$_invoke$arity$2(path,new_link_54049) : fn_obj_54076.call(null,path,new_link_54049));


var G__54077 = cljs.core.next(seq__53839_54065__$1);
var G__54078 = null;
var G__54079 = (0);
var G__54080 = (0);
seq__53839_54050 = G__54077;
chunk__53841_54051 = G__54078;
count__53842_54052 = G__54079;
i__53843_54053 = G__54080;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54047);
});})(seq__53795_53990,chunk__53799_53991,count__53800_53992,i__53801_53993,seq__53569,chunk__53571,count__53572,i__53573,new_link_54049,path_match_54048,node_54047,seq__53795_54041__$1,temp__5753__auto___54040,path,map__53568,map__53568__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54048], 0));

goog.dom.insertSiblingAfter(new_link_54049,node_54047);


var G__54081 = cljs.core.next(seq__53795_54041__$1);
var G__54082 = null;
var G__54083 = (0);
var G__54084 = (0);
seq__53795_53990 = G__54081;
chunk__53799_53991 = G__54082;
count__53800_53992 = G__54083;
i__53801_53993 = G__54084;
continue;
} else {
var G__54085 = cljs.core.next(seq__53795_54041__$1);
var G__54086 = null;
var G__54087 = (0);
var G__54088 = (0);
seq__53795_53990 = G__54085;
chunk__53799_53991 = G__54086;
count__53800_53992 = G__54087;
i__53801_53993 = G__54088;
continue;
}
} else {
var G__54089 = cljs.core.next(seq__53795_54041__$1);
var G__54090 = null;
var G__54091 = (0);
var G__54092 = (0);
seq__53795_53990 = G__54089;
chunk__53799_53991 = G__54090;
count__53800_53992 = G__54091;
i__53801_53993 = G__54092;
continue;
}
}
} else {
}
}
break;
}


var G__54093 = seq__53569;
var G__54094 = chunk__53571;
var G__54095 = count__53572;
var G__54096 = (i__53573 + (1));
seq__53569 = G__54093;
chunk__53571 = G__54094;
count__53572 = G__54095;
i__53573 = G__54096;
continue;
} else {
var G__54097 = seq__53569;
var G__54098 = chunk__53571;
var G__54099 = count__53572;
var G__54100 = (i__53573 + (1));
seq__53569 = G__54097;
chunk__53571 = G__54098;
count__53572 = G__54099;
i__53573 = G__54100;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53569);
if(temp__5753__auto__){
var seq__53569__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53569__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53569__$1);
var G__54101 = cljs.core.chunk_rest(seq__53569__$1);
var G__54102 = c__4679__auto__;
var G__54103 = cljs.core.count(c__4679__auto__);
var G__54104 = (0);
seq__53569 = G__54101;
chunk__53571 = G__54102;
count__53572 = G__54103;
i__53573 = G__54104;
continue;
} else {
var path = cljs.core.first(seq__53569__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53849_54105 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53853_54106 = null;
var count__53854_54107 = (0);
var i__53855_54108 = (0);
while(true){
if((i__53855_54108 < count__53854_54107)){
var node_54109 = chunk__53853_54106.cljs$core$IIndexed$_nth$arity$2(null,i__53855_54108);
if(cljs.core.not(node_54109.shadow$old)){
var path_match_54110 = shadow.cljs.devtools.client.browser.match_paths(node_54109.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54110)){
var new_link_54111 = (function (){var G__53881 = node_54109.cloneNode(true);
G__53881.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54110),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53881;
})();
(node_54109.shadow$old = true);

(new_link_54111.onload = ((function (seq__53849_54105,chunk__53853_54106,count__53854_54107,i__53855_54108,seq__53569,chunk__53571,count__53572,i__53573,new_link_54111,path_match_54110,node_54109,path,seq__53569__$1,temp__5753__auto__,map__53568,map__53568__$1,msg,updates,reload_info){
return (function (e){
var seq__53882_54112 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__53884_54113 = null;
var count__53885_54114 = (0);
var i__53886_54115 = (0);
while(true){
if((i__53886_54115 < count__53885_54114)){
var map__53890_54116 = chunk__53884_54113.cljs$core$IIndexed$_nth$arity$2(null,i__53886_54115);
var map__53890_54117__$1 = cljs.core.__destructure_map(map__53890_54116);
var task_54118 = map__53890_54117__$1;
var fn_str_54119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53890_54117__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53890_54117__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54121 = goog.getObjectByName(fn_str_54119,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54120)].join(''));

(fn_obj_54121.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54121.cljs$core$IFn$_invoke$arity$2(path,new_link_54111) : fn_obj_54121.call(null,path,new_link_54111));


var G__54122 = seq__53882_54112;
var G__54123 = chunk__53884_54113;
var G__54124 = count__53885_54114;
var G__54125 = (i__53886_54115 + (1));
seq__53882_54112 = G__54122;
chunk__53884_54113 = G__54123;
count__53885_54114 = G__54124;
i__53886_54115 = G__54125;
continue;
} else {
var temp__5753__auto___54126__$1 = cljs.core.seq(seq__53882_54112);
if(temp__5753__auto___54126__$1){
var seq__53882_54127__$1 = temp__5753__auto___54126__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53882_54127__$1)){
var c__4679__auto___54128 = cljs.core.chunk_first(seq__53882_54127__$1);
var G__54129 = cljs.core.chunk_rest(seq__53882_54127__$1);
var G__54130 = c__4679__auto___54128;
var G__54131 = cljs.core.count(c__4679__auto___54128);
var G__54132 = (0);
seq__53882_54112 = G__54129;
chunk__53884_54113 = G__54130;
count__53885_54114 = G__54131;
i__53886_54115 = G__54132;
continue;
} else {
var map__53891_54133 = cljs.core.first(seq__53882_54127__$1);
var map__53891_54134__$1 = cljs.core.__destructure_map(map__53891_54133);
var task_54135 = map__53891_54134__$1;
var fn_str_54136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891_54134__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891_54134__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54138 = goog.getObjectByName(fn_str_54136,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54137)].join(''));

(fn_obj_54138.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54138.cljs$core$IFn$_invoke$arity$2(path,new_link_54111) : fn_obj_54138.call(null,path,new_link_54111));


var G__54139 = cljs.core.next(seq__53882_54127__$1);
var G__54140 = null;
var G__54141 = (0);
var G__54142 = (0);
seq__53882_54112 = G__54139;
chunk__53884_54113 = G__54140;
count__53885_54114 = G__54141;
i__53886_54115 = G__54142;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54109);
});})(seq__53849_54105,chunk__53853_54106,count__53854_54107,i__53855_54108,seq__53569,chunk__53571,count__53572,i__53573,new_link_54111,path_match_54110,node_54109,path,seq__53569__$1,temp__5753__auto__,map__53568,map__53568__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54110], 0));

goog.dom.insertSiblingAfter(new_link_54111,node_54109);


var G__54143 = seq__53849_54105;
var G__54144 = chunk__53853_54106;
var G__54145 = count__53854_54107;
var G__54146 = (i__53855_54108 + (1));
seq__53849_54105 = G__54143;
chunk__53853_54106 = G__54144;
count__53854_54107 = G__54145;
i__53855_54108 = G__54146;
continue;
} else {
var G__54147 = seq__53849_54105;
var G__54148 = chunk__53853_54106;
var G__54149 = count__53854_54107;
var G__54150 = (i__53855_54108 + (1));
seq__53849_54105 = G__54147;
chunk__53853_54106 = G__54148;
count__53854_54107 = G__54149;
i__53855_54108 = G__54150;
continue;
}
} else {
var G__54151 = seq__53849_54105;
var G__54152 = chunk__53853_54106;
var G__54153 = count__53854_54107;
var G__54154 = (i__53855_54108 + (1));
seq__53849_54105 = G__54151;
chunk__53853_54106 = G__54152;
count__53854_54107 = G__54153;
i__53855_54108 = G__54154;
continue;
}
} else {
var temp__5753__auto___54155__$1 = cljs.core.seq(seq__53849_54105);
if(temp__5753__auto___54155__$1){
var seq__53849_54156__$1 = temp__5753__auto___54155__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53849_54156__$1)){
var c__4679__auto___54157 = cljs.core.chunk_first(seq__53849_54156__$1);
var G__54158 = cljs.core.chunk_rest(seq__53849_54156__$1);
var G__54159 = c__4679__auto___54157;
var G__54160 = cljs.core.count(c__4679__auto___54157);
var G__54161 = (0);
seq__53849_54105 = G__54158;
chunk__53853_54106 = G__54159;
count__53854_54107 = G__54160;
i__53855_54108 = G__54161;
continue;
} else {
var node_54162 = cljs.core.first(seq__53849_54156__$1);
if(cljs.core.not(node_54162.shadow$old)){
var path_match_54163 = shadow.cljs.devtools.client.browser.match_paths(node_54162.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54163)){
var new_link_54164 = (function (){var G__53892 = node_54162.cloneNode(true);
G__53892.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54163),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53892;
})();
(node_54162.shadow$old = true);

(new_link_54164.onload = ((function (seq__53849_54105,chunk__53853_54106,count__53854_54107,i__53855_54108,seq__53569,chunk__53571,count__53572,i__53573,new_link_54164,path_match_54163,node_54162,seq__53849_54156__$1,temp__5753__auto___54155__$1,path,seq__53569__$1,temp__5753__auto__,map__53568,map__53568__$1,msg,updates,reload_info){
return (function (e){
var seq__53893_54165 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__53895_54166 = null;
var count__53896_54167 = (0);
var i__53897_54168 = (0);
while(true){
if((i__53897_54168 < count__53896_54167)){
var map__53901_54169 = chunk__53895_54166.cljs$core$IIndexed$_nth$arity$2(null,i__53897_54168);
var map__53901_54170__$1 = cljs.core.__destructure_map(map__53901_54169);
var task_54171 = map__53901_54170__$1;
var fn_str_54172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53901_54170__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53901_54170__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54174 = goog.getObjectByName(fn_str_54172,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54173)].join(''));

(fn_obj_54174.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54174.cljs$core$IFn$_invoke$arity$2(path,new_link_54164) : fn_obj_54174.call(null,path,new_link_54164));


var G__54175 = seq__53893_54165;
var G__54176 = chunk__53895_54166;
var G__54177 = count__53896_54167;
var G__54178 = (i__53897_54168 + (1));
seq__53893_54165 = G__54175;
chunk__53895_54166 = G__54176;
count__53896_54167 = G__54177;
i__53897_54168 = G__54178;
continue;
} else {
var temp__5753__auto___54179__$2 = cljs.core.seq(seq__53893_54165);
if(temp__5753__auto___54179__$2){
var seq__53893_54180__$1 = temp__5753__auto___54179__$2;
if(cljs.core.chunked_seq_QMARK_(seq__53893_54180__$1)){
var c__4679__auto___54181 = cljs.core.chunk_first(seq__53893_54180__$1);
var G__54182 = cljs.core.chunk_rest(seq__53893_54180__$1);
var G__54183 = c__4679__auto___54181;
var G__54184 = cljs.core.count(c__4679__auto___54181);
var G__54185 = (0);
seq__53893_54165 = G__54182;
chunk__53895_54166 = G__54183;
count__53896_54167 = G__54184;
i__53897_54168 = G__54185;
continue;
} else {
var map__53902_54186 = cljs.core.first(seq__53893_54180__$1);
var map__53902_54187__$1 = cljs.core.__destructure_map(map__53902_54186);
var task_54188 = map__53902_54187__$1;
var fn_str_54189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53902_54187__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53902_54187__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54191 = goog.getObjectByName(fn_str_54189,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54190)].join(''));

(fn_obj_54191.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54191.cljs$core$IFn$_invoke$arity$2(path,new_link_54164) : fn_obj_54191.call(null,path,new_link_54164));


var G__54192 = cljs.core.next(seq__53893_54180__$1);
var G__54193 = null;
var G__54194 = (0);
var G__54195 = (0);
seq__53893_54165 = G__54192;
chunk__53895_54166 = G__54193;
count__53896_54167 = G__54194;
i__53897_54168 = G__54195;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54162);
});})(seq__53849_54105,chunk__53853_54106,count__53854_54107,i__53855_54108,seq__53569,chunk__53571,count__53572,i__53573,new_link_54164,path_match_54163,node_54162,seq__53849_54156__$1,temp__5753__auto___54155__$1,path,seq__53569__$1,temp__5753__auto__,map__53568,map__53568__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54163], 0));

goog.dom.insertSiblingAfter(new_link_54164,node_54162);


var G__54196 = cljs.core.next(seq__53849_54156__$1);
var G__54197 = null;
var G__54198 = (0);
var G__54199 = (0);
seq__53849_54105 = G__54196;
chunk__53853_54106 = G__54197;
count__53854_54107 = G__54198;
i__53855_54108 = G__54199;
continue;
} else {
var G__54200 = cljs.core.next(seq__53849_54156__$1);
var G__54201 = null;
var G__54202 = (0);
var G__54203 = (0);
seq__53849_54105 = G__54200;
chunk__53853_54106 = G__54201;
count__53854_54107 = G__54202;
i__53855_54108 = G__54203;
continue;
}
} else {
var G__54204 = cljs.core.next(seq__53849_54156__$1);
var G__54205 = null;
var G__54206 = (0);
var G__54207 = (0);
seq__53849_54105 = G__54204;
chunk__53853_54106 = G__54205;
count__53854_54107 = G__54206;
i__53855_54108 = G__54207;
continue;
}
}
} else {
}
}
break;
}


var G__54208 = cljs.core.next(seq__53569__$1);
var G__54209 = null;
var G__54210 = (0);
var G__54211 = (0);
seq__53569 = G__54208;
chunk__53571 = G__54209;
count__53572 = G__54210;
i__53573 = G__54211;
continue;
} else {
var G__54212 = cljs.core.next(seq__53569__$1);
var G__54213 = null;
var G__54214 = (0);
var G__54215 = (0);
seq__53569 = G__54212;
chunk__53571 = G__54213;
count__53572 = G__54214;
i__53573 = G__54215;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53903){
var map__53904 = p__53903;
var map__53904__$1 = cljs.core.__destructure_map(map__53904);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53904__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53905){
var map__53906 = p__53905;
var map__53906__$1 = cljs.core.__destructure_map(map__53906);
var _ = map__53906__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53906__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53907,done,error){
var map__53908 = p__53907;
var map__53908__$1 = cljs.core.__destructure_map(map__53908);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53908__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53909,done,error){
var map__53910 = p__53909;
var map__53910__$1 = cljs.core.__destructure_map(map__53910);
var msg = map__53910__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53910__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53910__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53910__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53911){
var map__53912 = p__53911;
var map__53912__$1 = cljs.core.__destructure_map(map__53912);
var src = map__53912__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53912__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53913 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53913) : done.call(null,G__53913));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53914){
var map__53915 = p__53914;
var map__53915__$1 = cljs.core.__destructure_map(map__53915);
var msg__$1 = map__53915__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53915__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53916){var ex = e53916;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53917){
var map__53918 = p__53917;
var map__53918__$1 = cljs.core.__destructure_map(map__53918);
var env = map__53918__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53918__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53919){
var map__53920 = p__53919;
var map__53920__$1 = cljs.core.__destructure_map(map__53920);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53920__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53920__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__53921){
var map__53922 = p__53921;
var map__53922__$1 = cljs.core.__destructure_map(map__53922);
var svc = map__53922__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53922__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
