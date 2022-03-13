goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51142 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51142(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51143 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51143(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49989 = coll;
var G__49990 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49989,G__49990) : shadow.dom.lazy_native_coll_seq.call(null,G__49989,G__49990));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__50021 = arguments.length;
switch (G__50021) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__50033 = arguments.length;
switch (G__50033) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__50039 = arguments.length;
switch (G__50039) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__50050 = arguments.length;
switch (G__50050) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__50075 = arguments.length;
switch (G__50075) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50086 = arguments.length;
switch (G__50086) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e50096){if((e50096 instanceof Object)){
var e = e50096;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50096;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50099 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50100 = null;
var count__50101 = (0);
var i__50102 = (0);
while(true){
if((i__50102 < count__50101)){
var el = chunk__50100.cljs$core$IIndexed$_nth$arity$2(null,i__50102);
var handler_51170__$1 = ((function (seq__50099,chunk__50100,count__50101,i__50102,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50099,chunk__50100,count__50101,i__50102,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51170__$1);


var G__51171 = seq__50099;
var G__51172 = chunk__50100;
var G__51173 = count__50101;
var G__51174 = (i__50102 + (1));
seq__50099 = G__51171;
chunk__50100 = G__51172;
count__50101 = G__51173;
i__50102 = G__51174;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50099);
if(temp__5753__auto__){
var seq__50099__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50099__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50099__$1);
var G__51188 = cljs.core.chunk_rest(seq__50099__$1);
var G__51189 = c__4679__auto__;
var G__51190 = cljs.core.count(c__4679__auto__);
var G__51191 = (0);
seq__50099 = G__51188;
chunk__50100 = G__51189;
count__50101 = G__51190;
i__50102 = G__51191;
continue;
} else {
var el = cljs.core.first(seq__50099__$1);
var handler_51192__$1 = ((function (seq__50099,chunk__50100,count__50101,i__50102,el,seq__50099__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50099,chunk__50100,count__50101,i__50102,el,seq__50099__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51192__$1);


var G__51200 = cljs.core.next(seq__50099__$1);
var G__51201 = null;
var G__51202 = (0);
var G__51203 = (0);
seq__50099 = G__51200;
chunk__50100 = G__51201;
count__50101 = G__51202;
i__50102 = G__51203;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__50104 = arguments.length;
switch (G__50104) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__50105 = cljs.core.seq(events);
var chunk__50106 = null;
var count__50107 = (0);
var i__50108 = (0);
while(true){
if((i__50108 < count__50107)){
var vec__50120 = chunk__50106.cljs$core$IIndexed$_nth$arity$2(null,i__50108);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50120,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51223 = seq__50105;
var G__51224 = chunk__50106;
var G__51225 = count__50107;
var G__51226 = (i__50108 + (1));
seq__50105 = G__51223;
chunk__50106 = G__51224;
count__50107 = G__51225;
i__50108 = G__51226;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50105);
if(temp__5753__auto__){
var seq__50105__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50105__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50105__$1);
var G__51231 = cljs.core.chunk_rest(seq__50105__$1);
var G__51232 = c__4679__auto__;
var G__51233 = cljs.core.count(c__4679__auto__);
var G__51234 = (0);
seq__50105 = G__51231;
chunk__50106 = G__51232;
count__50107 = G__51233;
i__50108 = G__51234;
continue;
} else {
var vec__50126 = cljs.core.first(seq__50105__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50126,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51239 = cljs.core.next(seq__50105__$1);
var G__51240 = null;
var G__51241 = (0);
var G__51242 = (0);
seq__50105 = G__51239;
chunk__50106 = G__51240;
count__50107 = G__51241;
i__50108 = G__51242;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__50131 = cljs.core.seq(styles);
var chunk__50132 = null;
var count__50133 = (0);
var i__50134 = (0);
while(true){
if((i__50134 < count__50133)){
var vec__50149 = chunk__50132.cljs$core$IIndexed$_nth$arity$2(null,i__50134);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50149,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51245 = seq__50131;
var G__51246 = chunk__50132;
var G__51247 = count__50133;
var G__51248 = (i__50134 + (1));
seq__50131 = G__51245;
chunk__50132 = G__51246;
count__50133 = G__51247;
i__50134 = G__51248;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50131);
if(temp__5753__auto__){
var seq__50131__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50131__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50131__$1);
var G__51252 = cljs.core.chunk_rest(seq__50131__$1);
var G__51253 = c__4679__auto__;
var G__51254 = cljs.core.count(c__4679__auto__);
var G__51255 = (0);
seq__50131 = G__51252;
chunk__50132 = G__51253;
count__50133 = G__51254;
i__50134 = G__51255;
continue;
} else {
var vec__50155 = cljs.core.first(seq__50131__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50155,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51260 = cljs.core.next(seq__50131__$1);
var G__51261 = null;
var G__51262 = (0);
var G__51263 = (0);
seq__50131 = G__51260;
chunk__50132 = G__51261;
count__50133 = G__51262;
i__50134 = G__51263;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__50159_51267 = key;
var G__50159_51268__$1 = (((G__50159_51267 instanceof cljs.core.Keyword))?G__50159_51267.fqn:null);
switch (G__50159_51268__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_51278 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_51278,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_51278,"aria-");
}
})())){
el.setAttribute(ks_51278,value);
} else {
(el[ks_51278] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50195){
var map__50197 = p__50195;
var map__50197__$1 = cljs.core.__destructure_map(map__50197);
var props = map__50197__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50198 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50198,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50198,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50198,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50201 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50201,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50201;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50203 = arguments.length;
switch (G__50203) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50206){
var vec__50207 = p__50206;
var seq__50208 = cljs.core.seq(vec__50207);
var first__50209 = cljs.core.first(seq__50208);
var seq__50208__$1 = cljs.core.next(seq__50208);
var nn = first__50209;
var first__50209__$1 = cljs.core.first(seq__50208__$1);
var seq__50208__$2 = cljs.core.next(seq__50208__$1);
var np = first__50209__$1;
var nc = seq__50208__$2;
var node = vec__50207;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50210 = nn;
var G__50211 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50210,G__50211) : create_fn.call(null,G__50210,G__50211));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50215 = nn;
var G__50216 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50215,G__50216) : create_fn.call(null,G__50215,G__50216));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50230 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50230,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50230,(1),null);
var seq__50238_51301 = cljs.core.seq(node_children);
var chunk__50239_51302 = null;
var count__50240_51303 = (0);
var i__50241_51304 = (0);
while(true){
if((i__50241_51304 < count__50240_51303)){
var child_struct_51305 = chunk__50239_51302.cljs$core$IIndexed$_nth$arity$2(null,i__50241_51304);
var children_51306 = shadow.dom.dom_node(child_struct_51305);
if(cljs.core.seq_QMARK_(children_51306)){
var seq__50273_51307 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51306));
var chunk__50275_51308 = null;
var count__50276_51309 = (0);
var i__50277_51310 = (0);
while(true){
if((i__50277_51310 < count__50276_51309)){
var child_51311 = chunk__50275_51308.cljs$core$IIndexed$_nth$arity$2(null,i__50277_51310);
if(cljs.core.truth_(child_51311)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51311);


var G__51312 = seq__50273_51307;
var G__51313 = chunk__50275_51308;
var G__51314 = count__50276_51309;
var G__51315 = (i__50277_51310 + (1));
seq__50273_51307 = G__51312;
chunk__50275_51308 = G__51313;
count__50276_51309 = G__51314;
i__50277_51310 = G__51315;
continue;
} else {
var G__51316 = seq__50273_51307;
var G__51317 = chunk__50275_51308;
var G__51318 = count__50276_51309;
var G__51319 = (i__50277_51310 + (1));
seq__50273_51307 = G__51316;
chunk__50275_51308 = G__51317;
count__50276_51309 = G__51318;
i__50277_51310 = G__51319;
continue;
}
} else {
var temp__5753__auto___51320 = cljs.core.seq(seq__50273_51307);
if(temp__5753__auto___51320){
var seq__50273_51321__$1 = temp__5753__auto___51320;
if(cljs.core.chunked_seq_QMARK_(seq__50273_51321__$1)){
var c__4679__auto___51322 = cljs.core.chunk_first(seq__50273_51321__$1);
var G__51323 = cljs.core.chunk_rest(seq__50273_51321__$1);
var G__51324 = c__4679__auto___51322;
var G__51325 = cljs.core.count(c__4679__auto___51322);
var G__51326 = (0);
seq__50273_51307 = G__51323;
chunk__50275_51308 = G__51324;
count__50276_51309 = G__51325;
i__50277_51310 = G__51326;
continue;
} else {
var child_51327 = cljs.core.first(seq__50273_51321__$1);
if(cljs.core.truth_(child_51327)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51327);


var G__51328 = cljs.core.next(seq__50273_51321__$1);
var G__51329 = null;
var G__51330 = (0);
var G__51331 = (0);
seq__50273_51307 = G__51328;
chunk__50275_51308 = G__51329;
count__50276_51309 = G__51330;
i__50277_51310 = G__51331;
continue;
} else {
var G__51332 = cljs.core.next(seq__50273_51321__$1);
var G__51333 = null;
var G__51334 = (0);
var G__51335 = (0);
seq__50273_51307 = G__51332;
chunk__50275_51308 = G__51333;
count__50276_51309 = G__51334;
i__50277_51310 = G__51335;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51306);
}


var G__51336 = seq__50238_51301;
var G__51337 = chunk__50239_51302;
var G__51338 = count__50240_51303;
var G__51339 = (i__50241_51304 + (1));
seq__50238_51301 = G__51336;
chunk__50239_51302 = G__51337;
count__50240_51303 = G__51338;
i__50241_51304 = G__51339;
continue;
} else {
var temp__5753__auto___51340 = cljs.core.seq(seq__50238_51301);
if(temp__5753__auto___51340){
var seq__50238_51341__$1 = temp__5753__auto___51340;
if(cljs.core.chunked_seq_QMARK_(seq__50238_51341__$1)){
var c__4679__auto___51342 = cljs.core.chunk_first(seq__50238_51341__$1);
var G__51343 = cljs.core.chunk_rest(seq__50238_51341__$1);
var G__51344 = c__4679__auto___51342;
var G__51345 = cljs.core.count(c__4679__auto___51342);
var G__51346 = (0);
seq__50238_51301 = G__51343;
chunk__50239_51302 = G__51344;
count__50240_51303 = G__51345;
i__50241_51304 = G__51346;
continue;
} else {
var child_struct_51347 = cljs.core.first(seq__50238_51341__$1);
var children_51348 = shadow.dom.dom_node(child_struct_51347);
if(cljs.core.seq_QMARK_(children_51348)){
var seq__50300_51349 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51348));
var chunk__50302_51350 = null;
var count__50303_51351 = (0);
var i__50304_51352 = (0);
while(true){
if((i__50304_51352 < count__50303_51351)){
var child_51357 = chunk__50302_51350.cljs$core$IIndexed$_nth$arity$2(null,i__50304_51352);
if(cljs.core.truth_(child_51357)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51357);


var G__51358 = seq__50300_51349;
var G__51359 = chunk__50302_51350;
var G__51360 = count__50303_51351;
var G__51361 = (i__50304_51352 + (1));
seq__50300_51349 = G__51358;
chunk__50302_51350 = G__51359;
count__50303_51351 = G__51360;
i__50304_51352 = G__51361;
continue;
} else {
var G__51362 = seq__50300_51349;
var G__51363 = chunk__50302_51350;
var G__51364 = count__50303_51351;
var G__51365 = (i__50304_51352 + (1));
seq__50300_51349 = G__51362;
chunk__50302_51350 = G__51363;
count__50303_51351 = G__51364;
i__50304_51352 = G__51365;
continue;
}
} else {
var temp__5753__auto___51366__$1 = cljs.core.seq(seq__50300_51349);
if(temp__5753__auto___51366__$1){
var seq__50300_51367__$1 = temp__5753__auto___51366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50300_51367__$1)){
var c__4679__auto___51368 = cljs.core.chunk_first(seq__50300_51367__$1);
var G__51369 = cljs.core.chunk_rest(seq__50300_51367__$1);
var G__51370 = c__4679__auto___51368;
var G__51371 = cljs.core.count(c__4679__auto___51368);
var G__51372 = (0);
seq__50300_51349 = G__51369;
chunk__50302_51350 = G__51370;
count__50303_51351 = G__51371;
i__50304_51352 = G__51372;
continue;
} else {
var child_51373 = cljs.core.first(seq__50300_51367__$1);
if(cljs.core.truth_(child_51373)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51373);


var G__51374 = cljs.core.next(seq__50300_51367__$1);
var G__51375 = null;
var G__51376 = (0);
var G__51377 = (0);
seq__50300_51349 = G__51374;
chunk__50302_51350 = G__51375;
count__50303_51351 = G__51376;
i__50304_51352 = G__51377;
continue;
} else {
var G__51378 = cljs.core.next(seq__50300_51367__$1);
var G__51379 = null;
var G__51380 = (0);
var G__51381 = (0);
seq__50300_51349 = G__51378;
chunk__50302_51350 = G__51379;
count__50303_51351 = G__51380;
i__50304_51352 = G__51381;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51348);
}


var G__51382 = cljs.core.next(seq__50238_51341__$1);
var G__51383 = null;
var G__51384 = (0);
var G__51385 = (0);
seq__50238_51301 = G__51382;
chunk__50239_51302 = G__51383;
count__50240_51303 = G__51384;
i__50241_51304 = G__51385;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50325 = cljs.core.seq(node);
var chunk__50326 = null;
var count__50327 = (0);
var i__50328 = (0);
while(true){
if((i__50328 < count__50327)){
var n = chunk__50326.cljs$core$IIndexed$_nth$arity$2(null,i__50328);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51389 = seq__50325;
var G__51390 = chunk__50326;
var G__51391 = count__50327;
var G__51392 = (i__50328 + (1));
seq__50325 = G__51389;
chunk__50326 = G__51390;
count__50327 = G__51391;
i__50328 = G__51392;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50325);
if(temp__5753__auto__){
var seq__50325__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50325__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50325__$1);
var G__51393 = cljs.core.chunk_rest(seq__50325__$1);
var G__51394 = c__4679__auto__;
var G__51395 = cljs.core.count(c__4679__auto__);
var G__51396 = (0);
seq__50325 = G__51393;
chunk__50326 = G__51394;
count__50327 = G__51395;
i__50328 = G__51396;
continue;
} else {
var n = cljs.core.first(seq__50325__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51397 = cljs.core.next(seq__50325__$1);
var G__51398 = null;
var G__51399 = (0);
var G__51400 = (0);
seq__50325 = G__51397;
chunk__50326 = G__51398;
count__50327 = G__51399;
i__50328 = G__51400;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50335 = arguments.length;
switch (G__50335) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__50346 = arguments.length;
switch (G__50346) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__50370 = arguments.length;
switch (G__50370) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51407 = arguments.length;
var i__4865__auto___51408 = (0);
while(true){
if((i__4865__auto___51408 < len__4864__auto___51407)){
args__4870__auto__.push((arguments[i__4865__auto___51408]));

var G__51409 = (i__4865__auto___51408 + (1));
i__4865__auto___51408 = G__51409;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__50416_51410 = cljs.core.seq(nodes);
var chunk__50418_51411 = null;
var count__50419_51412 = (0);
var i__50420_51413 = (0);
while(true){
if((i__50420_51413 < count__50419_51412)){
var node_51414 = chunk__50418_51411.cljs$core$IIndexed$_nth$arity$2(null,i__50420_51413);
fragment.appendChild(shadow.dom._to_dom(node_51414));


var G__51415 = seq__50416_51410;
var G__51416 = chunk__50418_51411;
var G__51417 = count__50419_51412;
var G__51418 = (i__50420_51413 + (1));
seq__50416_51410 = G__51415;
chunk__50418_51411 = G__51416;
count__50419_51412 = G__51417;
i__50420_51413 = G__51418;
continue;
} else {
var temp__5753__auto___51419 = cljs.core.seq(seq__50416_51410);
if(temp__5753__auto___51419){
var seq__50416_51420__$1 = temp__5753__auto___51419;
if(cljs.core.chunked_seq_QMARK_(seq__50416_51420__$1)){
var c__4679__auto___51421 = cljs.core.chunk_first(seq__50416_51420__$1);
var G__51422 = cljs.core.chunk_rest(seq__50416_51420__$1);
var G__51423 = c__4679__auto___51421;
var G__51424 = cljs.core.count(c__4679__auto___51421);
var G__51425 = (0);
seq__50416_51410 = G__51422;
chunk__50418_51411 = G__51423;
count__50419_51412 = G__51424;
i__50420_51413 = G__51425;
continue;
} else {
var node_51426 = cljs.core.first(seq__50416_51420__$1);
fragment.appendChild(shadow.dom._to_dom(node_51426));


var G__51427 = cljs.core.next(seq__50416_51420__$1);
var G__51428 = null;
var G__51429 = (0);
var G__51430 = (0);
seq__50416_51410 = G__51427;
chunk__50418_51411 = G__51428;
count__50419_51412 = G__51429;
i__50420_51413 = G__51430;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50409){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50409));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50498_51434 = cljs.core.seq(scripts);
var chunk__50499_51435 = null;
var count__50500_51436 = (0);
var i__50501_51437 = (0);
while(true){
if((i__50501_51437 < count__50500_51436)){
var vec__50545_51438 = chunk__50499_51435.cljs$core$IIndexed$_nth$arity$2(null,i__50501_51437);
var script_tag_51439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50545_51438,(0),null);
var script_body_51440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50545_51438,(1),null);
eval(script_body_51440);


var G__51441 = seq__50498_51434;
var G__51442 = chunk__50499_51435;
var G__51443 = count__50500_51436;
var G__51444 = (i__50501_51437 + (1));
seq__50498_51434 = G__51441;
chunk__50499_51435 = G__51442;
count__50500_51436 = G__51443;
i__50501_51437 = G__51444;
continue;
} else {
var temp__5753__auto___51445 = cljs.core.seq(seq__50498_51434);
if(temp__5753__auto___51445){
var seq__50498_51446__$1 = temp__5753__auto___51445;
if(cljs.core.chunked_seq_QMARK_(seq__50498_51446__$1)){
var c__4679__auto___51447 = cljs.core.chunk_first(seq__50498_51446__$1);
var G__51448 = cljs.core.chunk_rest(seq__50498_51446__$1);
var G__51449 = c__4679__auto___51447;
var G__51450 = cljs.core.count(c__4679__auto___51447);
var G__51451 = (0);
seq__50498_51434 = G__51448;
chunk__50499_51435 = G__51449;
count__50500_51436 = G__51450;
i__50501_51437 = G__51451;
continue;
} else {
var vec__50552_51452 = cljs.core.first(seq__50498_51446__$1);
var script_tag_51453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50552_51452,(0),null);
var script_body_51454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50552_51452,(1),null);
eval(script_body_51454);


var G__51455 = cljs.core.next(seq__50498_51446__$1);
var G__51456 = null;
var G__51457 = (0);
var G__51458 = (0);
seq__50498_51434 = G__51455;
chunk__50499_51435 = G__51456;
count__50500_51436 = G__51457;
i__50501_51437 = G__51458;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50559){
var vec__50561 = p__50559;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50608 = arguments.length;
switch (G__50608) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50668 = cljs.core.seq(style_keys);
var chunk__50669 = null;
var count__50670 = (0);
var i__50671 = (0);
while(true){
if((i__50671 < count__50670)){
var it = chunk__50669.cljs$core$IIndexed$_nth$arity$2(null,i__50671);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51460 = seq__50668;
var G__51461 = chunk__50669;
var G__51462 = count__50670;
var G__51463 = (i__50671 + (1));
seq__50668 = G__51460;
chunk__50669 = G__51461;
count__50670 = G__51462;
i__50671 = G__51463;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50668);
if(temp__5753__auto__){
var seq__50668__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50668__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50668__$1);
var G__51464 = cljs.core.chunk_rest(seq__50668__$1);
var G__51465 = c__4679__auto__;
var G__51466 = cljs.core.count(c__4679__auto__);
var G__51467 = (0);
seq__50668 = G__51464;
chunk__50669 = G__51465;
count__50670 = G__51466;
i__50671 = G__51467;
continue;
} else {
var it = cljs.core.first(seq__50668__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51468 = cljs.core.next(seq__50668__$1);
var G__51469 = null;
var G__51470 = (0);
var G__51471 = (0);
seq__50668 = G__51468;
chunk__50669 = G__51469;
count__50670 = G__51470;
i__50671 = G__51471;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k50691,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__50734 = k50691;
var G__50734__$1 = (((G__50734 instanceof cljs.core.Keyword))?G__50734.fqn:null);
switch (G__50734__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50691,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__50762){
var vec__50763 = p__50762;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50763,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50763,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50690){
var self__ = this;
var G__50690__$1 = this;
return (new cljs.core.RecordIter((0),G__50690__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50693,other50694){
var self__ = this;
var this50693__$1 = this;
return (((!((other50694 == null)))) && ((((this50693__$1.constructor === other50694.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50693__$1.x,other50694.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50693__$1.y,other50694.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50693__$1.__extmap,other50694.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k50691){
var self__ = this;
var this__4509__auto____$1 = this;
var G__50792 = k50691;
var G__50792__$1 = (((G__50792 instanceof cljs.core.Keyword))?G__50792.fqn:null);
switch (G__50792__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50691);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__50690){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__50801 = cljs.core.keyword_identical_QMARK_;
var expr__50802 = k__4511__auto__;
if(cljs.core.truth_((pred__50801.cljs$core$IFn$_invoke$arity$2 ? pred__50801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50802) : pred__50801.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50802)))){
return (new shadow.dom.Coordinate(G__50690,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50801.cljs$core$IFn$_invoke$arity$2 ? pred__50801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50802) : pred__50801.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50802)))){
return (new shadow.dom.Coordinate(self__.x,G__50690,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__50690),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__50690){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50690,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50697){
var extmap__4542__auto__ = (function (){var G__50831 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50697,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50697)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50831);
} else {
return G__50831;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50697),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50697),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k50847,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__50860 = k50847;
var G__50860__$1 = (((G__50860 instanceof cljs.core.Keyword))?G__50860.fqn:null);
switch (G__50860__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50847,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__50868){
var vec__50873 = p__50868;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50873,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50873,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50846){
var self__ = this;
var G__50846__$1 = this;
return (new cljs.core.RecordIter((0),G__50846__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50848,other50849){
var self__ = this;
var this50848__$1 = this;
return (((!((other50849 == null)))) && ((((this50848__$1.constructor === other50849.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50848__$1.w,other50849.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50848__$1.h,other50849.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50848__$1.__extmap,other50849.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k50847){
var self__ = this;
var this__4509__auto____$1 = this;
var G__50904 = k50847;
var G__50904__$1 = (((G__50904 instanceof cljs.core.Keyword))?G__50904.fqn:null);
switch (G__50904__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50847);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__50846){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__50907 = cljs.core.keyword_identical_QMARK_;
var expr__50908 = k__4511__auto__;
if(cljs.core.truth_((pred__50907.cljs$core$IFn$_invoke$arity$2 ? pred__50907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50908) : pred__50907.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50908)))){
return (new shadow.dom.Size(G__50846,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50907.cljs$core$IFn$_invoke$arity$2 ? pred__50907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50908) : pred__50907.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50908)))){
return (new shadow.dom.Size(self__.w,G__50846,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__50846),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__50846){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50846,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50851){
var extmap__4542__auto__ = (function (){var G__50924 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50851,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50851)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50924);
} else {
return G__50924;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50851),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50851),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__51496 = (i + (1));
var G__51497 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51496;
ret = G__51497;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50946){
var vec__50947 = p__50946;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50947,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50958 = arguments.length;
switch (G__50958) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__51503 = ps;
var G__51504 = (i + (1));
el__$1 = G__51503;
i = G__51504;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51002 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51002,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51002,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51002,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51005_51505 = cljs.core.seq(props);
var chunk__51006_51506 = null;
var count__51007_51507 = (0);
var i__51008_51508 = (0);
while(true){
if((i__51008_51508 < count__51007_51507)){
var vec__51019_51509 = chunk__51006_51506.cljs$core$IIndexed$_nth$arity$2(null,i__51008_51508);
var k_51510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51019_51509,(0),null);
var v_51511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51019_51509,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_51510);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51510),v_51511);


var G__51512 = seq__51005_51505;
var G__51513 = chunk__51006_51506;
var G__51514 = count__51007_51507;
var G__51515 = (i__51008_51508 + (1));
seq__51005_51505 = G__51512;
chunk__51006_51506 = G__51513;
count__51007_51507 = G__51514;
i__51008_51508 = G__51515;
continue;
} else {
var temp__5753__auto___51516 = cljs.core.seq(seq__51005_51505);
if(temp__5753__auto___51516){
var seq__51005_51517__$1 = temp__5753__auto___51516;
if(cljs.core.chunked_seq_QMARK_(seq__51005_51517__$1)){
var c__4679__auto___51518 = cljs.core.chunk_first(seq__51005_51517__$1);
var G__51519 = cljs.core.chunk_rest(seq__51005_51517__$1);
var G__51520 = c__4679__auto___51518;
var G__51521 = cljs.core.count(c__4679__auto___51518);
var G__51522 = (0);
seq__51005_51505 = G__51519;
chunk__51006_51506 = G__51520;
count__51007_51507 = G__51521;
i__51008_51508 = G__51522;
continue;
} else {
var vec__51031_51523 = cljs.core.first(seq__51005_51517__$1);
var k_51524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51031_51523,(0),null);
var v_51525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51031_51523,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_51524);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51524),v_51525);


var G__51526 = cljs.core.next(seq__51005_51517__$1);
var G__51527 = null;
var G__51528 = (0);
var G__51529 = (0);
seq__51005_51505 = G__51526;
chunk__51006_51506 = G__51527;
count__51007_51507 = G__51528;
i__51008_51508 = G__51529;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51035 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51035,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51035,(1),null);
var seq__51038_51532 = cljs.core.seq(node_children);
var chunk__51040_51533 = null;
var count__51041_51534 = (0);
var i__51042_51535 = (0);
while(true){
if((i__51042_51535 < count__51041_51534)){
var child_struct_51536 = chunk__51040_51533.cljs$core$IIndexed$_nth$arity$2(null,i__51042_51535);
if((!((child_struct_51536 == null)))){
if(typeof child_struct_51536 === 'string'){
var text_51539 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51539),child_struct_51536].join(''));
} else {
var children_51540 = shadow.dom.svg_node(child_struct_51536);
if(cljs.core.seq_QMARK_(children_51540)){
var seq__51062_51541 = cljs.core.seq(children_51540);
var chunk__51064_51542 = null;
var count__51065_51543 = (0);
var i__51066_51544 = (0);
while(true){
if((i__51066_51544 < count__51065_51543)){
var child_51545 = chunk__51064_51542.cljs$core$IIndexed$_nth$arity$2(null,i__51066_51544);
if(cljs.core.truth_(child_51545)){
node.appendChild(child_51545);


var G__51546 = seq__51062_51541;
var G__51547 = chunk__51064_51542;
var G__51548 = count__51065_51543;
var G__51549 = (i__51066_51544 + (1));
seq__51062_51541 = G__51546;
chunk__51064_51542 = G__51547;
count__51065_51543 = G__51548;
i__51066_51544 = G__51549;
continue;
} else {
var G__51550 = seq__51062_51541;
var G__51551 = chunk__51064_51542;
var G__51552 = count__51065_51543;
var G__51553 = (i__51066_51544 + (1));
seq__51062_51541 = G__51550;
chunk__51064_51542 = G__51551;
count__51065_51543 = G__51552;
i__51066_51544 = G__51553;
continue;
}
} else {
var temp__5753__auto___51554 = cljs.core.seq(seq__51062_51541);
if(temp__5753__auto___51554){
var seq__51062_51555__$1 = temp__5753__auto___51554;
if(cljs.core.chunked_seq_QMARK_(seq__51062_51555__$1)){
var c__4679__auto___51556 = cljs.core.chunk_first(seq__51062_51555__$1);
var G__51557 = cljs.core.chunk_rest(seq__51062_51555__$1);
var G__51558 = c__4679__auto___51556;
var G__51559 = cljs.core.count(c__4679__auto___51556);
var G__51560 = (0);
seq__51062_51541 = G__51557;
chunk__51064_51542 = G__51558;
count__51065_51543 = G__51559;
i__51066_51544 = G__51560;
continue;
} else {
var child_51561 = cljs.core.first(seq__51062_51555__$1);
if(cljs.core.truth_(child_51561)){
node.appendChild(child_51561);


var G__51562 = cljs.core.next(seq__51062_51555__$1);
var G__51563 = null;
var G__51564 = (0);
var G__51565 = (0);
seq__51062_51541 = G__51562;
chunk__51064_51542 = G__51563;
count__51065_51543 = G__51564;
i__51066_51544 = G__51565;
continue;
} else {
var G__51566 = cljs.core.next(seq__51062_51555__$1);
var G__51567 = null;
var G__51568 = (0);
var G__51569 = (0);
seq__51062_51541 = G__51566;
chunk__51064_51542 = G__51567;
count__51065_51543 = G__51568;
i__51066_51544 = G__51569;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51540);
}
}


var G__51570 = seq__51038_51532;
var G__51571 = chunk__51040_51533;
var G__51572 = count__51041_51534;
var G__51573 = (i__51042_51535 + (1));
seq__51038_51532 = G__51570;
chunk__51040_51533 = G__51571;
count__51041_51534 = G__51572;
i__51042_51535 = G__51573;
continue;
} else {
var G__51575 = seq__51038_51532;
var G__51576 = chunk__51040_51533;
var G__51577 = count__51041_51534;
var G__51578 = (i__51042_51535 + (1));
seq__51038_51532 = G__51575;
chunk__51040_51533 = G__51576;
count__51041_51534 = G__51577;
i__51042_51535 = G__51578;
continue;
}
} else {
var temp__5753__auto___51579 = cljs.core.seq(seq__51038_51532);
if(temp__5753__auto___51579){
var seq__51038_51580__$1 = temp__5753__auto___51579;
if(cljs.core.chunked_seq_QMARK_(seq__51038_51580__$1)){
var c__4679__auto___51582 = cljs.core.chunk_first(seq__51038_51580__$1);
var G__51584 = cljs.core.chunk_rest(seq__51038_51580__$1);
var G__51585 = c__4679__auto___51582;
var G__51586 = cljs.core.count(c__4679__auto___51582);
var G__51587 = (0);
seq__51038_51532 = G__51584;
chunk__51040_51533 = G__51585;
count__51041_51534 = G__51586;
i__51042_51535 = G__51587;
continue;
} else {
var child_struct_51588 = cljs.core.first(seq__51038_51580__$1);
if((!((child_struct_51588 == null)))){
if(typeof child_struct_51588 === 'string'){
var text_51589 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51589),child_struct_51588].join(''));
} else {
var children_51590 = shadow.dom.svg_node(child_struct_51588);
if(cljs.core.seq_QMARK_(children_51590)){
var seq__51076_51591 = cljs.core.seq(children_51590);
var chunk__51078_51592 = null;
var count__51079_51593 = (0);
var i__51080_51594 = (0);
while(true){
if((i__51080_51594 < count__51079_51593)){
var child_51595 = chunk__51078_51592.cljs$core$IIndexed$_nth$arity$2(null,i__51080_51594);
if(cljs.core.truth_(child_51595)){
node.appendChild(child_51595);


var G__51596 = seq__51076_51591;
var G__51597 = chunk__51078_51592;
var G__51598 = count__51079_51593;
var G__51599 = (i__51080_51594 + (1));
seq__51076_51591 = G__51596;
chunk__51078_51592 = G__51597;
count__51079_51593 = G__51598;
i__51080_51594 = G__51599;
continue;
} else {
var G__51600 = seq__51076_51591;
var G__51601 = chunk__51078_51592;
var G__51602 = count__51079_51593;
var G__51603 = (i__51080_51594 + (1));
seq__51076_51591 = G__51600;
chunk__51078_51592 = G__51601;
count__51079_51593 = G__51602;
i__51080_51594 = G__51603;
continue;
}
} else {
var temp__5753__auto___51604__$1 = cljs.core.seq(seq__51076_51591);
if(temp__5753__auto___51604__$1){
var seq__51076_51606__$1 = temp__5753__auto___51604__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51076_51606__$1)){
var c__4679__auto___51607 = cljs.core.chunk_first(seq__51076_51606__$1);
var G__51608 = cljs.core.chunk_rest(seq__51076_51606__$1);
var G__51609 = c__4679__auto___51607;
var G__51610 = cljs.core.count(c__4679__auto___51607);
var G__51611 = (0);
seq__51076_51591 = G__51608;
chunk__51078_51592 = G__51609;
count__51079_51593 = G__51610;
i__51080_51594 = G__51611;
continue;
} else {
var child_51612 = cljs.core.first(seq__51076_51606__$1);
if(cljs.core.truth_(child_51612)){
node.appendChild(child_51612);


var G__51613 = cljs.core.next(seq__51076_51606__$1);
var G__51614 = null;
var G__51615 = (0);
var G__51616 = (0);
seq__51076_51591 = G__51613;
chunk__51078_51592 = G__51614;
count__51079_51593 = G__51615;
i__51080_51594 = G__51616;
continue;
} else {
var G__51617 = cljs.core.next(seq__51076_51606__$1);
var G__51618 = null;
var G__51619 = (0);
var G__51620 = (0);
seq__51076_51591 = G__51617;
chunk__51078_51592 = G__51618;
count__51079_51593 = G__51619;
i__51080_51594 = G__51620;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51590);
}
}


var G__51621 = cljs.core.next(seq__51038_51580__$1);
var G__51622 = null;
var G__51623 = (0);
var G__51624 = (0);
seq__51038_51532 = G__51621;
chunk__51040_51533 = G__51622;
count__51041_51534 = G__51623;
i__51042_51535 = G__51624;
continue;
} else {
var G__51625 = cljs.core.next(seq__51038_51580__$1);
var G__51626 = null;
var G__51627 = (0);
var G__51628 = (0);
seq__51038_51532 = G__51625;
chunk__51040_51533 = G__51626;
count__51041_51534 = G__51627;
i__51042_51535 = G__51628;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51630 = arguments.length;
var i__4865__auto___51631 = (0);
while(true){
if((i__4865__auto___51631 < len__4864__auto___51630)){
args__4870__auto__.push((arguments[i__4865__auto___51631]));

var G__51633 = (i__4865__auto___51631 + (1));
i__4865__auto___51631 = G__51633;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51090){
var G__51091 = cljs.core.first(seq51090);
var seq51090__$1 = cljs.core.next(seq51090);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51091,seq51090__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51097 = arguments.length;
switch (G__51097) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__47647__auto___51637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_51108){
var state_val_51109 = (state_51108[(1)]);
if((state_val_51109 === (1))){
var state_51108__$1 = state_51108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51108__$1,(2),once_or_cleanup);
} else {
if((state_val_51109 === (2))){
var inst_51105 = (state_51108[(2)]);
var inst_51106 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51108__$1 = (function (){var statearr_51114 = state_51108;
(statearr_51114[(7)] = inst_51105);

return statearr_51114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51108__$1,inst_51106);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__47191__auto__ = null;
var shadow$dom$state_machine__47191__auto____0 = (function (){
var statearr_51115 = [null,null,null,null,null,null,null,null];
(statearr_51115[(0)] = shadow$dom$state_machine__47191__auto__);

(statearr_51115[(1)] = (1));

return statearr_51115;
});
var shadow$dom$state_machine__47191__auto____1 = (function (state_51108){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_51108);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e51117){var ex__47194__auto__ = e51117;
var statearr_51118_51643 = state_51108;
(statearr_51118_51643[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_51108[(4)]))){
var statearr_51119_51644 = state_51108;
(statearr_51119_51644[(1)] = cljs.core.first((state_51108[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51646 = state_51108;
state_51108 = G__51646;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
shadow$dom$state_machine__47191__auto__ = function(state_51108){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__47191__auto____0.call(this);
case 1:
return shadow$dom$state_machine__47191__auto____1.call(this,state_51108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__47191__auto____0;
shadow$dom$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__47191__auto____1;
return shadow$dom$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_51124 = f__47648__auto__();
(statearr_51124[(6)] = c__47647__auto___51637);

return statearr_51124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
