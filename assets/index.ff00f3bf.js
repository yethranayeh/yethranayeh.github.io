function Ig(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function _g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Hb(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var w={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),Mg=Symbol.for("react.portal"),zg=Symbol.for("react.fragment"),Fg=Symbol.for("react.strict_mode"),jg=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),Ug=Symbol.for("react.context"),Hg=Symbol.for("react.forward_ref"),Vg=Symbol.for("react.suspense"),Wg=Symbol.for("react.memo"),Qg=Symbol.for("react.lazy"),oc=Symbol.iterator;function Kg(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var mf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vf=Object.assign,yf={};function jr(e,t,n){this.props=e,this.context=t,this.refs=yf,this.updater=n||mf}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xf(){}xf.prototype=jr.prototype;function js(e,t,n){this.props=e,this.context=t,this.refs=yf,this.updater=n||mf}var Bs=js.prototype=new xf;Bs.constructor=js;vf(Bs,jr.prototype);Bs.isPureReactComponent=!0;var ic=Array.isArray,wf=Object.prototype.hasOwnProperty,Us={current:null},Sf={key:!0,ref:!0,__self:!0,__source:!0};function kf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)wf.call(t,r)&&!Sf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Bo,type:e,key:i,ref:a,props:o,_owner:Us.current}}function Gg(e,t){return{$$typeof:Bo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bo}function Yg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ac=/\/+/g;function Qa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yg(""+e.key):t.toString(36)}function yi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Bo:case Mg:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Qa(a,0):r,ic(o)?(n="",e!=null&&(n=e.replace(ac,"$&/")+"/"),yi(o,t,n,"",function(u){return u})):o!=null&&(Hs(o)&&(o=Gg(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ac,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",ic(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Qa(i,l);a+=yi(i,t,n,s,o)}else if(s=Kg(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Qa(i,l++),a+=yi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Go(e,t,n){if(e==null)return e;var r=[],o=0;return yi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Xg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},xi={transition:null},Jg={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:xi,ReactCurrentOwner:Us};pe.Children={map:Go,forEach:function(e,t,n){Go(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Go(e,function(){t++}),t},toArray:function(e){return Go(e,function(t){return t})||[]},only:function(e){if(!Hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=jr;pe.Fragment=zg;pe.Profiler=jg;pe.PureComponent=js;pe.StrictMode=Fg;pe.Suspense=Vg;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jg;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Us.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)wf.call(t,s)&&!Sf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Bo,type:e.type,key:o,ref:i,props:r,_owner:a}};pe.createContext=function(e){return e={$$typeof:Ug,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bg,_context:e},e.Consumer=e};pe.createElement=kf;pe.createFactory=function(e){var t=kf.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:Hg,render:e}};pe.isValidElement=Hs;pe.lazy=function(e){return{$$typeof:Qg,_payload:{_status:-1,_result:e},_init:Xg}};pe.memo=function(e,t){return{$$typeof:Wg,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=xi.transition;xi.transition={};try{e()}finally{xi.transition=t}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(e,t){return tt.current.useCallback(e,t)};pe.useContext=function(e){return tt.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};pe.useEffect=function(e,t){return tt.current.useEffect(e,t)};pe.useId=function(){return tt.current.useId()};pe.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return tt.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};pe.useRef=function(e){return tt.current.useRef(e)};pe.useState=function(e){return tt.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return tt.current.useTransition()};pe.version="18.2.0";(function(e){e.exports=pe})(w);const Rt=_g(w.exports),El=Ig({__proto__:null,default:Rt},[w.exports]);var Rl={},Vs={exports:{}},pt={},bf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,H){var Y=E.length;E.push(H);e:for(;0<Y;){var ce=Y-1>>>1,z=E[ce];if(0<o(z,H))E[ce]=H,E[Y]=z,Y=ce;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var H=E[0],Y=E.pop();if(Y!==H){E[0]=Y;e:for(var ce=0,z=E.length,R=z>>>1;ce<R;){var T=2*(ce+1)-1,F=E[T],S=T+1,V=E[S];if(0>o(F,Y))S<z&&0>o(V,F)?(E[ce]=V,E[S]=Y,ce=S):(E[ce]=F,E[T]=Y,ce=T);else if(S<z&&0>o(V,Y))E[ce]=V,E[S]=Y,ce=S;else break e}}return H}function o(E,H){var Y=E.sortIndex-H.sortIndex;return Y!==0?Y:E.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,f=null,c=3,v=!1,m=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=E)r(u),H.sortIndex=H.expirationTime,t(s,H);else break;H=n(u)}}function y(E){if(x=!1,g(E),!m)if(n(s)!==null)m=!0,ke($);else{var H=n(u);H!==null&&se(y,H.startTime-E)}}function $(E,H){m=!1,x&&(x=!1,h(M),M=-1),v=!0;var Y=c;try{for(g(H),f=n(s);f!==null&&(!(f.expirationTime>H)||E&&!de());){var ce=f.callback;if(typeof ce=="function"){f.callback=null,c=f.priorityLevel;var z=ce(f.expirationTime<=H);H=e.unstable_now(),typeof z=="function"?f.callback=z:f===n(s)&&r(s),g(H)}else r(s);f=n(s)}if(f!==null)var R=!0;else{var T=n(u);T!==null&&se(y,T.startTime-H),R=!1}return R}finally{f=null,c=Y,v=!1}}var A=!1,P=null,M=-1,X=5,U=-1;function de(){return!(e.unstable_now()-U<X)}function ie(){if(P!==null){var E=e.unstable_now();U=E;var H=!0;try{H=P(!0,E)}finally{H?ue():(A=!1,P=null)}}else A=!1}var ue;if(typeof p=="function")ue=function(){p(ie)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,re=ee.port2;ee.port1.onmessage=ie,ue=function(){re.postMessage(null)}}else ue=function(){b(ie,0)};function ke(E){P=E,A||(A=!0,ue())}function se(E,H){M=b(function(){E(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){m||v||(m=!0,ke($))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(c){case 1:case 2:case 3:var H=3;break;default:H=c}var Y=c;c=H;try{return E()}finally{c=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var Y=c;c=E;try{return H()}finally{c=Y}},e.unstable_scheduleCallback=function(E,H,Y){var ce=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ce+Y:ce):Y=ce,E){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=Y+z,E={id:d++,callback:H,priorityLevel:E,startTime:Y,expirationTime:z,sortIndex:-1},Y>ce?(E.sortIndex=Y,t(u,E),n(s)===null&&E===n(u)&&(x?(h(M),M=-1):x=!0,se(y,Y-ce))):(E.sortIndex=z,t(s,E),m||v||(m=!0,ke($))),E},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(E){var H=c;return function(){var Y=c;c=H;try{return E.apply(this,arguments)}finally{c=Y}}}})($f);(function(e){e.exports=$f})(bf);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf=w.exports,ft=bf.exports;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Af=new Set,So={};function Jn(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(So[e]=t,e=0;e<t.length;e++)Af.add(t[e])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ll=Object.prototype.hasOwnProperty,Zg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},sc={};function qg(e){return Ll.call(sc,e)?!0:Ll.call(lc,e)?!1:Zg.test(e)?sc[e]=!0:(lc[e]=!0,!1)}function em(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tm(e,t,n,r){if(t===null||typeof t>"u"||em(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ws=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ws,Qs);We[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ws,Qs);We[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ws,Qs);We[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ks(e,t,n,r){var o=We.hasOwnProperty(t)?We[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tm(t,n,o,r)&&(n=null),r||o===null?qg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),lr=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),Gs=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),Ef=Symbol.for("react.provider"),Rf=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Nl=Symbol.for("react.suspense_list"),Xs=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Lf=Symbol.for("react.offscreen"),uc=Symbol.iterator;function Wr(e){return e===null||typeof e!="object"?null:(e=uc&&e[uc]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Ka;function ro(e){if(Ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ka=t&&t[1]||""}return`
`+Ka+e}var Ga=!1;function Ya(e,t){if(!e||Ga)return"";Ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ga=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ro(e):""}function nm(e){switch(e.tag){case 5:return ro(e.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return e=Ya(e.type,!1),e;case 11:return e=Ya(e.type.render,!1),e;case 1:return e=Ya(e.type,!0),e;default:return""}}function Dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sr:return"Fragment";case lr:return"Portal";case Pl:return"Profiler";case Gs:return"StrictMode";case Tl:return"Suspense";case Nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rf:return(e.displayName||"Context")+".Consumer";case Ef:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xs:return t=e.displayName||null,t!==null?t:Dl(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return Dl(e(t))}catch{}}return null}function rm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(t);case 8:return t===Gs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function om(e){var t=Pf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xo(e){e._valueTracker||(e._valueTracker=om(e))}function Tf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function cc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nf(e,t){t=t.checked,t!=null&&Ks(e,"checked",t,!1)}function Il(e,t){Nf(e,t);var n=kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_l(e,t.type,n):t.hasOwnProperty("defaultValue")&&_l(e,t.type,kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _l(e,t,n){(t!=="number"||Ti(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oo=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(oo(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kn(n)}}function Df(e,t){var n=kn(t.value),r=kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Of(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jo,If=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ko(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},im=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(e){im.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),uo[t]=uo[e]})});function _f(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||uo.hasOwnProperty(e)&&uo[e]?(""+t).trim():t+"px"}function Mf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=_f(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var am=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(am[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function jl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,br=null,$r=null;function hc(e){if(e=Vo(e)){if(typeof Ul!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ma(t),Ul(e.stateNode,e.type,t))}}function zf(e){br?$r?$r.push(e):$r=[e]:br=e}function Ff(){if(br){var e=br,t=$r;if($r=br=null,hc(e),t)for(e=0;e<t.length;e++)hc(t[e])}}function jf(e,t){return e(t)}function Bf(){}var Xa=!1;function Uf(e,t,n){if(Xa)return e(t,n);Xa=!0;try{return jf(e,t,n)}finally{Xa=!1,(br!==null||$r!==null)&&(Bf(),Ff())}}function bo(e,t){var n=e.stateNode;if(n===null)return null;var r=ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Hl=!1;if(Zt)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Hl=!1}function lm(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var co=!1,Ni=null,Di=!1,Vl=null,sm={onError:function(e){co=!0,Ni=e}};function um(e,t,n,r,o,i,a,l,s){co=!1,Ni=null,lm.apply(sm,arguments)}function cm(e,t,n,r,o,i,a,l,s){if(um.apply(this,arguments),co){if(co){var u=Ni;co=!1,Ni=null}else throw Error(_(198));Di||(Di=!0,Vl=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gc(e){if(Zn(e)!==e)throw Error(_(188))}function dm(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return gc(o),e;if(i===r)return gc(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Vf(e){return e=dm(e),e!==null?Wf(e):null}function Wf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wf(e);if(t!==null)return t;e=e.sibling}return null}var Qf=ft.unstable_scheduleCallback,mc=ft.unstable_cancelCallback,fm=ft.unstable_shouldYield,pm=ft.unstable_requestPaint,De=ft.unstable_now,hm=ft.unstable_getCurrentPriorityLevel,Zs=ft.unstable_ImmediatePriority,Kf=ft.unstable_UserBlockingPriority,Oi=ft.unstable_NormalPriority,gm=ft.unstable_LowPriority,Gf=ft.unstable_IdlePriority,fa=null,Ft=null;function mm(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(fa,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:xm,vm=Math.log,ym=Math.LN2;function xm(e){return e>>>=0,e===0?32:31-(vm(e)/ym|0)|0}var Zo=64,qo=4194304;function io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=io(l):(i&=a,i!==0&&(r=io(i)))}else a=n&~o,a!==0?r=io(a):i!==0&&(r=io(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),o=1<<n,r|=e[n],t&=~o;return r}function wm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Lt(i),l=1<<a,s=o[a];s===-1?((l&n)===0||(l&r)!==0)&&(o[a]=wm(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yf(){var e=Zo;return Zo<<=1,(Zo&4194240)===0&&(Zo=64),e}function Ja(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Uo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function km(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Lt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var we=0;function Xf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Jf,eu,Zf,qf,ep,Ql=!1,ei=[],fn=null,pn=null,hn=null,$o=new Map,Co=new Map,sn=[],bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vc(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":$o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(t.pointerId)}}function Kr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Vo(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function $m(e,t,n,r,o){switch(t){case"focusin":return fn=Kr(fn,e,t,n,r,o),!0;case"dragenter":return pn=Kr(pn,e,t,n,r,o),!0;case"mouseover":return hn=Kr(hn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return $o.set(i,Kr($o.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Co.set(i,Kr(Co.get(i)||null,e,t,n,r,o)),!0}return!1}function tp(e){var t=Dn(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=Hf(n),t!==null){e.blockedOn=t,ep(e.priority,function(){Zf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=Vo(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function yc(e,t,n){wi(e)&&n.delete(t)}function Cm(){Ql=!1,fn!==null&&wi(fn)&&(fn=null),pn!==null&&wi(pn)&&(pn=null),hn!==null&&wi(hn)&&(hn=null),$o.forEach(yc),Co.forEach(yc)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ql||(Ql=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,Cm)))}function Ao(e){function t(o){return Gr(o,e)}if(0<ei.length){Gr(ei[0],e);for(var n=1;n<ei.length;n++){var r=ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&Gr(fn,e),pn!==null&&Gr(pn,e),hn!==null&&Gr(hn,e),$o.forEach(t),Co.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)tp(n),n.blockedOn===null&&sn.shift()}var Cr=rn.ReactCurrentBatchConfig,_i=!0;function Am(e,t,n,r){var o=we,i=Cr.transition;Cr.transition=null;try{we=1,tu(e,t,n,r)}finally{we=o,Cr.transition=i}}function Em(e,t,n,r){var o=we,i=Cr.transition;Cr.transition=null;try{we=4,tu(e,t,n,r)}finally{we=o,Cr.transition=i}}function tu(e,t,n,r){if(_i){var o=Kl(e,t,n,r);if(o===null)ll(e,t,r,Mi,n),vc(e,r);else if($m(o,e,t,n,r))r.stopPropagation();else if(vc(e,r),t&4&&-1<bm.indexOf(e)){for(;o!==null;){var i=Vo(o);if(i!==null&&Jf(i),i=Kl(e,t,n,r),i===null&&ll(e,t,r,Mi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ll(e,t,r,null,n)}}var Mi=null;function Kl(e,t,n,r){if(Mi=null,e=Js(r),e=Dn(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function np(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hm()){case Zs:return 1;case Kf:return 4;case Oi:case gm:return 16;case Gf:return 536870912;default:return 16}default:return 16}}var cn=null,nu=null,Si=null;function rp(){if(Si)return Si;var e,t=nu,n=t.length,r,o="value"in cn?cn.value:cn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Si=o.slice(e,1<r?1-r:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function xc(){return!1}function ht(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ti:xc,this.isPropagationStopped=xc,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=ht(Br),Ho=Pe({},Br,{view:0,detail:0}),Rm=ht(Ho),Za,qa,Yr,pa=Pe({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(Za=e.screenX-Yr.screenX,qa=e.screenY-Yr.screenY):qa=Za=0,Yr=e),Za)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),wc=ht(pa),Lm=Pe({},pa,{dataTransfer:0}),Pm=ht(Lm),Tm=Pe({},Ho,{relatedTarget:0}),el=ht(Tm),Nm=Pe({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),Dm=ht(Nm),Om=Pe({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Im=ht(Om),_m=Pe({},Br,{data:0}),Sc=ht(_m),Mm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fm[e])?!!t[e]:!1}function ou(){return jm}var Bm=Pe({},Ho,{key:function(e){if(e.key){var t=Mm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Um=ht(Bm),Hm=Pe({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=ht(Hm),Vm=Pe({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Wm=ht(Vm),Qm=Pe({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Km=ht(Qm),Gm=Pe({},pa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ym=ht(Gm),Xm=[9,13,27,32],iu=Zt&&"CompositionEvent"in window,fo=null;Zt&&"documentMode"in document&&(fo=document.documentMode);var Jm=Zt&&"TextEvent"in window&&!fo,op=Zt&&(!iu||fo&&8<fo&&11>=fo),bc=String.fromCharCode(32),$c=!1;function ip(e,t){switch(e){case"keyup":return Xm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function Zm(e,t){switch(e){case"compositionend":return ap(t);case"keypress":return t.which!==32?null:($c=!0,bc);case"textInput":return e=t.data,e===bc&&$c?null:e;default:return null}}function qm(e,t){if(ur)return e==="compositionend"||!iu&&ip(e,t)?(e=rp(),Si=nu=cn=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return op&&t.locale!=="ko"?null:t.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!e0[e.type]:t==="textarea"}function lp(e,t,n,r){zf(r),t=zi(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var po=null,Eo=null;function t0(e){yp(e,0)}function ha(e){var t=fr(e);if(Tf(t))return e}function n0(e,t){if(e==="change")return t}var sp=!1;if(Zt){var tl;if(Zt){var nl="oninput"in document;if(!nl){var Ac=document.createElement("div");Ac.setAttribute("oninput","return;"),nl=typeof Ac.oninput=="function"}tl=nl}else tl=!1;sp=tl&&(!document.documentMode||9<document.documentMode)}function Ec(){po&&(po.detachEvent("onpropertychange",up),Eo=po=null)}function up(e){if(e.propertyName==="value"&&ha(Eo)){var t=[];lp(t,Eo,e,Js(e)),Uf(t0,t)}}function r0(e,t,n){e==="focusin"?(Ec(),po=t,Eo=n,po.attachEvent("onpropertychange",up)):e==="focusout"&&Ec()}function o0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ha(Eo)}function i0(e,t){if(e==="click")return ha(t)}function a0(e,t){if(e==="input"||e==="change")return ha(t)}function l0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:l0;function Ro(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ll.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lc(e,t){var n=Rc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rc(n)}}function cp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dp(){for(var e=window,t=Ti();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ti(e.document)}return t}function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function s0(e){var t=dp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cp(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Lc(n,i);var a=Lc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var u0=Zt&&"documentMode"in document&&11>=document.documentMode,cr=null,Gl=null,ho=null,Yl=!1;function Pc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yl||cr==null||cr!==Ti(r)||(r=cr,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&Ro(ho,r)||(ho=r,r=zi(Gl,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:ni("Animation","AnimationEnd"),animationiteration:ni("Animation","AnimationIteration"),animationstart:ni("Animation","AnimationStart"),transitionend:ni("Transition","TransitionEnd")},rl={},fp={};Zt&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function ga(e){if(rl[e])return rl[e];if(!dr[e])return e;var t=dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fp)return rl[e]=t[n];return e}var pp=ga("animationend"),hp=ga("animationiteration"),gp=ga("animationstart"),mp=ga("transitionend"),vp=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){vp.set(e,t),Jn(t,[e])}for(var ol=0;ol<Tc.length;ol++){var il=Tc[ol],c0=il.toLowerCase(),d0=il[0].toUpperCase()+il.slice(1);An(c0,"on"+d0)}An(pp,"onAnimationEnd");An(hp,"onAnimationIteration");An(gp,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(mp,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Nc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cm(r,t,void 0,e),e.currentTarget=null}function yp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Nc(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Nc(o,l,u),i=s}}}if(Di)throw e=Vl,Di=!1,Vl=null,e}function $e(e,t){var n=t[es];n===void 0&&(n=t[es]=new Set);var r=e+"__bubble";n.has(r)||(xp(t,e,2,!1),n.add(r))}function al(e,t,n){var r=0;t&&(r|=4),xp(n,e,r,t)}var ri="_reactListening"+Math.random().toString(36).slice(2);function Lo(e){if(!e[ri]){e[ri]=!0,Af.forEach(function(n){n!=="selectionchange"&&(f0.has(n)||al(n,!1,e),al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,al("selectionchange",!1,t))}}function xp(e,t,n,r){switch(np(t)){case 1:var o=Am;break;case 4:o=Em;break;default:o=tu}n=o.bind(null,t,n,e),o=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ll(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Dn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Uf(function(){var u=i,d=Js(n),f=[];e:{var c=vp.get(e);if(c!==void 0){var v=ru,m=e;switch(e){case"keypress":if(ki(n)===0)break e;case"keydown":case"keyup":v=Um;break;case"focusin":m="focus",v=el;break;case"focusout":m="blur",v=el;break;case"beforeblur":case"afterblur":v=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Wm;break;case pp:case hp:case gp:v=Dm;break;case mp:v=Km;break;case"scroll":v=Rm;break;case"wheel":v=Ym;break;case"copy":case"cut":case"paste":v=Im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=kc}var x=(t&4)!==0,b=!x&&e==="scroll",h=x?c!==null?c+"Capture":null:c;x=[];for(var p=u,g;p!==null;){g=p;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,h!==null&&(y=bo(p,h),y!=null&&x.push(Po(p,y,g)))),b)break;p=p.return}0<x.length&&(c=new v(c,m,null,n,d),f.push({event:c,listeners:x}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",c&&n!==Bl&&(m=n.relatedTarget||n.fromElement)&&(Dn(m)||m[qt]))break e;if((v||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,v?(m=n.relatedTarget||n.toElement,v=u,m=m?Dn(m):null,m!==null&&(b=Zn(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(v=null,m=u),v!==m)){if(x=wc,y="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=kc,y="onPointerLeave",h="onPointerEnter",p="pointer"),b=v==null?c:fr(v),g=m==null?c:fr(m),c=new x(y,p+"leave",v,n,d),c.target=b,c.relatedTarget=g,y=null,Dn(d)===u&&(x=new x(h,p+"enter",m,n,d),x.target=g,x.relatedTarget=b,y=x),b=y,v&&m)t:{for(x=v,h=m,p=0,g=x;g;g=rr(g))p++;for(g=0,y=h;y;y=rr(y))g++;for(;0<p-g;)x=rr(x),p--;for(;0<g-p;)h=rr(h),g--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=rr(x),h=rr(h)}x=null}else x=null;v!==null&&Dc(f,c,v,x,!1),m!==null&&b!==null&&Dc(f,b,m,x,!0)}}e:{if(c=u?fr(u):window,v=c.nodeName&&c.nodeName.toLowerCase(),v==="select"||v==="input"&&c.type==="file")var $=n0;else if(Cc(c))if(sp)$=a0;else{$=o0;var A=r0}else(v=c.nodeName)&&v.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&($=i0);if($&&($=$(e,u))){lp(f,$,n,d);break e}A&&A(e,c,u),e==="focusout"&&(A=c._wrapperState)&&A.controlled&&c.type==="number"&&_l(c,"number",c.value)}switch(A=u?fr(u):window,e){case"focusin":(Cc(A)||A.contentEditable==="true")&&(cr=A,Gl=u,ho=null);break;case"focusout":ho=Gl=cr=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,Pc(f,n,d);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":Pc(f,n,d)}var P;if(iu)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else ur?ip(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(op&&n.locale!=="ko"&&(ur||M!=="onCompositionStart"?M==="onCompositionEnd"&&ur&&(P=rp()):(cn=d,nu="value"in cn?cn.value:cn.textContent,ur=!0)),A=zi(u,M),0<A.length&&(M=new Sc(M,e,null,n,d),f.push({event:M,listeners:A}),P?M.data=P:(P=ap(n),P!==null&&(M.data=P)))),(P=Jm?Zm(e,n):qm(e,n))&&(u=zi(u,"onBeforeInput"),0<u.length&&(d=new Sc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=P))}yp(f,t)})}function Po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=bo(e,n),i!=null&&r.unshift(Po(e,i,o)),i=bo(e,t),i!=null&&r.push(Po(e,i,o))),e=e.return}return r}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=bo(n,i),s!=null&&a.unshift(Po(n,s,l))):o||(s=bo(n,i),s!=null&&a.push(Po(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var p0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Oc(e){return(typeof e=="string"?e:""+e).replace(p0,`
`).replace(h0,"")}function oi(e,t,n){if(t=Oc(t),Oc(e)!==t&&n)throw Error(_(425))}function Fi(){}var Xl=null,Jl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,Ic=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ic<"u"?function(e){return Ic.resolve(null).then(e).catch(v0)}:ql;function v0(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ao(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Ur,To="__reactProps$"+Ur,qt="__reactContainer$"+Ur,es="__reactEvents$"+Ur,y0="__reactListeners$"+Ur,x0="__reactHandles$"+Ur;function Dn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_c(e);e!==null;){if(n=e[Mt])return n;e=_c(e)}return t}e=n,n=e.parentNode}return null}function Vo(e){return e=e[Mt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ma(e){return e[To]||null}var ts=[],pr=-1;function En(e){return{current:e}}function Ce(e){0>pr||(e.current=ts[pr],ts[pr]=null,pr--)}function be(e,t){pr++,ts[pr]=e.current,e.current=t}var bn={},Je=En(bn),at=En(!1),Un=bn;function Tr(e,t){var n=e.type.contextTypes;if(!n)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function lt(e){return e=e.childContextTypes,e!=null}function ji(){Ce(at),Ce(Je)}function Mc(e,t,n){if(Je.current!==bn)throw Error(_(168));be(Je,t),be(at,n)}function wp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,rm(e)||"Unknown",o));return Pe({},n,r)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Un=Je.current,be(Je,e),be(at,at.current),!0}function zc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=wp(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,Ce(at),Ce(Je),be(Je,e)):Ce(at),be(at,n)}var Gt=null,va=!1,ul=!1;function Sp(e){Gt===null?Gt=[e]:Gt.push(e)}function w0(e){va=!0,Sp(e)}function Rn(){if(!ul&&Gt!==null){ul=!0;var e=0,t=we;try{var n=Gt;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gt=null,va=!1}catch(o){throw Gt!==null&&(Gt=Gt.slice(e+1)),Qf(Zs,Rn),o}finally{we=t,ul=!1}}return null}var hr=[],gr=0,Ui=null,Hi=0,mt=[],vt=0,Hn=null,Yt=1,Xt="";function Tn(e,t){hr[gr++]=Hi,hr[gr++]=Ui,Ui=e,Hi=t}function kp(e,t,n){mt[vt++]=Yt,mt[vt++]=Xt,mt[vt++]=Hn,Hn=e;var r=Yt;e=Xt;var o=32-Lt(r)-1;r&=~(1<<o),n+=1;var i=32-Lt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Yt=1<<32-Lt(t)+o|n<<o|r,Xt=i+e}else Yt=1<<i|n<<o|r,Xt=e}function lu(e){e.return!==null&&(Tn(e,1),kp(e,1,0))}function su(e){for(;e===Ui;)Ui=hr[--gr],hr[gr]=null,Hi=hr[--gr],hr[gr]=null;for(;e===Hn;)Hn=mt[--vt],mt[vt]=null,Xt=mt[--vt],mt[vt]=null,Yt=mt[--vt],mt[vt]=null}var dt=null,ct=null,Ae=!1,At=null;function bp(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ct=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Yt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ct=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rs(e){if(Ae){var t=ct;if(t){var n=t;if(!Fc(e,t)){if(ns(e))throw Error(_(418));t=gn(n.nextSibling);var r=dt;t&&Fc(e,t)?bp(r,n):(e.flags=e.flags&-4097|2,Ae=!1,dt=e)}}else{if(ns(e))throw Error(_(418));e.flags=e.flags&-4097|2,Ae=!1,dt=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function ii(e){if(e!==dt)return!1;if(!Ae)return jc(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=ct)){if(ns(e))throw $p(),Error(_(418));for(;t;)bp(e,t),t=gn(t.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=dt?gn(e.stateNode.nextSibling):null;return!0}function $p(){for(var e=ct;e;)e=gn(e.nextSibling)}function Nr(){ct=dt=null,Ae=!1}function uu(e){At===null?At=[e]:At.push(e)}var S0=rn.ReactCurrentBatchConfig;function $t(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vi=En(null),Wi=null,mr=null,cu=null;function du(){cu=mr=Wi=null}function fu(e){var t=Vi.current;Ce(Vi),e._currentValue=t}function os(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t){Wi=e,cu=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(Wi===null)throw Error(_(308));mr=e,Wi.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var On=null;function pu(e){On===null?On=[e]:On.push(e)}function Cp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,pu(t)):(n.next=o.next,o.next=n),t.interleaved=n,en(e,r)}function en(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ap(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,en(e,n)}return o=r.interleaved,o===null?(t.next=t,pu(r)):(t.next=o.next,o.next=t),r.interleaved=t,en(e,n)}function bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}function Bc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qi(e,t,n,r){var o=e.updateQueue;ln=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;a=0,d=u=s=null,l=i;do{var c=l.lane,v=l.eventTime;if((r&c)===c){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,x=l;switch(c=t,v=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){f=m.call(v,f,c);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,c=typeof m=="function"?m.call(v,f,c):m,c==null)break e;f=Pe({},f,c);break e;case 2:ln=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,c=o.effects,c===null?o.effects=[l]:c.push(l))}else v={eventTime:v,lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,s=f):d=d.next=v,a|=c;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;c=l,l=c.next,c.next=null,o.lastBaseUpdate=c,o.shared.pending=null}}while(1);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Wn|=a,e.lanes=a,e.memoizedState=f}}function Uc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Ep=new Cf.Component().refs;function is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ya={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=yn(e),i=Jt(r,o);i.payload=t,n!=null&&(i.callback=n),t=mn(e,i,o),t!==null&&(Pt(t,e,o,r),bi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=yn(e),i=Jt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=mn(e,i,o),t!==null&&(Pt(t,e,o,r),bi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=yn(e),o=Jt(n,r);o.tag=2,t!=null&&(o.callback=t),t=mn(e,o,r),t!==null&&(Pt(t,e,r,n),bi(t,e,r))}};function Hc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Ro(n,r)||!Ro(o,i):!0}function Rp(e,t,n){var r=!1,o=bn,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(o=lt(t)?Un:Je.current,r=t.contextTypes,i=(r=r!=null)?Tr(e,o):bn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ya,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ya.enqueueReplaceState(t,t.state,null)}function as(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Ep,hu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=wt(i):(i=lt(t)?Un:Je.current,o.context=Tr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(is(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ya.enqueueReplaceState(o,o.state,null),Qi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===Ep&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function ai(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wc(e){var t=e._init;return t(e._payload)}function Lp(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=xn(h,p),h.index=0,h.sibling=null,h}function i(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,y){return p===null||p.tag!==6?(p=ml(g,h.mode,y),p.return=h,p):(p=o(p,g),p.return=h,p)}function s(h,p,g,y){var $=g.type;return $===sr?d(h,p,g.props.children,y,g.key):p!==null&&(p.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===an&&Wc($)===p.type)?(y=o(p,g.props),y.ref=Xr(h,p,g),y.return=h,y):(y=Li(g.type,g.key,g.props,null,h.mode,y),y.ref=Xr(h,p,g),y.return=h,y)}function u(h,p,g,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=vl(g,h.mode,y),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function d(h,p,g,y,$){return p===null||p.tag!==7?(p=Fn(g,h.mode,y,$),p.return=h,p):(p=o(p,g),p.return=h,p)}function f(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ml(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yo:return g=Li(p.type,p.key,p.props,null,h.mode,g),g.ref=Xr(h,null,p),g.return=h,g;case lr:return p=vl(p,h.mode,g),p.return=h,p;case an:var y=p._init;return f(h,y(p._payload),g)}if(oo(p)||Wr(p))return p=Fn(p,h.mode,g,null),p.return=h,p;ai(h,p)}return null}function c(h,p,g,y){var $=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return $!==null?null:l(h,p,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:return g.key===$?s(h,p,g,y):null;case lr:return g.key===$?u(h,p,g,y):null;case an:return $=g._init,c(h,p,$(g._payload),y)}if(oo(g)||Wr(g))return $!==null?null:d(h,p,g,y,null);ai(h,g)}return null}function v(h,p,g,y,$){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(g)||null,l(p,h,""+y,$);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yo:return h=h.get(y.key===null?g:y.key)||null,s(p,h,y,$);case lr:return h=h.get(y.key===null?g:y.key)||null,u(p,h,y,$);case an:var A=y._init;return v(h,p,g,A(y._payload),$)}if(oo(y)||Wr(y))return h=h.get(g)||null,d(p,h,y,$,null);ai(p,y)}return null}function m(h,p,g,y){for(var $=null,A=null,P=p,M=p=0,X=null;P!==null&&M<g.length;M++){P.index>M?(X=P,P=null):X=P.sibling;var U=c(h,P,g[M],y);if(U===null){P===null&&(P=X);break}e&&P&&U.alternate===null&&t(h,P),p=i(U,p,M),A===null?$=U:A.sibling=U,A=U,P=X}if(M===g.length)return n(h,P),Ae&&Tn(h,M),$;if(P===null){for(;M<g.length;M++)P=f(h,g[M],y),P!==null&&(p=i(P,p,M),A===null?$=P:A.sibling=P,A=P);return Ae&&Tn(h,M),$}for(P=r(h,P);M<g.length;M++)X=v(P,h,M,g[M],y),X!==null&&(e&&X.alternate!==null&&P.delete(X.key===null?M:X.key),p=i(X,p,M),A===null?$=X:A.sibling=X,A=X);return e&&P.forEach(function(de){return t(h,de)}),Ae&&Tn(h,M),$}function x(h,p,g,y){var $=Wr(g);if(typeof $!="function")throw Error(_(150));if(g=$.call(g),g==null)throw Error(_(151));for(var A=$=null,P=p,M=p=0,X=null,U=g.next();P!==null&&!U.done;M++,U=g.next()){P.index>M?(X=P,P=null):X=P.sibling;var de=c(h,P,U.value,y);if(de===null){P===null&&(P=X);break}e&&P&&de.alternate===null&&t(h,P),p=i(de,p,M),A===null?$=de:A.sibling=de,A=de,P=X}if(U.done)return n(h,P),Ae&&Tn(h,M),$;if(P===null){for(;!U.done;M++,U=g.next())U=f(h,U.value,y),U!==null&&(p=i(U,p,M),A===null?$=U:A.sibling=U,A=U);return Ae&&Tn(h,M),$}for(P=r(h,P);!U.done;M++,U=g.next())U=v(P,h,M,U.value,y),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?M:U.key),p=i(U,p,M),A===null?$=U:A.sibling=U,A=U);return e&&P.forEach(function(ie){return t(h,ie)}),Ae&&Tn(h,M),$}function b(h,p,g,y){if(typeof g=="object"&&g!==null&&g.type===sr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:e:{for(var $=g.key,A=p;A!==null;){if(A.key===$){if($=g.type,$===sr){if(A.tag===7){n(h,A.sibling),p=o(A,g.props.children),p.return=h,h=p;break e}}else if(A.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===an&&Wc($)===A.type){n(h,A.sibling),p=o(A,g.props),p.ref=Xr(h,A,g),p.return=h,h=p;break e}n(h,A);break}else t(h,A);A=A.sibling}g.type===sr?(p=Fn(g.props.children,h.mode,y,g.key),p.return=h,h=p):(y=Li(g.type,g.key,g.props,null,h.mode,y),y.ref=Xr(h,p,g),y.return=h,h=y)}return a(h);case lr:e:{for(A=g.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=vl(g,h.mode,y),p.return=h,h=p}return a(h);case an:return A=g._init,b(h,p,A(g._payload),y)}if(oo(g))return m(h,p,g,y);if(Wr(g))return x(h,p,g,y);ai(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,g),p.return=h,h=p):(n(h,p),p=ml(g,h.mode,y),p.return=h,h=p),a(h)):n(h,p)}return b}var Dr=Lp(!0),Pp=Lp(!1),Wo={},jt=En(Wo),No=En(Wo),Do=En(Wo);function In(e){if(e===Wo)throw Error(_(174));return e}function gu(e,t){switch(be(Do,t),be(No,e),be(jt,Wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zl(t,e)}Ce(jt),be(jt,t)}function Or(){Ce(jt),Ce(No),Ce(Do)}function Tp(e){In(Do.current);var t=In(jt.current),n=zl(t,e.type);t!==n&&(be(No,e),be(jt,n))}function mu(e){No.current===e&&(Ce(jt),Ce(No))}var Re=En(0);function Ki(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function vu(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var $i=rn.ReactCurrentDispatcher,dl=rn.ReactCurrentBatchConfig,Vn=0,Le=null,_e=null,ze=null,Gi=!1,go=!1,Oo=0,k0=0;function Ge(){throw Error(_(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function xu(e,t,n,r,o,i){if(Vn=i,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?A0:E0,e=n(r,o),go){i=0;do{if(go=!1,Oo=0,25<=i)throw Error(_(301));i+=1,ze=_e=null,t.updateQueue=null,$i.current=R0,e=n(r,o)}while(go)}if($i.current=Yi,t=_e!==null&&_e.next!==null,Vn=0,ze=_e=Le=null,Gi=!1,t)throw Error(_(300));return e}function wu(){var e=Oo!==0;return Oo=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Le.memoizedState=ze=e:ze=ze.next=e,ze}function St(){if(_e===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=ze===null?Le.memoizedState:ze.next;if(t!==null)ze=t,_e=e;else{if(e===null)throw Error(_(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},ze===null?Le.memoizedState=ze=e:ze=ze.next=e}return ze}function Io(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=St(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=_e,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var d=u.lane;if((Vn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Le.lanes|=d,Wn|=d}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Tt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Le.lanes|=i,Wn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pl(e){var t=St(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Tt(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Np(){}function Dp(e,t){var n=Le,r=St(),o=t(),i=!Tt(r.memoizedState,o);if(i&&(r.memoizedState=o,it=!0),r=r.queue,Su(_p.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,_o(9,Ip.bind(null,n,r,o,t),void 0,null),Fe===null)throw Error(_(349));(Vn&30)!==0||Op(n,t,o)}return o}function Op(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ip(e,t,n,r){t.value=n,t.getSnapshot=r,Mp(t)&&zp(e)}function _p(e,t,n){return n(function(){Mp(t)&&zp(e)})}function Mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function zp(e){var t=en(e,1);t!==null&&Pt(t,e,1,-1)}function Qc(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=C0.bind(null,Le,e),[t.memoizedState,e]}function _o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fp(){return St().memoizedState}function Ci(e,t,n,r){var o=_t();Le.flags|=e,o.memoizedState=_o(1|t,n,void 0,r===void 0?null:r)}function xa(e,t,n,r){var o=St();r=r===void 0?null:r;var i=void 0;if(_e!==null){var a=_e.memoizedState;if(i=a.destroy,r!==null&&yu(r,a.deps)){o.memoizedState=_o(t,n,i,r);return}}Le.flags|=e,o.memoizedState=_o(1|t,n,i,r)}function Kc(e,t){return Ci(8390656,8,e,t)}function Su(e,t){return xa(2048,8,e,t)}function jp(e,t){return xa(4,2,e,t)}function Bp(e,t){return xa(4,4,e,t)}function Up(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hp(e,t,n){return n=n!=null?n.concat([e]):null,xa(4,4,Up.bind(null,t,e),n)}function ku(){}function Vp(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wp(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qp(e,t,n){return(Vn&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n):(Tt(n,t)||(n=Yf(),Le.lanes|=n,Wn|=n,e.baseState=!0),t)}function b0(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=dl.transition;dl.transition={};try{e(!1),t()}finally{we=n,dl.transition=r}}function Kp(){return St().memoizedState}function $0(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gp(e))Yp(t,n);else if(n=Cp(e,t,n,r),n!==null){var o=et();Pt(n,e,r,o),Xp(n,t,r)}}function C0(e,t,n){var r=yn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gp(e))Yp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Tt(l,a)){var s=t.interleaved;s===null?(o.next=o,pu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Cp(e,t,o,r),n!==null&&(o=et(),Pt(n,e,r,o),Xp(n,t,r))}}function Gp(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function Yp(e,t){go=Gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xp(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}var Yi={readContext:wt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},A0={readContext:wt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Kc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ci(4194308,4,Up.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ci(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$0.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:Qc,useDebugValue:ku,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=Qc(!1),t=e[0];return e=b0.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,o=_t();if(Ae){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Fe===null)throw Error(_(349));(Vn&30)!==0||Op(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Kc(_p.bind(null,r,i,e),[e]),r.flags|=2048,_o(9,Ip.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=_t(),t=Fe.identifierPrefix;if(Ae){var n=Xt,r=Yt;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=k0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},E0={readContext:wt,useCallback:Vp,useContext:wt,useEffect:Su,useImperativeHandle:Hp,useInsertionEffect:jp,useLayoutEffect:Bp,useMemo:Wp,useReducer:fl,useRef:Fp,useState:function(){return fl(Io)},useDebugValue:ku,useDeferredValue:function(e){var t=St();return Qp(t,_e.memoizedState,e)},useTransition:function(){var e=fl(Io)[0],t=St().memoizedState;return[e,t]},useMutableSource:Np,useSyncExternalStore:Dp,useId:Kp,unstable_isNewReconciler:!1},R0={readContext:wt,useCallback:Vp,useContext:wt,useEffect:Su,useImperativeHandle:Hp,useInsertionEffect:jp,useLayoutEffect:Bp,useMemo:Wp,useReducer:pl,useRef:Fp,useState:function(){return pl(Io)},useDebugValue:ku,useDeferredValue:function(e){var t=St();return _e===null?t.memoizedState=e:Qp(t,_e.memoizedState,e)},useTransition:function(){var e=pl(Io)[0],t=St().memoizedState;return[e,t]},useMutableSource:Np,useSyncExternalStore:Dp,useId:Kp,unstable_isNewReconciler:!1};function Ir(e,t){try{var n="",r=t;do n+=nm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function hl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var L0=typeof WeakMap=="function"?WeakMap:Map;function Jp(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ji||(Ji=!0,vs=r),ls(e,t)},n}function Zp(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ls(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ls(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new L0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=H0.bind(null,e,t,n),t.then(e,e))}function Yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var P0=rn.ReactCurrentOwner,it=!1;function qe(e,t,n,r){t.child=e===null?Pp(t,null,n,r):Dr(t,e.child,n,r)}function Jc(e,t,n,r,o){n=n.render;var i=t.ref;return Ar(t,o),r=xu(e,t,n,r,i,o),n=wu(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tn(e,t,o)):(Ae&&n&&lu(t),t.flags|=1,qe(e,t,r,o),t.child)}function Zc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Pu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,qp(e,t,i,r,o)):(e=Li(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(a,r)&&e.ref===t.ref)return tn(e,t,o)}return t.flags|=1,e=xn(i,r),e.ref=t.ref,e.return=t,t.child=e}function qp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ro(i,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,tn(e,t,o)}return ss(e,t,n,r,o)}function eh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(yr,ut),ut|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(yr,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,be(yr,ut),ut|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,be(yr,ut),ut|=r;return qe(e,t,o,n),t.child}function th(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ss(e,t,n,r,o){var i=lt(n)?Un:Je.current;return i=Tr(t,i),Ar(t,o),n=xu(e,t,n,r,i,o),r=wu(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tn(e,t,o)):(Ae&&r&&lu(t),t.flags|=1,qe(e,t,n,o),t.child)}function qc(e,t,n,r,o){if(lt(n)){var i=!0;Bi(t)}else i=!1;if(Ar(t,o),t.stateNode===null)Ai(e,t),Rp(t,n,r),as(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=lt(n)?Un:Je.current,u=Tr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Vc(t,a,r,u),ln=!1;var c=t.memoizedState;a.state=c,Qi(t,r,a,o),s=t.memoizedState,l!==r||c!==s||at.current||ln?(typeof d=="function"&&(is(t,n,d,r),s=t.memoizedState),(l=ln||Hc(t,n,l,r,c,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ap(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:$t(t.type,l),a.props=u,f=t.pendingProps,c=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=wt(s):(s=lt(n)?Un:Je.current,s=Tr(t,s));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||c!==s)&&Vc(t,a,r,s),ln=!1,c=t.memoizedState,a.state=c,Qi(t,r,a,o);var m=t.memoizedState;l!==f||c!==m||at.current||ln?(typeof v=="function"&&(is(t,n,v,r),m=t.memoizedState),(u=ln||Hc(t,n,u,r,c,m,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return us(e,t,n,r,i,o)}function us(e,t,n,r,o,i){th(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&zc(t,n,!1),tn(e,t,i);r=t.stateNode,P0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Dr(t,e.child,null,i),t.child=Dr(t,null,l,i)):qe(e,t,l,i),t.memoizedState=r.state,o&&zc(t,n,!0),t.child}function nh(e){var t=e.stateNode;t.pendingContext?Mc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mc(e,t.context,!1),gu(e,t.containerInfo)}function ed(e,t,n,r,o){return Nr(),uu(o),t.flags|=256,qe(e,t,n,r),t.child}var cs={dehydrated:null,treeContext:null,retryLane:0};function ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function rh(e,t,n){var r=t.pendingProps,o=Re.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),be(Re,o&1),e===null)return rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ka(a,r,0,null),e=Fn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ds(n),t.memoizedState=cs,e):bu(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return T0(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=xn(l,i):(i=Fn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?ds(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=cs,r}return i=e.child,e=i.sibling,r=xn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bu(e,t){return t=ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function li(e,t,n,r){return r!==null&&uu(r),Dr(t,e.child,null,n),e=bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function T0(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=hl(Error(_(422))),li(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ka({mode:"visible",children:r.children},o,0,null),i=Fn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Dr(t,e.child,null,a),t.child.memoizedState=ds(a),t.memoizedState=cs,i);if((t.mode&1)===0)return li(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(_(419)),r=hl(i,r,void 0),li(e,t,a,r)}if(l=(a&e.childLanes)!==0,it||l){if(r=Fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,en(e,o),Pt(r,e,o,-1))}return Lu(),r=hl(Error(_(421))),li(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=V0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ct=gn(o.nextSibling),dt=t,Ae=!0,At=null,e!==null&&(mt[vt++]=Yt,mt[vt++]=Xt,mt[vt++]=Hn,Yt=e.id,Xt=e.overflow,Hn=t),t=bu(t,r.children),t.flags|=4096,t)}function td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),os(e.return,t,n)}function gl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function oh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(qe(e,t,r.children,n),r=Re.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&td(e,n,t);else if(e.tag===19)td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Re,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ki(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),gl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ki(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}gl(t,!0,n,null,i);break;case"together":gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ai(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function N0(e,t,n){switch(t.tag){case 3:nh(t),Nr();break;case 5:Tp(t);break;case 1:lt(t.type)&&Bi(t);break;case 4:gu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;be(Vi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Re,Re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?rh(e,t,n):(be(Re,Re.current&1),e=tn(e,t,n),e!==null?e.sibling:null);be(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return oh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),be(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,eh(e,t,n)}return tn(e,t,n)}var ih,fs,ah,lh;ih=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fs=function(){};ah=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,In(jt.current);var i=null;switch(n){case"input":o=Ol(e,o),r=Ol(e,r),i=[];break;case"select":o=Pe({},o,{value:void 0}),r=Pe({},r,{value:void 0}),i=[];break;case"textarea":o=Ml(e,o),r=Ml(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fi)}Fl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(So.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(So.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&$e("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};lh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jr(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function D0(e,t,n){var r=t.pendingProps;switch(su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return lt(t.type)&&ji(),Ye(t),null;case 3:return r=t.stateNode,Or(),Ce(at),Ce(Je),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&(ws(At),At=null))),fs(e,t),Ye(t),null;case 5:mu(t);var o=In(Do.current);if(n=t.type,e!==null&&t.stateNode!=null)ah(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ye(t),null}if(e=In(jt.current),ii(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Mt]=t,r[To]=i,e=(t.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(o=0;o<ao.length;o++)$e(ao[o],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":cc(r,i),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$e("invalid",r);break;case"textarea":fc(r,i),$e("invalid",r)}Fl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&oi(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&oi(r.textContent,l,e),o=["children",""+l]):So.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&$e("scroll",r)}switch(n){case"input":Xo(r),dc(r,i,!0);break;case"textarea":Xo(r),pc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Of(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Mt]=t,e[To]=r,ih(e,t,!1,!1),t.stateNode=e;e:{switch(a=jl(n,r),n){case"dialog":$e("cancel",e),$e("close",e),o=r;break;case"iframe":case"object":case"embed":$e("load",e),o=r;break;case"video":case"audio":for(o=0;o<ao.length;o++)$e(ao[o],e);o=r;break;case"source":$e("error",e),o=r;break;case"img":case"image":case"link":$e("error",e),$e("load",e),o=r;break;case"details":$e("toggle",e),o=r;break;case"input":cc(e,r),o=Ol(e,r),$e("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Pe({},r,{value:void 0}),$e("invalid",e);break;case"textarea":fc(e,r),o=Ml(e,r),$e("invalid",e);break;default:o=r}Fl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Mf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&If(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ko(e,s):typeof s=="number"&&ko(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(So.hasOwnProperty(i)?s!=null&&i==="onScroll"&&$e("scroll",e):s!=null&&Ks(e,i,s,a))}switch(n){case"input":Xo(e),dc(e,r,!1);break;case"textarea":Xo(e),pc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?kr(e,!!r.multiple,i,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)lh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=In(Do.current),In(jt.current),ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(i=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:oi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return Ye(t),null;case 13:if(Ce(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)$p(),Nr(),t.flags|=98560,i=!1;else if(i=ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Mt]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),i=!1}else At!==null&&(ws(At),At=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Re.current&1)!==0?Me===0&&(Me=3):Lu())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Or(),fs(e,t),e===null&&Lo(t.stateNode.containerInfo),Ye(t),null;case 10:return fu(t.type._context),Ye(t),null;case 17:return lt(t.type)&&ji(),Ye(t),null;case 19:if(Ce(Re),i=t.memoizedState,i===null)return Ye(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Jr(i,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Ki(e),a!==null){for(t.flags|=128,Jr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Re,Re.current&1|2),t.child}e=e.sibling}i.tail!==null&&De()>_r&&(t.flags|=128,r=!0,Jr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ki(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Ae)return Ye(t),null}else 2*De()-i.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Jr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=De(),t.sibling=null,n=Re.current,be(Re,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return Ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ut&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function O0(e,t){switch(su(t),t.tag){case 1:return lt(t.type)&&ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),Ce(at),Ce(Je),vu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return mu(t),null;case 13:if(Ce(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Re),null;case 4:return Or(),null;case 10:return fu(t.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var si=!1,Xe=!1,I0=typeof WeakSet=="function"?WeakSet:Set,K=null;function vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function ps(e,t,n){try{n()}catch(r){Te(e,t,r)}}var nd=!1;function _0(e,t){if(Xl=_i,e=dp(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)c=f,f=v;for(;;){if(f===e)break t;if(c===n&&++u===o&&(l=a),c===i&&++d===r&&(s=a),(v=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},_i=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,b=m.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:$t(t.type,x),b);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){Te(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return m=nd,nd=!1,m}function mo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ps(t,n,i)}o=o.next}while(o!==r)}}function wa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sh(e){var t=e.alternate;t!==null&&(e.alternate=null,sh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[To],delete t[es],delete t[y0],delete t[x0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uh(e){return e.tag===5||e.tag===3||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fi));else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function ms(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ms(e,t,n),e=e.sibling;e!==null;)ms(e,t,n),e=e.sibling}var Be=null,Ct=!1;function on(e,t,n){for(n=n.child;n!==null;)ch(e,t,n),n=n.sibling}function ch(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(fa,n)}catch{}switch(n.tag){case 5:Xe||vr(n,t);case 6:var r=Be,o=Ct;Be=null,on(e,t,n),Be=r,Ct=o,Be!==null&&(Ct?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ct?(e=Be,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Ao(e)):sl(Be,n.stateNode));break;case 4:r=Be,o=Ct,Be=n.stateNode.containerInfo,Ct=!0,on(e,t,n),Be=r,Ct=o;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&ps(n,t,a),o=o.next}while(o!==r)}on(e,t,n);break;case 1:if(!Xe&&(vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,on(e,t,n),Xe=r):on(e,t,n);break;default:on(e,t,n)}}function od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new I0),t.forEach(function(r){var o=W0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ct=!1;break e;case 3:Be=l.stateNode.containerInfo,Ct=!0;break e;case 4:Be=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(Be===null)throw Error(_(160));ch(i,a,o),Be=null,Ct=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dh(t,e),t=t.sibling}function dh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Ot(e),r&4){try{mo(3,e,e.return),wa(3,e)}catch(x){Te(e,e.return,x)}try{mo(5,e,e.return)}catch(x){Te(e,e.return,x)}}break;case 1:bt(t,e),Ot(e),r&512&&n!==null&&vr(n,n.return);break;case 5:if(bt(t,e),Ot(e),r&512&&n!==null&&vr(n,n.return),e.flags&32){var o=e.stateNode;try{ko(o,"")}catch(x){Te(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Nf(o,i),jl(l,a);var u=jl(l,i);for(a=0;a<s.length;a+=2){var d=s[a],f=s[a+1];d==="style"?Mf(o,f):d==="dangerouslySetInnerHTML"?If(o,f):d==="children"?ko(o,f):Ks(o,d,f,u)}switch(l){case"input":Il(o,i);break;case"textarea":Df(o,i);break;case"select":var c=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?kr(o,!!i.multiple,v,!1):c!==!!i.multiple&&(i.defaultValue!=null?kr(o,!!i.multiple,i.defaultValue,!0):kr(o,!!i.multiple,i.multiple?[]:"",!1))}o[To]=i}catch(x){Te(e,e.return,x)}}break;case 6:if(bt(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){Te(e,e.return,x)}}break;case 3:if(bt(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(x){Te(e,e.return,x)}break;case 4:bt(t,e),Ot(e);break;case 13:bt(t,e),Ot(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Au=De())),r&4&&od(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||d,bt(t,e),Xe=u):bt(t,e),Ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(K=e,d=e.child;d!==null;){for(f=K=d;K!==null;){switch(c=K,v=c.child,c.tag){case 0:case 11:case 14:case 15:mo(4,c,c.return);break;case 1:vr(c,c.return);var m=c.stateNode;if(typeof m.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(x){Te(r,n,x)}}break;case 5:vr(c,c.return);break;case 22:if(c.memoizedState!==null){ad(f);continue}}v!==null?(v.return=c,K=v):ad(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=_f("display",a))}catch(x){Te(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Te(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:bt(t,e),Ot(e),r&4&&od(e);break;case 21:break;default:bt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uh(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ko(o,""),r.flags&=-33);var i=rd(e);ms(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=rd(e);gs(e,l,a);break;default:throw Error(_(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M0(e,t,n){K=e,fh(e)}function fh(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var o=K,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||si;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Xe;l=si;var u=Xe;if(si=a,(Xe=s)&&!u)for(K=o;K!==null;)a=K,s=a.child,a.tag===22&&a.memoizedState!==null?ld(o):s!==null?(s.return=a,K=s):ld(o);for(;i!==null;)K=i,fh(i),i=i.sibling;K=o,si=l,Xe=u}id(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,K=i):id(e)}}function id(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||wa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Uc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ao(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Xe||t.flags&512&&hs(t)}catch(c){Te(t,t.return,c)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function ad(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function ld(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wa(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Te(t,o,s)}}var i=t.return;try{hs(t)}catch(s){Te(t,i,s)}break;case 5:var a=t.return;try{hs(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var z0=Math.ceil,Xi=rn.ReactCurrentDispatcher,$u=rn.ReactCurrentOwner,xt=rn.ReactCurrentBatchConfig,me=0,Fe=null,Oe=null,He=0,ut=0,yr=En(0),Me=0,Mo=null,Wn=0,Sa=0,Cu=0,vo=null,ot=null,Au=0,_r=1/0,Kt=null,Ji=!1,vs=null,vn=null,ui=!1,dn=null,Zi=0,yo=0,ys=null,Ei=-1,Ri=0;function et(){return(me&6)!==0?De():Ei!==-1?Ei:Ei=De()}function yn(e){return(e.mode&1)===0?1:(me&2)!==0&&He!==0?He&-He:S0.transition!==null?(Ri===0&&(Ri=Yf()),Ri):(e=we,e!==0||(e=window.event,e=e===void 0?16:np(e.type)),e)}function Pt(e,t,n,r){if(50<yo)throw yo=0,ys=null,Error(_(185));Uo(e,n,r),((me&2)===0||e!==Fe)&&(e===Fe&&((me&2)===0&&(Sa|=n),Me===4&&un(e,He)),st(e,r),n===1&&me===0&&(t.mode&1)===0&&(_r=De()+500,va&&Rn()))}function st(e,t){var n=e.callbackNode;Sm(e,t);var r=Ii(e,e===Fe?He:0);if(r===0)n!==null&&mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mc(n),t===1)e.tag===0?w0(sd.bind(null,e)):Sp(sd.bind(null,e)),m0(function(){(me&6)===0&&Rn()}),n=null;else{switch(Xf(r)){case 1:n=Zs;break;case 4:n=Kf;break;case 16:n=Oi;break;case 536870912:n=Gf;break;default:n=Oi}n=wh(n,ph.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ph(e,t){if(Ei=-1,Ri=0,(me&6)!==0)throw Error(_(327));var n=e.callbackNode;if(Er()&&e.callbackNode!==n)return null;var r=Ii(e,e===Fe?He:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=qi(e,r);else{t=r;var o=me;me|=2;var i=gh();(Fe!==e||He!==t)&&(Kt=null,_r=De()+500,zn(e,t));do try{B0();break}catch(l){hh(e,l)}while(1);du(),Xi.current=i,me=o,Oe!==null?t=0:(Fe=null,He=0,t=Me)}if(t!==0){if(t===2&&(o=Wl(e),o!==0&&(r=o,t=xs(e,o))),t===1)throw n=Mo,zn(e,0),un(e,r),st(e,De()),n;if(t===6)un(e,r);else{if(o=e.current.alternate,(r&30)===0&&!F0(o)&&(t=qi(e,r),t===2&&(i=Wl(e),i!==0&&(r=i,t=xs(e,i))),t===1))throw n=Mo,zn(e,0),un(e,r),st(e,De()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Nn(e,ot,Kt);break;case 3:if(un(e,r),(r&130023424)===r&&(t=Au+500-De(),10<t)){if(Ii(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ql(Nn.bind(null,e,ot,Kt),t);break}Nn(e,ot,Kt);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Lt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*z0(r/1960))-r,10<r){e.timeoutHandle=ql(Nn.bind(null,e,ot,Kt),r);break}Nn(e,ot,Kt);break;case 5:Nn(e,ot,Kt);break;default:throw Error(_(329))}}}return st(e,De()),e.callbackNode===n?ph.bind(null,e):null}function xs(e,t){var n=vo;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=qi(e,t),e!==2&&(t=ot,ot=n,t!==null&&ws(t)),e}function ws(e){ot===null?ot=e:ot.push.apply(ot,e)}function F0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~Cu,t&=~Sa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function sd(e){if((me&6)!==0)throw Error(_(327));Er();var t=Ii(e,0);if((t&1)===0)return st(e,De()),null;var n=qi(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=xs(e,r))}if(n===1)throw n=Mo,zn(e,0),un(e,t),st(e,De()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,ot,Kt),st(e,De()),null}function Eu(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(_r=De()+500,va&&Rn())}}function Qn(e){dn!==null&&dn.tag===0&&(me&6)===0&&Er();var t=me;me|=1;var n=xt.transition,r=we;try{if(xt.transition=null,we=1,e)return e()}finally{we=r,xt.transition=n,me=t,(me&6)===0&&Rn()}}function Ru(){ut=yr.current,Ce(yr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,g0(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ji();break;case 3:Or(),Ce(at),Ce(Je),vu();break;case 5:mu(r);break;case 4:Or();break;case 13:Ce(Re);break;case 19:Ce(Re);break;case 10:fu(r.type._context);break;case 22:case 23:Ru()}n=n.return}if(Fe=e,Oe=e=xn(e.current,null),He=ut=t,Me=0,Mo=null,Cu=Sa=Wn=0,ot=vo=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}On=null}return e}function hh(e,t){do{var n=Oe;try{if(du(),$i.current=Yi,Gi){for(var r=Le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Gi=!1}if(Vn=0,ze=_e=Le=null,go=!1,Oo=0,$u.current=null,n===null||n.return===null){Me=1,Mo=t,Oe=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=He,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,f=d.tag;if((d.mode&1)===0&&(f===0||f===11||f===15)){var c=d.alternate;c?(d.updateQueue=c.updateQueue,d.memoizedState=c.memoizedState,d.lanes=c.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Yc(a);if(v!==null){v.flags&=-257,Xc(v,a,l,i,t),v.mode&1&&Gc(i,u,t),t=v,s=u;var m=t.updateQueue;if(m===null){var x=new Set;x.add(s),t.updateQueue=x}else m.add(s);break e}else{if((t&1)===0){Gc(i,u,t),Lu();break e}s=Error(_(426))}}else if(Ae&&l.mode&1){var b=Yc(a);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),Xc(b,a,l,i,t),uu(Ir(s,l));break e}}i=s=Ir(s,l),Me!==4&&(Me=2),vo===null?vo=[i]:vo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Jp(i,s,t);Bc(i,h);break e;case 1:l=s;var p=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vn===null||!vn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Zp(i,l,t);Bc(i,y);break e}}i=i.return}while(i!==null)}vh(n)}catch($){t=$,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function gh(){var e=Xi.current;return Xi.current=Yi,e===null?Yi:e}function Lu(){(Me===0||Me===3||Me===2)&&(Me=4),Fe===null||(Wn&268435455)===0&&(Sa&268435455)===0||un(Fe,He)}function qi(e,t){var n=me;me|=2;var r=gh();(Fe!==e||He!==t)&&(Kt=null,zn(e,t));do try{j0();break}catch(o){hh(e,o)}while(1);if(du(),me=n,Xi.current=r,Oe!==null)throw Error(_(261));return Fe=null,He=0,Me}function j0(){for(;Oe!==null;)mh(Oe)}function B0(){for(;Oe!==null&&!fm();)mh(Oe)}function mh(e){var t=xh(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?vh(e):Oe=t,$u.current=null}function vh(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=D0(n,t,ut),n!==null){Oe=n;return}}else{if(n=O0(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Me===0&&(Me=5)}function Nn(e,t,n){var r=we,o=xt.transition;try{xt.transition=null,we=1,U0(e,t,n,r)}finally{xt.transition=o,we=r}return null}function U0(e,t,n,r){do Er();while(dn!==null);if((me&6)!==0)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(km(e,i),e===Fe&&(Oe=Fe=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ui||(ui=!0,wh(Oi,function(){return Er(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=xt.transition,xt.transition=null;var a=we;we=1;var l=me;me|=4,$u.current=null,_0(e,n),dh(n,e),s0(Jl),_i=!!Xl,Jl=Xl=null,e.current=n,M0(n),pm(),me=l,we=a,xt.transition=i}else e.current=n;if(ui&&(ui=!1,dn=e,Zi=o),i=e.pendingLanes,i===0&&(vn=null),mm(n.stateNode),st(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ji)throw Ji=!1,e=vs,vs=null,e;return(Zi&1)!==0&&e.tag!==0&&Er(),i=e.pendingLanes,(i&1)!==0?e===ys?yo++:(yo=0,ys=e):yo=0,Rn(),null}function Er(){if(dn!==null){var e=Xf(Zi),t=xt.transition,n=we;try{if(xt.transition=null,we=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,Zi=0,(me&6)!==0)throw Error(_(331));var o=me;for(me|=4,K=e.current;K!==null;){var i=K,a=i.child;if((K.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:mo(8,d,i)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var c=d.sibling,v=d.return;if(sh(d),d===u){K=null;break}if(c!==null){c.return=v,K=c;break}K=v}}}var m=i.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}K=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,K=a;else e:for(;K!==null;){if(i=K,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:mo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,K=h;break e}K=i.return}}var p=e.current;for(K=p;K!==null;){a=K;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,K=g;else e:for(a=p;K!==null;){if(l=K,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:wa(9,l)}}catch($){Te(l,l.return,$)}if(l===a){K=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,K=y;break e}K=l.return}}if(me=o,Rn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(fa,e)}catch{}r=!0}return r}finally{we=n,xt.transition=t}}return!1}function ud(e,t,n){t=Ir(n,t),t=Jp(e,t,1),e=mn(e,t,1),t=et(),e!==null&&(Uo(e,1,t),st(e,t))}function Te(e,t,n){if(e.tag===3)ud(e,e,n);else for(;t!==null;){if(t.tag===3){ud(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=Ir(n,e),e=Zp(t,e,1),t=mn(t,e,1),e=et(),t!==null&&(Uo(t,1,e),st(t,e));break}}t=t.return}}function H0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(He&n)===n&&(Me===4||Me===3&&(He&130023424)===He&&500>De()-Au?zn(e,0):Cu|=n),st(e,t)}function yh(e,t){t===0&&((e.mode&1)===0?t=1:(t=qo,qo<<=1,(qo&130023424)===0&&(qo=4194304)));var n=et();e=en(e,t),e!==null&&(Uo(e,t,n),st(e,n))}function V0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yh(e,n)}function W0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),yh(e,n)}var xh;xh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)it=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return it=!1,N0(e,t,n);it=(e.flags&131072)!==0}else it=!1,Ae&&(t.flags&1048576)!==0&&kp(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ai(e,t),e=t.pendingProps;var o=Tr(t,Je.current);Ar(t,n),o=xu(null,t,r,e,o,n);var i=wu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(i=!0,Bi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hu(t),o.updater=ya,t.stateNode=o,o._reactInternals=t,as(t,r,e,n),t=us(null,t,r,!0,i,n)):(t.tag=0,Ae&&i&&lu(t),qe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ai(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=K0(r),e=$t(r,e),o){case 0:t=ss(null,t,r,e,n);break e;case 1:t=qc(null,t,r,e,n);break e;case 11:t=Jc(null,t,r,e,n);break e;case 14:t=Zc(null,t,r,$t(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),ss(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),qc(e,t,r,o,n);case 3:e:{if(nh(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Ap(e,t),Qi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ir(Error(_(423)),t),t=ed(e,t,r,n,o);break e}else if(r!==o){o=Ir(Error(_(424)),t),t=ed(e,t,r,n,o);break e}else for(ct=gn(t.stateNode.containerInfo.firstChild),dt=t,Ae=!0,At=null,n=Pp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nr(),r===o){t=tn(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return Tp(t),e===null&&rs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Zl(r,o)?a=null:i!==null&&Zl(r,i)&&(t.flags|=32),th(e,t),qe(e,t,a,n),t.child;case 6:return e===null&&rs(t),null;case 13:return rh(e,t,n);case 4:return gu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Jc(e,t,r,o,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,be(Vi,r._currentValue),r._currentValue=a,i!==null)if(Tt(i.value,a)){if(i.children===o.children&&!at.current){t=tn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Jt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),os(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),os(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}qe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ar(t,n),o=wt(o),r=r(o),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,o=$t(r,t.pendingProps),o=$t(r.type,o),Zc(e,t,r,o,n);case 15:return qp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Ai(e,t),t.tag=1,lt(r)?(e=!0,Bi(t)):e=!1,Ar(t,n),Rp(t,r,o),as(t,r,o,n),us(null,t,r,!0,e,n);case 19:return oh(e,t,n);case 22:return eh(e,t,n)}throw Error(_(156,t.tag))};function wh(e,t){return Qf(e,t)}function Q0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Q0(e,t,n,r)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function K0(e){if(typeof e=="function")return Pu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Xs)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Pu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case sr:return Fn(n.children,o,i,t);case Gs:a=8,o|=8;break;case Pl:return e=yt(12,n,t,o|2),e.elementType=Pl,e.lanes=i,e;case Tl:return e=yt(13,n,t,o),e.elementType=Tl,e.lanes=i,e;case Nl:return e=yt(19,n,t,o),e.elementType=Nl,e.lanes=i,e;case Lf:return ka(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ef:a=10;break e;case Rf:a=9;break e;case Ys:a=11;break e;case Xs:a=14;break e;case an:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=yt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Fn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function ka(e,t,n,r){return e=yt(22,e,r,t),e.elementType=Lf,e.lanes=n,e.stateNode={isHidden:!1},e}function ml(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function vl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function G0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ja(0),this.expirationTimes=Ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ja(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Tu(e,t,n,r,o,i,a,l,s){return e=new G0(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(i),e}function Y0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sh(e){if(!e)return bn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(lt(n))return wp(e,n,t)}return t}function kh(e,t,n,r,o,i,a,l,s){return e=Tu(n,r,!0,e,o,i,a,l,s),e.context=Sh(null),n=e.current,r=et(),o=yn(n),i=Jt(r,o),i.callback=t!=null?t:null,mn(n,i,o),e.current.lanes=o,Uo(e,o,r),st(e,r),e}function ba(e,t,n,r){var o=t.current,i=et(),a=yn(o);return n=Sh(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(o,t,a),e!==null&&(Pt(e,o,a,i),bi(e,o,a)),a}function ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nu(e,t){cd(e,t),(e=e.alternate)&&cd(e,t)}function X0(){return null}var bh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Du(e){this._internalRoot=e}$a.prototype.render=Du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ba(e,t,null,null)};$a.prototype.unmount=Du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){ba(null,e,null,null)}),t[qt]=null}};function $a(e){this._internalRoot=e}$a.prototype.unstable_scheduleHydration=function(e){if(e){var t=qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&tp(e)}};function Ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dd(){}function J0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ea(a);i.call(u)}}var a=kh(t,r,e,0,null,!1,!1,"",dd);return e._reactRootContainer=a,e[qt]=a.current,Lo(e.nodeType===8?e.parentNode:e),Qn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ea(s);l.call(u)}}var s=Tu(e,0,!1,null,null,!1,!1,"",dd);return e._reactRootContainer=s,e[qt]=s.current,Lo(e.nodeType===8?e.parentNode:e),Qn(function(){ba(t,s,n,r)}),s}function Aa(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=ea(a);l.call(s)}}ba(t,a,e,o)}else a=J0(n,t,e,o,r);return ea(a)}Jf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=io(t.pendingLanes);n!==0&&(qs(t,n|1),st(t,De()),(me&6)===0&&(_r=De()+500,Rn()))}break;case 13:Qn(function(){var r=en(e,1);if(r!==null){var o=et();Pt(r,e,1,o)}}),Nu(e,1)}};eu=function(e){if(e.tag===13){var t=en(e,134217728);if(t!==null){var n=et();Pt(t,e,134217728,n)}Nu(e,134217728)}};Zf=function(e){if(e.tag===13){var t=yn(e),n=en(e,t);if(n!==null){var r=et();Pt(n,e,t,r)}Nu(e,t)}};qf=function(){return we};ep=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Ul=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ma(r);if(!o)throw Error(_(90));Tf(r),Il(r,o)}}}break;case"textarea":Df(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};jf=Eu;Bf=Qn;var Z0={usingClientEntryPoint:!1,Events:[Vo,fr,ma,zf,Ff,Eu]},Zr={findFiberByHostInstance:Dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},q0={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vf(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||X0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{fa=ci.inject(q0),Ft=ci}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(t))throw Error(_(200));return Y0(e,t,null,n)};pt.createRoot=function(e,t){if(!Ou(e))throw Error(_(299));var n=!1,r="",o=bh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Tu(e,1,!1,null,null,n,!1,r,o),e[qt]=t.current,Lo(e.nodeType===8?e.parentNode:e),new Du(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Vf(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return Qn(e)};pt.hydrate=function(e,t,n){if(!Ca(t))throw Error(_(200));return Aa(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!Ou(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=bh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=kh(t,null,e,1,n!=null?n:null,o,!1,i,a),e[qt]=t.current,Lo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new $a(t)};pt.render=function(e,t,n){if(!Ca(t))throw Error(_(200));return Aa(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Ca(e))throw Error(_(40));return e._reactRootContainer?(Qn(function(){Aa(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};pt.unstable_batchedUpdates=Eu;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ca(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Aa(e,t,n,!1,r)};pt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=pt})(Vs);var fd=Vs.exports;Rl.createRoot=fd.createRoot,Rl.hydrateRoot=fd.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}var Ie;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ie||(Ie={}));const pd="popstate";function ev(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:l="",hash:s=""}=Ut(o.location.hash.substr(1));return jn("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:nn(i))}function r(o,i){tv(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return rv(t,n,r,e)}function tv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nv(){return Math.random().toString(36).substr(2,8)}function hd(e){return{usr:e.state,key:e.key}}function jn(e,t,n,r){return n===void 0&&(n=null),Ee({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ut(t):t,{state:n,key:t&&t.key||r||nv()})}function nn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ut(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zo(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:nn(e);return new URL(n,t)}function rv(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Ie.Pop,s=null;function u(){l=Ie.Pop,s&&s({action:l,location:c.location})}function d(v,m){l=Ie.Push;let x=jn(c.location,v,m);n&&n(x,v);let b=hd(x),h=c.createHref(x);try{a.pushState(b,"",h)}catch{o.location.assign(h)}i&&s&&s({action:l,location:c.location})}function f(v,m){l=Ie.Replace;let x=jn(c.location,v,m);n&&n(x,v);let b=hd(x),h=c.createHref(x);a.replaceState(b,"",h),i&&s&&s({action:l,location:c.location})}let c={get action(){return l},get location(){return e(o,a)},listen(v){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(pd,u),s=v,()=>{o.removeEventListener(pd,u),s=null}},createHref(v){return t(o,v)},encodeLocation(v){let m=zo(nn(v));return Ee({},v,{pathname:m.pathname,search:m.search,hash:m.hash})},push:d,replace:f,go(v){return a.go(v)}};return c}var Ue;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ue||(Ue={}));function ov(e){return e.index===!0}function $h(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,o)=>{let i=[...t,o],a=typeof r.id=="string"?r.id:i.join("-");return he(r.index!==!0||!r.children,"Cannot specify children on an index route"),he(!n.has(a),'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),n.add(a),ov(r)?Ee({},r,{id:a}):Ee({},r,{id:a,children:r.children?$h(r.children,i,n):void 0})})}function lo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ut(t):t,o=Ah(r.pathname||"/",n);if(o==null)return null;let i=Ch(e);iv(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=hv(i[l],vv(o));return a}function Ch(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let a={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(he(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let l=Bn([r,a.relativePath]),s=n.concat(a);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Ch(o.children,t,s,l)),!(o.path==null&&!o.index)&&t.push({path:l,score:fv(l,o.index),routesMeta:s})}),t}function iv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:pv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const av=/^:\w+$/,lv=3,sv=2,uv=1,cv=10,dv=-2,gd=e=>e==="*";function fv(e,t){let n=e.split("/"),r=n.length;return n.some(gd)&&(r+=dv),t&&(r+=sv),n.filter(o=>!gd(o)).reduce((o,i)=>o+(av.test(i)?lv:i===""?uv:cv),r)}function pv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function hv(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=gv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let f=l.route;i.push({params:r,pathname:Bn([o,d.pathname]),pathnameBase:kv(Bn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=Bn([o,d.pathnameBase]))}return i}function gv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=mv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let c=l[f]||"";a=i.slice(0,i.length-c.length).replace(/(.)\/+$/,"$1")}return u[d]=yv(l[f]||"",d),u},{}),pathname:i,pathnameBase:a,pattern:e}}function mv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Iu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function vv(e){try{return decodeURI(e)}catch(t){return Iu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yv(e,t){try{return decodeURIComponent(e)}catch(n){return Iu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ah(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Iu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Ut(e):e;return{pathname:n?n.startsWith("/")?n:wv(n,t):t,search:bv(r),hash:$v(o)}}function wv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function yl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Eh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Sv(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ut(e):(o=Ee({},e),he(!o.pathname||!o.pathname.includes("?"),yl("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),yl("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),yl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let c=a.split("/");for(;c[0]==="..";)c.shift(),f-=1;o.pathname=c.join("/")}l=f>=0?t[f]:"/"}let s=xv(o,l),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const Bn=e=>e.join("/").replace(/\/\/+/g,"/"),kv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$v=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class md extends Error{}class Cv{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,he(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((o,i)=>n=i),this.controller=new AbortController;let r=()=>n(new md("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(t).reduce((o,i)=>{let[a,l]=i;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{})}trackPromise(t,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(t);let r=Promise.race([n,this.abortPromise]).then(o=>this.onSettle(r,t,null,o),o=>this.onSettle(r,t,o));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,o){if(this.controller.signal.aborted&&r instanceof md)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const i=this.subscriber;return r?(Object.defineProperty(t,"_error",{get:()=>r}),i&&i(!1),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>o}),i&&i(!1),o)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let t=this.subscriber;t&&t(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(o=>{this.subscribe(i=>{t.removeEventListener("abort",r),(i||this.done)&&o(i)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return he(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,o]=n;return Object.assign(t,{[r]:Ev(o)})},{})}}function Av(e){return e instanceof Promise&&e._tracked===!0}function Ev(e){if(!Av(e))return e;if(e._error)throw e._error;return e._data}class Hr{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function Rh(e){return e instanceof Hr}const xl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Rv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Lv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pv=!Lv;function Tv(e){he(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=$h(e.routes),n=null,r=new Set,o=null,i=null,a=null,l=!1,s=lo(t,e.history.location,e.basename),u=null;if(s==null){let{matches:C,route:N,error:O}=Sd(t);s=C,u={[N.id]:O}}let d=!s.some(C=>C.route.loader)||e.hydrationData!=null,f,c={historyAction:e.history.action,location:e.history.location,matches:s,initialized:d,navigation:xl,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||u,fetchers:new Map},v=Ie.Pop,m=!1,x,b=!1,h=!1,p=[],g=[],y=new Map,$=0,A=-1,P=new Map,M=new Set,X=new Map,U=new Map;function de(){return n=e.history.listen(C=>{let{action:N,location:O}=C;return E(N,O)}),c.initialized||E(Ie.Pop,c.location),f}function ie(){n&&n(),r.clear(),x&&x.abort(),c.fetchers.forEach((C,N)=>L(N))}function ue(C){return r.add(C),()=>r.delete(C)}function ee(C){c=Ee({},c,C),r.forEach(N=>N(c))}function re(C,N){var O;let Z=c.actionData!=null&&c.navigation.formMethod!=null&&c.navigation.state==="loading"&&((O=c.navigation.formAction)==null?void 0:O.split("?")[0])===C.pathname,q=N.loaderData?{loaderData:Sl(c.loaderData,N.loaderData,N.matches||[])}:{};ee(Ee({},Z?{}:{actionData:null},N,q,{historyAction:v,location:C,initialized:!0,navigation:xl,revalidation:"idle",restoreScrollPosition:c.navigation.formData?!1:le(C,N.matches||c.matches),preventScrollReset:m})),b||v===Ie.Pop||(v===Ie.Push?e.history.push(C,C.state):v===Ie.Replace&&e.history.replace(C,C.state)),v=Ie.Pop,m=!1,b=!1,h=!1,p=[],g=[]}async function ke(C,N){if(typeof C=="number"){e.history.go(C);return}let{path:O,submission:Z,error:q}=vd(C,N),oe=jn(c.location,O,N&&N.state);oe=e.history.encodeLocation(oe);let j=(N&&N.replace)===!0||Z!=null?Ie.Replace:Ie.Push,te=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0;return await E(j,oe,{submission:Z,pendingError:q,preventScrollReset:te,replace:N&&N.replace})}function se(){if(V(),ee({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){E(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}E(v||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function E(C,N,O){x&&x.abort(),x=null,v=C,b=(O&&O.startUninterruptedRevalidation)===!0,ve(c.location,c.matches),m=(O&&O.preventScrollReset)===!0;let Z=O&&O.overrideNavigation,q=lo(t,N,e.basename);if(!q){let{matches:Qe,route:er,error:Vt}=Sd(t);fe(),re(N,{matches:Qe,loaderData:{},errors:{[er.id]:Vt}});return}if(Mv(c.location,N)){re(N,{matches:q});return}x=new AbortController;let oe=eo(N,x.signal,O&&O.submission),j,te;if(O&&O.pendingError)te={[xr(q).route.id]:O.pendingError};else if(O&&O.submission){let Qe=await H(oe,N,O.submission,q,{replace:O.replace});if(Qe.shortCircuited)return;j=Qe.pendingActionData,te=Qe.pendingActionError,Z=Ee({state:"loading",location:N},O.submission)}let{shortCircuited:ye,loaderData:xe,errors:ge}=await Y(oe,N,q,Z,O&&O.submission,O&&O.replace,j,te);ye||(x=null,re(N,{matches:q,loaderData:xe,errors:ge}))}async function H(C,N,O,Z,q){V();let oe=Ee({state:"submitting",location:N},O);ee({navigation:oe});let j,te=Ad(Z,N);if(!te.route.action)j=kd(N);else if(j=await qr("action",C,te,Z,f.basename),C.signal.aborted)return{shortCircuited:!0};if(Rr(j)){let ye=Ee({state:"loading",location:jn(c.location,j.location)},O);return await F(j,ye,q&&q.replace),{shortCircuited:!0}}if(xo(j)){let ye=xr(Z,te.route.id);return(q&&q.replace)!==!0&&(v=Ie.Push),{pendingActionError:{[ye.route.id]:j.error}}}if(_n(j))throw new Error("defer() is not supported in actions");return{pendingActionData:{[te.route.id]:j.data}}}async function Y(C,N,O,Z,q,oe,j,te){let ye=Z;ye||(ye={state:"loading",location:N,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0});let[xe,ge]=yd(c,O,q,N,h,p,g,j,te,X);if(fe(Ke=>!(O&&O.some(rt=>rt.route.id===Ke))||xe&&xe.some(rt=>rt.route.id===Ke)),xe.length===0&&ge.length===0)return re(N,{matches:O,loaderData:Sl(c.loaderData,{},O),errors:te||null,actionData:j||null}),{shortCircuited:!0};b||(ge.forEach(Ke=>{let[rt]=Ke,nr=c.fetchers.get(rt),Vr={state:"loading",data:nr&&nr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(rt,Vr)}),ee(Ee({navigation:ye,actionData:j||c.actionData||null},ge.length>0?{fetchers:new Map(c.fetchers)}:{}))),A=++$,ge.forEach(Ke=>{let[rt]=Ke;return y.set(rt,x)});let{results:Qe,loaderResults:er,fetcherResults:Vt}=await S(c.matches,O,xe,ge,C);if(C.signal.aborted)return{shortCircuited:!0};ge.forEach(Ke=>{let[rt]=Ke;return y.delete(rt)});let Ln=bd(Qe);if(Ln){let Ke=wl(c,Ln);return await F(Ln,Ke,oe),{shortCircuited:!0}}let{loaderData:Wa,errors:Ko}=wd(c,O,xe,er,te,ge,Vt,U);U.forEach((Ke,rt)=>{Ke.subscribe(nr=>{(nr||Ke.done)&&U.delete(rt)})}),Q();let tr=ae(A);return Ee({loaderData:Wa,errors:Ko},tr||ge.length>0?{fetchers:new Map(c.fetchers)}:{})}function ce(C){return c.fetchers.get(C)||Rv}function z(C,N,O,Z){if(Pv)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");y.has(C)&&B(C);let q=lo(t,O,e.basename);if(!q){I(C,N,new Hr(404,"Not Found",null));return}let{path:oe,submission:j}=vd(O,Z,!0),te=Ad(q,oe);if(j){R(C,N,oe,te,q,j);return}X.set(C,[oe,te,q]),T(C,N,oe,te,q)}async function R(C,N,O,Z,q,oe){if(V(),X.delete(C),!Z.route.action){let{error:kt}=kd(O);I(C,N,kt);return}let j=c.fetchers.get(C),te=Ee({state:"submitting"},oe,{data:j&&j.data});c.fetchers.set(C,te),ee({fetchers:new Map(c.fetchers)});let ye=new AbortController,xe=eo(O,ye.signal,oe);y.set(C,ye);let ge=await qr("action",xe,Z,q,f.basename);if(xe.signal.aborted){y.get(C)===ye&&y.delete(C);return}if(Rr(ge)){y.delete(C),M.add(C);let kt=Ee({state:"loading"},oe,{data:void 0});c.fetchers.set(C,kt),ee({fetchers:new Map(c.fetchers)});let Wt=Ee({state:"loading",location:jn(c.location,ge.location)},oe);await F(ge,Wt);return}if(xo(ge)){I(C,N,ge.error);return}_n(ge)&&he(!1,"defer() is not supported in actions");let Qe=c.navigation.location||c.location,er=eo(Qe,ye.signal),Vt=c.navigation.state!=="idle"?lo(t,c.navigation.location,e.basename):c.matches;he(Vt,"Didn't find any matches after fetcher action");let Ln=++$;P.set(C,Ln);let Wa=Ee({state:"loading",data:ge.data},oe);c.fetchers.set(C,Wa);let[Ko,tr]=yd(c,Vt,oe,Qe,h,p,g,{[Z.route.id]:ge.data},void 0,X);tr.filter(kt=>{let[Wt]=kt;return Wt!==C}).forEach(kt=>{let[Wt]=kt,rc=c.fetchers.get(Wt),Og={state:"loading",data:rc&&rc.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(Wt,Og),y.set(Wt,ye)}),ee({fetchers:new Map(c.fetchers)});let{results:Ke,loaderResults:rt,fetcherResults:nr}=await S(c.matches,Vt,Ko,tr,er);if(ye.signal.aborted)return;P.delete(C),y.delete(C),tr.forEach(kt=>{let[Wt]=kt;return y.delete(Wt)});let Vr=bd(Ke);if(Vr){let kt=wl(c,Vr);await F(Vr,kt);return}let{loaderData:tc,errors:nc}=wd(c,c.matches,Ko,rt,void 0,tr,nr,U),Ng={state:"idle",data:ge.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(C,Ng);let Dg=ae(Ln);c.navigation.state==="loading"&&Ln>A?(he(v,"Expected pending action"),x&&x.abort(),re(c.navigation.location,{matches:Vt,loaderData:tc,errors:nc,fetchers:new Map(c.fetchers)})):(ee(Ee({errors:nc,loaderData:Sl(c.loaderData,tc,Vt)},Dg?{fetchers:new Map(c.fetchers)}:{})),h=!1)}async function T(C,N,O,Z,q){let oe=c.fetchers.get(C),j={state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,data:oe&&oe.data};c.fetchers.set(C,j),ee({fetchers:new Map(c.fetchers)});let te=new AbortController,ye=eo(O,te.signal);y.set(C,te);let xe=await qr("loader",ye,Z,q,f.basename);if(_n(xe)&&(xe=await Nh(xe,ye.signal,!0)||xe),y.get(C)===te&&y.delete(C),ye.signal.aborted)return;if(Rr(xe)){let Qe=wl(c,xe);await F(xe,Qe);return}if(xo(xe)){let Qe=xr(c.matches,N);c.fetchers.delete(C),ee({fetchers:new Map(c.fetchers),errors:{[Qe.route.id]:xe.error}});return}he(!_n(xe),"Unhandled fetcher deferred data");let ge={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(C,ge),ee({fetchers:new Map(c.fetchers)})}async function F(C,N,O){C.revalidate&&(h=!0),he(N.location,"Expected a location on the redirect navigation"),x=null;let Z=O===!0?Ie.Replace:Ie.Push;await E(Z,N.location,{overrideNavigation:N})}async function S(C,N,O,Z,q){let oe=await Promise.all([...O.map(ye=>qr("loader",q,ye,N,f.basename)),...Z.map(ye=>{let[,xe,ge,Qe]=ye;return qr("loader",eo(xe,q.signal),ge,Qe,f.basename)})]),j=oe.slice(0,O.length),te=oe.slice(O.length);return await Promise.all([$d(C,O,j,q.signal,!1,c.loaderData),$d(C,Z.map(ye=>{let[,,xe]=ye;return xe}),te,q.signal,!0)]),{results:oe,loaderResults:j,fetcherResults:te}}function V(){h=!0,p.push(...fe()),X.forEach((C,N)=>{y.has(N)&&(g.push(N),B(N))})}function I(C,N,O){let Z=xr(c.matches,N);L(C),ee({errors:{[Z.route.id]:O},fetchers:new Map(c.fetchers)})}function L(C){y.has(C)&&B(C),X.delete(C),P.delete(C),M.delete(C),c.fetchers.delete(C)}function B(C){let N=y.get(C);he(N,"Expected fetch controller: "+C),N.abort(),y.delete(C)}function G(C){for(let N of C){let Z={state:"idle",data:ce(N).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(N,Z)}}function Q(){let C=[];for(let N of M){let O=c.fetchers.get(N);he(O,"Expected fetcher: "+N),O.state==="loading"&&(M.delete(N),C.push(N))}G(C)}function ae(C){let N=[];for(let[O,Z]of P)if(Z<C){let q=c.fetchers.get(O);he(q,"Expected fetcher: "+O),q.state==="loading"&&(B(O),P.delete(O),N.push(O))}return G(N),N.length>0}function fe(C){let N=[];return U.forEach((O,Z)=>{(!C||C(Z))&&(O.cancel(),N.push(Z),U.delete(Z))}),N}function J(C,N,O){if(o=C,a=N,i=O||(Z=>Z.key),!l&&c.navigation===xl){l=!0;let Z=le(c.location,c.matches);Z!=null&&ee({restoreScrollPosition:Z})}return()=>{o=null,a=null,i=null}}function ve(C,N){if(o&&i&&a){let O=N.map(q=>Cd(q,c.loaderData)),Z=i(C,O)||C.key;o[Z]=a()}}function le(C,N){if(o&&i&&a){let O=N.map(oe=>Cd(oe,c.loaderData)),Z=i(C,O)||C.key,q=o[Z];if(typeof q=="number")return q}return null}return f={get basename(){return e.basename},get state(){return c},get routes(){return t},initialize:de,subscribe:ue,enableScrollRestoration:J,navigate:ke,fetch:z,revalidate:se,createHref:C=>e.history.createHref(C),getFetcher:ce,deleteFetcher:L,dispose:ie,_internalFetchControllers:y,_internalActiveDeferreds:U},f}const Nv=new Set(["POST","PUT","PATCH","DELETE"]);[...Nv];function vd(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:nn(e);if(!t||!("formMethod"in t)&&!("formData"in t))return{path:r};if(t.formMethod!=null&&t.formMethod!=="get")return{path:r,submission:{formMethod:t.formMethod,formAction:Th(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData}};if(!t.formData)return{path:r};let o=Ut(r);try{let i=Ph(t.formData);n&&o.search&&Dh(o.search)&&i.append("index",""),o.search="?"+i}catch{return{path:r,error:new Hr(400,"Bad Request","Cannot submit binary form data using GET")}}return{path:nn(o)}}function wl(e,t){let{formMethod:n,formAction:r,formEncType:o,formData:i}=e.navigation;return{state:"loading",location:jn(e.location,t.location),formMethod:n||void 0,formAction:r||void 0,formEncType:o||void 0,formData:i||void 0}}function Dv(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function yd(e,t,n,r,o,i,a,l,s,u){let d=s?Object.values(s)[0]:l?Object.values(l)[0]:null,f=s?Object.keys(s)[0]:void 0,v=Dv(t,f).filter((x,b)=>x.route.loader!=null&&(Ov(e.loaderData,e.matches[b],x)||i.some(h=>h===x.route.id)||xd(e.location,e.matches[b],n,r,x,o,d))),m=[];return u&&u.forEach((x,b)=>{let[h,p,g]=x;a.includes(b)?m.push([b,h,p,g]):o&&xd(h,p,n,h,p,o,d)&&m.push([b,h,p,g])}),[v,m]}function Ov(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Lh(e,t){let n=e.route.path;return e.pathname!==t.pathname||n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function xd(e,t,n,r,o,i,a){let l=zo(e),s=t.params,u=zo(r),d=o.params,f=Lh(t,o)||l.toString()===u.toString()||l.search!==u.search||i;if(o.route.shouldRevalidate){let c=o.route.shouldRevalidate(Ee({currentUrl:l,currentParams:s,nextUrl:u,nextParams:d},n,{actionResult:a,defaultShouldRevalidate:f}));if(typeof c=="boolean")return c}return f}async function qr(e,t,n,r,o,i,a){i===void 0&&(i=!1),a===void 0&&(a=!1);let l,s,u,d=new Promise((c,v)=>u=v),f=()=>u();t.signal.addEventListener("abort",f);try{let c=n.route[e];he(c,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),s=await Promise.race([c({request:t,params:n.params}),d])}catch(c){l=Ue.error,s=c}finally{t.signal.removeEventListener("abort",f)}if(s instanceof Response){let c=s.status;if(c>=300&&c<=399){let x=s.headers.get("Location");he(x,"Redirects returned/thrown from loaders/actions must have a Location header");let b=r.slice(0,r.indexOf(n)+1),h=Eh(b).map(y=>y.pathnameBase),p=zo(t.url).pathname,g=Sv(x,h,p);if(he(nn(g),"Unable to resolve redirect location: "+s.headers.get("Location")),o){let y=g.pathname;g.pathname=y==="/"?o:Bn([o,y])}if(x=nn(g),i)throw s.headers.set("Location",x),s;return{type:Ue.redirect,status:c,location:x,revalidate:s.headers.get("X-Remix-Revalidate")!==null}}if(a)throw{type:l||Ue.data,response:s};let v,m=s.headers.get("Content-Type");return m&&m.startsWith("application/json")?v=await s.json():v=await s.text(),l===Ue.error?{type:l,error:new Hr(c,s.statusText,v),headers:s.headers}:{type:Ue.data,data:v,statusCode:s.status,headers:s.headers}}return l===Ue.error?{type:l,error:s}:s instanceof Cv?{type:Ue.deferred,deferredData:s}:{type:Ue.data,data:s}}function eo(e,t,n){let r=zo(Th(e)).toString(),o={signal:t};if(n){let{formMethod:i,formEncType:a,formData:l}=n;o.method=i.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?Ph(l):l}return new Request(r,o)}function Ph(e){let t=new URLSearchParams;for(let[n,r]of e.entries())he(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(n,r);return t}function Iv(e,t,n,r,o){let i={},a=null,l,s=!1,u={};return n.forEach((d,f)=>{let c=t[f].route.id;if(he(!Rr(d),"Cannot handle redirect results in processLoaderData"),xo(d)){let v=xr(e,c),m=d.error;r&&(m=Object.values(r)[0],r=void 0),a=Object.assign(a||{},{[v.route.id]:m}),s||(s=!0,l=Rh(d.error)?d.error.status:500),d.headers&&(u[c]=d.headers)}else _n(d)?(o&&o.set(c,d.deferredData),i[c]=d.deferredData.data):(i[c]=d.data,d.statusCode!=null&&d.statusCode!==200&&!s&&(l=d.statusCode),d.headers&&(u[c]=d.headers))}),r&&(a=r),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function wd(e,t,n,r,o,i,a,l){let{loaderData:s,errors:u}=Iv(t,n,r,o,l);for(let d=0;d<i.length;d++){let[f,,c]=i[d];he(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let v=a[d];if(xo(v)){let m=xr(e.matches,c.route.id);u&&u[m.route.id]||(u=Ee({},u,{[m.route.id]:v.error})),e.fetchers.delete(f)}else{if(Rr(v))throw new Error("Unhandled fetcher revalidation redirect");if(_n(v))throw new Error("Unhandled fetcher deferred data");{let m={state:"idle",data:v.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};e.fetchers.set(f,m)}}}return{loaderData:s,errors:u}}function Sl(e,t,n){let r=Ee({},t);return n.forEach(o=>{let i=o.route.id;t[i]===void 0&&e[i]!==void 0&&(r[i]=e[i])}),r}function xr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function _v(e,t,n){let r=e.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-"+t+"-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r,error:new Hr(t,n,null)}}function Sd(e){return _v(e,404,"Not Found")}function kd(e){let t=typeof e=="string"?e:nn(e);return console.warn("You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for "+("["+t+"]")),{type:Ue.error,error:new Hr(405,"Method Not Allowed","")}}function bd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Rr(n))return n}}function Th(e){let t=typeof e=="string"?Ut(e):e;return nn(Ee({},t,{hash:""}))}function Mv(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function _n(e){return e.type===Ue.deferred}function xo(e){return e.type===Ue.error}function Rr(e){return(e&&e.type)===Ue.redirect}async function $d(e,t,n,r,o,i){for(let a=0;a<n.length;a++){let l=n[a],s=t[a],u=e.find(f=>f.route.id===s.route.id),d=u!=null&&!Lh(u,s)&&(i&&i[s.route.id])!==void 0;_n(l)&&(o||d)&&await Nh(l,r,o).then(f=>{f&&(n[a]=f||n[a])})}}async function Nh(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ue.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Ue.error,error:o}}return{type:Ue.data,data:e.deferredData.data}}}function Dh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Cd(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Ad(e,t){let n=typeof t=="string"?Ut(t).search:t.search;if(e[e.length-1].route.index&&Dh(n||""))return e[e.length-1];let r=Eh(e);return r[r.length-1]}var Ea={exports:{}},Ra={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=w.exports,Fv=Symbol.for("react.element"),jv=Symbol.for("react.fragment"),Bv=Object.prototype.hasOwnProperty,Uv=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hv={key:!0,ref:!0,__self:!0,__source:!0};function Oh(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Bv.call(t,r)&&!Hv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Fv,type:e,key:i,ref:a,props:o,_owner:Uv.current}}Ra.Fragment=jv;Ra.jsx=Oh;Ra.jsxs=Oh;(function(e){e.exports=Ra})(Ea);const Ih=Ea.exports.Fragment,k=Ea.exports.jsx,ne=Ea.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ta.apply(this,arguments)}function Vv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Wv=typeof Object.is=="function"?Object.is:Vv,{useState:Qv,useEffect:Kv,useLayoutEffect:Gv,useDebugValue:Yv}=El;function Xv(e,t,n){const r=t(),[{inst:o},i]=Qv({inst:{value:r,getSnapshot:t}});return Gv(()=>{o.value=r,o.getSnapshot=t,kl(o)&&i({inst:o})},[e,r,t]),Kv(()=>(kl(o)&&i({inst:o}),e(()=>{kl(o)&&i({inst:o})})),[e]),Yv(r),r}function kl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Wv(n,r)}catch{return!0}}function Jv(e,t,n){return t()}const Zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qv=!Zv,ey=qv?Jv:Xv,ty="useSyncExternalStore"in El?(e=>e.useSyncExternalStore)(El):ey,ny=w.exports.createContext(null),_h=w.exports.createContext(null),_u=w.exports.createContext(null),ry=w.exports.createContext(null),La=w.exports.createContext(null),Pa=w.exports.createContext({outlet:null,matches:[]}),Mh=w.exports.createContext(null);function Mu(){return w.exports.useContext(La)!=null}function oy(){return Mu()||he(!1),w.exports.useContext(La).location}const iy=w.exports.createContext(null);function ay(e){let t=w.exports.useContext(Pa).outlet;return t&&k(iy.Provider,{value:e,children:t})}function ly(e,t){Mu()||he(!1);let n=w.exports.useContext(_u),{matches:r}=w.exports.useContext(Pa),o=r[r.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=oy(),s;if(t){var u;let m=typeof t=="string"?Ut(t):t;a==="/"||((u=m.pathname)==null?void 0:u.startsWith(a))||he(!1),s=m}else s=l;let d=s.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",c=lo(e,{pathname:f}),v=dy(c&&c.map(m=>Object.assign({},m,{params:Object.assign({},i,m.params),pathname:Bn([a,m.pathname]),pathnameBase:m.pathnameBase==="/"?a:Bn([a,m.pathnameBase])})),r,n||void 0);return t&&v?k(La.Provider,{value:{location:ta({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:Ie.Pop},children:v}):v}function sy(){let e=py(),t=Rh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return ne(Ih,{children:[k("h2",{children:"Unhandled Thrown Error!"}),k("h3",{style:{fontStyle:"italic"},children:t}),n?k("pre",{style:o,children:n}):null,k("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),ne("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",k("code",{style:i,children:"errorElement"})," props on\xA0",k("code",{style:i,children:"<Route>"})]})]})}class uy extends w.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k(Mh.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function cy(e){let{routeContext:t,match:n,children:r}=e,o=w.exports.useContext(ny);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),k(Pa.Provider,{value:t,children:r})}function dy(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||he(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,l)=>{let s=a.route.id?o==null?void 0:o[a.route.id]:null,u=n?a.route.errorElement||k(sy,{}):null,d=()=>k(cy,{match:a,routeContext:{outlet:i,matches:t.concat(r.slice(0,l+1))},children:s?u:a.route.element!==void 0?a.route.element:i});return n&&(a.route.errorElement||l===0)?k(uy,{location:n.location,component:u,error:s,children:d()}):d()},null)}var Ed;(function(e){e.UseRevalidator="useRevalidator"})(Ed||(Ed={}));var Ss;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ss||(Ss={}));function fy(e){let t=w.exports.useContext(_u);return t||he(!1),t}function py(){var e;let t=w.exports.useContext(Mh),n=fy(Ss.UseRouteError),r=w.exports.useContext(Pa),o=r.matches[r.matches.length-1];return t||(r||he(!1),o.route.id||he(!1),(e=n.errors)==null?void 0:e[o.route.id])}function hy(e){let{fallbackElement:t,router:n}=e,r=ty(n.subscribe,()=>n.state,()=>n.state),o=w.exports.useMemo(()=>({createHref:n.createHref,go:a=>n.navigate(a),push:(a,l,s)=>n.navigate(a,{state:l,preventScrollReset:s==null?void 0:s.preventScrollReset}),replace:(a,l,s)=>n.navigate(a,{replace:!0,state:l,preventScrollReset:s==null?void 0:s.preventScrollReset})}),[n]),i=n.basename||"/";return k(_h.Provider,{value:{router:n,navigator:o,static:!1,basename:i},children:k(_u.Provider,{value:r,children:k(vy,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o,children:n.state.initialized?k(yy,{}):t})})})}function gy(e){return ay(e.context)}function my(e){he(!1)}function vy(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ie.Pop,navigator:i,static:a=!1}=e;Mu()&&he(!1);let l=t.replace(/^\/*/,"/"),s=w.exports.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=Ut(r));let{pathname:u="/",search:d="",hash:f="",state:c=null,key:v="default"}=r,m=w.exports.useMemo(()=>{let x=Ah(u,l);return x==null?null:{pathname:x,search:d,hash:f,state:c,key:v}},[l,u,d,f,c,v]);return m==null?null:k(ry.Provider,{value:s,children:k(La.Provider,{children:n,value:{location:m,navigationType:o}})})}function yy(e){let{children:t,location:n}=e,r=w.exports.useContext(_h),o=r&&!t?r.router.routes:ks(t);return ly(o,n)}var Rd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Rd||(Rd={}));new Promise(()=>{});function ks(e,t){t===void 0&&(t=[]);let n=[];return w.exports.Children.forEach(e,(r,o)=>{if(!w.exports.isValidElement(r))return;if(r.type===w.exports.Fragment){n.push.apply(n,ks(r.props.children,t));return}r.type!==my&&he(!1),!r.props.index||!r.props.children||he(!1);let i=[...t,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=ks(r.props.children,i)),n.push(a)}),n}function zh(e){return e.map(t=>{let n=ta({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=zh(n.children)),n})}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xy(e,t){var n;return Tv({basename:t==null?void 0:t.basename,history:ev({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||((n=window)==null?void 0:n.__staticRouterHydrationData),routes:zh(e)}).initialize()}var Ld;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ld||(Ld={}));var Pd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pd||(Pd={}));const bs={};var Ta={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,zu=je?Symbol.for("react.element"):60103,Fu=je?Symbol.for("react.portal"):60106,Na=je?Symbol.for("react.fragment"):60107,Da=je?Symbol.for("react.strict_mode"):60108,Oa=je?Symbol.for("react.profiler"):60114,Ia=je?Symbol.for("react.provider"):60109,_a=je?Symbol.for("react.context"):60110,ju=je?Symbol.for("react.async_mode"):60111,Ma=je?Symbol.for("react.concurrent_mode"):60111,za=je?Symbol.for("react.forward_ref"):60112,Fa=je?Symbol.for("react.suspense"):60113,wy=je?Symbol.for("react.suspense_list"):60120,ja=je?Symbol.for("react.memo"):60115,Ba=je?Symbol.for("react.lazy"):60116,Sy=je?Symbol.for("react.block"):60121,ky=je?Symbol.for("react.fundamental"):60117,by=je?Symbol.for("react.responder"):60118,$y=je?Symbol.for("react.scope"):60119;function gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zu:switch(e=e.type,e){case ju:case Ma:case Na:case Oa:case Da:case Fa:return e;default:switch(e=e&&e.$$typeof,e){case _a:case za:case Ba:case ja:case Ia:return e;default:return t}}case Fu:return t}}}function Fh(e){return gt(e)===Ma}Se.AsyncMode=ju;Se.ConcurrentMode=Ma;Se.ContextConsumer=_a;Se.ContextProvider=Ia;Se.Element=zu;Se.ForwardRef=za;Se.Fragment=Na;Se.Lazy=Ba;Se.Memo=ja;Se.Portal=Fu;Se.Profiler=Oa;Se.StrictMode=Da;Se.Suspense=Fa;Se.isAsyncMode=function(e){return Fh(e)||gt(e)===ju};Se.isConcurrentMode=Fh;Se.isContextConsumer=function(e){return gt(e)===_a};Se.isContextProvider=function(e){return gt(e)===Ia};Se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zu};Se.isForwardRef=function(e){return gt(e)===za};Se.isFragment=function(e){return gt(e)===Na};Se.isLazy=function(e){return gt(e)===Ba};Se.isMemo=function(e){return gt(e)===ja};Se.isPortal=function(e){return gt(e)===Fu};Se.isProfiler=function(e){return gt(e)===Oa};Se.isStrictMode=function(e){return gt(e)===Da};Se.isSuspense=function(e){return gt(e)===Fa};Se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Na||e===Ma||e===Oa||e===Da||e===Fa||e===wy||typeof e=="object"&&e!==null&&(e.$$typeof===Ba||e.$$typeof===ja||e.$$typeof===Ia||e.$$typeof===_a||e.$$typeof===za||e.$$typeof===ky||e.$$typeof===by||e.$$typeof===$y||e.$$typeof===Sy)};Se.typeOf=gt;(function(e){e.exports=Se})(Ta);function Cy(e){function t(z,R,T,F,S){for(var V=0,I=0,L=0,B=0,G,Q,ae=0,fe=0,J,ve=J=G=0,le=0,C=0,N=0,O=0,Z=T.length,q=Z-1,oe,j="",te="",ye="",xe="",ge;le<Z;){if(Q=T.charCodeAt(le),le===q&&I+B+L+V!==0&&(I!==0&&(Q=I===47?10:47),B=L=V=0,Z++,q++),I+B+L+V===0){if(le===q&&(0<C&&(j=j.replace(c,"")),0<j.trim().length)){switch(Q){case 32:case 9:case 59:case 13:case 10:break;default:j+=T.charAt(le)}Q=59}switch(Q){case 123:for(j=j.trim(),G=j.charCodeAt(0),J=1,O=++le;le<Z;){switch(Q=T.charCodeAt(le)){case 123:J++;break;case 125:J--;break;case 47:switch(Q=T.charCodeAt(le+1)){case 42:case 47:e:{for(ve=le+1;ve<q;++ve)switch(T.charCodeAt(ve)){case 47:if(Q===42&&T.charCodeAt(ve-1)===42&&le+2!==ve){le=ve+1;break e}break;case 10:if(Q===47){le=ve+1;break e}}le=ve}}break;case 91:Q++;case 40:Q++;case 34:case 39:for(;le++<q&&T.charCodeAt(le)!==Q;);}if(J===0)break;le++}switch(J=T.substring(O,le),G===0&&(G=(j=j.replace(f,"").trim()).charCodeAt(0)),G){case 64:switch(0<C&&(j=j.replace(c,"")),Q=j.charCodeAt(1),Q){case 100:case 109:case 115:case 45:C=R;break;default:C=ke}if(J=t(R,C,J,Q,S+1),O=J.length,0<E&&(C=n(ke,j,N),ge=l(3,J,C,R,ue,ie,O,Q,S,F),j=C.join(""),ge!==void 0&&(O=(J=ge.trim()).length)===0&&(Q=0,J="")),0<O)switch(Q){case 115:j=j.replace(A,a);case 100:case 109:case 45:J=j+"{"+J+"}";break;case 107:j=j.replace(p,"$1 $2"),J=j+"{"+J+"}",J=re===1||re===2&&i("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=j+J,F===112&&(J=(te+=J,""))}else J="";break;default:J=t(R,n(R,j,N),J,F,S+1)}ye+=J,J=N=C=ve=G=0,j="",Q=T.charCodeAt(++le);break;case 125:case 59:if(j=(0<C?j.replace(c,""):j).trim(),1<(O=j.length))switch(ve===0&&(G=j.charCodeAt(0),G===45||96<G&&123>G)&&(O=(j=j.replace(" ",":")).length),0<E&&(ge=l(1,j,R,z,ue,ie,te.length,F,S,F))!==void 0&&(O=(j=ge.trim()).length)===0&&(j="\0\0"),G=j.charCodeAt(0),Q=j.charCodeAt(1),G){case 0:break;case 64:if(Q===105||Q===99){xe+=j+T.charAt(le);break}default:j.charCodeAt(O-1)!==58&&(te+=o(j,G,Q,j.charCodeAt(2)))}N=C=ve=G=0,j="",Q=T.charCodeAt(++le)}}switch(Q){case 13:case 10:I===47?I=0:1+G===0&&F!==107&&0<j.length&&(C=1,j+="\0"),0<E*Y&&l(0,j,R,z,ue,ie,te.length,F,S,F),ie=1,ue++;break;case 59:case 125:if(I+B+L+V===0){ie++;break}default:switch(ie++,oe=T.charAt(le),Q){case 9:case 32:if(B+V+I===0)switch(ae){case 44:case 58:case 9:case 32:oe="";break;default:Q!==32&&(oe=" ")}break;case 0:oe="\\0";break;case 12:oe="\\f";break;case 11:oe="\\v";break;case 38:B+I+V===0&&(C=N=1,oe="\f"+oe);break;case 108:if(B+I+V+ee===0&&0<ve)switch(le-ve){case 2:ae===112&&T.charCodeAt(le-3)===58&&(ee=ae);case 8:fe===111&&(ee=fe)}break;case 58:B+I+V===0&&(ve=le);break;case 44:I+L+B+V===0&&(C=1,oe+="\r");break;case 34:case 39:I===0&&(B=B===Q?0:B===0?Q:B);break;case 91:B+I+L===0&&V++;break;case 93:B+I+L===0&&V--;break;case 41:B+I+V===0&&L--;break;case 40:if(B+I+V===0){if(G===0)switch(2*ae+3*fe){case 533:break;default:G=1}L++}break;case 64:I+L+B+V+ve+J===0&&(J=1);break;case 42:case 47:if(!(0<B+V+L))switch(I){case 0:switch(2*Q+3*T.charCodeAt(le+1)){case 235:I=47;break;case 220:O=le,I=42}break;case 42:Q===47&&ae===42&&O+2!==le&&(T.charCodeAt(O+2)===33&&(te+=T.substring(O,le+1)),oe="",I=0)}}I===0&&(j+=oe)}fe=ae,ae=Q,le++}if(O=te.length,0<O){if(C=R,0<E&&(ge=l(2,te,C,z,ue,ie,O,F,S,F),ge!==void 0&&(te=ge).length===0))return xe+te+ye;if(te=C.join(",")+"{"+te+"}",re*ee!==0){switch(re!==2||i(te,2)||(ee=0),ee){case 111:te=te.replace(y,":-moz-$1")+te;break;case 112:te=te.replace(g,"::-webkit-input-$1")+te.replace(g,"::-moz-$1")+te.replace(g,":-ms-input-$1")+te}ee=0}}return xe+te+ye}function n(z,R,T){var F=R.trim().split(b);R=F;var S=F.length,V=z.length;switch(V){case 0:case 1:var I=0;for(z=V===0?"":z[0]+" ";I<S;++I)R[I]=r(z,R[I],T).trim();break;default:var L=I=0;for(R=[];I<S;++I)for(var B=0;B<V;++B)R[L++]=r(z[B]+" ",F[I],T).trim()}return R}function r(z,R,T){var F=R.charCodeAt(0);switch(33>F&&(F=(R=R.trim()).charCodeAt(0)),F){case 38:return R.replace(h,"$1"+z.trim());case 58:return z.trim()+R.replace(h,"$1"+z.trim());default:if(0<1*T&&0<R.indexOf("\f"))return R.replace(h,(z.charCodeAt(0)===58?"":"$1")+z.trim())}return z+R}function o(z,R,T,F){var S=z+";",V=2*R+3*T+4*F;if(V===944){z=S.indexOf(":",9)+1;var I=S.substring(z,S.length-1).trim();return I=S.substring(0,z).trim()+I+";",re===1||re===2&&i(I,1)?"-webkit-"+I+I:I}if(re===0||re===2&&!i(S,1))return S;switch(V){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(de,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return I=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+S+"-ms-flex-pack"+I+S;case 1005:return m.test(S)?S.replace(v,":-webkit-")+S.replace(v,":-moz-")+S:S;case 1e3:switch(I=S.substring(13).trim(),R=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(R)){case 226:I=S.replace($,"tb");break;case 232:I=S.replace($,"tb-rl");break;case 220:I=S.replace($,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+I+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(R=(S=z).length-10,I=(S.charCodeAt(R)===33?S.substring(0,R):S).substring(z.indexOf(":",7)+1).trim(),V=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:S=S.replace(I,"-webkit-"+I)+";"+S;break;case 207:case 102:S=S.replace(I,"-webkit-"+(102<V?"inline-":"")+"box")+";"+S.replace(I,"-webkit-"+I)+";"+S.replace(I,"-ms-"+I+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return I=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+I+"-ms-flex-"+I+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(M,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(M,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(U.test(z)===!0)return(I=z.substring(z.indexOf(":")+1)).charCodeAt(0)===115?o(z.replace("stretch","fill-available"),R,T,F).replace(":fill-available",":stretch"):S.replace(I,"-webkit-"+I)+S.replace(I,"-moz-"+I.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,T+F===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+S}return S}function i(z,R){var T=z.indexOf(R===1?":":"{"),F=z.substring(0,R!==3?T:10);return T=z.substring(T+1,z.length-1),H(R!==2?F:F.replace(X,"$1"),T,R)}function a(z,R){var T=o(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return T!==R+";"?T.replace(P," or ($1)").substring(4):"("+R+")"}function l(z,R,T,F,S,V,I,L,B,G){for(var Q=0,ae=R,fe;Q<E;++Q)switch(fe=se[Q].call(d,z,ae,T,F,S,V,I,L,B,G)){case void 0:case!1:case!0:case null:break;default:ae=fe}if(ae!==R)return ae}function s(z){switch(z){case void 0:case null:E=se.length=0;break;default:if(typeof z=="function")se[E++]=z;else if(typeof z=="object")for(var R=0,T=z.length;R<T;++R)s(z[R]);else Y=!!z|0}return s}function u(z){return z=z.prefix,z!==void 0&&(H=null,z?typeof z!="function"?re=1:(re=2,H=z):re=0),u}function d(z,R){var T=z;if(33>T.charCodeAt(0)&&(T=T.trim()),ce=T,T=[ce],0<E){var F=l(-1,R,T,T,ue,ie,0,0,0,0);F!==void 0&&typeof F=="string"&&(R=F)}var S=t(ke,T,R,0,0);return 0<E&&(F=l(-2,S,T,T,ue,ie,S.length,0,0,0),F!==void 0&&(S=F)),ce="",ee=0,ie=ue=1,S}var f=/^\0+/g,c=/[\0\r\f]/g,v=/: */g,m=/zoo|gra/,x=/([,: ])(transform)/g,b=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,y=/:(read-only)/g,$=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,M=/-self|flex-/g,X=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,de=/([^-])(image-set\()/,ie=1,ue=1,ee=0,re=1,ke=[],se=[],E=0,H=null,Y=0,ce="";return d.use=s,d.set=u,e!==void 0&&u(e),d}var Ay={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ey(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ry=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Td=Ey(function(e){return Ry.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Bu=Ta.exports,Ly={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Py={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ty={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Uu={};Uu[Bu.ForwardRef]=Ty;Uu[Bu.Memo]=jh;function Nd(e){return Bu.isMemo(e)?jh:Uu[e.$$typeof]||Ly}var Ny=Object.defineProperty,Dy=Object.getOwnPropertyNames,Dd=Object.getOwnPropertySymbols,Oy=Object.getOwnPropertyDescriptor,Iy=Object.getPrototypeOf,Od=Object.prototype;function Bh(e,t,n){if(typeof t!="string"){if(Od){var r=Iy(t);r&&r!==Od&&Bh(e,r,n)}var o=Dy(t);Dd&&(o=o.concat(Dd(t)));for(var i=Nd(e),a=Nd(t),l=0;l<o.length;++l){var s=o[l];if(!Py[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var u=Oy(t,s);try{Ny(e,s,u)}catch{}}}}return e}var _y=Bh;function Et(){return(Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Id=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},$s=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ta.exports.typeOf(e)},na=Object.freeze([]),wn=Object.freeze({});function Mr(e){return typeof e=="function"}function _d(e){return e.displayName||e.name||"Component"}function Hu(e){return e&&typeof e.styledComponentId=="string"}var zr=typeof bs<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Vu=typeof window<"u"&&"HTMLElement"in window,My=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof bs<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof bs<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),zy={};function Kn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Fy=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Kn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Pi=new Map,ra=new Map,wo=1,di=function(e){if(Pi.has(e))return Pi.get(e);for(;ra.has(wo);)wo++;var t=wo++;return Pi.set(e,t),ra.set(t,e),t},jy=function(e){return ra.get(e)},By=function(e,t){t>=wo&&(wo=t+1),Pi.set(e,t),ra.set(t,e)},Uy="style["+zr+'][data-styled-version="5.3.6"]',Hy=new RegExp("^"+zr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Vy=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Wy=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(Hy);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(By(u,s),Vy(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},Qy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Uh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(zr))return d}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(zr,"active"),r.setAttribute("data-styled-version","5.3.6");var a=Qy();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Ky=function(){function e(n){var r=this.element=Uh(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}Kn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Gy=function(){function e(n){var r=this.element=Uh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Yy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Md=Vu,Xy={isServer:!Vu,useCSSOMInjection:!My},oa=function(){function e(n,r,o){n===void 0&&(n=wn),r===void 0&&(r={}),this.options=Et({},Xy,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Vu&&Md&&(Md=!1,function(i){for(var a=document.querySelectorAll(Uy),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(zr)!=="active"&&(Wy(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return di(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Et({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new Yy(a):i?new Ky(a):new Gy(a),new Fy(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(di(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(di(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(di(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=jy(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var d=zr+".g"+a+'[id="'+l+'"]',f="";s!==void 0&&s.forEach(function(c){c.length>0&&(f+=c+",")}),i+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),Jy=/(a)(d)/gi,zd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cs(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=zd(t%52)+n;return(zd(t%52)+n).replace(Jy,"$1-$2")}var wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Hh=function(e){return wr(5381,e)};function Vh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Mr(n)&&!Hu(n))return!1}return!0}var Zy=Hh("5.3.6"),qy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Vh(t),this.componentId=n,this.baseHash=wr(Zy,n),this.baseStyle=r,oa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Gn(this.rules,t,n,r).join(""),l=Cs(wr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,d=wr(this.baseHash,r.hash),f="",c=0;c<u;c++){var v=this.rules[c];if(typeof v=="string")f+=v;else if(v){var m=Gn(v,t,n,r),x=Array.isArray(m)?m.join(""):m;d=wr(d,x+c),f+=x}}if(f){var b=Cs(d>>>0);if(!n.hasNameForId(o,b)){var h=r(f,"."+b,void 0,o);n.insertRules(o,b,h)}i.push(b)}}return i.join(" ")},e}(),e1=/^\s*\/\/.*$/gm,t1=[":","[",".","#"];function n1(e){var t,n,r,o,i=e===void 0?wn:e,a=i.options,l=a===void 0?wn:a,s=i.plugins,u=s===void 0?na:s,d=new Cy(l),f=[],c=function(x){function b(h){if(h)try{x(h+"}")}catch{}}return function(h,p,g,y,$,A,P,M,X,U){switch(h){case 1:if(X===0&&p.charCodeAt(0)===64)return x(p+";"),"";break;case 2:if(M===0)return p+"/*|*/";break;case 3:switch(M){case 102:case 112:return x(g[0]+p),"";default:return p+(U===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(b)}}}(function(x){f.push(x)}),v=function(x,b,h){return b===0&&t1.indexOf(h[n.length])!==-1||h.match(o)?x:"."+t};function m(x,b,h,p){p===void 0&&(p="&");var g=x.replace(e1,""),y=b&&h?h+" "+b+" { "+g+" }":g;return t=p,n=b,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(h||!b?"":b,y)}return d.use([].concat(u,[function(x,b,h){x===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,v))},c,function(x){if(x===-2){var b=f;return f=[],b}}])),m.hash=u.length?u.reduce(function(x,b){return b.name||Kn(15),wr(x,b.name)},5381).toString():"",m}var Wh=Rt.createContext();Wh.Consumer;var Qh=Rt.createContext(),r1=(Qh.Consumer,new oa),As=n1();function Kh(){return w.exports.useContext(Wh)||r1}function Gh(){return w.exports.useContext(Qh)||As}var o1=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=As);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Kn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=As),this.name+t.hash},e}(),i1=/([A-Z])/,a1=/([A-Z])/g,l1=/^ms-/,s1=function(e){return"-"+e.toLowerCase()};function Fd(e){return i1.test(e)?e.replace(a1,s1).replace(l1,"-ms-"):e}var jd=function(e){return e==null||e===!1||e===""};function Gn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Gn(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(jd(e))return"";if(Hu(e))return"."+e.styledComponentId;if(Mr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Gn(s,t,n,r)}var u;return e instanceof o1?n?(e.inject(n,r),e.getName(r)):e:$s(e)?function d(f,c){var v,m,x=[];for(var b in f)f.hasOwnProperty(b)&&!jd(f[b])&&(Array.isArray(f[b])&&f[b].isCss||Mr(f[b])?x.push(Fd(b)+":",f[b],";"):$s(f[b])?x.push.apply(x,d(f[b],b)):x.push(Fd(b)+": "+(v=b,(m=f[b])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||v in Ay?String(m).trim():m+"px")+";"));return c?[c+" {"].concat(x,["}"]):x}(e):e.toString()}var Bd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Mr(e)||$s(e)?Bd(Gn(Id(na,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Bd(Gn(Id(e,n)))}var Yh=function(e,t,n){return n===void 0&&(n=wn),e.theme!==n.theme&&e.theme||t||n.theme},u1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,c1=/(^-|-$)/g;function bl(e){return e.replace(u1,"-").replace(c1,"")}var Xh=function(e){return Cs(Hh(e)>>>0)};function fi(e){return typeof e=="string"&&!0}var Es=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},d1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function f1(e,t,n){var r=e[n];Es(t)&&Es(r)?Jh(r,t):e[n]=t}function Jh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Es(a))for(var l in a)d1(l)&&f1(e,a[l],l)}return e}var Fo=Rt.createContext();Fo.Consumer;function p1(e){var t=w.exports.useContext(Fo),n=w.exports.useMemo(function(){return function(r,o){if(!r)return Kn(14);if(Mr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Kn(8):o?Et({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Rt.createElement(Fo.Provider,{value:n},e.children):null}var $l={};function Zh(e,t,n){var r=Hu(e),o=!fi(e),i=t.attrs,a=i===void 0?na:i,l=t.componentId,s=l===void 0?function(p,g){var y=typeof p!="string"?"sc":bl(p);$l[y]=($l[y]||0)+1;var $=y+"-"+Xh("5.3.6"+y+$l[y]);return g?g+"-"+$:$}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(p){return fi(p)?"styled."+p:"Styled("+_d(p)+")"}(e):u,f=t.displayName&&t.componentId?bl(t.displayName)+"-"+t.componentId:t.componentId||s,c=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(p,g,y){return e.shouldForwardProp(p,g,y)&&t.shouldForwardProp(p,g,y)}:e.shouldForwardProp);var m,x=new qy(n,f,r?e.componentStyle:void 0),b=x.isStatic&&a.length===0,h=function(p,g){return function(y,$,A,P){var M=y.attrs,X=y.componentStyle,U=y.defaultProps,de=y.foldedComponentIds,ie=y.shouldForwardProp,ue=y.styledComponentId,ee=y.target,re=function(F,S,V){F===void 0&&(F=wn);var I=Et({},S,{theme:F}),L={};return V.forEach(function(B){var G,Q,ae,fe=B;for(G in Mr(fe)&&(fe=fe(I)),fe)I[G]=L[G]=G==="className"?(Q=L[G],ae=fe[G],Q&&ae?Q+" "+ae:Q||ae):fe[G]}),[I,L]}(Yh($,w.exports.useContext(Fo),U)||wn,$,M),ke=re[0],se=re[1],E=function(F,S,V,I){var L=Kh(),B=Gh(),G=S?F.generateAndInjectStyles(wn,L,B):F.generateAndInjectStyles(V,L,B);return G}(X,P,ke),H=A,Y=se.$as||$.$as||se.as||$.as||ee,ce=fi(Y),z=se!==$?Et({},$,{},se):$,R={};for(var T in z)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?R.as=z[T]:(ie?ie(T,Td,Y):!ce||Td(T))&&(R[T]=z[T]));return $.style&&se.style!==$.style&&(R.style=Et({},$.style,{},se.style)),R.className=Array.prototype.concat(de,ue,E!==ue?E:null,$.className,se.className).filter(Boolean).join(" "),R.ref=H,w.exports.createElement(Y,R)}(m,p,g,b)};return h.displayName=d,(m=Rt.forwardRef(h)).attrs=c,m.componentStyle=x,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):na,m.styledComponentId=f,m.target=r?e.target:e,m.withComponent=function(p){var g=t.componentId,y=function(A,P){if(A==null)return{};var M,X,U={},de=Object.keys(A);for(X=0;X<de.length;X++)M=de[X],P.indexOf(M)>=0||(U[M]=A[M]);return U}(t,["componentId"]),$=g&&g+"-"+(fi(p)?p:bl(_d(p)));return Zh(p,Et({},y,{attrs:c,componentId:$}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Jh({},e.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},o&&_y(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Rs=function(e){return function t(n,r,o){if(o===void 0&&(o=wn),!Ta.exports.isValidElementType(r))return Kn(1,String(r));var i=function(){return n(r,o,W.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Et({},o,{},a))},i.attrs=function(a){return t(n,r,Et({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Zh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Rs[e]=Rs(e)});var h1=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Vh(n),oa.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(Gn(this.rules,r,o,i).join(""),""),l=this.componentId+n;o.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&oa.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function g1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=W.apply(void 0,[e].concat(n)),i="sc-global-"+Xh(JSON.stringify(o)),a=new h1(o,i);function l(u){var d=Kh(),f=Gh(),c=w.exports.useContext(Fo),v=w.exports.useRef(d.allocateGSInstance(i)).current;return d.server&&s(v,u,d,c,f),w.exports.useLayoutEffect(function(){if(!d.server)return s(v,u,d,c,f),function(){return a.removeStyles(v,d)}},[v,u,d,c,f]),null}function s(u,d,f,c,v){if(a.isStatic)a.renderStyles(u,zy,f,v);else{var m=Et({},d,{theme:Yh(d,c,l.defaultProps)});a.renderStyles(u,m,f,v)}}return Rt.memo(l)}const D=Rs;var m1={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},v1=m1;function y1(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var x1=`
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

`;const Wu="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Qu="inset 2px 2px 3px rgba(0,0,0,0.2)",Nt=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Dt=({background:e="material",color:t="materialText"}={})=>W`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Qo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>W`
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
`,or={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},w1=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?Wu:!1,o?Qu:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),Ne=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return W`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[or[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[or[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[or[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[or[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>w1({theme:r,topLeftInner:or[t][n.topLeftInner],bottomRightInner:or[t][n.bottomRightInner],hasShadow:o})};
  `},Fr=()=>W`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,S1=e=>Buffer.from(e).toString("base64"),k1=typeof btoa<"u"?btoa:S1,pi=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${k1(n)})`},Ku=(e="default")=>W`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Qo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
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
    background-image: ${({theme:t})=>pi(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>pi(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>pi(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>pi(t.materialText,0)};
  }
`,b1=D.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,$1=w.exports.forwardRef(({children:e,underline:t=!0,...n},r)=>k(b1,{ref:r,underline:t,...n,children:e}));$1.displayName="Anchor";const C1=D.header`
  ${Ne()};
  ${Dt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,qh=w.exports.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>k(C1,{fixed:t,position:t!==!1?n:void 0,ref:o,...r,children:e}));qh.displayName="AppBar";const qn=()=>{};function Mn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function A1(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Ud(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(A1(t)))}function $n(e){return typeof e=="number"?`${e}px`:e}const E1=D.div`
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
`,R1=D.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,eg=w.exports.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...a},l)=>k(E1,{noBorder:n,ref:l,size:$n(r),square:o,src:i,...a,children:i?k(R1,{src:i,alt:e}):t}));eg.displayName="Avatar";const Ve={sm:"28px",md:"36px",lg:"44px"},L1=W`
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
`,Ua=D.button`
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
          ${e?Qo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
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
  ${L1}
`,Xn=w.exports.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:s=qn,primary:u=!1,variant:d="default",...f},c)=>k(Ua,{active:l,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:c,size:i,square:a,type:r,variant:d,...f,children:n}));Xn.displayName="Button";function Cn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const a=o!==void 0,[l,s]=w.exports.useState(e),u=w.exports.useCallback(d=>{a||s(d)},[a]);if(a&&typeof t!="function"&&!r){const d=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(d)}return[a?o:l,u]}const Ls=D.li`
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
`,Ps=w.exports.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...a},l)=>k(Ls,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a,children:r}));Ps.displayName="MenuListItem";const tg=D.ul.attrs(()=>({role:"menu"}))`
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
`;tg.displayName="MenuList";const Bt=20,ia=D.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Bt}px;
  height: ${Bt}px;
  opacity: 0;
  z-index: -1;
`,Gu=D.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&Nt()}

  ${Ls} & {
    margin: 0;
    height: 100%;
  }
  ${Ls}:hover & {
    ${({$disabled:e,theme:t})=>!e&&W`
        color: ${t.materialTextInvert};
      `};
  }
`,Yu=D.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ia}:focus ~ & {
    ${Fr}
  }
  ${ia}:not(:disabled) ~ &:active {
    ${Fr}
  }
`,Ht=D.div`
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
    ${e=>e.shadow&&`box-shadow:${Qu};`}
  }
`,P1=D.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Ku()}
`,ng=w.exports.forwardRef(({children:e,shadow:t=!0,...n},r)=>k(Ht,{ref:r,shadow:t,...n,children:k(P1,{children:e})}));ng.displayName="ScrollView";const rg=W`
  width: ${Bt}px;
  height: ${Bt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,T1=D(Ht)`
  ${rg}
  width: ${Bt}px;
  height: ${Bt}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,N1=D.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${rg}
  width: ${Bt-4}px;
  height: ${Bt-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,D1=D.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,O1=D.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Qo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,I1={flat:N1,default:T1},_1=w.exports.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:a=qn,style:l={},value:s,variant:u="default",...d},f)=>{var c;const[v,m]=Cn({defaultValue:n,onChange:a,readOnly:(c=d.readOnly)!==null&&c!==void 0?c:r,value:e}),x=w.exports.useCallback(p=>{const g=p.target.checked;m(g),a(p)},[a,m]),b=I1[u];let h=null;return o?h=O1:v&&(h=D1),ne(Gu,{$disabled:r,className:t,style:l,children:[k(ia,{disabled:r,onChange:r?void 0:x,readOnly:r,type:"checkbox",value:s,checked:v,"data-indeterminate":o,ref:f,...d}),k(b,{$disabled:r,role:"presentation",children:h&&k(h,{$disabled:r,variant:u})}),i&&k(Yu,{children:i})]})});_1.displayName="Checkbox";const Xu=D.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${$n(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${$n(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;Xu.displayName="Separator";const M1=D(Ua)`
  padding-left: 8px;
`,z1=D(Xu)`
  height: 21px;
  position: relative;
  top: 0;
`,og=D.input`
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
`,F1=D.div`
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
  ${og}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Fr}
    outline-offset: -8px;
  }
`,j1=D.span`
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
`,B1=w.exports.forwardRef(({value:e,defaultValue:t,onChange:n=qn,disabled:r=!1,variant:o="default",...i},a)=>{var l;const[s,u]=Cn({defaultValue:t,onChange:n,readOnly:(l=i.readOnly)!==null&&l!==void 0?l:r,value:e});return ne(M1,{disabled:r,as:"div",variant:o,size:"md",children:[k(og,{onChange:f=>{const c=f.target.value;u(c),n(f)},readOnly:r,disabled:r,value:s!=null?s:"#008080",type:"color",ref:a,...i}),k(F1,{$disabled:r,color:s!=null?s:"#008080",role:"presentation"}),o==="default"&&k(z1,{orientation:"vertical"}),k(j1,{$disabled:r,variant:o})]})});B1.displayName="ColorInput";const U1=D.div`
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
      ${Qo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,Hd=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],H1=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function V1({digit:e=0,pixelSize:t=2,...n}){const r=H1[Number(e)].map((o,i)=>o?`${Hd[i]} active`:Hd[i]);return k(U1,{pixelSize:t,...n,children:r.map((o,i)=>k("span",{className:o},i))})}const W1=D.div`
  ${Ne({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Q1={sm:1,md:2,lg:3,xl:4},K1=w.exports.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=w.exports.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return k(W1,{ref:o,...r,children:i.map((a,l)=>k(V1,{digit:a,pixelSize:Q1[n]},l))})});K1.displayName="Counter";const ig=W`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ve.md};
`,G1=D(Ht).attrs({"data-testid":"variant-default"})`
  ${ig}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Y1=D.div.attrs({"data-testid":"variant-flat"})`
  ${Yn()}
  ${ig}
  position: relative;
`,ag=W`
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
`,X1=D.input`
  ${ag}
  padding: 0 8px;
`,J1=D.textarea`
  ${ag}
  padding: 8px;
  resize: none;
  ${({variant:e})=>Ku(e)}
`,lg=w.exports.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=qn,shadow:o=!0,style:i,variant:a="default",...l},s)=>{const u=a==="flat"?Y1:G1,d=w.exports.useMemo(()=>{var f;return l.multiline?k(J1,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:a,...l}):k(X1,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(f=l.type)!==null&&f!==void 0?f:"text",variant:a,...l})},[t,r,l,s,a]);return k(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i,children:d})});lg.displayName="TextInput";const Z1=D.div`
  display: inline-flex;
  align-items: center;
`,Ts=D(Xn)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?W`
          height: calc(50% - 1px);
        `:W`
          height: 50%;
        `}
`,q1=D.div`
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
`,Vd=D.span`
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
  ${Ts}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?W`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:W`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,sg=w.exports.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:a,step:l=1,style:s,value:u,variant:d="default",width:f,...c},v)=>{const[m,x]=Cn({defaultValue:t,onChange:i,readOnly:a,value:u}),b=w.exports.useCallback(A=>{const P=parseFloat(A.target.value);x(P)},[x]),h=w.exports.useCallback(A=>{const P=Mn(parseFloat(((m!=null?m:0)+A).toFixed(2)),o!=null?o:null,r!=null?r:null);x(P),i==null||i(P)},[r,o,i,x,m]),p=w.exports.useCallback(()=>{m!==void 0&&(i==null||i(m))},[i,m]),g=w.exports.useCallback(()=>{h(l)},[h,l]),y=w.exports.useCallback(()=>{h(-l)},[h,l]),$=d==="flat"?"flat":"raised";return ne(Z1,{className:e,style:{...s,width:f!==void 0?$n(f):"auto"},...c,children:[k(lg,{value:m,variant:d,onChange:b,disabled:n,type:"number",readOnly:a,ref:v,fullWidth:!0,onBlur:p}),ne(q1,{variant:d,children:[k(Ts,{"data-testid":"increment",variant:$,disabled:n||a,onClick:g,children:k(Vd,{invert:!0})}),k(Ts,{"data-testid":"decrement",variant:$,disabled:n||a,onClick:y,children:k(Vd,{})})]})]})});sg.displayName="NumberInput";function ex(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const ug=e=>w.exports.useMemo(()=>e!=null?e:ex(),[e]),cg=W`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,dg=W`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Ju=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,tx=D.div`
  ${cg}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Ju}:focus & {
    ${dg}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,fg=W`
  height: ${Ve.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?Nt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,nx=D(Ht)`
  ${fg}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,rx=D.div`
  ${Yn()}
  ${fg}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,ox=D.select`
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
  ${cg}
  cursor: pointer;
  &:disabled {
    ${Nt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,pg=D(Ua).attrs(()=>({"aria-hidden":"true"}))`
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
`,ix=D.span`
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
  ${pg}:active & {
    margin-top: 2px;
  }
`,ax=D.ul`
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
  box-shadow: ${Wu};
  ${({variant:e="default"})=>e==="flat"?W`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:W`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>Ku(e)}
`,lx=D.li`
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
  ${({active:e})=>e?dg:""}
  user-select: none;
`,sx=[],hg=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=sx,readOnly:a,style:l,value:s,variant:u,width:d})=>{var f;const c=w.exports.useMemo(()=>i.filter(Boolean),[i]),[v,m]=Cn({defaultValue:t!=null?t:(f=c==null?void 0:c[0])===null||f===void 0?void 0:f.value,onChange:o,readOnly:a,value:s}),x=!(n||a),b=w.exports.useMemo(()=>({className:e,style:{...l,width:d}}),[e,l,d]),h=w.exports.useMemo(()=>k(pg,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised",children:k(ix,{"data-testid":"select-icon",$disabled:n})}),[n,r,u]),p=w.exports.useMemo(()=>u==="flat"?rx:nx,[u]);return w.exports.useMemo(()=>({isEnabled:x,options:c,value:v,setValue:m,wrapperProps:b,DropdownButton:h,Wrapper:p}),[h,p,x,c,m,v,b])},ux={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},cx=1e3,dx=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:a,open:l,options:s,readOnly:u,value:d,selectRef:f,setValue:c,wrapperRef:v})=>{const m=w.exports.useRef(null),x=w.exports.useRef([]),b=w.exports.useRef(0),h=w.exports.useRef(0),p=w.exports.useRef(),g=w.exports.useRef("search"),y=w.exports.useRef(""),$=w.exports.useRef(),[A,P]=Cn({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:u,value:l,valuePropName:"open"}),M=w.exports.useMemo(()=>{const L=s.findIndex(B=>B.value===d);return b.current=Mn(L,0,null),s[L]},[s,d]),[X,U]=w.exports.useState(s[0]),de=w.exports.useCallback(L=>{const B=m.current,G=x.current[L];if(!G||!B){p.current=L;return}p.current=void 0;const Q=B.clientHeight,ae=B.scrollTop,fe=B.scrollTop+Q,J=G.offsetTop,ve=G.offsetHeight,le=G.offsetTop+G.offsetHeight;J<ae&&B.scrollTo(0,J),le>fe&&B.scrollTo(0,J-Q+ve),G.focus({preventScroll:!0})},[m]),ie=w.exports.useCallback((L,{scroll:B}={})=>{var G;const Q=s.length-1;let ae;switch(L){case"first":{ae=0;break}case"last":{ae=Q;break}case"next":{ae=Mn(h.current+1,0,Q);break}case"previous":{ae=Mn(h.current-1,0,Q);break}case"selected":{ae=Mn((G=b.current)!==null&&G!==void 0?G:0,0,Q);break}default:ae=L}h.current=ae,U(s[ae]),B&&de(ae)},[h,s,de]),ue=w.exports.useCallback(({fromEvent:L})=>{P(!0),ie("selected",{scroll:!0}),a==null||a({fromEvent:L})},[ie,a,P]),ee=w.exports.useCallback(()=>{g.current="search",y.current="",clearTimeout($.current)},[]),re=w.exports.useCallback(({focusSelect:L,fromEvent:B})=>{var G;n==null||n({fromEvent:B}),P(!1),U(s[0]),ee(),p.current=void 0,L&&((G=f.current)===null||G===void 0||G.focus())},[ee,n,s,f,P]),ke=w.exports.useCallback(({fromEvent:L})=>{A?re({focusSelect:!1,fromEvent:L}):ue({fromEvent:L})},[re,ue,A]),se=w.exports.useCallback((L,{fromEvent:B})=>{b.current!==L&&(b.current=L,c(s[L].value),t==null||t(s[L],{fromEvent:B}))},[t,s,c]),E=w.exports.useCallback(({focusSelect:L,fromEvent:B})=>{se(h.current,{fromEvent:B}),re({focusSelect:L,fromEvent:B})},[re,se]),H=w.exports.useCallback((L,{fromEvent:B,select:G})=>{var Q;switch(g.current==="cycleFirstLetter"&&L!==y.current&&(g.current="search"),L===y.current?g.current="cycleFirstLetter":y.current+=L,g.current){case"search":{let ae=s.findIndex(fe=>{var J;return((J=fe.label)===null||J===void 0?void 0:J.toLocaleUpperCase().indexOf(y.current))===0});ae<0&&(ae=s.findIndex(fe=>{var J;return((J=fe.label)===null||J===void 0?void 0:J.toLocaleUpperCase().indexOf(L))===0}),y.current=L),ae>=0&&(G?se(ae,{fromEvent:B}):ie(ae,{scroll:!0}));break}case"cycleFirstLetter":{const ae=G?(Q=b.current)!==null&&Q!==void 0?Q:-1:h.current;let fe=s.findIndex((J,ve)=>{var le;return ve>ae&&((le=J.label)===null||le===void 0?void 0:le.toLocaleUpperCase().indexOf(L))===0});fe<0&&(fe=s.findIndex(J=>{var ve;return((ve=J.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(L))===0})),fe>=0&&(G?se(fe,{fromEvent:B}):ie(fe,{scroll:!0}));break}}clearTimeout($.current),$.current=setTimeout(()=>{g.current==="search"&&(y.current="")},cx)},[ie,s,se]),Y=w.exports.useCallback(L=>{var B;L.button===0&&(L.preventDefault(),(B=f.current)===null||B===void 0||B.focus(),ke({fromEvent:L}),i==null||i(L))},[i,f,ke]),ce=w.exports.useCallback(L=>{E({focusSelect:!0,fromEvent:L})},[E]),z=w.exports.useCallback(L=>{const{altKey:B,code:G,ctrlKey:Q,metaKey:ae,shiftKey:fe}=L,{ARROW_DOWN:J,ARROW_UP:ve,END:le,ENTER:C,ESC:N,HOME:O,SPACE:Z,TAB:q}=ux,oe=B||Q||ae||fe;if(!(G===q&&(B||Q||ae)||G!==q&&oe))switch(G){case J:{if(L.preventDefault(),!A){ue({fromEvent:L});return}ie("next",{scroll:!0});break}case ve:{if(L.preventDefault(),!A){ue({fromEvent:L});return}ie("previous",{scroll:!0});break}case le:{if(L.preventDefault(),!A){ue({fromEvent:L});return}ie("last",{scroll:!0});break}case C:{if(!A)return;L.preventDefault(),E({focusSelect:!0,fromEvent:L});break}case N:{if(!A)return;L.preventDefault(),re({focusSelect:!0,fromEvent:L});break}case O:{if(L.preventDefault(),!A){ue({fromEvent:L});return}ie("first",{scroll:!0});break}case Z:{L.preventDefault(),A?E({focusSelect:!0,fromEvent:L}):ue({fromEvent:L});break}case q:{if(!A)return;fe||L.preventDefault(),E({focusSelect:!fe,fromEvent:L});break}default:!oe&&G.match(/^Key/)&&(L.preventDefault(),L.stopPropagation(),H(G.replace(/^Key/,""),{select:!A,fromEvent:L}))}},[ie,re,A,ue,H,E]),R=w.exports.useCallback(L=>{z(L),o==null||o(L)},[z,o]),T=w.exports.useCallback(L=>{ie(L)},[ie]),F=w.exports.useCallback(L=>{A||(ee(),e==null||e(L))},[ee,e,A]),S=w.exports.useCallback(L=>{ee(),r==null||r(L)},[ee,r]),V=w.exports.useCallback(L=>{m.current=L,p.current!==void 0&&de(p.current)},[de]),I=w.exports.useCallback((L,B)=>{x.current[B]=L,p.current===B&&de(p.current)},[de]);return w.exports.useEffect(()=>{if(!A)return()=>{};const L=B=>{var G;const Q=B.target;!((G=v.current)===null||G===void 0)&&G.contains(Q)||(B.preventDefault(),re({focusSelect:!1,fromEvent:B}))};return document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}},[re,A,v]),w.exports.useMemo(()=>({activeOption:X,handleActivateOptionIndex:T,handleBlur:F,handleButtonKeyDown:R,handleDropdownKeyDown:z,handleFocus:S,handleMouseDown:Y,handleOptionClick:ce,handleSetDropdownRef:V,handleSetOptionRef:I,open:A,selectedOption:M}),[X,T,F,R,S,z,Y,ce,V,I,A,M])},fx=w.exports.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:a,value:l,variant:s,width:u,...d},f)=>{const{isEnabled:c,options:v,setValue:m,value:x,DropdownButton:b,Wrapper:h}=hg({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:l,variant:s}),p=w.exports.useCallback(g=>{const y=v.find($=>$.value===g.target.value);!y||(m(y.value),r==null||r(y,{fromEvent:g}))},[r,v,m]);return k(h,{className:e,style:{...a,width:u},children:ne(Ju,{children:[k(ox,{...d,disabled:n,onChange:c?p:qn,ref:f,value:x,children:v.map((g,y)=>{var $;return k("option",{value:g.value,children:($=g.label)!==null&&$!==void 0?$:g.value},`${g.value}-${y}`)})}),b]})})});fx.displayName="SelectNative";function px({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:a}){const l=w.exports.useCallback(()=>{e(n)},[e,n]),s=w.exports.useCallback(d=>{a(d,n)},[n,a]),u=ug();return k(lx,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:l,ref:s,role:"option",tabIndex:0,children:o.label})}function hx({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:s,name:u,onBlur:d,onChange:f,onClose:c,onFocus:v,onKeyDown:m,onMouseDown:x,onOpen:b,open:h,options:p,readOnly:g,shadow:y=!0,style:$,variant:A="default",value:P,width:M="auto",...X},U){const{isEnabled:de,options:ie,setValue:ue,value:ee,wrapperProps:re,DropdownButton:ke,Wrapper:se}=hg({className:n,defaultValue:r,disabled:o,native:!1,onChange:f,options:p,style:$,readOnly:g,value:P,variant:A,width:M}),E=w.exports.useRef(null),H=w.exports.useRef(null),Y=w.exports.useRef(null),{activeOption:ce,handleActivateOptionIndex:z,handleBlur:R,handleButtonKeyDown:T,handleDropdownKeyDown:F,handleFocus:S,handleMouseDown:V,handleOptionClick:I,handleSetDropdownRef:L,handleSetOptionRef:B,open:G,selectedOption:Q}=dx({onBlur:d,onChange:f,onClose:c,onFocus:v,onKeyDown:m,onMouseDown:x,onOpen:b,open:h,options:ie,value:ee,selectRef:H,setValue:ue,wrapperRef:Y});w.exports.useImperativeHandle(U,()=>({focus:C=>{var N;(N=H.current)===null||N===void 0||N.focus(C)},node:E.current,value:String(ee)}),[ee]);const ae=w.exports.useMemo(()=>Q?typeof i=="function"?i(Q):Q.label:"",[i,Q]),fe=de?1:void 0,J=w.exports.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),ve=ug(),le=w.exports.useMemo(()=>ie.map((C,N)=>{const O=`${ee}-${N}`;return k(px,{activateOptionIndex:z,active:C===ce,index:N,onClick:I,option:C,selected:C===Q,setRef:B},O)}),[ce,z,I,B,ie,Q,ee]);return ne(se,{...re,$disabled:o,ref:Y,shadow:y,style:{...$,width:M},children:[k("input",{name:u,ref:E,type:"hidden",value:String(ee),...a}),ne(Ju,{"aria-disabled":o,"aria-expanded":G,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t!=null?t:l,"aria-owns":de&&G?ve:void 0,onBlur:R,onFocus:S,onKeyDown:T,onMouseDown:de?V:x,ref:H,role:"button",tabIndex:fe,...X,children:[k(tx,{children:ae}),ke]}),de&&G&&k(ax,{id:ve,onKeyDown:F,ref:L,role:"listbox",style:J,tabIndex:0,variant:A,children:le})]})}const Zu=w.exports.forwardRef(hx);Zu.displayName="Select";const gx=D.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,aa=w.exports.forwardRef(function({children:t,noPadding:n=!1,...r},o){return k(gx,{noPadding:n,ref:o,...r,children:t})});aa.displayName="Toolbar";const mx=D.div`
  padding: 16px;
`,gg=w.exports.forwardRef(function({children:t,...n},r){return k(mx,{ref:r,...n,children:t})});gg.displayName="WindowContent";const vx=D.div`
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

  ${Ua} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,mg=w.exports.forwardRef(function({active:t=!0,children:n,...r},o){return k(vx,{active:t,ref:o,...r,children:n})});mg.displayName="WindowHeader";const yx=D.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ne({style:"window"})}
  ${Dt()}
`,xx=D.span`
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
`,vg=w.exports.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>ne(yx,{ref:i,shadow:r,...o,children:[e,t&&k(xx,{"data-testid":"resizeHandle",ref:n})]}));vg.displayName="Window";const wx=D(ng)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Sx=D.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,kx=D.div`
  display: flex;
  flex-wrap: wrap;
`,Qt=D.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,bx=D.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,$x=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Cx(e,t){return new Date(e,t+1,0).getDate()}function Ax(e,t,n){return new Date(e,t,n).getDay()}function Ex(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const Rx=w.exports.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[a,l]=w.exports.useState(()=>Ex(t)),{year:s,month:u,day:d}=a,f=w.exports.useCallback(({value:b})=>{l(h=>({...h,month:b}))},[]),c=w.exports.useCallback(b=>{l(h=>({...h,year:b}))},[]),v=w.exports.useCallback(b=>{l(h=>({...h,day:b}))},[]),m=w.exports.useCallback(()=>{const b=[a.year,a.month+1,a.day].map(h=>String(h).padStart(2,"0")).join("-");n==null||n(b)},[a.day,a.month,a.year,n]),x=w.exports.useMemo(()=>{const b=Array.from({length:42}),h=Ax(s,u,1);let p=d;const g=Cx(s,u);return p=p<g?p:g,b.forEach((y,$)=>{if($>=h&&$<g+h){const A=$-h+1;b[$]=k(Qt,{onClick:()=>{v(A)},children:k(bx,{active:A===p,children:A})},$)}else b[$]=k(Qt,{},$)}),b},[d,v,u,s]);return ne(vg,{className:e,ref:i,shadow:o,style:{margin:20},children:[ne(mg,{children:[k("span",{role:"img","aria-label":"\u{1F4C6}",children:"\u{1F4C6}"}),"Date"]}),ne(gg,{children:[ne(aa,{noPadding:!0,style:{justifyContent:"space-between"},children:[k(Zu,{options:$x,value:u,onChange:f,width:128,menuMaxHeight:200}),k(sg,{value:s,onChange:c,width:100})]}),ne(wx,{children:[ne(Sx,{children:[k(Qt,{children:"S"}),k(Qt,{children:"M"}),k(Qt,{children:"T"}),k(Qt,{children:"W"}),k(Qt,{children:"T"}),k(Qt,{children:"F"}),k(Qt,{children:"S"})]}),k(kx,{children:x})]}),ne(aa,{noPadding:!0,style:{justifyContent:"space-between"},children:[k(Xn,{fullWidth:!0,onClick:r,disabled:!r,children:"Cancel"}),k(Xn,{fullWidth:!0,onClick:n?m:void 0,disabled:!n,children:"OK"})]})]})]})});Rx.displayName="DatePicker";const Lx=e=>{switch(e){case"status":case"well":return W`
        ${Ne({style:"status"})}
      `;case"window":case"outside":return W`
        ${Ne({style:"window"})}
      `;case"field":return W`
        ${Ne({style:"field"})}
      `;default:return W`
        ${Ne()}
      `}},Px=D.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Lx(e)}
  ${({variant:e})=>Dt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Tx=w.exports.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>k(Px,{ref:o,shadow:t,variant:n,...r,children:e}));Tx.displayName="Frame";const Nx=D.fieldset`
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
`,Dx=D.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Ox=w.exports.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>ne(Nx,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o,children:[e&&k(Dx,{variant:n,children:e}),r]}));Ox.displayName="GroupBox";const Ns=D.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${$n(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Ns.displayName="Handle";const Ix="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",_x=D.div`
  display: inline-block;
  height: ${({size:e})=>$n(e)};
  width: ${({size:e})=>$n(e)};
`,Mx=D.span`
  display: block;
  background: ${Ix};
  background-size: cover;
  width: 100%;
  height: 100%;
`,zx=w.exports.forwardRef(({size:e=30,...t},n)=>k(_x,{size:e,ref:n,...t,children:k(Mx,{})}));zx.displayName="Hourglass";const Fx=D.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,jx=D.div`
  position: relative;
`,Bx=D.div`
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
`,Ux=D(Ht).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Hx=D.div`
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
`,Vx=w.exports.forwardRef(({backgroundStyles:e,children:t,...n},r)=>k(Fx,{ref:r,...n,children:ne(jx,{children:[k(Bx,{children:k(Ux,{style:e,children:t})}),k(Hx,{})]})}));Vx.displayName="Monitor";const Wx=D.div`
  display: inline-block;
  height: ${Ve.md};
  width: 100%;
`,Qx=D(Ht)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,yg=W`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Kx=D.div`
  position: relative;
  top: 4px;
  ${yg}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Gx=D.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${yg}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Yx=D.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,xg=17,Xx=D.span`
  display: inline-block;
  width: ${xg}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Jx=w.exports.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const a=e?null:`${n}%`,l=w.exports.useRef(null),[s,u]=w.exports.useState([]),d=w.exports.useCallback(()=>{if(!l.current||n===void 0)return;const f=l.current.getBoundingClientRect().width,c=Math.round(n/100*f/xg);u(Array.from({length:c}))},[n]);return w.exports.useEffect(()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[d]),k(Wx,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o,children:k(Qx,{variant:r,shadow:t,children:r==="default"?ne(Ih,{children:[k(Kx,{"data-testid":"defaultProgress1",children:a}),k(Gx,{"data-testid":"defaultProgress2",value:n,children:a})]}):k(Yx,{ref:l,"data-testid":"tileProgress",children:s.map((f,c)=>k(Xx,{},c))})})})});Jx.displayName="ProgressBar";const wg=W`
  width: ${Bt}px;
  height: ${Bt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Zx=D(Ht)`
  ${wg}
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
`,qx=D.div`
  ${Yn()}
  ${wg}
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
`,ew=D.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,tw={flat:qx,default:Zx},nw=w.exports.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:a="default",...l},s)=>{const u=tw[a];return ne(Gu,{$disabled:n,className:t,style:i,children:[k(u,{$disabled:n,role:"presentation",children:e&&k(ew,{$disabled:n,variant:a})}),k(ia,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...l}),r&&k(Yu,{children:r})]})});nw.displayName="Radio";const rw=typeof window<"u"?w.exports.useLayoutEffect:w.exports.useEffect;function Pn(e){const t=w.exports.useRef(e);return rw(()=>{t.current=e}),w.exports.useCallback((...n)=>(0,t.current)(...n),[])}function Wd(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Qd(e,t){return w.exports.useMemo(()=>e==null&&t==null?null:n=>{Wd(e,n),Wd(t,n)},[e,t])}let Ha=!0,Ds=!1,Kd;const ow={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function iw(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&ow[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function aw(e){e.metaKey||e.altKey||e.ctrlKey||(Ha=!0)}function Cl(){Ha=!1}function lw(){this.visibilityState==="hidden"&&Ds&&(Ha=!0)}function sw(e){e.addEventListener("keydown",aw,!0),e.addEventListener("mousedown",Cl,!0),e.addEventListener("pointerdown",Cl,!0),e.addEventListener("touchstart",Cl,!0),e.addEventListener("visibilitychange",lw,!0)}function uw(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Ha||iw(t)}function cw(){Ds=!0,window.clearTimeout(Kd),Kd=window.setTimeout(()=>{Ds=!1},100)}function dw(){const e=w.exports.useCallback(t=>{const n=Vs.exports.findDOMNode(t);n!=null&&sw(n.ownerDocument)},[]);return{isFocusVisible:uw,onBlurVisible:cw,ref:e}}function fw(e,t,n){return(n-t)*e+t}function hi(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function gi(e){return e&&e.ownerDocument||document}function pw(e,t){var n;const{index:r}=(n=e.reduce((o,i,a)=>{const l=Math.abs(t-i);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!==null&&n!==void 0?n:{};return r!=null?r:-1}const hw=D.div`
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
`,Sg=()=>W`
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
`,gw=D(Ht)`
  ${Sg()}
`,mw=D(Ht)`
  ${Sg()}

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
`,vw=D.span`
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
    ${({$disabled:e,theme:t})=>e&&Qo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,Sr=6,yw=D.span`
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
`,xw=D.div`
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
`,ww=w.exports.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:s,orientation:u="horizontal",size:d="100%",step:f=1,value:c,variant:v="default",...m},x)=>{const b=v==="flat"?mw:gw,h=u==="vertical",[p=o,g]=Cn({defaultValue:e,onChange:a!=null?a:l,value:c}),{isFocusVisible:y,onBlurVisible:$,ref:A}=dw(),[P,M]=w.exports.useState(!1),X=w.exports.useRef(),U=w.exports.useRef(null),de=Qd(A,X),ie=Qd(x,de),ue=Pn(R=>{y(R)&&M(!0)}),ee=Pn(()=>{P!==!1&&(M(!1),$())}),re=w.exports.useRef(),ke=w.exports.useMemo(()=>n===!0&&Number.isFinite(f)?[...Array(Math.round((r-o)/f)+1)].map((R,T)=>({label:void 0,value:o+f*T})):Array.isArray(n)?n:[],[n,r,o,f]),se=Pn(R=>{const T=(r-o)/10,F=ke.map(I=>I.value),S=F.indexOf(p);let V=0;switch(R.key){case"Home":V=o;break;case"End":V=r;break;case"PageUp":f&&(V=p+T);break;case"PageDown":f&&(V=p-T);break;case"ArrowRight":case"ArrowUp":f?V=p+f:V=F[S+1]||F[F.length-1];break;case"ArrowLeft":case"ArrowDown":f?V=p-f:V=F[S-1]||F[0];break;default:return}R.preventDefault(),f&&(V=Ud(V,f,o)),V=Mn(V,o,r),g(V),M(!0),a==null||a(V),l==null||l(V)}),E=w.exports.useCallback(R=>{if(!X.current)return 0;const T=X.current.getBoundingClientRect();let F;h?F=(T.bottom-R.y)/T.height:F=(R.x-T.left)/T.width;let S;if(S=fw(F,o,r),f)S=Ud(S,f,o);else{const V=ke.map(L=>L.value),I=pw(V,S);S=V[I]}return S=Mn(S,o,r),S},[ke,r,o,f,h]),H=Pn(R=>{var T;const F=hi(R,re.current);if(!F)return;const S=E(F);(T=U.current)===null||T===void 0||T.focus(),g(S),M(!0),a==null||a(S)}),Y=Pn(R=>{const T=hi(R,re.current);if(!T)return;const F=E(T);l==null||l(F),re.current=void 0;const S=gi(X.current);S.removeEventListener("mousemove",H),S.removeEventListener("mouseup",Y),S.removeEventListener("touchmove",H),S.removeEventListener("touchend",Y)}),ce=Pn(R=>{var T;s==null||s(R),R.preventDefault(),(T=U.current)===null||T===void 0||T.focus(),M(!0);const F=hi(R,re.current);if(F){const V=E(F);g(V),a==null||a(V)}const S=gi(X.current);S.addEventListener("mousemove",H),S.addEventListener("mouseup",Y)}),z=Pn(R=>{var T;R.preventDefault();const F=R.changedTouches[0];F!=null&&(re.current=F.identifier),(T=U.current)===null||T===void 0||T.focus(),M(!0);const S=hi(R,re.current);if(S){const I=E(S);g(I),a==null||a(I)}const V=gi(X.current);V.addEventListener("touchmove",H),V.addEventListener("touchend",Y)});return w.exports.useEffect(()=>{const{current:R}=X;R==null||R.addEventListener("touchstart",z);const T=gi(R);return()=>{R==null||R.removeEventListener("touchstart",z),T.removeEventListener("mousemove",H),T.removeEventListener("mouseup",Y),T.removeEventListener("touchmove",H),T.removeEventListener("touchend",Y)}},[Y,H,z]),ne(hw,{$disabled:t,hasMarks:Boolean(ke.length),isFocused:P,onMouseDown:ce,orientation:u,ref:ie,size:$n(d),...m,children:[k("input",{disabled:t,name:i,type:"hidden",value:p!=null?p:0}),ke&&ke.map(R=>k(yw,{$disabled:t,"data-testid":"tick",orientation:u,style:{[h?"bottom":"left"]:`${(R.value-o)/(r-o)*100}%`},children:R.label&&k(xw,{"aria-hidden":!0,"data-testid":"mark",orientation:u,children:R.label})},R.value/(r-o)*100)),k(b,{orientation:u,variant:v}),k(vw,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":p,onBlur:ee,onFocus:ue,onKeyDown:se,orientation:u,ref:U,role:"slider",style:{[h?"bottom":"left"]:`${(h?-100:0)+100*(p-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:v})]})});ww.displayName="Slider";const Sw=D.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Qu};
  overflow-y: auto;
`,kw=w.exports.forwardRef(function({children:t,...n},r){return k(Sw,{ref:r,...n,children:t})});kw.displayName="TableBody";const bw=D.td`
  padding: 0 8px;
`,$w=w.exports.forwardRef(function({children:t,...n},r){return k(bw,{ref:r,...n,children:t})});$w.displayName="TableDataCell";const Cw=D.thead`
  display: table-header-group;
`,Aw=w.exports.forwardRef(function({children:t,...n},r){return k(Cw,{ref:r,...n,children:t})});Aw.displayName="TableHead";const Ew=D.th`
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
`,Rw=w.exports.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=qn,sort:i,...a},l){return k(Ew,{$disabled:t,"aria-disabled":t,"aria-sort":i==="asc"?"ascending":i==="desc"?"descending":void 0,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:l,...a,children:k("div",{children:n})})});Rw.displayName="TableHeadCell";const Lw=D.tr`
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
`,Pw=w.exports.forwardRef(function({children:t,...n},r){return k(Lw,{ref:r,...n,children:t})});Pw.displayName="TableRow";const Tw=D.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Nw=D(Ht)`
  &:before {
    box-shadow: none;
  }
`,Dw=w.exports.forwardRef(({children:e,...t},n)=>k(Nw,{children:k(Tw,{ref:n,...t,children:e})}));Dw.displayName="Table";const Ow=D.button`
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
`,Iw=w.exports.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>k(Ow,{"aria-selected":n,selected:n,onClick:a=>t==null?void 0:t(e,a),ref:i,role:"tab",...o,children:r}));Iw.displayName="Tab";const _w=D.div`
  ${Dt()}
  ${Ne()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Mw=w.exports.forwardRef(({children:e,...t},n)=>k(_w,{ref:n,...t,children:e}));Mw.displayName="TabBody";const zw=D.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,Fw=D.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function jw(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const Bw=w.exports.forwardRef(({value:e,onChange:t=qn,children:n,rows:r=1,...o},i)=>{const a=w.exports.useMemo(()=>{var l;const s=(l=Rt.Children.map(n,f=>{if(!Rt.isValidElement(f))return null;const c={selected:f.props.value===e,onClick:t};return Rt.cloneElement(f,c)}))!==null&&l!==void 0?l:[],u=jw(s,r).map((f,c)=>({key:c,tabs:f})),d=u.findIndex(f=>f.tabs.some(c=>c.props.selected));return u.push(u.splice(d,1)[0]),u},[n,t,r,e]);return k(zw,{...o,isMultiRow:r>1,role:"tablist",ref:i,children:a.map(l=>k(Fw,{children:l.tabs},l.key))})});Bw.displayName="Tabs";const Uw=["blur","focus"],Hw=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Gd(e){return"nativeEvent"in e&&Uw.includes(e.type)}function Yd(e){return"nativeEvent"in e&&Hw.includes(e.type)}const Vw={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Ww=D.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Wu};
  text-align: center;
  font-size: 1rem;
  ${e=>Vw[e.position]}
`,Qw=D.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Kw=w.exports.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:s,onMouseEnter:u,onMouseLeave:d,onOpen:f,style:c,text:v,position:m="top",...x},b)=>{const[h,p]=w.exports.useState(!1),[g,y]=w.exports.useState(),[$,A]=w.exports.useState(),P=!n,M=!r,X=E=>{window.clearTimeout(g),window.clearTimeout($);const H=window.setTimeout(()=>{p(!0),f==null||f(E)},o);y(H)},U=E=>{E.persist(),Gd(E)?s==null||s(E):Yd(E)&&(u==null||u(E)),X(E)},de=E=>{window.clearTimeout(g),window.clearTimeout($);const H=window.setTimeout(()=>{p(!1),l==null||l(E)},i);A(H)},ie=E=>{E.persist(),Gd(E)?a==null||a(E):Yd(E)&&(d==null||d(E)),de(E)};return ne(Qw,{"data-testid":"tooltip-wrapper",onBlur:P?ie:void 0,onFocus:P?U:void 0,onMouseEnter:M?U:void 0,onMouseLeave:M?ie:void 0,tabIndex:P?0:void 0,children:[k(Ww,{className:e,"data-testid":"tooltip",position:m,ref:b,show:h,style:c,...x,children:v}),t]})});Kw.displayName="Tooltip";const Os=D(Yu)`
  white-space: nowrap;
`,kg=W`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":W`
          cursor: pointer;

          :focus {
            ${Os} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,Gw=D.ul`
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
`,Yw=D.li`
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
`,Xw=D.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Jw=D.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${kg};

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
`,Xd=D(Gu)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${kg};
`,Zw=D.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Jd(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Zd(e){e.preventDefault()}function bg({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:a,style:l,tree:s=[]}){const u=o===0,d=w.exports.useCallback(f=>{var c,v;const m=Boolean(f.items&&f.items.length>0),x=n.includes(f.id),b=(c=t||f.disabled)!==null&&c!==void 0?c:!1,h=b?Zd:$=>i($,f),p=b?Zd:$=>i($,f),g=a===f.id,y=k(Zw,{"aria-hidden":!0,children:f.icon});return k(Yw,{isRootLevel:u,role:"treeitem","aria-expanded":x,"aria-selected":g,hasItems:m,children:m?ne(Xw,{open:x,children:[k(Jw,{onClick:h,$disabled:b,children:ne(Xd,{$disabled:b,children:[y,k(Os,{children:f.label})]})}),x&&k(bg,{className:e,disabled:b,expanded:n,level:o+1,select:i,selected:a,style:l,tree:(v=f.items)!==null&&v!==void 0?v:[]})]}):ne(Xd,{as:"button",$disabled:b,onClick:p,children:[y,k(Os,{children:f.label})]})},f.label)},[e,t,n,u,o,i,a,l]);return k(Gw,{className:u?e:void 0,style:u?l:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u,children:s.map(d)})}function qw({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:l,style:s,tree:u=[]},d){const[f,c]=Cn({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[v,m]=Cn({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),x=w.exports.useCallback((p,g)=>{if(a){const y=Jd(f,g);a(p,y)}c(y=>Jd(y,g))},[f,a,c]),b=w.exports.useCallback((p,g)=>{m(g),i&&i(p,g)},[i,m]),h=w.exports.useCallback((p,g)=>{p.preventDefault(),b(p,g.id),g.items&&g.items.length&&x(p,g.id)},[b,x]);return k(bg,{className:e,disabled:r,expanded:f,level:0,innerRef:d,select:h,selected:v,style:s,tree:u})}const eS=w.exports.forwardRef(qw);eS.displayName="TreeView";function tS(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const qd={};function Is(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&qd[t[0]]||(typeof t[0]=="string"&&(qd[t[0]]=new Date),tS(...t))}const $g=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function ef(e,t,n){e.loadNamespaces(t,$g(e,n))}function tf(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,$g(e,r))}function nS(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],o=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const u=t.services.backendConnector.state[`${l}|${s}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!o||a(i,e)))}function rS(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(Is("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(o,i)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!i(o.isLanguageChangingTo,e))return!1}}):nS(e,t,n)}const oS=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,iS={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xA9","&#169;":"\xA9","&reg;":"\xAE","&#174;":"\xAE","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},aS=e=>iS[e],lS=e=>e.replace(oS,aS);let _s={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:lS};function sS(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_s={..._s,...e}}function uS(){return _s}let Cg;function cS(e){Cg=e}function dS(){return Cg}const fS={type:"3rdParty",init(e){sS(e.options.react),cS(e)}},pS=w.exports.createContext();class hS{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const gS=(e,t)=>{const n=w.exports.useRef();return w.exports.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function qu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:o}=w.exports.useContext(pS)||{},i=n||r||dS();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new hS),!i){Is("You will need to pass in an i18next instance by using initReactI18next");const g=($,A)=>typeof A=="string"?A:A&&typeof A=="object"&&typeof A.defaultValue=="string"?A.defaultValue:Array.isArray($)?$[$.length-1]:$,y=[g,{},!1];return y.t=g,y.i18n={},y.ready=!1,y}i.options.react&&i.options.react.wait!==void 0&&Is("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...uS(),...i.options.react,...t},{useSuspense:l,keyPrefix:s}=a;let u=e||o||i.options&&i.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(u);const d=(i.isInitialized||i.initializedStoreOnce)&&u.every(g=>rS(g,i,a));function f(){return i.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],s)}const[c,v]=w.exports.useState(f);let m=u.join();t.lng&&(m=`${t.lng}${m}`);const x=gS(m),b=w.exports.useRef(!0);w.exports.useEffect(()=>{const{bindI18n:g,bindI18nStore:y}=a;b.current=!0,!d&&!l&&(t.lng?tf(i,t.lng,u,()=>{b.current&&v(f)}):ef(i,u,()=>{b.current&&v(f)})),d&&x&&x!==m&&b.current&&v(f);function $(){b.current&&v(f)}return g&&i&&i.on(g,$),y&&i&&i.store.on(y,$),()=>{b.current=!1,g&&i&&g.split(" ").forEach(A=>i.off(A,$)),y&&i&&y.split(" ").forEach(A=>i.store.off(A,$))}},[i,m]);const h=w.exports.useRef(!0);w.exports.useEffect(()=>{b.current&&!h.current&&v(f),h.current=!1},[i,s]);const p=[c,i,d];if(p.t=c,p.i18n=i,p.ready=d,d||!d&&!l)return p;throw new Promise(g=>{t.lng?tf(i,t.lng,u,()=>g()):ef(i,u,()=>g())})}function Ms(e){if(typeof e=="number")return`${e}px`;if(typeof e=="string")return e}const Sn=D.div`
	display: flex;
	flex-direction: ${e=>{var t;return(t=e.direction)!=null?t:"row"}};
	flex-wrap: ${e=>{var t;return(t=e.wrap)!=null?t:"nowrap"}};
	justify-content: ${e=>{var t;return(t=e.justify)!=null?t:"flex-start"}};
	align-items: ${e=>{var t;return(t=e.align)!=null?t:"flex-start"}};
	align-content: ${e=>{var t;return(t=e.alignContent)!=null?t:"flex-start"}};
	gap: ${e=>{var t;return(t=Ms(e.gap))!=null?t:"0px"}};
	${e=>({...e.sx})}
`,zs=D.p`
	display: inline-block;
	font-size: ${e=>e.variant==="title"?"24px":e.variant==="caption"?"10px":"13px"};
	font-weight: ${e=>e.bold?"600":"400"};
	color: ${e=>e.variant==="title"?"#0a0a0a":"#1a1a1a"} !important;
	&::selection {
		background-color: #c6c6c6;
		color: #0a0a0a;
	}
	padding: ${e=>{var t;return(t=Ms(e.p))!=null?t:"0"}};
	margin: ${e=>{var t;return(t=Ms(e.m))!=null?t:"0"}};
`,mS="/assets/logout.ea9945f5.svg",vS="/assets/clock.a4081c19.svg",Ag="/assets/react.35ef61ed.svg",yS="576",xS="768",wS="992",SS="1200",kS="_container_16r5m_15",bS="_list_16r5m_19",nf={mediaSm:yS,mediaMd:xS,mediaLg:wS,mediaXl:SS,container:kS,list:bS},$S="576",CS="768",AS="992",ES="1200",so={mediaSm:$S,mediaMd:CS,mediaLg:AS,mediaXl:ES};console.log("\u{1F680} ~ file: useMediaQuery.ts:5 ~ vars:",so);const RS={sm:so.mediaSm,md:so.mediaMd,lg:so.mediaLg,xl:so.mediaXl};function Eg(e){const t=`(min-width: ${RS[e]}px)`,n=()=>window.matchMedia(t).matches,[r,o]=w.exports.useState(n());function i(){o(n())}return w.exports.useEffect(()=>{const a=window.matchMedia(t);return i(),a.addEventListener("change",i),()=>{a.removeEventListener("change",i)}},[e]),r}function Rg(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Rg(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function LS(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Rg(e))&&(r&&(r+=" "),r+=t);return r}const PS="576",TS="768",NS="992",DS="1200",OS="_icon_11izw_15",IS="_disabled_11izw_19",_S="_mr_11izw_22",MS="_ml_11izw_30",zS="_small_11izw_38",to={mediaSm:PS,mediaMd:TS,mediaLg:NS,mediaXl:DS,icon:OS,disabled:IS,mr:_S,ml:MS,small:zS},Lr=({src:e,alt:t,className:n,disabled:r,marginLeft:o,marginRight:i,small:a})=>k("img",{"aria-roledescription":"icon",src:e,className:LS(to.icon,n,r&&to.disabled,o&&to.ml,i&&to.mr,a&&to.small),alt:t});function FS(){const{t:e}=qu("menu"),t=Eg("sm"),[n,r]=w.exports.useState(!1);return ne("div",{className:nf.container,children:[ne(Xn,{onClick:()=>r(!n),active:n,children:[k(Lr,{small:!0,src:Ag,marginRight:t,alt:"react logo as start button icon"}),t&&k(zs,{children:e("nav.start")})]}),n&&ne(tg,{className:nf.list,onClick:()=>r(!1),children:[ne(Ps,{disabled:!0,"aria-disabled":!0,children:[k(Lr,{disabled:!0,marginRight:!0,src:vS,alt:"clock icon"})," In Progress"]}),k(Xu,{}),ne(Ps,{onClick:()=>window.close(),children:[k(Lr,{marginRight:!0,src:mS,alt:"arrow pointing out of door, a logout icon"}),e("nav.logout")]})]})]})}const jS="576",BS="768",US="992",HS="1200",VS="_container_1d9jl_8",WS={mediaSm:jS,mediaMd:BS,mediaLg:US,mediaXl:HS,container:VS};function QS(){const{i18n:e}=qu(),t=Eg("sm"),n=w.exports.useRef(e.languages).current,r=n.indexOf(e.language),o=n.map((i,a)=>({label:`${t?"\u{1F310}":""}${i.toUpperCase()}`,value:a}));return k(Zu,{defaultValue:r,options:o,menuMaxHeight:90,onChange:i=>e.changeLanguage(n[i.value]),className:WS.container})}const KS="modulepreload",GS=function(e){return"/"+e},rf={},of=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=GS(i),i in rf)return;rf[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===i&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":KS,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},YS="/assets/notes.820da670.svg",XS="/assets/briefcase-search.4a50e9cf.svg",JS="576",ZS="768",qS="992",ek="1200",tk="_container_1n967_15",nk={mediaSm:JS,mediaMd:ZS,mediaLg:qS,mediaXl:ek,container:tk},af={IntroductionWindow:w.exports.lazy(()=>of(()=>import("./IntroductionWindow.a5ddf9b6.js"),["assets/IntroductionWindow.a5ddf9b6.js","assets/github.fb96b790.js","assets/cjs.8461230d.js","assets/cjs.27b8a864.css"]).then(e=>({default:e.IntroductionWindow}))),ProjectsWindow:w.exports.lazy(()=>of(()=>import("./ProjectsWindow.2916e508.js"),["assets/ProjectsWindow.2916e508.js","assets/cjs.8461230d.js","assets/cjs.27b8a864.css","assets/ProjectsWindow.9f8af5db.css"]).then(e=>({default:e.ProjectsWindow})))};function rk(){const[e,t]=w.exports.useState(null),{t:n}=qu("menu");return ne(Sn,{className:nk.container,children:[ne(Xn,{active:e==="IntroductionWindow",onClick:()=>t(e==="IntroductionWindow"?null:"IntroductionWindow"),children:[k(Lr,{marginRight:!0,src:YS,alt:"an icon of a page, indicating writing"}),n("window.hello")]}),ne(Xn,{active:e==="ProjectsWindow",onClick:()=>t(e==="ProjectsWindow"?null:"ProjectsWindow"),children:[k(Lr,{marginRight:!0,src:XS,alt:"an icon of a briefcase"}),n("window.projects")]}),k(w.exports.Suspense,{fallback:null,children:e==="IntroductionWindow"&&k(af.IntroductionWindow,{})}),k(w.exports.Suspense,{fallback:null,children:e==="ProjectsWindow"&&k(af.ProjectsWindow,{})})]})}const ok="576",ik="768",ak="992",lk="1200",sk="_container_1r1s8_8",uk={mediaSm:ok,mediaMd:ik,mediaLg:ak,mediaXl:lk,container:sk,"slide-down":"_slide-down_1r1s8_1"},ck=()=>k(qh,{as:"nav",className:uk.container,children:ne(aa,{children:[ne(Sn,{gap:4,sx:{marginRight:4},children:[k(FS,{}),k(Ns,{size:35})]}),k(rk,{}),ne(Sn,{gap:4,sx:{marginLeft:"auto"},children:[k(Ns,{size:35}),k(QS,{})]})]})}),dk="576",fk="768",pk="992",hk="1200",gk="_container_qevh6_9",mk="_version_qevh6_20",vk="_company_qevh6_26",yk="_logo_qevh6_40",xk="_product_qevh6_44",wk="_language_qevh6_50",Sk="_loaderContainer_qevh6_58",kk="_box_qevh6_69",bk="_loader_qevh6_58",It={mediaSm:dk,mediaMd:fk,mediaLg:pk,mediaXl:hk,container:gk,version:mk,company:vk,logo:yk,product:xk,language:wk,loaderContainer:Sk,box:kk,loader:bk},$k=()=>k("main",{className:It.container,children:ne(Sn,{direction:"column",gap:4*5,children:[ne("section",{children:[ne(Sn,{align:"flex-end",children:[k("p",{className:It.company,children:"Meta"}),k(Lr,{className:It.logo,src:Ag,alt:"react logo"})]}),ne("p",{className:It.product,children:["React",k("span",{className:It.language,children:"JS"})]}),k("p",{className:It.version,children:"Developer"})]}),ne("section",{className:It.loaderContainer,children:[k("div",{className:It.box}),k("div",{className:It.box}),k("div",{className:It.box})]})]})}),Ck="576",Ak="768",Ek="992",Rk="1200",Lk="_container_bbik7_15",Pk="_fadeIn_bbik7_22",Tk="_main_bbik7_30",mi={mediaSm:Ck,mediaMd:Ak,mediaLg:Ek,mediaXl:Rk,container:Lk,fadeIn:Pk,"fade-in":"_fade-in_bbik7_1",main:Tk},Nk=y1(2500,4e3);function Dk(){const[e,t]=w.exports.useState(!0);return w.exports.useEffect(()=>{const n=setTimeout(()=>{t(!1),document.body.setAttribute("data-loading","false")},Nk);return()=>clearTimeout(n)},[]),e?k("div",{className:mi.container,children:k($k,{})}):ne("div",{className:[mi.container,mi.fadeIn].join(" "),children:[k(ck,{}),k("main",{className:mi.main,children:k(gy,{})})]})}const Ok="/assets/pixelated.6c5743a7.png",Ik="/assets/pixelated_c.e5845aaa.png";function _k(e){const[t,n]=w.exports.useState(e||0);return{count:t,increment:()=>n(a=>a+1),decrement:()=>n(a=>a-1),reset:()=>n(e||0),setCount:n}}function Mk(){const{count:e,increment:t}=_k(0);return w.exports.useEffect(()=>{const n=setInterval(()=>{t()},150);return()=>clearInterval(n)},[]),k(eg,{size:80,src:e%10?Ok:Ik})}const zk="/assets/bike_in.40753188.gif",Fk="/assets/stationary.8bbe3a48.gif",jk="576",Bk="768",Uk="992",Hk="1200",Vk="_clippy_1juhq_15",Wk={mediaSm:jk,mediaMd:Bk,mediaLg:Uk,mediaXl:Hk,clippy:Vk},Qk=1e3;function Kk(){const[e,t]=w.exports.useState(!1),[n,r]=w.exports.useState(zk);return w.exports.useEffect(()=>{const o=setTimeout(()=>t(!0),Qk);return()=>clearTimeout(o)},[]),w.exports.useEffect(()=>{const o=setTimeout(()=>r(Fk),3500);return e||clearTimeout(o),()=>clearTimeout(o)},[e]),e?k("img",{src:n,className:Wk.clippy,title:"Clippy",alt:"Microsoft Clippy animation"}):null}const Gk="576",Yk="768",Xk="992",Jk="1200",Zk="_container_osh3m_15",qk={mediaSm:Gk,mediaMd:Yk,mediaLg:Xk,mediaXl:Jk,container:Zk},eb=w.exports.memo(()=>ne(Sn,{wrap:"wrap",gap:24,justify:"space-around",align:"center",className:qk.container,children:[ne(Sn,{align:"center",gap:14,children:[k(Mk,{}),ne(Sn,{direction:"column",children:[k(zs,{bold:!0,variant:"title",children:"Alper Akta\u015F"}),k(zs,{children:"Web Developer"})]})]}),k(Kk,{})]})),tb=xy([{path:"/",element:k(Dk,{}),children:[{path:"/",element:k(eb,{})},{path:"test",element:k("div",{children:"test"})}]}]),nb=g1`
  ${x1}
`,rb=()=>ne(p1,{theme:v1,children:[k(nb,{}),k(hy,{router:tb})]}),ob={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class la{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||ob,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,o){return o&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new la(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new la(this.logger,t)}}var zt=new la;class Va{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(!!this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function no(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});return n.resolve=e,n.reject=t,n}function lf(e){return e==null?"":""+e}function ib(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function ec(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function o(){return!e||typeof e=="string"}const i=typeof t!="string"?[].concat(t):t.split(".");for(;i.length>1;){if(o())return{};const a=r(i.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return o()?{}:{obj:e,k:r(i.shift())}}function sf(e,t,n){const{obj:r,k:o}=ec(e,t,Object);r[o]=n}function ab(e,t,n,r){const{obj:o,k:i}=ec(e,t,Object);o[i]=o[i]||[],r&&(o[i]=o[i].concat(n)),r||o[i].push(n)}function sa(e,t){const{obj:n,k:r}=ec(e,t);if(!!n)return n[r]}function lb(e,t,n){const r=sa(e,n);return r!==void 0?r:sa(t,n)}function Lg(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Lg(e[r],t[r],n):e[r]=t[r]);return e}function ir(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var sb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function ub(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>sb[t]):e}const cb=[" ",",","?","!",";"];function db(e,t,n){t=t||"",n=n||"";const r=cb.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const o=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let i=!o.test(e);if(!i){const a=e.indexOf(n);a>0&&!o.test(e.substring(0,a))&&(i=!0)}return i}function ua(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let o=e;for(let i=0;i<r.length;++i){if(!o||typeof o[r[i]]=="string"&&i+1<r.length)return;if(o[r[i]]===void 0){let a=2,l=r.slice(i,i+a).join(n),s=o[l];for(;s===void 0&&r.length>i+a;)a++,l=r.slice(i,i+a).join(n),s=o[l];if(s===void 0)return;if(s===null)return null;if(t.endsWith(l)){if(typeof s=="string")return s;if(l&&typeof s[l]=="string")return s[l]}const u=r.slice(i+a).join(n);return u?ua(s,u,n):void 0}o=o[r[i]]}return o}function ca(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class uf extends Va{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,a=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let l=[t,n];r&&typeof r!="string"&&(l=l.concat(r)),r&&typeof r=="string"&&(l=l.concat(i?r.split(i):r)),t.indexOf(".")>-1&&(l=t.split("."));const s=sa(this.data,l);return s||!a||typeof r!="string"?s:ua(this.data&&this.data[t]&&this.data[t][n],r,i)}addResource(t,n,r,o){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=[t,n];r&&(l=l.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(l=t.split("."),o=n,n=l[1]),this.addNamespaces(n),sf(this.data,l,o),i.silent||this.emit("added",t,n,r,o)}addResources(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const i in r)(typeof r[i]=="string"||Object.prototype.toString.apply(r[i])==="[object Array]")&&this.addResource(t,n,i,r[i],{silent:!0});o.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,o,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},l=[t,n];t.indexOf(".")>-1&&(l=t.split("."),o=r,r=n,n=l[1]),this.addNamespaces(n);let s=sa(this.data,l)||{};o?Lg(s,r,i):s={...s,...r},sf(this.data,l,s),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var Pg={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach(i=>{this.processors[i]&&(t=this.processors[i].process(t,n,r,o))}),t}};const cf={};class da extends Va{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),ib(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=zt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let i=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,l=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!db(t,r,o);if(a&&!l){const s=t.match(this.interpolator.nestingRegexp);if(s&&s.length>0)return{key:t,namespaces:i};const u=t.split(r);(r!==o||r===o&&this.options.ns.indexOf(u[0])>-1)&&(i=u.shift()),t=u.join(o)}return typeof i=="string"&&(i=[i]),{key:t,namespaces:i}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(t[t.length-1],n),s=l[l.length-1],u=n.lng||this.language,d=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(d){const y=n.nsSeparator||this.options.nsSeparator;return o?{res:`${s}${y}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:`${s}${y}${a}`}return o?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:a}const f=this.resolve(t,n);let c=f&&f.res;const v=f&&f.usedKey||a,m=f&&f.exactUsedKey||a,x=Object.prototype.toString.apply(c),b=["[object Number]","[object Function]","[object RegExp]"],h=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&c&&(typeof c!="string"&&typeof c!="boolean"&&typeof c!="number")&&b.indexOf(x)<0&&!(typeof h=="string"&&x==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const y=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,c,{...n,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return o?(f.res=y,f.usedParams=this.getUsedParamsDetails(n),f):y}if(i){const y=x==="[object Array]",$=y?[]:{},A=y?m:v;for(const P in c)if(Object.prototype.hasOwnProperty.call(c,P)){const M=`${A}${i}${P}`;$[P]=this.translate(M,{...n,joinArrays:!1,ns:l}),$[P]===M&&($[P]=c[P])}c=$}}else if(p&&typeof h=="string"&&x==="[object Array]")c=c.join(h),c&&(c=this.extendTranslation(c,t,n,r));else{let y=!1,$=!1;const A=n.count!==void 0&&typeof n.count!="string",P=da.hasDefaultValue(n),M=A?this.pluralResolver.getSuffix(u,n.count,n):"",X=n.ordinal&&A?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",U=n[`defaultValue${M}`]||n[`defaultValue${X}`]||n.defaultValue;!this.isValidLookup(c)&&P&&(y=!0,c=U),this.isValidLookup(c)||($=!0,c=a);const ie=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&$?void 0:c,ue=P&&U!==c&&this.options.updateMissing;if($||y||ue){if(this.logger.log(ue?"updateKey":"missingKey",u,s,a,ue?U:c),i){const se=this.resolve(a,{...n,keySeparator:!1});se&&se.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ee=[];const re=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&re&&re[0])for(let se=0;se<re.length;se++)ee.push(re[se]);else this.options.saveMissingTo==="all"?ee=this.languageUtils.toResolveHierarchy(n.lng||this.language):ee.push(n.lng||this.language);const ke=(se,E,H)=>{const Y=P&&H!==c?H:ie;this.options.missingKeyHandler?this.options.missingKeyHandler(se,s,E,Y,ue,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(se,s,E,Y,ue,n),this.emit("missingKey",se,s,E,c)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?ee.forEach(se=>{this.pluralResolver.getSuffixes(se,n).forEach(E=>{ke([se],a+E,n[`defaultValue${E}`]||U)})}):ke(ee,a,U))}c=this.extendTranslation(c,t,n,f,r),$&&c===a&&this.options.appendNamespaceToMissingKey&&(c=`${s}:${a}`),($||y)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?c=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}:${a}`:a,y?c:void 0):c=this.options.parseMissingKeyHandler(c))}return o?(f.res=c,f.usedParams=this.getUsedParamsDetails(n),f):c}extendTranslation(t,n,r,o,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(u){const c=t.match(this.interpolator.nestingRegexp);d=c&&c.length}let f=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),t=this.interpolator.interpolate(t,f,r.lng||this.language,r),u){const c=t.match(this.interpolator.nestingRegexp),v=c&&c.length;d<v&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(r.lng=o.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var c=arguments.length,v=new Array(c),m=0;m<c;m++)v[m]=arguments[m];return i&&i[0]===v[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`),null):a.translate(...v,n)},r)),r.interpolation&&this.interpolator.reset()}const l=r.postProcess||this.options.postProcess,s=typeof l=="string"?[l]:l;return t!=null&&s&&s.length&&r.applyPostProcessor!==!1&&(t=Pg.handle(s,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,i,a,l;return typeof t=="string"&&(t=[t]),t.forEach(s=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(s,n),d=u.key;o=d;let f=u.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const c=n.count!==void 0&&typeof n.count!="string",v=c&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),m=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",x=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(b=>{this.isValidLookup(r)||(l=b,!cf[`${x[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(l)&&(cf[`${x[0]}-${b}`]=!0,this.logger.warn(`key "${o}" for languages "${x.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(h=>{if(this.isValidLookup(r))return;a=h;const p=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,d,h,b,n);else{let y;c&&(y=this.pluralResolver.getSuffix(h,n.count,n));const $=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(p.push(d+y),n.ordinal&&y.indexOf(A)===0&&p.push(d+y.replace(A,this.options.pluralSeparator)),v&&p.push(d+$)),m){const P=`${d}${this.options.contextSeparator}${n.context}`;p.push(P),c&&(p.push(P+y),n.ordinal&&y.indexOf(A)===0&&p.push(P+y.replace(A,this.options.pluralSeparator)),v&&p.push(P+$))}}let g;for(;g=p.pop();)this.isValidLookup(r)||(i=g,r=this.getResource(h,b,g,n))}))})}),{res:r,usedKey:o,exactUsedKey:i,usedLng:a,usedNS:l}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,o):this.resourceStore.getResource(t,n,r,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&typeof t.replace!="string";let o=r?t.replace:t;if(r&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const i of n)delete o[i]}return o}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function Al(e){return e.charAt(0).toUpperCase()+e.slice(1)}class df{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=zt.create("languageUtils")}getScriptPartFromCode(t){if(t=ca(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=ca(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(o=>o.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Al(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Al(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=Al(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(i=>{if(i===o)return i;if(!(i.indexOf("-")<0&&o.indexOf("-")<0)&&i.indexOf(o)===0)return i})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],i=a=>{!a||(this.isSupportedCode(a)?o.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(t))):typeof t=="string"&&i(this.formatLanguageCode(t)),r.forEach(a=>{o.indexOf(a)<0&&i(this.formatLanguageCode(a))}),o}}let fb=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],pb={1:function(e){return Number(e>1)},2:function(e){return Number(e!=1)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)},7:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(e==1?0:e==2?1:e!=8&&e!=11?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(e==1?0:e==2?1:e<7?2:e<11?3:4)},11:function(e){return Number(e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(e!==0)},14:function(e){return Number(e==1?0:e==2?1:e==3?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:e!==0?1:2)},17:function(e){return Number(e==1||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(e==0?0:e==1?1:2)},19:function(e){return Number(e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(e==1?0:e==0||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3)}};const hb=["v1","v2","v3"],gb=["v4"],ff={zero:0,one:1,two:2,few:3,many:4,other:5};function mb(){const e={};return fb.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:pb[t.fc]}})}),e}class vb{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=zt.create("pluralResolver"),(!this.options.compatibilityJSON||gb.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=mb()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(ca(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(o=>`${n}${o}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((o,i)=>ff[o]-ff[i]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):r.numbers.map(o=>this.getSuffix(t,o,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,r);return o?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:this.getSuffixRetroCompatible(o,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let o=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const i=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:i():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?i():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!hb.includes(this.options.compatibilityJSON)}}function pf(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,i=lb(e,t,n);return!i&&o&&typeof n=="string"&&(i=ua(e,n,r),i===void 0&&(i=ua(t,n,r))),i}class yb{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=zt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:ub,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?ir(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?ir(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?ir(n.nestingPrefix):n.nestingPrefixEscaped||ir("$t("),this.nestingSuffix=n.nestingSuffix?ir(n.nestingSuffix):n.nestingSuffixEscaped||ir(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,o){let i,a,l;const s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(m){return m.replace(/\$/g,"$$$$")}const d=m=>{if(m.indexOf(this.formatSeparator)<0){const p=pf(n,s,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...o,...n,interpolationkey:m}):p}const x=m.split(this.formatSeparator),b=x.shift().trim(),h=x.join(this.formatSeparator).trim();return this.format(pf(n,s,b,this.options.keySeparator,this.options.ignoreJSONStructure),h,r,{...o,...n,interpolationkey:b})};this.resetRegExp();const f=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,c=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>u(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?u(this.escape(m)):u(m)}].forEach(m=>{for(l=0;i=m.regex.exec(t);){const x=i[1].trim();if(a=d(x),a===void 0)if(typeof f=="function"){const h=f(t,i,o);a=typeof h=="string"?h:""}else if(o&&Object.prototype.hasOwnProperty.call(o,x))a="";else if(c){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=lf(a));const b=m.safeValue(a);if(t=t.replace(i[0],b),c?(m.regex.lastIndex+=a.length,m.regex.lastIndex-=i[0].length):m.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,i,a;function l(s,u){const d=this.nestingOptionsSeparator;if(s.indexOf(d)<0)return s;const f=s.split(new RegExp(`${d}[ ]*{`));let c=`{${f[1]}`;s=f[0],c=this.interpolate(c,a);const v=c.match(/'/g),m=c.match(/"/g);(v&&v.length%2===0&&!m||m.length%2!==0)&&(c=c.replace(/'/g,'"'));try{a=JSON.parse(c),u&&(a={...u,...a})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${s}`,x),`${s}${d}${c}`}return delete a.defaultValue,s}for(;o=this.nestingRegexp.exec(t);){let s=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const d=o[1].split(this.formatSeparator).map(f=>f.trim());o[1]=d.shift(),s=d,u=!0}if(i=n(l.call(this,o[1].trim(),a),a),i&&o[0]===t&&typeof i!="string")return i;typeof i!="string"&&(i=lf(i)),i||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),i=""),u&&(i=s.reduce((d,f)=>this.format(d,f,r.lng,{...r,interpolationkey:o[1].trim()}),i.trim())),t=t.replace(o[0],i),this.regexp.lastIndex=0}return t}}function xb(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);t==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(a=>{if(!a)return;const[l,...s]=a.split(":"),u=s.join(":").trim().replace(/^'+|'+$/g,"");n[l.trim()]||(n[l.trim()]=u),u==="false"&&(n[l.trim()]=!1),u==="true"&&(n[l.trim()]=!0),isNaN(u)||(n[l.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function ar(e){const t={};return function(r,o,i){const a=o+JSON.stringify(i);let l=t[a];return l||(l=e(ca(o),i),t[a]=l),l(r)}}class wb{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=zt.create("formatter"),this.options=t,this.formats={number:ar((n,r)=>{const o=new Intl.NumberFormat(n,{...r});return i=>o.format(i)}),currency:ar((n,r)=>{const o=new Intl.NumberFormat(n,{...r,style:"currency"});return i=>o.format(i)}),datetime:ar((n,r)=>{const o=new Intl.DateTimeFormat(n,{...r});return i=>o.format(i)}),relativetime:ar((n,r)=>{const o=new Intl.RelativeTimeFormat(n,{...r});return i=>o.format(i,r.range||"day")}),list:ar((n,r)=>{const o=new Intl.ListFormat(n,{...r});return i=>o.format(i)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=ar(n)}format(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((l,s)=>{const{formatName:u,formatOptions:d}=xb(s);if(this.formats[u]){let f=l;try{const c=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},v=c.locale||c.lng||o.locale||o.lng||r;f=this.formats[u](l,v,{...d,...o,...c})}catch(c){this.logger.warn(c)}return f}else this.logger.warn(`there was no format function for ${u}`);return l},t)}}function Sb(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class kb extends Va{constructor(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=zt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,o.backend,o)}queueLoad(t,n,r,o){const i={},a={},l={},s={};return t.forEach(u=>{let d=!0;n.forEach(f=>{const c=`${u}|${f}`;!r.reload&&this.store.hasResourceBundle(u,f)?this.state[c]=2:this.state[c]<0||(this.state[c]===1?a[c]===void 0&&(a[c]=!0):(this.state[c]=1,d=!1,a[c]===void 0&&(a[c]=!0),i[c]===void 0&&(i[c]=!0),s[f]===void 0&&(s[f]=!0)))}),d||(l[u]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(s)}}loaded(t,n,r){const o=t.split("|"),i=o[0],a=o[1];n&&this.emit("failedLoading",i,a,n),r&&this.store.addResourceBundle(i,a,r),this.state[t]=n?-1:2;const l={};this.queue.forEach(s=>{ab(s.loaded,[i],a),Sb(s,t),n&&s.errors.push(n),s.pendingCount===0&&!s.done&&(Object.keys(s.loaded).forEach(u=>{l[u]||(l[u]={});const d=s.loaded[u];d.length&&d.forEach(f=>{l[u][f]===void 0&&(l[u][f]=!0)})}),s.done=!0,s.errors.length?s.callback(s.errors):s.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(s=>!s.done)}read(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:o,wait:i,callback:a});return}this.readingCalls++;const l=(u,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(u&&d&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,o+1,i*2,a)},i);return}a(u,d)},s=this.backend[r].bind(this.backend);if(s.length===2){try{const u=s(t,n);u&&typeof u.then=="function"?u.then(d=>l(null,d)).catch(l):l(null,u)}catch(u){l(u)}return}return s(t,n,l)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const i=this.queueLoad(t,n,r,o);if(!i.toLoad.length)return i.pending.length||o(),null;i.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),o=r[0],i=r[1];this.read(o,i,"read",void 0,void 0,(a,l)=>{a&&this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`,a),!a&&l&&this.logger.log(`${n}loaded namespace ${i} for language ${o}`,l),this.loaded(t,a,l)})}saveMissing(t,n,r,o,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const s={...a,isUpdate:i},u=this.backend.create.bind(this.backend);if(u.length<6)try{let d;u.length===5?d=u(t,n,r,o,s):d=u(t,n,r,o),d&&typeof d.then=="function"?d.then(f=>l(null,f)).catch(l):l(null,d)}catch(d){l(d)}else u(t,n,r,o,l,s)}!t||!t[0]||this.store.addResource(t[0],n,r,o)}}}function hf(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(o=>{n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function gf(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function vi(){}function bb(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class jo extends Va{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=gf(t),this.services={},this.logger=zt,this.modules={external:[]},bb(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=hf();this.options={...o,...this.options,...gf(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function i(d){return d?typeof d=="function"?new d:d:null}if(!this.options.isClone){this.modules.logger?zt.init(i(this.modules.logger),this.options):zt.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=wb);const f=new df(this.options);this.store=new uf(this.options.resources,this.options);const c=this.services;c.logger=zt,c.resourceStore=this.store,c.languageUtils=f,c.pluralResolver=new vb(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(c.formatter=i(d),c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new yb(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new kb(i(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",function(v){for(var m=arguments.length,x=new Array(m>1?m-1:0),b=1;b<m;b++)x[b-1]=arguments[b];t.emit(v,...x)}),this.modules.languageDetector&&(c.languageDetector=i(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=i(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new da(this.services,this.options),this.translator.on("*",function(v){for(var m=arguments.length,x=new Array(m>1?m-1:0),b=1;b<m;b++)x[b-1]=arguments[b];t.emit(v,...x)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,r||(r=vi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return t.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return t.store[d](...arguments),t}});const s=no(),u=()=>{const d=(f,c)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(c),r(f,c)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),s}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vi;const o=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const i=[],a=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(u=>{u!=="cimode"&&i.indexOf(u)<0&&i.push(u)})};o?a(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(s=>a(s)),this.options.preload&&this.options.preload.forEach(l=>a(l)),this.services.backendConnector.load(i,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(l)})}else r(null)}reloadResources(t,n,r){const o=no();return t||(t=this.languages),n||(n=this.options.ns),r||(r=vi),this.services.backendConnector.reload(t,n,i=>{o.resolve(),r(i)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Pg.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const o=no();this.emit("languageChanging",t);const i=s=>{this.language=s,this.languages=this.services.languageUtils.toResolveHierarchy(s),this.resolvedLanguage=void 0,this.setResolvedLanguage(s)},a=(s,u)=>{u?(i(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),n&&n(s,function(){return r.t(...arguments)})},l=s=>{!t&&!s&&this.services.languageDetector&&(s=[]);const u=typeof s=="string"?s:this.services.languageUtils.getBestMatchFromCodes(s);u&&(this.language||i(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,d=>{a(d,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(t),o}getFixedT(t,n,r){var o=this;const i=function(a,l){let s;if(typeof l!="object"){for(var u=arguments.length,d=new Array(u>2?u-2:0),f=2;f<u;f++)d[f-2]=arguments[f];s=o.options.overloadTranslationOptionHandler([a,l].concat(d))}else s={...l};s.lng=s.lng||i.lng,s.lngs=s.lngs||i.lngs,s.ns=s.ns||i.ns,s.keyPrefix=s.keyPrefix||r||i.keyPrefix;const c=o.options.keySeparator||".";let v;return s.keyPrefix&&Array.isArray(a)?v=a.map(m=>`${s.keyPrefix}${c}${m}`):v=s.keyPrefix?`${s.keyPrefix}${c}${a}`:a,o.t(v,s)};return typeof t=="string"?i.lng=t:i.lngs=t,i.ns=n,i.keyPrefix=r,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const u=this.services.backendConnector.state[`${l}|${s}`];return u===-1||u===2};if(n.precheck){const l=n.precheck(this,a);if(l!==void 0)return l}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!o||a(i,t)))}loadNamespaces(t,n){const r=no();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=no();typeof t=="string"&&(t=[t]);const o=this.options.preload||[],i=t.filter(a=>o.indexOf(a)<0);return i.length?(this.options.preload=o.concat(i),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new df(hf());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new jo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vi;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},i=new jo(o);return(t.debug!==void 0||t.prefix!==void 0)&&(i.logger=i.logger.clone(t)),["store","services","language"].forEach(l=>{i[l]=this[l]}),i.services={...this.services},i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},r&&(i.store=new uf(this.store.data,o),i.services.resourceStore=i.store),i.translator=new da(i.services,o),i.translator.on("*",function(l){for(var s=arguments.length,u=new Array(s>1?s-1:0),d=1;d<s;d++)u[d-1]=arguments[d];i.emit(l,...u)}),i.init(o,n),i.translator.options=o,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ze=jo.createInstance();Ze.createInstance=jo.createInstance;Ze.createInstance;Ze.dir;Ze.init;Ze.loadResources;Ze.reloadResources;Ze.use;Ze.changeLanguage;Ze.getFixedT;Ze.t;Ze.exists;Ze.setDefaultNamespace;Ze.hasLoadedNamespace;Ze.loadNamespaces;Ze.loadLanguages;var Fs=(e=>(e.TURKISH="tr",e.ENGLISH="en",e))(Fs||{});const $b={"go-to-page":"Web sayfas\u0131na git"},Cb="Y\xFCkleniyor",Ab={btn:$b,loading:Cb},Eb={"about-current-job":"\u015Eu anda, Etstur'da Yaz\u0131l\u0131m Geli\u015Ftirme Uzman Yard\u0131mc\u0131s\u0131 olarak \xE7al\u0131\u015F\u0131yorum. \u015Eirketin React bazl\u0131 B2B web uygulamar\u0131n\u0131n geli\u015Ftirilmesinde rol al\u0131yorum.","about-experience":"Yaz\u0131l\u0131m geli\u015Ftirmeye olduk\xE7a ilgi duydu\u011Fum i\xE7in, hedefledi\u011Fim kariyere \xF6\u011Frencilik d\xF6nemimde online i\xE7erikler t\xFCketerek ile ve HackerRank vb. sitelerde testler \xE7\xF6zerek yat\u0131r\u0131m yapt\u0131m.","about-me":"Ege \xDCniversitesi, \u0130ngiliz Dili ve Edebiyat\u0131 mezunuyum.","about-preferences":"Genel olarak web uygulamalar\u0131n\u0131 TypeScript ve React.js ile geli\u015Ftirmeyi tercih ediyorum. Geli\u015Ftirdi\u011Fim uygulamalar\u0131 ise Vitest ve react-testing-library ile, bazen de projeye g\xF6re Playwright ile de test ediyorum."},Rb={"daily-space-palette":"Daily Space Palette, NASA'n\u0131n API i\xE7eri\u011Fini kullanarak G\xFCn\xFCn Astronomi Foto\u011Fraf\u0131'n\u0131 g\xF6steriyor. Ek olarak, gelen bu foto\u011Fraftaki renkleri analiz ederek \xE7e\u015Fitli renk paletleri olu\u015Fturuyor.",introduction:Eb},Lb={logout:"\xC7\u0131k\u0131\u015F",start:"Ba\u015Flat"},Pb={hello:"Merhaba.txt",projects:"Projeler.exe"},Tb={nav:Lb,window:Pb},Nb={"go-to-page":"Go to webpage"},Db="Loading",Ob={btn:Nb,loading:Db},Ib={"about-current-job":"Currently, I work at Etstur as a Software Development Assistant and I participate in developing React-based B2B web applications.","about-experience":"Because of my profound interest in software development, I studied software through online content and solved test cases on websites like HackerRank to invest into the career that I desired to have during my studentship.","about-me":"I am an English Language and Literature graduate from Ege University.","about-preferences":"I generally prefer developing apps with TypeScript and React. Additionally, I write tests using Vitest and react-testing-library, and depending on the project I may use Playwright as well."},_b={"daily-space-palette":"Daily Space Palette is a web project that fetches the Astronomy Picture of the Day using NASA's API, then generates a color palette from that picture.",introduction:Ib},Mb={logout:"Logout",start:"Start"},zb={hello:"Hello.txt",projects:"Projects.exe"},Fb={nav:Mb,window:zb},Tg=["general","menu","content"],jb=Tg[0],Bb={tr:{general:Ab,content:Rb,menu:Tb},en:{general:Ob,content:_b,menu:Fb}},Ub={lng:Fs.TURKISH,fallbackLng:Object.values(Fs),debug:!1,resources:Bb,ns:Tg,defaultNS:jb};Ze.use(fS).init(Ub);Rl.createRoot(document.getElementById("root")).render(k(Rt.StrictMode,{children:k(rb,{})}));export{$1 as A,Xn as B,Tx as F,Lr as S,aa as T,vg as W,of as _,ne as a,mg as b,gg as c,zs as d,Sn as e,Vs as f,Hb as g,Bw as h,Iw as i,k as j,Mw as k,w as r,qu as u};
