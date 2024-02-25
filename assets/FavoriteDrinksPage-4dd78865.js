import{u as d,i as x,d as l,r as a,ah as h,j as s,C as f}from"./index-49652900.js";import{u as P,D as j,N as k}from"./NotFoundDrinks-bfda743f.js";import{P as v}from"./PageTitle-4360c7eb.js";import"./drinks.selectors-504e75fe.js";import"./coctailPlaceholder-82987b74.js";import"./blueIced@2xMob-abf058dd.js";const D=d.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`;function y(){const i=x(),r=l(),{total:c,favoriteDrinks:t}=P(),[e,m]=a.useState(1),[u,g]=a.useState(!1),o=6,p=n=>{m(n)};return a.useEffect(()=>{(t==null?void 0:t.length)===0&&e>1&&p(e-1),g((t==null?void 0:t.length)>0)},[e,t]),a.useEffect(()=>{i(`?page=${e}`)},[e,i]),a.useEffect(()=>{r(h({page:e,limit:o})).unwrap().catch(n=>console.log(n))},[r,e,c,o]),s.jsx(f,{children:s.jsxs(D,{children:[s.jsx(v,{title:"Favorites"}),u>0?s.jsx(j,{favorite:!0,drinksData:t,onPageChange:p,currentPage:e}):s.jsx(k,{text:"You haven't added any favorite cocktails yet"})]})})}export{y as default};
