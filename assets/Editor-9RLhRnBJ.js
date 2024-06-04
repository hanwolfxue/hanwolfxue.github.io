import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-C2c8X4Tf.js";import"./BasicForm.vue_vue_type_style_index_0_lang-HM0ZhRub.js";import"./componentMap-fMN2IhCj.js";import{C as d,e as f}from"./entry/index-YYm-3Pll-1717503973898.js";import{P as _}from"./index-C2FojmvI.js";import{M as a,C as i}from"./index-3PTx_9Jx.js";import{d as g,Z as C,a8 as b,a9 as n,k as s,u as o,l as p}from"./vue-gN4NnATS.js";import"./FormItem.vue_vue_type_script_lang-DvbjwlLv.js";import"./helper-C4je1pfN.js";import"./antd-B_Joh_oh.js";import"./index-CyVD6SIG.js";import"./useWindowSizeFn-B-NbT5Sn.js";import"./useFormItem-Cg0dkAdb.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DO9CJMm7.js";import"./index-BkWkx9vu.js";import"./uuid-D0SLUWHI.js";import"./useSortable-BZb7TdnX.js";import"./download-Bjjp2WrL.js";import"./base64Conver-bBv-IO2K.js";import"./index-CWoQaw2_.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D9cuxMf7.js";import"./copyTextToClipboard-6Z3acr_D.js";import"./index-DPqzJKIr.js";import"./index-C8fbSN6y.js";import"./useContentViewHeight-BlDRflCK.js";import"./onMountedOrActivated-D-SrSxhb.js";const A=g({__name:"Editor",setup(h){const m=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"JSON",component:"Input",label:"JSON",defaultValue:`{
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
