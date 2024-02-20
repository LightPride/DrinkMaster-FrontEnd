import{u as e,N as a,j as n,f as l}from"./index-0aff3c1c.js";const h=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;

  .textInput {
    width: 335px;
  }

  .textInput fieldset {
    border-radius: 40px;
    border-color: var(--white-fifty-color);
  }

  .textInput input {
    color: var(--white-color);
  }

  .textInput label {
    color: var(--white-fifty-color);
  }

  .textInput:hover fieldset {
    border-color: var(--white-color);
  }

  .textInput:hover fieldset:focus {
    border-color: var(--white-color);
  }
  var( --white-color) .textInput input::placeholder {
    color: var(--white-color);
  }

  .iconInput {
    color: var(--white-color);
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    box-shadow: 0 0 0 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    .textInput {
      width: 400px;
    }
  }
`,u=e.p`
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  color: var(--white-color);
  max-width: 485px;
  letter-spacing: -2%;
  line-height: 18px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 18px;
    line-height: 24px;
  }
`,b=e(a)`
  && {
    display: block;
    font-size: 14px;
    line-height: 16px;
    color: var(--white-color);
    font-weight: 600;
    width: 400px;
    text-align: center;
    padding: 18px 0px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,c=e.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -2%;
  margin-bottom: ${t=>t.margin};
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,f=e.button`
  background-color: ${t=>t.backgroundcolor};
  color: ${t=>t.color};
  width: 335px;
  padding: 18px 0px;
  border-radius: 40px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  border: 1px solid ${t=>t.backgroundcolor};

  &:hover,
  &:focus {
    background-color: ${t=>t.backgroundcolorhover};
    border: 1px solid ${t=>t.bordercover};
    color: ${t=>t.colorhover};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 400px;
  }
`,m=e.div`
  display: flex;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;

  a {
    display: block;
    padding: 14px 0px;
    width: 125px;
    border-radius: 40px;
    border: 1px solid var(--white-fifty-color);
    color: var(--white-color);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  a:hover,
  a:focus {
    background-color: var(--white-color);
    color: var(--dark-blue-color);
  }

  @media screen and (min-width: 768px) {
    a {
      font-size: 16px;
      width: 140px;
    }

    @media screen and (min-width: 1440px) {
    a {
      font-size: 16px;
      width: 147px;
    }
  }
`,w=({margin:t,title:o})=>n.jsx(c,{margin:t,children:o}),p="/DrinkMaster-FrontEnd/assets/bgMobile-e383a012.png",s="/DrinkMaster-FrontEnd/assets/bgTablet-14e49859.png",d="/DrinkMaster-FrontEnd/assets/bgDesktop-b848fba0.png",r="/DrinkMaster-FrontEnd/assets/circle-2c400467.png",i="/DrinkMaster-FrontEnd/assets/dobleCircle-e4528854.png",x=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${i}), url(${r}), url(${p});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    top -200px right,
    bottom -300px left 300px,
    center right -300px;
  background-size:
    auto auto,
    auto auto,
    auto 100%;
  padding: 0 20px;
  max-width: 100vw;
  height: 100vh;
  color: var(--start-page-txt-color);

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${i}), url(${r}), url(${s});
    background-position:
      top -300px left -500px,
      bottom -200px right -600px,
      center right -250px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${i}), url(${r}), url(${d});
    background-position:
      top -300px left -500px,
      bottom -400px right -500px,
      center right;
    padding: 0 100px;
  }
`,k=({children:t})=>n.jsx(l,{shouldForwardProp:o=>o!=="backgroundcolor",children:n.jsx(x,{children:t})});export{u as S,w as T,k as W,m as a,h as b,f as c,b as d};
