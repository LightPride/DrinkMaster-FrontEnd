import{e as k,r as w,u as O,j as d,d as V,c as D,f as J,h as Y,i as E,C as Z,L as ee}from"./index-1077f323.js";import{P as te}from"./PageTitle-1638167e.js";import{S as ne,s as re,a as oe}from"./react-select.esm-eb38a3e5.js";import{D as ie}from"./DrinksItem-fca7cfeb.js";import{c as ae,a as ce,b as ue}from"./drinks.selectors-5d90dba8.js";import"./coctailPlaceholder-82987b74.js";var T={},le="Expected a function",M=0/0,se="[object Symbol]",fe=/^\s+|\s+$/g,pe=/^[-+]0x[0-9a-f]+$/i,de=/^0b[01]+$/i,ge=/^0o[0-7]+$/i,me=parseInt,ye=typeof k=="object"&&k&&k.Object===Object&&k,he=typeof self=="object"&&self&&self.Object===Object&&self,be=ye||he||Function("return this")(),ve=Object.prototype,xe=ve.toString,_e=Math.max,we=Math.min,C=function(){return be.Date.now()};function Oe(e,n,o){var r,t,c,i,a,u,f=0,y=!1,h=!1,x=!0;if(typeof e!="function")throw new TypeError(le);n=U(n)||0,B(o)&&(y=!!o.leading,h="maxWait"in o,c=h?_e(U(o.maxWait)||0,n):c,x="trailing"in o?!!o.trailing:x);function m(s){var b=r,j=t;return r=t=void 0,f=s,i=e.apply(j,b),i}function l(s){return f=s,a=setTimeout(I,n),y?m(s):i}function p(s){var b=s-u,j=s-f,$=n-b;return h?we($,c-j):$}function S(s){var b=s-u,j=s-f;return u===void 0||b>=n||b<0||h&&j>=c}function I(){var s=C();if(S(s))return W(s);a=setTimeout(I,p(s))}function W(s){return a=void 0,x&&r?m(s):(r=t=void 0,i)}function H(){a!==void 0&&clearTimeout(a),f=0,r=u=t=a=void 0}function X(){return a===void 0?i:W(C())}function N(){var s=C(),b=S(s);if(r=arguments,t=this,u=s,b){if(a===void 0)return l(u);if(h)return a=setTimeout(I,n),m(u)}return a===void 0&&(a=setTimeout(I,n)),i}return N.cancel=H,N.flush=X,N}function B(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Se(e){return!!e&&typeof e=="object"}function je(e){return typeof e=="symbol"||Se(e)&&xe.call(e)==se}function U(e){if(typeof e=="number")return e;if(je(e))return M;if(B(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=B(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(fe,"");var o=de.test(e);return o||ge.test(e)?me(e.slice(2),o?2:8):pe.test(e)?M:+e}var De=Oe;function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},R(e)}Object.defineProperty(T,"__esModule",{value:!0});T.DebounceInput=void 0;var z=F(w),Ie=F(De),ke=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function F(e){return e&&e.__esModule?e:{default:e}}function Pe(e,n){if(e==null)return{};var o=Te(e,n),r,t;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Te(e,n){if(e==null)return{};var o={},r=Object.keys(e),t,c;for(c=0;c<r.length;c++)t=r[c],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}function A(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function g(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?A(Object(o),!0).forEach(function(r){v(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Ne(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Q(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ce(e,n,o){return n&&Q(e.prototype,n),o&&Q(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ee(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&L(e,n)}function L(e,n){return L=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r},L(e,n)}function Be(e){var n=Le();return function(){var r=P(e),t;if(n){var c=P(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return Re(this,t)}}function Re(e,n){if(n&&(R(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Le(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},P(e)}function v(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var G=function(e){Ee(o,e);var n=Be(o);function o(r){var t;Ne(this,o),t=n.call(this,r),v(_(t),"onChange",function(i){i.persist();var a=t.state.value,u=t.props.minLength;t.setState({value:i.target.value},function(){var f=t.state.value;if(f.length>=u){t.notify(i);return}a.length>f.length&&t.notify(g(g({},i),{},{target:g(g({},i.target),{},{value:""})}))})}),v(_(t),"onKeyDown",function(i){i.key==="Enter"&&t.forceNotify(i);var a=t.props.onKeyDown;a&&(i.persist(),a(i))}),v(_(t),"onBlur",function(i){t.forceNotify(i);var a=t.props.onBlur;a&&(i.persist(),a(i))}),v(_(t),"createNotifier",function(i){if(i<0)t.notify=function(){return null};else if(i===0)t.notify=t.doNotify;else{var a=(0,Ie.default)(function(u){t.isDebouncing=!1,t.doNotify(u)},i);t.notify=function(u){t.isDebouncing=!0,a(u)},t.flush=function(){return a.flush()},t.cancel=function(){t.isDebouncing=!1,a.cancel()}}}),v(_(t),"doNotify",function(){var i=t.props.onChange;i.apply(void 0,arguments)}),v(_(t),"forceNotify",function(i){var a=t.props.debounceTimeout;if(!(!t.isDebouncing&&a>0)){t.cancel&&t.cancel();var u=t.state.value,f=t.props.minLength;u.length>=f?t.doNotify(i):t.doNotify(g(g({},i),{},{target:g(g({},i.target),{},{value:u})}))}}),t.isDebouncing=!1,t.state={value:typeof r.value>"u"||r.value===null?"":r.value};var c=t.props.debounceTimeout;return t.createNotifier(c),t}return Ce(o,[{key:"componentDidUpdate",value:function(t){if(!this.isDebouncing){var c=this.props,i=c.value,a=c.debounceTimeout,u=t.debounceTimeout,f=t.value,y=this.state.value;typeof i<"u"&&f!==i&&y!==i&&this.setState({value:i}),a!==u&&this.createNotifier(a)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var t=this.props,c=t.element;t.onChange,t.value,t.minLength,t.debounceTimeout;var i=t.forceNotifyByEnter,a=t.forceNotifyOnBlur,u=t.onKeyDown,f=t.onBlur,y=t.inputRef,h=Pe(t,ke),x=this.state.value,m;i?m={onKeyDown:this.onKeyDown}:u?m={onKeyDown:u}:m={};var l;a?l={onBlur:this.onBlur}:f?l={onBlur:f}:l={};var p=y?{ref:y}:{};return z.default.createElement(c,g(g(g(g({},h),{},{onChange:this.onChange,value:x},m),l),p))}}]),o}(z.default.PureComponent);T.DebounceInput=G;v(G,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0});var Ke=T,K=Ke.DebounceInput;K.DebounceInput=K;var We=K;const $e=O(We.DebounceInput)`
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
`,Me=O.div`
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
`,Ue=O(ne)`
  & .react-select__control {
    border-radius: 200px;
    background-color: var(--dark-blue-color);
    box-shadow: none;
    border: 0;
    width: auto;
    padding: 14px 24px;
    height: 54px;
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
`,q=({placeholder:e,options:n,onChange:o})=>{const r=n.map(t=>({value:t,label:t}));return d.jsx(Ue,{placeholder:e,options:r,onChange:o,classNamePrefix:"react-select",isClearable:!0,isSearchable:!0})},ze=()=>{const e=V(),n=D(re),o=D(oe),[r,t]=w.useState(""),[c,i]=w.useState(""),[a,u]=w.useState("");w.useEffect(()=>{e(J()),e(Y());const l=localStorage.getItem("searchQuery");l&&(t(l),e(E({name:l})));const p=localStorage.getItem("selectedCategory");p&&i(p);const S=localStorage.getItem("selectedIngredient");S&&u(S)},[e]);const f=l=>{const p=l.target.value;t(p),localStorage.setItem("searchQuery",p)},y=l=>{if(l){const p=l.value;i(p),localStorage.setItem("selectedCategory",p)}else i(""),localStorage.removeItem("selectedCategory")},h=l=>{if(l){const p=l.value;u(p),localStorage.setItem("selectedIngredient",p)}else u(""),localStorage.removeItem("selectedIngredient")};w.useEffect(()=>{e(E({name:r,category:c,ingredient:a})),localStorage.setItem("searchQuery",r)},[e,r,c,a]);const x=n.map(l=>l.category).filter(l=>l!==c),m=o.map(l=>l.title).filter(l=>l!==a);return d.jsxs(Me,{children:[d.jsx($e,{id:"filterInput",type:"text",placeholder:"Enter the text",value:r,onChange:f,debounceTimeout:1e3}),d.jsx(q,{id:"categorySelect",placeholder:"All categories",options:x,onChange:y}),d.jsx(q,{id:"ingredientSelect",placeholder:"Ingredients",options:m,onChange:h})]})},Ae=ze,Qe=O.ul`
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
`,qe=({drinks:e})=>d.jsx(Qe,{children:e.map(({drink:n,drinkThumb:o,_id:r})=>d.jsx(ie,{id:r,drinkTitle:n,drinkThumb:o},r))}),Ve=O.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,Fe=O.p`
  color: var(--white-color);
`;function et(){const e=V(),n=D(ae),o=D(ce),r=D(ue),t="",c="",i="",a=1,u=9;return w.useEffect(()=>{e(E({name:t,category:c,ingredient:i,page:a,size:u}))},[e]),d.jsx(Z,{children:d.jsxs(Ve,{children:[d.jsx(te,{title:"Drinks"}),d.jsx(Ae,{}),o?d.jsx(ee,{}):r||n.length===0?d.jsx(Fe,{children:"No cocktails were found for your request"}):d.jsx(qe,{drinks:n})]})})}export{et as default};
