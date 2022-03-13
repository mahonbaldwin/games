goog.provide('maze_generator.maze');
maze_generator.maze.cell_index = (function maze_generator$maze$cell_index(p__48103,p__48104){
var map__48105 = p__48103;
var map__48105__$1 = cljs.core.__destructure_map(map__48105);
var cell = map__48105__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48105__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48105__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__48106 = p__48104;
var map__48106__$1 = cljs.core.__destructure_map(map__48106);
var maze = map__48106__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48106__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((y * width) + x);
});
maze_generator.maze.cell_for_ui = (function maze_generator$maze$cell_for_ui(x,y,opts){
var cells = cljs.core.set(opts);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"north","north",651323902),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"north","north",651323902)),new cljs.core.Keyword(null,"east","east",1189821678),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"east","east",1189821678)),new cljs.core.Keyword(null,"south","south",1586796293),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"south","south",1586796293)),new cljs.core.Keyword(null,"west","west",708776677),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"west","west",708776677)),new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"start","start",-355208981)),new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.contains_QMARK_(cells,new cljs.core.Keyword(null,"end","end",-268185958))], null);
});
maze_generator.maze.maze_neighbors = (function maze_generator$maze$maze_neighbors(p__48107,p__48108){
var map__48109 = p__48107;
var map__48109__$1 = cljs.core.__destructure_map(map__48109);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48109__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48109__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__48110 = p__48108;
var map__48110__$1 = cljs.core.__destructure_map(map__48110);
var maze = map__48110__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48110__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48110__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48110__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var surrounding_cells = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))], null),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1))], null),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y], null)], null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48111){
var vec__48112 = p__48111;
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48112,(0),null);
var cel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48112,(1),null);
var index = maze_generator.maze.cell_index(cel,maze);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"cell","cell",764245084),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells,index),new cljs.core.Keyword(null,"direction","direction",-633359395),dir], null);
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48115){
var vec__48116 = p__48115;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48116,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48116,(1),null);
var map__48119 = cell;
var map__48119__$1 = cljs.core.__destructure_map(map__48119);
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48119__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48119__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (((x__$1 < (0))) || ((((y__$1 < (0))) || ((((width <= x__$1)) || ((height <= y__$1)))))));
}),surrounding_cells)));
});
maze_generator.maze.random_neighbor = (function maze_generator$maze$random_neighbor(rng,p__48120,maze,unvisited_cells){
var map__48121 = p__48120;
var map__48121__$1 = cljs.core.__destructure_map(map__48121);
var cell = map__48121__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48121__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48121__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var new_x = (0);
return null;
});
maze_generator.maze.populate = (function maze_generator$maze$populate(height,width){
var iter__4652__auto__ = (function maze_generator$maze$populate_$_iter__48122(s__48123){
return (new cljs.core.LazySeq(null,(function (){
var s__48123__$1 = s__48123;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48123__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var h = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__48123__$1,h,xs__6308__auto__,temp__5753__auto__){
return (function maze_generator$maze$populate_$_iter__48122_$_iter__48124(s__48125){
return (new cljs.core.LazySeq(null,((function (s__48123__$1,h,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__48125__$1 = s__48125;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__48125__$1);
if(temp__5753__auto____$1){
var s__48125__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48125__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48125__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48127 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48126 = (0);
while(true){
if((i__48126 < size__4651__auto__)){
var w = cljs.core._nth(c__4650__auto__,i__48126);
cljs.core.chunk_append(b__48127,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"i","i",-1386841315),maze_generator.maze.cell_index(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),w,new cljs.core.Keyword(null,"y","y",-1757859776),h], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null)),new cljs.core.Keyword(null,"x","x",2099068185),w,new cljs.core.Keyword(null,"y","y",-1757859776),h,new cljs.core.Keyword(null,"connected-neighbors","connected-neighbors",-980124634),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"connected-directions","connected-directions",2094629913),cljs.core.PersistentHashSet.EMPTY], null));

var G__48154 = (i__48126 + (1));
i__48126 = G__48154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48127),maze_generator$maze$populate_$_iter__48122_$_iter__48124(cljs.core.chunk_rest(s__48125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48127),null);
}
} else {
var w = cljs.core.first(s__48125__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"i","i",-1386841315),maze_generator.maze.cell_index(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),w,new cljs.core.Keyword(null,"y","y",-1757859776),h], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null)),new cljs.core.Keyword(null,"x","x",2099068185),w,new cljs.core.Keyword(null,"y","y",-1757859776),h,new cljs.core.Keyword(null,"connected-neighbors","connected-neighbors",-980124634),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"connected-directions","connected-directions",2094629913),cljs.core.PersistentHashSet.EMPTY], null),maze_generator$maze$populate_$_iter__48122_$_iter__48124(cljs.core.rest(s__48125__$2)));
}
} else {
return null;
}
break;
}
});})(s__48123__$1,h,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__48123__$1,h,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,maze_generator$maze$populate_$_iter__48122(cljs.core.rest(s__48123__$1)));
} else {
var G__48155 = cljs.core.rest(s__48123__$1);
s__48123__$1 = G__48155;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height));
});
maze_generator.maze.rand_from_coll = (function maze_generator$maze$rand_from_coll(rng,coll){
var indx = maze_generator.random.random_int(cljs.core.count(coll),rng);
var vec__48128 = maze_generator.util.pop_i(coll,indx);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128,(0),null);
var coll__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,coll__$1], null);
});
maze_generator.maze.direction_compliment = (function maze_generator$maze$direction_compliment(direction){
var pred__48131 = cljs.core._EQ_;
var expr__48132 = direction;
if(cljs.core.truth_((pred__48131.cljs$core$IFn$_invoke$arity$2 ? pred__48131.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"north","north",651323902),expr__48132) : pred__48131.call(null,new cljs.core.Keyword(null,"north","north",651323902),expr__48132)))){
return new cljs.core.Keyword(null,"south","south",1586796293);
} else {
if(cljs.core.truth_((pred__48131.cljs$core$IFn$_invoke$arity$2 ? pred__48131.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"south","south",1586796293),expr__48132) : pred__48131.call(null,new cljs.core.Keyword(null,"south","south",1586796293),expr__48132)))){
return new cljs.core.Keyword(null,"north","north",651323902);
} else {
if(cljs.core.truth_((pred__48131.cljs$core$IFn$_invoke$arity$2 ? pred__48131.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"east","east",1189821678),expr__48132) : pred__48131.call(null,new cljs.core.Keyword(null,"east","east",1189821678),expr__48132)))){
return new cljs.core.Keyword(null,"west","west",708776677);
} else {
if(cljs.core.truth_((pred__48131.cljs$core$IFn$_invoke$arity$2 ? pred__48131.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"west","west",708776677),expr__48132) : pred__48131.call(null,new cljs.core.Keyword(null,"west","west",708776677),expr__48132)))){
return new cljs.core.Keyword(null,"east","east",1189821678);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__48132)].join('')));
}
}
}
}
});
maze_generator.maze.dead_end = (function maze_generator$maze$dead_end(maze){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"we've-come-to-a-dead-end","we've-come-to-a-dead-end",-1569744385)], 0));

return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(maze);
});
maze_generator.maze.retry_cell = (function maze_generator$maze$retry_cell(rng,path,maze){
var $ = path;
var $__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48134_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"revisited","revisited",-474682004).cljs$core$IFn$_invoke$arity$1(p1__48134_SHARP_));
}),$);
return maze_generator.random.random_nth($__$1,rng);
});
maze_generator.maze.cell_in_maze_QMARK_ = (function maze_generator$maze$cell_in_maze_QMARK_(p__48135){
var map__48136 = p__48135;
var map__48136__$1 = cljs.core.__destructure_map(map__48136);
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48136__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var or__4253__auto__ = new cljs.core.Keyword(null,"initial-cell?","initial-cell?",184441089).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((0) < cljs.core.count(new cljs.core.Keyword(null,"connected-neighbors","connected-neighbors",-980124634).cljs$core$IFn$_invoke$arity$1(cell)));
}
});
maze_generator.maze.mark_neighbors = (function maze_generator$maze$mark_neighbors(maze,from_index,to_index,direction){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(maze,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),from_index,new cljs.core.Keyword(null,"connected-neighbors","connected-neighbors",-980124634)], null),cljs.core.conj,to_index),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),from_index,new cljs.core.Keyword(null,"connected-directions","connected-directions",2094629913)], null),cljs.core.conj,direction),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),to_index,new cljs.core.Keyword(null,"connected-neighbors","connected-neighbors",-980124634)], null),cljs.core.conj,from_index),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),to_index,new cljs.core.Keyword(null,"connected-directions","connected-directions",2094629913)], null),cljs.core.conj,maze_generator.maze.direction_compliment(direction));
});
maze_generator.maze.path_gen = (function maze_generator$maze$path_gen(rng,selected_index,path_indexes,maze,unvisited_cells){
while(true){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-index","selected-index",1735686526),selected_index], 0));

var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(maze),selected_index);
var eligible_neighbors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (rng,selected_index,path_indexes,maze,unvisited_cells,cell){
return (function (c){
return cljs.core.not(cljs.core.some(path_indexes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)], null)));
});})(rng,selected_index,path_indexes,maze,unvisited_cells,cell))
,maze_generator.maze.maze_neighbors(cell,maze));
var map__48140 = maze_generator.random.random_nth(eligible_neighbors,rng);
var map__48140__$1 = cljs.core.__destructure_map(map__48140);
var new_cell = map__48140__$1;
var new_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48140__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-cell","new-cell",653309195),new_cell,maze_generator.maze.cell_in_maze_QMARK_(new_cell)], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(eligible_neighbors))){
var maze__$1 = cljs.core.assoc_in(maze,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),selected_index,new cljs.core.Keyword(null,"revisited?","revisited?",1802146387)], null),true);
var retry_c = maze_generator.maze.retry_cell(rng,path_indexes,maze__$1);
var G__48156 = rng;
var G__48157 = retry_c;
var G__48158 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_indexes,new_index);
var G__48159 = maze__$1;
var G__48160 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (rng,selected_index,path_indexes,maze,unvisited_cells,maze__$1,retry_c,cell,eligible_neighbors,map__48140,map__48140__$1,new_cell,new_index){
return (function (p1__48137_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_index,p1__48137_SHARP_);
});})(rng,selected_index,path_indexes,maze,unvisited_cells,maze__$1,retry_c,cell,eligible_neighbors,map__48140,map__48140__$1,new_cell,new_index))
,unvisited_cells);
rng = G__48156;
selected_index = G__48157;
path_indexes = G__48158;
maze = G__48159;
unvisited_cells = G__48160;
continue;
} else {
if(cljs.core.truth_(maze_generator.maze.cell_in_maze_QMARK_(new_cell))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_generator.maze.mark_neighbors(maze,selected_index,new_index,new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(new_cell)),unvisited_cells], null);
} else {
var new_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_indexes,new_index);
var new_maze = maze_generator.maze.mark_neighbors(maze,selected_index,new_index,new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(new_cell));
var unvisited_cells__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (rng,selected_index,path_indexes,maze,unvisited_cells,new_path,new_maze,cell,eligible_neighbors,map__48140,map__48140__$1,new_cell,new_index){
return (function (p1__48138_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_index,p1__48138_SHARP_);
});})(rng,selected_index,path_indexes,maze,unvisited_cells,new_path,new_maze,cell,eligible_neighbors,map__48140,map__48140__$1,new_cell,new_index))
,unvisited_cells);
var G__48161 = rng;
var G__48162 = new_index;
var G__48163 = new_path;
var G__48164 = new_maze;
var G__48165 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (rng,selected_index,path_indexes,maze,unvisited_cells,new_path,new_maze,unvisited_cells__$1,cell,eligible_neighbors,map__48140,map__48140__$1,new_cell,new_index){
return (function (p1__48139_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_index,p1__48139_SHARP_);
});})(rng,selected_index,path_indexes,maze,unvisited_cells,new_path,new_maze,unvisited_cells__$1,cell,eligible_neighbors,map__48140,map__48140__$1,new_cell,new_index))
,unvisited_cells__$1);
rng = G__48161;
selected_index = G__48162;
path_indexes = G__48163;
maze = G__48164;
unvisited_cells = G__48165;
continue;

}
}
break;
}
});
maze_generator.maze.maze_gen = (function maze_generator$maze$maze_gen(rng,current_maze,unvisited_indexes){
while(true){
var vec__48141 = maze_generator.maze.rand_from_coll(rng,unvisited_indexes);
var new_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48141,(0),null);
var unvisited_indexes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48141,(1),null);
var vec__48144 = maze_generator.maze.path_gen(rng,new_index,cljs.core.PersistentHashSet.createAsIfByAssoc([new_index]),current_maze,unvisited_indexes__$1);
var maze = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48144,(0),null);
var unvisited_indexes__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48144,(1),null);
if(cljs.core.empty_QMARK_(unvisited_indexes__$2)){
return maze;
} else {
var G__48166 = rng;
var G__48167 = maze;
var G__48168 = unvisited_indexes__$2;
rng = G__48166;
current_maze = G__48167;
unvisited_indexes = G__48168;
continue;
}
break;
}
});
maze_generator.maze.generate = (function maze_generator$maze$generate(p__48147){
var map__48148 = p__48147;
var map__48148__$1 = cljs.core.__destructure_map(map__48148);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48148__$1,new cljs.core.Keyword(null,"height","height",1025178622),(10));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48148__$1,new cljs.core.Keyword(null,"width","width",-384071477),(10));
var start_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48148__$1,new cljs.core.Keyword(null,"start-cell","start-cell",-1071536921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"left","left",-399115937)], null));
var end_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48148__$1,new cljs.core.Keyword(null,"end-cell","end-cell",-170838368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"right","right",-452581833)], null));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48148__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var rng = maze_generator.random.rng((function (){var or__4253__auto__ = seed;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.rand_int((1000000000));
}
})());
var cells = cljs.core.vec(maze_generator.maze.populate(height,width));
var vec__48149 = maze_generator.maze.rand_from_coll(rng,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cells)));
var starting_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(0),null);
var unvisited_indexes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(1),null);
var cells__$1 = cljs.core.assoc_in(cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starting_index,new cljs.core.Keyword(null,"initial-cell?","initial-cell?",184441089)], null),true);
var initial_maze = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"starting-index","starting-index",-1473756639),starting_index,new cljs.core.Keyword(null,"cells","cells",-985166822),cells__$1], null);
var m = maze_generator.maze.maze_gen(rng,initial_maze,unvisited_indexes);
var new_cells = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48152){
var map__48153 = p__48152;
var map__48153__$1 = cljs.core.__destructure_map(map__48153);
var cell = map__48153__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48153__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48153__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var connected_directions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48153__$1,new cljs.core.Keyword(null,"connected-directions","connected-directions",2094629913));
var borders = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),null,new cljs.core.Keyword(null,"south","south",1586796293),null,new cljs.core.Keyword(null,"east","east",1189821678),null,new cljs.core.Keyword(null,"north","north",651323902),null], null), null),connected_directions);
var borders__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(borders,new cljs.core.Keyword(null,"start","start",-355208981)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(width - (1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(height - (1))))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(borders,new cljs.core.Keyword(null,"end","end",-268185958)):borders
));
return maze_generator.maze.cell_for_ui(x,y,borders__$1);
}),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(m));
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"cells","cells",-985166822),new_cells);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(m__$1);

return m__$1;
});

//# sourceMappingURL=maze_generator.maze.js.map
