import{u as e,j as o,at as n,N as r}from"./index-f212da8e.js";const a=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  max-width: 100vw;
  height: 100vh;
  color: var(--start-page-txt-color);

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`,c=({children:t})=>o.jsx(n,{shouldForwardProp:i=>i!=="backgroundcolor",children:o.jsx(a,{children:t})});const d=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;

  .textInput {
    max-width: 335px;
    width: 100%;
  }

  .textInput button {
    color: var(--white-color);
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
      max-width: 400px;
    }
  }
`,x=e.p`
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
`,p=e(r)`
  && {
    display: block;
    font-size: 14px;
    line-height: 16px;
    color: var(--white-color);
    font-weight: 600;
    max-width: 335px;
    width: 100%;
    text-align: center;
    padding: 18px 0px;
  }

  @media screen and (min-width: 768px) {
    && {
      font-size: 14px;
      max-width: 400px;
    }
  }
`,s=e.h1`
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
`,h=e.h1`
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -2%;
  margin-bottom: 14px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    text-align: start;
    font-size: 40px;
    line-height: 44px;
  }
`,m=e.button`
  background-color: ${t=>t.backgroundcolor};
  color: ${t=>t.color};
  max-width: 335px;
  width: 100%;
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
    max-width: 400px;
  }
`,w=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
      justify-content: flex-start;
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
`;export{x as S,c as W,w as a,h as b,d as c,m as d,s as e,p as f};
