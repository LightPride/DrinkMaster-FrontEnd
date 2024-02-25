import{u as e,L as d,j as i}from"./index-49652900.js";import{d as s}from"./coctailPlaceholder-82987b74.js";const p=e.li`
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
`,a=e.img`
  width: 100%;
  height: 360px;
  margin-bottom: 14px;
  border-radius: 8px;
  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,h=e.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;

  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,x=e(d)`
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
`,c=e.div`
  display: flex;
  justify-content: space-between;
`,l=({drinkThumb:r,drinkTitle:t,id:n})=>i.jsxs(p,{children:[i.jsx(a,{src:r,alt:t,onError:o=>{o.currentTarget.src=s}}),i.jsxs(c,{children:[i.jsx(h,{children:t}),i.jsx(x,{to:`/drinks/${n}`,children:"See more"})]})]}),w=e.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,f=e.p`
  color: var(--white-color);
`;export{l as D,f as E,w as W};
