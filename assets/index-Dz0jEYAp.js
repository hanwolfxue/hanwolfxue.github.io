import{C as m,c as f}from"./entry/index-BwJ41R5L-1717470460305.js";import{P as d}from"./index-DHJ-N9Yc.js";import{c as _}from"./copyTextToClipboard-BxfkKzRs.js";import{d as C,f as v,a7 as r,Z as x,a8 as y,a9 as a,k as o,u as n,$ as g,G as h}from"./vue-BR4kA91-.js";import"./antd-BHcOFGwY.js";import"./useContentViewHeight-CbJ2DFmO.js";import"./useWindowSizeFn-CSHZwHVf.js";import"./onMountedOrActivated-Ct_sYMl9.js";const k={class:"flex justify-center"},E=C({__name:"index",setup(w){const e=v(""),{createMessage:p}=f();function l(){const t=n(e);if(!t){p.warning("请输入要拷贝的内容！");return}_(t)}return(t,s)=>{const u=r("a-input"),i=r("a-button");return x(),y(n(d),{title:"文本复制示例"},{default:a(()=>[o(n(m),{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:a(()=>[g("div",k,[o(u,{placeholder:"请输入",value:e.value,"onUpdate:value":s[0]||(s[0]=c=>e.value=c)},null,8,["value"]),o(i,{type:"primary",onClick:l},{default:a(()=>[h(" Copy ")]),_:1})])]),_:1})]),_:1})}}});export{E as default};