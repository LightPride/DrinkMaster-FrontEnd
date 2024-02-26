import{u as g,d as x,r as a,c as l,av as h,j as s,C as f}from"./index-f212da8e.js";import{c as j}from"./drinks.selectors-f4e4ee20.js";import{u as P,D,N as k}from"./NotFoundDrinks-b7f8fbb2.js";import{P as v}from"./PageTitle-57d80d49.js";import{u as F,P as C}from"./Paginator-d4adc9aa.js";import"./coctailPlaceholder-82987b74.js";import"./blueIced@2xMob-abf058dd.js";const E=g.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`;function A(){const o=x(),{total:p,favoriteDrinks:t}=P(),[e,m]=a.useState(1),[u,d]=a.useState(!1),n=l(j),{isDesktop:i}=F(),c=r=>{m(r)};return a.useEffect(()=>{(t==null?void 0:t.length)===0&&e>1&&c(e-1),d((t==null?void 0:t.length)>0)},[e,t]),a.useEffect(()=>{o(h({page:n,size:i?9:8})).unwrap().catch(r=>console.log(r))},[o,n,i,p]),s.jsx(f,{children:s.jsxs(E,{children:[s.jsx(v,{title:"Favorites"}),u>0?s.jsxs(s.Fragment,{children:[s.jsx(D,{favorite:!0,drinksData:t,onPageChange:c,currentPage:e}),s.jsx(C,{})]}):s.jsx(k,{text:"You haven't added any favorite cocktails yet"})]})})}export{A as default};
