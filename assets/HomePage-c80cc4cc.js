import{u as i,j as e,a as m,b as w,c as p,r as g,d as b,g as k,C as j}from"./index-f675f5d0.js";import{N as v,a as y,n as z,b as C}from"./blueIced@2xMob-abf058dd.js";import{s as h,a as D,b as H}from"./drinks.selectors-12125697.js";import{n as x}from"./index.browser-7e542916.js";import{D as P}from"./DrinksItem-532f80ec.js";import"./coctailPlaceholder-82987b74.js";const W=i.div`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom:140px;
  } 
`,F=i.button`
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
`,N=i.div`
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
`,E=i.div`
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
`,L=i.div`
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
`,S=i.div`
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
`,$=i.p`
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
`,_=i.img`
  width: 252px;
  height: 313px;
  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,I=i.button`
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
`,M=()=>{const n=()=>{console.log("Button clicked")};return e.jsxs(N,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx($,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),e.jsx(I,{onClick:n,children:"Add drinks"})]}),e.jsx(L,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${m} 1x, ${w} 2x`,type:"image/png"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${v} 1x, ${y} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${z} 1x, ${C} 2x`,type:"image/png"}),e.jsx(_,{src:m,alt:"glass photo",loading:"lazy",width:"349",height:"445"})]})})]})},R=i.div`
  padding-top: 124px;
  display: flex;
  @media screen and (min-width: 1440px) {
    padding-top: unset;
  }
`,q=i.div`
  display: flex;
  flex-direction: column;
`,B=i.ul`
  gap: 40px;
`,T=i.h2`
  font-weight: 600;
  font-size: 40px;
  height: 44px;
  color: rgb(243, 243, 243);
  margin-bottom: 20px;
`,A=i.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: colum;
  gap: 20px;
  margin-bottom: 80px;
`,O=()=>{const n=p(h);return e.jsx(R,{children:e.jsx(q,{children:n.map(({category:c,drinks:o})=>e.jsxs(B,{children:[e.jsx(T,{children:c},x()),e.jsx(A,{children:o.map(({drink:a,drinkThumb:s,_id:t})=>e.jsx(P,{id:t,drinkTitle:a,drinkThumb:s},t))},x())]},x()))})})},V=()=>{const[n,c]=g.useState(window.innerWidth),o=b(),a=p(h),s=p(D),t=p(H),u=!t&&!s&&a&&a.length>0,l=()=>{c(window.innerWidth)},f=r=>{let d=0;return r<768?d=1:r>=768&&r<1440?d=2:r>=1440&&(d=3),d};return g.useEffect(()=>{window.addEventListener("resize",l);const r=f(n);return o(k(r)),()=>{window.removeEventListener("resize",l)}},[o,n]),e.jsx(j,{children:e.jsxs(W,{children:[e.jsx(M,{}),t!==null&&e.jsx("p",{className:"error-bage",children:t}),s&&"Request in progress...",u&&e.jsx(O,{}),e.jsx(F,{children:"Other drinks"})]})})};export{V as default};
