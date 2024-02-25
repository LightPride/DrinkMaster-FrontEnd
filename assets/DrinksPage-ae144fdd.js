import{e as I,r as O,u as j,j as p,d as H,c as k,f as X,h as J,i as Y,k as Z,l as ee,C as te,L as ne}from"./index-dacbfed1.js";import{P as re}from"./PageTitle-5994c675.js";import{S as oe,s as ie,a as ae}from"./react-select.esm-5c416c05.js";import{D as ce}from"./DrinksItem-421ba5dd.js";import{c as ue,a as se,b as le}from"./drinks.selectors-8c399196.js";import"./coctailPlaceholder-82987b74.js";var T={},fe="Expected a function",M=0/0,pe="[object Symbol]",de=/^\s+|\s+$/g,ge=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,he=/^0o[0-7]+$/i,me=parseInt,be=typeof I=="object"&&I&&I.Object===Object&&I,ve=typeof self=="object"&&self&&self.Object===Object&&self,xe=be||ve||Function("return this")(),_e=Object.prototype,we=_e.toString,Oe=Math.max,je=Math.min,C=function(){return xe.Date.now()};function Se(e,n,r){var o,t,u,i,a,c,f=0,d=!1,m=!1,_=!0;if(typeof e!="function")throw new TypeError(fe);n=U(n)||0,L(r)&&(d=!!r.leading,m="maxWait"in r,u=m?Oe(U(r.maxWait)||0,n):u,_="trailing"in r?!!r.trailing:_);function h(l){var v=o,D=t;return o=t=void 0,f=l,i=e.apply(D,v),i}function b(l){return f=l,a=setTimeout(s,n),d?h(l):i}function S(l){var v=l-c,D=l-f,W=n-v;return m?je(W,u-D):W}function P(l){var v=l-c,D=l-f;return c===void 0||v>=n||v<0||m&&D>=u}function s(){var l=C();if(P(l))return g(l);a=setTimeout(s,S(l))}function g(l){return a=void 0,_&&o?h(l):(o=t=void 0,i)}function E(){a!==void 0&&clearTimeout(a),f=0,o=c=t=a=void 0}function Q(){return a===void 0?i:g(C())}function B(){var l=C(),v=P(l);if(o=arguments,t=this,c=l,v){if(a===void 0)return b(c);if(m)return a=setTimeout(s,n),h(c)}return a===void 0&&(a=setTimeout(s,n)),i}return B.cancel=E,B.flush=Q,B}function L(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function De(e){return!!e&&typeof e=="object"}function ke(e){return typeof e=="symbol"||De(e)&&we.call(e)==pe}function U(e){if(typeof e=="number")return e;if(ke(e))return M;if(L(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=L(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(de,"");var r=ye.test(e);return r||he.test(e)?me(e.slice(2),r?2:8):ge.test(e)?M:+e}var Pe=Se;function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},R(e)}Object.defineProperty(T,"__esModule",{value:!0});T.DebounceInput=void 0;var A=F(O),Ie=F(Pe),Ne=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function F(e){return e&&e.__esModule?e:{default:e}}function Te(e,n){if(e==null)return{};var r=Ee(e,n),o,t;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)o=u[t],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function Ee(e,n){if(e==null)return{};var r={},o=Object.keys(e),t,u;for(u=0;u<o.length;u++)t=o[u],!(n.indexOf(t)>=0)&&(r[t]=e[t]);return r}function q(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function y(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?q(Object(r),!0).forEach(function(o){x(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Be(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function z(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ce(e,n,r){return n&&z(e.prototype,n),r&&z(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Le(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&K(e,n)}function K(e,n){return K=Object.setPrototypeOf||function(o,t){return o.__proto__=t,o},K(e,n)}function Re(e){var n=$e();return function(){var o=N(e),t;if(n){var u=N(this).constructor;t=Reflect.construct(o,arguments,u)}else t=o.apply(this,arguments);return Ke(this,t)}}function Ke(e,n){if(n&&(R(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $e(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},N(e)}function x(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var G=function(e){Le(r,e);var n=Re(r);function r(o){var t;Be(this,r),t=n.call(this,o),x(w(t),"onChange",function(i){i.persist();var a=t.state.value,c=t.props.minLength;t.setState({value:i.target.value},function(){var f=t.state.value;if(f.length>=c){t.notify(i);return}a.length>f.length&&t.notify(y(y({},i),{},{target:y(y({},i.target),{},{value:""})}))})}),x(w(t),"onKeyDown",function(i){i.key==="Enter"&&t.forceNotify(i);var a=t.props.onKeyDown;a&&(i.persist(),a(i))}),x(w(t),"onBlur",function(i){t.forceNotify(i);var a=t.props.onBlur;a&&(i.persist(),a(i))}),x(w(t),"createNotifier",function(i){if(i<0)t.notify=function(){return null};else if(i===0)t.notify=t.doNotify;else{var a=(0,Ie.default)(function(c){t.isDebouncing=!1,t.doNotify(c)},i);t.notify=function(c){t.isDebouncing=!0,a(c)},t.flush=function(){return a.flush()},t.cancel=function(){t.isDebouncing=!1,a.cancel()}}}),x(w(t),"doNotify",function(){var i=t.props.onChange;i.apply(void 0,arguments)}),x(w(t),"forceNotify",function(i){var a=t.props.debounceTimeout;if(!(!t.isDebouncing&&a>0)){t.cancel&&t.cancel();var c=t.state.value,f=t.props.minLength;c.length>=f?t.doNotify(i):t.doNotify(y(y({},i),{},{target:y(y({},i.target),{},{value:c})}))}}),t.isDebouncing=!1,t.state={value:typeof o.value>"u"||o.value===null?"":o.value};var u=t.props.debounceTimeout;return t.createNotifier(u),t}return Ce(r,[{key:"componentDidUpdate",value:function(t){if(!this.isDebouncing){var u=this.props,i=u.value,a=u.debounceTimeout,c=t.debounceTimeout,f=t.value,d=this.state.value;typeof i<"u"&&f!==i&&d!==i&&this.setState({value:i}),a!==c&&this.createNotifier(a)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var t=this.props,u=t.element;t.onChange,t.value,t.minLength,t.debounceTimeout;var i=t.forceNotifyByEnter,a=t.forceNotifyOnBlur,c=t.onKeyDown,f=t.onBlur,d=t.inputRef,m=Te(t,Ne),_=this.state.value,h;i?h={onKeyDown:this.onKeyDown}:c?h={onKeyDown:c}:h={};var b;a?b={onBlur:this.onBlur}:f?b={onBlur:f}:b={};var S=d?{ref:d}:{};return A.default.createElement(u,y(y(y(y({},m),{},{onChange:this.onChange,value:_},h),b),S))}}]),r}(A.default.PureComponent);T.DebounceInput=G;x(G,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0});var We=T,$=We.DebounceInput;$.DebounceInput=$;var Me=$;const Ue=j(Me.DebounceInput)`
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
`,Ae=j.div`
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
`,qe=j(oe)`
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
`,V=({placeholder:e,options:n,onChange:r})=>{const o=n.map(t=>({value:t,label:t}));return p.jsx(qe,{placeholder:e,options:o,onChange:r,classNamePrefix:"react-select",isClearable:!0,isSearchable:!0})},ze=()=>{const e=H(),n=k(ie),r=k(ae),o=X(),t=J(),u=new URLSearchParams(o.search),[i,a]=O.useState(u.get("name")||""),[c,f]=O.useState(u.get("category")||""),[d,m]=O.useState(u.get("ingredient")||"");O.useEffect(()=>{e(Y()),e(Z())},[e]),O.useEffect(()=>{(async()=>{await e(ee({name:i,category:c,ingredient:d}));const g=new URLSearchParams;i&&g.append("name",i),c&&g.append("category",c),d&&g.append("ingredient",d);const E=g.toString();t(`?${E}`)})()},[e,i,c,d,t]);const _=s=>{const g=s.target.value;a(g)},h=s=>{const g=s?s.value:"";f(g)},b=s=>{const g=s?s.value:"";m(g)},S=n.map(s=>s.category).filter(s=>s!==c),P=r.map(s=>s.title).filter(s=>s!==d);return p.jsxs(Ae,{children:[p.jsx(Ue,{id:"filterInput",type:"text",placeholder:"Enter the text",value:i,onChange:_,debounceTimeout:1e3}),p.jsx(V,{id:"categorySelect",placeholder:"All categories",options:S,onChange:h}),p.jsx(V,{id:"ingredientSelect",placeholder:"Ingredients",options:P,onChange:b})]})},Ve=ze,Fe=j.ul`
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
`,Ge=({drinks:e})=>p.jsx(Fe,{children:e.map(({drink:n,drinkThumb:r,_id:o})=>p.jsx(ce,{id:o,drinkTitle:n,drinkThumb:r},o))}),Qe=j.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,He=j.p`
  color: var(--white-color);
`;function nt(){const e=k(ue),n=k(se),r=k(le);return p.jsx(te,{children:p.jsxs(Qe,{children:[p.jsx(re,{title:"Drinks"}),p.jsx(Ve,{}),n?p.jsx(ne,{}):r||e.length===0?p.jsx(He,{children:"No cocktails were found for your request"}):p.jsx(Ge,{drinks:e})]})})}export{nt as default};
