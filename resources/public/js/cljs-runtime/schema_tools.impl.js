goog.provide('schema_tools.impl');
schema_tools.impl.unlift_keys = (function schema_tools$impl$unlift_keys(data,ns_name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__45528){
var vec__45529 = p__45528;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45529,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45529,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
});

/**
 * @interface
 */
schema_tools.impl.SchemaValue = function(){};

var schema_tools$impl$SchemaValue$schema_value$dyn_45610 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (schema_tools.impl.schema_value[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (schema_tools.impl.schema_value["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SchemaValue.schema-value",this$);
}
}
});
/**
 * Returns the sub-schema for given schema.
 */
schema_tools.impl.schema_value = (function schema_tools$impl$schema_value(this$){
if((((!((this$ == null)))) && ((!((this$.schema_tools$impl$SchemaValue$schema_value$arity$1 == null)))))){
return this$.schema_tools$impl$SchemaValue$schema_value$arity$1(this$);
} else {
return schema_tools$impl$SchemaValue$schema_value$dyn_45610(this$);
}
});

(schema_tools.impl.SchemaValue["null"] = true);

(schema_tools.impl.schema_value["null"] = (function (_){
return null;
}));

(schema.core.One.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.One.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.schema;
}));

(schema.core.ConditionalSchema.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,this$__$1.preds_and_schemas));
}));

(schema_tools.impl.SchemaValue["_"] = true);

(schema_tools.impl.schema_value["_"] = (function (this$){
return this$;
}));

(schema.core.Maybe.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.schema;
}));

(schema.core.NamedSchema.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.schema;
}));

(schema.core.Either.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(this$__$1.schemas);
}));

(schema.core.CondPre.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(this$__$1.schemas);
}));

(schema.core.Both.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(this$__$1.schemas);
}));

(schema.core.Constrained.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.schema;
}));

(schema.core.EnumSchema.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EnumSchema.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.vs;
}));

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
schema_tools.impl.Default = (function (schema,value,__meta,__extmap,__hash){
this.schema = schema;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema_tools.impl.Default.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(schema_tools.impl.Default.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k45560,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__45572 = k45560;
var G__45572__$1 = (((G__45572 instanceof cljs.core.Keyword))?G__45572.fqn:null);
switch (G__45572__$1) {
case "schema":
return self__.schema;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45560,else__4505__auto__);

}
}));

(schema_tools.impl.Default.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__45573){
var vec__45577 = p__45573;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(schema_tools.impl.Default.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#schema-tools.impl.Default{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(schema_tools.impl.Default.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45559){
var self__ = this;
var G__45559__$1 = this;
return (new cljs.core.RecordIter((0),G__45559__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema_tools.impl.Default.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(schema_tools.impl.Default.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new schema_tools.impl.Default(self__.schema,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema_tools.impl.Default.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema_tools.impl.Default.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1885477704 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(schema_tools.impl.Default.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45561,other45562){
var self__ = this;
var this45561__$1 = this;
return (((!((other45562 == null)))) && ((((this45561__$1.constructor === other45562.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45561__$1.schema,other45562.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45561__$1.value,other45562.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45561__$1.__extmap,other45562.__extmap)))))))));
}));

(schema_tools.impl.Default.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema_tools.impl.Default.prototype.schema$core$Schema$spec$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
}));

(schema_tools.impl.Default.prototype.schema$core$Schema$explain$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"default","default",-347290801,null),(new cljs.core.List(null,schema.core.explain(self__.schema),(new cljs.core.List(null,self__.value,null,(1),null)),(2),null)),(3),null));
}));

(schema_tools.impl.Default.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new schema_tools.impl.Default(self__.schema,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(schema_tools.impl.Default.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k45560){
var self__ = this;
var this__4509__auto____$1 = this;
var G__45595 = k45560;
var G__45595__$1 = (((G__45595 instanceof cljs.core.Keyword))?G__45595.fqn:null);
switch (G__45595__$1) {
case "schema":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45560);

}
}));

(schema_tools.impl.Default.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__45559){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__45601 = cljs.core.keyword_identical_QMARK_;
var expr__45602 = k__4511__auto__;
if(cljs.core.truth_((pred__45601.cljs$core$IFn$_invoke$arity$2 ? pred__45601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__45602) : pred__45601.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__45602)))){
return (new schema_tools.impl.Default(G__45559,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45601.cljs$core$IFn$_invoke$arity$2 ? pred__45601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__45602) : pred__45601.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__45602)))){
return (new schema_tools.impl.Default(self__.schema,G__45559,self__.__meta,self__.__extmap,null));
} else {
return (new schema_tools.impl.Default(self__.schema,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__45559),null));
}
}
}));

(schema_tools.impl.Default.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(schema_tools.impl.Default.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__45559){
var self__ = this;
var this__4501__auto____$1 = this;
return (new schema_tools.impl.Default(self__.schema,self__.value,G__45559,self__.__extmap,self__.__hash));
}));

(schema_tools.impl.Default.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(schema_tools.impl.Default.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(schema_tools.impl.Default.cljs$lang$type = true);

(schema_tools.impl.Default.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"schema-tools.impl/Default",null,(1),null));
}));

(schema_tools.impl.Default.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"schema-tools.impl/Default");
}));

/**
 * Positional factory function for schema-tools.impl/Default.
 */
schema_tools.impl.__GT_Default = (function schema_tools$impl$__GT_Default(schema__$1,value){
return (new schema_tools.impl.Default(schema__$1,value,null,null,null));
});

/**
 * Factory function for schema-tools.impl/Default, taking a map of keywords to field values.
 */
schema_tools.impl.map__GT_Default = (function schema_tools$impl$map__GT_Default(G__45567){
var extmap__4542__auto__ = (function (){var G__45608 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45567,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__45567)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45608);
} else {
return G__45608;
}
})();
return (new schema_tools.impl.Default(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__45567),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__45567),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

schema_tools.impl.default_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,schema_tools.impl.Default);
schema_tools.impl.default$ = (function schema_tools$impl$default(schema__$1,value){
schema.core.validate(schema__$1,value);

return schema_tools.impl.__GT_Default(schema__$1,value);
});

//# sourceMappingURL=schema_tools.impl.js.map
