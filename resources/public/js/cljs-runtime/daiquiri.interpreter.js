goog.provide('daiquiri.interpreter');
goog.scope(function(){
  daiquiri.interpreter.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.component_attributes = (function daiquiri$interpreter$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__52173_52232 = cljs.core.seq(x);
var chunk__52174_52233 = null;
var count__52175_52234 = (0);
var i__52176_52235 = (0);
while(true){
if((i__52176_52235 < count__52175_52234)){
var vec__52184_52236 = chunk__52174_52233.cljs$core$IIndexed$_nth$arity$2(null,i__52176_52235);
var k_52237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52184_52236,(0),null);
var v_52238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52184_52236,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_52237),v_52238);


var G__52239 = seq__52173_52232;
var G__52240 = chunk__52174_52233;
var G__52241 = count__52175_52234;
var G__52242 = (i__52176_52235 + (1));
seq__52173_52232 = G__52239;
chunk__52174_52233 = G__52240;
count__52175_52234 = G__52241;
i__52176_52235 = G__52242;
continue;
} else {
var temp__5753__auto___52243 = cljs.core.seq(seq__52173_52232);
if(temp__5753__auto___52243){
var seq__52173_52244__$1 = temp__5753__auto___52243;
if(cljs.core.chunked_seq_QMARK_(seq__52173_52244__$1)){
var c__4679__auto___52245 = cljs.core.chunk_first(seq__52173_52244__$1);
var G__52246 = cljs.core.chunk_rest(seq__52173_52244__$1);
var G__52247 = c__4679__auto___52245;
var G__52248 = cljs.core.count(c__4679__auto___52245);
var G__52249 = (0);
seq__52173_52232 = G__52246;
chunk__52174_52233 = G__52247;
count__52175_52234 = G__52248;
i__52176_52235 = G__52249;
continue;
} else {
var vec__52193_52250 = cljs.core.first(seq__52173_52244__$1);
var k_52251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52193_52250,(0),null);
var v_52252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52193_52250,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_52251),v_52252);


var G__52253 = cljs.core.next(seq__52173_52244__$1);
var G__52254 = null;
var G__52255 = (0);
var G__52256 = (0);
seq__52173_52232 = G__52253;
chunk__52174_52233 = G__52254;
count__52175_52234 = G__52255;
i__52176_52235 = G__52256;
continue;
}
} else {
}
}
break;
}

return m;
});
daiquiri.interpreter.element_attributes = (function daiquiri$interpreter$element_attributes(attrs){
var temp__5753__auto__ = cljs.core.clj__GT_js(daiquiri.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5753__auto__)){
var js_attrs = temp__5753__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(js_attrs.onChange)){
(js_attrs.onChange = rum.core.mark_sync_update(js_attrs.onChange));
} else {
}

if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
ret.push((daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1 ? daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : daiquiri.interpreter.interpret.call(null,x__$1)));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__52209 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52209,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52209,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52209,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__52212){
var vec__52213 = p__52212;
var seq__52214 = cljs.core.seq(vec__52213);
var first__52215 = cljs.core.first(seq__52214);
var seq__52214__$1 = cljs.core.next(seq__52214);
var _ = first__52215;
var first__52215__$1 = cljs.core.first(seq__52214__$1);
var seq__52214__$2 = cljs.core.next(seq__52214__$1);
var attrs = first__52215__$1;
var children = seq__52214__$2;
var vec__52216 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52216,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52216,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__52220){
var vec__52223 = p__52220;
var seq__52224 = cljs.core.seq(vec__52223);
var first__52225 = cljs.core.first(seq__52224);
var seq__52224__$1 = cljs.core.next(seq__52224);
var _ = first__52225;
var first__52225__$1 = cljs.core.first(seq__52224__$1);
var seq__52224__$2 = cljs.core.next(seq__52224__$1);
var component = first__52225__$1;
var first__52225__$2 = cljs.core.first(seq__52224__$2);
var seq__52224__$3 = cljs.core.next(seq__52224__$2);
var attrs = first__52225__$2;
var children = seq__52224__$3;
var vec__52226 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52226,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52226,(1),null);
return daiquiri.interpreter.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(x)){
return daiquiri.interpreter.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return daiquiri.interpreter.element(x);
} else {
return daiquiri.interpreter.interpret_seq(x);

}
}
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return daiquiri.interpreter.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return daiquiri.interpreter.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=daiquiri.interpreter.js.map
