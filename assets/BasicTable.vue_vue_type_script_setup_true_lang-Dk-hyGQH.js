var Vt=Object.defineProperty,Yt=Object.defineProperties;var Xt=Object.getOwnPropertyDescriptors;var tt=Object.getOwnPropertySymbols;var Qt=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable;var nt=(n,a,t)=>a in n?Vt(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,k=(n,a)=>{for(var t in a||(a={}))Qt.call(a,t)&&nt(n,t,a[t]);if(tt)for(var t of tt(a))Zt.call(a,t)&&nt(n,t,a[t]);return n},ie=(n,a)=>Yt(n,Xt(a));var oe=(n,a,t)=>new Promise((s,o)=>{var c=i=>{try{u(t.next(i))}catch(l){o(l)}},f=i=>{try{u(t.throw(i))}catch(l){o(l)}},u=i=>i.done?s(i.value):Promise.resolve(i.value).then(c,f);u((t=t.apply(n,a)).next())});import{d as se,Z as A,_ as fe,ae as ye,G as re,a0 as U,k as K,u as e,c as T,f as N,w as de,l as Be,J as we,r as ht,h as mt,o as Ye,n as Ke,ao as en,K as pt,a7 as vt,a8 as j,a9 as _,$ as ue,a1 as be,ab as Y,F as tn,aa as Je,m as Ct,A as St,ah as nn,e as an,ad as at,aj as ze,ak as Le,ac as ot}from"./vue-BR4kA91-.js";import{_ as on}from"./BasicForm.vue_vue_type_script_setup_true_lang-DIjD_H4V.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DWOOfJYp.js";import{a3 as lt,h as Ae,i as xe,J as Ue,X as ln,a4 as sn,F as cn,I as rn,a5 as un,V as fn,B as st,a6 as wt,a7 as dn,Q as gn,_ as hn,v as qe,G as mn,r as pn,P as vn}from"./entry/index-rsXJi5X6-1717311563715.js";import"./componentMap-C1K32562.js";import{u as Cn}from"./useForm-YaJmdogr.js";import{aM as Sn,ak as Ce,aN as wn,aO as yn,f as Se,e as X,l as Xe,b as bn,aP as _n,aQ as xn,ag as ct,o as Qe,aL as Rn,a5 as Oe,aR as Tn,T as Fe,a6 as yt,U as In,d as it,D as kn,x as Me,aS as Fn,aT as Kn,aB as Pn,aA as An,aG as Dn,aU as bt,ad as $n}from"./antd-fbBm7n8h.js";import{a as En,p as le,b as Ve,u as _t,c as On,d as Bn}from"./TableImg.vue_vue_type_style_index_0_lang-BHRjOOWO.js";import{P as Ze,a as Hn,D as Nn,b as Pe,A as je,R as ve,F as zn,u as De,c as Ln}from"./index-DgDWXVze.js";import{b as rt}from"./uuid-D0SLUWHI.js";import Mn from"./sortable.esm-CoO8jRpa.js";const Un={class:"edit-header-cell"},ut=se({name:"EditTableHeaderIcon",__name:"EditTableHeaderIcon",props:{title:{type:String,default:""}},setup(n){return(a,t)=>(A(),fe("span",Un,[ye(a.$slots,"default"),re(" "+U(n.title)+" ",1),K(e(Sn))]))}}),jn=se({name:"TableHeaderCell",components:{EditTableHeaderCell:ut,BasicHelp:lt},props:{column:{type:Object,default:()=>({})}},setup(n){const{prefixCls:a}=Ae("basic-table-header-cell"),t=T(()=>{var c;return!!((c=n.column)!=null&&c.edit)}),s=T(()=>{var f;const c=n.column;return typeof c.customHeaderRender=="function"?c.customHeaderRender(c):(c==null?void 0:c.customTitle)||((f=n.column)==null?void 0:f.title)}),o=T(()=>{var c;return(c=n.column)==null?void 0:c.helpMessage});return()=>K("div",null,[t.value?K(ut,null,{default:()=>[s.value]}):K("span",{class:"default-header-cell"},[s.value]),o.value&&K(lt,{text:o.value,class:`${a}__help`},null)])}});function Gn({page:n,type:a,originalElement:t}){return a==="prev"?n===0?null:Be(wn):a==="next"?n===1?null:Be(yn):t}function Wn(n){const{t:a}=xe(),t=N({}),s=N(!0);de(()=>e(n).pagination,l=>{!Ce(l)&&l&&(t.value=k(k({},e(t)),l!=null?l:{}))});const o=T(()=>{const{pagination:l}=e(n);return!e(s)||Ce(l)&&!l?!1:k(k({current:1,size:"small",defaultPageSize:Ze,showTotal:S=>a("component.table.total",{total:S}),showSizeChanger:!0,pageSizeOptions:Hn,itemRender:Gn,showQuickJumper:!0},Ce(l)?{}:l),e(t))});function c(l){const S=e(o);t.value=k(k({},Ce(S)?{}:S),l)}function f(){return e(o)}function u(){return e(s)}function i(l){return oe(this,null,function*(){s.value=l})}return{getPagination:f,getPaginationInfo:o,setShowPagination:i,getShowPagination:u,setPagination:c}}function qn(n){return({text:a,record:t,index:s})=>(we(t).onValid=()=>oe(this,null,function*(){if(Ue(t==null?void 0:t.validCbs)){const o=((t==null?void 0:t.validCbs)||[]).map(f=>f());return(yield Promise.all(o)).every(f=>!!f)}else return!1}),we(t).onEdit=(o,c=!1)=>oe(this,null,function*(){var f,u;return c||(t.editable=o),!o&&c?(yield t.onValid())&&(yield(f=t.onSubmitEdit)==null?void 0:f.call(t))?(t.editable=!1,!0):!1:(!o&&!c&&((u=t.onCancelEdit)==null||u.call(t)),!0)}),Be(En,{value:a,record:t,column:n,index:s}))}function xt(n,a){const{key:t,dataIndex:s,children:o}=n;n.align=n.align||Nn,a&&(t||(n.key=typeof s=="object"?s.join("-"):s),Ce(n.ellipsis)||Object.assign(n,{ellipsis:a})),o&&o.length&&Rt(o,!!a)}function Rt(n,a){n&&n.forEach(t=>{const{children:s}=t;xt(t,a),Rt(s,a)})}function Jn(n,a,t){const{t:s}=xe(),{showIndexColumn:o,indexColumnProps:c,isTreeTable:f}=e(n);let u=!1;if(e(f)||(t.forEach(()=>{const l=t.findIndex(S=>S.flag===Pe);o?u=l===-1:!o&&l!==-1&&t.splice(l,1)}),!u))return;const i=t.some(l=>l.fixed==="left");t.unshift(k(k({flag:Pe,width:60,title:s("component.table.index"),align:"center",customRender:({index:l})=>{const S=e(a);if(Ce(S))return`${l+1}`;const{current:I=1,pageSize:O=Ze}=S;return((I<1?1:I)-1)*O+l+1}},i?{fixed:"left"}:{}),c))}function Vn(n,a){const{actionColumn:t}=e(n);if(!t)return;const s=a.findIndex(o=>o.flag===je);s===-1&&a.push(ie(k(ie(k({},a[s]),{fixed:"right"}),t),{flag:je}))}function Yn(n,a){const t=N(e(n).columns);let s=e(n).columns;const o=T(()=>{const C=Se(e(t));if(Jn(n,a,C),Vn(n,C),!C)return[];const{ellipsis:r}=e(n);return C.forEach(g=>{const{customRender:h,slots:v}=g;xt(g,Reflect.has(g,"ellipsis")?!!g.ellipsis:!!r&&!h&&!v)}),C});function c(C){const r=C.ifShow;let g=!0;return Ce(r)&&(g=r),X(r)&&(g=r(C)),g}const{hasPermission:f}=ln(),u=T(()=>{const C=ft(e(o)),r=h=>{const{slots:v,customRender:w,format:x,edit:L,editRow:F,flag:D}=h;(!v||!(v!=null&&v.title))&&(h.customTitle=h.title);const G=[Pe,je].includes(D);return!w&&x&&!L&&!G&&(h.customRender=({text:q,record:ce,index:ge})=>Xn(q,x,ce,ge)),(L||F)&&!G&&(h.customRender=qn(h)),ht(h)};return Se(C).filter(h=>f(h.auth)&&c(h)).map(h=>{var v;return(v=h.children)!=null&&v.length&&(h.children=h.children.map(r)),r(h)})});de(()=>e(n).columns,C=>{var r;t.value=C,s=(r=C==null?void 0:C.filter(g=>!g.flag))!=null?r:[]});function i(C,r){!C||!r||s.forEach(g=>{if(g.dataIndex===C){Object.assign(g,r);return}})}function l(C){const r=Se(C);if(!Ue(r))return;if(r.length<=0){t.value=[];return}const g=r[0],h=s.map(v=>v.dataIndex);if(!Xe(g)&&!Ue(g))t.value=r;else{const v=r.map(x=>x.toString()),w=[];s.forEach(x=>{var L;w.push(ie(k({},x),{defaultHidden:!v.includes(((L=x.dataIndex)==null?void 0:L.toString())||x.key)}))}),bn(h,r)||w.sort((x,L)=>{var F,D;return v.indexOf((F=x.dataIndex)==null?void 0:F.toString())-v.indexOf((D=L.dataIndex)==null?void 0:D.toString())}),t.value=w}}function S(C){const{ignoreIndex:r,ignoreAction:g,sort:h}=C||{};let v=we(e(o));return r&&(v=v.filter(w=>w.flag!==Pe)),g&&(v=v.filter(w=>w.flag!==je)),h&&(v=ft(v)),v}function I(){return s}function O(C){Ue(C)&&(s=C.filter(r=>!r.flag))}function z(C,r){r.width=C}return{getColumnsRef:o,getCacheColumns:I,getColumns:S,setColumns:l,setColumnWidth:z,getViewColumns:u,setCacheColumnsByField:i,setCacheColumns:O}}function ft(n){const a=[],t=[],s=[];for(const u of n){if(u.fixed==="left"){a.push(u);continue}if(u.fixed==="right"){t.push(u);continue}s.push(u)}const o=u=>!u.defaultHidden,c=[...a,...s,...t].filter(o),f=[...c];for(;f.length;){const u=f[0];Array.isArray(u.children)?(u.children=u.children.filter(o),f.shift(),f.unshift(...u.children)):f.shift()}return c}function Xn(n,a,t,s){if(!a)return n;if(X(a))return a(n,t,s);try{const o="date|";if(Xe(a)&&a.startsWith(o)&&n){const c=a.replace(o,"");return c?sn(n,c):n}if(_n(a))return a.get(n)}catch(o){return n}}function Qn(n,{getPaginationInfo:a,setPagination:t,setLoading:s,getFieldsValue:o,clearSelectedRowKeys:c,tableData:f},u){const i=ht({sortInfo:{},filterInfo:{}}),l=N([]),S=N({}),I=N({});mt(()=>{f.value=e(l)}),de(()=>e(n).dataSource,()=>{const{dataSource:p,api:b}=e(n);!b&&p&&(l.value=p)},{immediate:!0});function O(p,b,$){const{clearSelectOnPageChange:B,sortFn:H,filterFn:J}=e(n);B&&c(),t(p);const P={};if($&&X(H)){const V=H($);i.sortInfo=V,P.sortInfo=V}if(b&&X(J)){const V=J(b);i.filterInfo=V,P.filterInfo=V}F(P)}function z(p){!p||!Array.isArray(p)||p.forEach(b=>{b[ve]||(b[ve]=rt()),b.children&&b.children.length&&z(b.children)})}const C=T(()=>e(n).autoCreateKey&&!e(n).rowKey),r=T(()=>{const{rowKey:p}=e(n);return e(C)?ve:p}),g=N([]);de(()=>l.value,()=>{const p=e(l);if((!p||p.length===0)&&(g.value=e(l)),e(C)){const b=p[0],$=p[p.length-1];if(b&&$&&(!b[ve]||!$[ve])){const B=Se(e(l));B.forEach(H=>{H[ve]||(H[ve]=rt()),H.children&&H.children.length&&z(H.children)}),l.value=B}}g.value=e(l)},{deep:!0});function h(p,b,$){return oe(this,null,function*(){return l.value[p]&&(l.value[p][b]=$),l.value[p]})}function v(p,b){const $=L(p);if($){for(const B in $)Reflect.has(b,B)&&($[B]=b[B]);return $}}function w(p){var B;if(!l.value||l.value.length==0)return;const b=Array.isArray(p)?p:[p];function $(H,J){const P=V(H,J);if(P===null||P.index===-1)return;P.data.splice(P.index,1);function V(Z,he){var me;if(Z==null)return null;for(let ee=0;ee<Z.length;ee++){const te=Z[ee];if(le(e(r),te)===he)return{index:ee,data:Z};if(((me=te.children)==null?void 0:me.length)>0){const pe=V(te.children,he);if(pe!=null)return pe}}return null}}for(const H of b)$(l.value,H),$(e(n).dataSource,H);t({total:(B=e(n).dataSource)==null?void 0:B.length})}function x(p,b){var B;b=b!=null?b:(B=l.value)==null?void 0:B.length;const $=rn(p)?[p]:p;return e(l).splice(b,0,...$),e(l)}function L(p){if(!l.value||l.value.length===0)return;const{childrenColumnName:b="children"}=e(n);return(B=>{let H;return B.some(function J(P){return le(e(r),P)===p?(H=P,!0):P[b]&&P[b].some(J)}),H})(l.value)}function F(p){return oe(this,null,function*(){var he,me,ee;const{api:b,searchInfo:$,defSort:B,fetchSetting:H,beforeFetch:J,afterFetch:P,useSearchForm:V,pagination:Z}=e(n);if(!(!b||!X(b)))try{s(!0);const{pageField:te,sizeField:pe,listField:Re,totalField:Te}=Object.assign({},zn,H);let _e={};const{current:Ie=1,pageSize:ke=Ze}=e(a);Ce(Z)&&!Z||Ce(a)?_e={}:(_e[te]=p&&p.page||Ie,_e[pe]=ke);const{sortInfo:d={},filterInfo:y}=i;let R=xn(_e,V?o():{},$,(he=p==null?void 0:p.searchInfo)!=null?he:{},B,d,y,(me=p==null?void 0:p.sortInfo)!=null?me:{},(ee=p==null?void 0:p.filterInfo)!=null?ee:{});J&&X(J)&&(R=(yield J(R))||R),I.value=R;const m=yield b(R);S.value=m;const E=Array.isArray(m);let ne=E?m:ct(m,Re);const ae=E?m.length:ct(m,Te);if(Number(ae)){const He=Math.ceil(ae/ke);if(Ie>He)return t({current:He}),yield F(p)}return P&&X(P)&&(ne=(yield P(ne))||ne),l.value=ne,t({total:ae||0}),p&&p.page&&t({current:p.page||1}),u("fetch-success",{items:e(ne),total:ae}),ne}catch(te){u("fetch-error",te),l.value=[],t({total:0})}finally{s(!1)}})}function D(p){l.value=p}function G(){return g.value}function q(){return S.value}function ce(p){return oe(this,null,function*(){return yield F(p)})}function ge(){return I.value}return Ye(()=>{cn(()=>{e(n).immediate&&F()},16)}),{getDataSourceRef:T(()=>g.value),getDataSource:G,getRawDataSource:q,searchInfoRef:I,getSearchInfo:ge,getRowKey:r,setTableData:D,getAutoCreateKey:C,fetch:F,reload:ce,updateTableData:h,updateTableDataRecord:v,deleteTableDataRecord:w,insertTableDataRecord:x,findTableDataRecord:L,handleTableChange:O}}function Zn(n){const a=N(e(n).loading);de(()=>e(n).loading,o=>{a.value=o});const t=T(()=>e(a));function s(o){a.value=o}return{getLoading:t,setLoading:s}}function ea(n,a,t){const s=N([]),o=N([]),c=T(()=>{const{rowSelection:r}=e(n);return r?k({selectedRowKeys:e(s),onChange:(g,h,v)=>{var w,x;if(v)(w=r.onChange)==null||w.call(r,g,h);else{const L=a.value.map(F=>le(e(u),F));for(const F of s.value.filter(D=>L.includes(D)))if(g.findIndex(D=>D===F)<0){const D=s.value.findIndex(G=>G===F);D>-1&&(s.value.splice(D,1),o.value.splice(D,1))}for(const F of g)if(s.value.findIndex(G=>G===F)<0){s.value.push(F);const G=h.find(q=>le(e(u),q)===F);G&&o.value.push(G)}i(s.value),(x=r.onChange)==null||x.call(r,s.value,o.value)}}},Qe(r,["onChange"])):null});de(()=>{var r;return(r=e(n).rowSelection)==null?void 0:r.selectedRowKeys},r=>{i(r)}),de(()=>e(s),()=>{Ke(()=>{const{rowSelection:r}=e(n);if(r){const{onChange:g}=r;g&&X(g)&&g(O(),z(),!0)}t("selection-change",{keys:O(),rows:z()})})},{deep:!0});const f=T(()=>e(n).autoCreateKey&&!e(n).rowKey),u=T(()=>{const{rowKey:r}=e(n);return e(f)?ve:r});function i(r){var w;s.value=r||[];const g=we(e(a)).concat(we(e(o))),h=un(g,x=>r==null?void 0:r.includes(le(e(u),x)),{children:(w=n.value.childrenColumnName)!=null?w:"children"}),v=[];r==null||r.forEach(x=>{const L=h.find(F=>le(e(u),F)===x);L?v.push(L):g[0]&&v.push({[Ve(e(u),g[0])]:x})}),o.value=v}function l(r){o.value=r,s.value=o.value.map(g=>le(e(u),g))}function S(){o.value=[],s.value=[]}function I(r){const h=e(s).findIndex(v=>v===r);h!==-1&&e(s).splice(h,1)}function O(){return e(s)}function z(){return e(o)}function C(){return e(c)}return{getRowSelection:C,getRowSelectionRef:c,getSelectRows:z,getSelectRowKeys:O,setSelectedRowKeys:i,clearSelectedRowKeys:S,deleteSelectRowByKey:I,setSelectedRows:l}}function ta(n,a){let t;function s(c){return oe(this,null,function*(){var i;const{id:f}=c,u=t==null?void 0:t.querySelector(`[data-row-key="${f}"]`);yield Ke(),t==null||t.scrollTo({top:(i=u==null?void 0:u.offsetTop)!=null?i:0,behavior:"smooth"})})}function o(c){const f=e(n);if(!f)return;const u=f.$el;if(!u||!t&&(t=u.querySelector(".ant-table-body"),!t))return;const i=e(a);if(i)if(c==="top")s(i[0]);else if(c==="bottom")s(i[i.length-1]);else{const l=i.find(S=>S.id===c);l&&s(l)}}return{scrollTo:o}}function na(n,{setSelectedRowKeys:a,getSelectRowKeys:t,getAutoCreateKey:s,clearSelectedRowKeys:o,emit:c}){return{customRow:(u,i)=>({onClick:l=>{l==null||l.stopPropagation();function S(){var v;const{rowSelection:I,rowKey:O,clickToRowSelect:z}=e(n);if(!I||!z)return;const C=t()||[],r=le(O,u,e(s));if(!r)return;if(I.type==="checkbox"){const w=(v=l.composedPath)==null?void 0:v.call(l).find(F=>F.tagName==="TR");if(!w)return;const x=w.querySelector("input[type=checkbox]");if(!x||x.hasAttribute("disabled"))return;if(!C.includes(r)){C.push(r),a(C);return}const L=C.findIndex(F=>F===r);C.splice(L,1),a(C);return}if(I.type==="radio"){if(!C.includes(r)){C.length&&o(),a([r]);return}o()}}S(),c("row-click",u,i,l)},onDblclick:l=>{c("row-dbClick",u,i,l)},onContextmenu:l=>{c("row-contextmenu",u,i,l)},onMouseenter:l=>{c("row-mouseenter",u,i,l)},onMouseleave:l=>{c("row-mouseleave",u,i,l)}})}}function aa(n,a){function t(s,o){const{striped:c,rowClassName:f}=e(n),u=[];return c&&u.push((o||0)%2===1?`${a}-row__striped`:""),f&&X(f)&&u.push(f(s,o)),u.filter(i=>!!i).join(" ")}return{getRowClassName:t}}const oa=["data-no"],la=se({name:"ColumnSetting",__name:"ColumnSetting",props:{cache:{type:Boolean,default:()=>!1}},emits:["columns-change"],setup(n,{emit:a}){const t=_t(),s=a,o=en(),{t:c}=xe(),{prefixCls:f}=Ae("basic-column-setting"),u=pt(),i=De(),l=n,S=()=>X(u.getPopupContainer)?u.getPopupContainer():wt();let I=!1,O=!1,z,C=[],r=!1,g=!1;const h=N([]),v=N(null),w=N([]);de(w,()=>{r&&(h.value.filter(d=>w.value.includes(d.value)).forEach(d=>{d.column.defaultHidden=!1}),h.value.filter(d=>!w.value.includes(d.value)).forEach(d=>{d.column.defaultHidden=!0,d.fixed=void 0}),ee(),P(),l.cache&&ge())});const x=N(!1),L=()=>{w.value.length<h.value.length?w.value=h.value.map(d=>d.value):w.value=[]},F=T(()=>w.value.length>0&&w.value.length<h.value.length),D=N(!1),G=d=>{te(d.target.checked),l.cache&&typeof o.name=="string"&&t.setShowIndexColumn(o.name,d.target.checked)},q=N(!1),ce=d=>{pe(d.target.checked),l.cache&&typeof o.name=="string"&&t.setShowRowSelection(o.name,d.target.checked)},ge=()=>{typeof o.name=="string"&&t.setColumns(o.name,h.value)},p=()=>{D.value=I,G({target:{checked:I}}),q.value=O,ce({target:{checked:O}}),h.value=Se(C),Re()},b=(d,y)=>{y==="left"?!d.fixed||d.fixed==="right"?d.fixed="left":d.fixed=void 0:y==="right"&&(!d.fixed||d.fixed==="left"?d.fixed="right":d.fixed=void 0),P(),l.cache&&ge()},$=()=>oe(this,null,function*(){if(v.value){const d=v.value.$el;Array.from(d.children).forEach(y=>d.removeChild(y))}yield Ke()}),B=d=>{if(d){if("ifShow"in d){if(typeof d.ifShow=="boolean")return d.ifShow;if(d.ifShow)return d.ifShow(d)}return!0}return!1},H=()=>i.getColumns({ignoreIndex:!0,ignoreAction:!0}).filter(d=>B(d)),J=d=>{g=!0,i==null||i.setColumns(d);const y=d.map(R=>({dataIndex:R.dataIndex?R.dataIndex.toString():"",fixed:R.fixed,visible:!R.defaultHidden}));s("columns-change",y)},P=()=>{var m;const d=Se(i.getColumns());let y=d.filter(E=>E.flag!==Pe&&(E.fixed==="left"||E.fixed===!0)).length;D.value&&y++;for(const E of h.value){const ne=d.findIndex(ae=>ae.dataIndex===E.value);if(ne>-1){const ae=d[ne];ae.defaultHidden=(m=E.column)==null?void 0:m.defaultHidden,ae.fixed=E.fixed,d.splice(ne,1),d.splice(y++,0,ae)}}const R=d.findIndex(E=>E.dataIndex==="action");if(R>-1){const E=d.splice(R,1);d.push(E[0])}J(d)},V=()=>oe(this,null,function*(){if(yield Ke(),v.value){const d=v.value.$el;Mn.create(e(d),{animation:500,delay:400,delayOnTouchOnly:!0,handle:".table-column-drag-icon ",dataIdAttr:"data-no",onEnd:y=>{const{oldIndex:R,newIndex:m}=y;if(it(R)||it(m)||R===m)return;const E=Se(h.value);R>m?(E.splice(m,0,E[R]),E.splice(R+1,1)):(E.splice(m+1,0,E[R]),E.splice(R,1)),h.value=E,P(),l.cache&&ge()}})}}),Z=()=>{if(typeof o.name=="string"){let d=t.getColumns(o.name);if(d&&JSON.stringify(h.value.map(y=>({value:y.value,label:y.label})))!==JSON.stringify(d.map(y=>({value:y.value,label:y.label})))){const y=h.value.reduce((R,m)=>(R[m.value]=m.label,R),{});if(Array.isArray(d)){d=d.filter(m=>y[m.value]),d.forEach(m=>{m.label=y[m.value]});const R=d.map(m=>m.value);d=d.concat(h.value.filter(m=>!R.includes(m.value))),t.setColumns(o.name,d)}}}},he=()=>{if(typeof o.name=="string"){const d=t.getShowIndexColumn(o.name);typeof d=="boolean"&&(D.value=I&&d);const y=t.getShowRowSelection(o.name);typeof y=="boolean"&&(q.value=O&&y)}if(G({target:{checked:D.value}}),ce({target:{checked:q.value}}),typeof o.name=="string"){const d=t.getColumns(o.name);Array.isArray(d)&&(h.value=d)}},me=()=>{w.value=h.value.filter(d=>{var y;return!((y=d.column)!=null&&y.defaultHidden)}).map(d=>d.value)},ee=()=>{x.value=h.value.length===w.value.length},te=d=>{g=!0,i.setProps({showIndexColumn:d})},pe=d=>{g=!0,i.setProps({rowSelection:d?ie(k({},Qe(z,["selectedRowKeys"])),{fixed:!0}):void 0})},Re=()=>{me(),ee(),te(D.value),pe(q.value),P()},Te=()=>oe(this,null,function*(){var d;if(!r){const y=H();(d=i.setCacheColumns)==null||d.call(i,y);const R=[];for(const m of y)R.push({label:typeof m.title=="string"?m.title:m.customTitle==="string"?m.customTitle:"",value:typeof m.dataIndex=="string"?m.dataIndex:m.title==="string"?m.title:"",column:{defaultHidden:m.defaultHidden},fixed:m.fixed});I=i.getBindValues.value.showIndexColumn||!1,z=i.getRowSelection(),O=!!z,C=R,D.value=I,q.value=O,h.value=Se(R),l.cache&&Z(),l.cache&&he(),Re(),r=!0}});oe(this,null,function*(){yield $(),Te()});const Ie=T(()=>i==null?void 0:i.getColumns()),ke=T(()=>i==null?void 0:i.getBindValues);return Ye(()=>{de([Ie,ke],()=>{g?g=!1:(r=!1,Te())})}),(d,y)=>{const R=vt("a-button");return A(),j(e(Fe),{placement:"top"},{title:_(()=>[ue("span",null,U(e(c)("component.table.settingColumn")),1)]),default:_(()=>[K(e(Rn),{placement:"bottomLeft",trigger:"click",onOpenChange:V,overlayClassName:`${e(f)}__column-list`,getPopupContainer:S},{title:_(()=>[ue("div",{class:be(`${e(f)}__popover-title`)},[K(e(Oe),{indeterminate:F.value,checked:x.value,"onUpdate:checked":y[0]||(y[0]=m=>x.value=m),onChange:L},{default:_(()=>[re(U(e(c)("component.table.settingColumnShow")),1)]),_:1},8,["indeterminate","checked"]),K(e(Oe),{checked:D.value,"onUpdate:checked":y[1]||(y[1]=m=>D.value=m),onChange:G},{default:_(()=>[re(U(e(c)("component.table.settingIndexColumnShow")),1)]),_:1},8,["checked"]),e(O)?(A(),j(e(Oe),{key:0,checked:q.value,"onUpdate:checked":y[2]||(y[2]=m=>q.value=m),onChange:ce},{default:_(()=>[re(U(e(c)("component.table.settingSelectColumnShow")),1)]),_:1},8,["checked"])):Y("",!0),K(R,{size:"small",type:"link",onClick:p},{default:_(()=>[re(U(e(c)("common.resetText")),1)]),_:1})],2)]),content:_(()=>[K(e(fn),null,{default:_(()=>[K(e(Oe).Group,{value:w.value,"onUpdate:value":y[3]||(y[3]=m=>w.value=m),ref_key:"columnOptionsRef",ref:v},{default:_(()=>[(A(!0),fe(tn,null,Je(h.value,m=>(A(),fe("div",{key:m.value,class:be(`${e(f)}__check-item`),"data-no":m.value},[K(e(Tn),{class:"table-column-drag-icon"}),K(e(Oe),{value:m.value},{default:_(()=>[re(U(m.label),1)]),_:2},1032,["value"]),K(e(Fe),{placement:"bottomLeft",mouseLeaveDelay:.4,getPopupContainer:S},{title:_(()=>[re(U(e(c)("component.table.settingFixedLeft")),1)]),default:_(()=>[K(st,{icon:"line-md:arrow-align-left",class:be([`${e(f)}__fixed-left`,{active:m.fixed==="left",disabled:m.value?!w.value.includes(m.value):!0}]),onClick:E=>b(m,"left")},null,8,["class","onClick"])]),_:2},1024),K(e(yt),{type:"vertical"}),K(e(Fe),{placement:"bottomLeft",mouseLeaveDelay:.4,getPopupContainer:S},{title:_(()=>[re(U(e(c)("component.table.settingFixedRight")),1)]),default:_(()=>[K(st,{icon:"line-md:arrow-align-left",class:be([`${e(f)}__fixed-right`,{active:m.fixed==="right",disabled:m.value?!w.value.includes(m.value):!0}]),onClick:E=>b(m,"right")},null,8,["class","onClick"])]),_:2},1024)],10,oa))),128))]),_:1},8,["value"])]),_:1})]),default:_(()=>[K(e(In))]),_:1},8,["overlayClassName"])]),_:1})}}}),sa=se({name:"SizeSetting",__name:"SizeSetting",setup(n){const a=_t(),t=De(),{t:s}=xe(),o=N([t.getSize()]),c=({key:f})=>{o.value=[f],a.setTableSize(f),t.setProps({size:f})};return Ye(()=>{o.value=[a.getTableSize],t.setProps({size:o.value[0]})}),(f,u)=>(A(),j(e(Fe),{placement:"top"},{title:_(()=>[ue("span",null,U(e(s)("component.table.settingDens")),1)]),default:_(()=>[K(e(kn),{placement:"bottom",trigger:["click"],getPopupContainer:e(wt)},{overlay:_(()=>[K(e(Me),{onClick:c,selectable:"",selectedKeys:o.value,"onUpdate:selectedKeys":u[0]||(u[0]=i=>o.value=i)},{default:_(()=>[K(e(Me).Item,{key:"default"},{default:_(()=>[ue("span",null,U(e(s)("component.table.settingDensDefault")),1)]),_:1}),K(e(Me).Item,{key:"middle"},{default:_(()=>[ue("span",null,U(e(s)("component.table.settingDensMiddle")),1)]),_:1}),K(e(Me).Item,{key:"small"},{default:_(()=>[ue("span",null,U(e(s)("component.table.settingDensSmall")),1)]),_:1})]),_:1},8,["selectedKeys"])]),default:_(()=>[K(e(Fn))]),_:1},8,["getPopupContainer"])]),_:1}))}}),ca=se({name:"RedoSetting",__name:"RedoSetting",setup(n){const a=De(),{t}=xe();function s(){a.reload()}return(o,c)=>(A(),j(e(Fe),{placement:"top"},{title:_(()=>[ue("span",null,U(e(t)("common.redo")),1)]),default:_(()=>[K(e(Kn),{onClick:s})]),_:1}))}}),ia=se({name:"FullScreenSetting",__name:"FullScreenSetting",setup(n){const a=De(),{t}=xe(),{toggle:s,isFullscreen:o}=dn(a.wrapRef);return(c,f)=>(A(),j(e(Fe),{placement:"top"},{title:_(()=>[ue("span",null,U(e(t)("component.table.settingFullScreen")),1)]),default:_(()=>[e(o)?(A(),j(e(An),{key:1,onClick:e(s)},null,8,["onClick"])):(A(),j(e(Pn),{key:0,onClick:e(s)},null,8,["onClick"]))]),_:1}))}}),ra={class:"table-settings"},ua=se({name:"TableSetting",__name:"index",props:{setting:{type:Object,default:()=>({})}},emits:["columns-change"],setup(n,{emit:a}){const t=n,s=a,o=De(),c=T(()=>k({redo:!0,size:!0,setting:!0,settingCache:!1,fullScreen:!1},t.setting));function f(i){s("columns-change",i)}function u(){return o?e(o.wrapRef):document.body}return(i,l)=>(A(),fe("div",ra,[c.value.redo?(A(),j(ca,{key:0,getPopupContainer:u})):Y("",!0),c.value.size?(A(),j(sa,{key:1,getPopupContainer:u})):Y("",!0),c.value.setting?(A(),j(la,{key:2,onColumnsChange:f,getPopupContainer:u,cache:c.value.settingCache},null,8,["cache"])):Y("",!0),c.value.fullScreen?(A(),j(ia,{key:3,getPopupContainer:u})):Y("",!0)]))}}),fa=se({name:"BasicTableTitle",__name:"TableTitle",props:{title:{type:[Function,String]},getSelectRows:{type:Function},helpMessage:{type:[String,Array]}},setup(n){const a=n,{prefixCls:t}=Ae("basic-table-title"),s=T(()=>{const{title:o,getSelectRows:c=()=>{}}=a;let f=o;return X(o)&&(f=o({selectRows:c()})),f});return(o,c)=>s.value?(A(),j(e(gn),{key:0,class:be(e(t)),helpMessage:n.helpMessage},{default:_(()=>[re(U(s.value),1)]),_:1},8,["class","helpMessage"])):Y("",!0)}}),da={key:0},ga={key:1},ha=se({name:"TableSelectBar",__name:"TableSelectionBar",props:{count:{default:()=>0},clearSelectedRowKeys:{}},setup(n){const{t:a}=xe(),{prefixCls:t}=Ae("table-select-bar"),s=n;return(o,c)=>{const f=vt("a-button");return A(),j(e(Dn),{type:"info",showIcon:"",class:be([e(t)])},{message:_(()=>[s.count>0?(A(),fe("span",da,U(e(a)("component.table.selectionBarTips",{count:s.count})),1)):(A(),fe("span",ga,U(e(a)("component.table.selectionBarEmpty")),1)),Ct(K(f,{type:"link",onClick:o.clearSelectedRowKeys,size:"small"},{default:_(()=>[re(U(e(a)("component.table.selectionBarClear")),1)]),_:1},8,["onClick"]),[[St,s.count>0]])]),_:1},8,["class"])}}}),ma=hn(ha,[["__scopeId","data-v-80ee960a"]]),pa={style:{width:"100%"}},va={key:0,style:{margin:"5px"}},Ca={key:1,style:{margin:"5px"}},Sa={class:"flex items-center"},wa=se({name:"BasicTableHeader",__name:"TableHeader",props:{title:{type:[Function,String]},tableSetting:{type:Object},showTableSetting:{type:Boolean},titleHelpMessage:{type:[String,Array],default:""},clearSelectedRowKeys:{type:Function},count:{type:Number,default:0},showSelectionBar:{type:Boolean,default:!1}},emits:["columns-change"],setup(n,{emit:a}){const t=n,s=a,{prefixCls:o}=Ae("basic-table-header");function c(f){s("columns-change",f)}return(f,u)=>(A(),fe("div",pa,[f.$slots.headerTop?(A(),fe("div",va,[ye(f.$slots,"headerTop")])):Y("",!0),n.showSelectionBar?(A(),fe("div",Ca,[K(ma,{clearSelectedRowKeys:t.clearSelectedRowKeys,count:t.count},null,8,["clearSelectedRowKeys","count"])])):Y("",!0),ue("div",Sa,[f.$slots.tableTitle?ye(f.$slots,"tableTitle",{key:0}):Y("",!0),!f.$slots.tableTitle&&n.title?(A(),j(fa,{key:1,helpMessage:n.titleHelpMessage,title:n.title},null,8,["helpMessage","title"])):Y("",!0),ue("div",{class:be(`${e(o)}__toolbar`)},[ye(f.$slots,"toolbar"),f.$slots.toolbar&&n.showTableSetting?(A(),j(e(yt),{key:0,type:"vertical"})):Y("",!0),n.showTableSetting?(A(),j(ua,{key:1,setting:n.tableSetting,onColumnsChange:c},null,8,["setting"])):Y("",!0)],2)])]))}});function ya(n,a,t,s){return{getHeaderProps:T(()=>{const{title:c,showTableSetting:f,titleHelpMessage:u,tableSetting:i,showSelectionBar:l}=e(n),S=!a.tableTitle&&!c&&!a.toolbar&&!f;return S&&!Xe(c)?{}:{title:S?null:()=>Be(wa,{title:c,titleHelpMessage:u,showTableSetting:f,tableSetting:i,onColumnsChange:t.onColumnsChange,clearSelectedRowKeys:s.clearSelectedRowKeys,count:s.getSelectRowKeys().length,showSelectionBar:l},k(k(k({},a.toolbar?{toolbar:()=>qe(a,"toolbar")}:{}),a.tableTitle?{tableTitle:()=>qe(a,"tableTitle")}:{}),a.headerTop?{headerTop:()=>qe(a,"headerTop")}:{}))}})}}function ba(n,a,t){const s=N([]),o=T(()=>e(n).autoCreateKey&&!e(n).rowKey),c=T(()=>{const{rowKey:r}=e(n);return e(o)?ve:r}),f=T(()=>{const{isTreeTable:r,expandRowByClick:g}=e(n);return!r&&!g?{}:{expandedRowKeys:e(s),onExpandedRowsChange:h=>{s.value=h,t("expanded-rows-change",h)}}});function u(){const r=I();s.value=r}function i(){s.value=[]}function l(r){const{isTreeTable:g,expandRowByClick:h}=e(n);!g&&!h||(s.value=[...s.value,...r])}function S(r){const{isTreeTable:g,expandRowByClick:h}=e(n);!g&&!h||(s.value=e(s).filter(v=>!r.includes(v)))}function I(r){const g=[],{childrenColumnName:h}=e(n);return we(r||e(a)).forEach(v=>{g.push(le(e(c),v));const w=v[h||"children"];w!=null&&w.length&&g.push(...I(w))}),g}function O(r,g,h,v){if(r.findIndex(w=>le(e(c),w)===h)>-1)return v.push(h),!0;for(const w of r){const x=w[g];if(Array.isArray(x)&&O(x,g,h,v))return v.push(le(e(c),w)),!0}return!1}function z(r){const{childrenColumnName:g}=e(n),h=[];O(a.value,g||"children",r,h),s.value=h}function C(r,g){n.value.accordion&&(n.value.isTreeTable||n.value.expandRowByClick)&&r&&Ke(()=>{z(le(e(c),g))})}return{getExpandOption:f,expandAll:u,collapseAll:i,expandRows:l,collapseRows:S,expandRowAccordion:z,handleTableExpand:C}}const dt="_row",gt="_index",_a=se({name:"BasicTableFooter",__name:"TableFooter",props:{summaryFunc:{default:null},summaryData:{default:null},scroll:{},rowKey:{default:""}},setup(n){const a=n,t=De(),s=T(()=>{var f;if((f=a.summaryData)!=null&&f.length)return a.summaryData.forEach((u,i)=>{u[Ve(a.rowKey,u)]=`${i}`}),a.summaryData;if(!X(a.summaryFunc))return[];let c=we(e(t.getDataSource()));return c=a.summaryFunc(c),c.forEach((u,i)=>{u[Ve(a.rowKey,u)]=`${i}`}),c}),o=T(()=>{const c=e(s),f=Se(t.getColumns()),u=f.findIndex(S=>S.flag===Pe),i=c.some(S=>Reflect.has(S,dt)),l=c.some(S=>Reflect.has(S,gt));if(u!==-1&&(l?(f[u].customRender=({record:S})=>S[gt],f[u].ellipsis=!1):Reflect.deleteProperty(f[u],"customRender")),t.getRowSelection()&&i){const S=f.some(I=>I.fixed==="left");f.unshift(ie(k({width:60,title:"selection",key:"selectionKey",align:"center"},S?{fixed:"left"}:{}),{customRender:({record:I})=>I[dt]}))}return f});return(c,f)=>a.summaryFunc||a.summaryData?(A(),j(e(bt),{key:0,showHeader:!1,bordered:!1,pagination:!1,dataSource:s.value,rowKey:a.rowKey,columns:o.value,tableLayout:"fixed",scroll:a.scroll},null,8,["dataSource","rowKey","columns","scroll"])):Y("",!0)}});function xa(n,a,t,s){const o=T(()=>(e(s)||[]).length===0),c=T(()=>{const{summaryFunc:u,showSummary:i,summaryData:l}=e(n);return i&&!e(o)?()=>Be(_a,{summaryFunc:u,summaryData:l,scroll:e(a)}):void 0});mt(()=>{f()});function f(){const{showSummary:u}=e(n);!u||e(o)||Ke(()=>{const i=e(t);if(!i)return;const l=i.$el.querySelector(" .ant-table-content,  .ant-table-body");mn({el:l,name:"scroll",listener:()=>{const S=i.$el.querySelector('.ant-table-footer .ant-table-container  [class^="ant-table-"]');!S||!l||(S.scrollLeft=l.scrollLeft)},wait:0,options:!0})})}return{getFooterProps:c}}function Ra(n,a,t,s){const o=T(()=>{const{formConfig:i}=e(n),{submitButtonOptions:l}=i||{};return ie(k({showAdvancedButton:!0},i),{submitButtonOptions:k({loading:e(s)},l),compact:!0})}),c=T(()=>Object.keys(a).map(l=>l.startsWith("form-")?l:null).filter(l=>!!l));function f(i){var l,S;return i&&(S=(l=i==null?void 0:i.replace)==null?void 0:l.call(i,/form-/,""))!=null?S:""}function u(i){const{handleSearchInfoFn:l}=e(n);l&&X(l)&&(i=l(i)||i),t({searchInfo:i,page:1})}return{getFormProps:o,replaceFormSlotKey:f,getFormSlotKeys:c,handleSearchInfoChange:u}}const Ha=se({name:"BasicTable",__name:"BasicTable",props:On,emits:["fetch-success","fetch-error","selection-change","register","row-click","row-dbClick","row-contextmenu","row-mouseenter","row-mouseleave","edit-end","edit-cancel","edit-row-end","edit-change","expanded-rows-change","change","columns-change"],setup(n,{expose:a,emit:t}){const s=n,o=t,c=pt(),f=nn(),u=N(null),i=N([]),l=N(null),S=N(null),I=N(),{height:O}=pn(l),{prefixCls:z}=Ae("basic-table"),[C,r]=Cn(),g=T(()=>k(k({},s),e(I))),h=an(vn,!1),{getLoading:v,setLoading:w}=Zn(g),{getPaginationInfo:x,getPagination:L,setPagination:F,setShowPagination:D,getShowPagination:G}=Wn(g),{getRowSelection:q,getRowSelectionRef:ce,getSelectRows:ge,setSelectedRows:p,clearSelectedRowKeys:b,getSelectRowKeys:$,deleteSelectRowByKey:B,setSelectedRowKeys:H}=ea(g,i,o),{handleTableChange:J,getDataSourceRef:P,getDataSource:V,getRawDataSource:Z,getSearchInfo:he,setTableData:me,updateTableDataRecord:ee,deleteTableDataRecord:te,insertTableDataRecord:pe,findTableDataRecord:Re,fetch:Te,getRowKey:_e,reload:Ie,getAutoCreateKey:ke,updateTableData:d}=Qn(g,{tableData:i,getPaginationInfo:x,setLoading:w,setPagination:F,getFieldsValue:r.getFieldsValue,clearSelectedRowKeys:b},o);function y(M,Q,W,Ee){J(M,Q,W),o("change",M,Q,W);const{onChange:We}=e(g);We&&X(We)&&We(M,Q,W,Ee)}const{getViewColumns:R,getColumns:m,setCacheColumnsByField:E,setCacheColumns:ne,setColumnWidth:ae,setColumns:He,getColumnsRef:Tt,getCacheColumns:It}=Yn(g,x),{getScrollRef:et,redoHeight:Ge}=Bn(g,u,Tt,ce,P,l,S),kt=$n(Ge,50),{scrollTo:Ft}=ta(u,P),{customRow:Kt}=na(g,{setSelectedRowKeys:H,getSelectRowKeys:$,clearSelectedRowKeys:b,getAutoCreateKey:ke,emit:o}),{getRowClassName:Pt}=aa(g,z),{getExpandOption:At,expandAll:Dt,expandRows:$t,collapseRows:Et,collapseAll:Ot,handleTableExpand:Bt}=ba(g,i,o),Ht={onColumnsChange:M=>{var Q,W;o("columns-change",M),(W=(Q=e(g)).onColumnsChange)==null||W.call(Q,M)}},Nt={clearSelectedRowKeys:b,getSelectRowKeys:$},{getHeaderProps:zt}=ya(g,f,Ht,Nt),{getFooterProps:Lt}=xa(g,et,u,P),{getFormProps:Mt,replaceFormSlotKey:Ut,getFormSlotKeys:jt,handleSearchInfoChange:Gt}=Ra(g,f,Te,v),$e=T(()=>{const M=e(P);let Q=k(ie(k(k(ie(k({},c),{customRow:Kt}),e(g)),e(zt)),{scroll:e(et),loading:e(v),tableLayout:"fixed",rowSelection:e(ce),rowKey:e(_e),columns:we(e(R)),pagination:we(e(x)),dataSource:M,footer:e(Lt)}),e(At));return Q=Qe(Q,["class","onChange"]),Q}),Wt=T(()=>{const M=e($e);return[z,c.class,{[`${z}-form-container`]:M.useSearchForm,[`${z}--inset`]:M.inset}]}),qt=T(()=>{const{emptyDataIsShowTable:M,useSearchForm:Q}=e(g);return M||!Q?!0:!!e(P).length});de(O,()=>{e(h)&&s.canResize&&kt()});function Jt(M){I.value=k(k({},e(I)),M)}const Ne={reload:Ie,getSelectRows:ge,setSelectedRows:p,clearSelectedRowKeys:b,getSelectRowKeys:$,deleteSelectRowByKey:B,setPagination:F,setTableData:me,updateTableDataRecord:ee,deleteTableDataRecord:te,insertTableDataRecord:pe,findTableDataRecord:Re,redoHeight:Ge,setSelectedRowKeys:H,setColumns:He,setLoading:w,getDataSource:V,getRawDataSource:Z,getSearchInfo:he,setProps:Jt,getRowSelection:q,getPaginationRef:L,getColumns:m,getCacheColumns:It,emit:o,updateTableData:d,setShowPagination:D,getShowPagination:G,setCacheColumnsByField:E,expandAll:Dt,collapseAll:Ot,expandRows:$t,collapseRows:Et,scrollTo:Ft,getSize:()=>e($e).size,setCacheColumns:ne};return Ln(ie(k({},Ne),{wrapRef:l,getBindValues:$e})),o("register",Ne,r),a(k({tableElRef:u},Ne)),(M,Q)=>(A(),fe("div",{ref_key:"wrapRef",ref:l,class:be(Wt.value)},[$e.value.useSearchForm?(A(),j(e(on),ot({key:0,ref_key:"formRef",ref:S,submitOnReset:""},e(Mt),{tableAction:Ne,onRegister:e(C),onSubmit:e(Gt),onAdvancedChange:e(Ge)}),at({_:2},[Je(e(jt),W=>({name:e(Ut)(W),fn:_(Ee=>[ye(M.$slots,W,ze(Le(Ee||{})))])}))]),1040,["onRegister","onSubmit","onAdvancedChange"])):Y("",!0),Ct(K(e(bt),ot({ref_key:"tableElRef",ref:u},$e.value,{rowClassName:e(Pt),onChange:y,onResizeColumn:e(ae),onExpand:e(Bt)}),at({headerCell:_(({column:W})=>[ye(M.$slots,"headerCell",ze(Le({column:W})),()=>[K(jn,{column:W},null,8,["column"])])]),bodyCell:_(W=>[ye(M.$slots,"bodyCell",ze(Le(W||{})))]),_:2},[Je(Object.keys(M.$slots),W=>({name:W,fn:_(Ee=>[ye(M.$slots,W,ze(Le(Ee||{})))])}))]),1040,["rowClassName","onResizeColumn","onExpand"]),[[St,qt.value]])],2))}});export{Ha as _,jn as a};
