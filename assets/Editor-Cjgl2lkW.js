import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-Bo5aIwv8.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BXey65Jw.js";import"./componentMap-CmF4-YMa.js";import{C as d,c as f}from"./entry/index-DYhSbAqf-1717317535604.js";import{P as _}from"./index-ByM-42ho.js";import{M as a,C as i}from"./index-dnX_5qAW.js";import{d as g,Z as C,a8 as b,a9 as n,k as s,u as o,l as p}from"./vue-BR4kA91-.js";import"./FormItem.vue_vue_type_script_lang-NELW6WVE.js";import"./helper-DVtAkFvS.js";import"./antd-fbBm7n8h.js";import"./index-CezNLTza.js";import"./useWindowSizeFn-DZQkci5c.js";import"./useFormItem-DwFiYTSW.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-Bhar59WA.js";import"./index-CjO5xVS4.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Dlw0GD_8.js";import"./download-C9y7zNPH.js";import"./base64Conver-bBv-IO2K.js";import"./index-Cc6pAm8Q.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-NuaysHRD.js";import"./copyTextToClipboard-BNaz5MaW.js";import"./index-DGiJd9eR.js";import"./index-BwBqJ27A.js";import"./useContentViewHeight-CjGH72X6.js";import"./onMountedOrActivated-Ct_sYMl9.js";const A=g({__name:"Editor",setup(h){const m=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"JSON",component:"Input",label:"JSON",defaultValue:`{
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
