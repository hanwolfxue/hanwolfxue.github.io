var k=(C,u,s)=>new Promise((r,l)=>{var d=t=>{try{i(s.next(t))}catch(n){l(n)}},m=t=>{try{i(s.throw(t))}catch(n){l(n)}},i=t=>t.done?r(t.value):Promise.resolve(t.value).then(d,m);i((s=s.apply(C,u)).next())});import{P as x}from"./index-DHJ-N9Yc.js";import{aN as v}from"./entry/index-BwJ41R5L-1717470460305.js";import{u as b}from"./index-CGCHIKpc.js";import{X as g,Y as y,W as w,a0 as N,j as _}from"./antd-BHcOFGwY.js";import{d as R,a7 as T,Z as $,a8 as B,a9 as e,k as a,u as o,G as f,$ as h}from"./vue-BR4kA91-.js";import"./useContentViewHeight-CbJ2DFmO.js";import"./useWindowSizeFn-CSHZwHVf.js";import"./onMountedOrActivated-Ct_sYMl9.js";const E=h("div",{class:"mt-4"},"打开浏览器的 network 面板，可以看到发出了六次请求",-1),P=h("div",{class:"mt-4"},"错误重试，retryInterval 如果不设置，默认采用简易的指数退避算法，取 1000 * 2 ** retryCount，也就是第一次重试等待 2s，第二次重试等待 4s，以此类推，如果大于 30s，则取 30s ",-1),X=R({__name:"index",setup(C){const u=()=>k(this,null,function*(){yield v()});function s(){return new Promise((n,c)=>{setTimeout(()=>{c(`TimeError: ${Date.now()}`)},1300)})}let r=0;const{loading:l,run:d,cancel:m}=b(s,{manual:!0,retryCount:5,onError(n){r===0&&(_.error("发现错误"),r++);const c=Date.now();_.error(`第 ${r++} 次重试, Time:${c}`)}}),i=()=>{r=0,d()},t=()=>{r=0,m(),_.info("已取消")};return(n,c)=>{const p=T("a-button");return $(),B(o(x),{title:"错误重试"},{default:e(()=>[a(o(g),{gutter:16},{default:e(()=>[a(o(y),{span:8},{default:e(()=>[a(o(w),{title:"Axios 错误重试"},{default:e(()=>[a(p,{onClick:u,type:"primary"},{default:e(()=>[f(" 点击会重新发起请求5次 ")]),_:1}),E]),_:1})]),_:1}),a(o(y),{span:8},{default:e(()=>[a(o(w),{title:"hooks 错误重试"},{default:e(()=>[a(o(N),null,{default:e(()=>[a(p,{onClick:i,type:"primary",disabled:o(l)},{default:e(()=>[f(" 使用 hooks 发起重试 ")]),_:1},8,["disabled"]),a(p,{onClick:t},{default:e(()=>[f("取消")]),_:1})]),_:1}),P]),_:1})]),_:1})]),_:1})]),_:1})}}});export{X as default};