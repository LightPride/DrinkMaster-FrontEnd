import{e as S,r as O,u as d,j as l,d as V,c as j,f as J,h as Y,i as N,L as Z,C as ee}from"./index-ae2049e0.js";import{P as te}from"./PageTitle-c06e1f54.js";import{S as ne}from"./react-select.esm-b548895f.js";import{d as re,c as oe,a as ie,b as ae}from"./coctailPlaceholder-13210c95.js";const ce=e=>e.filters.categories,ue=e=>e.filters.ingredients;var I={},se="Expected a function",M=0/0,le="[object Symbol]",fe=/^\s+|\s+$/g,pe=/^[-+]0x[0-9a-f]+$/i,de=/^0b[01]+$/i,he=/^0o[0-7]+$/i,me=parseInt,ge=typeof S=="object"&&S&&S.Object===Object&&S,ye=typeof self=="object"&&self&&self.Object===Object&&self,be=ge||ye||Function("return this")(),ve=Object.prototype,xe=ve.toString,we=Math.max,_e=Math.min,E=function(){return be.Date.now()};function Oe(e,n,o){var r,t,c,i,a,u,f=0,y=!1,b=!1,w=!0;if(typeof e!="function")throw new TypeError(se);n=z(n)||0,B(o)&&(y=!!o.leading,b="maxWait"in o,c=b?we(z(o.maxWait)||0,n):c,w="trailing"in o?!!o.trailing:w);function h(s){var m=r,_=t;return r=t=void 0,f=s,i=e.apply(_,m),i}function x(s){return f=s,a=setTimeout(D,n),y?h(s):i}function P(s){var m=s-u,_=s-f,W=n-m;return b?_e(W,c-_):W}function K(s){var m=s-u,_=s-f;return u===void 0||m>=n||m<0||b&&_>=c}function D(){var s=E();if(K(s))return $(s);a=setTimeout(D,P(s))}function $(s){return a=void 0,w&&r?h(s):(r=t=void 0,i)}function H(){a!==void 0&&clearTimeout(a),f=0,r=u=t=a=void 0}function X(){return a===void 0?i:$(E())}function T(){var s=E(),m=K(s);if(r=arguments,t=this,u=s,m){if(a===void 0)return x(u);if(b)return a=setTimeout(D,n),h(u)}return a===void 0&&(a=setTimeout(D,n)),i}return T.cancel=H,T.flush=X,T}function B(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function je(e){return!!e&&typeof e=="object"}function De(e){return typeof e=="symbol"||je(e)&&xe.call(e)==le}function z(e){if(typeof e=="number")return e;if(De(e))return M;if(B(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=B(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(fe,"");var o=de.test(e);return o||he.test(e)?me(e.slice(2),o?2:8):pe.test(e)?M:+e}var Se=Oe;function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},L(e)}Object.defineProperty(I,"__esModule",{value:!0});I.DebounceInput=void 0;var U=F(O),ke=F(Se),Ie=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function F(e){return e&&e.__esModule?e:{default:e}}function Pe(e,n){if(e==null)return{};var o=Te(e,n),r,t;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Te(e,n){if(e==null)return{};var o={},r=Object.keys(e),t,c;for(c=0;c<r.length;c++)t=r[c],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}function A(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function p(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?A(Object(o),!0).forEach(function(r){g(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Ee(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Q(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ne(e,n,o){return n&&Q(e.prototype,n),o&&Q(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function Be(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&R(e,n)}function R(e,n){return R=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r},R(e,n)}function Le(e){var n=Ce();return function(){var r=k(e),t;if(n){var c=k(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return Re(this,t)}}function Re(e,n){if(n&&(L(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ce(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},k(e)}function g(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var G=function(e){Be(o,e);var n=Le(o);function o(r){var t;Ee(this,o),t=n.call(this,r),g(v(t),"onChange",function(i){i.persist();var a=t.state.value,u=t.props.minLength;t.setState({value:i.target.value},function(){var f=t.state.value;if(f.length>=u){t.notify(i);return}a.length>f.length&&t.notify(p(p({},i),{},{target:p(p({},i.target),{},{value:""})}))})}),g(v(t),"onKeyDown",function(i){i.key==="Enter"&&t.forceNotify(i);var a=t.props.onKeyDown;a&&(i.persist(),a(i))}),g(v(t),"onBlur",function(i){t.forceNotify(i);var a=t.props.onBlur;a&&(i.persist(),a(i))}),g(v(t),"createNotifier",function(i){if(i<0)t.notify=function(){return null};else if(i===0)t.notify=t.doNotify;else{var a=(0,ke.default)(function(u){t.isDebouncing=!1,t.doNotify(u)},i);t.notify=function(u){t.isDebouncing=!0,a(u)},t.flush=function(){return a.flush()},t.cancel=function(){t.isDebouncing=!1,a.cancel()}}}),g(v(t),"doNotify",function(){var i=t.props.onChange;i.apply(void 0,arguments)}),g(v(t),"forceNotify",function(i){var a=t.props.debounceTimeout;if(!(!t.isDebouncing&&a>0)){t.cancel&&t.cancel();var u=t.state.value,f=t.props.minLength;u.length>=f?t.doNotify(i):t.doNotify(p(p({},i),{},{target:p(p({},i.target),{},{value:u})}))}}),t.isDebouncing=!1,t.state={value:typeof r.value>"u"||r.value===null?"":r.value};var c=t.props.debounceTimeout;return t.createNotifier(c),t}return Ne(o,[{key:"componentDidUpdate",value:function(t){if(!this.isDebouncing){var c=this.props,i=c.value,a=c.debounceTimeout,u=t.debounceTimeout,f=t.value,y=this.state.value;typeof i<"u"&&f!==i&&y!==i&&this.setState({value:i}),a!==u&&this.createNotifier(a)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var t=this.props,c=t.element;t.onChange,t.value,t.minLength,t.debounceTimeout;var i=t.forceNotifyByEnter,a=t.forceNotifyOnBlur,u=t.onKeyDown,f=t.onBlur,y=t.inputRef,b=Pe(t,Ie),w=this.state.value,h;i?h={onKeyDown:this.onKeyDown}:u?h={onKeyDown:u}:h={};var x;a?x={onBlur:this.onBlur}:f?x={onBlur:f}:x={};var P=y?{ref:y}:{};return U.default.createElement(c,p(p(p(p({},b),{},{onChange:this.onChange,value:w},h),x),P))}}]),o}(U.default.PureComponent);I.DebounceInput=G;g(G,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0});var Ke=I,C=Ke.DebounceInput;C.DebounceInput=C;var $e=C;const We=d($e.DebounceInput)`
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
`,Me=d.div`
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
`,ze=d(ne)`
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
`,q=({placeholder:e,options:n,onChange:o})=>{const r=n.map(t=>({value:t,label:t}));return l.jsx(ze,{placeholder:e,options:r,onChange:o,classNamePrefix:"react-select",isClearable:!0,isSearchable:!0})},Ue=()=>{const e=V(),n=j(ce),o=j(ue),[r,t]=O.useState("");O.useEffect(()=>{e(J()),e(Y());const i=localStorage.getItem("searchQuery");i&&(t(i),e(N({name:i})))},[e]);const c=i=>{const a=i.target.value;t(a),localStorage.setItem("searchQuery",a)};return O.useEffect(()=>{e(N({name:r})),localStorage.setItem("searchQuery",r)},[e,r]),l.jsxs(Me,{children:[l.jsx(We,{id:"filterInput",type:"text",placeholder:"Enter the text",value:r,onChange:c,debounceTimeout:1e3}),l.jsx(q,{id:"categorySelect",placeholder:"All categories",options:n.map(i=>i.category)}),l.jsx(q,{id:"ingredientSelect",placeholder:"Ingredients",options:o.map(i=>i.title)})]})},Ae=Ue,Qe=d.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,qe=d.img`
  width: 100%;
  height: auto;
  margin-bottom: 14px;
  border-radius: 8px;
`,Ve=d.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;

  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,Fe=d(Z)`
  font-size: 14px;
  line-height: 1.125;
  color: var(--white-fifty-color);

  &:hover {
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Ge=d.div`
  display: flex;
  justify-content: space-between;
`,He=({drinkThumb:e,drinkTitle:n,id:o})=>l.jsxs(Qe,{children:[l.jsx(qe,{src:e,alt:n,onError:r=>{r.currentTarget.src=re}}),l.jsxs(Ge,{children:[l.jsx(Ve,{children:n}),l.jsx(Fe,{to:`/drinks/${o}`,children:"See more"})]})]}),Xe=d.ul`
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
`,Je=({drinks:e})=>l.jsx(Xe,{children:e.map(({drink:n,drinkThumb:o,_id:r})=>l.jsx(He,{id:r,drinkTitle:n,drinkThumb:o},r))}),Ye=d.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,Ze=d.p`
  color: var(--white-color);
`;function ot(){const e=V(),n=j(oe),o=j(ie),r=j(ae),t="",c="",i="",a=1,u=9;return O.useEffect(()=>{e(N({name:t,category:c,ingredient:i,page:a,size:u}))},[e]),l.jsx(ee,{children:l.jsxs(Ye,{children:[l.jsx(te,{title:"Drinks"}),l.jsx(Ae,{}),o?l.jsx("p",{children:"Loading..."}):r||n.length===0?l.jsx(Ze,{children:"No cocktails were found for your request"}):l.jsx(Je,{drinks:n})]})})}export{ot as default};
