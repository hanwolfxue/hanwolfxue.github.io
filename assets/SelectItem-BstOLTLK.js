import{h as i,_ as r}from"./entry/index-rsXJi5X6-1717311563715.js";import{b as c}from"./index-DoNlVjVv.js";import{d as m,c as p,Z as d,_ as u,$ as f,a0 as g,k as b,ac as y,u as a,a1 as S}from"./vue-BR4kA91-.js";import{Y as v}from"./antd-fbBm7n8h.js";import"./index-CqbpF7U_.js";import"./useContentViewHeight-DgW401FW.js";import"./useWindowSizeFn-Cc-uvi4I.js";import"./useSortable-Ch7SjqIW.js";import"./index-D4D8iyaU.js";import"./lock-oxY1SYt4.js";const V=m({name:"SelectItem",__name:"SelectItem",props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(t){const e=t,{prefixCls:s}=i("setting-select-item"),o=p(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}),l=n=>{e.event&&c(e.event,n)};return(n,_)=>(d(),u("div",{class:S(a(s))},[f("span",null,g(t.title),1),b(a(v),y(o.value,{class:`${a(s)}-select`,onChange:l,disabled:t.disabled,size:"small",options:t.options}),null,16,["class","disabled","options"])],2))}}),A=r(V,[["__scopeId","data-v-cf1163e4"]]);export{A as default};