function k0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $p={exports:{}},Bo={},jp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki=Symbol.for("react.element"),b0=Symbol.for("react.portal"),C0=Symbol.for("react.fragment"),S0=Symbol.for("react.strict_mode"),E0=Symbol.for("react.profiler"),$0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),P0=Symbol.for("react.forward_ref"),A0=Symbol.for("react.suspense"),_0=Symbol.for("react.memo"),T0=Symbol.for("react.lazy"),Jc=Symbol.iterator;function R0(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var Pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ap=Object.assign,_p={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=_p,this.updater=n||Pp}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tp(){}Tp.prototype=Mr.prototype;function ju(e,t,n){this.props=e,this.context=t,this.refs=_p,this.updater=n||Pp}var Pu=ju.prototype=new Tp;Pu.constructor=ju;Ap(Pu,Mr.prototype);Pu.isPureReactComponent=!0;var Zc=Array.isArray,Rp=Object.prototype.hasOwnProperty,Au={current:null},Op={key:!0,ref:!0,__self:!0,__source:!0};function Np(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Rp.call(t,r)&&!Op.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ki,type:e,key:a,ref:o,props:i,_owner:Au.current}}function O0(e,t){return{$$typeof:Ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _u(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ki}function N0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qc=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?N0(""+e.key):t.toString(36)}function Ia(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ki:case b0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+wl(o,0):r,Zc(i)?(n="",e!=null&&(n=e.replace(qc,"$&/")+"/"),Ia(i,t,n,"",function(c){return c})):i!=null&&(_u(i)&&(i=O0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Zc(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+wl(a,l);o+=Ia(a,t,n,s,i)}else if(s=R0(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+wl(a,l++),o+=Ia(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function oa(e,t,n){if(e==null)return e;var r=[],i=0;return Ia(e,r,"","",function(a){return t.call(n,a,i++)}),r}function L0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},za={transition:null},I0={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:za,ReactCurrentOwner:Au};function Lp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:oa,forEach:function(e,t,n){oa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oa(e,function(){t++}),t},toArray:function(e){return oa(e,function(t){return t})||[]},only:function(e){if(!_u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Mr;U.Fragment=C0;U.Profiler=E0;U.PureComponent=ju;U.StrictMode=S0;U.Suspense=A0;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I0;U.act=Lp;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ap({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Au.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Rp.call(t,s)&&!Op.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ki,type:e.type,key:i,ref:a,props:r,_owner:o}};U.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$0,_context:e},e.Consumer=e};U.createElement=Np;U.createFactory=function(e){var t=Np.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:P0,render:e}};U.isValidElement=_u;U.lazy=function(e){return{$$typeof:T0,_payload:{_status:-1,_result:e},_init:L0}};U.memo=function(e,t){return{$$typeof:_0,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=za.transition;za.transition={};try{e()}finally{za.transition=t}};U.unstable_act=Lp;U.useCallback=function(e,t){return Pe.current.useCallback(e,t)};U.useContext=function(e){return Pe.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};U.useEffect=function(e,t){return Pe.current.useEffect(e,t)};U.useId=function(){return Pe.current.useId()};U.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Pe.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};U.useRef=function(e){return Pe.current.useRef(e)};U.useState=function(e){return Pe.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Pe.current.useTransition()};U.version="18.3.1";jp.exports=U;var C=jp.exports;const ve=Ep(C),z0=k0({__proto__:null,default:ve},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=C,M0=Symbol.for("react.element"),F0=Symbol.for("react.fragment"),B0=Object.prototype.hasOwnProperty,U0=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W0={key:!0,ref:!0,__self:!0,__source:!0};function Ip(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)B0.call(t,r)&&!W0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:M0,type:e,key:a,ref:o,props:i,_owner:U0.current}}Bo.Fragment=F0;Bo.jsx=Ip;Bo.jsxs=Ip;$p.exports=Bo;var u=$p.exports,is={},zp={exports:{}},We={},Dp={exports:{}},Mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,A){var T=R.length;R.push(A);e:for(;0<T;){var D=T-1>>>1,M=R[D];if(0<i(M,A))R[D]=A,R[T]=M,T=D;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var A=R[0],T=R.pop();if(T!==A){R[0]=T;e:for(var D=0,M=R.length,he=M>>>1;D<he;){var we=2*(D+1)-1,mt=R[we],Ie=we+1,Et=R[Ie];if(0>i(mt,T))Ie<M&&0>i(Et,mt)?(R[D]=Et,R[Ie]=T,D=Ie):(R[D]=mt,R[we]=T,D=we);else if(Ie<M&&0>i(Et,T))R[D]=Et,R[Ie]=T,D=Ie;else break e}}return A}function i(R,A){var T=R.sortIndex-A.sortIndex;return T!==0?T:R.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],c=[],d=1,p=null,g=3,x=!1,k=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=R)r(c),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(c)}}function b(R){if(w=!1,m(R),!k)if(n(s)!==null)k=!0,pt($);else{var A=n(c);A!==null&&nt(b,A.startTime-R)}}function $(R,A){k=!1,w&&(w=!1,h(y),y=-1),x=!0;var T=g;try{for(m(A),p=n(s);p!==null&&(!(p.expirationTime>A)||R&&!ae());){var D=p.callback;if(typeof D=="function"){p.callback=null,g=p.priorityLevel;var M=D(p.expirationTime<=A);A=e.unstable_now(),typeof M=="function"?p.callback=M:p===n(s)&&r(s),m(A)}else r(s);p=n(s)}if(p!==null)var he=!0;else{var we=n(c);we!==null&&nt(b,we.startTime-A),he=!1}return he}finally{p=null,g=T,x=!1}}var E=!1,S=null,y=-1,L=5,z=-1;function ae(){return!(e.unstable_now()-z<L)}function Ye(){if(S!==null){var R=e.unstable_now();z=R;var A=!0;try{A=S(!0,R)}finally{A?St():(E=!1,S=null)}}else E=!1}var St;if(typeof f=="function")St=function(){f(Ye)};else if(typeof MessageChannel<"u"){var Kn=new MessageChannel,Ge=Kn.port2;Kn.port1.onmessage=Ye,St=function(){Ge.postMessage(null)}}else St=function(){j(Ye,0)};function pt(R){S=R,E||(E=!0,St())}function nt(R,A){y=j(function(){R(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,pt($))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var T=g;g=A;try{return R()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,A){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var T=g;g=R;try{return A()}finally{g=T}},e.unstable_scheduleCallback=function(R,A,T){var D=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?D+T:D):T=D,R){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=T+M,R={id:d++,callback:A,priorityLevel:R,startTime:T,expirationTime:M,sortIndex:-1},T>D?(R.sortIndex=T,t(c,R),n(s)===null&&R===n(c)&&(w?(h(y),y=-1):w=!0,nt(b,T-D))):(R.sortIndex=M,t(s,R),k||x||(k=!0,pt($))),R},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(R){var A=g;return function(){var T=g;g=A;try{return R.apply(this,arguments)}finally{g=T}}}})(Mp);Dp.exports=Mp;var V0=Dp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0=C,Ue=V0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,ki={};function Vn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(ki[e]=t,e=0;e<t.length;e++)Fp.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),as=Object.prototype.hasOwnProperty,Y0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ed={},td={};function G0(e){return as.call(td,e)?!0:as.call(ed,e)?!1:Y0.test(e)?td[e]=!0:(ed[e]=!0,!1)}function Q0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K0(e,t,n,r){if(t===null||typeof t>"u"||Q0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function Ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tu,Ru);xe[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tu,Ru);xe[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tu,Ru);xe[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ou(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K0(t,n,i,r)&&(n=null),r||i===null?G0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Nu=Symbol.for("react.strict_mode"),os=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),Lu=Symbol.for("react.forward_ref"),ls=Symbol.for("react.suspense"),ss=Symbol.for("react.suspense_list"),Iu=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Wp=Symbol.for("react.offscreen"),nd=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=nd&&e[nd]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,kl;function ti(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var bl=!1;function Cl(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ti(e):""}function X0(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function us(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case os:return"Profiler";case Nu:return"StrictMode";case ls:return"Suspense";case ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Up:return(e.displayName||"Context")+".Consumer";case Bp:return(e._context.displayName||"Context")+".Provider";case Lu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Iu:return t=e.displayName||null,t!==null?t:us(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return us(e(t))}catch{}}return null}function J0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return us(t);case 8:return t===Nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Z0(e){var t=Vp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sa(e){e._valueTracker||(e._valueTracker=Z0(e))}function Hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cs(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yp(e,t){t=t.checked,t!=null&&Ou(e,"checked",t,!1)}function ds(e,t){Yp(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fs(e,t.type,n):t.hasOwnProperty("defaultValue")&&fs(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function id(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fs(e,t,n){(t!=="number"||io(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ni=Array.isArray;function gr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ad(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ni(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function Gp(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function od(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ua,Kp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ua.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(e){q0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),li[t]=li[e]})});function Xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||li.hasOwnProperty(e)&&li[e]?(""+t).trim():t+"px"}function Jp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ev=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hs(e,t){if(t){if(ev[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vs=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ys=null,vr=null,yr=null;function ld(e){if(e=Zi(e)){if(typeof ys!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Yo(t),ys(e.stateNode,e.type,t))}}function Zp(e){vr?yr?yr.push(e):yr=[e]:vr=e}function qp(){if(vr){var e=vr,t=yr;if(yr=vr=null,ld(e),t)for(e=0;e<t.length;e++)ld(t[e])}}function em(e,t){return e(t)}function tm(){}var Sl=!1;function nm(e,t,n){if(Sl)return e(t,n);Sl=!0;try{return em(e,t,n)}finally{Sl=!1,(vr!==null||yr!==null)&&(tm(),qp())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var r=Yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var xs=!1;if(Ot)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{xs=!1}function tv(e,t,n,r,i,a,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var si=!1,ao=null,oo=!1,ws=null,nv={onError:function(e){si=!0,ao=e}};function rv(e,t,n,r,i,a,o,l,s){si=!1,ao=null,tv.apply(nv,arguments)}function iv(e,t,n,r,i,a,o,l,s){if(rv.apply(this,arguments),si){if(si){var c=ao;si=!1,ao=null}else throw Error(_(198));oo||(oo=!0,ws=c)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sd(e){if(Hn(e)!==e)throw Error(_(188))}function av(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return sd(i),e;if(a===r)return sd(i),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function im(e){return e=av(e),e!==null?am(e):null}function am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=am(e);if(t!==null)return t;e=e.sibling}return null}var om=Ue.unstable_scheduleCallback,ud=Ue.unstable_cancelCallback,ov=Ue.unstable_shouldYield,lv=Ue.unstable_requestPaint,ie=Ue.unstable_now,sv=Ue.unstable_getCurrentPriorityLevel,Du=Ue.unstable_ImmediatePriority,lm=Ue.unstable_UserBlockingPriority,lo=Ue.unstable_NormalPriority,uv=Ue.unstable_LowPriority,sm=Ue.unstable_IdlePriority,Uo=null,bt=null;function cv(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Uo,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:pv,dv=Math.log,fv=Math.LN2;function pv(e){return e>>>=0,e===0?32:31-(dv(e)/fv|0)|0}var ca=64,da=4194304;function ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function so(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ri(l):(a&=o,a!==0&&(r=ri(a)))}else o=n&~i,o!==0?r=ri(o):a!==0&&(r=ri(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function mv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ut(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=mv(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function um(){var e=ca;return ca<<=1,!(ca&4194240)&&(ca=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function gv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Mu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function cm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dm,Fu,fm,pm,mm,bs=!1,fa=[],en=null,tn=null,nn=null,Si=new Map,Ei=new Map,Qt=[],vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Kr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Zi(t),t!==null&&Fu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yv(e,t,n,r,i){switch(t){case"focusin":return en=Kr(en,e,t,n,r,i),!0;case"dragenter":return tn=Kr(tn,e,t,n,r,i),!0;case"mouseover":return nn=Kr(nn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Si.set(a,Kr(Si.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ei.set(a,Kr(Ei.get(a)||null,e,t,n,r,i)),!0}return!1}function hm(e){var t=Sn(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=rm(n),t!==null){e.blockedOn=t,mm(e.priority,function(){fm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Da(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vs=r,n.target.dispatchEvent(r),vs=null}else return t=Zi(n),t!==null&&Fu(t),e.blockedOn=n,!1;t.shift()}return!0}function dd(e,t,n){Da(e)&&n.delete(t)}function xv(){bs=!1,en!==null&&Da(en)&&(en=null),tn!==null&&Da(tn)&&(tn=null),nn!==null&&Da(nn)&&(nn=null),Si.forEach(dd),Ei.forEach(dd)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,xv)))}function $i(e){function t(i){return Xr(i,e)}if(0<fa.length){Xr(fa[0],e);for(var n=1;n<fa.length;n++){var r=fa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(en!==null&&Xr(en,e),tn!==null&&Xr(tn,e),nn!==null&&Xr(nn,e),Si.forEach(t),Ei.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)hm(n),n.blockedOn===null&&Qt.shift()}var xr=Ft.ReactCurrentBatchConfig,uo=!0;function wv(e,t,n,r){var i=H,a=xr.transition;xr.transition=null;try{H=1,Bu(e,t,n,r)}finally{H=i,xr.transition=a}}function kv(e,t,n,r){var i=H,a=xr.transition;xr.transition=null;try{H=4,Bu(e,t,n,r)}finally{H=i,xr.transition=a}}function Bu(e,t,n,r){if(uo){var i=Cs(e,t,n,r);if(i===null)Ll(e,t,r,co,n),cd(e,r);else if(yv(i,e,t,n,r))r.stopPropagation();else if(cd(e,r),t&4&&-1<vv.indexOf(e)){for(;i!==null;){var a=Zi(i);if(a!==null&&dm(a),a=Cs(e,t,n,r),a===null&&Ll(e,t,r,co,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var co=null;function Cs(e,t,n,r){if(co=null,e=zu(r),e=Sn(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return co=e,null}function gm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sv()){case Du:return 1;case lm:return 4;case lo:case uv:return 16;case sm:return 536870912;default:return 16}default:return 16}}var Xt=null,Uu=null,Ma=null;function vm(){if(Ma)return Ma;var e,t=Uu,n=t.length,r,i="value"in Xt?Xt.value:Xt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ma=i.slice(e,1<r?1-r:void 0)}function Fa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pa(){return!0}function fd(){return!1}function Ve(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?pa:fd,this.isPropagationStopped=fd,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=Ve(Fr),Ji=te({},Fr,{view:0,detail:0}),bv=Ve(Ji),$l,jl,Jr,Wo=te({},Ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?($l=e.screenX-Jr.screenX,jl=e.screenY-Jr.screenY):jl=$l=0,Jr=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),pd=Ve(Wo),Cv=te({},Wo,{dataTransfer:0}),Sv=Ve(Cv),Ev=te({},Ji,{relatedTarget:0}),Pl=Ve(Ev),$v=te({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Ve($v),Pv=te({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Av=Ve(Pv),_v=te({},Fr,{data:0}),md=Ve(_v),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ov[e])?!!t[e]:!1}function Vu(){return Nv}var Lv=te({},Ji,{key:function(e){if(e.key){var t=Tv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?Fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Iv=Ve(Lv),zv=te({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hd=Ve(zv),Dv=te({},Ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Mv=Ve(Dv),Fv=te({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=Ve(Fv),Uv=te({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=Ve(Uv),Vv=[9,13,27,32],Hu=Ot&&"CompositionEvent"in window,ui=null;Ot&&"documentMode"in document&&(ui=document.documentMode);var Hv=Ot&&"TextEvent"in window&&!ui,ym=Ot&&(!Hu||ui&&8<ui&&11>=ui),gd=" ",vd=!1;function xm(e,t){switch(e){case"keyup":return Vv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function Yv(e,t){switch(e){case"compositionend":return wm(t);case"keypress":return t.which!==32?null:(vd=!0,gd);case"textInput":return e=t.data,e===gd&&vd?null:e;default:return null}}function Gv(e,t){if(nr)return e==="compositionend"||!Hu&&xm(e,t)?(e=vm(),Ma=Uu=Xt=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ym&&t.locale!=="ko"?null:t.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qv[e.type]:t==="textarea"}function km(e,t,n,r){Zp(r),t=fo(t,"onChange"),0<t.length&&(n=new Wu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ci=null,ji=null;function Kv(e){Rm(e,0)}function Vo(e){var t=ar(e);if(Hp(t))return e}function Xv(e,t){if(e==="change")return t}var bm=!1;if(Ot){var Al;if(Ot){var _l="oninput"in document;if(!_l){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),_l=typeof xd.oninput=="function"}Al=_l}else Al=!1;bm=Al&&(!document.documentMode||9<document.documentMode)}function wd(){ci&&(ci.detachEvent("onpropertychange",Cm),ji=ci=null)}function Cm(e){if(e.propertyName==="value"&&Vo(ji)){var t=[];km(t,ji,e,zu(e)),nm(Kv,t)}}function Jv(e,t,n){e==="focusin"?(wd(),ci=t,ji=n,ci.attachEvent("onpropertychange",Cm)):e==="focusout"&&wd()}function Zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vo(ji)}function qv(e,t){if(e==="click")return Vo(t)}function e1(e,t){if(e==="input"||e==="change")return Vo(t)}function t1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:t1;function Pi(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!as.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,t){var n=kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function Sm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Em(){for(var e=window,t=io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=io(e.document)}return t}function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function n1(e){var t=Em(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sm(n.ownerDocument.documentElement,n)){if(r!==null&&Yu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=bd(n,a);var o=bd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var r1=Ot&&"documentMode"in document&&11>=document.documentMode,rr=null,Ss=null,di=null,Es=!1;function Cd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Es||rr==null||rr!==io(r)||(r=rr,"selectionStart"in r&&Yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&Pi(di,r)||(di=r,r=fo(Ss,"onSelect"),0<r.length&&(t=new Wu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},Tl={},$m={};Ot&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Ho(e){if(Tl[e])return Tl[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $m)return Tl[e]=t[n];return e}var jm=Ho("animationend"),Pm=Ho("animationiteration"),Am=Ho("animationstart"),_m=Ho("transitionend"),Tm=new Map,Sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){Tm.set(e,t),Vn(t,[e])}for(var Rl=0;Rl<Sd.length;Rl++){var Ol=Sd[Rl],i1=Ol.toLowerCase(),a1=Ol[0].toUpperCase()+Ol.slice(1);vn(i1,"on"+a1)}vn(jm,"onAnimationEnd");vn(Pm,"onAnimationIteration");vn(Am,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(_m,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Ed(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,iv(r,t,void 0,e),e.currentTarget=null}function Rm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Ed(i,l,c),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,c=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Ed(i,l,c),a=s}}}if(oo)throw e=ws,oo=!1,ws=null,e}function G(e,t){var n=t[_s];n===void 0&&(n=t[_s]=new Set);var r=e+"__bubble";n.has(r)||(Om(t,e,2,!1),n.add(r))}function Nl(e,t,n){var r=0;t&&(r|=4),Om(n,e,r,t)}var ha="_reactListening"+Math.random().toString(36).slice(2);function Ai(e){if(!e[ha]){e[ha]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(o1.has(n)||Nl(n,!1,e),Nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ha]||(t[ha]=!0,Nl("selectionchange",!1,t))}}function Om(e,t,n,r){switch(gm(t)){case 1:var i=wv;break;case 4:i=kv;break;default:i=Bu}n=i.bind(null,t,n,e),i=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Sn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}nm(function(){var c=a,d=zu(n),p=[];e:{var g=Tm.get(e);if(g!==void 0){var x=Wu,k=e;switch(e){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":x=Iv;break;case"focusin":k="focus",x=Pl;break;case"focusout":k="blur",x=Pl;break;case"beforeblur":case"afterblur":x=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Mv;break;case jm:case Pm:case Am:x=jv;break;case _m:x=Bv;break;case"scroll":x=bv;break;case"wheel":x=Wv;break;case"copy":case"cut":case"paste":x=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=hd}var w=(t&4)!==0,j=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var f=c,m;f!==null;){m=f;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,h!==null&&(b=Ci(f,h),b!=null&&w.push(_i(f,b,m)))),j)break;f=f.return}0<w.length&&(g=new x(g,k,null,n,d),p.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==vs&&(k=n.relatedTarget||n.fromElement)&&(Sn(k)||k[Nt]))break e;if((x||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=c,k=k?Sn(k):null,k!==null&&(j=Hn(k),k!==j||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=c),x!==k)){if(w=pd,b="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=hd,b="onPointerLeave",h="onPointerEnter",f="pointer"),j=x==null?g:ar(x),m=k==null?g:ar(k),g=new w(b,f+"leave",x,n,d),g.target=j,g.relatedTarget=m,b=null,Sn(d)===c&&(w=new w(h,f+"enter",k,n,d),w.target=m,w.relatedTarget=j,b=w),j=b,x&&k)t:{for(w=x,h=k,f=0,m=w;m;m=Xn(m))f++;for(m=0,b=h;b;b=Xn(b))m++;for(;0<f-m;)w=Xn(w),f--;for(;0<m-f;)h=Xn(h),m--;for(;f--;){if(w===h||h!==null&&w===h.alternate)break t;w=Xn(w),h=Xn(h)}w=null}else w=null;x!==null&&$d(p,g,x,w,!1),k!==null&&j!==null&&$d(p,j,k,w,!0)}}e:{if(g=c?ar(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var $=Xv;else if(yd(g))if(bm)$=e1;else{$=Zv;var E=Jv}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&($=qv);if($&&($=$(e,c))){km(p,$,n,d);break e}E&&E(e,g,c),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&fs(g,"number",g.value)}switch(E=c?ar(c):window,e){case"focusin":(yd(E)||E.contentEditable==="true")&&(rr=E,Ss=c,di=null);break;case"focusout":di=Ss=rr=null;break;case"mousedown":Es=!0;break;case"contextmenu":case"mouseup":case"dragend":Es=!1,Cd(p,n,d);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":Cd(p,n,d)}var S;if(Hu)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else nr?xm(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(ym&&n.locale!=="ko"&&(nr||y!=="onCompositionStart"?y==="onCompositionEnd"&&nr&&(S=vm()):(Xt=d,Uu="value"in Xt?Xt.value:Xt.textContent,nr=!0)),E=fo(c,y),0<E.length&&(y=new md(y,e,null,n,d),p.push({event:y,listeners:E}),S?y.data=S:(S=wm(n),S!==null&&(y.data=S)))),(S=Hv?Yv(e,n):Gv(e,n))&&(c=fo(c,"onBeforeInput"),0<c.length&&(d=new md("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=S))}Rm(p,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ci(e,n),a!=null&&r.unshift(_i(e,a,i)),a=Ci(e,t),a!=null&&r.push(_i(e,a,i))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $d(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=Ci(n,a),s!=null&&o.unshift(_i(n,s,l))):i||(s=Ci(n,a),s!=null&&o.push(_i(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var l1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function jd(e){return(typeof e=="string"?e:""+e).replace(l1,`
`).replace(s1,"")}function ga(e,t,n){if(t=jd(t),jd(e)!==t&&n)throw Error(_(425))}function po(){}var $s=null,js=null;function Ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var As=typeof setTimeout=="function"?setTimeout:void 0,u1=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,c1=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(e){return Pd.resolve(null).then(e).catch(d1)}:As;function d1(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),wt="__reactFiber$"+Br,Ti="__reactProps$"+Br,Nt="__reactContainer$"+Br,_s="__reactEvents$"+Br,f1="__reactListeners$"+Br,p1="__reactHandles$"+Br;function Sn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ad(e);e!==null;){if(n=e[wt])return n;e=Ad(e)}return t}e=n,n=e.parentNode}return null}function Zi(e){return e=e[wt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Yo(e){return e[Ti]||null}var Ts=[],or=-1;function yn(e){return{current:e}}function X(e){0>or||(e.current=Ts[or],Ts[or]=null,or--)}function Y(e,t){or++,Ts[or]=e.current,e.current=t}var dn={},Ee=yn(dn),Oe=yn(!1),In=dn;function $r(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function mo(){X(Oe),X(Ee)}function _d(e,t,n){if(Ee.current!==dn)throw Error(_(168));Y(Ee,t),Y(Oe,n)}function Nm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,J0(e)||"Unknown",i));return te({},n,r)}function ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,In=Ee.current,Y(Ee,e),Y(Oe,Oe.current),!0}function Td(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Nm(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,X(Oe),X(Ee),Y(Ee,e)):X(Oe),Y(Oe,n)}var Pt=null,Go=!1,zl=!1;function Lm(e){Pt===null?Pt=[e]:Pt.push(e)}function m1(e){Go=!0,Lm(e)}function xn(){if(!zl&&Pt!==null){zl=!0;var e=0,t=H;try{var n=Pt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,Go=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),om(Du,xn),i}finally{H=t,zl=!1}}return null}var lr=[],sr=0,go=null,vo=0,Qe=[],Ke=0,zn=null,_t=1,Tt="";function bn(e,t){lr[sr++]=vo,lr[sr++]=go,go=e,vo=t}function Im(e,t,n){Qe[Ke++]=_t,Qe[Ke++]=Tt,Qe[Ke++]=zn,zn=e;var r=_t;e=Tt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var a=32-ut(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_t=1<<32-ut(t)+i|n<<i|r,Tt=a+e}else _t=1<<a|n<<i|r,Tt=e}function Gu(e){e.return!==null&&(bn(e,1),Im(e,1,0))}function Qu(e){for(;e===go;)go=lr[--sr],lr[sr]=null,vo=lr[--sr],lr[sr]=null;for(;e===zn;)zn=Qe[--Ke],Qe[Ke]=null,Tt=Qe[--Ke],Qe[Ke]=null,_t=Qe[--Ke],Qe[Ke]=null}var Be=null,Fe=null,Z=!1,ot=null;function zm(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Fe=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:_t,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Fe=null,!0):!1;default:return!1}}function Rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Os(e){if(Z){var t=Fe;if(t){var n=t;if(!Rd(e,t)){if(Rs(e))throw Error(_(418));t=rn(n.nextSibling);var r=Be;t&&Rd(e,t)?zm(r,n):(e.flags=e.flags&-4097|2,Z=!1,Be=e)}}else{if(Rs(e))throw Error(_(418));e.flags=e.flags&-4097|2,Z=!1,Be=e}}}function Od(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function va(e){if(e!==Be)return!1;if(!Z)return Od(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ps(e.type,e.memoizedProps)),t&&(t=Fe)){if(Rs(e))throw Dm(),Error(_(418));for(;t;)zm(e,t),t=rn(t.nextSibling)}if(Od(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Be?rn(e.stateNode.nextSibling):null;return!0}function Dm(){for(var e=Fe;e;)e=rn(e.nextSibling)}function jr(){Fe=Be=null,Z=!1}function Ku(e){ot===null?ot=[e]:ot.push(e)}var h1=Ft.ReactCurrentBatchConfig;function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nd(e){var t=e._init;return t(e._payload)}function Mm(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=sn(h,f),h.index=0,h.sibling=null,h}function a(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,f,m,b){return f===null||f.tag!==6?(f=Vl(m,h.mode,b),f.return=h,f):(f=i(f,m),f.return=h,f)}function s(h,f,m,b){var $=m.type;return $===tr?d(h,f,m.props.children,b,m.key):f!==null&&(f.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Yt&&Nd($)===f.type)?(b=i(f,m.props),b.ref=Zr(h,f,m),b.return=h,b):(b=Ga(m.type,m.key,m.props,null,h.mode,b),b.ref=Zr(h,f,m),b.return=h,b)}function c(h,f,m,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Hl(m,h.mode,b),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function d(h,f,m,b,$){return f===null||f.tag!==7?(f=On(m,h.mode,b,$),f.return=h,f):(f=i(f,m),f.return=h,f)}function p(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Vl(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case la:return m=Ga(f.type,f.key,f.props,null,h.mode,m),m.ref=Zr(h,null,f),m.return=h,m;case er:return f=Hl(f,h.mode,m),f.return=h,f;case Yt:var b=f._init;return p(h,b(f._payload),m)}if(ni(f)||Gr(f))return f=On(f,h.mode,m,null),f.return=h,f;ya(h,f)}return null}function g(h,f,m,b){var $=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return $!==null?null:l(h,f,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case la:return m.key===$?s(h,f,m,b):null;case er:return m.key===$?c(h,f,m,b):null;case Yt:return $=m._init,g(h,f,$(m._payload),b)}if(ni(m)||Gr(m))return $!==null?null:d(h,f,m,b,null);ya(h,m)}return null}function x(h,f,m,b,$){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(m)||null,l(f,h,""+b,$);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case la:return h=h.get(b.key===null?m:b.key)||null,s(f,h,b,$);case er:return h=h.get(b.key===null?m:b.key)||null,c(f,h,b,$);case Yt:var E=b._init;return x(h,f,m,E(b._payload),$)}if(ni(b)||Gr(b))return h=h.get(m)||null,d(f,h,b,$,null);ya(f,b)}return null}function k(h,f,m,b){for(var $=null,E=null,S=f,y=f=0,L=null;S!==null&&y<m.length;y++){S.index>y?(L=S,S=null):L=S.sibling;var z=g(h,S,m[y],b);if(z===null){S===null&&(S=L);break}e&&S&&z.alternate===null&&t(h,S),f=a(z,f,y),E===null?$=z:E.sibling=z,E=z,S=L}if(y===m.length)return n(h,S),Z&&bn(h,y),$;if(S===null){for(;y<m.length;y++)S=p(h,m[y],b),S!==null&&(f=a(S,f,y),E===null?$=S:E.sibling=S,E=S);return Z&&bn(h,y),$}for(S=r(h,S);y<m.length;y++)L=x(S,h,y,m[y],b),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?y:L.key),f=a(L,f,y),E===null?$=L:E.sibling=L,E=L);return e&&S.forEach(function(ae){return t(h,ae)}),Z&&bn(h,y),$}function w(h,f,m,b){var $=Gr(m);if(typeof $!="function")throw Error(_(150));if(m=$.call(m),m==null)throw Error(_(151));for(var E=$=null,S=f,y=f=0,L=null,z=m.next();S!==null&&!z.done;y++,z=m.next()){S.index>y?(L=S,S=null):L=S.sibling;var ae=g(h,S,z.value,b);if(ae===null){S===null&&(S=L);break}e&&S&&ae.alternate===null&&t(h,S),f=a(ae,f,y),E===null?$=ae:E.sibling=ae,E=ae,S=L}if(z.done)return n(h,S),Z&&bn(h,y),$;if(S===null){for(;!z.done;y++,z=m.next())z=p(h,z.value,b),z!==null&&(f=a(z,f,y),E===null?$=z:E.sibling=z,E=z);return Z&&bn(h,y),$}for(S=r(h,S);!z.done;y++,z=m.next())z=x(S,h,y,z.value,b),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?y:z.key),f=a(z,f,y),E===null?$=z:E.sibling=z,E=z);return e&&S.forEach(function(Ye){return t(h,Ye)}),Z&&bn(h,y),$}function j(h,f,m,b){if(typeof m=="object"&&m!==null&&m.type===tr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case la:e:{for(var $=m.key,E=f;E!==null;){if(E.key===$){if($=m.type,$===tr){if(E.tag===7){n(h,E.sibling),f=i(E,m.props.children),f.return=h,h=f;break e}}else if(E.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Yt&&Nd($)===E.type){n(h,E.sibling),f=i(E,m.props),f.ref=Zr(h,E,m),f.return=h,h=f;break e}n(h,E);break}else t(h,E);E=E.sibling}m.type===tr?(f=On(m.props.children,h.mode,b,m.key),f.return=h,h=f):(b=Ga(m.type,m.key,m.props,null,h.mode,b),b.ref=Zr(h,f,m),b.return=h,h=b)}return o(h);case er:e:{for(E=m.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Hl(m,h.mode,b),f.return=h,h=f}return o(h);case Yt:return E=m._init,j(h,f,E(m._payload),b)}if(ni(m))return k(h,f,m,b);if(Gr(m))return w(h,f,m,b);ya(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Vl(m,h.mode,b),f.return=h,h=f),o(h)):n(h,f)}return j}var Pr=Mm(!0),Fm=Mm(!1),yo=yn(null),xo=null,ur=null,Xu=null;function Ju(){Xu=ur=xo=null}function Zu(e){var t=yo.current;X(yo),e._currentValue=t}function Ns(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wr(e,t){xo=e,Xu=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Xu!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(xo===null)throw Error(_(308));ur=e,xo.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var En=null;function qu(e){En===null?En=[e]:En.push(e)}function Bm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,qu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Um(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lt(e,n)}return i=r.interleaved,i===null?(t.next=t,qu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lt(e,n)}function Ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mu(e,n)}}function Ld(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wo(e,t,n,r){var i=e.updateQueue;Gt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,o===null?a=c:o.next=c,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(a!==null){var p=i.baseState;o=0,d=c=s=null,l=a;do{var g=l.lane,x=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,w=l;switch(g=t,x=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){p=k.call(x,p,g);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,g=typeof k=="function"?k.call(x,p,g):k,g==null)break e;p=te({},p,g);break e;case 2:Gt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=x,s=p):d=d.next=x,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(s=p),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Mn|=o,e.lanes=o,e.memoizedState=p}}function Id(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var qi={},Ct=yn(qi),Ri=yn(qi),Oi=yn(qi);function $n(e){if(e===qi)throw Error(_(174));return e}function tc(e,t){switch(Y(Oi,t),Y(Ri,e),Y(Ct,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ms(t,e)}X(Ct),Y(Ct,t)}function Ar(){X(Ct),X(Ri),X(Oi)}function Wm(e){$n(Oi.current);var t=$n(Ct.current),n=ms(t,e.type);t!==n&&(Y(Ri,e),Y(Ct,n))}function nc(e){Ri.current===e&&(X(Ct),X(Ri))}var q=yn(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function rc(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var Ua=Ft.ReactCurrentDispatcher,Ml=Ft.ReactCurrentBatchConfig,Dn=0,ee=null,ue=null,fe=null,bo=!1,fi=!1,Ni=0,g1=0;function ke(){throw Error(_(321))}function ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function ac(e,t,n,r,i,a){if(Dn=a,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ua.current=e===null||e.memoizedState===null?w1:k1,e=n(r,i),fi){a=0;do{if(fi=!1,Ni=0,25<=a)throw Error(_(301));a+=1,fe=ue=null,t.updateQueue=null,Ua.current=b1,e=n(r,i)}while(fi)}if(Ua.current=Co,t=ue!==null&&ue.next!==null,Dn=0,fe=ue=ee=null,bo=!1,t)throw Error(_(300));return e}function oc(){var e=Ni!==0;return Ni=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ee.memoizedState=fe=e:fe=fe.next=e,fe}function et(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=fe===null?ee.memoizedState:fe.next;if(t!==null)fe=t,ue=e;else{if(e===null)throw Error(_(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?ee.memoizedState=fe=e:fe=fe.next=e}return fe}function Li(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=et(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,c=a;do{var d=c.lane;if((Dn&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=p,o=r):s=s.next=p,ee.lanes|=d,Mn|=d}c=c.next}while(c!==null&&c!==a);s===null?o=r:s.next=l,ft(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ee.lanes|=a,Mn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=et(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);ft(a,t.memoizedState)||(Te=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Vm(){}function Hm(e,t){var n=ee,r=et(),i=t(),a=!ft(r.memoizedState,i);if(a&&(r.memoizedState=i,Te=!0),r=r.queue,lc(Qm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Ii(9,Gm.bind(null,n,r,i,t),void 0,null),me===null)throw Error(_(349));Dn&30||Ym(n,t,i)}return i}function Ym(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gm(e,t,n,r){t.value=n,t.getSnapshot=r,Km(t)&&Xm(e)}function Qm(e,t,n){return n(function(){Km(t)&&Xm(e)})}function Km(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Xm(e){var t=Lt(e,1);t!==null&&ct(t,e,1,-1)}function zd(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=x1.bind(null,ee,e),[t.memoizedState,e]}function Ii(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jm(){return et().memoizedState}function Wa(e,t,n,r){var i=vt();ee.flags|=e,i.memoizedState=Ii(1|t,n,void 0,r===void 0?null:r)}function Qo(e,t,n,r){var i=et();r=r===void 0?null:r;var a=void 0;if(ue!==null){var o=ue.memoizedState;if(a=o.destroy,r!==null&&ic(r,o.deps)){i.memoizedState=Ii(t,n,a,r);return}}ee.flags|=e,i.memoizedState=Ii(1|t,n,a,r)}function Dd(e,t){return Wa(8390656,8,e,t)}function lc(e,t){return Qo(2048,8,e,t)}function Zm(e,t){return Qo(4,2,e,t)}function qm(e,t){return Qo(4,4,e,t)}function eh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function th(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4,4,eh.bind(null,t,e),n)}function sc(){}function nh(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rh(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ih(e,t,n){return Dn&21?(ft(n,t)||(n=um(),ee.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function v1(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ml.transition;Ml.transition={};try{e(!1),t()}finally{H=n,Ml.transition=r}}function ah(){return et().memoizedState}function y1(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oh(e))lh(t,n);else if(n=Bm(e,t,n,r),n!==null){var i=je();ct(n,e,r,i),sh(n,t,r)}}function x1(e,t,n){var r=ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oh(e))lh(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,ft(l,o)){var s=t.interleaved;s===null?(i.next=i,qu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Bm(e,t,i,r),n!==null&&(i=je(),ct(n,e,r,i),sh(n,t,r))}}function oh(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function lh(e,t){fi=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mu(e,n)}}var Co={readContext:qe,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},w1={readContext:qe,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Dd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4194308,4,eh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wa(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=y1.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:zd,useDebugValue:sc,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=zd(!1),t=e[0];return e=v1.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,i=vt();if(Z){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),me===null)throw Error(_(349));Dn&30||Ym(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Dd(Qm.bind(null,r,a,e),[e]),r.flags|=2048,Ii(9,Gm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=vt(),t=me.identifierPrefix;if(Z){var n=Tt,r=_t;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=g1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},k1={readContext:qe,useCallback:nh,useContext:qe,useEffect:lc,useImperativeHandle:th,useInsertionEffect:Zm,useLayoutEffect:qm,useMemo:rh,useReducer:Fl,useRef:Jm,useState:function(){return Fl(Li)},useDebugValue:sc,useDeferredValue:function(e){var t=et();return ih(t,ue.memoizedState,e)},useTransition:function(){var e=Fl(Li)[0],t=et().memoizedState;return[e,t]},useMutableSource:Vm,useSyncExternalStore:Hm,useId:ah,unstable_isNewReconciler:!1},b1={readContext:qe,useCallback:nh,useContext:qe,useEffect:lc,useImperativeHandle:th,useInsertionEffect:Zm,useLayoutEffect:qm,useMemo:rh,useReducer:Bl,useRef:Jm,useState:function(){return Bl(Li)},useDebugValue:sc,useDeferredValue:function(e){var t=et();return ue===null?t.memoizedState=e:ih(t,ue.memoizedState,e)},useTransition:function(){var e=Bl(Li)[0],t=et().memoizedState;return[e,t]},useMutableSource:Vm,useSyncExternalStore:Hm,useId:ah,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ko={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=ln(e),a=Rt(r,i);a.payload=t,n!=null&&(a.callback=n),t=an(e,a,i),t!==null&&(ct(t,e,i,r),Ba(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=ln(e),a=Rt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=an(e,a,i),t!==null&&(ct(t,e,i,r),Ba(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=ln(e),i=Rt(n,r);i.tag=2,t!=null&&(i.callback=t),t=an(e,i,r),t!==null&&(ct(t,e,r,n),Ba(t,e,r))}};function Md(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,a):!0}function uh(e,t,n){var r=!1,i=dn,a=t.contextType;return typeof a=="object"&&a!==null?a=qe(a):(i=Ne(t)?In:Ee.current,r=t.contextTypes,a=(r=r!=null)?$r(e,i):dn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Fd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ko.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ec(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=qe(a):(a=Ne(t)?In:Ee.current,i.context=$r(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ls(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ko.enqueueReplaceState(i,i.state,null),wo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _r(e,t){try{var n="",r=t;do n+=X0(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var C1=typeof WeakMap=="function"?WeakMap:Map;function ch(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eo||(Eo=!0,Gs=r),zs(e,t)},n}function dh(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){zs(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Bd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new C1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=z1.bind(null,e,t,n),t.then(e,e))}function Ud(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var S1=Ft.ReactCurrentOwner,Te=!1;function $e(e,t,n,r){t.child=e===null?Fm(t,null,n,r):Pr(t,e.child,n,r)}function Vd(e,t,n,r,i){n=n.render;var a=t.ref;return wr(t,i),r=ac(e,t,n,r,a,i),n=oc(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(Z&&n&&Gu(t),t.flags|=1,$e(e,t,r,i),t.child)}function Hd(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!gc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,fh(e,t,a,r,i)):(e=Ga(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(o,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=sn(a,r),e.ref=t.ref,e.return=t,t.child=e}function fh(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pi(a,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,It(e,t,i)}return Ds(e,t,n,r,i)}function ph(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(dr,De),De|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(dr,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Y(dr,De),De|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Y(dr,De),De|=r;return $e(e,t,i,n),t.child}function mh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ds(e,t,n,r,i){var a=Ne(n)?In:Ee.current;return a=$r(t,a),wr(t,i),n=ac(e,t,n,r,a,i),r=oc(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(Z&&r&&Gu(t),t.flags|=1,$e(e,t,n,i),t.child)}function Yd(e,t,n,r,i){if(Ne(n)){var a=!0;ho(t)}else a=!1;if(wr(t,i),t.stateNode===null)Va(e,t),uh(t,n,r),Is(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qe(c):(c=Ne(n)?In:Ee.current,c=$r(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Fd(t,o,r,c),Gt=!1;var g=t.memoizedState;o.state=g,wo(t,r,o,i),s=t.memoizedState,l!==r||g!==s||Oe.current||Gt?(typeof d=="function"&&(Ls(t,n,d,r),s=t.memoizedState),(l=Gt||Md(t,n,l,r,g,s,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Um(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:it(t.type,l),o.props=c,p=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=qe(s):(s=Ne(n)?In:Ee.current,s=$r(t,s));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==s)&&Fd(t,o,r,s),Gt=!1,g=t.memoizedState,o.state=g,wo(t,r,o,i);var k=t.memoizedState;l!==p||g!==k||Oe.current||Gt?(typeof x=="function"&&(Ls(t,n,x,r),k=t.memoizedState),(c=Gt||Md(t,n,c,r,g,k,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ms(e,t,n,r,a,i)}function Ms(e,t,n,r,i,a){mh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Td(t,n,!1),It(e,t,a);r=t.stateNode,S1.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Pr(t,e.child,null,a),t.child=Pr(t,null,l,a)):$e(e,t,l,a),t.memoizedState=r.state,i&&Td(t,n,!0),t.child}function hh(e){var t=e.stateNode;t.pendingContext?_d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_d(e,t.context,!1),tc(e,t.containerInfo)}function Gd(e,t,n,r,i){return jr(),Ku(i),t.flags|=256,$e(e,t,n,r),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0};function Bs(e){return{baseLanes:e,cachePool:null,transitions:null}}function gh(e,t,n){var r=t.pendingProps,i=q.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(q,i&1),e===null)return Os(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Zo(o,r,0,null),e=On(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Bs(n),t.memoizedState=Fs,e):uc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return E1(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=sn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=sn(l,a):(a=On(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Bs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Fs,r}return a=e.child,e=a.sibling,r=sn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function uc(e,t){return t=Zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xa(e,t,n,r){return r!==null&&Ku(r),Pr(t,e.child,null,n),e=uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E1(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(_(422))),xa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Zo({mode:"visible",children:r.children},i,0,null),a=On(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Pr(t,e.child,null,o),t.child.memoizedState=Bs(o),t.memoizedState=Fs,a);if(!(t.mode&1))return xa(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(_(419)),r=Ul(a,r,void 0),xa(e,t,o,r)}if(l=(o&e.childLanes)!==0,Te||l){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Lt(e,i),ct(r,e,i,-1))}return hc(),r=Ul(Error(_(421))),xa(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=D1.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Fe=rn(i.nextSibling),Be=t,Z=!0,ot=null,e!==null&&(Qe[Ke++]=_t,Qe[Ke++]=Tt,Qe[Ke++]=zn,_t=e.id,Tt=e.overflow,zn=t),t=uc(t,r.children),t.flags|=4096,t)}function Qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ns(e.return,t,n)}function Wl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function vh(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if($e(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,n,t);else if(e.tag===19)Qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wl(t,!0,n,null,a);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Va(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $1(e,t,n){switch(t.tag){case 3:hh(t),jr();break;case 5:Wm(t);break;case 1:Ne(t.type)&&ho(t);break;case 4:tc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(yo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?gh(e,t,n):(Y(q,q.current&1),e=It(e,t,n),e!==null?e.sibling:null);Y(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,ph(e,t,n)}return It(e,t,n)}var yh,Us,xh,wh;yh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Us=function(){};xh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Ct.current);var a=null;switch(n){case"input":i=cs(e,i),r=cs(e,r),a=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),a=[];break;case"textarea":i=ps(e,i),r=ps(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=po)}hs(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ki.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ki.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&G("scroll",e),a||l===s||(a=[])):(a=a||[]).push(c,s))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};wh=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function j1(e,t,n){var r=t.pendingProps;switch(Qu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Ne(t.type)&&mo(),be(t),null;case 3:return r=t.stateNode,Ar(),X(Oe),X(Ee),rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Xs(ot),ot=null))),Us(e,t),be(t),null;case 5:nc(t);var i=$n(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)xh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return be(t),null}if(e=$n(Ct.current),va(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[wt]=t,r[Ti]=a,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)G(ii[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":rd(r,a),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},G("invalid",r);break;case"textarea":ad(r,a),G("invalid",r)}hs(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ga(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ga(r.textContent,l,e),i=["children",""+l]):ki.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":sa(r),id(r,a,!0);break;case"textarea":sa(r),od(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=po)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[wt]=t,e[Ti]=r,yh(e,t,!1,!1),t.stateNode=e;e:{switch(o=gs(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)G(ii[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":rd(e,r),i=cs(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),G("invalid",e);break;case"textarea":ad(e,r),i=ps(e,r),G("invalid",e);break;default:i=r}hs(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Jp(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Kp(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&bi(e,s):typeof s=="number"&&bi(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ki.hasOwnProperty(a)?s!=null&&a==="onScroll"&&G("scroll",e):s!=null&&Ou(e,a,s,o))}switch(n){case"input":sa(e),id(e,r,!1);break;case"textarea":sa(e),od(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?gr(e,!!r.multiple,a,!1):r.defaultValue!=null&&gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)wh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=$n(Oi.current),$n(Ct.current),va(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(a=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:ga(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ga(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return be(t),null;case 13:if(X(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Fe!==null&&t.mode&1&&!(t.flags&128))Dm(),jr(),t.flags|=98560,a=!1;else if(a=va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[wt]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),a=!1}else ot!==null&&(Xs(ot),ot=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ce===0&&(ce=3):hc())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Ar(),Us(e,t),e===null&&Ai(t.stateNode.containerInfo),be(t),null;case 10:return Zu(t.type._context),be(t),null;case 17:return Ne(t.type)&&mo(),be(t),null;case 19:if(X(q),a=t.memoizedState,a===null)return be(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)qr(a,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ko(e),o!==null){for(t.flags|=128,qr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(q,q.current&1|2),t.child}e=e.sibling}a.tail!==null&&ie()>Tr&&(t.flags|=128,r=!0,qr(a,!1),t.lanes=4194304)}else{if(!r)if(e=ko(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Z)return be(t),null}else 2*ie()-a.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,qr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ie(),t.sibling=null,n=q.current,Y(q,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return mc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function P1(e,t){switch(Qu(t),t.tag){case 1:return Ne(t.type)&&mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ar(),X(Oe),X(Ee),rc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nc(t),null;case 13:if(X(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(q),null;case 4:return Ar(),null;case 10:return Zu(t.type._context),null;case 22:case 23:return mc(),null;case 24:return null;default:return null}}var wa=!1,Ce=!1,A1=typeof WeakSet=="function"?WeakSet:Set,N=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Ws(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Kd=!1;function _1(e,t){if($s=uo,e=Em(),Yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,c=0,d=0,p=e,g=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==a||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)g=p,p=x;for(;;){if(p===e)break t;if(g===n&&++c===i&&(l=o),g===a&&++d===r&&(s=o),(x=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(js={focusedElem:e,selectionRange:n},uo=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,j=k.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:it(t.type,w),j);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(b){ne(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return k=Kd,Kd=!1,k}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ws(t,n,a)}i=i.next}while(i!==r)}}function Xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kh(e){var t=e.alternate;t!==null&&(e.alternate=null,kh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[Ti],delete t[_s],delete t[f1],delete t[p1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bh(e){return e.tag===5||e.tag===3||e.tag===4}function Xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=po));else if(r!==4&&(e=e.child,e!==null))for(Hs(e,t,n),e=e.sibling;e!==null;)Hs(e,t,n),e=e.sibling}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}var ge=null,at=!1;function Wt(e,t,n){for(n=n.child;n!==null;)Ch(e,t,n),n=n.sibling}function Ch(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Uo,n)}catch{}switch(n.tag){case 5:Ce||cr(n,t);case 6:var r=ge,i=at;ge=null,Wt(e,t,n),ge=r,at=i,ge!==null&&(at?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(at?(e=ge,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),$i(e)):Il(ge,n.stateNode));break;case 4:r=ge,i=at,ge=n.stateNode.containerInfo,at=!0,Wt(e,t,n),ge=r,at=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ws(n,t,o),i=i.next}while(i!==r)}Wt(e,t,n);break;case 1:if(!Ce&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,t,l)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Wt(e,t,n),Ce=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function Jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new A1),t.forEach(function(r){var i=M1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,at=!1;break e;case 3:ge=l.stateNode.containerInfo,at=!0;break e;case 4:ge=l.stateNode.containerInfo,at=!0;break e}l=l.return}if(ge===null)throw Error(_(160));Ch(a,o,i),ge=null,at=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){ne(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sh(t,e),t=t.sibling}function Sh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),ht(e),r&4){try{pi(3,e,e.return),Xo(3,e)}catch(w){ne(e,e.return,w)}try{pi(5,e,e.return)}catch(w){ne(e,e.return,w)}}break;case 1:rt(t,e),ht(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if(rt(t,e),ht(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var i=e.stateNode;try{bi(i,"")}catch(w){ne(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Yp(i,a),gs(l,o);var c=gs(l,a);for(o=0;o<s.length;o+=2){var d=s[o],p=s[o+1];d==="style"?Jp(i,p):d==="dangerouslySetInnerHTML"?Kp(i,p):d==="children"?bi(i,p):Ou(i,d,p,c)}switch(l){case"input":ds(i,a);break;case"textarea":Gp(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?gr(i,!!a.multiple,x,!1):g!==!!a.multiple&&(a.defaultValue!=null?gr(i,!!a.multiple,a.defaultValue,!0):gr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ti]=a}catch(w){ne(e,e.return,w)}}break;case 6:if(rt(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){ne(e,e.return,w)}}break;case 3:if(rt(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(w){ne(e,e.return,w)}break;case 4:rt(t,e),ht(e);break;case 13:rt(t,e),ht(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(fc=ie())),r&4&&Jd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(c=Ce)||d,rt(t,e),Ce=c):rt(t,e),ht(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(p=N=d;N!==null;){switch(g=N,x=g.child,g.tag){case 0:case 11:case 14:case 15:pi(4,g,g.return);break;case 1:cr(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){ne(r,n,w)}}break;case 5:cr(g,g.return);break;case 22:if(g.memoizedState!==null){qd(p);continue}}x!==null?(x.return=g,N=x):qd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Xp("display",o))}catch(w){ne(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){ne(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:rt(t,e),ht(e),r&4&&Jd(e);break;case 21:break;default:rt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bh(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bi(i,""),r.flags&=-33);var a=Xd(e);Ys(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Xd(e);Hs(e,l,o);break;default:throw Error(_(161))}}catch(s){ne(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function T1(e,t,n){N=e,Eh(e)}function Eh(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wa;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Ce;l=wa;var c=Ce;if(wa=o,(Ce=s)&&!c)for(N=i;N!==null;)o=N,s=o.child,o.tag===22&&o.memoizedState!==null?ef(i):s!==null?(s.return=o,N=s):ef(i);for(;a!==null;)N=a,Eh(a),a=a.sibling;N=i,wa=l,Ce=c}Zd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,N=a):Zd(e)}}function Zd(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||Xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Id(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Id(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&$i(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ce||t.flags&512&&Vs(t)}catch(g){ne(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function qd(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function ef(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xo(4,t)}catch(s){ne(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ne(t,i,s)}}var a=t.return;try{Vs(t)}catch(s){ne(t,a,s)}break;case 5:var o=t.return;try{Vs(t)}catch(s){ne(t,o,s)}}}catch(s){ne(t,t.return,s)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var R1=Math.ceil,So=Ft.ReactCurrentDispatcher,cc=Ft.ReactCurrentOwner,Ze=Ft.ReactCurrentBatchConfig,W=0,me=null,le=null,ye=0,De=0,dr=yn(0),ce=0,zi=null,Mn=0,Jo=0,dc=0,mi=null,_e=null,fc=0,Tr=1/0,$t=null,Eo=!1,Gs=null,on=null,ka=!1,Jt=null,$o=0,hi=0,Qs=null,Ha=-1,Ya=0;function je(){return W&6?ie():Ha!==-1?Ha:Ha=ie()}function ln(e){return e.mode&1?W&2&&ye!==0?ye&-ye:h1.transition!==null?(Ya===0&&(Ya=um()),Ya):(e=H,e!==0||(e=window.event,e=e===void 0?16:gm(e.type)),e):1}function ct(e,t,n,r){if(50<hi)throw hi=0,Qs=null,Error(_(185));Xi(e,n,r),(!(W&2)||e!==me)&&(e===me&&(!(W&2)&&(Jo|=n),ce===4&&Kt(e,ye)),Le(e,r),n===1&&W===0&&!(t.mode&1)&&(Tr=ie()+500,Go&&xn()))}function Le(e,t){var n=e.callbackNode;hv(e,t);var r=so(e,e===me?ye:0);if(r===0)n!==null&&ud(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ud(n),t===1)e.tag===0?m1(tf.bind(null,e)):Lm(tf.bind(null,e)),c1(function(){!(W&6)&&xn()}),n=null;else{switch(cm(r)){case 1:n=Du;break;case 4:n=lm;break;case 16:n=lo;break;case 536870912:n=sm;break;default:n=lo}n=Oh(n,$h.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $h(e,t){if(Ha=-1,Ya=0,W&6)throw Error(_(327));var n=e.callbackNode;if(kr()&&e.callbackNode!==n)return null;var r=so(e,e===me?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=jo(e,r);else{t=r;var i=W;W|=2;var a=Ph();(me!==e||ye!==t)&&($t=null,Tr=ie()+500,Rn(e,t));do try{L1();break}catch(l){jh(e,l)}while(!0);Ju(),So.current=a,W=i,le!==null?t=0:(me=null,ye=0,t=ce)}if(t!==0){if(t===2&&(i=ks(e),i!==0&&(r=i,t=Ks(e,i))),t===1)throw n=zi,Rn(e,0),Kt(e,r),Le(e,ie()),n;if(t===6)Kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!O1(i)&&(t=jo(e,r),t===2&&(a=ks(e),a!==0&&(r=a,t=Ks(e,a))),t===1))throw n=zi,Rn(e,0),Kt(e,r),Le(e,ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Cn(e,_e,$t);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=fc+500-ie(),10<t)){if(so(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=As(Cn.bind(null,e,_e,$t),t);break}Cn(e,_e,$t);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ut(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R1(r/1960))-r,10<r){e.timeoutHandle=As(Cn.bind(null,e,_e,$t),r);break}Cn(e,_e,$t);break;case 5:Cn(e,_e,$t);break;default:throw Error(_(329))}}}return Le(e,ie()),e.callbackNode===n?$h.bind(null,e):null}function Ks(e,t){var n=mi;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=jo(e,t),e!==2&&(t=_e,_e=n,t!==null&&Xs(t)),e}function Xs(e){_e===null?_e=e:_e.push.apply(_e,e)}function O1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!ft(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~dc,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function tf(e){if(W&6)throw Error(_(327));kr();var t=so(e,0);if(!(t&1))return Le(e,ie()),null;var n=jo(e,t);if(e.tag!==0&&n===2){var r=ks(e);r!==0&&(t=r,n=Ks(e,r))}if(n===1)throw n=zi,Rn(e,0),Kt(e,t),Le(e,ie()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,_e,$t),Le(e,ie()),null}function pc(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Tr=ie()+500,Go&&xn())}}function Fn(e){Jt!==null&&Jt.tag===0&&!(W&6)&&kr();var t=W;W|=1;var n=Ze.transition,r=H;try{if(Ze.transition=null,H=1,e)return e()}finally{H=r,Ze.transition=n,W=t,!(W&6)&&xn()}}function mc(){De=dr.current,X(dr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,u1(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:Ar(),X(Oe),X(Ee),rc();break;case 5:nc(r);break;case 4:Ar();break;case 13:X(q);break;case 19:X(q);break;case 10:Zu(r.type._context);break;case 22:case 23:mc()}n=n.return}if(me=e,le=e=sn(e.current,null),ye=De=t,ce=0,zi=null,dc=Jo=Mn=0,_e=mi=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}En=null}return e}function jh(e,t){do{var n=le;try{if(Ju(),Ua.current=Co,bo){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bo=!1}if(Dn=0,fe=ue=ee=null,fi=!1,Ni=0,cc.current=null,n===null||n.return===null){ce=1,zi=t,le=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=ye,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Ud(o);if(x!==null){x.flags&=-257,Wd(x,o,l,a,t),x.mode&1&&Bd(a,c,t),t=x,s=c;var k=t.updateQueue;if(k===null){var w=new Set;w.add(s),t.updateQueue=w}else k.add(s);break e}else{if(!(t&1)){Bd(a,c,t),hc();break e}s=Error(_(426))}}else if(Z&&l.mode&1){var j=Ud(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Wd(j,o,l,a,t),Ku(_r(s,l));break e}}a=s=_r(s,l),ce!==4&&(ce=2),mi===null?mi=[a]:mi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=ch(a,s,t);Ld(a,h);break e;case 1:l=s;var f=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(on===null||!on.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=dh(a,l,t);Ld(a,b);break e}}a=a.return}while(a!==null)}_h(n)}catch($){t=$,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Ph(){var e=So.current;return So.current=Co,e===null?Co:e}function hc(){(ce===0||ce===3||ce===2)&&(ce=4),me===null||!(Mn&268435455)&&!(Jo&268435455)||Kt(me,ye)}function jo(e,t){var n=W;W|=2;var r=Ph();(me!==e||ye!==t)&&($t=null,Rn(e,t));do try{N1();break}catch(i){jh(e,i)}while(!0);if(Ju(),W=n,So.current=r,le!==null)throw Error(_(261));return me=null,ye=0,ce}function N1(){for(;le!==null;)Ah(le)}function L1(){for(;le!==null&&!ov();)Ah(le)}function Ah(e){var t=Rh(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?_h(e):le=t,cc.current=null}function _h(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=P1(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}else if(n=j1(n,t,De),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function Cn(e,t,n){var r=H,i=Ze.transition;try{Ze.transition=null,H=1,I1(e,t,n,r)}finally{Ze.transition=i,H=r}return null}function I1(e,t,n,r){do kr();while(Jt!==null);if(W&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(gv(e,a),e===me&&(le=me=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,Oh(lo,function(){return kr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ze.transition,Ze.transition=null;var o=H;H=1;var l=W;W|=4,cc.current=null,_1(e,n),Sh(n,e),n1(js),uo=!!$s,js=$s=null,e.current=n,T1(n),lv(),W=l,H=o,Ze.transition=a}else e.current=n;if(ka&&(ka=!1,Jt=e,$o=i),a=e.pendingLanes,a===0&&(on=null),cv(n.stateNode),Le(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eo)throw Eo=!1,e=Gs,Gs=null,e;return $o&1&&e.tag!==0&&kr(),a=e.pendingLanes,a&1?e===Qs?hi++:(hi=0,Qs=e):hi=0,xn(),null}function kr(){if(Jt!==null){var e=cm($o),t=Ze.transition,n=H;try{if(Ze.transition=null,H=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,$o=0,W&6)throw Error(_(331));var i=W;for(W|=4,N=e.current;N!==null;){var a=N,o=a.child;if(N.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:pi(8,d,a)}var p=d.child;if(p!==null)p.return=d,N=p;else for(;N!==null;){d=N;var g=d.sibling,x=d.return;if(kh(d),d===c){N=null;break}if(g!==null){g.return=x,N=g;break}N=x}}}var k=a.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}N=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,N=o;else e:for(;N!==null;){if(a=N,a.flags&2048)switch(a.tag){case 0:case 11:case 15:pi(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,N=h;break e}N=a.return}}var f=e.current;for(N=f;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xo(9,l)}}catch($){ne(l,l.return,$)}if(l===o){N=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,N=b;break e}N=l.return}}if(W=i,xn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Uo,e)}catch{}r=!0}return r}finally{H=n,Ze.transition=t}}return!1}function nf(e,t,n){t=_r(n,t),t=ch(e,t,1),e=an(e,t,1),t=je(),e!==null&&(Xi(e,1,t),Le(e,t))}function ne(e,t,n){if(e.tag===3)nf(e,e,n);else for(;t!==null;){if(t.tag===3){nf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=_r(n,e),e=dh(t,e,1),t=an(t,e,1),e=je(),t!==null&&(Xi(t,1,e),Le(t,e));break}}t=t.return}}function z1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ye&n)===n&&(ce===4||ce===3&&(ye&130023424)===ye&&500>ie()-fc?Rn(e,0):dc|=n),Le(e,t)}function Th(e,t){t===0&&(e.mode&1?(t=da,da<<=1,!(da&130023424)&&(da=4194304)):t=1);var n=je();e=Lt(e,t),e!==null&&(Xi(e,t,n),Le(e,n))}function D1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Th(e,n)}function M1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Th(e,n)}var Rh;Rh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,$1(e,t,n);Te=!!(e.flags&131072)}else Te=!1,Z&&t.flags&1048576&&Im(t,vo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Va(e,t),e=t.pendingProps;var i=$r(t,Ee.current);wr(t,n),i=ac(null,t,r,e,i,n);var a=oc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(a=!0,ho(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ec(t),i.updater=Ko,t.stateNode=i,i._reactInternals=t,Is(t,r,e,n),t=Ms(null,t,r,!0,a,n)):(t.tag=0,Z&&a&&Gu(t),$e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Va(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=B1(r),e=it(r,e),i){case 0:t=Ds(null,t,r,e,n);break e;case 1:t=Yd(null,t,r,e,n);break e;case 11:t=Vd(null,t,r,e,n);break e;case 14:t=Hd(null,t,r,it(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Ds(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Yd(e,t,r,i,n);case 3:e:{if(hh(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Um(e,t),wo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=_r(Error(_(423)),t),t=Gd(e,t,r,n,i);break e}else if(r!==i){i=_r(Error(_(424)),t),t=Gd(e,t,r,n,i);break e}else for(Fe=rn(t.stateNode.containerInfo.firstChild),Be=t,Z=!0,ot=null,n=Fm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){t=It(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return Wm(t),e===null&&Os(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Ps(r,i)?o=null:a!==null&&Ps(r,a)&&(t.flags|=32),mh(e,t),$e(e,t,o,n),t.child;case 6:return e===null&&Os(t),null;case 13:return gh(e,t,n);case 4:return tc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Vd(e,t,r,i,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Y(yo,r._currentValue),r._currentValue=o,a!==null)if(ft(a.value,o)){if(a.children===i.children&&!Oe.current){t=It(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Rt(-1,n&-n),s.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ns(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ns(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}$e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,wr(t,n),i=qe(i),r=r(i),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),Hd(e,t,r,i,n);case 15:return fh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Va(e,t),t.tag=1,Ne(r)?(e=!0,ho(t)):e=!1,wr(t,n),uh(t,r,i),Is(t,r,i,n),Ms(null,t,r,!0,e,n);case 19:return vh(e,t,n);case 22:return ph(e,t,n)}throw Error(_(156,t.tag))};function Oh(e,t){return om(e,t)}function F1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new F1(e,t,n,r)}function gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function B1(e){if(typeof e=="function")return gc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lu)return 11;if(e===Iu)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ga(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")gc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case tr:return On(n.children,i,a,t);case Nu:o=8,i|=8;break;case os:return e=Je(12,n,t,i|2),e.elementType=os,e.lanes=a,e;case ls:return e=Je(13,n,t,i),e.elementType=ls,e.lanes=a,e;case ss:return e=Je(19,n,t,i),e.elementType=ss,e.lanes=a,e;case Wp:return Zo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bp:o=10;break e;case Up:o=9;break e;case Lu:o=11;break e;case Iu:o=14;break e;case Yt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Je(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function On(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function Zo(e,t,n,r){return e=Je(22,e,r,t),e.elementType=Wp,e.lanes=n,e.stateNode={isHidden:!1},e}function Vl(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function U1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vc(e,t,n,r,i,a,o,l,s){return e=new U1(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Je(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ec(a),e}function W1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nh(e){if(!e)return dn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Nm(e,n,t)}return t}function Lh(e,t,n,r,i,a,o,l,s){return e=vc(n,r,!0,e,i,a,o,l,s),e.context=Nh(null),n=e.current,r=je(),i=ln(n),a=Rt(r,i),a.callback=t??null,an(n,a,i),e.current.lanes=i,Xi(e,i,r),Le(e,r),e}function qo(e,t,n,r){var i=t.current,a=je(),o=ln(i);return n=Nh(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(i,t,o),e!==null&&(ct(e,i,o,a),Ba(e,i,o)),o}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yc(e,t){rf(e,t),(e=e.alternate)&&rf(e,t)}function V1(){return null}var Ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function xc(e){this._internalRoot=e}el.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));qo(e,t,null,null)};el.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){qo(null,e,null,null)}),t[Nt]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var t=pm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&hm(e)}};function wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function af(){}function H1(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var c=Po(o);a.call(c)}}var o=Lh(t,r,e,0,null,!1,!1,"",af);return e._reactRootContainer=o,e[Nt]=o.current,Ai(e.nodeType===8?e.parentNode:e),Fn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Po(s);l.call(c)}}var s=vc(e,0,!1,null,null,!1,!1,"",af);return e._reactRootContainer=s,e[Nt]=s.current,Ai(e.nodeType===8?e.parentNode:e),Fn(function(){qo(t,s,n,r)}),s}function nl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Po(o);l.call(s)}}qo(t,o,e,i)}else o=H1(n,t,e,i,r);return Po(o)}dm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ri(t.pendingLanes);n!==0&&(Mu(t,n|1),Le(t,ie()),!(W&6)&&(Tr=ie()+500,xn()))}break;case 13:Fn(function(){var r=Lt(e,1);if(r!==null){var i=je();ct(r,e,1,i)}}),yc(e,1)}};Fu=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=je();ct(t,e,134217728,n)}yc(e,134217728)}};fm=function(e){if(e.tag===13){var t=ln(e),n=Lt(e,t);if(n!==null){var r=je();ct(n,e,t,r)}yc(e,t)}};pm=function(){return H};mm=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};ys=function(e,t,n){switch(t){case"input":if(ds(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Yo(r);if(!i)throw Error(_(90));Hp(r),ds(r,i)}}}break;case"textarea":Gp(e,n);break;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}};em=pc;tm=Fn;var Y1={usingClientEntryPoint:!1,Events:[Zi,ar,Yo,Zp,qp,pc]},ei={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G1={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=im(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||V1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{Uo=ba.inject(G1),bt=ba}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y1;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(t))throw Error(_(200));return W1(e,t,null,n)};We.createRoot=function(e,t){if(!wc(e))throw Error(_(299));var n=!1,r="",i=Ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vc(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,Ai(e.nodeType===8?e.parentNode:e),new xc(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=im(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Fn(e)};We.hydrate=function(e,t,n){if(!tl(t))throw Error(_(200));return nl(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!wc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lh(t,null,e,1,n??null,i,!1,a,o),e[Nt]=t.current,Ai(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new el(t)};We.render=function(e,t,n){if(!tl(t))throw Error(_(200));return nl(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!tl(e))throw Error(_(40));return e._reactRootContainer?(Fn(function(){nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};We.unstable_batchedUpdates=pc;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!tl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return nl(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function zh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zh)}catch(e){console.error(e)}}zh(),zp.exports=We;var Q1=zp.exports,of=Q1;is.createRoot=of.createRoot,is.hydrateRoot=of.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Di.apply(this,arguments)}var Zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Zt||(Zt={}));const lf="popstate";function K1(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return Js("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ao(i)}return J1(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function X1(){return Math.random().toString(36).substr(2,8)}function sf(e,t){return{usr:e.state,key:e.key,idx:t}}function Js(e,t,n,r){return n===void 0&&(n=null),Di({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ur(t):t,{state:n,key:t&&t.key||r||X1()})}function Ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function J1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=Zt.Pop,s=null,c=d();c==null&&(c=0,o.replaceState(Di({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Zt.Pop;let j=d(),h=j==null?null:j-c;c=j,s&&s({action:l,location:w.location,delta:h})}function g(j,h){l=Zt.Push;let f=Js(w.location,j,h);c=d()+1;let m=sf(f,c),b=w.createHref(f);try{o.pushState(m,"",b)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;i.location.assign(b)}a&&s&&s({action:l,location:w.location,delta:1})}function x(j,h){l=Zt.Replace;let f=Js(w.location,j,h);c=d();let m=sf(f,c),b=w.createHref(f);o.replaceState(m,"",b),a&&s&&s({action:l,location:w.location,delta:0})}function k(j){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof j=="string"?j:Ao(j);return f=f.replace(/ $/,"%20"),se(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let w={get action(){return l},get location(){return e(i,o)},listen(j){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(lf,p),s=j,()=>{i.removeEventListener(lf,p),s=null}},createHref(j){return t(i,j)},createURL:k,encodeLocation(j){let h=k(j);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:x,go(j){return o.go(j)}};return w}var uf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uf||(uf={}));function Z1(e,t,n){return n===void 0&&(n="/"),q1(e,t,n,!1)}function q1(e,t,n,r){let i=typeof t=="string"?Ur(t):t,a=kc(i.pathname||"/",n);if(a==null)return null;let o=Mh(e);ey(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let c=dy(a);l=uy(o[s],c,r)}return l}function Mh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(se(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=un([r,s.relativePath]),d=n.concat(s);a.children&&a.children.length>0&&(se(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Mh(a.children,t,d,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:ly(c,a.index),routesMeta:d})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of Fh(a.path))i(a,o,s)}),t}function Fh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Fh(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function ey(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ty=/^:[\w-]+$/,ny=3,ry=2,iy=1,ay=10,oy=-2,cf=e=>e==="*";function ly(e,t){let n=e.split("/"),r=n.length;return n.some(cf)&&(r+=oy),t&&(r+=ry),n.filter(i=>!cf(i)).reduce((i,a)=>i+(ty.test(a)?ny:a===""?iy:ay),r)}function sy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function uy(e,t,n){let{routesMeta:r}=e,i={},a="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],c=l===r.length-1,d=a==="/"?t:t.slice(a.length)||"/",p=df({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d),g=s.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=df({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:un([a,p.pathname]),pathnameBase:hy(un([a,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(a=un([a,p.pathnameBase]))}return o}function df(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=cy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:g,isOptional:x}=d;if(g==="*"){let w=l[p]||"";o=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const k=l[p];return x&&!k?c[g]=void 0:c[g]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:o,pattern:e}}function cy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Dh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function dy(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Dh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function kc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ur(e):e;return{pathname:n?n.startsWith("/")?n:py(n,t):t,search:gy(r),hash:vy(i)}}function py(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function my(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bh(e,t){let n=my(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Uh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ur(e):(i=Di({},e),se(!i.pathname||!i.pathname.includes("?"),Yl("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),Yl("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),Yl("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(o==null)l=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?t[p]:"/"}let s=fy(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const un=e=>e.join("/").replace(/\/\/+/g,"/"),hy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wh=["post","put","patch","delete"];new Set(Wh);const xy=["get",...Wh];new Set(xy);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}const bc=C.createContext(null),wy=C.createContext(null),Yn=C.createContext(null),rl=C.createContext(null),Gn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Vh=C.createContext(null);function ky(e,t){let{relative:n}=t===void 0?{}:t;ea()||se(!1);let{basename:r,navigator:i}=C.useContext(Yn),{hash:a,pathname:o,search:l}=Yh(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:un([r,o])),i.createHref({pathname:s,search:l,hash:a})}function ea(){return C.useContext(rl)!=null}function Wr(){return ea()||se(!1),C.useContext(rl).location}function Hh(e){C.useContext(Yn).static||C.useLayoutEffect(e)}function wn(){let{isDataRoute:e}=C.useContext(Gn);return e?Ny():by()}function by(){ea()||se(!1);let e=C.useContext(bc),{basename:t,future:n,navigator:r}=C.useContext(Yn),{matches:i}=C.useContext(Gn),{pathname:a}=Wr(),o=JSON.stringify(Bh(i,n.v7_relativeSplatPath)),l=C.useRef(!1);return Hh(()=>{l.current=!0}),C.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Uh(c,JSON.parse(o),a,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:un([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,o,a,e])}function Yh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Yn),{matches:i}=C.useContext(Gn),{pathname:a}=Wr(),o=JSON.stringify(Bh(i,r.v7_relativeSplatPath));return C.useMemo(()=>Uh(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function Cy(e,t){return Sy(e,t)}function Sy(e,t,n,r){ea()||se(!1);let{navigator:i}=C.useContext(Yn),{matches:a}=C.useContext(Gn),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=Wr(),d;if(t){var p;let j=typeof t=="string"?Ur(t):t;s==="/"||(p=j.pathname)!=null&&p.startsWith(s)||se(!1),d=j}else d=c;let g=d.pathname||"/",x=g;if(s!=="/"){let j=s.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let k=Z1(e,{pathname:x}),w=Ay(k&&k.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:un([s,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?s:un([s,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,n,r);return t&&w?C.createElement(rl.Provider,{value:{location:Mi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Zt.Pop}},w):w}function Ey(){let e=Oy(),t=yy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const $y=C.createElement(Ey,null);class jy extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Gn.Provider,{value:this.props.routeContext},C.createElement(Vh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Py(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(bc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Gn.Provider,{value:t},r)}function Ay(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||se(!1),o=o.slice(0,Math.min(o.length,d+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:g,errors:x}=n,k=p.route.loader&&g[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||k){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let x,k=!1,w=null,j=null;n&&(x=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||$y,s&&(c<0&&g===0?(k=!0,j=null):c===g&&(k=!0,j=p.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,g+1)),f=()=>{let m;return x?m=w:k?m=j:p.route.Component?m=C.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=d,C.createElement(Py,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?C.createElement(jy,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Gh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gh||{}),_o=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_o||{});function _y(e){let t=C.useContext(bc);return t||se(!1),t}function Ty(e){let t=C.useContext(wy);return t||se(!1),t}function Ry(e){let t=C.useContext(Gn);return t||se(!1),t}function Qh(e){let t=Ry(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function Oy(){var e;let t=C.useContext(Vh),n=Ty(_o.UseRouteError),r=Qh(_o.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ny(){let{router:e}=_y(Gh.UseNavigateStable),t=Qh(_o.UseNavigateStable),n=C.useRef(!1);return Hh(()=>{n.current=!0}),C.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Mi({fromRouteId:t},a)))},[e,t])}function gt(e){se(!1)}function Ly(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Zt.Pop,navigator:a,static:o=!1,future:l}=e;ea()&&se(!1);let s=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:s,navigator:a,static:o,future:Mi({v7_relativeSplatPath:!1},l)}),[s,l,a,o]);typeof r=="string"&&(r=Ur(r));let{pathname:d="/",search:p="",hash:g="",state:x=null,key:k="default"}=r,w=C.useMemo(()=>{let j=kc(d,s);return j==null?null:{location:{pathname:j,search:p,hash:g,state:x,key:k},navigationType:i}},[s,d,p,g,x,k,i]);return w==null?null:C.createElement(Yn.Provider,{value:c},C.createElement(rl.Provider,{children:n,value:w}))}function Iy(e){let{children:t,location:n}=e;return Cy(Zs(t),n)}new Promise(()=>{});function Zs(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let a=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Zs(r.props.children,a));return}r.type!==gt&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zs(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qs(){return qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qs.apply(this,arguments)}function zy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Dy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function My(e,t){return e.button===0&&(!t||t==="_self")&&!Dy(e)}function eu(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Fy(e,t){let n=eu(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(a=>{n.append(i,a)})}),n}const By=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Uy="6";try{window.__reactRouterVersion=Uy}catch{}const Wy="startTransition",ff=z0[Wy];function Vy(e){let{basename:t,children:n,future:r,window:i}=e,a=C.useRef();a.current==null&&(a.current=K1({window:i,v5Compat:!0}));let o=a.current,[l,s]=C.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=C.useCallback(p=>{c&&ff?ff(()=>s(p)):s(p)},[s,c]);return C.useLayoutEffect(()=>o.listen(d),[o,d]),C.createElement(Ly,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Hy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pf=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:c,preventScrollReset:d,unstable_viewTransition:p}=t,g=zy(t,By),{basename:x}=C.useContext(Yn),k,w=!1;if(typeof c=="string"&&Yy.test(c)&&(k=c,Hy))try{let m=new URL(window.location.href),b=c.startsWith("//")?new URL(m.protocol+c):new URL(c),$=kc(b.pathname,x);b.origin===m.origin&&$!=null?c=$+b.search+b.hash:w=!0}catch{}let j=ky(c,{relative:i}),h=Gy(c,{replace:o,state:l,target:s,preventScrollReset:d,relative:i,unstable_viewTransition:p});function f(m){r&&r(m),m.defaultPrevented||h(m)}return C.createElement("a",qs({},g,{href:k||j,onClick:w||a?r:f,ref:n,target:s}))});var mf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mf||(mf={}));var hf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hf||(hf={}));function Gy(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,s=wn(),c=Wr(),d=Yh(e,{relative:o});return C.useCallback(p=>{if(My(p,n)){p.preventDefault();let g=r!==void 0?r:Ao(c)===Ao(d);s(e,{replace:g,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:l})}},[c,s,d,r,i,n,e,a,o,l])}function Kh(e){let t=C.useRef(eu(e)),n=C.useRef(!1),r=Wr(),i=C.useMemo(()=>Fy(r.search,n.current?null:t.current),[r.search]),a=wn(),o=C.useCallback((l,s)=>{const c=eu(typeof l=="function"?l(i):l);n.current=!0,a("?"+c,s)},[a,i]);return[i,o]}function gf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gf(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function To(e){"@babel/helpers - typeof";return To=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},To(e)}function Qy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ky(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xy(e,t,n){return t&&Ky(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cc(e,t){return Zy(e)||ex(e,t)||Xh(e,t)||nx()}function ta(e){return Jy(e)||qy(e)||Xh(e)||tx()}function Jy(e){if(Array.isArray(e))return tu(e)}function Zy(e){if(Array.isArray(e))return e}function qy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ex(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function Xh(e,t){if(e){if(typeof e=="string")return tu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tu(e,t)}}function tu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vf=function(){},Sc={},Jh={},Zh=null,qh={mark:vf,measure:vf};try{typeof window<"u"&&(Sc=window),typeof document<"u"&&(Jh=document),typeof MutationObserver<"u"&&(Zh=MutationObserver),typeof performance<"u"&&(qh=performance)}catch{}var rx=Sc.navigator||{},yf=rx.userAgent,xf=yf===void 0?"":yf,fn=Sc,J=Jh,wf=Zh,Ca=qh;fn.document;var Bt=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",eg=~xf.indexOf("MSIE")||~xf.indexOf("Trident/"),Sa,Ea,$a,ja,Pa,zt="___FONT_AWESOME___",nu=16,tg="fa",ng="svg-inline--fa",Bn="data-fa-i2svg",ru="data-fa-pseudo-element",ix="data-fa-pseudo-element-pending",Ec="data-prefix",$c="data-icon",kf="fontawesome-i2svg",ax="async",ox=["HTML","HEAD","STYLE","SCRIPT"],rg=function(){try{return!0}catch{return!1}}(),K="classic",re="sharp",jc=[K,re];function na(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Fi=na((Sa={},de(Sa,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),de(Sa,re,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Sa)),Bi=na((Ea={},de(Ea,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Ea,re,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ea)),Ui=na(($a={},de($a,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de($a,re,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),$a)),lx=na((ja={},de(ja,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(ja,re,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ja)),sx=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ig="fa-layers-text",ux=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,cx=na((Pa={},de(Pa,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(Pa,re,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Pa)),ag=[1,2,3,4,5,6,7,8,9,10],dx=ag.concat([11,12,13,14,15,16,17,18,19,20]),fx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wi=new Set;Object.keys(Bi[K]).map(Wi.add.bind(Wi));Object.keys(Bi[re]).map(Wi.add.bind(Wi));var px=[].concat(jc,ta(Wi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",jn.GROUP,jn.SWAP_OPACITY,jn.PRIMARY,jn.SECONDARY]).concat(ag.map(function(e){return"".concat(e,"x")})).concat(dx.map(function(e){return"w-".concat(e)})),gi=fn.FontAwesomeConfig||{};function mx(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function hx(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var gx=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gx.forEach(function(e){var t=Cc(e,2),n=t[0],r=t[1],i=hx(mx(n));i!=null&&(gi[r]=i)})}var og={styleDefault:"solid",familyDefault:"classic",cssPrefix:tg,replacementClass:ng,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gi.familyPrefix&&(gi.cssPrefix=gi.familyPrefix);var Rr=O(O({},og),gi);Rr.autoReplaceSvg||(Rr.observeMutations=!1);var I={};Object.keys(og).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Rr[e]=n,vi.forEach(function(r){return r(I)})},get:function(){return Rr[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Rr.cssPrefix=t,vi.forEach(function(n){return n(I)})},get:function(){return Rr.cssPrefix}});fn.FontAwesomeConfig=I;var vi=[];function vx(e){return vi.push(e),function(){vi.splice(vi.indexOf(e),1)}}var Vt=nu,kt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yx(e){if(!(!e||!Bt)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return J.head.insertBefore(t,r),e}}var xx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vi(){for(var e=12,t="";e-- >0;)t+=xx[Math.random()*62|0];return t}function Vr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Pc(e){return e.classList?Vr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function lg(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wx(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(lg(e[n]),'" ')},"").trim()}function il(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ac(e){return e.size!==kt.size||e.x!==kt.x||e.y!==kt.y||e.rotate!==kt.rotate||e.flipX||e.flipY}function kx(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:c}}function bx(e){var t=e.transform,n=e.width,r=n===void 0?nu:n,i=e.height,a=i===void 0?nu:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&eg?s+="translate(".concat(t.x/Vt-r/2,"em, ").concat(t.y/Vt-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/Vt,"em), calc(-50% + ").concat(t.y/Vt,"em)) "):s+="translate(".concat(t.x/Vt,"em, ").concat(t.y/Vt,"em) "),s+="scale(".concat(t.size/Vt*(t.flipX?-1:1),", ").concat(t.size/Vt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Cx=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function sg(){var e=tg,t=ng,n=I.cssPrefix,r=I.replacementClass,i=Cx;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var bf=!1;function Gl(){I.autoAddCss&&!bf&&(yx(sg()),bf=!0)}var Sx={mixout:function(){return{dom:{css:sg,insertCss:Gl}}},hooks:function(){return{beforeDOMElementCreation:function(){Gl()},beforeI2svg:function(){Gl()}}}},Dt=fn||{};Dt[zt]||(Dt[zt]={});Dt[zt].styles||(Dt[zt].styles={});Dt[zt].hooks||(Dt[zt].hooks={});Dt[zt].shims||(Dt[zt].shims=[]);var st=Dt[zt],ug=[],Ex=function e(){J.removeEventListener("DOMContentLoaded",e),Ro=1,ug.map(function(t){return t()})},Ro=!1;Bt&&(Ro=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Ro||J.addEventListener("DOMContentLoaded",Ex));function $x(e){Bt&&(Ro?setTimeout(e,0):ug.push(e))}function ra(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?lg(e):"<".concat(t," ").concat(wx(r),">").concat(a.map(ra).join(""),"</").concat(t,">")}function Cf(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ql=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=n,s,c,d;for(r===void 0?(s=1,d=t[a[0]]):(s=0,d=r);s<o;s++)c=a[s],d=l(d,t[c],c,t);return d};function jx(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function iu(e){var t=jx(e);return t.length===1?t[0].toString(16):null}function Px(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Sf(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function au(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Sf(t);typeof st.hooks.addPack=="function"&&!i?st.hooks.addPack(e,Sf(t)):st.styles[e]=O(O({},st.styles[e]||{}),a),e==="fas"&&au("fa",t)}var Aa,_a,Ta,fr=st.styles,Ax=st.shims,_x=(Aa={},de(Aa,K,Object.values(Ui[K])),de(Aa,re,Object.values(Ui[re])),Aa),_c=null,cg={},dg={},fg={},pg={},mg={},Tx=(_a={},de(_a,K,Object.keys(Fi[K])),de(_a,re,Object.keys(Fi[re])),_a);function Rx(e){return~px.indexOf(e)}function Ox(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Rx(i)?i:null}var hg=function(){var t=function(a){return Ql(fr,function(o,l,s){return o[s]=Ql(l,a,{}),o},{})};cg=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),dg=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),mg=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in fr||I.autoFetchSvg,r=Ql(Ax,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});fg=r.names,pg=r.unicodes,_c=al(I.styleDefault,{family:I.familyDefault})};vx(function(e){_c=al(e.styleDefault,{family:I.familyDefault})});hg();function Tc(e,t){return(cg[e]||{})[t]}function Nx(e,t){return(dg[e]||{})[t]}function Pn(e,t){return(mg[e]||{})[t]}function gg(e){return fg[e]||{prefix:null,iconName:null}}function Lx(e){var t=pg[e],n=Tc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function pn(){return _c}var Rc=function(){return{prefix:null,iconName:null,rest:[]}};function al(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,i=Fi[r][e],a=Bi[r][e]||Bi[r][i],o=e in st.styles?e:null;return a||o||null}var Ef=(Ta={},de(Ta,K,Object.keys(Ui[K])),de(Ta,re,Object.keys(Ui[re])),Ta);function ol(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},de(t,K,"".concat(I.cssPrefix,"-").concat(K)),de(t,re,"".concat(I.cssPrefix,"-").concat(re)),t),o=null,l=K;(e.includes(a[K])||e.some(function(c){return Ef[K].includes(c)}))&&(l=K),(e.includes(a[re])||e.some(function(c){return Ef[re].includes(c)}))&&(l=re);var s=e.reduce(function(c,d){var p=Ox(I.cssPrefix,d);if(fr[d]?(d=_x[l].includes(d)?lx[l][d]:d,o=d,c.prefix=d):Tx[l].indexOf(d)>-1?(o=d,c.prefix=al(d,{family:l})):p?c.iconName=p:d!==I.replacementClass&&d!==a[K]&&d!==a[re]&&c.rest.push(d),!i&&c.prefix&&c.iconName){var g=o==="fa"?gg(c.iconName):{},x=Pn(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||x||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!fr.far&&fr.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},Rc());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===re&&(fr.fass||I.autoFetchSvg)&&(s.prefix="fass",s.iconName=Pn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=pn()||"fas"),s}var Ix=function(){function e(){Qy(this,e),this.definitions={}}return Xy(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=O(O({},n.definitions[l]||{}),o[l]),au(l,o[l]);var s=Ui[K][l];s&&au(s,o[l]),hg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,c=o.icon,d=c[2];n[l]||(n[l]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(n[l][p]=c)}),n[l][s]=c}),n}}]),e}(),$f=[],pr={},br={},zx=Object.keys(br);function Dx(e,t){var n=t.mixoutsTo;return $f=e,pr={},Object.keys(br).forEach(function(r){zx.indexOf(r)===-1&&delete br[r]}),$f.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),To(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){pr[o]||(pr[o]=[]),pr[o].push(a[o])})}r.provides&&r.provides(br)}),n}function ou(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=pr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=pr[e]||[];i.forEach(function(a){a.apply(null,n)})}function Mt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return br[e]?br[e].apply(null,t):void 0}function lu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||pn();if(t)return t=Pn(n,t)||t,Cf(vg.definitions,n,t)||Cf(st.styles,n,t)}var vg=new Ix,Mx=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,Un("noAuto")},Fx={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(Un("beforeI2svg",t),Mt("pseudoElements2svg",t),Mt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,$x(function(){Ux({autoReplaceSvgRoot:n}),Un("watch",t)})}},Bx={icon:function(t){if(t===null)return null;if(To(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=al(t[0]);return{prefix:r,iconName:Pn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(sx))){var i=ol(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||pn(),iconName:Pn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=pn();return{prefix:a,iconName:Pn(a,t)||t}}}},He={noAuto:Mx,config:I,dom:Fx,parse:Bx,library:vg,findIconDefinition:lu,toHtml:ra},Ux=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(st.styles).length>0||I.autoFetchSvg)&&Bt&&I.autoReplaceSvg&&He.dom.i2svg({node:r})};function ll(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ra(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Bt){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Wx(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ac(o)&&n.found&&!r.found){var l=n.width,s=n.height,c={x:l/s/2,y:.5};i.style=il(O(O({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Vx(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function Oc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,c=e.maskId,d=e.titleId,p=e.extra,g=e.watchable,x=g===void 0?!1:g,k=r.found?r:n,w=k.width,j=k.height,h=i==="fak",f=[I.replacementClass,a?"".concat(I.cssPrefix,"-").concat(a):""].filter(function(L){return p.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(p.classes).join(" "),m={children:[],attributes:O(O({},p.attributes),{},{"data-prefix":i,"data-icon":a,class:f,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(j)})},b=h&&!~p.classes.indexOf("fa-fw")?{width:"".concat(w/j*16*.0625,"em")}:{};x&&(m.attributes[Bn]=""),s&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(d||Vi())},children:[s]}),delete m.attributes.title);var $=O(O({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:l,styles:O(O({},b),p.styles)}),E=r.found&&n.found?Mt("generateAbstractMask",$)||{children:[],attributes:{}}:Mt("generateAbstractIcon",$)||{children:[],attributes:{}},S=E.children,y=E.attributes;return $.children=S,$.attributes=y,l?Vx($):Wx($)}function jf(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,c=O(O(O({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(c[Bn]="");var d=O({},o.styles);Ac(i)&&(d.transform=bx({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var p=il(d);p.length>0&&(c.style=p);var g=[];return g.push({tag:"span",attributes:c,children:[t]}),a&&g.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),g}function Hx(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=il(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kl=st.styles;function su(e){var t=e[0],n=e[1],r=e.slice(4),i=Cc(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(jn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(jn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(jn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Yx={found:!1,width:512,height:512};function Gx(e,t){!rg&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function uu(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=pn()),new Promise(function(r,i){if(Mt("missingIconAbstract"),n==="fa"){var a=gg(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Kl[t]&&Kl[t][e]){var o=Kl[t][e];return r(su(o))}Gx(e,t),r(O(O({},Yx),{},{icon:I.showMissingIcons&&e?Mt("missingIconAbstract")||{}:{}}))})}var Pf=function(){},cu=I.measurePerformance&&Ca&&Ca.mark&&Ca.measure?Ca:{mark:Pf,measure:Pf},ai='FA "6.5.2"',Qx=function(t){return cu.mark("".concat(ai," ").concat(t," begins")),function(){return yg(t)}},yg=function(t){cu.mark("".concat(ai," ").concat(t," ends")),cu.measure("".concat(ai," ").concat(t),"".concat(ai," ").concat(t," begins"),"".concat(ai," ").concat(t," ends"))},Nc={begin:Qx,end:yg},Qa=function(){};function Af(e){var t=e.getAttribute?e.getAttribute(Bn):null;return typeof t=="string"}function Kx(e){var t=e.getAttribute?e.getAttribute(Ec):null,n=e.getAttribute?e.getAttribute($c):null;return t&&n}function Xx(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Jx(){if(I.autoReplaceSvg===!0)return Ka.replace;var e=Ka[I.autoReplaceSvg];return e||Ka.replace}function Zx(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function qx(e){return J.createElement(e)}function xg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Zx:qx:n;if(typeof e=="string")return J.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(xg(o,{ceFn:r}))}),i}function e2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ka={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(xg(i),n)}),n.getAttribute(Bn)===null&&I.keepOriginalSource){var r=J.createComment(e2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Pc(n).indexOf(I.replacementClass))return Ka.replace(t);var i=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===I.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return ra(l)}).join(`
`);n.setAttribute(Bn,""),n.innerHTML=o}};function _f(e){e()}function wg(e,t){var n=typeof t=="function"?t:Qa;if(e.length===0)n();else{var r=_f;I.mutateApproach===ax&&(r=fn.requestAnimationFrame||_f),r(function(){var i=Jx(),a=Nc.begin("mutate");e.map(i),a(),n()})}}var Lc=!1;function kg(){Lc=!0}function du(){Lc=!1}var Oo=null;function Tf(e){if(wf&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Qa:t,r=e.nodeCallback,i=r===void 0?Qa:r,a=e.pseudoElementsCallback,o=a===void 0?Qa:a,l=e.observeMutationsRoot,s=l===void 0?J:l;Oo=new wf(function(c){if(!Lc){var d=pn();Vr(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Af(p.addedNodes[0])&&(I.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&I.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&Af(p.target)&&~fx.indexOf(p.attributeName))if(p.attributeName==="class"&&Kx(p.target)){var g=ol(Pc(p.target)),x=g.prefix,k=g.iconName;p.target.setAttribute(Ec,x||d),k&&p.target.setAttribute($c,k)}else Xx(p.target)&&i(p.target)})}}),Bt&&Oo.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function t2(){Oo&&Oo.disconnect()}function n2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function r2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=ol(Pc(e));return i.prefix||(i.prefix=pn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Nx(i.prefix,e.innerText)||Tc(i.prefix,iu(e.innerText))),!i.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function i2(e){var t=Vr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Vi()):(t["aria-hidden"]="true",t.focusable="false")),t}function a2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:kt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=r2(e),r=n.iconName,i=n.prefix,a=n.rest,o=i2(e),l=ou("parseNodeAttributes",{},e),s=t.styleParser?n2(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:kt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var o2=st.styles;function bg(e){var t=I.autoReplaceSvg==="nest"?Rf(e,{styleParser:!1}):Rf(e);return~t.extra.classes.indexOf(ig)?Mt("generateLayersText",e,t):Mt("generateSvgReplacementMutation",e,t)}var mn=new Set;jc.map(function(e){mn.add("fa-".concat(e))});Object.keys(Fi[K]).map(mn.add.bind(mn));Object.keys(Fi[re]).map(mn.add.bind(mn));mn=ta(mn);function Of(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();var n=J.documentElement.classList,r=function(p){return n.add("".concat(kf,"-").concat(p))},i=function(p){return n.remove("".concat(kf,"-").concat(p))},a=I.autoFetchSvg?mn:jc.map(function(d){return"fa-".concat(d)}).concat(Object.keys(o2));a.includes("fa")||a.push("fa");var o=[".".concat(ig,":not([").concat(Bn,"])")].concat(a.map(function(d){return".".concat(d,":not([").concat(Bn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Vr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=Nc.begin("onTree"),c=l.reduce(function(d,p){try{var g=bg(p);g&&d.push(g)}catch(x){rg||x.name==="MissingIcon"&&console.error(x)}return d},[]);return new Promise(function(d,p){Promise.all(c).then(function(g){wg(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),d()})}).catch(function(g){s(),p(g)})})}function l2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bg(e).then(function(n){n&&wg([n],t)})}function s2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:lu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:lu(i||{})),e(r,O(O({},n),{},{mask:i}))}}var u2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?kt:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,c=n.maskId,d=c===void 0?null:c,p=n.title,g=p===void 0?null:p,x=n.titleId,k=x===void 0?null:x,w=n.classes,j=w===void 0?[]:w,h=n.attributes,f=h===void 0?{}:h,m=n.styles,b=m===void 0?{}:m;if(t){var $=t.prefix,E=t.iconName,S=t.icon;return ll(O({type:"icon"},t),function(){return Un("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(g?f["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(k||Vi()):(f["aria-hidden"]="true",f.focusable="false")),Oc({icons:{main:su(S),mask:s?su(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:E,transform:O(O({},kt),i),symbol:o,title:g,maskId:d,titleId:k,extra:{attributes:f,styles:b,classes:j}})})}},c2={mixout:function(){return{icon:s2(u2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Of,n.nodeCallback=l2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?J:r,a=n.callback,o=a===void 0?function(){}:a;return Of(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,c=r.symbol,d=r.mask,p=r.maskId,g=r.extra;return new Promise(function(x,k){Promise.all([uu(i,l),d.iconName?uu(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var j=Cc(w,2),h=j[0],f=j[1];x([n,Oc({icons:{main:h,mask:f},prefix:l,iconName:i,transform:s,symbol:c,maskId:p,title:a,titleId:o,extra:g,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=il(l);s.length>0&&(i.style=s);var c;return Ac(o)&&(c=Mt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},d2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return ll({type:"layer"},function(){Un("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(ta(a)).join(" ")},children:o}]})}}}},f2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,c=s===void 0?{}:s,d=r.styles,p=d===void 0?{}:d;return ll({type:"counter",content:n},function(){return Un("beforeDOMElementCreation",{content:n,params:r}),Hx({content:n.toString(),title:a,extra:{attributes:c,styles:p,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(ta(l))}})})}}}},p2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?kt:i,o=r.title,l=o===void 0?null:o,s=r.classes,c=s===void 0?[]:s,d=r.attributes,p=d===void 0?{}:d,g=r.styles,x=g===void 0?{}:g;return ll({type:"text",content:n},function(){return Un("beforeDOMElementCreation",{content:n,params:r}),jf({content:n,transform:O(O({},kt),a),title:l,extra:{attributes:p,styles:x,classes:["".concat(I.cssPrefix,"-layers-text")].concat(ta(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(eg){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();l=d.width/c,s=d.height/c}return I.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,jf({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},m2=new RegExp('"',"ug"),Nf=[1105920,1112319];function h2(e){var t=e.replace(m2,""),n=Px(t,0),r=n>=Nf[0]&&n<=Nf[1],i=t.length===2?t[0]===t[1]:!1;return{value:iu(i?t[0]:t),isSecondary:r||i}}function Lf(e,t){var n="".concat(ix).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Vr(e.children),o=a.filter(function(S){return S.getAttribute(ru)===t})[0],l=fn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(ux),c=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&d!=="none"&&d!==""){var p=l.getPropertyValue("content"),g=~["Sharp"].indexOf(s[2])?re:K,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Bi[g][s[2].toLowerCase()]:cx[g][c],k=h2(p),w=k.value,j=k.isSecondary,h=s[0].startsWith("FontAwesome"),f=Tc(x,w),m=f;if(h){var b=Lx(w);b.iconName&&b.prefix&&(f=b.iconName,x=b.prefix)}if(f&&!j&&(!o||o.getAttribute(Ec)!==x||o.getAttribute($c)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var $=a2(),E=$.extra;E.attributes[ru]=t,uu(f,x).then(function(S){var y=Oc(O(O({},$),{},{icons:{main:S,mask:Rc()},prefix:x,iconName:m,extra:E,watchable:!0})),L=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=y.map(function(z){return ra(z)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function g2(e){return Promise.all([Lf(e,"::before"),Lf(e,"::after")])}function v2(e){return e.parentNode!==document.head&&!~ox.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ru)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function If(e){if(Bt)return new Promise(function(t,n){var r=Vr(e.querySelectorAll("*")).filter(v2).map(g2),i=Nc.begin("searchPseudoElements");kg(),Promise.all(r).then(function(){i(),du(),t()}).catch(function(){i(),du(),n()})})}var y2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=If,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?J:r;I.searchPseudoElements&&If(i)}}},zf=!1,x2={mixout:function(){return{dom:{unwatch:function(){kg(),zf=!0}}}},hooks:function(){return{bootstrap:function(){Tf(ou("mutationObserverCallbacks",{}))},noAuto:function(){t2()},watch:function(n){var r=n.observeMutationsRoot;zf?du():Tf(ou("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Df=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},w2={mixout:function(){return{parse:{transform:function(n){return Df(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Df(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(s," ").concat(c," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},x={outer:l,inner:p,path:g};return{tag:"g",attributes:O({},x.outer),children:[{tag:"g",attributes:O({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),x.path)}]}]}}}},Xl={x:0,y:0,width:"100%",height:"100%"};function Mf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function k2(e){return e.tag==="g"?e.children:[e]}var b2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?ol(i.split(" ").map(function(o){return o.trim()})):Rc();return a.prefix||(a.prefix=pn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,c=a.width,d=a.icon,p=o.width,g=o.icon,x=kx({transform:s,containerWidth:p,iconWidth:c}),k={tag:"rect",attributes:O(O({},Xl),{},{fill:"white"})},w=d.children?{children:d.children.map(Mf)}:{},j={tag:"g",attributes:O({},x.inner),children:[Mf(O({tag:d.tag,attributes:O(O({},d.attributes),x.path)},w))]},h={tag:"g",attributes:O({},x.outer),children:[j]},f="mask-".concat(l||Vi()),m="clip-".concat(l||Vi()),b={tag:"mask",attributes:O(O({},Xl),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,h]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:k2(g)},b]};return r.push($,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(f,")")},Xl)}),{children:r,attributes:i}}}},C2={provides:function(t){var n=!1;fn.matchMedia&&(n=fn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:O(O({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},S2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},E2=[Sx,c2,d2,f2,p2,y2,x2,w2,b2,C2,S2];Dx(E2,{mixoutsTo:He});He.noAuto;He.config;He.library;He.dom;var fu=He.parse;He.findIconDefinition;He.toHtml;var $2=He.icon;He.layer;He.text;He.counter;var Cg={exports:{}},j2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",P2=j2,A2=P2;function Sg(){}function Eg(){}Eg.resetWarningCache=Sg;var _2=function(){function e(r,i,a,o,l,s){if(s!==A2){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Eg,resetWarningCache:Sg};return n.PropTypes=n,n};Cg.exports=_2();var T2=Cg.exports;const B=Ep(T2);function Ff(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function yt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ff(Object(n),!0).forEach(function(r){mr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ff(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function No(e){"@babel/helpers - typeof";return No=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},No(e)}function mr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function O2(e,t){if(e==null)return{};var n=R2(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pu(e){return N2(e)||L2(e)||I2(e)||z2()}function N2(e){if(Array.isArray(e))return mu(e)}function L2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function I2(e,t){if(e){if(typeof e=="string")return mu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mu(e,t)}}function mu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D2(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,c=e.spinPulse,d=e.spinReverse,p=e.pulse,g=e.fixedWidth,x=e.inverse,k=e.border,w=e.listItem,j=e.flip,h=e.size,f=e.rotation,m=e.pull,b=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":g,"fa-inverse":x,"fa-border":k,"fa-li":w,"fa-flip":j===!0,"fa-flip-horizontal":j==="horizontal"||j==="both","fa-flip-vertical":j==="vertical"||j==="both"},mr(t,"fa-".concat(h),typeof h<"u"&&h!==null),mr(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),mr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),mr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map(function($){return b[$]?$:null}).filter(function($){return $})}function M2(e){return e=e-0,e===e}function $g(e){return M2(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var F2=["style"];function B2(e){return e.charAt(0).toUpperCase()+e.slice(1)}function U2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=$g(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[B2(i)]=a:t[i]=a,t},{})}function jg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return jg(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,c){var d=t.attributes[c];switch(c){case"class":s.attrs.className=d,delete t.attributes.class;break;case"style":s.attrs.style=U2(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?s.attrs[c.toLowerCase()]=d:s.attrs[$g(c)]=d}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=O2(n,F2);return i.attrs.style=yt(yt({},i.attrs.style),o),e.apply(void 0,[t.tag,yt(yt({},i.attrs),l)].concat(pu(r)))}var Pg=!1;try{Pg=!0}catch{}function W2(){if(!Pg&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bf(e){if(e&&No(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(fu.icon)return fu.icon(e);if(e===null)return null;if(e&&No(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Jl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?mr({},e,t):{}}var Uf={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},hn=ve.forwardRef(function(e,t){var n=yt(yt({},Uf),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,l=n.title,s=n.titleId,c=n.maskId,d=Bf(r),p=Jl("classes",[].concat(pu(D2(n)),pu((o||"").split(" ")))),g=Jl("transform",typeof n.transform=="string"?fu.transform(n.transform):n.transform),x=Jl("mask",Bf(i)),k=$2(d,yt(yt(yt(yt({},p),g),x),{},{symbol:a,title:l,titleId:s,maskId:c}));if(!k)return W2("Could not find icon",d),null;var w=k.abstract,j={ref:t};return Object.keys(n).forEach(function(h){Uf.hasOwnProperty(h)||(j[h]=n[h])}),V2(w[0],j)});hn.displayName="FontAwesomeIcon";hn.propTypes={beat:B.bool,border:B.bool,beatFade:B.bool,bounce:B.bool,className:B.string,fade:B.bool,flash:B.bool,mask:B.oneOfType([B.object,B.array,B.string]),maskId:B.string,fixedWidth:B.bool,inverse:B.bool,flip:B.oneOf([!0,!1,"horizontal","vertical","both"]),icon:B.oneOfType([B.object,B.array,B.string]),listItem:B.bool,pull:B.oneOf(["right","left"]),pulse:B.bool,rotation:B.oneOf([0,90,180,270]),shake:B.bool,size:B.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:B.bool,spinPulse:B.bool,spinReverse:B.bool,symbol:B.oneOfType([B.bool,B.string]),title:B.string,titleId:B.string,transform:B.oneOfType([B.string,B.object]),swapOpacity:B.bool};var V2=jg.bind(null,ve.createElement),H2={prefix:"fas",iconName:"angles-down",icon:[448,512,["angle-double-down"],"f103","M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"]},Y2={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]},G2={prefix:"fas",iconName:"angles-up",icon:[448,512,["angle-double-up"],"f102","M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"]},Q2={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Ag={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Re.apply(this,arguments)};function Hi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Q="-ms-",yi="-moz-",V="-webkit-",_g="comm",sl="rule",Ic="decl",K2="@import",Tg="@keyframes",X2="@layer",Rg=Math.abs,zc=String.fromCharCode,hu=Object.assign;function J2(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function Og(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function Xa(e,t,n){return e.indexOf(t,n)}function pe(e,t){return e.charCodeAt(t)|0}function Or(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function Ng(e){return e.length}function oi(e,t){return t.push(e),e}function Z2(e,t){return e.map(t).join("")}function Wf(e,t){return e.filter(function(n){return!jt(n,t)})}var ul=1,Nr=1,Lg=0,tt=0,oe=0,Hr="";function cl(e,t,n,r,i,a,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ul,column:Nr,length:o,return:"",siblings:l}}function Ht(e,t){return hu(cl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Jn(e){for(;e.root;)e=Ht(e.root,{children:[e]});oi(e,e.siblings)}function q2(){return oe}function ew(){return oe=tt>0?pe(Hr,--tt):0,Nr--,oe===10&&(Nr=1,ul--),oe}function dt(){return oe=tt<Lg?pe(Hr,tt++):0,Nr++,oe===10&&(Nr=1,ul++),oe}function Nn(){return pe(Hr,tt)}function Ja(){return tt}function dl(e,t){return Or(Hr,e,t)}function gu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tw(e){return ul=Nr=1,Lg=xt(Hr=e),tt=0,[]}function nw(e){return Hr="",e}function Zl(e){return Og(dl(tt-1,vu(e===91?e+2:e===40?e+1:e)))}function rw(e){for(;(oe=Nn())&&oe<33;)dt();return gu(e)>2||gu(oe)>3?"":" "}function iw(e,t){for(;--t&&dt()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return dl(e,Ja()+(t<6&&Nn()==32&&dt()==32))}function vu(e){for(;dt();)switch(oe){case e:return tt;case 34:case 39:e!==34&&e!==39&&vu(oe);break;case 40:e===41&&vu(e);break;case 92:dt();break}return tt}function aw(e,t){for(;dt()&&e+oe!==57;)if(e+oe===84&&Nn()===47)break;return"/*"+dl(t,tt-1)+"*"+zc(e===47?e:dt())}function ow(e){for(;!gu(Nn());)dt();return dl(e,tt)}function lw(e){return nw(Za("",null,null,null,[""],e=tw(e),0,[0],e))}function Za(e,t,n,r,i,a,o,l,s){for(var c=0,d=0,p=o,g=0,x=0,k=0,w=1,j=1,h=1,f=0,m="",b=i,$=a,E=r,S=m;j;)switch(k=f,f=dt()){case 40:if(k!=108&&pe(S,p-1)==58){Xa(S+=F(Zl(f),"&","&\f"),"&\f",Rg(c?l[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:S+=Zl(f);break;case 9:case 10:case 13:case 32:S+=rw(k);break;case 92:S+=iw(Ja()-1,7);continue;case 47:switch(Nn()){case 42:case 47:oi(sw(aw(dt(),Ja()),t,n,s),s);break;default:S+="/"}break;case 123*w:l[c++]=xt(S)*h;case 125*w:case 59:case 0:switch(f){case 0:case 125:j=0;case 59+d:h==-1&&(S=F(S,/\f/g,"")),x>0&&xt(S)-p&&oi(x>32?Hf(S+";",r,n,p-1,s):Hf(F(S," ","")+";",r,n,p-2,s),s);break;case 59:S+=";";default:if(oi(E=Vf(S,t,n,c,d,i,l,m,b=[],$=[],p,a),a),f===123)if(d===0)Za(S,t,E,E,b,a,p,l,$);else switch(g===99&&pe(S,3)===110?100:g){case 100:case 108:case 109:case 115:Za(e,E,E,r&&oi(Vf(e,E,E,0,0,i,l,m,i,b=[],p,$),$),i,$,p,l,r?b:$);break;default:Za(S,E,E,E,[""],$,0,l,$)}}c=d=x=0,w=h=1,m=S="",p=o;break;case 58:p=1+xt(S),x=k;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&ew()==125)continue}switch(S+=zc(f),f*w){case 38:h=d>0?1:(S+="\f",-1);break;case 44:l[c++]=(xt(S)-1)*h,h=1;break;case 64:Nn()===45&&(S+=Zl(dt())),g=Nn(),d=p=xt(m=S+=ow(Ja())),f++;break;case 45:k===45&&xt(S)==2&&(w=0)}}return a}function Vf(e,t,n,r,i,a,o,l,s,c,d,p){for(var g=i-1,x=i===0?a:[""],k=Ng(x),w=0,j=0,h=0;w<r;++w)for(var f=0,m=Or(e,g+1,g=Rg(j=o[w])),b=e;f<k;++f)(b=Og(j>0?x[f]+" "+m:F(m,/&\f/g,x[f])))&&(s[h++]=b);return cl(e,t,n,i===0?sl:l,s,c,d,p)}function sw(e,t,n,r){return cl(e,t,n,_g,zc(q2()),Or(e,2,-2),0,r)}function Hf(e,t,n,r,i){return cl(e,t,n,Ic,Or(e,0,r),Or(e,r+1,-1),r,i)}function Ig(e,t,n){switch(J2(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return yi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+yi+e+Q+e+e;case 5936:switch(pe(e,t+11)){case 114:return V+e+Q+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+Q+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+Q+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+Q+e+e;case 6165:return V+e+Q+"flex-"+e+e;case 5187:return V+e+F(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return V+e+Q+"flex-item-"+F(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":Q+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return V+e+Q+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+Q+F(e,"shrink","negative")+e;case 5292:return V+e+Q+F(e,"basis","preferred-size")+e;case 6060:return V+"box-"+F(e,"-grow","")+V+e+Q+F(e,"grow","positive")+e;case 4554:return V+F(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!jt(e,/flex-|baseline/))return Q+"grid-column-align"+Or(e,t)+e;break;case 2592:case 3360:return Q+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,jt(r.props,/grid-\w+-end/)})?~Xa(e+(n=n[t].value),"span",0)?e:Q+F(e,"-start","")+e+Q+"grid-row-span:"+(~Xa(n,"span",0)?jt(n,/\d+/):+jt(n,/\d+/)-+jt(e,/\d+/))+";":Q+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return jt(r.props,/grid-\w+-start/)})?e:Q+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+yi+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xa(e,"stretch",0)?Ig(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,l,s,c){return Q+i+":"+a+c+(o?Q+i+"-span:"+(l?s:+s-+a)+c:"")+e});case 4949:if(pe(e,t+6)===121)return F(e,":",":"+V)+e;break;case 6444:switch(pe(e,pe(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(pe(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+Q+"$2box$3")+e;case 100:return F(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Lo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function uw(e,t,n,r){switch(e.type){case X2:if(e.children.length)break;case K2:case Ic:return e.return=e.return||e.value;case _g:return"";case Tg:return e.return=e.value+"{"+Lo(e.children,r)+"}";case sl:if(!xt(e.value=e.props.join(",")))return""}return xt(n=Lo(e.children,r))?e.return=e.value+"{"+n+"}":""}function cw(e){var t=Ng(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function dw(e){return function(t){t.root||(t=t.return)&&e(t)}}function fw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ic:e.return=Ig(e.value,e.length,n);return;case Tg:return Lo([Ht(e,{value:F(e.value,"@","@"+V)})],r);case sl:if(e.length)return Z2(n=e.props,function(i){switch(jt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jn(Ht(e,{props:[F(i,/:(read-\w+)/,":"+yi+"$1")]})),Jn(Ht(e,{props:[i]})),hu(e,{props:Wf(n,r)});break;case"::placeholder":Jn(Ht(e,{props:[F(i,/:(plac\w+)/,":"+V+"input-$1")]})),Jn(Ht(e,{props:[F(i,/:(plac\w+)/,":"+yi+"$1")]})),Jn(Ht(e,{props:[F(i,/:(plac\w+)/,Q+"input-$1")]})),Jn(Ht(e,{props:[i]})),hu(e,{props:Wf(n,r)});break}return""})}}var pw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze={},Lr=typeof process<"u"&&ze!==void 0&&(ze.REACT_APP_SC_ATTR||ze.SC_ATTR)||"data-styled",zg="active",Dg="data-styled-version",fl="6.1.11",Dc=`/*!sc*/
`,Mc=typeof window<"u"&&"HTMLElement"in window,mw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==""?ze.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ze.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.SC_DISABLE_SPEEDY!==void 0&&ze.SC_DISABLE_SPEEDY!==""&&ze.SC_DISABLE_SPEEDY!=="false"&&ze.SC_DISABLE_SPEEDY),pl=Object.freeze([]),Ir=Object.freeze({});function hw(e,t,n){return n===void 0&&(n=Ir),e.theme!==n.theme&&e.theme||t||n.theme}var Mg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vw=/(^-|-$)/g;function Yf(e){return e.replace(gw,"-").replace(vw,"")}var yw=/(a)(d)/gi,Ra=52,Gf=function(e){return String.fromCharCode(e+(e>25?39:97))};function yu(e){var t,n="";for(t=Math.abs(e);t>Ra;t=t/Ra|0)n=Gf(t%Ra)+n;return(Gf(t%Ra)+n).replace(yw,"$1-$2")}var ql,Fg=5381,hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Bg=function(e){return hr(Fg,e)};function Ug(e){return yu(Bg(e)>>>0)}function xw(e){return e.displayName||e.name||"Component"}function es(e){return typeof e=="string"&&!0}var Wg=typeof Symbol=="function"&&Symbol.for,Vg=Wg?Symbol.for("react.memo"):60115,ww=Wg?Symbol.for("react.forward_ref"):60112,kw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cw=((ql={})[ww]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ql[Vg]=Hg,ql);function Qf(e){return("type"in(t=e)&&t.type.$$typeof)===Vg?Hg:"$$typeof"in e?Cw[e.$$typeof]:kw;var t}var Sw=Object.defineProperty,Ew=Object.getOwnPropertyNames,Kf=Object.getOwnPropertySymbols,$w=Object.getOwnPropertyDescriptor,jw=Object.getPrototypeOf,Xf=Object.prototype;function Yg(e,t,n){if(typeof t!="string"){if(Xf){var r=jw(t);r&&r!==Xf&&Yg(e,r,n)}var i=Ew(t);Kf&&(i=i.concat(Kf(t)));for(var a=Qf(e),o=Qf(t),l=0;l<i.length;++l){var s=i[l];if(!(s in bw||n&&n[s]||o&&s in o||a&&s in a)){var c=$w(t,s);try{Sw(e,s,c)}catch{}}}}return e}function zr(e){return typeof e=="function"}function Fc(e){return typeof e=="object"&&"styledComponentId"in e}function An(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Yi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function wu(e,t,n){if(n===void 0&&(n=!1),!n&&!Yi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=wu(e[r],t[r]);else if(Yi(t))for(var r in t)e[r]=wu(e[r],t[r]);return e}function Bc(e,t){Object.defineProperty(e,"toString",{value:t})}function ia(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Pw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw ia(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(Dc);return n},e}(),qa=new Map,Io=new Map,eo=1,Oa=function(e){if(qa.has(e))return qa.get(e);for(;Io.has(eo);)eo++;var t=eo++;return qa.set(e,t),Io.set(t,e),t},Aw=function(e,t){eo=t+1,qa.set(e,t),Io.set(t,e)},_w="style[".concat(Lr,"][").concat(Dg,'="').concat(fl,'"]'),Tw=new RegExp("^".concat(Lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rw=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Ow=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Dc),i=[],a=0,o=r.length;a<o;a++){var l=r[a].trim();if(l){var s=l.match(Tw);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(Aw(d,c),Rw(e,d,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}};function Nw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Gg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Lr,"]")));return s[s.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Lr,zg),r.setAttribute(Dg,fl);var o=Nw();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Lw=function(){function e(t){this.element=Gg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw ia(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Iw=function(){function e(t){this.element=Gg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),zw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jf=Mc,Dw={isServer:!Mc,useCSSOMInjection:!mw},Qg=function(){function e(t,n,r){t===void 0&&(t=Ir),n===void 0&&(n={});var i=this;this.options=Re(Re({},Dw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Mc&&Jf&&(Jf=!1,function(a){for(var o=document.querySelectorAll(_w),l=0,s=o.length;l<s;l++){var c=o[l];c&&c.getAttribute(Lr)!==zg&&(Ow(a,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Bc(this,function(){return function(a){for(var o=a.getTag(),l=o.length,s="",c=function(p){var g=function(h){return Io.get(h)}(p);if(g===void 0)return"continue";var x=a.names.get(g),k=o.getGroup(p);if(x===void 0||k.length===0)return"continue";var w="".concat(Lr,".g").concat(p,'[id="').concat(g,'"]'),j="";x!==void 0&&x.forEach(function(h){h.length>0&&(j+="".concat(h,","))}),s+="".concat(k).concat(w,'{content:"').concat(j,'"}').concat(Dc)},d=0;d<l;d++)c(d);return s}(i)})}return e.registerId=function(t){return Oa(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new zw(i):r?new Lw(i):new Iw(i)}(this.options),new Pw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Oa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Oa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Mw=/&/g,Fw=/^\s*\/\/.*$/gm;function Kg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Kg(n.children,t)),n})}function Bw(e){var t,n,r,i=Ir,a=i.options,o=a===void 0?Ir:a,l=i.plugins,s=l===void 0?pl:l,c=function(g,x,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):g},d=s.slice();d.push(function(g){g.type===sl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Mw,n).replace(r,c))}),o.prefix&&d.push(fw),d.push(uw);var p=function(g,x,k,w){x===void 0&&(x=""),k===void 0&&(k=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var j=g.replace(Fw,""),h=lw(k||x?"".concat(k," ").concat(x," { ").concat(j," }"):j);o.namespace&&(h=Kg(h,o.namespace));var f=[];return Lo(h,cw(d.concat(dw(function(m){return f.push(m)})))),f};return p.hash=s.length?s.reduce(function(g,x){return x.name||ia(15),hr(g,x.name)},Fg).toString():"",p}var Uw=new Qg,ku=Bw(),Xg=ve.createContext({shouldForwardProp:void 0,styleSheet:Uw,stylis:ku});Xg.Consumer;ve.createContext(void 0);function Zf(){return C.useContext(Xg)}var Jg=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=ku);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Bc(this,function(){throw ia(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ku),this.name+t.hash},e}(),Ww=function(e){return e>="A"&&e<="Z"};function qf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Ww(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Zg=function(e){return e==null||e===!1||e===""},qg=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Zg(a)&&(Array.isArray(a)&&a.isCss||zr(a)?r.push("".concat(qf(i),":"),a,";"):Yi(a)?r.push.apply(r,Hi(Hi(["".concat(i," {")],qg(a),!1),["}"],!1)):r.push("".concat(qf(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in pw||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ln(e,t,n,r){if(Zg(e))return[];if(Fc(e))return[".".concat(e.styledComponentId)];if(zr(e)){if(!zr(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Ln(i,t,n,r)}var a;return e instanceof Jg?n?(e.inject(n,r),[e.getName(r)]):[e]:Yi(e)?qg(e):Array.isArray(e)?Array.prototype.concat.apply(pl,e.map(function(o){return Ln(o,t,n,r)})):[e.toString()]}function Vw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zr(n)&&!Fc(n))return!1}return!0}var Hw=Bg(fl),Yw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Vw(t),this.componentId=n,this.baseHash=hr(Hw,n),this.baseStyle=r,Qg.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=An(i,this.staticRulesId);else{var a=xu(Ln(this.rules,t,n,r)),o=yu(hr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=An(i,o),this.staticRulesId=o}else{for(var s=hr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var g=xu(Ln(p,t,n,r));s=hr(s,g+d),c+=g}}if(c){var x=yu(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=An(i,x)}}return i},e}(),e0=ve.createContext(void 0);e0.Consumer;var ts={};function Gw(e,t,n){var r=Fc(e),i=e,a=!es(e),o=t.attrs,l=o===void 0?pl:o,s=t.componentId,c=s===void 0?function(b,$){var E=typeof b!="string"?"sc":Yf(b);ts[E]=(ts[E]||0)+1;var S="".concat(E,"-").concat(Ug(fl+E+ts[E]));return $?"".concat($,"-").concat(S):S}(t.displayName,t.parentComponentId):s,d=t.displayName,p=d===void 0?function(b){return es(b)?"styled.".concat(b):"Styled(".concat(xw(b),")")}(e):d,g=t.displayName&&t.componentId?"".concat(Yf(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,k=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;k=function(b,$){return w(b,$)&&j(b,$)}}else k=w}var h=new Yw(n,g,r?i.componentStyle:void 0);function f(b,$){return function(E,S,y){var L=E.attrs,z=E.componentStyle,ae=E.defaultProps,Ye=E.foldedComponentIds,St=E.styledComponentId,Kn=E.target,Ge=ve.useContext(e0),pt=Zf(),nt=E.shouldForwardProp||pt.shouldForwardProp,R=hw(S,Ge,ae)||Ir,A=function(mt,Ie,Et){for(var Yr,kn=Re(Re({},Ie),{className:void 0,theme:Et}),xl=0;xl<mt.length;xl+=1){var aa=zr(Yr=mt[xl])?Yr(kn):Yr;for(var Ut in aa)kn[Ut]=Ut==="className"?An(kn[Ut],aa[Ut]):Ut==="style"?Re(Re({},kn[Ut]),aa[Ut]):aa[Ut]}return Ie.className&&(kn.className=An(kn.className,Ie.className)),kn}(L,S,R),T=A.as||Kn,D={};for(var M in A)A[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&A.theme===R||(M==="forwardedAs"?D.as=A.forwardedAs:nt&&!nt(M,T)||(D[M]=A[M]));var he=function(mt,Ie){var Et=Zf(),Yr=mt.generateAndInjectStyles(Ie,Et.styleSheet,Et.stylis);return Yr}(z,A),we=An(Ye,St);return he&&(we+=" "+he),A.className&&(we+=" "+A.className),D[es(T)&&!Mg.has(T)?"class":"className"]=we,D.ref=y,C.createElement(T,D)}(m,b,$)}f.displayName=p;var m=ve.forwardRef(f);return m.attrs=x,m.componentStyle=h,m.displayName=p,m.shouldForwardProp=k,m.foldedComponentIds=r?An(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function($){for(var E=[],S=1;S<arguments.length;S++)E[S-1]=arguments[S];for(var y=0,L=E;y<L.length;y++)wu($,L[y],!0);return $}({},i.defaultProps,b):b}}),Bc(m,function(){return".".concat(m.styledComponentId)}),a&&Yg(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function ep(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var tp=function(e){return Object.assign(e,{isCss:!0})};function ml(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zr(e)||Yi(e))return tp(Ln(ep(pl,Hi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ln(r):tp(Ln(ep(r,t)))}function bu(e,t,n){if(n===void 0&&(n=Ir),!t)throw ia(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,ml.apply(void 0,Hi([i],a,!1)))};return r.attrs=function(i){return bu(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return bu(e,t,Re(Re({},n),i))},r}var t0=function(e){return bu(Gw,e)},P=t0;Mg.forEach(function(e){P[e]=t0(e)});function n0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=xu(ml.apply(void 0,Hi([e],t,!1))),i=Ug(r);return new Jg(i,r)}const Wn={length:6,duration:60},Qw=[{value:"adult-class",label:"Adult Dance Class"},{value:"kids-class",label:"Kids Dance Class"},{value:"junior-class",label:"Junior Dance Class"}],r0=[{value:"all",label:"All"},{value:"kids-class",label:"Kids Dance Class"},{value:"junior-class",label:"Junior Dance Class"},{value:"adult-class",label:"Adult Dance Class"},{value:"workshop",label:"Workshop"}],v={backgroundColor:"#212a2f",secondaryBgColor:"#263238",darkBgColor:"#212b30",primaryColor:"#d4f465",textColor:"#ffffff",secondaryTextColor:"#02028b",lightTextColor:"#d9d9d9",darkTextColor:"#000000",highlightColor:"#81e0ff",desktopSmall:"max-width: 1080px",tabletLarge:"max-width: 991px",tabletSmall:"max-width: 720px",mobileLarge:"max-width: 478px",headerFont:"Hepta Slab",get gradient(){return`linear-gradient(
      96deg,
      ${this.highlightColor} -1.9%,
      ${this.primaryColor} 93.17%
    )`}},np={January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12},Kw=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Me={name:"Revel Dance Academy",address:"1st Floor, 9a, 4th St, Venkateswara Nagar, Adyar, Chennai, Tamil Nadu 600020",phone:"+91 91500 07598",email:"reveldanceacademy2026@gmail.com"},Xw=[{path:"/",label:"Home"},{path:"/classes",label:"View Classes"},{path:"/join",label:"Join Class"}],i0=[{path:"/contact-us",label:"Contact Us & Location"},{path:"/terms-and-conditions",label:"Terms & Conditions"},{path:"/privacy-policy",label:"Privacy Policy"},{path:"/cancellation-policy",label:"Cancellation & Refund Policy"}],hl=(e="")=>`https://wa.me/${Me.phone.replace(/\D/g,"")}${e?`?text=${encodeURIComponent(e)}`:""}`,Jw=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(Me.address)}`,Zw=P.div`
  background: ${v.backgroundColor};
`,qw=P.nav`
  background: ${v.secondaryBgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 1;
  box-sizing: border-box;
  height: 120px;
  padding: 32px 64px;

  @media (${v.tabletLarge}) {
    height: 100px !important;
    padding: 12px 24px;
  }

  @media (${v.tabletSmall}) {
    height: auto !important;
    flex-wrap: wrap;
    row-gap: 12px;
    padding: 16px 24px 12px;
  }
`;P.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: ${v.backgroundColor};
  padding: 140px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;P.div`
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  padding: 12px;
  margin: 12px;
  background: ${e=>e.$isBtn?v.primaryColor:"none"};
  color: ${e=>e.$isBtn?v.darkTextColor:v.primaryColor};
  pointer-events: ${e=>e.$disabled?"none":"auto"};
  opacity: ${e=>e.$disabled?"0.5":"1"};
  border-radius: 12px;

  &:hover {
    background: ${e=>e.$isBtn?v.gradient:v.secondaryBgColor};
  }
`;const Uc=P.section`
  box-sizing: border-box;
  height: calc(var(--vh, 1vh) * 100 - 120px);
  padding: ${e=>e.$paddingY?e.$paddingY:"32px"}
    ${e=>e.$paddingX?e.$paddingX:"64px"};
  position: relative;

  @media (${v.tabletLarge}) {
    height: calc(var(--vh, 1vh) * 100 - 100px);
    padding: 12px 24px;
  }
`,Wc=P.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`,a0=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${v.backgroundColor};
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  border-radius: 0px 24px 0px 0px;
`,Vc=P.img`
  cursor: pointer;
  height: 40px;

  @media (${v.tabletLarge}) {
    height: 32px;
  }

  @media (${v.mobileLarge}) {
    height: 28px;
  }
`,o0=P.img`
  cursor: pointer;
  height: 20px;

  @media (${v.tabletLarge}) {
    height: 16px;
  }
`,ek=P.div`
  box-sizing: border-box;
  padding: 60px 240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${v.desktopSmall}) {
    padding: 64px 120px;
  }

  @media (${v.tabletLarge}) {
    padding: 64px 16px;
  }
`,tk=P.div`
  font-family: ${v.headerFont};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: ${v.textColor};
  display: flex;
  align-items: center;
  gap: 8px;

  @media (${v.tabletLarge}) {
    font-size: 16px;
    line-height: 24px;
  }
`,nk=P.div`
  font-family: ${v.headerFont};
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: ${v.darkTextColor};
  background: ${v.gradient};
  border-radius: 16px;
  padding: 4px 12px;
  opacity: 75%;
  border-bottom: 2px solid ${v.textColor};

  @media (${v.tabletLarge}) {
    border-radius: 16px 0 0 16px;
    padding: 2px 4px 2px 12px;
  }

  @media (${v.mobileLarge}) {
    font-size: 12px;
  }
`,rp=P.div`
  font-size: 12px;
  font-weight: 600;
  color: ${v.secondaryTextColor};
  background: ${v.primaryColor};
  border-radius: 50%;
  padding: 4px 6px;
  cursor: pointer;
  opacity: ${e=>e.$disabled?"0.5":"1"};
  pointer-events: ${e=>e.$disabled?"none":"auto"};

  @media (${v.mobileLarge}) {
    font-size: 8px;
  }
`,rk=P.div`
  position: absolute;
  width: 830px;
  z-index: 10;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;

  @media (${v.tabletLarge}) {
    width: 100%;
    top: 8px;
  }
`,ik=P.div`
  height: 0px;
  visibility: hidden;
`,ak=P.div`
  position: absolute;
  width: 100%;
  bottom: 12px;
  z-index: 10;
  display: flex;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,ok=P.h1`
  font-family: ${v.headerFont};
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: ${v.textColor};
  text-align: center;
  margin: 40px 0;

  @media (${v.desktopSmall}) {
    font-size: 42px;
    line-height: 50px;
  }

  @media (${v.tabletLarge}) {
    font-size: 32px;
    line-height: 40px;
    margin: 56px 0;
  }

  @media (${v.mobileLarge}) {
    font-size: 28px;
    line-height: 36px;
  }
`,lk=P.span`
  font-family: ${v.headerFont};
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: ${v.highlightColor};

  @media (${v.desktopSmall}) {
    font-size: 42px;
    line-height: 50px;
  }

  @media (${v.tabletLarge}) {
    font-size: 36px;
    line-height: 42px;
  }

  @media (${v.mobileLarge}) {
    font-size: 28px;
    line-height: 36px;
  }
`,lt=P.div`
  display: flex;
  flex-direction: ${e=>e.$direction?e.$direction:"row"};
  align-items: ${e=>e.$alignItems?e.$alignItems:"flex-start"};
  justify-content: ${e=>e.$justifyContent?e.$justifyContent:"flex-start"};
  gap: ${e=>e.$gap?e.$gap:"0px"};
  max-width: ${e=>e.$maxWidth?e.$maxWidth:"none"};

  @media (${v.mobileLarge}) {
    gap: ${e=>e.$gap?"12px":"0px"};
    max-width: ${e=>e.$maxWidth?"292px":"none"};
  }
`,Qn=P.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-size: 24px;
  font-weight: 600;
  background: ${v.primaryColor};
  color: ${v.secondaryTextColor};
  pointer-events: ${e=>e.$disabled?"none":"auto"};
  opacity: ${e=>e.$disabled?"0.5":"1"};
  border-radius: 12px;
  width: ${e=>e.$width?e.$width:"fit-content"};
  max-width: 360px;
  text-align: center;

  &:hover {
    background: ${v.gradient};
  }

  @media (${v.tabletLarge}) {
    padding: 12px 16px;
    font-size: 20px;
  }

  @media (${v.mobileLarge}) {
    font-size: 16px;
  }
`,l0=P.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  color: ${v.primaryColor};
  font-size: 24px;
  font-weight: 700;
  width: fit-content;

  &:hover {
    color: transparent;
    background: ${v.gradient};
    -webkit-background-clip: text;
    background-clip: text;
  }

  @media (${v.tabletLarge}) {
    padding: 12px 16px;
    font-size: 20px;
  }

  @media (${v.mobileLarge}) {
    font-size: 16px;
  }
`,sk=P.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`,uk=P.video`
  position: absolute;
  bottom: 0;
  width: 300px;
  height: 587px;

  @media (${v.tabletLarge}) {
    width: 240px;
    height: 510px;
  }

  @media (${v.mobileLarge}) {
    width: 100vw;
    height: calc(100vh - 100px);
  }
`,ck=P.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`,dk=P.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 6px 8px;
  margin: 8px 8px 4px 0;
  border-radius: 40px;
  width: fit-content;
  border: 1px solid
    ${e=>e.$active?"transparent":v.primaryColor};
  background: ${e=>e.$active?v.gradient:"none"};
  span {
    font-size: 14px;
    color: ${e=>e.$active?v.darkTextColor:"transparent"};
    font-weight: ${e=>e.$active?600:400};
    background: ${v.gradient};
    -webkit-background-clip: text;
    background-clip: text;
  }
`,fk=P.div`
  margin: 12px 0;
  box-sizing: border-box;
  height: calc(100% - 24px - 138px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: ${v.secondaryBgColor};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${v.primaryColor};
    border-radius: 12px;
    border: 3px solid ${v.secondaryBgColor};
  }
  scrollbar-color: ${v.primaryColor} ${v.secondaryBgColor};
  scrollbar-width: thin;
`,pk=P.div`
  span {
    font-size: 16px;
    color: transparent;
    background: ${v.gradient};
    -webkit-background-clip: text;
    background-clip: text;
  }
`,s0=P.div`
  margin: 8px 8px 8px 0;
  padding: 8px 16px;
  border-radius: 12px;
  background: ${e=>e.$isEmpty?"transparent":v.secondaryBgColor};
  opacity: ${e=>e.$isComplete?"0.5":"1"};
  pointer-events: ${e=>e.$isComplete?"none":"auto"};
  color: ${v.textColor};
  display: flex;
  align-items: center;
  gap: 32px;
  width: ${e=>e.$isEmpty?"824px":"fit-content"};
  div,
  span {
    display: flex;
    gap: 8px;
    font-size: 14px;
  }
  @media (${v.tabletLarge}) {
    width: 320px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 12px;
    div {
      gap: 0px;
    }
  }
`,Hc=P.div`
  box-sizing: border-box;
  position: relative;
  width: 75%;
  height: 75%;
  display: flex;
  align-items: center;
  flex-direction: ${e=>e.$direction?e.$direction:"row"};
  animation: ${e=>e.$isVisible?bk:Ck} 0.3s ease-out;

  @media (${v.tabletLarge}) {
    flex-direction: column;
    width: 90%;
    height: 90%;
  }

  @media (${v.mobileLarge}) {
    width: 100%;
    height: 100%;
  }
`,u0=P.div`
  box-sizing: border-box;
  border-radius: 24px 0px 0px 24px;
  height: 100%;
  background: ${v.backgroundColor};
  padding: 32px;
  width: 40%;
  position: relative;

  @media (${v.tabletLarge}) {
    padding: 28px;
    height: 25%;
    width: 100%;
    border-radius: 24px 24px 0px 0px;
  }

  @media (${v.mobileLarge}) {
    padding: 24px;
    height: 30%;
    border-radius: 0px;
  }
`,c0=P.div`
  box-sizing: border-box;
  border-radius: 0px 24px 24px 0px;
  height: 100%;
  background: ${v.secondaryBgColor};
  padding: 32px;
  width: 60%;

  @media (${v.tabletLarge}) {
    padding: 28px;
    height: 75%;
    width: 100%;
    border-radius: 0px 0px 24px 24px;
  }

  @media (${v.mobileLarge}) {
    padding: 24px;
    height: 70%;
    border-radius: 0px;
  }
`,mk=P.div`
  box-sizing: border-box;
  border-radius: 24px 24px 0px 0px;
  height: 90px;
  background: ${v.secondaryBgColor};
  padding: 32px;
  width: 100%;

  @media (${v.mobileLarge}) {
    height: 80px;
    padding: 24px;
    border-radius: 0px;
  }
`,hk=P.div`
  box-sizing: border-box;
  height: calc(100% - 222px);
  background: ${v.secondaryBgColor};
  padding: 32px;
  width: 100%;

  @media (${v.mobileLarge}) {
    height: calc(100% - 177px);
    padding: 24px;
  }
`,gk=P.div`
  box-sizing: border-box;
  border-radius: 0px 0px 24px 24px;
  height: 128px;
  background: ${v.secondaryBgColor};
  padding: 32px;
  width: 100%;

  @media (${v.mobileLarge}) {
    padding: 24px;
    border-radius: 0px;
    height: 93px;
  }
`,to=P.div`
  position: relative;
  width: ${e=>e.$width?e.$width:"100%"};
`,At=P.input`
  box-sizing: border-box;
  margin: 8px 0;
  padding: 16px 24px 16px
    ${e=>e.$paddingLeft?e.$paddingLeft:"24px"};
  background: ${v.backgroundColor};
  border: 1px solid ${v.darkTextColor}50;
  border-radius: 12px;
  font-size: 22px;
  color: ${v.textColor};
  outline: 1px solid ${v.darkTextColor}50;
  width: ${e=>e.$width?e.$width:"100%"};
  max-width: 520px;
  letter-spacing: 1px;

  &:focus {
    border-color: ${v.textColor};
  }

  @media (${v.tabletLarge}) {
    font-size: 20px;
  }

  @media (${v.mobileLarge}) {
    font-size: 16px;
    padding: 12px 16px 12px ${e=>e.$paddingLeft?"48px":"16px"};
  }
`,d0=P.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: ${v.lightTextColor};
  pointer-events: none;
  font-size: 24px;

  @media (${v.tabletLarge}) {
    font-size: 20px;
  }

  @media (${v.mobileLarge}) {
    font-size: 16px;
  }
`;P.span`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  margin-right: 8px;
  font-size: 24px;
  color: ${v.lightTextColor};

  @media (${v.tabletLarge}) {
    font-size: 20px;
  }

  @media (${v.mobileLarge}) {
    font-size: 16px;
  }
`;const Yc=P.span`
  display: block;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: ${e=>e.$colored?"0px":"24px"};
  color: ${e=>e.$colored?"transparent":v.textColor};
  background: ${v.gradient};
  -webkit-background-clip: text;
  background-clip: text;

  @media (${v.tabletLarge}) {
    margin-bottom: ${e=>e.$colored?"0px":"16px"};
    font-size: 20px;
    line-height: 28px;
  }
`,Se=P.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${e=>e.$colored?"transparent":v.lightTextColor};
  background: ${v.gradient};
  -webkit-background-clip: text;
  background-clip: text;

  @media (${v.mobileLarge}) {
    font-size: 14px;
    line-height: 20px;
  }
`,Cr=P.span`
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: fit-content;
  color: transparent;
  background: ${v.gradient};
  opacity: ${e=>e.$disabled?"0.5":"1"};
  pointer-events: ${e=>e.$disabled?"none":"auto"};
  -webkit-background-clip: text;
  background-clip: text;

  @media (${v.mobileLarge}) {
    font-size: 14px;
    line-height: 20px;
  }
`,f0=P.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;

  @media (${v.tabletLarge}) {
    top: 60%;
    width: 220px;
  }
`;P.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (${v.tabletLarge}) {
    top: 60%;
  }
`;P.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 4px;
`;const ip=P.div`
  margin-right: auto;
  width: ${e=>e.$width?e.$width+"%":"0"};
  height: 2px;
  background: ${v.gradient};
`,vk=P.label`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
`,Cu=P.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 2;
`,yk=P.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 2px solid ${v.darkTextColor}50;
  background: ${v.backgroundColor};
  border-radius: 4px;
  z-index: 1;

  ${Cu}:checked + & {
    background: ${v.gradient};
    border: none;
  }

  ${Cu}:checked + &::after {
    content: "";
    position: absolute;
    left: 7px;
    top: 4px;
    width: 4px;
    height: 8px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`,xk=P.div`
  width: 100%;
  padding: 16px 0px;
`,wk=P.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: ${v.gradient};
  border-radius: 5px;
  outline: none;
  transition: opacity 0.2s;
  position: relative;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: black;
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    border-radius: 5px;
    background: ${v.gradient};
    width: ${e=>e.$width?e.$width:0}%;
    z-index: 2;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${v.gradient};
    cursor: pointer;
    position: relative;
    z-index: 2;
    margin-top: -10px;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${v.gradient};
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  &::-moz-range-progress {
    background: ${v.gradient};
    height: 5px;
    border-radius: 5px;
  }

  &::-ms-fill-lower {
    background: ${v.gradient};
    height: 5px;
    border-radius: 5px;
  }

  &::-ms-fill-upper {
    background: ${v.gradient};
    height: 5px;
    border-radius: 5px;
  }
`,kk=P.div`
  display: flex;
  border: 1px solid ${v.darkTextColor};
  border-radius: 12px;
  overflow: hidden;
  width: fit-content;
  margin: 16px 0;
`,ap=P.button`
  flex: 1;
  border: none;
  padding: 16px 24px;
  font-size: 20px;
  font-weight: 400;
  background: ${e=>e.$active?v.gradient:v.backgroundColor};
  color: ${e=>e.$active?v.darkTextColor:v.textColor};
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:first-child {
    border-radius: 12px 0 0 12px;
  }

  &:last-child {
    border-radius: 0 12px 12px 0;
  }

  &:hover {
    background: ${v.primaryColor}50;
    color: ${v.darkTextColor};
  }

  @media (${v.tabletLarge}) {
    padding: 12px 16px;
    font-size: 18px;
  }

  @media (${v.mobileLarge}) {
    font-size: 16px;
  }
`,bk=n0`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,Ck=n0`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
`;P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 8px;
  padding: 0 16px;

  @media (${v.tabletLarge}) {
    gap: 2px;
    padding: 0 8px;
  }

  @media (${v.tabletSmall}) {
    order: 3;
    flex-basis: 100%;
    flex-wrap: wrap;
    padding: 0;
  }
`;P.div`
  cursor: pointer;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  border-radius: 8px;
  color: ${e=>e.$active?v.primaryColor:v.lightTextColor};

  &:hover {
    color: ${v.primaryColor};
    background: ${v.darkBgColor};
  }

  @media (${v.desktopSmall}) {
    font-size: 14px;
    padding: 8px;
  }

  @media (${v.tabletLarge}) {
    font-size: 13px;
    padding: 6px;
  }

  @media (${v.mobileLarge}) {
    font-size: 12px;
    padding: 4px 6px;
  }
`;const p0=P.main`
  box-sizing: border-box;
  max-width: 880px;
  margin: 0 auto;
  padding: 48px 64px 96px;
  color: ${v.lightTextColor};

  @media (${v.tabletLarge}) {
    padding: 32px 24px 64px;
  }
`,m0=P.h1`
  font-family: ${v.headerFont};
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${v.textColor};
  margin: 0 0 8px;

  @media (${v.mobileLarge}) {
    font-size: 28px;
    line-height: 36px;
  }
`,Sk=P.div`
  font-size: 14px;
  color: ${v.highlightColor};
  margin-bottom: 16px;
`,Ek=P.h2`
  font-family: ${v.headerFont};
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: ${v.primaryColor};
  margin: 32px 0 8px;

  @media (${v.mobileLarge}) {
    font-size: 19px;
    line-height: 26px;
  }
`,$k=P.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${v.textColor};
  margin: 20px 0 6px;
`,Gc=P.p`
  font-size: 16px;
  line-height: 26px;
  margin: 8px 0;

  strong {
    color: ${v.textColor};
  }
`,jk=P.ul`
  font-size: 16px;
  line-height: 26px;
  margin: 8px 0;
  padding-left: 20px;

  li {
    margin-bottom: 6px;
  }

  strong {
    color: ${v.textColor};
  }
`,Pk=P.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  background: ${v.secondaryBgColor};
  border-radius: 16px;
  padding: 32px;
  margin: 32px 0;

  @media (${v.mobileLarge}) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
`,Na=P.div`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${v.highlightColor};
  margin-bottom: 6px;
`,La=P.div`
  font-size: 18px;
  line-height: 26px;
  color: ${v.textColor};
  text-decoration: none;
  overflow-wrap: anywhere;
`,Ak=P.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,op=P.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: ${v.darkBgColor};
  }

  img {
    height: 22px;
  }
`,_k=P.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end;
`,Tk=P.aside`
  box-sizing: border-box;
  width: min(380px, 100%);
  height: 100%;
  overflow-y: auto;
  background: ${v.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 8px;
`,Rk=P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${v.headerFont};
  font-size: 20px;
  font-weight: 600;
  color: ${v.textColor};
  padding-bottom: 16px;
  border-bottom: 1px solid ${v.secondaryBgColor};
`,lp=P.div`
  border-top: ${e=>e.$divider?`1px solid ${v.secondaryBgColor}`:"none"};
  padding-top: ${e=>e.$divider?"20px":"0"};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${v.highlightColor};
  margin: 20px 0 4px;
`,sp=P.button`
  text-align: left;
  border: none;
  background: ${e=>e.$active?v.secondaryBgColor:"transparent"};
  color: ${e=>e.$active?v.primaryColor:v.textColor};
  font-family: inherit;
  font-size: 17px;
  font-weight: 600;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: ${v.secondaryBgColor};
    color: ${v.primaryColor};
  }
`,Ok=P.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid ${v.secondaryBgColor};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`,up=P.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${v.lightTextColor};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: ${v.primaryColor};
  }
`,h0=ml`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 20px;
  cursor: pointer;
  text-decoration: none;
  width: ${e=>e.$block?"100%":"auto"};

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,Dr=P.button`
  ${h0}
  border: none;
  background: ${v.primaryColor};
  color: ${v.secondaryTextColor};

  &:hover:not(:disabled) {
    background: ${v.gradient};
  }
`,xi=P.button`
  ${h0}
  border: 1.5px solid ${v.primaryColor};
  background: transparent;
  color: ${v.primaryColor};

  &:hover:not(:disabled) {
    background: rgba(212, 244, 101, 0.1);
  }
`,zo=P.main`
  box-sizing: border-box;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 64px 80px;
  color: ${v.lightTextColor};

  @media (${v.tabletLarge}) {
    padding: 32px 16px 64px;
  }
`,Do=P.h1`
  font-family: ${v.headerFont};
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${v.textColor};
  margin: 0 0 8px;

  @media (${v.mobileLarge}) {
    font-size: 30px;
    line-height: 38px;
  }
`,Mo=P.p`
  font-size: 17px;
  line-height: 26px;
  margin: 0 0 28px;
  max-width: 640px;
`,cp=P.div`
  font-size: 13px;
  font-weight: 700;
  color: ${v.textColor};
  margin: 0 0 8px;
`,Su=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,no=P.button`
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
  border: 1.5px solid
    ${e=>e.$active?v.primaryColor:v.secondaryBgColor};
  background: ${e=>e.$active?v.primaryColor:v.secondaryBgColor};
  color: ${e=>e.$active?v.secondaryTextColor:v.lightTextColor};

  &:hover {
    border-color: ${v.primaryColor};
  }
`,Nk=P.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (${v.mobileLarge}) {
    grid-template-columns: 1fr;
  }
`,Lk=P.article`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  background: ${v.secondaryBgColor};
  border: 1.5px solid
    ${e=>e.$selected?v.primaryColor:"transparent"};
`,Ik=P.div`
  position: relative;
  height: 160px;
  background: ${e=>e.$bg};
  display: flex;
  align-items: flex-end;
  padding: 12px;
  box-sizing: border-box;

  img {
    position: absolute;
    right: 16px;
    top: 16px;
    height: 44px;
    opacity: 0.35;
  }
`,zk=P.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
  flex: 1;
`,Dk=P.h3`
  font-family: ${v.headerFont};
  font-size: 22px;
  font-weight: 600;
  color: ${v.textColor};
  margin: 0;
`,Mk=P.p`
  font-size: 15px;
  line-height: 22px;
  margin: 0;
`,Fk=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Bk=P.span`
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  color: ${v.darkTextColor};
  background: ${e=>e.$tone==="blue"?v.highlightColor:v.primaryColor};
`,Uk=P.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 12px;
  margin: 0;
  font-size: 14px;

  dt {
    color: ${v.highlightColor};
    font-weight: 600;
  }

  dd {
    margin: 0;
    color: ${v.textColor};
  }
`,Wk=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: auto;
  padding-top: 6px;
`,Vk=P.div`
  padding: 40px;
  text-align: center;
  border-radius: 16px;
  background: ${v.secondaryBgColor};
`,_n=P.section`
  box-sizing: border-box;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 16px;
  background: ${v.secondaryBgColor};
  opacity: ${e=>e.$locked?.5:1};
  pointer-events: ${e=>e.$locked?"none":"auto"};

  @media (${v.mobileLarge}) {
    padding: 18px;
  }
`,Sr=P.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${v.headerFont};
  font-size: 20px;
  font-weight: 600;
  color: ${v.textColor};
  margin: 0 0 16px;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 15px;
    color: ${v.secondaryTextColor};
    background: ${e=>e.$done?v.highlightColor:v.primaryColor};
  }
`,Hk=P.button`
  width: 100%;
  text-align: left;
  font-family: inherit;
  color: ${v.lightTextColor};
  background: ${v.backgroundColor};
  border: 1.5px solid
    ${e=>e.$selected?v.primaryColor:"transparent"};
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  strong {
    display: block;
    font-size: 17px;
    color: ${v.textColor};
    margin-bottom: 4px;
  }

  small {
    font-size: 14px;
  }

  &:hover {
    border-color: ${v.primaryColor};
  }
`,dp=P.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
  display: grid;
  gap: 8px;
  font-size: 16px;
  color: ${v.textColor};
`,ro=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;

  @media (${v.mobileLarge}) {
    grid-template-columns: 1fr;
  }
`,Xe=P.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${v.textColor};
  grid-column: ${e=>e.$full?"1 / -1":"auto"};
`,g0=ml`
  box-sizing: border-box;
  width: 100%;
  font-family: inherit;
  font-size: 16px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1.5px solid ${v.backgroundColor};
  background: ${v.backgroundColor};
  color: ${v.textColor};

  &:focus {
    outline: none;
    border-color: ${v.highlightColor};
  }
`,Tn=P.input`
  ${g0}

  &::placeholder {
    color: ${v.lightTextColor};
    opacity: 0.5;
  }
`,Eu=P.select`
  ${g0}
`,v0=P.div`
  display: flex;

  span {
    display: flex;
    align-items: center;
    padding: 0 12px;
    border-radius: 10px 0 0 10px;
    background: ${v.darkBgColor};
    color: ${v.lightTextColor};
  }

  input {
    border-radius: 0 10px 10px 0;
  }
`,$u=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Yk=P.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 16px;
  cursor: pointer;

  input {
    width: 18px;
    height: 18px;
    margin-top: 2px;
    accent-color: ${v.primaryColor};
  }
`,Gk=P.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  background: ${v.backgroundColor};
  border: 1.5px solid
    ${e=>e.$selected?v.primaryColor:"transparent"};
  color: ${v.textColor};

  input {
    accent-color: ${v.primaryColor};
  }

  small {
    display: block;
    color: ${v.highlightColor};
  }
`,wi=P.div`
  font-size: 14px;
  line-height: 21px;
  padding: 12px 14px;
  border-radius: 10px;
  margin-bottom: 16px;
  background: ${v.backgroundColor};
  border-left: 3px solid ${v.highlightColor};
`,Qk=P.div`
  font-size: 13px;
  color: #ff9b9b;
  margin: -8px 0 16px;
`,Kk=P.footer`
  box-sizing: border-box;
  background: ${v.darkBgColor};
  border-top: 1px solid ${v.secondaryBgColor};
  padding: 40px 64px;
  color: ${v.lightTextColor};

  @media (${v.tabletLarge}) {
    padding: 32px 16px;
  }
`,Xk=P.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
`,Jk=P.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Zk=P.button`
  text-align: left;
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  color: ${v.lightTextColor};
  cursor: pointer;

  &:hover {
    color: ${v.primaryColor};
  }
`,qk=P.div`
  font-size: 14px;
  line-height: 22px;
  max-width: 320px;

  img {
    height: 28px;
    margin-bottom: 12px;
  }
`,gl="/revel-preview/assets/revel-logo-j5PHCn4H.svg",eb="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.5%2024.5H26.5M5.5%2016.5H26.5M5.5%208.5H26.5'%20stroke='url(%23paint0_linear_552_7022)'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_552_7022'%20x1='4.9081'%20y1='7.79337'%20x2='29.8077'%20y2='12.6511'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2381E0FF'/%3e%3cstop%20offset='1'%20stop-color='%23D4F465'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Qc="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.0001%2013.8294L18.0708%2020.9C18.446%2021.2752%2018.9549%2021.486%2019.4855%2021.486C20.0161%2021.486%2020.5249%2021.2752%2020.9001%2020.9C21.2753%2020.5248%2021.4861%2020.016%2021.4861%2019.4854C21.4861%2018.9548%2021.2753%2018.4459%2020.9001%2018.0707L13.8268%2011L20.8988%203.92936C21.0845%203.74358%2021.2318%203.52305%2021.3322%203.28035C21.4327%203.03766%2021.4844%202.77755%2021.4843%202.51489C21.4842%202.25222%2021.4324%201.99214%2021.3319%201.74949C21.2313%201.50684%2021.0839%201.28638%2020.8981%201.10069C20.7123%200.915002%2020.4918%200.767723%2020.2491%200.667262C20.0064%200.566802%2019.7463%200.515127%2019.4837%200.515189C19.221%200.515251%2018.9609%200.567048%2018.7183%200.667623C18.4756%200.768198%2018.2551%200.915582%2018.0695%201.10136L11.0001%208.17202L3.92946%201.10136C3.74505%200.910253%203.52444%200.757786%203.28048%200.652855C3.03652%200.547923%202.77411%200.492628%202.50855%200.490196C2.24299%200.487764%201.97961%200.538244%201.73377%200.63869C1.48793%200.739135%201.26456%200.887536%201.07669%201.07523C0.888814%201.26293%200.740203%201.48616%200.639526%201.73191C0.538848%201.97765%200.48812%202.24098%200.490302%202.50654C0.492483%202.7721%200.547531%203.03457%200.652232%203.27862C0.756933%203.52268%200.909192%203.74344%201.10012%203.92803L8.17346%2011L1.10146%2018.072C0.910526%2018.2566%200.758267%2018.4774%200.653566%2018.7214C0.548864%2018.9655%200.493817%2019.2279%200.491635%2019.4935C0.489454%2019.7591%200.540181%2020.0224%200.640859%2020.2681C0.741537%2020.5139%200.890148%2020.7371%201.07802%2020.9248C1.26589%2021.1125%201.48927%2021.2609%201.73511%2021.3614C1.98094%2021.4618%202.24433%2021.5123%202.50988%2021.5099C2.77544%2021.5074%203.03785%2021.4521%203.28181%2021.3472C3.52577%2021.2423%203.74639%2021.0898%203.93079%2020.8987L11.0001%2013.8294Z'%20fill='url(%23paint0_linear_554_8054)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_554_8054'%20x1='-0.10155'%20y1='-0.438215'%20x2='25.1833'%20y2='3.31588'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2381E0FF'/%3e%3cstop%20offset='1'%20stop-color='%23D4F465'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",tb=()=>{const[e,t]=C.useState(!1),n=wn(),{pathname:r}=Wr();C.useEffect(()=>{document.body.style.overflow=e?"hidden":"";const a=o=>o.key==="Escape"&&t(!1);return window.addEventListener("keydown",a),()=>{document.body.style.overflow="",window.removeEventListener("keydown",a)}},[e]);const i=a=>{t(!1),n(a)};return u.jsxs(u.Fragment,{children:[u.jsxs(qw,{children:[u.jsx(Vc,{src:gl,alt:"revel-logo",onClick:()=>i("/")}),u.jsxs(Ak,{children:[u.jsx(Qn,{onClick:()=>i("/book-trial"),children:"Book Trial"}),u.jsx(op,{"aria-label":"Open menu",onClick:()=>t(!0),children:u.jsx("img",{src:eb,alt:""})})]})]}),e&&u.jsx(_k,{onClick:()=>t(!1),children:u.jsxs(Tk,{role:"dialog","aria-label":"Menu",onClick:a=>a.stopPropagation(),children:[u.jsxs(Rk,{children:["Revel Dance Academy",u.jsx(op,{"aria-label":"Close menu",onClick:()=>t(!1),children:u.jsx("img",{src:Qc,alt:""})})]}),u.jsx(lp,{children:"Main navigation"}),Xw.map(a=>u.jsx(sp,{$active:r===a.path,onClick:()=>i(a.path),children:a.label},a.path)),u.jsx(Dr,{$block:!0,style:{margin:"16px 0 4px"},onClick:()=>i("/book-trial"),children:"Book Free Trial"}),u.jsx(lp,{$divider:!0,children:"Studio info & policies"}),i0.map(a=>u.jsx(sp,{$active:r===a.path,onClick:()=>i(a.path),children:a.label},a.path)),u.jsxs(Ok,{children:[u.jsxs(up,{href:Jw,target:"_blank",children:[u.jsx(hn,{icon:Ag}),"Adyar, Chennai"]}),u.jsxs(up,{href:hl(),target:"_blank",children:[u.jsx(hn,{icon:Y2}),"WhatsApp Us"]})]})]})})]})},nb=()=>{const e=wn();return u.jsx(Kk,{children:u.jsxs(Xk,{children:[u.jsxs(qk,{children:[u.jsx("img",{src:gl,alt:"revel-logo"}),u.jsx("div",{children:Me.address}),u.jsxs("div",{children:[Me.phone," · ",Me.email]})]}),u.jsx(Jk,{"aria-label":"Studio info and policies",children:i0.map(t=>u.jsx(Zk,{onClick:()=>e(t.path),children:t.label},t.path))})]})})},gn=({title:e,children:t})=>(C.useEffect(()=>{window.scrollTo(0,0),document.title=e?`${e} | Revel`:"Revel"},[e]),u.jsxs(Zw,{children:[u.jsx(tb,{}),t,u.jsx(nb,{})]})),rb="/revel-preview/assets/revel-explainer-7sQERqlx.mp4",ib=()=>{const e=C.useRef(null);return C.useEffect(()=>{const t=e.current,n=()=>{document.visibilityState==="visible"?t.play():t.pause()},r=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&a.intersectionRatio>=.1?t.play():t.pause()})},{threshold:.1});return r.observe(t),document.addEventListener("visibilitychange",n),()=>{r.unobserve(t),document.removeEventListener("visibilitychange",n)}},[]),u.jsx(Uc,{$paddingY:"0",children:u.jsx(sk,{children:u.jsxs(uk,{ref:e,autoPlay:!0,muted:!0,playsInline:!0,loop:!0,preload:"auto",children:[u.jsx("source",{src:rb,type:"video/mp4"}),"Unsupported video"]})})})},ab=()=>{const e=wn();return u.jsx(Uc,{children:u.jsxs(ek,{children:[u.jsx("style",{children:`
          .noWrapDesktop { white-space: nowrap; }
          @media (max-width: 768px) { .noWrapDesktop { white-space: normal; } }
        `}),u.jsxs(ok,{children:["Dance for the joy of it."," ",u.jsxs(lk,{children:[u.jsx("span",{className:"noWrapDesktop",children:"Join our Community"}),u.jsx("br",{}),"Classes and courses for all ages"]})]}),u.jsxs(lt,{$gap:"24px",children:[u.jsx(l0,{onClick:()=>e("/classes"),children:"View Classes"}),u.jsx(Qn,{onClick:()=>e("/book-trial"),children:"Book Trial"})]})]})})},ob=()=>u.jsxs(gn,{children:[u.jsx(ab,{}),u.jsx(ib,{})]}),lb={December:[{day:6,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"3:30 - 4:30 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:00 - 6:00 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"6:30 - 7:30 pm"}]},{day:7,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"10:00 - 11:00 am"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"11:15 - 12:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"12:30 - 1:30 pm"}]},{day:8,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"4:00 - 5:00 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:15 - 6:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"7:00 - 8:00 pm"}]},{day:10,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"4:00 - 5:00 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:15 - 6:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"7:00 - 8:00 pm"}]},{day:13,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"3:30 - 4:30 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:00 - 6:00 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"6:30 - 7:30 pm"}]},{day:14,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"10:00 - 11:00 am"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"11:15 - 12:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"12:30 - 1:30 pm"}]},{day:15,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"4:00 - 5:00 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:15 - 6:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"7:00 - 8:00 pm"}]},{day:17,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"4:00 - 5:00 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:15 - 6:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"7:00 - 8:00 pm"}]},{day:20,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"3:30 - 4:30 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:00 - 6:00 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"6:30 - 7:30 pm"}]},{day:21,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"10:00 - 11:00 am"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"11:15 - 12:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"12:30 - 1:30 pm"}]},{day:22,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"4:00 - 5:00 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:15 - 6:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"7:00 - 8:00 pm"}]},{day:24,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"4:00 - 5:00 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:15 - 6:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"7:00 - 8:00 pm"}]},{day:27,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"3:30 - 4:30 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:00 - 6:00 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"6:30 - 7:30 pm"}]},{day:28,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"10:00 - 11:00 am"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"11:15 - 12:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"12:30 - 1:30 pm"}]},{day:29,events:[{category:"kids-class",venue:"Revel Dance Academy, Adyar",time:"4:00 - 5:00 pm"},{category:"junior-class",venue:"Revel Dance Academy, Adyar",time:"5:15 - 6:15 pm"},{category:"adult-class",venue:"Revel Dance Academy, Adyar",time:"7:00 - 8:00 pm"}]}]},sb=e=>{if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},ub=(e,t,n=2025)=>{const r=new Date(`${e} ${t}, ${n}`),i=Kw[r.getDay()],a=sb(t);return`${t}${a} - ${i}`},cb=()=>["January","February","March","April","May","June","July","August","September","October","November","December"][new Date().getMonth()],db=e=>{let t=1;const n={};for(const r in e)n[r]=e[r].map(i=>({...i,events:i.events.map(a=>({...a,id:t++}))}));return n},vl=e=>/^\d{10}$/.test(e),fb=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),Fo=()=>/Mobi|Android/i.test(navigator.userAgent),pb=({setSelectedOption:e})=>{const[t,n]=C.useState("all");return u.jsx("div",{children:r0.map((r,i)=>u.jsx(dk,{$active:r.value===t,onClick:()=>{e(r),n(r.value)},children:u.jsx("span",{children:r.label})},`${r.value}-${i}`))})},yl={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},fp={width:"180px",fontWeight:"600",...yl},pp={width:"130px",...yl},mp={display:"flex",gap:"4px",alignItems:"center",width:"120px",...yl},hp={display:"flex",gap:"4px",alignItems:"center",width:"280px",...yl},gp={width:"fit-content",marginRight:"4px",color:`${v.primaryColor}`},vp={boxSizing:"border-box",width:"56px",height:"56px",marginRight:"12px",borderRadius:"8px",backgroundColor:v.backgroundColor,border:`1px solid ${v.darkTextColor}`,color:v.textColor,fontSize:"20px"},mb={marginRight:"8px",width:"42px",height:"42px",fontSize:"14px"},hb={color:`${v.darkTextColor}`,marginTop:"12px"},gb=({day:e,month:t,currentMonth:n,currentDay:r,events:i,eventRefs:a,getFormattedDate:o,fetchArtForm:l,monthToNumber:s})=>{const c=C.useCallback(({category:d,faculty:p,time:g,venue:x,id:k,type:w})=>u.jsxs(s0,{$isComplete:s[t]<s[n]||s[t]===s[n]&&e<r,children:[u.jsxs("div",{children:[u.jsxs("span",{style:gp,children:["#",k]}),u.jsx("span",{style:fp,children:l(d,w)}),u.jsxs("span",{style:mp,children:[u.jsx(hn,{icon:Q2,fontSize:"12px",color:v.primaryColor})," ",g]})]}),u.jsxs("span",{style:hp,children:[u.jsx(hn,{icon:Ag,fontSize:"12px",color:v.primaryColor})," ",x]}),u.jsx("span",{style:pp,children:p})]},`${d}-${k}`),[s,t,n,r,l,gp,fp,mp,hp,pp]);return u.jsxs("div",{ref:d=>{a.current[`${t}-${e}`]=d},id:`${t}-${e}`,children:[u.jsx(pk,{children:u.jsx("span",{children:o(t,e)})}),i.map(c)]})},yp=db(lb),vb=()=>{const e=new Date().getDate(),t=cb(),n=C.useRef({}),r=C.useRef(null),i=C.useRef(null),a=C.useRef(null),[o,l]=C.useState(t),[s,c]=C.useState(r0[0]),[d,p]=C.useState(!0),[g,x]=C.useState(!0),k=C.useMemo(()=>Object.entries(yp).flatMap(([S,y])=>y.map(L=>({...L,month:S,monthNumber:np[S]}))).sort((S,y)=>S.monthNumber-y.monthNumber||S.day-y.day),[yp]),w=C.useMemo(()=>!s||s.value==="all"?k:k.map(E=>({...E,events:E.events.filter(S=>{const y=E.month!==t||E.day>=e;return s.value==="workshop"?S.type==="workshop"&&y:s.value==="event"?S.type==="event"&&y:S.category===s.value&&y})})).filter(E=>E.events.length>0),[k,s,e,t]),j=C.useCallback((E,S)=>{var y;return((y=Qw.find(L=>S!==null?(L==null?void 0:L.value)===E&&(L==null?void 0:L.type)===S:(L==null?void 0:L.value)===E))==null?void 0:y.label)||"Other"},[]),h=C.useCallback(()=>`No ${(s==null?void 0:s.value)==="workshop"?"Workshop(s)":"Event(s)"} found`,[s==null?void 0:s.value]),f=C.useCallback(E=>{E.forEach(S=>{if(S.isIntersecting){const[y]=S.target.id.split("-");l(y)}})},[]),m=C.useCallback(()=>{if(i.current){const S=i.current.getBoundingClientRect().top;p(S<-50)}const E=`${t}-${e}`;if(n.current[E]){const S=n.current[E].getBoundingClientRect().top;x(S>window.innerHeight)}},[t,e,i,n]),b=()=>{i.current&&i.current.scrollIntoView({behavior:"smooth"})},$=()=>{const E=(y,L)=>{for(let z=L;z<=31;z++){const ae=`${y}-${z}`;if(n.current[ae])return n.current[ae].scrollIntoView({behavior:"smooth"}),!0}return!1},S=`${t}-${e}`;if(n.current[S])n.current[S].scrollIntoView({behavior:"smooth"});else if(!E(t,e+1)){const y=Object.keys(n.current).filter(L=>L.startsWith(`${t}-`)).sort()[0];y&&n.current[y]&&n.current[y].scrollIntoView({behavior:"smooth"})}};return C.useEffect(()=>{const E=a.current;return E&&E.addEventListener("scroll",m),()=>{E&&E.removeEventListener("scroll",m)}},[m]),C.useEffect(()=>{r.current||(r.current=new IntersectionObserver(f,{root:null,threshold:.5}));const E=r.current;return Object.values(n.current).forEach(S=>{S&&E.observe(S)}),()=>{E.disconnect()}},[w]),C.useEffect(()=>{$()},[s,e,t,n]),u.jsx(Uc,{children:u.jsxs(ck,{children:[u.jsx(rk,{children:u.jsx(nk,{children:o})}),w.length>0&&u.jsxs(ak,{children:[u.jsx(rp,{$disabled:!d,onClick:b,children:u.jsx(hn,{icon:G2})}),u.jsx(rp,{$disabled:!g,onClick:$,children:u.jsx(hn,{icon:H2})})]}),u.jsxs("div",{children:[u.jsx(tk,{children:"Classes"}),u.jsx(pb,{setSelectedOption:c}),u.jsxs(fk,{ref:a,children:[u.jsx(ik,{ref:i}),w.length>0?w.map(({day:E,month:S,events:y})=>u.jsx(gb,{day:E,month:S,currentMonth:t,currentDay:e,events:y,eventRefs:n,getFormattedDate:ub,fetchArtForm:j,monthToNumber:np},`${S}-${E}`)):u.jsx(s0,{$isEmpty:!0,children:h()})]})]})]})})},yb=ve.memo(vb),xb=()=>u.jsx(gn,{title:"Schedule",children:u.jsx(yb,{})}),Zn=[{label:"Entity Name:",text:"Revel Dance Academy"},{label:"Email:",text:"frontdeskrevel@gmail.com"},{label:"Phone / WhatsApp:",text:"+91 9384826894"},{label:"Address:",text:"1st Floor, 9a, 4th St, Venkateswara Nagar, Adyar, Chennai, Tamil Nadu 600020"}],wb={terms:{title:"Terms and Conditions",effective:"Apr 01, 2026",intro:['Welcome to Revel Dance Academy ("the Company", "we", "us", "our"). These Terms and Conditions ("Terms") govern your enrollment, attendance, purchase of services, and participation in classes, courses, workshops, programs, training sessions, and events conducted by Revel Dance Academy (whether in-person at our studio/external venues or online via digital platforms).',"By enrolling, making a payment, accessing our website, or participating in any of our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions."],sections:[{heading:"1. General Overview & Eligibility",blocks:[{label:"1.1",p:"Services provided by Revel Dance Academy include dance instruction, workshops, choreography sessions, performance programs, studio rentals, and related events."},{label:"1.2",p:"Enrolling in certain batches or programs may be subject to minimum age requirements, prerequisites, or skill-level evaluations determined by the instructors."}]},{heading:"2. Payment Terms & Gateway Integrations",blocks:[{label:"2.1 Full Advance Payment:",p:"Full payment of applicable fees must be completed prior to participation in any class, batch, or workshop. Access to classes will be denied if payment is incomplete."},{label:"2.2 Payment Processing:",p:"Payments made through our online channels are processed securely via third-party payment gateways, including Razorpay, Cardless credit platforms or direct banking channels. By initiating a transaction, you agree to comply with the terms and conditions of the respective payment service provider."},{label:"2.3 Non-Refundable & Non-Transferable:",p:"All fees paid are strictly non-refundable under all circumstances except as explicitly defined in our Cancellation and Refund Policy. Fees cannot be transferred to another individual, carried forward to subsequent months/terms, or adjusted against other programs or batches."},{label:"2.4 Discounts and Promotions:",p:"Promotional rates, early-bird pricing, or discounts are offered at the sole discretion of the Company and may be modified or withdrawn without prior notice."}]},{heading:"3. Liability, Health & Physical Safety",blocks:[{label:"3.1 Physical Activity Acknowledgment:",p:"Participation in dance classes involves strenuous physical activity. You acknowledge the inherent risks associated with physical exercise, including minor or severe personal injury, strain, or medical complications."},{label:"3.2 Limitation of Liability:",p:"Revel Dance Academy, its owners, instructors, employees, and staff shall not be liable for any personal injury, illness, accident, or physical strain sustained before, during, or after classes, rehearsals, or events (conducted on-site, off-site, or online)."},{label:"3.3 Medical Clearance:",p:"Students participate at their own risk and are strongly advised to consult a qualified medical professional prior to starting any physical training program."},{label:"3.4 Personal Belongings:",p:"The Company accepts no responsibility or liability for the loss, theft, or damage of personal belongings, valuables, or equipment brought onto studio premises or event venues."}]},{heading:"4. Code of Conduct & Studio Discipline",blocks:[{label:"4.1 Behavior Standard:",p:"Disrespectful, abusive, unsafe, or disruptive behavior toward instructors, staff, fellow students, or guests will not be tolerated. The Company reserves the right to terminate participation immediately without refund in case of misconduct."},{label:"4.2 Studio Rules:",p:""},{list:["Guests, parents, or guardians are not allowed inside the teaching area during class without explicit authorization.","Chewing gum, food, and non-water beverages are strictly prohibited on the dance floor.","Students must store personal belongings in designated storage areas and maintain personal hygiene and space awareness.","Misuse or damage of studio property will result in financial repair/replacement charges levied against the responsible individual."]}]},{heading:"5. Attendance & Missed Classes",blocks:[{label:"5.1 Student Absence:",p:"The Company is under no obligation to compensate for missed classes, late arrivals, or absences resulting from personal circumstances, medical illness, travel, or scheduling conflicts."},{label:"5.2 No Replacement Sessions:",p:"Missed or unused classes cannot be carried forward, refunded, or credited toward future billing cycles."},{label:"5.3 Company Cancellations:",p:"If a class is cancelled or rescheduled by the Company due to operational needs, instructor unavailability, or unforeseen circumstances, a replacement/make-up session or credit may be provided at the Company's sole discretion."}]},{heading:"6. Intellectual Property & Media Rights",blocks:[{label:"6.1 Choreography Ownership:",p:"All routines, original choreography, training materials, concepts, and audio-visual instructional content created or taught by Revel Dance Academy remain the exclusive intellectual property of the Company."},{label:"6.2 Usage Restrictions:",p:"Recording, teaching, distributing, performing commercially, or publishing any proprietary class material or choreography without prior written permission from the Company is strictly prohibited."},{label:"6.3 Social Media & Collaborations:",p:"Posting class videos on social media platforms must adhere to studio tagging guidelines. Acceptance of joint collaboration requests on social media is at the sole discretion of the Company."}]},{heading:"7. CCTV Monitoring & Media Consent",blocks:[{label:"7.1 CCTV Surveillance:",p:"For security, safety, and operational monitoring, CCTV cameras are installed covering teaching, reception, and waiting areas. Recorded footage is securely stored and accessed primarily for security reviews or resolving formal concerns/complaints."},{label:"7.2 Promotional Content:",p:"The Company regularly documents classes, workshops, and performances through photography and videography."},{label:"7.3 Media License:",p:"By enrolling, students (or parents/guardians of minors) grant Revel Dance Academy a royalty-free, perpetual license to use captured photographs and video recordings for marketing, promotional campaigns, social media content, and website display without financial compensation."},{label:"7.4 Opt-Out Request:",p:"Students who prefer not to be recorded must inform the administration in writing during registration. While reasonable efforts will be made to honor this request, complete exclusion from general group footage or wide-angle crowd shots cannot be guaranteed."}]},{heading:"8. Protection of Minors, Women, and Gender Minorities",blocks:[{label:"8.1 Zero Tolerance:",p:"Revel Dance Academy enforces a zero-tolerance policy against sexual harassment, abuse, exploitation, discrimination, or psychological harm."},{label:"8.2 Code of Conduct:",p:"All staff, instructors, students, and visitors must adhere strictly to our internal Studio Policies for the Protection of Children, Women, and Gender Minorities. Any violation will lead to immediate service termination and legal action where applicable under local law."}]},{heading:"9. Modifications and Termination",blocks:[{label:"9.1",p:"The Company reserves the right to amend, update, or alter these Terms and Conditions at any time. Updated versions will be published on our website with the revised effective date."},{label:"9.2",p:"Continued participation in our classes or use of our online portal constitutes binding acceptance of the updated Terms."}]},{heading:"10. Contact Information",blocks:[{p:"For questions or concerns regarding these Terms and Conditions, please contact us:"},{list:Zn}]}]},privacy:{title:"Privacy Policy",effective:"Apr 01, 2026",intro:['Revel Dance Academy ("we", "us", "our") is committed to protecting the privacy, accuracy, and security of your personal data. This Privacy Policy describes how we collect, use, store, share, and safeguard your information when you visit our website, enroll in our classes, use our online portals, or interact with us through third-party services.'],sections:[{heading:"1. Information We Collect",blocks:[{p:"We collect personal information necessary to deliver our services, process payments, ensure safety, and comply with operational requirements."},{sub:"A. Information You Provide Directly:"},{list:[{label:"Contact Information:",text:"Name, email address, phone number, WhatsApp number, residential address."},{label:"Student Details:",text:"Age, gender, emergency contact details, medical conditions/allergies/injuries disclosed during registration."},{label:"Minor Details:",text:"Name, age, and parent/guardian contact details for students under 18 years of age."},{label:"Media:",text:"Photos or video recordings captured during classes, workshops, rehearsals, or events."}]},{sub:"B. Payment and Financial Data:"},{p:"When you make online payments, your credit/debit card, UPI, bank account, or EMI credentials are collected and processed directly by our integrated PCI-DSS compliant payment gateways (Razorpay, Cardless EMI platforms, or bank partners). Revel Dance Academy does not store or save your full payment card details or sensitive banking credentials on our servers."},{sub:"C. Technical & Automated Information:"},{list:["IP address, browser type, device information, operating system, and website usage data collected through cookies and tracking tools to optimize user experience."]}]},{heading:"2. How We Use Your Information",blocks:[{p:"We process your personal data for the following operational and lawful purposes:"},{list:["Processing enrollments, managing batch rosters, and maintaining student records.","Facilitating transactions, processing payments, and generating invoices/receipts via integrated payment gateways.","Communicating important updates, class schedules, fee reminders, emergency announcements, and promotional offers via WhatsApp, SMS, or email.","Ensuring studio safety, managing emergency situations, and upholding safety policies.","Utilizing photos and video footage for marketing, website showcases, social media content, and promotional releases (per our Terms & Conditions).","Complying with legal obligations, accounting standards, and statutory requirements."]}]},{heading:"3. CCTV Monitoring and Security Data",blocks:[{label:"3.1 Surveillance Purpose:",p:"Closed-Circuit Television (CCTV) cameras operate across studio premises (teaching areas, reception, and waiting zones) for security, safety, and complaint resolution."},{label:"3.2 Data Handling:",p:"CCTV footage is stored securely on protected access-controlled media and retained for a limited duration, after which it is overwritten, unless required for ongoing safety reviews or legal matters."}]},{heading:"4. Data Sharing and Disclosure",blocks:[{p:"We do not sell, rent, or trade your personal information to third parties for marketing purposes. We share data only with trusted entities as described below:"},{list:[{label:"Payment Service Providers:",text:"We share necessary transaction metadata with authorized payment processors to process payments, handle chargebacks, or resolve failed transactions."},{label:"Service Software & Tools:",text:"Cloud software providers (e.g., student management systems, database tools, automated messaging tools) that assist us in administrative operations under strict confidentiality obligations."},{label:"Legal Compliance:",text:"We may disclose personal data if required by law, court order, regulatory direction, or government request to protect rights, property, safety, or legal interests."}]}]},{heading:"5. Data Security Measures",blocks:[{p:"We implement appropriate technical, physical, and administrative security standards to protect your personal information against unauthorized access, loss, misuse, alteration, or disclosure. Online transaction environments utilize SSL encryption technology through certified payment partners."}]},{heading:"6. Protection of Minors and Gender Minorities",blocks:[{p:"We maintain strict privacy safeguards regarding data collected from children under 18, women, and gender minorities, in alignment with our studio safety framework. Information relating to minors is maintained with heightened security and accessible only to authorized administrative personnel."}]},{heading:"7. Your Rights & Choices",blocks:[{list:[{label:"Access & Correction:",text:"You may review or request updates to your personal contact information by contacting studio administration."},{label:"Opt-Out of Marketing:",text:"You can opt out of receiving marketing emails or promotional messages by using the unsubscribe option or messaging our admin team directly. (Essential service updates regarding paid batches will still be delivered)."},{label:"Media Opt-Out:",text:"To opt out of promotional photography/videography exposure, please submit a written request during registration."}]}]},{heading:"8. Updates to This Privacy Policy",blocks:[{p:'We reserve the right to revise this Privacy Policy periodically to reflect operational, legal, or regulatory updates. Any changes will be posted on this page with an updated "Effective Date".'}]},{heading:"9. Contact Us & Grievance Redressal",blocks:[{p:"If you have questions, concerns, or grievances regarding this Privacy Policy or data processing practices, please reach out to us:"},{list:[Zn[0],{label:"Grievance / Admin Contact:",text:"Studio Administrator"},...Zn.slice(1)]}]}]},cancellation:{title:"Cancellation and Refund Policy",effective:"Apr 01, 2026",intro:["This Cancellation and Refund Policy sets forth the rules governing cancellations, refunds, batch switches, and transaction processing for purchases made with Revel Dance Academy through our physical studio, website, payment gateways, including Razorpay, Cardless credit platforms or direct banking channels."],sections:[{heading:"1. General Refund Policy",blocks:[{label:"1.1 All Sales are Final:",p:"All payments made toward class enrollments, monthly subscriptions, workshops, courses, masterclasses, studio rentals, and event passes are non-refundable and non-transferable."},{label:"1.2",p:"Once payment has been successfully processed, no full or partial refunds will be issued under any circumstances, including but not limited to:"},{list:["Student absence or late arrival.","Change of personal schedule, work commitments, or exams.","Relocation, medical reasons, or personal emergencies.","Dissatisfaction with class speed, music selection, or teaching style."]}]},{heading:"2. Cancellations by the Student",blocks:[{label:"2.1 Voluntary Cancellation:",p:"If a student chooses to discontinue attending classes or cancels their enrollment prior to or during a batch cycle, no refund or store credit will be granted."},{label:"2.2 Non-Transferability:",p:"Paid fees cannot be transferred to another individual, family member, friend, or third party."},{label:"2.3 No Carry Forward:",p:"Unused sessions or missed classes cannot be carried forward to subsequent months, terms, or batches."}]},{heading:"3. Cancellations or Changes by Revel Dance Academy",blocks:[{label:"3.1 Class Rescheduling:",p:"Revel Dance Academy reserves the right to modify schedules, alter class timings, change instructors, or relocate venues due to operational requirements, emergencies, or unforeseen conditions."},{label:"3.2 Class Cancellation:",p:"If a specific class or session is cancelled by the Company:"},{list:["A make-up/replacement class will be scheduled at a suitable time determined by the Company.","If a make-up class cannot be provided, the Company may issue a pro-rated credit note valid strictly for future courses offered by Revel Dance Academy. Cash/bank refunds will not be issued."]},{label:"3.3 Event/Workshop Cancellation:",p:"In the rare event that an entire workshop, event, or special masterclass is officially cancelled by the Company without any rescheduled date, a full refund of the registration fee will be processed to the original payment source within 5–7 working days."}]},{heading:"4. Payment Gateway & Transaction Issues",blocks:[{label:"4.1 Failed / Duplicate Transactions:",p:"In the case of a payment error, system glitch, or accidental double deduction where funds were debited from your bank account/card but the booking was not confirmed:"},{list:["The excess amount will usually be automatically refunded by your payment provider/bank.","If the refund is not processed automatically within 48 hours, please write to us at frontdeskrevel@gmail.com with the transaction reference ID, payment screenshot, and student details."]},{label:"4.2 Processing Timelines for Approved Adjustments:",p:"Where a refund or charge reversal is approved by Revel Dance Academy (e.g., technical duplicate payment), the credit will be refunded to the original mode of payment (Credit Card, Debit Card, Net Banking, UPI, or Razorpay wallet) within 5 to 7 business days from approval."}]},{heading:"5. Contact & Support",blocks:[{p:"For refund queries or transaction assistance, please reach out to our administration team:"},{list:[Zn[1],Zn[2],{label:"Studio Address:",text:Zn[3].text}]}]}]}},xp=({label:e,text:t})=>u.jsxs(u.Fragment,{children:[e&&u.jsx("strong",{children:e})," ",t]}),kb=({block:e})=>e.sub?u.jsx($k,{children:e.sub}):e.list?u.jsx(jk,{children:e.list.map((t,n)=>u.jsx("li",{children:typeof t=="string"?t:u.jsx(xp,{...t})},n))}):u.jsx(Gc,{children:u.jsx(xp,{label:e.label,text:e.p})}),ns=({type:e})=>{const t=wb[e];return u.jsx(gn,{title:t.title,children:u.jsxs(p0,{children:[u.jsx(m0,{children:t.title}),u.jsxs(Sk,{children:["Effective Date: ",t.effective]}),t.intro.map(n=>u.jsx(Gc,{children:n},n)),t.sections.map(n=>u.jsxs("section",{children:[u.jsx(Ek,{children:n.heading}),n.blocks.map((r,i)=>u.jsx(kb,{block:r},i))]},n.heading))]})})},bb=()=>{const e=wn();return u.jsx(gn,{title:"Contact Us",children:u.jsxs(p0,{children:[u.jsx(m0,{children:"Contact Us"}),u.jsx(Gc,{children:"Questions about classes, timings or fees? Reach us on any of the channels below and we will get back to you."}),u.jsxs(Pk,{children:[u.jsxs("div",{children:[u.jsx(Na,{children:"Visit us"}),u.jsx(La,{children:Me.address})]}),u.jsxs("div",{children:[u.jsx(Na,{children:"Call"}),u.jsx(La,{as:"a",href:`tel:${Me.phone.replace(/\s/g,"")}`,children:Me.phone})]}),u.jsxs("div",{children:[u.jsx(Na,{children:"WhatsApp"}),u.jsx(La,{as:"a",href:`https://wa.me/${Me.phone.replace(/\D/g,"")}`,target:"_blank",children:Me.phone})]}),u.jsxs("div",{children:[u.jsx(Na,{children:"Email"}),u.jsx(La,{as:"a",href:`mailto:${Me.email}`,children:Me.email})]})]}),u.jsx(Qn,{onClick:()=>e("/book-trial"),children:"Book Trial"})]})})},Cb="data:image/svg+xml,%3csvg%20width='84'%20height='50'%20viewBox='0%200%2084%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.9812%2019.8951L35.1163%2012.8888L39.8655%2021.1147L48.0579%2016.3848L38.5982%200L38.5402%200.0334779L38.5209%202.42477e-05L13.8841%2014.2241L9.13431%205.99729L0.941895%2010.7272L10.3681%2027.0539V50H22.9812V19.8951Z'%20fill='url(%23paint0_linear_546_6096)'/%3e%3ccircle%20cx='75.5579'%20cy='42.5'%20r='7.5'%20fill='url(%23paint1_linear_546_6096)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_546_6096'%20x1='-0.386105'%20y1='-2.20822'%20x2='56.4895'%20y2='5.75823'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2381E0FF'/%3e%3cstop%20offset='1'%20stop-color='%23D4F465'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_546_6096'%20x1='67.6351'%20y1='34.3375'%20x2='85.6983'%20y2='37.0225'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2381E0FF'/%3e%3cstop%20offset='1'%20stop-color='%23D4F465'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Kc={toddler:{label:"Toddler",range:"Age 4-7"},junior:{label:"Juniors",range:"Age 8-14"},adult:{label:"Adults",range:"Age 18+"}},Sb=[{value:"all",label:"All"},{value:"weekday",label:"Weekday"},{value:"weekend",label:"Weekend"},{value:"toddler",label:"Toddler (4-7 Yrs)"},{value:"junior",label:"Juniors (8-14 yrs)"},{value:"adult",label:"Adult (18+)"}],rs=[{value:"1-month",label:"1-Month Pass",fee:null},{value:"3-month",label:"3-Month Pass",fee:5100,note:"Option for 0% No-Cost EMI via Axio"}],wp=["1st","5th","10th"],Eb={toddler:"Playful rhythm, coordination and movement games for our youngest dancers.",junior:"Technique, choreography and stage confidence for kids who love to dance.",adult:"Learn fun, high-energy routines in a friendly group. No experience needed."},qn=(e,t,n)=>({id:`${e}-${t}`,name:`${Kc[e].label} ${t==="weekday"?"Weekday":"Weekend"}`,description:Eb[e],ageGroup:e,schedule:t,slots:n,location:"Adyar",fee:null,image:null}),Gi=[qn("toddler","weekday",[{day:2,time:"4:30 PM-5:30 PM"},{day:4,time:"4:30 PM-5:30 PM"}]),qn("junior","weekday",[{day:2,time:"5:30 PM-6:30 PM"},{day:4,time:"5:30 PM-6:30 PM"}]),qn("adult","weekday",[{day:2,time:"7:30 PM-8:30 PM"},{day:4,time:"7:30 PM-8:30 PM"}]),qn("toddler","weekend",[{day:6,time:"3:30 PM"},{day:0,time:"10:00 AM"}]),qn("junior","weekend",[{day:6,time:"4:30 PM"},{day:0,time:"11:00 AM"}]),qn("adult","weekend",[{day:6,time:"6:30 PM"},{day:0,time:"1:00 PM"}])],kp=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],qt=e=>e.every(n=>n.time===e[0].time)?`${e.map(n=>kp[n.day]).join(" & ")} ${e[0].time}`:e.map(n=>`${kp[n.day]} ${n.time}`).join(" & "),Qi=e=>e?`₹${e.toLocaleString("en-IN")}`:"₹X,XXX",$b=(e,t)=>t==="all"?!0:t==="weekday"||t==="weekend"?e.schedule===t:e.ageGroup===t,jb=(e,t=6)=>{const n=[],r=new Date;for(r.setHours(0,0,0,0);n.length<t;){r.setDate(r.getDate()+1);const i=e.find(a=>a.day===r.getDay());i&&n.push({date:new Date(r),time:i.time})}return n},bp=e=>e.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"}),Pb={toddler:"linear-gradient(135deg, #81e0ff 0%, #4f8fa6 100%)",junior:"linear-gradient(135deg, #d4f465 0%, #81e0ff 100%)",adult:"linear-gradient(135deg, #263238 0%, #4a5d38 60%, #d4f465 140%)"},Ab=({cls:e})=>{const t=wn(),n=Kc[e.ageGroup];return u.jsxs(Lk,{children:[u.jsx(Ik,{$bg:e.image?`center / cover url(${e.image})`:Pb[e.ageGroup],children:!e.image&&u.jsx("img",{src:Cb,alt:""})}),u.jsxs(zk,{children:[u.jsx(Fk,{children:u.jsx(Bk,{$tone:"blue",children:e.schedule==="weekday"?"Weekday":"Weekend"})}),u.jsx(Dk,{children:e.name}),u.jsx(Mk,{children:e.description}),u.jsxs(Uk,{children:[u.jsx("dt",{children:"Age group"}),u.jsx("dd",{children:n.range}),u.jsx("dt",{children:"Schedule"}),u.jsx("dd",{children:qt(e.slots)}),u.jsx("dt",{children:"Location"}),u.jsx("dd",{children:e.location}),u.jsx("dt",{children:"Fee"}),u.jsxs("dd",{children:[Qi(e.fee)," / month"]})]}),u.jsxs(Wk,{children:[u.jsx(Dr,{onClick:()=>t(`/book-trial?class=${e.id}`),children:"Book Trial"}),u.jsx(xi,{onClick:()=>t(`/join?class=${e.id}`),children:"Join Class"})]})]})]})},_b=()=>{const[e,t]=C.useState("all"),n=Gi.filter(r=>$b(r,e));return u.jsx(gn,{title:"Classes",children:u.jsxs(zo,{children:[u.jsx(Do,{children:"View Classes"}),u.jsx(Mo,{children:"Find a batch that fits your age and week. Every class is held at our Adyar studio, and your first class is a free trial."}),u.jsx(Su,{role:"group","aria-label":"Filter classes",children:Sb.map(r=>u.jsx(no,{$active:e===r.value,"aria-pressed":e===r.value,onClick:()=>t(r.value),children:r.label},r.value))}),u.jsxs("p",{style:{margin:"-8px 0 16px",fontSize:14},children:[n.length," ",n.length===1?"class":"classes"]}),n.length?u.jsx(Nk,{children:n.map(r=>u.jsx(Ab,{cls:r},r.id))}):u.jsxs(Vk,{children:[u.jsx("p",{children:"No batches match this filter yet."}),u.jsx(Dr,{as:"a",href:hl("Hi Revel, I'm looking for a dance class."),target:"_blank",children:"Ask us on WhatsApp"})]})]})})},Tb=[{value:"all",label:"All"},{value:"adult",label:"Adults (18+)"},{value:"junior",label:"Juniors (8-14)"},{value:"toddler",label:"Toddler (4-7)"}],Rb=[{value:"all",label:"Any Day"},{value:"weekday",label:"Weekdays"},{value:"weekend",label:"Weekends"}],Ob={name:"",age:"",minor:"no",guardian:"",phone:"",date:""},Nb=()=>{const[e]=Kh(),[t,n]=C.useState("all"),[r,i]=C.useState("all"),[a,o]=C.useState(e.get("class")||""),[l,s]=C.useState(!1),[c,d]=C.useState(Ob),[p,g]=C.useState({}),[x,k]=C.useState(!1),w=Gi.find(y=>y.id===a),j=Gi.filter(y=>(t==="all"||y.ageGroup===t)&&(r==="all"||y.schedule===r)),h=C.useMemo(()=>w?jb(w.slots):[],[w]),f=y=>{o(y),s(!1),d(L=>({...L,date:""}))},m=y=>L=>{const z=L.target.value;d(ae=>{const Ye={...ae,[y]:z};return y==="age"&&z&&(Ye.minor=Number(z)<18?"yes":"no"),Ye})},b=()=>{const y={};c.name.trim()||(y.name="Enter the student's name"),(!c.age||c.age<2||c.age>99)&&(y.age="Enter a valid age"),c.minor==="yes"&&!c.guardian.trim()&&(y.guardian="Parent/guardian name is needed for students under 18"),vl(c.phone)||(y.phone="Enter a 10-digit number"),c.date||(y.date="Choose a trial date"),g(y),Object.keys(y).length||k(!0)},$=h.find(y=>y.date.toISOString()===c.date),E=$?`${bp($.date)}, ${$.time}`:"",S=w?["Hi Revel, I'd like to book a free trial class.",`Batch: ${w.name} (${qt(w.slots)})`,`Trial date: ${E}`,`Student: ${c.name}, age ${c.age}`,c.minor==="yes"?`Parent/guardian: ${c.guardian}`:null,`WhatsApp: +91 ${c.phone}`].filter(Boolean).join(`
`):"";return x?u.jsx(gn,{title:"Book a Free Trial",children:u.jsxs(zo,{style:{maxWidth:720},children:[u.jsx(Do,{children:"Almost done!"}),u.jsx(Mo,{children:"Send your booking to us on WhatsApp and we'll confirm your slot."}),u.jsxs(_n,{children:[u.jsxs(dp,{children:[u.jsxs("li",{children:[u.jsx("strong",{children:w.name}),": ",qt(w.slots)]}),u.jsxs("li",{children:["Trial date: ",E]}),u.jsxs("li",{children:["Student: ",c.name]}),u.jsxs("li",{children:["📍 ",Me.address]})]}),u.jsx(wi,{children:"Wear comfortable clothes you can move in, bring a water bottle and arrive 10 minutes early."}),u.jsxs($u,{children:[u.jsx(Dr,{as:"a",href:hl(S),target:"_blank",children:"Send on WhatsApp"}),u.jsx(xi,{onClick:()=>k(!1),children:"Edit details"})]})]})]})}):u.jsx(gn,{title:"Book a Free Trial",children:u.jsxs(zo,{style:{maxWidth:820},children:[u.jsx(Do,{children:"Book Your Free Trial Class"}),u.jsx(Mo,{children:"Three quick steps and you're on the dance floor."}),u.jsxs(_n,{children:[u.jsxs(Sr,{$done:!!w,children:[u.jsx("span",{children:"1"}),"Choose your batch"]}),u.jsx(cp,{children:"Filter by category"}),u.jsx(Su,{children:Tb.map(y=>u.jsx(no,{$active:t===y.value,"aria-pressed":t===y.value,onClick:()=>n(y.value),children:y.label},y.value))}),u.jsx(cp,{children:"Filter by schedule"}),u.jsx(Su,{children:Rb.map(y=>u.jsx(no,{$active:r===y.value,"aria-pressed":r===y.value,onClick:()=>i(y.value),children:y.label},y.value))}),j.map(y=>u.jsxs(Hk,{$selected:y.id===a,"aria-pressed":y.id===a,onClick:()=>f(y.id),children:[u.jsxs("div",{children:[u.jsx("strong",{children:y.name}),u.jsxs("small",{children:[Kc[y.ageGroup].range," · ",qt(y.slots)," ·"," ",y.location," studio · ",Qi(y.fee),"/month"]})]}),u.jsx("span",{children:y.id===a?"✓ Selected":"Select"})]},y.id)),!j.length&&u.jsx(wi,{children:"No batches match these filters."})]}),u.jsxs(_n,{$locked:!w,children:[u.jsxs(Sr,{$done:l,children:[u.jsx("span",{children:"2"}),"Confirm details"]}),w?u.jsxs(u.Fragment,{children:[u.jsxs(dp,{children:[u.jsxs("li",{children:["Selected: ",u.jsx("strong",{children:w.name})," (",qt(w.slots),")"]}),u.jsx("li",{children:"📍 Venue: Revel Dance Academy, Adyar"}),u.jsxs("li",{children:["💳 Regular monthly fee: ",Qi(w.fee)," / month"]})]}),u.jsxs(Yk,{children:[u.jsx("input",{type:"checkbox",checked:l,onChange:y=>s(y.target.checked)}),"I confirm that the location, timings and fee structure work for me."]})]}):u.jsx("p",{children:"Pick a batch above to continue."})]}),u.jsxs(_n,{$locked:!w||!l,children:[u.jsxs(Sr,{children:[u.jsx("span",{children:"3"}),"Student information & trial date"]}),u.jsxs(ro,{children:[u.jsxs(Xe,{$full:!0,children:["Student full name",u.jsx(Tn,{value:c.name,onChange:m("name")})]}),u.jsxs(Xe,{children:["Student age",u.jsx(Tn,{type:"number",inputMode:"numeric",value:c.age,onChange:m("age")})]}),u.jsxs(Xe,{as:"div",children:["Is the student a minor?",u.jsx($u,{children:["yes","no"].map(y=>u.jsx(no,{$active:c.minor===y,"aria-pressed":c.minor===y,onClick:()=>d(L=>({...L,minor:y})),children:y==="yes"?"Yes":"No"},y))})]}),c.minor==="yes"&&u.jsxs(Xe,{$full:!0,children:["Parent / guardian name",u.jsx(Tn,{value:c.guardian,onChange:m("guardian")})]}),u.jsxs(Xe,{children:["WhatsApp number",u.jsxs(v0,{children:[u.jsx("span",{children:"+91"}),u.jsx(Tn,{type:"tel",inputMode:"numeric",maxLength:10,placeholder:"9876543210",value:c.phone,onChange:y=>d(L=>({...L,phone:y.target.value.replace(/\D/g,"")}))})]})]}),u.jsxs(Xe,{children:["Select trial date",u.jsxs(Eu,{value:c.date,onChange:m("date"),children:[u.jsx("option",{value:"",children:"Select an upcoming date"}),h.map(y=>u.jsxs("option",{value:y.date.toISOString(),children:[bp(y.date),", ",y.time]},y.date.toISOString()))]})]})]}),Object.values(p).map(y=>u.jsx(Qk,{children:y},y)),u.jsx(Dr,{$block:!0,onClick:b,children:"Confirm Trial Booking"})]})]})})},Lb=!1,Ib=async()=>null,zb=()=>{const[e]=Kh(),t=wn(),[n,r]=C.useState(""),[i,a]=C.useState("idle"),[o,l]=C.useState(null),[s,c]=C.useState(""),[d,p]=C.useState(""),[g,x]=C.useState(e.get("class")||""),[k,w]=C.useState(rs[0].value),[j,h]=C.useState(wp[1]),f=Gi.find(y=>y.id===g),m=rs.find(y=>y.value===k),b=m.fee??(f==null?void 0:f.fee),$=(i==="found"||i==="missing")&&s.trim()&&d&&f,E=async()=>{a("loading");const y=await Ib();y?(l(y),c(y.name),p(String(y.age)),x(y.batchId),a("found")):(l(null),a("missing"))},S=f?["Hi Revel, I'd like to enrol.",`Name: ${s}, age ${d}`,`Batch: ${f.name} (${qt(f.slots)})`,`Plan: ${m.label}`,k==="1-month"?`Monthly due date: ${j}`:null,`WhatsApp: +91 ${n}`].filter(Boolean).join(`
`):"";return u.jsx(gn,{title:"Join Class",children:u.jsxs(zo,{style:{maxWidth:820},children:[u.jsx(Do,{children:"Pay & Enrol Now"}),u.jsx(Mo,{children:"Loved your trial? Pick your plan and secure your spot in the batch."}),u.jsxs(_n,{children:[u.jsxs(Sr,{$done:!!$,children:[u.jsx("span",{children:"1"}),"Verify WhatsApp"]}),u.jsxs(ro,{children:[u.jsxs(Xe,{children:["Enter WhatsApp number",u.jsxs(v0,{children:[u.jsx("span",{children:"+91"}),u.jsx(Tn,{type:"tel",inputMode:"numeric",maxLength:10,placeholder:"9876543210",value:n,onChange:y=>{r(y.target.value.replace(/\D/g,"")),a("idle")}})]})]}),u.jsxs(Xe,{as:"div",children:[" ",u.jsx(xi,{disabled:!vl(n)||i==="loading",onClick:E,children:i==="loading"?"Checking...":"Fetch Record"})]})]}),i==="found"&&u.jsxs(wi,{children:["✅ Trial record found! (",f==null?void 0:f.name," - ",o.status,")",u.jsx("br",{}),"Name: ",s," | Age: ",d," | Batch: ",f==null?void 0:f.name," (",f&&qt(f.slots),")"]}),i==="missing"&&u.jsxs(u.Fragment,{children:[u.jsxs(wi,{children:["We couldn't find a trial record for this number. Enter your details below, or"," ",u.jsx(xi,{style:{padding:"2px 10px",fontSize:14},onClick:()=>t(`/book-trial${g?`?class=${g}`:""}`),children:"book a free trial first"})]}),u.jsxs(ro,{children:[u.jsxs(Xe,{children:["Student name",u.jsx(Tn,{value:s,onChange:y=>c(y.target.value)})]}),u.jsxs(Xe,{children:["Student age",u.jsx(Tn,{type:"number",inputMode:"numeric",value:d,onChange:y=>p(y.target.value)})]}),u.jsxs(Xe,{$full:!0,children:["Batch",u.jsxs(Eu,{value:g,onChange:y=>x(y.target.value),children:[u.jsx("option",{value:"",children:"Select your batch"}),Gi.map(y=>u.jsxs("option",{value:y.id,children:[y.name,": ",qt(y.slots)]},y.id))]})]})]})]})]}),u.jsxs(_n,{$locked:!$,children:[u.jsxs(Sr,{children:[u.jsx("span",{children:"2"}),"Select payment plan"]}),rs.map(y=>u.jsxs(Gk,{$selected:k===y.value,children:[u.jsx("input",{type:"radio",name:"plan",value:y.value,checked:k===y.value,onChange:()=>w(y.value)}),u.jsxs("div",{children:[y.label,": ",Qi(y.fee??(f==null?void 0:f.fee)),y.note&&u.jsx("small",{children:y.note})]})]},y.value)),k==="1-month"&&u.jsx(ro,{style:{marginTop:16},children:u.jsxs(Xe,{children:["Preferred monthly collection date",u.jsx(Eu,{value:j,onChange:y=>h(y.target.value),children:wp.map(y=>u.jsxs("option",{value:y,children:[y," of every month"]},y))})]})})]}),u.jsxs(_n,{$locked:!$,children:[u.jsxs(Sr,{children:[u.jsx("span",{children:"3"}),"Payment"]}),u.jsxs("p",{style:{fontSize:18,color:"#fff",margin:"0 0 16px"},children:["Total: ",u.jsx("strong",{children:Qi(b)})]}),u.jsx(wi,{children:"Online payment (UPI, cards, Cardless EMI / Axio) is being set up. To enrol now, send your details on WhatsApp and we'll share a payment link."}),u.jsxs($u,{children:[u.jsx(Dr,{disabled:!Lb,children:"Pay via Razorpay"}),u.jsx(xi,{as:"a",href:hl(S),target:"_blank",children:"Enrol on WhatsApp"})]}),u.jsxs("p",{style:{fontSize:13,marginTop:16},children:["By enrolling you agree to our"," ",u.jsx(pf,{to:"/terms-and-conditions",style:{color:"#81e0ff"},children:"Terms & Conditions"})," ","and"," ",u.jsx(pf,{to:"/cancellation-policy",style:{color:"#81e0ff"},children:"Cancellation & Refund Policy"}),"."]})]})]})})},y0=C.createContext(),Xc=()=>C.useContext(y0),Db=({children:e})=>{const[t,n]=C.useState(!1),[r,i]=C.useState(!1),[a,o]=C.useState(!1),l=()=>n(!0),s=()=>n(!1),c=()=>i(!0),d=()=>i(!1),p=()=>o(!0),g=()=>o(!1);return u.jsx(y0.Provider,{value:{isLoginOpen:t,openLogin:l,closeLogin:s,isRegisterOpen:r,openRegister:c,closeRegister:d,isPreferencesOpen:a,openPreferences:p,closePreferences:g},children:e})};var Cp=function(e){return typeof e=="object"&&e!==null},Mb=function(e){var t=e.value,n=t===void 0?"":t,r=e.numInputs,i=r===void 0?4:r,a=e.onChange,o=e.onPaste,l=e.renderInput,s=e.shouldAutoFocus,c=s===void 0?!1:s,d=e.inputType,p=d===void 0?"text":d,g=e.renderSeparator,x=e.placeholder,k=e.containerStyle,w=e.inputStyle,j=e.skipDefaultStyles,h=j===void 0?!1:j,f=ve.useState(0),m=f[0],b=f[1],$=ve.useRef([]),E=function(){return n?n.toString().split(""):[]},S=p==="number"||p==="tel";ve.useEffect(function(){$.current=$.current.slice(0,i)},[i]),ve.useEffect(function(){var A;c&&((A=$.current[0])===null||A===void 0||A.focus())},[c]);var y=function(){if(typeof x=="string"){if(x.length===i)return x;x.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},L=function(A){var T=S?!isNaN(Number(A)):typeof A=="string";return T&&A.trim().length===1},z=function(A){var T=A.target.value;L(T)&&(pt(T),Ge(m+1))},ae=function(A){var T=A.nativeEvent,D=A.target.value;if(!L(D)){if(D.length===i){var M=D.split("").some(function(he){return!L(he)});M||(nt(D.split("")),Ge(i-1))}T.data===null&&T.inputType==="deleteContentBackward"&&(A.preventDefault(),pt(""),Ge(m-1)),A.target.value=""}},Ye=function(A){return function(T){b(T),A.target.select()}},St=function(){b(m-1)},Kn=function(A){var T=E();[A.code,A.key].includes("Backspace")?(A.preventDefault(),pt(""),Ge(m-1)):A.code==="Delete"?(A.preventDefault(),pt("")):A.code==="ArrowLeft"?(A.preventDefault(),Ge(m-1)):A.code==="ArrowRight"||A.key===T[m]?(A.preventDefault(),Ge(m+1)):(A.code==="Spacebar"||A.code==="Space"||A.code==="ArrowUp"||A.code==="ArrowDown")&&A.preventDefault()},Ge=function(A){var T,D,M=Math.max(Math.min(i-1,A),0);$.current[M]&&((T=$.current[M])===null||T===void 0||T.focus(),(D=$.current[M])===null||D===void 0||D.select(),b(M))},pt=function(A){var T=E();T[m]=A[0],nt(T)},nt=function(A){var T=A.join("");a(T)},R=function(A){var T;A.preventDefault();var D=E(),M=m,he=A.clipboardData.getData("text/plain").slice(0,i-m).split("");if(!(S&&he.some(function(mt){return isNaN(Number(mt))}))){for(var we=0;we<i;++we)we>=m&&he.length>0&&(D[we]=(T=he.shift())!==null&&T!==void 0?T:"",M++);Ge(M),nt(D)}};return ve.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},Cp(k)&&k),className:typeof k=="string"?k:void 0,onPaste:o},Array.from({length:i},function(A,T){return T}).map(function(A){var T,D,M;return ve.createElement(ve.Fragment,{key:A},l({value:(T=E()[A])!==null&&T!==void 0?T:"",placeholder:(M=(D=y())===null||D===void 0?void 0:D[A])!==null&&M!==void 0?M:void 0,ref:function(he){return $.current[A]=he},onChange:z,onFocus:function(he){return Ye(he)(A)},onBlur:St,onKeyDown:Kn,onPaste:R,autoComplete:"off","aria-label":"Please enter OTP character ".concat(A+1),style:Object.assign(h?{}:{width:"1em",textAlign:"center"},Cp(w)?w:{}),className:typeof w=="string"?w:void 0,type:p,inputMode:S?"numeric":"text",onInput:ae},A),A<i-1&&(typeof g=="function"?g(A):g))}))};const Sp=()=>window.innerWidth<=478?{...vp,...mb}:vp,Fb=({setContinueDisabled:e,otp:t,setOtp:n})=>{const[r,i]=C.useState(""),[a,o]=C.useState(Sp()),l=s=>{/^\d*$/.test(s)?(n(s),i(""),s.length===Wn.length?e(!1):e(!0)):i("Please enter only numeric values")};return C.useEffect(()=>{const s=()=>{o(Sp())};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),u.jsxs("div",{style:{margin:"24px 0"},children:[u.jsx(Mb,{value:t,onChange:l,numInputs:Wn.length,isInputNum:!0,shouldAutoFocus:!0,renderInput:s=>u.jsx("input",{...s}),inputStyle:a}),r&&u.jsx("div",{style:hb,children:r})]})},Bb=({startCount:e=Wn.duration,onExpire:t=()=>{}})=>{const[n,r]=C.useState(e),i=C.useRef(e);return C.useEffect(()=>{const a=setInterval(()=>{i.current===0?(clearInterval(a),t()):(i.current-=1,r(i.current))},1e3);return()=>clearInterval(a)},[t]),C.useEffect(()=>{i.current=e,r(e)},[e]),u.jsxs(Se,{children:[n," second(s) left"]})},x0=({phoneNumber:e,isResendEnabled:t,handleResend:n,startCount:r,handleTimerExpire:i,handleContinue:a})=>{const[o,l]=C.useState(""),[s,c]=C.useState(!0);return u.jsxs(u.Fragment,{children:[u.jsxs(Se,{children:["Verify with OTP sent to +91 ",e]}),u.jsx(Fb,{otp:o,setOtp:l,setContinueDisabled:c}),u.jsxs(lt,{$maxWidth:"396px",children:[u.jsx(Cr,{$disabled:!t,onClick:n,children:"Resend OTP"}),u.jsx(Bb,{startCount:r,onExpire:i},r)]}),u.jsx("div",{style:{margin:"24px 0"},children:u.jsx(Qn,{$disabled:s,onClick:()=>{a(),l("")},children:"Continue"})})]})},Ub=()=>{const{isLoginOpen:e,closeLogin:t,openRegister:n}=Xc(),[r,i]=C.useState(""),[a,o]=C.useState(!0),[l,s]=C.useState(!1),[c,d]=C.useState(!1),[p,g]=C.useState(Wn.duration),x=f=>{const m=f.target.value;i(m),vl(m)?o(!1):o(!0)},k=()=>{s(!0),d(!1),g(Wn.duration)},w=()=>{t(),s(!1),i("")},j=()=>{d(!0)},h=()=>{g(60),d(!1)};return e?u.jsx(Wc,{children:u.jsxs(Hc,{$isVisible:e,children:[u.jsx(a0,{onClick:t,children:u.jsx(o0,{src:Qc,alt:"close-icon"})}),u.jsx(u0,{children:u.jsx(f0,{children:u.jsxs(lt,{$gap:"12px",$direction:"column",$alignItems:"center",children:[u.jsx(Vc,{src:gl,alt:"revel-icon"}),u.jsxs(Se,{style:{textAlign:"center"},children:["Anything & everything artistic under"," ",u.jsx(Cr,{children:"One Subscription"})]})]})})}),u.jsxs(c0,{children:[u.jsx(Yc,{children:"Log in"}),l?u.jsx(x0,{phoneNumber:r,isResendEnabled:c,handleResend:h,startCount:p,handleTimerExpire:j,handleContinue:w}):u.jsxs(u.Fragment,{children:[u.jsxs(to,{children:[u.jsx(d0,{children:"+91"}),u.jsx(At,{placeholder:"Phone",type:"number",value:r,onChange:x,autoFocus:!Fo(),$paddingLeft:"64px"})]}),u.jsx(Se,{children:"You will receive an OTP on this mobile number"}),u.jsx("div",{style:{margin:"24px 0"},children:u.jsx(Qn,{$disabled:a,onClick:k,children:"Log in"})})]}),u.jsxs(Se,{children:["Don't have an account?"," ",u.jsx(Cr,{onClick:()=>{t(),n()},children:"Sign up"})]})]})]})}):null},Wb=({isChecked:e,setChecked:t})=>u.jsxs(vk,{children:[u.jsx(Cu,{checked:e,onChange:n=>{t(n.target.checked)}}),u.jsx(yk,{})]}),Vb=()=>{const{isRegisterOpen:e,closeRegister:t,openLogin:n}=Xc(),[r,i]=C.useState(""),[a,o]=C.useState(""),[l,s]=C.useState(""),[c,d]=C.useState(!1),[p,g]=C.useState(!0),[x,k]=C.useState(!1),[w,j]=C.useState(!1),[h,f]=C.useState(Wn.duration),m=()=>{k(!0),j(!1),f(Wn.duration)},b=()=>{t(),k(!1),o(""),i(""),s("")},$=()=>{j(!0)},E=()=>{f(60),j(!1)};return C.useEffect(()=>{a!==null&&l!==null&&r!==null&&(g(!0),a!==null&&fb(l)&&vl(r)&&g(!1))},[a,l,r]),e?u.jsx(Wc,{children:u.jsxs(Hc,{$isVisible:e,children:[u.jsx(a0,{onClick:t,children:u.jsx(o0,{src:Qc,alt:"close-icon"})}),u.jsx(u0,{children:u.jsx(f0,{children:u.jsxs(lt,{$gap:"16px",$direction:"column",$alignItems:"center",children:[u.jsx(Vc,{src:gl,alt:"revel-icon"}),u.jsxs(Se,{style:{textAlign:"center"},children:["Anything & everything artistic under"," ",u.jsx(Cr,{children:"One Subscription"})]})]})})}),u.jsxs(c0,{children:[u.jsx(Yc,{children:"Register"}),x?u.jsx(x0,{phoneNumber:r,isResendEnabled:w,handleResend:E,startCount:h,handleTimerExpire:$,handleContinue:b}):u.jsxs(u.Fragment,{children:[u.jsx(to,{children:u.jsx(At,{placeholder:"Name",type:"text",value:a,onChange:S=>{o(S.target.value)},autoFocus:!Fo()})}),u.jsxs("div",{style:{margin:"12px 0"},children:[u.jsxs(to,{children:[u.jsx(d0,{children:"+91"}),u.jsx(At,{$paddingLeft:"64px",placeholder:"Phone",type:"number",value:r,onChange:S=>{i(S.target.value)}})]}),u.jsx(Se,{children:"For sending class updates & reminders"})]}),u.jsxs("div",{style:{margin:"12px 0 24px"},children:[u.jsx(to,{children:u.jsx(At,{placeholder:"Email",type:"email",value:l,onChange:S=>{s(S.target.value)}})}),u.jsx(Se,{children:"For sending updates via email notifications"})]}),u.jsxs(lt,{$alignItems:"center",$gap:"12px",children:[u.jsx(Wb,{isChecked:c,setChecked:d}),u.jsxs(Se,{children:["I have read and accept the"," ",u.jsx(Cr,{children:"Terms and Conditions"})]})]}),u.jsx("div",{style:{margin:"24px 0"},children:u.jsx(Qn,{$disabled:p,onClick:m,children:"Create Account"})})]}),u.jsxs(Se,{children:["Already have an account?"," ",u.jsx(Cr,{onClick:()=>{t(),n()},children:"Login"})]})]})]})}):null},Hb=({min:e=1,max:t=100,value:n,setValue:r})=>{const[i,a]=C.useState(0),o=s=>(s-e)/(t-e)*100;C.useEffect(()=>{n&&n!==0?n>40?(r(40),a(o(40))):a(o(n)):a(0)},[n]);const l=s=>{const c=s.target.value;r(Number(c))};return u.jsxs(xk,{children:[u.jsx(wk,{type:"range",min:e,max:t,value:n,$width:i,onChange:l}),u.jsxs(lt,{style:{marginTop:"12px"},$alignItems:"center",$justifyContent:"space-between",children:[u.jsx(Se,{children:e}),u.jsxs(Se,{children:[t," kms"]})]})]})},Yb=({selected:e,setSelected:t})=>u.jsxs(kk,{children:[u.jsx(ap,{$active:e,onClick:()=>t(!0),children:"Yes"}),u.jsx(ap,{$active:!e,onClick:()=>t(!1),children:"No"})]}),Gb=()=>{const{isPreferencesOpen:e,closePreferences:t}=Xc(),n=4,[r,i]=C.useState(1),[a,o]=C.useState(""),[l,s]=C.useState(""),[c,d]=C.useState(10),[p,g]=C.useState(!1),[x,k]=C.useState(window.innerWidth),w=C.useCallback(()=>{switch(r){case 1:return u.jsxs(u.Fragment,{children:[x>478?u.jsxs(lt,{$alignItems:"center",$gap:"24px",children:[u.jsx(At,{id:"location",placeholder:"Current location",value:a,onChange:h=>o(h.target.value),autoFocus:!Fo()}),u.jsx(At,{id:"pincode",placeholder:"Current pincode",value:l,onChange:h=>s(h.target.value)})]}):u.jsxs(u.Fragment,{children:[u.jsx(At,{id:"location",placeholder:"Current location",value:a,onChange:h=>o(h.target.value),autoFocus:!Fo()}),u.jsx(At,{id:"pincode",placeholder:"Current pincode",value:l,onChange:h=>s(h.target.value)})]}),u.jsxs("div",{style:{margin:"24px 0"},children:[u.jsx(Se,{children:"How far you can travel to learn from your current location?"}),u.jsxs(lt,{$alignItems:"center",$gap:"24px",children:[u.jsx(Hb,{min:1,max:40,value:c,setValue:d}),u.jsxs(lt,{$alignItems:"center",$gap:"12px",children:[u.jsx(At,{$width:"fit-content",id:"distance",type:"number",min:1,max:40,value:c,onChange:h=>d(h.target.value)}),u.jsx(Se,{children:"kms"})]})]})]}),u.jsx(Se,{children:"Currently the classes are in person. In future, would you prefer to learn online?"}),u.jsx(Yb,{selected:p,setSelected:g})]});case 2:return u.jsx(u.Fragment,{children:"Yet to come"})}},[r,c,a,l,p]),j=h=>{i(f=>{const m=f+h;return m>0&&m<=n?m:f})};return C.useEffect(()=>{const h=()=>{k(window.innerWidth)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[]),e?u.jsx(Wc,{children:u.jsxs(Hc,{$direction:"column",$isVisible:e,children:[u.jsx(mk,{children:u.jsxs(lt,{$justifyContent:"space-between",children:[u.jsx(Yc,{$colored:!0,children:"Basic Details"}),u.jsxs(Se,{$colored:!0,children:["Page ",r," of ",n]})]})}),u.jsx(ip,{$width:100/n*r}),u.jsx(hk,{children:w()}),u.jsx(ip,{}),u.jsx(gk,{children:u.jsxs(lt,{children:[r!==1&&u.jsx(l0,{onClick:()=>j(-1),children:"Back"}),u.jsx(Qn,{onClick:()=>j(1),children:"Next"})]})})]})}):null};function Qb(){return u.jsxs(Db,{children:[u.jsx(Ub,{}),u.jsx(Vb,{}),u.jsx(Gb,{}),u.jsx(Vy,{basename:"/revel-preview/",children:u.jsxs(Iy,{children:[u.jsx(gt,{exact:!0,element:u.jsx(ob,{}),path:"/"}),u.jsx(gt,{exact:!0,element:u.jsx(xb,{}),path:"/schedule"}),u.jsx(gt,{exact:!0,element:u.jsx(_b,{}),path:"/classes"}),u.jsx(gt,{exact:!0,element:u.jsx(Nb,{}),path:"/book-trial"}),u.jsx(gt,{exact:!0,element:u.jsx(zb,{}),path:"/join"}),u.jsx(gt,{exact:!0,element:u.jsx(ns,{type:"privacy"}),path:"/privacy-policy"}),u.jsx(gt,{exact:!0,element:u.jsx(ns,{type:"terms"}),path:"/terms-and-conditions"}),u.jsx(gt,{exact:!0,element:u.jsx(ns,{type:"cancellation"}),path:"/cancellation-policy"}),u.jsx(gt,{exact:!0,element:u.jsx(bb,{}),path:"/contact-us"})]})})]})}const w0=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};window.addEventListener("resize",w0);w0();is.createRoot(document.getElementById("root")).render(u.jsx(ve.StrictMode,{children:u.jsx(Qb,{})}));
