import{W as f,l as S,a_ as t,_ as y}from"./entry/index-BEncmqB6-1717590836513.js";import{P as g}from"./index-D8CXPW3Y.js";import{_ as x}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-WrlrQ7y8.js";import{d as E,c as u,a7 as R,Z as T,a8 as v,a9 as a,k as s,$ as l,G as n,a0 as i,u as e}from"./vue-gN4NnATS.js";import{aE as k,a0 as C}from"./antd-B_Joh_oh.js";import"./useContentViewHeight-QGgUIzf4.js";import"./useWindowSizeFn-IxPVMp8C.js";import"./onMountedOrActivated-D-SrSxhb.js";const P={class:"mt-4"},B=E({__name:"index",setup(U){const{changeRole:p}=f(),r=S(),m=u(()=>r.getRoleList.includes(t.SUPER)),d=u(()=>r.getRoleList.includes(t.TEST));return($,o)=>{const c=R("a-button");return T(),v(e(g),{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:a(()=>[s(x),l("p",null,[n(" 当前角色: "),l("a",null,i(e(r).getRoleList),1)]),s(e(k),{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),l("div",P,[n(" 权限切换(请先切换权限模式为前端角色权限模式): "),s(e(C),null,{default:a(()=>[s(c,{onClick:o[0]||(o[0]=_=>e(p)(e(t).SUPER)),type:m.value?"primary":"default"},{default:a(()=>[n(i(e(t).SUPER),1)]),_:1},8,["type"]),s(c,{onClick:o[1]||(o[1]=_=>e(p)(e(t).TEST)),type:d.value?"primary":"default"},{default:a(()=>[n(i(e(t).TEST),1)]),_:1},8,["type"])]),_:1})])]),_:1})}}}),D=y(B,[["__scopeId","data-v-b9f581f7"]]);export{D as default};