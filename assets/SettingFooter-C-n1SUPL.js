import{b0 as k,i as x,bq as h,u as M,aH as B,j as T,bw as p,bC as j,bD as v,bE as w,e as A,_ as D}from"./entry/index-B0nMuAdn-1717508002020.js";import{c as E}from"./copyTextToClipboard-6Z3acr_D.js";import{bE as F,aS as d}from"./antd-B_Joh_oh.js";import{d as N,a7 as O,Z as P,_ as R,k as o,a9 as n,u as e,G as c,a0 as l,a1 as G}from"./vue-gN4NnATS.js";const I=N({name:"SettingFooter",__name:"SettingFooter",setup(V){const g=k(),{prefixCls:m}=x("setting-footer"),{t}=T(),{createSuccessModal:S,createMessage:i}=A(),f=h(),_=M(),a=B();function y(){E(JSON.stringify(e(a.getProjectConfig),null,2),null).then(()=>{S({title:t("layout.setting.operatingTitle"),content:t("layout.setting.operatingContent")})})}function C(){try{a.setProjectConfig(p);const{colorWeak:s,grayMode:u}=p;j(),v(s),w(u),i.success(t("layout.setting.resetSuccess"))}catch(s){i.error(s)}}function b(){localStorage.clear(),a.resetAllState(),g.resetState(),f.resetState(),_.resetState(),location.reload()}return(s,u)=>{const r=O("a-button");return P(),R("div",{class:G(e(m))},[o(r,{type:"primary",block:"",onClick:y},{default:n(()=>[o(e(F),{class:"mr-2"}),c(" "+l(e(t)("layout.setting.copyBtn")),1)]),_:1}),o(r,{color:"warning",block:"",onClick:C,class:"my-3"},{default:n(()=>[o(e(d),{class:"mr-2"}),c(" "+l(e(t)("common.resetText")),1)]),_:1}),o(r,{color:"error",block:"",onClick:b},{default:n(()=>[o(e(d),{class:"mr-2"}),c(" "+l(e(t)("layout.setting.clearBtn")),1)]),_:1})],2)}}}),J=D(I,[["__scopeId","data-v-e923ed59"]]);export{J as default};
