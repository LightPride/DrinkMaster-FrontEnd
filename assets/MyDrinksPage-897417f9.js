import{u as d,i as x,d as f,r as e,au as l,j as a,C as h}from"./index-5daad91e.js";import{u as j,D as k,N as D}from"./NotFoundDrinks-200d77b2.js";import{P}from"./PageTitle-dc835bfc.js";import{a as E}from"./Paginator-c123a4e6.js";import"./drinks.selectors-cd947628.js";import"./coctailPlaceholder-82987b74.js";import"./blueIced@2xMob-abf058dd.js";const v=d.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`;function w(){const r=x(),i=f(),[t,c]=e.useState(1),{total:m,ownDrinks:s}=j(),[g,u]=e.useState(!1),o=6,p=n=>{c(n)};return e.useEffect(()=>{(s==null?void 0:s.length)===0&&t>1&&p(t-1),u((s==null?void 0:s.length)>0)},[t,s]),e.useEffect(()=>{r(`?page=${t}`)},[t,r]),e.useEffect(()=>{i(l({page:t,limit:o})).unwrap().catch(n=>console.log(n))},[i,t,m,o]),a.jsx(h,{children:a.jsxs(v,{children:[a.jsx(P,{title:"My drinks"}),g>0?a.jsxs(a.Fragment,{children:[a.jsx(k,{drinksData:s,onPageChange:p,currentPage:t}),a.jsx(E,{})]}):a.jsx(D,{text:"You haven't added any cocktails"})]})})}export{w as default};
