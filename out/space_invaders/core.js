// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('space_invaders.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('space_invaders.canvas');
goog.require('space_invaders.keys');
space_invaders.core.columns = (12);
space_invaders.core.rows = (12);
if((typeof space_invaders !== 'undefined') && (typeof space_invaders.core !== 'undefined') && (typeof space_invaders.core.the_stoplight !== 'undefined')){
} else {
space_invaders.core.the_stoplight = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
space_invaders.core.make_fleet = (function space_invaders$core$make_fleet(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$offsets,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null),cljs.core.cst$kw$direction,cljs.core.cst$kw$right,cljs.core.cst$kw$invaders,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(true),cljs.core.range.cljs$core$IFn$_invoke$arity$1((space_invaders.core.columns - (4))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((2))),cljs.core.cst$kw$ship,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(220),cljs.core.cst$kw$v,(0)], null),cljs.core.cst$kw$bullet,null], null);
});
space_invaders.core.for_indexed_BANG_ = (function space_invaders$core$for_indexed_BANG_(f,coll){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,coll));
});
space_invaders.core.map_invaders = (function space_invaders$core$map_invaders(function$,fleet){
return space_invaders.core.for_indexed_BANG_((function (row_index,row){
return space_invaders.core.for_indexed_BANG_((function (col_index,invader_at){
return (function$.cljs$core$IFn$_invoke$arity$3 ? function$.cljs$core$IFn$_invoke$arity$3(row_index,col_index,invader_at) : function$.call(null,row_index,col_index,invader_at));
}),row);
}),cljs.core.cst$kw$invaders.cljs$core$IFn$_invoke$arity$1(fleet));
});
space_invaders.core.rown_coln_boommed_invader = (function space_invaders$core$rown_coln_boommed_invader(fleet,x,y){
var offsets = cljs.core.cst$kw$offsets.cljs$core$IFn$_invoke$arity$1(fleet);
return space_invaders.core.map_invaders((function (rown,coln,invader_at){
if(cljs.core.truth_(invader_at)){
return (((x > ((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(offsets) + (coln * (40))) + (5)))) && ((((x < ((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(offsets) + (coln * (40))) + (30)))) && ((((y > ((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(offsets) + (rown * (40))) + (5)))) && ((y < ((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(offsets) + (rown * (40))) + (30)))))))));
} else {
return null;
}
}),fleet);
});
space_invaders.core.xtreme_invader = (function space_invaders$core$xtreme_invader(fleet,xtreme){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(xtreme,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (row_index,row){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(xtreme,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,exists){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exists,false)){
return null;
} else {
return index;
}
}),row)));
}),cljs.core.cst$kw$invaders.cljs$core$IFn$_invoke$arity$1(fleet)));
});
space_invaders.core.last_invader = (function space_invaders$core$last_invader(fleet){
return space_invaders.core.xtreme_invader(fleet,cljs.core.max);
});
space_invaders.core.first_invader = (function space_invaders$core$first_invader(fleet){
return space_invaders.core.xtreme_invader(fleet,cljs.core.min);
});
space_invaders.core.end_of_screen__QMARK_ = (function space_invaders$core$end_of_screen__QMARK_(fleet){
return ((480) <= (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$offsets.cljs$core$IFn$_invoke$arity$1(fleet)) + (space_invaders.canvas.col_width * (space_invaders.core.last_invader(fleet) + (1)))));
});
space_invaders.core.begining_of_screen__QMARK_ = (function space_invaders$core$begining_of_screen__QMARK_(fleet){
return ((0) >= (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$offsets.cljs$core$IFn$_invoke$arity$1(fleet)) + space_invaders.core.first_invader(fleet)));
});
space_invaders.core.draw_fleet_BANG_ = (function space_invaders$core$draw_fleet_BANG_(draw,fleet){
var map__4577_4578 = fleet;
var map__4577_4579__$1 = cljs.core.__destructure_map(map__4577_4578);
var offsets_4580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4577_4579__$1,cljs.core.cst$kw$offsets);
var direction_4581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4577_4579__$1,cljs.core.cst$kw$direction);
var invaders_4582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4577_4579__$1,cljs.core.cst$kw$invaders);
space_invaders.core.for_indexed_BANG_((function (rown,row){
return space_invaders.core.for_indexed_BANG_((function (coln,alive_QMARK_){
if(cljs.core.truth_(alive_QMARK_)){
return (draw.cljs$core$IFn$_invoke$arity$3 ? draw.cljs$core$IFn$_invoke$arity$3(offsets_4580,rown,coln) : draw.call(null,offsets_4580,rown,coln));
} else {
return null;
}
}),row);
}),invaders_4582);

return fleet;
});
space_invaders.core.draw_life_BANG_ = (function space_invaders$core$draw_life_BANG_(erase_QMARK_,fleet){
var invader = (cljs.core.truth_(erase_QMARK_)?space_invaders.canvas.uninvader:space_invaders.canvas.invader);
space_invaders.core.draw_fleet_BANG_(invader,fleet);

space_invaders.canvas.ship_STAR_(erase_QMARK_,cljs.core.cst$kw$ship.cljs$core$IFn$_invoke$arity$1(fleet));

var temp__5753__auto___4583 = cljs.core.cst$kw$bullet.cljs$core$IFn$_invoke$arity$1(fleet);
if(cljs.core.truth_(temp__5753__auto___4583)){
var bullet_4584 = temp__5753__auto___4583;
space_invaders.canvas.ship_bullet(erase_QMARK_,bullet_4584);
} else {
}

var temp__5753__auto___4585 = cljs.core.cst$kw$esposion.cljs$core$IFn$_invoke$arity$1(fleet);
if(cljs.core.truth_(temp__5753__auto___4585)){
var esposion_4586 = temp__5753__auto___4585;
space_invaders.canvas.boom(erase_QMARK_,esposion_4586,cljs.core.cst$kw$offsets.cljs$core$IFn$_invoke$arity$1(fleet));
} else {
}

return fleet;
});
space_invaders.core.row_end_QMARK_ = (function space_invaders$core$row_end_QMARK_(row){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(row),space_invaders.core.columns)) && (cljs.core.last(row) === true));
});
space_invaders.core.fleet_move_right = (function space_invaders$core$fleet_move_right(row){
return cljs.core.cons(false,row);
});
space_invaders.core.add_row = (function space_invaders$core$add_row(invaders){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),invaders);
});
space_invaders.core.fleet_move_left = (function space_invaders$core$fleet_move_left(row){
if(cljs.core.empty_QMARK_(row)){
return row;
} else {
return cljs.core.next(row);
}
});
space_invaders.core.row_begin_QMARK_ = (function space_invaders$core$row_begin_QMARK_(row){
return cljs.core.first(row) === true;
});
space_invaders.core.moving_left_QMARK_ = (function space_invaders$core$moving_left_QMARK_(fleet){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left,cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(fleet));
});
space_invaders.core.move_down = (function space_invaders$core$move_down(fleet,next){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offsets,cljs.core.cst$kw$y], null)) >= (20))){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(fleet,cljs.core.cst$kw$invaders,space_invaders.core.add_row),cljs.core.cst$kw$direction,next),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offsets,cljs.core.cst$kw$y], null),(0));
} else {
return cljs.core.assoc_in(fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offsets,cljs.core.cst$kw$y], null),(20));
}
});
space_invaders.core.v_move = (function space_invaders$core$v_move(fleet){
var map__4587 = fleet;
var map__4587__$1 = cljs.core.__destructure_map(map__4587);
var map__4588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4587__$1,cljs.core.cst$kw$ship);
var map__4588__$1 = cljs.core.__destructure_map(map__4588);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4588__$1,cljs.core.cst$kw$v);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4588__$1,cljs.core.cst$kw$x);
var x__$1 = (function (){var x__4336__auto__ = (function (){var x__4339__auto__ = (x + v);
var y__4340__auto__ = space_invaders.canvas.the_ship_posish;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4337__auto__ = (0);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var v__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,space_invaders.canvas.the_ship_posish))))?(0):v);
return cljs.core.assoc_in(cljs.core.assoc_in(fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ship,cljs.core.cst$kw$x], null),x__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ship,cljs.core.cst$kw$v], null),v__$1);
});
space_invaders.core.decn = (function space_invaders$core$decn(n){
return (function (x){
return (x - n);
});
});
space_invaders.core.bullet_move = (function space_invaders$core$bullet_move(fleet){
var bullet = cljs.core.cst$kw$bullet.cljs$core$IFn$_invoke$arity$1(fleet);
if(cljs.core.not(bullet)){
return fleet;
} else {
if((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(bullet) <= (0))){
return cljs.core.assoc_in(fleet,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bullet], null),null);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bullet,cljs.core.cst$kw$y], null),space_invaders.core.decn((5)));
}
}
});
space_invaders.core.move_invaders = (function space_invaders$core$move_invaders(fleet){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$sym$moving,fleet], 0));

var G__4589 = cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(fleet);
var G__4589__$1 = (((G__4589 instanceof cljs.core.Keyword))?G__4589.fqn:null);
switch (G__4589__$1) {
case "left":
if(space_invaders.core.begining_of_screen__QMARK_(fleet)){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fleet,cljs.core.cst$kw$direction,cljs.core.cst$kw$down_DASH_right),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offsets,cljs.core.cst$kw$y], null),(0));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offsets,cljs.core.cst$kw$x], null),cljs.core.dec);
}

break;
case "right":
if(space_invaders.core.end_of_screen__QMARK_(fleet)){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fleet,cljs.core.cst$kw$direction,cljs.core.cst$kw$down_DASH_left),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offsets,cljs.core.cst$kw$y], null),(0));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offsets,cljs.core.cst$kw$x], null),cljs.core.inc);
}

break;
case "down-right":
return space_invaders.core.move_down(fleet,cljs.core.cst$kw$right);

break;
case "down-left":
return space_invaders.core.move_down(fleet,cljs.core.cst$kw$left);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4589__$1)].join('')));

}
});
space_invaders.core.col_range = (function space_invaders$core$col_range(fleet,coln){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$offsets.cljs$core$IFn$_invoke$arity$1(fleet)) + (coln * space_invaders.canvas.col_width)),(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$offsets.cljs$core$IFn$_invoke$arity$1(fleet)) + ((coln + (1)) * space_invaders.canvas.col_width))], null);
});
space_invaders.core.row_range = (function space_invaders$core$row_range(fleet,rown){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$offsets.cljs$core$IFn$_invoke$arity$1(fleet)) + (rown * space_invaders.canvas.row_height)),(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$offsets.cljs$core$IFn$_invoke$arity$1(fleet)) + ((rown + (1)) * space_invaders.canvas.row_height))], null);
});
space_invaders.core.invader_at = (function space_invaders$core$invader_at(fleet,x,y){
var map__4591 = fleet;
var map__4591__$1 = cljs.core.__destructure_map(map__4591);
var offsets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4591__$1,cljs.core.cst$kw$offsets);
var invaders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4591__$1,cljs.core.cst$kw$invaders);
var map__4592 = offsets;
var map__4592__$1 = cljs.core.__destructure_map(map__4592);
var ox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4592__$1,cljs.core.cst$kw$x);
var oy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4592__$1,cljs.core.cst$kw$y);
var coln = cljs.core.quot((x - ox),space_invaders.canvas.col_width);
var rown = cljs.core.quot((y - oy),space_invaders.canvas.row_height);
var and__4251__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(invaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rown,coln], null)) === true;
if(and__4251__auto__){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rown,coln], null);
} else {
return and__4251__auto__;
}
});
space_invaders.core.boom_teller_bullet = (function space_invaders$core$boom_teller_bullet(p__4593){
var map__4594 = p__4593;
var map__4594__$1 = cljs.core.__destructure_map(map__4594);
var fleet = map__4594__$1;
var bullet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4594__$1,cljs.core.cst$kw$bullet);
var invaders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4594__$1,cljs.core.cst$kw$invaders);
var map__4595 = bullet;
var map__4595__$1 = cljs.core.__destructure_map(map__4595);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4595__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4595__$1,cljs.core.cst$kw$y);
var or__4253__auto__ = (function (){var temp__5753__auto__ = space_invaders.core.invader_at(fleet,x,y);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__4596 = temp__5753__auto__;
var rown = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4596,(0),null);
var coln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4596,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(cljs.core.assoc_in(fleet,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$esposion], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rown,rown,cljs.core.cst$kw$coln,coln,cljs.core.cst$kw$boom_DASH_level,(1)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$invaders,rown,coln], null),false),cljs.core.cst$kw$bullet);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return fleet;
}
});
space_invaders.core.boom_teller_ship = (function space_invaders$core$boom_teller_ship(p__4599){
var map__4600 = p__4599;
var map__4600__$1 = cljs.core.__destructure_map(map__4600);
var fleet = map__4600__$1;
var ship = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4600__$1,cljs.core.cst$kw$ship);
var invaders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4600__$1,cljs.core.cst$kw$invaders);
var map__4601 = ship;
var map__4601__$1 = cljs.core.__destructure_map(map__4601);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4601__$1,cljs.core.cst$kw$x);
var y = space_invaders.canvas.the_ship_posish;
var or__4253__auto__ = (function (){var temp__5753__auto__ = (function (){var or__4253__auto__ = space_invaders.core.invader_at(fleet,(x + (18)),y);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = space_invaders.core.invader_at(fleet,(x + (9)),(y + (13)));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return space_invaders.core.invader_at(fleet,(x + (27)),(y + (13)));
}
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var vec__4602 = temp__5753__auto__;
var rown = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4602,(0),null);
var coln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4602,(1),null);
return space_invaders.core.make_fleet();
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return fleet;
}
});
space_invaders.core.boom_teller = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(space_invaders.core.boom_teller_bullet,space_invaders.core.boom_teller_ship);
space_invaders.core.big_boom = (function space_invaders$core$big_boom(fleet){
var or__4253__auto__ = (function (){var temp__5753__auto__ = cljs.core.cst$kw$esposion.cljs$core$IFn$_invoke$arity$1(fleet);
if(cljs.core.truth_(temp__5753__auto__)){
var ex = temp__5753__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$boom_DASH_level.cljs$core$IFn$_invoke$arity$1(ex),(3))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fleet,cljs.core.cst$kw$esposion);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$esposion,cljs.core.cst$kw$boom_DASH_level], null),cljs.core.inc);
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return fleet;
}
});
space_invaders.core.move_life = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(space_invaders.core.move_invaders,space_invaders.core.v_move,space_invaders.core.bullet_move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([space_invaders.core.big_boom,space_invaders.core.boom_teller], 0));
space_invaders.core.new_bullet = (function space_invaders$core$new_bullet(fleet){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ship,cljs.core.cst$kw$x], null)),cljs.core.cst$kw$y,space_invaders.canvas.the_ship_posish], null);
});
space_invaders.core.got_command = (function space_invaders$core$got_command(fleet,event){
var G__4605 = event;
var G__4605__$1 = (((G__4605 instanceof cljs.core.Keyword))?G__4605.fqn:null);
switch (G__4605__$1) {
case "left":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ship,cljs.core.cst$kw$v], null),cljs.core.dec);

break;
case "right":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ship,cljs.core.cst$kw$v], null),cljs.core.inc);

break;
case "shoot":
case "up":
if(cljs.core.not(cljs.core.cst$kw$bullet.cljs$core$IFn$_invoke$arity$1(fleet))){
return cljs.core.assoc_in(fleet,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bullet], null),space_invaders.core.new_bullet(fleet));
} else {
return fleet;
}

break;
default:
return fleet;

}
});
space_invaders.core.main_loop_BANG_ = (function space_invaders$core$main_loop_BANG_(){
space_invaders.canvas.Thanos_snap();

var c__2637__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2638__auto__ = (function (){var switch__2277__auto__ = (function (state_4643){
var state_val_4644 = (state_4643[(1)]);
if((state_val_4644 === (7))){
var inst_4631 = (state_4643[(7)]);
var inst_4608 = (state_4643[(8)]);
var inst_4631__$1 = (state_4643[(2)]);
var inst_4632 = space_invaders.core.draw_life_BANG_(true,inst_4608);
var inst_4633 = space_invaders.core.draw_life_BANG_(false,inst_4631__$1);
var inst_4634 = cljs.core.deref(space_invaders.core.the_stoplight);
var state_4643__$1 = (function (){var statearr_4645 = state_4643;
(statearr_4645[(9)] = inst_4632);

(statearr_4645[(7)] = inst_4631__$1);

(statearr_4645[(10)] = inst_4633);

return statearr_4645;
})();
if(cljs.core.truth_(inst_4634)){
var statearr_4646_4669 = state_4643__$1;
(statearr_4646_4669[(1)] = (11));

} else {
var statearr_4647_4670 = state_4643__$1;
(statearr_4647_4670[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4644 === (1))){
var inst_4607 = space_invaders.core.make_fleet();
var inst_4608 = inst_4607;
var state_4643__$1 = (function (){var statearr_4648 = state_4643;
(statearr_4648[(8)] = inst_4608);

return statearr_4648;
})();
var statearr_4649_4671 = state_4643__$1;
(statearr_4649_4671[(2)] = null);

(statearr_4649_4671[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4644 === (4))){
var inst_4613 = (state_4643[(11)]);
var inst_4618 = (state_4643[(2)]);
var inst_4619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_4618,(0),null);
var inst_4620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_4618,(1),null);
var inst_4621 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_4620,inst_4613);
var state_4643__$1 = (function (){var statearr_4650 = state_4643;
(statearr_4650[(12)] = inst_4619);

return statearr_4650;
})();
if(inst_4621){
var statearr_4651_4672 = state_4643__$1;
(statearr_4651_4672[(1)] = (5));

} else {
var statearr_4652_4673 = state_4643__$1;
(statearr_4652_4673[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_4644 === (13))){
var inst_4639 = (state_4643[(2)]);
var state_4643__$1 = state_4643;
var statearr_4653_4674 = state_4643__$1;
(statearr_4653_4674[(2)] = inst_4639);

(statearr_4653_4674[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4644 === (6))){
var state_4643__$1 = state_4643;
var statearr_4654_4675 = state_4643__$1;
(statearr_4654_4675[(1)] = (8));



return cljs.core.cst$kw$recur;
} else {
if((state_val_4644 === (3))){
var inst_4641 = (state_4643[(2)]);
var state_4643__$1 = state_4643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4643__$1,inst_4641);
} else {
if((state_val_4644 === (12))){
var state_4643__$1 = state_4643;
var statearr_4656_4676 = state_4643__$1;
(statearr_4656_4676[(2)] = null);

(statearr_4656_4676[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4644 === (2))){
var inst_4613 = (state_4643[(11)]);
var inst_4613__$1 = cljs.core.async.timeout((50));
var inst_4614 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4615 = [space_invaders.keys.the_keys,inst_4613__$1];
var inst_4616 = (new cljs.core.PersistentVector(null,2,(5),inst_4614,inst_4615,null));
var state_4643__$1 = (function (){var statearr_4657 = state_4643;
(statearr_4657[(11)] = inst_4613__$1);

return statearr_4657;
})();
return cljs.core.async.ioc_alts_BANG_(state_4643__$1,(4),inst_4616);
} else {
if((state_val_4644 === (11))){
var inst_4631 = (state_4643[(7)]);
var inst_4608 = inst_4631;
var state_4643__$1 = (function (){var statearr_4658 = state_4643;
(statearr_4658[(8)] = inst_4608);

return statearr_4658;
})();
var statearr_4659_4677 = state_4643__$1;
(statearr_4659_4677[(2)] = null);

(statearr_4659_4677[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4644 === (9))){
var state_4643__$1 = state_4643;
var statearr_4660_4678 = state_4643__$1;
(statearr_4660_4678[(2)] = null);

(statearr_4660_4678[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4644 === (5))){
var inst_4608 = (state_4643[(8)]);
var inst_4623 = (space_invaders.core.move_life.cljs$core$IFn$_invoke$arity$1 ? space_invaders.core.move_life.cljs$core$IFn$_invoke$arity$1(inst_4608) : space_invaders.core.move_life.call(null,inst_4608));
var state_4643__$1 = state_4643;
var statearr_4661_4679 = state_4643__$1;
(statearr_4661_4679[(2)] = inst_4623);

(statearr_4661_4679[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4644 === (10))){
var inst_4629 = (state_4643[(2)]);
var state_4643__$1 = state_4643;
var statearr_4662_4680 = state_4643__$1;
(statearr_4662_4680[(2)] = inst_4629);

(statearr_4662_4680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_4644 === (8))){
var inst_4619 = (state_4643[(12)]);
var inst_4608 = (state_4643[(8)]);
var inst_4626 = space_invaders.core.got_command(inst_4608,inst_4619);
var state_4643__$1 = state_4643;
var statearr_4663_4681 = state_4643__$1;
(statearr_4663_4681[(2)] = inst_4626);

(statearr_4663_4681[(1)] = (10));


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
var space_invaders$core$main_loop_BANG__$_state_machine__2278__auto__ = null;
var space_invaders$core$main_loop_BANG__$_state_machine__2278__auto____0 = (function (){
var statearr_4664 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4664[(0)] = space_invaders$core$main_loop_BANG__$_state_machine__2278__auto__);

(statearr_4664[(1)] = (1));

return statearr_4664;
});
var space_invaders$core$main_loop_BANG__$_state_machine__2278__auto____1 = (function (state_4643){
while(true){
var ret_value__2279__auto__ = (function (){try{while(true){
var result__2280__auto__ = switch__2277__auto__(state_4643);
if(cljs.core.keyword_identical_QMARK_(result__2280__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2280__auto__;
}
break;
}
}catch (e4665){var ex__2281__auto__ = e4665;
var statearr_4666_4682 = state_4643;
(statearr_4666_4682[(2)] = ex__2281__auto__);


if(cljs.core.seq((state_4643[(4)]))){
var statearr_4667_4683 = state_4643;
(statearr_4667_4683[(1)] = cljs.core.first((state_4643[(4)])));

} else {
throw ex__2281__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2279__auto__,cljs.core.cst$kw$recur)){
var G__4684 = state_4643;
state_4643 = G__4684;
continue;
} else {
return ret_value__2279__auto__;
}
break;
}
});
space_invaders$core$main_loop_BANG__$_state_machine__2278__auto__ = function(state_4643){
switch(arguments.length){
case 0:
return space_invaders$core$main_loop_BANG__$_state_machine__2278__auto____0.call(this);
case 1:
return space_invaders$core$main_loop_BANG__$_state_machine__2278__auto____1.call(this,state_4643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
space_invaders$core$main_loop_BANG__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$0 = space_invaders$core$main_loop_BANG__$_state_machine__2278__auto____0;
space_invaders$core$main_loop_BANG__$_state_machine__2278__auto__.cljs$core$IFn$_invoke$arity$1 = space_invaders$core$main_loop_BANG__$_state_machine__2278__auto____1;
return space_invaders$core$main_loop_BANG__$_state_machine__2278__auto__;
})()
})();
var state__2639__auto__ = (function (){var statearr_4668 = (f__2638__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2638__auto__.cljs$core$IFn$_invoke$arity$0() : f__2638__auto__.call(null));
(statearr_4668[(6)] = c__2637__auto__);

return statearr_4668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2639__auto__);
}));

return c__2637__auto__;
});
space_invaders.core.stop_BANG_ = (function space_invaders$core$stop_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(space_invaders.core.the_stoplight,cljs.core.constantly(false));
});
space_invaders.core.start_BANG_ = (function space_invaders$core$start_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(space_invaders.core.the_stoplight,cljs.core.constantly(true));
});
space_invaders.core.Main_thing = (function space_invaders$core$Main_thing(){
space_invaders.keys.handle_BANG_();

space_invaders.core.start_BANG_();

return space_invaders.core.main_loop_BANG_();
});
space_invaders.core.Stop_thing = (function space_invaders$core$Stop_thing(){
space_invaders.keys.remove_BANG_();

return space_invaders.core.stop_BANG_();
});
space_invaders.core.Main_thing();
