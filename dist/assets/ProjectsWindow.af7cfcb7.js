import{r as t,_ as r,u as d,b as a,j as c,W as p,l as u,w as y,x as h,y as m,L as w}from"./index.0644e4a1.js";import{c as b,w as n,C as _}from"./Window.module.5caec077.js";const P="_tabBody_1hj7c_1",j={tabBody:P},v={DailySpacePalette:t.exports.lazy(()=>r(()=>import("./DailySpacePalette.b016c4ba.js"),["assets/DailySpacePalette.b016c4ba.js","assets/index.0644e4a1.js","assets/index.f02d9f19.css","assets/github.019fd841.js","assets/Window.module.5caec077.js","assets/Window.f59d6328.css","assets/DailySpacePalette.097d0c9f.css"]).then(e=>({default:e.DailySpacePalette})))},l=["Daily Space Palette","Civciv"];function T(){const{t:e}=d(["content","menu"]),[o,i]=t.exports.useState(l[0]);return a(b.exports,{bounds:"main",handle:".sc-cabOPr",children:c(p,{as:"section",className:n.window,children:[c(u,{className:n.header,children:[a("span",{className:"window-title",children:e("menu:window.projects")}),a(_,{})]}),a(y,{value:o,onChange:i,children:l.map(s=>a(h,{value:s,children:s},s))}),a(m,{as:"article",className:j.tabBody,children:a(t.exports.Suspense,{fallback:a(w,{}),children:o==="Daily Space Palette"&&a(v.DailySpacePalette,{})})})]})})}export{T as ProjectsWindow};