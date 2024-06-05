import{_ as a}from"./BasicForm.vue_vue_type_script_setup_true_lang-BX5INs_O.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CZYUosjl.js";import"./componentMap-DWit1r73.js";import{u as r}from"./useForm-DUxRihNs.js";import{C as i}from"./entry/index-BEncmqB6-1717590836513.js";import{P as f}from"./index-D8CXPW3Y.js";import{d as u,Z as b,a8 as h,a9 as n,k as t,u as o}from"./vue-gN4NnATS.js";import"./FormItem.vue_vue_type_script_lang-De8SZO7S.js";import"./helper-C-YKYu2l.js";import"./antd-B_Joh_oh.js";import"./index-DjS0u9eA.js";import"./useWindowSizeFn-IxPVMp8C.js";import"./useFormItem-Cg0dkAdb.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-fyGG3XzR.js";import"./index-BzLTHwbg.js";import"./uuid-D0SLUWHI.js";import"./useSortable-DibPM8bu.js";import"./download-BBdzJm0L.js";import"./base64Conver-bBv-IO2K.js";import"./index-C45k99u8.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-C4SiI3rn.js";import"./copyTextToClipboard-6Z3acr_D.js";import"./index-rnSLzISA.js";import"./index-p9DGO2U_.js";import"./useContentViewHeight-QGgUIzf4.js";import"./onMountedOrActivated-D-SrSxhb.js";const H=u({__name:"AdvancedForm",setup(P){const l=()=>[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];function s(){return[{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}]}const[c]=r({labelWidth:120,schemas:l(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"字段"+e,colProps:{span:8}});const[m]=r({labelWidth:120,schemas:[...l(),...s(),{field:"",component:"Divider",label:"更多字段"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});function d(e){}return(e,_)=>(b(),h(o(f),{title:"可折叠表单示例"},{default:n(()=>[t(o(i),{title:"基础收缩示例"},{default:n(()=>[t(o(a),{onRegister:o(c)},null,8,["onRegister"])]),_:1}),t(o(i),{title:"超过3行自动收起，折叠时保留2行",class:"mt-4"},{default:n(()=>[t(o(a),{onRegister:o(m),onAdvancedChange:d},null,8,["onRegister"])]),_:1})]),_:1}))}});export{H as default};