import{r as t,_ as r,u as d,b as a,j as c,W as p,l as u,w as y,x as h,y as m,z as w}from"./index.51e7be8e.js";import{c as b,w as n,C as _}from"./Window.module.99330da4.js";const P="_tabBody_1hj7c_1",j={tabBody:P},v={DailySpacePalette:t.exports.lazy(()=>r(()=>import("./DailySpacePalette.e2ddfb8a.js"),["assets/DailySpacePalette.e2ddfb8a.js","assets/index.51e7be8e.js","assets/index.f927d65c.css","assets/github.5e714f70.js","assets/Window.module.99330da4.js","assets/Window.f59d6328.css","assets/DailySpacePalette.097d0c9f.css"]).then(e=>({default:e.DailySpacePalette})))},l=["Daily Space Palette","Civciv"];function T(){const{t:e}=d(["content","menu"]),[o,i]=t.exports.useState(l[0]);return a(b.exports,{bounds:"main",handle:".sc-cabOPr",children:c(p,{as:"section",className:n.window,children:[c(u,{className:n.header,children:[a("span",{className:"window-title",children:e("menu:window.projects")}),a(_,{})]}),a(y,{value:o,onChange:i,children:l.map(s=>a(h,{value:s,children:s},s))}),a(m,{as:"article",className:j.tabBody,children:a(t.exports.Suspense,{fallback:a(w,{}),children:o==="Daily Space Palette"&&a(v.DailySpacePalette,{})})})]})})}export{T as ProjectsWindow};
