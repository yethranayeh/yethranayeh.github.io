import{r,j as t,b as e,F as s,B as o,c,d,s as l,e as m,f as h,S as u}from"./index.f957f0a0.js";const g=i=>r.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...i},r.exports.createElement("path",{d:"M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z",fill:"currentColor"})),p="576",f="768",v="992",_="1200",x="_container_3fmg9_8",b="_input_3fmg9_26",w="_header_3fmg9_30",L="_branding_3fmg9_35",S="_users_3fmg9_39",B="_footer_3fmg9_43",n={mediaSm:p,mediaMd:f,mediaLg:v,mediaXl:_,container:x,input:b,header:w,branding:L,users:S,footer:B};function N(){const{setIsLoggedIn:i}=r.exports.useContext(c);return t(s,{gap:20,children:[e(d,{}),t(s,{direction:"column",gap:8,children:[e("p",{children:"Alper Akta\u015F"}),e("form",{onSubmit:a=>{a.preventDefault(),i(!0),l("false")},children:t(s,{gap:4,children:[e(m,{required:!0,fullWidth:!0,minLength:6,className:n.input,placeholder:"Password"}),e(h,{type:"submit",children:e(u,{Icon:g})})]})})]})]})}function A(){return t("main",{className:n.container,children:[e("header",{className:n.header}),e("section",{className:n.branding,children:t(s,{direction:"column",children:[e(o,{}),e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem neque totam minus distinctio nesciunt."})]})}),e("section",{className:n.users,children:e("ul",{children:e("li",{children:e(N,{})})})}),e("footer",{className:n.footer})]})}export{A as LoginPage};