import{u as i,c as z,j as e,a as h,b as C,L as H,d,e as P,r as F,g as N,C as R}from"./index-fac66bcf.js";import{N as S,a as B,n as $,b as L}from"./blueIced@2xMob-abf058dd.js";import{d as m,s as f,a as M,b as I}from"./coctailPlaceholder-22b4dc1a.js";import{n as c}from"./index.browser-7e542916.js";const T=i.div``,g=i.button`
  display: flex;
  /* text-align: center;
  align-items: center;
  justify-content: center; */
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  background-color: var(--white-color);
  cursor: pointer;
  padding: 14px 40px;
  border-radius: 42px;

  color: rgb(22, 31, 55);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: left;

  &.addDrinks {
    max-width: 151px;
    height: 46px;
  }

  &.addDrinks:active {
    border: 1px solid var(--blue-color);
    background-color: var(--dark-blue-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    &.addDrinks {
      padding: 18px 44px;
      max-width: 169px;
      height: 54px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.addDrinks {
      max-width: 160px;
      height: 54px;
    }
    &.addDrinks:hover {
      color: var(--white-color);
      background-color: var(--dark-blue-color);
    }
  }

  &.addRecipe {
    width: 170px;
    color: #161f37;
  }
  &.addRecipe:active {
    border: 2px solid #4070cd80;
  }
  &.addRecipe:hover {
    color: #f3f3f3;
    background-color: #161f37;
  }
  &.addRecipe:disabled {
    background-color: #434d67;
    color: rgba(243, 243, 243, 0.2);
  }

  &.logOut {
    width: 196px;
    color: #161f37;
  }
  &.logOut:hover {
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: #f3f3f3;
    background-color: #161f37;
  }
  &.logOut:disabled {
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: rgba(243, 243, 243, 0.2);
    background-color: #161f37;
  }

  &.addToFavorite {
    width: 251px;
  }
  &.addToFavorite:hover {
    background-color: #161f37;
    color: #f3f3f3;
  }
  &.addToFavorite:disabled {
    background-color: #434d67;
    color: rgba(243, 243, 243, 0.2);
  }

  &.seeRecipe {
    width: 169px;
    background-color: #161f37;
    color: #f3f3f3;
  }
  &.seeRecipe:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  &.subscribe {
    width: 309px;
    height: 56px;
    color: #f3f3f3;
    background-color: #0a0a11;
    border-radius: 200px;
    border: 1px solid rgba(243, 243, 243, 0.2);
  }

  &.subscribe:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }
`,E=({children:o,className:t,type:n,addRecipe:r,logOut:a,addDrinks:s,addToFavorite:u,seeRecipe:w,subscribe:b,disabled:p,active:k,onClick:v,...x})=>{const j=z(g,t,{addRecipe:r,logOut:a,addToFavorite:u,seeRecipe:w,subscribe:b,addDrinks:s}),y=l=>{if(p)l.preventDefault();else return v(l)},D=x.href?"a":g;return e.jsx(D,{className:j,onClick:y,disabled:p,active:k,...x,type:n,children:o})},_=i.div`
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
`,W=i.div`
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
`,O=i.div`
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
`,A=i.div`
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
`,q=i.p`
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
`,U=i.img`
  width: 252px;
  height: 313px;
  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,Y=()=>{const o=()=>{console.log("Button clicked")};return e.jsxs(_,{children:[e.jsxs(W,{children:[e.jsx(A,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx(q,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),e.jsx(E,{addDrinks:!0,onClick:o,children:"Add drinks"})]}),e.jsx(O,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${h} 1x, ${C} 2x`,type:"image/png"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${S} 1x, ${B} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${$} 1x, ${L} 2x`,type:"image/png"}),e.jsx(U,{src:h,alt:"glass photo",loading:"lazy",width:"349",height:"445"})]})})]})},G=i.ul`
  display: grid;
  grid-template-columns: 335px;
  gap: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 342px 342px;
    gap: 80px 20px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 400px 400px 400px;
    margin-top: 62px;
  }
`,J=i.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,K=i.img`
  width: 100%;
  height: auto;
  margin-bottom: 18px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,Q=i.h2`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;i.p`
  margin-bottom: 18px;
  color: var(--white-fifty-color);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`;i.p`
  margin-bottom: 18px;
  font-size: 14px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`;const V=i.button`
  border-radius: 40px;
  border: none;
  background-color: var(--dark-blue-color);
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--white-color);
  }
  @media screen and (min-width: 768px) {
    height: 56px;
    width: 56px;
  }
`;i.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--white-color);
  ${V}:hover & {
    stroke: var(--dark-blue-color);
  }
`;const X=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Z=i.button`
  border: none;
  min-width: 143px;
  border-radius: 42px;
  padding: 14px 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: var(--dark-blue-color);
  color: var(--white-color);
  &:hover {
    background-color: var(--white-color);
    color: var(--dark-blue-color);
  }
  @media screen and (min-width: 768px) {
    min-width: 160px;
    font-size: 16px;
    line-height: 18px;
    padding: 18px 44px;
  }
`,ee=({navLink:o})=>e.jsx(H,{to:o,children:e.jsx(Z,{type:"button",children:"See more"})}),ie=({drinkName:o,_id:t,drinkThumb:n})=>e.jsxs(J,{children:[e.jsx(K,{src:n||m,alt:o,onError:r=>{r.target.src=m}},t),e.jsx(Q,{children:o}),e.jsx(X,{children:e.jsx(ee,{navLink:`/drinks/${t}`})})]}),oe=i.div`
  display: flex;
`,te=i.h2`
    color: white;
`,re=()=>{const o=d(f);return e.jsx(oe,{children:e.jsx(G,{children:o.map(({category:t,drinks:n})=>e.jsxs("div",{children:[e.jsx(te,{children:t},c()),e.jsx("div",{children:n.map(({drink:r,drinkThumb:a,_id:s})=>e.jsx(ie,{drinkName:r,drinkThumb:a},s))},c())]},c()))})})},ce=()=>{const o=P(),t=d(f),n=d(M),r=d(I),a=!r&&!n&&t&&t.length>0;return F.useEffect(()=>{o(N())},[o]),e.jsx(T,{children:e.jsxs(R,{children:[e.jsx(Y,{}),r!==null&&e.jsx("p",{className:"error-bage",children:r}),e.jsx("div",{children:n&&"Request in progress..."}),a&&e.jsx(re,{})]})})};export{ce as default};
