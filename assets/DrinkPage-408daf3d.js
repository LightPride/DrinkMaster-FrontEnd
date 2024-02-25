import{u as e,d as f,c,r as p,a5 as d,j as i,a6 as y,a7 as I,a8 as z,a9 as P,C as M}from"./index-7b3f6eea.js";import{d as E,a as R,e as S}from"./drinks.selectors-7cb1a1b1.js";import{P as $}from"./PageTitle-1057aa95.js";import{d as w}from"./coctailPlaceholder-82987b74.js";import{n as W}from"./index.browser-7e542916.js";const C=e.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 132px;
  }
`,L=e.p`
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
`,A=e.p`
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
`,B=e.button`
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
`,m=e.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`,H=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
`,_=e.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;
  /* border: 1px solid green; */

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`,q=e.div`
  @media screen and (min-width: 1440px) {
    padding-top: 26px;
    max-width: 592px;
    /* border: 1px solid yellow; */
  }
`;e.div`
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
`;const G=({id:r,name:n,glass:t,alcoholic:o,description:b,imgPath:x})=>{const s=f(),a=c(E),j=c(R),h=F=>{if(a.length>0&&a[a.length-1])return a.find(T=>T._id===F)},[k,l]=p.useState(h(r)),v=()=>{s(y(r)).then(()=>{l(!0),s(d())})},D=()=>{s(I(r)).then(()=>{l(!1),s(d())})};return p.useEffect(()=>{s(d())},[s]),i.jsx(i.Fragment,{children:a&&i.jsxs(H,{children:[i.jsxs(q,{children:[i.jsx($,{title:n}),i.jsxs(L,{children:[t," / ",o]}),i.jsx(A,{children:b}),i.jsx(B,{onClick:h(r)?D:v,disabled:j,children:k?"Remove from favorite drinks":"Add to favorite drinks"})]}),i.jsx(_,{children:x?i.jsx(m,{src:x,alt:"img"}):i.jsx(m,{src:w,alt:"img"})})]})})},J=e.div`
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
`,g=e.img`
  width: 100%;
  width: 157px;
  height: 157px;
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,K=e.div`
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
`,N=e.p`
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
`,O=e.p`
  margin-bottom: 0;
  color: var(--white-fifty-color);
  font-size: 14px;
  line-height: 1.29;
  text-align: end;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;e.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`;const Q=({title:r,measure:n,quantity:t,images:o})=>i.jsxs(i.Fragment,{children:[i.jsx(K,{children:o.ingredientThumb===""?i.jsx(g,{src:w,alt:"img"}):i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:o.ingredientThumb}),i.jsx("source",{media:"(min-width: 768px)",srcSet:o["thumb-medium"]}),i.jsx("source",{media:"(min-width: 375px)",srcSet:o["thumb-small"]}),i.jsx(g,{src:o.ingredientThumb,alt:"ingredient photo"})]})}),i.jsxs(J,{children:[i.jsx(N,{children:r}),i.jsx(O,{children:t?`${t} ${n}`:n})]})]}),U=e.h2`
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
`,V=e.ul`
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
`,X=({ingredients:r})=>i.jsx(i.Fragment,{children:r&&i.jsxs(i.Fragment,{children:[i.jsx(U,{children:"Ingredients"}),i.jsx(V,{children:r.map(n=>{const t={ingredientThumb:"","thumb-medium":"","thumb-small":""};return n.ingredient&&n.ingredient.ingredientThumb&&(t.ingredientThumb=n.ingredient.ingredientThumb,t["thumb-medium"]=n.ingredient["thumb-medium"],t["thumb-small"]=n.ingredient["thumb-small"]),i.jsx("li",{children:i.jsx(Q,{title:n.title,measure:n.measure,quantity:n.quantity,images:t})},W())})})]})}),u="/DrinkMaster-FrontEnd/assets/coctails@1xMob-773a9476.jpg",Y="/DrinkMaster-FrontEnd/assets/coctails@2xMob-fecfc36c.jpg",Z="/DrinkMaster-FrontEnd/assets/coctails@1xTab-650f5580.jpg",ii="/DrinkMaster-FrontEnd/assets/coctails@2xTab-ceb1294d.jpg",ei="/DrinkMaster-FrontEnd/assets/coctails@1xDesk-461ecb5e.jpg",ti="/DrinkMaster-FrontEnd/assets/coctails@2xDesk-d80c3656.jpg",ni=e.h2`
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
`,ri=e.p`
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
`,oi=e.img`
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
`,si=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`,ai=({instructions:r})=>i.jsxs(i.Fragment,{children:[i.jsx(ni,{children:"Recipe Preparation"}),i.jsxs(si,{children:[i.jsx(ri,{children:r}),i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:`${ei} 1x, ${ti} 2x`}),i.jsx("source",{media:"(min-width: 768px)",srcSet:`${Z} 1x, ${ii} 2x`}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${u} 1x, ${Y} 2x`}),i.jsx(oi,{src:u,alt:"drinks photo"})]})]})]}),mi=()=>{const r=f(),{drinkId:n}=z(),t=c(o=>S(o,n));return p.useEffect(()=>{r(P(n))},[r,n]),i.jsx(M,{children:i.jsx(C,{children:t&&i.jsxs(i.Fragment,{children:[i.jsx(G,{id:t._id,name:t.drink,glass:t.glass,alcoholic:t.alcoholic,description:t.description,imgPath:t.drinkThumb}),i.jsx(X,{ingredients:t.ingredients}),i.jsx(ai,{instructions:t.instructions})]})})})};export{mi as default};
