!function(e){var t={};function r(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(l,o,function(t){return e[t]}.bind(null,o));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function r(e,t){if(null==e)return{};var r,l,o=function(e,t){if(null==e)return{};var r,l,o={},x=Object.keys(e);for(l=0;l<x.length;l++)r=x[l],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(e);for(l=0;l<x.length;l++)r=x[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}document.addEventListener("scroll",()=>{const e=window.innerHeight,t=(e-Math.min(document.scrollingElement.scrollTop,e))/e;document.querySelector(".welcome").style.opacity=t*t*t,document.querySelector(".welcome").style.minHeight=`${100*t}vh`,document.querySelector(".welcome").style.top=`-${(100-100*t)/5}vh`},{passive:!0});const l=document.querySelector(".welcome h1"),o=l.textContent,x=["_","\\","/","#","@","$","%","&","#","x"];function i(){return x[s(0,x.length-1)]}let n=0;function f(){l.textContent=i()+i(),n++<6?setTimeout(f,160*function(e,t){return Math.random()*(t-e)+e}(.3,1)):(setTimeout(u,1500*Math.random()/o.length),setTimeout(m,1200))}const p=o.length;let d=0;function u(){const e=function(e,t,r,l,o){return(e-t)/(r-t)*(o-l)+l}(d,0,p-1,.2,.75);if(Math.random()<e?l.textContent=o.substr(0,d-1)+i()+i():(d+=1,l.textContent=o.substr(0,d)),d<o.length){const e=1e3*Math.random()/p;setTimeout(u,e)}else document.querySelector(".main").classList.add("visible"),setTimeout(()=>{document.querySelector(".welcome").classList.add("phase-2"),a(),h=1},400)}function a(){(function(e){const t=w[s(0,w.length-1)],l=t.keyframes,o=r(t,["keyframes"]),x=e.animate(l,o);return new Promise(e=>{x.addEventListener("finish",()=>{e()})})})(l).then(()=>{setTimeout(a,3500*Math.random())})}function c(e,t){const r=document.body.clientWidth-20;if(t>r){const l=128*(r/t);e.style.fontSize=`${l}px`}}l.style.opacity="0",async function(){await function(e,t){let r;const l=new Promise(e=>{r=setTimeout(()=>{console.warn("promise timeouted"),e()},t)});return Promise.race([e,l]).then(e=>(clearTimeout(r),e))}(new Promise(e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e,{passive:!0,once:!0}):e()}).then(()=>(function(){const e=Array.from(document.head.querySelectorAll("link[rel=stylesheet]")).map(e=>new Promise(t=>{let r;try{r=e.sheet.cssRules.length>0}catch(e){r=!1}r?t(e.sheet):e.addEventListener("load",()=>{t(e.sheet)},{passive:!0,once:!0})}));return Promise.all(e)})()).then(()=>document.fonts.load(function(e){const t=getComputedStyle(e),r=t.getPropertyValue("font");return r||`${t.getPropertyValue("font-variant")} ${t.getPropertyValue("font-weight")} ${t.getPropertyValue("font-size")} ${t.getPropertyValue("font-family")}`}(l),l.textContent)).catch(e=>console.error(e)),1e3);const e=l.clientWidth;c(l,e),window.addEventListener("resize",()=>{c(l,e)},{passive:!0}),l.textContent="",l.style.opacity="",setTimeout(f,1400*Math.random()/o.length)}();let h=0;const m=()=>{const e=s(0,d-1);l.textContent=b(l.textContent,e,i()),setTimeout(()=>{l.textContent=b(l.textContent,e,o.charAt(e))},500*Math.random()),setTimeout(m,Math.random()*(0===h?1e3:2500))};function s(e,t){return Math.floor(Math.random()*(t-e+1))+e}function b(e,t,r){return e.substr(0,t)+r+e.substr(t+r.length)}const w=[{keyframes:[{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)",offset:0},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)",offset:.2},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)",offset:.25},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)",offset:.5},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)",offset:.55},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)",offset:.75},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0px)",offset:.8},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0px)",offset:1},{textShadow:"none",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 7px 0 #0c33f5, -0.8px 0 0 lime"},{textShadow:"1.8px -5px 0 #0c33f5, -0.8px 0 0 lime"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"none",filter:"blur(0)"}],duration:100},{keyframes:[{textShadow:"45px 0 0 #0c33f5, -45px 0 0 lime",filter:"blur(0)"},{textShadow:"0 0 0 #0c33f5, 0 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0.5px)"},{textShadow:"-3px -10px 0 red, 3px 0 0 #0c33f5",filter:"blur(0.5px)"},{textShadow:"-3px 5px 0 red, 3px 0 0 #0c33f5",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"30px 0 0 red, -30px 0 0 lime",filter:"blur(0)"},{textShadow:"0 0 0 red, 0 0 0 lime",filter:"blur(0)"}],duration:1e3},{keyframes:[{textShadow:"1px 0 0 red, -1px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 #0c33f5",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"50px 0 0 red, -50px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"0 0 0 red, 0 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"60px 0 0 lime, -60px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"0 0 0 lime, 0 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 #0c33f5, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 #0c33f5, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 #0c33f5, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 #0c33f5, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 #0c33f5, 3px 0 0 lime",filter:"blur(0)"}],duration:1500}]}]);