import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-Dk-hyGQH.js";import"./TableImg.vue_vue_type_style_index_0_lang-BHRjOOWO.js";import{_ as b}from"./index-DgDWXVze.js";import{u as g}from"./useTable-gPQ5jd8E.js";import{c as C}from"./system-BfOAb0gp.js";import{u as k}from"./index-D4D8iyaU.js";import{_ as x,c as w,s as y}from"./RoleDrawer.vue_vue_type_script_setup_true_lang-B3oRBmVj.js";import{d as R,a7 as S,Z as a,_ as B,k as o,a9 as r,G as D,a8 as T,u as e,ab as v}from"./vue-BR4kA91-.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DIjD_H4V.js";import"./FormItem.vue_vue_type_script_lang-BgOdR0De.js";import"./componentMap-C1K32562.js";import"./useFormItem-DwFiYTSW.js";import"./antd-fbBm7n8h.js";import"./entry/index-rsXJi5X6-1717311563715.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DfGcCe0Q.js";import"./index-CAUq66SI.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-Ba6thmk8.js";import"./copyTextToClipboard-BNaz5MaW.js";import"./index-Bs9gK_PQ.js";import"./index-o3kLrUfg.js";import"./index-HDRnz90D.js";import"./useWindowSizeFn-Cc-uvi4I.js";import"./base64Conver-bBv-IO2K.js";import"./helper-DMB1835e.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DWOOfJYp.js";import"./useForm-YaJmdogr.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-Ct_sYMl9.js";import"./useSortable-Ch7SjqIW.js";import"./download-BxwcALvn.js";import"./index-BGazunBE.js";import"./useContextMenu-uvjNTtEx.js";const ce=R({name:"RoleManagement",__name:"index",setup(N){const[m,{openDrawer:i}]=k(),[s,{reload:l}]=g({title:"角色列表",api:C,columns:w,formConfig:{labelWidth:120,schemas:y},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function u(t){}function d(){l()}return(t,V)=>{const f=S("a-button");return a(),B("div",null,[o(e(h),{onRegister:e(s)},{toolbar:r(()=>[o(f,{type:"primary",onClick:p},{default:r(()=>[D(" 新增角色 ")]),_:1})]),bodyCell:r(({column:_,record:n})=>[_.key==="action"?(a(),T(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:u.bind(null,n)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),o(x,{onRegister:e(m),onSuccess:d},null,8,["onRegister"])])}}});export{ce as default};