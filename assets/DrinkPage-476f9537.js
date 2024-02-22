import{u as e,j as i,a1 as p,d as c,r as x,a2 as h,C as l}from"./index-d48a7cd8.js";import{P as m}from"./PageTitle-6c0aee06.js";import{d as g,e as w}from"./coctailPlaceholder-3ec80ffd.js";import{n as f}from"./index.browser-7e542916.js";import{u}from"./useDispatch-8717abba.js";const j=e.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 132px;
  }
`,b=e.p`
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
`,k=e.p`
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
`,D=e.button`
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
`,d=e.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`,v=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
`,y=e.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;
  /* border: 1px solid green; */

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`,z=e.div`
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
`;const I=({name:r,glass:t,alcoholic:n,description:o,imgPath:s})=>i.jsx(i.Fragment,{children:i.jsxs(v,{children:[i.jsxs(z,{children:[i.jsx(m,{title:r}),i.jsxs(b,{children:[t," / ",n]}),i.jsx(k,{children:o}),i.jsx(D,{children:"Add to favorite drinks"})]}),i.jsx(y,{children:s?i.jsx(d,{src:s,alt:"img"}):i.jsx(d,{src:g,alt:"img"})})]})}),P=e.div`
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
`,F=e.img`
  width: 100%;
  width: 157px;
  height: 157px;
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,T=e.div`
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
`,M=e.p`
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
`,E=e.p`
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
`;const S=({title:r,measure:t,quantity:n,images:o})=>i.jsxs(i.Fragment,{children:[i.jsx(T,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:o}),i.jsx("source",{media:"(min-width: 768px)",srcSet:o}),i.jsx("source",{media:"(min-width: 375px)",srcSet:o}),i.jsx(F,{src:o,alt:"ingredient photo"})]})}),i.jsxs(P,{children:[i.jsx(M,{children:r}),i.jsx(E,{children:n?`${n} ${t}`:t})]})]}),$=e.h2`
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
`,R=e.ul`
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
`,W=({ingredients:r})=>i.jsxs(i.Fragment,{children:[i.jsx($,{children:"Ingredients"}),i.jsx(R,{children:r.map(t=>i.jsx("li",{children:i.jsx(S,{title:t.title,measure:t.measure,quantity:t.quantity,images:t.ingredientThumb})},f()))})]}),a="/DrinkMaster-FrontEnd/assets/coctails@1xMob-773a9476.jpg",B="/DrinkMaster-FrontEnd/assets/coctails@2xMob-fecfc36c.jpg",A="/DrinkMaster-FrontEnd/assets/coctails@1xTab-650f5580.jpg",C="/DrinkMaster-FrontEnd/assets/coctails@2xTab-ceb1294d.jpg",H="/DrinkMaster-FrontEnd/assets/coctails@1xDesk-461ecb5e.jpg",L="/DrinkMaster-FrontEnd/assets/coctails@2xDesk-d80c3656.jpg",q=e.h2`
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
`,G=e.p`
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
`,J=e.img`
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
`,K=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`,N=({instructions:r})=>i.jsxs(i.Fragment,{children:[i.jsx(q,{children:"Recipe Preparation"}),i.jsxs(K,{children:[i.jsx(G,{children:r}),i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:`${H} 1x, ${L} 2x`}),i.jsx("source",{media:"(min-width: 768px)",srcSet:`${A} 1x, ${C} 2x`}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${a} 1x, ${B} 2x`}),i.jsx(J,{src:a,alt:"drinks photo"})]})]})]}),Y=()=>{const r=u(),{drinkId:t}=p();console.log(t);const n=c(o=>w(o,t));return console.log(n),x.useEffect(()=>{r(h(t))},[r,t]),i.jsx(l,{children:i.jsx(j,{children:n&&i.jsxs(i.Fragment,{children:[i.jsx(I,{name:n.drink,glass:n.glass,alcoholic:n.alcoholic,description:n.description,imgPath:n.drinkThumb}),i.jsx(W,{ingredients:n.ingredients}),i.jsx(N,{instructions:n.instructions})]})})})};export{Y as default};
