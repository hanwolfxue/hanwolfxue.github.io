var Re=Object.defineProperty;var Fe=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var be=(n,c,a)=>c in n?Re(n,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[c]=a,$=(n,c)=>{for(var a in c||(c={}))Ce.call(c,a)&&be(n,a,c[a]);if(Fe)for(var a of Fe(c))Ne.call(c,a)&&be(n,a,c[a]);return n};var _=(n,c,a)=>new Promise((o,y)=>{var A=l=>{try{F(a.next(l))}catch(f){y(f)}},d=l=>{try{F(a.throw(l))}catch(f){y(f)}},F=l=>l.done?o(l.value):Promise.resolve(l.value).then(A,d);F((a=a.apply(n,c)).next())});import{u as t,g as ke,c as q,w as ee,am as Ue,n as ye,J as Ve,h as He,d as We,K as Xe,r as we,f as M,o as Ye,Z as pe,a8 as Ie,a9 as le,k as Te,ae as ue,_ as qe,aa as he,ad as Be,ac as me,F as Ge,aj as De,ak as Ee,al as Je}from"./vue-gN4NnATS.js";import{_ as ze}from"./FormItem.vue_vue_type_script_lang-DvbjwlLv.js";import{b as Ze,c as Qe,_ as Me}from"./BasicForm.vue_vue_type_style_index_0_lang-HM0ZhRub.js";import{i as fe,d as xe,a as et}from"./helper-C4je1pfN.js";import{H,I as te,J as W,G as tt,c as $e,K as Ae,d as Le,i as nt}from"./entry/index-YYm-3Pll-1717503973898.js";import{e as se,l as de,s as J,U as ne,ah as Oe,d as G,v as _e,f as z,ad as st,ai as je,aj as at,ak as it,X as rt,a5 as ot}from"./antd-B_Joh_oh.js";import{u as ct}from"./index-CyVD6SIG.js";function lt(n,c,a){const o=/^\[(.+)\]$/;if(o.test(n)){const y=n.match(o);if(y&&y[1]){const A=y[1].split(",");return c=Array.isArray(c)?c:[c],A.forEach((d,F)=>{J(a,d.trim(),c[F])}),!0}}}function ut(n,c,a){const o=/^\{(.+)\}$/;if(o.test(n)){const y=n.match(o);if(y&&y[1]){const A=y[1].split(",");return c=H(c)?c:{},A.forEach(d=>{J(a,d.trim(),c[d.trim()])}),!0}}}function ft({defaultValueRef:n,getSchema:c,formModel:a,getProps:o}){function y(l){var v,D;if(!H(l))return{};const f={};for(const B of Object.entries(l)){let[,r]=B;const[T]=B;if(!T||te(r)&&r.length===0||se(r))continue;const u=t(o).transformDateFunc;H(r)&&(r=u==null?void 0:u(r)),te(r)&&((v=r[0])!=null&&v.format)&&((D=r[1])!=null&&D.format)&&(r=r.map(m=>u==null?void 0:u(m))),de(r)&&(r=r.trim()),!lt(T,r,f)&&!ut(T,r,f)&&J(f,T,r)}return A(f)}function A(l){const f=t(o).fieldMapToTime;if(!f||!Array.isArray(f))return l;for(const[v,[D,B],r="YYYY-MM-DD"]of f){if(!v||!D||!B)continue;if(!ne(l,v)){Oe(l,v);continue}const[T,u]=ne(l,v),[m,b]=Array.isArray(r)?r:[r,r];!G(T)&&!_e(T)&&J(l,D,d(T,m)),!G(u)&&!_e(u)&&J(l,B,d(u,b)),Oe(l,v)}return l}function d(l,f){return f==="timestamp"?W(l).unix():f==="timestampStartDay"?W(l).startOf("day").unix():W(l).format(f)}function F(){const l=t(c),f={};l.forEach(v=>{const{defaultValue:D,defaultValueObj:B,componentProps:r={}}=v,T=Object.keys(B||{});T.length&&T.forEach(u=>{f[u]=B[u],a[u]===void 0&&(a[u]=B[u])}),G(D)||(f[v.field]=D,a[v.field]===void 0&&(a[v.field]=D)),G(r==null?void 0:r.defaultValue)||(f[v.field]=r==null?void 0:r.defaultValue,a[v.field]===void 0&&(a[v.field]=r==null?void 0:r.defaultValue))}),n.value=z(f)}return{handleFormValues:y,initDefault:F}}const Y=24;function dt({advanceState:n,emit:c,getProps:a,getSchema:o,formModel:y,defaultValueRef:A}){const d=ke(),{realWidthRef:F,screenEnum:l,screenRef:f}=tt(),v=q(()=>{if(!n.isAdvanced)return 0;const m=t(a).emptySpan||0;if(st(m))return m;if(H(m)){const{span:b=0}=m,R=t(f);return m[R.toLowerCase()]||b||0}return 0}),D=$e(T,30);ee([()=>t(o),()=>n.isAdvanced,()=>t(F)],()=>{const{showAdvancedButton:m}=t(a);m&&D()},{immediate:!0});function B(m,b=0,R=!1){const E=t(F),j=parseInt(m.md)||parseInt(m.xs)||parseInt(m.sm)||m.span||Y,C=parseInt(m.lg)||j,L=parseInt(m.xl)||C,N=parseInt(m.xxl)||L;return E<=l.LG?b+=j:E<l.XL?b+=C:E<l.XXL?b+=L:b+=N,R?(n.hideAdvanceBtn=!1,b<=Y*2?(n.hideAdvanceBtn=!0,n.isAdvanced=!0):b>Y*2&&b<=Y*(t(a).autoAdvancedLine||3)?n.hideAdvanceBtn=!1:n.isLoad||(n.isLoad=!0,n.isAdvanced=!n.isAdvanced),{isAdvanced:n.isAdvanced,itemColSum:b}):b>Y*(t(a).alwaysShowLines||1)?{isAdvanced:n.isAdvanced,itemColSum:b}:{isAdvanced:!0,itemColSum:b}}const r=Ue({});function T(){var E;let m=0,b=0;const{baseColProps:R={}}=t(a);for(const j of t(o)){const{show:C,ifShow:L,colProps:N}=j,U={schema:j,model:y,field:j.field,values:$($({},t(A)),y)};let O=!0;if(O&&je(L)&&(O=L),O&&se(L)&&(O=L(U)),O&&je(C)&&(O=C),O&&se(C)&&(O=C(U)),O&&(N||R)){const{itemColSum:Z,isAdvanced:e}=B($($({},R),N),m);m=Z||0,e&&(b=m),r[j.field]=e}}(E=d==null?void 0:d.proxy)==null||E.$forceUpdate(),n.actionSpan=b%Y+t(v),B(t(a).actionColOptions||{span:Y},m,!0),c("advanced-change",n.isAdvanced)}function u(){n.isAdvanced=!n.isAdvanced}return{handleToggleAdvanced:u,fieldsIsAdvancedMap:r}}function pt(n,c={}){const a=/^\[(.+)\]$/;if(a.test(n)){const o=n.match(a);if(o&&o[1]){const y=o[1].split(",");if(!y.length)return;const A=[];return y.forEach((d,F)=>{J(A,F,c[d.trim()])}),A.filter(Boolean).length?A:void 0}}}function ht({emit:n,getProps:c,formModel:a,getSchema:o,defaultValueRef:y,formElRef:A,schemaRef:d,handleFormValues:F}){function l(){return _(this,null,function*(){const{resetFunc:e,submitOnReset:i}=t(c);e&&se(e)&&(yield e()),t(A)&&(Object.keys(a).forEach(s=>{const g=t(o).find(V=>V.field===s),I=g==null?void 0:g.defaultValueObj,K=Object.keys(I||{});K.length&&K.forEach(V=>{a[V]=I[V]}),a[s]=mt(g,y,s)}),ye(()=>N()),n("reset",Ve(a)),i&&O())})}const f=()=>t(o).map(e=>[...e.fields||[],e.field]).flat(1).filter(Boolean);function v(e){return _(this,null,function*(){if(Object.keys(e).length===0)return;const i=f(),h=[];i.forEach(s=>{const g=t(o).find(x=>x.field===s),I=ne(e,s),K=at(e,s),{componentProps:V}=g||{};let P=V;typeof V=="function"&&(P=P({formModel:t(a),formActionType:Z}));let X;const ae=x=>x?P!=null&&P.valueFormat?x:W(x):null;if(E(g==null?void 0:g.component)&&(X=pt(s,e),X)){const x=X||I;if(Array.isArray(x)){const ie=[];for(const Q of x)ie.push(ae(Q));t(a)[s]=ie,h.push(s)}else t(a)[s]=ae(x),h.push(s)}if(K){X=ne(I,s);const x=X||I;t(a)[s]=x,P!=null&&P.onChange&&(P==null||P.onChange(x)),h.push(s)}}),j(h).catch(s=>{})})}function D(e){if(!Array.isArray(e)||Array.isArray(e)&&e.length===0)return;const i=[],h=Object.keys(t(a));h&&(e.forEach(s=>{h.includes(s)&&(i.push(s),t(a)[s]=z(t(ne(y.value,s))))}),j(i).catch(s=>{}))}function B(e){return _(this,null,function*(){const i=z(t(o));if(!e)return;let h=de(e)?[e]:e;de(e)&&(h=[e]);for(const s of h)r(s,i);d.value=i})}function r(e,i){if(de(e)){const h=i.findIndex(s=>s.field===e);h!==-1&&(delete a[e],i.splice(h,1))}}function T(e,i,h=!1){return _(this,null,function*(){const s=z(t(o)),g=Array.isArray(e)?e.map(V=>V.field):[e.field];if(s.find(V=>g.includes(V.field))){Ae("There are schemas that have already been added");return}const I=s.findIndex(V=>V.field===i),K=H(e)?[e]:e;!i||I===-1||h?h?s.unshift(...K):s.push(...K):I!==-1&&s.splice(I+1,0,...K),d.value=s,b(e)})}function u(e){return _(this,null,function*(){let i=[];if(H(e)&&i.push(e),te(e)&&(i=[...e]),!i.every(s=>fe(s.component)||Reflect.has(s,"field")&&s.field)){Ae("All children of the form Schema array that need to be updated must contain the `field` field");return}d.value=i})}function m(e){return _(this,null,function*(){let i=[];if(H(e)&&i.push(e),te(e)&&(i=[...e]),!i.every(I=>fe(I.component)||Reflect.has(I,"field")&&I.field)){Ae("All children of the form Schema array that need to be updated must contain the `field` field");return}const s=[],g=[];t(o).forEach(I=>{const K=i.find(V=>I.field===V.field);if(K){const V=Le(I,K);g.push(V),s.push(V)}else s.push(I)}),b(g),d.value=it(s,"field")})}function b(e){let i=[];H(e)&&i.push(e),te(e)&&(i=[...e]);const h={},s=R();i.forEach(g=>{!fe(g.component)&&Reflect.has(g,"field")&&g.field&&!G(g.defaultValue)&&(!(g.field in s)||G(s[g.field]))&&(h[g.field]=g.defaultValue)}),v(h)}function R(){return t(A)?F(Ve(t(a))):{}}function E(e){return xe.includes(e)}function j(e){return _(this,null,function*(){var h;const i=yield(h=t(A))==null?void 0:h.validateFields(e);return F(i)})}function C(e){return _(this,null,function*(){var i;yield(i=t(A))==null?void 0:i.setProps(e)})}function L(e){return _(this,null,function*(){var s;let i;e===void 0?i=f():i=e===Array.isArray(e)?e:void 0;const h=yield(s=t(A))==null?void 0:s.validate(i);return F(h)})}function N(e){return _(this,null,function*(){var i;yield(i=t(A))==null?void 0:i.clearValidate(e)})}function U(e,i){return _(this,null,function*(){var h;yield(h=t(A))==null?void 0:h.scrollToField(e,i)})}function O(e){return _(this,null,function*(){e&&e.preventDefault();const{submitFunc:i}=t(c);if(i&&se(i)){yield i();return}if(t(A))try{const s=yield L();n("submit",s)}catch(s){if((s==null?void 0:s.outOfDate)===!1&&(s!=null&&s.errorFields))return;throw new Error(s)}})}const Z={getFieldsValue:R,setFieldsValue:v,resetFields:l,updateSchema:m,resetSchema:u,setProps:C,removeSchemaByField:B,appendSchemaByField:T,clearValidate:N,validateFields:j,validate:L,submit:O,scrollToField:U};return{handleSubmit:O,clearValidate:N,validate:L,validateFields:j,getFieldsValue:R,updateSchema:m,resetSchema:u,appendSchemaByField:T,removeSchemaByField:B,resetFields:l,setFieldsValue:v,scrollToField:U,resetDefaultField:D}}function mt(n,c,a){let o=z(c.value[a]);return yt(n)?G(o)?void 0:o:(!o&&n&&At(n)&&(o=[0,0]),!o&&n&&n.component==="ApiTree"&&(o=[]),o)}function At(n){if(n.component==="Slider"&&n.componentProps&&"range"in n.componentProps)return!0}function yt(n){return(n==null?void 0:n.component)&&et.includes(n.component)}function vt(y){return _(this,arguments,function*({getSchema:n,getProps:c,formElRef:a,isInitedDefault:o}){He(()=>_(this,null,function*(){if(t(o)||!t(c).autoFocusFirstItem)return;yield ye();const A=t(n),d=t(a),F=d==null?void 0:d.$el;if(!d||!F||!A||A.length===0)return;const l=A[0];if(!l.component||!l.component.includes("Input"))return;const f=F.querySelector(".ant-row:first-child input");f&&(f==null||f.focus())}))})}const Dt=We({name:"BasicForm",__name:"BasicForm",props:Ze,emits:["advanced-change","reset","submit","register","field-value-change"],setup(n,{expose:c,emit:a}){const o=n,y=a,A=Xe(),d=we({}),F=ct(),l=we({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),f=M({}),v=M(!1),D=M(),B=M(null),r=M(null),{prefixCls:T}=nt("basic-form"),u=q(()=>$($({},o),t(D))),m=q(()=>[T,{[`${T}--compact`]:t(u).compact}]),b=q(()=>{const{baseRowStyle:p={},rowProps:S}=t(u);return $({style:p},S)}),R=q(()=>$($($({},A),o),t(u))),E=q(()=>{var S;const p=z(t(B)||t(u).schemas);for(const w of p){const{defaultValue:k,component:re,componentProps:oe={},isHandleDateDefaultValue:Pe=!0}=w;if(Pe&&k&&re&&xe.includes(re)){const Se={schema:w,tableAction:(S=o.tableAction)!=null?S:{},formModel:d,formActionType:{}},ce=oe?typeof oe=="function"?oe(Se).valueFormat:oe.valueFormat:null;if(!Array.isArray(k))w.defaultValue=ce?W(k).format(ce):W(k);else{const ve=[];k.forEach(ge=>{ve.push(ce?W(ge).format(ce):W(ge))}),w.defaultValue=ve}}}return t(u).showAdvancedButton?p.filter(w=>!fe(w.component)):p}),{handleToggleAdvanced:j,fieldsIsAdvancedMap:C}=dt({advanceState:l,emit:y,getProps:u,getSchema:E,formModel:d,defaultValueRef:f}),{handleFormValues:L,initDefault:N}=ft({getProps:u,defaultValueRef:f,getSchema:E,formModel:d});vt({getSchema:E,getProps:u,isInitedDefault:v,formElRef:r});const{handleSubmit:U,setFieldsValue:O,clearValidate:Z,validate:e,validateFields:i,getFieldsValue:h,updateSchema:s,resetSchema:g,appendSchemaByField:I,removeSchemaByField:K,resetFields:V,scrollToField:P,resetDefaultField:X}=ht({emit:y,getProps:u,formModel:d,getSchema:E,defaultValueRef:f,formElRef:r,schemaRef:B,handleFormValues:L});Qe({resetAction:V,submitAction:U}),ee(()=>t(u).model,()=>{const{model:p}=t(u);p&&O(p)},{immediate:!0}),ee(()=>o.schemas,p=>{g(p!=null?p:[])}),ee(()=>E.value,p=>{ye(()=>{var S;(S=F==null?void 0:F.redoModalHeight)==null||S.call(F)}),!t(v)&&p!=null&&p.length&&(N(),v.value=!0)}),ee(()=>d,$e(()=>{t(u).submitOnChange&&U()},300),{deep:!0});function ae(p){return _(this,null,function*(){D.value=Le(t(D)||{},p)})}function x(p,S,w){d[p]=S,y("field-value-change",p,S),w&&w.itemProps&&!w.itemProps.autoLink&&i([p]).catch(k=>{})}function ie(p){const{autoSubmitOnEnter:S}=t(u);if(S&&p.key==="Enter"&&p.target&&p.target instanceof HTMLElement){const w=p.target;w&&w.tagName&&w.tagName.toUpperCase()==="INPUT"&&U()}}const Q={getFieldsValue:h,setFieldsValue:O,resetFields:V,updateSchema:s,resetSchema:g,setProps:ae,removeSchemaByField:K,appendSchemaByField:I,clearValidate:Z,validateFields:i,validate:e,submit:U,scrollToField:P,resetDefaultField:X},Ke=q(()=>$($({},u.value),l));return c($({},Q)),Ye(()=>{N(),y("register",Q)}),(p,S)=>(pe(),Ie(t(ot),me(R.value,{class:m.value,ref_key:"formElRef",ref:r,model:d,onKeypress:Je(ie,["enter"])}),{default:le(()=>[Te(t(rt),De(Ee(b.value)),{default:le(()=>[ue(p.$slots,"formHeader"),(pe(!0),qe(Ge,null,he(E.value,w=>(pe(),Ie(ze,{key:w.field,isAdvanced:t(C)[w.field],tableAction:p.tableAction,formActionType:Q,schema:w,formProps:u.value,allDefaultValues:f.value,formModel:d,setFormModel:x},Be({_:2},[he(Object.keys(p.$slots),k=>({name:k,fn:le(re=>[ue(p.$slots,k,me({ref_for:!0},re||{}))])}))]),1032,["isAdvanced","tableAction","schema","formProps","allDefaultValues","formModel"]))),128)),Te(Me,me(Ke.value,{onToggleAdvanced:t(j)}),Be({_:2},[he(["resetBefore","submitBefore","advanceBefore","advanceAfter"],w=>({name:w,fn:le(k=>[ue(p.$slots,w,De(Ee(k||{})))])}))]),1040,["onToggleAdvanced"]),ue(p.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model"]))}});export{Dt as _};
