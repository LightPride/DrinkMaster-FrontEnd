import{u as E,a4 as qr,r as d,a5 as Kr,j as s,C as Yr}from"./index-7425699f.js";import{c as bt,a as U,b as Zr}from"./index.esm-da4eb94e.js";import{S as Ue}from"./react-select.esm-aa9c7f4d.js";import{P as Qr}from"./PageTitle-5550cbcf.js";const Xr=E.div`
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
`,Jr=E.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,en=E.div`
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
`;var tn=function(t){return rn(t)&&!nn(t)};function rn(e){return!!e&&typeof e=="object"}function nn(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||sn(e)}var an=typeof Symbol=="function"&&Symbol.for,on=an?Symbol.for("react.element"):60103;function sn(e){return e.$$typeof===on}function ln(e){return Array.isArray(e)?[]:{}}function xe(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ue(ln(e),e,t):e}function cn(e,t,r){return e.concat(t).map(function(n){return xe(n,r)})}function un(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=xe(e[i],r)}),Object.keys(t).forEach(function(i){!r.isMergeableObject(t[i])||!e[i]?n[i]=xe(t[i],r):n[i]=ue(e[i],t[i],r)}),n}function ue(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||cn,r.isMergeableObject=r.isMergeableObject||tn;var n=Array.isArray(t),i=Array.isArray(e),a=n===i;return a?n?r.arrayMerge(e,t,r):un(e,t,r):xe(t,r)}ue.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,i){return ue(n,i,r)},{})};var Be=ue,dn=typeof global=="object"&&global&&global.Object===Object&&global;const er=dn;var fn=typeof self=="object"&&self&&self.Object===Object&&self,pn=er||fn||Function("return this")();const D=pn;var hn=D.Symbol;const H=hn;var tr=Object.prototype,gn=tr.hasOwnProperty,mn=tr.toString,se=H?H.toStringTag:void 0;function vn(e){var t=gn.call(e,se),r=e[se];try{e[se]=void 0;var n=!0}catch{}var i=mn.call(e);return n&&(t?e[se]=r:delete e[se]),i}var yn=Object.prototype,xn=yn.toString;function bn(e){return xn.call(e)}var wn="[object Null]",jn="[object Undefined]",jt=H?H.toStringTag:void 0;function X(e){return e==null?e===void 0?jn:wn:jt&&jt in Object(e)?vn(e):bn(e)}function rr(e,t){return function(r){return e(t(r))}}var Tn=rr(Object.getPrototypeOf,Object);const Ze=Tn;function J(e){return e!=null&&typeof e=="object"}var Sn="[object Object]",En=Function.prototype,An=Object.prototype,nr=En.toString,Cn=An.hasOwnProperty,_n=nr.call(Object);function Tt(e){if(!J(e)||X(e)!=Sn)return!1;var t=Ze(e);if(t===null)return!0;var r=Cn.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&nr.call(r)==_n}var St=Array.isArray,Et=Object.keys,Fn=Object.prototype.hasOwnProperty,$n=typeof Element<"u";function He(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=St(e),n=St(t),i,a,l;if(r&&n){if(a=e.length,a!=t.length)return!1;for(i=a;i--!==0;)if(!He(e[i],t[i]))return!1;return!0}if(r!=n)return!1;var c=e instanceof Date,g=t instanceof Date;if(c!=g)return!1;if(c&&g)return e.getTime()==t.getTime();var v=e instanceof RegExp,F=t instanceof RegExp;if(v!=F)return!1;if(v&&F)return e.toString()==t.toString();var w=Et(e);if(a=w.length,a!==Et(t).length)return!1;for(i=a;i--!==0;)if(!Fn.call(t,w[i]))return!1;if($n&&e instanceof Element&&t instanceof Element)return e===t;for(i=a;i--!==0;)if(l=w[i],!(l==="_owner"&&e.$$typeof)&&!He(e[l],t[l]))return!1;return!0}return e!==e&&t!==t}var In=function(t,r){try{return He(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const B=qr(In);var On=!0;function ir(e,t){if(!On){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function Mn(){this.__data__=[],this.size=0}function ar(e,t){return e===t||e!==e&&t!==t}function be(e,t){for(var r=e.length;r--;)if(ar(e[r][0],t))return r;return-1}var kn=Array.prototype,Rn=kn.splice;function Pn(e){var t=this.__data__,r=be(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Rn.call(t,r,1),--this.size,!0}function Ln(e){var t=this.__data__,r=be(t,e);return r<0?void 0:t[r][1]}function Nn(e){return be(this.__data__,e)>-1}function Dn(e,t){var r=this.__data__,n=be(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function z(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}z.prototype.clear=Mn;z.prototype.delete=Pn;z.prototype.get=Ln;z.prototype.has=Nn;z.prototype.set=Dn;function Vn(){this.__data__=new z,this.size=0}function zn(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Un(e){return this.__data__.get(e)}function Bn(e){return this.__data__.has(e)}function pe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Hn="[object AsyncFunction]",Wn="[object Function]",Gn="[object GeneratorFunction]",qn="[object Proxy]";function or(e){if(!pe(e))return!1;var t=X(e);return t==Wn||t==Gn||t==Hn||t==qn}var Kn=D["__core-js_shared__"];const Me=Kn;var At=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Yn(e){return!!At&&At in e}var Zn=Function.prototype,Qn=Zn.toString;function ee(e){if(e!=null){try{return Qn.call(e)}catch{}try{return e+""}catch{}}return""}var Xn=/[\\^$.*+?()[\]{}|]/g,Jn=/^\[object .+?Constructor\]$/,ei=Function.prototype,ti=Object.prototype,ri=ei.toString,ni=ti.hasOwnProperty,ii=RegExp("^"+ri.call(ni).replace(Xn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ai(e){if(!pe(e)||Yn(e))return!1;var t=or(e)?ii:Jn;return t.test(ee(e))}function oi(e,t){return e==null?void 0:e[t]}function te(e,t){var r=oi(e,t);return ai(r)?r:void 0}var si=te(D,"Map");const de=si;var li=te(Object,"create");const fe=li;function ci(){this.__data__=fe?fe(null):{},this.size=0}function ui(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var di="__lodash_hash_undefined__",fi=Object.prototype,pi=fi.hasOwnProperty;function hi(e){var t=this.__data__;if(fe){var r=t[e];return r===di?void 0:r}return pi.call(t,e)?t[e]:void 0}var gi=Object.prototype,mi=gi.hasOwnProperty;function vi(e){var t=this.__data__;return fe?t[e]!==void 0:mi.call(t,e)}var yi="__lodash_hash_undefined__";function xi(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fe&&t===void 0?yi:t,this}function Z(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Z.prototype.clear=ci;Z.prototype.delete=ui;Z.prototype.get=hi;Z.prototype.has=vi;Z.prototype.set=xi;function bi(){this.size=0,this.__data__={hash:new Z,map:new(de||z),string:new Z}}function wi(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function we(e,t){var r=e.__data__;return wi(t)?r[typeof t=="string"?"string":"hash"]:r.map}function ji(e){var t=we(this,e).delete(e);return this.size-=t?1:0,t}function Ti(e){return we(this,e).get(e)}function Si(e){return we(this,e).has(e)}function Ei(e,t){var r=we(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function W(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}W.prototype.clear=bi;W.prototype.delete=ji;W.prototype.get=Ti;W.prototype.has=Si;W.prototype.set=Ei;var Ai=200;function Ci(e,t){var r=this.__data__;if(r instanceof z){var n=r.__data__;if(!de||n.length<Ai-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new W(n)}return r.set(e,t),this.size=r.size,this}function ae(e){var t=this.__data__=new z(e);this.size=t.size}ae.prototype.clear=Vn;ae.prototype.delete=zn;ae.prototype.get=Un;ae.prototype.has=Bn;ae.prototype.set=Ci;function _i(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Fi=function(){try{var e=te(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Ct=Fi;function sr(e,t,r){t=="__proto__"&&Ct?Ct(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var $i=Object.prototype,Ii=$i.hasOwnProperty;function lr(e,t,r){var n=e[t];(!(Ii.call(e,t)&&ar(n,r))||r===void 0&&!(t in e))&&sr(e,t,r)}function je(e,t,r,n){var i=!r;r||(r={});for(var a=-1,l=t.length;++a<l;){var c=t[a],g=n?n(r[c],e[c],c,r,e):void 0;g===void 0&&(g=e[c]),i?sr(r,c,g):lr(r,c,g)}return r}function Oi(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Mi="[object Arguments]";function _t(e){return J(e)&&X(e)==Mi}var cr=Object.prototype,ki=cr.hasOwnProperty,Ri=cr.propertyIsEnumerable,Pi=_t(function(){return arguments}())?_t:function(e){return J(e)&&ki.call(e,"callee")&&!Ri.call(e,"callee")};const Li=Pi;var Ni=Array.isArray;const he=Ni;function Di(){return!1}var ur=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ft=ur&&typeof module=="object"&&module&&!module.nodeType&&module,Vi=Ft&&Ft.exports===ur,$t=Vi?D.Buffer:void 0,zi=$t?$t.isBuffer:void 0,Ui=zi||Di;const dr=Ui;var Bi=9007199254740991,Hi=/^(?:0|[1-9]\d*)$/;function Wi(e,t){var r=typeof e;return t=t??Bi,!!t&&(r=="number"||r!="symbol"&&Hi.test(e))&&e>-1&&e%1==0&&e<t}var Gi=9007199254740991;function fr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Gi}var qi="[object Arguments]",Ki="[object Array]",Yi="[object Boolean]",Zi="[object Date]",Qi="[object Error]",Xi="[object Function]",Ji="[object Map]",ea="[object Number]",ta="[object Object]",ra="[object RegExp]",na="[object Set]",ia="[object String]",aa="[object WeakMap]",oa="[object ArrayBuffer]",sa="[object DataView]",la="[object Float32Array]",ca="[object Float64Array]",ua="[object Int8Array]",da="[object Int16Array]",fa="[object Int32Array]",pa="[object Uint8Array]",ha="[object Uint8ClampedArray]",ga="[object Uint16Array]",ma="[object Uint32Array]",S={};S[la]=S[ca]=S[ua]=S[da]=S[fa]=S[pa]=S[ha]=S[ga]=S[ma]=!0;S[qi]=S[Ki]=S[oa]=S[Yi]=S[sa]=S[Zi]=S[Qi]=S[Xi]=S[Ji]=S[ea]=S[ta]=S[ra]=S[na]=S[ia]=S[aa]=!1;function va(e){return J(e)&&fr(e.length)&&!!S[X(e)]}function Qe(e){return function(t){return e(t)}}var pr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,le=pr&&typeof module=="object"&&module&&!module.nodeType&&module,ya=le&&le.exports===pr,ke=ya&&er.process,xa=function(){try{var e=le&&le.require&&le.require("util").types;return e||ke&&ke.binding&&ke.binding("util")}catch{}}();const ie=xa;var It=ie&&ie.isTypedArray,ba=It?Qe(It):va;const wa=ba;var ja=Object.prototype,Ta=ja.hasOwnProperty;function hr(e,t){var r=he(e),n=!r&&Li(e),i=!r&&!n&&dr(e),a=!r&&!n&&!i&&wa(e),l=r||n||i||a,c=l?Oi(e.length,String):[],g=c.length;for(var v in e)(t||Ta.call(e,v))&&!(l&&(v=="length"||i&&(v=="offset"||v=="parent")||a&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Wi(v,g)))&&c.push(v);return c}var Sa=Object.prototype;function Xe(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Sa;return e===r}var Ea=rr(Object.keys,Object);const Aa=Ea;var Ca=Object.prototype,_a=Ca.hasOwnProperty;function Fa(e){if(!Xe(e))return Aa(e);var t=[];for(var r in Object(e))_a.call(e,r)&&r!="constructor"&&t.push(r);return t}function gr(e){return e!=null&&fr(e.length)&&!or(e)}function Je(e){return gr(e)?hr(e):Fa(e)}function $a(e,t){return e&&je(t,Je(t),e)}function Ia(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Oa=Object.prototype,Ma=Oa.hasOwnProperty;function ka(e){if(!pe(e))return Ia(e);var t=Xe(e),r=[];for(var n in e)n=="constructor"&&(t||!Ma.call(e,n))||r.push(n);return r}function et(e){return gr(e)?hr(e,!0):ka(e)}function Ra(e,t){return e&&je(t,et(t),e)}var mr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ot=mr&&typeof module=="object"&&module&&!module.nodeType&&module,Pa=Ot&&Ot.exports===mr,Mt=Pa?D.Buffer:void 0,kt=Mt?Mt.allocUnsafe:void 0;function La(e,t){if(t)return e.slice();var r=e.length,n=kt?kt(r):new e.constructor(r);return e.copy(n),n}function vr(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function Na(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var l=e[r];t(l,r,e)&&(a[i++]=l)}return a}function yr(){return[]}var Da=Object.prototype,Va=Da.propertyIsEnumerable,Rt=Object.getOwnPropertySymbols,za=Rt?function(e){return e==null?[]:(e=Object(e),Na(Rt(e),function(t){return Va.call(e,t)}))}:yr;const tt=za;function Ua(e,t){return je(e,tt(e),t)}function xr(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var Ba=Object.getOwnPropertySymbols,Ha=Ba?function(e){for(var t=[];e;)xr(t,tt(e)),e=Ze(e);return t}:yr;const br=Ha;function Wa(e,t){return je(e,br(e),t)}function wr(e,t,r){var n=t(e);return he(e)?n:xr(n,r(e))}function Ga(e){return wr(e,Je,tt)}function qa(e){return wr(e,et,br)}var Ka=te(D,"DataView");const We=Ka;var Ya=te(D,"Promise");const Ge=Ya;var Za=te(D,"Set");const qe=Za;var Qa=te(D,"WeakMap");const Ke=Qa;var Pt="[object Map]",Xa="[object Object]",Lt="[object Promise]",Nt="[object Set]",Dt="[object WeakMap]",Vt="[object DataView]",Ja=ee(We),eo=ee(de),to=ee(Ge),ro=ee(qe),no=ee(Ke),q=X;(We&&q(new We(new ArrayBuffer(1)))!=Vt||de&&q(new de)!=Pt||Ge&&q(Ge.resolve())!=Lt||qe&&q(new qe)!=Nt||Ke&&q(new Ke)!=Dt)&&(q=function(e){var t=X(e),r=t==Xa?e.constructor:void 0,n=r?ee(r):"";if(n)switch(n){case Ja:return Vt;case eo:return Pt;case to:return Lt;case ro:return Nt;case no:return Dt}return t});const rt=q;var io=Object.prototype,ao=io.hasOwnProperty;function oo(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&ao.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var so=D.Uint8Array;const zt=so;function nt(e){var t=new e.constructor(e.byteLength);return new zt(t).set(new zt(e)),t}function lo(e,t){var r=t?nt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var co=/\w*$/;function uo(e){var t=new e.constructor(e.source,co.exec(e));return t.lastIndex=e.lastIndex,t}var Ut=H?H.prototype:void 0,Bt=Ut?Ut.valueOf:void 0;function fo(e){return Bt?Object(Bt.call(e)):{}}function po(e,t){var r=t?nt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var ho="[object Boolean]",go="[object Date]",mo="[object Map]",vo="[object Number]",yo="[object RegExp]",xo="[object Set]",bo="[object String]",wo="[object Symbol]",jo="[object ArrayBuffer]",To="[object DataView]",So="[object Float32Array]",Eo="[object Float64Array]",Ao="[object Int8Array]",Co="[object Int16Array]",_o="[object Int32Array]",Fo="[object Uint8Array]",$o="[object Uint8ClampedArray]",Io="[object Uint16Array]",Oo="[object Uint32Array]";function Mo(e,t,r){var n=e.constructor;switch(t){case jo:return nt(e);case ho:case go:return new n(+e);case To:return lo(e,r);case So:case Eo:case Ao:case Co:case _o:case Fo:case $o:case Io:case Oo:return po(e,r);case mo:return new n;case vo:case bo:return new n(e);case yo:return uo(e);case xo:return new n;case wo:return fo(e)}}var Ht=Object.create,ko=function(){function e(){}return function(t){if(!pe(t))return{};if(Ht)return Ht(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const Ro=ko;function Po(e){return typeof e.constructor=="function"&&!Xe(e)?Ro(Ze(e)):{}}var Lo="[object Map]";function No(e){return J(e)&&rt(e)==Lo}var Wt=ie&&ie.isMap,Do=Wt?Qe(Wt):No;const Vo=Do;var zo="[object Set]";function Uo(e){return J(e)&&rt(e)==zo}var Gt=ie&&ie.isSet,Bo=Gt?Qe(Gt):Uo;const Ho=Bo;var Wo=1,Go=2,qo=4,jr="[object Arguments]",Ko="[object Array]",Yo="[object Boolean]",Zo="[object Date]",Qo="[object Error]",Tr="[object Function]",Xo="[object GeneratorFunction]",Jo="[object Map]",es="[object Number]",Sr="[object Object]",ts="[object RegExp]",rs="[object Set]",ns="[object String]",is="[object Symbol]",as="[object WeakMap]",os="[object ArrayBuffer]",ss="[object DataView]",ls="[object Float32Array]",cs="[object Float64Array]",us="[object Int8Array]",ds="[object Int16Array]",fs="[object Int32Array]",ps="[object Uint8Array]",hs="[object Uint8ClampedArray]",gs="[object Uint16Array]",ms="[object Uint32Array]",T={};T[jr]=T[Ko]=T[os]=T[ss]=T[Yo]=T[Zo]=T[ls]=T[cs]=T[us]=T[ds]=T[fs]=T[Jo]=T[es]=T[Sr]=T[ts]=T[rs]=T[ns]=T[is]=T[ps]=T[hs]=T[gs]=T[ms]=!0;T[Qo]=T[Tr]=T[as]=!1;function ce(e,t,r,n,i,a){var l,c=t&Wo,g=t&Go,v=t&qo;if(r&&(l=i?r(e,n,i,a):r(e)),l!==void 0)return l;if(!pe(e))return e;var F=he(e);if(F){if(l=oo(e),!c)return vr(e,l)}else{var w=rt(e),f=w==Tr||w==Xo;if(dr(e))return La(e,c);if(w==Sr||w==jr||f&&!i){if(l=g||f?{}:Po(e),!c)return g?Wa(e,Ra(l,e)):Ua(e,$a(l,e))}else{if(!T[w])return i?e:{};l=Mo(e,w,c)}}a||(a=new ae);var A=a.get(e);if(A)return A;a.set(e,l),Ho(e)?e.forEach(function(C){l.add(ce(C,t,r,C,e,a))}):Vo(e)&&e.forEach(function(C,_){l.set(_,ce(C,t,r,_,e,a))});var k=v?g?qa:Ga:g?et:Je,O=F?void 0:k(e);return _i(O||e,function(C,_){O&&(_=C,C=e[_]),lr(l,_,ce(C,t,r,_,e,a))}),l}var vs=4;function qt(e){return ce(e,vs)}function Er(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}var ys="[object Symbol]";function it(e){return typeof e=="symbol"||J(e)&&X(e)==ys}var xs="Expected a function";function at(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(xs);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var l=e.apply(this,n);return r.cache=a.set(i,l)||a,l};return r.cache=new(at.Cache||W),r}at.Cache=W;var bs=500;function ws(e){var t=at(e,function(n){return r.size===bs&&r.clear(),n}),r=t.cache;return t}var js=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ts=/\\(\\)?/g,Ss=ws(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(js,function(r,n,i,a){t.push(i?a.replace(Ts,"$1"):n||r)}),t});const Es=Ss;var As=1/0;function Cs(e){if(typeof e=="string"||it(e))return e;var t=e+"";return t=="0"&&1/e==-As?"-0":t}var _s=1/0,Kt=H?H.prototype:void 0,Yt=Kt?Kt.toString:void 0;function Ar(e){if(typeof e=="string")return e;if(he(e))return Er(e,Ar)+"";if(it(e))return Yt?Yt.call(e):"";var t=e+"";return t=="0"&&1/e==-_s?"-0":t}function Fs(e){return e==null?"":Ar(e)}function Cr(e){return he(e)?Er(e,Cs):it(e)?[e]:vr(Es(Fs(e)))}var $s=1,Is=4;function Os(e){return ce(e,$s|Is)}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}function Ms(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Y(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Zt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Te=d.createContext(void 0);Te.displayName="FormikContext";var ks=Te.Provider,Rs=Te.Consumer;function _r(){var e=d.useContext(Te);return e||ir(!1),e}var Qt=function(t){return Array.isArray(t)&&t.length===0},M=function(t){return typeof t=="function"},ge=function(t){return t!==null&&typeof t=="object"},Ps=function(t){return String(Math.floor(Number(t)))===t},Re=function(t){return Object.prototype.toString.call(t)==="[object String]"},Fr=function(t){return d.Children.count(t)===0},Pe=function(t){return ge(t)&&M(t.then)};function I(e,t,r,n){n===void 0&&(n=0);for(var i=Cr(t);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?r:e}function N(e,t,r){for(var n=qt(e),i=n,a=0,l=Cr(t);a<l.length-1;a++){var c=l[a],g=I(e,l.slice(0,a+1));if(g&&(ge(g)||Array.isArray(g)))i=i[c]=qt(g);else{var v=l[a+1];i=i[c]=Ps(v)&&Number(v)>=0?[]:{}}}return(a===0?e:i)[l[a]]===r?e:(r===void 0?delete i[l[a]]:i[l[a]]=r,a===0&&r===void 0&&delete n[l[a]],n)}function $r(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var i=0,a=Object.keys(e);i<a.length;i++){var l=a[i],c=e[l];ge(c)?r.get(c)||(r.set(c,!0),n[l]=Array.isArray(c)?[]:{},$r(c,t,r,n[l])):n[l]=t}return n}function Ls(e,t){switch(t.type){case"SET_VALUES":return x({},e,{values:t.payload});case"SET_TOUCHED":return x({},e,{touched:t.payload});case"SET_ERRORS":return B(e.errors,t.payload)?e:x({},e,{errors:t.payload});case"SET_STATUS":return x({},e,{status:t.payload});case"SET_ISSUBMITTING":return x({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return x({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return x({},e,{values:N(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return x({},e,{touched:N(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return x({},e,{errors:N(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return x({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return x({},e,{touched:$r(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return x({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return x({},e,{isSubmitting:!1});default:return e}}var G={},ye={};function Ns(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,i=n===void 0?!0:n,a=e.validateOnMount,l=a===void 0?!1:a,c=e.isInitialValid,g=e.enableReinitialize,v=g===void 0?!1:g,F=e.onSubmit,w=Y(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=x({validateOnChange:r,validateOnBlur:i,validateOnMount:l,onSubmit:F},w),A=d.useRef(f.initialValues),k=d.useRef(f.initialErrors||G),O=d.useRef(f.initialTouched||ye),C=d.useRef(f.initialStatus),_=d.useRef(!1),R=d.useRef({});d.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var Se=d.useState(0),Ee=Se[1],me=d.useRef({values:f.initialValues,errors:f.initialErrors||G,touched:f.initialTouched||ye,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),j=me.current,b=d.useCallback(function(o){var u=me.current;me.current=Ls(u,o),u!==me.current&&Ee(function(p){return p+1})},[]),ot=d.useCallback(function(o,u){return new Promise(function(p,h){var m=f.validate(o,u);m==null?p(G):Pe(m)?m.then(function(y){p(y||G)},function(y){h(y)}):p(m)})},[f.validate]),Ae=d.useCallback(function(o,u){var p=f.validationSchema,h=M(p)?p(u):p,m=u&&h.validateAt?h.validateAt(u,o):zs(o,h);return new Promise(function(y,$){m.then(function(){y(G)},function(V){V.name==="ValidationError"?y(Vs(V)):$(V)})})},[f.validationSchema]),st=d.useCallback(function(o,u){return new Promise(function(p){return p(R.current[o].validate(u))})},[]),lt=d.useCallback(function(o){var u=Object.keys(R.current).filter(function(h){return M(R.current[h].validate)}),p=u.length>0?u.map(function(h){return st(h,I(o,h))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(p).then(function(h){return h.reduce(function(m,y,$){return y==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||y&&(m=N(m,u[$],y)),m},{})})},[st]),kr=d.useCallback(function(o){return Promise.all([lt(o),f.validationSchema?Ae(o):{},f.validate?ot(o):{}]).then(function(u){var p=u[0],h=u[1],m=u[2],y=Be.all([p,h,m],{arrayMerge:Us});return y})},[f.validate,f.validationSchema,lt,ot,Ae]),L=P(function(o){return o===void 0&&(o=j.values),b({type:"SET_ISVALIDATING",payload:!0}),kr(o).then(function(u){return _.current&&(b({type:"SET_ISVALIDATING",payload:!1}),b({type:"SET_ERRORS",payload:u})),u})});d.useEffect(function(){l&&_.current===!0&&B(A.current,f.initialValues)&&L(A.current)},[l,L]);var oe=d.useCallback(function(o){var u=o&&o.values?o.values:A.current,p=o&&o.errors?o.errors:k.current?k.current:f.initialErrors||{},h=o&&o.touched?o.touched:O.current?O.current:f.initialTouched||{},m=o&&o.status?o.status:C.current?C.current:f.initialStatus;A.current=u,k.current=p,O.current=h,C.current=m;var y=function(){b({type:"RESET_FORM",payload:{isSubmitting:!!o&&!!o.isSubmitting,errors:p,touched:h,status:m,values:u,isValidating:!!o&&!!o.isValidating,submitCount:o&&o.submitCount&&typeof o.submitCount=="number"?o.submitCount:0}})};if(f.onReset){var $=f.onReset(j.values,yt);Pe($)?$.then(y):y()}else y()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){_.current===!0&&!B(A.current,f.initialValues)&&v&&(A.current=f.initialValues,oe(),l&&L(A.current))},[v,f.initialValues,oe,l,L]),d.useEffect(function(){v&&_.current===!0&&!B(k.current,f.initialErrors)&&(k.current=f.initialErrors||G,b({type:"SET_ERRORS",payload:f.initialErrors||G}))},[v,f.initialErrors]),d.useEffect(function(){v&&_.current===!0&&!B(O.current,f.initialTouched)&&(O.current=f.initialTouched||ye,b({type:"SET_TOUCHED",payload:f.initialTouched||ye}))},[v,f.initialTouched]),d.useEffect(function(){v&&_.current===!0&&!B(C.current,f.initialStatus)&&(C.current=f.initialStatus,b({type:"SET_STATUS",payload:f.initialStatus}))},[v,f.initialStatus,f.initialTouched]);var ct=P(function(o){if(R.current[o]&&M(R.current[o].validate)){var u=I(j.values,o),p=R.current[o].validate(u);return Pe(p)?(b({type:"SET_ISVALIDATING",payload:!0}),p.then(function(h){return h}).then(function(h){b({type:"SET_FIELD_ERROR",payload:{field:o,value:h}}),b({type:"SET_ISVALIDATING",payload:!1})})):(b({type:"SET_FIELD_ERROR",payload:{field:o,value:p}}),Promise.resolve(p))}else if(f.validationSchema)return b({type:"SET_ISVALIDATING",payload:!0}),Ae(j.values,o).then(function(h){return h}).then(function(h){b({type:"SET_FIELD_ERROR",payload:{field:o,value:I(h,o)}}),b({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Rr=d.useCallback(function(o,u){var p=u.validate;R.current[o]={validate:p}},[]),Pr=d.useCallback(function(o){delete R.current[o]},[]),ut=P(function(o,u){b({type:"SET_TOUCHED",payload:o});var p=u===void 0?i:u;return p?L(j.values):Promise.resolve()}),dt=d.useCallback(function(o){b({type:"SET_ERRORS",payload:o})},[]),ft=P(function(o,u){var p=M(o)?o(j.values):o;b({type:"SET_VALUES",payload:p});var h=u===void 0?r:u;return h?L(p):Promise.resolve()}),ve=d.useCallback(function(o,u){b({type:"SET_FIELD_ERROR",payload:{field:o,value:u}})},[]),re=P(function(o,u,p){b({type:"SET_FIELD_VALUE",payload:{field:o,value:u}});var h=p===void 0?r:p;return h?L(N(j.values,o,u)):Promise.resolve()}),pt=d.useCallback(function(o,u){var p=u,h=o,m;if(!Re(o)){o.persist&&o.persist();var y=o.target?o.target:o.currentTarget,$=y.type,V=y.name,Ie=y.id,Oe=y.value,Wr=y.checked,wl=y.outerHTML,xt=y.options,Gr=y.multiple;p=u||V||Ie,h=/number|range/.test($)?(m=parseFloat(Oe),isNaN(m)?"":m):/checkbox/.test($)?Hs(I(j.values,p),Wr,Oe):xt&&Gr?Bs(xt):Oe}p&&re(p,h)},[re,j.values]),Ce=P(function(o){if(Re(o))return function(u){return pt(u,o)};pt(o)}),ne=P(function(o,u,p){u===void 0&&(u=!0),b({type:"SET_FIELD_TOUCHED",payload:{field:o,value:u}});var h=p===void 0?i:p;return h?L(j.values):Promise.resolve()}),ht=d.useCallback(function(o,u){o.persist&&o.persist();var p=o.target,h=p.name,m=p.id,y=p.outerHTML,$=u||h||m;ne($,!0)},[ne]),_e=P(function(o){if(Re(o))return function(u){return ht(u,o)};ht(o)}),gt=d.useCallback(function(o){M(o)?b({type:"SET_FORMIK_STATE",payload:o}):b({type:"SET_FORMIK_STATE",payload:function(){return o}})},[]),mt=d.useCallback(function(o){b({type:"SET_STATUS",payload:o})},[]),vt=d.useCallback(function(o){b({type:"SET_ISSUBMITTING",payload:o})},[]),Fe=P(function(){return b({type:"SUBMIT_ATTEMPT"}),L().then(function(o){var u=o instanceof Error,p=!u&&Object.keys(o).length===0;if(p){var h;try{if(h=Nr(),h===void 0)return}catch(m){throw m}return Promise.resolve(h).then(function(m){return _.current&&b({type:"SUBMIT_SUCCESS"}),m}).catch(function(m){if(_.current)throw b({type:"SUBMIT_FAILURE"}),m})}else if(_.current&&(b({type:"SUBMIT_FAILURE"}),u))throw o})}),Lr=P(function(o){o&&o.preventDefault&&M(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&M(o.stopPropagation)&&o.stopPropagation(),Fe().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),yt={resetForm:oe,validateForm:L,validateField:ct,setErrors:dt,setFieldError:ve,setFieldTouched:ne,setFieldValue:re,setStatus:mt,setSubmitting:vt,setTouched:ut,setValues:ft,setFormikState:gt,submitForm:Fe},Nr=P(function(){return F(j.values,yt)}),Dr=P(function(o){o&&o.preventDefault&&M(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&M(o.stopPropagation)&&o.stopPropagation(),oe()}),Vr=d.useCallback(function(o){return{value:I(j.values,o),error:I(j.errors,o),touched:!!I(j.touched,o),initialValue:I(A.current,o),initialTouched:!!I(O.current,o),initialError:I(k.current,o)}},[j.errors,j.touched,j.values]),zr=d.useCallback(function(o){return{setValue:function(p,h){return re(o,p,h)},setTouched:function(p,h){return ne(o,p,h)},setError:function(p){return ve(o,p)}}},[re,ne,ve]),Ur=d.useCallback(function(o){var u=ge(o),p=u?o.name:o,h=I(j.values,p),m={name:p,value:h,onChange:Ce,onBlur:_e};if(u){var y=o.type,$=o.value,V=o.as,Ie=o.multiple;y==="checkbox"?$===void 0?m.checked=!!h:(m.checked=!!(Array.isArray(h)&&~h.indexOf($)),m.value=$):y==="radio"?(m.checked=h===$,m.value=$):V==="select"&&Ie&&(m.value=m.value||[],m.multiple=!0)}return m},[_e,Ce,j.values]),$e=d.useMemo(function(){return!B(A.current,j.values)},[A.current,j.values]),Br=d.useMemo(function(){return typeof c<"u"?$e?j.errors&&Object.keys(j.errors).length===0:c!==!1&&M(c)?c(f):c:j.errors&&Object.keys(j.errors).length===0},[c,$e,j.errors,f]),Hr=x({},j,{initialValues:A.current,initialErrors:k.current,initialTouched:O.current,initialStatus:C.current,handleBlur:_e,handleChange:Ce,handleReset:Dr,handleSubmit:Lr,resetForm:oe,setErrors:dt,setFormikState:gt,setFieldTouched:ne,setFieldValue:re,setFieldError:ve,setStatus:mt,setSubmitting:vt,setTouched:ut,setValues:ft,submitForm:Fe,validateForm:L,validateField:ct,isValid:Br,dirty:$e,unregisterField:Pr,registerField:Rr,getFieldProps:Ur,getFieldMeta:Vr,getFieldHelpers:zr,validateOnBlur:i,validateOnChange:r,validateOnMount:l});return Hr}function Ds(e){var t=Ns(e),r=e.component,n=e.children,i=e.render,a=e.innerRef;return d.useImperativeHandle(a,function(){return t}),d.createElement(ks,{value:t},r?d.createElement(r,t):i?i(t):n?M(n)?n(t):Fr(n)?null:d.Children.only(n):null)}function Vs(e){var t={};if(e.inner){if(e.inner.length===0)return N(t,e.path,e.message);for(var i=e.inner,r=Array.isArray(i),n=0,i=r?i:i[Symbol.iterator]();;){var a;if(r){if(n>=i.length)break;a=i[n++]}else{if(n=i.next(),n.done)break;a=n.value}var l=a;I(t,l.path)||(t=N(t,l.path,l.message))}}return t}function zs(e,t,r,n){r===void 0&&(r=!1);var i=Ye(e);return t[r?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ye(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(i){return Array.isArray(i)===!0||Tt(i)?Ye(i):i!==""?i:void 0}):Tt(e[n])?t[n]=Ye(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Us(e,t,r){var n=e.slice();return t.forEach(function(a,l){if(typeof n[l]>"u"){var c=r.clone!==!1,g=c&&r.isMergeableObject(a);n[l]=g?Be(Array.isArray(a)?[]:{},a,r):a}else r.isMergeableObject(a)?n[l]=Be(e[l],a,r):e.indexOf(a)===-1&&n.push(a)}),n}function Bs(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Hs(e,t,r){if(typeof e=="boolean")return!!t;var n=[],i=!1,a=-1;if(Array.isArray(e))n=e,a=e.indexOf(r),i=a>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!i?n.concat(r):i?n.slice(0,a).concat(n.slice(a+1)):n}var Ws=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function P(e){var t=d.useRef(e);return Ws(function(){t.current=e}),d.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.current.apply(void 0,n)},[])}function K(e){var t=e.validate,r=e.name,n=e.render,i=e.children,a=e.as,l=e.component,c=e.className,g=Y(e,["validate","name","render","children","as","component","className"]),v=_r(),F=Y(v,["validate","validationSchema"]),w=F.registerField,f=F.unregisterField;d.useEffect(function(){return w(r,{validate:t}),function(){f(r)}},[w,f,r,t]);var A=F.getFieldProps(x({name:r},g)),k=F.getFieldMeta(r),O={field:A,form:F};if(n)return n(x({},O,{meta:k}));if(M(i))return i(x({},O,{meta:k}));if(l){if(typeof l=="string"){var C=g.innerRef,_=Y(g,["innerRef"]);return d.createElement(l,x({ref:C},A,_,{className:c}),i)}return d.createElement(l,x({field:A,form:F},g,{className:c}),i)}var R=a||"input";if(typeof R=="string"){var Se=g.innerRef,Ee=Y(g,["innerRef"]);return d.createElement(R,x({ref:Se},A,Ee,{className:c}),i)}return d.createElement(R,x({},A,g,{className:c}),i)}var Ir=d.forwardRef(function(e,t){var r=e.action,n=Y(e,["action"]),i=r??"#",a=_r(),l=a.handleReset,c=a.handleSubmit;return d.createElement("form",x({onSubmit:c,ref:t,onReset:l,action:i},n))});Ir.displayName="Form";function Gs(e){var t=function(i){return d.createElement(Rs,null,function(a){return a||ir(!1),d.createElement(e,x({},i,{formik:a}))})},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",Kr(t,e)}var qs=function(t,r,n){var i=Q(t),a=i[r];return i.splice(r,1),i.splice(n,0,a),i},Ks=function(t,r,n){var i=Q(t),a=i[r];return i[r]=i[n],i[n]=a,i},Le=function(t,r,n){var i=Q(t);return i.splice(r,0,n),i},Ys=function(t,r,n){var i=Q(t);return i[r]=n,i},Q=function(t){if(t){if(Array.isArray(t))return[].concat(t);var r=Object.keys(t).map(function(n){return parseInt(n)}).reduce(function(n,i){return i>n?i:n},0);return Array.from(x({},t,{length:r+1}))}else return[]},Xt=function(t,r){var n=typeof t=="function"?t:r;return function(i){if(Array.isArray(i)||ge(i)){var a=Q(i);return n(a)}return i}},Or=function(e){Ms(t,e);function t(n){var i;return i=e.call(this,n)||this,i.updateArrayField=function(a,l,c){var g=i.props,v=g.name,F=g.formik.setFormikState;F(function(w){var f=Xt(c,a),A=Xt(l,a),k=N(w.values,v,a(I(w.values,v))),O=c?f(I(w.errors,v)):void 0,C=l?A(I(w.touched,v)):void 0;return Qt(O)&&(O=void 0),Qt(C)&&(C=void 0),x({},w,{values:k,errors:c?N(w.errors,v,O):w.errors,touched:l?N(w.touched,v,C):w.touched})})},i.push=function(a){return i.updateArrayField(function(l){return[].concat(Q(l),[Os(a)])},!1,!1)},i.handlePush=function(a){return function(){return i.push(a)}},i.swap=function(a,l){return i.updateArrayField(function(c){return Ks(c,a,l)},!0,!0)},i.handleSwap=function(a,l){return function(){return i.swap(a,l)}},i.move=function(a,l){return i.updateArrayField(function(c){return qs(c,a,l)},!0,!0)},i.handleMove=function(a,l){return function(){return i.move(a,l)}},i.insert=function(a,l){return i.updateArrayField(function(c){return Le(c,a,l)},function(c){return Le(c,a,null)},function(c){return Le(c,a,null)})},i.handleInsert=function(a,l){return function(){return i.insert(a,l)}},i.replace=function(a,l){return i.updateArrayField(function(c){return Ys(c,a,l)},!1,!1)},i.handleReplace=function(a,l){return function(){return i.replace(a,l)}},i.unshift=function(a){var l=-1;return i.updateArrayField(function(c){var g=c?[a].concat(c):[a];return l=g.length,g},function(c){return c?[null].concat(c):[null]},function(c){return c?[null].concat(c):[null]}),l},i.handleUnshift=function(a){return function(){return i.unshift(a)}},i.handleRemove=function(a){return function(){return i.remove(a)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Zt(i)),i.pop=i.pop.bind(Zt(i)),i}var r=t.prototype;return r.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!B(I(i.formik.values,i.name),I(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(i){var a;return this.updateArrayField(function(l){var c=l?Q(l):[];return a||(a=c[i]),M(c.splice)&&c.splice(i,1),M(c.every)&&c.every(function(g){return g===void 0})?[]:c},!0,!0),a},r.pop=function(){var i;return this.updateArrayField(function(a){var l=a.slice();return i||(i=l&&l.pop&&l.pop()),l},!0,!0),i},r.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},a=this.props,l=a.component,c=a.render,g=a.children,v=a.name,F=a.formik,w=Y(F,["validate","validationSchema"]),f=x({},i,{form:w,name:v});return l?d.createElement(l,f):c?c(f):g?typeof g=="function"?g(f):Fr(g)?null:d.Children.only(g):null},t}(d.Component);Or.defaultProps={validateOnChange:!0};var Mr=Gs(Or);const Zs=E.div`
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
`,il=({categories:e,servings:t})=>s.jsx(Mr,{name:"ingredients",children:({form:r})=>s.jsxs(Qs,{children:[s.jsx(Xs,{children:s.jsxs(Js,{children:[s.jsxs(el,{children:[s.jsxs("svg",{width:"29",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M14.5 5.8335V22.1668",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M6.33203 14H22.6654",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx(K,{style:{display:"none"},type:"file",name:"photo",accept:"image/*"})]}),s.jsx("p",{children:"Add Image"})]})}),s.jsxs(tl,{children:[s.jsxs(rl,{children:[s.jsx("div",{className:"styledDivInput",children:s.jsx(K,{className:"styledInputText",placeholder:"Enter item title",name:"name"})}),s.jsx("div",{className:"styledDivInput",children:s.jsx(K,{className:"styledInputText",placeholder:"Enter item title",name:"description"})}),s.jsx("div",{className:"styledDivInput",children:s.jsxs("label",{className:"labelSelect",children:[s.jsx("p",{className:"labelTitle",children:"Category"}),s.jsx(Ue,{className:"selectStyled",name:"category",options:e,onChange:n=>r.setFieldValue("category",n.value),styles:Jt})]})}),s.jsx("div",{className:"styledDivInput",children:s.jsxs("label",{className:"labelSelect",children:[s.jsx("p",{className:"labelTitle",children:"Glass"}),s.jsx(Ue,{className:"selectStyled",name:"serving",options:t,onChange:n=>r.setFieldValue("serving",n.value),styles:Jt})]})})]}),s.jsxs(nl,{children:[s.jsxs("label",{className:"radioLabel",children:[s.jsx(K,{className:"styledRadio",type:"radio",name:"alcoholic",value:"true"}),s.jsx("span",{className:"styledSpan",children:"Alcoholic"})]}),s.jsxs("label",{className:"radioLabel",children:[s.jsx(K,{className:"styledRadio",type:"radio",name:"alcoholic",value:"false"}),s.jsx("span",{className:"styledSpan",children:"Non-alcoholic"})]})]})]})]})}),al=E.div`
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
`,ll={dropdownIndicator:(e,t)=>({...e,paddingRight:"18px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:t.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(e,t)=>({...e,width:"200px",height:"50px",border:"     1px solid rgba(243, 243, 243, 0.5)",background:"inherit",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:e=>({...e,marginTop:"2px",padding:"0px 12px",backgroundColor:" #161f37",borderRadius:"12px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:e=>({...e,display:"none"}),valueContainer:e=>({...e,padding:"0px 18px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:e=>({...e,color:"#f3f3f3"}),placeholder:e=>({...e,"@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(e,{isFocused:t,isSelected:r})=>({...e,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:t?"#f3f3f375":r?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},cl=({ingredients:e})=>s.jsx(Mr,{name:"ingredients",children:({push:t,remove:r,form:n})=>s.jsxs(al,{children:[s.jsxs(ol,{children:[s.jsx("h4",{className:"titleIngredientsForm",children:"Ingredients"}),s.jsxs("div",{className:"containerIngredientInputs",children:[s.jsx(Ne,{className:"buttonAddRemove",onClick:()=>r(-1),children:s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeOpacity:"0.3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx("p",{className:"quantityTitle",children:n.values.ingredients.length}),s.jsx(Ne,{type:"button",onClick:()=>t({name:"",quantity:""}),className:"buttonAddRemove",children:s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M8 2.5V13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]}),s.jsx(sl,{children:n.values.ingredients.map(({name:i,quantity:a},l)=>s.jsxs("div",{className:"inputsWrapper",children:[s.jsx(Ue,{className:"styledSelect",name:`ingredients.${l}.name`,options:e,onChange:c=>{n.setFieldValue(`ingredients.${l}.name`,c.value)},styles:ll}),s.jsx(K,{className:"styledInput",name:`ingredients.${l}.quantity`,type:"text",placeholder:"1 Cl"}),s.jsx(Ne,{type:"button",onClick:()=>r(l),children:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]},l))})]})}),ul=E.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
  .inputField {
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
`,fl=()=>s.jsxs(ul,{children:[s.jsx(dl,{children:s.jsx("h4",{children:"Recipe Preparation"})}),s.jsx(K,{as:"textarea",className:"inputField",placeholder:"Enter the recipe",name:"preparation"})]}),pl=({categories:e,servings:t,ingredients:r})=>{const n=bt().shape({name:U().required("Назва коктейлю обов'язкова"),description:U().required("Опис коктейлю обов'язковий"),category:U().required("Категорія коктейлю обов'язкова"),serving:U().required("Тип сервірування обов'язковий"),alcoholic:U().required("Вкажіть чи є коктейль алкогольним чи ні"),ingredients:Zr().of(bt().shape({name:U().required("Назва інгредієнту обов'язкова"),quantity:U().required("Кількість інгредієнту обов'язкова")})),preparation:U().required("Інструкція приготування обов'язкова")}),i=(a,{setSubmitting:l})=>{console.log("qqq"),console.log(a),l(!1)};return s.jsx(s.Fragment,{children:s.jsx(Ds,{initialValues:{photo:"",name:"",description:"",category:"",serving:"",alcoholic:"",ingredients:[{name:"",quantity:""}],preparation:""},validationSchema:n,onSubmit:i,children:({isSubmitting:a})=>s.jsx(Ir,{children:s.jsxs(Zs,{children:[s.jsx(il,{categories:e,servings:t}),s.jsx(cl,{ingredients:r}),s.jsx(fl,{}),s.jsx("button",{className:"buttonAdd",type:"submit",disabled:a,onClick:()=>{},children:"Add"})]})})})})},hl=E.ul`
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
`,gl=()=>s.jsxs(hl,{children:[s.jsx("li",{children:s.jsxs("a",{href:"",children:[s.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),s.jsxs("div",{children:[s.jsx("h4",{children:"Lone Tree Cooler"}),s.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),s.jsx("li",{children:s.jsxs("a",{href:"",children:[s.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),s.jsxs("div",{children:[s.jsx("h4",{children:"Lone Tree Cooler"}),s.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),s.jsx("li",{children:s.jsxs("a",{href:"",children:[s.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),s.jsxs("div",{children:[s.jsx("h4",{children:"Lone Tree Cooler"}),s.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),s.jsx("li",{children:s.jsxs("a",{href:"",children:[s.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),s.jsxs("div",{children:[s.jsx("h4",{children:"Lone Tree Cooler"}),s.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})})]}),ml=E.ul`
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
`,vl=()=>s.jsxs(ml,{children:[s.jsx(De,{children:s.jsx(Ve,{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:s.jsx(ze,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:s.jsx("path",{d:"M17.0804 4.06011C17.2904 4.06011 17.5004 4.06011 17.9204 4.06011V7.21011C17.7104 7.21011 17.2904 7.21011 16.8704 7.21011C16.4504 7.21011 16.0304 7.21011 15.8204 7.42011C15.6104 7.63011 15.6104 7.84011 15.6104 8.33011C15.6104 8.75011 15.6104 9.03011 15.6104 9.45011H17.9204V12.1101H15.6104V23.6601H12.0404V12.0401H10.1504V9.38011H12.0404V8.47011C12.0404 6.93011 12.2504 5.81011 12.6704 5.32011C13.3004 4.41011 14.5604 3.99011 16.4504 3.99011C16.6604 4.06011 16.8704 4.06011 17.0804 4.06011Z"})})})}),s.jsx(De,{children:s.jsx(Ve,{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:s.jsxs(ze,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:[s.jsx("path",{d:"M25.1277 9.41152C25.114 8.47146 24.9398 7.53885 24.6065 6.65964C24.0231 5.15827 22.8352 3.97109 21.3313 3.38991C20.4618 3.06332 19.5426 2.88822 18.6122 2.86835C17.4155 2.81495 17.0361 2.80005 13.9986 2.80005C10.961 2.80005 10.5716 2.80005 9.38372 2.86835C8.45454 2.88822 7.5353 3.06332 6.66582 3.38991C5.16196 3.97109 3.97279 5.15827 3.39065 6.65964C3.06351 7.52767 2.88688 8.44538 2.86946 9.37302C2.81598 10.5689 2.7998 10.9477 2.7998 13.9802C2.7998 17.0127 2.7998 17.4002 2.86946 18.5873C2.88812 19.5162 3.06351 20.4327 3.39065 21.3032C3.97404 22.8033 5.16195 23.9905 6.66706 24.5717C7.53281 24.9095 8.45205 25.1007 9.38497 25.1305C10.5828 25.1839 10.9622 25.2001 13.9998 25.2001C17.0374 25.2001 17.4267 25.2001 18.6146 25.1305C19.5438 25.1119 20.4631 24.9368 21.3338 24.6102C22.8377 24.0278 24.0256 22.8406 24.609 21.3405C24.9361 20.4712 25.1115 19.5547 25.1301 18.6246C25.1836 17.43 25.1998 17.0512 25.1998 14.0174C25.1973 10.9849 25.1973 10.5999 25.1277 9.41152ZM13.9911 19.7149C10.8142 19.7149 8.24059 17.1456 8.24059 13.974C8.24059 10.8024 10.8142 8.23302 13.9911 8.23302C17.1655 8.23302 19.7416 10.8024 19.7416 13.974C19.7416 17.1456 17.1655 19.7149 13.9911 19.7149ZM19.9705 9.35936C19.2279 9.35936 18.6296 8.7608 18.6296 8.02067C18.6296 7.28055 19.2279 6.68199 19.9705 6.68199C20.7106 6.68199 21.3102 7.28055 21.3102 8.02067C21.3102 8.7608 20.7106 9.35936 19.9705 9.35936Z"}),s.jsx("path",{d:"M13.9928 17.4789C15.9277 17.4789 17.4963 15.9104 17.4963 13.9754C17.4963 12.0405 15.9277 10.4719 13.9928 10.4719C12.0578 10.4719 10.4893 12.0405 10.4893 13.9754C10.4893 15.9104 12.0578 17.4789 13.9928 17.4789Z"})]})})}),s.jsx(De,{children:s.jsx(Ve,{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:s.jsx(ze,{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.2103 5.24986C20.0203 5.17986 17.5704 5.10986 13.8604 5.10986H13.3703C9.80034 5.10986 7.42038 5.17986 6.23038 5.31986C4.62038 5.45986 3.50034 5.87986 2.87034 6.43986C2.31034 6.92986 1.89036 7.83986 1.75036 9.02986C1.68036 9.79986 1.61035 11.4099 1.61035 13.8599V14.2099C1.61035 16.5199 1.68034 18.1299 1.82034 18.8999C2.03034 20.0199 2.38038 20.8599 3.08038 21.3499C3.78038 21.9099 4.97036 22.2599 6.65036 22.3999C7.84036 22.4699 10.2904 22.5399 14.0004 22.5399H14.4904C18.0604 22.5399 20.4404 22.4699 21.6304 22.3299C23.2404 22.1899 24.3604 21.7699 24.9904 21.2099C25.5504 20.7199 25.9703 19.8099 26.1103 18.6199C26.1803 17.8499 26.2504 16.2399 26.2504 13.7899V13.4399C26.2504 11.1299 26.1804 9.51986 26.0404 8.74986C25.8304 7.62986 25.4804 6.78986 24.7804 6.29986C24.0804 5.73986 22.8903 5.38986 21.2103 5.24986ZM18.4804 13.8599L10.7804 18.4799V9.23986L18.4804 13.8599Z"})})})})]}),yl=[{value:"Cocktail",label:"Cocktail"},{value:"Shake",label:"Shake"},{value:"Shot",label:"Shot"}],xl=[{value:"Highball glass",label:"Highball glass"},{value:"Cocktail glass",label:"Cocktail glass"},{value:"Whiskey Glass",label:"Whiskey Glass"}],bl=[{value:"Lem",label:"Lem"},{value:"Passoa",label:"Passoa"},{value:"Prosecco",label:"Prosecco"}],Al=()=>s.jsx(Yr,{children:s.jsxs(Xr,{children:[s.jsx(Qr,{title:"Add drink"}),s.jsxs(Jr,{children:[s.jsx(pl,{categories:yl,servings:xl,ingredients:bl}),s.jsxs(en,{children:[s.jsxs("div",{children:[s.jsx(wt,{mb:"20px",children:"Follow Us"}),s.jsx(vl,{})]}),s.jsxs("div",{children:[s.jsx(wt,{mb:"28px",children:"Popular Drinks"}),s.jsx(gl,{})]})]})]})]})});export{Al as default};
