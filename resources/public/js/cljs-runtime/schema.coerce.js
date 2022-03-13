goog.provide('schema.coerce');
/**
 * A Schema for Schemas
 */
schema.coerce.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__43543__43544__auto__){
if((!((p1__43543__43544__auto__ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__43543__43544__auto__.schema$core$Schema$)))){
return true;
} else {
if((!p1__43543__43544__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__43543__43544__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__43543__43544__auto__);
}
})], null));
/**
 * A function from schema to coercion function, or nil if no special coercion is needed.
 * The returned function is applied to the corresponding data before validation (or walking/
 * coercion of its sub-schemas, if applicable)
 */
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___45818 = schema.utils.use_fn_validation;
var output_schema45761_45819 = schema.core.Any;
var input_schema45762_45820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.coerce.CoercionMatcher,cljs.core.with_meta(new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)))], null);
var input_checker45763_45821 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema45762_45820);
}),null));
var output_checker45764_45822 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema45761_45819);
}),null));
var ret__44409__auto___45823 = /**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 *   Produce a function that simultaneously coerces and validates a datum.  Returns
 * a coerced value, or a schema.utils.ErrorContainer describing the error.
 */
schema.coerce.coercer = (function schema$coerce$coercer(G__45765,G__45766){
var validate__42814__auto__ = cljs.core.deref(ufv___45818);
if(cljs.core.truth_(validate__42814__auto__)){
var args__42815__auto___45824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__45765,G__45766], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__45767_45825 = new cljs.core.Keyword(null,"input","input",556931961);
var G__45768_45826 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null));
var G__45769_45827 = input_schema45762_45820;
var G__45770_45828 = cljs.core.deref(input_checker45763_45821);
var G__45771_45829 = args__42815__auto___45824;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__45767_45825,G__45768_45826,G__45769_45827,G__45770_45828,G__45771_45829) : schema.core.fn_validator.call(null,G__45767_45825,G__45768_45826,G__45769_45827,G__45770_45828,G__45771_45829));
} else {
var temp__5753__auto___45830 = (function (){var fexpr__45772 = cljs.core.deref(input_checker45763_45821);
return (fexpr__45772.cljs$core$IFn$_invoke$arity$1 ? fexpr__45772.cljs$core$IFn$_invoke$arity$1(args__42815__auto___45824) : fexpr__45772.call(null,args__42815__auto___45824));
})();
if(cljs.core.truth_(temp__5753__auto___45830)){
var error__42816__auto___45831 = temp__5753__auto___45830;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__42816__auto___45831], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema45762_45820,new cljs.core.Keyword(null,"value","value",305978217),args__42815__auto___45824,new cljs.core.Keyword(null,"error","error",-978969032),error__42816__auto___45831], null));
} else {
}
}
} else {
}

var o__42817__auto__ = (function (){var schema__$1 = G__45765;
var coercion_matcher = G__45766;
while(true){
return schema.spec.core.run_checker(((function (validate__42814__auto__,ufv___45818,output_schema45761_45819,input_schema45762_45820,input_checker45763_45821,output_checker45764_45822){
return (function (s,params){
var c = schema.spec.core.checker(schema.core.spec(s),params);
var temp__5751__auto__ = (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(s) : coercion_matcher.call(null,s));
if(cljs.core.truth_(temp__5751__auto__)){
var coercer = temp__5751__auto__;
return (function (x){
try{var v = (coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(x) : coercer.call(null,x));
if(schema.utils.error_QMARK_(v)){
return v;
} else {
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(v) : c.call(null,v));
}
}catch (e45773){if((e45773 instanceof Object)){
var t = e45773;
return schema.utils.error(schema.utils.make_ValidationError(s,x,(new cljs.core.Delay((function (){
return t;
}),null)),null));
} else {
throw e45773;

}
}});
} else {
return c;
}
});})(validate__42814__auto__,ufv___45818,output_schema45761_45819,input_schema45762_45820,input_checker45763_45821,output_checker45764_45822))
,true,schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__42814__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__45774_45832 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__45775_45833 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null));
var G__45776_45834 = output_schema45761_45819;
var G__45777_45835 = cljs.core.deref(output_checker45764_45822);
var G__45778_45836 = o__42817__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__45774_45832,G__45775_45833,G__45776_45834,G__45777_45835,G__45778_45836) : schema.core.fn_validator.call(null,G__45774_45832,G__45775_45833,G__45776_45834,G__45777_45835,G__45778_45836));
} else {
var temp__5753__auto___45837 = (function (){var fexpr__45779 = cljs.core.deref(output_checker45764_45822);
return (fexpr__45779.cljs$core$IFn$_invoke$arity$1 ? fexpr__45779.cljs$core$IFn$_invoke$arity$1(o__42817__auto__) : fexpr__45779.call(null,o__42817__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___45837)){
var error__42816__auto___45838 = temp__5753__auto___45837;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__42816__auto___45838], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema45761_45819,new cljs.core.Keyword(null,"value","value",305978217),o__42817__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__42816__auto___45838], null));
} else {
}
}
} else {
}

return o__42817__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.__GT_FnSchema(output_schema45761_45819,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema45762_45820], null)));

var ufv___45839 = schema.utils.use_fn_validation;
var output_schema45780_45840 = schema.core.Any;
var input_schema45781_45841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.coerce.CoercionMatcher,cljs.core.with_meta(new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)))], null);
var input_checker45782_45842 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema45781_45841);
}),null));
var output_checker45783_45843 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema45780_45840);
}),null));
var ret__44409__auto___45844 = /**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 *   Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw).
 */
schema.coerce.coercer_BANG_ = (function schema$coerce$coercer_BANG_(G__45784,G__45785){
var validate__42814__auto__ = cljs.core.deref(ufv___45839);
if(cljs.core.truth_(validate__42814__auto__)){
var args__42815__auto___45845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__45784,G__45785], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__45786_45846 = new cljs.core.Keyword(null,"input","input",556931961);
var G__45787_45847 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null));
var G__45788_45848 = input_schema45781_45841;
var G__45789_45849 = cljs.core.deref(input_checker45782_45842);
var G__45790_45850 = args__42815__auto___45845;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__45786_45846,G__45787_45847,G__45788_45848,G__45789_45849,G__45790_45850) : schema.core.fn_validator.call(null,G__45786_45846,G__45787_45847,G__45788_45848,G__45789_45849,G__45790_45850));
} else {
var temp__5753__auto___45851 = (function (){var fexpr__45791 = cljs.core.deref(input_checker45782_45842);
return (fexpr__45791.cljs$core$IFn$_invoke$arity$1 ? fexpr__45791.cljs$core$IFn$_invoke$arity$1(args__42815__auto___45845) : fexpr__45791.call(null,args__42815__auto___45845));
})();
if(cljs.core.truth_(temp__5753__auto___45851)){
var error__42816__auto___45852 = temp__5753__auto___45851;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__42816__auto___45852], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema45781_45841,new cljs.core.Keyword(null,"value","value",305978217),args__42815__auto___45845,new cljs.core.Keyword(null,"error","error",-978969032),error__42816__auto___45852], null));
} else {
}
}
} else {
}

var o__42817__auto__ = (function (){var schema__$1 = G__45784;
var coercion_matcher = G__45785;
while(true){
var c = schema.coerce.coercer(schema__$1,coercion_matcher);
return ((function (c,validate__42814__auto__,ufv___45839,output_schema45780_45840,input_schema45781_45841,input_checker45782_45842,output_checker45783_45843){
return (function (value){
var coerced = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
var temp__5753__auto___45854 = schema.utils.error_val(coerced);
if(cljs.core.truth_(temp__5753__auto___45854)){
var error_45855 = temp__5753__auto___45854;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value cannot be coerced to match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_45855], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_45855], null));
} else {
}

return coerced;
});
;})(c,validate__42814__auto__,ufv___45839,output_schema45780_45840,input_schema45781_45841,input_checker45782_45842,output_checker45783_45843))
break;
}
})();
if(cljs.core.truth_(validate__42814__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__45792_45856 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__45793_45857 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null));
var G__45794_45858 = output_schema45780_45840;
var G__45795_45859 = cljs.core.deref(output_checker45783_45843);
var G__45796_45860 = o__42817__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__45792_45856,G__45793_45857,G__45794_45858,G__45795_45859,G__45796_45860) : schema.core.fn_validator.call(null,G__45792_45856,G__45793_45857,G__45794_45858,G__45795_45859,G__45796_45860));
} else {
var temp__5753__auto___45861 = (function (){var fexpr__45797 = cljs.core.deref(output_checker45783_45843);
return (fexpr__45797.cljs$core$IFn$_invoke$arity$1 ? fexpr__45797.cljs$core$IFn$_invoke$arity$1(o__42817__auto__) : fexpr__45797.call(null,o__42817__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___45861)){
var error__42816__auto___45862 = temp__5753__auto___45861;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__42816__auto___45862], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema45780_45840,new cljs.core.Keyword(null,"value","value",305978217),o__42817__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__42816__auto___45862], null));
} else {
}
}
} else {
}

return o__42817__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer_BANG_),schema.core.__GT_FnSchema(output_schema45780_45840,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema45781_45841], null)));

var ufv___45863 = schema.utils.use_fn_validation;
var output_schema45799_45864 = schema.coerce.CoercionMatcher;
var input_schema45800_45865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),cljs.core.with_meta(new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)], null)))], null);
var input_checker45801_45866 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema45800_45865);
}),null));
var output_checker45802_45867 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema45799_45864);
}),null));
var ret__44409__auto___45868 = /**
 * Inputs: [matchers :- [CoercionMatcher]]
 *   Returns: CoercionMatcher
 * 
 *   A matcher that takes the first match from matchers.
 */
schema.coerce.first_matcher = (function schema$coerce$first_matcher(G__45803){
var validate__42814__auto__ = cljs.core.deref(ufv___45863);
if(cljs.core.truth_(validate__42814__auto__)){
var args__42815__auto___45869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__45803], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__45804_45870 = new cljs.core.Keyword(null,"input","input",556931961);
var G__45805_45871 = cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null));
var G__45806_45872 = input_schema45800_45865;
var G__45807_45873 = cljs.core.deref(input_checker45801_45866);
var G__45808_45874 = args__42815__auto___45869;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__45804_45870,G__45805_45871,G__45806_45872,G__45807_45873,G__45808_45874) : schema.core.fn_validator.call(null,G__45804_45870,G__45805_45871,G__45806_45872,G__45807_45873,G__45808_45874));
} else {
var temp__5753__auto___45875 = (function (){var fexpr__45809 = cljs.core.deref(input_checker45801_45866);
return (fexpr__45809.cljs$core$IFn$_invoke$arity$1 ? fexpr__45809.cljs$core$IFn$_invoke$arity$1(args__42815__auto___45869) : fexpr__45809.call(null,args__42815__auto___45869));
})();
if(cljs.core.truth_(temp__5753__auto___45875)){
var error__42816__auto___45876 = temp__5753__auto___45875;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__42816__auto___45876], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema45800_45865,new cljs.core.Keyword(null,"value","value",305978217),args__42815__auto___45869,new cljs.core.Keyword(null,"error","error",-978969032),error__42816__auto___45876], null));
} else {
}
}
} else {
}

var o__42817__auto__ = (function (){var matchers = G__45803;
while(true){
return ((function (validate__42814__auto__,ufv___45863,output_schema45799_45864,input_schema45800_45865,input_checker45801_45866,output_checker45802_45867){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__45798_SHARP_){
return (p1__45798_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45798_SHARP_.cljs$core$IFn$_invoke$arity$1(schema__$1) : p1__45798_SHARP_.call(null,schema__$1));
}),matchers));
});
;})(validate__42814__auto__,ufv___45863,output_schema45799_45864,input_schema45800_45865,input_checker45801_45866,output_checker45802_45867))
break;
}
})();
if(cljs.core.truth_(validate__42814__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__45810_45877 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__45811_45878 = cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null));
var G__45812_45879 = output_schema45799_45864;
var G__45813_45880 = cljs.core.deref(output_checker45802_45867);
var G__45814_45881 = o__42817__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__45810_45877,G__45811_45878,G__45812_45879,G__45813_45880,G__45814_45881) : schema.core.fn_validator.call(null,G__45810_45877,G__45811_45878,G__45812_45879,G__45813_45880,G__45814_45881));
} else {
var temp__5753__auto___45882 = (function (){var fexpr__45815 = cljs.core.deref(output_checker45802_45867);
return (fexpr__45815.cljs$core$IFn$_invoke$arity$1 ? fexpr__45815.cljs$core$IFn$_invoke$arity$1(o__42817__auto__) : fexpr__45815.call(null,o__42817__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___45882)){
var error__42816__auto___45883 = temp__5753__auto___45882;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__42816__auto___45883], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema45799_45864,new cljs.core.Keyword(null,"value","value",305978217),o__42817__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__42816__auto___45883], null));
} else {
}
}
} else {
}

return o__42817__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.__GT_FnSchema(output_schema45799_45864,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema45800_45865], null)));

schema.coerce.string__GT_keyword = (function schema$coerce$string__GT_keyword(s){
if(typeof s === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
} else {
return s;
}
});
/**
 * returns true for strings that are equal, ignoring case, to the string 'true'
 * (following java.lang.Boolean/parseBoolean semantics)
 */
schema.coerce.string__GT_boolean = (function schema$coerce$string__GT_boolean(s){
if(typeof s === 'string'){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",clojure.string.lower_case(s));
} else {
return s;
}
});
schema.coerce.keyword_enum_matcher = (function schema$coerce$keyword_enum_matcher(schema__$1){
if((((((schema__$1 instanceof schema.core.EnumSchema)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,schema__$1.vs)))) || ((((schema__$1 instanceof schema.core.EqSchema)) && ((schema__$1.v instanceof cljs.core.Keyword)))))){
return schema.coerce.string__GT_keyword;
} else {
return null;
}
});
schema.coerce.set_matcher = (function schema$coerce$set_matcher(schema__$1){
if((schema__$1 instanceof cljs.core.PersistentHashSet)){
return (function (x){
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.set(x);
} else {
return x;
}
});
} else {
return null;
}
});
/**
 * Take a single-arg function f, and return a single-arg function that acts as identity
 * if f throws an exception, and like f otherwise.  Useful because coercers are not explicitly
 * guarded for exceptions, and failing to coerce will generally produce a more useful error
 * in this case.
 */
schema.coerce.safe = (function schema$coerce$safe(f){
return (function (x){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}catch (e45816){if((e45816 instanceof Object)){
var e = e45816;
return x;
} else {
throw e45816;

}
}});
});
/**
 * Returns instance of UUID if input is a string.
 * Note: in CLJS, this does not guarantee a specific UUID string representation,
 *       similar to #uuid reader
 */
schema.coerce.string__GT_uuid = (function schema$coerce$string__GT_uuid(p1__45817_SHARP_){
if(typeof p1__45817_SHARP_ === 'string'){
return cljs.core.uuid(p1__45817_SHARP_);
} else {
return p1__45817_SHARP_;
}
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean,schema.core.Uuid,schema.coerce.string__GT_uuid])], 0));
/**
 * A matcher that coerces keywords and keyword eq/enums from strings, and longs and doubles
 *   from numbers on the JVM (without losing precision)
 */
schema.coerce.json_coercion_matcher = (function schema$coerce$json_coercion_matcher(schema__$1){
var or__4253__auto__ = (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,schema__$1));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = schema.coerce.keyword_enum_matcher(schema__$1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return schema.coerce.set_matcher(schema__$1);
}
}
});
/**
 * Reads one object from a string. Returns nil when string is nil or empty
 */
schema.coerce.edn_read_string = cljs.reader.read_string;
schema.coerce._PLUS_string_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.coerce._PLUS_json_coercions_PLUS_,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Num,schema.coerce.safe(schema.coerce.edn_read_string),schema.core.Int,schema.coerce.safe(schema.coerce.edn_read_string)])], 0));
/**
 * A matcher that coerces keywords, keyword eq/enums, s/Num and s/Int,
 *   and long and doubles (JVM only) from strings.
 */
schema.coerce.string_coercion_matcher = (function schema$coerce$string_coercion_matcher(schema__$1){
var or__4253__auto__ = (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,schema__$1));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = schema.coerce.keyword_enum_matcher(schema__$1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return schema.coerce.set_matcher(schema__$1);
}
}
});

//# sourceMappingURL=schema.coerce.js.map
