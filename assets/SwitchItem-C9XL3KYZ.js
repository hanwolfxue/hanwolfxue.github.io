import{f as c,h as d,_ as l}from"./entry/index-BEncmqB6-1717590836513.js";import{b as m}from"./index-BmLHjRLD.js";import{d as p,c as h,Z as u,_ as f,$ as C,a0 as g,k as b,ac as k,u as t,a1 as _}from"./vue-gN4NnATS.js";import{at as y}from"./antd-B_Joh_oh.js";import"./index-ClZhF0uZ.js";import"./useContentViewHeight-QGgUIzf4.js";import"./useWindowSizeFn-IxPVMp8C.js";import"./useSortable-DibPM8bu.js";import"./index-Bez3RgwJ.js";import"./lock-CtHoh3Uu.js";const v=p({name:"SwitchItem",__name:"SwitchItem",props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(a){const e=a,{prefixCls:o}=c("setting-switch-item"),{t:n}=d(),i=h(()=>e.def?{checked:e.def}:{}),r=s=>{e.event&&m(e.event,s)};return(s,B)=>(u(),f("div",{class:_(t(o))},[C("span",null,g(a.title),1),b(t(y),k(i.value,{onChange:r,disabled:a.disabled,checkedChildren:t(n)("layout.setting.on"),unCheckedChildren:t(n)("layout.setting.off")}),null,16,["disabled","checkedChildren","unCheckedChildren"])],2))}}),P=l(v,[["__scopeId","data-v-b47b0939"]]);export{P as default};