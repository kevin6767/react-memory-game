(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),i=c(8),s=c.n(i),o=(c(14),c(2)),d=c(4),u=c(5),l=function(e){var t=e.frontImg,c=e.backImg,n=e.flipped,r=e.onClick,i=n?t:c,s=e.selected?"selected":"";return Object(a.jsx)("div",{className:"card-wrapper",children:Object(a.jsx)("div",{className:"Card",onClick:r,onMouseEnter:function(e){e.target.style.transform="scale(1,1.2)"},onMouseLeave:function(e){e.target.style.transform="scale(1,1)"},children:Object(a.jsx)("img",{src:i,alt:"",className:"".concat(s)})})})},f=function(e){var t=e.count;return Object(a.jsx)("div",{className:"score-holder",children:t<12?"Your score is: ".concat(t):"You won!"})};function m(e){return 2===e.length}var j=function(e){var t=n.useState.apply(void 0,[e.cards]),c=Object(u.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)([]),j=Object(u.a)(s,2),b=j[0],p=j[1],v=Object(n.useState)([]),O=Object(u.a)(v,2),g=O[0],h=O[1],y=Object(n.useState)(0),x=Object(u.a)(y,2),k=x[0],N=x[1],C=function(e){return function(){if(!m(b)&&!function(e,t){return 1===e.length&&e[0].id===t.id}(b,e)){var t=[].concat(Object(d.a)(b),[e]);p(t),function(e){return 2===e.length&&e[0].type===e[1].type}(t)&&(h([].concat(Object(d.a)(g),[t[0].type])),N(k+1)),m(t)&&setTimeout((function(){p([])}),1e3)}}};Object(n.useEffect)((function(){var e=r.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{flipped:b.find((function(t){return t.id===e.id}))||g.includes(e.type)})}));i(e)}),[b]),Object(n.useEffect)((function(){setTimeout((function(){i(function(e,t){var c=t.length-1,a=t.filter((function(t){return!e.includes(t)}));return e.filter((function(e){return e.type!==a[c]}))}(r,g))}),1e3)}),[g]);return Object(a.jsxs)("div",{className:"game-holder",children:[Object(a.jsx)("div",{className:"btn-holder",children:Object(a.jsx)("button",{onClick:function(){i.apply(void 0,[e.cards]),p([]),h([]),N(0)},children:"New Game/Restart"})}),Object(a.jsx)(f,{count:k,cards:r}),Object(a.jsx)("div",{className:"board-container",children:r.length>0?r.map((function(e){return Object(n.createElement)(l,Object(o.a)(Object(o.a)({},e),{},{onClick:C(e),key:e.id}))})):""})]})},b=c.p+"static/media/1.778b7c5b.svg",p=c.p+"static/media/2.598e605c.svg",v=c.p+"static/media/3.5d21c18f.svg",O=c.p+"static/media/4.5a71089c.svg",g=c.p+"static/media/5.e62fef00.svg",h=c.p+"static/media/6.42b66480.svg",y=c.p+"static/media/7.23b125de.svg",x=c.p+"static/media/8.e9c6579d.svg",k=c.p+"static/media/9.3cd72b04.svg",N=c.p+"static/media/10.e0a4cb29.svg",C=c.p+"static/media/11.a71c7fec.svg",w=c.p+"static/media/12.e1d7e435.svg",M=c.p+"static/media/cardPattern.5f2d2fd3.png";function I(){var e=0,t={Bulbasaur:b,Ivysaur:p,Venusaur:v,Charmander:O,Charmeleon:g,Charizard:h,Squirtle:y,Wartortle:x,Blastoise:k,Caterpie:N,Metapod:C,Butterfree:w};return function(e){for(var t=e.length,c=0;c<t;c++){var a=Math.floor(Math.random()*t),n=Object(o.a)({},e[c]),r=Object(o.a)({},e[a]);e[c]=r,e[a]=n}return e}(Object.keys(t).reduce((function(c,a){var n=function(){return{id:e++,type:a,backImg:M,frontImg:t[a],flipped:!1,selected:!1}};return[].concat(Object(d.a)(c),[n(),n()])}),[]))}var S=function(){return Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:"game-container",children:[Object(a.jsx)("h1",{children:"Matching Game! Find two of the same pokemon! "}),Object(a.jsx)(j,{cards:I})]})})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.165d9f52.chunk.js.map