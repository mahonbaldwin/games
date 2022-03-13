goog.provide('schema_tools.core');
schema_tools.core.explicit_key = (function schema_tools$core$explicit_key(k){
if(schema.core.specific_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return k;
}
});
schema_tools.core.explicit_key_set = (function schema_tools$core$explicit_key_set(ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,schema_tools.core.explicit_key(k));
}),cljs.core.PersistentHashSet.EMPTY,ks);
});
schema_tools.core.single_sequence_element_QMARK_ = (function schema_tools$core$single_sequence_element_QMARK_(x){
return (x instanceof schema.core.One);
});
schema_tools.core.index_in_schema = (function schema_tools$core$index_in_schema(m,k){
var last_idx = (cljs.core.count(m) - (1));
if((k <= last_idx)){
return k;
} else {
if((!(schema_tools.core.single_sequence_element_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,last_idx))))){
return last_idx;
} else {
return null;

}
}
});
schema_tools.core.key_in_schema = (function schema_tools$core$key_in_schema(m,k){
if(((cljs.core.sequential_QMARK_(m)) && (typeof k === 'number'))){
return schema_tools.core.index_in_schema(m,k);
} else {
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
if(cljs.core.contains_QMARK_(m,schema.core.required_key(k))){
return schema.core.required_key(k);
} else {
if(((schema.core.specific_key_QMARK_(k)) && (cljs.core.contains_QMARK_(m,schema.core.explicit_schema_key(k))))){
return schema.core.explicit_schema_key(k);
} else {
return k;

}
}
}
}
}
});
schema_tools.core.unwrap_sequence_schemas = (function schema_tools$core$unwrap_sequence_schemas(m){
if(schema_tools.core.single_sequence_element_QMARK_(m)){
return new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(m);
} else {
return m;

}
});
schema_tools.core.get_in_schema = (function schema_tools$core$get_in_schema(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45986 = arguments.length;
var i__4865__auto___45987 = (0);
while(true){
if((i__4865__auto___45987 < len__4864__auto___45986)){
args__4870__auto__.push((arguments[i__4865__auto___45987]));

var G__45989 = (i__4865__auto___45987 + (1));
i__4865__auto___45987 = G__45989;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,p__45915){
var vec__45916 = p__45915;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45916,(0),null);
return schema_tools.core.unwrap_sequence_schemas(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,schema_tools.core.key_in_schema(m,k),default$));
}));

(schema_tools.core.get_in_schema.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(schema_tools.core.get_in_schema.cljs$lang$applyTo = (function (seq45912){
var G__45913 = cljs.core.first(seq45912);
var seq45912__$1 = cljs.core.next(seq45912);
var G__45914 = cljs.core.first(seq45912__$1);
var seq45912__$2 = cljs.core.next(seq45912__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45913,G__45914,seq45912__$2);
}));

schema_tools.core.maybe_anonymous = (function schema_tools$core$maybe_anonymous(original,current){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(original,current)){
return original;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(current,(function (meta){
var new_meta = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(meta,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760)], 0));
if(cljs.core.empty_QMARK_(new_meta)){
return null;
} else {
return new_meta;
}
}));
}
});
schema_tools.core.transform_keys = (function schema_tools$core$transform_keys(schema__$1,f,ks,optional_keys_schema_QMARK_){
if(((cljs.core.not(ks)) || (cljs.core.vector_QMARK_(ks)))){
} else {
throw (new Error(["Assert failed: ","input should be nil or a vector of keys.","\n","(or (not ks) (vector? ks))"].join('')));
}

return schema_tools.core.maybe_anonymous(schema__$1,(function (){var ks_QMARK_ = schema_tools.core.explicit_key_set(ks);
return schema_tools.util.map_keys((function (k){
if(cljs.core.truth_((function (){var and__4251__auto__ = ks;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not((function (){var G__45919 = schema_tools.core.explicit_key(k);
return (ks_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ks_QMARK_.cljs$core$IFn$_invoke$arity$1(G__45919) : ks_QMARK_.call(null,G__45919));
})());
} else {
return and__4251__auto__;
}
})())){
return k;
} else {
if(schema.core.specific_key_QMARK_(k)){
var G__45920 = schema.core.explicit_schema_key(k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45920) : f.call(null,G__45920));
} else {
if(cljs.core.truth_(optional_keys_schema_QMARK_)){
return k;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));

}
}
}
}),schema__$1);
})());
});
schema_tools.core.AnyKeys = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,schema.core.Any]);
schema_tools.core.any_keys = (function schema_tools$core$any_keys(){
return schema_tools.core.AnyKeys;
});
schema_tools.core.AnyKeywordKeys = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]);
schema_tools.core.any_keyword_keys = (function schema_tools$core$any_keyword_keys(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45991 = arguments.length;
var i__4865__auto___45992 = (0);
while(true){
if((i__4865__auto___45992 < len__4864__auto___45991)){
args__4870__auto__.push((arguments[i__4865__auto___45992]));

var G__45993 = (i__4865__auto___45992 + (1));
i__4865__auto___45992 = G__45993;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return schema_tools.core.any_keyword_keys.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(schema_tools.core.any_keyword_keys.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,schema_tools.core.AnyKeywordKeys,schemas);
}));

(schema_tools.core.any_keyword_keys.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema_tools.core.any_keyword_keys.cljs$lang$applyTo = (function (seq45921){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45921));
}));

/**
 * Assoc[iate]s key & vals into Schema.
 */
schema_tools.core.assoc = (function schema_tools$core$assoc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45994 = arguments.length;
var i__4865__auto___45995 = (0);
while(true){
if((i__4865__auto___45995 < len__4864__auto___45994)){
args__4870__auto__.push((arguments[i__4865__auto___45995]));

var G__45996 = (i__4865__auto___45995 + (1));
i__4865__auto___45995 = G__45996;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,kvs){
return schema_tools.core.maybe_anonymous(schema__$1,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (schema__$2,p__45924){
var vec__45925 = p__45924;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45925,(1),null);
var rk = schema_tools.core.key_in_schema(schema__$2,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema__$2,rk),k,v);
}),schema__$1,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),null,kvs)));
}));

(schema_tools.core.assoc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema_tools.core.assoc.cljs$lang$applyTo = (function (seq45922){
var G__45923 = cljs.core.first(seq45922);
var seq45922__$1 = cljs.core.next(seq45922);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45923,seq45922__$1);
}));

/**
 * Dissoc[iate]s keys from Schema.
 */
schema_tools.core.dissoc = (function schema_tools$core$dissoc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45998 = arguments.length;
var i__4865__auto___45999 = (0);
while(true){
if((i__4865__auto___45999 < len__4864__auto___45998)){
args__4870__auto__.push((arguments[i__4865__auto___45999]));

var G__46000 = (i__4865__auto___45999 + (1));
i__4865__auto___45999 = G__46000;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,ks){
return schema_tools.core.maybe_anonymous(schema__$1,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (schema__$2,k){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema__$2,schema_tools.core.key_in_schema(schema__$2,k));
}),schema__$1,ks));
}));

(schema_tools.core.dissoc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema_tools.core.dissoc.cljs$lang$applyTo = (function (seq45928){
var G__45929 = cljs.core.first(seq45928);
var seq45928__$1 = cljs.core.next(seq45928);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45929,seq45928__$1);
}));

/**
 * Like `clojure.core/select-keys` but handles boths optional-keys and required-keys.
 */
schema_tools.core.select_keys = (function schema_tools$core$select_keys(schema__$1,ks){
return schema_tools.core.maybe_anonymous(schema__$1,(function (){var ks_QMARK_ = schema_tools.core.explicit_key_set(ks);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(ks_QMARK_,schema_tools.core.explicit_key,cljs.core.key),schema__$1));
})());
});
/**
 * Returns the sub-schema or sub-schemas of given schema.
 */
schema_tools.core.schema_value = (function schema_tools$core$schema_value(s){
return schema_tools.impl.schema_value(s);
});
/**
 * Returns the value in a nested associative Schema,
 *   where `ks` is a sequence of keys. Returns `nil` if the key
 *   is not present, or the `not-found` value if supplied.
 */
schema_tools.core.get_in = (function schema_tools$core$get_in(var_args){
var G__45931 = arguments.length;
switch (G__45931) {
case 2:
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
}));

(schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,not_found){
var sentinel = (new Object());
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var k = cljs.core.first(ks__$1);
var m__$2 = schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic(m__$1,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sentinel], 0));
if((sentinel === m__$2)){
return not_found;
} else {
var G__46002 = sentinel;
var G__46003 = m__$2;
var G__46004 = cljs.core.next(ks__$1);
sentinel = G__46002;
m__$1 = G__46003;
ks__$1 = G__46004;
continue;
}
} else {
return m__$1;
}
break;
}
}));

(schema_tools.core.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Associates a value in a nested associative Schema, where `ks` is a
 *   sequence of keys and `v` is the new value and returns a new nested Schema.
 *   If any levels do not exist, hash-maps will be created.
 */
schema_tools.core.assoc_in = (function schema_tools$core$assoc_in(schema__$1,p__45932,v){
var vec__45933 = p__45932;
var seq__45934 = cljs.core.seq(vec__45933);
var first__45935 = cljs.core.first(seq__45934);
var seq__45934__$1 = cljs.core.next(seq__45934);
var k = first__45935;
var ks = seq__45934__$1;
return schema_tools.core.maybe_anonymous(schema__$1,(function (){var kis = schema_tools.core.key_in_schema(schema__$1,k);
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,(function (){var G__45936 = schema_tools.core.get_in_schema(schema__$1,k);
var G__45937 = ks;
var G__45938 = v;
return (schema_tools.core.assoc_in.cljs$core$IFn$_invoke$arity$3 ? schema_tools.core.assoc_in.cljs$core$IFn$_invoke$arity$3(G__45936,G__45937,G__45938) : schema_tools.core.assoc_in.call(null,G__45936,G__45937,G__45938));
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,v);
}
})());
});
/**
 * 'Updates' a value in a nested associative Schema, where `ks` is a
 *   sequence of keys and `f` is a function that will take the old value
 *   and any supplied args and return the new value, and returns a new
 *   nested Schema. If any levels do not exist, hash-maps will be
 *   created.
 */
schema_tools.core.update_in = (function schema_tools$core$update_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46005 = arguments.length;
var i__4865__auto___46006 = (0);
while(true){
if((i__4865__auto___46006 < len__4864__auto___46005)){
args__4870__auto__.push((arguments[i__4865__auto___46006]));

var G__46007 = (i__4865__auto___46006 + (1));
i__4865__auto___46006 = G__46007;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return schema_tools.core.update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(schema_tools.core.update_in.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,p__45943,f,args){
var vec__45944 = p__45943;
var seq__45945 = cljs.core.seq(vec__45944);
var first__45946 = cljs.core.first(seq__45945);
var seq__45945__$1 = cljs.core.next(seq__45945);
var k = first__45946;
var ks = seq__45945__$1;
return schema_tools.core.maybe_anonymous(schema__$1,(function (){var kis = schema_tools.core.key_in_schema(schema__$1,k);
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(schema_tools.core.update_in,schema_tools.core.get_in_schema(schema__$1,k),ks,f,args));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,schema_tools.core.get_in_schema(schema__$1,k),args));
}
})());
}));

(schema_tools.core.update_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(schema_tools.core.update_in.cljs$lang$applyTo = (function (seq45939){
var G__45940 = cljs.core.first(seq45939);
var seq45939__$1 = cljs.core.next(seq45939);
var G__45941 = cljs.core.first(seq45939__$1);
var seq45939__$2 = cljs.core.next(seq45939__$1);
var G__45942 = cljs.core.first(seq45939__$2);
var seq45939__$3 = cljs.core.next(seq45939__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45940,G__45941,G__45942,seq45939__$3);
}));

/**
 * Dissociates an entry from a nested associative Schema returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new Schema.
 */
schema_tools.core.dissoc_in = (function schema_tools$core$dissoc_in(schema__$1,p__45947){
var vec__45948 = p__45947;
var seq__45949 = cljs.core.seq(vec__45948);
var first__45950 = cljs.core.first(seq__45949);
var seq__45949__$1 = cljs.core.next(seq__45949);
var k = first__45950;
var ks = seq__45949__$1;
var k__$1 = schema_tools.core.key_in_schema(schema__$1,k);
if(ks){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema__$1,k__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var nextmap = temp__5751__auto__;
var newmap = (schema_tools.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? schema_tools.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : schema_tools.core.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,k__$1,newmap);
} else {
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1], 0));
}
} else {
return schema__$1;
}
} else {
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1], 0));
}
});
/**
 * Updates a value in a map with a function.
 */
schema_tools.core.update = (function schema_tools$core$update(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46008 = arguments.length;
var i__4865__auto___46009 = (0);
while(true){
if((i__4865__auto___46009 < len__4864__auto___46008)){
args__4870__auto__.push((arguments[i__4865__auto___46009]));

var G__46010 = (i__4865__auto___46009 + (1));
i__4865__auto___46009 = G__46010;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return schema_tools.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(schema_tools.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,k,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(schema_tools.core.update_in,schema__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f,args);
}));

(schema_tools.core.update.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(schema_tools.core.update.cljs$lang$applyTo = (function (seq45951){
var G__45952 = cljs.core.first(seq45951);
var seq45951__$1 = cljs.core.next(seq45951);
var G__45953 = cljs.core.first(seq45951__$1);
var seq45951__$2 = cljs.core.next(seq45951__$1);
var G__45954 = cljs.core.first(seq45951__$2);
var seq45951__$3 = cljs.core.next(seq45951__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45952,G__45953,G__45954,seq45951__$3);
}));

/**
 * Returns a Schema that consists of the rest of the Schemas conj-ed onto
 *   the first. If a schema key occurs in more than one map, the mapping from
 *   the latter (left-to-right) will be the mapping in the result. Works only
 *   with Map schemas.
 */
schema_tools.core.merge = (function schema_tools$core$merge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46013 = arguments.length;
var i__4865__auto___46014 = (0);
while(true){
if((i__4865__auto___46014 < len__4864__auto___46013)){
args__4870__auto__.push((arguments[i__4865__auto___46014]));

var G__46016 = (i__4865__auto___46014 + (1));
i__4865__auto___46014 = G__46016;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return schema_tools.core.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(schema_tools.core.merge.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
if(cljs.core.every_QMARK_((function (p1__45955_SHARP_){
return ((cljs.core.map_QMARK_(p1__45955_SHARP_)) || ((p1__45955_SHARP_ == null)));
}),schemas)){
} else {
throw (new Error("Assert failed: (every? (fn* [p1__45955#] (or (map? p1__45955#) (nil? p1__45955#))) schemas)"));
}

return schema_tools.core.maybe_anonymous(cljs.core.first(schemas),(cljs.core.truth_(cljs.core.some(cljs.core.identity,schemas))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (acc,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,p__45957){
var vec__45958 = p__45957;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45958,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(acc__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),k,v);
}),acc,m);
}),schemas):null));
}));

(schema_tools.core.merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema_tools.core.merge.cljs$lang$applyTo = (function (seq45956){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45956));
}));

schema_tools.core.default$ = (function schema_tools$core$default(schema__$1,default$){
return schema_tools.impl.default$(schema__$1,default$);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema_tools.core.Schema = (function (schema,data,__meta,__extmap,__hash){
this.schema = schema;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema_tools.core.Schema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(schema_tools.core.Schema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k45962,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__45966 = k45962;
var G__45966__$1 = (((G__45966 instanceof cljs.core.Keyword))?G__45966.fqn:null);
switch (G__45966__$1) {
case "schema":
return self__.schema;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45962,else__4505__auto__);

}
}));

(schema_tools.core.Schema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__45967){
var vec__45968 = p__45967;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45968,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45968,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(schema_tools.core.Schema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#schema-tools.core.Schema{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(schema_tools.core.Schema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45961){
var self__ = this;
var G__45961__$1 = this;
return (new cljs.core.RecordIter((0),G__45961__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema_tools.core.Schema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(schema_tools.core.Schema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new schema_tools.core.Schema(self__.schema,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema_tools.core.Schema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema_tools.core.Schema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1564373953 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(schema_tools.core.Schema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45963,other45964){
var self__ = this;
var this45963__$1 = this;
return (((!((other45964 == null)))) && ((((this45963__$1.constructor === other45964.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45963__$1.schema,other45964.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45963__$1.data,other45964.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45963__$1.__extmap,other45964.__extmap)))))))));
}));

(schema_tools.core.Schema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema_tools.core.Schema.prototype.schema$core$Schema$spec$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
}));

(schema_tools.core.Schema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var ops = schema_tools.core.select_keys(self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544)], null));
return cljs.core.seq((function (){var G__45971 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(this$__$1))], null);
if(cljs.core.seq(ops)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45971,ops);
} else {
return G__45971;
}
})());
}));

(schema_tools.core.Schema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new schema_tools.core.Schema(self__.schema,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(schema_tools.core.Schema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k45962){
var self__ = this;
var this__4509__auto____$1 = this;
var G__45972 = k45962;
var G__45972__$1 = (((G__45972 instanceof cljs.core.Keyword))?G__45972.fqn:null);
switch (G__45972__$1) {
case "schema":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45962);

}
}));

(schema_tools.core.Schema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__45961){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__45973 = cljs.core.keyword_identical_QMARK_;
var expr__45974 = k__4511__auto__;
if(cljs.core.truth_((pred__45973.cljs$core$IFn$_invoke$arity$2 ? pred__45973.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__45974) : pred__45973.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__45974)))){
return (new schema_tools.core.Schema(G__45961,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45973.cljs$core$IFn$_invoke$arity$2 ? pred__45973.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__45974) : pred__45973.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__45974)))){
return (new schema_tools.core.Schema(self__.schema,G__45961,self__.__meta,self__.__extmap,null));
} else {
return (new schema_tools.core.Schema(self__.schema,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__45961),null));
}
}
}));

(schema_tools.core.Schema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(schema_tools.core.Schema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__45961){
var self__ = this;
var this__4501__auto____$1 = this;
return (new schema_tools.core.Schema(self__.schema,self__.data,G__45961,self__.__extmap,self__.__hash));
}));

(schema_tools.core.Schema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(schema_tools.core.Schema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(schema_tools.core.Schema.cljs$lang$type = true);

(schema_tools.core.Schema.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"schema-tools.core/Schema",null,(1),null));
}));

(schema_tools.core.Schema.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"schema-tools.core/Schema");
}));

/**
 * Positional factory function for schema-tools.core/Schema.
 */
schema_tools.core.__GT_Schema = (function schema_tools$core$__GT_Schema(schema__$1,data){
return (new schema_tools.core.Schema(schema__$1,data,null,null,null));
});

/**
 * Factory function for schema-tools.core/Schema, taking a map of keywords to field values.
 */
schema_tools.core.map__GT_Schema = (function schema_tools$core$map__GT_Schema(G__45965){
var extmap__4542__auto__ = (function (){var G__45976 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45965,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__45965)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45976);
} else {
return G__45976;
}
})();
return (new schema_tools.core.Schema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__45965),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__45965),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

schema_tools.core.schema = (function schema_tools$core$schema(var_args){
var G__45978 = arguments.length;
switch (G__45978) {
case 1:
return schema_tools.core.schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.core.schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.core.schema.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return schema_tools.core.schema.cljs$core$IFn$_invoke$arity$2(pred,null);
}));

(schema_tools.core.schema.cljs$core$IFn$_invoke$arity$2 = (function (pred,data){
return schema_tools.core.__GT_Schema(pred,data);
}));

(schema_tools.core.schema.cljs$lang$maxFixedArity = 2);

/**
 * Makes given map keys optional. Defaults to all keys.
 */
schema_tools.core.optional_keys = (function schema_tools$core$optional_keys(var_args){
var G__45980 = arguments.length;
switch (G__45980) {
case 1:
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.transform_keys(m,schema.core.optional_key,ks,false);
}));

(schema_tools.core.optional_keys.cljs$lang$maxFixedArity = 2);

/**
 * Makes given map keys required. Defaults to all keys.
 */
schema_tools.core.required_keys = (function schema_tools$core$required_keys(var_args){
var G__45983 = arguments.length;
switch (G__45983) {
case 1:
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.transform_keys(m,(function (p1__45981_SHARP_){
if((p1__45981_SHARP_ instanceof cljs.core.Keyword)){
return p1__45981_SHARP_;
} else {
return schema.core.required_key(p1__45981_SHARP_);
}
}),ks,false);
}));

(schema_tools.core.required_keys.cljs$lang$maxFixedArity = 2);

/**
 * Strips all disallowed keys from nested Map schemas via coercion. Takes an optional
 *   coercion matcher for extra coercing the selected value(s) on a single sweep. If a value
 *   can't be coerced to match the schema `ExceptionInfo` is thrown (like `schema.core/validate`).
 */
schema_tools.core.select_schema = (function schema_tools$core$select_schema(var_args){
var G__45985 = arguments.length;
switch (G__45985) {
case 2:
return schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$2 = (function (value,schema__$1){
return schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$3(value,schema__$1,cljs.core.constantly(null));
}));

(schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$3 = (function (value,schema__$1,matcher){
return schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$3(value,schema__$1,schema_tools.coerce.or_matcher.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema_tools.coerce.map_filter_matcher,matcher], 0)));
}));

(schema_tools.core.select_schema.cljs$lang$maxFixedArity = 3);

/**
 * Walks a schema adding [`s/Keyword` `s/Any`] entry to all Map Schemas
 */
schema_tools.core.open_schema = (function schema_tools$core$open_schema(schema__$1){
return schema_tools.walk.prewalk((function (x){
if(((cljs.core.map_QMARK_(x)) && ((((!(cljs.core.record_QMARK_(x)))) && (cljs.core.not(schema.core.find_extra_keys_schema(x))))))){
return schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.core.Keyword,schema.core.Any], 0));
} else {
return x;
}
}),schema__$1);
});
/**
 * Walks a schema making all keys optional in Map Schemas.
 */
schema_tools.core.optional_keys_schema = (function schema_tools$core$optional_keys_schema(schema__$1){
return schema_tools.walk.prewalk((function (x){
if(((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))))){
return schema_tools.core.transform_keys(x,schema.core.optional_key,null,true);
} else {
return x;
}
}),schema__$1);
});
/**
 * Records description in schema's metadata.
 */
schema_tools.core.schema_with_description = (function schema_tools$core$schema_with_description(schema__$1,description){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,schema_tools.core.assoc,new cljs.core.Keyword(null,"description","description",-1428560544),description);
});
/**
 * Returns the description of a schema attached via schema-with-description.
 */
schema_tools.core.schema_description = (function schema_tools$core$schema_description(schema__$1){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});

//# sourceMappingURL=schema_tools.core.js.map
