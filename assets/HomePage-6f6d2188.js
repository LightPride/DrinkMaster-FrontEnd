import{u as i,j as e,C as k}from"./index-49a5af1d.js";import{c as j}from"./clsx-0839fdbe.js";import{r as o}from"./recipes-8f698c44.js";i.div``;const v=i.div``,d=i.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: none;
  height: 54px;
  border-radius: 42px;
  background-color: #f3f3f3;
  padding: 18px 44px 18px 44px;
  cursor: pointer;

  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0%;

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
    background-color:#0A0A11;
    border-radius: 200px;
    border: 1px solid rgba(243, 243, 243,0.2);
  }

  &.subscribe:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }
`,I=({children:n,className:c,type:s,addRecipe:p,logOut:l,addToFavorite:x,seeRecipe:g,subscribe:m,disabled:r,active:h,onClick:f,...t})=>{const u=j(d,c,{addRecipe:p,logOut:l,addToFavorite:x,seeRecipe:g,subscribe:m}),b=a=>{if(r)a.preventDefault();else return f(a)},w=t.href?"a":d;return e.jsx(w,{className:u,onClick:b,disabled:r,active:h,...t,type:s,children:n})},y=i.div`
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
  }
`,H=i.div`
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
`,P=i.div`
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
`,T=i.div`
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
`,C=i.p`
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
`,R=i.img`
  @media screen and (min-width: 1440px) {
    width: 100%;
    width: 359px;
    height: 445px;
  }
`,z=()=>{const n=()=>{console.log("Button clicked")};return e.jsxs(y,{children:[e.jsxs(H,{children:[e.jsx(T,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx(C,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),e.jsx(I,{addRecipe:!0,onClick:n,children:"Add drink"})]}),e.jsx(P,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`../../../src/images/404Images/blueIced@1xDesk.png, 
          ../../../src/images/404Images/blueIced@2xDesk.png`}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`../../../src/images/404Images/blueIced@1xTab.png, 
          ../../../src/images/404Images/blueIced@2xTab.png`}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`../../../src/images/404Images/blueIced@1xMob.png, 
          ../../../src/images/404Images/blueIced@2xMob.png`}),e.jsx(R,{src:"../../../src/images/404Images/blueIced@1xDesk.png",alt:"glass photo"})]})})]})},A=()=>e.jsx(v,{children:e.jsx(k,{children:e.jsx(z,{id:o._id,name:o[0].drink,imPath:o[0].drinkThumb,category:o[0].category})})});export{A as default};
