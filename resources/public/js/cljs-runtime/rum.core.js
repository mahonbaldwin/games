goog.provide('rum.core');
goog.scope(function(){
  rum.core.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return rum.core.goog$module$goog$object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__53398 = cljs.core.seq(props);
var chunk__53400 = null;
var count__53401 = (0);
var i__53402 = (0);
while(true){
if((i__53402 < count__53401)){
var vec__53410 = chunk__53400.cljs$core$IIndexed$_nth$arity$2(null,i__53402);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53410,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53410,(1),null);
if((!((v == null)))){
rum.core.goog$module$goog$object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__53596 = seq__53398;
var G__53597 = chunk__53400;
var G__53598 = count__53401;
var G__53599 = (i__53402 + (1));
seq__53398 = G__53596;
chunk__53400 = G__53597;
count__53401 = G__53598;
i__53402 = G__53599;
continue;
} else {
var G__53600 = seq__53398;
var G__53601 = chunk__53400;
var G__53602 = count__53401;
var G__53603 = (i__53402 + (1));
seq__53398 = G__53600;
chunk__53400 = G__53601;
count__53401 = G__53602;
i__53402 = G__53603;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53398);
if(temp__5753__auto__){
var seq__53398__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53398__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53398__$1);
var G__53604 = cljs.core.chunk_rest(seq__53398__$1);
var G__53605 = c__4679__auto__;
var G__53606 = cljs.core.count(c__4679__auto__);
var G__53607 = (0);
seq__53398 = G__53604;
chunk__53400 = G__53605;
count__53401 = G__53606;
i__53402 = G__53607;
continue;
} else {
var vec__53414 = cljs.core.first(seq__53398__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53414,(1),null);
if((!((v == null)))){
rum.core.goog$module$goog$object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__53608 = cljs.core.next(seq__53398__$1);
var G__53609 = null;
var G__53610 = (0);
var G__53611 = (0);
seq__53398 = G__53608;
chunk__53400 = G__53609;
count__53401 = G__53610;
i__53402 = G__53611;
continue;
} else {
var G__53612 = cljs.core.next(seq__53398__$1);
var G__53613 = null;
var G__53614 = (0);
var G__53615 = (0);
seq__53398 = G__53612;
chunk__53400 = G__53613;
count__53401 = G__53614;
i__53402 = G__53615;
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
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
if(goog.DEBUG){
var mixins_53616__$1 = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mixins], 0)));
if(clojure.set.subset_QMARK_(mixins_53616__$1,rum.specs.mixins)){
} else {
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)," declares invalid mixin keys ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(mixins_53616__$1,rum.specs.mixins)),", ","did you mean one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.specs.mixins)].join(''),"\n","(set/subset? mixins rum.specs/mixins)"].join('')));
}

cljs.core.run_BANG_((function (p1__53417_SHARP_){
return console.warn(p1__53417_SHARP_);
}),cljs.core.vals(cljs.core.select_keys(rum.specs.deprecated_mixins,mixins_53616__$1)));
} else {
}

var init = rum.util.collect(new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var before_render = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword("unsafe","will-mount","unsafe/will-mount",265089051),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53419_SHARP_,p2__53418_SHARP_){
return (p2__53418_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__53418_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__53419_SHARP_) : p2__53418_SHARP_.call(null,p1__53419_SHARP_));
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_remount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),new cljs.core.Keyword(null,"will-remount","will-remount",-141604325)], null),mixins);
var should_update = rum.util.collect(new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var before_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unsafe","will-update","unsafe/will-update",1505013232),new cljs.core.Keyword("unsafe","will-update","unsafe/will-update",1505013232),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect(new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect(new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect(new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = (function (props){
var this$ = this;
rum.core.goog$module$goog$object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rum.core.goog$module$goog$object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = rum.core.goog$module$goog$object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(before_render)){
} else {
rum.core.goog$module$goog$object.set(prototype,"UNSAFE_componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),before_render));
}));
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
}));
}

rum.core.goog$module$goog$object.set(prototype,"UNSAFE_componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,rum.core.goog$module$goog$object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53422_SHARP_,p2__53421_SHARP_){
return (p2__53421_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__53421_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__53422_SHARP_) : p2__53421_SHARP_.call(null,old_state,p1__53422_SHARP_));
}),state,will_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(rum.core.goog$module$goog$object.get(next_state,":rum/state"));
var or__4253__auto__ = cljs.core.some((function (p1__53423_SHARP_){
return (p1__53423_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__53423_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__53423_SHARP_.call(null,old_state,new_state));
}),should_update);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_(before_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"UNSAFE_componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = rum.core.goog$module$goog$object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),before_update));
}));
}

rum.core.goog$module$goog$object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__53439 = (function (){var G__53442 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__53442) : wrapped_render.call(null,G__53442));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53439,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53439,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_(did_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),rum.core.goog$module$goog$object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
}));
}

rum.core.goog$module$goog$object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return rum.core.goog$module$goog$object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_(child_context)){
} else {
rum.core.goog$module$goog$object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__53424_SHARP_){
return (p1__53424_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53424_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__53424_SHARP_.call(null,state));
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_(prototype,class_props);

rum.core.goog$module$goog$object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.set_meta_BANG_ = (function rum$core$set_meta_BANG_(c){
var f = (function (){
var ctr = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
return ctr.apply(ctr,arguments);
});
var x53450_53628 = f;
(x53450_53628.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x53450_53628.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.meta((c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null)));
}));


return f;
});
/**
 * Wraps component construction in a way so that Google Closure Compiler
 * can properly recognize and elide unused components. The extra `set-meta`
 * fn is needed so that the compiler can properly detect that all functions
 * are side effect free.
 */
rum.core.lazy_build = (function rum$core$lazy_build(ctor,render,mixins,display_name){
var bf = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$3 ? ctor.cljs$core$IFn$_invoke$arity$3(render,mixins,display_name) : ctor.call(null,render,mixins,display_name));
});
var c = goog.functions.cacheReturnValue(bf);
return rum.core.set_meta_BANG_(c);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__53637__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__53637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53639__i = 0, G__53639__a = new Array(arguments.length -  0);
while (G__53639__i < G__53639__a.length) {G__53639__a[G__53639__i] = arguments[G__53639__i + 0]; ++G__53639__i;}
  args = new cljs.core.IndexedSeq(G__53639__a,0,null);
} 
return G__53637__delegate.call(this,args);};
G__53637.cljs$lang$maxFixedArity = 0;
G__53637.cljs$lang$applyTo = (function (arglist__53640){
var args = cljs.core.seq(arglist__53640);
return G__53637__delegate(args);
});
G__53637.cljs$core$IFn$_invoke$arity$variadic = G__53637__delegate;
return G__53637;
})()
:(function() { 
var G__53641__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__53641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53642__i = 0, G__53642__a = new Array(arguments.length -  0);
while (G__53642__i < G__53642__a.length) {G__53642__a[G__53642__i] = arguments[G__53642__i + 0]; ++G__53642__i;}
  args = new cljs.core.IndexedSeq(G__53642__a,0,null);
} 
return G__53641__delegate.call(this,args);};
G__53641.cljs$lang$maxFixedArity = 0;
G__53641.cljs$lang$applyTo = (function (arglist__53643){
var args = cljs.core.seq(arglist__53643);
return G__53641__delegate(args);
});
G__53641.cljs$core$IFn$_invoke$arity$variadic = G__53641__delegate;
return G__53641;
})()
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.memo_compare_props = (function rum$core$memo_compare_props(prev_props,next_props){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((prev_props[":rum/args"]),(next_props[":rum/args"]));
});
rum.core.react_memo = (function rum$core$react_memo(f){
var temp__5755__auto__ = React.memo;
if((temp__5755__auto__ == null)){
return f;
} else {
var memo = temp__5755__auto__;
return (memo.cljs$core$IFn$_invoke$arity$2 ? memo.cljs$core$IFn$_invoke$arity$2(f,rum.core.memo_compare_props) : memo.call(null,f,rum.core.memo_compare_props));
}
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mixins,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null))){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var memo_class = rum.core.react_memo(class$);
var ctor = (function() { 
var G__53646__delegate = function (args){
return React.createElement(memo_class,({":rum/args": args}));
};
var G__53646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53647__i = 0, G__53647__a = new Array(arguments.length -  0);
while (G__53647__i < G__53647__a.length) {G__53647__a[G__53647__i] = arguments[G__53647__i + 0]; ++G__53647__i;}
  args = new cljs.core.IndexedSeq(G__53647__a,0,null);
} 
return G__53646__delegate.call(this,args);};
G__53646.cljs$lang$maxFixedArity = 0;
G__53646.cljs$lang$applyTo = (function (arglist__53648){
var args = cljs.core.seq(arglist__53648);
return G__53646__delegate(args);
});
G__53646.cljs$core$IFn$_invoke$arity$variadic = G__53646__delegate;
return G__53646;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),memo_class], null));
} else {
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__53649__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__53649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53650__i = 0, G__53650__a = new Array(arguments.length -  0);
while (G__53650__i < G__53650__a.length) {G__53650__a[G__53650__i] = arguments[G__53650__i + 0]; ++G__53650__i;}
  args = new cljs.core.IndexedSeq(G__53650__a,0,null);
} 
return G__53649__delegate.call(this,args);};
G__53649.cljs$lang$maxFixedArity = 0;
G__53649.cljs$lang$applyTo = (function (arglist__53651){
var args = cljs.core.seq(arglist__53651);
return G__53649__delegate(args);
});
G__53649.cljs$core$IFn$_invoke$arity$variadic = G__53649__delegate;
return G__53649;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);

}
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = (typeof window !== 'undefined');
if(and__4251__auto__){
var or__4253__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (p1__53468_SHARP_){
return setTimeout(p1__53468_SHARP_,(16));
});
}
})();
rum.core.batch = (function (){var or__4253__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_one = (function rum$core$render_one(comp){
if((((!((comp == null)))) && (cljs.core.not(rum.core.goog$module$goog$object.get(comp,":rum/unmounted?"))))){
return comp.forceUpdate();
} else {
return null;
}
});
rum.core.render_all = (function rum$core$render_all(queue){
return cljs.core.run_BANG_(rum.core.render_one,queue);
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
rum.core.sync_update_QMARK_ = cljs.core.volatile_BANG_(false);
/**
 * Schedules react component to be rendered on next animation frame,
 *   unless the requested update happens to be in a sync-update phase.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.truth_(cljs.core.deref(rum.core.sync_update_QMARK_))){
return rum.core.render_one(component);
} else {
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return rum.core.render_queue.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rum.core.render_queue.cljs$core$IDeref$_deref$arity$1(null),component));
}
});
rum.core.mark_sync_update = (function rum$core$mark_sync_update(f){
if(cljs.core.fn_QMARK_(f)){
return (function rum$core$mark_sync_update_$_wrapped_handler(e){
var _ = cljs.core.vreset_BANG_(rum.core.sync_update_QMARK_,true);
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
var ___$1 = cljs.core.vreset_BANG_(rum.core.sync_update_QMARK_,false);
return ret;
});
} else {
return f;
}
});
goog.exportSymbol('rum.core.mark_sync_update', rum.core.mark_sync_update);
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
rum.core.create_context = (function rum$core$create_context(default_value){
return React.createContext(default_value);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Usage of this function is discouraged. Use :ref callback instead.
 *   Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__53486 = arguments.length;
switch (G__53486) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,(function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return rum.core.request_render(component);
} else {
return null;
}
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
}));

(rum.core.local.cljs$lang$maxFixedArity = 2);

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid());
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__53487 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__53488 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__53488);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__53491 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53491,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53491,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__53495_53686 = cljs.core.seq(old_reactions);
var chunk__53497_53687 = null;
var count__53498_53688 = (0);
var i__53499_53689 = (0);
while(true){
if((i__53499_53689 < count__53498_53688)){
var ref_53690 = chunk__53497_53687.cljs$core$IIndexed$_nth$arity$2(null,i__53499_53689);
if(cljs.core.contains_QMARK_(new_reactions,ref_53690)){
} else {
cljs.core.remove_watch(ref_53690,key);
}


var G__53691 = seq__53495_53686;
var G__53692 = chunk__53497_53687;
var G__53693 = count__53498_53688;
var G__53694 = (i__53499_53689 + (1));
seq__53495_53686 = G__53691;
chunk__53497_53687 = G__53692;
count__53498_53688 = G__53693;
i__53499_53689 = G__53694;
continue;
} else {
var temp__5753__auto___53695 = cljs.core.seq(seq__53495_53686);
if(temp__5753__auto___53695){
var seq__53495_53696__$1 = temp__5753__auto___53695;
if(cljs.core.chunked_seq_QMARK_(seq__53495_53696__$1)){
var c__4679__auto___53697 = cljs.core.chunk_first(seq__53495_53696__$1);
var G__53698 = cljs.core.chunk_rest(seq__53495_53696__$1);
var G__53699 = c__4679__auto___53697;
var G__53700 = cljs.core.count(c__4679__auto___53697);
var G__53701 = (0);
seq__53495_53686 = G__53698;
chunk__53497_53687 = G__53699;
count__53498_53688 = G__53700;
i__53499_53689 = G__53701;
continue;
} else {
var ref_53702 = cljs.core.first(seq__53495_53696__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_53702)){
} else {
cljs.core.remove_watch(ref_53702,key);
}


var G__53703 = cljs.core.next(seq__53495_53696__$1);
var G__53704 = null;
var G__53705 = (0);
var G__53706 = (0);
seq__53495_53686 = G__53703;
chunk__53497_53687 = G__53704;
count__53498_53688 = G__53705;
i__53499_53689 = G__53706;
continue;
}
} else {
}
}
break;
}

var seq__53510_53707 = cljs.core.seq(new_reactions);
var chunk__53511_53708 = null;
var count__53512_53709 = (0);
var i__53513_53710 = (0);
while(true){
if((i__53513_53710 < count__53512_53709)){
var ref_53712 = chunk__53511_53708.cljs$core$IIndexed$_nth$arity$2(null,i__53513_53710);
if(cljs.core.contains_QMARK_(old_reactions,ref_53712)){
} else {
cljs.core.add_watch(ref_53712,key,((function (seq__53510_53707,chunk__53511_53708,count__53512_53709,i__53513_53710,ref_53712,comp,old_reactions,vec__53491,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__53487,_STAR_reactions_STAR__temp_val__53488){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return rum.core.request_render(comp);
} else {
return null;
}
});})(seq__53510_53707,chunk__53511_53708,count__53512_53709,i__53513_53710,ref_53712,comp,old_reactions,vec__53491,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__53487,_STAR_reactions_STAR__temp_val__53488))
);
}


var G__53713 = seq__53510_53707;
var G__53714 = chunk__53511_53708;
var G__53715 = count__53512_53709;
var G__53716 = (i__53513_53710 + (1));
seq__53510_53707 = G__53713;
chunk__53511_53708 = G__53714;
count__53512_53709 = G__53715;
i__53513_53710 = G__53716;
continue;
} else {
var temp__5753__auto___53717 = cljs.core.seq(seq__53510_53707);
if(temp__5753__auto___53717){
var seq__53510_53718__$1 = temp__5753__auto___53717;
if(cljs.core.chunked_seq_QMARK_(seq__53510_53718__$1)){
var c__4679__auto___53719 = cljs.core.chunk_first(seq__53510_53718__$1);
var G__53720 = cljs.core.chunk_rest(seq__53510_53718__$1);
var G__53721 = c__4679__auto___53719;
var G__53722 = cljs.core.count(c__4679__auto___53719);
var G__53723 = (0);
seq__53510_53707 = G__53720;
chunk__53511_53708 = G__53721;
count__53512_53709 = G__53722;
i__53513_53710 = G__53723;
continue;
} else {
var ref_53724 = cljs.core.first(seq__53510_53718__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_53724)){
} else {
cljs.core.add_watch(ref_53724,key,((function (seq__53510_53707,chunk__53511_53708,count__53512_53709,i__53513_53710,ref_53724,seq__53510_53718__$1,temp__5753__auto___53717,comp,old_reactions,vec__53491,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__53487,_STAR_reactions_STAR__temp_val__53488){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return rum.core.request_render(comp);
} else {
return null;
}
});})(seq__53510_53707,chunk__53511_53708,count__53512_53709,i__53513_53710,ref_53724,seq__53510_53718__$1,temp__5753__auto___53717,comp,old_reactions,vec__53491,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__53487,_STAR_reactions_STAR__temp_val__53488))
);
}


var G__53725 = cljs.core.next(seq__53510_53718__$1);
var G__53726 = null;
var G__53727 = (0);
var G__53728 = (0);
seq__53510_53707 = G__53725;
chunk__53511_53708 = G__53726;
count__53512_53709 = G__53727;
i__53513_53710 = G__53728;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__53487);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_53729 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__53519_53730 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__53520_53731 = null;
var count__53521_53732 = (0);
var i__53522_53733 = (0);
while(true){
if((i__53522_53733 < count__53521_53732)){
var ref_53734 = chunk__53520_53731.cljs$core$IIndexed$_nth$arity$2(null,i__53522_53733);
cljs.core.remove_watch(ref_53734,key_53729);


var G__53735 = seq__53519_53730;
var G__53736 = chunk__53520_53731;
var G__53737 = count__53521_53732;
var G__53738 = (i__53522_53733 + (1));
seq__53519_53730 = G__53735;
chunk__53520_53731 = G__53736;
count__53521_53732 = G__53737;
i__53522_53733 = G__53738;
continue;
} else {
var temp__5753__auto___53739 = cljs.core.seq(seq__53519_53730);
if(temp__5753__auto___53739){
var seq__53519_53740__$1 = temp__5753__auto___53739;
if(cljs.core.chunked_seq_QMARK_(seq__53519_53740__$1)){
var c__4679__auto___53741 = cljs.core.chunk_first(seq__53519_53740__$1);
var G__53742 = cljs.core.chunk_rest(seq__53519_53740__$1);
var G__53743 = c__4679__auto___53741;
var G__53744 = cljs.core.count(c__4679__auto___53741);
var G__53745 = (0);
seq__53519_53730 = G__53742;
chunk__53520_53731 = G__53743;
count__53521_53732 = G__53744;
i__53522_53733 = G__53745;
continue;
} else {
var ref_53746 = cljs.core.first(seq__53519_53740__$1);
cljs.core.remove_watch(ref_53746,key_53729);


var G__53747 = cljs.core.next(seq__53519_53740__$1);
var G__53748 = null;
var G__53749 = (0);
var G__53750 = (0);
seq__53519_53730 = G__53747;
chunk__53520_53731 = G__53748;
count__53521_53732 = G__53749;
i__53522_53733 = G__53750;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142)], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53760 = arguments.length;
var i__4865__auto___53761 = (0);
while(true){
if((i__4865__auto___53761 < len__4864__auto___53760)){
args__4870__auto__.push((arguments[i__4865__auto___53761]));

var G__53762 = (i__4865__auto___53761 + (1));
i__4865__auto___53761 = G__53762;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__53532){
var map__53533 = p__53532;
var map__53533__$1 = cljs.core.__destructure_map(map__53533);
var options = map__53533__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq53529){
var G__53530 = cljs.core.first(seq53529);
var seq53529__$1 = cljs.core.next(seq53529);
var G__53531 = cljs.core.first(seq53529__$1);
var seq53529__$2 = cljs.core.next(seq53529__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53530,G__53531,seq53529__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53763 = arguments.length;
var i__4865__auto___53765 = (0);
while(true){
if((i__4865__auto___53765 < len__4864__auto___53763)){
args__4870__auto__.push((arguments[i__4865__auto___53765]));

var G__53766 = (i__4865__auto___53765 + (1));
i__4865__auto___53765 = G__53766;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq53534){
var G__53535 = cljs.core.first(seq53534);
var seq53534__$1 = cljs.core.next(seq53534);
var G__53536 = cljs.core.first(seq53534__$1);
var seq53534__$2 = cljs.core.next(seq53534__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53535,G__53536,seq53534__$2);
}));

/**
 * Takes initial value or value returning fn and returns a tuple of [value set-value!],
 *   where `value` is current state value and `set-value!` is a function that schedules re-render.
 * 
 *   (let [[value set-state!] (rum/use-state 0)]
 *  [:button {:on-click #(set-state! (inc value))}
 *    value])
 */
rum.core.use_state = (function rum$core$use_state(value_or_fn){
return React.useState(value_or_fn);
});
/**
 * Takes reducing function and initial state value.
 *   Returns a tuple of [value dispatch!], where `value` is current state value and `dispatch` is a function that schedules re-render.
 * 
 *   (defmulti value-reducer (fn [value event] event))
 * 
 *   (defmethod value-reducer :inc [value _]
 *  (inc value))
 * 
 *   (let [[value dispatch!] (rum/use-reducer value-reducer 0)]
 *  [:button {:on-click #(dispatch! :inc)}
 *    value])
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usereducer
 */
rum.core.use_reducer = (function rum$core$use_reducer(reducer_fn,initial_value){
return React.useReducer((function (p1__53547_SHARP_,p2__53548_SHARP_){
return (reducer_fn.cljs$core$IFn$_invoke$arity$2 ? reducer_fn.cljs$core$IFn$_invoke$arity$2(p1__53547_SHARP_,p2__53548_SHARP_) : reducer_fn.call(null,p1__53547_SHARP_,p2__53548_SHARP_));
}),initial_value,cljs.core.identity);
});
/**
 * Takes setup-fn that executes either on the first render or after every update.
 *   The function may return cleanup-fn to cleanup the effect, either before unmount or before every next update.
 *   Calling behavior is controlled by deps argument.
 * 
 *   (rum/use-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_effect_BANG_ = (function rum$core$use_effect_BANG_(var_args){
var G__53550 = arguments.length;
switch (G__53550) {
case 1:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useEffect((function (){
var or__4253__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
}));
}));

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useEffect((function (){
var or__4253__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_effect_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * (rum/use-layout-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_layout_effect_BANG_ = (function rum$core$use_layout_effect_BANG_(var_args){
var G__53558 = arguments.length;
switch (G__53558) {
case 1:
return rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useLayoutEffect((function (){
var or__4253__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
}));
}));

(rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useLayoutEffect((function (){
var or__4253__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_layout_effect_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Takes callback function and returns memoized variant, memoization is done based on provided deps collection.
 * 
 *   (rum/defc button < rum/static
 *  [{:keys [on-click]} text]
 *  [:button {:on-click on-click}
 *    text])
 * 
 *   (rum/defc app [v]
 *  (let [on-click (rum/use-callback #(do-stuff v) [v])]
 *    ;; because on-click callback is memoized here based on v argument
 *    ;; the callback won't be re-created on every render, unless v changes
 *    ;; which means that underlying `button` component won't re-render wastefully
 *    [button {:on-click on-click}
 *      "press me"]))
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usecallback
 */
rum.core.use_callback = (function rum$core$use_callback(var_args){
var G__53562 = arguments.length;
switch (G__53562) {
case 1:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return React.useCallback(callback);
}));

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (callback,deps){
return React.useCallback(callback,((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_callback.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function, memoizes it based on provided deps collection and executes immediately returning a result.
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usememo
 */
rum.core.use_memo = (function rum$core$use_memo(var_args){
var G__53564 = arguments.length;
switch (G__53564) {
case 1:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useMemo(f);
}));

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return React.useMemo(f,((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_memo.cljs$lang$maxFixedArity = 2);

/**
 * Takes a value and puts it into a mutable container which is persisted for the full lifetime of the component.
 *   https://reactjs.org/docs/hooks-reference.html#useref
 */
rum.core.use_ref = (function rum$core$use_ref(initial_value){
return React.useRef(initial_value);
});
rum.core.create_ref = (function rum$core$create_ref(){
return React.createRef();
});
/**
 * Takes a ref returned from use-ref and returns its current value.
 */
rum.core.deref = (function rum$core$deref(ref){
return ref.current;
});
rum.core.set_ref_BANG_ = (function rum$core$set_ref_BANG_(ref,value){
return (ref.current = value);
});
/**
 * Main server-side rendering method. Given component, returns HTML string with static markup of that component.
 *   Serve that string to the browser and [[hydrate]] same Rum component over it. React will be able to reuse already existing DOM and will initialize much faster.
 *   No opts are supported at the moment.
 */
rum.core.render_html = (function rum$core$render_html(var_args){
var G__53566 = arguments.length;
switch (G__53566) {
case 1:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.render_html.cljs$core$IFn$_invoke$arity$1 = (function (element){
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2(element,null);
}));

(rum.core.render_html.cljs$core$IFn$_invoke$arity$2 = (function (element,opts){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToString(element);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToString(element);
}
}));

(rum.core.render_html.cljs$lang$maxFixedArity = 2);

/**
 * Same as [[render-html]] but returned string has nothing React-specific.
 *   This allows Rum to be used as traditional server-side templating engine.
 */
rum.core.render_static_markup = (function rum$core$render_static_markup(src){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToStaticMarkup(src);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToStaticMarkup(src);
}
});
rum.core.adapt_class_helper = (function rum$core$adapt_class_helper(type,attrs,children){
var args = [type,attrs].concat(children);
return React.createElement.apply(React,args);
});

//# sourceMappingURL=rum.core.js.map
