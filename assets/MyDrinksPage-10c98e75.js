import{c as o,u as r,j as t,m as w,d as u,a7 as f,a8 as v,h as b,r as l,a9 as D,C as j}from"./index-b9586bef.js";import{s as C,a as y,c as M,d as P,b as z,e as I,f as B,g as E,h as L}from"./drinks.selectors-feb66c44.js";import{P as S}from"./PageTitle-8c16f7e6.js";import{d as g}from"./coctailPlaceholder-82987b74.js";import{N as V}from"./NotFoundDrinks-055ac622.js";import"./blueIced@2xMob-abf058dd.js";const F=()=>{const i=o(C),s=o(y),e=o(M),c=o(P),p=o(z),n=o(I),x=o(B),a=o(E),d=o(L);return{mainPageDrinks:i,isLoading:s,drinks:e,drinkById:c,error:p,total:n,favoriteDrinks:x,popularDrinks:a,ownDrinks:d}},H=r.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`,N=r.ul`
  display: grid;
  grid-template-columns: 335px;
  gap: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 342px 342px;
    gap: 80px 20px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 400px 400px 400px;
    margin-top: 62px;
  }
`,T=r.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,$=r.img`
  width: 100%;
  height: auto;
  margin-bottom: 18px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,O=r.h2`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,R=r.p`
  margin-bottom: 18px;
  color: var(--white-fifty-color);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`,_=r.p`
  margin-bottom: 18px;
  font-size: 14px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`,k=r.button`
  border-radius: 40px;
  border: none;
  background-color: var(--dark-blue-color);
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--white-color);
  }
  @media screen and (min-width: 768px) {
    height: 56px;
    width: 56px;
  }
`,A=r.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--white-color);
  ${k}:hover & {
    stroke: var(--dark-blue-color);
  }
`,W=r.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Y=r.button`
  border: none;
  min-width: 143px;
  border-radius: 42px;
  padding: 14px 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: var(--dark-blue-color);
  color: var(--white-color);
  &:hover {
    background-color: var(--white-color);
    color: var(--dark-blue-color);
  }
  @media screen and (min-width: 768px) {
    min-width: 160px;
    font-size: 16px;
    line-height: 18px;
    padding: 18px 44px;
  }
`,q=({navLink:i})=>t.jsx(w,{to:i,children:t.jsx(Y,{type:"button",children:"See more"})}),G=({drinkData:i,favorite:s})=>{const e=u(),{drink:c,drinkThumb:p,alcoholic:n,description:x,_id:a}=i,d=()=>{e(s?f(a):v(a))};return t.jsxs(T,{children:[t.jsx($,{src:p||g,alt:c,onError:m=>{m.target.src=g}}),t.jsx(O,{children:c}),t.jsx(R,{children:n}),t.jsx(_,{children:x}),t.jsxs(W,{children:[t.jsx(q,{navLink:`/drinks/${a}`}),t.jsx(k,{type:"button",onClick:d,children:t.jsx(A,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"})})})]})]})},J=({drinksData:i,favorite:s})=>t.jsx(t.Fragment,{children:t.jsx(N,{children:i.map(e=>t.jsx(G,{drinkData:e,favorite:s},e._id))})}),K=J;function nt(){const i=b(),s=u(),[e,c]=l.useState(1),{total:p,ownDrinks:n}=F(),[x,a]=l.useState(!1),d=6,m=h=>{c(h)};return l.useEffect(()=>{(n==null?void 0:n.length)===0&&e>1&&m(e-1),a((n==null?void 0:n.length)>0)},[e,n]),l.useEffect(()=>{i(`?page=${e}`)},[e,i]),l.useEffect(()=>{s(D({page:e,limit:d})).unwrap().catch(h=>console.log(h))},[s,e,p,d,n]),t.jsx(j,{children:t.jsxs(H,{children:[t.jsx(S,{title:"My drinks"}),x>0?t.jsx(K,{drinksData:n,onPageChange:m,currentPage:e}):t.jsx(V,{text:"You haven't added any cocktails"})]})})}export{nt as default};
