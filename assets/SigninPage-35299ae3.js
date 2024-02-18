import{r as h,j as e,l as x}from"./index-223e7dd1.js";import{c as w,a as l,u as g,b as j,S,C as i,T as f,F as v,I as b,O as I,d as k,e as P,f as y,g as C,U as F,o as A,h as T,j as q,R as z}from"./RedirectLink-89f1a9fa.js";import"./assertThisInitialized-01fd3b79.js";const Z=w({email:l().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,"Please, check your email address!").required(),password:l().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit!").required()}),$=()=>{const d=g(),[t,c]=h.useState(!1),{handleSubmit:u,control:n,formState:{errors:o}}=j({resolver:A(Z)}),m=()=>c(s=>!s),p=s=>{s.preventDefault()};return e.jsx(S,{children:e.jsxs("form",{className:"inputContainer",rules:{required:"Please check your name!"},onSubmit:u(s=>{console.log(s),d(x(s))}),children:[e.jsx(i,{control:n,name:"email",defaultValue:"",render:({field:s})=>{var r,a;return e.jsx(f,{label:"Email",variant:"outlined",className:"textInput",error:!!((r=o.email)!=null&&r.message),helperText:(a=o.email)==null?void 0:a.message,required:!0,...s})}}),e.jsx(i,{control:n,name:"password",defaultValue:"",render:({field:s})=>{var r,a;return e.jsxs(v,{variant:"outlined",required:!0,className:"textInput",children:[e.jsx(b,{htmlFor:"outlined-adornment-password",children:"Password"}),e.jsx(I,{id:"outlined-adornment-password",type:t?"text":"password",endAdornment:e.jsx(k,{position:"end",children:e.jsx(P,{className:"iconInput","aria-label":"toggle password visibility",onClick:m,onMouseDown:p,edge:"end",children:t?e.jsx(y,{}):e.jsx(C,{})})}),label:"Password",error:!!((r=o.password)!=null&&r.message),helperText:(a=o.password)==null?void 0:a.message,...s})]})}}),e.jsx(F,{margin:"14px",type:"summit",title:"Sign In",width:"400px",color:"var(--dark-blue-color)",backgroundColor:"var(--white-color)",borderHover:"var(--white-fifty-color)",backgroundColorHover:"transparent",colorHover:"var(--white-color)"})]})})},H=()=>e.jsxs(T,{children:[e.jsx(q,{title:"Sign In"}),e.jsx($,{}),e.jsx(z,{link:"/signup",title:"Sign Up"})]});export{H as default};
