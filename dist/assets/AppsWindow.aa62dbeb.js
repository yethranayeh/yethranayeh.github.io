import{r as s,D as T,b as n,j as I,F as P,k as B,I as H,u as M,l as F,E as S,w as N,q as $,O as W,_ as O,c as Q,W as X,n as z,L as V}from"./index.a109052d.js";import{c as U,w as D,W as q,C as J}from"./Window.module.09f93bb1.js";const K="576",G="768",Y="992",Z="1200",AA="_frame_1y0s6_8",eA={mediaSm:K,mediaMd:G,mediaLg:Y,mediaXl:Z,frame:AA};function w(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}var C={click:"onClick",focusin:"onFocus",focusout:"onFocus",mousedown:"onMouseDown",mouseup:"onMouseUp",touchstart:"onTouchStart",touchend:"onTouchEnd"},j=function(A){var t,e=A.children,r=A.onClickAway,c=A.focusEvent,i=c===void 0?"focusin":c,d=A.mouseEvent,u=d===void 0?"click":d,E=A.touchEvent,f=E===void 0?"touchend":E,p=s.exports.useRef(null),x=s.exports.useRef(null),v=s.exports.useRef(!1);s.exports.useEffect(function(){return setTimeout(function(){v.current=!0},0),function(){v.current=!1}},[]);var R=function(l){return function(o){x.current=o.target;var a=e==null?void 0:e.props[l];a&&a(o)}};s.exports.useEffect(function(){var l,o,a=(l=(o=p.current)===null||o===void 0?void 0:o.ownerDocument)!==null&&l!==void 0?l:document,m=function(h){v.current&&(p.current&&p.current.contains(h.target)||x.current===h.target||!a.contains(h.target)||r(h))};return a.addEventListener(u,m),a.addEventListener(f,m),a.addEventListener(i,m),function(){a.removeEventListener(u,m),a.removeEventListener(f,m),a.removeEventListener(i,m)}},[i,u,r,f]);var _=C[u],b=C[f],k=C[i];return T.Children.only(s.exports.cloneElement(e,(w(t={ref:function(l){p.current=l;var o=e.ref;typeof o=="function"?o(l):o&&(o.current=l)}},k,R(k)),w(t,_,R(_)),w(t,b,R(b)),t)))};j.displayName="ClickAwayListener";const nA="data:image/x-icon;base64,AAABAAIAICAQAAEABADoAgAAJgAAABAQEAABAAQAKAEAAA4DAAAoAAAAIAAAAEAAAAABAAQAAAAAAIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvwAAvwAAAL+/AL8AAAC/AL8Av78AAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIgId3d3d3d3d3d3d3d3d3d4CHj/////////////////eAh4/////////////////3gIeP////////////////94CHj/////////////////eAh4/////////////////3gIeP////////////////94CHj/////////////////eAh4/////////////////3gIeP////////////////94CHj/////////////////eAh4/////////////////3gIeP////////////////94CHj/////////////////eAh4/////////////////3gIeP////////////////94CHj/////////////////eAh4/////////////////3gIeP////////////////94CHiIiIiIiIiIiIiIiIiIeAh3d3d3d3d3d3d3d3d3d3gIdERERERERERERAAAAAAICHRERERERERERER3B3B3CAh0REREREREREREdwdwdwgIdERERERERERERERERERICHd3d3d3d3d3d3d3d3d3eAiIiIiIiIiIiIiIiIiIiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8oAAAAEAAAACAAAAABAAQAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvwAAvwAAAL+/AL8AAAC/AL8Av78AAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAAAAAAAAACIiIiIiIiIgIf///////+Ah////////4CH////////gIf///////+Ah////////4CH////////gIf///////+Ah4iIiIiIiICHRERE8PDwgIdERERERESAh3d3d3d3d4CIiIiIiIiIiAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAA==",tA="576",iA="768",sA="992",oA="1200",aA="_container_1kbvl_15",rA="_focused_1kbvl_24",cA="_name_1kbvl_28",L={mediaSm:tA,mediaMd:iA,mediaLg:sA,mediaXl:oA,container:aA,focused:rA,name:cA};function dA({name:A,onDoubleClick:t,iconSrc:e}){const[r,c]=s.exports.useState(!1);return n(j,{onClickAway:()=>c(!1),children:I(P,{direction:"column",align:"center",gap:4,className:B(L.container,r&&L.focused),onClick:i=>{c(!0),i.detail===2&&t()},children:[n(H,{src:e!=null?e:nA,size:32}),n("span",{className:L.name,children:`${A}.exe`})]})})}const uA="576",lA="768",mA="992",IA="1200",EA="_frame_tgc60_15",fA={mediaSm:uA,mediaMd:lA,mediaLg:mA,mediaXl:IA,frame:EA};function pA(){const{t:A}=M("content"),t=F("sm"),e=s.exports.useRef(null),r=S().pathname.replace("/",""),c=N();return n($,{variant:"field",className:fA.frame,children:I(P,{as:"header",align:"center",gap:8,children:[n(H,{src:W,size:20}),I("div",{children:[n("span",{children:(t?A("base-url"):"\\..\\alperaktas")+"\\"}),n("span",{contentEditable:!0,suppressContentEditableWarning:!0,ref:e,onKeyDown:i=>{var d,u;if(i.key==="Enter"){i.preventDefault();const E=`/${(u=(d=e.current)==null?void 0:d.innerText)!=null?u:""}`;c(E)}},children:r})]})]})})}const g={VigenereCipher:{name:"vigen\xE8re cipher",Element:s.exports.lazy(()=>O(()=>import("./VigenereCipher.ed3edd84.js"),["assets/VigenereCipher.ed3edd84.js","assets/index.a109052d.js","assets/index.b0e63b90.css","assets/Window.module.09f93bb1.js","assets/Window.f59d6328.css","assets/VigenereCipher.ba646132.css"]).then(A=>({default:A.VigenereCipher})))}},y=Object.keys(g);function vA(){const{t:A}=M(["menu","content"]),[t,e]=s.exports.useState(-1),r=s.exports.useCallback(()=>e(-1),[]),c=s.exports.useMemo(()=>({onClick:r,onTouchEnd:r}),[]);return I(Q,{children:[n(U.exports,{bounds:"main",handle:".sc-cabOPr",children:I(X,{className:D.window,children:[I(z,{active:t===-1,className:D.header,children:[n(q,{children:A("window.apps")}),n(J,{})]}),n(pA,{}),n($,{as:"section",variant:"field",className:eA.frame,children:y.map((i,d)=>n(dA,{name:g[i].name,onDoubleClick:()=>e(d)},g[i].name))})]})}),n(s.exports.Suspense,{fallback:n(V,{}),children:y.map((i,d)=>{if(d===t){const u=g[i].Element;return n(u,{handleCloseProps:c},i)}return null})})]})}export{vA as AppsWindow};
