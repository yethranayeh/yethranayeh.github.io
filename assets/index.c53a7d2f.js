function $g(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ag(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),Eg=Symbol.for("react.portal"),Rg=Symbol.for("react.fragment"),Pg=Symbol.for("react.strict_mode"),Lg=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),Dg=Symbol.for("react.forward_ref"),Og=Symbol.for("react.suspense"),Ig=Symbol.for("react.memo"),zg=Symbol.for("react.lazy"),Ju=Symbol.iterator;function _g(e){return e===null||typeof e!="object"?null:(e=Ju&&e[Ju]||e["@@iterator"],typeof e=="function"?e:null)}var lf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sf=Object.assign,uf={};function zr(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||lf}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cf(){}cf.prototype=zr.prototype;function Is(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||lf}var zs=Is.prototype=new cf;zs.constructor=Is;sf(zs,zr.prototype);zs.isPureReactComponent=!0;var qu=Array.isArray,df=Object.prototype.hasOwnProperty,_s={current:null},ff={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)df.call(t,r)&&!ff.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:zo,type:e,key:i,ref:a,props:o,_owner:_s.current}}function Mg(e,t){return{$$typeof:zo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===zo}function Fg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ec=/\/+/g;function Ha(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fg(""+e.key):t.toString(36)}function pi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case zo:case Eg:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ha(a,0):r,qu(o)?(n="",e!=null&&(n=e.replace(ec,"$&/")+"/"),pi(o,t,n,"",function(u){return u})):o!=null&&(Ms(o)&&(o=Mg(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ec,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",qu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Ha(i,l);a+=pi(i,t,n,s,o)}else if(s=_g(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Ha(i,l++),a+=pi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ho(e,t,n){if(e==null)return e;var r=[],o=0;return pi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function jg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},hi={transition:null},Bg={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:hi,ReactCurrentOwner:_s};pe.Children={map:Ho,forEach:function(e,t,n){Ho(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ho(e,function(){t++}),t},toArray:function(e){return Ho(e,function(t){return t})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=zr;pe.Fragment=Rg;pe.Profiler=Lg;pe.PureComponent=Is;pe.StrictMode=Pg;pe.Suspense=Og;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bg;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=_s.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)df.call(t,s)&&!ff.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:zo,type:e.type,key:o,ref:i,props:r,_owner:a}};pe.createContext=function(e){return e={$$typeof:Ng,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tg,_context:e},e.Consumer=e};pe.createElement=pf;pe.createFactory=function(e){var t=pf.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:Dg,render:e}};pe.isValidElement=Ms;pe.lazy=function(e){return{$$typeof:zg,_payload:{_status:-1,_result:e},_init:jg}};pe.memo=function(e,t){return{$$typeof:Ig,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=hi.transition;hi.transition={};try{e()}finally{hi.transition=t}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(e,t){return tt.current.useCallback(e,t)};pe.useContext=function(e){return tt.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};pe.useEffect=function(e,t){return tt.current.useEffect(e,t)};pe.useId=function(){return tt.current.useId()};pe.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return tt.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};pe.useRef=function(e){return tt.current.useRef(e)};pe.useState=function(e){return tt.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return tt.current.useTransition()};pe.version="18.2.0";(function(e){e.exports=pe})(w);const Rt=Ag(w.exports),Cl=$g({__proto__:null,default:Rt},[w.exports]);var $l={},Fs={exports:{}},pt={},hf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,H){var Y=E.length;E.push(H);e:for(;0<Y;){var ue=Y-1>>>1,M=E[ue];if(0<o(M,H))E[ue]=H,E[Y]=M,Y=ue;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var H=E[0],Y=E.pop();if(Y!==H){E[0]=Y;e:for(var ue=0,M=E.length,R=M>>>1;ue<R;){var T=2*(ue+1)-1,F=E[T],S=T+1,V=E[S];if(0>o(F,Y))S<M&&0>o(V,F)?(E[ue]=V,E[S]=Y,ue=S):(E[ue]=F,E[T]=Y,ue=T);else if(S<M&&0>o(V,Y))E[ue]=V,E[S]=Y,ue=S;else break e}}return H}function o(E,H){var Y=E.sortIndex-H.sortIndex;return Y!==0?Y:E.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,d=null,c=3,v=!1,m=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=E)r(u),H.sortIndex=H.expirationTime,t(s,H);else break;H=n(u)}}function y(E){if(x=!1,g(E),!m)if(n(s)!==null)m=!0,ke(C);else{var H=n(u);H!==null&&le(y,H.startTime-E)}}function C(E,H){m=!1,x&&(x=!1,h(_),_=-1),v=!0;var Y=c;try{for(g(H),d=n(s);d!==null&&(!(d.expirationTime>H)||E&&!ce());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,c=d.priorityLevel;var M=ue(d.expirationTime<=H);H=e.unstable_now(),typeof M=="function"?d.callback=M:d===n(s)&&r(s),g(H)}else r(s);d=n(s)}if(d!==null)var R=!0;else{var T=n(u);T!==null&&le(y,T.startTime-H),R=!1}return R}finally{d=null,c=Y,v=!1}}var A=!1,L=null,_=-1,X=5,U=-1;function ce(){return!(e.unstable_now()-U<X)}function oe(){if(L!==null){var E=e.unstable_now();U=E;var H=!0;try{H=L(!0,E)}finally{H?se():(A=!1,L=null)}}else A=!1}var se;if(typeof p=="function")se=function(){p(oe)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ne=ee.port2;ee.port1.onmessage=oe,se=function(){ne.postMessage(null)}}else se=function(){k(oe,0)};function ke(E){L=E,A||(A=!0,se())}function le(E,H){_=k(function(){E(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){m||v||(m=!0,ke(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(c){case 1:case 2:case 3:var H=3;break;default:H=c}var Y=c;c=H;try{return E()}finally{c=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var Y=c;c=E;try{return H()}finally{c=Y}},e.unstable_scheduleCallback=function(E,H,Y){var ue=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ue+Y:ue):Y=ue,E){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=Y+M,E={id:f++,callback:H,priorityLevel:E,startTime:Y,expirationTime:M,sortIndex:-1},Y>ue?(E.sortIndex=Y,t(u,E),n(s)===null&&E===n(u)&&(x?(h(_),_=-1):x=!0,le(y,Y-ue))):(E.sortIndex=M,t(s,E),m||v||(m=!0,ke(C))),E},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(E){var H=c;return function(){var Y=c;c=H;try{return E.apply(this,arguments)}finally{c=Y}}}})(gf);(function(e){e.exports=gf})(hf);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=w.exports,ft=hf.exports;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vf=new Set,go={};function Gn(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(go[e]=t,e=0;e<t.length;e++)vf.add(t[e])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,Ug=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tc={},nc={};function Hg(e){return Al.call(nc,e)?!0:Al.call(tc,e)?!1:Ug.test(e)?nc[e]=!0:(tc[e]=!0,!1)}function Vg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wg(e,t,n,r){if(t===null||typeof t>"u"||Vg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var js=/[\-:]([a-z])/g;function Bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(js,Bs);We[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(js,Bs);We[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(js,Bs);We[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Us(e,t,n,r){var o=We.hasOwnProperty(t)?We[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wg(t,n,o,r)&&(n=null),r||o===null?Hg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),or=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),Hs=Symbol.for("react.strict_mode"),El=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),xf=Symbol.for("react.context"),Vs=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Pl=Symbol.for("react.suspense_list"),Ws=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),wf=Symbol.for("react.offscreen"),rc=Symbol.iterator;function Br(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,Va;function Jr(e){if(Va===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Va=t&&t[1]||""}return`
`+Va+e}var Wa=!1;function Qa(e,t){if(!e||Wa)return"";Wa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Wa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function Qg(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=Qa(e.type,!1),e;case 11:return e=Qa(e.type.render,!1),e;case 1:return e=Qa(e.type,!0),e;default:return""}}function Ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case or:return"Portal";case El:return"Profiler";case Hs:return"StrictMode";case Rl:return"Suspense";case Pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xf:return(e.displayName||"Context")+".Consumer";case yf:return(e._context.displayName||"Context")+".Provider";case Vs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ws:return t=e.displayName||null,t!==null?t:Ll(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Ll(e(t))}catch{}}return null}function Kg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ll(t);case 8:return t===Hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gg(e){var t=Sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wo(e){e._valueTracker||(e._valueTracker=Gg(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function oc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bf(e,t){t=t.checked,t!=null&&Us(e,"checked",t,!1)}function Nl(e,t){bf(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dl(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dl(e,t,n){(t!=="number"||Ei(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qr=Array.isArray;function xr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(qr(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function Cf(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $f(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$f(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qo,Af=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yg=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){Yg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function Ef(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function Rf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ef(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Xg=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(Xg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function _l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function Qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,wr=null,Sr=null;function sc(e){if(e=Fo(e)){if(typeof Fl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=pa(t),Fl(e.stateNode,e.type,t))}}function Pf(e){wr?Sr?Sr.push(e):Sr=[e]:wr=e}function Lf(){if(wr){var e=wr,t=Sr;if(Sr=wr=null,sc(e),t)for(e=0;e<t.length;e++)sc(t[e])}}function Tf(e,t){return e(t)}function Nf(){}var Ka=!1;function Df(e,t,n){if(Ka)return e(t,n);Ka=!0;try{return Tf(e,t,n)}finally{Ka=!1,(wr!==null||Sr!==null)&&(Nf(),Lf())}}function vo(e,t){var n=e.stateNode;if(n===null)return null;var r=pa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var jl=!1;if(Zt)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){jl=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{jl=!1}function Zg(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var oo=!1,Ri=null,Pi=!1,Bl=null,Jg={onError:function(e){oo=!0,Ri=e}};function qg(e,t,n,r,o,i,a,l,s){oo=!1,Ri=null,Zg.apply(Jg,arguments)}function em(e,t,n,r,o,i,a,l,s){if(qg.apply(this,arguments),oo){if(oo){var u=Ri;oo=!1,Ri=null}else throw Error(z(198));Pi||(Pi=!0,Bl=u)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Of(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uc(e){if(Yn(e)!==e)throw Error(z(188))}function tm(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return uc(o),e;if(i===r)return uc(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function If(e){return e=tm(e),e!==null?zf(e):null}function zf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zf(e);if(t!==null)return t;e=e.sibling}return null}var _f=ft.unstable_scheduleCallback,cc=ft.unstable_cancelCallback,nm=ft.unstable_shouldYield,rm=ft.unstable_requestPaint,De=ft.unstable_now,om=ft.unstable_getCurrentPriorityLevel,Ks=ft.unstable_ImmediatePriority,Mf=ft.unstable_UserBlockingPriority,Li=ft.unstable_NormalPriority,im=ft.unstable_LowPriority,Ff=ft.unstable_IdlePriority,ua=null,Mt=null;function am(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(ua,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:um,lm=Math.log,sm=Math.LN2;function um(e){return e>>>=0,e===0?32:31-(lm(e)/sm|0)|0}var Ko=64,Go=4194304;function eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ti(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=eo(l):(i&=a,i!==0&&(r=eo(i)))}else a=n&~o,a!==0?r=eo(a):i!==0&&(r=eo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),o=1<<n,r|=e[n],t&=~o;return r}function cm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Pt(i),l=1<<a,s=o[a];s===-1?((l&n)===0||(l&r)!==0)&&(o[a]=cm(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jf(){var e=Ko;return Ko<<=1,(Ko&4194240)===0&&(Ko=64),e}function Ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _o(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function fm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Gs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var we=0;function Bf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Uf,Ys,Hf,Vf,Wf,Hl=!1,Yo=[],dn=null,fn=null,pn=null,yo=new Map,xo=new Map,ln=[],pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dc(e,t){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":yo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(t.pointerId)}}function Hr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Fo(t),t!==null&&Ys(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function hm(e,t,n,r,o){switch(t){case"focusin":return dn=Hr(dn,e,t,n,r,o),!0;case"dragenter":return fn=Hr(fn,e,t,n,r,o),!0;case"mouseover":return pn=Hr(pn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return yo.set(i,Hr(yo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,xo.set(i,Hr(xo.get(i)||null,e,t,n,r,o)),!0}return!1}function Qf(e){var t=Tn(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Of(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){Hf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ml=r,n.target.dispatchEvent(r),Ml=null}else return t=Fo(n),t!==null&&Ys(t),e.blockedOn=n,!1;t.shift()}return!0}function fc(e,t,n){gi(e)&&n.delete(t)}function gm(){Hl=!1,dn!==null&&gi(dn)&&(dn=null),fn!==null&&gi(fn)&&(fn=null),pn!==null&&gi(pn)&&(pn=null),yo.forEach(fc),xo.forEach(fc)}function Vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Hl||(Hl=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,gm)))}function wo(e){function t(o){return Vr(o,e)}if(0<Yo.length){Vr(Yo[0],e);for(var n=1;n<Yo.length;n++){var r=Yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&Vr(dn,e),fn!==null&&Vr(fn,e),pn!==null&&Vr(pn,e),yo.forEach(t),xo.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)Qf(n),n.blockedOn===null&&ln.shift()}var kr=nn.ReactCurrentBatchConfig,Ni=!0;function mm(e,t,n,r){var o=we,i=kr.transition;kr.transition=null;try{we=1,Xs(e,t,n,r)}finally{we=o,kr.transition=i}}function vm(e,t,n,r){var o=we,i=kr.transition;kr.transition=null;try{we=4,Xs(e,t,n,r)}finally{we=o,kr.transition=i}}function Xs(e,t,n,r){if(Ni){var o=Vl(e,t,n,r);if(o===null)ol(e,t,r,Di,n),dc(e,r);else if(hm(o,e,t,n,r))r.stopPropagation();else if(dc(e,r),t&4&&-1<pm.indexOf(e)){for(;o!==null;){var i=Fo(o);if(i!==null&&Uf(i),i=Vl(e,t,n,r),i===null&&ol(e,t,r,Di,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var Di=null;function Vl(e,t,n,r){if(Di=null,e=Qs(r),e=Tn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Of(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Di=e,null}function Kf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(om()){case Ks:return 1;case Mf:return 4;case Li:case im:return 16;case Ff:return 536870912;default:return 16}default:return 16}}var un=null,Zs=null,mi=null;function Gf(){if(mi)return mi;var e,t=Zs,n=t.length,r,o="value"in un?un.value:un.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return mi=o.slice(e,1<r?1-r:void 0)}function vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function pc(){return!1}function ht(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xo:pc,this.isPropagationStopped=pc,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=ht(_r),Mo=Le({},_r,{view:0,detail:0}),ym=ht(Mo),Ya,Xa,Wr,ca=Le({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(Ya=e.screenX-Wr.screenX,Xa=e.screenY-Wr.screenY):Xa=Ya=0,Wr=e),Ya)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),hc=ht(ca),xm=Le({},ca,{dataTransfer:0}),wm=ht(xm),Sm=Le({},Mo,{relatedTarget:0}),Za=ht(Sm),km=Le({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),bm=ht(km),Cm=Le({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$m=ht(Cm),Am=Le({},_r,{data:0}),gc=ht(Am),Em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pm[e])?!!t[e]:!1}function qs(){return Lm}var Tm=Le({},Mo,{key:function(e){if(e.key){var t=Em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qs,charCode:function(e){return e.type==="keypress"?vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nm=ht(Tm),Dm=Le({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=ht(Dm),Om=Le({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qs}),Im=ht(Om),zm=Le({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),_m=ht(zm),Mm=Le({},ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fm=ht(Mm),jm=[9,13,27,32],eu=Zt&&"CompositionEvent"in window,io=null;Zt&&"documentMode"in document&&(io=document.documentMode);var Bm=Zt&&"TextEvent"in window&&!io,Yf=Zt&&(!eu||io&&8<io&&11>=io),vc=String.fromCharCode(32),yc=!1;function Xf(e,t){switch(e){case"keyup":return jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function Um(e,t){switch(e){case"compositionend":return Zf(t);case"keypress":return t.which!==32?null:(yc=!0,vc);case"textInput":return e=t.data,e===vc&&yc?null:e;default:return null}}function Hm(e,t){if(ar)return e==="compositionend"||!eu&&Xf(e,t)?(e=Gf(),mi=Zs=un=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yf&&t.locale!=="ko"?null:t.data;default:return null}}var Vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vm[e.type]:t==="textarea"}function Jf(e,t,n,r){Pf(r),t=Oi(t,"onChange"),0<t.length&&(n=new Js("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ao=null,So=null;function Wm(e){up(e,0)}function da(e){var t=ur(e);if(kf(t))return e}function Qm(e,t){if(e==="change")return t}var qf=!1;if(Zt){var Ja;if(Zt){var qa="oninput"in document;if(!qa){var wc=document.createElement("div");wc.setAttribute("oninput","return;"),qa=typeof wc.oninput=="function"}Ja=qa}else Ja=!1;qf=Ja&&(!document.documentMode||9<document.documentMode)}function Sc(){ao&&(ao.detachEvent("onpropertychange",ep),So=ao=null)}function ep(e){if(e.propertyName==="value"&&da(So)){var t=[];Jf(t,So,e,Qs(e)),Df(Wm,t)}}function Km(e,t,n){e==="focusin"?(Sc(),ao=t,So=n,ao.attachEvent("onpropertychange",ep)):e==="focusout"&&Sc()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return da(So)}function Ym(e,t){if(e==="click")return da(t)}function Xm(e,t){if(e==="input"||e==="change")return da(t)}function Zm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Zm;function ko(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Al.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bc(e,t){var n=kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kc(n)}}function tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function np(){for(var e=window,t=Ei();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ei(e.document)}return t}function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jm(e){var t=np(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tp(n.ownerDocument.documentElement,n)){if(r!==null&&tu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=bc(n,i);var a=bc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qm=Zt&&"documentMode"in document&&11>=document.documentMode,lr=null,Wl=null,lo=null,Ql=!1;function Cc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ql||lr==null||lr!==Ei(r)||(r=lr,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&ko(lo,r)||(lo=r,r=Oi(Wl,"onSelect"),0<r.length&&(t=new Js("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function Zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},el={},rp={};Zt&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function fa(e){if(el[e])return el[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rp)return el[e]=t[n];return e}var op=fa("animationend"),ip=fa("animationiteration"),ap=fa("animationstart"),lp=fa("transitionend"),sp=new Map,$c="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){sp.set(e,t),Gn(t,[e])}for(var tl=0;tl<$c.length;tl++){var nl=$c[tl],e0=nl.toLowerCase(),t0=nl[0].toUpperCase()+nl.slice(1);Cn(e0,"on"+t0)}Cn(op,"onAnimationEnd");Cn(ip,"onAnimationIteration");Cn(ap,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(lp,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n0=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Ac(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,em(r,t,void 0,e),e.currentTarget=null}function up(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Ac(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Ac(o,l,u),i=s}}}if(Pi)throw e=Bl,Pi=!1,Bl=null,e}function Ce(e,t){var n=t[Zl];n===void 0&&(n=t[Zl]=new Set);var r=e+"__bubble";n.has(r)||(cp(t,e,2,!1),n.add(r))}function rl(e,t,n){var r=0;t&&(r|=4),cp(n,e,r,t)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[Jo]){e[Jo]=!0,vf.forEach(function(n){n!=="selectionchange"&&(n0.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jo]||(t[Jo]=!0,rl("selectionchange",!1,t))}}function cp(e,t,n,r){switch(Kf(t)){case 1:var o=mm;break;case 4:o=vm;break;default:o=Xs}n=o.bind(null,t,n,e),o=void 0,!jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Tn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Df(function(){var u=i,f=Qs(n),d=[];e:{var c=sp.get(e);if(c!==void 0){var v=Js,m=e;switch(e){case"keypress":if(vi(n)===0)break e;case"keydown":case"keyup":v=Nm;break;case"focusin":m="focus",v=Za;break;case"focusout":m="blur",v=Za;break;case"beforeblur":case"afterblur":v=Za;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Im;break;case op:case ip:case ap:v=bm;break;case lp:v=_m;break;case"scroll":v=ym;break;case"wheel":v=Fm;break;case"copy":case"cut":case"paste":v=$m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=mc}var x=(t&4)!==0,k=!x&&e==="scroll",h=x?c!==null?c+"Capture":null:c;x=[];for(var p=u,g;p!==null;){g=p;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,h!==null&&(y=vo(p,h),y!=null&&x.push(Co(p,y,g)))),k)break;p=p.return}0<x.length&&(c=new v(c,m,null,n,f),d.push({event:c,listeners:x}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",c&&n!==Ml&&(m=n.relatedTarget||n.fromElement)&&(Tn(m)||m[Jt]))break e;if((v||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,v?(m=n.relatedTarget||n.toElement,v=u,m=m?Tn(m):null,m!==null&&(k=Yn(m),m!==k||m.tag!==5&&m.tag!==6)&&(m=null)):(v=null,m=u),v!==m)){if(x=hc,y="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=mc,y="onPointerLeave",h="onPointerEnter",p="pointer"),k=v==null?c:ur(v),g=m==null?c:ur(m),c=new x(y,p+"leave",v,n,f),c.target=k,c.relatedTarget=g,y=null,Tn(f)===u&&(x=new x(h,p+"enter",m,n,f),x.target=g,x.relatedTarget=k,y=x),k=y,v&&m)t:{for(x=v,h=m,p=0,g=x;g;g=er(g))p++;for(g=0,y=h;y;y=er(y))g++;for(;0<p-g;)x=er(x),p--;for(;0<g-p;)h=er(h),g--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=er(x),h=er(h)}x=null}else x=null;v!==null&&Ec(d,c,v,x,!1),m!==null&&k!==null&&Ec(d,k,m,x,!0)}}e:{if(c=u?ur(u):window,v=c.nodeName&&c.nodeName.toLowerCase(),v==="select"||v==="input"&&c.type==="file")var C=Qm;else if(xc(c))if(qf)C=Xm;else{C=Gm;var A=Km}else(v=c.nodeName)&&v.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(C=Ym);if(C&&(C=C(e,u))){Jf(d,C,n,f);break e}A&&A(e,c,u),e==="focusout"&&(A=c._wrapperState)&&A.controlled&&c.type==="number"&&Dl(c,"number",c.value)}switch(A=u?ur(u):window,e){case"focusin":(xc(A)||A.contentEditable==="true")&&(lr=A,Wl=u,lo=null);break;case"focusout":lo=Wl=lr=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Cc(d,n,f);break;case"selectionchange":if(qm)break;case"keydown":case"keyup":Cc(d,n,f)}var L;if(eu)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ar?Xf(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Yf&&n.locale!=="ko"&&(ar||_!=="onCompositionStart"?_==="onCompositionEnd"&&ar&&(L=Gf()):(un=f,Zs="value"in un?un.value:un.textContent,ar=!0)),A=Oi(u,_),0<A.length&&(_=new gc(_,e,null,n,f),d.push({event:_,listeners:A}),L?_.data=L:(L=Zf(n),L!==null&&(_.data=L)))),(L=Bm?Um(e,n):Hm(e,n))&&(u=Oi(u,"onBeforeInput"),0<u.length&&(f=new gc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=L))}up(d,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=vo(e,n),i!=null&&r.unshift(Co(e,i,o)),i=vo(e,t),i!=null&&r.push(Co(e,i,o))),e=e.return}return r}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=vo(n,i),s!=null&&a.unshift(Co(n,s,l))):o||(s=vo(n,i),s!=null&&a.push(Co(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var r0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function Rc(e){return(typeof e=="string"?e:""+e).replace(r0,`
`).replace(o0,"")}function qo(e,t,n){if(t=Rc(t),Rc(e)!==t&&n)throw Error(z(425))}function Ii(){}var Kl=null,Gl=null;function Yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,i0=typeof clearTimeout=="function"?clearTimeout:void 0,Pc=typeof Promise=="function"?Promise:void 0,a0=typeof queueMicrotask=="function"?queueMicrotask:typeof Pc<"u"?function(e){return Pc.resolve(null).then(e).catch(l0)}:Xl;function l0(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),wo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);wo(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),zt="__reactFiber$"+Mr,$o="__reactProps$"+Mr,Jt="__reactContainer$"+Mr,Zl="__reactEvents$"+Mr,s0="__reactListeners$"+Mr,u0="__reactHandles$"+Mr;function Tn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lc(e);e!==null;){if(n=e[zt])return n;e=Lc(e)}return t}e=n,n=e.parentNode}return null}function Fo(e){return e=e[zt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function pa(e){return e[$o]||null}var Jl=[],cr=-1;function $n(e){return{current:e}}function $e(e){0>cr||(e.current=Jl[cr],Jl[cr]=null,cr--)}function be(e,t){cr++,Jl[cr]=e.current,e.current=t}var Sn={},Ze=$n(Sn),at=$n(!1),jn=Sn;function Er(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function lt(e){return e=e.childContextTypes,e!=null}function zi(){$e(at),$e(Ze)}function Tc(e,t,n){if(Ze.current!==Sn)throw Error(z(168));be(Ze,t),be(at,n)}function dp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,Kg(e)||"Unknown",o));return Le({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,jn=Ze.current,be(Ze,e),be(at,at.current),!0}function Nc(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=dp(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,$e(at),$e(Ze),be(Ze,e)):$e(at),be(at,n)}var Kt=null,ha=!1,al=!1;function fp(e){Kt===null?Kt=[e]:Kt.push(e)}function c0(e){ha=!0,fp(e)}function An(){if(!al&&Kt!==null){al=!0;var e=0,t=we;try{var n=Kt;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,ha=!1}catch(o){throw Kt!==null&&(Kt=Kt.slice(e+1)),_f(Ks,An),o}finally{we=t,al=!1}}return null}var dr=[],fr=0,Mi=null,Fi=0,mt=[],vt=0,Bn=null,Gt=1,Yt="";function Pn(e,t){dr[fr++]=Fi,dr[fr++]=Mi,Mi=e,Fi=t}function pp(e,t,n){mt[vt++]=Gt,mt[vt++]=Yt,mt[vt++]=Bn,Bn=e;var r=Gt;e=Yt;var o=32-Pt(r)-1;r&=~(1<<o),n+=1;var i=32-Pt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Gt=1<<32-Pt(t)+o|n<<o|r,Yt=i+e}else Gt=1<<i|n<<o|r,Yt=e}function nu(e){e.return!==null&&(Pn(e,1),pp(e,1,0))}function ru(e){for(;e===Mi;)Mi=dr[--fr],dr[fr]=null,Fi=dr[--fr],dr[fr]=null;for(;e===Bn;)Bn=mt[--vt],mt[vt]=null,Yt=mt[--vt],mt[vt]=null,Gt=mt[--vt],mt[vt]=null}var dt=null,ct=null,Ae=!1,At=null;function hp(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Dc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ct=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Gt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ct=null,!0):!1;default:return!1}}function ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function es(e){if(Ae){var t=ct;if(t){var n=t;if(!Dc(e,t)){if(ql(e))throw Error(z(418));t=hn(n.nextSibling);var r=dt;t&&Dc(e,t)?hp(r,n):(e.flags=e.flags&-4097|2,Ae=!1,dt=e)}}else{if(ql(e))throw Error(z(418));e.flags=e.flags&-4097|2,Ae=!1,dt=e}}}function Oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function ei(e){if(e!==dt)return!1;if(!Ae)return Oc(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yl(e.type,e.memoizedProps)),t&&(t=ct)){if(ql(e))throw gp(),Error(z(418));for(;t;)hp(e,t),t=hn(t.nextSibling)}if(Oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=dt?hn(e.stateNode.nextSibling):null;return!0}function gp(){for(var e=ct;e;)e=hn(e.nextSibling)}function Rr(){ct=dt=null,Ae=!1}function ou(e){At===null?At=[e]:At.push(e)}var d0=nn.ReactCurrentBatchConfig;function Ct(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ji=$n(null),Bi=null,pr=null,iu=null;function au(){iu=pr=Bi=null}function lu(e){var t=ji.current;$e(ji),e._currentValue=t}function ts(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function br(e,t){Bi=e,iu=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(iu!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(Bi===null)throw Error(z(308));pr=e,Bi.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var Nn=null;function su(e){Nn===null?Nn=[e]:Nn.push(e)}function mp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,su(t)):(n.next=o.next,o.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qt(e,n)}return o=r.interleaved,o===null?(t.next=t,su(r)):(t.next=o.next,o.next=t),r.interleaved=t,qt(e,n)}function yi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gs(e,n)}}function Ic(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var o=e.updateQueue;an=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,f=u=s=null,l=i;do{var c=l.lane,v=l.eventTime;if((r&c)===c){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,x=l;switch(c=t,v=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){d=m.call(v,d,c);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,c=typeof m=="function"?m.call(v,d,c):m,c==null)break e;d=Le({},d,c);break e;case 2:an=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,c=o.effects,c===null?o.effects=[l]:c.push(l))}else v={eventTime:v,lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,s=d):f=f.next=v,a|=c;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;c=l,l=c.next,c.next=null,o.lastBaseUpdate=c,o.shared.pending=null}}while(1);if(f===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Hn|=a,e.lanes=a,e.memoizedState=d}}function zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var yp=new mf.Component().refs;function ns(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ga={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=vn(e),i=Xt(r,o);i.payload=t,n!=null&&(i.callback=n),t=gn(e,i,o),t!==null&&(Lt(t,e,o,r),yi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=vn(e),i=Xt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gn(e,i,o),t!==null&&(Lt(t,e,o,r),yi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=vn(e),o=Xt(n,r);o.tag=2,t!=null&&(o.callback=t),t=gn(e,o,r),t!==null&&(Lt(t,e,r,n),yi(t,e,r))}};function _c(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ko(n,r)||!ko(o,i):!0}function xp(e,t,n){var r=!1,o=Sn,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(o=lt(t)?jn:Ze.current,r=t.contextTypes,i=(r=r!=null)?Er(e,o):Sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function rs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=yp,uu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=wt(i):(i=lt(t)?jn:Ze.current,o.context=Er(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ns(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ga.enqueueReplaceState(o,o.state,null),Ui(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===yp&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function ti(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fc(e){var t=e._init;return t(e._payload)}function wp(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=yn(h,p),h.index=0,h.sibling=null,h}function i(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,y){return p===null||p.tag!==6?(p=pl(g,h.mode,y),p.return=h,p):(p=o(p,g),p.return=h,p)}function s(h,p,g,y){var C=g.type;return C===ir?f(h,p,g.props.children,y,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===on&&Fc(C)===p.type)?(y=o(p,g.props),y.ref=Qr(h,p,g),y.return=h,y):(y=Ci(g.type,g.key,g.props,null,h.mode,y),y.ref=Qr(h,p,g),y.return=h,y)}function u(h,p,g,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=hl(g,h.mode,y),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function f(h,p,g,y,C){return p===null||p.tag!==7?(p=_n(g,h.mode,y,C),p.return=h,p):(p=o(p,g),p.return=h,p)}function d(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=pl(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vo:return g=Ci(p.type,p.key,p.props,null,h.mode,g),g.ref=Qr(h,null,p),g.return=h,g;case or:return p=hl(p,h.mode,g),p.return=h,p;case on:var y=p._init;return d(h,y(p._payload),g)}if(qr(p)||Br(p))return p=_n(p,h.mode,g,null),p.return=h,p;ti(h,p)}return null}function c(h,p,g,y){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(h,p,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vo:return g.key===C?s(h,p,g,y):null;case or:return g.key===C?u(h,p,g,y):null;case on:return C=g._init,c(h,p,C(g._payload),y)}if(qr(g)||Br(g))return C!==null?null:f(h,p,g,y,null);ti(h,g)}return null}function v(h,p,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(g)||null,l(p,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vo:return h=h.get(y.key===null?g:y.key)||null,s(p,h,y,C);case or:return h=h.get(y.key===null?g:y.key)||null,u(p,h,y,C);case on:var A=y._init;return v(h,p,g,A(y._payload),C)}if(qr(y)||Br(y))return h=h.get(g)||null,f(p,h,y,C,null);ti(p,y)}return null}function m(h,p,g,y){for(var C=null,A=null,L=p,_=p=0,X=null;L!==null&&_<g.length;_++){L.index>_?(X=L,L=null):X=L.sibling;var U=c(h,L,g[_],y);if(U===null){L===null&&(L=X);break}e&&L&&U.alternate===null&&t(h,L),p=i(U,p,_),A===null?C=U:A.sibling=U,A=U,L=X}if(_===g.length)return n(h,L),Ae&&Pn(h,_),C;if(L===null){for(;_<g.length;_++)L=d(h,g[_],y),L!==null&&(p=i(L,p,_),A===null?C=L:A.sibling=L,A=L);return Ae&&Pn(h,_),C}for(L=r(h,L);_<g.length;_++)X=v(L,h,_,g[_],y),X!==null&&(e&&X.alternate!==null&&L.delete(X.key===null?_:X.key),p=i(X,p,_),A===null?C=X:A.sibling=X,A=X);return e&&L.forEach(function(ce){return t(h,ce)}),Ae&&Pn(h,_),C}function x(h,p,g,y){var C=Br(g);if(typeof C!="function")throw Error(z(150));if(g=C.call(g),g==null)throw Error(z(151));for(var A=C=null,L=p,_=p=0,X=null,U=g.next();L!==null&&!U.done;_++,U=g.next()){L.index>_?(X=L,L=null):X=L.sibling;var ce=c(h,L,U.value,y);if(ce===null){L===null&&(L=X);break}e&&L&&ce.alternate===null&&t(h,L),p=i(ce,p,_),A===null?C=ce:A.sibling=ce,A=ce,L=X}if(U.done)return n(h,L),Ae&&Pn(h,_),C;if(L===null){for(;!U.done;_++,U=g.next())U=d(h,U.value,y),U!==null&&(p=i(U,p,_),A===null?C=U:A.sibling=U,A=U);return Ae&&Pn(h,_),C}for(L=r(h,L);!U.done;_++,U=g.next())U=v(L,h,_,U.value,y),U!==null&&(e&&U.alternate!==null&&L.delete(U.key===null?_:U.key),p=i(U,p,_),A===null?C=U:A.sibling=U,A=U);return e&&L.forEach(function(oe){return t(h,oe)}),Ae&&Pn(h,_),C}function k(h,p,g,y){if(typeof g=="object"&&g!==null&&g.type===ir&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Vo:e:{for(var C=g.key,A=p;A!==null;){if(A.key===C){if(C=g.type,C===ir){if(A.tag===7){n(h,A.sibling),p=o(A,g.props.children),p.return=h,h=p;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===on&&Fc(C)===A.type){n(h,A.sibling),p=o(A,g.props),p.ref=Qr(h,A,g),p.return=h,h=p;break e}n(h,A);break}else t(h,A);A=A.sibling}g.type===ir?(p=_n(g.props.children,h.mode,y,g.key),p.return=h,h=p):(y=Ci(g.type,g.key,g.props,null,h.mode,y),y.ref=Qr(h,p,g),y.return=h,h=y)}return a(h);case or:e:{for(A=g.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=hl(g,h.mode,y),p.return=h,h=p}return a(h);case on:return A=g._init,k(h,p,A(g._payload),y)}if(qr(g))return m(h,p,g,y);if(Br(g))return x(h,p,g,y);ti(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,g),p.return=h,h=p):(n(h,p),p=pl(g,h.mode,y),p.return=h,h=p),a(h)):n(h,p)}return k}var Pr=wp(!0),Sp=wp(!1),jo={},Ft=$n(jo),Ao=$n(jo),Eo=$n(jo);function Dn(e){if(e===jo)throw Error(z(174));return e}function cu(e,t){switch(be(Eo,t),be(Ao,e),be(Ft,jo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Il(t,e)}$e(Ft),be(Ft,t)}function Lr(){$e(Ft),$e(Ao),$e(Eo)}function kp(e){Dn(Eo.current);var t=Dn(Ft.current),n=Il(t,e.type);t!==n&&(be(Ao,e),be(Ft,n))}function du(e){Ao.current===e&&($e(Ft),$e(Ao))}var Re=$n(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function fu(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var xi=nn.ReactCurrentDispatcher,sl=nn.ReactCurrentBatchConfig,Un=0,Pe=null,ze=null,Me=null,Vi=!1,so=!1,Ro=0,f0=0;function Ge(){throw Error(z(321))}function pu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function hu(e,t,n,r,o,i){if(Un=i,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?m0:v0,e=n(r,o),so){i=0;do{if(so=!1,Ro=0,25<=i)throw Error(z(301));i+=1,Me=ze=null,t.updateQueue=null,xi.current=y0,e=n(r,o)}while(so)}if(xi.current=Wi,t=ze!==null&&ze.next!==null,Un=0,Me=ze=Pe=null,Vi=!1,t)throw Error(z(300));return e}function gu(){var e=Ro!==0;return Ro=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Pe.memoizedState=Me=e:Me=Me.next=e,Me}function St(){if(ze===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Me===null?Pe.memoizedState:Me.next;if(t!==null)Me=t,ze=e;else{if(e===null)throw Error(z(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Me===null?Pe.memoizedState=Me=e:Me=Me.next=e}return Me}function Po(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=St(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=ze,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var f=u.lane;if((Un&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Pe.lanes|=f,Hn|=f}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Tt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Pe.lanes|=i,Hn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=St(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Tt(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function bp(){}function Cp(e,t){var n=Pe,r=St(),o=t(),i=!Tt(r.memoizedState,o);if(i&&(r.memoizedState=o,it=!0),r=r.queue,mu(Ep.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Lo(9,Ap.bind(null,n,r,o,t),void 0,null),Fe===null)throw Error(z(349));(Un&30)!==0||$p(n,t,o)}return o}function $p(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ap(e,t,n,r){t.value=n,t.getSnapshot=r,Rp(t)&&Pp(e)}function Ep(e,t,n){return n(function(){Rp(t)&&Pp(e)})}function Rp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Pp(e){var t=qt(e,1);t!==null&&Lt(t,e,1,-1)}function jc(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t.queue=e,e=e.dispatch=g0.bind(null,Pe,e),[t.memoizedState,e]}function Lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lp(){return St().memoizedState}function wi(e,t,n,r){var o=It();Pe.flags|=e,o.memoizedState=Lo(1|t,n,void 0,r===void 0?null:r)}function ma(e,t,n,r){var o=St();r=r===void 0?null:r;var i=void 0;if(ze!==null){var a=ze.memoizedState;if(i=a.destroy,r!==null&&pu(r,a.deps)){o.memoizedState=Lo(t,n,i,r);return}}Pe.flags|=e,o.memoizedState=Lo(1|t,n,i,r)}function Bc(e,t){return wi(8390656,8,e,t)}function mu(e,t){return ma(2048,8,e,t)}function Tp(e,t){return ma(4,2,e,t)}function Np(e,t){return ma(4,4,e,t)}function Dp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Op(e,t,n){return n=n!=null?n.concat([e]):null,ma(4,4,Dp.bind(null,t,e),n)}function vu(){}function Ip(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zp(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _p(e,t,n){return(Un&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n):(Tt(n,t)||(n=jf(),Pe.lanes|=n,Hn|=n,e.baseState=!0),t)}function p0(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{we=n,sl.transition=r}}function Mp(){return St().memoizedState}function h0(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fp(e))jp(t,n);else if(n=mp(e,t,n,r),n!==null){var o=et();Lt(n,e,r,o),Bp(n,t,r)}}function g0(e,t,n){var r=vn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fp(e))jp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Tt(l,a)){var s=t.interleaved;s===null?(o.next=o,su(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=mp(e,t,o,r),n!==null&&(o=et(),Lt(n,e,r,o),Bp(n,t,r))}}function Fp(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function jp(e,t){so=Vi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bp(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gs(e,n)}}var Wi={readContext:wt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},m0={readContext:wt,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Bc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wi(4194308,4,Dp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return wi(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=h0.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:jc,useDebugValue:vu,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=jc(!1),t=e[0];return e=p0.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,o=It();if(Ae){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Fe===null)throw Error(z(349));(Un&30)!==0||$p(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Bc(Ep.bind(null,r,i,e),[e]),r.flags|=2048,Lo(9,Ap.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=It(),t=Fe.identifierPrefix;if(Ae){var n=Yt,r=Gt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ro++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=f0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v0={readContext:wt,useCallback:Ip,useContext:wt,useEffect:mu,useImperativeHandle:Op,useInsertionEffect:Tp,useLayoutEffect:Np,useMemo:zp,useReducer:ul,useRef:Lp,useState:function(){return ul(Po)},useDebugValue:vu,useDeferredValue:function(e){var t=St();return _p(t,ze.memoizedState,e)},useTransition:function(){var e=ul(Po)[0],t=St().memoizedState;return[e,t]},useMutableSource:bp,useSyncExternalStore:Cp,useId:Mp,unstable_isNewReconciler:!1},y0={readContext:wt,useCallback:Ip,useContext:wt,useEffect:mu,useImperativeHandle:Op,useInsertionEffect:Tp,useLayoutEffect:Np,useMemo:zp,useReducer:cl,useRef:Lp,useState:function(){return cl(Po)},useDebugValue:vu,useDeferredValue:function(e){var t=St();return ze===null?t.memoizedState=e:_p(t,ze.memoizedState,e)},useTransition:function(){var e=cl(Po)[0],t=St().memoizedState;return[e,t]},useMutableSource:bp,useSyncExternalStore:Cp,useId:Mp,unstable_isNewReconciler:!1};function Tr(e,t){try{var n="",r=t;do n+=Qg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function os(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var x0=typeof WeakMap=="function"?WeakMap:Map;function Up(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ki||(Ki=!0,hs=r),os(e,t)},n}function Hp(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){os(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){os(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new x0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=D0.bind(null,e,t,n),t.then(e,e))}function Hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var w0=nn.ReactCurrentOwner,it=!1;function qe(e,t,n,r){t.child=e===null?Sp(t,null,n,r):Pr(t,e.child,n,r)}function Wc(e,t,n,r,o){n=n.render;var i=t.ref;return br(t,o),r=hu(e,t,n,r,i,o),n=gu(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):(Ae&&n&&nu(t),t.flags|=1,qe(e,t,r,o),t.child)}function Qc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!$u(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Vp(e,t,i,r,o)):(e=Ci(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(a,r)&&e.ref===t.ref)return en(e,t,o)}return t.flags|=1,e=yn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Vp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ko(i,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,en(e,t,o)}return is(e,t,n,r,o)}function Wp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(gr,ut),ut|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(gr,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,be(gr,ut),ut|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,be(gr,ut),ut|=r;return qe(e,t,o,n),t.child}function Qp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function is(e,t,n,r,o){var i=lt(n)?jn:Ze.current;return i=Er(t,i),br(t,o),n=hu(e,t,n,r,i,o),r=gu(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):(Ae&&r&&nu(t),t.flags|=1,qe(e,t,n,o),t.child)}function Kc(e,t,n,r,o){if(lt(n)){var i=!0;_i(t)}else i=!1;if(br(t,o),t.stateNode===null)Si(e,t),xp(t,n,r),rs(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=lt(n)?jn:Ze.current,u=Er(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Mc(t,a,r,u),an=!1;var c=t.memoizedState;a.state=c,Ui(t,r,a,o),s=t.memoizedState,l!==r||c!==s||at.current||an?(typeof f=="function"&&(ns(t,n,f,r),s=t.memoizedState),(l=an||_c(t,n,l,r,c,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ct(t.type,l),a.props=u,d=t.pendingProps,c=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=wt(s):(s=lt(n)?jn:Ze.current,s=Er(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||c!==s)&&Mc(t,a,r,s),an=!1,c=t.memoizedState,a.state=c,Ui(t,r,a,o);var m=t.memoizedState;l!==d||c!==m||at.current||an?(typeof v=="function"&&(ns(t,n,v,r),m=t.memoizedState),(u=an||_c(t,n,u,r,c,m,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return as(e,t,n,r,i,o)}function as(e,t,n,r,o,i){Qp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Nc(t,n,!1),en(e,t,i);r=t.stateNode,w0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Pr(t,e.child,null,i),t.child=Pr(t,null,l,i)):qe(e,t,l,i),t.memoizedState=r.state,o&&Nc(t,n,!0),t.child}function Kp(e){var t=e.stateNode;t.pendingContext?Tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tc(e,t.context,!1),cu(e,t.containerInfo)}function Gc(e,t,n,r,o){return Rr(),ou(o),t.flags|=256,qe(e,t,n,r),t.child}var ls={dehydrated:null,treeContext:null,retryLane:0};function ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gp(e,t,n){var r=t.pendingProps,o=Re.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),be(Re,o&1),e===null)return es(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=xa(a,r,0,null),e=_n(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ss(n),t.memoizedState=ls,e):yu(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return S0(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=yn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=yn(l,i):(i=_n(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?ss(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ls,r}return i=e.child,e=i.sibling,r=yn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yu(e,t){return t=xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ni(e,t,n,r){return r!==null&&ou(r),Pr(t,e.child,null,n),e=yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function S0(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=dl(Error(z(422))),ni(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=xa({mode:"visible",children:r.children},o,0,null),i=_n(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Pr(t,e.child,null,a),t.child.memoizedState=ss(a),t.memoizedState=ls,i);if((t.mode&1)===0)return ni(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=dl(i,r,void 0),ni(e,t,a,r)}if(l=(a&e.childLanes)!==0,it||l){if(r=Fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qt(e,o),Lt(r,e,o,-1))}return Cu(),r=dl(Error(z(421))),ni(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=O0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ct=hn(o.nextSibling),dt=t,Ae=!0,At=null,e!==null&&(mt[vt++]=Gt,mt[vt++]=Yt,mt[vt++]=Bn,Gt=e.id,Yt=e.overflow,Bn=t),t=yu(t,r.children),t.flags|=4096,t)}function Yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ts(e.return,t,n)}function fl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Yp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(qe(e,t,r.children,n),r=Re.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Re,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Hi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fl(t,!0,n,null,i);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Si(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function k0(e,t,n){switch(t.tag){case 3:Kp(t),Rr();break;case 5:kp(t);break;case 1:lt(t.type)&&_i(t);break;case 4:cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;be(ji,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Re,Re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gp(e,t,n):(be(Re,Re.current&1),e=en(e,t,n),e!==null?e.sibling:null);be(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Yp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),be(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,Wp(e,t,n)}return en(e,t,n)}var Xp,us,Zp,Jp;Xp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};us=function(){};Zp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dn(Ft.current);var i=null;switch(n){case"input":o=Tl(e,o),r=Tl(e,r),i=[];break;case"select":o=Le({},o,{value:void 0}),r=Le({},r,{value:void 0}),i=[];break;case"textarea":o=Ol(e,o),r=Ol(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ii)}zl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(go.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(go.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Ce("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Jp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kr(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function b0(e,t,n){var r=t.pendingProps;switch(ru(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return lt(t.type)&&zi(),Ye(t),null;case 3:return r=t.stateNode,Lr(),$e(at),$e(Ze),fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&(vs(At),At=null))),us(e,t),Ye(t),null;case 5:du(t);var o=Dn(Eo.current);if(n=t.type,e!==null&&t.stateNode!=null)Zp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ye(t),null}if(e=Dn(Ft.current),ei(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[zt]=t,r[$o]=i,e=(t.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(o=0;o<to.length;o++)Ce(to[o],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":oc(r,i),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ce("invalid",r);break;case"textarea":ac(r,i),Ce("invalid",r)}zl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&qo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&qo(r.textContent,l,e),o=["children",""+l]):go.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Wo(r),ic(r,i,!0);break;case"textarea":Wo(r),lc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ii)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$f(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[$o]=r,Xp(e,t,!1,!1),t.stateNode=e;e:{switch(a=_l(n,r),n){case"dialog":Ce("cancel",e),Ce("close",e),o=r;break;case"iframe":case"object":case"embed":Ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<to.length;o++)Ce(to[o],e);o=r;break;case"source":Ce("error",e),o=r;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),o=r;break;case"details":Ce("toggle",e),o=r;break;case"input":oc(e,r),o=Tl(e,r),Ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Le({},r,{value:void 0}),Ce("invalid",e);break;case"textarea":ac(e,r),o=Ol(e,r),Ce("invalid",e);break;default:o=r}zl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Rf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Af(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&mo(e,s):typeof s=="number"&&mo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(go.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Ce("scroll",e):s!=null&&Us(e,i,s,a))}switch(n){case"input":Wo(e),ic(e,r,!1);break;case"textarea":Wo(e),lc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xr(e,!!r.multiple,i,!1):r.defaultValue!=null&&xr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ii)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)Jp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=Dn(Eo.current),Dn(Ft.current),ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(i=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:qo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Ye(t),null;case 13:if($e(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)gp(),Rr(),t.flags|=98560,i=!1;else if(i=ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[zt]=t}else Rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),i=!1}else At!==null&&(vs(At),At=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Re.current&1)!==0?_e===0&&(_e=3):Cu())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Lr(),us(e,t),e===null&&bo(t.stateNode.containerInfo),Ye(t),null;case 10:return lu(t.type._context),Ye(t),null;case 17:return lt(t.type)&&zi(),Ye(t),null;case 19:if($e(Re),i=t.memoizedState,i===null)return Ye(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Kr(i,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Hi(e),a!==null){for(t.flags|=128,Kr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Re,Re.current&1|2),t.child}e=e.sibling}i.tail!==null&&De()>Nr&&(t.flags|=128,r=!0,Kr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Hi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Ae)return Ye(t),null}else 2*De()-i.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,Kr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=De(),t.sibling=null,n=Re.current,be(Re,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return bu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ut&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function C0(e,t){switch(ru(t),t.tag){case 1:return lt(t.type)&&zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),$e(at),$e(Ze),fu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return du(t),null;case 13:if($e(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Re),null;case 4:return Lr(),null;case 10:return lu(t.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var ri=!1,Xe=!1,$0=typeof WeakSet=="function"?WeakSet:Set,K=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function cs(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Xc=!1;function A0(e,t){if(Kl=Ni,e=np(),tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,d=e,c=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)c=d,d=v;for(;;){if(d===e)break t;if(c===n&&++u===o&&(l=a),c===i&&++f===r&&(s=a),(v=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},Ni=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,k=m.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ct(t.type,x),k);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(y){Te(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return m=Xc,Xc=!1,m}function uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&cs(t,n,i)}o=o.next}while(o!==r)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ds(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qp(e){var t=e.alternate;t!==null&&(e.alternate=null,qp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[$o],delete t[Zl],delete t[s0],delete t[u0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function eh(e){return e.tag===5||e.tag===3||e.tag===4}function Zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ii));else if(r!==4&&(e=e.child,e!==null))for(fs(e,t,n),e=e.sibling;e!==null;)fs(e,t,n),e=e.sibling}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}var Be=null,$t=!1;function rn(e,t,n){for(n=n.child;n!==null;)th(e,t,n),n=n.sibling}function th(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(ua,n)}catch{}switch(n.tag){case 5:Xe||hr(n,t);case 6:var r=Be,o=$t;Be=null,rn(e,t,n),Be=r,$t=o,Be!==null&&($t?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&($t?(e=Be,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),wo(e)):il(Be,n.stateNode));break;case 4:r=Be,o=$t,Be=n.stateNode.containerInfo,$t=!0,rn(e,t,n),Be=r,$t=o;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&cs(n,t,a),o=o.next}while(o!==r)}rn(e,t,n);break;case 1:if(!Xe&&(hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,rn(e,t,n),Xe=r):rn(e,t,n);break;default:rn(e,t,n)}}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $0),t.forEach(function(r){var o=I0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,$t=!1;break e;case 3:Be=l.stateNode.containerInfo,$t=!0;break e;case 4:Be=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(Be===null)throw Error(z(160));th(i,a,o),Be=null,$t=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nh(t,e),t=t.sibling}function nh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Ot(e),r&4){try{uo(3,e,e.return),va(3,e)}catch(x){Te(e,e.return,x)}try{uo(5,e,e.return)}catch(x){Te(e,e.return,x)}}break;case 1:bt(t,e),Ot(e),r&512&&n!==null&&hr(n,n.return);break;case 5:if(bt(t,e),Ot(e),r&512&&n!==null&&hr(n,n.return),e.flags&32){var o=e.stateNode;try{mo(o,"")}catch(x){Te(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&bf(o,i),_l(l,a);var u=_l(l,i);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?Rf(o,d):f==="dangerouslySetInnerHTML"?Af(o,d):f==="children"?mo(o,d):Us(o,f,d,u)}switch(l){case"input":Nl(o,i);break;case"textarea":Cf(o,i);break;case"select":var c=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?xr(o,!!i.multiple,v,!1):c!==!!i.multiple&&(i.defaultValue!=null?xr(o,!!i.multiple,i.defaultValue,!0):xr(o,!!i.multiple,i.multiple?[]:"",!1))}o[$o]=i}catch(x){Te(e,e.return,x)}}break;case 6:if(bt(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){Te(e,e.return,x)}}break;case 3:if(bt(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(t.containerInfo)}catch(x){Te(e,e.return,x)}break;case 4:bt(t,e),Ot(e);break;case 13:bt(t,e),Ot(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Su=De())),r&4&&Jc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||f,bt(t,e),Xe=u):bt(t,e),Ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&(e.mode&1)!==0)for(K=e,f=e.child;f!==null;){for(d=K=f;K!==null;){switch(c=K,v=c.child,c.tag){case 0:case 11:case 14:case 15:uo(4,c,c.return);break;case 1:hr(c,c.return);var m=c.stateNode;if(typeof m.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(x){Te(r,n,x)}}break;case 5:hr(c,c.return);break;case 22:if(c.memoizedState!==null){ed(d);continue}}v!==null?(v.return=c,K=v):ed(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ef("display",a))}catch(x){Te(e,e.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){Te(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bt(t,e),Ot(e),r&4&&Jc(e);break;case 21:break;default:bt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(eh(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(mo(o,""),r.flags&=-33);var i=Zc(e);ps(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Zc(e);fs(e,l,a);break;default:throw Error(z(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function E0(e,t,n){K=e,rh(e)}function rh(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var o=K,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ri;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Xe;l=ri;var u=Xe;if(ri=a,(Xe=s)&&!u)for(K=o;K!==null;)a=K,s=a.child,a.tag===22&&a.memoizedState!==null?td(o):s!==null?(s.return=a,K=s):td(o);for(;i!==null;)K=i,rh(i),i=i.sibling;K=o,ri=l,Xe=u}qc(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,K=i):qc(e)}}function qc(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&zc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&wo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Xe||t.flags&512&&ds(t)}catch(c){Te(t,t.return,c)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function ed(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function td(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{va(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Te(t,o,s)}}var i=t.return;try{ds(t)}catch(s){Te(t,i,s)}break;case 5:var a=t.return;try{ds(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var R0=Math.ceil,Qi=nn.ReactCurrentDispatcher,xu=nn.ReactCurrentOwner,xt=nn.ReactCurrentBatchConfig,me=0,Fe=null,Oe=null,He=0,ut=0,gr=$n(0),_e=0,To=null,Hn=0,ya=0,wu=0,co=null,ot=null,Su=0,Nr=1/0,Qt=null,Ki=!1,hs=null,mn=null,oi=!1,cn=null,Gi=0,fo=0,gs=null,ki=-1,bi=0;function et(){return(me&6)!==0?De():ki!==-1?ki:ki=De()}function vn(e){return(e.mode&1)===0?1:(me&2)!==0&&He!==0?He&-He:d0.transition!==null?(bi===0&&(bi=jf()),bi):(e=we,e!==0||(e=window.event,e=e===void 0?16:Kf(e.type)),e)}function Lt(e,t,n,r){if(50<fo)throw fo=0,gs=null,Error(z(185));_o(e,n,r),((me&2)===0||e!==Fe)&&(e===Fe&&((me&2)===0&&(ya|=n),_e===4&&sn(e,He)),st(e,r),n===1&&me===0&&(t.mode&1)===0&&(Nr=De()+500,ha&&An()))}function st(e,t){var n=e.callbackNode;dm(e,t);var r=Ti(e,e===Fe?He:0);if(r===0)n!==null&&cc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cc(n),t===1)e.tag===0?c0(nd.bind(null,e)):fp(nd.bind(null,e)),a0(function(){(me&6)===0&&An()}),n=null;else{switch(Bf(r)){case 1:n=Ks;break;case 4:n=Mf;break;case 16:n=Li;break;case 536870912:n=Ff;break;default:n=Li}n=dh(n,oh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oh(e,t){if(ki=-1,bi=0,(me&6)!==0)throw Error(z(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=Ti(e,e===Fe?He:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Yi(e,r);else{t=r;var o=me;me|=2;var i=ah();(Fe!==e||He!==t)&&(Qt=null,Nr=De()+500,zn(e,t));do try{T0();break}catch(l){ih(e,l)}while(1);au(),Qi.current=i,me=o,Oe!==null?t=0:(Fe=null,He=0,t=_e)}if(t!==0){if(t===2&&(o=Ul(e),o!==0&&(r=o,t=ms(e,o))),t===1)throw n=To,zn(e,0),sn(e,r),st(e,De()),n;if(t===6)sn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!P0(o)&&(t=Yi(e,r),t===2&&(i=Ul(e),i!==0&&(r=i,t=ms(e,i))),t===1))throw n=To,zn(e,0),sn(e,r),st(e,De()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Ln(e,ot,Qt);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=Su+500-De(),10<t)){if(Ti(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Xl(Ln.bind(null,e,ot,Qt),t);break}Ln(e,ot,Qt);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Pt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R0(r/1960))-r,10<r){e.timeoutHandle=Xl(Ln.bind(null,e,ot,Qt),r);break}Ln(e,ot,Qt);break;case 5:Ln(e,ot,Qt);break;default:throw Error(z(329))}}}return st(e,De()),e.callbackNode===n?oh.bind(null,e):null}function ms(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=Yi(e,t),e!==2&&(t=ot,ot=n,t!==null&&vs(t)),e}function vs(e){ot===null?ot=e:ot.push.apply(ot,e)}function P0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~wu,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function nd(e){if((me&6)!==0)throw Error(z(327));Cr();var t=Ti(e,0);if((t&1)===0)return st(e,De()),null;var n=Yi(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=ms(e,r))}if(n===1)throw n=To,zn(e,0),sn(e,t),st(e,De()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,ot,Qt),st(e,De()),null}function ku(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Nr=De()+500,ha&&An())}}function Vn(e){cn!==null&&cn.tag===0&&(me&6)===0&&Cr();var t=me;me|=1;var n=xt.transition,r=we;try{if(xt.transition=null,we=1,e)return e()}finally{we=r,xt.transition=n,me=t,(me&6)===0&&An()}}function bu(){ut=gr.current,$e(gr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,i0(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zi();break;case 3:Lr(),$e(at),$e(Ze),fu();break;case 5:du(r);break;case 4:Lr();break;case 13:$e(Re);break;case 19:$e(Re);break;case 10:lu(r.type._context);break;case 22:case 23:bu()}n=n.return}if(Fe=e,Oe=e=yn(e.current,null),He=ut=t,_e=0,To=null,wu=ya=Hn=0,ot=co=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Nn=null}return e}function ih(e,t){do{var n=Oe;try{if(au(),xi.current=Wi,Vi){for(var r=Pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Vi=!1}if(Un=0,Me=ze=Pe=null,so=!1,Ro=0,xu.current=null,n===null||n.return===null){_e=1,To=t,Oe=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=He,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if((f.mode&1)===0&&(d===0||d===11||d===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Hc(a);if(v!==null){v.flags&=-257,Vc(v,a,l,i,t),v.mode&1&&Uc(i,u,t),t=v,s=u;var m=t.updateQueue;if(m===null){var x=new Set;x.add(s),t.updateQueue=x}else m.add(s);break e}else{if((t&1)===0){Uc(i,u,t),Cu();break e}s=Error(z(426))}}else if(Ae&&l.mode&1){var k=Hc(a);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),Vc(k,a,l,i,t),ou(Tr(s,l));break e}}i=s=Tr(s,l),_e!==4&&(_e=2),co===null?co=[i]:co.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Up(i,s,t);Ic(i,h);break e;case 1:l=s;var p=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mn===null||!mn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Hp(i,l,t);Ic(i,y);break e}}i=i.return}while(i!==null)}sh(n)}catch(C){t=C,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function ah(){var e=Qi.current;return Qi.current=Wi,e===null?Wi:e}function Cu(){(_e===0||_e===3||_e===2)&&(_e=4),Fe===null||(Hn&268435455)===0&&(ya&268435455)===0||sn(Fe,He)}function Yi(e,t){var n=me;me|=2;var r=ah();(Fe!==e||He!==t)&&(Qt=null,zn(e,t));do try{L0();break}catch(o){ih(e,o)}while(1);if(au(),me=n,Qi.current=r,Oe!==null)throw Error(z(261));return Fe=null,He=0,_e}function L0(){for(;Oe!==null;)lh(Oe)}function T0(){for(;Oe!==null&&!nm();)lh(Oe)}function lh(e){var t=ch(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?sh(e):Oe=t,xu.current=null}function sh(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=b0(n,t,ut),n!==null){Oe=n;return}}else{if(n=C0(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);_e===0&&(_e=5)}function Ln(e,t,n){var r=we,o=xt.transition;try{xt.transition=null,we=1,N0(e,t,n,r)}finally{xt.transition=o,we=r}return null}function N0(e,t,n,r){do Cr();while(cn!==null);if((me&6)!==0)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(fm(e,i),e===Fe&&(Oe=Fe=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||oi||(oi=!0,dh(Li,function(){return Cr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=xt.transition,xt.transition=null;var a=we;we=1;var l=me;me|=4,xu.current=null,A0(e,n),nh(n,e),Jm(Gl),Ni=!!Kl,Gl=Kl=null,e.current=n,E0(n),rm(),me=l,we=a,xt.transition=i}else e.current=n;if(oi&&(oi=!1,cn=e,Gi=o),i=e.pendingLanes,i===0&&(mn=null),am(n.stateNode),st(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ki)throw Ki=!1,e=hs,hs=null,e;return(Gi&1)!==0&&e.tag!==0&&Cr(),i=e.pendingLanes,(i&1)!==0?e===gs?fo++:(fo=0,gs=e):fo=0,An(),null}function Cr(){if(cn!==null){var e=Bf(Gi),t=xt.transition,n=we;try{if(xt.transition=null,we=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,Gi=0,(me&6)!==0)throw Error(z(331));var o=me;for(me|=4,K=e.current;K!==null;){var i=K,a=i.child;if((K.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(K=u;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:uo(8,f,i)}var d=f.child;if(d!==null)d.return=f,K=d;else for(;K!==null;){f=K;var c=f.sibling,v=f.return;if(qp(f),f===u){K=null;break}if(c!==null){c.return=v,K=c;break}K=v}}}var m=i.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}K=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,K=a;else e:for(;K!==null;){if(i=K,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:uo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,K=h;break e}K=i.return}}var p=e.current;for(K=p;K!==null;){a=K;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,K=g;else e:for(a=p;K!==null;){if(l=K,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:va(9,l)}}catch(C){Te(l,l.return,C)}if(l===a){K=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,K=y;break e}K=l.return}}if(me=o,An(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(ua,e)}catch{}r=!0}return r}finally{we=n,xt.transition=t}}return!1}function rd(e,t,n){t=Tr(n,t),t=Up(e,t,1),e=gn(e,t,1),t=et(),e!==null&&(_o(e,1,t),st(e,t))}function Te(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=Tr(n,e),e=Hp(t,e,1),t=gn(t,e,1),e=et(),t!==null&&(_o(t,1,e),st(t,e));break}}t=t.return}}function D0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(He&n)===n&&(_e===4||_e===3&&(He&130023424)===He&&500>De()-Su?zn(e,0):wu|=n),st(e,t)}function uh(e,t){t===0&&((e.mode&1)===0?t=1:(t=Go,Go<<=1,(Go&130023424)===0&&(Go=4194304)));var n=et();e=qt(e,t),e!==null&&(_o(e,t,n),st(e,n))}function O0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uh(e,n)}function I0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),uh(e,n)}var ch;ch=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)it=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return it=!1,k0(e,t,n);it=(e.flags&131072)!==0}else it=!1,Ae&&(t.flags&1048576)!==0&&pp(t,Fi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Si(e,t),e=t.pendingProps;var o=Er(t,Ze.current);br(t,n),o=hu(null,t,r,e,o,n);var i=gu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(i=!0,_i(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,uu(t),o.updater=ga,t.stateNode=o,o._reactInternals=t,rs(t,r,e,n),t=as(null,t,r,!0,i,n)):(t.tag=0,Ae&&i&&nu(t),qe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Si(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=_0(r),e=Ct(r,e),o){case 0:t=is(null,t,r,e,n);break e;case 1:t=Kc(null,t,r,e,n);break e;case 11:t=Wc(null,t,r,e,n);break e;case 14:t=Qc(null,t,r,Ct(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),is(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),Kc(e,t,r,o,n);case 3:e:{if(Kp(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,vp(e,t),Ui(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Tr(Error(z(423)),t),t=Gc(e,t,r,n,o);break e}else if(r!==o){o=Tr(Error(z(424)),t),t=Gc(e,t,r,n,o);break e}else for(ct=hn(t.stateNode.containerInfo.firstChild),dt=t,Ae=!0,At=null,n=Sp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===o){t=en(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return kp(t),e===null&&es(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Yl(r,o)?a=null:i!==null&&Yl(r,i)&&(t.flags|=32),Qp(e,t),qe(e,t,a,n),t.child;case 6:return e===null&&es(t),null;case 13:return Gp(e,t,n);case 4:return cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),Wc(e,t,r,o,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,be(ji,r._currentValue),r._currentValue=a,i!==null)if(Tt(i.value,a)){if(i.children===o.children&&!at.current){t=en(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Xt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ts(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(z(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ts(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}qe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,br(t,n),o=wt(o),r=r(o),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,o=Ct(r,t.pendingProps),o=Ct(r.type,o),Qc(e,t,r,o,n);case 15:return Vp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),Si(e,t),t.tag=1,lt(r)?(e=!0,_i(t)):e=!1,br(t,n),xp(t,r,o),rs(t,r,o,n),as(null,t,r,!0,e,n);case 19:return Yp(e,t,n);case 22:return Wp(e,t,n)}throw Error(z(156,t.tag))};function dh(e,t){return _f(e,t)}function z0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new z0(e,t,n,r)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _0(e){if(typeof e=="function")return $u(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vs)return 11;if(e===Ws)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ci(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")$u(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ir:return _n(n.children,o,i,t);case Hs:a=8,o|=8;break;case El:return e=yt(12,n,t,o|2),e.elementType=El,e.lanes=i,e;case Rl:return e=yt(13,n,t,o),e.elementType=Rl,e.lanes=i,e;case Pl:return e=yt(19,n,t,o),e.elementType=Pl,e.lanes=i,e;case wf:return xa(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yf:a=10;break e;case xf:a=9;break e;case Vs:a=11;break e;case Ws:a=14;break e;case on:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=yt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function _n(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function xa(e,t,n,r){return e=yt(22,e,r,t),e.elementType=wf,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ga(0),this.expirationTimes=Ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Au(e,t,n,r,o,i,a,l,s){return e=new M0(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(i),e}function F0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fh(e){if(!e)return Sn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(lt(n))return dp(e,n,t)}return t}function ph(e,t,n,r,o,i,a,l,s){return e=Au(n,r,!0,e,o,i,a,l,s),e.context=fh(null),n=e.current,r=et(),o=vn(n),i=Xt(r,o),i.callback=t!=null?t:null,gn(n,i,o),e.current.lanes=o,_o(e,o,r),st(e,r),e}function wa(e,t,n,r){var o=t.current,i=et(),a=vn(o);return n=fh(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(o,t,a),e!==null&&(Lt(e,o,a,i),yi(e,o,a)),a}function Xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function od(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eu(e,t){od(e,t),(e=e.alternate)&&od(e,t)}function j0(){return null}var hh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}Sa.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));wa(e,t,null,null)};Sa.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){wa(null,e,null,null)}),t[Jt]=null}};function Sa(e){this._internalRoot=e}Sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&Qf(e)}};function Pu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function B0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Xi(a);i.call(u)}}var a=ph(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=a,e[Jt]=a.current,bo(e.nodeType===8?e.parentNode:e),Vn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Xi(s);l.call(u)}}var s=Au(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=s,e[Jt]=s.current,bo(e.nodeType===8?e.parentNode:e),Vn(function(){wa(t,s,n,r)}),s}function ba(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Xi(a);l.call(s)}}wa(t,a,e,o)}else a=B0(n,t,e,o,r);return Xi(a)}Uf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=eo(t.pendingLanes);n!==0&&(Gs(t,n|1),st(t,De()),(me&6)===0&&(Nr=De()+500,An()))}break;case 13:Vn(function(){var r=qt(e,1);if(r!==null){var o=et();Lt(r,e,1,o)}}),Eu(e,1)}};Ys=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=et();Lt(t,e,134217728,n)}Eu(e,134217728)}};Hf=function(e){if(e.tag===13){var t=vn(e),n=qt(e,t);if(n!==null){var r=et();Lt(n,e,t,r)}Eu(e,t)}};Vf=function(){return we};Wf=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Fl=function(e,t,n){switch(t){case"input":if(Nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=pa(r);if(!o)throw Error(z(90));kf(r),Nl(r,o)}}}break;case"textarea":Cf(e,n);break;case"select":t=n.value,t!=null&&xr(e,!!n.multiple,t,!1)}};Tf=ku;Nf=Vn;var U0={usingClientEntryPoint:!1,Events:[Fo,ur,pa,Pf,Lf,ku]},Gr={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},H0={bundleType:Gr.bundleType,version:Gr.version,rendererPackageName:Gr.rendererPackageName,rendererConfig:Gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:Gr.findFiberByHostInstance||j0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{ua=ii.inject(H0),Mt=ii}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pu(t))throw Error(z(200));return F0(e,t,null,n)};pt.createRoot=function(e,t){if(!Pu(e))throw Error(z(299));var n=!1,r="",o=hh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Au(e,1,!1,null,null,n,!1,r,o),e[Jt]=t.current,bo(e.nodeType===8?e.parentNode:e),new Ru(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return Vn(e)};pt.hydrate=function(e,t,n){if(!ka(t))throw Error(z(200));return ba(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!Pu(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=hh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ph(t,null,e,1,n!=null?n:null,o,!1,i,a),e[Jt]=t.current,bo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Sa(t)};pt.render=function(e,t,n){if(!ka(t))throw Error(z(200));return ba(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!ka(e))throw Error(z(40));return e._reactRootContainer?(Vn(function(){ba(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};pt.unstable_batchedUpdates=ku;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ka(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return ba(e,t,n,!1,r)};pt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=pt})(Fs);var ad=Fs.exports;$l.createRoot=ad.createRoot,$l.hydrateRoot=ad.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}var Ie;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ie||(Ie={}));const ld="popstate";function V0(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:l="",hash:s=""}=Bt(o.location.hash.substr(1));return Mn("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:tn(i))}function r(o,i){W0(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return K0(t,n,r,e)}function W0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q0(){return Math.random().toString(36).substr(2,8)}function sd(e){return{usr:e.state,key:e.key}}function Mn(e,t,n,r){return n===void 0&&(n=null),Ee({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bt(t):t,{state:n,key:t&&t.key||r||Q0()})}function tn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function No(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:tn(e);return new URL(n,t)}function K0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Ie.Pop,s=null;function u(){l=Ie.Pop,s&&s({action:l,location:c.location})}function f(v,m){l=Ie.Push;let x=Mn(c.location,v,m);n&&n(x,v);let k=sd(x),h=c.createHref(x);try{a.pushState(k,"",h)}catch{o.location.assign(h)}i&&s&&s({action:l,location:c.location})}function d(v,m){l=Ie.Replace;let x=Mn(c.location,v,m);n&&n(x,v);let k=sd(x),h=c.createHref(x);a.replaceState(k,"",h),i&&s&&s({action:l,location:c.location})}let c={get action(){return l},get location(){return e(o,a)},listen(v){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(ld,u),s=v,()=>{o.removeEventListener(ld,u),s=null}},createHref(v){return t(o,v)},encodeLocation(v){let m=No(tn(v));return Ee({},v,{pathname:m.pathname,search:m.search,hash:m.hash})},push:f,replace:d,go(v){return a.go(v)}};return c}var Ue;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ue||(Ue={}));function G0(e){return e.index===!0}function gh(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,o)=>{let i=[...t,o],a=typeof r.id=="string"?r.id:i.join("-");return he(r.index!==!0||!r.children,"Cannot specify children on an index route"),he(!n.has(a),'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),n.add(a),G0(r)?Ee({},r,{id:a}):Ee({},r,{id:a,children:r.children?gh(r.children,i,n):void 0})})}function no(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Bt(t):t,o=vh(r.pathname||"/",n);if(o==null)return null;let i=mh(e);Y0(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=ov(i[l],lv(o));return a}function mh(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let a={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(he(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let l=Fn([r,a.relativePath]),s=n.concat(a);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),mh(o.children,t,s,l)),!(o.path==null&&!o.index)&&t.push({path:l,score:nv(l,o.index),routesMeta:s})}),t}function Y0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:rv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const X0=/^:\w+$/,Z0=3,J0=2,q0=1,ev=10,tv=-2,ud=e=>e==="*";function nv(e,t){let n=e.split("/"),r=n.length;return n.some(ud)&&(r+=tv),t&&(r+=J0),n.filter(o=>!ud(o)).reduce((o,i)=>o+(X0.test(i)?Z0:i===""?q0:ev),r)}function rv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ov(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=iv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;i.push({params:r,pathname:Fn([o,f.pathname]),pathnameBase:fv(Fn([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=Fn([o,f.pathnameBase]))}return i}function iv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=av(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let c=l[d]||"";a=i.slice(0,i.length-c.length).replace(/(.)\/+$/,"$1")}return u[f]=sv(l[d]||"",f),u},{}),pathname:i,pathnameBase:a,pattern:e}}function av(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function lv(e){try{return decodeURI(e)}catch(t){return Lu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sv(e,t){try{return decodeURIComponent(e)}catch(n){return Lu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function vh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function uv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Bt(e):e;return{pathname:n?n.startsWith("/")?n:cv(n,t):t,search:pv(r),hash:hv(o)}}function cv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function gl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dv(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Bt(e):(o=Ee({},e),he(!o.pathname||!o.pathname.includes("?"),gl("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),gl("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),gl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let c=a.split("/");for(;c[0]==="..";)c.shift(),d-=1;o.pathname=c.join("/")}l=d>=0?t[d]:"/"}let s=uv(o,l),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Fn=e=>e.join("/").replace(/\/\/+/g,"/"),fv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class cd extends Error{}class gv{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,he(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((o,i)=>n=i),this.controller=new AbortController;let r=()=>n(new cd("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(t).reduce((o,i)=>{let[a,l]=i;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{})}trackPromise(t,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(t);let r=Promise.race([n,this.abortPromise]).then(o=>this.onSettle(r,t,null,o),o=>this.onSettle(r,t,o));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,o){if(this.controller.signal.aborted&&r instanceof cd)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const i=this.subscriber;return r?(Object.defineProperty(t,"_error",{get:()=>r}),i&&i(!1),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>o}),i&&i(!1),o)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let t=this.subscriber;t&&t(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(o=>{this.subscribe(i=>{t.removeEventListener("abort",r),(i||this.done)&&o(i)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return he(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,o]=n;return Object.assign(t,{[r]:vv(o)})},{})}}function mv(e){return e instanceof Promise&&e._tracked===!0}function vv(e){if(!mv(e))return e;if(e._error)throw e._error;return e._data}class Fr{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function xh(e){return e instanceof Fr}const ml={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},yv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wv=!xv;function Sv(e){he(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=gh(e.routes),n=null,r=new Set,o=null,i=null,a=null,l=!1,s=no(t,e.history.location,e.basename),u=null;if(s==null){let{matches:$,route:N,error:O}=gd(t);s=$,u={[N.id]:O}}let f=!s.some($=>$.route.loader)||e.hydrationData!=null,d,c={historyAction:e.history.action,location:e.history.location,matches:s,initialized:f,navigation:ml,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||u,fetchers:new Map},v=Ie.Pop,m=!1,x,k=!1,h=!1,p=[],g=[],y=new Map,C=0,A=-1,L=new Map,_=new Set,X=new Map,U=new Map;function ce(){return n=e.history.listen($=>{let{action:N,location:O}=$;return E(N,O)}),c.initialized||E(Ie.Pop,c.location),d}function oe(){n&&n(),r.clear(),x&&x.abort(),c.fetchers.forEach(($,N)=>P(N))}function se($){return r.add($),()=>r.delete($)}function ee($){c=Ee({},c,$),r.forEach(N=>N(c))}function ne($,N){var O;let J=c.actionData!=null&&c.navigation.formMethod!=null&&c.navigation.state==="loading"&&((O=c.navigation.formAction)==null?void 0:O.split("?")[0])===$.pathname,q=N.loaderData?{loaderData:yl(c.loaderData,N.loaderData,N.matches||[])}:{};ee(Ee({},J?{}:{actionData:null},N,q,{historyAction:v,location:$,initialized:!0,navigation:ml,revalidation:"idle",restoreScrollPosition:c.navigation.formData?!1:ae($,N.matches||c.matches),preventScrollReset:m})),k||v===Ie.Pop||(v===Ie.Push?e.history.push($,$.state):v===Ie.Replace&&e.history.replace($,$.state)),v=Ie.Pop,m=!1,k=!1,h=!1,p=[],g=[]}async function ke($,N){if(typeof $=="number"){e.history.go($);return}let{path:O,submission:J,error:q}=dd($,N),re=Mn(c.location,O,N&&N.state);re=e.history.encodeLocation(re);let j=(N&&N.replace)===!0||J!=null?Ie.Replace:Ie.Push,te=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0;return await E(j,re,{submission:J,pendingError:q,preventScrollReset:te,replace:N&&N.replace})}function le(){if(V(),ee({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){E(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}E(v||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function E($,N,O){x&&x.abort(),x=null,v=$,k=(O&&O.startUninterruptedRevalidation)===!0,ve(c.location,c.matches),m=(O&&O.preventScrollReset)===!0;let J=O&&O.overrideNavigation,q=no(t,N,e.basename);if(!q){let{matches:Qe,route:Zn,error:Ht}=gd(t);fe(),ne(N,{matches:Qe,loaderData:{},errors:{[Zn.id]:Ht}});return}if(Ev(c.location,N)){ne(N,{matches:q});return}x=new AbortController;let re=Xr(N,x.signal,O&&O.submission),j,te;if(O&&O.pendingError)te={[mr(q).route.id]:O.pendingError};else if(O&&O.submission){let Qe=await H(re,N,O.submission,q,{replace:O.replace});if(Qe.shortCircuited)return;j=Qe.pendingActionData,te=Qe.pendingActionError,J=Ee({state:"loading",location:N},O.submission)}let{shortCircuited:ye,loaderData:xe,errors:ge}=await Y(re,N,q,J,O&&O.submission,O&&O.replace,j,te);ye||(x=null,ne(N,{matches:q,loaderData:xe,errors:ge}))}async function H($,N,O,J,q){V();let re=Ee({state:"submitting",location:N},O);ee({navigation:re});let j,te=wd(J,N);if(!te.route.action)j=md(N);else if(j=await Yr("action",$,te,J,d.basename),$.signal.aborted)return{shortCircuited:!0};if($r(j)){let ye=Ee({state:"loading",location:Mn(c.location,j.location)},O);return await F(j,ye,q&&q.replace),{shortCircuited:!0}}if(po(j)){let ye=mr(J,te.route.id);return(q&&q.replace)!==!0&&(v=Ie.Push),{pendingActionError:{[ye.route.id]:j.error}}}if(On(j))throw new Error("defer() is not supported in actions");return{pendingActionData:{[te.route.id]:j.data}}}async function Y($,N,O,J,q,re,j,te){let ye=J;ye||(ye={state:"loading",location:N,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0});let[xe,ge]=fd(c,O,q,N,h,p,g,j,te,X);if(fe(Ke=>!(O&&O.some(rt=>rt.route.id===Ke))||xe&&xe.some(rt=>rt.route.id===Ke)),xe.length===0&&ge.length===0)return ne(N,{matches:O,loaderData:yl(c.loaderData,{},O),errors:te||null,actionData:j||null}),{shortCircuited:!0};k||(ge.forEach(Ke=>{let[rt]=Ke,qn=c.fetchers.get(rt),jr={state:"loading",data:qn&&qn.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(rt,jr)}),ee(Ee({navigation:ye,actionData:j||c.actionData||null},ge.length>0?{fetchers:new Map(c.fetchers)}:{}))),A=++C,ge.forEach(Ke=>{let[rt]=Ke;return y.set(rt,x)});let{results:Qe,loaderResults:Zn,fetcherResults:Ht}=await S(c.matches,O,xe,ge,$);if($.signal.aborted)return{shortCircuited:!0};ge.forEach(Ke=>{let[rt]=Ke;return y.delete(rt)});let En=vd(Qe);if(En){let Ke=vl(c,En);return await F(En,Ke,re),{shortCircuited:!0}}let{loaderData:Ua,errors:Uo}=hd(c,O,xe,Zn,te,ge,Ht,U);U.forEach((Ke,rt)=>{Ke.subscribe(qn=>{(qn||Ke.done)&&U.delete(rt)})}),Q();let Jn=ie(A);return Ee({loaderData:Ua,errors:Uo},Jn||ge.length>0?{fetchers:new Map(c.fetchers)}:{})}function ue($){return c.fetchers.get($)||yv}function M($,N,O,J){if(wv)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");y.has($)&&B($);let q=no(t,O,e.basename);if(!q){I($,N,new Fr(404,"Not Found",null));return}let{path:re,submission:j}=dd(O,J,!0),te=wd(q,re);if(j){R($,N,re,te,q,j);return}X.set($,[re,te,q]),T($,N,re,te,q)}async function R($,N,O,J,q,re){if(V(),X.delete($),!J.route.action){let{error:kt}=md(O);I($,N,kt);return}let j=c.fetchers.get($),te=Ee({state:"submitting"},re,{data:j&&j.data});c.fetchers.set($,te),ee({fetchers:new Map(c.fetchers)});let ye=new AbortController,xe=Xr(O,ye.signal,re);y.set($,ye);let ge=await Yr("action",xe,J,q,d.basename);if(xe.signal.aborted){y.get($)===ye&&y.delete($);return}if($r(ge)){y.delete($),_.add($);let kt=Ee({state:"loading"},re,{data:void 0});c.fetchers.set($,kt),ee({fetchers:new Map(c.fetchers)});let Vt=Ee({state:"loading",location:Mn(c.location,ge.location)},re);await F(ge,Vt);return}if(po(ge)){I($,N,ge.error);return}On(ge)&&he(!1,"defer() is not supported in actions");let Qe=c.navigation.location||c.location,Zn=Xr(Qe,ye.signal),Ht=c.navigation.state!=="idle"?no(t,c.navigation.location,e.basename):c.matches;he(Ht,"Didn't find any matches after fetcher action");let En=++C;L.set($,En);let Ua=Ee({state:"loading",data:ge.data},re);c.fetchers.set($,Ua);let[Uo,Jn]=fd(c,Ht,re,Qe,h,p,g,{[J.route.id]:ge.data},void 0,X);Jn.filter(kt=>{let[Vt]=kt;return Vt!==$}).forEach(kt=>{let[Vt]=kt,Zu=c.fetchers.get(Vt),Cg={state:"loading",data:Zu&&Zu.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(Vt,Cg),y.set(Vt,ye)}),ee({fetchers:new Map(c.fetchers)});let{results:Ke,loaderResults:rt,fetcherResults:qn}=await S(c.matches,Ht,Uo,Jn,Zn);if(ye.signal.aborted)return;L.delete($),y.delete($),Jn.forEach(kt=>{let[Vt]=kt;return y.delete(Vt)});let jr=vd(Ke);if(jr){let kt=vl(c,jr);await F(jr,kt);return}let{loaderData:Yu,errors:Xu}=hd(c,c.matches,Uo,rt,void 0,Jn,qn,U),kg={state:"idle",data:ge.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set($,kg);let bg=ie(En);c.navigation.state==="loading"&&En>A?(he(v,"Expected pending action"),x&&x.abort(),ne(c.navigation.location,{matches:Ht,loaderData:Yu,errors:Xu,fetchers:new Map(c.fetchers)})):(ee(Ee({errors:Xu,loaderData:yl(c.loaderData,Yu,Ht)},bg?{fetchers:new Map(c.fetchers)}:{})),h=!1)}async function T($,N,O,J,q){let re=c.fetchers.get($),j={state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,data:re&&re.data};c.fetchers.set($,j),ee({fetchers:new Map(c.fetchers)});let te=new AbortController,ye=Xr(O,te.signal);y.set($,te);let xe=await Yr("loader",ye,J,q,d.basename);if(On(xe)&&(xe=await bh(xe,ye.signal,!0)||xe),y.get($)===te&&y.delete($),ye.signal.aborted)return;if($r(xe)){let Qe=vl(c,xe);await F(xe,Qe);return}if(po(xe)){let Qe=mr(c.matches,N);c.fetchers.delete($),ee({fetchers:new Map(c.fetchers),errors:{[Qe.route.id]:xe.error}});return}he(!On(xe),"Unhandled fetcher deferred data");let ge={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set($,ge),ee({fetchers:new Map(c.fetchers)})}async function F($,N,O){$.revalidate&&(h=!0),he(N.location,"Expected a location on the redirect navigation"),x=null;let J=O===!0?Ie.Replace:Ie.Push;await E(J,N.location,{overrideNavigation:N})}async function S($,N,O,J,q){let re=await Promise.all([...O.map(ye=>Yr("loader",q,ye,N,d.basename)),...J.map(ye=>{let[,xe,ge,Qe]=ye;return Yr("loader",Xr(xe,q.signal),ge,Qe,d.basename)})]),j=re.slice(0,O.length),te=re.slice(O.length);return await Promise.all([yd($,O,j,q.signal,!1,c.loaderData),yd($,J.map(ye=>{let[,,xe]=ye;return xe}),te,q.signal,!0)]),{results:re,loaderResults:j,fetcherResults:te}}function V(){h=!0,p.push(...fe()),X.forEach(($,N)=>{y.has(N)&&(g.push(N),B(N))})}function I($,N,O){let J=mr(c.matches,N);P($),ee({errors:{[J.route.id]:O},fetchers:new Map(c.fetchers)})}function P($){y.has($)&&B($),X.delete($),L.delete($),_.delete($),c.fetchers.delete($)}function B($){let N=y.get($);he(N,"Expected fetch controller: "+$),N.abort(),y.delete($)}function G($){for(let N of $){let J={state:"idle",data:ue(N).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(N,J)}}function Q(){let $=[];for(let N of _){let O=c.fetchers.get(N);he(O,"Expected fetcher: "+N),O.state==="loading"&&(_.delete(N),$.push(N))}G($)}function ie($){let N=[];for(let[O,J]of L)if(J<$){let q=c.fetchers.get(O);he(q,"Expected fetcher: "+O),q.state==="loading"&&(B(O),L.delete(O),N.push(O))}return G(N),N.length>0}function fe($){let N=[];return U.forEach((O,J)=>{(!$||$(J))&&(O.cancel(),N.push(J),U.delete(J))}),N}function Z($,N,O){if(o=$,a=N,i=O||(J=>J.key),!l&&c.navigation===ml){l=!0;let J=ae(c.location,c.matches);J!=null&&ee({restoreScrollPosition:J})}return()=>{o=null,a=null,i=null}}function ve($,N){if(o&&i&&a){let O=N.map(q=>xd(q,c.loaderData)),J=i($,O)||$.key;o[J]=a()}}function ae($,N){if(o&&i&&a){let O=N.map(re=>xd(re,c.loaderData)),J=i($,O)||$.key,q=o[J];if(typeof q=="number")return q}return null}return d={get basename(){return e.basename},get state(){return c},get routes(){return t},initialize:ce,subscribe:se,enableScrollRestoration:Z,navigate:ke,fetch:M,revalidate:le,createHref:$=>e.history.createHref($),getFetcher:ue,deleteFetcher:P,dispose:oe,_internalFetchControllers:y,_internalActiveDeferreds:U},d}const kv=new Set(["POST","PUT","PATCH","DELETE"]);[...kv];function dd(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:tn(e);if(!t||!("formMethod"in t)&&!("formData"in t))return{path:r};if(t.formMethod!=null&&t.formMethod!=="get")return{path:r,submission:{formMethod:t.formMethod,formAction:kh(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData}};if(!t.formData)return{path:r};let o=Bt(r);try{let i=Sh(t.formData);n&&o.search&&Ch(o.search)&&i.append("index",""),o.search="?"+i}catch{return{path:r,error:new Fr(400,"Bad Request","Cannot submit binary form data using GET")}}return{path:tn(o)}}function vl(e,t){let{formMethod:n,formAction:r,formEncType:o,formData:i}=e.navigation;return{state:"loading",location:Mn(e.location,t.location),formMethod:n||void 0,formAction:r||void 0,formEncType:o||void 0,formData:i||void 0}}function bv(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function fd(e,t,n,r,o,i,a,l,s,u){let f=s?Object.values(s)[0]:l?Object.values(l)[0]:null,d=s?Object.keys(s)[0]:void 0,v=bv(t,d).filter((x,k)=>x.route.loader!=null&&(Cv(e.loaderData,e.matches[k],x)||i.some(h=>h===x.route.id)||pd(e.location,e.matches[k],n,r,x,o,f))),m=[];return u&&u.forEach((x,k)=>{let[h,p,g]=x;a.includes(k)?m.push([k,h,p,g]):o&&pd(h,p,n,h,p,o,f)&&m.push([k,h,p,g])}),[v,m]}function Cv(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function wh(e,t){let n=e.route.path;return e.pathname!==t.pathname||n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function pd(e,t,n,r,o,i,a){let l=No(e),s=t.params,u=No(r),f=o.params,d=wh(t,o)||l.toString()===u.toString()||l.search!==u.search||i;if(o.route.shouldRevalidate){let c=o.route.shouldRevalidate(Ee({currentUrl:l,currentParams:s,nextUrl:u,nextParams:f},n,{actionResult:a,defaultShouldRevalidate:d}));if(typeof c=="boolean")return c}return d}async function Yr(e,t,n,r,o,i,a){i===void 0&&(i=!1),a===void 0&&(a=!1);let l,s,u,f=new Promise((c,v)=>u=v),d=()=>u();t.signal.addEventListener("abort",d);try{let c=n.route[e];he(c,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),s=await Promise.race([c({request:t,params:n.params}),f])}catch(c){l=Ue.error,s=c}finally{t.signal.removeEventListener("abort",d)}if(s instanceof Response){let c=s.status;if(c>=300&&c<=399){let x=s.headers.get("Location");he(x,"Redirects returned/thrown from loaders/actions must have a Location header");let k=r.slice(0,r.indexOf(n)+1),h=yh(k).map(y=>y.pathnameBase),p=No(t.url).pathname,g=dv(x,h,p);if(he(tn(g),"Unable to resolve redirect location: "+s.headers.get("Location")),o){let y=g.pathname;g.pathname=y==="/"?o:Fn([o,y])}if(x=tn(g),i)throw s.headers.set("Location",x),s;return{type:Ue.redirect,status:c,location:x,revalidate:s.headers.get("X-Remix-Revalidate")!==null}}if(a)throw{type:l||Ue.data,response:s};let v,m=s.headers.get("Content-Type");return m&&m.startsWith("application/json")?v=await s.json():v=await s.text(),l===Ue.error?{type:l,error:new Fr(c,s.statusText,v),headers:s.headers}:{type:Ue.data,data:v,statusCode:s.status,headers:s.headers}}return l===Ue.error?{type:l,error:s}:s instanceof gv?{type:Ue.deferred,deferredData:s}:{type:Ue.data,data:s}}function Xr(e,t,n){let r=No(kh(e)).toString(),o={signal:t};if(n){let{formMethod:i,formEncType:a,formData:l}=n;o.method=i.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?Sh(l):l}return new Request(r,o)}function Sh(e){let t=new URLSearchParams;for(let[n,r]of e.entries())he(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(n,r);return t}function $v(e,t,n,r,o){let i={},a=null,l,s=!1,u={};return n.forEach((f,d)=>{let c=t[d].route.id;if(he(!$r(f),"Cannot handle redirect results in processLoaderData"),po(f)){let v=mr(e,c),m=f.error;r&&(m=Object.values(r)[0],r=void 0),a=Object.assign(a||{},{[v.route.id]:m}),s||(s=!0,l=xh(f.error)?f.error.status:500),f.headers&&(u[c]=f.headers)}else On(f)?(o&&o.set(c,f.deferredData),i[c]=f.deferredData.data):(i[c]=f.data,f.statusCode!=null&&f.statusCode!==200&&!s&&(l=f.statusCode),f.headers&&(u[c]=f.headers))}),r&&(a=r),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function hd(e,t,n,r,o,i,a,l){let{loaderData:s,errors:u}=$v(t,n,r,o,l);for(let f=0;f<i.length;f++){let[d,,c]=i[f];he(a!==void 0&&a[f]!==void 0,"Did not find corresponding fetcher result");let v=a[f];if(po(v)){let m=mr(e.matches,c.route.id);u&&u[m.route.id]||(u=Ee({},u,{[m.route.id]:v.error})),e.fetchers.delete(d)}else{if($r(v))throw new Error("Unhandled fetcher revalidation redirect");if(On(v))throw new Error("Unhandled fetcher deferred data");{let m={state:"idle",data:v.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};e.fetchers.set(d,m)}}}return{loaderData:s,errors:u}}function yl(e,t,n){let r=Ee({},t);return n.forEach(o=>{let i=o.route.id;t[i]===void 0&&e[i]!==void 0&&(r[i]=e[i])}),r}function mr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Av(e,t,n){let r=e.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-"+t+"-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r,error:new Fr(t,n,null)}}function gd(e){return Av(e,404,"Not Found")}function md(e){let t=typeof e=="string"?e:tn(e);return console.warn("You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for "+("["+t+"]")),{type:Ue.error,error:new Fr(405,"Method Not Allowed","")}}function vd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if($r(n))return n}}function kh(e){let t=typeof e=="string"?Bt(e):e;return tn(Ee({},t,{hash:""}))}function Ev(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function On(e){return e.type===Ue.deferred}function po(e){return e.type===Ue.error}function $r(e){return(e&&e.type)===Ue.redirect}async function yd(e,t,n,r,o,i){for(let a=0;a<n.length;a++){let l=n[a],s=t[a],u=e.find(d=>d.route.id===s.route.id),f=u!=null&&!wh(u,s)&&(i&&i[s.route.id])!==void 0;On(l)&&(o||f)&&await bh(l,r,o).then(d=>{d&&(n[a]=d||n[a])})}}async function bh(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ue.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Ue.error,error:o}}return{type:Ue.data,data:e.deferredData.data}}}function Ch(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function xd(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function wd(e,t){let n=typeof t=="string"?Bt(t).search:t.search;if(e[e.length-1].route.index&&Ch(n||""))return e[e.length-1];let r=yh(e);return r[r.length-1]}var Ca={exports:{}},$a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=w.exports,Pv=Symbol.for("react.element"),Lv=Symbol.for("react.fragment"),Tv=Object.prototype.hasOwnProperty,Nv=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dv={key:!0,ref:!0,__self:!0,__source:!0};function $h(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Tv.call(t,r)&&!Dv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Pv,type:e,key:i,ref:a,props:o,_owner:Nv.current}}$a.Fragment=Lv;$a.jsx=$h;$a.jsxs=$h;(function(e){e.exports=$a})(Ca);const Ah=Ca.exports.Fragment,b=Ca.exports.jsx,de=Ca.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}function Ov(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Iv=typeof Object.is=="function"?Object.is:Ov,{useState:zv,useEffect:_v,useLayoutEffect:Mv,useDebugValue:Fv}=Cl;function jv(e,t,n){const r=t(),[{inst:o},i]=zv({inst:{value:r,getSnapshot:t}});return Mv(()=>{o.value=r,o.getSnapshot=t,xl(o)&&i({inst:o})},[e,r,t]),_v(()=>(xl(o)&&i({inst:o}),e(()=>{xl(o)&&i({inst:o})})),[e]),Fv(r),r}function xl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Iv(n,r)}catch{return!0}}function Bv(e,t,n){return t()}const Uv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hv=!Uv,Vv=Hv?Bv:jv,Wv="useSyncExternalStore"in Cl?(e=>e.useSyncExternalStore)(Cl):Vv,Qv=w.exports.createContext(null),Eh=w.exports.createContext(null),Tu=w.exports.createContext(null),Kv=w.exports.createContext(null),Aa=w.exports.createContext(null),Ea=w.exports.createContext({outlet:null,matches:[]}),Rh=w.exports.createContext(null);function Nu(){return w.exports.useContext(Aa)!=null}function Gv(){return Nu()||he(!1),w.exports.useContext(Aa).location}const Yv=w.exports.createContext(null);function Xv(e){let t=w.exports.useContext(Ea).outlet;return t&&b(Yv.Provider,{value:e,children:t})}function Zv(e,t){Nu()||he(!1);let n=w.exports.useContext(Tu),{matches:r}=w.exports.useContext(Ea),o=r[r.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Gv(),s;if(t){var u;let m=typeof t=="string"?Bt(t):t;a==="/"||((u=m.pathname)==null?void 0:u.startsWith(a))||he(!1),s=m}else s=l;let f=s.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",c=no(e,{pathname:d}),v=ty(c&&c.map(m=>Object.assign({},m,{params:Object.assign({},i,m.params),pathname:Fn([a,m.pathname]),pathnameBase:m.pathnameBase==="/"?a:Fn([a,m.pathnameBase])})),r,n||void 0);return t&&v?b(Aa.Provider,{value:{location:Zi({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:Ie.Pop},children:v}):v}function Jv(){let e=ry(),t=xh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return de(Ah,{children:[b("h2",{children:"Unhandled Thrown Error!"}),b("h3",{style:{fontStyle:"italic"},children:t}),n?b("pre",{style:o,children:n}):null,b("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),de("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",b("code",{style:i,children:"errorElement"})," props on\xA0",b("code",{style:i,children:"<Route>"})]})]})}class qv extends w.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b(Rh.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function ey(e){let{routeContext:t,match:n,children:r}=e,o=w.exports.useContext(Qv);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),b(Ea.Provider,{value:t,children:r})}function ty(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||he(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,l)=>{let s=a.route.id?o==null?void 0:o[a.route.id]:null,u=n?a.route.errorElement||b(Jv,{}):null,f=()=>b(ey,{match:a,routeContext:{outlet:i,matches:t.concat(r.slice(0,l+1))},children:s?u:a.route.element!==void 0?a.route.element:i});return n&&(a.route.errorElement||l===0)?b(qv,{location:n.location,component:u,error:s,children:f()}):f()},null)}var Sd;(function(e){e.UseRevalidator="useRevalidator"})(Sd||(Sd={}));var ys;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ys||(ys={}));function ny(e){let t=w.exports.useContext(Tu);return t||he(!1),t}function ry(){var e;let t=w.exports.useContext(Rh),n=ny(ys.UseRouteError),r=w.exports.useContext(Ea),o=r.matches[r.matches.length-1];return t||(r||he(!1),o.route.id||he(!1),(e=n.errors)==null?void 0:e[o.route.id])}function oy(e){let{fallbackElement:t,router:n}=e,r=Wv(n.subscribe,()=>n.state,()=>n.state),o=w.exports.useMemo(()=>({createHref:n.createHref,go:a=>n.navigate(a),push:(a,l,s)=>n.navigate(a,{state:l,preventScrollReset:s==null?void 0:s.preventScrollReset}),replace:(a,l,s)=>n.navigate(a,{replace:!0,state:l,preventScrollReset:s==null?void 0:s.preventScrollReset})}),[n]),i=n.basename||"/";return b(Eh.Provider,{value:{router:n,navigator:o,static:!1,basename:i},children:b(Tu.Provider,{value:r,children:b(ly,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o,children:n.state.initialized?b(sy,{}):t})})})}function iy(e){return Xv(e.context)}function ay(e){he(!1)}function ly(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ie.Pop,navigator:i,static:a=!1}=e;Nu()&&he(!1);let l=t.replace(/^\/*/,"/"),s=w.exports.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=Bt(r));let{pathname:u="/",search:f="",hash:d="",state:c=null,key:v="default"}=r,m=w.exports.useMemo(()=>{let x=vh(u,l);return x==null?null:{pathname:x,search:f,hash:d,state:c,key:v}},[l,u,f,d,c,v]);return m==null?null:b(Kv.Provider,{value:s,children:b(Aa.Provider,{children:n,value:{location:m,navigationType:o}})})}function sy(e){let{children:t,location:n}=e,r=w.exports.useContext(Eh),o=r&&!t?r.router.routes:xs(t);return Zv(o,n)}var kd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(kd||(kd={}));new Promise(()=>{});function xs(e,t){t===void 0&&(t=[]);let n=[];return w.exports.Children.forEach(e,(r,o)=>{if(!w.exports.isValidElement(r))return;if(r.type===w.exports.Fragment){n.push.apply(n,xs(r.props.children,t));return}r.type!==ay&&he(!1),!r.props.index||!r.props.children||he(!1);let i=[...t,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=xs(r.props.children,i)),n.push(a)}),n}function Ph(e){return e.map(t=>{let n=Zi({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=Ph(n.children)),n})}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uy(e,t){var n;return Sv({basename:t==null?void 0:t.basename,history:V0({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||((n=window)==null?void 0:n.__staticRouterHydrationData),routes:Ph(e)}).initialize()}var bd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(bd||(bd={}));var Cd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cd||(Cd={}));const ws={};var Ra={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Du=je?Symbol.for("react.element"):60103,Ou=je?Symbol.for("react.portal"):60106,Pa=je?Symbol.for("react.fragment"):60107,La=je?Symbol.for("react.strict_mode"):60108,Ta=je?Symbol.for("react.profiler"):60114,Na=je?Symbol.for("react.provider"):60109,Da=je?Symbol.for("react.context"):60110,Iu=je?Symbol.for("react.async_mode"):60111,Oa=je?Symbol.for("react.concurrent_mode"):60111,Ia=je?Symbol.for("react.forward_ref"):60112,za=je?Symbol.for("react.suspense"):60113,cy=je?Symbol.for("react.suspense_list"):60120,_a=je?Symbol.for("react.memo"):60115,Ma=je?Symbol.for("react.lazy"):60116,dy=je?Symbol.for("react.block"):60121,fy=je?Symbol.for("react.fundamental"):60117,py=je?Symbol.for("react.responder"):60118,hy=je?Symbol.for("react.scope"):60119;function gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Du:switch(e=e.type,e){case Iu:case Oa:case Pa:case Ta:case La:case za:return e;default:switch(e=e&&e.$$typeof,e){case Da:case Ia:case Ma:case _a:case Na:return e;default:return t}}case Ou:return t}}}function Lh(e){return gt(e)===Oa}Se.AsyncMode=Iu;Se.ConcurrentMode=Oa;Se.ContextConsumer=Da;Se.ContextProvider=Na;Se.Element=Du;Se.ForwardRef=Ia;Se.Fragment=Pa;Se.Lazy=Ma;Se.Memo=_a;Se.Portal=Ou;Se.Profiler=Ta;Se.StrictMode=La;Se.Suspense=za;Se.isAsyncMode=function(e){return Lh(e)||gt(e)===Iu};Se.isConcurrentMode=Lh;Se.isContextConsumer=function(e){return gt(e)===Da};Se.isContextProvider=function(e){return gt(e)===Na};Se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Du};Se.isForwardRef=function(e){return gt(e)===Ia};Se.isFragment=function(e){return gt(e)===Pa};Se.isLazy=function(e){return gt(e)===Ma};Se.isMemo=function(e){return gt(e)===_a};Se.isPortal=function(e){return gt(e)===Ou};Se.isProfiler=function(e){return gt(e)===Ta};Se.isStrictMode=function(e){return gt(e)===La};Se.isSuspense=function(e){return gt(e)===za};Se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pa||e===Oa||e===Ta||e===La||e===za||e===cy||typeof e=="object"&&e!==null&&(e.$$typeof===Ma||e.$$typeof===_a||e.$$typeof===Na||e.$$typeof===Da||e.$$typeof===Ia||e.$$typeof===fy||e.$$typeof===py||e.$$typeof===hy||e.$$typeof===dy)};Se.typeOf=gt;(function(e){e.exports=Se})(Ra);function gy(e){function t(M,R,T,F,S){for(var V=0,I=0,P=0,B=0,G,Q,ie=0,fe=0,Z,ve=Z=G=0,ae=0,$=0,N=0,O=0,J=T.length,q=J-1,re,j="",te="",ye="",xe="",ge;ae<J;){if(Q=T.charCodeAt(ae),ae===q&&I+B+P+V!==0&&(I!==0&&(Q=I===47?10:47),B=P=V=0,J++,q++),I+B+P+V===0){if(ae===q&&(0<$&&(j=j.replace(c,"")),0<j.trim().length)){switch(Q){case 32:case 9:case 59:case 13:case 10:break;default:j+=T.charAt(ae)}Q=59}switch(Q){case 123:for(j=j.trim(),G=j.charCodeAt(0),Z=1,O=++ae;ae<J;){switch(Q=T.charCodeAt(ae)){case 123:Z++;break;case 125:Z--;break;case 47:switch(Q=T.charCodeAt(ae+1)){case 42:case 47:e:{for(ve=ae+1;ve<q;++ve)switch(T.charCodeAt(ve)){case 47:if(Q===42&&T.charCodeAt(ve-1)===42&&ae+2!==ve){ae=ve+1;break e}break;case 10:if(Q===47){ae=ve+1;break e}}ae=ve}}break;case 91:Q++;case 40:Q++;case 34:case 39:for(;ae++<q&&T.charCodeAt(ae)!==Q;);}if(Z===0)break;ae++}switch(Z=T.substring(O,ae),G===0&&(G=(j=j.replace(d,"").trim()).charCodeAt(0)),G){case 64:switch(0<$&&(j=j.replace(c,"")),Q=j.charCodeAt(1),Q){case 100:case 109:case 115:case 45:$=R;break;default:$=ke}if(Z=t(R,$,Z,Q,S+1),O=Z.length,0<E&&($=n(ke,j,N),ge=l(3,Z,$,R,se,oe,O,Q,S,F),j=$.join(""),ge!==void 0&&(O=(Z=ge.trim()).length)===0&&(Q=0,Z="")),0<O)switch(Q){case 115:j=j.replace(A,a);case 100:case 109:case 45:Z=j+"{"+Z+"}";break;case 107:j=j.replace(p,"$1 $2"),Z=j+"{"+Z+"}",Z=ne===1||ne===2&&i("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=j+Z,F===112&&(Z=(te+=Z,""))}else Z="";break;default:Z=t(R,n(R,j,N),Z,F,S+1)}ye+=Z,Z=N=$=ve=G=0,j="",Q=T.charCodeAt(++ae);break;case 125:case 59:if(j=(0<$?j.replace(c,""):j).trim(),1<(O=j.length))switch(ve===0&&(G=j.charCodeAt(0),G===45||96<G&&123>G)&&(O=(j=j.replace(" ",":")).length),0<E&&(ge=l(1,j,R,M,se,oe,te.length,F,S,F))!==void 0&&(O=(j=ge.trim()).length)===0&&(j="\0\0"),G=j.charCodeAt(0),Q=j.charCodeAt(1),G){case 0:break;case 64:if(Q===105||Q===99){xe+=j+T.charAt(ae);break}default:j.charCodeAt(O-1)!==58&&(te+=o(j,G,Q,j.charCodeAt(2)))}N=$=ve=G=0,j="",Q=T.charCodeAt(++ae)}}switch(Q){case 13:case 10:I===47?I=0:1+G===0&&F!==107&&0<j.length&&($=1,j+="\0"),0<E*Y&&l(0,j,R,M,se,oe,te.length,F,S,F),oe=1,se++;break;case 59:case 125:if(I+B+P+V===0){oe++;break}default:switch(oe++,re=T.charAt(ae),Q){case 9:case 32:if(B+V+I===0)switch(ie){case 44:case 58:case 9:case 32:re="";break;default:Q!==32&&(re=" ")}break;case 0:re="\\0";break;case 12:re="\\f";break;case 11:re="\\v";break;case 38:B+I+V===0&&($=N=1,re="\f"+re);break;case 108:if(B+I+V+ee===0&&0<ve)switch(ae-ve){case 2:ie===112&&T.charCodeAt(ae-3)===58&&(ee=ie);case 8:fe===111&&(ee=fe)}break;case 58:B+I+V===0&&(ve=ae);break;case 44:I+P+B+V===0&&($=1,re+="\r");break;case 34:case 39:I===0&&(B=B===Q?0:B===0?Q:B);break;case 91:B+I+P===0&&V++;break;case 93:B+I+P===0&&V--;break;case 41:B+I+V===0&&P--;break;case 40:if(B+I+V===0){if(G===0)switch(2*ie+3*fe){case 533:break;default:G=1}P++}break;case 64:I+P+B+V+ve+Z===0&&(Z=1);break;case 42:case 47:if(!(0<B+V+P))switch(I){case 0:switch(2*Q+3*T.charCodeAt(ae+1)){case 235:I=47;break;case 220:O=ae,I=42}break;case 42:Q===47&&ie===42&&O+2!==ae&&(T.charCodeAt(O+2)===33&&(te+=T.substring(O,ae+1)),re="",I=0)}}I===0&&(j+=re)}fe=ie,ie=Q,ae++}if(O=te.length,0<O){if($=R,0<E&&(ge=l(2,te,$,M,se,oe,O,F,S,F),ge!==void 0&&(te=ge).length===0))return xe+te+ye;if(te=$.join(",")+"{"+te+"}",ne*ee!==0){switch(ne!==2||i(te,2)||(ee=0),ee){case 111:te=te.replace(y,":-moz-$1")+te;break;case 112:te=te.replace(g,"::-webkit-input-$1")+te.replace(g,"::-moz-$1")+te.replace(g,":-ms-input-$1")+te}ee=0}}return xe+te+ye}function n(M,R,T){var F=R.trim().split(k);R=F;var S=F.length,V=M.length;switch(V){case 0:case 1:var I=0;for(M=V===0?"":M[0]+" ";I<S;++I)R[I]=r(M,R[I],T).trim();break;default:var P=I=0;for(R=[];I<S;++I)for(var B=0;B<V;++B)R[P++]=r(M[B]+" ",F[I],T).trim()}return R}function r(M,R,T){var F=R.charCodeAt(0);switch(33>F&&(F=(R=R.trim()).charCodeAt(0)),F){case 38:return R.replace(h,"$1"+M.trim());case 58:return M.trim()+R.replace(h,"$1"+M.trim());default:if(0<1*T&&0<R.indexOf("\f"))return R.replace(h,(M.charCodeAt(0)===58?"":"$1")+M.trim())}return M+R}function o(M,R,T,F){var S=M+";",V=2*R+3*T+4*F;if(V===944){M=S.indexOf(":",9)+1;var I=S.substring(M,S.length-1).trim();return I=S.substring(0,M).trim()+I+";",ne===1||ne===2&&i(I,1)?"-webkit-"+I+I:I}if(ne===0||ne===2&&!i(S,1))return S;switch(V){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(ce,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return I=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+S+"-ms-flex-pack"+I+S;case 1005:return m.test(S)?S.replace(v,":-webkit-")+S.replace(v,":-moz-")+S:S;case 1e3:switch(I=S.substring(13).trim(),R=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(R)){case 226:I=S.replace(C,"tb");break;case 232:I=S.replace(C,"tb-rl");break;case 220:I=S.replace(C,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+I+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(R=(S=M).length-10,I=(S.charCodeAt(R)===33?S.substring(0,R):S).substring(M.indexOf(":",7)+1).trim(),V=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:S=S.replace(I,"-webkit-"+I)+";"+S;break;case 207:case 102:S=S.replace(I,"-webkit-"+(102<V?"inline-":"")+"box")+";"+S.replace(I,"-webkit-"+I)+";"+S.replace(I,"-ms-"+I+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return I=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+I+"-ms-flex-"+I+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(_,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(_,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(U.test(M)===!0)return(I=M.substring(M.indexOf(":")+1)).charCodeAt(0)===115?o(M.replace("stretch","fill-available"),R,T,F).replace(":fill-available",":stretch"):S.replace(I,"-webkit-"+I)+S.replace(I,"-moz-"+I.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,T+F===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+S}return S}function i(M,R){var T=M.indexOf(R===1?":":"{"),F=M.substring(0,R!==3?T:10);return T=M.substring(T+1,M.length-1),H(R!==2?F:F.replace(X,"$1"),T,R)}function a(M,R){var T=o(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return T!==R+";"?T.replace(L," or ($1)").substring(4):"("+R+")"}function l(M,R,T,F,S,V,I,P,B,G){for(var Q=0,ie=R,fe;Q<E;++Q)switch(fe=le[Q].call(f,M,ie,T,F,S,V,I,P,B,G)){case void 0:case!1:case!0:case null:break;default:ie=fe}if(ie!==R)return ie}function s(M){switch(M){case void 0:case null:E=le.length=0;break;default:if(typeof M=="function")le[E++]=M;else if(typeof M=="object")for(var R=0,T=M.length;R<T;++R)s(M[R]);else Y=!!M|0}return s}function u(M){return M=M.prefix,M!==void 0&&(H=null,M?typeof M!="function"?ne=1:(ne=2,H=M):ne=0),u}function f(M,R){var T=M;if(33>T.charCodeAt(0)&&(T=T.trim()),ue=T,T=[ue],0<E){var F=l(-1,R,T,T,se,oe,0,0,0,0);F!==void 0&&typeof F=="string"&&(R=F)}var S=t(ke,T,R,0,0);return 0<E&&(F=l(-2,S,T,T,se,oe,S.length,0,0,0),F!==void 0&&(S=F)),ue="",ee=0,oe=se=1,S}var d=/^\0+/g,c=/[\0\r\f]/g,v=/: */g,m=/zoo|gra/,x=/([,: ])(transform)/g,k=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,y=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,_=/-self|flex-/g,X=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,oe=1,se=1,ee=0,ne=1,ke=[],le=[],E=0,H=null,Y=0,ue="";return f.use=s,f.set=u,e!==void 0&&u(e),f}var my={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function vy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var yy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$d=vy(function(e){return yy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),zu=Ra.exports,xy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Th={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_u={};_u[zu.ForwardRef]=Sy;_u[zu.Memo]=Th;function Ad(e){return zu.isMemo(e)?Th:_u[e.$$typeof]||xy}var ky=Object.defineProperty,by=Object.getOwnPropertyNames,Ed=Object.getOwnPropertySymbols,Cy=Object.getOwnPropertyDescriptor,$y=Object.getPrototypeOf,Rd=Object.prototype;function Nh(e,t,n){if(typeof t!="string"){if(Rd){var r=$y(t);r&&r!==Rd&&Nh(e,r,n)}var o=by(t);Ed&&(o=o.concat(Ed(t)));for(var i=Ad(e),a=Ad(t),l=0;l<o.length;++l){var s=o[l];if(!wy[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var u=Cy(t,s);try{ky(e,s,u)}catch{}}}}return e}var Ay=Nh;function Et(){return(Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Pd=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ss=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ra.exports.typeOf(e)},Ji=Object.freeze([]),xn=Object.freeze({});function Dr(e){return typeof e=="function"}function Ld(e){return e.displayName||e.name||"Component"}function Mu(e){return e&&typeof e.styledComponentId=="string"}var Or=typeof ws<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Fu=typeof window<"u"&&"HTMLElement"in window,Ey=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof ws<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof ws<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),Ry={};function Wn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Py=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Wn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),$i=new Map,qi=new Map,ho=1,ai=function(e){if($i.has(e))return $i.get(e);for(;qi.has(ho);)ho++;var t=ho++;return $i.set(e,t),qi.set(t,e),t},Ly=function(e){return qi.get(e)},Ty=function(e,t){t>=ho&&(ho=t+1),$i.set(e,t),qi.set(t,e)},Ny="style["+Or+'][data-styled-version="5.3.6"]',Dy=new RegExp("^"+Or+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Oy=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Iy=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(Dy);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(Ty(u,s),Oy(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},zy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Dh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var f=s[u];if(f&&f.nodeType===1&&f.hasAttribute(Or))return f}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Or,"active"),r.setAttribute("data-styled-version","5.3.6");var a=zy();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},_y=function(){function e(n){var r=this.element=Dh(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}Wn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),My=function(){function e(n){var r=this.element=Dh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Fy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Td=Fu,jy={isServer:!Fu,useCSSOMInjection:!Ey},ea=function(){function e(n,r,o){n===void 0&&(n=xn),r===void 0&&(r={}),this.options=Et({},jy,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Fu&&Td&&(Td=!1,function(i){for(var a=document.querySelectorAll(Ny),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(Or)!=="active"&&(Iy(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return ai(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Et({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new Fy(a):i?new _y(a):new My(a),new Py(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ai(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(ai(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ai(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=Ly(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var f=Or+".g"+a+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(c){c.length>0&&(d+=c+",")}),i+=""+u+f+'{content:"'+d+`"}/*!sc*/
`}}}return i}(this)},e}(),By=/(a)(d)/gi,Nd=function(e){return String.fromCharCode(e+(e>25?39:97))};function ks(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Nd(t%52)+n;return(Nd(t%52)+n).replace(By,"$1-$2")}var vr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Oh=function(e){return vr(5381,e)};function Ih(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Dr(n)&&!Mu(n))return!1}return!0}var Uy=Oh("5.3.6"),Hy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ih(t),this.componentId=n,this.baseHash=vr(Uy,n),this.baseStyle=r,ea.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Qn(this.rules,t,n,r).join(""),l=ks(vr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,f=vr(this.baseHash,r.hash),d="",c=0;c<u;c++){var v=this.rules[c];if(typeof v=="string")d+=v;else if(v){var m=Qn(v,t,n,r),x=Array.isArray(m)?m.join(""):m;f=vr(f,x+c),d+=x}}if(d){var k=ks(f>>>0);if(!n.hasNameForId(o,k)){var h=r(d,"."+k,void 0,o);n.insertRules(o,k,h)}i.push(k)}}return i.join(" ")},e}(),Vy=/^\s*\/\/.*$/gm,Wy=[":","[",".","#"];function Qy(e){var t,n,r,o,i=e===void 0?xn:e,a=i.options,l=a===void 0?xn:a,s=i.plugins,u=s===void 0?Ji:s,f=new gy(l),d=[],c=function(x){function k(h){if(h)try{x(h+"}")}catch{}}return function(h,p,g,y,C,A,L,_,X,U){switch(h){case 1:if(X===0&&p.charCodeAt(0)===64)return x(p+";"),"";break;case 2:if(_===0)return p+"/*|*/";break;case 3:switch(_){case 102:case 112:return x(g[0]+p),"";default:return p+(U===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(k)}}}(function(x){d.push(x)}),v=function(x,k,h){return k===0&&Wy.indexOf(h[n.length])!==-1||h.match(o)?x:"."+t};function m(x,k,h,p){p===void 0&&(p="&");var g=x.replace(Vy,""),y=k&&h?h+" "+k+" { "+g+" }":g;return t=p,n=k,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),f(h||!k?"":k,y)}return f.use([].concat(u,[function(x,k,h){x===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,v))},c,function(x){if(x===-2){var k=d;return d=[],k}}])),m.hash=u.length?u.reduce(function(x,k){return k.name||Wn(15),vr(x,k.name)},5381).toString():"",m}var zh=Rt.createContext();zh.Consumer;var _h=Rt.createContext(),Ky=(_h.Consumer,new ea),bs=Qy();function Mh(){return w.exports.useContext(zh)||Ky}function Fh(){return w.exports.useContext(_h)||bs}var Gy=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=bs);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Wn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=bs),this.name+t.hash},e}(),Yy=/([A-Z])/,Xy=/([A-Z])/g,Zy=/^ms-/,Jy=function(e){return"-"+e.toLowerCase()};function Dd(e){return Yy.test(e)?e.replace(Xy,Jy).replace(Zy,"-ms-"):e}var Od=function(e){return e==null||e===!1||e===""};function Qn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Qn(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Od(e))return"";if(Mu(e))return"."+e.styledComponentId;if(Dr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Qn(s,t,n,r)}var u;return e instanceof Gy?n?(e.inject(n,r),e.getName(r)):e:Ss(e)?function f(d,c){var v,m,x=[];for(var k in d)d.hasOwnProperty(k)&&!Od(d[k])&&(Array.isArray(d[k])&&d[k].isCss||Dr(d[k])?x.push(Dd(k)+":",d[k],";"):Ss(d[k])?x.push.apply(x,f(d[k],k)):x.push(Dd(k)+": "+(v=k,(m=d[k])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||v in my?String(m).trim():m+"px")+";"));return c?[c+" {"].concat(x,["}"]):x}(e):e.toString()}var Id=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Dr(e)||Ss(e)?Id(Qn(Pd(Ji,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Id(Qn(Pd(e,n)))}var jh=function(e,t,n){return n===void 0&&(n=xn),e.theme!==n.theme&&e.theme||t||n.theme},qy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,e1=/(^-|-$)/g;function wl(e){return e.replace(qy,"-").replace(e1,"")}var Bh=function(e){return ks(Oh(e)>>>0)};function li(e){return typeof e=="string"&&!0}var Cs=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},t1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function n1(e,t,n){var r=e[n];Cs(t)&&Cs(r)?Uh(r,t):e[n]=t}function Uh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Cs(a))for(var l in a)t1(l)&&n1(e,a[l],l)}return e}var Do=Rt.createContext();Do.Consumer;function r1(e){var t=w.exports.useContext(Do),n=w.exports.useMemo(function(){return function(r,o){if(!r)return Wn(14);if(Dr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Wn(8):o?Et({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Rt.createElement(Do.Provider,{value:n},e.children):null}var Sl={};function Hh(e,t,n){var r=Mu(e),o=!li(e),i=t.attrs,a=i===void 0?Ji:i,l=t.componentId,s=l===void 0?function(p,g){var y=typeof p!="string"?"sc":wl(p);Sl[y]=(Sl[y]||0)+1;var C=y+"-"+Bh("5.3.6"+y+Sl[y]);return g?g+"-"+C:C}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(p){return li(p)?"styled."+p:"Styled("+Ld(p)+")"}(e):u,d=t.displayName&&t.componentId?wl(t.displayName)+"-"+t.componentId:t.componentId||s,c=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(p,g,y){return e.shouldForwardProp(p,g,y)&&t.shouldForwardProp(p,g,y)}:e.shouldForwardProp);var m,x=new Hy(n,d,r?e.componentStyle:void 0),k=x.isStatic&&a.length===0,h=function(p,g){return function(y,C,A,L){var _=y.attrs,X=y.componentStyle,U=y.defaultProps,ce=y.foldedComponentIds,oe=y.shouldForwardProp,se=y.styledComponentId,ee=y.target,ne=function(F,S,V){F===void 0&&(F=xn);var I=Et({},S,{theme:F}),P={};return V.forEach(function(B){var G,Q,ie,fe=B;for(G in Dr(fe)&&(fe=fe(I)),fe)I[G]=P[G]=G==="className"?(Q=P[G],ie=fe[G],Q&&ie?Q+" "+ie:Q||ie):fe[G]}),[I,P]}(jh(C,w.exports.useContext(Do),U)||xn,C,_),ke=ne[0],le=ne[1],E=function(F,S,V,I){var P=Mh(),B=Fh(),G=S?F.generateAndInjectStyles(xn,P,B):F.generateAndInjectStyles(V,P,B);return G}(X,L,ke),H=A,Y=le.$as||C.$as||le.as||C.as||ee,ue=li(Y),M=le!==C?Et({},C,{},le):C,R={};for(var T in M)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?R.as=M[T]:(oe?oe(T,$d,Y):!ue||$d(T))&&(R[T]=M[T]));return C.style&&le.style!==C.style&&(R.style=Et({},C.style,{},le.style)),R.className=Array.prototype.concat(ce,se,E!==se?E:null,C.className,le.className).filter(Boolean).join(" "),R.ref=H,w.exports.createElement(Y,R)}(m,p,g,k)};return h.displayName=f,(m=Rt.forwardRef(h)).attrs=c,m.componentStyle=x,m.displayName=f,m.shouldForwardProp=v,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ji,m.styledComponentId=d,m.target=r?e.target:e,m.withComponent=function(p){var g=t.componentId,y=function(A,L){if(A==null)return{};var _,X,U={},ce=Object.keys(A);for(X=0;X<ce.length;X++)_=ce[X],L.indexOf(_)>=0||(U[_]=A[_]);return U}(t,["componentId"]),C=g&&g+"-"+(li(p)?p:wl(Ld(p)));return Hh(p,Et({},y,{attrs:c,componentId:C}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Uh({},e.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},o&&Ay(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var $s=function(e){return function t(n,r,o){if(o===void 0&&(o=xn),!Ra.exports.isValidElementType(r))return Wn(1,String(r));var i=function(){return n(r,o,W.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Et({},o,{},a))},i.attrs=function(a){return t(n,r,Et({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Hh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){$s[e]=$s(e)});var o1=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Ih(n),ea.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(Qn(this.rules,r,o,i).join(""),""),l=this.componentId+n;o.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&ea.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function i1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=W.apply(void 0,[e].concat(n)),i="sc-global-"+Bh(JSON.stringify(o)),a=new o1(o,i);function l(u){var f=Mh(),d=Fh(),c=w.exports.useContext(Do),v=w.exports.useRef(f.allocateGSInstance(i)).current;return f.server&&s(v,u,f,c,d),w.exports.useLayoutEffect(function(){if(!f.server)return s(v,u,f,c,d),function(){return a.removeStyles(v,f)}},[v,u,f,c,d]),null}function s(u,f,d,c,v){if(a.isStatic)a.renderStyles(u,Ry,d,v);else{var m=Et({},f,{theme:jh(f,c,l.defaultProps)});a.renderStyles(u,m,d,v)}}return Rt.memo(l)}const D=$s;var a1={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},l1=a1,s1=`
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

`;const ju="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Bu="inset 2px 2px 3px rgba(0,0,0,0.2)",Nt=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Dt=({background:e="material",color:t="materialText"}={})=>W`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Bo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>W`
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
`,Kn=()=>W`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,tr={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},u1=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?ju:!1,o?Bu:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),Ne=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return W`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[tr[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[tr[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[tr[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[tr[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>u1({theme:r,topLeftInner:tr[t][n.topLeftInner],bottomRightInner:tr[t][n.bottomRightInner],hasShadow:o})};
  `},Ir=()=>W`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,c1=e=>Buffer.from(e).toString("base64"),d1=typeof btoa<"u"?btoa:c1,si=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${d1(n)})`},Uu=(e="default")=>W`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Bo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Dt()}
    ${e==="flat"?Kn():Ne({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${Dt()}
    ${e==="flat"?Kn():Ne({style:"window"})}
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
    background-image: ${({theme:t})=>si(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>si(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>si(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>si(t.materialText,0)};
  }
`,f1=D.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,p1=w.exports.forwardRef(({children:e,underline:t=!0,...n},r)=>b(f1,{ref:r,underline:t,...n,children:e}));p1.displayName="Anchor";const h1=D.header`
  ${Ne()};
  ${Dt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Vh=w.exports.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>b(h1,{fixed:t,position:t!==!1?n:void 0,ref:o,...r,children:e}));Vh.displayName="AppBar";const Xn=()=>{};function In(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function g1(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function zd(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(g1(t)))}function kn(e){return typeof e=="number"?`${e}px`:e}const m1=D.div`
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
`,v1=D.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Wh=w.exports.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...a},l)=>b(m1,{noBorder:n,ref:l,size:kn(r),square:o,src:i,...a,children:i?b(v1,{src:i,alt:e}):t}));Wh.displayName="Avatar";const Ve={sm:"28px",md:"36px",lg:"44px"},y1=W`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Ve[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Ve[t]:"auto"};
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
`,Fa=D.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?W`
          ${Kn()}
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
            ${!e&&!t&&Ir}
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
          ${e?Bo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
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
            ${!e&&!t&&Ir}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${y1}
`,Oo=w.exports.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:s=Xn,primary:u=!1,variant:f="default",...d},c)=>b(Fa,{active:l,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:c,size:i,square:a,type:r,variant:f,...d,children:n}));Oo.displayName="Button";function bn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const a=o!==void 0,[l,s]=w.exports.useState(e),u=w.exports.useCallback(f=>{a||s(f)},[a]);if(a&&typeof t!="function"&&!r){const f=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(f)}return[a?o:l,u]}const As=D.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Ve[e.size]};
  width: ${e=>e.square?Ve[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Ve[e.size]};
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
`,Es=w.exports.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...a},l)=>b(As,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a,children:r}));Es.displayName="MenuListItem";const Qh=D.ul.attrs(()=>({role:"menu"}))`
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
`;Qh.displayName="MenuList";const jt=20,ta=D.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${jt}px;
  height: ${jt}px;
  opacity: 0;
  z-index: -1;
`,Hu=D.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&Nt()}

  ${As} & {
    margin: 0;
    height: 100%;
  }
  ${As}:hover & {
    ${({$disabled:e,theme:t})=>!e&&W`
        color: ${t.materialTextInvert};
      `};
  }
`,Vu=D.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ta}:focus ~ & {
    ${Ir}
  }
  ${ta}:not(:disabled) ~ &:active {
    ${Ir}
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
    ${e=>e.shadow&&`box-shadow:${Bu};`}
  }
`,x1=D.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Uu()}
`,Kh=w.exports.forwardRef(({children:e,shadow:t=!0,...n},r)=>b(Ut,{ref:r,shadow:t,...n,children:b(x1,{children:e})}));Kh.displayName="ScrollView";const Gh=W`
  width: ${jt}px;
  height: ${jt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,w1=D(Ut)`
  ${Gh}
  width: ${jt}px;
  height: ${jt}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,S1=D.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${Gh}
  width: ${jt-4}px;
  height: ${jt-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,k1=D.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,b1=D.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Bo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,C1={flat:S1,default:w1},$1=w.exports.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:a=Xn,style:l={},value:s,variant:u="default",...f},d)=>{var c;const[v,m]=bn({defaultValue:n,onChange:a,readOnly:(c=f.readOnly)!==null&&c!==void 0?c:r,value:e}),x=w.exports.useCallback(p=>{const g=p.target.checked;m(g),a(p)},[a,m]),k=C1[u];let h=null;return o?h=b1:v&&(h=k1),de(Hu,{$disabled:r,className:t,style:l,children:[b(ta,{disabled:r,onChange:r?void 0:x,readOnly:r,type:"checkbox",value:s,checked:v,"data-indeterminate":o,ref:d,...f}),b(k,{$disabled:r,role:"presentation",children:h&&b(h,{$disabled:r,variant:u})}),i&&b(Vu,{children:i})]})});$1.displayName="Checkbox";const Wu=D.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${kn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${kn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;Wu.displayName="Separator";const A1=D(Fa)`
  padding-left: 8px;
`,E1=D(Wu)`
  height: 21px;
  position: relative;
  top: 0;
`,Yh=D.input`
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
`,R1=D.div`
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
  ${Yh}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ir}
    outline-offset: -8px;
  }
`,P1=D.span`
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
`,L1=w.exports.forwardRef(({value:e,defaultValue:t,onChange:n=Xn,disabled:r=!1,variant:o="default",...i},a)=>{var l;const[s,u]=bn({defaultValue:t,onChange:n,readOnly:(l=i.readOnly)!==null&&l!==void 0?l:r,value:e});return de(A1,{disabled:r,as:"div",variant:o,size:"md",children:[b(Yh,{onChange:d=>{const c=d.target.value;u(c),n(d)},readOnly:r,disabled:r,value:s!=null?s:"#008080",type:"color",ref:a,...i}),b(R1,{$disabled:r,color:s!=null?s:"#008080",role:"presentation"}),o==="default"&&b(E1,{orientation:"vertical"}),b(P1,{$disabled:r,variant:o})]})});L1.displayName="ColorInput";const T1=D.div`
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
      ${Bo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,_d=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],N1=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function D1({digit:e=0,pixelSize:t=2,...n}){const r=N1[Number(e)].map((o,i)=>o?`${_d[i]} active`:_d[i]);return b(T1,{pixelSize:t,...n,children:r.map((o,i)=>b("span",{className:o},i))})}const O1=D.div`
  ${Ne({style:"status"})}
  display: inline-flex;
  background: #000000;
`,I1={sm:1,md:2,lg:3,xl:4},z1=w.exports.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=w.exports.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return b(O1,{ref:o,...r,children:i.map((a,l)=>b(D1,{digit:a,pixelSize:I1[n]},l))})});z1.displayName="Counter";const Xh=W`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ve.md};
`,_1=D(Ut).attrs({"data-testid":"variant-default"})`
  ${Xh}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,M1=D.div.attrs({"data-testid":"variant-flat"})`
  ${Kn()}
  ${Xh}
  position: relative;
`,Zh=W`
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
`,F1=D.input`
  ${Zh}
  padding: 0 8px;
`,j1=D.textarea`
  ${Zh}
  padding: 8px;
  resize: none;
  ${({variant:e})=>Uu(e)}
`,Jh=w.exports.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Xn,shadow:o=!0,style:i,variant:a="default",...l},s)=>{const u=a==="flat"?M1:_1,f=w.exports.useMemo(()=>{var d;return l.multiline?b(j1,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:a,...l}):b(F1,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(d=l.type)!==null&&d!==void 0?d:"text",variant:a,...l})},[t,r,l,s,a]);return b(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i,children:f})});Jh.displayName="TextInput";const B1=D.div`
  display: inline-flex;
  align-items: center;
`,Rs=D(Oo)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?W`
          height: calc(50% - 1px);
        `:W`
          height: 50%;
        `}
`,U1=D.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?W`
          height: calc(${Ve.md} - 4px);
        `:W`
          height: ${Ve.md};
          margin-left: 2px;
        `}
`,Md=D.span`
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
  ${Rs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?W`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:W`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,qh=w.exports.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:a,step:l=1,style:s,value:u,variant:f="default",width:d,...c},v)=>{const[m,x]=bn({defaultValue:t,onChange:i,readOnly:a,value:u}),k=w.exports.useCallback(A=>{const L=parseFloat(A.target.value);x(L)},[x]),h=w.exports.useCallback(A=>{const L=In(parseFloat(((m!=null?m:0)+A).toFixed(2)),o!=null?o:null,r!=null?r:null);x(L),i==null||i(L)},[r,o,i,x,m]),p=w.exports.useCallback(()=>{m!==void 0&&(i==null||i(m))},[i,m]),g=w.exports.useCallback(()=>{h(l)},[h,l]),y=w.exports.useCallback(()=>{h(-l)},[h,l]),C=f==="flat"?"flat":"raised";return de(B1,{className:e,style:{...s,width:d!==void 0?kn(d):"auto"},...c,children:[b(Jh,{value:m,variant:f,onChange:k,disabled:n,type:"number",readOnly:a,ref:v,fullWidth:!0,onBlur:p}),de(U1,{variant:f,children:[b(Rs,{"data-testid":"increment",variant:C,disabled:n||a,onClick:g,children:b(Md,{invert:!0})}),b(Rs,{"data-testid":"decrement",variant:C,disabled:n||a,onClick:y,children:b(Md,{})})]})]})});qh.displayName="NumberInput";function H1(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const eg=e=>w.exports.useMemo(()=>e!=null?e:H1(),[e]),tg=W`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,ng=W`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Qu=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,V1=D.div`
  ${tg}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Qu}:focus & {
    ${ng}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,rg=W`
  height: ${Ve.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?Nt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,W1=D(Ut)`
  ${rg}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Q1=D.div`
  ${Kn()}
  ${rg}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,K1=D.select`
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
  ${tg}
  cursor: pointer;
  &:disabled {
    ${Nt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,og=D(Fa).attrs(()=>({"aria-hidden":"true"}))`
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
`,G1=D.span`
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
  ${og}:active & {
    margin-top: 2px;
  }
`,Y1=D.ul`
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
  box-shadow: ${ju};
  ${({variant:e="default"})=>e==="flat"?W`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:W`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>Uu(e)}
`,X1=D.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Ve.md} - 4px);
  line-height: calc(${Ve.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?ng:""}
  user-select: none;
`,Z1=[],ig=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=Z1,readOnly:a,style:l,value:s,variant:u,width:f})=>{var d;const c=w.exports.useMemo(()=>i.filter(Boolean),[i]),[v,m]=bn({defaultValue:t!=null?t:(d=c==null?void 0:c[0])===null||d===void 0?void 0:d.value,onChange:o,readOnly:a,value:s}),x=!(n||a),k=w.exports.useMemo(()=>({className:e,style:{...l,width:f}}),[e,l,f]),h=w.exports.useMemo(()=>b(og,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised",children:b(G1,{"data-testid":"select-icon",$disabled:n})}),[n,r,u]),p=w.exports.useMemo(()=>u==="flat"?Q1:W1,[u]);return w.exports.useMemo(()=>({isEnabled:x,options:c,value:v,setValue:m,wrapperProps:k,DropdownButton:h,Wrapper:p}),[h,p,x,c,m,v,k])},J1={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},q1=1e3,ex=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:a,open:l,options:s,readOnly:u,value:f,selectRef:d,setValue:c,wrapperRef:v})=>{const m=w.exports.useRef(null),x=w.exports.useRef([]),k=w.exports.useRef(0),h=w.exports.useRef(0),p=w.exports.useRef(),g=w.exports.useRef("search"),y=w.exports.useRef(""),C=w.exports.useRef(),[A,L]=bn({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:u,value:l,valuePropName:"open"}),_=w.exports.useMemo(()=>{const P=s.findIndex(B=>B.value===f);return k.current=In(P,0,null),s[P]},[s,f]),[X,U]=w.exports.useState(s[0]),ce=w.exports.useCallback(P=>{const B=m.current,G=x.current[P];if(!G||!B){p.current=P;return}p.current=void 0;const Q=B.clientHeight,ie=B.scrollTop,fe=B.scrollTop+Q,Z=G.offsetTop,ve=G.offsetHeight,ae=G.offsetTop+G.offsetHeight;Z<ie&&B.scrollTo(0,Z),ae>fe&&B.scrollTo(0,Z-Q+ve),G.focus({preventScroll:!0})},[m]),oe=w.exports.useCallback((P,{scroll:B}={})=>{var G;const Q=s.length-1;let ie;switch(P){case"first":{ie=0;break}case"last":{ie=Q;break}case"next":{ie=In(h.current+1,0,Q);break}case"previous":{ie=In(h.current-1,0,Q);break}case"selected":{ie=In((G=k.current)!==null&&G!==void 0?G:0,0,Q);break}default:ie=P}h.current=ie,U(s[ie]),B&&ce(ie)},[h,s,ce]),se=w.exports.useCallback(({fromEvent:P})=>{L(!0),oe("selected",{scroll:!0}),a==null||a({fromEvent:P})},[oe,a,L]),ee=w.exports.useCallback(()=>{g.current="search",y.current="",clearTimeout(C.current)},[]),ne=w.exports.useCallback(({focusSelect:P,fromEvent:B})=>{var G;n==null||n({fromEvent:B}),L(!1),U(s[0]),ee(),p.current=void 0,P&&((G=d.current)===null||G===void 0||G.focus())},[ee,n,s,d,L]),ke=w.exports.useCallback(({fromEvent:P})=>{A?ne({focusSelect:!1,fromEvent:P}):se({fromEvent:P})},[ne,se,A]),le=w.exports.useCallback((P,{fromEvent:B})=>{k.current!==P&&(k.current=P,c(s[P].value),t==null||t(s[P],{fromEvent:B}))},[t,s,c]),E=w.exports.useCallback(({focusSelect:P,fromEvent:B})=>{le(h.current,{fromEvent:B}),ne({focusSelect:P,fromEvent:B})},[ne,le]),H=w.exports.useCallback((P,{fromEvent:B,select:G})=>{var Q;switch(g.current==="cycleFirstLetter"&&P!==y.current&&(g.current="search"),P===y.current?g.current="cycleFirstLetter":y.current+=P,g.current){case"search":{let ie=s.findIndex(fe=>{var Z;return((Z=fe.label)===null||Z===void 0?void 0:Z.toLocaleUpperCase().indexOf(y.current))===0});ie<0&&(ie=s.findIndex(fe=>{var Z;return((Z=fe.label)===null||Z===void 0?void 0:Z.toLocaleUpperCase().indexOf(P))===0}),y.current=P),ie>=0&&(G?le(ie,{fromEvent:B}):oe(ie,{scroll:!0}));break}case"cycleFirstLetter":{const ie=G?(Q=k.current)!==null&&Q!==void 0?Q:-1:h.current;let fe=s.findIndex((Z,ve)=>{var ae;return ve>ie&&((ae=Z.label)===null||ae===void 0?void 0:ae.toLocaleUpperCase().indexOf(P))===0});fe<0&&(fe=s.findIndex(Z=>{var ve;return((ve=Z.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(P))===0})),fe>=0&&(G?le(fe,{fromEvent:B}):oe(fe,{scroll:!0}));break}}clearTimeout(C.current),C.current=setTimeout(()=>{g.current==="search"&&(y.current="")},q1)},[oe,s,le]),Y=w.exports.useCallback(P=>{var B;P.button===0&&(P.preventDefault(),(B=d.current)===null||B===void 0||B.focus(),ke({fromEvent:P}),i==null||i(P))},[i,d,ke]),ue=w.exports.useCallback(P=>{E({focusSelect:!0,fromEvent:P})},[E]),M=w.exports.useCallback(P=>{const{altKey:B,code:G,ctrlKey:Q,metaKey:ie,shiftKey:fe}=P,{ARROW_DOWN:Z,ARROW_UP:ve,END:ae,ENTER:$,ESC:N,HOME:O,SPACE:J,TAB:q}=J1,re=B||Q||ie||fe;if(!(G===q&&(B||Q||ie)||G!==q&&re))switch(G){case Z:{if(P.preventDefault(),!A){se({fromEvent:P});return}oe("next",{scroll:!0});break}case ve:{if(P.preventDefault(),!A){se({fromEvent:P});return}oe("previous",{scroll:!0});break}case ae:{if(P.preventDefault(),!A){se({fromEvent:P});return}oe("last",{scroll:!0});break}case $:{if(!A)return;P.preventDefault(),E({focusSelect:!0,fromEvent:P});break}case N:{if(!A)return;P.preventDefault(),ne({focusSelect:!0,fromEvent:P});break}case O:{if(P.preventDefault(),!A){se({fromEvent:P});return}oe("first",{scroll:!0});break}case J:{P.preventDefault(),A?E({focusSelect:!0,fromEvent:P}):se({fromEvent:P});break}case q:{if(!A)return;fe||P.preventDefault(),E({focusSelect:!fe,fromEvent:P});break}default:!re&&G.match(/^Key/)&&(P.preventDefault(),P.stopPropagation(),H(G.replace(/^Key/,""),{select:!A,fromEvent:P}))}},[oe,ne,A,se,H,E]),R=w.exports.useCallback(P=>{M(P),o==null||o(P)},[M,o]),T=w.exports.useCallback(P=>{oe(P)},[oe]),F=w.exports.useCallback(P=>{A||(ee(),e==null||e(P))},[ee,e,A]),S=w.exports.useCallback(P=>{ee(),r==null||r(P)},[ee,r]),V=w.exports.useCallback(P=>{m.current=P,p.current!==void 0&&ce(p.current)},[ce]),I=w.exports.useCallback((P,B)=>{x.current[B]=P,p.current===B&&ce(p.current)},[ce]);return w.exports.useEffect(()=>{if(!A)return()=>{};const P=B=>{var G;const Q=B.target;!((G=v.current)===null||G===void 0)&&G.contains(Q)||(B.preventDefault(),ne({focusSelect:!1,fromEvent:B}))};return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[ne,A,v]),w.exports.useMemo(()=>({activeOption:X,handleActivateOptionIndex:T,handleBlur:F,handleButtonKeyDown:R,handleDropdownKeyDown:M,handleFocus:S,handleMouseDown:Y,handleOptionClick:ue,handleSetDropdownRef:V,handleSetOptionRef:I,open:A,selectedOption:_}),[X,T,F,R,S,M,Y,ue,V,I,A,_])},tx=w.exports.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:a,value:l,variant:s,width:u,...f},d)=>{const{isEnabled:c,options:v,setValue:m,value:x,DropdownButton:k,Wrapper:h}=ig({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:l,variant:s}),p=w.exports.useCallback(g=>{const y=v.find(C=>C.value===g.target.value);!y||(m(y.value),r==null||r(y,{fromEvent:g}))},[r,v,m]);return b(h,{className:e,style:{...a,width:u},children:de(Qu,{children:[b(K1,{...f,disabled:n,onChange:c?p:Xn,ref:d,value:x,children:v.map((g,y)=>{var C;return b("option",{value:g.value,children:(C=g.label)!==null&&C!==void 0?C:g.value},`${g.value}-${y}`)})}),k]})})});tx.displayName="SelectNative";function nx({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:a}){const l=w.exports.useCallback(()=>{e(n)},[e,n]),s=w.exports.useCallback(f=>{a(f,n)},[n,a]),u=eg();return b(X1,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:l,ref:s,role:"option",tabIndex:0,children:o.label})}function rx({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:s,name:u,onBlur:f,onChange:d,onClose:c,onFocus:v,onKeyDown:m,onMouseDown:x,onOpen:k,open:h,options:p,readOnly:g,shadow:y=!0,style:C,variant:A="default",value:L,width:_="auto",...X},U){const{isEnabled:ce,options:oe,setValue:se,value:ee,wrapperProps:ne,DropdownButton:ke,Wrapper:le}=ig({className:n,defaultValue:r,disabled:o,native:!1,onChange:d,options:p,style:C,readOnly:g,value:L,variant:A,width:_}),E=w.exports.useRef(null),H=w.exports.useRef(null),Y=w.exports.useRef(null),{activeOption:ue,handleActivateOptionIndex:M,handleBlur:R,handleButtonKeyDown:T,handleDropdownKeyDown:F,handleFocus:S,handleMouseDown:V,handleOptionClick:I,handleSetDropdownRef:P,handleSetOptionRef:B,open:G,selectedOption:Q}=ex({onBlur:f,onChange:d,onClose:c,onFocus:v,onKeyDown:m,onMouseDown:x,onOpen:k,open:h,options:oe,value:ee,selectRef:H,setValue:se,wrapperRef:Y});w.exports.useImperativeHandle(U,()=>({focus:$=>{var N;(N=H.current)===null||N===void 0||N.focus($)},node:E.current,value:String(ee)}),[ee]);const ie=w.exports.useMemo(()=>Q?typeof i=="function"?i(Q):Q.label:"",[i,Q]),fe=ce?1:void 0,Z=w.exports.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),ve=eg(),ae=w.exports.useMemo(()=>oe.map(($,N)=>{const O=`${ee}-${N}`;return b(nx,{activateOptionIndex:M,active:$===ue,index:N,onClick:I,option:$,selected:$===Q,setRef:B},O)}),[ue,M,I,B,oe,Q,ee]);return de(le,{...ne,$disabled:o,ref:Y,shadow:y,style:{...C,width:_},children:[b("input",{name:u,ref:E,type:"hidden",value:String(ee),...a}),de(Qu,{"aria-disabled":o,"aria-expanded":G,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t!=null?t:l,"aria-owns":ce&&G?ve:void 0,onBlur:R,onFocus:S,onKeyDown:T,onMouseDown:ce?V:x,ref:H,role:"button",tabIndex:fe,...X,children:[b(V1,{children:ie}),ke]}),ce&&G&&b(Y1,{id:ve,onKeyDown:F,ref:P,role:"listbox",style:Z,tabIndex:0,variant:A,children:ae})]})}const Ku=w.exports.forwardRef(rx);Ku.displayName="Select";const ox=D.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,na=w.exports.forwardRef(function({children:t,noPadding:n=!1,...r},o){return b(ox,{noPadding:n,ref:o,...r,children:t})});na.displayName="Toolbar";const ix=D.div`
  padding: 16px;
`,ag=w.exports.forwardRef(function({children:t,...n},r){return b(ix,{ref:r,...n,children:t})});ag.displayName="WindowContent";const ax=D.div`
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

  ${Fa} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,lg=w.exports.forwardRef(function({active:t=!0,children:n,...r},o){return b(ax,{active:t,ref:o,...r,children:n})});lg.displayName="WindowHeader";const lx=D.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ne({style:"window"})}
  ${Dt()}
`,sx=D.span`
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
`,sg=w.exports.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>de(lx,{ref:i,shadow:r,...o,children:[e,t&&b(sx,{"data-testid":"resizeHandle",ref:n})]}));sg.displayName="Window";const ux=D(Kh)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,cx=D.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,dx=D.div`
  display: flex;
  flex-wrap: wrap;
`,Wt=D.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,fx=D.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,px=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function hx(e,t){return new Date(e,t+1,0).getDate()}function gx(e,t,n){return new Date(e,t,n).getDay()}function mx(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const vx=w.exports.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[a,l]=w.exports.useState(()=>mx(t)),{year:s,month:u,day:f}=a,d=w.exports.useCallback(({value:k})=>{l(h=>({...h,month:k}))},[]),c=w.exports.useCallback(k=>{l(h=>({...h,year:k}))},[]),v=w.exports.useCallback(k=>{l(h=>({...h,day:k}))},[]),m=w.exports.useCallback(()=>{const k=[a.year,a.month+1,a.day].map(h=>String(h).padStart(2,"0")).join("-");n==null||n(k)},[a.day,a.month,a.year,n]),x=w.exports.useMemo(()=>{const k=Array.from({length:42}),h=gx(s,u,1);let p=f;const g=hx(s,u);return p=p<g?p:g,k.forEach((y,C)=>{if(C>=h&&C<g+h){const A=C-h+1;k[C]=b(Wt,{onClick:()=>{v(A)},children:b(fx,{active:A===p,children:A})},C)}else k[C]=b(Wt,{},C)}),k},[f,v,u,s]);return de(sg,{className:e,ref:i,shadow:o,style:{margin:20},children:[de(lg,{children:[b("span",{role:"img","aria-label":"\u{1F4C6}",children:"\u{1F4C6}"}),"Date"]}),de(ag,{children:[de(na,{noPadding:!0,style:{justifyContent:"space-between"},children:[b(Ku,{options:px,value:u,onChange:d,width:128,menuMaxHeight:200}),b(qh,{value:s,onChange:c,width:100})]}),de(ux,{children:[de(cx,{children:[b(Wt,{children:"S"}),b(Wt,{children:"M"}),b(Wt,{children:"T"}),b(Wt,{children:"W"}),b(Wt,{children:"T"}),b(Wt,{children:"F"}),b(Wt,{children:"S"})]}),b(dx,{children:x})]}),de(na,{noPadding:!0,style:{justifyContent:"space-between"},children:[b(Oo,{fullWidth:!0,onClick:r,disabled:!r,children:"Cancel"}),b(Oo,{fullWidth:!0,onClick:n?m:void 0,disabled:!n,children:"OK"})]})]})]})});vx.displayName="DatePicker";const yx=e=>{switch(e){case"status":case"well":return W`
        ${Ne({style:"status"})}
      `;case"window":case"outside":return W`
        ${Ne({style:"window"})}
      `;case"field":return W`
        ${Ne({style:"field"})}
      `;default:return W`
        ${Ne()}
      `}},xx=D.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>yx(e)}
  ${({variant:e})=>Dt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,wx=w.exports.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>b(xx,{ref:o,shadow:t,variant:n,...r,children:e}));wx.displayName="Frame";const Sx=D.fieldset`
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
`,kx=D.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,bx=w.exports.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>de(Sx,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o,children:[e&&b(kx,{variant:n,children:e}),r]}));bx.displayName="GroupBox";const Cx=D.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${kn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Cx.displayName="Handle";const $x="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Ax=D.div`
  display: inline-block;
  height: ${({size:e})=>kn(e)};
  width: ${({size:e})=>kn(e)};
`,Ex=D.span`
  display: block;
  background: ${$x};
  background-size: cover;
  width: 100%;
  height: 100%;
`,ug=w.exports.forwardRef(({size:e=30,...t},n)=>b(Ax,{size:e,ref:n,...t,children:b(Ex,{})}));ug.displayName="Hourglass";const Rx=D.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Px=D.div`
  position: relative;
`,Lx=D.div`
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
`,Tx=D(Ut).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Nx=D.div`
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
`,Dx=w.exports.forwardRef(({backgroundStyles:e,children:t,...n},r)=>b(Rx,{ref:r,...n,children:de(Px,{children:[b(Lx,{children:b(Tx,{style:e,children:t})}),b(Nx,{})]})}));Dx.displayName="Monitor";const Ox=D.div`
  display: inline-block;
  height: ${Ve.md};
  width: 100%;
`,Ix=D(Ut)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,cg=W`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,zx=D.div`
  position: relative;
  top: 4px;
  ${cg}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,_x=D.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${cg}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Mx=D.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,dg=17,Fx=D.span`
  display: inline-block;
  width: ${dg}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,jx=w.exports.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const a=e?null:`${n}%`,l=w.exports.useRef(null),[s,u]=w.exports.useState([]),f=w.exports.useCallback(()=>{if(!l.current||n===void 0)return;const d=l.current.getBoundingClientRect().width,c=Math.round(n/100*d/dg);u(Array.from({length:c}))},[n]);return w.exports.useEffect(()=>(f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)),[f]),b(Ox,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o,children:b(Ix,{variant:r,shadow:t,children:r==="default"?de(Ah,{children:[b(zx,{"data-testid":"defaultProgress1",children:a}),b(_x,{"data-testid":"defaultProgress2",value:n,children:a})]}):b(Mx,{ref:l,"data-testid":"tileProgress",children:s.map((d,c)=>b(Fx,{},c))})})})});jx.displayName="ProgressBar";const fg=W`
  width: ${jt}px;
  height: ${jt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Bx=D(Ut)`
  ${fg}
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
`,Ux=D.div`
  ${Kn()}
  ${fg}
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
`,Hx=D.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Vx={flat:Ux,default:Bx},Wx=w.exports.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:a="default",...l},s)=>{const u=Vx[a];return de(Hu,{$disabled:n,className:t,style:i,children:[b(u,{$disabled:n,role:"presentation",children:e&&b(Hx,{$disabled:n,variant:a})}),b(ta,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...l}),r&&b(Vu,{children:r})]})});Wx.displayName="Radio";const Qx=typeof window<"u"?w.exports.useLayoutEffect:w.exports.useEffect;function Rn(e){const t=w.exports.useRef(e);return Qx(()=>{t.current=e}),w.exports.useCallback((...n)=>(0,t.current)(...n),[])}function Fd(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function jd(e,t){return w.exports.useMemo(()=>e==null&&t==null?null:n=>{Fd(e,n),Fd(t,n)},[e,t])}let ja=!0,Ps=!1,Bd;const Kx={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Gx(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&Kx[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Yx(e){e.metaKey||e.altKey||e.ctrlKey||(ja=!0)}function kl(){ja=!1}function Xx(){this.visibilityState==="hidden"&&Ps&&(ja=!0)}function Zx(e){e.addEventListener("keydown",Yx,!0),e.addEventListener("mousedown",kl,!0),e.addEventListener("pointerdown",kl,!0),e.addEventListener("touchstart",kl,!0),e.addEventListener("visibilitychange",Xx,!0)}function Jx(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return ja||Gx(t)}function qx(){Ps=!0,window.clearTimeout(Bd),Bd=window.setTimeout(()=>{Ps=!1},100)}function ew(){const e=w.exports.useCallback(t=>{const n=Fs.exports.findDOMNode(t);n!=null&&Zx(n.ownerDocument)},[]);return{isFocusVisible:Jx,onBlurVisible:qx,ref:e}}function tw(e,t,n){return(n-t)*e+t}function ui(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function ci(e){return e&&e.ownerDocument||document}function nw(e,t){var n;const{index:r}=(n=e.reduce((o,i,a)=>{const l=Math.abs(t-i);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!==null&&n!==void 0?n:{};return r!=null?r:-1}const rw=D.div`
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
`,pg=()=>W`
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
`,ow=D(Ut)`
  ${pg()}
`,iw=D(Ut)`
  ${pg()}

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
`,aw=D.span`
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
          ${Kn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:W`
          ${Dt()}
          ${Ne()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Bo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,yr=6,lw=D.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?W`
          right: ${-yr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${yr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:W`
          bottom: ${-yr}px;
          height: ${yr}px;
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
`,sw=D.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?W`
          transform: translate(${yr+2}px, ${yr+1}px);
        `:W`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,uw=w.exports.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:s,orientation:u="horizontal",size:f="100%",step:d=1,value:c,variant:v="default",...m},x)=>{const k=v==="flat"?iw:ow,h=u==="vertical",[p=o,g]=bn({defaultValue:e,onChange:a!=null?a:l,value:c}),{isFocusVisible:y,onBlurVisible:C,ref:A}=ew(),[L,_]=w.exports.useState(!1),X=w.exports.useRef(),U=w.exports.useRef(null),ce=jd(A,X),oe=jd(x,ce),se=Rn(R=>{y(R)&&_(!0)}),ee=Rn(()=>{L!==!1&&(_(!1),C())}),ne=w.exports.useRef(),ke=w.exports.useMemo(()=>n===!0&&Number.isFinite(d)?[...Array(Math.round((r-o)/d)+1)].map((R,T)=>({label:void 0,value:o+d*T})):Array.isArray(n)?n:[],[n,r,o,d]),le=Rn(R=>{const T=(r-o)/10,F=ke.map(I=>I.value),S=F.indexOf(p);let V=0;switch(R.key){case"Home":V=o;break;case"End":V=r;break;case"PageUp":d&&(V=p+T);break;case"PageDown":d&&(V=p-T);break;case"ArrowRight":case"ArrowUp":d?V=p+d:V=F[S+1]||F[F.length-1];break;case"ArrowLeft":case"ArrowDown":d?V=p-d:V=F[S-1]||F[0];break;default:return}R.preventDefault(),d&&(V=zd(V,d,o)),V=In(V,o,r),g(V),_(!0),a==null||a(V),l==null||l(V)}),E=w.exports.useCallback(R=>{if(!X.current)return 0;const T=X.current.getBoundingClientRect();let F;h?F=(T.bottom-R.y)/T.height:F=(R.x-T.left)/T.width;let S;if(S=tw(F,o,r),d)S=zd(S,d,o);else{const V=ke.map(P=>P.value),I=nw(V,S);S=V[I]}return S=In(S,o,r),S},[ke,r,o,d,h]),H=Rn(R=>{var T;const F=ui(R,ne.current);if(!F)return;const S=E(F);(T=U.current)===null||T===void 0||T.focus(),g(S),_(!0),a==null||a(S)}),Y=Rn(R=>{const T=ui(R,ne.current);if(!T)return;const F=E(T);l==null||l(F),ne.current=void 0;const S=ci(X.current);S.removeEventListener("mousemove",H),S.removeEventListener("mouseup",Y),S.removeEventListener("touchmove",H),S.removeEventListener("touchend",Y)}),ue=Rn(R=>{var T;s==null||s(R),R.preventDefault(),(T=U.current)===null||T===void 0||T.focus(),_(!0);const F=ui(R,ne.current);if(F){const V=E(F);g(V),a==null||a(V)}const S=ci(X.current);S.addEventListener("mousemove",H),S.addEventListener("mouseup",Y)}),M=Rn(R=>{var T;R.preventDefault();const F=R.changedTouches[0];F!=null&&(ne.current=F.identifier),(T=U.current)===null||T===void 0||T.focus(),_(!0);const S=ui(R,ne.current);if(S){const I=E(S);g(I),a==null||a(I)}const V=ci(X.current);V.addEventListener("touchmove",H),V.addEventListener("touchend",Y)});return w.exports.useEffect(()=>{const{current:R}=X;R==null||R.addEventListener("touchstart",M);const T=ci(R);return()=>{R==null||R.removeEventListener("touchstart",M),T.removeEventListener("mousemove",H),T.removeEventListener("mouseup",Y),T.removeEventListener("touchmove",H),T.removeEventListener("touchend",Y)}},[Y,H,M]),de(rw,{$disabled:t,hasMarks:Boolean(ke.length),isFocused:L,onMouseDown:ue,orientation:u,ref:oe,size:kn(f),...m,children:[b("input",{disabled:t,name:i,type:"hidden",value:p!=null?p:0}),ke&&ke.map(R=>b(lw,{$disabled:t,"data-testid":"tick",orientation:u,style:{[h?"bottom":"left"]:`${(R.value-o)/(r-o)*100}%`},children:R.label&&b(sw,{"aria-hidden":!0,"data-testid":"mark",orientation:u,children:R.label})},R.value/(r-o)*100)),b(k,{orientation:u,variant:v}),b(aw,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":p,onBlur:ee,onFocus:se,onKeyDown:le,orientation:u,ref:U,role:"slider",style:{[h?"bottom":"left"]:`${(h?-100:0)+100*(p-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:v})]})});uw.displayName="Slider";const cw=D.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Bu};
  overflow-y: auto;
`,dw=w.exports.forwardRef(function({children:t,...n},r){return b(cw,{ref:r,...n,children:t})});dw.displayName="TableBody";const fw=D.td`
  padding: 0 8px;
`,pw=w.exports.forwardRef(function({children:t,...n},r){return b(fw,{ref:r,...n,children:t})});pw.displayName="TableDataCell";const hw=D.thead`
  display: table-header-group;
`,gw=w.exports.forwardRef(function({children:t,...n},r){return b(hw,{ref:r,...n,children:t})});gw.displayName="TableHead";const mw=D.th`
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
`,vw=w.exports.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Xn,sort:i,...a},l){return b(mw,{$disabled:t,"aria-disabled":t,"aria-sort":i==="asc"?"ascending":i==="desc"?"descending":void 0,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:l,...a,children:b("div",{children:n})})});vw.displayName="TableHeadCell";const yw=D.tr`
  color: inherit;
  display: table-row;
  height: calc(${Ve.md} - 2px);
  line-height: calc(${Ve.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,xw=w.exports.forwardRef(function({children:t,...n},r){return b(yw,{ref:r,...n,children:t})});xw.displayName="TableRow";const ww=D.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Sw=D(Ut)`
  &:before {
    box-shadow: none;
  }
`,kw=w.exports.forwardRef(({children:e,...t},n)=>b(Sw,{children:b(ww,{ref:n,...t,children:e})}));kw.displayName="Table";const bw=D.button`
  ${Dt()}
  ${Ne()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Ve.md};
  line-height: ${Ve.md};
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
    ${Ir}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Ve.md} + 4px);
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
`,Cw=w.exports.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>b(bw,{"aria-selected":n,selected:n,onClick:a=>t==null?void 0:t(e,a),ref:i,role:"tab",...o,children:r}));Cw.displayName="Tab";const $w=D.div`
  ${Dt()}
  ${Ne()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Aw=w.exports.forwardRef(({children:e,...t},n)=>b($w,{ref:n,...t,children:e}));Aw.displayName="TabBody";const Ew=D.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,Rw=D.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function Pw(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const Lw=w.exports.forwardRef(({value:e,onChange:t=Xn,children:n,rows:r=1,...o},i)=>{const a=w.exports.useMemo(()=>{var l;const s=(l=Rt.Children.map(n,d=>{if(!Rt.isValidElement(d))return null;const c={selected:d.props.value===e,onClick:t};return Rt.cloneElement(d,c)}))!==null&&l!==void 0?l:[],u=Pw(s,r).map((d,c)=>({key:c,tabs:d})),f=u.findIndex(d=>d.tabs.some(c=>c.props.selected));return u.push(u.splice(f,1)[0]),u},[n,t,r,e]);return b(Ew,{...o,isMultiRow:r>1,role:"tablist",ref:i,children:a.map(l=>b(Rw,{children:l.tabs},l.key))})});Lw.displayName="Tabs";const Tw=["blur","focus"],Nw=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Ud(e){return"nativeEvent"in e&&Tw.includes(e.type)}function Hd(e){return"nativeEvent"in e&&Nw.includes(e.type)}const Dw={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Ow=D.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${ju};
  text-align: center;
  font-size: 1rem;
  ${e=>Dw[e.position]}
`,Iw=D.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,zw=w.exports.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:s,onMouseEnter:u,onMouseLeave:f,onOpen:d,style:c,text:v,position:m="top",...x},k)=>{const[h,p]=w.exports.useState(!1),[g,y]=w.exports.useState(),[C,A]=w.exports.useState(),L=!n,_=!r,X=E=>{window.clearTimeout(g),window.clearTimeout(C);const H=window.setTimeout(()=>{p(!0),d==null||d(E)},o);y(H)},U=E=>{E.persist(),Ud(E)?s==null||s(E):Hd(E)&&(u==null||u(E)),X(E)},ce=E=>{window.clearTimeout(g),window.clearTimeout(C);const H=window.setTimeout(()=>{p(!1),l==null||l(E)},i);A(H)},oe=E=>{E.persist(),Ud(E)?a==null||a(E):Hd(E)&&(f==null||f(E)),ce(E)};return de(Iw,{"data-testid":"tooltip-wrapper",onBlur:L?oe:void 0,onFocus:L?U:void 0,onMouseEnter:_?U:void 0,onMouseLeave:_?oe:void 0,tabIndex:L?0:void 0,children:[b(Ow,{className:e,"data-testid":"tooltip",position:m,ref:k,show:h,style:c,...x,children:v}),t]})});zw.displayName="Tooltip";const Ls=D(Vu)`
  white-space: nowrap;
`,hg=W`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":W`
          cursor: pointer;

          :focus {
            ${Ls} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,_w=D.ul`
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
`,Mw=D.li`
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
`,Fw=D.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,jw=D.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${hg};

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
`,Vd=D(Hu)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${hg};
`,Bw=D.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Wd(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Qd(e){e.preventDefault()}function gg({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:a,style:l,tree:s=[]}){const u=o===0,f=w.exports.useCallback(d=>{var c,v;const m=Boolean(d.items&&d.items.length>0),x=n.includes(d.id),k=(c=t||d.disabled)!==null&&c!==void 0?c:!1,h=k?Qd:C=>i(C,d),p=k?Qd:C=>i(C,d),g=a===d.id,y=b(Bw,{"aria-hidden":!0,children:d.icon});return b(Mw,{isRootLevel:u,role:"treeitem","aria-expanded":x,"aria-selected":g,hasItems:m,children:m?de(Fw,{open:x,children:[b(jw,{onClick:h,$disabled:k,children:de(Vd,{$disabled:k,children:[y,b(Ls,{children:d.label})]})}),x&&b(gg,{className:e,disabled:k,expanded:n,level:o+1,select:i,selected:a,style:l,tree:(v=d.items)!==null&&v!==void 0?v:[]})]}):de(Vd,{as:"button",$disabled:k,onClick:p,children:[y,b(Ls,{children:d.label})]})},d.label)},[e,t,n,u,o,i,a,l]);return b(_w,{className:u?e:void 0,style:u?l:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u,children:s.map(f)})}function Uw({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:l,style:s,tree:u=[]},f){const[d,c]=bn({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[v,m]=bn({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),x=w.exports.useCallback((p,g)=>{if(a){const y=Wd(d,g);a(p,y)}c(y=>Wd(y,g))},[d,a,c]),k=w.exports.useCallback((p,g)=>{m(g),i&&i(p,g)},[i,m]),h=w.exports.useCallback((p,g)=>{p.preventDefault(),k(p,g.id),g.items&&g.items.length&&x(p,g.id)},[k,x]);return b(gg,{className:e,disabled:r,expanded:d,level:0,innerRef:f,select:h,selected:v,style:s,tree:u})}const Hw=w.exports.forwardRef(Uw);Hw.displayName="TreeView";function Vw(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const Kd={};function Ts(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Kd[t[0]]||(typeof t[0]=="string"&&(Kd[t[0]]=new Date),Vw(...t))}const mg=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function Gd(e,t,n){e.loadNamespaces(t,mg(e,n))}function Yd(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,mg(e,r))}function Ww(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],o=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const u=t.services.backendConnector.state[`${l}|${s}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!o||a(i,e)))}function Qw(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(Ts("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(o,i)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!i(o.isLanguageChangingTo,e))return!1}}):Ww(e,t,n)}const Kw=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Gw={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xA9","&#169;":"\xA9","&reg;":"\xAE","&#174;":"\xAE","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},Yw=e=>Gw[e],Xw=e=>e.replace(Kw,Yw);let Ns={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Xw};function Zw(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ns={...Ns,...e}}function Jw(){return Ns}let vg;function qw(e){vg=e}function eS(){return vg}const tS={type:"3rdParty",init(e){Zw(e.options.react),qw(e)}},nS=w.exports.createContext();class rS{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const oS=(e,t)=>{const n=w.exports.useRef();return w.exports.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function yg(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:o}=w.exports.useContext(nS)||{},i=n||r||eS();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new rS),!i){Ts("You will need to pass in an i18next instance by using initReactI18next");const g=(C,A)=>typeof A=="string"?A:A&&typeof A=="object"&&typeof A.defaultValue=="string"?A.defaultValue:Array.isArray(C)?C[C.length-1]:C,y=[g,{},!1];return y.t=g,y.i18n={},y.ready=!1,y}i.options.react&&i.options.react.wait!==void 0&&Ts("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...Jw(),...i.options.react,...t},{useSuspense:l,keyPrefix:s}=a;let u=e||o||i.options&&i.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(u);const f=(i.isInitialized||i.initializedStoreOnce)&&u.every(g=>Qw(g,i,a));function d(){return i.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],s)}const[c,v]=w.exports.useState(d);let m=u.join();t.lng&&(m=`${t.lng}${m}`);const x=oS(m),k=w.exports.useRef(!0);w.exports.useEffect(()=>{const{bindI18n:g,bindI18nStore:y}=a;k.current=!0,!f&&!l&&(t.lng?Yd(i,t.lng,u,()=>{k.current&&v(d)}):Gd(i,u,()=>{k.current&&v(d)})),f&&x&&x!==m&&k.current&&v(d);function C(){k.current&&v(d)}return g&&i&&i.on(g,C),y&&i&&i.store.on(y,C),()=>{k.current=!1,g&&i&&g.split(" ").forEach(A=>i.off(A,C)),y&&i&&y.split(" ").forEach(A=>i.store.off(A,C))}},[i,m]);const h=w.exports.useRef(!0);w.exports.useEffect(()=>{k.current&&!h.current&&v(d),h.current=!1},[i,s]);const p=[c,i,f];if(p.t=c,p.i18n=i,p.ready=f,f||!f&&!l)return p;throw new Promise(g=>{t.lng?Yd(i,t.lng,u,()=>g()):Gd(i,u,()=>g())})}function Ds(e){if(typeof e=="number")return`${e}px`;if(typeof e=="string")return e}const Ai=D.div`
	display: flex;
	flex-direction: ${e=>{var t;return(t=e.direction)!=null?t:"row"}};
	flex-wrap: ${e=>{var t;return(t=e.wrap)!=null?t:"nowrap"}};
	justify-content: ${e=>{var t;return(t=e.justify)!=null?t:"flex-start"}};
	align-items: ${e=>{var t;return(t=e.align)!=null?t:"flex-start"}};
	align-content: ${e=>{var t;return(t=e.alignContent)!=null?t:"flex-start"}};
	gap: ${e=>{var t;return(t=Ds(e.gap))!=null?t:"0px"}};
	${e=>({...e.sx})}
`,ra=D.p`
	display: inline-block;
	font-size: ${e=>e.variant==="title"?"24px":e.variant==="caption"?"10px":"13px"};
	font-weight: ${e=>e.bold?"600":"400"};
	color: ${e=>e.variant==="title"?"#0a0a0a":"#1a1a1a"} !important;
	&::selection {
		background-color: #c6c6c6;
		color: #0a0a0a;
	}
	padding: ${e=>{var t;return(t=Ds(e.p))!=null?t:"0"}};
	margin: ${e=>{var t;return(t=Ds(e.m))!=null?t:"0"}};
`,iS="/assets/logout.ea9945f5.svg",aS="/assets/clock.a4081c19.svg",lS="/assets/react.35ef61ed.svg",sS="_container_1tfge_1",uS="_list_1tfge_6",Xd={container:sS,list:uS};function cS(){const{t:e}=yg("menu"),[t,n]=w.exports.useState(!1);return de("div",{className:Xd.container,children:[de(Oo,{onClick:()=>n(!t),active:t,children:[b("img",{src:lS,className:"icon small",alt:"react logo as start button icon"}),b(ra,{children:e("nav.start")})]}),t&&de(Qh,{className:Xd.list,onClick:()=>n(!1),children:[de(Es,{disabled:!0,"aria-disabled":!0,onClick:()=>{},children:[b("img",{src:aS,className:"icon",alt:"clock icon"})," In Progress"]}),b(Wu,{}),de(Es,{onClick:()=>window.close(),children:[b("img",{src:iS,className:"icon",alt:"arrow pointing out of door, a logout icon"})," ",e("nav.logout")]})]})]})}function dS(){const{i18n:e}=yg(),t=w.exports.useRef(e.languages).current,n=t.indexOf(e.language),r=t.map((o,i)=>({label:`\u{1F310} ${o.toUpperCase()}`,value:i}));return b(Ku,{defaultValue:n,options:r,menuMaxHeight:160,width:110,onChange:o=>e.changeLanguage(t[o.value])})}const fS="_container_yernn_1",pS={container:fS};function hS(){return b("nav",{children:b(Vh,{className:pS.container,children:de(na,{style:{justifyContent:"space-between"},children:[b(cS,{}),b(dS,{})]})})})}const gS="_container_110ok_1",mS="_fadeIn_110ok_8",vS="_main_110ok_14",di={container:gS,fadeIn:mS,"fade-in":"_fade-in_110ok_1",main:vS};function yS(){return b("footer",{})}const xS="_container_1h0cs_1",wS={container:xS},SS=()=>b("main",{className:wS.container,children:de(Ai,{align:"center",gap:8,children:[b(ug,{}),b(ra,{children:"Loading..."})]})});function kS(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}const bS=kS(2500,4e3);function CS(){const[e,t]=w.exports.useState(!0);return w.exports.useEffect(()=>{const n=setTimeout(()=>t(!1),bS);return()=>clearTimeout(n)},[]),e?b("div",{className:di.container,children:b(SS,{})}):de("div",{className:[di.container,di.fadeIn].join(" "),children:[b(hS,{}),b("main",{className:di.main,children:b(iy,{})}),b(yS,{})]})}const $S="/assets/pixelated.6c5743a7.png",AS="/assets/pixelated_c.e5845aaa.png";function ES(e){const[t,n]=w.exports.useState(e||0);return{count:t,increment:()=>n(a=>a+1),decrement:()=>n(a=>a-1),reset:()=>n(e||0),setCount:n}}function RS(){const{count:e,increment:t}=ES(0);return w.exports.useEffect(()=>{const n=setInterval(()=>{t()},150);return()=>clearInterval(n)},[]),b(Wh,{size:80,src:e%10?$S:AS})}const PS="_container_84qnb_1",LS={container:PS},TS=w.exports.memo(()=>b(Ai,{wrap:"wrap",gap:24,justify:"space-around",align:"center",className:LS.container,children:de(Ai,{align:"center",gap:14,children:[b(RS,{}),de(Ai,{direction:"column",children:[b(ra,{bold:!0,variant:"title",children:"Alper Akta\u015F"}),b(ra,{children:"Web Developer"})]})]})})),NS=uy([{path:"/",element:b(CS,{}),children:[{path:"/",element:b(TS,{})},{path:"test",element:b("div",{children:"test"})}]}]),DS=i1`
  ${s1}
`,OS=()=>de(r1,{theme:l1,children:[b(DS,{}),b(oy,{router:NS})]}),IS={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class oa{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||IS,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,o){return o&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new oa(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new oa(this.logger,t)}}var _t=new oa;class Ba{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(!!this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function Zr(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});return n.resolve=e,n.reject=t,n}function Zd(e){return e==null?"":""+e}function zS(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function Gu(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function o(){return!e||typeof e=="string"}const i=typeof t!="string"?[].concat(t):t.split(".");for(;i.length>1;){if(o())return{};const a=r(i.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return o()?{}:{obj:e,k:r(i.shift())}}function Jd(e,t,n){const{obj:r,k:o}=Gu(e,t,Object);r[o]=n}function _S(e,t,n,r){const{obj:o,k:i}=Gu(e,t,Object);o[i]=o[i]||[],r&&(o[i]=o[i].concat(n)),r||o[i].push(n)}function ia(e,t){const{obj:n,k:r}=Gu(e,t);if(!!n)return n[r]}function MS(e,t,n){const r=ia(e,n);return r!==void 0?r:ia(t,n)}function xg(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):xg(e[r],t[r],n):e[r]=t[r]);return e}function nr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var FS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function jS(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>FS[t]):e}const BS=[" ",",","?","!",";"];function US(e,t,n){t=t||"",n=n||"";const r=BS.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const o=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let i=!o.test(e);if(!i){const a=e.indexOf(n);a>0&&!o.test(e.substring(0,a))&&(i=!0)}return i}function aa(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let o=e;for(let i=0;i<r.length;++i){if(!o||typeof o[r[i]]=="string"&&i+1<r.length)return;if(o[r[i]]===void 0){let a=2,l=r.slice(i,i+a).join(n),s=o[l];for(;s===void 0&&r.length>i+a;)a++,l=r.slice(i,i+a).join(n),s=o[l];if(s===void 0)return;if(s===null)return null;if(t.endsWith(l)){if(typeof s=="string")return s;if(l&&typeof s[l]=="string")return s[l]}const u=r.slice(i+a).join(n);return u?aa(s,u,n):void 0}o=o[r[i]]}return o}function la(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class qd extends Ba{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,a=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let l=[t,n];r&&typeof r!="string"&&(l=l.concat(r)),r&&typeof r=="string"&&(l=l.concat(i?r.split(i):r)),t.indexOf(".")>-1&&(l=t.split("."));const s=ia(this.data,l);return s||!a||typeof r!="string"?s:aa(this.data&&this.data[t]&&this.data[t][n],r,i)}addResource(t,n,r,o){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=[t,n];r&&(l=l.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(l=t.split("."),o=n,n=l[1]),this.addNamespaces(n),Jd(this.data,l,o),i.silent||this.emit("added",t,n,r,o)}addResources(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const i in r)(typeof r[i]=="string"||Object.prototype.toString.apply(r[i])==="[object Array]")&&this.addResource(t,n,i,r[i],{silent:!0});o.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,o,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},l=[t,n];t.indexOf(".")>-1&&(l=t.split("."),o=r,r=n,n=l[1]),this.addNamespaces(n);let s=ia(this.data,l)||{};o?xg(s,r,i):s={...s,...r},Jd(this.data,l,s),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var wg={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach(i=>{this.processors[i]&&(t=this.processors[i].process(t,n,r,o))}),t}};const ef={};class sa extends Ba{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),zS(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=_t.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let i=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,l=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!US(t,r,o);if(a&&!l){const s=t.match(this.interpolator.nestingRegexp);if(s&&s.length>0)return{key:t,namespaces:i};const u=t.split(r);(r!==o||r===o&&this.options.ns.indexOf(u[0])>-1)&&(i=u.shift()),t=u.join(o)}return typeof i=="string"&&(i=[i]),{key:t,namespaces:i}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(t[t.length-1],n),s=l[l.length-1],u=n.lng||this.language,f=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(f){const y=n.nsSeparator||this.options.nsSeparator;return o?{res:`${s}${y}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:`${s}${y}${a}`}return o?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:a}const d=this.resolve(t,n);let c=d&&d.res;const v=d&&d.usedKey||a,m=d&&d.exactUsedKey||a,x=Object.prototype.toString.apply(c),k=["[object Number]","[object Function]","[object RegExp]"],h=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&c&&(typeof c!="string"&&typeof c!="boolean"&&typeof c!="number")&&k.indexOf(x)<0&&!(typeof h=="string"&&x==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const y=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,c,{...n,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return o?(d.res=y,d.usedParams=this.getUsedParamsDetails(n),d):y}if(i){const y=x==="[object Array]",C=y?[]:{},A=y?m:v;for(const L in c)if(Object.prototype.hasOwnProperty.call(c,L)){const _=`${A}${i}${L}`;C[L]=this.translate(_,{...n,joinArrays:!1,ns:l}),C[L]===_&&(C[L]=c[L])}c=C}}else if(p&&typeof h=="string"&&x==="[object Array]")c=c.join(h),c&&(c=this.extendTranslation(c,t,n,r));else{let y=!1,C=!1;const A=n.count!==void 0&&typeof n.count!="string",L=sa.hasDefaultValue(n),_=A?this.pluralResolver.getSuffix(u,n.count,n):"",X=n.ordinal&&A?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",U=n[`defaultValue${_}`]||n[`defaultValue${X}`]||n.defaultValue;!this.isValidLookup(c)&&L&&(y=!0,c=U),this.isValidLookup(c)||(C=!0,c=a);const oe=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&C?void 0:c,se=L&&U!==c&&this.options.updateMissing;if(C||y||se){if(this.logger.log(se?"updateKey":"missingKey",u,s,a,se?U:c),i){const le=this.resolve(a,{...n,keySeparator:!1});le&&le.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ee=[];const ne=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ne&&ne[0])for(let le=0;le<ne.length;le++)ee.push(ne[le]);else this.options.saveMissingTo==="all"?ee=this.languageUtils.toResolveHierarchy(n.lng||this.language):ee.push(n.lng||this.language);const ke=(le,E,H)=>{const Y=L&&H!==c?H:oe;this.options.missingKeyHandler?this.options.missingKeyHandler(le,s,E,Y,se,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(le,s,E,Y,se,n),this.emit("missingKey",le,s,E,c)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?ee.forEach(le=>{this.pluralResolver.getSuffixes(le,n).forEach(E=>{ke([le],a+E,n[`defaultValue${E}`]||U)})}):ke(ee,a,U))}c=this.extendTranslation(c,t,n,d,r),C&&c===a&&this.options.appendNamespaceToMissingKey&&(c=`${s}:${a}`),(C||y)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?c=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}:${a}`:a,y?c:void 0):c=this.options.parseMissingKeyHandler(c))}return o?(d.res=c,d.usedParams=this.getUsedParamsDetails(n),d):c}extendTranslation(t,n,r,o,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(u){const c=t.match(this.interpolator.nestingRegexp);f=c&&c.length}let d=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,r.lng||this.language,r),u){const c=t.match(this.interpolator.nestingRegexp),v=c&&c.length;f<v&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(r.lng=o.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var c=arguments.length,v=new Array(c),m=0;m<c;m++)v[m]=arguments[m];return i&&i[0]===v[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`),null):a.translate(...v,n)},r)),r.interpolation&&this.interpolator.reset()}const l=r.postProcess||this.options.postProcess,s=typeof l=="string"?[l]:l;return t!=null&&s&&s.length&&r.applyPostProcessor!==!1&&(t=wg.handle(s,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,i,a,l;return typeof t=="string"&&(t=[t]),t.forEach(s=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(s,n),f=u.key;o=f;let d=u.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const c=n.count!==void 0&&typeof n.count!="string",v=c&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),m=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",x=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(k=>{this.isValidLookup(r)||(l=k,!ef[`${x[0]}-${k}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(l)&&(ef[`${x[0]}-${k}`]=!0,this.logger.warn(`key "${o}" for languages "${x.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(h=>{if(this.isValidLookup(r))return;a=h;const p=[f];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,f,h,k,n);else{let y;c&&(y=this.pluralResolver.getSuffix(h,n.count,n));const C=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(p.push(f+y),n.ordinal&&y.indexOf(A)===0&&p.push(f+y.replace(A,this.options.pluralSeparator)),v&&p.push(f+C)),m){const L=`${f}${this.options.contextSeparator}${n.context}`;p.push(L),c&&(p.push(L+y),n.ordinal&&y.indexOf(A)===0&&p.push(L+y.replace(A,this.options.pluralSeparator)),v&&p.push(L+C))}}let g;for(;g=p.pop();)this.isValidLookup(r)||(i=g,r=this.getResource(h,k,g,n))}))})}),{res:r,usedKey:o,exactUsedKey:i,usedLng:a,usedNS:l}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,o):this.resourceStore.getResource(t,n,r,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&typeof t.replace!="string";let o=r?t.replace:t;if(r&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const i of n)delete o[i]}return o}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function bl(e){return e.charAt(0).toUpperCase()+e.slice(1)}class tf{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=_t.create("languageUtils")}getScriptPartFromCode(t){if(t=la(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=la(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(o=>o.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=bl(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=bl(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=bl(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(i=>{if(i===o)return i;if(!(i.indexOf("-")<0&&o.indexOf("-")<0)&&i.indexOf(o)===0)return i})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],i=a=>{!a||(this.isSupportedCode(a)?o.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(t))):typeof t=="string"&&i(this.formatLanguageCode(t)),r.forEach(a=>{o.indexOf(a)<0&&i(this.formatLanguageCode(a))}),o}}let HS=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],VS={1:function(e){return Number(e>1)},2:function(e){return Number(e!=1)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)},7:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(e==1?0:e==2?1:e!=8&&e!=11?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(e==1?0:e==2?1:e<7?2:e<11?3:4)},11:function(e){return Number(e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(e!==0)},14:function(e){return Number(e==1?0:e==2?1:e==3?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:e!==0?1:2)},17:function(e){return Number(e==1||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(e==0?0:e==1?1:2)},19:function(e){return Number(e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(e==1?0:e==0||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3)}};const WS=["v1","v2","v3"],QS=["v4"],nf={zero:0,one:1,two:2,few:3,many:4,other:5};function KS(){const e={};return HS.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:VS[t.fc]}})}),e}class GS{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=_t.create("pluralResolver"),(!this.options.compatibilityJSON||QS.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=KS()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(la(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(o=>`${n}${o}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((o,i)=>nf[o]-nf[i]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):r.numbers.map(o=>this.getSuffix(t,o,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,r);return o?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:this.getSuffixRetroCompatible(o,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let o=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const i=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:i():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?i():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!WS.includes(this.options.compatibilityJSON)}}function rf(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,i=MS(e,t,n);return!i&&o&&typeof n=="string"&&(i=aa(e,n,r),i===void 0&&(i=aa(t,n,r))),i}class YS{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=_t.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:jS,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?nr(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?nr(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?nr(n.nestingPrefix):n.nestingPrefixEscaped||nr("$t("),this.nestingSuffix=n.nestingSuffix?nr(n.nestingSuffix):n.nestingSuffixEscaped||nr(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,o){let i,a,l;const s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(m){return m.replace(/\$/g,"$$$$")}const f=m=>{if(m.indexOf(this.formatSeparator)<0){const p=rf(n,s,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...o,...n,interpolationkey:m}):p}const x=m.split(this.formatSeparator),k=x.shift().trim(),h=x.join(this.formatSeparator).trim();return this.format(rf(n,s,k,this.options.keySeparator,this.options.ignoreJSONStructure),h,r,{...o,...n,interpolationkey:k})};this.resetRegExp();const d=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,c=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>u(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?u(this.escape(m)):u(m)}].forEach(m=>{for(l=0;i=m.regex.exec(t);){const x=i[1].trim();if(a=f(x),a===void 0)if(typeof d=="function"){const h=d(t,i,o);a=typeof h=="string"?h:""}else if(o&&Object.prototype.hasOwnProperty.call(o,x))a="";else if(c){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=Zd(a));const k=m.safeValue(a);if(t=t.replace(i[0],k),c?(m.regex.lastIndex+=a.length,m.regex.lastIndex-=i[0].length):m.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,i,a;function l(s,u){const f=this.nestingOptionsSeparator;if(s.indexOf(f)<0)return s;const d=s.split(new RegExp(`${f}[ ]*{`));let c=`{${d[1]}`;s=d[0],c=this.interpolate(c,a);const v=c.match(/'/g),m=c.match(/"/g);(v&&v.length%2===0&&!m||m.length%2!==0)&&(c=c.replace(/'/g,'"'));try{a=JSON.parse(c),u&&(a={...u,...a})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${s}`,x),`${s}${f}${c}`}return delete a.defaultValue,s}for(;o=this.nestingRegexp.exec(t);){let s=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const f=o[1].split(this.formatSeparator).map(d=>d.trim());o[1]=f.shift(),s=f,u=!0}if(i=n(l.call(this,o[1].trim(),a),a),i&&o[0]===t&&typeof i!="string")return i;typeof i!="string"&&(i=Zd(i)),i||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),i=""),u&&(i=s.reduce((f,d)=>this.format(f,d,r.lng,{...r,interpolationkey:o[1].trim()}),i.trim())),t=t.replace(o[0],i),this.regexp.lastIndex=0}return t}}function XS(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);t==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(a=>{if(!a)return;const[l,...s]=a.split(":"),u=s.join(":").trim().replace(/^'+|'+$/g,"");n[l.trim()]||(n[l.trim()]=u),u==="false"&&(n[l.trim()]=!1),u==="true"&&(n[l.trim()]=!0),isNaN(u)||(n[l.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function rr(e){const t={};return function(r,o,i){const a=o+JSON.stringify(i);let l=t[a];return l||(l=e(la(o),i),t[a]=l),l(r)}}class ZS{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=_t.create("formatter"),this.options=t,this.formats={number:rr((n,r)=>{const o=new Intl.NumberFormat(n,{...r});return i=>o.format(i)}),currency:rr((n,r)=>{const o=new Intl.NumberFormat(n,{...r,style:"currency"});return i=>o.format(i)}),datetime:rr((n,r)=>{const o=new Intl.DateTimeFormat(n,{...r});return i=>o.format(i)}),relativetime:rr((n,r)=>{const o=new Intl.RelativeTimeFormat(n,{...r});return i=>o.format(i,r.range||"day")}),list:rr((n,r)=>{const o=new Intl.ListFormat(n,{...r});return i=>o.format(i)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=rr(n)}format(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((l,s)=>{const{formatName:u,formatOptions:f}=XS(s);if(this.formats[u]){let d=l;try{const c=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},v=c.locale||c.lng||o.locale||o.lng||r;d=this.formats[u](l,v,{...f,...o,...c})}catch(c){this.logger.warn(c)}return d}else this.logger.warn(`there was no format function for ${u}`);return l},t)}}function JS(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class qS extends Ba{constructor(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=_t.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,o.backend,o)}queueLoad(t,n,r,o){const i={},a={},l={},s={};return t.forEach(u=>{let f=!0;n.forEach(d=>{const c=`${u}|${d}`;!r.reload&&this.store.hasResourceBundle(u,d)?this.state[c]=2:this.state[c]<0||(this.state[c]===1?a[c]===void 0&&(a[c]=!0):(this.state[c]=1,f=!1,a[c]===void 0&&(a[c]=!0),i[c]===void 0&&(i[c]=!0),s[d]===void 0&&(s[d]=!0)))}),f||(l[u]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(s)}}loaded(t,n,r){const o=t.split("|"),i=o[0],a=o[1];n&&this.emit("failedLoading",i,a,n),r&&this.store.addResourceBundle(i,a,r),this.state[t]=n?-1:2;const l={};this.queue.forEach(s=>{_S(s.loaded,[i],a),JS(s,t),n&&s.errors.push(n),s.pendingCount===0&&!s.done&&(Object.keys(s.loaded).forEach(u=>{l[u]||(l[u]={});const f=s.loaded[u];f.length&&f.forEach(d=>{l[u][d]===void 0&&(l[u][d]=!0)})}),s.done=!0,s.errors.length?s.callback(s.errors):s.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(s=>!s.done)}read(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:o,wait:i,callback:a});return}this.readingCalls++;const l=(u,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(u&&f&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,o+1,i*2,a)},i);return}a(u,f)},s=this.backend[r].bind(this.backend);if(s.length===2){try{const u=s(t,n);u&&typeof u.then=="function"?u.then(f=>l(null,f)).catch(l):l(null,u)}catch(u){l(u)}return}return s(t,n,l)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const i=this.queueLoad(t,n,r,o);if(!i.toLoad.length)return i.pending.length||o(),null;i.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),o=r[0],i=r[1];this.read(o,i,"read",void 0,void 0,(a,l)=>{a&&this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`,a),!a&&l&&this.logger.log(`${n}loaded namespace ${i} for language ${o}`,l),this.loaded(t,a,l)})}saveMissing(t,n,r,o,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const s={...a,isUpdate:i},u=this.backend.create.bind(this.backend);if(u.length<6)try{let f;u.length===5?f=u(t,n,r,o,s):f=u(t,n,r,o),f&&typeof f.then=="function"?f.then(d=>l(null,d)).catch(l):l(null,f)}catch(f){l(f)}else u(t,n,r,o,l,s)}!t||!t[0]||this.store.addResource(t[0],n,r,o)}}}function of(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(o=>{n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function af(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function fi(){}function ek(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Io extends Ba{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=af(t),this.services={},this.logger=_t,this.modules={external:[]},ek(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=of();this.options={...o,...this.options,...af(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function i(f){return f?typeof f=="function"?new f:f:null}if(!this.options.isClone){this.modules.logger?_t.init(i(this.modules.logger),this.options):_t.init(null,this.options);let f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=ZS);const d=new tf(this.options);this.store=new qd(this.options.resources,this.options);const c=this.services;c.logger=_t,c.resourceStore=this.store,c.languageUtils=d,c.pluralResolver=new GS(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(c.formatter=i(f),c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new YS(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new qS(i(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",function(v){for(var m=arguments.length,x=new Array(m>1?m-1:0),k=1;k<m;k++)x[k-1]=arguments[k];t.emit(v,...x)}),this.modules.languageDetector&&(c.languageDetector=i(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=i(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new sa(this.services,this.options),this.translator.on("*",function(v){for(var m=arguments.length,x=new Array(m>1?m-1:0),k=1;k<m;k++)x[k-1]=arguments[k];t.emit(v,...x)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,r||(r=fi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(f=>{this[f]=function(){return t.store[f](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(f=>{this[f]=function(){return t.store[f](...arguments),t}});const s=Zr(),u=()=>{const f=(d,c)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(c),r(d,c)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return f(null,this.t.bind(this));this.changeLanguage(this.options.lng,f)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),s}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fi;const o=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const i=[],a=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(u=>{u!=="cimode"&&i.indexOf(u)<0&&i.push(u)})};o?a(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(s=>a(s)),this.options.preload&&this.options.preload.forEach(l=>a(l)),this.services.backendConnector.load(i,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(l)})}else r(null)}reloadResources(t,n,r){const o=Zr();return t||(t=this.languages),n||(n=this.options.ns),r||(r=fi),this.services.backendConnector.reload(t,n,i=>{o.resolve(),r(i)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&wg.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const o=Zr();this.emit("languageChanging",t);const i=s=>{this.language=s,this.languages=this.services.languageUtils.toResolveHierarchy(s),this.resolvedLanguage=void 0,this.setResolvedLanguage(s)},a=(s,u)=>{u?(i(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),n&&n(s,function(){return r.t(...arguments)})},l=s=>{!t&&!s&&this.services.languageDetector&&(s=[]);const u=typeof s=="string"?s:this.services.languageUtils.getBestMatchFromCodes(s);u&&(this.language||i(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,f=>{a(f,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(t),o}getFixedT(t,n,r){var o=this;const i=function(a,l){let s;if(typeof l!="object"){for(var u=arguments.length,f=new Array(u>2?u-2:0),d=2;d<u;d++)f[d-2]=arguments[d];s=o.options.overloadTranslationOptionHandler([a,l].concat(f))}else s={...l};s.lng=s.lng||i.lng,s.lngs=s.lngs||i.lngs,s.ns=s.ns||i.ns,s.keyPrefix=s.keyPrefix||r||i.keyPrefix;const c=o.options.keySeparator||".";let v;return s.keyPrefix&&Array.isArray(a)?v=a.map(m=>`${s.keyPrefix}${c}${m}`):v=s.keyPrefix?`${s.keyPrefix}${c}${a}`:a,o.t(v,s)};return typeof t=="string"?i.lng=t:i.lngs=t,i.ns=n,i.keyPrefix=r,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const u=this.services.backendConnector.state[`${l}|${s}`];return u===-1||u===2};if(n.precheck){const l=n.precheck(this,a);if(l!==void 0)return l}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!o||a(i,t)))}loadNamespaces(t,n){const r=Zr();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=Zr();typeof t=="string"&&(t=[t]);const o=this.options.preload||[],i=t.filter(a=>o.indexOf(a)<0);return i.length?(this.options.preload=o.concat(i),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new tf(of());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Io(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fi;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},i=new Io(o);return(t.debug!==void 0||t.prefix!==void 0)&&(i.logger=i.logger.clone(t)),["store","services","language"].forEach(l=>{i[l]=this[l]}),i.services={...this.services},i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},r&&(i.store=new qd(this.store.data,o),i.services.resourceStore=i.store),i.translator=new sa(i.services,o),i.translator.on("*",function(l){for(var s=arguments.length,u=new Array(s>1?s-1:0),f=1;f<s;f++)u[f-1]=arguments[f];i.emit(l,...u)}),i.init(o,n),i.translator.options=o,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Je=Io.createInstance();Je.createInstance=Io.createInstance;Je.createInstance;Je.dir;Je.init;Je.loadResources;Je.reloadResources;Je.use;Je.changeLanguage;Je.getFixedT;Je.t;Je.exists;Je.setDefaultNamespace;Je.hasLoadedNamespace;Je.loadNamespaces;Je.loadLanguages;var Os=(e=>(e.TURKISH="tr",e.ENGLISH="en",e))(Os||{});const tk={},nk={"about-current-job":"\u015Eu anda, Etstur'da Yaz\u0131l\u0131m Geli\u015Ftirme Uzman Yard\u0131mc\u0131s\u0131 olarak \xE7al\u0131\u015F\u0131yorum. \u015Eirketin React bazl\u0131 B2B web uygulamar\u0131n\u0131n geli\u015Ftirilmesinde rol al\u0131yorum.","about-experience":"Yaz\u0131l\u0131m geli\u015Ftirmeye olduk\xE7a ilgi duydu\u011Fum i\xE7in, hedefledi\u011Fim kariyere \xF6\u011Frencilik d\xF6nemimde online i\xE7erikler t\xFCketerek ile ve HackerRank vb. sitelerde testler \xE7\xF6zerek yat\u0131r\u0131m yapt\u0131m.","about-me":"Ege \xDCniversitesi, \u0130ngiliz Dili ve Edebiyat\u0131 mezunuyum.","about-preferences":"Genel olarak web uygulamalar\u0131n\u0131 TypeScript ve React.js ile geli\u015Ftirmeyi tercih ediyorum. Geli\u015Ftirdi\u011Fim uygulamalar\u0131 ise Vitest ve react-testing-library ile, bazen de projeye g\xF6re Playwright ile de test ediyorum."},rk={introduction:nk},ok={logout:"\xC7\u0131k\u0131\u015F",start:"Ba\u015Flat"},ik={},ak={nav:ok,window:ik},lk={},sk={"about-current-job":"Currently, I work at Etstur as a Software Development Assistant and I participate in developing React-based B2B web applications.","about-experience":"Because of my profound interest in software development, I studied software through online content and solved test cases on websites like HackerRank to invest into the career that I desired to have during my studentship.","about-me":"I am an English Language and Literature graduate from Ege University.","about-preferences":"I generally prefer developing apps with TypeScript and React. Additionally, I write tests using Vitest and react-testing-library, and depending on the project I may use Playwright as well."},uk={introduction:sk},ck={logout:"Logout",start:"Start"},dk={},fk={nav:ck,window:dk},Sg=["general","menu","content"],pk=Sg[0],hk={tr:{general:tk,content:rk,menu:ak},en:{general:lk,content:uk,menu:fk}},gk={lng:Os.TURKISH,fallbackLng:Object.values(Os),debug:!1,resources:hk,ns:Sg,defaultNS:pk};Je.use(tS).init(gk);$l.createRoot(document.getElementById("root")).render(b(Rt.StrictMode,{children:b(OS,{})}));
