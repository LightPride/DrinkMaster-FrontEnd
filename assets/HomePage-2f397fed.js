import{u as i,j as e,a as c,b as l,c as a,d as m,r as g,g as h,C as u}from"./index-7432a2aa.js";import{N as f,a as w,n as b,b as k}from"./blueIced@2xMob-abf058dd.js";import{s as x,a as j,b as v}from"./drinks.selectors-fd3c0537.js";import{n as s}from"./index.browser-7e542916.js";import{D as y}from"./DrinksItem-f02e129b.js";import"./coctailPlaceholder-82987b74.js";const C=i.div`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom:140px;
  } 
`,D=i.button`
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
`,H=i.div`
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
`,P=i.div`
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
`,z=i.div`
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
`,F=i.div`
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
`,N=i.p`
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
`,W=i.img`
  width: 252px;
  height: 313px;
  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,$=i.button`
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
`,S=()=>{const n=()=>{console.log("Button clicked")};return e.jsxs(H,{children:[e.jsxs(P,{children:[e.jsx(F,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx(N,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),e.jsx($,{onClick:n,children:"Add drinks"})]}),e.jsx(z,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${c} 1x, ${l} 2x`,type:"image/png"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${f} 1x, ${w} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${b} 1x, ${k} 2x`,type:"image/png"}),e.jsx(W,{src:c,alt:"glass photo",loading:"lazy",width:"349",height:"445"})]})})]})},_=i.div`
  padding-top: 124px;
  display: flex;
  @media screen and (min-width: 1440px) {
    padding-top: unset;
  }
`,E=i.div`
  display: flex;
  flex-direction: column;
`,I=i.ul`
  gap: 40px;
`,L=i.h2`
  font-weight: 600;
  font-size: 40px;
  height: 44px;
  color: rgb(243, 243, 243);
  margin-bottom: 20px;
`,M=i.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: colum;
  gap: 20px;
  margin-bottom: 80px;
`,B=()=>{const n=a(x);return e.jsx(_,{children:e.jsx(E,{children:n.map(({category:r,drinks:o})=>e.jsxs(I,{children:[e.jsx(L,{children:r},s()),e.jsx(M,{children:o.map(({drink:t,drinkThumb:d,_id:p})=>e.jsx(y,{id:p,drinkTitle:t,drinkThumb:d},p))},s())]},s()))})})},Y=()=>{const n=m(),r=a(x),o=a(j),t=a(v),d=!t&&!o&&r&&r.length>0;return g.useEffect(()=>{n(h())},[n]),e.jsx(u,{children:e.jsxs(C,{children:[e.jsx(S,{}),t!==null&&e.jsx("p",{className:"error-bage",children:t}),o&&"Request in progress...",d&&e.jsx(B,{}),e.jsx(D,{children:"Other drinks"})]})})};export{Y as default};
