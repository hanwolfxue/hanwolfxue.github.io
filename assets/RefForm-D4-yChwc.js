var b=(d,u,r)=>new Promise((f,p)=>{var l=e=>{try{t(r.next(e))}catch(o){p(o)}},a=e=>{try{t(r.throw(e))}catch(o){p(o)}},t=e=>e.done?f(e.value):Promise.resolve(e.value).then(l,a);t((r=r.apply(d,u)).next())});import{_ as v}from"./BasicForm.vue_vue_type_script_setup_true_lang-BX5INs_O.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CZYUosjl.js";import"./componentMap-DWit1r73.js";import{C,b as c}from"./entry/index-BEncmqB6-1717590836513.js";import{P as $}from"./index-D8CXPW3Y.js";import{d as P,f as B,a7 as w,Z as S,a8 as g,a9 as s,$ as k,k as n,G as i,u as m,n as x}from"./vue-gN4NnATS.js";import"./FormItem.vue_vue_type_script_lang-De8SZO7S.js";import"./helper-C-YKYu2l.js";import"./antd-B_Joh_oh.js";import"./index-DjS0u9eA.js";import"./useWindowSizeFn-IxPVMp8C.js";import"./useFormItem-Cg0dkAdb.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-fyGG3XzR.js";import"./index-BzLTHwbg.js";import"./uuid-D0SLUWHI.js";import"./useSortable-DibPM8bu.js";import"./download-BBdzJm0L.js";import"./base64Conver-bBv-IO2K.js";import"./index-C45k99u8.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-C4SiI3rn.js";import"./copyTextToClipboard-6Z3acr_D.js";import"./index-rnSLzISA.js";import"./index-p9DGO2U_.js";import"./useContentViewHeight-QGgUIzf4.js";import"./onMountedOrActivated-D-SrSxhb.js";const y={class:"mb-4"},R={class:"mb-4"},tt=P({__name:"RefForm",setup(d){const u=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:a=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],r=B(null),{createMessage:f}=c();function p(a){f.success("click search,values:"+JSON.stringify(a))}function l(a){return b(this,null,function*(){const t=m(r);t&&(yield x(),yield t.setProps(a))})}return(a,t)=>{const e=w("a-button");return S(),g(m($),{title:"Ref操作示例"},{default:s(()=>[k("div",y,[n(e,{onClick:t[0]||(t[0]=o=>l({labelWidth:150})),class:"mr-2"},{default:s(()=>[i(" 更改labelWidth ")]),_:1}),n(e,{onClick:t[1]||(t[1]=o=>l({labelWidth:120})),class:"mr-2"},{default:s(()=>[i(" 还原labelWidth ")]),_:1}),n(e,{onClick:t[2]||(t[2]=o=>l({size:"large"})),class:"mr-2"},{default:s(()=>[i(" 更改Size ")]),_:1}),n(e,{onClick:t[3]||(t[3]=o=>l({size:"default"})),class:"mr-2"},{default:s(()=>[i(" 还原Size ")]),_:1}),n(e,{onClick:t[4]||(t[4]=o=>l({disabled:!0})),class:"mr-2"},{default:s(()=>[i(" 禁用表单 ")]),_:1}),n(e,{onClick:t[5]||(t[5]=o=>l({disabled:!1})),class:"mr-2"},{default:s(()=>[i(" 解除禁用 ")]),_:1}),n(e,{onClick:t[6]||(t[6]=o=>l({readonly:!0})),class:"mr-2"},{default:s(()=>[i(" 只读表单 ")]),_:1}),n(e,{onClick:t[7]||(t[7]=o=>l({readonly:!1})),class:"mr-2"},{default:s(()=>[i(" 解除只读 ")]),_:1}),n(e,{onClick:t[8]||(t[8]=o=>l({compact:!0})),class:"mr-2"},{default:s(()=>[i(" 紧凑表单 ")]),_:1}),n(e,{onClick:t[9]||(t[9]=o=>l({compact:!1})),class:"mr-2"},{default:s(()=>[i(" 还原正常间距 ")]),_:1}),n(e,{onClick:t[10]||(t[10]=o=>l({actionColOptions:{span:8}})),class:"mr-2"},{default:s(()=>[i(" 操作按钮位置 ")]),_:1})]),k("div",R,[n(e,{onClick:t[11]||(t[11]=o=>l({showActionButtonGroup:!1})),class:"mr-2"},{default:s(()=>[i(" 隐藏操作按钮 ")]),_:1}),n(e,{onClick:t[12]||(t[12]=o=>l({showActionButtonGroup:!0})),class:"mr-2"},{default:s(()=>[i(" 显示操作按钮 ")]),_:1}),n(e,{onClick:t[13]||(t[13]=o=>l({showResetButton:!1})),class:"mr-2"},{default:s(()=>[i(" 隐藏重置按钮 ")]),_:1}),n(e,{onClick:t[14]||(t[14]=o=>l({showResetButton:!0})),class:"mr-2"},{default:s(()=>[i(" 显示重置按钮 ")]),_:1}),n(e,{onClick:t[15]||(t[15]=o=>l({showSubmitButton:!1})),class:"mr-2"},{default:s(()=>[i(" 隐藏查询按钮 ")]),_:1}),n(e,{onClick:t[16]||(t[16]=o=>l({showSubmitButton:!0})),class:"mr-2"},{default:s(()=>[i(" 显示查询按钮 ")]),_:1}),n(e,{onClick:t[17]||(t[17]=o=>l({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:s(()=>[i(" 修改重置按钮 ")]),_:1}),n(e,{onClick:t[18]||(t[18]=o=>l({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:s(()=>[i(" 修改查询按钮 ")]),_:1})]),n(m(C),{title:"使用ref调用表单内部函数示例"},{default:s(()=>[n(m(v),{schemas:u,ref_key:"formElRef",ref:r,labelWidth:100,onSubmit:p,actionColOptions:{span:24}},null,512)]),_:1})]),_:1})}}});export{tt as default};