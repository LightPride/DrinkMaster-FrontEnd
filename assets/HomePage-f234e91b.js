import{u as i,j as e,c as d,a as j,C as v}from"./index-2671aaa2.js";import{c as y}from"./clsx-0839fdbe.js";import{r as t}from"./recipes-8f698c44.js";i.div``;const H=i.div``,c=i.button`
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
`,M=({children:o,className:s,type:p,addRecipe:l,logOut:x,addToFavorite:g,seeRecipe:m,subscribe:h,disabled:n,active:f,onClick:b,...r})=>{const u=y(c,s,{addRecipe:l,logOut:x,addToFavorite:g,seeRecipe:m,subscribe:h}),w=a=>{if(n)a.preventDefault();else return b(a)},k=r.href?"a":c;return e.jsx(k,{className:u,onClick:w,disabled:n,active:f,...r,type:p,children:o})},T="/DrinkMaster-FrontEnd/assets/blueIced@1xTab-b68459e0.png",D="/DrinkMaster-FrontEnd/assets/blueIced@2xTab-ca2bf5b1.png",P="/DrinkMaster-FrontEnd/assets/blueIced@1xMob-c3abc3c9.png",z="/DrinkMaster-FrontEnd/assets/blueIced@2xMob-33ff2ccf.png",C=i.div`
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
`,R=i.div`
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
`,F=i.div`
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
`,I=i.div`
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
`,$=i.p`
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
`,E=i.img`
  width: 252px;
  height: 313px;
  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,S=()=>{const o=()=>{console.log("Button clicked")};return e.jsxs(C,{children:[e.jsxs(R,{children:[e.jsx(I,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx($,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),e.jsx(M,{addRecipe:!0,onClick:o,children:"Add drink"})]}),e.jsx(F,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${d} 1x, ${j} 2x`,type:"image/png"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${T} 1x, ${D} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${P} 1x, ${z} 2x`,type:"image/png"}),e.jsx(E,{src:d,alt:"glass photo",loading:"lazy",width:"349",height:"445"})]})})]})},O=()=>e.jsx(H,{children:e.jsx(v,{children:e.jsx(S,{id:t._id,name:t[0].drink,imPath:t[0].drinkThumb,category:t[0].category})})});export{O as default};
