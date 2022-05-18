// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('space_invaders.keys');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('space_invaders.canvas');
if((typeof space_invaders !== 'undefined') && (typeof space_invaders.keys !== 'undefined') && (typeof space_invaders.keys.the_keys !== 'undefined')){
} else {
space_invaders.keys.the_keys = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
space_invaders.keys.command_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$down,null,cljs.core.cst$kw$up,null,cljs.core.cst$kw$shoot,null,cljs.core.cst$kw$right,null,cljs.core.cst$kw$left,null], null), null);
space_invaders.keys.event_handler = (function space_invaders$keys$event_handler(ev){
if(cljs.core.truth_(ev.defaultPrevented)){
return null;
} else {
var temp__5753__auto__ = (function (){var G__2546 = ev.code;
switch (G__2546) {
case "KeyW":
case "ArrowUp":
return cljs.core.cst$kw$up;

break;
case "KeyA":
case "ArrowLeft":
return cljs.core.cst$kw$left;

break;
case "KeyS":
case "ArrowDown":
return cljs.core.cst$kw$down;

break;
case "KeyD":
case "ArrowRight":
return cljs.core.cst$kw$right;

break;
case "Space":
return cljs.core.cst$kw$shoot;

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var e = temp__5753__auto__;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$sym$KEY,e], 0));

ev.preventDefault();

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(space_invaders.keys.the_keys,e);
} else {
return null;
}
}
});
space_invaders.keys.handle_BANG_ = (function space_invaders$keys$handle_BANG_(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$sym$HANDLER,space_invaders.keys.event_handler], 0));

return window.addEventListener("keydown",space_invaders.keys.event_handler);
});
space_invaders.keys.remove_BANG_ = (function space_invaders$keys$remove_BANG_(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$sym$HANDLER,space_invaders.keys.event_handler], 0));

return window.removeEventListener("keydown",space_invaders.keys.event_handler);
});
