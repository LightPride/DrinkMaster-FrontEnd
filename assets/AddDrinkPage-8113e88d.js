import{u as O,a2 as kr,r as d,j as o,C as Rr,a3 as Pr}from"./index-73ac7255.js";import{c as Lr,a as re,b as Nr,d as Dr}from"./index.esm-6b228938.js";import{S as Le,c as zr,i as Br}from"./ingredients-a2b14ce6.js";import{u as Ur}from"./useDispatch-03fa160d.js";import{P as Vr}from"./PageTitle-d25042d0.js";const Gr=O.div`
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
`,Hr=O.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Wr=O.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }
`,gt=O.p`
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
`;var Kr=function(t){return qr(t)&&!Yr(t)};function qr(e){return!!e&&typeof e=="object"}function Yr(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Xr(e)}var Jr=typeof Symbol=="function"&&Symbol.for,Qr=Jr?Symbol.for("react.element"):60103;function Xr(e){return e.$$typeof===Qr}function Zr(e){return Array.isArray(e)?[]:{}}function xe(e,t){return t.clone!==!1&&t.isMergeableObject(e)?le(Zr(e),e,t):e}function en(e,t,r){return e.concat(t).map(function(n){return xe(n,r)})}function tn(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(a){n[a]=xe(e[a],r)}),Object.keys(t).forEach(function(a){!r.isMergeableObject(t[a])||!e[a]?n[a]=xe(t[a],r):n[a]=le(e[a],t[a],r)}),n}function le(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||en,r.isMergeableObject=r.isMergeableObject||Kr;var n=Array.isArray(t),a=Array.isArray(e),s=n===a;return s?n?r.arrayMerge(e,t,r):tn(e,t,r):xe(t,r)}le.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return le(n,a,r)},{})};var Ne=le,rn=typeof global=="object"&&global&&global.Object===Object&&global;const Ht=rn;var nn=typeof self=="object"&&self&&self.Object===Object&&self,an=Ht||nn||Function("return this")();const D=an;var on=D.Symbol;const U=on;var Wt=Object.prototype,sn=Wt.hasOwnProperty,cn=Wt.toString,se=U?U.toStringTag:void 0;function ln(e){var t=sn.call(e,se),r=e[se];try{e[se]=void 0;var n=!0}catch{}var a=cn.call(e);return n&&(t?e[se]=r:delete e[se]),a}var dn=Object.prototype,un=dn.toString;function fn(e){return un.call(e)}var pn="[object Null]",hn="[object Undefined]",mt=U?U.toStringTag:void 0;function J(e){return e==null?e===void 0?hn:pn:mt&&mt in Object(e)?ln(e):fn(e)}function Kt(e,t){return function(r){return e(t(r))}}var gn=Kt(Object.getPrototypeOf,Object);const He=gn;function Q(e){return e!=null&&typeof e=="object"}var mn="[object Object]",yn=Function.prototype,xn=Object.prototype,qt=yn.toString,vn=xn.hasOwnProperty,bn=qt.call(Object);function yt(e){if(!Q(e)||J(e)!=mn)return!1;var t=He(e);if(t===null)return!0;var r=vn.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&qt.call(r)==bn}var xt=Array.isArray,vt=Object.keys,wn=Object.prototype.hasOwnProperty,Tn=typeof Element<"u";function De(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=xt(e),n=xt(t),a,s,c;if(r&&n){if(s=e.length,s!=t.length)return!1;for(a=s;a--!==0;)if(!De(e[a],t[a]))return!1;return!0}if(r!=n)return!1;var h=e instanceof Date,y=t instanceof Date;if(h!=y)return!1;if(h&&y)return e.getTime()==t.getTime();var v=e instanceof RegExp,C=t instanceof RegExp;if(v!=C)return!1;if(v&&C)return e.toString()==t.toString();var F=vt(e);if(s=F.length,s!==vt(t).length)return!1;for(a=s;a--!==0;)if(!wn.call(t,F[a]))return!1;if(Tn&&e instanceof Element&&t instanceof Element)return e===t;for(a=s;a--!==0;)if(c=F[a],!(c==="_owner"&&e.$$typeof)&&!De(e[c],t[c]))return!1;return!0}return e!==e&&t!==t}var jn=function(t,r){try{return De(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=kr(jn);var Sn=!0;function En(e,t){if(!Sn){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function An(){this.__data__=[],this.size=0}function Yt(e,t){return e===t||e!==e&&t!==t}function ve(e,t){for(var r=e.length;r--;)if(Yt(e[r][0],t))return r;return-1}var _n=Array.prototype,$n=_n.splice;function In(e){var t=this.__data__,r=ve(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():$n.call(t,r,1),--this.size,!0}function On(e){var t=this.__data__,r=ve(t,e);return r<0?void 0:t[r][1]}function Cn(e){return ve(this.__data__,e)>-1}function Fn(e,t){var r=this.__data__,n=ve(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function B(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}B.prototype.clear=An;B.prototype.delete=In;B.prototype.get=On;B.prototype.has=Cn;B.prototype.set=Fn;function Mn(){this.__data__=new B,this.size=0}function kn(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Rn(e){return this.__data__.get(e)}function Pn(e){return this.__data__.has(e)}function fe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ln="[object AsyncFunction]",Nn="[object Function]",Dn="[object GeneratorFunction]",zn="[object Proxy]";function Jt(e){if(!fe(e))return!1;var t=J(e);return t==Nn||t==Dn||t==Ln||t==zn}var Bn=D["__core-js_shared__"];const Fe=Bn;var bt=function(){var e=/[^.]+$/.exec(Fe&&Fe.keys&&Fe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Un(e){return!!bt&&bt in e}var Vn=Function.prototype,Gn=Vn.toString;function X(e){if(e!=null){try{return Gn.call(e)}catch{}try{return e+""}catch{}}return""}var Hn=/[\\^$.*+?()[\]{}|]/g,Wn=/^\[object .+?Constructor\]$/,Kn=Function.prototype,qn=Object.prototype,Yn=Kn.toString,Jn=qn.hasOwnProperty,Qn=RegExp("^"+Yn.call(Jn).replace(Hn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Xn(e){if(!fe(e)||Un(e))return!1;var t=Jt(e)?Qn:Wn;return t.test(X(e))}function Zn(e,t){return e==null?void 0:e[t]}function Z(e,t){var r=Zn(e,t);return Xn(r)?r:void 0}var ei=Z(D,"Map");const de=ei;var ti=Z(Object,"create");const ue=ti;function ri(){this.__data__=ue?ue(null):{},this.size=0}function ni(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ii="__lodash_hash_undefined__",ai=Object.prototype,oi=ai.hasOwnProperty;function si(e){var t=this.__data__;if(ue){var r=t[e];return r===ii?void 0:r}return oi.call(t,e)?t[e]:void 0}var ci=Object.prototype,li=ci.hasOwnProperty;function di(e){var t=this.__data__;return ue?t[e]!==void 0:li.call(t,e)}var ui="__lodash_hash_undefined__";function fi(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ue&&t===void 0?ui:t,this}function Y(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Y.prototype.clear=ri;Y.prototype.delete=ni;Y.prototype.get=si;Y.prototype.has=di;Y.prototype.set=fi;function pi(){this.size=0,this.__data__={hash:new Y,map:new(de||B),string:new Y}}function hi(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function be(e,t){var r=e.__data__;return hi(t)?r[typeof t=="string"?"string":"hash"]:r.map}function gi(e){var t=be(this,e).delete(e);return this.size-=t?1:0,t}function mi(e){return be(this,e).get(e)}function yi(e){return be(this,e).has(e)}function xi(e,t){var r=be(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function V(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}V.prototype.clear=pi;V.prototype.delete=gi;V.prototype.get=mi;V.prototype.has=yi;V.prototype.set=xi;var vi=200;function bi(e,t){var r=this.__data__;if(r instanceof B){var n=r.__data__;if(!de||n.length<vi-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new V(n)}return r.set(e,t),this.size=r.size,this}function ae(e){var t=this.__data__=new B(e);this.size=t.size}ae.prototype.clear=Mn;ae.prototype.delete=kn;ae.prototype.get=Rn;ae.prototype.has=Pn;ae.prototype.set=bi;function wi(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Ti=function(){try{var e=Z(Object,"defineProperty");return e({},"",{}),e}catch{}}();const wt=Ti;function Qt(e,t,r){t=="__proto__"&&wt?wt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var ji=Object.prototype,Si=ji.hasOwnProperty;function Xt(e,t,r){var n=e[t];(!(Si.call(e,t)&&Yt(n,r))||r===void 0&&!(t in e))&&Qt(e,t,r)}function we(e,t,r,n){var a=!r;r||(r={});for(var s=-1,c=t.length;++s<c;){var h=t[s],y=n?n(r[h],e[h],h,r,e):void 0;y===void 0&&(y=e[h]),a?Qt(r,h,y):Xt(r,h,y)}return r}function Ei(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Ai="[object Arguments]";function Tt(e){return Q(e)&&J(e)==Ai}var Zt=Object.prototype,_i=Zt.hasOwnProperty,$i=Zt.propertyIsEnumerable,Ii=Tt(function(){return arguments}())?Tt:function(e){return Q(e)&&_i.call(e,"callee")&&!$i.call(e,"callee")};const Oi=Ii;var Ci=Array.isArray;const pe=Ci;function Fi(){return!1}var er=typeof exports=="object"&&exports&&!exports.nodeType&&exports,jt=er&&typeof module=="object"&&module&&!module.nodeType&&module,Mi=jt&&jt.exports===er,St=Mi?D.Buffer:void 0,ki=St?St.isBuffer:void 0,Ri=ki||Fi;const tr=Ri;var Pi=9007199254740991,Li=/^(?:0|[1-9]\d*)$/;function Ni(e,t){var r=typeof e;return t=t??Pi,!!t&&(r=="number"||r!="symbol"&&Li.test(e))&&e>-1&&e%1==0&&e<t}var Di=9007199254740991;function rr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Di}var zi="[object Arguments]",Bi="[object Array]",Ui="[object Boolean]",Vi="[object Date]",Gi="[object Error]",Hi="[object Function]",Wi="[object Map]",Ki="[object Number]",qi="[object Object]",Yi="[object RegExp]",Ji="[object Set]",Qi="[object String]",Xi="[object WeakMap]",Zi="[object ArrayBuffer]",ea="[object DataView]",ta="[object Float32Array]",ra="[object Float64Array]",na="[object Int8Array]",ia="[object Int16Array]",aa="[object Int32Array]",oa="[object Uint8Array]",sa="[object Uint8ClampedArray]",ca="[object Uint16Array]",la="[object Uint32Array]",_={};_[ta]=_[ra]=_[na]=_[ia]=_[aa]=_[oa]=_[sa]=_[ca]=_[la]=!0;_[zi]=_[Bi]=_[Zi]=_[Ui]=_[ea]=_[Vi]=_[Gi]=_[Hi]=_[Wi]=_[Ki]=_[qi]=_[Yi]=_[Ji]=_[Qi]=_[Xi]=!1;function da(e){return Q(e)&&rr(e.length)&&!!_[J(e)]}function We(e){return function(t){return e(t)}}var nr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ce=nr&&typeof module=="object"&&module&&!module.nodeType&&module,ua=ce&&ce.exports===nr,Me=ua&&Ht.process,fa=function(){try{var e=ce&&ce.require&&ce.require("util").types;return e||Me&&Me.binding&&Me.binding("util")}catch{}}();const ie=fa;var Et=ie&&ie.isTypedArray,pa=Et?We(Et):da;const ha=pa;var ga=Object.prototype,ma=ga.hasOwnProperty;function ir(e,t){var r=pe(e),n=!r&&Oi(e),a=!r&&!n&&tr(e),s=!r&&!n&&!a&&ha(e),c=r||n||a||s,h=c?Ei(e.length,String):[],y=h.length;for(var v in e)(t||ma.call(e,v))&&!(c&&(v=="length"||a&&(v=="offset"||v=="parent")||s&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Ni(v,y)))&&h.push(v);return h}var ya=Object.prototype;function Ke(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||ya;return e===r}var xa=Kt(Object.keys,Object);const va=xa;var ba=Object.prototype,wa=ba.hasOwnProperty;function Ta(e){if(!Ke(e))return va(e);var t=[];for(var r in Object(e))wa.call(e,r)&&r!="constructor"&&t.push(r);return t}function ar(e){return e!=null&&rr(e.length)&&!Jt(e)}function qe(e){return ar(e)?ir(e):Ta(e)}function ja(e,t){return e&&we(t,qe(t),e)}function Sa(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Ea=Object.prototype,Aa=Ea.hasOwnProperty;function _a(e){if(!fe(e))return Sa(e);var t=Ke(e),r=[];for(var n in e)n=="constructor"&&(t||!Aa.call(e,n))||r.push(n);return r}function Ye(e){return ar(e)?ir(e,!0):_a(e)}function $a(e,t){return e&&we(t,Ye(t),e)}var or=typeof exports=="object"&&exports&&!exports.nodeType&&exports,At=or&&typeof module=="object"&&module&&!module.nodeType&&module,Ia=At&&At.exports===or,_t=Ia?D.Buffer:void 0,$t=_t?_t.allocUnsafe:void 0;function Oa(e,t){if(t)return e.slice();var r=e.length,n=$t?$t(r):new e.constructor(r);return e.copy(n),n}function sr(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function Ca(e,t){for(var r=-1,n=e==null?0:e.length,a=0,s=[];++r<n;){var c=e[r];t(c,r,e)&&(s[a++]=c)}return s}function cr(){return[]}var Fa=Object.prototype,Ma=Fa.propertyIsEnumerable,It=Object.getOwnPropertySymbols,ka=It?function(e){return e==null?[]:(e=Object(e),Ca(It(e),function(t){return Ma.call(e,t)}))}:cr;const Je=ka;function Ra(e,t){return we(e,Je(e),t)}function lr(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var Pa=Object.getOwnPropertySymbols,La=Pa?function(e){for(var t=[];e;)lr(t,Je(e)),e=He(e);return t}:cr;const dr=La;function Na(e,t){return we(e,dr(e),t)}function ur(e,t,r){var n=t(e);return pe(e)?n:lr(n,r(e))}function Da(e){return ur(e,qe,Je)}function za(e){return ur(e,Ye,dr)}var Ba=Z(D,"DataView");const ze=Ba;var Ua=Z(D,"Promise");const Be=Ua;var Va=Z(D,"Set");const Ue=Va;var Ga=Z(D,"WeakMap");const Ve=Ga;var Ot="[object Map]",Ha="[object Object]",Ct="[object Promise]",Ft="[object Set]",Mt="[object WeakMap]",kt="[object DataView]",Wa=X(ze),Ka=X(de),qa=X(Be),Ya=X(Ue),Ja=X(Ve),W=J;(ze&&W(new ze(new ArrayBuffer(1)))!=kt||de&&W(new de)!=Ot||Be&&W(Be.resolve())!=Ct||Ue&&W(new Ue)!=Ft||Ve&&W(new Ve)!=Mt)&&(W=function(e){var t=J(e),r=t==Ha?e.constructor:void 0,n=r?X(r):"";if(n)switch(n){case Wa:return kt;case Ka:return Ot;case qa:return Ct;case Ya:return Ft;case Ja:return Mt}return t});const Qe=W;var Qa=Object.prototype,Xa=Qa.hasOwnProperty;function Za(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Xa.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var eo=D.Uint8Array;const Rt=eo;function Xe(e){var t=new e.constructor(e.byteLength);return new Rt(t).set(new Rt(e)),t}function to(e,t){var r=t?Xe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var ro=/\w*$/;function no(e){var t=new e.constructor(e.source,ro.exec(e));return t.lastIndex=e.lastIndex,t}var Pt=U?U.prototype:void 0,Lt=Pt?Pt.valueOf:void 0;function io(e){return Lt?Object(Lt.call(e)):{}}function ao(e,t){var r=t?Xe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var oo="[object Boolean]",so="[object Date]",co="[object Map]",lo="[object Number]",uo="[object RegExp]",fo="[object Set]",po="[object String]",ho="[object Symbol]",go="[object ArrayBuffer]",mo="[object DataView]",yo="[object Float32Array]",xo="[object Float64Array]",vo="[object Int8Array]",bo="[object Int16Array]",wo="[object Int32Array]",To="[object Uint8Array]",jo="[object Uint8ClampedArray]",So="[object Uint16Array]",Eo="[object Uint32Array]";function Ao(e,t,r){var n=e.constructor;switch(t){case go:return Xe(e);case oo:case so:return new n(+e);case mo:return to(e,r);case yo:case xo:case vo:case bo:case wo:case To:case jo:case So:case Eo:return ao(e,r);case co:return new n;case lo:case po:return new n(e);case uo:return no(e);case fo:return new n;case ho:return io(e)}}var Nt=Object.create,_o=function(){function e(){}return function(t){if(!fe(t))return{};if(Nt)return Nt(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const $o=_o;function Io(e){return typeof e.constructor=="function"&&!Ke(e)?$o(He(e)):{}}var Oo="[object Map]";function Co(e){return Q(e)&&Qe(e)==Oo}var Dt=ie&&ie.isMap,Fo=Dt?We(Dt):Co;const Mo=Fo;var ko="[object Set]";function Ro(e){return Q(e)&&Qe(e)==ko}var zt=ie&&ie.isSet,Po=zt?We(zt):Ro;const Lo=Po;var No=1,Do=2,zo=4,fr="[object Arguments]",Bo="[object Array]",Uo="[object Boolean]",Vo="[object Date]",Go="[object Error]",pr="[object Function]",Ho="[object GeneratorFunction]",Wo="[object Map]",Ko="[object Number]",hr="[object Object]",qo="[object RegExp]",Yo="[object Set]",Jo="[object String]",Qo="[object Symbol]",Xo="[object WeakMap]",Zo="[object ArrayBuffer]",es="[object DataView]",ts="[object Float32Array]",rs="[object Float64Array]",ns="[object Int8Array]",is="[object Int16Array]",as="[object Int32Array]",os="[object Uint8Array]",ss="[object Uint8ClampedArray]",cs="[object Uint16Array]",ls="[object Uint32Array]",E={};E[fr]=E[Bo]=E[Zo]=E[es]=E[Uo]=E[Vo]=E[ts]=E[rs]=E[ns]=E[is]=E[as]=E[Wo]=E[Ko]=E[hr]=E[qo]=E[Yo]=E[Jo]=E[Qo]=E[os]=E[ss]=E[cs]=E[ls]=!0;E[Go]=E[pr]=E[Xo]=!1;function ye(e,t,r,n,a,s){var c,h=t&No,y=t&Do,v=t&zo;if(r&&(c=a?r(e,n,a,s):r(e)),c!==void 0)return c;if(!fe(e))return e;var C=pe(e);if(C){if(c=Za(e),!h)return sr(e,c)}else{var F=Qe(e),f=F==pr||F==Ho;if(tr(e))return Oa(e,h);if(F==hr||F==fr||f&&!a){if(c=y||f?{}:Io(e),!h)return y?Na(e,$a(c,e)):Ra(e,ja(c,e))}else{if(!E[F])return a?e:{};c=Ao(e,F,h)}}s||(s=new ae);var A=s.get(e);if(A)return A;s.set(e,c),Lo(e)?e.forEach(function(g){c.add(ye(g,t,r,g,e,s))}):Mo(e)&&e.forEach(function(g,w){c.set(w,ye(g,t,r,w,e,s))});var S=v?y?za:Da:y?Ye:qe,x=C?void 0:S(e);return wi(x||e,function(g,w){x&&(w=g,g=e[w]),Xt(c,w,ye(g,t,r,w,e,s))}),c}var ds=4;function Bt(e){return ye(e,ds)}function gr(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var us="[object Symbol]";function Ze(e){return typeof e=="symbol"||Q(e)&&J(e)==us}var fs="Expected a function";function et(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(fs);var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],s=r.cache;if(s.has(a))return s.get(a);var c=e.apply(this,n);return r.cache=s.set(a,c)||s,c};return r.cache=new(et.Cache||V),r}et.Cache=V;var ps=500;function hs(e){var t=et(e,function(n){return r.size===ps&&r.clear(),n}),r=t.cache;return t}var gs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ms=/\\(\\)?/g,ys=hs(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(gs,function(r,n,a,s){t.push(a?s.replace(ms,"$1"):n||r)}),t});const xs=ys;var vs=1/0;function bs(e){if(typeof e=="string"||Ze(e))return e;var t=e+"";return t=="0"&&1/e==-vs?"-0":t}var ws=1/0,Ut=U?U.prototype:void 0,Vt=Ut?Ut.toString:void 0;function mr(e){if(typeof e=="string")return e;if(pe(e))return gr(e,mr)+"";if(Ze(e))return Vt?Vt.call(e):"";var t=e+"";return t=="0"&&1/e==-ws?"-0":t}function Ts(e){return e==null?"":mr(e)}function yr(e){return pe(e)?gr(e,bs):Ze(e)?[e]:sr(xs(Ts(e)))}function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$.apply(this,arguments)}function ne(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var Te=d.createContext(void 0);Te.displayName="FormikContext";var js=Te.Provider;Te.Consumer;function xr(){var e=d.useContext(Te);return e||En(!1),e}var R=function(t){return typeof t=="function"},je=function(t){return t!==null&&typeof t=="object"},Ss=function(t){return String(Math.floor(Number(t)))===t},ke=function(t){return Object.prototype.toString.call(t)==="[object String]"},Es=function(t){return d.Children.count(t)===0},Re=function(t){return je(t)&&R(t.then)};function k(e,t,r,n){n===void 0&&(n=0);for(var a=yr(t);e&&n<a.length;)e=e[a[n++]];return n!==a.length&&!e||e===void 0?r:e}function q(e,t,r){for(var n=Bt(e),a=n,s=0,c=yr(t);s<c.length-1;s++){var h=c[s],y=k(e,c.slice(0,s+1));if(y&&(je(y)||Array.isArray(y)))a=a[h]=Bt(y);else{var v=c[s+1];a=a[h]=Ss(v)&&Number(v)>=0?[]:{}}}return(s===0?e:a)[c[s]]===r?e:(r===void 0?delete a[c[s]]:a[c[s]]=r,s===0&&r===void 0&&delete n[c[s]],n)}function vr(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var a=0,s=Object.keys(e);a<s.length;a++){var c=s[a],h=e[c];je(h)?r.get(h)||(r.set(h,!0),n[c]=Array.isArray(h)?[]:{},vr(h,t,r,n[c])):n[c]=t}return n}function As(e,t){switch(t.type){case"SET_VALUES":return $({},e,{values:t.payload});case"SET_TOUCHED":return $({},e,{touched:t.payload});case"SET_ERRORS":return H(e.errors,t.payload)?e:$({},e,{errors:t.payload});case"SET_STATUS":return $({},e,{status:t.payload});case"SET_ISSUBMITTING":return $({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return $({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return $({},e,{values:q(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return $({},e,{touched:q(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return $({},e,{errors:q(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return $({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return $({},e,{touched:vr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return $({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return $({},e,{isSubmitting:!1});default:return e}}var G={},me={};function _s(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,a=n===void 0?!0:n,s=e.validateOnMount,c=s===void 0?!1:s,h=e.isInitialValid,y=e.enableReinitialize,v=y===void 0?!1:y,C=e.onSubmit,F=ne(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=$({validateOnChange:r,validateOnBlur:a,validateOnMount:c,onSubmit:C},F),A=d.useRef(f.initialValues),S=d.useRef(f.initialErrors||G),x=d.useRef(f.initialTouched||me),g=d.useRef(f.initialStatus),w=d.useRef(!1),I=d.useRef({});d.useEffect(function(){return w.current=!0,function(){w.current=!1}},[]);var P=d.useState(0),Se=P[1],he=d.useRef({values:f.initialValues,errors:f.initialErrors||G,touched:f.initialTouched||me,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),j=he.current,T=d.useCallback(function(i){var l=he.current;he.current=As(l,i),l!==he.current&&Se(function(u){return u+1})},[]),tt=d.useCallback(function(i,l){return new Promise(function(u,p){var m=f.validate(i,l);m==null?u(G):Re(m)?m.then(function(b){u(b||G)},function(b){p(b)}):u(m)})},[f.validate]),Ee=d.useCallback(function(i,l){var u=f.validationSchema,p=R(u)?u(l):u,m=l&&p.validateAt?p.validateAt(l,i):Os(i,p);return new Promise(function(b,M){m.then(function(){b(G)},function(z){z.name==="ValidationError"?b(Is(z)):M(z)})})},[f.validationSchema]),rt=d.useCallback(function(i,l){return new Promise(function(u){return u(I.current[i].validate(l))})},[]),nt=d.useCallback(function(i){var l=Object.keys(I.current).filter(function(p){return R(I.current[p].validate)}),u=l.length>0?l.map(function(p){return rt(p,k(i,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(u).then(function(p){return p.reduce(function(m,b,M){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(m=q(m,l[M],b)),m},{})})},[rt]),wr=d.useCallback(function(i){return Promise.all([nt(i),f.validationSchema?Ee(i):{},f.validate?tt(i):{}]).then(function(l){var u=l[0],p=l[1],m=l[2],b=Ne.all([u,p,m],{arrayMerge:Cs});return b})},[f.validate,f.validationSchema,nt,tt,Ee]),N=L(function(i){return i===void 0&&(i=j.values),T({type:"SET_ISVALIDATING",payload:!0}),wr(i).then(function(l){return w.current&&(T({type:"SET_ISVALIDATING",payload:!1}),T({type:"SET_ERRORS",payload:l})),l})});d.useEffect(function(){c&&w.current===!0&&H(A.current,f.initialValues)&&N(A.current)},[c,N]);var oe=d.useCallback(function(i){var l=i&&i.values?i.values:A.current,u=i&&i.errors?i.errors:S.current?S.current:f.initialErrors||{},p=i&&i.touched?i.touched:x.current?x.current:f.initialTouched||{},m=i&&i.status?i.status:g.current?g.current:f.initialStatus;A.current=l,S.current=u,x.current=p,g.current=m;var b=function(){T({type:"RESET_FORM",payload:{isSubmitting:!!i&&!!i.isSubmitting,errors:u,touched:p,status:m,values:l,isValidating:!!i&&!!i.isValidating,submitCount:i&&i.submitCount&&typeof i.submitCount=="number"?i.submitCount:0}})};if(f.onReset){var M=f.onReset(j.values,pt);Re(M)?M.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){w.current===!0&&!H(A.current,f.initialValues)&&v&&(A.current=f.initialValues,oe(),c&&N(A.current))},[v,f.initialValues,oe,c,N]),d.useEffect(function(){v&&w.current===!0&&!H(S.current,f.initialErrors)&&(S.current=f.initialErrors||G,T({type:"SET_ERRORS",payload:f.initialErrors||G}))},[v,f.initialErrors]),d.useEffect(function(){v&&w.current===!0&&!H(x.current,f.initialTouched)&&(x.current=f.initialTouched||me,T({type:"SET_TOUCHED",payload:f.initialTouched||me}))},[v,f.initialTouched]),d.useEffect(function(){v&&w.current===!0&&!H(g.current,f.initialStatus)&&(g.current=f.initialStatus,T({type:"SET_STATUS",payload:f.initialStatus}))},[v,f.initialStatus,f.initialTouched]);var it=L(function(i){if(I.current[i]&&R(I.current[i].validate)){var l=k(j.values,i),u=I.current[i].validate(l);return Re(u)?(T({type:"SET_ISVALIDATING",payload:!0}),u.then(function(p){return p}).then(function(p){T({type:"SET_FIELD_ERROR",payload:{field:i,value:p}}),T({type:"SET_ISVALIDATING",payload:!1})})):(T({type:"SET_FIELD_ERROR",payload:{field:i,value:u}}),Promise.resolve(u))}else if(f.validationSchema)return T({type:"SET_ISVALIDATING",payload:!0}),Ee(j.values,i).then(function(p){return p}).then(function(p){T({type:"SET_FIELD_ERROR",payload:{field:i,value:k(p,i)}}),T({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Tr=d.useCallback(function(i,l){var u=l.validate;I.current[i]={validate:u}},[]),jr=d.useCallback(function(i){delete I.current[i]},[]),at=L(function(i,l){T({type:"SET_TOUCHED",payload:i});var u=l===void 0?a:l;return u?N(j.values):Promise.resolve()}),ot=d.useCallback(function(i){T({type:"SET_ERRORS",payload:i})},[]),st=L(function(i,l){var u=R(i)?i(j.values):i;T({type:"SET_VALUES",payload:u});var p=l===void 0?r:l;return p?N(u):Promise.resolve()}),ge=d.useCallback(function(i,l){T({type:"SET_FIELD_ERROR",payload:{field:i,value:l}})},[]),ee=L(function(i,l,u){T({type:"SET_FIELD_VALUE",payload:{field:i,value:l}});var p=u===void 0?r:u;return p?N(q(j.values,i,l)):Promise.resolve()}),ct=d.useCallback(function(i,l){var u=l,p=i,m;if(!ke(i)){i.persist&&i.persist();var b=i.target?i.target:i.currentTarget,M=b.type,z=b.name,Oe=b.id,Ce=b.value,Fr=b.checked,rc=b.outerHTML,ht=b.options,Mr=b.multiple;u=l||z||Oe,p=/number|range/.test(M)?(m=parseFloat(Ce),isNaN(m)?"":m):/checkbox/.test(M)?Ms(k(j.values,u),Fr,Ce):ht&&Mr?Fs(ht):Ce}u&&ee(u,p)},[ee,j.values]),Ae=L(function(i){if(ke(i))return function(l){return ct(l,i)};ct(i)}),te=L(function(i,l,u){l===void 0&&(l=!0),T({type:"SET_FIELD_TOUCHED",payload:{field:i,value:l}});var p=u===void 0?a:u;return p?N(j.values):Promise.resolve()}),lt=d.useCallback(function(i,l){i.persist&&i.persist();var u=i.target,p=u.name,m=u.id,b=u.outerHTML,M=l||p||m;te(M,!0)},[te]),_e=L(function(i){if(ke(i))return function(l){return lt(l,i)};lt(i)}),dt=d.useCallback(function(i){R(i)?T({type:"SET_FORMIK_STATE",payload:i}):T({type:"SET_FORMIK_STATE",payload:function(){return i}})},[]),ut=d.useCallback(function(i){T({type:"SET_STATUS",payload:i})},[]),ft=d.useCallback(function(i){T({type:"SET_ISSUBMITTING",payload:i})},[]),$e=L(function(){return T({type:"SUBMIT_ATTEMPT"}),N().then(function(i){var l=i instanceof Error,u=!l&&Object.keys(i).length===0;if(u){var p;try{if(p=Er(),p===void 0)return}catch(m){throw m}return Promise.resolve(p).then(function(m){return w.current&&T({type:"SUBMIT_SUCCESS"}),m}).catch(function(m){if(w.current)throw T({type:"SUBMIT_FAILURE"}),m})}else if(w.current&&(T({type:"SUBMIT_FAILURE"}),l))throw i})}),Sr=L(function(i){i&&i.preventDefault&&R(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&R(i.stopPropagation)&&i.stopPropagation(),$e().catch(function(l){console.warn("Warning: An unhandled error was caught from submitForm()",l)})}),pt={resetForm:oe,validateForm:N,validateField:it,setErrors:ot,setFieldError:ge,setFieldTouched:te,setFieldValue:ee,setStatus:ut,setSubmitting:ft,setTouched:at,setValues:st,setFormikState:dt,submitForm:$e},Er=L(function(){return C(j.values,pt)}),Ar=L(function(i){i&&i.preventDefault&&R(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&R(i.stopPropagation)&&i.stopPropagation(),oe()}),_r=d.useCallback(function(i){return{value:k(j.values,i),error:k(j.errors,i),touched:!!k(j.touched,i),initialValue:k(A.current,i),initialTouched:!!k(x.current,i),initialError:k(S.current,i)}},[j.errors,j.touched,j.values]),$r=d.useCallback(function(i){return{setValue:function(u,p){return ee(i,u,p)},setTouched:function(u,p){return te(i,u,p)},setError:function(u){return ge(i,u)}}},[ee,te,ge]),Ir=d.useCallback(function(i){var l=je(i),u=l?i.name:i,p=k(j.values,u),m={name:u,value:p,onChange:Ae,onBlur:_e};if(l){var b=i.type,M=i.value,z=i.as,Oe=i.multiple;b==="checkbox"?M===void 0?m.checked=!!p:(m.checked=!!(Array.isArray(p)&&~p.indexOf(M)),m.value=M):b==="radio"?(m.checked=p===M,m.value=M):z==="select"&&Oe&&(m.value=m.value||[],m.multiple=!0)}return m},[_e,Ae,j.values]),Ie=d.useMemo(function(){return!H(A.current,j.values)},[A.current,j.values]),Or=d.useMemo(function(){return typeof h<"u"?Ie?j.errors&&Object.keys(j.errors).length===0:h!==!1&&R(h)?h(f):h:j.errors&&Object.keys(j.errors).length===0},[h,Ie,j.errors,f]),Cr=$({},j,{initialValues:A.current,initialErrors:S.current,initialTouched:x.current,initialStatus:g.current,handleBlur:_e,handleChange:Ae,handleReset:Ar,handleSubmit:Sr,resetForm:oe,setErrors:ot,setFormikState:dt,setFieldTouched:te,setFieldValue:ee,setFieldError:ge,setStatus:ut,setSubmitting:ft,setTouched:at,setValues:st,submitForm:$e,validateForm:N,validateField:it,isValid:Or,dirty:Ie,unregisterField:jr,registerField:Tr,getFieldProps:Ir,getFieldMeta:_r,getFieldHelpers:$r,validateOnBlur:a,validateOnChange:r,validateOnMount:c});return Cr}function $s(e){var t=_s(e),r=e.component,n=e.children,a=e.render,s=e.innerRef;return d.useImperativeHandle(s,function(){return t}),d.createElement(js,{value:t},r?d.createElement(r,t):a?a(t):n?R(n)?n(t):Es(n)?null:d.Children.only(n):null)}function Is(e){var t={};if(e.inner){if(e.inner.length===0)return q(t,e.path,e.message);for(var a=e.inner,r=Array.isArray(a),n=0,a=r?a:a[Symbol.iterator]();;){var s;if(r){if(n>=a.length)break;s=a[n++]}else{if(n=a.next(),n.done)break;s=n.value}var c=s;k(t,c.path)||(t=q(t,c.path,c.message))}}return t}function Os(e,t,r,n){r===void 0&&(r=!1);var a=Ge(e);return t[r?"validateSync":"validate"](a,{abortEarly:!1,context:n||a})}function Ge(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(a){return Array.isArray(a)===!0||yt(a)?Ge(a):a!==""?a:void 0}):yt(e[n])?t[n]=Ge(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Cs(e,t,r){var n=e.slice();return t.forEach(function(s,c){if(typeof n[c]>"u"){var h=r.clone!==!1,y=h&&r.isMergeableObject(s);n[c]=y?Ne(Array.isArray(s)?[]:{},s,r):s}else r.isMergeableObject(s)?n[c]=Ne(e[c],s,r):e.indexOf(s)===-1&&n.push(s)}),n}function Fs(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Ms(e,t,r){if(typeof e=="boolean")return!!t;var n=[],a=!1,s=-1;if(Array.isArray(e))n=e,s=e.indexOf(r),a=s>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!a?n.concat(r):a?n.slice(0,s).concat(n.slice(s+1)):n}var ks=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function L(e){var t=d.useRef(e);return ks(function(){t.current=e}),d.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current.apply(void 0,n)},[])}function K(e){var t=e.validate,r=e.name,n=e.render,a=e.children,s=e.as,c=e.component,h=e.className,y=ne(e,["validate","name","render","children","as","component","className"]),v=xr(),C=ne(v,["validate","validationSchema"]),F=C.registerField,f=C.unregisterField;d.useEffect(function(){return F(r,{validate:t}),function(){f(r)}},[F,f,r,t]);var A=C.getFieldProps($({name:r},y)),S=C.getFieldMeta(r),x={field:A,form:C};if(n)return n($({},x,{meta:S}));if(R(a))return a($({},x,{meta:S}));if(c){if(typeof c=="string"){var g=y.innerRef,w=ne(y,["innerRef"]);return d.createElement(c,$({ref:g},A,w,{className:h}),a)}return d.createElement(c,$({field:A,form:C},y,{className:h}),a)}var I=s||"input";if(typeof I=="string"){var P=y.innerRef,Se=ne(y,["innerRef"]);return d.createElement(I,$({ref:P},A,Se,{className:h}),a)}return d.createElement(I,$({},A,y,{className:h}),a)}var br=d.forwardRef(function(e,t){var r=e.action,n=ne(e,["action"]),a=r??"#",s=xr(),c=s.handleReset,h=s.handleSubmit;return d.createElement("form",$({onSubmit:h,ref:t,onReset:c,action:a},n))});br.displayName="Form";const Rs=O.div`
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
`,Ps=O.div`
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
`,Ls=O.div`
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
`,Ns=O.div`
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
`,Ds=O.label`
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
`;O.input`
  display: none;
`;const zs=O.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,Bs=O.div`
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
`,Gt={dropdownIndicator:(e,t)=>({...e,transform:t.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(e,{isFocused:t})=>({...e,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),placeholder:(e,{isFocused:t})=>({...e,fontSize:"14px",boxShadow:"none",cursor:"pointer",color:"#f3f3f3",display:"flex",alignItems:"center",fontWeight:"400",fontSize:"14px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"16px"}}),menu:e=>({...e,position:"absolute",width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px",right:"-10%","@media only screen and (min-width: 1440px)":{...e["@media only screen and (min-width: 1440px)"],width:"154px",right:"-0%"}},backgroundColor:"#161F37",borderRadius:"12px"}),indicatorSeparator:e=>({...e,display:"none"}),valueContainer:e=>({...e,padding:0}),singleValue:e=>({...e,color:"#f3f3f3"}),option:(e,{isFocused:t,isSelected:r})=>({...e,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...e["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:t?"#f3f3f375":r?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},Us=O.div`
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
`,Vs=["Highball glass","Cocktail glass","Old-fashioned glass","Whiskey Glass","Collins glass","Pousse cafe glass","Champagne flute","Whiskey sour glass","Cordial glass","Brandy snifter","White wine glass","Nick and Nora Glass","Hurricane glass","Coffee mug","Shot glass","Jar","Irish coffee cup","Punch bowl","Pitcher","Pint glass","Copper Mug","Wine Glass","Beer mug","Margarita/Coupette glass","Beer pilsner","Beer Glass","Parfait glass","Mason jar","Margarita glass","Martini Glass","Balloon Glass","Coupe Glass"].map(e=>({glass:e})),Gs=({values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:s})=>{const[c,h]=d.useState([]),[y,v]=d.useState([]),[C,F]=d.useState([]),[f,A]=d.useState([]);d.useEffect(()=>{async function g(){try{const I=zr.map(P=>({value:P.categori,label:P.categori}));h(I)}catch(I){console.error("Помилка:",I)}}async function w(){try{const I=Vs.map(P=>({value:P.glass,label:P.glass}));v(I)}catch(I){console.error("Ошибка при загрузці скла:",I)}}g(),w()},[]);const S=g=>{F(g),s("category",g.value)},x=g=>{A(g),s("glass",g.value)};return o.jsxs(Ps,{children:[o.jsx(Ls,{children:o.jsxs(Ns,{children:[o.jsxs(Ds,{children:[o.jsxs("svg",{width:"29",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M14.5 5.8335V22.1668",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M6.33203 14H22.6654",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),o.jsx(K,{style:{display:"none"},id:"drinkThumb",type:"file",name:"drinkThumb",accept:"drinkThumb/*"})]}),o.jsx("p",{children:"Add Image"})]})}),o.jsxs(zs,{children:[o.jsxs(Bs,{children:[o.jsx("div",{className:"styledDivInput",children:o.jsx(K,{className:"styledInputText",placeholder:"Enter item title",type:"text",id:"drink",name:"drink",onChange:g=>{n(g)}})}),o.jsx("div",{className:"styledDivInput",children:o.jsx(K,{className:"styledInputText",placeholder:"Enter item title",id:"description",name:"description",onChange:g=>{n(g)}})}),o.jsx("div",{className:"styledDivInput",children:o.jsxs("label",{className:"labelSelect",children:[o.jsx("p",{className:"labelTitle",children:"Category"}),o.jsx(Le,{className:"selectStyled",name:"category",options:c,value:C,onChange:g=>S(g),styles:Gt})]})}),o.jsx("div",{className:"styledDivInput",children:o.jsxs("label",{className:"labelSelect",children:[o.jsx("p",{className:"labelTitle",children:"Glass"}),o.jsx(Le,{className:"selectStyled",name:"glass",options:y,value:f,onChange:g=>x(g),styles:Gt})]})})]}),o.jsxs(Us,{children:[o.jsxs("label",{className:"radioLabel",children:[o.jsx(K,{className:"styledRadio",type:"radio",name:"alcoholic",value:"true",checked:e.alcoholic==="true",onChange:n}),o.jsx("span",{className:"styledSpan",children:"Alcoholic"})]}),o.jsxs("label",{className:"radioLabel",children:[o.jsx(K,{className:"styledRadio",type:"radio",name:"alcoholic",value:"false",checked:e.alcoholic==="false",onChange:n}),o.jsx("span",{className:"styledSpan",children:"Non-alcoholic"})]})]})]})]})},Hs=O.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,Ws=O.div`
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
`,Pe=O.button`
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
`,Ks=O.div`
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
`,qs={dropdownIndicator:(e,t)=>({...e,paddingRight:"18px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:t.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(e,t)=>({...e,width:"200px",height:"50px",border:"     1px solid rgba(243, 243, 243, 0.5)",background:"inherit",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:e=>({...e,marginTop:"2px",padding:"0px 12px",backgroundColor:" #161f37",borderRadius:"12px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:e=>({...e,display:"none"}),valueContainer:e=>({...e,padding:"0px 18px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:e=>({...e,color:"#f3f3f3"}),placeholder:e=>({...e,"@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(e,{isFocused:t,isSelected:r})=>({...e,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:t?"#f3f3f375":r?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},Ys=({values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:s})=>{const[c,h]=d.useState([]),[y,v]=d.useState([]);d.useEffect(()=>{async function S(){try{const x=Br.map(g=>({label:g.title,value:g._id}));h(x)}catch(x){console.error("Помилка при завантаженні інгрідієнтів:",x)}}S()},[]);const C=(S,x)=>{const{value:g,label:w}=S;s(`ingredients[${x}].title`,w),s(`ingredients[${x}]._id`,g),v(I=>{const P=[...I];return P[x]=S,P})},F=()=>{const S={name:""};s("ingredients",[...e.ingredients,S]),v(x=>[...x,null])},f=S=>{const x=[...e.ingredients];x.splice(S,1),s("ingredients",x),v(g=>{const w=[...g];return w.splice(S,1),w})},A=e.ingredients.length===1;return o.jsxs(Hs,{children:[o.jsxs(Ws,{children:[o.jsx("h4",{className:"titleIngredientsForm",children:"Ingredients"}),o.jsxs("div",{className:"containerIngredientInputs",children:[o.jsx(Pe,{className:"buttonAddRemove",type:"button",onClick:()=>f(e.ingredients.length-1),disabled:A,children:o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeOpacity:"0.3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),o.jsx("p",{className:"quantityTitle",children:e.ingredients.length}),o.jsx(Pe,{type:"button",onClick:F,className:"buttonAddRemove",children:o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M8 2.5V13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]}),o.jsx(Ks,{children:e.ingredients.map((S,x)=>o.jsxs("div",{className:"inputsWrapper",children:[o.jsx(Le,{className:"styledSelect",name:`ingredients[${x}].title`,options:c,value:y[x],onChange:g=>C(g,x),onBlur:a,styles:qs}),o.jsx(K,{className:"styledInput",type:"text",name:`ingredients[${x}].measure`,placeholder:"1 cl",value:S.measure||"",onChange:n,onBlur:a}),o.jsx(Pe,{type:"button",onClick:()=>f(x),disabled:A,children:o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]},x))})]})},Js=O.div`
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
`,Qs=O.div`
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
`,Xs=({values:e,errors:t,handleChange:r})=>o.jsxs(Js,{children:[o.jsx(Qs,{children:o.jsx("h4",{children:"Recipe Preparation"})}),o.jsx(K,{as:"textarea",className:"inputField",placeholder:"Enter the recipe",name:"instructions",onChange:n=>{r(n)},value:e.instructions})]}),Zs=()=>(Ur(),o.jsx($s,{initialValues:{drink:"",ingredients:[{title:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic",description:""},validationSchema:Lr().shape({drink:re().required("This field is mandatory"),description:re().required("This field is mandatory"),ingredients:Nr().required("This field is mandatory"),instructions:re().required("This field is mandatory"),category:re().required("This field is mandatory"),glass:re().required("This field is mandatory"),alcoholic:re().required("Select the type of cocktail"),drinkThumb:Dr()}),onSubmit:async e=>{const t=new FormData;t.append("drink",e.drink),t.append("category",e.category),t.append("description",e.description),t.append("alcoholic",e.alcoholic),t.append("instructions",e.instructions),t.append("glass",e.glass),t.append("drinkThumb",e.drinkThumb);const r=JSON.stringify(e.ingredients);t.append("ingredients",r);try{console.log(e)}catch(n){console.error("Error:",n)}},children:({values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:s})=>o.jsx(br,{children:o.jsxs(Rs,{children:[o.jsx(Gs,{values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:s}),o.jsx(Ys,{values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:s}),o.jsx(Xs,{values:e,errors:t,touched:r,handleChange:n,handleBlur:a}),o.jsx("button",{className:"buttonAdd",type:"submit",children:"Add"})]})})})),ec=O.ul`
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
`,tc=()=>o.jsxs(ec,{children:[o.jsx("li",{children:o.jsxs("a",{href:"",children:[o.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),o.jsxs("div",{children:[o.jsx("h4",{children:"Lone Tree Cooler"}),o.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),o.jsx("li",{children:o.jsxs("a",{href:"",children:[o.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),o.jsxs("div",{children:[o.jsx("h4",{children:"Lone Tree Cooler"}),o.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),o.jsx("li",{children:o.jsxs("a",{href:"",children:[o.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),o.jsxs("div",{children:[o.jsx("h4",{children:"Lone Tree Cooler"}),o.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),o.jsx("li",{children:o.jsxs("a",{href:"",children:[o.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),o.jsxs("div",{children:[o.jsx("h4",{children:"Lone Tree Cooler"}),o.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})})]}),cc=()=>o.jsx(Rr,{children:o.jsxs(Gr,{children:[o.jsx(Vr,{title:"Add drink"}),o.jsxs(Hr,{children:[o.jsx(Zs,{}),o.jsxs(Wr,{children:[o.jsxs("div",{children:[o.jsx(gt,{mb:"20px",children:"Follow Us"}),o.jsx(Pr,{})]}),o.jsxs("div",{children:[o.jsx(gt,{mb:"28px",children:"Popular Drinks"}),o.jsx(tc,{})]})]})]})]})});export{cc as default};
