var Ft=Object.defineProperty;var lt=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable;var ft=(e,t,o)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,dt=(e,t)=>{for(var o in t||(t={}))kt.call(t,o)&&ft(e,o,t[o]);if(lt)for(var o of lt(t))zt.call(t,o)&&ft(e,o,t[o]);return e};var gt=(e,t,o)=>new Promise((i,r)=>{var n=a=>{try{u(o.next(a))}catch(l){r(l)}},s=a=>{try{u(o.throw(a))}catch(l){r(l)}},u=a=>a.done?i(a.value):Promise.resolve(a.value).then(n,s);u((o=o.apply(e,t)).next())});import{w as Ht}from"./entry/index-BwJ41R5L-1717470460305.js";import{f as Vt,l as Kt}from"./antd-BHcOFGwY.js";import{d as Jt}from"./download-CTUw6po6.js";import{d as Ot,f as Yt,o as $t,w as jt,Z as ht,_ as Qt,a8 as Gt,ai as Wt,u as W}from"./vue-BR4kA91-.js";var qt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Et={},T={};let it;const Xt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];T.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};T.getSymbolTotalCodewords=function(t){return Xt[t]};T.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};T.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');it=t};T.isKanjiModeEnabled=function(){return typeof it!="undefined"};T.toSJIS=function(t){return it(t)};var Y={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+o)}}e.isValid=function(i){return i&&typeof i.bit!="undefined"&&i.bit>=0&&i.bit<4},e.from=function(i,r){if(e.isValid(i))return i;try{return t(i)}catch(n){return r}}})(Y);function pt(){this.buffer=[],this.length=0}pt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let o=0;o<t;o++)this.putBit((e>>>t-o-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Zt=pt;function H(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}H.prototype.set=function(e,t,o,i){const r=e*this.size+t;this.data[r]=o,i&&(this.reservedBit[r]=!0)};H.prototype.get=function(e,t){return this.data[e*this.size+t]};H.prototype.xor=function(e,t,o){this.data[e*this.size+t]^=o};H.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var xt=H,Bt={};(function(e){const t=T.getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,n=t(i),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,u=[n-7];for(let a=1;a<r-1;a++)u[a]=u[a-1]-s;return u.push(6),u.reverse()},e.getPositions=function(i){const r=[],n=e.getRowColCoords(i),s=n.length;for(let u=0;u<s;u++)for(let a=0;a<s;a++)u===0&&a===0||u===0&&a===s-1||u===s-1&&a===0||r.push([n[u],n[a]]);return r}})(Bt);var At={};const te=T.getSymbolSize,mt=7;At.getPositions=function(t){const o=te(t);return[[0,0],[o-mt,0],[0,o-mt]]};var It={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,u=0,a=0,l=null,c=null;for(let E=0;E<n;E++){u=a=0,l=c=null;for(let m=0;m<n;m++){let f=r.get(E,m);f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1),f=r.get(m,E),f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1)}u>=5&&(s+=t.N1+(u-5)),a>=5&&(s+=t.N1+(a-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let u=0;u<n-1;u++)for(let a=0;a<n-1;a++){const l=r.get(u,a)+r.get(u,a+1)+r.get(u+1,a)+r.get(u+1,a+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,u=0,a=0;for(let l=0;l<n;l++){u=a=0;for(let c=0;c<n;c++)u=u<<1&2047|r.get(l,c),c>=10&&(u===1488||u===93)&&s++,a=a<<1&2047|r.get(c,l),c>=10&&(a===1488||a===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let a=0;a<s;a++)n+=r.data[a];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function o(i,r,n){switch(i){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(r,n){const s=n.size;for(let u=0;u<s;u++)for(let a=0;a<s;a++)n.isReserved(a,u)||n.xor(a,u,o(r,a,u))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let u=0,a=1/0;for(let l=0;l<s;l++){n(l),e.applyMask(l,r);const c=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(l,r),c<a&&(a=c,u=l)}return u}})(It);var $={};const R=Y,V=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],K=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];$.getBlocksCount=function(t,o){switch(o){case R.L:return V[(t-1)*4+0];case R.M:return V[(t-1)*4+1];case R.Q:return V[(t-1)*4+2];case R.H:return V[(t-1)*4+3];default:return}};$.getTotalCodewordsCount=function(t,o){switch(o){case R.L:return K[(t-1)*4+0];case R.M:return K[(t-1)*4+1];case R.Q:return K[(t-1)*4+2];case R.H:return K[(t-1)*4+3];default:return}};var Tt={},j={};const k=new Uint8Array(512),J=new Uint8Array(256);(function(){let t=1;for(let o=0;o<255;o++)k[o]=t,J[t]=o,t<<=1,t&256&&(t^=285);for(let o=255;o<512;o++)k[o]=k[o-255]})();j.log=function(t){if(t<1)throw new Error("log("+t+")");return J[t]};j.exp=function(t){return k[t]};j.mul=function(t,o){return t===0||o===0?0:k[J[t]+J[o]]};(function(e){const t=j;e.mul=function(i,r){const n=new Uint8Array(i.length+r.length-1);for(let s=0;s<i.length;s++)for(let u=0;u<r.length;u++)n[s+u]^=t.mul(i[s],r[u]);return n},e.mod=function(i,r){let n=new Uint8Array(i);for(;n.length-r.length>=0;){const s=n[0];for(let a=0;a<r.length;a++)n[a]^=t.mul(r[a],s);let u=0;for(;u<n.length&&n[u]===0;)u++;n=n.slice(u)}return n},e.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let n=0;n<i;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(Tt);const Nt=Tt;function st(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}st.prototype.initialize=function(t){this.degree=t,this.genPoly=Nt.generateECPolynomial(this.degree)};st.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(t.length+this.degree);o.set(t);const i=Nt.mod(o,this.genPoly),r=this.degree-i.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(i,r),n}return i};var ee=st,St={},L={},at={};at.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var M={};const Mt="[0-9]+",ne="[A-Z $%*+\\-./:]+";let z="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";z=z.replace(/u/g,"\\u");const re="(?:(?![A-Z0-9 $%*+\\-./:]|"+z+`)(?:.|[\r
]))+`;M.KANJI=new RegExp(z,"g");M.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");M.BYTE=new RegExp(re,"g");M.NUMERIC=new RegExp(Mt,"g");M.ALPHANUMERIC=new RegExp(ne,"g");const oe=new RegExp("^"+z+"$"),ie=new RegExp("^"+Mt+"$"),se=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");M.testKanji=function(t){return oe.test(t)};M.testNumeric=function(t){return ie.test(t)};M.testAlphanumeric=function(t){return se.test(t)};(function(e){const t=at,o=M;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return o.testNumeric(n)?e.NUMERIC:o.testAlphanumeric(n)?e.ALPHANUMERIC:o.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return i(n)}catch(u){return s}}})(L);(function(e){const t=T,o=$,i=Y,r=L,n=at,s=7973,u=t.getBCHDigit(s);function a(m,f,d){for(let w=1;w<=40;w++)if(f<=e.getCapacity(w,d,m))return w}function l(m,f){return r.getCharCountIndicator(m,f)+4}function c(m,f){let d=0;return m.forEach(function(w){const A=l(w.mode,f);d+=A+w.getBitsLength()}),d}function E(m,f){for(let d=1;d<=40;d++)if(c(m,d)<=e.getCapacity(d,f,r.MIXED))return d}e.from=function(f,d){return n.isValid(f)?parseInt(f,10):d},e.getCapacity=function(f,d,w){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof w=="undefined"&&(w=r.BYTE);const A=t.getSymbolTotalCodewords(f),C=o.getTotalCodewordsCount(f,d),y=(A-C)*8;if(w===r.MIXED)return y;const g=y-l(w,f);switch(w){case r.NUMERIC:return Math.floor(g/10*3);case r.ALPHANUMERIC:return Math.floor(g/11*2);case r.KANJI:return Math.floor(g/13);case r.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,d){let w;const A=i.from(d,i.M);if(Array.isArray(f)){if(f.length>1)return E(f,A);if(f.length===0)return 1;w=f[0]}else w=f;return a(w.mode,w.getLength(),A)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let d=f<<12;for(;t.getBCHDigit(d)-u>=0;)d^=s<<t.getBCHDigit(d)-u;return f<<12|d}})(St);var bt={};const et=T,Pt=1335,ae=21522,wt=et.getBCHDigit(Pt);bt.getEncodedBits=function(t,o){const i=t.bit<<3|o;let r=i<<10;for(;et.getBCHDigit(r)-wt>=0;)r^=Pt<<et.getBCHDigit(r)-wt;return(i<<10|r)^ae};var Rt={};const ue=L;function D(e){this.mode=ue.NUMERIC,this.data=e.toString()}D.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let o,i,r;for(o=0;o+3<=this.data.length;o+=3)i=this.data.substr(o,3),r=parseInt(i,10),t.put(r,10);const n=this.data.length-o;n>0&&(i=this.data.substr(o),r=parseInt(i,10),t.put(r,n*3+1))};var ce=D;const le=L,q=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function _(e){this.mode=le.ALPHANUMERIC,this.data=e}_.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(t){let o;for(o=0;o+2<=this.data.length;o+=2){let i=q.indexOf(this.data[o])*45;i+=q.indexOf(this.data[o+1]),t.put(i,11)}this.data.length%2&&t.put(q.indexOf(this.data[o]),6)};var fe=_,de=function(t){for(var o=[],i=t.length,r=0;r<i;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&i>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){o.push(n);continue}if(n<2048){o.push(n>>6|192),o.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){o.push(n>>12|224),o.push(n>>6&63|128),o.push(n&63|128);continue}if(n>=65536&&n<=1114111){o.push(n>>18|240),o.push(n>>12&63|128),o.push(n>>6&63|128),o.push(n&63|128);continue}o.push(239,191,189)}return new Uint8Array(o).buffer};const ge=de,he=L;function U(e){this.mode=he.BYTE,typeof e=="string"&&(e=ge(e)),this.data=new Uint8Array(e)}U.getBitsLength=function(t){return t*8};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(e){for(let t=0,o=this.data.length;t<o;t++)e.put(this.data[t],8)};var me=U;const we=L,Ce=T;function v(e){this.mode=we.KANJI,this.data=e}v.getBitsLength=function(t){return t*13};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let o=Ce.toSJIS(this.data[t]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),e.put(o,13)}};var ye=v,Lt={exports:{}};(function(e){var t={single_source_shortest_paths:function(o,i,r){var n={},s={};s[i]=0;var u=t.PriorityQueue.make();u.push(i,0);for(var a,l,c,E,m,f,d,w,A;!u.empty();){a=u.pop(),l=a.value,E=a.cost,m=o[l]||{};for(c in m)m.hasOwnProperty(c)&&(f=m[c],d=E+f,w=s[c],A=typeof s[c]=="undefined",(A||w>d)&&(s[c]=d,u.push(c,d),n[c]=l))}if(typeof r!="undefined"&&typeof s[r]=="undefined"){var C=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(C)}return n},extract_shortest_path_from_predecessor_list:function(o,i){for(var r=[],n=i;n;)r.push(n),o[n],n=o[n];return r.reverse(),r},find_path:function(o,i,r){var n=t.single_source_shortest_paths(o,i,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(o){var i=t.PriorityQueue,r={},n;o=o||{};for(n in i)i.hasOwnProperty(n)&&(r[n]=i[n]);return r.queue=[],r.sorter=o.sorter||i.default_sorter,r},default_sorter:function(o,i){return o.cost-i.cost},push:function(o,i){var r={value:o,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Lt);var Ee=Lt.exports;(function(e){const t=L,o=ce,i=fe,r=me,n=ye,s=M,u=T,a=Ee;function l(C){return unescape(encodeURIComponent(C)).length}function c(C,y,g){const h=[];let p;for(;(p=C.exec(g))!==null;)h.push({data:p[0],index:p.index,mode:y,length:p[0].length});return h}function E(C){const y=c(s.NUMERIC,t.NUMERIC,C),g=c(s.ALPHANUMERIC,t.ALPHANUMERIC,C);let h,p;return u.isKanjiModeEnabled()?(h=c(s.BYTE,t.BYTE,C),p=c(s.KANJI,t.KANJI,C)):(h=c(s.BYTE_KANJI,t.BYTE,C),p=[]),y.concat(g,h,p).sort(function(I,N){return I.index-N.index}).map(function(I){return{data:I.data,mode:I.mode,length:I.length}})}function m(C,y){switch(y){case t.NUMERIC:return o.getBitsLength(C);case t.ALPHANUMERIC:return i.getBitsLength(C);case t.KANJI:return n.getBitsLength(C);case t.BYTE:return r.getBitsLength(C)}}function f(C){return C.reduce(function(y,g){const h=y.length-1>=0?y[y.length-1]:null;return h&&h.mode===g.mode?(y[y.length-1].data+=g.data,y):(y.push(g),y)},[])}function d(C){const y=[];for(let g=0;g<C.length;g++){const h=C[g];switch(h.mode){case t.NUMERIC:y.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:y.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:y.push([h,{data:h.data,mode:t.BYTE,length:l(h.data)}]);break;case t.BYTE:y.push([{data:h.data,mode:t.BYTE,length:l(h.data)}])}}return y}function w(C,y){const g={},h={start:{}};let p=["start"];for(let B=0;B<C.length;B++){const I=C[B],N=[];for(let P=0;P<I.length;P++){const S=I[P],F=""+B+P;N.push(F),g[F]={node:S,lastCount:0},h[F]={};for(let G=0;G<p.length;G++){const b=p[G];g[b]&&g[b].node.mode===S.mode?(h[b][F]=m(g[b].lastCount+S.length,S.mode)-m(g[b].lastCount,S.mode),g[b].lastCount+=S.length):(g[b]&&(g[b].lastCount=S.length),h[b][F]=m(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,y))}}p=N}for(let B=0;B<p.length;B++)h[p[B]].end=0;return{map:h,table:g}}function A(C,y){let g;const h=t.getBestModeForData(C);if(g=t.from(y,h),g!==t.BYTE&&g.bit<h.bit)throw new Error('"'+C+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(h));switch(g===t.KANJI&&!u.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new o(C);case t.ALPHANUMERIC:return new i(C);case t.KANJI:return new n(C);case t.BYTE:return new r(C)}}e.fromArray=function(y){return y.reduce(function(g,h){return typeof h=="string"?g.push(A(h,null)):h.data&&g.push(A(h.data,h.mode)),g},[])},e.fromString=function(y,g){const h=E(y,u.isKanjiModeEnabled()),p=d(h),B=w(p,g),I=a.find_path(B.map,"start","end"),N=[];for(let P=1;P<I.length-1;P++)N.push(B.table[I[P]].node);return e.fromArray(f(N))},e.rawSplit=function(y){return e.fromArray(E(y,u.isKanjiModeEnabled()))}})(Rt);const Q=T,X=Y,pe=Zt,Be=xt,Ae=Bt,Ie=At,nt=It,rt=$,Te=ee,O=St,Ne=bt,Se=L,Z=Rt;function Me(e,t){const o=e.size,i=Ie.getPositions(t);for(let r=0;r<i.length;r++){const n=i[r][0],s=i[r][1];for(let u=-1;u<=7;u++)if(!(n+u<=-1||o<=n+u))for(let a=-1;a<=7;a++)s+a<=-1||o<=s+a||(u>=0&&u<=6&&(a===0||a===6)||a>=0&&a<=6&&(u===0||u===6)||u>=2&&u<=4&&a>=2&&a<=4?e.set(n+u,s+a,!0,!0):e.set(n+u,s+a,!1,!0))}}function be(e){const t=e.size;for(let o=8;o<t-8;o++){const i=o%2===0;e.set(o,6,i,!0),e.set(6,o,i,!0)}}function Pe(e,t){const o=Ae.getPositions(t);for(let i=0;i<o.length;i++){const r=o[i][0],n=o[i][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?e.set(r+s,n+u,!0,!0):e.set(r+s,n+u,!1,!0)}}function Re(e,t){const o=e.size,i=O.getEncodedBits(t);let r,n,s;for(let u=0;u<18;u++)r=Math.floor(u/3),n=u%3+o-8-3,s=(i>>u&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function x(e,t,o){const i=e.size,r=Ne.getEncodedBits(t,o);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(i-15+n,8,s,!0),n<8?e.set(8,i-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(i-8,8,1,!0)}function Le(e,t){const o=e.size;let i=-1,r=o-1,n=7,s=0;for(let u=o-1;u>0;u-=2)for(u===6&&u--;;){for(let a=0;a<2;a++)if(!e.isReserved(r,u-a)){let l=!1;s<t.length&&(l=(t[s]>>>n&1)===1),e.set(r,u-a,l),n--,n===-1&&(s++,n=7)}if(r+=i,r<0||o<=r){r-=i,i=-i;break}}}function De(e,t,o){const i=new pe;o.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),Se.getCharCountIndicator(a.mode,e)),a.write(i)});const r=Q.getSymbolTotalCodewords(e),n=rt.getTotalCodewordsCount(e,t),s=(r-n)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const u=(s-i.getLengthInBits())/8;for(let a=0;a<u;a++)i.put(a%2?17:236,8);return _e(i,e,t)}function _e(e,t,o){const i=Q.getSymbolTotalCodewords(t),r=rt.getTotalCodewordsCount(t,o),n=i-r,s=rt.getBlocksCount(t,o),u=i%s,a=s-u,l=Math.floor(i/s),c=Math.floor(n/s),E=c+1,m=l-c,f=new Te(m);let d=0;const w=new Array(s),A=new Array(s);let C=0;const y=new Uint8Array(e.buffer);for(let I=0;I<s;I++){const N=I<a?c:E;w[I]=y.slice(d,d+N),A[I]=f.encode(w[I]),d+=N,C=Math.max(C,N)}const g=new Uint8Array(i);let h=0,p,B;for(p=0;p<C;p++)for(B=0;B<s;B++)p<w[B].length&&(g[h++]=w[B][p]);for(p=0;p<m;p++)for(B=0;B<s;B++)g[h++]=A[B][p];return g}function Ue(e,t,o,i){let r;if(Array.isArray(e))r=Z.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const c=Z.rawSplit(e);l=O.getBestVersionForData(c,o)}r=Z.fromString(e,l||40)}else throw new Error("Invalid data");const n=O.getBestVersionForData(r,o);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=De(t,o,r),u=Q.getSymbolSize(t),a=new Be(u);return Me(a,t),be(a),Pe(a,t),x(a,o,0),t>=7&&Re(a,t),Le(a,s),isNaN(i)&&(i=nt.getBestMask(a,x.bind(null,a,o))),nt.applyMask(i,a),x(a,o,i),{modules:a,version:t,errorCorrectionLevel:o,maskPattern:i,segments:r}}Et.create=function(t,o){if(typeof t=="undefined"||t==="")throw new Error("No input text");let i=X.M,r,n;return typeof o!="undefined"&&(i=X.from(o.errorCorrectionLevel,X.M),r=O.from(o.version),n=nt.from(o.maskPattern),o.toSJISFunc&&Q.setToSJISFunction(o.toSJISFunc)),Ue(t,r,i,n)};var Dt={},ut={};(function(e){function t(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let i=o.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+o);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(n){return[n,n]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin=="undefined"||i.margin===null||i.margin<0?4:i.margin,n=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},e.getImageWidth=function(i,r){const n=e.getScale(i,r);return Math.floor((i+r.margin*2)*n)},e.qrToImageData=function(i,r,n){const s=r.modules.size,u=r.modules.data,a=e.getScale(s,n),l=Math.floor((s+n.margin*2)*a),c=n.margin*a,E=[n.color.light,n.color.dark];for(let m=0;m<l;m++)for(let f=0;f<l;f++){let d=(m*l+f)*4,w=n.color.light;if(m>=c&&f>=c&&m<l-c&&f<l-c){const A=Math.floor((m-c)/a),C=Math.floor((f-c)/a);w=E[u[A*s+C]?1:0]}i[d++]=w.r,i[d++]=w.g,i[d++]=w.b,i[d]=w.a}}})(ut);(function(e){const t=ut;function o(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch(r){throw new Error("You need to specify a canvas element")}}e.render=function(n,s,u){let a=u,l=s;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(l=i()),a=t.getOptions(a);const c=t.getImageWidth(n.modules.size,a),E=l.getContext("2d"),m=E.createImageData(c,c);return t.qrToImageData(m.data,n,a),o(E,l,c),E.putImageData(m,0,0),l},e.renderToDataURL=function(n,s,u){let a=u;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const l=e.render(n,s,a),c=a.type||"image/png",E=a.rendererOpts||{};return l.toDataURL(c,E.quality)}})(Dt);var _t={};const ve=ut;function Ct(e,t){const o=e.a/255,i=t+'="'+e.hex+'"';return o<1?i+" "+t+'-opacity="'+o.toFixed(2).slice(1)+'"':i}function tt(e,t,o){let i=e+t;return typeof o!="undefined"&&(i+=" "+o),i}function Fe(e,t,o){let i="",r=0,n=!1,s=0;for(let u=0;u<e.length;u++){const a=Math.floor(u%t),l=Math.floor(u/t);!a&&!n&&(n=!0),e[u]?(s++,u>0&&a>0&&e[u-1]||(i+=n?tt("M",a+o,.5+l+o):tt("m",r,0),r=0,n=!1),a+1<t&&e[u+1]||(i+=tt("h",s),s=0)):r++}return i}_t.render=function(t,o,i){const r=ve.getOptions(o),n=t.modules.size,s=t.modules.data,u=n+r.margin*2,a=r.color.light.a?"<path "+Ct(r.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",l="<path "+Ct(r.color.dark,"stroke")+' d="'+Fe(s,n,r.margin)+'"/>',c='viewBox="0 0 '+u+" "+u+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+c+' shape-rendering="crispEdges">'+a+l+`</svg>
`;return typeof i=="function"&&i(null,m),m};const ke=qt,ot=Et,Ut=Dt,ze=_t;function ct(e,t,o,i,r){const n=[].slice.call(arguments,1),s=n.length,u=typeof n[s-1]=="function";if(!u&&!ke())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(r=o,o=t,t=i=void 0):s===3&&(t.getContext&&typeof r=="undefined"?(r=i,i=void 0):(r=i,i=o,o=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(o=t,t=i=void 0):s===2&&!t.getContext&&(i=o,o=t,t=void 0),new Promise(function(a,l){try{const c=ot.create(o,i);a(e(c,t,i))}catch(c){l(c)}})}try{const a=ot.create(o,i);r(null,e(a,t,i))}catch(a){r(a)}}ot.create;var vt=ct.bind(null,Ut.render),He=ct.bind(null,Ut.renderToDataURL);ct.bind(null,function(e,t,o){return ze.render(e,o)});const Ve=({canvas:e,content:t,width:o=0,options:i={}})=>{const r=Vt(i);return r.errorCorrectionLevel=r.errorCorrectionLevel||Je(t),Ke(t,r).then(n=>(r.scale=o===0?void 0:o/n*4,vt(e,t,r)))};function Ke(e,t){const o=document.createElement("canvas");return vt(o,e,t).then(()=>o.width)}function Je(e){return e.length>36?"M":e.length>16?"Q":"H"}const Oe=({canvas:e,logo:t})=>{if(!t)return new Promise(y=>{y(e.toDataURL())});const o=e.width,{logoSize:i=.15,bgColor:r="#ffffff",borderSize:n=.05,crossOrigin:s,borderRadius:u=8,logoRadius:a=0}=t,l=Kt(t)?t:t.src,c=o*i,E=o*(1-i)/2,m=o*(i+n),f=o*(1-i-n)/2,d=e.getContext("2d");if(!d)return;yt(d)(f,f,m,m,u),d.fillStyle=r,d.fill();const w=new Image;(s||a)&&w.setAttribute("crossOrigin",s||"anonymous"),w.src=l;const A=y=>{d.drawImage(y,E,E,c,c)},C=y=>{const g=document.createElement("canvas");g.width=E+c,g.height=E+c;const h=g.getContext("2d");if(!h||!d||(h.drawImage(y,E,E,c,c),yt(d)(E,E,c,c,a),!d))return;const p=d.createPattern(g,"no-repeat");p&&(d.fillStyle=p,d.fill())};return new Promise(y=>{w.onload=()=>{a?C(w):A(w),y(e.toDataURL())}})};function yt(e){return(t,o,i,r,n)=>{const s=Math.min(i,r);return n>s/2&&(n=s/2),e.beginPath(),e.moveTo(t+n,o),e.arcTo(t+i,o,t+i,o+r,n),e.arcTo(t+i,o+r,t,o+r,n),e.arcTo(t,o+r,t,o,n),e.arcTo(t,o,t+i,o,n),e.closePath(),e}}const Ye=e=>Ve(e).then(()=>e).then(Oe),$e=Ot({name:"QrCode",__name:"Qrcode",props:{value:{type:[String,Array],default:null},options:{type:Object,default:null},width:{type:Number,default:200},logo:{type:[String,Object],default:""},tag:{type:String,default:"canvas",validator:e=>["canvas","img"].includes(e)}},emits:{done:e=>!!e,error:e=>!!e},setup(e,{expose:t,emit:o}){const i=e,r=o,n=Yt(null);function s(){return gt(this,null,function*(){try{const{tag:a,value:l,options:c={},width:E,logo:m}=i,f=String(l),d=W(n);if(!d)return;if(a==="canvas"){const w=yield Ye({canvas:d,width:E,logo:m,content:f,options:c||{}});r("done",{url:w,ctx:d.getContext("2d")});return}if(a==="img"){const w=yield He(f,dt({errorCorrectionLevel:"H",width:E},c));W(n).src=w,r("done",{url:w})}}catch(a){r("error",a)}})}function u(a){let l="";const c=W(n);c instanceof HTMLCanvasElement?l=c.toDataURL():c instanceof HTMLImageElement&&(l=c.src),l&&Jt({url:l,fileName:a})}return $t(s),jt(i,()=>{s()},{deep:!0}),t({download:u}),(a,l)=>(ht(),Qt("div",null,[(ht(),Gt(Wt(e.tag),{ref_key:"wrapRef",ref:n},null,512))]))}}),Xe=Ht($e);export{Xe as Q};