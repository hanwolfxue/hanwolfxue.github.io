import{i as p}from"./mock-api-q8qly4aN.js";import{P as d}from"./index-DHJ-N9Yc.js";import{b9 as e,j as i,a0 as m,E as f,B as C,W as B}from"./antd-BHcOFGwY.js";import{d as n,k as u,G as t,f as F}from"./vue-BR4kA91-.js";import{u as D}from"./index-CGCHIKpc.js";import"./entry/index-BwJ41R5L-1717470460305.js";import"./useContentViewHeight-CbJ2DFmO.js";import"./useWindowSizeFn-CSHZwHVf.js";import"./onMountedOrActivated-Ct_sYMl9.js";const c=n({setup(){let o=0;const a=F(""),{loading:l,run:s}=D(p,{manual:!0,retryCount:3,onError:r=>{i.error(r.message+` count: ${o++}.`)}});return()=>u(B,{title:"错误重试"},{default:()=>[u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[t("通过设置"),u(e.Text,{type:"danger"},{default:()=>[t(" options.retryCount ")]}),t("，指定错误重试次数，则 useRequest 在失败后会进行重试。")]}),u(e.Text,{code:!0},{default:()=>["const { data, run } = useRequest(imitateApi, { retryCount: 3 });"]})]}),u(m,{class:"mt-4"},{default:()=>[u(f,{value:a.value,"onUpdate:value":r=>a.value=r,placeholder:"Please enter username"},null),u(C,{type:"primary",disabled:l.value,onClick:()=>s(a.value,!1)},{default:()=>[l.value?"Loading":"Edit"]})]})]})}}),q=n({setup(){return()=>u(d,{title:"错误重试"},{default:()=>[u(c,null,null)],headerContent:()=>u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[t("通过设置"),u(e.Text,{type:"danger"},{default:()=>[t(" options.retryCount ")]}),t("，指定错误重试次数，则 useRequest 在失败后会进行重试。")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,null,{default:()=>[u("pre",null,[`// useRequestOption
retryCount?: number; // -1, 无限次重试
retryInterval?: number; // 重试时间间隔，单位为毫秒。如果不设置，默认采用简易的指数退避算法`])]})]})]})})}});export{q as default};