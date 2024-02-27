import{f as N,r as v,u as S,j as p,d as H,c as j,h as X,i as J,k as Y,l as Z,m as ee,C as te,e as ne}from"./index-07711ada.js";import{P as re}from"./PageTitle-0d0bcc88.js";import{S as oe,s as ie,a as ae}from"./react-select.esm-9d2e1ee4.js";import{c as ce,d as ue,a as se,b as le}from"./drinks.selectors-c82db5cf.js";import{u as fe,P as pe}from"./Paginator-22af8151.js";import{D as de}from"./DrinksItem-8fcb5994.js";import"./coctailPlaceholder-82987b74.js";var E={},ge="Expected a function",U=0/0,me="[object Symbol]",he=/^\s+|\s+$/g,ye=/^[-+]0x[0-9a-f]+$/i,be=/^0b[01]+$/i,ve=/^0o[0-7]+$/i,xe=parseInt,_e=typeof N=="object"&&N&&N.Object===Object&&N,we=typeof self=="object"&&self&&self.Object===Object&&self,Oe=_e||we||Function("return this")(),je=Object.prototype,Se=je.toString,De=Math.max,Pe=Math.min,L=function(){return Oe.Date.now()};function ke(e,n,o){var r,t,u,i,a,s,l=0,y=!1,d=!1,_=!0;if(typeof e!="function")throw new TypeError(ge);n=A(n)||0,R(o)&&(y=!!o.leading,d="maxWait"in o,u=d?De(A(o.maxWait)||0,n):u,_="trailing"in o?!!o.trailing:_);function m(c){var h=r,P=t;return r=t=void 0,l=c,i=e.apply(P,h),i}function b(c){return l=c,a=setTimeout(O,n),y?m(c):i}function D(c){var h=c-s,P=c-l,M=n-h;return d?Pe(M,u-P):M}function k(c){var h=c-s,P=c-l;return s===void 0||h>=n||h<0||d&&P>=u}function O(){var c=L();if(k(c))return I(c);a=setTimeout(O,D(c))}function I(c){return a=void 0,_&&r?m(c):(r=t=void 0,i)}function B(){a!==void 0&&clearTimeout(a),l=0,r=s=t=a=void 0}function C(){return a===void 0?i:I(L())}function f(){var c=L(),h=k(c);if(r=arguments,t=this,s=c,h){if(a===void 0)return b(s);if(d)return a=setTimeout(O,n),m(s)}return a===void 0&&(a=setTimeout(O,n)),i}return f.cancel=B,f.flush=C,f}function R(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Ie(e){return!!e&&typeof e=="object"}function Ne(e){return typeof e=="symbol"||Ie(e)&&Se.call(e)==me}function A(e){if(typeof e=="number")return e;if(Ne(e))return U;if(R(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=R(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(he,"");var o=be.test(e);return o||ve.test(e)?xe(e.slice(2),o?2:8):ye.test(e)?U:+e}var Te=ke;function K(e){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},K(e)}Object.defineProperty(E,"__esModule",{value:!0});E.DebounceInput=void 0;var q=G(v),Ee=G(Te),Be=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function G(e){return e&&e.__esModule?e:{default:e}}function Ce(e,n){if(e==null)return{};var o=Le(e,n),r,t;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Le(e,n){if(e==null)return{};var o={},r=Object.keys(e),t,u;for(u=0;u<r.length;u++)t=r[u],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}function F(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function g(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?F(Object(o),!0).forEach(function(r){x(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):F(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Re(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function z(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ke(e,n,o){return n&&z(e.prototype,n),o&&z(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function $e(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&$(e,n)}function $(e,n){return $=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r},$(e,n)}function We(e){var n=Ue();return function(){var r=T(e),t;if(n){var u=T(this).constructor;t=Reflect.construct(r,arguments,u)}else t=r.apply(this,arguments);return Me(this,t)}}function Me(e,n){if(n&&(K(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ue(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},T(e)}function x(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var Q=function(e){$e(o,e);var n=We(o);function o(r){var t;Re(this,o),t=n.call(this,r),x(w(t),"onChange",function(i){i.persist();var a=t.state.value,s=t.props.minLength;t.setState({value:i.target.value},function(){var l=t.state.value;if(l.length>=s){t.notify(i);return}a.length>l.length&&t.notify(g(g({},i),{},{target:g(g({},i.target),{},{value:""})}))})}),x(w(t),"onKeyDown",function(i){i.key==="Enter"&&t.forceNotify(i);var a=t.props.onKeyDown;a&&(i.persist(),a(i))}),x(w(t),"onBlur",function(i){t.forceNotify(i);var a=t.props.onBlur;a&&(i.persist(),a(i))}),x(w(t),"createNotifier",function(i){if(i<0)t.notify=function(){return null};else if(i===0)t.notify=t.doNotify;else{var a=(0,Ee.default)(function(s){t.isDebouncing=!1,t.doNotify(s)},i);t.notify=function(s){t.isDebouncing=!0,a(s)},t.flush=function(){return a.flush()},t.cancel=function(){t.isDebouncing=!1,a.cancel()}}}),x(w(t),"doNotify",function(){var i=t.props.onChange;i.apply(void 0,arguments)}),x(w(t),"forceNotify",function(i){var a=t.props.debounceTimeout;if(!(!t.isDebouncing&&a>0)){t.cancel&&t.cancel();var s=t.state.value,l=t.props.minLength;s.length>=l?t.doNotify(i):t.doNotify(g(g({},i),{},{target:g(g({},i.target),{},{value:s})}))}}),t.isDebouncing=!1,t.state={value:typeof r.value>"u"||r.value===null?"":r.value};var u=t.props.debounceTimeout;return t.createNotifier(u),t}return Ke(o,[{key:"componentDidUpdate",value:function(t){if(!this.isDebouncing){var u=this.props,i=u.value,a=u.debounceTimeout,s=t.debounceTimeout,l=t.value,y=this.state.value;typeof i<"u"&&l!==i&&y!==i&&this.setState({value:i}),a!==s&&this.createNotifier(a)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var t=this.props,u=t.element;t.onChange,t.value,t.minLength,t.debounceTimeout;var i=t.forceNotifyByEnter,a=t.forceNotifyOnBlur,s=t.onKeyDown,l=t.onBlur,y=t.inputRef,d=Ce(t,Be),_=this.state.value,m;i?m={onKeyDown:this.onKeyDown}:s?m={onKeyDown:s}:m={};var b;a?b={onBlur:this.onBlur}:l?b={onBlur:l}:b={};var D=y?{ref:y}:{};return q.default.createElement(u,g(g(g(g({},d),{},{onChange:this.onChange,value:_},m),b),D))}}]),o}(q.default.PureComponent);E.DebounceInput=Q;x(Q,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0});var Ae=E,W=Ae.DebounceInput;W.DebounceInput=W;var qe=W;const Fe=S(qe.DebounceInput)`
  width: auto;
  height: 54px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  padding: 0 24px;
  font-size: 17px;
  opacity: 1;
  color: var(--white-color);

  &::placeholder {
    color: var(--white-color);
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
  }
`,ze=S.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 60px;
    flex-direction: row;
    gap: 8px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
  }
`,Ve=S(oe)`
  & .react-select__control {
    border-radius: 200px;
    background-color: var(--dark-blue-color);
    box-shadow: none;
    border: 0;
    width: auto;
    padding: 14px 24px;
    height: 54px;
    cursor: pointer;
  }

  & .react-select__menu {
    border-radius: 20px;
    background-color: var(--dark-blue-color);
    width: 199px;
    margin-top: 4px;
    padding-left: 14px;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.56;
    cursor: pointer;
  }

  & .react-select__menu-list::-webkit-scrollbar {
    width: 0px;
  }

  & .react-select__dropdown-indicator {
    color: var(--white-color);

    &:hover {
      color: var(--white-color);
    }
    padding: 0;
  }

  & .react-select__indicator-separator {
    display: none;
    padding: 0px;
  }

  & .react-select__placeholder {
    margin: 0px;
    color: var(--white-color);
  }

  & .react-select__input {
    color: var(--white-color);
  }

  & .react-select__option {
    background-color: none;
    color: var(--white-fifty-color);
    padding-top: 3px;
    padding-bottom: 3px;
    cursor: pointer;
    &:hover {
      color: var(--white-color);
    }
  }
  .react-select__option--is-focused {
    background-color: transparent !important;
  }
  & .react-select__single-value {
    color: var(--white-color);
  }

  & .react-select__option--is-focused {
    background-color: var(--dark-blue-color);
  }
  & .react-select__indicatorContainer {
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    & .react-select__control {
      height: 56px;
      width: 199px;
    }
  }

  @media screen and (min-width: 1440px) {
    & .react-select__control {
    }
  }
`,V=({placeholder:e,options:n,onChange:o})=>{const r=n.map(t=>({value:t,label:t}));return p.jsx(Ve,{placeholder:e,options:r,onChange:o,classNamePrefix:"react-select",isClearable:!0,isSearchable:!0})},Ge=()=>{const e=H(),n=j(ie),o=j(ae),r=j(ce),t=X(),u=J(),i=new URLSearchParams(t.search),[a,s]=v.useState(i.get("name")||""),[l,y]=v.useState(i.get("category")||""),[d,_]=v.useState(i.get("ingredient")||""),{isDesktop:m}=fe(),[b,D]=v.useState(!1);v.useEffect(()=>{e(Y()),e(Z())},[e]),v.useEffect(()=>{n.length>0&&o.length>0&&D(!0)},[n,o]),v.useEffect(()=>{b&&(async()=>{await e(ee({name:a,category:l,ingredient:d,page:r,size:m?9:8},[e,r]));const c=new URLSearchParams;a&&c.append("name",a),l&&c.append("category",l),d&&c.append("ingredient",d),c.append("page",r);const h=c.toString();u(`?${h}`)})()},[e,a,l,d,r,m,u,b]);const k=f=>{const c=f.target.value;s(c)},O=f=>{const c=f?f.value:"";y(c)},I=f=>{const c=f?f.value:"";_(c)},B=n.map(f=>f.category).filter(f=>f!==l),C=o.map(f=>f.title).filter(f=>f!==d);return p.jsxs(ze,{children:[p.jsx(Fe,{id:"filterInput",type:"text",placeholder:"Enter the text",value:a,onChange:k,debounceTimeout:1e3}),p.jsx(V,{id:"categorySelect",placeholder:"All categories",options:B,onChange:O}),p.jsx(V,{id:"ingredientSelect",placeholder:"Ingredients",options:C,onChange:I})]})},Qe=Ge,He=S.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 40px 20px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    gap: 80px 20px;
  }
`,Xe=({drinks:e})=>p.jsx(He,{children:e.map(({drink:n,drinkThumb:o,_id:r})=>p.jsx(de,{id:r,drinkTitle:n,drinkThumb:o},r))}),Je=S.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,Ye=S.p`
  color: var(--white-color);
`;function at(){const e=j(ue),n=j(se),o=j(le);return p.jsx(te,{children:p.jsxs(Je,{children:[p.jsx(re,{title:"Drinks"}),p.jsx(Qe,{}),n?p.jsx(ne,{}):o||e.length===0?p.jsx(Ye,{children:"No cocktails were found for your request"}):p.jsxs(p.Fragment,{children:[p.jsx(Xe,{drinks:e}),p.jsx(pe,{})]})]})})}export{at as default};
