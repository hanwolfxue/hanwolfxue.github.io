import{_ as p}from"./BasicTable.vue_vue_type_script_setup_true_lang-Dk-hyGQH.js";import"./TableImg.vue_vue_type_style_index_0_lang-BHRjOOWO.js";import{_ as l}from"./index-DgDWXVze.js";import{u as s}from"./useTable-gPQ5jd8E.js";import{d as c}from"./table-CuIJ513K.js";import{d as u,Z as o,_,k as f,a9 as x,a8 as b,u as t,ab as h}from"./vue-BR4kA91-.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DIjD_H4V.js";import"./FormItem.vue_vue_type_script_lang-BgOdR0De.js";import"./componentMap-C1K32562.js";import"./useFormItem-DwFiYTSW.js";import"./antd-fbBm7n8h.js";import"./entry/index-rsXJi5X6-1717311563715.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DfGcCe0Q.js";import"./index-CAUq66SI.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-Ba6thmk8.js";import"./copyTextToClipboard-BNaz5MaW.js";import"./index-Bs9gK_PQ.js";import"./index-o3kLrUfg.js";import"./index-HDRnz90D.js";import"./useWindowSizeFn-Cc-uvi4I.js";import"./base64Conver-bBv-IO2K.js";import"./helper-DMB1835e.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DWOOfJYp.js";import"./useForm-YaJmdogr.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-Ct_sYMl9.js";import"./useSortable-Ch7SjqIW.js";import"./download-BxwcALvn.js";const w={class:"p-4"},W=u({__name:"FixedColumn",setup(C){const n=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[r]=s({title:"TableAction组件及固定列示例",api:c,columns:n,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function a(e){}function m(e){}return(e,I)=>(o(),_("div",w,[f(t(p),{onRegister:t(r)},{bodyCell:x(({column:d,record:i})=>[d.key==="action"?(o(),b(t(l),{key:0,actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:a.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:m.bind(null,i)}}]},null,8,["actions","dropDownActions"])):h("",!0)]),_:1},8,["onRegister"])]))}});export{W as default};