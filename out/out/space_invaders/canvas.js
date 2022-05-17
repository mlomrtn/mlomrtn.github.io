// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('space_invaders.canvas');
goog.require('cljs.core');
space_invaders.canvas.col_width = (40);
space_invaders.canvas.row_height = (40);
space_invaders.canvas.tau = ((2) * Math.PI);
space_invaders.canvas._STAR_stage_STAR_ = document.getElementById("space").getContext("2d");
space_invaders.canvas.rown_coln_x_y = (function space_invaders$canvas$rown_coln_x_y(rown,coln,offsets){
var x = ((5) + (coln * space_invaders.canvas.col_width));
var x__$1 = (x + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offsets));
var y = ((5) + (rown * space_invaders.canvas.row_height));
var y__$1 = (y + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offsets));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null);
});
space_invaders.canvas.invader_STAR_ = (function space_invaders$canvas$invader_STAR_(color,offsets,row,col){
var vec__11075 = space_invaders.canvas.rown_coln_x_y.call(null,row,col,offsets);
var x = cljs.core.nth.call(null,vec__11075,(0),null);
var y = cljs.core.nth.call(null,vec__11075,(1),null);
(space_invaders.canvas._STAR_stage_STAR_.fillStyle = color);

var G__11078_11083 = space_invaders.canvas._STAR_stage_STAR_;
G__11078_11083.fillRect((x + (5)),y,(20),(5));

G__11078_11083.fillRect(x,(y + (5)),(30),(15));

G__11078_11083.beginPath();

G__11078_11083.arc((x + (5)),(y + (5)),(5),(0),space_invaders.canvas.tau,false);

G__11078_11083.fill();

G__11078_11083.beginPath();

G__11078_11083.arc((x + (25)),(y + (5)),(5),(0),space_invaders.canvas.tau,false);

G__11078_11083.fill();


var seq__11079_11084 = cljs.core.seq.call(null,cljs.core.range.call(null,(4)));
var chunk__11080_11085 = null;
var count__11081_11086 = (0);
var i__11082_11087 = (0);
while(true){
if((i__11082_11087 < count__11081_11086)){
var tx_11088 = cljs.core._nth.call(null,chunk__11080_11085,i__11082_11087);
space_invaders.canvas._STAR_stage_STAR_.fillRect(((x + (tx_11088 * (5))) + tx_11088),(y + (20)),(5),(10));


var G__11089 = seq__11079_11084;
var G__11090 = chunk__11080_11085;
var G__11091 = count__11081_11086;
var G__11092 = (i__11082_11087 + (1));
seq__11079_11084 = G__11089;
chunk__11080_11085 = G__11090;
count__11081_11086 = G__11091;
i__11082_11087 = G__11092;
continue;
} else {
var temp__5753__auto___11093 = cljs.core.seq.call(null,seq__11079_11084);
if(temp__5753__auto___11093){
var seq__11079_11094__$1 = temp__5753__auto___11093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11079_11094__$1)){
var c__4679__auto___11095 = cljs.core.chunk_first.call(null,seq__11079_11094__$1);
var G__11096 = cljs.core.chunk_rest.call(null,seq__11079_11094__$1);
var G__11097 = c__4679__auto___11095;
var G__11098 = cljs.core.count.call(null,c__4679__auto___11095);
var G__11099 = (0);
seq__11079_11084 = G__11096;
chunk__11080_11085 = G__11097;
count__11081_11086 = G__11098;
i__11082_11087 = G__11099;
continue;
} else {
var tx_11100 = cljs.core.first.call(null,seq__11079_11094__$1);
space_invaders.canvas._STAR_stage_STAR_.fillRect(((x + (tx_11100 * (5))) + tx_11100),(y + (20)),(5),(10));


var G__11101 = cljs.core.next.call(null,seq__11079_11094__$1);
var G__11102 = null;
var G__11103 = (0);
var G__11104 = (0);
seq__11079_11084 = G__11101;
chunk__11080_11085 = G__11102;
count__11081_11086 = G__11103;
i__11082_11087 = G__11104;
continue;
}
} else {
}
}
break;
}

return space_invaders.canvas._STAR_stage_STAR_.fillRect(((x + ((4) * (5))) + (5)),(y + (20)),(5),(10));
});
space_invaders.canvas.invader = cljs.core.partial.call(null,space_invaders.canvas.invader_STAR_,"#CCFF33");
space_invaders.canvas.uninvader = cljs.core.partial.call(null,space_invaders.canvas.invader_STAR_,"black");
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
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,f,coll));
});
space_invaders.canvas.ship_tall = ((13) * (3));
space_invaders.canvas.canvas_butt = (480);
space_invaders.canvas.the_ship_posish = (space_invaders.canvas.canvas_butt - space_invaders.canvas.ship_tall);
space_invaders.canvas.ship_STAR_ = (function space_invaders$canvas$ship_STAR_(erase_me,p__11105){
var map__11106 = p__11105;
var map__11106__$1 = cljs.core.__destructure_map.call(null,map__11106);
var x_off = cljs.core.get.call(null,map__11106__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var erase_me__$1 = ((erase_me === true)?"#000000":false);
var x = x_off;
var y = space_invaders.canvas.the_ship_posish;
var square = cljs.core.partial.call(null,space_invaders.canvas.square,x,y,(3));
return space_invaders.canvas.for_indexed_BANG_.call(null,(function (rown,row){
return space_invaders.canvas.for_indexed_BANG_.call(null,(function (coln,color){
return square.call(null,(coln * (3)),(rown * (3)),(function (){var or__4253__auto__ = erase_me__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core._EQ_.call(null,color,(0))){
return "#000000";
} else {
return color;
}
}
})());
}),row);
}),space_invaders.canvas.the_ship_shape);
});
space_invaders.canvas.ship = cljs.core.partial.call(null,space_invaders.canvas.ship_STAR_,false);
space_invaders.canvas.unship = cljs.core.partial.call(null,space_invaders.canvas.ship_STAR_,"#000000");
space_invaders.canvas.Thanos_snap = (function space_invaders$canvas$Thanos_snap(){
(space_invaders.canvas._STAR_stage_STAR_.fillStyle = "#000000");

var G__11107 = space_invaders.canvas._STAR_stage_STAR_;
G__11107.fillRect((0),(0),(480),(480));

return G__11107;
});
space_invaders.canvas.ship_bullet = (function space_invaders$canvas$ship_bullet(erase_me,p__11108){
var map__11109 = p__11108;
var map__11109__$1 = cljs.core.__destructure_map.call(null,map__11109);
var x = cljs.core.get.call(null,map__11109__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__11109__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var color = (cljs.core.truth_(erase_me)?"#000000":"#ffffff");
var square = cljs.core.partial.call(null,space_invaders.canvas.square,x,y,(3));
cljs.core.prn.call(null,new cljs.core.Symbol(null,"ship","ship",1838395000,null),x,y,color);

square.call(null,(0),(3),color);

return square.call(null,(0),(0),color);
});
space_invaders.canvas.boom_color = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orange","orange",73816386),"#ff6000",new cljs.core.Keyword(null,"yellow","yellow",-881035449),"#f8c823",new cljs.core.Keyword(null,"white","white",-483998618),"#ffffff"], null);
space_invaders.canvas.boom = (function space_invaders$canvas$boom(erase_me,p__11110,offsets){
var map__11111 = p__11110;
var map__11111__$1 = cljs.core.__destructure_map.call(null,map__11111);
var stage_me = cljs.core.get.call(null,map__11111__$1,new cljs.core.Keyword(null,"boom-level","boom-level",-419689803));
var rown = cljs.core.get.call(null,map__11111__$1,new cljs.core.Keyword(null,"rown","rown",1714245113));
var coln = cljs.core.get.call(null,map__11111__$1,new cljs.core.Keyword(null,"coln","coln",-81613716));
var vec__11112 = space_invaders.canvas.rown_coln_x_y.call(null,rown,coln,offsets);
var x = cljs.core.nth.call(null,vec__11112,(0),null);
var y = cljs.core.nth.call(null,vec__11112,(1),null);
var vec__11115 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (20)),(y + (20))], null);
var x__$1 = cljs.core.nth.call(null,vec__11115,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__11115,(1),null);
var color = (cljs.core.truth_(erase_me)?cljs.core.constantly.call(null,"#000000"):space_invaders.canvas.boom_color);
var square = cljs.core.partial.call(null,space_invaders.canvas.square,x__$1,y__$1,(3));
var G__11118 = stage_me;
switch (G__11118) {
case (1):
return square.call(null,(0),(0),color.call(null,new cljs.core.Keyword(null,"white","white",-483998618)));

break;
case (2):
square.call(null,(0),(0),color.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449)));

square.call(null,(-3),(-3),color.call(null,new cljs.core.Keyword(null,"white","white",-483998618)));

square.call(null,(3),(-3),color.call(null,new cljs.core.Keyword(null,"white","white",-483998618)));

square.call(null,(3),(3),color.call(null,new cljs.core.Keyword(null,"white","white",-483998618)));

return square.call(null,(3),(-3),color.call(null,new cljs.core.Keyword(null,"white","white",-483998618)));

break;
case (3):
square.call(null,(0),(0),color.call(null,new cljs.core.Keyword(null,"orange","orange",73816386)));

square.call(null,(-3),(-3),color.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449)));

square.call(null,(3),(-3),color.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449)));

square.call(null,(3),(3),color.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449)));

square.call(null,(3),(-3),color.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449)));

square.call(null,(0),(-3),color.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449)));

square.call(null,(0),(3),color.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449)));

square.call(null,(3),(0),color.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449)));

square.call(null,(-3),(0),color.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449)));

var seq__11119 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9),(-9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(-9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-6),(-6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(-6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-6),(6)], null)], null));
var chunk__11120 = null;
var count__11121 = (0);
var i__11122 = (0);
while(true){
if((i__11122 < count__11121)){
var vec__11129 = cljs.core._nth.call(null,chunk__11120,i__11122);
var x__$2 = cljs.core.nth.call(null,vec__11129,(0),null);
var y__$2 = cljs.core.nth.call(null,vec__11129,(1),null);
square.call(null,x__$2,y__$2,color.call(null,new cljs.core.Keyword(null,"white","white",-483998618)));


var G__11136 = seq__11119;
var G__11137 = chunk__11120;
var G__11138 = count__11121;
var G__11139 = (i__11122 + (1));
seq__11119 = G__11136;
chunk__11120 = G__11137;
count__11121 = G__11138;
i__11122 = G__11139;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__11119);
if(temp__5753__auto__){
var seq__11119__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11119__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__11119__$1);
var G__11140 = cljs.core.chunk_rest.call(null,seq__11119__$1);
var G__11141 = c__4679__auto__;
var G__11142 = cljs.core.count.call(null,c__4679__auto__);
var G__11143 = (0);
seq__11119 = G__11140;
chunk__11120 = G__11141;
count__11121 = G__11142;
i__11122 = G__11143;
continue;
} else {
var vec__11132 = cljs.core.first.call(null,seq__11119__$1);
var x__$2 = cljs.core.nth.call(null,vec__11132,(0),null);
var y__$2 = cljs.core.nth.call(null,vec__11132,(1),null);
square.call(null,x__$2,y__$2,color.call(null,new cljs.core.Keyword(null,"white","white",-483998618)));


var G__11144 = cljs.core.next.call(null,seq__11119__$1);
var G__11145 = null;
var G__11146 = (0);
var G__11147 = (0);
seq__11119 = G__11144;
chunk__11120 = G__11145;
count__11121 = G__11146;
i__11122 = G__11147;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11118)].join('')));

}
});

//# sourceMappingURL=canvas.js.map
