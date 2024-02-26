import{u as d,i as x,d as l,r as s,av as f,j as e,C as h}from"./index-5daad91e.js";import{u as j,D as P,N as v}from"./NotFoundDrinks-200d77b2.js";import{P as k}from"./PageTitle-dc835bfc.js";import{a as D}from"./Paginator-c123a4e6.js";import"./drinks.selectors-cd947628.js";import"./coctailPlaceholder-82987b74.js";import"./blueIced@2xMob-abf058dd.js";const F=d.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`;function A(){const n=x(),i=l(),{total:c,favoriteDrinks:t}=j(),[a,m]=s.useState(1),[g,u]=s.useState(!1),o=6,p=r=>{m(r)};return s.useEffect(()=>{(t==null?void 0:t.length)===0&&a>1&&p(a-1),u((t==null?void 0:t.length)>0)},[a,t]),s.useEffect(()=>{n(`?page=${a}`)},[a,n]),s.useEffect(()=>{i(f({page:a,limit:o})).unwrap().catch(r=>console.log(r))},[i,a,c,o]),e.jsx(h,{children:e.jsxs(F,{children:[e.jsx(k,{title:"Favorites"}),g>0?e.jsxs(e.Fragment,{children:[e.jsx(P,{favorite:!0,drinksData:t,onPageChange:p,currentPage:a}),e.jsx(D,{})]}):e.jsx(v,{text:"You haven't added any favorite cocktails yet"})]})})}export{A as default};
