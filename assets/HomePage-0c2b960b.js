import{u as t,j as e,L as w,a as f,b as j,c as p,r as s,d as k,g as v,C as y,e as D}from"./index-07711ada.js";import{N as z,a as H,n as P,b as C}from"./blueIced@2xMob-abf058dd.js";import{s as b,a as L,b as T}from"./drinks.selectors-c82db5cf.js";import{n as l}from"./index.browser-7e542916.js";import{D as E}from"./DrinksItem-8fcb5994.js";import"./coctailPlaceholder-82987b74.js";const F=t.div`
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
`,M=t.div`
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
`,N=t.div`
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
`,S=t.div`
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
`,$=t.div`
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
`,R=t.p`
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
    width: 500px;
  }
  color: #f3f3f3;
`,_=t.img`
  width: 252px;
  height: 313px;
  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,I=t.button`
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
`,A=()=>e.jsxs(M,{children:[e.jsxs(N,{children:[e.jsx($,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx(R,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),e.jsx(w,{to:"/add",children:e.jsx(I,{type:"button",children:"Add drinks"})})]}),e.jsx(S,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${f} 1x, ${j} 2x`,type:"image/png"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${z} 1x, ${H} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${P} 1x, ${C} 2x`,type:"image/png"}),e.jsx(_,{src:f,alt:"glass photo",loading:"lazy",width:"349",height:"445"})]})})]}),B=t.div`
  padding-top: 124px;
  display: flex;
  @media screen and (min-width: 1440px) {
    padding-top: unset;
  }
`,O=t.div`
  display: flex;
  flex-direction: column;
`,q=t.ul`
  gap: 40px;
`,U=t.h2`
  font-weight: 600;
  font-size: 40px;
  width: 100%;
  color: rgb(243, 243, 243);
  margin-bottom: 20px;
`,Y=t.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: colum; */
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 80px;
`,G=({quantity:i})=>{const c=p(b);return e.jsx(B,{children:e.jsx(O,{children:c.map(({category:o,drinks:a})=>e.jsxs(q,{children:[e.jsx(U,{children:o},l()),e.jsx(Y,{children:a.slice(0,i).map(({drink:d,drinkThumb:x,_id:n})=>e.jsx(E,{id:n,drinkTitle:d,drinkThumb:x},n))},l())]},l()))})})},ee=()=>{const[i,c]=s.useState(g()),o=k(),a=p(b),d=p(L),x=p(T),n=s.useRef(null),m=!x&&!d&&a&&a.length>0;let r=1;i==="tablet"?r=2:i==="desktop"&&(r=3),s.useEffect(()=>{function h(){const u=g();u!==i&&c(u)}return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[i]),s.useEffect(()=>(n.current=setTimeout(()=>{o(v(r)),n.current=null},1e3),()=>clearTimeout(n.current)),[o,r]);function g(){return window.matchMedia("(max-width: 768px)").matches?"mobile":window.matchMedia("(max-width: 1440px)").matches?"tablet":"desktop"}return e.jsx(y,{children:e.jsxs(F,{children:[e.jsx(A,{}),d&&e.jsx(D,{}),m&&e.jsx(G,{quantity:r}),m&&e.jsx(w,{to:"/drinks",children:e.jsx(W,{type:"button",children:"Other drinks"})})]})})};export{ee as default};
