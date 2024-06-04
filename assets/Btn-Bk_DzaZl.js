import{_ as P}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-CARG7tGV.js";import{V as U,u as k,aZ as s,_ as g}from"./entry/index-YYm-3Pll-1717503973898.js";import{A as m}from"./index-BRadJQ68.js";import{P as C}from"./index-C2FojmvI.js";import{d as h,c as y,a7 as B,q as V,Z as l,a8 as u,a9 as t,k as o,$ as d,G as a,a0 as _,u as e,ab as f,m as S}from"./vue-gN4NnATS.js";import{aE as b,a0 as D,a7 as E}from"./antd-B_Joh_oh.js";import"./useContentViewHeight-BlDRflCK.js";import"./useWindowSizeFn-B-NbT5Sn.js";import"./onMountedOrActivated-D-SrSxhb.js";const N={class:"mt-4"},$=h({__name:"Btn",setup(w){const{changeRole:T,hasPermission:n}=U(),i=k(),v=y(()=>i.getRoleList.includes(s.SUPER)),x=y(()=>i.getRoleList.includes(s.TEST));return(A,c)=>{const r=B("a-button"),p=V("auth");return l(),u(e(C),{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:t(()=>[o(P),d("p",null,[a(" 当前角色: "),d("a",null,_(e(i).getRoleList),1)]),o(e(b),{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),d("div",N,[a(" 权限切换(请先切换权限模式为前端角色权限模式): "),o(e(D),null,{default:t(()=>[o(r,{onClick:c[0]||(c[0]=R=>e(T)(e(s).SUPER)),type:v.value?"primary":"default"},{default:t(()=>[a(_(e(s).SUPER),1)]),_:1},8,["type"]),o(r,{onClick:c[1]||(c[1]=R=>e(T)(e(s).TEST)),type:x.value?"primary":"default"},{default:t(()=>[a(_(e(s).TEST),1)]),_:1},8,["type"])]),_:1})]),o(e(E),null,{default:t(()=>[a("组件方式判断权限(有需要可以自行全局注册)")]),_:1}),o(e(m),{value:e(s).SUPER},{default:t(()=>[o(r,{type:"primary",class:"mx-4"},{default:t(()=>[a(" 拥有super角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(e(m),{value:e(s).TEST},{default:t(()=>[o(r,{color:"success",class:"mx-4"},{default:t(()=>[a(" 拥有test角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(e(m),{value:[e(s).TEST,e(s).SUPER]},{default:t(()=>[o(r,{color:"error",class:"mx-4"},{default:t(()=>[a(" 拥有[test,super]角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(e(E),null,{default:t(()=>[a("函数方式方式判断权限(适用于函数内部过滤)")]),_:1}),e(n)(e(s).SUPER)?(l(),u(r,{key:0,type:"primary",class:"mx-4"},{default:t(()=>[a(" 拥有super角色权限可见 ")]),_:1})):f("",!0),e(n)(e(s).TEST)?(l(),u(r,{key:1,color:"success",class:"mx-4"},{default:t(()=>[a(" 拥有test角色权限可见 ")]),_:1})):f("",!0),e(n)([e(s).TEST,e(s).SUPER])?(l(),u(r,{key:2,color:"error",class:"mx-4"},{default:t(()=>[a(" 拥有[test,super]角色权限可见 ")]),_:1})):f("",!0),o(e(E),null,{default:t(()=>[a("指令方式方式判断权限(该方式不能动态修改权限.)")]),_:1}),S((l(),u(r,{type:"primary",class:"mx-4"},{default:t(()=>[a(" 拥有super角色权限可见 ")]),_:1})),[[p,e(s).SUPER]]),S((l(),u(r,{color:"success",class:"mx-4"},{default:t(()=>[a(" 拥有test角色权限可见 ")]),_:1})),[[p,e(s).TEST]]),S((l(),u(r,{color:"error",class:"mx-4"},{default:t(()=>[a(" 拥有[test,super]角色权限可见 ")]),_:1})),[[p,[e(s).TEST,e(s).SUPER]]])]),_:1})}}}),H=g($,[["__scopeId","data-v-303c9f2b"]]);export{H as default};
