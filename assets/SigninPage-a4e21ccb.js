import{d as c,r as m,c as x,aa as p,j as e,ab as h,U as j,C as w}from"./index-5daad91e.js";import{u as g,C as a,T as f,F as S,d as b,O as v,I,e as F,f as k,c as C,U as P,h as y,R as T}from"./RedirectLink-4d8bf3ab.js";import{c as D,W as E}from"./Styled-74b799a3.js";const N=()=>{const n=c(),[t,l]=m.useState(!1),s=x(p),{handleSubmit:i,control:o}=g(),d=()=>l(r=>!r),u=r=>{r.preventDefault()};return e.jsxs("form",{onSubmit:i(r=>{n(h(r))}),children:[e.jsxs(D,{children:[e.jsx(a,{control:o,name:"email",defaultValue:"",render:({field:r})=>e.jsx(f,{label:"Email",variant:"outlined",className:"textInput",error:s!==null,helperText:s,required:!0,...r})}),e.jsx(a,{control:o,name:"password",defaultValue:"",render:({field:r})=>e.jsxs(S,{variant:"outlined",required:!0,fullWidth:!0,className:"textInput",error:s!==null,children:[e.jsx(b,{htmlFor:"outlined-adornment-password",children:"Password"}),e.jsx(v,{className:"textInput",id:"outlined-adornment-password",type:t?"text":"password",...r,endAdornment:e.jsx(I,{position:"end",children:e.jsx(j,{className:"iconInput","aria-label":"toggle password visibility",onClick:d,onMouseDown:u,edge:"end",children:t?e.jsx(F,{}):e.jsx(k,{})})}),label:"Password"}),s!==null&&e.jsx(C,{children:s})]})})]}),e.jsx(P,{margin:"14px",type:"summit",title:"Sign In",width:"400px",color:"var(--dark-blue-color)",backgroundcolor:"var(--white-color)",borderhover:"var(--white-fifty-color)",backgroundcolorhover:"transparent",colorhover:"var(--white-color)"})]})},W=()=>e.jsx(E,{children:e.jsxs(w,{children:[e.jsx(y,{margin:"28px",title:"Sign In"}),e.jsx(N,{}),e.jsx(T,{link:"/signup",title:"Sign Up"})]})});export{W as default};
