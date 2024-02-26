import{u as g,x,d as f,r as a,aw as l,j as e,C as h}from"./index-ffccb5d3.js";import{u as k,D,N as j}from"./NotFoundDrinks-b2cedcfb.js";import{P}from"./PageTitle-a3e0bb21.js";import"./drinks.selectors-fbad5e74.js";import"./coctailPlaceholder-82987b74.js";import"./blueIced@2xMob-abf058dd.js";const E=g.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`;function w(){const i=x(),r=f(),[t,c]=a.useState(1),{total:m,ownDrinks:s}=k(),[u,d]=a.useState(!1),o=6,p=n=>{c(n)};return a.useEffect(()=>{(s==null?void 0:s.length)===0&&t>1&&p(t-1),d((s==null?void 0:s.length)>0)},[t,s]),a.useEffect(()=>{i(`?page=${t}`)},[t,i]),a.useEffect(()=>{r(l({page:t,limit:o})).unwrap().catch(n=>console.log(n))},[r,t,m,o]),e.jsx(h,{children:e.jsxs(E,{children:[e.jsx(P,{title:"My drinks"}),u>0?e.jsx(D,{drinksData:s,onPageChange:p,currentPage:t}):e.jsx(j,{text:"You haven't added any cocktails"})]})})}export{w as default};
