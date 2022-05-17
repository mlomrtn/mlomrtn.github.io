// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('space_invaders.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('space_invaders.canvas');
goog.require('space_invaders.keys');
space_invaders.core.columns = (12);
space_invaders.core.rows = (12);
if((typeof space_invaders !== 'undefined') && (typeof space_invaders.core !== 'undefined') && (typeof space_invaders.core.the_stoplight !== 'undefined')){
} else {
space_invaders.core.the_stoplight = cljs.core.atom.call(null,false);
}
space_invaders.core.make_fleet = (function space_invaders$core$make_fleet(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"offsets","offsets",727555611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"invaders","invaders",-301486064),cljs.core.mapv.call(null,(function (row){
return cljs.core.mapv.call(null,cljs.core.constantly.call(null,true),cljs.core.range.call(null,(space_invaders.core.columns - (4))));
}),cljs.core.range.call(null,(2))),new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(220),new cljs.core.Keyword(null,"v","v",21465059),(0)], null),new cljs.core.Keyword(null,"bullet","bullet",726988937),null], null);
});
space_invaders.core.for_indexed_BANG_ = (function space_invaders$core$for_indexed_BANG_(f,coll){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,f,coll));
});
space_invaders.core.map_invaders = (function space_invaders$core$map_invaders(function$,fleet){
return space_invaders.core.for_indexed_BANG_.call(null,(function (row_index,row){
return space_invaders.core.for_indexed_BANG_.call(null,(function (col_index,invader_at){
return function$.call(null,row_index,col_index,invader_at);
}),row);
}),new cljs.core.Keyword(null,"invaders","invaders",-301486064).cljs$core$IFn$_invoke$arity$1(fleet));
});
space_invaders.core.rown_coln_boommed_invader = (function space_invaders$core$rown_coln_boommed_invader(fleet,x,y){
var offsets = new cljs.core.Keyword(null,"offsets","offsets",727555611).cljs$core$IFn$_invoke$arity$1(fleet);
return space_invaders.core.map_invaders.call(null,(function (rown,coln,invader_at){
if(cljs.core.truth_(invader_at)){
return (((x > ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offsets) + (coln * (40))) + (5)))) && ((((x < ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offsets) + (coln * (40))) + (30)))) && ((((y > ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offsets) + (rown * (40))) + (5)))) && ((y < ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offsets) + (rown * (40))) + (30)))))))));
} else {
return null;
}
}),fleet);
});
space_invaders.core.xtreme_invader = (function space_invaders$core$xtreme_invader(fleet,xtreme){
return cljs.core.reduce.call(null,xtreme,cljs.core.map_indexed.call(null,(function (row_index,row){
return cljs.core.reduce.call(null,xtreme,cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map_indexed.call(null,(function (index,exists){
if(cljs.core._EQ_.call(null,exists,false)){
return null;
} else {
return index;
}
}),row)));
}),new cljs.core.Keyword(null,"invaders","invaders",-301486064).cljs$core$IFn$_invoke$arity$1(fleet)));
});
space_invaders.core.last_invader = (function space_invaders$core$last_invader(fleet){
return space_invaders.core.xtreme_invader.call(null,fleet,cljs.core.max);
});
space_invaders.core.first_invader = (function space_invaders$core$first_invader(fleet){
return space_invaders.core.xtreme_invader.call(null,fleet,cljs.core.min);
});
space_invaders.core.end_of_screen__QMARK_ = (function space_invaders$core$end_of_screen__QMARK_(fleet){
return ((480) <= (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"offsets","offsets",727555611).cljs$core$IFn$_invoke$arity$1(fleet)) + (space_invaders.canvas.col_width * (space_invaders.core.last_invader.call(null,fleet) + (1)))));
});
space_invaders.core.begining_of_screen__QMARK_ = (function space_invaders$core$begining_of_screen__QMARK_(fleet){
return ((0) >= (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"offsets","offsets",727555611).cljs$core$IFn$_invoke$arity$1(fleet)) + space_invaders.core.first_invader.call(null,fleet)));
});
space_invaders.core.draw_fleet_BANG_ = (function space_invaders$core$draw_fleet_BANG_(draw,fleet){
var map__8544_8545 = fleet;
var map__8544_8546__$1 = cljs.core.__destructure_map.call(null,map__8544_8545);
var offsets_8547 = cljs.core.get.call(null,map__8544_8546__$1,new cljs.core.Keyword(null,"offsets","offsets",727555611));
var direction_8548 = cljs.core.get.call(null,map__8544_8546__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var invaders_8549 = cljs.core.get.call(null,map__8544_8546__$1,new cljs.core.Keyword(null,"invaders","invaders",-301486064));
space_invaders.core.for_indexed_BANG_.call(null,(function (rown,row){
return space_invaders.core.for_indexed_BANG_.call(null,(function (coln,alive_QMARK_){
if(cljs.core.truth_(alive_QMARK_)){
return draw.call(null,offsets_8547,rown,coln);
} else {
return null;
}
}),row);
}),invaders_8549);

return fleet;
});
space_invaders.core.draw_life_BANG_ = (function space_invaders$core$draw_life_BANG_(erase_QMARK_,fleet){
var invader = (cljs.core.truth_(erase_QMARK_)?space_invaders.canvas.uninvader:space_invaders.canvas.invader);
space_invaders.core.draw_fleet_BANG_.call(null,invader,fleet);

space_invaders.canvas.ship_STAR_.call(null,erase_QMARK_,new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(fleet));

var temp__5753__auto___8550 = new cljs.core.Keyword(null,"bullet","bullet",726988937).cljs$core$IFn$_invoke$arity$1(fleet);
if(cljs.core.truth_(temp__5753__auto___8550)){
var bullet_8551 = temp__5753__auto___8550;
space_invaders.canvas.ship_bullet.call(null,erase_QMARK_,bullet_8551);
} else {
}

var temp__5753__auto___8552 = new cljs.core.Keyword(null,"esposion","esposion",1584191264).cljs$core$IFn$_invoke$arity$1(fleet);
if(cljs.core.truth_(temp__5753__auto___8552)){
var esposion_8553 = temp__5753__auto___8552;
space_invaders.canvas.boom.call(null,erase_QMARK_,esposion_8553,new cljs.core.Keyword(null,"offsets","offsets",727555611).cljs$core$IFn$_invoke$arity$1(fleet));
} else {
}

return fleet;
});
space_invaders.core.row_end_QMARK_ = (function space_invaders$core$row_end_QMARK_(row){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,row),space_invaders.core.columns)) && (cljs.core.last.call(null,row) === true));
});
space_invaders.core.fleet_move_right = (function space_invaders$core$fleet_move_right(row){
return cljs.core.cons.call(null,false,row);
});
space_invaders.core.add_row = (function space_invaders$core$add_row(invaders){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),invaders);
});
space_invaders.core.fleet_move_left = (function space_invaders$core$fleet_move_left(row){
if(cljs.core.empty_QMARK_.call(null,row)){
return row;
} else {
return cljs.core.next.call(null,row);
}
});
space_invaders.core.row_begin_QMARK_ = (function space_invaders$core$row_begin_QMARK_(row){
return cljs.core.first.call(null,row) === true;
});
space_invaders.core.moving_left_QMARK_ = (function space_invaders$core$moving_left_QMARK_(fleet){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(fleet));
});
space_invaders.core.move_down = (function space_invaders$core$move_down(fleet,next){
if((cljs.core.get_in.call(null,fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offsets","offsets",727555611),new cljs.core.Keyword(null,"y","y",-1757859776)], null)) >= (20))){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,fleet,new cljs.core.Keyword(null,"invaders","invaders",-301486064),space_invaders.core.add_row),new cljs.core.Keyword(null,"direction","direction",-633359395),next),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offsets","offsets",727555611),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(0));
} else {
return cljs.core.assoc_in.call(null,fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offsets","offsets",727555611),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(20));
}
});
space_invaders.core.v_move = (function space_invaders$core$v_move(fleet){
var map__8554 = fleet;
var map__8554__$1 = cljs.core.__destructure_map.call(null,map__8554);
var map__8555 = cljs.core.get.call(null,map__8554__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var map__8555__$1 = cljs.core.__destructure_map.call(null,map__8555);
var v = cljs.core.get.call(null,map__8555__$1,new cljs.core.Keyword(null,"v","v",21465059));
var x = cljs.core.get.call(null,map__8555__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var x__$1 = (function (){var x__4336__auto__ = (function (){var x__4339__auto__ = (x + v);
var y__4340__auto__ = space_invaders.canvas.the_ship_posish;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4337__auto__ = (0);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var v__$1 = ((((cljs.core._EQ_.call(null,x__$1,(0))) || (cljs.core._EQ_.call(null,x__$1,space_invaders.canvas.the_ship_posish))))?(0):v);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"x","x",2099068185)], null),x__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"v","v",21465059)], null),v__$1);
});
space_invaders.core.decn = (function space_invaders$core$decn(n){
return (function (x){
return (x - n);
});
});
space_invaders.core.bullet_move = (function space_invaders$core$bullet_move(fleet){
var bullet = new cljs.core.Keyword(null,"bullet","bullet",726988937).cljs$core$IFn$_invoke$arity$1(fleet);
if(cljs.core.not.call(null,bullet)){
return fleet;
} else {
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bullet) <= (0))){
return cljs.core.assoc_in.call(null,fleet,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullet","bullet",726988937)], null),null);
} else {
return cljs.core.update_in.call(null,fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullet","bullet",726988937),new cljs.core.Keyword(null,"y","y",-1757859776)], null),space_invaders.core.decn.call(null,(5)));
}
}
});
space_invaders.core.move_invaders = (function space_invaders$core$move_invaders(fleet){
cljs.core.prn.call(null,new cljs.core.Symbol(null,"moving","moving",-893638529,null),fleet);

var G__8556 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(fleet);
var G__8556__$1 = (((G__8556 instanceof cljs.core.Keyword))?G__8556.fqn:null);
switch (G__8556__$1) {
case "left":
if(space_invaders.core.begining_of_screen__QMARK_.call(null,fleet)){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,fleet,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"down-right","down-right",1213350619)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offsets","offsets",727555611),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(0));
} else {
return cljs.core.update_in.call(null,fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offsets","offsets",727555611),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.dec);
}

break;
case "right":
if(space_invaders.core.end_of_screen__QMARK_.call(null,fleet)){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,fleet,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"down-left","down-left",568486758)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offsets","offsets",727555611),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(0));
} else {
return cljs.core.update_in.call(null,fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offsets","offsets",727555611),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.inc);
}

break;
case "down-right":
return space_invaders.core.move_down.call(null,fleet,new cljs.core.Keyword(null,"right","right",-452581833));

break;
case "down-left":
return space_invaders.core.move_down.call(null,fleet,new cljs.core.Keyword(null,"left","left",-399115937));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8556__$1)].join('')));

}
});
space_invaders.core.col_range = (function space_invaders$core$col_range(fleet,coln){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"offsets","offsets",727555611).cljs$core$IFn$_invoke$arity$1(fleet)) + (coln * space_invaders.canvas.col_width)),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"offsets","offsets",727555611).cljs$core$IFn$_invoke$arity$1(fleet)) + ((coln + (1)) * space_invaders.canvas.col_width))], null);
});
space_invaders.core.row_range = (function space_invaders$core$row_range(fleet,rown){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"offsets","offsets",727555611).cljs$core$IFn$_invoke$arity$1(fleet)) + (rown * space_invaders.canvas.row_height)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"offsets","offsets",727555611).cljs$core$IFn$_invoke$arity$1(fleet)) + ((rown + (1)) * space_invaders.canvas.row_height))], null);
});
space_invaders.core.invader_at = (function space_invaders$core$invader_at(fleet,x,y){
var map__8558 = fleet;
var map__8558__$1 = cljs.core.__destructure_map.call(null,map__8558);
var offsets = cljs.core.get.call(null,map__8558__$1,new cljs.core.Keyword(null,"offsets","offsets",727555611));
var invaders = cljs.core.get.call(null,map__8558__$1,new cljs.core.Keyword(null,"invaders","invaders",-301486064));
var map__8559 = offsets;
var map__8559__$1 = cljs.core.__destructure_map.call(null,map__8559);
var ox = cljs.core.get.call(null,map__8559__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__8559__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var coln = cljs.core.quot.call(null,(x - ox),space_invaders.canvas.col_width);
var rown = cljs.core.quot.call(null,(y - oy),space_invaders.canvas.row_height);
var and__4251__auto__ = cljs.core.get_in.call(null,invaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rown,coln], null)) === true;
if(and__4251__auto__){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rown,coln], null);
} else {
return and__4251__auto__;
}
});
space_invaders.core.boom_teller_bullet = (function space_invaders$core$boom_teller_bullet(p__8560){
var map__8561 = p__8560;
var map__8561__$1 = cljs.core.__destructure_map.call(null,map__8561);
var fleet = map__8561__$1;
var bullet = cljs.core.get.call(null,map__8561__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var invaders = cljs.core.get.call(null,map__8561__$1,new cljs.core.Keyword(null,"invaders","invaders",-301486064));
var map__8562 = bullet;
var map__8562__$1 = cljs.core.__destructure_map.call(null,map__8562);
var x = cljs.core.get.call(null,map__8562__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8562__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var or__4253__auto__ = (function (){var temp__5753__auto__ = space_invaders.core.invader_at.call(null,fleet,x,y);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__8563 = temp__5753__auto__;
var rown = cljs.core.nth.call(null,vec__8563,(0),null);
var coln = cljs.core.nth.call(null,vec__8563,(1),null);
return cljs.core.dissoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,fleet,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"esposion","esposion",1584191264)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rown","rown",1714245113),rown,new cljs.core.Keyword(null,"coln","coln",-81613716),coln,new cljs.core.Keyword(null,"boom-level","boom-level",-419689803),(1)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invaders","invaders",-301486064),rown,coln], null),false),new cljs.core.Keyword(null,"bullet","bullet",726988937));
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
space_invaders.core.boom_teller_ship = (function space_invaders$core$boom_teller_ship(p__8566){
var map__8567 = p__8566;
var map__8567__$1 = cljs.core.__destructure_map.call(null,map__8567);
var fleet = map__8567__$1;
var ship = cljs.core.get.call(null,map__8567__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var invaders = cljs.core.get.call(null,map__8567__$1,new cljs.core.Keyword(null,"invaders","invaders",-301486064));
var map__8568 = ship;
var map__8568__$1 = cljs.core.__destructure_map.call(null,map__8568);
var x = cljs.core.get.call(null,map__8568__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = space_invaders.canvas.the_ship_posish;
var or__4253__auto__ = (function (){var temp__5753__auto__ = (function (){var or__4253__auto__ = space_invaders.core.invader_at.call(null,fleet,(x + (18)),y);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = space_invaders.core.invader_at.call(null,fleet,(x + (9)),(y + (13)));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return space_invaders.core.invader_at.call(null,fleet,(x + (27)),(y + (13)));
}
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var vec__8569 = temp__5753__auto__;
var rown = cljs.core.nth.call(null,vec__8569,(0),null);
var coln = cljs.core.nth.call(null,vec__8569,(1),null);
return space_invaders.core.make_fleet.call(null);
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
space_invaders.core.boom_teller = cljs.core.comp.call(null,space_invaders.core.boom_teller_bullet,space_invaders.core.boom_teller_ship);
space_invaders.core.big_boom = (function space_invaders$core$big_boom(fleet){
var or__4253__auto__ = (function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"esposion","esposion",1584191264).cljs$core$IFn$_invoke$arity$1(fleet);
if(cljs.core.truth_(temp__5753__auto__)){
var ex = temp__5753__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"boom-level","boom-level",-419689803).cljs$core$IFn$_invoke$arity$1(ex),(3))){
return cljs.core.dissoc.call(null,fleet,new cljs.core.Keyword(null,"esposion","esposion",1584191264));
} else {
return cljs.core.update_in.call(null,fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"esposion","esposion",1584191264),new cljs.core.Keyword(null,"boom-level","boom-level",-419689803)], null),cljs.core.inc);
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
space_invaders.core.move_life = cljs.core.comp.call(null,space_invaders.core.move_invaders,space_invaders.core.v_move,space_invaders.core.bullet_move,space_invaders.core.big_boom,space_invaders.core.boom_teller);
space_invaders.core.new_bullet = (function space_invaders$core$new_bullet(fleet){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get_in.call(null,fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"x","x",2099068185)], null)),new cljs.core.Keyword(null,"y","y",-1757859776),space_invaders.canvas.the_ship_posish], null);
});
space_invaders.core.got_command = (function space_invaders$core$got_command(fleet,event){
var G__8572 = event;
var G__8572__$1 = (((G__8572 instanceof cljs.core.Keyword))?G__8572.fqn:null);
switch (G__8572__$1) {
case "left":
return cljs.core.update_in.call(null,fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"v","v",21465059)], null),cljs.core.dec);

break;
case "right":
return cljs.core.update_in.call(null,fleet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"v","v",21465059)], null),cljs.core.inc);

break;
case "shoot":
case "up":
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"bullet","bullet",726988937).cljs$core$IFn$_invoke$arity$1(fleet))){
return cljs.core.assoc_in.call(null,fleet,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullet","bullet",726988937)], null),space_invaders.core.new_bullet.call(null,fleet));
} else {
return fleet;
}

break;
default:
return fleet;

}
});
space_invaders.core.main_loop_BANG_ = (function space_invaders$core$main_loop_BANG_(){
space_invaders.canvas.Thanos_snap.call(null);

var c__8280__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8281__auto__ = (function (){var switch__8123__auto__ = (function (state_8610){
var state_val_8611 = (state_8610[(1)]);
if((state_val_8611 === (7))){
var inst_8598 = (state_8610[(7)]);
var inst_8575 = (state_8610[(8)]);
var inst_8598__$1 = (state_8610[(2)]);
var inst_8599 = space_invaders.core.draw_life_BANG_.call(null,true,inst_8575);
var inst_8600 = space_invaders.core.draw_life_BANG_.call(null,false,inst_8598__$1);
var inst_8601 = cljs.core.deref.call(null,space_invaders.core.the_stoplight);
var state_8610__$1 = (function (){var statearr_8612 = state_8610;
(statearr_8612[(7)] = inst_8598__$1);

(statearr_8612[(9)] = inst_8599);

(statearr_8612[(10)] = inst_8600);

return statearr_8612;
})();
if(cljs.core.truth_(inst_8601)){
var statearr_8613_8636 = state_8610__$1;
(statearr_8613_8636[(1)] = (11));

} else {
var statearr_8614_8637 = state_8610__$1;
(statearr_8614_8637[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8611 === (1))){
var inst_8574 = space_invaders.core.make_fleet.call(null);
var inst_8575 = inst_8574;
var state_8610__$1 = (function (){var statearr_8615 = state_8610;
(statearr_8615[(8)] = inst_8575);

return statearr_8615;
})();
var statearr_8616_8638 = state_8610__$1;
(statearr_8616_8638[(2)] = null);

(statearr_8616_8638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8611 === (4))){
var inst_8580 = (state_8610[(11)]);
var inst_8585 = (state_8610[(2)]);
var inst_8586 = cljs.core.nth.call(null,inst_8585,(0),null);
var inst_8587 = cljs.core.nth.call(null,inst_8585,(1),null);
var inst_8588 = cljs.core._EQ_.call(null,inst_8587,inst_8580);
var state_8610__$1 = (function (){var statearr_8617 = state_8610;
(statearr_8617[(12)] = inst_8586);

return statearr_8617;
})();
if(inst_8588){
var statearr_8618_8639 = state_8610__$1;
(statearr_8618_8639[(1)] = (5));

} else {
var statearr_8619_8640 = state_8610__$1;
(statearr_8619_8640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8611 === (13))){
var inst_8606 = (state_8610[(2)]);
var state_8610__$1 = state_8610;
var statearr_8620_8641 = state_8610__$1;
(statearr_8620_8641[(2)] = inst_8606);

(statearr_8620_8641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8611 === (6))){
var state_8610__$1 = state_8610;
var statearr_8621_8642 = state_8610__$1;
(statearr_8621_8642[(1)] = (8));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8611 === (3))){
var inst_8608 = (state_8610[(2)]);
var state_8610__$1 = state_8610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8610__$1,inst_8608);
} else {
if((state_val_8611 === (12))){
var state_8610__$1 = state_8610;
var statearr_8623_8643 = state_8610__$1;
(statearr_8623_8643[(2)] = null);

(statearr_8623_8643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8611 === (2))){
var inst_8580 = (state_8610[(11)]);
var inst_8580__$1 = cljs.core.async.timeout.call(null,(50));
var inst_8581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8582 = [space_invaders.keys.the_keys,inst_8580__$1];
var inst_8583 = (new cljs.core.PersistentVector(null,2,(5),inst_8581,inst_8582,null));
var state_8610__$1 = (function (){var statearr_8624 = state_8610;
(statearr_8624[(11)] = inst_8580__$1);

return statearr_8624;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8610__$1,(4),inst_8583);
} else {
if((state_val_8611 === (11))){
var inst_8598 = (state_8610[(7)]);
var inst_8575 = inst_8598;
var state_8610__$1 = (function (){var statearr_8625 = state_8610;
(statearr_8625[(8)] = inst_8575);

return statearr_8625;
})();
var statearr_8626_8644 = state_8610__$1;
(statearr_8626_8644[(2)] = null);

(statearr_8626_8644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8611 === (9))){
var state_8610__$1 = state_8610;
var statearr_8627_8645 = state_8610__$1;
(statearr_8627_8645[(2)] = null);

(statearr_8627_8645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8611 === (5))){
var inst_8575 = (state_8610[(8)]);
var inst_8590 = space_invaders.core.move_life.call(null,inst_8575);
var state_8610__$1 = state_8610;
var statearr_8628_8646 = state_8610__$1;
(statearr_8628_8646[(2)] = inst_8590);

(statearr_8628_8646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8611 === (10))){
var inst_8596 = (state_8610[(2)]);
var state_8610__$1 = state_8610;
var statearr_8629_8647 = state_8610__$1;
(statearr_8629_8647[(2)] = inst_8596);

(statearr_8629_8647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8611 === (8))){
var inst_8586 = (state_8610[(12)]);
var inst_8575 = (state_8610[(8)]);
var inst_8593 = space_invaders.core.got_command.call(null,inst_8575,inst_8586);
var state_8610__$1 = state_8610;
var statearr_8630_8648 = state_8610__$1;
(statearr_8630_8648[(2)] = inst_8593);

(statearr_8630_8648[(1)] = (10));


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
var space_invaders$core$main_loop_BANG__$_state_machine__8124__auto__ = null;
var space_invaders$core$main_loop_BANG__$_state_machine__8124__auto____0 = (function (){
var statearr_8631 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8631[(0)] = space_invaders$core$main_loop_BANG__$_state_machine__8124__auto__);

(statearr_8631[(1)] = (1));

return statearr_8631;
});
var space_invaders$core$main_loop_BANG__$_state_machine__8124__auto____1 = (function (state_8610){
while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_8610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8126__auto__;
}
break;
}
}catch (e8632){var ex__8127__auto__ = e8632;
var statearr_8633_8649 = state_8610;
(statearr_8633_8649[(2)] = ex__8127__auto__);


if(cljs.core.seq.call(null,(state_8610[(4)]))){
var statearr_8634_8650 = state_8610;
(statearr_8634_8650[(1)] = cljs.core.first.call(null,(state_8610[(4)])));

} else {
throw ex__8127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8651 = state_8610;
state_8610 = G__8651;
continue;
} else {
return ret_value__8125__auto__;
}
break;
}
});
space_invaders$core$main_loop_BANG__$_state_machine__8124__auto__ = function(state_8610){
switch(arguments.length){
case 0:
return space_invaders$core$main_loop_BANG__$_state_machine__8124__auto____0.call(this);
case 1:
return space_invaders$core$main_loop_BANG__$_state_machine__8124__auto____1.call(this,state_8610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
space_invaders$core$main_loop_BANG__$_state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = space_invaders$core$main_loop_BANG__$_state_machine__8124__auto____0;
space_invaders$core$main_loop_BANG__$_state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = space_invaders$core$main_loop_BANG__$_state_machine__8124__auto____1;
return space_invaders$core$main_loop_BANG__$_state_machine__8124__auto__;
})()
})();
var state__8282__auto__ = (function (){var statearr_8635 = f__8281__auto__.call(null);
(statearr_8635[(6)] = c__8280__auto__);

return statearr_8635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8282__auto__);
}));

return c__8280__auto__;
});
space_invaders.core.stop_BANG_ = (function space_invaders$core$stop_BANG_(){
return cljs.core.swap_BANG_.call(null,space_invaders.core.the_stoplight,cljs.core.constantly.call(null,false));
});
space_invaders.core.start_BANG_ = (function space_invaders$core$start_BANG_(){
return cljs.core.swap_BANG_.call(null,space_invaders.core.the_stoplight,cljs.core.constantly.call(null,true));
});
space_invaders.core.Main_thing = (function space_invaders$core$Main_thing(){
space_invaders.keys.handle_BANG_.call(null);

space_invaders.core.start_BANG_.call(null);

return space_invaders.core.main_loop_BANG_.call(null);
});
space_invaders.core.Stop_thing = (function space_invaders$core$Stop_thing(){
space_invaders.keys.remove_BANG_.call(null);

return space_invaders.core.stop_BANG_.call(null);
});
space_invaders.core.Main_thing.call(null);

//# sourceMappingURL=core.js.map
