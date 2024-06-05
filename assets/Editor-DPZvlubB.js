import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-BX5INs_O.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CZYUosjl.js";import"./componentMap-DWit1r73.js";import{C as d,b as f}from"./entry/index-BEncmqB6-1717590836513.js";import{P as _}from"./index-D8CXPW3Y.js";import{M as a,C as i}from"./index-B6zHoP-q.js";import{d as g,Z as b,a8 as C,a9 as n,k as s,u as o,l as p}from"./vue-gN4NnATS.js";import"./FormItem.vue_vue_type_script_lang-De8SZO7S.js";import"./helper-C-YKYu2l.js";import"./antd-B_Joh_oh.js";import"./index-DjS0u9eA.js";import"./useWindowSizeFn-IxPVMp8C.js";import"./useFormItem-Cg0dkAdb.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-fyGG3XzR.js";import"./index-BzLTHwbg.js";import"./uuid-D0SLUWHI.js";import"./useSortable-DibPM8bu.js";import"./download-BBdzJm0L.js";import"./base64Conver-bBv-IO2K.js";import"./index-C45k99u8.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-C4SiI3rn.js";import"./copyTextToClipboard-6Z3acr_D.js";import"./index-rnSLzISA.js";import"./index-p9DGO2U_.js";import"./useContentViewHeight-QGgUIzf4.js";import"./onMountedOrActivated-D-SrSxhb.js";const A=g({__name:"Editor",setup(h){const m=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"JSON",component:"Input",label:"JSON",defaultValue:`{
        "name":"BeJson",
        "url":"http://www.xxx.com",
        "page":88,
        "isNonProfit":true,"
        address:{ 
            "street":"科技园路.",
            "city":"江苏苏州",
            "country":"中国"
        },
}`,rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>p(i,{value:e[t],mode:a.JSON,onChange:r=>{e[t]=r},config:{tabSize:10}})},{field:"PYTHON",component:"Input",label:"PYTHON",defaultValue:`def functionname( parameters ):
   "函数_文档字符串"
   function_suite
   return [expression]`,rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>p(i,{value:e[t],mode:a.PYTHON,onChange:r=>{e[t]=r}})}],{createMessage:u}=f();function l(e){u.success("click search,values:"+JSON.stringify(e))}return(e,t)=>(b(),C(o(_),{title:"代码编辑器组件嵌入Form示例"},{default:n(()=>[s(o(d),{title:"代码编辑器组件"},{default:n(()=>[s(o(c),{labelWidth:100,schemas:m,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:l})]),_:1})]),_:1}))}});export{A as default};
