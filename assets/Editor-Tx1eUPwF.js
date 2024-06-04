import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-BZ5z7SSk.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DxjX_Szw.js";import"./componentMap-BRPjS_JS.js";import{C as d,e as f}from"./entry/index-B0nMuAdn-1717508002020.js";import{P as _}from"./index-DDpk9mKf.js";import{M as a,C as i}from"./index-BGnxj1WF.js";import{d as g,Z as C,a8 as b,a9 as n,k as s,u as o,l as p}from"./vue-gN4NnATS.js";import"./FormItem.vue_vue_type_script_lang-BnwpuRrZ.js";import"./helper-CXbLgkha.js";import"./antd-B_Joh_oh.js";import"./index-C6rSxznH.js";import"./useWindowSizeFn-CY1G17qn.js";import"./useFormItem-Cg0dkAdb.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-B7ynjTXF.js";import"./index-DBLClDqv.js";import"./uuid-D0SLUWHI.js";import"./useSortable-CY72mGDR.js";import"./download-DXfkxjzB.js";import"./base64Conver-bBv-IO2K.js";import"./index-DEI4jN_C.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-Bekw1bAj.js";import"./copyTextToClipboard-6Z3acr_D.js";import"./index-F-tuON8D.js";import"./index-BWigV0bV.js";import"./useContentViewHeight-DdUyUmSn.js";import"./onMountedOrActivated-D-SrSxhb.js";const A=g({__name:"Editor",setup(h){const m=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"JSON",component:"Input",label:"JSON",defaultValue:`{
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
   return [expression]`,rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>p(i,{value:e[t],mode:a.PYTHON,onChange:r=>{e[t]=r}})}],{createMessage:u}=f();function l(e){u.success("click search,values:"+JSON.stringify(e))}return(e,t)=>(C(),b(o(_),{title:"代码编辑器组件嵌入Form示例"},{default:n(()=>[s(o(d),{title:"代码编辑器组件"},{default:n(()=>[s(o(c),{labelWidth:100,schemas:m,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:l})]),_:1})]),_:1}))}});export{A as default};
