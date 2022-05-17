// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('space_invaders.canvas');
goog.require('cljs.core');
goog.require('cljs.core.constants');
space_invaders.canvas.col_width = (40);
space_invaders.canvas.row_height = (40);
space_invaders.canvas.tau = ((2) * Math.PI);
space_invaders.canvas._STAR_stage_STAR_ = document.getElementById("space").getContext("2d");
space_invaders.canvas.rown_coln_x_y = (function space_invaders$canvas$rown_coln_x_y(rown,coln,offsets){
var x = ((5) + (coln * space_invaders.canvas.col_width));
var x__$1 = (x + cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(offsets));
var y = ((5) + (rown * space_invaders.canvas.row_height));
var y__$1 = (y + cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(offsets));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null);
});
space_invaders.canvas.invader_STAR_ = (function space_invaders$canvas$invader_STAR_(color,offsets,row,col){
var vec__2393 = space_invaders.canvas.rown_coln_x_y(row,col,offsets);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2393,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2393,(1),null);
(space_invaders.canvas._STAR_stage_STAR_.fillStyle = color);

var G__2396_2401 = space_invaders.canvas._STAR_stage_STAR_;
G__2396_2401.fillRect((x + (5)),y,(20),(5));

G__2396_2401.fillRect(x,(y + (5)),(30),(15));

G__2396_2401.beginPath();

G__2396_2401.arc((x + (5)),(y + (5)),(5),(0),space_invaders.canvas.tau,false);

G__2396_2401.fill();

G__2396_2401.beginPath();

G__2396_2401.arc((x + (25)),(y + (5)),(5),(0),space_invaders.canvas.tau,false);

G__2396_2401.fill();


var seq__2397_2402 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__2398_2403 = null;
var count__2399_2404 = (0);
var i__2400_2405 = (0);
while(true){
if((i__2400_2405 < count__2399_2404)){
var tx_2406 = chunk__2398_2403.cljs$core$IIndexed$_nth$arity$2(null,i__2400_2405);
space_invaders.canvas._STAR_stage_STAR_.fillRect(((x + (tx_2406 * (5))) + tx_2406),(y + (20)),(5),(10));


var G__2407 = seq__2397_2402;
var G__2408 = chunk__2398_2403;
var G__2409 = count__2399_2404;
var G__2410 = (i__2400_2405 + (1));
seq__2397_2402 = G__2407;
chunk__2398_2403 = G__2408;
count__2399_2404 = G__2409;
i__2400_2405 = G__2410;
continue;
} else {
var temp__5753__auto___2411 = cljs.core.seq(seq__2397_2402);
if(temp__5753__auto___2411){
var seq__2397_2412__$1 = temp__5753__auto___2411;
if(cljs.core.chunked_seq_QMARK_(seq__2397_2412__$1)){
var c__4679__auto___2413 = cljs.core.chunk_first(seq__2397_2412__$1);
var G__2414 = cljs.core.chunk_rest(seq__2397_2412__$1);
var G__2415 = c__4679__auto___2413;
var G__2416 = cljs.core.count(c__4679__auto___2413);
var G__2417 = (0);
seq__2397_2402 = G__2414;
chunk__2398_2403 = G__2415;
count__2399_2404 = G__2416;
i__2400_2405 = G__2417;
continue;
} else {
var tx_2418 = cljs.core.first(seq__2397_2412__$1);
space_invaders.canvas._STAR_stage_STAR_.fillRect(((x + (tx_2418 * (5))) + tx_2418),(y + (20)),(5),(10));


var G__2419 = cljs.core.next(seq__2397_2412__$1);
var G__2420 = null;
var G__2421 = (0);
var G__2422 = (0);
seq__2397_2402 = G__2419;
chunk__2398_2403 = G__2420;
count__2399_2404 = G__2421;
i__2400_2405 = G__2422;
continue;
}
} else {
}
}
break;
}

return space_invaders.canvas._STAR_stage_STAR_.fillRect(((x + ((4) * (5))) + (5)),(y + (20)),(5),(10));
});
space_invaders.canvas.invader = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(space_invaders.canvas.invader_STAR_,"#CCFF33");
space_invaders.canvas.uninvader = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(space_invaders.canvas.invader_STAR_,"black");
space_invaders.canvas.rect = (function space_invaders$canvas$rect(ox,oy,x,y,wd,ht){
return space_invaders.canvas._STAR_stage_STAR_.fillRect((ox + x),(oy + y),wd,ht);
});
space_invaders.canvas.square = (function space_invaders$canvas$square(ox,oy,size,x,y,color){
(space_invaders.canvas._STAR_stage_STAR_.fillStyle = color);

return space_invaders.canvas._STAR_stage_STAR_.fillRect((ox + x),(oy + y),size,size);
});
space_invaders.canvas.the_ship_shape = (function (){var b = "#2c71d7";
var w = "#ffffff";
var r = "#c63a20";
var o = "#ff6000";
var y = "#f8c823";
var t = "#10698e";
var k = "#000000";
var c = "#2291c8";
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),b,b,(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),b,k,t,b,(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),b,b,c,t,b,b,(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),b,w,b,b,w,b,(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),b,r,w,b,b,w,r,b,(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),b,r,w,b,b,w,r,b,(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),b,t,r,w,b,b,w,r,t,b,(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),b,t,r,w,b,b,w,r,t,b,(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b,w,w,w,b,b,w,w,w,b,b], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b,b,b,b,b,b,b,b,b,b,b], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),r,o,y,y,y,y,o,r,(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),r,o,y,y,o,r,(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),r,r,r,r,(0),(0),(0),(0)], null)], null);
})();
space_invaders.canvas.for_indexed_BANG_ = (function space_invaders$canvas$for_indexed_BANG_(f,coll){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,coll));
});
space_invaders.canvas.ship_tall = ((13) * (3));
space_invaders.canvas.canvas_butt = (480);
space_invaders.canvas.the_ship_posish = (space_invaders.canvas.canvas_butt - space_invaders.canvas.ship_tall);
space_invaders.canvas.ship_STAR_ = (function space_invaders$canvas$ship_STAR_(erase_me,p__2423){
var map__2424 = p__2423;
var map__2424__$1 = cljs.core.__destructure_map(map__2424);
var x_off = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2424__$1,cljs.core.cst$kw$x);
var erase_me__$1 = ((erase_me === true)?"#000000":false);
var x = x_off;
var y = space_invaders.canvas.the_ship_posish;
var square = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(space_invaders.canvas.square,x,y,(3));
return space_invaders.canvas.for_indexed_BANG_((function (rown,row){
return space_invaders.canvas.for_indexed_BANG_((function (coln,color){
var G__2425 = (coln * (3));
var G__2426 = (rown * (3));
var G__2427 = (function (){var or__4253__auto__ = erase_me__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(0))){
return "#000000";
} else {
return color;
}
}
})();
return (square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2425,G__2426,G__2427) : square.call(null,G__2425,G__2426,G__2427));
}),row);
}),space_invaders.canvas.the_ship_shape);
});
space_invaders.canvas.ship = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(space_invaders.canvas.ship_STAR_,false);
space_invaders.canvas.unship = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(space_invaders.canvas.ship_STAR_,"#000000");
space_invaders.canvas.Thanos_snap = (function space_invaders$canvas$Thanos_snap(){
(space_invaders.canvas._STAR_stage_STAR_.fillStyle = "#000000");

var G__2428 = space_invaders.canvas._STAR_stage_STAR_;
G__2428.fillRect((0),(0),(480),(480));

return G__2428;
});
space_invaders.canvas.ship_bullet = (function space_invaders$canvas$ship_bullet(erase_me,p__2429){
var map__2430 = p__2429;
var map__2430__$1 = cljs.core.__destructure_map(map__2430);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2430__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2430__$1,cljs.core.cst$kw$y);
var color = (cljs.core.truth_(erase_me)?"#000000":"#ffffff");
var square = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(space_invaders.canvas.square,x,y,(3));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$sym$ship,x,y,color], 0));

(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3((0),(3),color) : square.call(null,(0),(3),color));

return (square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3((0),(0),color) : square.call(null,(0),(0),color));
});
space_invaders.canvas.boom_color = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$orange,"#ff6000",cljs.core.cst$kw$yellow,"#f8c823",cljs.core.cst$kw$white,"#ffffff"], null);
space_invaders.canvas.boom = (function space_invaders$canvas$boom(erase_me,p__2431,offsets){
var map__2432 = p__2431;
var map__2432__$1 = cljs.core.__destructure_map(map__2432);
var stage_me = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2432__$1,cljs.core.cst$kw$boom_DASH_level);
var rown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2432__$1,cljs.core.cst$kw$rown);
var coln = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2432__$1,cljs.core.cst$kw$coln);
var vec__2433 = space_invaders.canvas.rown_coln_x_y(rown,coln,offsets);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2433,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2433,(1),null);
var vec__2436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20))], null);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2436,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2436,(1),null);
var color = (cljs.core.truth_(erase_me)?cljs.core.constantly("#000000"):space_invaders.canvas.boom_color);
var square = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(space_invaders.canvas.square,x__$1,y__$1,(3));
var G__2439 = stage_me;
switch (G__2439) {
case (1):
var G__2440 = (0);
var G__2441 = (0);
var G__2442 = (function (){var G__2443 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2443) : color.call(null,G__2443));
})();
return (square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2440,G__2441,G__2442) : square.call(null,G__2440,G__2441,G__2442));

break;
case (2):
var G__2444_2533 = (0);
var G__2445_2534 = (0);
var G__2446_2535 = (function (){var G__2447 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2447) : color.call(null,G__2447));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2444_2533,G__2445_2534,G__2446_2535) : square.call(null,G__2444_2533,G__2445_2534,G__2446_2535));

var G__2448_2536 = (-3);
var G__2449_2537 = (-3);
var G__2450_2538 = (function (){var G__2451 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2451) : color.call(null,G__2451));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2448_2536,G__2449_2537,G__2450_2538) : square.call(null,G__2448_2536,G__2449_2537,G__2450_2538));

var G__2452_2539 = (3);
var G__2453_2540 = (-3);
var G__2454_2541 = (function (){var G__2455 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2455) : color.call(null,G__2455));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2452_2539,G__2453_2540,G__2454_2541) : square.call(null,G__2452_2539,G__2453_2540,G__2454_2541));

var G__2456_2542 = (3);
var G__2457_2543 = (3);
var G__2458_2544 = (function (){var G__2459 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2459) : color.call(null,G__2459));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2456_2542,G__2457_2543,G__2458_2544) : square.call(null,G__2456_2542,G__2457_2543,G__2458_2544));

var G__2460 = (3);
var G__2461 = (-3);
var G__2462 = (function (){var G__2463 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2463) : color.call(null,G__2463));
})();
return (square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2460,G__2461,G__2462) : square.call(null,G__2460,G__2461,G__2462));

break;
case (3):
var G__2464_2545 = (0);
var G__2465_2546 = (0);
var G__2466_2547 = (function (){var G__2467 = cljs.core.cst$kw$orange;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2467) : color.call(null,G__2467));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2464_2545,G__2465_2546,G__2466_2547) : square.call(null,G__2464_2545,G__2465_2546,G__2466_2547));

var G__2468_2548 = (-3);
var G__2469_2549 = (-3);
var G__2470_2550 = (function (){var G__2471 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2471) : color.call(null,G__2471));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2468_2548,G__2469_2549,G__2470_2550) : square.call(null,G__2468_2548,G__2469_2549,G__2470_2550));

var G__2472_2551 = (3);
var G__2473_2552 = (-3);
var G__2474_2553 = (function (){var G__2475 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2475) : color.call(null,G__2475));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2472_2551,G__2473_2552,G__2474_2553) : square.call(null,G__2472_2551,G__2473_2552,G__2474_2553));

var G__2476_2554 = (3);
var G__2477_2555 = (3);
var G__2478_2556 = (function (){var G__2479 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2479) : color.call(null,G__2479));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2476_2554,G__2477_2555,G__2478_2556) : square.call(null,G__2476_2554,G__2477_2555,G__2478_2556));

var G__2480_2557 = (3);
var G__2481_2558 = (-3);
var G__2482_2559 = (function (){var G__2483 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2483) : color.call(null,G__2483));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2480_2557,G__2481_2558,G__2482_2559) : square.call(null,G__2480_2557,G__2481_2558,G__2482_2559));

var G__2484_2560 = (0);
var G__2485_2561 = (-3);
var G__2486_2562 = (function (){var G__2487 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2487) : color.call(null,G__2487));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2484_2560,G__2485_2561,G__2486_2562) : square.call(null,G__2484_2560,G__2485_2561,G__2486_2562));

var G__2488_2563 = (0);
var G__2489_2564 = (3);
var G__2490_2565 = (function (){var G__2491 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2491) : color.call(null,G__2491));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2488_2563,G__2489_2564,G__2490_2565) : square.call(null,G__2488_2563,G__2489_2564,G__2490_2565));

var G__2492_2566 = (3);
var G__2493_2567 = (0);
var G__2494_2568 = (function (){var G__2495 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2495) : color.call(null,G__2495));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2492_2566,G__2493_2567,G__2494_2568) : square.call(null,G__2492_2566,G__2493_2567,G__2494_2568));

var G__2496_2569 = (-3);
var G__2497_2570 = (0);
var G__2498_2571 = (function (){var G__2499 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2499) : color.call(null,G__2499));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2496_2569,G__2497_2570,G__2498_2571) : square.call(null,G__2496_2569,G__2497_2570,G__2498_2571));

var seq__2500 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9),(-9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(-9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-6),(-6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(-6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-6),(6)], null)], null));
var chunk__2501 = null;
var count__2502 = (0);
var i__2503 = (0);
while(true){
if((i__2503 < count__2502)){
var vec__2518 = chunk__2501.cljs$core$IIndexed$_nth$arity$2(null,i__2503);
var x__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2518,(0),null);
var y__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2518,(1),null);
var G__2521_2572 = x__$2;
var G__2522_2573 = y__$2;
var G__2523_2574 = (function (){var G__2524 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2524) : color.call(null,G__2524));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2521_2572,G__2522_2573,G__2523_2574) : square.call(null,G__2521_2572,G__2522_2573,G__2523_2574));


var G__2575 = seq__2500;
var G__2576 = chunk__2501;
var G__2577 = count__2502;
var G__2578 = (i__2503 + (1));
seq__2500 = G__2575;
chunk__2501 = G__2576;
count__2502 = G__2577;
i__2503 = G__2578;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2500);
if(temp__5753__auto__){
var seq__2500__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2500__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2500__$1);
var G__2579 = cljs.core.chunk_rest(seq__2500__$1);
var G__2580 = c__4679__auto__;
var G__2581 = cljs.core.count(c__4679__auto__);
var G__2582 = (0);
seq__2500 = G__2579;
chunk__2501 = G__2580;
count__2502 = G__2581;
i__2503 = G__2582;
continue;
} else {
var vec__2525 = cljs.core.first(seq__2500__$1);
var x__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2525,(0),null);
var y__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2525,(1),null);
var G__2528_2583 = x__$2;
var G__2529_2584 = y__$2;
var G__2530_2585 = (function (){var G__2531 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2531) : color.call(null,G__2531));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2528_2583,G__2529_2584,G__2530_2585) : square.call(null,G__2528_2583,G__2529_2584,G__2530_2585));


var G__2586 = cljs.core.next(seq__2500__$1);
var G__2587 = null;
var G__2588 = (0);
var G__2589 = (0);
seq__2500 = G__2586;
chunk__2501 = G__2587;
count__2502 = G__2588;
i__2503 = G__2589;
continue;
}
} else {
return null;
}
}
break;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2439)].join('')));

}
});
