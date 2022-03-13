goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47708 = arguments.length;
switch (G__47708) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47712 = (function (f,blockable,meta47713){
this.f = f;
this.blockable = blockable;
this.meta47713 = meta47713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47714,meta47713__$1){
var self__ = this;
var _47714__$1 = this;
return (new cljs.core.async.t_cljs$core$async47712(self__.f,self__.blockable,meta47713__$1));
}));

(cljs.core.async.t_cljs$core$async47712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47714){
var self__ = this;
var _47714__$1 = this;
return self__.meta47713;
}));

(cljs.core.async.t_cljs$core$async47712.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47713","meta47713",1574035420,null)], null);
}));

(cljs.core.async.t_cljs$core$async47712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47712");

(cljs.core.async.t_cljs$core$async47712.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47712.
 */
cljs.core.async.__GT_t_cljs$core$async47712 = (function cljs$core$async$__GT_t_cljs$core$async47712(f__$1,blockable__$1,meta47713){
return (new cljs.core.async.t_cljs$core$async47712(f__$1,blockable__$1,meta47713));
});

}

return (new cljs.core.async.t_cljs$core$async47712(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47733 = arguments.length;
switch (G__47733) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47741 = arguments.length;
switch (G__47741) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47746 = arguments.length;
switch (G__47746) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_49935 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49935) : fn1.call(null,val_49935));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49935) : fn1.call(null,val_49935));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47759 = arguments.length;
switch (G__47759) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___49951 = n;
var x_49952 = (0);
while(true){
if((x_49952 < n__4741__auto___49951)){
(a[x_49952] = x_49952);

var G__49953 = (x_49952 + (1));
x_49952 = G__49953;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47764 = (function (flag,meta47765){
this.flag = flag;
this.meta47765 = meta47765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47766,meta47765__$1){
var self__ = this;
var _47766__$1 = this;
return (new cljs.core.async.t_cljs$core$async47764(self__.flag,meta47765__$1));
}));

(cljs.core.async.t_cljs$core$async47764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47766){
var self__ = this;
var _47766__$1 = this;
return self__.meta47765;
}));

(cljs.core.async.t_cljs$core$async47764.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47764.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47765","meta47765",-1192926086,null)], null);
}));

(cljs.core.async.t_cljs$core$async47764.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47764");

(cljs.core.async.t_cljs$core$async47764.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47764");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47764.
 */
cljs.core.async.__GT_t_cljs$core$async47764 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47764(flag__$1,meta47765){
return (new cljs.core.async.t_cljs$core$async47764(flag__$1,meta47765));
});

}

return (new cljs.core.async.t_cljs$core$async47764(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47779 = (function (flag,cb,meta47780){
this.flag = flag;
this.cb = cb;
this.meta47780 = meta47780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47781,meta47780__$1){
var self__ = this;
var _47781__$1 = this;
return (new cljs.core.async.t_cljs$core$async47779(self__.flag,self__.cb,meta47780__$1));
}));

(cljs.core.async.t_cljs$core$async47779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47781){
var self__ = this;
var _47781__$1 = this;
return self__.meta47780;
}));

(cljs.core.async.t_cljs$core$async47779.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47780","meta47780",-1976868596,null)], null);
}));

(cljs.core.async.t_cljs$core$async47779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47779");

(cljs.core.async.t_cljs$core$async47779.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47779.
 */
cljs.core.async.__GT_t_cljs$core$async47779 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47779(flag__$1,cb__$1,meta47780){
return (new cljs.core.async.t_cljs$core$async47779(flag__$1,cb__$1,meta47780));
});

}

return (new cljs.core.async.t_cljs$core$async47779(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47784_SHARP_){
var G__47788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47784_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47788) : fret.call(null,G__47788));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47786_SHARP_){
var G__47791 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47786_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47791) : fret.call(null,G__47791));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49966 = (i + (1));
i = G__49966;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49967 = arguments.length;
var i__4865__auto___49968 = (0);
while(true){
if((i__4865__auto___49968 < len__4864__auto___49967)){
args__4870__auto__.push((arguments[i__4865__auto___49968]));

var G__49969 = (i__4865__auto___49968 + (1));
i__4865__auto___49968 = G__49969;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47817){
var map__47818 = p__47817;
var map__47818__$1 = cljs.core.__destructure_map(map__47818);
var opts = map__47818__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47813){
var G__47814 = cljs.core.first(seq47813);
var seq47813__$1 = cljs.core.next(seq47813);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47814,seq47813__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47822 = arguments.length;
switch (G__47822) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47647__auto___49971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_47874){
var state_val_47875 = (state_47874[(1)]);
if((state_val_47875 === (7))){
var inst_47869 = (state_47874[(2)]);
var state_47874__$1 = state_47874;
var statearr_47879_49972 = state_47874__$1;
(statearr_47879_49972[(2)] = inst_47869);

(statearr_47879_49972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47875 === (1))){
var state_47874__$1 = state_47874;
var statearr_47880_49973 = state_47874__$1;
(statearr_47880_49973[(2)] = null);

(statearr_47880_49973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47875 === (4))){
var inst_47850 = (state_47874[(7)]);
var inst_47850__$1 = (state_47874[(2)]);
var inst_47852 = (inst_47850__$1 == null);
var state_47874__$1 = (function (){var statearr_47881 = state_47874;
(statearr_47881[(7)] = inst_47850__$1);

return statearr_47881;
})();
if(cljs.core.truth_(inst_47852)){
var statearr_47882_49974 = state_47874__$1;
(statearr_47882_49974[(1)] = (5));

} else {
var statearr_47883_49975 = state_47874__$1;
(statearr_47883_49975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47875 === (13))){
var state_47874__$1 = state_47874;
var statearr_47885_49976 = state_47874__$1;
(statearr_47885_49976[(2)] = null);

(statearr_47885_49976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47875 === (6))){
var inst_47850 = (state_47874[(7)]);
var state_47874__$1 = state_47874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47874__$1,(11),to,inst_47850);
} else {
if((state_val_47875 === (3))){
var inst_47871 = (state_47874[(2)]);
var state_47874__$1 = state_47874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47874__$1,inst_47871);
} else {
if((state_val_47875 === (12))){
var state_47874__$1 = state_47874;
var statearr_47886_49977 = state_47874__$1;
(statearr_47886_49977[(2)] = null);

(statearr_47886_49977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47875 === (2))){
var state_47874__$1 = state_47874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47874__$1,(4),from);
} else {
if((state_val_47875 === (11))){
var inst_47862 = (state_47874[(2)]);
var state_47874__$1 = state_47874;
if(cljs.core.truth_(inst_47862)){
var statearr_47887_49978 = state_47874__$1;
(statearr_47887_49978[(1)] = (12));

} else {
var statearr_47889_49979 = state_47874__$1;
(statearr_47889_49979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47875 === (9))){
var state_47874__$1 = state_47874;
var statearr_47890_49980 = state_47874__$1;
(statearr_47890_49980[(2)] = null);

(statearr_47890_49980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47875 === (5))){
var state_47874__$1 = state_47874;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47891_49981 = state_47874__$1;
(statearr_47891_49981[(1)] = (8));

} else {
var statearr_47892_49982 = state_47874__$1;
(statearr_47892_49982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47875 === (14))){
var inst_47867 = (state_47874[(2)]);
var state_47874__$1 = state_47874;
var statearr_47893_49983 = state_47874__$1;
(statearr_47893_49983[(2)] = inst_47867);

(statearr_47893_49983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47875 === (10))){
var inst_47859 = (state_47874[(2)]);
var state_47874__$1 = state_47874;
var statearr_47894_49984 = state_47874__$1;
(statearr_47894_49984[(2)] = inst_47859);

(statearr_47894_49984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47875 === (8))){
var inst_47855 = cljs.core.async.close_BANG_(to);
var state_47874__$1 = state_47874;
var statearr_47895_49985 = state_47874__$1;
(statearr_47895_49985[(2)] = inst_47855);

(statearr_47895_49985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_47897 = [null,null,null,null,null,null,null,null];
(statearr_47897[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_47897[(1)] = (1));

return statearr_47897;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_47874){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_47874);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e47898){var ex__47194__auto__ = e47898;
var statearr_47899_49986 = state_47874;
(statearr_47899_49986[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_47874[(4)]))){
var statearr_47900_49987 = state_47874;
(statearr_47900_49987[(1)] = cljs.core.first((state_47874[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49988 = state_47874;
state_47874 = G__49988;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_47874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_47874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_47901 = f__47648__auto__();
(statearr_47901[(6)] = c__47647__auto___49971);

return statearr_47901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47903){
var vec__47904 = p__47903;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47904,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47904,(1),null);
var job = vec__47904;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47647__auto___49991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_47912){
var state_val_47913 = (state_47912[(1)]);
if((state_val_47913 === (1))){
var state_47912__$1 = state_47912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47912__$1,(2),res,v);
} else {
if((state_val_47913 === (2))){
var inst_47909 = (state_47912[(2)]);
var inst_47910 = cljs.core.async.close_BANG_(res);
var state_47912__$1 = (function (){var statearr_47914 = state_47912;
(statearr_47914[(7)] = inst_47909);

return statearr_47914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47912__$1,inst_47910);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0 = (function (){
var statearr_47915 = [null,null,null,null,null,null,null,null];
(statearr_47915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__);

(statearr_47915[(1)] = (1));

return statearr_47915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1 = (function (state_47912){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_47912);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e47916){var ex__47194__auto__ = e47916;
var statearr_47917_49992 = state_47912;
(statearr_47917_49992[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_47912[(4)]))){
var statearr_47918_49993 = state_47912;
(statearr_47918_49993[(1)] = cljs.core.first((state_47912[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49994 = state_47912;
state_47912 = G__49994;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__ = function(state_47912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1.call(this,state_47912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_47920 = f__47648__auto__();
(statearr_47920[(6)] = c__47647__auto___49991);

return statearr_47920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47921){
var vec__47922 = p__47921;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47922,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47922,(1),null);
var job = vec__47922;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___49995 = n;
var __49996 = (0);
while(true){
if((__49996 < n__4741__auto___49995)){
var G__47925_49997 = type;
var G__47925_49998__$1 = (((G__47925_49997 instanceof cljs.core.Keyword))?G__47925_49997.fqn:null);
switch (G__47925_49998__$1) {
case "compute":
var c__47647__auto___50000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49996,c__47647__auto___50000,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async){
return (function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = ((function (__49996,c__47647__auto___50000,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async){
return (function (state_47939){
var state_val_47940 = (state_47939[(1)]);
if((state_val_47940 === (1))){
var state_47939__$1 = state_47939;
var statearr_47941_50002 = state_47939__$1;
(statearr_47941_50002[(2)] = null);

(statearr_47941_50002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (2))){
var state_47939__$1 = state_47939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47939__$1,(4),jobs);
} else {
if((state_val_47940 === (3))){
var inst_47937 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47939__$1,inst_47937);
} else {
if((state_val_47940 === (4))){
var inst_47928 = (state_47939[(2)]);
var inst_47929 = process(inst_47928);
var state_47939__$1 = state_47939;
if(cljs.core.truth_(inst_47929)){
var statearr_47942_50003 = state_47939__$1;
(statearr_47942_50003[(1)] = (5));

} else {
var statearr_47943_50004 = state_47939__$1;
(statearr_47943_50004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (5))){
var state_47939__$1 = state_47939;
var statearr_47944_50005 = state_47939__$1;
(statearr_47944_50005[(2)] = null);

(statearr_47944_50005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (6))){
var state_47939__$1 = state_47939;
var statearr_47946_50006 = state_47939__$1;
(statearr_47946_50006[(2)] = null);

(statearr_47946_50006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (7))){
var inst_47934 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47947_50007 = state_47939__$1;
(statearr_47947_50007[(2)] = inst_47934);

(statearr_47947_50007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49996,c__47647__auto___50000,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async))
;
return ((function (__49996,switch__47190__auto__,c__47647__auto___50000,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0 = (function (){
var statearr_47948 = [null,null,null,null,null,null,null];
(statearr_47948[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__);

(statearr_47948[(1)] = (1));

return statearr_47948;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1 = (function (state_47939){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_47939);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e47949){var ex__47194__auto__ = e47949;
var statearr_47950_50011 = state_47939;
(statearr_47950_50011[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_47939[(4)]))){
var statearr_47951_50012 = state_47939;
(statearr_47951_50012[(1)] = cljs.core.first((state_47939[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50014 = state_47939;
state_47939 = G__50014;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__ = function(state_47939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1.call(this,state_47939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__;
})()
;})(__49996,switch__47190__auto__,c__47647__auto___50000,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async))
})();
var state__47649__auto__ = (function (){var statearr_47952 = f__47648__auto__();
(statearr_47952[(6)] = c__47647__auto___50000);

return statearr_47952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
});})(__49996,c__47647__auto___50000,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async))
);


break;
case "async":
var c__47647__auto___50015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49996,c__47647__auto___50015,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async){
return (function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = ((function (__49996,c__47647__auto___50015,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async){
return (function (state_47966){
var state_val_47967 = (state_47966[(1)]);
if((state_val_47967 === (1))){
var state_47966__$1 = state_47966;
var statearr_47968_50016 = state_47966__$1;
(statearr_47968_50016[(2)] = null);

(statearr_47968_50016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47967 === (2))){
var state_47966__$1 = state_47966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47966__$1,(4),jobs);
} else {
if((state_val_47967 === (3))){
var inst_47964 = (state_47966[(2)]);
var state_47966__$1 = state_47966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47966__$1,inst_47964);
} else {
if((state_val_47967 === (4))){
var inst_47956 = (state_47966[(2)]);
var inst_47957 = async(inst_47956);
var state_47966__$1 = state_47966;
if(cljs.core.truth_(inst_47957)){
var statearr_47969_50017 = state_47966__$1;
(statearr_47969_50017[(1)] = (5));

} else {
var statearr_47970_50019 = state_47966__$1;
(statearr_47970_50019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47967 === (5))){
var state_47966__$1 = state_47966;
var statearr_47971_50020 = state_47966__$1;
(statearr_47971_50020[(2)] = null);

(statearr_47971_50020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47967 === (6))){
var state_47966__$1 = state_47966;
var statearr_47973_50022 = state_47966__$1;
(statearr_47973_50022[(2)] = null);

(statearr_47973_50022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47967 === (7))){
var inst_47962 = (state_47966[(2)]);
var state_47966__$1 = state_47966;
var statearr_47974_50023 = state_47966__$1;
(statearr_47974_50023[(2)] = inst_47962);

(statearr_47974_50023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49996,c__47647__auto___50015,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async))
;
return ((function (__49996,switch__47190__auto__,c__47647__auto___50015,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0 = (function (){
var statearr_47975 = [null,null,null,null,null,null,null];
(statearr_47975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__);

(statearr_47975[(1)] = (1));

return statearr_47975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1 = (function (state_47966){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_47966);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e47976){var ex__47194__auto__ = e47976;
var statearr_47977_50027 = state_47966;
(statearr_47977_50027[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_47966[(4)]))){
var statearr_47978_50028 = state_47966;
(statearr_47978_50028[(1)] = cljs.core.first((state_47966[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50029 = state_47966;
state_47966 = G__50029;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__ = function(state_47966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1.call(this,state_47966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__;
})()
;})(__49996,switch__47190__auto__,c__47647__auto___50015,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async))
})();
var state__47649__auto__ = (function (){var statearr_47979 = f__47648__auto__();
(statearr_47979[(6)] = c__47647__auto___50015);

return statearr_47979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
});})(__49996,c__47647__auto___50015,G__47925_49997,G__47925_49998__$1,n__4741__auto___49995,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47925_49998__$1)].join('')));

}

var G__50031 = (__49996 + (1));
__49996 = G__50031;
continue;
} else {
}
break;
}

var c__47647__auto___50032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_48003){
var state_val_48004 = (state_48003[(1)]);
if((state_val_48004 === (7))){
var inst_47999 = (state_48003[(2)]);
var state_48003__$1 = state_48003;
var statearr_48006_50034 = state_48003__$1;
(statearr_48006_50034[(2)] = inst_47999);

(statearr_48006_50034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48004 === (1))){
var state_48003__$1 = state_48003;
var statearr_48007_50035 = state_48003__$1;
(statearr_48007_50035[(2)] = null);

(statearr_48007_50035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48004 === (4))){
var inst_47983 = (state_48003[(7)]);
var inst_47983__$1 = (state_48003[(2)]);
var inst_47984 = (inst_47983__$1 == null);
var state_48003__$1 = (function (){var statearr_48008 = state_48003;
(statearr_48008[(7)] = inst_47983__$1);

return statearr_48008;
})();
if(cljs.core.truth_(inst_47984)){
var statearr_48009_50036 = state_48003__$1;
(statearr_48009_50036[(1)] = (5));

} else {
var statearr_48010_50037 = state_48003__$1;
(statearr_48010_50037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48004 === (6))){
var inst_47988 = (state_48003[(8)]);
var inst_47983 = (state_48003[(7)]);
var inst_47988__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47990 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47991 = [inst_47983,inst_47988__$1];
var inst_47992 = (new cljs.core.PersistentVector(null,2,(5),inst_47990,inst_47991,null));
var state_48003__$1 = (function (){var statearr_48011 = state_48003;
(statearr_48011[(8)] = inst_47988__$1);

return statearr_48011;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48003__$1,(8),jobs,inst_47992);
} else {
if((state_val_48004 === (3))){
var inst_48001 = (state_48003[(2)]);
var state_48003__$1 = state_48003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48003__$1,inst_48001);
} else {
if((state_val_48004 === (2))){
var state_48003__$1 = state_48003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48003__$1,(4),from);
} else {
if((state_val_48004 === (9))){
var inst_47996 = (state_48003[(2)]);
var state_48003__$1 = (function (){var statearr_48013 = state_48003;
(statearr_48013[(9)] = inst_47996);

return statearr_48013;
})();
var statearr_48014_50040 = state_48003__$1;
(statearr_48014_50040[(2)] = null);

(statearr_48014_50040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48004 === (5))){
var inst_47986 = cljs.core.async.close_BANG_(jobs);
var state_48003__$1 = state_48003;
var statearr_48015_50041 = state_48003__$1;
(statearr_48015_50041[(2)] = inst_47986);

(statearr_48015_50041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48004 === (8))){
var inst_47988 = (state_48003[(8)]);
var inst_47994 = (state_48003[(2)]);
var state_48003__$1 = (function (){var statearr_48016 = state_48003;
(statearr_48016[(10)] = inst_47994);

return statearr_48016;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48003__$1,(9),results,inst_47988);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0 = (function (){
var statearr_48017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__);

(statearr_48017[(1)] = (1));

return statearr_48017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1 = (function (state_48003){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_48003);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e48019){var ex__47194__auto__ = e48019;
var statearr_48020_50042 = state_48003;
(statearr_48020_50042[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_48003[(4)]))){
var statearr_48021_50043 = state_48003;
(statearr_48021_50043[(1)] = cljs.core.first((state_48003[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50044 = state_48003;
state_48003 = G__50044;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__ = function(state_48003){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1.call(this,state_48003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_48022 = f__47648__auto__();
(statearr_48022[(6)] = c__47647__auto___50032);

return statearr_48022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


var c__47647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_48061){
var state_val_48062 = (state_48061[(1)]);
if((state_val_48062 === (7))){
var inst_48057 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
var statearr_48063_50045 = state_48061__$1;
(statearr_48063_50045[(2)] = inst_48057);

(statearr_48063_50045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (20))){
var state_48061__$1 = state_48061;
var statearr_48064_50047 = state_48061__$1;
(statearr_48064_50047[(2)] = null);

(statearr_48064_50047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (1))){
var state_48061__$1 = state_48061;
var statearr_48066_50048 = state_48061__$1;
(statearr_48066_50048[(2)] = null);

(statearr_48066_50048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (4))){
var inst_48025 = (state_48061[(7)]);
var inst_48025__$1 = (state_48061[(2)]);
var inst_48026 = (inst_48025__$1 == null);
var state_48061__$1 = (function (){var statearr_48067 = state_48061;
(statearr_48067[(7)] = inst_48025__$1);

return statearr_48067;
})();
if(cljs.core.truth_(inst_48026)){
var statearr_48068_50051 = state_48061__$1;
(statearr_48068_50051[(1)] = (5));

} else {
var statearr_48069_50052 = state_48061__$1;
(statearr_48069_50052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (15))){
var inst_48038 = (state_48061[(8)]);
var state_48061__$1 = state_48061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48061__$1,(18),to,inst_48038);
} else {
if((state_val_48062 === (21))){
var inst_48052 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
var statearr_48070_50053 = state_48061__$1;
(statearr_48070_50053[(2)] = inst_48052);

(statearr_48070_50053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (13))){
var inst_48054 = (state_48061[(2)]);
var state_48061__$1 = (function (){var statearr_48071 = state_48061;
(statearr_48071[(9)] = inst_48054);

return statearr_48071;
})();
var statearr_48072_50054 = state_48061__$1;
(statearr_48072_50054[(2)] = null);

(statearr_48072_50054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (6))){
var inst_48025 = (state_48061[(7)]);
var state_48061__$1 = state_48061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48061__$1,(11),inst_48025);
} else {
if((state_val_48062 === (17))){
var inst_48047 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
if(cljs.core.truth_(inst_48047)){
var statearr_48074_50055 = state_48061__$1;
(statearr_48074_50055[(1)] = (19));

} else {
var statearr_48075_50056 = state_48061__$1;
(statearr_48075_50056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (3))){
var inst_48059 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48061__$1,inst_48059);
} else {
if((state_val_48062 === (12))){
var inst_48035 = (state_48061[(10)]);
var state_48061__$1 = state_48061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48061__$1,(14),inst_48035);
} else {
if((state_val_48062 === (2))){
var state_48061__$1 = state_48061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48061__$1,(4),results);
} else {
if((state_val_48062 === (19))){
var state_48061__$1 = state_48061;
var statearr_48076_50057 = state_48061__$1;
(statearr_48076_50057[(2)] = null);

(statearr_48076_50057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (11))){
var inst_48035 = (state_48061[(2)]);
var state_48061__$1 = (function (){var statearr_48077 = state_48061;
(statearr_48077[(10)] = inst_48035);

return statearr_48077;
})();
var statearr_48078_50062 = state_48061__$1;
(statearr_48078_50062[(2)] = null);

(statearr_48078_50062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (9))){
var state_48061__$1 = state_48061;
var statearr_48079_50063 = state_48061__$1;
(statearr_48079_50063[(2)] = null);

(statearr_48079_50063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (5))){
var state_48061__$1 = state_48061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48080_50064 = state_48061__$1;
(statearr_48080_50064[(1)] = (8));

} else {
var statearr_48082_50065 = state_48061__$1;
(statearr_48082_50065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (14))){
var inst_48041 = (state_48061[(11)]);
var inst_48038 = (state_48061[(8)]);
var inst_48038__$1 = (state_48061[(2)]);
var inst_48040 = (inst_48038__$1 == null);
var inst_48041__$1 = cljs.core.not(inst_48040);
var state_48061__$1 = (function (){var statearr_48083 = state_48061;
(statearr_48083[(11)] = inst_48041__$1);

(statearr_48083[(8)] = inst_48038__$1);

return statearr_48083;
})();
if(inst_48041__$1){
var statearr_48084_50070 = state_48061__$1;
(statearr_48084_50070[(1)] = (15));

} else {
var statearr_48085_50071 = state_48061__$1;
(statearr_48085_50071[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (16))){
var inst_48041 = (state_48061[(11)]);
var state_48061__$1 = state_48061;
var statearr_48086_50072 = state_48061__$1;
(statearr_48086_50072[(2)] = inst_48041);

(statearr_48086_50072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (10))){
var inst_48032 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
var statearr_48087_50074 = state_48061__$1;
(statearr_48087_50074[(2)] = inst_48032);

(statearr_48087_50074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (18))){
var inst_48044 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
var statearr_48088_50076 = state_48061__$1;
(statearr_48088_50076[(2)] = inst_48044);

(statearr_48088_50076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (8))){
var inst_48029 = cljs.core.async.close_BANG_(to);
var state_48061__$1 = state_48061;
var statearr_48089_50077 = state_48061__$1;
(statearr_48089_50077[(2)] = inst_48029);

(statearr_48089_50077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0 = (function (){
var statearr_48091 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__);

(statearr_48091[(1)] = (1));

return statearr_48091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1 = (function (state_48061){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_48061);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e48092){var ex__47194__auto__ = e48092;
var statearr_48093_50078 = state_48061;
(statearr_48093_50078[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_48061[(4)]))){
var statearr_48094_50079 = state_48061;
(statearr_48094_50079[(1)] = cljs.core.first((state_48061[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50080 = state_48061;
state_48061 = G__50080;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__ = function(state_48061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1.call(this,state_48061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_48095 = f__47648__auto__();
(statearr_48095[(6)] = c__47647__auto__);

return statearr_48095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));

return c__47647__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__48098 = arguments.length;
switch (G__48098) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__48101 = arguments.length;
switch (G__48101) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__48104 = arguments.length;
switch (G__48104) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__47647__auto___50088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_48131){
var state_val_48132 = (state_48131[(1)]);
if((state_val_48132 === (7))){
var inst_48127 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48133_50089 = state_48131__$1;
(statearr_48133_50089[(2)] = inst_48127);

(statearr_48133_50089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (1))){
var state_48131__$1 = state_48131;
var statearr_48135_50090 = state_48131__$1;
(statearr_48135_50090[(2)] = null);

(statearr_48135_50090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (4))){
var inst_48108 = (state_48131[(7)]);
var inst_48108__$1 = (state_48131[(2)]);
var inst_48109 = (inst_48108__$1 == null);
var state_48131__$1 = (function (){var statearr_48136 = state_48131;
(statearr_48136[(7)] = inst_48108__$1);

return statearr_48136;
})();
if(cljs.core.truth_(inst_48109)){
var statearr_48137_50091 = state_48131__$1;
(statearr_48137_50091[(1)] = (5));

} else {
var statearr_48138_50092 = state_48131__$1;
(statearr_48138_50092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (13))){
var state_48131__$1 = state_48131;
var statearr_48139_50093 = state_48131__$1;
(statearr_48139_50093[(2)] = null);

(statearr_48139_50093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (6))){
var inst_48108 = (state_48131[(7)]);
var inst_48114 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48108) : p.call(null,inst_48108));
var state_48131__$1 = state_48131;
if(cljs.core.truth_(inst_48114)){
var statearr_48140_50094 = state_48131__$1;
(statearr_48140_50094[(1)] = (9));

} else {
var statearr_48141_50095 = state_48131__$1;
(statearr_48141_50095[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (3))){
var inst_48129 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48131__$1,inst_48129);
} else {
if((state_val_48132 === (12))){
var state_48131__$1 = state_48131;
var statearr_48142_50097 = state_48131__$1;
(statearr_48142_50097[(2)] = null);

(statearr_48142_50097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (2))){
var state_48131__$1 = state_48131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48131__$1,(4),ch);
} else {
if((state_val_48132 === (11))){
var inst_48108 = (state_48131[(7)]);
var inst_48118 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48131__$1,(8),inst_48118,inst_48108);
} else {
if((state_val_48132 === (9))){
var state_48131__$1 = state_48131;
var statearr_48143_50098 = state_48131__$1;
(statearr_48143_50098[(2)] = tc);

(statearr_48143_50098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (5))){
var inst_48111 = cljs.core.async.close_BANG_(tc);
var inst_48112 = cljs.core.async.close_BANG_(fc);
var state_48131__$1 = (function (){var statearr_48144 = state_48131;
(statearr_48144[(8)] = inst_48111);

return statearr_48144;
})();
var statearr_48145_50112 = state_48131__$1;
(statearr_48145_50112[(2)] = inst_48112);

(statearr_48145_50112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (14))){
var inst_48125 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48146_50113 = state_48131__$1;
(statearr_48146_50113[(2)] = inst_48125);

(statearr_48146_50113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (10))){
var state_48131__$1 = state_48131;
var statearr_48148_50117 = state_48131__$1;
(statearr_48148_50117[(2)] = fc);

(statearr_48148_50117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (8))){
var inst_48120 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
if(cljs.core.truth_(inst_48120)){
var statearr_48149_50118 = state_48131__$1;
(statearr_48149_50118[(1)] = (12));

} else {
var statearr_48150_50119 = state_48131__$1;
(statearr_48150_50119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_48151 = [null,null,null,null,null,null,null,null,null];
(statearr_48151[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_48151[(1)] = (1));

return statearr_48151;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_48131){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_48131);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e48152){var ex__47194__auto__ = e48152;
var statearr_48153_50123 = state_48131;
(statearr_48153_50123[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_48131[(4)]))){
var statearr_48154_50124 = state_48131;
(statearr_48154_50124[(1)] = cljs.core.first((state_48131[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50125 = state_48131;
state_48131 = G__50125;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_48131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_48131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_48155 = f__47648__auto__();
(statearr_48155[(6)] = c__47647__auto___50088);

return statearr_48155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_48180){
var state_val_48181 = (state_48180[(1)]);
if((state_val_48181 === (7))){
var inst_48175 = (state_48180[(2)]);
var state_48180__$1 = state_48180;
var statearr_48182_50129 = state_48180__$1;
(statearr_48182_50129[(2)] = inst_48175);

(statearr_48182_50129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48181 === (1))){
var inst_48157 = init;
var inst_48158 = inst_48157;
var state_48180__$1 = (function (){var statearr_48183 = state_48180;
(statearr_48183[(7)] = inst_48158);

return statearr_48183;
})();
var statearr_48184_50130 = state_48180__$1;
(statearr_48184_50130[(2)] = null);

(statearr_48184_50130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48181 === (4))){
var inst_48162 = (state_48180[(8)]);
var inst_48162__$1 = (state_48180[(2)]);
var inst_48163 = (inst_48162__$1 == null);
var state_48180__$1 = (function (){var statearr_48186 = state_48180;
(statearr_48186[(8)] = inst_48162__$1);

return statearr_48186;
})();
if(cljs.core.truth_(inst_48163)){
var statearr_48187_50138 = state_48180__$1;
(statearr_48187_50138[(1)] = (5));

} else {
var statearr_48188_50139 = state_48180__$1;
(statearr_48188_50139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48181 === (6))){
var inst_48166 = (state_48180[(9)]);
var inst_48158 = (state_48180[(7)]);
var inst_48162 = (state_48180[(8)]);
var inst_48166__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48158,inst_48162) : f.call(null,inst_48158,inst_48162));
var inst_48167 = cljs.core.reduced_QMARK_(inst_48166__$1);
var state_48180__$1 = (function (){var statearr_48189 = state_48180;
(statearr_48189[(9)] = inst_48166__$1);

return statearr_48189;
})();
if(inst_48167){
var statearr_48190_50140 = state_48180__$1;
(statearr_48190_50140[(1)] = (8));

} else {
var statearr_48191_50141 = state_48180__$1;
(statearr_48191_50141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48181 === (3))){
var inst_48177 = (state_48180[(2)]);
var state_48180__$1 = state_48180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48180__$1,inst_48177);
} else {
if((state_val_48181 === (2))){
var state_48180__$1 = state_48180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48180__$1,(4),ch);
} else {
if((state_val_48181 === (9))){
var inst_48166 = (state_48180[(9)]);
var inst_48158 = inst_48166;
var state_48180__$1 = (function (){var statearr_48194 = state_48180;
(statearr_48194[(7)] = inst_48158);

return statearr_48194;
})();
var statearr_48195_50142 = state_48180__$1;
(statearr_48195_50142[(2)] = null);

(statearr_48195_50142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48181 === (5))){
var inst_48158 = (state_48180[(7)]);
var state_48180__$1 = state_48180;
var statearr_48196_50146 = state_48180__$1;
(statearr_48196_50146[(2)] = inst_48158);

(statearr_48196_50146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48181 === (10))){
var inst_48173 = (state_48180[(2)]);
var state_48180__$1 = state_48180;
var statearr_48197_50147 = state_48180__$1;
(statearr_48197_50147[(2)] = inst_48173);

(statearr_48197_50147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48181 === (8))){
var inst_48166 = (state_48180[(9)]);
var inst_48169 = cljs.core.deref(inst_48166);
var state_48180__$1 = state_48180;
var statearr_48198_50148 = state_48180__$1;
(statearr_48198_50148[(2)] = inst_48169);

(statearr_48198_50148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__47191__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47191__auto____0 = (function (){
var statearr_48199 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48199[(0)] = cljs$core$async$reduce_$_state_machine__47191__auto__);

(statearr_48199[(1)] = (1));

return statearr_48199;
});
var cljs$core$async$reduce_$_state_machine__47191__auto____1 = (function (state_48180){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_48180);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e48200){var ex__47194__auto__ = e48200;
var statearr_48201_50152 = state_48180;
(statearr_48201_50152[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_48180[(4)]))){
var statearr_48203_50153 = state_48180;
(statearr_48203_50153[(1)] = cljs.core.first((state_48180[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50154 = state_48180;
state_48180 = G__50154;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47191__auto__ = function(state_48180){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47191__auto____1.call(this,state_48180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47191__auto____0;
cljs$core$async$reduce_$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47191__auto____1;
return cljs$core$async$reduce_$_state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_48205 = f__47648__auto__();
(statearr_48205[(6)] = c__47647__auto__);

return statearr_48205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));

return c__47647__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_48211){
var state_val_48212 = (state_48211[(1)]);
if((state_val_48212 === (1))){
var inst_48206 = cljs.core.async.reduce(f__$1,init,ch);
var state_48211__$1 = state_48211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48211__$1,(2),inst_48206);
} else {
if((state_val_48212 === (2))){
var inst_48208 = (state_48211[(2)]);
var inst_48209 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48208) : f__$1.call(null,inst_48208));
var state_48211__$1 = state_48211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48211__$1,inst_48209);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47191__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47191__auto____0 = (function (){
var statearr_48213 = [null,null,null,null,null,null,null];
(statearr_48213[(0)] = cljs$core$async$transduce_$_state_machine__47191__auto__);

(statearr_48213[(1)] = (1));

return statearr_48213;
});
var cljs$core$async$transduce_$_state_machine__47191__auto____1 = (function (state_48211){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_48211);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e48214){var ex__47194__auto__ = e48214;
var statearr_48215_50158 = state_48211;
(statearr_48215_50158[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_48211[(4)]))){
var statearr_48216_50160 = state_48211;
(statearr_48216_50160[(1)] = cljs.core.first((state_48211[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50161 = state_48211;
state_48211 = G__50161;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47191__auto__ = function(state_48211){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47191__auto____1.call(this,state_48211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47191__auto____0;
cljs$core$async$transduce_$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47191__auto____1;
return cljs$core$async$transduce_$_state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_48217 = f__47648__auto__();
(statearr_48217[(6)] = c__47647__auto__);

return statearr_48217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));

return c__47647__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__48220 = arguments.length;
switch (G__48220) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_48246){
var state_val_48247 = (state_48246[(1)]);
if((state_val_48247 === (7))){
var inst_48228 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
var statearr_48248_50170 = state_48246__$1;
(statearr_48248_50170[(2)] = inst_48228);

(statearr_48248_50170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (1))){
var inst_48222 = cljs.core.seq(coll);
var inst_48223 = inst_48222;
var state_48246__$1 = (function (){var statearr_48249 = state_48246;
(statearr_48249[(7)] = inst_48223);

return statearr_48249;
})();
var statearr_48250_50171 = state_48246__$1;
(statearr_48250_50171[(2)] = null);

(statearr_48250_50171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (4))){
var inst_48223 = (state_48246[(7)]);
var inst_48226 = cljs.core.first(inst_48223);
var state_48246__$1 = state_48246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48246__$1,(7),ch,inst_48226);
} else {
if((state_val_48247 === (13))){
var inst_48240 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
var statearr_48251_50172 = state_48246__$1;
(statearr_48251_50172[(2)] = inst_48240);

(statearr_48251_50172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (6))){
var inst_48231 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
if(cljs.core.truth_(inst_48231)){
var statearr_48252_50173 = state_48246__$1;
(statearr_48252_50173[(1)] = (8));

} else {
var statearr_48253_50174 = state_48246__$1;
(statearr_48253_50174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (3))){
var inst_48244 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48246__$1,inst_48244);
} else {
if((state_val_48247 === (12))){
var state_48246__$1 = state_48246;
var statearr_48254_50175 = state_48246__$1;
(statearr_48254_50175[(2)] = null);

(statearr_48254_50175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (2))){
var inst_48223 = (state_48246[(7)]);
var state_48246__$1 = state_48246;
if(cljs.core.truth_(inst_48223)){
var statearr_48255_50176 = state_48246__$1;
(statearr_48255_50176[(1)] = (4));

} else {
var statearr_48256_50177 = state_48246__$1;
(statearr_48256_50177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (11))){
var inst_48237 = cljs.core.async.close_BANG_(ch);
var state_48246__$1 = state_48246;
var statearr_48257_50178 = state_48246__$1;
(statearr_48257_50178[(2)] = inst_48237);

(statearr_48257_50178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (9))){
var state_48246__$1 = state_48246;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48258_50179 = state_48246__$1;
(statearr_48258_50179[(1)] = (11));

} else {
var statearr_48259_50180 = state_48246__$1;
(statearr_48259_50180[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (5))){
var inst_48223 = (state_48246[(7)]);
var state_48246__$1 = state_48246;
var statearr_48260_50181 = state_48246__$1;
(statearr_48260_50181[(2)] = inst_48223);

(statearr_48260_50181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (10))){
var inst_48242 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
var statearr_48261_50182 = state_48246__$1;
(statearr_48261_50182[(2)] = inst_48242);

(statearr_48261_50182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (8))){
var inst_48223 = (state_48246[(7)]);
var inst_48233 = cljs.core.next(inst_48223);
var inst_48223__$1 = inst_48233;
var state_48246__$1 = (function (){var statearr_48262 = state_48246;
(statearr_48262[(7)] = inst_48223__$1);

return statearr_48262;
})();
var statearr_48263_50183 = state_48246__$1;
(statearr_48263_50183[(2)] = null);

(statearr_48263_50183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_48264 = [null,null,null,null,null,null,null,null];
(statearr_48264[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_48264[(1)] = (1));

return statearr_48264;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_48246){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_48246);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e48265){var ex__47194__auto__ = e48265;
var statearr_48266_50184 = state_48246;
(statearr_48266_50184[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_48246[(4)]))){
var statearr_48267_50185 = state_48246;
(statearr_48267_50185[(1)] = cljs.core.first((state_48246[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50186 = state_48246;
state_48246 = G__50186;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_48246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_48246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_48268 = f__47648__auto__();
(statearr_48268[(6)] = c__47647__auto__);

return statearr_48268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));

return c__47647__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48270 = arguments.length;
switch (G__48270) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_50189 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_50189(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50190 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_50190(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50191 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_50191(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50196 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_50196(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48293 = (function (ch,cs,meta48294){
this.ch = ch;
this.cs = cs;
this.meta48294 = meta48294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48295,meta48294__$1){
var self__ = this;
var _48295__$1 = this;
return (new cljs.core.async.t_cljs$core$async48293(self__.ch,self__.cs,meta48294__$1));
}));

(cljs.core.async.t_cljs$core$async48293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48295){
var self__ = this;
var _48295__$1 = this;
return self__.meta48294;
}));

(cljs.core.async.t_cljs$core$async48293.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48293.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48293.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48293.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48293.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48294","meta48294",-263446117,null)], null);
}));

(cljs.core.async.t_cljs$core$async48293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48293");

(cljs.core.async.t_cljs$core$async48293.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48293.
 */
cljs.core.async.__GT_t_cljs$core$async48293 = (function cljs$core$async$mult_$___GT_t_cljs$core$async48293(ch__$1,cs__$1,meta48294){
return (new cljs.core.async.t_cljs$core$async48293(ch__$1,cs__$1,meta48294));
});

}

return (new cljs.core.async.t_cljs$core$async48293(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47647__auto___50204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_48495){
var state_val_48499 = (state_48495[(1)]);
if((state_val_48499 === (7))){
var inst_48487 = (state_48495[(2)]);
var state_48495__$1 = state_48495;
var statearr_48505_50205 = state_48495__$1;
(statearr_48505_50205[(2)] = inst_48487);

(statearr_48505_50205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (20))){
var inst_48342 = (state_48495[(7)]);
var inst_48357 = cljs.core.first(inst_48342);
var inst_48358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48357,(0),null);
var inst_48359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48357,(1),null);
var state_48495__$1 = (function (){var statearr_48509 = state_48495;
(statearr_48509[(8)] = inst_48358);

return statearr_48509;
})();
if(cljs.core.truth_(inst_48359)){
var statearr_48511_50217 = state_48495__$1;
(statearr_48511_50217[(1)] = (22));

} else {
var statearr_48512_50218 = state_48495__$1;
(statearr_48512_50218[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (27))){
var inst_48422 = (state_48495[(9)]);
var inst_48432 = (state_48495[(10)]);
var inst_48311 = (state_48495[(11)]);
var inst_48424 = (state_48495[(12)]);
var inst_48432__$1 = cljs.core._nth(inst_48422,inst_48424);
var inst_48433 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48432__$1,inst_48311,done);
var state_48495__$1 = (function (){var statearr_48518 = state_48495;
(statearr_48518[(10)] = inst_48432__$1);

return statearr_48518;
})();
if(cljs.core.truth_(inst_48433)){
var statearr_48519_50219 = state_48495__$1;
(statearr_48519_50219[(1)] = (30));

} else {
var statearr_48521_50220 = state_48495__$1;
(statearr_48521_50220[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (1))){
var state_48495__$1 = state_48495;
var statearr_48522_50221 = state_48495__$1;
(statearr_48522_50221[(2)] = null);

(statearr_48522_50221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (24))){
var inst_48342 = (state_48495[(7)]);
var inst_48395 = (state_48495[(2)]);
var inst_48396 = cljs.core.next(inst_48342);
var inst_48320 = inst_48396;
var inst_48321 = null;
var inst_48322 = (0);
var inst_48323 = (0);
var state_48495__$1 = (function (){var statearr_48527 = state_48495;
(statearr_48527[(13)] = inst_48323);

(statearr_48527[(14)] = inst_48321);

(statearr_48527[(15)] = inst_48322);

(statearr_48527[(16)] = inst_48395);

(statearr_48527[(17)] = inst_48320);

return statearr_48527;
})();
var statearr_48530_50222 = state_48495__$1;
(statearr_48530_50222[(2)] = null);

(statearr_48530_50222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (39))){
var state_48495__$1 = state_48495;
var statearr_48543_50223 = state_48495__$1;
(statearr_48543_50223[(2)] = null);

(statearr_48543_50223[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (4))){
var inst_48311 = (state_48495[(11)]);
var inst_48311__$1 = (state_48495[(2)]);
var inst_48312 = (inst_48311__$1 == null);
var state_48495__$1 = (function (){var statearr_48547 = state_48495;
(statearr_48547[(11)] = inst_48311__$1);

return statearr_48547;
})();
if(cljs.core.truth_(inst_48312)){
var statearr_48549_50224 = state_48495__$1;
(statearr_48549_50224[(1)] = (5));

} else {
var statearr_48550_50225 = state_48495__$1;
(statearr_48550_50225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (15))){
var inst_48323 = (state_48495[(13)]);
var inst_48321 = (state_48495[(14)]);
var inst_48322 = (state_48495[(15)]);
var inst_48320 = (state_48495[(17)]);
var inst_48338 = (state_48495[(2)]);
var inst_48339 = (inst_48323 + (1));
var tmp48535 = inst_48321;
var tmp48537 = inst_48322;
var tmp48538 = inst_48320;
var inst_48320__$1 = tmp48538;
var inst_48321__$1 = tmp48535;
var inst_48322__$1 = tmp48537;
var inst_48323__$1 = inst_48339;
var state_48495__$1 = (function (){var statearr_48555 = state_48495;
(statearr_48555[(13)] = inst_48323__$1);

(statearr_48555[(14)] = inst_48321__$1);

(statearr_48555[(15)] = inst_48322__$1);

(statearr_48555[(17)] = inst_48320__$1);

(statearr_48555[(18)] = inst_48338);

return statearr_48555;
})();
var statearr_48556_50226 = state_48495__$1;
(statearr_48556_50226[(2)] = null);

(statearr_48556_50226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (21))){
var inst_48399 = (state_48495[(2)]);
var state_48495__$1 = state_48495;
var statearr_48563_50227 = state_48495__$1;
(statearr_48563_50227[(2)] = inst_48399);

(statearr_48563_50227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (31))){
var inst_48432 = (state_48495[(10)]);
var inst_48436 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48432);
var state_48495__$1 = state_48495;
var statearr_48566_50228 = state_48495__$1;
(statearr_48566_50228[(2)] = inst_48436);

(statearr_48566_50228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (32))){
var inst_48422 = (state_48495[(9)]);
var inst_48423 = (state_48495[(19)]);
var inst_48421 = (state_48495[(20)]);
var inst_48424 = (state_48495[(12)]);
var inst_48438 = (state_48495[(2)]);
var inst_48439 = (inst_48424 + (1));
var tmp48558 = inst_48422;
var tmp48559 = inst_48423;
var tmp48560 = inst_48421;
var inst_48421__$1 = tmp48560;
var inst_48422__$1 = tmp48558;
var inst_48423__$1 = tmp48559;
var inst_48424__$1 = inst_48439;
var state_48495__$1 = (function (){var statearr_48572 = state_48495;
(statearr_48572[(9)] = inst_48422__$1);

(statearr_48572[(19)] = inst_48423__$1);

(statearr_48572[(20)] = inst_48421__$1);

(statearr_48572[(12)] = inst_48424__$1);

(statearr_48572[(21)] = inst_48438);

return statearr_48572;
})();
var statearr_48589_50229 = state_48495__$1;
(statearr_48589_50229[(2)] = null);

(statearr_48589_50229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (40))){
var inst_48455 = (state_48495[(22)]);
var inst_48460 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48455);
var state_48495__$1 = state_48495;
var statearr_48591_50233 = state_48495__$1;
(statearr_48591_50233[(2)] = inst_48460);

(statearr_48591_50233[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (33))){
var inst_48443 = (state_48495[(23)]);
var inst_48446 = cljs.core.chunked_seq_QMARK_(inst_48443);
var state_48495__$1 = state_48495;
if(inst_48446){
var statearr_48595_50234 = state_48495__$1;
(statearr_48595_50234[(1)] = (36));

} else {
var statearr_48597_50235 = state_48495__$1;
(statearr_48597_50235[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (13))){
var inst_48332 = (state_48495[(24)]);
var inst_48335 = cljs.core.async.close_BANG_(inst_48332);
var state_48495__$1 = state_48495;
var statearr_48601_50236 = state_48495__$1;
(statearr_48601_50236[(2)] = inst_48335);

(statearr_48601_50236[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (22))){
var inst_48358 = (state_48495[(8)]);
var inst_48392 = cljs.core.async.close_BANG_(inst_48358);
var state_48495__$1 = state_48495;
var statearr_48603_50237 = state_48495__$1;
(statearr_48603_50237[(2)] = inst_48392);

(statearr_48603_50237[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (36))){
var inst_48443 = (state_48495[(23)]);
var inst_48450 = cljs.core.chunk_first(inst_48443);
var inst_48451 = cljs.core.chunk_rest(inst_48443);
var inst_48452 = cljs.core.count(inst_48450);
var inst_48421 = inst_48451;
var inst_48422 = inst_48450;
var inst_48423 = inst_48452;
var inst_48424 = (0);
var state_48495__$1 = (function (){var statearr_48607 = state_48495;
(statearr_48607[(9)] = inst_48422);

(statearr_48607[(19)] = inst_48423);

(statearr_48607[(20)] = inst_48421);

(statearr_48607[(12)] = inst_48424);

return statearr_48607;
})();
var statearr_48609_50248 = state_48495__$1;
(statearr_48609_50248[(2)] = null);

(statearr_48609_50248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (41))){
var inst_48443 = (state_48495[(23)]);
var inst_48462 = (state_48495[(2)]);
var inst_48463 = cljs.core.next(inst_48443);
var inst_48421 = inst_48463;
var inst_48422 = null;
var inst_48423 = (0);
var inst_48424 = (0);
var state_48495__$1 = (function (){var statearr_48612 = state_48495;
(statearr_48612[(9)] = inst_48422);

(statearr_48612[(25)] = inst_48462);

(statearr_48612[(19)] = inst_48423);

(statearr_48612[(20)] = inst_48421);

(statearr_48612[(12)] = inst_48424);

return statearr_48612;
})();
var statearr_48614_50249 = state_48495__$1;
(statearr_48614_50249[(2)] = null);

(statearr_48614_50249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (43))){
var state_48495__$1 = state_48495;
var statearr_48616_50250 = state_48495__$1;
(statearr_48616_50250[(2)] = null);

(statearr_48616_50250[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (29))){
var inst_48471 = (state_48495[(2)]);
var state_48495__$1 = state_48495;
var statearr_48619_50251 = state_48495__$1;
(statearr_48619_50251[(2)] = inst_48471);

(statearr_48619_50251[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (44))){
var inst_48484 = (state_48495[(2)]);
var state_48495__$1 = (function (){var statearr_48621 = state_48495;
(statearr_48621[(26)] = inst_48484);

return statearr_48621;
})();
var statearr_48622_50258 = state_48495__$1;
(statearr_48622_50258[(2)] = null);

(statearr_48622_50258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (6))){
var inst_48412 = (state_48495[(27)]);
var inst_48411 = cljs.core.deref(cs);
var inst_48412__$1 = cljs.core.keys(inst_48411);
var inst_48414 = cljs.core.count(inst_48412__$1);
var inst_48415 = cljs.core.reset_BANG_(dctr,inst_48414);
var inst_48420 = cljs.core.seq(inst_48412__$1);
var inst_48421 = inst_48420;
var inst_48422 = null;
var inst_48423 = (0);
var inst_48424 = (0);
var state_48495__$1 = (function (){var statearr_48626 = state_48495;
(statearr_48626[(28)] = inst_48415);

(statearr_48626[(9)] = inst_48422);

(statearr_48626[(19)] = inst_48423);

(statearr_48626[(20)] = inst_48421);

(statearr_48626[(27)] = inst_48412__$1);

(statearr_48626[(12)] = inst_48424);

return statearr_48626;
})();
var statearr_48628_50259 = state_48495__$1;
(statearr_48628_50259[(2)] = null);

(statearr_48628_50259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (28))){
var inst_48443 = (state_48495[(23)]);
var inst_48421 = (state_48495[(20)]);
var inst_48443__$1 = cljs.core.seq(inst_48421);
var state_48495__$1 = (function (){var statearr_48630 = state_48495;
(statearr_48630[(23)] = inst_48443__$1);

return statearr_48630;
})();
if(inst_48443__$1){
var statearr_48631_50260 = state_48495__$1;
(statearr_48631_50260[(1)] = (33));

} else {
var statearr_48632_50261 = state_48495__$1;
(statearr_48632_50261[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (25))){
var inst_48423 = (state_48495[(19)]);
var inst_48424 = (state_48495[(12)]);
var inst_48426 = (inst_48424 < inst_48423);
var inst_48427 = inst_48426;
var state_48495__$1 = state_48495;
if(cljs.core.truth_(inst_48427)){
var statearr_48636_50262 = state_48495__$1;
(statearr_48636_50262[(1)] = (27));

} else {
var statearr_48637_50263 = state_48495__$1;
(statearr_48637_50263[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (34))){
var state_48495__$1 = state_48495;
var statearr_48639_50264 = state_48495__$1;
(statearr_48639_50264[(2)] = null);

(statearr_48639_50264[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (17))){
var state_48495__$1 = state_48495;
var statearr_48642_50265 = state_48495__$1;
(statearr_48642_50265[(2)] = null);

(statearr_48642_50265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (3))){
var inst_48489 = (state_48495[(2)]);
var state_48495__$1 = state_48495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48495__$1,inst_48489);
} else {
if((state_val_48499 === (12))){
var inst_48404 = (state_48495[(2)]);
var state_48495__$1 = state_48495;
var statearr_48643_50266 = state_48495__$1;
(statearr_48643_50266[(2)] = inst_48404);

(statearr_48643_50266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (2))){
var state_48495__$1 = state_48495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48495__$1,(4),ch);
} else {
if((state_val_48499 === (23))){
var state_48495__$1 = state_48495;
var statearr_48644_50267 = state_48495__$1;
(statearr_48644_50267[(2)] = null);

(statearr_48644_50267[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (35))){
var inst_48469 = (state_48495[(2)]);
var state_48495__$1 = state_48495;
var statearr_48645_50272 = state_48495__$1;
(statearr_48645_50272[(2)] = inst_48469);

(statearr_48645_50272[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (19))){
var inst_48342 = (state_48495[(7)]);
var inst_48348 = cljs.core.chunk_first(inst_48342);
var inst_48349 = cljs.core.chunk_rest(inst_48342);
var inst_48350 = cljs.core.count(inst_48348);
var inst_48320 = inst_48349;
var inst_48321 = inst_48348;
var inst_48322 = inst_48350;
var inst_48323 = (0);
var state_48495__$1 = (function (){var statearr_48648 = state_48495;
(statearr_48648[(13)] = inst_48323);

(statearr_48648[(14)] = inst_48321);

(statearr_48648[(15)] = inst_48322);

(statearr_48648[(17)] = inst_48320);

return statearr_48648;
})();
var statearr_48649_50279 = state_48495__$1;
(statearr_48649_50279[(2)] = null);

(statearr_48649_50279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (11))){
var inst_48320 = (state_48495[(17)]);
var inst_48342 = (state_48495[(7)]);
var inst_48342__$1 = cljs.core.seq(inst_48320);
var state_48495__$1 = (function (){var statearr_48650 = state_48495;
(statearr_48650[(7)] = inst_48342__$1);

return statearr_48650;
})();
if(inst_48342__$1){
var statearr_48651_50280 = state_48495__$1;
(statearr_48651_50280[(1)] = (16));

} else {
var statearr_48652_50281 = state_48495__$1;
(statearr_48652_50281[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (9))){
var inst_48406 = (state_48495[(2)]);
var state_48495__$1 = state_48495;
var statearr_48657_50286 = state_48495__$1;
(statearr_48657_50286[(2)] = inst_48406);

(statearr_48657_50286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (5))){
var inst_48318 = cljs.core.deref(cs);
var inst_48319 = cljs.core.seq(inst_48318);
var inst_48320 = inst_48319;
var inst_48321 = null;
var inst_48322 = (0);
var inst_48323 = (0);
var state_48495__$1 = (function (){var statearr_48658 = state_48495;
(statearr_48658[(13)] = inst_48323);

(statearr_48658[(14)] = inst_48321);

(statearr_48658[(15)] = inst_48322);

(statearr_48658[(17)] = inst_48320);

return statearr_48658;
})();
var statearr_48663_50287 = state_48495__$1;
(statearr_48663_50287[(2)] = null);

(statearr_48663_50287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (14))){
var state_48495__$1 = state_48495;
var statearr_48665_50288 = state_48495__$1;
(statearr_48665_50288[(2)] = null);

(statearr_48665_50288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (45))){
var inst_48481 = (state_48495[(2)]);
var state_48495__$1 = state_48495;
var statearr_48666_50289 = state_48495__$1;
(statearr_48666_50289[(2)] = inst_48481);

(statearr_48666_50289[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (26))){
var inst_48412 = (state_48495[(27)]);
var inst_48474 = (state_48495[(2)]);
var inst_48477 = cljs.core.seq(inst_48412);
var state_48495__$1 = (function (){var statearr_48667 = state_48495;
(statearr_48667[(29)] = inst_48474);

return statearr_48667;
})();
if(inst_48477){
var statearr_48668_50290 = state_48495__$1;
(statearr_48668_50290[(1)] = (42));

} else {
var statearr_48669_50291 = state_48495__$1;
(statearr_48669_50291[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (16))){
var inst_48342 = (state_48495[(7)]);
var inst_48344 = cljs.core.chunked_seq_QMARK_(inst_48342);
var state_48495__$1 = state_48495;
if(inst_48344){
var statearr_48674_50292 = state_48495__$1;
(statearr_48674_50292[(1)] = (19));

} else {
var statearr_48675_50293 = state_48495__$1;
(statearr_48675_50293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (38))){
var inst_48466 = (state_48495[(2)]);
var state_48495__$1 = state_48495;
var statearr_48679_50294 = state_48495__$1;
(statearr_48679_50294[(2)] = inst_48466);

(statearr_48679_50294[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (30))){
var state_48495__$1 = state_48495;
var statearr_48681_50295 = state_48495__$1;
(statearr_48681_50295[(2)] = null);

(statearr_48681_50295[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (10))){
var inst_48323 = (state_48495[(13)]);
var inst_48321 = (state_48495[(14)]);
var inst_48331 = cljs.core._nth(inst_48321,inst_48323);
var inst_48332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48331,(0),null);
var inst_48333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48331,(1),null);
var state_48495__$1 = (function (){var statearr_48682 = state_48495;
(statearr_48682[(24)] = inst_48332);

return statearr_48682;
})();
if(cljs.core.truth_(inst_48333)){
var statearr_48686_50296 = state_48495__$1;
(statearr_48686_50296[(1)] = (13));

} else {
var statearr_48687_50297 = state_48495__$1;
(statearr_48687_50297[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (18))){
var inst_48402 = (state_48495[(2)]);
var state_48495__$1 = state_48495;
var statearr_48689_50298 = state_48495__$1;
(statearr_48689_50298[(2)] = inst_48402);

(statearr_48689_50298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (42))){
var state_48495__$1 = state_48495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48495__$1,(45),dchan);
} else {
if((state_val_48499 === (37))){
var inst_48443 = (state_48495[(23)]);
var inst_48455 = (state_48495[(22)]);
var inst_48311 = (state_48495[(11)]);
var inst_48455__$1 = cljs.core.first(inst_48443);
var inst_48457 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48455__$1,inst_48311,done);
var state_48495__$1 = (function (){var statearr_48694 = state_48495;
(statearr_48694[(22)] = inst_48455__$1);

return statearr_48694;
})();
if(cljs.core.truth_(inst_48457)){
var statearr_48695_50299 = state_48495__$1;
(statearr_48695_50299[(1)] = (39));

} else {
var statearr_48696_50305 = state_48495__$1;
(statearr_48696_50305[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (8))){
var inst_48323 = (state_48495[(13)]);
var inst_48322 = (state_48495[(15)]);
var inst_48325 = (inst_48323 < inst_48322);
var inst_48326 = inst_48325;
var state_48495__$1 = state_48495;
if(cljs.core.truth_(inst_48326)){
var statearr_48697_50307 = state_48495__$1;
(statearr_48697_50307[(1)] = (10));

} else {
var statearr_48701_50308 = state_48495__$1;
(statearr_48701_50308[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__47191__auto__ = null;
var cljs$core$async$mult_$_state_machine__47191__auto____0 = (function (){
var statearr_48703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48703[(0)] = cljs$core$async$mult_$_state_machine__47191__auto__);

(statearr_48703[(1)] = (1));

return statearr_48703;
});
var cljs$core$async$mult_$_state_machine__47191__auto____1 = (function (state_48495){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_48495);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e48705){var ex__47194__auto__ = e48705;
var statearr_48706_50309 = state_48495;
(statearr_48706_50309[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_48495[(4)]))){
var statearr_48707_50310 = state_48495;
(statearr_48707_50310[(1)] = cljs.core.first((state_48495[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50311 = state_48495;
state_48495 = G__50311;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47191__auto__ = function(state_48495){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47191__auto____1.call(this,state_48495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47191__auto____0;
cljs$core$async$mult_$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47191__auto____1;
return cljs$core$async$mult_$_state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_48708 = f__47648__auto__();
(statearr_48708[(6)] = c__47647__auto___50204);

return statearr_48708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48718 = arguments.length;
switch (G__48718) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_50313 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50313(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50314 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50314(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50315 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50315(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50316 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50316(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50317 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50317(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50318 = arguments.length;
var i__4865__auto___50319 = (0);
while(true){
if((i__4865__auto___50319 < len__4864__auto___50318)){
args__4870__auto__.push((arguments[i__4865__auto___50319]));

var G__50320 = (i__4865__auto___50319 + (1));
i__4865__auto___50319 = G__50320;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48765){
var map__48766 = p__48765;
var map__48766__$1 = cljs.core.__destructure_map(map__48766);
var opts = map__48766__$1;
var statearr_48767_50321 = state;
(statearr_48767_50321[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48772_50322 = state;
(statearr_48772_50322[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_48773_50323 = state;
(statearr_48773_50323[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48753){
var G__48754 = cljs.core.first(seq48753);
var seq48753__$1 = cljs.core.next(seq48753);
var G__48755 = cljs.core.first(seq48753__$1);
var seq48753__$2 = cljs.core.next(seq48753__$1);
var G__48756 = cljs.core.first(seq48753__$2);
var seq48753__$3 = cljs.core.next(seq48753__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48754,G__48755,G__48756,seq48753__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48786 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48787){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48787 = meta48787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48788,meta48787__$1){
var self__ = this;
var _48788__$1 = this;
return (new cljs.core.async.t_cljs$core$async48786(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48787__$1));
}));

(cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48788){
var self__ = this;
var _48788__$1 = this;
return self__.meta48787;
}));

(cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48787","meta48787",2072871576,null)], null);
}));

(cljs.core.async.t_cljs$core$async48786.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48786");

(cljs.core.async.t_cljs$core$async48786.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48786");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48786.
 */
cljs.core.async.__GT_t_cljs$core$async48786 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48786(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48787){
return (new cljs.core.async.t_cljs$core$async48786(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48787));
});

}

return (new cljs.core.async.t_cljs$core$async48786(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47647__auto___50341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_48859){
var state_val_48860 = (state_48859[(1)]);
if((state_val_48860 === (7))){
var inst_48819 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
if(cljs.core.truth_(inst_48819)){
var statearr_48861_50342 = state_48859__$1;
(statearr_48861_50342[(1)] = (8));

} else {
var statearr_48862_50343 = state_48859__$1;
(statearr_48862_50343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (20))){
var inst_48812 = (state_48859[(7)]);
var state_48859__$1 = state_48859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48859__$1,(23),out,inst_48812);
} else {
if((state_val_48860 === (1))){
var inst_48795 = calc_state();
var inst_48796 = cljs.core.__destructure_map(inst_48795);
var inst_48797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48796,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48796,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48796,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48800 = inst_48795;
var state_48859__$1 = (function (){var statearr_48865 = state_48859;
(statearr_48865[(8)] = inst_48799);

(statearr_48865[(9)] = inst_48798);

(statearr_48865[(10)] = inst_48800);

(statearr_48865[(11)] = inst_48797);

return statearr_48865;
})();
var statearr_48866_50348 = state_48859__$1;
(statearr_48866_50348[(2)] = null);

(statearr_48866_50348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (24))){
var inst_48803 = (state_48859[(12)]);
var inst_48800 = inst_48803;
var state_48859__$1 = (function (){var statearr_48867 = state_48859;
(statearr_48867[(10)] = inst_48800);

return statearr_48867;
})();
var statearr_48868_50349 = state_48859__$1;
(statearr_48868_50349[(2)] = null);

(statearr_48868_50349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (4))){
var inst_48814 = (state_48859[(13)]);
var inst_48812 = (state_48859[(7)]);
var inst_48811 = (state_48859[(2)]);
var inst_48812__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48811,(0),null);
var inst_48813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48811,(1),null);
var inst_48814__$1 = (inst_48812__$1 == null);
var state_48859__$1 = (function (){var statearr_48869 = state_48859;
(statearr_48869[(13)] = inst_48814__$1);

(statearr_48869[(7)] = inst_48812__$1);

(statearr_48869[(14)] = inst_48813);

return statearr_48869;
})();
if(cljs.core.truth_(inst_48814__$1)){
var statearr_48870_50351 = state_48859__$1;
(statearr_48870_50351[(1)] = (5));

} else {
var statearr_48871_50352 = state_48859__$1;
(statearr_48871_50352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (15))){
var inst_48833 = (state_48859[(15)]);
var inst_48804 = (state_48859[(16)]);
var inst_48833__$1 = cljs.core.empty_QMARK_(inst_48804);
var state_48859__$1 = (function (){var statearr_48872 = state_48859;
(statearr_48872[(15)] = inst_48833__$1);

return statearr_48872;
})();
if(inst_48833__$1){
var statearr_48873_50353 = state_48859__$1;
(statearr_48873_50353[(1)] = (17));

} else {
var statearr_48874_50354 = state_48859__$1;
(statearr_48874_50354[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (21))){
var inst_48803 = (state_48859[(12)]);
var inst_48800 = inst_48803;
var state_48859__$1 = (function (){var statearr_48875 = state_48859;
(statearr_48875[(10)] = inst_48800);

return statearr_48875;
})();
var statearr_48877_50355 = state_48859__$1;
(statearr_48877_50355[(2)] = null);

(statearr_48877_50355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (13))){
var inst_48826 = (state_48859[(2)]);
var inst_48827 = calc_state();
var inst_48800 = inst_48827;
var state_48859__$1 = (function (){var statearr_48878 = state_48859;
(statearr_48878[(17)] = inst_48826);

(statearr_48878[(10)] = inst_48800);

return statearr_48878;
})();
var statearr_48879_50360 = state_48859__$1;
(statearr_48879_50360[(2)] = null);

(statearr_48879_50360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (22))){
var inst_48853 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
var statearr_48880_50365 = state_48859__$1;
(statearr_48880_50365[(2)] = inst_48853);

(statearr_48880_50365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (6))){
var inst_48813 = (state_48859[(14)]);
var inst_48817 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48813,change);
var state_48859__$1 = state_48859;
var statearr_48881_50366 = state_48859__$1;
(statearr_48881_50366[(2)] = inst_48817);

(statearr_48881_50366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (25))){
var state_48859__$1 = state_48859;
var statearr_48882_50367 = state_48859__$1;
(statearr_48882_50367[(2)] = null);

(statearr_48882_50367[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (17))){
var inst_48813 = (state_48859[(14)]);
var inst_48805 = (state_48859[(18)]);
var inst_48835 = (inst_48805.cljs$core$IFn$_invoke$arity$1 ? inst_48805.cljs$core$IFn$_invoke$arity$1(inst_48813) : inst_48805.call(null,inst_48813));
var inst_48836 = cljs.core.not(inst_48835);
var state_48859__$1 = state_48859;
var statearr_48883_50369 = state_48859__$1;
(statearr_48883_50369[(2)] = inst_48836);

(statearr_48883_50369[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (3))){
var inst_48857 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48859__$1,inst_48857);
} else {
if((state_val_48860 === (12))){
var state_48859__$1 = state_48859;
var statearr_48884_50371 = state_48859__$1;
(statearr_48884_50371[(2)] = null);

(statearr_48884_50371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (2))){
var inst_48803 = (state_48859[(12)]);
var inst_48800 = (state_48859[(10)]);
var inst_48803__$1 = cljs.core.__destructure_map(inst_48800);
var inst_48804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48803__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48803__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48803__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48859__$1 = (function (){var statearr_48886 = state_48859;
(statearr_48886[(12)] = inst_48803__$1);

(statearr_48886[(16)] = inst_48804);

(statearr_48886[(18)] = inst_48805);

return statearr_48886;
})();
return cljs.core.async.ioc_alts_BANG_(state_48859__$1,(4),inst_48806);
} else {
if((state_val_48860 === (23))){
var inst_48844 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
if(cljs.core.truth_(inst_48844)){
var statearr_48887_50378 = state_48859__$1;
(statearr_48887_50378[(1)] = (24));

} else {
var statearr_48888_50379 = state_48859__$1;
(statearr_48888_50379[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (19))){
var inst_48839 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
var statearr_48889_50380 = state_48859__$1;
(statearr_48889_50380[(2)] = inst_48839);

(statearr_48889_50380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (11))){
var inst_48813 = (state_48859[(14)]);
var inst_48823 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48813);
var state_48859__$1 = state_48859;
var statearr_48890_50385 = state_48859__$1;
(statearr_48890_50385[(2)] = inst_48823);

(statearr_48890_50385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (9))){
var inst_48804 = (state_48859[(16)]);
var inst_48830 = (state_48859[(19)]);
var inst_48813 = (state_48859[(14)]);
var inst_48830__$1 = (inst_48804.cljs$core$IFn$_invoke$arity$1 ? inst_48804.cljs$core$IFn$_invoke$arity$1(inst_48813) : inst_48804.call(null,inst_48813));
var state_48859__$1 = (function (){var statearr_48892 = state_48859;
(statearr_48892[(19)] = inst_48830__$1);

return statearr_48892;
})();
if(cljs.core.truth_(inst_48830__$1)){
var statearr_48894_50386 = state_48859__$1;
(statearr_48894_50386[(1)] = (14));

} else {
var statearr_48895_50388 = state_48859__$1;
(statearr_48895_50388[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (5))){
var inst_48814 = (state_48859[(13)]);
var state_48859__$1 = state_48859;
var statearr_48896_50389 = state_48859__$1;
(statearr_48896_50389[(2)] = inst_48814);

(statearr_48896_50389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (14))){
var inst_48830 = (state_48859[(19)]);
var state_48859__$1 = state_48859;
var statearr_48897_50390 = state_48859__$1;
(statearr_48897_50390[(2)] = inst_48830);

(statearr_48897_50390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (26))){
var inst_48849 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
var statearr_48898_50391 = state_48859__$1;
(statearr_48898_50391[(2)] = inst_48849);

(statearr_48898_50391[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (16))){
var inst_48841 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
if(cljs.core.truth_(inst_48841)){
var statearr_48899_50392 = state_48859__$1;
(statearr_48899_50392[(1)] = (20));

} else {
var statearr_48900_50393 = state_48859__$1;
(statearr_48900_50393[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (10))){
var inst_48855 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
var statearr_48901_50394 = state_48859__$1;
(statearr_48901_50394[(2)] = inst_48855);

(statearr_48901_50394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (18))){
var inst_48833 = (state_48859[(15)]);
var state_48859__$1 = state_48859;
var statearr_48902_50399 = state_48859__$1;
(statearr_48902_50399[(2)] = inst_48833);

(statearr_48902_50399[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (8))){
var inst_48812 = (state_48859[(7)]);
var inst_48821 = (inst_48812 == null);
var state_48859__$1 = state_48859;
if(cljs.core.truth_(inst_48821)){
var statearr_48903_50400 = state_48859__$1;
(statearr_48903_50400[(1)] = (11));

} else {
var statearr_48904_50401 = state_48859__$1;
(statearr_48904_50401[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__47191__auto__ = null;
var cljs$core$async$mix_$_state_machine__47191__auto____0 = (function (){
var statearr_48905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48905[(0)] = cljs$core$async$mix_$_state_machine__47191__auto__);

(statearr_48905[(1)] = (1));

return statearr_48905;
});
var cljs$core$async$mix_$_state_machine__47191__auto____1 = (function (state_48859){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_48859);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e48906){var ex__47194__auto__ = e48906;
var statearr_48907_50403 = state_48859;
(statearr_48907_50403[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_48859[(4)]))){
var statearr_48908_50404 = state_48859;
(statearr_48908_50404[(1)] = cljs.core.first((state_48859[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50406 = state_48859;
state_48859 = G__50406;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47191__auto__ = function(state_48859){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47191__auto____1.call(this,state_48859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47191__auto____0;
cljs$core$async$mix_$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47191__auto____1;
return cljs$core$async$mix_$_state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_48909 = f__47648__auto__();
(statearr_48909[(6)] = c__47647__auto___50341);

return statearr_48909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_50407 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50407(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50408 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50408(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50410 = (function() {
var G__50411 = null;
var G__50411__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50411__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50411 = function(p,v){
switch(arguments.length){
case 1:
return G__50411__1.call(this,p);
case 2:
return G__50411__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50411.cljs$core$IFn$_invoke$arity$1 = G__50411__1;
G__50411.cljs$core$IFn$_invoke$arity$2 = G__50411__2;
return G__50411;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48925 = arguments.length;
switch (G__48925) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50410(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50410(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48947 = arguments.length;
switch (G__48947) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48939_SHARP_){
if(cljs.core.truth_((p1__48939_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48939_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48939_SHARP_.call(null,topic)))){
return p1__48939_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48939_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48958 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48959){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48959 = meta48959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48960,meta48959__$1){
var self__ = this;
var _48960__$1 = this;
return (new cljs.core.async.t_cljs$core$async48958(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48959__$1));
}));

(cljs.core.async.t_cljs$core$async48958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48960){
var self__ = this;
var _48960__$1 = this;
return self__.meta48959;
}));

(cljs.core.async.t_cljs$core$async48958.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48958.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48958.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48958.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48958.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48958.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48959","meta48959",1303404017,null)], null);
}));

(cljs.core.async.t_cljs$core$async48958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48958");

(cljs.core.async.t_cljs$core$async48958.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48958.
 */
cljs.core.async.__GT_t_cljs$core$async48958 = (function cljs$core$async$__GT_t_cljs$core$async48958(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48959){
return (new cljs.core.async.t_cljs$core$async48958(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48959));
});

}

return (new cljs.core.async.t_cljs$core$async48958(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47647__auto___50468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_49047){
var state_val_49048 = (state_49047[(1)]);
if((state_val_49048 === (7))){
var inst_49043 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
var statearr_49049_50476 = state_49047__$1;
(statearr_49049_50476[(2)] = inst_49043);

(statearr_49049_50476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (20))){
var state_49047__$1 = state_49047;
var statearr_49050_50486 = state_49047__$1;
(statearr_49050_50486[(2)] = null);

(statearr_49050_50486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (1))){
var state_49047__$1 = state_49047;
var statearr_49051_50487 = state_49047__$1;
(statearr_49051_50487[(2)] = null);

(statearr_49051_50487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (24))){
var inst_49025 = (state_49047[(7)]);
var inst_49035 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49025);
var state_49047__$1 = state_49047;
var statearr_49052_50488 = state_49047__$1;
(statearr_49052_50488[(2)] = inst_49035);

(statearr_49052_50488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (4))){
var inst_48970 = (state_49047[(8)]);
var inst_48970__$1 = (state_49047[(2)]);
var inst_48971 = (inst_48970__$1 == null);
var state_49047__$1 = (function (){var statearr_49053 = state_49047;
(statearr_49053[(8)] = inst_48970__$1);

return statearr_49053;
})();
if(cljs.core.truth_(inst_48971)){
var statearr_49054_50493 = state_49047__$1;
(statearr_49054_50493[(1)] = (5));

} else {
var statearr_49056_50497 = state_49047__$1;
(statearr_49056_50497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (15))){
var inst_49018 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
var statearr_49058_50502 = state_49047__$1;
(statearr_49058_50502[(2)] = inst_49018);

(statearr_49058_50502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (21))){
var inst_49040 = (state_49047[(2)]);
var state_49047__$1 = (function (){var statearr_49059 = state_49047;
(statearr_49059[(9)] = inst_49040);

return statearr_49059;
})();
var statearr_49060_50503 = state_49047__$1;
(statearr_49060_50503[(2)] = null);

(statearr_49060_50503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (13))){
var inst_48998 = (state_49047[(10)]);
var inst_49000 = cljs.core.chunked_seq_QMARK_(inst_48998);
var state_49047__$1 = state_49047;
if(inst_49000){
var statearr_49061_50507 = state_49047__$1;
(statearr_49061_50507[(1)] = (16));

} else {
var statearr_49062_50512 = state_49047__$1;
(statearr_49062_50512[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (22))){
var inst_49031 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
if(cljs.core.truth_(inst_49031)){
var statearr_49064_50516 = state_49047__$1;
(statearr_49064_50516[(1)] = (23));

} else {
var statearr_49065_50521 = state_49047__$1;
(statearr_49065_50521[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (6))){
var inst_48970 = (state_49047[(8)]);
var inst_49025 = (state_49047[(7)]);
var inst_49027 = (state_49047[(11)]);
var inst_49025__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48970) : topic_fn.call(null,inst_48970));
var inst_49026 = cljs.core.deref(mults);
var inst_49027__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49026,inst_49025__$1);
var state_49047__$1 = (function (){var statearr_49070 = state_49047;
(statearr_49070[(7)] = inst_49025__$1);

(statearr_49070[(11)] = inst_49027__$1);

return statearr_49070;
})();
if(cljs.core.truth_(inst_49027__$1)){
var statearr_49071_50525 = state_49047__$1;
(statearr_49071_50525[(1)] = (19));

} else {
var statearr_49072_50526 = state_49047__$1;
(statearr_49072_50526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (25))){
var inst_49037 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
var statearr_49073_50535 = state_49047__$1;
(statearr_49073_50535[(2)] = inst_49037);

(statearr_49073_50535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (17))){
var inst_48998 = (state_49047[(10)]);
var inst_49009 = cljs.core.first(inst_48998);
var inst_49010 = cljs.core.async.muxch_STAR_(inst_49009);
var inst_49011 = cljs.core.async.close_BANG_(inst_49010);
var inst_49012 = cljs.core.next(inst_48998);
var inst_48980 = inst_49012;
var inst_48981 = null;
var inst_48982 = (0);
var inst_48983 = (0);
var state_49047__$1 = (function (){var statearr_49074 = state_49047;
(statearr_49074[(12)] = inst_49011);

(statearr_49074[(13)] = inst_48980);

(statearr_49074[(14)] = inst_48981);

(statearr_49074[(15)] = inst_48983);

(statearr_49074[(16)] = inst_48982);

return statearr_49074;
})();
var statearr_49075_50543 = state_49047__$1;
(statearr_49075_50543[(2)] = null);

(statearr_49075_50543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (3))){
var inst_49045 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49047__$1,inst_49045);
} else {
if((state_val_49048 === (12))){
var inst_49020 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
var statearr_49076_50544 = state_49047__$1;
(statearr_49076_50544[(2)] = inst_49020);

(statearr_49076_50544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (2))){
var state_49047__$1 = state_49047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49047__$1,(4),ch);
} else {
if((state_val_49048 === (23))){
var state_49047__$1 = state_49047;
var statearr_49077_50548 = state_49047__$1;
(statearr_49077_50548[(2)] = null);

(statearr_49077_50548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (19))){
var inst_48970 = (state_49047[(8)]);
var inst_49027 = (state_49047[(11)]);
var inst_49029 = cljs.core.async.muxch_STAR_(inst_49027);
var state_49047__$1 = state_49047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49047__$1,(22),inst_49029,inst_48970);
} else {
if((state_val_49048 === (11))){
var inst_48980 = (state_49047[(13)]);
var inst_48998 = (state_49047[(10)]);
var inst_48998__$1 = cljs.core.seq(inst_48980);
var state_49047__$1 = (function (){var statearr_49078 = state_49047;
(statearr_49078[(10)] = inst_48998__$1);

return statearr_49078;
})();
if(inst_48998__$1){
var statearr_49079_50549 = state_49047__$1;
(statearr_49079_50549[(1)] = (13));

} else {
var statearr_49080_50551 = state_49047__$1;
(statearr_49080_50551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (9))){
var inst_49022 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
var statearr_49081_50557 = state_49047__$1;
(statearr_49081_50557[(2)] = inst_49022);

(statearr_49081_50557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (5))){
var inst_48977 = cljs.core.deref(mults);
var inst_48978 = cljs.core.vals(inst_48977);
var inst_48979 = cljs.core.seq(inst_48978);
var inst_48980 = inst_48979;
var inst_48981 = null;
var inst_48982 = (0);
var inst_48983 = (0);
var state_49047__$1 = (function (){var statearr_49082 = state_49047;
(statearr_49082[(13)] = inst_48980);

(statearr_49082[(14)] = inst_48981);

(statearr_49082[(15)] = inst_48983);

(statearr_49082[(16)] = inst_48982);

return statearr_49082;
})();
var statearr_49083_50558 = state_49047__$1;
(statearr_49083_50558[(2)] = null);

(statearr_49083_50558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (14))){
var state_49047__$1 = state_49047;
var statearr_49087_50560 = state_49047__$1;
(statearr_49087_50560[(2)] = null);

(statearr_49087_50560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (16))){
var inst_48998 = (state_49047[(10)]);
var inst_49004 = cljs.core.chunk_first(inst_48998);
var inst_49005 = cljs.core.chunk_rest(inst_48998);
var inst_49006 = cljs.core.count(inst_49004);
var inst_48980 = inst_49005;
var inst_48981 = inst_49004;
var inst_48982 = inst_49006;
var inst_48983 = (0);
var state_49047__$1 = (function (){var statearr_49089 = state_49047;
(statearr_49089[(13)] = inst_48980);

(statearr_49089[(14)] = inst_48981);

(statearr_49089[(15)] = inst_48983);

(statearr_49089[(16)] = inst_48982);

return statearr_49089;
})();
var statearr_49093_50569 = state_49047__$1;
(statearr_49093_50569[(2)] = null);

(statearr_49093_50569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (10))){
var inst_48980 = (state_49047[(13)]);
var inst_48981 = (state_49047[(14)]);
var inst_48983 = (state_49047[(15)]);
var inst_48982 = (state_49047[(16)]);
var inst_48992 = cljs.core._nth(inst_48981,inst_48983);
var inst_48993 = cljs.core.async.muxch_STAR_(inst_48992);
var inst_48994 = cljs.core.async.close_BANG_(inst_48993);
var inst_48995 = (inst_48983 + (1));
var tmp49084 = inst_48980;
var tmp49085 = inst_48981;
var tmp49086 = inst_48982;
var inst_48980__$1 = tmp49084;
var inst_48981__$1 = tmp49085;
var inst_48982__$1 = tmp49086;
var inst_48983__$1 = inst_48995;
var state_49047__$1 = (function (){var statearr_49095 = state_49047;
(statearr_49095[(17)] = inst_48994);

(statearr_49095[(13)] = inst_48980__$1);

(statearr_49095[(14)] = inst_48981__$1);

(statearr_49095[(15)] = inst_48983__$1);

(statearr_49095[(16)] = inst_48982__$1);

return statearr_49095;
})();
var statearr_49096_50571 = state_49047__$1;
(statearr_49096_50571[(2)] = null);

(statearr_49096_50571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (18))){
var inst_49015 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
var statearr_49098_50572 = state_49047__$1;
(statearr_49098_50572[(2)] = inst_49015);

(statearr_49098_50572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (8))){
var inst_48983 = (state_49047[(15)]);
var inst_48982 = (state_49047[(16)]);
var inst_48986 = (inst_48983 < inst_48982);
var inst_48987 = inst_48986;
var state_49047__$1 = state_49047;
if(cljs.core.truth_(inst_48987)){
var statearr_49100_50575 = state_49047__$1;
(statearr_49100_50575[(1)] = (10));

} else {
var statearr_49101_50576 = state_49047__$1;
(statearr_49101_50576[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_49102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49102[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_49102[(1)] = (1));

return statearr_49102;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_49047){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_49047);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e49103){var ex__47194__auto__ = e49103;
var statearr_49105_50579 = state_49047;
(statearr_49105_50579[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_49047[(4)]))){
var statearr_49106_50581 = state_49047;
(statearr_49106_50581[(1)] = cljs.core.first((state_49047[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50582 = state_49047;
state_49047 = G__50582;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_49047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_49047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_49111 = f__47648__auto__();
(statearr_49111[(6)] = c__47647__auto___50468);

return statearr_49111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49113 = arguments.length;
switch (G__49113) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49115 = arguments.length;
switch (G__49115) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49122 = arguments.length;
switch (G__49122) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__47647__auto___50597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_49173){
var state_val_49174 = (state_49173[(1)]);
if((state_val_49174 === (7))){
var state_49173__$1 = state_49173;
var statearr_49175_50600 = state_49173__$1;
(statearr_49175_50600[(2)] = null);

(statearr_49175_50600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (1))){
var state_49173__$1 = state_49173;
var statearr_49176_50601 = state_49173__$1;
(statearr_49176_50601[(2)] = null);

(statearr_49176_50601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (4))){
var inst_49128 = (state_49173[(7)]);
var inst_49129 = (state_49173[(8)]);
var inst_49131 = (inst_49129 < inst_49128);
var state_49173__$1 = state_49173;
if(cljs.core.truth_(inst_49131)){
var statearr_49177_50602 = state_49173__$1;
(statearr_49177_50602[(1)] = (6));

} else {
var statearr_49178_50603 = state_49173__$1;
(statearr_49178_50603[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (15))){
var inst_49159 = (state_49173[(9)]);
var inst_49164 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49159);
var state_49173__$1 = state_49173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49173__$1,(17),out,inst_49164);
} else {
if((state_val_49174 === (13))){
var inst_49159 = (state_49173[(9)]);
var inst_49159__$1 = (state_49173[(2)]);
var inst_49160 = cljs.core.some(cljs.core.nil_QMARK_,inst_49159__$1);
var state_49173__$1 = (function (){var statearr_49179 = state_49173;
(statearr_49179[(9)] = inst_49159__$1);

return statearr_49179;
})();
if(cljs.core.truth_(inst_49160)){
var statearr_49180_50604 = state_49173__$1;
(statearr_49180_50604[(1)] = (14));

} else {
var statearr_49181_50606 = state_49173__$1;
(statearr_49181_50606[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (6))){
var state_49173__$1 = state_49173;
var statearr_49182_50607 = state_49173__$1;
(statearr_49182_50607[(2)] = null);

(statearr_49182_50607[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (17))){
var inst_49166 = (state_49173[(2)]);
var state_49173__$1 = (function (){var statearr_49184 = state_49173;
(statearr_49184[(10)] = inst_49166);

return statearr_49184;
})();
var statearr_49185_50609 = state_49173__$1;
(statearr_49185_50609[(2)] = null);

(statearr_49185_50609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (3))){
var inst_49171 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49173__$1,inst_49171);
} else {
if((state_val_49174 === (12))){
var _ = (function (){var statearr_49186 = state_49173;
(statearr_49186[(4)] = cljs.core.rest((state_49173[(4)])));

return statearr_49186;
})();
var state_49173__$1 = state_49173;
var ex49183 = (state_49173__$1[(2)]);
var statearr_49187_50610 = state_49173__$1;
(statearr_49187_50610[(5)] = ex49183);


if((ex49183 instanceof Object)){
var statearr_49188_50611 = state_49173__$1;
(statearr_49188_50611[(1)] = (11));

(statearr_49188_50611[(5)] = null);

} else {
throw ex49183;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (2))){
var inst_49127 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49128 = cnt;
var inst_49129 = (0);
var state_49173__$1 = (function (){var statearr_49189 = state_49173;
(statearr_49189[(7)] = inst_49128);

(statearr_49189[(11)] = inst_49127);

(statearr_49189[(8)] = inst_49129);

return statearr_49189;
})();
var statearr_49190_50614 = state_49173__$1;
(statearr_49190_50614[(2)] = null);

(statearr_49190_50614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (11))){
var inst_49135 = (state_49173[(2)]);
var inst_49136 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49173__$1 = (function (){var statearr_49191 = state_49173;
(statearr_49191[(12)] = inst_49135);

return statearr_49191;
})();
var statearr_49192_50615 = state_49173__$1;
(statearr_49192_50615[(2)] = inst_49136);

(statearr_49192_50615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (9))){
var inst_49129 = (state_49173[(8)]);
var _ = (function (){var statearr_49193 = state_49173;
(statearr_49193[(4)] = cljs.core.cons((12),(state_49173[(4)])));

return statearr_49193;
})();
var inst_49142 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49129) : chs__$1.call(null,inst_49129));
var inst_49143 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49129) : done.call(null,inst_49129));
var inst_49144 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49142,inst_49143);
var ___$1 = (function (){var statearr_49194 = state_49173;
(statearr_49194[(4)] = cljs.core.rest((state_49173[(4)])));

return statearr_49194;
})();
var state_49173__$1 = state_49173;
var statearr_49195_50618 = state_49173__$1;
(statearr_49195_50618[(2)] = inst_49144);

(statearr_49195_50618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (5))){
var inst_49157 = (state_49173[(2)]);
var state_49173__$1 = (function (){var statearr_49196 = state_49173;
(statearr_49196[(13)] = inst_49157);

return statearr_49196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49173__$1,(13),dchan);
} else {
if((state_val_49174 === (14))){
var inst_49162 = cljs.core.async.close_BANG_(out);
var state_49173__$1 = state_49173;
var statearr_49197_50619 = state_49173__$1;
(statearr_49197_50619[(2)] = inst_49162);

(statearr_49197_50619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (16))){
var inst_49169 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
var statearr_49198_50622 = state_49173__$1;
(statearr_49198_50622[(2)] = inst_49169);

(statearr_49198_50622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (10))){
var inst_49129 = (state_49173[(8)]);
var inst_49147 = (state_49173[(2)]);
var inst_49151 = (inst_49129 + (1));
var inst_49129__$1 = inst_49151;
var state_49173__$1 = (function (){var statearr_49200 = state_49173;
(statearr_49200[(8)] = inst_49129__$1);

(statearr_49200[(14)] = inst_49147);

return statearr_49200;
})();
var statearr_49201_50625 = state_49173__$1;
(statearr_49201_50625[(2)] = null);

(statearr_49201_50625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (8))){
var inst_49155 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
var statearr_49202_50626 = state_49173__$1;
(statearr_49202_50626[(2)] = inst_49155);

(statearr_49202_50626[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_49203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49203[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_49203[(1)] = (1));

return statearr_49203;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_49173){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_49173);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e49204){var ex__47194__auto__ = e49204;
var statearr_49205_50634 = state_49173;
(statearr_49205_50634[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_49173[(4)]))){
var statearr_49206_50637 = state_49173;
(statearr_49206_50637[(1)] = cljs.core.first((state_49173[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50638 = state_49173;
state_49173 = G__50638;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_49173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_49173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_49207 = f__47648__auto__();
(statearr_49207[(6)] = c__47647__auto___50597);

return statearr_49207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49213 = arguments.length;
switch (G__49213) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47647__auto___50644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_49249){
var state_val_49250 = (state_49249[(1)]);
if((state_val_49250 === (7))){
var inst_49228 = (state_49249[(7)]);
var inst_49229 = (state_49249[(8)]);
var inst_49228__$1 = (state_49249[(2)]);
var inst_49229__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49228__$1,(0),null);
var inst_49230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49228__$1,(1),null);
var inst_49231 = (inst_49229__$1 == null);
var state_49249__$1 = (function (){var statearr_49251 = state_49249;
(statearr_49251[(7)] = inst_49228__$1);

(statearr_49251[(8)] = inst_49229__$1);

(statearr_49251[(9)] = inst_49230);

return statearr_49251;
})();
if(cljs.core.truth_(inst_49231)){
var statearr_49252_50650 = state_49249__$1;
(statearr_49252_50650[(1)] = (8));

} else {
var statearr_49253_50651 = state_49249__$1;
(statearr_49253_50651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (1))){
var inst_49218 = cljs.core.vec(chs);
var inst_49219 = inst_49218;
var state_49249__$1 = (function (){var statearr_49254 = state_49249;
(statearr_49254[(10)] = inst_49219);

return statearr_49254;
})();
var statearr_49255_50657 = state_49249__$1;
(statearr_49255_50657[(2)] = null);

(statearr_49255_50657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (4))){
var inst_49219 = (state_49249[(10)]);
var state_49249__$1 = state_49249;
return cljs.core.async.ioc_alts_BANG_(state_49249__$1,(7),inst_49219);
} else {
if((state_val_49250 === (6))){
var inst_49245 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49256_50663 = state_49249__$1;
(statearr_49256_50663[(2)] = inst_49245);

(statearr_49256_50663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (3))){
var inst_49247 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49249__$1,inst_49247);
} else {
if((state_val_49250 === (2))){
var inst_49219 = (state_49249[(10)]);
var inst_49221 = cljs.core.count(inst_49219);
var inst_49222 = (inst_49221 > (0));
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_49222)){
var statearr_49258_50676 = state_49249__$1;
(statearr_49258_50676[(1)] = (4));

} else {
var statearr_49259_50677 = state_49249__$1;
(statearr_49259_50677[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (11))){
var inst_49219 = (state_49249[(10)]);
var inst_49238 = (state_49249[(2)]);
var tmp49257 = inst_49219;
var inst_49219__$1 = tmp49257;
var state_49249__$1 = (function (){var statearr_49274 = state_49249;
(statearr_49274[(10)] = inst_49219__$1);

(statearr_49274[(11)] = inst_49238);

return statearr_49274;
})();
var statearr_49275_50678 = state_49249__$1;
(statearr_49275_50678[(2)] = null);

(statearr_49275_50678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (9))){
var inst_49229 = (state_49249[(8)]);
var state_49249__$1 = state_49249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49249__$1,(11),out,inst_49229);
} else {
if((state_val_49250 === (5))){
var inst_49243 = cljs.core.async.close_BANG_(out);
var state_49249__$1 = state_49249;
var statearr_49282_50679 = state_49249__$1;
(statearr_49282_50679[(2)] = inst_49243);

(statearr_49282_50679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (10))){
var inst_49241 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49283_50680 = state_49249__$1;
(statearr_49283_50680[(2)] = inst_49241);

(statearr_49283_50680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (8))){
var inst_49228 = (state_49249[(7)]);
var inst_49229 = (state_49249[(8)]);
var inst_49219 = (state_49249[(10)]);
var inst_49230 = (state_49249[(9)]);
var inst_49233 = (function (){var cs = inst_49219;
var vec__49224 = inst_49228;
var v = inst_49229;
var c = inst_49230;
return (function (p1__49211_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49211_SHARP_);
});
})();
var inst_49234 = cljs.core.filterv(inst_49233,inst_49219);
var inst_49219__$1 = inst_49234;
var state_49249__$1 = (function (){var statearr_49298 = state_49249;
(statearr_49298[(10)] = inst_49219__$1);

return statearr_49298;
})();
var statearr_49299_50686 = state_49249__$1;
(statearr_49299_50686[(2)] = null);

(statearr_49299_50686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_49306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49306[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_49306[(1)] = (1));

return statearr_49306;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_49249){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_49249);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e49307){var ex__47194__auto__ = e49307;
var statearr_49308_50687 = state_49249;
(statearr_49308_50687[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_49249[(4)]))){
var statearr_49309_50688 = state_49249;
(statearr_49309_50688[(1)] = cljs.core.first((state_49249[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50689 = state_49249;
state_49249 = G__50689;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_49249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_49249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_49312 = f__47648__auto__();
(statearr_49312[(6)] = c__47647__auto___50644);

return statearr_49312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49315 = arguments.length;
switch (G__49315) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47647__auto___50696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_49342){
var state_val_49343 = (state_49342[(1)]);
if((state_val_49343 === (7))){
var inst_49324 = (state_49342[(7)]);
var inst_49324__$1 = (state_49342[(2)]);
var inst_49325 = (inst_49324__$1 == null);
var inst_49326 = cljs.core.not(inst_49325);
var state_49342__$1 = (function (){var statearr_49344 = state_49342;
(statearr_49344[(7)] = inst_49324__$1);

return statearr_49344;
})();
if(inst_49326){
var statearr_49345_50698 = state_49342__$1;
(statearr_49345_50698[(1)] = (8));

} else {
var statearr_49346_50699 = state_49342__$1;
(statearr_49346_50699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49343 === (1))){
var inst_49319 = (0);
var state_49342__$1 = (function (){var statearr_49347 = state_49342;
(statearr_49347[(8)] = inst_49319);

return statearr_49347;
})();
var statearr_49348_50700 = state_49342__$1;
(statearr_49348_50700[(2)] = null);

(statearr_49348_50700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49343 === (4))){
var state_49342__$1 = state_49342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49342__$1,(7),ch);
} else {
if((state_val_49343 === (6))){
var inst_49337 = (state_49342[(2)]);
var state_49342__$1 = state_49342;
var statearr_49349_50705 = state_49342__$1;
(statearr_49349_50705[(2)] = inst_49337);

(statearr_49349_50705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49343 === (3))){
var inst_49339 = (state_49342[(2)]);
var inst_49340 = cljs.core.async.close_BANG_(out);
var state_49342__$1 = (function (){var statearr_49350 = state_49342;
(statearr_49350[(9)] = inst_49339);

return statearr_49350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49342__$1,inst_49340);
} else {
if((state_val_49343 === (2))){
var inst_49319 = (state_49342[(8)]);
var inst_49321 = (inst_49319 < n);
var state_49342__$1 = state_49342;
if(cljs.core.truth_(inst_49321)){
var statearr_49351_50718 = state_49342__$1;
(statearr_49351_50718[(1)] = (4));

} else {
var statearr_49352_50720 = state_49342__$1;
(statearr_49352_50720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49343 === (11))){
var inst_49319 = (state_49342[(8)]);
var inst_49329 = (state_49342[(2)]);
var inst_49330 = (inst_49319 + (1));
var inst_49319__$1 = inst_49330;
var state_49342__$1 = (function (){var statearr_49353 = state_49342;
(statearr_49353[(8)] = inst_49319__$1);

(statearr_49353[(10)] = inst_49329);

return statearr_49353;
})();
var statearr_49354_50726 = state_49342__$1;
(statearr_49354_50726[(2)] = null);

(statearr_49354_50726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49343 === (9))){
var state_49342__$1 = state_49342;
var statearr_49355_50727 = state_49342__$1;
(statearr_49355_50727[(2)] = null);

(statearr_49355_50727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49343 === (5))){
var state_49342__$1 = state_49342;
var statearr_49356_50728 = state_49342__$1;
(statearr_49356_50728[(2)] = null);

(statearr_49356_50728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49343 === (10))){
var inst_49334 = (state_49342[(2)]);
var state_49342__$1 = state_49342;
var statearr_49357_50729 = state_49342__$1;
(statearr_49357_50729[(2)] = inst_49334);

(statearr_49357_50729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49343 === (8))){
var inst_49324 = (state_49342[(7)]);
var state_49342__$1 = state_49342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49342__$1,(11),out,inst_49324);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_49358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49358[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_49358[(1)] = (1));

return statearr_49358;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_49342){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_49342);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e49359){var ex__47194__auto__ = e49359;
var statearr_49360_50741 = state_49342;
(statearr_49360_50741[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_49342[(4)]))){
var statearr_49361_50742 = state_49342;
(statearr_49361_50742[(1)] = cljs.core.first((state_49342[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50749 = state_49342;
state_49342 = G__50749;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_49342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_49342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_49362 = f__47648__auto__();
(statearr_49362[(6)] = c__47647__auto___50696);

return statearr_49362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49364 = (function (f,ch,meta49365){
this.f = f;
this.ch = ch;
this.meta49365 = meta49365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49366,meta49365__$1){
var self__ = this;
var _49366__$1 = this;
return (new cljs.core.async.t_cljs$core$async49364(self__.f,self__.ch,meta49365__$1));
}));

(cljs.core.async.t_cljs$core$async49364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49366){
var self__ = this;
var _49366__$1 = this;
return self__.meta49365;
}));

(cljs.core.async.t_cljs$core$async49364.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49364.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49364.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49367 = (function (f,ch,meta49365,_,fn1,meta49368){
this.f = f;
this.ch = ch;
this.meta49365 = meta49365;
this._ = _;
this.fn1 = fn1;
this.meta49368 = meta49368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49369,meta49368__$1){
var self__ = this;
var _49369__$1 = this;
return (new cljs.core.async.t_cljs$core$async49367(self__.f,self__.ch,self__.meta49365,self__._,self__.fn1,meta49368__$1));
}));

(cljs.core.async.t_cljs$core$async49367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49369){
var self__ = this;
var _49369__$1 = this;
return self__.meta49368;
}));

(cljs.core.async.t_cljs$core$async49367.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49367.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49363_SHARP_){
var G__49370 = (((p1__49363_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49363_SHARP_) : self__.f.call(null,p1__49363_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49370) : f1.call(null,G__49370));
});
}));

(cljs.core.async.t_cljs$core$async49367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49365","meta49365",-604044192,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49364","cljs.core.async/t_cljs$core$async49364",-1824402073,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49368","meta49368",1640468405,null)], null);
}));

(cljs.core.async.t_cljs$core$async49367.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49367");

(cljs.core.async.t_cljs$core$async49367.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49367");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49367.
 */
cljs.core.async.__GT_t_cljs$core$async49367 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49367(f__$1,ch__$1,meta49365__$1,___$2,fn1__$1,meta49368){
return (new cljs.core.async.t_cljs$core$async49367(f__$1,ch__$1,meta49365__$1,___$2,fn1__$1,meta49368));
});

}

return (new cljs.core.async.t_cljs$core$async49367(self__.f,self__.ch,self__.meta49365,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49371 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49371) : self__.f.call(null,G__49371));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49364.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49365","meta49365",-604044192,null)], null);
}));

(cljs.core.async.t_cljs$core$async49364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49364");

(cljs.core.async.t_cljs$core$async49364.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49364.
 */
cljs.core.async.__GT_t_cljs$core$async49364 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49364(f__$1,ch__$1,meta49365){
return (new cljs.core.async.t_cljs$core$async49364(f__$1,ch__$1,meta49365));
});

}

return (new cljs.core.async.t_cljs$core$async49364(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49372 = (function (f,ch,meta49373){
this.f = f;
this.ch = ch;
this.meta49373 = meta49373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49374,meta49373__$1){
var self__ = this;
var _49374__$1 = this;
return (new cljs.core.async.t_cljs$core$async49372(self__.f,self__.ch,meta49373__$1));
}));

(cljs.core.async.t_cljs$core$async49372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49374){
var self__ = this;
var _49374__$1 = this;
return self__.meta49373;
}));

(cljs.core.async.t_cljs$core$async49372.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49372.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49372.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49373","meta49373",-1212472085,null)], null);
}));

(cljs.core.async.t_cljs$core$async49372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49372");

(cljs.core.async.t_cljs$core$async49372.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49372.
 */
cljs.core.async.__GT_t_cljs$core$async49372 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49372(f__$1,ch__$1,meta49373){
return (new cljs.core.async.t_cljs$core$async49372(f__$1,ch__$1,meta49373));
});

}

return (new cljs.core.async.t_cljs$core$async49372(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49386 = (function (p,ch,meta49387){
this.p = p;
this.ch = ch;
this.meta49387 = meta49387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49388,meta49387__$1){
var self__ = this;
var _49388__$1 = this;
return (new cljs.core.async.t_cljs$core$async49386(self__.p,self__.ch,meta49387__$1));
}));

(cljs.core.async.t_cljs$core$async49386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49388){
var self__ = this;
var _49388__$1 = this;
return self__.meta49387;
}));

(cljs.core.async.t_cljs$core$async49386.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49386.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49386.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49386.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49387","meta49387",155964476,null)], null);
}));

(cljs.core.async.t_cljs$core$async49386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49386");

(cljs.core.async.t_cljs$core$async49386.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49386.
 */
cljs.core.async.__GT_t_cljs$core$async49386 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49386(p__$1,ch__$1,meta49387){
return (new cljs.core.async.t_cljs$core$async49386(p__$1,ch__$1,meta49387));
});

}

return (new cljs.core.async.t_cljs$core$async49386(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49391 = arguments.length;
switch (G__49391) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47647__auto___50791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_49415){
var state_val_49416 = (state_49415[(1)]);
if((state_val_49416 === (7))){
var inst_49411 = (state_49415[(2)]);
var state_49415__$1 = state_49415;
var statearr_49419_50795 = state_49415__$1;
(statearr_49419_50795[(2)] = inst_49411);

(statearr_49419_50795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (1))){
var state_49415__$1 = state_49415;
var statearr_49421_50796 = state_49415__$1;
(statearr_49421_50796[(2)] = null);

(statearr_49421_50796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (4))){
var inst_49397 = (state_49415[(7)]);
var inst_49397__$1 = (state_49415[(2)]);
var inst_49398 = (inst_49397__$1 == null);
var state_49415__$1 = (function (){var statearr_49423 = state_49415;
(statearr_49423[(7)] = inst_49397__$1);

return statearr_49423;
})();
if(cljs.core.truth_(inst_49398)){
var statearr_49424_50797 = state_49415__$1;
(statearr_49424_50797[(1)] = (5));

} else {
var statearr_49425_50800 = state_49415__$1;
(statearr_49425_50800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (6))){
var inst_49397 = (state_49415[(7)]);
var inst_49402 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49397) : p.call(null,inst_49397));
var state_49415__$1 = state_49415;
if(cljs.core.truth_(inst_49402)){
var statearr_49426_50804 = state_49415__$1;
(statearr_49426_50804[(1)] = (8));

} else {
var statearr_49427_50809 = state_49415__$1;
(statearr_49427_50809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (3))){
var inst_49413 = (state_49415[(2)]);
var state_49415__$1 = state_49415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49415__$1,inst_49413);
} else {
if((state_val_49416 === (2))){
var state_49415__$1 = state_49415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49415__$1,(4),ch);
} else {
if((state_val_49416 === (11))){
var inst_49405 = (state_49415[(2)]);
var state_49415__$1 = state_49415;
var statearr_49428_50810 = state_49415__$1;
(statearr_49428_50810[(2)] = inst_49405);

(statearr_49428_50810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (9))){
var state_49415__$1 = state_49415;
var statearr_49429_50812 = state_49415__$1;
(statearr_49429_50812[(2)] = null);

(statearr_49429_50812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (5))){
var inst_49400 = cljs.core.async.close_BANG_(out);
var state_49415__$1 = state_49415;
var statearr_49430_50813 = state_49415__$1;
(statearr_49430_50813[(2)] = inst_49400);

(statearr_49430_50813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (10))){
var inst_49408 = (state_49415[(2)]);
var state_49415__$1 = (function (){var statearr_49431 = state_49415;
(statearr_49431[(8)] = inst_49408);

return statearr_49431;
})();
var statearr_49432_50814 = state_49415__$1;
(statearr_49432_50814[(2)] = null);

(statearr_49432_50814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (8))){
var inst_49397 = (state_49415[(7)]);
var state_49415__$1 = state_49415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49415__$1,(11),out,inst_49397);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_49433 = [null,null,null,null,null,null,null,null,null];
(statearr_49433[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_49433[(1)] = (1));

return statearr_49433;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_49415){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_49415);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e49434){var ex__47194__auto__ = e49434;
var statearr_49435_50815 = state_49415;
(statearr_49435_50815[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_49415[(4)]))){
var statearr_49436_50816 = state_49415;
(statearr_49436_50816[(1)] = cljs.core.first((state_49415[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50817 = state_49415;
state_49415 = G__50817;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_49415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_49415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_49437 = f__47648__auto__();
(statearr_49437[(6)] = c__47647__auto___50791);

return statearr_49437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49442 = arguments.length;
switch (G__49442) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_49524){
var state_val_49525 = (state_49524[(1)]);
if((state_val_49525 === (7))){
var inst_49517 = (state_49524[(2)]);
var state_49524__$1 = state_49524;
var statearr_49532_50830 = state_49524__$1;
(statearr_49532_50830[(2)] = inst_49517);

(statearr_49532_50830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (20))){
var inst_49483 = (state_49524[(7)]);
var inst_49494 = (state_49524[(2)]);
var inst_49495 = cljs.core.next(inst_49483);
var inst_49466 = inst_49495;
var inst_49467 = null;
var inst_49468 = (0);
var inst_49469 = (0);
var state_49524__$1 = (function (){var statearr_49540 = state_49524;
(statearr_49540[(8)] = inst_49494);

(statearr_49540[(9)] = inst_49468);

(statearr_49540[(10)] = inst_49469);

(statearr_49540[(11)] = inst_49466);

(statearr_49540[(12)] = inst_49467);

return statearr_49540;
})();
var statearr_49544_50832 = state_49524__$1;
(statearr_49544_50832[(2)] = null);

(statearr_49544_50832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (1))){
var state_49524__$1 = state_49524;
var statearr_49549_50833 = state_49524__$1;
(statearr_49549_50833[(2)] = null);

(statearr_49549_50833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (4))){
var inst_49452 = (state_49524[(13)]);
var inst_49452__$1 = (state_49524[(2)]);
var inst_49456 = (inst_49452__$1 == null);
var state_49524__$1 = (function (){var statearr_49550 = state_49524;
(statearr_49550[(13)] = inst_49452__$1);

return statearr_49550;
})();
if(cljs.core.truth_(inst_49456)){
var statearr_49551_50834 = state_49524__$1;
(statearr_49551_50834[(1)] = (5));

} else {
var statearr_49552_50839 = state_49524__$1;
(statearr_49552_50839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (15))){
var state_49524__$1 = state_49524;
var statearr_49556_50840 = state_49524__$1;
(statearr_49556_50840[(2)] = null);

(statearr_49556_50840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (21))){
var state_49524__$1 = state_49524;
var statearr_49558_50842 = state_49524__$1;
(statearr_49558_50842[(2)] = null);

(statearr_49558_50842[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (13))){
var inst_49468 = (state_49524[(9)]);
var inst_49469 = (state_49524[(10)]);
var inst_49466 = (state_49524[(11)]);
var inst_49467 = (state_49524[(12)]);
var inst_49479 = (state_49524[(2)]);
var inst_49480 = (inst_49469 + (1));
var tmp49553 = inst_49468;
var tmp49554 = inst_49466;
var tmp49555 = inst_49467;
var inst_49466__$1 = tmp49554;
var inst_49467__$1 = tmp49555;
var inst_49468__$1 = tmp49553;
var inst_49469__$1 = inst_49480;
var state_49524__$1 = (function (){var statearr_49560 = state_49524;
(statearr_49560[(9)] = inst_49468__$1);

(statearr_49560[(10)] = inst_49469__$1);

(statearr_49560[(11)] = inst_49466__$1);

(statearr_49560[(14)] = inst_49479);

(statearr_49560[(12)] = inst_49467__$1);

return statearr_49560;
})();
var statearr_49561_50843 = state_49524__$1;
(statearr_49561_50843[(2)] = null);

(statearr_49561_50843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (22))){
var state_49524__$1 = state_49524;
var statearr_49562_50844 = state_49524__$1;
(statearr_49562_50844[(2)] = null);

(statearr_49562_50844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (6))){
var inst_49452 = (state_49524[(13)]);
var inst_49464 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49452) : f.call(null,inst_49452));
var inst_49465 = cljs.core.seq(inst_49464);
var inst_49466 = inst_49465;
var inst_49467 = null;
var inst_49468 = (0);
var inst_49469 = (0);
var state_49524__$1 = (function (){var statearr_49563 = state_49524;
(statearr_49563[(9)] = inst_49468);

(statearr_49563[(10)] = inst_49469);

(statearr_49563[(11)] = inst_49466);

(statearr_49563[(12)] = inst_49467);

return statearr_49563;
})();
var statearr_49564_50845 = state_49524__$1;
(statearr_49564_50845[(2)] = null);

(statearr_49564_50845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (17))){
var inst_49483 = (state_49524[(7)]);
var inst_49487 = cljs.core.chunk_first(inst_49483);
var inst_49488 = cljs.core.chunk_rest(inst_49483);
var inst_49489 = cljs.core.count(inst_49487);
var inst_49466 = inst_49488;
var inst_49467 = inst_49487;
var inst_49468 = inst_49489;
var inst_49469 = (0);
var state_49524__$1 = (function (){var statearr_49565 = state_49524;
(statearr_49565[(9)] = inst_49468);

(statearr_49565[(10)] = inst_49469);

(statearr_49565[(11)] = inst_49466);

(statearr_49565[(12)] = inst_49467);

return statearr_49565;
})();
var statearr_49566_50850 = state_49524__$1;
(statearr_49566_50850[(2)] = null);

(statearr_49566_50850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (3))){
var inst_49522 = (state_49524[(2)]);
var state_49524__$1 = state_49524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49524__$1,inst_49522);
} else {
if((state_val_49525 === (12))){
var inst_49503 = (state_49524[(2)]);
var state_49524__$1 = state_49524;
var statearr_49567_50852 = state_49524__$1;
(statearr_49567_50852[(2)] = inst_49503);

(statearr_49567_50852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (2))){
var state_49524__$1 = state_49524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49524__$1,(4),in$);
} else {
if((state_val_49525 === (23))){
var inst_49515 = (state_49524[(2)]);
var state_49524__$1 = state_49524;
var statearr_49568_50853 = state_49524__$1;
(statearr_49568_50853[(2)] = inst_49515);

(statearr_49568_50853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (19))){
var inst_49498 = (state_49524[(2)]);
var state_49524__$1 = state_49524;
var statearr_49569_50854 = state_49524__$1;
(statearr_49569_50854[(2)] = inst_49498);

(statearr_49569_50854[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (11))){
var inst_49466 = (state_49524[(11)]);
var inst_49483 = (state_49524[(7)]);
var inst_49483__$1 = cljs.core.seq(inst_49466);
var state_49524__$1 = (function (){var statearr_49570 = state_49524;
(statearr_49570[(7)] = inst_49483__$1);

return statearr_49570;
})();
if(inst_49483__$1){
var statearr_49571_50855 = state_49524__$1;
(statearr_49571_50855[(1)] = (14));

} else {
var statearr_49572_50856 = state_49524__$1;
(statearr_49572_50856[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (9))){
var inst_49508 = (state_49524[(2)]);
var inst_49510 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49524__$1 = (function (){var statearr_49573 = state_49524;
(statearr_49573[(15)] = inst_49508);

return statearr_49573;
})();
if(cljs.core.truth_(inst_49510)){
var statearr_49574_50857 = state_49524__$1;
(statearr_49574_50857[(1)] = (21));

} else {
var statearr_49575_50858 = state_49524__$1;
(statearr_49575_50858[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (5))){
var inst_49458 = cljs.core.async.close_BANG_(out);
var state_49524__$1 = state_49524;
var statearr_49576_50859 = state_49524__$1;
(statearr_49576_50859[(2)] = inst_49458);

(statearr_49576_50859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (14))){
var inst_49483 = (state_49524[(7)]);
var inst_49485 = cljs.core.chunked_seq_QMARK_(inst_49483);
var state_49524__$1 = state_49524;
if(inst_49485){
var statearr_49577_50861 = state_49524__$1;
(statearr_49577_50861[(1)] = (17));

} else {
var statearr_49578_50862 = state_49524__$1;
(statearr_49578_50862[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (16))){
var inst_49501 = (state_49524[(2)]);
var state_49524__$1 = state_49524;
var statearr_49579_50863 = state_49524__$1;
(statearr_49579_50863[(2)] = inst_49501);

(statearr_49579_50863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49525 === (10))){
var inst_49469 = (state_49524[(10)]);
var inst_49467 = (state_49524[(12)]);
var inst_49477 = cljs.core._nth(inst_49467,inst_49469);
var state_49524__$1 = state_49524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49524__$1,(13),out,inst_49477);
} else {
if((state_val_49525 === (18))){
var inst_49483 = (state_49524[(7)]);
var inst_49492 = cljs.core.first(inst_49483);
var state_49524__$1 = state_49524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49524__$1,(20),out,inst_49492);
} else {
if((state_val_49525 === (8))){
var inst_49468 = (state_49524[(9)]);
var inst_49469 = (state_49524[(10)]);
var inst_49474 = (inst_49469 < inst_49468);
var inst_49475 = inst_49474;
var state_49524__$1 = state_49524;
if(cljs.core.truth_(inst_49475)){
var statearr_49580_50872 = state_49524__$1;
(statearr_49580_50872[(1)] = (10));

} else {
var statearr_49581_50876 = state_49524__$1;
(statearr_49581_50876[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47191__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47191__auto____0 = (function (){
var statearr_49582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49582[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47191__auto__);

(statearr_49582[(1)] = (1));

return statearr_49582;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47191__auto____1 = (function (state_49524){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_49524);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e49583){var ex__47194__auto__ = e49583;
var statearr_49584_50877 = state_49524;
(statearr_49584_50877[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_49524[(4)]))){
var statearr_49585_50878 = state_49524;
(statearr_49585_50878[(1)] = cljs.core.first((state_49524[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50882 = state_49524;
state_49524 = G__50882;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47191__auto__ = function(state_49524){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47191__auto____1.call(this,state_49524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47191__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47191__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_49586 = f__47648__auto__();
(statearr_49586[(6)] = c__47647__auto__);

return statearr_49586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));

return c__47647__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49588 = arguments.length;
switch (G__49588) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49590 = arguments.length;
switch (G__49590) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49594 = arguments.length;
switch (G__49594) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47647__auto___50889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_49630){
var state_val_49631 = (state_49630[(1)]);
if((state_val_49631 === (7))){
var inst_49625 = (state_49630[(2)]);
var state_49630__$1 = state_49630;
var statearr_49633_50890 = state_49630__$1;
(statearr_49633_50890[(2)] = inst_49625);

(statearr_49633_50890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49631 === (1))){
var inst_49606 = null;
var state_49630__$1 = (function (){var statearr_49634 = state_49630;
(statearr_49634[(7)] = inst_49606);

return statearr_49634;
})();
var statearr_49635_50891 = state_49630__$1;
(statearr_49635_50891[(2)] = null);

(statearr_49635_50891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49631 === (4))){
var inst_49610 = (state_49630[(8)]);
var inst_49610__$1 = (state_49630[(2)]);
var inst_49611 = (inst_49610__$1 == null);
var inst_49612 = cljs.core.not(inst_49611);
var state_49630__$1 = (function (){var statearr_49636 = state_49630;
(statearr_49636[(8)] = inst_49610__$1);

return statearr_49636;
})();
if(inst_49612){
var statearr_49637_50893 = state_49630__$1;
(statearr_49637_50893[(1)] = (5));

} else {
var statearr_49638_50894 = state_49630__$1;
(statearr_49638_50894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49631 === (6))){
var state_49630__$1 = state_49630;
var statearr_49639_50895 = state_49630__$1;
(statearr_49639_50895[(2)] = null);

(statearr_49639_50895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49631 === (3))){
var inst_49627 = (state_49630[(2)]);
var inst_49628 = cljs.core.async.close_BANG_(out);
var state_49630__$1 = (function (){var statearr_49643 = state_49630;
(statearr_49643[(9)] = inst_49627);

return statearr_49643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49630__$1,inst_49628);
} else {
if((state_val_49631 === (2))){
var state_49630__$1 = state_49630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49630__$1,(4),ch);
} else {
if((state_val_49631 === (11))){
var inst_49610 = (state_49630[(8)]);
var inst_49619 = (state_49630[(2)]);
var inst_49606 = inst_49610;
var state_49630__$1 = (function (){var statearr_49644 = state_49630;
(statearr_49644[(7)] = inst_49606);

(statearr_49644[(10)] = inst_49619);

return statearr_49644;
})();
var statearr_49645_50896 = state_49630__$1;
(statearr_49645_50896[(2)] = null);

(statearr_49645_50896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49631 === (9))){
var inst_49610 = (state_49630[(8)]);
var state_49630__$1 = state_49630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49630__$1,(11),out,inst_49610);
} else {
if((state_val_49631 === (5))){
var inst_49606 = (state_49630[(7)]);
var inst_49610 = (state_49630[(8)]);
var inst_49614 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49610,inst_49606);
var state_49630__$1 = state_49630;
if(inst_49614){
var statearr_49647_50897 = state_49630__$1;
(statearr_49647_50897[(1)] = (8));

} else {
var statearr_49648_50898 = state_49630__$1;
(statearr_49648_50898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49631 === (10))){
var inst_49622 = (state_49630[(2)]);
var state_49630__$1 = state_49630;
var statearr_49649_50899 = state_49630__$1;
(statearr_49649_50899[(2)] = inst_49622);

(statearr_49649_50899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49631 === (8))){
var inst_49606 = (state_49630[(7)]);
var tmp49646 = inst_49606;
var inst_49606__$1 = tmp49646;
var state_49630__$1 = (function (){var statearr_49650 = state_49630;
(statearr_49650[(7)] = inst_49606__$1);

return statearr_49650;
})();
var statearr_49651_50900 = state_49630__$1;
(statearr_49651_50900[(2)] = null);

(statearr_49651_50900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_49661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49661[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_49661[(1)] = (1));

return statearr_49661;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_49630){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_49630);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e49662){var ex__47194__auto__ = e49662;
var statearr_49663_50901 = state_49630;
(statearr_49663_50901[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_49630[(4)]))){
var statearr_49664_50902 = state_49630;
(statearr_49664_50902[(1)] = cljs.core.first((state_49630[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50903 = state_49630;
state_49630 = G__50903;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_49630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_49630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_49665 = f__47648__auto__();
(statearr_49665[(6)] = c__47647__auto___50889);

return statearr_49665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49668 = arguments.length;
switch (G__49668) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47647__auto___50906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_49706){
var state_val_49707 = (state_49706[(1)]);
if((state_val_49707 === (7))){
var inst_49702 = (state_49706[(2)]);
var state_49706__$1 = state_49706;
var statearr_49708_50910 = state_49706__$1;
(statearr_49708_50910[(2)] = inst_49702);

(statearr_49708_50910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49707 === (1))){
var inst_49669 = (new Array(n));
var inst_49670 = inst_49669;
var inst_49671 = (0);
var state_49706__$1 = (function (){var statearr_49709 = state_49706;
(statearr_49709[(7)] = inst_49670);

(statearr_49709[(8)] = inst_49671);

return statearr_49709;
})();
var statearr_49712_50911 = state_49706__$1;
(statearr_49712_50911[(2)] = null);

(statearr_49712_50911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49707 === (4))){
var inst_49674 = (state_49706[(9)]);
var inst_49674__$1 = (state_49706[(2)]);
var inst_49675 = (inst_49674__$1 == null);
var inst_49676 = cljs.core.not(inst_49675);
var state_49706__$1 = (function (){var statearr_49713 = state_49706;
(statearr_49713[(9)] = inst_49674__$1);

return statearr_49713;
})();
if(inst_49676){
var statearr_49714_50912 = state_49706__$1;
(statearr_49714_50912[(1)] = (5));

} else {
var statearr_49715_50913 = state_49706__$1;
(statearr_49715_50913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49707 === (15))){
var inst_49696 = (state_49706[(2)]);
var state_49706__$1 = state_49706;
var statearr_49716_50914 = state_49706__$1;
(statearr_49716_50914[(2)] = inst_49696);

(statearr_49716_50914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49707 === (13))){
var state_49706__$1 = state_49706;
var statearr_49717_50915 = state_49706__$1;
(statearr_49717_50915[(2)] = null);

(statearr_49717_50915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49707 === (6))){
var inst_49671 = (state_49706[(8)]);
var inst_49692 = (inst_49671 > (0));
var state_49706__$1 = state_49706;
if(cljs.core.truth_(inst_49692)){
var statearr_49719_50916 = state_49706__$1;
(statearr_49719_50916[(1)] = (12));

} else {
var statearr_49720_50917 = state_49706__$1;
(statearr_49720_50917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49707 === (3))){
var inst_49704 = (state_49706[(2)]);
var state_49706__$1 = state_49706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49706__$1,inst_49704);
} else {
if((state_val_49707 === (12))){
var inst_49670 = (state_49706[(7)]);
var inst_49694 = cljs.core.vec(inst_49670);
var state_49706__$1 = state_49706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49706__$1,(15),out,inst_49694);
} else {
if((state_val_49707 === (2))){
var state_49706__$1 = state_49706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49706__$1,(4),ch);
} else {
if((state_val_49707 === (11))){
var inst_49686 = (state_49706[(2)]);
var inst_49687 = (new Array(n));
var inst_49670 = inst_49687;
var inst_49671 = (0);
var state_49706__$1 = (function (){var statearr_49722 = state_49706;
(statearr_49722[(10)] = inst_49686);

(statearr_49722[(7)] = inst_49670);

(statearr_49722[(8)] = inst_49671);

return statearr_49722;
})();
var statearr_49723_50921 = state_49706__$1;
(statearr_49723_50921[(2)] = null);

(statearr_49723_50921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49707 === (9))){
var inst_49670 = (state_49706[(7)]);
var inst_49684 = cljs.core.vec(inst_49670);
var state_49706__$1 = state_49706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49706__$1,(11),out,inst_49684);
} else {
if((state_val_49707 === (5))){
var inst_49670 = (state_49706[(7)]);
var inst_49679 = (state_49706[(11)]);
var inst_49674 = (state_49706[(9)]);
var inst_49671 = (state_49706[(8)]);
var inst_49678 = (inst_49670[inst_49671] = inst_49674);
var inst_49679__$1 = (inst_49671 + (1));
var inst_49680 = (inst_49679__$1 < n);
var state_49706__$1 = (function (){var statearr_49724 = state_49706;
(statearr_49724[(12)] = inst_49678);

(statearr_49724[(11)] = inst_49679__$1);

return statearr_49724;
})();
if(cljs.core.truth_(inst_49680)){
var statearr_49725_50922 = state_49706__$1;
(statearr_49725_50922[(1)] = (8));

} else {
var statearr_49726_50923 = state_49706__$1;
(statearr_49726_50923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49707 === (14))){
var inst_49699 = (state_49706[(2)]);
var inst_49700 = cljs.core.async.close_BANG_(out);
var state_49706__$1 = (function (){var statearr_49728 = state_49706;
(statearr_49728[(13)] = inst_49699);

return statearr_49728;
})();
var statearr_49729_50928 = state_49706__$1;
(statearr_49729_50928[(2)] = inst_49700);

(statearr_49729_50928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49707 === (10))){
var inst_49690 = (state_49706[(2)]);
var state_49706__$1 = state_49706;
var statearr_49737_50929 = state_49706__$1;
(statearr_49737_50929[(2)] = inst_49690);

(statearr_49737_50929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49707 === (8))){
var inst_49670 = (state_49706[(7)]);
var inst_49679 = (state_49706[(11)]);
var tmp49727 = inst_49670;
var inst_49670__$1 = tmp49727;
var inst_49671 = inst_49679;
var state_49706__$1 = (function (){var statearr_49738 = state_49706;
(statearr_49738[(7)] = inst_49670__$1);

(statearr_49738[(8)] = inst_49671);

return statearr_49738;
})();
var statearr_49739_50930 = state_49706__$1;
(statearr_49739_50930[(2)] = null);

(statearr_49739_50930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_49741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49741[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_49741[(1)] = (1));

return statearr_49741;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_49706){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_49706);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e49742){var ex__47194__auto__ = e49742;
var statearr_49743_50933 = state_49706;
(statearr_49743_50933[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_49706[(4)]))){
var statearr_49744_50934 = state_49706;
(statearr_49744_50934[(1)] = cljs.core.first((state_49706[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50935 = state_49706;
state_49706 = G__50935;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_49706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_49706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_49754 = f__47648__auto__();
(statearr_49754[(6)] = c__47647__auto___50906);

return statearr_49754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49760 = arguments.length;
switch (G__49760) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47647__auto___50939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47648__auto__ = (function (){var switch__47190__auto__ = (function (state_49815){
var state_val_49816 = (state_49815[(1)]);
if((state_val_49816 === (7))){
var inst_49809 = (state_49815[(2)]);
var state_49815__$1 = state_49815;
var statearr_49822_50940 = state_49815__$1;
(statearr_49822_50940[(2)] = inst_49809);

(statearr_49822_50940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (1))){
var inst_49768 = [];
var inst_49770 = inst_49768;
var inst_49771 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49815__$1 = (function (){var statearr_49823 = state_49815;
(statearr_49823[(7)] = inst_49771);

(statearr_49823[(8)] = inst_49770);

return statearr_49823;
})();
var statearr_49824_50941 = state_49815__$1;
(statearr_49824_50941[(2)] = null);

(statearr_49824_50941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (4))){
var inst_49774 = (state_49815[(9)]);
var inst_49774__$1 = (state_49815[(2)]);
var inst_49775 = (inst_49774__$1 == null);
var inst_49776 = cljs.core.not(inst_49775);
var state_49815__$1 = (function (){var statearr_49825 = state_49815;
(statearr_49825[(9)] = inst_49774__$1);

return statearr_49825;
})();
if(inst_49776){
var statearr_49826_50951 = state_49815__$1;
(statearr_49826_50951[(1)] = (5));

} else {
var statearr_49827_50952 = state_49815__$1;
(statearr_49827_50952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (15))){
var inst_49770 = (state_49815[(8)]);
var inst_49801 = cljs.core.vec(inst_49770);
var state_49815__$1 = state_49815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49815__$1,(18),out,inst_49801);
} else {
if((state_val_49816 === (13))){
var inst_49796 = (state_49815[(2)]);
var state_49815__$1 = state_49815;
var statearr_49829_50953 = state_49815__$1;
(statearr_49829_50953[(2)] = inst_49796);

(statearr_49829_50953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (6))){
var inst_49770 = (state_49815[(8)]);
var inst_49798 = inst_49770.length;
var inst_49799 = (inst_49798 > (0));
var state_49815__$1 = state_49815;
if(cljs.core.truth_(inst_49799)){
var statearr_49833_50956 = state_49815__$1;
(statearr_49833_50956[(1)] = (15));

} else {
var statearr_49834_50957 = state_49815__$1;
(statearr_49834_50957[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (17))){
var inst_49806 = (state_49815[(2)]);
var inst_49807 = cljs.core.async.close_BANG_(out);
var state_49815__$1 = (function (){var statearr_49836 = state_49815;
(statearr_49836[(10)] = inst_49806);

return statearr_49836;
})();
var statearr_49837_50959 = state_49815__$1;
(statearr_49837_50959[(2)] = inst_49807);

(statearr_49837_50959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (3))){
var inst_49811 = (state_49815[(2)]);
var state_49815__$1 = state_49815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49815__$1,inst_49811);
} else {
if((state_val_49816 === (12))){
var inst_49770 = (state_49815[(8)]);
var inst_49789 = cljs.core.vec(inst_49770);
var state_49815__$1 = state_49815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49815__$1,(14),out,inst_49789);
} else {
if((state_val_49816 === (2))){
var state_49815__$1 = state_49815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49815__$1,(4),ch);
} else {
if((state_val_49816 === (11))){
var inst_49770 = (state_49815[(8)]);
var inst_49774 = (state_49815[(9)]);
var inst_49778 = (state_49815[(11)]);
var inst_49786 = inst_49770.push(inst_49774);
var tmp49838 = inst_49770;
var inst_49770__$1 = tmp49838;
var inst_49771 = inst_49778;
var state_49815__$1 = (function (){var statearr_49839 = state_49815;
(statearr_49839[(12)] = inst_49786);

(statearr_49839[(7)] = inst_49771);

(statearr_49839[(8)] = inst_49770__$1);

return statearr_49839;
})();
var statearr_49840_50960 = state_49815__$1;
(statearr_49840_50960[(2)] = null);

(statearr_49840_50960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (9))){
var inst_49771 = (state_49815[(7)]);
var inst_49782 = cljs.core.keyword_identical_QMARK_(inst_49771,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49815__$1 = state_49815;
var statearr_49842_50961 = state_49815__$1;
(statearr_49842_50961[(2)] = inst_49782);

(statearr_49842_50961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (5))){
var inst_49779 = (state_49815[(13)]);
var inst_49771 = (state_49815[(7)]);
var inst_49774 = (state_49815[(9)]);
var inst_49778 = (state_49815[(11)]);
var inst_49778__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49774) : f.call(null,inst_49774));
var inst_49779__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49778__$1,inst_49771);
var state_49815__$1 = (function (){var statearr_49843 = state_49815;
(statearr_49843[(13)] = inst_49779__$1);

(statearr_49843[(11)] = inst_49778__$1);

return statearr_49843;
})();
if(inst_49779__$1){
var statearr_49844_50964 = state_49815__$1;
(statearr_49844_50964[(1)] = (8));

} else {
var statearr_49845_50965 = state_49815__$1;
(statearr_49845_50965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (14))){
var inst_49774 = (state_49815[(9)]);
var inst_49778 = (state_49815[(11)]);
var inst_49791 = (state_49815[(2)]);
var inst_49792 = [];
var inst_49793 = inst_49792.push(inst_49774);
var inst_49770 = inst_49792;
var inst_49771 = inst_49778;
var state_49815__$1 = (function (){var statearr_49853 = state_49815;
(statearr_49853[(14)] = inst_49793);

(statearr_49853[(15)] = inst_49791);

(statearr_49853[(7)] = inst_49771);

(statearr_49853[(8)] = inst_49770);

return statearr_49853;
})();
var statearr_49854_50968 = state_49815__$1;
(statearr_49854_50968[(2)] = null);

(statearr_49854_50968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (16))){
var state_49815__$1 = state_49815;
var statearr_49855_50969 = state_49815__$1;
(statearr_49855_50969[(2)] = null);

(statearr_49855_50969[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (10))){
var inst_49784 = (state_49815[(2)]);
var state_49815__$1 = state_49815;
if(cljs.core.truth_(inst_49784)){
var statearr_49857_50970 = state_49815__$1;
(statearr_49857_50970[(1)] = (11));

} else {
var statearr_49858_50971 = state_49815__$1;
(statearr_49858_50971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (18))){
var inst_49803 = (state_49815[(2)]);
var state_49815__$1 = state_49815;
var statearr_49859_50973 = state_49815__$1;
(statearr_49859_50973[(2)] = inst_49803);

(statearr_49859_50973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (8))){
var inst_49779 = (state_49815[(13)]);
var state_49815__$1 = state_49815;
var statearr_49860_50978 = state_49815__$1;
(statearr_49860_50978[(2)] = inst_49779);

(statearr_49860_50978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47191__auto__ = null;
var cljs$core$async$state_machine__47191__auto____0 = (function (){
var statearr_49863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49863[(0)] = cljs$core$async$state_machine__47191__auto__);

(statearr_49863[(1)] = (1));

return statearr_49863;
});
var cljs$core$async$state_machine__47191__auto____1 = (function (state_49815){
while(true){
var ret_value__47192__auto__ = (function (){try{while(true){
var result__47193__auto__ = switch__47190__auto__(state_49815);
if(cljs.core.keyword_identical_QMARK_(result__47193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47193__auto__;
}
break;
}
}catch (e49864){var ex__47194__auto__ = e49864;
var statearr_49867_50980 = state_49815;
(statearr_49867_50980[(2)] = ex__47194__auto__);


if(cljs.core.seq((state_49815[(4)]))){
var statearr_49868_50981 = state_49815;
(statearr_49868_50981[(1)] = cljs.core.first((state_49815[(4)])));

} else {
throw ex__47194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50983 = state_49815;
state_49815 = G__50983;
continue;
} else {
return ret_value__47192__auto__;
}
break;
}
});
cljs$core$async$state_machine__47191__auto__ = function(state_49815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47191__auto____1.call(this,state_49815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47191__auto____0;
cljs$core$async$state_machine__47191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47191__auto____1;
return cljs$core$async$state_machine__47191__auto__;
})()
})();
var state__47649__auto__ = (function (){var statearr_49869 = f__47648__auto__();
(statearr_49869[(6)] = c__47647__auto___50939);

return statearr_49869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47649__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
