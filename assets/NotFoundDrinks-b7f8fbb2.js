import{c as i,u as e,j as n,L as u,d as w,ax as k,av as b,aA as v,au as f,a as D,b as j}from"./index-f212da8e.js";import{s as C,a as F,d as y,f as N,b as z,g as $,e as I,h as L,i as M,c as _}from"./drinks.selectors-f4e4ee20.js";import{d as l}from"./coctailPlaceholder-82987b74.js";import{n as B,b as V,N as P,a as S}from"./blueIced@2xMob-abf058dd.js";const rn=()=>{const t=i(C),r=i(F),o=i(y),d=i(N),s=i(z),p=i($),c=i(I),x=i(L),a=i(M);return{mainPageDrinks:t,isLoading:r,drinks:o,drinkById:d,error:s,total:p,favoriteDrinks:c,popularDrinks:x,ownDrinks:a}},T=e.ul`
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
`,A=e.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,E=e.img`
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
`,H=e.h2`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,O=e.p`
  margin-bottom: 18px;
  color: var(--white-fifty-color);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`,R=e.p`
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
`,m=e.button`
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
`,q=e.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--white-color);
  ${m}:hover & {
    stroke: var(--dark-blue-color);
  }
`,G=e.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,J=e.button`
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
`,K=({navLink:t})=>n.jsx(u,{to:t,children:n.jsx(J,{type:"button",children:"See more"})}),Q=({drinkData:t,favorite:r})=>{const o=w(),d=i(_),{drink:s,drinkThumb:p,alcoholic:c,description:x,_id:a}=t,h=()=>{r?o(k(a)).then(()=>{o(b({page:d}))}):o(v(a)).then(()=>{o(f())})};return n.jsxs(A,{children:[n.jsx(E,{src:p||l,alt:s,onError:g=>{g.target.src=l}}),n.jsx(H,{children:s}),n.jsx(O,{children:c}),n.jsx(R,{children:x}),n.jsxs(G,{children:[n.jsx(K,{navLink:`/drinks/${a}`}),n.jsx(m,{type:"button",onClick:h,children:n.jsx(q,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"})})})]})]})},U=({drinksData:t,favorite:r})=>n.jsx(n.Fragment,{children:n.jsx(T,{children:t.map(o=>n.jsx(Q,{drinkData:o,favorite:r},o._id))})}),an=U,W=e.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  margin-top: 67px;
`,X=e.p`
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
`,Y=e.div`
  width: 198px;
  height: 247px;
  background-image: url(${B});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${V});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${P});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${S});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${D});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${j});
  }
`,Z=({text:t,forwardRef:r})=>n.jsxs(W,{children:[n.jsx(Y,{}),n.jsx(X,{ref:r,children:t})]}),sn=Z;export{an as D,sn as N,rn as u};
