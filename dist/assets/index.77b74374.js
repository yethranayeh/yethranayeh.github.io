function Xg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Zg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Rb(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var y={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),Jg=Symbol.for("react.portal"),qg=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),rm=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),am=Symbol.for("react.memo"),lm=Symbol.for("react.lazy"),pc=Symbol.iterator;function sm(e){return e===null||typeof e!="object"?null:(e=pc&&e[pc]||e["@@iterator"],typeof e=="function"?e:null)}var Cf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Af=Object.assign,Ef={};function jr(e,t,n){this.props=e,this.context=t,this.refs=Ef,this.updater=n||Cf}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lf(){}Lf.prototype=jr.prototype;function Ys(e,t,n){this.props=e,this.context=t,this.refs=Ef,this.updater=n||Cf}var Xs=Ys.prototype=new Lf;Xs.constructor=Ys;Af(Xs,jr.prototype);Xs.isPureReactComponent=!0;var hc=Array.isArray,Rf=Object.prototype.hasOwnProperty,Zs={current:null},Pf={key:!0,ref:!0,__self:!0,__source:!0};function Tf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Rf.call(t,r)&&!Pf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Uo,type:e,key:i,ref:a,props:o,_owner:Zs.current}}function um(e,t){return{$$typeof:Uo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Js(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uo}function cm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gc=/\/+/g;function Ja(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cm(""+e.key):t.toString(36)}function Si(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Uo:case Jg:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ja(a,0):r,hc(o)?(n="",e!=null&&(n=e.replace(gc,"$&/")+"/"),Si(o,t,n,"",function(u){return u})):o!=null&&(Js(o)&&(o=um(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(gc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",hc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Ja(i,l);a+=Si(i,t,n,s,o)}else if(s=sm(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Ja(i,l++),a+=Si(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Xo(e,t,n){if(e==null)return e;var r=[],o=0;return Si(e,r,"","",function(i){return t.call(n,i,o++)}),r}function dm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},ki={transition:null},fm={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:ki,ReactCurrentOwner:Zs};he.Children={map:Xo,forEach:function(e,t,n){Xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xo(e,function(){t++}),t},toArray:function(e){return Xo(e,function(t){return t})||[]},only:function(e){if(!Js(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=jr;he.Fragment=qg;he.Profiler=tm;he.PureComponent=Ys;he.StrictMode=em;he.Suspense=im;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fm;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Af({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Zs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Rf.call(t,s)&&!Pf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Uo,type:e.type,key:o,ref:i,props:r,_owner:a}};he.createContext=function(e){return e={$$typeof:rm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nm,_context:e},e.Consumer=e};he.createElement=Tf;he.createFactory=function(e){var t=Tf.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:om,render:e}};he.isValidElement=Js;he.lazy=function(e){return{$$typeof:lm,_payload:{_status:-1,_result:e},_init:dm}};he.memo=function(e,t){return{$$typeof:am,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=ki.transition;ki.transition={};try{e()}finally{ki.transition=t}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(e,t){return tt.current.useCallback(e,t)};he.useContext=function(e){return tt.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};he.useEffect=function(e,t){return tt.current.useEffect(e,t)};he.useId=function(){return tt.current.useId()};he.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return tt.current.useMemo(e,t)};he.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};he.useRef=function(e){return tt.current.useRef(e)};he.useState=function(e){return tt.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return tt.current.useTransition()};he.version="18.2.0";(function(e){e.exports=he})(y);const Lt=Zg(y.exports),Ol=Xg({__proto__:null,default:Lt},[y.exports]);var _l={},qs={exports:{}},pt={},Nf={exports:{}},Df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,H){var Y=E.length;E.push(H);e:for(;0<Y;){var ce=Y-1>>>1,z=E[ce];if(0<o(z,H))E[ce]=H,E[Y]=z,Y=ce;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var H=E[0],Y=E.pop();if(Y!==H){E[0]=Y;e:for(var ce=0,z=E.length,L=z>>>1;ce<L;){var T=2*(ce+1)-1,F=E[T],k=T+1,V=E[k];if(0>o(F,Y))k<z&&0>o(V,F)?(E[ce]=V,E[k]=Y,ce=k):(E[ce]=F,E[T]=Y,ce=T);else if(k<z&&0>o(V,Y))E[ce]=V,E[k]=Y,ce=k;else break e}}return H}function o(E,H){var Y=E.sortIndex-H.sortIndex;return Y!==0?Y:E.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,d=null,c=3,v=!1,m=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=E)r(u),H.sortIndex=H.expirationTime,t(s,H);else break;H=n(u)}}function x(E){if(w=!1,g(E),!m)if(n(s)!==null)m=!0,ke($);else{var H=n(u);H!==null&&se(x,H.startTime-E)}}function $(E,H){m=!1,w&&(w=!1,h(M),M=-1),v=!0;var Y=c;try{for(g(H),d=n(s);d!==null&&(!(d.expirationTime>H)||E&&!de());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,c=d.priorityLevel;var z=ce(d.expirationTime<=H);H=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),g(H)}else r(s);d=n(s)}if(d!==null)var L=!0;else{var T=n(u);T!==null&&se(x,T.startTime-H),L=!1}return L}finally{d=null,c=Y,v=!1}}var A=!1,P=null,M=-1,X=5,U=-1;function de(){return!(e.unstable_now()-U<X)}function ie(){if(P!==null){var E=e.unstable_now();U=E;var H=!0;try{H=P(!0,E)}finally{H?ue():(A=!1,P=null)}}else A=!1}var ue;if(typeof p=="function")ue=function(){p(ie)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,re=ee.port2;ee.port1.onmessage=ie,ue=function(){re.postMessage(null)}}else ue=function(){b(ie,0)};function ke(E){P=E,A||(A=!0,ue())}function se(E,H){M=b(function(){E(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){m||v||(m=!0,ke($))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(c){case 1:case 2:case 3:var H=3;break;default:H=c}var Y=c;c=H;try{return E()}finally{c=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var Y=c;c=E;try{return H()}finally{c=Y}},e.unstable_scheduleCallback=function(E,H,Y){var ce=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ce+Y:ce):Y=ce,E){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=Y+z,E={id:f++,callback:H,priorityLevel:E,startTime:Y,expirationTime:z,sortIndex:-1},Y>ce?(E.sortIndex=Y,t(u,E),n(s)===null&&E===n(u)&&(w?(h(M),M=-1):w=!0,se(x,Y-ce))):(E.sortIndex=z,t(s,E),m||v||(m=!0,ke($))),E},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(E){var H=c;return function(){var Y=c;c=H;try{return E.apply(this,arguments)}finally{c=Y}}}})(Df);(function(e){e.exports=Df})(Nf);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If=y.exports,ft=Nf.exports;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Of=new Set,ko={};function Zn(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(ko[e]=t,e=0;e<t.length;e++)Of.add(t[e])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ml=Object.prototype.hasOwnProperty,pm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mc={},vc={};function hm(e){return Ml.call(vc,e)?!0:Ml.call(mc,e)?!1:pm.test(e)?vc[e]=!0:(mc[e]=!0,!1)}function gm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mm(e,t,n,r){if(t===null||typeof t>"u"||gm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var eu=/[\-:]([a-z])/g;function tu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eu,tu);We[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eu,tu);We[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eu,tu);We[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function nu(e,t,n,r){var o=We.hasOwnProperty(t)?We[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mm(t,n,o,r)&&(n=null),r||o===null?hm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),_f=Symbol.for("react.provider"),Mf=Symbol.for("react.context"),ou=Symbol.for("react.forward_ref"),Fl=Symbol.for("react.suspense"),jl=Symbol.for("react.suspense_list"),iu=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),zf=Symbol.for("react.offscreen"),yc=Symbol.iterator;function Wr(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,qa;function io(e){if(qa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qa=t&&t[1]||""}return`
`+qa+e}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{el=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?io(e):""}function vm(e){switch(e.tag){case 5:return io(e.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return e=tl(e.type,!1),e;case 11:return e=tl(e.type.render,!1),e;case 1:return e=tl(e.type,!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case sr:return"Portal";case zl:return"Profiler";case ru:return"StrictMode";case Fl:return"Suspense";case jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mf:return(e.displayName||"Context")+".Consumer";case _f:return(e._context.displayName||"Context")+".Provider";case ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case iu:return t=e.displayName||null,t!==null?t:Bl(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Bl(e(t))}catch{}}return null}function ym(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(t);case 8:return t===ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xm(e){var t=Ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jo(e){e._valueTracker||(e._valueTracker=xm(e))}function jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function xc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bf(e,t){t=t.checked,t!=null&&nu(e,"checked",t,!1)}function Hl(e,t){Bf(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vl(e,t,n){(t!=="number"||Ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ao=Array.isArray;function br(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ao(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function Uf(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qo,Vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wm=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(e){wm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),co[t]=co[e]})});function Wf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||co.hasOwnProperty(e)&&co[e]?(""+t).trim():t+"px"}function Qf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Wf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Sm=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(e,t){if(t){if(Sm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xl=null,$r=null,Cr=null;function bc(e){if(e=Wo(e)){if(typeof Xl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Sa(t),Xl(e.stateNode,e.type,t))}}function Kf(e){$r?Cr?Cr.push(e):Cr=[e]:$r=e}function Gf(){if($r){var e=$r,t=Cr;if(Cr=$r=null,bc(e),t)for(e=0;e<t.length;e++)bc(t[e])}}function Yf(e,t){return e(t)}function Xf(){}var nl=!1;function Zf(e,t,n){if(nl)return e(t,n);nl=!0;try{return Yf(e,t,n)}finally{nl=!1,($r!==null||Cr!==null)&&(Xf(),Gf())}}function $o(e,t){var n=e.stateNode;if(n===null)return null;var r=Sa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Zl=!1;if(Zt)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Zl=!1}function km(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var fo=!1,Oi=null,_i=!1,Jl=null,bm={onError:function(e){fo=!0,Oi=e}};function $m(e,t,n,r,o,i,a,l,s){fo=!1,Oi=null,km.apply(bm,arguments)}function Cm(e,t,n,r,o,i,a,l,s){if($m.apply(this,arguments),fo){if(fo){var u=Oi;fo=!1,Oi=null}else throw Error(_(198));_i||(_i=!0,Jl=u)}}function Jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $c(e){if(Jn(e)!==e)throw Error(_(188))}function Am(e){var t=e.alternate;if(!t){if(t=Jn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return $c(o),e;if(i===r)return $c(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function qf(e){return e=Am(e),e!==null?ep(e):null}function ep(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ep(e);if(t!==null)return t;e=e.sibling}return null}var tp=ft.unstable_scheduleCallback,Cc=ft.unstable_cancelCallback,Em=ft.unstable_shouldYield,Lm=ft.unstable_requestPaint,De=ft.unstable_now,Rm=ft.unstable_getCurrentPriorityLevel,lu=ft.unstable_ImmediatePriority,np=ft.unstable_UserBlockingPriority,Mi=ft.unstable_NormalPriority,Pm=ft.unstable_LowPriority,rp=ft.unstable_IdlePriority,va=null,zt=null;function Tm(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(va,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:Im,Nm=Math.log,Dm=Math.LN2;function Im(e){return e>>>=0,e===0?32:31-(Nm(e)/Dm|0)|0}var ei=64,ti=4194304;function lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=lo(l):(i&=a,i!==0&&(r=lo(i)))}else a=n&~o,a!==0?r=lo(a):i!==0&&(r=lo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),o=1<<n,r|=e[n],t&=~o;return r}function Om(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _m(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Rt(i),l=1<<a,s=o[a];s===-1?((l&n)===0||(l&r)!==0)&&(o[a]=Om(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function op(){var e=ei;return ei<<=1,(ei&4194240)===0&&(ei=64),e}function rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ho(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function Mm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Rt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var we=0;function ip(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ap,uu,lp,sp,up,es=!1,ni=[],fn=null,pn=null,hn=null,Co=new Map,Ao=new Map,sn=[],zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ac(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Co.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(t.pointerId)}}function Kr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Wo(t),t!==null&&uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Fm(e,t,n,r,o){switch(t){case"focusin":return fn=Kr(fn,e,t,n,r,o),!0;case"dragenter":return pn=Kr(pn,e,t,n,r,o),!0;case"mouseover":return hn=Kr(hn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Co.set(i,Kr(Co.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ao.set(i,Kr(Ao.get(i)||null,e,t,n,r,o)),!0}return!1}function cp(e){var t=In(e.target);if(t!==null){var n=Jn(t);if(n!==null){if(t=n.tag,t===13){if(t=Jf(n),t!==null){e.blockedOn=t,up(e.priority,function(){lp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yl=r,n.target.dispatchEvent(r),Yl=null}else return t=Wo(n),t!==null&&uu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ec(e,t,n){bi(e)&&n.delete(t)}function jm(){es=!1,fn!==null&&bi(fn)&&(fn=null),pn!==null&&bi(pn)&&(pn=null),hn!==null&&bi(hn)&&(hn=null),Co.forEach(Ec),Ao.forEach(Ec)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,es||(es=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,jm)))}function Eo(e){function t(o){return Gr(o,e)}if(0<ni.length){Gr(ni[0],e);for(var n=1;n<ni.length;n++){var r=ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&Gr(fn,e),pn!==null&&Gr(pn,e),hn!==null&&Gr(hn,e),Co.forEach(t),Ao.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)cp(n),n.blockedOn===null&&sn.shift()}var Ar=nn.ReactCurrentBatchConfig,Fi=!0;function Bm(e,t,n,r){var o=we,i=Ar.transition;Ar.transition=null;try{we=1,cu(e,t,n,r)}finally{we=o,Ar.transition=i}}function Um(e,t,n,r){var o=we,i=Ar.transition;Ar.transition=null;try{we=4,cu(e,t,n,r)}finally{we=o,Ar.transition=i}}function cu(e,t,n,r){if(Fi){var o=ts(e,t,n,r);if(o===null)pl(e,t,r,ji,n),Ac(e,r);else if(Fm(o,e,t,n,r))r.stopPropagation();else if(Ac(e,r),t&4&&-1<zm.indexOf(e)){for(;o!==null;){var i=Wo(o);if(i!==null&&ap(i),i=ts(e,t,n,r),i===null&&pl(e,t,r,ji,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var ji=null;function ts(e,t,n,r){if(ji=null,e=au(r),e=In(e),e!==null)if(t=Jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ji=e,null}function dp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rm()){case lu:return 1;case np:return 4;case Mi:case Pm:return 16;case rp:return 536870912;default:return 16}default:return 16}}var cn=null,du=null,$i=null;function fp(){if($i)return $i;var e,t=du,n=t.length,r,o="value"in cn?cn.value:cn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return $i=o.slice(e,1<r?1-r:void 0)}function Ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function Lc(){return!1}function ht(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ri:Lc,this.isPropagationStopped=Lc,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=ht(Br),Vo=Pe({},Br,{view:0,detail:0}),Hm=ht(Vo),ol,il,Yr,ya=Pe({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(ol=e.screenX-Yr.screenX,il=e.screenY-Yr.screenY):il=ol=0,Yr=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:il}}),Rc=ht(ya),Vm=Pe({},ya,{dataTransfer:0}),Wm=ht(Vm),Qm=Pe({},Vo,{relatedTarget:0}),al=ht(Qm),Km=Pe({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),Gm=ht(Km),Ym=Pe({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xm=ht(Ym),Zm=Pe({},Br,{data:0}),Pc=ht(Zm),Jm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e0[e])?!!t[e]:!1}function pu(){return t0}var n0=Pe({},Vo,{key:function(e){if(e.key){var t=Jm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r0=ht(n0),o0=Pe({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tc=ht(o0),i0=Pe({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),a0=ht(i0),l0=Pe({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),s0=ht(l0),u0=Pe({},ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=ht(u0),d0=[9,13,27,32],hu=Zt&&"CompositionEvent"in window,po=null;Zt&&"documentMode"in document&&(po=document.documentMode);var f0=Zt&&"TextEvent"in window&&!po,pp=Zt&&(!hu||po&&8<po&&11>=po),Nc=String.fromCharCode(32),Dc=!1;function hp(e,t){switch(e){case"keyup":return d0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function p0(e,t){switch(e){case"compositionend":return gp(t);case"keypress":return t.which!==32?null:(Dc=!0,Nc);case"textInput":return e=t.data,e===Nc&&Dc?null:e;default:return null}}function h0(e,t){if(cr)return e==="compositionend"||!hu&&hp(e,t)?(e=fp(),$i=du=cn=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pp&&t.locale!=="ko"?null:t.data;default:return null}}var g0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g0[e.type]:t==="textarea"}function mp(e,t,n,r){Kf(r),t=Bi(t,"onChange"),0<t.length&&(n=new fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ho=null,Lo=null;function m0(e){Ep(e,0)}function xa(e){var t=pr(e);if(jf(t))return e}function v0(e,t){if(e==="change")return t}var vp=!1;if(Zt){var ll;if(Zt){var sl="oninput"in document;if(!sl){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),sl=typeof Oc.oninput=="function"}ll=sl}else ll=!1;vp=ll&&(!document.documentMode||9<document.documentMode)}function _c(){ho&&(ho.detachEvent("onpropertychange",yp),Lo=ho=null)}function yp(e){if(e.propertyName==="value"&&xa(Lo)){var t=[];mp(t,Lo,e,au(e)),Zf(m0,t)}}function y0(e,t,n){e==="focusin"?(_c(),ho=t,Lo=n,ho.attachEvent("onpropertychange",yp)):e==="focusout"&&_c()}function x0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xa(Lo)}function w0(e,t){if(e==="click")return xa(t)}function S0(e,t){if(e==="input"||e==="change")return xa(t)}function k0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:k0;function Ro(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ml.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zc(e,t){var n=Mc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mc(n)}}function xp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wp(){for(var e=window,t=Ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ii(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function b0(e){var t=wp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xp(n.ownerDocument.documentElement,n)){if(r!==null&&gu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=zc(n,i);var a=zc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $0=Zt&&"documentMode"in document&&11>=document.documentMode,dr=null,ns=null,go=null,rs=!1;function Fc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||dr==null||dr!==Ii(r)||(r=dr,"selectionStart"in r&&gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&Ro(go,r)||(go=r,r=Bi(ns,"onSelect"),0<r.length&&(t=new fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dr)))}function oi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionend:oi("Transition","TransitionEnd")},ul={},Sp={};Zt&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function wa(e){if(ul[e])return ul[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sp)return ul[e]=t[n];return e}var kp=wa("animationend"),bp=wa("animationiteration"),$p=wa("animationstart"),Cp=wa("transitionend"),Ap=new Map,jc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Ap.set(e,t),Zn(t,[e])}for(var cl=0;cl<jc.length;cl++){var dl=jc[cl],C0=dl.toLowerCase(),A0=dl[0].toUpperCase()+dl.slice(1);En(C0,"on"+A0)}En(kp,"onAnimationEnd");En(bp,"onAnimationIteration");En($p,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Cp,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Bc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cm(r,t,void 0,e),e.currentTarget=null}function Ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Bc(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Bc(o,l,u),i=s}}}if(_i)throw e=Jl,_i=!1,Jl=null,e}function $e(e,t){var n=t[ss];n===void 0&&(n=t[ss]=new Set);var r=e+"__bubble";n.has(r)||(Lp(t,e,2,!1),n.add(r))}function fl(e,t,n){var r=0;t&&(r|=4),Lp(n,e,r,t)}var ii="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[ii]){e[ii]=!0,Of.forEach(function(n){n!=="selectionchange"&&(E0.has(n)||fl(n,!1,e),fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ii]||(t[ii]=!0,fl("selectionchange",!1,t))}}function Lp(e,t,n,r){switch(dp(t)){case 1:var o=Bm;break;case 4:o=Um;break;default:o=cu}n=o.bind(null,t,n,e),o=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=In(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Zf(function(){var u=i,f=au(n),d=[];e:{var c=Ap.get(e);if(c!==void 0){var v=fu,m=e;switch(e){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":v=r0;break;case"focusin":m="focus",v=al;break;case"focusout":m="blur",v=al;break;case"beforeblur":case"afterblur":v=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=a0;break;case kp:case bp:case $p:v=Gm;break;case Cp:v=s0;break;case"scroll":v=Hm;break;case"wheel":v=c0;break;case"copy":case"cut":case"paste":v=Xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Tc}var w=(t&4)!==0,b=!w&&e==="scroll",h=w?c!==null?c+"Capture":null:c;w=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=$o(p,h),x!=null&&w.push(To(p,x,g)))),b)break;p=p.return}0<w.length&&(c=new v(c,m,null,n,f),d.push({event:c,listeners:w}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",c&&n!==Yl&&(m=n.relatedTarget||n.fromElement)&&(In(m)||m[Jt]))break e;if((v||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,v?(m=n.relatedTarget||n.toElement,v=u,m=m?In(m):null,m!==null&&(b=Jn(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(v=null,m=u),v!==m)){if(w=Rc,x="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Tc,x="onPointerLeave",h="onPointerEnter",p="pointer"),b=v==null?c:pr(v),g=m==null?c:pr(m),c=new w(x,p+"leave",v,n,f),c.target=b,c.relatedTarget=g,x=null,In(f)===u&&(w=new w(h,p+"enter",m,n,f),w.target=g,w.relatedTarget=b,x=w),b=x,v&&m)t:{for(w=v,h=m,p=0,g=w;g;g=rr(g))p++;for(g=0,x=h;x;x=rr(x))g++;for(;0<p-g;)w=rr(w),p--;for(;0<g-p;)h=rr(h),g--;for(;p--;){if(w===h||h!==null&&w===h.alternate)break t;w=rr(w),h=rr(h)}w=null}else w=null;v!==null&&Uc(d,c,v,w,!1),m!==null&&b!==null&&Uc(d,b,m,w,!0)}}e:{if(c=u?pr(u):window,v=c.nodeName&&c.nodeName.toLowerCase(),v==="select"||v==="input"&&c.type==="file")var $=v0;else if(Ic(c))if(vp)$=S0;else{$=x0;var A=y0}else(v=c.nodeName)&&v.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&($=w0);if($&&($=$(e,u))){mp(d,$,n,f);break e}A&&A(e,c,u),e==="focusout"&&(A=c._wrapperState)&&A.controlled&&c.type==="number"&&Vl(c,"number",c.value)}switch(A=u?pr(u):window,e){case"focusin":(Ic(A)||A.contentEditable==="true")&&(dr=A,ns=u,go=null);break;case"focusout":go=ns=dr=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,Fc(d,n,f);break;case"selectionchange":if($0)break;case"keydown":case"keyup":Fc(d,n,f)}var P;if(hu)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else cr?hp(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(pp&&n.locale!=="ko"&&(cr||M!=="onCompositionStart"?M==="onCompositionEnd"&&cr&&(P=fp()):(cn=f,du="value"in cn?cn.value:cn.textContent,cr=!0)),A=Bi(u,M),0<A.length&&(M=new Pc(M,e,null,n,f),d.push({event:M,listeners:A}),P?M.data=P:(P=gp(n),P!==null&&(M.data=P)))),(P=f0?p0(e,n):h0(e,n))&&(u=Bi(u,"onBeforeInput"),0<u.length&&(f=new Pc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=P))}Ep(d,t)})}function To(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=$o(e,n),i!=null&&r.unshift(To(e,i,o)),i=$o(e,t),i!=null&&r.push(To(e,i,o))),e=e.return}return r}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=$o(n,i),s!=null&&a.unshift(To(n,s,l))):o||(s=$o(n,i),s!=null&&a.push(To(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var L0=/\r\n?/g,R0=/\u0000|\uFFFD/g;function Hc(e){return(typeof e=="string"?e:""+e).replace(L0,`
`).replace(R0,"")}function ai(e,t,n){if(t=Hc(t),Hc(e)!==t&&n)throw Error(_(425))}function Ui(){}var os=null,is=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,P0=typeof clearTimeout=="function"?clearTimeout:void 0,Vc=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vc<"u"?function(e){return Vc.resolve(null).then(e).catch(N0)}:ls;function N0(e){setTimeout(function(){throw e})}function hl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Eo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Eo(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),_t="__reactFiber$"+Ur,No="__reactProps$"+Ur,Jt="__reactContainer$"+Ur,ss="__reactEvents$"+Ur,D0="__reactListeners$"+Ur,I0="__reactHandles$"+Ur;function In(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wc(e);e!==null;){if(n=e[_t])return n;e=Wc(e)}return t}e=n,n=e.parentNode}return null}function Wo(e){return e=e[_t]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Sa(e){return e[No]||null}var us=[],hr=-1;function Ln(e){return{current:e}}function Ce(e){0>hr||(e.current=us[hr],us[hr]=null,hr--)}function be(e,t){hr++,us[hr]=e.current,e.current=t}var $n={},Ze=Ln($n),at=Ln(!1),Un=$n;function Tr(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function lt(e){return e=e.childContextTypes,e!=null}function Hi(){Ce(at),Ce(Ze)}function Qc(e,t,n){if(Ze.current!==$n)throw Error(_(168));be(Ze,t),be(at,n)}function Rp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,ym(e)||"Unknown",o));return Pe({},n,r)}function Vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,Un=Ze.current,be(Ze,e),be(at,at.current),!0}function Kc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Rp(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,Ce(at),Ce(Ze),be(Ze,e)):Ce(at),be(at,n)}var Kt=null,ka=!1,gl=!1;function Pp(e){Kt===null?Kt=[e]:Kt.push(e)}function O0(e){ka=!0,Pp(e)}function Rn(){if(!gl&&Kt!==null){gl=!0;var e=0,t=we;try{var n=Kt;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,ka=!1}catch(o){throw Kt!==null&&(Kt=Kt.slice(e+1)),tp(lu,Rn),o}finally{we=t,gl=!1}}return null}var gr=[],mr=0,Wi=null,Qi=0,mt=[],vt=0,Hn=null,Gt=1,Yt="";function Nn(e,t){gr[mr++]=Qi,gr[mr++]=Wi,Wi=e,Qi=t}function Tp(e,t,n){mt[vt++]=Gt,mt[vt++]=Yt,mt[vt++]=Hn,Hn=e;var r=Gt;e=Yt;var o=32-Rt(r)-1;r&=~(1<<o),n+=1;var i=32-Rt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Gt=1<<32-Rt(t)+o|n<<o|r,Yt=i+e}else Gt=1<<i|n<<o|r,Yt=e}function mu(e){e.return!==null&&(Nn(e,1),Tp(e,1,0))}function vu(e){for(;e===Wi;)Wi=gr[--mr],gr[mr]=null,Qi=gr[--mr],gr[mr]=null;for(;e===Hn;)Hn=mt[--vt],mt[vt]=null,Yt=mt[--vt],mt[vt]=null,Gt=mt[--vt],mt[vt]=null}var dt=null,ct=null,Ae=!1,At=null;function Np(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ct=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Gt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ct=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ds(e){if(Ae){var t=ct;if(t){var n=t;if(!Gc(e,t)){if(cs(e))throw Error(_(418));t=gn(n.nextSibling);var r=dt;t&&Gc(e,t)?Np(r,n):(e.flags=e.flags&-4097|2,Ae=!1,dt=e)}}else{if(cs(e))throw Error(_(418));e.flags=e.flags&-4097|2,Ae=!1,dt=e}}}function Yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function li(e){if(e!==dt)return!1;if(!Ae)return Yc(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=ct)){if(cs(e))throw Dp(),Error(_(418));for(;t;)Np(e,t),t=gn(t.nextSibling)}if(Yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=dt?gn(e.stateNode.nextSibling):null;return!0}function Dp(){for(var e=ct;e;)e=gn(e.nextSibling)}function Nr(){ct=dt=null,Ae=!1}function yu(e){At===null?At=[e]:At.push(e)}var _0=nn.ReactCurrentBatchConfig;function $t(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ki=Ln(null),Gi=null,vr=null,xu=null;function wu(){xu=vr=Gi=null}function Su(e){var t=Ki.current;Ce(Ki),e._currentValue=t}function fs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){Gi=e,xu=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(xu!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(Gi===null)throw Error(_(308));vr=e,Gi.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var On=null;function ku(e){On===null?On=[e]:On.push(e)}function Ip(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ku(t)):(n.next=o.next,o.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qt(e,n)}return o=r.interleaved,o===null?(t.next=t,ku(r)):(t.next=o.next,o.next=t),r.interleaved=t,qt(e,n)}function Ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,su(e,n)}}function Xc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yi(e,t,n,r){var o=e.updateQueue;an=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,f=u=s=null,l=i;do{var c=l.lane,v=l.eventTime;if((r&c)===c){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,w=l;switch(c=t,v=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){d=m.call(v,d,c);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,c=typeof m=="function"?m.call(v,d,c):m,c==null)break e;d=Pe({},d,c);break e;case 2:an=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,c=o.effects,c===null?o.effects=[l]:c.push(l))}else v={eventTime:v,lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,s=d):f=f.next=v,a|=c;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;c=l,l=c.next,c.next=null,o.lastBaseUpdate=c,o.shared.pending=null}}while(1);if(f===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Wn|=a,e.lanes=a,e.memoizedState=d}}function Zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var _p=new If.Component().refs;function ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ba={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=yn(e),i=Xt(r,o);i.payload=t,n!=null&&(i.callback=n),t=mn(e,i,o),t!==null&&(Pt(t,e,o,r),Ai(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=yn(e),i=Xt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=mn(e,i,o),t!==null&&(Pt(t,e,o,r),Ai(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=yn(e),o=Xt(n,r);o.tag=2,t!=null&&(o.callback=t),t=mn(e,o,r),t!==null&&(Pt(t,e,r,n),Ai(t,e,r))}};function Jc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Ro(n,r)||!Ro(o,i):!0}function Mp(e,t,n){var r=!1,o=$n,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(o=lt(t)?Un:Ze.current,r=t.contextTypes,i=(r=r!=null)?Tr(e,o):$n),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ba,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function qc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ba.enqueueReplaceState(t,t.state,null)}function hs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=_p,bu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=wt(i):(i=lt(t)?Un:Ze.current,o.context=Tr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ps(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ba.enqueueReplaceState(o,o.state,null),Yi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===_p&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function si(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ed(e){var t=e._init;return t(e._payload)}function zp(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=xn(h,p),h.index=0,h.sibling=null,h}function i(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,x){return p===null||p.tag!==6?(p=kl(g,h.mode,x),p.return=h,p):(p=o(p,g),p.return=h,p)}function s(h,p,g,x){var $=g.type;return $===ur?f(h,p,g.props.children,x,g.key):p!==null&&(p.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===on&&ed($)===p.type)?(x=o(p,g.props),x.ref=Xr(h,p,g),x.return=h,x):(x=Ni(g.type,g.key,g.props,null,h.mode,x),x.ref=Xr(h,p,g),x.return=h,x)}function u(h,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=bl(g,h.mode,x),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function f(h,p,g,x,$){return p===null||p.tag!==7?(p=jn(g,h.mode,x,$),p.return=h,p):(p=o(p,g),p.return=h,p)}function d(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=kl(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Zo:return g=Ni(p.type,p.key,p.props,null,h.mode,g),g.ref=Xr(h,null,p),g.return=h,g;case sr:return p=bl(p,h.mode,g),p.return=h,p;case on:var x=p._init;return d(h,x(p._payload),g)}if(ao(p)||Wr(p))return p=jn(p,h.mode,g,null),p.return=h,p;si(h,p)}return null}function c(h,p,g,x){var $=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return $!==null?null:l(h,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zo:return g.key===$?s(h,p,g,x):null;case sr:return g.key===$?u(h,p,g,x):null;case on:return $=g._init,c(h,p,$(g._payload),x)}if(ao(g)||Wr(g))return $!==null?null:f(h,p,g,x,null);si(h,g)}return null}function v(h,p,g,x,$){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,l(p,h,""+x,$);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zo:return h=h.get(x.key===null?g:x.key)||null,s(p,h,x,$);case sr:return h=h.get(x.key===null?g:x.key)||null,u(p,h,x,$);case on:var A=x._init;return v(h,p,g,A(x._payload),$)}if(ao(x)||Wr(x))return h=h.get(g)||null,f(p,h,x,$,null);si(p,x)}return null}function m(h,p,g,x){for(var $=null,A=null,P=p,M=p=0,X=null;P!==null&&M<g.length;M++){P.index>M?(X=P,P=null):X=P.sibling;var U=c(h,P,g[M],x);if(U===null){P===null&&(P=X);break}e&&P&&U.alternate===null&&t(h,P),p=i(U,p,M),A===null?$=U:A.sibling=U,A=U,P=X}if(M===g.length)return n(h,P),Ae&&Nn(h,M),$;if(P===null){for(;M<g.length;M++)P=d(h,g[M],x),P!==null&&(p=i(P,p,M),A===null?$=P:A.sibling=P,A=P);return Ae&&Nn(h,M),$}for(P=r(h,P);M<g.length;M++)X=v(P,h,M,g[M],x),X!==null&&(e&&X.alternate!==null&&P.delete(X.key===null?M:X.key),p=i(X,p,M),A===null?$=X:A.sibling=X,A=X);return e&&P.forEach(function(de){return t(h,de)}),Ae&&Nn(h,M),$}function w(h,p,g,x){var $=Wr(g);if(typeof $!="function")throw Error(_(150));if(g=$.call(g),g==null)throw Error(_(151));for(var A=$=null,P=p,M=p=0,X=null,U=g.next();P!==null&&!U.done;M++,U=g.next()){P.index>M?(X=P,P=null):X=P.sibling;var de=c(h,P,U.value,x);if(de===null){P===null&&(P=X);break}e&&P&&de.alternate===null&&t(h,P),p=i(de,p,M),A===null?$=de:A.sibling=de,A=de,P=X}if(U.done)return n(h,P),Ae&&Nn(h,M),$;if(P===null){for(;!U.done;M++,U=g.next())U=d(h,U.value,x),U!==null&&(p=i(U,p,M),A===null?$=U:A.sibling=U,A=U);return Ae&&Nn(h,M),$}for(P=r(h,P);!U.done;M++,U=g.next())U=v(P,h,M,U.value,x),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?M:U.key),p=i(U,p,M),A===null?$=U:A.sibling=U,A=U);return e&&P.forEach(function(ie){return t(h,ie)}),Ae&&Nn(h,M),$}function b(h,p,g,x){if(typeof g=="object"&&g!==null&&g.type===ur&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Zo:e:{for(var $=g.key,A=p;A!==null;){if(A.key===$){if($=g.type,$===ur){if(A.tag===7){n(h,A.sibling),p=o(A,g.props.children),p.return=h,h=p;break e}}else if(A.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===on&&ed($)===A.type){n(h,A.sibling),p=o(A,g.props),p.ref=Xr(h,A,g),p.return=h,h=p;break e}n(h,A);break}else t(h,A);A=A.sibling}g.type===ur?(p=jn(g.props.children,h.mode,x,g.key),p.return=h,h=p):(x=Ni(g.type,g.key,g.props,null,h.mode,x),x.ref=Xr(h,p,g),x.return=h,h=x)}return a(h);case sr:e:{for(A=g.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=bl(g,h.mode,x),p.return=h,h=p}return a(h);case on:return A=g._init,b(h,p,A(g._payload),x)}if(ao(g))return m(h,p,g,x);if(Wr(g))return w(h,p,g,x);si(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,g),p.return=h,h=p):(n(h,p),p=kl(g,h.mode,x),p.return=h,h=p),a(h)):n(h,p)}return b}var Dr=zp(!0),Fp=zp(!1),Qo={},Ft=Ln(Qo),Do=Ln(Qo),Io=Ln(Qo);function _n(e){if(e===Qo)throw Error(_(174));return e}function $u(e,t){switch(be(Io,t),be(Do,e),be(Ft,Qo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ql(t,e)}Ce(Ft),be(Ft,t)}function Ir(){Ce(Ft),Ce(Do),Ce(Io)}function jp(e){_n(Io.current);var t=_n(Ft.current),n=Ql(t,e.type);t!==n&&(be(Do,e),be(Ft,n))}function Cu(e){Do.current===e&&(Ce(Ft),Ce(Do))}var Le=Ln(0);function Xi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ml=[];function Au(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var Ei=nn.ReactCurrentDispatcher,vl=nn.ReactCurrentBatchConfig,Vn=0,Re=null,_e=null,ze=null,Zi=!1,mo=!1,Oo=0,M0=0;function Ge(){throw Error(_(321))}function Eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Lu(e,t,n,r,o,i){if(Vn=i,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ei.current=e===null||e.memoizedState===null?B0:U0,e=n(r,o),mo){i=0;do{if(mo=!1,Oo=0,25<=i)throw Error(_(301));i+=1,ze=_e=null,t.updateQueue=null,Ei.current=H0,e=n(r,o)}while(mo)}if(Ei.current=Ji,t=_e!==null&&_e.next!==null,Vn=0,ze=_e=Re=null,Zi=!1,t)throw Error(_(300));return e}function Ru(){var e=Oo!==0;return Oo=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Re.memoizedState=ze=e:ze=ze.next=e,ze}function St(){if(_e===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=ze===null?Re.memoizedState:ze.next;if(t!==null)ze=t,_e=e;else{if(e===null)throw Error(_(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},ze===null?Re.memoizedState=ze=e:ze=ze.next=e}return ze}function _o(e,t){return typeof t=="function"?t(e):t}function yl(e){var t=St(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=_e,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var f=u.lane;if((Vn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Re.lanes|=f,Wn|=f}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Tt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Re.lanes|=i,Wn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=St(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Tt(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bp(){}function Up(e,t){var n=Re,r=St(),o=t(),i=!Tt(r.memoizedState,o);if(i&&(r.memoizedState=o,it=!0),r=r.queue,Pu(Wp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Mo(9,Vp.bind(null,n,r,o,t),void 0,null),Fe===null)throw Error(_(349));(Vn&30)!==0||Hp(n,t,o)}return o}function Hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vp(e,t,n,r){t.value=n,t.getSnapshot=r,Qp(t)&&Kp(e)}function Wp(e,t,n){return n(function(){Qp(t)&&Kp(e)})}function Qp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Kp(e){var t=qt(e,1);t!==null&&Pt(t,e,1,-1)}function td(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:e},t.queue=e,e=e.dispatch=j0.bind(null,Re,e),[t.memoizedState,e]}function Mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gp(){return St().memoizedState}function Li(e,t,n,r){var o=Ot();Re.flags|=e,o.memoizedState=Mo(1|t,n,void 0,r===void 0?null:r)}function $a(e,t,n,r){var o=St();r=r===void 0?null:r;var i=void 0;if(_e!==null){var a=_e.memoizedState;if(i=a.destroy,r!==null&&Eu(r,a.deps)){o.memoizedState=Mo(t,n,i,r);return}}Re.flags|=e,o.memoizedState=Mo(1|t,n,i,r)}function nd(e,t){return Li(8390656,8,e,t)}function Pu(e,t){return $a(2048,8,e,t)}function Yp(e,t){return $a(4,2,e,t)}function Xp(e,t){return $a(4,4,e,t)}function Zp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jp(e,t,n){return n=n!=null?n.concat([e]):null,$a(4,4,Zp.bind(null,t,e),n)}function Tu(){}function qp(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function eh(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function th(e,t,n){return(Vn&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n):(Tt(n,t)||(n=op(),Re.lanes|=n,Wn|=n,e.baseState=!0),t)}function z0(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=vl.transition;vl.transition={};try{e(!1),t()}finally{we=n,vl.transition=r}}function nh(){return St().memoizedState}function F0(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rh(e))oh(t,n);else if(n=Ip(e,t,n,r),n!==null){var o=et();Pt(n,e,r,o),ih(n,t,r)}}function j0(e,t,n){var r=yn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rh(e))oh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Tt(l,a)){var s=t.interleaved;s===null?(o.next=o,ku(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Ip(e,t,o,r),n!==null&&(o=et(),Pt(n,e,r,o),ih(n,t,r))}}function rh(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function oh(e,t){mo=Zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ih(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,su(e,n)}}var Ji={readContext:wt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},B0={readContext:wt,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:nd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Li(4194308,4,Zp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){return Li(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F0.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:td,useDebugValue:Tu,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=td(!1),t=e[0];return e=z0.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,o=Ot();if(Ae){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Fe===null)throw Error(_(349));(Vn&30)!==0||Hp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,nd(Wp.bind(null,r,i,e),[e]),r.flags|=2048,Mo(9,Vp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ot(),t=Fe.identifierPrefix;if(Ae){var n=Yt,r=Gt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=M0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},U0={readContext:wt,useCallback:qp,useContext:wt,useEffect:Pu,useImperativeHandle:Jp,useInsertionEffect:Yp,useLayoutEffect:Xp,useMemo:eh,useReducer:yl,useRef:Gp,useState:function(){return yl(_o)},useDebugValue:Tu,useDeferredValue:function(e){var t=St();return th(t,_e.memoizedState,e)},useTransition:function(){var e=yl(_o)[0],t=St().memoizedState;return[e,t]},useMutableSource:Bp,useSyncExternalStore:Up,useId:nh,unstable_isNewReconciler:!1},H0={readContext:wt,useCallback:qp,useContext:wt,useEffect:Pu,useImperativeHandle:Jp,useInsertionEffect:Yp,useLayoutEffect:Xp,useMemo:eh,useReducer:xl,useRef:Gp,useState:function(){return xl(_o)},useDebugValue:Tu,useDeferredValue:function(e){var t=St();return _e===null?t.memoizedState=e:th(t,_e.memoizedState,e)},useTransition:function(){var e=xl(_o)[0],t=St().memoizedState;return[e,t]},useMutableSource:Bp,useSyncExternalStore:Up,useId:nh,unstable_isNewReconciler:!1};function Or(e,t){try{var n="",r=t;do n+=vm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function wl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function gs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function ah(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ea||(ea=!0,Cs=r),gs(e,t)},n}function lh(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){gs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){gs(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function rd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new V0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=o1.bind(null,e,t,n),t.then(e,e))}function od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function id(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var W0=nn.ReactCurrentOwner,it=!1;function qe(e,t,n,r){t.child=e===null?Fp(t,null,n,r):Dr(t,e.child,n,r)}function ad(e,t,n,r,o){n=n.render;var i=t.ref;return Er(t,o),r=Lu(e,t,n,r,i,o),n=Ru(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):(Ae&&n&&mu(t),t.flags|=1,qe(e,t,r,o),t.child)}function ld(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Fu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,sh(e,t,i,r,o)):(e=Ni(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(a,r)&&e.ref===t.ref)return en(e,t,o)}return t.flags|=1,e=xn(i,r),e.ref=t.ref,e.return=t,t.child=e}function sh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ro(i,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,en(e,t,o)}return ms(e,t,n,r,o)}function uh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(xr,ut),ut|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(xr,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,be(xr,ut),ut|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,be(xr,ut),ut|=r;return qe(e,t,o,n),t.child}function ch(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,n,r,o){var i=lt(n)?Un:Ze.current;return i=Tr(t,i),Er(t,o),n=Lu(e,t,n,r,i,o),r=Ru(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):(Ae&&r&&mu(t),t.flags|=1,qe(e,t,n,o),t.child)}function sd(e,t,n,r,o){if(lt(n)){var i=!0;Vi(t)}else i=!1;if(Er(t,o),t.stateNode===null)Ri(e,t),Mp(t,n,r),hs(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=lt(n)?Un:Ze.current,u=Tr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&qc(t,a,r,u),an=!1;var c=t.memoizedState;a.state=c,Yi(t,r,a,o),s=t.memoizedState,l!==r||c!==s||at.current||an?(typeof f=="function"&&(ps(t,n,f,r),s=t.memoizedState),(l=an||Jc(t,n,l,r,c,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Op(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:$t(t.type,l),a.props=u,d=t.pendingProps,c=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=wt(s):(s=lt(n)?Un:Ze.current,s=Tr(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||c!==s)&&qc(t,a,r,s),an=!1,c=t.memoizedState,a.state=c,Yi(t,r,a,o);var m=t.memoizedState;l!==d||c!==m||at.current||an?(typeof v=="function"&&(ps(t,n,v,r),m=t.memoizedState),(u=an||Jc(t,n,u,r,c,m,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return vs(e,t,n,r,i,o)}function vs(e,t,n,r,o,i){ch(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Kc(t,n,!1),en(e,t,i);r=t.stateNode,W0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Dr(t,e.child,null,i),t.child=Dr(t,null,l,i)):qe(e,t,l,i),t.memoizedState=r.state,o&&Kc(t,n,!0),t.child}function dh(e){var t=e.stateNode;t.pendingContext?Qc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qc(e,t.context,!1),$u(e,t.containerInfo)}function ud(e,t,n,r,o){return Nr(),yu(o),t.flags|=256,qe(e,t,n,r),t.child}var ys={dehydrated:null,treeContext:null,retryLane:0};function xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function fh(e,t,n){var r=t.pendingProps,o=Le.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),be(Le,o&1),e===null)return ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ea(a,r,0,null),e=jn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xs(n),t.memoizedState=ys,e):Nu(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Q0(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=xn(l,i):(i=jn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?xs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ys,r}return i=e.child,e=i.sibling,r=xn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nu(e,t){return t=Ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ui(e,t,n,r){return r!==null&&yu(r),Dr(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Q0(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=wl(Error(_(422))),ui(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ea({mode:"visible",children:r.children},o,0,null),i=jn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Dr(t,e.child,null,a),t.child.memoizedState=xs(a),t.memoizedState=ys,i);if((t.mode&1)===0)return ui(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(_(419)),r=wl(i,r,void 0),ui(e,t,a,r)}if(l=(a&e.childLanes)!==0,it||l){if(r=Fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qt(e,o),Pt(r,e,o,-1))}return zu(),r=wl(Error(_(421))),ui(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=i1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ct=gn(o.nextSibling),dt=t,Ae=!0,At=null,e!==null&&(mt[vt++]=Gt,mt[vt++]=Yt,mt[vt++]=Hn,Gt=e.id,Yt=e.overflow,Hn=t),t=Nu(t,r.children),t.flags|=4096,t)}function cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fs(e.return,t,n)}function Sl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ph(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(qe(e,t,r.children,n),r=Le.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cd(e,n,t);else if(e.tag===19)cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Le,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Xi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Sl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Xi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Sl(t,!0,n,null,i);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ri(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function K0(e,t,n){switch(t.tag){case 3:dh(t),Nr();break;case 5:jp(t);break;case 1:lt(t.type)&&Vi(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;be(Ki,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Le,Le.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?fh(e,t,n):(be(Le,Le.current&1),e=en(e,t,n),e!==null?e.sibling:null);be(Le,Le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ph(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),be(Le,Le.current),r)break;return null;case 22:case 23:return t.lanes=0,uh(e,t,n)}return en(e,t,n)}var hh,ws,gh,mh;hh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ws=function(){};gh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,_n(Ft.current);var i=null;switch(n){case"input":o=Ul(e,o),r=Ul(e,r),i=[];break;case"select":o=Pe({},o,{value:void 0}),r=Pe({},r,{value:void 0}),i=[];break;case"textarea":o=Wl(e,o),r=Wl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ui)}Kl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ko.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ko.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&$e("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};mh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zr(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function G0(e,t,n){var r=t.pendingProps;switch(vu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return lt(t.type)&&Hi(),Ye(t),null;case 3:return r=t.stateNode,Ir(),Ce(at),Ce(Ze),Au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&(Ls(At),At=null))),ws(e,t),Ye(t),null;case 5:Cu(t);var o=_n(Io.current);if(n=t.type,e!==null&&t.stateNode!=null)gh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ye(t),null}if(e=_n(Ft.current),li(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[_t]=t,r[No]=i,e=(t.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(o=0;o<so.length;o++)$e(so[o],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":xc(r,i),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$e("invalid",r);break;case"textarea":Sc(r,i),$e("invalid",r)}Kl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ai(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ai(r.textContent,l,e),o=["children",""+l]):ko.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&$e("scroll",r)}switch(n){case"input":Jo(r),wc(r,i,!0);break;case"textarea":Jo(r),kc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ui)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[_t]=t,e[No]=r,hh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Gl(n,r),n){case"dialog":$e("cancel",e),$e("close",e),o=r;break;case"iframe":case"object":case"embed":$e("load",e),o=r;break;case"video":case"audio":for(o=0;o<so.length;o++)$e(so[o],e);o=r;break;case"source":$e("error",e),o=r;break;case"img":case"image":case"link":$e("error",e),$e("load",e),o=r;break;case"details":$e("toggle",e),o=r;break;case"input":xc(e,r),o=Ul(e,r),$e("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Pe({},r,{value:void 0}),$e("invalid",e);break;case"textarea":Sc(e,r),o=Wl(e,r),$e("invalid",e);break;default:o=r}Kl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Qf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Vf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&bo(e,s):typeof s=="number"&&bo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ko.hasOwnProperty(i)?s!=null&&i==="onScroll"&&$e("scroll",e):s!=null&&nu(e,i,s,a))}switch(n){case"input":Jo(e),wc(e,r,!1);break;case"textarea":Jo(e),kc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?br(e,!!r.multiple,i,!1):r.defaultValue!=null&&br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ui)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)mh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=_n(Io.current),_n(Ft.current),li(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(i=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:ai(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ai(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Ye(t),null;case 13:if(Ce(Le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Dp(),Nr(),t.flags|=98560,i=!1;else if(i=li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[_t]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),i=!1}else At!==null&&(Ls(At),At=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Le.current&1)!==0?Me===0&&(Me=3):zu())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Ir(),ws(e,t),e===null&&Po(t.stateNode.containerInfo),Ye(t),null;case 10:return Su(t.type._context),Ye(t),null;case 17:return lt(t.type)&&Hi(),Ye(t),null;case 19:if(Ce(Le),i=t.memoizedState,i===null)return Ye(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Zr(i,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Xi(e),a!==null){for(t.flags|=128,Zr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Le,Le.current&1|2),t.child}e=e.sibling}i.tail!==null&&De()>_r&&(t.flags|=128,r=!0,Zr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Ae)return Ye(t),null}else 2*De()-i.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Zr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=De(),t.sibling=null,n=Le.current,be(Le,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return Mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ut&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Y0(e,t){switch(vu(t),t.tag){case 1:return lt(t.type)&&Hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),Ce(at),Ce(Ze),Au(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Cu(t),null;case 13:if(Ce(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Le),null;case 4:return Ir(),null;case 10:return Su(t.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var ci=!1,Xe=!1,X0=typeof WeakSet=="function"?WeakSet:Set,K=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Ss(e,t,n){try{n()}catch(r){Te(e,t,r)}}var dd=!1;function Z0(e,t){if(os=Fi,e=wp(),gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,d=e,c=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)c=d,d=v;for(;;){if(d===e)break t;if(c===n&&++u===o&&(l=a),c===i&&++f===r&&(s=a),(v=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},Fi=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,b=m.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:$t(t.type,w),b);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(x){Te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return m=dd,dd=!1,m}function vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ss(t,n,i)}o=o.next}while(o!==r)}}function Ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ks(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vh(e){var t=e.alternate;t!==null&&(e.alternate=null,vh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[No],delete t[ss],delete t[D0],delete t[I0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yh(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ui));else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}function $s(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($s(e,t,n),e=e.sibling;e!==null;)$s(e,t,n),e=e.sibling}var Be=null,Ct=!1;function rn(e,t,n){for(n=n.child;n!==null;)xh(e,t,n),n=n.sibling}function xh(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(va,n)}catch{}switch(n.tag){case 5:Xe||yr(n,t);case 6:var r=Be,o=Ct;Be=null,rn(e,t,n),Be=r,Ct=o,Be!==null&&(Ct?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ct?(e=Be,n=n.stateNode,e.nodeType===8?hl(e.parentNode,n):e.nodeType===1&&hl(e,n),Eo(e)):hl(Be,n.stateNode));break;case 4:r=Be,o=Ct,Be=n.stateNode.containerInfo,Ct=!0,rn(e,t,n),Be=r,Ct=o;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Ss(n,t,a),o=o.next}while(o!==r)}rn(e,t,n);break;case 1:if(!Xe&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,rn(e,t,n),Xe=r):rn(e,t,n);break;default:rn(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new X0),t.forEach(function(r){var o=a1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ct=!1;break e;case 3:Be=l.stateNode.containerInfo,Ct=!0;break e;case 4:Be=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(Be===null)throw Error(_(160));xh(i,a,o),Be=null,Ct=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wh(t,e),t=t.sibling}function wh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),It(e),r&4){try{vo(3,e,e.return),Ca(3,e)}catch(w){Te(e,e.return,w)}try{vo(5,e,e.return)}catch(w){Te(e,e.return,w)}}break;case 1:bt(t,e),It(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(bt(t,e),It(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var o=e.stateNode;try{bo(o,"")}catch(w){Te(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Bf(o,i),Gl(l,a);var u=Gl(l,i);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?Qf(o,d):f==="dangerouslySetInnerHTML"?Vf(o,d):f==="children"?bo(o,d):nu(o,f,d,u)}switch(l){case"input":Hl(o,i);break;case"textarea":Uf(o,i);break;case"select":var c=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?br(o,!!i.multiple,v,!1):c!==!!i.multiple&&(i.defaultValue!=null?br(o,!!i.multiple,i.defaultValue,!0):br(o,!!i.multiple,i.multiple?[]:"",!1))}o[No]=i}catch(w){Te(e,e.return,w)}}break;case 6:if(bt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Te(e,e.return,w)}}break;case 3:if(bt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(t.containerInfo)}catch(w){Te(e,e.return,w)}break;case 4:bt(t,e),It(e);break;case 13:bt(t,e),It(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ou=De())),r&4&&pd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||f,bt(t,e),Xe=u):bt(t,e),It(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&(e.mode&1)!==0)for(K=e,f=e.child;f!==null;){for(d=K=f;K!==null;){switch(c=K,v=c.child,c.tag){case 0:case 11:case 14:case 15:vo(4,c,c.return);break;case 1:yr(c,c.return);var m=c.stateNode;if(typeof m.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(w){Te(r,n,w)}}break;case 5:yr(c,c.return);break;case 22:if(c.memoizedState!==null){gd(d);continue}}v!==null?(v.return=c,K=v):gd(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Wf("display",a))}catch(w){Te(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Te(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bt(t,e),It(e),r&4&&pd(e);break;case 21:break;default:bt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yh(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(bo(o,""),r.flags&=-33);var i=fd(e);$s(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=fd(e);bs(e,l,a);break;default:throw Error(_(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function J0(e,t,n){K=e,Sh(e)}function Sh(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var o=K,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ci;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Xe;l=ci;var u=Xe;if(ci=a,(Xe=s)&&!u)for(K=o;K!==null;)a=K,s=a.child,a.tag===22&&a.memoizedState!==null?md(o):s!==null?(s.return=a,K=s):md(o);for(;i!==null;)K=i,Sh(i),i=i.sibling;K=o,ci=l,Xe=u}hd(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,K=i):hd(e)}}function hd(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||Ca(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Eo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Xe||t.flags&512&&ks(t)}catch(c){Te(t,t.return,c)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function gd(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function md(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ca(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Te(t,o,s)}}var i=t.return;try{ks(t)}catch(s){Te(t,i,s)}break;case 5:var a=t.return;try{ks(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var q0=Math.ceil,qi=nn.ReactCurrentDispatcher,Du=nn.ReactCurrentOwner,xt=nn.ReactCurrentBatchConfig,me=0,Fe=null,Ie=null,He=0,ut=0,xr=Ln(0),Me=0,zo=null,Wn=0,Aa=0,Iu=0,yo=null,ot=null,Ou=0,_r=1/0,Qt=null,ea=!1,Cs=null,vn=null,di=!1,dn=null,ta=0,xo=0,As=null,Pi=-1,Ti=0;function et(){return(me&6)!==0?De():Pi!==-1?Pi:Pi=De()}function yn(e){return(e.mode&1)===0?1:(me&2)!==0&&He!==0?He&-He:_0.transition!==null?(Ti===0&&(Ti=op()),Ti):(e=we,e!==0||(e=window.event,e=e===void 0?16:dp(e.type)),e)}function Pt(e,t,n,r){if(50<xo)throw xo=0,As=null,Error(_(185));Ho(e,n,r),((me&2)===0||e!==Fe)&&(e===Fe&&((me&2)===0&&(Aa|=n),Me===4&&un(e,He)),st(e,r),n===1&&me===0&&(t.mode&1)===0&&(_r=De()+500,ka&&Rn()))}function st(e,t){var n=e.callbackNode;_m(e,t);var r=zi(e,e===Fe?He:0);if(r===0)n!==null&&Cc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cc(n),t===1)e.tag===0?O0(vd.bind(null,e)):Pp(vd.bind(null,e)),T0(function(){(me&6)===0&&Rn()}),n=null;else{switch(ip(r)){case 1:n=lu;break;case 4:n=np;break;case 16:n=Mi;break;case 536870912:n=rp;break;default:n=Mi}n=Rh(n,kh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kh(e,t){if(Pi=-1,Ti=0,(me&6)!==0)throw Error(_(327));var n=e.callbackNode;if(Lr()&&e.callbackNode!==n)return null;var r=zi(e,e===Fe?He:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=na(e,r);else{t=r;var o=me;me|=2;var i=$h();(Fe!==e||He!==t)&&(Qt=null,_r=De()+500,Fn(e,t));do try{n1();break}catch(l){bh(e,l)}while(1);wu(),qi.current=i,me=o,Ie!==null?t=0:(Fe=null,He=0,t=Me)}if(t!==0){if(t===2&&(o=ql(e),o!==0&&(r=o,t=Es(e,o))),t===1)throw n=zo,Fn(e,0),un(e,r),st(e,De()),n;if(t===6)un(e,r);else{if(o=e.current.alternate,(r&30)===0&&!e1(o)&&(t=na(e,r),t===2&&(i=ql(e),i!==0&&(r=i,t=Es(e,i))),t===1))throw n=zo,Fn(e,0),un(e,r),st(e,De()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Dn(e,ot,Qt);break;case 3:if(un(e,r),(r&130023424)===r&&(t=Ou+500-De(),10<t)){if(zi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ls(Dn.bind(null,e,ot,Qt),t);break}Dn(e,ot,Qt);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Rt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*q0(r/1960))-r,10<r){e.timeoutHandle=ls(Dn.bind(null,e,ot,Qt),r);break}Dn(e,ot,Qt);break;case 5:Dn(e,ot,Qt);break;default:throw Error(_(329))}}}return st(e,De()),e.callbackNode===n?kh.bind(null,e):null}function Es(e,t){var n=yo;return e.current.memoizedState.isDehydrated&&(Fn(e,t).flags|=256),e=na(e,t),e!==2&&(t=ot,ot=n,t!==null&&Ls(t)),e}function Ls(e){ot===null?ot=e:ot.push.apply(ot,e)}function e1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~Iu,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function vd(e){if((me&6)!==0)throw Error(_(327));Lr();var t=zi(e,0);if((t&1)===0)return st(e,De()),null;var n=na(e,t);if(e.tag!==0&&n===2){var r=ql(e);r!==0&&(t=r,n=Es(e,r))}if(n===1)throw n=zo,Fn(e,0),un(e,t),st(e,De()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,ot,Qt),st(e,De()),null}function _u(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(_r=De()+500,ka&&Rn())}}function Qn(e){dn!==null&&dn.tag===0&&(me&6)===0&&Lr();var t=me;me|=1;var n=xt.transition,r=we;try{if(xt.transition=null,we=1,e)return e()}finally{we=r,xt.transition=n,me=t,(me&6)===0&&Rn()}}function Mu(){ut=xr.current,Ce(xr)}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,P0(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hi();break;case 3:Ir(),Ce(at),Ce(Ze),Au();break;case 5:Cu(r);break;case 4:Ir();break;case 13:Ce(Le);break;case 19:Ce(Le);break;case 10:Su(r.type._context);break;case 22:case 23:Mu()}n=n.return}if(Fe=e,Ie=e=xn(e.current,null),He=ut=t,Me=0,zo=null,Iu=Aa=Wn=0,ot=yo=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}On=null}return e}function bh(e,t){do{var n=Ie;try{if(wu(),Ei.current=Ji,Zi){for(var r=Re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Zi=!1}if(Vn=0,ze=_e=Re=null,mo=!1,Oo=0,Du.current=null,n===null||n.return===null){Me=1,zo=t,Ie=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=He,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if((f.mode&1)===0&&(d===0||d===11||d===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=od(a);if(v!==null){v.flags&=-257,id(v,a,l,i,t),v.mode&1&&rd(i,u,t),t=v,s=u;var m=t.updateQueue;if(m===null){var w=new Set;w.add(s),t.updateQueue=w}else m.add(s);break e}else{if((t&1)===0){rd(i,u,t),zu();break e}s=Error(_(426))}}else if(Ae&&l.mode&1){var b=od(a);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),id(b,a,l,i,t),yu(Or(s,l));break e}}i=s=Or(s,l),Me!==4&&(Me=2),yo===null?yo=[i]:yo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=ah(i,s,t);Xc(i,h);break e;case 1:l=s;var p=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vn===null||!vn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=lh(i,l,t);Xc(i,x);break e}}i=i.return}while(i!==null)}Ah(n)}catch($){t=$,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function $h(){var e=qi.current;return qi.current=Ji,e===null?Ji:e}function zu(){(Me===0||Me===3||Me===2)&&(Me=4),Fe===null||(Wn&268435455)===0&&(Aa&268435455)===0||un(Fe,He)}function na(e,t){var n=me;me|=2;var r=$h();(Fe!==e||He!==t)&&(Qt=null,Fn(e,t));do try{t1();break}catch(o){bh(e,o)}while(1);if(wu(),me=n,qi.current=r,Ie!==null)throw Error(_(261));return Fe=null,He=0,Me}function t1(){for(;Ie!==null;)Ch(Ie)}function n1(){for(;Ie!==null&&!Em();)Ch(Ie)}function Ch(e){var t=Lh(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Ah(e):Ie=t,Du.current=null}function Ah(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=G0(n,t,ut),n!==null){Ie=n;return}}else{if(n=Y0(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Me===0&&(Me=5)}function Dn(e,t,n){var r=we,o=xt.transition;try{xt.transition=null,we=1,r1(e,t,n,r)}finally{xt.transition=o,we=r}return null}function r1(e,t,n,r){do Lr();while(dn!==null);if((me&6)!==0)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Mm(e,i),e===Fe&&(Ie=Fe=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||di||(di=!0,Rh(Mi,function(){return Lr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=xt.transition,xt.transition=null;var a=we;we=1;var l=me;me|=4,Du.current=null,Z0(e,n),wh(n,e),b0(is),Fi=!!os,is=os=null,e.current=n,J0(n),Lm(),me=l,we=a,xt.transition=i}else e.current=n;if(di&&(di=!1,dn=e,ta=o),i=e.pendingLanes,i===0&&(vn=null),Tm(n.stateNode),st(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ea)throw ea=!1,e=Cs,Cs=null,e;return(ta&1)!==0&&e.tag!==0&&Lr(),i=e.pendingLanes,(i&1)!==0?e===As?xo++:(xo=0,As=e):xo=0,Rn(),null}function Lr(){if(dn!==null){var e=ip(ta),t=xt.transition,n=we;try{if(xt.transition=null,we=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,ta=0,(me&6)!==0)throw Error(_(331));var o=me;for(me|=4,K=e.current;K!==null;){var i=K,a=i.child;if((K.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(K=u;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:vo(8,f,i)}var d=f.child;if(d!==null)d.return=f,K=d;else for(;K!==null;){f=K;var c=f.sibling,v=f.return;if(vh(f),f===u){K=null;break}if(c!==null){c.return=v,K=c;break}K=v}}}var m=i.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}K=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,K=a;else e:for(;K!==null;){if(i=K,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:vo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,K=h;break e}K=i.return}}var p=e.current;for(K=p;K!==null;){a=K;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,K=g;else e:for(a=p;K!==null;){if(l=K,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Ca(9,l)}}catch($){Te(l,l.return,$)}if(l===a){K=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,K=x;break e}K=l.return}}if(me=o,Rn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(va,e)}catch{}r=!0}return r}finally{we=n,xt.transition=t}}return!1}function yd(e,t,n){t=Or(n,t),t=ah(e,t,1),e=mn(e,t,1),t=et(),e!==null&&(Ho(e,1,t),st(e,t))}function Te(e,t,n){if(e.tag===3)yd(e,e,n);else for(;t!==null;){if(t.tag===3){yd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=Or(n,e),e=lh(t,e,1),t=mn(t,e,1),e=et(),t!==null&&(Ho(t,1,e),st(t,e));break}}t=t.return}}function o1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(He&n)===n&&(Me===4||Me===3&&(He&130023424)===He&&500>De()-Ou?Fn(e,0):Iu|=n),st(e,t)}function Eh(e,t){t===0&&((e.mode&1)===0?t=1:(t=ti,ti<<=1,(ti&130023424)===0&&(ti=4194304)));var n=et();e=qt(e,t),e!==null&&(Ho(e,t,n),st(e,n))}function i1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Eh(e,n)}function a1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Eh(e,n)}var Lh;Lh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)it=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return it=!1,K0(e,t,n);it=(e.flags&131072)!==0}else it=!1,Ae&&(t.flags&1048576)!==0&&Tp(t,Qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ri(e,t),e=t.pendingProps;var o=Tr(t,Ze.current);Er(t,n),o=Lu(null,t,r,e,o,n);var i=Ru();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(i=!0,Vi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,bu(t),o.updater=ba,t.stateNode=o,o._reactInternals=t,hs(t,r,e,n),t=vs(null,t,r,!0,i,n)):(t.tag=0,Ae&&i&&mu(t),qe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ri(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=s1(r),e=$t(r,e),o){case 0:t=ms(null,t,r,e,n);break e;case 1:t=sd(null,t,r,e,n);break e;case 11:t=ad(null,t,r,e,n);break e;case 14:t=ld(null,t,r,$t(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),ms(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),sd(e,t,r,o,n);case 3:e:{if(dh(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Op(e,t),Yi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Or(Error(_(423)),t),t=ud(e,t,r,n,o);break e}else if(r!==o){o=Or(Error(_(424)),t),t=ud(e,t,r,n,o);break e}else for(ct=gn(t.stateNode.containerInfo.firstChild),dt=t,Ae=!0,At=null,n=Fp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nr(),r===o){t=en(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return jp(t),e===null&&ds(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,as(r,o)?a=null:i!==null&&as(r,i)&&(t.flags|=32),ch(e,t),qe(e,t,a,n),t.child;case 6:return e===null&&ds(t),null;case 13:return fh(e,t,n);case 4:return $u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),ad(e,t,r,o,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,be(Ki,r._currentValue),r._currentValue=a,i!==null)if(Tt(i.value,a)){if(i.children===o.children&&!at.current){t=en(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Xt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),fs(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),fs(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}qe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Er(t,n),o=wt(o),r=r(o),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,o=$t(r,t.pendingProps),o=$t(r.type,o),ld(e,t,r,o,n);case 15:return sh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Ri(e,t),t.tag=1,lt(r)?(e=!0,Vi(t)):e=!1,Er(t,n),Mp(t,r,o),hs(t,r,o,n),vs(null,t,r,!0,e,n);case 19:return ph(e,t,n);case 22:return uh(e,t,n)}throw Error(_(156,t.tag))};function Rh(e,t){return tp(e,t)}function l1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new l1(e,t,n,r)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s1(e){if(typeof e=="function")return Fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ou)return 11;if(e===iu)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ni(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Fu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ur:return jn(n.children,o,i,t);case ru:a=8,o|=8;break;case zl:return e=yt(12,n,t,o|2),e.elementType=zl,e.lanes=i,e;case Fl:return e=yt(13,n,t,o),e.elementType=Fl,e.lanes=i,e;case jl:return e=yt(19,n,t,o),e.elementType=jl,e.lanes=i,e;case zf:return Ea(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _f:a=10;break e;case Mf:a=9;break e;case ou:a=11;break e;case iu:a=14;break e;case on:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=yt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function jn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Ea(e,t,n,r){return e=yt(22,e,r,t),e.elementType=zf,e.lanes=n,e.stateNode={isHidden:!1},e}function kl(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function bl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ju(e,t,n,r,o,i,a,l,s){return e=new u1(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(i),e}function c1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ph(e){if(!e)return $n;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(lt(n))return Rp(e,n,t)}return t}function Th(e,t,n,r,o,i,a,l,s){return e=ju(n,r,!0,e,o,i,a,l,s),e.context=Ph(null),n=e.current,r=et(),o=yn(n),i=Xt(r,o),i.callback=t!=null?t:null,mn(n,i,o),e.current.lanes=o,Ho(e,o,r),st(e,r),e}function La(e,t,n,r){var o=t.current,i=et(),a=yn(o);return n=Ph(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(o,t,a),e!==null&&(Pt(e,o,a,i),Ai(e,o,a)),a}function ra(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bu(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function d1(){return null}var Nh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uu(e){this._internalRoot=e}Ra.prototype.render=Uu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));La(e,t,null,null)};Ra.prototype.unmount=Uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){La(null,e,null,null)}),t[Jt]=null}};function Ra(e){this._internalRoot=e}Ra.prototype.unstable_scheduleHydration=function(e){if(e){var t=sp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&cp(e)}};function Hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function f1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ra(a);i.call(u)}}var a=Th(t,r,e,0,null,!1,!1,"",wd);return e._reactRootContainer=a,e[Jt]=a.current,Po(e.nodeType===8?e.parentNode:e),Qn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ra(s);l.call(u)}}var s=ju(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=s,e[Jt]=s.current,Po(e.nodeType===8?e.parentNode:e),Qn(function(){La(t,s,n,r)}),s}function Ta(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=ra(a);l.call(s)}}La(t,a,e,o)}else a=f1(n,t,e,o,r);return ra(a)}ap=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lo(t.pendingLanes);n!==0&&(su(t,n|1),st(t,De()),(me&6)===0&&(_r=De()+500,Rn()))}break;case 13:Qn(function(){var r=qt(e,1);if(r!==null){var o=et();Pt(r,e,1,o)}}),Bu(e,1)}};uu=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=et();Pt(t,e,134217728,n)}Bu(e,134217728)}};lp=function(e){if(e.tag===13){var t=yn(e),n=qt(e,t);if(n!==null){var r=et();Pt(n,e,t,r)}Bu(e,t)}};sp=function(){return we};up=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Xl=function(e,t,n){switch(t){case"input":if(Hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Sa(r);if(!o)throw Error(_(90));jf(r),Hl(r,o)}}}break;case"textarea":Uf(e,n);break;case"select":t=n.value,t!=null&&br(e,!!n.multiple,t,!1)}};Yf=_u;Xf=Qn;var p1={usingClientEntryPoint:!1,Events:[Wo,pr,Sa,Kf,Gf,_u]},Jr={findFiberByHostInstance:In,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},h1={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qf(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||d1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fi.isDisabled&&fi.supportsFiber)try{va=fi.inject(h1),zt=fi}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p1;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(t))throw Error(_(200));return c1(e,t,null,n)};pt.createRoot=function(e,t){if(!Hu(e))throw Error(_(299));var n=!1,r="",o=Nh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ju(e,1,!1,null,null,n,!1,r,o),e[Jt]=t.current,Po(e.nodeType===8?e.parentNode:e),new Uu(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=qf(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return Qn(e)};pt.hydrate=function(e,t,n){if(!Pa(t))throw Error(_(200));return Ta(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!Hu(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Nh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Th(t,null,e,1,n!=null?n:null,o,!1,i,a),e[Jt]=t.current,Po(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ra(t)};pt.render=function(e,t,n){if(!Pa(t))throw Error(_(200));return Ta(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Pa(e))throw Error(_(40));return e._reactRootContainer?(Qn(function(){Ta(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};pt.unstable_batchedUpdates=_u;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pa(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ta(e,t,n,!1,r)};pt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=pt})(qs);var Sd=qs.exports;_l.createRoot=Sd.createRoot,_l.hydrateRoot=Sd.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}var Oe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Oe||(Oe={}));const kd="popstate";function g1(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:l="",hash:s=""}=Bt(o.location.hash.substr(1));return Bn("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:tn(i))}function r(o,i){m1(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return y1(t,n,r,e)}function m1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function v1(){return Math.random().toString(36).substr(2,8)}function bd(e){return{usr:e.state,key:e.key}}function Bn(e,t,n,r){return n===void 0&&(n=null),Ee({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bt(t):t,{state:n,key:t&&t.key||r||v1()})}function tn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fo(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:tn(e);return new URL(n,t)}function y1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Oe.Pop,s=null;function u(){l=Oe.Pop,s&&s({action:l,location:c.location})}function f(v,m){l=Oe.Push;let w=Bn(c.location,v,m);n&&n(w,v);let b=bd(w),h=c.createHref(w);try{a.pushState(b,"",h)}catch{o.location.assign(h)}i&&s&&s({action:l,location:c.location})}function d(v,m){l=Oe.Replace;let w=Bn(c.location,v,m);n&&n(w,v);let b=bd(w),h=c.createHref(w);a.replaceState(b,"",h),i&&s&&s({action:l,location:c.location})}let c={get action(){return l},get location(){return e(o,a)},listen(v){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(kd,u),s=v,()=>{o.removeEventListener(kd,u),s=null}},createHref(v){return t(o,v)},encodeLocation(v){let m=Fo(tn(v));return Ee({},v,{pathname:m.pathname,search:m.search,hash:m.hash})},push:f,replace:d,go(v){return a.go(v)}};return c}var Ue;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ue||(Ue={}));function x1(e){return e.index===!0}function Dh(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,o)=>{let i=[...t,o],a=typeof r.id=="string"?r.id:i.join("-");return pe(r.index!==!0||!r.children,"Cannot specify children on an index route"),pe(!n.has(a),'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),n.add(a),x1(r)?Ee({},r,{id:a}):Ee({},r,{id:a,children:r.children?Dh(r.children,i,n):void 0})})}function uo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Bt(t):t,o=Oh(r.pathname||"/",n);if(o==null)return null;let i=Ih(e);w1(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=R1(i[l],N1(o));return a}function Ih(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let a={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(pe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let l=wn([r,a.relativePath]),s=n.concat(a);o.children&&o.children.length>0&&(pe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Ih(o.children,t,s,l)),!(o.path==null&&!o.index)&&t.push({path:l,score:E1(l,o.index),routesMeta:s})}),t}function w1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:L1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S1=/^:\w+$/,k1=3,b1=2,$1=1,C1=10,A1=-2,$d=e=>e==="*";function E1(e,t){let n=e.split("/"),r=n.length;return n.some($d)&&(r+=A1),t&&(r+=b1),n.filter(o=>!$d(o)).reduce((o,i)=>o+(S1.test(i)?k1:i===""?$1:C1),r)}function L1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function R1(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=P1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;i.push({params:r,pathname:wn([o,f.pathname]),pathnameBase:_1(wn([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=wn([o,f.pathnameBase]))}return i}function P1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=T1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let c=l[d]||"";a=i.slice(0,i.length-c.length).replace(/(.)\/+$/,"$1")}return u[f]=D1(l[d]||"",f),u},{}),pathname:i,pathnameBase:a,pattern:e}}function T1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function N1(e){try{return decodeURI(e)}catch(t){return Vu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function D1(e,t){try{return decodeURIComponent(e)}catch(n){return Vu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Oh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function I1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Bt(e):e;return{pathname:n?n.startsWith("/")?n:O1(n,t):t,search:M1(r),hash:z1(o)}}function O1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function $l(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wu(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _h(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Bt(e):(o=Ee({},e),pe(!o.pathname||!o.pathname.includes("?"),$l("?","pathname","search",o)),pe(!o.pathname||!o.pathname.includes("#"),$l("#","pathname","hash",o)),pe(!o.search||!o.search.includes("#"),$l("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let c=a.split("/");for(;c[0]==="..";)c.shift(),d-=1;o.pathname=c.join("/")}l=d>=0?t[d]:"/"}let s=I1(o,l),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const wn=e=>e.join("/").replace(/\/\/+/g,"/"),_1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,z1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Cd extends Error{}class F1{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,pe(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((o,i)=>n=i),this.controller=new AbortController;let r=()=>n(new Cd("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(t).reduce((o,i)=>{let[a,l]=i;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{})}trackPromise(t,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(t);let r=Promise.race([n,this.abortPromise]).then(o=>this.onSettle(r,t,null,o),o=>this.onSettle(r,t,o));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,o){if(this.controller.signal.aborted&&r instanceof Cd)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const i=this.subscriber;return r?(Object.defineProperty(t,"_error",{get:()=>r}),i&&i(!1),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>o}),i&&i(!1),o)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let t=this.subscriber;t&&t(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(o=>{this.subscribe(i=>{t.removeEventListener("abort",r),(i||this.done)&&o(i)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return pe(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,o]=n;return Object.assign(t,{[r]:B1(o)})},{})}}function j1(e){return e instanceof Promise&&e._tracked===!0}function B1(e){if(!j1(e))return e;if(e._error)throw e._error;return e._data}class Hr{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function Mh(e){return e instanceof Hr}const Cl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},U1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},H1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V1=!H1;function W1(e){pe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=Dh(e.routes),n=null,r=new Set,o=null,i=null,a=null,l=!1,s=uo(t,e.history.location,e.basename),u=null;if(s==null){let{matches:C,route:N,error:I}=Pd(t);s=C,u={[N.id]:I}}let f=!s.some(C=>C.route.loader)||e.hydrationData!=null,d,c={historyAction:e.history.action,location:e.history.location,matches:s,initialized:f,navigation:Cl,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||u,fetchers:new Map},v=Oe.Pop,m=!1,w,b=!1,h=!1,p=[],g=[],x=new Map,$=0,A=-1,P=new Map,M=new Set,X=new Map,U=new Map;function de(){return n=e.history.listen(C=>{let{action:N,location:I}=C;return E(N,I)}),c.initialized||E(Oe.Pop,c.location),d}function ie(){n&&n(),r.clear(),w&&w.abort(),c.fetchers.forEach((C,N)=>R(N))}function ue(C){return r.add(C),()=>r.delete(C)}function ee(C){c=Ee({},c,C),r.forEach(N=>N(c))}function re(C,N){var I;let J=c.actionData!=null&&c.navigation.formMethod!=null&&c.navigation.state==="loading"&&((I=c.navigation.formAction)==null?void 0:I.split("?")[0])===C.pathname,q=N.loaderData?{loaderData:El(c.loaderData,N.loaderData,N.matches||[])}:{};ee(Ee({},J?{}:{actionData:null},N,q,{historyAction:v,location:C,initialized:!0,navigation:Cl,revalidation:"idle",restoreScrollPosition:c.navigation.formData?!1:le(C,N.matches||c.matches),preventScrollReset:m})),b||v===Oe.Pop||(v===Oe.Push?e.history.push(C,C.state):v===Oe.Replace&&e.history.replace(C,C.state)),v=Oe.Pop,m=!1,b=!1,h=!1,p=[],g=[]}async function ke(C,N){if(typeof C=="number"){e.history.go(C);return}let{path:I,submission:J,error:q}=Ad(C,N),oe=Bn(c.location,I,N&&N.state);oe=e.history.encodeLocation(oe);let j=(N&&N.replace)===!0||J!=null?Oe.Replace:Oe.Push,te=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0;return await E(j,oe,{submission:J,pendingError:q,preventScrollReset:te,replace:N&&N.replace})}function se(){if(V(),ee({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){E(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}E(v||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function E(C,N,I){w&&w.abort(),w=null,v=C,b=(I&&I.startUninterruptedRevalidation)===!0,ve(c.location,c.matches),m=(I&&I.preventScrollReset)===!0;let J=I&&I.overrideNavigation,q=uo(t,N,e.basename);if(!q){let{matches:Qe,route:er,error:Ht}=Pd(t);fe(),re(N,{matches:Qe,loaderData:{},errors:{[er.id]:Ht}});return}if(Z1(c.location,N)){re(N,{matches:q});return}w=new AbortController;let oe=eo(N,w.signal,I&&I.submission),j,te;if(I&&I.pendingError)te={[wr(q).route.id]:I.pendingError};else if(I&&I.submission){let Qe=await H(oe,N,I.submission,q,{replace:I.replace});if(Qe.shortCircuited)return;j=Qe.pendingActionData,te=Qe.pendingActionError,J=Ee({state:"loading",location:N},I.submission)}let{shortCircuited:ye,loaderData:xe,errors:ge}=await Y(oe,N,q,J,I&&I.submission,I&&I.replace,j,te);ye||(w=null,re(N,{matches:q,loaderData:xe,errors:ge}))}async function H(C,N,I,J,q){V();let oe=Ee({state:"submitting",location:N},I);ee({navigation:oe});let j,te=Od(J,N);if(!te.route.action)j=Td(N);else if(j=await qr("action",C,te,J,d.basename),C.signal.aborted)return{shortCircuited:!0};if(Rr(j)){let ye=Ee({state:"loading",location:Bn(c.location,j.location)},I);return await F(j,ye,q&&q.replace),{shortCircuited:!0}}if(wo(j)){let ye=wr(J,te.route.id);return(q&&q.replace)!==!0&&(v=Oe.Push),{pendingActionError:{[ye.route.id]:j.error}}}if(Mn(j))throw new Error("defer() is not supported in actions");return{pendingActionData:{[te.route.id]:j.data}}}async function Y(C,N,I,J,q,oe,j,te){let ye=J;ye||(ye={state:"loading",location:N,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0});let[xe,ge]=Ed(c,I,q,N,h,p,g,j,te,X);if(fe(Ke=>!(I&&I.some(rt=>rt.route.id===Ke))||xe&&xe.some(rt=>rt.route.id===Ke)),xe.length===0&&ge.length===0)return re(N,{matches:I,loaderData:El(c.loaderData,{},I),errors:te||null,actionData:j||null}),{shortCircuited:!0};b||(ge.forEach(Ke=>{let[rt]=Ke,nr=c.fetchers.get(rt),Vr={state:"loading",data:nr&&nr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(rt,Vr)}),ee(Ee({navigation:ye,actionData:j||c.actionData||null},ge.length>0?{fetchers:new Map(c.fetchers)}:{}))),A=++$,ge.forEach(Ke=>{let[rt]=Ke;return x.set(rt,w)});let{results:Qe,loaderResults:er,fetcherResults:Ht}=await k(c.matches,I,xe,ge,C);if(C.signal.aborted)return{shortCircuited:!0};ge.forEach(Ke=>{let[rt]=Ke;return x.delete(rt)});let Pn=Nd(Qe);if(Pn){let Ke=Al(c,Pn);return await F(Pn,Ke,oe),{shortCircuited:!0}}let{loaderData:Za,errors:Yo}=Rd(c,I,xe,er,te,ge,Ht,U);U.forEach((Ke,rt)=>{Ke.subscribe(nr=>{(nr||Ke.done)&&U.delete(rt)})}),Q();let tr=ae(A);return Ee({loaderData:Za,errors:Yo},tr||ge.length>0?{fetchers:new Map(c.fetchers)}:{})}function ce(C){return c.fetchers.get(C)||U1}function z(C,N,I,J){if(V1)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");x.has(C)&&B(C);let q=uo(t,I,e.basename);if(!q){O(C,N,new Hr(404,"Not Found",null));return}let{path:oe,submission:j}=Ad(I,J,!0),te=Od(q,oe);if(j){L(C,N,oe,te,q,j);return}X.set(C,[oe,te,q]),T(C,N,oe,te,q)}async function L(C,N,I,J,q,oe){if(V(),X.delete(C),!J.route.action){let{error:kt}=Td(I);O(C,N,kt);return}let j=c.fetchers.get(C),te=Ee({state:"submitting"},oe,{data:j&&j.data});c.fetchers.set(C,te),ee({fetchers:new Map(c.fetchers)});let ye=new AbortController,xe=eo(I,ye.signal,oe);x.set(C,ye);let ge=await qr("action",xe,J,q,d.basename);if(xe.signal.aborted){x.get(C)===ye&&x.delete(C);return}if(Rr(ge)){x.delete(C),M.add(C);let kt=Ee({state:"loading"},oe,{data:void 0});c.fetchers.set(C,kt),ee({fetchers:new Map(c.fetchers)});let Vt=Ee({state:"loading",location:Bn(c.location,ge.location)},oe);await F(ge,Vt);return}if(wo(ge)){O(C,N,ge.error);return}Mn(ge)&&pe(!1,"defer() is not supported in actions");let Qe=c.navigation.location||c.location,er=eo(Qe,ye.signal),Ht=c.navigation.state!=="idle"?uo(t,c.navigation.location,e.basename):c.matches;pe(Ht,"Didn't find any matches after fetcher action");let Pn=++$;P.set(C,Pn);let Za=Ee({state:"loading",data:ge.data},oe);c.fetchers.set(C,Za);let[Yo,tr]=Ed(c,Ht,oe,Qe,h,p,g,{[J.route.id]:ge.data},void 0,X);tr.filter(kt=>{let[Vt]=kt;return Vt!==C}).forEach(kt=>{let[Vt]=kt,fc=c.fetchers.get(Vt),Yg={state:"loading",data:fc&&fc.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(Vt,Yg),x.set(Vt,ye)}),ee({fetchers:new Map(c.fetchers)});let{results:Ke,loaderResults:rt,fetcherResults:nr}=await k(c.matches,Ht,Yo,tr,er);if(ye.signal.aborted)return;P.delete(C),x.delete(C),tr.forEach(kt=>{let[Vt]=kt;return x.delete(Vt)});let Vr=Nd(Ke);if(Vr){let kt=Al(c,Vr);await F(Vr,kt);return}let{loaderData:cc,errors:dc}=Rd(c,c.matches,Yo,rt,void 0,tr,nr,U),Kg={state:"idle",data:ge.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(C,Kg);let Gg=ae(Pn);c.navigation.state==="loading"&&Pn>A?(pe(v,"Expected pending action"),w&&w.abort(),re(c.navigation.location,{matches:Ht,loaderData:cc,errors:dc,fetchers:new Map(c.fetchers)})):(ee(Ee({errors:dc,loaderData:El(c.loaderData,cc,Ht)},Gg?{fetchers:new Map(c.fetchers)}:{})),h=!1)}async function T(C,N,I,J,q){let oe=c.fetchers.get(C),j={state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,data:oe&&oe.data};c.fetchers.set(C,j),ee({fetchers:new Map(c.fetchers)});let te=new AbortController,ye=eo(I,te.signal);x.set(C,te);let xe=await qr("loader",ye,J,q,d.basename);if(Mn(xe)&&(xe=await Bh(xe,ye.signal,!0)||xe),x.get(C)===te&&x.delete(C),ye.signal.aborted)return;if(Rr(xe)){let Qe=Al(c,xe);await F(xe,Qe);return}if(wo(xe)){let Qe=wr(c.matches,N);c.fetchers.delete(C),ee({fetchers:new Map(c.fetchers),errors:{[Qe.route.id]:xe.error}});return}pe(!Mn(xe),"Unhandled fetcher deferred data");let ge={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(C,ge),ee({fetchers:new Map(c.fetchers)})}async function F(C,N,I){C.revalidate&&(h=!0),pe(N.location,"Expected a location on the redirect navigation"),w=null;let J=I===!0?Oe.Replace:Oe.Push;await E(J,N.location,{overrideNavigation:N})}async function k(C,N,I,J,q){let oe=await Promise.all([...I.map(ye=>qr("loader",q,ye,N,d.basename)),...J.map(ye=>{let[,xe,ge,Qe]=ye;return qr("loader",eo(xe,q.signal),ge,Qe,d.basename)})]),j=oe.slice(0,I.length),te=oe.slice(I.length);return await Promise.all([Dd(C,I,j,q.signal,!1,c.loaderData),Dd(C,J.map(ye=>{let[,,xe]=ye;return xe}),te,q.signal,!0)]),{results:oe,loaderResults:j,fetcherResults:te}}function V(){h=!0,p.push(...fe()),X.forEach((C,N)=>{x.has(N)&&(g.push(N),B(N))})}function O(C,N,I){let J=wr(c.matches,N);R(C),ee({errors:{[J.route.id]:I},fetchers:new Map(c.fetchers)})}function R(C){x.has(C)&&B(C),X.delete(C),P.delete(C),M.delete(C),c.fetchers.delete(C)}function B(C){let N=x.get(C);pe(N,"Expected fetch controller: "+C),N.abort(),x.delete(C)}function G(C){for(let N of C){let J={state:"idle",data:ce(N).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(N,J)}}function Q(){let C=[];for(let N of M){let I=c.fetchers.get(N);pe(I,"Expected fetcher: "+N),I.state==="loading"&&(M.delete(N),C.push(N))}G(C)}function ae(C){let N=[];for(let[I,J]of P)if(J<C){let q=c.fetchers.get(I);pe(q,"Expected fetcher: "+I),q.state==="loading"&&(B(I),P.delete(I),N.push(I))}return G(N),N.length>0}function fe(C){let N=[];return U.forEach((I,J)=>{(!C||C(J))&&(I.cancel(),N.push(J),U.delete(J))}),N}function Z(C,N,I){if(o=C,a=N,i=I||(J=>J.key),!l&&c.navigation===Cl){l=!0;let J=le(c.location,c.matches);J!=null&&ee({restoreScrollPosition:J})}return()=>{o=null,a=null,i=null}}function ve(C,N){if(o&&i&&a){let I=N.map(q=>Id(q,c.loaderData)),J=i(C,I)||C.key;o[J]=a()}}function le(C,N){if(o&&i&&a){let I=N.map(oe=>Id(oe,c.loaderData)),J=i(C,I)||C.key,q=o[J];if(typeof q=="number")return q}return null}return d={get basename(){return e.basename},get state(){return c},get routes(){return t},initialize:de,subscribe:ue,enableScrollRestoration:Z,navigate:ke,fetch:z,revalidate:se,createHref:C=>e.history.createHref(C),getFetcher:ce,deleteFetcher:R,dispose:ie,_internalFetchControllers:x,_internalActiveDeferreds:U},d}const Q1=new Set(["POST","PUT","PATCH","DELETE"]);[...Q1];function Ad(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:tn(e);if(!t||!("formMethod"in t)&&!("formData"in t))return{path:r};if(t.formMethod!=null&&t.formMethod!=="get")return{path:r,submission:{formMethod:t.formMethod,formAction:jh(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData}};if(!t.formData)return{path:r};let o=Bt(r);try{let i=Fh(t.formData);n&&o.search&&Uh(o.search)&&i.append("index",""),o.search="?"+i}catch{return{path:r,error:new Hr(400,"Bad Request","Cannot submit binary form data using GET")}}return{path:tn(o)}}function Al(e,t){let{formMethod:n,formAction:r,formEncType:o,formData:i}=e.navigation;return{state:"loading",location:Bn(e.location,t.location),formMethod:n||void 0,formAction:r||void 0,formEncType:o||void 0,formData:i||void 0}}function K1(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Ed(e,t,n,r,o,i,a,l,s,u){let f=s?Object.values(s)[0]:l?Object.values(l)[0]:null,d=s?Object.keys(s)[0]:void 0,v=K1(t,d).filter((w,b)=>w.route.loader!=null&&(G1(e.loaderData,e.matches[b],w)||i.some(h=>h===w.route.id)||Ld(e.location,e.matches[b],n,r,w,o,f))),m=[];return u&&u.forEach((w,b)=>{let[h,p,g]=w;a.includes(b)?m.push([b,h,p,g]):o&&Ld(h,p,n,h,p,o,f)&&m.push([b,h,p,g])}),[v,m]}function G1(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function zh(e,t){let n=e.route.path;return e.pathname!==t.pathname||n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ld(e,t,n,r,o,i,a){let l=Fo(e),s=t.params,u=Fo(r),f=o.params,d=zh(t,o)||l.toString()===u.toString()||l.search!==u.search||i;if(o.route.shouldRevalidate){let c=o.route.shouldRevalidate(Ee({currentUrl:l,currentParams:s,nextUrl:u,nextParams:f},n,{actionResult:a,defaultShouldRevalidate:d}));if(typeof c=="boolean")return c}return d}async function qr(e,t,n,r,o,i,a){i===void 0&&(i=!1),a===void 0&&(a=!1);let l,s,u,f=new Promise((c,v)=>u=v),d=()=>u();t.signal.addEventListener("abort",d);try{let c=n.route[e];pe(c,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),s=await Promise.race([c({request:t,params:n.params}),f])}catch(c){l=Ue.error,s=c}finally{t.signal.removeEventListener("abort",d)}if(s instanceof Response){let c=s.status;if(c>=300&&c<=399){let w=s.headers.get("Location");pe(w,"Redirects returned/thrown from loaders/actions must have a Location header");let b=r.slice(0,r.indexOf(n)+1),h=Wu(b).map(x=>x.pathnameBase),p=Fo(t.url).pathname,g=_h(w,h,p);if(pe(tn(g),"Unable to resolve redirect location: "+s.headers.get("Location")),o){let x=g.pathname;g.pathname=x==="/"?o:wn([o,x])}if(w=tn(g),i)throw s.headers.set("Location",w),s;return{type:Ue.redirect,status:c,location:w,revalidate:s.headers.get("X-Remix-Revalidate")!==null}}if(a)throw{type:l||Ue.data,response:s};let v,m=s.headers.get("Content-Type");return m&&m.startsWith("application/json")?v=await s.json():v=await s.text(),l===Ue.error?{type:l,error:new Hr(c,s.statusText,v),headers:s.headers}:{type:Ue.data,data:v,statusCode:s.status,headers:s.headers}}return l===Ue.error?{type:l,error:s}:s instanceof F1?{type:Ue.deferred,deferredData:s}:{type:Ue.data,data:s}}function eo(e,t,n){let r=Fo(jh(e)).toString(),o={signal:t};if(n){let{formMethod:i,formEncType:a,formData:l}=n;o.method=i.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?Fh(l):l}return new Request(r,o)}function Fh(e){let t=new URLSearchParams;for(let[n,r]of e.entries())pe(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(n,r);return t}function Y1(e,t,n,r,o){let i={},a=null,l,s=!1,u={};return n.forEach((f,d)=>{let c=t[d].route.id;if(pe(!Rr(f),"Cannot handle redirect results in processLoaderData"),wo(f)){let v=wr(e,c),m=f.error;r&&(m=Object.values(r)[0],r=void 0),a=Object.assign(a||{},{[v.route.id]:m}),s||(s=!0,l=Mh(f.error)?f.error.status:500),f.headers&&(u[c]=f.headers)}else Mn(f)?(o&&o.set(c,f.deferredData),i[c]=f.deferredData.data):(i[c]=f.data,f.statusCode!=null&&f.statusCode!==200&&!s&&(l=f.statusCode),f.headers&&(u[c]=f.headers))}),r&&(a=r),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function Rd(e,t,n,r,o,i,a,l){let{loaderData:s,errors:u}=Y1(t,n,r,o,l);for(let f=0;f<i.length;f++){let[d,,c]=i[f];pe(a!==void 0&&a[f]!==void 0,"Did not find corresponding fetcher result");let v=a[f];if(wo(v)){let m=wr(e.matches,c.route.id);u&&u[m.route.id]||(u=Ee({},u,{[m.route.id]:v.error})),e.fetchers.delete(d)}else{if(Rr(v))throw new Error("Unhandled fetcher revalidation redirect");if(Mn(v))throw new Error("Unhandled fetcher deferred data");{let m={state:"idle",data:v.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};e.fetchers.set(d,m)}}}return{loaderData:s,errors:u}}function El(e,t,n){let r=Ee({},t);return n.forEach(o=>{let i=o.route.id;t[i]===void 0&&e[i]!==void 0&&(r[i]=e[i])}),r}function wr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function X1(e,t,n){let r=e.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-"+t+"-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r,error:new Hr(t,n,null)}}function Pd(e){return X1(e,404,"Not Found")}function Td(e){let t=typeof e=="string"?e:tn(e);return console.warn("You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for "+("["+t+"]")),{type:Ue.error,error:new Hr(405,"Method Not Allowed","")}}function Nd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Rr(n))return n}}function jh(e){let t=typeof e=="string"?Bt(e):e;return tn(Ee({},t,{hash:""}))}function Z1(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Mn(e){return e.type===Ue.deferred}function wo(e){return e.type===Ue.error}function Rr(e){return(e&&e.type)===Ue.redirect}async function Dd(e,t,n,r,o,i){for(let a=0;a<n.length;a++){let l=n[a],s=t[a],u=e.find(d=>d.route.id===s.route.id),f=u!=null&&!zh(u,s)&&(i&&i[s.route.id])!==void 0;Mn(l)&&(o||f)&&await Bh(l,r,o).then(d=>{d&&(n[a]=d||n[a])})}}async function Bh(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ue.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Ue.error,error:o}}return{type:Ue.data,data:e.deferredData.data}}}function Uh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Id(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Od(e,t){let n=typeof t=="string"?Bt(t).search:t.search;if(e[e.length-1].route.index&&Uh(n||""))return e[e.length-1];let r=Wu(e);return r[r.length-1]}var Na={exports:{}},Da={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1=y.exports,q1=Symbol.for("react.element"),ev=Symbol.for("react.fragment"),tv=Object.prototype.hasOwnProperty,nv=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rv={key:!0,ref:!0,__self:!0,__source:!0};function Hh(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)tv.call(t,r)&&!rv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:q1,type:e,key:i,ref:a,props:o,_owner:nv.current}}Da.Fragment=ev;Da.jsx=Hh;Da.jsxs=Hh;(function(e){e.exports=Da})(Na);const Vh=Na.exports.Fragment,S=Na.exports.jsx,ne=Na.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oa.apply(this,arguments)}function ov(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const iv=typeof Object.is=="function"?Object.is:ov,{useState:av,useEffect:lv,useLayoutEffect:sv,useDebugValue:uv}=Ol;function cv(e,t,n){const r=t(),[{inst:o},i]=av({inst:{value:r,getSnapshot:t}});return sv(()=>{o.value=r,o.getSnapshot=t,Ll(o)&&i({inst:o})},[e,r,t]),lv(()=>(Ll(o)&&i({inst:o}),e(()=>{Ll(o)&&i({inst:o})})),[e]),uv(r),r}function Ll(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!iv(n,r)}catch{return!0}}function dv(e,t,n){return t()}const fv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pv=!fv,hv=pv?dv:cv,gv="useSyncExternalStore"in Ol?(e=>e.useSyncExternalStore)(Ol):hv,mv=y.exports.createContext(null),Wh=y.exports.createContext(null),Qu=y.exports.createContext(null),Qh=y.exports.createContext(null),Ia=y.exports.createContext(null),Ko=y.exports.createContext({outlet:null,matches:[]}),Kh=y.exports.createContext(null);function Oa(){return y.exports.useContext(Ia)!=null}function Ku(){return Oa()||pe(!1),y.exports.useContext(Ia).location}function Gh(){Oa()||pe(!1);let{basename:e,navigator:t}=y.exports.useContext(Qh),{matches:n}=y.exports.useContext(Ko),{pathname:r}=Ku(),o=JSON.stringify(Wu(n).map(l=>l.pathnameBase)),i=y.exports.useRef(!1);return y.exports.useEffect(()=>{i.current=!0}),y.exports.useCallback(function(l,s){if(s===void 0&&(s={}),!i.current)return;if(typeof l=="number"){t.go(l);return}let u=_h(l,JSON.parse(o),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:wn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,o,r])}const vv=y.exports.createContext(null);function yv(e){let t=y.exports.useContext(Ko).outlet;return t&&S(vv.Provider,{value:e,children:t})}function xv(e,t){Oa()||pe(!1);let n=y.exports.useContext(Qu),{matches:r}=y.exports.useContext(Ko),o=r[r.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Ku(),s;if(t){var u;let m=typeof t=="string"?Bt(t):t;a==="/"||((u=m.pathname)==null?void 0:u.startsWith(a))||pe(!1),s=m}else s=l;let f=s.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",c=uo(e,{pathname:d}),v=bv(c&&c.map(m=>Object.assign({},m,{params:Object.assign({},i,m.params),pathname:wn([a,m.pathname]),pathnameBase:m.pathnameBase==="/"?a:wn([a,m.pathnameBase])})),r,n||void 0);return t&&v?S(Ia.Provider,{value:{location:oa({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:Oe.Pop},children:v}):v}function wv(){let e=Cv(),t=Mh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return ne(Vh,{children:[S("h2",{children:"Unhandled Thrown Error!"}),S("h3",{style:{fontStyle:"italic"},children:t}),n?S("pre",{style:o,children:n}):null,S("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),ne("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",S("code",{style:i,children:"errorElement"})," props on\xA0",S("code",{style:i,children:"<Route>"})]})]})}class Sv extends y.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S(Kh.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function kv(e){let{routeContext:t,match:n,children:r}=e,o=y.exports.useContext(mv);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),S(Ko.Provider,{value:t,children:r})}function bv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||pe(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,l)=>{let s=a.route.id?o==null?void 0:o[a.route.id]:null,u=n?a.route.errorElement||S(wv,{}):null,f=()=>S(kv,{match:a,routeContext:{outlet:i,matches:t.concat(r.slice(0,l+1))},children:s?u:a.route.element!==void 0?a.route.element:i});return n&&(a.route.errorElement||l===0)?S(Sv,{location:n.location,component:u,error:s,children:f()}):f()},null)}var _d;(function(e){e.UseRevalidator="useRevalidator"})(_d||(_d={}));var Rs;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Rs||(Rs={}));function $v(e){let t=y.exports.useContext(Qu);return t||pe(!1),t}function Cv(){var e;let t=y.exports.useContext(Kh),n=$v(Rs.UseRouteError),r=y.exports.useContext(Ko),o=r.matches[r.matches.length-1];return t||(r||pe(!1),o.route.id||pe(!1),(e=n.errors)==null?void 0:e[o.route.id])}function Av(e){let{fallbackElement:t,router:n}=e,r=gv(n.subscribe,()=>n.state,()=>n.state),o=y.exports.useMemo(()=>({createHref:n.createHref,go:a=>n.navigate(a),push:(a,l,s)=>n.navigate(a,{state:l,preventScrollReset:s==null?void 0:s.preventScrollReset}),replace:(a,l,s)=>n.navigate(a,{replace:!0,state:l,preventScrollReset:s==null?void 0:s.preventScrollReset})}),[n]),i=n.basename||"/";return S(Wh.Provider,{value:{router:n,navigator:o,static:!1,basename:i},children:S(Qu.Provider,{value:r,children:S(Rv,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o,children:n.state.initialized?S(Pv,{}):t})})})}function Ev(e){return yv(e.context)}function Lv(e){pe(!1)}function Rv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Oe.Pop,navigator:i,static:a=!1}=e;Oa()&&pe(!1);let l=t.replace(/^\/*/,"/"),s=y.exports.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=Bt(r));let{pathname:u="/",search:f="",hash:d="",state:c=null,key:v="default"}=r,m=y.exports.useMemo(()=>{let w=Oh(u,l);return w==null?null:{pathname:w,search:f,hash:d,state:c,key:v}},[l,u,f,d,c,v]);return m==null?null:S(Qh.Provider,{value:s,children:S(Ia.Provider,{children:n,value:{location:m,navigationType:o}})})}function Pv(e){let{children:t,location:n}=e,r=y.exports.useContext(Wh),o=r&&!t?r.router.routes:Ps(t);return xv(o,n)}var Md;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Md||(Md={}));new Promise(()=>{});function Ps(e,t){t===void 0&&(t=[]);let n=[];return y.exports.Children.forEach(e,(r,o)=>{if(!y.exports.isValidElement(r))return;if(r.type===y.exports.Fragment){n.push.apply(n,Ps(r.props.children,t));return}r.type!==Lv&&pe(!1),!r.props.index||!r.props.children||pe(!1);let i=[...t,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Ps(r.props.children,i)),n.push(a)}),n}function Yh(e){return e.map(t=>{let n=oa({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=Yh(n.children)),n})}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tv(e,t){var n;return W1({basename:t==null?void 0:t.basename,history:g1({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||((n=window)==null?void 0:n.__staticRouterHydrationData),routes:Yh(e)}).initialize()}var zd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(zd||(zd={}));var Fd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Fd||(Fd={}));const Ts={};var _a={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Gu=je?Symbol.for("react.element"):60103,Yu=je?Symbol.for("react.portal"):60106,Ma=je?Symbol.for("react.fragment"):60107,za=je?Symbol.for("react.strict_mode"):60108,Fa=je?Symbol.for("react.profiler"):60114,ja=je?Symbol.for("react.provider"):60109,Ba=je?Symbol.for("react.context"):60110,Xu=je?Symbol.for("react.async_mode"):60111,Ua=je?Symbol.for("react.concurrent_mode"):60111,Ha=je?Symbol.for("react.forward_ref"):60112,Va=je?Symbol.for("react.suspense"):60113,Nv=je?Symbol.for("react.suspense_list"):60120,Wa=je?Symbol.for("react.memo"):60115,Qa=je?Symbol.for("react.lazy"):60116,Dv=je?Symbol.for("react.block"):60121,Iv=je?Symbol.for("react.fundamental"):60117,Ov=je?Symbol.for("react.responder"):60118,_v=je?Symbol.for("react.scope"):60119;function gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gu:switch(e=e.type,e){case Xu:case Ua:case Ma:case Fa:case za:case Va:return e;default:switch(e=e&&e.$$typeof,e){case Ba:case Ha:case Qa:case Wa:case ja:return e;default:return t}}case Yu:return t}}}function Xh(e){return gt(e)===Ua}Se.AsyncMode=Xu;Se.ConcurrentMode=Ua;Se.ContextConsumer=Ba;Se.ContextProvider=ja;Se.Element=Gu;Se.ForwardRef=Ha;Se.Fragment=Ma;Se.Lazy=Qa;Se.Memo=Wa;Se.Portal=Yu;Se.Profiler=Fa;Se.StrictMode=za;Se.Suspense=Va;Se.isAsyncMode=function(e){return Xh(e)||gt(e)===Xu};Se.isConcurrentMode=Xh;Se.isContextConsumer=function(e){return gt(e)===Ba};Se.isContextProvider=function(e){return gt(e)===ja};Se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gu};Se.isForwardRef=function(e){return gt(e)===Ha};Se.isFragment=function(e){return gt(e)===Ma};Se.isLazy=function(e){return gt(e)===Qa};Se.isMemo=function(e){return gt(e)===Wa};Se.isPortal=function(e){return gt(e)===Yu};Se.isProfiler=function(e){return gt(e)===Fa};Se.isStrictMode=function(e){return gt(e)===za};Se.isSuspense=function(e){return gt(e)===Va};Se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ma||e===Ua||e===Fa||e===za||e===Va||e===Nv||typeof e=="object"&&e!==null&&(e.$$typeof===Qa||e.$$typeof===Wa||e.$$typeof===ja||e.$$typeof===Ba||e.$$typeof===Ha||e.$$typeof===Iv||e.$$typeof===Ov||e.$$typeof===_v||e.$$typeof===Dv)};Se.typeOf=gt;(function(e){e.exports=Se})(_a);function Mv(e){function t(z,L,T,F,k){for(var V=0,O=0,R=0,B=0,G,Q,ae=0,fe=0,Z,ve=Z=G=0,le=0,C=0,N=0,I=0,J=T.length,q=J-1,oe,j="",te="",ye="",xe="",ge;le<J;){if(Q=T.charCodeAt(le),le===q&&O+B+R+V!==0&&(O!==0&&(Q=O===47?10:47),B=R=V=0,J++,q++),O+B+R+V===0){if(le===q&&(0<C&&(j=j.replace(c,"")),0<j.trim().length)){switch(Q){case 32:case 9:case 59:case 13:case 10:break;default:j+=T.charAt(le)}Q=59}switch(Q){case 123:for(j=j.trim(),G=j.charCodeAt(0),Z=1,I=++le;le<J;){switch(Q=T.charCodeAt(le)){case 123:Z++;break;case 125:Z--;break;case 47:switch(Q=T.charCodeAt(le+1)){case 42:case 47:e:{for(ve=le+1;ve<q;++ve)switch(T.charCodeAt(ve)){case 47:if(Q===42&&T.charCodeAt(ve-1)===42&&le+2!==ve){le=ve+1;break e}break;case 10:if(Q===47){le=ve+1;break e}}le=ve}}break;case 91:Q++;case 40:Q++;case 34:case 39:for(;le++<q&&T.charCodeAt(le)!==Q;);}if(Z===0)break;le++}switch(Z=T.substring(I,le),G===0&&(G=(j=j.replace(d,"").trim()).charCodeAt(0)),G){case 64:switch(0<C&&(j=j.replace(c,"")),Q=j.charCodeAt(1),Q){case 100:case 109:case 115:case 45:C=L;break;default:C=ke}if(Z=t(L,C,Z,Q,k+1),I=Z.length,0<E&&(C=n(ke,j,N),ge=l(3,Z,C,L,ue,ie,I,Q,k,F),j=C.join(""),ge!==void 0&&(I=(Z=ge.trim()).length)===0&&(Q=0,Z="")),0<I)switch(Q){case 115:j=j.replace(A,a);case 100:case 109:case 45:Z=j+"{"+Z+"}";break;case 107:j=j.replace(p,"$1 $2"),Z=j+"{"+Z+"}",Z=re===1||re===2&&i("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=j+Z,F===112&&(Z=(te+=Z,""))}else Z="";break;default:Z=t(L,n(L,j,N),Z,F,k+1)}ye+=Z,Z=N=C=ve=G=0,j="",Q=T.charCodeAt(++le);break;case 125:case 59:if(j=(0<C?j.replace(c,""):j).trim(),1<(I=j.length))switch(ve===0&&(G=j.charCodeAt(0),G===45||96<G&&123>G)&&(I=(j=j.replace(" ",":")).length),0<E&&(ge=l(1,j,L,z,ue,ie,te.length,F,k,F))!==void 0&&(I=(j=ge.trim()).length)===0&&(j="\0\0"),G=j.charCodeAt(0),Q=j.charCodeAt(1),G){case 0:break;case 64:if(Q===105||Q===99){xe+=j+T.charAt(le);break}default:j.charCodeAt(I-1)!==58&&(te+=o(j,G,Q,j.charCodeAt(2)))}N=C=ve=G=0,j="",Q=T.charCodeAt(++le)}}switch(Q){case 13:case 10:O===47?O=0:1+G===0&&F!==107&&0<j.length&&(C=1,j+="\0"),0<E*Y&&l(0,j,L,z,ue,ie,te.length,F,k,F),ie=1,ue++;break;case 59:case 125:if(O+B+R+V===0){ie++;break}default:switch(ie++,oe=T.charAt(le),Q){case 9:case 32:if(B+V+O===0)switch(ae){case 44:case 58:case 9:case 32:oe="";break;default:Q!==32&&(oe=" ")}break;case 0:oe="\\0";break;case 12:oe="\\f";break;case 11:oe="\\v";break;case 38:B+O+V===0&&(C=N=1,oe="\f"+oe);break;case 108:if(B+O+V+ee===0&&0<ve)switch(le-ve){case 2:ae===112&&T.charCodeAt(le-3)===58&&(ee=ae);case 8:fe===111&&(ee=fe)}break;case 58:B+O+V===0&&(ve=le);break;case 44:O+R+B+V===0&&(C=1,oe+="\r");break;case 34:case 39:O===0&&(B=B===Q?0:B===0?Q:B);break;case 91:B+O+R===0&&V++;break;case 93:B+O+R===0&&V--;break;case 41:B+O+V===0&&R--;break;case 40:if(B+O+V===0){if(G===0)switch(2*ae+3*fe){case 533:break;default:G=1}R++}break;case 64:O+R+B+V+ve+Z===0&&(Z=1);break;case 42:case 47:if(!(0<B+V+R))switch(O){case 0:switch(2*Q+3*T.charCodeAt(le+1)){case 235:O=47;break;case 220:I=le,O=42}break;case 42:Q===47&&ae===42&&I+2!==le&&(T.charCodeAt(I+2)===33&&(te+=T.substring(I,le+1)),oe="",O=0)}}O===0&&(j+=oe)}fe=ae,ae=Q,le++}if(I=te.length,0<I){if(C=L,0<E&&(ge=l(2,te,C,z,ue,ie,I,F,k,F),ge!==void 0&&(te=ge).length===0))return xe+te+ye;if(te=C.join(",")+"{"+te+"}",re*ee!==0){switch(re!==2||i(te,2)||(ee=0),ee){case 111:te=te.replace(x,":-moz-$1")+te;break;case 112:te=te.replace(g,"::-webkit-input-$1")+te.replace(g,"::-moz-$1")+te.replace(g,":-ms-input-$1")+te}ee=0}}return xe+te+ye}function n(z,L,T){var F=L.trim().split(b);L=F;var k=F.length,V=z.length;switch(V){case 0:case 1:var O=0;for(z=V===0?"":z[0]+" ";O<k;++O)L[O]=r(z,L[O],T).trim();break;default:var R=O=0;for(L=[];O<k;++O)for(var B=0;B<V;++B)L[R++]=r(z[B]+" ",F[O],T).trim()}return L}function r(z,L,T){var F=L.charCodeAt(0);switch(33>F&&(F=(L=L.trim()).charCodeAt(0)),F){case 38:return L.replace(h,"$1"+z.trim());case 58:return z.trim()+L.replace(h,"$1"+z.trim());default:if(0<1*T&&0<L.indexOf("\f"))return L.replace(h,(z.charCodeAt(0)===58?"":"$1")+z.trim())}return z+L}function o(z,L,T,F){var k=z+";",V=2*L+3*T+4*F;if(V===944){z=k.indexOf(":",9)+1;var O=k.substring(z,k.length-1).trim();return O=k.substring(0,z).trim()+O+";",re===1||re===2&&i(O,1)?"-webkit-"+O+O:O}if(re===0||re===2&&!i(k,1))return k;switch(V){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(de,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return O=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+O+"-webkit-"+k+"-ms-flex-pack"+O+k;case 1005:return m.test(k)?k.replace(v,":-webkit-")+k.replace(v,":-moz-")+k:k;case 1e3:switch(O=k.substring(13).trim(),L=O.indexOf("-")+1,O.charCodeAt(0)+O.charCodeAt(L)){case 226:O=k.replace($,"tb");break;case 232:O=k.replace($,"tb-rl");break;case 220:O=k.replace($,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+O+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(L=(k=z).length-10,O=(k.charCodeAt(L)===33?k.substring(0,L):k).substring(z.indexOf(":",7)+1).trim(),V=O.charCodeAt(0)+(O.charCodeAt(7)|0)){case 203:if(111>O.charCodeAt(8))break;case 115:k=k.replace(O,"-webkit-"+O)+";"+k;break;case 207:case 102:k=k.replace(O,"-webkit-"+(102<V?"inline-":"")+"box")+";"+k.replace(O,"-webkit-"+O)+";"+k.replace(O,"-ms-"+O+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return O=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+O+"-ms-flex-"+O+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(M,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(M,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(U.test(z)===!0)return(O=z.substring(z.indexOf(":")+1)).charCodeAt(0)===115?o(z.replace("stretch","fill-available"),L,T,F).replace(":fill-available",":stretch"):k.replace(O,"-webkit-"+O)+k.replace(O,"-moz-"+O.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,T+F===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+k}return k}function i(z,L){var T=z.indexOf(L===1?":":"{"),F=z.substring(0,L!==3?T:10);return T=z.substring(T+1,z.length-1),H(L!==2?F:F.replace(X,"$1"),T,L)}function a(z,L){var T=o(L,L.charCodeAt(0),L.charCodeAt(1),L.charCodeAt(2));return T!==L+";"?T.replace(P," or ($1)").substring(4):"("+L+")"}function l(z,L,T,F,k,V,O,R,B,G){for(var Q=0,ae=L,fe;Q<E;++Q)switch(fe=se[Q].call(f,z,ae,T,F,k,V,O,R,B,G)){case void 0:case!1:case!0:case null:break;default:ae=fe}if(ae!==L)return ae}function s(z){switch(z){case void 0:case null:E=se.length=0;break;default:if(typeof z=="function")se[E++]=z;else if(typeof z=="object")for(var L=0,T=z.length;L<T;++L)s(z[L]);else Y=!!z|0}return s}function u(z){return z=z.prefix,z!==void 0&&(H=null,z?typeof z!="function"?re=1:(re=2,H=z):re=0),u}function f(z,L){var T=z;if(33>T.charCodeAt(0)&&(T=T.trim()),ce=T,T=[ce],0<E){var F=l(-1,L,T,T,ue,ie,0,0,0,0);F!==void 0&&typeof F=="string"&&(L=F)}var k=t(ke,T,L,0,0);return 0<E&&(F=l(-2,k,T,T,ue,ie,k.length,0,0,0),F!==void 0&&(k=F)),ce="",ee=0,ie=ue=1,k}var d=/^\0+/g,c=/[\0\r\f]/g,v=/: */g,m=/zoo|gra/,w=/([,: ])(transform)/g,b=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,x=/:(read-only)/g,$=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,M=/-self|flex-/g,X=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,de=/([^-])(image-set\()/,ie=1,ue=1,ee=0,re=1,ke=[],se=[],E=0,H=null,Y=0,ce="";return f.use=s,f.set=u,e!==void 0&&u(e),f}var zv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Fv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var jv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,jd=Fv(function(e){return jv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Zu=_a.exports,Bv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ju={};Ju[Zu.ForwardRef]=Hv;Ju[Zu.Memo]=Zh;function Bd(e){return Zu.isMemo(e)?Zh:Ju[e.$$typeof]||Bv}var Vv=Object.defineProperty,Wv=Object.getOwnPropertyNames,Ud=Object.getOwnPropertySymbols,Qv=Object.getOwnPropertyDescriptor,Kv=Object.getPrototypeOf,Hd=Object.prototype;function Jh(e,t,n){if(typeof t!="string"){if(Hd){var r=Kv(t);r&&r!==Hd&&Jh(e,r,n)}var o=Wv(t);Ud&&(o=o.concat(Ud(t)));for(var i=Bd(e),a=Bd(t),l=0;l<o.length;++l){var s=o[l];if(!Uv[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var u=Qv(t,s);try{Vv(e,s,u)}catch{}}}}return e}var Gv=Jh;function Et(){return(Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Vd=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ns=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_a.exports.typeOf(e)},ia=Object.freeze([]),Sn=Object.freeze({});function Mr(e){return typeof e=="function"}function Wd(e){return e.displayName||e.name||"Component"}function qu(e){return e&&typeof e.styledComponentId=="string"}var zr=typeof Ts<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ec=typeof window<"u"&&"HTMLElement"in window,Yv=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Ts<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof Ts<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),Xv={};function Kn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Zv=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Kn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Di=new Map,aa=new Map,So=1,pi=function(e){if(Di.has(e))return Di.get(e);for(;aa.has(So);)So++;var t=So++;return Di.set(e,t),aa.set(t,e),t},Jv=function(e){return aa.get(e)},qv=function(e,t){t>=So&&(So=t+1),Di.set(e,t),aa.set(t,e)},ey="style["+zr+'][data-styled-version="5.3.6"]',ty=new RegExp("^"+zr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ny=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},ry=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(ty);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(qv(u,s),ny(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},oy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},qh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var f=s[u];if(f&&f.nodeType===1&&f.hasAttribute(zr))return f}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(zr,"active"),r.setAttribute("data-styled-version","5.3.6");var a=oy();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},iy=function(){function e(n){var r=this.element=qh(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}Kn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ay=function(){function e(n){var r=this.element=qh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),ly=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Qd=ec,sy={isServer:!ec,useCSSOMInjection:!Yv},la=function(){function e(n,r,o){n===void 0&&(n=Sn),r===void 0&&(r={}),this.options=Et({},sy,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&ec&&Qd&&(Qd=!1,function(i){for(var a=document.querySelectorAll(ey),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(zr)!=="active"&&(ry(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return pi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Et({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new ly(a):i?new iy(a):new ay(a),new Zv(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(pi(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(pi(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(pi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=Jv(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var f=zr+".g"+a+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(c){c.length>0&&(d+=c+",")}),i+=""+u+f+'{content:"'+d+`"}/*!sc*/
`}}}return i}(this)},e}(),uy=/(a)(d)/gi,Kd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ds(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kd(t%52)+n;return(Kd(t%52)+n).replace(uy,"$1-$2")}var Sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},eg=function(e){return Sr(5381,e)};function tg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Mr(n)&&!qu(n))return!1}return!0}var cy=eg("5.3.6"),dy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&tg(t),this.componentId=n,this.baseHash=Sr(cy,n),this.baseStyle=r,la.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Gn(this.rules,t,n,r).join(""),l=Ds(Sr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,f=Sr(this.baseHash,r.hash),d="",c=0;c<u;c++){var v=this.rules[c];if(typeof v=="string")d+=v;else if(v){var m=Gn(v,t,n,r),w=Array.isArray(m)?m.join(""):m;f=Sr(f,w+c),d+=w}}if(d){var b=Ds(f>>>0);if(!n.hasNameForId(o,b)){var h=r(d,"."+b,void 0,o);n.insertRules(o,b,h)}i.push(b)}}return i.join(" ")},e}(),fy=/^\s*\/\/.*$/gm,py=[":","[",".","#"];function hy(e){var t,n,r,o,i=e===void 0?Sn:e,a=i.options,l=a===void 0?Sn:a,s=i.plugins,u=s===void 0?ia:s,f=new Mv(l),d=[],c=function(w){function b(h){if(h)try{w(h+"}")}catch{}}return function(h,p,g,x,$,A,P,M,X,U){switch(h){case 1:if(X===0&&p.charCodeAt(0)===64)return w(p+";"),"";break;case 2:if(M===0)return p+"/*|*/";break;case 3:switch(M){case 102:case 112:return w(g[0]+p),"";default:return p+(U===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(b)}}}(function(w){d.push(w)}),v=function(w,b,h){return b===0&&py.indexOf(h[n.length])!==-1||h.match(o)?w:"."+t};function m(w,b,h,p){p===void 0&&(p="&");var g=w.replace(fy,""),x=b&&h?h+" "+b+" { "+g+" }":g;return t=p,n=b,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),f(h||!b?"":b,x)}return f.use([].concat(u,[function(w,b,h){w===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,v))},c,function(w){if(w===-2){var b=d;return d=[],b}}])),m.hash=u.length?u.reduce(function(w,b){return b.name||Kn(15),Sr(w,b.name)},5381).toString():"",m}var ng=Lt.createContext();ng.Consumer;var rg=Lt.createContext(),gy=(rg.Consumer,new la),Is=hy();function og(){return y.exports.useContext(ng)||gy}function ig(){return y.exports.useContext(rg)||Is}var my=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Is);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Kn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Is),this.name+t.hash},e}(),vy=/([A-Z])/,yy=/([A-Z])/g,xy=/^ms-/,wy=function(e){return"-"+e.toLowerCase()};function Gd(e){return vy.test(e)?e.replace(yy,wy).replace(xy,"-ms-"):e}var Yd=function(e){return e==null||e===!1||e===""};function Gn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Gn(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Yd(e))return"";if(qu(e))return"."+e.styledComponentId;if(Mr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Gn(s,t,n,r)}var u;return e instanceof my?n?(e.inject(n,r),e.getName(r)):e:Ns(e)?function f(d,c){var v,m,w=[];for(var b in d)d.hasOwnProperty(b)&&!Yd(d[b])&&(Array.isArray(d[b])&&d[b].isCss||Mr(d[b])?w.push(Gd(b)+":",d[b],";"):Ns(d[b])?w.push.apply(w,f(d[b],b)):w.push(Gd(b)+": "+(v=b,(m=d[b])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||v in zv?String(m).trim():m+"px")+";"));return c?[c+" {"].concat(w,["}"]):w}(e):e.toString()}var Xd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Mr(e)||Ns(e)?Xd(Gn(Vd(ia,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Xd(Gn(Vd(e,n)))}var ag=function(e,t,n){return n===void 0&&(n=Sn),e.theme!==n.theme&&e.theme||t||n.theme},Sy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ky=/(^-|-$)/g;function Rl(e){return e.replace(Sy,"-").replace(ky,"")}var lg=function(e){return Ds(eg(e)>>>0)};function hi(e){return typeof e=="string"&&!0}var Os=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},by=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function $y(e,t,n){var r=e[n];Os(t)&&Os(r)?sg(r,t):e[n]=t}function sg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Os(a))for(var l in a)by(l)&&$y(e,a[l],l)}return e}var jo=Lt.createContext();jo.Consumer;function Cy(e){var t=y.exports.useContext(jo),n=y.exports.useMemo(function(){return function(r,o){if(!r)return Kn(14);if(Mr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Kn(8):o?Et({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Lt.createElement(jo.Provider,{value:n},e.children):null}var Pl={};function ug(e,t,n){var r=qu(e),o=!hi(e),i=t.attrs,a=i===void 0?ia:i,l=t.componentId,s=l===void 0?function(p,g){var x=typeof p!="string"?"sc":Rl(p);Pl[x]=(Pl[x]||0)+1;var $=x+"-"+lg("5.3.6"+x+Pl[x]);return g?g+"-"+$:$}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(p){return hi(p)?"styled."+p:"Styled("+Wd(p)+")"}(e):u,d=t.displayName&&t.componentId?Rl(t.displayName)+"-"+t.componentId:t.componentId||s,c=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(p,g,x){return e.shouldForwardProp(p,g,x)&&t.shouldForwardProp(p,g,x)}:e.shouldForwardProp);var m,w=new dy(n,d,r?e.componentStyle:void 0),b=w.isStatic&&a.length===0,h=function(p,g){return function(x,$,A,P){var M=x.attrs,X=x.componentStyle,U=x.defaultProps,de=x.foldedComponentIds,ie=x.shouldForwardProp,ue=x.styledComponentId,ee=x.target,re=function(F,k,V){F===void 0&&(F=Sn);var O=Et({},k,{theme:F}),R={};return V.forEach(function(B){var G,Q,ae,fe=B;for(G in Mr(fe)&&(fe=fe(O)),fe)O[G]=R[G]=G==="className"?(Q=R[G],ae=fe[G],Q&&ae?Q+" "+ae:Q||ae):fe[G]}),[O,R]}(ag($,y.exports.useContext(jo),U)||Sn,$,M),ke=re[0],se=re[1],E=function(F,k,V,O){var R=og(),B=ig(),G=k?F.generateAndInjectStyles(Sn,R,B):F.generateAndInjectStyles(V,R,B);return G}(X,P,ke),H=A,Y=se.$as||$.$as||se.as||$.as||ee,ce=hi(Y),z=se!==$?Et({},$,{},se):$,L={};for(var T in z)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?L.as=z[T]:(ie?ie(T,jd,Y):!ce||jd(T))&&(L[T]=z[T]));return $.style&&se.style!==$.style&&(L.style=Et({},$.style,{},se.style)),L.className=Array.prototype.concat(de,ue,E!==ue?E:null,$.className,se.className).filter(Boolean).join(" "),L.ref=H,y.exports.createElement(Y,L)}(m,p,g,b)};return h.displayName=f,(m=Lt.forwardRef(h)).attrs=c,m.componentStyle=w,m.displayName=f,m.shouldForwardProp=v,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ia,m.styledComponentId=d,m.target=r?e.target:e,m.withComponent=function(p){var g=t.componentId,x=function(A,P){if(A==null)return{};var M,X,U={},de=Object.keys(A);for(X=0;X<de.length;X++)M=de[X],P.indexOf(M)>=0||(U[M]=A[M]);return U}(t,["componentId"]),$=g&&g+"-"+(hi(p)?p:Rl(Wd(p)));return ug(p,Et({},x,{attrs:c,componentId:$}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?sg({},e.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},o&&Gv(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var _s=function(e){return function t(n,r,o){if(o===void 0&&(o=Sn),!_a.exports.isValidElementType(r))return Kn(1,String(r));var i=function(){return n(r,o,W.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Et({},o,{},a))},i.attrs=function(a){return t(n,r,Et({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(ug,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){_s[e]=_s(e)});var Ay=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=tg(n),la.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(Gn(this.rules,r,o,i).join(""),""),l=this.componentId+n;o.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&la.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function Ey(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=W.apply(void 0,[e].concat(n)),i="sc-global-"+lg(JSON.stringify(o)),a=new Ay(o,i);function l(u){var f=og(),d=ig(),c=y.exports.useContext(jo),v=y.exports.useRef(f.allocateGSInstance(i)).current;return f.server&&s(v,u,f,c,d),y.exports.useLayoutEffect(function(){if(!f.server)return s(v,u,f,c,d),function(){return a.removeStyles(v,f)}},[v,u,f,c,d]),null}function s(u,f,d,c,v){if(a.isStatic)a.renderStyles(u,Xv,d,v);else{var m=Et({},f,{theme:ag(f,c,l.defaultProps)});a.renderStyles(u,m,d,v)}}return Lt.memo(l)}const D=_s;var Ly={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},Ry=Ly;const Py="modulepreload",Ty=function(e){return"/"+e},Zd={},sa=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Ty(i),i in Zd)return;Zd[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=o.length-1;f>=0;f--){const d=o[f];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Py,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function Ny(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}const cg=e=>document.body.setAttribute("data-loading",e);var Dy=`
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

`;const tc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",nc="inset 2px 2px 3px rgba(0,0,0,0.2)",Nt=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Dt=({background:e="material",color:t="materialText"}={})=>W`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Go=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>W`
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
`,or={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Iy=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?tc:!1,o?nc:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),Ne=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return W`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[or[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[or[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[or[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[or[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>Iy({theme:r,topLeftInner:or[t][n.topLeftInner],bottomRightInner:or[t][n.bottomRightInner],hasShadow:o})};
  `},Fr=()=>W`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,Oy=e=>Buffer.from(e).toString("base64"),_y=typeof btoa<"u"?btoa:Oy,gi=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${_y(n)})`},rc=(e="default")=>W`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Go({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
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
    background-image: ${({theme:t})=>gi(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>gi(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>gi(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>gi(t.materialText,0)};
  }
`,My=D.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,zy=y.exports.forwardRef(({children:e,underline:t=!0,...n},r)=>S(My,{ref:r,underline:t,...n,children:e}));zy.displayName="Anchor";const Fy=D.header`
  ${Ne()};
  ${Dt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,dg=y.exports.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>S(Fy,{fixed:t,position:t!==!1?n:void 0,ref:o,...r,children:e}));dg.displayName="AppBar";const qn=()=>{};function zn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function jy(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Jd(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(jy(t)))}function Cn(e){return typeof e=="number"?`${e}px`:e}const By=D.div`
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
`,Uy=D.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,fg=y.exports.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...a},l)=>S(By,{noBorder:n,ref:l,size:Cn(r),square:o,src:i,...a,children:i?S(Uy,{src:i,alt:e}):t}));fg.displayName="Avatar";const Ve={sm:"28px",md:"36px",lg:"44px"},Hy=W`
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
`,Ka=D.button`
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
            ${!e&&!t&&Fr}
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
          ${e?Go({mainColor:r.material,secondaryColor:r.borderLightest}):""}
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
            ${!e&&!t&&Fr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${Hy}
`,Xn=y.exports.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:s=qn,primary:u=!1,variant:f="default",...d},c)=>S(Ka,{active:l,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:c,size:i,square:a,type:r,variant:f,...d,children:n}));Xn.displayName="Button";function An({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const a=o!==void 0,[l,s]=y.exports.useState(e),u=y.exports.useCallback(f=>{a||s(f)},[a]);if(a&&typeof t!="function"&&!r){const f=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(f)}return[a?o:l,u]}const Ms=D.li`
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
`,zs=y.exports.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...a},l)=>S(Ms,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a,children:r}));zs.displayName="MenuListItem";const pg=D.ul.attrs(()=>({role:"menu"}))`
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
`;pg.displayName="MenuList";const jt=20,ua=D.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${jt}px;
  height: ${jt}px;
  opacity: 0;
  z-index: -1;
`,oc=D.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&Nt()}

  ${Ms} & {
    margin: 0;
    height: 100%;
  }
  ${Ms}:hover & {
    ${({$disabled:e,theme:t})=>!e&&W`
        color: ${t.materialTextInvert};
      `};
  }
`,ic=D.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ua}:focus ~ & {
    ${Fr}
  }
  ${ua}:not(:disabled) ~ &:active {
    ${Fr}
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
    ${e=>e.shadow&&`box-shadow:${nc};`}
  }
`,Vy=D.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${rc()}
`,hg=y.exports.forwardRef(({children:e,shadow:t=!0,...n},r)=>S(Ut,{ref:r,shadow:t,...n,children:S(Vy,{children:e})}));hg.displayName="ScrollView";const gg=W`
  width: ${jt}px;
  height: ${jt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Wy=D(Ut)`
  ${gg}
  width: ${jt}px;
  height: ${jt}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Qy=D.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${gg}
  width: ${jt-4}px;
  height: ${jt-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Ky=D.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Gy=D.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Go({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Yy={flat:Qy,default:Wy},Xy=y.exports.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:a=qn,style:l={},value:s,variant:u="default",...f},d)=>{var c;const[v,m]=An({defaultValue:n,onChange:a,readOnly:(c=f.readOnly)!==null&&c!==void 0?c:r,value:e}),w=y.exports.useCallback(p=>{const g=p.target.checked;m(g),a(p)},[a,m]),b=Yy[u];let h=null;return o?h=Gy:v&&(h=Ky),ne(oc,{$disabled:r,className:t,style:l,children:[S(ua,{disabled:r,onChange:r?void 0:w,readOnly:r,type:"checkbox",value:s,checked:v,"data-indeterminate":o,ref:d,...f}),S(b,{$disabled:r,role:"presentation",children:h&&S(h,{$disabled:r,variant:u})}),i&&S(ic,{children:i})]})});Xy.displayName="Checkbox";const ac=D.div`
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
`;ac.displayName="Separator";const Zy=D(Ka)`
  padding-left: 8px;
`,Jy=D(ac)`
  height: 21px;
  position: relative;
  top: 0;
`,mg=D.input`
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
`,qy=D.div`
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
  ${mg}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Fr}
    outline-offset: -8px;
  }
`,ex=D.span`
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
`,tx=y.exports.forwardRef(({value:e,defaultValue:t,onChange:n=qn,disabled:r=!1,variant:o="default",...i},a)=>{var l;const[s,u]=An({defaultValue:t,onChange:n,readOnly:(l=i.readOnly)!==null&&l!==void 0?l:r,value:e});return ne(Zy,{disabled:r,as:"div",variant:o,size:"md",children:[S(mg,{onChange:d=>{const c=d.target.value;u(c),n(d)},readOnly:r,disabled:r,value:s!=null?s:"#008080",type:"color",ref:a,...i}),S(qy,{$disabled:r,color:s!=null?s:"#008080",role:"presentation"}),o==="default"&&S(Jy,{orientation:"vertical"}),S(ex,{$disabled:r,variant:o})]})});tx.displayName="ColorInput";const nx=D.div`
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
      ${Go({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,qd=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],rx=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function ox({digit:e=0,pixelSize:t=2,...n}){const r=rx[Number(e)].map((o,i)=>o?`${qd[i]} active`:qd[i]);return S(nx,{pixelSize:t,...n,children:r.map((o,i)=>S("span",{className:o},i))})}const ix=D.div`
  ${Ne({style:"status"})}
  display: inline-flex;
  background: #000000;
`,ax={sm:1,md:2,lg:3,xl:4},lx=y.exports.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=y.exports.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return S(ix,{ref:o,...r,children:i.map((a,l)=>S(ox,{digit:a,pixelSize:ax[n]},l))})});lx.displayName="Counter";const vg=W`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ve.md};
`,sx=D(Ut).attrs({"data-testid":"variant-default"})`
  ${vg}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,ux=D.div.attrs({"data-testid":"variant-flat"})`
  ${Yn()}
  ${vg}
  position: relative;
`,yg=W`
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
`,cx=D.input`
  ${yg}
  padding: 0 8px;
`,dx=D.textarea`
  ${yg}
  padding: 8px;
  resize: none;
  ${({variant:e})=>rc(e)}
`,xg=y.exports.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=qn,shadow:o=!0,style:i,variant:a="default",...l},s)=>{const u=a==="flat"?ux:sx,f=y.exports.useMemo(()=>{var d;return l.multiline?S(dx,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:a,...l}):S(cx,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(d=l.type)!==null&&d!==void 0?d:"text",variant:a,...l})},[t,r,l,s,a]);return S(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i,children:f})});xg.displayName="TextInput";const fx=D.div`
  display: inline-flex;
  align-items: center;
`,Fs=D(Xn)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?W`
          height: calc(50% - 1px);
        `:W`
          height: 50%;
        `}
`,px=D.div`
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
`,ef=D.span`
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
  ${Fs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?W`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:W`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,wg=y.exports.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:a,step:l=1,style:s,value:u,variant:f="default",width:d,...c},v)=>{const[m,w]=An({defaultValue:t,onChange:i,readOnly:a,value:u}),b=y.exports.useCallback(A=>{const P=parseFloat(A.target.value);w(P)},[w]),h=y.exports.useCallback(A=>{const P=zn(parseFloat(((m!=null?m:0)+A).toFixed(2)),o!=null?o:null,r!=null?r:null);w(P),i==null||i(P)},[r,o,i,w,m]),p=y.exports.useCallback(()=>{m!==void 0&&(i==null||i(m))},[i,m]),g=y.exports.useCallback(()=>{h(l)},[h,l]),x=y.exports.useCallback(()=>{h(-l)},[h,l]),$=f==="flat"?"flat":"raised";return ne(fx,{className:e,style:{...s,width:d!==void 0?Cn(d):"auto"},...c,children:[S(xg,{value:m,variant:f,onChange:b,disabled:n,type:"number",readOnly:a,ref:v,fullWidth:!0,onBlur:p}),ne(px,{variant:f,children:[S(Fs,{"data-testid":"increment",variant:$,disabled:n||a,onClick:g,children:S(ef,{invert:!0})}),S(Fs,{"data-testid":"decrement",variant:$,disabled:n||a,onClick:x,children:S(ef,{})})]})]})});wg.displayName="NumberInput";function hx(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const Sg=e=>y.exports.useMemo(()=>e!=null?e:hx(),[e]),kg=W`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,bg=W`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,lc=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,gx=D.div`
  ${kg}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${lc}:focus & {
    ${bg}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,$g=W`
  height: ${Ve.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?Nt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,mx=D(Ut)`
  ${$g}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,vx=D.div`
  ${Yn()}
  ${$g}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,yx=D.select`
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
  ${kg}
  cursor: pointer;
  &:disabled {
    ${Nt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Cg=D(Ka).attrs(()=>({"aria-hidden":"true"}))`
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
`,xx=D.span`
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
  ${Cg}:active & {
    margin-top: 2px;
  }
`,wx=D.ul`
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
  box-shadow: ${tc};
  ${({variant:e="default"})=>e==="flat"?W`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:W`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>rc(e)}
`,Sx=D.li`
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
  ${({active:e})=>e?bg:""}
  user-select: none;
`,kx=[],Ag=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=kx,readOnly:a,style:l,value:s,variant:u,width:f})=>{var d;const c=y.exports.useMemo(()=>i.filter(Boolean),[i]),[v,m]=An({defaultValue:t!=null?t:(d=c==null?void 0:c[0])===null||d===void 0?void 0:d.value,onChange:o,readOnly:a,value:s}),w=!(n||a),b=y.exports.useMemo(()=>({className:e,style:{...l,width:f}}),[e,l,f]),h=y.exports.useMemo(()=>S(Cg,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised",children:S(xx,{"data-testid":"select-icon",$disabled:n})}),[n,r,u]),p=y.exports.useMemo(()=>u==="flat"?vx:mx,[u]);return y.exports.useMemo(()=>({isEnabled:w,options:c,value:v,setValue:m,wrapperProps:b,DropdownButton:h,Wrapper:p}),[h,p,w,c,m,v,b])},bx={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},$x=1e3,Cx=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:a,open:l,options:s,readOnly:u,value:f,selectRef:d,setValue:c,wrapperRef:v})=>{const m=y.exports.useRef(null),w=y.exports.useRef([]),b=y.exports.useRef(0),h=y.exports.useRef(0),p=y.exports.useRef(),g=y.exports.useRef("search"),x=y.exports.useRef(""),$=y.exports.useRef(),[A,P]=An({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:u,value:l,valuePropName:"open"}),M=y.exports.useMemo(()=>{const R=s.findIndex(B=>B.value===f);return b.current=zn(R,0,null),s[R]},[s,f]),[X,U]=y.exports.useState(s[0]),de=y.exports.useCallback(R=>{const B=m.current,G=w.current[R];if(!G||!B){p.current=R;return}p.current=void 0;const Q=B.clientHeight,ae=B.scrollTop,fe=B.scrollTop+Q,Z=G.offsetTop,ve=G.offsetHeight,le=G.offsetTop+G.offsetHeight;Z<ae&&B.scrollTo(0,Z),le>fe&&B.scrollTo(0,Z-Q+ve),G.focus({preventScroll:!0})},[m]),ie=y.exports.useCallback((R,{scroll:B}={})=>{var G;const Q=s.length-1;let ae;switch(R){case"first":{ae=0;break}case"last":{ae=Q;break}case"next":{ae=zn(h.current+1,0,Q);break}case"previous":{ae=zn(h.current-1,0,Q);break}case"selected":{ae=zn((G=b.current)!==null&&G!==void 0?G:0,0,Q);break}default:ae=R}h.current=ae,U(s[ae]),B&&de(ae)},[h,s,de]),ue=y.exports.useCallback(({fromEvent:R})=>{P(!0),ie("selected",{scroll:!0}),a==null||a({fromEvent:R})},[ie,a,P]),ee=y.exports.useCallback(()=>{g.current="search",x.current="",clearTimeout($.current)},[]),re=y.exports.useCallback(({focusSelect:R,fromEvent:B})=>{var G;n==null||n({fromEvent:B}),P(!1),U(s[0]),ee(),p.current=void 0,R&&((G=d.current)===null||G===void 0||G.focus())},[ee,n,s,d,P]),ke=y.exports.useCallback(({fromEvent:R})=>{A?re({focusSelect:!1,fromEvent:R}):ue({fromEvent:R})},[re,ue,A]),se=y.exports.useCallback((R,{fromEvent:B})=>{b.current!==R&&(b.current=R,c(s[R].value),t==null||t(s[R],{fromEvent:B}))},[t,s,c]),E=y.exports.useCallback(({focusSelect:R,fromEvent:B})=>{se(h.current,{fromEvent:B}),re({focusSelect:R,fromEvent:B})},[re,se]),H=y.exports.useCallback((R,{fromEvent:B,select:G})=>{var Q;switch(g.current==="cycleFirstLetter"&&R!==x.current&&(g.current="search"),R===x.current?g.current="cycleFirstLetter":x.current+=R,g.current){case"search":{let ae=s.findIndex(fe=>{var Z;return((Z=fe.label)===null||Z===void 0?void 0:Z.toLocaleUpperCase().indexOf(x.current))===0});ae<0&&(ae=s.findIndex(fe=>{var Z;return((Z=fe.label)===null||Z===void 0?void 0:Z.toLocaleUpperCase().indexOf(R))===0}),x.current=R),ae>=0&&(G?se(ae,{fromEvent:B}):ie(ae,{scroll:!0}));break}case"cycleFirstLetter":{const ae=G?(Q=b.current)!==null&&Q!==void 0?Q:-1:h.current;let fe=s.findIndex((Z,ve)=>{var le;return ve>ae&&((le=Z.label)===null||le===void 0?void 0:le.toLocaleUpperCase().indexOf(R))===0});fe<0&&(fe=s.findIndex(Z=>{var ve;return((ve=Z.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(R))===0})),fe>=0&&(G?se(fe,{fromEvent:B}):ie(fe,{scroll:!0}));break}}clearTimeout($.current),$.current=setTimeout(()=>{g.current==="search"&&(x.current="")},$x)},[ie,s,se]),Y=y.exports.useCallback(R=>{var B;R.button===0&&(R.preventDefault(),(B=d.current)===null||B===void 0||B.focus(),ke({fromEvent:R}),i==null||i(R))},[i,d,ke]),ce=y.exports.useCallback(R=>{E({focusSelect:!0,fromEvent:R})},[E]),z=y.exports.useCallback(R=>{const{altKey:B,code:G,ctrlKey:Q,metaKey:ae,shiftKey:fe}=R,{ARROW_DOWN:Z,ARROW_UP:ve,END:le,ENTER:C,ESC:N,HOME:I,SPACE:J,TAB:q}=bx,oe=B||Q||ae||fe;if(!(G===q&&(B||Q||ae)||G!==q&&oe))switch(G){case Z:{if(R.preventDefault(),!A){ue({fromEvent:R});return}ie("next",{scroll:!0});break}case ve:{if(R.preventDefault(),!A){ue({fromEvent:R});return}ie("previous",{scroll:!0});break}case le:{if(R.preventDefault(),!A){ue({fromEvent:R});return}ie("last",{scroll:!0});break}case C:{if(!A)return;R.preventDefault(),E({focusSelect:!0,fromEvent:R});break}case N:{if(!A)return;R.preventDefault(),re({focusSelect:!0,fromEvent:R});break}case I:{if(R.preventDefault(),!A){ue({fromEvent:R});return}ie("first",{scroll:!0});break}case J:{R.preventDefault(),A?E({focusSelect:!0,fromEvent:R}):ue({fromEvent:R});break}case q:{if(!A)return;fe||R.preventDefault(),E({focusSelect:!fe,fromEvent:R});break}default:!oe&&G.match(/^Key/)&&(R.preventDefault(),R.stopPropagation(),H(G.replace(/^Key/,""),{select:!A,fromEvent:R}))}},[ie,re,A,ue,H,E]),L=y.exports.useCallback(R=>{z(R),o==null||o(R)},[z,o]),T=y.exports.useCallback(R=>{ie(R)},[ie]),F=y.exports.useCallback(R=>{A||(ee(),e==null||e(R))},[ee,e,A]),k=y.exports.useCallback(R=>{ee(),r==null||r(R)},[ee,r]),V=y.exports.useCallback(R=>{m.current=R,p.current!==void 0&&de(p.current)},[de]),O=y.exports.useCallback((R,B)=>{w.current[B]=R,p.current===B&&de(p.current)},[de]);return y.exports.useEffect(()=>{if(!A)return()=>{};const R=B=>{var G;const Q=B.target;!((G=v.current)===null||G===void 0)&&G.contains(Q)||(B.preventDefault(),re({focusSelect:!1,fromEvent:B}))};return document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}},[re,A,v]),y.exports.useMemo(()=>({activeOption:X,handleActivateOptionIndex:T,handleBlur:F,handleButtonKeyDown:L,handleDropdownKeyDown:z,handleFocus:k,handleMouseDown:Y,handleOptionClick:ce,handleSetDropdownRef:V,handleSetOptionRef:O,open:A,selectedOption:M}),[X,T,F,L,k,z,Y,ce,V,O,A,M])},Ax=y.exports.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:a,value:l,variant:s,width:u,...f},d)=>{const{isEnabled:c,options:v,setValue:m,value:w,DropdownButton:b,Wrapper:h}=Ag({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:l,variant:s}),p=y.exports.useCallback(g=>{const x=v.find($=>$.value===g.target.value);!x||(m(x.value),r==null||r(x,{fromEvent:g}))},[r,v,m]);return S(h,{className:e,style:{...a,width:u},children:ne(lc,{children:[S(yx,{...f,disabled:n,onChange:c?p:qn,ref:d,value:w,children:v.map((g,x)=>{var $;return S("option",{value:g.value,children:($=g.label)!==null&&$!==void 0?$:g.value},`${g.value}-${x}`)})}),b]})})});Ax.displayName="SelectNative";function Ex({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:a}){const l=y.exports.useCallback(()=>{e(n)},[e,n]),s=y.exports.useCallback(f=>{a(f,n)},[n,a]),u=Sg();return S(Sx,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:l,ref:s,role:"option",tabIndex:0,children:o.label})}function Lx({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:s,name:u,onBlur:f,onChange:d,onClose:c,onFocus:v,onKeyDown:m,onMouseDown:w,onOpen:b,open:h,options:p,readOnly:g,shadow:x=!0,style:$,variant:A="default",value:P,width:M="auto",...X},U){const{isEnabled:de,options:ie,setValue:ue,value:ee,wrapperProps:re,DropdownButton:ke,Wrapper:se}=Ag({className:n,defaultValue:r,disabled:o,native:!1,onChange:d,options:p,style:$,readOnly:g,value:P,variant:A,width:M}),E=y.exports.useRef(null),H=y.exports.useRef(null),Y=y.exports.useRef(null),{activeOption:ce,handleActivateOptionIndex:z,handleBlur:L,handleButtonKeyDown:T,handleDropdownKeyDown:F,handleFocus:k,handleMouseDown:V,handleOptionClick:O,handleSetDropdownRef:R,handleSetOptionRef:B,open:G,selectedOption:Q}=Cx({onBlur:f,onChange:d,onClose:c,onFocus:v,onKeyDown:m,onMouseDown:w,onOpen:b,open:h,options:ie,value:ee,selectRef:H,setValue:ue,wrapperRef:Y});y.exports.useImperativeHandle(U,()=>({focus:C=>{var N;(N=H.current)===null||N===void 0||N.focus(C)},node:E.current,value:String(ee)}),[ee]);const ae=y.exports.useMemo(()=>Q?typeof i=="function"?i(Q):Q.label:"",[i,Q]),fe=de?1:void 0,Z=y.exports.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),ve=Sg(),le=y.exports.useMemo(()=>ie.map((C,N)=>{const I=`${ee}-${N}`;return S(Ex,{activateOptionIndex:z,active:C===ce,index:N,onClick:O,option:C,selected:C===Q,setRef:B},I)}),[ce,z,O,B,ie,Q,ee]);return ne(se,{...re,$disabled:o,ref:Y,shadow:x,style:{...$,width:M},children:[S("input",{name:u,ref:E,type:"hidden",value:String(ee),...a}),ne(lc,{"aria-disabled":o,"aria-expanded":G,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t!=null?t:l,"aria-owns":de&&G?ve:void 0,onBlur:L,onFocus:k,onKeyDown:T,onMouseDown:de?V:w,ref:H,role:"button",tabIndex:fe,...X,children:[S(gx,{children:ae}),ke]}),de&&G&&S(wx,{id:ve,onKeyDown:F,ref:R,role:"listbox",style:Z,tabIndex:0,variant:A,children:le})]})}const sc=y.exports.forwardRef(Lx);sc.displayName="Select";const Rx=D.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,ca=y.exports.forwardRef(function({children:t,noPadding:n=!1,...r},o){return S(Rx,{noPadding:n,ref:o,...r,children:t})});ca.displayName="Toolbar";const Px=D.div`
  padding: 16px;
`,Eg=y.exports.forwardRef(function({children:t,...n},r){return S(Px,{ref:r,...n,children:t})});Eg.displayName="WindowContent";const Tx=D.div`
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

  ${Ka} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Lg=y.exports.forwardRef(function({active:t=!0,children:n,...r},o){return S(Tx,{active:t,ref:o,...r,children:n})});Lg.displayName="WindowHeader";const Nx=D.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ne({style:"window"})}
  ${Dt()}
`,Dx=D.span`
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
`,Rg=y.exports.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>ne(Nx,{ref:i,shadow:r,...o,children:[e,t&&S(Dx,{"data-testid":"resizeHandle",ref:n})]}));Rg.displayName="Window";const Ix=D(hg)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Ox=D.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,_x=D.div`
  display: flex;
  flex-wrap: wrap;
`,Wt=D.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Mx=D.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,zx=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Fx(e,t){return new Date(e,t+1,0).getDate()}function jx(e,t,n){return new Date(e,t,n).getDay()}function Bx(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const Ux=y.exports.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[a,l]=y.exports.useState(()=>Bx(t)),{year:s,month:u,day:f}=a,d=y.exports.useCallback(({value:b})=>{l(h=>({...h,month:b}))},[]),c=y.exports.useCallback(b=>{l(h=>({...h,year:b}))},[]),v=y.exports.useCallback(b=>{l(h=>({...h,day:b}))},[]),m=y.exports.useCallback(()=>{const b=[a.year,a.month+1,a.day].map(h=>String(h).padStart(2,"0")).join("-");n==null||n(b)},[a.day,a.month,a.year,n]),w=y.exports.useMemo(()=>{const b=Array.from({length:42}),h=jx(s,u,1);let p=f;const g=Fx(s,u);return p=p<g?p:g,b.forEach((x,$)=>{if($>=h&&$<g+h){const A=$-h+1;b[$]=S(Wt,{onClick:()=>{v(A)},children:S(Mx,{active:A===p,children:A})},$)}else b[$]=S(Wt,{},$)}),b},[f,v,u,s]);return ne(Rg,{className:e,ref:i,shadow:o,style:{margin:20},children:[ne(Lg,{children:[S("span",{role:"img","aria-label":"\u{1F4C6}",children:"\u{1F4C6}"}),"Date"]}),ne(Eg,{children:[ne(ca,{noPadding:!0,style:{justifyContent:"space-between"},children:[S(sc,{options:zx,value:u,onChange:d,width:128,menuMaxHeight:200}),S(wg,{value:s,onChange:c,width:100})]}),ne(Ix,{children:[ne(Ox,{children:[S(Wt,{children:"S"}),S(Wt,{children:"M"}),S(Wt,{children:"T"}),S(Wt,{children:"W"}),S(Wt,{children:"T"}),S(Wt,{children:"F"}),S(Wt,{children:"S"})]}),S(_x,{children:w})]}),ne(ca,{noPadding:!0,style:{justifyContent:"space-between"},children:[S(Xn,{fullWidth:!0,onClick:r,disabled:!r,children:"Cancel"}),S(Xn,{fullWidth:!0,onClick:n?m:void 0,disabled:!n,children:"OK"})]})]})]})});Ux.displayName="DatePicker";const Hx=e=>{switch(e){case"status":case"well":return W`
        ${Ne({style:"status"})}
      `;case"window":case"outside":return W`
        ${Ne({style:"window"})}
      `;case"field":return W`
        ${Ne({style:"field"})}
      `;default:return W`
        ${Ne()}
      `}},Vx=D.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Hx(e)}
  ${({variant:e})=>Dt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Wx=y.exports.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>S(Vx,{ref:o,shadow:t,variant:n,...r,children:e}));Wx.displayName="Frame";const Qx=D.fieldset`
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
`,Kx=D.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Gx=y.exports.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>ne(Qx,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o,children:[e&&S(Kx,{variant:n,children:e}),r]}));Gx.displayName="GroupBox";const js=D.div`
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
`;js.displayName="Handle";const Yx="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Xx=D.div`
  display: inline-block;
  height: ${({size:e})=>Cn(e)};
  width: ${({size:e})=>Cn(e)};
`,Zx=D.span`
  display: block;
  background: ${Yx};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Jx=y.exports.forwardRef(({size:e=30,...t},n)=>S(Xx,{size:e,ref:n,...t,children:S(Zx,{})}));Jx.displayName="Hourglass";const qx=D.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,ew=D.div`
  position: relative;
`,tw=D.div`
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
`,nw=D(Ut).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,rw=D.div`
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
`,ow=y.exports.forwardRef(({backgroundStyles:e,children:t,...n},r)=>S(qx,{ref:r,...n,children:ne(ew,{children:[S(tw,{children:S(nw,{style:e,children:t})}),S(rw,{})]})}));ow.displayName="Monitor";const iw=D.div`
  display: inline-block;
  height: ${Ve.md};
  width: 100%;
`,aw=D(Ut)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Pg=W`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,lw=D.div`
  position: relative;
  top: 4px;
  ${Pg}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,sw=D.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Pg}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,uw=D.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Tg=17,cw=D.span`
  display: inline-block;
  width: ${Tg}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Ng=y.exports.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const a=e?null:`${n}%`,l=y.exports.useRef(null),[s,u]=y.exports.useState([]),f=y.exports.useCallback(()=>{if(!l.current||n===void 0)return;const d=l.current.getBoundingClientRect().width,c=Math.round(n/100*d/Tg);u(Array.from({length:c}))},[n]);return y.exports.useEffect(()=>(f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)),[f]),S(iw,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o,children:S(aw,{variant:r,shadow:t,children:r==="default"?ne(Vh,{children:[S(lw,{"data-testid":"defaultProgress1",children:a}),S(sw,{"data-testid":"defaultProgress2",value:n,children:a})]}):S(uw,{ref:l,"data-testid":"tileProgress",children:s.map((d,c)=>S(cw,{},c))})})})});Ng.displayName="ProgressBar";const Dg=W`
  width: ${jt}px;
  height: ${jt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,dw=D(Ut)`
  ${Dg}
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
`,fw=D.div`
  ${Yn()}
  ${Dg}
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
`,pw=D.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,hw={flat:fw,default:dw},gw=y.exports.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:a="default",...l},s)=>{const u=hw[a];return ne(oc,{$disabled:n,className:t,style:i,children:[S(u,{$disabled:n,role:"presentation",children:e&&S(pw,{$disabled:n,variant:a})}),S(ua,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...l}),r&&S(ic,{children:r})]})});gw.displayName="Radio";const mw=typeof window<"u"?y.exports.useLayoutEffect:y.exports.useEffect;function Tn(e){const t=y.exports.useRef(e);return mw(()=>{t.current=e}),y.exports.useCallback((...n)=>(0,t.current)(...n),[])}function tf(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function nf(e,t){return y.exports.useMemo(()=>e==null&&t==null?null:n=>{tf(e,n),tf(t,n)},[e,t])}let Ga=!0,Bs=!1,rf;const vw={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function yw(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&vw[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function xw(e){e.metaKey||e.altKey||e.ctrlKey||(Ga=!0)}function Tl(){Ga=!1}function ww(){this.visibilityState==="hidden"&&Bs&&(Ga=!0)}function Sw(e){e.addEventListener("keydown",xw,!0),e.addEventListener("mousedown",Tl,!0),e.addEventListener("pointerdown",Tl,!0),e.addEventListener("touchstart",Tl,!0),e.addEventListener("visibilitychange",ww,!0)}function kw(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Ga||yw(t)}function bw(){Bs=!0,window.clearTimeout(rf),rf=window.setTimeout(()=>{Bs=!1},100)}function $w(){const e=y.exports.useCallback(t=>{const n=qs.exports.findDOMNode(t);n!=null&&Sw(n.ownerDocument)},[]);return{isFocusVisible:kw,onBlurVisible:bw,ref:e}}function Cw(e,t,n){return(n-t)*e+t}function mi(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function vi(e){return e&&e.ownerDocument||document}function Aw(e,t){var n;const{index:r}=(n=e.reduce((o,i,a)=>{const l=Math.abs(t-i);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!==null&&n!==void 0?n:{};return r!=null?r:-1}const Ew=D.div`
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
`,Ig=()=>W`
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
`,Lw=D(Ut)`
  ${Ig()}
`,Rw=D(Ut)`
  ${Ig()}

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
`,Pw=D.span`
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
    ${({$disabled:e,theme:t})=>e&&Go({mainColor:t.material,secondaryColor:t.borderLightest})}
`,kr=6,Tw=D.span`
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
      ${Nt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,Nw=D.div`
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
`,Dw=y.exports.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:s,orientation:u="horizontal",size:f="100%",step:d=1,value:c,variant:v="default",...m},w)=>{const b=v==="flat"?Rw:Lw,h=u==="vertical",[p=o,g]=An({defaultValue:e,onChange:a!=null?a:l,value:c}),{isFocusVisible:x,onBlurVisible:$,ref:A}=$w(),[P,M]=y.exports.useState(!1),X=y.exports.useRef(),U=y.exports.useRef(null),de=nf(A,X),ie=nf(w,de),ue=Tn(L=>{x(L)&&M(!0)}),ee=Tn(()=>{P!==!1&&(M(!1),$())}),re=y.exports.useRef(),ke=y.exports.useMemo(()=>n===!0&&Number.isFinite(d)?[...Array(Math.round((r-o)/d)+1)].map((L,T)=>({label:void 0,value:o+d*T})):Array.isArray(n)?n:[],[n,r,o,d]),se=Tn(L=>{const T=(r-o)/10,F=ke.map(O=>O.value),k=F.indexOf(p);let V=0;switch(L.key){case"Home":V=o;break;case"End":V=r;break;case"PageUp":d&&(V=p+T);break;case"PageDown":d&&(V=p-T);break;case"ArrowRight":case"ArrowUp":d?V=p+d:V=F[k+1]||F[F.length-1];break;case"ArrowLeft":case"ArrowDown":d?V=p-d:V=F[k-1]||F[0];break;default:return}L.preventDefault(),d&&(V=Jd(V,d,o)),V=zn(V,o,r),g(V),M(!0),a==null||a(V),l==null||l(V)}),E=y.exports.useCallback(L=>{if(!X.current)return 0;const T=X.current.getBoundingClientRect();let F;h?F=(T.bottom-L.y)/T.height:F=(L.x-T.left)/T.width;let k;if(k=Cw(F,o,r),d)k=Jd(k,d,o);else{const V=ke.map(R=>R.value),O=Aw(V,k);k=V[O]}return k=zn(k,o,r),k},[ke,r,o,d,h]),H=Tn(L=>{var T;const F=mi(L,re.current);if(!F)return;const k=E(F);(T=U.current)===null||T===void 0||T.focus(),g(k),M(!0),a==null||a(k)}),Y=Tn(L=>{const T=mi(L,re.current);if(!T)return;const F=E(T);l==null||l(F),re.current=void 0;const k=vi(X.current);k.removeEventListener("mousemove",H),k.removeEventListener("mouseup",Y),k.removeEventListener("touchmove",H),k.removeEventListener("touchend",Y)}),ce=Tn(L=>{var T;s==null||s(L),L.preventDefault(),(T=U.current)===null||T===void 0||T.focus(),M(!0);const F=mi(L,re.current);if(F){const V=E(F);g(V),a==null||a(V)}const k=vi(X.current);k.addEventListener("mousemove",H),k.addEventListener("mouseup",Y)}),z=Tn(L=>{var T;L.preventDefault();const F=L.changedTouches[0];F!=null&&(re.current=F.identifier),(T=U.current)===null||T===void 0||T.focus(),M(!0);const k=mi(L,re.current);if(k){const O=E(k);g(O),a==null||a(O)}const V=vi(X.current);V.addEventListener("touchmove",H),V.addEventListener("touchend",Y)});return y.exports.useEffect(()=>{const{current:L}=X;L==null||L.addEventListener("touchstart",z);const T=vi(L);return()=>{L==null||L.removeEventListener("touchstart",z),T.removeEventListener("mousemove",H),T.removeEventListener("mouseup",Y),T.removeEventListener("touchmove",H),T.removeEventListener("touchend",Y)}},[Y,H,z]),ne(Ew,{$disabled:t,hasMarks:Boolean(ke.length),isFocused:P,onMouseDown:ce,orientation:u,ref:ie,size:Cn(f),...m,children:[S("input",{disabled:t,name:i,type:"hidden",value:p!=null?p:0}),ke&&ke.map(L=>S(Tw,{$disabled:t,"data-testid":"tick",orientation:u,style:{[h?"bottom":"left"]:`${(L.value-o)/(r-o)*100}%`},children:L.label&&S(Nw,{"aria-hidden":!0,"data-testid":"mark",orientation:u,children:L.label})},L.value/(r-o)*100)),S(b,{orientation:u,variant:v}),S(Pw,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":p,onBlur:ee,onFocus:ue,onKeyDown:se,orientation:u,ref:U,role:"slider",style:{[h?"bottom":"left"]:`${(h?-100:0)+100*(p-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:v})]})});Dw.displayName="Slider";const Iw=D.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${nc};
  overflow-y: auto;
`,Ow=y.exports.forwardRef(function({children:t,...n},r){return S(Iw,{ref:r,...n,children:t})});Ow.displayName="TableBody";const _w=D.td`
  padding: 0 8px;
`,Mw=y.exports.forwardRef(function({children:t,...n},r){return S(_w,{ref:r,...n,children:t})});Mw.displayName="TableDataCell";const zw=D.thead`
  display: table-header-group;
`,Fw=y.exports.forwardRef(function({children:t,...n},r){return S(zw,{ref:r,...n,children:t})});Fw.displayName="TableHead";const jw=D.th`
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
`,Bw=y.exports.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=qn,sort:i,...a},l){return S(jw,{$disabled:t,"aria-disabled":t,"aria-sort":i==="asc"?"ascending":i==="desc"?"descending":void 0,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:l,...a,children:S("div",{children:n})})});Bw.displayName="TableHeadCell";const Uw=D.tr`
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
`,Hw=y.exports.forwardRef(function({children:t,...n},r){return S(Uw,{ref:r,...n,children:t})});Hw.displayName="TableRow";const Vw=D.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Ww=D(Ut)`
  &:before {
    box-shadow: none;
  }
`,Qw=y.exports.forwardRef(({children:e,...t},n)=>S(Ww,{children:S(Vw,{ref:n,...t,children:e})}));Qw.displayName="Table";const Kw=D.button`
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
    ${Fr}
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
`,Gw=y.exports.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>S(Kw,{"aria-selected":n,selected:n,onClick:a=>t==null?void 0:t(e,a),ref:i,role:"tab",...o,children:r}));Gw.displayName="Tab";const Yw=D.div`
  ${Dt()}
  ${Ne()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Xw=y.exports.forwardRef(({children:e,...t},n)=>S(Yw,{ref:n,...t,children:e}));Xw.displayName="TabBody";const Zw=D.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,Jw=D.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function qw(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const e2=y.exports.forwardRef(({value:e,onChange:t=qn,children:n,rows:r=1,...o},i)=>{const a=y.exports.useMemo(()=>{var l;const s=(l=Lt.Children.map(n,d=>{if(!Lt.isValidElement(d))return null;const c={selected:d.props.value===e,onClick:t};return Lt.cloneElement(d,c)}))!==null&&l!==void 0?l:[],u=qw(s,r).map((d,c)=>({key:c,tabs:d})),f=u.findIndex(d=>d.tabs.some(c=>c.props.selected));return u.push(u.splice(f,1)[0]),u},[n,t,r,e]);return S(Zw,{...o,isMultiRow:r>1,role:"tablist",ref:i,children:a.map(l=>S(Jw,{children:l.tabs},l.key))})});e2.displayName="Tabs";const t2=["blur","focus"],n2=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function of(e){return"nativeEvent"in e&&t2.includes(e.type)}function af(e){return"nativeEvent"in e&&n2.includes(e.type)}const r2={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},o2=D.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${tc};
  text-align: center;
  font-size: 1rem;
  ${e=>r2[e.position]}
`,i2=D.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,a2=y.exports.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:s,onMouseEnter:u,onMouseLeave:f,onOpen:d,style:c,text:v,position:m="top",...w},b)=>{const[h,p]=y.exports.useState(!1),[g,x]=y.exports.useState(),[$,A]=y.exports.useState(),P=!n,M=!r,X=E=>{window.clearTimeout(g),window.clearTimeout($);const H=window.setTimeout(()=>{p(!0),d==null||d(E)},o);x(H)},U=E=>{E.persist(),of(E)?s==null||s(E):af(E)&&(u==null||u(E)),X(E)},de=E=>{window.clearTimeout(g),window.clearTimeout($);const H=window.setTimeout(()=>{p(!1),l==null||l(E)},i);A(H)},ie=E=>{E.persist(),of(E)?a==null||a(E):af(E)&&(f==null||f(E)),de(E)};return ne(i2,{"data-testid":"tooltip-wrapper",onBlur:P?ie:void 0,onFocus:P?U:void 0,onMouseEnter:M?U:void 0,onMouseLeave:M?ie:void 0,tabIndex:P?0:void 0,children:[S(o2,{className:e,"data-testid":"tooltip",position:m,ref:b,show:h,style:c,...w,children:v}),t]})});a2.displayName="Tooltip";const Us=D(ic)`
  white-space: nowrap;
`,Og=W`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":W`
          cursor: pointer;

          :focus {
            ${Us} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,l2=D.ul`
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
`,s2=D.li`
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
`,u2=D.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,c2=D.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Og};

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
`,lf=D(oc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Og};
`,d2=D.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function sf(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function uf(e){e.preventDefault()}function _g({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:a,style:l,tree:s=[]}){const u=o===0,f=y.exports.useCallback(d=>{var c,v;const m=Boolean(d.items&&d.items.length>0),w=n.includes(d.id),b=(c=t||d.disabled)!==null&&c!==void 0?c:!1,h=b?uf:$=>i($,d),p=b?uf:$=>i($,d),g=a===d.id,x=S(d2,{"aria-hidden":!0,children:d.icon});return S(s2,{isRootLevel:u,role:"treeitem","aria-expanded":w,"aria-selected":g,hasItems:m,children:m?ne(u2,{open:w,children:[S(c2,{onClick:h,$disabled:b,children:ne(lf,{$disabled:b,children:[x,S(Us,{children:d.label})]})}),w&&S(_g,{className:e,disabled:b,expanded:n,level:o+1,select:i,selected:a,style:l,tree:(v=d.items)!==null&&v!==void 0?v:[]})]}):ne(lf,{as:"button",$disabled:b,onClick:p,children:[x,S(Us,{children:d.label})]})},d.label)},[e,t,n,u,o,i,a,l]);return S(l2,{className:u?e:void 0,style:u?l:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u,children:s.map(f)})}function f2({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:l,style:s,tree:u=[]},f){const[d,c]=An({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[v,m]=An({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),w=y.exports.useCallback((p,g)=>{if(a){const x=sf(d,g);a(p,x)}c(x=>sf(x,g))},[d,a,c]),b=y.exports.useCallback((p,g)=>{m(g),i&&i(p,g)},[i,m]),h=y.exports.useCallback((p,g)=>{p.preventDefault(),b(p,g.id),g.items&&g.items.length&&w(p,g.id)},[b,w]);return S(_g,{className:e,disabled:r,expanded:d,level:0,innerRef:f,select:h,selected:v,style:s,tree:u})}const p2=y.exports.forwardRef(f2);p2.displayName="TreeView";function h2(e){const[t,n]=y.exports.useState(e||0);return{count:t,increment:()=>n(a=>a+1),decrement:()=>n(a=>a-1),reset:()=>n(e||0),setCount:n}}const g2="/assets/pixelated.6c5743a7.png",m2="/assets/pixelated_c.e5845aaa.png";function v2(){const{count:e,increment:t}=h2(0);return y.exports.useEffect(()=>{const n=setInterval(()=>{t()},150);return()=>clearInterval(n)},[]),S(fg,{size:80,src:e%10?g2:m2})}function y2(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const cf={};function Hs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&cf[t[0]]||(typeof t[0]=="string"&&(cf[t[0]]=new Date),y2(...t))}const Mg=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function df(e,t,n){e.loadNamespaces(t,Mg(e,n))}function ff(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,Mg(e,r))}function x2(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],o=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const u=t.services.backendConnector.state[`${l}|${s}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!o||a(i,e)))}function w2(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(Hs("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(o,i)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!i(o.isLanguageChangingTo,e))return!1}}):x2(e,t,n)}const S2=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,k2={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xA9","&#169;":"\xA9","&reg;":"\xAE","&#174;":"\xAE","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},b2=e=>k2[e],$2=e=>e.replace(S2,b2);let Vs={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:$2};function C2(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Vs={...Vs,...e}}function A2(){return Vs}let zg;function E2(e){zg=e}function L2(){return zg}const R2={type:"3rdParty",init(e){C2(e.options.react),E2(e)}},P2=y.exports.createContext();class T2{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const N2=(e,t)=>{const n=y.exports.useRef();return y.exports.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function Ya(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:o}=y.exports.useContext(P2)||{},i=n||r||L2();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new T2),!i){Hs("You will need to pass in an i18next instance by using initReactI18next");const g=($,A)=>typeof A=="string"?A:A&&typeof A=="object"&&typeof A.defaultValue=="string"?A.defaultValue:Array.isArray($)?$[$.length-1]:$,x=[g,{},!1];return x.t=g,x.i18n={},x.ready=!1,x}i.options.react&&i.options.react.wait!==void 0&&Hs("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...A2(),...i.options.react,...t},{useSuspense:l,keyPrefix:s}=a;let u=e||o||i.options&&i.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(u);const f=(i.isInitialized||i.initializedStoreOnce)&&u.every(g=>w2(g,i,a));function d(){return i.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],s)}const[c,v]=y.exports.useState(d);let m=u.join();t.lng&&(m=`${t.lng}${m}`);const w=N2(m),b=y.exports.useRef(!0);y.exports.useEffect(()=>{const{bindI18n:g,bindI18nStore:x}=a;b.current=!0,!f&&!l&&(t.lng?ff(i,t.lng,u,()=>{b.current&&v(d)}):df(i,u,()=>{b.current&&v(d)})),f&&w&&w!==m&&b.current&&v(d);function $(){b.current&&v(d)}return g&&i&&i.on(g,$),x&&i&&i.store.on(x,$),()=>{b.current=!1,g&&i&&g.split(" ").forEach(A=>i.off(A,$)),x&&i&&x.split(" ").forEach(A=>i.store.off(A,$))}},[i,m]);const h=y.exports.useRef(!0);y.exports.useEffect(()=>{b.current&&!h.current&&v(d),h.current=!1},[i,s]);const p=[c,i,f];if(p.t=c,p.i18n=i,p.ready=f,f||!f&&!l)return p;throw new Promise(g=>{t.lng?ff(i,t.lng,u,()=>g()):df(i,u,()=>g())})}const D2="/assets/bike_in.40753188.gif",I2="/assets/bike_out.1d0c3254.gif",O2="/assets/atom.d796fbd4.gif",_2="/assets/dozing.6b28e884.gif",M2="/assets/grinder.90f98dc6.gif",z2="/assets/laze.99cbcfc2.gif",F2="/assets/listening_music.b22da534.gif",j2="/assets/looking_down.706993de.gif",B2="/assets/stationary.8bbe3a48.gif",U2="/assets/tapping_screen.2150fcfc.gif",H2="/assets/thinking.1a495de3.gif",V2="576",W2="768",Q2="992",K2="1200",G2="_container_1luen_15",Y2="_clippy_1luen_25",X2="_tooltip_1luen_29",Nl={mediaSm:V2,mediaMd:W2,mediaLg:Q2,mediaXl:K2,container:G2,clippy:Y2,tooltip:X2},Z2=1e3,yi={stationary:{src:B2,duration:4e3},bikeIn:{src:D2,duration:3500},bikeOut:{src:I2,duration:4e3}},pf={atom:{src:O2,duration:4500},dozing:{src:_2,duration:7500},laze:{src:z2,duration:13800},music:{src:F2,duration:5400},grinder:{src:M2,duration:8400},tapping:{src:U2,duration:2500},thinking:{src:H2,duration:1900}};function J2(){const e=Object.keys(pf),t=e[Math.floor(Math.random()*e.length)];return pf[t]}function q2(){const{t:e}=Ya("content"),[t,n]=y.exports.useState(!1),[r,o]=y.exports.useState(-1),[i,a]=y.exports.useState(yi.bikeIn),[l,s]=y.exports.useState(!1);return y.exports.useLayoutEffect(()=>{const u=setTimeout(()=>n(!0),Z2);return()=>clearTimeout(u)},[]),y.exports.useLayoutEffect(()=>{const u=setTimeout(()=>a(yi.stationary),yi.bikeIn.duration);return t||clearTimeout(u),()=>clearTimeout(u)},[t]),y.exports.useLayoutEffect(()=>{const u=r%2!==0,f=J2(),d=setTimeout(()=>{a(u?yi.stationary:f),o(c=>c+1)},i.duration);return t||clearTimeout(d),()=>clearTimeout(d)},[r,i,t]),t?ne("div",{className:Nl.container,children:[l&&S("span",{className:Nl.tooltip,children:e("clippy.greeting")}),S("img",{src:l?j2:i.src,className:Nl.clippy,title:"Clippy",alt:"Microsoft Clippit animation",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onTouchStart:()=>s(!0),onTouchEnd:()=>s(!1)})]}):null}function Ws(e){if(typeof e=="number")return`${e}px`;if(typeof e=="string")return e}const kn=D.div`
	display: flex;
	flex-direction: ${e=>{var t;return(t=e.direction)!=null?t:"row"}};
	flex-wrap: ${e=>{var t;return(t=e.wrap)!=null?t:"nowrap"}};
	justify-content: ${e=>{var t;return(t=e.justify)!=null?t:"flex-start"}};
	align-items: ${e=>{var t;return(t=e.align)!=null?t:"flex-start"}};
	align-content: ${e=>{var t;return(t=e.alignContent)!=null?t:"flex-start"}};
	gap: ${e=>{var t;return(t=Ws(e.gap))!=null?t:"0px"}};
	${e=>({...e.sx})}
`,Qs=D.p`
	display: inline-block;
	font-size: ${e=>e.variant==="title"?"24px":e.variant==="caption"?"10px":"13px"};
	font-weight: ${e=>e.bold?"600":"400"};
	color: ${e=>e.variant==="title"?"#0a0a0a":"#1a1a1a"} !important;
	&::selection {
		background-color: #c6c6c6;
		color: #0a0a0a;
	}
	padding: ${e=>{var t;return(t=Ws(e.p))!=null?t:"0"}};
	margin: ${e=>{var t;return(t=Ws(e.m))!=null?t:"0"}};
`,eS="576",tS="768",nS="992",rS="1200",oS="_container_3kp3d_8",iS="_loaderContainer_3kp3d_19",aS="_box_3kp3d_30",lS="_loader_3kp3d_19",to={mediaSm:eS,mediaMd:tS,mediaLg:nS,mediaXl:rS,container:oS,loaderContainer:iS,box:aS,loader:lS};function Fg(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Fg(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function sS(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Fg(e))&&(r&&(r+=" "),r+=t);return r}const uS="576",cS="768",dS="992",fS="1200",pS="_icon_el83c_15",hS="_disabled_el83c_20",gS="_mr_el83c_23",mS="_ml_el83c_31",vS="_small_el83c_39",no={mediaSm:uS,mediaMd:cS,mediaLg:dS,mediaXl:fS,icon:pS,disabled:hS,mr:gS,ml:mS,small:vS},da=({Icon:e,className:t,disabled:n,marginLeft:r,marginRight:o,small:i})=>S(e,{"aria-roledescription":"icon",className:sS(no.icon,t,n&&no.disabled,r&&no.ml,o&&no.mr,i&&no.small)}),jg=e=>y.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",role:"img",width:35.93,height:32,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",...e},y.exports.createElement("path",{fill:"#00D8FF",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})),yS="576",xS="768",wS="992",SS="1200",kS="_container_l7hgv_10",bS="_version_l7hgv_14",$S="_company_l7hgv_20",CS="_logo_l7hgv_34",AS="_product_l7hgv_38",ES="_language_l7hgv_44",ir={mediaSm:yS,mediaMd:xS,mediaLg:wS,mediaXl:SS,container:kS,version:bS,company:$S,logo:CS,product:AS,language:ES},LS=()=>ne("div",{className:ir.container,children:[ne(kn,{align:"flex-end",children:[S("p",{className:ir.company,children:"Meta"}),S(da,{Icon:jg,className:ir.logo})]}),ne("p",{className:ir.product,children:["React",S("span",{className:ir.language,children:"JS"})]}),S("p",{className:ir.version,children:"Developer"})]}),RS=()=>S("main",{className:to.container,children:ne(kn,{direction:"column",gap:4*5,children:[S(LS,{}),ne("section",{className:to.loaderContainer,children:[S("div",{className:to.box}),S("div",{className:to.box}),S("div",{className:to.box})]})]})}),PS="576",TS="768",NS="992",DS="1200",xi={mediaSm:PS,mediaMd:TS,mediaLg:NS,mediaXl:DS},IS={sm:xi.mediaSm,md:xi.mediaMd,lg:xi.mediaLg,xl:xi.mediaXl};function Bg(e){const t=`(min-width: ${IS[e]}px)`,n=()=>window.matchMedia(t).matches,[r,o]=y.exports.useState(n());function i(){o(n())}return y.exports.useEffect(()=>{const a=window.matchMedia(t);return i(),a.addEventListener("change",i),()=>{a.removeEventListener("change",i)}},[e]),r}const Ks=y.exports.createContext({isLoggedIn:!0,setIsLoggedIn:()=>{}}),OS=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M5 3h16v4h-2V5H5v14h14v-2h2v4H3V3h2zm16 8h-2V9h-2V7h-2v2h2v2H7v2h10v2h-2v2h2v-2h2v-2h2v-2z",fill:"currentColor"})),_S=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z",fill:"currentColor"})),MS="576",zS="768",FS="992",jS="1200",BS="_container_178e6_15",US="_reactIcon_178e6_19",HS="_list_178e6_26",Dl={mediaSm:MS,mediaMd:zS,mediaLg:FS,mediaXl:jS,container:BS,reactIcon:US,list:HS},Ug="logged-out";function VS(){const{t:e}=Ya("menu"),{setIsLoggedIn:t}=y.exports.useContext(Ks),n=Gh(),r=Bg("sm"),[o,i]=y.exports.useState(!1);return ne("div",{className:Dl.container,children:[ne(Xn,{onClick:()=>i(!o),active:o,children:[S(jg,{className:Dl.reactIcon}),r&&S(Qs,{children:e("nav.start")})]}),o&&ne(pg,{className:Dl.list,onClick:()=>i(!1),children:[ne(zs,{disabled:!0,"aria-disabled":!0,children:[S(da,{disabled:!0,marginRight:!0,Icon:_S})," In Progress"]}),S(ac,{}),ne(zs,{onClick:()=>{n("/"),t(!1),cg("true"),localStorage.setItem(Ug,"true")},children:[S(OS,{height:24}),e("nav.logout")]})]})]})}const WS="576",QS="768",KS="992",GS="1200",YS="_container_1d9jl_8",XS={mediaSm:WS,mediaMd:QS,mediaLg:KS,mediaXl:GS,container:YS};function ZS(){const{i18n:e}=Ya(),t=Bg("sm"),n=y.exports.useRef(e.languages).current,r=n.indexOf(e.language),o=n.map((i,a)=>({label:`${t?"\u{1F310}":""}${i.toUpperCase()}`,value:a}));return S(sc,{defaultValue:r,options:o,menuMaxHeight:90,onChange:i=>e.changeLanguage(n[i.value]),className:XS.container})}const JS=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M5 2h16v20H3V2h2zm14 18V4H5v16h14zM7 6h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2z",fill:"currentColor"})),qS=e=>y.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},y.exports.createElement("path",{d:"M16 3H8v4H2v14h10v-2H4V9h16v2h2V7h-6V3zm-2 4h-4V5h4v2zm6 6h-6v6h6v2h2v-2h-2v-6zm-4 4v-2h2v2h-2z",fill:"currentColor"})),ek="576",tk="768",nk="992",rk="1200",ok="_container_1n967_15",ik={mediaSm:ek,mediaMd:tk,mediaLg:nk,mediaXl:rk,container:ok},ln={hello:"/hello",projects:"/projects"};function ak(){const e=Gh(),t=Ku().pathname,{t:n}=Ya("menu");return ne(kn,{className:ik.container,children:[ne(Xn,{active:t===ln.hello,onClick:()=>e(t===ln.hello?"/":ln.hello),children:[S(da,{marginRight:!0,Icon:JS}),n("window.hello")]}),ne(Xn,{active:t===ln.projects,onClick:()=>e(t===ln.projects?"/":ln.projects),children:[S(da,{marginRight:!0,Icon:qS}),n("window.projects")]})]})}const lk="576",sk="768",uk="992",ck="1200",dk="_container_1r1s8_8",fk={mediaSm:lk,mediaMd:sk,mediaLg:uk,mediaXl:ck,container:dk,"slide-down":"_slide-down_1r1s8_1"},pk=()=>S(dg,{as:"nav",className:fk.container,children:ne(ca,{children:[ne(kn,{gap:4,sx:{marginRight:4},children:[S(VS,{}),S(js,{size:35})]}),S(ak,{}),ne(kn,{gap:4,sx:{marginLeft:"auto"},children:[S(js,{size:35}),S(ZS,{})]})]})}),hk="576",gk="768",mk="992",vk="1200",yk="_loader_dwj3s_8",xk={mediaSm:hk,mediaMd:gk,mediaLg:mk,mediaXl:vk,loader:yk},wk=200;function Sk(){const[e,t]=y.exports.useState(0);return y.exports.useEffect(()=>{const n=setInterval(()=>{t(r=>{if(r===100)return 0;const o=Math.random()*10;return Math.min(r+o,100)})},wk);return()=>{clearInterval(n)}},[]),S("div",{className:xk.loader,children:S(Ng,{variant:"tile",value:Math.floor(e)})})}const kk="576",bk="768",$k="992",Ck="1200",Ak="_container_1adt5_15",Ek="_fadeIn_1adt5_22",Lk="_main_1adt5_30",Rk="_avatar_1adt5_35",ro={mediaSm:kk,mediaMd:bk,mediaLg:$k,mediaXl:Ck,container:Ak,fadeIn:Ek,"fade-in":"_fade-in_1adt5_1",main:Lk,avatar:Rk},Pk=y.exports.lazy(()=>sa(()=>import("./LoginPage.dfcb587d.js"),["assets/LoginPage.dfcb587d.js","assets/LoginPage.10d9adaf.css"]).then(e=>({default:e.LoginPage}))),Hg=localStorage.getItem(Ug)!=="true",hf=Hg?1:.6,Tk=Ny(2500*hf,4e3*hf);function Nk(){const[e,t]=y.exports.useState(!0),[n,r]=y.exports.useState(Hg),o=y.exports.useMemo(()=>({isLoggedIn:n,setIsLoggedIn:r}),[n]);return y.exports.useEffect(()=>{const i=setTimeout(()=>{t(!1),n&&cg("false")},Tk);return()=>clearTimeout(i)},[]),e?S("div",{className:ro.container,children:S(RS,{})}):n?ne("div",{className:[ro.container,ro.fadeIn].join(" "),children:[S(Ks.Provider,{value:o,children:S(pk,{})}),ne("main",{className:ro.main,children:[S(kn,{wrap:"wrap",gap:24,justify:"space-around",align:"center",className:ro.avatar,children:ne(kn,{align:"center",gap:14,children:[S(v2,{}),ne(kn,{direction:"column",children:[S(Qs,{bold:!0,variant:"title",children:"Alper Akta\u015F"}),S(Qs,{children:"Web Developer"})]})]})}),S(y.exports.Suspense,{fallback:S(Sk,{}),children:S(Ev,{})}),S(q2,{})]})]}):S(Ks.Provider,{value:o,children:S(y.exports.Suspense,{fallback:null,children:S(Pk,{})})})}const gf={IntroductionWindow:y.exports.lazy(()=>sa(()=>import("./IntroductionWindow.9f6d7103.js"),["assets/IntroductionWindow.9f6d7103.js","assets/Window.module.6c2d599d.js","assets/Window.f59d6328.css","assets/github.25b42246.js","assets/MailLink.85b6a150.js"]).then(e=>({default:e.IntroductionWindow}))),ProjectsWindow:y.exports.lazy(()=>sa(()=>import("./ProjectsWindow.c279b12d.js"),["assets/ProjectsWindow.c279b12d.js","assets/Window.module.6c2d599d.js","assets/Window.f59d6328.css","assets/ProjectsWindow.9f8af5db.css"]).then(e=>({default:e.ProjectsWindow})))},Dk=[{path:"/",element:S("div",{})},{path:ln.hello,element:S(gf.IntroductionWindow,{})},{path:ln.projects,element:S(gf.ProjectsWindow,{})},{path:"*",element:S("div",{children:"404"})}],Ik=y.exports.lazy(()=>sa(()=>import("./ErrorPage.73129f91.js"),["assets/ErrorPage.73129f91.js","assets/MailLink.85b6a150.js"]).then(e=>({default:e.ErrorPage}))),Ok=Tv([{path:"/",element:S(Nk,{}),children:Dk,errorElement:S(Ik,{})}]),_k=Ey`
  ${Dy}
`,Mk=()=>ne(Cy,{theme:Ry,children:[S(_k,{}),S(Av,{router:Ok})]}),zk={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class fa{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||zk,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,o){return o&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new fa(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new fa(this.logger,t)}}var Mt=new fa;class Xa{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(!!this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function oo(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});return n.resolve=e,n.reject=t,n}function mf(e){return e==null?"":""+e}function Fk(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function uc(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function o(){return!e||typeof e=="string"}const i=typeof t!="string"?[].concat(t):t.split(".");for(;i.length>1;){if(o())return{};const a=r(i.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return o()?{}:{obj:e,k:r(i.shift())}}function vf(e,t,n){const{obj:r,k:o}=uc(e,t,Object);r[o]=n}function jk(e,t,n,r){const{obj:o,k:i}=uc(e,t,Object);o[i]=o[i]||[],r&&(o[i]=o[i].concat(n)),r||o[i].push(n)}function pa(e,t){const{obj:n,k:r}=uc(e,t);if(!!n)return n[r]}function Bk(e,t,n){const r=pa(e,n);return r!==void 0?r:pa(t,n)}function Vg(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Vg(e[r],t[r],n):e[r]=t[r]);return e}function ar(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Uk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Hk(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>Uk[t]):e}const Vk=[" ",",","?","!",";"];function Wk(e,t,n){t=t||"",n=n||"";const r=Vk.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const o=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let i=!o.test(e);if(!i){const a=e.indexOf(n);a>0&&!o.test(e.substring(0,a))&&(i=!0)}return i}function ha(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let o=e;for(let i=0;i<r.length;++i){if(!o||typeof o[r[i]]=="string"&&i+1<r.length)return;if(o[r[i]]===void 0){let a=2,l=r.slice(i,i+a).join(n),s=o[l];for(;s===void 0&&r.length>i+a;)a++,l=r.slice(i,i+a).join(n),s=o[l];if(s===void 0)return;if(s===null)return null;if(t.endsWith(l)){if(typeof s=="string")return s;if(l&&typeof s[l]=="string")return s[l]}const u=r.slice(i+a).join(n);return u?ha(s,u,n):void 0}o=o[r[i]]}return o}function ga(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class yf extends Xa{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,a=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let l=[t,n];r&&typeof r!="string"&&(l=l.concat(r)),r&&typeof r=="string"&&(l=l.concat(i?r.split(i):r)),t.indexOf(".")>-1&&(l=t.split("."));const s=pa(this.data,l);return s||!a||typeof r!="string"?s:ha(this.data&&this.data[t]&&this.data[t][n],r,i)}addResource(t,n,r,o){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=[t,n];r&&(l=l.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(l=t.split("."),o=n,n=l[1]),this.addNamespaces(n),vf(this.data,l,o),i.silent||this.emit("added",t,n,r,o)}addResources(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const i in r)(typeof r[i]=="string"||Object.prototype.toString.apply(r[i])==="[object Array]")&&this.addResource(t,n,i,r[i],{silent:!0});o.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,o,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},l=[t,n];t.indexOf(".")>-1&&(l=t.split("."),o=r,r=n,n=l[1]),this.addNamespaces(n);let s=pa(this.data,l)||{};o?Vg(s,r,i):s={...s,...r},vf(this.data,l,s),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var Wg={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach(i=>{this.processors[i]&&(t=this.processors[i].process(t,n,r,o))}),t}};const xf={};class ma extends Xa{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Fk(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Mt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let i=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,l=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!Wk(t,r,o);if(a&&!l){const s=t.match(this.interpolator.nestingRegexp);if(s&&s.length>0)return{key:t,namespaces:i};const u=t.split(r);(r!==o||r===o&&this.options.ns.indexOf(u[0])>-1)&&(i=u.shift()),t=u.join(o)}return typeof i=="string"&&(i=[i]),{key:t,namespaces:i}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(t[t.length-1],n),s=l[l.length-1],u=n.lng||this.language,f=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(f){const x=n.nsSeparator||this.options.nsSeparator;return o?{res:`${s}${x}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:`${s}${x}${a}`}return o?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:a}const d=this.resolve(t,n);let c=d&&d.res;const v=d&&d.usedKey||a,m=d&&d.exactUsedKey||a,w=Object.prototype.toString.apply(c),b=["[object Number]","[object Function]","[object RegExp]"],h=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&c&&(typeof c!="string"&&typeof c!="boolean"&&typeof c!="number")&&b.indexOf(w)<0&&!(typeof h=="string"&&w==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,c,{...n,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return o?(d.res=x,d.usedParams=this.getUsedParamsDetails(n),d):x}if(i){const x=w==="[object Array]",$=x?[]:{},A=x?m:v;for(const P in c)if(Object.prototype.hasOwnProperty.call(c,P)){const M=`${A}${i}${P}`;$[P]=this.translate(M,{...n,joinArrays:!1,ns:l}),$[P]===M&&($[P]=c[P])}c=$}}else if(p&&typeof h=="string"&&w==="[object Array]")c=c.join(h),c&&(c=this.extendTranslation(c,t,n,r));else{let x=!1,$=!1;const A=n.count!==void 0&&typeof n.count!="string",P=ma.hasDefaultValue(n),M=A?this.pluralResolver.getSuffix(u,n.count,n):"",X=n.ordinal&&A?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",U=n[`defaultValue${M}`]||n[`defaultValue${X}`]||n.defaultValue;!this.isValidLookup(c)&&P&&(x=!0,c=U),this.isValidLookup(c)||($=!0,c=a);const ie=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&$?void 0:c,ue=P&&U!==c&&this.options.updateMissing;if($||x||ue){if(this.logger.log(ue?"updateKey":"missingKey",u,s,a,ue?U:c),i){const se=this.resolve(a,{...n,keySeparator:!1});se&&se.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ee=[];const re=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&re&&re[0])for(let se=0;se<re.length;se++)ee.push(re[se]);else this.options.saveMissingTo==="all"?ee=this.languageUtils.toResolveHierarchy(n.lng||this.language):ee.push(n.lng||this.language);const ke=(se,E,H)=>{const Y=P&&H!==c?H:ie;this.options.missingKeyHandler?this.options.missingKeyHandler(se,s,E,Y,ue,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(se,s,E,Y,ue,n),this.emit("missingKey",se,s,E,c)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?ee.forEach(se=>{this.pluralResolver.getSuffixes(se,n).forEach(E=>{ke([se],a+E,n[`defaultValue${E}`]||U)})}):ke(ee,a,U))}c=this.extendTranslation(c,t,n,d,r),$&&c===a&&this.options.appendNamespaceToMissingKey&&(c=`${s}:${a}`),($||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?c=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}:${a}`:a,x?c:void 0):c=this.options.parseMissingKeyHandler(c))}return o?(d.res=c,d.usedParams=this.getUsedParamsDetails(n),d):c}extendTranslation(t,n,r,o,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(u){const c=t.match(this.interpolator.nestingRegexp);f=c&&c.length}let d=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,r.lng||this.language,r),u){const c=t.match(this.interpolator.nestingRegexp),v=c&&c.length;f<v&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(r.lng=o.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var c=arguments.length,v=new Array(c),m=0;m<c;m++)v[m]=arguments[m];return i&&i[0]===v[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`),null):a.translate(...v,n)},r)),r.interpolation&&this.interpolator.reset()}const l=r.postProcess||this.options.postProcess,s=typeof l=="string"?[l]:l;return t!=null&&s&&s.length&&r.applyPostProcessor!==!1&&(t=Wg.handle(s,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,i,a,l;return typeof t=="string"&&(t=[t]),t.forEach(s=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(s,n),f=u.key;o=f;let d=u.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const c=n.count!==void 0&&typeof n.count!="string",v=c&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),m=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(b=>{this.isValidLookup(r)||(l=b,!xf[`${w[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(l)&&(xf[`${w[0]}-${b}`]=!0,this.logger.warn(`key "${o}" for languages "${w.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(h=>{if(this.isValidLookup(r))return;a=h;const p=[f];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,f,h,b,n);else{let x;c&&(x=this.pluralResolver.getSuffix(h,n.count,n));const $=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(p.push(f+x),n.ordinal&&x.indexOf(A)===0&&p.push(f+x.replace(A,this.options.pluralSeparator)),v&&p.push(f+$)),m){const P=`${f}${this.options.contextSeparator}${n.context}`;p.push(P),c&&(p.push(P+x),n.ordinal&&x.indexOf(A)===0&&p.push(P+x.replace(A,this.options.pluralSeparator)),v&&p.push(P+$))}}let g;for(;g=p.pop();)this.isValidLookup(r)||(i=g,r=this.getResource(h,b,g,n))}))})}),{res:r,usedKey:o,exactUsedKey:i,usedLng:a,usedNS:l}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,o):this.resourceStore.getResource(t,n,r,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&typeof t.replace!="string";let o=r?t.replace:t;if(r&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const i of n)delete o[i]}return o}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function Il(e){return e.charAt(0).toUpperCase()+e.slice(1)}class wf{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Mt.create("languageUtils")}getScriptPartFromCode(t){if(t=ga(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=ga(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(o=>o.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Il(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Il(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=Il(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(i=>{if(i===o)return i;if(!(i.indexOf("-")<0&&o.indexOf("-")<0)&&i.indexOf(o)===0)return i})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],i=a=>{!a||(this.isSupportedCode(a)?o.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(t))):typeof t=="string"&&i(this.formatLanguageCode(t)),r.forEach(a=>{o.indexOf(a)<0&&i(this.formatLanguageCode(a))}),o}}let Qk=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Kk={1:function(e){return Number(e>1)},2:function(e){return Number(e!=1)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)},7:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(e==1?0:e==2?1:e!=8&&e!=11?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(e==1?0:e==2?1:e<7?2:e<11?3:4)},11:function(e){return Number(e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(e!==0)},14:function(e){return Number(e==1?0:e==2?1:e==3?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:e!==0?1:2)},17:function(e){return Number(e==1||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(e==0?0:e==1?1:2)},19:function(e){return Number(e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(e==1?0:e==0||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3)}};const Gk=["v1","v2","v3"],Yk=["v4"],Sf={zero:0,one:1,two:2,few:3,many:4,other:5};function Xk(){const e={};return Qk.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:Kk[t.fc]}})}),e}class Zk{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Mt.create("pluralResolver"),(!this.options.compatibilityJSON||Yk.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Xk()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(ga(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(o=>`${n}${o}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((o,i)=>Sf[o]-Sf[i]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):r.numbers.map(o=>this.getSuffix(t,o,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,r);return o?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:this.getSuffixRetroCompatible(o,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let o=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const i=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:i():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?i():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!Gk.includes(this.options.compatibilityJSON)}}function kf(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,i=Bk(e,t,n);return!i&&o&&typeof n=="string"&&(i=ha(e,n,r),i===void 0&&(i=ha(t,n,r))),i}class Jk{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Mt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:Hk,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?ar(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?ar(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?ar(n.nestingPrefix):n.nestingPrefixEscaped||ar("$t("),this.nestingSuffix=n.nestingSuffix?ar(n.nestingSuffix):n.nestingSuffixEscaped||ar(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,o){let i,a,l;const s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(m){return m.replace(/\$/g,"$$$$")}const f=m=>{if(m.indexOf(this.formatSeparator)<0){const p=kf(n,s,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...o,...n,interpolationkey:m}):p}const w=m.split(this.formatSeparator),b=w.shift().trim(),h=w.join(this.formatSeparator).trim();return this.format(kf(n,s,b,this.options.keySeparator,this.options.ignoreJSONStructure),h,r,{...o,...n,interpolationkey:b})};this.resetRegExp();const d=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,c=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>u(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?u(this.escape(m)):u(m)}].forEach(m=>{for(l=0;i=m.regex.exec(t);){const w=i[1].trim();if(a=f(w),a===void 0)if(typeof d=="function"){const h=d(t,i,o);a=typeof h=="string"?h:""}else if(o&&Object.prototype.hasOwnProperty.call(o,w))a="";else if(c){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=mf(a));const b=m.safeValue(a);if(t=t.replace(i[0],b),c?(m.regex.lastIndex+=a.length,m.regex.lastIndex-=i[0].length):m.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,i,a;function l(s,u){const f=this.nestingOptionsSeparator;if(s.indexOf(f)<0)return s;const d=s.split(new RegExp(`${f}[ ]*{`));let c=`{${d[1]}`;s=d[0],c=this.interpolate(c,a);const v=c.match(/'/g),m=c.match(/"/g);(v&&v.length%2===0&&!m||m.length%2!==0)&&(c=c.replace(/'/g,'"'));try{a=JSON.parse(c),u&&(a={...u,...a})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${s}`,w),`${s}${f}${c}`}return delete a.defaultValue,s}for(;o=this.nestingRegexp.exec(t);){let s=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const f=o[1].split(this.formatSeparator).map(d=>d.trim());o[1]=f.shift(),s=f,u=!0}if(i=n(l.call(this,o[1].trim(),a),a),i&&o[0]===t&&typeof i!="string")return i;typeof i!="string"&&(i=mf(i)),i||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),i=""),u&&(i=s.reduce((f,d)=>this.format(f,d,r.lng,{...r,interpolationkey:o[1].trim()}),i.trim())),t=t.replace(o[0],i),this.regexp.lastIndex=0}return t}}function qk(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);t==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(a=>{if(!a)return;const[l,...s]=a.split(":"),u=s.join(":").trim().replace(/^'+|'+$/g,"");n[l.trim()]||(n[l.trim()]=u),u==="false"&&(n[l.trim()]=!1),u==="true"&&(n[l.trim()]=!0),isNaN(u)||(n[l.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function lr(e){const t={};return function(r,o,i){const a=o+JSON.stringify(i);let l=t[a];return l||(l=e(ga(o),i),t[a]=l),l(r)}}class eb{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Mt.create("formatter"),this.options=t,this.formats={number:lr((n,r)=>{const o=new Intl.NumberFormat(n,{...r});return i=>o.format(i)}),currency:lr((n,r)=>{const o=new Intl.NumberFormat(n,{...r,style:"currency"});return i=>o.format(i)}),datetime:lr((n,r)=>{const o=new Intl.DateTimeFormat(n,{...r});return i=>o.format(i)}),relativetime:lr((n,r)=>{const o=new Intl.RelativeTimeFormat(n,{...r});return i=>o.format(i,r.range||"day")}),list:lr((n,r)=>{const o=new Intl.ListFormat(n,{...r});return i=>o.format(i)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=lr(n)}format(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((l,s)=>{const{formatName:u,formatOptions:f}=qk(s);if(this.formats[u]){let d=l;try{const c=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},v=c.locale||c.lng||o.locale||o.lng||r;d=this.formats[u](l,v,{...f,...o,...c})}catch(c){this.logger.warn(c)}return d}else this.logger.warn(`there was no format function for ${u}`);return l},t)}}function tb(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class nb extends Xa{constructor(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=Mt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,o.backend,o)}queueLoad(t,n,r,o){const i={},a={},l={},s={};return t.forEach(u=>{let f=!0;n.forEach(d=>{const c=`${u}|${d}`;!r.reload&&this.store.hasResourceBundle(u,d)?this.state[c]=2:this.state[c]<0||(this.state[c]===1?a[c]===void 0&&(a[c]=!0):(this.state[c]=1,f=!1,a[c]===void 0&&(a[c]=!0),i[c]===void 0&&(i[c]=!0),s[d]===void 0&&(s[d]=!0)))}),f||(l[u]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(s)}}loaded(t,n,r){const o=t.split("|"),i=o[0],a=o[1];n&&this.emit("failedLoading",i,a,n),r&&this.store.addResourceBundle(i,a,r),this.state[t]=n?-1:2;const l={};this.queue.forEach(s=>{jk(s.loaded,[i],a),tb(s,t),n&&s.errors.push(n),s.pendingCount===0&&!s.done&&(Object.keys(s.loaded).forEach(u=>{l[u]||(l[u]={});const f=s.loaded[u];f.length&&f.forEach(d=>{l[u][d]===void 0&&(l[u][d]=!0)})}),s.done=!0,s.errors.length?s.callback(s.errors):s.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(s=>!s.done)}read(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:o,wait:i,callback:a});return}this.readingCalls++;const l=(u,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(u&&f&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,o+1,i*2,a)},i);return}a(u,f)},s=this.backend[r].bind(this.backend);if(s.length===2){try{const u=s(t,n);u&&typeof u.then=="function"?u.then(f=>l(null,f)).catch(l):l(null,u)}catch(u){l(u)}return}return s(t,n,l)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const i=this.queueLoad(t,n,r,o);if(!i.toLoad.length)return i.pending.length||o(),null;i.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),o=r[0],i=r[1];this.read(o,i,"read",void 0,void 0,(a,l)=>{a&&this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`,a),!a&&l&&this.logger.log(`${n}loaded namespace ${i} for language ${o}`,l),this.loaded(t,a,l)})}saveMissing(t,n,r,o,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const s={...a,isUpdate:i},u=this.backend.create.bind(this.backend);if(u.length<6)try{let f;u.length===5?f=u(t,n,r,o,s):f=u(t,n,r,o),f&&typeof f.then=="function"?f.then(d=>l(null,d)).catch(l):l(null,f)}catch(f){l(f)}else u(t,n,r,o,l,s)}!t||!t[0]||this.store.addResource(t[0],n,r,o)}}}function bf(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(o=>{n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function $f(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function wi(){}function rb(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Bo extends Xa{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=$f(t),this.services={},this.logger=Mt,this.modules={external:[]},rb(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=bf();this.options={...o,...this.options,...$f(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function i(f){return f?typeof f=="function"?new f:f:null}if(!this.options.isClone){this.modules.logger?Mt.init(i(this.modules.logger),this.options):Mt.init(null,this.options);let f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=eb);const d=new wf(this.options);this.store=new yf(this.options.resources,this.options);const c=this.services;c.logger=Mt,c.resourceStore=this.store,c.languageUtils=d,c.pluralResolver=new Zk(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(c.formatter=i(f),c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new Jk(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new nb(i(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",function(v){for(var m=arguments.length,w=new Array(m>1?m-1:0),b=1;b<m;b++)w[b-1]=arguments[b];t.emit(v,...w)}),this.modules.languageDetector&&(c.languageDetector=i(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=i(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new ma(this.services,this.options),this.translator.on("*",function(v){for(var m=arguments.length,w=new Array(m>1?m-1:0),b=1;b<m;b++)w[b-1]=arguments[b];t.emit(v,...w)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,r||(r=wi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(f=>{this[f]=function(){return t.store[f](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(f=>{this[f]=function(){return t.store[f](...arguments),t}});const s=oo(),u=()=>{const f=(d,c)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(c),r(d,c)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return f(null,this.t.bind(this));this.changeLanguage(this.options.lng,f)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),s}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wi;const o=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const i=[],a=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(u=>{u!=="cimode"&&i.indexOf(u)<0&&i.push(u)})};o?a(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(s=>a(s)),this.options.preload&&this.options.preload.forEach(l=>a(l)),this.services.backendConnector.load(i,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(l)})}else r(null)}reloadResources(t,n,r){const o=oo();return t||(t=this.languages),n||(n=this.options.ns),r||(r=wi),this.services.backendConnector.reload(t,n,i=>{o.resolve(),r(i)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Wg.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const o=oo();this.emit("languageChanging",t);const i=s=>{this.language=s,this.languages=this.services.languageUtils.toResolveHierarchy(s),this.resolvedLanguage=void 0,this.setResolvedLanguage(s)},a=(s,u)=>{u?(i(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),n&&n(s,function(){return r.t(...arguments)})},l=s=>{!t&&!s&&this.services.languageDetector&&(s=[]);const u=typeof s=="string"?s:this.services.languageUtils.getBestMatchFromCodes(s);u&&(this.language||i(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,f=>{a(f,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(t),o}getFixedT(t,n,r){var o=this;const i=function(a,l){let s;if(typeof l!="object"){for(var u=arguments.length,f=new Array(u>2?u-2:0),d=2;d<u;d++)f[d-2]=arguments[d];s=o.options.overloadTranslationOptionHandler([a,l].concat(f))}else s={...l};s.lng=s.lng||i.lng,s.lngs=s.lngs||i.lngs,s.ns=s.ns||i.ns,s.keyPrefix=s.keyPrefix||r||i.keyPrefix;const c=o.options.keySeparator||".";let v;return s.keyPrefix&&Array.isArray(a)?v=a.map(m=>`${s.keyPrefix}${c}${m}`):v=s.keyPrefix?`${s.keyPrefix}${c}${a}`:a,o.t(v,s)};return typeof t=="string"?i.lng=t:i.lngs=t,i.ns=n,i.keyPrefix=r,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const u=this.services.backendConnector.state[`${l}|${s}`];return u===-1||u===2};if(n.precheck){const l=n.precheck(this,a);if(l!==void 0)return l}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!o||a(i,t)))}loadNamespaces(t,n){const r=oo();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=oo();typeof t=="string"&&(t=[t]);const o=this.options.preload||[],i=t.filter(a=>o.indexOf(a)<0);return i.length?(this.options.preload=o.concat(i),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new wf(bf());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Bo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wi;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},i=new Bo(o);return(t.debug!==void 0||t.prefix!==void 0)&&(i.logger=i.logger.clone(t)),["store","services","language"].forEach(l=>{i[l]=this[l]}),i.services={...this.services},i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},r&&(i.store=new yf(this.store.data,o),i.services.resourceStore=i.store),i.translator=new ma(i.services,o),i.translator.on("*",function(l){for(var s=arguments.length,u=new Array(s>1?s-1:0),f=1;f<s;f++)u[f-1]=arguments[f];i.emit(l,...u)}),i.init(o,n),i.translator.options=o,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Je=Bo.createInstance();Je.createInstance=Bo.createInstance;Je.createInstance;Je.dir;Je.init;Je.loadResources;Je.reloadResources;Je.use;Je.changeLanguage;Je.getFixedT;Je.t;Je.exists;Je.setDefaultNamespace;Je.hasLoadedNamespace;Je.loadNamespaces;Je.loadLanguages;var Gs=(e=>(e.TURKISH="tr",e.ENGLISH="en",e))(Gs||{});const ob={"go-to-page":"Web sayfas\u0131na git",login:"Giri\u015F"},ib="Y\xFCkleniyor",ab="\u015Eifre",lb={btn:ob,loading:ib,password:ab},sb={greeting:"Merhaba, ben Clippy!"},ub={"fallback-element":"Aman! San\u0131r\u0131m web sayfam\u0131 bozdun! Hatay\u0131 gidermem i\xE7in yard\u0131mc\u0131 olmak istersen, taray\u0131c\u0131 konsolundaki hata  mesaj\u0131n\u0131 kontrol edip g\xF6ndermeni \xF6nemle rica ediyorum :)"},cb={"about-current-job":"\u015Eu anda, Etstur'da Yaz\u0131l\u0131m Geli\u015Ftirme Uzman Yard\u0131mc\u0131s\u0131 olarak \xE7al\u0131\u015F\u0131yorum. \u015Eirketin React bazl\u0131 B2B web uygulamar\u0131n\u0131n geli\u015Ftirilmesinde rol al\u0131yorum.","about-experience":"Yaz\u0131l\u0131m geli\u015Ftirmeye olduk\xE7a ilgi duydu\u011Fum i\xE7in, hedefledi\u011Fim kariyere \xF6\u011Frencilik d\xF6nemimde online i\xE7erikler t\xFCketerek ile ve HackerRank vb. sitelerde testler \xE7\xF6zerek yat\u0131r\u0131m yapt\u0131m.","about-me":"Ege \xDCniversitesi, \u0130ngiliz Dili ve Edebiyat\u0131 mezunuyum.","about-preferences":"Genel olarak web uygulamalar\u0131n\u0131 TypeScript ve React.js ile geli\u015Ftirmeyi tercih ediyorum. Geli\u015Ftirdi\u011Fim uygulamalar\u0131 ise Vitest ve react-testing-library ile, bazen de projeye g\xF6re Playwright ile de test ediyorum."},db={clippy:sb,"daily-space-palette":"Daily Space Palette, NASA'n\u0131n API i\xE7eri\u011Fini kullanarak G\xFCn\xFCn Astronomi Foto\u011Fraf\u0131'n\u0131 g\xF6steriyor. Ek olarak, gelen bu foto\u011Fraftaki renkleri analiz ederek \xE7e\u015Fitli renk paletleri olu\u015Fturuyor.",error:ub,introduction:cb,"login-screen":{"footer-info":"Giri\u015F yapt\u0131ktan sonra kullan\u0131c\u0131 hesab\u0131 ekleyebilir veyak kullan\u0131c\u0131y\u0131 de\u011Fi\u015Ftirebilirsiniz.",instructions:"Ba\u015Flamak i\xE7in l\xFCtfen \u015Fifrenizi giriniz","turn-off":"Bilgisayar\u0131 kapat"}},fb={logout:"\xC7\u0131k\u0131\u015F",start:"Ba\u015Flat"},pb={hello:"Merhaba.txt",projects:"Projeler.exe"},hb={nav:fb,window:pb},gb={"go-to-page":"Go to webpage",login:"Login"},mb="Loading",vb="Password",yb={btn:gb,loading:mb,password:vb},xb={"about-current-job":"Currently, I work at Etstur as a Software Development Assistant and I participate in developing React-based B2B web applications.","about-experience":"Because of my profound interest in software development, I studied software through online content and solved test cases on websites like HackerRank to invest into the career that I desired to have during my studentship.","about-me":"I am an English Language and Literature graduate from Ege University.","about-preferences":"I generally prefer developing apps with TypeScript and React. Additionally, I write tests using Vitest and react-testing-library, and depending on the project I may use Playwright as well."},wb={greeting:"Hello, I'm Clippy!"},Sb={"fallback-element":"Oops! Looks like you broke my website! If you want to help me fix it, you can check the browser console for the error message and kindly send it to me, pretty please :)"},kb={"daily-space-palette":"Daily Space Palette is a web project that fetches the Astronomy Picture of the Day using NASA's API, then generates a color palette from that picture.",introduction:xb,clippy:wb,error:Sb,"login-screen":{"footer-info":"After you log on, you can add or change accounts.",instructions:"To begin, please enter your password","turn-off":"Turn off computer"}},bb={logout:"Logout",start:"Start"},$b={hello:"Hello.txt",projects:"Projects.exe"},Cb={nav:bb,window:$b},Qg=["general","menu","content"],Ab=Qg[0],Eb={tr:{general:lb,content:db,menu:hb},en:{general:yb,content:kb,menu:Cb}},Lb={lng:Gs.TURKISH,fallbackLng:Object.values(Gs),debug:!1,resources:Eb,ns:Qg,defaultNS:Ab};Je.use(R2).init(Lb);_l.createRoot(document.getElementById("root")).render(S(Lt.StrictMode,{children:S(Mk,{})}));export{zy as A,v2 as B,kn as F,Sk as L,da as S,Qs as T,Rg as W,sa as _,Cv as a,S as b,Ks as c,xg as d,Xn as e,sS as f,LS as g,Lg as h,Ug as i,ne as j,ca as k,Eg as l,Wx as m,Rb as n,qs as o,Gh as p,e2 as q,y as r,cg as s,Gw as t,Ya as u,Xw as v};
