var u=(s,m,i)=>new Promise((o,d)=>{var p=e=>{try{n(i.next(e))}catch(t){d(t)}},l=e=>{try{n(i.throw(e))}catch(t){d(t)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(p,l);n((i=i.apply(s,m)).next())});import{_ as C}from"./BasicTable.vue_vue_type_script_setup_true_lang-Dk-hyGQH.js";import"./TableImg.vue_vue_type_style_index_0_lang-BHRjOOWO.js";import"./index-DgDWXVze.js";import{u as h}from"./useTable-gPQ5jd8E.js";import{o as c}from"./select-DCZsuxMu.js";import{d as x}from"./table-CuIJ513K.js";import{t as _}from"./tree-2261SA-8.js";import{c as w}from"./entry/index-rsXJi5X6-1717311563715.js";import{d as b,Z as I,_ as v,k as P,u as f,l as k}from"./vue-BR4kA91-.js";import{aF as F}from"./antd-fbBm7n8h.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DIjD_H4V.js";import"./FormItem.vue_vue_type_script_lang-BgOdR0De.js";import"./componentMap-C1K32562.js";import"./useFormItem-DwFiYTSW.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DfGcCe0Q.js";import"./index-CAUq66SI.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-Ba6thmk8.js";import"./copyTextToClipboard-BNaz5MaW.js";import"./index-Bs9gK_PQ.js";import"./index-o3kLrUfg.js";import"./index-HDRnz90D.js";import"./useWindowSizeFn-Cc-uvi4I.js";import"./base64Conver-bBv-IO2K.js";import"./helper-DMB1835e.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DWOOfJYp.js";import"./useForm-YaJmdogr.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-Ct_sYMl9.js";import"./useSortable-Ch7SjqIW.js";import"./download-BxwcALvn.js";const R={class:"p-4"},ae=b({__name:"EditCellTable",setup(s){const m=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:e=>u(this,null,function*(){return e==="2"?"不能输入该值":""}),width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:e})=>k(F,{percent:Number(e)})},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:_,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"时间选择",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200},{title:"单选框",dataIndex:"radio1",edit:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"单选按钮框",dataIndex:"radio2",edit:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"远程单选框",dataIndex:"radio3",edit:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200}],[i]=h({title:"可编辑单元格示例",api:x,columns:m,showIndexColumn:!1,bordered:!0}),{createMessage:o}=w();function d({record:e,index:t,key:r,value:a}){return!1}function p({value:e,key:t,id:r}){return o.loading({content:`正在模拟保存${t}`,key:"_save_fake_data",duration:0}),new Promise(a=>{setTimeout(()=>{e===""?(o.error({content:"保存失败：不能为空",key:"_save_fake_data",duration:2}),a(!1)):(o.success({content:`记录${r}的${t}已保存`,key:"_save_fake_data",duration:2}),a(!0))},2e3)})}function l(me){return u(this,arguments,function*({record:e,index:t,key:r,value:a}){return yield p({id:e.id,key:r,value:a})})}function n(){}return(e,t)=>(I(),v("div",R,[P(f(C),{onRegister:f(i),onEditEnd:d,onEditCancel:n,beforeEditSubmit:l},null,8,["onRegister"])]))}});export{ae as default};
