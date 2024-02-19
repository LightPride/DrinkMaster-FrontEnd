import{u as j,q as Nr,r as d,j as a,C as Vr}from"./index-efa67b5c.js";import{c as vt,a as D,b as Ur}from"./index.esm-e5a682c0.js";import{S as yt}from"./react-select.esm-0d810f9a.js";import{P as Br}from"./PageTitle-e6352126.js";import"./assertThisInitialized-5c4d29ee.js";const zr=j.div`
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
`,Hr=j.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Wr=j.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }
`,bt=j.p`
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
`;var Gr=function(t){return qr(t)&&!Kr(t)};function qr(e){return!!e&&typeof e=="object"}function Kr(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Qr(e)}var Zr=typeof Symbol=="function"&&Symbol.for,Yr=Zr?Symbol.for("react.element"):60103;function Qr(e){return e.$$typeof===Yr}function Xr(e){return Array.isArray(e)?[]:{}}function ve(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ce(Xr(e),e,t):e}function Jr(e,t,r){return e.concat(t).map(function(n){return ve(n,r)})}function en(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(o){n[o]=ve(e[o],r)}),Object.keys(t).forEach(function(o){!r.isMergeableObject(t[o])||!e[o]?n[o]=ve(t[o],r):n[o]=ce(e[o],t[o],r)}),n}function ce(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Jr,r.isMergeableObject=r.isMergeableObject||Gr;var n=Array.isArray(t),o=Array.isArray(e),s=n===o;return s?n?r.arrayMerge(e,t,r):en(e,t,r):ve(t,r)}ce.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,o){return ce(n,o,r)},{})};var Ue=ce,tn=typeof global=="object"&&global&&global.Object===Object&&global;const Yt=tn;var rn=typeof self=="object"&&self&&self.Object===Object&&self,nn=Yt||rn||Function("return this")();const N=nn;var an=N.Symbol;const B=an;var Qt=Object.prototype,on=Qt.hasOwnProperty,sn=Qt.toString,ae=B?B.toStringTag:void 0;function ln(e){var t=on.call(e,ae),r=e[ae];try{e[ae]=void 0;var n=!0}catch{}var o=sn.call(e);return n&&(t?e[ae]=r:delete e[ae]),o}var cn=Object.prototype,un=cn.toString;function dn(e){return un.call(e)}var fn="[object Null]",pn="[object Undefined]",wt=B?B.toStringTag:void 0;function Z(e){return e==null?e===void 0?pn:fn:wt&&wt in Object(e)?ln(e):dn(e)}function Xt(e,t){return function(r){return e(t(r))}}var hn=Xt(Object.getPrototypeOf,Object);const Ke=hn;function Y(e){return e!=null&&typeof e=="object"}var gn="[object Object]",mn=Function.prototype,xn=Object.prototype,Jt=mn.toString,vn=xn.hasOwnProperty,yn=Jt.call(Object);function jt(e){if(!Y(e)||Z(e)!=gn)return!1;var t=Ke(e);if(t===null)return!0;var r=vn.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Jt.call(r)==yn}var Tt=Array.isArray,St=Object.keys,bn=Object.prototype.hasOwnProperty,wn=typeof Element<"u";function Be(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=Tt(e),n=Tt(t),o,s,l;if(r&&n){if(s=e.length,s!=t.length)return!1;for(o=s;o--!==0;)if(!Be(e[o],t[o]))return!1;return!0}if(r!=n)return!1;var h=e instanceof Date,m=t instanceof Date;if(h!=m)return!1;if(h&&m)return e.getTime()==t.getTime();var v=e instanceof RegExp,F=t instanceof RegExp;if(v!=F)return!1;if(v&&F)return e.toString()==t.toString();var $=St(e);if(s=$.length,s!==St(t).length)return!1;for(o=s;o--!==0;)if(!bn.call(t,$[o]))return!1;if(wn&&e instanceof Element&&t instanceof Element)return e===t;for(o=s;o--!==0;)if(l=$[o],!(l==="_owner"&&e.$$typeof)&&!Be(e[l],t[l]))return!1;return!0}return e!==e&&t!==t}var jn=function(t,r){try{return Be(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const W=Nr(jn);var Tn=!0;function Sn(e,t){if(!Tn){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function En(){this.__data__=[],this.size=0}function er(e,t){return e===t||e!==e&&t!==t}function ye(e,t){for(var r=e.length;r--;)if(er(e[r][0],t))return r;return-1}var Cn=Array.prototype,_n=Cn.splice;function An(e){var t=this.__data__,r=ye(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():_n.call(t,r,1),--this.size,!0}function Fn(e){var t=this.__data__,r=ye(t,e);return r<0?void 0:t[r][1]}function $n(e){return ye(this.__data__,e)>-1}function In(e,t){var r=this.__data__,n=ye(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function U(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}U.prototype.clear=En;U.prototype.delete=An;U.prototype.get=Fn;U.prototype.has=$n;U.prototype.set=In;function On(){this.__data__=new U,this.size=0}function Mn(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function kn(e){return this.__data__.get(e)}function Ln(e){return this.__data__.has(e)}function fe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Rn="[object AsyncFunction]",Pn="[object Function]",Dn="[object GeneratorFunction]",Nn="[object Proxy]";function tr(e){if(!fe(e))return!1;var t=Z(e);return t==Pn||t==Dn||t==Rn||t==Nn}var Vn=N["__core-js_shared__"];const Me=Vn;var Et=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Un(e){return!!Et&&Et in e}var Bn=Function.prototype,zn=Bn.toString;function Q(e){if(e!=null){try{return zn.call(e)}catch{}try{return e+""}catch{}}return""}var Hn=/[\\^$.*+?()[\]{}|]/g,Wn=/^\[object .+?Constructor\]$/,Gn=Function.prototype,qn=Object.prototype,Kn=Gn.toString,Zn=qn.hasOwnProperty,Yn=RegExp("^"+Kn.call(Zn).replace(Hn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Qn(e){if(!fe(e)||Un(e))return!1;var t=tr(e)?Yn:Wn;return t.test(Q(e))}function Xn(e,t){return e==null?void 0:e[t]}function X(e,t){var r=Xn(e,t);return Qn(r)?r:void 0}var Jn=X(N,"Map");const ue=Jn;var ei=X(Object,"create");const de=ei;function ti(){this.__data__=de?de(null):{},this.size=0}function ri(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ni="__lodash_hash_undefined__",ii=Object.prototype,ai=ii.hasOwnProperty;function oi(e){var t=this.__data__;if(de){var r=t[e];return r===ni?void 0:r}return ai.call(t,e)?t[e]:void 0}var si=Object.prototype,li=si.hasOwnProperty;function ci(e){var t=this.__data__;return de?t[e]!==void 0:li.call(t,e)}var ui="__lodash_hash_undefined__";function di(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=de&&t===void 0?ui:t,this}function K(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}K.prototype.clear=ti;K.prototype.delete=ri;K.prototype.get=oi;K.prototype.has=ci;K.prototype.set=di;function fi(){this.size=0,this.__data__={hash:new K,map:new(ue||U),string:new K}}function pi(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function be(e,t){var r=e.__data__;return pi(t)?r[typeof t=="string"?"string":"hash"]:r.map}function hi(e){var t=be(this,e).delete(e);return this.size-=t?1:0,t}function gi(e){return be(this,e).get(e)}function mi(e){return be(this,e).has(e)}function xi(e,t){var r=be(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function z(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}z.prototype.clear=fi;z.prototype.delete=hi;z.prototype.get=gi;z.prototype.has=mi;z.prototype.set=xi;var vi=200;function yi(e,t){var r=this.__data__;if(r instanceof U){var n=r.__data__;if(!ue||n.length<vi-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new z(n)}return r.set(e,t),this.size=r.size,this}function ne(e){var t=this.__data__=new U(e);this.size=t.size}ne.prototype.clear=On;ne.prototype.delete=Mn;ne.prototype.get=kn;ne.prototype.has=Ln;ne.prototype.set=yi;function bi(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var wi=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Ct=wi;function rr(e,t,r){t=="__proto__"&&Ct?Ct(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var ji=Object.prototype,Ti=ji.hasOwnProperty;function nr(e,t,r){var n=e[t];(!(Ti.call(e,t)&&er(n,r))||r===void 0&&!(t in e))&&rr(e,t,r)}function we(e,t,r,n){var o=!r;r||(r={});for(var s=-1,l=t.length;++s<l;){var h=t[s],m=n?n(r[h],e[h],h,r,e):void 0;m===void 0&&(m=e[h]),o?rr(r,h,m):nr(r,h,m)}return r}function Si(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Ei="[object Arguments]";function _t(e){return Y(e)&&Z(e)==Ei}var ir=Object.prototype,Ci=ir.hasOwnProperty,_i=ir.propertyIsEnumerable,Ai=_t(function(){return arguments}())?_t:function(e){return Y(e)&&Ci.call(e,"callee")&&!_i.call(e,"callee")};const Fi=Ai;var $i=Array.isArray;const pe=$i;function Ii(){return!1}var ar=typeof exports=="object"&&exports&&!exports.nodeType&&exports,At=ar&&typeof module=="object"&&module&&!module.nodeType&&module,Oi=At&&At.exports===ar,Ft=Oi?N.Buffer:void 0,Mi=Ft?Ft.isBuffer:void 0,ki=Mi||Ii;const or=ki;var Li=9007199254740991,Ri=/^(?:0|[1-9]\d*)$/;function Pi(e,t){var r=typeof e;return t=t??Li,!!t&&(r=="number"||r!="symbol"&&Ri.test(e))&&e>-1&&e%1==0&&e<t}var Di=9007199254740991;function sr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Di}var Ni="[object Arguments]",Vi="[object Array]",Ui="[object Boolean]",Bi="[object Date]",zi="[object Error]",Hi="[object Function]",Wi="[object Map]",Gi="[object Number]",qi="[object Object]",Ki="[object RegExp]",Zi="[object Set]",Yi="[object String]",Qi="[object WeakMap]",Xi="[object ArrayBuffer]",Ji="[object DataView]",ea="[object Float32Array]",ta="[object Float64Array]",ra="[object Int8Array]",na="[object Int16Array]",ia="[object Int32Array]",aa="[object Uint8Array]",oa="[object Uint8ClampedArray]",sa="[object Uint16Array]",la="[object Uint32Array]",T={};T[ea]=T[ta]=T[ra]=T[na]=T[ia]=T[aa]=T[oa]=T[sa]=T[la]=!0;T[Ni]=T[Vi]=T[Xi]=T[Ui]=T[Ji]=T[Bi]=T[zi]=T[Hi]=T[Wi]=T[Gi]=T[qi]=T[Ki]=T[Zi]=T[Yi]=T[Qi]=!1;function ca(e){return Y(e)&&sr(e.length)&&!!T[Z(e)]}function Ze(e){return function(t){return e(t)}}var lr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,le=lr&&typeof module=="object"&&module&&!module.nodeType&&module,ua=le&&le.exports===lr,ke=ua&&Yt.process,da=function(){try{var e=le&&le.require&&le.require("util").types;return e||ke&&ke.binding&&ke.binding("util")}catch{}}();const re=da;var $t=re&&re.isTypedArray,fa=$t?Ze($t):ca;const pa=fa;var ha=Object.prototype,ga=ha.hasOwnProperty;function cr(e,t){var r=pe(e),n=!r&&Fi(e),o=!r&&!n&&or(e),s=!r&&!n&&!o&&pa(e),l=r||n||o||s,h=l?Si(e.length,String):[],m=h.length;for(var v in e)(t||ga.call(e,v))&&!(l&&(v=="length"||o&&(v=="offset"||v=="parent")||s&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Pi(v,m)))&&h.push(v);return h}var ma=Object.prototype;function Ye(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||ma;return e===r}var xa=Xt(Object.keys,Object);const va=xa;var ya=Object.prototype,ba=ya.hasOwnProperty;function wa(e){if(!Ye(e))return va(e);var t=[];for(var r in Object(e))ba.call(e,r)&&r!="constructor"&&t.push(r);return t}function ur(e){return e!=null&&sr(e.length)&&!tr(e)}function Qe(e){return ur(e)?cr(e):wa(e)}function ja(e,t){return e&&we(t,Qe(t),e)}function Ta(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Sa=Object.prototype,Ea=Sa.hasOwnProperty;function Ca(e){if(!fe(e))return Ta(e);var t=Ye(e),r=[];for(var n in e)n=="constructor"&&(t||!Ea.call(e,n))||r.push(n);return r}function Xe(e){return ur(e)?cr(e,!0):Ca(e)}function _a(e,t){return e&&we(t,Xe(t),e)}var dr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,It=dr&&typeof module=="object"&&module&&!module.nodeType&&module,Aa=It&&It.exports===dr,Ot=Aa?N.Buffer:void 0,Mt=Ot?Ot.allocUnsafe:void 0;function Fa(e,t){if(t)return e.slice();var r=e.length,n=Mt?Mt(r):new e.constructor(r);return e.copy(n),n}function fr(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function $a(e,t){for(var r=-1,n=e==null?0:e.length,o=0,s=[];++r<n;){var l=e[r];t(l,r,e)&&(s[o++]=l)}return s}function pr(){return[]}var Ia=Object.prototype,Oa=Ia.propertyIsEnumerable,kt=Object.getOwnPropertySymbols,Ma=kt?function(e){return e==null?[]:(e=Object(e),$a(kt(e),function(t){return Oa.call(e,t)}))}:pr;const Je=Ma;function ka(e,t){return we(e,Je(e),t)}function hr(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var La=Object.getOwnPropertySymbols,Ra=La?function(e){for(var t=[];e;)hr(t,Je(e)),e=Ke(e);return t}:pr;const gr=Ra;function Pa(e,t){return we(e,gr(e),t)}function mr(e,t,r){var n=t(e);return pe(e)?n:hr(n,r(e))}function Da(e){return mr(e,Qe,Je)}function Na(e){return mr(e,Xe,gr)}var Va=X(N,"DataView");const ze=Va;var Ua=X(N,"Promise");const He=Ua;var Ba=X(N,"Set");const We=Ba;var za=X(N,"WeakMap");const Ge=za;var Lt="[object Map]",Ha="[object Object]",Rt="[object Promise]",Pt="[object Set]",Dt="[object WeakMap]",Nt="[object DataView]",Wa=Q(ze),Ga=Q(ue),qa=Q(He),Ka=Q(We),Za=Q(Ge),G=Z;(ze&&G(new ze(new ArrayBuffer(1)))!=Nt||ue&&G(new ue)!=Lt||He&&G(He.resolve())!=Rt||We&&G(new We)!=Pt||Ge&&G(new Ge)!=Dt)&&(G=function(e){var t=Z(e),r=t==Ha?e.constructor:void 0,n=r?Q(r):"";if(n)switch(n){case Wa:return Nt;case Ga:return Lt;case qa:return Rt;case Ka:return Pt;case Za:return Dt}return t});const et=G;var Ya=Object.prototype,Qa=Ya.hasOwnProperty;function Xa(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Qa.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Ja=N.Uint8Array;const Vt=Ja;function tt(e){var t=new e.constructor(e.byteLength);return new Vt(t).set(new Vt(e)),t}function eo(e,t){var r=t?tt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var to=/\w*$/;function ro(e){var t=new e.constructor(e.source,to.exec(e));return t.lastIndex=e.lastIndex,t}var Ut=B?B.prototype:void 0,Bt=Ut?Ut.valueOf:void 0;function no(e){return Bt?Object(Bt.call(e)):{}}function io(e,t){var r=t?tt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var ao="[object Boolean]",oo="[object Date]",so="[object Map]",lo="[object Number]",co="[object RegExp]",uo="[object Set]",fo="[object String]",po="[object Symbol]",ho="[object ArrayBuffer]",go="[object DataView]",mo="[object Float32Array]",xo="[object Float64Array]",vo="[object Int8Array]",yo="[object Int16Array]",bo="[object Int32Array]",wo="[object Uint8Array]",jo="[object Uint8ClampedArray]",To="[object Uint16Array]",So="[object Uint32Array]";function Eo(e,t,r){var n=e.constructor;switch(t){case ho:return tt(e);case ao:case oo:return new n(+e);case go:return eo(e,r);case mo:case xo:case vo:case yo:case bo:case wo:case jo:case To:case So:return io(e,r);case so:return new n;case lo:case fo:return new n(e);case co:return ro(e);case uo:return new n;case po:return no(e)}}var zt=Object.create,Co=function(){function e(){}return function(t){if(!fe(t))return{};if(zt)return zt(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const _o=Co;function Ao(e){return typeof e.constructor=="function"&&!Ye(e)?_o(Ke(e)):{}}var Fo="[object Map]";function $o(e){return Y(e)&&et(e)==Fo}var Ht=re&&re.isMap,Io=Ht?Ze(Ht):$o;const Oo=Io;var Mo="[object Set]";function ko(e){return Y(e)&&et(e)==Mo}var Wt=re&&re.isSet,Lo=Wt?Ze(Wt):ko;const Ro=Lo;var Po=1,Do=2,No=4,xr="[object Arguments]",Vo="[object Array]",Uo="[object Boolean]",Bo="[object Date]",zo="[object Error]",vr="[object Function]",Ho="[object GeneratorFunction]",Wo="[object Map]",Go="[object Number]",yr="[object Object]",qo="[object RegExp]",Ko="[object Set]",Zo="[object String]",Yo="[object Symbol]",Qo="[object WeakMap]",Xo="[object ArrayBuffer]",Jo="[object DataView]",es="[object Float32Array]",ts="[object Float64Array]",rs="[object Int8Array]",ns="[object Int16Array]",is="[object Int32Array]",as="[object Uint8Array]",os="[object Uint8ClampedArray]",ss="[object Uint16Array]",ls="[object Uint32Array]",w={};w[xr]=w[Vo]=w[Xo]=w[Jo]=w[Uo]=w[Bo]=w[es]=w[ts]=w[rs]=w[ns]=w[is]=w[Wo]=w[Go]=w[yr]=w[qo]=w[Ko]=w[Zo]=w[Yo]=w[as]=w[os]=w[ss]=w[ls]=!0;w[zo]=w[vr]=w[Qo]=!1;function xe(e,t,r,n,o,s){var l,h=t&Po,m=t&Do,v=t&No;if(r&&(l=o?r(e,n,o,s):r(e)),l!==void 0)return l;if(!fe(e))return e;var F=pe(e);if(F){if(l=Xa(e),!h)return fr(e,l)}else{var $=et(e),f=$==vr||$==Ho;if(or(e))return Fa(e,h);if($==yr||$==xr||f&&!o){if(l=m||f?{}:Ao(e),!h)return m?Pa(e,_a(l,e)):ka(e,ja(l,e))}else{if(!w[$])return o?e:{};l=Eo(e,$,h)}}s||(s=new ne);var C=s.get(e);if(C)return C;s.set(e,l),Ro(e)?e.forEach(function(A){l.add(xe(A,t,r,A,e,s))}):Oo(e)&&e.forEach(function(A,E){l.set(E,xe(A,t,r,E,e,s))});var k=v?m?Na:Da:m?Xe:Qe,I=F?void 0:k(e);return bi(I||e,function(A,E){I&&(E=A,A=e[E]),nr(l,E,xe(A,t,r,E,e,s))}),l}var cs=4;function Gt(e){return xe(e,cs)}function br(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var us="[object Symbol]";function rt(e){return typeof e=="symbol"||Y(e)&&Z(e)==us}var ds="Expected a function";function nt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(ds);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],s=r.cache;if(s.has(o))return s.get(o);var l=e.apply(this,n);return r.cache=s.set(o,l)||s,l};return r.cache=new(nt.Cache||z),r}nt.Cache=z;var fs=500;function ps(e){var t=nt(e,function(n){return r.size===fs&&r.clear(),n}),r=t.cache;return t}var hs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,gs=/\\(\\)?/g,ms=ps(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(hs,function(r,n,o,s){t.push(o?s.replace(gs,"$1"):n||r)}),t});const xs=ms;var vs=1/0;function ys(e){if(typeof e=="string"||rt(e))return e;var t=e+"";return t=="0"&&1/e==-vs?"-0":t}var bs=1/0,qt=B?B.prototype:void 0,Kt=qt?qt.toString:void 0;function wr(e){if(typeof e=="string")return e;if(pe(e))return br(e,wr)+"";if(rt(e))return Kt?Kt.call(e):"";var t=e+"";return t=="0"&&1/e==-bs?"-0":t}function ws(e){return e==null?"":wr(e)}function jr(e){return pe(e)?br(e,ys):rt(e)?[e]:fr(xs(ws(e)))}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function te(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var je=d.createContext(void 0);je.displayName="FormikContext";var js=je.Provider;je.Consumer;function Tr(){var e=d.useContext(je);return e||Sn(!1),e}var M=function(t){return typeof t=="function"},Te=function(t){return t!==null&&typeof t=="object"},Ts=function(t){return String(Math.floor(Number(t)))===t},Le=function(t){return Object.prototype.toString.call(t)==="[object String]"},Ss=function(t){return d.Children.count(t)===0},Re=function(t){return Te(t)&&M(t.then)};function O(e,t,r,n){n===void 0&&(n=0);for(var o=jr(t);e&&n<o.length;)e=e[o[n++]];return n!==o.length&&!e||e===void 0?r:e}function q(e,t,r){for(var n=Gt(e),o=n,s=0,l=jr(t);s<l.length-1;s++){var h=l[s],m=O(e,l.slice(0,s+1));if(m&&(Te(m)||Array.isArray(m)))o=o[h]=Gt(m);else{var v=l[s+1];o=o[h]=Ts(v)&&Number(v)>=0?[]:{}}}return(s===0?e:o)[l[s]]===r?e:(r===void 0?delete o[l[s]]:o[l[s]]=r,s===0&&r===void 0&&delete n[l[s]],n)}function Sr(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var o=0,s=Object.keys(e);o<s.length;o++){var l=s[o],h=e[l];Te(h)?r.get(h)||(r.set(h,!0),n[l]=Array.isArray(h)?[]:{},Sr(h,t,r,n[l])):n[l]=t}return n}function Es(e,t){switch(t.type){case"SET_VALUES":return S({},e,{values:t.payload});case"SET_TOUCHED":return S({},e,{touched:t.payload});case"SET_ERRORS":return W(e.errors,t.payload)?e:S({},e,{errors:t.payload});case"SET_STATUS":return S({},e,{status:t.payload});case"SET_ISSUBMITTING":return S({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return S({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return S({},e,{values:q(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return S({},e,{touched:q(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return S({},e,{errors:q(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return S({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return S({},e,{touched:Sr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return S({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return S({},e,{isSubmitting:!1});default:return e}}var H={},me={};function Cs(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,o=n===void 0?!0:n,s=e.validateOnMount,l=s===void 0?!1:s,h=e.isInitialValid,m=e.enableReinitialize,v=m===void 0?!1:m,F=e.onSubmit,$=te(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=S({validateOnChange:r,validateOnBlur:o,validateOnMount:l,onSubmit:F},$),C=d.useRef(f.initialValues),k=d.useRef(f.initialErrors||H),I=d.useRef(f.initialTouched||me),A=d.useRef(f.initialStatus),E=d.useRef(!1),L=d.useRef({});d.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var Se=d.useState(0),Ee=Se[1],he=d.useRef({values:f.initialValues,errors:f.initialErrors||H,touched:f.initialTouched||me,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),b=he.current,y=d.useCallback(function(i){var c=he.current;he.current=Es(c,i),c!==he.current&&Ee(function(u){return u+1})},[]),it=d.useCallback(function(i,c){return new Promise(function(u,p){var g=f.validate(i,c);g==null?u(H):Re(g)?g.then(function(x){u(x||H)},function(x){p(x)}):u(g)})},[f.validate]),Ce=d.useCallback(function(i,c){var u=f.validationSchema,p=M(u)?u(c):u,g=c&&p.validateAt?p.validateAt(c,i):Fs(i,p);return new Promise(function(x,_){g.then(function(){x(H)},function(V){V.name==="ValidationError"?x(As(V)):_(V)})})},[f.validationSchema]),at=d.useCallback(function(i,c){return new Promise(function(u){return u(L.current[i].validate(c))})},[]),ot=d.useCallback(function(i){var c=Object.keys(L.current).filter(function(p){return M(L.current[p].validate)}),u=c.length>0?c.map(function(p){return at(p,O(i,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(u).then(function(p){return p.reduce(function(g,x,_){return x==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||x&&(g=q(g,c[_],x)),g},{})})},[at]),Cr=d.useCallback(function(i){return Promise.all([ot(i),f.validationSchema?Ce(i):{},f.validate?it(i):{}]).then(function(c){var u=c[0],p=c[1],g=c[2],x=Ue.all([u,p,g],{arrayMerge:$s});return x})},[f.validate,f.validationSchema,ot,it,Ce]),P=R(function(i){return i===void 0&&(i=b.values),y({type:"SET_ISVALIDATING",payload:!0}),Cr(i).then(function(c){return E.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:c})),c})});d.useEffect(function(){l&&E.current===!0&&W(C.current,f.initialValues)&&P(C.current)},[l,P]);var ie=d.useCallback(function(i){var c=i&&i.values?i.values:C.current,u=i&&i.errors?i.errors:k.current?k.current:f.initialErrors||{},p=i&&i.touched?i.touched:I.current?I.current:f.initialTouched||{},g=i&&i.status?i.status:A.current?A.current:f.initialStatus;C.current=c,k.current=u,I.current=p,A.current=g;var x=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!i&&!!i.isSubmitting,errors:u,touched:p,status:g,values:c,isValidating:!!i&&!!i.isValidating,submitCount:i&&i.submitCount&&typeof i.submitCount=="number"?i.submitCount:0}})};if(f.onReset){var _=f.onReset(b.values,mt);Re(_)?_.then(x):x()}else x()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){E.current===!0&&!W(C.current,f.initialValues)&&v&&(C.current=f.initialValues,ie(),l&&P(C.current))},[v,f.initialValues,ie,l,P]),d.useEffect(function(){v&&E.current===!0&&!W(k.current,f.initialErrors)&&(k.current=f.initialErrors||H,y({type:"SET_ERRORS",payload:f.initialErrors||H}))},[v,f.initialErrors]),d.useEffect(function(){v&&E.current===!0&&!W(I.current,f.initialTouched)&&(I.current=f.initialTouched||me,y({type:"SET_TOUCHED",payload:f.initialTouched||me}))},[v,f.initialTouched]),d.useEffect(function(){v&&E.current===!0&&!W(A.current,f.initialStatus)&&(A.current=f.initialStatus,y({type:"SET_STATUS",payload:f.initialStatus}))},[v,f.initialStatus,f.initialTouched]);var st=R(function(i){if(L.current[i]&&M(L.current[i].validate)){var c=O(b.values,i),u=L.current[i].validate(c);return Re(u)?(y({type:"SET_ISVALIDATING",payload:!0}),u.then(function(p){return p}).then(function(p){y({type:"SET_FIELD_ERROR",payload:{field:i,value:p}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:i,value:u}}),Promise.resolve(u))}else if(f.validationSchema)return y({type:"SET_ISVALIDATING",payload:!0}),Ce(b.values,i).then(function(p){return p}).then(function(p){y({type:"SET_FIELD_ERROR",payload:{field:i,value:O(p,i)}}),y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),_r=d.useCallback(function(i,c){var u=c.validate;L.current[i]={validate:u}},[]),Ar=d.useCallback(function(i){delete L.current[i]},[]),lt=R(function(i,c){y({type:"SET_TOUCHED",payload:i});var u=c===void 0?o:c;return u?P(b.values):Promise.resolve()}),ct=d.useCallback(function(i){y({type:"SET_ERRORS",payload:i})},[]),ut=R(function(i,c){var u=M(i)?i(b.values):i;y({type:"SET_VALUES",payload:u});var p=c===void 0?r:c;return p?P(u):Promise.resolve()}),ge=d.useCallback(function(i,c){y({type:"SET_FIELD_ERROR",payload:{field:i,value:c}})},[]),J=R(function(i,c,u){y({type:"SET_FIELD_VALUE",payload:{field:i,value:c}});var p=u===void 0?r:u;return p?P(q(b.values,i,c)):Promise.resolve()}),dt=d.useCallback(function(i,c){var u=c,p=i,g;if(!Le(i)){i.persist&&i.persist();var x=i.target?i.target:i.currentTarget,_=x.type,V=x.name,Ie=x.id,Oe=x.value,Pr=x.checked,al=x.outerHTML,xt=x.options,Dr=x.multiple;u=c||V||Ie,p=/number|range/.test(_)?(g=parseFloat(Oe),isNaN(g)?"":g):/checkbox/.test(_)?Os(O(b.values,u),Pr,Oe):xt&&Dr?Is(xt):Oe}u&&J(u,p)},[J,b.values]),_e=R(function(i){if(Le(i))return function(c){return dt(c,i)};dt(i)}),ee=R(function(i,c,u){c===void 0&&(c=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:i,value:c}});var p=u===void 0?o:u;return p?P(b.values):Promise.resolve()}),ft=d.useCallback(function(i,c){i.persist&&i.persist();var u=i.target,p=u.name,g=u.id,x=u.outerHTML,_=c||p||g;ee(_,!0)},[ee]),Ae=R(function(i){if(Le(i))return function(c){return ft(c,i)};ft(i)}),pt=d.useCallback(function(i){M(i)?y({type:"SET_FORMIK_STATE",payload:i}):y({type:"SET_FORMIK_STATE",payload:function(){return i}})},[]),ht=d.useCallback(function(i){y({type:"SET_STATUS",payload:i})},[]),gt=d.useCallback(function(i){y({type:"SET_ISSUBMITTING",payload:i})},[]),Fe=R(function(){return y({type:"SUBMIT_ATTEMPT"}),P().then(function(i){var c=i instanceof Error,u=!c&&Object.keys(i).length===0;if(u){var p;try{if(p=$r(),p===void 0)return}catch(g){throw g}return Promise.resolve(p).then(function(g){return E.current&&y({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(E.current)throw y({type:"SUBMIT_FAILURE"}),g})}else if(E.current&&(y({type:"SUBMIT_FAILURE"}),c))throw i})}),Fr=R(function(i){i&&i.preventDefault&&M(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&M(i.stopPropagation)&&i.stopPropagation(),Fe().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),mt={resetForm:ie,validateForm:P,validateField:st,setErrors:ct,setFieldError:ge,setFieldTouched:ee,setFieldValue:J,setStatus:ht,setSubmitting:gt,setTouched:lt,setValues:ut,setFormikState:pt,submitForm:Fe},$r=R(function(){return F(b.values,mt)}),Ir=R(function(i){i&&i.preventDefault&&M(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&M(i.stopPropagation)&&i.stopPropagation(),ie()}),Or=d.useCallback(function(i){return{value:O(b.values,i),error:O(b.errors,i),touched:!!O(b.touched,i),initialValue:O(C.current,i),initialTouched:!!O(I.current,i),initialError:O(k.current,i)}},[b.errors,b.touched,b.values]),Mr=d.useCallback(function(i){return{setValue:function(u,p){return J(i,u,p)},setTouched:function(u,p){return ee(i,u,p)},setError:function(u){return ge(i,u)}}},[J,ee,ge]),kr=d.useCallback(function(i){var c=Te(i),u=c?i.name:i,p=O(b.values,u),g={name:u,value:p,onChange:_e,onBlur:Ae};if(c){var x=i.type,_=i.value,V=i.as,Ie=i.multiple;x==="checkbox"?_===void 0?g.checked=!!p:(g.checked=!!(Array.isArray(p)&&~p.indexOf(_)),g.value=_):x==="radio"?(g.checked=p===_,g.value=_):V==="select"&&Ie&&(g.value=g.value||[],g.multiple=!0)}return g},[Ae,_e,b.values]),$e=d.useMemo(function(){return!W(C.current,b.values)},[C.current,b.values]),Lr=d.useMemo(function(){return typeof h<"u"?$e?b.errors&&Object.keys(b.errors).length===0:h!==!1&&M(h)?h(f):h:b.errors&&Object.keys(b.errors).length===0},[h,$e,b.errors,f]),Rr=S({},b,{initialValues:C.current,initialErrors:k.current,initialTouched:I.current,initialStatus:A.current,handleBlur:Ae,handleChange:_e,handleReset:Ir,handleSubmit:Fr,resetForm:ie,setErrors:ct,setFormikState:pt,setFieldTouched:ee,setFieldValue:J,setFieldError:ge,setStatus:ht,setSubmitting:gt,setTouched:lt,setValues:ut,submitForm:Fe,validateForm:P,validateField:st,isValid:Lr,dirty:$e,unregisterField:Ar,registerField:_r,getFieldProps:kr,getFieldMeta:Or,getFieldHelpers:Mr,validateOnBlur:o,validateOnChange:r,validateOnMount:l});return Rr}function _s(e){var t=Cs(e),r=e.component,n=e.children,o=e.render,s=e.innerRef;return d.useImperativeHandle(s,function(){return t}),d.createElement(js,{value:t},r?d.createElement(r,t):o?o(t):n?M(n)?n(t):Ss(n)?null:d.Children.only(n):null)}function As(e){var t={};if(e.inner){if(e.inner.length===0)return q(t,e.path,e.message);for(var o=e.inner,r=Array.isArray(o),n=0,o=r?o:o[Symbol.iterator]();;){var s;if(r){if(n>=o.length)break;s=o[n++]}else{if(n=o.next(),n.done)break;s=n.value}var l=s;O(t,l.path)||(t=q(t,l.path,l.message))}}return t}function Fs(e,t,r,n){r===void 0&&(r=!1);var o=qe(e);return t[r?"validateSync":"validate"](o,{abortEarly:!1,context:n||o})}function qe(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(o){return Array.isArray(o)===!0||jt(o)?qe(o):o!==""?o:void 0}):jt(e[n])?t[n]=qe(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function $s(e,t,r){var n=e.slice();return t.forEach(function(s,l){if(typeof n[l]>"u"){var h=r.clone!==!1,m=h&&r.isMergeableObject(s);n[l]=m?Ue(Array.isArray(s)?[]:{},s,r):s}else r.isMergeableObject(s)?n[l]=Ue(e[l],s,r):e.indexOf(s)===-1&&n.push(s)}),n}function Is(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Os(e,t,r){if(typeof e=="boolean")return!!t;var n=[],o=!1,s=-1;if(Array.isArray(e))n=e,s=e.indexOf(r),o=s>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!o?n.concat(r):o?n.slice(0,s).concat(n.slice(s+1)):n}var Ms=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function R(e){var t=d.useRef(e);return Ms(function(){t.current=e}),d.useCallback(function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.current.apply(void 0,n)},[])}function oe(e){var t=e.validate,r=e.name,n=e.render,o=e.children,s=e.as,l=e.component,h=e.className,m=te(e,["validate","name","render","children","as","component","className"]),v=Tr(),F=te(v,["validate","validationSchema"]),$=F.registerField,f=F.unregisterField;d.useEffect(function(){return $(r,{validate:t}),function(){f(r)}},[$,f,r,t]);var C=F.getFieldProps(S({name:r},m)),k=F.getFieldMeta(r),I={field:C,form:F};if(n)return n(S({},I,{meta:k}));if(M(o))return o(S({},I,{meta:k}));if(l){if(typeof l=="string"){var A=m.innerRef,E=te(m,["innerRef"]);return d.createElement(l,S({ref:A},C,E,{className:h}),o)}return d.createElement(l,S({field:C,form:F},m,{className:h}),o)}var L=s||"input";if(typeof L=="string"){var Se=m.innerRef,Ee=te(m,["innerRef"]);return d.createElement(L,S({ref:Se},C,Ee,{className:h}),o)}return d.createElement(L,S({},C,m,{className:h}),o)}var Er=d.forwardRef(function(e,t){var r=e.action,n=te(e,["action"]),o=r??"#",s=Tr(),l=s.handleReset,h=s.handleSubmit;return d.createElement("form",S({onSubmit:h,ref:t,onReset:l,action:o},n))});Er.displayName="Form";const ks=j.div`
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
`,Ls=j.div`
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
`,Rs=j.div`
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
`,Ps=j.div`
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
`,Ds=j.label`
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
`;j.input`
  display: none;
`;const Ns=j.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,Vs=j.div`
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
`,Zt={dropdownIndicator:(e,t)=>({...e,transform:t.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(e,{isFocused:t})=>({...e,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),placeholder:(e,{isFocused:t})=>({...e,fontSize:"14px",boxShadow:"none",cursor:"pointer",color:"#f3f3f3",display:"flex",alignItems:"center",fontWeight:"400",fontSize:"14px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"16px"}}),menu:e=>({...e,position:"absolute",width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px",right:"-10%","@media only screen and (min-width: 1440px)":{...e["@media only screen and (min-width: 1440px)"],width:"154px",right:"-0%"}},backgroundColor:"#161F37",borderRadius:"12px"}),indicatorSeparator:e=>({...e,display:"none"}),valueContainer:e=>({...e,padding:0}),singleValue:e=>({...e,color:"#f3f3f3"}),option:(e,{isFocused:t,isSelected:r})=>({...e,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...e["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:t?"#f3f3f375":r?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},Us=j.div`
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
  }
  .styledRadio {
    cursor: pointer;
  }
`,Bs=({categories:e,servings:t})=>a.jsxs(Ls,{children:[a.jsx(Rs,{children:a.jsxs(Ps,{children:[a.jsxs(Ds,{children:[a.jsxs("svg",{width:"29",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M14.5 5.8335V22.1668",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M6.33203 14H22.6654",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),a.jsx(oe,{style:{display:"none"},type:"file",name:"drinkThumb",accept:"image/*"})]}),a.jsx("p",{children:"Add Image"})]})}),a.jsxs(Ns,{children:[a.jsxs(Vs,{children:[a.jsx("div",{className:"styledDivInput",children:a.jsx(oe,{className:"styledInputText",placeholder:"Enter item title",name:"name"})}),a.jsx("div",{className:"styledDivInput",children:a.jsx(oe,{className:"styledInputText",placeholder:"Enter item title",name:"description"})}),a.jsx("div",{className:"styledDivInput",children:a.jsxs("label",{className:"labelSelect",children:[a.jsx("p",{className:"labelTitle",children:"Category"}),a.jsx(yt,{className:"selectStyled",name:"category",options:e,styles:Zt})]})}),a.jsx("div",{className:"styledDivInput",children:a.jsxs("label",{className:"labelSelect",children:[a.jsx("p",{className:"labelTitle",children:"Glass"}),a.jsx(yt,{className:"selectStyled",name:"serving",options:t,styles:Zt})]})})]}),a.jsxs(Us,{children:[a.jsxs("label",{className:"radioLabel",children:[a.jsx(oe,{className:"styledRadio",type:"radio",name:"alcoholic",value:"true"}),a.jsx("span",{className:"styledSpan",children:"Alcoholic"})]}),a.jsxs("label",{className:"radioLabel",children:[a.jsx(oe,{className:"styledRadio",type:"radio",name:"alcoholic",value:"false"}),a.jsx("span",{className:"styledSpan",children:"Non-alcoholic"})]})]})]})]}),zs=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,Hs=j.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  div {
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
    opacity: 0.8;
    @media screen and (min-width: 768px) {
      gap: 18px;
      width: 114px;
      height: 44px;
    }
  }
  p {
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
`,se=j.button`
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
`,Ws=j.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Pe=j.div`
  display: flex;
  align-items: center;
  text-align: center;

  select {
    background-color: transparent;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 200px;
    height: 50px;
    opacity: 0.8;
    margin-right: 8px;
  }

  input {
    background-color: transparent;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 101px;
    height: 50px;
    opacity: 0.8;
    margin-right: 8px;
    color: #f3f3f3;
  }
  @media screen and (min-width: 768px) {
    select {
      width: 332px;
      height: 56px;
      opacity: 0.8;
      margin-right: 14px;
    }

    input {
      width: 150px;
      height: 56px;
      margin-right: auto;
    }
  }
  @media screen and (min-width: 1440px) {
    select {
      width: 316px;
    }
  }
`,Gs=()=>a.jsxs(zs,{children:[a.jsxs(Hs,{children:[a.jsx("h4",{children:"Ingredients"}),a.jsxs("div",{children:[a.jsx(se,{children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeOpacity:"0.3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx("p",{children:"3"}),a.jsx(se,{children:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M8 2.5V13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]}),a.jsxs(Ws,{children:[a.jsxs(Pe,{children:[a.jsx("select",{name:"name",id:"1"}),a.jsx("input",{type:"text"}),a.jsx(se,{children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),a.jsxs(Pe,{children:[a.jsx("select",{name:"name",id:"2"}),a.jsx("input",{type:"text",placeholder:""}),a.jsx(se,{children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),a.jsxs(Pe,{children:[a.jsx("select",{name:"name",id:"3"}),a.jsx("input",{type:"text"}),a.jsx(se,{children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]})]}),qs=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,Ks=j.div`
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
`,Zs=j.textarea`
  background-color: transparent;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
  padding: 18px 16px;
  color: #f3f3f3;
  height: 184px;
  resize: none;
  @media screen and (min-width: 768px) {
    width: 480px;
  }
`,Ys=()=>a.jsxs(qs,{children:[a.jsx(Ks,{children:a.jsx("h4",{children:"Recipe Preparation"})}),a.jsx(Zs,{placeholder:"Enter the recipe",name:"ReciepePreparation"})]}),Qs=({categories:e,servings:t,ingredients:r})=>{const n=vt().shape({photo:D().required("Фото коктейлю обов'язкове"),name:D().required("Назва коктейлю обов'язкова"),description:D().required("Опис коктейлю обов'язковий"),category:D().required("Категорія коктейлю обов'язкова"),serving:D().required("Тип сервірування обов'язковий"),alcoholic:D().required("Вкажіть чи є коктейль алкогольним чи ні"),ingredients:Ur().of(vt().shape({name:D().required("Назва інгредієнту обов'язкова"),quantity:D().required("Кількість інгредієнту обов'язкова"),unit:D().required("Одиниця виміру інгредієнту обов'язкова")})),preparation:D().required("Інструкція приготування обов'язкова")}),o=(s,{setSubmitting:l})=>{console.log(s),l(!1)};return a.jsx(a.Fragment,{children:a.jsx(_s,{initialValues:{photo:"",name:"",description:"",category:"",serving:"",alcoholic:"",ingredients:[{name:"",quantity:"",unit:""}],preparation:""},validationSchema:n,onSubmit:o,children:({isSubmitting:s})=>a.jsx(Er,{children:a.jsxs(ks,{children:[a.jsx(Bs,{categories:e,servings:t}),a.jsx(Gs,{ingredients:r}),a.jsx(Ys,{}),a.jsx("button",{className:"buttonAdd",type:"submit",disabled:s,children:"Add"})]})})})})},Xs=j.ul`
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
`,Js=()=>a.jsxs(Xs,{children:[a.jsx("li",{children:a.jsxs("a",{href:"",children:[a.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),a.jsxs("div",{children:[a.jsx("h4",{children:"Lone Tree Cooler"}),a.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),a.jsx("li",{children:a.jsxs("a",{href:"",children:[a.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),a.jsxs("div",{children:[a.jsx("h4",{children:"Lone Tree Cooler"}),a.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),a.jsx("li",{children:a.jsxs("a",{href:"",children:[a.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),a.jsxs("div",{children:[a.jsx("h4",{children:"Lone Tree Cooler"}),a.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),a.jsx("li",{children:a.jsxs("a",{href:"",children:[a.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),a.jsxs("div",{children:[a.jsx("h4",{children:"Lone Tree Cooler"}),a.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})})]}),el=j.ul`
  display: inline-flex;
  column-gap: 14px;
`,De=j.li`
  opacity: 0.8;
  transition: opacity 250ms ease;
  &:hover,
  &:focus {
    opacity: 1;
  }
`,Ne=j.a`
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
`,Ve=j.svg`
  width: 22px;
  height: 22px;
  fill: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,tl=()=>a.jsxs(el,{children:[a.jsx(De,{children:a.jsx(Ne,{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Ve,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:a.jsx("path",{d:"M17.0804 4.06011C17.2904 4.06011 17.5004 4.06011 17.9204 4.06011V7.21011C17.7104 7.21011 17.2904 7.21011 16.8704 7.21011C16.4504 7.21011 16.0304 7.21011 15.8204 7.42011C15.6104 7.63011 15.6104 7.84011 15.6104 8.33011C15.6104 8.75011 15.6104 9.03011 15.6104 9.45011H17.9204V12.1101H15.6104V23.6601H12.0404V12.0401H10.1504V9.38011H12.0404V8.47011C12.0404 6.93011 12.2504 5.81011 12.6704 5.32011C13.3004 4.41011 14.5604 3.99011 16.4504 3.99011C16.6604 4.06011 16.8704 4.06011 17.0804 4.06011Z"})})})}),a.jsx(De,{children:a.jsx(Ne,{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:a.jsxs(Ve,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:[a.jsx("path",{d:"M25.1277 9.41152C25.114 8.47146 24.9398 7.53885 24.6065 6.65964C24.0231 5.15827 22.8352 3.97109 21.3313 3.38991C20.4618 3.06332 19.5426 2.88822 18.6122 2.86835C17.4155 2.81495 17.0361 2.80005 13.9986 2.80005C10.961 2.80005 10.5716 2.80005 9.38372 2.86835C8.45454 2.88822 7.5353 3.06332 6.66582 3.38991C5.16196 3.97109 3.97279 5.15827 3.39065 6.65964C3.06351 7.52767 2.88688 8.44538 2.86946 9.37302C2.81598 10.5689 2.7998 10.9477 2.7998 13.9802C2.7998 17.0127 2.7998 17.4002 2.86946 18.5873C2.88812 19.5162 3.06351 20.4327 3.39065 21.3032C3.97404 22.8033 5.16195 23.9905 6.66706 24.5717C7.53281 24.9095 8.45205 25.1007 9.38497 25.1305C10.5828 25.1839 10.9622 25.2001 13.9998 25.2001C17.0374 25.2001 17.4267 25.2001 18.6146 25.1305C19.5438 25.1119 20.4631 24.9368 21.3338 24.6102C22.8377 24.0278 24.0256 22.8406 24.609 21.3405C24.9361 20.4712 25.1115 19.5547 25.1301 18.6246C25.1836 17.43 25.1998 17.0512 25.1998 14.0174C25.1973 10.9849 25.1973 10.5999 25.1277 9.41152ZM13.9911 19.7149C10.8142 19.7149 8.24059 17.1456 8.24059 13.974C8.24059 10.8024 10.8142 8.23302 13.9911 8.23302C17.1655 8.23302 19.7416 10.8024 19.7416 13.974C19.7416 17.1456 17.1655 19.7149 13.9911 19.7149ZM19.9705 9.35936C19.2279 9.35936 18.6296 8.7608 18.6296 8.02067C18.6296 7.28055 19.2279 6.68199 19.9705 6.68199C20.7106 6.68199 21.3102 7.28055 21.3102 8.02067C21.3102 8.7608 20.7106 9.35936 19.9705 9.35936Z"}),a.jsx("path",{d:"M13.9928 17.4789C15.9277 17.4789 17.4963 15.9104 17.4963 13.9754C17.4963 12.0405 15.9277 10.4719 13.9928 10.4719C12.0578 10.4719 10.4893 12.0405 10.4893 13.9754C10.4893 15.9104 12.0578 17.4789 13.9928 17.4789Z"})]})})}),a.jsx(De,{children:a.jsx(Ne,{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Ve,{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",children:a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.2103 5.24986C20.0203 5.17986 17.5704 5.10986 13.8604 5.10986H13.3703C9.80034 5.10986 7.42038 5.17986 6.23038 5.31986C4.62038 5.45986 3.50034 5.87986 2.87034 6.43986C2.31034 6.92986 1.89036 7.83986 1.75036 9.02986C1.68036 9.79986 1.61035 11.4099 1.61035 13.8599V14.2099C1.61035 16.5199 1.68034 18.1299 1.82034 18.8999C2.03034 20.0199 2.38038 20.8599 3.08038 21.3499C3.78038 21.9099 4.97036 22.2599 6.65036 22.3999C7.84036 22.4699 10.2904 22.5399 14.0004 22.5399H14.4904C18.0604 22.5399 20.4404 22.4699 21.6304 22.3299C23.2404 22.1899 24.3604 21.7699 24.9904 21.2099C25.5504 20.7199 25.9703 19.8099 26.1103 18.6199C26.1803 17.8499 26.2504 16.2399 26.2504 13.7899V13.4399C26.2504 11.1299 26.1804 9.51986 26.0404 8.74986C25.8304 7.62986 25.4804 6.78986 24.7804 6.29986C24.0804 5.73986 22.8903 5.38986 21.2103 5.24986ZM18.4804 13.8599L10.7804 18.4799V9.23986L18.4804 13.8599Z"})})})})]}),rl=[{value:"Cocktail",label:"Cocktail"},{value:"Shake",label:"Shake"},{value:"Shot",label:"Shot"}],nl=[{value:"Highball glass",label:"Highball glass"},{value:"Cocktail glass",label:"Cocktail glass"},{value:"Whiskey Glass",label:"Whiskey Glass"}],il=[{value:"Lem",label:"Lem"},{value:"Passoa",label:"Passoa"},{value:"Prosecco",label:"Prosecco"}],dl=()=>a.jsx(Vr,{children:a.jsxs(zr,{children:[a.jsx(Br,{title:"Add drink"}),a.jsxs(Hr,{children:[a.jsx(Qs,{categories:rl,servings:nl,ingredients:il}),a.jsxs(Wr,{children:[a.jsxs("div",{children:[a.jsx(bt,{mb:"20px",children:"Follow Us"}),a.jsx(tl,{})]}),a.jsxs("div",{children:[a.jsx(bt,{mb:"28px",children:"Popular Drinks"}),a.jsx(Js,{})]})]})]})]})});export{dl as default};
