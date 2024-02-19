import{u as i,j as e}from"./index-893b7255.js";import{P as p}from"./PageTitle-875eebe2.js";const l=i.div`
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
`,x=i.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,c=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }
`,a=i.p`
  margin-bottom: ${({mb:t})=>t};
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    font-size: 24px;

    margin-bottom: ${({mb:t})=>t==="20px"?"24px":"40px"};
  }
`,h=i.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-bottom: 20px;
`,g=i.div`
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
`,m=i.div`
  width: 100%;
  height: 320px;
  background: rgba(22, 31, 55, 0.5);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,f=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,w=i.div`
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
  div {
    background-color: #b6c9bf;
    height: 34px;
    width: 100%;
    @media screen and (min-width: 768px) {
      height: 41px;
    }
  }
`,j=i.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  div {
    background-color: #ccddd5;
    height: 19px;
    @media screen and (min-width: 768px) {
      height: 23px;
    }
  }
`,u=()=>e.jsxs(g,{children:[e.jsx(m,{}),e.jsxs(f,{children:[e.jsxs(w,{children:[e.jsx("div",{children:"Тут буде інпут тайтлу"}),e.jsx("div",{children:"Тут буде інпут рецепту"}),e.jsx("div",{children:"Тут буде селект категорії"}),e.jsx("div",{children:"Тут буде селект скла"})]}),e.jsxs(j,{children:[e.jsx("div",{children:"алкоголік "}),e.jsx("div",{children:"нон-алкоголік"})]})]})]}),v=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,b=i.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 16px;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 104px;
    height: 38px;
    opacity: 0.8;
    @media screen and (min-width: 768px) {
      gap: 18px;
      width: 114px;
      height: 44px;
    }
  }
  p {
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
`,n=i.button`
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
`,k=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,r=i.div`
  display: flex;
  align-items: center;
  text-align: center;

  select {
    background-color: transparent;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 200px;
    height: 50px;
    opacity: 0.8;
    margin-right: 8px;
  }

  input {
    background-color: transparent;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 101px;
    height: 50px;
    opacity: 0.8;
    margin-right: 8px;
    color: #f3f3f3;
  }
  @media screen and (min-width: 768px) {
    select {
      width: 332px;
      height: 56px;
      opacity: 0.8;
      margin-right: 14px;
    }

    input {
      width: 150px;
      height: 56px;
      margin-right: auto;
    }
  }
  @media screen and (min-width: 1440px) {
    select {
      width: 316px;
    }
  }
`,C=()=>e.jsxs(v,{children:[e.jsxs(b,{children:[e.jsx("h4",{children:"Ingredients"}),e.jsxs("div",{children:[e.jsx(n,{children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeOpacity:"0.3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("p",{children:"3"}),e.jsx(n,{children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2.5 8H13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M8 2.5V13.5",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]}),e.jsxs(k,{children:[e.jsxs(r,{children:[e.jsx("select",{name:"name",id:"1"}),e.jsx("input",{type:"text"}),e.jsx(n,{children:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),e.jsxs(r,{children:[e.jsx("select",{name:"name",id:"2"}),e.jsx("input",{type:"text",placeholder:""}),e.jsx(n,{children:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),e.jsxs(r,{children:[e.jsx("select",{name:"name",id:"3"}),e.jsx("input",{type:"text"}),e.jsx(n,{children:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M14.0625 3.9375L3.9375 14.0625",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14.0625 14.0625L3.9375 3.9375",stroke:"#F3F3F3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]})]}),y=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,F=i.div`
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
`,L=i.textarea`
  background-color: transparent;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
  padding: 18px 16px;
  color: #f3f3f3;
  height: 184px;
  resize: none;
  @media screen and (min-width: 768px) {
    width: 480px;
  }
`,M=()=>e.jsxs(y,{children:[e.jsx(F,{children:e.jsx("h4",{children:"Recipe Preparation"})}),e.jsx(L,{placeholder:"Enter the recipe",name:"ReciepePreparation"})]}),W=()=>e.jsx(e.Fragment,{children:e.jsxs("form",{action:"",children:[e.jsxs(h,{children:[e.jsx(u,{}),e.jsx(C,{}),e.jsx(M,{})]}),e.jsx("button",{type:"submit",children:"Add"})]})}),I=i.ul`
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
`,z=()=>e.jsxs(I,{children:[e.jsx("li",{children:e.jsxs("a",{href:"",children:[e.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),e.jsxs("div",{children:[e.jsx("h4",{children:"Lone Tree Cooler"}),e.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),e.jsx("li",{children:e.jsxs("a",{href:"",children:[e.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),e.jsxs("div",{children:[e.jsx("h4",{children:"Lone Tree Cooler"}),e.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),e.jsx("li",{children:e.jsxs("a",{href:"",children:[e.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),e.jsxs("div",{children:[e.jsx("h4",{children:"Lone Tree Cooler"}),e.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})}),e.jsx("li",{children:e.jsxs("a",{href:"",children:[e.jsx("img",{src:"https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",alt:"img"}),e.jsxs("div",{children:[e.jsx("h4",{children:"Lone Tree Cooler"}),e.jsx("p",{children:"highball cockаааtail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3."})]})]})})]}),T=i.ul`
  display: inline-flex;
  column-gap: 14px;
`,o=i.li`
  opacity: 0.8;
  transition: opacity 250ms ease;
  &:hover,
  &:focus {
    opacity: 1;
  }
`,s=i.a`
  display: inline-flex;

  width: 38px;
  height: 38px;
  padding: 8px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 1px solid var(--white-twenty-color);

  transition: border-color 250ms ease;

  &:hover,
  &:focus {
    border: 1px solid var(--white-fifty-color);
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`,d=i.svg`
  width: 22px;
  height: 22px;
  fill: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,D=()=>e.jsxs(T,{children:[e.jsx(o,{children:e.jsx(s,{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(d,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:e.jsx("path",{d:"M17.0804 4.06011C17.2904 4.06011 17.5004 4.06011 17.9204 4.06011V7.21011C17.7104 7.21011 17.2904 7.21011 16.8704 7.21011C16.4504 7.21011 16.0304 7.21011 15.8204 7.42011C15.6104 7.63011 15.6104 7.84011 15.6104 8.33011C15.6104 8.75011 15.6104 9.03011 15.6104 9.45011H17.9204V12.1101H15.6104V23.6601H12.0404V12.0401H10.1504V9.38011H12.0404V8.47011C12.0404 6.93011 12.2504 5.81011 12.6704 5.32011C13.3004 4.41011 14.5604 3.99011 16.4504 3.99011C16.6604 4.06011 16.8704 4.06011 17.0804 4.06011Z"})})})}),e.jsx(o,{children:e.jsx(s,{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:e.jsxs(d,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:[e.jsx("path",{d:"M25.1277 9.41152C25.114 8.47146 24.9398 7.53885 24.6065 6.65964C24.0231 5.15827 22.8352 3.97109 21.3313 3.38991C20.4618 3.06332 19.5426 2.88822 18.6122 2.86835C17.4155 2.81495 17.0361 2.80005 13.9986 2.80005C10.961 2.80005 10.5716 2.80005 9.38372 2.86835C8.45454 2.88822 7.5353 3.06332 6.66582 3.38991C5.16196 3.97109 3.97279 5.15827 3.39065 6.65964C3.06351 7.52767 2.88688 8.44538 2.86946 9.37302C2.81598 10.5689 2.7998 10.9477 2.7998 13.9802C2.7998 17.0127 2.7998 17.4002 2.86946 18.5873C2.88812 19.5162 3.06351 20.4327 3.39065 21.3032C3.97404 22.8033 5.16195 23.9905 6.66706 24.5717C7.53281 24.9095 8.45205 25.1007 9.38497 25.1305C10.5828 25.1839 10.9622 25.2001 13.9998 25.2001C17.0374 25.2001 17.4267 25.2001 18.6146 25.1305C19.5438 25.1119 20.4631 24.9368 21.3338 24.6102C22.8377 24.0278 24.0256 22.8406 24.609 21.3405C24.9361 20.4712 25.1115 19.5547 25.1301 18.6246C25.1836 17.43 25.1998 17.0512 25.1998 14.0174C25.1973 10.9849 25.1973 10.5999 25.1277 9.41152ZM13.9911 19.7149C10.8142 19.7149 8.24059 17.1456 8.24059 13.974C8.24059 10.8024 10.8142 8.23302 13.9911 8.23302C17.1655 8.23302 19.7416 10.8024 19.7416 13.974C19.7416 17.1456 17.1655 19.7149 13.9911 19.7149ZM19.9705 9.35936C19.2279 9.35936 18.6296 8.7608 18.6296 8.02067C18.6296 7.28055 19.2279 6.68199 19.9705 6.68199C20.7106 6.68199 21.3102 7.28055 21.3102 8.02067C21.3102 8.7608 20.7106 9.35936 19.9705 9.35936Z"}),e.jsx("path",{d:"M13.9928 17.4789C15.9277 17.4789 17.4963 15.9104 17.4963 13.9754C17.4963 12.0405 15.9277 10.4719 13.9928 10.4719C12.0578 10.4719 10.4893 12.0405 10.4893 13.9754C10.4893 15.9104 12.0578 17.4789 13.9928 17.4789Z"})]})})}),e.jsx(o,{children:e.jsx(s,{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:e.jsx(d,{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.2103 5.24986C20.0203 5.17986 17.5704 5.10986 13.8604 5.10986H13.3703C9.80034 5.10986 7.42038 5.17986 6.23038 5.31986C4.62038 5.45986 3.50034 5.87986 2.87034 6.43986C2.31034 6.92986 1.89036 7.83986 1.75036 9.02986C1.68036 9.79986 1.61035 11.4099 1.61035 13.8599V14.2099C1.61035 16.5199 1.68034 18.1299 1.82034 18.8999C2.03034 20.0199 2.38038 20.8599 3.08038 21.3499C3.78038 21.9099 4.97036 22.2599 6.65036 22.3999C7.84036 22.4699 10.2904 22.5399 14.0004 22.5399H14.4904C18.0604 22.5399 20.4404 22.4699 21.6304 22.3299C23.2404 22.1899 24.3604 21.7699 24.9904 21.2099C25.5504 20.7199 25.9703 19.8099 26.1103 18.6199C26.1803 17.8499 26.2504 16.2399 26.2504 13.7899V13.4399C26.2504 11.1299 26.1804 9.51986 26.0404 8.74986C25.8304 7.62986 25.4804 6.78986 24.7804 6.29986C24.0804 5.73986 22.8903 5.38986 21.2103 5.24986ZM18.4804 13.8599L10.7804 18.4799V9.23986L18.4804 13.8599Z"})})})})]}),H=()=>e.jsxs(l,{children:[e.jsx(p,{title:"Add drink"}),e.jsxs(x,{children:[e.jsx(W,{}),e.jsxs(c,{children:[e.jsxs("div",{children:[e.jsx(a,{mb:"20px",children:"Follow Us"}),e.jsx(D,{})]}),e.jsxs("div",{children:[e.jsx(a,{mb:"28px",children:"Popular Drinks"}),e.jsx(z,{})]})]})]})]});export{H as default};
