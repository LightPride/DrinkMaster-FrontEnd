import{u as x,i as l,d as f,r as a,c as h,av as j,j as s,C as k}from"./index-4bc3331c.js";import{u as D,D as P,N as v}from"./NotFoundDrinks-fefe33fd.js";import{P as E}from"./PageTitle-12d0e027.js";import{u as y,P as C}from"./Paginator-f10ae825.js";import{c as M}from"./drinks.selectors-e602d6d9.js";import"./coctailPlaceholder-82987b74.js";import"./blueIced@2xMob-abf058dd.js";const N=x.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`;function L(){const r=l(),i=f(),[e,m]=a.useState(1),{total:u,ownDrinks:t}=D(),[g,d]=a.useState(!1),o=h(M),{isDesktop:c}=y(),p=n=>{m(n)};return a.useEffect(()=>{(t==null?void 0:t.length)===0&&e>1&&p(e-1),d((t==null?void 0:t.length)>0)},[e,t]),a.useEffect(()=>{r(`?page=${e}`)},[e,r]),a.useEffect(()=>{i(j({page:o,size:6})).unwrap().catch(n=>console.log(n))},[i,o,c,u]),s.jsx(k,{children:s.jsxs(N,{children:[s.jsx(E,{title:"My drinks"}),g>0?s.jsxs(s.Fragment,{children:[s.jsx(P,{drinksData:t,onPageChange:p,currentPage:e}),s.jsx(C,{})]}):s.jsx(v,{text:"You haven't added any cocktails"})]})})}export{L as default};
