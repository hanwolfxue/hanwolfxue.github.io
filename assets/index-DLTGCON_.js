import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-Dk-hyGQH.js";import"./TableImg.vue_vue_type_style_index_0_lang-BHRjOOWO.js";import{_ as b}from"./index-DgDWXVze.js";import{u as g}from"./useTable-gPQ5jd8E.js";import{a as C}from"./system-BfOAb0gp.js";import{b as k}from"./index-HDRnz90D.js";import{_ as x,c as y,s as R}from"./DeptModal.vue_vue_type_script_setup_true_lang-VaTPNVlw.js";import{d as S,a7 as w,Z as n,_ as M,k as o,a9 as i,G as T,a8 as v,u as e,ab as B}from"./vue-BR4kA91-.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DIjD_H4V.js";import"./FormItem.vue_vue_type_script_lang-BgOdR0De.js";import"./componentMap-C1K32562.js";import"./useFormItem-DwFiYTSW.js";import"./antd-fbBm7n8h.js";import"./entry/index-rsXJi5X6-1717311563715.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DfGcCe0Q.js";import"./index-CAUq66SI.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-Ba6thmk8.js";import"./copyTextToClipboard-BNaz5MaW.js";import"./index-Bs9gK_PQ.js";import"./index-o3kLrUfg.js";import"./base64Conver-bBv-IO2K.js";import"./helper-DMB1835e.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DWOOfJYp.js";import"./useForm-YaJmdogr.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-Ct_sYMl9.js";import"./useWindowSizeFn-Cc-uvi4I.js";import"./useSortable-Ch7SjqIW.js";import"./download-BxwcALvn.js";const me=S({name:"DeptManagement",__name:"index",setup(D){const[s,{openModal:r}]=k(),[m,{reload:l}]=g({title:"部门列表",api:C,columns:y,formConfig:{labelWidth:120,schemas:R},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function d(t){}function u(){l()}return(t,N)=>{const f=w("a-button");return n(),M("div",null,[o(e(h),{onRegister:e(m)},{toolbar:i(()=>[o(f,{type:"primary",onClick:p},{default:i(()=>[T(" 新增部门 ")]),_:1})]),bodyCell:i(({column:_,record:a})=>[_.key==="action"?(n(),v(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,a)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,a)}}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"]),o(x,{onRegister:e(s),onSuccess:u},null,8,["onRegister"])])}}});export{me as default};
