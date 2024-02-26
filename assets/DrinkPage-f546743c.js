import{u as e,d as u,c as p,r as f,av as c,j as i,aw as y,ax as T,ay as z,az as I,C as P}from"./index-f212da8e.js";import{e as M,a as E,f as R}from"./drinks.selectors-f4e4ee20.js";import{P as S}from"./PageTitle-57d80d49.js";import{d as w}from"./coctailPlaceholder-82987b74.js";import{n as $}from"./index.browser-7e542916.js";const L=e.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 132px;
  }
`,W=e.p`
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
`,C=e.p`
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
`,A=e.button`
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
`,l=e.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`,B=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
`,H=e.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;
  /* border: 1px solid green; */

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`,_=e.div`
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
`;const q=({id:r,name:n,glass:t,alcoholic:o,description:b,imgPath:x})=>{const s=u(),a=p(M),j=p(E),d=1e3,h=D=>a?!!a.find(F=>F._id===D):!1,k=()=>{s(y(r)).then(()=>{s(c({size:d}))})},v=()=>{s(T(r)).then(()=>{s(c({size:d}))})};return f.useEffect(()=>{s(c({size:d}))},[s]),i.jsx(i.Fragment,{children:a&&i.jsxs(B,{children:[i.jsxs(_,{children:[i.jsx(S,{title:n}),i.jsxs(W,{children:[t," / ",o]}),i.jsx(C,{children:b}),i.jsx(A,{onClick:h(r)?v:k,disabled:j,children:h(r)?"Remove from favorite drinks":"Add to favorite drinks"})]}),i.jsx(H,{children:x?i.jsx(l,{src:x,alt:"img"}):i.jsx(l,{src:w,alt:"img"})})]})})},G=e.div`
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
`,m=e.img`
  width: 100%;
  width: 157px;
  height: 157px;
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,J=e.div`
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
`,K=e.p`
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
`,N=e.p`
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
`;const O=({title:r,measure:n,quantity:t,images:o})=>i.jsxs(i.Fragment,{children:[i.jsx(J,{children:o.ingredientThumb===""?i.jsx(m,{src:w,alt:"img"}):i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:o.ingredientThumb}),i.jsx("source",{media:"(min-width: 768px)",srcSet:o["thumb-medium"]}),i.jsx("source",{media:"(min-width: 375px)",srcSet:o["thumb-small"]}),i.jsx(m,{src:o.ingredientThumb,alt:"ingredient photo"})]})}),i.jsxs(G,{children:[i.jsx(K,{children:r}),i.jsx(N,{children:t?`${t} ${n}`:n})]})]}),Q=e.h2`
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
`,U=e.ul`
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
`,V=({ingredients:r})=>i.jsx(i.Fragment,{children:r&&i.jsxs(i.Fragment,{children:[i.jsx(Q,{children:"Ingredients"}),i.jsx(U,{children:r.map(n=>{const t={ingredientThumb:"","thumb-medium":"","thumb-small":""};return n.ingredient&&n.ingredient.ingredientThumb&&(t.ingredientThumb=n.ingredient.ingredientThumb,t["thumb-medium"]=n.ingredient["thumb-medium"],t["thumb-small"]=n.ingredient["thumb-small"]),i.jsx("li",{children:i.jsx(O,{title:n.title,measure:n.measure,quantity:n.quantity,images:t})},$())})})]})}),g="/DrinkMaster-FrontEnd/assets/coctails@1xMob-773a9476.jpg",X="/DrinkMaster-FrontEnd/assets/coctails@2xMob-fecfc36c.jpg",Y="/DrinkMaster-FrontEnd/assets/coctails@1xTab-650f5580.jpg",Z="/DrinkMaster-FrontEnd/assets/coctails@2xTab-ceb1294d.jpg",ii="/DrinkMaster-FrontEnd/assets/coctails@1xDesk-461ecb5e.jpg",ei="/DrinkMaster-FrontEnd/assets/coctails@2xDesk-d80c3656.jpg",ti=e.h2`
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
`,ni=e.p`
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
`,ri=e.img`
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
`,oi=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`,si=({instructions:r})=>i.jsxs(i.Fragment,{children:[i.jsx(ti,{children:"Recipe Preparation"}),i.jsxs(oi,{children:[i.jsx(ni,{children:r}),i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:`${ii} 1x, ${ei} 2x`}),i.jsx("source",{media:"(min-width: 768px)",srcSet:`${Y} 1x, ${Z} 2x`}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${g} 1x, ${X} 2x`}),i.jsx(ri,{src:g,alt:"drinks photo"})]})]})]}),hi=()=>{const r=u(),{drinkId:n}=z(),t=p(o=>R(o,n));return f.useEffect(()=>{r(I(n))},[r,n]),i.jsx(P,{children:i.jsx(L,{children:t&&i.jsxs(i.Fragment,{children:[i.jsx(q,{id:t._id,name:t.drink,glass:t.glass,alcoholic:t.alcoholic,description:t.description,imgPath:t.drinkThumb}),i.jsx(V,{ingredients:t.ingredients}),i.jsx(si,{instructions:t.instructions})]})})})};export{hi as default};
