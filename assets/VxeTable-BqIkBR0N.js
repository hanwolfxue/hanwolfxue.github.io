var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(r,o,e)=>o in r?_(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,g=(r,o)=>{for(var e in o||(o={}))k.call(o,e)&&f(r,e,o[e]);if(u)for(var e of u(o))C.call(o,e)&&f(r,e,o[e]);return r};var c=(r,o,e)=>new Promise((s,m)=>{var t=a=>{try{i(e.next(a))}catch(p){m(p)}},n=a=>{try{i(e.throw(a))}catch(p){m(p)}},i=a=>a.done?s(a.value):Promise.resolve(a.value).then(t,n);i((e=e.apply(r,o)).next())});import"./componentMap-DWit1r73.js";import{b as v}from"./entry/index-BEncmqB6-1717590836513.js";import"./helper-C-YKYu2l.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CZYUosjl.js";import"./antd-B_Joh_oh.js";import"./index-DjS0u9eA.js";import"./TableImg.vue_vue_type_style_index_0_lang-CKJP8D9C.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import{_ as y}from"./index-BzLTHwbg.js";import{P as h}from"./index-D8CXPW3Y.js";import{vxeTableColumns as T,vxeTableFormSchema as V}from"./tableData-XYBdEjxk.js";import{V as A}from"./index-C3xGJBD8.js";import{d as b}from"./table-C4LuHv67.js";import{d as B,f as S,r as w,Z as P,a8 as R,a9 as d,k as x,u as l,ac as q}from"./vue-gN4NnATS.js";import"./useFormItem-Cg0dkAdb.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-fyGG3XzR.js";import"./index-C45k99u8.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-C4SiI3rn.js";import"./copyTextToClipboard-6Z3acr_D.js";import"./index-rnSLzISA.js";import"./index-p9DGO2U_.js";import"./base64Conver-bBv-IO2K.js";import"./useWindowSizeFn-IxPVMp8C.js";import"./onMountedOrActivated-D-SrSxhb.js";import"./useSortable-DibPM8bu.js";import"./download-BBdzJm0L.js";import"./useContentViewHeight-QGgUIzf4.js";import"./select-CuPQj1Bs.js";const pe=B({__name:"VxeTable",setup(r){const{createMessage:o}=v(),e=S(),s=w({id:"VxeTable",keepSource:!0,editConfig:{trigger:"click",mode:"cell",showStatus:!0},columns:T,toolbarConfig:{buttons:[{content:"在第一行新增",buttonRender:{name:"AButton",props:{type:"primary",preIcon:"mdi:page-next-outline"},events:{click:()=>{var t;(t=e.value)==null||t.insert({name:"新增的"}),o.success("新增成功")}}}},{content:"在最后一行新增",buttonRender:{name:"AButton",props:{type:"warning"},events:{click:()=>{var t;(t=e.value)==null||t.insertAt({name:"新增的"},-1)}}}}]},formConfig:{enabled:!0,items:V},height:"auto",proxyConfig:{ajax:{query:i=>c(this,[i],function*({page:t,form:n}){return b(g({page:t.currentPage,pageSize:t.pageSize},n))}),queryAll:n=>c(this,[n],function*({form:t}){return yield b(t)})}}}),m=t=>[{label:"详情",onClick:()=>{}},{label:"编辑",onClick:()=>{}},{label:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:()=>{var i;(i=e.value)==null||i.remove(t)}}}];return(t,n)=>(P(),R(l(h),{title:"VxeTable表格",content:"只展示部分操作，详细功能请查看VxeTable官网事例",contentFullHeight:"",fixedHeight:""},{default:d(()=>[x(l(A),q({ref_key:"tableRef",ref:e},s),{action:d(({row:i})=>[x(l(y),{outside:"",actions:m(i)},null,8,["actions"])]),_:1},16)]),_:1}))}});export{pe as default};