var g=(C,d,l)=>new Promise((y,u)=>{var m=a=>{try{i(l.next(a))}catch(s){u(s)}},_=a=>{try{i(l.throw(a))}catch(s){u(s)}},i=a=>a.done?y(a.value):Promise.resolve(a.value).then(m,_);i((l=l.apply(C,d)).next())});import{_ as b}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-DJCu0rCh.js";import{X as S,a$ as h,aG as A,m as $,a_ as w,_ as D}from"./entry/index-rsXJi5X6-1717311563715.js";import{A as v}from"./index-B5h0p-Ye.js";import{P as N}from"./index-DuPTCtvv.js";import{d as T,c as V,a7 as G,q as M,Z as c,a8 as n,a9 as e,k as t,$ as P,G as o,a0 as E,u as r,_ as F,ab as f,m as x,F as I}from"./vue-BR4kA91-.js";import{a6 as p,aG as U}from"./antd-fbBm7n8h.js";import"./useContentViewHeight-DgW401FW.js";import"./useWindowSizeFn-Cc-uvi4I.js";import"./onMountedOrActivated-Ct_sYMl9.js";const j=T({__name:"Btn",setup(C){const{hasPermission:d}=S(),l=h(),y=A(),u=$(),m=V(()=>y.getProjectConfig.permissionMode===w.BACK);function _(i){return g(this,null,function*(){const a="fakeToken"+i;u.setToken(a),u.getUserInfoAction(),l.changePermissionCode()})}return(i,a)=>{const s=G("a-button"),k=M("auth");return c(),n(r(N),{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:e(()=>[t(b),P("p",null,[o(" 当前拥有的code列表: "),P("a",null,E(r(l).getPermCodeList),1)]),t(r(p)),t(r(U),{class:"mt-4",type:"info",message:"点击后请查看按钮变化(必须处于后台权限模式才可测试此页面所展示的功能)","show-icon":""}),t(r(p)),t(s,{type:"primary",class:"mr-2",onClick:a[0]||(a[0]=B=>_(2)),disabled:!m.value},{default:e(()=>[o(" 点击切换按钮权限(用户id为2) ")]),_:1},8,["disabled"]),t(s,{type:"primary",onClick:a[1]||(a[1]=B=>_(1)),disabled:!m.value},{default:e(()=>[o(" 点击切换按钮权限(用户id为1,默认) ")]),_:1},8,["disabled"]),m.value?(c(),F(I,{key:0},[t(r(p),null,{default:e(()=>[o("组件方式判断权限")]),_:1}),t(r(v),{value:"1000"},{default:e(()=>[t(s,{type:"primary",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000']权限可见 ")]),_:1})]),_:1}),t(r(v),{value:"2000"},{default:e(()=>[t(s,{color:"success",class:"mx-4"},{default:e(()=>[o(" 拥有code ['2000']权限可见 ")]),_:1})]),_:1}),t(r(v),{value:["1000","2000"]},{default:e(()=>[t(s,{color:"error",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000','2000']角色权限可见 ")]),_:1})]),_:1}),t(r(p),null,{default:e(()=>[o("函数方式方式判断权限")]),_:1}),r(d)("1000")?(c(),n(s,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000']权限可见 ")]),_:1})):f("",!0),r(d)("2000")?(c(),n(s,{key:1,color:"success",class:"mx-4"},{default:e(()=>[o(" 拥有code ['2000']权限可见 ")]),_:1})):f("",!0),r(d)(["1000","2000"])?(c(),n(s,{key:2,color:"error",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000','2000']角色权限可见 ")]),_:1})):f("",!0),t(r(p),null,{default:e(()=>[o("指令方式方式判断权限(该方式不能动态修改权限.)")]),_:1}),x((c(),n(s,{type:"primary",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000']权限可见 ")]),_:1})),[[k,"1000"]]),x((c(),n(s,{color:"success",class:"mx-4"},{default:e(()=>[o(" 拥有code ['2000']权限可见 ")]),_:1})),[[k,"2000"]]),x((c(),n(s,{color:"error",class:"mx-4"},{default:e(()=>[o(" 拥有code ['1000','2000']角色权限可见 ")]),_:1})),[[k,["1000","2000"]]])],64)):f("",!0)]),_:1})}}}),Q=D(j,[["__scopeId","data-v-4a1c2300"]]);export{Q as default};
