goog.provide('shadow.remote.runtime.obj_support');

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
shadow.remote.runtime.obj_support.Reference = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k50806,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__50819 = k50806;
var G__50819__$1 = (((G__50819 instanceof cljs.core.Keyword))?G__50819.fqn:null);
switch (G__50819__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50806,else__4505__auto__);

}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__50826){
var vec__50827 = p__50826;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50827,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50827,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.remote.runtime.obj-support.Reference{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50805){
var self__ = this;
var G__50805__$1 = this;
return (new cljs.core.RecordIter((0),G__50805__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1775716890 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50807,other50808){
var self__ = this;
var this50807__$1 = this;
return (((!((other50808 == null)))) && ((((this50807__$1.constructor === other50808.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50807__$1.obj,other50808.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50807__$1.__extmap,other50808.__extmap)))))));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k50806){
var self__ = this;
var this__4509__auto____$1 = this;
var G__50864 = k50806;
var G__50864__$1 = (((G__50864 instanceof cljs.core.Keyword))?G__50864.fqn:null);
switch (G__50864__$1) {
case "obj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50806);

}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__50805){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__50869 = cljs.core.keyword_identical_QMARK_;
var expr__50870 = k__4511__auto__;
if(cljs.core.truth_((pred__50869.cljs$core$IFn$_invoke$arity$2 ? pred__50869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__50870) : pred__50869.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__50870)))){
return (new shadow.remote.runtime.obj_support.Reference(G__50805,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__50805),null));
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__50805){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,G__50805,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.remote.runtime.obj_support.Reference.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(shadow.remote.runtime.obj_support.Reference.cljs$lang$type = true);

(shadow.remote.runtime.obj_support.Reference.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.remote.runtime.obj-support/Reference",null,(1),null));
}));

(shadow.remote.runtime.obj_support.Reference.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.remote.runtime.obj-support/Reference");
}));

/**
 * Positional factory function for shadow.remote.runtime.obj-support/Reference.
 */
shadow.remote.runtime.obj_support.__GT_Reference = (function shadow$remote$runtime$obj_support$__GT_Reference(obj){
return (new shadow.remote.runtime.obj_support.Reference(obj,null,null,null));
});

/**
 * Factory function for shadow.remote.runtime.obj-support/Reference, taking a map of keywords to field values.
 */
shadow.remote.runtime.obj_support.map__GT_Reference = (function shadow$remote$runtime$obj_support$map__GT_Reference(G__50811){
var extmap__4542__auto__ = (function (){var G__50892 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50811,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__50811)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50892);
} else {
return G__50892;
}
})();
return (new shadow.remote.runtime.obj_support.Reference(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__50811),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.remote.runtime.obj_support.obj_ref = (function shadow$remote$runtime$obj_support$obj_ref(obj){
if((!((obj == null)))){
return (new shadow.remote.runtime.obj_support.Reference(obj,null,null,null));
} else {
return null;
}
});
shadow.remote.runtime.obj_support.obj_ref_QMARK_ = (function shadow$remote$runtime$obj_support$obj_ref_QMARK_(result){
return (result instanceof shadow.remote.runtime.obj_support.Reference);
});
shadow.remote.runtime.obj_support.now = (function shadow$remote$runtime$obj_support$now(){
return Date.now();
});
shadow.remote.runtime.obj_support.next_oid = (function shadow$remote$runtime$obj_support$next_oid(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
});
shadow.remote.runtime.obj_support.register_STAR_ = (function shadow$remote$runtime$obj_support$register_STAR_(state,oid,obj,obj_info){
var ts = shadow.remote.runtime.obj_support.now();
var obj_entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"obj","obj",981763962),obj,new cljs.core.Keyword(null,"access-at","access-at",-1487162729),ts,new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obj_info,new cljs.core.Keyword(null,"added-at","added-at",-352499434),ts)], null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null),obj_entry);
});
shadow.remote.runtime.obj_support.obj_type_string = (function shadow$remote$runtime$obj_support$obj_type_string(obj){
if((obj == null)){
return "nil";
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.remote !== 'undefined') && (typeof shadow.remote.runtime !== 'undefined') && (typeof shadow.remote.runtime.obj_support !== 'undefined') && (typeof shadow.remote.runtime.obj_support.make_view !== 'undefined')){
} else {
shadow.remote.runtime.obj_support.make_view = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50918 = cljs.core.get_global_hierarchy;
return (fexpr__50918.cljs$core$IFn$_invoke$arity$0 ? fexpr__50918.cljs$core$IFn$_invoke$arity$0() : fexpr__50918.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("shadow.remote.runtime.obj-support","make-view"),(function (state_ref,p__50919,entry){
var map__50920 = p__50919;
var map__50920__$1 = cljs.core.__destructure_map(map__50920);
var msg = map__50920__$1;
var view_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50920__$1,new cljs.core.Keyword(null,"view-type","view-type",-1848894559));
return view_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
shadow.remote.runtime.obj_support.default_max_print_size = (((1) * (1024)) * (1024));
shadow.remote.runtime.obj_support.as_edn = (function shadow$remote$runtime$obj_support$as_edn(data,p__50925){
var map__50927 = p__50925;
var map__50927__$1 = cljs.core.__destructure_map(map__50927);
var msg = map__50927__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50927__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),shadow.remote.runtime.obj_support.default_max_print_size);
var lw = shadow.remote.runtime.writer.limit_writer(limit);
cljs.core.pr_writer(data,lw,cljs.core.pr_opts());

return shadow.remote.runtime.writer.get_string(lw);
});
shadow.remote.runtime.obj_support.as_pprint = (function shadow$remote$runtime$obj_support$as_pprint(data,p__50931){
var map__50932 = p__50931;
var map__50932__$1 = cljs.core.__destructure_map(map__50932);
var msg = map__50932__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50932__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),shadow.remote.runtime.obj_support.default_max_print_size);
var lw = shadow.remote.runtime.writer.limit_writer(limit);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(data,lw);

return shadow.remote.runtime.writer.get_string(lw);
});
shadow.remote.runtime.obj_support.as_edn_limit = (function shadow$remote$runtime$obj_support$as_edn_limit(data,p__50937){
var map__50938 = p__50937;
var map__50938__$1 = cljs.core.__destructure_map(map__50938);
var msg = map__50938__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50938__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return shadow.remote.runtime.writer.pr_str_limit(data,limit);
});
shadow.remote.runtime.obj_support.as_str = (function shadow$remote$runtime$obj_support$as_str(data,msg){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(data);
});
shadow.remote.runtime.obj_support.as_ex_str = (function shadow$remote$runtime$obj_support$as_ex_str(ex,msg){
if((ex instanceof Error)){
return cljs.repl.error__GT_str(ex);
} else {
return ["Execution error:\n","  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(shadow.remote.runtime.writer.pr_str_limit(ex,(200)))),"\n","\n"].join('');
}
});
shadow.remote.runtime.obj_support.exception_QMARK_ = (function shadow$remote$runtime$obj_support$exception_QMARK_(x){
return true;
});
shadow.remote.runtime.obj_support.rank_predicates = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.boolean_QMARK_,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.keyword_QMARK_,cljs.core.symbol_QMARK_,cljs.core.vector_QMARK_,cljs.core.map_QMARK_,cljs.core.list_QMARK_], null);
shadow.remote.runtime.obj_support.rank_val = (function shadow$remote$runtime$obj_support$rank_val(val){
return cljs.core.reduce_kv((function (res,idx,pred){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(val) : pred.call(null,val)))){
return cljs.core.reduced(idx);
} else {
return res;
}
}),(-1),shadow.remote.runtime.obj_support.rank_predicates);
});
shadow.remote.runtime.obj_support.smart_comp = (function shadow$remote$runtime$obj_support$smart_comp(a,b){
try{return cljs.core.compare(a,b);
}catch (e50950){if((e50950 instanceof Error)){
var e = e50950;
var ar = shadow.remote.runtime.obj_support.rank_val(a);
var br = shadow.remote.runtime.obj_support.rank_val(b);
return cljs.core.compare(ar,br);
} else {
throw e50950;

}
}});
shadow.remote.runtime.obj_support.attempt_to_sort = (function shadow$remote$runtime$obj_support$attempt_to_sort(desc,coll){
try{return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"view-order","view-order",566761574),cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(shadow.remote.runtime.obj_support.smart_comp,coll))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"sorted","sorted",-896746253)], null),true);
}catch (e50955){var e = e50955;
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"view-order","view-order",566761574),cljs.core.vec(coll)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"sorted","sorted",-896746253)], null),false);
}});
shadow.remote.runtime.obj_support.browseable_kv = (function shadow$remote$runtime$obj_support$browseable_kv(p__50962){
var map__50963 = p__50962;
var map__50963__$1 = cljs.core.__destructure_map(map__50963);
var desc = map__50963__$1;
var view_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50963__$1,new cljs.core.Keyword(null,"view-order","view-order",566761574));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50963__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__50966){
var map__50967 = p__50966;
var map__50967__$1 = cljs.core.__destructure_map(map__50967);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50967__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
var nav = clojure.datafy.nav(data,key,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(function (p__50972){
var map__50977 = p__50972;
var map__50977__$1 = cljs.core.__destructure_map(map__50977);
var msg = map__50977__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var key_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50977__$1,new cljs.core.Keyword(null,"key-limit","key-limit",259239169),(100));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50977__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var end = (function (){var x__4339__auto__ = cljs.core.count(view_order);
var y__4340__auto__ = (start + num);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){try{return shadow.remote.runtime.writer.pr_str_limit(key,key_limit);
}catch (e50982){var e = e50982;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"... print failed ..."], null);
}})(),new cljs.core.Keyword(null,"val","val",128701612),(function (){try{return shadow.remote.runtime.writer.pr_str_limit(val,val_limit);
}catch (e50984){var e = e50984;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"... print failed ..."], null);
}})()], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
}));
});
shadow.remote.runtime.obj_support.browseable_vec = (function shadow$remote$runtime$obj_support$browseable_vec(p__50987){
var map__50988 = p__50987;
var map__50988__$1 = cljs.core.__destructure_map(map__50988);
var desc = map__50988__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50988__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__50992){
var map__50993 = p__50992;
var map__50993__$1 = cljs.core.__destructure_map(map__50993);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50993__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(function (p__50994){
var map__50995 = p__50994;
var map__50995__$1 = cljs.core.__destructure_map(map__50995);
var msg = map__50995__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50995__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50995__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50995__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var end = (function (){var x__4339__auto__ = cljs.core.count(data);
var y__4340__auto__ = (start + num);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
}));
});
shadow.remote.runtime.obj_support.browseable_seq = (function shadow$remote$runtime$obj_support$browseable_seq(p__50996){
var map__50997 = p__50996;
var map__50997__$1 = cljs.core.__destructure_map(map__50997);
var desc = map__50997__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50997__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var view_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50997__$1,new cljs.core.Keyword(null,"view-order","view-order",566761574));
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__50998){
var map__50999 = p__50998;
var map__50999__$1 = cljs.core.__destructure_map(map__50999);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50999__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(function (p__51000){
var map__51001 = p__51000;
var map__51001__$1 = cljs.core.__destructure_map(map__51001);
var msg = map__51001__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51001__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51001__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51001__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var end = (function (){var x__4339__auto__ = cljs.core.count(view_order);
var y__4340__auto__ = (start + num);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
}));
});
shadow.remote.runtime.obj_support.pageable_seq = (function shadow$remote$runtime$obj_support$pageable_seq(p__51012){
var map__51013 = p__51012;
var map__51013__$1 = cljs.core.__destructure_map(map__51013);
var desc = map__51013__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51013__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var seq_state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tail","tail",-1146023564),data,new cljs.core.Keyword(null,"realized","realized",-153188123),cljs.core.PersistentVector.EMPTY], null));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"seq-state-ref","seq-state-ref",869825254),seq_state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__51017){
var map__51018 = p__51017;
var map__51018__$1 = cljs.core.__destructure_map(map__51018);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51018__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"realized","realized",-153188123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seq_state_ref)),idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"chunk","chunk",-1191159620)], null),(function (p__51022){
var map__51023 = p__51022;
var map__51023__$1 = cljs.core.__destructure_map(map__51023);
var msg = map__51023__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51023__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51023__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51023__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var map__51024 = cljs.core.deref(seq_state_ref);
var map__51024__$1 = cljs.core.__destructure_map(map__51024);
var seq_state = map__51024__$1;
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51024__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var realized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51024__$1,new cljs.core.Keyword(null,"realized","realized",-153188123));
var end = (start + num);
var missing = (end - cljs.core.count(realized));
var vec__51025 = (function (){var tail__$1 = tail;
var realized__$1 = realized;
var missing__$1 = missing;
while(true){
if((!((missing__$1 > (0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail__$1,realized__$1], null);
} else {
var next = cljs.core.first(tail__$1);
if((next == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,realized__$1], null);
} else {
var G__51208 = cljs.core.rest(tail__$1);
var G__51209 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(realized__$1,next);
var G__51210 = (missing__$1 - (1));
tail__$1 = G__51208;
realized__$1 = G__51209;
missing__$1 = G__51210;
continue;
}
}
break;
}
})();
var tail__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51025,(0),null);
var realized__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51025,(1),null);
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,(function (){var x__4339__auto__ = end;
var y__4340__auto__ = cljs.core.count(realized__$1);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})());
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(realized__$1,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(seq_state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"tail","tail",-1146023564),tail__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"realized","realized",-153188123),realized__$1], 0));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"realized","realized",-153188123),cljs.core.count(realized__$1),new cljs.core.Keyword(null,"fragment","fragment",826775688),fragment,new cljs.core.Keyword(null,"more?","more?",519437444),(((cljs.core.count(realized__$1) > end)) || ((!((tail__$1 == null)))))], null);
}));
});
shadow.remote.runtime.obj_support.inspect_basic = (function shadow$remote$runtime$obj_support$inspect_basic(p__51050,obj,opts){
var map__51051 = p__51050;
var map__51051__$1 = cljs.core.__destructure_map(map__51051);
var desc = map__51051__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051__$1,new cljs.core.Keyword(null,"data","data",-232669377));
try{if((data == null)){
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"nil","nil",99600501));
} else {
if(typeof data === 'string'){
return cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"length","length",588987862),((data).length)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if(cljs.core.boolean_QMARK_(data)){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if(typeof data === 'number'){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if((data instanceof cljs.core.Keyword)){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if((data instanceof cljs.core.Symbol)){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if(cljs.core.map_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_kv(shadow.remote.runtime.obj_support.attempt_to_sort(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)),cljs.core.keys(data)));
} else {
if(cljs.core.vector_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_vec(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)));
} else {
if(cljs.core.set_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_seq(shadow.remote.runtime.obj_support.attempt_to_sort(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)),data));
} else {
if(cljs.core.list_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_seq(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)),new cljs.core.Keyword(null,"view-order","view-order",566761574),cljs.core.vec(data)));
} else {
if(cljs.core.seq_QMARK_(data)){
return shadow.remote.runtime.obj_support.pageable_seq(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"lazy-seq","lazy-seq",-1150898621)], null)));
} else {
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016));

}
}
}
}
}
}
}
}
}
}
}
}catch (e51052){var e = e51052;
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016));
}});
shadow.remote.runtime.obj_support.inspect_type_info = (function shadow$remote$runtime$obj_support$inspect_type_info(desc,obj,opts){
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"obj-type","obj-type",-1658555496)], null),shadow.remote.runtime.obj_support.obj_type_string(obj));
});
shadow.remote.runtime.obj_support.inspect_source_info = (function shadow$remote$runtime$obj_support$inspect_source_info(desc,obj,opts){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"label","label",1718410804)], null)));
});
shadow.remote.runtime.obj_support.add_summary_op = (function shadow$remote$runtime$obj_support$add_summary_op(p__51068){
var map__51069 = p__51068;
var map__51069__$1 = cljs.core.__destructure_map(map__51069);
var desc = map__51069__$1;
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51069__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (msg){
return summary;
}));
});
shadow.remote.runtime.obj_support.default_describe = (function shadow$remote$runtime$obj_support$default_describe(o,opts){
var data = clojure.datafy.datafy(o);
return shadow.remote.runtime.obj_support.add_summary_op(shadow.remote.runtime.obj_support.inspect_source_info(shadow.remote.runtime.obj_support.inspect_type_info(shadow.remote.runtime.obj_support.inspect_basic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"added-at","added-at",-352499434),new cljs.core.Keyword(null,"added-at","added-at",-352499434).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"datafied","datafied",2076148104),(!((data === o)))], null),new cljs.core.Keyword(null,"handlers","handlers",79528781),(function (){var G__51075 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"str","str",1089608819),(function (p1__51070_SHARP_){
return shadow.remote.runtime.obj_support.as_str(o,p1__51070_SHARP_);
}),new cljs.core.Keyword(null,"edn","edn",1317840885),(function (p1__51071_SHARP_){
return shadow.remote.runtime.obj_support.as_edn(o,p1__51071_SHARP_);
}),new cljs.core.Keyword(null,"edn-limit","edn-limit",1353115803),(function (p1__51072_SHARP_){
return shadow.remote.runtime.obj_support.as_edn_limit(o,p1__51072_SHARP_);
})], null);
var G__51075__$1 = ((((cljs.core.coll_QMARK_(o)) || (cljs.core.seq_QMARK_(o))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51075,new cljs.core.Keyword(null,"pprint","pprint",1220198395),(function (p1__51073_SHARP_){
return shadow.remote.runtime.obj_support.as_pprint(o,p1__51073_SHARP_);
})):G__51075);
if(shadow.remote.runtime.obj_support.exception_QMARK_(o)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51075__$1,new cljs.core.Keyword(null,"ex-str","ex-str",971148789),(function (p1__51074_SHARP_){
return shadow.remote.runtime.obj_support.as_ex_str(o,p1__51074_SHARP_);
}));
} else {
return G__51075__$1;
}
})()], null),o,opts),o,opts),o,opts));
});
(shadow.remote.runtime.api.Inspectable["_"] = true);

(shadow.remote.runtime.api.describe["_"] = (function (o,opts){
return shadow.remote.runtime.obj_support.default_describe(o,opts);
}));

(shadow.remote.runtime.api.Inspectable["null"] = true);

(shadow.remote.runtime.api.describe["null"] = (function (o,opts){
return shadow.remote.runtime.obj_support.default_describe(o,opts);
}));
shadow.remote.runtime.obj_support.add_supports = (function shadow$remote$runtime$obj_support$add_supports(p__51082){
var map__51083 = p__51082;
var map__51083__$1 = cljs.core.__destructure_map(map__51083);
var desc = map__51083__$1;
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51083__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"supports","supports",1501242067)], null),cljs.core.set(cljs.core.keys(handlers)));
});
shadow.remote.runtime.obj_support.ensure_descriptor = (function shadow$remote$runtime$obj_support$ensure_descriptor(p__51084){
var map__51085 = p__51084;
var map__51085__$1 = cljs.core.__destructure_map(map__51085);
var entry = map__51085__$1;
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51085__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var obj_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51085__$1,new cljs.core.Keyword(null,"obj-info","obj-info",-373842651));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51085__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
if(cljs.core.truth_(desc)){
return entry;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"desc","desc",2093485764),shadow.remote.runtime.obj_support.add_supports(shadow.remote.runtime.api.describe(obj,obj_info)));
}
});
shadow.remote.runtime.obj_support.get_tap_history = (function shadow$remote$runtime$obj_support$get_tap_history(p__51088,num){
var map__51089 = p__51088;
var map__51089__$1 = cljs.core.__destructure_map(map__51089);
var svc = map__51089__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51089__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__51087_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__51087_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51086_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__51086_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
});
shadow.remote.runtime.obj_support.obj_describe_STAR_ = (function shadow$remote$runtime$obj_support$obj_describe_STAR_(p__51092,oid){
var map__51093 = p__51092;
var map__51093__$1 = cljs.core.__destructure_map(map__51093);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)),oid)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null),shadow.remote.runtime.obj_support.ensure_descriptor);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"access-at","access-at",-1487162729)], null),shadow.remote.runtime.obj_support.now());

var summary = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"summary","summary",380847952)], null));
return summary;
} else {
return null;
}
});
shadow.remote.runtime.obj_support.obj_describe = (function shadow$remote$runtime$obj_support$obj_describe(p__51095,p__51096){
var map__51098 = p__51095;
var map__51098__$1 = cljs.core.__destructure_map(map__51098);
var svc = map__51098__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51099 = p__51096;
var map__51099__$1 = cljs.core.__destructure_map(map__51099);
var msg = map__51099__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51099__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
var temp__5751__auto__ = shadow.remote.runtime.obj_support.obj_describe_STAR_(svc,oid);
if(cljs.core.truth_(temp__5751__auto__)){
var summary = temp__5751__auto__;
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-summary","obj-summary",-1372191064),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),summary], null));
} else {
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-not-found","obj-not-found",1577257696),new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
}
});
shadow.remote.runtime.obj_support.obj_request = (function shadow$remote$runtime$obj_support$obj_request(p__51100,p__51101){
var map__51102 = p__51100;
var map__51102__$1 = cljs.core.__destructure_map(map__51102);
var this$ = map__51102__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51102__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51102__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51103 = p__51101;
var map__51103__$1 = cljs.core.__destructure_map(map__51103);
var msg = map__51103__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51103__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
var request_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51103__$1,new cljs.core.Keyword(null,"request-op","request-op",1472997246));
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)),oid)))){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-not-found","obj-not-found",1577257696),new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null),shadow.remote.runtime.obj_support.ensure_descriptor);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"access-at","access-at",-1487162729)], null),shadow.remote.runtime.obj_support.now());

var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null));
var request_fn = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"handlers","handlers",79528781),request_op], null));
if(cljs.core.not(request_fn)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request-not-supported","obj-request-not-supported",93907126),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"request-op","request-op",1472997246),request_op], null));
} else {
try{var result = (request_fn.cljs$core$IFn$_invoke$arity$1 ? request_fn.cljs$core$IFn$_invoke$arity$1(msg) : request_fn.call(null,msg));
if((!(shadow.remote.runtime.obj_support.obj_ref_QMARK_(result)))){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-result","obj-result",-486300152),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"result","result",1415092211),result], null));
} else {
var new_oid = shadow.remote.runtime.obj_support.next_oid();
var ts = shadow.remote.runtime.obj_support.now();
var new_entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oid","oid",-768692334),new_oid,new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"access-at","access-at",-1487162729),ts,new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"added-at","added-at",-352499434),ts,new cljs.core.Keyword(null,"added-via","added-via",1525812109),oid], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new_oid], null),new_entry);

var reply_msg = (function (){var G__51116 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-result-ref","obj-result-ref",1537374891),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),new_oid], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(msg))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51116,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(this$,new_oid));
} else {
return G__51116;
}
})();
return shadow.remote.runtime.shared.reply(runtime,msg,reply_msg);
}
}catch (e51110){var e = e51110;
console.warn("action-request-action failed",new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(entry),e);

return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request-failed","obj-request-failed",-1782005406),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),(function (){var G__51111 = this$;
var G__51112 = e;
var G__51113 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null);
return (shadow.remote.runtime.obj_support.register.cljs$core$IFn$_invoke$arity$3 ? shadow.remote.runtime.obj_support.register.cljs$core$IFn$_invoke$arity$3(G__51111,G__51112,G__51113) : shadow.remote.runtime.obj_support.register.call(null,G__51111,G__51112,G__51113));
})()], null));
}}
}
});
shadow.remote.runtime.obj_support.obj_forget = (function shadow$remote$runtime$obj_support$obj_forget(p__51120,p__51121){
var map__51122 = p__51120;
var map__51122__$1 = cljs.core.__destructure_map(map__51122);
var svc = map__51122__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51122__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__51123 = p__51121;
var map__51123__$1 = cljs.core.__destructure_map(map__51123);
var msg = map__51123__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oid], 0));
});
shadow.remote.runtime.obj_support.obj_forget_all = (function shadow$remote$runtime$obj_support$obj_forget_all(p__51125,msg){
var map__51126 = p__51125;
var map__51126__$1 = cljs.core.__destructure_map(map__51126);
var svc = map__51126__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51126__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY);
});
shadow.remote.runtime.obj_support.basic_gc_BANG_ = (function shadow$remote$runtime$obj_support$basic_gc_BANG_(state){
var objs_to_drop = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((100),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"access-at","access-at",-1487162729),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(state))))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,oid){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.dissoc,oid);
}),state,objs_to_drop);
});
shadow.remote.runtime.obj_support.start = (function shadow$remote$runtime$obj_support$start(runtime){
var state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"id-seq-ref","id-seq-ref",-98357047),(0)], null));
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),state_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.obj-support","ext","shadow.remote.runtime.obj-support/ext",-1896569346),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"obj-describe","obj-describe",-34922904),(function (p1__51127_SHARP_){
return shadow.remote.runtime.obj_support.obj_describe(svc,p1__51127_SHARP_);
}),new cljs.core.Keyword(null,"obj-request","obj-request",-1709325811),(function (p1__51128_SHARP_){
return shadow.remote.runtime.obj_support.obj_request(svc,p1__51128_SHARP_);
}),new cljs.core.Keyword(null,"obj-forget","obj-forget",2003566115),(function (p1__51129_SHARP_){
return shadow.remote.runtime.obj_support.obj_forget(svc,p1__51129_SHARP_);
}),new cljs.core.Keyword(null,"obj-forget-all","obj-forget-all",1418682131),(function (p1__51130_SHARP_){
return shadow.remote.runtime.obj_support.obj_forget_all(svc,p1__51130_SHARP_);
})], null),new cljs.core.Keyword(null,"on-idle","on-idle",2044706602),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_ref,shadow.remote.runtime.obj_support.basic_gc_BANG_);
})], null));

return svc;
});
shadow.remote.runtime.obj_support.register = (function shadow$remote$runtime$obj_support$register(p__51133,obj,obj_info){
var map__51134 = p__51133;
var map__51134__$1 = cljs.core.__destructure_map(map__51134);
var svc = map__51134__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51134__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var oid = shadow.remote.runtime.obj_support.next_oid();
if((!(((cljs.core.vector_QMARK_(obj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shadow.remote","wrap","shadow.remote/wrap",996267199),cljs.core.first(obj))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(obj),(3))))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,shadow.remote.runtime.obj_support.register_STAR_,oid,obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj_info], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,shadow.remote.runtime.obj_support.register_STAR_,oid,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj_info,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj,(2))], 0))], 0));
}

return oid;
});
shadow.remote.runtime.obj_support.get_ref = (function shadow$remote$runtime$obj_support$get_ref(p__51138,obj_id){
var map__51139 = p__51138;
var map__51139__$1 = cljs.core.__destructure_map(map__51139);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51139__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),obj_id], null));
});
shadow.remote.runtime.obj_support.stop = (function shadow$remote$runtime$obj_support$stop(p__51140){
var map__51141 = p__51140;
var map__51141__$1 = cljs.core.__destructure_map(map__51141);
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51141__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.obj-support","ext","shadow.remote.runtime.obj-support/ext",-1896569346));
});

//# sourceMappingURL=shadow.remote.runtime.obj_support.js.map
