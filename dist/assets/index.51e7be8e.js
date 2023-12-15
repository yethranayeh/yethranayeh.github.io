function em(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Mb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zb(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var y={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),nm=Symbol.for("react.portal"),rm=Symbol.for("react.fragment"),om=Symbol.for("react.strict_mode"),im=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),lm=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),um=Symbol.for("react.suspense"),cm=Symbol.for("react.memo"),dm=Symbol.for("react.lazy"),gc=Symbol.iterator;function fm(e){return e===null||typeof e!="object"?null:(e=gc&&e[gc]||e["@@iterator"],typeof e=="function"?e:null)}var Lf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rf=Object.assign,Pf={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=Pf,this.updater=n||Lf}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tf(){}Tf.prototype=Fr.prototype;function Zs(e,t,n){this.props=e,this.context=t,this.refs=Pf,this.updater=n||Lf}var Js=Zs.prototype=new Tf;Js.constructor=Zs;Rf(Js,Fr.prototype);Js.isPureReactComponent=!0;var mc=Array.isArray,Nf=Object.prototype.hasOwnProperty,qs={current:null},Df={key:!0,ref:!0,__self:!0,__source:!0};function Of(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Nf.call(t,r)&&!Df.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ho,type:e,key:i,ref:a,props:o,_owner:qs.current}}function pm(e,t){return{$$typeof:Ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ho}function hm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vc=/\/+/g;function qa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hm(""+e.key):t.toString(36)}function ki(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ho:case nm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+qa(a,0):r,mc(o)?(n="",e!=null&&(n=e.replace(vc,"$&/")+"/"),ki(o,t,n,"",function(u){return u})):o!=null&&(eu(o)&&(o=pm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(vc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",mc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+qa(i,l);a+=ki(i,t,n,s,o)}else if(s=fm(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+qa(i,l++),a+=ki(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Zo(e,t,n){if(e==null)return e;var r=[],o=0;return ki(e,r,"","",function(i){return t.call(n,i,o++)}),r}function gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},bi={transition:null},mm={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:bi,ReactCurrentOwner:qs};he.Children={map:Zo,forEach:function(e,t,n){Zo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zo(e,function(){t++}),t},toArray:function(e){return Zo(e,function(t){return t})||[]},only:function(e){if(!eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=Fr;he.Fragment=rm;he.Profiler=im;he.PureComponent=Zs;he.StrictMode=om;he.Suspense=um;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=qs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Nf.call(t,s)&&!Df.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ho,type:e.type,key:o,ref:i,props:r,_owner:a}};he.createContext=function(e){return e={$$typeof:lm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:am,_context:e},e.Consumer=e};he.createElement=Of;he.createFactory=function(e){var t=Of.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:sm,render:e}};he.isValidElement=eu;he.lazy=function(e){return{$$typeof:dm,_payload:{_status:-1,_result:e},_init:gm}};he.memo=function(e,t){return{$$typeof:cm,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=bi.transition;bi.transition={};try{e()}finally{bi.transition=t}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(e,t){return nt.current.useCallback(e,t)};he.useContext=function(e){return nt.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};he.useEffect=function(e,t){return nt.current.useEffect(e,t)};he.useId=function(){return nt.current.useId()};he.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return nt.current.useMemo(e,t)};he.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};he.useRef=function(e){return nt.current.useRef(e)};he.useState=function(e){return nt.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return nt.current.useTransition()};he.version="18.2.0";(function(e){e.exports=he})(y);const Oe=tm(y.exports),_l=em({__proto__:null,default:Oe},[y.exports]);var Ml={},tu={exports:{}},ht={},If={exports:{}},_f={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,H){var Y=E.length;E.push(H);e:for(;0<Y;){var de=Y-1>>>1,z=E[de];if(0<o(z,H))E[de]=H,E[Y]=z,Y=de;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var H=E[0],Y=E.pop();if(Y!==H){E[0]=Y;e:for(var de=0,z=E.length,L=z>>>1;de<L;){var T=2*(de+1)-1,j=E[T],k=T+1,V=E[k];if(0>o(j,Y))k<z&&0>o(V,j)?(E[de]=V,E[k]=Y,de=k):(E[de]=j,E[T]=Y,de=T);else if(k<z&&0>o(V,Y))E[de]=V,E[k]=Y,de=k;else break e}}return H}function o(E,H){var Y=E.sortIndex-H.sortIndex;return Y!==0?Y:E.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,d=null,c=3,v=!1,m=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=E)r(u),H.sortIndex=H.expirationTime,t(s,H);else break;H=n(u)}}function x(E){if(w=!1,g(E),!m)if(n(s)!==null)m=!0,ke($);else{var H=n(u);H!==null&&se(x,H.startTime-E)}}function $(E,H){m=!1,w&&(w=!1,h(I),I=-1),v=!0;var Y=c;try{for(g(H),d=n(s);d!==null&&(!(d.expirationTime>H)||E&&!ue());){var de=d.callback;if(typeof de=="function"){d.callback=null,c=d.priorityLevel;var z=de(d.expirationTime<=H);H=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),g(H)}else r(s);d=n(s)}if(d!==null)var L=!0;else{var T=n(u);T!==null&&se(x,T.startTime-H),L=!1}return L}finally{d=null,c=Y,v=!1}}var A=!1,R=null,I=-1,X=5,F=-1;function ue(){return!(e.unstable_now()-F<X)}function ie(){if(R!==null){var E=e.unstable_now();F=E;var H=!0;try{H=R(!0,E)}finally{H?ce():(A=!1,R=null)}}else A=!1}var ce;if(typeof p=="function")ce=function(){p(ie)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,re=ee.port2;ee.port1.onmessage=ie,ce=function(){re.postMessage(null)}}else ce=function(){b(ie,0)};function ke(E){R=E,A||(A=!0,ce())}function se(E,H){I=b(function(){E(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){m||v||(m=!0,ke($))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(c){case 1:case 2:case 3:var H=3;break;default:H=c}var Y=c;c=H;try{return E()}finally{c=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var Y=c;c=E;try{return H()}finally{c=Y}},e.unstable_scheduleCallback=function(E,H,Y){var de=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,E){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=Y+z,E={id:f++,callback:H,priorityLevel:E,startTime:Y,expirationTime:z,sortIndex:-1},Y>de?(E.sortIndex=Y,t(u,E),n(s)===null&&E===n(u)&&(w?(h(I),I=-1):w=!0,se(x,Y-de))):(E.sortIndex=z,t(s,E),m||v||(m=!0,ke($))),E},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(E){var H=c;return function(){var Y=c;c=H;try{return E.apply(this,arguments)}finally{c=Y}}}})(_f);(function(e){e.exports=_f})(If);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=y.exports,pt=If.exports;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zf=new Set,So={};function Xn(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(So[e]=t,e=0;e<t.length;e++)zf.add(t[e])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,vm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yc={},xc={};function ym(e){return zl.call(xc,e)?!0:zl.call(yc,e)?!1:vm.test(e)?xc[e]=!0:(yc[e]=!0,!1)}function xm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wm(e,t,n,r){if(t===null||typeof t>"u"||xm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var nu=/[\-:]([a-z])/g;function ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nu,ru);Qe[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nu,ru);Qe[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nu,ru);Qe[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ou(e,t,n,r){var o=Qe.hasOwnProperty(t)?Qe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wm(t,n,o,r)&&(n=null),r||o===null?ym(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),lr=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),iu=Symbol.for("react.strict_mode"),Fl=Symbol.for("react.profiler"),Ff=Symbol.for("react.provider"),jf=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),lu=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Bf=Symbol.for("react.offscreen"),wc=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=wc&&e[wc]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,el;function oo(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oo(e):""}function Sm(e){switch(e.tag){case 5:return oo(e.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sr:return"Fragment";case lr:return"Portal";case Fl:return"Profiler";case iu:return"StrictMode";case jl:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jf:return(e.displayName||"Context")+".Consumer";case Ff:return(e._context.displayName||"Context")+".Provider";case au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lu:return t=e.displayName||null,t!==null?t:Ul(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Ul(e(t))}catch{}}return null}function km(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(t);case 8:return t===iu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bm(e){var t=Uf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qo(e){e._valueTracker||(e._valueTracker=bm(e))}function Hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Uf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vf(e,t){t=t.checked,t!=null&&ou(e,"checked",t,!1)}function Vl(e,t){Vf(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wl(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wl(e,t,n){(t!=="number"||Ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var io=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(io(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function Wf(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $c(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ei,Kf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ei=ei||document.createElement("div"),ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ko(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$m=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(e){$m.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),uo[t]=uo[e]})});function Gf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||uo.hasOwnProperty(e)&&uo[e]?(""+t).trim():t+"px"}function Yf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Gf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Cm=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(e,t){if(t){if(Cm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xl=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,br=null,$r=null;function Cc(e){if(e=Qo(e)){if(typeof Zl!="function")throw Error(M(280));var t=e.stateNode;t&&(t=ka(t),Zl(e.stateNode,e.type,t))}}function Xf(e){br?$r?$r.push(e):$r=[e]:br=e}function Zf(){if(br){var e=br,t=$r;if($r=br=null,Cc(e),t)for(e=0;e<t.length;e++)Cc(t[e])}}function Jf(e,t){return e(t)}function qf(){}var rl=!1;function ep(e,t,n){if(rl)return e(t,n);rl=!0;try{return Jf(e,t,n)}finally{rl=!1,(br!==null||$r!==null)&&(qf(),Zf())}}function bo(e,t){var n=e.stateNode;if(n===null)return null;var r=ka(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Jl=!1;if(Zt)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Jl=!1}function Am(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var co=!1,_i=null,Mi=!1,ql=null,Em={onError:function(e){co=!0,_i=e}};function Lm(e,t,n,r,o,i,a,l,s){co=!1,_i=null,Am.apply(Em,arguments)}function Rm(e,t,n,r,o,i,a,l,s){if(Lm.apply(this,arguments),co){if(co){var u=_i;co=!1,_i=null}else throw Error(M(198));Mi||(Mi=!0,ql=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ac(e){if(Zn(e)!==e)throw Error(M(188))}function Pm(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ac(o),e;if(i===r)return Ac(o),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function np(e){return e=Pm(e),e!==null?rp(e):null}function rp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rp(e);if(t!==null)return t;e=e.sibling}return null}var op=pt.unstable_scheduleCallback,Ec=pt.unstable_cancelCallback,Tm=pt.unstable_shouldYield,Nm=pt.unstable_requestPaint,De=pt.unstable_now,Dm=pt.unstable_getCurrentPriorityLevel,uu=pt.unstable_ImmediatePriority,ip=pt.unstable_UserBlockingPriority,zi=pt.unstable_NormalPriority,Om=pt.unstable_LowPriority,ap=pt.unstable_IdlePriority,ya=null,zt=null;function Im(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ya,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:zm,_m=Math.log,Mm=Math.LN2;function zm(e){return e>>>=0,e===0?32:31-(_m(e)/Mm|0)|0}var ti=64,ni=4194304;function ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=ao(l):(i&=a,i!==0&&(r=ao(i)))}else a=n&~o,a!==0?r=ao(a):i!==0&&(r=ao(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),o=1<<n,r|=e[n],t&=~o;return r}function Fm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Rt(i),l=1<<a,s=o[a];s===-1?((l&n)===0||(l&r)!==0)&&(o[a]=Fm(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function es(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lp(){var e=ti;return ti<<=1,(ti&4194240)===0&&(ti=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function Bm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Rt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var we=0;function sp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var up,du,cp,dp,fp,ts=!1,ri=[],fn=null,pn=null,hn=null,$o=new Map,Co=new Map,sn=[],Um="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lc(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":$o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(t.pointerId)}}function Qr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Qo(t),t!==null&&du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Hm(e,t,n,r,o){switch(t){case"focusin":return fn=Qr(fn,e,t,n,r,o),!0;case"dragenter":return pn=Qr(pn,e,t,n,r,o),!0;case"mouseover":return hn=Qr(hn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return $o.set(i,Qr($o.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Co.set(i,Qr(Co.get(i)||null,e,t,n,r,o)),!0}return!1}function pp(e){var t=On(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=tp(n),t!==null){e.blockedOn=t,fp(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ns(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xl=r,n.target.dispatchEvent(r),Xl=null}else return t=Qo(n),t!==null&&du(t),e.blockedOn=n,!1;t.shift()}return!0}function Rc(e,t,n){$i(e)&&n.delete(t)}function Vm(){ts=!1,fn!==null&&$i(fn)&&(fn=null),pn!==null&&$i(pn)&&(pn=null),hn!==null&&$i(hn)&&(hn=null),$o.forEach(Rc),Co.forEach(Rc)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,Vm)))}function Ao(e){function t(o){return Kr(o,e)}if(0<ri.length){Kr(ri[0],e);for(var n=1;n<ri.length;n++){var r=ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&Kr(fn,e),pn!==null&&Kr(pn,e),hn!==null&&Kr(hn,e),$o.forEach(t),Co.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)pp(n),n.blockedOn===null&&sn.shift()}var Cr=nn.ReactCurrentBatchConfig,ji=!0;function Wm(e,t,n,r){var o=we,i=Cr.transition;Cr.transition=null;try{we=1,fu(e,t,n,r)}finally{we=o,Cr.transition=i}}function Qm(e,t,n,r){var o=we,i=Cr.transition;Cr.transition=null;try{we=4,fu(e,t,n,r)}finally{we=o,Cr.transition=i}}function fu(e,t,n,r){if(ji){var o=ns(e,t,n,r);if(o===null)hl(e,t,r,Bi,n),Lc(e,r);else if(Hm(o,e,t,n,r))r.stopPropagation();else if(Lc(e,r),t&4&&-1<Um.indexOf(e)){for(;o!==null;){var i=Qo(o);if(i!==null&&up(i),i=ns(e,t,n,r),i===null&&hl(e,t,r,Bi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var Bi=null;function ns(e,t,n,r){if(Bi=null,e=su(r),e=On(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function hp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dm()){case uu:return 1;case ip:return 4;case zi:case Om:return 16;case ap:return 536870912;default:return 16}default:return 16}}var cn=null,pu=null,Ci=null;function gp(){if(Ci)return Ci;var e,t=pu,n=t.length,r,o="value"in cn?cn.value:cn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ci=o.slice(e,1<r?1-r:void 0)}function Ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oi(){return!0}function Pc(){return!1}function gt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?oi:Pc,this.isPropagationStopped=Pc,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=gt(jr),Wo=Pe({},jr,{view:0,detail:0}),Km=gt(Wo),il,al,Gr,xa=Pe({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(il=e.screenX-Gr.screenX,al=e.screenY-Gr.screenY):al=il=0,Gr=e),il)},movementY:function(e){return"movementY"in e?e.movementY:al}}),Tc=gt(xa),Gm=Pe({},xa,{dataTransfer:0}),Ym=gt(Gm),Xm=Pe({},Wo,{relatedTarget:0}),ll=gt(Xm),Zm=Pe({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jm=gt(Zm),qm=Pe({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),e0=gt(qm),t0=Pe({},jr,{data:0}),Nc=gt(t0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o0[e])?!!t[e]:!1}function gu(){return i0}var a0=Pe({},Wo,{key:function(e){if(e.key){var t=n0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l0=gt(a0),s0=Pe({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dc=gt(s0),u0=Pe({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),c0=gt(u0),d0=Pe({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=gt(d0),p0=Pe({},xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=gt(p0),g0=[9,13,27,32],mu=Zt&&"CompositionEvent"in window,fo=null;Zt&&"documentMode"in document&&(fo=document.documentMode);var m0=Zt&&"TextEvent"in window&&!fo,mp=Zt&&(!mu||fo&&8<fo&&11>=fo),Oc=String.fromCharCode(32),Ic=!1;function vp(e,t){switch(e){case"keyup":return g0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function v0(e,t){switch(e){case"compositionend":return yp(t);case"keypress":return t.which!==32?null:(Ic=!0,Oc);case"textInput":return e=t.data,e===Oc&&Ic?null:e;default:return null}}function y0(e,t){if(ur)return e==="compositionend"||!mu&&vp(e,t)?(e=gp(),Ci=pu=cn=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mp&&t.locale!=="ko"?null:t.data;default:return null}}var x0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!x0[e.type]:t==="textarea"}function xp(e,t,n,r){Xf(r),t=Ui(t,"onChange"),0<t.length&&(n=new hu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var po=null,Eo=null;function w0(e){Pp(e,0)}function wa(e){var t=fr(e);if(Hf(t))return e}function S0(e,t){if(e==="change")return t}var wp=!1;if(Zt){var sl;if(Zt){var ul="oninput"in document;if(!ul){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),ul=typeof Mc.oninput=="function"}sl=ul}else sl=!1;wp=sl&&(!document.documentMode||9<document.documentMode)}function zc(){po&&(po.detachEvent("onpropertychange",Sp),Eo=po=null)}function Sp(e){if(e.propertyName==="value"&&wa(Eo)){var t=[];xp(t,Eo,e,su(e)),ep(w0,t)}}function k0(e,t,n){e==="focusin"?(zc(),po=t,Eo=n,po.attachEvent("onpropertychange",Sp)):e==="focusout"&&zc()}function b0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wa(Eo)}function $0(e,t){if(e==="click")return wa(t)}function C0(e,t){if(e==="input"||e==="change")return wa(t)}function A0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:A0;function Lo(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!zl.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function Fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jc(e,t){var n=Fc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fc(n)}}function kp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bp(){for(var e=window,t=Ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ii(e.document)}return t}function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function E0(e){var t=bp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kp(n.ownerDocument.documentElement,n)){if(r!==null&&vu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=jc(n,i);var a=jc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L0=Zt&&"documentMode"in document&&11>=document.documentMode,cr=null,rs=null,ho=null,os=!1;function Bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||cr==null||cr!==Ii(r)||(r=cr,"selectionStart"in r&&vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&Lo(ho,r)||(ho=r,r=Ui(rs,"onSelect"),0<r.length&&(t=new hu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function ii(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:ii("Animation","AnimationEnd"),animationiteration:ii("Animation","AnimationIteration"),animationstart:ii("Animation","AnimationStart"),transitionend:ii("Transition","TransitionEnd")},cl={},$p={};Zt&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Sa(e){if(cl[e])return cl[e];if(!dr[e])return e;var t=dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $p)return cl[e]=t[n];return e}var Cp=Sa("animationend"),Ap=Sa("animationiteration"),Ep=Sa("animationstart"),Lp=Sa("transitionend"),Rp=new Map,Uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Rp.set(e,t),Xn(t,[e])}for(var dl=0;dl<Uc.length;dl++){var fl=Uc[dl],R0=fl.toLowerCase(),P0=fl[0].toUpperCase()+fl.slice(1);En(R0,"on"+P0)}En(Cp,"onAnimationEnd");En(Ap,"onAnimationIteration");En(Ep,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Lp,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T0=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Hc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rm(r,t,void 0,e),e.currentTarget=null}function Pp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Hc(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Hc(o,l,u),i=s}}}if(Mi)throw e=ql,Mi=!1,ql=null,e}function $e(e,t){var n=t[us];n===void 0&&(n=t[us]=new Set);var r=e+"__bubble";n.has(r)||(Tp(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),Tp(n,e,r,t)}var ai="_reactListening"+Math.random().toString(36).slice(2);function Ro(e){if(!e[ai]){e[ai]=!0,zf.forEach(function(n){n!=="selectionchange"&&(T0.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ai]||(t[ai]=!0,pl("selectionchange",!1,t))}}function Tp(e,t,n,r){switch(hp(t)){case 1:var o=Wm;break;case 4:o=Qm;break;default:o=fu}n=o.bind(null,t,n,e),o=void 0,!Jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=On(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}ep(function(){var u=i,f=su(n),d=[];e:{var c=Rp.get(e);if(c!==void 0){var v=hu,m=e;switch(e){case"keypress":if(Ai(n)===0)break e;case"keydown":case"keyup":v=l0;break;case"focusin":m="focus",v=ll;break;case"focusout":m="blur",v=ll;break;case"beforeblur":case"afterblur":v=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=c0;break;case Cp:case Ap:case Ep:v=Jm;break;case Lp:v=f0;break;case"scroll":v=Km;break;case"wheel":v=h0;break;case"copy":case"cut":case"paste":v=e0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Dc}var w=(t&4)!==0,b=!w&&e==="scroll",h=w?c!==null?c+"Capture":null:c;w=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=bo(p,h),x!=null&&w.push(Po(p,x,g)))),b)break;p=p.return}0<w.length&&(c=new v(c,m,null,n,f),d.push({event:c,listeners:w}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",c&&n!==Xl&&(m=n.relatedTarget||n.fromElement)&&(On(m)||m[Jt]))break e;if((v||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,v?(m=n.relatedTarget||n.toElement,v=u,m=m?On(m):null,m!==null&&(b=Zn(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(v=null,m=u),v!==m)){if(w=Tc,x="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Dc,x="onPointerLeave",h="onPointerEnter",p="pointer"),b=v==null?c:fr(v),g=m==null?c:fr(m),c=new w(x,p+"leave",v,n,f),c.target=b,c.relatedTarget=g,x=null,On(f)===u&&(w=new w(h,p+"enter",m,n,f),w.target=g,w.relatedTarget=b,x=w),b=x,v&&m)t:{for(w=v,h=m,p=0,g=w;g;g=nr(g))p++;for(g=0,x=h;x;x=nr(x))g++;for(;0<p-g;)w=nr(w),p--;for(;0<g-p;)h=nr(h),g--;for(;p--;){if(w===h||h!==null&&w===h.alternate)break t;w=nr(w),h=nr(h)}w=null}else w=null;v!==null&&Vc(d,c,v,w,!1),m!==null&&b!==null&&Vc(d,b,m,w,!0)}}e:{if(c=u?fr(u):window,v=c.nodeName&&c.nodeName.toLowerCase(),v==="select"||v==="input"&&c.type==="file")var $=S0;else if(_c(c))if(wp)$=C0;else{$=b0;var A=k0}else(v=c.nodeName)&&v.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&($=$0);if($&&($=$(e,u))){xp(d,$,n,f);break e}A&&A(e,c,u),e==="focusout"&&(A=c._wrapperState)&&A.controlled&&c.type==="number"&&Wl(c,"number",c.value)}switch(A=u?fr(u):window,e){case"focusin":(_c(A)||A.contentEditable==="true")&&(cr=A,rs=u,ho=null);break;case"focusout":ho=rs=cr=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,Bc(d,n,f);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":Bc(d,n,f)}var R;if(mu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ur?vp(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(mp&&n.locale!=="ko"&&(ur||I!=="onCompositionStart"?I==="onCompositionEnd"&&ur&&(R=gp()):(cn=f,pu="value"in cn?cn.value:cn.textContent,ur=!0)),A=Ui(u,I),0<A.length&&(I=new Nc(I,e,null,n,f),d.push({event:I,listeners:A}),R?I.data=R:(R=yp(n),R!==null&&(I.data=R)))),(R=m0?v0(e,n):y0(e,n))&&(u=Ui(u,"onBeforeInput"),0<u.length&&(f=new Nc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=R))}Pp(d,t)})}function Po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=bo(e,n),i!=null&&r.unshift(Po(e,i,o)),i=bo(e,t),i!=null&&r.push(Po(e,i,o))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=bo(n,i),s!=null&&a.unshift(Po(n,s,l))):o||(s=bo(n,i),s!=null&&a.push(Po(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var N0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function Wc(e){return(typeof e=="string"?e:""+e).replace(N0,`
`).replace(D0,"")}function li(e,t,n){if(t=Wc(t),Wc(e)!==t&&n)throw Error(M(425))}function Hi(){}var is=null,as=null;function ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,O0=typeof clearTimeout=="function"?clearTimeout:void 0,Qc=typeof Promise=="function"?Promise:void 0,I0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qc<"u"?function(e){return Qc.resolve(null).then(e).catch(_0)}:ss;function _0(e){setTimeout(function(){throw e})}function gl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ao(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),_t="__reactFiber$"+Br,To="__reactProps$"+Br,Jt="__reactContainer$"+Br,us="__reactEvents$"+Br,M0="__reactListeners$"+Br,z0="__reactHandles$"+Br;function On(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kc(e);e!==null;){if(n=e[_t])return n;e=Kc(e)}return t}e=n,n=e.parentNode}return null}function Qo(e){return e=e[_t]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function ka(e){return e[To]||null}var cs=[],pr=-1;function Ln(e){return{current:e}}function Ce(e){0>pr||(e.current=cs[pr],cs[pr]=null,pr--)}function be(e,t){pr++,cs[pr]=e.current,e.current=t}var $n={},Je=Ln($n),lt=Ln(!1),Un=$n;function Pr(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function st(e){return e=e.childContextTypes,e!=null}function Vi(){Ce(lt),Ce(Je)}function Gc(e,t,n){if(Je.current!==$n)throw Error(M(168));be(Je,t),be(lt,n)}function Np(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(M(108,km(e)||"Unknown",o));return Pe({},n,r)}function Wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,Un=Je.current,be(Je,e),be(lt,lt.current),!0}function Yc(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Np(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,Ce(lt),Ce(Je),be(Je,e)):Ce(lt),be(lt,n)}var Kt=null,ba=!1,ml=!1;function Dp(e){Kt===null?Kt=[e]:Kt.push(e)}function F0(e){ba=!0,Dp(e)}function Rn(){if(!ml&&Kt!==null){ml=!0;var e=0,t=we;try{var n=Kt;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,ba=!1}catch(o){throw Kt!==null&&(Kt=Kt.slice(e+1)),op(uu,Rn),o}finally{we=t,ml=!1}}return null}var hr=[],gr=0,Qi=null,Ki=0,vt=[],yt=0,Hn=null,Gt=1,Yt="";function Nn(e,t){hr[gr++]=Ki,hr[gr++]=Qi,Qi=e,Ki=t}function Op(e,t,n){vt[yt++]=Gt,vt[yt++]=Yt,vt[yt++]=Hn,Hn=e;var r=Gt;e=Yt;var o=32-Rt(r)-1;r&=~(1<<o),n+=1;var i=32-Rt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Gt=1<<32-Rt(t)+o|n<<o|r,Yt=i+e}else Gt=1<<i|n<<o|r,Yt=e}function yu(e){e.return!==null&&(Nn(e,1),Op(e,1,0))}function xu(e){for(;e===Qi;)Qi=hr[--gr],hr[gr]=null,Ki=hr[--gr],hr[gr]=null;for(;e===Hn;)Hn=vt[--yt],vt[yt]=null,Yt=vt[--yt],vt[yt]=null,Gt=vt[--yt],vt[yt]=null}var ft=null,dt=null,Ae=!1,Et=null;function Ip(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,dt=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Gt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,dt=null,!0):!1;default:return!1}}function ds(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fs(e){if(Ae){var t=dt;if(t){var n=t;if(!Xc(e,t)){if(ds(e))throw Error(M(418));t=gn(n.nextSibling);var r=ft;t&&Xc(e,t)?Ip(r,n):(e.flags=e.flags&-4097|2,Ae=!1,ft=e)}}else{if(ds(e))throw Error(M(418));e.flags=e.flags&-4097|2,Ae=!1,ft=e}}}function Zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function si(e){if(e!==ft)return!1;if(!Ae)return Zc(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ls(e.type,e.memoizedProps)),t&&(t=dt)){if(ds(e))throw _p(),Error(M(418));for(;t;)Ip(e,t),t=gn(t.nextSibling)}if(Zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ft?gn(e.stateNode.nextSibling):null;return!0}function _p(){for(var e=dt;e;)e=gn(e.nextSibling)}function Tr(){dt=ft=null,Ae=!1}function wu(e){Et===null?Et=[e]:Et.push(e)}var j0=nn.ReactCurrentBatchConfig;function Ct(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Gi=Ln(null),Yi=null,mr=null,Su=null;function ku(){Su=mr=Yi=null}function bu(e){var t=Gi.current;Ce(Gi),e._currentValue=t}function ps(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t){Yi=e,Su=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(at=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Su!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(Yi===null)throw Error(M(308));mr=e,Yi.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var In=null;function $u(e){In===null?In=[e]:In.push(e)}function Mp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,$u(t)):(n.next=o.next,o.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qt(e,n)}return o=r.interleaved,o===null?(t.next=t,$u(r)):(t.next=o.next,o.next=t),r.interleaved=t,qt(e,n)}function Ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}function Jc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xi(e,t,n,r){var o=e.updateQueue;an=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,f=u=s=null,l=i;do{var c=l.lane,v=l.eventTime;if((r&c)===c){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,w=l;switch(c=t,v=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){d=m.call(v,d,c);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,c=typeof m=="function"?m.call(v,d,c):m,c==null)break e;d=Pe({},d,c);break e;case 2:an=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,c=o.effects,c===null?o.effects=[l]:c.push(l))}else v={eventTime:v,lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,s=d):f=f.next=v,a|=c;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;c=l,l=c.next,c.next=null,o.lastBaseUpdate=c,o.shared.pending=null}}while(1);if(f===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Wn|=a,e.lanes=a,e.memoizedState=d}}function qc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(M(191,o));o.call(r)}}}var Fp=new Mf.Component().refs;function hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $a={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),o=yn(e),i=Xt(r,o);i.payload=t,n!=null&&(i.callback=n),t=mn(e,i,o),t!==null&&(Pt(t,e,o,r),Ei(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),o=yn(e),i=Xt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=mn(e,i,o),t!==null&&(Pt(t,e,o,r),Ei(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=yn(e),o=Xt(n,r);o.tag=2,t!=null&&(o.callback=t),t=mn(e,o,r),t!==null&&(Pt(t,e,r,n),Ei(t,e,r))}};function ed(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Lo(n,r)||!Lo(o,i):!0}function jp(e,t,n){var r=!1,o=$n,i=t.contextType;return typeof i=="object"&&i!==null?i=St(i):(o=st(t)?Un:Je.current,r=t.contextTypes,i=(r=r!=null)?Pr(e,o):$n),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$a,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function td(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$a.enqueueReplaceState(t,t.state,null)}function gs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Fp,Cu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=St(i):(i=st(t)?Un:Je.current,o.context=Pr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(hs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&$a.enqueueReplaceState(o,o.state,null),Xi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===Fp&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function ui(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nd(e){var t=e._init;return t(e._payload)}function Bp(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=xn(h,p),h.index=0,h.sibling=null,h}function i(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,x){return p===null||p.tag!==6?(p=bl(g,h.mode,x),p.return=h,p):(p=o(p,g),p.return=h,p)}function s(h,p,g,x){var $=g.type;return $===sr?f(h,p,g.props.children,x,g.key):p!==null&&(p.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===on&&nd($)===p.type)?(x=o(p,g.props),x.ref=Yr(h,p,g),x.return=h,x):(x=Di(g.type,g.key,g.props,null,h.mode,x),x.ref=Yr(h,p,g),x.return=h,x)}function u(h,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=$l(g,h.mode,x),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function f(h,p,g,x,$){return p===null||p.tag!==7?(p=jn(g,h.mode,x,$),p.return=h,p):(p=o(p,g),p.return=h,p)}function d(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=bl(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Jo:return g=Di(p.type,p.key,p.props,null,h.mode,g),g.ref=Yr(h,null,p),g.return=h,g;case lr:return p=$l(p,h.mode,g),p.return=h,p;case on:var x=p._init;return d(h,x(p._payload),g)}if(io(p)||Vr(p))return p=jn(p,h.mode,g,null),p.return=h,p;ui(h,p)}return null}function c(h,p,g,x){var $=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return $!==null?null:l(h,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Jo:return g.key===$?s(h,p,g,x):null;case lr:return g.key===$?u(h,p,g,x):null;case on:return $=g._init,c(h,p,$(g._payload),x)}if(io(g)||Vr(g))return $!==null?null:f(h,p,g,x,null);ui(h,g)}return null}function v(h,p,g,x,$){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,l(p,h,""+x,$);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jo:return h=h.get(x.key===null?g:x.key)||null,s(p,h,x,$);case lr:return h=h.get(x.key===null?g:x.key)||null,u(p,h,x,$);case on:var A=x._init;return v(h,p,g,A(x._payload),$)}if(io(x)||Vr(x))return h=h.get(g)||null,f(p,h,x,$,null);ui(p,x)}return null}function m(h,p,g,x){for(var $=null,A=null,R=p,I=p=0,X=null;R!==null&&I<g.length;I++){R.index>I?(X=R,R=null):X=R.sibling;var F=c(h,R,g[I],x);if(F===null){R===null&&(R=X);break}e&&R&&F.alternate===null&&t(h,R),p=i(F,p,I),A===null?$=F:A.sibling=F,A=F,R=X}if(I===g.length)return n(h,R),Ae&&Nn(h,I),$;if(R===null){for(;I<g.length;I++)R=d(h,g[I],x),R!==null&&(p=i(R,p,I),A===null?$=R:A.sibling=R,A=R);return Ae&&Nn(h,I),$}for(R=r(h,R);I<g.length;I++)X=v(R,h,I,g[I],x),X!==null&&(e&&X.alternate!==null&&R.delete(X.key===null?I:X.key),p=i(X,p,I),A===null?$=X:A.sibling=X,A=X);return e&&R.forEach(function(ue){return t(h,ue)}),Ae&&Nn(h,I),$}function w(h,p,g,x){var $=Vr(g);if(typeof $!="function")throw Error(M(150));if(g=$.call(g),g==null)throw Error(M(151));for(var A=$=null,R=p,I=p=0,X=null,F=g.next();R!==null&&!F.done;I++,F=g.next()){R.index>I?(X=R,R=null):X=R.sibling;var ue=c(h,R,F.value,x);if(ue===null){R===null&&(R=X);break}e&&R&&ue.alternate===null&&t(h,R),p=i(ue,p,I),A===null?$=ue:A.sibling=ue,A=ue,R=X}if(F.done)return n(h,R),Ae&&Nn(h,I),$;if(R===null){for(;!F.done;I++,F=g.next())F=d(h,F.value,x),F!==null&&(p=i(F,p,I),A===null?$=F:A.sibling=F,A=F);return Ae&&Nn(h,I),$}for(R=r(h,R);!F.done;I++,F=g.next())F=v(R,h,I,F.value,x),F!==null&&(e&&F.alternate!==null&&R.delete(F.key===null?I:F.key),p=i(F,p,I),A===null?$=F:A.sibling=F,A=F);return e&&R.forEach(function(ie){return t(h,ie)}),Ae&&Nn(h,I),$}function b(h,p,g,x){if(typeof g=="object"&&g!==null&&g.type===sr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Jo:e:{for(var $=g.key,A=p;A!==null;){if(A.key===$){if($=g.type,$===sr){if(A.tag===7){n(h,A.sibling),p=o(A,g.props.children),p.return=h,h=p;break e}}else if(A.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===on&&nd($)===A.type){n(h,A.sibling),p=o(A,g.props),p.ref=Yr(h,A,g),p.return=h,h=p;break e}n(h,A);break}else t(h,A);A=A.sibling}g.type===sr?(p=jn(g.props.children,h.mode,x,g.key),p.return=h,h=p):(x=Di(g.type,g.key,g.props,null,h.mode,x),x.ref=Yr(h,p,g),x.return=h,h=x)}return a(h);case lr:e:{for(A=g.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=$l(g,h.mode,x),p.return=h,h=p}return a(h);case on:return A=g._init,b(h,p,A(g._payload),x)}if(io(g))return m(h,p,g,x);if(Vr(g))return w(h,p,g,x);ui(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,g),p.return=h,h=p):(n(h,p),p=bl(g,h.mode,x),p.return=h,h=p),a(h)):n(h,p)}return b}var Nr=Bp(!0),Up=Bp(!1),Ko={},Ft=Ln(Ko),No=Ln(Ko),Do=Ln(Ko);function _n(e){if(e===Ko)throw Error(M(174));return e}function Au(e,t){switch(be(Do,t),be(No,e),be(Ft,Ko),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}Ce(Ft),be(Ft,t)}function Dr(){Ce(Ft),Ce(No),Ce(Do)}function Hp(e){_n(Do.current);var t=_n(Ft.current),n=Kl(t,e.type);t!==n&&(be(No,e),be(Ft,n))}function Eu(e){No.current===e&&(Ce(Ft),Ce(No))}var Le=Ln(0);function Zi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function Lu(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var Li=nn.ReactCurrentDispatcher,yl=nn.ReactCurrentBatchConfig,Vn=0,Re=null,Me=null,Fe=null,Ji=!1,go=!1,Oo=0,B0=0;function Ye(){throw Error(M(321))}function Ru(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Pu(e,t,n,r,o,i){if(Vn=i,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Li.current=e===null||e.memoizedState===null?W0:Q0,e=n(r,o),go){i=0;do{if(go=!1,Oo=0,25<=i)throw Error(M(301));i+=1,Fe=Me=null,t.updateQueue=null,Li.current=K0,e=n(r,o)}while(go)}if(Li.current=qi,t=Me!==null&&Me.next!==null,Vn=0,Fe=Me=Re=null,Ji=!1,t)throw Error(M(300));return e}function Tu(){var e=Oo!==0;return Oo=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Re.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function kt(){if(Me===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Fe===null?Re.memoizedState:Fe.next;if(t!==null)Fe=t,Me=e;else{if(e===null)throw Error(M(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Fe===null?Re.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Io(e,t){return typeof t=="function"?t(e):t}function xl(e){var t=kt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var f=u.lane;if((Vn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Re.lanes|=f,Wn|=f}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Tt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Re.lanes|=i,Wn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wl(e){var t=kt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Tt(i,t.memoizedState)||(at=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Vp(){}function Wp(e,t){var n=Re,r=kt(),o=t(),i=!Tt(r.memoizedState,o);if(i&&(r.memoizedState=o,at=!0),r=r.queue,Nu(Gp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,_o(9,Kp.bind(null,n,r,o,t),void 0,null),je===null)throw Error(M(349));(Vn&30)!==0||Qp(n,t,o)}return o}function Qp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kp(e,t,n,r){t.value=n,t.getSnapshot=r,Yp(t)&&Xp(e)}function Gp(e,t,n){return n(function(){Yp(t)&&Xp(e)})}function Yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Xp(e){var t=qt(e,1);t!==null&&Pt(t,e,1,-1)}function rd(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=V0.bind(null,Re,e),[t.memoizedState,e]}function _o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zp(){return kt().memoizedState}function Ri(e,t,n,r){var o=It();Re.flags|=e,o.memoizedState=_o(1|t,n,void 0,r===void 0?null:r)}function Ca(e,t,n,r){var o=kt();r=r===void 0?null:r;var i=void 0;if(Me!==null){var a=Me.memoizedState;if(i=a.destroy,r!==null&&Ru(r,a.deps)){o.memoizedState=_o(t,n,i,r);return}}Re.flags|=e,o.memoizedState=_o(1|t,n,i,r)}function od(e,t){return Ri(8390656,8,e,t)}function Nu(e,t){return Ca(2048,8,e,t)}function Jp(e,t){return Ca(4,2,e,t)}function qp(e,t){return Ca(4,4,e,t)}function eh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function th(e,t,n){return n=n!=null?n.concat([e]):null,Ca(4,4,eh.bind(null,t,e),n)}function Du(){}function nh(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ru(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rh(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ru(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oh(e,t,n){return(Vn&21)===0?(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n):(Tt(n,t)||(n=lp(),Re.lanes|=n,Wn|=n,e.baseState=!0),t)}function U0(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{we=n,yl.transition=r}}function ih(){return kt().memoizedState}function H0(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ah(e))lh(t,n);else if(n=Mp(e,t,n,r),n!==null){var o=tt();Pt(n,e,r,o),sh(n,t,r)}}function V0(e,t,n){var r=yn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ah(e))lh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Tt(l,a)){var s=t.interleaved;s===null?(o.next=o,$u(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Mp(e,t,o,r),n!==null&&(o=tt(),Pt(n,e,r,o),sh(n,t,r))}}function ah(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function lh(e,t){go=Ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}var qi={readContext:St,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},W0={readContext:St,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:od,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4194308,4,eh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=H0.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:rd,useDebugValue:Du,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=rd(!1),t=e[0];return e=U0.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,o=It();if(Ae){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),je===null)throw Error(M(349));(Vn&30)!==0||Qp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,od(Gp.bind(null,r,i,e),[e]),r.flags|=2048,_o(9,Kp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=It(),t=je.identifierPrefix;if(Ae){var n=Yt,r=Gt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=B0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q0={readContext:St,useCallback:nh,useContext:St,useEffect:Nu,useImperativeHandle:th,useInsertionEffect:Jp,useLayoutEffect:qp,useMemo:rh,useReducer:xl,useRef:Zp,useState:function(){return xl(Io)},useDebugValue:Du,useDeferredValue:function(e){var t=kt();return oh(t,Me.memoizedState,e)},useTransition:function(){var e=xl(Io)[0],t=kt().memoizedState;return[e,t]},useMutableSource:Vp,useSyncExternalStore:Wp,useId:ih,unstable_isNewReconciler:!1},K0={readContext:St,useCallback:nh,useContext:St,useEffect:Nu,useImperativeHandle:th,useInsertionEffect:Jp,useLayoutEffect:qp,useMemo:rh,useReducer:wl,useRef:Zp,useState:function(){return wl(Io)},useDebugValue:Du,useDeferredValue:function(e){var t=kt();return Me===null?t.memoizedState=e:oh(t,Me.memoizedState,e)},useTransition:function(){var e=wl(Io)[0],t=kt().memoizedState;return[e,t]},useMutableSource:Vp,useSyncExternalStore:Wp,useId:ih,unstable_isNewReconciler:!1};function Or(e,t){try{var n="",r=t;do n+=Sm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ms(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var G0=typeof WeakMap=="function"?WeakMap:Map;function uh(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ta||(ta=!0,As=r),ms(e,t)},n}function ch(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ms(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ms(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new G0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=s1.bind(null,e,t,n),t.then(e,e))}function ad(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ld(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Y0=nn.ReactCurrentOwner,at=!1;function et(e,t,n,r){t.child=e===null?Up(t,null,n,r):Nr(t,e.child,n,r)}function sd(e,t,n,r,o){n=n.render;var i=t.ref;return Ar(t,o),r=Pu(e,t,n,r,i,o),n=Tu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):(Ae&&n&&yu(t),t.flags|=1,et(e,t,r,o),t.child)}function ud(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Bu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,dh(e,t,i,r,o)):(e=Di(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(a,r)&&e.ref===t.ref)return en(e,t,o)}return t.flags|=1,e=xn(i,r),e.ref=t.ref,e.return=t,t.child=e}function dh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Lo(i,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,en(e,t,o)}return vs(e,t,n,r,o)}function fh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(yr,ct),ct|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(yr,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,be(yr,ct),ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,be(yr,ct),ct|=r;return et(e,t,o,n),t.child}function ph(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vs(e,t,n,r,o){var i=st(n)?Un:Je.current;return i=Pr(t,i),Ar(t,o),n=Pu(e,t,n,r,i,o),r=Tu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):(Ae&&r&&yu(t),t.flags|=1,et(e,t,n,o),t.child)}function cd(e,t,n,r,o){if(st(n)){var i=!0;Wi(t)}else i=!1;if(Ar(t,o),t.stateNode===null)Pi(e,t),jp(t,n,r),gs(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=st(n)?Un:Je.current,u=Pr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&td(t,a,r,u),an=!1;var c=t.memoizedState;a.state=c,Xi(t,r,a,o),s=t.memoizedState,l!==r||c!==s||lt.current||an?(typeof f=="function"&&(hs(t,n,f,r),s=t.memoizedState),(l=an||ed(t,n,l,r,c,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,zp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ct(t.type,l),a.props=u,d=t.pendingProps,c=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=St(s):(s=st(n)?Un:Je.current,s=Pr(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||c!==s)&&td(t,a,r,s),an=!1,c=t.memoizedState,a.state=c,Xi(t,r,a,o);var m=t.memoizedState;l!==d||c!==m||lt.current||an?(typeof v=="function"&&(hs(t,n,v,r),m=t.memoizedState),(u=an||ed(t,n,u,r,c,m,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return ys(e,t,n,r,i,o)}function ys(e,t,n,r,o,i){ph(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Yc(t,n,!1),en(e,t,i);r=t.stateNode,Y0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Nr(t,e.child,null,i),t.child=Nr(t,null,l,i)):et(e,t,l,i),t.memoizedState=r.state,o&&Yc(t,n,!0),t.child}function hh(e){var t=e.stateNode;t.pendingContext?Gc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gc(e,t.context,!1),Au(e,t.containerInfo)}function dd(e,t,n,r,o){return Tr(),wu(o),t.flags|=256,et(e,t,n,r),t.child}var xs={dehydrated:null,treeContext:null,retryLane:0};function ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function gh(e,t,n){var r=t.pendingProps,o=Le.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),be(Le,o&1),e===null)return fs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=La(a,r,0,null),e=jn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ws(n),t.memoizedState=xs,e):Ou(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return X0(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=xn(l,i):(i=jn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?ws(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=xs,r}return i=e.child,e=i.sibling,r=xn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ou(e,t){return t=La({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ci(e,t,n,r){return r!==null&&wu(r),Nr(t,e.child,null,n),e=Ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function X0(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(M(422))),ci(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=La({mode:"visible",children:r.children},o,0,null),i=jn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Nr(t,e.child,null,a),t.child.memoizedState=ws(a),t.memoizedState=xs,i);if((t.mode&1)===0)return ci(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(M(419)),r=Sl(i,r,void 0),ci(e,t,a,r)}if(l=(a&e.childLanes)!==0,at||l){if(r=je,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qt(e,o),Pt(r,e,o,-1))}return ju(),r=Sl(Error(M(421))),ci(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=u1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,dt=gn(o.nextSibling),ft=t,Ae=!0,Et=null,e!==null&&(vt[yt++]=Gt,vt[yt++]=Yt,vt[yt++]=Hn,Gt=e.id,Yt=e.overflow,Hn=t),t=Ou(t,r.children),t.flags|=4096,t)}function fd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ps(e.return,t,n)}function kl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function mh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(et(e,t,r.children,n),r=Le.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fd(e,n,t);else if(e.tag===19)fd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Le,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Zi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),kl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Zi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}kl(t,!0,n,null,i);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Z0(e,t,n){switch(t.tag){case 3:hh(t),Tr();break;case 5:Hp(t);break;case 1:st(t.type)&&Wi(t);break;case 4:Au(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;be(Gi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Le,Le.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?gh(e,t,n):(be(Le,Le.current&1),e=en(e,t,n),e!==null?e.sibling:null);be(Le,Le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return mh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),be(Le,Le.current),r)break;return null;case 22:case 23:return t.lanes=0,fh(e,t,n)}return en(e,t,n)}var vh,Ss,yh,xh;vh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ss=function(){};yh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,_n(Ft.current);var i=null;switch(n){case"input":o=Hl(e,o),r=Hl(e,r),i=[];break;case"select":o=Pe({},o,{value:void 0}),r=Pe({},r,{value:void 0}),i=[];break;case"textarea":o=Ql(e,o),r=Ql(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hi)}Gl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(So.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(So.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&$e("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};xh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xr(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function J0(e,t,n){var r=t.pendingProps;switch(xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return st(t.type)&&Vi(),Xe(t),null;case 3:return r=t.stateNode,Dr(),Ce(lt),Ce(Je),Lu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(Rs(Et),Et=null))),Ss(e,t),Xe(t),null;case 5:Eu(t);var o=_n(Do.current);if(n=t.type,e!==null&&t.stateNode!=null)yh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Xe(t),null}if(e=_n(Ft.current),si(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[_t]=t,r[To]=i,e=(t.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(o=0;o<lo.length;o++)$e(lo[o],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":Sc(r,i),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$e("invalid",r);break;case"textarea":bc(r,i),$e("invalid",r)}Gl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&li(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&li(r.textContent,l,e),o=["children",""+l]):So.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&$e("scroll",r)}switch(n){case"input":qo(r),kc(r,i,!0);break;case"textarea":qo(r),$c(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Hi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[_t]=t,e[To]=r,vh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Yl(n,r),n){case"dialog":$e("cancel",e),$e("close",e),o=r;break;case"iframe":case"object":case"embed":$e("load",e),o=r;break;case"video":case"audio":for(o=0;o<lo.length;o++)$e(lo[o],e);o=r;break;case"source":$e("error",e),o=r;break;case"img":case"image":case"link":$e("error",e),$e("load",e),o=r;break;case"details":$e("toggle",e),o=r;break;case"input":Sc(e,r),o=Hl(e,r),$e("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Pe({},r,{value:void 0}),$e("invalid",e);break;case"textarea":bc(e,r),o=Ql(e,r),$e("invalid",e);break;default:o=r}Gl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Yf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Kf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ko(e,s):typeof s=="number"&&ko(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(So.hasOwnProperty(i)?s!=null&&i==="onScroll"&&$e("scroll",e):s!=null&&ou(e,i,s,a))}switch(n){case"input":qo(e),kc(e,r,!1);break;case"textarea":qo(e),$c(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?kr(e,!!r.multiple,i,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Hi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)xh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=_n(Do.current),_n(Ft.current),si(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(i=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:li(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&li(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Xe(t),null;case 13:if(Ce(Le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)_p(),Tr(),t.flags|=98560,i=!1;else if(i=si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[_t]=t}else Tr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),i=!1}else Et!==null&&(Rs(Et),Et=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Le.current&1)!==0?ze===0&&(ze=3):ju())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return Dr(),Ss(e,t),e===null&&Ro(t.stateNode.containerInfo),Xe(t),null;case 10:return bu(t.type._context),Xe(t),null;case 17:return st(t.type)&&Vi(),Xe(t),null;case 19:if(Ce(Le),i=t.memoizedState,i===null)return Xe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Xr(i,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Zi(e),a!==null){for(t.flags|=128,Xr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Le,Le.current&1|2),t.child}e=e.sibling}i.tail!==null&&De()>Ir&&(t.flags|=128,r=!0,Xr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Ae)return Xe(t),null}else 2*De()-i.renderingStartTime>Ir&&n!==1073741824&&(t.flags|=128,r=!0,Xr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=De(),t.sibling=null,n=Le.current,be(Le,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return Fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ct&1073741824)!==0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function q0(e,t){switch(xu(t),t.tag){case 1:return st(t.type)&&Vi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),Ce(lt),Ce(Je),Lu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Eu(t),null;case 13:if(Ce(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Le),null;case 4:return Dr(),null;case 10:return bu(t.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var di=!1,Ze=!1,e1=typeof WeakSet=="function"?WeakSet:Set,K=null;function vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function ks(e,t,n){try{n()}catch(r){Te(e,t,r)}}var pd=!1;function t1(e,t){if(is=ji,e=bp(),vu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,d=e,c=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)c=d,d=v;for(;;){if(d===e)break t;if(c===n&&++u===o&&(l=a),c===i&&++f===r&&(s=a),(v=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(as={focusedElem:e,selectionRange:n},ji=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,b=m.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ct(t.type,w),b);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(x){Te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return m=pd,pd=!1,m}function mo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ks(t,n,i)}o=o.next}while(o!==r)}}function Aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wh(e){var t=e.alternate;t!==null&&(e.alternate=null,wh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[To],delete t[us],delete t[M0],delete t[z0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sh(e){return e.tag===5||e.tag===3||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $s(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hi));else if(r!==4&&(e=e.child,e!==null))for($s(e,t,n),e=e.sibling;e!==null;)$s(e,t,n),e=e.sibling}function Cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}var Ue=null,At=!1;function rn(e,t,n){for(n=n.child;n!==null;)kh(e,t,n),n=n.sibling}function kh(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ya,n)}catch{}switch(n.tag){case 5:Ze||vr(n,t);case 6:var r=Ue,o=At;Ue=null,rn(e,t,n),Ue=r,At=o,Ue!==null&&(At?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(At?(e=Ue,n=n.stateNode,e.nodeType===8?gl(e.parentNode,n):e.nodeType===1&&gl(e,n),Ao(e)):gl(Ue,n.stateNode));break;case 4:r=Ue,o=At,Ue=n.stateNode.containerInfo,At=!0,rn(e,t,n),Ue=r,At=o;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&ks(n,t,a),o=o.next}while(o!==r)}rn(e,t,n);break;case 1:if(!Ze&&(vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,rn(e,t,n),Ze=r):rn(e,t,n);break;default:rn(e,t,n)}}function gd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new e1),t.forEach(function(r){var o=c1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function $t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,At=!1;break e;case 3:Ue=l.stateNode.containerInfo,At=!0;break e;case 4:Ue=l.stateNode.containerInfo,At=!0;break e}l=l.return}if(Ue===null)throw Error(M(160));kh(i,a,o),Ue=null,At=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bh(t,e),t=t.sibling}function bh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(t,e),Ot(e),r&4){try{mo(3,e,e.return),Aa(3,e)}catch(w){Te(e,e.return,w)}try{mo(5,e,e.return)}catch(w){Te(e,e.return,w)}}break;case 1:$t(t,e),Ot(e),r&512&&n!==null&&vr(n,n.return);break;case 5:if($t(t,e),Ot(e),r&512&&n!==null&&vr(n,n.return),e.flags&32){var o=e.stateNode;try{ko(o,"")}catch(w){Te(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Vf(o,i),Yl(l,a);var u=Yl(l,i);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?Yf(o,d):f==="dangerouslySetInnerHTML"?Kf(o,d):f==="children"?ko(o,d):ou(o,f,d,u)}switch(l){case"input":Vl(o,i);break;case"textarea":Wf(o,i);break;case"select":var c=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?kr(o,!!i.multiple,v,!1):c!==!!i.multiple&&(i.defaultValue!=null?kr(o,!!i.multiple,i.defaultValue,!0):kr(o,!!i.multiple,i.multiple?[]:"",!1))}o[To]=i}catch(w){Te(e,e.return,w)}}break;case 6:if($t(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(M(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Te(e,e.return,w)}}break;case 3:if($t(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(w){Te(e,e.return,w)}break;case 4:$t(t,e),Ot(e);break;case 13:$t(t,e),Ot(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Mu=De())),r&4&&gd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(u=Ze)||f,$t(t,e),Ze=u):$t(t,e),Ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&(e.mode&1)!==0)for(K=e,f=e.child;f!==null;){for(d=K=f;K!==null;){switch(c=K,v=c.child,c.tag){case 0:case 11:case 14:case 15:mo(4,c,c.return);break;case 1:vr(c,c.return);var m=c.stateNode;if(typeof m.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(w){Te(r,n,w)}}break;case 5:vr(c,c.return);break;case 22:if(c.memoizedState!==null){vd(d);continue}}v!==null?(v.return=c,K=v):vd(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Gf("display",a))}catch(w){Te(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Te(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$t(t,e),Ot(e),r&4&&gd(e);break;case 21:break;default:$t(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sh(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ko(o,""),r.flags&=-33);var i=hd(e);Cs(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=hd(e);$s(e,l,a);break;default:throw Error(M(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n1(e,t,n){K=e,$h(e)}function $h(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var o=K,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||di;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Ze;l=di;var u=Ze;if(di=a,(Ze=s)&&!u)for(K=o;K!==null;)a=K,s=a.child,a.tag===22&&a.memoizedState!==null?yd(o):s!==null?(s.return=a,K=s):yd(o);for(;i!==null;)K=i,$h(i),i=i.sibling;K=o,di=l,Ze=u}md(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,K=i):md(e)}}function md(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ze||Aa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&qc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ao(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ze||t.flags&512&&bs(t)}catch(c){Te(t,t.return,c)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function vd(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function yd(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Aa(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Te(t,o,s)}}var i=t.return;try{bs(t)}catch(s){Te(t,i,s)}break;case 5:var a=t.return;try{bs(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var r1=Math.ceil,ea=nn.ReactCurrentDispatcher,Iu=nn.ReactCurrentOwner,wt=nn.ReactCurrentBatchConfig,me=0,je=null,Ie=null,Ve=0,ct=0,yr=Ln(0),ze=0,Mo=null,Wn=0,Ea=0,_u=0,vo=null,it=null,Mu=0,Ir=1/0,Qt=null,ta=!1,As=null,vn=null,fi=!1,dn=null,na=0,yo=0,Es=null,Ti=-1,Ni=0;function tt(){return(me&6)!==0?De():Ti!==-1?Ti:Ti=De()}function yn(e){return(e.mode&1)===0?1:(me&2)!==0&&Ve!==0?Ve&-Ve:j0.transition!==null?(Ni===0&&(Ni=lp()),Ni):(e=we,e!==0||(e=window.event,e=e===void 0?16:hp(e.type)),e)}function Pt(e,t,n,r){if(50<yo)throw yo=0,Es=null,Error(M(185));Vo(e,n,r),((me&2)===0||e!==je)&&(e===je&&((me&2)===0&&(Ea|=n),ze===4&&un(e,Ve)),ut(e,r),n===1&&me===0&&(t.mode&1)===0&&(Ir=De()+500,ba&&Rn()))}function ut(e,t){var n=e.callbackNode;jm(e,t);var r=Fi(e,e===je?Ve:0);if(r===0)n!==null&&Ec(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ec(n),t===1)e.tag===0?F0(xd.bind(null,e)):Dp(xd.bind(null,e)),I0(function(){(me&6)===0&&Rn()}),n=null;else{switch(sp(r)){case 1:n=uu;break;case 4:n=ip;break;case 16:n=zi;break;case 536870912:n=ap;break;default:n=zi}n=Nh(n,Ch.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ch(e,t){if(Ti=-1,Ni=0,(me&6)!==0)throw Error(M(327));var n=e.callbackNode;if(Er()&&e.callbackNode!==n)return null;var r=Fi(e,e===je?Ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ra(e,r);else{t=r;var o=me;me|=2;var i=Eh();(je!==e||Ve!==t)&&(Qt=null,Ir=De()+500,Fn(e,t));do try{a1();break}catch(l){Ah(e,l)}while(1);ku(),ea.current=i,me=o,Ie!==null?t=0:(je=null,Ve=0,t=ze)}if(t!==0){if(t===2&&(o=es(e),o!==0&&(r=o,t=Ls(e,o))),t===1)throw n=Mo,Fn(e,0),un(e,r),ut(e,De()),n;if(t===6)un(e,r);else{if(o=e.current.alternate,(r&30)===0&&!o1(o)&&(t=ra(e,r),t===2&&(i=es(e),i!==0&&(r=i,t=Ls(e,i))),t===1))throw n=Mo,Fn(e,0),un(e,r),ut(e,De()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Dn(e,it,Qt);break;case 3:if(un(e,r),(r&130023424)===r&&(t=Mu+500-De(),10<t)){if(Fi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ss(Dn.bind(null,e,it,Qt),t);break}Dn(e,it,Qt);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Rt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r1(r/1960))-r,10<r){e.timeoutHandle=ss(Dn.bind(null,e,it,Qt),r);break}Dn(e,it,Qt);break;case 5:Dn(e,it,Qt);break;default:throw Error(M(329))}}}return ut(e,De()),e.callbackNode===n?Ch.bind(null,e):null}function Ls(e,t){var n=vo;return e.current.memoizedState.isDehydrated&&(Fn(e,t).flags|=256),e=ra(e,t),e!==2&&(t=it,it=n,t!==null&&Rs(t)),e}function Rs(e){it===null?it=e:it.push.apply(it,e)}function o1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~_u,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function xd(e){if((me&6)!==0)throw Error(M(327));Er();var t=Fi(e,0);if((t&1)===0)return ut(e,De()),null;var n=ra(e,t);if(e.tag!==0&&n===2){var r=es(e);r!==0&&(t=r,n=Ls(e,r))}if(n===1)throw n=Mo,Fn(e,0),un(e,t),ut(e,De()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,it,Qt),ut(e,De()),null}function zu(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Ir=De()+500,ba&&Rn())}}function Qn(e){dn!==null&&dn.tag===0&&(me&6)===0&&Er();var t=me;me|=1;var n=wt.transition,r=we;try{if(wt.transition=null,we=1,e)return e()}finally{we=r,wt.transition=n,me=t,(me&6)===0&&Rn()}}function Fu(){ct=yr.current,Ce(yr)}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,O0(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vi();break;case 3:Dr(),Ce(lt),Ce(Je),Lu();break;case 5:Eu(r);break;case 4:Dr();break;case 13:Ce(Le);break;case 19:Ce(Le);break;case 10:bu(r.type._context);break;case 22:case 23:Fu()}n=n.return}if(je=e,Ie=e=xn(e.current,null),Ve=ct=t,ze=0,Mo=null,_u=Ea=Wn=0,it=vo=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}In=null}return e}function Ah(e,t){do{var n=Ie;try{if(ku(),Li.current=qi,Ji){for(var r=Re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ji=!1}if(Vn=0,Fe=Me=Re=null,go=!1,Oo=0,Iu.current=null,n===null||n.return===null){ze=1,Mo=t,Ie=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=Ve,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if((f.mode&1)===0&&(d===0||d===11||d===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=ad(a);if(v!==null){v.flags&=-257,ld(v,a,l,i,t),v.mode&1&&id(i,u,t),t=v,s=u;var m=t.updateQueue;if(m===null){var w=new Set;w.add(s),t.updateQueue=w}else m.add(s);break e}else{if((t&1)===0){id(i,u,t),ju();break e}s=Error(M(426))}}else if(Ae&&l.mode&1){var b=ad(a);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),ld(b,a,l,i,t),wu(Or(s,l));break e}}i=s=Or(s,l),ze!==4&&(ze=2),vo===null?vo=[i]:vo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=uh(i,s,t);Jc(i,h);break e;case 1:l=s;var p=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vn===null||!vn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=ch(i,l,t);Jc(i,x);break e}}i=i.return}while(i!==null)}Rh(n)}catch($){t=$,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function Eh(){var e=ea.current;return ea.current=qi,e===null?qi:e}function ju(){(ze===0||ze===3||ze===2)&&(ze=4),je===null||(Wn&268435455)===0&&(Ea&268435455)===0||un(je,Ve)}function ra(e,t){var n=me;me|=2;var r=Eh();(je!==e||Ve!==t)&&(Qt=null,Fn(e,t));do try{i1();break}catch(o){Ah(e,o)}while(1);if(ku(),me=n,ea.current=r,Ie!==null)throw Error(M(261));return je=null,Ve=0,ze}function i1(){for(;Ie!==null;)Lh(Ie)}function a1(){for(;Ie!==null&&!Tm();)Lh(Ie)}function Lh(e){var t=Th(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?Rh(e):Ie=t,Iu.current=null}function Rh(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=J0(n,t,ct),n!==null){Ie=n;return}}else{if(n=q0(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);ze===0&&(ze=5)}function Dn(e,t,n){var r=we,o=wt.transition;try{wt.transition=null,we=1,l1(e,t,n,r)}finally{wt.transition=o,we=r}return null}function l1(e,t,n,r){do Er();while(dn!==null);if((me&6)!==0)throw Error(M(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Bm(e,i),e===je&&(Ie=je=null,Ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||fi||(fi=!0,Nh(zi,function(){return Er(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=wt.transition,wt.transition=null;var a=we;we=1;var l=me;me|=4,Iu.current=null,t1(e,n),bh(n,e),E0(as),ji=!!is,as=is=null,e.current=n,n1(n),Nm(),me=l,we=a,wt.transition=i}else e.current=n;if(fi&&(fi=!1,dn=e,na=o),i=e.pendingLanes,i===0&&(vn=null),Im(n.stateNode),ut(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ta)throw ta=!1,e=As,As=null,e;return(na&1)!==0&&e.tag!==0&&Er(),i=e.pendingLanes,(i&1)!==0?e===Es?yo++:(yo=0,Es=e):yo=0,Rn(),null}function Er(){if(dn!==null){var e=sp(na),t=wt.transition,n=we;try{if(wt.transition=null,we=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,na=0,(me&6)!==0)throw Error(M(331));var o=me;for(me|=4,K=e.current;K!==null;){var i=K,a=i.child;if((K.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(K=u;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:mo(8,f,i)}var d=f.child;if(d!==null)d.return=f,K=d;else for(;K!==null;){f=K;var c=f.sibling,v=f.return;if(wh(f),f===u){K=null;break}if(c!==null){c.return=v,K=c;break}K=v}}}var m=i.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}K=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,K=a;else e:for(;K!==null;){if(i=K,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:mo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,K=h;break e}K=i.return}}var p=e.current;for(K=p;K!==null;){a=K;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,K=g;else e:for(a=p;K!==null;){if(l=K,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Aa(9,l)}}catch($){Te(l,l.return,$)}if(l===a){K=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,K=x;break e}K=l.return}}if(me=o,Rn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ya,e)}catch{}r=!0}return r}finally{we=n,wt.transition=t}}return!1}function wd(e,t,n){t=Or(n,t),t=uh(e,t,1),e=mn(e,t,1),t=tt(),e!==null&&(Vo(e,1,t),ut(e,t))}function Te(e,t,n){if(e.tag===3)wd(e,e,n);else for(;t!==null;){if(t.tag===3){wd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=Or(n,e),e=ch(t,e,1),t=mn(t,e,1),e=tt(),t!==null&&(Vo(t,1,e),ut(t,e));break}}t=t.return}}function s1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ve&n)===n&&(ze===4||ze===3&&(Ve&130023424)===Ve&&500>De()-Mu?Fn(e,0):_u|=n),ut(e,t)}function Ph(e,t){t===0&&((e.mode&1)===0?t=1:(t=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var n=tt();e=qt(e,t),e!==null&&(Vo(e,t,n),ut(e,n))}function u1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ph(e,n)}function c1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Ph(e,n)}var Th;Th=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)at=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return at=!1,Z0(e,t,n);at=(e.flags&131072)!==0}else at=!1,Ae&&(t.flags&1048576)!==0&&Op(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pi(e,t),e=t.pendingProps;var o=Pr(t,Je.current);Ar(t,n),o=Pu(null,t,r,e,o,n);var i=Tu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(i=!0,Wi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Cu(t),o.updater=$a,t.stateNode=o,o._reactInternals=t,gs(t,r,e,n),t=ys(null,t,r,!0,i,n)):(t.tag=0,Ae&&i&&yu(t),et(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=f1(r),e=Ct(r,e),o){case 0:t=vs(null,t,r,e,n);break e;case 1:t=cd(null,t,r,e,n);break e;case 11:t=sd(null,t,r,e,n);break e;case 14:t=ud(null,t,r,Ct(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),vs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),cd(e,t,r,o,n);case 3:e:{if(hh(t),e===null)throw Error(M(387));r=t.pendingProps,i=t.memoizedState,o=i.element,zp(e,t),Xi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Or(Error(M(423)),t),t=dd(e,t,r,n,o);break e}else if(r!==o){o=Or(Error(M(424)),t),t=dd(e,t,r,n,o);break e}else for(dt=gn(t.stateNode.containerInfo.firstChild),ft=t,Ae=!0,Et=null,n=Up(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===o){t=en(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Hp(t),e===null&&fs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ls(r,o)?a=null:i!==null&&ls(r,i)&&(t.flags|=32),ph(e,t),et(e,t,a,n),t.child;case 6:return e===null&&fs(t),null;case 13:return gh(e,t,n);case 4:return Au(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nr(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),sd(e,t,r,o,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,be(Gi,r._currentValue),r._currentValue=a,i!==null)if(Tt(i.value,a)){if(i.children===o.children&&!lt.current){t=en(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Xt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ps(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(M(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ps(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}et(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ar(t,n),o=St(o),r=r(o),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,o=Ct(r,t.pendingProps),o=Ct(r.type,o),ud(e,t,r,o,n);case 15:return dh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),Pi(e,t),t.tag=1,st(r)?(e=!0,Wi(t)):e=!1,Ar(t,n),jp(t,r,o),gs(t,r,o,n),ys(null,t,r,!0,e,n);case 19:return mh(e,t,n);case 22:return fh(e,t,n)}throw Error(M(156,t.tag))};function Nh(e,t){return op(e,t)}function d1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new d1(e,t,n,r)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f1(e){if(typeof e=="function")return Bu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===au)return 11;if(e===lu)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Di(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Bu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case sr:return jn(n.children,o,i,t);case iu:a=8,o|=8;break;case Fl:return e=xt(12,n,t,o|2),e.elementType=Fl,e.lanes=i,e;case jl:return e=xt(13,n,t,o),e.elementType=jl,e.lanes=i,e;case Bl:return e=xt(19,n,t,o),e.elementType=Bl,e.lanes=i,e;case Bf:return La(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ff:a=10;break e;case jf:a=9;break e;case au:a=11;break e;case lu:a=14;break e;case on:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=xt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function jn(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function La(e,t,n,r){return e=xt(22,e,r,t),e.elementType=Bf,e.lanes=n,e.stateNode={isHidden:!1},e}function bl(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function $l(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function p1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Uu(e,t,n,r,o,i,a,l,s){return e=new p1(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(i),e}function h1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dh(e){if(!e)return $n;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(st(n))return Np(e,n,t)}return t}function Oh(e,t,n,r,o,i,a,l,s){return e=Uu(n,r,!0,e,o,i,a,l,s),e.context=Dh(null),n=e.current,r=tt(),o=yn(n),i=Xt(r,o),i.callback=t!=null?t:null,mn(n,i,o),e.current.lanes=o,Vo(e,o,r),ut(e,r),e}function Ra(e,t,n,r){var o=t.current,i=tt(),a=yn(o);return n=Dh(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(o,t,a),e!==null&&(Pt(e,o,a,i),Ei(e,o,a)),a}function oa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hu(e,t){Sd(e,t),(e=e.alternate)&&Sd(e,t)}function g1(){return null}var Ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vu(e){this._internalRoot=e}Pa.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ra(e,t,null,null)};Pa.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){Ra(null,e,null,null)}),t[Jt]=null}};function Pa(e){this._internalRoot=e}Pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=dp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&pp(e)}};function Wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kd(){}function m1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=oa(a);i.call(u)}}var a=Oh(t,r,e,0,null,!1,!1,"",kd);return e._reactRootContainer=a,e[Jt]=a.current,Ro(e.nodeType===8?e.parentNode:e),Qn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=oa(s);l.call(u)}}var s=Uu(e,0,!1,null,null,!1,!1,"",kd);return e._reactRootContainer=s,e[Jt]=s.current,Ro(e.nodeType===8?e.parentNode:e),Qn(function(){Ra(t,s,n,r)}),s}function Na(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=oa(a);l.call(s)}}Ra(t,a,e,o)}else a=m1(n,t,e,o,r);return oa(a)}up=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ao(t.pendingLanes);n!==0&&(cu(t,n|1),ut(t,De()),(me&6)===0&&(Ir=De()+500,Rn()))}break;case 13:Qn(function(){var r=qt(e,1);if(r!==null){var o=tt();Pt(r,e,1,o)}}),Hu(e,1)}};du=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=tt();Pt(t,e,134217728,n)}Hu(e,134217728)}};cp=function(e){if(e.tag===13){var t=yn(e),n=qt(e,t);if(n!==null){var r=tt();Pt(n,e,t,r)}Hu(e,t)}};dp=function(){return we};fp=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Zl=function(e,t,n){switch(t){case"input":if(Vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ka(r);if(!o)throw Error(M(90));Hf(r),Vl(r,o)}}}break;case"textarea":Wf(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};Jf=zu;qf=Qn;var v1={usingClientEntryPoint:!1,Events:[Qo,fr,ka,Xf,Zf,zu]},Zr={findFiberByHostInstance:On,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},y1={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=np(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pi.isDisabled&&pi.supportsFiber)try{ya=pi.inject(y1),zt=pi}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v1;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(t))throw Error(M(200));return h1(e,t,null,n)};ht.createRoot=function(e,t){if(!Wu(e))throw Error(M(299));var n=!1,r="",o=Ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Uu(e,1,!1,null,null,n,!1,r,o),e[Jt]=t.current,Ro(e.nodeType===8?e.parentNode:e),new Vu(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=np(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return Qn(e)};ht.hydrate=function(e,t,n){if(!Ta(t))throw Error(M(200));return Na(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!Wu(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Ih;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Oh(t,null,e,1,n!=null?n:null,o,!1,i,a),e[Jt]=t.current,Ro(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Pa(t)};ht.render=function(e,t,n){if(!Ta(t))throw Error(M(200));return Na(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!Ta(e))throw Error(M(40));return e._reactRootContainer?(Qn(function(){Na(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};ht.unstable_batchedUpdates=zu;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ta(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Na(e,t,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ht})(tu);var bd=tu.exports;Ml.createRoot=bd.createRoot,Ml.hydrateRoot=bd.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}var _e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_e||(_e={}));const $d="popstate";function x1(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:l="",hash:s=""}=Bt(o.location.hash.substr(1));return Bn("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:tn(i))}function r(o,i){w1(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return k1(t,n,r,e)}function w1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function S1(){return Math.random().toString(36).substr(2,8)}function Cd(e){return{usr:e.state,key:e.key}}function Bn(e,t,n,r){return n===void 0&&(n=null),Ee({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bt(t):t,{state:n,key:t&&t.key||r||S1()})}function tn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zo(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:tn(e);return new URL(n,t)}function k1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=_e.Pop,s=null;function u(){l=_e.Pop,s&&s({action:l,location:c.location})}function f(v,m){l=_e.Push;let w=Bn(c.location,v,m);n&&n(w,v);let b=Cd(w),h=c.createHref(w);try{a.pushState(b,"",h)}catch{o.location.assign(h)}i&&s&&s({action:l,location:c.location})}function d(v,m){l=_e.Replace;let w=Bn(c.location,v,m);n&&n(w,v);let b=Cd(w),h=c.createHref(w);a.replaceState(b,"",h),i&&s&&s({action:l,location:c.location})}let c={get action(){return l},get location(){return e(o,a)},listen(v){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener($d,u),s=v,()=>{o.removeEventListener($d,u),s=null}},createHref(v){return t(o,v)},encodeLocation(v){let m=zo(tn(v));return Ee({},v,{pathname:m.pathname,search:m.search,hash:m.hash})},push:f,replace:d,go(v){return a.go(v)}};return c}var He;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(He||(He={}));function b1(e){return e.index===!0}function _h(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,o)=>{let i=[...t,o],a=typeof r.id=="string"?r.id:i.join("-");return pe(r.index!==!0||!r.children,"Cannot specify children on an index route"),pe(!n.has(a),'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),n.add(a),b1(r)?Ee({},r,{id:a}):Ee({},r,{id:a,children:r.children?_h(r.children,i,n):void 0})})}function so(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Bt(t):t,o=zh(r.pathname||"/",n);if(o==null)return null;let i=Mh(e);$1(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=D1(i[l],_1(o));return a}function Mh(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let a={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(pe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let l=wn([r,a.relativePath]),s=n.concat(a);o.children&&o.children.length>0&&(pe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Mh(o.children,t,s,l)),!(o.path==null&&!o.index)&&t.push({path:l,score:T1(l,o.index),routesMeta:s})}),t}function $1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:N1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const C1=/^:\w+$/,A1=3,E1=2,L1=1,R1=10,P1=-2,Ad=e=>e==="*";function T1(e,t){let n=e.split("/"),r=n.length;return n.some(Ad)&&(r+=P1),t&&(r+=E1),n.filter(o=>!Ad(o)).reduce((o,i)=>o+(C1.test(i)?A1:i===""?L1:R1),r)}function N1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function D1(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=O1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;i.push({params:r,pathname:wn([o,f.pathname]),pathnameBase:j1(wn([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=wn([o,f.pathnameBase]))}return i}function O1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=I1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let c=l[d]||"";a=i.slice(0,i.length-c.length).replace(/(.)\/+$/,"$1")}return u[f]=M1(l[d]||"",f),u},{}),pathname:i,pathnameBase:a,pattern:e}}function I1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function _1(e){try{return decodeURI(e)}catch(t){return Qu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function M1(e,t){try{return decodeURIComponent(e)}catch(n){return Qu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function zh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function z1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Bt(e):e;return{pathname:n?n.startsWith("/")?n:F1(n,t):t,search:B1(r),hash:U1(o)}}function F1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Cl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ku(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fh(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Bt(e):(o=Ee({},e),pe(!o.pathname||!o.pathname.includes("?"),Cl("?","pathname","search",o)),pe(!o.pathname||!o.pathname.includes("#"),Cl("#","pathname","hash",o)),pe(!o.search||!o.search.includes("#"),Cl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let c=a.split("/");for(;c[0]==="..";)c.shift(),d-=1;o.pathname=c.join("/")}l=d>=0?t[d]:"/"}let s=z1(o,l),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const wn=e=>e.join("/").replace(/\/\/+/g,"/"),j1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ed extends Error{}class H1{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,pe(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((o,i)=>n=i),this.controller=new AbortController;let r=()=>n(new Ed("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(t).reduce((o,i)=>{let[a,l]=i;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{})}trackPromise(t,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(t);let r=Promise.race([n,this.abortPromise]).then(o=>this.onSettle(r,t,null,o),o=>this.onSettle(r,t,o));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,o){if(this.controller.signal.aborted&&r instanceof Ed)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const i=this.subscriber;return r?(Object.defineProperty(t,"_error",{get:()=>r}),i&&i(!1),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>o}),i&&i(!1),o)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let t=this.subscriber;t&&t(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(o=>{this.subscribe(i=>{t.removeEventListener("abort",r),(i||this.done)&&o(i)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return pe(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,o]=n;return Object.assign(t,{[r]:W1(o)})},{})}}function V1(e){return e instanceof Promise&&e._tracked===!0}function W1(e){if(!V1(e))return e;if(e._error)throw e._error;return e._data}class Ur{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function jh(e){return e instanceof Ur}const Al={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Q1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},K1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G1=!K1;function Y1(e){pe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=_h(e.routes),n=null,r=new Set,o=null,i=null,a=null,l=!1,s=so(t,e.history.location,e.basename),u=null;if(s==null){let{matches:C,route:N,error:O}=Nd(t);s=C,u={[N.id]:O}}let f=!s.some(C=>C.route.loader)||e.hydrationData!=null,d,c={historyAction:e.history.action,location:e.history.location,matches:s,initialized:f,navigation:Al,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||u,fetchers:new Map},v=_e.Pop,m=!1,w,b=!1,h=!1,p=[],g=[],x=new Map,$=0,A=-1,R=new Map,I=new Set,X=new Map,F=new Map;function ue(){return n=e.history.listen(C=>{let{action:N,location:O}=C;return E(N,O)}),c.initialized||E(_e.Pop,c.location),d}function ie(){n&&n(),r.clear(),w&&w.abort(),c.fetchers.forEach((C,N)=>P(N))}function ce(C){return r.add(C),()=>r.delete(C)}function ee(C){c=Ee({},c,C),r.forEach(N=>N(c))}function re(C,N){var O;let J=c.actionData!=null&&c.navigation.formMethod!=null&&c.navigation.state==="loading"&&((O=c.navigation.formAction)==null?void 0:O.split("?")[0])===C.pathname,q=N.loaderData?{loaderData:Ll(c.loaderData,N.loaderData,N.matches||[])}:{};ee(Ee({},J?{}:{actionData:null},N,q,{historyAction:v,location:C,initialized:!0,navigation:Al,revalidation:"idle",restoreScrollPosition:c.navigation.formData?!1:le(C,N.matches||c.matches),preventScrollReset:m})),b||v===_e.Pop||(v===_e.Push?e.history.push(C,C.state):v===_e.Replace&&e.history.replace(C,C.state)),v=_e.Pop,m=!1,b=!1,h=!1,p=[],g=[]}async function ke(C,N){if(typeof C=="number"){e.history.go(C);return}let{path:O,submission:J,error:q}=Ld(C,N),oe=Bn(c.location,O,N&&N.state);oe=e.history.encodeLocation(oe);let B=(N&&N.replace)===!0||J!=null?_e.Replace:_e.Push,te=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0;return await E(B,oe,{submission:J,pendingError:q,preventScrollReset:te,replace:N&&N.replace})}function se(){if(V(),ee({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){E(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}E(v||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function E(C,N,O){w&&w.abort(),w=null,v=C,b=(O&&O.startUninterruptedRevalidation)===!0,ve(c.location,c.matches),m=(O&&O.preventScrollReset)===!0;let J=O&&O.overrideNavigation,q=so(t,N,e.basename);if(!q){let{matches:Ke,route:qn,error:Ht}=Nd(t);fe(),re(N,{matches:Ke,loaderData:{},errors:{[qn.id]:Ht}});return}if(tv(c.location,N)){re(N,{matches:q});return}w=new AbortController;let oe=qr(N,w.signal,O&&O.submission),B,te;if(O&&O.pendingError)te={[xr(q).route.id]:O.pendingError};else if(O&&O.submission){let Ke=await H(oe,N,O.submission,q,{replace:O.replace});if(Ke.shortCircuited)return;B=Ke.pendingActionData,te=Ke.pendingActionError,J=Ee({state:"loading",location:N},O.submission)}let{shortCircuited:ye,loaderData:xe,errors:ge}=await Y(oe,N,q,J,O&&O.submission,O&&O.replace,B,te);ye||(w=null,re(N,{matches:q,loaderData:xe,errors:ge}))}async function H(C,N,O,J,q){V();let oe=Ee({state:"submitting",location:N},O);ee({navigation:oe});let B,te=Md(J,N);if(!te.route.action)B=Dd(N);else if(B=await Jr("action",C,te,J,d.basename),C.signal.aborted)return{shortCircuited:!0};if(Lr(B)){let ye=Ee({state:"loading",location:Bn(c.location,B.location)},O);return await j(B,ye,q&&q.replace),{shortCircuited:!0}}if(xo(B)){let ye=xr(J,te.route.id);return(q&&q.replace)!==!0&&(v=_e.Push),{pendingActionError:{[ye.route.id]:B.error}}}if(Mn(B))throw new Error("defer() is not supported in actions");return{pendingActionData:{[te.route.id]:B.data}}}async function Y(C,N,O,J,q,oe,B,te){let ye=J;ye||(ye={state:"loading",location:N,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0});let[xe,ge]=Rd(c,O,q,N,h,p,g,B,te,X);if(fe(Ge=>!(O&&O.some(ot=>ot.route.id===Ge))||xe&&xe.some(ot=>ot.route.id===Ge)),xe.length===0&&ge.length===0)return re(N,{matches:O,loaderData:Ll(c.loaderData,{},O),errors:te||null,actionData:B||null}),{shortCircuited:!0};b||(ge.forEach(Ge=>{let[ot]=Ge,tr=c.fetchers.get(ot),Hr={state:"loading",data:tr&&tr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(ot,Hr)}),ee(Ee({navigation:ye,actionData:B||c.actionData||null},ge.length>0?{fetchers:new Map(c.fetchers)}:{}))),A=++$,ge.forEach(Ge=>{let[ot]=Ge;return x.set(ot,w)});let{results:Ke,loaderResults:qn,fetcherResults:Ht}=await k(c.matches,O,xe,ge,C);if(C.signal.aborted)return{shortCircuited:!0};ge.forEach(Ge=>{let[ot]=Ge;return x.delete(ot)});let Pn=Od(Ke);if(Pn){let Ge=El(c,Pn);return await j(Pn,Ge,oe),{shortCircuited:!0}}let{loaderData:Ja,errors:Xo}=Td(c,O,xe,qn,te,ge,Ht,F);F.forEach((Ge,ot)=>{Ge.subscribe(tr=>{(tr||Ge.done)&&F.delete(ot)})}),Q();let er=ae(A);return Ee({loaderData:Ja,errors:Xo},er||ge.length>0?{fetchers:new Map(c.fetchers)}:{})}function de(C){return c.fetchers.get(C)||Q1}function z(C,N,O,J){if(G1)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");x.has(C)&&U(C);let q=so(t,O,e.basename);if(!q){_(C,N,new Ur(404,"Not Found",null));return}let{path:oe,submission:B}=Ld(O,J,!0),te=Md(q,oe);if(B){L(C,N,oe,te,q,B);return}X.set(C,[oe,te,q]),T(C,N,oe,te,q)}async function L(C,N,O,J,q,oe){if(V(),X.delete(C),!J.route.action){let{error:bt}=Dd(O);_(C,N,bt);return}let B=c.fetchers.get(C),te=Ee({state:"submitting"},oe,{data:B&&B.data});c.fetchers.set(C,te),ee({fetchers:new Map(c.fetchers)});let ye=new AbortController,xe=qr(O,ye.signal,oe);x.set(C,ye);let ge=await Jr("action",xe,J,q,d.basename);if(xe.signal.aborted){x.get(C)===ye&&x.delete(C);return}if(Lr(ge)){x.delete(C),I.add(C);let bt=Ee({state:"loading"},oe,{data:void 0});c.fetchers.set(C,bt),ee({fetchers:new Map(c.fetchers)});let Vt=Ee({state:"loading",location:Bn(c.location,ge.location)},oe);await j(ge,Vt);return}if(xo(ge)){_(C,N,ge.error);return}Mn(ge)&&pe(!1,"defer() is not supported in actions");let Ke=c.navigation.location||c.location,qn=qr(Ke,ye.signal),Ht=c.navigation.state!=="idle"?so(t,c.navigation.location,e.basename):c.matches;pe(Ht,"Didn't find any matches after fetcher action");let Pn=++$;R.set(C,Pn);let Ja=Ee({state:"loading",data:ge.data},oe);c.fetchers.set(C,Ja);let[Xo,er]=Rd(c,Ht,oe,Ke,h,p,g,{[J.route.id]:ge.data},void 0,X);er.filter(bt=>{let[Vt]=bt;return Vt!==C}).forEach(bt=>{let[Vt]=bt,hc=c.fetchers.get(Vt),qg={state:"loading",data:hc&&hc.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(Vt,qg),x.set(Vt,ye)}),ee({fetchers:new Map(c.fetchers)});let{results:Ge,loaderResults:ot,fetcherResults:tr}=await k(c.matches,Ht,Xo,er,qn);if(ye.signal.aborted)return;R.delete(C),x.delete(C),er.forEach(bt=>{let[Vt]=bt;return x.delete(Vt)});let Hr=Od(Ge);if(Hr){let bt=El(c,Hr);await j(Hr,bt);return}let{loaderData:fc,errors:pc}=Td(c,c.matches,Xo,ot,void 0,er,tr,F),Zg={state:"idle",data:ge.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(C,Zg);let Jg=ae(Pn);c.navigation.state==="loading"&&Pn>A?(pe(v,"Expected pending action"),w&&w.abort(),re(c.navigation.location,{matches:Ht,loaderData:fc,errors:pc,fetchers:new Map(c.fetchers)})):(ee(Ee({errors:pc,loaderData:Ll(c.loaderData,fc,Ht)},Jg?{fetchers:new Map(c.fetchers)}:{})),h=!1)}async function T(C,N,O,J,q){let oe=c.fetchers.get(C),B={state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,data:oe&&oe.data};c.fetchers.set(C,B),ee({fetchers:new Map(c.fetchers)});let te=new AbortController,ye=qr(O,te.signal);x.set(C,te);let xe=await Jr("loader",ye,J,q,d.basename);if(Mn(xe)&&(xe=await Vh(xe,ye.signal,!0)||xe),x.get(C)===te&&x.delete(C),ye.signal.aborted)return;if(Lr(xe)){let Ke=El(c,xe);await j(xe,Ke);return}if(xo(xe)){let Ke=xr(c.matches,N);c.fetchers.delete(C),ee({fetchers:new Map(c.fetchers),errors:{[Ke.route.id]:xe.error}});return}pe(!Mn(xe),"Unhandled fetcher deferred data");let ge={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(C,ge),ee({fetchers:new Map(c.fetchers)})}async function j(C,N,O){C.revalidate&&(h=!0),pe(N.location,"Expected a location on the redirect navigation"),w=null;let J=O===!0?_e.Replace:_e.Push;await E(J,N.location,{overrideNavigation:N})}async function k(C,N,O,J,q){let oe=await Promise.all([...O.map(ye=>Jr("loader",q,ye,N,d.basename)),...J.map(ye=>{let[,xe,ge,Ke]=ye;return Jr("loader",qr(xe,q.signal),ge,Ke,d.basename)})]),B=oe.slice(0,O.length),te=oe.slice(O.length);return await Promise.all([Id(C,O,B,q.signal,!1,c.loaderData),Id(C,J.map(ye=>{let[,,xe]=ye;return xe}),te,q.signal,!0)]),{results:oe,loaderResults:B,fetcherResults:te}}function V(){h=!0,p.push(...fe()),X.forEach((C,N)=>{x.has(N)&&(g.push(N),U(N))})}function _(C,N,O){let J=xr(c.matches,N);P(C),ee({errors:{[J.route.id]:O},fetchers:new Map(c.fetchers)})}function P(C){x.has(C)&&U(C),X.delete(C),R.delete(C),I.delete(C),c.fetchers.delete(C)}function U(C){let N=x.get(C);pe(N,"Expected fetch controller: "+C),N.abort(),x.delete(C)}function G(C){for(let N of C){let J={state:"idle",data:de(N).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(N,J)}}function Q(){let C=[];for(let N of I){let O=c.fetchers.get(N);pe(O,"Expected fetcher: "+N),O.state==="loading"&&(I.delete(N),C.push(N))}G(C)}function ae(C){let N=[];for(let[O,J]of R)if(J<C){let q=c.fetchers.get(O);pe(q,"Expected fetcher: "+O),q.state==="loading"&&(U(O),R.delete(O),N.push(O))}return G(N),N.length>0}function fe(C){let N=[];return F.forEach((O,J)=>{(!C||C(J))&&(O.cancel(),N.push(J),F.delete(J))}),N}function Z(C,N,O){if(o=C,a=N,i=O||(J=>J.key),!l&&c.navigation===Al){l=!0;let J=le(c.location,c.matches);J!=null&&ee({restoreScrollPosition:J})}return()=>{o=null,a=null,i=null}}function ve(C,N){if(o&&i&&a){let O=N.map(q=>_d(q,c.loaderData)),J=i(C,O)||C.key;o[J]=a()}}function le(C,N){if(o&&i&&a){let O=N.map(oe=>_d(oe,c.loaderData)),J=i(C,O)||C.key,q=o[J];if(typeof q=="number")return q}return null}return d={get basename(){return e.basename},get state(){return c},get routes(){return t},initialize:ue,subscribe:ce,enableScrollRestoration:Z,navigate:ke,fetch:z,revalidate:se,createHref:C=>e.history.createHref(C),getFetcher:de,deleteFetcher:P,dispose:ie,_internalFetchControllers:x,_internalActiveDeferreds:F},d}const X1=new Set(["POST","PUT","PATCH","DELETE"]);[...X1];function Ld(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:tn(e);if(!t||!("formMethod"in t)&&!("formData"in t))return{path:r};if(t.formMethod!=null&&t.formMethod!=="get")return{path:r,submission:{formMethod:t.formMethod,formAction:Hh(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData}};if(!t.formData)return{path:r};let o=Bt(r);try{let i=Uh(t.formData);n&&o.search&&Wh(o.search)&&i.append("index",""),o.search="?"+i}catch{return{path:r,error:new Ur(400,"Bad Request","Cannot submit binary form data using GET")}}return{path:tn(o)}}function El(e,t){let{formMethod:n,formAction:r,formEncType:o,formData:i}=e.navigation;return{state:"loading",location:Bn(e.location,t.location),formMethod:n||void 0,formAction:r||void 0,formEncType:o||void 0,formData:i||void 0}}function Z1(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Rd(e,t,n,r,o,i,a,l,s,u){let f=s?Object.values(s)[0]:l?Object.values(l)[0]:null,d=s?Object.keys(s)[0]:void 0,v=Z1(t,d).filter((w,b)=>w.route.loader!=null&&(J1(e.loaderData,e.matches[b],w)||i.some(h=>h===w.route.id)||Pd(e.location,e.matches[b],n,r,w,o,f))),m=[];return u&&u.forEach((w,b)=>{let[h,p,g]=w;a.includes(b)?m.push([b,h,p,g]):o&&Pd(h,p,n,h,p,o,f)&&m.push([b,h,p,g])}),[v,m]}function J1(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Bh(e,t){let n=e.route.path;return e.pathname!==t.pathname||n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Pd(e,t,n,r,o,i,a){let l=zo(e),s=t.params,u=zo(r),f=o.params,d=Bh(t,o)||l.toString()===u.toString()||l.search!==u.search||i;if(o.route.shouldRevalidate){let c=o.route.shouldRevalidate(Ee({currentUrl:l,currentParams:s,nextUrl:u,nextParams:f},n,{actionResult:a,defaultShouldRevalidate:d}));if(typeof c=="boolean")return c}return d}async function Jr(e,t,n,r,o,i,a){i===void 0&&(i=!1),a===void 0&&(a=!1);let l,s,u,f=new Promise((c,v)=>u=v),d=()=>u();t.signal.addEventListener("abort",d);try{let c=n.route[e];pe(c,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),s=await Promise.race([c({request:t,params:n.params}),f])}catch(c){l=He.error,s=c}finally{t.signal.removeEventListener("abort",d)}if(s instanceof Response){let c=s.status;if(c>=300&&c<=399){let w=s.headers.get("Location");pe(w,"Redirects returned/thrown from loaders/actions must have a Location header");let b=r.slice(0,r.indexOf(n)+1),h=Ku(b).map(x=>x.pathnameBase),p=zo(t.url).pathname,g=Fh(w,h,p);if(pe(tn(g),"Unable to resolve redirect location: "+s.headers.get("Location")),o){let x=g.pathname;g.pathname=x==="/"?o:wn([o,x])}if(w=tn(g),i)throw s.headers.set("Location",w),s;return{type:He.redirect,status:c,location:w,revalidate:s.headers.get("X-Remix-Revalidate")!==null}}if(a)throw{type:l||He.data,response:s};let v,m=s.headers.get("Content-Type");return m&&m.startsWith("application/json")?v=await s.json():v=await s.text(),l===He.error?{type:l,error:new Ur(c,s.statusText,v),headers:s.headers}:{type:He.data,data:v,statusCode:s.status,headers:s.headers}}return l===He.error?{type:l,error:s}:s instanceof H1?{type:He.deferred,deferredData:s}:{type:He.data,data:s}}function qr(e,t,n){let r=zo(Hh(e)).toString(),o={signal:t};if(n){let{formMethod:i,formEncType:a,formData:l}=n;o.method=i.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?Uh(l):l}return new Request(r,o)}function Uh(e){let t=new URLSearchParams;for(let[n,r]of e.entries())pe(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(n,r);return t}function q1(e,t,n,r,o){let i={},a=null,l,s=!1,u={};return n.forEach((f,d)=>{let c=t[d].route.id;if(pe(!Lr(f),"Cannot handle redirect results in processLoaderData"),xo(f)){let v=xr(e,c),m=f.error;r&&(m=Object.values(r)[0],r=void 0),a=Object.assign(a||{},{[v.route.id]:m}),s||(s=!0,l=jh(f.error)?f.error.status:500),f.headers&&(u[c]=f.headers)}else Mn(f)?(o&&o.set(c,f.deferredData),i[c]=f.deferredData.data):(i[c]=f.data,f.statusCode!=null&&f.statusCode!==200&&!s&&(l=f.statusCode),f.headers&&(u[c]=f.headers))}),r&&(a=r),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function Td(e,t,n,r,o,i,a,l){let{loaderData:s,errors:u}=q1(t,n,r,o,l);for(let f=0;f<i.length;f++){let[d,,c]=i[f];pe(a!==void 0&&a[f]!==void 0,"Did not find corresponding fetcher result");let v=a[f];if(xo(v)){let m=xr(e.matches,c.route.id);u&&u[m.route.id]||(u=Ee({},u,{[m.route.id]:v.error})),e.fetchers.delete(d)}else{if(Lr(v))throw new Error("Unhandled fetcher revalidation redirect");if(Mn(v))throw new Error("Unhandled fetcher deferred data");{let m={state:"idle",data:v.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};e.fetchers.set(d,m)}}}return{loaderData:s,errors:u}}function Ll(e,t,n){let r=Ee({},t);return n.forEach(o=>{let i=o.route.id;t[i]===void 0&&e[i]!==void 0&&(r[i]=e[i])}),r}function xr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function ev(e,t,n){let r=e.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-"+t+"-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r,error:new Ur(t,n,null)}}function Nd(e){return ev(e,404,"Not Found")}function Dd(e){let t=typeof e=="string"?e:tn(e);return console.warn("You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for "+("["+t+"]")),{type:He.error,error:new Ur(405,"Method Not Allowed","")}}function Od(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Lr(n))return n}}function Hh(e){let t=typeof e=="string"?Bt(e):e;return tn(Ee({},t,{hash:""}))}function tv(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Mn(e){return e.type===He.deferred}function xo(e){return e.type===He.error}function Lr(e){return(e&&e.type)===He.redirect}async function Id(e,t,n,r,o,i){for(let a=0;a<n.length;a++){let l=n[a],s=t[a],u=e.find(d=>d.route.id===s.route.id),f=u!=null&&!Bh(u,s)&&(i&&i[s.route.id])!==void 0;Mn(l)&&(o||f)&&await Vh(l,r,o).then(d=>{d&&(n[a]=d||n[a])})}}async function Vh(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:He.data,data:e.deferredData.unwrappedData}}catch(o){return{type:He.error,error:o}}return{type:He.data,data:e.deferredData.data}}}function Wh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function _d(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Md(e,t){let n=typeof t=="string"?Bt(t).search:t.search;if(e[e.length-1].route.index&&Wh(n||""))return e[e.length-1];let r=Ku(e);return r[r.length-1]}var Da={exports:{}},Oa={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=y.exports,rv=Symbol.for("react.element"),ov=Symbol.for("react.fragment"),iv=Object.prototype.hasOwnProperty,av=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lv={key:!0,ref:!0,__self:!0,__source:!0};function Qh(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)iv.call(t,r)&&!lv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:rv,type:e,key:i,ref:a,props:o,_owner:av.current}}Oa.Fragment=ov;Oa.jsx=Qh;Oa.jsxs=Qh;(function(e){e.exports=Oa})(Da);const Kh=Da.exports.Fragment,S=Da.exports.jsx,ne=Da.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ia.apply(this,arguments)}function sv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const uv=typeof Object.is=="function"?Object.is:sv,{useState:cv,useEffect:dv,useLayoutEffect:fv,useDebugValue:pv}=_l;function hv(e,t,n){const r=t(),[{inst:o},i]=cv({inst:{value:r,getSnapshot:t}});return fv(()=>{o.value=r,o.getSnapshot=t,Rl(o)&&i({inst:o})},[e,r,t]),dv(()=>(Rl(o)&&i({inst:o}),e(()=>{Rl(o)&&i({inst:o})})),[e]),pv(r),r}function Rl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!uv(n,r)}catch{return!0}}function gv(e,t,n){return t()}const mv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vv=!mv,yv=vv?gv:hv,xv="useSyncExternalStore"in _l?(e=>e.useSyncExternalStore)(_l):yv,wv=y.exports.createContext(null),Gh=y.exports.createContext(null),Gu=y.exports.createContext(null),Yh=y.exports.createContext(null),Ia=y.exports.createContext(null),Go=y.exports.createContext({outlet:null,matches:[]}),Xh=y.exports.createContext(null);function _a(){return y.exports.useContext(Ia)!=null}function Yu(){return _a()||pe(!1),y.exports.useContext(Ia).location}function Zh(){_a()||pe(!1);let{basename:e,navigator:t}=y.exports.useContext(Yh),{matches:n}=y.exports.useContext(Go),{pathname:r}=Yu(),o=JSON.stringify(Ku(n).map(l=>l.pathnameBase)),i=y.exports.useRef(!1);return y.exports.useEffect(()=>{i.current=!0}),y.exports.useCallback(function(l,s){if(s===void 0&&(s={}),!i.current)return;if(typeof l=="number"){t.go(l);return}let u=Fh(l,JSON.parse(o),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:wn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,o,r])}const Sv=y.exports.createContext(null);function kv(e){let t=y.exports.useContext(Go).outlet;return t&&S(Sv.Provider,{value:e,children:t})}function bv(e,t){_a()||pe(!1);let n=y.exports.useContext(Gu),{matches:r}=y.exports.useContext(Go),o=r[r.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Yu(),s;if(t){var u;let m=typeof t=="string"?Bt(t):t;a==="/"||((u=m.pathname)==null?void 0:u.startsWith(a))||pe(!1),s=m}else s=l;let f=s.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",c=so(e,{pathname:d}),v=Ev(c&&c.map(m=>Object.assign({},m,{params:Object.assign({},i,m.params),pathname:wn([a,m.pathname]),pathnameBase:m.pathnameBase==="/"?a:wn([a,m.pathnameBase])})),r,n||void 0);return t&&v?S(Ia.Provider,{value:{location:ia({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:_e.Pop},children:v}):v}function $v(){let e=Rv(),t=jh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return ne(Kh,{children:[S("h2",{children:"Unhandled Thrown Error!"}),S("h3",{style:{fontStyle:"italic"},children:t}),n?S("pre",{style:o,children:n}):null,S("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),ne("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",S("code",{style:i,children:"errorElement"})," props on\xA0",S("code",{style:i,children:"<Route>"})]})]})}class Cv extends y.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S(Xh.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Av(e){let{routeContext:t,match:n,children:r}=e,o=y.exports.useContext(wv);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),S(Go.Provider,{value:t,children:r})}function Ev(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||pe(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,l)=>{let s=a.route.id?o==null?void 0:o[a.route.id]:null,u=n?a.route.errorElement||S($v,{}):null,f=()=>S(Av,{match:a,routeContext:{outlet:i,matches:t.concat(r.slice(0,l+1))},children:s?u:a.route.element!==void 0?a.route.element:i});return n&&(a.route.errorElement||l===0)?S(Cv,{location:n.location,component:u,error:s,children:f()}):f()},null)}var zd;(function(e){e.UseRevalidator="useRevalidator"})(zd||(zd={}));var Ps;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ps||(Ps={}));function Lv(e){let t=y.exports.useContext(Gu);return t||pe(!1),t}function Rv(){var e;let t=y.exports.useContext(Xh),n=Lv(Ps.UseRouteError),r=y.exports.useContext(Go),o=r.matches[r.matches.length-1];return t||(r||pe(!1),o.route.id||pe(!1),(e=n.errors)==null?void 0:e[o.route.id])}function Pv(e){let{fallbackElement:t,router:n}=e,r=xv(n.subscribe,()=>n.state,()=>n.state),o=y.exports.useMemo(()=>({createHref:n.createHref,go:a=>n.navigate(a),push:(a,l,s)=>n.navigate(a,{state:l,preventScrollReset:s==null?void 0:s.preventScrollReset}),replace:(a,l,s)=>n.navigate(a,{replace:!0,state:l,preventScrollReset:s==null?void 0:s.preventScrollReset})}),[n]),i=n.basename||"/";return S(Gh.Provider,{value:{router:n,navigator:o,static:!1,basename:i},children:S(Gu.Provider,{value:r,children:S(Dv,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o,children:n.state.initialized?S(Ov,{}):t})})})}function Tv(e){return kv(e.context)}function Nv(e){pe(!1)}function Dv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=_e.Pop,navigator:i,static:a=!1}=e;_a()&&pe(!1);let l=t.replace(/^\/*/,"/"),s=y.exports.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=Bt(r));let{pathname:u="/",search:f="",hash:d="",state:c=null,key:v="default"}=r,m=y.exports.useMemo(()=>{let w=zh(u,l);return w==null?null:{pathname:w,search:f,hash:d,state:c,key:v}},[l,u,f,d,c,v]);return m==null?null:S(Yh.Provider,{value:s,children:S(Ia.Provider,{children:n,value:{location:m,navigationType:o}})})}function Ov(e){let{children:t,location:n}=e,r=y.exports.useContext(Gh),o=r&&!t?r.router.routes:Ts(t);return bv(o,n)}var Fd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fd||(Fd={}));new Promise(()=>{});function Ts(e,t){t===void 0&&(t=[]);let n=[];return y.exports.Children.forEach(e,(r,o)=>{if(!y.exports.isValidElement(r))return;if(r.type===y.exports.Fragment){n.push.apply(n,Ts(r.props.children,t));return}r.type!==Nv&&pe(!1),!r.props.index||!r.props.children||pe(!1);let i=[...t,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Ts(r.props.children,i)),n.push(a)}),n}function Jh(e){return e.map(t=>{let n=ia({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=Jh(n.children)),n})}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Iv(e,t){var n;return Y1({basename:t==null?void 0:t.basename,history:x1({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||((n=window)==null?void 0:n.__staticRouterHydrationData),routes:Jh(e)}).initialize()}var jd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(jd||(jd={}));var Bd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bd||(Bd={}));const Ns={};var Ma={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,Xu=Be?Symbol.for("react.element"):60103,Zu=Be?Symbol.for("react.portal"):60106,za=Be?Symbol.for("react.fragment"):60107,Fa=Be?Symbol.for("react.strict_mode"):60108,ja=Be?Symbol.for("react.profiler"):60114,Ba=Be?Symbol.for("react.provider"):60109,Ua=Be?Symbol.for("react.context"):60110,Ju=Be?Symbol.for("react.async_mode"):60111,Ha=Be?Symbol.for("react.concurrent_mode"):60111,Va=Be?Symbol.for("react.forward_ref"):60112,Wa=Be?Symbol.for("react.suspense"):60113,_v=Be?Symbol.for("react.suspense_list"):60120,Qa=Be?Symbol.for("react.memo"):60115,Ka=Be?Symbol.for("react.lazy"):60116,Mv=Be?Symbol.for("react.block"):60121,zv=Be?Symbol.for("react.fundamental"):60117,Fv=Be?Symbol.for("react.responder"):60118,jv=Be?Symbol.for("react.scope"):60119;function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xu:switch(e=e.type,e){case Ju:case Ha:case za:case ja:case Fa:case Wa:return e;default:switch(e=e&&e.$$typeof,e){case Ua:case Va:case Ka:case Qa:case Ba:return e;default:return t}}case Zu:return t}}}function qh(e){return mt(e)===Ha}Se.AsyncMode=Ju;Se.ConcurrentMode=Ha;Se.ContextConsumer=Ua;Se.ContextProvider=Ba;Se.Element=Xu;Se.ForwardRef=Va;Se.Fragment=za;Se.Lazy=Ka;Se.Memo=Qa;Se.Portal=Zu;Se.Profiler=ja;Se.StrictMode=Fa;Se.Suspense=Wa;Se.isAsyncMode=function(e){return qh(e)||mt(e)===Ju};Se.isConcurrentMode=qh;Se.isContextConsumer=function(e){return mt(e)===Ua};Se.isContextProvider=function(e){return mt(e)===Ba};Se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xu};Se.isForwardRef=function(e){return mt(e)===Va};Se.isFragment=function(e){return mt(e)===za};Se.isLazy=function(e){return mt(e)===Ka};Se.isMemo=function(e){return mt(e)===Qa};Se.isPortal=function(e){return mt(e)===Zu};Se.isProfiler=function(e){return mt(e)===ja};Se.isStrictMode=function(e){return mt(e)===Fa};Se.isSuspense=function(e){return mt(e)===Wa};Se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===za||e===Ha||e===ja||e===Fa||e===Wa||e===_v||typeof e=="object"&&e!==null&&(e.$$typeof===Ka||e.$$typeof===Qa||e.$$typeof===Ba||e.$$typeof===Ua||e.$$typeof===Va||e.$$typeof===zv||e.$$typeof===Fv||e.$$typeof===jv||e.$$typeof===Mv)};Se.typeOf=mt;(function(e){e.exports=Se})(Ma);function Bv(e){function t(z,L,T,j,k){for(var V=0,_=0,P=0,U=0,G,Q,ae=0,fe=0,Z,ve=Z=G=0,le=0,C=0,N=0,O=0,J=T.length,q=J-1,oe,B="",te="",ye="",xe="",ge;le<J;){if(Q=T.charCodeAt(le),le===q&&_+U+P+V!==0&&(_!==0&&(Q=_===47?10:47),U=P=V=0,J++,q++),_+U+P+V===0){if(le===q&&(0<C&&(B=B.replace(c,"")),0<B.trim().length)){switch(Q){case 32:case 9:case 59:case 13:case 10:break;default:B+=T.charAt(le)}Q=59}switch(Q){case 123:for(B=B.trim(),G=B.charCodeAt(0),Z=1,O=++le;le<J;){switch(Q=T.charCodeAt(le)){case 123:Z++;break;case 125:Z--;break;case 47:switch(Q=T.charCodeAt(le+1)){case 42:case 47:e:{for(ve=le+1;ve<q;++ve)switch(T.charCodeAt(ve)){case 47:if(Q===42&&T.charCodeAt(ve-1)===42&&le+2!==ve){le=ve+1;break e}break;case 10:if(Q===47){le=ve+1;break e}}le=ve}}break;case 91:Q++;case 40:Q++;case 34:case 39:for(;le++<q&&T.charCodeAt(le)!==Q;);}if(Z===0)break;le++}switch(Z=T.substring(O,le),G===0&&(G=(B=B.replace(d,"").trim()).charCodeAt(0)),G){case 64:switch(0<C&&(B=B.replace(c,"")),Q=B.charCodeAt(1),Q){case 100:case 109:case 115:case 45:C=L;break;default:C=ke}if(Z=t(L,C,Z,Q,k+1),O=Z.length,0<E&&(C=n(ke,B,N),ge=l(3,Z,C,L,ce,ie,O,Q,k,j),B=C.join(""),ge!==void 0&&(O=(Z=ge.trim()).length)===0&&(Q=0,Z="")),0<O)switch(Q){case 115:B=B.replace(A,a);case 100:case 109:case 45:Z=B+"{"+Z+"}";break;case 107:B=B.replace(p,"$1 $2"),Z=B+"{"+Z+"}",Z=re===1||re===2&&i("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=B+Z,j===112&&(Z=(te+=Z,""))}else Z="";break;default:Z=t(L,n(L,B,N),Z,j,k+1)}ye+=Z,Z=N=C=ve=G=0,B="",Q=T.charCodeAt(++le);break;case 125:case 59:if(B=(0<C?B.replace(c,""):B).trim(),1<(O=B.length))switch(ve===0&&(G=B.charCodeAt(0),G===45||96<G&&123>G)&&(O=(B=B.replace(" ",":")).length),0<E&&(ge=l(1,B,L,z,ce,ie,te.length,j,k,j))!==void 0&&(O=(B=ge.trim()).length)===0&&(B="\0\0"),G=B.charCodeAt(0),Q=B.charCodeAt(1),G){case 0:break;case 64:if(Q===105||Q===99){xe+=B+T.charAt(le);break}default:B.charCodeAt(O-1)!==58&&(te+=o(B,G,Q,B.charCodeAt(2)))}N=C=ve=G=0,B="",Q=T.charCodeAt(++le)}}switch(Q){case 13:case 10:_===47?_=0:1+G===0&&j!==107&&0<B.length&&(C=1,B+="\0"),0<E*Y&&l(0,B,L,z,ce,ie,te.length,j,k,j),ie=1,ce++;break;case 59:case 125:if(_+U+P+V===0){ie++;break}default:switch(ie++,oe=T.charAt(le),Q){case 9:case 32:if(U+V+_===0)switch(ae){case 44:case 58:case 9:case 32:oe="";break;default:Q!==32&&(oe=" ")}break;case 0:oe="\\0";break;case 12:oe="\\f";break;case 11:oe="\\v";break;case 38:U+_+V===0&&(C=N=1,oe="\f"+oe);break;case 108:if(U+_+V+ee===0&&0<ve)switch(le-ve){case 2:ae===112&&T.charCodeAt(le-3)===58&&(ee=ae);case 8:fe===111&&(ee=fe)}break;case 58:U+_+V===0&&(ve=le);break;case 44:_+P+U+V===0&&(C=1,oe+="\r");break;case 34:case 39:_===0&&(U=U===Q?0:U===0?Q:U);break;case 91:U+_+P===0&&V++;break;case 93:U+_+P===0&&V--;break;case 41:U+_+V===0&&P--;break;case 40:if(U+_+V===0){if(G===0)switch(2*ae+3*fe){case 533:break;default:G=1}P++}break;case 64:_+P+U+V+ve+Z===0&&(Z=1);break;case 42:case 47:if(!(0<U+V+P))switch(_){case 0:switch(2*Q+3*T.charCodeAt(le+1)){case 235:_=47;break;case 220:O=le,_=42}break;case 42:Q===47&&ae===42&&O+2!==le&&(T.charCodeAt(O+2)===33&&(te+=T.substring(O,le+1)),oe="",_=0)}}_===0&&(B+=oe)}fe=ae,ae=Q,le++}if(O=te.length,0<O){if(C=L,0<E&&(ge=l(2,te,C,z,ce,ie,O,j,k,j),ge!==void 0&&(te=ge).length===0))return xe+te+ye;if(te=C.join(",")+"{"+te+"}",re*ee!==0){switch(re!==2||i(te,2)||(ee=0),ee){case 111:te=te.replace(x,":-moz-$1")+te;break;case 112:te=te.replace(g,"::-webkit-input-$1")+te.replace(g,"::-moz-$1")+te.replace(g,":-ms-input-$1")+te}ee=0}}return xe+te+ye}function n(z,L,T){var j=L.trim().split(b);L=j;var k=j.length,V=z.length;switch(V){case 0:case 1:var _=0;for(z=V===0?"":z[0]+" ";_<k;++_)L[_]=r(z,L[_],T).trim();break;default:var P=_=0;for(L=[];_<k;++_)for(var U=0;U<V;++U)L[P++]=r(z[U]+" ",j[_],T).trim()}return L}function r(z,L,T){var j=L.charCodeAt(0);switch(33>j&&(j=(L=L.trim()).charCodeAt(0)),j){case 38:return L.replace(h,"$1"+z.trim());case 58:return z.trim()+L.replace(h,"$1"+z.trim());default:if(0<1*T&&0<L.indexOf("\f"))return L.replace(h,(z.charCodeAt(0)===58?"":"$1")+z.trim())}return z+L}function o(z,L,T,j){var k=z+";",V=2*L+3*T+4*j;if(V===944){z=k.indexOf(":",9)+1;var _=k.substring(z,k.length-1).trim();return _=k.substring(0,z).trim()+_+";",re===1||re===2&&i(_,1)?"-webkit-"+_+_:_}if(re===0||re===2&&!i(k,1))return k;switch(V){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ue,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return _=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+_+"-webkit-"+k+"-ms-flex-pack"+_+k;case 1005:return m.test(k)?k.replace(v,":-webkit-")+k.replace(v,":-moz-")+k:k;case 1e3:switch(_=k.substring(13).trim(),L=_.indexOf("-")+1,_.charCodeAt(0)+_.charCodeAt(L)){case 226:_=k.replace($,"tb");break;case 232:_=k.replace($,"tb-rl");break;case 220:_=k.replace($,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+_+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(L=(k=z).length-10,_=(k.charCodeAt(L)===33?k.substring(0,L):k).substring(z.indexOf(":",7)+1).trim(),V=_.charCodeAt(0)+(_.charCodeAt(7)|0)){case 203:if(111>_.charCodeAt(8))break;case 115:k=k.replace(_,"-webkit-"+_)+";"+k;break;case 207:case 102:k=k.replace(_,"-webkit-"+(102<V?"inline-":"")+"box")+";"+k.replace(_,"-webkit-"+_)+";"+k.replace(_,"-ms-"+_+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return _=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+_+"-ms-flex-"+_+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(I,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(I,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(F.test(z)===!0)return(_=z.substring(z.indexOf(":")+1)).charCodeAt(0)===115?o(z.replace("stretch","fill-available"),L,T,j).replace(":fill-available",":stretch"):k.replace(_,"-webkit-"+_)+k.replace(_,"-moz-"+_.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,T+j===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+k}return k}function i(z,L){var T=z.indexOf(L===1?":":"{"),j=z.substring(0,L!==3?T:10);return T=z.substring(T+1,z.length-1),H(L!==2?j:j.replace(X,"$1"),T,L)}function a(z,L){var T=o(L,L.charCodeAt(0),L.charCodeAt(1),L.charCodeAt(2));return T!==L+";"?T.replace(R," or ($1)").substring(4):"("+L+")"}function l(z,L,T,j,k,V,_,P,U,G){for(var Q=0,ae=L,fe;Q<E;++Q)switch(fe=se[Q].call(f,z,ae,T,j,k,V,_,P,U,G)){case void 0:case!1:case!0:case null:break;default:ae=fe}if(ae!==L)return ae}function s(z){switch(z){case void 0:case null:E=se.length=0;break;default:if(typeof z=="function")se[E++]=z;else if(typeof z=="object")for(var L=0,T=z.length;L<T;++L)s(z[L]);else Y=!!z|0}return s}function u(z){return z=z.prefix,z!==void 0&&(H=null,z?typeof z!="function"?re=1:(re=2,H=z):re=0),u}function f(z,L){var T=z;if(33>T.charCodeAt(0)&&(T=T.trim()),de=T,T=[de],0<E){var j=l(-1,L,T,T,ce,ie,0,0,0,0);j!==void 0&&typeof j=="string"&&(L=j)}var k=t(ke,T,L,0,0);return 0<E&&(j=l(-2,k,T,T,ce,ie,k.length,0,0,0),j!==void 0&&(k=j)),de="",ee=0,ie=ce=1,k}var d=/^\0+/g,c=/[\0\r\f]/g,v=/: */g,m=/zoo|gra/,w=/([,: ])(transform)/g,b=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,x=/:(read-only)/g,$=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,I=/-self|flex-/g,X=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,ue=/([^-])(image-set\()/,ie=1,ce=1,ee=0,re=1,ke=[],se=[],E=0,H=null,Y=0,de="";return f.use=s,f.set=u,e!==void 0&&u(e),f}var Uv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Hv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Vv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ud=Hv(function(e){return Vv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),qu=Ma.exports,Wv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ec={};ec[qu.ForwardRef]=Kv;ec[qu.Memo]=eg;function Hd(e){return qu.isMemo(e)?eg:ec[e.$$typeof]||Wv}var Gv=Object.defineProperty,Yv=Object.getOwnPropertyNames,Vd=Object.getOwnPropertySymbols,Xv=Object.getOwnPropertyDescriptor,Zv=Object.getPrototypeOf,Wd=Object.prototype;function tg(e,t,n){if(typeof t!="string"){if(Wd){var r=Zv(t);r&&r!==Wd&&tg(e,r,n)}var o=Yv(t);Vd&&(o=o.concat(Vd(t)));for(var i=Hd(e),a=Hd(t),l=0;l<o.length;++l){var s=o[l];if(!Qv[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var u=Xv(t,s);try{Gv(e,s,u)}catch{}}}}return e}var Jv=tg;function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Qd=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ds=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ma.exports.typeOf(e)},aa=Object.freeze([]),Sn=Object.freeze({});function _r(e){return typeof e=="function"}function Kd(e){return e.displayName||e.name||"Component"}function tc(e){return e&&typeof e.styledComponentId=="string"}var Mr=typeof Ns<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",nc=typeof window<"u"&&"HTMLElement"in window,qv=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Ns<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof Ns<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),ey={};function Kn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ty=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Kn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Oi=new Map,la=new Map,wo=1,hi=function(e){if(Oi.has(e))return Oi.get(e);for(;la.has(wo);)wo++;var t=wo++;return Oi.set(e,t),la.set(t,e),t},ny=function(e){return la.get(e)},ry=function(e,t){t>=wo&&(wo=t+1),Oi.set(e,t),la.set(t,e)},oy="style["+Mr+'][data-styled-version="5.3.6"]',iy=new RegExp("^"+Mr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ay=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},ly=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(iy);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(ry(u,s),ay(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},sy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ng=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var f=s[u];if(f&&f.nodeType===1&&f.hasAttribute(Mr))return f}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Mr,"active"),r.setAttribute("data-styled-version","5.3.6");var a=sy();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},uy=function(){function e(n){var r=this.element=ng(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}Kn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),cy=function(){function e(n){var r=this.element=ng(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),dy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Gd=nc,fy={isServer:!nc,useCSSOMInjection:!qv},sa=function(){function e(n,r,o){n===void 0&&(n=Sn),r===void 0&&(r={}),this.options=Lt({},fy,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&nc&&Gd&&(Gd=!1,function(i){for(var a=document.querySelectorAll(oy),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(Mr)!=="active"&&(ly(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return hi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Lt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new dy(a):i?new uy(a):new cy(a),new ty(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(hi(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(hi(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(hi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=ny(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var f=Mr+".g"+a+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(c){c.length>0&&(d+=c+",")}),i+=""+u+f+'{content:"'+d+`"}/*!sc*/
`}}}return i}(this)},e}(),py=/(a)(d)/gi,Yd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Os(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Yd(t%52)+n;return(Yd(t%52)+n).replace(py,"$1-$2")}var wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rg=function(e){return wr(5381,e)};function og(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_r(n)&&!tc(n))return!1}return!0}var hy=rg("5.3.6"),gy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&og(t),this.componentId=n,this.baseHash=wr(hy,n),this.baseStyle=r,sa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Gn(this.rules,t,n,r).join(""),l=Os(wr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,f=wr(this.baseHash,r.hash),d="",c=0;c<u;c++){var v=this.rules[c];if(typeof v=="string")d+=v;else if(v){var m=Gn(v,t,n,r),w=Array.isArray(m)?m.join(""):m;f=wr(f,w+c),d+=w}}if(d){var b=Os(f>>>0);if(!n.hasNameForId(o,b)){var h=r(d,"."+b,void 0,o);n.insertRules(o,b,h)}i.push(b)}}return i.join(" ")},e}(),my=/^\s*\/\/.*$/gm,vy=[":","[",".","#"];function yy(e){var t,n,r,o,i=e===void 0?Sn:e,a=i.options,l=a===void 0?Sn:a,s=i.plugins,u=s===void 0?aa:s,f=new Bv(l),d=[],c=function(w){function b(h){if(h)try{w(h+"}")}catch{}}return function(h,p,g,x,$,A,R,I,X,F){switch(h){case 1:if(X===0&&p.charCodeAt(0)===64)return w(p+";"),"";break;case 2:if(I===0)return p+"/*|*/";break;case 3:switch(I){case 102:case 112:return w(g[0]+p),"";default:return p+(F===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(b)}}}(function(w){d.push(w)}),v=function(w,b,h){return b===0&&vy.indexOf(h[n.length])!==-1||h.match(o)?w:"."+t};function m(w,b,h,p){p===void 0&&(p="&");var g=w.replace(my,""),x=b&&h?h+" "+b+" { "+g+" }":g;return t=p,n=b,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),f(h||!b?"":b,x)}return f.use([].concat(u,[function(w,b,h){w===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,v))},c,function(w){if(w===-2){var b=d;return d=[],b}}])),m.hash=u.length?u.reduce(function(w,b){return b.name||Kn(15),wr(w,b.name)},5381).toString():"",m}var ig=Oe.createContext();ig.Consumer;var ag=Oe.createContext(),xy=(ag.Consumer,new sa),Is=yy();function lg(){return y.exports.useContext(ig)||xy}function sg(){return y.exports.useContext(ag)||Is}var wy=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Is);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Kn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Is),this.name+t.hash},e}(),Sy=/([A-Z])/,ky=/([A-Z])/g,by=/^ms-/,$y=function(e){return"-"+e.toLowerCase()};function Xd(e){return Sy.test(e)?e.replace(ky,$y).replace(by,"-ms-"):e}var Zd=function(e){return e==null||e===!1||e===""};function Gn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Gn(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Zd(e))return"";if(tc(e))return"."+e.styledComponentId;if(_r(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Gn(s,t,n,r)}var u;return e instanceof wy?n?(e.inject(n,r),e.getName(r)):e:Ds(e)?function f(d,c){var v,m,w=[];for(var b in d)d.hasOwnProperty(b)&&!Zd(d[b])&&(Array.isArray(d[b])&&d[b].isCss||_r(d[b])?w.push(Xd(b)+":",d[b],";"):Ds(d[b])?w.push.apply(w,f(d[b],b)):w.push(Xd(b)+": "+(v=b,(m=d[b])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||v in Uv?String(m).trim():m+"px")+";"));return c?[c+" {"].concat(w,["}"]):w}(e):e.toString()}var Jd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return _r(e)||Ds(e)?Jd(Gn(Qd(aa,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Jd(Gn(Qd(e,n)))}var ug=function(e,t,n){return n===void 0&&(n=Sn),e.theme!==n.theme&&e.theme||t||n.theme},Cy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ay=/(^-|-$)/g;function Pl(e){return e.replace(Cy,"-").replace(Ay,"")}var cg=function(e){return Os(rg(e)>>>0)};function gi(e){return typeof e=="string"&&!0}var _s=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ey=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ly(e,t,n){var r=e[n];_s(t)&&_s(r)?dg(r,t):e[n]=t}function dg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(_s(a))for(var l in a)Ey(l)&&Ly(e,a[l],l)}return e}var Fo=Oe.createContext();Fo.Consumer;function Ry(e){var t=y.exports.useContext(Fo),n=y.exports.useMemo(function(){return function(r,o){if(!r)return Kn(14);if(_r(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Kn(8):o?Lt({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Oe.createElement(Fo.Provider,{value:n},e.children):null}var Tl={};function fg(e,t,n){var r=tc(e),o=!gi(e),i=t.attrs,a=i===void 0?aa:i,l=t.componentId,s=l===void 0?function(p,g){var x=typeof p!="string"?"sc":Pl(p);Tl[x]=(Tl[x]||0)+1;var $=x+"-"+cg("5.3.6"+x+Tl[x]);return g?g+"-"+$:$}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(p){return gi(p)?"styled."+p:"Styled("+Kd(p)+")"}(e):u,d=t.displayName&&t.componentId?Pl(t.displayName)+"-"+t.componentId:t.componentId||s,c=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(p,g,x){return e.shouldForwardProp(p,g,x)&&t.shouldForwardProp(p,g,x)}:e.shouldForwardProp);var m,w=new gy(n,d,r?e.componentStyle:void 0),b=w.isStatic&&a.length===0,h=function(p,g){return function(x,$,A,R){var I=x.attrs,X=x.componentStyle,F=x.defaultProps,ue=x.foldedComponentIds,ie=x.shouldForwardProp,ce=x.styledComponentId,ee=x.target,re=function(j,k,V){j===void 0&&(j=Sn);var _=Lt({},k,{theme:j}),P={};return V.forEach(function(U){var G,Q,ae,fe=U;for(G in _r(fe)&&(fe=fe(_)),fe)_[G]=P[G]=G==="className"?(Q=P[G],ae=fe[G],Q&&ae?Q+" "+ae:Q||ae):fe[G]}),[_,P]}(ug($,y.exports.useContext(Fo),F)||Sn,$,I),ke=re[0],se=re[1],E=function(j,k,V,_){var P=lg(),U=sg(),G=k?j.generateAndInjectStyles(Sn,P,U):j.generateAndInjectStyles(V,P,U);return G}(X,R,ke),H=A,Y=se.$as||$.$as||se.as||$.as||ee,de=gi(Y),z=se!==$?Lt({},$,{},se):$,L={};for(var T in z)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?L.as=z[T]:(ie?ie(T,Ud,Y):!de||Ud(T))&&(L[T]=z[T]));return $.style&&se.style!==$.style&&(L.style=Lt({},$.style,{},se.style)),L.className=Array.prototype.concat(ue,ce,E!==ce?E:null,$.className,se.className).filter(Boolean).join(" "),L.ref=H,y.exports.createElement(Y,L)}(m,p,g,b)};return h.displayName=f,(m=Oe.forwardRef(h)).attrs=c,m.componentStyle=w,m.displayName=f,m.shouldForwardProp=v,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):aa,m.styledComponentId=d,m.target=r?e.target:e,m.withComponent=function(p){var g=t.componentId,x=function(A,R){if(A==null)return{};var I,X,F={},ue=Object.keys(A);for(X=0;X<ue.length;X++)I=ue[X],R.indexOf(I)>=0||(F[I]=A[I]);return F}(t,["componentId"]),$=g&&g+"-"+(gi(p)?p:Pl(Kd(p)));return fg(p,Lt({},x,{attrs:c,componentId:$}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?dg({},e.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},o&&Jv(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Ms=function(e){return function t(n,r,o){if(o===void 0&&(o=Sn),!Ma.exports.isValidElementType(r))return Kn(1,String(r));var i=function(){return n(r,o,W.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Lt({},o,{},a))},i.attrs=function(a){return t(n,r,Lt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(fg,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ms[e]=Ms(e)});var Py=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=og(n),sa.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(Gn(this.rules,r,o,i).join(""),""),l=this.componentId+n;o.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&sa.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function Ty(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=W.apply(void 0,[e].concat(n)),i="sc-global-"+cg(JSON.stringify(o)),a=new Py(o,i);function l(u){var f=lg(),d=sg(),c=y.exports.useContext(Fo),v=y.exports.useRef(f.allocateGSInstance(i)).current;return f.server&&s(v,u,f,c,d),y.exports.useLayoutEffect(function(){if(!f.server)return s(v,u,f,c,d),function(){return a.removeStyles(v,f)}},[v,u,f,c,d]),null}function s(u,f,d,c,v){if(a.isStatic)a.renderStyles(u,ey,d,v);else{var m=Lt({},f,{theme:ug(f,c,l.defaultProps)});a.renderStyles(u,m,d,v)}}return Oe.memo(l)}const D=Ms;var Ny={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},Dy=Ny;const Oy="modulepreload",Iy=function(e){return"/"+e},qd={},jo=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Iy(i),i in qd)return;qd[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=o.length-1;f>=0;f--){const d=o[f];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Oy,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function _y(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}const pg=e=>document.body.setAttribute("data-loading",e);var My=`
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

`;const rc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",oc="inset 2px 2px 3px rgba(0,0,0,0.2)",Nt=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Dt=({background:e="material",color:t="materialText"}={})=>W`
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
`,Yn=()=>W`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,rr={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},zy=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?rc:!1,o?oc:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),Ne=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return W`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[rr[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[rr[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[rr[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[rr[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>zy({theme:r,topLeftInner:rr[t][n.topLeftInner],bottomRightInner:rr[t][n.bottomRightInner],hasShadow:o})};
  `},zr=()=>W`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,Fy=e=>Buffer.from(e).toString("base64"),jy=typeof btoa<"u"?btoa:Fy,mi=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${jy(n)})`},ic=(e="default")=>W`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Yo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Dt()}
    ${e==="flat"?Yn():Ne({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${Dt()}
    ${e==="flat"?Yn():Ne({style:"window"})}
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
    ${e==="default"?Ne({style:"window",invert:!0}):""}
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
`,By=D.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Uy=y.exports.forwardRef(({children:e,underline:t=!0,...n},r)=>S(By,{ref:r,underline:t,...n,children:e}));Uy.displayName="Anchor";const Hy=D.header`
  ${Ne()};
  ${Dt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,hg=y.exports.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>S(Hy,{fixed:t,position:t!==!1?n:void 0,ref:o,...r,children:e}));hg.displayName="AppBar";const Jn=()=>{};function zn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Vy(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function ef(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Vy(t)))}function Cn(e){return typeof e=="number"?`${e}px`:e}const Wy=D.div`
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
`,Qy=D.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,gg=y.exports.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...a},l)=>S(Wy,{noBorder:n,ref:l,size:Cn(r),square:o,src:i,...a,children:i?S(Qy,{src:i,alt:e}):t}));gg.displayName="Avatar";const We={sm:"28px",md:"36px",lg:"44px"},Ky=W`
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
`,Ga=D.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?W`
          ${Yn()}
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
            ${!e&&!t&&zr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?W`
          ${Dt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&Ne({style:"buttonThin"})}
          }
          &:active {
            ${!t&&Ne({style:"buttonThinPressed"})}
          }
          ${e&&Ne({style:"buttonThinPressed"})}
          ${t&&Nt()}
        `:W`
          ${Dt()};
          border: none;
          ${t&&Nt()}
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

            ${Ne(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&Ne({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&zr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${Ky}
`,Bo=y.exports.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:s=Jn,primary:u=!1,variant:f="default",...d},c)=>S(Ga,{active:l,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:c,size:i,square:a,type:r,variant:f,...d,children:n}));Bo.displayName="Button";function An({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const a=o!==void 0,[l,s]=y.exports.useState(e),u=y.exports.useCallback(f=>{a||s(f)},[a]);if(a&&typeof t!="function"&&!r){const f=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(f)}return[a?o:l,u]}const zs=D.li`
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
  ${e=>e.$disabled&&Nt()}
`,Fs=y.exports.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...a},l)=>S(zs,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a,children:r}));Fs.displayName="MenuListItem";const mg=D.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Ne({style:"window"})}
  ${Dt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;mg.displayName="MenuList";const jt=20,ua=D.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${jt}px;
  height: ${jt}px;
  opacity: 0;
  z-index: -1;
`,ac=D.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&Nt()}

  ${zs} & {
    margin: 0;
    height: 100%;
  }
  ${zs}:hover & {
    ${({$disabled:e,theme:t})=>!e&&W`
        color: ${t.materialTextInvert};
      `};
  }
`,lc=D.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ua}:focus ~ & {
    ${zr}
  }
  ${ua}:not(:disabled) ~ &:active {
    ${zr}
  }
`,Ut=D.div`
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
`,Gy=D.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${ic()}
`,vg=y.exports.forwardRef(({children:e,shadow:t=!0,...n},r)=>S(Ut,{ref:r,shadow:t,...n,children:S(Gy,{children:e})}));vg.displayName="ScrollView";const yg=W`
  width: ${jt}px;
  height: ${jt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Yy=D(Ut)`
  ${yg}
  width: ${jt}px;
  height: ${jt}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Xy=D.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${yg}
  width: ${jt-4}px;
  height: ${jt-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Zy=D.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Jy=D.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
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
`,qy={flat:Xy,default:Yy},ex=y.exports.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:a=Jn,style:l={},value:s,variant:u="default",...f},d)=>{var c;const[v,m]=An({defaultValue:n,onChange:a,readOnly:(c=f.readOnly)!==null&&c!==void 0?c:r,value:e}),w=y.exports.useCallback(p=>{const g=p.target.checked;m(g),a(p)},[a,m]),b=qy[u];let h=null;return o?h=Jy:v&&(h=Zy),ne(ac,{$disabled:r,className:t,style:l,children:[S(ua,{disabled:r,onChange:r?void 0:w,readOnly:r,type:"checkbox",value:s,checked:v,"data-indeterminate":o,ref:d,...f}),S(b,{$disabled:r,role:"presentation",children:h&&S(h,{$disabled:r,variant:u})}),i&&S(lc,{children:i})]})});ex.displayName="Checkbox";const sc=D.div`
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
`;sc.displayName="Separator";const tx=D(Ga)`
  padding-left: 8px;
`,nx=D(sc)`
  height: 21px;
  position: relative;
  top: 0;
`,xg=D.input`
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
`,rx=D.div`
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
  ${xg}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${zr}
    outline-offset: -8px;
  }
`,ox=D.span`
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
`,ix=y.exports.forwardRef(({value:e,defaultValue:t,onChange:n=Jn,disabled:r=!1,variant:o="default",...i},a)=>{var l;const[s,u]=An({defaultValue:t,onChange:n,readOnly:(l=i.readOnly)!==null&&l!==void 0?l:r,value:e});return ne(tx,{disabled:r,as:"div",variant:o,size:"md",children:[S(xg,{onChange:d=>{const c=d.target.value;u(c),n(d)},readOnly:r,disabled:r,value:s!=null?s:"#008080",type:"color",ref:a,...i}),S(rx,{$disabled:r,color:s!=null?s:"#008080",role:"presentation"}),o==="default"&&S(nx,{orientation:"vertical"}),S(ox,{$disabled:r,variant:o})]})});ix.displayName="ColorInput";const ax=D.div`
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
`,tf=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],lx=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function sx({digit:e=0,pixelSize:t=2,...n}){const r=lx[Number(e)].map((o,i)=>o?`${tf[i]} active`:tf[i]);return S(ax,{pixelSize:t,...n,children:r.map((o,i)=>S("span",{className:o},i))})}const ux=D.div`
  ${Ne({style:"status"})}
  display: inline-flex;
  background: #000000;
`,cx={sm:1,md:2,lg:3,xl:4},dx=y.exports.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=y.exports.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return S(ux,{ref:o,...r,children:i.map((a,l)=>S(sx,{digit:a,pixelSize:cx[n]},l))})});dx.displayName="Counter";const wg=W`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${We.md};
`,fx=D(Ut).attrs({"data-testid":"variant-default"})`
  ${wg}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,px=D.div.attrs({"data-testid":"variant-flat"})`
  ${Yn()}
  ${wg}
  position: relative;
`,Sg=W`
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
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&Nt()}
`,hx=D.input`
  ${Sg}
  padding: 0 8px;
`,gx=D.textarea`
  ${Sg}
  padding: 8px;
  resize: none;
  ${({variant:e})=>ic(e)}
`,kg=y.exports.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Jn,shadow:o=!0,style:i,variant:a="default",...l},s)=>{const u=a==="flat"?px:fx,f=y.exports.useMemo(()=>{var d;return l.multiline?S(gx,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:a,...l}):S(hx,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(d=l.type)!==null&&d!==void 0?d:"text",variant:a,...l})},[t,r,l,s,a]);return S(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i,children:f})});kg.displayName="TextInput";const mx=D.div`
  display: inline-flex;
  align-items: center;
`,js=D(Bo)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?W`
          height: calc(50% - 1px);
        `:W`
          height: 50%;
        `}
`,vx=D.div`
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
`,nf=D.span`
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
  ${js}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?W`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:W`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,bg=y.exports.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:a,step:l=1,style:s,value:u,variant:f="default",width:d,...c},v)=>{const[m,w]=An({defaultValue:t,onChange:i,readOnly:a,value:u}),b=y.exports.useCallback(A=>{const R=parseFloat(A.target.value);w(R)},[w]),h=y.exports.useCallback(A=>{const R=zn(parseFloat(((m!=null?m:0)+A).toFixed(2)),o!=null?o:null,r!=null?r:null);w(R),i==null||i(R)},[r,o,i,w,m]),p=y.exports.useCallback(()=>{m!==void 0&&(i==null||i(m))},[i,m]),g=y.exports.useCallback(()=>{h(l)},[h,l]),x=y.exports.useCallback(()=>{h(-l)},[h,l]),$=f==="flat"?"flat":"raised";return ne(mx,{className:e,style:{...s,width:d!==void 0?Cn(d):"auto"},...c,children:[S(kg,{value:m,variant:f,onChange:b,disabled:n,type:"number",readOnly:a,ref:v,fullWidth:!0,onBlur:p}),ne(vx,{variant:f,children:[S(js,{"data-testid":"increment",variant:$,disabled:n||a,onClick:g,children:S(nf,{invert:!0})}),S(js,{"data-testid":"decrement",variant:$,disabled:n||a,onClick:x,children:S(nf,{})})]})]})});bg.displayName="NumberInput";function yx(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const $g=e=>y.exports.useMemo(()=>e!=null?e:yx(),[e]),Cg=W`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Ag=W`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,uc=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,xx=D.div`
  ${Cg}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${uc}:focus & {
    ${Ag}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,Eg=W`
  height: ${We.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?Nt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,wx=D(Ut)`
  ${Eg}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Sx=D.div`
  ${Yn()}
  ${Eg}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,kx=D.select`
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
  ${Cg}
  cursor: pointer;
  &:disabled {
    ${Nt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Lg=D(Ga).attrs(()=>({"aria-hidden":"true"}))`
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
`,bx=D.span`
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
  ${Lg}:active & {
    margin-top: 2px;
  }
`,$x=D.ul`
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
`,Cx=D.li`
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
  ${({active:e})=>e?Ag:""}
  user-select: none;
`,Ax=[],Rg=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=Ax,readOnly:a,style:l,value:s,variant:u,width:f})=>{var d;const c=y.exports.useMemo(()=>i.filter(Boolean),[i]),[v,m]=An({defaultValue:t!=null?t:(d=c==null?void 0:c[0])===null||d===void 0?void 0:d.value,onChange:o,readOnly:a,value:s}),w=!(n||a),b=y.exports.useMemo(()=>({className:e,style:{...l,width:f}}),[e,l,f]),h=y.exports.useMemo(()=>S(Lg,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised",children:S(bx,{"data-testid":"select-icon",$disabled:n})}),[n,r,u]),p=y.exports.useMemo(()=>u==="flat"?Sx:wx,[u]);return y.exports.useMemo(()=>({isEnabled:w,options:c,value:v,setValue:m,wrapperProps:b,DropdownButton:h,Wrapper:p}),[h,p,w,c,m,v,b])},Ex={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Lx=1e3,Rx=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:a,open:l,options:s,readOnly:u,value:f,selectRef:d,setValue:c,wrapperRef:v})=>{const m=y.exports.useRef(null),w=y.exports.useRef([]),b=y.exports.useRef(0),h=y.exports.useRef(0),p=y.exports.useRef(),g=y.exports.useRef("search"),x=y.exports.useRef(""),$=y.exports.useRef(),[A,R]=An({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:u,value:l,valuePropName:"open"}),I=y.exports.useMemo(()=>{const P=s.findIndex(U=>U.value===f);return b.current=zn(P,0,null),s[P]},[s,f]),[X,F]=y.exports.useState(s[0]),ue=y.exports.useCallback(P=>{const U=m.current,G=w.current[P];if(!G||!U){p.current=P;return}p.current=void 0;const Q=U.clientHeight,ae=U.scrollTop,fe=U.scrollTop+Q,Z=G.offsetTop,ve=G.offsetHeight,le=G.offsetTop+G.offsetHeight;Z<ae&&U.scrollTo(0,Z),le>fe&&U.scrollTo(0,Z-Q+ve),G.focus({preventScroll:!0})},[m]),ie=y.exports.useCallback((P,{scroll:U}={})=>{var G;const Q=s.length-1;let ae;switch(P){case"first":{ae=0;break}case"last":{ae=Q;break}case"next":{ae=zn(h.current+1,0,Q);break}case"previous":{ae=zn(h.current-1,0,Q);break}case"selected":{ae=zn((G=b.current)!==null&&G!==void 0?G:0,0,Q);break}default:ae=P}h.current=ae,F(s[ae]),U&&ue(ae)},[h,s,ue]),ce=y.exports.useCallback(({fromEvent:P})=>{R(!0),ie("selected",{scroll:!0}),a==null||a({fromEvent:P})},[ie,a,R]),ee=y.exports.useCallback(()=>{g.current="search",x.current="",clearTimeout($.current)},[]),re=y.exports.useCallback(({focusSelect:P,fromEvent:U})=>{var G;n==null||n({fromEvent:U}),R(!1),F(s[0]),ee(),p.current=void 0,P&&((G=d.current)===null||G===void 0||G.focus())},[ee,n,s,d,R]),ke=y.exports.useCallback(({fromEvent:P})=>{A?re({focusSelect:!1,fromEvent:P}):ce({fromEvent:P})},[re,ce,A]),se=y.exports.useCallback((P,{fromEvent:U})=>{b.current!==P&&(b.current=P,c(s[P].value),t==null||t(s[P],{fromEvent:U}))},[t,s,c]),E=y.exports.useCallback(({focusSelect:P,fromEvent:U})=>{se(h.current,{fromEvent:U}),re({focusSelect:P,fromEvent:U})},[re,se]),H=y.exports.useCallback((P,{fromEvent:U,select:G})=>{var Q;switch(g.current==="cycleFirstLetter"&&P!==x.current&&(g.current="search"),P===x.current?g.current="cycleFirstLetter":x.current+=P,g.current){case"search":{let ae=s.findIndex(fe=>{var Z;return((Z=fe.label)===null||Z===void 0?void 0:Z.toLocaleUpperCase().indexOf(x.current))===0});ae<0&&(ae=s.findIndex(fe=>{var Z;return((Z=fe.label)===null||Z===void 0?void 0:Z.toLocaleUpperCase().indexOf(P))===0}),x.current=P),ae>=0&&(G?se(ae,{fromEvent:U}):ie(ae,{scroll:!0}));break}case"cycleFirstLetter":{const ae=G?(Q=b.current)!==null&&Q!==void 0?Q:-1:h.current;let fe=s.findIndex((Z,ve)=>{var le;return ve>ae&&((le=Z.label)===null||le===void 0?void 0:le.toLocaleUpperCase().indexOf(P))===0});fe<0&&(fe=s.findIndex(Z=>{var ve;return((ve=Z.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(P))===0})),fe>=0&&(G?se(fe,{fromEvent:U}):ie(fe,{scroll:!0}));break}}clearTimeout($.current),$.current=setTimeout(()=>{g.current==="search"&&(x.current="")},Lx)},[ie,s,se]),Y=y.exports.useCallback(P=>{var U;P.button===0&&(P.preventDefault(),(U=d.current)===null||U===void 0||U.focus(),ke({fromEvent:P}),i==null||i(P))},[i,d,ke]),de=y.exports.useCallback(P=>{E({focusSelect:!0,fromEvent:P})},[E]),z=y.exports.useCallback(P=>{const{altKey:U,code:G,ctrlKey:Q,metaKey:ae,shiftKey:fe}=P,{ARROW_DOWN:Z,ARROW_UP:ve,END:le,ENTER:C,ESC:N,HOME:O,SPACE:J,TAB:q}=Ex,oe=U||Q||ae||fe;if(!(G===q&&(U||Q||ae)||G!==q&&oe))switch(G){case Z:{if(P.preventDefault(),!A){ce({fromEvent:P});return}ie("next",{scroll:!0});break}case ve:{if(P.preventDefault(),!A){ce({fromEvent:P});return}ie("previous",{scroll:!0});break}case le:{if(P.preventDefault(),!A){ce({fromEvent:P});return}ie("last",{scroll:!0});break}case C:{if(!A)return;P.preventDefault(),E({focusSelect:!0,fromEvent:P});break}case N:{if(!A)return;P.preventDefault(),re({focusSelect:!0,fromEvent:P});break}case O:{if(P.preventDefault(),!A){ce({fromEvent:P});return}ie("first",{scroll:!0});break}case J:{P.preventDefault(),A?E({focusSelect:!0,fromEvent:P}):ce({fromEvent:P});break}case q:{if(!A)return;fe||P.preventDefault(),E({focusSelect:!fe,fromEvent:P});break}default:!oe&&G.match(/^Key/)&&(P.preventDefault(),P.stopPropagation(),H(G.replace(/^Key/,""),{select:!A,fromEvent:P}))}},[ie,re,A,ce,H,E]),L=y.exports.useCallback(P=>{z(P),o==null||o(P)},[z,o]),T=y.exports.useCallback(P=>{ie(P)},[ie]),j=y.exports.useCallback(P=>{A||(ee(),e==null||e(P))},[ee,e,A]),k=y.exports.useCallback(P=>{ee(),r==null||r(P)},[ee,r]),V=y.exports.useCallback(P=>{m.current=P,p.current!==void 0&&ue(p.current)},[ue]),_=y.exports.useCallback((P,U)=>{w.current[U]=P,p.current===U&&ue(p.current)},[ue]);return y.exports.useEffect(()=>{if(!A)return()=>{};const P=U=>{var G;const Q=U.target;!((G=v.current)===null||G===void 0)&&G.contains(Q)||(U.preventDefault(),re({focusSelect:!1,fromEvent:U}))};return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[re,A,v]),y.exports.useMemo(()=>({activeOption:X,handleActivateOptionIndex:T,handleBlur:j,handleButtonKeyDown:L,handleDropdownKeyDown:z,handleFocus:k,handleMouseDown:Y,handleOptionClick:de,handleSetDropdownRef:V,handleSetOptionRef:_,open:A,selectedOption:I}),[X,T,j,L,k,z,Y,de,V,_,A,I])},Px=y.exports.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:a,value:l,variant:s,width:u,...f},d)=>{const{isEnabled:c,options:v,setValue:m,value:w,DropdownButton:b,Wrapper:h}=Rg({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:l,variant:s}),p=y.exports.useCallback(g=>{const x=v.find($=>$.value===g.target.value);!x||(m(x.value),r==null||r(x,{fromEvent:g}))},[r,v,m]);return S(h,{className:e,style:{...a,width:u},children:ne(uc,{children:[S(kx,{...f,disabled:n,onChange:c?p:Jn,ref:d,value:w,children:v.map((g,x)=>{var $;return S("option",{value:g.value,children:($=g.label)!==null&&$!==void 0?$:g.value},`${g.value}-${x}`)})}),b]})})});Px.displayName="SelectNative";function Tx({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:a}){const l=y.exports.useCallback(()=>{e(n)},[e,n]),s=y.exports.useCallback(f=>{a(f,n)},[n,a]),u=$g();return S(Cx,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:l,ref:s,role:"option",tabIndex:0,children:o.label})}function Nx({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:s,name:u,onBlur:f,onChange:d,onClose:c,onFocus:v,onKeyDown:m,onMouseDown:w,onOpen:b,open:h,options:p,readOnly:g,shadow:x=!0,style:$,variant:A="default",value:R,width:I="auto",...X},F){const{isEnabled:ue,options:ie,setValue:ce,value:ee,wrapperProps:re,DropdownButton:ke,Wrapper:se}=Rg({className:n,defaultValue:r,disabled:o,native:!1,onChange:d,options:p,style:$,readOnly:g,value:R,variant:A,width:I}),E=y.exports.useRef(null),H=y.exports.useRef(null),Y=y.exports.useRef(null),{activeOption:de,handleActivateOptionIndex:z,handleBlur:L,handleButtonKeyDown:T,handleDropdownKeyDown:j,handleFocus:k,handleMouseDown:V,handleOptionClick:_,handleSetDropdownRef:P,handleSetOptionRef:U,open:G,selectedOption:Q}=Rx({onBlur:f,onChange:d,onClose:c,onFocus:v,onKeyDown:m,onMouseDown:w,onOpen:b,open:h,options:ie,value:ee,selectRef:H,setValue:ce,wrapperRef:Y});y.exports.useImperativeHandle(F,()=>({focus:C=>{var N;(N=H.current)===null||N===void 0||N.focus(C)},node:E.current,value:String(ee)}),[ee]);const ae=y.exports.useMemo(()=>Q?typeof i=="function"?i(Q):Q.label:"",[i,Q]),fe=ue?1:void 0,Z=y.exports.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),ve=$g(),le=y.exports.useMemo(()=>ie.map((C,N)=>{const O=`${ee}-${N}`;return S(Tx,{activateOptionIndex:z,active:C===de,index:N,onClick:_,option:C,selected:C===Q,setRef:U},O)}),[de,z,_,U,ie,Q,ee]);return ne(se,{...re,$disabled:o,ref:Y,shadow:x,style:{...$,width:I},children:[S("input",{name:u,ref:E,type:"hidden",value:String(ee),...a}),ne(uc,{"aria-disabled":o,"aria-expanded":G,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t!=null?t:l,"aria-owns":ue&&G?ve:void 0,onBlur:L,onFocus:k,onKeyDown:T,onMouseDown:ue?V:w,ref:H,role:"button",tabIndex:fe,...X,children:[S(xx,{children:ae}),ke]}),ue&&G&&S($x,{id:ve,onKeyDown:j,ref:P,role:"listbox",style:Z,tabIndex:0,variant:A,children:le})]})}const cc=y.exports.forwardRef(Nx);cc.displayName="Select";const Dx=D.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,ca=y.exports.forwardRef(function({children:t,noPadding:n=!1,...r},o){return S(Dx,{noPadding:n,ref:o,...r,children:t})});ca.displayName="Toolbar";const Ox=D.div`
  padding: 16px;
`,Pg=y.exports.forwardRef(function({children:t,...n},r){return S(Ox,{ref:r,...n,children:t})});Pg.displayName="WindowContent";const Ix=D.div`
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
`,Tg=y.exports.forwardRef(function({active:t=!0,children:n,...r},o){return S(Ix,{active:t,ref:o,...r,children:n})});Tg.displayName="WindowHeader";const _x=D.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ne({style:"window"})}
  ${Dt()}
`,Mx=D.span`
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
`,Ng=y.exports.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>ne(_x,{ref:i,shadow:r,...o,children:[e,t&&S(Mx,{"data-testid":"resizeHandle",ref:n})]}));Ng.displayName="Window";const zx=D(vg)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Fx=D.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,jx=D.div`
  display: flex;
  flex-wrap: wrap;
`,Wt=D.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Bx=D.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,Ux=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Hx(e,t){return new Date(e,t+1,0).getDate()}function Vx(e,t,n){return new Date(e,t,n).getDay()}function Wx(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const Qx=y.exports.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[a,l]=y.exports.useState(()=>Wx(t)),{year:s,month:u,day:f}=a,d=y.exports.useCallback(({value:b})=>{l(h=>({...h,month:b}))},[]),c=y.exports.useCallback(b=>{l(h=>({...h,year:b}))},[]),v=y.exports.useCallback(b=>{l(h=>({...h,day:b}))},[]),m=y.exports.useCallback(()=>{const b=[a.year,a.month+1,a.day].map(h=>String(h).padStart(2,"0")).join("-");n==null||n(b)},[a.day,a.month,a.year,n]),w=y.exports.useMemo(()=>{const b=Array.from({length:42}),h=Vx(s,u,1);let p=f;const g=Hx(s,u);return p=p<g?p:g,b.forEach((x,$)=>{if($>=h&&$<g+h){const A=$-h+1;b[$]=S(Wt,{onClick:()=>{v(A)},children:S(Bx,{active:A===p,children:A})},$)}else b[$]=S(Wt,{},$)}),b},[f,v,u,s]);return ne(Ng,{className:e,ref:i,shadow:o,style:{margin:20},children:[ne(Tg,{children:[S("span",{role:"img","aria-label":"\u{1F4C6}",children:"\u{1F4C6}"}),"Date"]}),ne(Pg,{children:[ne(ca,{noPadding:!0,style:{justifyContent:"space-between"},children:[S(cc,{options:Ux,value:u,onChange:d,width:128,menuMaxHeight:200}),S(bg,{value:s,onChange:c,width:100})]}),ne(zx,{children:[ne(Fx,{children:[S(Wt,{children:"S"}),S(Wt,{children:"M"}),S(Wt,{children:"T"}),S(Wt,{children:"W"}),S(Wt,{children:"T"}),S(Wt,{children:"F"}),S(Wt,{children:"S"})]}),S(jx,{children:w})]}),ne(ca,{noPadding:!0,style:{justifyContent:"space-between"},children:[S(Bo,{fullWidth:!0,onClick:r,disabled:!r,children:"Cancel"}),S(Bo,{fullWidth:!0,onClick:n?m:void 0,disabled:!n,children:"OK"})]})]})]})});Qx.displayName="DatePicker";const Kx=e=>{switch(e){case"status":case"well":return W`
        ${Ne({style:"status"})}
      `;case"window":case"outside":return W`
        ${Ne({style:"window"})}
      `;case"field":return W`
        ${Ne({style:"field"})}
      `;default:return W`
        ${Ne()}
      `}},Gx=D.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Kx(e)}
  ${({variant:e})=>Dt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Yx=y.exports.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>S(Gx,{ref:o,shadow:t,variant:n,...r,children:e}));Yx.displayName="Frame";const Xx=D.fieldset`
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
  ${e=>e.$disabled&&Nt()}
`,Zx=D.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Jx=y.exports.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>ne(Xx,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o,children:[e&&S(Zx,{variant:n,children:e}),r]}));Jx.displayName="GroupBox";const Bs=D.div`
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
`;Bs.displayName="Handle";const qx="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",ew=D.div`
  display: inline-block;
  height: ${({size:e})=>Cn(e)};
  width: ${({size:e})=>Cn(e)};
`,tw=D.span`
  display: block;
  background: ${qx};
  background-size: cover;
  width: 100%;
  height: 100%;
`,nw=y.exports.forwardRef(({size:e=30,...t},n)=>S(ew,{size:e,ref:n,...t,children:S(tw,{})}));nw.displayName="Hourglass";const rw=D.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,ow=D.div`
  position: relative;
`,iw=D.div`
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
`,aw=D(Ut).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,lw=D.div`
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
`,sw=y.exports.forwardRef(({backgroundStyles:e,children:t,...n},r)=>S(rw,{ref:r,...n,children:ne(ow,{children:[S(iw,{children:S(aw,{style:e,children:t})}),S(lw,{})]})}));sw.displayName="Monitor";const uw=D.div`
  display: inline-block;
  height: ${We.md};
  width: 100%;
`,cw=D(Ut)`
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
`,dw=D.div`
  position: relative;
  top: 4px;
  ${Dg}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,fw=D.div`
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
`,pw=D.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Og=17,hw=D.span`
  display: inline-block;
  width: ${Og}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Ig=y.exports.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const a=e?null:`${n}%`,l=y.exports.useRef(null),[s,u]=y.exports.useState([]),f=y.exports.useCallback(()=>{if(!l.current||n===void 0)return;const d=l.current.getBoundingClientRect().width,c=Math.round(n/100*d/Og);u(Array.from({length:c}))},[n]);return y.exports.useEffect(()=>(f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)),[f]),S(uw,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o,children:S(cw,{variant:r,shadow:t,children:r==="default"?ne(Kh,{children:[S(dw,{"data-testid":"defaultProgress1",children:a}),S(fw,{"data-testid":"defaultProgress2",value:n,children:a})]}):S(pw,{ref:l,"data-testid":"tileProgress",children:s.map((d,c)=>S(hw,{},c))})})})});Ig.displayName="ProgressBar";const _g=W`
  width: ${jt}px;
  height: ${jt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,gw=D(Ut)`
  ${_g}
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
`,mw=D.div`
  ${Yn()}
  ${_g}
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
`,vw=D.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,yw={flat:mw,default:gw},xw=y.exports.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:a="default",...l},s)=>{const u=yw[a];return ne(ac,{$disabled:n,className:t,style:i,children:[S(u,{$disabled:n,role:"presentation",children:e&&S(vw,{$disabled:n,variant:a})}),S(ua,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...l}),r&&S(lc,{children:r})]})});xw.displayName="Radio";const ww=typeof window<"u"?y.exports.useLayoutEffect:y.exports.useEffect;function Tn(e){const t=y.exports.useRef(e);return ww(()=>{t.current=e}),y.exports.useCallback((...n)=>(0,t.current)(...n),[])}function rf(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function of(e,t){return y.exports.useMemo(()=>e==null&&t==null?null:n=>{rf(e,n),rf(t,n)},[e,t])}let Ya=!0,Us=!1,af;const Sw={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function kw(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&Sw[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function bw(e){e.metaKey||e.altKey||e.ctrlKey||(Ya=!0)}function Nl(){Ya=!1}function $w(){this.visibilityState==="hidden"&&Us&&(Ya=!0)}function Cw(e){e.addEventListener("keydown",bw,!0),e.addEventListener("mousedown",Nl,!0),e.addEventListener("pointerdown",Nl,!0),e.addEventListener("touchstart",Nl,!0),e.addEventListener("visibilitychange",$w,!0)}function Aw(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Ya||kw(t)}function Ew(){Us=!0,window.clearTimeout(af),af=window.setTimeout(()=>{Us=!1},100)}function Lw(){const e=y.exports.useCallback(t=>{const n=tu.exports.findDOMNode(t);n!=null&&Cw(n.ownerDocument)},[]);return{isFocusVisible:Aw,onBlurVisible:Ew,ref:e}}function Rw(e,t,n){return(n-t)*e+t}function vi(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function yi(e){return e&&e.ownerDocument||document}function Pw(e,t){var n;const{index:r}=(n=e.reduce((o,i,a)=>{const l=Math.abs(t-i);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!==null&&n!==void 0?n:{};return r!=null?r:-1}const Tw=D.div`
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
`,Nw=D(Ut)`
  ${Mg()}
`,Dw=D(Ut)`
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
`,Ow=D.span`
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
          ${Yn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:W`
          ${Dt()}
          ${Ne()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Yo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,Sr=6,Iw=D.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?W`
          right: ${-Sr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Sr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:W`
          bottom: ${-Sr}px;
          height: ${Sr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&W`
      ${Nt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,_w=D.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?W`
          transform: translate(${Sr+2}px, ${Sr+1}px);
        `:W`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Mw=y.exports.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:s,orientation:u="horizontal",size:f="100%",step:d=1,value:c,variant:v="default",...m},w)=>{const b=v==="flat"?Dw:Nw,h=u==="vertical",[p=o,g]=An({defaultValue:e,onChange:a!=null?a:l,value:c}),{isFocusVisible:x,onBlurVisible:$,ref:A}=Lw(),[R,I]=y.exports.useState(!1),X=y.exports.useRef(),F=y.exports.useRef(null),ue=of(A,X),ie=of(w,ue),ce=Tn(L=>{x(L)&&I(!0)}),ee=Tn(()=>{R!==!1&&(I(!1),$())}),re=y.exports.useRef(),ke=y.exports.useMemo(()=>n===!0&&Number.isFinite(d)?[...Array(Math.round((r-o)/d)+1)].map((L,T)=>({label:void 0,value:o+d*T})):Array.isArray(n)?n:[],[n,r,o,d]),se=Tn(L=>{const T=(r-o)/10,j=ke.map(_=>_.value),k=j.indexOf(p);let V=0;switch(L.key){case"Home":V=o;break;case"End":V=r;break;case"PageUp":d&&(V=p+T);break;case"PageDown":d&&(V=p-T);break;case"ArrowRight":case"ArrowUp":d?V=p+d:V=j[k+1]||j[j.length-1];break;case"ArrowLeft":case"ArrowDown":d?V=p-d:V=j[k-1]||j[0];break;default:return}L.preventDefault(),d&&(V=ef(V,d,o)),V=zn(V,o,r),g(V),I(!0),a==null||a(V),l==null||l(V)}),E=y.exports.useCallback(L=>{if(!X.current)return 0;const T=X.current.getBoundingClientRect();let j;h?j=(T.bottom-L.y)/T.height:j=(L.x-T.left)/T.width;let k;if(k=Rw(j,o,r),d)k=ef(k,d,o);else{const V=ke.map(P=>P.value),_=Pw(V,k);k=V[_]}return k=zn(k,o,r),k},[ke,r,o,d,h]),H=Tn(L=>{var T;const j=vi(L,re.current);if(!j)return;const k=E(j);(T=F.current)===null||T===void 0||T.focus(),g(k),I(!0),a==null||a(k)}),Y=Tn(L=>{const T=vi(L,re.current);if(!T)return;const j=E(T);l==null||l(j),re.current=void 0;const k=yi(X.current);k.removeEventListener("mousemove",H),k.removeEventListener("mouseup",Y),k.removeEventListener("touchmove",H),k.removeEventListener("touchend",Y)}),de=Tn(L=>{var T;s==null||s(L),L.preventDefault(),(T=F.current)===null||T===void 0||T.focus(),I(!0);const j=vi(L,re.current);if(j){const V=E(j);g(V),a==null||a(V)}const k=yi(X.current);k.addEventListener("mousemove",H),k.addEventListener("mouseup",Y)}),z=Tn(L=>{var T;L.preventDefault();const j=L.changedTouches[0];j!=null&&(re.current=j.identifier),(T=F.current)===null||T===void 0||T.focus(),I(!0);const k=vi(L,re.current);if(k){const _=E(k);g(_),a==null||a(_)}const V=yi(X.current);V.addEventListener("touchmove",H),V.addEventListener("touchend",Y)});return y.exports.useEffect(()=>{const{current:L}=X;L==null||L.addEventListener("touchstart",z);const T=yi(L);return()=>{L==null||L.removeEventListener("touchstart",z),T.removeEventListener("mousemove",H),T.removeEventListener("mouseup",Y),T.removeEventListener("touchmove",H),T.removeEventListener("touchend",Y)}},[Y,H,z]),ne(Tw,{$disabled:t,hasMarks:Boolean(ke.length),isFocused:R,onMouseDown:de,orientation:u,ref:ie,size:Cn(f),...m,children:[S("input",{disabled:t,name:i,type:"hidden",value:p!=null?p:0}),ke&&ke.map(L=>S(Iw,{$disabled:t,"data-testid":"tick",orientation:u,style:{[h?"bottom":"left"]:`${(L.value-o)/(r-o)*100}%`},children:L.label&&S(_w,{"aria-hidden":!0,"data-testid":"mark",orientation:u,children:L.label})},L.value/(r-o)*100)),S(b,{orientation:u,variant:v}),S(Ow,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":p,onBlur:ee,onFocus:ce,onKeyDown:se,orientation:u,ref:F,role:"slider",style:{[h?"bottom":"left"]:`${(h?-100:0)+100*(p-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:v})]})});Mw.displayName="Slider";const zw=D.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${oc};
  overflow-y: auto;
`,Fw=y.exports.forwardRef(function({children:t,...n},r){return S(zw,{ref:r,...n,children:t})});Fw.displayName="TableBody";const jw=D.td`
  padding: 0 8px;
`,Bw=y.exports.forwardRef(function({children:t,...n},r){return S(jw,{ref:r,...n,children:t})});Bw.displayName="TableDataCell";const Uw=D.thead`
  display: table-header-group;
`,Hw=y.exports.forwardRef(function({children:t,...n},r){return S(Uw,{ref:r,...n,children:t})});Hw.displayName="TableHead";const Vw=D.th`
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
    ${Ne()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&W`
      &:active {
        &:before {
          ${Ne({invert:!0,style:"window"})}
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
  ${({$disabled:e})=>e&&Nt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&Nt()}
  }
`,Ww=y.exports.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Jn,sort:i,...a},l){return S(Vw,{$disabled:t,"aria-disabled":t,"aria-sort":i==="asc"?"ascending":i==="desc"?"descending":void 0,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:l,...a,children:S("div",{children:n})})});Ww.displayName="TableHeadCell";const Qw=D.tr`
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
`,Kw=y.exports.forwardRef(function({children:t,...n},r){return S(Qw,{ref:r,...n,children:t})});Kw.displayName="TableRow";const Gw=D.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Yw=D(Ut)`
  &:before {
    box-shadow: none;
  }
`,Xw=y.exports.forwardRef(({children:e,...t},n)=>S(Yw,{children:S(Gw,{ref:n,...t,children:e})}));Xw.displayName="Table";const Zw=D.button`
  ${Dt()}
  ${Ne()}
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
    ${zr}
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
`,Jw=y.exports.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>S(Zw,{"aria-selected":n,selected:n,onClick:a=>t==null?void 0:t(e,a),ref:i,role:"tab",...o,children:r}));Jw.displayName="Tab";const qw=D.div`
  ${Dt()}
  ${Ne()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,e2=y.exports.forwardRef(({children:e,...t},n)=>S(qw,{ref:n,...t,children:e}));e2.displayName="TabBody";const t2=D.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,n2=D.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function r2(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const o2=y.exports.forwardRef(({value:e,onChange:t=Jn,children:n,rows:r=1,...o},i)=>{const a=y.exports.useMemo(()=>{var l;const s=(l=Oe.Children.map(n,d=>{if(!Oe.isValidElement(d))return null;const c={selected:d.props.value===e,onClick:t};return Oe.cloneElement(d,c)}))!==null&&l!==void 0?l:[],u=r2(s,r).map((d,c)=>({key:c,tabs:d})),f=u.findIndex(d=>d.tabs.some(c=>c.props.selected));return u.push(u.splice(f,1)[0]),u},[n,t,r,e]);return S(t2,{...o,isMultiRow:r>1,role:"tablist",ref:i,children:a.map(l=>S(n2,{children:l.tabs},l.key))})});o2.displayName="Tabs";const i2=["blur","focus"],a2=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function lf(e){return"nativeEvent"in e&&i2.includes(e.type)}function sf(e){return"nativeEvent"in e&&a2.includes(e.type)}const l2={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},s2=D.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${rc};
  text-align: center;
  font-size: 1rem;
  ${e=>l2[e.position]}
`,u2=D.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,c2=y.exports.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:s,onMouseEnter:u,onMouseLeave:f,onOpen:d,style:c,text:v,position:m="top",...w},b)=>{const[h,p]=y.exports.useState(!1),[g,x]=y.exports.useState(),[$,A]=y.exports.useState(),R=!n,I=!r,X=E=>{window.clearTimeout(g),window.clearTimeout($);const H=window.setTimeout(()=>{p(!0),d==null||d(E)},o);x(H)},F=E=>{E.persist(),lf(E)?s==null||s(E):sf(E)&&(u==null||u(E)),X(E)},ue=E=>{window.clearTimeout(g),window.clearTimeout($);const H=window.setTimeout(()=>{p(!1),l==null||l(E)},i);A(H)},ie=E=>{E.persist(),lf(E)?a==null||a(E):sf(E)&&(f==null||f(E)),ue(E)};return ne(u2,{"data-testid":"tooltip-wrapper",onBlur:R?ie:void 0,onFocus:R?F:void 0,onMouseEnter:I?F:void 0,onMouseLeave:I?ie:void 0,tabIndex:R?0:void 0,children:[S(s2,{className:e,"data-testid":"tooltip",position:m,ref:b,show:h,style:c,...w,children:v}),t]})});c2.displayName="Tooltip";const Hs=D(lc)`
  white-space: nowrap;
`,zg=W`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":W`
          cursor: pointer;

          :focus {
            ${Hs} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,d2=D.ul`
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
`,f2=D.li`
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
`,p2=D.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,h2=D.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${zg};

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
`,uf=D(ac)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${zg};
`,g2=D.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function cf(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function df(e){e.preventDefault()}function Fg({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:a,style:l,tree:s=[]}){const u=o===0,f=y.exports.useCallback(d=>{var c,v;const m=Boolean(d.items&&d.items.length>0),w=n.includes(d.id),b=(c=t||d.disabled)!==null&&c!==void 0?c:!1,h=b?df:$=>i($,d),p=b?df:$=>i($,d),g=a===d.id,x=S(g2,{"aria-hidden":!0,children:d.icon});return S(f2,{isRootLevel:u,role:"treeitem","aria-expanded":w,"aria-selected":g,hasItems:m,children:m?ne(p2,{open:w,children:[S(h2,{onClick:h,$disabled:b,children:ne(uf,{$disabled:b,children:[x,S(Hs,{children:d.label})]})}),w&&S(Fg,{className:e,disabled:b,expanded:n,level:o+1,select:i,selected:a,style:l,tree:(v=d.items)!==null&&v!==void 0?v:[]})]}):ne(uf,{as:"button",$disabled:b,onClick:p,children:[x,S(Hs,{children:d.label})]})},d.label)},[e,t,n,u,o,i,a,l]);return S(d2,{className:u?e:void 0,style:u?l:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u,children:s.map(f)})}function m2({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:l,style:s,tree:u=[]},f){const[d,c]=An({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[v,m]=An({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),w=y.exports.useCallback((p,g)=>{if(a){const x=cf(d,g);a(p,x)}c(x=>cf(x,g))},[d,a,c]),b=y.exports.useCallback((p,g)=>{m(g),i&&i(p,g)},[i,m]),h=y.exports.useCallback((p,g)=>{p.preventDefault(),b(p,g.id),g.items&&g.items.length&&w(p,g.id)},[b,w]);return S(Fg,{className:e,disabled:r,expanded:d,level:0,innerRef:f,select:h,selected:v,style:s,tree:u})}const v2=y.exports.forwardRef(m2);v2.displayName="TreeView";function y2(e){const[t,n]=y.exports.useState(e||0);return{count:t,increment:()=>n(a=>a+1),decrement:()=>n(a=>a-1),reset:()=>n(e||0),setCount:n}}const x2="/assets/pixelated.6c5743a7.png",w2="/assets/pixelated_c.e5845aaa.png";function S2(){const{count:e,increment:t}=y2(0);return y.exports.useEffect(()=>{const n=setInterval(()=>{t()},150);return()=>clearInterval(n)},[]),S(gg,{size:80,src:e%10?x2:w2})}function k2(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const ff={};function Vs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&ff[t[0]]||(typeof t[0]=="string"&&(ff[t[0]]=new Date),k2(...t))}const jg=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function pf(e,t,n){e.loadNamespaces(t,jg(e,n))}function hf(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,jg(e,r))}function b2(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],o=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const u=t.services.backendConnector.state[`${l}|${s}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!o||a(i,e)))}function $2(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(Vs("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(o,i)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!i(o.isLanguageChangingTo,e))return!1}}):b2(e,t,n)}const C2=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,A2={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xA9","&#169;":"\xA9","&reg;":"\xAE","&#174;":"\xAE","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},E2=e=>A2[e],L2=e=>e.replace(C2,E2);let Ws={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:L2};function R2(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ws={...Ws,...e}}function P2(){return Ws}let Bg;function T2(e){Bg=e}function N2(){return Bg}const D2={type:"3rdParty",init(e){R2(e.options.react),T2(e)}},O2=y.exports.createContext();class I2{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const _2=(e,t)=>{const n=y.exports.useRef();return y.exports.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function Xa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:o}=y.exports.useContext(O2)||{},i=n||r||N2();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new I2),!i){Vs("You will need to pass in an i18next instance by using initReactI18next");const g=($,A)=>typeof A=="string"?A:A&&typeof A=="object"&&typeof A.defaultValue=="string"?A.defaultValue:Array.isArray($)?$[$.length-1]:$,x=[g,{},!1];return x.t=g,x.i18n={},x.ready=!1,x}i.options.react&&i.options.react.wait!==void 0&&Vs("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...P2(),...i.options.react,...t},{useSuspense:l,keyPrefix:s}=a;let u=e||o||i.options&&i.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(u);const f=(i.isInitialized||i.initializedStoreOnce)&&u.every(g=>$2(g,i,a));function d(){return i.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],s)}const[c,v]=y.exports.useState(d);let m=u.join();t.lng&&(m=`${t.lng}${m}`);const w=_2(m),b=y.exports.useRef(!0);y.exports.useEffect(()=>{const{bindI18n:g,bindI18nStore:x}=a;b.current=!0,!f&&!l&&(t.lng?hf(i,t.lng,u,()=>{b.current&&v(d)}):pf(i,u,()=>{b.current&&v(d)})),f&&w&&w!==m&&b.current&&v(d);function $(){b.current&&v(d)}return g&&i&&i.on(g,$),x&&i&&i.store.on(x,$),()=>{b.current=!1,g&&i&&g.split(" ").forEach(A=>i.off(A,$)),x&&i&&x.split(" ").forEach(A=>i.store.off(A,$))}},[i,m]);const h=y.exports.useRef(!0);y.exports.useEffect(()=>{b.current&&!h.current&&v(d),h.current=!1},[i,s]);const p=[c,i,f];if(p.t=c,p.i18n=i,p.ready=f,f||!f&&!l)return p;throw new Promise(g=>{t.lng?hf(i,t.lng,u,()=>g()):pf(i,u,()=>g())})}const M2="/assets/bike_in.40753188.gif",z2="/assets/bike_out.1d0c3254.gif",F2="/assets/atom.d796fbd4.gif",j2="/assets/dozing.6b28e884.gif",B2="/assets/grinder.90f98dc6.gif",U2="/assets/laze.99cbcfc2.gif",H2="/assets/listening_music.b22da534.gif",V2="/assets/looking_down.706993de.gif",W2="/assets/stationary.8bbe3a48.gif",Q2="/assets/tapping_screen.2150fcfc.gif",K2="/assets/thinking.1a495de3.gif",G2="576",Y2="768",X2="992",Z2="1200",J2="_container_1luen_15",q2="_clippy_1luen_25",eS="_tooltip_1luen_29",Dl={mediaSm:G2,mediaMd:Y2,mediaLg:X2,mediaXl:Z2,container:J2,clippy:q2,tooltip:eS},tS=1e3,xi={stationary:{src:W2,duration:4e3},bikeIn:{src:M2,duration:3500},bikeOut:{src:z2,duration:4e3}},gf={atom:{src:F2,duration:4500},dozing:{src:j2,duration:7500},laze:{src:U2,duration:13800},music:{src:H2,duration:5400},grinder:{src:B2,duration:8400},tapping:{src:Q2,duration:2500},thinking:{src:K2,duration:1900}};function nS(){const e=Object.keys(gf),t=e[Math.floor(Math.random()*e.length)];return gf[t]}function rS(){const{t:e}=Xa("content"),[t,n]=y.exports.useState(!1),[r,o]=y.exports.useState(-1),[i,a]=y.exports.useState(xi.bikeIn),[l,s]=y.exports.useState(!1);return y.exports.useLayoutEffect(()=>{const u=setTimeout(()=>n(!0),tS);return()=>clearTimeout(u)},[]),y.exports.useLayoutEffect(()=>{const u=setTimeout(()=>a(xi.stationary),xi.bikeIn.duration);return t||clearTimeout(u),()=>clearTimeout(u)},[t]),y.exports.useLayoutEffect(()=>{const u=r%2!==0,f=nS(),d=setTimeout(()=>{a(u?xi.stationary:f),o(c=>c+1)},i.duration);return t||clearTimeout(d),()=>clearTimeout(d)},[r,i,t]),t?ne("div",{className:Dl.container,children:[l&&S("span",{className:Dl.tooltip,children:e("clippy.greeting")}),S("img",{src:l?V2:i.src,className:Dl.clippy,title:"Clippy",alt:"Microsoft Clippit animation",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onTouchStart:()=>s(!0),onTouchEnd:()=>s(!1)})]}):null}function Qs(e){if(typeof e=="number")return`${e}px`;if(typeof e=="string")return e}const kn=D.div`
	display: flex;
	flex-direction: ${e=>{var t;return(t=e.direction)!=null?t:"row"}};
	flex-wrap: ${e=>{var t;return(t=e.wrap)!=null?t:"nowrap"}};
	justify-content: ${e=>{var t;return(t=e.justify)!=null?t:"flex-start"}};
	align-items: ${e=>{var t;return(t=e.align)!=null?t:"flex-start"}};
	align-content: ${e=>{var t;return(t=e.alignContent)!=null?t:"flex-start"}};
	gap: ${e=>{var t;return(t=Qs(e.gap))!=null?t:"0px"}};
	${e=>({...e.sx})}
`,Ks=D.p`
	display: inline-block;
	font-size: ${e=>e.variant==="title"?"24px":e.variant==="caption"?"10px":"13px"};
	font-weight: ${e=>e.bold?"600":"400"};
	color: ${e=>e.variant==="title"?"#0a0a0a":"#1a1a1a"} !important;
	&::selection {
		background-color: #c6c6c6;
		color: #0a0a0a;
	}
	padding: ${e=>{var t;return(t=Qs(e.p))!=null?t:"0"}};
	margin: ${e=>{var t;return(t=Qs(e.m))!=null?t:"0"}};
`,oS="576",iS="768",aS="992",lS="1200",sS="_container_3kp3d_8",uS="_loaderContainer_3kp3d_19",cS="_box_3kp3d_30",dS="_loader_3kp3d_19",eo={mediaSm:oS,mediaMd:iS,mediaLg:aS,mediaXl:lS,container:sS,loaderContainer:uS,box:cS,loader:dS};function Ug(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ug(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function fS(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ug(e))&&(r&&(r+=" "),r+=t);return r}const pS="576",hS="768",gS="992",mS="1200",vS="_icon_el83c_15",yS="_disabled_el83c_20",xS="_mr_el83c_23",wS="_ml_el83c_31",SS="_small_el83c_39",to={mediaSm:pS,mediaMd:hS,mediaLg:gS,mediaXl:mS,icon:vS,disabled:yS,mr:xS,ml:wS,small:SS},da=({Icon:e,className:t,disabled:n,marginLeft:r,marginRight:o,small:i})=>S(e,{"aria-roledescription":"icon",className:fS(to.icon,t,n&&to.disabled,r&&to.ml,o&&to.mr,i&&to.small)}),Hg=e=>y.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",role:"img",width:35.93,height:32,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",...e},y.exports.createElement("path",{fill:"#00D8FF",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})),kS="576",bS="768",$S="992",CS="1200",AS="_container_l7hgv_10",ES="_version_l7hgv_14",LS="_company_l7hgv_20",RS="_logo_l7hgv_34",PS="_product_l7hgv_38",TS="_language_l7hgv_44",or={mediaSm:kS,mediaMd:bS,mediaLg:$S,mediaXl:CS,container:AS,version:ES,company:LS,logo:RS,product:PS,language:TS},NS=()=>ne("div",{className:or.container,children:[ne(kn,{align:"flex-end",children:[S("p",{className:or.company,children:"Meta"}),S(da,{Icon:Hg,className:or.logo})]}),ne("p",{className:or.product,children:["React",S("span",{className:or.language,children:"JS"})]}),S("p",{className:or.version,children:"Developer"})]}),DS=()=>S("main",{className:eo.container,children:ne(kn,{direction:"column",gap:4*5,children:[S(NS,{}),ne("section",{className:eo.loaderContainer,children:[S("div",{className:eo.box}),S("div",{className:eo.box}),S("div",{className:eo.box})]})]})});function fa(){return fa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}function OS(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function IS(e){y.exports.useEffect(e,[])}function Vg(e,t){t===void 0&&(t={});var n=t,r=n.volume,o=r===void 0?1:r,i=n.playbackRate,a=i===void 0?1:i,l=n.soundEnabled,s=l===void 0?!0:l,u=n.interrupt,f=u===void 0?!1:u,d=n.onload,c=OS(n,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),v=Oe.useRef(null),m=Oe.useRef(!1),w=Oe.useState(null),b=w[0],h=w[1],p=Oe.useState(null),g=p[0],x=p[1],$=function(){typeof d=="function"&&d.call(this),m.current&&h(this.duration()*1e3),x(this)};IS(function(){return jo(()=>import("./howler.1abc920b.js").then(F=>F.h),[]).then(function(F){if(!m.current){var ue;v.current=(ue=F.Howl)!==null&&ue!==void 0?ue:F.default.Howl,m.current=!0,new v.current(fa({src:Array.isArray(e)?e:[e],volume:o,rate:a,onload:$},c))}}),function(){m.current=!1}}),Oe.useEffect(function(){v.current&&g&&x(new v.current(fa({src:Array.isArray(e)?e:[e],volume:o,onload:$},c)))},[JSON.stringify(e)]),Oe.useEffect(function(){g&&(g.volume(o),g.rate(a))},[o,a]);var A=Oe.useCallback(function(F){typeof F>"u"&&(F={}),!(!g||!s&&!F.forceSoundEnabled)&&(f&&g.stop(),F.playbackRate&&g.rate(F.playbackRate),g.play(F.id))},[g,s,f]),R=Oe.useCallback(function(F){!g||g.stop(F)},[g]),I=Oe.useCallback(function(F){!g||g.pause(F)},[g]),X=[A,{sound:g,stop:R,pause:I,duration:b}];return X}const _S="576",MS="768",zS="992",FS="1200",wi={mediaSm:_S,mediaMd:MS,mediaLg:zS,mediaXl:FS},jS={sm:wi.mediaSm,md:wi.mediaMd,lg:wi.mediaLg,xl:wi.mediaXl};function Wg(e){const t=`(min-width: ${jS[e]}px)`,n=()=>window.matchMedia(t).matches,[r,o]=y.exports.useState(n());function i(){o(n())}return y.exports.useEffect(()=>{const a=window.matchMedia(t);return i(),a.addEventListener("change",i),()=>{a.removeEventListener("change",i)}},[e]),r}const BS="/assets/click.271278cb.mp3";function Gs(e){const[t]=Vg(BS);return S(Bo,{...e,onClick:n=>{var r;t(),(r=e.onClick)==null||r.call(e,n)}})}const Ys=y.exports.createContext({isLoggedIn:!0,setIsLoggedIn:()=>{}}),US=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M5 3h16v4h-2V5H5v14h14v-2h2v4H3V3h2zm16 8h-2V9h-2V7h-2v2h2v2H7v2h10v2h-2v2h2v-2h2v-2h2v-2z",fill:"currentColor"})),HS=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z",fill:"currentColor"})),VS="/assets/logoff.04c168be.mp3",WS="576",QS="768",KS="992",GS="1200",YS="_container_178e6_15",XS="_reactIcon_178e6_19",ZS="_list_178e6_26",Ol={mediaSm:WS,mediaMd:QS,mediaLg:KS,mediaXl:GS,container:YS,reactIcon:XS,list:ZS},Qg="logged-out";function JS(){const{t:e}=Xa("menu"),{setIsLoggedIn:t}=y.exports.useContext(Ys),[n]=Vg(VS,{volume:.25}),r=Zh(),o=Wg("sm"),[i,a]=y.exports.useState(!1);return ne("div",{className:Ol.container,children:[ne(Gs,{onClick:()=>a(!i),active:i,children:[S(Hg,{className:Ol.reactIcon}),o&&S(Ks,{children:e("nav.start")})]}),i&&ne(mg,{className:Ol.list,onClick:()=>a(!1),children:[ne(Fs,{disabled:!0,"aria-disabled":!0,children:[S(da,{disabled:!0,marginRight:!0,Icon:HS})," In Progress"]}),S(sc,{}),ne(Fs,{onClick:()=>{n(),r("/"),t(!1),pg("true"),localStorage.setItem(Qg,"true")},children:[S(US,{height:24}),e("nav.logout")]})]})]})}const qS="576",ek="768",tk="992",nk="1200",rk="_container_1d9jl_8",ok={mediaSm:qS,mediaMd:ek,mediaLg:tk,mediaXl:nk,container:rk};function ik({variant:e}){const{i18n:t}=Xa(),n=Wg("sm"),r=y.exports.useRef(t.languages).current,o=r.indexOf(t.language),i=r.map((a,l)=>({label:`${n?"\u{1F310} ":""}${a.toUpperCase()}`,value:l}));return S(cc,{variant:e,defaultValue:o,options:i,menuMaxHeight:90,onChange:a=>t.changeLanguage(r[a.value]),className:ok.container})}const ak=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M5 2h16v20H3V2h2zm14 18V4H5v16h14zM7 6h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2z",fill:"currentColor"})),lk=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M16 3H8v4H2v14h10v-2H4V9h16v2h2V7h-6V3zm-2 4h-4V5h4v2zm6 6h-6v6h6v2h2v-2h-2v-6zm-4 4v-2h2v2h-2z",fill:"currentColor"})),sk="576",uk="768",ck="992",dk="1200",fk="_container_1n967_15",pk={mediaSm:sk,mediaMd:uk,mediaLg:ck,mediaXl:dk,container:fk},ln={hello:"/hello",projects:"/projects"};function hk(){const e=Zh(),t=Yu().pathname,{t:n}=Xa("menu");return ne(kn,{className:pk.container,children:[ne(Gs,{active:t===ln.hello,onClick:()=>e(t===ln.hello?"/":ln.hello),children:[S(da,{marginRight:!0,Icon:ak}),n("window.hello")]}),ne(Gs,{active:t===ln.projects,onClick:()=>e(t===ln.projects?"/":ln.projects),children:[S(da,{marginRight:!0,Icon:lk}),n("window.projects")]})]})}const gk="576",mk="768",vk="992",yk="1200",xk="_container_1wn5m_8",wk="_toolbar_1wn5m_19",mf={mediaSm:gk,mediaMd:mk,mediaLg:vk,mediaXl:yk,container:xk,"slide-down":"_slide-down_1wn5m_1",toolbar:wk},Sk=()=>S(hg,{as:"nav",className:mf.container,children:ne(ca,{className:mf.toolbar,children:[ne(kn,{gap:4,sx:{marginRight:4},children:[S(JS,{}),S(Bs,{size:35})]}),S(hk,{}),ne(kn,{gap:4,sx:{marginLeft:"auto"},children:[S(Bs,{size:35}),S(ik,{})]})]})}),kk="576",bk="768",$k="992",Ck="1200",Ak="_loader_dwj3s_8",Ek={mediaSm:kk,mediaMd:bk,mediaLg:$k,mediaXl:Ck,loader:Ak},Lk=50;function Rk(){const[e,t]=y.exports.useState(0);return y.exports.useEffect(()=>{const n=setInterval(()=>{t(r=>{if(r===100)return 0;const o=Math.random()*10;return Math.min(r+o,100)})},Lk);return()=>{clearInterval(n)}},[]),S("div",{className:Ek.loader,children:S(Ig,{variant:"tile",value:Math.floor(e)})})}const Pk="576",Tk="768",Nk="992",Dk="1200",Ok="_container_1adt5_15",Ik="_fadeIn_1adt5_22",_k="_main_1adt5_30",Mk="_avatar_1adt5_35",no={mediaSm:Pk,mediaMd:Tk,mediaLg:Nk,mediaXl:Dk,container:Ok,fadeIn:Ik,"fade-in":"_fade-in_1adt5_1",main:_k,avatar:Mk},zk=y.exports.lazy(()=>jo(()=>import("./LoginPage.1ce63669.js"),["assets/LoginPage.1ce63669.js","assets/github.5e714f70.js","assets/LoginPage.367ba7f8.css"]).then(e=>({default:e.LoginPage}))),Kg=localStorage.getItem(Qg)!=="true",vf=Kg?1:.6,Fk=_y(2500*vf,4e3*vf);function jk(){const[e,t]=y.exports.useState(!0),[n,r]=y.exports.useState(Kg),o=y.exports.useMemo(()=>({isLoggedIn:n,setIsLoggedIn:r}),[n]);return y.exports.useEffect(()=>{const i=setTimeout(()=>{t(!1),n&&pg("false")},Fk);return()=>clearTimeout(i)},[]),e?S("div",{className:no.container,children:S(DS,{})}):n?ne("div",{className:[no.container,no.fadeIn].join(" "),children:[S(Ys.Provider,{value:o,children:S(Sk,{})}),ne("main",{className:no.main,children:[S(kn,{wrap:"wrap",gap:24,justify:"space-around",align:"center",className:no.avatar,children:ne(kn,{align:"center",gap:14,children:[S(S2,{}),ne(kn,{direction:"column",children:[S(Ks,{bold:!0,variant:"title",children:"Alper Akta\u015F"}),S(Ks,{children:"Web Developer"})]})]})}),S(y.exports.Suspense,{fallback:S(Rk,{}),children:S(Tv,{})}),S(rS,{})]})]}):S(Ys.Provider,{value:o,children:S(y.exports.Suspense,{fallback:null,children:S(zk,{})})})}const yf={IntroductionWindow:y.exports.lazy(()=>jo(()=>import("./IntroductionWindow.517595d0.js"),["assets/IntroductionWindow.517595d0.js","assets/Window.module.99330da4.js","assets/Window.f59d6328.css","assets/github.5e714f70.js","assets/MailLink.450a0f1a.js"]).then(e=>({default:e.IntroductionWindow}))),ProjectsWindow:y.exports.lazy(()=>jo(()=>import("./ProjectsWindow.f673bda7.js"),["assets/ProjectsWindow.f673bda7.js","assets/Window.module.99330da4.js","assets/Window.f59d6328.css","assets/ProjectsWindow.9f8af5db.css"]).then(e=>({default:e.ProjectsWindow})))},Bk=[{path:"/",element:S("div",{})},{path:ln.hello,element:S(yf.IntroductionWindow,{})},{path:ln.projects,element:S(yf.ProjectsWindow,{})},{path:"*",element:S("div",{children:"404"})}],Uk=y.exports.lazy(()=>jo(()=>import("./ErrorPage.02b699ba.js"),["assets/ErrorPage.02b699ba.js","assets/MailLink.450a0f1a.js"]).then(e=>({default:e.ErrorPage}))),Hk=Iv([{path:"/",element:S(jk,{}),children:Bk,errorElement:S(Uk,{})}]),Vk=Ty`
  ${My}
`,Wk=()=>ne(Ry,{theme:Dy,children:[S(Vk,{}),S(Pv,{router:Hk})]}),Qk={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class pa{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||Qk,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,o){return o&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new pa(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new pa(this.logger,t)}}var Mt=new pa;class Za{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(!!this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function ro(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});return n.resolve=e,n.reject=t,n}function xf(e){return e==null?"":""+e}function Kk(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function dc(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function o(){return!e||typeof e=="string"}const i=typeof t!="string"?[].concat(t):t.split(".");for(;i.length>1;){if(o())return{};const a=r(i.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return o()?{}:{obj:e,k:r(i.shift())}}function wf(e,t,n){const{obj:r,k:o}=dc(e,t,Object);r[o]=n}function Gk(e,t,n,r){const{obj:o,k:i}=dc(e,t,Object);o[i]=o[i]||[],r&&(o[i]=o[i].concat(n)),r||o[i].push(n)}function ha(e,t){const{obj:n,k:r}=dc(e,t);if(!!n)return n[r]}function Yk(e,t,n){const r=ha(e,n);return r!==void 0?r:ha(t,n)}function Gg(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Gg(e[r],t[r],n):e[r]=t[r]);return e}function ir(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Xk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Zk(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>Xk[t]):e}const Jk=[" ",",","?","!",";"];function qk(e,t,n){t=t||"",n=n||"";const r=Jk.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const o=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let i=!o.test(e);if(!i){const a=e.indexOf(n);a>0&&!o.test(e.substring(0,a))&&(i=!0)}return i}function ga(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let o=e;for(let i=0;i<r.length;++i){if(!o||typeof o[r[i]]=="string"&&i+1<r.length)return;if(o[r[i]]===void 0){let a=2,l=r.slice(i,i+a).join(n),s=o[l];for(;s===void 0&&r.length>i+a;)a++,l=r.slice(i,i+a).join(n),s=o[l];if(s===void 0)return;if(s===null)return null;if(t.endsWith(l)){if(typeof s=="string")return s;if(l&&typeof s[l]=="string")return s[l]}const u=r.slice(i+a).join(n);return u?ga(s,u,n):void 0}o=o[r[i]]}return o}function ma(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class Sf extends Za{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,a=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let l=[t,n];r&&typeof r!="string"&&(l=l.concat(r)),r&&typeof r=="string"&&(l=l.concat(i?r.split(i):r)),t.indexOf(".")>-1&&(l=t.split("."));const s=ha(this.data,l);return s||!a||typeof r!="string"?s:ga(this.data&&this.data[t]&&this.data[t][n],r,i)}addResource(t,n,r,o){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=[t,n];r&&(l=l.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(l=t.split("."),o=n,n=l[1]),this.addNamespaces(n),wf(this.data,l,o),i.silent||this.emit("added",t,n,r,o)}addResources(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const i in r)(typeof r[i]=="string"||Object.prototype.toString.apply(r[i])==="[object Array]")&&this.addResource(t,n,i,r[i],{silent:!0});o.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,o,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},l=[t,n];t.indexOf(".")>-1&&(l=t.split("."),o=r,r=n,n=l[1]),this.addNamespaces(n);let s=ha(this.data,l)||{};o?Gg(s,r,i):s={...s,...r},wf(this.data,l,s),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var Yg={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach(i=>{this.processors[i]&&(t=this.processors[i].process(t,n,r,o))}),t}};const kf={};class va extends Za{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Kk(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Mt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let i=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,l=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!qk(t,r,o);if(a&&!l){const s=t.match(this.interpolator.nestingRegexp);if(s&&s.length>0)return{key:t,namespaces:i};const u=t.split(r);(r!==o||r===o&&this.options.ns.indexOf(u[0])>-1)&&(i=u.shift()),t=u.join(o)}return typeof i=="string"&&(i=[i]),{key:t,namespaces:i}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(t[t.length-1],n),s=l[l.length-1],u=n.lng||this.language,f=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(f){const x=n.nsSeparator||this.options.nsSeparator;return o?{res:`${s}${x}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:`${s}${x}${a}`}return o?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:a}const d=this.resolve(t,n);let c=d&&d.res;const v=d&&d.usedKey||a,m=d&&d.exactUsedKey||a,w=Object.prototype.toString.apply(c),b=["[object Number]","[object Function]","[object RegExp]"],h=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&c&&(typeof c!="string"&&typeof c!="boolean"&&typeof c!="number")&&b.indexOf(w)<0&&!(typeof h=="string"&&w==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,c,{...n,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return o?(d.res=x,d.usedParams=this.getUsedParamsDetails(n),d):x}if(i){const x=w==="[object Array]",$=x?[]:{},A=x?m:v;for(const R in c)if(Object.prototype.hasOwnProperty.call(c,R)){const I=`${A}${i}${R}`;$[R]=this.translate(I,{...n,joinArrays:!1,ns:l}),$[R]===I&&($[R]=c[R])}c=$}}else if(p&&typeof h=="string"&&w==="[object Array]")c=c.join(h),c&&(c=this.extendTranslation(c,t,n,r));else{let x=!1,$=!1;const A=n.count!==void 0&&typeof n.count!="string",R=va.hasDefaultValue(n),I=A?this.pluralResolver.getSuffix(u,n.count,n):"",X=n.ordinal&&A?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",F=n[`defaultValue${I}`]||n[`defaultValue${X}`]||n.defaultValue;!this.isValidLookup(c)&&R&&(x=!0,c=F),this.isValidLookup(c)||($=!0,c=a);const ie=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&$?void 0:c,ce=R&&F!==c&&this.options.updateMissing;if($||x||ce){if(this.logger.log(ce?"updateKey":"missingKey",u,s,a,ce?F:c),i){const se=this.resolve(a,{...n,keySeparator:!1});se&&se.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ee=[];const re=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&re&&re[0])for(let se=0;se<re.length;se++)ee.push(re[se]);else this.options.saveMissingTo==="all"?ee=this.languageUtils.toResolveHierarchy(n.lng||this.language):ee.push(n.lng||this.language);const ke=(se,E,H)=>{const Y=R&&H!==c?H:ie;this.options.missingKeyHandler?this.options.missingKeyHandler(se,s,E,Y,ce,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(se,s,E,Y,ce,n),this.emit("missingKey",se,s,E,c)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?ee.forEach(se=>{this.pluralResolver.getSuffixes(se,n).forEach(E=>{ke([se],a+E,n[`defaultValue${E}`]||F)})}):ke(ee,a,F))}c=this.extendTranslation(c,t,n,d,r),$&&c===a&&this.options.appendNamespaceToMissingKey&&(c=`${s}:${a}`),($||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?c=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}:${a}`:a,x?c:void 0):c=this.options.parseMissingKeyHandler(c))}return o?(d.res=c,d.usedParams=this.getUsedParamsDetails(n),d):c}extendTranslation(t,n,r,o,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(u){const c=t.match(this.interpolator.nestingRegexp);f=c&&c.length}let d=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,r.lng||this.language,r),u){const c=t.match(this.interpolator.nestingRegexp),v=c&&c.length;f<v&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(r.lng=o.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var c=arguments.length,v=new Array(c),m=0;m<c;m++)v[m]=arguments[m];return i&&i[0]===v[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`),null):a.translate(...v,n)},r)),r.interpolation&&this.interpolator.reset()}const l=r.postProcess||this.options.postProcess,s=typeof l=="string"?[l]:l;return t!=null&&s&&s.length&&r.applyPostProcessor!==!1&&(t=Yg.handle(s,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,i,a,l;return typeof t=="string"&&(t=[t]),t.forEach(s=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(s,n),f=u.key;o=f;let d=u.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const c=n.count!==void 0&&typeof n.count!="string",v=c&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),m=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(b=>{this.isValidLookup(r)||(l=b,!kf[`${w[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(l)&&(kf[`${w[0]}-${b}`]=!0,this.logger.warn(`key "${o}" for languages "${w.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(h=>{if(this.isValidLookup(r))return;a=h;const p=[f];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,f,h,b,n);else{let x;c&&(x=this.pluralResolver.getSuffix(h,n.count,n));const $=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(p.push(f+x),n.ordinal&&x.indexOf(A)===0&&p.push(f+x.replace(A,this.options.pluralSeparator)),v&&p.push(f+$)),m){const R=`${f}${this.options.contextSeparator}${n.context}`;p.push(R),c&&(p.push(R+x),n.ordinal&&x.indexOf(A)===0&&p.push(R+x.replace(A,this.options.pluralSeparator)),v&&p.push(R+$))}}let g;for(;g=p.pop();)this.isValidLookup(r)||(i=g,r=this.getResource(h,b,g,n))}))})}),{res:r,usedKey:o,exactUsedKey:i,usedLng:a,usedNS:l}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,o):this.resourceStore.getResource(t,n,r,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&typeof t.replace!="string";let o=r?t.replace:t;if(r&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const i of n)delete o[i]}return o}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function Il(e){return e.charAt(0).toUpperCase()+e.slice(1)}class bf{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Mt.create("languageUtils")}getScriptPartFromCode(t){if(t=ma(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=ma(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(o=>o.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Il(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Il(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=Il(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(i=>{if(i===o)return i;if(!(i.indexOf("-")<0&&o.indexOf("-")<0)&&i.indexOf(o)===0)return i})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],i=a=>{!a||(this.isSupportedCode(a)?o.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(t))):typeof t=="string"&&i(this.formatLanguageCode(t)),r.forEach(a=>{o.indexOf(a)<0&&i(this.formatLanguageCode(a))}),o}}let eb=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],tb={1:function(e){return Number(e>1)},2:function(e){return Number(e!=1)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)},7:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(e==1?0:e==2?1:e!=8&&e!=11?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(e==1?0:e==2?1:e<7?2:e<11?3:4)},11:function(e){return Number(e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(e!==0)},14:function(e){return Number(e==1?0:e==2?1:e==3?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:e!==0?1:2)},17:function(e){return Number(e==1||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(e==0?0:e==1?1:2)},19:function(e){return Number(e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(e==1?0:e==0||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3)}};const nb=["v1","v2","v3"],rb=["v4"],$f={zero:0,one:1,two:2,few:3,many:4,other:5};function ob(){const e={};return eb.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:tb[t.fc]}})}),e}class ib{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Mt.create("pluralResolver"),(!this.options.compatibilityJSON||rb.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=ob()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(ma(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(o=>`${n}${o}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((o,i)=>$f[o]-$f[i]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):r.numbers.map(o=>this.getSuffix(t,o,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,r);return o?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:this.getSuffixRetroCompatible(o,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let o=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const i=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:i():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?i():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!nb.includes(this.options.compatibilityJSON)}}function Cf(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,i=Yk(e,t,n);return!i&&o&&typeof n=="string"&&(i=ga(e,n,r),i===void 0&&(i=ga(t,n,r))),i}class ab{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Mt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:Zk,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?ir(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?ir(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?ir(n.nestingPrefix):n.nestingPrefixEscaped||ir("$t("),this.nestingSuffix=n.nestingSuffix?ir(n.nestingSuffix):n.nestingSuffixEscaped||ir(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,o){let i,a,l;const s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(m){return m.replace(/\$/g,"$$$$")}const f=m=>{if(m.indexOf(this.formatSeparator)<0){const p=Cf(n,s,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...o,...n,interpolationkey:m}):p}const w=m.split(this.formatSeparator),b=w.shift().trim(),h=w.join(this.formatSeparator).trim();return this.format(Cf(n,s,b,this.options.keySeparator,this.options.ignoreJSONStructure),h,r,{...o,...n,interpolationkey:b})};this.resetRegExp();const d=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,c=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>u(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?u(this.escape(m)):u(m)}].forEach(m=>{for(l=0;i=m.regex.exec(t);){const w=i[1].trim();if(a=f(w),a===void 0)if(typeof d=="function"){const h=d(t,i,o);a=typeof h=="string"?h:""}else if(o&&Object.prototype.hasOwnProperty.call(o,w))a="";else if(c){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=xf(a));const b=m.safeValue(a);if(t=t.replace(i[0],b),c?(m.regex.lastIndex+=a.length,m.regex.lastIndex-=i[0].length):m.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,i,a;function l(s,u){const f=this.nestingOptionsSeparator;if(s.indexOf(f)<0)return s;const d=s.split(new RegExp(`${f}[ ]*{`));let c=`{${d[1]}`;s=d[0],c=this.interpolate(c,a);const v=c.match(/'/g),m=c.match(/"/g);(v&&v.length%2===0&&!m||m.length%2!==0)&&(c=c.replace(/'/g,'"'));try{a=JSON.parse(c),u&&(a={...u,...a})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${s}`,w),`${s}${f}${c}`}return delete a.defaultValue,s}for(;o=this.nestingRegexp.exec(t);){let s=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const f=o[1].split(this.formatSeparator).map(d=>d.trim());o[1]=f.shift(),s=f,u=!0}if(i=n(l.call(this,o[1].trim(),a),a),i&&o[0]===t&&typeof i!="string")return i;typeof i!="string"&&(i=xf(i)),i||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),i=""),u&&(i=s.reduce((f,d)=>this.format(f,d,r.lng,{...r,interpolationkey:o[1].trim()}),i.trim())),t=t.replace(o[0],i),this.regexp.lastIndex=0}return t}}function lb(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);t==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(a=>{if(!a)return;const[l,...s]=a.split(":"),u=s.join(":").trim().replace(/^'+|'+$/g,"");n[l.trim()]||(n[l.trim()]=u),u==="false"&&(n[l.trim()]=!1),u==="true"&&(n[l.trim()]=!0),isNaN(u)||(n[l.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function ar(e){const t={};return function(r,o,i){const a=o+JSON.stringify(i);let l=t[a];return l||(l=e(ma(o),i),t[a]=l),l(r)}}class sb{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Mt.create("formatter"),this.options=t,this.formats={number:ar((n,r)=>{const o=new Intl.NumberFormat(n,{...r});return i=>o.format(i)}),currency:ar((n,r)=>{const o=new Intl.NumberFormat(n,{...r,style:"currency"});return i=>o.format(i)}),datetime:ar((n,r)=>{const o=new Intl.DateTimeFormat(n,{...r});return i=>o.format(i)}),relativetime:ar((n,r)=>{const o=new Intl.RelativeTimeFormat(n,{...r});return i=>o.format(i,r.range||"day")}),list:ar((n,r)=>{const o=new Intl.ListFormat(n,{...r});return i=>o.format(i)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=ar(n)}format(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((l,s)=>{const{formatName:u,formatOptions:f}=lb(s);if(this.formats[u]){let d=l;try{const c=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},v=c.locale||c.lng||o.locale||o.lng||r;d=this.formats[u](l,v,{...f,...o,...c})}catch(c){this.logger.warn(c)}return d}else this.logger.warn(`there was no format function for ${u}`);return l},t)}}function ub(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class cb extends Za{constructor(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=Mt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,o.backend,o)}queueLoad(t,n,r,o){const i={},a={},l={},s={};return t.forEach(u=>{let f=!0;n.forEach(d=>{const c=`${u}|${d}`;!r.reload&&this.store.hasResourceBundle(u,d)?this.state[c]=2:this.state[c]<0||(this.state[c]===1?a[c]===void 0&&(a[c]=!0):(this.state[c]=1,f=!1,a[c]===void 0&&(a[c]=!0),i[c]===void 0&&(i[c]=!0),s[d]===void 0&&(s[d]=!0)))}),f||(l[u]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(s)}}loaded(t,n,r){const o=t.split("|"),i=o[0],a=o[1];n&&this.emit("failedLoading",i,a,n),r&&this.store.addResourceBundle(i,a,r),this.state[t]=n?-1:2;const l={};this.queue.forEach(s=>{Gk(s.loaded,[i],a),ub(s,t),n&&s.errors.push(n),s.pendingCount===0&&!s.done&&(Object.keys(s.loaded).forEach(u=>{l[u]||(l[u]={});const f=s.loaded[u];f.length&&f.forEach(d=>{l[u][d]===void 0&&(l[u][d]=!0)})}),s.done=!0,s.errors.length?s.callback(s.errors):s.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(s=>!s.done)}read(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:o,wait:i,callback:a});return}this.readingCalls++;const l=(u,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(u&&f&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,o+1,i*2,a)},i);return}a(u,f)},s=this.backend[r].bind(this.backend);if(s.length===2){try{const u=s(t,n);u&&typeof u.then=="function"?u.then(f=>l(null,f)).catch(l):l(null,u)}catch(u){l(u)}return}return s(t,n,l)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const i=this.queueLoad(t,n,r,o);if(!i.toLoad.length)return i.pending.length||o(),null;i.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),o=r[0],i=r[1];this.read(o,i,"read",void 0,void 0,(a,l)=>{a&&this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`,a),!a&&l&&this.logger.log(`${n}loaded namespace ${i} for language ${o}`,l),this.loaded(t,a,l)})}saveMissing(t,n,r,o,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const s={...a,isUpdate:i},u=this.backend.create.bind(this.backend);if(u.length<6)try{let f;u.length===5?f=u(t,n,r,o,s):f=u(t,n,r,o),f&&typeof f.then=="function"?f.then(d=>l(null,d)).catch(l):l(null,f)}catch(f){l(f)}else u(t,n,r,o,l,s)}!t||!t[0]||this.store.addResource(t[0],n,r,o)}}}function Af(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(o=>{n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Ef(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Si(){}function db(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Uo extends Za{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ef(t),this.services={},this.logger=Mt,this.modules={external:[]},db(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=Af();this.options={...o,...this.options,...Ef(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function i(f){return f?typeof f=="function"?new f:f:null}if(!this.options.isClone){this.modules.logger?Mt.init(i(this.modules.logger),this.options):Mt.init(null,this.options);let f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=sb);const d=new bf(this.options);this.store=new Sf(this.options.resources,this.options);const c=this.services;c.logger=Mt,c.resourceStore=this.store,c.languageUtils=d,c.pluralResolver=new ib(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(c.formatter=i(f),c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new ab(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new cb(i(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",function(v){for(var m=arguments.length,w=new Array(m>1?m-1:0),b=1;b<m;b++)w[b-1]=arguments[b];t.emit(v,...w)}),this.modules.languageDetector&&(c.languageDetector=i(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=i(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new va(this.services,this.options),this.translator.on("*",function(v){for(var m=arguments.length,w=new Array(m>1?m-1:0),b=1;b<m;b++)w[b-1]=arguments[b];t.emit(v,...w)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Si),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(f=>{this[f]=function(){return t.store[f](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(f=>{this[f]=function(){return t.store[f](...arguments),t}});const s=ro(),u=()=>{const f=(d,c)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(c),r(d,c)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return f(null,this.t.bind(this));this.changeLanguage(this.options.lng,f)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),s}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Si;const o=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const i=[],a=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(u=>{u!=="cimode"&&i.indexOf(u)<0&&i.push(u)})};o?a(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(s=>a(s)),this.options.preload&&this.options.preload.forEach(l=>a(l)),this.services.backendConnector.load(i,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(l)})}else r(null)}reloadResources(t,n,r){const o=ro();return t||(t=this.languages),n||(n=this.options.ns),r||(r=Si),this.services.backendConnector.reload(t,n,i=>{o.resolve(),r(i)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Yg.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const o=ro();this.emit("languageChanging",t);const i=s=>{this.language=s,this.languages=this.services.languageUtils.toResolveHierarchy(s),this.resolvedLanguage=void 0,this.setResolvedLanguage(s)},a=(s,u)=>{u?(i(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),n&&n(s,function(){return r.t(...arguments)})},l=s=>{!t&&!s&&this.services.languageDetector&&(s=[]);const u=typeof s=="string"?s:this.services.languageUtils.getBestMatchFromCodes(s);u&&(this.language||i(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,f=>{a(f,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(t),o}getFixedT(t,n,r){var o=this;const i=function(a,l){let s;if(typeof l!="object"){for(var u=arguments.length,f=new Array(u>2?u-2:0),d=2;d<u;d++)f[d-2]=arguments[d];s=o.options.overloadTranslationOptionHandler([a,l].concat(f))}else s={...l};s.lng=s.lng||i.lng,s.lngs=s.lngs||i.lngs,s.ns=s.ns||i.ns,s.keyPrefix=s.keyPrefix||r||i.keyPrefix;const c=o.options.keySeparator||".";let v;return s.keyPrefix&&Array.isArray(a)?v=a.map(m=>`${s.keyPrefix}${c}${m}`):v=s.keyPrefix?`${s.keyPrefix}${c}${a}`:a,o.t(v,s)};return typeof t=="string"?i.lng=t:i.lngs=t,i.ns=n,i.keyPrefix=r,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const u=this.services.backendConnector.state[`${l}|${s}`];return u===-1||u===2};if(n.precheck){const l=n.precheck(this,a);if(l!==void 0)return l}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!o||a(i,t)))}loadNamespaces(t,n){const r=ro();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=ro();typeof t=="string"&&(t=[t]);const o=this.options.preload||[],i=t.filter(a=>o.indexOf(a)<0);return i.length?(this.options.preload=o.concat(i),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new bf(Af());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Uo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Si;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},i=new Uo(o);return(t.debug!==void 0||t.prefix!==void 0)&&(i.logger=i.logger.clone(t)),["store","services","language"].forEach(l=>{i[l]=this[l]}),i.services={...this.services},i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},r&&(i.store=new Sf(this.store.data,o),i.services.resourceStore=i.store),i.translator=new va(i.services,o),i.translator.on("*",function(l){for(var s=arguments.length,u=new Array(s>1?s-1:0),f=1;f<s;f++)u[f-1]=arguments[f];i.emit(l,...u)}),i.init(o,n),i.translator.options=o,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const qe=Uo.createInstance();qe.createInstance=Uo.createInstance;qe.createInstance;qe.dir;qe.init;qe.loadResources;qe.reloadResources;qe.use;qe.changeLanguage;qe.getFixedT;qe.t;qe.exists;qe.setDefaultNamespace;qe.hasLoadedNamespace;qe.loadNamespaces;qe.loadLanguages;var Xs=(e=>(e.TURKISH="tr",e.ENGLISH="en",e))(Xs||{});const fb={"go-to-page":"Web sayfas\u0131na git",login:"Giri\u015F"},pb="Y\xFCkleniyor",hb="\u015Eifre",gb={btn:fb,loading:pb,password:hb},mb={greeting:"Merhaba, ben Clippy!"},vb={"fallback-element":"Aman! San\u0131r\u0131m web sayfam\u0131 bozdun! Hatay\u0131 gidermem i\xE7in yard\u0131mc\u0131 olmak istersen, taray\u0131c\u0131 konsolundaki hata  mesaj\u0131n\u0131 kontrol edip g\xF6ndermeni \xF6nemle rica ediyorum :)"},yb={"about-current-job":"\u015Eu anda, Etstur'da Yaz\u0131l\u0131m Geli\u015Ftirme Uzman Yard\u0131mc\u0131s\u0131 olarak \xE7al\u0131\u015F\u0131yorum. \u015Eirketin React bazl\u0131 B2B web uygulamar\u0131n\u0131n geli\u015Ftirilmesinde rol al\u0131yorum.","about-experience":"Yaz\u0131l\u0131m geli\u015Ftirmeye olduk\xE7a ilgi duydu\u011Fum i\xE7in, hedefledi\u011Fim kariyere \xF6\u011Frencilik d\xF6nemimde online i\xE7erikler t\xFCketerek ile ve HackerRank vb. sitelerde testler \xE7\xF6zerek yat\u0131r\u0131m yapt\u0131m.","about-me":"Ege \xDCniversitesi, \u0130ngiliz Dili ve Edebiyat\u0131 mezunuyum.","about-preferences":"Genel olarak web uygulamalar\u0131n\u0131 TypeScript ve React.js ile geli\u015Ftirmeyi tercih ediyorum. Yapt\u0131\u011F\u0131m geli\u015Ftirmeleri Vitest ve react-testing-library ile, bazen de Playwright ile test ediyorum."},xb={clippy:mb,"daily-space-palette":"Daily Space Palette, NASA'n\u0131n API i\xE7eri\u011Fini kullanarak G\xFCn\xFCn Astronomi Foto\u011Fraf\u0131'n\u0131 g\xF6steriyor. Ek olarak, gelen bu foto\u011Fraftaki renkleri analiz ederek \xE7e\u015Fitli renk paletleri olu\u015Fturuyor.",error:vb,introduction:yb,"login-screen":{"footer-info":"Giri\u015F yapt\u0131ktan sonra kullan\u0131c\u0131 hesab\u0131 ekleyebilir veyak kullan\u0131c\u0131y\u0131 de\u011Fi\u015Ftirebilirsiniz.",instructions:"Ba\u015Flamak i\xE7in l\xFCtfen \u015Fifrenizi giriniz","turn-off":"Bilgisayar\u0131 kapat"}},wb={logout:"\xC7\u0131k\u0131\u015F",start:"Ba\u015Flat"},Sb={hello:"Merhaba.txt",projects:"Projeler.exe"},kb={nav:wb,window:Sb},bb={"go-to-page":"Go to webpage",login:"Login"},$b="Loading",Cb="Password",Ab={btn:bb,loading:$b,password:Cb},Eb={"about-current-job":"Currently, I work at Etstur as a Software Development Assistant and I participate in developing React-based B2B web applications.","about-experience":"Because of my profound interest in software development, I studied software through online content and solved test cases on websites like HackerRank to invest into the career that I desired to have during my studentship.","about-me":"I am an English Language and Literature graduate from Ege University.","about-preferences":"I generally prefer developing apps with TypeScript and React. Additionally, I write tests using Vitest and react-testing-library, and depending on the project, I may use Playwright as well."},Lb={greeting:"Hello, I'm Clippy!"},Rb={"fallback-element":"Oops! Looks like you broke my website! If you want to help me fix it, you can check the browser console for the error message and kindly send it to me, pretty please :)"},Pb={"daily-space-palette":"Daily Space Palette is a web project that fetches the Astronomy Picture of the Day using NASA's API, then generates a color palette from that picture.",introduction:Eb,clippy:Lb,error:Rb,"login-screen":{"footer-info":"After you log on, you can add or change accounts.",instructions:"To begin, please enter your password","turn-off":"Turn off computer"}},Tb={logout:"Logout",start:"Start"},Nb={hello:"Hello.txt",projects:"Projects.exe"},Db={nav:Tb,window:Nb},Xg=["general","menu","content"],Ob=Xg[0],Ib={tr:{general:gb,content:xb,menu:kb},en:{general:Ab,content:Pb,menu:Db}},_b={lng:Xs.TURKISH,fallbackLng:Object.values(Xs),debug:!1,resources:Ib,ns:Xg,defaultNS:Ob};qe.use(D2).init(_b);Ml.createRoot(document.getElementById("root")).render(S(Oe.StrictMode,{children:S(Wk,{})}));export{Uy as A,S2 as B,Mb as C,kn as F,ik as L,da as S,Ks as T,Ng as W,jo as _,Rv as a,S as b,Ys as c,Vg as d,kg as e,Bo as f,fS as g,Wg as h,Qg as i,ne as j,NS as k,Tg as l,ca as m,Pg as n,Yx as o,zb as p,tu as q,y as r,pg as s,Zh as t,Xa as u,Gs as v,o2 as w,Jw as x,e2 as y,Rk as z};
