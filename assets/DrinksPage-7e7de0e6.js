import{f as T,r as w,u as B,j as p,d as X,c as D,h as J,i as Y,k as Z,l as ee,m as U,C as te,e as ne}from"./index-5daad91e.js";import{P as re}from"./PageTitle-dc835bfc.js";import{S as oe,s as ie,a as ae}from"./react-select.esm-2d59098d.js";import{c as ce,d as ue,a as se,b as le}from"./drinks.selectors-cd947628.js";import{u as fe,P as pe}from"./Paginator-c123a4e6.js";import{D as de,W as ge,E as ye}from"./DrinksPage.styled-25fd028c.js";import"./coctailPlaceholder-82987b74.js";var C={},me="Expected a function",A=0/0,he="[object Symbol]",be=/^\s+|\s+$/g,ve=/^[-+]0x[0-9a-f]+$/i,xe=/^0b[01]+$/i,_e=/^0o[0-7]+$/i,we=parseInt,Oe=typeof T=="object"&&T&&T.Object===Object&&T,je=typeof self=="object"&&self&&self.Object===Object&&self,De=Oe||je||Function("return this")(),Se=Object.prototype,Pe=Se.toString,ke=Math.max,Ie=Math.min,R=function(){return De.Date.now()};function Ne(e,n,o){var r,t,c,i,a,u,s=0,h=!1,d=!1,_=!0;if(typeof e!="function")throw new TypeError(me);n=q(n)||0,L(o)&&(h=!!o.leading,d="maxWait"in o,c=d?ke(q(o.maxWait)||0,n):c,_="trailing"in o?!!o.trailing:_);function m(l){var v=r,k=t;return r=t=void 0,s=l,i=e.apply(k,v),i}function b(l){return s=l,a=setTimeout(j,n),h?m(l):i}function S(l){var v=l-u,k=l-s,M=n-v;return d?Ie(M,c-k):M}function I(l){var v=l-u,k=l-s;return u===void 0||v>=n||v<0||d&&k>=c}function j(){var l=R();if(I(l))return N(l);a=setTimeout(j,S(l))}function N(l){return a=void 0,_&&r?m(l):(r=t=void 0,i)}function f(){a!==void 0&&clearTimeout(a),s=0,r=u=t=a=void 0}function g(){return a===void 0?i:N(R())}function P(){var l=R(),v=I(l);if(r=arguments,t=this,u=l,v){if(a===void 0)return b(u);if(d)return a=setTimeout(j,n),m(u)}return a===void 0&&(a=setTimeout(j,n)),i}return P.cancel=f,P.flush=g,P}function L(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Te(e){return!!e&&typeof e=="object"}function Ee(e){return typeof e=="symbol"||Te(e)&&Pe.call(e)==he}function q(e){if(typeof e=="number")return e;if(Ee(e))return A;if(L(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=L(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(be,"");var o=xe.test(e);return o||_e.test(e)?we(e.slice(2),o?2:8):ve.test(e)?A:+e}var Be=Ne;function K(e){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},K(e)}Object.defineProperty(C,"__esModule",{value:!0});C.DebounceInput=void 0;var z=Q(w),Ce=Q(Be),Re=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function Q(e){return e&&e.__esModule?e:{default:e}}function Le(e,n){if(e==null)return{};var o=Ke(e,n),r,t;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ke(e,n){if(e==null)return{};var o={},r=Object.keys(e),t,c;for(c=0;c<r.length;c++)t=r[c],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}function F(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function y(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?F(Object(o),!0).forEach(function(r){x(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):F(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function We(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function V(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $e(e,n,o){return n&&V(e.prototype,n),o&&V(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function Me(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&W(e,n)}function W(e,n){return W=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r},W(e,n)}function Ue(e){var n=qe();return function(){var r=E(e),t;if(n){var c=E(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return Ae(this,t)}}function Ae(e,n){if(n&&(K(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},E(e)}function x(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var H=function(e){Me(o,e);var n=Ue(o);function o(r){var t;We(this,o),t=n.call(this,r),x(O(t),"onChange",function(i){i.persist();var a=t.state.value,u=t.props.minLength;t.setState({value:i.target.value},function(){var s=t.state.value;if(s.length>=u){t.notify(i);return}a.length>s.length&&t.notify(y(y({},i),{},{target:y(y({},i.target),{},{value:""})}))})}),x(O(t),"onKeyDown",function(i){i.key==="Enter"&&t.forceNotify(i);var a=t.props.onKeyDown;a&&(i.persist(),a(i))}),x(O(t),"onBlur",function(i){t.forceNotify(i);var a=t.props.onBlur;a&&(i.persist(),a(i))}),x(O(t),"createNotifier",function(i){if(i<0)t.notify=function(){return null};else if(i===0)t.notify=t.doNotify;else{var a=(0,Ce.default)(function(u){t.isDebouncing=!1,t.doNotify(u)},i);t.notify=function(u){t.isDebouncing=!0,a(u)},t.flush=function(){return a.flush()},t.cancel=function(){t.isDebouncing=!1,a.cancel()}}}),x(O(t),"doNotify",function(){var i=t.props.onChange;i.apply(void 0,arguments)}),x(O(t),"forceNotify",function(i){var a=t.props.debounceTimeout;if(!(!t.isDebouncing&&a>0)){t.cancel&&t.cancel();var u=t.state.value,s=t.props.minLength;u.length>=s?t.doNotify(i):t.doNotify(y(y({},i),{},{target:y(y({},i.target),{},{value:u})}))}}),t.isDebouncing=!1,t.state={value:typeof r.value>"u"||r.value===null?"":r.value};var c=t.props.debounceTimeout;return t.createNotifier(c),t}return $e(o,[{key:"componentDidUpdate",value:function(t){if(!this.isDebouncing){var c=this.props,i=c.value,a=c.debounceTimeout,u=t.debounceTimeout,s=t.value,h=this.state.value;typeof i<"u"&&s!==i&&h!==i&&this.setState({value:i}),a!==u&&this.createNotifier(a)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var t=this.props,c=t.element;t.onChange,t.value,t.minLength,t.debounceTimeout;var i=t.forceNotifyByEnter,a=t.forceNotifyOnBlur,u=t.onKeyDown,s=t.onBlur,h=t.inputRef,d=Le(t,Re),_=this.state.value,m;i?m={onKeyDown:this.onKeyDown}:u?m={onKeyDown:u}:m={};var b;a?b={onBlur:this.onBlur}:s?b={onBlur:s}:b={};var S=h?{ref:h}:{};return z.default.createElement(c,y(y(y(y({},d),{},{onChange:this.onChange,value:_},m),b),S))}}]),o}(z.default.PureComponent);C.DebounceInput=H;x(H,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0});var ze=C,$=ze.DebounceInput;$.DebounceInput=$;var Fe=$;const Ve=B(Fe.DebounceInput)`
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
`,Ge=B.div`
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
`,Qe=B(oe)`
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
`,G=({placeholder:e,options:n,onChange:o})=>{const r=n.map(t=>({value:t,label:t}));return p.jsx(Qe,{placeholder:e,options:r,onChange:o,classNamePrefix:"react-select",isClearable:!0,isSearchable:!0})},He=()=>{const e=X(),n=D(ie),o=D(ae),r=D(ce),t=J(),c=Y(),i=new URLSearchParams(t.search),[a,u]=w.useState(i.get("name")||""),[s,h]=w.useState(i.get("category")||""),[d,_]=w.useState(i.get("ingredient")||""),{isDesktop:m}=fe();w.useEffect(()=>{e(Z()),e(ee())},[e]),w.useEffect(()=>{e(U({name:a,category:s,ingredient:d,page:r,size:m?9:8}))},[e,r]),w.useEffect(()=>{(async()=>{await e(U({name:a,category:s,ingredient:d,page:r,size:m?9:8},[e,r]));const g=new URLSearchParams;a&&g.append("name",a),s&&g.append("category",s),d&&g.append("ingredient",d);const P=g.toString();c(`?${P}`)})()},[e,a,s,d,c]);const b=f=>{const g=f.target.value;u(g)},S=f=>{const g=f?f.value:"";h(g)},I=f=>{const g=f?f.value:"";_(g)},j=n.map(f=>f.category).filter(f=>f!==s),N=o.map(f=>f.title).filter(f=>f!==d);return p.jsxs(Ge,{children:[p.jsx(Ve,{id:"filterInput",type:"text",placeholder:"Enter the text",value:a,onChange:b,debounceTimeout:1e3}),p.jsx(G,{id:"categorySelect",placeholder:"All categories",options:j,onChange:S}),p.jsx(G,{id:"ingredientSelect",placeholder:"Ingredients",options:N,onChange:I})]})},Xe=He,Je=B.ul`
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
`,Ye=({drinks:e})=>p.jsx(Je,{children:e.map(({drink:n,drinkThumb:o,_id:r})=>p.jsx(de,{id:r,drinkTitle:n,drinkThumb:o},r))});function at(){const e=D(ue),n=D(se),o=D(le);return p.jsx(te,{children:p.jsxs(ge,{children:[p.jsx(re,{title:"Drinks"}),p.jsx(Xe,{}),n?p.jsx(ne,{}):o||e.length===0?p.jsx(ye,{children:"No cocktails were found for your request"}):p.jsxs(p.Fragment,{children:[p.jsx(Ye,{drinks:e}),p.jsx(pe,{})]})]})})}export{at as default};
