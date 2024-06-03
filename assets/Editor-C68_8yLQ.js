import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-BbGzRFJt.js";import"./BasicForm.vue_vue_type_style_index_0_lang-D-1Ai2Z1.js";import"./componentMap-CIMWSNys.js";import{C as d,c as f}from"./entry/index-nrenXBHR-1717431353170.js";import{P as _}from"./index-CaS5ecGD.js";import{M as a,C as i}from"./index-NDOl-lo8.js";import{d as g,Z as C,a8 as b,a9 as n,k as s,u as o,l as p}from"./vue-BR4kA91-.js";import"./FormItem.vue_vue_type_script_lang-C1MwDpoz.js";import"./helper-DPzHTITE.js";import"./antd-BHcOFGwY.js";import"./index-DWRt9RDq.js";import"./useWindowSizeFn-CJLxKXUm.js";import"./useFormItem-SyjpFhfW.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DLP5NCLE.js";import"./index-Tkjs4wJF.js";import"./uuid-D0SLUWHI.js";import"./useSortable-B8_U8PtS.js";import"./download-ia8XsvVf.js";import"./base64Conver-bBv-IO2K.js";import"./index-M7kNQyxh.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CzhoETZs.js";import"./copyTextToClipboard-BxfkKzRs.js";import"./index-C2efpzO8.js";import"./index-CSfCCc_b.js";import"./useContentViewHeight-DWJbGTOw.js";import"./onMountedOrActivated-Ct_sYMl9.js";const A=g({__name:"Editor",setup(h){const m=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"JSON",component:"Input",label:"JSON",defaultValue:`{
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
