goog.provide('reitit.coercion.schema');
reitit.coercion.schema.string_coercion_matcher = schema_tools.coerce.string_coercion_matcher;
reitit.coercion.schema.json_coercion_matcher = schema_tools.coerce.json_coercion_matcher;
reitit.coercion.schema.default_coercion_matcher = cljs.core.constantly(null);
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.schema !== 'undefined') && (typeof reitit.coercion.schema.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.schema.coerce_response_QMARK_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("reitit.coercion.schema","default","reitit.coercion.schema/default",-1909103244)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46092 = cljs.core.get_global_hierarchy;
return (fexpr__46092.cljs$core$IFn$_invoke$arity$0 ? fexpr__46092.cljs$core$IFn$_invoke$arity$0() : fexpr__46092.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.schema","coerce-response?"),cljs.core.identity,new cljs.core.Keyword("reitit.coercion.schema","default","reitit.coercion.schema/default",-1909103244),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
reitit.coercion.schema.coerce_response_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("reitit.coercion.schema","default","reitit.coercion.schema/default",-1909103244),(function (_){
return true;
}));
reitit.coercion.schema.stringify = (function reitit$coercion$schema$stringify(schema__$1){
return clojure.walk.prewalk((function (x){
if((x instanceof schema__$1.core.OptionalKey)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"opt","opt",845825158,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(x),null,(1),null)),(2),null))], 0));
} else {
if((x instanceof schema__$1.core.RequiredKey)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"req","req",1314083224,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(x),null,(1),null)),(2),null))], 0));
} else {
if((function (){var and__4251__auto__ = (((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.schema$core$Schema$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(schema.core.Schema,x):false)):cljs.core.native_satisfies_QMARK_(schema.core.Schema,x));
if(and__4251__auto__){
return cljs.core.record_QMARK_(x);
} else {
return and__4251__auto__;
}
})()){
try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.core.explain(x)], 0));
}catch (e46096){if((e46096 instanceof Error)){
var _ = e46096;
return x;
} else {
throw e46096;

}
}} else {
if((x instanceof schema__$1.utils.ValidationError)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(schema.utils.validation_error_explain(x));
} else {
if((x instanceof schema__$1.utils.NamedError)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(schema.utils.named_error_explain(x));
} else {
return x;

}
}
}
}
}
}),schema__$1);
});
reitit.coercion.schema.default_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091),reitit.coercion.schema.coerce_response_QMARK_,new cljs.core.Keyword(null,"matchers","matchers",-1680392410),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.schema.default_coercion_matcher,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.schema.json_coercion_matcher], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.schema.string_coercion_matcher], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.schema.default_coercion_matcher], null)], null)], null);
reitit.coercion.schema.create = (function reitit$coercion$schema$create(p__46099){
var map__46100 = p__46099;
var map__46100__$1 = cljs.core.__destructure_map(map__46100);
var opts = map__46100__$1;
var matchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46100__$1,new cljs.core.Keyword(null,"matchers","matchers",-1680392410));
var coerce_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46100__$1,new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091));
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.schema !== 'undefined') && (typeof reitit.coercion.schema.t_reitit$coercion$schema46101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.schema.t_reitit$coercion$schema46101 = (function (p__46099,map__46100,opts,matchers,coerce_response_QMARK_,meta46102){
this.p__46099 = p__46099;
this.map__46100 = map__46100;
this.opts = opts;
this.matchers = matchers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta46102 = meta46102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46103,meta46102__$1){
var self__ = this;
var _46103__$1 = this;
return (new reitit.coercion.schema.t_reitit$coercion$schema46101(self__.p__46099,self__.map__46100,self__.opts,self__.matchers,self__.coerce_response_QMARK_,meta46102__$1));
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46103){
var self__ = this;
var _46103__$1 = this;
return self__.meta46102;
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"schema","schema",-1582001791);
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (this$,specification,p__46104){
var self__ = this;
var map__46105 = p__46104;
var map__46105__$1 = cljs.core.__destructure_map(map__46105);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46105__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46105__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var this$__$1 = this;
var G__46106 = specification;
var G__46106__$1 = (((G__46106 instanceof cljs.core.Keyword))?G__46106.fqn:null);
switch (G__46106__$1) {
case "swagger":
return schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("schema-tools.swagger.core","parameters","schema-tools.swagger.core/parameters",1714539482),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(parameters),(function (){var iter__4652__auto__ = (function reitit$coercion$schema$create_$_iter__46108(s__46109){
return (new cljs.core.LazySeq(null,(function (){
var s__46109__$1 = s__46109;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46109__$1);
if(temp__5753__auto__){
var s__46109__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46109__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__46109__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__46111 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__46110 = (0);
while(true){
if((i__46110 < size__4651__auto__)){
var vec__46112 = cljs.core._nth(c__4650__auto__,i__46110);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46112,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46112,(1),null);
cljs.core.chunk_append(b__46111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null));

var G__46141 = (i__46110 + (1));
i__46110 = G__46141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46111),reitit$coercion$schema$create_$_iter__46108(cljs.core.chunk_rest(s__46109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46111),null);
}
} else {
var vec__46115 = cljs.core.first(s__46109__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46115,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null),reitit$coercion$schema$create_$_iter__46108(cljs.core.rest(s__46109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("schema-tools.swagger.core","responses","schema-tools.swagger.core/responses",-2039250325),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__4652__auto__ = (function reitit$coercion$schema$create_$_iter__46118(s__46119){
return (new cljs.core.LazySeq(null,(function (){
var s__46119__$1 = s__46119;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46119__$1);
if(temp__5753__auto__){
var s__46119__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46119__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__46119__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__46121 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__46120 = (0);
while(true){
if((i__46120 < size__4651__auto__)){
var vec__46122 = cljs.core._nth(c__4650__auto__,i__46120);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46122,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46122,(1),null);
cljs.core.chunk_append(b__46121,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function (i__46120,$,$__$1,vec__46122,k,response,c__4650__auto__,size__4651__auto__,b__46121,s__46119__$2,temp__5753__auto__,G__46106,G__46106__$1,this$__$1,map__46105,map__46105__$1,parameters,responses,map__46100,map__46100__$1,opts,matchers,coerce_response_QMARK_){
return (function (p1__46098_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__46098_SHARP_,null);
});})(i__46120,$,$__$1,vec__46122,k,response,c__4650__auto__,size__4651__auto__,b__46121,s__46119__$2,temp__5753__auto__,G__46106,G__46106__$1,this$__$1,map__46105,map__46105__$1,parameters,responses,map__46100,map__46100__$1,opts,matchers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null));

var G__46142 = (i__46120 + (1));
i__46120 = G__46142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46121),reitit$coercion$schema$create_$_iter__46118(cljs.core.chunk_rest(s__46119__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46121),null);
}
} else {
var vec__46125 = cljs.core.first(s__46119__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46125,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46125,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function ($,$__$1,vec__46125,k,response,s__46119__$2,temp__5753__auto__,G__46106,G__46106__$1,this$__$1,map__46105,map__46105__$1,parameters,responses,map__46100,map__46100__$1,opts,matchers,coerce_response_QMARK_){
return (function (p1__46098_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__46098_SHARP_,null);
});})($,$__$1,vec__46125,k,response,s__46119__$2,temp__5753__auto__,G__46106,G__46106__$1,this$__$1,map__46105,map__46105__$1,parameters,responses,map__46100,map__46100__$1,opts,matchers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null),reitit$coercion$schema$create_$_iter__46118(cljs.core.rest(s__46119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(responses);
})())], null):null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Schema apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));

}
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,___$1){
var self__ = this;
var ___$2 = this;
return model;
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,schema__$1){
var self__ = this;
var ___$1 = this;
return schema_tools.core.open_schema(schema__$1);
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"schema","schema",-1582001791),reitit.coercion.schema.stringify),new cljs.core.Keyword(null,"errors","errors",-908790718),reitit.coercion.schema.stringify);
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (_,type,schema__$1){
var self__ = this;
var ___$1 = this;
var map__46128 = (self__.matchers.cljs$core$IFn$_invoke$arity$1 ? self__.matchers.cljs$core$IFn$_invoke$arity$1(type) : self__.matchers.call(null,type));
var map__46128__$1 = cljs.core.__destructure_map(map__46128);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46128__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46128__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var coercers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function reitit$coercion$schema$create_$_iter__46129(s__46130){
return (new cljs.core.LazySeq(null,(function (){
var s__46130__$1 = s__46130;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46130__$1);
if(temp__5753__auto__){
var s__46130__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46130__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__46130__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__46132 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__46131 = (0);
while(true){
if((i__46131 < size__4651__auto__)){
var m = cljs.core._nth(c__4650__auto__,i__46131);
cljs.core.chunk_append(b__46132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,schema.coerce.coercer(schema__$1,m)], null));

var G__46143 = (i__46131 + (1));
i__46131 = G__46143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46132),reitit$coercion$schema$create_$_iter__46129(cljs.core.chunk_rest(s__46130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46132),null);
}
} else {
var m = cljs.core.first(s__46130__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,schema.coerce.coercer(schema__$1,m)], null),reitit$coercion$schema$create_$_iter__46129(cljs.core.rest(s__46130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(formats),default$));
})());
return (function (value,format){
var temp__5751__auto__ = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(formats,format);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var matcher = temp__5751__auto__;
var coercer = (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(matcher) : coercers.call(null,matcher));
var coerced = (coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(value) : coercer.call(null,value));
var temp__5751__auto____$1 = schema.utils.error_val(coerced);
if(cljs.core.truth_(temp__5751__auto____$1)){
var error = temp__5751__auto____$1;
return reitit.coercion.map__GT_CoercionError(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),error], null));
} else {
return coerced;
}
} else {
return value;
}
});
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (this$,schema__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1(schema__$1) : self__.coerce_response_QMARK_.call(null,schema__$1)))){
return this$__$1.reitit$coercion$Coercion$_request_coercer$arity$3(null,new cljs.core.Keyword(null,"response","response",-1068424192),schema__$1);
} else {
return null;
}
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__46099","p__46099",-221427668,null),new cljs.core.Symbol(null,"map__46100","map__46100",892755040,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"coerce-response?","coerce-response?",-1529402678,null),new cljs.core.Symbol(null,"meta46102","meta46102",-1837620274,null)], null);
}));

(reitit.coercion.schema.t_reitit$coercion$schema46101.cljs$lang$type = true);

(reitit.coercion.schema.t_reitit$coercion$schema46101.cljs$lang$ctorStr = "reitit.coercion.schema/t_reitit$coercion$schema46101");

(reitit.coercion.schema.t_reitit$coercion$schema46101.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reitit.coercion.schema/t_reitit$coercion$schema46101");
}));

/**
 * Positional factory function for reitit.coercion.schema/t_reitit$coercion$schema46101.
 */
reitit.coercion.schema.__GT_t_reitit$coercion$schema46101 = (function reitit$coercion$schema$create_$___GT_t_reitit$coercion$schema46101(p__46099__$1,map__46100__$2,opts__$1,matchers__$1,coerce_response_QMARK___$1,meta46102){
return (new reitit.coercion.schema.t_reitit$coercion$schema46101(p__46099__$1,map__46100__$2,opts__$1,matchers__$1,coerce_response_QMARK___$1,meta46102));
});

}

return (new reitit.coercion.schema.t_reitit$coercion$schema46101(p__46099,map__46100__$1,opts,matchers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
});
reitit.coercion.schema.coercion = reitit.coercion.schema.create(reitit.coercion.schema.default_options);

//# sourceMappingURL=reitit.coercion.schema.js.map
