import{u as E,t as Gr,r as d,v as qr,j as s,C as Kr}from"./index-a7de6986.js";import{c as bt,a as N,b as Yr}from"./index.esm-9b7fe36a.js";import{S as Ue}from"./react-select.esm-d8be43b9.js";import{P as Zr}from"./PageTitle-1fb7b0b4.js";import"./assertThisInitialized-1133aedc.js";const Qr=E.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,Xr=E.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Jr=E.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }
`,wt=E.p`
  margin-bottom: ${({mb:e})=>e};
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    font-size: 24px;

    margin-bottom: ${({mb:e})=>e==="20px"?"24px":"40px"};
  }
`;var en=function(t){return tn(t)&&!rn(t)};function tn(e){return!!e&&typeof e=="object"}function rn(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||on(e)}var nn=typeof Symbol=="function"&&Symbol.for,an=nn?Symbol.for("react.element"):60103;function on(e){return e.$$typeof===an}function sn(e){return Array.isArray(e)?[]:{}}function xe(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ue(sn(e),e,t):e}function ln(e,t,r){return e.concat(t).map(function(i){return xe(i,r)})}function cn(e,t,r){var i={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(n){i[n]=xe(e[n],r)}),Object.keys(t).forEach(function(n){!r.isMergeableObject(t[n])||!e[n]?i[n]=xe(t[n],r):i[n]=ue(e[n],t[n],r)}),i}function ue(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||ln,r.isMergeableObject=r.isMergeableObject||en;var i=Array.isArray(t),n=Array.isArray(e),a=i===n;return a?i?r.arrayMerge(e,t,r):cn(e,t,r):xe(t,r)}ue.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(i,n){return ue(i,n,r)},{})};var Be=ue,un=typeof global=="object"&&global&&global.Object===Object&&global;const er=un;var dn=typeof self=="object"&&self&&self.Object===Object&&self,fn=er||dn||Function("return this")();const V=fn;var pn=V.Symbol;const H=pn;var tr=Object.prototype,hn=tr.hasOwnProperty,gn=tr.toString,se=H?H.toStringTag:void 0;function mn(e){var t=hn.call(e,se),r=e[se];try{e[se]=void 0;var i=!0}catch{}var n=gn.call(e);return i&&(t?e[se]=r:delete e[se]),n}var vn=Object.prototype,yn=vn.toString;function xn(e){return yn.call(e)}var bn="[object Null]",wn="[object Undefined]",jt=H?H.toStringTag:void 0;function Q(e){return e==null?e===void 0?wn:bn:jt&&jt in Object(e)?mn(e):xn(e)}function rr(e,t){return function(r){return e(t(r))}}var jn=rr(Object.getPrototypeOf,Object);const Ze=jn;function X(e){return e!=null&&typeof e=="object"}var Tn="[object Object]",Sn=Function.prototype,En=Object.prototype,nr=Sn.toString,An=En.hasOwnProperty,Cn=nr.call(Object);function Tt(e){if(!X(e)||Q(e)!=Tn)return!1;var t=Ze(e);if(t===null)return!0;var r=An.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&nr.call(r)==Cn}var St=Array.isArray,Et=Object.keys,_n=Object.prototype.hasOwnProperty,Fn=typeof Element<"u";function He(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=St(e),i=St(t),n,a,l;if(r&&i){if(a=e.length,a!=t.length)return!1;for(n=a;n--!==0;)if(!He(e[n],t[n]))return!1;return!0}if(r!=i)return!1;var c=e instanceof Date,g=t instanceof Date;if(c!=g)return!1;if(c&&g)return e.getTime()==t.getTime();var v=e instanceof RegExp,F=t instanceof RegExp;if(v!=F)return!1;if(v&&F)return e.toString()==t.toString();var w=Et(e);if(a=w.length,a!==Et(t).length)return!1;for(n=a;n--!==0;)if(!_n.call(t,w[n]))return!1;if(Fn&&e instanceof Element&&t instanceof Element)return e===t;for(n=a;n--!==0;)if(l=w[n],!(l==="_owner"&&e.$$typeof)&&!He(e[l],t[l]))return!1;return!0}return e!==e&&t!==t}var $n=function(t,r){try{return He(t,r)}catch(i){if(i.message&&i.message.match(/stack|recursion/i)||i.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",i.name,i.message),!1;throw i}};const B=Gr($n);var In=!0;function ir(e,t){if(!In){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function On(){this.__data__=[],this.size=0}function ar(e,t){return e===t||e!==e&&t!==t}function be(e,t){for(var r=e.length;r--;)if(ar(e[r][0],t))return r;return-1}var Mn=Array.prototype,Rn=Mn.splice;function kn(e){var t=this.__data__,r=be(t,e);if(r<0)return!1;var i=t.length-1;return r==i?t.pop():Rn.call(t,r,1),--this.size,!0}function Pn(e){var t=this.__data__,r=be(t,e);return r<0?void 0:t[r][1]}function Ln(e){return be(this.__data__,e)>-1}function Nn(e,t){var r=this.__data__,i=be(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}function U(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}U.prototype.clear=On;U.prototype.delete=kn;U.prototype.get=Pn;U.prototype.has=Ln;U.prototype.set=Nn;function Dn(){this.__data__=new U,this.size=0}function Vn(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function zn(e){return this.__data__.get(e)}function Un(e){return this.__data__.has(e)}function pe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Bn="[object AsyncFunction]",Hn="[object Function]",Wn="[object GeneratorFunction]",Gn="[object Proxy]";function or(e){if(!pe(e))return!1;var t=Q(e);return t==Hn||t==Wn||t==Bn||t==Gn}var qn=V["__core-js_shared__"];const Me=qn;var At=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Kn(e){return!!At&&At in e}var Yn=Function.prototype,Zn=Yn.toString;function J(e){if(e!=null){try{return Zn.call(e)}catch{}try{return e+""}catch{}}return""}var Qn=/[\\^$.*+?()[\]{}|]/g,Xn=/^\[object .+?Constructor\]$/,Jn=Function.prototype,ei=Object.prototype,ti=Jn.toString,ri=ei.hasOwnProperty,ni=RegExp("^"+ti.call(ri).replace(Qn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ii(e){if(!pe(e)||Kn(e))return!1;var t=or(e)?ni:Xn;return t.test(J(e))}function ai(e,t){return e==null?void 0:e[t]}function ee(e,t){var r=ai(e,t);return ii(r)?r:void 0}var oi=ee(V,"Map");const de=oi;var si=ee(Object,"create");const fe=si;function li(){this.__data__=fe?fe(null):{},this.size=0}function ci(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ui="__lodash_hash_undefined__",di=Object.prototype,fi=di.hasOwnProperty;function pi(e){var t=this.__data__;if(fe){var r=t[e];return r===ui?void 0:r}return fi.call(t,e)?t[e]:void 0}var hi=Object.prototype,gi=hi.hasOwnProperty;function mi(e){var t=this.__data__;return fe?t[e]!==void 0:gi.call(t,e)}var vi="__lodash_hash_undefined__";function yi(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fe&&t===void 0?vi:t,this}function Y(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Y.prototype.clear=li;Y.prototype.delete=ci;Y.prototype.get=pi;Y.prototype.has=mi;Y.prototype.set=yi;function xi(){this.size=0,this.__data__={hash:new Y,map:new(de||U),string:new Y}}function bi(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function we(e,t){var r=e.__data__;return bi(t)?r[typeof t=="string"?"string":"hash"]:r.map}function wi(e){var t=we(this,e).delete(e);return this.size-=t?1:0,t}function ji(e){return we(this,e).get(e)}function Ti(e){return we(this,e).has(e)}function Si(e,t){var r=we(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this}function W(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}W.prototype.clear=xi;W.prototype.delete=wi;W.prototype.get=ji;W.prototype.has=Ti;W.prototype.set=Si;var Ei=200;function Ai(e,t){var r=this.__data__;if(r instanceof U){var i=r.__data__;if(!de||i.length<Ei-1)return i.push([e,t]),this.size=++r.size,this;r=this.__data__=new W(i)}return r.set(e,t),this.size=r.size,this}function ae(e){var t=this.__data__=new U(e);this.size=t.size}ae.prototype.clear=Dn;ae.prototype.delete=Vn;ae.prototype.get=zn;ae.prototype.has=Un;ae.prototype.set=Ai;function Ci(e,t){for(var r=-1,i=e==null?0:e.length;++r<i&&t(e[r],r,e)!==!1;);return e}var _i=function(){try{var e=ee(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Ct=_i;function sr(e,t,r){t=="__proto__"&&Ct?Ct(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Fi=Object.prototype,$i=Fi.hasOwnProperty;function lr(e,t,r){var i=e[t];(!($i.call(e,t)&&ar(i,r))||r===void 0&&!(t in e))&&sr(e,t,r)}function je(e,t,r,i){var n=!r;r||(r={});for(var a=-1,l=t.length;++a<l;){var c=t[a],g=i?i(r[c],e[c],c,r,e):void 0;g===void 0&&(g=e[c]),n?sr(r,c,g):lr(r,c,g)}return r}function Ii(e,t){for(var r=-1,i=Array(e);++r<e;)i[r]=t(r);return i}var Oi="[object Arguments]";function _t(e){return X(e)&&Q(e)==Oi}var cr=Object.prototype,Mi=cr.hasOwnProperty,Ri=cr.propertyIsEnumerable,ki=_t(function(){return arguments}())?_t:function(e){return X(e)&&Mi.call(e,"callee")&&!Ri.call(e,"callee")};const Pi=ki;var Li=Array.isArray;const he=Li;function Ni(){return!1}var ur=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ft=ur&&typeof module=="object"&&module&&!module.nodeType&&module,Di=Ft&&Ft.exports===ur,$t=Di?V.Buffer:void 0,Vi=$t?$t.isBuffer:void 0,zi=Vi||Ni;const dr=zi;var Ui=9007199254740991,Bi=/^(?:0|[1-9]\d*)$/;function Hi(e,t){var r=typeof e;return t=t??Ui,!!t&&(r=="number"||r!="symbol"&&Bi.test(e))&&e>-1&&e%1==0&&e<t}var Wi=9007199254740991;function fr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Wi}var Gi="[object Arguments]",qi="[object Array]",Ki="[object Boolean]",Yi="[object Date]",Zi="[object Error]",Qi="[object Function]",Xi="[object Map]",Ji="[object Number]",ea="[object Object]",ta="[object RegExp]",ra="[object Set]",na="[object String]",ia="[object WeakMap]",aa="[object ArrayBuffer]",oa="[object DataView]",sa="[object Float32Array]",la="[object Float64Array]",ca="[object Int8Array]",ua="[object Int16Array]",da="[object Int32Array]",fa="[object Uint8Array]",pa="[object Uint8ClampedArray]",ha="[object Uint16Array]",ga="[object Uint32Array]",S={};S[sa]=S[la]=S[ca]=S[ua]=S[da]=S[fa]=S[pa]=S[ha]=S[ga]=!0;S[Gi]=S[qi]=S[aa]=S[Ki]=S[oa]=S[Yi]=S[Zi]=S[Qi]=S[Xi]=S[Ji]=S[ea]=S[ta]=S[ra]=S[na]=S[ia]=!1;function ma(e){return X(e)&&fr(e.length)&&!!S[Q(e)]}function Qe(e){return function(t){return e(t)}}var pr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,le=pr&&typeof module=="object"&&module&&!module.nodeType&&module,va=le&&le.exports===pr,Re=va&&er.process,ya=function(){try{var e=le&&le.require&&le.require("util").types;return e||Re&&Re.binding&&Re.binding("util")}catch{}}();const ie=ya;var It=ie&&ie.isTypedArray,xa=It?Qe(It):ma;const ba=xa;var wa=Object.prototype,ja=wa.hasOwnProperty;function hr(e,t){var r=he(e),i=!r&&Pi(e),n=!r&&!i&&dr(e),a=!r&&!i&&!n&&ba(e),l=r||i||n||a,c=l?Ii(e.length,String):[],g=c.length;for(var v in e)(t||ja.call(e,v))&&!(l&&(v=="length"||n&&(v=="offset"||v=="parent")||a&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Hi(v,g)))&&c.push(v);return c}var Ta=Object.prototype;function Xe(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ta;return e===r}var Sa=rr(Object.keys,Object);const Ea=Sa;var Aa=Object.prototype,Ca=Aa.hasOwnProperty;function _a(e){if(!Xe(e))return Ea(e);var t=[];for(var r in Object(e))Ca.call(e,r)&&r!="constructor"&&t.push(r);return t}function gr(e){return e!=null&&fr(e.length)&&!or(e)}function Je(e){return gr(e)?hr(e):_a(e)}function Fa(e,t){return e&&je(t,Je(t),e)}function $a(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Ia=Object.prototype,Oa=Ia.hasOwnProperty;function Ma(e){if(!pe(e))return $a(e);var t=Xe(e),r=[];for(var i in e)i=="constructor"&&(t||!Oa.call(e,i))||r.push(i);return r}function et(e){return gr(e)?hr(e,!0):Ma(e)}function Ra(e,t){return e&&je(t,et(t),e)}var mr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ot=mr&&typeof module=="object"&&module&&!module.nodeType&&module,ka=Ot&&Ot.exports===mr,Mt=ka?V.Buffer:void 0,Rt=Mt?Mt.allocUnsafe:void 0;function Pa(e,t){if(t)return e.slice();var r=e.length,i=Rt?Rt(r):new e.constructor(r);return e.copy(i),i}function vr(e,t){var r=-1,i=e.length;for(t||(t=Array(i));++r<i;)t[r]=e[r];return t}function La(e,t){for(var r=-1,i=e==null?0:e.length,n=0,a=[];++r<i;){var l=e[r];t(l,r,e)&&(a[n++]=l)}return a}function yr(){return[]}var Na=Object.prototype,Da=Na.propertyIsEnumerable,kt=Object.getOwnPropertySymbols,Va=kt?function(e){return e==null?[]:(e=Object(e),La(kt(e),function(t){return Da.call(e,t)}))}:yr;const tt=Va;function za(e,t){return je(e,tt(e),t)}function xr(e,t){for(var r=-1,i=t.length,n=e.length;++r<i;)e[n+r]=t[r];return e}var Ua=Object.getOwnPropertySymbols,Ba=Ua?function(e){for(var t=[];e;)xr(t,tt(e)),e=Ze(e);return t}:yr;const br=Ba;function Ha(e,t){return je(e,br(e),t)}function wr(e,t,r){var i=t(e);return he(e)?i:xr(i,r(e))}function Wa(e){return wr(e,Je,tt)}function Ga(e){return wr(e,et,br)}var qa=ee(V,"DataView");const We=qa;var Ka=ee(V,"Promise");const Ge=Ka;var Ya=ee(V,"Set");const qe=Ya;var Za=ee(V,"WeakMap");const Ke=Za;var Pt="[object Map]",Qa="[object Object]",Lt="[object Promise]",Nt="[object Set]",Dt="[object WeakMap]",Vt="[object DataView]",Xa=J(We),Ja=J(de),eo=J(Ge),to=J(qe),ro=J(Ke),q=Q;(We&&q(new We(new ArrayBuffer(1)))!=Vt||de&&q(new de)!=Pt||Ge&&q(Ge.resolve())!=Lt||qe&&q(new qe)!=Nt||Ke&&q(new Ke)!=Dt)&&(q=function(e){var t=Q(e),r=t==Qa?e.constructor:void 0,i=r?J(r):"";if(i)switch(i){case Xa:return Vt;case Ja:return Pt;case eo:return Lt;case to:return Nt;case ro:return Dt}return t});const rt=q;var no=Object.prototype,io=no.hasOwnProperty;function ao(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&io.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var oo=V.Uint8Array;const zt=oo;function nt(e){var t=new e.constructor(e.byteLength);return new zt(t).set(new zt(e)),t}function so(e,t){var r=t?nt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var lo=/\w*$/;function co(e){var t=new e.constructor(e.source,lo.exec(e));return t.lastIndex=e.lastIndex,t}var Ut=H?H.prototype:void 0,Bt=Ut?Ut.valueOf:void 0;function uo(e){return Bt?Object(Bt.call(e)):{}}function fo(e,t){var r=t?nt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var po="[object Boolean]",ho="[object Date]",go="[object Map]",mo="[object Number]",vo="[object RegExp]",yo="[object Set]",xo="[object String]",bo="[object Symbol]",wo="[object ArrayBuffer]",jo="[object DataView]",To="[object Float32Array]",So="[object Float64Array]",Eo="[object Int8Array]",Ao="[object Int16Array]",Co="[object Int32Array]",_o="[object Uint8Array]",Fo="[object Uint8ClampedArray]",$o="[object Uint16Array]",Io="[object Uint32Array]";function Oo(e,t,r){var i=e.constructor;switch(t){case wo:return nt(e);case po:case ho:return new i(+e);case jo:return so(e,r);case To:case So:case Eo:case Ao:case Co:case _o:case Fo:case $o:case Io:return fo(e,r);case go:return new i;case mo:case xo:return new i(e);case vo:return co(e);case yo:return new i;case bo:return uo(e)}}var Ht=Object.create,Mo=function(){function e(){}return function(t){if(!pe(t))return{};if(Ht)return Ht(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const Ro=Mo;function ko(e){return typeof e.constructor=="function"&&!Xe(e)?Ro(Ze(e)):{}}var Po="[object Map]";function Lo(e){return X(e)&&rt(e)==Po}var Wt=ie&&ie.isMap,No=Wt?Qe(Wt):Lo;const Do=No;var Vo="[object Set]";function zo(e){return X(e)&&rt(e)==Vo}var Gt=ie&&ie.isSet,Uo=Gt?Qe(Gt):zo;const Bo=Uo;var Ho=1,Wo=2,Go=4,jr="[object Arguments]",qo="[object Array]",Ko="[object Boolean]",Yo="[object Date]",Zo="[object Error]",Tr="[object Function]",Qo="[object GeneratorFunction]",Xo="[object Map]",Jo="[object Number]",Sr="[object Object]",es="[object RegExp]",ts="[object Set]",rs="[object String]",ns="[object Symbol]",is="[object WeakMap]",as="[object ArrayBuffer]",os="[object DataView]",ss="[object Float32Array]",ls="[object Float64Array]",cs="[object Int8Array]",us="[object Int16Array]",ds="[object Int32Array]",fs="[object Uint8Array]",ps="[object Uint8ClampedArray]",hs="[object Uint16Array]",gs="[object Uint32Array]",T={};T[jr]=T[qo]=T[as]=T[os]=T[Ko]=T[Yo]=T[ss]=T[ls]=T[cs]=T[us]=T[ds]=T[Xo]=T[Jo]=T[Sr]=T[es]=T[ts]=T[rs]=T[ns]=T[fs]=T[ps]=T[hs]=T[gs]=!0;T[Zo]=T[Tr]=T[is]=!1;function ce(e,t,r,i,n,a){var l,c=t&Ho,g=t&Wo,v=t&Go;if(r&&(l=n?r(e,i,n,a):r(e)),l!==void 0)return l;if(!pe(e))return e;var F=he(e);if(F){if(l=ao(e),!c)return vr(e,l)}else{var w=rt(e),f=w==Tr||w==Qo;if(dr(e))return Pa(e,c);if(w==Sr||w==jr||f&&!n){if(l=g||f?{}:ko(e),!c)return g?Ha(e,Ra(l,e)):za(e,Fa(l,e))}else{if(!T[w])return n?e:{};l=Oo(e,w,c)}}a||(a=new ae);var A=a.get(e);if(A)return A;a.set(e,l),Bo(e)?e.forEach(function(C){l.add(ce(C,t,r,C,e,a))}):Do(e)&&e.forEach(function(C,_){l.set(_,ce(C,t,r,_,e,a))});var R=v?g?Ga:Wa:g?et:Je,O=F?void 0:R(e);return Ci(O||e,function(C,_){O&&(_=C,C=e[_]),lr(l,_,ce(C,t,r,_,e,a))}),l}var ms=4;function qt(e){return ce(e,ms)}function Er(e,t){for(var r=-1,i=e==null?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n}var vs="[object Symbol]";function it(e){return typeof e=="symbol"||X(e)&&Q(e)==vs}var ys="Expected a function";function at(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(ys);var r=function(){var i=arguments,n=t?t.apply(this,i):i[0],a=r.cache;if(a.has(n))return a.get(n);var l=e.apply(this,i);return r.cache=a.set(n,l)||a,l};return r.cache=new(at.Cache||W),r}at.Cache=W;var xs=500;function bs(e){var t=at(e,function(i){return r.size===xs&&r.clear(),i}),r=t.cache;return t}var ws=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,js=/\\(\\)?/g,Ts=bs(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ws,function(r,i,n,a){t.push(n?a.replace(js,"$1"):i||r)}),t});const Ss=Ts;var Es=1/0;function As(e){if(typeof e=="string"||it(e))return e;var t=e+"";return t=="0"&&1/e==-Es?"-0":t}var Cs=1/0,Kt=H?H.prototype:void 0,Yt=Kt?Kt.toString:void 0;function Ar(e){if(typeof e=="string")return e;if(he(e))return Er(e,Ar)+"";if(it(e))return Yt?Yt.call(e):"";var t=e+"";return t=="0"&&1/e==-Cs?"-0":t}function _s(e){return e==null?"":Ar(e)}function Cr(e){return he(e)?Er(e,As):it(e)?[e]:vr(Ss(_s(e)))}var Fs=1,$s=4;function Is(e){return ce(e,Fs|$s)}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},x.apply(this,arguments)}function Os(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function K(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,a;for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function Zt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Te=d.createContext(void 0);Te.displayName="FormikContext";var Ms=Te.Provider,Rs=Te.Consumer;function _r(){var e=d.useContext(Te);return e||ir(!1),e}var Qt=function(t){return Array.isArray(t)&&t.length===0},M=function(t){return typeof t=="function"},ge=function(t){return t!==null&&typeof t=="object"},ks=function(t){return String(Math.floor(Number(t)))===t},ke=function(t){return Object.prototype.toString.call(t)==="[object String]"},Fr=function(t){return d.Children.count(t)===0},Pe=function(t){return ge(t)&&M(t.then)};function I(e,t,r,i){i===void 0&&(i=0);for(var n=Cr(t);e&&i<n.length;)e=e[n[i++]];return i!==n.length&&!e||e===void 0?r:e}function D(e,t,r){for(var i=qt(e),n=i,a=0,l=Cr(t);a<l.length-1;a++){var c=l[a],g=I(e,l.slice(0,a+1));if(g&&(ge(g)||Array.isArray(g)))n=n[c]=qt(g);else{var v=l[a+1];n=n[c]=ks(v)&&Number(v)>=0?[]:{}}}return(a===0?e:n)[l[a]]===r?e:(r===void 0?delete n[l[a]]:n[l[a]]=r,a===0&&r===void 0&&delete i[l[a]],i)}function $r(e,t,r,i){r===void 0&&(r=new WeakMap),i===void 0&&(i={});for(var n=0,a=Object.keys(e);n<a.length;n++){var l=a[n],c=e[l];ge(c)?r.get(c)||(r.set(c,!0),i[l]=Array.isArray(c)?[]:{},$r(c,t,r,i[l])):i[l]=t}return i}function Ps(e,t){switch(t.type){case"SET_VALUES":return x({},e,{values:t.payload});case"SET_TOUCHED":return x({},e,{touched:t.payload});case"SET_ERRORS":return B(e.errors,t.payload)?e:x({},e,{errors:t.payload});case"SET_STATUS":return x({},e,{status:t.payload});case"SET_ISSUBMITTING":return x({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return x({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return x({},e,{values:D(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return x({},e,{touched:D(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return x({},e,{errors:D(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return x({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return x({},e,{touched:$r(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return x({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return x({},e,{isSubmitting:!1});default:return e}}var G={},ye={};function Ls(e){var t=e.validateOnChange,r=t===void 0?!0:t,i=e.validateOnBlur,n=i===void 0?!0:i,a=e.validateOnMount,l=a===void 0?!1:a,c=e.isInitialValid,g=e.enableReinitialize,v=g===void 0?!1:g,F=e.onSubmit,w=K(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=x({validateOnChange:r,validateOnBlur:n,validateOnMount:l,onSubmit:F},w),A=d.useRef(f.initialValues),R=d.useRef(f.initialErrors||G),O=d.useRef(f.initialTouched||ye),C=d.useRef(f.initialStatus),_=d.useRef(!1),k=d.useRef({});d.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var Se=d.useState(0),Ee=Se[1],me=d.useRef({values:f.initialValues,errors:f.initialErrors||G,touched:f.initialTouched||ye,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),j=me.current,b=d.useCallback(function(o){var u=me.current;me.current=Ps(u,o),u!==me.current&&Ee(function(p){return p+1})},[]),ot=d.useCallback(function(o,u){return new Promise(function(p,h){var m=f.validate(o,u);m==null?p(G):Pe(m)?m.then(function(y){p(y||G)},function(y){h(y)}):p(m)})},[f.validate]),Ae=d.useCallback(function(o,u){var p=f.validationSchema,h=M(p)?p(u):p,m=u&&h.validateAt?h.validateAt(u,o):Vs(o,h);return new Promise(function(y,$){m.then(function(){y(G)},function(z){z.name==="ValidationError"?y(Ds(z)):$(z)})})},[f.validationSchema]),st=d.useCallback(function(o,u){return new Promise(function(p){return p(k.current[o].validate(u))})},[]),lt=d.useCallback(function(o){var u=Object.keys(k.current).filter(function(h){return M(k.current[h].validate)}),p=u.length>0?u.map(function(h){return st(h,I(o,h))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(p).then(function(h){return h.reduce(function(m,y,$){return y==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||y&&(m=D(m,u[$],y)),m},{})})},[st]),Mr=d.useCallback(function(o){return Promise.all([lt(o),f.validationSchema?Ae(o):{},f.validate?ot(o):{}]).then(function(u){var p=u[0],h=u[1],m=u[2],y=Be.all([p,h,m],{arrayMerge:zs});return y})},[f.validate,f.validationSchema,lt,ot,Ae]),L=P(function(o){return o===void 0&&(o=j.values),b({type:"SET_ISVALIDATING",payload:!0}),Mr(o).then(function(u){return _.current&&(b({type:"SET_ISVALIDATING",payload:!1}),b({type:"SET_ERRORS",payload:u})),u})});d.useEffect(function(){l&&_.current===!0&&B(A.current,f.initialValues)&&L(A.current)},[l,L]);var oe=d.useCallback(function(o){var u=o&&o.values?o.values:A.current,p=o&&o.errors?o.errors:R.current?R.current:f.initialErrors||{},h=o&&o.touched?o.touched:O.current?O.current:f.initialTouched||{},m=o&&o.status?o.status:C.current?C.current:f.initialStatus;A.current=u,R.current=p,O.current=h,C.current=m;var y=function(){b({type:"RESET_FORM",payload:{isSubmitting:!!o&&!!o.isSubmitting,errors:p,touched:h,status:m,values:u,isValidating:!!o&&!!o.isValidating,submitCount:o&&o.submitCount&&typeof o.submitCount=="number"?o.submitCount:0}})};if(f.onReset){var $=f.onReset(j.values,yt);Pe($)?$.then(y):y()}else y()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){_.current===!0&&!B(A.current,f.initialValues)&&v&&(A.current=f.initialValues,oe(),l&&L(A.current))},[v,f.initialValues,oe,l,L]),d.useEffect(function(){v&&_.current===!0&&!B(R.current,f.initialErrors)&&(R.current=f.initialErrors||G,b({type:"SET_ERRORS",payload:f.initialErrors||G}))},[v,f.initialErrors]),d.useEffect(function(){v&&_.current===!0&&!B(O.current,f.initialTouched)&&(O.current=f.initialTouched||ye,b({type:"SET_TOUCHED",payload:f.initialTouched||ye}))},[v,f.initialTouched]),d.useEffect(function(){v&&_.current===!0&&!B(C.current,f.initialStatus)&&(C.current=f.initialStatus,b({type:"SET_STATUS",payload:f.initialStatus}))},[v,f.initialStatus,f.initialTouched]);var ct=P(function(o){if(k.current[o]&&M(k.current[o].validate)){var u=I(j.values,o),p=k.current[o].validate(u);return Pe(p)?(b({type:"SET_ISVALIDATING",payload:!0}),p.then(function(h){return h}).then(function(h){b({type:"SET_FIELD_ERROR",payload:{field:o,value:h}}),b({type:"SET_ISVALIDATING",payload:!1})})):(b({type:"SET_FIELD_ERROR",payload:{field:o,value:p}}),Promise.resolve(p))}else if(f.validationSchema)return b({type:"SET_ISVALIDATING",payload:!0}),Ae(j.values,o).then(function(h){return h}).then(function(h){b({type:"SET_FIELD_ERROR",payload:{field:o,value:I(h,o)}}),b({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Rr=d.useCallback(function(o,u){var p=u.validate;k.current[o]={validate:p}},[]),kr=d.useCallback(function(o){delete k.current[o]},[]),ut=P(function(o,u){b({type:"SET_TOUCHED",payload:o});var p=u===void 0?n:u;return p?L(j.values):Promise.resolve()}),dt=d.useCallback(function(o){b({type:"SET_ERRORS",payload:o})},[]),ft=P(function(o,u){var p=M(o)?o(j.values):o;b({type:"SET_VALUES",payload:p});var h=u===void 0?r:u;return h?L(p):Promise.resolve()}),ve=d.useCallback(function(o,u){b({type:"SET_FIELD_ERROR",payload:{field:o,value:u}})},[]),te=P(function(o,u,p){b({type:"SET_FIELD_VALUE",payload:{field:o,value:u}});var h=p===void 0?r:p;return h?L(D(j.values,o,u)):Promise.resolve()}),pt=d.useCallback(function(o,u){var p=u,h=o,m;if(!ke(o)){o.persist&&o.persist();var y=o.target?o.target:o.currentTarget,$=y.type,z=y.name,Ie=y.id,Oe=y.value,Hr=y.checked,jl=y.outerHTML,xt=y.options,Wr=y.multiple;p=u||z||Ie,h=/number|range/.test($)?(m=parseFloat(Oe),isNaN(m)?"":m):/checkbox/.test($)?Bs(I(j.values,p),Hr,Oe):xt&&Wr?Us(xt):Oe}p&&te(p,h)},[te,j.values]),Ce=P(function(o){if(ke(o))return function(u){return pt(u,o)};pt(o)}),re=P(function(o,u,p){u===void 0&&(u=!0),b({type:"SET_FIELD_TOUCHED",payload:{field:o,value:u}});var h=p===void 0?n:p;return h?L(j.values):Promise.resolve()}),ht=d.useCallback(function(o,u){o.persist&&o.persist();var p=o.target,h=p.name,m=p.id,y=p.outerHTML,$=u||h||m;re($,!0)},[re]),_e=P(function(o){if(ke(o))return function(u){return ht(u,o)};ht(o)}),gt=d.useCallback(function(o){M(o)?b({type:"SET_FORMIK_STATE",payload:o}):b({type:"SET_FORMIK_STATE",payload:function(){return o}})},[]),mt=d.useCallback(function(o){b({type:"SET_STATUS",payload:o})},[]),vt=d.useCallback(function(o){b({type:"SET_ISSUBMITTING",payload:o})},[]),Fe=P(function(){return b({type:"SUBMIT_ATTEMPT"}),L().then(function(o){var u=o instanceof Error,p=!u&&Object.keys(o).length===0;if(p){var h;try{if(h=Lr(),h===void 0)return}catch(m){throw m}return Promise.resolve(h).then(function(m){return _.current&&b({type:"SUBMIT_SUCCESS"}),m}).catch(function(m){if(_.current)throw b({type:"SUBMIT_FAILURE"}),m})}else if(_.current&&(b({type:"SUBMIT_FAILURE"}),u))throw o})}),Pr=P(function(o){o&&o.preventDefault&&M(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&M(o.stopPropagation)&&o.stopPropagation(),Fe().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),yt={resetForm:oe,validateForm:L,validateField:ct,setErrors:dt,setFieldError:ve,setFieldTouched:re,setFieldValue:te,setStatus:mt,setSubmitting:vt,setTouched:ut,setValues:ft,setFormikState:gt,submitForm:Fe},Lr=P(function(){return F(j.values,yt)}),Nr=P(function(o){o&&o.preventDefault&&M(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&M(o.stopPropagation)&&o.stopPropagation(),oe()}),Dr=d.useCallback(function(o){return{value:I(j.values,o),error:I(j.errors,o),touched:!!I(j.touched,o),initialValue:I(A.current,o),initialTouched:!!I(O.current,o),initialError:I(R.current,o)}},[j.errors,j.touched,j.values]),Vr=d.useCallback(function(o){return{setValue:function(p,h){return te(o,p,h)},setTouched:function(p,h){return re(o,p,h)},setError:function(p){return ve(o,p)}}},[te,re,ve]),zr=d.useCallback(function(o){var u=ge(o),p=u?o.name:o,h=I(j.values,p),m={name:p,value:h,onChange:Ce,onBlur:_e};if(u){var y=o.type,$=o.value,z=o.as,Ie=o.multiple;y==="checkbox"?$===void 0?m.checked=!!h:(m.checked=!!(Array.isArray(h)&&~h.indexOf($)),m.value=$):y==="radio"?(m.checked=h===$,m.value=$):z==="select"&&Ie&&(m.value=m.value||[],m.multiple=!0)}return m},[_e,Ce,j.values]),$e=d.useMemo(function(){return!B(A.current,j.values)},[A.current,j.values]),Ur=d.useMemo(function(){return typeof c<"u"?$e?j.errors&&Object.keys(j.errors).length===0:c!==!1&&M(c)?c(f):c:j.errors&&Object.keys(j.errors).length===0},[c,$e,j.errors,f]),Br=x({},j,{initialValues:A.current,initialErrors:R.current,initialTouched:O.current,initialStatus:C.current,handleBlur:_e,handleChange:Ce,handleReset:Nr,handleSubmit:Pr,resetForm:oe,setErrors:dt,setFormikState:gt,setFieldTouched:re,setFieldValue:te,setFieldError:ve,setStatus:mt,setSubmitting:vt,setTouched:ut,setValues:ft,submitForm:Fe,validateForm:L,validateField:ct,isValid:Ur,dirty:$e,unregisterField:kr,registerField:Rr,getFieldProps:zr,getFieldMeta:Dr,getFieldHelpers:Vr,validateOnBlur:n,validateOnChange:r,validateOnMount:l});return Br}function Ns(e){var t=Ls(e),r=e.component,i=e.children,n=e.render,a=e.innerRef;return d.useImperativeHandle(a,function(){return t}),d.createElement(Ms,{value:t},r?d.createElement(r,t):n?n(t):i?M(i)?i(t):Fr(i)?null:d.Children.only(i):null)}function Ds(e){var t={};if(e.inner){if(e.inner.length===0)return D(t,e.path,e.message);for(var n=e.inner,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var a;if(r){if(i>=n.length)break;a=n[i++]}else{if(i=n.next(),i.done)break;a=i.value}var l=a;I(t,l.path)||(t=D(t,l.path,l.message))}}return t}function Vs(e,t,r,i){r===void 0&&(r=!1);var n=Ye(e);return t[r?"validateSync":"validate"](n,{abortEarly:!1,context:i||n})}function Ye(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=String(r);Array.isArray(e[i])===!0?t[i]=e[i].map(function(n){return Array.isArray(n)===!0||Tt(n)?Ye(n):n!==""?n:void 0}):Tt(e[i])?t[i]=Ye(e[i]):t[i]=e[i]!==""?e[i]:void 0}return t}function zs(e,t,r){var i=e.slice();return t.forEach(function(a,l){if(typeof i[l]>"u"){var c=r.clone!==!1,g=c&&r.isMergeableObject(a);i[l]=g?Be(Array.isArray(a)?[]:{},a,r):a}else r.isMergeableObject(a)?i[l]=Be(e[l],a,r):e.indexOf(a)===-1&&i.push(a)}),i}function Us(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Bs(e,t,r){if(typeof e=="boolean")return!!t;var i=[],n=!1,a=-1;if(Array.isArray(e))i=e,a=e.indexOf(r),n=a>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!n?i.concat(r):n?i.slice(0,a).concat(i.slice(a+1)):i}var Hs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function P(e){var t=d.useRef(e);return Hs(function(){t.current=e}),d.useCallback(function(){for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return t.current.apply(void 0,i)},[])}function ne(e){var t=e.validate,r=e.name,i=e.render,n=e.children,a=e.as,l=e.component,c=e.className,g=K(e,["validate","name","render","children","as","component","className"]),v=_r(),F=K(v,["validate","validationSchema"]),w=F.registerField,f=F.unregisterField;d.useEffect(function(){return w(r,{validate:t}),function(){f(r)}},[w,f,r,t]);var A=F.getFieldProps(x({name:r},g)),R=F.getFieldMeta(r),O={field:A,form:F};if(i)return i(x({},O,{meta:R}));if(M(n))return n(x({},O,{meta:R}));if(l){if(typeof l=="string"){var C=g.innerRef,_=K(g,["innerRef"]);return d.createElement(l,x({ref:C},A,_,{className:c}),n)}return d.createElement(l,x({field:A,form:F},g,{className:c}),n)}var k=a||"input";if(typeof k=="string"){var Se=g.innerRef,Ee=K(g,["innerRef"]);return d.createElement(k,x({ref:Se},A,Ee,{className:c}),n)}return d.createElement(k,x({},A,g,{className:c}),n)}var Ir=d.forwardRef(function(e,t){var r=e.action,i=K(e,["action"]),n=r??"#",a=_r(),l=a.handleReset,c=a.handleSubmit;return d.createElement("form",x({onSubmit:c,ref:t,onReset:l,action:n},i))});Ir.displayName="Form";function Ws(e){var t=function(n){return d.createElement(Rs,null,function(a){return a||ir(!1),d.createElement(e,x({},n,{formik:a}))})},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",qr(t,e)}var Gs=function(t,r,i){var n=Z(t),a=n[r];return n.splice(r,1),n.splice(i,0,a),n},qs=function(t,r,i){var n=Z(t),a=n[r];return n[r]=n[i],n[i]=a,n},Le=function(t,r,i){var n=Z(t);return n.splice(r,0,i),n},Ks=function(t,r,i){var n=Z(t);return n[r]=i,n},Z=function(t){if(t){if(Array.isArray(t))return[].concat(t);var r=Object.keys(t).map(function(i){return parseInt(i)}).reduce(function(i,n){return n>i?n:i},0);return Array.from(x({},t,{length:r+1}))}else return[]},Xt=function(t,r){var i=typeof t=="function"?t:r;return function(n){if(Array.isArray(n)||ge(n)){var a=Z(n);return i(a)}return n}},Or=function(e){Os(t,e);function t(i){var n;return n=e.call(this,i)||this,n.updateArrayField=function(a,l,c){var g=n.props,v=g.name,F=g.formik.setFormikState;F(function(w){var f=Xt(c,a),A=Xt(l,a),R=D(w.values,v,a(I(w.values,v))),O=c?f(I(w.errors,v)):void 0,C=l?A(I(w.touched,v)):void 0;return Qt(O)&&(O=void 0),Qt(C)&&(C=void 0),x({},w,{values:R,errors:c?D(w.errors,v,O):w.errors,touched:l?D(w.touched,v,C):w.touched})})},n.push=function(a){return n.updateArrayField(function(l){return[].concat(Z(l),[Is(a)])},!1,!1)},n.handlePush=function(a){return function(){return n.push(a)}},n.swap=function(a,l){return n.updateArrayField(function(c){return qs(c,a,l)},!0,!0)},n.handleSwap=function(a,l){return function(){return n.swap(a,l)}},n.move=function(a,l){return n.updateArrayField(function(c){return Gs(c,a,l)},!0,!0)},n.handleMove=function(a,l){return function(){return n.move(a,l)}},n.insert=function(a,l){return n.updateArrayField(function(c){return Le(c,a,l)},function(c){return Le(c,a,null)},function(c){return Le(c,a,null)})},n.handleInsert=function(a,l){return function(){return n.insert(a,l)}},n.replace=function(a,l){return n.updateArrayField(function(c){return Ks(c,a,l)},!1,!1)},n.handleReplace=function(a,l){return function(){return n.replace(a,l)}},n.unshift=function(a){var l=-1;return n.updateArrayField(function(c){var g=c?[a].concat(c):[a];return l=g.length,g},function(c){return c?[null].concat(c):[null]},function(c){return c?[null].concat(c):[null]}),l},n.handleUnshift=function(a){return function(){return n.unshift(a)}},n.handleRemove=function(a){return function(){return n.remove(a)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(Zt(n)),n.pop=n.pop.bind(Zt(n)),n}var r=t.prototype;return r.componentDidUpdate=function(n){this.props.validateOnChange&&this.props.formik.validateOnChange&&!B(I(n.formik.values,n.name),I(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(n){var a;return this.updateArrayField(function(l){var c=l?Z(l):[];return a||(a=c[n]),M(c.splice)&&c.splice(n,1),M(c.every)&&c.every(function(g){return g===void 0})?[]:c},!0,!0),a},r.pop=function(){var n;return this.updateArrayField(function(a){var l=a.slice();return n||(n=l&&l.pop&&l.pop()),l},!0,!0),n},r.render=function(){var n={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},a=this.props,l=a.component,c=a.render,g=a.children,v=a.name,F=a.formik,w=K(F,["validate","validationSchema"]),f=x({},n,{form:w,name:v});return l?d.createElement(l,f):c?c(f):g?typeof g=="function"?g(f):Fr(g)?null:d.Children.only(g):null},t}(d.Component);Or.defaultProps={validateOnChange:!0};var Ys=Ws(Or);const Zs=E.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-bottom: 20px;

  .buttonAdd {
    outline: none;
    border: none;
    border-radius: 42px;
    padding: 14px 40px;
    width: 107px;
    height: 46px;
    background: #f3f3f3;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: #161f37;
    transition: background 0.3s ease;
    @media screen and (min-width: 768px) {
      padding: 18px 44px;
      width: 118px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;
    }
    &:hover {
      background: rgba(64, 112, 205, 0.5);
      color: #f3f3f3;
    }
  }
`,Qs=E.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`,Xs=E.div`
  width: 100%;
  height: 320px;
  background: rgba(22, 31, 55, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,Js=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  p {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    color: #f3f3f3;
  }
`,el=E.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #f3f3f3;
  font-size: 40px;
  color: transparent;
  border-radius: 6px;
  cursor: pointer;
  svg {
    transition: transform 0.5s ease;
    stroke: #161f37;
  }
  &:hover {
    background-color: rgba(64, 112, 205, 0.5);
    svg {
      transform: rotate(90deg);
      transition: transform 0.5s ease;
      stroke: #f3f3f3;
    }
  }
`;E.input`
  display: none;
`;const tl=E.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,rl=E.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 31px;
  @media screen and (min-width: 768px) {
    width: 352px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
    width: 393px;
  }
  .styledDivInput {
    height: 34px;
    width: 100%;
    border-bottom: 1px solid rgba(243, 243, 243, 0.5);
    @media screen and (min-width: 768px) {
      height: 41px;
    }
    transition: all 0.3s ease-in-out;
    &:hover {
      border-bottom: 1px solid #f3f3f3;
    }
  }
  .styledInputText {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    width: 100%;
    height: 90%;
    background-color: transparent;
    border: none;
    outline: none;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .styledInputText::placeholder {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  .labelSelect {
    height: 90%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .labelTitle {
    display: flex;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .selectStyled {
    display: flex;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    position: relative;
  }
`,Jt={dropdownIndicator:(e,t)=>({...e,transform:t.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(e,{isFocused:t})=>({...e,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),placeholder:(e,{isFocused:t})=>({...e,fontSize:"14px",boxShadow:"none",cursor:"pointer",color:"#f3f3f3",display:"flex",alignItems:"center",fontWeight:"400",fontSize:"14px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"16px"}}),menu:e=>({...e,position:"absolute",width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px",right:"-10%","@media only screen and (min-width: 1440px)":{...e["@media only screen and (min-width: 1440px)"],width:"154px",right:"-0%"}},backgroundColor:"#161F37",borderRadius:"12px"}),indicatorSeparator:e=>({...e,display:"none"}),valueContainer:e=>({...e,padding:0}),singleValue:e=>({...e,color:"#f3f3f3"}),option:(e,{isFocused:t,isSelected:r})=>({...e,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...e["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:t?"#f3f3f375":r?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},nl=E.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;

  .radioLabel {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    position: relative;

    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .styledSpan {
    opacity: 0.5;
  }
  .styledRadio {
    cursor: pointer;
  }
  .styledRadio:checked + .styledSpan {
    opacity: 1;
  }
`,il=({categories:e,servings:t})=>s.jsxs(Qs,{children:[s.jsx(Xs,{children:s.jsxs(Js,{children:[s.jsxs(el,{children:[s.jsxs("svg",{width:"29",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M14.5 5.8335V22.1668",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M6.33203 14H22.6654",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx(ne,{style:{display:"none"},type:"file",name:"drinkThumb",accept:"image/*"})]}),s.jsx("p",{children:"Add Image"})]})}),s.jsxs(tl,{children:[s.jsxs(rl,{children:[s.jsx("div",{className:"styledDivInput",children:s.jsx(ne,{className:"styledInputText",placeholder:"Enter item title",name:"name"})}),s.jsx("div",{className:"styledDivInput",children:s.jsx(ne,{className:"styledInputText",placeholder:"Enter item title",name:"description"})}),s.jsx("div",{className:"styledDivInput",children:s.jsxs("label",{className:"labelSelect",children:[s.jsx("p",{className:"labelTitle",children:"Category"}),s.jsx(Ue,{className:"selectStyled",name:"category",options:e,styles:Jt})]})}),s.jsx("div",{className:"styledDivInput",children:s.jsxs("label",{className:"labelSelect",children:[s.jsx("p",{className:"labelTitle",children:"Glass"}),s.jsx(Ue,{className:"selectStyled",name:"serving",options:t,styles:Jt})]})})]}),s.jsxs(nl,{children:[s.jsxs("label",{className:"radioLabel",children:[s.jsx(ne,{className:"styledRadio",type:"radio",name:"alcoholic",value:"true"}),s.jsx("span",{className:"styledSpan",children:"Alcoholic"})]}),s.jsxs("label",{className:"radioLabel",children:[s.jsx(ne,{className:"styledRadio",type:"radio",name:"alcoholic",value:"false"}),s.jsx("span",{className:"styledSpan",children:"Non-alcoholic"})]})]})]})]}),al=E.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,ol=E.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .titleIngredientsForm {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: #f3f3f3;
    @media screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 1.1;
    }
  }
  .containerIngredientInputs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 16px;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 104px;
    height: 38px;
    @media screen and (min-width: 768px) {
      gap: 18px;
      width: 114px;
      height: 44px;
    }
  }
  .quantityTitle {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.56;
    text-align: center;
    color: #f3f3f3;
    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }
`,Ne=E.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`,sl=E.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  .inputsWrapper {
    display: flex;
    align-items: center;
    text-align: center;
  }
  .styledSelect {
    background-color: transparent;

    width: 200px;
    height: 50px;
    margin-right: 8px;

    @media screen and (min-width: 768px) {
      width: 332px;
      height: 56px;
      margin-right: 14px;
    }
    @media screen and (min-width: 1440px) {
      width: 316px;
    }
  }
  .styledInput {
    background-color: transparent;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 101px;
    height: 50px;
    margin-right: 8px;
    color: #f3f3f3;
    padding-left: 24px;
    padding-right: 12px;

    &::placeholder {
      color: #f3f3f3;
    }

    &:hover {
      border: 1px solid rgba(243, 243, 243, 0.918);
    }
    @media screen and (min-width: 768px) {
      width: 150px;
      height: 56px;
      margin-left: 14px;
      margin-right: auto;
    }
  }
`,ll={dropdownIndicator:(e,t)=>({...e,paddingRight:"18px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:t.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(e,t)=>({...e,width:"200px",height:"50px",border:"     1px solid rgba(243, 243, 243, 0.5)",background:"inherit",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:e=>({...e,marginTop:"2px",padding:"0px 12px",backgroundColor:" #161f37",borderRadius:"12px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:e=>({...e,display:"none"}),valueContainer:e=>({...e,padding:"0px 18px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:e=>({...e,color:"#f3f3f3"}),placeholder:e=>({...e,"@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(e,{isFocused:t,isSelected:r})=>({...e,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:t?"#f3f3f375":r?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},cl=({ingredients:e})=>s.jsx(Ys,{name:"ingredients",children:({push:t,remove:r,form:i})=>s.jsxs(al,{children:[s.jsxs(ol,{children:[s.jsx("h4",{className:"titleIngredientsForm",children:"Ingredients"}),s.jsxs("div",{className:"containerIngredientInputs",children:[s.jsx(Ne,{className:"buttonAddRemove",onClick:()=>r(-1),children:s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeOpacity:"0.3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx("p",{className:"quantityTitle",children:i.values.ingredients.length}),s.jsx(Ne,{type:"button",onClick:()=>t({name:"",quantity:""}),className:"buttonAddRemove",children:s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M8 2.5V13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]}),s.jsx(sl,{children:i.values.ingredients.map((n,a)=>s.jsxs("div",{className:"inputsWrapper",children:[s.jsx(Ue,{className:"styledSelect",name:`ingredients.${a}.name`,options:[n],onChange:l=>i.setFieldValue(`ingredients.${a}.name`,l),styles:ll}),s.jsx(ne,{className:"styledInput",name:`ingredients.${a}.quantity`,type:"text",placeholder:"1 Cl"}),s.jsx(Ne,{type:"button",onClick:()=>r(a),children:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]},a))})]})}),ul=E.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,dl=E.div`
  h4 {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: #f3f3f3;
    @media screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 1.1;
    }
  }
`,fl=E.textarea`
  background-color: transparent;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
  padding: 18px 16px;
  color: #f3f3f3;
  height: 184px;
  resize: none;
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.918);
  }
  @media screen and (min-width: 768px) {
    width: 480px;
  }
`,pl=()=>s.jsxs(ul,{children:[s.jsx(dl,{children:s.jsx("h4",{children:"Recipe Preparation"})}),s.jsx(fl,{placeholder:"Enter the recipe",name:"ReciepePreparation"})]}),hl=({categories:e,servings:t,ingredients:r})=>{const i=bt().shape({photo:N().required("Фото коктейлю обов'язкове"),name:N().required("Назва коктейлю обов'язкова"),description:N().required("Опис коктейлю обов'язковий"),category:N().required("Категорія коктейлю обов'язкова"),serving:N().required("Тип сервірування обов'язковий"),alcoholic:N().required("Вкажіть чи є коктейль алкогольним чи ні"),ingredients:Yr().of(bt().shape({name:N().required("Назва інгредієнту обов'язкова"),quantity:N().required("Кількість інгредієнту обов'язкова"),unit:N().required("Одиниця виміру інгредієнту обов'язкова")})),preparation:N().required("Інструкція приготування обов'язкова")}),n=(a,{setSubmitting:l})=>{console.log(a),l(!1)};return s.jsx(s.Fragment,{children:s.jsx(Ns,{initialValues:{photo:"",name:"",description:"",category:"",serving:"",alcoholic:"",ingredients:[{name:"",quantity:"",unit:""}],preparation:""},validationSchema:i,onSubmit:n,children:({isSubmitting:a})=>s.jsx(Ir,{children:s.jsxs(Zs,{children:[s.jsx(il,{categories:e,servings:t}),s.jsx(cl,{ingredients:r}),s.jsx(pl,{}),s.jsx("button",{className:"buttonAdd",type:"submit",disabled:a,children:"Add"})]})})})})},gl=E.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
    max-width: 336px;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
  img {
    width: 90px;
    height: 90px;
    border-radius: 8px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  h4 {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    color: #f3f3f3;
  }
  p {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: rgba(243, 243, 243, 0.5);
    /*  */
    max-height: 4em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
    gap: 28px;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,ml=()=>s.jsxs(gl,{children:[s.jsx("li",{children:s.jsxs("a",{href:"",children:[s.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),s.jsxs("div",{children:[s.jsx("h4",{children:"Lone Tree Cooler"}),s.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),s.jsx("li",{children:s.jsxs("a",{href:"",children:[s.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),s.jsxs("div",{children:[s.jsx("h4",{children:"Lone Tree Cooler"}),s.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),s.jsx("li",{children:s.jsxs("a",{href:"",children:[s.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),s.jsxs("div",{children:[s.jsx("h4",{children:"Lone Tree Cooler"}),s.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),s.jsx("li",{children:s.jsxs("a",{href:"",children:[s.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),s.jsxs("div",{children:[s.jsx("h4",{children:"Lone Tree Cooler"}),s.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})})]}),vl=E.ul`
  display: inline-flex;
  column-gap: 14px;
`,De=E.li`
  opacity: 0.8;
  transition: opacity 250ms ease;
  &:hover,
  &:focus {
    opacity: 1;
  }
`,Ve=E.a`
  display: inline-flex;

  width: 38px;
  height: 38px;
  padding: 8px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 1px solid var(--white-twenty-color);

  transition: border-color 250ms ease;

  &:hover,
  &:focus {
    border: 1px solid var(--white-fifty-color);
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`,ze=E.svg`
  width: 22px;
  height: 22px;
  fill: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,yl=()=>s.jsxs(vl,{children:[s.jsx(De,{children:s.jsx(Ve,{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:s.jsx(ze,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:s.jsx("path",{d:"M17.0804 4.06011C17.2904 4.06011 17.5004 4.06011 17.9204 4.06011V7.21011C17.7104 7.21011 17.2904 7.21011 16.8704 7.21011C16.4504 7.21011 16.0304 7.21011 15.8204 7.42011C15.6104 7.63011 15.6104 7.84011 15.6104 8.33011C15.6104 8.75011 15.6104 9.03011 15.6104 9.45011H17.9204V12.1101H15.6104V23.6601H12.0404V12.0401H10.1504V9.38011H12.0404V8.47011C12.0404 6.93011 12.2504 5.81011 12.6704 5.32011C13.3004 4.41011 14.5604 3.99011 16.4504 3.99011C16.6604 4.06011 16.8704 4.06011 17.0804 4.06011Z"})})})}),s.jsx(De,{children:s.jsx(Ve,{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:s.jsxs(ze,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:[s.jsx("path",{d:"M25.1277 9.41152C25.114 8.47146 24.9398 7.53885 24.6065 6.65964C24.0231 5.15827 22.8352 3.97109 21.3313 3.38991C20.4618 3.06332 19.5426 2.88822 18.6122 2.86835C17.4155 2.81495 17.0361 2.80005 13.9986 2.80005C10.961 2.80005 10.5716 2.80005 9.38372 2.86835C8.45454 2.88822 7.5353 3.06332 6.66582 3.38991C5.16196 3.97109 3.97279 5.15827 3.39065 6.65964C3.06351 7.52767 2.88688 8.44538 2.86946 9.37302C2.81598 10.5689 2.7998 10.9477 2.7998 13.9802C2.7998 17.0127 2.7998 17.4002 2.86946 18.5873C2.88812 19.5162 3.06351 20.4327 3.39065 21.3032C3.97404 22.8033 5.16195 23.9905 6.66706 24.5717C7.53281 24.9095 8.45205 25.1007 9.38497 25.1305C10.5828 25.1839 10.9622 25.2001 13.9998 25.2001C17.0374 25.2001 17.4267 25.2001 18.6146 25.1305C19.5438 25.1119 20.4631 24.9368 21.3338 24.6102C22.8377 24.0278 24.0256 22.8406 24.609 21.3405C24.9361 20.4712 25.1115 19.5547 25.1301 18.6246C25.1836 17.43 25.1998 17.0512 25.1998 14.0174C25.1973 10.9849 25.1973 10.5999 25.1277 9.41152ZM13.9911 19.7149C10.8142 19.7149 8.24059 17.1456 8.24059 13.974C8.24059 10.8024 10.8142 8.23302 13.9911 8.23302C17.1655 8.23302 19.7416 10.8024 19.7416 13.974C19.7416 17.1456 17.1655 19.7149 13.9911 19.7149ZM19.9705 9.35936C19.2279 9.35936 18.6296 8.7608 18.6296 8.02067C18.6296 7.28055 19.2279 6.68199 19.9705 6.68199C20.7106 6.68199 21.3102 7.28055 21.3102 8.02067C21.3102 8.7608 20.7106 9.35936 19.9705 9.35936Z"}),s.jsx("path",{d:"M13.9928 17.4789C15.9277 17.4789 17.4963 15.9104 17.4963 13.9754C17.4963 12.0405 15.9277 10.4719 13.9928 10.4719C12.0578 10.4719 10.4893 12.0405 10.4893 13.9754C10.4893 15.9104 12.0578 17.4789 13.9928 17.4789Z"})]})})}),s.jsx(De,{children:s.jsx(Ve,{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:s.jsx(ze,{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.2103 5.24986C20.0203 5.17986 17.5704 5.10986 13.8604 5.10986H13.3703C9.80034 5.10986 7.42038 5.17986 6.23038 5.31986C4.62038 5.45986 3.50034 5.87986 2.87034 6.43986C2.31034 6.92986 1.89036 7.83986 1.75036 9.02986C1.68036 9.79986 1.61035 11.4099 1.61035 13.8599V14.2099C1.61035 16.5199 1.68034 18.1299 1.82034 18.8999C2.03034 20.0199 2.38038 20.8599 3.08038 21.3499C3.78038 21.9099 4.97036 22.2599 6.65036 22.3999C7.84036 22.4699 10.2904 22.5399 14.0004 22.5399H14.4904C18.0604 22.5399 20.4404 22.4699 21.6304 22.3299C23.2404 22.1899 24.3604 21.7699 24.9904 21.2099C25.5504 20.7199 25.9703 19.8099 26.1103 18.6199C26.1803 17.8499 26.2504 16.2399 26.2504 13.7899V13.4399C26.2504 11.1299 26.1804 9.51986 26.0404 8.74986C25.8304 7.62986 25.4804 6.78986 24.7804 6.29986C24.0804 5.73986 22.8903 5.38986 21.2103 5.24986ZM18.4804 13.8599L10.7804 18.4799V9.23986L18.4804 13.8599Z"})})})})]}),xl=[{value:"Cocktail",label:"Cocktail"},{value:"Shake",label:"Shake"},{value:"Shot",label:"Shot"}],bl=[{value:"Highball glass",label:"Highball glass"},{value:"Cocktail glass",label:"Cocktail glass"},{value:"Whiskey Glass",label:"Whiskey Glass"}],wl=[{value:"Lem",label:"Lem"},{value:"Passoa",label:"Passoa"},{value:"Prosecco",label:"Prosecco"}],_l=()=>s.jsx(Kr,{children:s.jsxs(Qr,{children:[s.jsx(Zr,{title:"Add drink"}),s.jsxs(Xr,{children:[s.jsx(hl,{categories:xl,servings:bl,ingredients:wl}),s.jsxs(Jr,{children:[s.jsxs("div",{children:[s.jsx(wt,{mb:"20px",children:"Follow Us"}),s.jsx(yl,{})]}),s.jsxs("div",{children:[s.jsx(wt,{mb:"28px",children:"Popular Drinks"}),s.jsx(ml,{})]})]})]})]})});export{_l as default};
