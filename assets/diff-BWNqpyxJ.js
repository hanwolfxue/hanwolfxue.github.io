import{a as s}from"./antd-fbBm7n8h.js";import{r as d}from"./index-C1OJElpm.js";function c(n,f){for(var r=0;r<f.length;r++){const t=f[r];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in n)){const o=Object.getOwnPropertyDescriptor(t,e);o&&Object.defineProperty(n,e,o.get?o:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};(function(n,f){(function(r){r(d())})(function(r){r.defineMode("diff",function(){var t={"+":"positive","-":"negative","@":"meta"};return{token:function(e){var o=e.string.search(/[\t ]+?$/);if(!e.sol()||o===0)return e.skipToEnd(),("error "+(t[e.string.charAt(0)]||"")).replace(/ $/,"");var p=t[e.peek()]||e.skipToEnd();return o===-1?e.skipToEnd():e.pos=o,p}}}),r.defineMIME("text/x-diff","diff")})})();var i=u.exports;const a=s(i),v=c({__proto__:null,default:a},[i]);export{v as d};