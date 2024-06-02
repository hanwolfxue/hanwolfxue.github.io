import{o as d}from"./select-DCZsuxMu.js";import{E as r}from"./antd-fbBm7n8h.js";import{f as o,k as i,G as l}from"./vue-BR4kA91-.js";import"./entry/index-rsXJi5X6-1717311563715.js";function h(){return[{title:"ID",dataIndex:"id",fixed:"left",width:200},{title:"姓名",dataIndex:"name",width:150,filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}]},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:150,sorter:!0,defaultHidden:!0},{title:"开始时间",width:150,sorter:!0,dataIndex:"beginTime"},{title:"结束时间",width:150,sorter:!0,dataIndex:"endTime"}]}function f(){return[{title:"ID",width:150,dataIndex:"id",sorter:!0,sortOrder:"ascend"},{title:"姓名",dataIndex:"name",width:120},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:80}]}function g(){const t=o("姓名:");return[{title:"ID",dataIndex:"id",width:200},{title:"姓名",customHeaderRender(){return i(r,{placeholder:"输入值 更新 自定义title",size:"small",value:t.value,"onUpdate:value":e=>t.value=e},null)},dataIndex:"name",width:120},{title:"地址",dataIndex:"address",sorter:!0,children:[{title:"编号",customHeaderRender(e){return i("div",null,[l("_ "),i("span",{style:"background: #f00; color: #fff;"},[t.value]),l(" _"),e.customTitle])},dataIndex:"no",width:120,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}]},{title:"开始时间",dataIndex:"beginTime",width:120},{title:"结束时间",dataIndex:"endTime",width:120}]}]}function p(){return[{title:"ID",dataIndex:"id",helpMessage:"headerHelpMessage方式1",width:200},{dataIndex:"name",width:120},{dataIndex:"address",width:120,sorter:!0},{title:"编号",dataIndex:"no",width:120,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}]},{title:"开始时间",dataIndex:"beginTime",width:120},{title:"结束时间",dataIndex:"endTime",width:120}]}const n=(t,e)=>({colSpan:e===9?0:1});function x(){return[{title:"ID",dataIndex:"id",width:300,customCell:(t,e)=>({colSpan:e===9?6:1})},{title:"姓名",dataIndex:"name",width:300,customCell:n},{title:"地址",dataIndex:"address",colSpan:2,width:120,sorter:!0,customCell:(t,e)=>({rowSpan:e===2?2:1,colSpan:e===3||e===9?0:1})},{title:"编号",dataIndex:"no",colSpan:0,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}],customCell:n},{title:"开始时间",dataIndex:"beginTime",width:200,customCell:n},{title:"结束时间",dataIndex:"endTime",width:200,customCell:n}]}const s=(t=6)=>{const e=[];for(let a=0;a<t;a++)e.push({field:`field${a}`,label:`字段${a}`,component:"Input",colProps:{xl:12,xxl:8}});return e};function k(){return{labelWidth:100,schemas:[...s(5),{field:"field11",label:"Slot示例",slot:"custom",colProps:{xl:12,xxl:8}}]}}function I(){return(()=>{const t=[];for(let e=0;e<40;e++)t.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});return t})()}function N(){return(()=>{const t=[];for(let e=0;e<40;e++)t.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString(),children:[{id:`l2-${e}-1`,name:"John Brown",age:"1",no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString(),children:[{id:`l3-${e}-1-1`,name:"John Brown",age:"11",no:"11",address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()},{id:`l3-${e}-1-2`,name:"John Brown",age:"12",no:"12",address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()}]},{id:`l2-${e}-2`,name:"John Brown",age:"2",no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString(),children:[{id:`l3-${e}-2-1`,name:"John Brown",age:"21",no:"21",address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()},{id:`l3-${e}-2-2`,name:"John Brown",age:"22",no:"22",address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()}]}]});return t})()}const T=[{title:"序号",type:"seq",fixed:"left",width:"50",align:"center"},{title:"固定列",field:"name",width:150,showOverflow:"tooltip",fixed:"left"},{title:"自适应列",field:"address"},{title:"自定义列(自定义导出)",field:"no",width:200,showOverflow:"tooltip",align:"center",slots:{default:({row:t})=>{const e=`自定义${t.no}`;return[i("div",{class:"text-red-500"},[e])]}},exportMethod:({row:t})=>`自定义${t.no}导出`},{title:"自定义编辑",width:150,field:"name1",align:"center",editRender:{name:"AInput",placeholder:"请点击输入"}},{title:"开始时间",width:150,field:"beginTime",showOverflow:"tooltip",align:"center"},{title:"结束时间",width:150,field:"endTime",showOverflow:"tooltip",align:"center"},{width:160,title:"操作",align:"center",slots:{default:"action"},fixed:"right"}],L=[{field:"field0",title:"field0",itemRender:{name:"AInput"},span:6},{field:"field1",title:"field1",itemRender:{name:"AApiSelect",props:{api:d,resultField:"list",labelField:"name",valueField:"id"}},span:6},{span:12,align:"right",className:"!pr-0",itemRender:{name:"AButtonGroup",children:[{props:{type:"primary",content:"查询",htmlType:"submit"},attrs:{class:"mr-2"}},{props:{type:"default",htmlType:"reset",content:"重置"}}]}}];export{s as getAdvanceSchema,h as getBasicColumns,I as getBasicData,f as getBasicShortColumns,p as getCustomHeaderColumns,k as getFormConfig,x as getMergeHeaderColumns,g as getMultipleHeaderColumns,N as getTreeTableData,T as vxeTableColumns,L as vxeTableFormSchema};