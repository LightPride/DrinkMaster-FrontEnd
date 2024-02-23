import{u as i,a as d,b as a,j as n,C as o}from"./index-fac66bcf.js";import{P as r}from"./PageTitle-a1d33340.js";import{n as s,b as p,N as m,a as x}from"./blueIced@2xMob-abf058dd.js";const c=i.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 158px;
  }
`,u=i.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
`,l=i.p`
  color: var(--white-color);
  text-align: center;
  font-family: 'Manrope';
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
`,h=i.div`
  width: 198px;
  height: 247px;
  background-image: url(${s});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${p});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${m});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${x});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${d});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${a});
  }
`,g=({text:e,forwardRef:t})=>n.jsxs(u,{children:[n.jsx(h,{}),n.jsx(l,{ref:t,children:e})]}),w=g;function F(){return n.jsx(o,{children:n.jsxs(c,{children:[n.jsx(r,{title:"My drinks"}),n.jsx(w,{text:"You haven't added any cocktails"})]})})}export{F as default};
