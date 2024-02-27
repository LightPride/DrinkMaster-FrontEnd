import{u as g,d as x,r as a,c as l,aw as h,j as s,C as f}from"./index-cfae2995.js";import{c as j}from"./drinks.selectors-83efa7cd.js";import{u as P,D,N as k}from"./NotFoundDrinks-d508fea4.js";import{P as F}from"./PageTitle-ce79fcf0.js";import{u as v,P as w}from"./Paginator-05f5102d.js";import"./coctailPlaceholder-82987b74.js";import"./blueIced@2xMob-abf058dd.js";const C=g.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`;function A(){const o=x(),{total:p,favoriteDrinks:t}=P(),[e,m]=a.useState(1),[u,d]=a.useState(!1),n=l(j),{isDesktop:i}=v(),c=r=>{m(r)};return a.useEffect(()=>{(t==null?void 0:t.length)===0&&e>1&&c(e-1),d((t==null?void 0:t.length)>0)},[e,t]),a.useEffect(()=>{o(h({page:n,size:i?9:8})).unwrap().catch(r=>console.log(r))},[o,n,i,p]),s.jsx(f,{children:s.jsxs(C,{children:[s.jsx(F,{title:"Favorites"}),u>0?s.jsxs(s.Fragment,{children:[s.jsx(D,{favorite:!0,drinksData:t,onPageChange:c,currentPage:e}),s.jsx(w,{})]}):s.jsx(k,{text:"You haven't added any favorite cocktails yet"})]})})}export{A as default};
