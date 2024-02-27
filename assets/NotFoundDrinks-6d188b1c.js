import{c as i,u as e,j as n,L as f,d as v,ay as D,aw as j,aB as C,av as F,a as y,b as N}from"./index-2e22b4c4.js";import{s as z,a as L,d as $,f as I,b as B,g as M,e as g,h as _,i as u,c as P}from"./drinks.selectors-37898cfb.js";import{d as m}from"./coctailPlaceholder-82987b74.js";import{n as V,b as S,N as T,a as E}from"./blueIced@2xMob-abf058dd.js";const sn=()=>{const t=i(z),r=i(L),o=i($),d=i(I),c=i(B),x=i(M),l=i(g),a=i(_),h=i(u);return{mainPageDrinks:t,isLoading:r,drinks:o,drinkById:d,error:c,total:x,favoriteDrinks:l,popularDrinks:a,ownDrinks:h}},H=e.ul`
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
`,O=e.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,A=e.img`
  width: 335px;
  height: 360px;
  margin-bottom: 18px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    width: 342px;
    height: 360px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
    width: 400px;
    height: 400px;
  }
`,R=e.h2`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,q=e.p`
  margin-bottom: 18px;
  color: var(--white-fifty-color);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`,G=e.p`
  width: 100%;
  height: 75px;
  margin-bottom: 18px;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    height: 110px;
    -webkit-line-clamp: 5;
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (min-width: 1440px) {
    height: 92px;
    -webkit-line-clamp: 4;
  }
`,w=e.button`
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
`,J=e.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--white-color);
  ${w}:hover & {
    stroke: var(--dark-blue-color);
  }
`,K=e.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Q=e.button`
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
`,U=({navLink:t})=>n.jsx(f,{to:t,children:n.jsx(Q,{type:"button",children:"See more"})}),W=({drinkData:t,favorite:r})=>{const o=v(),{drink:d,drinkThumb:c,alcoholic:x,description:l,_id:a}=t,h=i(g),k=i(u),p=i(P),b=()=>{r?o(D(a)).then(()=>{if(h.length-1===0&&p>1){const s=p-1;o(j({page:s}))}}):o(C(a)).then(()=>{if(k.length-1===0&&p>1){const s=p-1;o(F({page:s}))}})};return n.jsxs(O,{children:[n.jsx(A,{src:c||m,alt:d,onError:s=>{s.target.src=m}}),n.jsx(R,{children:d}),n.jsx(q,{children:x}),n.jsx(G,{children:l}),n.jsxs(K,{children:[n.jsx(U,{navLink:`/drinks/${a}`}),n.jsx(w,{type:"button",onClick:b,children:n.jsx(J,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"})})})]})]})},X=({drinksData:t,favorite:r})=>n.jsx(n.Fragment,{children:n.jsx(H,{children:t.map(o=>n.jsx(W,{drinkData:o,favorite:r},o._id))})}),dn=X,Y=e.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  margin-top: 67px;
`,Z=e.p`
  color: var(--white-color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 137.5% */
  width: 205px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 236px;
    line-height: 22px;
  }
`,nn=e.div`
  width: 198px;
  height: 247px;
  background-image: url(${V});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${S});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${T});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${E});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${y});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${N});
  }
`,en=({text:t,forwardRef:r})=>n.jsxs(Y,{children:[n.jsx(nn,{}),n.jsx(Z,{ref:r,children:t})]}),pn=en;export{dn as D,pn as N,sn as u};
