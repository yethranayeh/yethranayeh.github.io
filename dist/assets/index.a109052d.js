function am(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var VS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function WS(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var y={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),sm=Symbol.for("react.portal"),um=Symbol.for("react.fragment"),cm=Symbol.for("react.strict_mode"),dm=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),gm=Symbol.for("react.suspense"),mm=Symbol.for("react.memo"),vm=Symbol.for("react.lazy"),mc=Symbol.iterator;function ym(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var Rf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pf=Object.assign,Tf={};function Br(e,t,n){this.props=e,this.context=t,this.refs=Tf,this.updater=n||Rf}Br.prototype.isReactComponent={};Br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function If(){}If.prototype=Br.prototype;function Zs(e,t,n){this.props=e,this.context=t,this.refs=Tf,this.updater=n||Rf}var Js=Zs.prototype=new If;Js.constructor=Zs;Pf(Js,Br.prototype);Js.isPureReactComponent=!0;var vc=Array.isArray,Nf=Object.prototype.hasOwnProperty,qs={current:null},Df={key:!0,ref:!0,__self:!0,__source:!0};function Of(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Nf.call(t,r)&&!Df.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ho,type:e,key:i,ref:a,props:o,_owner:qs.current}}function xm(e,t){return{$$typeof:Ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ho}function wm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yc=/\/+/g;function qa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wm(""+e.key):t.toString(36)}function Si(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ho:case sm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+qa(a,0):r,vc(o)?(n="",e!=null&&(n=e.replace(yc,"$&/")+"/"),Si(o,t,n,"",function(u){return u})):o!=null&&(eu(o)&&(o=xm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(yc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",vc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+qa(i,l);a+=Si(i,t,n,s,o)}else if(s=ym(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+qa(i,l++),a+=Si(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Zo(e,t,n){if(e==null)return e;var r=[],o=0;return Si(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Am(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},bi={transition:null},km={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:bi,ReactCurrentOwner:qs};he.Children={map:Zo,forEach:function(e,t,n){Zo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zo(e,function(){t++}),t},toArray:function(e){return Zo(e,function(t){return t})||[]},only:function(e){if(!eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=Br;he.Fragment=um;he.Profiler=dm;he.PureComponent=Zs;he.StrictMode=cm;he.Suspense=gm;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=qs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Nf.call(t,s)&&!Df.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ho,type:e.type,key:o,ref:i,props:r,_owner:a}};he.createContext=function(e){return e={$$typeof:pm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fm,_context:e},e.Consumer=e};he.createElement=Of;he.createFactory=function(e){var t=Of.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:hm,render:e}};he.isValidElement=eu;he.lazy=function(e){return{$$typeof:vm,_payload:{_status:-1,_result:e},_init:Am}};he.memo=function(e,t){return{$$typeof:mm,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=bi.transition;bi.transition={};try{e()}finally{bi.transition=t}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(e,t){return nt.current.useCallback(e,t)};he.useContext=function(e){return nt.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};he.useEffect=function(e,t){return nt.current.useEffect(e,t)};he.useId=function(){return nt.current.useId()};he.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return nt.current.useMemo(e,t)};he.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};he.useRef=function(e){return nt.current.useRef(e)};he.useState=function(e){return nt.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return nt.current.useTransition()};he.version="18.2.0";(function(e){e.exports=he})(y);const De=lm(y.exports),zl=am({__proto__:null,default:De},[y.exports]);var Ml={},tu={exports:{}},ht={},_f={exports:{}},zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,H){var Y=E.length;E.push(H);e:for(;0<Y;){var de=Y-1>>>1,M=E[de];if(0<o(M,H))E[de]=H,E[Y]=M,Y=de;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var H=E[0],Y=E.pop();if(Y!==H){E[0]=Y;e:for(var de=0,M=E.length,L=M>>>1;de<L;){var T=2*(de+1)-1,F=E[T],k=T+1,V=E[k];if(0>o(F,Y))k<M&&0>o(V,F)?(E[de]=V,E[k]=Y,de=k):(E[de]=F,E[T]=Y,de=T);else if(k<M&&0>o(V,Y))E[de]=V,E[k]=Y,de=k;else break e}}return H}function o(E,H){var Y=E.sortIndex-H.sortIndex;return Y!==0?Y:E.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,f=null,c=3,v=!1,m=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=E)r(u),H.sortIndex=H.expirationTime,t(s,H);else break;H=n(u)}}function x(E){if(w=!1,g(E),!m)if(n(s)!==null)m=!0,ke(b);else{var H=n(u);H!==null&&se(x,H.startTime-E)}}function b(E,H){m=!1,w&&(w=!1,h(O),O=-1),v=!0;var Y=c;try{for(g(H),f=n(s);f!==null&&(!(f.expirationTime>H)||E&&!ue());){var de=f.callback;if(typeof de=="function"){f.callback=null,c=f.priorityLevel;var M=de(f.expirationTime<=H);H=e.unstable_now(),typeof M=="function"?f.callback=M:f===n(s)&&r(s),g(H)}else r(s);f=n(s)}if(f!==null)var L=!0;else{var T=n(u);T!==null&&se(x,T.startTime-H),L=!1}return L}finally{f=null,c=Y,v=!1}}var $=!1,R=null,O=-1,X=5,j=-1;function ue(){return!(e.unstable_now()-j<X)}function ie(){if(R!==null){var E=e.unstable_now();j=E;var H=!0;try{H=R(!0,E)}finally{H?ce():($=!1,R=null)}}else $=!1}var ce;if(typeof p=="function")ce=function(){p(ie)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,re=ee.port2;ee.port1.onmessage=ie,ce=function(){re.postMessage(null)}}else ce=function(){S(ie,0)};function ke(E){R=E,$||($=!0,ce())}function se(E,H){O=S(function(){E(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){m||v||(m=!0,ke(b))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(c){case 1:case 2:case 3:var H=3;break;default:H=c}var Y=c;c=H;try{return E()}finally{c=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var Y=c;c=E;try{return H()}finally{c=Y}},e.unstable_scheduleCallback=function(E,H,Y){var de=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,E){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=Y+M,E={id:d++,callback:H,priorityLevel:E,startTime:Y,expirationTime:M,sortIndex:-1},Y>de?(E.sortIndex=Y,t(u,E),n(s)===null&&E===n(u)&&(w?(h(O),O=-1):w=!0,se(x,Y-de))):(E.sortIndex=M,t(s,E),m||v||(m=!0,ke(b))),E},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(E){var H=c;return function(){var Y=c;c=H;try{return E.apply(this,arguments)}finally{c=Y}}}})(zf);(function(e){e.exports=zf})(_f);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=y.exports,pt=_f.exports;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jf=new Set,ko={};function Zn(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(ko[e]=t,e=0;e<t.length;e++)jf.add(t[e])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,Sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},wc={};function bm(e){return jl.call(wc,e)?!0:jl.call(xc,e)?!1:Sm.test(e)?wc[e]=!0:(xc[e]=!0,!1)}function Cm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $m(e,t,n,r){if(t===null||typeof t>"u"||Cm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var nu=/[\-:]([a-z])/g;function ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nu,ru);Qe[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nu,ru);Qe[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nu,ru);Qe[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ou(e,t,n,r){var o=Qe.hasOwnProperty(t)?Qe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($m(t,n,o,r)&&(n=null),r||o===null?bm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),iu=Symbol.for("react.strict_mode"),Fl=Symbol.for("react.profiler"),Ff=Symbol.for("react.provider"),Bf=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),Bl=Symbol.for("react.suspense"),Ul=Symbol.for("react.suspense_list"),lu=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Uf=Symbol.for("react.offscreen"),Ac=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,el;function io(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?io(e):""}function Em(e){switch(e.tag){case 5:return io(e.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case sr:return"Portal";case Fl:return"Profiler";case iu:return"StrictMode";case Bl:return"Suspense";case Ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bf:return(e.displayName||"Context")+".Consumer";case Ff:return(e._context.displayName||"Context")+".Provider";case au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lu:return t=e.displayName||null,t!==null?t:Hl(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Hl(e(t))}catch{}}return null}function Lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hl(t);case 8:return t===iu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rm(e){var t=Hf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qo(e){e._valueTracker||(e._valueTracker=Rm(e))}function Vf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function kc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wf(e,t){t=t.checked,t!=null&&ou(e,"checked",t,!1)}function Wl(e,t){Wf(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||_i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ao=Array.isArray;function Sr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(ao(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function Qf(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ei,Gf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ei=ei||document.createElement("div"),ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function So(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pm=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(e){Pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),co[t]=co[e]})});function Yf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||co.hasOwnProperty(e)&&co[e]?(""+t).trim():t+"px"}function Xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Yf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Tm=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){if(Tm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,br=null,Cr=null;function $c(e){if(e=Qo(e)){if(typeof Jl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=ka(t),Jl(e.stateNode,e.type,t))}}function Zf(e){br?Cr?Cr.push(e):Cr=[e]:br=e}function Jf(){if(br){var e=br,t=Cr;if(Cr=br=null,$c(e),t)for(e=0;e<t.length;e++)$c(t[e])}}function qf(e,t){return e(t)}function ep(){}var rl=!1;function tp(e,t,n){if(rl)return e(t,n);rl=!0;try{return qf(e,t,n)}finally{rl=!1,(br!==null||Cr!==null)&&(ep(),Jf())}}function bo(e,t){var n=e.stateNode;if(n===null)return null;var r=ka(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var ql=!1;if(Zt)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{ql=!1}function Im(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var fo=!1,zi=null,Mi=!1,es=null,Nm={onError:function(e){fo=!0,zi=e}};function Dm(e,t,n,r,o,i,a,l,s){fo=!1,zi=null,Im.apply(Nm,arguments)}function Om(e,t,n,r,o,i,a,l,s){if(Dm.apply(this,arguments),fo){if(fo){var u=zi;fo=!1,zi=null}else throw Error(z(198));Mi||(Mi=!0,es=u)}}function Jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function np(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ec(e){if(Jn(e)!==e)throw Error(z(188))}function _m(e){var t=e.alternate;if(!t){if(t=Jn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ec(o),e;if(i===r)return Ec(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function rp(e){return e=_m(e),e!==null?op(e):null}function op(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=op(e);if(t!==null)return t;e=e.sibling}return null}var ip=pt.unstable_scheduleCallback,Lc=pt.unstable_cancelCallback,zm=pt.unstable_shouldYield,Mm=pt.unstable_requestPaint,Ne=pt.unstable_now,jm=pt.unstable_getCurrentPriorityLevel,uu=pt.unstable_ImmediatePriority,ap=pt.unstable_UserBlockingPriority,ji=pt.unstable_NormalPriority,Fm=pt.unstable_LowPriority,lp=pt.unstable_IdlePriority,ya=null,Mt=null;function Bm(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(ya,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:Vm,Um=Math.log,Hm=Math.LN2;function Vm(e){return e>>>=0,e===0?32:31-(Um(e)/Hm|0)|0}var ti=64,ni=4194304;function lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=lo(l):(i&=a,i!==0&&(r=lo(i)))}else a=n&~o,a!==0?r=lo(a):i!==0&&(r=lo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),o=1<<n,r|=e[n],t&=~o;return r}function Wm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Rt(i),l=1<<a,s=o[a];s===-1?((l&n)===0||(l&r)!==0)&&(o[a]=Wm(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sp(){var e=ti;return ti<<=1,(ti&4194240)===0&&(ti=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function Km(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Rt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var we=0;function up(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var cp,du,dp,fp,pp,ns=!1,ri=[],fn=null,pn=null,hn=null,Co=new Map,$o=new Map,ln=[],Gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rc(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Co.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(t.pointerId)}}function Gr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Qo(t),t!==null&&du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ym(e,t,n,r,o){switch(t){case"focusin":return fn=Gr(fn,e,t,n,r,o),!0;case"dragenter":return pn=Gr(pn,e,t,n,r,o),!0;case"mouseover":return hn=Gr(hn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Co.set(i,Gr(Co.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,$o.set(i,Gr($o.get(i)||null,e,t,n,r,o)),!0}return!1}function hp(e){var t=On(e.target);if(t!==null){var n=Jn(t);if(n!==null){if(t=n.tag,t===13){if(t=np(n),t!==null){e.blockedOn=t,pp(e.priority,function(){dp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=Qo(n),t!==null&&du(t),e.blockedOn=n,!1;t.shift()}return!0}function Pc(e,t,n){Ci(e)&&n.delete(t)}function Xm(){ns=!1,fn!==null&&Ci(fn)&&(fn=null),pn!==null&&Ci(pn)&&(pn=null),hn!==null&&Ci(hn)&&(hn=null),Co.forEach(Pc),$o.forEach(Pc)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ns||(ns=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,Xm)))}function Eo(e){function t(o){return Yr(o,e)}if(0<ri.length){Yr(ri[0],e);for(var n=1;n<ri.length;n++){var r=ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&Yr(fn,e),pn!==null&&Yr(pn,e),hn!==null&&Yr(hn,e),Co.forEach(t),$o.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)hp(n),n.blockedOn===null&&ln.shift()}var $r=nn.ReactCurrentBatchConfig,Bi=!0;function Zm(e,t,n,r){var o=we,i=$r.transition;$r.transition=null;try{we=1,fu(e,t,n,r)}finally{we=o,$r.transition=i}}function Jm(e,t,n,r){var o=we,i=$r.transition;$r.transition=null;try{we=4,fu(e,t,n,r)}finally{we=o,$r.transition=i}}function fu(e,t,n,r){if(Bi){var o=rs(e,t,n,r);if(o===null)hl(e,t,r,Ui,n),Rc(e,r);else if(Ym(o,e,t,n,r))r.stopPropagation();else if(Rc(e,r),t&4&&-1<Gm.indexOf(e)){for(;o!==null;){var i=Qo(o);if(i!==null&&cp(i),i=rs(e,t,n,r),i===null&&hl(e,t,r,Ui,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var Ui=null;function rs(e,t,n,r){if(Ui=null,e=su(r),e=On(e),e!==null)if(t=Jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=np(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ui=e,null}function gp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jm()){case uu:return 1;case ap:return 4;case ji:case Fm:return 16;case lp:return 536870912;default:return 16}default:return 16}}var un=null,pu=null,$i=null;function mp(){if($i)return $i;var e,t=pu,n=t.length,r,o="value"in un?un.value:un.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return $i=o.slice(e,1<r?1-r:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oi(){return!0}function Tc(){return!1}function gt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?oi:Tc,this.isPropagationStopped=Tc,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=gt(Ur),Wo=Pe({},Ur,{view:0,detail:0}),qm=gt(Wo),il,al,Xr,xa=Pe({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(il=e.screenX-Xr.screenX,al=e.screenY-Xr.screenY):al=il=0,Xr=e),il)},movementY:function(e){return"movementY"in e?e.movementY:al}}),Ic=gt(xa),e0=Pe({},xa,{dataTransfer:0}),t0=gt(e0),n0=Pe({},Wo,{relatedTarget:0}),ll=gt(n0),r0=Pe({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),o0=gt(r0),i0=Pe({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a0=gt(i0),l0=Pe({},Ur,{data:0}),Nc=gt(l0),s0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c0[e])?!!t[e]:!1}function gu(){return d0}var f0=Pe({},Wo,{key:function(e){if(e.key){var t=s0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p0=gt(f0),h0=Pe({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dc=gt(h0),g0=Pe({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),m0=gt(g0),v0=Pe({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=gt(v0),x0=Pe({},xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=gt(x0),A0=[9,13,27,32],mu=Zt&&"CompositionEvent"in window,po=null;Zt&&"documentMode"in document&&(po=document.documentMode);var k0=Zt&&"TextEvent"in window&&!po,vp=Zt&&(!mu||po&&8<po&&11>=po),Oc=String.fromCharCode(32),_c=!1;function yp(e,t){switch(e){case"keyup":return A0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function S0(e,t){switch(e){case"compositionend":return xp(t);case"keypress":return t.which!==32?null:(_c=!0,Oc);case"textInput":return e=t.data,e===Oc&&_c?null:e;default:return null}}function b0(e,t){if(cr)return e==="compositionend"||!mu&&yp(e,t)?(e=mp(),$i=pu=un=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vp&&t.locale!=="ko"?null:t.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C0[e.type]:t==="textarea"}function wp(e,t,n,r){Zf(r),t=Hi(t,"onChange"),0<t.length&&(n=new hu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ho=null,Lo=null;function $0(e){Tp(e,0)}function wa(e){var t=pr(e);if(Vf(t))return e}function E0(e,t){if(e==="change")return t}var Ap=!1;if(Zt){var sl;if(Zt){var ul="oninput"in document;if(!ul){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),ul=typeof Mc.oninput=="function"}sl=ul}else sl=!1;Ap=sl&&(!document.documentMode||9<document.documentMode)}function jc(){ho&&(ho.detachEvent("onpropertychange",kp),Lo=ho=null)}function kp(e){if(e.propertyName==="value"&&wa(Lo)){var t=[];wp(t,Lo,e,su(e)),tp($0,t)}}function L0(e,t,n){e==="focusin"?(jc(),ho=t,Lo=n,ho.attachEvent("onpropertychange",kp)):e==="focusout"&&jc()}function R0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wa(Lo)}function P0(e,t){if(e==="click")return wa(t)}function T0(e,t){if(e==="input"||e==="change")return wa(t)}function I0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:I0;function Ro(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!jl.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function Fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bc(e,t){var n=Fc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fc(n)}}function Sp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bp(){for(var e=window,t=_i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_i(e.document)}return t}function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N0(e){var t=bp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sp(n.ownerDocument.documentElement,n)){if(r!==null&&vu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Bc(n,i);var a=Bc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var D0=Zt&&"documentMode"in document&&11>=document.documentMode,dr=null,os=null,go=null,is=!1;function Uc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;is||dr==null||dr!==_i(r)||(r=dr,"selectionStart"in r&&vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&Ro(go,r)||(go=r,r=Hi(os,"onSelect"),0<r.length&&(t=new hu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dr)))}function ii(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:ii("Animation","AnimationEnd"),animationiteration:ii("Animation","AnimationIteration"),animationstart:ii("Animation","AnimationStart"),transitionend:ii("Transition","TransitionEnd")},cl={},Cp={};Zt&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Aa(e){if(cl[e])return cl[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cp)return cl[e]=t[n];return e}var $p=Aa("animationend"),Ep=Aa("animationiteration"),Lp=Aa("animationstart"),Rp=Aa("transitionend"),Pp=new Map,Hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Pp.set(e,t),Zn(t,[e])}for(var dl=0;dl<Hc.length;dl++){var fl=Hc[dl],O0=fl.toLowerCase(),_0=fl[0].toUpperCase()+fl.slice(1);En(O0,"on"+_0)}En($p,"onAnimationEnd");En(Ep,"onAnimationIteration");En(Lp,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Rp,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Vc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Om(r,t,void 0,e),e.currentTarget=null}function Tp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Vc(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Vc(o,l,u),i=s}}}if(Mi)throw e=es,Mi=!1,es=null,e}function be(e,t){var n=t[cs];n===void 0&&(n=t[cs]=new Set);var r=e+"__bubble";n.has(r)||(Ip(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),Ip(n,e,r,t)}var ai="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[ai]){e[ai]=!0,jf.forEach(function(n){n!=="selectionchange"&&(z0.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ai]||(t[ai]=!0,pl("selectionchange",!1,t))}}function Ip(e,t,n,r){switch(gp(t)){case 1:var o=Zm;break;case 4:o=Jm;break;default:o=fu}n=o.bind(null,t,n,e),o=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=On(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}tp(function(){var u=i,d=su(n),f=[];e:{var c=Pp.get(e);if(c!==void 0){var v=hu,m=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":v=p0;break;case"focusin":m="focus",v=ll;break;case"focusout":m="blur",v=ll;break;case"beforeblur":case"afterblur":v=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=m0;break;case $p:case Ep:case Lp:v=o0;break;case Rp:v=y0;break;case"scroll":v=qm;break;case"wheel":v=w0;break;case"copy":case"cut":case"paste":v=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Dc}var w=(t&4)!==0,S=!w&&e==="scroll",h=w?c!==null?c+"Capture":null:c;w=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=bo(p,h),x!=null&&w.push(To(p,x,g)))),S)break;p=p.return}0<w.length&&(c=new v(c,m,null,n,d),f.push({event:c,listeners:w}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",c&&n!==Zl&&(m=n.relatedTarget||n.fromElement)&&(On(m)||m[Jt]))break e;if((v||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,v?(m=n.relatedTarget||n.toElement,v=u,m=m?On(m):null,m!==null&&(S=Jn(m),m!==S||m.tag!==5&&m.tag!==6)&&(m=null)):(v=null,m=u),v!==m)){if(w=Ic,x="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Dc,x="onPointerLeave",h="onPointerEnter",p="pointer"),S=v==null?c:pr(v),g=m==null?c:pr(m),c=new w(x,p+"leave",v,n,d),c.target=S,c.relatedTarget=g,x=null,On(d)===u&&(w=new w(h,p+"enter",m,n,d),w.target=g,w.relatedTarget=S,x=w),S=x,v&&m)t:{for(w=v,h=m,p=0,g=w;g;g=rr(g))p++;for(g=0,x=h;x;x=rr(x))g++;for(;0<p-g;)w=rr(w),p--;for(;0<g-p;)h=rr(h),g--;for(;p--;){if(w===h||h!==null&&w===h.alternate)break t;w=rr(w),h=rr(h)}w=null}else w=null;v!==null&&Wc(f,c,v,w,!1),m!==null&&S!==null&&Wc(f,S,m,w,!0)}}e:{if(c=u?pr(u):window,v=c.nodeName&&c.nodeName.toLowerCase(),v==="select"||v==="input"&&c.type==="file")var b=E0;else if(zc(c))if(Ap)b=T0;else{b=R0;var $=L0}else(v=c.nodeName)&&v.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(b=P0);if(b&&(b=b(e,u))){wp(f,b,n,d);break e}$&&$(e,c,u),e==="focusout"&&($=c._wrapperState)&&$.controlled&&c.type==="number"&&Ql(c,"number",c.value)}switch($=u?pr(u):window,e){case"focusin":(zc($)||$.contentEditable==="true")&&(dr=$,os=u,go=null);break;case"focusout":go=os=dr=null;break;case"mousedown":is=!0;break;case"contextmenu":case"mouseup":case"dragend":is=!1,Uc(f,n,d);break;case"selectionchange":if(D0)break;case"keydown":case"keyup":Uc(f,n,d)}var R;if(mu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else cr?yp(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(vp&&n.locale!=="ko"&&(cr||O!=="onCompositionStart"?O==="onCompositionEnd"&&cr&&(R=mp()):(un=d,pu="value"in un?un.value:un.textContent,cr=!0)),$=Hi(u,O),0<$.length&&(O=new Nc(O,e,null,n,d),f.push({event:O,listeners:$}),R?O.data=R:(R=xp(n),R!==null&&(O.data=R)))),(R=k0?S0(e,n):b0(e,n))&&(u=Hi(u,"onBeforeInput"),0<u.length&&(d=new Nc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}Tp(f,t)})}function To(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=bo(e,n),i!=null&&r.unshift(To(e,i,o)),i=bo(e,t),i!=null&&r.push(To(e,i,o))),e=e.return}return r}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=bo(n,i),s!=null&&a.unshift(To(n,s,l))):o||(s=bo(n,i),s!=null&&a.push(To(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var M0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Qc(e){return(typeof e=="string"?e:""+e).replace(M0,`
`).replace(j0,"")}function li(e,t,n){if(t=Qc(t),Qc(e)!==t&&n)throw Error(z(425))}function Vi(){}var as=null,ls=null;function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var us=typeof setTimeout=="function"?setTimeout:void 0,F0=typeof clearTimeout=="function"?clearTimeout:void 0,Kc=typeof Promise=="function"?Promise:void 0,B0=typeof queueMicrotask=="function"?queueMicrotask:typeof Kc<"u"?function(e){return Kc.resolve(null).then(e).catch(U0)}:us;function U0(e){setTimeout(function(){throw e})}function gl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Eo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Eo(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Hr,Io="__reactProps$"+Hr,Jt="__reactContainer$"+Hr,cs="__reactEvents$"+Hr,H0="__reactListeners$"+Hr,V0="__reactHandles$"+Hr;function On(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gc(e);e!==null;){if(n=e[_t])return n;e=Gc(e)}return t}e=n,n=e.parentNode}return null}function Qo(e){return e=e[_t]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function ka(e){return e[Io]||null}var ds=[],hr=-1;function Ln(e){return{current:e}}function Ce(e){0>hr||(e.current=ds[hr],ds[hr]=null,hr--)}function Se(e,t){hr++,ds[hr]=e.current,e.current=t}var bn={},Je=Ln(bn),lt=Ln(!1),Hn=bn;function Ir(e,t){var n=e.type.contextTypes;if(!n)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function st(e){return e=e.childContextTypes,e!=null}function Wi(){Ce(lt),Ce(Je)}function Yc(e,t,n){if(Je.current!==bn)throw Error(z(168));Se(Je,t),Se(lt,n)}function Np(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,Lm(e)||"Unknown",o));return Pe({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Hn=Je.current,Se(Je,e),Se(lt,lt.current),!0}function Xc(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Np(e,t,Hn),r.__reactInternalMemoizedMergedChildContext=e,Ce(lt),Ce(Je),Se(Je,e)):Ce(lt),Se(lt,n)}var Kt=null,Sa=!1,ml=!1;function Dp(e){Kt===null?Kt=[e]:Kt.push(e)}function W0(e){Sa=!0,Dp(e)}function Rn(){if(!ml&&Kt!==null){ml=!0;var e=0,t=we;try{var n=Kt;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,Sa=!1}catch(o){throw Kt!==null&&(Kt=Kt.slice(e+1)),ip(uu,Rn),o}finally{we=t,ml=!1}}return null}var gr=[],mr=0,Ki=null,Gi=0,vt=[],yt=0,Vn=null,Gt=1,Yt="";function In(e,t){gr[mr++]=Gi,gr[mr++]=Ki,Ki=e,Gi=t}function Op(e,t,n){vt[yt++]=Gt,vt[yt++]=Yt,vt[yt++]=Vn,Vn=e;var r=Gt;e=Yt;var o=32-Rt(r)-1;r&=~(1<<o),n+=1;var i=32-Rt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Gt=1<<32-Rt(t)+o|n<<o|r,Yt=i+e}else Gt=1<<i|n<<o|r,Yt=e}function yu(e){e.return!==null&&(In(e,1),Op(e,1,0))}function xu(e){for(;e===Ki;)Ki=gr[--mr],gr[mr]=null,Gi=gr[--mr],gr[mr]=null;for(;e===Vn;)Vn=vt[--yt],vt[yt]=null,Yt=vt[--yt],vt[yt]=null,Gt=vt[--yt],vt[yt]=null}var ft=null,dt=null,$e=!1,Et=null;function _p(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,dt=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:Gt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,dt=null,!0):!1;default:return!1}}function fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ps(e){if($e){var t=dt;if(t){var n=t;if(!Zc(e,t)){if(fs(e))throw Error(z(418));t=gn(n.nextSibling);var r=ft;t&&Zc(e,t)?_p(r,n):(e.flags=e.flags&-4097|2,$e=!1,ft=e)}}else{if(fs(e))throw Error(z(418));e.flags=e.flags&-4097|2,$e=!1,ft=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function si(e){if(e!==ft)return!1;if(!$e)return Jc(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ss(e.type,e.memoizedProps)),t&&(t=dt)){if(fs(e))throw zp(),Error(z(418));for(;t;)_p(e,t),t=gn(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ft?gn(e.stateNode.nextSibling):null;return!0}function zp(){for(var e=dt;e;)e=gn(e.nextSibling)}function Nr(){dt=ft=null,$e=!1}function wu(e){Et===null?Et=[e]:Et.push(e)}var Q0=nn.ReactCurrentBatchConfig;function Ct(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yi=Ln(null),Xi=null,vr=null,Au=null;function ku(){Au=vr=Xi=null}function Su(e){var t=Yi.current;Ce(Yi),e._currentValue=t}function hs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){Xi=e,Au=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(at=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(Au!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(Xi===null)throw Error(z(308));vr=e,Xi.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var _n=null;function bu(e){_n===null?_n=[e]:_n.push(e)}function Mp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,bu(t)):(n.next=o.next,o.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qt(e,n)}return o=r.interleaved,o===null?(t.next=t,bu(r)):(t.next=o.next,o.next=t),r.interleaved=t,qt(e,n)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}function qc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zi(e,t,n,r){var o=e.updateQueue;an=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;a=0,d=u=s=null,l=i;do{var c=l.lane,v=l.eventTime;if((r&c)===c){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,w=l;switch(c=t,v=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){f=m.call(v,f,c);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,c=typeof m=="function"?m.call(v,f,c):m,c==null)break e;f=Pe({},f,c);break e;case 2:an=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,c=o.effects,c===null?o.effects=[l]:c.push(l))}else v={eventTime:v,lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,s=f):d=d.next=v,a|=c;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;c=l,l=c.next,c.next=null,o.lastBaseUpdate=c,o.shared.pending=null}}while(1);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Qn|=a,e.lanes=a,e.memoizedState=f}}function ed(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var Fp=new Mf.Component().refs;function gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ba={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),o=yn(e),i=Xt(r,o);i.payload=t,n!=null&&(i.callback=n),t=mn(e,i,o),t!==null&&(Pt(t,e,o,r),Li(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),o=yn(e),i=Xt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=mn(e,i,o),t!==null&&(Pt(t,e,o,r),Li(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=yn(e),o=Xt(n,r);o.tag=2,t!=null&&(o.callback=t),t=mn(e,o,r),t!==null&&(Pt(t,e,r,n),Li(t,e,r))}};function td(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Ro(n,r)||!Ro(o,i):!0}function Bp(e,t,n){var r=!1,o=bn,i=t.contextType;return typeof i=="object"&&i!==null?i=At(i):(o=st(t)?Hn:Je.current,r=t.contextTypes,i=(r=r!=null)?Ir(e,o):bn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ba,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function nd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ba.enqueueReplaceState(t,t.state,null)}function ms(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Fp,Cu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=At(i):(i=st(t)?Hn:Je.current,o.context=Ir(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(gs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ba.enqueueReplaceState(o,o.state,null),Zi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===Fp&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function ui(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rd(e){var t=e._init;return t(e._payload)}function Up(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=xn(h,p),h.index=0,h.sibling=null,h}function i(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,x){return p===null||p.tag!==6?(p=Sl(g,h.mode,x),p.return=h,p):(p=o(p,g),p.return=h,p)}function s(h,p,g,x){var b=g.type;return b===ur?d(h,p,g.props.children,x,g.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===on&&rd(b)===p.type)?(x=o(p,g.props),x.ref=Zr(h,p,g),x.return=h,x):(x=Di(g.type,g.key,g.props,null,h.mode,x),x.ref=Zr(h,p,g),x.return=h,x)}function u(h,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=bl(g,h.mode,x),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function d(h,p,g,x,b){return p===null||p.tag!==7?(p=Bn(g,h.mode,x,b),p.return=h,p):(p=o(p,g),p.return=h,p)}function f(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sl(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Jo:return g=Di(p.type,p.key,p.props,null,h.mode,g),g.ref=Zr(h,null,p),g.return=h,g;case sr:return p=bl(p,h.mode,g),p.return=h,p;case on:var x=p._init;return f(h,x(p._payload),g)}if(ao(p)||Qr(p))return p=Bn(p,h.mode,g,null),p.return=h,p;ui(h,p)}return null}function c(h,p,g,x){var b=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:l(h,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Jo:return g.key===b?s(h,p,g,x):null;case sr:return g.key===b?u(h,p,g,x):null;case on:return b=g._init,c(h,p,b(g._payload),x)}if(ao(g)||Qr(g))return b!==null?null:d(h,p,g,x,null);ui(h,g)}return null}function v(h,p,g,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,l(p,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jo:return h=h.get(x.key===null?g:x.key)||null,s(p,h,x,b);case sr:return h=h.get(x.key===null?g:x.key)||null,u(p,h,x,b);case on:var $=x._init;return v(h,p,g,$(x._payload),b)}if(ao(x)||Qr(x))return h=h.get(g)||null,d(p,h,x,b,null);ui(p,x)}return null}function m(h,p,g,x){for(var b=null,$=null,R=p,O=p=0,X=null;R!==null&&O<g.length;O++){R.index>O?(X=R,R=null):X=R.sibling;var j=c(h,R,g[O],x);if(j===null){R===null&&(R=X);break}e&&R&&j.alternate===null&&t(h,R),p=i(j,p,O),$===null?b=j:$.sibling=j,$=j,R=X}if(O===g.length)return n(h,R),$e&&In(h,O),b;if(R===null){for(;O<g.length;O++)R=f(h,g[O],x),R!==null&&(p=i(R,p,O),$===null?b=R:$.sibling=R,$=R);return $e&&In(h,O),b}for(R=r(h,R);O<g.length;O++)X=v(R,h,O,g[O],x),X!==null&&(e&&X.alternate!==null&&R.delete(X.key===null?O:X.key),p=i(X,p,O),$===null?b=X:$.sibling=X,$=X);return e&&R.forEach(function(ue){return t(h,ue)}),$e&&In(h,O),b}function w(h,p,g,x){var b=Qr(g);if(typeof b!="function")throw Error(z(150));if(g=b.call(g),g==null)throw Error(z(151));for(var $=b=null,R=p,O=p=0,X=null,j=g.next();R!==null&&!j.done;O++,j=g.next()){R.index>O?(X=R,R=null):X=R.sibling;var ue=c(h,R,j.value,x);if(ue===null){R===null&&(R=X);break}e&&R&&ue.alternate===null&&t(h,R),p=i(ue,p,O),$===null?b=ue:$.sibling=ue,$=ue,R=X}if(j.done)return n(h,R),$e&&In(h,O),b;if(R===null){for(;!j.done;O++,j=g.next())j=f(h,j.value,x),j!==null&&(p=i(j,p,O),$===null?b=j:$.sibling=j,$=j);return $e&&In(h,O),b}for(R=r(h,R);!j.done;O++,j=g.next())j=v(R,h,O,j.value,x),j!==null&&(e&&j.alternate!==null&&R.delete(j.key===null?O:j.key),p=i(j,p,O),$===null?b=j:$.sibling=j,$=j);return e&&R.forEach(function(ie){return t(h,ie)}),$e&&In(h,O),b}function S(h,p,g,x){if(typeof g=="object"&&g!==null&&g.type===ur&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Jo:e:{for(var b=g.key,$=p;$!==null;){if($.key===b){if(b=g.type,b===ur){if($.tag===7){n(h,$.sibling),p=o($,g.props.children),p.return=h,h=p;break e}}else if($.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===on&&rd(b)===$.type){n(h,$.sibling),p=o($,g.props),p.ref=Zr(h,$,g),p.return=h,h=p;break e}n(h,$);break}else t(h,$);$=$.sibling}g.type===ur?(p=Bn(g.props.children,h.mode,x,g.key),p.return=h,h=p):(x=Di(g.type,g.key,g.props,null,h.mode,x),x.ref=Zr(h,p,g),x.return=h,h=x)}return a(h);case sr:e:{for($=g.key;p!==null;){if(p.key===$)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=bl(g,h.mode,x),p.return=h,h=p}return a(h);case on:return $=g._init,S(h,p,$(g._payload),x)}if(ao(g))return m(h,p,g,x);if(Qr(g))return w(h,p,g,x);ui(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,g),p.return=h,h=p):(n(h,p),p=Sl(g,h.mode,x),p.return=h,h=p),a(h)):n(h,p)}return S}var Dr=Up(!0),Hp=Up(!1),Ko={},jt=Ln(Ko),No=Ln(Ko),Do=Ln(Ko);function zn(e){if(e===Ko)throw Error(z(174));return e}function $u(e,t){switch(Se(Do,t),Se(No,e),Se(jt,Ko),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}Ce(jt),Se(jt,t)}function Or(){Ce(jt),Ce(No),Ce(Do)}function Vp(e){zn(Do.current);var t=zn(jt.current),n=Gl(t,e.type);t!==n&&(Se(No,e),Se(jt,n))}function Eu(e){No.current===e&&(Ce(jt),Ce(No))}var Le=Ln(0);function Ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function Lu(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var Ri=nn.ReactCurrentDispatcher,yl=nn.ReactCurrentBatchConfig,Wn=0,Re=null,ze=null,je=null,qi=!1,mo=!1,Oo=0,K0=0;function Ye(){throw Error(z(321))}function Ru(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Pu(e,t,n,r,o,i){if(Wn=i,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Z0:J0,e=n(r,o),mo){i=0;do{if(mo=!1,Oo=0,25<=i)throw Error(z(301));i+=1,je=ze=null,t.updateQueue=null,Ri.current=q0,e=n(r,o)}while(mo)}if(Ri.current=ea,t=ze!==null&&ze.next!==null,Wn=0,je=ze=Re=null,qi=!1,t)throw Error(z(300));return e}function Tu(){var e=Oo!==0;return Oo=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Re.memoizedState=je=e:je=je.next=e,je}function kt(){if(ze===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=je===null?Re.memoizedState:je.next;if(t!==null)je=t,ze=e;else{if(e===null)throw Error(z(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},je===null?Re.memoizedState=je=e:je=je.next=e}return je}function _o(e,t){return typeof t=="function"?t(e):t}function xl(e){var t=kt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=ze,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var d=u.lane;if((Wn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Re.lanes|=d,Qn|=d}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Tt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Re.lanes|=i,Qn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wl(e){var t=kt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Tt(i,t.memoizedState)||(at=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Wp(){}function Qp(e,t){var n=Re,r=kt(),o=t(),i=!Tt(r.memoizedState,o);if(i&&(r.memoizedState=o,at=!0),r=r.queue,Iu(Yp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,zo(9,Gp.bind(null,n,r,o,t),void 0,null),Fe===null)throw Error(z(349));(Wn&30)!==0||Kp(n,t,o)}return o}function Kp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gp(e,t,n,r){t.value=n,t.getSnapshot=r,Xp(t)&&Zp(e)}function Yp(e,t,n){return n(function(){Xp(t)&&Zp(e)})}function Xp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Zp(e){var t=qt(e,1);t!==null&&Pt(t,e,1,-1)}function od(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:e},t.queue=e,e=e.dispatch=X0.bind(null,Re,e),[t.memoizedState,e]}function zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jp(){return kt().memoizedState}function Pi(e,t,n,r){var o=Ot();Re.flags|=e,o.memoizedState=zo(1|t,n,void 0,r===void 0?null:r)}function Ca(e,t,n,r){var o=kt();r=r===void 0?null:r;var i=void 0;if(ze!==null){var a=ze.memoizedState;if(i=a.destroy,r!==null&&Ru(r,a.deps)){o.memoizedState=zo(t,n,i,r);return}}Re.flags|=e,o.memoizedState=zo(1|t,n,i,r)}function id(e,t){return Pi(8390656,8,e,t)}function Iu(e,t){return Ca(2048,8,e,t)}function qp(e,t){return Ca(4,2,e,t)}function eh(e,t){return Ca(4,4,e,t)}function th(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nh(e,t,n){return n=n!=null?n.concat([e]):null,Ca(4,4,th.bind(null,t,e),n)}function Nu(){}function rh(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ru(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function oh(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ru(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ih(e,t,n){return(Wn&21)===0?(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n):(Tt(n,t)||(n=sp(),Re.lanes|=n,Qn|=n,e.baseState=!0),t)}function G0(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{we=n,yl.transition=r}}function ah(){return kt().memoizedState}function Y0(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lh(e))sh(t,n);else if(n=Mp(e,t,n,r),n!==null){var o=tt();Pt(n,e,r,o),uh(n,t,r)}}function X0(e,t,n){var r=yn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lh(e))sh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Tt(l,a)){var s=t.interleaved;s===null?(o.next=o,bu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Mp(e,t,o,r),n!==null&&(o=tt(),Pt(n,e,r,o),uh(n,t,r))}}function lh(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function sh(e,t){mo=qi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}var ea={readContext:At,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},Z0={readContext:At,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:id,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4194308,4,th.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pi(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y0.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:od,useDebugValue:Nu,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=od(!1),t=e[0];return e=G0.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,o=Ot();if($e){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Fe===null)throw Error(z(349));(Wn&30)!==0||Kp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,id(Yp.bind(null,r,i,e),[e]),r.flags|=2048,zo(9,Gp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ot(),t=Fe.identifierPrefix;if($e){var n=Yt,r=Gt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=K0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J0={readContext:At,useCallback:rh,useContext:At,useEffect:Iu,useImperativeHandle:nh,useInsertionEffect:qp,useLayoutEffect:eh,useMemo:oh,useReducer:xl,useRef:Jp,useState:function(){return xl(_o)},useDebugValue:Nu,useDeferredValue:function(e){var t=kt();return ih(t,ze.memoizedState,e)},useTransition:function(){var e=xl(_o)[0],t=kt().memoizedState;return[e,t]},useMutableSource:Wp,useSyncExternalStore:Qp,useId:ah,unstable_isNewReconciler:!1},q0={readContext:At,useCallback:rh,useContext:At,useEffect:Iu,useImperativeHandle:nh,useInsertionEffect:qp,useLayoutEffect:eh,useMemo:oh,useReducer:wl,useRef:Jp,useState:function(){return wl(_o)},useDebugValue:Nu,useDeferredValue:function(e){var t=kt();return ze===null?t.memoizedState=e:ih(t,ze.memoizedState,e)},useTransition:function(){var e=wl(_o)[0],t=kt().memoizedState;return[e,t]},useMutableSource:Wp,useSyncExternalStore:Qp,useId:ah,unstable_isNewReconciler:!1};function _r(e,t){try{var n="",r=t;do n+=Em(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Al(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function vs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e1=typeof WeakMap=="function"?WeakMap:Map;function ch(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){na||(na=!0,Es=r),vs(e,t)},n}function dh(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){vs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){vs(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ad(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=h1.bind(null,e,t,n),t.then(e,e))}function ld(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sd(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var t1=nn.ReactCurrentOwner,at=!1;function et(e,t,n,r){t.child=e===null?Hp(t,null,n,r):Dr(t,e.child,n,r)}function ud(e,t,n,r,o){n=n.render;var i=t.ref;return Er(t,o),r=Pu(e,t,n,r,i,o),n=Tu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):($e&&n&&yu(t),t.flags|=1,et(e,t,r,o),t.child)}function cd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Bu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,fh(e,t,i,r,o)):(e=Di(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(a,r)&&e.ref===t.ref)return en(e,t,o)}return t.flags|=1,e=xn(i,r),e.ref=t.ref,e.return=t,t.child=e}function fh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ro(i,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,en(e,t,o)}return ys(e,t,n,r,o)}function ph(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(xr,ct),ct|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(xr,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Se(xr,ct),ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Se(xr,ct),ct|=r;return et(e,t,o,n),t.child}function hh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ys(e,t,n,r,o){var i=st(n)?Hn:Je.current;return i=Ir(t,i),Er(t,o),n=Pu(e,t,n,r,i,o),r=Tu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):($e&&r&&yu(t),t.flags|=1,et(e,t,n,o),t.child)}function dd(e,t,n,r,o){if(st(n)){var i=!0;Qi(t)}else i=!1;if(Er(t,o),t.stateNode===null)Ti(e,t),Bp(t,n,r),ms(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=At(u):(u=st(n)?Hn:Je.current,u=Ir(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&nd(t,a,r,u),an=!1;var c=t.memoizedState;a.state=c,Zi(t,r,a,o),s=t.memoizedState,l!==r||c!==s||lt.current||an?(typeof d=="function"&&(gs(t,n,d,r),s=t.memoizedState),(l=an||td(t,n,l,r,c,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,jp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ct(t.type,l),a.props=u,f=t.pendingProps,c=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=At(s):(s=st(n)?Hn:Je.current,s=Ir(t,s));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||c!==s)&&nd(t,a,r,s),an=!1,c=t.memoizedState,a.state=c,Zi(t,r,a,o);var m=t.memoizedState;l!==f||c!==m||lt.current||an?(typeof v=="function"&&(gs(t,n,v,r),m=t.memoizedState),(u=an||td(t,n,u,r,c,m,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return xs(e,t,n,r,i,o)}function xs(e,t,n,r,o,i){hh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Xc(t,n,!1),en(e,t,i);r=t.stateNode,t1.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Dr(t,e.child,null,i),t.child=Dr(t,null,l,i)):et(e,t,l,i),t.memoizedState=r.state,o&&Xc(t,n,!0),t.child}function gh(e){var t=e.stateNode;t.pendingContext?Yc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yc(e,t.context,!1),$u(e,t.containerInfo)}function fd(e,t,n,r,o){return Nr(),wu(o),t.flags|=256,et(e,t,n,r),t.child}var ws={dehydrated:null,treeContext:null,retryLane:0};function As(e){return{baseLanes:e,cachePool:null,transitions:null}}function mh(e,t,n){var r=t.pendingProps,o=Le.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Se(Le,o&1),e===null)return ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=La(a,r,0,null),e=Bn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=As(n),t.memoizedState=ws,e):Du(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return n1(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=xn(l,i):(i=Bn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?As(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ws,r}return i=e.child,e=i.sibling,r=xn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Du(e,t){return t=La({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ci(e,t,n,r){return r!==null&&wu(r),Dr(t,e.child,null,n),e=Du(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n1(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Al(Error(z(422))),ci(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=La({mode:"visible",children:r.children},o,0,null),i=Bn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Dr(t,e.child,null,a),t.child.memoizedState=As(a),t.memoizedState=ws,i);if((t.mode&1)===0)return ci(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=Al(i,r,void 0),ci(e,t,a,r)}if(l=(a&e.childLanes)!==0,at||l){if(r=Fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qt(e,o),Pt(r,e,o,-1))}return Fu(),r=Al(Error(z(421))),ci(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=g1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,dt=gn(o.nextSibling),ft=t,$e=!0,Et=null,e!==null&&(vt[yt++]=Gt,vt[yt++]=Yt,vt[yt++]=Vn,Gt=e.id,Yt=e.overflow,Vn=t),t=Du(t,r.children),t.flags|=4096,t)}function pd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hs(e.return,t,n)}function kl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function vh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(et(e,t,r.children,n),r=Le.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pd(e,n,t);else if(e.tag===19)pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Le,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ji(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),kl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ji(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}kl(t,!0,n,null,i);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ti(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r1(e,t,n){switch(t.tag){case 3:gh(t),Nr();break;case 5:Vp(t);break;case 1:st(t.type)&&Qi(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Se(Yi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(Le,Le.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?mh(e,t,n):(Se(Le,Le.current&1),e=en(e,t,n),e!==null?e.sibling:null);Se(Le,Le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return vh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Se(Le,Le.current),r)break;return null;case 22:case 23:return t.lanes=0,ph(e,t,n)}return en(e,t,n)}var yh,ks,xh,wh;yh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ks=function(){};xh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,zn(jt.current);var i=null;switch(n){case"input":o=Vl(e,o),r=Vl(e,r),i=[];break;case"select":o=Pe({},o,{value:void 0}),r=Pe({},r,{value:void 0}),i=[];break;case"textarea":o=Kl(e,o),r=Kl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vi)}Yl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ko.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ko.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&be("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};wh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jr(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function o1(e,t,n){var r=t.pendingProps;switch(xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return st(t.type)&&Wi(),Xe(t),null;case 3:return r=t.stateNode,Or(),Ce(lt),Ce(Je),Lu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(Ps(Et),Et=null))),ks(e,t),Xe(t),null;case 5:Eu(t);var o=zn(Do.current);if(n=t.type,e!==null&&t.stateNode!=null)xh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Xe(t),null}if(e=zn(jt.current),si(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[_t]=t,r[Io]=i,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(o=0;o<so.length;o++)be(so[o],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":kc(r,i),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},be("invalid",r);break;case"textarea":bc(r,i),be("invalid",r)}Yl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&li(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&li(r.textContent,l,e),o=["children",""+l]):ko.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&be("scroll",r)}switch(n){case"input":qo(r),Sc(r,i,!0);break;case"textarea":qo(r),Cc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[_t]=t,e[Io]=r,yh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Xl(n,r),n){case"dialog":be("cancel",e),be("close",e),o=r;break;case"iframe":case"object":case"embed":be("load",e),o=r;break;case"video":case"audio":for(o=0;o<so.length;o++)be(so[o],e);o=r;break;case"source":be("error",e),o=r;break;case"img":case"image":case"link":be("error",e),be("load",e),o=r;break;case"details":be("toggle",e),o=r;break;case"input":kc(e,r),o=Vl(e,r),be("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Pe({},r,{value:void 0}),be("invalid",e);break;case"textarea":bc(e,r),o=Kl(e,r),be("invalid",e);break;default:o=r}Yl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Xf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&So(e,s):typeof s=="number"&&So(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ko.hasOwnProperty(i)?s!=null&&i==="onScroll"&&be("scroll",e):s!=null&&ou(e,i,s,a))}switch(n){case"input":qo(e),Sc(e,r,!1);break;case"textarea":qo(e),Cc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Sr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)wh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=zn(Do.current),zn(jt.current),si(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(i=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:li(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&li(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Xe(t),null;case 13:if(Ce(Le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zp(),Nr(),t.flags|=98560,i=!1;else if(i=si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[_t]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),i=!1}else Et!==null&&(Ps(Et),Et=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Le.current&1)!==0?Me===0&&(Me=3):Fu())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return Or(),ks(e,t),e===null&&Po(t.stateNode.containerInfo),Xe(t),null;case 10:return Su(t.type._context),Xe(t),null;case 17:return st(t.type)&&Wi(),Xe(t),null;case 19:if(Ce(Le),i=t.memoizedState,i===null)return Xe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Jr(i,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Ji(e),a!==null){for(t.flags|=128,Jr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(Le,Le.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ne()>zr&&(t.flags|=128,r=!0,Jr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ji(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!$e)return Xe(t),null}else 2*Ne()-i.renderingStartTime>zr&&n!==1073741824&&(t.flags|=128,r=!0,Jr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ne(),t.sibling=null,n=Le.current,Se(Le,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return ju(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ct&1073741824)!==0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function i1(e,t){switch(xu(t),t.tag){case 1:return st(t.type)&&Wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),Ce(lt),Ce(Je),Lu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Eu(t),null;case 13:if(Ce(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Le),null;case 4:return Or(),null;case 10:return Su(t.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var di=!1,Ze=!1,a1=typeof WeakSet=="function"?WeakSet:Set,K=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Ss(e,t,n){try{n()}catch(r){Te(e,t,r)}}var hd=!1;function l1(e,t){if(as=Bi,e=bp(),vu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)c=f,f=v;for(;;){if(f===e)break t;if(c===n&&++u===o&&(l=a),c===i&&++d===r&&(s=a),(v=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ls={focusedElem:e,selectionRange:n},Bi=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,S=m.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ct(t.type,w),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){Te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return m=hd,hd=!1,m}function vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ss(t,n,i)}o=o.next}while(o!==r)}}function $a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ah(e){var t=e.alternate;t!==null&&(e.alternate=null,Ah(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[Io],delete t[cs],delete t[H0],delete t[V0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kh(e){return e.tag===5||e.tag===3||e.tag===4}function gd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vi));else if(r!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}function $s(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($s(e,t,n),e=e.sibling;e!==null;)$s(e,t,n),e=e.sibling}var Ue=null,$t=!1;function rn(e,t,n){for(n=n.child;n!==null;)Sh(e,t,n),n=n.sibling}function Sh(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(ya,n)}catch{}switch(n.tag){case 5:Ze||yr(n,t);case 6:var r=Ue,o=$t;Ue=null,rn(e,t,n),Ue=r,$t=o,Ue!==null&&($t?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&($t?(e=Ue,n=n.stateNode,e.nodeType===8?gl(e.parentNode,n):e.nodeType===1&&gl(e,n),Eo(e)):gl(Ue,n.stateNode));break;case 4:r=Ue,o=$t,Ue=n.stateNode.containerInfo,$t=!0,rn(e,t,n),Ue=r,$t=o;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Ss(n,t,a),o=o.next}while(o!==r)}rn(e,t,n);break;case 1:if(!Ze&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,rn(e,t,n),Ze=r):rn(e,t,n);break;default:rn(e,t,n)}}function md(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new a1),t.forEach(function(r){var o=m1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,$t=!1;break e;case 3:Ue=l.stateNode.containerInfo,$t=!0;break e;case 4:Ue=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(Ue===null)throw Error(z(160));Sh(i,a,o),Ue=null,$t=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bh(t,e),t=t.sibling}function bh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Dt(e),r&4){try{vo(3,e,e.return),$a(3,e)}catch(w){Te(e,e.return,w)}try{vo(5,e,e.return)}catch(w){Te(e,e.return,w)}}break;case 1:bt(t,e),Dt(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(bt(t,e),Dt(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var o=e.stateNode;try{So(o,"")}catch(w){Te(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Wf(o,i),Xl(l,a);var u=Xl(l,i);for(a=0;a<s.length;a+=2){var d=s[a],f=s[a+1];d==="style"?Xf(o,f):d==="dangerouslySetInnerHTML"?Gf(o,f):d==="children"?So(o,f):ou(o,d,f,u)}switch(l){case"input":Wl(o,i);break;case"textarea":Qf(o,i);break;case"select":var c=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Sr(o,!!i.multiple,v,!1):c!==!!i.multiple&&(i.defaultValue!=null?Sr(o,!!i.multiple,i.defaultValue,!0):Sr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Io]=i}catch(w){Te(e,e.return,w)}}break;case 6:if(bt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Te(e,e.return,w)}}break;case 3:if(bt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(t.containerInfo)}catch(w){Te(e,e.return,w)}break;case 4:bt(t,e),Dt(e);break;case 13:bt(t,e),Dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(zu=Ne())),r&4&&md(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(u=Ze)||d,bt(t,e),Ze=u):bt(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(K=e,d=e.child;d!==null;){for(f=K=d;K!==null;){switch(c=K,v=c.child,c.tag){case 0:case 11:case 14:case 15:vo(4,c,c.return);break;case 1:yr(c,c.return);var m=c.stateNode;if(typeof m.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(w){Te(r,n,w)}}break;case 5:yr(c,c.return);break;case 22:if(c.memoizedState!==null){yd(f);continue}}v!==null?(v.return=c,K=v):yd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Yf("display",a))}catch(w){Te(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Te(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:bt(t,e),Dt(e),r&4&&md(e);break;case 21:break;default:bt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kh(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(So(o,""),r.flags&=-33);var i=gd(e);$s(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=gd(e);Cs(e,l,a);break;default:throw Error(z(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function s1(e,t,n){K=e,Ch(e)}function Ch(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var o=K,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||di;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Ze;l=di;var u=Ze;if(di=a,(Ze=s)&&!u)for(K=o;K!==null;)a=K,s=a.child,a.tag===22&&a.memoizedState!==null?xd(o):s!==null?(s.return=a,K=s):xd(o);for(;i!==null;)K=i,Ch(i),i=i.sibling;K=o,di=l,Ze=u}vd(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,K=i):vd(e)}}function vd(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ze||$a(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ed(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ed(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Eo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ze||t.flags&512&&bs(t)}catch(c){Te(t,t.return,c)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function yd(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function xd(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$a(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Te(t,o,s)}}var i=t.return;try{bs(t)}catch(s){Te(t,i,s)}break;case 5:var a=t.return;try{bs(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var u1=Math.ceil,ta=nn.ReactCurrentDispatcher,Ou=nn.ReactCurrentOwner,wt=nn.ReactCurrentBatchConfig,me=0,Fe=null,Oe=null,Ve=0,ct=0,xr=Ln(0),Me=0,Mo=null,Qn=0,Ea=0,_u=0,yo=null,it=null,zu=0,zr=1/0,Qt=null,na=!1,Es=null,vn=null,fi=!1,cn=null,ra=0,xo=0,Ls=null,Ii=-1,Ni=0;function tt(){return(me&6)!==0?Ne():Ii!==-1?Ii:Ii=Ne()}function yn(e){return(e.mode&1)===0?1:(me&2)!==0&&Ve!==0?Ve&-Ve:Q0.transition!==null?(Ni===0&&(Ni=sp()),Ni):(e=we,e!==0||(e=window.event,e=e===void 0?16:gp(e.type)),e)}function Pt(e,t,n,r){if(50<xo)throw xo=0,Ls=null,Error(z(185));Vo(e,n,r),((me&2)===0||e!==Fe)&&(e===Fe&&((me&2)===0&&(Ea|=n),Me===4&&sn(e,Ve)),ut(e,r),n===1&&me===0&&(t.mode&1)===0&&(zr=Ne()+500,Sa&&Rn()))}function ut(e,t){var n=e.callbackNode;Qm(e,t);var r=Fi(e,e===Fe?Ve:0);if(r===0)n!==null&&Lc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lc(n),t===1)e.tag===0?W0(wd.bind(null,e)):Dp(wd.bind(null,e)),B0(function(){(me&6)===0&&Rn()}),n=null;else{switch(up(r)){case 1:n=uu;break;case 4:n=ap;break;case 16:n=ji;break;case 536870912:n=lp;break;default:n=ji}n=Nh(n,$h.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $h(e,t){if(Ii=-1,Ni=0,(me&6)!==0)throw Error(z(327));var n=e.callbackNode;if(Lr()&&e.callbackNode!==n)return null;var r=Fi(e,e===Fe?Ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=oa(e,r);else{t=r;var o=me;me|=2;var i=Lh();(Fe!==e||Ve!==t)&&(Qt=null,zr=Ne()+500,Fn(e,t));do try{f1();break}catch(l){Eh(e,l)}while(1);ku(),ta.current=i,me=o,Oe!==null?t=0:(Fe=null,Ve=0,t=Me)}if(t!==0){if(t===2&&(o=ts(e),o!==0&&(r=o,t=Rs(e,o))),t===1)throw n=Mo,Fn(e,0),sn(e,r),ut(e,Ne()),n;if(t===6)sn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!c1(o)&&(t=oa(e,r),t===2&&(i=ts(e),i!==0&&(r=i,t=Rs(e,i))),t===1))throw n=Mo,Fn(e,0),sn(e,r),ut(e,Ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Nn(e,it,Qt);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=zu+500-Ne(),10<t)){if(Fi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=us(Nn.bind(null,e,it,Qt),t);break}Nn(e,it,Qt);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Rt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u1(r/1960))-r,10<r){e.timeoutHandle=us(Nn.bind(null,e,it,Qt),r);break}Nn(e,it,Qt);break;case 5:Nn(e,it,Qt);break;default:throw Error(z(329))}}}return ut(e,Ne()),e.callbackNode===n?$h.bind(null,e):null}function Rs(e,t){var n=yo;return e.current.memoizedState.isDehydrated&&(Fn(e,t).flags|=256),e=oa(e,t),e!==2&&(t=it,it=n,t!==null&&Ps(t)),e}function Ps(e){it===null?it=e:it.push.apply(it,e)}function c1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~_u,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function wd(e){if((me&6)!==0)throw Error(z(327));Lr();var t=Fi(e,0);if((t&1)===0)return ut(e,Ne()),null;var n=oa(e,t);if(e.tag!==0&&n===2){var r=ts(e);r!==0&&(t=r,n=Rs(e,r))}if(n===1)throw n=Mo,Fn(e,0),sn(e,t),ut(e,Ne()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,it,Qt),ut(e,Ne()),null}function Mu(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(zr=Ne()+500,Sa&&Rn())}}function Kn(e){cn!==null&&cn.tag===0&&(me&6)===0&&Lr();var t=me;me|=1;var n=wt.transition,r=we;try{if(wt.transition=null,we=1,e)return e()}finally{we=r,wt.transition=n,me=t,(me&6)===0&&Rn()}}function ju(){ct=xr.current,Ce(xr)}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,F0(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wi();break;case 3:Or(),Ce(lt),Ce(Je),Lu();break;case 5:Eu(r);break;case 4:Or();break;case 13:Ce(Le);break;case 19:Ce(Le);break;case 10:Su(r.type._context);break;case 22:case 23:ju()}n=n.return}if(Fe=e,Oe=e=xn(e.current,null),Ve=ct=t,Me=0,Mo=null,_u=Ea=Qn=0,it=yo=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}_n=null}return e}function Eh(e,t){do{var n=Oe;try{if(ku(),Ri.current=ea,qi){for(var r=Re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}qi=!1}if(Wn=0,je=ze=Re=null,mo=!1,Oo=0,Ou.current=null,n===null||n.return===null){Me=1,Mo=t,Oe=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=Ve,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,f=d.tag;if((d.mode&1)===0&&(f===0||f===11||f===15)){var c=d.alternate;c?(d.updateQueue=c.updateQueue,d.memoizedState=c.memoizedState,d.lanes=c.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=ld(a);if(v!==null){v.flags&=-257,sd(v,a,l,i,t),v.mode&1&&ad(i,u,t),t=v,s=u;var m=t.updateQueue;if(m===null){var w=new Set;w.add(s),t.updateQueue=w}else m.add(s);break e}else{if((t&1)===0){ad(i,u,t),Fu();break e}s=Error(z(426))}}else if($e&&l.mode&1){var S=ld(a);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),sd(S,a,l,i,t),wu(_r(s,l));break e}}i=s=_r(s,l),Me!==4&&(Me=2),yo===null?yo=[i]:yo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=ch(i,s,t);qc(i,h);break e;case 1:l=s;var p=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vn===null||!vn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=dh(i,l,t);qc(i,x);break e}}i=i.return}while(i!==null)}Ph(n)}catch(b){t=b,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function Lh(){var e=ta.current;return ta.current=ea,e===null?ea:e}function Fu(){(Me===0||Me===3||Me===2)&&(Me=4),Fe===null||(Qn&268435455)===0&&(Ea&268435455)===0||sn(Fe,Ve)}function oa(e,t){var n=me;me|=2;var r=Lh();(Fe!==e||Ve!==t)&&(Qt=null,Fn(e,t));do try{d1();break}catch(o){Eh(e,o)}while(1);if(ku(),me=n,ta.current=r,Oe!==null)throw Error(z(261));return Fe=null,Ve=0,Me}function d1(){for(;Oe!==null;)Rh(Oe)}function f1(){for(;Oe!==null&&!zm();)Rh(Oe)}function Rh(e){var t=Ih(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?Ph(e):Oe=t,Ou.current=null}function Ph(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=o1(n,t,ct),n!==null){Oe=n;return}}else{if(n=i1(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Me===0&&(Me=5)}function Nn(e,t,n){var r=we,o=wt.transition;try{wt.transition=null,we=1,p1(e,t,n,r)}finally{wt.transition=o,we=r}return null}function p1(e,t,n,r){do Lr();while(cn!==null);if((me&6)!==0)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Km(e,i),e===Fe&&(Oe=Fe=null,Ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||fi||(fi=!0,Nh(ji,function(){return Lr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=wt.transition,wt.transition=null;var a=we;we=1;var l=me;me|=4,Ou.current=null,l1(e,n),bh(n,e),N0(ls),Bi=!!as,ls=as=null,e.current=n,s1(n),Mm(),me=l,we=a,wt.transition=i}else e.current=n;if(fi&&(fi=!1,cn=e,ra=o),i=e.pendingLanes,i===0&&(vn=null),Bm(n.stateNode),ut(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(na)throw na=!1,e=Es,Es=null,e;return(ra&1)!==0&&e.tag!==0&&Lr(),i=e.pendingLanes,(i&1)!==0?e===Ls?xo++:(xo=0,Ls=e):xo=0,Rn(),null}function Lr(){if(cn!==null){var e=up(ra),t=wt.transition,n=we;try{if(wt.transition=null,we=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,ra=0,(me&6)!==0)throw Error(z(331));var o=me;for(me|=4,K=e.current;K!==null;){var i=K,a=i.child;if((K.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:vo(8,d,i)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var c=d.sibling,v=d.return;if(Ah(d),d===u){K=null;break}if(c!==null){c.return=v,K=c;break}K=v}}}var m=i.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}K=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,K=a;else e:for(;K!==null;){if(i=K,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:vo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,K=h;break e}K=i.return}}var p=e.current;for(K=p;K!==null;){a=K;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,K=g;else e:for(a=p;K!==null;){if(l=K,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:$a(9,l)}}catch(b){Te(l,l.return,b)}if(l===a){K=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,K=x;break e}K=l.return}}if(me=o,Rn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(ya,e)}catch{}r=!0}return r}finally{we=n,wt.transition=t}}return!1}function Ad(e,t,n){t=_r(n,t),t=ch(e,t,1),e=mn(e,t,1),t=tt(),e!==null&&(Vo(e,1,t),ut(e,t))}function Te(e,t,n){if(e.tag===3)Ad(e,e,n);else for(;t!==null;){if(t.tag===3){Ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=_r(n,e),e=dh(t,e,1),t=mn(t,e,1),e=tt(),t!==null&&(Vo(t,1,e),ut(t,e));break}}t=t.return}}function h1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(Ve&n)===n&&(Me===4||Me===3&&(Ve&130023424)===Ve&&500>Ne()-zu?Fn(e,0):_u|=n),ut(e,t)}function Th(e,t){t===0&&((e.mode&1)===0?t=1:(t=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var n=tt();e=qt(e,t),e!==null&&(Vo(e,t,n),ut(e,n))}function g1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Th(e,n)}function m1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Th(e,n)}var Ih;Ih=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)at=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return at=!1,r1(e,t,n);at=(e.flags&131072)!==0}else at=!1,$e&&(t.flags&1048576)!==0&&Op(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ti(e,t),e=t.pendingProps;var o=Ir(t,Je.current);Er(t,n),o=Pu(null,t,r,e,o,n);var i=Tu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(i=!0,Qi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Cu(t),o.updater=ba,t.stateNode=o,o._reactInternals=t,ms(t,r,e,n),t=xs(null,t,r,!0,i,n)):(t.tag=0,$e&&i&&yu(t),et(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ti(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=y1(r),e=Ct(r,e),o){case 0:t=ys(null,t,r,e,n);break e;case 1:t=dd(null,t,r,e,n);break e;case 11:t=ud(null,t,r,e,n);break e;case 14:t=cd(null,t,r,Ct(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),ys(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),dd(e,t,r,o,n);case 3:e:{if(gh(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,jp(e,t),Zi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=_r(Error(z(423)),t),t=fd(e,t,r,n,o);break e}else if(r!==o){o=_r(Error(z(424)),t),t=fd(e,t,r,n,o);break e}else for(dt=gn(t.stateNode.containerInfo.firstChild),ft=t,$e=!0,Et=null,n=Hp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nr(),r===o){t=en(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Vp(t),e===null&&ps(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ss(r,o)?a=null:i!==null&&ss(r,i)&&(t.flags|=32),hh(e,t),et(e,t,a,n),t.child;case 6:return e===null&&ps(t),null;case 13:return mh(e,t,n);case 4:return $u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),ud(e,t,r,o,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Se(Yi,r._currentValue),r._currentValue=a,i!==null)if(Tt(i.value,a)){if(i.children===o.children&&!lt.current){t=en(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Xt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),hs(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(z(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),hs(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}et(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Er(t,n),o=At(o),r=r(o),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,o=Ct(r,t.pendingProps),o=Ct(r.type,o),cd(e,t,r,o,n);case 15:return fh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),Ti(e,t),t.tag=1,st(r)?(e=!0,Qi(t)):e=!1,Er(t,n),Bp(t,r,o),ms(t,r,o,n),xs(null,t,r,!0,e,n);case 19:return vh(e,t,n);case 22:return ph(e,t,n)}throw Error(z(156,t.tag))};function Nh(e,t){return ip(e,t)}function v1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new v1(e,t,n,r)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y1(e){if(typeof e=="function")return Bu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===au)return 11;if(e===lu)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Di(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Bu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ur:return Bn(n.children,o,i,t);case iu:a=8,o|=8;break;case Fl:return e=xt(12,n,t,o|2),e.elementType=Fl,e.lanes=i,e;case Bl:return e=xt(13,n,t,o),e.elementType=Bl,e.lanes=i,e;case Ul:return e=xt(19,n,t,o),e.elementType=Ul,e.lanes=i,e;case Uf:return La(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ff:a=10;break e;case Bf:a=9;break e;case au:a=11;break e;case lu:a=14;break e;case on:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=xt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Bn(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function La(e,t,n,r){return e=xt(22,e,r,t),e.elementType=Uf,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function bl(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Uu(e,t,n,r,o,i,a,l,s){return e=new x1(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(i),e}function w1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dh(e){if(!e)return bn;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(st(n))return Np(e,n,t)}return t}function Oh(e,t,n,r,o,i,a,l,s){return e=Uu(n,r,!0,e,o,i,a,l,s),e.context=Dh(null),n=e.current,r=tt(),o=yn(n),i=Xt(r,o),i.callback=t!=null?t:null,mn(n,i,o),e.current.lanes=o,Vo(e,o,r),ut(e,r),e}function Ra(e,t,n,r){var o=t.current,i=tt(),a=yn(o);return n=Dh(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(o,t,a),e!==null&&(Pt(e,o,a,i),Li(e,o,a)),a}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hu(e,t){kd(e,t),(e=e.alternate)&&kd(e,t)}function A1(){return null}var _h=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vu(e){this._internalRoot=e}Pa.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Ra(e,t,null,null)};Pa.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kn(function(){Ra(null,e,null,null)}),t[Jt]=null}};function Pa(e){this._internalRoot=e}Pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=fp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&hp(e)}};function Wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sd(){}function k1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ia(a);i.call(u)}}var a=Oh(t,r,e,0,null,!1,!1,"",Sd);return e._reactRootContainer=a,e[Jt]=a.current,Po(e.nodeType===8?e.parentNode:e),Kn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ia(s);l.call(u)}}var s=Uu(e,0,!1,null,null,!1,!1,"",Sd);return e._reactRootContainer=s,e[Jt]=s.current,Po(e.nodeType===8?e.parentNode:e),Kn(function(){Ra(t,s,n,r)}),s}function Ia(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=ia(a);l.call(s)}}Ra(t,a,e,o)}else a=k1(n,t,e,o,r);return ia(a)}cp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lo(t.pendingLanes);n!==0&&(cu(t,n|1),ut(t,Ne()),(me&6)===0&&(zr=Ne()+500,Rn()))}break;case 13:Kn(function(){var r=qt(e,1);if(r!==null){var o=tt();Pt(r,e,1,o)}}),Hu(e,1)}};du=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=tt();Pt(t,e,134217728,n)}Hu(e,134217728)}};dp=function(e){if(e.tag===13){var t=yn(e),n=qt(e,t);if(n!==null){var r=tt();Pt(n,e,t,r)}Hu(e,t)}};fp=function(){return we};pp=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Jl=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ka(r);if(!o)throw Error(z(90));Vf(r),Wl(r,o)}}}break;case"textarea":Qf(e,n);break;case"select":t=n.value,t!=null&&Sr(e,!!n.multiple,t,!1)}};qf=Mu;ep=Kn;var S1={usingClientEntryPoint:!1,Events:[Qo,pr,ka,Zf,Jf,Mu]},qr={findFiberByHostInstance:On,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},b1={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rp(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||A1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pi.isDisabled&&pi.supportsFiber)try{ya=pi.inject(b1),Mt=pi}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S1;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(t))throw Error(z(200));return w1(e,t,null,n)};ht.createRoot=function(e,t){if(!Wu(e))throw Error(z(299));var n=!1,r="",o=_h;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Uu(e,1,!1,null,null,n,!1,r,o),e[Jt]=t.current,Po(e.nodeType===8?e.parentNode:e),new Vu(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=rp(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return Kn(e)};ht.hydrate=function(e,t,n){if(!Ta(t))throw Error(z(200));return Ia(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!Wu(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=_h;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Oh(t,null,e,1,n!=null?n:null,o,!1,i,a),e[Jt]=t.current,Po(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Pa(t)};ht.render=function(e,t,n){if(!Ta(t))throw Error(z(200));return Ia(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!Ta(e))throw Error(z(40));return e._reactRootContainer?(Kn(function(){Ia(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};ht.unstable_batchedUpdates=Mu;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ta(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Ia(e,t,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ht})(tu);var bd=tu.exports;Ml.createRoot=bd.createRoot,Ml.hydrateRoot=bd.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}var _e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_e||(_e={}));const Cd="popstate";function C1(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:l="",hash:s=""}=Bt(o.location.hash.substr(1));return Un("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:tn(i))}function r(o,i){$1(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return L1(t,n,r,e)}function $1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function E1(){return Math.random().toString(36).substr(2,8)}function $d(e){return{usr:e.state,key:e.key}}function Un(e,t,n,r){return n===void 0&&(n=null),Ee({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bt(t):t,{state:n,key:t&&t.key||r||E1()})}function tn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function jo(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:tn(e);return new URL(n,t)}function L1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=_e.Pop,s=null;function u(){l=_e.Pop,s&&s({action:l,location:c.location})}function d(v,m){l=_e.Push;let w=Un(c.location,v,m);n&&n(w,v);let S=$d(w),h=c.createHref(w);try{a.pushState(S,"",h)}catch{o.location.assign(h)}i&&s&&s({action:l,location:c.location})}function f(v,m){l=_e.Replace;let w=Un(c.location,v,m);n&&n(w,v);let S=$d(w),h=c.createHref(w);a.replaceState(S,"",h),i&&s&&s({action:l,location:c.location})}let c={get action(){return l},get location(){return e(o,a)},listen(v){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Cd,u),s=v,()=>{o.removeEventListener(Cd,u),s=null}},createHref(v){return t(o,v)},encodeLocation(v){let m=jo(tn(v));return Ee({},v,{pathname:m.pathname,search:m.search,hash:m.hash})},push:d,replace:f,go(v){return a.go(v)}};return c}var He;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(He||(He={}));function R1(e){return e.index===!0}function zh(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,o)=>{let i=[...t,o],a=typeof r.id=="string"?r.id:i.join("-");return pe(r.index!==!0||!r.children,"Cannot specify children on an index route"),pe(!n.has(a),'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),n.add(a),R1(r)?Ee({},r,{id:a}):Ee({},r,{id:a,children:r.children?zh(r.children,i,n):void 0})})}function uo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Bt(t):t,o=jh(r.pathname||"/",n);if(o==null)return null;let i=Mh(e);P1(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=j1(i[l],U1(o));return a}function Mh(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let a={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(pe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let l=wn([r,a.relativePath]),s=n.concat(a);o.children&&o.children.length>0&&(pe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Mh(o.children,t,s,l)),!(o.path==null&&!o.index)&&t.push({path:l,score:z1(l,o.index),routesMeta:s})}),t}function P1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:M1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const T1=/^:\w+$/,I1=3,N1=2,D1=1,O1=10,_1=-2,Ed=e=>e==="*";function z1(e,t){let n=e.split("/"),r=n.length;return n.some(Ed)&&(r+=_1),t&&(r+=N1),n.filter(o=>!Ed(o)).reduce((o,i)=>o+(T1.test(i)?I1:i===""?D1:O1),r)}function M1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function j1(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=F1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let f=l.route;i.push({params:r,pathname:wn([o,d.pathname]),pathnameBase:Q1(wn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=wn([o,d.pathnameBase]))}return i}function F1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=B1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let c=l[f]||"";a=i.slice(0,i.length-c.length).replace(/(.)\/+$/,"$1")}return u[d]=H1(l[f]||"",d),u},{}),pathname:i,pathnameBase:a,pattern:e}}function B1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function U1(e){try{return decodeURI(e)}catch(t){return Qu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function H1(e,t){try{return decodeURIComponent(e)}catch(n){return Qu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function jh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function V1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Bt(e):e;return{pathname:n?n.startsWith("/")?n:W1(n,t):t,search:K1(r),hash:G1(o)}}function W1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Cl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ku(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fh(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Bt(e):(o=Ee({},e),pe(!o.pathname||!o.pathname.includes("?"),Cl("?","pathname","search",o)),pe(!o.pathname||!o.pathname.includes("#"),Cl("#","pathname","hash",o)),pe(!o.search||!o.search.includes("#"),Cl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let c=a.split("/");for(;c[0]==="..";)c.shift(),f-=1;o.pathname=c.join("/")}l=f>=0?t[f]:"/"}let s=V1(o,l),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const wn=e=>e.join("/").replace(/\/\/+/g,"/"),Q1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ld extends Error{}class Y1{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,pe(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((o,i)=>n=i),this.controller=new AbortController;let r=()=>n(new Ld("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(t).reduce((o,i)=>{let[a,l]=i;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{})}trackPromise(t,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(t);let r=Promise.race([n,this.abortPromise]).then(o=>this.onSettle(r,t,null,o),o=>this.onSettle(r,t,o));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,o){if(this.controller.signal.aborted&&r instanceof Ld)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const i=this.subscriber;return r?(Object.defineProperty(t,"_error",{get:()=>r}),i&&i(!1),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>o}),i&&i(!1),o)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let t=this.subscriber;t&&t(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(o=>{this.subscribe(i=>{t.removeEventListener("abort",r),(i||this.done)&&o(i)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return pe(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,o]=n;return Object.assign(t,{[r]:Z1(o)})},{})}}function X1(e){return e instanceof Promise&&e._tracked===!0}function Z1(e){if(!X1(e))return e;if(e._error)throw e._error;return e._data}class Vr{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function Bh(e){return e instanceof Vr}const $l={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},J1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ev=!q1;function tv(e){pe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=zh(e.routes),n=null,r=new Set,o=null,i=null,a=null,l=!1,s=uo(t,e.history.location,e.basename),u=null;if(s==null){let{matches:C,route:I,error:D}=Nd(t);s=C,u={[I.id]:D}}let d=!s.some(C=>C.route.loader)||e.hydrationData!=null,f,c={historyAction:e.history.action,location:e.history.location,matches:s,initialized:d,navigation:$l,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||u,fetchers:new Map},v=_e.Pop,m=!1,w,S=!1,h=!1,p=[],g=[],x=new Map,b=0,$=-1,R=new Map,O=new Set,X=new Map,j=new Map;function ue(){return n=e.history.listen(C=>{let{action:I,location:D}=C;return E(I,D)}),c.initialized||E(_e.Pop,c.location),f}function ie(){n&&n(),r.clear(),w&&w.abort(),c.fetchers.forEach((C,I)=>P(I))}function ce(C){return r.add(C),()=>r.delete(C)}function ee(C){c=Ee({},c,C),r.forEach(I=>I(c))}function re(C,I){var D;let J=c.actionData!=null&&c.navigation.formMethod!=null&&c.navigation.state==="loading"&&((D=c.navigation.formAction)==null?void 0:D.split("?")[0])===C.pathname,q=I.loaderData?{loaderData:Ll(c.loaderData,I.loaderData,I.matches||[])}:{};ee(Ee({},J?{}:{actionData:null},I,q,{historyAction:v,location:C,initialized:!0,navigation:$l,revalidation:"idle",restoreScrollPosition:c.navigation.formData?!1:le(C,I.matches||c.matches),preventScrollReset:m})),S||v===_e.Pop||(v===_e.Push?e.history.push(C,C.state):v===_e.Replace&&e.history.replace(C,C.state)),v=_e.Pop,m=!1,S=!1,h=!1,p=[],g=[]}async function ke(C,I){if(typeof C=="number"){e.history.go(C);return}let{path:D,submission:J,error:q}=Rd(C,I),oe=Un(c.location,D,I&&I.state);oe=e.history.encodeLocation(oe);let B=(I&&I.replace)===!0||J!=null?_e.Replace:_e.Push,te=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0;return await E(B,oe,{submission:J,pendingError:q,preventScrollReset:te,replace:I&&I.replace})}function se(){if(V(),ee({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){E(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}E(v||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function E(C,I,D){w&&w.abort(),w=null,v=C,S=(D&&D.startUninterruptedRevalidation)===!0,ve(c.location,c.matches),m=(D&&D.preventScrollReset)===!0;let J=D&&D.overrideNavigation,q=uo(t,I,e.basename);if(!q){let{matches:Ke,route:er,error:Ht}=Nd(t);fe(),re(I,{matches:Ke,loaderData:{},errors:{[er.id]:Ht}});return}if(lv(c.location,I)){re(I,{matches:q});return}w=new AbortController;let oe=to(I,w.signal,D&&D.submission),B,te;if(D&&D.pendingError)te={[wr(q).route.id]:D.pendingError};else if(D&&D.submission){let Ke=await H(oe,I,D.submission,q,{replace:D.replace});if(Ke.shortCircuited)return;B=Ke.pendingActionData,te=Ke.pendingActionError,J=Ee({state:"loading",location:I},D.submission)}let{shortCircuited:ye,loaderData:xe,errors:ge}=await Y(oe,I,q,J,D&&D.submission,D&&D.replace,B,te);ye||(w=null,re(I,{matches:q,loaderData:xe,errors:ge}))}async function H(C,I,D,J,q){V();let oe=Ee({state:"submitting",location:I},D);ee({navigation:oe});let B,te=Md(J,I);if(!te.route.action)B=Dd(I);else if(B=await eo("action",C,te,J,f.basename),C.signal.aborted)return{shortCircuited:!0};if(Rr(B)){let ye=Ee({state:"loading",location:Un(c.location,B.location)},D);return await F(B,ye,q&&q.replace),{shortCircuited:!0}}if(wo(B)){let ye=wr(J,te.route.id);return(q&&q.replace)!==!0&&(v=_e.Push),{pendingActionError:{[ye.route.id]:B.error}}}if(Mn(B))throw new Error("defer() is not supported in actions");return{pendingActionData:{[te.route.id]:B.data}}}async function Y(C,I,D,J,q,oe,B,te){let ye=J;ye||(ye={state:"loading",location:I,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0});let[xe,ge]=Pd(c,D,q,I,h,p,g,B,te,X);if(fe(Ge=>!(D&&D.some(ot=>ot.route.id===Ge))||xe&&xe.some(ot=>ot.route.id===Ge)),xe.length===0&&ge.length===0)return re(I,{matches:D,loaderData:Ll(c.loaderData,{},D),errors:te||null,actionData:B||null}),{shortCircuited:!0};S||(ge.forEach(Ge=>{let[ot]=Ge,nr=c.fetchers.get(ot),Wr={state:"loading",data:nr&&nr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(ot,Wr)}),ee(Ee({navigation:ye,actionData:B||c.actionData||null},ge.length>0?{fetchers:new Map(c.fetchers)}:{}))),$=++b,ge.forEach(Ge=>{let[ot]=Ge;return x.set(ot,w)});let{results:Ke,loaderResults:er,fetcherResults:Ht}=await k(c.matches,D,xe,ge,C);if(C.signal.aborted)return{shortCircuited:!0};ge.forEach(Ge=>{let[ot]=Ge;return x.delete(ot)});let Pn=Od(Ke);if(Pn){let Ge=El(c,Pn);return await F(Pn,Ge,oe),{shortCircuited:!0}}let{loaderData:Ja,errors:Xo}=Id(c,D,xe,er,te,ge,Ht,j);j.forEach((Ge,ot)=>{Ge.subscribe(nr=>{(nr||Ge.done)&&j.delete(ot)})}),Q();let tr=ae($);return Ee({loaderData:Ja,errors:Xo},tr||ge.length>0?{fetchers:new Map(c.fetchers)}:{})}function de(C){return c.fetchers.get(C)||J1}function M(C,I,D,J){if(ev)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");x.has(C)&&U(C);let q=uo(t,D,e.basename);if(!q){_(C,I,new Vr(404,"Not Found",null));return}let{path:oe,submission:B}=Rd(D,J,!0),te=Md(q,oe);if(B){L(C,I,oe,te,q,B);return}X.set(C,[oe,te,q]),T(C,I,oe,te,q)}async function L(C,I,D,J,q,oe){if(V(),X.delete(C),!J.route.action){let{error:St}=Dd(D);_(C,I,St);return}let B=c.fetchers.get(C),te=Ee({state:"submitting"},oe,{data:B&&B.data});c.fetchers.set(C,te),ee({fetchers:new Map(c.fetchers)});let ye=new AbortController,xe=to(D,ye.signal,oe);x.set(C,ye);let ge=await eo("action",xe,J,q,f.basename);if(xe.signal.aborted){x.get(C)===ye&&x.delete(C);return}if(Rr(ge)){x.delete(C),O.add(C);let St=Ee({state:"loading"},oe,{data:void 0});c.fetchers.set(C,St),ee({fetchers:new Map(c.fetchers)});let Vt=Ee({state:"loading",location:Un(c.location,ge.location)},oe);await F(ge,Vt);return}if(wo(ge)){_(C,I,ge.error);return}Mn(ge)&&pe(!1,"defer() is not supported in actions");let Ke=c.navigation.location||c.location,er=to(Ke,ye.signal),Ht=c.navigation.state!=="idle"?uo(t,c.navigation.location,e.basename):c.matches;pe(Ht,"Didn't find any matches after fetcher action");let Pn=++b;R.set(C,Pn);let Ja=Ee({state:"loading",data:ge.data},oe);c.fetchers.set(C,Ja);let[Xo,tr]=Pd(c,Ht,oe,Ke,h,p,g,{[J.route.id]:ge.data},void 0,X);tr.filter(St=>{let[Vt]=St;return Vt!==C}).forEach(St=>{let[Vt]=St,gc=c.fetchers.get(Vt),im={state:"loading",data:gc&&gc.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(Vt,im),x.set(Vt,ye)}),ee({fetchers:new Map(c.fetchers)});let{results:Ge,loaderResults:ot,fetcherResults:nr}=await k(c.matches,Ht,Xo,tr,er);if(ye.signal.aborted)return;R.delete(C),x.delete(C),tr.forEach(St=>{let[Vt]=St;return x.delete(Vt)});let Wr=Od(Ge);if(Wr){let St=El(c,Wr);await F(Wr,St);return}let{loaderData:pc,errors:hc}=Id(c,c.matches,Xo,ot,void 0,tr,nr,j),rm={state:"idle",data:ge.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(C,rm);let om=ae(Pn);c.navigation.state==="loading"&&Pn>$?(pe(v,"Expected pending action"),w&&w.abort(),re(c.navigation.location,{matches:Ht,loaderData:pc,errors:hc,fetchers:new Map(c.fetchers)})):(ee(Ee({errors:hc,loaderData:Ll(c.loaderData,pc,Ht)},om?{fetchers:new Map(c.fetchers)}:{})),h=!1)}async function T(C,I,D,J,q){let oe=c.fetchers.get(C),B={state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,data:oe&&oe.data};c.fetchers.set(C,B),ee({fetchers:new Map(c.fetchers)});let te=new AbortController,ye=to(D,te.signal);x.set(C,te);let xe=await eo("loader",ye,J,q,f.basename);if(Mn(xe)&&(xe=await Wh(xe,ye.signal,!0)||xe),x.get(C)===te&&x.delete(C),ye.signal.aborted)return;if(Rr(xe)){let Ke=El(c,xe);await F(xe,Ke);return}if(wo(xe)){let Ke=wr(c.matches,I);c.fetchers.delete(C),ee({fetchers:new Map(c.fetchers),errors:{[Ke.route.id]:xe.error}});return}pe(!Mn(xe),"Unhandled fetcher deferred data");let ge={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(C,ge),ee({fetchers:new Map(c.fetchers)})}async function F(C,I,D){C.revalidate&&(h=!0),pe(I.location,"Expected a location on the redirect navigation"),w=null;let J=D===!0?_e.Replace:_e.Push;await E(J,I.location,{overrideNavigation:I})}async function k(C,I,D,J,q){let oe=await Promise.all([...D.map(ye=>eo("loader",q,ye,I,f.basename)),...J.map(ye=>{let[,xe,ge,Ke]=ye;return eo("loader",to(xe,q.signal),ge,Ke,f.basename)})]),B=oe.slice(0,D.length),te=oe.slice(D.length);return await Promise.all([_d(C,D,B,q.signal,!1,c.loaderData),_d(C,J.map(ye=>{let[,,xe]=ye;return xe}),te,q.signal,!0)]),{results:oe,loaderResults:B,fetcherResults:te}}function V(){h=!0,p.push(...fe()),X.forEach((C,I)=>{x.has(I)&&(g.push(I),U(I))})}function _(C,I,D){let J=wr(c.matches,I);P(C),ee({errors:{[J.route.id]:D},fetchers:new Map(c.fetchers)})}function P(C){x.has(C)&&U(C),X.delete(C),R.delete(C),O.delete(C),c.fetchers.delete(C)}function U(C){let I=x.get(C);pe(I,"Expected fetch controller: "+C),I.abort(),x.delete(C)}function G(C){for(let I of C){let J={state:"idle",data:de(I).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(I,J)}}function Q(){let C=[];for(let I of O){let D=c.fetchers.get(I);pe(D,"Expected fetcher: "+I),D.state==="loading"&&(O.delete(I),C.push(I))}G(C)}function ae(C){let I=[];for(let[D,J]of R)if(J<C){let q=c.fetchers.get(D);pe(q,"Expected fetcher: "+D),q.state==="loading"&&(U(D),R.delete(D),I.push(D))}return G(I),I.length>0}function fe(C){let I=[];return j.forEach((D,J)=>{(!C||C(J))&&(D.cancel(),I.push(J),j.delete(J))}),I}function Z(C,I,D){if(o=C,a=I,i=D||(J=>J.key),!l&&c.navigation===$l){l=!0;let J=le(c.location,c.matches);J!=null&&ee({restoreScrollPosition:J})}return()=>{o=null,a=null,i=null}}function ve(C,I){if(o&&i&&a){let D=I.map(q=>zd(q,c.loaderData)),J=i(C,D)||C.key;o[J]=a()}}function le(C,I){if(o&&i&&a){let D=I.map(oe=>zd(oe,c.loaderData)),J=i(C,D)||C.key,q=o[J];if(typeof q=="number")return q}return null}return f={get basename(){return e.basename},get state(){return c},get routes(){return t},initialize:ue,subscribe:ce,enableScrollRestoration:Z,navigate:ke,fetch:M,revalidate:se,createHref:C=>e.history.createHref(C),getFetcher:de,deleteFetcher:P,dispose:ie,_internalFetchControllers:x,_internalActiveDeferreds:j},f}const nv=new Set(["POST","PUT","PATCH","DELETE"]);[...nv];function Rd(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:tn(e);if(!t||!("formMethod"in t)&&!("formData"in t))return{path:r};if(t.formMethod!=null&&t.formMethod!=="get")return{path:r,submission:{formMethod:t.formMethod,formAction:Vh(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData}};if(!t.formData)return{path:r};let o=Bt(r);try{let i=Hh(t.formData);n&&o.search&&Qh(o.search)&&i.append("index",""),o.search="?"+i}catch{return{path:r,error:new Vr(400,"Bad Request","Cannot submit binary form data using GET")}}return{path:tn(o)}}function El(e,t){let{formMethod:n,formAction:r,formEncType:o,formData:i}=e.navigation;return{state:"loading",location:Un(e.location,t.location),formMethod:n||void 0,formAction:r||void 0,formEncType:o||void 0,formData:i||void 0}}function rv(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Pd(e,t,n,r,o,i,a,l,s,u){let d=s?Object.values(s)[0]:l?Object.values(l)[0]:null,f=s?Object.keys(s)[0]:void 0,v=rv(t,f).filter((w,S)=>w.route.loader!=null&&(ov(e.loaderData,e.matches[S],w)||i.some(h=>h===w.route.id)||Td(e.location,e.matches[S],n,r,w,o,d))),m=[];return u&&u.forEach((w,S)=>{let[h,p,g]=w;a.includes(S)?m.push([S,h,p,g]):o&&Td(h,p,n,h,p,o,d)&&m.push([S,h,p,g])}),[v,m]}function ov(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Uh(e,t){let n=e.route.path;return e.pathname!==t.pathname||n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Td(e,t,n,r,o,i,a){let l=jo(e),s=t.params,u=jo(r),d=o.params,f=Uh(t,o)||l.toString()===u.toString()||l.search!==u.search||i;if(o.route.shouldRevalidate){let c=o.route.shouldRevalidate(Ee({currentUrl:l,currentParams:s,nextUrl:u,nextParams:d},n,{actionResult:a,defaultShouldRevalidate:f}));if(typeof c=="boolean")return c}return f}async function eo(e,t,n,r,o,i,a){i===void 0&&(i=!1),a===void 0&&(a=!1);let l,s,u,d=new Promise((c,v)=>u=v),f=()=>u();t.signal.addEventListener("abort",f);try{let c=n.route[e];pe(c,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),s=await Promise.race([c({request:t,params:n.params}),d])}catch(c){l=He.error,s=c}finally{t.signal.removeEventListener("abort",f)}if(s instanceof Response){let c=s.status;if(c>=300&&c<=399){let w=s.headers.get("Location");pe(w,"Redirects returned/thrown from loaders/actions must have a Location header");let S=r.slice(0,r.indexOf(n)+1),h=Ku(S).map(x=>x.pathnameBase),p=jo(t.url).pathname,g=Fh(w,h,p);if(pe(tn(g),"Unable to resolve redirect location: "+s.headers.get("Location")),o){let x=g.pathname;g.pathname=x==="/"?o:wn([o,x])}if(w=tn(g),i)throw s.headers.set("Location",w),s;return{type:He.redirect,status:c,location:w,revalidate:s.headers.get("X-Remix-Revalidate")!==null}}if(a)throw{type:l||He.data,response:s};let v,m=s.headers.get("Content-Type");return m&&m.startsWith("application/json")?v=await s.json():v=await s.text(),l===He.error?{type:l,error:new Vr(c,s.statusText,v),headers:s.headers}:{type:He.data,data:v,statusCode:s.status,headers:s.headers}}return l===He.error?{type:l,error:s}:s instanceof Y1?{type:He.deferred,deferredData:s}:{type:He.data,data:s}}function to(e,t,n){let r=jo(Vh(e)).toString(),o={signal:t};if(n){let{formMethod:i,formEncType:a,formData:l}=n;o.method=i.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?Hh(l):l}return new Request(r,o)}function Hh(e){let t=new URLSearchParams;for(let[n,r]of e.entries())pe(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(n,r);return t}function iv(e,t,n,r,o){let i={},a=null,l,s=!1,u={};return n.forEach((d,f)=>{let c=t[f].route.id;if(pe(!Rr(d),"Cannot handle redirect results in processLoaderData"),wo(d)){let v=wr(e,c),m=d.error;r&&(m=Object.values(r)[0],r=void 0),a=Object.assign(a||{},{[v.route.id]:m}),s||(s=!0,l=Bh(d.error)?d.error.status:500),d.headers&&(u[c]=d.headers)}else Mn(d)?(o&&o.set(c,d.deferredData),i[c]=d.deferredData.data):(i[c]=d.data,d.statusCode!=null&&d.statusCode!==200&&!s&&(l=d.statusCode),d.headers&&(u[c]=d.headers))}),r&&(a=r),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function Id(e,t,n,r,o,i,a,l){let{loaderData:s,errors:u}=iv(t,n,r,o,l);for(let d=0;d<i.length;d++){let[f,,c]=i[d];pe(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let v=a[d];if(wo(v)){let m=wr(e.matches,c.route.id);u&&u[m.route.id]||(u=Ee({},u,{[m.route.id]:v.error})),e.fetchers.delete(f)}else{if(Rr(v))throw new Error("Unhandled fetcher revalidation redirect");if(Mn(v))throw new Error("Unhandled fetcher deferred data");{let m={state:"idle",data:v.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};e.fetchers.set(f,m)}}}return{loaderData:s,errors:u}}function Ll(e,t,n){let r=Ee({},t);return n.forEach(o=>{let i=o.route.id;t[i]===void 0&&e[i]!==void 0&&(r[i]=e[i])}),r}function wr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function av(e,t,n){let r=e.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-"+t+"-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r,error:new Vr(t,n,null)}}function Nd(e){return av(e,404,"Not Found")}function Dd(e){let t=typeof e=="string"?e:tn(e);return console.warn("You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for "+("["+t+"]")),{type:He.error,error:new Vr(405,"Method Not Allowed","")}}function Od(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Rr(n))return n}}function Vh(e){let t=typeof e=="string"?Bt(e):e;return tn(Ee({},t,{hash:""}))}function lv(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Mn(e){return e.type===He.deferred}function wo(e){return e.type===He.error}function Rr(e){return(e&&e.type)===He.redirect}async function _d(e,t,n,r,o,i){for(let a=0;a<n.length;a++){let l=n[a],s=t[a],u=e.find(f=>f.route.id===s.route.id),d=u!=null&&!Uh(u,s)&&(i&&i[s.route.id])!==void 0;Mn(l)&&(o||d)&&await Wh(l,r,o).then(f=>{f&&(n[a]=f||n[a])})}}async function Wh(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:He.data,data:e.deferredData.unwrappedData}}catch(o){return{type:He.error,error:o}}return{type:He.data,data:e.deferredData.data}}}function Qh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function zd(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Md(e,t){let n=typeof t=="string"?Bt(t).search:t.search;if(e[e.length-1].route.index&&Qh(n||""))return e[e.length-1];let r=Ku(e);return r[r.length-1]}var Na={exports:{}},Da={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv=y.exports,uv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),dv=Object.prototype.hasOwnProperty,fv=sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pv={key:!0,ref:!0,__self:!0,__source:!0};function Kh(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)dv.call(t,r)&&!pv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:uv,type:e,key:i,ref:a,props:o,_owner:fv.current}}Da.Fragment=cv;Da.jsx=Kh;Da.jsxs=Kh;(function(e){e.exports=Da})(Na);const Gh=Na.exports.Fragment,A=Na.exports.jsx,ne=Na.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},aa.apply(this,arguments)}function hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const gv=typeof Object.is=="function"?Object.is:hv,{useState:mv,useEffect:vv,useLayoutEffect:yv,useDebugValue:xv}=zl;function wv(e,t,n){const r=t(),[{inst:o},i]=mv({inst:{value:r,getSnapshot:t}});return yv(()=>{o.value=r,o.getSnapshot=t,Rl(o)&&i({inst:o})},[e,r,t]),vv(()=>(Rl(o)&&i({inst:o}),e(()=>{Rl(o)&&i({inst:o})})),[e]),xv(r),r}function Rl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!gv(n,r)}catch{return!0}}function Av(e,t,n){return t()}const kv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sv=!kv,bv=Sv?Av:wv,Cv="useSyncExternalStore"in zl?(e=>e.useSyncExternalStore)(zl):bv,$v=y.exports.createContext(null),Yh=y.exports.createContext(null),Gu=y.exports.createContext(null),Xh=y.exports.createContext(null),Oa=y.exports.createContext(null),Go=y.exports.createContext({outlet:null,matches:[]}),Zh=y.exports.createContext(null);function _a(){return y.exports.useContext(Oa)!=null}function Yu(){return _a()||pe(!1),y.exports.useContext(Oa).location}function Jh(){_a()||pe(!1);let{basename:e,navigator:t}=y.exports.useContext(Xh),{matches:n}=y.exports.useContext(Go),{pathname:r}=Yu(),o=JSON.stringify(Ku(n).map(l=>l.pathnameBase)),i=y.exports.useRef(!1);return y.exports.useEffect(()=>{i.current=!0}),y.exports.useCallback(function(l,s){if(s===void 0&&(s={}),!i.current)return;if(typeof l=="number"){t.go(l);return}let u=Fh(l,JSON.parse(o),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:wn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,o,r])}const Ev=y.exports.createContext(null);function Lv(e){let t=y.exports.useContext(Go).outlet;return t&&A(Ev.Provider,{value:e,children:t})}function Rv(e,t){_a()||pe(!1);let n=y.exports.useContext(Gu),{matches:r}=y.exports.useContext(Go),o=r[r.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Yu(),s;if(t){var u;let m=typeof t=="string"?Bt(t):t;a==="/"||((u=m.pathname)==null?void 0:u.startsWith(a))||pe(!1),s=m}else s=l;let d=s.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",c=uo(e,{pathname:f}),v=Nv(c&&c.map(m=>Object.assign({},m,{params:Object.assign({},i,m.params),pathname:wn([a,m.pathname]),pathnameBase:m.pathnameBase==="/"?a:wn([a,m.pathnameBase])})),r,n||void 0);return t&&v?A(Oa.Provider,{value:{location:aa({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:_e.Pop},children:v}):v}function Pv(){let e=Ov(),t=Bh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return ne(Gh,{children:[A("h2",{children:"Unhandled Thrown Error!"}),A("h3",{style:{fontStyle:"italic"},children:t}),n?A("pre",{style:o,children:n}):null,A("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),ne("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",A("code",{style:i,children:"errorElement"})," props on\xA0",A("code",{style:i,children:"<Route>"})]})]})}class Tv extends y.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?A(Zh.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Iv(e){let{routeContext:t,match:n,children:r}=e,o=y.exports.useContext($v);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),A(Go.Provider,{value:t,children:r})}function Nv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||pe(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,l)=>{let s=a.route.id?o==null?void 0:o[a.route.id]:null,u=n?a.route.errorElement||A(Pv,{}):null,d=()=>A(Iv,{match:a,routeContext:{outlet:i,matches:t.concat(r.slice(0,l+1))},children:s?u:a.route.element!==void 0?a.route.element:i});return n&&(a.route.errorElement||l===0)?A(Tv,{location:n.location,component:u,error:s,children:d()}):d()},null)}var jd;(function(e){e.UseRevalidator="useRevalidator"})(jd||(jd={}));var Ts;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ts||(Ts={}));function Dv(e){let t=y.exports.useContext(Gu);return t||pe(!1),t}function Ov(){var e;let t=y.exports.useContext(Zh),n=Dv(Ts.UseRouteError),r=y.exports.useContext(Go),o=r.matches[r.matches.length-1];return t||(r||pe(!1),o.route.id||pe(!1),(e=n.errors)==null?void 0:e[o.route.id])}function _v(e){let{fallbackElement:t,router:n}=e,r=Cv(n.subscribe,()=>n.state,()=>n.state),o=y.exports.useMemo(()=>({createHref:n.createHref,go:a=>n.navigate(a),push:(a,l,s)=>n.navigate(a,{state:l,preventScrollReset:s==null?void 0:s.preventScrollReset}),replace:(a,l,s)=>n.navigate(a,{replace:!0,state:l,preventScrollReset:s==null?void 0:s.preventScrollReset})}),[n]),i=n.basename||"/";return A(Yh.Provider,{value:{router:n,navigator:o,static:!1,basename:i},children:A(Gu.Provider,{value:r,children:A(jv,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o,children:n.state.initialized?A(Fv,{}):t})})})}function zv(e){return Lv(e.context)}function Mv(e){pe(!1)}function jv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=_e.Pop,navigator:i,static:a=!1}=e;_a()&&pe(!1);let l=t.replace(/^\/*/,"/"),s=y.exports.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=Bt(r));let{pathname:u="/",search:d="",hash:f="",state:c=null,key:v="default"}=r,m=y.exports.useMemo(()=>{let w=jh(u,l);return w==null?null:{pathname:w,search:d,hash:f,state:c,key:v}},[l,u,d,f,c,v]);return m==null?null:A(Xh.Provider,{value:s,children:A(Oa.Provider,{children:n,value:{location:m,navigationType:o}})})}function Fv(e){let{children:t,location:n}=e,r=y.exports.useContext(Yh),o=r&&!t?r.router.routes:Is(t);return Rv(o,n)}var Fd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fd||(Fd={}));new Promise(()=>{});function Is(e,t){t===void 0&&(t=[]);let n=[];return y.exports.Children.forEach(e,(r,o)=>{if(!y.exports.isValidElement(r))return;if(r.type===y.exports.Fragment){n.push.apply(n,Is(r.props.children,t));return}r.type!==Mv&&pe(!1),!r.props.index||!r.props.children||pe(!1);let i=[...t,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Is(r.props.children,i)),n.push(a)}),n}function qh(e){return e.map(t=>{let n=aa({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=qh(n.children)),n})}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bv(e,t){var n;return tv({basename:t==null?void 0:t.basename,history:C1({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||((n=window)==null?void 0:n.__staticRouterHydrationData),routes:qh(e)}).initialize()}var Bd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Bd||(Bd={}));var Ud;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ud||(Ud={}));const Ns={};var za={exports:{}},Ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,Xu=Be?Symbol.for("react.element"):60103,Zu=Be?Symbol.for("react.portal"):60106,Ma=Be?Symbol.for("react.fragment"):60107,ja=Be?Symbol.for("react.strict_mode"):60108,Fa=Be?Symbol.for("react.profiler"):60114,Ba=Be?Symbol.for("react.provider"):60109,Ua=Be?Symbol.for("react.context"):60110,Ju=Be?Symbol.for("react.async_mode"):60111,Ha=Be?Symbol.for("react.concurrent_mode"):60111,Va=Be?Symbol.for("react.forward_ref"):60112,Wa=Be?Symbol.for("react.suspense"):60113,Uv=Be?Symbol.for("react.suspense_list"):60120,Qa=Be?Symbol.for("react.memo"):60115,Ka=Be?Symbol.for("react.lazy"):60116,Hv=Be?Symbol.for("react.block"):60121,Vv=Be?Symbol.for("react.fundamental"):60117,Wv=Be?Symbol.for("react.responder"):60118,Qv=Be?Symbol.for("react.scope"):60119;function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xu:switch(e=e.type,e){case Ju:case Ha:case Ma:case Fa:case ja:case Wa:return e;default:switch(e=e&&e.$$typeof,e){case Ua:case Va:case Ka:case Qa:case Ba:return e;default:return t}}case Zu:return t}}}function eg(e){return mt(e)===Ha}Ae.AsyncMode=Ju;Ae.ConcurrentMode=Ha;Ae.ContextConsumer=Ua;Ae.ContextProvider=Ba;Ae.Element=Xu;Ae.ForwardRef=Va;Ae.Fragment=Ma;Ae.Lazy=Ka;Ae.Memo=Qa;Ae.Portal=Zu;Ae.Profiler=Fa;Ae.StrictMode=ja;Ae.Suspense=Wa;Ae.isAsyncMode=function(e){return eg(e)||mt(e)===Ju};Ae.isConcurrentMode=eg;Ae.isContextConsumer=function(e){return mt(e)===Ua};Ae.isContextProvider=function(e){return mt(e)===Ba};Ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xu};Ae.isForwardRef=function(e){return mt(e)===Va};Ae.isFragment=function(e){return mt(e)===Ma};Ae.isLazy=function(e){return mt(e)===Ka};Ae.isMemo=function(e){return mt(e)===Qa};Ae.isPortal=function(e){return mt(e)===Zu};Ae.isProfiler=function(e){return mt(e)===Fa};Ae.isStrictMode=function(e){return mt(e)===ja};Ae.isSuspense=function(e){return mt(e)===Wa};Ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ma||e===Ha||e===Fa||e===ja||e===Wa||e===Uv||typeof e=="object"&&e!==null&&(e.$$typeof===Ka||e.$$typeof===Qa||e.$$typeof===Ba||e.$$typeof===Ua||e.$$typeof===Va||e.$$typeof===Vv||e.$$typeof===Wv||e.$$typeof===Qv||e.$$typeof===Hv)};Ae.typeOf=mt;(function(e){e.exports=Ae})(za);function Kv(e){function t(M,L,T,F,k){for(var V=0,_=0,P=0,U=0,G,Q,ae=0,fe=0,Z,ve=Z=G=0,le=0,C=0,I=0,D=0,J=T.length,q=J-1,oe,B="",te="",ye="",xe="",ge;le<J;){if(Q=T.charCodeAt(le),le===q&&_+U+P+V!==0&&(_!==0&&(Q=_===47?10:47),U=P=V=0,J++,q++),_+U+P+V===0){if(le===q&&(0<C&&(B=B.replace(c,"")),0<B.trim().length)){switch(Q){case 32:case 9:case 59:case 13:case 10:break;default:B+=T.charAt(le)}Q=59}switch(Q){case 123:for(B=B.trim(),G=B.charCodeAt(0),Z=1,D=++le;le<J;){switch(Q=T.charCodeAt(le)){case 123:Z++;break;case 125:Z--;break;case 47:switch(Q=T.charCodeAt(le+1)){case 42:case 47:e:{for(ve=le+1;ve<q;++ve)switch(T.charCodeAt(ve)){case 47:if(Q===42&&T.charCodeAt(ve-1)===42&&le+2!==ve){le=ve+1;break e}break;case 10:if(Q===47){le=ve+1;break e}}le=ve}}break;case 91:Q++;case 40:Q++;case 34:case 39:for(;le++<q&&T.charCodeAt(le)!==Q;);}if(Z===0)break;le++}switch(Z=T.substring(D,le),G===0&&(G=(B=B.replace(f,"").trim()).charCodeAt(0)),G){case 64:switch(0<C&&(B=B.replace(c,"")),Q=B.charCodeAt(1),Q){case 100:case 109:case 115:case 45:C=L;break;default:C=ke}if(Z=t(L,C,Z,Q,k+1),D=Z.length,0<E&&(C=n(ke,B,I),ge=l(3,Z,C,L,ce,ie,D,Q,k,F),B=C.join(""),ge!==void 0&&(D=(Z=ge.trim()).length)===0&&(Q=0,Z="")),0<D)switch(Q){case 115:B=B.replace($,a);case 100:case 109:case 45:Z=B+"{"+Z+"}";break;case 107:B=B.replace(p,"$1 $2"),Z=B+"{"+Z+"}",Z=re===1||re===2&&i("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=B+Z,F===112&&(Z=(te+=Z,""))}else Z="";break;default:Z=t(L,n(L,B,I),Z,F,k+1)}ye+=Z,Z=I=C=ve=G=0,B="",Q=T.charCodeAt(++le);break;case 125:case 59:if(B=(0<C?B.replace(c,""):B).trim(),1<(D=B.length))switch(ve===0&&(G=B.charCodeAt(0),G===45||96<G&&123>G)&&(D=(B=B.replace(" ",":")).length),0<E&&(ge=l(1,B,L,M,ce,ie,te.length,F,k,F))!==void 0&&(D=(B=ge.trim()).length)===0&&(B="\0\0"),G=B.charCodeAt(0),Q=B.charCodeAt(1),G){case 0:break;case 64:if(Q===105||Q===99){xe+=B+T.charAt(le);break}default:B.charCodeAt(D-1)!==58&&(te+=o(B,G,Q,B.charCodeAt(2)))}I=C=ve=G=0,B="",Q=T.charCodeAt(++le)}}switch(Q){case 13:case 10:_===47?_=0:1+G===0&&F!==107&&0<B.length&&(C=1,B+="\0"),0<E*Y&&l(0,B,L,M,ce,ie,te.length,F,k,F),ie=1,ce++;break;case 59:case 125:if(_+U+P+V===0){ie++;break}default:switch(ie++,oe=T.charAt(le),Q){case 9:case 32:if(U+V+_===0)switch(ae){case 44:case 58:case 9:case 32:oe="";break;default:Q!==32&&(oe=" ")}break;case 0:oe="\\0";break;case 12:oe="\\f";break;case 11:oe="\\v";break;case 38:U+_+V===0&&(C=I=1,oe="\f"+oe);break;case 108:if(U+_+V+ee===0&&0<ve)switch(le-ve){case 2:ae===112&&T.charCodeAt(le-3)===58&&(ee=ae);case 8:fe===111&&(ee=fe)}break;case 58:U+_+V===0&&(ve=le);break;case 44:_+P+U+V===0&&(C=1,oe+="\r");break;case 34:case 39:_===0&&(U=U===Q?0:U===0?Q:U);break;case 91:U+_+P===0&&V++;break;case 93:U+_+P===0&&V--;break;case 41:U+_+V===0&&P--;break;case 40:if(U+_+V===0){if(G===0)switch(2*ae+3*fe){case 533:break;default:G=1}P++}break;case 64:_+P+U+V+ve+Z===0&&(Z=1);break;case 42:case 47:if(!(0<U+V+P))switch(_){case 0:switch(2*Q+3*T.charCodeAt(le+1)){case 235:_=47;break;case 220:D=le,_=42}break;case 42:Q===47&&ae===42&&D+2!==le&&(T.charCodeAt(D+2)===33&&(te+=T.substring(D,le+1)),oe="",_=0)}}_===0&&(B+=oe)}fe=ae,ae=Q,le++}if(D=te.length,0<D){if(C=L,0<E&&(ge=l(2,te,C,M,ce,ie,D,F,k,F),ge!==void 0&&(te=ge).length===0))return xe+te+ye;if(te=C.join(",")+"{"+te+"}",re*ee!==0){switch(re!==2||i(te,2)||(ee=0),ee){case 111:te=te.replace(x,":-moz-$1")+te;break;case 112:te=te.replace(g,"::-webkit-input-$1")+te.replace(g,"::-moz-$1")+te.replace(g,":-ms-input-$1")+te}ee=0}}return xe+te+ye}function n(M,L,T){var F=L.trim().split(S);L=F;var k=F.length,V=M.length;switch(V){case 0:case 1:var _=0;for(M=V===0?"":M[0]+" ";_<k;++_)L[_]=r(M,L[_],T).trim();break;default:var P=_=0;for(L=[];_<k;++_)for(var U=0;U<V;++U)L[P++]=r(M[U]+" ",F[_],T).trim()}return L}function r(M,L,T){var F=L.charCodeAt(0);switch(33>F&&(F=(L=L.trim()).charCodeAt(0)),F){case 38:return L.replace(h,"$1"+M.trim());case 58:return M.trim()+L.replace(h,"$1"+M.trim());default:if(0<1*T&&0<L.indexOf("\f"))return L.replace(h,(M.charCodeAt(0)===58?"":"$1")+M.trim())}return M+L}function o(M,L,T,F){var k=M+";",V=2*L+3*T+4*F;if(V===944){M=k.indexOf(":",9)+1;var _=k.substring(M,k.length-1).trim();return _=k.substring(0,M).trim()+_+";",re===1||re===2&&i(_,1)?"-webkit-"+_+_:_}if(re===0||re===2&&!i(k,1))return k;switch(V){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ue,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return _=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+_+"-webkit-"+k+"-ms-flex-pack"+_+k;case 1005:return m.test(k)?k.replace(v,":-webkit-")+k.replace(v,":-moz-")+k:k;case 1e3:switch(_=k.substring(13).trim(),L=_.indexOf("-")+1,_.charCodeAt(0)+_.charCodeAt(L)){case 226:_=k.replace(b,"tb");break;case 232:_=k.replace(b,"tb-rl");break;case 220:_=k.replace(b,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+_+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(L=(k=M).length-10,_=(k.charCodeAt(L)===33?k.substring(0,L):k).substring(M.indexOf(":",7)+1).trim(),V=_.charCodeAt(0)+(_.charCodeAt(7)|0)){case 203:if(111>_.charCodeAt(8))break;case 115:k=k.replace(_,"-webkit-"+_)+";"+k;break;case 207:case 102:k=k.replace(_,"-webkit-"+(102<V?"inline-":"")+"box")+";"+k.replace(_,"-webkit-"+_)+";"+k.replace(_,"-ms-"+_+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return _=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+_+"-ms-flex-"+_+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(O,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(O,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(j.test(M)===!0)return(_=M.substring(M.indexOf(":")+1)).charCodeAt(0)===115?o(M.replace("stretch","fill-available"),L,T,F).replace(":fill-available",":stretch"):k.replace(_,"-webkit-"+_)+k.replace(_,"-moz-"+_.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,T+F===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+k}return k}function i(M,L){var T=M.indexOf(L===1?":":"{"),F=M.substring(0,L!==3?T:10);return T=M.substring(T+1,M.length-1),H(L!==2?F:F.replace(X,"$1"),T,L)}function a(M,L){var T=o(L,L.charCodeAt(0),L.charCodeAt(1),L.charCodeAt(2));return T!==L+";"?T.replace(R," or ($1)").substring(4):"("+L+")"}function l(M,L,T,F,k,V,_,P,U,G){for(var Q=0,ae=L,fe;Q<E;++Q)switch(fe=se[Q].call(d,M,ae,T,F,k,V,_,P,U,G)){case void 0:case!1:case!0:case null:break;default:ae=fe}if(ae!==L)return ae}function s(M){switch(M){case void 0:case null:E=se.length=0;break;default:if(typeof M=="function")se[E++]=M;else if(typeof M=="object")for(var L=0,T=M.length;L<T;++L)s(M[L]);else Y=!!M|0}return s}function u(M){return M=M.prefix,M!==void 0&&(H=null,M?typeof M!="function"?re=1:(re=2,H=M):re=0),u}function d(M,L){var T=M;if(33>T.charCodeAt(0)&&(T=T.trim()),de=T,T=[de],0<E){var F=l(-1,L,T,T,ce,ie,0,0,0,0);F!==void 0&&typeof F=="string"&&(L=F)}var k=t(ke,T,L,0,0);return 0<E&&(F=l(-2,k,T,T,ce,ie,k.length,0,0,0),F!==void 0&&(k=F)),de="",ee=0,ie=ce=1,k}var f=/^\0+/g,c=/[\0\r\f]/g,v=/: */g,m=/zoo|gra/,w=/([,: ])(transform)/g,S=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,x=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,O=/-self|flex-/g,X=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,ue=/([^-])(image-set\()/,ie=1,ce=1,ee=0,re=1,ke=[],se=[],E=0,H=null,Y=0,de="";return d.use=s,d.set=u,e!==void 0&&u(e),d}var Gv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Yv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Xv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Hd=Yv(function(e){return Xv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),qu=za.exports,Zv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ec={};ec[qu.ForwardRef]=qv;ec[qu.Memo]=tg;function Vd(e){return qu.isMemo(e)?tg:ec[e.$$typeof]||Zv}var ey=Object.defineProperty,ty=Object.getOwnPropertyNames,Wd=Object.getOwnPropertySymbols,ny=Object.getOwnPropertyDescriptor,ry=Object.getPrototypeOf,Qd=Object.prototype;function ng(e,t,n){if(typeof t!="string"){if(Qd){var r=ry(t);r&&r!==Qd&&ng(e,r,n)}var o=ty(t);Wd&&(o=o.concat(Wd(t)));for(var i=Vd(e),a=Vd(t),l=0;l<o.length;++l){var s=o[l];if(!Jv[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var u=ny(t,s);try{ey(e,s,u)}catch{}}}}return e}var oy=ng;function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Kd=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ds=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!za.exports.typeOf(e)},la=Object.freeze([]),An=Object.freeze({});function Mr(e){return typeof e=="function"}function Gd(e){return e.displayName||e.name||"Component"}function tc(e){return e&&typeof e.styledComponentId=="string"}var jr=typeof Ns<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",nc=typeof window<"u"&&"HTMLElement"in window,iy=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Ns<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof Ns<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),ay={};function Gn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ly=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Gn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Oi=new Map,sa=new Map,Ao=1,hi=function(e){if(Oi.has(e))return Oi.get(e);for(;sa.has(Ao);)Ao++;var t=Ao++;return Oi.set(e,t),sa.set(t,e),t},sy=function(e){return sa.get(e)},uy=function(e,t){t>=Ao&&(Ao=t+1),Oi.set(e,t),sa.set(t,e)},cy="style["+jr+'][data-styled-version="5.3.6"]',dy=new RegExp("^"+jr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),fy=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},py=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(dy);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(uy(u,s),fy(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},hy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},rg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(jr))return d}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(jr,"active"),r.setAttribute("data-styled-version","5.3.6");var a=hy();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},gy=function(){function e(n){var r=this.element=rg(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}Gn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),my=function(){function e(n){var r=this.element=rg(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),vy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Yd=nc,yy={isServer:!nc,useCSSOMInjection:!iy},ua=function(){function e(n,r,o){n===void 0&&(n=An),r===void 0&&(r={}),this.options=Lt({},yy,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&nc&&Yd&&(Yd=!1,function(i){for(var a=document.querySelectorAll(cy),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(jr)!=="active"&&(py(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return hi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Lt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new vy(a):i?new gy(a):new my(a),new ly(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(hi(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(hi(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(hi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=sy(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var d=jr+".g"+a+'[id="'+l+'"]',f="";s!==void 0&&s.forEach(function(c){c.length>0&&(f+=c+",")}),i+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),xy=/(a)(d)/gi,Xd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Os(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Xd(t%52)+n;return(Xd(t%52)+n).replace(xy,"$1-$2")}var Ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},og=function(e){return Ar(5381,e)};function ig(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Mr(n)&&!tc(n))return!1}return!0}var wy=og("5.3.6"),Ay=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ig(t),this.componentId=n,this.baseHash=Ar(wy,n),this.baseStyle=r,ua.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Yn(this.rules,t,n,r).join(""),l=Os(Ar(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,d=Ar(this.baseHash,r.hash),f="",c=0;c<u;c++){var v=this.rules[c];if(typeof v=="string")f+=v;else if(v){var m=Yn(v,t,n,r),w=Array.isArray(m)?m.join(""):m;d=Ar(d,w+c),f+=w}}if(f){var S=Os(d>>>0);if(!n.hasNameForId(o,S)){var h=r(f,"."+S,void 0,o);n.insertRules(o,S,h)}i.push(S)}}return i.join(" ")},e}(),ky=/^\s*\/\/.*$/gm,Sy=[":","[",".","#"];function by(e){var t,n,r,o,i=e===void 0?An:e,a=i.options,l=a===void 0?An:a,s=i.plugins,u=s===void 0?la:s,d=new Kv(l),f=[],c=function(w){function S(h){if(h)try{w(h+"}")}catch{}}return function(h,p,g,x,b,$,R,O,X,j){switch(h){case 1:if(X===0&&p.charCodeAt(0)===64)return w(p+";"),"";break;case 2:if(O===0)return p+"/*|*/";break;case 3:switch(O){case 102:case 112:return w(g[0]+p),"";default:return p+(j===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(S)}}}(function(w){f.push(w)}),v=function(w,S,h){return S===0&&Sy.indexOf(h[n.length])!==-1||h.match(o)?w:"."+t};function m(w,S,h,p){p===void 0&&(p="&");var g=w.replace(ky,""),x=S&&h?h+" "+S+" { "+g+" }":g;return t=p,n=S,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(h||!S?"":S,x)}return d.use([].concat(u,[function(w,S,h){w===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,v))},c,function(w){if(w===-2){var S=f;return f=[],S}}])),m.hash=u.length?u.reduce(function(w,S){return S.name||Gn(15),Ar(w,S.name)},5381).toString():"",m}var ag=De.createContext();ag.Consumer;var lg=De.createContext(),Cy=(lg.Consumer,new ua),_s=by();function sg(){return y.exports.useContext(ag)||Cy}function ug(){return y.exports.useContext(lg)||_s}var $y=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=_s);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Gn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=_s),this.name+t.hash},e}(),Ey=/([A-Z])/,Ly=/([A-Z])/g,Ry=/^ms-/,Py=function(e){return"-"+e.toLowerCase()};function Zd(e){return Ey.test(e)?e.replace(Ly,Py).replace(Ry,"-ms-"):e}var Jd=function(e){return e==null||e===!1||e===""};function Yn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Yn(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Jd(e))return"";if(tc(e))return"."+e.styledComponentId;if(Mr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Yn(s,t,n,r)}var u;return e instanceof $y?n?(e.inject(n,r),e.getName(r)):e:Ds(e)?function d(f,c){var v,m,w=[];for(var S in f)f.hasOwnProperty(S)&&!Jd(f[S])&&(Array.isArray(f[S])&&f[S].isCss||Mr(f[S])?w.push(Zd(S)+":",f[S],";"):Ds(f[S])?w.push.apply(w,d(f[S],S)):w.push(Zd(S)+": "+(v=S,(m=f[S])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||v in Gv?String(m).trim():m+"px")+";"));return c?[c+" {"].concat(w,["}"]):w}(e):e.toString()}var qd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Mr(e)||Ds(e)?qd(Yn(Kd(la,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:qd(Yn(Kd(e,n)))}var cg=function(e,t,n){return n===void 0&&(n=An),e.theme!==n.theme&&e.theme||t||n.theme},Ty=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Iy=/(^-|-$)/g;function Pl(e){return e.replace(Ty,"-").replace(Iy,"")}var dg=function(e){return Os(og(e)>>>0)};function gi(e){return typeof e=="string"&&!0}var zs=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ny=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Dy(e,t,n){var r=e[n];zs(t)&&zs(r)?fg(r,t):e[n]=t}function fg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(zs(a))for(var l in a)Ny(l)&&Dy(e,a[l],l)}return e}var Fo=De.createContext();Fo.Consumer;function Oy(e){var t=y.exports.useContext(Fo),n=y.exports.useMemo(function(){return function(r,o){if(!r)return Gn(14);if(Mr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Gn(8):o?Lt({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?De.createElement(Fo.Provider,{value:n},e.children):null}var Tl={};function pg(e,t,n){var r=tc(e),o=!gi(e),i=t.attrs,a=i===void 0?la:i,l=t.componentId,s=l===void 0?function(p,g){var x=typeof p!="string"?"sc":Pl(p);Tl[x]=(Tl[x]||0)+1;var b=x+"-"+dg("5.3.6"+x+Tl[x]);return g?g+"-"+b:b}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(p){return gi(p)?"styled."+p:"Styled("+Gd(p)+")"}(e):u,f=t.displayName&&t.componentId?Pl(t.displayName)+"-"+t.componentId:t.componentId||s,c=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(p,g,x){return e.shouldForwardProp(p,g,x)&&t.shouldForwardProp(p,g,x)}:e.shouldForwardProp);var m,w=new Ay(n,f,r?e.componentStyle:void 0),S=w.isStatic&&a.length===0,h=function(p,g){return function(x,b,$,R){var O=x.attrs,X=x.componentStyle,j=x.defaultProps,ue=x.foldedComponentIds,ie=x.shouldForwardProp,ce=x.styledComponentId,ee=x.target,re=function(F,k,V){F===void 0&&(F=An);var _=Lt({},k,{theme:F}),P={};return V.forEach(function(U){var G,Q,ae,fe=U;for(G in Mr(fe)&&(fe=fe(_)),fe)_[G]=P[G]=G==="className"?(Q=P[G],ae=fe[G],Q&&ae?Q+" "+ae:Q||ae):fe[G]}),[_,P]}(cg(b,y.exports.useContext(Fo),j)||An,b,O),ke=re[0],se=re[1],E=function(F,k,V,_){var P=sg(),U=ug(),G=k?F.generateAndInjectStyles(An,P,U):F.generateAndInjectStyles(V,P,U);return G}(X,R,ke),H=$,Y=se.$as||b.$as||se.as||b.as||ee,de=gi(Y),M=se!==b?Lt({},b,{},se):b,L={};for(var T in M)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?L.as=M[T]:(ie?ie(T,Hd,Y):!de||Hd(T))&&(L[T]=M[T]));return b.style&&se.style!==b.style&&(L.style=Lt({},b.style,{},se.style)),L.className=Array.prototype.concat(ue,ce,E!==ce?E:null,b.className,se.className).filter(Boolean).join(" "),L.ref=H,y.exports.createElement(Y,L)}(m,p,g,S)};return h.displayName=d,(m=De.forwardRef(h)).attrs=c,m.componentStyle=w,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):la,m.styledComponentId=f,m.target=r?e.target:e,m.withComponent=function(p){var g=t.componentId,x=function($,R){if($==null)return{};var O,X,j={},ue=Object.keys($);for(X=0;X<ue.length;X++)O=ue[X],R.indexOf(O)>=0||(j[O]=$[O]);return j}(t,["componentId"]),b=g&&g+"-"+(gi(p)?p:Pl(Gd(p)));return pg(p,Lt({},x,{attrs:c,componentId:b}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?fg({},e.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},o&&oy(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Ms=function(e){return function t(n,r,o){if(o===void 0&&(o=An),!za.exports.isValidElementType(r))return Gn(1,String(r));var i=function(){return n(r,o,W.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Lt({},o,{},a))},i.attrs=function(a){return t(n,r,Lt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(pg,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ms[e]=Ms(e)});var _y=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=ig(n),ua.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(Yn(this.rules,r,o,i).join(""),""),l=this.componentId+n;o.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&ua.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function zy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=W.apply(void 0,[e].concat(n)),i="sc-global-"+dg(JSON.stringify(o)),a=new _y(o,i);function l(u){var d=sg(),f=ug(),c=y.exports.useContext(Fo),v=y.exports.useRef(d.allocateGSInstance(i)).current;return d.server&&s(v,u,d,c,f),y.exports.useLayoutEffect(function(){if(!d.server)return s(v,u,d,c,f),function(){return a.removeStyles(v,d)}},[v,u,d,c,f]),null}function s(u,d,f,c,v){if(a.isStatic)a.renderStyles(u,ay,f,v);else{var m=Lt({},d,{theme:cg(d,c,l.defaultProps)});a.renderStyles(u,m,f,v)}}return De.memo(l)}const N=Ms;var My={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},jy=My;const Fy="modulepreload",By=function(e){return"/"+e},ef={},dn=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=By(i),i in ef)return;ef[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===i&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Fy,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function Uy(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}const hg=e=>document.body.setAttribute("data-loading",e);var Hy=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const rc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",oc="inset 2px 2px 3px rgba(0,0,0,0.2)",It=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Nt=({background:e="material",color:t="materialText"}={})=>W`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Yo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>W`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Xn=()=>W`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,or={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Vy=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?rc:!1,o?oc:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),Ie=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return W`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[or[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[or[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[or[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[or[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>Vy({theme:r,topLeftInner:or[t][n.topLeftInner],bottomRightInner:or[t][n.bottomRightInner],hasShadow:o})};
  `},Fr=()=>W`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,Wy=e=>Buffer.from(e).toString("base64"),Qy=typeof btoa<"u"?btoa:Wy,mi=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Qy(n)})`},ic=(e="default")=>W`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Yo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Nt()}
    ${e==="flat"?Xn():Ie({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${Nt()}
    ${e==="flat"?Xn():Ie({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?Ie({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>mi(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>mi(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>mi(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>mi(t.materialText,0)};
  }
`,Ky=N.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Gy=y.exports.forwardRef(({children:e,underline:t=!0,...n},r)=>A(Ky,{ref:r,underline:t,...n,children:e}));Gy.displayName="Anchor";const Yy=N.header`
  ${Ie()};
  ${Nt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,gg=y.exports.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>A(Yy,{fixed:t,position:t!==!1?n:void 0,ref:o,...r,children:e}));gg.displayName="AppBar";const qn=()=>{};function jn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Xy(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function tf(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Xy(t)))}function Cn(e){return typeof e=="number"?`${e}px`:e}const Zy=N.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Jy=N.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,mg=y.exports.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...a},l)=>A(Zy,{noBorder:n,ref:l,size:Cn(r),square:o,src:i,...a,children:i?A(Jy,{src:i,alt:e}):t}));mg.displayName="Avatar";const We={sm:"28px",md:"36px",lg:"44px"},qy=W`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>We[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?We[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Ga=N.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?W`
          ${Xn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&Fr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?W`
          ${Nt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&Ie({style:"buttonThin"})}
          }
          &:active {
            ${!t&&Ie({style:"buttonThinPressed"})}
          }
          ${e&&Ie({style:"buttonThinPressed"})}
          ${t&&It()}
        `:W`
          ${Nt()};
          border: none;
          ${t&&It()}
          ${e?Yo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?W`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:W`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Ie(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&Ie({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&Fr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${qy}
`,Bo=y.exports.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:s=qn,primary:u=!1,variant:d="default",...f},c)=>A(Ga,{active:l,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:c,size:i,square:a,type:r,variant:d,...f,children:n}));Bo.displayName="Button";function $n({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const a=o!==void 0,[l,s]=y.exports.useState(e),u=y.exports.useCallback(d=>{a||s(d)},[a]);if(a&&typeof t!="function"&&!r){const d=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(d)}return[a?o:l,u]}const js=N.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>We[e.size]};
  width: ${e=>e.square?We[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>We[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&It()}
`,Fs=y.exports.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...a},l)=>A(js,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a,children:r}));Fs.displayName="MenuListItem";const vg=N.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Ie({style:"window"})}
  ${Nt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;vg.displayName="MenuList";const Ft=20,ca=N.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Ft}px;
  height: ${Ft}px;
  opacity: 0;
  z-index: -1;
`,ac=N.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&It()}

  ${js} & {
    margin: 0;
    height: 100%;
  }
  ${js}:hover & {
    ${({$disabled:e,theme:t})=>!e&&W`
        color: ${t.materialTextInvert};
      `};
  }
`,lc=N.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ca}:focus ~ & {
    ${Fr}
  }
  ${ca}:not(:disabled) ~ &:active {
    ${Fr}
  }
`,Ut=N.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${oc};`}
  }
`,ex=N.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${ic()}
`,yg=y.exports.forwardRef(({children:e,shadow:t=!0,...n},r)=>A(Ut,{ref:r,shadow:t,...n,children:A(ex,{children:e})}));yg.displayName="ScrollView";const xg=W`
  width: ${Ft}px;
  height: ${Ft}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,tx=N(Ut)`
  ${xg}
  width: ${Ft}px;
  height: ${Ft}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,nx=N.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${xg}
  width: ${Ft-4}px;
  height: ${Ft-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,rx=N.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,ox=N.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Yo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,ix={flat:nx,default:tx},ax=y.exports.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:a=qn,style:l={},value:s,variant:u="default",...d},f)=>{var c;const[v,m]=$n({defaultValue:n,onChange:a,readOnly:(c=d.readOnly)!==null&&c!==void 0?c:r,value:e}),w=y.exports.useCallback(p=>{const g=p.target.checked;m(g),a(p)},[a,m]),S=ix[u];let h=null;return o?h=ox:v&&(h=rx),ne(ac,{$disabled:r,className:t,style:l,children:[A(ca,{disabled:r,onChange:r?void 0:w,readOnly:r,type:"checkbox",value:s,checked:v,"data-indeterminate":o,ref:f,...d}),A(S,{$disabled:r,role:"presentation",children:h&&A(h,{$disabled:r,variant:u})}),i&&A(lc,{children:i})]})});ax.displayName="Checkbox";const sc=N.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${Cn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${Cn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;sc.displayName="Separator";const lx=N(Ga)`
  padding-left: 8px;
`,sx=N(sc)`
  height: 21px;
  position: relative;
  top: 0;
`,wg=N.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,ux=N.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?W`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:W`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${wg}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Fr}
    outline-offset: -8px;
  }
`,cx=N.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?W`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:W`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,dx=y.exports.forwardRef(({value:e,defaultValue:t,onChange:n=qn,disabled:r=!1,variant:o="default",...i},a)=>{var l;const[s,u]=$n({defaultValue:t,onChange:n,readOnly:(l=i.readOnly)!==null&&l!==void 0?l:r,value:e});return ne(lx,{disabled:r,as:"div",variant:o,size:"md",children:[A(wg,{onChange:f=>{const c=f.target.value;u(c),n(f)},readOnly:r,disabled:r,value:s!=null?s:"#008080",type:"color",ref:a,...i}),A(ux,{$disabled:r,color:s!=null?s:"#008080",role:"presentation"}),o==="default"&&A(sx,{orientation:"vertical"}),A(cx,{$disabled:r,variant:o})]})});dx.displayName="ColorInput";const fx=N.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>W`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Yo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,nf=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],px=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function hx({digit:e=0,pixelSize:t=2,...n}){const r=px[Number(e)].map((o,i)=>o?`${nf[i]} active`:nf[i]);return A(fx,{pixelSize:t,...n,children:r.map((o,i)=>A("span",{className:o},i))})}const gx=N.div`
  ${Ie({style:"status"})}
  display: inline-flex;
  background: #000000;
`,mx={sm:1,md:2,lg:3,xl:4},vx=y.exports.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=y.exports.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return A(gx,{ref:o,...r,children:i.map((a,l)=>A(hx,{digit:a,pixelSize:mx[n]},l))})});vx.displayName="Counter";const Ag=W`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${We.md};
`,yx=N(Ut).attrs({"data-testid":"variant-default"})`
  ${Ag}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,xx=N.div.attrs({"data-testid":"variant-flat"})`
  ${Xn()}
  ${Ag}
  position: relative;
`,kg=W`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&It()}
`,wx=N.input`
  ${kg}
  padding: 0 8px;
`,Ax=N.textarea`
  ${kg}
  padding: 8px;
  resize: none;
  ${({variant:e})=>ic(e)}
`,Sg=y.exports.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=qn,shadow:o=!0,style:i,variant:a="default",...l},s)=>{const u=a==="flat"?xx:yx,d=y.exports.useMemo(()=>{var f;return l.multiline?A(Ax,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:a,...l}):A(wx,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(f=l.type)!==null&&f!==void 0?f:"text",variant:a,...l})},[t,r,l,s,a]);return A(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i,children:d})});Sg.displayName="TextInput";const kx=N.div`
  display: inline-flex;
  align-items: center;
`,Bs=N(Bo)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?W`
          height: calc(50% - 1px);
        `:W`
          height: 50%;
        `}
`,Sx=N.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?W`
          height: calc(${We.md} - 4px);
        `:W`
          height: ${We.md};
          margin-left: 2px;
        `}
`,rf=N.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?W`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:W`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${Bs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?W`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:W`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,bg=y.exports.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:a,step:l=1,style:s,value:u,variant:d="default",width:f,...c},v)=>{const[m,w]=$n({defaultValue:t,onChange:i,readOnly:a,value:u}),S=y.exports.useCallback($=>{const R=parseFloat($.target.value);w(R)},[w]),h=y.exports.useCallback($=>{const R=jn(parseFloat(((m!=null?m:0)+$).toFixed(2)),o!=null?o:null,r!=null?r:null);w(R),i==null||i(R)},[r,o,i,w,m]),p=y.exports.useCallback(()=>{m!==void 0&&(i==null||i(m))},[i,m]),g=y.exports.useCallback(()=>{h(l)},[h,l]),x=y.exports.useCallback(()=>{h(-l)},[h,l]),b=d==="flat"?"flat":"raised";return ne(kx,{className:e,style:{...s,width:f!==void 0?Cn(f):"auto"},...c,children:[A(Sg,{value:m,variant:d,onChange:S,disabled:n,type:"number",readOnly:a,ref:v,fullWidth:!0,onBlur:p}),ne(Sx,{variant:d,children:[A(Bs,{"data-testid":"increment",variant:b,disabled:n||a,onClick:g,children:A(rf,{invert:!0})}),A(Bs,{"data-testid":"decrement",variant:b,disabled:n||a,onClick:x,children:A(rf,{})})]})]})});bg.displayName="NumberInput";function bx(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const Cg=e=>y.exports.useMemo(()=>e!=null?e:bx(),[e]),$g=W`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Eg=W`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,uc=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Cx=N.div`
  ${$g}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${uc}:focus & {
    ${Eg}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,Lg=W`
  height: ${We.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?It():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,$x=N(Ut)`
  ${Lg}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Ex=N.div`
  ${Xn()}
  ${Lg}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,Lx=N.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${$g}
  cursor: pointer;
  &:disabled {
    ${It()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Rg=N(Ga).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?W`
          height: 100%;
          margin-right: 0;
        `:W`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,Rx=N.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${Rg}:active & {
    margin-top: 2px;
  }
`,Px=N.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${rc};
  ${({variant:e="default"})=>e==="flat"?W`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:W`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>ic(e)}
`,Tx=N.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${We.md} - 4px);
  line-height: calc(${We.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?Eg:""}
  user-select: none;
`,Ix=[],Pg=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=Ix,readOnly:a,style:l,value:s,variant:u,width:d})=>{var f;const c=y.exports.useMemo(()=>i.filter(Boolean),[i]),[v,m]=$n({defaultValue:t!=null?t:(f=c==null?void 0:c[0])===null||f===void 0?void 0:f.value,onChange:o,readOnly:a,value:s}),w=!(n||a),S=y.exports.useMemo(()=>({className:e,style:{...l,width:d}}),[e,l,d]),h=y.exports.useMemo(()=>A(Rg,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised",children:A(Rx,{"data-testid":"select-icon",$disabled:n})}),[n,r,u]),p=y.exports.useMemo(()=>u==="flat"?Ex:$x,[u]);return y.exports.useMemo(()=>({isEnabled:w,options:c,value:v,setValue:m,wrapperProps:S,DropdownButton:h,Wrapper:p}),[h,p,w,c,m,v,S])},Nx={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Dx=1e3,Ox=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:a,open:l,options:s,readOnly:u,value:d,selectRef:f,setValue:c,wrapperRef:v})=>{const m=y.exports.useRef(null),w=y.exports.useRef([]),S=y.exports.useRef(0),h=y.exports.useRef(0),p=y.exports.useRef(),g=y.exports.useRef("search"),x=y.exports.useRef(""),b=y.exports.useRef(),[$,R]=$n({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:u,value:l,valuePropName:"open"}),O=y.exports.useMemo(()=>{const P=s.findIndex(U=>U.value===d);return S.current=jn(P,0,null),s[P]},[s,d]),[X,j]=y.exports.useState(s[0]),ue=y.exports.useCallback(P=>{const U=m.current,G=w.current[P];if(!G||!U){p.current=P;return}p.current=void 0;const Q=U.clientHeight,ae=U.scrollTop,fe=U.scrollTop+Q,Z=G.offsetTop,ve=G.offsetHeight,le=G.offsetTop+G.offsetHeight;Z<ae&&U.scrollTo(0,Z),le>fe&&U.scrollTo(0,Z-Q+ve),G.focus({preventScroll:!0})},[m]),ie=y.exports.useCallback((P,{scroll:U}={})=>{var G;const Q=s.length-1;let ae;switch(P){case"first":{ae=0;break}case"last":{ae=Q;break}case"next":{ae=jn(h.current+1,0,Q);break}case"previous":{ae=jn(h.current-1,0,Q);break}case"selected":{ae=jn((G=S.current)!==null&&G!==void 0?G:0,0,Q);break}default:ae=P}h.current=ae,j(s[ae]),U&&ue(ae)},[h,s,ue]),ce=y.exports.useCallback(({fromEvent:P})=>{R(!0),ie("selected",{scroll:!0}),a==null||a({fromEvent:P})},[ie,a,R]),ee=y.exports.useCallback(()=>{g.current="search",x.current="",clearTimeout(b.current)},[]),re=y.exports.useCallback(({focusSelect:P,fromEvent:U})=>{var G;n==null||n({fromEvent:U}),R(!1),j(s[0]),ee(),p.current=void 0,P&&((G=f.current)===null||G===void 0||G.focus())},[ee,n,s,f,R]),ke=y.exports.useCallback(({fromEvent:P})=>{$?re({focusSelect:!1,fromEvent:P}):ce({fromEvent:P})},[re,ce,$]),se=y.exports.useCallback((P,{fromEvent:U})=>{S.current!==P&&(S.current=P,c(s[P].value),t==null||t(s[P],{fromEvent:U}))},[t,s,c]),E=y.exports.useCallback(({focusSelect:P,fromEvent:U})=>{se(h.current,{fromEvent:U}),re({focusSelect:P,fromEvent:U})},[re,se]),H=y.exports.useCallback((P,{fromEvent:U,select:G})=>{var Q;switch(g.current==="cycleFirstLetter"&&P!==x.current&&(g.current="search"),P===x.current?g.current="cycleFirstLetter":x.current+=P,g.current){case"search":{let ae=s.findIndex(fe=>{var Z;return((Z=fe.label)===null||Z===void 0?void 0:Z.toLocaleUpperCase().indexOf(x.current))===0});ae<0&&(ae=s.findIndex(fe=>{var Z;return((Z=fe.label)===null||Z===void 0?void 0:Z.toLocaleUpperCase().indexOf(P))===0}),x.current=P),ae>=0&&(G?se(ae,{fromEvent:U}):ie(ae,{scroll:!0}));break}case"cycleFirstLetter":{const ae=G?(Q=S.current)!==null&&Q!==void 0?Q:-1:h.current;let fe=s.findIndex((Z,ve)=>{var le;return ve>ae&&((le=Z.label)===null||le===void 0?void 0:le.toLocaleUpperCase().indexOf(P))===0});fe<0&&(fe=s.findIndex(Z=>{var ve;return((ve=Z.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(P))===0})),fe>=0&&(G?se(fe,{fromEvent:U}):ie(fe,{scroll:!0}));break}}clearTimeout(b.current),b.current=setTimeout(()=>{g.current==="search"&&(x.current="")},Dx)},[ie,s,se]),Y=y.exports.useCallback(P=>{var U;P.button===0&&(P.preventDefault(),(U=f.current)===null||U===void 0||U.focus(),ke({fromEvent:P}),i==null||i(P))},[i,f,ke]),de=y.exports.useCallback(P=>{E({focusSelect:!0,fromEvent:P})},[E]),M=y.exports.useCallback(P=>{const{altKey:U,code:G,ctrlKey:Q,metaKey:ae,shiftKey:fe}=P,{ARROW_DOWN:Z,ARROW_UP:ve,END:le,ENTER:C,ESC:I,HOME:D,SPACE:J,TAB:q}=Nx,oe=U||Q||ae||fe;if(!(G===q&&(U||Q||ae)||G!==q&&oe))switch(G){case Z:{if(P.preventDefault(),!$){ce({fromEvent:P});return}ie("next",{scroll:!0});break}case ve:{if(P.preventDefault(),!$){ce({fromEvent:P});return}ie("previous",{scroll:!0});break}case le:{if(P.preventDefault(),!$){ce({fromEvent:P});return}ie("last",{scroll:!0});break}case C:{if(!$)return;P.preventDefault(),E({focusSelect:!0,fromEvent:P});break}case I:{if(!$)return;P.preventDefault(),re({focusSelect:!0,fromEvent:P});break}case D:{if(P.preventDefault(),!$){ce({fromEvent:P});return}ie("first",{scroll:!0});break}case J:{P.preventDefault(),$?E({focusSelect:!0,fromEvent:P}):ce({fromEvent:P});break}case q:{if(!$)return;fe||P.preventDefault(),E({focusSelect:!fe,fromEvent:P});break}default:!oe&&G.match(/^Key/)&&(P.preventDefault(),P.stopPropagation(),H(G.replace(/^Key/,""),{select:!$,fromEvent:P}))}},[ie,re,$,ce,H,E]),L=y.exports.useCallback(P=>{M(P),o==null||o(P)},[M,o]),T=y.exports.useCallback(P=>{ie(P)},[ie]),F=y.exports.useCallback(P=>{$||(ee(),e==null||e(P))},[ee,e,$]),k=y.exports.useCallback(P=>{ee(),r==null||r(P)},[ee,r]),V=y.exports.useCallback(P=>{m.current=P,p.current!==void 0&&ue(p.current)},[ue]),_=y.exports.useCallback((P,U)=>{w.current[U]=P,p.current===U&&ue(p.current)},[ue]);return y.exports.useEffect(()=>{if(!$)return()=>{};const P=U=>{var G;const Q=U.target;!((G=v.current)===null||G===void 0)&&G.contains(Q)||(U.preventDefault(),re({focusSelect:!1,fromEvent:U}))};return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[re,$,v]),y.exports.useMemo(()=>({activeOption:X,handleActivateOptionIndex:T,handleBlur:F,handleButtonKeyDown:L,handleDropdownKeyDown:M,handleFocus:k,handleMouseDown:Y,handleOptionClick:de,handleSetDropdownRef:V,handleSetOptionRef:_,open:$,selectedOption:O}),[X,T,F,L,k,M,Y,de,V,_,$,O])},_x=y.exports.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:a,value:l,variant:s,width:u,...d},f)=>{const{isEnabled:c,options:v,setValue:m,value:w,DropdownButton:S,Wrapper:h}=Pg({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:l,variant:s}),p=y.exports.useCallback(g=>{const x=v.find(b=>b.value===g.target.value);!x||(m(x.value),r==null||r(x,{fromEvent:g}))},[r,v,m]);return A(h,{className:e,style:{...a,width:u},children:ne(uc,{children:[A(Lx,{...d,disabled:n,onChange:c?p:qn,ref:f,value:w,children:v.map((g,x)=>{var b;return A("option",{value:g.value,children:(b=g.label)!==null&&b!==void 0?b:g.value},`${g.value}-${x}`)})}),S]})})});_x.displayName="SelectNative";function zx({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:a}){const l=y.exports.useCallback(()=>{e(n)},[e,n]),s=y.exports.useCallback(d=>{a(d,n)},[n,a]),u=Cg();return A(Tx,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:l,ref:s,role:"option",tabIndex:0,children:o.label})}function Mx({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:s,name:u,onBlur:d,onChange:f,onClose:c,onFocus:v,onKeyDown:m,onMouseDown:w,onOpen:S,open:h,options:p,readOnly:g,shadow:x=!0,style:b,variant:$="default",value:R,width:O="auto",...X},j){const{isEnabled:ue,options:ie,setValue:ce,value:ee,wrapperProps:re,DropdownButton:ke,Wrapper:se}=Pg({className:n,defaultValue:r,disabled:o,native:!1,onChange:f,options:p,style:b,readOnly:g,value:R,variant:$,width:O}),E=y.exports.useRef(null),H=y.exports.useRef(null),Y=y.exports.useRef(null),{activeOption:de,handleActivateOptionIndex:M,handleBlur:L,handleButtonKeyDown:T,handleDropdownKeyDown:F,handleFocus:k,handleMouseDown:V,handleOptionClick:_,handleSetDropdownRef:P,handleSetOptionRef:U,open:G,selectedOption:Q}=Ox({onBlur:d,onChange:f,onClose:c,onFocus:v,onKeyDown:m,onMouseDown:w,onOpen:S,open:h,options:ie,value:ee,selectRef:H,setValue:ce,wrapperRef:Y});y.exports.useImperativeHandle(j,()=>({focus:C=>{var I;(I=H.current)===null||I===void 0||I.focus(C)},node:E.current,value:String(ee)}),[ee]);const ae=y.exports.useMemo(()=>Q?typeof i=="function"?i(Q):Q.label:"",[i,Q]),fe=ue?1:void 0,Z=y.exports.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),ve=Cg(),le=y.exports.useMemo(()=>ie.map((C,I)=>{const D=`${ee}-${I}`;return A(zx,{activateOptionIndex:M,active:C===de,index:I,onClick:_,option:C,selected:C===Q,setRef:U},D)}),[de,M,_,U,ie,Q,ee]);return ne(se,{...re,$disabled:o,ref:Y,shadow:x,style:{...b,width:O},children:[A("input",{name:u,ref:E,type:"hidden",value:String(ee),...a}),ne(uc,{"aria-disabled":o,"aria-expanded":G,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t!=null?t:l,"aria-owns":ue&&G?ve:void 0,onBlur:L,onFocus:k,onKeyDown:T,onMouseDown:ue?V:w,ref:H,role:"button",tabIndex:fe,...X,children:[A(Cx,{children:ae}),ke]}),ue&&G&&A(Px,{id:ve,onKeyDown:F,ref:P,role:"listbox",style:Z,tabIndex:0,variant:$,children:le})]})}const cc=y.exports.forwardRef(Mx);cc.displayName="Select";const jx=N.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,da=y.exports.forwardRef(function({children:t,noPadding:n=!1,...r},o){return A(jx,{noPadding:n,ref:o,...r,children:t})});da.displayName="Toolbar";const Fx=N.div`
  padding: 16px;
`,Tg=y.exports.forwardRef(function({children:t,...n},r){return A(Fx,{ref:r,...n,children:t})});Tg.displayName="WindowContent";const Bx=N.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?W`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:W`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Ga} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Ig=y.exports.forwardRef(function({active:t=!0,children:n,...r},o){return A(Bx,{active:t,ref:o,...r,children:n})});Ig.displayName="WindowHeader";const Ux=N.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ie({style:"window"})}
  ${Nt()}
`,Hx=N.span`
  ${({theme:e})=>W`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Ng=y.exports.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>ne(Ux,{ref:i,shadow:r,...o,children:[e,t&&A(Hx,{"data-testid":"resizeHandle",ref:n})]}));Ng.displayName="Window";const Vx=N(yg)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Wx=N.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,Qx=N.div`
  display: flex;
  flex-wrap: wrap;
`,Wt=N.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Kx=N.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,Gx=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Yx(e,t){return new Date(e,t+1,0).getDate()}function Xx(e,t,n){return new Date(e,t,n).getDay()}function Zx(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const Jx=y.exports.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[a,l]=y.exports.useState(()=>Zx(t)),{year:s,month:u,day:d}=a,f=y.exports.useCallback(({value:S})=>{l(h=>({...h,month:S}))},[]),c=y.exports.useCallback(S=>{l(h=>({...h,year:S}))},[]),v=y.exports.useCallback(S=>{l(h=>({...h,day:S}))},[]),m=y.exports.useCallback(()=>{const S=[a.year,a.month+1,a.day].map(h=>String(h).padStart(2,"0")).join("-");n==null||n(S)},[a.day,a.month,a.year,n]),w=y.exports.useMemo(()=>{const S=Array.from({length:42}),h=Xx(s,u,1);let p=d;const g=Yx(s,u);return p=p<g?p:g,S.forEach((x,b)=>{if(b>=h&&b<g+h){const $=b-h+1;S[b]=A(Wt,{onClick:()=>{v($)},children:A(Kx,{active:$===p,children:$})},b)}else S[b]=A(Wt,{},b)}),S},[d,v,u,s]);return ne(Ng,{className:e,ref:i,shadow:o,style:{margin:20},children:[ne(Ig,{children:[A("span",{role:"img","aria-label":"\u{1F4C6}",children:"\u{1F4C6}"}),"Date"]}),ne(Tg,{children:[ne(da,{noPadding:!0,style:{justifyContent:"space-between"},children:[A(cc,{options:Gx,value:u,onChange:f,width:128,menuMaxHeight:200}),A(bg,{value:s,onChange:c,width:100})]}),ne(Vx,{children:[ne(Wx,{children:[A(Wt,{children:"S"}),A(Wt,{children:"M"}),A(Wt,{children:"T"}),A(Wt,{children:"W"}),A(Wt,{children:"T"}),A(Wt,{children:"F"}),A(Wt,{children:"S"})]}),A(Qx,{children:w})]}),ne(da,{noPadding:!0,style:{justifyContent:"space-between"},children:[A(Bo,{fullWidth:!0,onClick:r,disabled:!r,children:"Cancel"}),A(Bo,{fullWidth:!0,onClick:n?m:void 0,disabled:!n,children:"OK"})]})]})]})});Jx.displayName="DatePicker";const qx=e=>{switch(e){case"status":case"well":return W`
        ${Ie({style:"status"})}
      `;case"window":case"outside":return W`
        ${Ie({style:"window"})}
      `;case"field":return W`
        ${Ie({style:"field"})}
      `;default:return W`
        ${Ie()}
      `}},ew=N.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>qx(e)}
  ${({variant:e})=>Nt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,tw=y.exports.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>A(ew,{ref:o,shadow:t,variant:n,...r,children:e}));tw.displayName="Frame";const nw=N.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&W`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&It()}
`,rw=N.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,ow=y.exports.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>ne(nw,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o,children:[e&&A(rw,{variant:n,children:e}),r]}));ow.displayName="GroupBox";const Us=N.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Cn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Us.displayName="Handle";const iw="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",aw=N.div`
  display: inline-block;
  height: ${({size:e})=>Cn(e)};
  width: ${({size:e})=>Cn(e)};
`,lw=N.span`
  display: block;
  background: ${iw};
  background-size: cover;
  width: 100%;
  height: 100%;
`,sw=y.exports.forwardRef(({size:e=30,...t},n)=>A(aw,{size:e,ref:n,...t,children:A(lw,{})}));sw.displayName="Hourglass";const uw=N.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,cw=N.div`
  position: relative;
`,dw=N.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,fw=N(Ut).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,pw=N.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,hw=y.exports.forwardRef(({backgroundStyles:e,children:t,...n},r)=>A(uw,{ref:r,...n,children:ne(cw,{children:[A(dw,{children:A(fw,{style:e,children:t})}),A(pw,{})]})}));hw.displayName="Monitor";const gw=N.div`
  display: inline-block;
  height: ${We.md};
  width: 100%;
`,mw=N(Ut)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Dg=W`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,vw=N.div`
  position: relative;
  top: 4px;
  ${Dg}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,yw=N.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Dg}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,xw=N.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Og=17,ww=N.span`
  display: inline-block;
  width: ${Og}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,_g=y.exports.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const a=e?null:`${n}%`,l=y.exports.useRef(null),[s,u]=y.exports.useState([]),d=y.exports.useCallback(()=>{if(!l.current||n===void 0)return;const f=l.current.getBoundingClientRect().width,c=Math.round(n/100*f/Og);u(Array.from({length:c}))},[n]);return y.exports.useEffect(()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[d]),A(gw,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o,children:A(mw,{variant:r,shadow:t,children:r==="default"?ne(Gh,{children:[A(vw,{"data-testid":"defaultProgress1",children:a}),A(yw,{"data-testid":"defaultProgress2",value:n,children:a})]}):A(xw,{ref:l,"data-testid":"tileProgress",children:s.map((f,c)=>A(ww,{},c))})})})});_g.displayName="ProgressBar";const zg=W`
  width: ${Ft}px;
  height: ${Ft}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Aw=N(Ut)`
  ${zg}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,kw=N.div`
  ${Xn()}
  ${zg}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,Sw=N.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,bw={flat:kw,default:Aw},Cw=y.exports.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:a="default",...l},s)=>{const u=bw[a];return ne(ac,{$disabled:n,className:t,style:i,children:[A(u,{$disabled:n,role:"presentation",children:e&&A(Sw,{$disabled:n,variant:a})}),A(ca,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...l}),r&&A(lc,{children:r})]})});Cw.displayName="Radio";const $w=typeof window<"u"?y.exports.useLayoutEffect:y.exports.useEffect;function Tn(e){const t=y.exports.useRef(e);return $w(()=>{t.current=e}),y.exports.useCallback((...n)=>(0,t.current)(...n),[])}function of(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function af(e,t){return y.exports.useMemo(()=>e==null&&t==null?null:n=>{of(e,n),of(t,n)},[e,t])}let Ya=!0,Hs=!1,lf;const Ew={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Lw(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&Ew[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Rw(e){e.metaKey||e.altKey||e.ctrlKey||(Ya=!0)}function Il(){Ya=!1}function Pw(){this.visibilityState==="hidden"&&Hs&&(Ya=!0)}function Tw(e){e.addEventListener("keydown",Rw,!0),e.addEventListener("mousedown",Il,!0),e.addEventListener("pointerdown",Il,!0),e.addEventListener("touchstart",Il,!0),e.addEventListener("visibilitychange",Pw,!0)}function Iw(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Ya||Lw(t)}function Nw(){Hs=!0,window.clearTimeout(lf),lf=window.setTimeout(()=>{Hs=!1},100)}function Dw(){const e=y.exports.useCallback(t=>{const n=tu.exports.findDOMNode(t);n!=null&&Tw(n.ownerDocument)},[]);return{isFocusVisible:Iw,onBlurVisible:Nw,ref:e}}function Ow(e,t,n){return(n-t)*e+t}function vi(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function yi(e){return e&&e.ownerDocument||document}function _w(e,t){var n;const{index:r}=(n=e.reduce((o,i,a)=>{const l=Math.abs(t-i);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!==null&&n!==void 0?n:{};return r!=null?r:-1}const zw=N.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?W`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:W`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,Mg=()=>W`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?W`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:W`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,Mw=N(Ut)`
  ${Mg()}
`,jw=N(Ut)`
  ${Mg()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,Fw=N.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?W`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:W`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?W`
          ${Xn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:W`
          ${Nt()}
          ${Ie()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Yo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,kr=6,Bw=N.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?W`
          right: ${-kr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${kr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:W`
          bottom: ${-kr}px;
          height: ${kr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&W`
      ${It()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,Uw=N.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?W`
          transform: translate(${kr+2}px, ${kr+1}px);
        `:W`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Hw=y.exports.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:s,orientation:u="horizontal",size:d="100%",step:f=1,value:c,variant:v="default",...m},w)=>{const S=v==="flat"?jw:Mw,h=u==="vertical",[p=o,g]=$n({defaultValue:e,onChange:a!=null?a:l,value:c}),{isFocusVisible:x,onBlurVisible:b,ref:$}=Dw(),[R,O]=y.exports.useState(!1),X=y.exports.useRef(),j=y.exports.useRef(null),ue=af($,X),ie=af(w,ue),ce=Tn(L=>{x(L)&&O(!0)}),ee=Tn(()=>{R!==!1&&(O(!1),b())}),re=y.exports.useRef(),ke=y.exports.useMemo(()=>n===!0&&Number.isFinite(f)?[...Array(Math.round((r-o)/f)+1)].map((L,T)=>({label:void 0,value:o+f*T})):Array.isArray(n)?n:[],[n,r,o,f]),se=Tn(L=>{const T=(r-o)/10,F=ke.map(_=>_.value),k=F.indexOf(p);let V=0;switch(L.key){case"Home":V=o;break;case"End":V=r;break;case"PageUp":f&&(V=p+T);break;case"PageDown":f&&(V=p-T);break;case"ArrowRight":case"ArrowUp":f?V=p+f:V=F[k+1]||F[F.length-1];break;case"ArrowLeft":case"ArrowDown":f?V=p-f:V=F[k-1]||F[0];break;default:return}L.preventDefault(),f&&(V=tf(V,f,o)),V=jn(V,o,r),g(V),O(!0),a==null||a(V),l==null||l(V)}),E=y.exports.useCallback(L=>{if(!X.current)return 0;const T=X.current.getBoundingClientRect();let F;h?F=(T.bottom-L.y)/T.height:F=(L.x-T.left)/T.width;let k;if(k=Ow(F,o,r),f)k=tf(k,f,o);else{const V=ke.map(P=>P.value),_=_w(V,k);k=V[_]}return k=jn(k,o,r),k},[ke,r,o,f,h]),H=Tn(L=>{var T;const F=vi(L,re.current);if(!F)return;const k=E(F);(T=j.current)===null||T===void 0||T.focus(),g(k),O(!0),a==null||a(k)}),Y=Tn(L=>{const T=vi(L,re.current);if(!T)return;const F=E(T);l==null||l(F),re.current=void 0;const k=yi(X.current);k.removeEventListener("mousemove",H),k.removeEventListener("mouseup",Y),k.removeEventListener("touchmove",H),k.removeEventListener("touchend",Y)}),de=Tn(L=>{var T;s==null||s(L),L.preventDefault(),(T=j.current)===null||T===void 0||T.focus(),O(!0);const F=vi(L,re.current);if(F){const V=E(F);g(V),a==null||a(V)}const k=yi(X.current);k.addEventListener("mousemove",H),k.addEventListener("mouseup",Y)}),M=Tn(L=>{var T;L.preventDefault();const F=L.changedTouches[0];F!=null&&(re.current=F.identifier),(T=j.current)===null||T===void 0||T.focus(),O(!0);const k=vi(L,re.current);if(k){const _=E(k);g(_),a==null||a(_)}const V=yi(X.current);V.addEventListener("touchmove",H),V.addEventListener("touchend",Y)});return y.exports.useEffect(()=>{const{current:L}=X;L==null||L.addEventListener("touchstart",M);const T=yi(L);return()=>{L==null||L.removeEventListener("touchstart",M),T.removeEventListener("mousemove",H),T.removeEventListener("mouseup",Y),T.removeEventListener("touchmove",H),T.removeEventListener("touchend",Y)}},[Y,H,M]),ne(zw,{$disabled:t,hasMarks:Boolean(ke.length),isFocused:R,onMouseDown:de,orientation:u,ref:ie,size:Cn(d),...m,children:[A("input",{disabled:t,name:i,type:"hidden",value:p!=null?p:0}),ke&&ke.map(L=>A(Bw,{$disabled:t,"data-testid":"tick",orientation:u,style:{[h?"bottom":"left"]:`${(L.value-o)/(r-o)*100}%`},children:L.label&&A(Uw,{"aria-hidden":!0,"data-testid":"mark",orientation:u,children:L.label})},L.value/(r-o)*100)),A(S,{orientation:u,variant:v}),A(Fw,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":p,onBlur:ee,onFocus:ce,onKeyDown:se,orientation:u,ref:j,role:"slider",style:{[h?"bottom":"left"]:`${(h?-100:0)+100*(p-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:v})]})});Hw.displayName="Slider";const Vw=N.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${oc};
  overflow-y: auto;
`,Ww=y.exports.forwardRef(function({children:t,...n},r){return A(Vw,{ref:r,...n,children:t})});Ww.displayName="TableBody";const Qw=N.td`
  padding: 0 8px;
`,Kw=y.exports.forwardRef(function({children:t,...n},r){return A(Qw,{ref:r,...n,children:t})});Kw.displayName="TableDataCell";const Gw=N.thead`
  display: table-header-group;
`,Yw=y.exports.forwardRef(function({children:t,...n},r){return A(Gw,{ref:r,...n,children:t})});Yw.displayName="TableHead";const Xw=N.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ie()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&W`
      &:active {
        &:before {
          ${Ie({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&It()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&It()}
  }
`,Zw=y.exports.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=qn,sort:i,...a},l){return A(Xw,{$disabled:t,"aria-disabled":t,"aria-sort":i==="asc"?"ascending":i==="desc"?"descending":void 0,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:l,...a,children:A("div",{children:n})})});Zw.displayName="TableHeadCell";const Jw=N.tr`
  color: inherit;
  display: table-row;
  height: calc(${We.md} - 2px);
  line-height: calc(${We.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,qw=y.exports.forwardRef(function({children:t,...n},r){return A(Jw,{ref:r,...n,children:t})});qw.displayName="TableRow";const eA=N.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,tA=N(Ut)`
  &:before {
    box-shadow: none;
  }
`,nA=y.exports.forwardRef(({children:e,...t},n)=>A(tA,{children:A(eA,{ref:n,...t,children:e})}));nA.displayName="Table";const rA=N.button`
  ${Nt()}
  ${Ie()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${We.md};
  line-height: ${We.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Fr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${We.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,oA=y.exports.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>A(rA,{"aria-selected":n,selected:n,onClick:a=>t==null?void 0:t(e,a),ref:i,role:"tab",...o,children:r}));oA.displayName="Tab";const iA=N.div`
  ${Nt()}
  ${Ie()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,aA=y.exports.forwardRef(({children:e,...t},n)=>A(iA,{ref:n,...t,children:e}));aA.displayName="TabBody";const lA=N.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,sA=N.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function uA(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const cA=y.exports.forwardRef(({value:e,onChange:t=qn,children:n,rows:r=1,...o},i)=>{const a=y.exports.useMemo(()=>{var l;const s=(l=De.Children.map(n,f=>{if(!De.isValidElement(f))return null;const c={selected:f.props.value===e,onClick:t};return De.cloneElement(f,c)}))!==null&&l!==void 0?l:[],u=uA(s,r).map((f,c)=>({key:c,tabs:f})),d=u.findIndex(f=>f.tabs.some(c=>c.props.selected));return u.push(u.splice(d,1)[0]),u},[n,t,r,e]);return A(lA,{...o,isMultiRow:r>1,role:"tablist",ref:i,children:a.map(l=>A(sA,{children:l.tabs},l.key))})});cA.displayName="Tabs";const dA=["blur","focus"],fA=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function sf(e){return"nativeEvent"in e&&dA.includes(e.type)}function uf(e){return"nativeEvent"in e&&fA.includes(e.type)}const pA={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},hA=N.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${rc};
  text-align: center;
  font-size: 1rem;
  ${e=>pA[e.position]}
`,gA=N.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,mA=y.exports.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:s,onMouseEnter:u,onMouseLeave:d,onOpen:f,style:c,text:v,position:m="top",...w},S)=>{const[h,p]=y.exports.useState(!1),[g,x]=y.exports.useState(),[b,$]=y.exports.useState(),R=!n,O=!r,X=E=>{window.clearTimeout(g),window.clearTimeout(b);const H=window.setTimeout(()=>{p(!0),f==null||f(E)},o);x(H)},j=E=>{E.persist(),sf(E)?s==null||s(E):uf(E)&&(u==null||u(E)),X(E)},ue=E=>{window.clearTimeout(g),window.clearTimeout(b);const H=window.setTimeout(()=>{p(!1),l==null||l(E)},i);$(H)},ie=E=>{E.persist(),sf(E)?a==null||a(E):uf(E)&&(d==null||d(E)),ue(E)};return ne(gA,{"data-testid":"tooltip-wrapper",onBlur:R?ie:void 0,onFocus:R?j:void 0,onMouseEnter:O?j:void 0,onMouseLeave:O?ie:void 0,tabIndex:R?0:void 0,children:[A(hA,{className:e,"data-testid":"tooltip",position:m,ref:S,show:h,style:c,...w,children:v}),t]})});mA.displayName="Tooltip";const Vs=N(lc)`
  white-space: nowrap;
`,jg=W`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":W`
          cursor: pointer;

          :focus {
            ${Vs} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,vA=N.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&W`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,yA=N.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?W`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:W`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,xA=N.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,wA=N.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${jg};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,cf=N(ac)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${jg};
`,AA=N.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function df(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function ff(e){e.preventDefault()}function Fg({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:a,style:l,tree:s=[]}){const u=o===0,d=y.exports.useCallback(f=>{var c,v;const m=Boolean(f.items&&f.items.length>0),w=n.includes(f.id),S=(c=t||f.disabled)!==null&&c!==void 0?c:!1,h=S?ff:b=>i(b,f),p=S?ff:b=>i(b,f),g=a===f.id,x=A(AA,{"aria-hidden":!0,children:f.icon});return A(yA,{isRootLevel:u,role:"treeitem","aria-expanded":w,"aria-selected":g,hasItems:m,children:m?ne(xA,{open:w,children:[A(wA,{onClick:h,$disabled:S,children:ne(cf,{$disabled:S,children:[x,A(Vs,{children:f.label})]})}),w&&A(Fg,{className:e,disabled:S,expanded:n,level:o+1,select:i,selected:a,style:l,tree:(v=f.items)!==null&&v!==void 0?v:[]})]}):ne(cf,{as:"button",$disabled:S,onClick:p,children:[x,A(Vs,{children:f.label})]})},f.label)},[e,t,n,u,o,i,a,l]);return A(vA,{className:u?e:void 0,style:u?l:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u,children:s.map(d)})}function kA({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:l,style:s,tree:u=[]},d){const[f,c]=$n({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[v,m]=$n({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),w=y.exports.useCallback((p,g)=>{if(a){const x=df(f,g);a(p,x)}c(x=>df(x,g))},[f,a,c]),S=y.exports.useCallback((p,g)=>{m(g),i&&i(p,g)},[i,m]),h=y.exports.useCallback((p,g)=>{p.preventDefault(),S(p,g.id),g.items&&g.items.length&&w(p,g.id)},[S,w]);return A(Fg,{className:e,disabled:r,expanded:f,level:0,innerRef:d,select:h,selected:v,style:s,tree:u})}const SA=y.exports.forwardRef(kA);SA.displayName="TreeView";function bA(e){const[t,n]=y.exports.useState(e||0);return{count:t,increment:()=>n(a=>a+1),decrement:()=>n(a=>a-1),reset:()=>n(e||0),setCount:n}}const CA="/assets/pixelated.6c5743a7.png",$A="/assets/pixelated_c.e5845aaa.png";function EA(){const{count:e,increment:t}=bA(0);return y.exports.useEffect(()=>{const n=setInterval(()=>{t()},150);return()=>clearInterval(n)},[]),A(mg,{size:80,src:e%10?CA:$A})}function LA(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const pf={};function Ws(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&pf[t[0]]||(typeof t[0]=="string"&&(pf[t[0]]=new Date),LA(...t))}const Bg=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function hf(e,t,n){e.loadNamespaces(t,Bg(e,n))}function gf(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,Bg(e,r))}function RA(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],o=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const u=t.services.backendConnector.state[`${l}|${s}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!o||a(i,e)))}function PA(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(Ws("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(o,i)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!i(o.isLanguageChangingTo,e))return!1}}):RA(e,t,n)}const TA=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,IA={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xA9","&#169;":"\xA9","&reg;":"\xAE","&#174;":"\xAE","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},NA=e=>IA[e],DA=e=>e.replace(TA,NA);let Qs={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:DA};function OA(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Qs={...Qs,...e}}function _A(){return Qs}let Ug;function zA(e){Ug=e}function MA(){return Ug}const jA={type:"3rdParty",init(e){OA(e.options.react),zA(e)}},FA=y.exports.createContext();class BA{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const UA=(e,t)=>{const n=y.exports.useRef();return y.exports.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function Xa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:o}=y.exports.useContext(FA)||{},i=n||r||MA();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new BA),!i){Ws("You will need to pass in an i18next instance by using initReactI18next");const g=(b,$)=>typeof $=="string"?$:$&&typeof $=="object"&&typeof $.defaultValue=="string"?$.defaultValue:Array.isArray(b)?b[b.length-1]:b,x=[g,{},!1];return x.t=g,x.i18n={},x.ready=!1,x}i.options.react&&i.options.react.wait!==void 0&&Ws("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={..._A(),...i.options.react,...t},{useSuspense:l,keyPrefix:s}=a;let u=e||o||i.options&&i.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(u);const d=(i.isInitialized||i.initializedStoreOnce)&&u.every(g=>PA(g,i,a));function f(){return i.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],s)}const[c,v]=y.exports.useState(f);let m=u.join();t.lng&&(m=`${t.lng}${m}`);const w=UA(m),S=y.exports.useRef(!0);y.exports.useEffect(()=>{const{bindI18n:g,bindI18nStore:x}=a;S.current=!0,!d&&!l&&(t.lng?gf(i,t.lng,u,()=>{S.current&&v(f)}):hf(i,u,()=>{S.current&&v(f)})),d&&w&&w!==m&&S.current&&v(f);function b(){S.current&&v(f)}return g&&i&&i.on(g,b),x&&i&&i.store.on(x,b),()=>{S.current=!1,g&&i&&g.split(" ").forEach($=>i.off($,b)),x&&i&&x.split(" ").forEach($=>i.store.off($,b))}},[i,m]);const h=y.exports.useRef(!0);y.exports.useEffect(()=>{S.current&&!h.current&&v(f),h.current=!1},[i,s]);const p=[c,i,d];if(p.t=c,p.i18n=i,p.ready=d,d||!d&&!l)return p;throw new Promise(g=>{t.lng?gf(i,t.lng,u,()=>g()):hf(i,u,()=>g())})}const Hg="/assets/bike_in.40753188.gif",Vg="/assets/bike_out.1d0c3254.gif",HA="/assets/atom.d796fbd4.gif",VA="/assets/dozing.6b28e884.gif",WA="/assets/grinder.90f98dc6.gif",QA="/assets/laze.99cbcfc2.gif",KA="/assets/listening_music.b22da534.gif",GA="/assets/looking_down.706993de.gif",YA="/assets/stationary.8bbe3a48.gif",XA="/assets/tapping_screen.2150fcfc.gif",ZA="/assets/thinking.1a495de3.gif",JA="576",qA="768",e2="992",t2="1200",n2="_container_1luen_15",r2="_clippy_1luen_25",o2="_tooltip_1luen_29",Nl={mediaSm:JA,mediaMd:qA,mediaLg:e2,mediaXl:t2,container:n2,clippy:r2,tooltip:o2},i2=1e3,xi={stationary:{src:YA,duration:4e3},bikeIn:{src:Hg,duration:3500},bikeOut:{src:Vg,duration:4e3}},mf={atom:{src:HA,duration:4500},dozing:{src:VA,duration:7500},laze:{src:QA,duration:13800},music:{src:KA,duration:5400},grinder:{src:WA,duration:8400},tapping:{src:XA,duration:2500},thinking:{src:ZA,duration:1900}};function a2(){const e=Object.keys(mf),t=e[Math.floor(Math.random()*e.length)];return mf[t]}function l2(){const{t:e}=Xa("content"),[t,n]=y.exports.useState(!1),[r,o]=y.exports.useState(-1),[i,a]=y.exports.useState(xi.bikeIn),[l,s]=y.exports.useState(!1),u=i.src===Hg||i.src===Vg;return y.exports.useLayoutEffect(()=>{const d=setTimeout(()=>n(!0),i2);return()=>clearTimeout(d)},[]),y.exports.useLayoutEffect(()=>{const d=setTimeout(()=>a(xi.stationary),xi.bikeIn.duration);return t||clearTimeout(d),()=>clearTimeout(d)},[t]),y.exports.useLayoutEffect(()=>{const d=r%2!==0,f=a2(),c=setTimeout(()=>{a(d?xi.stationary:f),o(v=>v+1)},i.duration);return t||clearTimeout(c),()=>clearTimeout(c)},[r,i,t]),t?ne("div",{className:Nl.container,children:[l&&A("span",{className:Nl.tooltip,children:e("clippy.greeting")}),A("img",{src:l?GA:i.src,className:Nl.clippy,title:"Clippy",alt:"Microsoft Clippit animation",onMouseEnter:()=>!u&&s(!0),onMouseLeave:()=>s(!1),onTouchStart:()=>!u&&s(!0),onTouchEnd:()=>s(!1)})]}):null}function Ks(e){if(typeof e=="number")return`${e}px`;if(typeof e=="string")return e}const kn=N.div`
	display: flex;
	flex-direction: ${e=>{var t;return(t=e.direction)!=null?t:"row"}};
	flex-wrap: ${e=>{var t;return(t=e.wrap)!=null?t:"nowrap"}};
	justify-content: ${e=>{var t;return(t=e.justify)!=null?t:"flex-start"}};
	align-items: ${e=>{var t;return(t=e.align)!=null?t:"flex-start"}};
	align-content: ${e=>{var t;return(t=e.alignContent)!=null?t:"flex-start"}};
	gap: ${e=>{var t;return(t=Ks(e.gap))!=null?t:"0px"}};
	${e=>({...e.sx})}
`,Gs=N.p`
	display: inline-block;
	font-size: ${e=>e.variant==="title"?"24px":e.variant==="caption"?"10px":"13px"};
	font-weight: ${e=>e.bold?"600":"400"};
	color: ${e=>e.variant==="title"?"#0a0a0a":"#1a1a1a"} !important;
	&::selection {
		background-color: #c6c6c6;
		color: #0a0a0a;
	}
	padding: ${e=>{var t;return(t=Ks(e.p))!=null?t:"0"}};
	margin: ${e=>{var t;return(t=Ks(e.m))!=null?t:"0"}};
`,s2="576",u2="768",c2="992",d2="1200",f2="_container_3kp3d_8",p2="_loaderContainer_3kp3d_19",h2="_box_3kp3d_30",g2="_loader_3kp3d_19",no={mediaSm:s2,mediaMd:u2,mediaLg:c2,mediaXl:d2,container:f2,loaderContainer:p2,box:h2,loader:g2};function Wg(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Wg(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Qg(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Wg(e))&&(r&&(r+=" "),r+=t);return r}const m2="576",v2="768",y2="992",x2="1200",w2="_icon_el83c_15",A2="_disabled_el83c_20",k2="_mr_el83c_23",S2="_ml_el83c_31",b2="_small_el83c_39",Dn={mediaSm:m2,mediaMd:v2,mediaLg:y2,mediaXl:x2,icon:w2,disabled:A2,mr:k2,ml:S2,small:b2},dc=({Icon:e,className:t,disabled:n,marginLeft:r,marginRight:o,small:i})=>A(e,{"aria-roledescription":"icon",className:Qg(Dn.icon,t,n&&Dn.disabled,r&&Dn.ml,o&&Dn.mr,i&&Dn.small)}),Kg=e=>y.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",role:"img",width:35.93,height:32,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",...e},y.exports.createElement("path",{fill:"#00D8FF",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})),C2="576",$2="768",E2="992",L2="1200",R2="_container_l7hgv_10",P2="_version_l7hgv_14",T2="_company_l7hgv_20",I2="_logo_l7hgv_34",N2="_product_l7hgv_38",D2="_language_l7hgv_44",ir={mediaSm:C2,mediaMd:$2,mediaLg:E2,mediaXl:L2,container:R2,version:P2,company:T2,logo:I2,product:N2,language:D2},O2=()=>ne("div",{className:ir.container,children:[ne(kn,{align:"flex-end",children:[A("p",{className:ir.company,children:"Meta"}),A(dc,{Icon:Kg,className:ir.logo})]}),ne("p",{className:ir.product,children:["React",A("span",{className:ir.language,children:"JS"})]}),A("p",{className:ir.version,children:"Developer"})]}),_2=()=>A("main",{className:no.container,children:ne(kn,{direction:"column",gap:4*5,children:[A(O2,{}),ne("section",{className:no.loaderContainer,children:[A("div",{className:no.box}),A("div",{className:no.box}),A("div",{className:no.box})]})]})});function fa(){return fa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}function z2(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function M2(e){y.exports.useEffect(e,[])}function Gg(e,t){t===void 0&&(t={});var n=t,r=n.volume,o=r===void 0?1:r,i=n.playbackRate,a=i===void 0?1:i,l=n.soundEnabled,s=l===void 0?!0:l,u=n.interrupt,d=u===void 0?!1:u,f=n.onload,c=z2(n,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),v=De.useRef(null),m=De.useRef(!1),w=De.useState(null),S=w[0],h=w[1],p=De.useState(null),g=p[0],x=p[1],b=function(){typeof f=="function"&&f.call(this),m.current&&h(this.duration()*1e3),x(this)};M2(function(){return dn(()=>import("./howler.40890922.js").then(j=>j.h),[]).then(function(j){if(!m.current){var ue;v.current=(ue=j.Howl)!==null&&ue!==void 0?ue:j.default.Howl,m.current=!0,new v.current(fa({src:Array.isArray(e)?e:[e],volume:o,rate:a,onload:b},c))}}),function(){m.current=!1}}),De.useEffect(function(){v.current&&g&&x(new v.current(fa({src:Array.isArray(e)?e:[e],volume:o,onload:b},c)))},[JSON.stringify(e)]),De.useEffect(function(){g&&(g.volume(o),g.rate(a))},[o,a]);var $=De.useCallback(function(j){typeof j>"u"&&(j={}),!(!g||!s&&!j.forceSoundEnabled)&&(d&&g.stop(),j.playbackRate&&g.rate(j.playbackRate),g.play(j.id))},[g,s,d]),R=De.useCallback(function(j){!g||g.stop(j)},[g]),O=De.useCallback(function(j){!g||g.pause(j)},[g]),X=[$,{sound:g,stop:R,pause:O,duration:S}];return X}const j2="576",F2="768",B2="992",U2="1200",wi={mediaSm:j2,mediaMd:F2,mediaLg:B2,mediaXl:U2},H2={sm:wi.mediaSm,md:wi.mediaMd,lg:wi.mediaLg,xl:wi.mediaXl};function Yg(e){const t=`(min-width: ${H2[e]}px)`,n=()=>window.matchMedia(t).matches,[r,o]=y.exports.useState(n());function i(){o(n())}return y.exports.useEffect(()=>{const a=window.matchMedia(t);return i(),a.addEventListener("change",i),()=>{a.removeEventListener("change",i)}},[e]),r}const V2="/assets/click.271278cb.mp3";function Xg(e){const[t]=Gg(V2);return A(Bo,{...e,onClick:n=>{var r;t(),(r=e.onClick)==null||r.call(e,n)}})}const Ys=y.exports.createContext({isLoggedIn:!0,setIsLoggedIn:()=>{}}),W2=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M5 3h16v4h-2V5H5v14h14v-2h2v4H3V3h2zm16 8h-2V9h-2V7h-2v2h2v2H7v2h10v2h-2v2h2v-2h2v-2h2v-2z",fill:"currentColor"})),Q2=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z",fill:"currentColor"})),K2="/assets/logoff.04c168be.mp3",G2="576",Y2="768",X2="992",Z2="1200",J2="_container_128ha_15",q2="_reactIcon_128ha_19",ek="_list_128ha_30",Dl={mediaSm:G2,mediaMd:Y2,mediaLg:X2,mediaXl:Z2,container:J2,reactIcon:q2,list:ek},Zg="logged-out";function tk(){const{t:e}=Xa("menu"),{setIsLoggedIn:t}=y.exports.useContext(Ys),[n]=Gg(K2,{volume:.25}),r=Jh(),o=Yg("sm"),[i,a]=y.exports.useState(!1);return ne("div",{className:Dl.container,children:[ne(Xg,{onClick:()=>a(!i),active:i,children:[A(Kg,{className:Dl.reactIcon}),o&&A(Gs,{children:e("nav.start")})]}),i&&ne(vg,{className:Dl.list,onClick:()=>a(!1),children:[ne(Fs,{disabled:!0,"aria-disabled":!0,children:[A(dc,{disabled:!0,marginRight:!0,Icon:Q2})," In Progress"]}),A(sc,{}),ne(Fs,{onClick:()=>{n(),r("/"),t(!1),hg("true"),localStorage.setItem(Zg,"true")},children:[A(W2,{height:24}),e("nav.logout")]})]})]})}const nk="576",rk="768",ok="992",ik="1200",ak="_container_1d9jl_8",lk={mediaSm:nk,mediaMd:rk,mediaLg:ok,mediaXl:ik,container:ak};function sk({variant:e}){const{i18n:t}=Xa(),n=Yg("sm"),r=y.exports.useRef(t.languages).current,o=r.indexOf(t.language),i=r.map((a,l)=>({label:`${n?"\u{1F310} ":""}${a.toUpperCase()}`,value:l}));return A(cc,{variant:e,defaultValue:o,options:i,menuMaxHeight:90,onChange:a=>t.changeLanguage(r[a.value]),className:lk.container})}const uk=({src:e,size:t=24,marginLeft:n,marginRight:r})=>A("img",{src:e,height:t,width:"auto","aria-roledescription":"icon",alt:"icon",className:Qg(n&&Dn.ml,r&&Dn.mr)}),ck=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M5 2h16v20H3V2h2zm14 18V4H5v16h14zM7 6h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2z",fill:"currentColor"})),dk=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M16 3H8v4H2v14h10v-2H4V9h16v2h2V7h-6V3zm-2 4h-4V5h4v2zm6 6h-6v6h6v2h2v-2h-2v-6zm-4 4v-2h2v2h-2z",fill:"currentColor"})),fk="/assets/Folder.923bca00.ico",pk="data:image/x-icon;base64,AAABAAIAICAQAAEABADoAgAAJgAAABAQEAABAAQAKAEAAA4DAAAoAAAAIAAAAEAAAAABAAQAAAAAAIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAgAAAAICAAIAAAACAAIAAgIAAAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDMzMzMzMzMzMzMzMzMwAAi3t7e3t7e3t7e3t7e3MAAIe3t7e3t7e3t7e3t7ezAAh7e3t7e3t7e3t7e3t7cAAIt7e3t7e3t7e3t7e3t3AACHt7e3t7e3t7e3t7e3uAAAi3t7e3t7e3t7e3t7e3gACLe3t7e3t7e3t7e3t7ewMAh7e3t7e3t7e3t7e3t7cDAIt7e3t7e3t7e3t7e3t4AwCHt7e3t7e3t7e3t7e3uAMIe3t7e3t7e3t7e3t7e3CDCLe3t7e3t7e3t7e3t7ewgwh7e3t7e3t7e3t7e3t7gLMIt7e3t7e3t7e3t7e3t4BzCP////////////////8IswCId3d3d3d3d3d3d3d3e3MAAI+3t7e3t7e3t7e3t7ezAACPe3t7e3t7e3t7e3t7cwAAj7e3t7e3t7e3t7e3t7MAAI97e3t7e3t7///////wAACPt7e3t7e3t4iIiIiIgAAACPt7e3t7e3gAAAAAAAAAAACPt7e3t7eAAAAAAAAAAAAACP/////4AAAAAAAAAAAAAACIiIiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////8AAAAeAAAADgAAAA4AAAAMAAAADAAAAAwAAAAMAAAACAAAAAgAAAAIAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAA4AAAAOAAAADgAAAA4AAAAeAAAAPwAB//+AA///wAf//+AP////////////8oAAAAEAAAACAAAAABAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAgAAAAICAAIAAAACAAIAAgIAAAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIiIiIiIgAAI+3t7e3uAAI+3t7e3twgAj3t7e3t4CAj3t7e3t7CICP//////gHgIiIiIiIiIuACPe3t7e3t4AI+3t7f///gAj3t7f4iIiAAI///4AAAAAACIiIAAAAAAAAAAAAAAAA//8AAP//AADgAAAAwAAAAMAAAACAAAAAgAAAAAAAAAAAAAAAAAAAAIAAAACAAAAAgAEAAMB/AADg/wAA//8AAA==",hk="576",gk="768",mk="992",vk="1200",yk="_container_tu7dn_15",xk="_button_tu7dn_31",Jg={mediaSm:hk,mediaMd:gk,mediaLg:mk,mediaXl:vk,container:yk,button:xk},Pr={hello:"/hello",projects:"/projects",apps:"/apps"};function Ol({route:e,Icon:t,iconSrc:n,activeIconSrc:r,text:o}){const i=Jh(),a=Yu().pathname,l=a===e;return ne(Xg,{active:l,onClick:()=>i(a===e?"/":e),className:Jg.button,children:[t&&A(dc,{Icon:t}),n&&A(uk,{src:r&&l?r:n}),o]})}function wk(){const{t:e}=Xa("menu");return ne(kn,{className:Jg.container,children:[A(Ol,{route:Pr.hello,Icon:ck,text:e("window.hello")}),A(Ol,{route:Pr.projects,Icon:dk,text:e("window.projects")}),A(Ol,{route:Pr.apps,iconSrc:fk,activeIconSrc:pk,text:e("window.apps")})]})}const Ak="576",kk="768",Sk="992",bk="1200",Ck="_container_1wn5m_8",$k="_toolbar_1wn5m_19",vf={mediaSm:Ak,mediaMd:kk,mediaLg:Sk,mediaXl:bk,container:Ck,"slide-down":"_slide-down_1wn5m_1",toolbar:$k},Ek=()=>A(gg,{as:"nav",className:vf.container,children:ne(da,{className:vf.toolbar,children:[ne(kn,{gap:4,sx:{marginRight:4},children:[A(tk,{}),A(Us,{size:35})]}),A(wk,{}),ne(kn,{gap:4,sx:{marginLeft:"auto"},children:[A(Us,{size:35}),A(sk,{})]})]})}),Lk="576",Rk="768",Pk="992",Tk="1200",Ik="_loader_dwj3s_8",Nk={mediaSm:Lk,mediaMd:Rk,mediaLg:Pk,mediaXl:Tk,loader:Ik},Dk=50;function Ok(){const[e,t]=y.exports.useState(0);return y.exports.useEffect(()=>{const n=setInterval(()=>{t(r=>{if(r===100)return 0;const o=Math.random()*10;return Math.min(r+o,100)})},Dk);return()=>{clearInterval(n)}},[]),A("div",{className:Nk.loader,children:A(_g,{variant:"tile",value:Math.floor(e)})})}const _k="576",zk="768",Mk="992",jk="1200",Fk="_container_1adt5_15",Bk="_fadeIn_1adt5_22",Uk="_main_1adt5_30",Hk="_avatar_1adt5_35",ro={mediaSm:_k,mediaMd:zk,mediaLg:Mk,mediaXl:jk,container:Fk,fadeIn:Bk,"fade-in":"_fade-in_1adt5_1",main:Uk,avatar:Hk},Vk=y.exports.lazy(()=>dn(()=>import("./LoginPage.a49e526c.js"),["assets/LoginPage.a49e526c.js","assets/LoginPage.ee651f5d.css"]).then(e=>({default:e.LoginPage}))),qg=localStorage.getItem(Zg)!=="true",yf=qg?1:.6,Wk=Uy(2500*yf,4e3*yf);function Qk(){const[e,t]=y.exports.useState(!0),[n,r]=y.exports.useState(qg),o=y.exports.useMemo(()=>({isLoggedIn:n,setIsLoggedIn:r}),[n]);return y.exports.useEffect(()=>{const i=setTimeout(()=>{t(!1),n&&hg("false")},Wk);return()=>clearTimeout(i)},[]),e?A("div",{className:ro.container,children:A(_2,{})}):n?ne("div",{className:[ro.container,ro.fadeIn].join(" "),children:[A(Ys.Provider,{value:o,children:A(Ek,{})}),ne("main",{className:ro.main,children:[A(kn,{wrap:"wrap",gap:24,justify:"space-around",align:"center",className:ro.avatar,children:ne(kn,{align:"center",gap:14,children:[A(EA,{}),ne(kn,{direction:"column",children:[A(Gs,{bold:!0,variant:"title",children:"Alper Akta\u015F"}),A(Gs,{children:"Web Developer"})]})]})}),A(y.exports.Suspense,{fallback:A(Ok,{}),children:A(zv,{})}),A(l2,{})]})]}):A(Ys.Provider,{value:o,children:A(y.exports.Suspense,{fallback:null,children:A(Vk,{})})})}const Ai={IntroductionWindow:y.exports.lazy(()=>dn(()=>import("./IntroductionWindow.45682656.js"),["assets/IntroductionWindow.45682656.js","assets/Window.module.09f93bb1.js","assets/Window.f59d6328.css","assets/github.073679df.js","assets/MailLink.de066c07.js"]).then(e=>({default:e.IntroductionWindow}))),ProjectsWindow:y.exports.lazy(()=>dn(()=>import("./ProjectsWindow.e07b1f2f.js"),["assets/ProjectsWindow.e07b1f2f.js","assets/Window.module.09f93bb1.js","assets/Window.f59d6328.css","assets/ProjectsWindow.9f8af5db.css"]).then(e=>({default:e.ProjectsWindow}))),AppsWindow:y.exports.lazy(()=>dn(()=>import("./AppsWindow.aa62dbeb.js"),["assets/AppsWindow.aa62dbeb.js","assets/Window.module.09f93bb1.js","assets/Window.f59d6328.css","assets/AppsWindow.254e0297.css"]).then(e=>({default:e.AppsWindow}))),NotFoundWindow:y.exports.lazy(()=>dn(()=>import("./NotFoundWindow.987892e5.js"),["assets/NotFoundWindow.987892e5.js","assets/Window.module.09f93bb1.js","assets/Window.f59d6328.css"]).then(e=>({default:e.NotFoundWindow})))},Kk=[{path:"/",element:A("div",{})},{path:Pr.hello,element:A(Ai.IntroductionWindow,{})},{path:Pr.projects,element:A(Ai.ProjectsWindow,{})},{path:Pr.apps,element:A(Ai.AppsWindow,{})},{path:"*",element:A(Ai.NotFoundWindow,{})}],xf=y.exports.lazy(()=>dn(()=>import("./ErrorPage.b760f547.js"),["assets/ErrorPage.b760f547.js","assets/MailLink.de066c07.js"]).then(e=>({default:e.ErrorPage}))),Gk=y.exports.lazy(()=>dn(()=>import("./Resume.e8d5d0c6.js"),["assets/Resume.e8d5d0c6.js","assets/Resume.1adc659d.css"]).then(e=>({default:e.Resume}))),Yk=Bv([{path:"/",element:A(Qk,{}),children:Kk,errorElement:A(xf,{})},{path:"resume",element:A(Gk,{}),errorElement:A(xf,{})}]),Xk=zy`
  ${Hy}
`,Zk=()=>ne(Oy,{theme:jy,children:[A(Xk,{}),A(_v,{router:Yk})]}),Jk={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class pa{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||Jk,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,o){return o&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new pa(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new pa(this.logger,t)}}var zt=new pa;class Za{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(!!this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function oo(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});return n.resolve=e,n.reject=t,n}function wf(e){return e==null?"":""+e}function qk(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function fc(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function o(){return!e||typeof e=="string"}const i=typeof t!="string"?[].concat(t):t.split(".");for(;i.length>1;){if(o())return{};const a=r(i.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return o()?{}:{obj:e,k:r(i.shift())}}function Af(e,t,n){const{obj:r,k:o}=fc(e,t,Object);r[o]=n}function eS(e,t,n,r){const{obj:o,k:i}=fc(e,t,Object);o[i]=o[i]||[],r&&(o[i]=o[i].concat(n)),r||o[i].push(n)}function ha(e,t){const{obj:n,k:r}=fc(e,t);if(!!n)return n[r]}function tS(e,t,n){const r=ha(e,n);return r!==void 0?r:ha(t,n)}function em(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):em(e[r],t[r],n):e[r]=t[r]);return e}function ar(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var nS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function rS(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>nS[t]):e}const oS=[" ",",","?","!",";"];function iS(e,t,n){t=t||"",n=n||"";const r=oS.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const o=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let i=!o.test(e);if(!i){const a=e.indexOf(n);a>0&&!o.test(e.substring(0,a))&&(i=!0)}return i}function ga(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let o=e;for(let i=0;i<r.length;++i){if(!o||typeof o[r[i]]=="string"&&i+1<r.length)return;if(o[r[i]]===void 0){let a=2,l=r.slice(i,i+a).join(n),s=o[l];for(;s===void 0&&r.length>i+a;)a++,l=r.slice(i,i+a).join(n),s=o[l];if(s===void 0)return;if(s===null)return null;if(t.endsWith(l)){if(typeof s=="string")return s;if(l&&typeof s[l]=="string")return s[l]}const u=r.slice(i+a).join(n);return u?ga(s,u,n):void 0}o=o[r[i]]}return o}function ma(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class kf extends Za{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,a=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let l=[t,n];r&&typeof r!="string"&&(l=l.concat(r)),r&&typeof r=="string"&&(l=l.concat(i?r.split(i):r)),t.indexOf(".")>-1&&(l=t.split("."));const s=ha(this.data,l);return s||!a||typeof r!="string"?s:ga(this.data&&this.data[t]&&this.data[t][n],r,i)}addResource(t,n,r,o){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=[t,n];r&&(l=l.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(l=t.split("."),o=n,n=l[1]),this.addNamespaces(n),Af(this.data,l,o),i.silent||this.emit("added",t,n,r,o)}addResources(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const i in r)(typeof r[i]=="string"||Object.prototype.toString.apply(r[i])==="[object Array]")&&this.addResource(t,n,i,r[i],{silent:!0});o.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,o,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},l=[t,n];t.indexOf(".")>-1&&(l=t.split("."),o=r,r=n,n=l[1]),this.addNamespaces(n);let s=ha(this.data,l)||{};o?em(s,r,i):s={...s,...r},Af(this.data,l,s),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var tm={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach(i=>{this.processors[i]&&(t=this.processors[i].process(t,n,r,o))}),t}};const Sf={};class va extends Za{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),qk(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=zt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let i=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,l=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!iS(t,r,o);if(a&&!l){const s=t.match(this.interpolator.nestingRegexp);if(s&&s.length>0)return{key:t,namespaces:i};const u=t.split(r);(r!==o||r===o&&this.options.ns.indexOf(u[0])>-1)&&(i=u.shift()),t=u.join(o)}return typeof i=="string"&&(i=[i]),{key:t,namespaces:i}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(t[t.length-1],n),s=l[l.length-1],u=n.lng||this.language,d=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(d){const x=n.nsSeparator||this.options.nsSeparator;return o?{res:`${s}${x}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:`${s}${x}${a}`}return o?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:a}const f=this.resolve(t,n);let c=f&&f.res;const v=f&&f.usedKey||a,m=f&&f.exactUsedKey||a,w=Object.prototype.toString.apply(c),S=["[object Number]","[object Function]","[object RegExp]"],h=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&c&&(typeof c!="string"&&typeof c!="boolean"&&typeof c!="number")&&S.indexOf(w)<0&&!(typeof h=="string"&&w==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,c,{...n,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return o?(f.res=x,f.usedParams=this.getUsedParamsDetails(n),f):x}if(i){const x=w==="[object Array]",b=x?[]:{},$=x?m:v;for(const R in c)if(Object.prototype.hasOwnProperty.call(c,R)){const O=`${$}${i}${R}`;b[R]=this.translate(O,{...n,joinArrays:!1,ns:l}),b[R]===O&&(b[R]=c[R])}c=b}}else if(p&&typeof h=="string"&&w==="[object Array]")c=c.join(h),c&&(c=this.extendTranslation(c,t,n,r));else{let x=!1,b=!1;const $=n.count!==void 0&&typeof n.count!="string",R=va.hasDefaultValue(n),O=$?this.pluralResolver.getSuffix(u,n.count,n):"",X=n.ordinal&&$?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",j=n[`defaultValue${O}`]||n[`defaultValue${X}`]||n.defaultValue;!this.isValidLookup(c)&&R&&(x=!0,c=j),this.isValidLookup(c)||(b=!0,c=a);const ie=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&b?void 0:c,ce=R&&j!==c&&this.options.updateMissing;if(b||x||ce){if(this.logger.log(ce?"updateKey":"missingKey",u,s,a,ce?j:c),i){const se=this.resolve(a,{...n,keySeparator:!1});se&&se.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ee=[];const re=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&re&&re[0])for(let se=0;se<re.length;se++)ee.push(re[se]);else this.options.saveMissingTo==="all"?ee=this.languageUtils.toResolveHierarchy(n.lng||this.language):ee.push(n.lng||this.language);const ke=(se,E,H)=>{const Y=R&&H!==c?H:ie;this.options.missingKeyHandler?this.options.missingKeyHandler(se,s,E,Y,ce,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(se,s,E,Y,ce,n),this.emit("missingKey",se,s,E,c)};this.options.saveMissing&&(this.options.saveMissingPlurals&&$?ee.forEach(se=>{this.pluralResolver.getSuffixes(se,n).forEach(E=>{ke([se],a+E,n[`defaultValue${E}`]||j)})}):ke(ee,a,j))}c=this.extendTranslation(c,t,n,f,r),b&&c===a&&this.options.appendNamespaceToMissingKey&&(c=`${s}:${a}`),(b||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?c=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}:${a}`:a,x?c:void 0):c=this.options.parseMissingKeyHandler(c))}return o?(f.res=c,f.usedParams=this.getUsedParamsDetails(n),f):c}extendTranslation(t,n,r,o,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(u){const c=t.match(this.interpolator.nestingRegexp);d=c&&c.length}let f=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),t=this.interpolator.interpolate(t,f,r.lng||this.language,r),u){const c=t.match(this.interpolator.nestingRegexp),v=c&&c.length;d<v&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(r.lng=o.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var c=arguments.length,v=new Array(c),m=0;m<c;m++)v[m]=arguments[m];return i&&i[0]===v[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`),null):a.translate(...v,n)},r)),r.interpolation&&this.interpolator.reset()}const l=r.postProcess||this.options.postProcess,s=typeof l=="string"?[l]:l;return t!=null&&s&&s.length&&r.applyPostProcessor!==!1&&(t=tm.handle(s,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,i,a,l;return typeof t=="string"&&(t=[t]),t.forEach(s=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(s,n),d=u.key;o=d;let f=u.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const c=n.count!==void 0&&typeof n.count!="string",v=c&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),m=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(S=>{this.isValidLookup(r)||(l=S,!Sf[`${w[0]}-${S}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(l)&&(Sf[`${w[0]}-${S}`]=!0,this.logger.warn(`key "${o}" for languages "${w.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(h=>{if(this.isValidLookup(r))return;a=h;const p=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,d,h,S,n);else{let x;c&&(x=this.pluralResolver.getSuffix(h,n.count,n));const b=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(p.push(d+x),n.ordinal&&x.indexOf($)===0&&p.push(d+x.replace($,this.options.pluralSeparator)),v&&p.push(d+b)),m){const R=`${d}${this.options.contextSeparator}${n.context}`;p.push(R),c&&(p.push(R+x),n.ordinal&&x.indexOf($)===0&&p.push(R+x.replace($,this.options.pluralSeparator)),v&&p.push(R+b))}}let g;for(;g=p.pop();)this.isValidLookup(r)||(i=g,r=this.getResource(h,S,g,n))}))})}),{res:r,usedKey:o,exactUsedKey:i,usedLng:a,usedNS:l}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,o):this.resourceStore.getResource(t,n,r,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&typeof t.replace!="string";let o=r?t.replace:t;if(r&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const i of n)delete o[i]}return o}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function _l(e){return e.charAt(0).toUpperCase()+e.slice(1)}class bf{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=zt.create("languageUtils")}getScriptPartFromCode(t){if(t=ma(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=ma(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(o=>o.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=_l(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=_l(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=_l(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(i=>{if(i===o)return i;if(!(i.indexOf("-")<0&&o.indexOf("-")<0)&&i.indexOf(o)===0)return i})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],i=a=>{!a||(this.isSupportedCode(a)?o.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(t))):typeof t=="string"&&i(this.formatLanguageCode(t)),r.forEach(a=>{o.indexOf(a)<0&&i(this.formatLanguageCode(a))}),o}}let aS=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],lS={1:function(e){return Number(e>1)},2:function(e){return Number(e!=1)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)},7:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(e==1?0:e==2?1:e!=8&&e!=11?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(e==1?0:e==2?1:e<7?2:e<11?3:4)},11:function(e){return Number(e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(e!==0)},14:function(e){return Number(e==1?0:e==2?1:e==3?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:e!==0?1:2)},17:function(e){return Number(e==1||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(e==0?0:e==1?1:2)},19:function(e){return Number(e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(e==1?0:e==0||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3)}};const sS=["v1","v2","v3"],uS=["v4"],Cf={zero:0,one:1,two:2,few:3,many:4,other:5};function cS(){const e={};return aS.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:lS[t.fc]}})}),e}class dS{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=zt.create("pluralResolver"),(!this.options.compatibilityJSON||uS.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=cS()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(ma(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(o=>`${n}${o}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((o,i)=>Cf[o]-Cf[i]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):r.numbers.map(o=>this.getSuffix(t,o,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,r);return o?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:this.getSuffixRetroCompatible(o,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let o=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const i=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:i():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?i():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!sS.includes(this.options.compatibilityJSON)}}function $f(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,i=tS(e,t,n);return!i&&o&&typeof n=="string"&&(i=ga(e,n,r),i===void 0&&(i=ga(t,n,r))),i}class fS{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=zt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:rS,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?ar(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?ar(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?ar(n.nestingPrefix):n.nestingPrefixEscaped||ar("$t("),this.nestingSuffix=n.nestingSuffix?ar(n.nestingSuffix):n.nestingSuffixEscaped||ar(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,o){let i,a,l;const s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(m){return m.replace(/\$/g,"$$$$")}const d=m=>{if(m.indexOf(this.formatSeparator)<0){const p=$f(n,s,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...o,...n,interpolationkey:m}):p}const w=m.split(this.formatSeparator),S=w.shift().trim(),h=w.join(this.formatSeparator).trim();return this.format($f(n,s,S,this.options.keySeparator,this.options.ignoreJSONStructure),h,r,{...o,...n,interpolationkey:S})};this.resetRegExp();const f=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,c=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>u(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?u(this.escape(m)):u(m)}].forEach(m=>{for(l=0;i=m.regex.exec(t);){const w=i[1].trim();if(a=d(w),a===void 0)if(typeof f=="function"){const h=f(t,i,o);a=typeof h=="string"?h:""}else if(o&&Object.prototype.hasOwnProperty.call(o,w))a="";else if(c){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=wf(a));const S=m.safeValue(a);if(t=t.replace(i[0],S),c?(m.regex.lastIndex+=a.length,m.regex.lastIndex-=i[0].length):m.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,i,a;function l(s,u){const d=this.nestingOptionsSeparator;if(s.indexOf(d)<0)return s;const f=s.split(new RegExp(`${d}[ ]*{`));let c=`{${f[1]}`;s=f[0],c=this.interpolate(c,a);const v=c.match(/'/g),m=c.match(/"/g);(v&&v.length%2===0&&!m||m.length%2!==0)&&(c=c.replace(/'/g,'"'));try{a=JSON.parse(c),u&&(a={...u,...a})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${s}`,w),`${s}${d}${c}`}return delete a.defaultValue,s}for(;o=this.nestingRegexp.exec(t);){let s=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const d=o[1].split(this.formatSeparator).map(f=>f.trim());o[1]=d.shift(),s=d,u=!0}if(i=n(l.call(this,o[1].trim(),a),a),i&&o[0]===t&&typeof i!="string")return i;typeof i!="string"&&(i=wf(i)),i||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),i=""),u&&(i=s.reduce((d,f)=>this.format(d,f,r.lng,{...r,interpolationkey:o[1].trim()}),i.trim())),t=t.replace(o[0],i),this.regexp.lastIndex=0}return t}}function pS(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);t==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(a=>{if(!a)return;const[l,...s]=a.split(":"),u=s.join(":").trim().replace(/^'+|'+$/g,"");n[l.trim()]||(n[l.trim()]=u),u==="false"&&(n[l.trim()]=!1),u==="true"&&(n[l.trim()]=!0),isNaN(u)||(n[l.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function lr(e){const t={};return function(r,o,i){const a=o+JSON.stringify(i);let l=t[a];return l||(l=e(ma(o),i),t[a]=l),l(r)}}class hS{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=zt.create("formatter"),this.options=t,this.formats={number:lr((n,r)=>{const o=new Intl.NumberFormat(n,{...r});return i=>o.format(i)}),currency:lr((n,r)=>{const o=new Intl.NumberFormat(n,{...r,style:"currency"});return i=>o.format(i)}),datetime:lr((n,r)=>{const o=new Intl.DateTimeFormat(n,{...r});return i=>o.format(i)}),relativetime:lr((n,r)=>{const o=new Intl.RelativeTimeFormat(n,{...r});return i=>o.format(i,r.range||"day")}),list:lr((n,r)=>{const o=new Intl.ListFormat(n,{...r});return i=>o.format(i)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=lr(n)}format(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((l,s)=>{const{formatName:u,formatOptions:d}=pS(s);if(this.formats[u]){let f=l;try{const c=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},v=c.locale||c.lng||o.locale||o.lng||r;f=this.formats[u](l,v,{...d,...o,...c})}catch(c){this.logger.warn(c)}return f}else this.logger.warn(`there was no format function for ${u}`);return l},t)}}function gS(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class mS extends Za{constructor(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=zt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,o.backend,o)}queueLoad(t,n,r,o){const i={},a={},l={},s={};return t.forEach(u=>{let d=!0;n.forEach(f=>{const c=`${u}|${f}`;!r.reload&&this.store.hasResourceBundle(u,f)?this.state[c]=2:this.state[c]<0||(this.state[c]===1?a[c]===void 0&&(a[c]=!0):(this.state[c]=1,d=!1,a[c]===void 0&&(a[c]=!0),i[c]===void 0&&(i[c]=!0),s[f]===void 0&&(s[f]=!0)))}),d||(l[u]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(s)}}loaded(t,n,r){const o=t.split("|"),i=o[0],a=o[1];n&&this.emit("failedLoading",i,a,n),r&&this.store.addResourceBundle(i,a,r),this.state[t]=n?-1:2;const l={};this.queue.forEach(s=>{eS(s.loaded,[i],a),gS(s,t),n&&s.errors.push(n),s.pendingCount===0&&!s.done&&(Object.keys(s.loaded).forEach(u=>{l[u]||(l[u]={});const d=s.loaded[u];d.length&&d.forEach(f=>{l[u][f]===void 0&&(l[u][f]=!0)})}),s.done=!0,s.errors.length?s.callback(s.errors):s.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(s=>!s.done)}read(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:o,wait:i,callback:a});return}this.readingCalls++;const l=(u,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(u&&d&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,o+1,i*2,a)},i);return}a(u,d)},s=this.backend[r].bind(this.backend);if(s.length===2){try{const u=s(t,n);u&&typeof u.then=="function"?u.then(d=>l(null,d)).catch(l):l(null,u)}catch(u){l(u)}return}return s(t,n,l)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const i=this.queueLoad(t,n,r,o);if(!i.toLoad.length)return i.pending.length||o(),null;i.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),o=r[0],i=r[1];this.read(o,i,"read",void 0,void 0,(a,l)=>{a&&this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`,a),!a&&l&&this.logger.log(`${n}loaded namespace ${i} for language ${o}`,l),this.loaded(t,a,l)})}saveMissing(t,n,r,o,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const s={...a,isUpdate:i},u=this.backend.create.bind(this.backend);if(u.length<6)try{let d;u.length===5?d=u(t,n,r,o,s):d=u(t,n,r,o),d&&typeof d.then=="function"?d.then(f=>l(null,f)).catch(l):l(null,d)}catch(d){l(d)}else u(t,n,r,o,l,s)}!t||!t[0]||this.store.addResource(t[0],n,r,o)}}}function Ef(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(o=>{n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Lf(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function ki(){}function vS(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Uo extends Za{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Lf(t),this.services={},this.logger=zt,this.modules={external:[]},vS(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=Ef();this.options={...o,...this.options,...Lf(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function i(d){return d?typeof d=="function"?new d:d:null}if(!this.options.isClone){this.modules.logger?zt.init(i(this.modules.logger),this.options):zt.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=hS);const f=new bf(this.options);this.store=new kf(this.options.resources,this.options);const c=this.services;c.logger=zt,c.resourceStore=this.store,c.languageUtils=f,c.pluralResolver=new dS(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(c.formatter=i(d),c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new fS(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new mS(i(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",function(v){for(var m=arguments.length,w=new Array(m>1?m-1:0),S=1;S<m;S++)w[S-1]=arguments[S];t.emit(v,...w)}),this.modules.languageDetector&&(c.languageDetector=i(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=i(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new va(this.services,this.options),this.translator.on("*",function(v){for(var m=arguments.length,w=new Array(m>1?m-1:0),S=1;S<m;S++)w[S-1]=arguments[S];t.emit(v,...w)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,r||(r=ki),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return t.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return t.store[d](...arguments),t}});const s=oo(),u=()=>{const d=(f,c)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(c),r(f,c)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),s}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ki;const o=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const i=[],a=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(u=>{u!=="cimode"&&i.indexOf(u)<0&&i.push(u)})};o?a(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(s=>a(s)),this.options.preload&&this.options.preload.forEach(l=>a(l)),this.services.backendConnector.load(i,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(l)})}else r(null)}reloadResources(t,n,r){const o=oo();return t||(t=this.languages),n||(n=this.options.ns),r||(r=ki),this.services.backendConnector.reload(t,n,i=>{o.resolve(),r(i)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&tm.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const o=oo();this.emit("languageChanging",t);const i=s=>{this.language=s,this.languages=this.services.languageUtils.toResolveHierarchy(s),this.resolvedLanguage=void 0,this.setResolvedLanguage(s)},a=(s,u)=>{u?(i(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),n&&n(s,function(){return r.t(...arguments)})},l=s=>{!t&&!s&&this.services.languageDetector&&(s=[]);const u=typeof s=="string"?s:this.services.languageUtils.getBestMatchFromCodes(s);u&&(this.language||i(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,d=>{a(d,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(t),o}getFixedT(t,n,r){var o=this;const i=function(a,l){let s;if(typeof l!="object"){for(var u=arguments.length,d=new Array(u>2?u-2:0),f=2;f<u;f++)d[f-2]=arguments[f];s=o.options.overloadTranslationOptionHandler([a,l].concat(d))}else s={...l};s.lng=s.lng||i.lng,s.lngs=s.lngs||i.lngs,s.ns=s.ns||i.ns,s.keyPrefix=s.keyPrefix||r||i.keyPrefix;const c=o.options.keySeparator||".";let v;return s.keyPrefix&&Array.isArray(a)?v=a.map(m=>`${s.keyPrefix}${c}${m}`):v=s.keyPrefix?`${s.keyPrefix}${c}${a}`:a,o.t(v,s)};return typeof t=="string"?i.lng=t:i.lngs=t,i.ns=n,i.keyPrefix=r,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const u=this.services.backendConnector.state[`${l}|${s}`];return u===-1||u===2};if(n.precheck){const l=n.precheck(this,a);if(l!==void 0)return l}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!o||a(i,t)))}loadNamespaces(t,n){const r=oo();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=oo();typeof t=="string"&&(t=[t]);const o=this.options.preload||[],i=t.filter(a=>o.indexOf(a)<0);return i.length?(this.options.preload=o.concat(i),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new bf(Ef());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Uo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ki;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},i=new Uo(o);return(t.debug!==void 0||t.prefix!==void 0)&&(i.logger=i.logger.clone(t)),["store","services","language"].forEach(l=>{i[l]=this[l]}),i.services={...this.services},i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},r&&(i.store=new kf(this.store.data,o),i.services.resourceStore=i.store),i.translator=new va(i.services,o),i.translator.on("*",function(l){for(var s=arguments.length,u=new Array(s>1?s-1:0),d=1;d<s;d++)u[d-1]=arguments[d];i.emit(l,...u)}),i.init(o,n),i.translator.options=o,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const qe=Uo.createInstance();qe.createInstance=Uo.createInstance;qe.createInstance;qe.dir;qe.init;qe.loadResources;qe.reloadResources;qe.use;qe.changeLanguage;qe.getFixedT;qe.t;qe.exists;qe.setDefaultNamespace;qe.hasLoadedNamespace;qe.loadNamespaces;qe.loadLanguages;var Xs=(e=>(e.TURKISH="tr",e.ENGLISH="en",e))(Xs||{});const yS={"go-to-page":"Web sayfas\u0131na git",login:"Giri\u015F"},xS="Y\xFCkleniyor",wS="\u015Eifre",AS={btn:yS,loading:xS,password:wS},kS={greeting:"Merhaba, ben Clippy!"},SS={"fallback-element":"Aman! San\u0131r\u0131m web sayfam\u0131 bozdun! Hatay\u0131 gidermem i\xE7in yard\u0131mc\u0131 olmak istersen, taray\u0131c\u0131 konsolundaki hata  mesaj\u0131n\u0131 kontrol edip g\xF6ndermeni \xF6nemle rica ediyorum :)"},bS={"about-current-job":"\u015Eu anda, Etstur'da Yaz\u0131l\u0131m Geli\u015Ftirme Uzman Yard\u0131mc\u0131s\u0131 olarak \xE7al\u0131\u015F\u0131yorum. \u015Eirketin React bazl\u0131 B2B web uygulamar\u0131n\u0131n geli\u015Ftirilmesinde rol al\u0131yorum.","about-experience":"Yaz\u0131l\u0131m geli\u015Ftirmeye olduk\xE7a ilgi duydu\u011Fum i\xE7in, hedefledi\u011Fim kariyere \xF6\u011Frencilik d\xF6nemimde online i\xE7erikler t\xFCketerek ile ve HackerRank vb. sitelerde testler \xE7\xF6zerek yat\u0131r\u0131m yapt\u0131m.","about-me":"Ege \xDCniversitesi, \u0130ngiliz Dili ve Edebiyat\u0131 mezunuyum.","about-preferences":"Genel olarak web uygulamalar\u0131n\u0131 TypeScript ve React.js ile geli\u015Ftirmeyi tercih ediyorum. Yapt\u0131\u011F\u0131m geli\u015Ftirmeleri Vitest ve react-testing-library ile, bazen de Playwright ile test ediyorum."},CS={header:{name:"Alper Akta\u015F",title:"Yaz\u0131l\u0131m Geli\u015Ftirici",phone:"+90 534 621 81 05",mail:"contact@aktasalper.com",linkedIn:"https://www.linkedin.com/in/aktasalper/",portfolio:"https://www.aktasalper.com/",location:"Avc\u0131lar, \u0130stanbul"},education:{title:"E\u011Fitim",list:[{school:"Ege \xDCniversitesi",degree:"\u0130ngiliz Dili ve Edebiyat\u0131",period:"Ekim 2021 - Kas\u0131m 2023"}]},language:[],experience:{title:"Tecr\xFCbe",list:[{company:"Etstur",title:"Yaz\u0131l\u0131m Geli\u015Ftirme Uzman\u0131",period:{start:"Temmuz 3, 2024"},description:"\u015Eirketin React bazl\u0131 B2B web uygulamar\u0131n\u0131n geli\u015Ftirilmesinde rol al\u0131yorum.",roles:[{project:"B2B UI Kit",description:"Standartla\u015Ft\u0131r\u0131lm\u0131\u015F UI Kit",stack:["Storybook","React"]}]},{company:"Etstur",title:"Yaz\u0131l\u0131m Geli\u015Ftirme Uzman Yard\u0131mc\u0131s\u0131",period:{start:"Temmuz 25, 2022",end:"May\u0131s 13, 2024"},description:"\u015Eirketin React bazl\u0131 B2B web uygulamar\u0131n\u0131n geli\u015Ftirilmesinde rol al\u0131yorum. Confluence Wiki de dok\xFCmantasyon yazd\u0131m. 'DevOps Heroes' olarak adland\u0131r\u0131lan \u015Firket i\xE7indeki tak\u0131mda, Front-end temsilcisi olarak bulundum.",roles:[{project:"E-mail Templates",description:"En ba\u015Fta 'Etspartners' olmak \xFCzere, Etstur taraf\u0131ndan kullan\u0131c\u0131lara g\xF6nderilen e-postalar\u0131n standartla\u015Ft\u0131r\u0131lmas\u0131 ad\u0131na bu projeyi olu\u015Fturdum ve mevcut e-posta s\xFCrecine entegre ettim. Bu proje dahilinde yazm\u0131\u015F oldu\u011Fun CLI tool ile e-posta dosyalar\u0131nda yap\u0131lan de\u011Fi\u015Fikliklerin h\u0131zl\u0131ca ve otomatik bir \u015Fekilde Mandrill'e deploy edilmesini sa\u011Flad\u0131m.",stack:["MJML","React","Mandrill"]},{project:"Extranet & Intranet Bak\u0131m",description:"Modernle\u015Ftirme s\xFCrecinde, halihaz\u0131rda m\xFC\u015Fteriler taraf\u0131ndan kullan\u0131lan eski projelerin bak\u0131m s\xFCre\xE7lerinde de zaman zaman yer ald\u0131m.",stack:["JavaScript","FTL","JSTL","JSP","Java"]},{project:"Dijital Kontrat",description:"Etstur kontrat ekibinin, otellerle imzalanan kontratlar\u0131n dijitalle\u015Ftirilmesi ve kontrat s\xFCre\xE7lerinin takibi i\xE7in talep etti\u011Fi proje. Projenin ba\u015Flang\u0131c\u0131ndan canl\u0131ya \xE7\u0131kt\u0131\u011F\u0131 s\xFCre\xE7 boyunca tek front-end geli\u015Ftirici olarak 'Dijital Kontrat'\u0131n sorumlulu\u011Funu \xFCstlendim. B\xF6ylece, Estur b\xFCnyesinde canl\u0131ya al\u0131nan ilk React projesinin geli\u015Ftirilmesinde rol ald\u0131m. Proje canl\u0131ya al\u0131nd\u0131ktan sonra ise, yerime devralan front-end ekibine aktar\u0131m ve bak\u0131m konusunda destek oldum.",stack:["TypeScript","React","Vite"]},{project:"B2B Boilerplate",description:"B2B React projelerinin h\u0131zl\u0131ca aya\u011Fa kald\u0131r\u0131labilmesi ad\u0131na olu\u015Fturdu\u011Fum boilerplate projesi. Bu 'Etspartners' temellerini att\u0131ktan sonra, di\u011Fer B2B projelerimizde de ihtiyac\u0131m\u0131z olabilecek teknolojileri, kod standartlar\u0131n\u0131 ve proje yap\u0131s\u0131n\u0131 derleyip boilerplate \xFCzerinde tekrar kullan\u0131labilir hale getirdim.",stack:["TypeScript","React","Vite","Redux","CASL"]},{project:"etspartners.com",description:"Etstur'un, birlikte \xE7al\u0131\u015Ft\u0131\u011F\u0131 otellere sundu\u011Fu B2B dashboard uygulamas\u0131n\u0131n React ve Java Spring Boot kullan\u0131larak tekrardan yaz\u0131lm\u0131\u015F modern hali. Projenin \xF6n y\xFCz iskeletinin olu\u015Fturulmas\u0131nda rol ald\u0131m ve 'Dijital Kontrat' projesinde ge\xE7irdi\u011Fim zaman haricinde t\xFCm geli\u015Ftirme, bak\u0131m ve onar\u0131m s\xFCre\xE7lerinde yer ald\u0131m.",stack:["TypeScript","React","Vite"]}]},{company:"1Pixel Digital Agency",title:"Front-end Stajyerli\u011Fi",period:{start:"Ekim 2021",end:"Kas\u0131m 2021"},description:"Jira \xFCzerinden y\xF6netilen Agile s\xFCre\xE7te, sayfalar\u0131n ilgili grafik tasar\u0131mlar\u0131na kar\u015F\u0131l\u0131k gelen i\u015Flevsel ve responsive b\xF6l\xFCmlerinin kodlanmas\u0131.",roles:[{project:"Shopify",description:"Shopify kullanan sat\u0131c\u0131lara, \xF6zelle\u015Ftirilebilir temalar\u0131n olu\u015Fturulmas\u0131 ve kullan\u0131m\u0131 kolay CMS kontrollerinin eklenmesi. Bu kontrolleri temalara entegre etmenin yan\u0131 s\u0131ra, Liquid templating dilini kullanarak dinamik ma\u011Faza verilerin sayfa \xF6\u011Felerine ak\u0131\u015F\u0131n\u0131n sa\u011Flanmas\u0131.",stack:["HTML","CSS","Liquid"]}]}]},reference:[],certificates:[]},$S={404:{descripton:"'{{path}}' dizininde eri\u015Fmeye \xE7al\u0131\u015Ft\u0131\u011F\u0131n\u0131z i\xE7erik bulunamad\u0131.",title:"404 - \u0130\xE7erik Bulunamad\u0131!"},"base-url":"C:\\Kullan\u0131c\u0131lar\\alperaktas",clippy:kS,"daily-space-palette":"Daily Space Palette, NASA'n\u0131n API i\xE7eri\u011Fini kullanarak G\xFCn\xFCn Astronomi Foto\u011Fraf\u0131'n\u0131 g\xF6steriyor. Ek olarak, gelen bu foto\u011Fraftaki renkleri analiz ederek \xE7e\u015Fitli renk paletleri olu\u015Fturuyor.",error:SS,introduction:bS,"login-screen":{"footer-info":"Giri\u015F yapt\u0131ktan sonra kullan\u0131c\u0131 hesab\u0131 ekleyebilir veyak kullan\u0131c\u0131y\u0131 de\u011Fi\u015Ftirebilirsiniz.",instructions:"Ba\u015Flamak i\xE7in l\xFCtfen \u015Fifrenizi giriniz","turn-off":"Bilgisayar\u0131 kapat"},"vigenere-cipher":{alphabet:"Alfabe","alphabet-disabled-tooltip":"Alfabe \u015Fimdilik Latin harfleriyle s\u0131n\u0131rland\u0131r\u0131lm\u0131\u015Ft\u0131r",decrypt:"\u015Eifre \xC7\xF6z",encrypt:"\u015Eifrele",input:"Girdi",key:"Anahtar","key-descripton":"'{{method}}' y\xF6ntemi i\xE7in kullanaca\u011F\u0131n\u0131z anahtar",method:"Y\xF6ntem",output:"\xC7\u0131kt\u0131",title:"Vigen\xE8re \u015Eifrelemesi"},resume:CS},ES={logout:"\xC7\u0131k\u0131\u015F",start:"Ba\u015Flat"},LS={apps:"Uygulamalar",hello:"Merhaba.txt",projects:"Projeler.exe"},RS={nav:ES,window:LS},PS={"go-to-page":"Go to webpage",login:"Login"},TS="Loading",IS="Password",NS={btn:PS,loading:TS,password:IS},DS={greeting:"Hello, I'm Clippy!"},OS={"fallback-element":"Oops! Looks like you broke my website! If you want to help me fix it, you can check the browser console for the error message and kindly send it to me, pretty please :)"},_S={"about-current-job":"Currently, I work at Etstur as a Software Development Assistant and I participate in developing React-based B2B web applications.","about-experience":"Because of my profound interest in software development, I studied software through online content and solved test cases on websites like HackerRank to invest into the career that I desired to have during my studentship.","about-me":"I am an English Language and Literature graduate from Ege University.","about-preferences":"I generally prefer developing apps with TypeScript and React. Additionally, I write tests using Vitest and react-testing-library, and depending on the project, I may use Playwright as well."},zS={404:{descripton:"The content you are trying to reach at '/{{path}}' is not available.",title:"404 - Content Not Found!"},"base-url":"C:\\Users\\alperaktas",clippy:DS,"daily-space-palette":"Daily Space Palette is a web project that fetches the Astronomy Picture of the Day using NASA's API, then generates a color palette from that picture.",error:OS,introduction:_S,"login-screen":{"footer-info":"After you log on, you can add or change accounts.",instructions:"To begin, please enter your password","turn-off":"Turn off computer"},"vigenere-cipher":{alphabet:"Alphabet","alphabet-disabled-tooltip":"Alphabet is currently restricted to only Latin characters",decrypt:"Decrypt",encrypt:"Encrypt",input:"Input",key:"Key","key-descripton":"Key to use for '{{method}}' method",method:"Method",output:"Output",title:"Vigen\xE8re Cipher"}},MS={logout:"Logout",start:"Start"},jS={apps:"Apps",hello:"Hello.txt",projects:"Projects"},FS={nav:MS,window:jS},nm=["general","menu","content"],BS=nm[0],US={tr:{general:AS,content:$S,menu:RS},en:{general:NS,content:zS,menu:FS}},HS={lng:Xs.TURKISH,fallbackLng:Object.values(Xs),debug:!1,resources:US,ns:nm,defaultNS:BS};qe.use(jA).init(HS);Ml.createRoot(document.getElementById("root")).render(A(De.StrictMode,{children:A(Zk,{})}));export{Gy as A,EA as B,aA as C,De as D,Yu as E,kn as F,VS as G,ow as H,uk as I,sw as J,Ok as L,pk as O,Cw as R,dc as S,Gs as T,Ng as W,dn as _,Ov as a,A as b,Gh as c,$S as d,Ys as e,Gg as f,Sg as g,Bo as h,Zg as i,ne as j,Qg as k,Yg as l,O2 as m,Ig as n,da as o,Tg as p,tw as q,y as r,hg as s,WS as t,Xa as u,tu as v,Jh as w,Xg as x,cA as y,oA as z};
