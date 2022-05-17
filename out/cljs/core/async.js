// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__2697 = arguments.length;
switch (G__2697) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2698 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2698 = (function (f,blockable,meta2699){
this.f = f;
this.blockable = blockable;
this.meta2699 = meta2699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2700,meta2699__$1){
var self__ = this;
var _2700__$1 = this;
return (new cljs.core.async.t_cljs$core$async2698(self__.f,self__.blockable,meta2699__$1));
}));

(cljs.core.async.t_cljs$core$async2698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2700){
var self__ = this;
var _2700__$1 = this;
return self__.meta2699;
}));

(cljs.core.async.t_cljs$core$async2698.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2698.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async2698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async2698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta2699], null);
}));

(cljs.core.async.t_cljs$core$async2698.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2698");

(cljs.core.async.t_cljs$core$async2698.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async2698");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2698.
 */
cljs.core.async.__GT_t_cljs$core$async2698 = (function cljs$core$async$__GT_t_cljs$core$async2698(f__$1,blockable__$1,meta2699){
return (new cljs.core.async.t_cljs$core$async2698(f__$1,blockable__$1,meta2699));
});

}

return (new cljs.core.async.t_cljs$core$async2698(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__2704 = arguments.length;
switch (G__2704) {
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
var G__2707 = arguments.length;
switch (G__2707) {
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
var G__2710 = arguments.length;
switch (G__2710) {
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
var val_2712 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_2712) : fn1.call(null,val_2712));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_2712) : fn1.call(null,val_2712));
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
var G__2714 = arguments.length;
switch (G__2714) {
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
var n__4741__auto___2716 = n;
var x_2717 = (0);
while(true){
if((x_2717 < n__4741__auto___2716)){
(a[x_2717] = x_2717);

var G__2718 = (x_2717 + (1));
x_2717 = G__2718;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2719 = (function (flag,meta2720){
this.flag = flag;
this.meta2720 = meta2720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2721,meta2720__$1){
var self__ = this;
var _2721__$1 = this;
return (new cljs.core.async.t_cljs$core$async2719(self__.flag,meta2720__$1));
}));

(cljs.core.async.t_cljs$core$async2719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2721){
var self__ = this;
var _2721__$1 = this;
return self__.meta2720;
}));

(cljs.core.async.t_cljs$core$async2719.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async2719.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async2719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta2720], null);
}));

(cljs.core.async.t_cljs$core$async2719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2719");

(cljs.core.async.t_cljs$core$async2719.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async2719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2719.
 */
cljs.core.async.__GT_t_cljs$core$async2719 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async2719(flag__$1,meta2720){
return (new cljs.core.async.t_cljs$core$async2719(flag__$1,meta2720));
});

}

return (new cljs.core.async.t_cljs$core$async2719(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2722 = (function (flag,cb,meta2723){
this.flag = flag;
this.cb = cb;
this.meta2723 = meta2723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2724,meta2723__$1){
var self__ = this;
var _2724__$1 = this;
return (new cljs.core.async.t_cljs$core$async2722(self__.flag,self__.cb,meta2723__$1));
}));

(cljs.core.async.t_cljs$core$async2722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2724){
var self__ = this;
var _2724__$1 = this;
return self__.meta2723;
}));

(cljs.core.async.t_cljs$core$async2722.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async2722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async2722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta2723], null);
}));

(cljs.core.async.t_cljs$core$async2722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2722");

(cljs.core.async.t_cljs$core$async2722.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async2722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2722.
 */
cljs.core.async.__GT_t_cljs$core$async2722 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async2722(flag__$1,cb__$1,meta2723){
return (new cljs.core.async.t_cljs$core$async2722(flag__$1,cb__$1,meta2723));
});

}

return (new cljs.core.async.t_cljs$core$async2722(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2725_SHARP_){
var G__2727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2725_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__2727) : fret.call(null,G__2727));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2726_SHARP_){
var G__2728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2726_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__2728) : fret.call(null,G__2728));
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
var G__2729 = (i + (1));
i = G__2729;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4864__auto___2734 = arguments.length;
var i__4865__auto___2735 = (0);
while(true){
if((i__4865__auto___2735 < len__4864__auto___2734)){
args__4870__auto__.push((arguments[i__4865__auto___2735]));

var G__2736 = (i__4865__auto___2735 + (1));
i__4865__auto___2735 = G__2736;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__2732){
var map__2733 = p__2732;
var map__2733__$1 = cljs.core.__destructure_map(map__2733);
var opts = map__2733__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq2730){
var G__2731 = cljs.core.first(seq2730);
var seq2730__$1 = cljs.core.next(seq2730);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2731,seq2730__$1);
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
var G__2738 = arguments.length;
switch (G__2738) {
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
var c__2637__auto___2785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_2762){
var state_val_2763 = (state_2762[(1)]);
if((state_val_2763 === (7))){
var inst_2758 = (state_2762[(2)]);
var state_2762__$1 = state_2762;
var statearr_2764_2786 = state_2762__$1;
(statearr_2764_2786[(2)] = inst_2758);

(statearr_2764_2786[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2763 === (1))){
var state_2762__$1 = state_2762;
var statearr_2765_2787 = state_2762__$1;
(statearr_2765_2787[(2)] = null);

(statearr_2765_2787[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2763 === (4))){
var inst_2741 = (state_2762[(7)]);
var inst_2741__$1 = (state_2762[(2)]);
var inst_2742 = (inst_2741__$1 == null);
var state_2762__$1 = (function (){var statearr_2766 = state_2762;
(statearr_2766[(7)] = inst_2741__$1);

return statearr_2766;
})();
if(cljs.core.truth_(inst_2742)){
var statearr_2767_2788 = state_2762__$1;
(statearr_2767_2788[(1)] = (5));

} else {
var statearr_2768_2789 = state_2762__$1;
(statearr_2768_2789[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2763 === (13))){
var state_2762__$1 = state_2762;
var statearr_2769_2790 = state_2762__$1;
(statearr_2769_2790[(2)] = null);

(statearr_2769_2790[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2763 === (6))){
var inst_2741 = (state_2762[(7)]);
var state_2762__$1 = state_2762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2762__$1,(11),to,inst_2741);
} else {
if((state_val_2763 === (3))){
var inst_2760 = (state_2762[(2)]);
var state_2762__$1 = state_2762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2762__$1,inst_2760);
} else {
if((state_val_2763 === (12))){
var state_2762__$1 = state_2762;
var statearr_2770_2791 = state_2762__$1;
(statearr_2770_2791[(2)] = null);

(statearr_2770_2791[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2763 === (2))){
var state_2762__$1 = state_2762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2762__$1,(4),from);
} else {
if((state_val_2763 === (11))){
var inst_2751 = (state_2762[(2)]);
var state_2762__$1 = state_2762;
if(cljs.core.truth_(inst_2751)){
var statearr_2771_2792 = state_2762__$1;
(statearr_2771_2792[(1)] = (12));

} else {
var statearr_2772_2793 = state_2762__$1;
(statearr_2772_2793[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2763 === (9))){
var state_2762__$1 = state_2762;
var statearr_2773_2794 = state_2762__$1;
(statearr_2773_2794[(2)] = null);

(statearr_2773_2794[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2763 === (5))){
var state_2762__$1 = state_2762;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2774_2795 = state_2762__$1;
(statearr_2774_2795[(1)] = (8));

} else {
var statearr_2775_2796 = state_2762__$1;
(statearr_2775_2796[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2763 === (14))){
var inst_2756 = (state_2762[(2)]);
var state_2762__$1 = state_2762;
var statearr_2776_2797 = state_2762__$1;
(statearr_2776_2797[(2)] = inst_2756);

(statearr_2776_2797[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2763 === (10))){
var inst_2748 = (state_2762[(2)]);
var state_2762__$1 = state_2762;
var statearr_2777_2798 = state_2762__$1;
(statearr_2777_2798[(2)] = inst_2748);

(statearr_2777_2798[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2763 === (8))){
var inst_2745 = cljs.core.async.close_BANG_(to);
var state_2762__$1 = state_2762;
var statearr_2778_2799 = state_2762__$1;
(statearr_2778_2799[(2)] = inst_2745);

(statearr_2778_2799[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_2779 = [null,null,null,null,null,null,null,null];
(statearr_2779[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_2779[(1)] = (1));

return statearr_2779;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_2762){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_2762);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e2780){var ex__2281__auto__ = e2780;
var statearr_2781_2800 = state_2762;
(statearr_2781_2800[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_2762[(4)]))){
var statearr_2782_2801 = state_2762;
(statearr_2782_2801[(1)] = cljs.core.first((state_2762[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__2802 = state_2762;
state_2762 = G__2802;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_2762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_2762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_2783 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_2783[(6)] = c__2637__auto___2785);

return statearr_2783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
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
var process = (function (p__2803){
var vec__2804 = p__2803;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2804,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2804,(1),null);
var job = vec__2804;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__2637__auto___2980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_2811){
var state_val_2812 = (state_2811[(1)]);
if((state_val_2812 === (1))){
var state_2811__$1 = state_2811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2811__$1,(2),res,v);
} else {
if((state_val_2812 === (2))){
var inst_2808 = (state_2811[(2)]);
var inst_2809 = cljs.core.async.close_BANG_(res);
var state_2811__$1 = (function (){var statearr_2813 = state_2811;
(statearr_2813[(7)] = inst_2808);

return statearr_2813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_2811__$1,inst_2809);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0 = (function (){
var statearr_2814 = [null,null,null,null,null,null,null,null];
(statearr_2814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__);

(statearr_2814[(1)] = (1));

return statearr_2814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1 = (function (state_2811){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_2811);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e2815){var ex__2281__auto__ = e2815;
var statearr_2816_2981 = state_2811;
(statearr_2816_2981[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_2811[(4)]))){
var statearr_2817_2982 = state_2811;
(statearr_2817_2982[(1)] = cljs.core.first((state_2811[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__2983 = state_2811;
state_2811 = G__2983;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__ = function(state_2811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1.call(this,state_2811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_2818 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_2818[(6)] = c__2637__auto___2980);

return statearr_2818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__2819){
var vec__2820 = p__2819;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2820,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2820,(1),null);
var job = vec__2820;
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
var n__4741__auto___2984 = n;
var __2985 = (0);
while(true){
if((__2985 < n__4741__auto___2984)){
var G__2823_2986 = type;
var G__2823_2987__$1 = (((G__2823_2986 instanceof cljs.core.Keyword))?G__2823_2986.fqn:null);
switch (G__2823_2987__$1) {
case "compute":
var c__2637__auto___2989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__2985,c__2637__auto___2989,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async){
return (function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = ((function (__2985,c__2637__auto___2989,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async){
return (function (state_2836){
var state_val_2837 = (state_2836[(1)]);
if((state_val_2837 === (1))){
var state_2836__$1 = state_2836;
var statearr_2838_2990 = state_2836__$1;
(statearr_2838_2990[(2)] = null);

(statearr_2838_2990[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2837 === (2))){
var state_2836__$1 = state_2836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2836__$1,(4),jobs);
} else {
if((state_val_2837 === (3))){
var inst_2834 = (state_2836[(2)]);
var state_2836__$1 = state_2836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2836__$1,inst_2834);
} else {
if((state_val_2837 === (4))){
var inst_2826 = (state_2836[(2)]);
var inst_2827 = process(inst_2826);
var state_2836__$1 = state_2836;
if(cljs.core.truth_(inst_2827)){
var statearr_2839_2991 = state_2836__$1;
(statearr_2839_2991[(1)] = (5));

} else {
var statearr_2840_2992 = state_2836__$1;
(statearr_2840_2992[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2837 === (5))){
var state_2836__$1 = state_2836;
var statearr_2841_2993 = state_2836__$1;
(statearr_2841_2993[(2)] = null);

(statearr_2841_2993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2837 === (6))){
var state_2836__$1 = state_2836;
var statearr_2842_2994 = state_2836__$1;
(statearr_2842_2994[(2)] = null);

(statearr_2842_2994[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2837 === (7))){
var inst_2832 = (state_2836[(2)]);
var state_2836__$1 = state_2836;
var statearr_2843_2995 = state_2836__$1;
(statearr_2843_2995[(2)] = inst_2832);

(statearr_2843_2995[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__2985,c__2637__auto___2989,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async))
;
return ((function (__2985,switch__2277__auto__,c__2637__auto___2989,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0 = (function (){
var statearr_2844 = [null,null,null,null,null,null,null];
(statearr_2844[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__);

(statearr_2844[(1)] = (1));

return statearr_2844;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1 = (function (state_2836){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_2836);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e2845){var ex__2281__auto__ = e2845;
var statearr_2846_2996 = state_2836;
(statearr_2846_2996[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_2836[(4)]))){
var statearr_2847_2997 = state_2836;
(statearr_2847_2997[(1)] = cljs.core.first((state_2836[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__2998 = state_2836;
state_2836 = G__2998;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__ = function(state_2836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1.call(this,state_2836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__;
})()
;})(__2985,switch__2277__auto__,c__2637__auto___2989,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async))
})();
var state__2639__auto__ = (function (){var statearr_2848 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_2848[(6)] = c__2637__auto___2989);

return statearr_2848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
});})(__2985,c__2637__auto___2989,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async))
);


break;
case "async":
var c__2637__auto___2999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__2985,c__2637__auto___2999,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async){
return (function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = ((function (__2985,c__2637__auto___2999,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async){
return (function (state_2861){
var state_val_2862 = (state_2861[(1)]);
if((state_val_2862 === (1))){
var state_2861__$1 = state_2861;
var statearr_2863_3000 = state_2861__$1;
(statearr_2863_3000[(2)] = null);

(statearr_2863_3000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2862 === (2))){
var state_2861__$1 = state_2861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2861__$1,(4),jobs);
} else {
if((state_val_2862 === (3))){
var inst_2859 = (state_2861[(2)]);
var state_2861__$1 = state_2861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2861__$1,inst_2859);
} else {
if((state_val_2862 === (4))){
var inst_2851 = (state_2861[(2)]);
var inst_2852 = async(inst_2851);
var state_2861__$1 = state_2861;
if(cljs.core.truth_(inst_2852)){
var statearr_2864_3001 = state_2861__$1;
(statearr_2864_3001[(1)] = (5));

} else {
var statearr_2865_3002 = state_2861__$1;
(statearr_2865_3002[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2862 === (5))){
var state_2861__$1 = state_2861;
var statearr_2866_3003 = state_2861__$1;
(statearr_2866_3003[(2)] = null);

(statearr_2866_3003[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2862 === (6))){
var state_2861__$1 = state_2861;
var statearr_2867_3004 = state_2861__$1;
(statearr_2867_3004[(2)] = null);

(statearr_2867_3004[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2862 === (7))){
var inst_2857 = (state_2861[(2)]);
var state_2861__$1 = state_2861;
var statearr_2868_3005 = state_2861__$1;
(statearr_2868_3005[(2)] = inst_2857);

(statearr_2868_3005[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__2985,c__2637__auto___2999,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async))
;
return ((function (__2985,switch__2277__auto__,c__2637__auto___2999,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0 = (function (){
var statearr_2869 = [null,null,null,null,null,null,null];
(statearr_2869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__);

(statearr_2869[(1)] = (1));

return statearr_2869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1 = (function (state_2861){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_2861);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e2870){var ex__2281__auto__ = e2870;
var statearr_2871_3006 = state_2861;
(statearr_2871_3006[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_2861[(4)]))){
var statearr_2872_3007 = state_2861;
(statearr_2872_3007[(1)] = cljs.core.first((state_2861[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3008 = state_2861;
state_2861 = G__3008;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__ = function(state_2861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1.call(this,state_2861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__;
})()
;})(__2985,switch__2277__auto__,c__2637__auto___2999,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async))
})();
var state__2639__auto__ = (function (){var statearr_2873 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_2873[(6)] = c__2637__auto___2999);

return statearr_2873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
});})(__2985,c__2637__auto___2999,G__2823_2986,G__2823_2987__$1,n__4741__auto___2984,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2823_2987__$1)].join('')));

}

var G__3009 = (__2985 + (1));
__2985 = G__3009;
continue;
} else {
}
break;
}

var c__2637__auto___3010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_2895){
var state_val_2896 = (state_2895[(1)]);
if((state_val_2896 === (7))){
var inst_2891 = (state_2895[(2)]);
var state_2895__$1 = state_2895;
var statearr_2897_3011 = state_2895__$1;
(statearr_2897_3011[(2)] = inst_2891);

(statearr_2897_3011[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2896 === (1))){
var state_2895__$1 = state_2895;
var statearr_2898_3012 = state_2895__$1;
(statearr_2898_3012[(2)] = null);

(statearr_2898_3012[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2896 === (4))){
var inst_2876 = (state_2895[(7)]);
var inst_2876__$1 = (state_2895[(2)]);
var inst_2877 = (inst_2876__$1 == null);
var state_2895__$1 = (function (){var statearr_2899 = state_2895;
(statearr_2899[(7)] = inst_2876__$1);

return statearr_2899;
})();
if(cljs.core.truth_(inst_2877)){
var statearr_2900_3013 = state_2895__$1;
(statearr_2900_3013[(1)] = (5));

} else {
var statearr_2901_3014 = state_2895__$1;
(statearr_2901_3014[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2896 === (6))){
var inst_2876 = (state_2895[(7)]);
var inst_2881 = (state_2895[(8)]);
var inst_2881__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_2882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2883 = [inst_2876,inst_2881__$1];
var inst_2884 = (new cljs.core.PersistentVector(null,2,(5),inst_2882,inst_2883,null));
var state_2895__$1 = (function (){var statearr_2902 = state_2895;
(statearr_2902[(8)] = inst_2881__$1);

return statearr_2902;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2895__$1,(8),jobs,inst_2884);
} else {
if((state_val_2896 === (3))){
var inst_2893 = (state_2895[(2)]);
var state_2895__$1 = state_2895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2895__$1,inst_2893);
} else {
if((state_val_2896 === (2))){
var state_2895__$1 = state_2895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2895__$1,(4),from);
} else {
if((state_val_2896 === (9))){
var inst_2888 = (state_2895[(2)]);
var state_2895__$1 = (function (){var statearr_2903 = state_2895;
(statearr_2903[(9)] = inst_2888);

return statearr_2903;
})();
var statearr_2904_3015 = state_2895__$1;
(statearr_2904_3015[(2)] = null);

(statearr_2904_3015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2896 === (5))){
var inst_2879 = cljs.core.async.close_BANG_(jobs);
var state_2895__$1 = state_2895;
var statearr_2905_3016 = state_2895__$1;
(statearr_2905_3016[(2)] = inst_2879);

(statearr_2905_3016[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2896 === (8))){
var inst_2881 = (state_2895[(8)]);
var inst_2886 = (state_2895[(2)]);
var state_2895__$1 = (function (){var statearr_2906 = state_2895;
(statearr_2906[(10)] = inst_2886);

return statearr_2906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2895__$1,(9),results,inst_2881);
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
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0 = (function (){
var statearr_2907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__);

(statearr_2907[(1)] = (1));

return statearr_2907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1 = (function (state_2895){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_2895);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e2908){var ex__2281__auto__ = e2908;
var statearr_2909_3017 = state_2895;
(statearr_2909_3017[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_2895[(4)]))){
var statearr_2910_3018 = state_2895;
(statearr_2910_3018[(1)] = cljs.core.first((state_2895[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3019 = state_2895;
state_2895 = G__3019;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__ = function(state_2895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1.call(this,state_2895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_2911 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_2911[(6)] = c__2637__auto___3010);

return statearr_2911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));


var c__2637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_2949){
var state_val_2950 = (state_2949[(1)]);
if((state_val_2950 === (7))){
var inst_2945 = (state_2949[(2)]);
var state_2949__$1 = state_2949;
var statearr_2951_3020 = state_2949__$1;
(statearr_2951_3020[(2)] = inst_2945);

(statearr_2951_3020[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (20))){
var state_2949__$1 = state_2949;
var statearr_2952_3021 = state_2949__$1;
(statearr_2952_3021[(2)] = null);

(statearr_2952_3021[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (1))){
var state_2949__$1 = state_2949;
var statearr_2953_3022 = state_2949__$1;
(statearr_2953_3022[(2)] = null);

(statearr_2953_3022[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (4))){
var inst_2914 = (state_2949[(7)]);
var inst_2914__$1 = (state_2949[(2)]);
var inst_2915 = (inst_2914__$1 == null);
var state_2949__$1 = (function (){var statearr_2954 = state_2949;
(statearr_2954[(7)] = inst_2914__$1);

return statearr_2954;
})();
if(cljs.core.truth_(inst_2915)){
var statearr_2955_3023 = state_2949__$1;
(statearr_2955_3023[(1)] = (5));

} else {
var statearr_2956_3024 = state_2949__$1;
(statearr_2956_3024[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (15))){
var inst_2927 = (state_2949[(8)]);
var state_2949__$1 = state_2949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2949__$1,(18),to,inst_2927);
} else {
if((state_val_2950 === (21))){
var inst_2940 = (state_2949[(2)]);
var state_2949__$1 = state_2949;
var statearr_2957_3025 = state_2949__$1;
(statearr_2957_3025[(2)] = inst_2940);

(statearr_2957_3025[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (13))){
var inst_2942 = (state_2949[(2)]);
var state_2949__$1 = (function (){var statearr_2958 = state_2949;
(statearr_2958[(9)] = inst_2942);

return statearr_2958;
})();
var statearr_2959_3026 = state_2949__$1;
(statearr_2959_3026[(2)] = null);

(statearr_2959_3026[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (6))){
var inst_2914 = (state_2949[(7)]);
var state_2949__$1 = state_2949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2949__$1,(11),inst_2914);
} else {
if((state_val_2950 === (17))){
var inst_2935 = (state_2949[(2)]);
var state_2949__$1 = state_2949;
if(cljs.core.truth_(inst_2935)){
var statearr_2960_3027 = state_2949__$1;
(statearr_2960_3027[(1)] = (19));

} else {
var statearr_2961_3028 = state_2949__$1;
(statearr_2961_3028[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (3))){
var inst_2947 = (state_2949[(2)]);
var state_2949__$1 = state_2949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2949__$1,inst_2947);
} else {
if((state_val_2950 === (12))){
var inst_2924 = (state_2949[(10)]);
var state_2949__$1 = state_2949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2949__$1,(14),inst_2924);
} else {
if((state_val_2950 === (2))){
var state_2949__$1 = state_2949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2949__$1,(4),results);
} else {
if((state_val_2950 === (19))){
var state_2949__$1 = state_2949;
var statearr_2962_3029 = state_2949__$1;
(statearr_2962_3029[(2)] = null);

(statearr_2962_3029[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (11))){
var inst_2924 = (state_2949[(2)]);
var state_2949__$1 = (function (){var statearr_2963 = state_2949;
(statearr_2963[(10)] = inst_2924);

return statearr_2963;
})();
var statearr_2964_3030 = state_2949__$1;
(statearr_2964_3030[(2)] = null);

(statearr_2964_3030[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (9))){
var state_2949__$1 = state_2949;
var statearr_2965_3031 = state_2949__$1;
(statearr_2965_3031[(2)] = null);

(statearr_2965_3031[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (5))){
var state_2949__$1 = state_2949;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2966_3032 = state_2949__$1;
(statearr_2966_3032[(1)] = (8));

} else {
var statearr_2967_3033 = state_2949__$1;
(statearr_2967_3033[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (14))){
var inst_2927 = (state_2949[(8)]);
var inst_2929 = (state_2949[(11)]);
var inst_2927__$1 = (state_2949[(2)]);
var inst_2928 = (inst_2927__$1 == null);
var inst_2929__$1 = cljs.core.not(inst_2928);
var state_2949__$1 = (function (){var statearr_2968 = state_2949;
(statearr_2968[(8)] = inst_2927__$1);

(statearr_2968[(11)] = inst_2929__$1);

return statearr_2968;
})();
if(inst_2929__$1){
var statearr_2969_3034 = state_2949__$1;
(statearr_2969_3034[(1)] = (15));

} else {
var statearr_2970_3035 = state_2949__$1;
(statearr_2970_3035[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (16))){
var inst_2929 = (state_2949[(11)]);
var state_2949__$1 = state_2949;
var statearr_2971_3036 = state_2949__$1;
(statearr_2971_3036[(2)] = inst_2929);

(statearr_2971_3036[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (10))){
var inst_2921 = (state_2949[(2)]);
var state_2949__$1 = state_2949;
var statearr_2972_3037 = state_2949__$1;
(statearr_2972_3037[(2)] = inst_2921);

(statearr_2972_3037[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (18))){
var inst_2932 = (state_2949[(2)]);
var state_2949__$1 = state_2949;
var statearr_2973_3038 = state_2949__$1;
(statearr_2973_3038[(2)] = inst_2932);

(statearr_2973_3038[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2950 === (8))){
var inst_2918 = cljs.core.async.close_BANG_(to);
var state_2949__$1 = state_2949;
var statearr_2974_3039 = state_2949__$1;
(statearr_2974_3039[(2)] = inst_2918);

(statearr_2974_3039[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0 = (function (){
var statearr_2975 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__);

(statearr_2975[(1)] = (1));

return statearr_2975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1 = (function (state_2949){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_2949);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e2976){var ex__2281__auto__ = e2976;
var statearr_2977_3040 = state_2949;
(statearr_2977_3040[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_2949[(4)]))){
var statearr_2978_3041 = state_2949;
(statearr_2978_3041[(1)] = cljs.core.first((state_2949[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3042 = state_2949;
state_2949 = G__3042;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__ = function(state_2949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1.call(this,state_2949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_2979 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_2979[(6)] = c__2637__auto__);

return statearr_2979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));

return c__2637__auto__;
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
var G__3044 = arguments.length;
switch (G__3044) {
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__3047 = arguments.length;
switch (G__3047) {
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__3050 = arguments.length;
switch (G__3050) {
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
var c__2637__auto___3100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_3076){
var state_val_3077 = (state_3076[(1)]);
if((state_val_3077 === (7))){
var inst_3072 = (state_3076[(2)]);
var state_3076__$1 = state_3076;
var statearr_3078_3101 = state_3076__$1;
(statearr_3078_3101[(2)] = inst_3072);

(statearr_3078_3101[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3077 === (1))){
var state_3076__$1 = state_3076;
var statearr_3079_3102 = state_3076__$1;
(statearr_3079_3102[(2)] = null);

(statearr_3079_3102[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3077 === (4))){
var inst_3053 = (state_3076[(7)]);
var inst_3053__$1 = (state_3076[(2)]);
var inst_3054 = (inst_3053__$1 == null);
var state_3076__$1 = (function (){var statearr_3080 = state_3076;
(statearr_3080[(7)] = inst_3053__$1);

return statearr_3080;
})();
if(cljs.core.truth_(inst_3054)){
var statearr_3081_3103 = state_3076__$1;
(statearr_3081_3103[(1)] = (5));

} else {
var statearr_3082_3104 = state_3076__$1;
(statearr_3082_3104[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3077 === (13))){
var state_3076__$1 = state_3076;
var statearr_3083_3105 = state_3076__$1;
(statearr_3083_3105[(2)] = null);

(statearr_3083_3105[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3077 === (6))){
var inst_3053 = (state_3076[(7)]);
var inst_3059 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_3053) : p.call(null,inst_3053));
var state_3076__$1 = state_3076;
if(cljs.core.truth_(inst_3059)){
var statearr_3084_3106 = state_3076__$1;
(statearr_3084_3106[(1)] = (9));

} else {
var statearr_3085_3107 = state_3076__$1;
(statearr_3085_3107[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3077 === (3))){
var inst_3074 = (state_3076[(2)]);
var state_3076__$1 = state_3076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3076__$1,inst_3074);
} else {
if((state_val_3077 === (12))){
var state_3076__$1 = state_3076;
var statearr_3086_3108 = state_3076__$1;
(statearr_3086_3108[(2)] = null);

(statearr_3086_3108[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3077 === (2))){
var state_3076__$1 = state_3076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3076__$1,(4),ch);
} else {
if((state_val_3077 === (11))){
var inst_3053 = (state_3076[(7)]);
var inst_3063 = (state_3076[(2)]);
var state_3076__$1 = state_3076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_3076__$1,(8),inst_3063,inst_3053);
} else {
if((state_val_3077 === (9))){
var state_3076__$1 = state_3076;
var statearr_3087_3109 = state_3076__$1;
(statearr_3087_3109[(2)] = tc);

(statearr_3087_3109[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3077 === (5))){
var inst_3056 = cljs.core.async.close_BANG_(tc);
var inst_3057 = cljs.core.async.close_BANG_(fc);
var state_3076__$1 = (function (){var statearr_3088 = state_3076;
(statearr_3088[(8)] = inst_3056);

return statearr_3088;
})();
var statearr_3089_3110 = state_3076__$1;
(statearr_3089_3110[(2)] = inst_3057);

(statearr_3089_3110[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3077 === (14))){
var inst_3070 = (state_3076[(2)]);
var state_3076__$1 = state_3076;
var statearr_3090_3111 = state_3076__$1;
(statearr_3090_3111[(2)] = inst_3070);

(statearr_3090_3111[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3077 === (10))){
var state_3076__$1 = state_3076;
var statearr_3091_3112 = state_3076__$1;
(statearr_3091_3112[(2)] = fc);

(statearr_3091_3112[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3077 === (8))){
var inst_3065 = (state_3076[(2)]);
var state_3076__$1 = state_3076;
if(cljs.core.truth_(inst_3065)){
var statearr_3092_3113 = state_3076__$1;
(statearr_3092_3113[(1)] = (12));

} else {
var statearr_3093_3114 = state_3076__$1;
(statearr_3093_3114[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_3094 = [null,null,null,null,null,null,null,null,null];
(statearr_3094[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_3094[(1)] = (1));

return statearr_3094;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_3076){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_3076);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e3095){var ex__2281__auto__ = e3095;
var statearr_3096_3115 = state_3076;
(statearr_3096_3115[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_3076[(4)]))){
var statearr_3097_3116 = state_3076;
(statearr_3097_3116[(1)] = cljs.core.first((state_3076[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3117 = state_3076;
state_3076 = G__3117;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_3076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_3076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_3098 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_3098[(6)] = c__2637__auto___3100);

return statearr_3098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
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
var c__2637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_3139){
var state_val_3140 = (state_3139[(1)]);
if((state_val_3140 === (7))){
var inst_3135 = (state_3139[(2)]);
var state_3139__$1 = state_3139;
var statearr_3141_3160 = state_3139__$1;
(statearr_3141_3160[(2)] = inst_3135);

(statearr_3141_3160[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3140 === (1))){
var inst_3118 = init;
var inst_3119 = inst_3118;
var state_3139__$1 = (function (){var statearr_3142 = state_3139;
(statearr_3142[(7)] = inst_3119);

return statearr_3142;
})();
var statearr_3143_3161 = state_3139__$1;
(statearr_3143_3161[(2)] = null);

(statearr_3143_3161[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3140 === (4))){
var inst_3122 = (state_3139[(8)]);
var inst_3122__$1 = (state_3139[(2)]);
var inst_3123 = (inst_3122__$1 == null);
var state_3139__$1 = (function (){var statearr_3144 = state_3139;
(statearr_3144[(8)] = inst_3122__$1);

return statearr_3144;
})();
if(cljs.core.truth_(inst_3123)){
var statearr_3145_3162 = state_3139__$1;
(statearr_3145_3162[(1)] = (5));

} else {
var statearr_3146_3163 = state_3139__$1;
(statearr_3146_3163[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3140 === (6))){
var inst_3119 = (state_3139[(7)]);
var inst_3122 = (state_3139[(8)]);
var inst_3126 = (state_3139[(9)]);
var inst_3126__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_3119,inst_3122) : f.call(null,inst_3119,inst_3122));
var inst_3127 = cljs.core.reduced_QMARK_(inst_3126__$1);
var state_3139__$1 = (function (){var statearr_3147 = state_3139;
(statearr_3147[(9)] = inst_3126__$1);

return statearr_3147;
})();
if(inst_3127){
var statearr_3148_3164 = state_3139__$1;
(statearr_3148_3164[(1)] = (8));

} else {
var statearr_3149_3165 = state_3139__$1;
(statearr_3149_3165[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3140 === (3))){
var inst_3137 = (state_3139[(2)]);
var state_3139__$1 = state_3139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3139__$1,inst_3137);
} else {
if((state_val_3140 === (2))){
var state_3139__$1 = state_3139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3139__$1,(4),ch);
} else {
if((state_val_3140 === (9))){
var inst_3126 = (state_3139[(9)]);
var inst_3119 = inst_3126;
var state_3139__$1 = (function (){var statearr_3150 = state_3139;
(statearr_3150[(7)] = inst_3119);

return statearr_3150;
})();
var statearr_3151_3166 = state_3139__$1;
(statearr_3151_3166[(2)] = null);

(statearr_3151_3166[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3140 === (5))){
var inst_3119 = (state_3139[(7)]);
var state_3139__$1 = state_3139;
var statearr_3152_3167 = state_3139__$1;
(statearr_3152_3167[(2)] = inst_3119);

(statearr_3152_3167[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3140 === (10))){
var inst_3133 = (state_3139[(2)]);
var state_3139__$1 = state_3139;
var statearr_3153_3168 = state_3139__$1;
(statearr_3153_3168[(2)] = inst_3133);

(statearr_3153_3168[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3140 === (8))){
var inst_3126 = (state_3139[(9)]);
var inst_3129 = cljs.core.deref(inst_3126);
var state_3139__$1 = state_3139;
var statearr_3154_3169 = state_3139__$1;
(statearr_3154_3169[(2)] = inst_3129);

(statearr_3154_3169[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$reduce_$_state_machine__2278__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2278__auto____0 = (function (){
var statearr_3155 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3155[(0)] = cljs$core$async$reduce_$_state_machine__2278__auto__);

(statearr_3155[(1)] = (1));

return statearr_3155;
});
var cljs$core$async$reduce_$_state_machine__2278__auto____1 = (function (state_3139){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_3139);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e3156){var ex__2281__auto__ = e3156;
var statearr_3157_3170 = state_3139;
(statearr_3157_3170[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_3139[(4)]))){
var statearr_3158_3171 = state_3139;
(statearr_3158_3171[(1)] = cljs.core.first((state_3139[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3172 = state_3139;
state_3139 = G__3172;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2278__auto__ = function(state_3139){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2278__auto____1.call(this,state_3139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2278__auto____0;
cljs$core$async$reduce_$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2278__auto____1;
return cljs$core$async$reduce_$_state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_3159 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_3159[(6)] = c__2637__auto__);

return statearr_3159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));

return c__2637__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__2637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_3178){
var state_val_3179 = (state_3178[(1)]);
if((state_val_3179 === (1))){
var inst_3173 = cljs.core.async.reduce(f__$1,init,ch);
var state_3178__$1 = state_3178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3178__$1,(2),inst_3173);
} else {
if((state_val_3179 === (2))){
var inst_3175 = (state_3178[(2)]);
var inst_3176 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_3175) : f__$1.call(null,inst_3175));
var state_3178__$1 = state_3178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3178__$1,inst_3176);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__2278__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2278__auto____0 = (function (){
var statearr_3180 = [null,null,null,null,null,null,null];
(statearr_3180[(0)] = cljs$core$async$transduce_$_state_machine__2278__auto__);

(statearr_3180[(1)] = (1));

return statearr_3180;
});
var cljs$core$async$transduce_$_state_machine__2278__auto____1 = (function (state_3178){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_3178);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e3181){var ex__2281__auto__ = e3181;
var statearr_3182_3185 = state_3178;
(statearr_3182_3185[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_3178[(4)]))){
var statearr_3183_3186 = state_3178;
(statearr_3183_3186[(1)] = cljs.core.first((state_3178[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3187 = state_3178;
state_3178 = G__3187;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2278__auto__ = function(state_3178){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2278__auto____1.call(this,state_3178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2278__auto____0;
cljs$core$async$transduce_$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2278__auto____1;
return cljs$core$async$transduce_$_state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_3184 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_3184[(6)] = c__2637__auto__);

return statearr_3184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));

return c__2637__auto__;
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
var G__3189 = arguments.length;
switch (G__3189) {
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
var c__2637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_3214){
var state_val_3215 = (state_3214[(1)]);
if((state_val_3215 === (7))){
var inst_3196 = (state_3214[(2)]);
var state_3214__$1 = state_3214;
var statearr_3216_3238 = state_3214__$1;
(statearr_3216_3238[(2)] = inst_3196);

(statearr_3216_3238[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3215 === (1))){
var inst_3190 = cljs.core.seq(coll);
var inst_3191 = inst_3190;
var state_3214__$1 = (function (){var statearr_3217 = state_3214;
(statearr_3217[(7)] = inst_3191);

return statearr_3217;
})();
var statearr_3218_3239 = state_3214__$1;
(statearr_3218_3239[(2)] = null);

(statearr_3218_3239[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3215 === (4))){
var inst_3191 = (state_3214[(7)]);
var inst_3194 = cljs.core.first(inst_3191);
var state_3214__$1 = state_3214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_3214__$1,(7),ch,inst_3194);
} else {
if((state_val_3215 === (13))){
var inst_3208 = (state_3214[(2)]);
var state_3214__$1 = state_3214;
var statearr_3219_3240 = state_3214__$1;
(statearr_3219_3240[(2)] = inst_3208);

(statearr_3219_3240[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3215 === (6))){
var inst_3199 = (state_3214[(2)]);
var state_3214__$1 = state_3214;
if(cljs.core.truth_(inst_3199)){
var statearr_3220_3241 = state_3214__$1;
(statearr_3220_3241[(1)] = (8));

} else {
var statearr_3221_3242 = state_3214__$1;
(statearr_3221_3242[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3215 === (3))){
var inst_3212 = (state_3214[(2)]);
var state_3214__$1 = state_3214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3214__$1,inst_3212);
} else {
if((state_val_3215 === (12))){
var state_3214__$1 = state_3214;
var statearr_3222_3243 = state_3214__$1;
(statearr_3222_3243[(2)] = null);

(statearr_3222_3243[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3215 === (2))){
var inst_3191 = (state_3214[(7)]);
var state_3214__$1 = state_3214;
if(cljs.core.truth_(inst_3191)){
var statearr_3223_3244 = state_3214__$1;
(statearr_3223_3244[(1)] = (4));

} else {
var statearr_3224_3245 = state_3214__$1;
(statearr_3224_3245[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3215 === (11))){
var inst_3205 = cljs.core.async.close_BANG_(ch);
var state_3214__$1 = state_3214;
var statearr_3225_3246 = state_3214__$1;
(statearr_3225_3246[(2)] = inst_3205);

(statearr_3225_3246[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3215 === (9))){
var state_3214__$1 = state_3214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3226_3247 = state_3214__$1;
(statearr_3226_3247[(1)] = (11));

} else {
var statearr_3227_3248 = state_3214__$1;
(statearr_3227_3248[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3215 === (5))){
var inst_3191 = (state_3214[(7)]);
var state_3214__$1 = state_3214;
var statearr_3228_3249 = state_3214__$1;
(statearr_3228_3249[(2)] = inst_3191);

(statearr_3228_3249[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3215 === (10))){
var inst_3210 = (state_3214[(2)]);
var state_3214__$1 = state_3214;
var statearr_3229_3250 = state_3214__$1;
(statearr_3229_3250[(2)] = inst_3210);

(statearr_3229_3250[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3215 === (8))){
var inst_3191 = (state_3214[(7)]);
var inst_3201 = cljs.core.next(inst_3191);
var inst_3191__$1 = inst_3201;
var state_3214__$1 = (function (){var statearr_3230 = state_3214;
(statearr_3230[(7)] = inst_3191__$1);

return statearr_3230;
})();
var statearr_3231_3251 = state_3214__$1;
(statearr_3231_3251[(2)] = null);

(statearr_3231_3251[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_3232 = [null,null,null,null,null,null,null,null];
(statearr_3232[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_3232[(1)] = (1));

return statearr_3232;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_3214){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_3214);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e3233){var ex__2281__auto__ = e3233;
var statearr_3234_3252 = state_3214;
(statearr_3234_3252[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_3214[(4)]))){
var statearr_3235_3253 = state_3214;
(statearr_3235_3253[(1)] = cljs.core.first((state_3214[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3254 = state_3214;
state_3214 = G__3254;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_3214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_3214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_3236 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_3236[(6)] = c__2637__auto__);

return statearr_3236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));

return c__2637__auto__;
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
var G__3256 = arguments.length;
switch (G__3256) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_3258 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_3258(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_3259 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_3259(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_3260 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_3260(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_3261 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_3261(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3262 = (function (ch,cs,meta3263){
this.ch = ch;
this.cs = cs;
this.meta3263 = meta3263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3264,meta3263__$1){
var self__ = this;
var _3264__$1 = this;
return (new cljs.core.async.t_cljs$core$async3262(self__.ch,self__.cs,meta3263__$1));
}));

(cljs.core.async.t_cljs$core$async3262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3264){
var self__ = this;
var _3264__$1 = this;
return self__.meta3263;
}));

(cljs.core.async.t_cljs$core$async3262.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async3262.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3262.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async3262.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async3262.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async3262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta3263], null);
}));

(cljs.core.async.t_cljs$core$async3262.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3262");

(cljs.core.async.t_cljs$core$async3262.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async3262");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3262.
 */
cljs.core.async.__GT_t_cljs$core$async3262 = (function cljs$core$async$mult_$___GT_t_cljs$core$async3262(ch__$1,cs__$1,meta3263){
return (new cljs.core.async.t_cljs$core$async3262(ch__$1,cs__$1,meta3263));
});

}

return (new cljs.core.async.t_cljs$core$async3262(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__2637__auto___3481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_3397){
var state_val_3398 = (state_3397[(1)]);
if((state_val_3398 === (7))){
var inst_3393 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
var statearr_3399_3482 = state_3397__$1;
(statearr_3399_3482[(2)] = inst_3393);

(statearr_3399_3482[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (20))){
var inst_3298 = (state_3397[(7)]);
var inst_3310 = cljs.core.first(inst_3298);
var inst_3311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_3310,(0),null);
var inst_3312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_3310,(1),null);
var state_3397__$1 = (function (){var statearr_3400 = state_3397;
(statearr_3400[(8)] = inst_3311);

return statearr_3400;
})();
if(cljs.core.truth_(inst_3312)){
var statearr_3401_3483 = state_3397__$1;
(statearr_3401_3483[(1)] = (22));

} else {
var statearr_3402_3484 = state_3397__$1;
(statearr_3402_3484[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (27))){
var inst_3347 = (state_3397[(9)]);
var inst_3342 = (state_3397[(10)]);
var inst_3267 = (state_3397[(11)]);
var inst_3340 = (state_3397[(12)]);
var inst_3347__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_3340,inst_3342);
var inst_3348 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_3347__$1,inst_3267,done);
var state_3397__$1 = (function (){var statearr_3403 = state_3397;
(statearr_3403[(9)] = inst_3347__$1);

return statearr_3403;
})();
if(cljs.core.truth_(inst_3348)){
var statearr_3404_3485 = state_3397__$1;
(statearr_3404_3485[(1)] = (30));

} else {
var statearr_3405_3486 = state_3397__$1;
(statearr_3405_3486[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (1))){
var state_3397__$1 = state_3397;
var statearr_3406_3487 = state_3397__$1;
(statearr_3406_3487[(2)] = null);

(statearr_3406_3487[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (24))){
var inst_3298 = (state_3397[(7)]);
var inst_3317 = (state_3397[(2)]);
var inst_3318 = cljs.core.next(inst_3298);
var inst_3276 = inst_3318;
var inst_3277 = null;
var inst_3278 = (0);
var inst_3279 = (0);
var state_3397__$1 = (function (){var statearr_3407 = state_3397;
(statearr_3407[(13)] = inst_3279);

(statearr_3407[(14)] = inst_3317);

(statearr_3407[(15)] = inst_3278);

(statearr_3407[(16)] = inst_3276);

(statearr_3407[(17)] = inst_3277);

return statearr_3407;
})();
var statearr_3408_3488 = state_3397__$1;
(statearr_3408_3488[(2)] = null);

(statearr_3408_3488[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (39))){
var state_3397__$1 = state_3397;
var statearr_3412_3489 = state_3397__$1;
(statearr_3412_3489[(2)] = null);

(statearr_3412_3489[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (4))){
var inst_3267 = (state_3397[(11)]);
var inst_3267__$1 = (state_3397[(2)]);
var inst_3268 = (inst_3267__$1 == null);
var state_3397__$1 = (function (){var statearr_3413 = state_3397;
(statearr_3413[(11)] = inst_3267__$1);

return statearr_3413;
})();
if(cljs.core.truth_(inst_3268)){
var statearr_3414_3490 = state_3397__$1;
(statearr_3414_3490[(1)] = (5));

} else {
var statearr_3415_3491 = state_3397__$1;
(statearr_3415_3491[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (15))){
var inst_3279 = (state_3397[(13)]);
var inst_3278 = (state_3397[(15)]);
var inst_3276 = (state_3397[(16)]);
var inst_3277 = (state_3397[(17)]);
var inst_3294 = (state_3397[(2)]);
var inst_3295 = (inst_3279 + (1));
var tmp3409 = inst_3278;
var tmp3410 = inst_3276;
var tmp3411 = inst_3277;
var inst_3276__$1 = tmp3410;
var inst_3277__$1 = tmp3411;
var inst_3278__$1 = tmp3409;
var inst_3279__$1 = inst_3295;
var state_3397__$1 = (function (){var statearr_3416 = state_3397;
(statearr_3416[(13)] = inst_3279__$1);

(statearr_3416[(15)] = inst_3278__$1);

(statearr_3416[(16)] = inst_3276__$1);

(statearr_3416[(17)] = inst_3277__$1);

(statearr_3416[(18)] = inst_3294);

return statearr_3416;
})();
var statearr_3417_3492 = state_3397__$1;
(statearr_3417_3492[(2)] = null);

(statearr_3417_3492[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (21))){
var inst_3321 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
var statearr_3421_3493 = state_3397__$1;
(statearr_3421_3493[(2)] = inst_3321);

(statearr_3421_3493[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (31))){
var inst_3347 = (state_3397[(9)]);
var inst_3351 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_3347);
var state_3397__$1 = state_3397;
var statearr_3422_3494 = state_3397__$1;
(statearr_3422_3494[(2)] = inst_3351);

(statearr_3422_3494[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (32))){
var inst_3341 = (state_3397[(19)]);
var inst_3342 = (state_3397[(10)]);
var inst_3339 = (state_3397[(20)]);
var inst_3340 = (state_3397[(12)]);
var inst_3353 = (state_3397[(2)]);
var inst_3354 = (inst_3342 + (1));
var tmp3418 = inst_3341;
var tmp3419 = inst_3339;
var tmp3420 = inst_3340;
var inst_3339__$1 = tmp3419;
var inst_3340__$1 = tmp3420;
var inst_3341__$1 = tmp3418;
var inst_3342__$1 = inst_3354;
var state_3397__$1 = (function (){var statearr_3423 = state_3397;
(statearr_3423[(19)] = inst_3341__$1);

(statearr_3423[(10)] = inst_3342__$1);

(statearr_3423[(21)] = inst_3353);

(statearr_3423[(20)] = inst_3339__$1);

(statearr_3423[(12)] = inst_3340__$1);

return statearr_3423;
})();
var statearr_3424_3495 = state_3397__$1;
(statearr_3424_3495[(2)] = null);

(statearr_3424_3495[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (40))){
var inst_3366 = (state_3397[(22)]);
var inst_3370 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_3366);
var state_3397__$1 = state_3397;
var statearr_3425_3496 = state_3397__$1;
(statearr_3425_3496[(2)] = inst_3370);

(statearr_3425_3496[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (33))){
var inst_3357 = (state_3397[(23)]);
var inst_3359 = cljs.core.chunked_seq_QMARK_(inst_3357);
var state_3397__$1 = state_3397;
if(inst_3359){
var statearr_3426_3497 = state_3397__$1;
(statearr_3426_3497[(1)] = (36));

} else {
var statearr_3427_3498 = state_3397__$1;
(statearr_3427_3498[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (13))){
var inst_3288 = (state_3397[(24)]);
var inst_3291 = cljs.core.async.close_BANG_(inst_3288);
var state_3397__$1 = state_3397;
var statearr_3428_3499 = state_3397__$1;
(statearr_3428_3499[(2)] = inst_3291);

(statearr_3428_3499[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (22))){
var inst_3311 = (state_3397[(8)]);
var inst_3314 = cljs.core.async.close_BANG_(inst_3311);
var state_3397__$1 = state_3397;
var statearr_3429_3500 = state_3397__$1;
(statearr_3429_3500[(2)] = inst_3314);

(statearr_3429_3500[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (36))){
var inst_3357 = (state_3397[(23)]);
var inst_3361 = cljs.core.chunk_first(inst_3357);
var inst_3362 = cljs.core.chunk_rest(inst_3357);
var inst_3363 = cljs.core.count(inst_3361);
var inst_3339 = inst_3362;
var inst_3340 = inst_3361;
var inst_3341 = inst_3363;
var inst_3342 = (0);
var state_3397__$1 = (function (){var statearr_3430 = state_3397;
(statearr_3430[(19)] = inst_3341);

(statearr_3430[(10)] = inst_3342);

(statearr_3430[(20)] = inst_3339);

(statearr_3430[(12)] = inst_3340);

return statearr_3430;
})();
var statearr_3431_3501 = state_3397__$1;
(statearr_3431_3501[(2)] = null);

(statearr_3431_3501[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (41))){
var inst_3357 = (state_3397[(23)]);
var inst_3372 = (state_3397[(2)]);
var inst_3373 = cljs.core.next(inst_3357);
var inst_3339 = inst_3373;
var inst_3340 = null;
var inst_3341 = (0);
var inst_3342 = (0);
var state_3397__$1 = (function (){var statearr_3432 = state_3397;
(statearr_3432[(19)] = inst_3341);

(statearr_3432[(10)] = inst_3342);

(statearr_3432[(20)] = inst_3339);

(statearr_3432[(12)] = inst_3340);

(statearr_3432[(25)] = inst_3372);

return statearr_3432;
})();
var statearr_3433_3502 = state_3397__$1;
(statearr_3433_3502[(2)] = null);

(statearr_3433_3502[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (43))){
var state_3397__$1 = state_3397;
var statearr_3434_3503 = state_3397__$1;
(statearr_3434_3503[(2)] = null);

(statearr_3434_3503[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (29))){
var inst_3381 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
var statearr_3435_3504 = state_3397__$1;
(statearr_3435_3504[(2)] = inst_3381);

(statearr_3435_3504[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (44))){
var inst_3390 = (state_3397[(2)]);
var state_3397__$1 = (function (){var statearr_3436 = state_3397;
(statearr_3436[(26)] = inst_3390);

return statearr_3436;
})();
var statearr_3437_3505 = state_3397__$1;
(statearr_3437_3505[(2)] = null);

(statearr_3437_3505[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (6))){
var inst_3331 = (state_3397[(27)]);
var inst_3330 = cljs.core.deref(cs);
var inst_3331__$1 = cljs.core.keys(inst_3330);
var inst_3332 = cljs.core.count(inst_3331__$1);
var inst_3333 = cljs.core.reset_BANG_(dctr,inst_3332);
var inst_3338 = cljs.core.seq(inst_3331__$1);
var inst_3339 = inst_3338;
var inst_3340 = null;
var inst_3341 = (0);
var inst_3342 = (0);
var state_3397__$1 = (function (){var statearr_3438 = state_3397;
(statearr_3438[(19)] = inst_3341);

(statearr_3438[(10)] = inst_3342);

(statearr_3438[(27)] = inst_3331__$1);

(statearr_3438[(20)] = inst_3339);

(statearr_3438[(28)] = inst_3333);

(statearr_3438[(12)] = inst_3340);

return statearr_3438;
})();
var statearr_3439_3506 = state_3397__$1;
(statearr_3439_3506[(2)] = null);

(statearr_3439_3506[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (28))){
var inst_3339 = (state_3397[(20)]);
var inst_3357 = (state_3397[(23)]);
var inst_3357__$1 = cljs.core.seq(inst_3339);
var state_3397__$1 = (function (){var statearr_3440 = state_3397;
(statearr_3440[(23)] = inst_3357__$1);

return statearr_3440;
})();
if(inst_3357__$1){
var statearr_3441_3507 = state_3397__$1;
(statearr_3441_3507[(1)] = (33));

} else {
var statearr_3442_3508 = state_3397__$1;
(statearr_3442_3508[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (25))){
var inst_3341 = (state_3397[(19)]);
var inst_3342 = (state_3397[(10)]);
var inst_3344 = (inst_3342 < inst_3341);
var inst_3345 = inst_3344;
var state_3397__$1 = state_3397;
if(cljs.core.truth_(inst_3345)){
var statearr_3443_3509 = state_3397__$1;
(statearr_3443_3509[(1)] = (27));

} else {
var statearr_3444_3510 = state_3397__$1;
(statearr_3444_3510[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (34))){
var state_3397__$1 = state_3397;
var statearr_3445_3511 = state_3397__$1;
(statearr_3445_3511[(2)] = null);

(statearr_3445_3511[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (17))){
var state_3397__$1 = state_3397;
var statearr_3446_3512 = state_3397__$1;
(statearr_3446_3512[(2)] = null);

(statearr_3446_3512[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (3))){
var inst_3395 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3397__$1,inst_3395);
} else {
if((state_val_3398 === (12))){
var inst_3326 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
var statearr_3447_3513 = state_3397__$1;
(statearr_3447_3513[(2)] = inst_3326);

(statearr_3447_3513[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (2))){
var state_3397__$1 = state_3397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3397__$1,(4),ch);
} else {
if((state_val_3398 === (23))){
var state_3397__$1 = state_3397;
var statearr_3448_3514 = state_3397__$1;
(statearr_3448_3514[(2)] = null);

(statearr_3448_3514[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (35))){
var inst_3379 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
var statearr_3449_3515 = state_3397__$1;
(statearr_3449_3515[(2)] = inst_3379);

(statearr_3449_3515[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (19))){
var inst_3298 = (state_3397[(7)]);
var inst_3302 = cljs.core.chunk_first(inst_3298);
var inst_3303 = cljs.core.chunk_rest(inst_3298);
var inst_3304 = cljs.core.count(inst_3302);
var inst_3276 = inst_3303;
var inst_3277 = inst_3302;
var inst_3278 = inst_3304;
var inst_3279 = (0);
var state_3397__$1 = (function (){var statearr_3450 = state_3397;
(statearr_3450[(13)] = inst_3279);

(statearr_3450[(15)] = inst_3278);

(statearr_3450[(16)] = inst_3276);

(statearr_3450[(17)] = inst_3277);

return statearr_3450;
})();
var statearr_3451_3516 = state_3397__$1;
(statearr_3451_3516[(2)] = null);

(statearr_3451_3516[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (11))){
var inst_3298 = (state_3397[(7)]);
var inst_3276 = (state_3397[(16)]);
var inst_3298__$1 = cljs.core.seq(inst_3276);
var state_3397__$1 = (function (){var statearr_3452 = state_3397;
(statearr_3452[(7)] = inst_3298__$1);

return statearr_3452;
})();
if(inst_3298__$1){
var statearr_3453_3517 = state_3397__$1;
(statearr_3453_3517[(1)] = (16));

} else {
var statearr_3454_3518 = state_3397__$1;
(statearr_3454_3518[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (9))){
var inst_3328 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
var statearr_3455_3519 = state_3397__$1;
(statearr_3455_3519[(2)] = inst_3328);

(statearr_3455_3519[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (5))){
var inst_3274 = cljs.core.deref(cs);
var inst_3275 = cljs.core.seq(inst_3274);
var inst_3276 = inst_3275;
var inst_3277 = null;
var inst_3278 = (0);
var inst_3279 = (0);
var state_3397__$1 = (function (){var statearr_3456 = state_3397;
(statearr_3456[(13)] = inst_3279);

(statearr_3456[(15)] = inst_3278);

(statearr_3456[(16)] = inst_3276);

(statearr_3456[(17)] = inst_3277);

return statearr_3456;
})();
var statearr_3457_3520 = state_3397__$1;
(statearr_3457_3520[(2)] = null);

(statearr_3457_3520[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (14))){
var state_3397__$1 = state_3397;
var statearr_3458_3521 = state_3397__$1;
(statearr_3458_3521[(2)] = null);

(statearr_3458_3521[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (45))){
var inst_3387 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
var statearr_3459_3522 = state_3397__$1;
(statearr_3459_3522[(2)] = inst_3387);

(statearr_3459_3522[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (26))){
var inst_3331 = (state_3397[(27)]);
var inst_3383 = (state_3397[(2)]);
var inst_3384 = cljs.core.seq(inst_3331);
var state_3397__$1 = (function (){var statearr_3460 = state_3397;
(statearr_3460[(29)] = inst_3383);

return statearr_3460;
})();
if(inst_3384){
var statearr_3461_3523 = state_3397__$1;
(statearr_3461_3523[(1)] = (42));

} else {
var statearr_3462_3524 = state_3397__$1;
(statearr_3462_3524[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (16))){
var inst_3298 = (state_3397[(7)]);
var inst_3300 = cljs.core.chunked_seq_QMARK_(inst_3298);
var state_3397__$1 = state_3397;
if(inst_3300){
var statearr_3463_3525 = state_3397__$1;
(statearr_3463_3525[(1)] = (19));

} else {
var statearr_3464_3526 = state_3397__$1;
(statearr_3464_3526[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (38))){
var inst_3376 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
var statearr_3465_3527 = state_3397__$1;
(statearr_3465_3527[(2)] = inst_3376);

(statearr_3465_3527[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (30))){
var state_3397__$1 = state_3397;
var statearr_3466_3528 = state_3397__$1;
(statearr_3466_3528[(2)] = null);

(statearr_3466_3528[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (10))){
var inst_3279 = (state_3397[(13)]);
var inst_3277 = (state_3397[(17)]);
var inst_3287 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_3277,inst_3279);
var inst_3288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_3287,(0),null);
var inst_3289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_3287,(1),null);
var state_3397__$1 = (function (){var statearr_3467 = state_3397;
(statearr_3467[(24)] = inst_3288);

return statearr_3467;
})();
if(cljs.core.truth_(inst_3289)){
var statearr_3468_3529 = state_3397__$1;
(statearr_3468_3529[(1)] = (13));

} else {
var statearr_3469_3530 = state_3397__$1;
(statearr_3469_3530[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (18))){
var inst_3324 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
var statearr_3470_3531 = state_3397__$1;
(statearr_3470_3531[(2)] = inst_3324);

(statearr_3470_3531[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (42))){
var state_3397__$1 = state_3397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3397__$1,(45),dchan);
} else {
if((state_val_3398 === (37))){
var inst_3267 = (state_3397[(11)]);
var inst_3366 = (state_3397[(22)]);
var inst_3357 = (state_3397[(23)]);
var inst_3366__$1 = cljs.core.first(inst_3357);
var inst_3367 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_3366__$1,inst_3267,done);
var state_3397__$1 = (function (){var statearr_3471 = state_3397;
(statearr_3471[(22)] = inst_3366__$1);

return statearr_3471;
})();
if(cljs.core.truth_(inst_3367)){
var statearr_3472_3532 = state_3397__$1;
(statearr_3472_3532[(1)] = (39));

} else {
var statearr_3473_3533 = state_3397__$1;
(statearr_3473_3533[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3398 === (8))){
var inst_3279 = (state_3397[(13)]);
var inst_3278 = (state_3397[(15)]);
var inst_3281 = (inst_3279 < inst_3278);
var inst_3282 = inst_3281;
var state_3397__$1 = state_3397;
if(cljs.core.truth_(inst_3282)){
var statearr_3474_3534 = state_3397__$1;
(statearr_3474_3534[(1)] = (10));

} else {
var statearr_3475_3535 = state_3397__$1;
(statearr_3475_3535[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mult_$_state_machine__2278__auto__ = null;
var cljs$core$async$mult_$_state_machine__2278__auto____0 = (function (){
var statearr_3476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3476[(0)] = cljs$core$async$mult_$_state_machine__2278__auto__);

(statearr_3476[(1)] = (1));

return statearr_3476;
});
var cljs$core$async$mult_$_state_machine__2278__auto____1 = (function (state_3397){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_3397);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e3477){var ex__2281__auto__ = e3477;
var statearr_3478_3536 = state_3397;
(statearr_3478_3536[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_3397[(4)]))){
var statearr_3479_3537 = state_3397;
(statearr_3479_3537[(1)] = cljs.core.first((state_3397[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3538 = state_3397;
state_3397 = G__3538;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2278__auto__ = function(state_3397){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2278__auto____1.call(this,state_3397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2278__auto____0;
cljs$core$async$mult_$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2278__auto____1;
return cljs$core$async$mult_$_state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_3480 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_3480[(6)] = c__2637__auto___3481);

return statearr_3480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
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
var G__3540 = arguments.length;
switch (G__3540) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_3542 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_3542(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_3543 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_3543(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_3544 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_3544(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_3545 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_3545(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_3546 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_3546(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___3556 = arguments.length;
var i__4865__auto___3557 = (0);
while(true){
if((i__4865__auto___3557 < len__4864__auto___3556)){
args__4870__auto__.push((arguments[i__4865__auto___3557]));

var G__3558 = (i__4865__auto___3557 + (1));
i__4865__auto___3557 = G__3558;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__3551){
var map__3552 = p__3551;
var map__3552__$1 = cljs.core.__destructure_map(map__3552);
var opts = map__3552__$1;
var statearr_3553_3559 = state;
(statearr_3553_3559[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_3554_3560 = state;
(statearr_3554_3560[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_3555_3561 = state;
(statearr_3555_3561[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq3547){
var G__3548 = cljs.core.first(seq3547);
var seq3547__$1 = cljs.core.next(seq3547);
var G__3549 = cljs.core.first(seq3547__$1);
var seq3547__$2 = cljs.core.next(seq3547__$1);
var G__3550 = cljs.core.first(seq3547__$2);
var seq3547__$3 = cljs.core.next(seq3547__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3548,G__3549,G__3550,seq3547__$3);
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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
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
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3562 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta3563){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta3563 = meta3563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3564,meta3563__$1){
var self__ = this;
var _3564__$1 = this;
return (new cljs.core.async.t_cljs$core$async3562(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta3563__$1));
}));

(cljs.core.async.t_cljs$core$async3562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3564){
var self__ = this;
var _3564__$1 = this;
return self__.meta3563;
}));

(cljs.core.async.t_cljs$core$async3562.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async3562.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3562.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async3562.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async3562.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async3562.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async3562.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async3562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta3563], null);
}));

(cljs.core.async.t_cljs$core$async3562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3562");

(cljs.core.async.t_cljs$core$async3562.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async3562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3562.
 */
cljs.core.async.__GT_t_cljs$core$async3562 = (function cljs$core$async$mix_$___GT_t_cljs$core$async3562(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3563){
return (new cljs.core.async.t_cljs$core$async3562(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3563));
});

}

return (new cljs.core.async.t_cljs$core$async3562(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2637__auto___3677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_3632){
var state_val_3633 = (state_3632[(1)]);
if((state_val_3633 === (7))){
var inst_3592 = (state_3632[(2)]);
var state_3632__$1 = state_3632;
if(cljs.core.truth_(inst_3592)){
var statearr_3634_3678 = state_3632__$1;
(statearr_3634_3678[(1)] = (8));

} else {
var statearr_3635_3679 = state_3632__$1;
(statearr_3635_3679[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (20))){
var inst_3585 = (state_3632[(7)]);
var state_3632__$1 = state_3632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_3632__$1,(23),out,inst_3585);
} else {
if((state_val_3633 === (1))){
var inst_3568 = calc_state();
var inst_3569 = cljs.core.__destructure_map(inst_3568);
var inst_3570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_3569,cljs.core.cst$kw$solos);
var inst_3571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_3569,cljs.core.cst$kw$mutes);
var inst_3572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_3569,cljs.core.cst$kw$reads);
var inst_3573 = inst_3568;
var state_3632__$1 = (function (){var statearr_3636 = state_3632;
(statearr_3636[(8)] = inst_3573);

(statearr_3636[(9)] = inst_3570);

(statearr_3636[(10)] = inst_3571);

(statearr_3636[(11)] = inst_3572);

return statearr_3636;
})();
var statearr_3637_3680 = state_3632__$1;
(statearr_3637_3680[(2)] = null);

(statearr_3637_3680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (24))){
var inst_3576 = (state_3632[(12)]);
var inst_3573 = inst_3576;
var state_3632__$1 = (function (){var statearr_3638 = state_3632;
(statearr_3638[(8)] = inst_3573);

return statearr_3638;
})();
var statearr_3639_3681 = state_3632__$1;
(statearr_3639_3681[(2)] = null);

(statearr_3639_3681[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (4))){
var inst_3587 = (state_3632[(13)]);
var inst_3585 = (state_3632[(7)]);
var inst_3584 = (state_3632[(2)]);
var inst_3585__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_3584,(0),null);
var inst_3586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_3584,(1),null);
var inst_3587__$1 = (inst_3585__$1 == null);
var state_3632__$1 = (function (){var statearr_3640 = state_3632;
(statearr_3640[(14)] = inst_3586);

(statearr_3640[(13)] = inst_3587__$1);

(statearr_3640[(7)] = inst_3585__$1);

return statearr_3640;
})();
if(cljs.core.truth_(inst_3587__$1)){
var statearr_3641_3682 = state_3632__$1;
(statearr_3641_3682[(1)] = (5));

} else {
var statearr_3642_3683 = state_3632__$1;
(statearr_3642_3683[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (15))){
var inst_3606 = (state_3632[(15)]);
var inst_3577 = (state_3632[(16)]);
var inst_3606__$1 = cljs.core.empty_QMARK_(inst_3577);
var state_3632__$1 = (function (){var statearr_3643 = state_3632;
(statearr_3643[(15)] = inst_3606__$1);

return statearr_3643;
})();
if(inst_3606__$1){
var statearr_3644_3684 = state_3632__$1;
(statearr_3644_3684[(1)] = (17));

} else {
var statearr_3645_3685 = state_3632__$1;
(statearr_3645_3685[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (21))){
var inst_3576 = (state_3632[(12)]);
var inst_3573 = inst_3576;
var state_3632__$1 = (function (){var statearr_3646 = state_3632;
(statearr_3646[(8)] = inst_3573);

return statearr_3646;
})();
var statearr_3647_3686 = state_3632__$1;
(statearr_3647_3686[(2)] = null);

(statearr_3647_3686[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (13))){
var inst_3599 = (state_3632[(2)]);
var inst_3600 = calc_state();
var inst_3573 = inst_3600;
var state_3632__$1 = (function (){var statearr_3648 = state_3632;
(statearr_3648[(8)] = inst_3573);

(statearr_3648[(17)] = inst_3599);

return statearr_3648;
})();
var statearr_3649_3687 = state_3632__$1;
(statearr_3649_3687[(2)] = null);

(statearr_3649_3687[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (22))){
var inst_3626 = (state_3632[(2)]);
var state_3632__$1 = state_3632;
var statearr_3650_3688 = state_3632__$1;
(statearr_3650_3688[(2)] = inst_3626);

(statearr_3650_3688[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (6))){
var inst_3586 = (state_3632[(14)]);
var inst_3590 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_3586,change);
var state_3632__$1 = state_3632;
var statearr_3651_3689 = state_3632__$1;
(statearr_3651_3689[(2)] = inst_3590);

(statearr_3651_3689[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (25))){
var state_3632__$1 = state_3632;
var statearr_3652_3690 = state_3632__$1;
(statearr_3652_3690[(2)] = null);

(statearr_3652_3690[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (17))){
var inst_3586 = (state_3632[(14)]);
var inst_3578 = (state_3632[(18)]);
var inst_3608 = (inst_3578.cljs$core$IFn$_invoke$arity$1 ? inst_3578.cljs$core$IFn$_invoke$arity$1(inst_3586) : inst_3578.call(null,inst_3586));
var inst_3609 = cljs.core.not(inst_3608);
var state_3632__$1 = state_3632;
var statearr_3653_3691 = state_3632__$1;
(statearr_3653_3691[(2)] = inst_3609);

(statearr_3653_3691[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (3))){
var inst_3630 = (state_3632[(2)]);
var state_3632__$1 = state_3632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3632__$1,inst_3630);
} else {
if((state_val_3633 === (12))){
var state_3632__$1 = state_3632;
var statearr_3654_3692 = state_3632__$1;
(statearr_3654_3692[(2)] = null);

(statearr_3654_3692[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (2))){
var inst_3573 = (state_3632[(8)]);
var inst_3576 = (state_3632[(12)]);
var inst_3576__$1 = cljs.core.__destructure_map(inst_3573);
var inst_3577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_3576__$1,cljs.core.cst$kw$solos);
var inst_3578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_3576__$1,cljs.core.cst$kw$mutes);
var inst_3579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_3576__$1,cljs.core.cst$kw$reads);
var state_3632__$1 = (function (){var statearr_3655 = state_3632;
(statearr_3655[(18)] = inst_3578);

(statearr_3655[(12)] = inst_3576__$1);

(statearr_3655[(16)] = inst_3577);

return statearr_3655;
})();
return cljs.core.async.ioc_alts_BANG_(state_3632__$1,(4),inst_3579);
} else {
if((state_val_3633 === (23))){
var inst_3617 = (state_3632[(2)]);
var state_3632__$1 = state_3632;
if(cljs.core.truth_(inst_3617)){
var statearr_3656_3693 = state_3632__$1;
(statearr_3656_3693[(1)] = (24));

} else {
var statearr_3657_3694 = state_3632__$1;
(statearr_3657_3694[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (19))){
var inst_3612 = (state_3632[(2)]);
var state_3632__$1 = state_3632;
var statearr_3658_3695 = state_3632__$1;
(statearr_3658_3695[(2)] = inst_3612);

(statearr_3658_3695[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (11))){
var inst_3586 = (state_3632[(14)]);
var inst_3596 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_3586);
var state_3632__$1 = state_3632;
var statearr_3659_3696 = state_3632__$1;
(statearr_3659_3696[(2)] = inst_3596);

(statearr_3659_3696[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (9))){
var inst_3586 = (state_3632[(14)]);
var inst_3603 = (state_3632[(19)]);
var inst_3577 = (state_3632[(16)]);
var inst_3603__$1 = (inst_3577.cljs$core$IFn$_invoke$arity$1 ? inst_3577.cljs$core$IFn$_invoke$arity$1(inst_3586) : inst_3577.call(null,inst_3586));
var state_3632__$1 = (function (){var statearr_3660 = state_3632;
(statearr_3660[(19)] = inst_3603__$1);

return statearr_3660;
})();
if(cljs.core.truth_(inst_3603__$1)){
var statearr_3661_3697 = state_3632__$1;
(statearr_3661_3697[(1)] = (14));

} else {
var statearr_3662_3698 = state_3632__$1;
(statearr_3662_3698[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (5))){
var inst_3587 = (state_3632[(13)]);
var state_3632__$1 = state_3632;
var statearr_3663_3699 = state_3632__$1;
(statearr_3663_3699[(2)] = inst_3587);

(statearr_3663_3699[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (14))){
var inst_3603 = (state_3632[(19)]);
var state_3632__$1 = state_3632;
var statearr_3664_3700 = state_3632__$1;
(statearr_3664_3700[(2)] = inst_3603);

(statearr_3664_3700[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (26))){
var inst_3622 = (state_3632[(2)]);
var state_3632__$1 = state_3632;
var statearr_3665_3701 = state_3632__$1;
(statearr_3665_3701[(2)] = inst_3622);

(statearr_3665_3701[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (16))){
var inst_3614 = (state_3632[(2)]);
var state_3632__$1 = state_3632;
if(cljs.core.truth_(inst_3614)){
var statearr_3666_3702 = state_3632__$1;
(statearr_3666_3702[(1)] = (20));

} else {
var statearr_3667_3703 = state_3632__$1;
(statearr_3667_3703[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (10))){
var inst_3628 = (state_3632[(2)]);
var state_3632__$1 = state_3632;
var statearr_3668_3704 = state_3632__$1;
(statearr_3668_3704[(2)] = inst_3628);

(statearr_3668_3704[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (18))){
var inst_3606 = (state_3632[(15)]);
var state_3632__$1 = state_3632;
var statearr_3669_3705 = state_3632__$1;
(statearr_3669_3705[(2)] = inst_3606);

(statearr_3669_3705[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3633 === (8))){
var inst_3585 = (state_3632[(7)]);
var inst_3594 = (inst_3585 == null);
var state_3632__$1 = state_3632;
if(cljs.core.truth_(inst_3594)){
var statearr_3670_3706 = state_3632__$1;
(statearr_3670_3706[(1)] = (11));

} else {
var statearr_3671_3707 = state_3632__$1;
(statearr_3671_3707[(1)] = (12));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mix_$_state_machine__2278__auto__ = null;
var cljs$core$async$mix_$_state_machine__2278__auto____0 = (function (){
var statearr_3672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3672[(0)] = cljs$core$async$mix_$_state_machine__2278__auto__);

(statearr_3672[(1)] = (1));

return statearr_3672;
});
var cljs$core$async$mix_$_state_machine__2278__auto____1 = (function (state_3632){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_3632);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e3673){var ex__2281__auto__ = e3673;
var statearr_3674_3708 = state_3632;
(statearr_3674_3708[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_3632[(4)]))){
var statearr_3675_3709 = state_3632;
(statearr_3675_3709[(1)] = cljs.core.first((state_3632[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3710 = state_3632;
state_3632 = G__3710;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2278__auto__ = function(state_3632){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2278__auto____1.call(this,state_3632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2278__auto____0;
cljs$core$async$mix_$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2278__auto____1;
return cljs$core$async$mix_$_state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_3676 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_3676[(6)] = c__2637__auto___3677);

return statearr_3676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_3713 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_3713(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_3714 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_3714(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_3715 = (function() {
var G__3716 = null;
var G__3716__1 = (function (p){
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
var G__3716__2 = (function (p,v){
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
G__3716 = function(p,v){
switch(arguments.length){
case 1:
return G__3716__1.call(this,p);
case 2:
return G__3716__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3716.cljs$core$IFn$_invoke$arity$1 = G__3716__1;
G__3716.cljs$core$IFn$_invoke$arity$2 = G__3716__2;
return G__3716;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__3712 = arguments.length;
switch (G__3712) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_3715.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_3715.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__3720 = arguments.length;
switch (G__3720) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__3718_SHARP_){
if(cljs.core.truth_((p1__3718_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__3718_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__3718_SHARP_.call(null,topic)))){
return p1__3718_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__3718_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3721 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta3722){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta3722 = meta3722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3723,meta3722__$1){
var self__ = this;
var _3723__$1 = this;
return (new cljs.core.async.t_cljs$core$async3721(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta3722__$1));
}));

(cljs.core.async.t_cljs$core$async3721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3723){
var self__ = this;
var _3723__$1 = this;
return self__.meta3722;
}));

(cljs.core.async.t_cljs$core$async3721.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async3721.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3721.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async3721.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async3721.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async3721.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async3721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta3722], null);
}));

(cljs.core.async.t_cljs$core$async3721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3721");

(cljs.core.async.t_cljs$core$async3721.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async3721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3721.
 */
cljs.core.async.__GT_t_cljs$core$async3721 = (function cljs$core$async$__GT_t_cljs$core$async3721(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3722){
return (new cljs.core.async.t_cljs$core$async3721(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3722));
});

}

return (new cljs.core.async.t_cljs$core$async3721(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2637__auto___3842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_3795){
var state_val_3796 = (state_3795[(1)]);
if((state_val_3796 === (7))){
var inst_3791 = (state_3795[(2)]);
var state_3795__$1 = state_3795;
var statearr_3797_3843 = state_3795__$1;
(statearr_3797_3843[(2)] = inst_3791);

(statearr_3797_3843[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (20))){
var state_3795__$1 = state_3795;
var statearr_3798_3844 = state_3795__$1;
(statearr_3798_3844[(2)] = null);

(statearr_3798_3844[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (1))){
var state_3795__$1 = state_3795;
var statearr_3799_3845 = state_3795__$1;
(statearr_3799_3845[(2)] = null);

(statearr_3799_3845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (24))){
var inst_3774 = (state_3795[(7)]);
var inst_3783 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_3774);
var state_3795__$1 = state_3795;
var statearr_3800_3846 = state_3795__$1;
(statearr_3800_3846[(2)] = inst_3783);

(statearr_3800_3846[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (4))){
var inst_3726 = (state_3795[(8)]);
var inst_3726__$1 = (state_3795[(2)]);
var inst_3727 = (inst_3726__$1 == null);
var state_3795__$1 = (function (){var statearr_3801 = state_3795;
(statearr_3801[(8)] = inst_3726__$1);

return statearr_3801;
})();
if(cljs.core.truth_(inst_3727)){
var statearr_3802_3847 = state_3795__$1;
(statearr_3802_3847[(1)] = (5));

} else {
var statearr_3803_3848 = state_3795__$1;
(statearr_3803_3848[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (15))){
var inst_3768 = (state_3795[(2)]);
var state_3795__$1 = state_3795;
var statearr_3804_3849 = state_3795__$1;
(statearr_3804_3849[(2)] = inst_3768);

(statearr_3804_3849[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (21))){
var inst_3788 = (state_3795[(2)]);
var state_3795__$1 = (function (){var statearr_3805 = state_3795;
(statearr_3805[(9)] = inst_3788);

return statearr_3805;
})();
var statearr_3806_3850 = state_3795__$1;
(statearr_3806_3850[(2)] = null);

(statearr_3806_3850[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (13))){
var inst_3750 = (state_3795[(10)]);
var inst_3752 = cljs.core.chunked_seq_QMARK_(inst_3750);
var state_3795__$1 = state_3795;
if(inst_3752){
var statearr_3807_3851 = state_3795__$1;
(statearr_3807_3851[(1)] = (16));

} else {
var statearr_3808_3852 = state_3795__$1;
(statearr_3808_3852[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (22))){
var inst_3780 = (state_3795[(2)]);
var state_3795__$1 = state_3795;
if(cljs.core.truth_(inst_3780)){
var statearr_3809_3853 = state_3795__$1;
(statearr_3809_3853[(1)] = (23));

} else {
var statearr_3810_3854 = state_3795__$1;
(statearr_3810_3854[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (6))){
var inst_3774 = (state_3795[(7)]);
var inst_3726 = (state_3795[(8)]);
var inst_3776 = (state_3795[(11)]);
var inst_3774__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_3726) : topic_fn.call(null,inst_3726));
var inst_3775 = cljs.core.deref(mults);
var inst_3776__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_3775,inst_3774__$1);
var state_3795__$1 = (function (){var statearr_3811 = state_3795;
(statearr_3811[(7)] = inst_3774__$1);

(statearr_3811[(11)] = inst_3776__$1);

return statearr_3811;
})();
if(cljs.core.truth_(inst_3776__$1)){
var statearr_3812_3855 = state_3795__$1;
(statearr_3812_3855[(1)] = (19));

} else {
var statearr_3813_3856 = state_3795__$1;
(statearr_3813_3856[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (25))){
var inst_3785 = (state_3795[(2)]);
var state_3795__$1 = state_3795;
var statearr_3814_3857 = state_3795__$1;
(statearr_3814_3857[(2)] = inst_3785);

(statearr_3814_3857[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (17))){
var inst_3750 = (state_3795[(10)]);
var inst_3759 = cljs.core.first(inst_3750);
var inst_3760 = cljs.core.async.muxch_STAR_(inst_3759);
var inst_3761 = cljs.core.async.close_BANG_(inst_3760);
var inst_3762 = cljs.core.next(inst_3750);
var inst_3736 = inst_3762;
var inst_3737 = null;
var inst_3738 = (0);
var inst_3739 = (0);
var state_3795__$1 = (function (){var statearr_3815 = state_3795;
(statearr_3815[(12)] = inst_3761);

(statearr_3815[(13)] = inst_3736);

(statearr_3815[(14)] = inst_3737);

(statearr_3815[(15)] = inst_3739);

(statearr_3815[(16)] = inst_3738);

return statearr_3815;
})();
var statearr_3816_3858 = state_3795__$1;
(statearr_3816_3858[(2)] = null);

(statearr_3816_3858[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (3))){
var inst_3793 = (state_3795[(2)]);
var state_3795__$1 = state_3795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3795__$1,inst_3793);
} else {
if((state_val_3796 === (12))){
var inst_3770 = (state_3795[(2)]);
var state_3795__$1 = state_3795;
var statearr_3817_3859 = state_3795__$1;
(statearr_3817_3859[(2)] = inst_3770);

(statearr_3817_3859[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (2))){
var state_3795__$1 = state_3795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3795__$1,(4),ch);
} else {
if((state_val_3796 === (23))){
var state_3795__$1 = state_3795;
var statearr_3818_3860 = state_3795__$1;
(statearr_3818_3860[(2)] = null);

(statearr_3818_3860[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (19))){
var inst_3726 = (state_3795[(8)]);
var inst_3776 = (state_3795[(11)]);
var inst_3778 = cljs.core.async.muxch_STAR_(inst_3776);
var state_3795__$1 = state_3795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_3795__$1,(22),inst_3778,inst_3726);
} else {
if((state_val_3796 === (11))){
var inst_3736 = (state_3795[(13)]);
var inst_3750 = (state_3795[(10)]);
var inst_3750__$1 = cljs.core.seq(inst_3736);
var state_3795__$1 = (function (){var statearr_3819 = state_3795;
(statearr_3819[(10)] = inst_3750__$1);

return statearr_3819;
})();
if(inst_3750__$1){
var statearr_3820_3861 = state_3795__$1;
(statearr_3820_3861[(1)] = (13));

} else {
var statearr_3821_3862 = state_3795__$1;
(statearr_3821_3862[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (9))){
var inst_3772 = (state_3795[(2)]);
var state_3795__$1 = state_3795;
var statearr_3822_3863 = state_3795__$1;
(statearr_3822_3863[(2)] = inst_3772);

(statearr_3822_3863[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (5))){
var inst_3733 = cljs.core.deref(mults);
var inst_3734 = cljs.core.vals(inst_3733);
var inst_3735 = cljs.core.seq(inst_3734);
var inst_3736 = inst_3735;
var inst_3737 = null;
var inst_3738 = (0);
var inst_3739 = (0);
var state_3795__$1 = (function (){var statearr_3823 = state_3795;
(statearr_3823[(13)] = inst_3736);

(statearr_3823[(14)] = inst_3737);

(statearr_3823[(15)] = inst_3739);

(statearr_3823[(16)] = inst_3738);

return statearr_3823;
})();
var statearr_3824_3864 = state_3795__$1;
(statearr_3824_3864[(2)] = null);

(statearr_3824_3864[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (14))){
var state_3795__$1 = state_3795;
var statearr_3828_3865 = state_3795__$1;
(statearr_3828_3865[(2)] = null);

(statearr_3828_3865[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (16))){
var inst_3750 = (state_3795[(10)]);
var inst_3754 = cljs.core.chunk_first(inst_3750);
var inst_3755 = cljs.core.chunk_rest(inst_3750);
var inst_3756 = cljs.core.count(inst_3754);
var inst_3736 = inst_3755;
var inst_3737 = inst_3754;
var inst_3738 = inst_3756;
var inst_3739 = (0);
var state_3795__$1 = (function (){var statearr_3829 = state_3795;
(statearr_3829[(13)] = inst_3736);

(statearr_3829[(14)] = inst_3737);

(statearr_3829[(15)] = inst_3739);

(statearr_3829[(16)] = inst_3738);

return statearr_3829;
})();
var statearr_3830_3866 = state_3795__$1;
(statearr_3830_3866[(2)] = null);

(statearr_3830_3866[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (10))){
var inst_3736 = (state_3795[(13)]);
var inst_3737 = (state_3795[(14)]);
var inst_3739 = (state_3795[(15)]);
var inst_3738 = (state_3795[(16)]);
var inst_3744 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_3737,inst_3739);
var inst_3745 = cljs.core.async.muxch_STAR_(inst_3744);
var inst_3746 = cljs.core.async.close_BANG_(inst_3745);
var inst_3747 = (inst_3739 + (1));
var tmp3825 = inst_3736;
var tmp3826 = inst_3737;
var tmp3827 = inst_3738;
var inst_3736__$1 = tmp3825;
var inst_3737__$1 = tmp3826;
var inst_3738__$1 = tmp3827;
var inst_3739__$1 = inst_3747;
var state_3795__$1 = (function (){var statearr_3831 = state_3795;
(statearr_3831[(13)] = inst_3736__$1);

(statearr_3831[(14)] = inst_3737__$1);

(statearr_3831[(15)] = inst_3739__$1);

(statearr_3831[(17)] = inst_3746);

(statearr_3831[(16)] = inst_3738__$1);

return statearr_3831;
})();
var statearr_3832_3867 = state_3795__$1;
(statearr_3832_3867[(2)] = null);

(statearr_3832_3867[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (18))){
var inst_3765 = (state_3795[(2)]);
var state_3795__$1 = state_3795;
var statearr_3833_3868 = state_3795__$1;
(statearr_3833_3868[(2)] = inst_3765);

(statearr_3833_3868[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3796 === (8))){
var inst_3739 = (state_3795[(15)]);
var inst_3738 = (state_3795[(16)]);
var inst_3741 = (inst_3739 < inst_3738);
var inst_3742 = inst_3741;
var state_3795__$1 = state_3795;
if(cljs.core.truth_(inst_3742)){
var statearr_3834_3869 = state_3795__$1;
(statearr_3834_3869[(1)] = (10));

} else {
var statearr_3835_3870 = state_3795__$1;
(statearr_3835_3870[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_3836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3836[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_3836[(1)] = (1));

return statearr_3836;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_3795){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_3795);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e3837){var ex__2281__auto__ = e3837;
var statearr_3838_3871 = state_3795;
(statearr_3838_3871[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_3795[(4)]))){
var statearr_3839_3872 = state_3795;
(statearr_3839_3872[(1)] = cljs.core.first((state_3795[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3873 = state_3795;
state_3795 = G__3873;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_3795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_3795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_3840 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_3840[(6)] = c__2637__auto___3842);

return statearr_3840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
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
var G__3875 = arguments.length;
switch (G__3875) {
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
var G__3878 = arguments.length;
switch (G__3878) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__3881 = arguments.length;
switch (G__3881) {
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
var c__2637__auto___3959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_3924){
var state_val_3925 = (state_3924[(1)]);
if((state_val_3925 === (7))){
var state_3924__$1 = state_3924;
var statearr_3926_3960 = state_3924__$1;
(statearr_3926_3960[(2)] = null);

(statearr_3926_3960[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (1))){
var state_3924__$1 = state_3924;
var statearr_3927_3961 = state_3924__$1;
(statearr_3927_3961[(2)] = null);

(statearr_3927_3961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (4))){
var inst_3885 = (state_3924[(7)]);
var inst_3884 = (state_3924[(8)]);
var inst_3887 = (inst_3885 < inst_3884);
var state_3924__$1 = state_3924;
if(cljs.core.truth_(inst_3887)){
var statearr_3928_3962 = state_3924__$1;
(statearr_3928_3962[(1)] = (6));

} else {
var statearr_3929_3963 = state_3924__$1;
(statearr_3929_3963[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (15))){
var inst_3910 = (state_3924[(9)]);
var inst_3915 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_3910);
var state_3924__$1 = state_3924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_3924__$1,(17),out,inst_3915);
} else {
if((state_val_3925 === (13))){
var inst_3910 = (state_3924[(9)]);
var inst_3910__$1 = (state_3924[(2)]);
var inst_3911 = cljs.core.some(cljs.core.nil_QMARK_,inst_3910__$1);
var state_3924__$1 = (function (){var statearr_3930 = state_3924;
(statearr_3930[(9)] = inst_3910__$1);

return statearr_3930;
})();
if(cljs.core.truth_(inst_3911)){
var statearr_3931_3964 = state_3924__$1;
(statearr_3931_3964[(1)] = (14));

} else {
var statearr_3932_3965 = state_3924__$1;
(statearr_3932_3965[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (6))){
var state_3924__$1 = state_3924;
var statearr_3933_3966 = state_3924__$1;
(statearr_3933_3966[(2)] = null);

(statearr_3933_3966[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (17))){
var inst_3917 = (state_3924[(2)]);
var state_3924__$1 = (function (){var statearr_3935 = state_3924;
(statearr_3935[(10)] = inst_3917);

return statearr_3935;
})();
var statearr_3936_3967 = state_3924__$1;
(statearr_3936_3967[(2)] = null);

(statearr_3936_3967[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (3))){
var inst_3922 = (state_3924[(2)]);
var state_3924__$1 = state_3924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3924__$1,inst_3922);
} else {
if((state_val_3925 === (12))){
var _ = (function (){var statearr_3937 = state_3924;
(statearr_3937[(4)] = cljs.core.rest((state_3924[(4)])));

return statearr_3937;
})();
var state_3924__$1 = state_3924;
var ex3934 = (state_3924__$1[(2)]);
var statearr_3938_3968 = state_3924__$1;
(statearr_3938_3968[(5)] = ex3934);


if((ex3934 instanceof Object)){
var statearr_3939_3969 = state_3924__$1;
(statearr_3939_3969[(1)] = (11));

(statearr_3939_3969[(5)] = null);

} else {
throw ex3934;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (2))){
var inst_3883 = cljs.core.reset_BANG_(dctr,cnt);
var inst_3884 = cnt;
var inst_3885 = (0);
var state_3924__$1 = (function (){var statearr_3940 = state_3924;
(statearr_3940[(7)] = inst_3885);

(statearr_3940[(11)] = inst_3883);

(statearr_3940[(8)] = inst_3884);

return statearr_3940;
})();
var statearr_3941_3970 = state_3924__$1;
(statearr_3941_3970[(2)] = null);

(statearr_3941_3970[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (11))){
var inst_3889 = (state_3924[(2)]);
var inst_3890 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_3924__$1 = (function (){var statearr_3942 = state_3924;
(statearr_3942[(12)] = inst_3889);

return statearr_3942;
})();
var statearr_3943_3971 = state_3924__$1;
(statearr_3943_3971[(2)] = inst_3890);

(statearr_3943_3971[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (9))){
var inst_3885 = (state_3924[(7)]);
var _ = (function (){var statearr_3944 = state_3924;
(statearr_3944[(4)] = cljs.core.cons((12),(state_3924[(4)])));

return statearr_3944;
})();
var inst_3896 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_3885) : chs__$1.call(null,inst_3885));
var inst_3897 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_3885) : done.call(null,inst_3885));
var inst_3898 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_3896,inst_3897);
var ___$1 = (function (){var statearr_3945 = state_3924;
(statearr_3945[(4)] = cljs.core.rest((state_3924[(4)])));

return statearr_3945;
})();
var state_3924__$1 = state_3924;
var statearr_3946_3972 = state_3924__$1;
(statearr_3946_3972[(2)] = inst_3898);

(statearr_3946_3972[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (5))){
var inst_3908 = (state_3924[(2)]);
var state_3924__$1 = (function (){var statearr_3947 = state_3924;
(statearr_3947[(13)] = inst_3908);

return statearr_3947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3924__$1,(13),dchan);
} else {
if((state_val_3925 === (14))){
var inst_3913 = cljs.core.async.close_BANG_(out);
var state_3924__$1 = state_3924;
var statearr_3948_3973 = state_3924__$1;
(statearr_3948_3973[(2)] = inst_3913);

(statearr_3948_3973[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (16))){
var inst_3920 = (state_3924[(2)]);
var state_3924__$1 = state_3924;
var statearr_3949_3974 = state_3924__$1;
(statearr_3949_3974[(2)] = inst_3920);

(statearr_3949_3974[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (10))){
var inst_3885 = (state_3924[(7)]);
var inst_3901 = (state_3924[(2)]);
var inst_3902 = (inst_3885 + (1));
var inst_3885__$1 = inst_3902;
var state_3924__$1 = (function (){var statearr_3950 = state_3924;
(statearr_3950[(7)] = inst_3885__$1);

(statearr_3950[(14)] = inst_3901);

return statearr_3950;
})();
var statearr_3951_3975 = state_3924__$1;
(statearr_3951_3975[(2)] = null);

(statearr_3951_3975[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3925 === (8))){
var inst_3906 = (state_3924[(2)]);
var state_3924__$1 = state_3924;
var statearr_3952_3976 = state_3924__$1;
(statearr_3952_3976[(2)] = inst_3906);

(statearr_3952_3976[(1)] = (5));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_3953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3953[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_3953[(1)] = (1));

return statearr_3953;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_3924){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_3924);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e3954){var ex__2281__auto__ = e3954;
var statearr_3955_3977 = state_3924;
(statearr_3955_3977[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_3924[(4)]))){
var statearr_3956_3978 = state_3924;
(statearr_3956_3978[(1)] = cljs.core.first((state_3924[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__3979 = state_3924;
state_3924 = G__3979;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_3924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_3924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_3957 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_3957[(6)] = c__2637__auto___3959);

return statearr_3957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
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
var G__3982 = arguments.length;
switch (G__3982) {
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
var c__2637__auto___4037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_4014){
var state_val_4015 = (state_4014[(1)]);
if((state_val_4015 === (7))){
var inst_3993 = (state_4014[(7)]);
var inst_3994 = (state_4014[(8)]);
var inst_3993__$1 = (state_4014[(2)]);
var inst_3994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_3993__$1,(0),null);
var inst_3995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_3993__$1,(1),null);
var inst_3996 = (inst_3994__$1 == null);
var state_4014__$1 = (function (){var statearr_4016 = state_4014;
(statearr_4016[(7)] = inst_3993__$1);

(statearr_4016[(8)] = inst_3994__$1);

(statearr_4016[(9)] = inst_3995);

return statearr_4016;
})();
if(cljs.core.truth_(inst_3996)){
var statearr_4017_4038 = state_4014__$1;
(statearr_4017_4038[(1)] = (8));

} else {
var statearr_4018_4039 = state_4014__$1;
(statearr_4018_4039[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4015 === (1))){
var inst_3983 = cljs.core.vec(chs);
var inst_3984 = inst_3983;
var state_4014__$1 = (function (){var statearr_4019 = state_4014;
(statearr_4019[(10)] = inst_3984);

return statearr_4019;
})();
var statearr_4020_4040 = state_4014__$1;
(statearr_4020_4040[(2)] = null);

(statearr_4020_4040[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4015 === (4))){
var inst_3984 = (state_4014[(10)]);
var state_4014__$1 = state_4014;
return cljs.core.async.ioc_alts_BANG_(state_4014__$1,(7),inst_3984);
} else {
if((state_val_4015 === (6))){
var inst_4010 = (state_4014[(2)]);
var state_4014__$1 = state_4014;
var statearr_4021_4041 = state_4014__$1;
(statearr_4021_4041[(2)] = inst_4010);

(statearr_4021_4041[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4015 === (3))){
var inst_4012 = (state_4014[(2)]);
var state_4014__$1 = state_4014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4014__$1,inst_4012);
} else {
if((state_val_4015 === (2))){
var inst_3984 = (state_4014[(10)]);
var inst_3986 = cljs.core.count(inst_3984);
var inst_3987 = (inst_3986 > (0));
var state_4014__$1 = state_4014;
if(cljs.core.truth_(inst_3987)){
var statearr_4023_4042 = state_4014__$1;
(statearr_4023_4042[(1)] = (4));

} else {
var statearr_4024_4043 = state_4014__$1;
(statearr_4024_4043[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4015 === (11))){
var inst_3984 = (state_4014[(10)]);
var inst_4003 = (state_4014[(2)]);
var tmp4022 = inst_3984;
var inst_3984__$1 = tmp4022;
var state_4014__$1 = (function (){var statearr_4025 = state_4014;
(statearr_4025[(11)] = inst_4003);

(statearr_4025[(10)] = inst_3984__$1);

return statearr_4025;
})();
var statearr_4026_4044 = state_4014__$1;
(statearr_4026_4044[(2)] = null);

(statearr_4026_4044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4015 === (9))){
var inst_3994 = (state_4014[(8)]);
var state_4014__$1 = state_4014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4014__$1,(11),out,inst_3994);
} else {
if((state_val_4015 === (5))){
var inst_4008 = cljs.core.async.close_BANG_(out);
var state_4014__$1 = state_4014;
var statearr_4027_4045 = state_4014__$1;
(statearr_4027_4045[(2)] = inst_4008);

(statearr_4027_4045[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4015 === (10))){
var inst_4006 = (state_4014[(2)]);
var state_4014__$1 = state_4014;
var statearr_4028_4046 = state_4014__$1;
(statearr_4028_4046[(2)] = inst_4006);

(statearr_4028_4046[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4015 === (8))){
var inst_3993 = (state_4014[(7)]);
var inst_3984 = (state_4014[(10)]);
var inst_3994 = (state_4014[(8)]);
var inst_3995 = (state_4014[(9)]);
var inst_3998 = (function (){var cs = inst_3984;
var vec__3989 = inst_3993;
var v = inst_3994;
var c = inst_3995;
return (function (p1__3980_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__3980_SHARP_);
});
})();
var inst_3999 = cljs.core.filterv(inst_3998,inst_3984);
var inst_3984__$1 = inst_3999;
var state_4014__$1 = (function (){var statearr_4029 = state_4014;
(statearr_4029[(10)] = inst_3984__$1);

return statearr_4029;
})();
var statearr_4030_4047 = state_4014__$1;
(statearr_4030_4047[(2)] = null);

(statearr_4030_4047[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_4031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4031[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_4031[(1)] = (1));

return statearr_4031;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_4014){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_4014);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e4032){var ex__2281__auto__ = e4032;
var statearr_4033_4048 = state_4014;
(statearr_4033_4048[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_4014[(4)]))){
var statearr_4034_4049 = state_4014;
(statearr_4034_4049[(1)] = cljs.core.first((state_4014[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__4050 = state_4014;
state_4014 = G__4050;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_4014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_4014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_4035 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_4035[(6)] = c__2637__auto___4037);

return statearr_4035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
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
var G__4052 = arguments.length;
switch (G__4052) {
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
var c__2637__auto___4098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_4076){
var state_val_4077 = (state_4076[(1)]);
if((state_val_4077 === (7))){
var inst_4058 = (state_4076[(7)]);
var inst_4058__$1 = (state_4076[(2)]);
var inst_4059 = (inst_4058__$1 == null);
var inst_4060 = cljs.core.not(inst_4059);
var state_4076__$1 = (function (){var statearr_4078 = state_4076;
(statearr_4078[(7)] = inst_4058__$1);

return statearr_4078;
})();
if(inst_4060){
var statearr_4079_4099 = state_4076__$1;
(statearr_4079_4099[(1)] = (8));

} else {
var statearr_4080_4100 = state_4076__$1;
(statearr_4080_4100[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4077 === (1))){
var inst_4053 = (0);
var state_4076__$1 = (function (){var statearr_4081 = state_4076;
(statearr_4081[(8)] = inst_4053);

return statearr_4081;
})();
var statearr_4082_4101 = state_4076__$1;
(statearr_4082_4101[(2)] = null);

(statearr_4082_4101[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4077 === (4))){
var state_4076__$1 = state_4076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4076__$1,(7),ch);
} else {
if((state_val_4077 === (6))){
var inst_4071 = (state_4076[(2)]);
var state_4076__$1 = state_4076;
var statearr_4083_4102 = state_4076__$1;
(statearr_4083_4102[(2)] = inst_4071);

(statearr_4083_4102[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4077 === (3))){
var inst_4073 = (state_4076[(2)]);
var inst_4074 = cljs.core.async.close_BANG_(out);
var state_4076__$1 = (function (){var statearr_4084 = state_4076;
(statearr_4084[(9)] = inst_4073);

return statearr_4084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_4076__$1,inst_4074);
} else {
if((state_val_4077 === (2))){
var inst_4053 = (state_4076[(8)]);
var inst_4055 = (inst_4053 < n);
var state_4076__$1 = state_4076;
if(cljs.core.truth_(inst_4055)){
var statearr_4085_4103 = state_4076__$1;
(statearr_4085_4103[(1)] = (4));

} else {
var statearr_4086_4104 = state_4076__$1;
(statearr_4086_4104[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4077 === (11))){
var inst_4053 = (state_4076[(8)]);
var inst_4063 = (state_4076[(2)]);
var inst_4064 = (inst_4053 + (1));
var inst_4053__$1 = inst_4064;
var state_4076__$1 = (function (){var statearr_4087 = state_4076;
(statearr_4087[(8)] = inst_4053__$1);

(statearr_4087[(10)] = inst_4063);

return statearr_4087;
})();
var statearr_4088_4105 = state_4076__$1;
(statearr_4088_4105[(2)] = null);

(statearr_4088_4105[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4077 === (9))){
var state_4076__$1 = state_4076;
var statearr_4089_4106 = state_4076__$1;
(statearr_4089_4106[(2)] = null);

(statearr_4089_4106[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4077 === (5))){
var state_4076__$1 = state_4076;
var statearr_4090_4107 = state_4076__$1;
(statearr_4090_4107[(2)] = null);

(statearr_4090_4107[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4077 === (10))){
var inst_4068 = (state_4076[(2)]);
var state_4076__$1 = state_4076;
var statearr_4091_4108 = state_4076__$1;
(statearr_4091_4108[(2)] = inst_4068);

(statearr_4091_4108[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4077 === (8))){
var inst_4058 = (state_4076[(7)]);
var state_4076__$1 = state_4076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4076__$1,(11),out,inst_4058);
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_4092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4092[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_4092[(1)] = (1));

return statearr_4092;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_4076){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_4076);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e4093){var ex__2281__auto__ = e4093;
var statearr_4094_4109 = state_4076;
(statearr_4094_4109[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_4076[(4)]))){
var statearr_4095_4110 = state_4076;
(statearr_4095_4110[(1)] = cljs.core.first((state_4076[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__4111 = state_4076;
state_4076 = G__4111;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_4076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_4076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_4096 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_4096[(6)] = c__2637__auto___4098);

return statearr_4096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4113 = (function (f,ch,meta4114){
this.f = f;
this.ch = ch;
this.meta4114 = meta4114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4115,meta4114__$1){
var self__ = this;
var _4115__$1 = this;
return (new cljs.core.async.t_cljs$core$async4113(self__.f,self__.ch,meta4114__$1));
}));

(cljs.core.async.t_cljs$core$async4113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4115){
var self__ = this;
var _4115__$1 = this;
return self__.meta4114;
}));

(cljs.core.async.t_cljs$core$async4113.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async4113.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async4113.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4116 = (function (f,ch,meta4114,_,fn1,meta4117){
this.f = f;
this.ch = ch;
this.meta4114 = meta4114;
this._ = _;
this.fn1 = fn1;
this.meta4117 = meta4117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4118,meta4117__$1){
var self__ = this;
var _4118__$1 = this;
return (new cljs.core.async.t_cljs$core$async4116(self__.f,self__.ch,self__.meta4114,self__._,self__.fn1,meta4117__$1));
}));

(cljs.core.async.t_cljs$core$async4116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4118){
var self__ = this;
var _4118__$1 = this;
return self__.meta4117;
}));

(cljs.core.async.t_cljs$core$async4116.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async4116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async4116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__4112_SHARP_){
var G__4119 = (((p1__4112_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__4112_SHARP_) : self__.f.call(null,p1__4112_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__4119) : f1.call(null,G__4119));
});
}));

(cljs.core.async.t_cljs$core$async4116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta4114,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async4113], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta4117], null);
}));

(cljs.core.async.t_cljs$core$async4116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4116");

(cljs.core.async.t_cljs$core$async4116.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async4116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4116.
 */
cljs.core.async.__GT_t_cljs$core$async4116 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4116(f__$1,ch__$1,meta4114__$1,___$2,fn1__$1,meta4117){
return (new cljs.core.async.t_cljs$core$async4116(f__$1,ch__$1,meta4114__$1,___$2,fn1__$1,meta4117));
});

}

return (new cljs.core.async.t_cljs$core$async4116(self__.f,self__.ch,self__.meta4114,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__4120 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__4120) : self__.f.call(null,G__4120));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async4113.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async4113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta4114], null);
}));

(cljs.core.async.t_cljs$core$async4113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4113");

(cljs.core.async.t_cljs$core$async4113.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async4113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4113.
 */
cljs.core.async.__GT_t_cljs$core$async4113 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4113(f__$1,ch__$1,meta4114){
return (new cljs.core.async.t_cljs$core$async4113(f__$1,ch__$1,meta4114));
});

}

return (new cljs.core.async.t_cljs$core$async4113(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4121 = (function (f,ch,meta4122){
this.f = f;
this.ch = ch;
this.meta4122 = meta4122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4123,meta4122__$1){
var self__ = this;
var _4123__$1 = this;
return (new cljs.core.async.t_cljs$core$async4121(self__.f,self__.ch,meta4122__$1));
}));

(cljs.core.async.t_cljs$core$async4121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4123){
var self__ = this;
var _4123__$1 = this;
return self__.meta4122;
}));

(cljs.core.async.t_cljs$core$async4121.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async4121.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async4121.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async4121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta4122], null);
}));

(cljs.core.async.t_cljs$core$async4121.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4121");

(cljs.core.async.t_cljs$core$async4121.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async4121");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4121.
 */
cljs.core.async.__GT_t_cljs$core$async4121 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4121(f__$1,ch__$1,meta4122){
return (new cljs.core.async.t_cljs$core$async4121(f__$1,ch__$1,meta4122));
});

}

return (new cljs.core.async.t_cljs$core$async4121(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4124 = (function (p,ch,meta4125){
this.p = p;
this.ch = ch;
this.meta4125 = meta4125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4126,meta4125__$1){
var self__ = this;
var _4126__$1 = this;
return (new cljs.core.async.t_cljs$core$async4124(self__.p,self__.ch,meta4125__$1));
}));

(cljs.core.async.t_cljs$core$async4124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4126){
var self__ = this;
var _4126__$1 = this;
return self__.meta4125;
}));

(cljs.core.async.t_cljs$core$async4124.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async4124.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async4124.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async4124.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async4124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta4125], null);
}));

(cljs.core.async.t_cljs$core$async4124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4124");

(cljs.core.async.t_cljs$core$async4124.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async4124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4124.
 */
cljs.core.async.__GT_t_cljs$core$async4124 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4124(p__$1,ch__$1,meta4125){
return (new cljs.core.async.t_cljs$core$async4124(p__$1,ch__$1,meta4125));
});

}

return (new cljs.core.async.t_cljs$core$async4124(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__4128 = arguments.length;
switch (G__4128) {
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
var c__2637__auto___4169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_4149){
var state_val_4150 = (state_4149[(1)]);
if((state_val_4150 === (7))){
var inst_4145 = (state_4149[(2)]);
var state_4149__$1 = state_4149;
var statearr_4151_4170 = state_4149__$1;
(statearr_4151_4170[(2)] = inst_4145);

(statearr_4151_4170[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4150 === (1))){
var state_4149__$1 = state_4149;
var statearr_4152_4171 = state_4149__$1;
(statearr_4152_4171[(2)] = null);

(statearr_4152_4171[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4150 === (4))){
var inst_4131 = (state_4149[(7)]);
var inst_4131__$1 = (state_4149[(2)]);
var inst_4132 = (inst_4131__$1 == null);
var state_4149__$1 = (function (){var statearr_4153 = state_4149;
(statearr_4153[(7)] = inst_4131__$1);

return statearr_4153;
})();
if(cljs.core.truth_(inst_4132)){
var statearr_4154_4172 = state_4149__$1;
(statearr_4154_4172[(1)] = (5));

} else {
var statearr_4155_4173 = state_4149__$1;
(statearr_4155_4173[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4150 === (6))){
var inst_4131 = (state_4149[(7)]);
var inst_4136 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_4131) : p.call(null,inst_4131));
var state_4149__$1 = state_4149;
if(cljs.core.truth_(inst_4136)){
var statearr_4156_4174 = state_4149__$1;
(statearr_4156_4174[(1)] = (8));

} else {
var statearr_4157_4175 = state_4149__$1;
(statearr_4157_4175[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4150 === (3))){
var inst_4147 = (state_4149[(2)]);
var state_4149__$1 = state_4149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4149__$1,inst_4147);
} else {
if((state_val_4150 === (2))){
var state_4149__$1 = state_4149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4149__$1,(4),ch);
} else {
if((state_val_4150 === (11))){
var inst_4139 = (state_4149[(2)]);
var state_4149__$1 = state_4149;
var statearr_4158_4176 = state_4149__$1;
(statearr_4158_4176[(2)] = inst_4139);

(statearr_4158_4176[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4150 === (9))){
var state_4149__$1 = state_4149;
var statearr_4159_4177 = state_4149__$1;
(statearr_4159_4177[(2)] = null);

(statearr_4159_4177[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4150 === (5))){
var inst_4134 = cljs.core.async.close_BANG_(out);
var state_4149__$1 = state_4149;
var statearr_4160_4178 = state_4149__$1;
(statearr_4160_4178[(2)] = inst_4134);

(statearr_4160_4178[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4150 === (10))){
var inst_4142 = (state_4149[(2)]);
var state_4149__$1 = (function (){var statearr_4161 = state_4149;
(statearr_4161[(8)] = inst_4142);

return statearr_4161;
})();
var statearr_4162_4179 = state_4149__$1;
(statearr_4162_4179[(2)] = null);

(statearr_4162_4179[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4150 === (8))){
var inst_4131 = (state_4149[(7)]);
var state_4149__$1 = state_4149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4149__$1,(11),out,inst_4131);
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_4163 = [null,null,null,null,null,null,null,null,null];
(statearr_4163[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_4163[(1)] = (1));

return statearr_4163;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_4149){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_4149);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e4164){var ex__2281__auto__ = e4164;
var statearr_4165_4180 = state_4149;
(statearr_4165_4180[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_4149[(4)]))){
var statearr_4166_4181 = state_4149;
(statearr_4166_4181[(1)] = cljs.core.first((state_4149[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__4182 = state_4149;
state_4149 = G__4182;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_4149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_4149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_4167 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_4167[(6)] = c__2637__auto___4169);

return statearr_4167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4184 = arguments.length;
switch (G__4184) {
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
var c__2637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_4247){
var state_val_4248 = (state_4247[(1)]);
if((state_val_4248 === (7))){
var inst_4243 = (state_4247[(2)]);
var state_4247__$1 = state_4247;
var statearr_4249_4288 = state_4247__$1;
(statearr_4249_4288[(2)] = inst_4243);

(statearr_4249_4288[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (20))){
var inst_4213 = (state_4247[(7)]);
var inst_4224 = (state_4247[(2)]);
var inst_4225 = cljs.core.next(inst_4213);
var inst_4199 = inst_4225;
var inst_4200 = null;
var inst_4201 = (0);
var inst_4202 = (0);
var state_4247__$1 = (function (){var statearr_4250 = state_4247;
(statearr_4250[(8)] = inst_4224);

(statearr_4250[(9)] = inst_4199);

(statearr_4250[(10)] = inst_4201);

(statearr_4250[(11)] = inst_4202);

(statearr_4250[(12)] = inst_4200);

return statearr_4250;
})();
var statearr_4251_4289 = state_4247__$1;
(statearr_4251_4289[(2)] = null);

(statearr_4251_4289[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (1))){
var state_4247__$1 = state_4247;
var statearr_4252_4290 = state_4247__$1;
(statearr_4252_4290[(2)] = null);

(statearr_4252_4290[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (4))){
var inst_4188 = (state_4247[(13)]);
var inst_4188__$1 = (state_4247[(2)]);
var inst_4189 = (inst_4188__$1 == null);
var state_4247__$1 = (function (){var statearr_4253 = state_4247;
(statearr_4253[(13)] = inst_4188__$1);

return statearr_4253;
})();
if(cljs.core.truth_(inst_4189)){
var statearr_4254_4291 = state_4247__$1;
(statearr_4254_4291[(1)] = (5));

} else {
var statearr_4255_4292 = state_4247__$1;
(statearr_4255_4292[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (15))){
var state_4247__$1 = state_4247;
var statearr_4259_4293 = state_4247__$1;
(statearr_4259_4293[(2)] = null);

(statearr_4259_4293[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (21))){
var state_4247__$1 = state_4247;
var statearr_4260_4294 = state_4247__$1;
(statearr_4260_4294[(2)] = null);

(statearr_4260_4294[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (13))){
var inst_4199 = (state_4247[(9)]);
var inst_4201 = (state_4247[(10)]);
var inst_4202 = (state_4247[(11)]);
var inst_4200 = (state_4247[(12)]);
var inst_4209 = (state_4247[(2)]);
var inst_4210 = (inst_4202 + (1));
var tmp4256 = inst_4199;
var tmp4257 = inst_4201;
var tmp4258 = inst_4200;
var inst_4199__$1 = tmp4256;
var inst_4200__$1 = tmp4258;
var inst_4201__$1 = tmp4257;
var inst_4202__$1 = inst_4210;
var state_4247__$1 = (function (){var statearr_4261 = state_4247;
(statearr_4261[(9)] = inst_4199__$1);

(statearr_4261[(10)] = inst_4201__$1);

(statearr_4261[(11)] = inst_4202__$1);

(statearr_4261[(14)] = inst_4209);

(statearr_4261[(12)] = inst_4200__$1);

return statearr_4261;
})();
var statearr_4262_4295 = state_4247__$1;
(statearr_4262_4295[(2)] = null);

(statearr_4262_4295[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (22))){
var state_4247__$1 = state_4247;
var statearr_4263_4296 = state_4247__$1;
(statearr_4263_4296[(2)] = null);

(statearr_4263_4296[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (6))){
var inst_4188 = (state_4247[(13)]);
var inst_4197 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_4188) : f.call(null,inst_4188));
var inst_4198 = cljs.core.seq(inst_4197);
var inst_4199 = inst_4198;
var inst_4200 = null;
var inst_4201 = (0);
var inst_4202 = (0);
var state_4247__$1 = (function (){var statearr_4264 = state_4247;
(statearr_4264[(9)] = inst_4199);

(statearr_4264[(10)] = inst_4201);

(statearr_4264[(11)] = inst_4202);

(statearr_4264[(12)] = inst_4200);

return statearr_4264;
})();
var statearr_4265_4297 = state_4247__$1;
(statearr_4265_4297[(2)] = null);

(statearr_4265_4297[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (17))){
var inst_4213 = (state_4247[(7)]);
var inst_4217 = cljs.core.chunk_first(inst_4213);
var inst_4218 = cljs.core.chunk_rest(inst_4213);
var inst_4219 = cljs.core.count(inst_4217);
var inst_4199 = inst_4218;
var inst_4200 = inst_4217;
var inst_4201 = inst_4219;
var inst_4202 = (0);
var state_4247__$1 = (function (){var statearr_4266 = state_4247;
(statearr_4266[(9)] = inst_4199);

(statearr_4266[(10)] = inst_4201);

(statearr_4266[(11)] = inst_4202);

(statearr_4266[(12)] = inst_4200);

return statearr_4266;
})();
var statearr_4267_4298 = state_4247__$1;
(statearr_4267_4298[(2)] = null);

(statearr_4267_4298[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (3))){
var inst_4245 = (state_4247[(2)]);
var state_4247__$1 = state_4247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4247__$1,inst_4245);
} else {
if((state_val_4248 === (12))){
var inst_4233 = (state_4247[(2)]);
var state_4247__$1 = state_4247;
var statearr_4268_4299 = state_4247__$1;
(statearr_4268_4299[(2)] = inst_4233);

(statearr_4268_4299[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (2))){
var state_4247__$1 = state_4247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4247__$1,(4),in$);
} else {
if((state_val_4248 === (23))){
var inst_4241 = (state_4247[(2)]);
var state_4247__$1 = state_4247;
var statearr_4269_4300 = state_4247__$1;
(statearr_4269_4300[(2)] = inst_4241);

(statearr_4269_4300[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (19))){
var inst_4228 = (state_4247[(2)]);
var state_4247__$1 = state_4247;
var statearr_4270_4301 = state_4247__$1;
(statearr_4270_4301[(2)] = inst_4228);

(statearr_4270_4301[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (11))){
var inst_4199 = (state_4247[(9)]);
var inst_4213 = (state_4247[(7)]);
var inst_4213__$1 = cljs.core.seq(inst_4199);
var state_4247__$1 = (function (){var statearr_4271 = state_4247;
(statearr_4271[(7)] = inst_4213__$1);

return statearr_4271;
})();
if(inst_4213__$1){
var statearr_4272_4302 = state_4247__$1;
(statearr_4272_4302[(1)] = (14));

} else {
var statearr_4273_4303 = state_4247__$1;
(statearr_4273_4303[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (9))){
var inst_4235 = (state_4247[(2)]);
var inst_4236 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_4247__$1 = (function (){var statearr_4274 = state_4247;
(statearr_4274[(15)] = inst_4235);

return statearr_4274;
})();
if(cljs.core.truth_(inst_4236)){
var statearr_4275_4304 = state_4247__$1;
(statearr_4275_4304[(1)] = (21));

} else {
var statearr_4276_4305 = state_4247__$1;
(statearr_4276_4305[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (5))){
var inst_4191 = cljs.core.async.close_BANG_(out);
var state_4247__$1 = state_4247;
var statearr_4277_4306 = state_4247__$1;
(statearr_4277_4306[(2)] = inst_4191);

(statearr_4277_4306[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (14))){
var inst_4213 = (state_4247[(7)]);
var inst_4215 = cljs.core.chunked_seq_QMARK_(inst_4213);
var state_4247__$1 = state_4247;
if(inst_4215){
var statearr_4278_4307 = state_4247__$1;
(statearr_4278_4307[(1)] = (17));

} else {
var statearr_4279_4308 = state_4247__$1;
(statearr_4279_4308[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (16))){
var inst_4231 = (state_4247[(2)]);
var state_4247__$1 = state_4247;
var statearr_4280_4309 = state_4247__$1;
(statearr_4280_4309[(2)] = inst_4231);

(statearr_4280_4309[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4248 === (10))){
var inst_4202 = (state_4247[(11)]);
var inst_4200 = (state_4247[(12)]);
var inst_4207 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_4200,inst_4202);
var state_4247__$1 = state_4247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4247__$1,(13),out,inst_4207);
} else {
if((state_val_4248 === (18))){
var inst_4213 = (state_4247[(7)]);
var inst_4222 = cljs.core.first(inst_4213);
var state_4247__$1 = state_4247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4247__$1,(20),out,inst_4222);
} else {
if((state_val_4248 === (8))){
var inst_4201 = (state_4247[(10)]);
var inst_4202 = (state_4247[(11)]);
var inst_4204 = (inst_4202 < inst_4201);
var inst_4205 = inst_4204;
var state_4247__$1 = state_4247;
if(cljs.core.truth_(inst_4205)){
var statearr_4281_4310 = state_4247__$1;
(statearr_4281_4310[(1)] = (10));

} else {
var statearr_4282_4311 = state_4247__$1;
(statearr_4282_4311[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mapcat_STAR__$_state_machine__2278__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2278__auto____0 = (function (){
var statearr_4283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4283[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2278__auto__);

(statearr_4283[(1)] = (1));

return statearr_4283;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2278__auto____1 = (function (state_4247){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_4247);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e4284){var ex__2281__auto__ = e4284;
var statearr_4285_4312 = state_4247;
(statearr_4285_4312[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_4247[(4)]))){
var statearr_4286_4313 = state_4247;
(statearr_4286_4313[(1)] = cljs.core.first((state_4247[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__4314 = state_4247;
state_4247 = G__4314;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2278__auto__ = function(state_4247){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2278__auto____1.call(this,state_4247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2278__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2278__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_4287 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_4287[(6)] = c__2637__auto__);

return statearr_4287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));

return c__2637__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4316 = arguments.length;
switch (G__4316) {
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
var G__4319 = arguments.length;
switch (G__4319) {
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
var G__4322 = arguments.length;
switch (G__4322) {
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
var c__2637__auto___4370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_4346){
var state_val_4347 = (state_4346[(1)]);
if((state_val_4347 === (7))){
var inst_4341 = (state_4346[(2)]);
var state_4346__$1 = state_4346;
var statearr_4348_4371 = state_4346__$1;
(statearr_4348_4371[(2)] = inst_4341);

(statearr_4348_4371[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4347 === (1))){
var inst_4323 = null;
var state_4346__$1 = (function (){var statearr_4349 = state_4346;
(statearr_4349[(7)] = inst_4323);

return statearr_4349;
})();
var statearr_4350_4372 = state_4346__$1;
(statearr_4350_4372[(2)] = null);

(statearr_4350_4372[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4347 === (4))){
var inst_4326 = (state_4346[(8)]);
var inst_4326__$1 = (state_4346[(2)]);
var inst_4327 = (inst_4326__$1 == null);
var inst_4328 = cljs.core.not(inst_4327);
var state_4346__$1 = (function (){var statearr_4351 = state_4346;
(statearr_4351[(8)] = inst_4326__$1);

return statearr_4351;
})();
if(inst_4328){
var statearr_4352_4373 = state_4346__$1;
(statearr_4352_4373[(1)] = (5));

} else {
var statearr_4353_4374 = state_4346__$1;
(statearr_4353_4374[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4347 === (6))){
var state_4346__$1 = state_4346;
var statearr_4354_4375 = state_4346__$1;
(statearr_4354_4375[(2)] = null);

(statearr_4354_4375[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4347 === (3))){
var inst_4343 = (state_4346[(2)]);
var inst_4344 = cljs.core.async.close_BANG_(out);
var state_4346__$1 = (function (){var statearr_4355 = state_4346;
(statearr_4355[(9)] = inst_4343);

return statearr_4355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_4346__$1,inst_4344);
} else {
if((state_val_4347 === (2))){
var state_4346__$1 = state_4346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4346__$1,(4),ch);
} else {
if((state_val_4347 === (11))){
var inst_4326 = (state_4346[(8)]);
var inst_4335 = (state_4346[(2)]);
var inst_4323 = inst_4326;
var state_4346__$1 = (function (){var statearr_4356 = state_4346;
(statearr_4356[(10)] = inst_4335);

(statearr_4356[(7)] = inst_4323);

return statearr_4356;
})();
var statearr_4357_4376 = state_4346__$1;
(statearr_4357_4376[(2)] = null);

(statearr_4357_4376[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4347 === (9))){
var inst_4326 = (state_4346[(8)]);
var state_4346__$1 = state_4346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4346__$1,(11),out,inst_4326);
} else {
if((state_val_4347 === (5))){
var inst_4326 = (state_4346[(8)]);
var inst_4323 = (state_4346[(7)]);
var inst_4330 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_4326,inst_4323);
var state_4346__$1 = state_4346;
if(inst_4330){
var statearr_4359_4377 = state_4346__$1;
(statearr_4359_4377[(1)] = (8));

} else {
var statearr_4360_4378 = state_4346__$1;
(statearr_4360_4378[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4347 === (10))){
var inst_4338 = (state_4346[(2)]);
var state_4346__$1 = state_4346;
var statearr_4361_4379 = state_4346__$1;
(statearr_4361_4379[(2)] = inst_4338);

(statearr_4361_4379[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4347 === (8))){
var inst_4323 = (state_4346[(7)]);
var tmp4358 = inst_4323;
var inst_4323__$1 = tmp4358;
var state_4346__$1 = (function (){var statearr_4362 = state_4346;
(statearr_4362[(7)] = inst_4323__$1);

return statearr_4362;
})();
var statearr_4363_4380 = state_4346__$1;
(statearr_4363_4380[(2)] = null);

(statearr_4363_4380[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_4364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4364[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_4364[(1)] = (1));

return statearr_4364;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_4346){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_4346);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e4365){var ex__2281__auto__ = e4365;
var statearr_4366_4381 = state_4346;
(statearr_4366_4381[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_4346[(4)]))){
var statearr_4367_4382 = state_4346;
(statearr_4367_4382[(1)] = cljs.core.first((state_4346[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__4383 = state_4346;
state_4346 = G__4383;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_4346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_4346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_4368 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_4368[(6)] = c__2637__auto___4370);

return statearr_4368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__4385 = arguments.length;
switch (G__4385) {
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
var c__2637__auto___4452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_4423){
var state_val_4424 = (state_4423[(1)]);
if((state_val_4424 === (7))){
var inst_4419 = (state_4423[(2)]);
var state_4423__$1 = state_4423;
var statearr_4425_4453 = state_4423__$1;
(statearr_4425_4453[(2)] = inst_4419);

(statearr_4425_4453[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4424 === (1))){
var inst_4386 = (new Array(n));
var inst_4387 = inst_4386;
var inst_4388 = (0);
var state_4423__$1 = (function (){var statearr_4426 = state_4423;
(statearr_4426[(7)] = inst_4388);

(statearr_4426[(8)] = inst_4387);

return statearr_4426;
})();
var statearr_4427_4454 = state_4423__$1;
(statearr_4427_4454[(2)] = null);

(statearr_4427_4454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4424 === (4))){
var inst_4391 = (state_4423[(9)]);
var inst_4391__$1 = (state_4423[(2)]);
var inst_4392 = (inst_4391__$1 == null);
var inst_4393 = cljs.core.not(inst_4392);
var state_4423__$1 = (function (){var statearr_4428 = state_4423;
(statearr_4428[(9)] = inst_4391__$1);

return statearr_4428;
})();
if(inst_4393){
var statearr_4429_4455 = state_4423__$1;
(statearr_4429_4455[(1)] = (5));

} else {
var statearr_4430_4456 = state_4423__$1;
(statearr_4430_4456[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4424 === (15))){
var inst_4413 = (state_4423[(2)]);
var state_4423__$1 = state_4423;
var statearr_4431_4457 = state_4423__$1;
(statearr_4431_4457[(2)] = inst_4413);

(statearr_4431_4457[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4424 === (13))){
var state_4423__$1 = state_4423;
var statearr_4432_4458 = state_4423__$1;
(statearr_4432_4458[(2)] = null);

(statearr_4432_4458[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4424 === (6))){
var inst_4388 = (state_4423[(7)]);
var inst_4409 = (inst_4388 > (0));
var state_4423__$1 = state_4423;
if(cljs.core.truth_(inst_4409)){
var statearr_4433_4459 = state_4423__$1;
(statearr_4433_4459[(1)] = (12));

} else {
var statearr_4434_4460 = state_4423__$1;
(statearr_4434_4460[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4424 === (3))){
var inst_4421 = (state_4423[(2)]);
var state_4423__$1 = state_4423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4423__$1,inst_4421);
} else {
if((state_val_4424 === (12))){
var inst_4387 = (state_4423[(8)]);
var inst_4411 = cljs.core.vec(inst_4387);
var state_4423__$1 = state_4423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4423__$1,(15),out,inst_4411);
} else {
if((state_val_4424 === (2))){
var state_4423__$1 = state_4423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4423__$1,(4),ch);
} else {
if((state_val_4424 === (11))){
var inst_4403 = (state_4423[(2)]);
var inst_4404 = (new Array(n));
var inst_4387 = inst_4404;
var inst_4388 = (0);
var state_4423__$1 = (function (){var statearr_4435 = state_4423;
(statearr_4435[(7)] = inst_4388);

(statearr_4435[(10)] = inst_4403);

(statearr_4435[(8)] = inst_4387);

return statearr_4435;
})();
var statearr_4436_4461 = state_4423__$1;
(statearr_4436_4461[(2)] = null);

(statearr_4436_4461[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4424 === (9))){
var inst_4387 = (state_4423[(8)]);
var inst_4401 = cljs.core.vec(inst_4387);
var state_4423__$1 = state_4423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4423__$1,(11),out,inst_4401);
} else {
if((state_val_4424 === (5))){
var inst_4396 = (state_4423[(11)]);
var inst_4388 = (state_4423[(7)]);
var inst_4391 = (state_4423[(9)]);
var inst_4387 = (state_4423[(8)]);
var inst_4395 = (inst_4387[inst_4388] = inst_4391);
var inst_4396__$1 = (inst_4388 + (1));
var inst_4397 = (inst_4396__$1 < n);
var state_4423__$1 = (function (){var statearr_4437 = state_4423;
(statearr_4437[(11)] = inst_4396__$1);

(statearr_4437[(12)] = inst_4395);

return statearr_4437;
})();
if(cljs.core.truth_(inst_4397)){
var statearr_4438_4462 = state_4423__$1;
(statearr_4438_4462[(1)] = (8));

} else {
var statearr_4439_4463 = state_4423__$1;
(statearr_4439_4463[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4424 === (14))){
var inst_4416 = (state_4423[(2)]);
var inst_4417 = cljs.core.async.close_BANG_(out);
var state_4423__$1 = (function (){var statearr_4441 = state_4423;
(statearr_4441[(13)] = inst_4416);

return statearr_4441;
})();
var statearr_4442_4464 = state_4423__$1;
(statearr_4442_4464[(2)] = inst_4417);

(statearr_4442_4464[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4424 === (10))){
var inst_4407 = (state_4423[(2)]);
var state_4423__$1 = state_4423;
var statearr_4443_4465 = state_4423__$1;
(statearr_4443_4465[(2)] = inst_4407);

(statearr_4443_4465[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4424 === (8))){
var inst_4396 = (state_4423[(11)]);
var inst_4387 = (state_4423[(8)]);
var tmp4440 = inst_4387;
var inst_4387__$1 = tmp4440;
var inst_4388 = inst_4396;
var state_4423__$1 = (function (){var statearr_4444 = state_4423;
(statearr_4444[(7)] = inst_4388);

(statearr_4444[(8)] = inst_4387__$1);

return statearr_4444;
})();
var statearr_4445_4466 = state_4423__$1;
(statearr_4445_4466[(2)] = null);

(statearr_4445_4466[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_4446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4446[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_4446[(1)] = (1));

return statearr_4446;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_4423){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_4423);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e4447){var ex__2281__auto__ = e4447;
var statearr_4448_4467 = state_4423;
(statearr_4448_4467[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_4423[(4)]))){
var statearr_4449_4468 = state_4423;
(statearr_4449_4468[(1)] = cljs.core.first((state_4423[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__4469 = state_4423;
state_4423 = G__4469;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_4423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_4423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_4450 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_4450[(6)] = c__2637__auto___4452);

return statearr_4450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__4471 = arguments.length;
switch (G__4471) {
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
var c__2637__auto___4549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_4516){
var state_val_4517 = (state_4516[(1)]);
if((state_val_4517 === (7))){
var inst_4512 = (state_4516[(2)]);
var state_4516__$1 = state_4516;
var statearr_4518_4550 = state_4516__$1;
(statearr_4518_4550[(2)] = inst_4512);

(statearr_4518_4550[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (1))){
var inst_4472 = [];
var inst_4473 = inst_4472;
var inst_4474 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_4516__$1 = (function (){var statearr_4519 = state_4516;
(statearr_4519[(7)] = inst_4473);

(statearr_4519[(8)] = inst_4474);

return statearr_4519;
})();
var statearr_4520_4551 = state_4516__$1;
(statearr_4520_4551[(2)] = null);

(statearr_4520_4551[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (4))){
var inst_4477 = (state_4516[(9)]);
var inst_4477__$1 = (state_4516[(2)]);
var inst_4478 = (inst_4477__$1 == null);
var inst_4479 = cljs.core.not(inst_4478);
var state_4516__$1 = (function (){var statearr_4521 = state_4516;
(statearr_4521[(9)] = inst_4477__$1);

return statearr_4521;
})();
if(inst_4479){
var statearr_4522_4552 = state_4516__$1;
(statearr_4522_4552[(1)] = (5));

} else {
var statearr_4523_4553 = state_4516__$1;
(statearr_4523_4553[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (15))){
var inst_4473 = (state_4516[(7)]);
var inst_4504 = cljs.core.vec(inst_4473);
var state_4516__$1 = state_4516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4516__$1,(18),out,inst_4504);
} else {
if((state_val_4517 === (13))){
var inst_4499 = (state_4516[(2)]);
var state_4516__$1 = state_4516;
var statearr_4524_4554 = state_4516__$1;
(statearr_4524_4554[(2)] = inst_4499);

(statearr_4524_4554[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (6))){
var inst_4473 = (state_4516[(7)]);
var inst_4501 = inst_4473.length;
var inst_4502 = (inst_4501 > (0));
var state_4516__$1 = state_4516;
if(cljs.core.truth_(inst_4502)){
var statearr_4525_4555 = state_4516__$1;
(statearr_4525_4555[(1)] = (15));

} else {
var statearr_4526_4556 = state_4516__$1;
(statearr_4526_4556[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (17))){
var inst_4509 = (state_4516[(2)]);
var inst_4510 = cljs.core.async.close_BANG_(out);
var state_4516__$1 = (function (){var statearr_4527 = state_4516;
(statearr_4527[(10)] = inst_4509);

return statearr_4527;
})();
var statearr_4528_4557 = state_4516__$1;
(statearr_4528_4557[(2)] = inst_4510);

(statearr_4528_4557[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (3))){
var inst_4514 = (state_4516[(2)]);
var state_4516__$1 = state_4516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4516__$1,inst_4514);
} else {
if((state_val_4517 === (12))){
var inst_4473 = (state_4516[(7)]);
var inst_4492 = cljs.core.vec(inst_4473);
var state_4516__$1 = state_4516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4516__$1,(14),out,inst_4492);
} else {
if((state_val_4517 === (2))){
var state_4516__$1 = state_4516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4516__$1,(4),ch);
} else {
if((state_val_4517 === (11))){
var inst_4473 = (state_4516[(7)]);
var inst_4481 = (state_4516[(11)]);
var inst_4477 = (state_4516[(9)]);
var inst_4489 = inst_4473.push(inst_4477);
var tmp4529 = inst_4473;
var inst_4473__$1 = tmp4529;
var inst_4474 = inst_4481;
var state_4516__$1 = (function (){var statearr_4530 = state_4516;
(statearr_4530[(7)] = inst_4473__$1);

(statearr_4530[(8)] = inst_4474);

(statearr_4530[(12)] = inst_4489);

return statearr_4530;
})();
var statearr_4531_4558 = state_4516__$1;
(statearr_4531_4558[(2)] = null);

(statearr_4531_4558[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (9))){
var inst_4474 = (state_4516[(8)]);
var inst_4485 = cljs.core.keyword_identical_QMARK_(inst_4474,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var state_4516__$1 = state_4516;
var statearr_4532_4559 = state_4516__$1;
(statearr_4532_4559[(2)] = inst_4485);

(statearr_4532_4559[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (5))){
var inst_4481 = (state_4516[(11)]);
var inst_4474 = (state_4516[(8)]);
var inst_4482 = (state_4516[(13)]);
var inst_4477 = (state_4516[(9)]);
var inst_4481__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_4477) : f.call(null,inst_4477));
var inst_4482__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_4481__$1,inst_4474);
var state_4516__$1 = (function (){var statearr_4533 = state_4516;
(statearr_4533[(11)] = inst_4481__$1);

(statearr_4533[(13)] = inst_4482__$1);

return statearr_4533;
})();
if(inst_4482__$1){
var statearr_4534_4560 = state_4516__$1;
(statearr_4534_4560[(1)] = (8));

} else {
var statearr_4535_4561 = state_4516__$1;
(statearr_4535_4561[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (14))){
var inst_4481 = (state_4516[(11)]);
var inst_4477 = (state_4516[(9)]);
var inst_4494 = (state_4516[(2)]);
var inst_4495 = [];
var inst_4496 = inst_4495.push(inst_4477);
var inst_4473 = inst_4495;
var inst_4474 = inst_4481;
var state_4516__$1 = (function (){var statearr_4536 = state_4516;
(statearr_4536[(14)] = inst_4496);

(statearr_4536[(7)] = inst_4473);

(statearr_4536[(15)] = inst_4494);

(statearr_4536[(8)] = inst_4474);

return statearr_4536;
})();
var statearr_4537_4562 = state_4516__$1;
(statearr_4537_4562[(2)] = null);

(statearr_4537_4562[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (16))){
var state_4516__$1 = state_4516;
var statearr_4538_4563 = state_4516__$1;
(statearr_4538_4563[(2)] = null);

(statearr_4538_4563[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (10))){
var inst_4487 = (state_4516[(2)]);
var state_4516__$1 = state_4516;
if(cljs.core.truth_(inst_4487)){
var statearr_4539_4564 = state_4516__$1;
(statearr_4539_4564[(1)] = (11));

} else {
var statearr_4540_4565 = state_4516__$1;
(statearr_4540_4565[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (18))){
var inst_4506 = (state_4516[(2)]);
var state_4516__$1 = state_4516;
var statearr_4541_4566 = state_4516__$1;
(statearr_4541_4566[(2)] = inst_4506);

(statearr_4541_4566[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4517 === (8))){
var inst_4482 = (state_4516[(13)]);
var state_4516__$1 = state_4516;
var statearr_4542_4567 = state_4516__$1;
(statearr_4542_4567[(2)] = inst_4482);

(statearr_4542_4567[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__2278__auto__ = null;
var cljs$core$async$state_machine__2278__auto____0 = (function (){
var statearr_4543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4543[(0)] = cljs$core$async$state_machine__2278__auto__);

(statearr_4543[(1)] = (1));

return statearr_4543;
});
var cljs$core$async$state_machine__2278__auto____1 = (function (state_4516){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_4516);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e4544){var ex__2281__auto__ = e4544;
var statearr_4545_4568 = state_4516;
(statearr_4545_4568[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_4516[(4)]))){
var statearr_4546_4569 = state_4516;
(statearr_4546_4569[(1)] = cljs.core.first((state_4516[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__4570 = state_4516;
state_4516 = G__4570;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
cljs$core$async$state_machine__2278__auto__ = function(state_4516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2278__auto____1.call(this,state_4516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2278__auto____0;
cljs$core$async$state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2278__auto____1;
return cljs$core$async$state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_4547 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_4547[(6)] = c__2637__auto___4549);

return statearr_4547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

