import{u as t,k as s,j as e}from"./index-7b3f6eea.js";import{d as a}from"./coctailPlaceholder-82987b74.js";const d=t.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,c=t.img`
  width: 100%;
  height: auto;
  margin-bottom: 14px;
  border-radius: 8px;
`,h=t.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;

  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,x=t(s)`
  font-size: 14px;
  line-height: 1.125;
  color: var(--white-fifty-color);

  &:hover {
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,m=t.div`
  display: flex;
  justify-content: space-between;
`,w=({drinkThumb:r,drinkTitle:i,id:o})=>e.jsxs(d,{children:[e.jsx(c,{src:r,alt:i,onError:n=>{n.currentTarget.src=a}}),e.jsxs(m,{children:[e.jsx(h,{children:i}),e.jsx(x,{to:`/drinks/${o}`,children:"See more"})]})]});export{w as D};
