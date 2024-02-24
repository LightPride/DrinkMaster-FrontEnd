import{e as k,r as O,u as h,j as f,d as V,c as I,f as J,h as Y,i as C,L as Z,C as ee,k as te}from"./index-797b43d4.js";import{P as ne}from"./PageTitle-5387e73d.js";import{S as re}from"./react-select.esm-3545a80b.js";import{d as oe}from"./coctailPlaceholder-82987b74.js";import{c as ie,a as ae,b as ce}from"./drinks.selectors-43ee7c0b.js";const se=e=>e.filters.categories,le=e=>e.filters.ingredients;var T={},ue="Expected a function",M=0/0,fe="[object Symbol]",de=/^\s+|\s+$/g,pe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,he=/^0o[0-7]+$/i,me=parseInt,ye=typeof k=="object"&&k&&k.Object===Object&&k,be=typeof self=="object"&&self&&self.Object===Object&&self,ve=ye||be||Function("return this")(),xe=Object.prototype,we=xe.toString,_e=Math.max,Oe=Math.min,N=function(){return ve.Date.now()};function je(e,n,o){var r,t,c,i,a,s,d=0,y=!1,b=!1,w=!0;if(typeof e!="function")throw new TypeError(ue);n=z(n)||0,B(o)&&(y=!!o.leading,b="maxWait"in o,c=b?_e(z(o.maxWait)||0,n):c,w="trailing"in o?!!o.trailing:w);function m(u){var v=r,S=t;return r=t=void 0,d=u,i=e.apply(S,v),i}function l(u){return d=u,a=setTimeout(D,n),y?m(u):i}function p(u){var v=u-s,S=u-d,W=n-v;return b?Oe(W,c-S):W}function j(u){var v=u-s,S=u-d;return s===void 0||v>=n||v<0||b&&S>=c}function D(){var u=N();if(j(u))return $(u);a=setTimeout(D,p(u))}function $(u){return a=void 0,w&&r?m(u):(r=t=void 0,i)}function H(){a!==void 0&&clearTimeout(a),d=0,r=s=t=a=void 0}function X(){return a===void 0?i:$(N())}function E(){var u=N(),v=j(u);if(r=arguments,t=this,s=u,v){if(a===void 0)return l(s);if(b)return a=setTimeout(D,n),m(s)}return a===void 0&&(a=setTimeout(D,n)),i}return E.cancel=H,E.flush=X,E}function B(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Se(e){return!!e&&typeof e=="object"}function Ie(e){return typeof e=="symbol"||Se(e)&&we.call(e)==fe}function z(e){if(typeof e=="number")return e;if(Ie(e))return M;if(B(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=B(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(de,"");var o=ge.test(e);return o||he.test(e)?me(e.slice(2),o?2:8):pe.test(e)?M:+e}var De=je;function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},L(e)}Object.defineProperty(T,"__esModule",{value:!0});T.DebounceInput=void 0;var U=F(O),ke=F(De),Pe=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function F(e){return e&&e.__esModule?e:{default:e}}function Te(e,n){if(e==null)return{};var o=Ee(e,n),r,t;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ee(e,n){if(e==null)return{};var o={},r=Object.keys(e),t,c;for(c=0;c<r.length;c++)t=r[c],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}function A(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function g(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?A(Object(o),!0).forEach(function(r){x(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Ne(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Q(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ce(e,n,o){return n&&Q(e.prototype,n),o&&Q(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function Be(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&R(e,n)}function R(e,n){return R=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r},R(e,n)}function Le(e){var n=Ke();return function(){var r=P(e),t;if(n){var c=P(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return Re(this,t)}}function Re(e,n){if(n&&(L(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ke(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},P(e)}function x(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var G=function(e){Be(o,e);var n=Le(o);function o(r){var t;Ne(this,o),t=n.call(this,r),x(_(t),"onChange",function(i){i.persist();var a=t.state.value,s=t.props.minLength;t.setState({value:i.target.value},function(){var d=t.state.value;if(d.length>=s){t.notify(i);return}a.length>d.length&&t.notify(g(g({},i),{},{target:g(g({},i.target),{},{value:""})}))})}),x(_(t),"onKeyDown",function(i){i.key==="Enter"&&t.forceNotify(i);var a=t.props.onKeyDown;a&&(i.persist(),a(i))}),x(_(t),"onBlur",function(i){t.forceNotify(i);var a=t.props.onBlur;a&&(i.persist(),a(i))}),x(_(t),"createNotifier",function(i){if(i<0)t.notify=function(){return null};else if(i===0)t.notify=t.doNotify;else{var a=(0,ke.default)(function(s){t.isDebouncing=!1,t.doNotify(s)},i);t.notify=function(s){t.isDebouncing=!0,a(s)},t.flush=function(){return a.flush()},t.cancel=function(){t.isDebouncing=!1,a.cancel()}}}),x(_(t),"doNotify",function(){var i=t.props.onChange;i.apply(void 0,arguments)}),x(_(t),"forceNotify",function(i){var a=t.props.debounceTimeout;if(!(!t.isDebouncing&&a>0)){t.cancel&&t.cancel();var s=t.state.value,d=t.props.minLength;s.length>=d?t.doNotify(i):t.doNotify(g(g({},i),{},{target:g(g({},i.target),{},{value:s})}))}}),t.isDebouncing=!1,t.state={value:typeof r.value>"u"||r.value===null?"":r.value};var c=t.props.debounceTimeout;return t.createNotifier(c),t}return Ce(o,[{key:"componentDidUpdate",value:function(t){if(!this.isDebouncing){var c=this.props,i=c.value,a=c.debounceTimeout,s=t.debounceTimeout,d=t.value,y=this.state.value;typeof i<"u"&&d!==i&&y!==i&&this.setState({value:i}),a!==s&&this.createNotifier(a)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var t=this.props,c=t.element;t.onChange,t.value,t.minLength,t.debounceTimeout;var i=t.forceNotifyByEnter,a=t.forceNotifyOnBlur,s=t.onKeyDown,d=t.onBlur,y=t.inputRef,b=Te(t,Pe),w=this.state.value,m;i?m={onKeyDown:this.onKeyDown}:s?m={onKeyDown:s}:m={};var l;a?l={onBlur:this.onBlur}:d?l={onBlur:d}:l={};var p=y?{ref:y}:{};return U.default.createElement(c,g(g(g(g({},b),{},{onChange:this.onChange,value:w},m),l),p))}}]),o}(U.default.PureComponent);T.DebounceInput=G;x(G,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0});var $e=T,K=$e.DebounceInput;K.DebounceInput=K;var We=K;const Me=h(We.DebounceInput)`
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
`,ze=h.div`
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
`,Ue=h(re)`
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
`,q=({placeholder:e,options:n,onChange:o})=>{const r=n.map(t=>({value:t,label:t}));return f.jsx(Ue,{placeholder:e,options:r,onChange:o,classNamePrefix:"react-select",isClearable:!0,isSearchable:!0})},Ae=()=>{const e=V(),n=I(se),o=I(le),[r,t]=O.useState(""),[c,i]=O.useState(""),[a,s]=O.useState("");O.useEffect(()=>{e(J()),e(Y());const l=localStorage.getItem("searchQuery");l&&(t(l),e(C({name:l})));const p=localStorage.getItem("selectedCategory");p&&i(p);const j=localStorage.getItem("selectedIngredient");j&&s(j)},[e]);const d=l=>{const p=l.target.value;t(p),localStorage.setItem("searchQuery",p)},y=l=>{if(l){const p=l.value;i(p),localStorage.setItem("selectedCategory",p)}else i(""),localStorage.removeItem("selectedCategory")},b=l=>{if(l){const p=l.value;s(p),localStorage.setItem("selectedIngredient",p)}else s(""),localStorage.removeItem("selectedIngredient")};O.useEffect(()=>{e(C({name:r,category:c,ingredient:a})),localStorage.setItem("searchQuery",r)},[e,r,c,a]);const w=n.map(l=>l.category).filter(l=>l!==c),m=o.map(l=>l.title).filter(l=>l!==a);return f.jsxs(ze,{children:[f.jsx(Me,{id:"filterInput",type:"text",placeholder:"Enter the text",value:r,onChange:d,debounceTimeout:1e3}),f.jsx(q,{id:"categorySelect",placeholder:"All categories",options:w,onChange:y}),f.jsx(q,{id:"ingredientSelect",placeholder:"Ingredients",options:m,onChange:b})]})},Qe=Ae,qe=h.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,Ve=h.img`
  width: 100%;
  height: auto;
  margin-bottom: 14px;
  border-radius: 8px;
`,Fe=h.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;

  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,Ge=h(Z)`
  font-size: 14px;
  line-height: 1.125;
  color: var(--white-fifty-color);

  &:hover {
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,He=h.div`
  display: flex;
  justify-content: space-between;
`,Xe=({drinkThumb:e,drinkTitle:n,id:o})=>f.jsxs(qe,{children:[f.jsx(Ve,{src:e,alt:n,onError:r=>{r.currentTarget.src=oe}}),f.jsxs(He,{children:[f.jsx(Fe,{children:n}),f.jsx(Ge,{to:`/drinks/${o}`,children:"See more"})]})]}),Je=h.ul`
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
`,Ye=({drinks:e})=>f.jsx(Je,{children:e.map(({drink:n,drinkThumb:o,_id:r})=>f.jsx(Xe,{id:r,drinkTitle:n,drinkThumb:o},r))}),Ze=h.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,et=h.p`
  color: var(--white-color);
`;function at(){const e=V(),n=I(ie),o=I(ae),r=I(ce),t="",c="",i="",a=1,s=9;return O.useEffect(()=>{e(C({name:t,category:c,ingredient:i,page:a,size:s}))},[e]),f.jsx(ee,{children:f.jsxs(Ze,{children:[f.jsx(ne,{title:"Drinks"}),f.jsx(Qe,{}),o?f.jsx(te,{}):r||n.length===0?f.jsx(et,{children:"No cocktails were found for your request"}):f.jsx(Ye,{drinks:n})]})})}export{at as default};
