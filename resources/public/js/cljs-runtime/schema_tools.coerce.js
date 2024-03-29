goog.provide('schema_tools.coerce');
schema_tools.coerce.coerce_or_error_BANG_ = (function schema_tools$coerce$coerce_or_error_BANG_(value,schema__$1,coercer,type){
var coerced = (coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(value) : coercer.call(null,value));
var temp__5751__auto__ = schema.utils.error_val(coerced);
if(cljs.core.truth_(temp__5751__auto__)){
var error = temp__5751__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Could not coerce value to schema: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error], null));
} else {
return coerced;
}
});
schema_tools.coerce.filter_schema_keys = (function schema_tools$coerce$filter_schema_keys(m,schema_keys,extra_keys_checker){
return cljs.core.reduce_kv((function (m__$1,k,_){
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.contains_QMARK_(schema_keys,k);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = extra_keys_checker;
if(cljs.core.truth_(and__4251__auto__)){
return (!(schema.utils.error_QMARK_((extra_keys_checker.cljs$core$IFn$_invoke$arity$1 ? extra_keys_checker.cljs$core$IFn$_invoke$arity$1(k) : extra_keys_checker.call(null,k)))));
} else {
return and__4251__auto__;
}
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
});
/**
 * Creates a matcher which removes all illegal keys from non-record maps.
 */
schema_tools.coerce.map_filter_matcher = (function schema_tools$coerce$map_filter_matcher(schema__$1){
if(((cljs.core.map_QMARK_(schema__$1)) && ((!(cljs.core.record_QMARK_(schema__$1)))))){
var extra_keys_schema = schema.core.find_extra_keys_schema(schema__$1);
var extra_keys_checker = (cljs.core.truth_(extra_keys_schema)?schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),true,extra_keys_schema):null);
var explicit_keys = (function (){var G__45853 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema__$1,extra_keys_schema);
var G__45853__$1 = (((G__45853 == null))?null:cljs.core.keys(G__45853));
var G__45853__$2 = (((G__45853__$1 == null))?null:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explicit_schema_key,G__45853__$1));
if((G__45853__$2 == null)){
return null;
} else {
return cljs.core.set(G__45853__$2);
}
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = extra_keys_checker;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.seq(explicit_keys);
}
})())){
return (function (x){
if(cljs.core.map_QMARK_(x)){
return schema_tools.coerce.filter_schema_keys(x,explicit_keys,extra_keys_checker);
} else {
return x;
}
});
} else {
return null;
}
} else {
return null;
}
});
/**
 * Creates a matcher which converts nils to default values. You can set default values
 *   with [[schema-tools.core/default]].
 */
schema_tools.coerce.default_value_matcher = (function schema_tools$coerce$default_value_matcher(schema__$1){
if(cljs.core.truth_(schema_tools.impl.default_QMARK_(schema__$1))){
return (function (value){
if((value == null)){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(schema__$1);
} else {
return value;
}
});
} else {
return null;
}
});
/**
 * Deprecated - use [[default-value-matcher]] instead.
 */
schema_tools.coerce.default_coercion_matcher = schema_tools.coerce.default_value_matcher;
/**
 * Creates a matcher which adds missing keys to a map if they have default values.
 *   You can set default values with [[schema-tools.core/default]].
 */
schema_tools.coerce.default_key_matcher = (function schema_tools$coerce$default_key_matcher(schema__$1){
if(((cljs.core.map_QMARK_(schema__$1)) && ((!(cljs.core.record_QMARK_(schema__$1)))))){
var default_map = cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(schema_tools.impl.default_QMARK_(v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,schema__$1);
if(cljs.core.seq(default_map)){
return (function (x){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_map,x], 0));
});
} else {
return null;
}
} else {
return null;
}
});
/**
 * Combination of [[default-value-matcher]] and [[default-key-matcher]]: Creates
 *   a matcher which adds missing keys with default values to a map and converts
 *   nils to default values. You can set default values with
 *   [[schema-tools.core/default]].
 */
schema_tools.coerce.default_matcher = (function schema_tools$coerce$default_matcher(schema__$1){
var or__4253__auto__ = schema_tools.coerce.default_key_matcher(schema__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return schema_tools.coerce.default_value_matcher(schema__$1);
}
});
/**
 * Creates a matcher for (accept-schema schema), reducing
 *   value with fs functions if (accept-value value).
 */
schema_tools.coerce.multi_matcher = (function schema_tools$coerce$multi_matcher(accept_schema,accept_value,fs){
return (function (schema__$1){
if(cljs.core.truth_((accept_schema.cljs$core$IFn$_invoke$arity$1 ? accept_schema.cljs$core$IFn$_invoke$arity$1(schema__$1) : accept_schema.call(null,schema__$1)))){
return (function (value){
if(cljs.core.truth_((accept_value.cljs$core$IFn$_invoke$arity$1 ? accept_value.cljs$core$IFn$_invoke$arity$1(value) : accept_value.call(null,value)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__45885_SHARP_,p2__45884_SHARP_){
return (p2__45884_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__45884_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__45885_SHARP_) : p2__45884_SHARP_.call(null,p1__45885_SHARP_));
}),value,fs);
} else {
return value;
}
});
} else {
return null;
}
});
});
/**
 * Creates a matcher where the first matcher matching the
 *   given schema is used.
 */
schema_tools.coerce.or_matcher = (function schema_tools$coerce$or_matcher(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45904 = arguments.length;
var i__4865__auto___45905 = (0);
while(true){
if((i__4865__auto___45905 < len__4864__auto___45904)){
args__4870__auto__.push((arguments[i__4865__auto___45905]));

var G__45906 = (i__4865__auto___45905 + (1));
i__4865__auto___45905 = G__45906;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return schema_tools.coerce.or_matcher.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(schema_tools.coerce.or_matcher.cljs$core$IFn$_invoke$arity$variadic = (function (matchers){
return (function (schema__$1){
return cljs.core.some((function (p1__45886_SHARP_){
return (p1__45886_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45886_SHARP_.cljs$core$IFn$_invoke$arity$1(schema__$1) : p1__45886_SHARP_.call(null,schema__$1));
}),matchers);
});
}));

(schema_tools.coerce.or_matcher.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema_tools.coerce.or_matcher.cljs$lang$applyTo = (function (seq45887){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45887));
}));

/**
 * Creates a matcher where all matchers are combined with OR,
 *   but if the lead-matcher matches, it creates a sub-coercer and
 *   forwards the coerced value to tail-matchers.
 */
schema_tools.coerce.forwarding_matcher = (function schema_tools$coerce$forwarding_matcher(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45907 = arguments.length;
var i__4865__auto___45908 = (0);
while(true){
if((i__4865__auto___45908 < len__4864__auto___45907)){
args__4870__auto__.push((arguments[i__4865__auto___45908]));

var G__45909 = (i__4865__auto___45908 + (1));
i__4865__auto___45908 = G__45909;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return schema_tools.coerce.forwarding_matcher.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(schema_tools.coerce.forwarding_matcher.cljs$core$IFn$_invoke$arity$variadic = (function (lead_matcher,tail_matchers){
var match_tail = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema_tools.coerce.or_matcher,tail_matchers);
return schema_tools.coerce.or_matcher.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (schema__$1){
var temp__5751__auto__ = (lead_matcher.cljs$core$IFn$_invoke$arity$1 ? lead_matcher.cljs$core$IFn$_invoke$arity$1(schema__$1) : lead_matcher.call(null,schema__$1));
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return (function (x){
var x1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.truth_((function (){var and__4251__auto__ = x1;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,x1);
} else {
return and__4251__auto__;
}
})())){
var coercer = schema.coerce.coercer(schema__$1,match_tail);
return (coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(x1) : coercer.call(null,x1));
} else {
return x1;
}
});
} else {
return null;
}
}),match_tail], 0));
}));

(schema_tools.coerce.forwarding_matcher.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema_tools.coerce.forwarding_matcher.cljs$lang$applyTo = (function (seq45888){
var G__45889 = cljs.core.first(seq45888);
var seq45888__$1 = cljs.core.next(seq45888);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45889,seq45888__$1);
}));

/**
 * Produce a function that simultaneously coerces and validates a value against a `schema.`
 *   If a value can't be coerced to match the schema, an `ex-info` is thrown - like `schema.core/validate`,
 *   but with overridable `:type`, defaulting to `:schema-tools.coerce/error.`
 */
schema_tools.coerce.coercer = (function schema_tools$coerce$coercer(var_args){
var G__45891 = arguments.length;
switch (G__45891) {
case 1:
return schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$1 = (function (schema__$1){
return schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$2(schema__$1,cljs.core.constantly(null));
}));

(schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$2 = (function (schema__$1,matcher){
return schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$3(schema__$1,matcher,new cljs.core.Keyword("schema-tools.coerce","error","schema-tools.coerce/error",-196891250));
}));

(schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$3 = (function (schema__$1,matcher,type){
var coercer = schema.coerce.coercer(schema__$1,matcher);
return (function (value){
return schema_tools.coerce.coerce_or_error_BANG_(value,schema__$1,coercer,type);
});
}));

(schema_tools.coerce.coercer.cljs$lang$maxFixedArity = 3);

/**
 * Simultaneously coerces and validates a value to match the given `schema.` If a `value` can't
 *   be coerced to match the `schema`, an `ex-info` is thrown - like `schema.core/validate`,
 *   but with overridable `:type`, defaulting to `:schema-tools.coerce/error.`
 */
schema_tools.coerce.coerce = (function schema_tools$coerce$coerce(var_args){
var G__45893 = arguments.length;
switch (G__45893) {
case 2:
return schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$2 = (function (value,schema__$1){
return schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$3(value,schema__$1,cljs.core.constantly(null));
}));

(schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$3 = (function (value,schema__$1,matcher){
return schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$4(value,schema__$1,matcher,new cljs.core.Keyword("schema-tools.coerce","error","schema-tools.coerce/error",-196891250));
}));

(schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$4 = (function (value,schema__$1,matcher,type){
return schema_tools.coerce.coercer.cljs$core$IFn$_invoke$arity$3(schema__$1,matcher,type)(value);
}));

(schema_tools.coerce.coerce.cljs$lang$maxFixedArity = 4);

schema_tools.coerce.safe = (function schema_tools$coerce$safe(f){
return (function (x){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}catch (e45894){if((e45894 instanceof Error)){
var _ = e45894;
return x;
} else {
throw e45894;

}
}});
});
schema_tools.coerce.string__GT_boolean = (function schema_tools$coerce$string__GT_boolean(x){
if(typeof x === 'string'){
var pred__45895 = cljs.core._EQ_;
var expr__45896 = x;
if(cljs.core.truth_((pred__45895.cljs$core$IFn$_invoke$arity$2 ? pred__45895.cljs$core$IFn$_invoke$arity$2("true",expr__45896) : pred__45895.call(null,"true",expr__45896)))){
return true;
} else {
if(cljs.core.truth_((pred__45895.cljs$core$IFn$_invoke$arity$2 ? pred__45895.cljs$core$IFn$_invoke$arity$2("false",expr__45896) : pred__45895.call(null,"false",expr__45896)))){
return false;
} else {
return x;
}
}
} else {
return x;
}
});
schema_tools.coerce.safe_int = (function schema_tools$coerce$safe_int(x){
return x;
});
schema_tools.coerce.string__GT_number = (function schema_tools$coerce$string__GT_number(x){
if(typeof x === 'string'){
try{var parsed = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(x);
if(typeof parsed === 'number'){
return parsed;
} else {
return x;
}
}catch (e45898){if((e45898 instanceof Error)){
var _ = e45898;
return x;
} else {
throw e45898;

}
}} else {
return x;
}
});
schema_tools.coerce.string__GT_uuid = (function schema_tools$coerce$string__GT_uuid(x){
if(typeof x === 'string'){
try{if(cljs.core.truth_(cljs.core.re_find(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,x))){
return cljs.core.uuid(x);
} else {
return x;
}
}catch (e45899){if((e45899 instanceof Error)){
var _ = e45899;
return x;
} else {
throw e45899;

}
}} else {
return x;
}
});
schema_tools.coerce.string__GT_date = (function schema_tools$coerce$string__GT_date(x){
if(typeof x === 'string'){
try{return (new Date(goog.date.UtcDateTime.fromIsoString(x).getTime()));
}catch (e45900){if((e45900 instanceof Error)){
var _ = e45900;
return x;
} else {
throw e45900;

}
}} else {
return x;
}
});
schema_tools.coerce.keyword__GT_string = (function schema_tools$coerce$keyword__GT_string(x){
if((x instanceof cljs.core.Keyword)){
var temp__5751__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__5751__auto__)){
var kw_ns = temp__5751__auto__;
return [kw_ns,"/",cljs.core.name(x)].join('');
} else {
return cljs.core.name(x);
}
} else {
return x;
}
});
schema_tools.coerce.keyword__GT_number = (function schema_tools$coerce$keyword__GT_number(x){
if((x instanceof cljs.core.Keyword)){
return schema_tools.coerce.string__GT_number(schema_tools.coerce.keyword__GT_string(x));
} else {
return x;
}
});
schema_tools.coerce.keyword__GT_bool = (function schema_tools$coerce$keyword__GT_bool(x){
if((x instanceof cljs.core.Keyword)){
return schema_tools.coerce.string__GT_boolean(schema_tools.coerce.keyword__GT_string(x));
} else {
return x;
}
});
schema_tools.coerce.collection_matcher = (function schema_tools$coerce$collection_matcher(schema__$1){
if(((cljs.core.coll_QMARK_(schema__$1)) && ((!(cljs.core.record_QMARK_(schema__$1)))))){
return (function (x){
if(cljs.core.coll_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
} else {
return null;
}
});
schema_tools.coerce._PLUS_json_coercions_PLUS_ = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Str,schema_tools.coerce.keyword__GT_string,schema.core.Uuid,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema_tools.coerce.string__GT_uuid,schema_tools.coerce.keyword__GT_string),schema.core.Int,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema_tools.coerce.safe_int,schema_tools.coerce.keyword__GT_number),schema.core.Bool,schema_tools.coerce.keyword__GT_bool,Date,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema_tools.coerce.string__GT_date,schema_tools.coerce.keyword__GT_string)]);
schema_tools.coerce._PLUS_string_coercions_PLUS_ = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Int,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(schema_tools.coerce.safe_int,schema_tools.coerce.string__GT_number,schema_tools.coerce.keyword__GT_string),schema.core.Num,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema_tools.coerce.string__GT_number,schema_tools.coerce.keyword__GT_string),schema.core.Bool,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema_tools.coerce.string__GT_boolean,schema_tools.coerce.keyword__GT_string)]);
schema_tools.coerce.json_coercion_matcher = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(schema_tools.coerce._PLUS_json_coercions_PLUS_,schema.coerce.keyword_enum_matcher,schema.coerce.set_matcher);
schema_tools.coerce.string_coercion_matcher = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(schema_tools.coerce._PLUS_string_coercions_PLUS_,schema_tools.coerce.collection_matcher,schema_tools.coerce.json_coercion_matcher);

//# sourceMappingURL=schema_tools.coerce.js.map
