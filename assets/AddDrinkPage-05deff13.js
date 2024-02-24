import{u as O,aa as Pr,r as d,c as pe,j as s,d as Ke,ab as Dr,k as Nr,ac as Lr,f as zr,h as Ur,ad as Vr,C as Br,ae as Hr}from"./index-68bbb3e8.js";import{c as Gr,a as K,b as Wr,d as qr}from"./index.esm-e99e3736.js";import{s as Kr,b as Yr,S as ze,a as Xr}from"./react-select.esm-31538e1a.js";import{a as Jr}from"./auth.selectors-a6f26b37.js";import{f as Zr}from"./drinks.selectors-396898b9.js";import{P as Qr}from"./PageTitle-e10e6b8e.js";const en=O.div`
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
`,tn=O.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,rn=O.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }
`,yt=O.p`
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
`;var nn=function(t){return an(t)&&!on(t)};function an(e){return!!e&&typeof e=="object"}function on(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||ln(e)}var sn=typeof Symbol=="function"&&Symbol.for,cn=sn?Symbol.for("react.element"):60103;function ln(e){return e.$$typeof===cn}function dn(e){return Array.isArray(e)?[]:{}}function Se(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ge(dn(e),e,t):e}function un(e,t,r){return e.concat(t).map(function(n){return Se(n,r)})}function fn(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(a){n[a]=Se(e[a],r)}),Object.keys(t).forEach(function(a){!r.isMergeableObject(t[a])||!e[a]?n[a]=Se(t[a],r):n[a]=ge(e[a],t[a],r)}),n}function ge(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||un,r.isMergeableObject=r.isMergeableObject||nn;var n=Array.isArray(t),a=Array.isArray(e),o=n===a;return o?n?r.arrayMerge(e,t,r):fn(e,t,r):Se(t,r)}ge.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return ge(n,a,r)},{})};var Ue=ge,pn=typeof global=="object"&&global&&global.Object===Object&&global;const qt=pn;var hn=typeof self=="object"&&self&&self.Object===Object&&self,gn=qt||hn||Function("return this")();const L=gn;var mn=L.Symbol;const W=mn;var Kt=Object.prototype,yn=Kt.hasOwnProperty,xn=Kt.toString,fe=W?W.toStringTag:void 0;function vn(e){var t=yn.call(e,fe),r=e[fe];try{e[fe]=void 0;var n=!0}catch{}var a=xn.call(e);return n&&(t?e[fe]=r:delete e[fe]),a}var bn=Object.prototype,wn=bn.toString;function Tn(e){return wn.call(e)}var Sn="[object Null]",jn="[object Undefined]",xt=W?W.toStringTag:void 0;function ee(e){return e==null?e===void 0?jn:Sn:xt&&xt in Object(e)?vn(e):Tn(e)}function Yt(e,t){return function(r){return e(t(r))}}var En=Yt(Object.getPrototypeOf,Object);const Ye=En;function te(e){return e!=null&&typeof e=="object"}var An="[object Object]",_n=Function.prototype,In=Object.prototype,Xt=_n.toString,$n=In.hasOwnProperty,On=Xt.call(Object);function vt(e){if(!te(e)||ee(e)!=An)return!1;var t=Ye(e);if(t===null)return!0;var r=$n.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Xt.call(r)==On}var bt=Array.isArray,wt=Object.keys,Cn=Object.prototype.hasOwnProperty,Fn=typeof Element<"u";function Ve(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=bt(e),n=bt(t),a,o,c;if(r&&n){if(o=e.length,o!=t.length)return!1;for(a=o;a--!==0;)if(!Ve(e[a],t[a]))return!1;return!0}if(r!=n)return!1;var g=e instanceof Date,x=t instanceof Date;if(g!=x)return!1;if(g&&x)return e.getTime()==t.getTime();var v=e instanceof RegExp,$=t instanceof RegExp;if(v!=$)return!1;if(v&&$)return e.toString()==t.toString();var C=wt(e);if(o=C.length,o!==wt(t).length)return!1;for(a=o;a--!==0;)if(!Cn.call(t,C[a]))return!1;if(Fn&&e instanceof Element&&t instanceof Element)return e===t;for(a=o;a--!==0;)if(c=C[a],!(c==="_owner"&&e.$$typeof)&&!Ve(e[c],t[c]))return!1;return!0}return e!==e&&t!==t}var Mn=function(t,r){try{return Ve(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const X=Pr(Mn);var Rn=!0;function kn(e,t){if(!Rn){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function Pn(){this.__data__=[],this.size=0}function Jt(e,t){return e===t||e!==e&&t!==t}function je(e,t){for(var r=e.length;r--;)if(Jt(e[r][0],t))return r;return-1}var Dn=Array.prototype,Nn=Dn.splice;function Ln(e){var t=this.__data__,r=je(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Nn.call(t,r,1),--this.size,!0}function zn(e){var t=this.__data__,r=je(t,e);return r<0?void 0:t[r][1]}function Un(e){return je(this.__data__,e)>-1}function Vn(e,t){var r=this.__data__,n=je(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function V(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}V.prototype.clear=Pn;V.prototype.delete=Ln;V.prototype.get=zn;V.prototype.has=Un;V.prototype.set=Vn;function Bn(){this.__data__=new V,this.size=0}function Hn(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Gn(e){return this.__data__.get(e)}function Wn(e){return this.__data__.has(e)}function xe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var qn="[object AsyncFunction]",Kn="[object Function]",Yn="[object GeneratorFunction]",Xn="[object Proxy]";function Zt(e){if(!xe(e))return!1;var t=ee(e);return t==Kn||t==Yn||t==qn||t==Xn}var Jn=L["__core-js_shared__"];const ke=Jn;var Tt=function(){var e=/[^.]+$/.exec(ke&&ke.keys&&ke.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Zn(e){return!!Tt&&Tt in e}var Qn=Function.prototype,ei=Qn.toString;function re(e){if(e!=null){try{return ei.call(e)}catch{}try{return e+""}catch{}}return""}var ti=/[\\^$.*+?()[\]{}|]/g,ri=/^\[object .+?Constructor\]$/,ni=Function.prototype,ii=Object.prototype,ai=ni.toString,oi=ii.hasOwnProperty,si=RegExp("^"+ai.call(oi).replace(ti,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ci(e){if(!xe(e)||Zn(e))return!1;var t=Zt(e)?si:ri;return t.test(re(e))}function li(e,t){return e==null?void 0:e[t]}function ne(e,t){var r=li(e,t);return ci(r)?r:void 0}var di=ne(L,"Map");const me=di;var ui=ne(Object,"create");const ye=ui;function fi(){this.__data__=ye?ye(null):{},this.size=0}function pi(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var hi="__lodash_hash_undefined__",gi=Object.prototype,mi=gi.hasOwnProperty;function yi(e){var t=this.__data__;if(ye){var r=t[e];return r===hi?void 0:r}return mi.call(t,e)?t[e]:void 0}var xi=Object.prototype,vi=xi.hasOwnProperty;function bi(e){var t=this.__data__;return ye?t[e]!==void 0:vi.call(t,e)}var wi="__lodash_hash_undefined__";function Ti(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ye&&t===void 0?wi:t,this}function Q(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Q.prototype.clear=fi;Q.prototype.delete=pi;Q.prototype.get=yi;Q.prototype.has=bi;Q.prototype.set=Ti;function Si(){this.size=0,this.__data__={hash:new Q,map:new(me||V),string:new Q}}function ji(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Ee(e,t){var r=e.__data__;return ji(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Ei(e){var t=Ee(this,e).delete(e);return this.size-=t?1:0,t}function Ai(e){return Ee(this,e).get(e)}function _i(e){return Ee(this,e).has(e)}function Ii(e,t){var r=Ee(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function q(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}q.prototype.clear=Si;q.prototype.delete=Ei;q.prototype.get=Ai;q.prototype.has=_i;q.prototype.set=Ii;var $i=200;function Oi(e,t){var r=this.__data__;if(r instanceof V){var n=r.__data__;if(!me||n.length<$i-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new q(n)}return r.set(e,t),this.size=r.size,this}function de(e){var t=this.__data__=new V(e);this.size=t.size}de.prototype.clear=Bn;de.prototype.delete=Hn;de.prototype.get=Gn;de.prototype.has=Wn;de.prototype.set=Oi;function Ci(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Fi=function(){try{var e=ne(Object,"defineProperty");return e({},"",{}),e}catch{}}();const St=Fi;function Qt(e,t,r){t=="__proto__"&&St?St(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Mi=Object.prototype,Ri=Mi.hasOwnProperty;function er(e,t,r){var n=e[t];(!(Ri.call(e,t)&&Jt(n,r))||r===void 0&&!(t in e))&&Qt(e,t,r)}function Ae(e,t,r,n){var a=!r;r||(r={});for(var o=-1,c=t.length;++o<c;){var g=t[o],x=n?n(r[g],e[g],g,r,e):void 0;x===void 0&&(x=e[g]),a?Qt(r,g,x):er(r,g,x)}return r}function ki(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Pi="[object Arguments]";function jt(e){return te(e)&&ee(e)==Pi}var tr=Object.prototype,Di=tr.hasOwnProperty,Ni=tr.propertyIsEnumerable,Li=jt(function(){return arguments}())?jt:function(e){return te(e)&&Di.call(e,"callee")&&!Ni.call(e,"callee")};const zi=Li;var Ui=Array.isArray;const ve=Ui;function Vi(){return!1}var rr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Et=rr&&typeof module=="object"&&module&&!module.nodeType&&module,Bi=Et&&Et.exports===rr,At=Bi?L.Buffer:void 0,Hi=At?At.isBuffer:void 0,Gi=Hi||Vi;const nr=Gi;var Wi=9007199254740991,qi=/^(?:0|[1-9]\d*)$/;function Ki(e,t){var r=typeof e;return t=t??Wi,!!t&&(r=="number"||r!="symbol"&&qi.test(e))&&e>-1&&e%1==0&&e<t}var Yi=9007199254740991;function ir(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Yi}var Xi="[object Arguments]",Ji="[object Array]",Zi="[object Boolean]",Qi="[object Date]",ea="[object Error]",ta="[object Function]",ra="[object Map]",na="[object Number]",ia="[object Object]",aa="[object RegExp]",oa="[object Set]",sa="[object String]",ca="[object WeakMap]",la="[object ArrayBuffer]",da="[object DataView]",ua="[object Float32Array]",fa="[object Float64Array]",pa="[object Int8Array]",ha="[object Int16Array]",ga="[object Int32Array]",ma="[object Uint8Array]",ya="[object Uint8ClampedArray]",xa="[object Uint16Array]",va="[object Uint32Array]",A={};A[ua]=A[fa]=A[pa]=A[ha]=A[ga]=A[ma]=A[ya]=A[xa]=A[va]=!0;A[Xi]=A[Ji]=A[la]=A[Zi]=A[da]=A[Qi]=A[ea]=A[ta]=A[ra]=A[na]=A[ia]=A[aa]=A[oa]=A[sa]=A[ca]=!1;function ba(e){return te(e)&&ir(e.length)&&!!A[ee(e)]}function Xe(e){return function(t){return e(t)}}var ar=typeof exports=="object"&&exports&&!exports.nodeType&&exports,he=ar&&typeof module=="object"&&module&&!module.nodeType&&module,wa=he&&he.exports===ar,Pe=wa&&qt.process,Ta=function(){try{var e=he&&he.require&&he.require("util").types;return e||Pe&&Pe.binding&&Pe.binding("util")}catch{}}();const le=Ta;var _t=le&&le.isTypedArray,Sa=_t?Xe(_t):ba;const ja=Sa;var Ea=Object.prototype,Aa=Ea.hasOwnProperty;function or(e,t){var r=ve(e),n=!r&&zi(e),a=!r&&!n&&nr(e),o=!r&&!n&&!a&&ja(e),c=r||n||a||o,g=c?ki(e.length,String):[],x=g.length;for(var v in e)(t||Aa.call(e,v))&&!(c&&(v=="length"||a&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Ki(v,x)))&&g.push(v);return g}var _a=Object.prototype;function Je(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||_a;return e===r}var Ia=Yt(Object.keys,Object);const $a=Ia;var Oa=Object.prototype,Ca=Oa.hasOwnProperty;function Fa(e){if(!Je(e))return $a(e);var t=[];for(var r in Object(e))Ca.call(e,r)&&r!="constructor"&&t.push(r);return t}function sr(e){return e!=null&&ir(e.length)&&!Zt(e)}function Ze(e){return sr(e)?or(e):Fa(e)}function Ma(e,t){return e&&Ae(t,Ze(t),e)}function Ra(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var ka=Object.prototype,Pa=ka.hasOwnProperty;function Da(e){if(!xe(e))return Ra(e);var t=Je(e),r=[];for(var n in e)n=="constructor"&&(t||!Pa.call(e,n))||r.push(n);return r}function Qe(e){return sr(e)?or(e,!0):Da(e)}function Na(e,t){return e&&Ae(t,Qe(t),e)}var cr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,It=cr&&typeof module=="object"&&module&&!module.nodeType&&module,La=It&&It.exports===cr,$t=La?L.Buffer:void 0,Ot=$t?$t.allocUnsafe:void 0;function za(e,t){if(t)return e.slice();var r=e.length,n=Ot?Ot(r):new e.constructor(r);return e.copy(n),n}function lr(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function Ua(e,t){for(var r=-1,n=e==null?0:e.length,a=0,o=[];++r<n;){var c=e[r];t(c,r,e)&&(o[a++]=c)}return o}function dr(){return[]}var Va=Object.prototype,Ba=Va.propertyIsEnumerable,Ct=Object.getOwnPropertySymbols,Ha=Ct?function(e){return e==null?[]:(e=Object(e),Ua(Ct(e),function(t){return Ba.call(e,t)}))}:dr;const et=Ha;function Ga(e,t){return Ae(e,et(e),t)}function ur(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var Wa=Object.getOwnPropertySymbols,qa=Wa?function(e){for(var t=[];e;)ur(t,et(e)),e=Ye(e);return t}:dr;const fr=qa;function Ka(e,t){return Ae(e,fr(e),t)}function pr(e,t,r){var n=t(e);return ve(e)?n:ur(n,r(e))}function Ya(e){return pr(e,Ze,et)}function Xa(e){return pr(e,Qe,fr)}var Ja=ne(L,"DataView");const Be=Ja;var Za=ne(L,"Promise");const He=Za;var Qa=ne(L,"Set");const Ge=Qa;var eo=ne(L,"WeakMap");const We=eo;var Ft="[object Map]",to="[object Object]",Mt="[object Promise]",Rt="[object Set]",kt="[object WeakMap]",Pt="[object DataView]",ro=re(Be),no=re(me),io=re(He),ao=re(Ge),oo=re(We),J=ee;(Be&&J(new Be(new ArrayBuffer(1)))!=Pt||me&&J(new me)!=Ft||He&&J(He.resolve())!=Mt||Ge&&J(new Ge)!=Rt||We&&J(new We)!=kt)&&(J=function(e){var t=ee(e),r=t==to?e.constructor:void 0,n=r?re(r):"";if(n)switch(n){case ro:return Pt;case no:return Ft;case io:return Mt;case ao:return Rt;case oo:return kt}return t});const tt=J;var so=Object.prototype,co=so.hasOwnProperty;function lo(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&co.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var uo=L.Uint8Array;const Dt=uo;function rt(e){var t=new e.constructor(e.byteLength);return new Dt(t).set(new Dt(e)),t}function fo(e,t){var r=t?rt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var po=/\w*$/;function ho(e){var t=new e.constructor(e.source,po.exec(e));return t.lastIndex=e.lastIndex,t}var Nt=W?W.prototype:void 0,Lt=Nt?Nt.valueOf:void 0;function go(e){return Lt?Object(Lt.call(e)):{}}function mo(e,t){var r=t?rt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var yo="[object Boolean]",xo="[object Date]",vo="[object Map]",bo="[object Number]",wo="[object RegExp]",To="[object Set]",So="[object String]",jo="[object Symbol]",Eo="[object ArrayBuffer]",Ao="[object DataView]",_o="[object Float32Array]",Io="[object Float64Array]",$o="[object Int8Array]",Oo="[object Int16Array]",Co="[object Int32Array]",Fo="[object Uint8Array]",Mo="[object Uint8ClampedArray]",Ro="[object Uint16Array]",ko="[object Uint32Array]";function Po(e,t,r){var n=e.constructor;switch(t){case Eo:return rt(e);case yo:case xo:return new n(+e);case Ao:return fo(e,r);case _o:case Io:case $o:case Oo:case Co:case Fo:case Mo:case Ro:case ko:return mo(e,r);case vo:return new n;case bo:case So:return new n(e);case wo:return ho(e);case To:return new n;case jo:return go(e)}}var zt=Object.create,Do=function(){function e(){}return function(t){if(!xe(t))return{};if(zt)return zt(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const No=Do;function Lo(e){return typeof e.constructor=="function"&&!Je(e)?No(Ye(e)):{}}var zo="[object Map]";function Uo(e){return te(e)&&tt(e)==zo}var Ut=le&&le.isMap,Vo=Ut?Xe(Ut):Uo;const Bo=Vo;var Ho="[object Set]";function Go(e){return te(e)&&tt(e)==Ho}var Vt=le&&le.isSet,Wo=Vt?Xe(Vt):Go;const qo=Wo;var Ko=1,Yo=2,Xo=4,hr="[object Arguments]",Jo="[object Array]",Zo="[object Boolean]",Qo="[object Date]",es="[object Error]",gr="[object Function]",ts="[object GeneratorFunction]",rs="[object Map]",ns="[object Number]",mr="[object Object]",is="[object RegExp]",as="[object Set]",os="[object String]",ss="[object Symbol]",cs="[object WeakMap]",ls="[object ArrayBuffer]",ds="[object DataView]",us="[object Float32Array]",fs="[object Float64Array]",ps="[object Int8Array]",hs="[object Int16Array]",gs="[object Int32Array]",ms="[object Uint8Array]",ys="[object Uint8ClampedArray]",xs="[object Uint16Array]",vs="[object Uint32Array]",j={};j[hr]=j[Jo]=j[ls]=j[ds]=j[Zo]=j[Qo]=j[us]=j[fs]=j[ps]=j[hs]=j[gs]=j[rs]=j[ns]=j[mr]=j[is]=j[as]=j[os]=j[ss]=j[ms]=j[ys]=j[xs]=j[vs]=!0;j[es]=j[gr]=j[cs]=!1;function Te(e,t,r,n,a,o){var c,g=t&Ko,x=t&Yo,v=t&Xo;if(r&&(c=a?r(e,n,a,o):r(e)),c!==void 0)return c;if(!xe(e))return e;var $=ve(e);if($){if(c=lo(e),!g)return lr(e,c)}else{var C=tt(e),f=C==gr||C==ts;if(nr(e))return za(e,g);if(C==mr||C==hr||f&&!a){if(c=x||f?{}:Lo(e),!g)return x?Ka(e,Na(c,e)):Ga(e,Ma(c,e))}else{if(!j[C])return a?e:{};c=Po(e,C,g)}}o||(o=new de);var E=o.get(e);if(E)return E;o.set(e,c),qo(e)?e.forEach(function(m){c.add(Te(m,t,r,m,e,o))}):Bo(e)&&e.forEach(function(m,b){c.set(b,Te(m,t,r,b,e,o))});var M=v?x?Xa:Ya:x?Qe:Ze,S=$?void 0:M(e);return Ci(S||e,function(m,b){S&&(b=m,m=e[b]),er(c,b,Te(m,t,r,b,e,o))}),c}var bs=4;function Bt(e){return Te(e,bs)}function yr(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var ws="[object Symbol]";function nt(e){return typeof e=="symbol"||te(e)&&ee(e)==ws}var Ts="Expected a function";function it(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Ts);var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var c=e.apply(this,n);return r.cache=o.set(a,c)||o,c};return r.cache=new(it.Cache||q),r}it.Cache=q;var Ss=500;function js(e){var t=it(e,function(n){return r.size===Ss&&r.clear(),n}),r=t.cache;return t}var Es=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,As=/\\(\\)?/g,_s=js(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Es,function(r,n,a,o){t.push(a?o.replace(As,"$1"):n||r)}),t});const Is=_s;var $s=1/0;function Os(e){if(typeof e=="string"||nt(e))return e;var t=e+"";return t=="0"&&1/e==-$s?"-0":t}var Cs=1/0,Ht=W?W.prototype:void 0,Gt=Ht?Ht.toString:void 0;function xr(e){if(typeof e=="string")return e;if(ve(e))return yr(e,xr)+"";if(nt(e))return Gt?Gt.call(e):"";var t=e+"";return t=="0"&&1/e==-Cs?"-0":t}function Fs(e){return e==null?"":xr(e)}function vr(e){return ve(e)?yr(e,Os):nt(e)?[e]:lr(Is(Fs(e)))}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function se(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var _e=d.createContext(void 0);_e.displayName="FormikContext";var Ms=_e.Provider;_e.Consumer;function br(){var e=d.useContext(_e);return e||kn(!1),e}var k=function(t){return typeof t=="function"},Ie=function(t){return t!==null&&typeof t=="object"},Rs=function(t){return String(Math.floor(Number(t)))===t},De=function(t){return Object.prototype.toString.call(t)==="[object String]"},ks=function(t){return d.Children.count(t)===0},Ne=function(t){return Ie(t)&&k(t.then)};function R(e,t,r,n){n===void 0&&(n=0);for(var a=vr(t);e&&n<a.length;)e=e[a[n++]];return n!==a.length&&!e||e===void 0?r:e}function Z(e,t,r){for(var n=Bt(e),a=n,o=0,c=vr(t);o<c.length-1;o++){var g=c[o],x=R(e,c.slice(0,o+1));if(x&&(Ie(x)||Array.isArray(x)))a=a[g]=Bt(x);else{var v=c[o+1];a=a[g]=Rs(v)&&Number(v)>=0?[]:{}}}return(o===0?e:a)[c[o]]===r?e:(r===void 0?delete a[c[o]]:a[c[o]]=r,o===0&&r===void 0&&delete n[c[o]],n)}function wr(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var a=0,o=Object.keys(e);a<o.length;a++){var c=o[a],g=e[c];Ie(g)?r.get(g)||(r.set(g,!0),n[c]=Array.isArray(g)?[]:{},wr(g,t,r,n[c])):n[c]=t}return n}function Ps(e,t){switch(t.type){case"SET_VALUES":return _({},e,{values:t.payload});case"SET_TOUCHED":return _({},e,{touched:t.payload});case"SET_ERRORS":return X(e.errors,t.payload)?e:_({},e,{errors:t.payload});case"SET_STATUS":return _({},e,{status:t.payload});case"SET_ISSUBMITTING":return _({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return _({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return _({},e,{values:Z(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return _({},e,{touched:Z(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return _({},e,{errors:Z(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return _({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return _({},e,{touched:wr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return _({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return _({},e,{isSubmitting:!1});default:return e}}var Y={},we={};function Ds(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,a=n===void 0?!0:n,o=e.validateOnMount,c=o===void 0?!1:o,g=e.isInitialValid,x=e.enableReinitialize,v=x===void 0?!1:x,$=e.onSubmit,C=se(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=_({validateOnChange:r,validateOnBlur:a,validateOnMount:c,onSubmit:$},C),E=d.useRef(f.initialValues),M=d.useRef(f.initialErrors||Y),S=d.useRef(f.initialTouched||we),m=d.useRef(f.initialStatus),b=d.useRef(!1),I=d.useRef({});d.useEffect(function(){return b.current=!0,function(){b.current=!1}},[]);var z=d.useState(0),B=z[1],ie=d.useRef({values:f.initialValues,errors:f.initialErrors||Y,touched:f.initialTouched||we,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),w=ie.current,h=d.useCallback(function(i){var l=ie.current;ie.current=Ps(l,i),l!==ie.current&&B(function(u){return u+1})},[]),H=d.useCallback(function(i,l){return new Promise(function(u,p){var y=f.validate(i,l);y==null?u(Y):Ne(y)?y.then(function(T){u(T||Y)},function(T){p(T)}):u(y)})},[f.validate]),D=d.useCallback(function(i,l){var u=f.validationSchema,p=k(u)?u(l):u,y=l&&p.validateAt?p.validateAt(l,i):zs(i,p);return new Promise(function(T,F){y.then(function(){T(Y)},function(U){U.name==="ValidationError"?T(Ls(U)):F(U)})})},[f.validationSchema]),G=d.useCallback(function(i,l){return new Promise(function(u){return u(I.current[i].validate(l))})},[]),at=d.useCallback(function(i){var l=Object.keys(I.current).filter(function(p){return k(I.current[p].validate)}),u=l.length>0?l.map(function(p){return G(p,R(i,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(u).then(function(p){return p.reduce(function(y,T,F){return T==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||T&&(y=Z(y,l[F],T)),y},{})})},[G]),Sr=d.useCallback(function(i){return Promise.all([at(i),f.validationSchema?D(i):{},f.validate?H(i):{}]).then(function(l){var u=l[0],p=l[1],y=l[2],T=Ue.all([u,p,y],{arrayMerge:Us});return T})},[f.validate,f.validationSchema,at,H,D]),N=P(function(i){return i===void 0&&(i=w.values),h({type:"SET_ISVALIDATING",payload:!0}),Sr(i).then(function(l){return b.current&&(h({type:"SET_ISVALIDATING",payload:!1}),h({type:"SET_ERRORS",payload:l})),l})});d.useEffect(function(){c&&b.current===!0&&X(E.current,f.initialValues)&&N(E.current)},[c,N]);var ue=d.useCallback(function(i){var l=i&&i.values?i.values:E.current,u=i&&i.errors?i.errors:M.current?M.current:f.initialErrors||{},p=i&&i.touched?i.touched:S.current?S.current:f.initialTouched||{},y=i&&i.status?i.status:m.current?m.current:f.initialStatus;E.current=l,M.current=u,S.current=p,m.current=y;var T=function(){h({type:"RESET_FORM",payload:{isSubmitting:!!i&&!!i.isSubmitting,errors:u,touched:p,status:y,values:l,isValidating:!!i&&!!i.isValidating,submitCount:i&&i.submitCount&&typeof i.submitCount=="number"?i.submitCount:0}})};if(f.onReset){var F=f.onReset(w.values,gt);Ne(F)?F.then(T):T()}else T()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){b.current===!0&&!X(E.current,f.initialValues)&&v&&(E.current=f.initialValues,ue(),c&&N(E.current))},[v,f.initialValues,ue,c,N]),d.useEffect(function(){v&&b.current===!0&&!X(M.current,f.initialErrors)&&(M.current=f.initialErrors||Y,h({type:"SET_ERRORS",payload:f.initialErrors||Y}))},[v,f.initialErrors]),d.useEffect(function(){v&&b.current===!0&&!X(S.current,f.initialTouched)&&(S.current=f.initialTouched||we,h({type:"SET_TOUCHED",payload:f.initialTouched||we}))},[v,f.initialTouched]),d.useEffect(function(){v&&b.current===!0&&!X(m.current,f.initialStatus)&&(m.current=f.initialStatus,h({type:"SET_STATUS",payload:f.initialStatus}))},[v,f.initialStatus,f.initialTouched]);var ot=P(function(i){if(I.current[i]&&k(I.current[i].validate)){var l=R(w.values,i),u=I.current[i].validate(l);return Ne(u)?(h({type:"SET_ISVALIDATING",payload:!0}),u.then(function(p){return p}).then(function(p){h({type:"SET_FIELD_ERROR",payload:{field:i,value:p}}),h({type:"SET_ISVALIDATING",payload:!1})})):(h({type:"SET_FIELD_ERROR",payload:{field:i,value:u}}),Promise.resolve(u))}else if(f.validationSchema)return h({type:"SET_ISVALIDATING",payload:!0}),D(w.values,i).then(function(p){return p}).then(function(p){h({type:"SET_FIELD_ERROR",payload:{field:i,value:R(p,i)}}),h({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),jr=d.useCallback(function(i,l){var u=l.validate;I.current[i]={validate:u}},[]),Er=d.useCallback(function(i){delete I.current[i]},[]),st=P(function(i,l){h({type:"SET_TOUCHED",payload:i});var u=l===void 0?a:l;return u?N(w.values):Promise.resolve()}),ct=d.useCallback(function(i){h({type:"SET_ERRORS",payload:i})},[]),lt=P(function(i,l){var u=k(i)?i(w.values):i;h({type:"SET_VALUES",payload:u});var p=l===void 0?r:l;return p?N(u):Promise.resolve()}),be=d.useCallback(function(i,l){h({type:"SET_FIELD_ERROR",payload:{field:i,value:l}})},[]),ae=P(function(i,l,u){h({type:"SET_FIELD_VALUE",payload:{field:i,value:l}});var p=u===void 0?r:u;return p?N(Z(w.values,i,l)):Promise.resolve()}),dt=d.useCallback(function(i,l){var u=l,p=i,y;if(!De(i)){i.persist&&i.persist();var T=i.target?i.target:i.currentTarget,F=T.type,U=T.name,Me=T.id,Re=T.value,Rr=T.checked,fc=T.outerHTML,mt=T.options,kr=T.multiple;u=l||U||Me,p=/number|range/.test(F)?(y=parseFloat(Re),isNaN(y)?"":y):/checkbox/.test(F)?Bs(R(w.values,u),Rr,Re):mt&&kr?Vs(mt):Re}u&&ae(u,p)},[ae,w.values]),$e=P(function(i){if(De(i))return function(l){return dt(l,i)};dt(i)}),oe=P(function(i,l,u){l===void 0&&(l=!0),h({type:"SET_FIELD_TOUCHED",payload:{field:i,value:l}});var p=u===void 0?a:u;return p?N(w.values):Promise.resolve()}),ut=d.useCallback(function(i,l){i.persist&&i.persist();var u=i.target,p=u.name,y=u.id,T=u.outerHTML,F=l||p||y;oe(F,!0)},[oe]),Oe=P(function(i){if(De(i))return function(l){return ut(l,i)};ut(i)}),ft=d.useCallback(function(i){k(i)?h({type:"SET_FORMIK_STATE",payload:i}):h({type:"SET_FORMIK_STATE",payload:function(){return i}})},[]),pt=d.useCallback(function(i){h({type:"SET_STATUS",payload:i})},[]),ht=d.useCallback(function(i){h({type:"SET_ISSUBMITTING",payload:i})},[]),Ce=P(function(){return h({type:"SUBMIT_ATTEMPT"}),N().then(function(i){var l=i instanceof Error,u=!l&&Object.keys(i).length===0;if(u){var p;try{if(p=_r(),p===void 0)return}catch(y){throw y}return Promise.resolve(p).then(function(y){return b.current&&h({type:"SUBMIT_SUCCESS"}),y}).catch(function(y){if(b.current)throw h({type:"SUBMIT_FAILURE"}),y})}else if(b.current&&(h({type:"SUBMIT_FAILURE"}),l))throw i})}),Ar=P(function(i){i&&i.preventDefault&&k(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&k(i.stopPropagation)&&i.stopPropagation(),Ce().catch(function(l){console.warn("Warning: An unhandled error was caught from submitForm()",l)})}),gt={resetForm:ue,validateForm:N,validateField:ot,setErrors:ct,setFieldError:be,setFieldTouched:oe,setFieldValue:ae,setStatus:pt,setSubmitting:ht,setTouched:st,setValues:lt,setFormikState:ft,submitForm:Ce},_r=P(function(){return $(w.values,gt)}),Ir=P(function(i){i&&i.preventDefault&&k(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&k(i.stopPropagation)&&i.stopPropagation(),ue()}),$r=d.useCallback(function(i){return{value:R(w.values,i),error:R(w.errors,i),touched:!!R(w.touched,i),initialValue:R(E.current,i),initialTouched:!!R(S.current,i),initialError:R(M.current,i)}},[w.errors,w.touched,w.values]),Or=d.useCallback(function(i){return{setValue:function(u,p){return ae(i,u,p)},setTouched:function(u,p){return oe(i,u,p)},setError:function(u){return be(i,u)}}},[ae,oe,be]),Cr=d.useCallback(function(i){var l=Ie(i),u=l?i.name:i,p=R(w.values,u),y={name:u,value:p,onChange:$e,onBlur:Oe};if(l){var T=i.type,F=i.value,U=i.as,Me=i.multiple;T==="checkbox"?F===void 0?y.checked=!!p:(y.checked=!!(Array.isArray(p)&&~p.indexOf(F)),y.value=F):T==="radio"?(y.checked=p===F,y.value=F):U==="select"&&Me&&(y.value=y.value||[],y.multiple=!0)}return y},[Oe,$e,w.values]),Fe=d.useMemo(function(){return!X(E.current,w.values)},[E.current,w.values]),Fr=d.useMemo(function(){return typeof g<"u"?Fe?w.errors&&Object.keys(w.errors).length===0:g!==!1&&k(g)?g(f):g:w.errors&&Object.keys(w.errors).length===0},[g,Fe,w.errors,f]),Mr=_({},w,{initialValues:E.current,initialErrors:M.current,initialTouched:S.current,initialStatus:m.current,handleBlur:Oe,handleChange:$e,handleReset:Ir,handleSubmit:Ar,resetForm:ue,setErrors:ct,setFormikState:ft,setFieldTouched:oe,setFieldValue:ae,setFieldError:be,setStatus:pt,setSubmitting:ht,setTouched:st,setValues:lt,submitForm:Ce,validateForm:N,validateField:ot,isValid:Fr,dirty:Fe,unregisterField:Er,registerField:jr,getFieldProps:Cr,getFieldMeta:$r,getFieldHelpers:Or,validateOnBlur:a,validateOnChange:r,validateOnMount:c});return Mr}function Ns(e){var t=Ds(e),r=e.component,n=e.children,a=e.render,o=e.innerRef;return d.useImperativeHandle(o,function(){return t}),d.createElement(Ms,{value:t},r?d.createElement(r,t):a?a(t):n?k(n)?n(t):ks(n)?null:d.Children.only(n):null)}function Ls(e){var t={};if(e.inner){if(e.inner.length===0)return Z(t,e.path,e.message);for(var a=e.inner,r=Array.isArray(a),n=0,a=r?a:a[Symbol.iterator]();;){var o;if(r){if(n>=a.length)break;o=a[n++]}else{if(n=a.next(),n.done)break;o=n.value}var c=o;R(t,c.path)||(t=Z(t,c.path,c.message))}}return t}function zs(e,t,r,n){r===void 0&&(r=!1);var a=qe(e);return t[r?"validateSync":"validate"](a,{abortEarly:!1,context:n||a})}function qe(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(a){return Array.isArray(a)===!0||vt(a)?qe(a):a!==""?a:void 0}):vt(e[n])?t[n]=qe(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Us(e,t,r){var n=e.slice();return t.forEach(function(o,c){if(typeof n[c]>"u"){var g=r.clone!==!1,x=g&&r.isMergeableObject(o);n[c]=x?Ue(Array.isArray(o)?[]:{},o,r):o}else r.isMergeableObject(o)?n[c]=Ue(e[c],o,r):e.indexOf(o)===-1&&n.push(o)}),n}function Vs(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Bs(e,t,r){if(typeof e=="boolean")return!!t;var n=[],a=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(r),a=o>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!a?n.concat(r):a?n.slice(0,o).concat(n.slice(o+1)):n}var Hs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function P(e){var t=d.useRef(e);return Hs(function(){t.current=e}),d.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current.apply(void 0,n)},[])}function ce(e){var t=e.validate,r=e.name,n=e.render,a=e.children,o=e.as,c=e.component,g=e.className,x=se(e,["validate","name","render","children","as","component","className"]),v=br(),$=se(v,["validate","validationSchema"]),C=$.registerField,f=$.unregisterField;d.useEffect(function(){return C(r,{validate:t}),function(){f(r)}},[C,f,r,t]);var E=$.getFieldProps(_({name:r},x)),M=$.getFieldMeta(r),S={field:E,form:$};if(n)return n(_({},S,{meta:M}));if(k(a))return a(_({},S,{meta:M}));if(c){if(typeof c=="string"){var m=x.innerRef,b=se(x,["innerRef"]);return d.createElement(c,_({ref:m},E,b,{className:g}),a)}return d.createElement(c,_({field:E,form:$},x,{className:g}),a)}var I=o||"input";if(typeof I=="string"){var z=x.innerRef,B=se(x,["innerRef"]);return d.createElement(I,_({ref:z},E,B,{className:g}),a)}return d.createElement(I,_({},E,x,{className:g}),a)}var Tr=d.forwardRef(function(e,t){var r=e.action,n=se(e,["action"]),a=r??"#",o=br(),c=o.handleReset,g=o.handleSubmit;return d.createElement("form",_({onSubmit:g,ref:t,onReset:c,action:a},n))});Tr.displayName="Form";const Gs=O.div`
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
`,Ws=O.div`
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
`,qs=O.div`
  width: 100%;
  height: 320px;
  background: rgba(22, 31, 55, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
  .labelPhoto {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`,Ks=O.div`
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
`,Ys=O.label`
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
`;const Xs=O.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,Js=O.div`
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
`,Wt={dropdownIndicator:(e,t)=>({...e,transform:t.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(e,{isFocused:t})=>({...e,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),placeholder:(e,{isFocused:t})=>({...e,fontSize:"14px",boxShadow:"none",cursor:"pointer",color:"#f3f3f3",display:"flex",alignItems:"center",fontWeight:"400",fontSize:"14px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"16px"}}),menu:e=>({...e,position:"absolute",width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px",right:"-10%","@media only screen and (min-width: 1440px)":{...e["@media only screen and (min-width: 1440px)"],width:"154px",right:"-0%"}},backgroundColor:"#161F37",borderRadius:"12px"}),indicatorSeparator:e=>({...e,display:"none"}),valueContainer:e=>({...e,padding:0}),singleValue:e=>({...e,color:"#f3f3f3"}),option:(e,{isFocused:t,isSelected:r})=>({...e,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...e["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:t?"#f3f3f375":r?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},Zs=O.div`
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
`;function Qs(e){const t=new Date,r=new Date(e);let n=t.getFullYear()-r.getFullYear();const a=t.getMonth()-r.getMonth();return(a<0||a===0&&t.getDate()<r.getDate())&&n--,n}const ec=({values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:o})=>{const c=pe(Kr),g=pe(Yr),x=pe(Jr),[v,$]=d.useState(null),[C,f]=d.useState([]),[E,M]=d.useState([]),[S,m]=d.useState([]),[b,I]=d.useState([]),z=Qs(x.dateOfBirth)<18;d.useEffect(()=>{async function h(){try{const D=c.map(({category:G})=>({value:G,label:G}));f(D)}catch(D){console.error("Помилка:",D)}}async function H(){try{const D=g.map(({glass:G})=>({value:G,label:G}));M(D)}catch(D){console.error("Ошибка при загрузці скла:",D)}}h(),H()},[c,g]);const B=h=>{m(h),o("category",h.value)},ie=h=>{I(h),o("glass",h.value)},w=h=>{const H=h.target.files[0];o("drinkThumb",H),$(H?URL.createObjectURL(H):null)};return s.jsxs(Ws,{children:[s.jsx(qs,{children:v?s.jsxs("label",{className:"labelPhoto",children:[s.jsx("input",{style:{display:"none"},id:"drinkThumb",type:"file",name:"drinkThumb",accept:"drinkThumb/*",onChange:h=>w(h)}),s.jsx("img",{className:"labelPhoto",src:v,alt:"Selected"})]}):s.jsxs(Ks,{children:[s.jsxs(Ys,{children:[s.jsxs("svg",{width:"29",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M14.5 5.8335V22.1668",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M6.33203 14H22.6654",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx("input",{style:{display:"none"},id:"drinkThumb",type:"file",name:"drinkThumb",accept:"drinkThumb/*",onChange:h=>w(h)})]}),s.jsx("p",{children:"Add Image"})]})}),s.jsxs(Xs,{children:[s.jsxs(Js,{children:[s.jsx("div",{className:"styledDivInput",children:s.jsx(ce,{className:"styledInputText",placeholder:"Enter item title",type:"text",id:"drink",name:"drink",onChange:h=>{n(h)}})}),s.jsx("div",{className:"styledDivInput",children:s.jsx(ce,{className:"styledInputText",placeholder:"Enter item title",id:"shortDescription",name:"shortDescription",onChange:h=>{n(h)}})}),s.jsx("div",{className:"styledDivInput",children:s.jsxs("label",{className:"labelSelect",children:[s.jsx("p",{className:"labelTitle",children:"Category"}),s.jsx(ze,{className:"selectStyled",name:"category",options:C,value:S,onChange:h=>B(h),styles:Wt})]})}),s.jsx("div",{className:"styledDivInput",children:s.jsxs("label",{className:"labelSelect",children:[s.jsx("p",{className:"labelTitle",children:"Glass"}),s.jsx(ze,{className:"selectStyled",name:"glass",options:E,value:b,onChange:h=>ie(h),styles:Wt})]})})]}),s.jsxs(Zs,{children:[s.jsxs("label",{className:"radioLabel",children:[s.jsx(ce,{className:"styledRadio",type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:n,disabled:z}),s.jsx("span",{className:"styledSpan",children:"Alcoholic"})]}),s.jsxs("label",{className:"radioLabel",children:[s.jsx(ce,{className:"styledRadio",type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:n}),s.jsx("span",{className:"styledSpan",children:"Non-alcoholic"})]})]})]})]})},tc=O.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,rc=O.div`
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
`,Le=O.button`
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
`,nc=O.div`
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
      opacity: 0.5;
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
`,ic={dropdownIndicator:(e,t)=>({...e,paddingRight:"18px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:t.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(e,t)=>({...e,width:"200px",height:"50px",border:"     1px solid rgba(243, 243, 243, 0.5)",background:"inherit",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:e=>({...e,marginTop:"2px",padding:"0px 12px",backgroundColor:" #161f37",borderRadius:"12px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:e=>({...e,display:"none"}),valueContainer:e=>({...e,padding:"0px 18px","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:e=>({...e,color:"#f3f3f3"}),placeholder:e=>({...e,"@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(e,{isFocused:t,isSelected:r})=>({...e,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:t?"#f3f3f375":r?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},ac=({values:e,errors:t,touched:r,handleChange:n,handleBlur:a,setFieldValue:o})=>{const c=pe(Xr),[g,x]=d.useState([]),[v,$]=d.useState([]);d.useEffect(()=>{async function S(){try{const b=(e.alcoholic==="Non alcoholic"?c.filter(I=>I.alcohol!=="Yes"):c).map(({title:I,_id:z})=>({label:I,value:z}));x(b)}catch(m){console.error("Помилка при завантаженні інгрідієнтів:",m)}}S()},[e.alcoholic,c]);const C=(S,m)=>{const{value:b,label:I}=S;o(`ingredients[${m}].title`,I),o(`ingredients[${m}].ingredientId`,b),$(z=>{const B=[...z];return B[m]=S,B})},f=()=>{const S={title:"",measure:""};o("ingredients",[...e.ingredients,S]),$(m=>[...m,null])},E=S=>{const m=[...e.ingredients];m.splice(S,1),o("ingredients",m),$(b=>{const I=[...b];return I.splice(S,1),I})},M=e.ingredients.length===1;return s.jsxs(tc,{children:[s.jsxs(rc,{children:[s.jsx("h4",{className:"titleIngredientsForm",children:"Ingredients"}),s.jsxs("div",{className:"containerIngredientInputs",children:[s.jsx(Le,{className:"buttonAddRemove",type:"button",onClick:()=>E(e.ingredients.length-1),disabled:M,children:s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeOpacity:"0.3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx("p",{className:"quantityTitle",children:e.ingredients.length}),s.jsx(Le,{type:"button",onClick:f,className:"buttonAddRemove",children:s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M8 2.5V13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]}),s.jsx(nc,{children:e.ingredients.map((S,m)=>s.jsxs("div",{className:"inputsWrapper",children:[s.jsx(ze,{className:"styledSelect",name:`ingredients[${m}].title`,options:g,value:v[m],onChange:b=>C(b,m),onBlur:a,styles:ic}),s.jsx(ce,{className:"styledInput",type:"text",name:`ingredients[${m}].measure`,placeholder:"1 cl",value:S.measure||"",onChange:n,onBlur:a}),s.jsx(Le,{type:"button",onClick:()=>E(m),disabled:M,children:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]},m))})]})},oc=O.div`
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
`,sc=O.div`
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
`,cc=({values:e,errors:t,handleChange:r})=>s.jsxs(oc,{children:[s.jsx(sc,{children:s.jsx("h4",{children:"Recipe Preparation"})}),s.jsx(ce,{as:"textarea",className:"inputField",placeholder:"Enter the recipe",name:"instructions",onChange:n=>{r(n)},value:e.instructions})]}),lc=()=>{const e=Ke();return s.jsx(Ns,{initialValues:{drink:"",ingredients:[{title:"",measure:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic",shortDescription:""},validationSchema:Gr().shape({drink:K().required("This field is mandatory"),shortDescription:K().required("This field is mandatory"),ingredients:Wr().required("This field is mandatory"),instructions:K().required("This field is mandatory"),instructions:K().required("This field is mandatory"),category:K().required("This field is mandatory"),glass:K().required("This field is mandatory"),alcoholic:K().required("Select the type of cocktail"),drinkThumb:qr().required("Select image please")}),onSubmit:async t=>{const r=new FormData;r.append("drink",t.drink),r.append("category",t.category),r.append("shortDescription",t.shortDescription),r.append("alcoholic",t.alcoholic),r.append("instructions",t.instructions),r.append("glass",t.glass),r.append("drinkThumb",t.drinkThumb);const n=JSON.stringify(t.ingredients);r.append("ingredients",n);try{const a=await e(Dr(r));a&&console.log(a)}catch(a){console.error("Error:",a)}},children:({values:t,errors:r,touched:n,handleChange:a,handleBlur:o,setFieldValue:c})=>s.jsx(Tr,{children:s.jsxs(Gs,{children:[s.jsx(ec,{values:t,errors:r,touched:n,handleChange:a,handleBlur:o,setFieldValue:c}),s.jsx(ac,{values:t,errors:r,touched:n,handleChange:a,handleBlur:o,setFieldValue:c}),s.jsx(cc,{values:t,errors:r,touched:n,handleChange:a,handleBlur:o}),s.jsx("button",{className:"buttonAdd",type:"submit",children:"Add"})]})})})},dc=O.ul`
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
`,uc=()=>{Ke();const e=pe(Zr);return s.jsx(dc,{children:e.map(t=>s.jsx("li",{children:s.jsxs(Nr,{to:`/drinks/${t._id}`,children:[s.jsx("img",{src:t.drinkThumb,alt:t.tags}),s.jsxs("div",{children:[s.jsxs("h4",{children:[t.drink," "]}),s.jsx("p",{children:t.description})]})]})},t._id))})},vc=()=>{const e=Ke();return d.useEffect(()=>{e(Lr()),e(zr()),e(Ur()),e(Vr())},[e]),s.jsx(Br,{children:s.jsxs(en,{children:[s.jsx(Qr,{title:"Add drink"}),s.jsxs(tn,{children:[s.jsx(lc,{}),s.jsxs(rn,{children:[s.jsxs("div",{children:[s.jsx(yt,{mb:"20px",children:"Follow Us"}),s.jsx(Hr,{})]}),s.jsxs("div",{children:[s.jsx(yt,{mb:"28px",children:"Popular Drinks"}),s.jsx(uc,{})]})]})]})]})})};export{vc as default};
