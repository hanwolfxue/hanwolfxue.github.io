import{d as v,f as h,r as x,Z as a,a8 as p,a9 as l,$ as c,k as o,u as r,m as n,A as s,ab as u}from"./vue-BR4kA91-.js";import k from"./Step1-BS_t8Dgf.js";import{_ as N}from"./Step2.vue_vue_type_script_setup_true_lang-CyMd8XdM.js";import{_ as P}from"./Step3.vue_vue_type_script_setup_true_lang-CG5u6ayr.js";import{P as V}from"./index-DuPTCtvv.js";import{bk as i}from"./antd-fbBm7n8h.js";import{_ as b}from"./entry/index-rsXJi5X6-1717311563715.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DIjD_H4V.js";import"./FormItem.vue_vue_type_script_lang-BgOdR0De.js";import"./componentMap-C1K32562.js";import"./useFormItem-DwFiYTSW.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DfGcCe0Q.js";import"./index-DgDWXVze.js";import"./index-HDRnz90D.js";import"./useWindowSizeFn-Cc-uvi4I.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Ch7SjqIW.js";import"./download-BxwcALvn.js";import"./base64Conver-bBv-IO2K.js";import"./index-CAUq66SI.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-Ba6thmk8.js";import"./copyTextToClipboard-BNaz5MaW.js";import"./index-Bs9gK_PQ.js";import"./index-o3kLrUfg.js";import"./helper-DMB1835e.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DWOOfJYp.js";import"./useForm-YaJmdogr.js";import"./data-CaNweXRQ.js";import"./useContentViewHeight-DgW401FW.js";import"./onMountedOrActivated-Ct_sYMl9.js";const B={class:"step-form-form"},C={class:"mt-5"},g=v({name:"FormStepPage",__name:"index",setup(w){const t=h(0),e=x({initStep2:!1,initStep3:!1});function f(m){t.value++,e.initStep2=!0}function _(){t.value--}function d(m){t.value++,e.initStep3=!0}function S(){t.value=0,e.initStep2=!1,e.initStep3=!1}return(m,$)=>(a(),p(r(V),{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:l(()=>[c("div",B,[o(r(i),{current:t.value},{default:l(()=>[o(r(i).Step,{title:"填写转账信息"}),o(r(i).Step,{title:"确认转账信息"}),o(r(i).Step,{title:"完成"})]),_:1},8,["current"])]),c("div",C,[n(o(k,{onNext:f},null,512),[[s,t.value===0]]),e.initStep2?n((a(),p(N,{key:0,onPrev:_,onNext:d},null,512)),[[s,t.value===1]]):u("",!0),e.initStep3?n((a(),p(P,{key:1,onRedo:S},null,512)),[[s,t.value===2]]):u("",!0)])]),_:1}))}}),pt=b(g,[["__scopeId","data-v-778b6ab2"]]);export{pt as default};