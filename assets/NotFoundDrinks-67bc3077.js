import{u as i,a as t,b as o,j as n}from"./index-9a9f05a7.js";import{n as a,b as r,N as s,a as p}from"./blueIced@2xMob-abf058dd.js";const m=i.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  margin-top: 67px;
`,x=i.p`
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
`,c=i.div`
  width: 198px;
  height: 247px;
  background-image: url(${a});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${r});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${s});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${p});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${t});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${o});
  }
`,u=({text:e,forwardRef:d})=>n.jsxs(m,{children:[n.jsx(c,{}),n.jsx(x,{ref:d,children:e})]}),g=u;export{g as N};
