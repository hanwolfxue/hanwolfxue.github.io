import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-ByVk3RYY.js";import"./TableImg.vue_vue_type_style_index_0_lang-D9VTOyNB.js";import{_ as b}from"./index-DyLlPTSK.js";import{u as g}from"./useTable-pzDtlNh6.js";import{c as C}from"./system-OB_ucAsk.js";import{u as k}from"./index-CjCxi65Z.js";import{_ as x,c as w,s as y}from"./RoleDrawer.vue_vue_type_script_setup_true_lang-Dd55qUa_.js";import{d as R,a7 as S,Z as a,_ as B,k as o,a9 as r,G as D,a8 as T,u as e,ab as v}from"./vue-BR4kA91-.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-ChJPyvZY.js";import"./FormItem.vue_vue_type_script_lang-i4JZQVZz.js";import"./componentMap-Dm43PJut.js";import"./useFormItem-SyjpFhfW.js";import"./antd-BHcOFGwY.js";import"./entry/index-BwJ41R5L-1717470460305.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-wfx7fUr-.js";import"./index-BQ8Z-fny.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CSn1F3iD.js";import"./copyTextToClipboard-BxfkKzRs.js";import"./index-D6j_2gvf.js";import"./index-BqSs1kax.js";import"./index-BprAe8AC.js";import"./useWindowSizeFn-CSHZwHVf.js";import"./base64Conver-bBv-IO2K.js";import"./helper-D_O_ef0C.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B9ct2Pmv.js";import"./useForm-B-zFHLB_.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-Ct_sYMl9.js";import"./useSortable-D_syIzkL.js";import"./download-CTUw6po6.js";import"./index-Cg822QfJ.js";import"./useContextMenu-DtxfqPVe.js";const ce=R({name:"RoleManagement",__name:"index",setup(N){const[m,{openDrawer:i}]=k(),[s,{reload:l}]=g({title:"角色列表",api:C,columns:w,formConfig:{labelWidth:120,schemas:y},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function u(t){}function d(){l()}return(t,V)=>{const f=S("a-button");return a(),B("div",null,[o(e(h),{onRegister:e(s)},{toolbar:r(()=>[o(f,{type:"primary",onClick:p},{default:r(()=>[D(" 新增角色 ")]),_:1})]),bodyCell:r(({column:_,record:n})=>[_.key==="action"?(a(),T(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:u.bind(null,n)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),o(x,{onRegister:e(m),onSuccess:d},null,8,["onRegister"])])}}});export{ce as default};