import{P as h}from"./index-DuPTCtvv.js";import{a as v,_ as y}from"./entry/index-rsXJi5X6-1717311563715.js";import{d as C,f as B,a7 as D,Z as a,a8 as _,a9 as r,_ as o,F as m,aa as u,ag as d,k as b,$ as f,a0 as w,u as P}from"./vue-BR4kA91-.js";import"./useContentViewHeight-DgW401FW.js";import"./useWindowSizeFn-Cc-uvi4I.js";import"./antd-fbBm7n8h.js";import"./onMountedOrActivated-Ct_sYMl9.js";const F=["src"],N=["href","onClick"],S=C({__name:"index",setup(T){const k="http://1.94.182.143:8000/",s=B([]);(()=>{v.get(`${k}api/bookmarks`).then(e=>{s.value=e.data})})();const g=(e,n)=>{e.preventDefault(),window.open(n,"_blank")};return(e,n)=>{const l=D("a-card");return a(),_(P(h),{title:"书签栏"},{default:r(()=>[(a(!0),o(m,null,u(s.value,(c,p)=>(a(),o("div",{key:p,style:d({marginTop:p!==0?"16px":"0px"})},[b(l,{title:c.name},{default:r(()=>[(a(!0),o(m,null,u(c.urls,(t,i)=>(a(),_(l,{key:i,style:d({marginTop:i!==0?"16px":"0px"})},{default:r(()=>[f("img",{src:t.favicon,alt:"链接",class:"favicon"},null,8,F),f("a",{href:t.url,onClick:x=>g(x,t.url)},w(t.name),9,N)]),_:2},1032,["style"]))),128))]),_:2},1032,["title"])],4))),128))]),_:1})}}}),Z=y(S,[["__scopeId","data-v-db15a218"]]);export{Z as default};