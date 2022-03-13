goog.provide('schema_tools.swagger.core');
schema_tools.swagger.core.remove_empty_keys = (function schema_tools$swagger$core$remove_empty_keys(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.nil_QMARK_,cljs.core.val),m));
});
schema_tools.swagger.core.record_schema = (function schema_tools$swagger$core$record_schema(x){
var temp__5751__auto__ = (function (){var G__45988 = x;
var G__45988__$1 = (((G__45988 == null))?null:schema.utils.class_schema(G__45988));
if((G__45988__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__45988__$1);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var schema__$1 = temp__5751__auto__;
var name = (function (){var G__45990 = x;
var G__45990__$1 = (((G__45990 == null))?null:schema.utils.class_schema(G__45990));
var G__45990__$2 = (((G__45990__$1 == null))?null:new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__45990__$1));
var G__45990__$3 = (((G__45990__$2 == null))?null:cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__45990__$2], 0)));
var G__45990__$4 = (((G__45990__$3 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__45990__$3,"/"));
if((G__45990__$4 == null)){
return null;
} else {
return cljs.core.last(G__45990__$4);
}
})();
return schema.core.named(schema__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"Record"].join(''));
} else {
return null;
}
});
schema_tools.swagger.core.plain_map_QMARK_ = (function schema_tools$swagger$core$plain_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
schema_tools.swagger.core.schema_name = (function schema_tools$swagger$core$schema_name(schema__$1,opts){
var temp__5751__auto__ = (function (){var G__45997 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = schema.core.schema_name(schema__$1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
if((schema__$1 instanceof schema__$1.core.NamedSchema)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(schema__$1);
} else {
return null;
}
}
}
})();
if((G__45997 == null)){
return null;
} else {
return cljs.core.name(G__45997);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
var ns = schema.core.schema_ns(schema__$1);
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",name].join('');
} else {
return name;
}
} else {
return null;
}
});
schema_tools.swagger.core.key_name = (function schema_tools$swagger$core$key_name(x){
if((x instanceof cljs.core.Keyword)){
var n = cljs.core.namespace(x);
return [(cljs.core.truth_(n)?[n,"/"].join(''):null),cljs.core.name(x)].join('');
} else {
return x;
}
});
schema_tools.swagger.core.assoc_collection_format = (function schema_tools$swagger$core$assoc_collection_format(m,p__46011){
var map__46012 = p__46011;
var map__46012__$1 = cljs.core.__destructure_map(map__46012);
var options = map__46012__$1;
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46012__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var G__46015 = m;
if(cljs.core.truth_((function (){var fexpr__46017 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"formData","formData",-1155796695),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null);
return (fexpr__46017.cljs$core$IFn$_invoke$arity$1 ? fexpr__46017.cljs$core$IFn$_invoke$arity$1(in$) : fexpr__46017.call(null,in$));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46015,new cljs.core.Keyword(null,"collectionFormat","collectionFormat",1189846689),new cljs.core.Keyword(null,"collection-format","collection-format",-36559834).cljs$core$IFn$_invoke$arity$2(options,"multi"));
} else {
return G__46015;
}
});
schema_tools.swagger.core.not_supported_BANG_ = (function schema_tools$swagger$core$not_supported_BANG_(schema__$1){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["don't know how to convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(schema__$1)," into a Swagger Schema. "].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null));
});
schema_tools.swagger.core.maybe_QMARK_ = (function schema_tools$swagger$core$maybe_QMARK_(schema__$1){
return (schema__$1 instanceof schema__$1.core.Maybe);
});
schema_tools.swagger.core.collection_schema = (function schema_tools$swagger$core$collection_schema(e,options){
return schema_tools.swagger.core.assoc_collection_format(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),(function (){var G__46019 = cljs.core.first(e);
var G__46020 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("schema-tools.swagger.core","no-meta","schema-tools.swagger.core/no-meta",-131243633),true);
return (schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 ? schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(G__46019,G__46020) : schema_tools.swagger.core.transform.call(null,G__46019,G__46020));
})()], null),options);
});
schema_tools.swagger.core.properties = (function schema_tools$swagger$core$properties(schema__$1,opts){
var G__46021 = (function (){var iter__4652__auto__ = (function schema_tools$swagger$core$properties_$_iter__46022(s__46023){
return (new cljs.core.LazySeq(null,(function (){
var s__46023__$1 = s__46023;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46023__$1);
if(temp__5753__auto__){
var s__46023__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46023__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__46023__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__46025 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__46024 = (0);
while(true){
if((i__46024 < size__4651__auto__)){
var vec__46027 = cljs.core._nth(c__4650__auto__,i__46024);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46027,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var v__$1 = (schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 ? schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(v,opts) : schema_tools.swagger.core.transform.call(null,v,opts));
cljs.core.chunk_append(b__46025,(function (){var and__4251__auto__ = v__$1;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_tools.swagger.core.key_name(schema.core.explicit_schema_key(k)),v__$1], null);
} else {
return and__4251__auto__;
}
})());

var G__46094 = (i__46024 + (1));
i__46024 = G__46094;
continue;
} else {
var G__46095 = (i__46024 + (1));
i__46024 = G__46095;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46025),schema_tools$swagger$core$properties_$_iter__46022(cljs.core.chunk_rest(s__46023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46025),null);
}
} else {
var vec__46031 = cljs.core.first(s__46023__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46031,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var v__$1 = (schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 ? schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(v,opts) : schema_tools.swagger.core.transform.call(null,v,opts));
return cljs.core.cons((function (){var and__4251__auto__ = v__$1;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_tools.swagger.core.key_name(schema.core.explicit_schema_key(k)),v__$1], null);
} else {
return and__4251__auto__;
}
})(),schema_tools$swagger$core$properties_$_iter__46022(cljs.core.rest(s__46023__$2)));
} else {
var G__46097 = cljs.core.rest(s__46023__$2);
s__46023__$1 = G__46097;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(schema__$1);
})();
var G__46021__$1 = (((G__46021 == null))?null:cljs.core.seq(G__46021));
if((G__46021__$1 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(schema__$1),G__46021__$1);
}
});
schema_tools.swagger.core.additional_properties = (function schema_tools$swagger$core$additional_properties(schema__$1){
var temp__5751__auto__ = schema.core.find_extra_keys_schema(schema__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var extra_key = temp__5751__auto__;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema__$1,extra_key);
return (schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 ? schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(v,null) : schema_tools.swagger.core.transform.call(null,v,null));
} else {
return false;
}
});
schema_tools.swagger.core.object_schema = (function schema_tools$swagger$core$object_schema(this$,opts){
if(schema_tools.swagger.core.plain_map_QMARK_(this$)){
return schema_tools.swagger.core.remove_empty_keys(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"object",new cljs.core.Keyword(null,"title","title",636505583),schema_tools.swagger.core.schema_name(this$,opts),new cljs.core.Keyword(null,"properties","properties",685819552),schema_tools.swagger.core.properties(this$,opts),new cljs.core.Keyword(null,"additionalProperties","additionalProperties",-1203767392),schema_tools.swagger.core.additional_properties(this$),new cljs.core.Keyword(null,"required","required",1807647006),(function (){var G__46037 = cljs.core.filterv(schema.core.required_key_QMARK_,cljs.core.keys(this$));
var G__46037__$1 = (((G__46037 == null))?null:cljs.core.seq(G__46037));
if((G__46037__$1 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema_tools.swagger.core.key_name,G__46037__$1);
}
})()], null));
} else {
return null;
}
});
if((typeof schema_tools !== 'undefined') && (typeof schema_tools.swagger !== 'undefined') && (typeof schema_tools.swagger.core !== 'undefined') && (typeof schema_tools.swagger.core.transform_pred !== 'undefined')){
} else {
schema_tools.swagger.core.transform_pred = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46038 = cljs.core.get_global_hierarchy;
return (fexpr__46038.cljs$core$IFn$_invoke$arity$0 ? fexpr__46038.cljs$core$IFn$_invoke$arity$0() : fexpr__46038.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("schema-tools.swagger.core","transform-pred"),(function (this$,_){
return this$;
}),new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
schema_tools.swagger.core.transform_pred.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.string_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
schema_tools.swagger.core.transform_pred.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.integer_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int32"], null);
}));
schema_tools.swagger.core.transform_pred.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.keyword_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
schema_tools.swagger.core.transform_pred.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.symbol_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
schema_tools.swagger.core.transform_pred.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910),(function (e,p__46039){
var map__46040 = p__46039;
var map__46040__$1 = cljs.core.__destructure_map(map__46040);
var ignore_missing_mappings_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46040__$1,new cljs.core.Keyword(null,"ignore-missing-mappings?","ignore-missing-mappings?",1057840190));
if(cljs.core.not(ignore_missing_mappings_QMARK_)){
return schema_tools.swagger.core.not_supported_BANG_(e);
} else {
return null;
}
}));
if((typeof schema_tools !== 'undefined') && (typeof schema_tools.swagger !== 'undefined') && (typeof schema_tools.swagger.core !== 'undefined') && (typeof schema_tools.swagger.core.transform_type !== 'undefined')){
} else {
schema_tools.swagger.core.transform_type = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46041 = cljs.core.get_global_hierarchy;
return (fexpr__46041.cljs$core$IFn$_invoke$arity$0 ? fexpr__46041.cljs$core$IFn$_invoke$arity$0() : fexpr__46041.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("schema-tools.swagger.core","transform-type"),(function (c,_){
return c;
}),new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"date-time"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uuid"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,schema.core.Regex,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"regex"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.Date,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"date"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.UtcDateTime,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"date-time"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910),(function (e,p__46042){
var map__46043 = p__46042;
var map__46043__$1 = cljs.core.__destructure_map(map__46043);
var ignore_missing_mappings_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46043__$1,new cljs.core.Keyword(null,"ignore-missing-mappings?","ignore-missing-mappings?",1057840190));
if(cljs.core.not(ignore_missing_mappings_QMARK_)){
return schema_tools.swagger.core.not_supported_BANG_(e);
} else {
return null;
}
}));

/**
 * @interface
 */
schema_tools.swagger.core.SwaggerSchema = function(){};

var schema_tools$swagger$core$SwaggerSchema$_transform$dyn_46107 = (function (this$,opts){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (schema_tools.swagger.core._transform[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4551__auto__.call(null,this$,opts));
} else {
var m__4549__auto__ = (schema_tools.swagger.core._transform["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4549__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("SwaggerSchema.-transform",this$);
}
}
});
schema_tools.swagger.core._transform = (function schema_tools$swagger$core$_transform(this$,opts){
if((((!((this$ == null)))) && ((!((this$.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 == null)))))){
return this$.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2(this$,opts);
} else {
return schema_tools$swagger$core$SwaggerSchema$_transform$dyn_46107(this$,opts);
}
});

schema_tools.swagger.core.transform = (function schema_tools$swagger$core$transform(schema__$1,opts){
if((((!((schema__$1 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.schema_tools$swagger$core$SwaggerSchema$))))?true:(((!schema__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(schema_tools.swagger.core.SwaggerSchema,schema__$1):false)):cljs.core.native_satisfies_QMARK_(schema_tools.swagger.core.SwaggerSchema,schema__$1))){
return schema_tools.swagger.core._transform(schema__$1,opts);
} else {
var temp__5751__auto__ = schema_tools.swagger.core.record_schema(schema__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var rschema = temp__5751__auto__;
return (schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 ? schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(rschema,opts) : schema_tools.swagger.core.transform.call(null,rschema,opts));
} else {
return schema_tools.swagger.core.transform_type.cljs$core$IFn$_invoke$arity$2(schema__$1,opts);
}
}
});
(schema_tools.swagger.core.SwaggerSchema["null"] = true);

(schema_tools.swagger.core._transform["null"] = (function (_,___$1){
return null;
}));

(cljs.core.PersistentVector.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return schema_tools.swagger.core.collection_schema(this$__$1,options);
}));

(RegExp.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1.source)], null);
}));

(schema.core.One.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.One.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.transform(this$__$1.schema,opts);
}));

(schema.core.ConditionalSchema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x-oneOf","x-oneOf",-1060094993),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__46045_SHARP_){
return schema_tools.swagger.core.transform(p1__46045_SHARP_,opts);
}),cljs.core.second),this$__$1.preds_and_schemas))], null);
}));

(schema_tools.core.Schema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema_tools.core.Schema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (p__46047,opts){
var map__46048 = p__46047;
var map__46048__$1 = cljs.core.__destructure_map(map__46048);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46048__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46048__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46049 = this;
var map__46049__$1 = cljs.core.__destructure_map(map__46049);
var schema__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46049__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46049__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema_tools.swagger.core.transform(schema__$2,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,cljs.core.select_keys(data__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544)], null))], 0))),schema_tools.impl.unlift_keys(data__$1,"swagger")], 0));
}));

(schema.core.Maybe.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (e,p__46050){
var map__46051 = p__46050;
var map__46051__$1 = cljs.core.__destructure_map(map__46051);
var opts = map__46051__$1;
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46051__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var e__$1 = this;
var schema__$1 = schema_tools.swagger.core.transform(e__$1.schema,opts);
var pred__46052 = cljs.core.contains_QMARK_;
var expr__46053 = in$;
if(cljs.core.truth_((function (){var G__46055 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"formData","formData",-1155796695),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null);
var G__46056 = expr__46053;
return (pred__46052.cljs$core$IFn$_invoke$arity$2 ? pred__46052.cljs$core$IFn$_invoke$arity$2(G__46055,G__46056) : pred__46052.call(null,G__46055,G__46056));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,new cljs.core.Keyword(null,"allowEmptyValue","allowEmptyValue",-1066530890),true);
} else {
if(cljs.core.truth_((function (){var G__46057 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null);
var G__46058 = expr__46053;
return (pred__46052.cljs$core$IFn$_invoke$arity$2 ? pred__46052.cljs$core$IFn$_invoke$arity$2(G__46057,G__46058) : pred__46052.call(null,G__46057,G__46058));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,new cljs.core.Keyword(null,"x-nullable","x-nullable",1492681247),true);
} else {
return schema__$1;
}
}
}));

(schema.core.NamedSchema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (p__46059,opts){
var map__46060 = p__46059;
var map__46060__$1 = cljs.core.__destructure_map(map__46060);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46060__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46060__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__46061 = this;
var map__46061__$1 = cljs.core.__destructure_map(map__46061);
var schema__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46061__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return schema_tools.swagger.core.transform(schema__$2,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"name","name",1843675177),name__$1));
}));

(cljs.core.List.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return schema_tools.swagger.core.collection_schema(this$__$1,options);
}));

(schema.core.Either.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.transform(cljs.core.first(this$__$1.schemas),opts);
}));

(cljs.core.PersistentArrayMap.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.object_schema(this$__$1,opts);
}));

(schema.core.AnythingSchema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.AnythingSchema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (_,p__46062){
var map__46063 = p__46062;
var map__46063__$1 = cljs.core.__destructure_map(map__46063);
var opts = map__46063__$1;
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46063__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var ___$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = in$;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),in$);
} else {
return and__4251__auto__;
}
})())){
return schema_tools.swagger.core.transform(schema.core.maybe(schema.core.Str),opts);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));

(cljs.core.PersistentHashSet.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema_tools.swagger.core.collection_schema(this$__$1,options),new cljs.core.Keyword(null,"uniqueItems","uniqueItems",-826722268),true);
}));

(schema.core.Predicate.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Predicate.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return schema_tools.swagger.core.transform_pred.cljs$core$IFn$_invoke$arity$2(this$__$1.p_QMARK_,options);
}));

(cljs.core.PersistentHashMap.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.object_schema(this$__$1,opts);
}));

(schema.core.EqSchema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EqSchema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.transform(cljs.core.type(this$__$1.v),opts);
}));

(schema.core.CondPre.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x-oneOf","x-oneOf",-1060094993),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46046_SHARP_){
return schema_tools.swagger.core.transform(p1__46046_SHARP_,opts);
}),this$__$1.schemas)], null);
}));

(schema.core.Both.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return schema_tools.swagger.core.transform(cljs.core.first(this$__$1.schemas),options);
}));

(schema.core.Constrained.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.transform(this$__$1.schema,opts);
}));

(schema.core.EnumSchema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EnumSchema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema_tools.swagger.core.transform(cljs.core.type(cljs.core.first(this$__$1.vs)),options),new cljs.core.Keyword(null,"enum","enum",1679018432),this$__$1.vs);
}));
if((typeof schema_tools !== 'undefined') && (typeof schema_tools.swagger !== 'undefined') && (typeof schema_tools.swagger.core !== 'undefined') && (typeof schema_tools.swagger.core.extract_parameter !== 'undefined')){
} else {
schema_tools.swagger.core.extract_parameter = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46064 = cljs.core.get_global_hierarchy;
return (fexpr__46064.cljs$core$IFn$_invoke$arity$0 ? fexpr__46064.cljs$core$IFn$_invoke$arity$0() : fexpr__46064.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("schema-tools.swagger.core","extract-parameter"),(function (in$,_){
return in$;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
schema_tools.swagger.core.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"body","body",-2049205669),(function (_,schema__$1){
var swagger = schema_tools.swagger.core.transform(schema__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),"body",new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__4253__auto__ = schema_tools.swagger.core.schema_name(schema__$1,null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "body";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"required","required",1807647006),(!(schema_tools.swagger.core.maybe_QMARK_(schema__$1))),new cljs.core.Keyword(null,"schema","schema",-1582001791),swagger], null)], null);
}));
schema_tools.swagger.core.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (in$,schema__$1){
var map__46065 = schema_tools.swagger.core.transform(schema__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
var map__46065__$1 = cljs.core.__destructure_map(map__46065);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46065__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46065__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__46066){
var vec__46067 = p__46066;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46067,(0),null);
var map__46070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46067,(1),null);
var map__46070__$1 = cljs.core.__destructure_map(map__46070);
var swagger = map__46070__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46070__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.name(in$),new cljs.core.Keyword(null,"name","name",1843675177),schema_tools.swagger.core.key_name(k),new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.contains_QMARK_(cljs.core.set(required),k)], null),swagger], 0));
}),properties);
}));
if((typeof schema_tools !== 'undefined') && (typeof schema_tools.swagger !== 'undefined') && (typeof schema_tools.swagger.core !== 'undefined') && (typeof schema_tools.swagger.core.expand !== 'undefined')){
} else {
schema_tools.swagger.core.expand = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46071 = cljs.core.get_global_hierarchy;
return (fexpr__46071.cljs$core$IFn$_invoke$arity$0 ? fexpr__46071.cljs$core$IFn$_invoke$arity$0() : fexpr__46071.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("schema-tools.swagger.core","expand"),(function (k,_,___$1,___$2){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
schema_tools.swagger.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("schema-tools.swagger.core","responses","schema-tools.swagger.core/responses",-2039250325),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"responses","responses",1257546453),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4652__auto__ = (function schema_tools$swagger$core$iter__46072(s__46073){
return (new cljs.core.LazySeq(null,(function (){
var s__46073__$1 = s__46073;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46073__$1);
if(temp__5753__auto__){
var s__46073__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46073__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__46073__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__46075 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__46074 = (0);
while(true){
if((i__46074 < size__4651__auto__)){
var vec__46076 = cljs.core._nth(c__4650__auto__,i__46074);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46076,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46076,(1),null);
cljs.core.chunk_append(b__46075,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,schema_tools.swagger.core.remove_empty_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(response,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema_tools.swagger.core.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null)),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,"")))], null));

var G__46133 = (i__46074 + (1));
i__46074 = G__46133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46075),schema_tools$swagger$core$iter__46072(cljs.core.chunk_rest(s__46073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46075),null);
}
} else {
var vec__46079 = cljs.core.first(s__46073__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46079,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46079,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,schema_tools.swagger.core.remove_empty_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(response,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema_tools.swagger.core.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null)),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,"")))], null),schema_tools$swagger$core$iter__46072(cljs.core.rest(s__46073__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(v);
})())], null);
}));
schema_tools.swagger.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("schema-tools.swagger.core","parameters","schema-tools.swagger.core/parameters",1714539482),(function (_,v,acc,___$1){
var old = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new$ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__46082){
var vec__46083 = p__46082;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46083,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46083,(1),null);
return schema_tools.swagger.core.extract_parameter.cljs$core$IFn$_invoke$arity$2(in$,spec);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
var merged = cljs.core.vec(cljs.core.reverse(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46086,p){
var vec__46087 = p__46086;
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46087,(0),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46087,(1),null);
var acc__$1 = vec__46087;
var c = cljs.core.select_keys(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.not((cache.cljs$core$IFn$_invoke$arity$1 ? cache.cljs$core$IFn$_invoke$arity$1(c) : cache.call(null,c)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,p),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,c)], null);
} else {
return acc__$1;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.reverse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(old,new$))))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),merged], null);
}));
schema_tools.swagger.core.expand_qualified_keywords = (function schema_tools$swagger$core$expand_qualified_keywords(x,options){
var accept_QMARK_ = cljs.core.set(cljs.core.keys(cljs.core.methods$(schema_tools.swagger.core.expand)));
return clojure.walk.postwalk((function (x__$1){
if(schema_tools.swagger.core.plain_map_QMARK_(x__$1)){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : accept_QMARK_.call(null,k)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k),schema_tools.swagger.core.expand.cljs$core$IFn$_invoke$arity$4(k,v,acc,options)], 0));
} else {
return acc;
}
}),x__$1,x__$1);
} else {
return x__$1;
}
}),x);
});
/**
 * Transforms data into a swagger2 spec. Input data must conform
 *   to the Swagger2 Spec (http://swagger.io/specification/) with a
 *   exception that it can have any qualified keywords that are expanded
 *   with the `schema-tools.swagger.core/expand` multimethod.
 */
schema_tools.swagger.core.swagger_spec = (function schema_tools$swagger$core$swagger_spec(var_args){
var G__46091 = arguments.length;
switch (G__46091) {
case 1:
return schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1 = (function (x){
return schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2(x,null);
}));

(schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return schema_tools.swagger.core.expand_qualified_keywords(x,options);
}));

(schema_tools.swagger.core.swagger_spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=schema_tools.swagger.core.js.map
