import{d as u}from"./vuedraggable.umd-B79WZJRy.js";import{B as f,h as g,_ as h}from"./entry/index-rsXJi5X6-1717311563715.js";import{d as C,r as I,a7 as r,Z as _,_ as $,k as d,a9 as b,$ as v,G as k,a0 as y,ac as A,a1 as S}from"./vue-BR4kA91-.js";import"./antd-fbBm7n8h.js";const B=C({name:"CollapseItem",components:{draggable:u,Icon:f},props:{list:{type:[Array],default:()=>[]},handleListPush:{type:Function,default:null}},setup(e,{emit:o}){const{prefixCls:s}=g("form-design-collapse-item"),n=I({});return{prefixCls:s,state:n,handleStart:(t,a)=>{o("start",a[t.oldIndex].component)},handleAdd:t=>{},cloneItem:t=>e.handleListPush(t)}}}),D=["onDragstart","onClick"];function N(e,o,s,n,i,c){const l=r("Icon"),t=r("draggable");return _(),$("div",{class:S(e.prefixCls)},[d(t,A({tag:"ul","model-value":e.list},{group:{name:"form-draggable",pull:"clone",put:!1},sort:!1,clone:e.cloneItem,animation:180,ghostClass:"moving"},{"item-key":"type",onStart:o[0]||(o[0]=a=>e.handleStart(a,e.list)),onAdd:e.handleAdd}),{item:b(({element:a,index:p})=>[v("li",{class:"bs-box text-ellipsis",onDragstart:m=>e.$emit("add-attrs",e.list,p),onClick:m=>e.$emit("handle-list-push",a)},[d(l,{icon:a.icon},null,8,["icon"]),k(" "+y(a.label),1)],40,D)]),_:1},16,["model-value","onAdd"])],2)}const x=h(B,[["render",N],["__scopeId","data-v-9ac1f6bb"]]);export{x as default};
