var Re=Object.defineProperty;var Fe=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var be=(n,c,a)=>c in n?Re(n,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[c]=a,L=(n,c)=>{for(var a in c||(c={}))Ce.call(c,a)&&be(n,a,c[a]);if(Fe)for(var a of Fe(c))Ne.call(c,a)&&be(n,a,c[a]);return n};var _=(n,c,a)=>new Promise((o,y)=>{var m=l=>{try{F(a.next(l))}catch(f){y(f)}},d=l=>{try{F(a.throw(l))}catch(f){y(f)}},F=l=>l.done?o(l.value):Promise.resolve(l.value).then(m,d);F((a=a.apply(n,c)).next())});import{u as t,g as ke,c as q,w as ee,an as Ue,n as ye,J as Ve,h as He,d as We,K as Xe,r as we,f as M,o as Ye,Z as pe,a8 as Ie,a9 as le,k as Te,ae as ue,_ as qe,aa as he,ad as Be,ac as Ae,F as Je,aj as De,ak as Ee,al as ze}from"./vue-BR4kA91-.js";import{_ as Ge}from"./FormItem.vue_vue_type_script_lang-C1MwDpoz.js";import{b as Ze,c as Qe,_ as Me}from"./BasicForm.vue_vue_type_style_index_0_lang-D-1Ai2Z1.js";import{i as fe,d as xe,a as et}from"./helper-DPzHTITE.js";import{I as H,J as te,K as W,H as tt,u as Le,L as me,d as $e,h as nt}from"./entry/index-nrenXBHR-1717431353170.js";import{e as se,l as de,s as z,U as ne,ai as Oe,d as J,v as _e,f as G,ad as st,aj as je,ak as at,al as it,X as rt,a5 as ot}from"./antd-BHcOFGwY.js";import{u as ct}from"./index-DWRt9RDq.js";function lt(n,c,a){const o=/^\[(.+)\]$/;if(o.test(n)){const y=n.match(o);if(y&&y[1]){const m=y[1].split(",");return c=Array.isArray(c)?c:[c],m.forEach((d,F)=>{z(a,d.trim(),c[F])}),!0}}}function ut(n,c,a){const o=/^\{(.+)\}$/;if(o.test(n)){const y=n.match(o);if(y&&y[1]){const m=y[1].split(",");return c=H(c)?c:{},m.forEach(d=>{z(a,d.trim(),c[d.trim()])}),!0}}}function ft({defaultValueRef:n,getSchema:c,formModel:a,getProps:o}){function y(l){var v,D;if(!H(l))return{};const f={};for(const B of Object.entries(l)){let[,r]=B;const[T]=B;if(!T||te(r)&&r.length===0||se(r))continue;const u=t(o).transformDateFunc;H(r)&&(r=u==null?void 0:u(r)),te(r)&&((v=r[0])!=null&&v.format)&&((D=r[1])!=null&&D.format)&&(r=r.map(A=>u==null?void 0:u(A))),de(r)&&(r=r.trim()),!lt(T,r,f)&&!ut(T,r,f)&&z(f,T,r)}return m(f)}function m(l){const f=t(o).fieldMapToTime;if(!f||!Array.isArray(f))return l;for(const[v,[D,B],r="YYYY-MM-DD"]of f){if(!v||!D||!B)continue;if(!ne(l,v)){Oe(l,v);continue}const[T,u]=ne(l,v),[A,b]=Array.isArray(r)?r:[r,r];!J(T)&&!_e(T)&&z(l,D,d(T,A)),!J(u)&&!_e(u)&&z(l,B,d(u,b)),Oe(l,v)}return l}function d(l,f){return f==="timestamp"?W(l).unix():f==="timestampStartDay"?W(l).startOf("day").unix():W(l).format(f)}function F(){const l=t(c),f={};l.forEach(v=>{const{defaultValue:D,defaultValueObj:B,componentProps:r={}}=v,T=Object.keys(B||{});T.length&&T.forEach(u=>{f[u]=B[u],a[u]===void 0&&(a[u]=B[u])}),J(D)||(f[v.field]=D,a[v.field]===void 0&&(a[v.field]=D)),J(r==null?void 0:r.defaultValue)||(f[v.field]=r==null?void 0:r.defaultValue,a[v.field]===void 0&&(a[v.field]=r==null?void 0:r.defaultValue))}),n.value=G(f)}return{handleFormValues:y,initDefault:F}}const Y=24;function dt({advanceState:n,emit:c,getProps:a,getSchema:o,formModel:y,defaultValueRef:m}){const d=ke(),{realWidthRef:F,screenEnum:l,screenRef:f}=tt(),v=q(()=>{if(!n.isAdvanced)return 0;const A=t(a).emptySpan||0;if(st(A))return A;if(H(A)){const{span:b=0}=A,R=t(f);return A[R.toLowerCase()]||b||0}return 0}),D=Le(T,30);ee([()=>t(o),()=>n.isAdvanced,()=>t(F)],()=>{const{showAdvancedButton:A}=t(a);A&&D()},{immediate:!0});function B(A,b=0,R=!1){const E=t(F),j=parseInt(A.md)||parseInt(A.xs)||parseInt(A.sm)||A.span||Y,C=parseInt(A.lg)||j,$=parseInt(A.xl)||C,N=parseInt(A.xxl)||$;return E<=l.LG?b+=j:E<l.XL?b+=C:E<l.XXL?b+=$:b+=N,R?(n.hideAdvanceBtn=!1,b<=Y*2?(n.hideAdvanceBtn=!0,n.isAdvanced=!0):b>Y*2&&b<=Y*(t(a).autoAdvancedLine||3)?n.hideAdvanceBtn=!1:n.isLoad||(n.isLoad=!0,n.isAdvanced=!n.isAdvanced),{isAdvanced:n.isAdvanced,itemColSum:b}):b>Y*(t(a).alwaysShowLines||1)?{isAdvanced:n.isAdvanced,itemColSum:b}:{isAdvanced:!0,itemColSum:b}}const r=Ue({});function T(){var E;let A=0,b=0;const{baseColProps:R={}}=t(a);for(const j of t(o)){const{show:C,ifShow:$,colProps:N}=j,U={schema:j,model:y,field:j.field,values:L(L({},t(m)),y)};let O=!0;if(O&&je($)&&(O=$),O&&se($)&&(O=$(U)),O&&je(C)&&(O=C),O&&se(C)&&(O=C(U)),O&&(N||R)){const{itemColSum:Z,isAdvanced:e}=B(L(L({},R),N),A);A=Z||0,e&&(b=A),r[j.field]=e}}(E=d==null?void 0:d.proxy)==null||E.$forceUpdate(),n.actionSpan=b%Y+t(v),B(t(a).actionColOptions||{span:Y},A,!0),c("advanced-change",n.isAdvanced)}function u(){n.isAdvanced=!n.isAdvanced}return{handleToggleAdvanced:u,fieldsIsAdvancedMap:r}}function pt(n,c={}){const a=/^\[(.+)\]$/;if(a.test(n)){const o=n.match(a);if(o&&o[1]){const y=o[1].split(",");if(!y.length)return;const m=[];return y.forEach((d,F)=>{z(m,F,c[d.trim()])}),m.filter(Boolean).length?m:void 0}}}function ht({emit:n,getProps:c,formModel:a,getSchema:o,defaultValueRef:y,formElRef:m,schemaRef:d,handleFormValues:F}){function l(){return _(this,null,function*(){const{resetFunc:e,submitOnReset:i}=t(c);e&&se(e)&&(yield e()),t(m)&&(Object.keys(a).forEach(s=>{const g=t(o).find(V=>V.field===s),I=g==null?void 0:g.defaultValueObj,K=Object.keys(I||{});K.length&&K.forEach(V=>{a[V]=I[V]}),a[s]=At(g,y,s)}),ye(()=>N()),n("reset",Ve(a)),i&&O())})}const f=()=>t(o).map(e=>[...e.fields||[],e.field]).flat(1).filter(Boolean);function v(e){return _(this,null,function*(){if(Object.keys(e).length===0)return;const i=f(),h=[];i.forEach(s=>{const g=t(o).find(x=>x.field===s),I=ne(e,s),K=at(e,s),{componentProps:V}=g||{};let P=V;typeof V=="function"&&(P=P({formModel:t(a),formActionType:Z}));let X;const ae=x=>x?P!=null&&P.valueFormat?x:W(x):null;if(E(g==null?void 0:g.component)&&(X=pt(s,e),X)){const x=X||I;if(Array.isArray(x)){const ie=[];for(const Q of x)ie.push(ae(Q));t(a)[s]=ie,h.push(s)}else t(a)[s]=ae(x),h.push(s)}if(K){X=ne(I,s);const x=X||I;t(a)[s]=x,P!=null&&P.onChange&&(P==null||P.onChange(x)),h.push(s)}}),j(h).catch(s=>{})})}function D(e){if(!Array.isArray(e)||Array.isArray(e)&&e.length===0)return;const i=[],h=Object.keys(t(a));h&&(e.forEach(s=>{h.includes(s)&&(i.push(s),t(a)[s]=G(t(ne(y.value,s))))}),j(i).catch(s=>{}))}function B(e){return _(this,null,function*(){const i=G(t(o));if(!e)return;let h=de(e)?[e]:e;de(e)&&(h=[e]);for(const s of h)r(s,i);d.value=i})}function r(e,i){if(de(e)){const h=i.findIndex(s=>s.field===e);h!==-1&&(delete a[e],i.splice(h,1))}}function T(e,i,h=!1){return _(this,null,function*(){const s=G(t(o)),g=Array.isArray(e)?e.map(V=>V.field):[e.field];if(s.find(V=>g.includes(V.field))){me("There are schemas that have already been added");return}const I=s.findIndex(V=>V.field===i),K=H(e)?[e]:e;!i||I===-1||h?h?s.unshift(...K):s.push(...K):I!==-1&&s.splice(I+1,0,...K),d.value=s,b(e)})}function u(e){return _(this,null,function*(){let i=[];if(H(e)&&i.push(e),te(e)&&(i=[...e]),!i.every(s=>fe(s.component)||Reflect.has(s,"field")&&s.field)){me("All children of the form Schema array that need to be updated must contain the `field` field");return}d.value=i})}function A(e){return _(this,null,function*(){let i=[];if(H(e)&&i.push(e),te(e)&&(i=[...e]),!i.every(I=>fe(I.component)||Reflect.has(I,"field")&&I.field)){me("All children of the form Schema array that need to be updated must contain the `field` field");return}const s=[],g=[];t(o).forEach(I=>{const K=i.find(V=>I.field===V.field);if(K){const V=$e(I,K);g.push(V),s.push(V)}else s.push(I)}),b(g),d.value=it(s,"field")})}function b(e){let i=[];H(e)&&i.push(e),te(e)&&(i=[...e]);const h={},s=R();i.forEach(g=>{!fe(g.component)&&Reflect.has(g,"field")&&g.field&&!J(g.defaultValue)&&(!(g.field in s)||J(s[g.field]))&&(h[g.field]=g.defaultValue)}),v(h)}function R(){return t(m)?F(Ve(t(a))):{}}function E(e){return xe.includes(e)}function j(e){return _(this,null,function*(){var h;const i=yield(h=t(m))==null?void 0:h.validateFields(e);return F(i)})}function C(e){return _(this,null,function*(){var i;yield(i=t(m))==null?void 0:i.setProps(e)})}function $(e){return _(this,null,function*(){var s;let i;e===void 0?i=f():i=e===Array.isArray(e)?e:void 0;const h=yield(s=t(m))==null?void 0:s.validate(i);return F(h)})}function N(e){return _(this,null,function*(){var i;yield(i=t(m))==null?void 0:i.clearValidate(e)})}function U(e,i){return _(this,null,function*(){var h;yield(h=t(m))==null?void 0:h.scrollToField(e,i)})}function O(e){return _(this,null,function*(){e&&e.preventDefault();const{submitFunc:i}=t(c);if(i&&se(i)){yield i();return}if(t(m))try{const s=yield $();n("submit",s)}catch(s){if((s==null?void 0:s.outOfDate)===!1&&(s!=null&&s.errorFields))return;throw new Error(s)}})}const Z={getFieldsValue:R,setFieldsValue:v,resetFields:l,updateSchema:A,resetSchema:u,setProps:C,removeSchemaByField:B,appendSchemaByField:T,clearValidate:N,validateFields:j,validate:$,submit:O,scrollToField:U};return{handleSubmit:O,clearValidate:N,validate:$,validateFields:j,getFieldsValue:R,updateSchema:A,resetSchema:u,appendSchemaByField:T,removeSchemaByField:B,resetFields:l,setFieldsValue:v,scrollToField:U,resetDefaultField:D}}function At(n,c,a){let o=G(c.value[a]);return yt(n)?J(o)?void 0:o:(!o&&n&&mt(n)&&(o=[0,0]),!o&&n&&n.component==="ApiTree"&&(o=[]),o)}function mt(n){if(n.component==="Slider"&&n.componentProps&&"range"in n.componentProps)return!0}function yt(n){return(n==null?void 0:n.component)&&et.includes(n.component)}function vt(y){return _(this,arguments,function*({getSchema:n,getProps:c,formElRef:a,isInitedDefault:o}){He(()=>_(this,null,function*(){if(t(o)||!t(c).autoFocusFirstItem)return;yield ye();const m=t(n),d=t(a),F=d==null?void 0:d.$el;if(!d||!F||!m||m.length===0)return;const l=m[0];if(!l.component||!l.component.includes("Input"))return;const f=F.querySelector(".ant-row:first-child input");f&&(f==null||f.focus())}))})}const Dt=We({name:"BasicForm",__name:"BasicForm",props:Ze,emits:["advanced-change","reset","submit","register","field-value-change"],setup(n,{expose:c,emit:a}){const o=n,y=a,m=Xe(),d=we({}),F=ct(),l=we({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),f=M({}),v=M(!1),D=M(),B=M(null),r=M(null),{prefixCls:T}=nt("basic-form"),u=q(()=>L(L({},o),t(D))),A=q(()=>[T,{[`${T}--compact`]:t(u).compact}]),b=q(()=>{const{baseRowStyle:p={},rowProps:S}=t(u);return L({style:p},S)}),R=q(()=>L(L(L({},m),o),t(u))),E=q(()=>{var S;const p=G(t(B)||t(u).schemas);for(const w of p){const{defaultValue:k,component:re,componentProps:oe={},isHandleDateDefaultValue:Pe=!0}=w;if(Pe&&k&&re&&xe.includes(re)){const Se={schema:w,tableAction:(S=o.tableAction)!=null?S:{},formModel:d,formActionType:{}},ce=oe?typeof oe=="function"?oe(Se).valueFormat:oe.valueFormat:null;if(!Array.isArray(k))w.defaultValue=ce?W(k).format(ce):W(k);else{const ve=[];k.forEach(ge=>{ve.push(ce?W(ge).format(ce):W(ge))}),w.defaultValue=ve}}}return t(u).showAdvancedButton?p.filter(w=>!fe(w.component)):p}),{handleToggleAdvanced:j,fieldsIsAdvancedMap:C}=dt({advanceState:l,emit:y,getProps:u,getSchema:E,formModel:d,defaultValueRef:f}),{handleFormValues:$,initDefault:N}=ft({getProps:u,defaultValueRef:f,getSchema:E,formModel:d});vt({getSchema:E,getProps:u,isInitedDefault:v,formElRef:r});const{handleSubmit:U,setFieldsValue:O,clearValidate:Z,validate:e,validateFields:i,getFieldsValue:h,updateSchema:s,resetSchema:g,appendSchemaByField:I,removeSchemaByField:K,resetFields:V,scrollToField:P,resetDefaultField:X}=ht({emit:y,getProps:u,formModel:d,getSchema:E,defaultValueRef:f,formElRef:r,schemaRef:B,handleFormValues:$});Qe({resetAction:V,submitAction:U}),ee(()=>t(u).model,()=>{const{model:p}=t(u);p&&O(p)},{immediate:!0}),ee(()=>o.schemas,p=>{g(p!=null?p:[])}),ee(()=>E.value,p=>{ye(()=>{var S;(S=F==null?void 0:F.redoModalHeight)==null||S.call(F)}),!t(v)&&p!=null&&p.length&&(N(),v.value=!0)}),ee(()=>d,Le(()=>{t(u).submitOnChange&&U()},300),{deep:!0});function ae(p){return _(this,null,function*(){D.value=$e(t(D)||{},p)})}function x(p,S,w){d[p]=S,y("field-value-change",p,S),w&&w.itemProps&&!w.itemProps.autoLink&&i([p]).catch(k=>{})}function ie(p){const{autoSubmitOnEnter:S}=t(u);if(S&&p.key==="Enter"&&p.target&&p.target instanceof HTMLElement){const w=p.target;w&&w.tagName&&w.tagName.toUpperCase()==="INPUT"&&U()}}const Q={getFieldsValue:h,setFieldsValue:O,resetFields:V,updateSchema:s,resetSchema:g,setProps:ae,removeSchemaByField:K,appendSchemaByField:I,clearValidate:Z,validateFields:i,validate:e,submit:U,scrollToField:P,resetDefaultField:X},Ke=q(()=>L(L({},u.value),l));return c(L({},Q)),Ye(()=>{N(),y("register",Q)}),(p,S)=>(pe(),Ie(t(ot),Ae(R.value,{class:A.value,ref_key:"formElRef",ref:r,model:d,onKeypress:ze(ie,["enter"])}),{default:le(()=>[Te(t(rt),De(Ee(b.value)),{default:le(()=>[ue(p.$slots,"formHeader"),(pe(!0),qe(Je,null,he(E.value,w=>(pe(),Ie(Ge,{key:w.field,isAdvanced:t(C)[w.field],tableAction:p.tableAction,formActionType:Q,schema:w,formProps:u.value,allDefaultValues:f.value,formModel:d,setFormModel:x},Be({_:2},[he(Object.keys(p.$slots),k=>({name:k,fn:le(re=>[ue(p.$slots,k,Ae({ref_for:!0},re||{}))])}))]),1032,["isAdvanced","tableAction","schema","formProps","allDefaultValues","formModel"]))),128)),Te(Me,Ae(Ke.value,{onToggleAdvanced:t(j)}),Be({_:2},[he(["resetBefore","submitBefore","advanceBefore","advanceAfter"],w=>({name:w,fn:le(k=>[ue(p.$slots,w,De(Ee(k||{})))])}))]),1040,["onToggleAdvanced"]),ue(p.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model"]))}});export{Dt as _};
