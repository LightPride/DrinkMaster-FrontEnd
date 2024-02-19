import{u as e,j as i}from"./index-52dfaa03.js";import{P as s}from"./PageTitle-553c9fd4.js";import{r as o}from"./recipes-8f698c44.js";const c=e.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 320px;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1280px;
  }
`,x=e.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`,h=e.p`
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
`,l=e.p`
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
`,g=e.button`
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
`,w=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
`,f=e.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;
  /* border: 1px solid green; */

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`,u=e.div`
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
`;const j=({name:r,glass:t,alcoholic:n,description:d,imgPath:p})=>i.jsx(i.Fragment,{children:i.jsxs(w,{children:[i.jsxs(u,{children:[i.jsx(s,{title:r}),i.jsxs(h,{children:[t," / ",n]}),i.jsx(l,{children:d}),i.jsx(g,{children:"Add to favorite drinks"})]}),i.jsx(f,{children:i.jsx(m,{src:p,alt:"img"})})]})}),b=e.div`
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
`,k=e.img`
  width: 100%;
  width: 157px;
  height: 157px;
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,v=e.div`
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
`,D=e.p`
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
`,z=e.p`
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
`;const P=({title:r,measure:t,quantity:n,images:d})=>i.jsxs(i.Fragment,{children:[i.jsx(v,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:d}),i.jsx("source",{media:"(min-width: 768px)",srcSet:d}),i.jsx("source",{media:"(min-width: 375px)",srcSet:d}),i.jsx(k,{src:d,alt:"ingredient photo"})]})}),i.jsxs(b,{children:[i.jsx(D,{children:r}),i.jsx(z,{children:n?`${n} ${t}`:t})]})]}),y=e.h2`
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
`,I=e.ul`
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
`;let T=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const F=({ingredients:r})=>i.jsxs(i.Fragment,{children:[i.jsx(y,{children:"Ingredients"}),i.jsx(I,{children:r.map(t=>i.jsx("li",{children:i.jsx(P,{title:t.title,measure:t.measure,quantity:t.quantity,images:t.ingredientThumb})},T()))})]}),a="/DrinkMaster-FrontEnd/assets/coctails@1xMob-773a9476.jpg",M="/DrinkMaster-FrontEnd/assets/coctails@2xMob-fecfc36c.jpg",S="/DrinkMaster-FrontEnd/assets/coctails@1xTab-650f5580.jpg",R="/DrinkMaster-FrontEnd/assets/coctails@2xTab-ceb1294d.jpg",$="/DrinkMaster-FrontEnd/assets/coctails@1xDesk-461ecb5e.jpg",E="/DrinkMaster-FrontEnd/assets/coctails@2xDesk-d80c3656.jpg",W=e.h2`
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
`,A=e.p`
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
`,C=e.img`
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
`,H=e.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`,L=({instructions:r})=>i.jsxs(i.Fragment,{children:[i.jsx(W,{children:"Recipe Preparation"}),i.jsxs(H,{children:[i.jsx(A,{children:r}),i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 1440px)",srcSet:`${$} 1x, ${E} 2x`}),i.jsx("source",{media:"(min-width: 768px)",srcSet:`${S} 1x, ${R} 2x`}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${a} 1x, ${M} 2x`}),i.jsx(C,{src:a,alt:"drinks photo"})]})]})]}),B=()=>i.jsx(x,{children:i.jsxs(c,{children:[i.jsx(j,{id:o._id,name:o[0].drink,glass:o[0].glass,alcoholic:o[0].alcoholic,description:o[0].description,imgPath:o[0].drinkThumb}),i.jsx(F,{ingredients:o[0].ingredients}),i.jsx(L,{instructions:o[0].instructions})]})});export{B as default};
