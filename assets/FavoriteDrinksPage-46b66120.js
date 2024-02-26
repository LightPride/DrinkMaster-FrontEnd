import{u as d,w as x,d as l,r as a,aj as f,j as s,C as h}from"./index-f7ae2c92.js";import{u as j,D as P,N as k}from"./NotFoundDrinks-8a3b799d.js";import{P as v}from"./PageTitle-fd1b670f.js";import"./drinks.selectors-921ceaf2.js";import"./coctailPlaceholder-82987b74.js";import"./blueIced@2xMob-abf058dd.js";const D=d.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`;function y(){const r=x(),i=l(),{total:c,favoriteDrinks:t}=j(),[e,m]=a.useState(1),[u,g]=a.useState(!1),o=6,p=n=>{m(n)};return a.useEffect(()=>{(t==null?void 0:t.length)===0&&e>1&&p(e-1),g((t==null?void 0:t.length)>0)},[e,t]),a.useEffect(()=>{r(`?page=${e}`)},[e,r]),a.useEffect(()=>{i(f({page:e,limit:o})).unwrap().catch(n=>console.log(n))},[i,e,c,o]),s.jsx(h,{children:s.jsxs(D,{children:[s.jsx(v,{title:"Favorites"}),u>0?s.jsx(P,{favorite:!0,drinksData:t,onPageChange:p,currentPage:e}):s.jsx(k,{text:"You haven't added any favorite cocktails yet"})]})})}export{y as default};
