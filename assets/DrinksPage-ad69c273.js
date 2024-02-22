import{u as d,j as l,d as j,r as V,L as X,e as T,g as J,C as Q}from"./index-cfb9722a.js";import{P as Y}from"./PageTitle-9d5471f7.js";import{S as Z,c as ee,i as te}from"./ingredients-f12fae87.js";import{d as ne}from"./coctailPlaceholder-82987b74.js";import{s as re,a as oe,b as ie}from"./drinks.selectors-ed74eb13.js";import{u as ae}from"./useDispatch-3f317a64.js";const ce=d(Z)`
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
`,$=({placeholder:e,options:n,onChange:o})=>{const r=n.map(t=>({value:t,label:t}));return l.jsx(ce,{placeholder:e,options:r,onChange:o,classNamePrefix:"react-select",isClearable:!0,isSearchable:!0})};var S={},ue="Expected a function",W=0/0,se="[object Symbol]",le=/^\s+|\s+$/g,fe=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,de=/^0o[0-7]+$/i,me=parseInt,he=typeof j=="object"&&j&&j.Object===Object&&j,ye=typeof self=="object"&&self&&self.Object===Object&&self,ge=he||ye||Function("return this")(),be=Object.prototype,xe=be.toString,ve=Math.max,we=Math.min,I=function(){return ge.Date.now()};function _e(e,n,o){var r,t,c,i,a,u,f=0,g=!1,b=!1,w=!0;if(typeof e!="function")throw new TypeError(ue);n=M(n)||0,E(o)&&(g=!!o.leading,b="maxWait"in o,c=b?ve(M(o.maxWait)||0,n):c,w="trailing"in o?!!o.trailing:w);function m(s){var h=r,_=t;return r=t=void 0,f=s,i=e.apply(_,h),i}function v(s){return f=s,a=setTimeout(O,n),g?m(s):i}function k(s){var h=s-u,_=s-f,K=n-h;return b?we(K,c-_):K}function R(s){var h=s-u,_=s-f;return u===void 0||h>=n||h<0||b&&_>=c}function O(){var s=I();if(R(s))return C(s);a=setTimeout(O,k(s))}function C(s){return a=void 0,w&&r?m(s):(r=t=void 0,i)}function G(){a!==void 0&&clearTimeout(a),f=0,r=u=t=a=void 0}function H(){return a===void 0?i:C(I())}function P(){var s=I(),h=R(s);if(r=arguments,t=this,u=s,h){if(a===void 0)return v(u);if(b)return a=setTimeout(O,n),m(u)}return a===void 0&&(a=setTimeout(O,n)),i}return P.cancel=G,P.flush=H,P}function E(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Oe(e){return!!e&&typeof e=="object"}function je(e){return typeof e=="symbol"||Oe(e)&&xe.call(e)==se}function M(e){if(typeof e=="number")return e;if(je(e))return W;if(E(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=E(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(le,"");var o=pe.test(e);return o||de.test(e)?me(e.slice(2),o?2:8):fe.test(e)?W:+e}var De=_e;function N(e){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},N(e)}Object.defineProperty(S,"__esModule",{value:!0});S.DebounceInput=void 0;var z=q(V),Se=q(De),ke=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function q(e){return e&&e.__esModule?e:{default:e}}function Pe(e,n){if(e==null)return{};var o=Te(e,n),r,t;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Te(e,n){if(e==null)return{};var o={},r=Object.keys(e),t,c;for(c=0;c<r.length;c++)t=r[c],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}function A(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function p(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?A(Object(o),!0).forEach(function(r){y(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Ie(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function U(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,n,o){return n&&U(e.prototype,n),o&&U(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ne(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&B(e,n)}function B(e,n){return B=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r},B(e,n)}function Be(e){var n=Re();return function(){var r=D(e),t;if(n){var c=D(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return Le(this,t)}}function Le(e,n){if(n&&(N(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Re(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},D(e)}function y(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var F=function(e){Ne(o,e);var n=Be(o);function o(r){var t;Ie(this,o),t=n.call(this,r),y(x(t),"onChange",function(i){i.persist();var a=t.state.value,u=t.props.minLength;t.setState({value:i.target.value},function(){var f=t.state.value;if(f.length>=u){t.notify(i);return}a.length>f.length&&t.notify(p(p({},i),{},{target:p(p({},i.target),{},{value:""})}))})}),y(x(t),"onKeyDown",function(i){i.key==="Enter"&&t.forceNotify(i);var a=t.props.onKeyDown;a&&(i.persist(),a(i))}),y(x(t),"onBlur",function(i){t.forceNotify(i);var a=t.props.onBlur;a&&(i.persist(),a(i))}),y(x(t),"createNotifier",function(i){if(i<0)t.notify=function(){return null};else if(i===0)t.notify=t.doNotify;else{var a=(0,Se.default)(function(u){t.isDebouncing=!1,t.doNotify(u)},i);t.notify=function(u){t.isDebouncing=!0,a(u)},t.flush=function(){return a.flush()},t.cancel=function(){t.isDebouncing=!1,a.cancel()}}}),y(x(t),"doNotify",function(){var i=t.props.onChange;i.apply(void 0,arguments)}),y(x(t),"forceNotify",function(i){var a=t.props.debounceTimeout;if(!(!t.isDebouncing&&a>0)){t.cancel&&t.cancel();var u=t.state.value,f=t.props.minLength;u.length>=f?t.doNotify(i):t.doNotify(p(p({},i),{},{target:p(p({},i.target),{},{value:u})}))}}),t.isDebouncing=!1,t.state={value:typeof r.value>"u"||r.value===null?"":r.value};var c=t.props.debounceTimeout;return t.createNotifier(c),t}return Ee(o,[{key:"componentDidUpdate",value:function(t){if(!this.isDebouncing){var c=this.props,i=c.value,a=c.debounceTimeout,u=t.debounceTimeout,f=t.value,g=this.state.value;typeof i<"u"&&f!==i&&g!==i&&this.setState({value:i}),a!==u&&this.createNotifier(a)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var t=this.props,c=t.element;t.onChange,t.value,t.minLength,t.debounceTimeout;var i=t.forceNotifyByEnter,a=t.forceNotifyOnBlur,u=t.onKeyDown,f=t.onBlur,g=t.inputRef,b=Pe(t,ke),w=this.state.value,m;i?m={onKeyDown:this.onKeyDown}:u?m={onKeyDown:u}:m={};var v;a?v={onBlur:this.onBlur}:f?v={onBlur:f}:v={};var k=g?{ref:g}:{};return z.default.createElement(c,p(p(p(p({},b),{},{onChange:this.onChange,value:w},m),v),k))}}]),o}(z.default.PureComponent);S.DebounceInput=F;y(F,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0});var Ce=S,L=Ce.DebounceInput;L.DebounceInput=L;var Ke=L;const $e=d(Ke.DebounceInput)`
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
`,We=d.div`
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
`,Me=ee.map(e=>e.categori),ze=te.map(e=>e.title),Ae=({handleChangeFilter:e})=>l.jsxs(We,{children:[l.jsx($e,{id:"filterInput",type:"text",placeholder:"Enter the text",onChange:e,debounceTimeout:1e3}),l.jsx($,{id:"categorySelect",placeholder:"All categories",options:Me}),l.jsx($,{id:"ingredientSelect",placeholder:"Ingredients",options:ze})]}),Ue=Ae,Ve=d.li`
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
`,Fe=d.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;

  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,Ge=d(X)`
  font-size: 14px;
  line-height: 1.125;
  color: var(--white-fifty-color);

  &:hover {
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,He=d.div`
  display: flex;
  justify-content: space-between;
`,Xe=({drinkThumb:e,drinkTitle:n,id:o})=>l.jsxs(Ve,{children:[l.jsx(qe,{src:e,alt:n,onError:r=>{r.currentTarget.src=ne}}),l.jsxs(He,{children:[l.jsx(Fe,{children:n}),l.jsx(Ge,{to:`/drinks/${o}`,children:"See more"})]})]}),Je=d.ul`
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
`,Qe=({drinks:e})=>l.jsx(Je,{children:e.map(({drink:n,drinkThumb:o,_id:r})=>l.jsx(Xe,{id:r,drinkTitle:n,drinkThumb:o},r))}),Ye=d.div`
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
`;function at(){const e=ae(),n=T(re),o=T(oe),r=T(ie),t="",c="",i="",a=1,u=9;return V.useEffect(()=>{e(J({name:t,category:c,ingredient:i,page:a,size:u}))},[e]),l.jsx(Q,{children:l.jsxs(Ye,{children:[l.jsx(Y,{title:"Drinks"}),l.jsx(Ue,{}),o?l.jsx("p",{children:"Loading..."}):r?l.jsxs(Ze,{children:["Error: ",r]}):l.jsx(Qe,{drinks:n})]})})}export{at as default};
