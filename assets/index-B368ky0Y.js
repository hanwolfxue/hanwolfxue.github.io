import{P as le}from"./index-DHJ-N9Yc.js";import{a as $,_ as se}from"./entry/index-BwJ41R5L-1717470460305.js";import{h as re,U as R,V as ue}from"./antd-BHcOFGwY.js";import{d as I,f as i,r as ce,a7 as s,Z as d,a8 as V,a9 as n,$ as f,k as t,G as k,_ as w,F as z,aa as A,ag as ie,ab as G,a0 as de,u as q}from"./vue-BR4kA91-.js";import"./useContentViewHeight-CbJ2DFmO.js";import"./useWindowSizeFn-CSHZwHVf.js";import"./onMountedOrActivated-Ct_sYMl9.js";const pe={style:{display:"flex","justify-content":"center"}},me=["src"],fe=["href","onClick"],_e={style:{"margin-top":"5px"}},ve=["onClick"],ge=["onClick"],ye=I({__name:"index",setup(Ne){const[C,H]=re.useNotification(),L=I({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),_=i(""),v=i([]),B=i([]),o=ce({id:"",categoryName:"",url:"",urlName:"",favicon:""}),O=i(),p=i(),U=i([]),W={categoryName:[{required:!0,message:"请选择收藏夹"}],url:[{required:!0,message:"请输入链接"}],urlName:[{required:!0,message:"请输入链接名称"}],favicon:[{required:!1,message:"请输入favicon地址"}]},g=i(!1),D=()=>{$.get(`${S}api/bookmarks`).then(a=>{const e=R(a,"data");e.success?(v.value=e.data,U.value=e.data.map(r=>r.categoryName),B.value=JSON.parse(JSON.stringify(e.data))):C.info({message:e.code,description:e.message,placement:"topRight"})})},Z=a=>{a.preventDefault(),p.value&&(U.value.push(p.value),p.value="",setTimeout(()=>{var e;(e=O.value)==null||e.focus()},0))},K=(a,e)=>{a.preventDefault(),$.delete(`${S}api/bookmarks/${e.id}`).then(r=>{const u=R(r,"data");u.success?D():C.info({message:u.code,description:u.message,placement:"topRight"})})},M=(a,e,r)=>{a.preventDefault(),J({id:r.id,categoryName:e.categoryName,urlName:r.name,url:r.url,favicon:r.favicon})},J=a=>{o.id=a==null?void 0:a.id,o.categoryName=a==null?void 0:a.categoryName,o.urlName=a==null?void 0:a.urlName,o.url=a==null?void 0:a.url,o.favicon=a==null?void 0:a.favicon,g.value=!0},T=()=>{g.value=!1},Q=()=>{g.value=!1,$[o.id?"put":"post"](`${S}api/bookmarks/${o.id?o.id:""}`,o).then(a=>{const e=R(a,"data");e.success?D():C.info({message:e.code,description:e.message,placement:"topRight"})})},S="https://1.94.182.143:8000/";D();const X=(a,e)=>{a.preventDefault(),window.open(e,"_blank")},P=()=>{ue(()=>{_.value?v.value.forEach(e=>{e.urls=e.urls.filter(r=>r.name.includes(_.value))}):v.value=JSON.parse(JSON.stringify(B.value))},500)()};return(a,e)=>{const r=s("a-input-search"),u=s("a-button"),Y=s("a-card-grid"),b=s("a-card"),j=s("a-divider"),y=s("a-input"),ee=s("plus-outlined"),E=s("a-space"),ae=s("a-select"),N=s("a-form-item"),h=s("a-col"),F=s("a-row"),te=s("a-form"),ne=s("a-drawer");return d(),V(q(le),{title:"工作书签"},{default:n(()=>[f("div",pe,[t(r,{value:_.value,"onUpdate:value":e[0]||(e[0]=l=>_.value=l),placeholder:"请输入网站名称",style:{width:"600px","margin-bottom":"16px"},"enter-button":"",onSearch:P,onChange:P},null,8,["value"]),t(u,{type:"primary",style:{"margin-left":"5px"},onClick:J},{default:n(()=>[k("新增")]),_:1})]),(d(!0),w(z,null,A(v.value,(l,x)=>(d(),w("div",{key:x,style:ie({marginTop:x!==0?"16px":"0px"})},[l.urls.length?(d(),V(b,{key:0,style:{cursor:"pointer"},title:l.categoryName},{default:n(()=>[(d(!0),w(z,null,A(l.urls,(c,oe)=>(d(),V(Y,{key:oe,style:{width:"10%","text-align":"center"}},{default:n(()=>[c.favicon?(d(),w("img",{key:0,src:c.favicon,alt:"链接",class:"favicon"},null,8,me)):G("",!0),f("a",{href:c.url,onClick:m=>X(m,c.url)},de(c.name),9,fe),f("div",_e,[f("a",{style:{padding:"0 5px"},onClick:m=>M(m,l,c)},"编辑",8,ve),f("a",{style:{padding:"0 5px"},onClick:m=>K(m,c)},"删除",8,ge)])]),_:2},1024))),128))]),_:2},1032,["title"])):G("",!0)],4))),128)),t(ne,{title:"新增书签",width:720,open:g.value,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:T},{extra:n(()=>[t(E,null,{default:n(()=>[t(u,{onClick:T},{default:n(()=>[k("取消")]),_:1}),t(u,{type:"primary",onClick:Q},{default:n(()=>[k("保存")]),_:1})]),_:1})]),default:n(()=>[t(te,{model:o,rules:W,layout:"vertical"},{default:n(()=>[t(F,{gutter:16},{default:n(()=>[t(h,{span:12},{default:n(()=>[t(N,{label:"收藏夹",name:"name"},{default:n(()=>[t(ae,{value:o.categoryName,"onUpdate:value":e[2]||(e[2]=l=>o.categoryName=l),placeholder:"请选择收藏夹",options:U.value.map(l=>({value:l}))},{dropdownRender:n(({menuNode:l})=>[t(q(L),{vnodes:l},null,8,["vnodes"]),t(j,{style:{margin:"4px 0"}}),t(E,{style:{padding:"4px 8px"}},{default:n(()=>[t(y,{ref_key:"inputRef",ref:O,value:p.value,"onUpdate:value":e[1]||(e[1]=x=>p.value=x),placeholder:"请输入收藏夹名"},null,8,["value"]),t(u,{type:"text",onClick:Z},{icon:n(()=>[t(ee)]),default:n(()=>[k(" 新增 ")]),_:1})]),_:1})]),_:1},8,["value","options"])]),_:1})]),_:1}),t(h,{span:12},{default:n(()=>[t(N,{label:"链接名称",name:"urlName"},{default:n(()=>[t(y,{value:o.urlName,"onUpdate:value":e[3]||(e[3]=l=>o.urlName=l),style:{width:"100%"},placeholder:"请输入链接名称"},null,8,["value"])]),_:1})]),_:1})]),_:1}),t(F,{gutter:16},{default:n(()=>[t(h,{span:12},{default:n(()=>[t(N,{label:"链接",name:"url"},{default:n(()=>[t(y,{value:o.url,"onUpdate:value":e[4]||(e[4]=l=>o.url=l),style:{width:"100%"},placeholder:"请输入链接地址"},null,8,["value"])]),_:1})]),_:1}),t(h,{span:12},{default:n(()=>[t(N,{label:"favicon",name:"favicon"},{default:n(()=>[t(y,{value:o.favicon,"onUpdate:value":e[5]||(e[5]=l=>o.favicon=l),style:{width:"100%"},placeholder:"请输入favicon地址"},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["open"]),t(q(H))]),_:1})}}}),Se=se(ye,[["__scopeId","data-v-1e48339e"]]);export{Se as default};