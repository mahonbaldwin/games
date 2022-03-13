goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50330){
var map__50331 = p__50330;
var map__50331__$1 = cljs.core.__destructure_map(map__50331);
var m = map__50331__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50331__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50331__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50336_50701 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50337_50702 = null;
var count__50338_50703 = (0);
var i__50339_50704 = (0);
while(true){
if((i__50339_50704 < count__50338_50703)){
var f_50706 = chunk__50337_50702.cljs$core$IIndexed$_nth$arity$2(null,i__50339_50704);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50706], 0));


var G__50707 = seq__50336_50701;
var G__50708 = chunk__50337_50702;
var G__50709 = count__50338_50703;
var G__50710 = (i__50339_50704 + (1));
seq__50336_50701 = G__50707;
chunk__50337_50702 = G__50708;
count__50338_50703 = G__50709;
i__50339_50704 = G__50710;
continue;
} else {
var temp__5753__auto___50711 = cljs.core.seq(seq__50336_50701);
if(temp__5753__auto___50711){
var seq__50336_50712__$1 = temp__5753__auto___50711;
if(cljs.core.chunked_seq_QMARK_(seq__50336_50712__$1)){
var c__4679__auto___50713 = cljs.core.chunk_first(seq__50336_50712__$1);
var G__50714 = cljs.core.chunk_rest(seq__50336_50712__$1);
var G__50715 = c__4679__auto___50713;
var G__50716 = cljs.core.count(c__4679__auto___50713);
var G__50717 = (0);
seq__50336_50701 = G__50714;
chunk__50337_50702 = G__50715;
count__50338_50703 = G__50716;
i__50339_50704 = G__50717;
continue;
} else {
var f_50719 = cljs.core.first(seq__50336_50712__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50719], 0));


var G__50721 = cljs.core.next(seq__50336_50712__$1);
var G__50722 = null;
var G__50723 = (0);
var G__50724 = (0);
seq__50336_50701 = G__50721;
chunk__50337_50702 = G__50722;
count__50338_50703 = G__50723;
i__50339_50704 = G__50724;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50725 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50725], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50725)))?cljs.core.second(arglists_50725):arglists_50725)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50356_50730 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50357_50731 = null;
var count__50358_50732 = (0);
var i__50359_50733 = (0);
while(true){
if((i__50359_50733 < count__50358_50732)){
var vec__50381_50735 = chunk__50357_50731.cljs$core$IIndexed$_nth$arity$2(null,i__50359_50733);
var name_50736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50381_50735,(0),null);
var map__50384_50737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50381_50735,(1),null);
var map__50384_50738__$1 = cljs.core.__destructure_map(map__50384_50737);
var doc_50739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384_50738__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384_50738__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50736], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50740], 0));

if(cljs.core.truth_(doc_50739)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50739], 0));
} else {
}


var G__50743 = seq__50356_50730;
var G__50744 = chunk__50357_50731;
var G__50745 = count__50358_50732;
var G__50746 = (i__50359_50733 + (1));
seq__50356_50730 = G__50743;
chunk__50357_50731 = G__50744;
count__50358_50732 = G__50745;
i__50359_50733 = G__50746;
continue;
} else {
var temp__5753__auto___50747 = cljs.core.seq(seq__50356_50730);
if(temp__5753__auto___50747){
var seq__50356_50748__$1 = temp__5753__auto___50747;
if(cljs.core.chunked_seq_QMARK_(seq__50356_50748__$1)){
var c__4679__auto___50750 = cljs.core.chunk_first(seq__50356_50748__$1);
var G__50751 = cljs.core.chunk_rest(seq__50356_50748__$1);
var G__50752 = c__4679__auto___50750;
var G__50753 = cljs.core.count(c__4679__auto___50750);
var G__50754 = (0);
seq__50356_50730 = G__50751;
chunk__50357_50731 = G__50752;
count__50358_50732 = G__50753;
i__50359_50733 = G__50754;
continue;
} else {
var vec__50395_50755 = cljs.core.first(seq__50356_50748__$1);
var name_50756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50395_50755,(0),null);
var map__50398_50757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50395_50755,(1),null);
var map__50398_50758__$1 = cljs.core.__destructure_map(map__50398_50757);
var doc_50759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50398_50758__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50398_50758__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50756], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50760], 0));

if(cljs.core.truth_(doc_50759)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50759], 0));
} else {
}


var G__50766 = cljs.core.next(seq__50356_50748__$1);
var G__50767 = null;
var G__50768 = (0);
var G__50769 = (0);
seq__50356_50730 = G__50766;
chunk__50357_50731 = G__50767;
count__50358_50732 = G__50768;
i__50359_50733 = G__50769;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50412 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50413 = null;
var count__50414 = (0);
var i__50415 = (0);
while(true){
if((i__50415 < count__50414)){
var role = chunk__50413.cljs$core$IIndexed$_nth$arity$2(null,i__50415);
var temp__5753__auto___50770__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50770__$1)){
var spec_50771 = temp__5753__auto___50770__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50771)], 0));
} else {
}


var G__50772 = seq__50412;
var G__50773 = chunk__50413;
var G__50774 = count__50414;
var G__50775 = (i__50415 + (1));
seq__50412 = G__50772;
chunk__50413 = G__50773;
count__50414 = G__50774;
i__50415 = G__50775;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__50412);
if(temp__5753__auto____$1){
var seq__50412__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50412__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50412__$1);
var G__50776 = cljs.core.chunk_rest(seq__50412__$1);
var G__50777 = c__4679__auto__;
var G__50778 = cljs.core.count(c__4679__auto__);
var G__50779 = (0);
seq__50412 = G__50776;
chunk__50413 = G__50777;
count__50414 = G__50778;
i__50415 = G__50779;
continue;
} else {
var role = cljs.core.first(seq__50412__$1);
var temp__5753__auto___50780__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50780__$2)){
var spec_50781 = temp__5753__auto___50780__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50781)], 0));
} else {
}


var G__50782 = cljs.core.next(seq__50412__$1);
var G__50783 = null;
var G__50784 = (0);
var G__50785 = (0);
seq__50412 = G__50782;
chunk__50413 = G__50783;
count__50414 = G__50784;
i__50415 = G__50785;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50786 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50787 = cljs.core.ex_cause(t);
via = G__50786;
t = G__50787;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50565 = datafied_throwable;
var map__50565__$1 = cljs.core.__destructure_map(map__50565);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50565__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50565__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50565__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50566 = cljs.core.last(via);
var map__50566__$1 = cljs.core.__destructure_map(map__50566);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50566__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50566__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50566__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50567 = data;
var map__50567__$1 = cljs.core.__destructure_map(map__50567);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50567__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50567__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50567__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50568 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50568__$1 = cljs.core.__destructure_map(map__50568);
var top_data = map__50568__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50570 = phase;
var G__50570__$1 = (((G__50570 instanceof cljs.core.Keyword))?G__50570.fqn:null);
switch (G__50570__$1) {
case "read-source":
var map__50573 = data;
var map__50573__$1 = cljs.core.__destructure_map(map__50573);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50573__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50573__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50574 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50574__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50574,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50574);
var G__50574__$2 = (cljs.core.truth_((function (){var fexpr__50578 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50578.cljs$core$IFn$_invoke$arity$1 ? fexpr__50578.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50578.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50574__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50574__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50574__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50574__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50580 = top_data;
var G__50580__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50580,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50580);
var G__50580__$2 = (cljs.core.truth_((function (){var fexpr__50583 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50583.cljs$core$IFn$_invoke$arity$1 ? fexpr__50583.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50583.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50580__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50580__$1);
var G__50580__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50580__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50580__$2);
var G__50580__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50580__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50580__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50580__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50580__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50586 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50586,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50586,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50586,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50586,(3),null);
var G__50589 = top_data;
var G__50589__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50589,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50589);
var G__50589__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50589__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50589__$1);
var G__50589__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50589__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50589__$2);
var G__50589__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50589__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50589__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50589__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50589__$4;
}

break;
case "execution":
var vec__50593 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50593,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50593,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50593,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50593,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50556_SHARP_){
var or__4253__auto__ = (p1__50556_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__50596 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50596.cljs$core$IFn$_invoke$arity$1 ? fexpr__50596.cljs$core$IFn$_invoke$arity$1(p1__50556_SHARP_) : fexpr__50596.call(null,p1__50556_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__50598 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50598__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50598,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50598);
var G__50598__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50598__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50598__$1);
var G__50598__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50598__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50598__$2);
var G__50598__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50598__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50598__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50598__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50598__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50570__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50616){
var map__50617 = p__50616;
var map__50617__$1 = cljs.core.__destructure_map(map__50617);
var triage_data = map__50617__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50627 = phase;
var G__50627__$1 = (((G__50627 instanceof cljs.core.Keyword))?G__50627.fqn:null);
switch (G__50627__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50630 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50631 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50632 = loc;
var G__50633 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50639_50821 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50640_50822 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50641_50823 = true;
var _STAR_print_fn_STAR__temp_val__50642_50824 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50641_50823);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50642_50824);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50612_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50612_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50640_50822);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50639_50821);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50630,G__50631,G__50632,G__50633) : format.call(null,G__50630,G__50631,G__50632,G__50633));

break;
case "macroexpansion":
var G__50645 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50646 = cause_type;
var G__50647 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50648 = loc;
var G__50649 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50645,G__50646,G__50647,G__50648,G__50649) : format.call(null,G__50645,G__50646,G__50647,G__50648,G__50649));

break;
case "compile-syntax-check":
var G__50652 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50653 = cause_type;
var G__50654 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50655 = loc;
var G__50656 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50652,G__50653,G__50654,G__50655,G__50656) : format.call(null,G__50652,G__50653,G__50654,G__50655,G__50656));

break;
case "compilation":
var G__50658 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50659 = cause_type;
var G__50660 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50661 = loc;
var G__50662 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50658,G__50659,G__50660,G__50661,G__50662) : format.call(null,G__50658,G__50659,G__50660,G__50661,G__50662));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50664 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50665 = symbol;
var G__50666 = loc;
var G__50667 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50672_50835 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50673_50836 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50674_50837 = true;
var _STAR_print_fn_STAR__temp_val__50675_50838 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50674_50837);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50675_50838);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50613_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50613_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50673_50836);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50672_50835);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50664,G__50665,G__50666,G__50667) : format.call(null,G__50664,G__50665,G__50666,G__50667));
} else {
var G__50681 = "Execution error%s at %s(%s).\n%s\n";
var G__50682 = cause_type;
var G__50683 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50684 = loc;
var G__50685 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50681,G__50682,G__50683,G__50684,G__50685) : format.call(null,G__50681,G__50682,G__50683,G__50684,G__50685));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50627__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
