var D=Object.defineProperty;var C=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(e,n,o)=>n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,m=(e,n)=>{for(var o in n||(n={}))M.call(n,o)&&w(e,o,n[o]);if(C)for(var o of C(n))P.call(n,o)&&w(e,o,n[o]);return e};import{y as T,M as $,p as t,N as b,O as G,i as V}from"./entry/index-rsXJi5X6-1717311563715.js";import{a4 as Y,X as H}from"./antd-fbBm7n8h.js";import{d as I,c as p,Z as c,a8 as r,a9 as l,aj as L,ac as f,u as a,ab as i,$ as q,k as j,ae as d,G as y,a0 as O,ag as E}from"./vue-BR4kA91-.js";const S=Symbol();function U(e){return T(e,S)}function J(){return $(S)}const _=I({name:"BasicFormAction",__name:"FormAction",props:{showActionButtonGroup:t.bool.def(!0),showResetButton:t.bool.def(!0),showSubmitButton:t.bool.def(!0),showAdvancedButton:t.bool.def(!0),resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:t.number.def(6),isAdvanced:t.bool,hideAdvanceBtn:t.bool},emits:["toggle-advanced"],setup(e,{emit:n}){const o=e,k=n,{t:u}=V(),{resetAction:x,submitAction:F}=J(),B=p(()=>{const{showAdvancedButton:s,actionSpan:g,actionColOptions:R}=o,v=24-g,z=s?{span:v<6?24:v}:{};return m(m({style:{textAlign:"right"},span:s?6:4},z),R)}),A=p(()=>Object.assign({text:u("common.resetText")},o.resetButtonOptions)),h=p(()=>Object.assign({text:u("common.queryText")},o.submitButtonOptions));function N(){k("toggle-advanced")}return(s,g)=>e.showActionButtonGroup?(c(),r(a(H),L(f({key:0},B.value)),{default:l(()=>[q("div",{style:E([{width:"100%"},{textAlign:B.value.style.textAlign}])},[j(a(Y).Item,null,{default:l(()=>[d(s.$slots,"resetBefore"),e.showResetButton?(c(),r(a(b),f({key:0,type:"default",class:"mr-2"},A.value,{onClick:a(x)}),{default:l(()=>[y(O(A.value.text),1)]),_:1},16,["onClick"])):i("",!0),d(s.$slots,"submitBefore"),e.showSubmitButton?(c(),r(a(b),f({key:1,type:"primary",class:"mr-2"},h.value,{onClick:a(F)}),{default:l(()=>[y(O(h.value.text),1)]),_:1},16,["onClick"])):i("",!0),d(s.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(c(),r(a(b),{key:2,type:"link",size:"small",onClick:N},{default:l(()=>[y(O(e.isAdvanced?a(u)("component.form.putAway"):a(u)("component.form.unfold"))+" ",1),j(a(G),{class:"ml-1",expand:!e.isAdvanced,up:""},null,8,["expand"])]),_:1})):i("",!0),d(s.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):i("",!0)}}),tt={model:{type:Object,default:()=>({})},labelWidth:{type:[Number,String],default:0},fieldMapToTime:{type:Array,default:()=>[]},compact:t.bool,schemas:{type:Array,default:()=>[]},mergeDynamicData:{type:Object,default:null},baseRowStyle:{type:Object},baseColProps:{type:Object},autoSetPlaceHolder:t.bool.def(!0),autoSubmitOnEnter:t.bool.def(!1),submitOnReset:t.bool,submitOnChange:t.bool,size:t.oneOf(["default","small","large"]).def("default"),disabled:t.bool,emptySpan:{type:[Number,Object],default:0},showAdvancedButton:t.bool,transformDateFunc:{type:Function,default:e=>{var n,o;return(o=(n=e==null?void 0:e.format)==null?void 0:n.call(e,"YYYY-MM-DD HH:mm:ss"))!=null?o:e}},rulesMessageJoinLabel:t.bool.def(!0),autoAdvancedLine:t.number.def(3),alwaysShowLines:t.number.def(1),showActionButtonGroup:t.bool.def(!0),actionColOptions:Object,showResetButton:t.bool.def(!0),autoFocusFirstItem:t.bool,resetButtonOptions:Object,showSubmitButton:t.bool.def(!0),submitButtonOptions:Object,resetFunc:Function,submitFunc:Function,hideRequiredMark:t.bool,labelCol:Object,layout:t.oneOf(["horizontal","vertical","inline"]).def("horizontal"),tableAction:{type:Object},wrapperCol:Object,colon:t.bool,labelAlign:t.string,rowProps:Object};export{_,tt as b,U as c};
