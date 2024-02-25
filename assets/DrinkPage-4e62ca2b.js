import{u as e,d as g,c as p,r as u,ah as d,j as i,ai as F,aj as T,ak as y,al as I,C as z}from"./index-49652900.js";import{d as P,a as M,e as E}from"./drinks.selectors-504e75fe.js";import{P as R}from"./PageTitle-4360c7eb.js";import{d as f}from"./coctailPlaceholder-82987b74.js";import{n as S}from"./index.browser-7e542916.js";const $=e.section`
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
`,W=e.p`
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
`,C=e.button`
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
`,h=e.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`,A=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
`,B=e.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;
  /* border: 1px solid green; */

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`,H=e.div`
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
`;const _=({id:r,name:n,glass:t,alcoholic:o,description:w,imgPath:c})=>{const a=g(),s=p(P),b=p(M),x=v=>s?!!s.find(D=>D._id===v):!1,j=()=>{a(F(r)).then(()=>{a(d())})},k=()=>{a(T(r)).then(()=>{a(d())})};return u.useEffect(()=>{a(d())},[a]),i.jsx(i.Fragment,{children:s&&i.jsxs(A,{children:[i.jsxs(H,{children:[i.jsx(R,{title:n}),i.jsxs(L,{children:[t," / ",o]}),i.jsx(W,{children:w}),i.jsx(C,{onClick:x(r)?k:j,disabled:b,children:x(r)?"Remove from favorite drinks":"Add to favorite drinks"})]}),i.jsx(B,{children:c?i.jsx(h,{src:c,alt:"img"}):i.jsx(h,{src:f,alt:"img"})})]})})},q=e.div`
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
`,l=e.img`
  width: 100%;
  width: 157px;
  height: 157px;
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,G=e.div`
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
`,J=e.p`
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
`,K=e.p`
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
`;const N=({title:r,measure:n,quantity:t,images:o})=>i.jsxs(i.Fragment,{children:[i.jsx(G,{children:o.ingredientThumb===""?i.jsx(l,{src:f,alt:"img"}):i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:o.ingredientThumb}),i.jsx("source",{media:"(min-width: 768px)",srcSet:o["thumb-medium"]}),i.jsx("source",{media:"(min-width: 375px)",srcSet:o["thumb-small"]}),i.jsx(l,{src:o.ingredientThumb,alt:"ingredient photo"})]})}),i.jsxs(q,{children:[i.jsx(J,{children:r}),i.jsx(K,{children:t?`${t} ${n}`:n})]})]}),O=e.h2`
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
`,Q=e.ul`
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
`,U=({ingredients:r})=>i.jsx(i.Fragment,{children:r&&i.jsxs(i.Fragment,{children:[i.jsx(O,{children:"Ingredients"}),i.jsx(Q,{children:r.map(n=>{const t={ingredientThumb:"","thumb-medium":"","thumb-small":""};return n.ingredient&&n.ingredient.ingredientThumb&&(t.ingredientThumb=n.ingredient.ingredientThumb,t["thumb-medium"]=n.ingredient["thumb-medium"],t["thumb-small"]=n.ingredient["thumb-small"]),i.jsx("li",{children:i.jsx(N,{title:n.title,measure:n.measure,quantity:n.quantity,images:t})},S())})})]})}),m="/DrinkMaster-FrontEnd/assets/coctails@1xMob-773a9476.jpg",V="/DrinkMaster-FrontEnd/assets/coctails@2xMob-fecfc36c.jpg",X="/DrinkMaster-FrontEnd/assets/coctails@1xTab-650f5580.jpg",Y="/DrinkMaster-FrontEnd/assets/coctails@2xTab-ceb1294d.jpg",Z="/DrinkMaster-FrontEnd/assets/coctails@1xDesk-461ecb5e.jpg",ii="/DrinkMaster-FrontEnd/assets/coctails@2xDesk-d80c3656.jpg",ei=e.h2`
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
`,ti=e.p`
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
`,ni=e.img`
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
`,ri=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`,oi=({instructions:r})=>i.jsxs(i.Fragment,{children:[i.jsx(ei,{children:"Recipe Preparation"}),i.jsxs(ri,{children:[i.jsx(ti,{children:r}),i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:`${Z} 1x, ${ii} 2x`}),i.jsx("source",{media:"(min-width: 768px)",srcSet:`${X} 1x, ${Y} 2x`}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${m} 1x, ${V} 2x`}),i.jsx(ni,{src:m,alt:"drinks photo"})]})]})]}),xi=()=>{const r=g(),{drinkId:n}=y(),t=p(o=>E(o,n));return u.useEffect(()=>{r(I(n))},[r,n]),i.jsx(z,{children:i.jsx($,{children:t&&i.jsxs(i.Fragment,{children:[i.jsx(_,{id:t._id,name:t.drink,glass:t.glass,alcoholic:t.alcoholic,description:t.description,imgPath:t.drinkThumb}),i.jsx(U,{ingredients:t.ingredients}),i.jsx(oi,{instructions:t.instructions})]})})})};export{xi as default};
