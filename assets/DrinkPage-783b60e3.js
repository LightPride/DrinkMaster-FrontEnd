import{u as t,j as i,a0 as p,e as c,r as x,a1 as h,C as l}from"./index-be1d10f7.js";import{P as m}from"./PageTitle-6893c8de.js";import{d as g}from"./coctailPlaceholder-82987b74.js";import{c as w}from"./drinks.selectors-1f732613.js";import{u as f}from"./useDispatch-14aa8951.js";const u=t.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 132px;
  }
`,j=t.p`
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
`,b=t.p`
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
`,k=t.button`
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
`,a=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`,D=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
`,v=t.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;
  /* border: 1px solid green; */

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`,z=t.div`
  @media screen and (min-width: 1440px) {
    padding-top: 26px;
    max-width: 592px;
    /* border: 1px solid yellow; */
  }
`;t.div`
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
`;const I=({name:r,glass:n,alcoholic:e,description:o,imgPath:s})=>i.jsx(i.Fragment,{children:i.jsxs(D,{children:[i.jsxs(z,{children:[i.jsx(m,{title:r}),i.jsxs(j,{children:[n," / ",e]}),i.jsx(b,{children:o}),i.jsx(k,{children:"Add to favorite drinks"})]}),i.jsx(v,{children:s?i.jsx(a,{src:s,alt:"img"}):i.jsx(a,{src:g,alt:"img"})})]})}),P=t.div`
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
`,y=t.img`
  width: 100%;
  width: 157px;
  height: 157px;
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,F=t.div`
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
`,T=t.p`
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
`,M=t.p`
  margin-bottom: 0;
  color: var(--white-fifty-color);
  font-size: 14px;
  line-height: 1.29;
  text-align: end;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;t.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`;const S=({title:r,measure:n,quantity:e,images:o})=>i.jsxs(i.Fragment,{children:[i.jsx(F,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:o}),i.jsx("source",{media:"(min-width: 768px)",srcSet:o}),i.jsx("source",{media:"(min-width: 375px)",srcSet:o}),i.jsx(y,{src:o,alt:"ingredient photo"})]})}),i.jsxs(P,{children:[i.jsx(T,{children:r}),i.jsx(M,{children:e?`${e} ${n}`:n})]})]}),E=t.h2`
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
`,R=t.ul`
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
`;let $=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((n,e)=>(e&=63,e<36?n+=e.toString(36):e<62?n+=(e-26).toString(36).toUpperCase():e>62?n+="-":n+="_",n),"");const W=({ingredients:r})=>i.jsxs(i.Fragment,{children:[i.jsx(E,{children:"Ingredients"}),i.jsx(R,{children:r.map(n=>i.jsx("li",{children:i.jsx(S,{title:n.title,measure:n.measure,quantity:n.quantity,images:n.ingredientThumb})},$()))})]}),d="/DrinkMaster-FrontEnd/assets/coctails@1xMob-773a9476.jpg",A="/DrinkMaster-FrontEnd/assets/coctails@2xMob-fecfc36c.jpg",B="/DrinkMaster-FrontEnd/assets/coctails@1xTab-650f5580.jpg",C="/DrinkMaster-FrontEnd/assets/coctails@2xTab-ceb1294d.jpg",H="/DrinkMaster-FrontEnd/assets/coctails@1xDesk-461ecb5e.jpg",L="/DrinkMaster-FrontEnd/assets/coctails@2xDesk-d80c3656.jpg",U=t.h2`
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
`,q=t.p`
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
`,V=t.img`
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
`,_=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`,G=({instructions:r})=>i.jsxs(i.Fragment,{children:[i.jsx(U,{children:"Recipe Preparation"}),i.jsxs(_,{children:[i.jsx(q,{children:r}),i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:`${H} 1x, ${L} 2x`}),i.jsx("source",{media:"(min-width: 768px)",srcSet:`${B} 1x, ${C} 2x`}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${d} 1x, ${A} 2x`}),i.jsx(V,{src:d,alt:"drinks photo"})]})]})]}),X=()=>{const r=f(),{drinkId:n}=p();console.log(n);const e=c(o=>w(o,n));return console.log(e),x.useEffect(()=>{r(h(n))},[r,n]),i.jsx(l,{children:i.jsx(u,{children:e&&i.jsxs(i.Fragment,{children:[i.jsx(I,{name:e.drink,glass:e.glass,alcoholic:e.alcoholic,description:e.description,imgPath:e.drinkThumb}),i.jsx(W,{ingredients:e.ingredients}),i.jsx(G,{instructions:e.instructions})]})})})};export{X as default};
