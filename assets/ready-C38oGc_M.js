import{i as m}from"./mock-api-DwHF4owk.js";import{P as A}from"./index-D8CXPW3Y.js";import{b9 as t,a0 as f,B as p,W as F}from"./antd-B_Joh_oh.js";import{d as o,k as u,f as g,G as e,u as r}from"./vue-gN4NnATS.js";import{u as y}from"./index-BEjRe4jB.js";import"./entry/index-BEncmqB6-1717590836513.js";import"./useContentViewHeight-QGgUIzf4.js";import"./useWindowSizeFn-IxPVMp8C.js";import"./onMountedOrActivated-D-SrSxhb.js";const E=o({setup(){const a=g(!1),n=l=>{a.value=l!=null?l:!a.value},{data:d,loading:s}=y(m,{ready:a});return()=>u(F,{title:"自动模式"},{default:()=>[u(t,null,{default:()=>[u(t.Paragraph,null,{default:()=>[e("以下示例演示了自动模式下"),u(t.Text,{type:"danger"},{default:()=>[e(" ready ")]}),e(" 的行为。每次"),u(t.Text,{type:"danger"},{default:()=>[e(" ready ")]}),e(" 从 false 变为 true 时，都会重新发起请求。")]})]}),u("div",null,[u(f,null,{default:()=>[u("div",null,[e("Ready: "),JSON.stringify(r(a))]),u(p,{onClick:()=>n()},{default:()=>[e("Toggle Ready")]})]}),u("div",null,[e("Username: "),s.value?"Loading":r(d)])])]})}}),c=o({setup(){const a=g(!1),n=i=>{a.value=i!=null?i:!a.value},{data:d,loading:s,run:l}=y(m,{manual:!0,ready:a});return()=>u(F,{title:"手动模式",class:"mt-2"},{default:()=>[u(t,null,{default:()=>[u(t.Paragraph,null,{default:()=>[e("以下示例演示了手动模式下"),u(t.Text,{type:"danger"},{default:()=>[e(" ready ")]}),e("的行为。只有当"),u(t.Text,{type:"danger"},{default:()=>[e(" ready ")]}),e("等于 true 时，run 才会执行。")]})]}),u("div",null,[u(f,null,{default:()=>[u("div",null,[e("Ready: "),JSON.stringify(r(a))]),u(p,{onClick:()=>n()},{default:()=>[e("Toggle Ready")]})]}),u("div",{class:"mt-2"},[u(f,null,{default:()=>[u("div",null,[e("Username: "),s.value?"Loading":r(d)]),u(p,{type:"primary",disabled:!a.value,onClick:()=>l()},{default:()=>[e("Run")]})]})])])]})}}),P=o({setup(){return()=>u(A,null,{default:()=>[u(E,null,null),u(c,null,null)]})}});export{P as default};