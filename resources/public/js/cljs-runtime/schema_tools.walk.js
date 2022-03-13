goog.provide('schema_tools.walk');

/**
 * @interface
 */
schema_tools.walk.WalkableSchema = function(){};

var schema_tools$walk$WalkableSchema$_walk$dyn_45604 = (function (this$,inner,outer){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (schema_tools.walk._walk[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,inner,outer) : m__4551__auto__.call(null,this$,inner,outer));
} else {
var m__4549__auto__ = (schema_tools.walk._walk["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,inner,outer) : m__4549__auto__.call(null,this$,inner,outer));
} else {
throw cljs.core.missing_protocol("WalkableSchema.-walk",this$);
}
}
});
schema_tools.walk._walk = (function schema_tools$walk$_walk(this$,inner,outer){
if((((!((this$ == null)))) && ((!((this$.schema_tools$walk$WalkableSchema$_walk$arity$3 == null)))))){
return this$.schema_tools$walk$WalkableSchema$_walk$arity$3(this$,inner,outer);
} else {
return schema_tools$walk$WalkableSchema$_walk$dyn_45604(this$,inner,outer);
}
});

/**
 * Tests if the parameter is Schema record. I.e. not vector, map or other
 *   collection but implements Schema protocol.
 */
schema_tools.walk.schema_record_QMARK_ = (function schema_tools$walk$schema_record_QMARK_(x){
var and__4251__auto__ = cljs.core.record_QMARK_(x);
if(and__4251__auto__){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.schema$core$Schema$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,x);
}
} else {
return and__4251__auto__;
}
});
/**
 * Calls `inner` for sub-schemas of this schema, creating new Schema of the same
 *   type as given and preserving the metadata. Calls `outer` with the created
 *   Schema.
 */
schema_tools.walk.walk = (function schema_tools$walk$walk(inner,outer,this$){
if((((!((this$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.schema_tools$walk$WalkableSchema$))))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(schema_tools.walk.WalkableSchema,this$):false)):cljs.core.native_satisfies_QMARK_(schema_tools.walk.WalkableSchema,this$))){
return schema_tools.walk._walk(this$,inner,outer);
} else {
if(schema_tools.walk.schema_record_QMARK_(this$)){
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(this$) : outer.call(null,this$));
} else {
if(cljs.core.record_QMARK_(this$)){
var G__45555 = cljs.core.with_meta(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),this$,this$),cljs.core.meta(this$));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45555) : outer.call(null,G__45555));
} else {
if(cljs.core.seq_QMARK_(this$)){
var G__45556 = cljs.core.with_meta(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$)),cljs.core.meta(this$));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45556) : outer.call(null,G__45556));
} else {
if(cljs.core.coll_QMARK_(this$)){
var G__45557 = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(this$),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$)),cljs.core.meta(this$));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45557) : outer.call(null,G__45557));
} else {
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(this$) : outer.call(null,this$));

}
}
}
}
}
});
/**
 * Performs a depth-first, post-order traversal of `schema`.  Calls `f` on
 *   each sub-form, uses f's return value in place of the original.
 *   Works with Schemas implementing schema-tools.walk/WalkableSchema,
 *   implementation is provided for built-in schemas.
 *   Consumes seqs as with doall.
 */
schema_tools.walk.postwalk = (function schema_tools$walk$postwalk(f,schema__$1){
return schema_tools.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema_tools.walk.postwalk,f),f,schema__$1);
});
/**
 * Like postwalk, but does pre-order traversal.
 */
schema_tools.walk.prewalk = (function schema_tools$walk$prewalk(f,schema__$1){
return schema_tools.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema_tools.walk.prewalk,f),cljs.core.identity,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(schema__$1) : f.call(null,schema__$1)));
});
(cljs.core.MapEntry.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__45565 = cljs.core.with_meta(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$__$1)),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45565) : outer.call(null,G__45565));
}));

(schema.core.ConditionalSchema.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__45566 = cljs.core.with_meta(schema.core.__GT_ConditionalSchema(cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function schema_tools$walk$iter__45568(s__45569){
return (new cljs.core.LazySeq(null,(function (){
var s__45569__$1 = s__45569;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45569__$1);
if(temp__5753__auto__){
var s__45569__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45569__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45569__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45571 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45570 = (0);
while(true){
if((i__45570 < size__4651__auto__)){
var vec__45574 = cljs.core._nth(c__4650__auto__,i__45570);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45574,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45574,(1),null);
cljs.core.chunk_append(b__45571,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(schema__$1) : inner.call(null,schema__$1))], null));

var G__45614 = (i__45570 + (1));
i__45570 = G__45614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45571),schema_tools$walk$iter__45568(cljs.core.chunk_rest(s__45569__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45571),null);
}
} else {
var vec__45580 = cljs.core.first(s__45569__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45580,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45580,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(schema__$1) : inner.call(null,schema__$1))], null),schema_tools$walk$iter__45568(cljs.core.rest(s__45569__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(this$__$1.preds_and_schemas);
})()),this$__$1.error_symbol),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45566) : outer.call(null,G__45566));
}));

(schema.core.Maybe.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__45583 = cljs.core.with_meta(schema.core.maybe((function (){var G__45584 = this$__$1.schema;
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__45584) : inner.call(null,G__45584));
})()),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45583) : outer.call(null,G__45583));
}));

(schema.core.NamedSchema.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__45585 = cljs.core.with_meta(schema.core.named((function (){var G__45586 = this$__$1.schema;
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__45586) : inner.call(null,G__45586));
})(),this$__$1.name),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45585) : outer.call(null,G__45585));
}));

(schema.core.Either.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__45587 = cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.either,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$__$1.schemas)),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45587) : outer.call(null,G__45587));
}));

(schema.core.Predicate.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Predicate.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,_,outer){
var this$__$1 = this;
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(this$__$1) : outer.call(null,this$__$1));
}));

(schema.core.CondPre.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__45588 = cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.cond_pre,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$__$1.schemas)),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45588) : outer.call(null,G__45588));
}));

(schema.core.Both.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__45589 = cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.both,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$__$1.schemas)),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45589) : outer.call(null,G__45589));
}));

(schema.core.Constrained.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__45593 = cljs.core.with_meta(schema.core.constrained.cljs$core$IFn$_invoke$arity$3((function (){var G__45594 = this$__$1.schema;
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__45594) : inner.call(null,G__45594));
})(),this$__$1.postcondition,this$__$1.post_name),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45593) : outer.call(null,G__45593));
}));

//# sourceMappingURL=schema_tools.walk.js.map
