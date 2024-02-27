import{u as i,L as s,j as e}from"./index-d53080b4.js";import{d as h}from"./coctailPlaceholder-82987b74.js";const d=i.li`
  width: 100%;
  height: 392px;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 398px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 438px;
  }
`,a=i.img`
  width: 100%;
  height: 360px;
  margin-bottom: 14px;
  border-radius: 8px;
  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,c=i.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;

  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,p=i(s)`
  font-size: 14px;
  line-height: 1.125;
  color: var(--white-fifty-color);
  cursor: pointer;
  &:hover {
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,x=i.div`
  display: flex;
  justify-content: space-between;
`,w=({drinkThumb:r,drinkTitle:t,id:n})=>e.jsxs(d,{children:[e.jsx(a,{src:r,alt:t,onError:o=>{o.currentTarget.src=h}}),e.jsxs(x,{children:[e.jsx(c,{children:t}),e.jsx(p,{to:`/drinks/${n}`,children:"See more"})]})]});export{w as D};
