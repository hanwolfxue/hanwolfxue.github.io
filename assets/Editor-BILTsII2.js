import{_ as n}from"./BasicForm.vue_vue_type_script_setup_true_lang-BX5INs_O.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CZYUosjl.js";import"./componentMap-DWit1r73.js";import{C as l,b as u}from"./entry/index-BEncmqB6-1717590836513.js";import{M as c}from"./index-CYSTGElb.js";import{P as f}from"./index-D8CXPW3Y.js";import{d,Z as _,a8 as k,a9 as o,k as a,u as e,l as b}from"./vue-gN4NnATS.js";import"./FormItem.vue_vue_type_script_lang-De8SZO7S.js";import"./helper-C-YKYu2l.js";import"./antd-B_Joh_oh.js";import"./index-DjS0u9eA.js";import"./useWindowSizeFn-IxPVMp8C.js";import"./useFormItem-Cg0dkAdb.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-fyGG3XzR.js";import"./index-BzLTHwbg.js";import"./uuid-D0SLUWHI.js";import"./useSortable-DibPM8bu.js";import"./download-BBdzJm0L.js";import"./base64Conver-bBv-IO2K.js";import"./index-C45k99u8.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-C4SiI3rn.js";import"./copyTextToClipboard-6Z3acr_D.js";import"./index-rnSLzISA.js";import"./index-p9DGO2U_.js";import"./onMountedOrActivated-D-SrSxhb.js";import"./useContentViewHeight-QGgUIzf4.js";const H=d({__name:"Editor",setup(h){const i=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:t,field:r})=>b(c,{value:t[r],onChange:s=>{t[r]=s}})}],{createMessage:p}=u();function m(t){p.success("click search,values:"+JSON.stringify(t))}return(t,r)=>(_(),k(e(f),{title:"MarkDown组件嵌入Form示例"},{default:o(()=>[a(e(l),{title:"MarkDown表单"},{default:o(()=>[a(e(n),{labelWidth:100,schemas:i,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:m})]),_:1})]),_:1}))}});export{H as default};