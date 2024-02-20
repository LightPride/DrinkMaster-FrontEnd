import{u as o,j as i,k as I,m as F,r as C,o as R,C as T}from"./index-2671aaa2.js";import{P as M}from"./PageTitle-16bde45c.js";import{r as x}from"./recipes-8f698c44.js";import{u as O}from"./useDispatch-f8591da0.js";var v="NOT_FOUND";function $(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:v},put:function(r,c){e={key:r,value:c}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function A(n,e){var t=[];function r(s){var a=t.findIndex(function(h){return e(s,h.key)});if(a>-1){var d=t[a];return a>0&&(t.splice(a,1),t.unshift(d)),d.value}return v}function c(s,a){r(s)===v&&(t.unshift({key:s,value:a}),t.length>n&&t.pop())}function p(){return t}function m(){t=[]}return{get:r,put:c,getEntries:p,clear:m}}var q=function(e,t){return e===t};function W(n){return function(t,r){if(t===null||r===null||t.length!==r.length)return!1;for(var c=t.length,p=0;p<c;p++)if(!n(t[p],r[p]))return!1;return!0}}function N(n,e){var t=typeof e=="object"?e:{equalityCheck:e},r=t.equalityCheck,c=r===void 0?q:r,p=t.maxSize,m=p===void 0?1:p,s=t.resultEqualityCheck,a=W(c),d=m===1?$(a):A(m,a);function h(){var l=d.get(arguments);if(l===v){if(l=n.apply(null,arguments),s){var u=d.getEntries(),g=u.find(function(f){return s(f.value,l)});g&&(l=g.value)}d.put(arguments,l)}return l}return h.clearCache=function(){return d.clear()},h}function U(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every(function(r){return typeof r=="function"})){var t=e.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function B(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var c=function(){for(var m=arguments.length,s=new Array(m),a=0;a<m;a++)s[a]=arguments[a];var d=0,h,l={memoizeOptions:void 0},u=s.pop();if(typeof u=="object"&&(l=u,u=s.pop()),typeof u!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var g=l,f=g.memoizeOptions,j=f===void 0?t:f,S=Array.isArray(j)?j:[j],b=U(s),y=n.apply(void 0,[function(){return d++,u.apply(null,arguments)}].concat(S)),D=n(function(){for(var z=[],E=b.length,k=0;k<E;k++)z.push(b[k].apply(null,arguments));return h=y.apply(null,z),h});return Object.assign(D,{resultFunc:u,memoizedResultFunc:y,dependencies:b,lastResult:function(){return h},recomputations:function(){return d},resetRecomputations:function(){return d=0}}),D};return c}var L=B(N);const H=o.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 132px;
  }
`,_=o.p`
  color: var(--white-fifty-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  margin-top: 8px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,K=o.p`
  color: var(--white-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  margin-top: 20px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }
`,V=o.button`
  color: var(--dark-blue-color);
  padding: 14px 40px;
  font-family: inherit;
  font: inherit;
  font-weight: 600;
  line-height: 1.285;
  margin-top: 40px;
  background-color: var(--white-color);
  border-radius: 42px;
  border: 1px solid transparent;

  &:active {
    border: 1px solid var(--blue-fifty-color);
  }

  &:hover,
  &:focus {
    color: var(--white-color);
    background: var(--dark-blue-color);
  }

  &:disabled {
    /* color: ; */
    background: var(--grey-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.16;
    padding: 17px 43.5px;
  }
`,G=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`,J=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
`,Q=o.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;
  /* border: 1px solid green; */

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`,X=o.div`
  @media screen and (min-width: 1440px) {
    padding-top: 26px;
    max-width: 592px;
    /* border: 1px solid yellow; */
  }
`;o.div`
  margin-top: 80px;
  /* background-color: ; */
  border-radius: 8px;
  padding: 28px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;const Y=({name:n,glass:e,alcoholic:t,description:r,imgPath:c})=>i.jsx(i.Fragment,{children:i.jsxs(J,{children:[i.jsxs(X,{children:[i.jsx(M,{title:n}),i.jsxs(_,{children:[e," / ",t]}),i.jsx(K,{children:r}),i.jsx(V,{children:"Add to favorite drinks"})]}),i.jsx(Q,{children:i.jsx(G,{src:c,alt:"img"})})]})}),Z=o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: var(--white-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    margin-top: 14px;
  }
`,ee=o.img`
  width: 100%;
  width: 157px;
  height: 157px;
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,te=o.div`
  width: 100%;
  /* max-width: 158px; */
  /* padding: 25px; */
  border-radius: 8px;
  background-color: var(--dark-blue-fifty-color);
  /* border: 1px solid green; */

  @media screen and (min-width: 768px) {
    height: 220px;
    /* padding: 31px; */
  }
`,ie=o.p`
  color: var(--white-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    width: 150px;
  }
`,ne=o.p`
  margin-bottom: 0;
  color: var(--white-fifty-color);
  font-size: 14px;
  line-height: 1.29;
  text-align: end;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;o.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`;const re=({title:n,measure:e,quantity:t,images:r})=>i.jsxs(i.Fragment,{children:[i.jsx(te,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:r}),i.jsx("source",{media:"(min-width: 768px)",srcSet:r}),i.jsx("source",{media:"(min-width: 375px)",srcSet:r}),i.jsx(ee,{src:r,alt:"ingredient photo"})]})}),i.jsxs(Z,{children:[i.jsx(ie,{children:n}),i.jsx(ne,{children:t?`${t} ${e}`:e})]})]}),oe=o.h2`
  color: var(--white-fifty-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  margin-top: 18px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`,ae=o.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  margin-top: 42px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 22px;
    grid-row-gap: 22px;
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 35px;
    grid-row-gap: 35px;
  }
`;let se=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");const ce=({ingredients:n})=>i.jsxs(i.Fragment,{children:[i.jsx(oe,{children:"Ingredients"}),i.jsx(ae,{children:n.map(e=>i.jsx("li",{children:i.jsx(re,{title:e.title,measure:e.measure,quantity:e.quantity,images:e.ingredientThumb})},se()))})]}),P="/DrinkMaster-FrontEnd/assets/coctails@1xMob-773a9476.jpg",de="/DrinkMaster-FrontEnd/assets/coctails@2xMob-fecfc36c.jpg",pe="/DrinkMaster-FrontEnd/assets/coctails@1xTab-650f5580.jpg",le="/DrinkMaster-FrontEnd/assets/coctails@2xTab-ceb1294d.jpg",ue="/DrinkMaster-FrontEnd/assets/coctails@1xDesk-461ecb5e.jpg",he="/DrinkMaster-FrontEnd/assets/coctails@2xDesk-d80c3656.jpg",xe=o.h2`
  color: var(--white-color);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 80px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`,me=o.p`
  color: var(--white-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.285;
  margin-top: 40px;
  margin-bottom: 0;
  overflow-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`,ge=o.img`
  width: 100%;
  height: 430px;
  object-fit: cover;
  margin-top: 40px;
  border-radius: 10px;

  @media screen and (min-width: 1440px) {
    margin: 0;
    height: 480px;
    min-width: 631px;
  }
`,fe=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`,we=({instructions:n})=>i.jsxs(i.Fragment,{children:[i.jsx(xe,{children:"Recipe Preparation"}),i.jsxs(fe,{children:[i.jsx(me,{children:n}),i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:`${ue} 1x, ${he} 2x`}),i.jsx("source",{media:"(min-width: 768px)",srcSet:`${pe} 1x, ${le} 2x`}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${P} 1x, ${de} 2x`}),i.jsx(ge,{src:P,alt:"drinks photo"})]})]})]}),ve=(n,e)=>n.drinks.drinks.find(t=>t._id===e),je=n=>n.drinks.popularDrinks;L([je],n=>n.slice(0,4));const ze=()=>{const n=O(),{drinkId:e}=I();console.log(e);const t=F(r=>ve(r,e));return C.useEffect(()=>{n(R(e))},[n,e]),console.log(t),i.jsx(T,{children:i.jsxs(H,{children:[i.jsx(Y,{id:x._id,name:x[0].drink,glass:x[0].glass,alcoholic:x[0].alcoholic,description:x[0].description,imgPath:x[0].drinkThumb}),i.jsx(ce,{ingredients:x[0].ingredients}),i.jsx(we,{instructions:x[0].instructions})]})})};export{ze as default};
