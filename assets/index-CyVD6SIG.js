var ye=Object.defineProperty,ve=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ne=(a,r,s)=>r in a?ye(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,k=(a,r)=>{for(var s in r||(r={}))Me.call(r,s)&&ne(a,s,r[s]);if(oe)for(var s of oe(r))Ce.call(r,s)&&ne(a,s,r[s]);return a},E=(a,r)=>ve(a,be(r));var A=(a,r,s)=>new Promise((i,c)=>{var l=d=>{try{t(s.next(d))}catch(u){c(u)}},e=d=>{try{t(s.throw(d))}catch(u){c(u)}},t=d=>d.done?i(d.value):Promise.resolve(d.value).then(l,e);t((s=s.apply(a,r)).next())});import{j as ce,E as He,R as Se,L as ke,y as Fe,S as Be,T as Oe,i as ue,O as we,d as Te,x as Pe,K as de,t as Ne,w as $e}from"./entry/index-YYm-3Pll-1717503973898.js";import{h as X,u as o,d as _,I as Re,k as F,i as De,f as g,c as B,w as pe,o as _e,b as fe,n as N,q as We,Z as M,a8 as R,a9 as h,m as xe,_ as V,ae as $,ag as je,F as Ee,ab as U,a1 as Le,a7 as Ie,G,a0 as J,ac as L,K as Ae,g as Q,z as ze,ad as ae,aa as le,aj as se,ak as re,r as me,J as z}from"./vue-gN4NnATS.js";import{M as qe,ay as Ve,T as K,az as Xe,aA as Ye,o as q,e as ge,b as Ke}from"./antd-B_Joh_oh.js";import{u as Ue}from"./useWindowSizeFn-B-NbT5Sn.js";const{t:ie}=ce(),Ge={open:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ie("common.cancelText")},okText:{type:String,default:ie("common.okText")},closeFunc:Function},ee=Object.assign({},Ge,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},open:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Je(a){const r=(c,l)=>getComputedStyle(c)[l],s=c=>{if(!c)return;c.setAttribute("data-drag",o(a.draggable));const l=c.querySelector(".ant-modal-header"),e=c.querySelector(".ant-modal");!l||!e||!o(a.draggable)||(l.style.cursor="move",l.onmousedown=t=>{if(!t)return;const d=t.clientX,u=t.clientY,S=document.body.clientWidth,b=document.documentElement.clientHeight,y=e.offsetWidth,p=e.offsetHeight,f=e.offsetLeft,m=S-e.offsetLeft-y,v=e.offsetTop,O=b-e.offsetTop-p,C=r(e,"left"),H=r(e,"top");let W=+C,x=+H;C.includes("%")?(W=+document.body.clientWidth*(+C.replace(/%/g,"")/100),x=+document.body.clientHeight*(+H.replace(/%/g,"")/100)):(W=+C.replace(/px/g,""),x=+H.replace(/px/g,"")),document.onmousemove=function(I){let T=I.clientX-d,P=I.clientY-u;-T>f?T=-f:T>m&&(T=m),-P>v?P=-v:P>O&&(P=O),e.style.cssText+=`;left:${T+W}px;top:${P+x}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},i=()=>{const c=document.querySelectorAll(".ant-modal-wrap");for(const l of Array.from(c)){if(!l)continue;const e=r(l,"display"),t=l.getAttribute("data-drag");e!=="none"&&(t===null||o(a.destroyOnClose))&&s(l)}};X(()=>{!o(a.open)||!o(a.draggable)||He(()=>{i()},30)})}function Ze(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!De(a)}const Qe=_({name:"Modal",inheritAttrs:!1,props:ee,emits:["cancel"],setup(a,{slots:r,emit:s,attrs:i}){const{open:c,draggable:l,destroyOnClose:e}=Re(a);Je({open:c,destroyOnClose:e,draggable:l});const t=d=>{s("cancel",d)};return()=>{let d;const u=E(k(k({},o(i)),a),{onCancel:t});return F(qe,u,Ze(d=Se(r))?d:{default:()=>[d]})}}}),he=Symbol();function et(a){return Fe(a,he)}function ft(){return ke(he)}const tt=["loading-tip"],ot=_({name:"ModalWrapper",inheritAttrs:!1,__name:"ModalWrapper",props:{loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},open:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},emits:["height-change","ext-height"],setup(a,{expose:r,emit:s}){const i=a,c=s,l=g(null),e=g(null),t=g(0),d=g(0),u=g(0);Ue(y.bind(null)),Be(e,()=>{y()},{attributes:!0,subtree:!0}),et({redoModalHeight:y});const S=B(()=>({minHeight:`${i.minHeight}px`,[i.fullScreen?"height":"maxHeight"]:`${o(t)}px`}));X(()=>{i.useWrapper&&y()}),pe(()=>i.fullScreen,p=>{y(),p?d.value=t.value:t.value=d.value}),_e(()=>{const{modalHeaderHeight:p,modalFooterHeight:f}=i;c("ext-height",p+f)}),fe(()=>{});function b(){return A(this,null,function*(){N(()=>{var f;const p=o(l);p&&((f=p==null?void 0:p.scrollTo)==null||f.call(p,0))})})}function y(){return A(this,null,function*(){if(!i.open)return;const p=o(l);if(!p)return;const f=p.$el.parentElement;if(f){f.style.padding="0",yield N();try{const m=f.parentElement&&f.parentElement.parentElement;if(!m)return;const v=getComputedStyle(m).top,O=Number.parseInt(v);let C=window.innerHeight-O*2+(i.footerOffset||0)-i.modalFooterHeight-i.modalHeaderHeight;O<40&&(C-=26),yield N();const H=o(e);if(!H)return;yield N(),u.value=H.scrollHeight,i.fullScreen?t.value=window.innerHeight-i.modalFooterHeight-i.modalHeaderHeight-28:t.value=i.height?i.height:u.value>C?C:u.value,c("height-change",o(t))}catch(m){}}})}return r({scrollTop:b,setModalHeight:y}),(p,f)=>{const m=We("loading");return M(),R(o(Oe),{ref_key:"wrapperRef",ref:l,scrollHeight:u.value},{default:h(()=>[xe((M(),V("div",{ref_key:"spinRef",ref:e,style:je(S.value),"loading-tip":a.loadingTip},[$(p.$slots,"default")],12,tt)),[[m,a.loading]])]),_:3},8,["scrollHeight"])}}}),nt=_({name:"ModalClose",__name:"ModalClose",props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(a,{emit:r}){const s=a,i=r,{prefixCls:c}=ue("basic-modal-close"),{t:l}=ce(),e=B(()=>[c,`${c}--custom`,{[`${c}--can-full`]:s.canFullscreen}]);function t(u){i("cancel",u)}function d(u){u==null||u.stopPropagation(),u==null||u.preventDefault(),i("fullscreen")}return(u,S)=>(M(),V("div",{class:Le(e.value)},[a.canFullscreen?(M(),V(Ee,{key:0},[a.fullScreen?(M(),R(o(K),{key:0,title:o(l)("component.modal.restore"),placement:"bottom"},{default:h(()=>[F(o(Ve),{role:"full",onClick:d})]),_:1},8,["title"])):(M(),R(o(K),{key:1,title:o(l)("component.modal.maximize"),placement:"bottom"},{default:h(()=>[F(o(Xe),{role:"close",onClick:d})]),_:1},8,["title"]))],64)):U("",!0),F(o(K),{title:o(l)("component.modal.close"),placement:"bottom"},{default:h(()=>[F(o(Ye),{onClick:t})]),_:1},8,["title"])],2))}}),at=_({name:"BasicModalFooter",__name:"ModalFooter",props:ee,emits:["ok","cancel"],setup(a,{emit:r}){const s=r;function i(l){s("ok",l)}function c(l){s("cancel",l)}return(l,e)=>{const t=Ie("a-button");return M(),V("div",null,[$(l.$slots,"insertFooter"),l.showCancelBtn?(M(),R(t,L({key:0},l.cancelButtonProps,{onClick:c}),{default:h(()=>[G(J(l.cancelText),1)]),_:1},16)):U("",!0),$(l.$slots,"centerFooter"),l.showOkBtn?(M(),R(t,L({key:1,type:l.okType,onClick:i,loading:l.confirmLoading},l.okButtonProps),{default:h(()=>[G(J(l.okText),1)]),_:1},16,["type","loading"])):U("",!0),$(l.$slots,"appendFooter")])}}}),lt=_({name:"BasicModalHeader",__name:"ModalHeader",props:{helpMessage:{type:[String,Array]},title:{type:String}},setup(a){return(r,s)=>(M(),R(o(we),{helpMessage:a.helpMessage},{default:h(()=>[G(J(a.title),1)]),_:1},8,["helpMessage"]))}});function st(a){const r=g(!1),s=B(()=>{const c=o(a.wrapClassName)||"";return o(r)?`fullscreen-modal ${c} `:o(c)});function i(c){c&&c.stopPropagation(),r.value=!o(r)}return{getWrapClassName:s,handleFullScreen:i,fullScreenRef:r}}const rt=_({name:"BasicModal",inheritAttrs:!1,__name:"BasicModal",props:ee,emits:["open-change","height-change","cancel","ok","register","update:open","fullscreen"],setup(a,{emit:r}){const s=a,i=r,c=Ae(),l=g(!1),e=g(null),t=g(null),{prefixCls:d}=ue("basic-modal"),u=g(0),S={setModalProps:W,emitOpen:void 0,redoModalHeight:()=>{N(()=>{o(t)&&o(t).setModalHeight()})}},b=Q();b&&i("register",S,b.uid);const y=B(()=>k(k({},s),o(e))),{handleFullScreen:p,getWrapClassName:f,fullScreenRef:m}=st({modalWrapperRef:t,extHeightRef:u,wrapClassName:ze(y.value,"wrapClassName")}),v=B(()=>{const n=E(k({},o(y)),{open:o(l),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return E(k({},n),{wrapClassName:o(f)})}),O=B(()=>{const n=E(k(k({},c),o(y)),{open:o(l)});return(n==null?void 0:n.wrapClassName)===o(f)?n.wrapClassName=`${(n==null?void 0:n.wrapClassName)||""} `+d:n.wrapClassName=`${o(f)||""}`+d,o(m)?q(n,["height","title"]):q(n,"title")}),C=B(()=>{if(!o(m))return o(v).height});X(()=>{l.value=!!s.open,m.value=!!s.defaultFullscreen}),pe(()=>o(l),n=>{i("open-change",n),i("update:open",n),b&&S.emitOpen&&S.emitOpen(n,b.uid),N(()=>{s.scrollTop&&n&&o(t)&&o(t).scrollTop()})},{immediate:!1});function H(n){return A(this,null,function*(){var Y,w;if(n==null||n.stopPropagation(),!((w=(Y=n.target)==null?void 0:Y.classList)!=null&&w.contains(d+"-close--custom"))){if(s.closeFunc&&ge(s.closeFunc)){const j=yield s.closeFunc();l.value=!j;return}l.value=!1,i("cancel",n)}})}function W(n){e.value=Te(o(e)||{},n),Reflect.has(n,"open")&&(l.value=!!n.open),Reflect.has(n,"defaultFullscreen")&&(m.value=!!n.defaultFullscreen)}function x(n){i("ok",n)}function I(n){i("height-change",n)}function T(n){u.value=n}function P(n){s.canFullscreen&&(n.stopPropagation(),te(n))}function te(n){p(n),i("fullscreen")}return(n,Y)=>(M(),R(o(Qe),L(O.value,{onCancel:H}),ae({default:h(()=>[F(ot,L({useWrapper:v.value.useWrapper,footerOffset:n.wrapperFooterOffset,fullScreen:o(m),ref_key:"modalWrapperRef",ref:t,loading:v.value.loading,"loading-tip":v.value.loadingTip,minHeight:v.value.minHeight,height:C.value,open:l.value,modalFooterHeight:n.footer!==void 0&&!n.footer?0:void 0},o(q)(v.value.wrapperProps,"open","height","modalFooterHeight"),{onExtHeight:T,onHeightChange:I}),{default:h(()=>[$(n.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","open","modalFooterHeight"])]),_:2},[n.$slots.closeIcon?void 0:{name:"closeIcon",fn:h(()=>[F(nt,{canFullscreen:v.value.canFullscreen,fullScreen:o(m),onCancel:H,onFullscreen:te},null,8,["canFullscreen","fullScreen"])]),key:"0"},n.$slots.title?void 0:{name:"title",fn:h(()=>[F(lt,{helpMessage:v.value.helpMessage,title:y.value.title,onDblclick:P},null,8,["helpMessage","title"])]),key:"1"},n.$slots.footer?void 0:{name:"footer",fn:h(()=>[F(at,L(O.value,{onOk:x,onCancel:H}),ae({_:2},[le(Object.keys(n.$slots),w=>({name:w,fn:h(j=>[$(n.$slots,w,se(re(j||{})))])}))]),1040)]),key:"2"},le(Object.keys(o(q)(n.$slots,"default")),w=>({name:w,fn:h(j=>[$(n.$slots,w,se(re(j||{})))])}))]),1040))}}),D=me({}),Z=me({});function mt(){const a=g(null),r=g(!1),s=g(0);function i(e,t){if(!Q())throw new Error("useModal() can only be used inside setup() or functional components!");s.value=t,fe(()=>{a.value=null,r.value=!1,D[String(o(s))]=null}),!(o(r)&&Pe()&&e===o(a))&&(a.value=e,r.value=!0,e.emitOpen=(d,u)=>{Z[u]=d})}const c=()=>{const e=o(a);return e||de("useModal instance is undefined!"),e},l={setModalProps:e=>{var t;(t=c())==null||t.setModalProps(e)},getOpen:B(()=>Z[~~o(s)]),redoModalHeight:()=>{var e,t;(t=(e=c())==null?void 0:e.redoModalHeight)==null||t.call(e)},openModal:(e=!0,t,d=!0)=>{var b;if((b=c())==null||b.setModalProps({open:e}),!t)return;const u=o(s);if(d){D[u]=null,D[u]=z(t);return}Ke(z(D[u]),z(t))||(D[u]=z(t))},closeModal:()=>{var e;(e=c())==null||e.setModalProps({open:!1})}};return[i,l]}const gt=a=>{const r=g(null),s=Q(),i=g(0),c=()=>{const e=o(r);return e||de("useModalInner instance is undefined!"),e},l=(e,t)=>{Ne(()=>{r.value=null}),i.value=t,r.value=e,s==null||s.emit("register",e,t)};return X(()=>{const e=D[o(i)];e&&(!a||!ge(a)||N(()=>{a(e)}))}),[l,{changeLoading:(e=!0)=>{var t;(t=c())==null||t.setModalProps({loading:e})},getOpen:B(()=>Z[~~o(i)]),changeOkLoading:(e=!0)=>{var t;(t=c())==null||t.setModalProps({confirmLoading:e})},closeModal:()=>{var e;(e=c())==null||e.setModalProps({open:!1})},setModalProps:e=>{var t;(t=c())==null||t.setModalProps(e)},redoModalHeight:()=>{var t;const e=(t=c())==null?void 0:t.redoModalHeight;e&&e()}}]},ht=$e(rt);export{ht as B,gt as a,mt as b,ft as u};
