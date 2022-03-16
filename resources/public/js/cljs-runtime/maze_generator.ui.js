goog.provide('maze_generator.ui');
if((typeof maze_generator !== 'undefined') && (typeof maze_generator.ui !== 'undefined') && (typeof maze_generator.ui.page !== 'undefined')){
} else {
maze_generator.ui.page = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"home","home",-74557309)], null));
}
maze_generator.ui.compute_class_name = (function maze_generator$ui$compute_class_name(cell){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,cljs.core.last),cljs.core.select_keys(cell,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null)))));
});
maze_generator.ui.display_maze = rum.core.lazy_build(rum.core.build_defc,(function (p__45812){
var map__45813 = p__45812;
var map__45813__$1 = cljs.core.__destructure_map(map__45813);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45813__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45813__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45813__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var cells__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"x","x",2099068185)),cells);
return daiquiri.core.create_element("div",{'className':"maze rectangle"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function maze_generator$ui$iter__45814(s__45815){
return (new cljs.core.LazySeq(null,(function (){
var s__45815__$1 = s__45815;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45815__$1);
if(temp__5753__auto__){
var s__45815__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45815__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45815__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45817 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45816 = (0);
while(true){
if((i__45816 < size__4651__auto__)){
var y = cljs.core._nth(c__4650__auto__,i__45816);
cljs.core.chunk_append(b__45817,daiquiri.core.create_element("div",{'className':"row"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (i__45816,y,c__4650__auto__,size__4651__auto__,b__45817,s__45815__$2,temp__5753__auto__,cells__$1,map__45813,map__45813__$1,height,width,cells){
return (function maze_generator$ui$iter__45814_$_iter__45818(s__45819){
return (new cljs.core.LazySeq(null,((function (i__45816,y,c__4650__auto__,size__4651__auto__,b__45817,s__45815__$2,temp__5753__auto__,cells__$1,map__45813,map__45813__$1,height,width,cells){
return (function (){
var s__45819__$1 = s__45819;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__45819__$1);
if(temp__5753__auto____$1){
var s__45819__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45819__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__45819__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__45821 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__45820 = (0);
while(true){
if((i__45820 < size__4651__auto____$1)){
var x = cljs.core._nth(c__4650__auto____$1,i__45820);
cljs.core.chunk_append(b__45821,(function (){var i = ((y * width) + x);
return daiquiri.core.create_element("span",{'data-test':["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell",maze_generator.ui.compute_class_name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells__$1,i))], null))},[]);
})());

var G__45841 = (i__45820 + (1));
i__45820 = G__45841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45821),maze_generator$ui$iter__45814_$_iter__45818(cljs.core.chunk_rest(s__45819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45821),null);
}
} else {
var x = cljs.core.first(s__45819__$2);
return cljs.core.cons((function (){var i = ((y * width) + x);
return daiquiri.core.create_element("span",{'data-test':["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell",maze_generator.ui.compute_class_name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells__$1,i))], null))},[]);
})(),maze_generator$ui$iter__45814_$_iter__45818(cljs.core.rest(s__45819__$2)));
}
} else {
return null;
}
break;
}
});})(i__45816,y,c__4650__auto__,size__4651__auto__,b__45817,s__45815__$2,temp__5753__auto__,cells__$1,map__45813,map__45813__$1,height,width,cells))
,null,null));
});})(i__45816,y,c__4650__auto__,size__4651__auto__,b__45817,s__45815__$2,temp__5753__auto__,cells__$1,map__45813,map__45813__$1,height,width,cells))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width));
})())]));

var G__45842 = (i__45816 + (1));
i__45816 = G__45842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45817),maze_generator$ui$iter__45814(cljs.core.chunk_rest(s__45815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45817),null);
}
} else {
var y = cljs.core.first(s__45815__$2);
return cljs.core.cons(daiquiri.core.create_element("div",{'className':"row"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (y,s__45815__$2,temp__5753__auto__,cells__$1,map__45813,map__45813__$1,height,width,cells){
return (function maze_generator$ui$iter__45814_$_iter__45832(s__45833){
return (new cljs.core.LazySeq(null,(function (){
var s__45833__$1 = s__45833;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__45833__$1);
if(temp__5753__auto____$1){
var s__45833__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45833__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45833__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45835 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45834 = (0);
while(true){
if((i__45834 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__45834);
cljs.core.chunk_append(b__45835,(function (){var i = ((y * width) + x);
return daiquiri.core.create_element("span",{'data-test':["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell",maze_generator.ui.compute_class_name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells__$1,i))], null))},[]);
})());

var G__45843 = (i__45834 + (1));
i__45834 = G__45843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45835),maze_generator$ui$iter__45814_$_iter__45832(cljs.core.chunk_rest(s__45833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45835),null);
}
} else {
var x = cljs.core.first(s__45833__$2);
return cljs.core.cons((function (){var i = ((y * width) + x);
return daiquiri.core.create_element("span",{'data-test':["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell",maze_generator.ui.compute_class_name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells__$1,i))], null))},[]);
})(),maze_generator$ui$iter__45814_$_iter__45832(cljs.core.rest(s__45833__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(y,s__45815__$2,temp__5753__auto__,cells__$1,map__45813,map__45813__$1,height,width,cells))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width));
})())]),maze_generator$ui$iter__45814(cljs.core.rest(s__45815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height));
})())]);
}),null,"maze-generator.ui/display-maze");
maze_generator.ui.root = rum.core.lazy_build(rum.core.build_defc,(function (){
var seed = (98293889112244);
var r = maze_generator.random.rng(seed);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("h1",null,["A-maze-ing"]),daiquiri.core.create_element("div",null,[maze_generator.ui.display_maze(maze_generator.maze.generate(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"seed","seed",68613327),seed,new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"width","width",-384071477),(80)], null)))])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"maze-generator.ui/root");
maze_generator.ui.start = (function maze_generator$ui$start(){
return rum.core.mount(maze_generator.ui.root(),document.getElementById("app"));
});
goog.exportSymbol('maze_generator.ui.start', maze_generator.ui.start);

//# sourceMappingURL=maze_generator.ui.js.map
