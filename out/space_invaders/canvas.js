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
space_invaders.canvas.invader = (function space_invaders$canvas$invader(offsets,row,col){
var vec__2276 = space_invaders.canvas.rown_coln_x_y(row,col,offsets);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2276,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2276,(1),null);
(space_invaders.canvas._STAR_stage_STAR_.fillStyle = "#CCFF33");

var G__2279_2284 = space_invaders.canvas._STAR_stage_STAR_;
G__2279_2284.fillRect((x + (5)),y,(20),(5));

G__2279_2284.fillRect(x,(y + (5)),(30),(15));

G__2279_2284.beginPath();

G__2279_2284.arc((x + (5)),(y + (5)),(5),(0),space_invaders.canvas.tau,false);

G__2279_2284.fill();

G__2279_2284.beginPath();

G__2279_2284.arc((x + (25)),(y + (5)),(5),(0),space_invaders.canvas.tau,false);

G__2279_2284.fill();


var seq__2280_2285 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__2281_2286 = null;
var count__2282_2287 = (0);
var i__2283_2288 = (0);
while(true){
if((i__2283_2288 < count__2282_2287)){
var tx_2289 = chunk__2281_2286.cljs$core$IIndexed$_nth$arity$2(null,i__2283_2288);
space_invaders.canvas._STAR_stage_STAR_.fillRect(((x + (tx_2289 * (5))) + tx_2289),(y + (20)),(5),(10));


var G__2290 = seq__2280_2285;
var G__2291 = chunk__2281_2286;
var G__2292 = count__2282_2287;
var G__2293 = (i__2283_2288 + (1));
seq__2280_2285 = G__2290;
chunk__2281_2286 = G__2291;
count__2282_2287 = G__2292;
i__2283_2288 = G__2293;
continue;
} else {
var temp__5753__auto___2294 = cljs.core.seq(seq__2280_2285);
if(temp__5753__auto___2294){
var seq__2280_2295__$1 = temp__5753__auto___2294;
if(cljs.core.chunked_seq_QMARK_(seq__2280_2295__$1)){
var c__4679__auto___2296 = cljs.core.chunk_first(seq__2280_2295__$1);
var G__2297 = cljs.core.chunk_rest(seq__2280_2295__$1);
var G__2298 = c__4679__auto___2296;
var G__2299 = cljs.core.count(c__4679__auto___2296);
var G__2300 = (0);
seq__2280_2285 = G__2297;
chunk__2281_2286 = G__2298;
count__2282_2287 = G__2299;
i__2283_2288 = G__2300;
continue;
} else {
var tx_2301 = cljs.core.first(seq__2280_2295__$1);
space_invaders.canvas._STAR_stage_STAR_.fillRect(((x + (tx_2301 * (5))) + tx_2301),(y + (20)),(5),(10));


var G__2302 = cljs.core.next(seq__2280_2295__$1);
var G__2303 = null;
var G__2304 = (0);
var G__2305 = (0);
seq__2280_2285 = G__2302;
chunk__2281_2286 = G__2303;
count__2282_2287 = G__2304;
i__2283_2288 = G__2305;
continue;
}
} else {
}
}
break;
}

return space_invaders.canvas._STAR_stage_STAR_.fillRect(((x + ((4) * (5))) + (5)),(y + (20)),(5),(10));
});
space_invaders.canvas.uninvader = (function space_invaders$canvas$uninvader(offsets,row,col){
var vec__2306 = space_invaders.canvas.rown_coln_x_y(row,col,offsets);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2306,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2306,(1),null);
(space_invaders.canvas._STAR_stage_STAR_.fillStyle = "#000000");

var G__2309 = space_invaders.canvas._STAR_stage_STAR_;
G__2309.fillRect(x,y,(35),(30));

return G__2309;
});
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
space_invaders.canvas.ship_STAR_ = (function space_invaders$canvas$ship_STAR_(erase_me,p__2310){
var map__2311 = p__2310;
var map__2311__$1 = cljs.core.__destructure_map(map__2311);
var x_off = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2311__$1,cljs.core.cst$kw$x);
var erase_me__$1 = ((erase_me === true)?"#000000":false);
var x = x_off;
var y = space_invaders.canvas.the_ship_posish;
var square = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(space_invaders.canvas.square,x,y,(3));
return space_invaders.canvas.for_indexed_BANG_((function (rown,row){
return space_invaders.canvas.for_indexed_BANG_((function (coln,color){
var G__2312 = (coln * (3));
var G__2313 = (rown * (3));
var G__2314 = (function (){var or__4253__auto__ = erase_me__$1;
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
return (square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2312,G__2313,G__2314) : square.call(null,G__2312,G__2313,G__2314));
}),row);
}),space_invaders.canvas.the_ship_shape);
});
space_invaders.canvas.ship = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(space_invaders.canvas.ship_STAR_,false);
space_invaders.canvas.unship = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(space_invaders.canvas.ship_STAR_,"#000000");
space_invaders.canvas.Thanos_snap = (function space_invaders$canvas$Thanos_snap(){
(space_invaders.canvas._STAR_stage_STAR_.fillStyle = "#000000");

var G__2315 = space_invaders.canvas._STAR_stage_STAR_;
G__2315.fillRect((0),(0),(480),(480));

return G__2315;
});
space_invaders.canvas.ship_bullet = (function space_invaders$canvas$ship_bullet(erase_me,p__2316){
var map__2317 = p__2316;
var map__2317__$1 = cljs.core.__destructure_map(map__2317);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2317__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2317__$1,cljs.core.cst$kw$y);
var color = (cljs.core.truth_(erase_me)?"#000000":"#ffffff");
var square = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(space_invaders.canvas.square,x,y,(3));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$sym$ship,x,y,color], 0));

(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3((0),(3),color) : square.call(null,(0),(3),color));

return (square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3((0),(0),color) : square.call(null,(0),(0),color));
});
space_invaders.canvas.boom_color = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$orange,"#ff6000",cljs.core.cst$kw$yellow,"#f8c823",cljs.core.cst$kw$white,"#ffffff"], null);
space_invaders.canvas.boom = (function space_invaders$canvas$boom(erase_me,p__2318,offsets){
var map__2319 = p__2318;
var map__2319__$1 = cljs.core.__destructure_map(map__2319);
var stage_me = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2319__$1,cljs.core.cst$kw$boom_DASH_level);
var rown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2319__$1,cljs.core.cst$kw$rown);
var coln = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2319__$1,cljs.core.cst$kw$coln);
var vec__2320 = space_invaders.canvas.rown_coln_x_y(rown,coln,offsets);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2320,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2320,(1),null);
var vec__2323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20))], null);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2323,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2323,(1),null);
var color = (cljs.core.truth_(erase_me)?cljs.core.constantly("#000000"):space_invaders.canvas.boom_color);
var square = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(space_invaders.canvas.square,x__$1,y__$1,(3));
var G__2326 = stage_me;
switch (G__2326) {
case (1):
var G__2327 = (0);
var G__2328 = (0);
var G__2329 = (function (){var G__2330 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2330) : color.call(null,G__2330));
})();
return (square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2327,G__2328,G__2329) : square.call(null,G__2327,G__2328,G__2329));

break;
case (2):
var G__2331_2420 = (0);
var G__2332_2421 = (0);
var G__2333_2422 = (function (){var G__2334 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2334) : color.call(null,G__2334));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2331_2420,G__2332_2421,G__2333_2422) : square.call(null,G__2331_2420,G__2332_2421,G__2333_2422));

var G__2335_2423 = (-3);
var G__2336_2424 = (-3);
var G__2337_2425 = (function (){var G__2338 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2338) : color.call(null,G__2338));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2335_2423,G__2336_2424,G__2337_2425) : square.call(null,G__2335_2423,G__2336_2424,G__2337_2425));

var G__2339_2426 = (3);
var G__2340_2427 = (-3);
var G__2341_2428 = (function (){var G__2342 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2342) : color.call(null,G__2342));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2339_2426,G__2340_2427,G__2341_2428) : square.call(null,G__2339_2426,G__2340_2427,G__2341_2428));

var G__2343_2429 = (3);
var G__2344_2430 = (3);
var G__2345_2431 = (function (){var G__2346 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2346) : color.call(null,G__2346));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2343_2429,G__2344_2430,G__2345_2431) : square.call(null,G__2343_2429,G__2344_2430,G__2345_2431));

var G__2347 = (3);
var G__2348 = (-3);
var G__2349 = (function (){var G__2350 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2350) : color.call(null,G__2350));
})();
return (square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2347,G__2348,G__2349) : square.call(null,G__2347,G__2348,G__2349));

break;
case (3):
var G__2351_2432 = (0);
var G__2352_2433 = (0);
var G__2353_2434 = (function (){var G__2354 = cljs.core.cst$kw$orange;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2354) : color.call(null,G__2354));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2351_2432,G__2352_2433,G__2353_2434) : square.call(null,G__2351_2432,G__2352_2433,G__2353_2434));

var G__2355_2435 = (-3);
var G__2356_2436 = (-3);
var G__2357_2437 = (function (){var G__2358 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2358) : color.call(null,G__2358));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2355_2435,G__2356_2436,G__2357_2437) : square.call(null,G__2355_2435,G__2356_2436,G__2357_2437));

var G__2359_2438 = (3);
var G__2360_2439 = (-3);
var G__2361_2440 = (function (){var G__2362 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2362) : color.call(null,G__2362));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2359_2438,G__2360_2439,G__2361_2440) : square.call(null,G__2359_2438,G__2360_2439,G__2361_2440));

var G__2363_2441 = (3);
var G__2364_2442 = (3);
var G__2365_2443 = (function (){var G__2366 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2366) : color.call(null,G__2366));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2363_2441,G__2364_2442,G__2365_2443) : square.call(null,G__2363_2441,G__2364_2442,G__2365_2443));

var G__2367_2444 = (3);
var G__2368_2445 = (-3);
var G__2369_2446 = (function (){var G__2370 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2370) : color.call(null,G__2370));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2367_2444,G__2368_2445,G__2369_2446) : square.call(null,G__2367_2444,G__2368_2445,G__2369_2446));

var G__2371_2447 = (0);
var G__2372_2448 = (-3);
var G__2373_2449 = (function (){var G__2374 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2374) : color.call(null,G__2374));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2371_2447,G__2372_2448,G__2373_2449) : square.call(null,G__2371_2447,G__2372_2448,G__2373_2449));

var G__2375_2450 = (0);
var G__2376_2451 = (3);
var G__2377_2452 = (function (){var G__2378 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2378) : color.call(null,G__2378));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2375_2450,G__2376_2451,G__2377_2452) : square.call(null,G__2375_2450,G__2376_2451,G__2377_2452));

var G__2379_2453 = (3);
var G__2380_2454 = (0);
var G__2381_2455 = (function (){var G__2382 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2382) : color.call(null,G__2382));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2379_2453,G__2380_2454,G__2381_2455) : square.call(null,G__2379_2453,G__2380_2454,G__2381_2455));

var G__2383_2456 = (-3);
var G__2384_2457 = (0);
var G__2385_2458 = (function (){var G__2386 = cljs.core.cst$kw$yellow;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2386) : color.call(null,G__2386));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2383_2456,G__2384_2457,G__2385_2458) : square.call(null,G__2383_2456,G__2384_2457,G__2385_2458));

var seq__2387 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9),(-9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(-9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-6),(-6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(-6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-6),(6)], null)], null));
var chunk__2388 = null;
var count__2389 = (0);
var i__2390 = (0);
while(true){
if((i__2390 < count__2389)){
var vec__2405 = chunk__2388.cljs$core$IIndexed$_nth$arity$2(null,i__2390);
var x__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2405,(0),null);
var y__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2405,(1),null);
var G__2408_2459 = x__$2;
var G__2409_2460 = y__$2;
var G__2410_2461 = (function (){var G__2411 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2411) : color.call(null,G__2411));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2408_2459,G__2409_2460,G__2410_2461) : square.call(null,G__2408_2459,G__2409_2460,G__2410_2461));


var G__2462 = seq__2387;
var G__2463 = chunk__2388;
var G__2464 = count__2389;
var G__2465 = (i__2390 + (1));
seq__2387 = G__2462;
chunk__2388 = G__2463;
count__2389 = G__2464;
i__2390 = G__2465;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2387);
if(temp__5753__auto__){
var seq__2387__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2387__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2387__$1);
var G__2466 = cljs.core.chunk_rest(seq__2387__$1);
var G__2467 = c__4679__auto__;
var G__2468 = cljs.core.count(c__4679__auto__);
var G__2469 = (0);
seq__2387 = G__2466;
chunk__2388 = G__2467;
count__2389 = G__2468;
i__2390 = G__2469;
continue;
} else {
var vec__2412 = cljs.core.first(seq__2387__$1);
var x__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2412,(0),null);
var y__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2412,(1),null);
var G__2415_2470 = x__$2;
var G__2416_2471 = y__$2;
var G__2417_2472 = (function (){var G__2418 = cljs.core.cst$kw$white;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__2418) : color.call(null,G__2418));
})();
(square.cljs$core$IFn$_invoke$arity$3 ? square.cljs$core$IFn$_invoke$arity$3(G__2415_2470,G__2416_2471,G__2417_2472) : square.call(null,G__2415_2470,G__2416_2471,G__2417_2472));


var G__2473 = cljs.core.next(seq__2387__$1);
var G__2474 = null;
var G__2475 = (0);
var G__2476 = (0);
seq__2387 = G__2473;
chunk__2388 = G__2474;
count__2389 = G__2475;
i__2390 = G__2476;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2326)].join('')));

}
});
