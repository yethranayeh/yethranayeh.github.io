import{r as i,b as A,C as h,j as r,F as p,k as f,I as E,u as g,l as C,D as w,v as _,p as u,O as v,_ as D,E as L,L as x}from"./index.d42229b9.js";import{D as P}from"./DraggableWindow.bef283bd.js";import"./Window.module.99eb4cf8.js";const b="data:image/x-icon;base64,AAABAAIAICAQAAEABADoAgAAJgAAABAQEAABAAQAKAEAAA4DAAAoAAAAIAAAAEAAAAABAAQAAAAAAIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvwAAvwAAAL+/AL8AAAC/AL8Av78AAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIgId3d3d3d3d3d3d3d3d3d4CHj/////////////////eAh4/////////////////3gIeP////////////////94CHj/////////////////eAh4/////////////////3gIeP////////////////94CHj/////////////////eAh4/////////////////3gIeP////////////////94CHj/////////////////eAh4/////////////////3gIeP////////////////94CHj/////////////////eAh4/////////////////3gIeP////////////////94CHj/////////////////eAh4/////////////////3gIeP////////////////94CHiIiIiIiIiIiIiIiIiIeAh3d3d3d3d3d3d3d3d3d3gIdERERERERERERAAAAAAICHRERERERERERER3B3B3CAh0REREREREREREdwdwdwgIdERERERERERERERERERICHd3d3d3d3d3d3d3d3d3eAiIiIiIiIiIiIiIiIiIiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8oAAAAEAAAACAAAAABAAQAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvwAAvwAAAL+/AL8AAAC/AL8Av78AAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAAAAAAAAACIiIiIiIiIgIf///////+Ah////////4CH////////gIf///////+Ah////////4CH////////gIf///////+Ah4iIiIiIiICHRERE8PDwgIdERERERESAh3d3d3d3d4CIiIiIiIiIiAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAA==",k="576",H="768",$="992",M="1200",j="_container_1kbvl_15",y="_focused_1kbvl_24",B="_name_1kbvl_28",m={mediaSm:k,mediaMd:H,mediaLg:$,mediaXl:M,container:j,focused:y,name:B};function F({name:a,onDoubleClick:s,iconSrc:n}){const[t,d]=i.exports.useState(!1);return A(h,{onClickAway:()=>d(!1),children:r(p,{direction:"column",align:"center",gap:4,className:f(m.container,t&&m.focused),onClick:e=>{d(!0),e.detail===2&&s()},children:[A(E,{src:n!=null?n:b,size:32}),A("span",{className:m.name,children:`${a}.exe`})]})})}const S="576",Q="768",X="992",N="1200",O="_frame_tgc60_15",T={mediaSm:S,mediaMd:Q,mediaLg:X,mediaXl:N,frame:O};function W(){const{t:a}=g("content"),s=C("sm"),n=i.exports.useRef(null),t=w().pathname.replace("/",""),d=_();return A(u,{variant:"field",className:T.frame,children:r(p,{as:"header",align:"center",gap:8,children:[A(E,{src:v,size:20}),r("div",{children:[A("span",{children:(s?a("base-url"):"\\..\\alperaktas")+"\\"}),A("span",{contentEditable:!0,suppressContentEditableWarning:!0,ref:n,onKeyDown:e=>{var o,c;if(e.key==="Enter"){e.preventDefault();const R=`/${(c=(o=n.current)==null?void 0:o.innerText)!=null?c:""}`;d(R)}},children:t})]})]})})}const z="576",V="768",J="992",K="1200",U="_frame_1y0s6_8",q={mediaSm:z,mediaMd:V,mediaLg:J,mediaXl:K,frame:U},l={VigenereCipher:{name:"vigen\xE8re cipher",Element:i.exports.lazy(()=>D(()=>import("./VigenereCipher.603c7a02.js"),["assets/VigenereCipher.603c7a02.js","assets/index.d42229b9.js","assets/index.b9d9d34d.css","assets/DraggableWindow.bef283bd.js","assets/Window.module.99eb4cf8.js","assets/Window.53496d57.css","assets/VigenereCipher.ba646132.css"]).then(a=>({default:a.VigenereCipher})))}},I=Object.keys(l);function AA(){const{t:a}=g(["menu","content"]),[s,n]=i.exports.useState(-1),t=i.exports.useCallback(()=>n(-1),[]),d=i.exports.useMemo(()=>({onClick:t,onTouchEnd:t}),[]);return r(L,{children:[r(P,{title:a("window.apps"),HeaderProps:{active:s===-1},children:[A(W,{}),A(u,{as:"section",variant:"field",className:q.frame,children:I.map((e,o)=>A(F,{name:l[e].name,onDoubleClick:()=>n(o)},l[e].name))})]}),A(i.exports.Suspense,{fallback:A(x,{}),children:I.map((e,o)=>{if(o===s){const c=l[e].Element;return A(c,{handleCloseProps:d},e)}return null})})]})}export{AA as AppsWindow};
