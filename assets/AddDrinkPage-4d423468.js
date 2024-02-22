import{u as I,a2 as Lr,r as d,j as o,C as Nr}from"./index-cfb9722a.js";import{c as Dr,a as re,b as Vr,d as zr}from"./index.esm-5c8b4879.js";import{S as Ve,c as Br,i as Ur}from"./ingredients-f12fae87.js";import{u as Hr}from"./useDispatch-3f317a64.js";import{P as Gr}from"./PageTitle-9d5471f7.js";const Wr=I.div`
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
`,Kr=I.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,qr=I.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }
`,xt=I.p`
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
`;var Zr=function(t){return Yr(t)&&!Jr(t)};function Yr(e){return!!e&&typeof e=="object"}function Jr(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||en(e)}var Qr=typeof Symbol=="function"&&Symbol.for,Xr=Qr?Symbol.for("react.element"):60103;function en(e){return e.$$typeof===Xr}function tn(e){return Array.isArray(e)?[]:{}}function xe(e,t){return t.clone!==!1&&t.isMergeableObject(e)?le(tn(e),e,t):e}function rn(e,t,r){return e.concat(t).map(function(n){return xe(n,r)})}function nn(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(a){n[a]=xe(e[a],r)}),Object.keys(t).forEach(function(a){!r.isMergeableObject(t[a])||!e[a]?n[a]=xe(t[a],r):n[a]=le(e[a],t[a],r)}),n}function le(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||rn,r.isMergeableObject=r.isMergeableObject||Zr;var n=Array.isArray(t),a=Array.isArray(e),s=n===a;return s?n?r.arrayMerge(e,t,r):nn(e,t,r):xe(t,r)}le.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return le(n,a,r)},{})};var ze=le,an=typeof global=="object"&&global&&global.Object===Object&&global;const qt=an;var on=typeof self=="object"&&self&&self.Object===Object&&self,sn=qt||on||Function("return this")();const D=sn;var cn=D.Symbol;const B=cn;var Zt=Object.prototype,ln=Zt.hasOwnProperty,dn=Zt.toString,se=B?B.toStringTag:void 0;function un(e){var t=ln.call(e,se),r=e[se];try{e[se]=void 0;var n=!0}catch{}var a=dn.call(e);return n&&(t?e[se]=r:delete e[se]),a}var fn=Object.prototype,pn=fn.toString;function hn(e){return pn.call(e)}var gn="[object Null]",mn="[object Undefined]",vt=B?B.toStringTag:void 0;function Y(e){return e==null?e===void 0?mn:gn:vt&&vt in Object(e)?un(e):hn(e)}function Yt(e,t){return function(r){return e(t(r))}}var yn=Yt(Object.getPrototypeOf,Object);const qe=yn;function J(e){return e!=null&&typeof e=="object"}var xn="[object Object]",vn=Function.prototype,bn=Object.prototype,Jt=vn.toString,wn=bn.hasOwnProperty,Tn=Jt.call(Object);function bt(e){if(!J(e)||Y(e)!=xn)return!1;var t=qe(e);if(t===null)return!0;var r=wn.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Jt.call(r)==Tn}var wt=Array.isArray,Tt=Object.keys,jn=Object.prototype.hasOwnProperty,Sn=typeof Element<"u";function Be(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=wt(e),n=wt(t),a,s,c;if(r&&n){if(s=e.length,s!=t.length)return!1;for(a=s;a--!==0;)if(!Be(e[a],t[a]))return!1;return!0}if(r!=n)return!1;var h=e instanceof Date,y=t instanceof Date;if(h!=y)return!1;if(h&&y)return e.getTime()==t.getTime();var v=e instanceof RegExp,O=t instanceof RegExp;if(v!=O)return!1;if(v&&O)return e.toString()==t.toString();var F=Tt(e);if(s=F.length,s!==Tt(t).length)return!1;for(a=s;a--!==0;)if(!jn.call(t,F[a]))return!1;if(Sn&&e instanceof Element&&t instanceof Element)return e===t;for(a=s;a--!==0;)if(c=F[a],!(c==="_owner"&&e.$$typeof)&&!Be(e[c],t[c]))return!1;return!0}return e!==e&&t!==t}var Cn=function(t,r){try{return Be(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const G=Lr(Cn);var En=!0;function An(e,t){if(!En){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function _n(){this.__data__=[],this.size=0}function Qt(e,t){return e===t||e!==e&&t!==t}function ve(e,t){for(var r=e.length;r--;)if(Qt(e[r][0],t))return r;return-1}var In=Array.prototype,$n=In.splice;function On(e){var t=this.__data__,r=ve(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():$n.call(t,r,1),--this.size,!0}function Fn(e){var t=this.__data__,r=ve(t,e);return r<0?void 0:t[r][1]}function Mn(e){return ve(this.__data__,e)>-1}function kn(e,t){var r=this.__data__,n=ve(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function z(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}z.prototype.clear=_n;z.prototype.delete=On;z.prototype.get=Fn;z.prototype.has=Mn;z.prototype.set=kn;function Rn(){this.__data__=new z,this.size=0}function Pn(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Ln(e){return this.__data__.get(e)}function Nn(e){return this.__data__.has(e)}function fe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Dn="[object AsyncFunction]",Vn="[object Function]",zn="[object GeneratorFunction]",Bn="[object Proxy]";function Xt(e){if(!fe(e))return!1;var t=Y(e);return t==Vn||t==zn||t==Dn||t==Bn}var Un=D["__core-js_shared__"];const Fe=Un;var jt=function(){var e=/[^.]+$/.exec(Fe&&Fe.keys&&Fe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Hn(e){return!!jt&&jt in e}var Gn=Function.prototype,Wn=Gn.toString;function Q(e){if(e!=null){try{return Wn.call(e)}catch{}try{return e+""}catch{}}return""}var Kn=/[\\^$.*+?()[\]{}|]/g,qn=/^\[object .+?Constructor\]$/,Zn=Function.prototype,Yn=Object.prototype,Jn=Zn.toString,Qn=Yn.hasOwnProperty,Xn=RegExp("^"+Jn.call(Qn).replace(Kn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ei(e){if(!fe(e)||Hn(e))return!1;var t=Xt(e)?Xn:qn;return t.test(Q(e))}function ti(e,t){return e==null?void 0:e[t]}function X(e,t){var r=ti(e,t);return ei(r)?r:void 0}var ri=X(D,"Map");const de=ri;var ni=X(Object,"create");const ue=ni;function ii(){this.__data__=ue?ue(null):{},this.size=0}function ai(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var oi="__lodash_hash_undefined__",si=Object.prototype,ci=si.hasOwnProperty;function li(e){var t=this.__data__;if(ue){var r=t[e];return r===oi?void 0:r}return ci.call(t,e)?t[e]:void 0}var di=Object.prototype,ui=di.hasOwnProperty;function fi(e){var t=this.__data__;return ue?t[e]!==void 0:ui.call(t,e)}var pi="__lodash_hash_undefined__";function hi(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ue&&t===void 0?pi:t,this}function Z(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Z.prototype.clear=ii;Z.prototype.delete=ai;Z.prototype.get=li;Z.prototype.has=fi;Z.prototype.set=hi;function gi(){this.size=0,this.__data__={hash:new Z,map:new(de||z),string:new Z}}function mi(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function be(e,t){var r=e.__data__;return mi(t)?r[typeof t=="string"?"string":"hash"]:r.map}function yi(e){var t=be(this,e).delete(e);return this.size-=t?1:0,t}function xi(e){return be(this,e).get(e)}function vi(e){return be(this,e).has(e)}function bi(e,t){var r=be(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function U(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}U.prototype.clear=gi;U.prototype.delete=yi;U.prototype.get=xi;U.prototype.has=vi;U.prototype.set=bi;var wi=200;function Ti(e,t){var r=this.__data__;if(r instanceof z){var n=r.__data__;if(!de||n.length<wi-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new U(n)}return r.set(e,t),this.size=r.size,this}function ae(e){var t=this.__data__=new z(e);this.size=t.size}ae.prototype.clear=Rn;ae.prototype.delete=Pn;ae.prototype.get=Ln;ae.prototype.has=Nn;ae.prototype.set=Ti;function ji(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Si=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const St=Si;function er(e,t,r){t=="__proto__"&&St?St(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Ci=Object.prototype,Ei=Ci.hasOwnProperty;function tr(e,t,r){var n=e[t];(!(Ei.call(e,t)&&Qt(n,r))||r===void 0&&!(t in e))&&er(e,t,r)}function we(e,t,r,n){var a=!r;r||(r={});for(var s=-1,c=t.length;++s<c;){var h=t[s],y=n?n(r[h],e[h],h,r,e):void 0;y===void 0&&(y=e[h]),a?er(r,h,y):tr(r,h,y)}return r}function Ai(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var _i="[object Arguments]";function Ct(e){return J(e)&&Y(e)==_i}var rr=Object.prototype,Ii=rr.hasOwnProperty,$i=rr.propertyIsEnumerable,Oi=Ct(function(){return arguments}())?Ct:function(e){return J(e)&&Ii.call(e,"callee")&&!$i.call(e,"callee")};const Fi=Oi;var Mi=Array.isArray;const pe=Mi;function ki(){return!1}var nr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Et=nr&&typeof module=="object"&&module&&!module.nodeType&&module,Ri=Et&&Et.exports===nr,At=Ri?D.Buffer:void 0,Pi=At?At.isBuffer:void 0,Li=Pi||ki;const ir=Li;var Ni=9007199254740991,Di=/^(?:0|[1-9]\d*)$/;function Vi(e,t){var r=typeof e;return t=t??Ni,!!t&&(r=="number"||r!="symbol"&&Di.test(e))&&e>-1&&e%1==0&&e<t}var zi=9007199254740991;function ar(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=zi}var Bi="[object Arguments]",Ui="[object Array]",Hi="[object Boolean]",Gi="[object Date]",Wi="[object Error]",Ki="[object Function]",qi="[object Map]",Zi="[object Number]",Yi="[object Object]",Ji="[object RegExp]",Qi="[object Set]",Xi="[object String]",ea="[object WeakMap]",ta="[object ArrayBuffer]",ra="[object DataView]",na="[object Float32Array]",ia="[object Float64Array]",aa="[object Int8Array]",oa="[object Int16Array]",sa="[object Int32Array]",ca="[object Uint8Array]",la="[object Uint8ClampedArray]",da="[object Uint16Array]",ua="[object Uint32Array]",A={};A[na]=A[ia]=A[aa]=A[oa]=A[sa]=A[ca]=A[la]=A[da]=A[ua]=!0;A[Bi]=A[Ui]=A[ta]=A[Hi]=A[ra]=A[Gi]=A[Wi]=A[Ki]=A[qi]=A[Zi]=A[Yi]=A[Ji]=A[Qi]=A[Xi]=A[ea]=!1;function fa(e){return J(e)&&ar(e.length)&&!!A[Y(e)]}function Ze(e){return function(t){return e(t)}}var or=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ce=or&&typeof module=="object"&&module&&!module.nodeType&&module,pa=ce&&ce.exports===or,Me=pa&&qt.process,ha=function(){try{var e=ce&&ce.require&&ce.require("util").types;return e||Me&&Me.binding&&Me.binding("util")}catch{}}();const ie=ha;var _t=ie&&ie.isTypedArray,ga=_t?Ze(_t):fa;const ma=ga;var ya=Object.prototype,xa=ya.hasOwnProperty;function sr(e,t){var r=pe(e),n=!r&&Fi(e),a=!r&&!n&&ir(e),s=!r&&!n&&!a&&ma(e),c=r||n||a||s,h=c?Ai(e.length,String):[],y=h.length;for(var v in e)(t||xa.call(e,v))&&!(c&&(v=="length"||a&&(v=="offset"||v=="parent")||s&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Vi(v,y)))&&h.push(v);return h}var va=Object.prototype;function Ye(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||va;return e===r}var ba=Yt(Object.keys,Object);const wa=ba;var Ta=Object.prototype,ja=Ta.hasOwnProperty;function Sa(e){if(!Ye(e))return wa(e);var t=[];for(var r in Object(e))ja.call(e,r)&&r!="constructor"&&t.push(r);return t}function cr(e){return e!=null&&ar(e.length)&&!Xt(e)}function Je(e){return cr(e)?sr(e):Sa(e)}function Ca(e,t){return e&&we(t,Je(t),e)}function Ea(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Aa=Object.prototype,_a=Aa.hasOwnProperty;function Ia(e){if(!fe(e))return Ea(e);var t=Ye(e),r=[];for(var n in e)n=="constructor"&&(t||!_a.call(e,n))||r.push(n);return r}function Qe(e){return cr(e)?sr(e,!0):Ia(e)}function $a(e,t){return e&&we(t,Qe(t),e)}var lr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,It=lr&&typeof module=="object"&&module&&!module.nodeType&&module,Oa=It&&It.exports===lr,$t=Oa?D.Buffer:void 0,Ot=$t?$t.allocUnsafe:void 0;function Fa(e,t){if(t)return e.slice();var r=e.length,n=Ot?Ot(r):new e.constructor(r);return e.copy(n),n}function dr(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function Ma(e,t){for(var r=-1,n=e==null?0:e.length,a=0,s=[];++r<n;){var c=e[r];t(c,r,e)&&(s[a++]=c)}return s}function ur(){return[]}var ka=Object.prototype,Ra=ka.propertyIsEnumerable,Ft=Object.getOwnPropertySymbols,Pa=Ft?function(e){return e==null?[]:(e=Object(e),Ma(Ft(e),function(t){return Ra.call(e,t)}))}:ur;const Xe=Pa;function La(e,t){return we(e,Xe(e),t)}function fr(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var Na=Object.getOwnPropertySymbols,Da=Na?function(e){for(var t=[];e;)fr(t,Xe(e)),e=qe(e);return t}:ur;const pr=Da;function Va(e,t){return we(e,pr(e),t)}function hr(e,t,r){var n=t(e);return pe(e)?n:fr(n,r(e))}function za(e){return hr(e,Je,Xe)}function Ba(e){return hr(e,Qe,pr)}var Ua=X(D,"DataView");const Ue=Ua;var Ha=X(D,"Promise");const He=Ha;var Ga=X(D,"Set");const Ge=Ga;var Wa=X(D,"WeakMap");const We=Wa;var Mt="[object Map]",Ka="[object Object]",kt="[object Promise]",Rt="[object Set]",Pt="[object WeakMap]",Lt="[object DataView]",qa=Q(Ue),Za=Q(de),Ya=Q(He),Ja=Q(Ge),Qa=Q(We),W=Y;(Ue&&W(new Ue(new ArrayBuffer(1)))!=Lt||de&&W(new de)!=Mt||He&&W(He.resolve())!=kt||Ge&&W(new Ge)!=Rt||We&&W(new We)!=Pt)&&(W=function(e){var t=Y(e),r=t==Ka?e.constructor:void 0,n=r?Q(r):"";if(n)switch(n){case qa:return Lt;case Za:return Mt;case Ya:return kt;case Ja:return Rt;case Qa:return Pt}return t});const et=W;var Xa=Object.prototype,eo=Xa.hasOwnProperty;function to(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&eo.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var ro=D.Uint8Array;const Nt=ro;function tt(e){var t=new e.constructor(e.byteLength);return new Nt(t).set(new Nt(e)),t}function no(e,t){var r=t?tt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var io=/\w*$/;function ao(e){var t=new e.constructor(e.source,io.exec(e));return t.lastIndex=e.lastIndex,t}var Dt=B?B.prototype:void 0,Vt=Dt?Dt.valueOf:void 0;function oo(e){return Vt?Object(Vt.call(e)):{}}function so(e,t){var r=t?tt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var co="[object Boolean]",lo="[object Date]",uo="[object Map]",fo="[object Number]",po="[object RegExp]",ho="[object Set]",go="[object String]",mo="[object Symbol]",yo="[object ArrayBuffer]",xo="[object DataView]",vo="[object Float32Array]",bo="[object Float64Array]",wo="[object Int8Array]",To="[object Int16Array]",jo="[object Int32Array]",So="[object Uint8Array]",Co="[object Uint8ClampedArray]",Eo="[object Uint16Array]",Ao="[object Uint32Array]";function _o(e,t,r){var n=e.constructor;switch(t){case yo:return tt(e);case co:case lo:return new n(+e);case xo:return no(e,r);case vo:case bo:case wo:case To:case jo:case So:case Co:case Eo:case Ao:return so(e,r);case uo:return new n;case fo:case go:return new n(e);case po:return ao(e);case ho:return new n;case mo:return oo(e)}}var zt=Object.create,Io=function(){function e(){}return function(t){if(!fe(t))return{};if(zt)return zt(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const $o=Io;function Oo(e){return typeof e.constructor=="function"&&!Ye(e)?$o(qe(e)):{}}var Fo="[object Map]";function Mo(e){return J(e)&&et(e)==Fo}var Bt=ie&&ie.isMap,ko=Bt?Ze(Bt):Mo;const Ro=ko;var Po="[object Set]";function Lo(e){return J(e)&&et(e)==Po}var Ut=ie&&ie.isSet,No=Ut?Ze(Ut):Lo;const Do=No;var Vo=1,zo=2,Bo=4,gr="[object Arguments]",Uo="[object Array]",Ho="[object Boolean]",Go="[object Date]",Wo="[object Error]",mr="[object Function]",Ko="[object GeneratorFunction]",qo="[object Map]",Zo="[object Number]",yr="[object Object]",Yo="[object RegExp]",Jo="[object Set]",Qo="[object String]",Xo="[object Symbol]",es="[object WeakMap]",ts="[object ArrayBuffer]",rs="[object DataView]",ns="[object Float32Array]",is="[object Float64Array]",as="[object Int8Array]",os="[object Int16Array]",ss="[object Int32Array]",cs="[object Uint8Array]",ls="[object Uint8ClampedArray]",ds="[object Uint16Array]",us="[object Uint32Array]",C={};C[gr]=C[Uo]=C[ts]=C[rs]=C[Ho]=C[Go]=C[ns]=C[is]=C[as]=C[os]=C[ss]=C[qo]=C[Zo]=C[yr]=C[Yo]=C[Jo]=C[Qo]=C[Xo]=C[cs]=C[ls]=C[ds]=C[us]=!0;C[Wo]=C[mr]=C[es]=!1;function ye(e,t,r,n,a,s){var c,h=t&Vo,y=t&zo,v=t&Bo;if(r&&(c=a?r(e,n,a,s):r(e)),c!==void 0)return c;if(!fe(e))return e;var O=pe(e);if(O){if(c=to(e),!h)return dr(e,c)}else{var F=et(e),f=F==mr||F==Ko;if(ir(e))return Fa(e,h);if(F==yr||F==gr||f&&!a){if(c=y||f?{}:Oo(e),!h)return y?Va(e,$a(c,e)):La(e,Ca(c,e))}else{if(!C[F])return a?e:{};c=_o(e,F,h)}}s||(s=new ae);var E=s.get(e);if(E)return E;s.set(e,c),Do(e)?e.forEach(function(g){c.add(ye(g,t,r,g,e,s))}):Ro(e)&&e.forEach(function(g,w){c.set(w,ye(g,t,r,w,e,s))});var S=v?y?Ba:za:y?Qe:Je,x=O?void 0:S(e);return ji(x||e,function(g,w){x&&(w=g,g=e[w]),tr(c,w,ye(g,t,r,w,e,s))}),c}var fs=4;function Ht(e){return ye(e,fs)}function xr(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var ps="[object Symbol]";function rt(e){return typeof e=="symbol"||J(e)&&Y(e)==ps}var hs="Expected a function";function nt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(hs);var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],s=r.cache;if(s.has(a))return s.get(a);var c=e.apply(this,n);return r.cache=s.set(a,c)||s,c};return r.cache=new(nt.Cache||U),r}nt.Cache=U;var gs=500;function ms(e){var t=nt(e,function(n){return r.size===gs&&r.clear(),n}),r=t.cache;return t}var ys=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xs=/\\(\\)?/g,vs=ms(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ys,function(r,n,a,s){t.push(a?s.replace(xs,"$1"):n||r)}),t});const bs=vs;var ws=1/0;function Ts(e){if(typeof e=="string"||rt(e))return e;var t=e+"";return t=="0"&&1/e==-ws?"-0":t}var js=1/0,Gt=B?B.prototype:void 0,Wt=Gt?Gt.toString:void 0;function vr(e){if(typeof e=="string")return e;if(pe(e))return xr(e,vr)+"";if(rt(e))return Wt?Wt.call(e):"";var t=e+"";return t=="0"&&1/e==-js?"-0":t}function Ss(e){return e==null?"":vr(e)}function br(e){return pe(e)?xr(e,Ts):rt(e)?[e]:dr(bs(Ss(e)))}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function ne(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var Te=d.createContext(void 0);Te.displayName="FormikContext";var Cs=Te.Provider;Te.Consumer;function wr(){var e=d.useContext(Te);return e||An(!1),e}var R=function(t){return typeof t=="function"},je=function(t){return t!==null&&typeof t=="object"},Es=function(t){return String(Math.floor(Number(t)))===t},ke=function(t){return Object.prototype.toString.call(t)==="[object String]"},As=function(t){return d.Children.count(t)===0},Re=function(t){return je(t)&&R(t.then)};function k(e,t,r,n){n===void 0&&(n=0);for(var a=br(t);e&&n<a.length;)e=e[a[n++]];return n!==a.length&&!e||e===void 0?r:e}function q(e,t,r){for(var n=Ht(e),a=n,s=0,c=br(t);s<c.length-1;s++){var h=c[s],y=k(e,c.slice(0,s+1));if(y&&(je(y)||Array.isArray(y)))a=a[h]=Ht(y);else{var v=c[s+1];a=a[h]=Es(v)&&Number(v)>=0?[]:{}}}return(s===0?e:a)[c[s]]===r?e:(r===void 0?delete a[c[s]]:a[c[s]]=r,s===0&&r===void 0&&delete n[c[s]],n)}function Tr(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var a=0,s=Object.keys(e);a<s.length;a++){var c=s[a],h=e[c];je(h)?r.get(h)||(r.set(h,!0),n[c]=Array.isArray(h)?[]:{},Tr(h,t,r,n[c])):n[c]=t}return n}function _s(e,t){switch(t.type){case"SET_VALUES":return _({},e,{values:t.payload});case"SET_TOUCHED":return _({},e,{touched:t.payload});case"SET_ERRORS":return G(e.errors,t.payload)?e:_({},e,{errors:t.payload});case"SET_STATUS":return _({},e,{status:t.payload});case"SET_ISSUBMITTING":return _({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return _({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return _({},e,{values:q(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return _({},e,{touched:q(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return _({},e,{errors:q(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return _({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return _({},e,{touched:Tr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return _({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return _({},e,{isSubmitting:!1});default:return e}}var H={},me={};function Is(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,a=n===void 0?!0:n,s=e.validateOnMount,c=s===void 0?!1:s,h=e.isInitialValid,y=e.enableReinitialize,v=y===void 0?!1:y,O=e.onSubmit,F=ne(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=_({validateOnChange:r,validateOnBlur:a,validateOnMount:c,onSubmit:O},F),E=d.useRef(f.initialValues),S=d.useRef(f.initialErrors||H),x=d.useRef(f.initialTouched||me),g=d.useRef(f.initialStatus),w=d.useRef(!1),$=d.useRef({});d.useEffect(function(){return w.current=!0,function(){w.current=!1}},[]);var P=d.useState(0),Se=P[1],he=d.useRef({values:f.initialValues,errors:f.initialErrors||H,touched:f.initialTouched||me,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),j=he.current,T=d.useCallback(function(i){var l=he.current;he.current=_s(l,i),l!==he.current&&Se(function(u){return u+1})},[]),it=d.useCallback(function(i,l){return new Promise(function(u,p){var m=f.validate(i,l);m==null?u(H):Re(m)?m.then(function(b){u(b||H)},function(b){p(b)}):u(m)})},[f.validate]),Ce=d.useCallback(function(i,l){var u=f.validationSchema,p=R(u)?u(l):u,m=l&&p.validateAt?p.validateAt(l,i):Fs(i,p);return new Promise(function(b,M){m.then(function(){b(H)},function(V){V.name==="ValidationError"?b(Os(V)):M(V)})})},[f.validationSchema]),at=d.useCallback(function(i,l){return new Promise(function(u){return u($.current[i].validate(l))})},[]),ot=d.useCallback(function(i){var l=Object.keys($.current).filter(function(p){return R($.current[p].validate)}),u=l.length>0?l.map(function(p){return at(p,k(i,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(u).then(function(p){return p.reduce(function(m,b,M){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(m=q(m,l[M],b)),m},{})})},[at]),Sr=d.useCallback(function(i){return Promise.all([ot(i),f.validationSchema?Ce(i):{},f.validate?it(i):{}]).then(function(l){var u=l[0],p=l[1],m=l[2],b=ze.all([u,p,m],{arrayMerge:Ms});return b})},[f.validate,f.validationSchema,ot,it,Ce]),N=L(function(i){return i===void 0&&(i=j.values),T({type:"SET_ISVALIDATING",payload:!0}),Sr(i).then(function(l){return w.current&&(T({type:"SET_ISVALIDATING",payload:!1}),T({type:"SET_ERRORS",payload:l})),l})});d.useEffect(function(){c&&w.current===!0&&G(E.current,f.initialValues)&&N(E.current)},[c,N]);var oe=d.useCallback(function(i){var l=i&&i.values?i.values:E.current,u=i&&i.errors?i.errors:S.current?S.current:f.initialErrors||{},p=i&&i.touched?i.touched:x.current?x.current:f.initialTouched||{},m=i&&i.status?i.status:g.current?g.current:f.initialStatus;E.current=l,S.current=u,x.current=p,g.current=m;var b=function(){T({type:"RESET_FORM",payload:{isSubmitting:!!i&&!!i.isSubmitting,errors:u,touched:p,status:m,values:l,isValidating:!!i&&!!i.isValidating,submitCount:i&&i.submitCount&&typeof i.submitCount=="number"?i.submitCount:0}})};if(f.onReset){var M=f.onReset(j.values,mt);Re(M)?M.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){w.current===!0&&!G(E.current,f.initialValues)&&v&&(E.current=f.initialValues,oe(),c&&N(E.current))},[v,f.initialValues,oe,c,N]),d.useEffect(function(){v&&w.current===!0&&!G(S.current,f.initialErrors)&&(S.current=f.initialErrors||H,T({type:"SET_ERRORS",payload:f.initialErrors||H}))},[v,f.initialErrors]),d.useEffect(function(){v&&w.current===!0&&!G(x.current,f.initialTouched)&&(x.current=f.initialTouched||me,T({type:"SET_TOUCHED",payload:f.initialTouched||me}))},[v,f.initialTouched]),d.useEffect(function(){v&&w.current===!0&&!G(g.current,f.initialStatus)&&(g.current=f.initialStatus,T({type:"SET_STATUS",payload:f.initialStatus}))},[v,f.initialStatus,f.initialTouched]);var st=L(function(i){if($.current[i]&&R($.current[i].validate)){var l=k(j.values,i),u=$.current[i].validate(l);return Re(u)?(T({type:"SET_ISVALIDATING",payload:!0}),u.then(function(p){return p}).then(function(p){T({type:"SET_FIELD_ERROR",payload:{field:i,value:p}}),T({type:"SET_ISVALIDATING",payload:!1})})):(T({type:"SET_FIELD_ERROR",payload:{field:i,value:u}}),Promise.resolve(u))}else if(f.validationSchema)return T({type:"SET_ISVALIDATING",payload:!0}),Ce(j.values,i).then(function(p){return p}).then(function(p){T({type:"SET_FIELD_ERROR",payload:{field:i,value:k(p,i)}}),T({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Cr=d.useCallback(function(i,l){var u=l.validate;$.current[i]={validate:u}},[]),Er=d.useCallback(function(i){delete $.current[i]},[]),ct=L(function(i,l){T({type:"SET_TOUCHED",payload:i});var u=l===void 0?a:l;return u?N(j.values):Promise.resolve()}),lt=d.useCallback(function(i){T({type:"SET_ERRORS",payload:i})},[]),dt=L(function(i,l){var u=R(i)?i(j.values):i;T({type:"SET_VALUES",payload:u});var p=l===void 0?r:l;return p?N(u):Promise.resolve()}),ge=d.useCallback(function(i,l){T({type:"SET_FIELD_ERROR",payload:{field:i,value:l}})},[]),ee=L(function(i,l,u){T({type:"SET_FIELD_VALUE",payload:{field:i,value:l}});var p=u===void 0?r:u;return p?N(q(j.values,i,l)):Promise.resolve()}),ut=d.useCallback(function(i,l){var u=l,p=i,m;if(!ke(i)){i.persist&&i.persist();var b=i.target?i.target:i.currentTarget,M=b.type,V=b.name,$e=b.id,Oe=b.value,Rr=b.checked,oc=b.outerHTML,yt=b.options,Pr=b.multiple;u=l||V||$e,p=/number|range/.test(M)?(m=parseFloat(Oe),isNaN(m)?"":m):/checkbox/.test(M)?Rs(k(j.values,u),Rr,Oe):yt&&Pr?ks(yt):Oe}u&&ee(u,p)},[ee,j.values]),Ee=L(function(i){if(ke(i))return function(l){return ut(l,i)};ut(i)}),te=L(function(i,l,u){l===void 0&&(l=!0),T({type:"SET_FIELD_TOUCHED",payload:{field:i,value:l}});var p=u===void 0?a:u;return p?N(j.values):Promise.resolve()}),ft=d.useCallback(function(i,l){i.persist&&i.persist();var u=i.target,p=u.name,m=u.id,b=u.outerHTML,M=l||p||m;te(M,!0)},[te]),Ae=L(function(i){if(ke(i))return function(l){return ft(l,i)};ft(i)}),pt=d.useCallback(function(i){R(i)?T({type:"SET_FORMIK_STATE",payload:i}):T({type:"SET_FORMIK_STATE",payload:function(){return i}})},[]),ht=d.useCallback(function(i){T({type:"SET_STATUS",payload:i})},[]),gt=d.useCallback(function(i){T({type:"SET_ISSUBMITTING",payload:i})},[]),_e=L(function(){return T({type:"SUBMIT_ATTEMPT"}),N().then(function(i){var l=i instanceof Error,u=!l&&Object.keys(i).length===0;if(u){var p;try{if(p=_r(),p===void 0)return}catch(m){throw m}return Promise.resolve(p).then(function(m){return w.current&&T({type:"SUBMIT_SUCCESS"}),m}).catch(function(m){if(w.current)throw T({type:"SUBMIT_FAILURE"}),m})}else if(w.current&&(T({type:"SUBMIT_FAILURE"}),l))throw i})}),Ar=L(function(i){i&&i.preventDefault&&R(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&R(i.stopPropagation)&&i.stopPropagation(),_e().catch(function(l){console.warn("Warning: An unhandled error was caught from submitForm()",l)})}),mt={resetForm:oe,validateForm:N,validateField:st,setErrors:lt,setFieldError:ge,setFieldTouched:te,setFieldValue:ee,setStatus:ht,setSubmitting:gt,setTouched:ct,setValues:dt,setFormikState:pt,submitForm:_e},_r=L(function(){return O(j.values,mt)}),Ir=L(function(i){i&&i.preventDefault&&R(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&R(i.stopPropagation)&&i.stopPropagation(),oe()}),$r=d.useCallback(function(i){return{value:k(j.values,i),error:k(j.errors,i),touched:!!k(j.touched,i),initialValue:k(E.current,i),initialTouched:!!k(x.current,i),initialError:k(S.current,i)}},[j.errors,j.touched,j.values]),Or=d.useCallback(function(i){return{setValue:function(u,p){return ee(i,u,p)},setTouched:function(u,p){return te(i,u,p)},setError:function(u){return ge(i,u)}}},[ee,te,ge]),Fr=d.useCallback(function(i){var l=je(i),u=l?i.name:i,p=k(j.values,u),m={name:u,value:p,onChange:Ee,onBlur:Ae};if(l){var b=i.type,M=i.value,V=i.as,$e=i.multiple;b==="checkbox"?M===void 0?m.checked=!!p:(m.checked=!!(Array.isArray(p)&&~p.indexOf(M)),m.value=M):b==="radio"?(m.checked=p===M,m.value=M):V==="select"&&$e&&(m.value=m.value||[],m.multiple=!0)}return m},[Ae,Ee,j.values]),Ie=d.useMemo(function(){return!G(E.current,j.values)},[E.current,j.values]),Mr=d.useMemo(function(){return typeof h<"u"?Ie?j.errors&&Object.keys(j.errors).length===0:h!==!1&&R(h)?h(f):h:j.errors&&Object.keys(j.errors).length===0},[h,Ie,j.errors,f]),kr=_({},j,{initialValues:E.current,initialErrors:S.current,initialTouched:x.current,initialStatus:g.current,handleBlur:Ae,handleChange:Ee,handleReset:Ir,handleSubmit:Ar,resetForm:oe,setErrors:lt,setFormikState:pt,setFieldTouched:te,setFieldValue:ee,setFieldError:ge,setStatus:ht,setSubmitting:gt,setTouched:ct,setValues:dt,submitForm:_e,validateForm:N,validateField:st,isValid:Mr,dirty:Ie,unregisterField:Er,registerField:Cr,getFieldProps:Fr,getFieldMeta:$r,getFieldHelpers:Or,validateOnBlur:a,validateOnChange:r,validateOnMount:c});return kr}function $s(e){var t=Is(e),r=e.component,n=e.children,a=e.render,s=e.innerRef;return d.useImperativeHandle(s,function(){return t}),d.createElement(Cs,{value:t},r?d.createElement(r,t):a?a(t):n?R(n)?n(t):As(n)?null:d.Children.only(n):null)}function Os(e){var t={};if(e.inner){if(e.inner.length===0)return q(t,e.path,e.message);for(var a=e.inner,r=Array.isArray(a),n=0,a=r?a:a[Symbol.iterator]();;){var s;if(r){if(n>=a.length)break;s=a[n++]}else{if(n=a.next(),n.done)break;s=n.value}var c=s;k(t,c.path)||(t=q(t,c.path,c.message))}}return t}function Fs(e,t,r,n){r===void 0&&(r=!1);var a=Ke(e);return t[r?"validateSync":"validate"](a,{abortEarly:!1,context:n||a})}function Ke(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(a){return Array.isArray(a)===!0||bt(a)?Ke(a):a!==""?a:void 0}):bt(e[n])?t[n]=Ke(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Ms(e,t,r){var n=e.slice();return t.forEach(function(s,c){if(typeof n[c]>"u"){var h=r.clone!==!1,y=h&&r.isMergeableObject(s);n[c]=y?ze(Array.isArray(s)?[]:{},s,r):s}else r.isMergeableObject(s)?n[c]=ze(e[c],s,r):e.indexOf(s)===-1&&n.push(s)}),n}function ks(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Rs(e,t,r){if(typeof e=="boolean")return!!t;var n=[],a=!1,s=-1;if(Array.isArray(e))n=e,s=e.indexOf(r),a=s>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!a?n.concat(r):a?n.slice(0,s).concat(n.slice(s+1)):n}var Ps=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function L(e){var t=d.useRef(e);return Ps(function(){t.current=e}),d.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current.apply(void 0,n)},[])}function K(e){var t=e.validate,r=e.name,n=e.render,a=e.children,s=e.as,c=e.component,h=e.className,y=ne(e,["validate","name","render","children","as","component","className"]),v=wr(),O=ne(v,["validate","validationSchema"]),F=O.registerField,f=O.unregisterField;d.useEffect(function(){return F(r,{validate:t}),function(){f(r)}},[F,f,r,t]);var E=O.getFieldProps(_({name:r},y)),S=O.getFieldMeta(r),x={field:E,form:O};if(n)return n(_({},x,{meta:S}));if(R(a))return a(_({},x,{meta:S}));if(c){if(typeof c=="string"){var g=y.innerRef,w=ne(y,["innerRef"]);return d.createElement(c,_({ref:g},E,w,{className:h}),a)}return d.createElement(c,_({field:E,form:O},y,{className:h}),a)}var $=s||"input";if(typeof $=="string"){var P=y.innerRef,Se=ne(y,["innerRef"]);return d.createElement($,_({ref:P},E,Se,{className:h}),a)}return d.createElement($,_({},E,y,{className:h}),a)}var jr=d.forwardRef(function(e,t){var r=e.action,n=ne(e,["action"]),a=r??"#",s=wr(),c=s.handleReset,h=s.handleSubmit;return d.createElement("form",_({onSubmit:h,ref:t,onReset:c,action:a},n))});jr.displayName="Form";const Ls=I.div`
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
`,Ns=I.div`
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
`,Ds=I.div`
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
`,Vs=I.div`
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
`,zs=I.label`
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
`;I.input`
  display: none;
`;const Bs=I.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,Us=I.div`
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
`,Kt={dropdownIndicator:(e,t)=>({...e,transform:t.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(e,{isFocused:t})=>({...e,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),placeholder:(e,{isFocused:t})=>({...e,fontSize:"14px",boxShadow:"none",cursor:"pointer",color:"#f3f3f3",display:"flex",alignItems:"center",fontWeight:"400",fontSize:"14px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"16px"}}),menu:e=>({...e,position:"absolute",width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px",right:"-10%","@media only screen and (min-width: 1440px)":{...e["@media only screen and (min-width: 1440px)"],width:"154px",right:"-0%"}},backgroundColor:"#161F37",borderRadius:"12px"}),indicatorSeparator:e=>({...e,display:"none"}),valueContainer:e=>({...e,padding:0}),singleValue:e=>({...e,color:"#f3f3f3"}),option:(e,{isFocused:t,isSelected:r})=>({...e,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...e["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:t?"#f3f3f375":r?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},Hs=I.div`
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
`,Gs=["Highball glass","Cocktail glass","Old-fashioned glass","Whiskey Glass","Collins glass","Pousse cafe glass","Champagne flute","Whiskey sour glass","Cordial glass","Brandy snifter","White wine glass","Nick and Nora Glass","Hurricane glass","Coffee mug","Shot glass","Jar","Irish coffee cup","Punch bowl","Pitcher","Pint glass","Copper Mug","Wine Glass","Beer mug","Margarita/Coupette glass","Beer pilsner","Beer Glass","Parfait glass","Mason jar","Margarita glass","Martini Glass","Balloon Glass","Coupe Glass"].map(e=>({glass:e})),Ws=({values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:s})=>{const[c,h]=d.useState([]),[y,v]=d.useState([]),[O,F]=d.useState([]),[f,E]=d.useState([]);d.useEffect(()=>{async function g(){try{const $=Br.map(P=>({value:P.categori,label:P.categori}));h($)}catch($){console.error("Помилка:",$)}}async function w(){try{const $=Gs.map(P=>({value:P.glass,label:P.glass}));v($)}catch($){console.error("Ошибка при загрузці скла:",$)}}g(),w()},[]);const S=g=>{F(g),s("category",g.value)},x=g=>{E(g),s("glass",g.value)};return o.jsxs(Ns,{children:[o.jsx(Ds,{children:o.jsxs(Vs,{children:[o.jsxs(zs,{children:[o.jsxs("svg",{width:"29",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M14.5 5.8335V22.1668",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M6.33203 14H22.6654",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),o.jsx(K,{style:{display:"none"},id:"drinkThumb",type:"file",name:"drinkThumb",accept:"drinkThumb/*"})]}),o.jsx("p",{children:"Add Image"})]})}),o.jsxs(Bs,{children:[o.jsxs(Us,{children:[o.jsx("div",{className:"styledDivInput",children:o.jsx(K,{className:"styledInputText",placeholder:"Enter item title",type:"text",id:"drink",name:"drink",onChange:g=>{n(g)}})}),o.jsx("div",{className:"styledDivInput",children:o.jsx(K,{className:"styledInputText",placeholder:"Enter item title",id:"description",name:"description",onChange:g=>{n(g)}})}),o.jsx("div",{className:"styledDivInput",children:o.jsxs("label",{className:"labelSelect",children:[o.jsx("p",{className:"labelTitle",children:"Category"}),o.jsx(Ve,{className:"selectStyled",name:"category",options:c,value:O,onChange:g=>S(g),styles:Kt})]})}),o.jsx("div",{className:"styledDivInput",children:o.jsxs("label",{className:"labelSelect",children:[o.jsx("p",{className:"labelTitle",children:"Glass"}),o.jsx(Ve,{className:"selectStyled",name:"glass",options:y,value:f,onChange:g=>x(g),styles:Kt})]})})]}),o.jsxs(Hs,{children:[o.jsxs("label",{className:"radioLabel",children:[o.jsx(K,{className:"styledRadio",type:"radio",name:"alcoholic",value:"true",checked:e.alcoholic==="true",onChange:n}),o.jsx("span",{className:"styledSpan",children:"Alcoholic"})]}),o.jsxs("label",{className:"radioLabel",children:[o.jsx(K,{className:"styledRadio",type:"radio",name:"alcoholic",value:"false",checked:e.alcoholic==="false",onChange:n}),o.jsx("span",{className:"styledSpan",children:"Non-alcoholic"})]})]})]})]})},Ks=I.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,qs=I.div`
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
`,Pe=I.button`
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
`,Zs=I.div`
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
`,Ys={dropdownIndicator:(e,t)=>({...e,paddingRight:"18px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:t.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(e,t)=>({...e,width:"200px",height:"50px",border:"     1px solid rgba(243, 243, 243, 0.5)",background:"inherit",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:e=>({...e,marginTop:"2px",padding:"0px 12px",backgroundColor:" #161f37",borderRadius:"12px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:e=>({...e,display:"none"}),valueContainer:e=>({...e,padding:"0px 18px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:e=>({...e,color:"#f3f3f3"}),placeholder:e=>({...e,"@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(e,{isFocused:t,isSelected:r})=>({...e,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:t?"#f3f3f375":r?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},Js=({values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:s})=>{const[c,h]=d.useState([]),[y,v]=d.useState([]);d.useEffect(()=>{async function S(){try{const x=Ur.map(g=>({label:g.title,value:g._id}));h(x)}catch(x){console.error("Помилка при завантаженні інгрідієнтів:",x)}}S()},[]);const O=(S,x)=>{const{value:g,label:w}=S;s(`ingredients[${x}].title`,w),s(`ingredients[${x}]._id`,g),v($=>{const P=[...$];return P[x]=S,P})},F=()=>{const S={name:""};s("ingredients",[...e.ingredients,S]),v(x=>[...x,null])},f=S=>{const x=[...e.ingredients];x.splice(S,1),s("ingredients",x),v(g=>{const w=[...g];return w.splice(S,1),w})},E=e.ingredients.length===1;return o.jsxs(Ks,{children:[o.jsxs(qs,{children:[o.jsx("h4",{className:"titleIngredientsForm",children:"Ingredients"}),o.jsxs("div",{className:"containerIngredientInputs",children:[o.jsx(Pe,{className:"buttonAddRemove",type:"button",onClick:()=>f(e.ingredients.length-1),disabled:E,children:o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeOpacity:"0.3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),o.jsx("p",{className:"quantityTitle",children:e.ingredients.length}),o.jsx(Pe,{type:"button",onClick:F,className:"buttonAddRemove",children:o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M8 2.5V13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]}),o.jsx(Zs,{children:e.ingredients.map((S,x)=>o.jsxs("div",{className:"inputsWrapper",children:[o.jsx(Ve,{className:"styledSelect",name:`ingredients[${x}].title`,options:c,value:y[x],onChange:g=>O(g,x),onBlur:a,styles:Ys}),o.jsx(K,{className:"styledInput",type:"text",name:`ingredients[${x}].measure`,placeholder:"1 cl",value:S.measure||"",onChange:n,onBlur:a}),o.jsx(Pe,{type:"button",onClick:()=>f(x),disabled:E,children:o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]},x))})]})},Qs=I.div`
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
`,Xs=I.div`
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
`,ec=({values:e,errors:t,handleChange:r})=>o.jsxs(Qs,{children:[o.jsx(Xs,{children:o.jsx("h4",{children:"Recipe Preparation"})}),o.jsx(K,{as:"textarea",className:"inputField",placeholder:"Enter the recipe",name:"instructions",onChange:n=>{r(n)},value:e.instructions})]}),tc=()=>(Hr(),o.jsx($s,{initialValues:{drink:"",ingredients:[{title:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic",description:""},validationSchema:Dr().shape({drink:re().required("This field is mandatory"),description:re().required("This field is mandatory"),ingredients:Vr().required("This field is mandatory"),instructions:re().required("This field is mandatory"),category:re().required("This field is mandatory"),glass:re().required("This field is mandatory"),alcoholic:re().required("Select the type of cocktail"),drinkThumb:zr()}),onSubmit:async e=>{const t=new FormData;t.append("drink",e.drink),t.append("category",e.category),t.append("description",e.description),t.append("alcoholic",e.alcoholic),t.append("instructions",e.instructions),t.append("glass",e.glass),t.append("drinkThumb",e.drinkThumb);const r=JSON.stringify(e.ingredients);t.append("ingredients",r);try{console.log(e)}catch(n){console.error("Error:",n)}},children:({values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:s})=>o.jsx(jr,{children:o.jsxs(Ls,{children:[o.jsx(Ws,{values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:s}),o.jsx(Js,{values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:s}),o.jsx(ec,{values:e,errors:t,touched:r,handleChange:n,handleBlur:a}),o.jsx("button",{className:"buttonAdd",type:"submit",children:"Add"})]})})})),rc=I.ul`
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
`,nc=()=>o.jsxs(rc,{children:[o.jsx("li",{children:o.jsxs("a",{href:"",children:[o.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),o.jsxs("div",{children:[o.jsx("h4",{children:"Lone Tree Cooler"}),o.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),o.jsx("li",{children:o.jsxs("a",{href:"",children:[o.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),o.jsxs("div",{children:[o.jsx("h4",{children:"Lone Tree Cooler"}),o.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),o.jsx("li",{children:o.jsxs("a",{href:"",children:[o.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),o.jsxs("div",{children:[o.jsx("h4",{children:"Lone Tree Cooler"}),o.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),o.jsx("li",{children:o.jsxs("a",{href:"",children:[o.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),o.jsxs("div",{children:[o.jsx("h4",{children:"Lone Tree Cooler"}),o.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})})]}),ic=I.ul`
  display: inline-flex;
  column-gap: 14px;
`,Le=I.li`
  opacity: 0.8;
  transition: opacity 250ms ease;
  &:hover,
  &:focus {
    opacity: 1;
  }
`,Ne=I.a`
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
`,De=I.svg`
  width: 22px;
  height: 22px;
  fill: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,ac=()=>o.jsxs(ic,{children:[o.jsx(Le,{children:o.jsx(Ne,{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:o.jsx(De,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:o.jsx("path",{d:"M17.0804 4.06011C17.2904 4.06011 17.5004 4.06011 17.9204 4.06011V7.21011C17.7104 7.21011 17.2904 7.21011 16.8704 7.21011C16.4504 7.21011 16.0304 7.21011 15.8204 7.42011C15.6104 7.63011 15.6104 7.84011 15.6104 8.33011C15.6104 8.75011 15.6104 9.03011 15.6104 9.45011H17.9204V12.1101H15.6104V23.6601H12.0404V12.0401H10.1504V9.38011H12.0404V8.47011C12.0404 6.93011 12.2504 5.81011 12.6704 5.32011C13.3004 4.41011 14.5604 3.99011 16.4504 3.99011C16.6604 4.06011 16.8704 4.06011 17.0804 4.06011Z"})})})}),o.jsx(Le,{children:o.jsx(Ne,{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:o.jsxs(De,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:[o.jsx("path",{d:"M25.1277 9.41152C25.114 8.47146 24.9398 7.53885 24.6065 6.65964C24.0231 5.15827 22.8352 3.97109 21.3313 3.38991C20.4618 3.06332 19.5426 2.88822 18.6122 2.86835C17.4155 2.81495 17.0361 2.80005 13.9986 2.80005C10.961 2.80005 10.5716 2.80005 9.38372 2.86835C8.45454 2.88822 7.5353 3.06332 6.66582 3.38991C5.16196 3.97109 3.97279 5.15827 3.39065 6.65964C3.06351 7.52767 2.88688 8.44538 2.86946 9.37302C2.81598 10.5689 2.7998 10.9477 2.7998 13.9802C2.7998 17.0127 2.7998 17.4002 2.86946 18.5873C2.88812 19.5162 3.06351 20.4327 3.39065 21.3032C3.97404 22.8033 5.16195 23.9905 6.66706 24.5717C7.53281 24.9095 8.45205 25.1007 9.38497 25.1305C10.5828 25.1839 10.9622 25.2001 13.9998 25.2001C17.0374 25.2001 17.4267 25.2001 18.6146 25.1305C19.5438 25.1119 20.4631 24.9368 21.3338 24.6102C22.8377 24.0278 24.0256 22.8406 24.609 21.3405C24.9361 20.4712 25.1115 19.5547 25.1301 18.6246C25.1836 17.43 25.1998 17.0512 25.1998 14.0174C25.1973 10.9849 25.1973 10.5999 25.1277 9.41152ZM13.9911 19.7149C10.8142 19.7149 8.24059 17.1456 8.24059 13.974C8.24059 10.8024 10.8142 8.23302 13.9911 8.23302C17.1655 8.23302 19.7416 10.8024 19.7416 13.974C19.7416 17.1456 17.1655 19.7149 13.9911 19.7149ZM19.9705 9.35936C19.2279 9.35936 18.6296 8.7608 18.6296 8.02067C18.6296 7.28055 19.2279 6.68199 19.9705 6.68199C20.7106 6.68199 21.3102 7.28055 21.3102 8.02067C21.3102 8.7608 20.7106 9.35936 19.9705 9.35936Z"}),o.jsx("path",{d:"M13.9928 17.4789C15.9277 17.4789 17.4963 15.9104 17.4963 13.9754C17.4963 12.0405 15.9277 10.4719 13.9928 10.4719C12.0578 10.4719 10.4893 12.0405 10.4893 13.9754C10.4893 15.9104 12.0578 17.4789 13.9928 17.4789Z"})]})})}),o.jsx(Le,{children:o.jsx(Ne,{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:o.jsx(De,{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.2103 5.24986C20.0203 5.17986 17.5704 5.10986 13.8604 5.10986H13.3703C9.80034 5.10986 7.42038 5.17986 6.23038 5.31986C4.62038 5.45986 3.50034 5.87986 2.87034 6.43986C2.31034 6.92986 1.89036 7.83986 1.75036 9.02986C1.68036 9.79986 1.61035 11.4099 1.61035 13.8599V14.2099C1.61035 16.5199 1.68034 18.1299 1.82034 18.8999C2.03034 20.0199 2.38038 20.8599 3.08038 21.3499C3.78038 21.9099 4.97036 22.2599 6.65036 22.3999C7.84036 22.4699 10.2904 22.5399 14.0004 22.5399H14.4904C18.0604 22.5399 20.4404 22.4699 21.6304 22.3299C23.2404 22.1899 24.3604 21.7699 24.9904 21.2099C25.5504 20.7199 25.9703 19.8099 26.1103 18.6199C26.1803 17.8499 26.2504 16.2399 26.2504 13.7899V13.4399C26.2504 11.1299 26.1804 9.51986 26.0404 8.74986C25.8304 7.62986 25.4804 6.78986 24.7804 6.29986C24.0804 5.73986 22.8903 5.38986 21.2103 5.24986ZM18.4804 13.8599L10.7804 18.4799V9.23986L18.4804 13.8599Z"})})})})]}),fc=()=>o.jsx(Nr,{children:o.jsxs(Wr,{children:[o.jsx(Gr,{title:"Add drink"}),o.jsxs(Kr,{children:[o.jsx(tc,{}),o.jsxs(qr,{children:[o.jsxs("div",{children:[o.jsx(xt,{mb:"20px",children:"Follow Us"}),o.jsx(ac,{})]}),o.jsxs("div",{children:[o.jsx(xt,{mb:"28px",children:"Popular Drinks"}),o.jsx(nc,{})]})]})]})]})});export{fc as default};
