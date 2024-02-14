var N=(o,i,e)=>{if(!i.has(o))throw TypeError("Cannot "+e)};var a=(o,i,e)=>(N(o,i,"read from private field"),e?e.call(o):i.get(o)),L=(o,i,e)=>{if(i.has(o))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(o):i.set(o,e)},b=(o,i,e,r)=>(N(o,i,"write to private field"),r?r.call(o,e):i.set(o,e),e);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function W(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var O={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(o){(function(i,e){o.exports?o.exports=e():i.Toastify=e()})(P,function(i){var e=function(t){return new e.lib.init(t)},r="1.12.0";e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:r,constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=t.duration===0?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity=t.gravity==="bottom"?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=t.stopOnFocus===void 0?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=t.escapeMarkup!==void 0?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var l in this.options.style)t.style[l]=this.options.style[l];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,this.options.avatar!==""){var y=document.createElement("img");y.src=this.options.avatar,y.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?t.appendChild(y):t.insertAdjacentElement("afterbegin",y)}if(this.options.close===!0){var f=document.createElement("button");f.type="button",f.setAttribute("aria-label","Close"),f.className="toast-close",f.innerHTML="&#10006;",f.addEventListener("click",(function(C){C.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?t.insertAdjacentElement("afterbegin",f):t.appendChild(f)}if(this.options.stopOnFocus&&this.options.duration>0){var c=this;t.addEventListener("mouseover",function(C){window.clearTimeout(t.timeOutValue)}),t.addEventListener("mouseleave",function(){t.timeOutValue=window.setTimeout(function(){c.removeElement(t)},c.options.duration)})}if(typeof this.options.destination<"u"&&t.addEventListener("click",(function(C){C.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&t.addEventListener("click",(function(C){C.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var v=n("x",this.options),w=n("y",this.options),T=this.options.position=="left"?v:"-"+v,M=this.options.gravity=="toastify-top"?w:"-"+w;t.style.transform="translate("+T+","+M+")"}return t},showToast:function(){this.toastElement=this.buildToast();var t;if(typeof this.options.selector=="string"?t=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?t=this.options.selector:t=document.body,!t)throw"Root element is not defined";var l=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,l),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}).bind(this),400)}},e.reposition=function(){for(var t={top:15,bottom:15},l={top:15,bottom:15},y={top:15,bottom:15},f=document.getElementsByClassName("toastify"),u,c=0;c<f.length;c++){s(f[c],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var v=f[c].offsetHeight;u=u.substr(9,u.length-1);var w=15,T=window.innerWidth>0?window.innerWidth:screen.width;T<=360?(f[c].style[u]=y[u]+"px",y[u]+=v+w):s(f[c],"toastify-left")===!0?(f[c].style[u]=t[u]+"px",t[u]+=v+w):(f[c].style[u]=l[u]+"px",l[u]+=v+w)}return this};function n(t,l){return l.offset[t]?isNaN(l.offset[t])?l.offset[t]:l.offset[t]+"px":"0px"}function s(t,l){return!t||typeof l!="string"?!1:!!(t.className&&t.className.trim().split(/\s+/gi).indexOf(l)>-1)}return e.lib.init.prototype=e.lib,e})})(O);var A=O.exports;const k=W(A);var h,d,p,E;class x{constructor(i=3){L(this,h,void 0);L(this,d,void 0);L(this,p,void 0);L(this,E,void 0);b(this,h,new Array(i)),b(this,d,i);for(let e=0;e<a(this,d);e++)a(this,h)[e]=new Array(a(this,d));b(this,p,"X")}imprimir(i){let e=document.getElementById(i);b(this,E,i),e.innerHTML="";for(let r=0;r<a(this,d);r++)for(let n=0;n<a(this,d);n++){let s=document.createElement("div");s.dataset.fila=r,s.dataset.columna=n,s.dataset.libre="",a(this,h)[r][n]&&(s.textContent(a(this,h)[r][n]),s.dataset.libre=a(this,h)[r][n]),e.appendChild(s),s.addEventListener("click",t=>{let l=t.currentTarget;l.dataset.libre===""&&(l.textContent=a(this,p),this.setCasilla(l.dataset.fila,l.dataset.columna,a(this,p)),l.dataset.libre=a(this,p),this.comprobarResultados(),this.toogleTurno())})}e.style.gridTemplateColumns=`repeat(${a(this,d)}, 1fr)`}isFree(i,e){return a(this,h)[i][e]===void 0}setCasilla(i,e,r){return this.isFree(i,e)?(a(this,h)[i][e]=r,!0):!1}getCasilla(i,e){return a(this,h)[i][e]}toogleTurno(){a(this,p)==="X"?b(this,p,"O"):b(this,p,"X")}comprobarResultados(){let i,e,r=!1;for(i=0;i<a(this,d)&&!r;i++){let s=0;for(e=0;e<a(this,d);e++)e!==0&&this.getCasilla(i,e)===this.getCasilla(i,e-1)&&this.getCasilla(i,e)!==void 0&&s++;s===a(this,d)-1&&(console.log("Linea"),r=!0)}for(e=0;e<a(this,d)&&!r;e++){let s=0;for(i=0;i<a(this,d);i++)i!==0&&this.getCasilla(i,e)===this.getCasilla(i-1,e)&&this.getCasilla(i,e)!==void 0&&s++;s===a(this,d)-1&&(console.log("Columna"),r=!0)}let n=0;for(let s=0;s<a(this,d);s++)s!==0&&this.getCasilla(s,s)===this.getCasilla(s-1,s-1)&&this.getCasilla(s,s)!==void 0&&n++;n===a(this,d)-1&&(console.log("Diagonal"),r=!0),r&&(k({text:`Ha ganado el jugador ${a(this,p)}`,newWindow:!0,close:!0,gravity:"top",position:"center",stopOnFocus:!0,style:{background:"blue"},onClick:function(){}}).showToast(),document.querySelectorAll('div[data-libre=""]').forEach(t=>{t.dataset.libre="-"}))}get dimension(){return a(this,d)}get elementID(){return a(this,E)}}h=new WeakMap,d=new WeakMap,p=new WeakMap,E=new WeakMap;const B=document.getElementById("createTable"),m=document.getElementById("dimension"),D=document.getElementById("resetGame"),S=document.getElementById("clearGame"),F=document.querySelector(".preGame"),I=document.querySelector(".inGame");let g;B.addEventListener("click",o=>{if(!m.value)return k({text:"Debe indicar una dimensión válida",duration:3e3,newWindow:!1,close:!0,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"red"},onClick:function(){}}).showToast(),m.classList.add("error"),m.focus(),!1;if(isNaN(m.value))return k({text:"Debe introducir un número válido",duration:3e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"red"},onClick:function(){}}).showToast(),m.classList.add("error"),m.focus(),!1;g=new x(parseInt(m.value)),g.imprimir("tablero"),F.classList.toggle("hide"),I.classList.toggle("hide")});m.addEventListener("keydown",()=>{m.classList.remove("error")});S.addEventListener("click",()=>{let o=g.dimension;g=null,g=new x(o),g.imprimir("tablero")});D.addEventListener("click",o=>{document.getElementById(g.elementID).innerHTML="",g=null,F.classList.toggle("hide"),I.classList.toggle("hide"),m.value="",m.focus()});