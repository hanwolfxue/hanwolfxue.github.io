var k=(h,m,e)=>new Promise((t,l)=>{var f=r=>{try{i(e.next(r))}catch(a){l(a)}},_=r=>{try{i(e.throw(r))}catch(a){l(a)}},i=r=>r.done?t(r.value):Promise.resolve(r.value).then(f,_);i((e=e.apply(h,m)).next())});import{d as x,f as w,w as D,n as A,a7 as R,Z as u,_ as g,F as T,aa as V,m as I,A as S,k as s,u as o,a9 as n,G as y,a0 as b,a8 as $,ab as B}from"./vue-BR4kA91-.js";import{_ as M}from"./DetailModal.vue_vue_type_script_setup_true_lang-DGoOprEy.js";import{_ as N}from"./BasicTable.vue_vue_type_script_setup_true_lang-Dk-hyGQH.js";import"./TableImg.vue_vue_type_style_index_0_lang-BHRjOOWO.js";import{_ as j}from"./index-DgDWXVze.js";import{u as F}from"./useTable-gPQ5jd8E.js";import{b as G}from"./index-HDRnz90D.js";import{e as H,i as U,aU as Z}from"./entry/index-rsXJi5X6-1717311563715.js";import{getColumns as q}from"./data-D9b1RrJj.js";import{f as z}from"./antd-fbBm7n8h.js";import"./index-tkjP2RDT.js";import"./useDescription-BbWW_wom.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DIjD_H4V.js";import"./FormItem.vue_vue_type_script_lang-BgOdR0De.js";import"./componentMap-C1K32562.js";import"./useFormItem-DwFiYTSW.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DfGcCe0Q.js";import"./index-CAUq66SI.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-Ba6thmk8.js";import"./copyTextToClipboard-BNaz5MaW.js";import"./index-Bs9gK_PQ.js";import"./index-o3kLrUfg.js";import"./base64Conver-bBv-IO2K.js";import"./helper-DMB1835e.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DWOOfJYp.js";import"./useForm-YaJmdogr.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-Ct_sYMl9.js";import"./useWindowSizeFn-Cc-uvi4I.js";import"./useSortable-Ch7SjqIW.js";import"./download-BxwcALvn.js";const J=()=>H.get({url:"/error"}),K={class:"p-4"},O=["src"],Rr=x({__name:"index",setup(h){const m=w(),e=w([]),{t}=U(),l=Z(),[f,{setTableData:_}]=F({title:t("sys.errorLog.tableTitle"),columns:q(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=G();D(()=>l.getErrorLogInfoList,p=>{A(()=>{_(z(p))})},{immediate:!0});function a(p){m.value=p,r(!0)}function C(){throw new Error("fire vue error!")}function E(){e.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield J()})}return(p,P)=>{const d=R("a-button");return u(),g("div",K,[(u(!0),g(T,null,V(e.value,c=>I((u(),g("img",{key:c,src:c,alt:""},null,8,O)),[[S,!1]])),128)),s(M,{info:m.value,onRegister:o(i)},null,8,["info","onRegister"]),s(o(N),{onRegister:o(f),class:"error-handle-table"},{toolbar:n(()=>[s(d,{onClick:C,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireVueError")),1)]),_:1}),s(d,{onClick:E,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireResourceError")),1)]),_:1}),s(d,{onClick:L,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:n(({column:c,record:v})=>[c.key==="action"?(u(),$(o(j),{key:0,actions:[{label:o(t)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,v)}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"])])}}});export{Rr as default};
