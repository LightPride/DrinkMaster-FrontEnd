import{u as o,c as I,aD as P,r as h,j as e,aE as w,d as M,i as G,aF as H,a7 as $,a8 as u,aG as B,aH as U,aI as Y,aJ as L,aK as _,L as J,aL as K,k as Q,l as X,aM as Z,C as V,aN as ee}from"./index-2726f18f.js";import{s as ie,b as ne,S as E,a as te}from"./react-select.esm-4f4bf7df.js";import{h as se}from"./drinks.selectors-1a8c742d.js";import{P as re}from"./PageTitle-097317e4.js";const oe=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,ae=o.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,de=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }
`,F=o.p`
  margin-bottom: ${({mb:i})=>i};
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    font-size: 24px;

    margin-bottom: ${({mb:i})=>i==="20px"?"24px":"40px"};
  }
`,le=o.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-bottom: 20px;

  .buttonAdd {
    outline: none;
    border: none;
    border-radius: 42px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    /* padding: 14px 40px; */
    width: 107px;
    height: 46px;
    background: #f3f3f3;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: #161f37;
    transition: background 0.3s ease;
    @media screen and (min-width: 768px) {
      /* padding: 18px 44px; */
      width: 118px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;
    }
    &:hover {
      background: rgba(64, 112, 205, 0.5);
      color: #f3f3f3;
    }
    &:disabled {
      animation: changeColor 0.5s infinite alternate;
    }
    @keyframes changeColor {
      0% {
        background-color: rgba(64, 111, 205, 0.76); /* Початковий колір */
      }
      100% {
        background-color: rgba(
          64,
          112,
          205,
          0.5
        ); /* Кінцевий колір, повторення анімації */
      }
    }
  }
`,ce=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`,pe=o.div`
  position: relative;
  width: 100%;
  height: 320px;
  background: rgba(22, 31, 55, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
  .labelPhoto {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:hover {
      &:before {
        content: 'change 🖊';
        position: absolute;
        z-index: 5;
        right: 10px;
        bottom: 10px;
        color: #ffffff;

        font-style: italic;
        font-size: small;
        background-color: rgba(64, 112, 205, 0.5);
        padding: 10px;
        border-radius: 20px;
      }
    }
  }
  .errorImage {
    position: absolute;
    display: block;
    right: 10px;
    bottom: 10px;
    color: red;

    font-style: italic;
    font-size: small;
  }
`,he=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  p {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    color: #f3f3f3;
  }
`,xe=o.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #f3f3f3;
  font-size: 40px;
  color: transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.5s ease;

  svg {
    transition: all 0.5s ease;
    stroke: #161f37;
  }
  &:hover {
    transition: all 0.5s ease;

    background-color: rgba(64, 112, 205, 0.5);
    svg {
      transform: rotate(90deg);
      transition: transform 0.5s ease;
      stroke: #f3f3f3;
    }
  }
`;o.input`
  display: none;
`;const ge=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,fe=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 31px;
  @media screen and (min-width: 768px) {
    width: 352px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
    width: 393px;
  }
  .styledDivInput {
    height: 34px;
    width: 100%;
    border-bottom: 1px solid rgba(243, 243, 243, 0.5);
    @media screen and (min-width: 768px) {
      height: 41px;
    }
    transition: all 0.3s ease-in-out;
    &:hover {
      border-bottom: 1px solid #f3f3f3;
    }
  }
  .styledDivInputErrorDrink,
  .styledDivInputErrorShortDescription,
  .styledDivInputErrorCategory,
  .styledDivInputErrorGlass {
    position: relative;
    border-color: red;
    color: red;
  }
  .styledDivInputErrorDrink::before,
  .styledDivInputErrorShortDescription::before,
  .styledDivInputErrorCategory::before,
  .styledDivInputErrorGlass:before {
    content: 'required';
    position: absolute;
    display: block;
    right: 0;
    bottom: -50%;
    color: red;

    font-style: italic;
    font-size: small;
  }
  .styledInputText {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    width: 100%;
    height: 90%;
    background-color: transparent;
    border: none;
    outline: none;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  .styledInputText::placeholder {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  .labelSelect {
    height: 90%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .labelTitle {
    display: flex;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .selectStyled {
    display: flex;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    position: relative;
  }
`,O={dropdownIndicator:(i,n)=>({...i,transform:n.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(i,{isFocused:n})=>({...i,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),placeholder:(i,{isFocused:n})=>({...i,fontSize:"14px",boxShadow:"none",cursor:"pointer",color:"#f3f3f3",display:"flex",alignItems:"center",fontWeight:"400",fontSize:"14px","@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],fontSize:"16px"}}),menu:i=>({...i,position:"absolute",width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px",right:"-10%","@media only screen and (min-width: 1440px)":{...i["@media only screen and (min-width: 1440px)"],width:"154px",right:"-0%"}},backgroundColor:"#161F37",borderRadius:"12px"}),indicatorSeparator:i=>({...i,display:"none"}),valueContainer:i=>({...i,padding:0}),singleValue:i=>({...i,color:"#f3f3f3"}),option:(i,{isFocused:n,isSelected:a})=>({...i,padding:"3px 0 6px 12px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...i["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:n?"#f3f3f375":a?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},me=o.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;

  .radioLabel {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    position: relative;

    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .styledSpan {
    opacity: 0.5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 8px;
  }
  .hiddenRadio {
    display: none;
    cursor: pointer;
  }
  .hiddenRadio:checked + .styledSpan {
    opacity: 1;
  }
  .styledRadio {
    position: relative;
    background-color: transparent;
    width: 16px;
    height: 16px;
    opacity: 1;
    border-radius: 50%;
    border: 2px solid;
  }
  .hiddenRadio:checked + .styledSpan > .styledRadio {
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 60%;
      height: 60%;
      background-color: #f3f3f3;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      border-radius: 50%;
    }
  }
`;function ue(i){const n=new Date,a=new Date(i);let c=n.getFullYear()-a.getFullYear();const s=n.getMonth()-a.getMonth();return(s<0||s===0&&n.getDate()<a.getDate())&&c--,c}const ye=({values:i,errors:n,touched:a,handleChange:c,handleBlur:s,setFieldValue:t})=>{const x=I(ie),l=I(ne),m=I(P)||[],[b,j]=h.useState(!0),[D,N]=h.useState(null),[z,C]=h.useState([]),[p,d]=h.useState([]),[f,g]=h.useState([]),[k,T]=h.useState([]);h.useEffect(()=>{j(ue(m.dateOfBirth)<18)},[m]),h.useEffect(()=>{async function r(){try{const y=x.map(({category:S})=>({value:S,label:S}));C(y)}catch(y){console.error("Помилка:",y)}}async function v(){try{const y=l.map(({glass:S})=>({value:S,label:S}));d(y)}catch(y){console.error("Ошибка при загрузці скла:",y)}}r(),v()},[x,l]);const W=r=>{g(r),t("category",r.value)},q=r=>{T(r),t("glass",r.value)},R=r=>{const v=r.target.files[0];t("drinkThumb",v),N(v?URL.createObjectURL(v):null)};return e.jsxs(ce,{children:[e.jsxs(pe,{children:[D?e.jsxs("label",{className:"labelPhoto",children:[e.jsx("input",{style:{display:"none"},id:"drinkThumb",type:"file",name:"drinkThumb",accept:"drinkThumb/*",onChange:r=>R(r)}),e.jsx("img",{className:"labelPhoto",src:D,alt:"Selected"})]}):e.jsxs(he,{children:[e.jsxs(xe,{children:[e.jsxs("svg",{width:"29",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M14.5 5.8335V22.1668",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M6.33203 14H22.6654",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("input",{style:{display:"none"},id:"drinkThumb",type:"file",name:"drinkThumb",accept:"drinkThumb/*",onChange:r=>R(r)})]}),e.jsx("p",{children:"Add Image"})]}),n.drinkThumb&&e.jsx("p",{className:"errorImage",children:"select image please"})]}),e.jsxs(ge,{children:[e.jsxs(fe,{children:[e.jsx("div",{className:`styledDivInput ${n.drink&&a.drink&&"styledDivInputErrorDrink"}`,children:e.jsx(w,{className:"styledInputText",placeholder:"Enter item title",type:"text",id:"drink",name:"drink",onChange:r=>{c(r)}})}),e.jsx("div",{className:`styledDivInput ${n.shortDescription&&a.shortDescription&&"styledDivInputErrorShortDescription"}`,children:e.jsx(w,{className:"styledInputText",placeholder:"Enter short description",id:"shortDescription",name:"shortDescription",onChange:r=>{c(r)}})}),e.jsx("div",{className:`styledDivInput ${n.category&&a.category&&"styledDivInputErrorCategory"}`,children:e.jsxs("label",{className:"labelSelect",children:[e.jsx("p",{className:"labelTitle",children:"Category"}),e.jsx(E,{className:"selectStyled",name:"category",options:z,value:f,onChange:r=>W(r),styles:O})]})}),e.jsx("div",{className:`styledDivInput ${n.glass&&a.glass&&"styledDivInputErrorGlass"}`,children:e.jsxs("label",{className:"labelSelect",children:[e.jsx("p",{className:"labelTitle",children:"Glass"}),e.jsx(E,{className:"selectStyled",name:"glass",options:p,value:k,onChange:r=>q(r),styles:O})]})})]}),e.jsxs(me,{children:[e.jsxs("label",{className:"radioLabel",children:[e.jsx(w,{className:"hiddenRadio",type:"radio",name:"alcoholic",value:"Alcoholic",checked:i.alcoholic==="Alcoholic",onChange:c,disabled:b}),e.jsxs("div",{className:"styledSpan",children:[e.jsx("span",{className:"styledRadio"}),e.jsx("p",{children:"Alcoholic"})]})]}),e.jsxs("label",{className:"radioLabel",children:[e.jsx(w,{className:"hiddenRadio",type:"radio",name:"alcoholic",value:"Non alcoholic",checked:i.alcoholic==="Non alcoholic",onChange:c}),e.jsxs("div",{className:"styledSpan",children:[e.jsx("span",{className:"styledRadio"}),e.jsx("p",{children:"Non-alcoholic"})]})]})]})]})]})},be=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,we=o.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .titleIngredientsForm {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: #f3f3f3;
    @media screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 1.1;
    }
  }
  .containerIngredientInputs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 16px;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 100%;
    max-width: 104px;
    height: 38px;
    @media screen and (min-width: 768px) {
      gap: 18px;
      max-width: 114px;
      height: 44px;
    }
  }
  .quantityTitle {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.56;
    text-align: center;
    color: #f3f3f3;
    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }
`,A=o.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  svg {
    stroke: #f3f3f397;
    transition: all 0.5s ease;
  }
  &:hover {
    svg {
      stroke: #ffffff;
      transition: all 0.5s ease;
    }
  }
`,je=o.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  .inputsWrapper {
    display: flex;
    align-items: center;
    text-align: center;
  }
  .styledSelect {
    background-color: transparent;
    width: 100%;
    min-width: 120px;
    max-width: 200px;
    height: 50px;
    margin-right: 8px;

    @media screen and (min-width: 768px) {
      max-width: 332px;
      height: 56px;
      margin-right: 14px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 316px;
    }
  }
  .styledInput {
    background-color: transparent;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 100%;
    max-width: 101px;
    height: 50px;
    margin-right: 8px;
    color: #f3f3f3;
    padding-left: 24px;
    padding-right: 12px;

    &::placeholder {
      opacity: 0.5;
    }

    &:hover {
      border: 1px solid rgba(243, 243, 243, 0.918);
    }
    @media screen and (min-width: 768px) {
      max-width: 150px;
      height: 56px;
      margin-left: 14px;
      margin-right: auto;
    }
  }
  .errorIngredietns {
    position: absolute;
    display: block;
    left: 1%;
    top: -30px;
    color: red;

    font-style: italic;
    font-size: small;
  }
`,ke={dropdownIndicator:(i,n)=>({...i,paddingRight:"18px","@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:n.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(i,n)=>({...i,height:"50px",border:"     1px solid rgba(243, 243, 243, 0.5)",background:"inherit",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...n["@media only screen and (min-width: 768px)"],height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:i=>({...i,marginTop:"2px",padding:"6px 12px",backgroundColor:" #161f37",borderRadius:"12px","@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],padding:"6px 18px"}}),indicatorSeparator:i=>({...i,display:"none"}),valueContainer:i=>({...i,padding:"0px 18px","@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:i=>({...i,color:"#f3f3f3"}),placeholder:i=>({...i,"@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(i,{isFocused:n,isSelected:a})=>({...i,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:n?"#f3f3f375":a?"#f3f3f3":"#f3f3f340",cursor:"pointer"})},ve=({values:i,errors:n,touched:a,handleChange:c,handleBlur:s,setFieldValue:t})=>{const x=I(te),[l,m]=h.useState([]),[b,j]=h.useState([]);h.useEffect(()=>{async function p(){try{const f=(i.alcoholic==="Non alcoholic"?x.filter(g=>g.alcohol!=="Yes"):x).map(({title:g,_id:k})=>({label:g,value:k}));m(f)}catch(d){console.error("Помилка при завантаженні інгрідієнтів:",d)}}p()},[i.alcoholic,x]);const D=(p,d)=>{const{value:f,label:g}=p;t(`ingredients[${d}].title`,g),t(`ingredients[${d}].ingredientId`,f),j(k=>{const T=[...k];return T[d]=p,T})},N=()=>{const p={title:"",measure:""};t("ingredients",[...i.ingredients,p]),j(d=>[...d,null])},z=p=>{const d=[...i.ingredients];d.splice(p,1),t("ingredients",d),j(f=>{const g=[...f];return g.splice(p,1),g})},C=i.ingredients.length===1;return e.jsxs(be,{children:[e.jsxs(we,{children:[e.jsx("h4",{className:"titleIngredientsForm",children:"Ingredients"}),e.jsxs("div",{className:"containerIngredientInputs",children:[e.jsx(A,{className:"buttonAddRemove",type:"button",onClick:()=>z(i.ingredients.length-1),disabled:C,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2.5 8H13.5",strokeOpacity:"0.4",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("p",{className:"quantityTitle",children:i.ingredients.length}),e.jsx(A,{type:"button",onClick:N,className:"buttonAddRemove",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2.5 8H13.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M8 2.5V13.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]}),e.jsxs(je,{children:[n.ingredients&&a.ingredients&&e.jsxs("p",{className:"errorIngredietns",children:["please fill in all added ingredient fields or remove them"," "]}),i.ingredients.map((p,d)=>e.jsxs("div",{className:"inputsWrapper",children:[e.jsx(E,{className:"styledSelect",name:`ingredients[${d}].title`,options:l,value:b[d],onChange:f=>D(f,d),onBlur:s,styles:ke}),e.jsx(w,{className:"styledInput",type:"text",name:`ingredients[${d}].measure`,placeholder:"1 cl",value:p.measure||"",onChange:c,onBlur:s}),e.jsx(A,{type:"button",onClick:()=>z(d),disabled:C,children:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]},d))]})]})},Se=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 40px;
  position: relative;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
  .inputField {
    background-color: transparent;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 14px;
    padding: 18px 16px;
    color: #f3f3f3;
    height: 184px;
    resize: none;
    width: 100%;
    &:hover {
      border: 1px solid rgba(243, 243, 243, 0.918);
    }
    @media screen and (min-width: 768px) {
      width: 480px;
    }
  }
  .inputFieldErr {
    border-color: red;
  }
`,Ie=o.label`
  position: relative;
  .errorInstructions {
    position: absolute;
    display: block;
    left: 1%;
    top: -30px;
    color: red;

    font-style: italic;
    font-size: small;
  }
`,De=o.div`
  h4 {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: #f3f3f3;
    @media screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 1.1;
    }
  }
`,Ne=({values:i,errors:n,handleChange:a,touched:c})=>e.jsxs(Se,{children:[e.jsx(De,{children:e.jsx("h4",{children:"Recipe Preparation"})}),e.jsxs(Ie,{children:[e.jsx(w,{as:"textarea",placeholder:"Enter the recipe",name:"instructions",onChange:s=>{a(s)},value:i.instructions,className:`inputField ${n.instructions&&c.instructions&&"inputFieldErr"}`}),n.instructions&&c.instructions&&e.jsx("p",{className:"errorInstructions",children:"this field is mandatory"})]})]}),ze=()=>{const i=M(),[n,a]=h.useState(!1),c=G();return e.jsx(H,{initialValues:{drink:"",ingredients:[{title:"",measure:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic",shortDescription:""},validationSchema:$().shape({drink:u().required("This field is mandatory"),shortDescription:u().required("This field is mandatory"),instructions:u().required("This field is mandatory"),category:u().required("This field is mandatory"),glass:u().required("This field is mandatory"),alcoholic:u().required("Select the type of cocktail"),drinkThumb:B().required("Select image please"),ingredients:U().of($().shape({title:u().required("Ingredient title is required"),measure:u().required("Ingredient measure is required")})).required("At least one ingredient is required")}),onSubmit:async s=>{a(!0);const t=new FormData;t.append("drink",s.drink),t.append("category",s.category),t.append("shortDescription",s.shortDescription),t.append("alcoholic",s.alcoholic),t.append("instructions",s.instructions),t.append("glass",s.glass),t.append("drinkThumb",s.drinkThumb);const x=JSON.stringify(s.ingredients);t.append("ingredients",x);try{const l=await i(Y(t));l.meta.requestStatus==="fulfilled"?(L.Notify.success(l.payload.message+" ,name: "+l.payload.newDrink.drink),L.Notify.info("in 5 seconds you will be redirected to the page with your cocktails"),setTimeout(()=>{a(!1),c("/my")},4e3)):L.Notify.failure(l.payload.message)}catch(l){L.Notify.failure(l),console.error("Error:",l),a(!1)}},children:({values:s,errors:t,touched:x,handleChange:l,handleBlur:m,setFieldValue:b})=>e.jsx(_,{children:e.jsxs(le,{children:[e.jsx(ye,{values:s,errors:t,touched:x,handleChange:l,handleBlur:m,setFieldValue:b}),e.jsx(ve,{values:s,errors:t,touched:x,handleChange:l,handleBlur:m,setFieldValue:b}),e.jsx(Ne,{values:s,errors:t,touched:x,handleChange:l,handleBlur:m}),e.jsx("button",{className:"buttonAdd",type:"submit",disabled:n,children:n?"Loading...":"Add"})]})})})},Ce=o.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
    max-width: 336px;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
  img {
    width: 90px;
    height: 90px;
    border-radius: 8px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  h4 {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    color: #f3f3f3;
  }
  p {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: rgba(243, 243, 243, 0.5);
    /*  */
    max-height: 4em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
    gap: 28px;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,Te=()=>{M();const i=I(se);return e.jsx(Ce,{children:i.map(n=>e.jsx("li",{children:e.jsxs(J,{to:`/drinks/${n._id}`,children:[e.jsx("img",{src:n.drinkThumb,alt:n.tags}),e.jsxs("div",{children:[e.jsxs("h4",{children:[n.drink," "]}),e.jsx("p",{children:n.description})]})]})},n._id))})},Re=()=>{const i=M();return h.useEffect(()=>{i(K()),i(Q()),i(X()),i(Z())},[i]),e.jsx(V,{children:e.jsxs(oe,{children:[e.jsx(re,{title:"Add drink"}),e.jsxs(ae,{children:[e.jsx(ze,{}),e.jsxs(de,{children:[e.jsxs("div",{children:[e.jsx(F,{mb:"20px",children:"Follow Us"}),e.jsx(ee,{})]}),e.jsxs("div",{children:[e.jsx(F,{mb:"28px",children:"Popular Drinks"}),e.jsx(Te,{})]})]})]})]})})};export{Re as default};