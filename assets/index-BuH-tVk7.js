import{_ as g}from"./BasicTable.vue_vue_type_script_setup_true_lang-d6i8Zyfl.js";import"./TableImg.vue_vue_type_style_index_0_lang-CKJP8D9C.js";import{_ as C}from"./index-BzLTHwbg.js";import{u as x}from"./useTable-C2wG4hEf.js";import{d as k}from"./system-MsYDBG1C.js";import{u as w}from"./index-Bez3RgwJ.js";import{_ as T,c as y,s as S}from"./MenuDrawer.vue_vue_type_script_setup_true_lang-2okTfKe9.js";import{d as R,a7 as D,Z as a,_ as v,k as o,a9 as r,G as B,a8 as F,u as e,ab as M,n as N}from"./vue-gN4NnATS.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-BX5INs_O.js";import"./FormItem.vue_vue_type_script_lang-De8SZO7S.js";import"./componentMap-DWit1r73.js";import"./useFormItem-Cg0dkAdb.js";import"./antd-B_Joh_oh.js";import"./entry/index-BEncmqB6-1717590836513.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-fyGG3XzR.js";import"./index-C45k99u8.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-C4SiI3rn.js";import"./copyTextToClipboard-6Z3acr_D.js";import"./index-rnSLzISA.js";import"./index-p9DGO2U_.js";import"./index-DjS0u9eA.js";import"./useWindowSizeFn-IxPVMp8C.js";import"./base64Conver-bBv-IO2K.js";import"./helper-C-YKYu2l.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CZYUosjl.js";import"./useForm-DUxRihNs.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-D-SrSxhb.js";import"./useSortable-DibPM8bu.js";import"./download-BBdzJm0L.js";const ue=R({name:"MenuManagement",__name:"index",setup(V){const[s,{openDrawer:i}]=w(),[m,{reload:l,expandAll:c}]=x({title:"菜单列表",api:k,columns:y,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function u(t){i(!0,{record:t,isUpdate:!0})}function d(t){}function f(){l()}function _(){N(c)}return(t,$)=>{const h=D("a-button");return a(),v("div",null,[o(e(g),{onRegister:e(m),onFetchSuccess:_},{toolbar:r(()=>[o(h,{type:"primary",onClick:p},{default:r(()=>[B(" 新增菜单 ")]),_:1})]),bodyCell:r(({column:b,record:n})=>[b.key==="action"?(a(),F(e(C),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:u.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,n)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"]),o(T,{onRegister:e(s),onSuccess:f},null,8,["onRegister"])])}}});export{ue as default};