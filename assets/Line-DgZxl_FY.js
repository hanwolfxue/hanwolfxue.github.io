import{dv as n}from"./useECharts-Tcbcvn35.js";import{g as s}from"./data-A0kLGLbM.js";import{d as c,f as d,o as f,Z as m,_ as p,ag as y}from"./vue-BR4kA91-.js";import"./entry/index-rsXJi5X6-1717311563715.js";import"./antd-fbBm7n8h.js";const L=c({__name:"Line",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(t){const a=d(null),{setOptions:r,echarts:o}=n(a),{barData:i,lineData:e,category:l}=s;return f(()=>{r({backgroundColor:"#0f375f",tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{data:["line","bar"],textStyle:{color:"#ccc"}},xAxis:{data:l,axisLine:{lineStyle:{color:"#ccc"}}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"line",type:"line",smooth:!0,showAllSymbol:"auto",symbol:"emptyCircle",symbolSize:15,data:e},{name:"bar",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new o.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])},data:i},{name:"line",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{color:new o.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])},z:-12,data:e},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{color:"#0f375f"},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:e}]})}),(h,b)=>(m(),p("div",{ref_key:"chartRef",ref:a,style:y({height:t.height,width:t.width})},null,4))}});export{L as default};
