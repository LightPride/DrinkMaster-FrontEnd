import{c as t,u as i,j as n,L as g,d as u,ax as w,aA as k,a as b,b as v}from"./index-af192fc5.js";import{s as f,a as D,d as j,f as C,b as F,g as y,e as N,h as z,i as $}from"./drinks.selectors-3f1e9f26.js";import{d as l}from"./coctailPlaceholder-82987b74.js";import{n as I,b as L,N as M,a as _}from"./blueIced@2xMob-abf058dd.js";const nn=()=>{const e=t(f),o=t(D),r=t(j),s=t(C),d=t(F),p=t(y),c=t(N),a=t(z),x=t($);return{mainPageDrinks:e,isLoading:o,drinks:r,drinkById:s,error:d,total:p,favoriteDrinks:c,popularDrinks:a,ownDrinks:x}},B=i.ul`
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
`,V=i.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,P=i.img`
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
`,S=i.h2`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,T=i.p`
  margin-bottom: 18px;
  color: var(--white-fifty-color);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`,E=i.p`
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
`,m=i.button`
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
`,H=i.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--white-color);
  ${m}:hover & {
    stroke: var(--dark-blue-color);
  }
`,A=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,O=i.button`
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
`,R=({navLink:e})=>n.jsx(g,{to:e,children:n.jsx(O,{type:"button",children:"See more"})}),q=({drinkData:e,favorite:o})=>{const r=u(),{drink:s,drinkThumb:d,alcoholic:p,description:c,_id:a}=e,x=()=>{r(o?w(a):k(a))};return n.jsxs(V,{children:[n.jsx(P,{src:d||l,alt:s,onError:h=>{h.target.src=l}}),n.jsx(S,{children:s}),n.jsx(T,{children:p}),n.jsx(E,{children:c}),n.jsxs(A,{children:[n.jsx(R,{navLink:`/drinks/${a}`}),n.jsx(m,{type:"button",onClick:x,children:n.jsx(H,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"})})})]})]})},G=({drinksData:e,favorite:o})=>n.jsx(n.Fragment,{children:n.jsx(B,{children:e.map(r=>n.jsx(q,{drinkData:r,favorite:o},r._id))})}),en=G,J=i.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  margin-top: 67px;
`,K=i.p`
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
`,Q=i.div`
  width: 198px;
  height: 247px;
  background-image: url(${I});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${L});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${M});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${_});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${b});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${v});
  }
`,U=({text:e,forwardRef:o})=>n.jsxs(J,{children:[n.jsx(Q,{}),n.jsx(K,{ref:o,children:e})]}),tn=U;export{en as D,tn as N,nn as u};
