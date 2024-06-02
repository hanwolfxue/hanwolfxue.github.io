var w=Object.defineProperty,L=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var C=(e,o,t)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,v=(e,o)=>{for(var t in o||(o={}))R.call(o,t)&&C(e,t,o[t]);if(y)for(var t of y(o))V.call(o,t)&&C(e,t,o[t]);return e},$=(e,o)=>L(e,O(o));import{d as A}from"./vuedraggable.umd-B79WZJRy.js";import B from"./FormNode-rrzctsGM.js";import D from"./FormNodeOperate-yh-ajTPR.js";import{u as H}from"./useFormDesignState-Yhke58jg.js";import{d as j,r as z,c as p,I as q,a7 as n,Z as m,a8 as u,a9 as s,_ as k,a1 as M,B as U,k as l,ac as I,F as E,aa as G,aj as T,ak as W}from"./vue-BR4kA91-.js";import{W as X,X as Z}from"./antd-fbBm7n8h.js";import{_ as J}from"./entry/index-rsXJi5X6-1717311563715.js";import"./index-BthjFfNW.js";import"./formItemConfig-Bwm-MzQW.js";import"./componentMap-C1K32562.js";import"./useFormItem-DwFiYTSW.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DfGcCe0Q.js";import"./index-DgDWXVze.js";import"./index-HDRnz90D.js";import"./useWindowSizeFn-Cc-uvi4I.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Ch7SjqIW.js";import"./download-BxwcALvn.js";import"./base64Conver-bBv-IO2K.js";import"./index-CAUq66SI.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-Ba6thmk8.js";import"./copyTextToClipboard-BNaz5MaW.js";import"./index-Bs9gK_PQ.js";import"./index-o3kLrUfg.js";import"./index-CqWpLFDs.js";const K=j({name:"LayoutItem",components:{FormNode:B,FormNodeOperate:D,draggable:A,Row:X,Col:Z},props:{schema:{type:Object,required:!0},currentItem:{type:Object,required:!0}},emits:["dragStart","handleColAdd","handle-copy","handle-delete"],setup(e){const{formDesignMethods:{handleSetSelectItem:o},formConfig:t}=H(),c=z({}),g=p(()=>{const{colProps:i={}}=e.schema;return i}),h=p(()=>e.schema.columns),d=p(()=>t.value.layout==="horizontal"?"Col":"div");return $(v({},q(c)),{colPropsComputed:g,handleSetSelectItem:o,layoutTag:d,list1:h})}});function Q(e,o,t,c,g,h){const d=n("LayoutItem",!0),i=n("draggable"),f=n("Col"),b=n("Row"),F=n("FormNodeOperate"),S=n("FormNode");return m(),u(f,T(W(e.colPropsComputed)),{default:s(()=>[["Grid"].includes(e.schema.component)?(m(),k("div",{key:0,class:M(["grid-box",{active:e.schema.key===e.currentItem.key}]),onClick:o[2]||(o[2]=U(r=>e.handleSetSelectItem(e.schema),["stop"]))},[l(b,I({class:"grid-row"},e.schema.componentProps),{default:s(()=>[(m(!0),k(E,null,G(e.schema.columns,(r,N)=>(m(),u(f,{class:"grid-col",key:N,span:r.span},{default:s(()=>[l(i,I({class:"list-main draggable-box","component-data":{name:"list",tag:"div",type:"transition-group"},ref_for:!0},{group:"form-draggable",ghostClass:"moving",animation:180,handle:".drag-move"},{"item-key":"key",modelValue:r.children,"onUpdate:modelValue":a=>r.children=a,onStart:a=>e.$emit("dragStart",a,r.children),onAdd:a=>e.$emit("handleColAdd",a,r.children)}),{item:s(({element:a})=>[l(d,{class:"drag-move",schema:a,"current-item":e.currentItem,onHandleCopy:o[0]||(o[0]=P=>e.$emit("handle-copy")),onHandleDelete:o[1]||(o[1]=P=>e.$emit("handle-delete"))},null,8,["schema","current-item"])]),_:2},1040,["modelValue","onUpdate:modelValue","onStart","onAdd"])]),_:2},1032,["span"]))),128))]),_:1},16),l(F,{schema:e.schema,currentItem:e.currentItem},null,8,["schema","currentItem"])],2)):(m(),u(S,{key:e.schema.key,schema:e.schema,"current-item":e.currentItem,onHandleCopy:o[3]||(o[3]=r=>e.$emit("handle-copy")),onHandleDelete:o[4]||(o[4]=r=>e.$emit("handle-delete"))},null,8,["schema","current-item"]))]),_:1},16)}const be=J(K,[["render",Q]]);export{be as default};
