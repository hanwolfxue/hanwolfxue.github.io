import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-ByVk3RYY.js";import"./TableImg.vue_vue_type_style_index_0_lang-D9VTOyNB.js";import{_ as b}from"./index-DyLlPTSK.js";import{u as g}from"./useTable-pzDtlNh6.js";import{a as C}from"./system-OB_ucAsk.js";import{b as k}from"./index-BprAe8AC.js";import{_ as x,c as y,s as R}from"./DeptModal.vue_vue_type_script_setup_true_lang-Ba-EJiEK.js";import{d as S,a7 as w,Z as n,_ as M,k as o,a9 as i,G as T,a8 as v,u as e,ab as B}from"./vue-BR4kA91-.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-ChJPyvZY.js";import"./FormItem.vue_vue_type_script_lang-i4JZQVZz.js";import"./componentMap-Dm43PJut.js";import"./useFormItem-SyjpFhfW.js";import"./antd-BHcOFGwY.js";import"./entry/index-BwJ41R5L-1717470460305.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-wfx7fUr-.js";import"./index-BQ8Z-fny.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CSn1F3iD.js";import"./copyTextToClipboard-BxfkKzRs.js";import"./index-D6j_2gvf.js";import"./index-BqSs1kax.js";import"./base64Conver-bBv-IO2K.js";import"./helper-D_O_ef0C.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B9ct2Pmv.js";import"./useForm-B-zFHLB_.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-Ct_sYMl9.js";import"./useWindowSizeFn-CSHZwHVf.js";import"./useSortable-D_syIzkL.js";import"./download-CTUw6po6.js";const me=S({name:"DeptManagement",__name:"index",setup(D){const[s,{openModal:r}]=k(),[m,{reload:l}]=g({title:"部门列表",api:C,columns:y,formConfig:{labelWidth:120,schemas:R},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function d(t){}function u(){l()}return(t,N)=>{const f=w("a-button");return n(),M("div",null,[o(e(h),{onRegister:e(m)},{toolbar:i(()=>[o(f,{type:"primary",onClick:p},{default:i(()=>[T(" 新增部门 ")]),_:1})]),bodyCell:i(({column:_,record:a})=>[_.key==="action"?(n(),v(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,a)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,a)}}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"]),o(x,{onRegister:e(s),onSuccess:u},null,8,["onRegister"])])}}});export{me as default};