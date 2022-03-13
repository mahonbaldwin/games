goog.provide('schema.spec.core');

/**
 * Specs are a common language for Schemas to express their structure.
 * These two use-cases aren't priveledged, just the two that are considered core
 * to being a Spec.
 * @interface
 */
schema.spec.core.CoreSpec = function(){};

var schema$spec$core$CoreSpec$subschemas$dyn_50420 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (schema.spec.core.subschemas[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (schema.spec.core.subschemas["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoreSpec.subschemas",this$);
}
}
});
/**
 * List all subschemas
 */
schema.spec.core.subschemas = (function schema$spec$core$subschemas(this$){
if((((!((this$ == null)))) && ((!((this$.schema$spec$core$CoreSpec$subschemas$arity$1 == null)))))){
return this$.schema$spec$core$CoreSpec$subschemas$arity$1(this$);
} else {
return schema$spec$core$CoreSpec$subschemas$dyn_50420(this$);
}
});

var schema$spec$core$CoreSpec$checker$dyn_50421 = (function (this$,params){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (schema.spec.core.checker[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__4551__auto__.call(null,this$,params));
} else {
var m__4549__auto__ = (schema.spec.core.checker["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__4549__auto__.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("CoreSpec.checker",this$);
}
}
});
/**
 * Create a function that takes [data], and either returns a walked version of data
 *   (by default, usually just data), or a utils/ErrorContainer containing value that looks
 *   like the 'bad' parts of data with ValidationErrors at the leaves describing the failures.
 * 
 *   params are: subschema-checker, return-walked?, and cache.
 * 
 *   params is a map specifying:
 *    - subschema-checker - a function for checking subschemas
 *    - returned-walked? - a boolean specifying whether to return a walked version of the data
 *      (otherwise, nil is returned which increases performance)
 *    - cache - a map structure from schema to checker, which speeds up checker creation
 *      when the same subschema appears multiple times, and also facilitates handling
 *      recursive schemas.
 */
schema.spec.core.checker = (function schema$spec$core$checker(this$,params){
if((((!((this$ == null)))) && ((!((this$.schema$spec$core$CoreSpec$checker$arity$2 == null)))))){
return this$.schema$spec$core$CoreSpec$checker$arity$2(this$,params);
} else {
return schema$spec$core$CoreSpec$checker$dyn_50421(this$,params);
}
});

schema.spec.core._PLUS_no_precondition_PLUS_ = (function schema$spec$core$_PLUS_no_precondition_PLUS_(_){
return null;
});
/**
 * Helper for making preconditions.
 * Takes a schema, predicate p, and error function err-f.
 * If the datum passes the predicate, returns nil.
 * Otherwise, returns a validation error with description (err-f datum-description),
 * where datum-description is a (short) printable standin for the datum.
 */
schema.spec.core.precondition = (function schema$spec$core$precondition(s,p,err_f){
return (function (x){
var temp__5753__auto__ = (function (){try{if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x)))){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e50408){if((e50408 instanceof Object)){
var e_SHARP_ = e50408;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e50408;

}
}})();
if(cljs.core.truth_(temp__5753__auto__)){
var reason = temp__5753__auto__;
return schema.utils.error(schema.utils.make_ValidationError(s,x,(new cljs.core.Delay((function (){
var G__50409 = schema.utils.value_name(x);
return (err_f.cljs$core$IFn$_invoke$arity$1 ? err_f.cljs$core$IFn$_invoke$arity$1(G__50409) : err_f.call(null,G__50409));
}),null)),reason));
} else {
return null;
}
});
});
/**
 * A helper to start a checking run, by setting the appropriate params.
 * For examples, see schema.core/checker or schema.coerce/coercer.
 */
schema.spec.core.run_checker = (function schema$spec$core$run_checker(f,return_walked_QMARK_,s){
var G__50410 = s;
var G__50411 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subschema-checker","subschema-checker",1137701360),f,new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015),return_walked_QMARK_,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__50410,G__50411) : f.call(null,G__50410,G__50411));
});
schema.spec.core.with_cache = (function schema$spec$core$with_cache(cache,cache_key,wrap_recursive_delay,result_fn){
var temp__5751__auto__ = (function (){var fexpr__50412 = cljs.core.deref(cache);
return (fexpr__50412.cljs$core$IFn$_invoke$arity$1 ? fexpr__50412.cljs$core$IFn$_invoke$arity$1(cache_key) : fexpr__50412.call(null,cache_key));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var w = temp__5751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("schema.spec.core","in-progress","schema.spec.core/in-progress",-1604867615),w)){
var G__50413 = (new cljs.core.Delay((function (){
var fexpr__50414 = cljs.core.deref(cache);
return (fexpr__50414.cljs$core$IFn$_invoke$arity$1 ? fexpr__50414.cljs$core$IFn$_invoke$arity$1(cache_key) : fexpr__50414.call(null,cache_key));
}),null));
return (wrap_recursive_delay.cljs$core$IFn$_invoke$arity$1 ? wrap_recursive_delay.cljs$core$IFn$_invoke$arity$1(G__50413) : wrap_recursive_delay.call(null,G__50413));
} else {
return w;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,cache_key,new cljs.core.Keyword("schema.spec.core","in-progress","schema.spec.core/in-progress",-1604867615));

var res = (result_fn.cljs$core$IFn$_invoke$arity$0 ? result_fn.cljs$core$IFn$_invoke$arity$0() : result_fn.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,cache_key,res);

return res;
}
});
/**
 * Should be called recursively on each subschema in the 'checker' method of a spec.
 * Handles caching and error wrapping behavior.
 */
schema.spec.core.sub_checker = (function schema$spec$core$sub_checker(p__50415,p__50416){
var map__50417 = p__50415;
var map__50417__$1 = cljs.core.__destructure_map(map__50417);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50417__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var error_wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50417__$1,new cljs.core.Keyword(null,"error-wrap","error-wrap",-1295833514));
var map__50418 = p__50416;
var map__50418__$1 = cljs.core.__destructure_map(map__50418);
var params = map__50418__$1;
var subschema_checker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50418__$1,new cljs.core.Keyword(null,"subschema-checker","subschema-checker",1137701360));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50418__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var sub = schema.spec.core.with_cache(cache,schema__$1,(function (d){
return (function (x){
var fexpr__50419 = cljs.core.deref(d);
return (fexpr__50419.cljs$core$IFn$_invoke$arity$1 ? fexpr__50419.cljs$core$IFn$_invoke$arity$1(x) : fexpr__50419.call(null,x));
});
}),(function (){
return (subschema_checker.cljs$core$IFn$_invoke$arity$2 ? subschema_checker.cljs$core$IFn$_invoke$arity$2(schema__$1,params) : subschema_checker.call(null,schema__$1,params));
}));
if(cljs.core.truth_(error_wrap)){
return (function (x){
var res = (sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(x) : sub.call(null,x));
var temp__5751__auto__ = schema.utils.error_val(res);
if(cljs.core.truth_(temp__5751__auto__)){
var e = temp__5751__auto__;
return schema.utils.error((error_wrap.cljs$core$IFn$_invoke$arity$1 ? error_wrap.cljs$core$IFn$_invoke$arity$1(res) : error_wrap.call(null,res)));
} else {
return res;
}
});
} else {
return sub;
}
});

//# sourceMappingURL=schema.spec.core.js.map
