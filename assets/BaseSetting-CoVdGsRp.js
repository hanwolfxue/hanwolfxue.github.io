var f=(e,m,a)=>new Promise((u,i)=>{var d=t=>{try{r(a.next(t))}catch(n){i(n)}},l=t=>{try{r(a.throw(t))}catch(n){i(n)}},r=t=>t.done?u(t.value):Promise.resolve(t.value).then(d,l);r((a=a.apply(e,m)).next())});import{l as v,C as g,b,_ as C}from"./entry/index-BEncmqB6-1717590836513.js";import{C as I}from"./index-p9DGO2U_.js";import{_ as S}from"./BasicForm.vue_vue_type_script_setup_true_lang-BX5INs_O.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CZYUosjl.js";import"./componentMap-DWit1r73.js";import{u as x}from"./useForm-DUxRihNs.js";import{a as A}from"./account-yOgqddVK.js";import{u as w}from"./upload-DJTmqox_.js";import{h as B}from"./header-OZa5fSDc.js";import{b as k}from"./data-CMLH8mPi.js";import{d as U,o as V,c as y,a7 as M,Z as N,a8 as R,a9 as p,k as s,u as o,$ as h,G as F,a2 as G,a3 as T}from"./vue-gN4NnATS.js";import{X as $,Y as _}from"./antd-B_Joh_oh.js";import"./index-DjS0u9eA.js";import"./useWindowSizeFn-IxPVMp8C.js";import"./base64Conver-bBv-IO2K.js";import"./FormItem.vue_vue_type_script_lang-De8SZO7S.js";import"./helper-C-YKYu2l.js";import"./useFormItem-Cg0dkAdb.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-fyGG3XzR.js";import"./index-BzLTHwbg.js";import"./uuid-D0SLUWHI.js";import"./useSortable-DibPM8bu.js";import"./download-BBdzJm0L.js";import"./index-C45k99u8.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-C4SiI3rn.js";import"./copyTextToClipboard-6Z3acr_D.js";import"./index-rnSLzISA.js";const E=e=>(G("data-v-54663cbe"),e=e(),T(),e),P={class:"change-avatar"},W=E(()=>h("div",{class:"mb-2"},"头像",-1)),X=U({__name:"BaseSetting",setup(e){const{createMessage:m}=b(),a=v(),[u,{setFieldsValue:i}]=x({labelWidth:120,schemas:k,showActionButtonGroup:!1});V(()=>f(this,null,function*(){const t=yield A();i(t)}));const d=y(()=>{const{avatar:t}=a.getUserInfo;return t||B});function l({src:t,data:n}){const c=a.getUserInfo;c.avatar=t,a.setUserInfo(c)}function r(){m.success("更新成功！")}return(t,n)=>{const c=M("a-button");return N(),R(o(g),{title:"基本设置",canExpand:!1},{default:p(()=>[s(o($),{gutter:24},{default:p(()=>[s(o(_),{span:14},{default:p(()=>[s(o(S),{onRegister:o(u)},null,8,["onRegister"])]),_:1}),s(o(_),{span:10},{default:p(()=>[h("div",P,[W,s(o(I),{uploadApi:o(w),value:d.value,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:l,width:"150"},null,8,["uploadApi","value"])])]),_:1})]),_:1}),s(c,{type:"primary",onClick:r},{default:p(()=>[F(" 更新基本信息 ")]),_:1})]),_:1})}}}),ht=C(X,[["__scopeId","data-v-54663cbe"]]);export{ht as default};
