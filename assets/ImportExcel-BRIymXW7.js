import{I as d}from"./index-CGO2XGf_.js";import{_}from"./BasicTable.vue_vue_type_script_setup_true_lang-ByVk3RYY.js";import"./TableImg.vue_vue_type_style_index_0_lang-D9VTOyNB.js";import"./index-DyLlPTSK.js";import{P as x}from"./index-DHJ-N9Yc.js";import{d as h,f as S,a7 as k,Z as a,a8 as l,a9 as m,k as u,u as s,G as v,_ as D,F as E,aa as I}from"./vue-BR4kA91-.js";import"./entry/index-BwJ41R5L-1717470460305.js";import"./antd-BHcOFGwY.js";import"./index-BprAe8AC.js";import"./useWindowSizeFn-CSHZwHVf.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-ChJPyvZY.js";import"./FormItem.vue_vue_type_script_lang-i4JZQVZz.js";import"./componentMap-Dm43PJut.js";import"./useFormItem-SyjpFhfW.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-wfx7fUr-.js";import"./index-BQ8Z-fny.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CSn1F3iD.js";import"./copyTextToClipboard-BxfkKzRs.js";import"./index-D6j_2gvf.js";import"./index-BqSs1kax.js";import"./base64Conver-bBv-IO2K.js";import"./helper-D_O_ef0C.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B9ct2Pmv.js";import"./useForm-B-zFHLB_.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-Ct_sYMl9.js";import"./useSortable-D_syIzkL.js";import"./download-CTUw6po6.js";import"./useContentViewHeight-CbJ2DFmO.js";const ot=h({__name:"ImportExcel",setup(Y){const o=S([]);function f(p){o.value=[];for(const i of p){const{header:e,results:t,meta:{sheetName:r}}=i,c=[];for(const n of e)c.push({title:n,dataIndex:n});o.value.push({title:r,dataSource:t,columns:c})}}return(p,i)=>{const e=k("a-button");return a(),l(s(x),{title:"excel数据导入示例"},{default:m(()=>[u(s(d),{onSuccess:f,dateFormat:"YYYY-MM-DD"},{default:m(()=>[u(e,{class:"m-3"},{default:m(()=>[v(" 导入Excel ")]),_:1})]),_:1}),(a(!0),D(E,null,I(o.value,(t,r)=>(a(),l(s(_),{key:r,title:t.title,columns:t.columns,dataSource:t.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}}});export{ot as default};
