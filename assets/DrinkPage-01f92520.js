import{u as e,d as g,c as d,r as u,aa as v,j as i,ab as D,a7 as F,ac as T,ad as y,C as I}from"./index-b9586bef.js";import{f as z,a as P,d as M}from"./drinks.selectors-feb66c44.js";import{P as E}from"./PageTitle-8c16f7e6.js";import{d as f}from"./coctailPlaceholder-82987b74.js";import{n as R}from"./index.browser-7e542916.js";const S=e.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 132px;
  }
`,$=e.p`
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
`,x=e.button`
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
`,L=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
`,C=e.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;
  /* border: 1px solid green; */

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`,A=e.div`
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
`;const B=({id:r,name:n,glass:t,alcoholic:o,description:w,imgPath:p})=>{const s=g(),a=d(z),c=d(P),b=j=>{if(a)return a.find(k=>k._id===j)};return u.useEffect(()=>{s(v())},[s]),i.jsx(i.Fragment,{children:a&&i.jsxs(L,{children:[i.jsxs(A,{children:[i.jsx(E,{title:n}),i.jsxs($,{children:[t," / ",o]}),i.jsx(W,{children:w}),b(r)?i.jsx(x,{onClick:()=>s(F(r)),disabled:c,children:"Remove from favorite drinks"}):i.jsx(x,{onClick:()=>s(D(r)),disabled:c,children:"Add to favorite drinks"})]}),i.jsx(C,{children:p?i.jsx(h,{src:p,alt:"img"}):i.jsx(h,{src:f,alt:"img"})})]})})},H=e.div`
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
`,_=e.div`
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
`,q=e.p`
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
`,G=e.p`
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
`;const J=({title:r,measure:n,quantity:t,images:o})=>i.jsxs(i.Fragment,{children:[i.jsx(_,{children:o.ingredientThumb===""?i.jsx(l,{src:f,alt:"img"}):i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:o.ingredientThumb}),i.jsx("source",{media:"(min-width: 768px)",srcSet:o["thumb-medium"]}),i.jsx("source",{media:"(min-width: 375px)",srcSet:o["thumb-small"]}),i.jsx(l,{src:o.ingredientThumb,alt:"ingredient photo"})]})}),i.jsxs(H,{children:[i.jsx(q,{children:r}),i.jsx(G,{children:t?`${t} ${n}`:n})]})]}),K=e.h2`
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
`,N=e.ul`
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
`,O=({ingredients:r})=>i.jsx(i.Fragment,{children:r&&i.jsxs(i.Fragment,{children:[i.jsx(K,{children:"Ingredients"}),i.jsx(N,{children:r.map(n=>{const t={ingredientThumb:"","thumb-medium":"","thumb-small":""};return n.ingredient&&n.ingredient.ingredientThumb&&(t.ingredientThumb=n.ingredient.ingredientThumb,t["thumb-medium"]=n.ingredient["thumb-medium"],t["thumb-small"]=n.ingredient["thumb-small"]),i.jsx("li",{children:i.jsx(J,{title:n.title,measure:n.measure,quantity:n.quantity,images:t})},R())})})]})}),m="/DrinkMaster-FrontEnd/assets/coctails@1xMob-773a9476.jpg",Q="/DrinkMaster-FrontEnd/assets/coctails@2xMob-fecfc36c.jpg",U="/DrinkMaster-FrontEnd/assets/coctails@1xTab-650f5580.jpg",V="/DrinkMaster-FrontEnd/assets/coctails@2xTab-ceb1294d.jpg",X="/DrinkMaster-FrontEnd/assets/coctails@1xDesk-461ecb5e.jpg",Y="/DrinkMaster-FrontEnd/assets/coctails@2xDesk-d80c3656.jpg",Z=e.h2`
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
`,ii=e.p`
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
`,ei=e.img`
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
`,ti=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`,ni=({instructions:r})=>i.jsxs(i.Fragment,{children:[i.jsx(Z,{children:"Recipe Preparation"}),i.jsxs(ti,{children:[i.jsx(ii,{children:r}),i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:`${X} 1x, ${Y} 2x`}),i.jsx("source",{media:"(min-width: 768px)",srcSet:`${U} 1x, ${V} 2x`}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${m} 1x, ${Q} 2x`}),i.jsx(ei,{src:m,alt:"drinks photo"})]})]})]}),pi=()=>{const r=g(),{drinkId:n}=T(),t=d(o=>M(o,n));return u.useEffect(()=>{r(y(n))},[r,n]),i.jsx(I,{children:i.jsx(S,{children:t&&i.jsxs(i.Fragment,{children:[i.jsx(B,{id:t._id,name:t.drink,glass:t.glass,alcoholic:t.alcoholic,description:t.description,imgPath:t.drinkThumb}),i.jsx(O,{ingredients:t.ingredients}),i.jsx(ni,{instructions:t.instructions})]})})})};export{pi as default};
