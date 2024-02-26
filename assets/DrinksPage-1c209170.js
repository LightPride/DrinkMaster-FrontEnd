import{f as E,r as w,u as S,j as p,d as X,c as D,h as J,i as Y,k as Z,l as ee,m as U,C as te,e as ne}from"./index-7fdb499e.js";import{P as re}from"./PageTitle-5f222b53.js";import{S as oe,s as ie,a as ae}from"./react-select.esm-facb5498.js";import{c as ce,d as ue,a as se,b as le}from"./drinks.selectors-1403f113.js";import{u as fe,P as pe}from"./Paginator-b6892829.js";import{D as de}from"./DrinksItem-58bbfecc.js";import"./coctailPlaceholder-82987b74.js";var C={},ge="Expected a function",A=0/0,me="[object Symbol]",ye=/^\s+|\s+$/g,he=/^[-+]0x[0-9a-f]+$/i,be=/^0b[01]+$/i,ve=/^0o[0-7]+$/i,xe=parseInt,_e=typeof E=="object"&&E&&E.Object===Object&&E,we=typeof self=="object"&&self&&self.Object===Object&&self,Oe=_e||we||Function("return this")(),je=Object.prototype,De=je.toString,Se=Math.max,Pe=Math.min,R=function(){return Oe.Date.now()};function ke(e,n,o){var r,t,c,i,a,u,s=0,h=!1,d=!1,_=!0;if(typeof e!="function")throw new TypeError(ge);n=q(n)||0,L(o)&&(h=!!o.leading,d="maxWait"in o,c=d?Se(q(o.maxWait)||0,n):c,_="trailing"in o?!!o.trailing:_);function y(l){var v=r,I=t;return r=t=void 0,s=l,i=e.apply(I,v),i}function b(l){return s=l,a=setTimeout(j,n),h?y(l):i}function P(l){var v=l-u,I=l-s,M=n-v;return d?Pe(M,c-I):M}function N(l){var v=l-u,I=l-s;return u===void 0||v>=n||v<0||d&&I>=c}function j(){var l=R();if(N(l))return T(l);a=setTimeout(j,P(l))}function T(l){return a=void 0,_&&r?y(l):(r=t=void 0,i)}function f(){a!==void 0&&clearTimeout(a),s=0,r=u=t=a=void 0}function g(){return a===void 0?i:T(R())}function k(){var l=R(),v=N(l);if(r=arguments,t=this,u=l,v){if(a===void 0)return b(u);if(d)return a=setTimeout(j,n),y(u)}return a===void 0&&(a=setTimeout(j,n)),i}return k.cancel=f,k.flush=g,k}function L(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Ie(e){return!!e&&typeof e=="object"}function Ne(e){return typeof e=="symbol"||Ie(e)&&De.call(e)==me}function q(e){if(typeof e=="number")return e;if(Ne(e))return A;if(L(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=L(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(ye,"");var o=be.test(e);return o||ve.test(e)?xe(e.slice(2),o?2:8):he.test(e)?A:+e}var Te=ke;function K(e){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},K(e)}Object.defineProperty(C,"__esModule",{value:!0});C.DebounceInput=void 0;var z=Q(w),Ee=Q(Te),Be=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function Q(e){return e&&e.__esModule?e:{default:e}}function Ce(e,n){if(e==null)return{};var o=Re(e,n),r,t;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Re(e,n){if(e==null)return{};var o={},r=Object.keys(e),t,c;for(c=0;c<r.length;c++)t=r[c],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}function F(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function m(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?F(Object(o),!0).forEach(function(r){x(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):F(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Le(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function V(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ke(e,n,o){return n&&V(e.prototype,n),o&&V(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function $e(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&$(e,n)}function $(e,n){return $=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r},$(e,n)}function We(e){var n=Ue();return function(){var r=B(e),t;if(n){var c=B(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return Me(this,t)}}function Me(e,n){if(n&&(K(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ue(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},B(e)}function x(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var H=function(e){$e(o,e);var n=We(o);function o(r){var t;Le(this,o),t=n.call(this,r),x(O(t),"onChange",function(i){i.persist();var a=t.state.value,u=t.props.minLength;t.setState({value:i.target.value},function(){var s=t.state.value;if(s.length>=u){t.notify(i);return}a.length>s.length&&t.notify(m(m({},i),{},{target:m(m({},i.target),{},{value:""})}))})}),x(O(t),"onKeyDown",function(i){i.key==="Enter"&&t.forceNotify(i);var a=t.props.onKeyDown;a&&(i.persist(),a(i))}),x(O(t),"onBlur",function(i){t.forceNotify(i);var a=t.props.onBlur;a&&(i.persist(),a(i))}),x(O(t),"createNotifier",function(i){if(i<0)t.notify=function(){return null};else if(i===0)t.notify=t.doNotify;else{var a=(0,Ee.default)(function(u){t.isDebouncing=!1,t.doNotify(u)},i);t.notify=function(u){t.isDebouncing=!0,a(u)},t.flush=function(){return a.flush()},t.cancel=function(){t.isDebouncing=!1,a.cancel()}}}),x(O(t),"doNotify",function(){var i=t.props.onChange;i.apply(void 0,arguments)}),x(O(t),"forceNotify",function(i){var a=t.props.debounceTimeout;if(!(!t.isDebouncing&&a>0)){t.cancel&&t.cancel();var u=t.state.value,s=t.props.minLength;u.length>=s?t.doNotify(i):t.doNotify(m(m({},i),{},{target:m(m({},i.target),{},{value:u})}))}}),t.isDebouncing=!1,t.state={value:typeof r.value>"u"||r.value===null?"":r.value};var c=t.props.debounceTimeout;return t.createNotifier(c),t}return Ke(o,[{key:"componentDidUpdate",value:function(t){if(!this.isDebouncing){var c=this.props,i=c.value,a=c.debounceTimeout,u=t.debounceTimeout,s=t.value,h=this.state.value;typeof i<"u"&&s!==i&&h!==i&&this.setState({value:i}),a!==u&&this.createNotifier(a)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var t=this.props,c=t.element;t.onChange,t.value,t.minLength,t.debounceTimeout;var i=t.forceNotifyByEnter,a=t.forceNotifyOnBlur,u=t.onKeyDown,s=t.onBlur,h=t.inputRef,d=Ce(t,Be),_=this.state.value,y;i?y={onKeyDown:this.onKeyDown}:u?y={onKeyDown:u}:y={};var b;a?b={onBlur:this.onBlur}:s?b={onBlur:s}:b={};var P=h?{ref:h}:{};return z.default.createElement(c,m(m(m(m({},d),{},{onChange:this.onChange,value:_},y),b),P))}}]),o}(z.default.PureComponent);C.DebounceInput=H;x(H,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0});var Ae=C,W=Ae.DebounceInput;W.DebounceInput=W;var qe=W;const ze=S(qe.DebounceInput)`
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
`,Fe=S.div`
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
`,G=({placeholder:e,options:n,onChange:o})=>{const r=n.map(t=>({value:t,label:t}));return p.jsx(Ve,{placeholder:e,options:r,onChange:o,classNamePrefix:"react-select",isClearable:!0,isSearchable:!0})},Ge=()=>{const e=X(),n=D(ie),o=D(ae),r=D(ce),t=J(),c=Y(),i=new URLSearchParams(t.search),[a,u]=w.useState(i.get("name")||""),[s,h]=w.useState(i.get("category")||""),[d,_]=w.useState(i.get("ingredient")||""),{isDesktop:y}=fe();w.useEffect(()=>{e(Z()),e(ee())},[e]),w.useEffect(()=>{e(U({name:a,category:s,ingredient:d,page:r,size:y?9:8}))},[e,r]),w.useEffect(()=>{(async()=>{await e(U({name:a,category:s,ingredient:d,page:r,size:y?9:8},[e,r]));const g=new URLSearchParams;a&&g.append("name",a),s&&g.append("category",s),d&&g.append("ingredient",d);const k=g.toString();c(`?${k}`)})()},[e,a,s,d,c]);const b=f=>{const g=f.target.value;u(g)},P=f=>{const g=f?f.value:"";h(g)},N=f=>{const g=f?f.value:"";_(g)},j=n.map(f=>f.category).filter(f=>f!==s),T=o.map(f=>f.title).filter(f=>f!==d);return p.jsxs(Fe,{children:[p.jsx(ze,{id:"filterInput",type:"text",placeholder:"Enter the text",value:a,onChange:b,debounceTimeout:1e3}),p.jsx(G,{id:"categorySelect",placeholder:"All categories",options:j,onChange:P}),p.jsx(G,{id:"ingredientSelect",placeholder:"Ingredients",options:T,onChange:N})]})},Qe=Ge,He=S.ul`
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
`;function at(){const e=D(ue),n=D(se),o=D(le);return p.jsx(te,{children:p.jsxs(Je,{children:[p.jsx(re,{title:"Drinks"}),p.jsx(Qe,{}),n?p.jsx(ne,{}):o||e.length===0?p.jsx(Ye,{children:"No cocktails were found for your request"}):p.jsxs(p.Fragment,{children:[p.jsx(Xe,{drinks:e}),p.jsx(pe,{})]})]})})}export{at as default};
