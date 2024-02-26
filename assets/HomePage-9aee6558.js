import{u as t,j as e,L as w,a as f,b as j,c,r as p,d as k,g as v,C as y,e as D}from"./index-fbe50268.js";import{N as z,a as H,n as P,b as C}from"./blueIced@2xMob-abf058dd.js";import{s as b,a as E,b as L}from"./drinks.selectors-9842005e.js";import{n as l}from"./index.browser-7e542916.js";import{D as T,E as F}from"./DrinksPage.styled-4245b60d.js";import"./coctailPlaceholder-82987b74.js";const M=t.div`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 140px;
  }
`,W=t.button`
  display: block;
  font: inherit;
  font-size: 16px;
  font-weight: 600;
  padding: 18px 44px;
  border: none;
  border-radius: 42px;
  margin: 0 auto;
  background-color: rgb(243, 243, 243);
  color: #161f37;
  /* margin-bottom: 140px; */
  border: 1px solid transparent;

  &:active {
    border: 1px solid var(--blue-color);
  }

  &:hover,
  &:focus {
    color: var(--white-color);
    background: var(--dark-blue-color);
  }
  &:disabled {
    background: var(--grey-color);
  }
`,N=t.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: normal;
    justify-content: space-between;
    padding-bottom: 218px;
  }
`,S=t.div`
  @media screen and (max-width: 767px) {
    padding-top: 80px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 120px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 185px;
    width: 715px;
  }
`,$=t.div`
  @media screen and (max-width: 767px) {
    margin-top: 47px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0px;
    padding-top: 128px;
  }
`,R=t.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0%;
  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 56px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0%;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    font-weight: 600;
    line-height: 68px;
    letter-spacing: 0%;
  }
`,_=t.p`
  @media screen and (max-width: 767px) {
    margin-top: 16px;
    margin-bottom: 32px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
  }
  @media screen and (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 48px;
    max-width: 600px;

    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
    margin-top: 28px;
    margin-bottom: 40px;
  }
  color: #f3f3f3;
`,I=t.img`
  width: 252px;
  height: 313px;
  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,A=t.button`
  border: none;
  background-color: var(--white-color);
  cursor: pointer;
  padding: 14px 40px;
  border-radius: 42px;
  font-family: inherit;
  font: inherit;
  color: rgb(22, 31, 55);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  border: 1px solid transparent;

  &:active {
    border: 1px solid var(--blue-color);
  }

  &:hover,
  &:focus {
    color: var(--white-color);
    background: var(--dark-blue-color);
  }
  &:disabled {
    background: var(--grey-color);
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
  }
`,B=()=>e.jsxs(N,{children:[e.jsxs(S,{children:[e.jsx(R,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx(_,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),e.jsx(w,{to:"/add",children:e.jsx(A,{type:"button",children:"Add drinks"})})]}),e.jsx($,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${f} 1x, ${j} 2x`,type:"image/png"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${z} 1x, ${H} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${P} 1x, ${C} 2x`,type:"image/png"}),e.jsx(I,{src:f,alt:"glass photo",loading:"lazy",width:"349",height:"445"})]})})]}),O=t.div`
  padding-top: 124px;
  display: flex;
  @media screen and (min-width: 1440px) {
    padding-top: unset;
  }
`,q=t.div`
  display: flex;
  flex-direction: column;
`,U=t.ul`
  gap: 40px;
`,Y=t.h2`
  font-weight: 600;
  font-size: 40px;
  width: 100%;
  color: rgb(243, 243, 243);
  margin-bottom: 20px;
`,G=t.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: colum; */
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 80px;
`,J=({quantity:i})=>{const x=c(b);return e.jsx(O,{children:e.jsx(q,{children:x.map(({category:a,drinks:s})=>e.jsxs(U,{children:[e.jsx(Y,{children:a},l()),e.jsx(G,{children:s.slice(0,i).map(({drink:d,drinkThumb:r,_id:n})=>e.jsx(T,{id:n,drinkTitle:d,drinkThumb:r},n))},l())]},l()))})})},te=()=>{const[i,x]=p.useState(g()),a=k(),s=c(b),d=c(E),r=c(L),n=p.useRef(null),m=!r&&!d&&s&&s.length>0;let o=1;i==="tablet"?o=2:i==="desktop"&&(o=3),p.useEffect(()=>{function h(){const u=g();u!==i&&x(u)}return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[i]),p.useEffect(()=>(n.current=setTimeout(()=>{a(v(o)),n.current=null},1e3),()=>clearTimeout(n.current)),[a,o]);function g(){return window.matchMedia("(max-width: 768px)").matches?"mobile":window.matchMedia("(max-width: 1440px)").matches?"tablet":"desktop"}return e.jsx(y,{children:e.jsxs(M,{children:[e.jsx(B,{}),r!==null&&e.jsx(F,{children:r}),d&&e.jsx(D,{}),m&&e.jsx(J,{quantity:o}),m&&e.jsx(w,{to:"/drinks",children:e.jsx(W,{type:"button",children:"Other drinks"})})]})})};export{te as default};
