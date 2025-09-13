function yN(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(i,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function vN(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var F_={exports:{}},zc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gI;function EN(){if(gI)return zc;gI=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:i,key:c,ref:a!==void 0?a:null,props:l}}return zc.Fragment=e,zc.jsx=t,zc.jsxs=t,zc}var _I;function TN(){return _I||(_I=1,F_.exports=EN()),F_.exports}var ot=TN(),q_={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yI;function wN(){if(yI)return xe;yI=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,j={};function U(N,Z,oe){this.props=N,this.context=Z,this.refs=j,this.updater=oe||C}U.prototype.isReactComponent={},U.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},U.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function ie(){}ie.prototype=U.prototype;function ne(N,Z,oe){this.props=N,this.context=Z,this.refs=j,this.updater=oe||C}var X=ne.prototype=new ie;X.constructor=ne,L(X,U.prototype),X.isPureReactComponent=!0;var fe=Array.isArray,ae={H:null,A:null,T:null,S:null,V:null},ce=Object.prototype.hasOwnProperty;function S(N,Z,oe,se,ve,De){return oe=De.ref,{$$typeof:n,type:N,key:Z,ref:oe!==void 0?oe:null,props:De}}function A(N,Z){return S(N.type,Z,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function O(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(oe){return Z[oe]})}var V=/\/+/g;function M(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?O(""+N.key):Z.toString(36)}function P(){}function Gt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(P,P):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function dt(N,Z,oe,se,ve){var De=typeof N;(De==="undefined"||De==="boolean")&&(N=null);var we=!1;if(N===null)we=!0;else switch(De){case"bigint":case"string":case"number":we=!0;break;case"object":switch(N.$$typeof){case n:case e:we=!0;break;case y:return we=N._init,dt(we(N._payload),Z,oe,se,ve)}}if(we)return ve=ve(N),we=se===""?"."+M(N,0):se,fe(ve)?(oe="",we!=null&&(oe=we.replace(V,"$&/")+"/"),dt(ve,Z,oe,"",function(Jt){return Jt})):ve!=null&&(D(ve)&&(ve=A(ve,oe+(ve.key==null||N&&N.key===ve.key?"":(""+ve.key).replace(V,"$&/")+"/")+we)),Z.push(ve)),1;we=0;var Et=se===""?".":se+":";if(fe(N))for(var He=0;He<N.length;He++)se=N[He],De=Et+M(se,He),we+=dt(se,Z,oe,De,ve);else if(He=w(N),typeof He=="function")for(N=He.call(N),He=0;!(se=N.next()).done;)se=se.value,De=Et+M(se,He++),we+=dt(se,Z,oe,De,ve);else if(De==="object"){if(typeof N.then=="function")return dt(Gt(N),Z,oe,se,ve);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return we}function Q(N,Z,oe){if(N==null)return N;var se=[],ve=0;return dt(N,se,"","",function(De){return Z.call(oe,De,ve++)}),se}function ue(N){if(N._status===-1){var Z=N._result;Z=Z(),Z.then(function(oe){(N._status===0||N._status===-1)&&(N._status=1,N._result=oe)},function(oe){(N._status===0||N._status===-1)&&(N._status=2,N._result=oe)}),N._status===-1&&(N._status=0,N._result=Z)}if(N._status===1)return N._result.default;throw N._result}var ye=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Ne(){}return xe.Children={map:Q,forEach:function(N,Z,oe){Q(N,function(){Z.apply(this,arguments)},oe)},count:function(N){var Z=0;return Q(N,function(){Z++}),Z},toArray:function(N){return Q(N,function(Z){return Z})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},xe.Component=U,xe.Fragment=t,xe.Profiler=a,xe.PureComponent=ne,xe.StrictMode=i,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,xe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return ae.H.useMemoCache(N)}},xe.cache=function(N){return function(){return N.apply(null,arguments)}},xe.cloneElement=function(N,Z,oe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var se=L({},N.props),ve=N.key,De=void 0;if(Z!=null)for(we in Z.ref!==void 0&&(De=void 0),Z.key!==void 0&&(ve=""+Z.key),Z)!ce.call(Z,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&Z.ref===void 0||(se[we]=Z[we]);var we=arguments.length-2;if(we===1)se.children=oe;else if(1<we){for(var Et=Array(we),He=0;He<we;He++)Et[He]=arguments[He+2];se.children=Et}return S(N.type,ve,void 0,void 0,De,se)},xe.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},xe.createElement=function(N,Z,oe){var se,ve={},De=null;if(Z!=null)for(se in Z.key!==void 0&&(De=""+Z.key),Z)ce.call(Z,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ve[se]=Z[se]);var we=arguments.length-2;if(we===1)ve.children=oe;else if(1<we){for(var Et=Array(we),He=0;He<we;He++)Et[He]=arguments[He+2];ve.children=Et}if(N&&N.defaultProps)for(se in we=N.defaultProps,we)ve[se]===void 0&&(ve[se]=we[se]);return S(N,De,void 0,void 0,null,ve)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(N){return{$$typeof:d,render:N}},xe.isValidElement=D,xe.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ue}},xe.memo=function(N,Z){return{$$typeof:g,type:N,compare:Z===void 0?null:Z}},xe.startTransition=function(N){var Z=ae.T,oe={};ae.T=oe;try{var se=N(),ve=ae.S;ve!==null&&ve(oe,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Ne,ye)}catch(De){ye(De)}finally{ae.T=Z}},xe.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},xe.use=function(N){return ae.H.use(N)},xe.useActionState=function(N,Z,oe){return ae.H.useActionState(N,Z,oe)},xe.useCallback=function(N,Z){return ae.H.useCallback(N,Z)},xe.useContext=function(N){return ae.H.useContext(N)},xe.useDebugValue=function(){},xe.useDeferredValue=function(N,Z){return ae.H.useDeferredValue(N,Z)},xe.useEffect=function(N,Z,oe){var se=ae.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(N,Z)},xe.useId=function(){return ae.H.useId()},xe.useImperativeHandle=function(N,Z,oe){return ae.H.useImperativeHandle(N,Z,oe)},xe.useInsertionEffect=function(N,Z){return ae.H.useInsertionEffect(N,Z)},xe.useLayoutEffect=function(N,Z){return ae.H.useLayoutEffect(N,Z)},xe.useMemo=function(N,Z){return ae.H.useMemo(N,Z)},xe.useOptimistic=function(N,Z){return ae.H.useOptimistic(N,Z)},xe.useReducer=function(N,Z,oe){return ae.H.useReducer(N,Z,oe)},xe.useRef=function(N){return ae.H.useRef(N)},xe.useState=function(N){return ae.H.useState(N)},xe.useSyncExternalStore=function(N,Z,oe){return ae.H.useSyncExternalStore(N,Z,oe)},xe.useTransition=function(){return ae.H.useTransition()},xe.version="19.1.0",xe}var vI;function dv(){return vI||(vI=1,q_.exports=wN()),q_.exports}var Te=dv();const jl=vN(Te),IN=yN({__proto__:null,default:jl},[Te]);var j_={exports:{}},Fc={},G_={exports:{}},H_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EI;function bN(){return EI||(EI=1,function(n){function e(Q,ue){var ye=Q.length;Q.push(ue);e:for(;0<ye;){var Ne=ye-1>>>1,N=Q[Ne];if(0<a(N,ue))Q[Ne]=ue,Q[ye]=N,ye=Ne;else break e}}function t(Q){return Q.length===0?null:Q[0]}function i(Q){if(Q.length===0)return null;var ue=Q[0],ye=Q.pop();if(ye!==ue){Q[0]=ye;e:for(var Ne=0,N=Q.length,Z=N>>>1;Ne<Z;){var oe=2*(Ne+1)-1,se=Q[oe],ve=oe+1,De=Q[ve];if(0>a(se,ye))ve<N&&0>a(De,se)?(Q[Ne]=De,Q[ve]=ye,Ne=ve):(Q[Ne]=se,Q[oe]=ye,Ne=oe);else if(ve<N&&0>a(De,ye))Q[Ne]=De,Q[ve]=ye,Ne=ve;else break e}}return ue}function a(Q,ue){var ye=Q.sortIndex-ue.sortIndex;return ye!==0?ye:Q.id-ue.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,v=null,w=3,C=!1,L=!1,j=!1,U=!1,ie=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function fe(Q){for(var ue=t(g);ue!==null;){if(ue.callback===null)i(g);else if(ue.startTime<=Q)i(g),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=t(g)}}function ae(Q){if(j=!1,fe(Q),!L)if(t(p)!==null)L=!0,ce||(ce=!0,M());else{var ue=t(g);ue!==null&&dt(ae,ue.startTime-Q)}}var ce=!1,S=-1,A=5,D=-1;function O(){return U?!0:!(n.unstable_now()-D<A)}function V(){if(U=!1,ce){var Q=n.unstable_now();D=Q;var ue=!0;try{e:{L=!1,j&&(j=!1,ne(S),S=-1),C=!0;var ye=w;try{t:{for(fe(Q),v=t(p);v!==null&&!(v.expirationTime>Q&&O());){var Ne=v.callback;if(typeof Ne=="function"){v.callback=null,w=v.priorityLevel;var N=Ne(v.expirationTime<=Q);if(Q=n.unstable_now(),typeof N=="function"){v.callback=N,fe(Q),ue=!0;break t}v===t(p)&&i(p),fe(Q)}else i(p);v=t(p)}if(v!==null)ue=!0;else{var Z=t(g);Z!==null&&dt(ae,Z.startTime-Q),ue=!1}}break e}finally{v=null,w=ye,C=!1}ue=void 0}}finally{ue?M():ce=!1}}}var M;if(typeof X=="function")M=function(){X(V)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,Gt=P.port2;P.port1.onmessage=V,M=function(){Gt.postMessage(null)}}else M=function(){ie(V,0)};function dt(Q,ue){S=ie(function(){Q(n.unstable_now())},ue)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Q){Q.callback=null},n.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Q?Math.floor(1e3/Q):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Q){switch(w){case 1:case 2:case 3:var ue=3;break;default:ue=w}var ye=w;w=ue;try{return Q()}finally{w=ye}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function(Q,ue){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ye=w;w=Q;try{return ue()}finally{w=ye}},n.unstable_scheduleCallback=function(Q,ue,ye){var Ne=n.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?Ne+ye:Ne):ye=Ne,Q){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ye+N,Q={id:y++,callback:ue,priorityLevel:Q,startTime:ye,expirationTime:N,sortIndex:-1},ye>Ne?(Q.sortIndex=ye,e(g,Q),t(p)===null&&Q===t(g)&&(j?(ne(S),S=-1):j=!0,dt(ae,ye-Ne))):(Q.sortIndex=N,e(p,Q),L||C||(L=!0,ce||(ce=!0,M()))),Q},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(Q){var ue=w;return function(){var ye=w;w=ue;try{return Q.apply(this,arguments)}finally{w=ye}}}}(H_)),H_}var TI;function AN(){return TI||(TI=1,G_.exports=bN()),G_.exports}var $_={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wI;function SN(){if(wI)return Tn;wI=1;var n=dv();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Tn.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},Tn.flushSync=function(p){var g=c.T,y=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=y,i.d.f()}},Tn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},Tn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Tn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,v=d(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:C}):y==="script"&&i.d.X(p,{crossOrigin:v,integrity:w,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Tn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},Tn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=d(y,g.crossOrigin);i.d.L(p,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Tn.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},Tn.requestFormReset=function(p){i.d.r(p)},Tn.unstable_batchedUpdates=function(p,g){return p(g)},Tn.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},Tn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Tn.version="19.1.0",Tn}var II;function sS(){if(II)return $_.exports;II=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),$_.exports=SN(),$_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bI;function RN(){if(bI)return Fc;bI=1;var n=AN(),e=dv(),t=sS();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=m;else{for(var T=!1,I=f.child;I;){if(I===o){T=!0,o=f,u=m;break}if(I===u){T=!0,u=f,o=m;break}I=I.sibling}if(!T){for(I=m.child;I;){if(I===o){T=!0,o=m,u=f;break}if(I===u){T=!0,u=m,o=f;break}I=I.sibling}if(!T)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),ie=Symbol.for("react.provider"),ne=Symbol.for("react.consumer"),X=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function M(r){return r===null||typeof r!="object"?null:(r=V&&r[V]||r["@@iterator"],typeof r=="function"?r:null)}var P=Symbol.for("react.client.reference");function Gt(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===P?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case L:return"Fragment";case U:return"Profiler";case j:return"StrictMode";case ae:return"Suspense";case ce:return"SuspenseList";case D:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case C:return"Portal";case X:return(r.displayName||"Context")+".Provider";case ne:return(r._context.displayName||"Context")+".Consumer";case fe:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case S:return s=r.displayName||null,s!==null?s:Gt(r.type)||"Memo";case A:s=r._payload,r=r._init;try{return Gt(r(s))}catch{}}return null}var dt=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Ne=[],N=-1;function Z(r){return{current:r}}function oe(r){0>N||(r.current=Ne[N],Ne[N]=null,N--)}function se(r,s){N++,Ne[N]=r.current,r.current=s}var ve=Z(null),De=Z(null),we=Z(null),Et=Z(null);function He(r,s){switch(se(we,s),se(De,r),se(ve,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?Gw(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=Gw(s),r=Hw(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}oe(ve),se(ve,r)}function Jt(){oe(ve),oe(De),oe(we)}function si(r){r.memoizedState!==null&&se(Et,r);var s=ve.current,o=Hw(s,r.type);s!==o&&(se(De,r),se(ve,o))}function kn(r){De.current===r&&(oe(ve),oe(De)),Et.current===r&&(oe(Et),kc._currentValue=ye)}var yn=Object.prototype.hasOwnProperty,ua=n.unstable_scheduleCallback,ca=n.unstable_cancelCallback,xu=n.unstable_shouldYield,fd=n.unstable_requestPaint,ai=n.unstable_now,Fm=n.unstable_getCurrentPriorityLevel,Ou=n.unstable_ImmediatePriority,Do=n.unstable_UserBlockingPriority,ha=n.unstable_NormalPriority,qm=n.unstable_LowPriority,Po=n.unstable_IdlePriority,Vu=n.log,pd=n.unstable_setDisableYieldValue,At=null,Xe=null;function Hn(r){if(typeof Vu=="function"&&pd(r),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(At,r)}catch{}}var vn=Math.clz32?Math.clz32:da,md=Math.log,jm=Math.LN2;function da(r){return r>>>=0,r===0?32:31-(md(r)/jm|0)|0}var fa=256,pa=4194304;function Ii(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function No(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,T=r.pingedLanes;r=r.warmLanes;var I=u&134217727;return I!==0?(u=I&~m,u!==0?f=Ii(u):(T&=I,T!==0?f=Ii(T):o||(o=I&~r,o!==0&&(f=Ii(o))))):(I=u&~m,I!==0?f=Ii(I):T!==0?f=Ii(T):o||(o=u&~r,o!==0&&(f=Ii(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function ma(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function ku(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mu(){var r=fa;return fa<<=1,(fa&4194048)===0&&(fa=256),r}function Lu(){var r=pa;return pa<<=1,(pa&62914560)===0&&(pa=4194304),r}function fr(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function pr(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Uu(r,s,o,u,f,m){var T=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var I=r.entanglements,R=r.expirationTimes,q=r.hiddenUpdates;for(o=T&~o;0<o;){var Y=31-vn(o),J=1<<Y;I[Y]=0,R[Y]=-1;var G=q[Y];if(G!==null)for(q[Y]=null,Y=0;Y<G.length;Y++){var H=G[Y];H!==null&&(H.lane&=-536870913)}o&=~J}u!==0&&Vi(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(T&~s))}function Vi(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-vn(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function Bu(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-vn(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Zr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function xo(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function es(){var r=ue.p;return r!==0?r:(r=window.event,r===void 0?32:cI(r.type))}function gd(r,s){var o=ue.p;try{return ue.p=r,s()}finally{ue.p=o}}var ft=Math.random().toString(36).slice(2),Ht="__reactFiber$"+ft,Lt="__reactProps$"+ft,oi="__reactContainer$"+ft,zu="__reactEvents$"+ft,Gm="__reactListeners$"+ft,ts="__reactHandles$"+ft,_d="__reactResources$"+ft,ga="__reactMarker$"+ft;function ns(r){delete r[Ht],delete r[Lt],delete r[zu],delete r[Gm],delete r[ts]}function mr(r){var s=r[Ht];if(s)return s;for(var o=r.parentNode;o;){if(s=o[oi]||o[Ht]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=Yw(r);r!==null;){if(o=r[Ht])return o;r=Yw(r)}return s}r=o,o=r.parentNode}return null}function ki(r){if(r=r[Ht]||r[oi]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Mi(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Sn(r){var s=r[_d];return s||(s=r[_d]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Nt(r){r[ga]=!0}var Fu=new Set,Oo={};function bi(r,s){gr(r,s),gr(r+"Capture",s)}function gr(r,s){for(Oo[r]=s,r=0;r<s.length;r++)Fu.add(s[r])}var yd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vd={},_a={};function Ed(r){return yn.call(_a,r)?!0:yn.call(vd,r)?!1:yd.test(r)?_a[r]=!0:(vd[r]=!0,!1)}function is(r,s,o){if(Ed(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Li(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function un(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var ya,Td;function _r(r){if(ya===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ya=s&&s[1]||"",Td=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ya+r+Td}var Vo=!1;function ko(r,s){if(!r||Vo)return"";Vo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(H){var G=H}Reflect.construct(r,[],J)}else{try{J.call()}catch(H){G=H}r.call(J.prototype)}}else{try{throw Error()}catch(H){G=H}(J=r())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(H){if(H&&G&&typeof H.stack=="string")return[H.stack,G.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),T=m[0],I=m[1];if(T&&I){var R=T.split(`
`),q=I.split(`
`);for(f=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===R.length||f===q.length)for(u=R.length-1,f=q.length-1;1<=u&&0<=f&&R[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(R[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||R[u]!==q[f]){var Y=`
`+R[u].replace(" at new "," at ");return r.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",r.displayName)),Y}while(1<=u&&0<=f);break}}}finally{Vo=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?_r(o):""}function qu(r){switch(r.tag){case 26:case 27:case 5:return _r(r.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 15:return ko(r.type,!1);case 11:return ko(r.type.render,!1);case 1:return ko(r.type,!0);case 31:return _r("Activity");default:return""}}function Mo(r){try{var s="";do s+=qu(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Rn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ju(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Hm(r){var s=ju(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Lo(r){r._valueTracker||(r._valueTracker=Hm(r))}function Gu(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=ju(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function va(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var $m=/[\n"\\]/g;function Ut(r){return r.replace($m,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function $n(r,s,o,u,f,m,T,I){r.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.type=T:r.removeAttribute("type"),s!=null?T==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Rn(s)):r.value!==""+Rn(s)&&(r.value=""+Rn(s)):T!=="submit"&&T!=="reset"||r.removeAttribute("value"),s!=null?rs(r,T,Rn(s)):o!=null?rs(r,T,Rn(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),I!=null&&typeof I!="function"&&typeof I!="symbol"&&typeof I!="boolean"?r.name=""+Rn(I):r.removeAttribute("name")}function Ea(r,s,o,u,f,m,T,I){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+Rn(o):"",s=s!=null?""+Rn(s):o,I||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=I?r.checked:!!u,r.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(r.name=T)}function rs(r,s,o){s==="number"&&va(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function yr(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Rn(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function nt(r,s,o){if(s!=null&&(s=""+Rn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Rn(o):""}function Ta(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(dt(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Rn(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function li(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var wa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||wa.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Hu(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&wd(r,f,u)}else for(var m in s)s.hasOwnProperty(m)&&wd(r,m,s[m])}function $u(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Km=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uo(r){return Qm.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var vr=null;function ui(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Er=null,Tr=null;function Ku(r){var s=ki(r);if(s&&(r=s.stateNode)){var o=r[Lt]||null;e:switch(r=s.stateNode,s.type){case"input":if($n(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ut(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[Lt]||null;if(!f)throw Error(i(90));$n(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Gu(u)}break e;case"textarea":nt(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&yr(r,!!o.multiple,s,!1)}}}var Ui=!1;function Id(r,s,o){if(Ui)return r(s,o);Ui=!0;try{var u=r(s);return u}finally{if(Ui=!1,(Er!==null||Tr!==null)&&(_f(),Er&&(s=Er,r=Tr,Tr=Er=null,Ku(s),r)))for(s=0;s<r.length;s++)Ku(r[s])}}function Ia(r,s){var o=r.stateNode;if(o===null)return null;var u=o[Lt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ci=!1;if(Ai)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){ci=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{ci=!1}var Bi=null,ss=null,wr=null;function Qu(){if(wr)return wr;var r,s=ss,o=s.length,u,f="value"in Bi?Bi.value:Bi.textContent,m=f.length;for(r=0;r<o&&s[r]===f[r];r++);var T=o-r;for(u=1;u<=T&&s[o-u]===f[m-u];u++);return wr=f.slice(r,1<u?1-u:void 0)}function zi(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Fi(){return!0}function Yu(){return!1}function Zt(r){function s(o,u,f,m,T){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var I in r)r.hasOwnProperty(I)&&(o=r[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fi:Yu,this.isPropagationStopped=Yu,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),s}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=Zt(Ye),Aa=y({},Ye,{view:0,detail:0}),bd=Zt(Aa),zo,Fo,qi,Sa=y({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Da,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==qi&&(qi&&r.type==="mousemove"?(zo=r.screenX-qi.screenX,Fo=r.screenY-qi.screenY):Fo=zo=0,qi=r),zo)},movementY:function(r){return"movementY"in r?r.movementY:Fo}}),hi=Zt(Sa),Ad=y({},Sa,{dataTransfer:0}),Ym=Zt(Ad),Ra=y({},Aa,{relatedTarget:0}),qo=Zt(Ra),Wu=y({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),jo=Zt(Wu),Sd=y({},Ye,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Go=Zt(Sd),Wm=y({},Ye,{data:0}),Xu=Zt(Wm),Ca={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ju(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Cd[r])?!!s[r]:!1}function Da(){return Ju}var Dd=y({},Aa,{key:function(r){if(r.key){var s=Ca[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=zi(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Rd[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Da,charCode:function(r){return r.type==="keypress"?zi(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?zi(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Ho=Zt(Dd),Pd=y({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zu=Zt(Pd),Ir=y({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Da}),Nd=Zt(Ir),xd=y({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=Zt(xd),Vd=y({},Sa,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),$o=Zt(Vd),Cn=y({},Ye,{newState:0,oldState:0}),kd=Zt(Cn),Md=[9,13,27,32],ji=Ai&&"CompositionEvent"in window,h=null;Ai&&"documentMode"in document&&(h=document.documentMode);var _=Ai&&"TextEvent"in window&&!h,E=Ai&&(!ji||h&&8<h&&11>=h),b=" ",B=!1;function K(r,s){switch(r){case"keyup":return Md.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function le(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Fe=!1;function $t(r,s){switch(r){case"compositionend":return le(s);case"keypress":return s.which!==32?null:(B=!0,b);case"textInput":return r=s.data,r===b&&B?null:r;default:return null}}function qe(r,s){if(Fe)return r==="compositionend"||!ji&&K(r,s)?(r=Qu(),wr=ss=Bi=null,Fe=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var en={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!en[r.type]:s==="textarea"}function br(r,s,o,u){Er?Tr?Tr.push(u):Tr=[u]:Er=u,s=If(s,"onChange"),0<s.length&&(o=new Bo("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var cn=null,Gi=null;function ec(r){Bw(r,0)}function Ld(r){var s=Mi(r);if(Gu(s))return r}function aT(r,s){if(r==="change")return s}var oT=!1;if(Ai){var Xm;if(Ai){var Jm="oninput"in document;if(!Jm){var lT=document.createElement("div");lT.setAttribute("oninput","return;"),Jm=typeof lT.oninput=="function"}Xm=Jm}else Xm=!1;oT=Xm&&(!document.documentMode||9<document.documentMode)}function uT(){cn&&(cn.detachEvent("onpropertychange",cT),Gi=cn=null)}function cT(r){if(r.propertyName==="value"&&Ld(Gi)){var s=[];br(s,Gi,r,ui(r)),Id(ec,s)}}function QD(r,s,o){r==="focusin"?(uT(),cn=s,Gi=o,cn.attachEvent("onpropertychange",cT)):r==="focusout"&&uT()}function YD(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ld(Gi)}function WD(r,s){if(r==="click")return Ld(s)}function XD(r,s){if(r==="input"||r==="change")return Ld(s)}function JD(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Kn=typeof Object.is=="function"?Object.is:JD;function tc(r,s){if(Kn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!yn.call(s,f)||!Kn(r[f],s[f]))return!1}return!0}function hT(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function dT(r,s){var o=hT(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=hT(o)}}function fT(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?fT(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function pT(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=va(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=va(r.document)}return s}function Zm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var ZD=Ai&&"documentMode"in document&&11>=document.documentMode,Ko=null,eg=null,nc=null,tg=!1;function mT(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;tg||Ko==null||Ko!==va(u)||(u=Ko,"selectionStart"in u&&Zm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),nc&&tc(nc,u)||(nc=u,u=If(eg,"onSelect"),0<u.length&&(s=new Bo("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Ko)))}function Pa(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Qo={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},ng={},gT={};Ai&&(gT=document.createElement("div").style,"AnimationEvent"in window||(delete Qo.animationend.animation,delete Qo.animationiteration.animation,delete Qo.animationstart.animation),"TransitionEvent"in window||delete Qo.transitionend.transition);function Na(r){if(ng[r])return ng[r];if(!Qo[r])return r;var s=Qo[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in gT)return ng[r]=s[o];return r}var _T=Na("animationend"),yT=Na("animationiteration"),vT=Na("animationstart"),eP=Na("transitionrun"),tP=Na("transitionstart"),nP=Na("transitioncancel"),ET=Na("transitionend"),TT=new Map,ig="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ig.push("scrollEnd");function Si(r,s){TT.set(r,s),bi(s,[r])}var wT=new WeakMap;function di(r,s){if(typeof r=="object"&&r!==null){var o=wT.get(r);return o!==void 0?o:(s={value:r,source:s,stack:Mo(s)},wT.set(r,s),s)}return{value:r,source:s,stack:Mo(s)}}var fi=[],Yo=0,rg=0;function Ud(){for(var r=Yo,s=rg=Yo=0;s<r;){var o=fi[s];fi[s++]=null;var u=fi[s];fi[s++]=null;var f=fi[s];fi[s++]=null;var m=fi[s];if(fi[s++]=null,u!==null&&f!==null){var T=u.pending;T===null?f.next=f:(f.next=T.next,T.next=f),u.pending=f}m!==0&&IT(o,f,m)}}function Bd(r,s,o,u){fi[Yo++]=r,fi[Yo++]=s,fi[Yo++]=o,fi[Yo++]=u,rg|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function sg(r,s,o,u){return Bd(r,s,o,u),zd(r)}function Wo(r,s){return Bd(r,null,null,s),zd(r)}function IT(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&s!==null&&(f=31-vn(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[s]:u.push(s),s.lane=o|536870912),m):null}function zd(r){if(50<Rc)throw Rc=0,h_=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Xo={};function iP(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(r,s,o,u){return new iP(r,s,o,u)}function ag(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Ar(r,s){var o=r.alternate;return o===null?(o=Qn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function bT(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Fd(r,s,o,u,f,m){var T=0;if(u=r,typeof r=="function")ag(r)&&(T=1);else if(typeof r=="string")T=sN(r,o,ve.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case D:return r=Qn(31,o,s,f),r.elementType=D,r.lanes=m,r;case L:return xa(o.children,f,m,s);case j:T=8,f|=24;break;case U:return r=Qn(12,o,s,f|2),r.elementType=U,r.lanes=m,r;case ae:return r=Qn(13,o,s,f),r.elementType=ae,r.lanes=m,r;case ce:return r=Qn(19,o,s,f),r.elementType=ce,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ie:case X:T=10;break e;case ne:T=9;break e;case fe:T=11;break e;case S:T=14;break e;case A:T=16,u=null;break e}T=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=Qn(T,o,s,f),s.elementType=r,s.type=u,s.lanes=m,s}function xa(r,s,o,u){return r=Qn(7,r,u,s),r.lanes=o,r}function og(r,s,o){return r=Qn(6,r,null,s),r.lanes=o,r}function lg(r,s,o){return s=Qn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Jo=[],Zo=0,qd=null,jd=0,pi=[],mi=0,Oa=null,Sr=1,Rr="";function Va(r,s){Jo[Zo++]=jd,Jo[Zo++]=qd,qd=r,jd=s}function AT(r,s,o){pi[mi++]=Sr,pi[mi++]=Rr,pi[mi++]=Oa,Oa=r;var u=Sr;r=Rr;var f=32-vn(u)-1;u&=~(1<<f),o+=1;var m=32-vn(s)+f;if(30<m){var T=f-f%5;m=(u&(1<<T)-1).toString(32),u>>=T,f-=T,Sr=1<<32-vn(s)+f|o<<f|u,Rr=m+r}else Sr=1<<m|o<<f|u,Rr=r}function ug(r){r.return!==null&&(Va(r,1),AT(r,1,0))}function cg(r){for(;r===qd;)qd=Jo[--Zo],Jo[Zo]=null,jd=Jo[--Zo],Jo[Zo]=null;for(;r===Oa;)Oa=pi[--mi],pi[mi]=null,Rr=pi[--mi],pi[mi]=null,Sr=pi[--mi],pi[mi]=null}var Dn=null,St=null,Qe=!1,ka=null,Hi=!1,hg=Error(i(519));function Ma(r){var s=Error(i(418,""));throw sc(di(s,r)),hg}function ST(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[Ht]=r,s[Lt]=u,o){case"dialog":Le("cancel",s),Le("close",s);break;case"iframe":case"object":case"embed":Le("load",s);break;case"video":case"audio":for(o=0;o<Dc.length;o++)Le(Dc[o],s);break;case"source":Le("error",s);break;case"img":case"image":case"link":Le("error",s),Le("load",s);break;case"details":Le("toggle",s);break;case"input":Le("invalid",s),Ea(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Lo(s);break;case"select":Le("invalid",s);break;case"textarea":Le("invalid",s),Ta(s,u.value,u.defaultValue,u.children),Lo(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||jw(s.textContent,o)?(u.popover!=null&&(Le("beforetoggle",s),Le("toggle",s)),u.onScroll!=null&&Le("scroll",s),u.onScrollEnd!=null&&Le("scrollend",s),u.onClick!=null&&(s.onclick=bf),s=!0):s=!1,s||Ma(r)}function RT(r){for(Dn=r.return;Dn;)switch(Dn.tag){case 5:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Dn=Dn.return}}function ic(r){if(r!==Dn)return!1;if(!Qe)return RT(r),Qe=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||R_(r.type,r.memoizedProps)),o=!o),o&&St&&Ma(r),RT(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){St=Ci(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}St=null}}else s===27?(s=St,Ts(r.type)?(r=N_,N_=null,St=r):St=s):St=Dn?Ci(r.stateNode.nextSibling):null;return!0}function rc(){St=Dn=null,Qe=!1}function CT(){var r=ka;return r!==null&&(Un===null?Un=r:Un.push.apply(Un,r),ka=null),r}function sc(r){ka===null?ka=[r]:ka.push(r)}var dg=Z(null),La=null,Cr=null;function as(r,s,o){se(dg,s._currentValue),s._currentValue=o}function Dr(r){r._currentValue=dg.current,oe(dg)}function fg(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function pg(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var T=f.child;m=m.firstContext;e:for(;m!==null;){var I=m;m=f;for(var R=0;R<s.length;R++)if(I.context===s[R]){m.lanes|=o,I=m.alternate,I!==null&&(I.lanes|=o),fg(m.return,o,r),u||(T=null);break e}m=I.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(i(341));T.lanes|=o,m=T.alternate,m!==null&&(m.lanes|=o),fg(T,o,r),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===r){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function ac(r,s,o,u){r=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var I=f.type;Kn(f.pendingProps.value,T.value)||(r!==null?r.push(I):r=[I])}}else if(f===Et.current){if(T=f.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(kc):r=[kc])}f=f.return}r!==null&&pg(s,r,o,u),s.flags|=262144}function Gd(r){for(r=r.firstContext;r!==null;){if(!Kn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Ua(r){La=r,Cr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function En(r){return DT(La,r)}function Hd(r,s){return La===null&&Ua(r),DT(r,s)}function DT(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Cr===null){if(r===null)throw Error(i(308));Cr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Cr=Cr.next=s;return o}var rP=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},sP=n.unstable_scheduleCallback,aP=n.unstable_NormalPriority,Qt={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mg(){return{controller:new rP,data:new Map,refCount:0}}function oc(r){r.refCount--,r.refCount===0&&sP(aP,function(){r.controller.abort()})}var lc=null,gg=0,el=0,tl=null;function oP(r,s){if(lc===null){var o=lc=[];gg=0,el=y_(),tl={status:"pending",value:void 0,then:function(u){o.push(u)}}}return gg++,s.then(PT,PT),s}function PT(){if(--gg===0&&lc!==null){tl!==null&&(tl.status="fulfilled");var r=lc;lc=null,el=0,tl=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function lP(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var NT=Q.S;Q.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&oP(r,s),NT!==null&&NT(r,s)};var Ba=Z(null);function _g(){var r=Ba.current;return r!==null?r:lt.pooledCache}function $d(r,s){s===null?se(Ba,Ba.current):se(Ba,s.pool)}function xT(){var r=_g();return r===null?null:{parent:Qt._currentValue,pool:r}}var uc=Error(i(460)),OT=Error(i(474)),Kd=Error(i(542)),yg={then:function(){}};function VT(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Qd(){}function kT(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Qd,Qd),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,LT(r),r;default:if(typeof s.status=="string")s.then(Qd,Qd);else{if(r=lt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,LT(r),r}throw cc=s,uc}}var cc=null;function MT(){if(cc===null)throw Error(i(459));var r=cc;return cc=null,r}function LT(r){if(r===uc||r===Kd)throw Error(i(483))}var os=!1;function vg(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ls(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function us(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(Je&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=zd(r),IT(r,null,o),s}return Bd(r,u,s,o),zd(r)}function hc(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,Bu(r,o)}}function Tg(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var wg=!1;function dc(){if(wg){var r=tl;if(r!==null)throw r}}function fc(r,s,o,u){wg=!1;var f=r.updateQueue;os=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var R=I,q=R.next;R.next=null,T===null?m=q:T.next=q,T=R;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,I=Y.lastBaseUpdate,I!==T&&(I===null?Y.firstBaseUpdate=q:I.next=q,Y.lastBaseUpdate=R))}if(m!==null){var J=f.baseState;T=0,Y=q=R=null,I=m;do{var G=I.lane&-536870913,H=G!==I.lane;if(H?(je&G)===G:(u&G)===G){G!==0&&G===el&&(wg=!0),Y!==null&&(Y=Y.next={lane:0,tag:I.tag,payload:I.payload,callback:null,next:null});e:{var Ce=r,be=I;G=s;var st=o;switch(be.tag){case 1:if(Ce=be.payload,typeof Ce=="function"){J=Ce.call(st,J,G);break e}J=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=be.payload,G=typeof Ce=="function"?Ce.call(st,J,G):Ce,G==null)break e;J=y({},J,G);break e;case 2:os=!0}}G=I.callback,G!==null&&(r.flags|=64,H&&(r.flags|=8192),H=f.callbacks,H===null?f.callbacks=[G]:H.push(G))}else H={lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Y===null?(q=Y=H,R=J):Y=Y.next=H,T|=G;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;H=I,I=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);Y===null&&(R=J),f.baseState=R,f.firstBaseUpdate=q,f.lastBaseUpdate=Y,m===null&&(f.shared.lanes=0),_s|=T,r.lanes=T,r.memoizedState=J}}function UT(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function BT(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)UT(o[r],s)}var nl=Z(null),Yd=Z(0);function zT(r,s){r=Mr,se(Yd,r),se(nl,s),Mr=r|s.baseLanes}function Ig(){se(Yd,Mr),se(nl,nl.current)}function bg(){Mr=Yd.current,oe(nl),oe(Yd)}var cs=0,Ve=null,it=null,Bt=null,Wd=!1,il=!1,za=!1,Xd=0,pc=0,rl=null,uP=0;function xt(){throw Error(i(321))}function Ag(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Kn(r[o],s[o]))return!1;return!0}function Sg(r,s,o,u,f,m){return cs=m,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Q.H=r===null||r.memoizedState===null?I0:b0,za=!1,m=o(u,f),za=!1,il&&(m=qT(s,o,u,f)),FT(r),m}function FT(r){Q.H=rf;var s=it!==null&&it.next!==null;if(cs=0,Bt=it=Ve=null,Wd=!1,pc=0,rl=null,s)throw Error(i(300));r===null||tn||(r=r.dependencies,r!==null&&Gd(r)&&(tn=!0))}function qT(r,s,o,u){Ve=r;var f=0;do{if(il&&(rl=null),pc=0,il=!1,25<=f)throw Error(i(301));if(f+=1,Bt=it=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Q.H=gP,m=s(o,u)}while(il);return m}function cP(){var r=Q.H,s=r.useState()[0];return s=typeof s.then=="function"?mc(s):s,r=r.useState()[0],(it!==null?it.memoizedState:null)!==r&&(Ve.flags|=1024),s}function Rg(){var r=Xd!==0;return Xd=0,r}function Cg(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Dg(r){if(Wd){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Wd=!1}cs=0,Bt=it=Ve=null,il=!1,pc=Xd=0,rl=null}function Mn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Ve.memoizedState=Bt=r:Bt=Bt.next=r,Bt}function zt(){if(it===null){var r=Ve.alternate;r=r!==null?r.memoizedState:null}else r=it.next;var s=Bt===null?Ve.memoizedState:Bt.next;if(s!==null)Bt=s,it=r;else{if(r===null)throw Ve.alternate===null?Error(i(467)):Error(i(310));it=r,r={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Bt===null?Ve.memoizedState=Bt=r:Bt=Bt.next=r}return Bt}function Pg(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mc(r){var s=pc;return pc+=1,rl===null&&(rl=[]),r=kT(rl,r,s),s=Ve,(Bt===null?s.memoizedState:Bt.next)===null&&(s=s.alternate,Q.H=s===null||s.memoizedState===null?I0:b0),r}function Jd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return mc(r);if(r.$$typeof===X)return En(r)}throw Error(i(438,String(r)))}function Ng(r){var s=null,o=Ve.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ve.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Pg(),Ve.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=O;return s.index++,o}function Pr(r,s){return typeof s=="function"?s(r):s}function Zd(r){var s=zt();return xg(s,it,r)}function xg(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}s.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{s=f.next;var I=T=null,R=null,q=s,Y=!1;do{var J=q.lane&-536870913;if(J!==q.lane?(je&J)===J:(cs&J)===J){var G=q.revertLane;if(G===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),J===el&&(Y=!0);else if((cs&G)===G){q=q.next,G===el&&(Y=!0);continue}else J={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},R===null?(I=R=J,T=m):R=R.next=J,Ve.lanes|=G,_s|=G;J=q.action,za&&o(m,J),m=q.hasEagerState?q.eagerState:o(m,J)}else G={lane:J,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},R===null?(I=R=G,T=m):R=R.next=G,Ve.lanes|=J,_s|=J;q=q.next}while(q!==null&&q!==s);if(R===null?T=m:R.next=I,!Kn(m,r.memoizedState)&&(tn=!0,Y&&(o=tl,o!==null)))throw o;r.memoizedState=m,r.baseState=T,r.baseQueue=R,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Og(r){var s=zt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do m=r(m,T.action),T=T.next;while(T!==f);Kn(m,s.memoizedState)||(tn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function jT(r,s,o){var u=Ve,f=zt(),m=Qe;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var T=!Kn((it||f).memoizedState,o);T&&(f.memoizedState=o,tn=!0),f=f.queue;var I=$T.bind(null,u,f,r);if(gc(2048,8,I,[r]),f.getSnapshot!==s||T||Bt!==null&&Bt.memoizedState.tag&1){if(u.flags|=2048,sl(9,ef(),HT.bind(null,u,f,o,s),null),lt===null)throw Error(i(349));m||(cs&124)!==0||GT(u,s,o)}return o}function GT(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Ve.updateQueue,s===null?(s=Pg(),Ve.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function HT(r,s,o,u){s.value=o,s.getSnapshot=u,KT(s)&&QT(r)}function $T(r,s,o){return o(function(){KT(s)&&QT(r)})}function KT(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Kn(r,o)}catch{return!0}}function QT(r){var s=Wo(r,2);s!==null&&Zn(s,r,2)}function Vg(r){var s=Mn();if(typeof r=="function"){var o=r;if(r=o(),za){Hn(!0);try{o()}finally{Hn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:r},s}function YT(r,s,o,u){return r.baseState=o,xg(r,it,typeof u=="function"?u:Pr)}function hP(r,s,o,u,f){if(nf(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};Q.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,WT(s,m)):(m.next=o.next,s.pending=o.next=m)}}function WT(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var m=Q.T,T={};Q.T=T;try{var I=o(f,u),R=Q.S;R!==null&&R(T,I),XT(r,s,I)}catch(q){kg(r,s,q)}finally{Q.T=m}}else try{m=o(f,u),XT(r,s,m)}catch(q){kg(r,s,q)}}function XT(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){JT(r,s,u)},function(u){return kg(r,s,u)}):JT(r,s,o)}function JT(r,s,o){s.status="fulfilled",s.value=o,ZT(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,WT(r,o)))}function kg(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,ZT(s),s=s.next;while(s!==u)}r.action=null}function ZT(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function e0(r,s){return s}function t0(r,s){if(Qe){var o=lt.formState;if(o!==null){e:{var u=Ve;if(Qe){if(St){t:{for(var f=St,m=Hi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ci(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){St=Ci(f.nextSibling),u=f.data==="F!";break e}}Ma(u)}u=!1}u&&(s=o[0])}}return o=Mn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e0,lastRenderedState:s},o.queue=u,o=E0.bind(null,Ve,u),u.dispatch=o,u=Vg(!1),m=zg.bind(null,Ve,!1,u.queue),u=Mn(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=hP.bind(null,Ve,f,m,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function n0(r){var s=zt();return i0(s,it,r)}function i0(r,s,o){if(s=xg(r,s,e0)[0],r=Zd(Pr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=mc(s)}catch(T){throw T===uc?Kd:T}else u=s;s=zt();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(Ve.flags|=2048,sl(9,ef(),dP.bind(null,f,o),null)),[u,m,r]}function dP(r,s){r.action=s}function r0(r){var s=zt(),o=it;if(o!==null)return i0(s,o,r);zt(),s=s.memoizedState,o=zt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function sl(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=Ve.updateQueue,s===null&&(s=Pg(),Ve.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function ef(){return{destroy:void 0,resource:void 0}}function s0(){return zt().memoizedState}function tf(r,s,o,u){var f=Mn();u=u===void 0?null:u,Ve.flags|=r,f.memoizedState=sl(1|s,ef(),o,u)}function gc(r,s,o,u){var f=zt();u=u===void 0?null:u;var m=f.memoizedState.inst;it!==null&&u!==null&&Ag(u,it.memoizedState.deps)?f.memoizedState=sl(s,m,o,u):(Ve.flags|=r,f.memoizedState=sl(1|s,m,o,u))}function a0(r,s){tf(8390656,8,r,s)}function o0(r,s){gc(2048,8,r,s)}function l0(r,s){return gc(4,2,r,s)}function u0(r,s){return gc(4,4,r,s)}function c0(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function h0(r,s,o){o=o!=null?o.concat([r]):null,gc(4,4,c0.bind(null,s,r),o)}function Mg(){}function d0(r,s){var o=zt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Ag(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function f0(r,s){var o=zt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Ag(s,u[1]))return u[0];if(u=r(),za){Hn(!0);try{r()}finally{Hn(!1)}}return o.memoizedState=[u,s],u}function Lg(r,s,o){return o===void 0||(cs&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=gw(),Ve.lanes|=r,_s|=r,o)}function p0(r,s,o,u){return Kn(o,s)?o:nl.current!==null?(r=Lg(r,o,u),Kn(r,s)||(tn=!0),r):(cs&42)===0?(tn=!0,r.memoizedState=o):(r=gw(),Ve.lanes|=r,_s|=r,s)}function m0(r,s,o,u,f){var m=ue.p;ue.p=m!==0&&8>m?m:8;var T=Q.T,I={};Q.T=I,zg(r,!1,s,o);try{var R=f(),q=Q.S;if(q!==null&&q(I,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var Y=lP(R,u);_c(r,s,Y,Jn(r))}else _c(r,s,u,Jn(r))}catch(J){_c(r,s,{then:function(){},status:"rejected",reason:J},Jn())}finally{ue.p=m,Q.T=T}}function fP(){}function Ug(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=g0(r).queue;m0(r,f,s,ye,o===null?fP:function(){return _0(r),o(u)})}function g0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:ye},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function _0(r){var s=g0(r).next.queue;_c(r,s,{},Jn())}function Bg(){return En(kc)}function y0(){return zt().memoizedState}function v0(){return zt().memoizedState}function pP(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=Jn();r=ls(o);var u=us(s,r,o);u!==null&&(Zn(u,s,o),hc(u,s,o)),s={cache:mg()},r.payload=s;return}s=s.return}}function mP(r,s,o){var u=Jn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},nf(r)?T0(s,o):(o=sg(r,s,o,u),o!==null&&(Zn(o,r,u),w0(o,s,u)))}function E0(r,s,o){var u=Jn();_c(r,s,o,u)}function _c(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(nf(r))T0(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var T=s.lastRenderedState,I=m(T,o);if(f.hasEagerState=!0,f.eagerState=I,Kn(I,T))return Bd(r,s,f,0),lt===null&&Ud(),!1}catch{}finally{}if(o=sg(r,s,f,u),o!==null)return Zn(o,r,u),w0(o,s,u),!0}return!1}function zg(r,s,o,u){if(u={lane:2,revertLane:y_(),action:u,hasEagerState:!1,eagerState:null,next:null},nf(r)){if(s)throw Error(i(479))}else s=sg(r,o,u,2),s!==null&&Zn(s,r,2)}function nf(r){var s=r.alternate;return r===Ve||s!==null&&s===Ve}function T0(r,s){il=Wd=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function w0(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,Bu(r,o)}}var rf={readContext:En,use:Jd,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt},I0={readContext:En,use:Jd,useCallback:function(r,s){return Mn().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:a0,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,tf(4194308,4,c0.bind(null,s,r),o)},useLayoutEffect:function(r,s){return tf(4194308,4,r,s)},useInsertionEffect:function(r,s){tf(4,2,r,s)},useMemo:function(r,s){var o=Mn();s=s===void 0?null:s;var u=r();if(za){Hn(!0);try{r()}finally{Hn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Mn();if(o!==void 0){var f=o(s);if(za){Hn(!0);try{o(s)}finally{Hn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=mP.bind(null,Ve,r),[u.memoizedState,r]},useRef:function(r){var s=Mn();return r={current:r},s.memoizedState=r},useState:function(r){r=Vg(r);var s=r.queue,o=E0.bind(null,Ve,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Mg,useDeferredValue:function(r,s){var o=Mn();return Lg(o,r,s)},useTransition:function(){var r=Vg(!1);return r=m0.bind(null,Ve,r.queue,!0,!1),Mn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=Ve,f=Mn();if(Qe){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),lt===null)throw Error(i(349));(je&124)!==0||GT(u,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,a0($T.bind(null,u,m,r),[r]),u.flags|=2048,sl(9,ef(),HT.bind(null,u,m,o,s),null),o},useId:function(){var r=Mn(),s=lt.identifierPrefix;if(Qe){var o=Rr,u=Sr;o=(u&~(1<<32-vn(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Xd++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=uP++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Bg,useFormState:t0,useActionState:t0,useOptimistic:function(r){var s=Mn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=zg.bind(null,Ve,!0,o),o.dispatch=s,[r,s]},useMemoCache:Ng,useCacheRefresh:function(){return Mn().memoizedState=pP.bind(null,Ve)}},b0={readContext:En,use:Jd,useCallback:d0,useContext:En,useEffect:o0,useImperativeHandle:h0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:f0,useReducer:Zd,useRef:s0,useState:function(){return Zd(Pr)},useDebugValue:Mg,useDeferredValue:function(r,s){var o=zt();return p0(o,it.memoizedState,r,s)},useTransition:function(){var r=Zd(Pr)[0],s=zt().memoizedState;return[typeof r=="boolean"?r:mc(r),s]},useSyncExternalStore:jT,useId:y0,useHostTransitionStatus:Bg,useFormState:n0,useActionState:n0,useOptimistic:function(r,s){var o=zt();return YT(o,it,r,s)},useMemoCache:Ng,useCacheRefresh:v0},gP={readContext:En,use:Jd,useCallback:d0,useContext:En,useEffect:o0,useImperativeHandle:h0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:f0,useReducer:Og,useRef:s0,useState:function(){return Og(Pr)},useDebugValue:Mg,useDeferredValue:function(r,s){var o=zt();return it===null?Lg(o,r,s):p0(o,it.memoizedState,r,s)},useTransition:function(){var r=Og(Pr)[0],s=zt().memoizedState;return[typeof r=="boolean"?r:mc(r),s]},useSyncExternalStore:jT,useId:y0,useHostTransitionStatus:Bg,useFormState:r0,useActionState:r0,useOptimistic:function(r,s){var o=zt();return it!==null?YT(o,it,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Ng,useCacheRefresh:v0},al=null,yc=0;function sf(r){var s=yc;return yc+=1,al===null&&(al=[]),kT(al,r,s)}function vc(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function af(r,s){throw s.$$typeof===v?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function A0(r){var s=r._init;return s(r._payload)}function S0(r){function s(k,x){if(r){var F=k.deletions;F===null?(k.deletions=[x],k.flags|=16):F.push(x)}}function o(k,x){if(!r)return null;for(;x!==null;)s(k,x),x=x.sibling;return null}function u(k){for(var x=new Map;k!==null;)k.key!==null?x.set(k.key,k):x.set(k.index,k),k=k.sibling;return x}function f(k,x){return k=Ar(k,x),k.index=0,k.sibling=null,k}function m(k,x,F){return k.index=F,r?(F=k.alternate,F!==null?(F=F.index,F<x?(k.flags|=67108866,x):F):(k.flags|=67108866,x)):(k.flags|=1048576,x)}function T(k){return r&&k.alternate===null&&(k.flags|=67108866),k}function I(k,x,F,W){return x===null||x.tag!==6?(x=og(F,k.mode,W),x.return=k,x):(x=f(x,F),x.return=k,x)}function R(k,x,F,W){var me=F.type;return me===L?Y(k,x,F.props.children,W,F.key):x!==null&&(x.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===A&&A0(me)===x.type)?(x=f(x,F.props),vc(x,F),x.return=k,x):(x=Fd(F.type,F.key,F.props,null,k.mode,W),vc(x,F),x.return=k,x)}function q(k,x,F,W){return x===null||x.tag!==4||x.stateNode.containerInfo!==F.containerInfo||x.stateNode.implementation!==F.implementation?(x=lg(F,k.mode,W),x.return=k,x):(x=f(x,F.children||[]),x.return=k,x)}function Y(k,x,F,W,me){return x===null||x.tag!==7?(x=xa(F,k.mode,W,me),x.return=k,x):(x=f(x,F),x.return=k,x)}function J(k,x,F){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=og(""+x,k.mode,F),x.return=k,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case w:return F=Fd(x.type,x.key,x.props,null,k.mode,F),vc(F,x),F.return=k,F;case C:return x=lg(x,k.mode,F),x.return=k,x;case A:var W=x._init;return x=W(x._payload),J(k,x,F)}if(dt(x)||M(x))return x=xa(x,k.mode,F,null),x.return=k,x;if(typeof x.then=="function")return J(k,sf(x),F);if(x.$$typeof===X)return J(k,Hd(k,x),F);af(k,x)}return null}function G(k,x,F,W){var me=x!==null?x.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return me!==null?null:I(k,x,""+F,W);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case w:return F.key===me?R(k,x,F,W):null;case C:return F.key===me?q(k,x,F,W):null;case A:return me=F._init,F=me(F._payload),G(k,x,F,W)}if(dt(F)||M(F))return me!==null?null:Y(k,x,F,W,null);if(typeof F.then=="function")return G(k,x,sf(F),W);if(F.$$typeof===X)return G(k,x,Hd(k,F),W);af(k,F)}return null}function H(k,x,F,W,me){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return k=k.get(F)||null,I(x,k,""+W,me);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case w:return k=k.get(W.key===null?F:W.key)||null,R(x,k,W,me);case C:return k=k.get(W.key===null?F:W.key)||null,q(x,k,W,me);case A:var ke=W._init;return W=ke(W._payload),H(k,x,F,W,me)}if(dt(W)||M(W))return k=k.get(F)||null,Y(x,k,W,me,null);if(typeof W.then=="function")return H(k,x,F,sf(W),me);if(W.$$typeof===X)return H(k,x,F,Hd(x,W),me);af(x,W)}return null}function Ce(k,x,F,W){for(var me=null,ke=null,Ee=x,Se=x=0,rn=null;Ee!==null&&Se<F.length;Se++){Ee.index>Se?(rn=Ee,Ee=null):rn=Ee.sibling;var $e=G(k,Ee,F[Se],W);if($e===null){Ee===null&&(Ee=rn);break}r&&Ee&&$e.alternate===null&&s(k,Ee),x=m($e,x,Se),ke===null?me=$e:ke.sibling=$e,ke=$e,Ee=rn}if(Se===F.length)return o(k,Ee),Qe&&Va(k,Se),me;if(Ee===null){for(;Se<F.length;Se++)Ee=J(k,F[Se],W),Ee!==null&&(x=m(Ee,x,Se),ke===null?me=Ee:ke.sibling=Ee,ke=Ee);return Qe&&Va(k,Se),me}for(Ee=u(Ee);Se<F.length;Se++)rn=H(Ee,k,Se,F[Se],W),rn!==null&&(r&&rn.alternate!==null&&Ee.delete(rn.key===null?Se:rn.key),x=m(rn,x,Se),ke===null?me=rn:ke.sibling=rn,ke=rn);return r&&Ee.forEach(function(Ss){return s(k,Ss)}),Qe&&Va(k,Se),me}function be(k,x,F,W){if(F==null)throw Error(i(151));for(var me=null,ke=null,Ee=x,Se=x=0,rn=null,$e=F.next();Ee!==null&&!$e.done;Se++,$e=F.next()){Ee.index>Se?(rn=Ee,Ee=null):rn=Ee.sibling;var Ss=G(k,Ee,$e.value,W);if(Ss===null){Ee===null&&(Ee=rn);break}r&&Ee&&Ss.alternate===null&&s(k,Ee),x=m(Ss,x,Se),ke===null?me=Ss:ke.sibling=Ss,ke=Ss,Ee=rn}if($e.done)return o(k,Ee),Qe&&Va(k,Se),me;if(Ee===null){for(;!$e.done;Se++,$e=F.next())$e=J(k,$e.value,W),$e!==null&&(x=m($e,x,Se),ke===null?me=$e:ke.sibling=$e,ke=$e);return Qe&&Va(k,Se),me}for(Ee=u(Ee);!$e.done;Se++,$e=F.next())$e=H(Ee,k,Se,$e.value,W),$e!==null&&(r&&$e.alternate!==null&&Ee.delete($e.key===null?Se:$e.key),x=m($e,x,Se),ke===null?me=$e:ke.sibling=$e,ke=$e);return r&&Ee.forEach(function(_N){return s(k,_N)}),Qe&&Va(k,Se),me}function st(k,x,F,W){if(typeof F=="object"&&F!==null&&F.type===L&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case w:e:{for(var me=F.key;x!==null;){if(x.key===me){if(me=F.type,me===L){if(x.tag===7){o(k,x.sibling),W=f(x,F.props.children),W.return=k,k=W;break e}}else if(x.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===A&&A0(me)===x.type){o(k,x.sibling),W=f(x,F.props),vc(W,F),W.return=k,k=W;break e}o(k,x);break}else s(k,x);x=x.sibling}F.type===L?(W=xa(F.props.children,k.mode,W,F.key),W.return=k,k=W):(W=Fd(F.type,F.key,F.props,null,k.mode,W),vc(W,F),W.return=k,k=W)}return T(k);case C:e:{for(me=F.key;x!==null;){if(x.key===me)if(x.tag===4&&x.stateNode.containerInfo===F.containerInfo&&x.stateNode.implementation===F.implementation){o(k,x.sibling),W=f(x,F.children||[]),W.return=k,k=W;break e}else{o(k,x);break}else s(k,x);x=x.sibling}W=lg(F,k.mode,W),W.return=k,k=W}return T(k);case A:return me=F._init,F=me(F._payload),st(k,x,F,W)}if(dt(F))return Ce(k,x,F,W);if(M(F)){if(me=M(F),typeof me!="function")throw Error(i(150));return F=me.call(F),be(k,x,F,W)}if(typeof F.then=="function")return st(k,x,sf(F),W);if(F.$$typeof===X)return st(k,x,Hd(k,F),W);af(k,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,x!==null&&x.tag===6?(o(k,x.sibling),W=f(x,F),W.return=k,k=W):(o(k,x),W=og(F,k.mode,W),W.return=k,k=W),T(k)):o(k,x)}return function(k,x,F,W){try{yc=0;var me=st(k,x,F,W);return al=null,me}catch(Ee){if(Ee===uc||Ee===Kd)throw Ee;var ke=Qn(29,Ee,null,k.mode);return ke.lanes=W,ke.return=k,ke}finally{}}}var ol=S0(!0),R0=S0(!1),gi=Z(null),$i=null;function hs(r){var s=r.alternate;se(Yt,Yt.current&1),se(gi,r),$i===null&&(s===null||nl.current!==null||s.memoizedState!==null)&&($i=r)}function C0(r){if(r.tag===22){if(se(Yt,Yt.current),se(gi,r),$i===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&($i=r)}}else ds()}function ds(){se(Yt,Yt.current),se(gi,gi.current)}function Nr(r){oe(gi),$i===r&&($i=null),oe(Yt)}var Yt=Z(0);function of(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||P_(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Fg(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:y({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var qg={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=Jn(),f=ls(u);f.payload=s,o!=null&&(f.callback=o),s=us(r,f,u),s!==null&&(Zn(s,r,u),hc(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=Jn(),f=ls(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=us(r,f,u),s!==null&&(Zn(s,r,u),hc(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=Jn(),u=ls(o);u.tag=2,s!=null&&(u.callback=s),s=us(r,u,o),s!==null&&(Zn(s,r,o),hc(s,r,o))}};function D0(r,s,o,u,f,m,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,T):s.prototype&&s.prototype.isPureReactComponent?!tc(o,u)||!tc(f,m):!0}function P0(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&qg.enqueueReplaceState(s,s.state,null)}function Fa(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=y({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var lf=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function N0(r){lf(r)}function x0(r){console.error(r)}function O0(r){lf(r)}function uf(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function V0(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function jg(r,s,o){return o=ls(o),o.tag=3,o.payload={element:null},o.callback=function(){uf(r,s)},o}function k0(r){return r=ls(r),r.tag=3,r}function M0(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){V0(s,o,u)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(r.callback=function(){V0(s,o,u),typeof f!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var I=u.stack;this.componentDidCatch(u.value,{componentStack:I!==null?I:""})})}function _P(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&ac(s,o,f,!0),o=gi.current,o!==null){switch(o.tag){case 13:return $i===null?f_():o.alternate===null&&Rt===0&&(Rt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===yg?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),m_(r,u,f)),!1;case 22:return o.flags|=65536,u===yg?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),m_(r,u,f)),!1}throw Error(i(435,o.tag))}return m_(r,u,f),f_(),!1}if(Qe)return s=gi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==hg&&(r=Error(i(422),{cause:u}),sc(di(r,o)))):(u!==hg&&(s=Error(i(423),{cause:u}),sc(di(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=di(u,o),f=jg(r.stateNode,u,f),Tg(r,f),Rt!==4&&(Rt=2)),!1;var m=Error(i(520),{cause:u});if(m=di(m,o),Sc===null?Sc=[m]:Sc.push(m),Rt!==4&&(Rt=2),s===null)return!0;u=di(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=jg(o.stateNode,u,r),Tg(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ys===null||!ys.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=k0(f),M0(f,r,o,u),Tg(o,f),!1}o=o.return}while(o!==null);return!1}var L0=Error(i(461)),tn=!1;function hn(r,s,o,u){s.child=r===null?R0(s,null,o,u):ol(s,r.child,o,u)}function U0(r,s,o,u,f){o=o.render;var m=s.ref;if("ref"in u){var T={};for(var I in u)I!=="ref"&&(T[I]=u[I])}else T=u;return Ua(s),u=Sg(r,s,o,T,m,f),I=Rg(),r!==null&&!tn?(Cg(r,s,f),xr(r,s,f)):(Qe&&I&&ug(s),s.flags|=1,hn(r,s,u,f),s.child)}function B0(r,s,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!ag(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,z0(r,s,m,u,f)):(r=Fd(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!Xg(r,f)){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:tc,o(T,u)&&r.ref===s.ref)return xr(r,s,f)}return s.flags|=1,r=Ar(m,u),r.ref=s.ref,r.return=s,s.child=r}function z0(r,s,o,u,f){if(r!==null){var m=r.memoizedProps;if(tc(m,u)&&r.ref===s.ref)if(tn=!1,s.pendingProps=u=m,Xg(r,f))(r.flags&131072)!==0&&(tn=!0);else return s.lanes=r.lanes,xr(r,s,f)}return Gg(r,s,o,u,f)}function F0(r,s,o){var u=s.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=s.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return q0(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&$d(s,m!==null?m.cachePool:null),m!==null?zT(s,m):Ig(),C0(s);else return s.lanes=s.childLanes=536870912,q0(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?($d(s,m.cachePool),zT(s,m),ds(),s.memoizedState=null):(r!==null&&$d(s,null),Ig(),ds());return hn(r,s,f,o),s.child}function q0(r,s,o,u){var f=_g();return f=f===null?null:{parent:Qt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&$d(s,null),Ig(),C0(s),r!==null&&ac(r,s,u,!0),null}function cf(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function Gg(r,s,o,u,f){return Ua(s),o=Sg(r,s,o,u,void 0,f),u=Rg(),r!==null&&!tn?(Cg(r,s,f),xr(r,s,f)):(Qe&&u&&ug(s),s.flags|=1,hn(r,s,o,f),s.child)}function j0(r,s,o,u,f,m){return Ua(s),s.updateQueue=null,o=qT(s,u,o,f),FT(r),u=Rg(),r!==null&&!tn?(Cg(r,s,m),xr(r,s,m)):(Qe&&u&&ug(s),s.flags|=1,hn(r,s,o,m),s.child)}function G0(r,s,o,u,f){if(Ua(s),s.stateNode===null){var m=Xo,T=o.contextType;typeof T=="object"&&T!==null&&(m=En(T)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=qg,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},vg(s),T=o.contextType,m.context=typeof T=="object"&&T!==null?En(T):Xo,m.state=s.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(Fg(s,o,T,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&qg.enqueueReplaceState(m,m.state,null),fc(s,u,m,f),dc(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){m=s.stateNode;var I=s.memoizedProps,R=Fa(o,I);m.props=R;var q=m.context,Y=o.contextType;T=Xo,typeof Y=="object"&&Y!==null&&(T=En(Y));var J=o.getDerivedStateFromProps;Y=typeof J=="function"||typeof m.getSnapshotBeforeUpdate=="function",I=s.pendingProps!==I,Y||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(I||q!==T)&&P0(s,m,u,T),os=!1;var G=s.memoizedState;m.state=G,fc(s,u,m,f),dc(),q=s.memoizedState,I||G!==q||os?(typeof J=="function"&&(Fg(s,o,J,u),q=s.memoizedState),(R=os||D0(s,o,R,u,G,q,T))?(Y||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=q),m.props=u,m.state=q,m.context=T,u=R):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,Eg(r,s),T=s.memoizedProps,Y=Fa(o,T),m.props=Y,J=s.pendingProps,G=m.context,q=o.contextType,R=Xo,typeof q=="object"&&q!==null&&(R=En(q)),I=o.getDerivedStateFromProps,(q=typeof I=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==J||G!==R)&&P0(s,m,u,R),os=!1,G=s.memoizedState,m.state=G,fc(s,u,m,f),dc();var H=s.memoizedState;T!==J||G!==H||os||r!==null&&r.dependencies!==null&&Gd(r.dependencies)?(typeof I=="function"&&(Fg(s,o,I,u),H=s.memoizedState),(Y=os||D0(s,o,Y,u,G,H,R)||r!==null&&r.dependencies!==null&&Gd(r.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,H,R),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,H,R)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=H),m.props=u,m.state=H,m.context=R,u=Y):(typeof m.componentDidUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),u=!1)}return m=u,cf(r,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&u?(s.child=ol(s,r.child,null,f),s.child=ol(s,null,o,f)):hn(r,s,o,f),s.memoizedState=m.state,r=s.child):r=xr(r,s,f),r}function H0(r,s,o,u){return rc(),s.flags|=256,hn(r,s,o,u),s.child}var Hg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $g(r){return{baseLanes:r,cachePool:xT()}}function Kg(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=_i),r}function $0(r,s,o){var u=s.pendingProps,f=!1,m=(s.flags&128)!==0,T;if((T=m)||(T=r!==null&&r.memoizedState===null?!1:(Yt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,r===null){if(Qe){if(f?hs(s):ds(),Qe){var I=St,R;if(R=I){e:{for(R=I,I=Hi;R.nodeType!==8;){if(!I){I=null;break e}if(R=Ci(R.nextSibling),R===null){I=null;break e}}I=R}I!==null?(s.memoizedState={dehydrated:I,treeContext:Oa!==null?{id:Sr,overflow:Rr}:null,retryLane:536870912,hydrationErrors:null},R=Qn(18,null,null,0),R.stateNode=I,R.return=s,s.child=R,Dn=s,St=null,R=!0):R=!1}R||Ma(s)}if(I=s.memoizedState,I!==null&&(I=I.dehydrated,I!==null))return P_(I)?s.lanes=32:s.lanes=536870912,null;Nr(s)}return I=u.children,u=u.fallback,f?(ds(),f=s.mode,I=hf({mode:"hidden",children:I},f),u=xa(u,f,o,null),I.return=s,u.return=s,I.sibling=u,s.child=I,f=s.child,f.memoizedState=$g(o),f.childLanes=Kg(r,T,o),s.memoizedState=Hg,u):(hs(s),Qg(s,I))}if(R=r.memoizedState,R!==null&&(I=R.dehydrated,I!==null)){if(m)s.flags&256?(hs(s),s.flags&=-257,s=Yg(r,s,o)):s.memoizedState!==null?(ds(),s.child=r.child,s.flags|=128,s=null):(ds(),f=u.fallback,I=s.mode,u=hf({mode:"visible",children:u.children},I),f=xa(f,I,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,ol(s,r.child,null,o),u=s.child,u.memoizedState=$g(o),u.childLanes=Kg(r,T,o),s.memoizedState=Hg,s=f);else if(hs(s),P_(I)){if(T=I.nextSibling&&I.nextSibling.dataset,T)var q=T.dgst;T=q,u=Error(i(419)),u.stack="",u.digest=T,sc({value:u,source:null,stack:null}),s=Yg(r,s,o)}else if(tn||ac(r,s,o,!1),T=(o&r.childLanes)!==0,tn||T){if(T=lt,T!==null&&(u=o&-o,u=(u&42)!==0?1:Zr(u),u=(u&(T.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane))throw R.retryLane=u,Wo(r,u),Zn(T,r,u),L0;I.data==="$?"||f_(),s=Yg(r,s,o)}else I.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=R.treeContext,St=Ci(I.nextSibling),Dn=s,Qe=!0,ka=null,Hi=!1,r!==null&&(pi[mi++]=Sr,pi[mi++]=Rr,pi[mi++]=Oa,Sr=r.id,Rr=r.overflow,Oa=s),s=Qg(s,u.children),s.flags|=4096);return s}return f?(ds(),f=u.fallback,I=s.mode,R=r.child,q=R.sibling,u=Ar(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,q!==null?f=Ar(q,f):(f=xa(f,I,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,I=r.child.memoizedState,I===null?I=$g(o):(R=I.cachePool,R!==null?(q=Qt._currentValue,R=R.parent!==q?{parent:q,pool:q}:R):R=xT(),I={baseLanes:I.baseLanes|o,cachePool:R}),f.memoizedState=I,f.childLanes=Kg(r,T,o),s.memoizedState=Hg,u):(hs(s),o=r.child,r=o.sibling,o=Ar(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(T=s.deletions,T===null?(s.deletions=[r],s.flags|=16):T.push(r)),s.child=o,s.memoizedState=null,o)}function Qg(r,s){return s=hf({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function hf(r,s){return r=Qn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Yg(r,s,o){return ol(s,r.child,null,o),r=Qg(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function K0(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),fg(r.return,s,o)}function Wg(r,s,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function Q0(r,s,o){var u=s.pendingProps,f=u.revealOrder,m=u.tail;if(hn(r,s,u.children,o),u=Yt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&K0(r,o,s);else if(r.tag===19)K0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(se(Yt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&of(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Wg(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&of(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}Wg(s,!0,o,null,m);break;case"together":Wg(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function xr(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),_s|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(ac(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Ar(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Ar(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function Xg(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Gd(r)))}function yP(r,s,o){switch(s.tag){case 3:He(s,s.stateNode.containerInfo),as(s,Qt,r.memoizedState.cache),rc();break;case 27:case 5:si(s);break;case 4:He(s,s.stateNode.containerInfo);break;case 10:as(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(hs(s),s.flags|=128,null):(o&s.child.childLanes)!==0?$0(r,s,o):(hs(s),r=xr(r,s,o),r!==null?r.sibling:null);hs(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(ac(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return Q0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Yt,Yt.current),u)break;return null;case 22:case 23:return s.lanes=0,F0(r,s,o);case 24:as(s,Qt,r.memoizedState.cache)}return xr(r,s,o)}function Y0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)tn=!0;else{if(!Xg(r,o)&&(s.flags&128)===0)return tn=!1,yP(r,s,o);tn=(r.flags&131072)!==0}else tn=!1,Qe&&(s.flags&1048576)!==0&&AT(s,jd,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")ag(u)?(r=Fa(u,r),s.tag=1,s=G0(null,s,u,r,o)):(s.tag=0,s=Gg(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===fe){s.tag=11,s=U0(null,s,u,r,o);break e}else if(f===S){s.tag=14,s=B0(null,s,u,r,o);break e}}throw s=Gt(u)||u,Error(i(306,s,""))}}return s;case 0:return Gg(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Fa(u,s.pendingProps),G0(r,s,u,f,o);case 3:e:{if(He(s,s.stateNode.containerInfo),r===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;f=m.element,Eg(r,s),fc(s,u,null,o);var T=s.memoizedState;if(u=T.cache,as(s,Qt,u),u!==m.cache&&pg(s,[Qt],o,!0),dc(),u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=H0(r,s,u,o);break e}else if(u!==f){f=di(Error(i(424)),s),sc(f),s=H0(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(St=Ci(r.firstChild),Dn=s,Qe=!0,ka=null,Hi=!0,o=R0(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(rc(),u===f){s=xr(r,s,o);break e}hn(r,s,u,o)}s=s.child}return s;case 26:return cf(r,s),r===null?(o=Zw(s.type,null,s.pendingProps,null))?s.memoizedState=o:Qe||(o=s.type,r=s.pendingProps,u=Af(we.current).createElement(o),u[Ht]=s,u[Lt]=r,fn(u,o,r),Nt(u),s.stateNode=u):s.memoizedState=Zw(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return si(s),r===null&&Qe&&(u=s.stateNode=Ww(s.type,s.pendingProps,we.current),Dn=s,Hi=!0,f=St,Ts(s.type)?(N_=f,St=Ci(u.firstChild)):St=f),hn(r,s,s.pendingProps.children,o),cf(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Qe&&((f=u=St)&&(u=$P(u,s.type,s.pendingProps,Hi),u!==null?(s.stateNode=u,Dn=s,St=Ci(u.firstChild),Hi=!1,f=!0):f=!1),f||Ma(s)),si(s),f=s.type,m=s.pendingProps,T=r!==null?r.memoizedProps:null,u=m.children,R_(f,m)?u=null:T!==null&&R_(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=Sg(r,s,cP,null,null,o),kc._currentValue=f),cf(r,s),hn(r,s,u,o),s.child;case 6:return r===null&&Qe&&((r=o=St)&&(o=KP(o,s.pendingProps,Hi),o!==null?(s.stateNode=o,Dn=s,St=null,r=!0):r=!1),r||Ma(s)),null;case 13:return $0(r,s,o);case 4:return He(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=ol(s,null,u,o):hn(r,s,u,o),s.child;case 11:return U0(r,s,s.type,s.pendingProps,o);case 7:return hn(r,s,s.pendingProps,o),s.child;case 8:return hn(r,s,s.pendingProps.children,o),s.child;case 12:return hn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,as(s,s.type,u.value),hn(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,Ua(s),f=En(f),u=u(f),s.flags|=1,hn(r,s,u,o),s.child;case 14:return B0(r,s,s.type,s.pendingProps,o);case 15:return z0(r,s,s.type,s.pendingProps,o);case 19:return Q0(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=hf(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Ar(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return F0(r,s,o);case 24:return Ua(s),u=En(Qt),r===null?(f=_g(),f===null&&(f=lt,m=mg(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:u,cache:f},vg(s),as(s,Qt,f)):((r.lanes&o)!==0&&(Eg(r,s),fc(s,null,null,o),dc()),f=r.memoizedState,m=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),as(s,Qt,u)):(u=m.cache,as(s,Qt,u),u!==f.cache&&pg(s,[Qt],o,!0))),hn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Or(r){r.flags|=4}function W0(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!rI(s)){if(s=gi.current,s!==null&&((je&4194048)===je?$i!==null:(je&62914560)!==je&&(je&536870912)===0||s!==$i))throw cc=yg,OT;r.flags|=8192}}function df(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Lu():536870912,r.lanes|=s,hl|=s)}function Ec(r,s){if(!Qe)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function Tt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function vP(r,s,o){var u=s.pendingProps;switch(cg(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(s),null;case 1:return Tt(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Dr(Qt),Jt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(ic(s)?Or(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,CT())),Tt(s),null;case 26:return o=s.memoizedState,r===null?(Or(s),o!==null?(Tt(s),W0(s,o)):(Tt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Or(s),Tt(s),W0(s,o)):(Tt(s),s.flags&=-16777217):(r.memoizedProps!==u&&Or(s),Tt(s),s.flags&=-16777217),null;case 27:kn(s),o=we.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Or(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return Tt(s),null}r=ve.current,ic(s)?ST(s):(r=Ww(f,u,o),s.stateNode=r,Or(s))}return Tt(s),null;case 5:if(kn(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Or(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return Tt(s),null}if(r=ve.current,ic(s))ST(s);else{switch(f=Af(we.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[Ht]=s,r[Lt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(fn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Or(s)}}return Tt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&Or(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=we.current,ic(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=Dn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[Ht]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||jw(r.nodeValue,o)),r||Ma(s)}else r=Af(r).createTextNode(u),r[Ht]=s,s.stateNode=r}return Tt(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=ic(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Ht]=s}else rc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Tt(s),f=!1}else f=CT(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Nr(s),s):(Nr(s),null)}if(Nr(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),df(s,s.updateQueue),Tt(s),null;case 4:return Jt(),r===null&&w_(s.stateNode.containerInfo),Tt(s),null;case 10:return Dr(s.type),Tt(s),null;case 19:if(oe(Yt),f=s.memoizedState,f===null)return Tt(s),null;if(u=(s.flags&128)!==0,m=f.rendering,m===null)if(u)Ec(f,!1);else{if(Rt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=of(r),m!==null){for(s.flags|=128,Ec(f,!1),r=m.updateQueue,s.updateQueue=r,df(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)bT(o,r),o=o.sibling;return se(Yt,Yt.current&1|2),s.child}r=r.sibling}f.tail!==null&&ai()>mf&&(s.flags|=128,u=!0,Ec(f,!1),s.lanes=4194304)}else{if(!u)if(r=of(m),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,df(s,r),Ec(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Qe)return Tt(s),null}else 2*ai()-f.renderingStartTime>mf&&o!==536870912&&(s.flags|=128,u=!0,Ec(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(r=f.last,r!==null?r.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=ai(),s.sibling=null,r=Yt.current,se(Yt,u?r&1|2:r&1),s):(Tt(s),null);case 22:case 23:return Nr(s),bg(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(Tt(s),s.subtreeFlags&6&&(s.flags|=8192)):Tt(s),o=s.updateQueue,o!==null&&df(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&oe(Ba),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Dr(Qt),Tt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function EP(r,s){switch(cg(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Dr(Qt),Jt(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return kn(s),null;case 13:if(Nr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));rc()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return oe(Yt),null;case 4:return Jt(),null;case 10:return Dr(s.type),null;case 22:case 23:return Nr(s),bg(),r!==null&&oe(Ba),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Dr(Qt),null;case 25:return null;default:return null}}function X0(r,s){switch(cg(s),s.tag){case 3:Dr(Qt),Jt();break;case 26:case 27:case 5:kn(s);break;case 4:Jt();break;case 13:Nr(s);break;case 19:oe(Yt);break;case 10:Dr(s.type);break;case 22:case 23:Nr(s),bg(),r!==null&&oe(Ba);break;case 24:Dr(Qt)}}function Tc(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,T=o.inst;u=m(),T.destroy=u}o=o.next}while(o!==f)}}catch(I){at(s,s.return,I)}}function fs(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var T=u.inst,I=T.destroy;if(I!==void 0){T.destroy=void 0,f=s;var R=o,q=I;try{q()}catch(Y){at(f,R,Y)}}}u=u.next}while(u!==m)}}catch(Y){at(s,s.return,Y)}}function J0(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{BT(s,o)}catch(u){at(r,r.return,u)}}}function Z0(r,s,o){o.props=Fa(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){at(r,s,u)}}function wc(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){at(r,s,f)}}function Ki(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){at(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){at(r,s,f)}else o.current=null}function ew(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){at(r,r.return,f)}}function Jg(r,s,o){try{var u=r.stateNode;FP(u,r.type,o,s),u[Lt]=s}catch(f){at(r,r.return,f)}}function tw(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Ts(r.type)||r.tag===4}function Zg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||tw(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Ts(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function e_(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=bf));else if(u!==4&&(u===27&&Ts(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(e_(r,s,o),r=r.sibling;r!==null;)e_(r,s,o),r=r.sibling}function ff(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&Ts(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(ff(r,s,o),r=r.sibling;r!==null;)ff(r,s,o),r=r.sibling}function nw(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);fn(s,u,o),s[Ht]=r,s[Lt]=o}catch(m){at(r,r.return,m)}}var Vr=!1,Ot=!1,t_=!1,iw=typeof WeakSet=="function"?WeakSet:Set,nn=null;function TP(r,s){if(r=r.containerInfo,A_=Nf,r=pT(r),Zm(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,I=-1,R=-1,q=0,Y=0,J=r,G=null;t:for(;;){for(var H;J!==o||f!==0&&J.nodeType!==3||(I=T+f),J!==m||u!==0&&J.nodeType!==3||(R=T+u),J.nodeType===3&&(T+=J.nodeValue.length),(H=J.firstChild)!==null;)G=J,J=H;for(;;){if(J===r)break t;if(G===o&&++q===f&&(I=T),G===m&&++Y===u&&(R=T),(H=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=H}o=I===-1||R===-1?null:{start:I,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(S_={focusedElem:r,selectionRange:o},Nf=!1,nn=s;nn!==null;)if(s=nn,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,nn=r;else for(;nn!==null;){switch(s=nn,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Ce=Fa(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Ce,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(be){at(o,o.return,be)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)D_(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":D_(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,nn=r;break}nn=s.return}}function rw(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ps(r,o),u&4&&Tc(5,o);break;case 1:if(ps(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(T){at(o,o.return,T)}else{var f=Fa(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(T){at(o,o.return,T)}}u&64&&J0(o),u&512&&wc(o,o.return);break;case 3:if(ps(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{BT(r,s)}catch(T){at(o,o.return,T)}}break;case 27:s===null&&u&4&&nw(o);case 26:case 5:ps(r,o),s===null&&u&4&&ew(o),u&512&&wc(o,o.return);break;case 12:ps(r,o);break;case 13:ps(r,o),u&4&&ow(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=PP.bind(null,o),QP(r,o))));break;case 22:if(u=o.memoizedState!==null||Vr,!u){s=s!==null&&s.memoizedState!==null||Ot,f=Vr;var m=Ot;Vr=u,(Ot=s)&&!m?ms(r,o,(o.subtreeFlags&8772)!==0):ps(r,o),Vr=f,Ot=m}break;case 30:break;default:ps(r,o)}}function sw(r){var s=r.alternate;s!==null&&(r.alternate=null,sw(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&ns(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var pt=null,Ln=!1;function kr(r,s,o){for(o=o.child;o!==null;)aw(r,s,o),o=o.sibling}function aw(r,s,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(At,o)}catch{}switch(o.tag){case 26:Ot||Ki(o,s),kr(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ot||Ki(o,s);var u=pt,f=Ln;Ts(o.type)&&(pt=o.stateNode,Ln=!1),kr(r,s,o),Nc(o.stateNode),pt=u,Ln=f;break;case 5:Ot||Ki(o,s);case 6:if(u=pt,f=Ln,pt=null,kr(r,s,o),pt=u,Ln=f,pt!==null)if(Ln)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(o.stateNode)}catch(m){at(o,s,m)}else try{pt.removeChild(o.stateNode)}catch(m){at(o,s,m)}break;case 18:pt!==null&&(Ln?(r=pt,Qw(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Bc(r)):Qw(pt,o.stateNode));break;case 4:u=pt,f=Ln,pt=o.stateNode.containerInfo,Ln=!0,kr(r,s,o),pt=u,Ln=f;break;case 0:case 11:case 14:case 15:Ot||fs(2,o,s),Ot||fs(4,o,s),kr(r,s,o);break;case 1:Ot||(Ki(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Z0(o,s,u)),kr(r,s,o);break;case 21:kr(r,s,o);break;case 22:Ot=(u=Ot)||o.memoizedState!==null,kr(r,s,o),Ot=u;break;default:kr(r,s,o)}}function ow(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Bc(r)}catch(o){at(s,s.return,o)}}function wP(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new iw),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new iw),s;default:throw Error(i(435,r.tag))}}function n_(r,s){var o=wP(r);s.forEach(function(u){var f=NP.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function Yn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,T=s,I=T;e:for(;I!==null;){switch(I.tag){case 27:if(Ts(I.type)){pt=I.stateNode,Ln=!1;break e}break;case 5:pt=I.stateNode,Ln=!1;break e;case 3:case 4:pt=I.stateNode.containerInfo,Ln=!0;break e}I=I.return}if(pt===null)throw Error(i(160));aw(m,T,f),pt=null,Ln=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)lw(s,r),s=s.sibling}var Ri=null;function lw(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Yn(s,r),Wn(r),u&4&&(fs(3,r,r.return),Tc(3,r),fs(5,r,r.return));break;case 1:Yn(s,r),Wn(r),u&512&&(Ot||o===null||Ki(o,o.return)),u&64&&Vr&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Ri;if(Yn(s,r),Wn(r),u&512&&(Ot||o===null||Ki(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ga]||m[Ht]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),fn(m,u,o),m[Ht]=r,Nt(m),u=m;break e;case"link":var T=nI("link","href",f).get(u+(o.href||""));if(T){for(var I=0;I<T.length;I++)if(m=T[I],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(I,1);break t}}m=f.createElement(u),fn(m,u,o),f.head.appendChild(m);break;case"meta":if(T=nI("meta","content",f).get(u+(o.content||""))){for(I=0;I<T.length;I++)if(m=T[I],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(I,1);break t}}m=f.createElement(u),fn(m,u,o),f.head.appendChild(m);break;default:throw Error(i(468,u))}m[Ht]=r,Nt(m),u=m}r.stateNode=u}else iI(f,r.type,r.stateNode);else r.stateNode=tI(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?iI(f,r.type,r.stateNode):tI(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&Jg(r,r.memoizedProps,o.memoizedProps)}break;case 27:Yn(s,r),Wn(r),u&512&&(Ot||o===null||Ki(o,o.return)),o!==null&&u&4&&Jg(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Yn(s,r),Wn(r),u&512&&(Ot||o===null||Ki(o,o.return)),r.flags&32){f=r.stateNode;try{li(f,"")}catch(H){at(r,r.return,H)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,Jg(r,f,o!==null?o.memoizedProps:f)),u&1024&&(t_=!0);break;case 6:if(Yn(s,r),Wn(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(H){at(r,r.return,H)}}break;case 3:if(Cf=null,f=Ri,Ri=Sf(s.containerInfo),Yn(s,r),Ri=f,Wn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Bc(s.containerInfo)}catch(H){at(r,r.return,H)}t_&&(t_=!1,uw(r));break;case 4:u=Ri,Ri=Sf(r.stateNode.containerInfo),Yn(s,r),Wn(r),Ri=u;break;case 12:Yn(s,r),Wn(r);break;case 13:Yn(s,r),Wn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(l_=ai()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,n_(r,u)));break;case 22:f=r.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,q=Vr,Y=Ot;if(Vr=q||f,Ot=Y||R,Yn(s,r),Ot=Y,Vr=q,Wn(r),u&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||R||Vr||Ot||qa(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){R=o=s;try{if(m=R.stateNode,f)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{I=R.stateNode;var J=R.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;I.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(H){at(R,R.return,H)}}}else if(s.tag===6){if(o===null){R=s;try{R.stateNode.nodeValue=f?"":R.memoizedProps}catch(H){at(R,R.return,H)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,n_(r,o))));break;case 19:Yn(s,r),Wn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,n_(r,u)));break;case 30:break;case 21:break;default:Yn(s,r),Wn(r)}}function Wn(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(tw(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=Zg(r);ff(r,m,f);break;case 5:var T=o.stateNode;o.flags&32&&(li(T,""),o.flags&=-33);var I=Zg(r);ff(r,I,T);break;case 3:case 4:var R=o.stateNode.containerInfo,q=Zg(r);e_(r,q,R);break;default:throw Error(i(161))}}catch(Y){at(r,r.return,Y)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function uw(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;uw(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function ps(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)rw(r,s.alternate,s),s=s.sibling}function qa(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:fs(4,s,s.return),qa(s);break;case 1:Ki(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Z0(s,s.return,o),qa(s);break;case 27:Nc(s.stateNode);case 26:case 5:Ki(s,s.return),qa(s);break;case 22:s.memoizedState===null&&qa(s);break;case 30:qa(s);break;default:qa(s)}r=r.sibling}}function ms(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,m=s,T=m.flags;switch(m.tag){case 0:case 11:case 15:ms(f,m,o),Tc(4,m);break;case 1:if(ms(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){at(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var I=u.stateNode;try{var R=f.shared.hiddenCallbacks;if(R!==null)for(f.shared.hiddenCallbacks=null,f=0;f<R.length;f++)UT(R[f],I)}catch(q){at(u,u.return,q)}}o&&T&64&&J0(m),wc(m,m.return);break;case 27:nw(m);case 26:case 5:ms(f,m,o),o&&u===null&&T&4&&ew(m),wc(m,m.return);break;case 12:ms(f,m,o);break;case 13:ms(f,m,o),o&&T&4&&ow(f,m);break;case 22:m.memoizedState===null&&ms(f,m,o),wc(m,m.return);break;case 30:break;default:ms(f,m,o)}s=s.sibling}}function i_(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&oc(o))}function r_(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&oc(r))}function Qi(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)cw(r,s,o,u),s=s.sibling}function cw(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Qi(r,s,o,u),f&2048&&Tc(9,s);break;case 1:Qi(r,s,o,u);break;case 3:Qi(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&oc(r)));break;case 12:if(f&2048){Qi(r,s,o,u),r=s.stateNode;try{var m=s.memoizedProps,T=m.id,I=m.onPostCommit;typeof I=="function"&&I(T,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(R){at(s,s.return,R)}}else Qi(r,s,o,u);break;case 13:Qi(r,s,o,u);break;case 23:break;case 22:m=s.stateNode,T=s.alternate,s.memoizedState!==null?m._visibility&2?Qi(r,s,o,u):Ic(r,s):m._visibility&2?Qi(r,s,o,u):(m._visibility|=2,ll(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&i_(T,s);break;case 24:Qi(r,s,o,u),f&2048&&r_(s.alternate,s);break;default:Qi(r,s,o,u)}}function ll(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,T=s,I=o,R=u,q=T.flags;switch(T.tag){case 0:case 11:case 15:ll(m,T,I,R,f),Tc(8,T);break;case 23:break;case 22:var Y=T.stateNode;T.memoizedState!==null?Y._visibility&2?ll(m,T,I,R,f):Ic(m,T):(Y._visibility|=2,ll(m,T,I,R,f)),f&&q&2048&&i_(T.alternate,T);break;case 24:ll(m,T,I,R,f),f&&q&2048&&r_(T.alternate,T);break;default:ll(m,T,I,R,f)}s=s.sibling}}function Ic(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:Ic(o,u),f&2048&&i_(u.alternate,u);break;case 24:Ic(o,u),f&2048&&r_(u.alternate,u);break;default:Ic(o,u)}s=s.sibling}}var bc=8192;function ul(r){if(r.subtreeFlags&bc)for(r=r.child;r!==null;)hw(r),r=r.sibling}function hw(r){switch(r.tag){case 26:ul(r),r.flags&bc&&r.memoizedState!==null&&oN(Ri,r.memoizedState,r.memoizedProps);break;case 5:ul(r);break;case 3:case 4:var s=Ri;Ri=Sf(r.stateNode.containerInfo),ul(r),Ri=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=bc,bc=16777216,ul(r),bc=s):ul(r));break;default:ul(r)}}function dw(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Ac(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];nn=u,pw(u,r)}dw(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)fw(r),r=r.sibling}function fw(r){switch(r.tag){case 0:case 11:case 15:Ac(r),r.flags&2048&&fs(9,r,r.return);break;case 3:Ac(r);break;case 12:Ac(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,pf(r)):Ac(r);break;default:Ac(r)}}function pf(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];nn=u,pw(u,r)}dw(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:fs(8,s,s.return),pf(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,pf(s));break;default:pf(s)}r=r.sibling}}function pw(r,s){for(;nn!==null;){var o=nn;switch(o.tag){case 0:case 11:case 15:fs(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:oc(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,nn=u;else e:for(o=r;nn!==null;){u=nn;var f=u.sibling,m=u.return;if(sw(u),u===o){nn=null;break e}if(f!==null){f.return=m,nn=f;break e}nn=m}}}var IP={getCacheForType:function(r){var s=En(Qt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},bP=typeof WeakMap=="function"?WeakMap:Map,Je=0,lt=null,Me=null,je=0,Ze=0,Xn=null,gs=!1,cl=!1,s_=!1,Mr=0,Rt=0,_s=0,ja=0,a_=0,_i=0,hl=0,Sc=null,Un=null,o_=!1,l_=0,mf=1/0,gf=null,ys=null,dn=0,vs=null,dl=null,fl=0,u_=0,c_=null,mw=null,Rc=0,h_=null;function Jn(){if((Je&2)!==0&&je!==0)return je&-je;if(Q.T!==null){var r=el;return r!==0?r:y_()}return es()}function gw(){_i===0&&(_i=(je&536870912)===0||Qe?Mu():536870912);var r=gi.current;return r!==null&&(r.flags|=32),_i}function Zn(r,s,o){(r===lt&&(Ze===2||Ze===9)||r.cancelPendingCommit!==null)&&(pl(r,0),Es(r,je,_i,!1)),pr(r,o),((Je&2)===0||r!==lt)&&(r===lt&&((Je&2)===0&&(ja|=o),Rt===4&&Es(r,je,_i,!1)),Yi(r))}function _w(r,s,o){if((Je&6)!==0)throw Error(i(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||ma(r,s),f=u?RP(r,s):p_(r,s,!0),m=u;do{if(f===0){cl&&!u&&Es(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!AP(o)){f=p_(r,s,!1),m=!1;continue}if(f===2){if(m=s,r.errorRecoveryDisabledLanes&m)var T=0;else T=r.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var I=r;f=Sc;var R=I.current.memoizedState.isDehydrated;if(R&&(pl(I,T).flags|=256),T=p_(I,T,!1),T!==2){if(s_&&!R){I.errorRecoveryDisabledLanes|=m,ja|=m,f=4;break e}m=Un,Un=f,m!==null&&(Un===null?Un=m:Un.push.apply(Un,m))}f=T}if(m=!1,f!==2)continue}}if(f===1){pl(r,0),Es(r,s,0,!0);break}e:{switch(u=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Es(u,s,_i,!gs);break e;case 2:Un=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=l_+300-ai(),10<f)){if(Es(u,s,_i,!gs),No(u,0,!0)!==0)break e;u.timeoutHandle=$w(yw.bind(null,u,o,Un,gf,o_,s,_i,ja,hl,gs,m,2,-0,0),f);break e}yw(u,o,Un,gf,o_,s,_i,ja,hl,gs,m,0,-0,0)}}break}while(!0);Yi(r)}function yw(r,s,o,u,f,m,T,I,R,q,Y,J,G,H){if(r.timeoutHandle=-1,J=s.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Vc={stylesheets:null,count:0,unsuspend:aN},hw(s),J=lN(),J!==null)){r.cancelPendingCommit=J(Aw.bind(null,r,s,m,o,u,f,T,I,R,Y,1,G,H)),Es(r,m,T,!q);return}Aw(r,s,m,o,u,f,T,I,R)}function AP(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Kn(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Es(r,s,o,u){s&=~a_,s&=~ja,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var m=31-vn(f),T=1<<m;u[m]=-1,f&=~T}o!==0&&Vi(r,o,s)}function _f(){return(Je&6)===0?(Cc(0),!1):!0}function d_(){if(Me!==null){if(Ze===0)var r=Me.return;else r=Me,Cr=La=null,Dg(r),al=null,yc=0,r=Me;for(;r!==null;)X0(r.alternate,r),r=r.return;Me=null}}function pl(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,jP(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),d_(),lt=r,Me=o=Ar(r.current,null),je=s,Ze=0,Xn=null,gs=!1,cl=ma(r,s),s_=!1,hl=_i=a_=ja=_s=Rt=0,Un=Sc=null,o_=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-vn(u),m=1<<f;s|=r[f],u&=~m}return Mr=s,Ud(),o}function vw(r,s){Ve=null,Q.H=rf,s===uc||s===Kd?(s=MT(),Ze=3):s===OT?(s=MT(),Ze=4):Ze=s===L0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Xn=s,Me===null&&(Rt=1,uf(r,di(s,r.current)))}function Ew(){var r=Q.H;return Q.H=rf,r===null?rf:r}function Tw(){var r=Q.A;return Q.A=IP,r}function f_(){Rt=4,gs||(je&4194048)!==je&&gi.current!==null||(cl=!0),(_s&134217727)===0&&(ja&134217727)===0||lt===null||Es(lt,je,_i,!1)}function p_(r,s,o){var u=Je;Je|=2;var f=Ew(),m=Tw();(lt!==r||je!==s)&&(gf=null,pl(r,s)),s=!1;var T=Rt;e:do try{if(Ze!==0&&Me!==null){var I=Me,R=Xn;switch(Ze){case 8:d_(),T=6;break e;case 3:case 2:case 9:case 6:gi.current===null&&(s=!0);var q=Ze;if(Ze=0,Xn=null,ml(r,I,R,q),o&&cl){T=0;break e}break;default:q=Ze,Ze=0,Xn=null,ml(r,I,R,q)}}SP(),T=Rt;break}catch(Y){vw(r,Y)}while(!0);return s&&r.shellSuspendCounter++,Cr=La=null,Je=u,Q.H=f,Q.A=m,Me===null&&(lt=null,je=0,Ud()),T}function SP(){for(;Me!==null;)ww(Me)}function RP(r,s){var o=Je;Je|=2;var u=Ew(),f=Tw();lt!==r||je!==s?(gf=null,mf=ai()+500,pl(r,s)):cl=ma(r,s);e:do try{if(Ze!==0&&Me!==null){s=Me;var m=Xn;t:switch(Ze){case 1:Ze=0,Xn=null,ml(r,s,m,1);break;case 2:case 9:if(VT(m)){Ze=0,Xn=null,Iw(s);break}s=function(){Ze!==2&&Ze!==9||lt!==r||(Ze=7),Yi(r)},m.then(s,s);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:VT(m)?(Ze=0,Xn=null,Iw(s)):(Ze=0,Xn=null,ml(r,s,m,7));break;case 5:var T=null;switch(Me.tag){case 26:T=Me.memoizedState;case 5:case 27:var I=Me;if(!T||rI(T)){Ze=0,Xn=null;var R=I.sibling;if(R!==null)Me=R;else{var q=I.return;q!==null?(Me=q,yf(q)):Me=null}break t}}Ze=0,Xn=null,ml(r,s,m,5);break;case 6:Ze=0,Xn=null,ml(r,s,m,6);break;case 8:d_(),Rt=6;break e;default:throw Error(i(462))}}CP();break}catch(Y){vw(r,Y)}while(!0);return Cr=La=null,Q.H=u,Q.A=f,Je=o,Me!==null?0:(lt=null,je=0,Ud(),Rt)}function CP(){for(;Me!==null&&!xu();)ww(Me)}function ww(r){var s=Y0(r.alternate,r,Mr);r.memoizedProps=r.pendingProps,s===null?yf(r):Me=s}function Iw(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=j0(o,s,s.pendingProps,s.type,void 0,je);break;case 11:s=j0(o,s,s.pendingProps,s.type.render,s.ref,je);break;case 5:Dg(s);default:X0(o,s),s=Me=bT(s,Mr),s=Y0(o,s,Mr)}r.memoizedProps=r.pendingProps,s===null?yf(r):Me=s}function ml(r,s,o,u){Cr=La=null,Dg(s),al=null,yc=0;var f=s.return;try{if(_P(r,f,s,o,je)){Rt=1,uf(r,di(o,r.current)),Me=null;return}}catch(m){if(f!==null)throw Me=f,m;Rt=1,uf(r,di(o,r.current)),Me=null;return}s.flags&32768?(Qe||u===1?r=!0:cl||(je&536870912)!==0?r=!1:(gs=r=!0,(u===2||u===9||u===3||u===6)&&(u=gi.current,u!==null&&u.tag===13&&(u.flags|=16384))),bw(s,r)):yf(s)}function yf(r){var s=r;do{if((s.flags&32768)!==0){bw(s,gs);return}r=s.return;var o=vP(s.alternate,s,Mr);if(o!==null){Me=o;return}if(s=s.sibling,s!==null){Me=s;return}Me=s=r}while(s!==null);Rt===0&&(Rt=5)}function bw(r,s){do{var o=EP(r.alternate,r);if(o!==null){o.flags&=32767,Me=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Me=r;return}Me=r=o}while(r!==null);Rt=6,Me=null}function Aw(r,s,o,u,f,m,T,I,R){r.cancelPendingCommit=null;do vf();while(dn!==0);if((Je&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=rg,Uu(r,o,m,T,I,R),r===lt&&(Me=lt=null,je=0),dl=s,vs=r,fl=o,u_=m,c_=f,mw=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,xP(ha,function(){return Pw(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=Q.T,Q.T=null,f=ue.p,ue.p=2,T=Je,Je|=4;try{TP(r,s,o)}finally{Je=T,ue.p=f,Q.T=u}}dn=1,Sw(),Rw(),Cw()}}function Sw(){if(dn===1){dn=0;var r=vs,s=dl,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=Q.T,Q.T=null;var u=ue.p;ue.p=2;var f=Je;Je|=4;try{lw(s,r);var m=S_,T=pT(r.containerInfo),I=m.focusedElem,R=m.selectionRange;if(T!==I&&I&&I.ownerDocument&&fT(I.ownerDocument.documentElement,I)){if(R!==null&&Zm(I)){var q=R.start,Y=R.end;if(Y===void 0&&(Y=q),"selectionStart"in I)I.selectionStart=q,I.selectionEnd=Math.min(Y,I.value.length);else{var J=I.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var H=G.getSelection(),Ce=I.textContent.length,be=Math.min(R.start,Ce),st=R.end===void 0?be:Math.min(R.end,Ce);!H.extend&&be>st&&(T=st,st=be,be=T);var k=dT(I,be),x=dT(I,st);if(k&&x&&(H.rangeCount!==1||H.anchorNode!==k.node||H.anchorOffset!==k.offset||H.focusNode!==x.node||H.focusOffset!==x.offset)){var F=J.createRange();F.setStart(k.node,k.offset),H.removeAllRanges(),be>st?(H.addRange(F),H.extend(x.node,x.offset)):(F.setEnd(x.node,x.offset),H.addRange(F))}}}}for(J=[],H=I;H=H.parentNode;)H.nodeType===1&&J.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof I.focus=="function"&&I.focus(),I=0;I<J.length;I++){var W=J[I];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Nf=!!A_,S_=A_=null}finally{Je=f,ue.p=u,Q.T=o}}r.current=s,dn=2}}function Rw(){if(dn===2){dn=0;var r=vs,s=dl,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=Q.T,Q.T=null;var u=ue.p;ue.p=2;var f=Je;Je|=4;try{rw(r,s.alternate,s)}finally{Je=f,ue.p=u,Q.T=o}}dn=3}}function Cw(){if(dn===4||dn===3){dn=0,fd();var r=vs,s=dl,o=fl,u=mw;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?dn=5:(dn=0,dl=vs=null,Dw(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(ys=null),xo(o),s=s.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(At,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=Q.T,f=ue.p,ue.p=2,Q.T=null;try{for(var m=r.onRecoverableError,T=0;T<u.length;T++){var I=u[T];m(I.value,{componentStack:I.stack})}}finally{Q.T=s,ue.p=f}}(fl&3)!==0&&vf(),Yi(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===h_?Rc++:(Rc=0,h_=r):Rc=0,Cc(0)}}function Dw(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,oc(s)))}function vf(r){return Sw(),Rw(),Cw(),Pw()}function Pw(){if(dn!==5)return!1;var r=vs,s=u_;u_=0;var o=xo(fl),u=Q.T,f=ue.p;try{ue.p=32>o?32:o,Q.T=null,o=c_,c_=null;var m=vs,T=fl;if(dn=0,dl=vs=null,fl=0,(Je&6)!==0)throw Error(i(331));var I=Je;if(Je|=4,fw(m.current),cw(m,m.current,T,o),Je=I,Cc(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(At,m)}catch{}return!0}finally{ue.p=f,Q.T=u,Dw(r,s)}}function Nw(r,s,o){s=di(o,s),s=jg(r.stateNode,s,2),r=us(r,s,2),r!==null&&(pr(r,2),Yi(r))}function at(r,s,o){if(r.tag===3)Nw(r,r,o);else for(;s!==null;){if(s.tag===3){Nw(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ys===null||!ys.has(u))){r=di(o,r),o=k0(2),u=us(s,o,2),u!==null&&(M0(o,u,s,r),pr(u,2),Yi(u));break}}s=s.return}}function m_(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new bP;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(s_=!0,f.add(o),r=DP.bind(null,r,s,o),s.then(r,r))}function DP(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,lt===r&&(je&o)===o&&(Rt===4||Rt===3&&(je&62914560)===je&&300>ai()-l_?(Je&2)===0&&pl(r,0):a_|=o,hl===je&&(hl=0)),Yi(r)}function xw(r,s){s===0&&(s=Lu()),r=Wo(r,s),r!==null&&(pr(r,s),Yi(r))}function PP(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),xw(r,o)}function NP(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),xw(r,o)}function xP(r,s){return ua(r,s)}var Ef=null,gl=null,g_=!1,Tf=!1,__=!1,Ga=0;function Yi(r){r!==gl&&r.next===null&&(gl===null?Ef=gl=r:gl=gl.next=r),Tf=!0,g_||(g_=!0,VP())}function Cc(r,s){if(!__&&Tf){__=!0;do for(var o=!1,u=Ef;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var T=u.suspendedLanes,I=u.pingedLanes;m=(1<<31-vn(42|r)+1)-1,m&=f&~(T&~I),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Mw(u,m))}else m=je,m=No(u,u===lt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||ma(u,m)||(o=!0,Mw(u,m));u=u.next}while(o);__=!1}}function OP(){Ow()}function Ow(){Tf=g_=!1;var r=0;Ga!==0&&(qP()&&(r=Ga),Ga=0);for(var s=ai(),o=null,u=Ef;u!==null;){var f=u.next,m=Vw(u,s);m===0?(u.next=null,o===null?Ef=f:o.next=f,f===null&&(gl=o)):(o=u,(r!==0||(m&3)!==0)&&(Tf=!0)),u=f}Cc(r)}function Vw(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var T=31-vn(m),I=1<<T,R=f[T];R===-1?((I&o)===0||(I&u)!==0)&&(f[T]=ku(I,s)):R<=s&&(r.expiredLanes|=I),m&=~I}if(s=lt,o=je,o=No(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(Ze===2||Ze===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&ca(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||ma(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&ca(u),xo(o)){case 2:case 8:o=Do;break;case 32:o=ha;break;case 268435456:o=Po;break;default:o=ha}return u=kw.bind(null,r),o=ua(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&ca(u),r.callbackPriority=2,r.callbackNode=null,2}function kw(r,s){if(dn!==0&&dn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(vf()&&r.callbackNode!==o)return null;var u=je;return u=No(r,r===lt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(_w(r,u,s),Vw(r,ai()),r.callbackNode!=null&&r.callbackNode===o?kw.bind(null,r):null)}function Mw(r,s){if(vf())return null;_w(r,s,!0)}function VP(){GP(function(){(Je&6)!==0?ua(Ou,OP):Ow()})}function y_(){return Ga===0&&(Ga=Mu()),Ga}function Lw(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Uo(""+r)}function Uw(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function kP(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var m=Lw((f[Lt]||null).action),T=u.submitter;T&&(s=(s=T[Lt]||null)?Lw(s.formAction):T.getAttribute("formAction"),s!==null&&(m=s,T=null));var I=new Bo("action","action",null,u,f);r.push({event:I,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ga!==0){var R=T?Uw(f,T):new FormData(f);Ug(o,{pending:!0,data:R,method:f.method,action:m},null,R)}}else typeof m=="function"&&(I.preventDefault(),R=T?Uw(f,T):new FormData(f),Ug(o,{pending:!0,data:R,method:f.method,action:m},m,R))},currentTarget:f}]})}}for(var v_=0;v_<ig.length;v_++){var E_=ig[v_],MP=E_.toLowerCase(),LP=E_[0].toUpperCase()+E_.slice(1);Si(MP,"on"+LP)}Si(_T,"onAnimationEnd"),Si(yT,"onAnimationIteration"),Si(vT,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(eP,"onTransitionRun"),Si(tP,"onTransitionStart"),Si(nP,"onTransitionCancel"),Si(ET,"onTransitionEnd"),gr("onMouseEnter",["mouseout","mouseover"]),gr("onMouseLeave",["mouseout","mouseover"]),gr("onPointerEnter",["pointerout","pointerover"]),gr("onPointerLeave",["pointerout","pointerover"]),bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bi("onBeforeInput",["compositionend","keypress","textInput","paste"]),bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dc));function Bw(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var T=u.length-1;0<=T;T--){var I=u[T],R=I.instance,q=I.currentTarget;if(I=I.listener,R!==m&&f.isPropagationStopped())break e;m=I,f.currentTarget=q;try{m(f)}catch(Y){lf(Y)}f.currentTarget=null,m=R}else for(T=0;T<u.length;T++){if(I=u[T],R=I.instance,q=I.currentTarget,I=I.listener,R!==m&&f.isPropagationStopped())break e;m=I,f.currentTarget=q;try{m(f)}catch(Y){lf(Y)}f.currentTarget=null,m=R}}}}function Le(r,s){var o=s[zu];o===void 0&&(o=s[zu]=new Set);var u=r+"__bubble";o.has(u)||(zw(s,r,2,!1),o.add(u))}function T_(r,s,o){var u=0;s&&(u|=4),zw(o,r,u,s)}var wf="_reactListening"+Math.random().toString(36).slice(2);function w_(r){if(!r[wf]){r[wf]=!0,Fu.forEach(function(o){o!=="selectionchange"&&(UP.has(o)||T_(o,!1,r),T_(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[wf]||(s[wf]=!0,T_("selectionchange",!1,s))}}function zw(r,s,o,u){switch(cI(s)){case 2:var f=hN;break;case 8:f=dN;break;default:f=M_}o=f.bind(null,s,o,r),f=void 0,!ci||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function I_(r,s,o,u,f){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var I=u.stateNode.containerInfo;if(I===f)break;if(T===4)for(T=u.return;T!==null;){var R=T.tag;if((R===3||R===4)&&T.stateNode.containerInfo===f)return;T=T.return}for(;I!==null;){if(T=mr(I),T===null)return;if(R=T.tag,R===5||R===6||R===26||R===27){u=m=T;continue e}I=I.parentNode}}u=u.return}Id(function(){var q=m,Y=ui(o),J=[];e:{var G=TT.get(r);if(G!==void 0){var H=Bo,Ce=r;switch(r){case"keypress":if(zi(o)===0)break e;case"keydown":case"keyup":H=Ho;break;case"focusin":Ce="focus",H=qo;break;case"focusout":Ce="blur",H=qo;break;case"beforeblur":case"afterblur":H=qo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=hi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Nd;break;case _T:case yT:case vT:H=jo;break;case ET:H=Od;break;case"scroll":case"scrollend":H=bd;break;case"wheel":H=$o;break;case"copy":case"cut":case"paste":H=Go;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Zu;break;case"toggle":case"beforetoggle":H=kd}var be=(s&4)!==0,st=!be&&(r==="scroll"||r==="scrollend"),k=be?G!==null?G+"Capture":null:G;be=[];for(var x=q,F;x!==null;){var W=x;if(F=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||F===null||k===null||(W=Ia(x,k),W!=null&&be.push(Pc(x,W,F))),st)break;x=x.return}0<be.length&&(G=new H(G,Ce,null,o,Y),J.push({event:G,listeners:be}))}}if((s&7)===0){e:{if(G=r==="mouseover"||r==="pointerover",H=r==="mouseout"||r==="pointerout",G&&o!==vr&&(Ce=o.relatedTarget||o.fromElement)&&(mr(Ce)||Ce[oi]))break e;if((H||G)&&(G=Y.window===Y?Y:(G=Y.ownerDocument)?G.defaultView||G.parentWindow:window,H?(Ce=o.relatedTarget||o.toElement,H=q,Ce=Ce?mr(Ce):null,Ce!==null&&(st=l(Ce),be=Ce.tag,Ce!==st||be!==5&&be!==27&&be!==6)&&(Ce=null)):(H=null,Ce=q),H!==Ce)){if(be=hi,W="onMouseLeave",k="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(be=Zu,W="onPointerLeave",k="onPointerEnter",x="pointer"),st=H==null?G:Mi(H),F=Ce==null?G:Mi(Ce),G=new be(W,x+"leave",H,o,Y),G.target=st,G.relatedTarget=F,W=null,mr(Y)===q&&(be=new be(k,x+"enter",Ce,o,Y),be.target=F,be.relatedTarget=st,W=be),st=W,H&&Ce)t:{for(be=H,k=Ce,x=0,F=be;F;F=_l(F))x++;for(F=0,W=k;W;W=_l(W))F++;for(;0<x-F;)be=_l(be),x--;for(;0<F-x;)k=_l(k),F--;for(;x--;){if(be===k||k!==null&&be===k.alternate)break t;be=_l(be),k=_l(k)}be=null}else be=null;H!==null&&Fw(J,G,H,be,!1),Ce!==null&&st!==null&&Fw(J,st,Ce,be,!0)}}e:{if(G=q?Mi(q):window,H=G.nodeName&&G.nodeName.toLowerCase(),H==="select"||H==="input"&&G.type==="file")var me=aT;else if(Kt(G))if(oT)me=XD;else{me=YD;var ke=QD}else H=G.nodeName,!H||H.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?q&&$u(q.elementType)&&(me=aT):me=WD;if(me&&(me=me(r,q))){br(J,me,o,Y);break e}ke&&ke(r,G,q),r==="focusout"&&q&&G.type==="number"&&q.memoizedProps.value!=null&&rs(G,"number",G.value)}switch(ke=q?Mi(q):window,r){case"focusin":(Kt(ke)||ke.contentEditable==="true")&&(Ko=ke,eg=q,nc=null);break;case"focusout":nc=eg=Ko=null;break;case"mousedown":tg=!0;break;case"contextmenu":case"mouseup":case"dragend":tg=!1,mT(J,o,Y);break;case"selectionchange":if(ZD)break;case"keydown":case"keyup":mT(J,o,Y)}var Ee;if(ji)e:{switch(r){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Fe?K(r,o)&&(Se="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Se="onCompositionStart");Se&&(E&&o.locale!=="ko"&&(Fe||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Fe&&(Ee=Qu()):(Bi=Y,ss="value"in Bi?Bi.value:Bi.textContent,Fe=!0)),ke=If(q,Se),0<ke.length&&(Se=new Xu(Se,r,null,o,Y),J.push({event:Se,listeners:ke}),Ee?Se.data=Ee:(Ee=le(o),Ee!==null&&(Se.data=Ee)))),(Ee=_?$t(r,o):qe(r,o))&&(Se=If(q,"onBeforeInput"),0<Se.length&&(ke=new Xu("onBeforeInput","beforeinput",null,o,Y),J.push({event:ke,listeners:Se}),ke.data=Ee)),kP(J,r,q,o,Y)}Bw(J,s)})}function Pc(r,s,o){return{instance:r,listener:s,currentTarget:o}}function If(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ia(r,o),f!=null&&u.unshift(Pc(r,f,m)),f=Ia(r,s),f!=null&&u.push(Pc(r,f,m))),r.tag===3)return u;r=r.return}return[]}function _l(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function Fw(r,s,o,u,f){for(var m=s._reactName,T=[];o!==null&&o!==u;){var I=o,R=I.alternate,q=I.stateNode;if(I=I.tag,R!==null&&R===u)break;I!==5&&I!==26&&I!==27||q===null||(R=q,f?(q=Ia(o,m),q!=null&&T.unshift(Pc(o,q,R))):f||(q=Ia(o,m),q!=null&&T.push(Pc(o,q,R)))),o=o.return}T.length!==0&&r.push({event:s,listeners:T})}var BP=/\r\n?/g,zP=/\u0000|\uFFFD/g;function qw(r){return(typeof r=="string"?r:""+r).replace(BP,`
`).replace(zP,"")}function jw(r,s){return s=qw(s),qw(r)===s}function bf(){}function rt(r,s,o,u,f,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||li(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&li(r,""+u);break;case"className":Li(r,"class",u);break;case"tabIndex":Li(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Li(r,o,u);break;case"style":Hu(r,u,m);break;case"data":if(s!=="object"){Li(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Uo(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&rt(r,s,"name",f.name,f,null),rt(r,s,"formEncType",f.formEncType,f,null),rt(r,s,"formMethod",f.formMethod,f,null),rt(r,s,"formTarget",f.formTarget,f,null)):(rt(r,s,"encType",f.encType,f,null),rt(r,s,"method",f.method,f,null),rt(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Uo(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=bf);break;case"onScroll":u!=null&&Le("scroll",r);break;case"onScrollEnd":u!=null&&Le("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=Uo(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Le("beforetoggle",r),Le("toggle",r),is(r,"popover",u);break;case"xlinkActuate":un(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":un(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":un(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":un(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":un(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":un(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":un(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":un(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":un(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":is(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Km.get(o)||o,is(r,o,u))}}function b_(r,s,o,u,f,m){switch(o){case"style":Hu(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?li(r,u):(typeof u=="number"||typeof u=="bigint")&&li(r,""+u);break;case"onScroll":u!=null&&Le("scroll",r);break;case"onScrollEnd":u!=null&&Le("scrollend",r);break;case"onClick":u!=null&&(r.onclick=bf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=r[Lt]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):is(r,o,u)}}}function fn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",r),Le("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var T=o[m];if(T!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:rt(r,s,m,T,o,null)}}f&&rt(r,s,"srcSet",o.srcSet,o,null),u&&rt(r,s,"src",o.src,o,null);return;case"input":Le("invalid",r);var I=m=T=f=null,R=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var Y=o[u];if(Y!=null)switch(u){case"name":f=Y;break;case"type":T=Y;break;case"checked":R=Y;break;case"defaultChecked":q=Y;break;case"value":m=Y;break;case"defaultValue":I=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,s));break;default:rt(r,s,u,Y,o,null)}}Ea(r,m,I,R,q,T,f,!1),Lo(r);return;case"select":Le("invalid",r),u=T=m=null;for(f in o)if(o.hasOwnProperty(f)&&(I=o[f],I!=null))switch(f){case"value":m=I;break;case"defaultValue":T=I;break;case"multiple":u=I;default:rt(r,s,f,I,o,null)}s=m,o=T,r.multiple=!!u,s!=null?yr(r,!!u,s,!1):o!=null&&yr(r,!!u,o,!0);return;case"textarea":Le("invalid",r),m=f=u=null;for(T in o)if(o.hasOwnProperty(T)&&(I=o[T],I!=null))switch(T){case"value":u=I;break;case"defaultValue":f=I;break;case"children":m=I;break;case"dangerouslySetInnerHTML":if(I!=null)throw Error(i(91));break;default:rt(r,s,T,I,o,null)}Ta(r,u,f,m),Lo(r);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:rt(r,s,R,u,o,null)}return;case"dialog":Le("beforetoggle",r),Le("toggle",r),Le("cancel",r),Le("close",r);break;case"iframe":case"object":Le("load",r);break;case"video":case"audio":for(u=0;u<Dc.length;u++)Le(Dc[u],r);break;case"image":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"embed":case"source":case"link":Le("error",r),Le("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:rt(r,s,q,u,o,null)}return;default:if($u(s)){for(Y in o)o.hasOwnProperty(Y)&&(u=o[Y],u!==void 0&&b_(r,s,Y,u,o,void 0));return}}for(I in o)o.hasOwnProperty(I)&&(u=o[I],u!=null&&rt(r,s,I,u,o,null))}function FP(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,T=null,I=null,R=null,q=null,Y=null;for(H in o){var J=o[H];if(o.hasOwnProperty(H)&&J!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":R=J;default:u.hasOwnProperty(H)||rt(r,s,H,null,u,J)}}for(var G in u){var H=u[G];if(J=o[G],u.hasOwnProperty(G)&&(H!=null||J!=null))switch(G){case"type":m=H;break;case"name":f=H;break;case"checked":q=H;break;case"defaultChecked":Y=H;break;case"value":T=H;break;case"defaultValue":I=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,s));break;default:H!==J&&rt(r,s,G,H,u,J)}}$n(r,T,I,R,q,Y,m,f);return;case"select":H=T=I=G=null;for(m in o)if(R=o[m],o.hasOwnProperty(m)&&R!=null)switch(m){case"value":break;case"multiple":H=R;default:u.hasOwnProperty(m)||rt(r,s,m,null,u,R)}for(f in u)if(m=u[f],R=o[f],u.hasOwnProperty(f)&&(m!=null||R!=null))switch(f){case"value":G=m;break;case"defaultValue":I=m;break;case"multiple":T=m;default:m!==R&&rt(r,s,f,m,u,R)}s=I,o=T,u=H,G!=null?yr(r,!!o,G,!1):!!u!=!!o&&(s!=null?yr(r,!!o,s,!0):yr(r,!!o,o?[]:"",!1));return;case"textarea":H=G=null;for(I in o)if(f=o[I],o.hasOwnProperty(I)&&f!=null&&!u.hasOwnProperty(I))switch(I){case"value":break;case"children":break;default:rt(r,s,I,null,u,f)}for(T in u)if(f=u[T],m=o[T],u.hasOwnProperty(T)&&(f!=null||m!=null))switch(T){case"value":G=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&rt(r,s,T,f,u,m)}nt(r,G,H);return;case"option":for(var Ce in o)if(G=o[Ce],o.hasOwnProperty(Ce)&&G!=null&&!u.hasOwnProperty(Ce))switch(Ce){case"selected":r.selected=!1;break;default:rt(r,s,Ce,null,u,G)}for(R in u)if(G=u[R],H=o[R],u.hasOwnProperty(R)&&G!==H&&(G!=null||H!=null))switch(R){case"selected":r.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:rt(r,s,R,G,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in o)G=o[be],o.hasOwnProperty(be)&&G!=null&&!u.hasOwnProperty(be)&&rt(r,s,be,null,u,G);for(q in u)if(G=u[q],H=o[q],u.hasOwnProperty(q)&&G!==H&&(G!=null||H!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(i(137,s));break;default:rt(r,s,q,G,u,H)}return;default:if($u(s)){for(var st in o)G=o[st],o.hasOwnProperty(st)&&G!==void 0&&!u.hasOwnProperty(st)&&b_(r,s,st,void 0,u,G);for(Y in u)G=u[Y],H=o[Y],!u.hasOwnProperty(Y)||G===H||G===void 0&&H===void 0||b_(r,s,Y,G,u,H);return}}for(var k in o)G=o[k],o.hasOwnProperty(k)&&G!=null&&!u.hasOwnProperty(k)&&rt(r,s,k,null,u,G);for(J in u)G=u[J],H=o[J],!u.hasOwnProperty(J)||G===H||G==null&&H==null||rt(r,s,J,G,u,H)}var A_=null,S_=null;function Af(r){return r.nodeType===9?r:r.ownerDocument}function Gw(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hw(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function R_(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var C_=null;function qP(){var r=window.event;return r&&r.type==="popstate"?r===C_?!1:(C_=r,!0):(C_=null,!1)}var $w=typeof setTimeout=="function"?setTimeout:void 0,jP=typeof clearTimeout=="function"?clearTimeout:void 0,Kw=typeof Promise=="function"?Promise:void 0,GP=typeof queueMicrotask=="function"?queueMicrotask:typeof Kw<"u"?function(r){return Kw.resolve(null).then(r).catch(HP)}:$w;function HP(r){setTimeout(function(){throw r})}function Ts(r){return r==="head"}function Qw(r,s){var o=s,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var T=r.ownerDocument;if(o&1&&Nc(T.documentElement),o&2&&Nc(T.body),o&4)for(o=T.head,Nc(o),T=o.firstChild;T;){var I=T.nextSibling,R=T.nodeName;T[ga]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=I}}if(f===0){r.removeChild(m),Bc(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Bc(s)}function D_(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":D_(o),ns(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function $P(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[ga])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Ci(r.nextSibling),r===null)break}return null}function KP(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Ci(r.nextSibling),r===null))return null;return r}function P_(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function QP(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Ci(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var N_=null;function Yw(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function Ww(r,s,o){switch(s=Af(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Nc(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);ns(r)}var yi=new Map,Xw=new Set;function Sf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Lr=ue.d;ue.d={f:YP,r:WP,D:XP,C:JP,L:ZP,m:eN,X:nN,S:tN,M:iN};function YP(){var r=Lr.f(),s=_f();return r||s}function WP(r){var s=ki(r);s!==null&&s.tag===5&&s.type==="form"?_0(s):Lr.r(r)}var yl=typeof document>"u"?null:document;function Jw(r,s,o){var u=yl;if(u&&typeof s=="string"&&s){var f=Ut(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),Xw.has(f)||(Xw.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),fn(s,"link",r),Nt(s),u.head.appendChild(s)))}}function XP(r){Lr.D(r),Jw("dns-prefetch",r,null)}function JP(r,s){Lr.C(r,s),Jw("preconnect",r,s)}function ZP(r,s,o){Lr.L(r,s,o);var u=yl;if(u&&r&&s){var f='link[rel="preload"][as="'+Ut(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ut(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ut(o.imageSizes)+'"]')):f+='[href="'+Ut(r)+'"]';var m=f;switch(s){case"style":m=vl(r);break;case"script":m=El(r)}yi.has(m)||(r=y({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),yi.set(m,r),u.querySelector(f)!==null||s==="style"&&u.querySelector(xc(m))||s==="script"&&u.querySelector(Oc(m))||(s=u.createElement("link"),fn(s,"link",r),Nt(s),u.head.appendChild(s)))}}function eN(r,s){Lr.m(r,s);var o=yl;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ut(u)+'"][href="'+Ut(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=El(r)}if(!yi.has(m)&&(r=y({rel:"modulepreload",href:r},s),yi.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Oc(m)))return}u=o.createElement("link"),fn(u,"link",r),Nt(u),o.head.appendChild(u)}}}function tN(r,s,o){Lr.S(r,s,o);var u=yl;if(u&&r){var f=Sn(u).hoistableStyles,m=vl(r);s=s||"default";var T=f.get(m);if(!T){var I={loading:0,preload:null};if(T=u.querySelector(xc(m)))I.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},o),(o=yi.get(m))&&x_(r,o);var R=T=u.createElement("link");Nt(R),fn(R,"link",r),R._p=new Promise(function(q,Y){R.onload=q,R.onerror=Y}),R.addEventListener("load",function(){I.loading|=1}),R.addEventListener("error",function(){I.loading|=2}),I.loading|=4,Rf(T,s,u)}T={type:"stylesheet",instance:T,count:1,state:I},f.set(m,T)}}}function nN(r,s){Lr.X(r,s);var o=yl;if(o&&r){var u=Sn(o).hoistableScripts,f=El(r),m=u.get(f);m||(m=o.querySelector(Oc(f)),m||(r=y({src:r,async:!0},s),(s=yi.get(f))&&O_(r,s),m=o.createElement("script"),Nt(m),fn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function iN(r,s){Lr.M(r,s);var o=yl;if(o&&r){var u=Sn(o).hoistableScripts,f=El(r),m=u.get(f);m||(m=o.querySelector(Oc(f)),m||(r=y({src:r,async:!0,type:"module"},s),(s=yi.get(f))&&O_(r,s),m=o.createElement("script"),Nt(m),fn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function Zw(r,s,o,u){var f=(f=we.current)?Sf(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=vl(o.href),o=Sn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=vl(o.href);var m=Sn(f).hoistableStyles,T=m.get(r);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,T),(m=f.querySelector(xc(r)))&&!m._p&&(T.instance=m,T.state.loading=5),yi.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},yi.set(r,o),m||rN(f,r,o,T.state))),s&&u===null)throw Error(i(528,""));return T}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=El(o),o=Sn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function vl(r){return'href="'+Ut(r)+'"'}function xc(r){return'link[rel="stylesheet"]['+r+"]"}function eI(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function rN(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),fn(s,"link",o),Nt(s),r.head.appendChild(s))}function El(r){return'[src="'+Ut(r)+'"]'}function Oc(r){return"script[async]"+r}function tI(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Ut(o.href)+'"]');if(u)return s.instance=u,Nt(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),Nt(u),fn(u,"style",f),Rf(u,o.precedence,r),s.instance=u;case"stylesheet":f=vl(o.href);var m=r.querySelector(xc(f));if(m)return s.state.loading|=4,s.instance=m,Nt(m),m;u=eI(o),(f=yi.get(f))&&x_(u,f),m=(r.ownerDocument||r).createElement("link"),Nt(m);var T=m;return T._p=new Promise(function(I,R){T.onload=I,T.onerror=R}),fn(m,"link",u),s.state.loading|=4,Rf(m,o.precedence,r),s.instance=m;case"script":return m=El(o.src),(f=r.querySelector(Oc(m)))?(s.instance=f,Nt(f),f):(u=o,(f=yi.get(m))&&(u=y({},o),O_(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),Nt(f),fn(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,Rf(u,o.precedence,r));return s.instance}function Rf(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,T=0;T<u.length;T++){var I=u[T];if(I.dataset.precedence===s)m=I;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function x_(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function O_(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Cf=null;function nI(r,s,o){if(Cf===null){var u=new Map,f=Cf=new Map;f.set(o,u)}else f=Cf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[ga]||m[Ht]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(s)||"";T=r+T;var I=u.get(T);I?I.push(m):u.set(T,[m])}}return u}function iI(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function sN(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function rI(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Vc=null;function aN(){}function oN(r,s,o){if(Vc===null)throw Error(i(475));var u=Vc;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=vl(o.href),m=r.querySelector(xc(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=Df.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=m,Nt(m);return}m=r.ownerDocument||r,o=eI(o),(f=yi.get(f))&&x_(o,f),m=m.createElement("link"),Nt(m);var T=m;T._p=new Promise(function(I,R){T.onload=I,T.onerror=R}),fn(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=Df.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function lN(){if(Vc===null)throw Error(i(475));var r=Vc;return r.stylesheets&&r.count===0&&V_(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&V_(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function Df(){if(this.count--,this.count===0){if(this.stylesheets)V_(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Pf=null;function V_(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Pf=new Map,s.forEach(uN,r),Pf=null,Df.call(r))}function uN(r,s){if(!(s.state.loading&4)){var o=Pf.get(r);if(o)var u=o.get(null);else{o=new Map,Pf.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var T=f[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),u=T)}u&&o.set(null,u)}f=s.instance,T=f.getAttribute("data-precedence"),m=o.get(T)||u,m===u&&o.set(null,f),o.set(T,f),this.count++,u=Df.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var kc={$$typeof:X,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function cN(r,s,o,u,f,m,T,I){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fr(0),this.hiddenUpdates=fr(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function sI(r,s,o,u,f,m,T,I,R,q,Y,J){return r=new cN(r,s,o,T,I,R,q,J),s=1,m===!0&&(s|=24),m=Qn(3,null,null,s),r.current=m,m.stateNode=r,s=mg(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},vg(m),r}function aI(r){return r?(r=Xo,r):Xo}function oI(r,s,o,u,f,m){f=aI(f),u.context===null?u.context=f:u.pendingContext=f,u=ls(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=us(r,u,s),o!==null&&(Zn(o,r,s),hc(o,r,s))}function lI(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function k_(r,s){lI(r,s),(r=r.alternate)&&lI(r,s)}function uI(r){if(r.tag===13){var s=Wo(r,67108864);s!==null&&Zn(s,r,67108864),k_(r,67108864)}}var Nf=!0;function hN(r,s,o,u){var f=Q.T;Q.T=null;var m=ue.p;try{ue.p=2,M_(r,s,o,u)}finally{ue.p=m,Q.T=f}}function dN(r,s,o,u){var f=Q.T;Q.T=null;var m=ue.p;try{ue.p=8,M_(r,s,o,u)}finally{ue.p=m,Q.T=f}}function M_(r,s,o,u){if(Nf){var f=L_(u);if(f===null)I_(r,s,u,xf,o),hI(r,u);else if(pN(f,r,s,o,u))u.stopPropagation();else if(hI(r,u),s&4&&-1<fN.indexOf(r)){for(;f!==null;){var m=ki(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Ii(m.pendingLanes);if(T!==0){var I=m;for(I.pendingLanes|=2,I.entangledLanes|=2;T;){var R=1<<31-vn(T);I.entanglements[1]|=R,T&=~R}Yi(m),(Je&6)===0&&(mf=ai()+500,Cc(0))}}break;case 13:I=Wo(m,2),I!==null&&Zn(I,m,2),_f(),k_(m,2)}if(m=L_(u),m===null&&I_(r,s,u,xf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else I_(r,s,u,null,o)}}function L_(r){return r=ui(r),U_(r)}var xf=null;function U_(r){if(xf=null,r=mr(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return xf=r,null}function cI(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fm()){case Ou:return 2;case Do:return 8;case ha:case qm:return 32;case Po:return 268435456;default:return 32}default:return 32}}var B_=!1,ws=null,Is=null,bs=null,Mc=new Map,Lc=new Map,As=[],fN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hI(r,s){switch(r){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":Is=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":Mc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lc.delete(s.pointerId)}}function Uc(r,s,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},s!==null&&(s=ki(s),s!==null&&uI(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function pN(r,s,o,u,f){switch(s){case"focusin":return ws=Uc(ws,r,s,o,u,f),!0;case"dragenter":return Is=Uc(Is,r,s,o,u,f),!0;case"mouseover":return bs=Uc(bs,r,s,o,u,f),!0;case"pointerover":var m=f.pointerId;return Mc.set(m,Uc(Mc.get(m)||null,r,s,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Lc.set(m,Uc(Lc.get(m)||null,r,s,o,u,f)),!0}return!1}function dI(r){var s=mr(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,gd(r.priority,function(){if(o.tag===13){var u=Jn();u=Zr(u);var f=Wo(o,u);f!==null&&Zn(f,o,u),k_(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Of(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=L_(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);vr=u,o.target.dispatchEvent(u),vr=null}else return s=ki(o),s!==null&&uI(s),r.blockedOn=o,!1;s.shift()}return!0}function fI(r,s,o){Of(r)&&o.delete(s)}function mN(){B_=!1,ws!==null&&Of(ws)&&(ws=null),Is!==null&&Of(Is)&&(Is=null),bs!==null&&Of(bs)&&(bs=null),Mc.forEach(fI),Lc.forEach(fI)}function Vf(r,s){r.blockedOn===s&&(r.blockedOn=null,B_||(B_=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,mN)))}var kf=null;function pI(r){kf!==r&&(kf=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){kf===r&&(kf=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if(U_(u||o)===null)continue;break}var m=ki(o);m!==null&&(r.splice(s,3),s-=3,Ug(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Bc(r){function s(R){return Vf(R,r)}ws!==null&&Vf(ws,r),Is!==null&&Vf(Is,r),bs!==null&&Vf(bs,r),Mc.forEach(s),Lc.forEach(s);for(var o=0;o<As.length;o++){var u=As[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<As.length&&(o=As[0],o.blockedOn===null);)dI(o),o.blockedOn===null&&As.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],T=f[Lt]||null;if(typeof m=="function")T||pI(o);else if(T){var I=null;if(m&&m.hasAttribute("formAction")){if(f=m,T=m[Lt]||null)I=T.formAction;else if(U_(f)!==null)continue}else I=T.action;typeof I=="function"?o[u+1]=I:(o.splice(u,3),u-=3),pI(o)}}}function z_(r){this._internalRoot=r}Mf.prototype.render=z_.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Jn();oI(o,u,r,s,null,null)},Mf.prototype.unmount=z_.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;oI(r.current,2,null,r,null,null),_f(),s[oi]=null}};function Mf(r){this._internalRoot=r}Mf.prototype.unstable_scheduleHydration=function(r){if(r){var s=es();r={blockedOn:null,target:r,priority:s};for(var o=0;o<As.length&&s!==0&&s<As[o].priority;o++);As.splice(o,0,r),o===0&&dI(r)}};var mI=e.version;if(mI!=="19.1.0")throw Error(i(527,mI,"19.1.0"));ue.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var gN={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lf.isDisabled&&Lf.supportsFiber)try{At=Lf.inject(gN),Xe=Lf}catch{}}return Fc.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=N0,m=x0,T=O0,I=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks)),s=sI(r,1,!1,null,null,o,u,f,m,T,I,null),r[oi]=s.current,w_(r),new z_(s)},Fc.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",m=N0,T=x0,I=O0,R=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(I=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),s=sI(r,1,!0,s,o??null,u,f,m,T,I,R,q),s.context=aI(null),o=s.current,u=Jn(),u=Zr(u),f=ls(u),f.callback=null,us(o,f,u),o=u,s.current.lanes=o,pr(s,o),Yi(s),r[oi]=s.current,w_(r),new Mf(s)},Fc.version="19.1.0",Fc}var AI;function CN(){if(AI)return j_.exports;AI=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),j_.exports=RN(),j_.exports}var DN=CN();sS();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fp(){return fp=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},fp.apply(this,arguments)}var Vs;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Vs||(Vs={}));const SI="popstate";function PN(n){n===void 0&&(n={});function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return gy("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:oS(a)}return xN(e,t,null,n)}function Gn(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function aS(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NN(){return Math.random().toString(36).substr(2,8)}function RI(n,e){return{usr:n.state,key:n.key,idx:e}}function gy(n,e,t,i){return t===void 0&&(t=null),fp({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Kp(e):e,{state:t,key:e&&e.key||i||NN()})}function oS(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Kp(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function xN(n,e,t,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d=Vs.Pop,p=null,g=y();g==null&&(g=0,c.replaceState(fp({},c.state,{idx:g}),""));function y(){return(c.state||{idx:null}).idx}function v(){d=Vs.Pop;let U=y(),ie=U==null?null:U-g;g=U,p&&p({action:d,location:j.location,delta:ie})}function w(U,ie){d=Vs.Push;let ne=gy(j.location,U,ie);g=y()+1;let X=RI(ne,g),fe=j.createHref(ne);try{c.pushState(X,"",fe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;a.location.assign(fe)}l&&p&&p({action:d,location:j.location,delta:1})}function C(U,ie){d=Vs.Replace;let ne=gy(j.location,U,ie);g=y();let X=RI(ne,g),fe=j.createHref(ne);c.replaceState(X,"",fe),l&&p&&p({action:d,location:j.location,delta:0})}function L(U){let ie=a.location.origin!=="null"?a.location.origin:a.location.href,ne=typeof U=="string"?U:oS(U);return ne=ne.replace(/ $/,"%20"),Gn(ie,"No window.location.(origin|href) available to create URL for href: "+ne),new URL(ne,ie)}let j={get action(){return d},get location(){return n(a,c)},listen(U){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(SI,v),p=U,()=>{a.removeEventListener(SI,v),p=null}},createHref(U){return e(a,U)},createURL:L,encodeLocation(U){let ie=L(U);return{pathname:ie.pathname,search:ie.search,hash:ie.hash}},push:w,replace:C,go(U){return c.go(U)}};return j}var CI;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(CI||(CI={}));function ON(n,e,t){return t===void 0&&(t="/"),VN(n,e,t)}function VN(n,e,t,i){let a=typeof e=="string"?Kp(e):e,l=cS(a.pathname||"/",t);if(l==null)return null;let c=lS(n);kN(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=KN(l);d=GN(c[p],g)}return d}function lS(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Gn(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let g=Ml([i,p.relativePath]),y=t.concat(p);l.children&&l.children.length>0&&(Gn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),lS(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:qN(g,l.index),routesMeta:y})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of uS(l.path))a(l,c,p)}),e}function uS(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=uS(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function kN(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:jN(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const MN=/^:[\w-]+$/,LN=3,UN=2,BN=1,zN=10,FN=-2,DI=n=>n==="*";function qN(n,e){let t=n.split("/"),i=t.length;return t.some(DI)&&(i+=FN),e&&(i+=UN),t.filter(a=>!DI(a)).reduce((a,l)=>a+(MN.test(l)?LN:l===""?BN:zN),i)}function jN(n,e){return n.length===e.length&&n.slice(0,-1).every((i,a)=>i===e[a])?n[n.length-1]-e[e.length-1]:0}function GN(n,e,t){let{routesMeta:i}=n,a={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,y=l==="/"?e:e.slice(l.length)||"/",v=HN({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),w=p.route;if(!v)return null;Object.assign(a,v.params),c.push({params:a,pathname:Ml([l,v.pathname]),pathnameBase:QN(Ml([l,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(l=Ml([l,v.pathnameBase]))}return c}function HN(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=$N(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,y,v)=>{let{paramName:w,isOptional:C}=y;if(w==="*"){let j=d[v]||"";c=l.slice(0,l.length-j.length).replace(/(.)\/+$/,"$1")}const L=d[v];return C&&!L?g[w]=void 0:g[w]=(L||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function $N(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),aS(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function KN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return aS(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function cS(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const Ml=n=>n.join("/").replace(/\/\/+/g,"/"),QN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/");function YN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const hS=["post","put","patch","delete"];new Set(hS);const WN=["get",...hS];new Set(WN);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pp(){return pp=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},pp.apply(this,arguments)}const XN=Te.createContext(null),JN=Te.createContext(null),dS=Te.createContext(null),Qp=Te.createContext(null),Yp=Te.createContext({outlet:null,matches:[],isDataRoute:!1}),fS=Te.createContext(null);function fv(){return Te.useContext(Qp)!=null}function ZN(){return fv()||Gn(!1),Te.useContext(Qp).location}function ex(n,e){return tx(n,e)}function tx(n,e,t,i){fv()||Gn(!1);let{navigator:a}=Te.useContext(dS),{matches:l}=Te.useContext(Yp),c=l[l.length-1],d=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let g=ZN(),y;if(e){var v;let U=typeof e=="string"?Kp(e):e;p==="/"||(v=U.pathname)!=null&&v.startsWith(p)||Gn(!1),y=U}else y=g;let w=y.pathname||"/",C=w;if(p!=="/"){let U=p.replace(/^\//,"").split("/");C="/"+w.replace(/^\//,"").split("/").slice(U.length).join("/")}let L=ON(n,{pathname:C}),j=ax(L&&L.map(U=>Object.assign({},U,{params:Object.assign({},d,U.params),pathname:Ml([p,a.encodeLocation?a.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?p:Ml([p,a.encodeLocation?a.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),l,t,i);return e&&j?Te.createElement(Qp.Provider,{value:{location:pp({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Vs.Pop}},j):j}function nx(){let n=cx(),e=YN(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Te.createElement(Te.Fragment,null,Te.createElement("h2",null,"Unexpected Application Error!"),Te.createElement("h3",{style:{fontStyle:"italic"}},e),t?Te.createElement("pre",{style:a},t):null,null)}const ix=Te.createElement(nx,null);class rx extends Te.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Te.createElement(Yp.Provider,{value:this.props.routeContext},Te.createElement(fS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sx(n){let{routeContext:e,match:t,children:i}=n,a=Te.useContext(XN);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),Te.createElement(Yp.Provider,{value:e},i)}function ax(n,e,t,i){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,d=(a=t)==null?void 0:a.errors;if(d!=null){let y=c.findIndex(v=>v.route.id&&(d==null?void 0:d[v.route.id])!==void 0);y>=0||Gn(!1),c=c.slice(0,Math.min(c.length,y+1))}let p=!1,g=-1;if(t&&i&&i.v7_partialHydration)for(let y=0;y<c.length;y++){let v=c[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=y),v.route.id){let{loaderData:w,errors:C}=t,L=v.route.loader&&w[v.route.id]===void 0&&(!C||C[v.route.id]===void 0);if(v.route.lazy||L){p=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((y,v,w)=>{let C,L=!1,j=null,U=null;t&&(C=d&&v.route.id?d[v.route.id]:void 0,j=v.route.errorElement||ix,p&&(g<0&&w===0?(hx("route-fallback"),L=!0,U=null):g===w&&(L=!0,U=v.route.hydrateFallbackElement||null)));let ie=e.concat(c.slice(0,w+1)),ne=()=>{let X;return C?X=j:L?X=U:v.route.Component?X=Te.createElement(v.route.Component,null):v.route.element?X=v.route.element:X=y,Te.createElement(sx,{match:v,routeContext:{outlet:y,matches:ie,isDataRoute:t!=null},children:X})};return t&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?Te.createElement(rx,{location:t.location,revalidation:t.revalidation,component:j,error:C,children:ne(),routeContext:{outlet:null,matches:ie,isDataRoute:!0}}):ne()},null)}var pS=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(pS||{});function ox(n){let e=Te.useContext(JN);return e||Gn(!1),e}function lx(n){let e=Te.useContext(Yp);return e||Gn(!1),e}function ux(n){let e=lx(),t=e.matches[e.matches.length-1];return t.route.id||Gn(!1),t.route.id}function cx(){var n;let e=Te.useContext(fS),t=ox(pS.UseRouteError),i=ux();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}const PI={};function hx(n,e,t){PI[n]||(PI[n]=!0)}function dx(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function mS(n){Gn(!1)}function fx(n){let{basename:e="/",children:t=null,location:i,navigationType:a=Vs.Pop,navigator:l,static:c=!1,future:d}=n;fv()&&Gn(!1);let p=e.replace(/^\/*/,"/"),g=Te.useMemo(()=>({basename:p,navigator:l,static:c,future:pp({v7_relativeSplatPath:!1},d)}),[p,d,l,c]);typeof i=="string"&&(i=Kp(i));let{pathname:y="/",search:v="",hash:w="",state:C=null,key:L="default"}=i,j=Te.useMemo(()=>{let U=cS(y,p);return U==null?null:{location:{pathname:U,search:v,hash:w,state:C,key:L},navigationType:a}},[p,y,v,w,C,L,a]);return j==null?null:Te.createElement(dS.Provider,{value:g},Te.createElement(Qp.Provider,{children:t,value:j}))}function px(n){let{children:e,location:t}=n;return ex(_y(e),t)}new Promise(()=>{});function _y(n,e){e===void 0&&(e=[]);let t=[];return Te.Children.forEach(n,(i,a)=>{if(!Te.isValidElement(i))return;let l=[...e,a];if(i.type===Te.Fragment){t.push.apply(t,_y(i.props.children,l));return}i.type!==mS&&Gn(!1),!i.props.index||!i.props.children||Gn(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=_y(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const mx="6";try{window.__reactRouterVersion=mx}catch{}const gx="startTransition",NI=IN[gx];function _x(n){let{basename:e,children:t,future:i,window:a}=n,l=Te.useRef();l.current==null&&(l.current=PN({window:a,v5Compat:!0}));let c=l.current,[d,p]=Te.useState({action:c.action,location:c.location}),{v7_startTransition:g}=i||{},y=Te.useCallback(v=>{g&&NI?NI(()=>p(v)):p(v)},[p,g]);return Te.useLayoutEffect(()=>c.listen(y),[c,y]),Te.useEffect(()=>dx(i),[i]),Te.createElement(fx,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:i})}var xI;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(xI||(xI={}));var OI;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(OI||(OI={}));var zn=function(){return zn=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},zn.apply(this,arguments)};function mp(n,e,t){if(t||arguments.length===2)for(var i=0,a=e.length,l;i<a;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return n.concat(l||Array.prototype.slice.call(e))}var ct="-ms-",sh="-moz-",We="-webkit-",gS="comm",Wp="rule",pv="decl",yx="@import",_S="@keyframes",vx="@layer",yS=Math.abs,mv=String.fromCharCode,yy=Object.assign;function Ex(n,e){return an(n,0)^45?(((e<<2^an(n,0))<<2^an(n,1))<<2^an(n,2))<<2^an(n,3):0}function vS(n){return n.trim()}function Ur(n,e){return(n=e.exec(n))?n[0]:n}function Oe(n,e,t){return n.replace(e,t)}function Qf(n,e,t){return n.indexOf(e,t)}function an(n,e){return n.charCodeAt(e)|0}function Gl(n,e,t){return n.slice(e,t)}function Xi(n){return n.length}function ES(n){return n.length}function Xc(n,e){return e.push(n),n}function Tx(n,e){return n.map(e).join("")}function VI(n,e){return n.filter(function(t){return!Ur(t,e)})}var Xp=1,Hl=1,TS=0,Ti=0,jt=0,yu="";function Jp(n,e,t,i,a,l,c,d){return{value:n,root:e,parent:t,type:i,props:a,children:l,line:Xp,column:Hl,length:c,return:"",siblings:d}}function xs(n,e){return yy(Jp("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Tl(n){for(;n.root;)n=xs(n.root,{children:[n]});Xc(n,n.siblings)}function wx(){return jt}function Ix(){return jt=Ti>0?an(yu,--Ti):0,Hl--,jt===10&&(Hl=1,Xp--),jt}function Ni(){return jt=Ti<TS?an(yu,Ti++):0,Hl++,jt===10&&(Hl=1,Xp++),jt}function so(){return an(yu,Ti)}function Yf(){return Ti}function Zp(n,e){return Gl(yu,n,e)}function vy(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bx(n){return Xp=Hl=1,TS=Xi(yu=n),Ti=0,[]}function Ax(n){return yu="",n}function K_(n){return vS(Zp(Ti-1,Ey(n===91?n+2:n===40?n+1:n)))}function Sx(n){for(;(jt=so())&&jt<33;)Ni();return vy(n)>2||vy(jt)>3?"":" "}function Rx(n,e){for(;--e&&Ni()&&!(jt<48||jt>102||jt>57&&jt<65||jt>70&&jt<97););return Zp(n,Yf()+(e<6&&so()==32&&Ni()==32))}function Ey(n){for(;Ni();)switch(jt){case n:return Ti;case 34:case 39:n!==34&&n!==39&&Ey(jt);break;case 40:n===41&&Ey(n);break;case 92:Ni();break}return Ti}function Cx(n,e){for(;Ni()&&n+jt!==57;)if(n+jt===84&&so()===47)break;return"/*"+Zp(e,Ti-1)+"*"+mv(n===47?n:Ni())}function Dx(n){for(;!vy(so());)Ni();return Zp(n,Ti)}function Px(n){return Ax(Wf("",null,null,null,[""],n=bx(n),0,[0],n))}function Wf(n,e,t,i,a,l,c,d,p){for(var g=0,y=0,v=c,w=0,C=0,L=0,j=1,U=1,ie=1,ne=0,X="",fe=a,ae=l,ce=i,S=X;U;)switch(L=ne,ne=Ni()){case 40:if(L!=108&&an(S,v-1)==58){Qf(S+=Oe(K_(ne),"&","&\f"),"&\f",yS(g?d[g-1]:0))!=-1&&(ie=-1);break}case 34:case 39:case 91:S+=K_(ne);break;case 9:case 10:case 13:case 32:S+=Sx(L);break;case 92:S+=Rx(Yf()-1,7);continue;case 47:switch(so()){case 42:case 47:Xc(Nx(Cx(Ni(),Yf()),e,t,p),p);break;default:S+="/"}break;case 123*j:d[g++]=Xi(S)*ie;case 125*j:case 59:case 0:switch(ne){case 0:case 125:U=0;case 59+y:ie==-1&&(S=Oe(S,/\f/g,"")),C>0&&Xi(S)-v&&Xc(C>32?MI(S+";",i,t,v-1,p):MI(Oe(S," ","")+";",i,t,v-2,p),p);break;case 59:S+=";";default:if(Xc(ce=kI(S,e,t,g,y,a,d,X,fe=[],ae=[],v,l),l),ne===123)if(y===0)Wf(S,e,ce,ce,fe,l,v,d,ae);else switch(w===99&&an(S,3)===110?100:w){case 100:case 108:case 109:case 115:Wf(n,ce,ce,i&&Xc(kI(n,ce,ce,0,0,a,d,X,a,fe=[],v,ae),ae),a,ae,v,d,i?fe:ae);break;default:Wf(S,ce,ce,ce,[""],ae,0,d,ae)}}g=y=C=0,j=ie=1,X=S="",v=c;break;case 58:v=1+Xi(S),C=L;default:if(j<1){if(ne==123)--j;else if(ne==125&&j++==0&&Ix()==125)continue}switch(S+=mv(ne),ne*j){case 38:ie=y>0?1:(S+="\f",-1);break;case 44:d[g++]=(Xi(S)-1)*ie,ie=1;break;case 64:so()===45&&(S+=K_(Ni())),w=so(),y=v=Xi(X=S+=Dx(Yf())),ne++;break;case 45:L===45&&Xi(S)==2&&(j=0)}}return l}function kI(n,e,t,i,a,l,c,d,p,g,y,v){for(var w=a-1,C=a===0?l:[""],L=ES(C),j=0,U=0,ie=0;j<i;++j)for(var ne=0,X=Gl(n,w+1,w=yS(U=c[j])),fe=n;ne<L;++ne)(fe=vS(U>0?C[ne]+" "+X:Oe(X,/&\f/g,C[ne])))&&(p[ie++]=fe);return Jp(n,e,t,a===0?Wp:d,p,g,y,v)}function Nx(n,e,t,i){return Jp(n,e,t,gS,mv(wx()),Gl(n,2,-2),0,i)}function MI(n,e,t,i,a){return Jp(n,e,t,pv,Gl(n,0,i),Gl(n,i+1,-1),i,a)}function wS(n,e,t){switch(Ex(n,e)){case 5103:return We+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return We+n+n;case 4789:return sh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return We+n+sh+n+ct+n+n;case 5936:switch(an(n,e+11)){case 114:return We+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return We+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return We+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return We+n+ct+n+n;case 6165:return We+n+ct+"flex-"+n+n;case 5187:return We+n+Oe(n,/(\w+).+(:[^]+)/,We+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return We+n+ct+"flex-item-"+Oe(n,/flex-|-self/g,"")+(Ur(n,/flex-|baseline/)?"":ct+"grid-row-"+Oe(n,/flex-|-self/g,""))+n;case 4675:return We+n+ct+"flex-line-pack"+Oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return We+n+ct+Oe(n,"shrink","negative")+n;case 5292:return We+n+ct+Oe(n,"basis","preferred-size")+n;case 6060:return We+"box-"+Oe(n,"-grow","")+We+n+ct+Oe(n,"grow","positive")+n;case 4554:return We+Oe(n,/([^-])(transform)/g,"$1"+We+"$2")+n;case 6187:return Oe(Oe(Oe(n,/(zoom-|grab)/,We+"$1"),/(image-set)/,We+"$1"),n,"")+n;case 5495:case 3959:return Oe(n,/(image-set\([^]*)/,We+"$1$`$1");case 4968:return Oe(Oe(n,/(.+:)(flex-)?(.*)/,We+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+We+n+n;case 4200:if(!Ur(n,/flex-|baseline/))return ct+"grid-column-align"+Gl(n,e)+n;break;case 2592:case 3360:return ct+Oe(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,a){return e=a,Ur(i.props,/grid-\w+-end/)})?~Qf(n+(t=t[e].value),"span",0)?n:ct+Oe(n,"-start","")+n+ct+"grid-row-span:"+(~Qf(t,"span",0)?Ur(t,/\d+/):+Ur(t,/\d+/)-+Ur(n,/\d+/))+";":ct+Oe(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return Ur(i.props,/grid-\w+-start/)})?n:ct+Oe(Oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Oe(n,/(.+)-inline(.+)/,We+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xi(n)-1-e>6)switch(an(n,e+1)){case 109:if(an(n,e+4)!==45)break;case 102:return Oe(n,/(.+:)(.+)-([^]+)/,"$1"+We+"$2-$3$1"+sh+(an(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Qf(n,"stretch",0)?wS(Oe(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,c,d,p,g){return ct+a+":"+l+g+(c?ct+a+"-span:"+(d?p:+p-+l)+g:"")+n});case 4949:if(an(n,e+6)===121)return Oe(n,":",":"+We)+n;break;case 6444:switch(an(n,an(n,14)===45?18:11)){case 120:return Oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+We+(an(n,14)===45?"inline-":"")+"box$3$1"+We+"$2$3$1"+ct+"$2box$3")+n;case 100:return Oe(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(n,"scroll-","scroll-snap-")+n}return n}function gp(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function xx(n,e,t,i){switch(n.type){case vx:if(n.children.length)break;case yx:case pv:return n.return=n.return||n.value;case gS:return"";case _S:return n.return=n.value+"{"+gp(n.children,i)+"}";case Wp:if(!Xi(n.value=n.props.join(",")))return""}return Xi(t=gp(n.children,i))?n.return=n.value+"{"+t+"}":""}function Ox(n){var e=ES(n);return function(t,i,a,l){for(var c="",d=0;d<e;d++)c+=n[d](t,i,a,l)||"";return c}}function Vx(n){return function(e){e.root||(e=e.return)&&n(e)}}function kx(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case pv:n.return=wS(n.value,n.length,t);return;case _S:return gp([xs(n,{value:Oe(n.value,"@","@"+We)})],i);case Wp:if(n.length)return Tx(t=n.props,function(a){switch(Ur(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tl(xs(n,{props:[Oe(a,/:(read-\w+)/,":"+sh+"$1")]})),Tl(xs(n,{props:[a]})),yy(n,{props:VI(t,i)});break;case"::placeholder":Tl(xs(n,{props:[Oe(a,/:(plac\w+)/,":"+We+"input-$1")]})),Tl(xs(n,{props:[Oe(a,/:(plac\w+)/,":"+sh+"$1")]})),Tl(xs(n,{props:[Oe(a,/:(plac\w+)/,ct+"input-$1")]})),Tl(xs(n,{props:[a]})),yy(n,{props:VI(t,i)});break}return""})}}var Mx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ei={},$l=typeof process<"u"&&ei!==void 0&&(ei.REACT_APP_SC_ATTR||ei.SC_ATTR)||"data-styled",IS="active",bS="data-styled-version",em="6.1.18",gv=`/*!sc*/
`,_p=typeof window<"u"&&typeof document<"u",Lx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ei!==void 0&&ei.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ei.REACT_APP_SC_DISABLE_SPEEDY!==""?ei.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ei.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ei!==void 0&&ei.SC_DISABLE_SPEEDY!==void 0&&ei.SC_DISABLE_SPEEDY!==""&&ei.SC_DISABLE_SPEEDY!=="false"&&ei.SC_DISABLE_SPEEDY),tm=Object.freeze([]),Kl=Object.freeze({});function Ux(n,e,t){return t===void 0&&(t=Kl),n.theme!==t.theme&&n.theme||e||t.theme}var AS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Bx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zx=/(^-|-$)/g;function LI(n){return n.replace(Bx,"-").replace(zx,"")}var Fx=/(a)(d)/gi,Uf=52,UI=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ty(n){var e,t="";for(e=Math.abs(n);e>Uf;e=e/Uf|0)t=UI(e%Uf)+t;return(UI(e%Uf)+t).replace(Fx,"$1-$2")}var Q_,SS=5381,Vl=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},RS=function(n){return Vl(SS,n)};function qx(n){return Ty(RS(n)>>>0)}function jx(n){return n.displayName||n.name||"Component"}function Y_(n){return typeof n=="string"&&!0}var CS=typeof Symbol=="function"&&Symbol.for,DS=CS?Symbol.for("react.memo"):60115,Gx=CS?Symbol.for("react.forward_ref"):60112,Hx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$x={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},PS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kx=((Q_={})[Gx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Q_[DS]=PS,Q_);function BI(n){return("type"in(e=n)&&e.type.$$typeof)===DS?PS:"$$typeof"in n?Kx[n.$$typeof]:Hx;var e}var Qx=Object.defineProperty,Yx=Object.getOwnPropertyNames,zI=Object.getOwnPropertySymbols,Wx=Object.getOwnPropertyDescriptor,Xx=Object.getPrototypeOf,FI=Object.prototype;function NS(n,e,t){if(typeof e!="string"){if(FI){var i=Xx(e);i&&i!==FI&&NS(n,i,t)}var a=Yx(e);zI&&(a=a.concat(zI(e)));for(var l=BI(n),c=BI(e),d=0;d<a.length;++d){var p=a[d];if(!(p in $x||t&&t[p]||c&&p in c||l&&p in l)){var g=Wx(e,p);try{Qx(n,p,g)}catch{}}}}return n}function Ql(n){return typeof n=="function"}function _v(n){return typeof n=="object"&&"styledComponentId"in n}function eo(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function qI(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function vh(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function wy(n,e,t){if(t===void 0&&(t=!1),!t&&!vh(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=wy(n[i],e[i]);else if(vh(e))for(var i in e)n[i]=wy(n[i],e[i]);return n}function yv(n,e){Object.defineProperty(n,"toString",{value:e})}function Gh(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Jx=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;e>=l;)if((l<<=1)<0)throw Gh(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,t.length);c<p;c++)this.tag.insertRule(d,t[c])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),a=i+t;this.groupSizes[e]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],a=this.indexOfGroup(e),l=a+i,c=a;c<l;c++)t+="".concat(this.tag.getRule(c)).concat(gv);return t},n}(),Xf=new Map,yp=new Map,Jf=1,Bf=function(n){if(Xf.has(n))return Xf.get(n);for(;yp.has(Jf);)Jf++;var e=Jf++;return Xf.set(n,e),yp.set(e,n),e},Zx=function(n,e){Jf=e+1,Xf.set(n,e),yp.set(e,n)},eO="style[".concat($l,"][").concat(bS,'="').concat(em,'"]'),tO=new RegExp("^".concat($l,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nO=function(n,e,t){for(var i,a=t.split(","),l=0,c=a.length;l<c;l++)(i=a[l])&&n.registerName(e,i)},iO=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(gv),a=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(tO);if(p){var g=0|parseInt(p[1],10),y=p[2];g!==0&&(Zx(y,g),nO(n,y,p[3]),n.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}},jI=function(n){for(var e=document.querySelectorAll(eO),t=0,i=e.length;t<i;t++){var a=e[t];a&&a.getAttribute($l)!==IS&&(iO(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function rO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xS=function(n){var e=document.head,t=n||e,i=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat($l,"]")));return p[p.length-1]}(t),l=a!==void 0?a.nextSibling:null;i.setAttribute($l,IS),i.setAttribute(bS,em);var c=rO();return c&&i.setAttribute("nonce",c),t.insertBefore(i,l),i},sO=function(){function n(e){this.element=xS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===t)return c}throw Gh(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),aO=function(){function n(e){this.element=xS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),oO=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),GI=_p,lO={isServer:!_p,useCSSOMInjection:!Lx},OS=function(){function n(e,t,i){e===void 0&&(e=Kl),t===void 0&&(t={});var a=this;this.options=zn(zn({},lO),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&_p&&GI&&(GI=!1,jI(this)),yv(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",g=function(v){var w=function(ie){return yp.get(ie)}(v);if(w===void 0)return"continue";var C=l.names.get(w),L=c.getGroup(v);if(C===void 0||!C.size||L.length===0)return"continue";var j="".concat($l,".g").concat(v,'[id="').concat(w,'"]'),U="";C!==void 0&&C.forEach(function(ie){ie.length>0&&(U+="".concat(ie,","))}),p+="".concat(L).concat(j,'{content:"').concat(U,'"}').concat(gv)},y=0;y<d;y++)g(y);return p}(a)})}return n.registerId=function(e){return Bf(e)},n.prototype.rehydrate=function(){!this.server&&_p&&jI(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(zn(zn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,a=t.target;return t.isServer?new oO(a):i?new sO(a):new aO(a)}(this.options),new Jx(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Bf(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(Bf(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Bf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),uO=/&/g,cO=/^\s*\/\/.*$/gm;function VS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=VS(t.children,e)),t})}function hO(n){var e,t,i,a=Kl,l=a.options,c=l===void 0?Kl:l,d=a.plugins,p=d===void 0?tm:d,g=function(w,C,L){return L.startsWith(t)&&L.endsWith(t)&&L.replaceAll(t,"").length>0?".".concat(e):w},y=p.slice();y.push(function(w){w.type===Wp&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(uO,t).replace(i,g))}),c.prefix&&y.push(kx),y.push(xx);var v=function(w,C,L,j){C===void 0&&(C=""),L===void 0&&(L=""),j===void 0&&(j="&"),e=j,t=C,i=new RegExp("\\".concat(t,"\\b"),"g");var U=w.replace(cO,""),ie=Px(L||C?"".concat(L," ").concat(C," { ").concat(U," }"):U);c.namespace&&(ie=VS(ie,c.namespace));var ne=[];return gp(ie,Ox(y.concat(Vx(function(X){return ne.push(X)})))),ne};return v.hash=p.length?p.reduce(function(w,C){return C.name||Gh(15),Vl(w,C.name)},SS).toString():"",v}var dO=new OS,Iy=hO(),kS=jl.createContext({shouldForwardProp:void 0,styleSheet:dO,stylis:Iy});kS.Consumer;jl.createContext(void 0);function HI(){return Te.useContext(kS)}var fO=function(){function n(e,t){var i=this;this.inject=function(a,l){l===void 0&&(l=Iy);var c=i.name+l.hash;a.hasNameForId(i.id,c)||a.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,yv(this,function(){throw Gh(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Iy),this.name+e.hash},n}(),pO=function(n){return n>="A"&&n<="Z"};function $I(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;pO(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var MS=function(n){return n==null||n===!1||n===""},LS=function(n){var e,t,i=[];for(var a in n){var l=n[a];n.hasOwnProperty(a)&&!MS(l)&&(Array.isArray(l)&&l.isCss||Ql(l)?i.push("".concat($I(a),":"),l,";"):vh(l)?i.push.apply(i,mp(mp(["".concat(a," {")],LS(l),!1),["}"],!1)):i.push("".concat($I(a),": ").concat((e=a,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Mx||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function ao(n,e,t,i){if(MS(n))return[];if(_v(n))return[".".concat(n.styledComponentId)];if(Ql(n)){if(!Ql(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var a=n(e);return ao(a,e,t,i)}var l;return n instanceof fO?t?(n.inject(t,i),[n.getName(i)]):[n]:vh(n)?LS(n):Array.isArray(n)?Array.prototype.concat.apply(tm,n.map(function(c){return ao(c,e,t,i)})):[n.toString()]}function mO(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Ql(t)&&!_v(t))return!1}return!0}var gO=RS(em),_O=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&mO(e),this.componentId=t,this.baseHash=Vl(gO,t),this.baseStyle=i,OS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=eo(a,this.staticRulesId);else{var l=qI(ao(this.rules,e,t,i)),c=Ty(Vl(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,d)}a=eo(a,c),this.staticRulesId=c}else{for(var p=Vl(this.baseHash,i.hash),g="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")g+=v;else if(v){var w=qI(ao(v,e,t,i));p=Vl(p,w+y),g+=w}}if(g){var C=Ty(p>>>0);t.hasNameForId(this.componentId,C)||t.insertRules(this.componentId,C,i(g,".".concat(C),void 0,this.componentId)),a=eo(a,C)}}return a},n}(),US=jl.createContext(void 0);US.Consumer;var W_={};function yO(n,e,t){var i=_v(n),a=n,l=!Y_(n),c=e.attrs,d=c===void 0?tm:c,p=e.componentId,g=p===void 0?function(fe,ae){var ce=typeof fe!="string"?"sc":LI(fe);W_[ce]=(W_[ce]||0)+1;var S="".concat(ce,"-").concat(qx(em+ce+W_[ce]));return ae?"".concat(ae,"-").concat(S):S}(e.displayName,e.parentComponentId):p,y=e.displayName,v=y===void 0?function(fe){return Y_(fe)?"styled.".concat(fe):"Styled(".concat(jx(fe),")")}(n):y,w=e.displayName&&e.componentId?"".concat(LI(e.displayName),"-").concat(e.componentId):e.componentId||g,C=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,L=e.shouldForwardProp;if(i&&a.shouldForwardProp){var j=a.shouldForwardProp;if(e.shouldForwardProp){var U=e.shouldForwardProp;L=function(fe,ae){return j(fe,ae)&&U(fe,ae)}}else L=j}var ie=new _O(t,w,i?a.componentStyle:void 0);function ne(fe,ae){return function(ce,S,A){var D=ce.attrs,O=ce.componentStyle,V=ce.defaultProps,M=ce.foldedComponentIds,P=ce.styledComponentId,Gt=ce.target,dt=jl.useContext(US),Q=HI(),ue=ce.shouldForwardProp||Q.shouldForwardProp,ye=Ux(S,dt,V)||Kl,Ne=function(De,we,Et){for(var He,Jt=zn(zn({},we),{className:void 0,theme:Et}),si=0;si<De.length;si+=1){var kn=Ql(He=De[si])?He(Jt):He;for(var yn in kn)Jt[yn]=yn==="className"?eo(Jt[yn],kn[yn]):yn==="style"?zn(zn({},Jt[yn]),kn[yn]):kn[yn]}return we.className&&(Jt.className=eo(Jt.className,we.className)),Jt}(D,S,ye),N=Ne.as||Gt,Z={};for(var oe in Ne)Ne[oe]===void 0||oe[0]==="$"||oe==="as"||oe==="theme"&&Ne.theme===ye||(oe==="forwardedAs"?Z.as=Ne.forwardedAs:ue&&!ue(oe,N)||(Z[oe]=Ne[oe]));var se=function(De,we){var Et=HI(),He=De.generateAndInjectStyles(we,Et.styleSheet,Et.stylis);return He}(O,Ne),ve=eo(M,P);return se&&(ve+=" "+se),Ne.className&&(ve+=" "+Ne.className),Z[Y_(N)&&!AS.has(N)?"class":"className"]=ve,A&&(Z.ref=A),Te.createElement(N,Z)}(X,fe,ae)}ne.displayName=v;var X=jl.forwardRef(ne);return X.attrs=C,X.componentStyle=ie,X.displayName=v,X.shouldForwardProp=L,X.foldedComponentIds=i?eo(a.foldedComponentIds,a.styledComponentId):"",X.styledComponentId=w,X.target=i?a.target:n,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(fe){this._foldedDefaultProps=i?function(ae){for(var ce=[],S=1;S<arguments.length;S++)ce[S-1]=arguments[S];for(var A=0,D=ce;A<D.length;A++)wy(ae,D[A],!0);return ae}({},a.defaultProps,fe):fe}}),yv(X,function(){return".".concat(X.styledComponentId)}),l&&NS(X,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function KI(n,e){for(var t=[n[0]],i=0,a=e.length;i<a;i+=1)t.push(e[i],n[i+1]);return t}var QI=function(n){return Object.assign(n,{isCss:!0})};function vO(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Ql(n)||vh(n))return QI(ao(KI(tm,mp([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?ao(i):QI(ao(KI(i,e)))}function by(n,e,t){if(t===void 0&&(t=Kl),!e)throw Gh(1,e);var i=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return n(e,t,vO.apply(void 0,mp([a],l,!1)))};return i.attrs=function(a){return by(n,e,zn(zn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return by(n,e,zn(zn({},t),a))},i}var BS=function(n){return by(yO,n)},Ae=BS;AS.forEach(function(n){Ae[n]=BS(n)});const EO=Ae.div`
  position: relative;
  width: 375px;
  height: 812px;
  border-radius: 40px;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 8px 2px #aaaaaa;
  overflow: hidden;
`;function TO({children:n}){return ot.jsx(EO,{children:n})}Ae.div`
  width: 100%;
  height: 180px;
  background-color: #DEFDF9;

  & > img {
  width: 375px;
  height: 54px;
  }
`;Ae.div`
  font-family: CookieRun-Regular;
  font-weight: 700;
  display: grid;

  & > h1 {
    grid-area: 1 / 1;
    font-family: CookieRun-Regular;
    font-size: 40px;
  }
`;Ae.h1`
    margin-top: 2px;
    margin-left: 2px;
    color: #222222;
    text-shadow: 
    2px 2px 1px #222222,
    2px 0px 1px #222222,
    2px -1px 1px #222222,
    0px 2px 1px #222222,
    0px 0px 1px #222222, 
    0px -1px 1px #222222,
    -1px 1px 1px #222222,
    -1px 0px 1px #222222,
    -1px -1px 1px #222222;
`;Ae.h1`
    color: #FFF8D2;
`;Ae.button`
  width: 48px;
  height: 48px;
  margin-left: -4px;
  border-radius: 0 12px 12px 0;
  border: none;
  background-color: var(--main-color);
  display: flex;
  padding: 12px;
  align-items: center;

`;Ae.div`
  display: flex;
  gap: 8px;
`;const wO=()=>{};var YI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},IO=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const a=n[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},FS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,v=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,C=g&63;p||(C=64,c||(w=64)),i.push(t[y],t[v],t[w],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):IO(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||v==null)throw new bO;const w=l<<2|d>>4;if(i.push(w),g!==64){const C=d<<4&240|g>>2;if(i.push(C),v!==64){const L=g<<6&192|v;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AO=function(n){const e=zS(n);return FS.encodeByteArray(e,!0)},vp=function(n){return AO(n).replace(/\./g,"")},vv=function(n){try{return FS.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ep(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!SO(t)||(n[t]=Ep(n[t],e[t]));return n}function SO(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=()=>Ev().__FIREBASE_DEFAULTS__,CO=()=>{if(typeof process>"u"||typeof YI>"u")return;const n=YI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},DO=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vv(n[1]);return e&&JSON.parse(e)},Tv=()=>{try{return wO()||RO()||CO()||DO()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qS=()=>{var n;return(n=Tv())===null||n===void 0?void 0:n.config},PO=n=>{var e;return(e=Tv())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(n){return n.endsWith(".cloudworkstations.dev")}async function jS(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vp(JSON.stringify(t)),vp(JSON.stringify(c)),""].join(".")}const ah={};function OO(){const n={prod:[],emulator:[]};for(const e of Object.keys(ah))ah[e]?n.emulator.push(e):n.prod.push(e);return n}function VO(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let WI=!1;function wv(n,e){if(typeof window>"u"||typeof document>"u"||!Hh(window.location.host)||ah[n]===e||ah[n]||WI)return;ah[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",l=OO().prod.length>0;function c(){const w=document.getElementById(i);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,C){w.setAttribute("width","24"),w.setAttribute("id",C),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{WI=!0,c()},w}function y(w,C){w.setAttribute("id",C),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function v(){const w=VO(i),C=t("text"),L=document.getElementById(C)||document.createElement("span"),j=t("learnmore"),U=document.getElementById(j)||document.createElement("a"),ie=t("preprendIcon"),ne=document.getElementById(ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const X=w.element;d(X),y(U,j);const fe=g();p(ne,ie),X.append(ne,L,U,fe),document.body.appendChild(X)}l?(L.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ne.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function Iv(){var n;const e=(n=Tv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MO(){return typeof window<"u"||GS()}function GS(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function LO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $S(){const n=It();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function KS(){return!Iv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Eh(){try{return typeof indexedDB=="object"}catch{return!1}}function UO(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO="FirebaseError";class xn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=BO,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Io.prototype.create)}}class Io{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?zO(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new xn(a,d,i)}}function zO(n,e){return n.replace(FO,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const FO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function qO(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function js(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=n[a],c=e[a];if(JI(l)&&JI(c)){if(!js(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function JI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function kl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Jc(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function QS(n,e){const t=new jO(n,e);return t.subscribe.bind(t)}class jO{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");GO(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=X_),a.error===void 0&&(a.error=X_),a.complete===void 0&&(a.complete=X_);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GO(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function X_(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n){return n&&n._delegate?n._delegate:n}class lr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new NO;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KO(e))try{this.getOrInitializeService({instanceIdentifier:$a})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=$a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$a){return this.instances.has(e)}getOptions(e=$a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:$O(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=$a){return this.component?this.component.multipleInstances?e:$a:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $O(n){return n===$a?void 0:n}function KO(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HO(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=[];var Ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ue||(Ue={}));const WS={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},QO=Ue.INFO,YO={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},WO=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),a=YO[e];if(a)console[a](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nm{constructor(e){this.name=e,this._logLevel=QO,this._logHandler=WO,this._userLogHandler=null,Av.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}function XO(n){Av.forEach(e=>{e.setLogLevel(n)})}function JO(n,e){for(const t of Av){let i=null;e&&e.level&&(i=WS[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,l,...c)=>{const d=c.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");l>=(i??a.logLevel)&&n({level:Ue[l].toLowerCase(),message:d,args:c,type:a.name})}}}const ZO=(n,e)=>e.some(t=>n instanceof t);let ZI,eb;function eV(){return ZI||(ZI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tV(){return eb||(eb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XS=new WeakMap,Ay=new WeakMap,JS=new WeakMap,J_=new WeakMap,Sv=new WeakMap;function nV(n){const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Us(n.result)),a()},c=()=>{i(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&XS.set(t,n)}).catch(()=>{}),Sv.set(e,n),e}function iV(n){if(Ay.has(n))return;const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Ay.set(n,e)}let Sy={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ay.get(n);if(e==="objectStoreNames")return n.objectStoreNames||JS.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Us(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rV(n){Sy=n(Sy)}function sV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Z_(this),e,...t);return JS.set(i,e.sort?e.sort():[e]),Us(i)}:tV().includes(n)?function(...e){return n.apply(Z_(this),e),Us(XS.get(this))}:function(...e){return Us(n.apply(Z_(this),e))}}function aV(n){return typeof n=="function"?sV(n):(n instanceof IDBTransaction&&iV(n),ZO(n,eV())?new Proxy(n,Sy):n)}function Us(n){if(n instanceof IDBRequest)return nV(n);if(J_.has(n))return J_.get(n);const e=aV(n);return e!==n&&(J_.set(n,e),Sv.set(e,n)),e}const Z_=n=>Sv.get(n);function oV(n,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=Us(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Us(c.result),p.oldVersion,p.newVersion,Us(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const lV=["get","getKey","getAll","getAllKeys","count"],uV=["put","add","delete","clear"],ey=new Map;function tb(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ey.get(e))return ey.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=uV.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||lV.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return ey.set(e,l),l}rV(n=>({...n,get:(e,t,i)=>tb(e,t)||n.get(e,t,i),has:(e,t)=>!!tb(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hV(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function hV(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tp="@firebase/app",Ry="0.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new nm("@firebase/app"),dV="@firebase/app-compat",fV="@firebase/analytics-compat",pV="@firebase/analytics",mV="@firebase/app-check-compat",gV="@firebase/app-check",_V="@firebase/auth",yV="@firebase/auth-compat",vV="@firebase/database",EV="@firebase/data-connect",TV="@firebase/database-compat",wV="@firebase/functions",IV="@firebase/functions-compat",bV="@firebase/installations",AV="@firebase/installations-compat",SV="@firebase/messaging",RV="@firebase/messaging-compat",CV="@firebase/performance",DV="@firebase/performance-compat",PV="@firebase/remote-config",NV="@firebase/remote-config-compat",xV="@firebase/storage",OV="@firebase/storage-compat",VV="@firebase/firestore",kV="@firebase/vertexai",MV="@firebase/firestore-compat",LV="firebase",UV="11.7.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="[DEFAULT]",BV={[Tp]:"fire-core",[dV]:"fire-core-compat",[pV]:"fire-analytics",[fV]:"fire-analytics-compat",[gV]:"fire-app-check",[mV]:"fire-app-check-compat",[_V]:"fire-auth",[yV]:"fire-auth-compat",[vV]:"fire-rtdb",[EV]:"fire-data-connect",[TV]:"fire-rtdb-compat",[wV]:"fire-fn",[IV]:"fire-fn-compat",[bV]:"fire-iid",[AV]:"fire-iid-compat",[SV]:"fire-fcm",[RV]:"fire-fcm-compat",[CV]:"fire-perf",[DV]:"fire-perf-compat",[PV]:"fire-rc",[NV]:"fire-rc-compat",[xV]:"fire-gcs",[OV]:"fire-gcs-compat",[VV]:"fire-fst",[MV]:"fire-fst-compat",[kV]:"fire-vertex","fire-js":"fire-js",[LV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new Map,Yl=new Map,Wl=new Map;function Th(n,e){try{n.container.addComponent(e)}catch(t){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ZS(n,e){n.container.addOrOverwriteComponent(e)}function $s(n){const e=n.name;if(Wl.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;Wl.set(e,n);for(const t of Hs.values())Th(t,n);for(const t of Yl.values())Th(t,n);return!0}function eR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zV(n,e,t=Gs){eR(n,e).clearInstance(t)}function tR(n){return n.options!==void 0}function gt(n){return n==null?!1:n.settings!==void 0}function FV(){Wl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new Io("app","Firebase",qV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nR=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(n,e){const t=vv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,l=new Date().getTime();a-l<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class jV extends nR{constructor(e,t,i,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,c={name:i,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,c,a);else{const d=e;super(d.options,c,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:l},t),this._serverConfig.authIdToken&&nb(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&nb(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,xi(Tp,Ry,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Cv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ei.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=UV;function Rv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Gs,automaticDataCollectionEnabled:!1},e),a=i.name;if(typeof a!="string"||!a)throw Ei.create("bad-app-name",{appName:String(a)});if(t||(t=qS()),!t)throw Ei.create("no-options");const l=Hs.get(a);if(l){if(js(t,l.options)&&js(i,l.config))return l;throw Ei.create("duplicate-app",{appName:a})}const c=new YS(a);for(const p of Wl.values())c.addComponent(p);const d=new nR(t,i,c);return Hs.set(a,d),d}function GV(n,e){if(MO()&&!GS())throw Ei.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;tR(n)?t=n.options:t=n;const i=Object.assign(Object.assign({},e),t);i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const a=g=>[...g].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ei.create("finalization-registry-not-supported",{});const l=""+a(JSON.stringify(i)),c=Yl.get(l);if(c)return c.incRefCount(e.releaseOnDeref),c;const d=new YS(l);for(const g of Wl.values())d.addComponent(g);const p=new jV(t,e,l,d);return Yl.set(l,p),p}function HV(n=Gs){const e=Hs.get(n);if(!e&&n===Gs&&qS())return Rv();if(!e)throw Ei.create("no-app",{appName:n});return e}function $V(){return Array.from(Hs.values())}async function Cv(n){let e=!1;const t=n.name;Hs.has(t)?(e=!0,Hs.delete(t)):Yl.has(t)&&n.decRefCount()<=0&&(Yl.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(i=>i.delete())),n.isDeleted=!0)}function xi(n,e,t){var i;let a=(i=BV[n])!==null&&i!==void 0?i:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(d.join(" "));return}$s(new lr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function iR(n,e){if(n!==null&&typeof n!="function")throw Ei.create("invalid-log-argument");JO(n,e)}function rR(n){XO(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV="firebase-heartbeat-database",QV=1,wh="firebase-heartbeat-store";let ty=null;function sR(){return ty||(ty=oV(KV,QV,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(wh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ei.create("idb-open",{originalErrorMessage:n.message})})),ty}async function YV(n){try{const t=(await sR()).transaction(wh),i=await t.objectStore(wh).get(aR(n));return await t.done,i}catch(e){if(e instanceof xn)qr.warn(e.message);else{const t=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(t.message)}}}async function ib(n,e){try{const i=(await sR()).transaction(wh,"readwrite");await i.objectStore(wh).put(e,aR(n)),await i.done}catch(t){if(t instanceof xn)qr.warn(t.message);else{const i=Ei.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qr.warn(i.message)}}}function aR(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WV=1024,XV=30;class JV{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ek(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=rb();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>XV){const c=tk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){qr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rb(),{heartbeatsToSend:i,unsentEntries:a}=ZV(this._heartbeatsCache.heartbeats),l=vp(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return qr.warn(t),""}}}function rb(){return new Date().toISOString().substring(0,10)}function ZV(n,e=WV){const t=[];let i=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),sb(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),sb(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ek{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eh()?UO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YV(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return ib(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return ib(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function sb(n){return vp(JSON.stringify({version:2,heartbeats:n})).length}function tk(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(n){$s(new lr("platform-logger",e=>new cV(e),"PRIVATE")),$s(new lr("heartbeat",e=>new JV(e),"PRIVATE")),xi(Tp,Ry,n),xi(Tp,Ry,"esm2017"),xi("fire-js","")}nk("");const ik=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:xn,SDK_VERSION:na,_DEFAULT_ENTRY_NAME:Gs,_addComponent:Th,_addOrOverwriteComponent:ZS,_apps:Hs,_clearComponents:FV,_components:Wl,_getProvider:eR,_isFirebaseApp:tR,_isFirebaseServerApp:gt,_registerComponent:$s,_removeServiceInstance:zV,_serverApps:Yl,deleteApp:Cv,getApp:HV,getApps:$V,initializeApp:Rv,initializeServerApp:GV,onLog:iR,registerVersion:xi,setLogLevel:rR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,t){this._delegate=e,this.firebase=t,Th(e,new lr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Cv(this._delegate)))}_getService(e,t=Gs){var i;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((i=a.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=Gs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Th(this._delegate,e)}_addOrOverwriteComponent(e){ZS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ab=new Io("app-compat","Firebase",sk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(n){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:xi,setLogLevel:rR,onLog:iR,apps:null,SDK_VERSION:na,INTERNAL:{registerComponent:d,removeApp:i,useAsService:p,modularAPIs:ik}};t.default=t,Object.defineProperty(t,"apps",{get:c});function i(g){delete e[g]}function a(g){if(g=g||Gs,!XI(e,g))throw ab.create("no-app",{appName:g});return e[g]}a.App=n;function l(g,y={}){const v=Rv(g,y);if(XI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function c(){return Object.keys(e).map(g=>e[g])}function d(g){const y=g.name,v=y.replace("-compat","");if($s(g)&&g.type==="PUBLIC"){const w=(C=a())=>{if(typeof C[v]!="function")throw ab.create("invalid-app-argument",{appName:y});return C[v]()};g.serviceProps!==void 0&&Ep(w,g.serviceProps),t[v]=w,n.prototype[v]=function(...C){return this._getService.bind(this,y).apply(this,g.multipleInstances?C:[])}}return g.type==="PUBLIC"?t[v]:null}function p(g,y){return y==="serverAuth"?null:y}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){const n=ak(rk);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:oR,extendNamespace:e,createSubscribe:QS,ErrorFactory:Io,deepExtend:Ep});function e(t){Ep(n,t)}return n}const ok=oR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=new nm("@firebase/app-compat"),lk="@firebase/app-compat",uk="0.3.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(n){xi(lk,uk,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=Ev();if(n.firebase!==void 0){ob.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&ob.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Eu=ok;ck();var hk="firebase",dk="11.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Eu.registerVersion(hk,dk,"app-compat");function Dv(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]]);return t}const qc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},wl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function lR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pk=fk,mk=lR,uR=new Io("auth","Firebase",lR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new nm("@firebase/auth");function gk(n,...e){wp.logLevel<=Ue.WARN&&wp.warn(`Auth (${na}): ${n}`,...e)}function Zf(n,...e){wp.logLevel<=Ue.ERROR&&wp.error(`Auth (${na}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n,...e){throw Nv(n,...e)}function Wt(n,...e){return Nv(n,...e)}function Pv(n,e,t){const i=Object.assign(Object.assign({},mk()),{[e]:t});return new Io("auth","Firebase",i).create(e,{appName:n.name})}function ln(n){return Pv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tu(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&_n(n,"argument-error"),Pv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nv(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return uR.create(n,...e)}function re(n,e,...t){if(!n)throw Nv(e,...t)}function ir(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Zf(e),new Error(e)}function Oi(n,e){n||ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xv(){return lb()==="http:"||lb()==="https:"}function lb(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xv()||HS()||"connection"in navigator)?navigator.onLine:!0}function yk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oi(t>e,"Short delay should be less than long delay!"),this.isMobile=kO()||bv()}get(){return _k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(n,e){Oi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Tk=new $h(3e4,6e4);function Dt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pt(n,e,t,i,a={}){return hR(n,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=vu(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:p},l);return LO()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Hh(n.emulatorConfig.host)&&(g.credentials="include"),cR.fetch()(await dR(n,n.config.apiHost,t,d),g)})}async function hR(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},vk),e);try{const a=new Ik(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Zc(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Zc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Zc(n,"user-disabled",c);const y=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Pv(n,y,g);_n(n,y)}}catch(a){if(a instanceof xn)throw a;_n(n,"network-request-failed",{message:String(a)})}}async function Kr(n,e,t,i,a={}){const l=await Pt(n,e,t,i,a);return"mfaPendingCredential"in l&&_n(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function dR(n,e,t,i){const a=`${e}${t}?${i}`,l=n,c=l.config.emulator?Ov(n.config,a):`${n.config.apiScheme}://${a}`;return Ek.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function wk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ik{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Wt(this.auth,"network-request-failed")),Tk.get())})}}function Zc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=Wt(n,e,i);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(n){return n!==void 0&&n.getResponse!==void 0}function cb(n){return n!==void 0&&n.enterprise!==void 0}class fR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return wk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(n){return(await Pt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function pR(n,e){return Pt(n,"GET","/v2/recaptchaConfig",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(n,e){return Pt(n,"POST","/v1/accounts:delete",e)}async function Sk(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function Ip(n,e){return Pt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rk(n,e=!1){const t=Ie(n),i=await t.getIdToken(e),a=im(i);re(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:oh(ny(a.auth_time)),issuedAtTime:oh(ny(a.iat)),expirationTime:oh(ny(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function ny(n){return Number(n)*1e3}function im(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Zf("JWT malformed, contained fewer than 3 sections"),null;try{const a=vv(t);return a?JSON.parse(a):(Zf("Failed to decode base64 JWT payload"),null)}catch(a){return Zf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function hb(n){const e=im(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof xn&&Ck(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Ck({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oh(this.lastLoginAt),this.creationTime=oh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(n){var e;const t=n.auth,i=await n.getIdToken(),a=await jr(n,Ip(t,{idToken:i}));re(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?mR(l.providerUserInfo):[],d=Nk(n.providerData,c),p=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?g:!1,v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Cy(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function Pk(n){const e=Ie(n);await bh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nk(n,e){return[...n.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function mR(n){return n.map(e=>{var{providerId:t}=e,i=Dv(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(n,e){const t=await hR(n,{},async()=>{const i=vu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await dR(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",cR.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ok(n,e){return Pt(n,"POST","/v2/accounts:revokeToken",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=hb(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await xk(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,c=new Ll;return i&&(re(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(re(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(re(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ll,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pi{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,l=Dv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Cy(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await jr(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rk(this,e)}reload(){return Pk(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await bh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gt(this.auth.app))return Promise.reject(ln(this.auth));const e=await this.getIdToken();return await jr(this,Ak(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,l,c,d,p,g,y;const v=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,C=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,L=(c=t.photoURL)!==null&&c!==void 0?c:void 0,j=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ie=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ne=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:X,emailVerified:fe,isAnonymous:ae,providerData:ce,stsTokenManager:S}=t;re(X&&S,e,"internal-error");const A=Ll.fromJSON(this.name,S);re(typeof X=="string",e,"internal-error"),Rs(v,e.name),Rs(w,e.name),re(typeof fe=="boolean",e,"internal-error"),re(typeof ae=="boolean",e,"internal-error"),Rs(C,e.name),Rs(L,e.name),Rs(j,e.name),Rs(U,e.name),Rs(ie,e.name),Rs(ne,e.name);const D=new Pi({uid:X,auth:e,email:w,emailVerified:fe,displayName:v,isAnonymous:ae,photoURL:L,phoneNumber:C,tenantId:j,stsTokenManager:A,createdAt:ie,lastLoginAt:ne});return ce&&Array.isArray(ce)&&(D.providerData=ce.map(O=>Object.assign({},O))),U&&(D._redirectEventId=U),D}static async _fromIdTokenResponse(e,t,i=!1){const a=new Ll;a.updateFromServerResponse(t);const l=new Pi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await bh(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];re(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?mR(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Ll;d.updateFromIdToken(i);const p=new Pi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Cy(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new Map;function ii(n){Oi(n instanceof Function,"Expected a class definition");let e=db.get(n);return e?(Oi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,db.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gR.type="NONE";const Xl=gR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n,e,t){return`firebase:${n}:${e}:${t}`}class Ul{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=oo(this.userKey,a.apiKey,l),this.fullPersistenceKey=oo("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ip(this.auth,{idToken:e}).catch(()=>{});return t?Pi._fromGetAccountInfoResponse(this.auth,t,e):null}return Pi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ul(ii(Xl),e,i);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ii(Xl);const c=oo(i,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let v;if(typeof y=="string"){const w=await Ip(e,{idToken:y}).catch(()=>{});if(!w)break;v=await Pi._fromGetAccountInfoResponse(e,w,y)}else v=Pi._fromJSON(e,y);g!==l&&(d=v),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ul(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Ul(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ER(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_R(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(TR(e))return"Blackberry";if(wR(e))return"Webos";if(yR(e))return"Safari";if((e.includes("chrome/")||vR(e))&&!e.includes("edge/"))return"Chrome";if(Kh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _R(n=It()){return/firefox\//i.test(n)}function yR(n=It()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vR(n=It()){return/crios\//i.test(n)}function ER(n=It()){return/iemobile/i.test(n)}function Kh(n=It()){return/android/i.test(n)}function TR(n=It()){return/blackberry/i.test(n)}function wR(n=It()){return/webos/i.test(n)}function Qh(n=It()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vk(n=It()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function kk(n=It()){var e;return Qh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mk(){return $S()&&document.documentMode===10}function IR(n=It()){return Qh(n)||Kh(n)||wR(n)||TR(n)||/windows phone/i.test(n)||ER(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(n,e=[]){let t;switch(n){case"Browser":t=fb(It());break;case"Worker":t=`${fb(It())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${na}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(n,e={}){return Pt(n,"GET","/v2/passwordPolicy",Dt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=6;class zk{constructor(e){var t,i,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Bk,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pb(this),this.idTokenSubscription=new pb(this),this.beforeStateQueue=new Lk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ii(t)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await Ul.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ip(this,{idToken:e}),i=await Pi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(gt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gt(this.app))return Promise.reject(ln(this));const t=e?Ie(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gt(this.app)?Promise.reject(ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gt(this.app)?Promise.reject(ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ii(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Uk(this),t=new zk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Io("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Ok(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ii(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await Ul.create(this,[ii(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return Ie(n)}class pb{constructor(e){this.auth=e,this.observer=null,this.addObserver=QS(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qk(n){Yh=n}function Vv(n){return Yh.loadJS(n)}function jk(){return Yh.recaptchaV2Script}function Gk(){return Yh.recaptchaEnterpriseScript}function Hk(){return Yh.gapiScript}function AR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=500,Kk=6e4,zf=1e12;class Qk{constructor(e){this.auth=e,this.counter=zf,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new Xk(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||zf;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||zf;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||zf;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class Yk{constructor(){this.enterprise=new Wk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Wk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Xk{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;re(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Jk(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Kk)},$k))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Jk(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const Zk="recaptcha-enterprise",lh="NO_RECAPTCHA";class SR{constructor(e){this.type=Zk,this.auth=bt(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{pR(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new fR(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;cb(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(lh)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Yk().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&cb(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Gk();p.length!==0&&(p+=d),Vv(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function jc(n,e,t,i=!1,a=!1){const l=new SR(n);let c;if(a)c=lh;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Bs(n,e,t,i,a){var l,c;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await jc(n,e,t,t==="getOobCode");return i(n,d)}else return i(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await jc(n,e,t,t==="getOobCode");return i(n,p)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((c=n._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("PHONE_PROVIDER")){const d=await jc(n,e,t);return i(n,d).catch(async p=>{var g;if(((g=n._getRecaptchaConfig())===null||g===void 0?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await jc(n,e,t,!1,!0);return i(n,y)}return Promise.reject(p)})}else{const d=await jc(n,e,t,!1,!0);return i(n,d)}else return Promise.reject(a+" provider is not supported.")}async function e2(n){const e=bt(n),t=await pR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new fR(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new SR(e).verify()}function t2(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ii);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function n2(n,e,t){const i=bt(n);re(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),l=RR(e),{host:c,port:d}=i2(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){re(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),re(js(g,i.config.emulator)&&js(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,Hh(c)?(wv("Auth",!0),jS(`${l}//${c}${p}`)):a||r2()}function RR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function i2(n){const e=RR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:mb(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:mb(c)}}}function mb(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function r2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,t){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(n,e){return Pt(n,"POST","/v1/accounts:resetPassword",Dt(n,e))}async function s2(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function a2(n,e){return Pt(n,"POST","/v1/accounts:signUp",e)}async function o2(n,e){return Pt(n,"POST","/v1/accounts:update",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(n,e){return Kr(n,"POST","/v1/accounts:signInWithPassword",Dt(n,e))}async function rm(n,e){return Pt(n,"POST","/v1/accounts:sendOobCode",Dt(n,e))}async function u2(n,e){return rm(n,e)}async function c2(n,e){return rm(n,e)}async function h2(n,e){return rm(n,e)}async function d2(n,e){return rm(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(n,e){return Kr(n,"POST","/v1/accounts:signInWithEmailLink",Dt(n,e))}async function p2(n,e){return Kr(n,"POST","/v1/accounts:signInWithEmailLink",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends wu{constructor(e,t,i,a=null){super("password",i),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Ah(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ah(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bs(e,t,"signInWithPassword",l2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return f2(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bs(e,i,"signUpPassword",a2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return p2(e,{idToken:t,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n,e){return Kr(n,"POST","/v1/accounts:signInWithIdp",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2="http://localhost";class ur extends wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,l=Dv(t,["providerId","signInMethod"]);if(!i||!a)return null;const c=new ur(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Fr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}buildRequest(){const e={requestUri:m2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(n,e){return Pt(n,"POST","/v1/accounts:sendVerificationCode",Dt(n,e))}async function g2(n,e){return Kr(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,e))}async function _2(n,e){const t=await Kr(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,e));if(t.temporaryProof)throw Zc(n,"account-exists-with-different-credential",t);return t}const y2={USER_NOT_FOUND:"user-not-found"};async function v2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Kr(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,t),y2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends wu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new lo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new lo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return g2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return _2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return v2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l}=e;return!i&&!t&&!a&&!l?null:new lo({verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T2(n){const e=kl(Jc(n)).link,t=e?kl(Jc(e)).deep_link_id:null,i=kl(Jc(n)).deep_link_id;return(i?kl(Jc(i)).link:null)||i||t||e||n}class sm{constructor(e){var t,i,a,l,c,d;const p=kl(Jc(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(i=p.oobCode)!==null&&i!==void 0?i:null,v=E2((a=p.mode)!==null&&a!==void 0?a:null);re(g&&y&&v,"argument-error"),this.apiKey=g,this.operation=v,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=T2(e);try{return new sm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.providerId=ia.PROVIDER_ID}static credential(e,t){return Ah._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=sm.parseLink(t);return re(i,"argument-error"),Ah._fromEmailAndCode(e,i.code,i.tenantId)}}ia.PROVIDER_ID="password";ia.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ia.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends Qr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Bl extends Iu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return re("providerId"in t&&"signInMethod"in t,"argument-error"),ur._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return re(e.idToken||e.accessToken,"argument-error"),ur._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Bl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Bl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:a,pendingToken:l,nonce:c,providerId:d}=e;if(!i&&!a&&!t&&!l||!d)return null;try{return new Bl(d)._credential({idToken:t,accessToken:i,nonce:c,pendingToken:l})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Iu{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:Zi.PROVIDER_ID,signInMethod:Zi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zi.credentialFromTaggedObject(e)}static credentialFromError(e){return Zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zi.credential(e.oauthAccessToken)}catch{return null}}}Zi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Iu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ur._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return er.credential(t,i)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Iu{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2="http://localhost";class Jl extends wu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Fr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,pendingToken:l}=t;return!i||!a||!l||i!==a?null:new Jl(i,l)}static _create(e,t){return new Jl(e,t)}buildRequest(){return{requestUri:w2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2="saml.";class bp extends Qr{constructor(e){re(e.startsWith(I2),"argument-error"),super(e)}static credentialFromResult(e){return bp.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bp.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Jl.fromJSON(e);return re(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Jl._create(i,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Iu{constructor(){super("twitter.com")}static credential(e,t){return ur._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return nr.credential(t,i)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(n,e){return Kr(n,"POST","/v1/accounts:signUp",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await Pi._fromIdTokenResponse(e,i,a),c=_b(i);return new wi({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=_b(i);return new wi({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function _b(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(n){var e;if(gt(n.app))return Promise.reject(ln(n));const t=bt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new wi({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await DR(t,{returnSecureToken:!0}),a=await wi._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap extends xn{constructor(e,t,i,a){var l;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,Ap.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new Ap(e,t,i,a)}}function PR(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ap._fromErrorAndOperation(n,l,e,i):l})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(n,e){const t=Ie(n);await am(!0,t,e);const{providerUserInfo:i}=await Sk(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=NR(i||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function kv(n,e,t=!1){const i=await jr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wi._forOperation(n,"link",i)}async function am(n,e,t){await bh(e);const i=NR(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";re(i.has(t)===n,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(n,e,t=!1){const{auth:i}=n;if(gt(i.app))return Promise.reject(ln(i));const a="reauthenticate";try{const l=await jr(n,PR(i,a,e,n),t);re(l.idToken,i,"internal-error");const c=im(l.idToken);re(c,i,"internal-error");const{sub:d}=c;return re(n.uid===d,i,"user-mismatch"),wi._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&_n(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(n,e,t=!1){if(gt(n.app))return Promise.reject(ln(n));const i="signIn",a=await PR(n,i,e),l=await wi._fromIdTokenResponse(n,i,a);return t||await n._updateCurrentUser(l.user),l}async function om(n,e){return OR(bt(n),e)}async function VR(n,e){const t=Ie(n);return await am(!1,t,e.providerId),kv(t,e)}async function kR(n,e){return xR(Ie(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S2(n,e){return Kr(n,"POST","/v1/accounts:signInWithCustomToken",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(n,e){if(gt(n.app))return Promise.reject(ln(n));const t=bt(n),i=await S2(t,{token:e,returnSecureToken:!0}),a=await wi._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Mv._fromServerResponse(e,t):"totpInfo"in t?Lv._fromServerResponse(e,t):_n(e,"internal-error")}}class Mv extends Wh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Mv(t)}}class Lv extends Wh{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Lv(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(n,e,t){var i;re(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),re(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),re(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(re(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(re(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function C2(n,e,t){const i=bt(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&lm(i,a,t),await Bs(i,a,"getOobCode",c2,"EMAIL_PASSWORD_PROVIDER")}async function D2(n,e,t){await CR(Ie(n),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Uv(n),i})}async function P2(n,e){await o2(Ie(n),{oobCode:e})}async function MR(n,e){const t=Ie(n),i=await CR(t,{oobCode:e}),a=i.requestType;switch(re(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":re(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":re(i.mfaInfo,t,"internal-error");default:re(i.email,t,"internal-error")}let l=null;return i.mfaInfo&&(l=Wh._fromServerResponse(bt(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:l},operation:a}}async function N2(n,e){const{data:t}=await MR(Ie(n),e);return t.email}async function x2(n,e,t){if(gt(n.app))return Promise.reject(ln(n));const i=bt(n),c=await Bs(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DR,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Uv(n),p}),d=await wi._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function O2(n,e,t){return gt(n.app)?Promise.reject(ln(n)):om(Ie(n),ia.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Uv(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(n,e,t){const i=bt(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(c,d){re(d.handleCodeInApp,i,"argument-error"),d&&lm(i,c,d)}l(a,t),await Bs(i,a,"getOobCode",h2,"EMAIL_PASSWORD_PROVIDER")}function k2(n,e){const t=sm.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function M2(n,e,t){if(gt(n.app))return Promise.reject(ln(n));const i=Ie(n),a=ia.credentialWithLink(e,t||Ih());return re(a._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),om(i,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(n,e){return Pt(n,"POST","/v1/accounts:createAuthUri",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(n,e){const t=xv()?Ih():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:a}=await L2(Ie(n),i);return a||[]}async function B2(n,e){const t=Ie(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&lm(t.auth,a,e);const{email:l}=await u2(t.auth,a);l!==n.email&&await n.reload()}async function z2(n,e,t){const i=Ie(n),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&lm(i.auth,l,t);const{email:c}=await d2(i.auth,l);c!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(n,e){return Pt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q2(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Ie(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await jr(i,F2(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function j2(n,e){const t=Ie(n);return gt(t.auth.app)?Promise.reject(ln(t.auth)):LR(t,e,null)}function G2(n,e){return LR(Ie(n),null,e)}async function LR(n,e,t){const{auth:i}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await jr(n,s2(i,l));await n._updateTokensIfNecessary(c,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(n){var e,t;if(!n)return null;const{providerId:i}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},l=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n!=null&&n.idToken)){const c=(t=(e=im(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(c){const d=c!=="anonymous"&&c!=="custom"?c:null;return new zl(l,d)}}if(!i)return null;switch(i){case"facebook.com":return new $2(l,a);case"github.com":return new K2(l,a);case"google.com":return new Q2(l,a);case"twitter.com":return new Y2(l,a,n.screenName||null);case"custom":case"anonymous":return new zl(l,null);default:return new zl(l,i,a)}}class zl{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class UR extends zl{constructor(e,t,i,a){super(e,t,i),this.username=a}}class $2 extends zl{constructor(e,t){super(e,"facebook.com",t)}}class K2 extends UR{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Q2 extends zl{constructor(e,t){super(e,"google.com",t)}}class Y2 extends UR{constructor(e,t,i){super(e,"twitter.com",t,i)}}function W2(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:H2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new to("enroll",e,t)}static _fromMfaPendingCredential(e){return new to("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return to._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return to._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=bt(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(d=>Wh._fromServerResponse(i,d));re(a.mfaPendingCredential,i,"internal-error");const c=to._fromMfaPendingCredential(a.mfaPendingCredential);return new Bv(c,l,async d=>{const p=await d._process(i,c);delete a.mfaInfo,delete a.mfaPendingCredential;const g=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const y=await wi._fromIdTokenResponse(i,t.operationType,g);return await i._updateCurrentUser(y.user),y;case"reauthenticate":return re(t.user,i,"internal-error"),wi._forOperation(t.user,t.operationType,g);default:_n(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function X2(n,e){var t;const i=Ie(n),a=e;return re(e.customData.operationType,i,"argument-error"),re((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),Bv._fromError(i,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:start",Dt(n,e))}function J2(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Dt(n,e))}function Z2(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Dt(n,e))}class zv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Wh._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new zv(e)}async getSession(){return to._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,a=await this.getSession(),l=await jr(this.user,i._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const a=await jr(this.user,Z2(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const iy=new WeakMap;function eM(n){const e=Ie(n);return iy.has(e)||iy.set(e,zv._fromUser(e)),iy.get(e)}const Sp="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Sp,"1"),this.storage.removeItem(Sp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=1e3,nM=10;class zR extends BR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=IR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);Mk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,nM):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},tM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zR.type="LOCAL";const Fv=zR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR extends BR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}FR.type="SESSION";const co=FR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new um(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await iM(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}um.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=Xh("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function sM(n){qt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function aM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oM(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lM(){return qv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="firebaseLocalStorageDb",uM=1,Rp="firebaseLocalStorage",jR="fbase_key";class Jh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cm(n,e){return n.transaction([Rp],e?"readwrite":"readonly").objectStore(Rp)}function cM(){const n=indexedDB.deleteDatabase(qR);return new Jh(n).toPromise()}function Dy(){const n=indexedDB.open(qR,uM);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Rp,{keyPath:jR})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Rp)?e(i):(i.close(),await cM(),e(await Dy()))})})}async function vb(n,e,t){const i=cm(n,!0).put({[jR]:e,value:t});return new Jh(i).toPromise()}async function hM(n,e){const t=cm(n,!1).get(e),i=await new Jh(t).toPromise();return i===void 0?null:i.value}function Eb(n,e){const t=cm(n,!0).delete(e);return new Jh(t).toPromise()}const dM=800,fM=3;class GR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dy(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>fM)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=um._getInstance(lM()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await aM(),!this.activeServiceWorker)return;this.sender=new rM(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dy();return await vb(e,Sp,"1"),await Eb(e,Sp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>vb(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>hM(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Eb(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=cm(a,!1).getAll();return new Jh(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GR.type="LOCAL";const Sh=GR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:start",Dt(n,e))}function pM(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:finalize",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=AR("rcb"),mM=new $h(3e4,6e4);class gM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=qt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return re(_M(t),e,"argument-error"),this.shouldResolveImmediately(t)&&ub(qt().grecaptcha)?Promise.resolve(qt().grecaptcha):new Promise((i,a)=>{const l=qt().setTimeout(()=>{a(Wt(e,"network-request-failed"))},mM.get());qt()[ry]=()=>{qt().clearTimeout(l),delete qt()[ry];const d=qt().grecaptcha;if(!d||!ub(d)){a(Wt(e,"internal-error"));return}const p=d.render;d.render=(g,y)=>{const v=p(g,y);return this.counter++,v},this.hostLanguage=t,i(d)};const c=`${jk()}?${vu({onload:ry,render:"explicit",hl:t})}`;Vv(c).catch(()=>{clearTimeout(l),a(Wt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=qt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _M(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class yM{async load(e){return new Qk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="recaptcha",vM={theme:"light",type:"image"};let EM=class{constructor(e,t,i=Object.assign({},vM)){this.parameters=i,this.type=uh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",re(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;re(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new yM:new gM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(a=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),a(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){re(!this.parameters.sitekey,this.auth,"argument-error"),re(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),re(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=qt()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){re(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){re(xv()&&!qv(),this.auth,"internal-error"),await TM(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bk(this.auth);re(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return re(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function TM(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=lo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function wM(n,e,t){if(gt(n.app))return Promise.reject(ln(n));const i=bt(n),a=await hm(i,e,Ie(t));return new jv(a,l=>om(i,l))}async function IM(n,e,t){const i=Ie(n);await am(!1,i,"phone");const a=await hm(i.auth,e,Ie(t));return new jv(a,l=>VR(i,l))}async function bM(n,e,t){const i=Ie(n);if(gt(i.auth.app))return Promise.reject(ln(i.auth));const a=await hm(i.auth,e,Ie(t));return new jv(a,l=>kR(i,l))}async function hm(n,e,t){var i;if(!n._getRecaptchaConfig())try{await e2(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a){re(l.type==="enroll",n,"internal-error");const c={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Bs(n,c,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===lh){re((t==null?void 0:t.type)===uh,y,"argument-error");const w=await sy(y,v,t);return yb(y,w)}return yb(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{re(l.type==="signin",n,"internal-error");const c=((i=a.multiFactorHint)===null||i===void 0?void 0:i.uid)||a.multiFactorUid;re(c,n,"missing-multi-factor-info");const d={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Bs(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===lh){re((t==null?void 0:t.type)===uh,v,"argument-error");const C=await sy(v,w,t);return Tb(v,C)}return Tb(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Bs(n,l,"sendVerificationCode",async(g,y)=>{if(y.captchaResponse===lh){re((t==null?void 0:t.type)===uh,g,"argument-error");const v=await sy(g,y,t);return gb(g,v)}return gb(g,y)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).sessionInfo}}finally{t==null||t._reset()}}async function AM(n,e){const t=Ie(n);if(gt(t.auth.app))return Promise.reject(ln(t.auth));await kv(t,e)}async function sy(n,e,t){re(t.type===uh,n,"argument-error");const i=await t.verify();re(typeof i=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:i,captchaResponse:c,clientType:d,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.captchaResponse,c=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:l,clientType:c,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:i}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho=class ep{constructor(e){this.providerId=ep.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return hm(this.auth,e,Ie(t))}static credential(e,t){return lo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ep.credentialFromTaggedObject(t)}static credentialFromError(e){return ep.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?lo._fromTokenResponse(t,i):null}};ho.PROVIDER_ID="phone";ho.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n,e){return e?ii(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv extends wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function SM(n){return OR(n.auth,new Gv(n),n.bypassAuthState)}function RM(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),xR(t,new Gv(n),n.bypassAuthState)}async function CM(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),kv(t,new Gv(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SM;case"linkViaPopup":case"linkViaRedirect":return CM;case"reauthViaPopup":case"reauthViaRedirect":return RM;default:_n(this.auth,"internal-error")}}resolve(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=new $h(2e3,1e4);async function PM(n,e,t){if(gt(n.app))return Promise.reject(Wt(n,"operation-not-supported-in-this-environment"));const i=bt(n);Tu(n,e,Qr);const a=bo(i,t);return new Br(i,"signInViaPopup",e,a).executeNotNull()}async function NM(n,e,t){const i=Ie(n);if(gt(i.auth.app))return Promise.reject(Wt(i.auth,"operation-not-supported-in-this-environment"));Tu(i.auth,e,Qr);const a=bo(i.auth,t);return new Br(i.auth,"reauthViaPopup",e,a,i).executeNotNull()}async function xM(n,e,t){const i=Ie(n);Tu(i.auth,e,Qr);const a=bo(i.auth,t);return new Br(i.auth,"linkViaPopup",e,a,i).executeNotNull()}class Br extends HR{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Oi(this.filter.length===1,"Popup operations only handle one event");const e=Xh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DM.get())};e()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM="pendingRedirect",ch=new Map;class VM extends HR{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ch.get(this.auth._key());if(!e){try{const i=await kM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ch.set(this.auth._key(),e)}return this.bypassAuthState||ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kM(n,e){const t=KR(e),i=$R(n);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}async function Hv(n,e){return $R(n)._set(KR(e),"true")}function MM(){ch.clear()}function $v(n,e){ch.set(n._key(),e)}function $R(n){return ii(n._redirectPersistence)}function KR(n){return oo(OM,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(n,e,t){return UM(n,e,t)}async function UM(n,e,t){if(gt(n.app))return Promise.reject(ln(n));const i=bt(n);Tu(n,e,Qr),await i._initializationPromise;const a=bo(i,t);return await Hv(a,i),a._openRedirect(i,e,"signInViaRedirect")}function BM(n,e,t){return zM(n,e,t)}async function zM(n,e,t){const i=Ie(n);if(Tu(i.auth,e,Qr),gt(i.auth.app))return Promise.reject(ln(i.auth));await i.auth._initializationPromise;const a=bo(i.auth,t);await Hv(a,i.auth);const l=await QR(i);return a._openRedirect(i.auth,e,"reauthViaRedirect",l)}function FM(n,e,t){return qM(n,e,t)}async function qM(n,e,t){const i=Ie(n);Tu(i.auth,e,Qr),await i.auth._initializationPromise;const a=bo(i.auth,t);await am(!1,i,e.providerId),await Hv(a,i.auth);const l=await QR(i);return a._openRedirect(i.auth,e,"linkViaRedirect",l)}async function jM(n,e){return await bt(n)._initializationPromise,dm(n,e,!1)}async function dm(n,e,t=!1){if(gt(n.app))return Promise.reject(ln(n));const i=bt(n),a=bo(i,e),c=await new VM(i,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}async function QR(n){const e=Xh(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=10*60*1e3;class YR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HM(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!WR(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Wt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GM&&this.cachedEventUids.clear(),this.cachedEventUids.has(wb(e))}saveEventToCache(e){this.cachedEventUids.add(wb(e)),this.lastProcessedEventTime=Date.now()}}function wb(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function WR({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WR(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(n,e={}){return Pt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KM=/^https?/;async function QM(n){if(n.config.emulator)return;const{authorizedDomains:e}=await XR(n);for(const t of e)try{if(YM(t))return}catch{}_n(n,"unauthorized-domain")}function YM(n){const e=Ih(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!KM.test(t))return!1;if($M.test(n))return i===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=new $h(3e4,6e4);function Ib(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function XM(n){return new Promise((e,t)=>{var i,a,l;function c(){Ib(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ib(),t(Wt(n,"network-request-failed"))},timeout:WM.get()})}if(!((a=(i=qt().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=qt().gapi)===null||l===void 0)&&l.load)c();else{const d=AR("iframefcb");return qt()[d]=()=>{gapi.load?c():t(Wt(n,"network-request-failed"))},Vv(`${Hk()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw tp=null,e})}let tp=null;function JM(n){return tp=tp||XM(n),tp}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=new $h(5e3,15e3),e4="__/auth/iframe",t4="emulator/auth/iframe",n4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r4(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ov(e,t4):`https://${n.config.authDomain}/${e4}`,i={apiKey:e.apiKey,appName:n.name,v:na},a=i4.get(n.config.apiHost);a&&(i.eid=a);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${vu(i).slice(1)}`}async function s4(n){const e=await JM(n),t=qt().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:r4(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n4,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=Wt(n,"network-request-failed"),d=qt().setTimeout(()=>{l(c)},ZM.get());function p(){qt().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o4=500,l4=600,u4="_blank",c4="http://localhost";class bb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function h4(n,e,t,i=o4,a=l4){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},a4),{width:i.toString(),height:a.toString(),top:l,left:c}),g=It().toLowerCase();t&&(d=vR(g)?u4:t),_R(g)&&(e=e||c4,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[C,L])=>`${w}${C}=${L},`,"");if(kk(g)&&d!=="_self")return d4(e||"",d),new bb(null);const v=window.open(e||"",d,y);re(v,n,"popup-blocked");try{v.focus()}catch{}return new bb(v)}function d4(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4="__/auth/handler",p4="emulator/auth/handler",m4=encodeURIComponent("fac");async function Py(n,e,t,i,a,l){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:na,eventId:a};if(e instanceof Qr){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",qO(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(l||{}))c[y]=v}if(e instanceof Iu){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${m4}=${encodeURIComponent(p)}`:"";return`${g4(n)}?${vu(d).slice(1)}${g}`}function g4({config:n}){return n.emulator?Ov(n,p4):`https://${n.authDomain}/${f4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="webStorageSupport";class _4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=co,this._completeRedirectFn=dm,this._overrideRedirectResult=$v}async _openPopup(e,t,i,a){var l;Oi((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Py(e,t,i,Ih(),a);return h4(e,c,Xh())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await Py(e,t,i,Ih(),a);return sM(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Oi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await s4(e),i=new YR(e);return t.register("authEvent",a=>(re(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ay,{type:ay},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[ay];c!==void 0&&t(!!c),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return IR()||yR()||Qh()}}const y4=_4;class v4{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return ir("unexpected MultiFactorSessionType")}}}class Kv extends v4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Kv(e)}_finalizeEnroll(e,t,i){return J2(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return pM(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class JR{constructor(){}static assertion(e){return Kv._fromCredential(e)}}JR.FACTOR_ID="phone";var Ab="@firebase/auth",Sb="1.10.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function w4(n){$s(new lr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;re(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bR(n)},g=new Fk(i,a,l,p);return t2(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),$s(new lr("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(i=>new E4(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xi(Ab,Sb,T4(n)),xi(Ab,Sb,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4=5*60;PO("authIdTokenMaxAge");function b4(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}qk({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=a=>{const l=Wt("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",b4().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});w4("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4=2e3;async function S4(n,e,t){var i;const{BuildInfo:a}=fo();Oi(e.sessionId,"AuthEvent did not contain a session ID");const l=await N4(e.sessionId),c={};return Qh()?c.ibi=a.packageName:Kh()?c.apn=a.packageName:_n(n,"operation-not-supported-in-this-environment"),a.displayName&&(c.appDisplayName=a.displayName),c.sessionId=l,Py(n,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,c)}async function R4(n){const{BuildInfo:e}=fo(),t={};Qh()?t.iosBundleId=e.packageName:Kh()?t.androidPackageName=e.packageName:_n(n,"operation-not-supported-in-this-environment"),await XR(n,t)}function C4(n){const{cordova:e}=fo();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let a=null;i?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,Vk()?"_blank":"_system","location=yes"),t(a)})})}async function D4(n,e,t){const{cordova:i}=fo();let a=()=>{};try{await new Promise((l,c)=>{let d=null;function p(){var v;l();const w=(v=i.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){d||(d=window.setTimeout(()=>{c(Wt(n,"redirect-cancelled-by-user"))},A4))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),Kh()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",y,!1),d&&window.clearTimeout(d)}})}finally{a()}}function P4(n){var e,t,i,a,l,c,d,p,g,y;const v=fo();re(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),re(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),re(typeof((l=(a=(i=v==null?void 0:v.cordova)===null||i===void 0?void 0:i.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),re(typeof((p=(d=(c=v==null?void 0:v.cordova)===null||c===void 0?void 0:c.plugins)===null||d===void 0?void 0:d.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),re(typeof((y=(g=v==null?void 0:v.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function N4(n){const e=x4(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function x4(n){if(Oi(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4=20;class V4 extends YR{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function k4(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:U4(),postBody:null,tenantId:n.tenantId,error:Wt(n,"no-auth-event")}}function M4(n,e){return Ny()._set(xy(n),e)}async function Rb(n){const e=await Ny()._get(xy(n));return e&&await Ny()._remove(xy(n)),e}function L4(n,e){var t,i;const a=z4(e);if(a.includes("/__/auth/callback")){const l=np(a),c=l.firebaseError?B4(decodeURIComponent(l.firebaseError)):null,d=(i=(t=c==null?void 0:c.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],p=d?Wt(d):null;return p?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function U4(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<O4;t++){const i=Math.floor(Math.random()*e.length);n.push(e.charAt(i))}return n.join("")}function Ny(){return ii(Fv)}function xy(n){return oo("authEvent",n.config.apiKey,n.name)}function B4(n){try{return JSON.parse(n)}catch{return null}}function z4(n){const e=np(n),t=e.link?decodeURIComponent(e.link):void 0,i=np(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return np(a).link||a||i||t||n}function np(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return kl(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4=500;class q4{constructor(){this._redirectPersistence=co,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=dm,this._overrideRedirectResult=$v}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new V4(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){_n(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,a){P4(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),MM(),await this._originValidation(e);const c=k4(e,i,a);await M4(e,c);const d=await S4(e,c,t),p=await C4(d);return D4(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=R4(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:a,BuildInfo:l}=fo(),c=setTimeout(async()=>{await Rb(e),t.onEvent(Cb())},F4),d=async y=>{clearTimeout(c);const v=await Rb(e);let w=null;v&&(y!=null&&y.url)&&(w=L4(v,y.url)),t.onEvent(w||Cb())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,d);const p=a,g=`${l.packageName.toLowerCase()}://`;fo().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(g)&&d({url:y}),typeof p=="function")try{p(y)}catch(v){console.error(v)}}}}const j4=q4;function Cb(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Wt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(n,e){bt(n)._logFramework(e)}var H4="@firebase/auth-compat",$4="0.5.24";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4=1e3;function hh(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function Q4(){return hh()==="http:"||hh()==="https:"}function ZR(n=It()){return!!((hh()==="file:"||hh()==="ionic:"||hh()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function Y4(){return bv()||Iv()}function W4(){return $S()&&(document==null?void 0:document.documentMode)===11}function X4(n=It()){return/Edge\/\d+/.test(n)}function J4(n=It()){return W4()||X4(n)}function e1(){try{const n=self.localStorage,e=Xh();if(n)return n.setItem(e,"1"),n.removeItem(e),J4()?Eh():!0}catch{return Qv()&&Eh()}return!1}function Qv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function oy(){return(Q4()||HS()||ZR())&&!Y4()&&e1()&&!Qv()}function t1(){return ZR()&&typeof document<"u"}async function Z4(){return t1()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},K4);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function eL(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={LOCAL:"local",NONE:"none",SESSION:"session"},Gc=re,n1="persistence";function tL(n,e){if(Gc(Object.values(ni).includes(e),n,"invalid-persistence-type"),bv()){Gc(e!==ni.SESSION,n,"unsupported-persistence-type");return}if(Iv()){Gc(e===ni.NONE,n,"unsupported-persistence-type");return}if(Qv()){Gc(e===ni.NONE||e===ni.LOCAL&&Eh(),n,"unsupported-persistence-type");return}Gc(e===ni.NONE||e1(),n,"unsupported-persistence-type")}async function Oy(n){await n._initializationPromise;const e=i1(),t=oo(n1,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function nL(n,e){const t=i1();if(!t)return[];const i=oo(n1,n,e);switch(t.getItem(i)){case ni.NONE:return[Xl];case ni.LOCAL:return[Sh,co];case ni.SESSION:return[co];default:return[]}}function i1(){var n;try{return((n=eL())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL=re;class ks{constructor(){this.browserResolver=ii(y4),this.cordovaResolver=ii(j4),this.underlyingResolver=null,this._redirectPersistence=co,this._completeRedirectFn=dm,this._overrideRedirectResult=$v}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,a)}async _openRedirect(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return t1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return iL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Z4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(n){return n.unwrap()}function rL(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(n){return s1(n)}function aL(n,e){var t;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new oL(n,X2(n,e))}else if(i){const a=s1(e),l=e;a&&(l.credential=a,l.tenantId=i.tenantId||void 0,l.email=i.email||void 0,l.phoneNumber=i.phoneNumber||void 0)}}function s1(n){const{_tokenResponse:e}=n instanceof xn?n.customData:n;if(!e)return null;if(!(n instanceof xn)&&"temporaryProof"in e&&"phoneNumber"in e)return ho.credentialFromResult(n);const t=e.providerId;if(!t||t===qc.PASSWORD)return null;let i;switch(t){case qc.GOOGLE:i=er;break;case qc.FACEBOOK:i=Zi;break;case qc.GITHUB:i=tr;break;case qc.TWITTER:i=nr;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:c,pendingToken:d,nonce:p}=e;return!l&&!c&&!a&&!d?null:d?t.startsWith("saml.")?Jl._create(t,d):ur._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:l}):new Bl(t).credential({idToken:a,accessToken:l,rawNonce:p})}return n instanceof xn?i.credentialFromError(n):i.credentialFromResult(n)}function Bn(n,e){return e.catch(t=>{throw t instanceof xn&&aL(n,t),t}).then(t=>{const i=t.operationType,a=t.user;return{operationType:i,credential:sL(t),additionalUserInfo:W2(t),user:fm.getOrCreate(a)}})}async function Vy(n,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>Bn(n,t.confirm(i))}}class oL{constructor(e,t){this.resolver=t,this.auth=rL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Bn(r1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fm=class eh{constructor(e){this._delegate=e,this.multiFactor=eM(e)}static getOrCreate(e){return eh.USER_MAP.has(e)||eh.USER_MAP.set(e,new eh(e)),eh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Bn(this.auth,VR(this._delegate,e))}async linkWithPhoneNumber(e,t){return Vy(this.auth,IM(this._delegate,e,t))}async linkWithPopup(e){return Bn(this.auth,xM(this._delegate,e,ks))}async linkWithRedirect(e){return await Oy(bt(this.auth)),FM(this._delegate,e,ks)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Bn(this.auth,kR(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Vy(this.auth,bM(this._delegate,e,t))}reauthenticateWithPopup(e){return Bn(this.auth,NM(this._delegate,e,ks))}async reauthenticateWithRedirect(e){return await Oy(bt(this.auth)),BM(this._delegate,e,ks)}sendEmailVerification(e){return B2(this._delegate,e)}async unlink(e){return await A2(this._delegate,e),this}updateEmail(e){return j2(this._delegate,e)}updatePassword(e){return G2(this._delegate,e)}updatePhoneNumber(e){return AM(this._delegate,e)}updateProfile(e){return q2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return z2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};fm.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=re;class ky{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;Hc(i,"invalid-api-key",{appName:e.name}),Hc(i,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?ks:void 0;this._delegate=t.initialize({options:{persistence:lL(i,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(pk),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?fm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){n2(this._delegate,e,t)}applyActionCode(e){return P2(this._delegate,e)}checkActionCode(e){return MR(this._delegate,e)}confirmPasswordReset(e,t){return D2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Bn(this._delegate,x2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return U2(this._delegate,e)}isSignInWithEmailLink(e){return k2(this._delegate,e)}async getRedirectResult(){Hc(oy(),this._delegate,"operation-not-supported-in-this-environment");const e=await jM(this._delegate,ks);return e?Bn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){G4(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:a,error:l,complete:c}=Db(e,t,i);return this._delegate.onAuthStateChanged(a,l,c)}onIdTokenChanged(e,t,i){const{next:a,error:l,complete:c}=Db(e,t,i);return this._delegate.onIdTokenChanged(a,l,c)}sendSignInLinkToEmail(e,t){return V2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return C2(this._delegate,e,t||void 0)}async setPersistence(e){tL(this._delegate,e);let t;switch(e){case ni.SESSION:t=co;break;case ni.LOCAL:t=await ii(Sh)._isAvailable()?Sh:Fv;break;case ni.NONE:t=Xl;break;default:return _n("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Bn(this._delegate,b2(this._delegate))}signInWithCredential(e){return Bn(this._delegate,om(this._delegate,e))}signInWithCustomToken(e){return Bn(this._delegate,R2(this._delegate,e))}signInWithEmailAndPassword(e,t){return Bn(this._delegate,O2(this._delegate,e,t))}signInWithEmailLink(e,t){return Bn(this._delegate,M2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Vy(this._delegate,wM(this._delegate,e,t))}async signInWithPopup(e){return Hc(oy(),this._delegate,"operation-not-supported-in-this-environment"),Bn(this._delegate,PM(this._delegate,e,ks))}async signInWithRedirect(e){return Hc(oy(),this._delegate,"operation-not-supported-in-this-environment"),await Oy(this._delegate),LM(this._delegate,e,ks)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return N2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ky.Persistence=ni;function Db(n,e,t){let i=n;typeof n!="function"&&({next:i,error:e,complete:t}=n);const a=i;return{next:c=>a(c&&fm.getOrCreate(c)),error:e,complete:t}}function lL(n,e){const t=nL(n,e);if(typeof self<"u"&&!t.includes(Sh)&&t.push(Sh),typeof window<"u")for(const i of[Fv,co])t.includes(i)||t.push(i);return t.includes(Xl)||t.push(Xl),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{static credential(e,t){return ho.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new ho(r1(Eu.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Yv.PHONE_SIGN_IN_METHOD=ho.PHONE_SIGN_IN_METHOD;Yv.PROVIDER_ID=ho.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL=re;class cL{constructor(e,t,i=Eu.app()){var a;uL((a=i.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new EM(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL="auth-compat";function dL(n){n.INTERNAL.registerComponent(new lr(hL,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new ky(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:wl.EMAIL_SIGNIN,PASSWORD_RESET:wl.PASSWORD_RESET,RECOVER_EMAIL:wl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:wl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:wl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:wl.VERIFY_EMAIL}},EmailAuthProvider:ia,FacebookAuthProvider:Zi,GithubAuthProvider:tr,GoogleAuthProvider:er,OAuthProvider:Bl,SAMLAuthProvider:bp,PhoneAuthProvider:Yv,PhoneMultiFactorGenerator:JR,RecaptchaVerifier:cL,TwitterAuthProvider:nr,Auth:ky,AuthCredential:wu,Error:xn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(H4,$4)}dL(Eu);var Pb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zs,a1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,A){function D(){}D.prototype=A.prototype,S.D=A.prototype,S.prototype=new D,S.prototype.constructor=S,S.C=function(O,V,M){for(var P=Array(arguments.length-2),Gt=2;Gt<arguments.length;Gt++)P[Gt-2]=arguments[Gt];return A.prototype[V].apply(O,P)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(S,A,D){D||(D=0);var O=Array(16);if(typeof A=="string")for(var V=0;16>V;++V)O[V]=A.charCodeAt(D++)|A.charCodeAt(D++)<<8|A.charCodeAt(D++)<<16|A.charCodeAt(D++)<<24;else for(V=0;16>V;++V)O[V]=A[D++]|A[D++]<<8|A[D++]<<16|A[D++]<<24;A=S.g[0],D=S.g[1],V=S.g[2];var M=S.g[3],P=A+(M^D&(V^M))+O[0]+3614090360&4294967295;A=D+(P<<7&4294967295|P>>>25),P=M+(V^A&(D^V))+O[1]+3905402710&4294967295,M=A+(P<<12&4294967295|P>>>20),P=V+(D^M&(A^D))+O[2]+606105819&4294967295,V=M+(P<<17&4294967295|P>>>15),P=D+(A^V&(M^A))+O[3]+3250441966&4294967295,D=V+(P<<22&4294967295|P>>>10),P=A+(M^D&(V^M))+O[4]+4118548399&4294967295,A=D+(P<<7&4294967295|P>>>25),P=M+(V^A&(D^V))+O[5]+1200080426&4294967295,M=A+(P<<12&4294967295|P>>>20),P=V+(D^M&(A^D))+O[6]+2821735955&4294967295,V=M+(P<<17&4294967295|P>>>15),P=D+(A^V&(M^A))+O[7]+4249261313&4294967295,D=V+(P<<22&4294967295|P>>>10),P=A+(M^D&(V^M))+O[8]+1770035416&4294967295,A=D+(P<<7&4294967295|P>>>25),P=M+(V^A&(D^V))+O[9]+2336552879&4294967295,M=A+(P<<12&4294967295|P>>>20),P=V+(D^M&(A^D))+O[10]+4294925233&4294967295,V=M+(P<<17&4294967295|P>>>15),P=D+(A^V&(M^A))+O[11]+2304563134&4294967295,D=V+(P<<22&4294967295|P>>>10),P=A+(M^D&(V^M))+O[12]+1804603682&4294967295,A=D+(P<<7&4294967295|P>>>25),P=M+(V^A&(D^V))+O[13]+4254626195&4294967295,M=A+(P<<12&4294967295|P>>>20),P=V+(D^M&(A^D))+O[14]+2792965006&4294967295,V=M+(P<<17&4294967295|P>>>15),P=D+(A^V&(M^A))+O[15]+1236535329&4294967295,D=V+(P<<22&4294967295|P>>>10),P=A+(V^M&(D^V))+O[1]+4129170786&4294967295,A=D+(P<<5&4294967295|P>>>27),P=M+(D^V&(A^D))+O[6]+3225465664&4294967295,M=A+(P<<9&4294967295|P>>>23),P=V+(A^D&(M^A))+O[11]+643717713&4294967295,V=M+(P<<14&4294967295|P>>>18),P=D+(M^A&(V^M))+O[0]+3921069994&4294967295,D=V+(P<<20&4294967295|P>>>12),P=A+(V^M&(D^V))+O[5]+3593408605&4294967295,A=D+(P<<5&4294967295|P>>>27),P=M+(D^V&(A^D))+O[10]+38016083&4294967295,M=A+(P<<9&4294967295|P>>>23),P=V+(A^D&(M^A))+O[15]+3634488961&4294967295,V=M+(P<<14&4294967295|P>>>18),P=D+(M^A&(V^M))+O[4]+3889429448&4294967295,D=V+(P<<20&4294967295|P>>>12),P=A+(V^M&(D^V))+O[9]+568446438&4294967295,A=D+(P<<5&4294967295|P>>>27),P=M+(D^V&(A^D))+O[14]+3275163606&4294967295,M=A+(P<<9&4294967295|P>>>23),P=V+(A^D&(M^A))+O[3]+4107603335&4294967295,V=M+(P<<14&4294967295|P>>>18),P=D+(M^A&(V^M))+O[8]+1163531501&4294967295,D=V+(P<<20&4294967295|P>>>12),P=A+(V^M&(D^V))+O[13]+2850285829&4294967295,A=D+(P<<5&4294967295|P>>>27),P=M+(D^V&(A^D))+O[2]+4243563512&4294967295,M=A+(P<<9&4294967295|P>>>23),P=V+(A^D&(M^A))+O[7]+1735328473&4294967295,V=M+(P<<14&4294967295|P>>>18),P=D+(M^A&(V^M))+O[12]+2368359562&4294967295,D=V+(P<<20&4294967295|P>>>12),P=A+(D^V^M)+O[5]+4294588738&4294967295,A=D+(P<<4&4294967295|P>>>28),P=M+(A^D^V)+O[8]+2272392833&4294967295,M=A+(P<<11&4294967295|P>>>21),P=V+(M^A^D)+O[11]+1839030562&4294967295,V=M+(P<<16&4294967295|P>>>16),P=D+(V^M^A)+O[14]+4259657740&4294967295,D=V+(P<<23&4294967295|P>>>9),P=A+(D^V^M)+O[1]+2763975236&4294967295,A=D+(P<<4&4294967295|P>>>28),P=M+(A^D^V)+O[4]+1272893353&4294967295,M=A+(P<<11&4294967295|P>>>21),P=V+(M^A^D)+O[7]+4139469664&4294967295,V=M+(P<<16&4294967295|P>>>16),P=D+(V^M^A)+O[10]+3200236656&4294967295,D=V+(P<<23&4294967295|P>>>9),P=A+(D^V^M)+O[13]+681279174&4294967295,A=D+(P<<4&4294967295|P>>>28),P=M+(A^D^V)+O[0]+3936430074&4294967295,M=A+(P<<11&4294967295|P>>>21),P=V+(M^A^D)+O[3]+3572445317&4294967295,V=M+(P<<16&4294967295|P>>>16),P=D+(V^M^A)+O[6]+76029189&4294967295,D=V+(P<<23&4294967295|P>>>9),P=A+(D^V^M)+O[9]+3654602809&4294967295,A=D+(P<<4&4294967295|P>>>28),P=M+(A^D^V)+O[12]+3873151461&4294967295,M=A+(P<<11&4294967295|P>>>21),P=V+(M^A^D)+O[15]+530742520&4294967295,V=M+(P<<16&4294967295|P>>>16),P=D+(V^M^A)+O[2]+3299628645&4294967295,D=V+(P<<23&4294967295|P>>>9),P=A+(V^(D|~M))+O[0]+4096336452&4294967295,A=D+(P<<6&4294967295|P>>>26),P=M+(D^(A|~V))+O[7]+1126891415&4294967295,M=A+(P<<10&4294967295|P>>>22),P=V+(A^(M|~D))+O[14]+2878612391&4294967295,V=M+(P<<15&4294967295|P>>>17),P=D+(M^(V|~A))+O[5]+4237533241&4294967295,D=V+(P<<21&4294967295|P>>>11),P=A+(V^(D|~M))+O[12]+1700485571&4294967295,A=D+(P<<6&4294967295|P>>>26),P=M+(D^(A|~V))+O[3]+2399980690&4294967295,M=A+(P<<10&4294967295|P>>>22),P=V+(A^(M|~D))+O[10]+4293915773&4294967295,V=M+(P<<15&4294967295|P>>>17),P=D+(M^(V|~A))+O[1]+2240044497&4294967295,D=V+(P<<21&4294967295|P>>>11),P=A+(V^(D|~M))+O[8]+1873313359&4294967295,A=D+(P<<6&4294967295|P>>>26),P=M+(D^(A|~V))+O[15]+4264355552&4294967295,M=A+(P<<10&4294967295|P>>>22),P=V+(A^(M|~D))+O[6]+2734768916&4294967295,V=M+(P<<15&4294967295|P>>>17),P=D+(M^(V|~A))+O[13]+1309151649&4294967295,D=V+(P<<21&4294967295|P>>>11),P=A+(V^(D|~M))+O[4]+4149444226&4294967295,A=D+(P<<6&4294967295|P>>>26),P=M+(D^(A|~V))+O[11]+3174756917&4294967295,M=A+(P<<10&4294967295|P>>>22),P=V+(A^(M|~D))+O[2]+718787259&4294967295,V=M+(P<<15&4294967295|P>>>17),P=D+(M^(V|~A))+O[9]+3951481745&4294967295,S.g[0]=S.g[0]+A&4294967295,S.g[1]=S.g[1]+(V+(P<<21&4294967295|P>>>11))&4294967295,S.g[2]=S.g[2]+V&4294967295,S.g[3]=S.g[3]+M&4294967295}i.prototype.u=function(S,A){A===void 0&&(A=S.length);for(var D=A-this.blockSize,O=this.B,V=this.h,M=0;M<A;){if(V==0)for(;M<=D;)a(this,S,M),M+=this.blockSize;if(typeof S=="string"){for(;M<A;)if(O[V++]=S.charCodeAt(M++),V==this.blockSize){a(this,O),V=0;break}}else for(;M<A;)if(O[V++]=S[M++],V==this.blockSize){a(this,O),V=0;break}}this.h=V,this.o+=A},i.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var A=1;A<S.length-8;++A)S[A]=0;var D=8*this.o;for(A=S.length-8;A<S.length;++A)S[A]=D&255,D/=256;for(this.u(S),S=Array(16),A=D=0;4>A;++A)for(var O=0;32>O;O+=8)S[D++]=this.g[A]>>>O&255;return S};function l(S,A){var D=d;return Object.prototype.hasOwnProperty.call(D,S)?D[S]:D[S]=A(S)}function c(S,A){this.h=A;for(var D=[],O=!0,V=S.length-1;0<=V;V--){var M=S[V]|0;O&&M==A||(D[V]=M,O=!1)}this.g=D}var d={};function p(S){return-128<=S&&128>S?l(S,function(A){return new c([A|0],0>A?-1:0)}):new c([S|0],0>S?-1:0)}function g(S){if(isNaN(S)||!isFinite(S))return v;if(0>S)return U(g(-S));for(var A=[],D=1,O=0;S>=D;O++)A[O]=S/D|0,D*=4294967296;return new c(A,0)}function y(S,A){if(S.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(S.charAt(0)=="-")return U(y(S.substring(1),A));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var D=g(Math.pow(A,8)),O=v,V=0;V<S.length;V+=8){var M=Math.min(8,S.length-V),P=parseInt(S.substring(V,V+M),A);8>M?(M=g(Math.pow(A,M)),O=O.j(M).add(g(P))):(O=O.j(D),O=O.add(g(P)))}return O}var v=p(0),w=p(1),C=p(16777216);n=c.prototype,n.m=function(){if(j(this))return-U(this).m();for(var S=0,A=1,D=0;D<this.g.length;D++){var O=this.i(D);S+=(0<=O?O:4294967296+O)*A,A*=4294967296}return S},n.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(L(this))return"0";if(j(this))return"-"+U(this).toString(S);for(var A=g(Math.pow(S,6)),D=this,O="";;){var V=fe(D,A).g;D=ie(D,V.j(A));var M=((0<D.g.length?D.g[0]:D.h)>>>0).toString(S);if(D=V,L(D))return M+O;for(;6>M.length;)M="0"+M;O=M+O}},n.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function L(S){if(S.h!=0)return!1;for(var A=0;A<S.g.length;A++)if(S.g[A]!=0)return!1;return!0}function j(S){return S.h==-1}n.l=function(S){return S=ie(this,S),j(S)?-1:L(S)?0:1};function U(S){for(var A=S.g.length,D=[],O=0;O<A;O++)D[O]=~S.g[O];return new c(D,~S.h).add(w)}n.abs=function(){return j(this)?U(this):this},n.add=function(S){for(var A=Math.max(this.g.length,S.g.length),D=[],O=0,V=0;V<=A;V++){var M=O+(this.i(V)&65535)+(S.i(V)&65535),P=(M>>>16)+(this.i(V)>>>16)+(S.i(V)>>>16);O=P>>>16,M&=65535,P&=65535,D[V]=P<<16|M}return new c(D,D[D.length-1]&-2147483648?-1:0)};function ie(S,A){return S.add(U(A))}n.j=function(S){if(L(this)||L(S))return v;if(j(this))return j(S)?U(this).j(U(S)):U(U(this).j(S));if(j(S))return U(this.j(U(S)));if(0>this.l(C)&&0>S.l(C))return g(this.m()*S.m());for(var A=this.g.length+S.g.length,D=[],O=0;O<2*A;O++)D[O]=0;for(O=0;O<this.g.length;O++)for(var V=0;V<S.g.length;V++){var M=this.i(O)>>>16,P=this.i(O)&65535,Gt=S.i(V)>>>16,dt=S.i(V)&65535;D[2*O+2*V]+=P*dt,ne(D,2*O+2*V),D[2*O+2*V+1]+=M*dt,ne(D,2*O+2*V+1),D[2*O+2*V+1]+=P*Gt,ne(D,2*O+2*V+1),D[2*O+2*V+2]+=M*Gt,ne(D,2*O+2*V+2)}for(O=0;O<A;O++)D[O]=D[2*O+1]<<16|D[2*O];for(O=A;O<2*A;O++)D[O]=0;return new c(D,0)};function ne(S,A){for(;(S[A]&65535)!=S[A];)S[A+1]+=S[A]>>>16,S[A]&=65535,A++}function X(S,A){this.g=S,this.h=A}function fe(S,A){if(L(A))throw Error("division by zero");if(L(S))return new X(v,v);if(j(S))return A=fe(U(S),A),new X(U(A.g),U(A.h));if(j(A))return A=fe(S,U(A)),new X(U(A.g),A.h);if(30<S.g.length){if(j(S)||j(A))throw Error("slowDivide_ only works with positive integers.");for(var D=w,O=A;0>=O.l(S);)D=ae(D),O=ae(O);var V=ce(D,1),M=ce(O,1);for(O=ce(O,2),D=ce(D,2);!L(O);){var P=M.add(O);0>=P.l(S)&&(V=V.add(D),M=P),O=ce(O,1),D=ce(D,1)}return A=ie(S,V.j(A)),new X(V,A)}for(V=v;0<=S.l(A);){for(D=Math.max(1,Math.floor(S.m()/A.m())),O=Math.ceil(Math.log(D)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),M=g(D),P=M.j(A);j(P)||0<P.l(S);)D-=O,M=g(D),P=M.j(A);L(M)&&(M=w),V=V.add(M),S=ie(S,P)}return new X(V,S)}n.A=function(S){return fe(this,S).h},n.and=function(S){for(var A=Math.max(this.g.length,S.g.length),D=[],O=0;O<A;O++)D[O]=this.i(O)&S.i(O);return new c(D,this.h&S.h)},n.or=function(S){for(var A=Math.max(this.g.length,S.g.length),D=[],O=0;O<A;O++)D[O]=this.i(O)|S.i(O);return new c(D,this.h|S.h)},n.xor=function(S){for(var A=Math.max(this.g.length,S.g.length),D=[],O=0;O<A;O++)D[O]=this.i(O)^S.i(O);return new c(D,this.h^S.h)};function ae(S){for(var A=S.g.length+1,D=[],O=0;O<A;O++)D[O]=S.i(O)<<1|S.i(O-1)>>>31;return new c(D,S.h)}function ce(S,A){var D=A>>5;A%=32;for(var O=S.g.length-D,V=[],M=0;M<O;M++)V[M]=0<A?S.i(M+D)>>>A|S.i(M+D+1)<<32-A:S.i(M+D);return new c(V,S.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a1=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,zs=c}).apply(typeof Pb<"u"?Pb:typeof self<"u"?self:typeof window<"u"?window:{});var Ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var o1,th,l1,ip,My,u1,c1,h1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ff=="object"&&Ff];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var E=i;h=h.split(".");for(var b=0;b<h.length-1;b++){var B=h[b];if(!(B in E))break e;E=E[B]}h=h[h.length-1],b=E[h],_=_(b),_!=b&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var E=0,b=!1,B={next:function(){if(!b&&E<h.length){var K=E++;return{value:_(K,h[K]),done:!1}}return b=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,E){return h.call.apply(h.bind,arguments)}function v(h,_,E){if(!h)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,b),h.apply(_,B)}}return function(){return h.apply(_,arguments)}}function w(h,_,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,w.apply(null,arguments)}function C(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var b=E.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function L(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(b,B,K){for(var le=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)le[Fe-2]=arguments[Fe];return _.prototype[B].apply(b,le)}}function j(h){const _=h.length;if(0<_){const E=Array(_);for(let b=0;b<_;b++)E[b]=h[b];return E}return[]}function U(h,_){for(let E=1;E<arguments.length;E++){const b=arguments[E];if(p(b)){const B=h.length||0,K=b.length||0;h.length=B+K;for(let le=0;le<K;le++)h[B+le]=b[le]}else h.push(b)}}class ie{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ne(h){return/^[\s\xa0]*$/.test(h)}function X(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function fe(h){return fe[" "](h),h}fe[" "]=function(){};var ae=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function ce(h,_,E){for(const b in h)_.call(E,h[b],b,h)}function S(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function A(h){const _={};for(const E in h)_[E]=h[E];return _}const D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(h,_){let E,b;for(let B=1;B<arguments.length;B++){b=arguments[B];for(E in b)h[E]=b[E];for(let K=0;K<D.length;K++)E=D[K],Object.prototype.hasOwnProperty.call(b,E)&&(h[E]=b[E])}}function V(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function M(h){d.setTimeout(()=>{throw h},0)}function P(){var h=Ne;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Gt{constructor(){this.h=this.g=null}add(_,E){const b=dt.get();b.set(_,E),this.h?this.h.next=b:this.g=b,this.h=b}}var dt=new ie(()=>new Q,h=>h.reset());class Q{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ye=!1,Ne=new Gt,N=()=>{const h=d.Promise.resolve(void 0);ue=()=>{h.then(Z)}};var Z=()=>{for(var h;h=P();){try{h.h.call(h.g)}catch(E){M(E)}var _=dt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ye=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,_),d.removeEventListener("test",E,_)}catch{}return h}();function De(h,_){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ae){e:{try{fe(_.nodeName);var B=!0;break e}catch{}B=!1}B||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}L(De,se);var we={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),He=0;function Jt(h,_,E,b,B){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!b,this.ha=B,this.key=++He,this.da=this.fa=!1}function si(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function kn(h){this.src=h,this.g={},this.h=0}kn.prototype.add=function(h,_,E,b,B){var K=h.toString();h=this.g[K],h||(h=this.g[K]=[],this.h++);var le=ua(h,_,b,B);return-1<le?(_=h[le],E||(_.fa=!1)):(_=new Jt(_,this.src,K,!!b,B),_.fa=E,h.push(_)),_};function yn(h,_){var E=_.type;if(E in h.g){var b=h.g[E],B=Array.prototype.indexOf.call(b,_,void 0),K;(K=0<=B)&&Array.prototype.splice.call(b,B,1),K&&(si(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function ua(h,_,E,b){for(var B=0;B<h.length;++B){var K=h[B];if(!K.da&&K.listener==_&&K.capture==!!E&&K.ha==b)return B}return-1}var ca="closure_lm_"+(1e6*Math.random()|0),xu={};function fd(h,_,E,b,B){if(Array.isArray(_)){for(var K=0;K<_.length;K++)fd(h,_[K],E,b,B);return null}return E=pd(E),h&&h[Et]?h.K(_,E,g(b)?!!b.capture:!1,B):ai(h,_,E,!1,b,B)}function ai(h,_,E,b,B,K){if(!_)throw Error("Invalid event type");var le=g(B)?!!B.capture:!!B,Fe=Po(h);if(Fe||(h[ca]=Fe=new kn(h)),E=Fe.add(_,E,b,le,K),E.proxy)return E;if(b=Fm(),E.proxy=b,b.src=h,b.listener=E,h.addEventListener)ve||(B=le),B===void 0&&(B=!1),h.addEventListener(_.toString(),b,B);else if(h.attachEvent)h.attachEvent(ha(_.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Fm(){function h(E){return _.call(h.src,h.listener,E)}const _=qm;return h}function Ou(h,_,E,b,B){if(Array.isArray(_))for(var K=0;K<_.length;K++)Ou(h,_[K],E,b,B);else b=g(b)?!!b.capture:!!b,E=pd(E),h&&h[Et]?(h=h.i,_=String(_).toString(),_ in h.g&&(K=h.g[_],E=ua(K,E,b,B),-1<E&&(si(K[E]),Array.prototype.splice.call(K,E,1),K.length==0&&(delete h.g[_],h.h--)))):h&&(h=Po(h))&&(_=h.g[_.toString()],h=-1,_&&(h=ua(_,E,b,B)),(E=-1<h?_[h]:null)&&Do(E))}function Do(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Et])yn(_.i,h);else{var E=h.type,b=h.proxy;_.removeEventListener?_.removeEventListener(E,b,h.capture):_.detachEvent?_.detachEvent(ha(E),b):_.addListener&&_.removeListener&&_.removeListener(b),(E=Po(_))?(yn(E,h),E.h==0&&(E.src=null,_[ca]=null)):si(h)}}}function ha(h){return h in xu?xu[h]:xu[h]="on"+h}function qm(h,_){if(h.da)h=!0;else{_=new De(_,this);var E=h.listener,b=h.ha||h.src;h.fa&&Do(h),h=E.call(b,_)}return h}function Po(h){return h=h[ca],h instanceof kn?h:null}var Vu="__closure_events_fn_"+(1e9*Math.random()>>>0);function pd(h){return typeof h=="function"?h:(h[Vu]||(h[Vu]=function(_){return h.handleEvent(_)}),h[Vu])}function At(){oe.call(this),this.i=new kn(this),this.M=this,this.F=null}L(At,oe),At.prototype[Et]=!0,At.prototype.removeEventListener=function(h,_,E,b){Ou(this,h,_,E,b)};function Xe(h,_){var E,b=h.F;if(b)for(E=[];b;b=b.F)E.push(b);if(h=h.M,b=_.type||_,typeof _=="string")_=new se(_,h);else if(_ instanceof se)_.target=_.target||h;else{var B=_;_=new se(b,h),O(_,B)}if(B=!0,E)for(var K=E.length-1;0<=K;K--){var le=_.g=E[K];B=Hn(le,b,!0,_)&&B}if(le=_.g=h,B=Hn(le,b,!0,_)&&B,B=Hn(le,b,!1,_)&&B,E)for(K=0;K<E.length;K++)le=_.g=E[K],B=Hn(le,b,!1,_)&&B}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],b=0;b<E.length;b++)si(E[b]);delete h.g[_],h.h--}}this.F=null},At.prototype.K=function(h,_,E,b){return this.i.add(String(h),_,!1,E,b)},At.prototype.L=function(h,_,E,b){return this.i.add(String(h),_,!0,E,b)};function Hn(h,_,E,b){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var B=!0,K=0;K<_.length;++K){var le=_[K];if(le&&!le.da&&le.capture==E){var Fe=le.listener,$t=le.ha||le.src;le.fa&&yn(h.i,le),B=Fe.call($t,b)!==!1&&B}}return B&&!b.defaultPrevented}function vn(h,_,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function md(h){h.g=vn(()=>{h.g=null,h.i&&(h.i=!1,md(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class jm extends oe{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:md(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function da(h){oe.call(this),this.h=h,this.g={}}L(da,oe);var fa=[];function pa(h){ce(h.g,function(_,E){this.g.hasOwnProperty(E)&&Do(_)},h),h.g={}}da.prototype.N=function(){da.aa.N.call(this),pa(this)},da.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ii=d.JSON.stringify,No=d.JSON.parse,ma=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function ku(){}ku.prototype.h=null;function Mu(h){return h.h||(h.h=h.i())}function Lu(){}var fr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){se.call(this,"d")}L(pr,se);function Uu(){se.call(this,"c")}L(Uu,se);var Vi={},Bu=null;function Zr(){return Bu=Bu||new At}Vi.La="serverreachability";function xo(h){se.call(this,Vi.La,h)}L(xo,se);function es(h){const _=Zr();Xe(_,new xo(_))}Vi.STAT_EVENT="statevent";function gd(h,_){se.call(this,Vi.STAT_EVENT,h),this.stat=_}L(gd,se);function ft(h){const _=Zr();Xe(_,new gd(_,h))}Vi.Ma="timingevent";function Ht(h,_){se.call(this,Vi.Ma,h),this.size=_}L(Ht,se);function Lt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function oi(){this.g=!0}oi.prototype.xa=function(){this.g=!1};function zu(h,_,E,b,B,K){h.info(function(){if(h.g)if(K)for(var le="",Fe=K.split("&"),$t=0;$t<Fe.length;$t++){var qe=Fe[$t].split("=");if(1<qe.length){var en=qe[0];qe=qe[1];var Kt=en.split("_");le=2<=Kt.length&&Kt[1]=="type"?le+(en+"="+qe+"&"):le+(en+"=redacted&")}}else le=null;else le=K;return"XMLHTTP REQ ("+b+") [attempt "+B+"]: "+_+`
`+E+`
`+le})}function Gm(h,_,E,b,B,K,le){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+B+"]: "+_+`
`+E+`
`+K+" "+le})}function ts(h,_,E,b){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+ga(h,E)+(b?" "+b:"")})}function _d(h,_){h.info(function(){return"TIMEOUT: "+_})}oi.prototype.info=function(){};function ga(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var b=E[h];if(!(2>b.length)){var B=b[1];if(Array.isArray(B)&&!(1>B.length)){var K=B[0];if(K!="noop"&&K!="stop"&&K!="close")for(var le=1;le<B.length;le++)B[le]=""}}}}return Ii(E)}catch{return _}}var ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ki;function Mi(){}L(Mi,ku),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},ki=new Mi;function Sn(h,_,E,b){this.j=h,this.i=_,this.l=E,this.R=b||1,this.U=new da(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}var Fu={},Oo={};function bi(h,_,E){h.L=1,h.v=Ta($n(_)),h.m=E,h.P=!0,gr(h,null)}function gr(h,_){h.F=Date.now(),_a(h),h.A=$n(h.v);var E=h.A,b=h.R;Array.isArray(b)||(b=[String(b)]),Ku(E.i,"t",b),h.C=0,E=h.j.J,h.h=new Nt,h.g=Od(h.j,E?_:null,!h.m),0<h.O&&(h.M=new jm(w(h.Y,h,h.g),h.O)),_=h.U,E=h.g,b=h.ca;var B="readystatechange";Array.isArray(B)||(B&&(fa[0]=B.toString()),B=fa);for(var K=0;K<B.length;K++){var le=fd(E,B[K],b||_.handleEvent,!1,_.h||_);if(!le)break;_.g[le.key]=le}_=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),es(),zu(h.i,h.u,h.A,h.l,h.R,h.m)}Sn.prototype.ca=function(h){h=h.target;const _=this.M;_&&hi(h)==3?_.j():this.Y(h)},Sn.prototype.Y=function(h){try{if(h==this.g)e:{const Kt=hi(this.g);var _=this.g.Ba();const br=this.g.Z();if(!(3>Kt)&&(Kt!=3||this.g&&(this.h.h||this.g.oa()||Ad(this.g)))){this.J||Kt!=4||_==7||(_==8||0>=br?es(3):es(2)),is(this);var E=this.g.Z();this.X=E;t:if(yd(this)){var b=Ad(this.g);h="";var B=b.length,K=hi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Li(this);var le="";break t}this.h.i=new d.TextDecoder}for(_=0;_<B;_++)this.h.h=!0,h+=this.h.i.decode(b[_],{stream:!(K&&_==B-1)});b.length=0,this.h.g+=h,this.C=0,le=this.h.g}else le=this.g.oa();if(this.o=E==200,Gm(this.i,this.u,this.A,this.l,this.R,Kt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,$t=this.g;if((Fe=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(Fe)){var qe=Fe;break t}}qe=null}if(E=qe)ts(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,E);else{this.o=!1,this.s=3,ft(12),un(this),Li(this);break e}}if(this.P){E=!0;let cn;for(;!this.J&&this.C<le.length;)if(cn=vd(this,le),cn==Oo){Kt==4&&(this.s=4,ft(14),E=!1),ts(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Fu){this.s=4,ft(15),ts(this.i,this.l,le,"[Invalid Chunk]"),E=!1;break}else ts(this.i,this.l,cn,null),ya(this,cn);if(yd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Kt!=4||le.length!=0||this.h.h||(this.s=1,ft(16),E=!1),this.o=this.o&&E,!E)ts(this.i,this.l,le,"[Invalid Chunked Response]"),un(this),Li(this);else if(0<le.length&&!this.W){this.W=!0;var en=this.j;en.g==this&&en.ba&&!en.M&&(en.j.info("Great, no buffering proxy detected. Bytes received: "+le.length),Da(en),en.M=!0,ft(11))}}else ts(this.i,this.l,le,null),ya(this,le);Kt==4&&un(this),this.o&&!this.J&&(Kt==4?Pd(this.j,this):(this.o=!1,_a(this)))}else Ym(this.g),E==400&&0<le.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),un(this),Li(this)}}}catch{}finally{}};function yd(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function vd(h,_){var E=h.C,b=_.indexOf(`
`,E);return b==-1?Oo:(E=Number(_.substring(E,b)),isNaN(E)?Fu:(b+=1,b+E>_.length?Oo:(_=_.slice(b,b+E),h.C=b+E,_)))}Sn.prototype.cancel=function(){this.J=!0,un(this)};function _a(h){h.S=Date.now()+h.I,Ed(h,h.I)}function Ed(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Lt(w(h.ba,h),_)}function is(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Sn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(_d(this.i,this.A),this.L!=2&&(es(),ft(17)),un(this),this.s=2,Li(this)):Ed(this,this.S-h)};function Li(h){h.j.G==0||h.J||Pd(h.j,h)}function un(h){is(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,pa(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function ya(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||qu(E.h,h))){if(!h.K&&qu(E.h,h)&&E.G==3){try{var b=E.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var B=b;if(B[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Ho(E),jo(E);else break e;Ju(E),ft(18)}}else E.za=B[1],0<E.za-E.T&&37500>B[2]&&E.F&&E.v==0&&!E.C&&(E.C=Lt(w(E.Za,E),6e3));if(1>=ko(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Ir(E,11)}else if((h.K||E.g==h)&&Ho(E),!ne(_))for(B=E.Da.g.parse(_),_=0;_<B.length;_++){let qe=B[_];if(E.T=qe[0],qe=qe[1],E.G==2)if(qe[0]=="c"){E.K=qe[1],E.ia=qe[2];const en=qe[3];en!=null&&(E.la=en,E.j.info("VER="+E.la));const Kt=qe[4];Kt!=null&&(E.Aa=Kt,E.j.info("SVER="+E.Aa));const br=qe[5];br!=null&&typeof br=="number"&&0<br&&(b=1.5*br,E.L=b,E.j.info("backChannelRequestTimeoutMs_="+b)),b=E;const cn=h.g;if(cn){const Gi=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var K=b.h;K.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Mo(K,K.h),K.h=null))}if(b.D){const ec=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(b.ya=ec,nt(b.I,b.D,ec))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),b=E;var le=h;if(b.qa=xd(b,b.J?b.ia:null,b.W),le.K){Rn(b.h,le);var Fe=le,$t=b.L;$t&&(Fe.I=$t),Fe.B&&(is(Fe),_a(Fe)),b.g=le}else Cd(b);0<E.i.length&&Go(E)}else qe[0]!="stop"&&qe[0]!="close"||Ir(E,7);else E.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Ir(E,7):Wu(E):qe[0]!="noop"&&E.l&&E.l.ta(qe),E.v=0)}}es(4)}catch{}}var Td=class{constructor(h,_){this.g=h,this.map=_}};function _r(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ko(h){return h.h?1:h.g?h.g.size:0}function qu(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Mo(h,_){h.g?h.g.add(_):h.h=_}function Rn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}_r.prototype.cancel=function(){if(this.i=ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function ju(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return j(h.i)}function Hm(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],E=h.length,b=0;b<E;b++)_.push(h[b]);return _}_=[],E=0;for(b in h)_[E++]=h[b];return _}function Lo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const b in h)_[E++]=b;return _}}}function Gu(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=Lo(h),b=Hm(h),B=b.length,K=0;K<B;K++)_.call(void 0,b[K],E&&E[K],h)}var va=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $m(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var b=h[E].indexOf("="),B=null;if(0<=b){var K=h[E].substring(0,b);B=h[E].substring(b+1)}else K=h[E];_(K,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Ut(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ut){this.h=h.h,Ea(this,h.j),this.o=h.o,this.g=h.g,rs(this,h.s),this.l=h.l;var _=h.i,E=new vr;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),yr(this,E),this.m=h.m}else h&&(_=String(h).match(va))?(this.h=!1,Ea(this,_[1]||"",!0),this.o=li(_[2]||""),this.g=li(_[3]||"",!0),rs(this,_[4]),this.l=li(_[5]||"",!0),yr(this,_[6]||"",!0),this.m=li(_[7]||"")):(this.h=!1,this.i=new vr(null,this.h))}Ut.prototype.toString=function(){var h=[],_=this.j;_&&h.push(wa(_,Hu,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(wa(_,Hu,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(wa(E,E.charAt(0)=="/"?Km:$u,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",wa(E,Uo)),h.join("")};function $n(h){return new Ut(h)}function Ea(h,_,E){h.j=E?li(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function rs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function yr(h,_,E){_ instanceof vr?(h.i=_,Id(h.i,h.h)):(E||(_=wa(_,Qm)),h.i=new vr(_,h.h))}function nt(h,_,E){h.i.set(_,E)}function Ta(h){return nt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function li(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function wa(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,wd),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function wd(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Hu=/[#\/\?@]/g,$u=/[#\?:]/g,Km=/[#\?]/g,Qm=/[#\?@]/g,Uo=/#/g;function vr(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ui(h){h.g||(h.g=new Map,h.h=0,h.i&&$m(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=vr.prototype,n.add=function(h,_){ui(this),this.i=null,h=Ui(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function Er(h,_){ui(h),_=Ui(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Tr(h,_){return ui(h),_=Ui(h,_),h.g.has(_)}n.forEach=function(h,_){ui(this),this.g.forEach(function(E,b){E.forEach(function(B){h.call(_,B,b,this)},this)},this)},n.na=function(){ui(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let b=0;b<_.length;b++){const B=h[b];for(let K=0;K<B.length;K++)E.push(_[b])}return E},n.V=function(h){ui(this);let _=[];if(typeof h=="string")Tr(this,h)&&(_=_.concat(this.g.get(Ui(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return ui(this),this.i=null,h=Ui(this,h),Tr(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ku(h,_,E){Er(h,_),0<E.length&&(h.i=null,h.g.set(Ui(h,_),j(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var b=_[E];const K=encodeURIComponent(String(b)),le=this.V(b);for(b=0;b<le.length;b++){var B=K;le[b]!==""&&(B+="="+encodeURIComponent(String(le[b]))),h.push(B)}}return this.i=h.join("&")};function Ui(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Id(h,_){_&&!h.j&&(ui(h),h.i=null,h.g.forEach(function(E,b){var B=b.toLowerCase();b!=B&&(Er(this,b),Ku(this,B,E))},h)),h.j=_}function Ia(h,_){const E=new oi;if(d.Image){const b=new Image;b.onload=C(ci,E,"TestLoadImage: loaded",!0,_,b),b.onerror=C(ci,E,"TestLoadImage: error",!1,_,b),b.onabort=C(ci,E,"TestLoadImage: abort",!1,_,b),b.ontimeout=C(ci,E,"TestLoadImage: timeout",!1,_,b),d.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else _(!1)}function Ai(h,_){const E=new oi,b=new AbortController,B=setTimeout(()=>{b.abort(),ci(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:b.signal}).then(K=>{clearTimeout(B),K.ok?ci(E,"TestPingServer: ok",!0,_):ci(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(B),ci(E,"TestPingServer: error",!1,_)})}function ci(h,_,E,b,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),b(E)}catch{}}function ba(){this.g=new ma}function Bi(h,_,E){const b=E||"";try{Gu(h,function(B,K){let le=B;g(B)&&(le=Ii(B)),_.push(b+K+"="+encodeURIComponent(le))})}catch(B){throw _.push(b+"type="+encodeURIComponent("_badmap")),B}}function ss(h){this.l=h.Ub||null,this.j=h.eb||!1}L(ss,ku),ss.prototype.g=function(){return new wr(this.l,this.j)},ss.prototype.i=function(h){return function(){return h}}({});function wr(h,_){At.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(wr,At),n=wr.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Fi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qu(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qu(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?zi(this):Fi(this),this.readyState==3&&Qu(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,zi(this))},n.Qa=function(h){this.g&&(this.response=h,zi(this))},n.ga=function(){this.g&&zi(this)};function zi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Fi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function Fi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Yu(h){let _="";return ce(h,function(E,b){_+=b,_+=":",_+=E,_+=`\r
`}),_}function Zt(h,_,E){e:{for(b in E){var b=!1;break e}b=!0}b||(E=Yu(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):nt(h,_,E))}function Ye(h){At.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Ye,At);var Bo=/^https?$/i,Aa=["POST","PUT"];n=Ye.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ki.g(),this.v=this.o?Mu(this.o):Mu(ki),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(K){bd(this,K);return}if(h=E||"",E=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var B in b)E.set(B,b[B]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const K of b.keys())E.set(K,b.get(K));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(E.keys()).find(K=>K.toLowerCase()=="content-type"),B=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Aa,_,void 0))||b||B||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,le]of E)this.g.setRequestHeader(K,le);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sa(this),this.u=!0,this.g.send(h),this.u=!1}catch(K){bd(this,K)}};function bd(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,zo(h),qi(h)}function zo(h){h.A||(h.A=!0,Xe(h,"complete"),Xe(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Xe(this,"complete"),Xe(this,"abort"),qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Fo(this):this.bb())},n.bb=function(){Fo(this)};function Fo(h){if(h.h&&typeof c<"u"&&(!h.v[1]||hi(h)!=4||h.Z()!=2)){if(h.u&&hi(h)==4)vn(h.Ea,0,h);else if(Xe(h,"readystatechange"),hi(h)==4){h.h=!1;try{const le=h.Z();e:switch(le){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var b;if(b=le===0){var B=String(h.D).match(va)[1]||null;!B&&d.self&&d.self.location&&(B=d.self.location.protocol.slice(0,-1)),b=!Bo.test(B?B.toLowerCase():"")}E=b}if(E)Xe(h,"complete"),Xe(h,"success");else{h.m=6;try{var K=2<hi(h)?h.g.statusText:""}catch{K=""}h.l=K+" ["+h.Z()+"]",zo(h)}}finally{qi(h)}}}}function qi(h,_){if(h.g){Sa(h);const E=h.g,b=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Xe(h,"ready");try{E.onreadystatechange=b}catch{}}}function Sa(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function hi(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<hi(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),No(_)}};function Ad(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Ym(h){const _={};h=(h.g&&2<=hi(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(ne(h[b]))continue;var E=V(h[b]);const B=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const K=_[B]||[];_[B]=K,K.push(E)}S(_,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ra(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function qo(h){this.Aa=0,this.i=[],this.j=new oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ra("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ra("baseRetryDelayMs",5e3,h),this.cb=Ra("retryDelaySeedMs",1e4,h),this.Wa=Ra("forwardChannelMaxRetries",2,h),this.wa=Ra("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new _r(h&&h.concurrentRequestLimit),this.Da=new ba,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=qo.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,b){ft(0),this.W=h,this.H=_||{},E&&b!==void 0&&(this.H.OSID=E,this.H.OAID=b),this.F=this.X,this.I=xd(this,null,this.W),Go(this)};function Wu(h){if(Sd(h),h.G==3){var _=h.U++,E=$n(h.I);if(nt(E,"SID",h.K),nt(E,"RID",_),nt(E,"TYPE","terminate"),Ca(h,E),_=new Sn(h,h.j,_),_.L=2,_.v=Ta($n(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=_.v,E=!0),E||(_.g=Od(_.j,null),_.g.ea(_.v)),_.F=Date.now(),_a(_)}Nd(h)}function jo(h){h.g&&(Da(h),h.g.cancel(),h.g=null)}function Sd(h){jo(h),h.u&&(d.clearTimeout(h.u),h.u=null),Ho(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Go(h){if(!Vo(h.h)&&!h.s){h.s=!0;var _=h.Ga;ue||N(),ye||(ue(),ye=!0),Ne.add(_,h),h.B=0}}function Wm(h,_){return ko(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Lt(w(h.Ga,h,_),Zu(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const B=new Sn(this,this.j,h);let K=this.o;if(this.S&&(K?(K=A(K),O(K,this.S)):K=this.S),this.m!==null||this.O||(B.H=K,K=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var b=this.i[E];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=Rd(this,B,_),E=$n(this.I),nt(E,"RID",h),nt(E,"CVER",22),this.D&&nt(E,"X-HTTP-Session-Id",this.D),Ca(this,E),K&&(this.O?_="headers="+encodeURIComponent(String(Yu(K)))+"&"+_:this.m&&Zt(E,this.m,K)),Mo(this.h,B),this.Ua&&nt(E,"TYPE","init"),this.P?(nt(E,"$req",_),nt(E,"SID","null"),B.T=!0,bi(B,E,null)):bi(B,E,_),this.G=2}}else this.G==3&&(h?Xu(this,h):this.i.length==0||Vo(this.h)||Xu(this))};function Xu(h,_){var E;_?E=_.l:E=h.U++;const b=$n(h.I);nt(b,"SID",h.K),nt(b,"RID",E),nt(b,"AID",h.T),Ca(h,b),h.m&&h.o&&Zt(b,h.m,h.o),E=new Sn(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Rd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Mo(h.h,E),bi(E,b,_)}function Ca(h,_){h.H&&ce(h.H,function(E,b){nt(_,b,E)}),h.l&&Gu({},function(E,b){nt(_,b,E)})}function Rd(h,_,E){E=Math.min(h.i.length,E);var b=h.l?w(h.l.Na,h.l,h):null;e:{var B=h.i;let K=-1;for(;;){const le=["count="+E];K==-1?0<E?(K=B[0].g,le.push("ofs="+K)):K=0:le.push("ofs="+K);let Fe=!0;for(let $t=0;$t<E;$t++){let qe=B[$t].g;const en=B[$t].map;if(qe-=K,0>qe)K=Math.max(0,B[$t].g-100),Fe=!1;else try{Bi(en,le,"req"+qe+"_")}catch{b&&b(en)}}if(Fe){b=le.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,b}function Cd(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ue||N(),ye||(ue(),ye=!0),Ne.add(_,h),h.v=0}}function Ju(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Lt(w(h.Fa,h),Zu(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Dd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Lt(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),jo(this),Dd(this))};function Da(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Dd(h){h.g=new Sn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=$n(h.qa);nt(_,"RID","rpc"),nt(_,"SID",h.K),nt(_,"AID",h.T),nt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&nt(_,"TO",h.ja),nt(_,"TYPE","xmlhttp"),Ca(h,_),h.m&&h.o&&Zt(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Ta($n(_)),E.m=null,E.P=!0,gr(E,h)}n.Za=function(){this.C!=null&&(this.C=null,jo(this),Ju(this),ft(19))};function Ho(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Pd(h,_){var E=null;if(h.g==_){Ho(h),Da(h),h.g=null;var b=2}else if(qu(h.h,_))E=_.D,Rn(h.h,_),b=1;else return;if(h.G!=0){if(_.o)if(b==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var B=h.B;b=Zr(),Xe(b,new Ht(b,E)),Go(h)}else Cd(h);else if(B=_.s,B==3||B==0&&0<_.X||!(b==1&&Wm(h,_)||b==2&&Ju(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),B){case 1:Ir(h,5);break;case 4:Ir(h,10);break;case 3:Ir(h,6);break;default:Ir(h,2)}}}function Zu(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function Ir(h,_){if(h.j.info("Error code "+_),_==2){var E=w(h.fb,h),b=h.Xa;const B=!b;b=new Ut(b||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ea(b,"https"),Ta(b),B?Ia(b.toString(),E):Ai(b.toString(),E)}else ft(2);h.G=0,h.l&&h.l.sa(_),Nd(h),Sd(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Nd(h){if(h.G=0,h.ka=[],h.l){const _=ju(h.h);(_.length!=0||h.i.length!=0)&&(U(h.ka,_),U(h.ka,h.i),h.h.i.length=0,j(h.i),h.i.length=0),h.l.ra()}}function xd(h,_,E){var b=E instanceof Ut?$n(E):new Ut(E);if(b.g!="")_&&(b.g=_+"."+b.g),rs(b,b.s);else{var B=d.location;b=B.protocol,_=_?_+"."+B.hostname:B.hostname,B=+B.port;var K=new Ut(null);b&&Ea(K,b),_&&(K.g=_),B&&rs(K,B),E&&(K.l=E),b=K}return E=h.D,_=h.ya,E&&_&&nt(b,E,_),nt(b,"VER",h.la),Ca(h,b),b}function Od(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ye(new ss({eb:E})):new Ye(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vd(){}n=Vd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $o(){}$o.prototype.g=function(h,_){return new Cn(h,_)};function Cn(h,_){At.call(this),this.g=new qo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ne(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ne(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new ji(this)}L(Cn,At),Cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Cn.prototype.close=function(){Wu(this.g)},Cn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Ii(h),h=E);_.i.push(new Td(_.Ya++,h)),_.G==3&&Go(_)},Cn.prototype.N=function(){this.g.l=null,delete this.j,Wu(this.g),delete this.g,Cn.aa.N.call(this)};function kd(h){pr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}L(kd,pr);function Md(){Uu.call(this),this.status=1}L(Md,Uu);function ji(h){this.g=h}L(ji,Vd),ji.prototype.ua=function(){Xe(this.g,"a")},ji.prototype.ta=function(h){Xe(this.g,new kd(h))},ji.prototype.sa=function(h){Xe(this.g,new Md)},ji.prototype.ra=function(){Xe(this.g,"b")},$o.prototype.createWebChannel=$o.prototype.g,Cn.prototype.send=Cn.prototype.o,Cn.prototype.open=Cn.prototype.m,Cn.prototype.close=Cn.prototype.close,h1=function(){return new $o},c1=function(){return Zr()},u1=Vi,My={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ns.NO_ERROR=0,ns.TIMEOUT=8,ns.HTTP_ERROR=6,ip=ns,mr.COMPLETE="complete",l1=mr,Lu.EventType=fr,fr.OPEN="a",fr.CLOSE="b",fr.ERROR="c",fr.MESSAGE="d",At.prototype.listen=At.prototype.K,th=Lu,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,o1=Ye}).apply(typeof Ff<"u"?Ff:typeof self<"u"?self:typeof window<"u"?window:{});const Nb="@firebase/firestore",xb="4.7.14";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}on.UNAUTHENTICATED=new on(null),on.GOOGLE_CREDENTIALS=new on("google-credentials-uid"),on.FIRST_PARTY=new on("first-party-uid"),on.MOCK_USER=new on("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu="11.7.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new nm("@firebase/firestore");function Dl(){return Ks.logLevel}function fL(n){Ks.setLogLevel(n)}function te(n,...e){if(Ks.logLevel<=Ue.DEBUG){const t=e.map(Wv);Ks.debug(`Firestore (${bu}): ${n}`,...t)}}function Vt(n,...e){if(Ks.logLevel<=Ue.ERROR){const t=e.map(Wv);Ks.error(`Firestore (${bu}): ${n}`,...t)}}function cr(n,...e){if(Ks.logLevel<=Ue.WARN){const t=e.map(Wv);Ks.warn(`Firestore (${bu}): ${n}`,...t)}}function Wv(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,d1(n,i,t)}function d1(n,e,t){let i=`FIRESTORE (${bu}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Vt(i),new Error(i)}function ge(n,e,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,n||d1(e,a,i)}function pL(n,e){n||pe(57014,e)}function de(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends xn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(on.UNAUTHENTICATED))}shutdown(){}}class gL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class _L{constructor(e){this.t=e,this.currentUser=on.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ge(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new gn,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new gn)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ge(typeof i.accessToken=="string",31837,{l:i}),new f1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string",2055,{h:e}),new on(e)}}class yL{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=on.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vL{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new yL(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(on.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ob{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EL{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ge(this.o===void 0,3512);const i=l=>{l.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,te("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ob(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ge(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ob(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=TL(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%62))}return i}}function Re(n,e){return n<e?-1:n>e?1:0}function Ly(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),a=e.codePointAt(t);if(i!==a){if(i<128&&a<128)return Re(i,a);{const l=Xv(),c=wL(l.encode(Vb(n,t)),l.encode(Vb(e,t)));return c!==0?c:Re(i,a)}}t+=i>65535?2:1}return Re(n.length,e.length)}function Vb(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function wL(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function Zl(n,e,t){return n.length===e.length&&n.every((i,a)=>t(i,e[a]))}function m1(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=-62135596800,Mb=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Mb);return new vt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<kb)throw new ee($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mb}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-kb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new vt(0,0))}static max(){return new _e(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="__name__";class Wi{constructor(e,t,i){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&pe(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Wi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Wi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=Wi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Re(e.length,t.length)}static compareSegments(e,t){const i=Wi.isNumericId(e),a=Wi.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?Wi.extractNumericId(e).compare(Wi.extractNumericId(t)):Ly(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zs.fromString(e.substring(4,e.length-2))}}class Be extends Wi{construct(e,t,i){return new Be(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ee($.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(a=>a.length>0))}return new Be(t)}static emptyPath(){return new Be([])}}const IL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Wi{construct(e,t,i){return new _t(e,t,i)}static isValidIdentifier(e){return IL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lb}static keyField(){return new _t([Lb])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new ee($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ee($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ee($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new ee($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(t)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Be.fromString(e))}static fromName(e){return new he(Be.fromString(e).popFirst(5))}static empty(){return new he(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Be(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=-1;class Cp{constructor(e,t,i,a){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=a}}function Uy(n){return n.fields.find(e=>e.kind===2)}function Ka(n){return n.fields.filter(e=>e.kind!==2)}Cp.UNKNOWN_ID=-1;class rp{constructor(e,t){this.fieldPath=e,this.kind=t}}class Rh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Rh(0,ri.min())}}function g1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,a=_e.fromTimestamp(i===1e9?new vt(t+1,0):new vt(t,i));return new ri(a,he.empty(),e)}function _1(n){return new ri(n.readTime,n.key,eu)}class ri{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ri(_e.min(),he.empty(),eu)}static max(){return new ri(_e.max(),he.empty(),eu)}}function Jv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==y1)throw n;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,i)=>{t(e)})}static reject(e){return new z((t,i)=>{i(e)})}static waitFor(e){return new z((t,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},p=>i(p))}),c=!0,l===a&&t()})}static or(e){let t=z.resolve(!1);for(const i of e)t=t.next(a=>a?z.resolve(a):i());return t}static forEach(e,t){const i=[];return e.forEach((a,l)=>{i.push(t.call(this,a,l))}),this.waitFor(i)}static mapArray(e,t){return new z((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(y=>{c[g]=y,++d,d===l&&i(c)},y=>a(y))}})}static doWhile(e,t){return new z((i,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):i()};l()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="SimpleDb";class pm{static open(e,t,i,a){try{return new pm(t,e.transaction(a,i))}catch(l){throw new dh(t,l)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new gn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new dh(e,t.error)):this.S.resolve()},this.transaction.onerror=i=>{const a=Zv(i.target.error);this.S.reject(new dh(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(te(ti,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new AL(t)}}class ar{static delete(e){return te(ti,"Removing database:",e),Ya(Ev().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Eh())return!1;if(ar.F())return!0;const e=It(),t=ar.M(e),i=0<t&&t<10,a=E1(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||l)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)}constructor(e,t,i){this.name=e,this.version=t,this.B=i,this.L=null,ar.M(It())===12.2&&Vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(te(ti,"Opening database:",this.name),this.db=await new Promise((t,i)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const c=l.target.result;t(c)},a.onblocked=()=>{i(new dh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const c=l.target.error;c.name==="VersionError"?i(new ee($.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):c.name==="InvalidStateError"?i(new ee($.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+c)):i(new dh(e,c))},a.onupgradeneeded=l=>{te(ti,'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const c=l.target.result;if(this.L!==null&&this.L!==l.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${l.oldVersion}, event.newVersion=${l.newVersion}, db.version=${c.version}`);this.B.q(c,a.transaction,l.oldVersion,this.version).next(()=>{te(ti,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const i=t.target;this.L=i.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,i,a){const l=t==="readonly";let c=0;for(;;){++c;try{this.db=await this.k(e);const d=pm.open(this.db,e,l?"readonly":"readwrite",i),p=a(d).next(g=>(d.v(),g)).catch(g=>(d.abort(g),z.reject(g))).toPromise();return p.catch(()=>{}),await d.D,p}catch(d){const p=d,g=p.name!=="FirebaseError"&&c<3;if(te(ti,"Transaction failed with error:",p.message,"Retrying:",g),this.close(),!g)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function E1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class bL{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return Ya(this.K.delete())}}class dh extends ee{constructor(e,t){super($.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function sa(n){return n.name==="IndexedDbTransactionError"}class AL{constructor(e){this.store=e}put(e,t){let i;return t!==void 0?(te(ti,"PUT",this.store.name,e,t),i=this.store.put(t,e)):(te(ti,"PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),Ya(i)}add(e){return te(ti,"ADD",this.store.name,e,e),Ya(this.store.add(e))}get(e){return Ya(this.store.get(e)).next(t=>(t===void 0&&(t=null),te(ti,"GET",this.store.name,e,t),t))}delete(e){return te(ti,"DELETE",this.store.name,e),Ya(this.store.delete(e))}count(){return te(ti,"COUNT",this.store.name),Ya(this.store.count())}J(e,t){const i=this.options(e,t),a=i.index?this.store.index(i.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(i.range);return new z((c,d)=>{l.onerror=p=>{d(p.target.error)},l.onsuccess=p=>{c(p.target.result)}})}{const l=this.cursor(i),c=[];return this.Y(l,(d,p)=>{c.push(p)}).next(()=>c)}}Z(e,t){const i=this.store.getAll(e,t===null?void 0:t);return new z((a,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{a(c.target.result)}})}X(e,t){te(ti,"DELETE ALL",this.store.name);const i=this.options(e,t);i.ee=!1;const a=this.cursor(i);return this.Y(a,(l,c,d)=>d.delete())}te(e,t){let i;t?i=e:(i={},t=e);const a=this.cursor(i);return this.Y(a,t)}ne(e){const t=this.cursor({});return new z((i,a)=>{t.onerror=l=>{const c=Zv(l.target.error);a(c)},t.onsuccess=l=>{const c=l.target.result;c?e(c.primaryKey,c.value).next(d=>{d?c.continue():i()}):i()}})}Y(e,t){const i=[];return new z((a,l)=>{e.onerror=c=>{l(c.target.error)},e.onsuccess=c=>{const d=c.target.result;if(!d)return void a();const p=new bL(d),g=t(d.primaryKey,d.value,p);if(g instanceof z){const y=g.catch(v=>(p.done(),z.reject(v)));i.push(y)}p.isDone?a():p.j===null?d.continue():d.continue(p.j)}}).next(()=>z.waitFor(i))}options(e,t){let i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const i=this.store.index(e.index);return e.ee?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ya(n){return new z((e,t)=>{n.onsuccess=i=>{const a=i.target.result;e(a)},n.onerror=i=>{const a=Zv(i.target.error);t(a)}})}let Ub=!1;function Zv(n){const e=ar.M(It());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const i=new ee("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ub||(Ub=!0,setTimeout(()=>{throw i},0)),i}}return n}const fh="IndexBackfiller";class SL{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){te(fh,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();te(fh,`Documents written: ${t}`)}catch(t){sa(t)?te(fh,"Ignoring IndexedDB error during index backfill: ",t):await ra(t)}await this.ie(6e4)})}}class RL{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const i=new Set;let a=t,l=!0;return z.doWhile(()=>l===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(c=>{if(c!==null&&!i.has(c))return te(fh,`Processing collection: ${c}`),this._e(e,c,a).next(d=>{a-=d,i.add(c)});l=!1})).next(()=>t-a)}_e(e,t,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,i).next(l=>{const c=l.changes;return this.localStore.indexManager.updateIndexEntries(e,c).next(()=>this.ae(a,l)).next(d=>(te(fh,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>c.size)}))}ae(e,t){let i=e;return t.changes.forEach((a,l)=>{const c=_1(l);Jv(c,i)>0&&(i=c)}),new ri(i.readTime,i.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>t.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Fn.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=-1;function Zh(n){return n==null}function Ch(n){return n===0&&1/n==-1/0}function T1(n){return typeof n=="number"&&Number.isInteger(n)&&!Ch(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="";function bn(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bb(e)),e=CL(n.get(t),e);return Bb(e)}function CL(n,e){let t=e;const i=n.length;for(let a=0;a<i;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Dp:t+="";break;default:t+=l}}return t}function Bb(n){return n+Dp+""}function rr(n){const e=n.length;if(ge(e>=2,64408,{path:n}),e===2)return ge(n.charAt(0)===Dp&&n.charAt(1)==="",56145,{path:n}),Be.emptyPath();const t=e-2,i=[];let a="";for(let l=0;l<e;){const c=n.indexOf(Dp,l);switch((c<0||c>t)&&pe(50515,{path:n}),n.charAt(c+1)){case"":const d=n.substring(l,c);let p;a.length===0?p=d:(a+=d,p=a,a=""),i.push(p);break;case"":a+=n.substring(l,c),a+="\0";break;case"":a+=n.substring(l,c+1);break;default:pe(61167,{path:n})}l=c+2}return new Be(i)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="remoteDocuments",ed="owner",Il="owner",Dh="mutationQueues",DL="userId",Di="mutations",zb="batchId",no="userMutationsIndex",Fb=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n,e){return[n,bn(e)]}function w1(n,e,t){return[n,bn(e),t]}const PL={},tu="documentMutations",Pp="remoteDocumentsV14",NL=["prefixPath","collectionGroup","readTime","documentId"],ap="documentKeyIndex",xL=["prefixPath","collectionGroup","documentId"],I1="collectionGroupIndex",OL=["collectionGroup","readTime","prefixPath","documentId"],Ph="remoteDocumentGlobal",By="remoteDocumentGlobalKey",nu="targets",b1="queryTargetsIndex",VL=["canonicalId","targetId"],iu="targetDocuments",kL=["targetId","path"],eE="documentTargetsIndex",ML=["path","targetId"],Np="targetGlobalKey",uo="targetGlobal",Nh="collectionParents",LL=["collectionId","parent"],ru="clientMetadata",UL="clientId",mm="bundles",BL="bundleId",gm="namedQueries",zL="name",tE="indexConfiguration",FL="indexId",zy="collectionGroupIndex",qL="collectionGroup",xp="indexState",jL=["indexId","uid"],A1="sequenceNumberIndex",GL=["uid","sequenceNumber"],Op="indexEntries",HL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],S1="documentKeyIndex",$L=["indexId","uid","orderedDocumentKey"],_m="documentOverlays",KL=["userId","collectionPath","documentId"],Fy="collectionPathOverlayIndex",QL=["userId","collectionPath","largestBatchId"],R1="collectionGroupOverlayIndex",YL=["userId","collectionGroup","largestBatchId"],nE="globals",WL="name",C1=[Dh,Di,tu,Qa,nu,ed,uo,iu,ru,Ph,Nh,mm,gm],XL=[...C1,_m],D1=[Dh,Di,tu,Pp,nu,ed,uo,iu,ru,Ph,Nh,mm,gm,_m],P1=D1,iE=[...P1,tE,xp,Op],JL=iE,ZL=[...iE,nE];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy extends v1{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Xt(n,e){const t=de(n);return ar.N(t.he,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function aa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function N1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.comparator=e,this.root=t||pn.EMPTY}insert(e,t){return new ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pn.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qf(this.root,e,this.comparator,!1)}getReverseIterator(){return new qf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qf(this.root,e,this.comparator,!0)}}class qf{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pn{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??pn.RED,this.left=a??pn.EMPTY,this.right=l??pn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new pn(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return pn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return pn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}pn.EMPTY=null,pn.RED=!0,pn.BLACK=!1;pn.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,i,a,l){return this}insert(e,t,i){return new pn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jb(this.data.getIterator())}getIteratorFrom(e){return new jb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new tt(this.comparator);return t.data=e,t}}class jb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function bl(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new qn([])}unionWith(e){let t=new tt(_t.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zl(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eU(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new x1("Invalid base64 string: "+l):l}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const tU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(n){if(ge(!!n,39018),typeof n=="string"){let e=0;const t=tU.exec(n);if(ge(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hr(n){return typeof n=="string"?Ct.fromBase64String(n):Ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="server_timestamp",V1="__type__",k1="__previous_value__",M1="__local_write_time__";function ym(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[V1])===null||t===void 0?void 0:t.stringValue)===O1}function vm(n){const e=n.mapValue.fields[k1];return ym(e)?vm(e):e}function xh(n){const e=Gr(n.mapValue.fields[M1].timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e,t,i,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const jy="(default)";class Qs{constructor(e,t){this.projectId=e,this.database=t||jy}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database===jy}isEqual(e){return e instanceof Qs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="__type__",L1="__max__",Ms={mapValue:{fields:{__type__:{stringValue:L1}}}},sE="__vector__",su="value",op={nullValue:"NULL_VALUE"};function Ys(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ym(n)?4:U1(n)?9007199254740991:Em(n)?10:11:pe(28295,{value:n})}function hr(n,e){if(n===e)return!0;const t=Ys(n);if(t!==Ys(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xh(n).isEqual(xh(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Gr(a.timestampValue),d=Gr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Hr(a.bytesValue).isEqual(Hr(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return mt(a.geoPointValue.latitude)===mt(l.geoPointValue.latitude)&&mt(a.geoPointValue.longitude)===mt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return mt(a.integerValue)===mt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=mt(a.doubleValue),d=mt(l.doubleValue);return c===d?Ch(c)===Ch(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Zl(n.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(qb(c)!==qb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!hr(c[p],d[p])))return!1;return!0}(n,e);default:return pe(52216,{left:n})}}function Oh(n,e){return(n.values||[]).find(t=>hr(t,e))!==void 0}function Ws(n,e){if(n===e)return 0;const t=Ys(n),i=Ys(e);if(t!==i)return Re(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=mt(l.integerValue||l.doubleValue),p=mt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Gb(n.timestampValue,e.timestampValue);case 4:return Gb(xh(n),xh(e));case 5:return Ly(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Hr(l),p=Hr(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Re(d[g],p[g]);if(y!==0)return y}return Re(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Re(mt(l.latitude),mt(c.latitude));return d!==0?d:Re(mt(l.longitude),mt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Hb(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,g,y;const v=l.fields||{},w=c.fields||{},C=(d=v[su])===null||d===void 0?void 0:d.arrayValue,L=(p=w[su])===null||p===void 0?void 0:p.arrayValue,j=Re(((g=C==null?void 0:C.values)===null||g===void 0?void 0:g.length)||0,((y=L==null?void 0:L.values)===null||y===void 0?void 0:y.length)||0);return j!==0?j:Hb(C,L)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===Ms.mapValue&&c===Ms.mapValue)return 0;if(l===Ms.mapValue)return 1;if(c===Ms.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let v=0;v<p.length&&v<y.length;++v){const w=Ly(p[v],y[v]);if(w!==0)return w;const C=Ws(d[p[v]],g[y[v]]);if(C!==0)return C}return Re(p.length,y.length)}(n.mapValue,e.mapValue);default:throw pe(23264,{Pe:t})}}function Gb(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=Gr(n),i=Gr(e),a=Re(t.seconds,i.seconds);return a!==0?a:Re(t.nanos,i.nanos)}function Hb(n,e){const t=n.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const l=Ws(t[a],i[a]);if(l)return l}return Re(t.length,i.length)}function au(n){return Gy(n)}function Gy(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Gr(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Hr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return he.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=Gy(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${Gy(t.fields[c])}`;return a+"}"}(n.mapValue):pe(61005,{value:n})}function lp(n){switch(Ys(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vm(n);return e?16+lp(e):16;case 5:return 2*n.stringValue.length;case 6:return Hr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+lp(l),0)}(n.arrayValue);case 10:case 11:return function(i){let a=0;return aa(i.fields,(l,c)=>{a+=l.length+lp(c)}),a}(n.mapValue);default:throw pe(13486,{value:n})}}function po(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Hy(n){return!!n&&"integerValue"in n}function Vh(n){return!!n&&"arrayValue"in n}function $b(n){return!!n&&"nullValue"in n}function Kb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function up(n){return!!n&&"mapValue"in n}function Em(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[rE])===null||t===void 0?void 0:t.stringValue)===sE}function ph(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return aa(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ph(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ph(n.arrayValue.values[t]);return e}return Object.assign({},n)}function U1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===L1}const B1={mapValue:{fields:{[rE]:{stringValue:sE},[su]:{arrayValue:{}}}}};function iU(n){return"nullValue"in n?op:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?po(Qs.empty(),he.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Em(n)?B1:{mapValue:{}}:pe(35942,{value:n})}function rU(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?po(Qs.empty(),he.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?B1:"mapValue"in n?Em(n)?{mapValue:{}}:Ms:pe(61959,{value:n})}function Qb(n,e){const t=Ws(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Yb(n,e){const t=Ws(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!up(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ph(t)}setAll(e){let t=_t.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,a),i={},a=[],t=d.popLast()}c?i[d.lastSegment()]=ph(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());up(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];up(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){aa(t,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new mn(ph(this.value))}}function z1(n){const e=[];return aa(n.fields,(t,i)=>{const a=new _t([t]);if(up(i)){const l=z1(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,i,a,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new ht(e,0,_e.min(),_e.min(),_e.min(),mn.empty(),0)}static newFoundDocument(e,t,i,a){return new ht(e,1,t,_e.min(),i,a,0)}static newNoDocument(e,t){return new ht(e,2,t,_e.min(),_e.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,_e.min(),_e.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t){this.position=e,this.inclusive=t}}function Wb(n,e,t){let i=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?i=he.comparator(he.fromName(c.referenceValue),t.key):i=Ws(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Xb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!hr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t="asc"){this.field=e,this.dir=t}}function sU(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{}class ze extends F1{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new aU(e,t,i):t==="array-contains"?new uU(e,i):t==="in"?new K1(e,i):t==="not-in"?new cU(e,i):t==="array-contains-any"?new hU(e,i):new ze(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new oU(e,i):new lU(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ws(t,this.value)):t!==null&&Ys(this.value)===Ys(t)&&this.matchesComparison(Ws(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends F1{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new et(e,t)}matches(e){return ou(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function ou(n){return n.op==="and"}function $y(n){return n.op==="or"}function aE(n){return q1(n)&&ou(n)}function q1(n){for(const e of n.filters)if(e instanceof et)return!1;return!0}function Ky(n){if(n instanceof ze)return n.field.canonicalString()+n.op.toString()+au(n.value);if(aE(n))return n.filters.map(e=>Ky(e)).join(",");{const e=n.filters.map(t=>Ky(t)).join(",");return`${n.op}(${e})`}}function j1(n,e){return n instanceof ze?function(i,a){return a instanceof ze&&i.op===a.op&&i.field.isEqual(a.field)&&hr(i.value,a.value)}(n,e):n instanceof et?function(i,a){return a instanceof et&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&j1(c,a.filters[d]),!0):!1}(n,e):void pe(19439)}function G1(n,e){const t=n.filters.concat(e);return et.create(t,n.op)}function H1(n){return n instanceof ze?function(t){return`${t.field.canonicalString()} ${t.op} ${au(t.value)}`}(n):n instanceof et?function(t){return t.op.toString()+" {"+t.getFilters().map(H1).join(" ,")+"}"}(n):"Filter"}class aU extends ze{constructor(e,t,i){super(e,t,i),this.key=he.fromName(i.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class oU extends ze{constructor(e,t){super(e,"in",t),this.keys=$1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lU extends ze{constructor(e,t){super(e,"not-in",t),this.keys=$1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>he.fromName(i.referenceValue))}class uU extends ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vh(t)&&Oh(t.arrayValue,this.value)}}class K1 extends ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Oh(this.value.arrayValue,t)}}class cU extends ze{constructor(e,t){super(e,"not-in",t)}matches(e){if(Oh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Oh(this.value.arrayValue,t)}}class hU extends ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Oh(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{constructor(e,t=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Ie=null}}function Qy(n,e=null,t=[],i=[],a=null,l=null,c=null){return new dU(n,e,t,i,a,l,c)}function mo(n){const e=de(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Ky(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Zh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>au(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>au(i)).join(",")),e.Ie=t}return e.Ie}function td(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sU(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!j1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xb(n.startAt,e.startAt)&&Xb(n.endAt,e.endAt)}function Vp(n){return he.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function kp(n,e){return n.filters.filter(t=>t instanceof ze&&t.field.isEqual(e))}function Jb(n,e,t){let i=op,a=!0;for(const l of kp(n,e)){let c=op,d=!0;switch(l.op){case"<":case"<=":c=iU(l.value);break;case"==":case"in":case">=":c=l.value;break;case">":c=l.value,d=!1;break;case"!=":case"not-in":c=op}Qb({value:i,inclusive:a},{value:c,inclusive:d})<0&&(i=c,a=d)}if(t!==null){for(let l=0;l<n.orderBy.length;++l)if(n.orderBy[l].field.isEqual(e)){const c=t.position[l];Qb({value:i,inclusive:a},{value:c,inclusive:t.inclusive})<0&&(i=c,a=t.inclusive);break}}return{value:i,inclusive:a}}function Zb(n,e,t){let i=Ms,a=!0;for(const l of kp(n,e)){let c=Ms,d=!0;switch(l.op){case">=":case">":c=rU(l.value),d=!1;break;case"==":case"in":case"<=":c=l.value;break;case"<":c=l.value,d=!1;break;case"!=":case"not-in":c=Ms}Yb({value:i,inclusive:a},{value:c,inclusive:d})>0&&(i=c,a=d)}if(t!==null){for(let l=0;l<n.orderBy.length;++l)if(n.orderBy[l].field.isEqual(e)){const c=t.position[l];Yb({value:i,inclusive:a},{value:c,inclusive:t.inclusive})>0&&(i=c,a=t.inclusive);break}}return{value:i,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Q1(n,e,t,i,a,l,c,d){return new Yr(n,e,t,i,a,l,c,d)}function Au(n){return new Yr(n)}function eA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function oE(n){return n.collectionGroup!==null}function Fl(n){const e=de(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new tt(_t.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new kh(l,i))}),t.has(_t.keyField().canonicalString())||e.Ee.push(new kh(_t.keyField(),i))}return e.Ee}function On(n){const e=de(n);return e.de||(e.de=fU(e,Fl(n))),e.de}function fU(n,e){if(n.limitType==="F")return Qy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new kh(a.field,l)});const t=n.endAt?new Xs(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Xs(n.startAt.position,n.startAt.inclusive):null;return Qy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Yy(n,e){const t=n.filters.concat([e]);return new Yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Mp(n,e,t){return new Yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function nd(n,e){return td(On(n),On(e))&&n.limitType===e.limitType}function Y1(n){return`${mo(On(n))}|lt:${n.limitType}`}function Pl(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(a=>H1(a)).join(", ")}]`),Zh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>au(a)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>au(a)).join(",")),`Target(${i})`}(On(n))}; limitType=${n.limitType})`}function id(n,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):he.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,a){for(const l of Fl(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const g=Wb(c,d,p);return c.inclusive?g<=0:g<0}(i.startAt,Fl(i),a)||i.endAt&&!function(c,d,p){const g=Wb(c,d,p);return c.inclusive?g>=0:g>0}(i.endAt,Fl(i),a))}(n,e)}function W1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function X1(n){return(e,t)=>{let i=!1;for(const a of Fl(n)){const l=pU(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function pU(n,e,t){const i=n.field.isKeyField()?he.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Ws(p,g):pe(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return pe(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){aa(this.inner,(t,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return N1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU=new ut(he.comparator);function jn(){return mU}const J1=new ut(he.comparator);function nh(...n){let e=J1;for(const t of n)e=e.insert(t.key,t);return e}function Z1(n){let e=J1;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function sr(){return mh()}function eC(){return mh()}function mh(){return new Wr(n=>n.toString(),(n,e)=>n.isEqual(e))}const gU=new ut(he.comparator),_U=new tt(he.comparator);function Pe(...n){let e=_U;for(const t of n)e=e.add(t);return e}const yU=new tt(Re);function lE(){return yU}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ch(e)?"-0":e}}function tC(n){return{integerValue:""+n}}function nC(n,e){return T1(e)?tC(e):uE(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this._=void 0}}function vU(n,e,t){return n instanceof lu?function(a,l){const c={fields:{[V1]:{stringValue:O1},[M1]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&ym(l)&&(l=vm(l)),l&&(c.fields[k1]=l),{mapValue:c}}(t,e):n instanceof go?rC(n,e):n instanceof _o?sC(n,e):function(a,l){const c=iC(a,l),d=tA(c)+tA(a.Re);return Hy(c)&&Hy(a.Re)?tC(d):uE(a.serializer,d)}(n,e)}function EU(n,e,t){return n instanceof go?rC(n,e):n instanceof _o?sC(n,e):t}function iC(n,e){return n instanceof uu?function(i){return Hy(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class lu extends Tm{}class go extends Tm{constructor(e){super(),this.elements=e}}function rC(n,e){const t=aC(e);for(const i of n.elements)t.some(a=>hr(a,i))||t.push(i);return{arrayValue:{values:t}}}class _o extends Tm{constructor(e){super(),this.elements=e}}function sC(n,e){let t=aC(e);for(const i of n.elements)t=t.filter(a=>!hr(a,i));return{arrayValue:{values:t}}}class uu extends Tm{constructor(e,t){super(),this.serializer=e,this.Re=t}}function tA(n){return mt(n.integerValue||n.doubleValue)}function aC(n){return Vh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.field=e,this.transform=t}}function TU(n,e){return n.field.isEqual(e.field)&&function(i,a){return i instanceof go&&a instanceof go||i instanceof _o&&a instanceof _o?Zl(i.elements,a.elements,hr):i instanceof uu&&a instanceof uu?hr(i.Re,a.Re):i instanceof lu&&a instanceof lu}(n.transform,e.transform)}class wU{constructor(e,t){this.version=e,this.transformResults=t}}class yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cp(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wm{}function oC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ru(n.key,yt.none()):new Su(n.key,n.data,yt.none());{const t=n.data,i=mn.empty();let a=new tt(_t.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new Xr(n.key,i,new qn(a.toArray()),yt.none())}}function IU(n,e,t){n instanceof Su?function(a,l,c){const d=a.value.clone(),p=iA(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Xr?function(a,l,c){if(!cp(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=iA(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(lC(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function gh(n,e,t,i){return n instanceof Su?function(l,c,d,p){if(!cp(l.precondition,c))return d;const g=l.value.clone(),y=rA(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,i):n instanceof Xr?function(l,c,d,p){if(!cp(l.precondition,c))return d;const g=rA(l.fieldTransforms,p,c),y=c.data;return y.setAll(lC(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(v=>v.field))}(n,e,t,i):function(l,c,d){return cp(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function bU(n,e){let t=null;for(const i of n.fieldTransforms){const a=e.data.field(i.field),l=iC(i.transform,a||null);l!=null&&(t===null&&(t=mn.empty()),t.set(i.field,l))}return t||null}function nA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Zl(i,a,(l,c)=>TU(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Su extends wm{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Xr extends wm{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function lC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function iA(n,e,t){const i=new Map;ge(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,EU(c,d,t[a]))}return i}function rA(n,e,t){const i=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);i.set(a.field,vU(l,c,e))}return i}class Ru extends wm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cE extends wm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&IU(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=gh(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=gh(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=eC();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=oC(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(_e.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Zl(this.mutations,e.mutations,(t,i)=>nA(t,i))&&Zl(this.baseMutations,e.baseMutations,(t,i)=>nA(t,i))}}class dE{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){ge(e.mutations.length===i.length,58842,{fe:e.mutations.length,ge:i.length});let a=function(){return gU}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new dE(e,t,i,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft,Ge;function uC(n){switch(n){case $.OK:return pe(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return pe(15467,{code:n})}}function cC(n){if(n===void 0)return Vt("GRPC error has no .code"),$.UNKNOWN;switch(n){case Ft.OK:return $.OK;case Ft.CANCELLED:return $.CANCELLED;case Ft.UNKNOWN:return $.UNKNOWN;case Ft.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ft.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ft.INTERNAL:return $.INTERNAL;case Ft.UNAVAILABLE:return $.UNAVAILABLE;case Ft.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ft.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ft.NOT_FOUND:return $.NOT_FOUND;case Ft.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ft.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ft.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ft.ABORTED:return $.ABORTED;case Ft.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ft.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ft.DATA_LOSS:return $.DATA_LOSS;default:return pe(39323,{code:n})}}(Ge=Ft||(Ft={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SU=new zs([4294967295,4294967295],0);function sA(n){const e=Xv().encode(n),t=new a1;return t.update(e),new Uint8Array(t.digest())}function aA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new zs([t,i],0),new zs([a,l],0)]}class pE{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ih(`Invalid padding: ${t}`);if(i<0)throw new ih(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ih(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ih(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=zs.fromNumber(this.pe)}we(e,t,i){let a=e.add(t.multiply(zs.fromNumber(i)));return a.compare(SU)===1&&(a=new zs([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=sA(e),[i,a]=aA(t);for(let l=0;l<this.hashCount;l++){const c=this.we(i,a,l);if(!this.be(c))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new pE(l,a,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.pe===0)return;const t=sA(e),[i,a]=aA(t);for(let l=0;l<this.hashCount;l++){const c=this.we(i,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ih extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,ad.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new sd(_e.min(),a,new ut(Re),jn(),Pe())}}class ad{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ad(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t,i,a){this.De=e,this.removedTargetIds=t,this.key=i,this.ve=a}}class hC{constructor(e,t){this.targetId=e,this.Ce=t}}class dC{constructor(e,t,i=Ct.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class oA{constructor(){this.Fe=0,this.Me=lA(),this.xe=Ct.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),t=Pe(),i=Pe();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:pe(38017,{changeType:l})}}),new ad(this.xe,this.Oe,e,t,i)}Qe(){this.Ne=!1,this.Me=lA()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ge(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class RU{constructor(e){this.ze=e,this.je=new Map,this.He=jn(),this.Je=jf(),this.Ye=jf(),this.Ze=new ut(Re)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const i=this.rt(t);switch(e.state){case 0:this.it(t)&&i.ke(e.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(e.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(t);break;case 3:this.it(t)&&(i.Ge(),i.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),i.ke(e.resumeToken));break;default:pe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((i,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,i=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Vp(l))if(i===0){const c=new he(l.path);this.tt(t,c,ht.newNoDocument(c,_e.min()))}else ge(i===1,20013,{expectedCount:i});else{const c=this.ut(t);if(c!==i){const d=this.ct(e),p=d?this.lt(d,e,c):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Hr(i).toUint8Array()}catch(p){if(p instanceof x1)return cr("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new pE(c,a,l)}catch(p){return cr(p instanceof ih?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,i){return t.Ce.count===i-this.Tt(e,t.targetId)?0:2}Tt(e,t){const i=this.ze.getRemoteKeysForTarget(t);let a=0;return i.forEach(l=>{const c=this.ze.Pt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const d=this._t(c);if(d){if(l.current&&Vp(d.target)){const p=new he(d.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,ht.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let i=Pe();this.Ye.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new sd(e,t,this.Ze,this.He,i);return this.He=jn(),this.Je=jf(),this.Ye=jf(),this.Ze=new ut(Re),a}et(e,t){if(!this.it(e))return;const i=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,i),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,i){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),i&&(this.He=this.He.insert(t,i))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new oA,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new tt(Re),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new tt(Re),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new oA),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function jf(){return new ut(he.comparator)}function lA(){return new ut(he.comparator)}const CU={asc:"ASCENDING",desc:"DESCENDING"},DU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PU={and:"AND",or:"OR"};class NU{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wy(n,e){return n.useProto3Json||Zh(e)?e:{value:e}}function cu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xU(n,e){return cu(n,e.toTimestamp())}function kt(n){return ge(!!n,49232),_e.fromTimestamp(function(t){const i=Gr(t);return new vt(i.seconds,i.nanos)}(n))}function mE(n,e){return Xy(n,e).canonicalString()}function Xy(n,e){const t=function(a){return new Be(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function pC(n){const e=Be.fromString(n);return ge(bC(e),10190,{key:e.toString()}),e}function Mh(n,e){return mE(n.databaseId,e.path)}function or(n,e){const t=pC(e);if(t.get(1)!==n.databaseId.projectId)throw new ee($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new he(_C(t))}function mC(n,e){return mE(n.databaseId,e)}function gC(n){const e=pC(n);return e.length===4?Be.emptyPath():_C(e)}function Jy(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _C(n){return ge(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function uA(n,e,t){return{name:Mh(n,e),fields:t.value.mapValue.fields}}function yC(n,e,t){const i=or(n,e.name),a=kt(e.updateTime),l=e.createTime?kt(e.createTime):_e.min(),c=new mn({mapValue:{fields:e.fields}}),d=ht.newFoundDocument(i,a,l,c);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function OU(n,e){return"found"in e?function(i,a){ge(!!a.found,43571),a.found.name,a.found.updateTime;const l=or(i,a.found.name),c=kt(a.found.updateTime),d=a.found.createTime?kt(a.found.createTime):_e.min(),p=new mn({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(l,c,d,p)}(n,e):"missing"in e?function(i,a){ge(!!a.missing,3894),ge(!!a.readTime,22933);const l=or(i,a.missing),c=kt(a.readTime);return ht.newNoDocument(l,c)}(n,e):pe(7234,{result:e})}function VU(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:pe(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(ge(y===void 0||typeof y=="string",58123),Ct.fromBase64String(y||"")):(ge(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),Ct.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const y=g.code===void 0?$.UNKNOWN:cC(g.code);return new ee(y,g.message||"")}(c);t=new dC(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=or(n,i.document.name),l=kt(i.document.updateTime),c=i.document.createTime?kt(i.document.createTime):_e.min(),d=new mn({mapValue:{fields:i.document.fields}}),p=ht.newFoundDocument(a,l,c,d),g=i.targetIds||[],y=i.removedTargetIds||[];t=new hp(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=or(n,i.document),l=i.readTime?kt(i.readTime):_e.min(),c=ht.newNoDocument(a,l),d=i.removedTargetIds||[];t=new hp([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=or(n,i.document),l=i.removedTargetIds||[];t=new hp([],l,a,null)}else{if(!("filter"in e))return pe(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new AU(a,l),d=i.targetId;t=new hC(d,c)}}return t}function Lh(n,e){let t;if(e instanceof Su)t={update:uA(n,e.key,e.value)};else if(e instanceof Ru)t={delete:Mh(n,e.key)};else if(e instanceof Xr)t={update:uA(n,e.key,e.data),updateMask:zU(e.fieldMask)};else{if(!(e instanceof cE))return pe(16599,{ft:e.type});t={verify:Mh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof lu)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof go)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof _o)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof uu)return{fieldPath:c.field.canonicalString(),increment:d.Re};throw pe(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:xU(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:pe(27497)}(n,e.precondition)),t}function Zy(n,e){const t=e.currentDocument?function(l){return l.updateTime!==void 0?yt.updateTime(kt(l.updateTime)):l.exists!==void 0?yt.exists(l.exists):yt.none()}(e.currentDocument):yt.none(),i=e.updateTransforms?e.updateTransforms.map(a=>function(c,d){let p=null;if("setToServerValue"in d)ge(d.setToServerValue==="REQUEST_TIME",16630,{proto:d}),p=new lu;else if("appendMissingElements"in d){const y=d.appendMissingElements.values||[];p=new go(y)}else if("removeAllFromArray"in d){const y=d.removeAllFromArray.values||[];p=new _o(y)}else"increment"in d?p=new uu(c,d.increment):pe(16584,{proto:d});const g=_t.fromServerFormat(d.fieldPath);return new rd(g,p)}(n,a)):[];if(e.update){e.update.name;const a=or(n,e.update.name),l=new mn({mapValue:{fields:e.update.fields}});if(e.updateMask){const c=function(p){const g=p.fieldPaths||[];return new qn(g.map(y=>_t.fromServerFormat(y)))}(e.updateMask);return new Xr(a,l,c,t,i)}return new Su(a,l,t,i)}if(e.delete){const a=or(n,e.delete);return new Ru(a,t)}if(e.verify){const a=or(n,e.verify);return new cE(a,t)}return pe(1463,{proto:e})}function kU(n,e){return n&&n.length>0?(ge(e!==void 0,14353),n.map(t=>function(a,l){let c=a.updateTime?kt(a.updateTime):kt(l);return c.isEqual(_e.min())&&(c=kt(l)),new wU(c,a.transformResults||[])}(t,e))):[]}function vC(n,e){return{documents:[mC(n,e.path)]}}function EC(n,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=mC(n,a);const l=function(g){if(g.length!==0)return IC(et.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(w){return{field:Nl(w.field),direction:LU(w.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Wy(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function TC(n){let e=gC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){ge(i===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(v){const w=wC(v);return w instanceof et&&aE(w)?w.getFilters():[w]}(t.where));let c=[];t.orderBy&&(c=function(v){return v.map(w=>function(L){return new kh(xl(L.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,Zh(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(v){const w=!!v.before,C=v.values||[];return new Xs(C,w)}(t.startAt));let g=null;return t.endAt&&(g=function(v){const w=!v.before,C=v.values||[];return new Xs(C,w)}(t.endAt)),Q1(e,a,c,l,d,"F",p,g)}function MU(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=xl(t.unaryFilter.field);return ze.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=xl(t.unaryFilter.field);return ze.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=xl(t.unaryFilter.field);return ze.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=xl(t.unaryFilter.field);return ze.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}}(n):n.fieldFilter!==void 0?function(t){return ze.create(xl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return et.create(t.compositeFilter.filters.map(i=>wC(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return pe(1026)}}(t.compositeFilter.op))}(n):pe(30097,{filter:n})}function LU(n){return CU[n]}function UU(n){return DU[n]}function BU(n){return PU[n]}function Nl(n){return{fieldPath:n.canonicalString()}}function xl(n){return _t.fromServerFormat(n.fieldPath)}function IC(n){return n instanceof ze?function(t){if(t.op==="=="){if(Kb(t.value))return{unaryFilter:{field:Nl(t.field),op:"IS_NAN"}};if($b(t.value))return{unaryFilter:{field:Nl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kb(t.value))return{unaryFilter:{field:Nl(t.field),op:"IS_NOT_NAN"}};if($b(t.value))return{unaryFilter:{field:Nl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nl(t.field),op:UU(t.op),value:t.value}}}(n):n instanceof et?function(t){const i=t.getFilters().map(a=>IC(a));return i.length===1?i[0]:{compositeFilter:{op:BU(t.op),filters:i}}}(n):pe(54877,{filter:n})}function zU(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t,i,a,l=_e.min(),c=_e.min(),d=Ct.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.wt=e}}function FU(n,e){let t;if(e.document)t=yC(n.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=he.fromSegments(e.noDocument.path),a=vo(e.noDocument.readTime);t=ht.newNoDocument(i,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return pe(56709);{const i=he.fromSegments(e.unknownDocument.path),a=vo(e.unknownDocument.version);t=ht.newUnknownDocument(i,a)}}return e.readTime&&t.setReadTime(function(a){const l=new vt(a[0],a[1]);return _e.fromTimestamp(l)}(e.readTime)),t}function cA(n,e){const t=e.key,i={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Lp(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=function(l,c){return{name:Mh(l,c.key),fields:c.data.value.mapValue.fields,updateTime:cu(l,c.version.toTimestamp()),createTime:cu(l,c.createTime.toTimestamp())}}(n.wt,e);else if(e.isNoDocument())i.noDocument={path:t.path.toArray(),readTime:yo(e.version)};else{if(!e.isUnknownDocument())return pe(57904,{document:e});i.unknownDocument={path:t.path.toArray(),version:yo(e.version)}}return i}function Lp(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function yo(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function vo(n){const e=new vt(n.seconds,n.nanoseconds);return _e.fromTimestamp(e)}function Wa(n,e){const t=(e.baseMutations||[]).map(l=>Zy(n.wt,l));for(let l=0;l<e.mutations.length-1;++l){const c=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const d=e.mutations[l+1];c.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const i=e.mutations.map(l=>Zy(n.wt,l)),a=vt.fromMillis(e.localWriteTimeMs);return new hE(e.batchId,a,t,i)}function rh(n){const e=vo(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?vo(n.lastLimboFreeSnapshotVersion):_e.min();let i;return i=function(l){return l.documents!==void 0}(n.query)?function(l){const c=l.documents.length;return ge(c===1,1966,{count:c}),On(Au(gC(l.documents[0])))}(n.query):function(l){return On(TC(l))}(n.query),new zr(i,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ct.fromBase64String(n.resumeToken))}function SC(n,e){const t=yo(e.snapshotVersion),i=yo(e.lastLimboFreeSnapshotVersion);let a;a=Vp(e.target)?vC(n.wt,e.target):EC(n.wt,e.target).gt;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:mo(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:a}}function gE(n){const e=TC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mp(e,e.limit,"L"):e}function ly(n,e){return new fE(e.largestBatchId,Zy(n.wt,e.overlayMutation))}function hA(n,e){const t=e.path.lastSegment();return[n,bn(e.path.popLast()),t]}function dA(n,e,t,i){return{indexId:n,uid:e,sequenceNumber:t,readTime:yo(i.readTime),documentKey:bn(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qU{getBundleMetadata(e,t){return fA(e).get(t).next(i=>{if(i)return function(l){return{id:l.bundleId,createTime:vo(l.createTime),version:l.version}}(i)})}saveBundleMetadata(e,t){return fA(e).put(function(a){return{bundleId:a.id,createTime:yo(kt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return pA(e).get(t).next(i=>{if(i)return function(l){return{name:l.name,query:gE(l.bundledQuery),readTime:vo(l.readTime)}}(i)})}saveNamedQuery(e,t){return pA(e).put(function(a){return{name:a.name,readTime:yo(kt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function fA(n){return Xt(n,mm)}function pA(n){return Xt(n,gm)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.serializer=e,this.userId=t}static bt(e,t){const i=t.uid||"";return new Im(e,i)}getOverlay(e,t){return $c(e).get(hA(this.userId,t)).next(i=>i?ly(this.serializer,i):null)}getOverlays(e,t){const i=sr();return z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,t,i){const a=[];return i.forEach((l,c)=>{const d=new fE(t,c);a.push(this.St(e,d))}),z.waitFor(a)}removeOverlaysForBatchId(e,t,i){const a=new Set;t.forEach(c=>a.add(bn(c.getCollectionPath())));const l=[];return a.forEach(c=>{const d=IDBKeyRange.bound([this.userId,c,i],[this.userId,c,i+1],!1,!0);l.push($c(e).X(Fy,d))}),z.waitFor(l)}getOverlaysForCollection(e,t,i){const a=sr(),l=bn(t),c=IDBKeyRange.bound([this.userId,l,i],[this.userId,l,Number.POSITIVE_INFINITY],!0);return $c(e).J(Fy,c).next(d=>{for(const p of d){const g=ly(this.serializer,p);a.set(g.getKey(),g)}return a})}getOverlaysForCollectionGroup(e,t,i,a){const l=sr();let c;const d=IDBKeyRange.bound([this.userId,t,i],[this.userId,t,Number.POSITIVE_INFINITY],!0);return $c(e).te({index:R1,range:d},(p,g,y)=>{const v=ly(this.serializer,g);l.size()<a||v.largestBatchId===c?(l.set(v.getKey(),v),c=v.largestBatchId):y.done()}).next(()=>l)}St(e,t){return $c(e).put(function(a,l,c){const[d,p,g]=hA(l,c.mutation.key);return{userId:l,collectionPath:p,documentId:g,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:Lh(a.wt,c.mutation)}}(this.serializer,this.userId,t))}}function $c(n){return Xt(n,_m)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{Dt(e){return Xt(e,nE)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const i=t==null?void 0:t.value;return i?Ct.fromUint8Array(i):Ct.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(mt(e.integerValue));else if("doubleValue"in e){const i=mt(e.doubleValue);isNaN(i)?this.Mt(t,13):(this.Mt(t,15),Ch(i)?t.xt(0):t.xt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Mt(t,20),typeof i=="string"&&(i=Gr(i)),t.Ot(`${i.seconds||""}`),t.xt(i.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Hr(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.Mt(t,45),t.xt(i.latitude||0),t.xt(i.longitude||0)}else"mapValue"in e?U1(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):Em(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):pe(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const i=e.fields||{};this.Mt(t,55);for(const a of Object.keys(i))this.Nt(a,t),this.Ct(i[a],t)}qt(e,t){var i,a;const l=e.fields||{};this.Mt(t,53);const c=su,d=((a=(i=l[c].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.length)||0;this.Mt(t,15),t.xt(mt(d)),this.Nt(c,t),this.Ct(l[c],t)}$t(e,t){const i=e.values||[];this.Mt(t,50);for(const a of i)this.Ct(a,t)}kt(e,t){this.Mt(t,37),he.fromName(e).path.forEach(i=>{this.Mt(t,60),this.Kt(i,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}Xa.Wt=new Xa;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=255;function GU(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function mA(n){const e=64-function(i){let a=0;for(let l=0;l<8;++l){const c=GU(255&i[l]);if(a+=c,c!==8)break}return a}(n);return Math.ceil(e/8)}class HU{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.zt(i.value),i=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Jt(i.value),i=t.next();this.Yt()}Zt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.zt(i);else if(i<2048)this.zt(960|i>>>6),this.zt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|i>>>12),this.zt(128|63&i>>>6),this.zt(128|63&i);else{const a=t.codePointAt(0);this.zt(240|a>>>18),this.zt(128|63&a>>>12),this.zt(128|63&a>>>6),this.zt(128|63&a)}}this.jt()}Xt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Jt(i);else if(i<2048)this.Jt(960|i>>>6),this.Jt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Yt()}en(e){const t=this.tn(e),i=mA(t);this.nn(1+i),this.buffer[this.position++]=255&i;for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=255&t[a]}rn(e){const t=this.tn(e),i=mA(t);this.nn(1+i),this.buffer[this.position++]=~(255&i);for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}sn(){this._n(Al),this._n(255)}an(){this.un(Al),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(l){const c=new DataView(new ArrayBuffer(8));return c.setFloat64(0,l,!1),new Uint8Array(c.buffer)}(e),i=!!(128&t[0]);t[0]^=i?255:128;for(let a=1;a<t.length;++a)t[a]^=i?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Al?(this._n(Al),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===Al?(this.un(Al),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let i=2*this.buffer.length;i<t&&(i=t);const a=new Uint8Array(i);a.set(this.buffer),this.buffer=a}}class $U{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class KU{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Kc{constructor(){this.ln=new HU,this.hn=new $U(this.ln),this.Pn=new KU(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,i,a){this.indexId=e,this.documentKey=t,this.arrayValue=i,this.directionalValue=a}In(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,i=new Uint8Array(t);return i.set(this.directionalValue,0),t!==e?i.set([0],this.directionalValue.length):++i[i.length-1],new Ja(this.indexId,this.documentKey,this.arrayValue,i)}}function Cs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=gA(n.arrayValue,e.arrayValue),t!==0?t:(t=gA(n.directionalValue,e.directionalValue),t!==0?t:he.comparator(n.documentKey,e.documentKey)))}function gA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const i=n[t]-e[t];if(i!==0)return i}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.En=new tt((t,i)=>_t.comparator(t.field,i.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.An=[];for(const t of e.filters){const i=t;i.isInequality()?this.En=this.En.add(i):this.An.push(i)}}get Rn(){return this.En.size>1}Vn(e){if(ge(e.collectionGroup===this.collectionId,49279),this.Rn)return!1;const t=Uy(e);if(t!==void 0&&!this.mn(t))return!1;const i=Ka(e);let a=new Set,l=0,c=0;for(;l<i.length&&this.mn(i[l]);++l)a=a.add(i[l].fieldPath.canonicalString());if(l===i.length)return!0;if(this.En.size>0){const d=this.En.getIterator().getNext();if(!a.has(d.field.canonicalString())){const p=i[l];if(!this.fn(d,p)||!this.gn(this.dn[c++],p))return!1}++l}for(;l<i.length;++l){const d=i[l];if(c>=this.dn.length||!this.gn(this.dn[c++],d))return!1}return!0}pn(){if(this.Rn)return null;let e=new tt(_t.comparator);const t=[];for(const i of this.An)if(!i.field.isKeyField())if(i.op==="array-contains"||i.op==="array-contains-any")t.push(new rp(i.field,2));else{if(e.has(i.field))continue;e=e.add(i.field),t.push(new rp(i.field,0))}for(const i of this.dn)i.field.isKeyField()||e.has(i.field)||(e=e.add(i.field),t.push(new rp(i.field,i.dir==="asc"?0:1)));return new Cp(Cp.UNKNOWN_ID,this.collectionId,t,Rh.empty())}mn(e){for(const t of this.An)if(this.fn(t,e))return!0;return!1}fn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===i}gn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(n){var e,t;if(ge(n instanceof ze||n instanceof et,20012),n instanceof ze){if(n instanceof K1){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(l=>ze.create(n.field,"==",l)))||[];return et.create(a,"or")}return n}const i=n.filters.map(a=>RC(a));return et.create(i,n.op)}function QU(n){if(n.getFilters().length===0)return[];const e=nv(RC(n));return ge(CC(e),7391),ev(e)||tv(e)?[e]:e.getFilters()}function ev(n){return n instanceof ze}function tv(n){return n instanceof et&&aE(n)}function CC(n){return ev(n)||tv(n)||function(t){if(t instanceof et&&$y(t)){for(const i of t.getFilters())if(!ev(i)&&!tv(i))return!1;return!0}return!1}(n)}function nv(n){if(ge(n instanceof ze||n instanceof et,34018),n instanceof ze)return n;if(n.filters.length===1)return nv(n.filters[0]);const e=n.filters.map(i=>nv(i));let t=et.create(e,n.op);return t=Up(t),CC(t)?t:(ge(t instanceof et,64498),ge(ou(t),40251),ge(t.filters.length>1,57927),t.filters.reduce((i,a)=>_E(i,a)))}function _E(n,e){let t;return ge(n instanceof ze||n instanceof et,38388),ge(e instanceof ze||e instanceof et,25473),t=n instanceof ze?e instanceof ze?function(a,l){return et.create([a,l],"and")}(n,e):yA(n,e):e instanceof ze?yA(e,n):function(a,l){if(ge(a.filters.length>0&&l.filters.length>0,48005),ou(a)&&ou(l))return G1(a,l.getFilters());const c=$y(a)?a:l,d=$y(a)?l:a,p=c.filters.map(g=>_E(g,d));return et.create(p,"or")}(n,e),Up(t)}function yA(n,e){if(ou(e))return G1(e,n.getFilters());{const t=e.filters.map(i=>_E(n,i));return et.create(t,"or")}}function Up(n){if(ge(n instanceof ze||n instanceof et,11850),n instanceof ze)return n;const e=n.getFilters();if(e.length===1)return Up(e[0]);if(q1(n))return n;const t=e.map(a=>Up(a)),i=[];return t.forEach(a=>{a instanceof ze?i.push(a):a instanceof et&&(a.op===n.op?i.push(...a.filters):i.push(a))}),i.length===1?i[0]:et.create(i,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU{constructor(){this.yn=new yE}addToCollectionParentIndex(e,t){return this.yn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(ri.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(ri.min())}updateCollectionGroup(e,t,i){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class yE{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new tt(Be.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new tt(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="IndexedDbIndexManager",Gf=new Uint8Array(0);class WU{constructor(e,t){this.databaseId=t,this.wn=new yE,this.bn=new Wr(i=>mo(i),(i,a)=>td(i,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.wn.has(t)){const i=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.wn.add(t)});const l={collectionId:i,parent:bn(a)};return EA(e).put(l)}return z.resolve()}getCollectionParents(e,t){const i=[],a=IDBKeyRange.bound([t,""],[m1(t),""],!1,!0);return EA(e).J(a).next(l=>{for(const c of l){if(c.collectionId!==t)break;i.push(rr(c.parent))}return i})}addFieldIndex(e,t){const i=Qc(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(p=>[p.fieldPath.canonicalString(),p.kind])}}(t);delete a.indexId;const l=i.add(a);if(t.indexState){const c=Rl(e);return l.next(d=>{c.put(dA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return l.next()}deleteFieldIndex(e,t){const i=Qc(e),a=Rl(e),l=Sl(e);return i.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Qc(e),i=Sl(e),a=Rl(e);return t.X().next(()=>i.X()).next(()=>a.X())}createTargetIndexes(e,t){return z.forEach(this.Sn(t),i=>this.getIndexType(e,i).next(a=>{if(a===0||a===1){const l=new _A(i).pn();if(l!=null)return this.addFieldIndex(e,l)}}))}getDocumentsMatchingTarget(e,t){const i=Sl(e);let a=!0;const l=new Map;return z.forEach(this.Sn(t),c=>this.Dn(e,c).next(d=>{a&&(a=!!d),l.set(c,d)})).next(()=>{if(a){let c=Pe();const d=[];return z.forEach(l,(p,g)=>{te(vA,`Using index ${function(X){return`id=${X.indexId}|cg=${X.collectionGroup}|f=${X.fields.map(fe=>`${fe.fieldPath}:${fe.kind}`).join(",")}`}(p)} to execute ${mo(t)}`);const y=function(X,fe){const ae=Uy(fe);if(ae===void 0)return null;for(const ce of kp(X,ae.fieldPath))switch(ce.op){case"array-contains-any":return ce.value.arrayValue.values||[];case"array-contains":return[ce.value]}return null}(g,p),v=function(X,fe){const ae=new Map;for(const ce of Ka(fe))for(const S of kp(X,ce.fieldPath))switch(S.op){case"==":case"in":ae.set(ce.fieldPath.canonicalString(),S.value);break;case"not-in":case"!=":return ae.set(ce.fieldPath.canonicalString(),S.value),Array.from(ae.values())}return null}(g,p),w=function(X,fe){const ae=[];let ce=!0;for(const S of Ka(fe)){const A=S.kind===0?Jb(X,S.fieldPath,X.startAt):Zb(X,S.fieldPath,X.startAt);ae.push(A.value),ce&&(ce=A.inclusive)}return new Xs(ae,ce)}(g,p),C=function(X,fe){const ae=[];let ce=!0;for(const S of Ka(fe)){const A=S.kind===0?Zb(X,S.fieldPath,X.endAt):Jb(X,S.fieldPath,X.endAt);ae.push(A.value),ce&&(ce=A.inclusive)}return new Xs(ae,ce)}(g,p),L=this.vn(p,g,w),j=this.vn(p,g,C),U=this.Cn(p,g,v),ie=this.Fn(p.indexId,y,L,w.inclusive,j,C.inclusive,U);return z.forEach(ie,ne=>i.Z(ne,t.limit).next(X=>{X.forEach(fe=>{const ae=he.fromSegments(fe.documentKey);c.has(ae)||(c=c.add(ae),d.push(ae))})}))}).next(()=>d)}return z.resolve(null)})}Sn(e){let t=this.bn.get(e);return t||(e.filters.length===0?t=[e]:t=QU(et.create(e.filters,"and")).map(i=>Qy(e.path,e.collectionGroup,e.orderBy,i.getFilters(),e.limit,e.startAt,e.endAt)),this.bn.set(e,t),t)}Fn(e,t,i,a,l,c,d){const p=(t!=null?t.length:1)*Math.max(i.length,l.length),g=p/(t!=null?t.length:1),y=[];for(let v=0;v<p;++v){const w=t?this.Mn(t[v/g]):Gf,C=this.xn(e,w,i[v%g],a),L=this.On(e,w,l[v%g],c),j=d.map(U=>this.xn(e,w,U,!0));y.push(...this.createRange(C,L,j))}return y}xn(e,t,i,a){const l=new Ja(e,he.empty(),t,i);return a?l:l.In()}On(e,t,i,a){const l=new Ja(e,he.empty(),t,i);return a?l.In():l}Dn(e,t){const i=new _A(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(l=>{let c=null;for(const d of l)i.Vn(d)&&(!c||d.fields.length>c.fields.length)&&(c=d);return c})}getIndexType(e,t){let i=2;const a=this.Sn(t);return z.forEach(a,l=>this.Dn(e,l).next(c=>{c?i!==0&&c.fields.length<function(p){let g=new tt(_t.comparator),y=!1;for(const v of p.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?y=!0:g=g.add(w.field));for(const v of p.orderBy)v.field.isKeyField()||(g=g.add(v.field));return g.size+(y?1:0)}(l)&&(i=1):i=0})).next(()=>function(c){return c.limit!==null}(t)&&a.length>1&&i===2?1:i)}Nn(e,t){const i=new Kc;for(const a of Ka(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const c=i.Tn(a.kind);Xa.Wt.vt(l,c)}return i.cn()}Mn(e){const t=new Kc;return Xa.Wt.vt(e,t.Tn(0)),t.cn()}Bn(e,t){const i=new Kc;return Xa.Wt.vt(po(this.databaseId,t),i.Tn(function(l){const c=Ka(l);return c.length===0?0:c[c.length-1].kind}(e))),i.cn()}Cn(e,t,i){if(i===null)return[];let a=[];a.push(new Kc);let l=0;for(const c of Ka(e)){const d=i[l++];for(const p of a)if(this.Ln(t,c.fieldPath)&&Vh(d))a=this.kn(a,c,d);else{const g=p.Tn(c.kind);Xa.Wt.vt(d,g)}}return this.qn(a)}vn(e,t,i){return this.Cn(e,t,i.position)}qn(e){const t=[];for(let i=0;i<e.length;++i)t[i]=e[i].cn();return t}kn(e,t,i){const a=[...e],l=[];for(const c of i.arrayValue.values||[])for(const d of a){const p=new Kc;p.seed(d.cn()),Xa.Wt.vt(c,p.Tn(t.kind)),l.push(p)}return l}Ln(e,t){return!!e.filters.find(i=>i instanceof ze&&i.field.isEqual(t)&&(i.op==="in"||i.op==="not-in"))}getFieldIndexes(e,t){const i=Qc(e),a=Rl(e);return(t?i.J(zy,IDBKeyRange.bound(t,t)):i.J()).next(l=>{const c=[];return z.forEach(l,d=>a.get([d.indexId,this.uid]).next(p=>{c.push(function(y,v){const w=v?new Rh(v.sequenceNumber,new ri(vo(v.readTime),new he(rr(v.documentKey)),v.largestBatchId)):Rh.empty(),C=y.fields.map(([L,j])=>new rp(_t.fromServerFormat(L),j));return new Cp(y.indexId,y.collectionGroup,C,w)}(d,p))})).next(()=>c)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((i,a)=>{const l=i.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Re(i.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,i){const a=Qc(e),l=Rl(e);return this.Qn(e).next(c=>a.J(zy,IDBKeyRange.bound(t,t)).next(d=>z.forEach(d,p=>l.put(dA(p.indexId,this.uid,c,i)))))}updateIndexEntries(e,t){const i=new Map;return z.forEach(t,(a,l)=>{const c=i.get(a.collectionGroup);return(c?z.resolve(c):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(i.set(a.collectionGroup,d),z.forEach(d,p=>this.$n(e,a,p).next(g=>{const y=this.Un(l,p);return g.isEqual(y)?z.resolve():this.Kn(e,l,p,g,y)}))))})}Wn(e,t,i,a){return Sl(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.Bn(i,t.key),documentKey:t.key.path.toArray()})}Gn(e,t,i,a){return Sl(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.Bn(i,t.key),t.key.path.toArray()])}$n(e,t,i){const a=Sl(e);let l=new tt(Cs);return a.te({index:S1,range:IDBKeyRange.only([i.indexId,this.uid,this.Bn(i,t)])},(c,d)=>{l=l.add(new Ja(i.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>l)}Un(e,t){let i=new tt(Cs);const a=this.Nn(t,e);if(a==null)return i;const l=Uy(t);if(l!=null){const c=e.data.field(l.fieldPath);if(Vh(c))for(const d of c.arrayValue.values||[])i=i.add(new Ja(t.indexId,e.key,this.Mn(d),a))}else i=i.add(new Ja(t.indexId,e.key,Gf,a));return i}Kn(e,t,i,a,l){te(vA,"Updating index entries for document '%s'",t.key);const c=[];return function(p,g,y,v,w){const C=p.getIterator(),L=g.getIterator();let j=bl(C),U=bl(L);for(;j||U;){let ie=!1,ne=!1;if(j&&U){const X=y(j,U);X<0?ne=!0:X>0&&(ie=!0)}else j!=null?ne=!0:ie=!0;ie?(v(U),U=bl(L)):ne?(w(j),j=bl(C)):(j=bl(C),U=bl(L))}}(a,l,Cs,d=>{c.push(this.Wn(e,t,i,d))},d=>{c.push(this.Gn(e,t,i,d))}),z.waitFor(c)}Qn(e){let t=1;return Rl(e).te({index:A1,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(i,a,l)=>{l.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,i){i=i.sort((c,d)=>Cs(c,d)).filter((c,d,p)=>!d||Cs(c,p[d-1])!==0);const a=[];a.push(e);for(const c of i){const d=Cs(c,e),p=Cs(c,t);if(d===0)a[0]=e.In();else if(d>0&&p<0)a.push(c),a.push(c.In());else if(p>0)break}a.push(t);const l=[];for(let c=0;c<a.length;c+=2){if(this.zn(a[c],a[c+1]))return[];const d=[a[c].indexId,this.uid,a[c].arrayValue,a[c].directionalValue,Gf,[]],p=[a[c+1].indexId,this.uid,a[c+1].arrayValue,a[c+1].directionalValue,Gf,[]];l.push(IDBKeyRange.bound(d,p))}return l}zn(e,t){return Cs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(TA)}getMinOffset(e,t){return z.mapArray(this.Sn(t),i=>this.Dn(e,i).next(a=>a||pe(44426))).next(TA)}}function EA(n){return Xt(n,Nh)}function Sl(n){return Xt(n,Op)}function Qc(n){return Xt(n,tE)}function Rl(n){return Xt(n,xp)}function TA(n){ge(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let i=1;i<n.length;i++){const a=n[i].indexState.offset;Jv(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new ri(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DC=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(n,e,t){const i=n.store(Di),a=n.store(tu),l=[],c=IDBKeyRange.only(t.batchId);let d=0;const p=i.te({range:c},(y,v,w)=>(d++,w.delete()));l.push(p.next(()=>{ge(d===1,47070,{batchId:t.batchId})}));const g=[];for(const y of t.mutations){const v=w1(e,y.key.path,t.batchId);l.push(a.delete(v)),g.push(y.key)}return z.waitFor(l).next(()=>g)}function Bp(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw pe(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(DC,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class bm{constructor(e,t,i,a){this.userId=e,this.serializer=t,this.indexManager=i,this.referenceDelegate=a,this.jn={}}static bt(e,t,i,a){ge(e.uid!=="",64387);const l=e.isAuthenticated()?e.uid:"";return new bm(l,t,i,a)}checkEmpty(e){let t=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ds(e).te({index:no,range:i},(a,l,c)=>{t=!1,c.done()}).next(()=>t)}addMutationBatch(e,t,i,a){const l=Ol(e),c=Ds(e);return c.add({}).next(d=>{ge(typeof d=="number",49019);const p=new hE(d,t,i,a),g=function(C,L,j){const U=j.baseMutations.map(ne=>Lh(C.wt,ne)),ie=j.mutations.map(ne=>Lh(C.wt,ne));return{userId:L,batchId:j.batchId,localWriteTimeMs:j.localWriteTime.toMillis(),baseMutations:U,mutations:ie}}(this.serializer,this.userId,p),y=[];let v=new tt((w,C)=>Re(w.canonicalString(),C.canonicalString()));for(const w of a){const C=w1(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),y.push(c.put(g)),y.push(l.put(C,PL))}return v.forEach(w=>{y.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.jn[d]=p.keys()}),z.waitFor(y).next(()=>p)})}lookupMutationBatch(e,t){return Ds(e).get(t).next(i=>i?(ge(i.userId===this.userId,48,"Unexpected user for mutation batch",{userId:i.userId,batchId:t}),Wa(this.serializer,i)):null)}Hn(e,t){return this.jn[t]?z.resolve(this.jn[t]):this.lookupMutationBatch(e,t).next(i=>{if(i){const a=i.keys();return this.jn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=IDBKeyRange.lowerBound([this.userId,i]);let l=null;return Ds(e).te({index:no,range:a},(c,d,p)=>{d.userId===this.userId&&(ge(d.batchId>=i,47524,{Jn:i}),l=Wa(this.serializer,d)),p.done()}).next(()=>l)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=Fs;return Ds(e).te({index:no,range:t,reverse:!0},(a,l,c)=>{i=l.batchId,c.done()}).next(()=>i)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Fs],[this.userId,Number.POSITIVE_INFINITY]);return Ds(e).J(no,t).next(i=>i.map(a=>Wa(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const i=sp(this.userId,t.path),a=IDBKeyRange.lowerBound(i),l=[];return Ol(e).te({range:a},(c,d,p)=>{const[g,y,v]=c,w=rr(y);if(g===this.userId&&t.path.isEqual(w))return Ds(e).get(v).next(C=>{if(!C)throw pe(61480,{Yn:c,batchId:v});ge(C.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:C.userId,batchId:v}),l.push(Wa(this.serializer,C))});p.done()}).next(()=>l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new tt(Re);const a=[];return t.forEach(l=>{const c=sp(this.userId,l.path),d=IDBKeyRange.lowerBound(c),p=Ol(e).te({range:d},(g,y,v)=>{const[w,C,L]=g,j=rr(C);w===this.userId&&l.path.isEqual(j)?i=i.add(L):v.done()});a.push(p)}),z.waitFor(a).next(()=>this.Zn(e,i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1,l=sp(this.userId,i),c=IDBKeyRange.lowerBound(l);let d=new tt(Re);return Ol(e).te({range:c},(p,g,y)=>{const[v,w,C]=p,L=rr(w);v===this.userId&&i.isPrefixOf(L)?L.length===a&&(d=d.add(C)):y.done()}).next(()=>this.Zn(e,d))}Zn(e,t){const i=[],a=[];return t.forEach(l=>{a.push(Ds(e).get(l).next(c=>{if(c===null)throw pe(35274,{batchId:l});ge(c.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:c.userId,batchId:l}),i.push(Wa(this.serializer,c))}))}),z.waitFor(a).next(()=>i)}removeMutationBatch(e,t){return PC(e.he,this.userId,t).next(i=>(e.addOnCommittedListener(()=>{this.Xn(t.batchId)}),z.forEach(i,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}Xn(e){delete this.jn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return z.resolve();const i=IDBKeyRange.lowerBound(function(c){return[c]}(this.userId)),a=[];return Ol(e).te({range:i},(l,c,d)=>{if(l[0]===this.userId){const p=rr(l[1]);a.push(p)}else d.done()}).next(()=>{ge(a.length===0,56720,{er:a.map(l=>l.canonicalString())})})})}containsKey(e,t){return NC(e,this.userId,t)}tr(e){return xC(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Fs,lastStreamToken:""})}}function NC(n,e,t){const i=sp(e,t.path),a=i[1],l=IDBKeyRange.lowerBound(i);let c=!1;return Ol(n).te({range:l,ee:!0},(d,p,g)=>{const[y,v,w]=d;y===e&&v===a&&(c=!0),g.done()}).next(()=>c)}function Ds(n){return Xt(n,Di)}function Ol(n){return Xt(n,tu)}function xC(n){return Xt(n,Dh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Eo(0)}static ir(){return new Eo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.sr(e).next(t=>{const i=new Eo(t.highestTargetId);return t.highestTargetId=i.next(),this._r(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.sr(e).next(t=>_e.fromTimestamp(new vt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.sr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,i){return this.sr(e).next(a=>(a.highestListenSequenceNumber=t,i&&(a.lastRemoteSnapshotVersion=i.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this._r(e,a)))}addTargetData(e,t){return this.ar(e,t).next(()=>this.sr(e).next(i=>(i.targetCount+=1,this.ur(t,i),this._r(e,i))))}updateTargetData(e,t){return this.ar(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Cl(e).delete(t.targetId)).next(()=>this.sr(e)).next(i=>(ge(i.targetCount>0,8065),i.targetCount-=1,this._r(e,i)))}removeTargets(e,t,i){let a=0;const l=[];return Cl(e).te((c,d)=>{const p=rh(d);p.sequenceNumber<=t&&i.get(p.targetId)===null&&(a++,l.push(this.removeTargetData(e,p)))}).next(()=>z.waitFor(l)).next(()=>a)}forEachTarget(e,t){return Cl(e).te((i,a)=>{const l=rh(a);t(l)})}sr(e){return IA(e).get(Np).next(t=>(ge(t!==null,2888),t))}_r(e,t){return IA(e).put(Np,t)}ar(e,t){return Cl(e).put(SC(this.serializer,t))}ur(e,t){let i=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,i=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.sr(e).next(t=>t.targetCount)}getTargetData(e,t){const i=mo(t),a=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let l=null;return Cl(e).te({range:a,index:b1},(c,d,p)=>{const g=rh(d);td(t,g.target)&&(l=g,p.done())}).next(()=>l)}addMatchingKeys(e,t,i){const a=[],l=Os(e);return t.forEach(c=>{const d=bn(c.path);a.push(l.put({targetId:i,path:d})),a.push(this.referenceDelegate.addReference(e,i,c))}),z.waitFor(a)}removeMatchingKeys(e,t,i){const a=Os(e);return z.forEach(t,l=>{const c=bn(l.path);return z.waitFor([a.delete([i,c]),this.referenceDelegate.removeReference(e,i,l)])})}removeMatchingKeysForTargetId(e,t){const i=Os(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return i.delete(a)}getMatchingKeysForTargetId(e,t){const i=IDBKeyRange.bound([t],[t+1],!1,!0),a=Os(e);let l=Pe();return a.te({range:i,ee:!0},(c,d,p)=>{const g=rr(c[1]),y=new he(g);l=l.add(y)}).next(()=>l)}containsKey(e,t){const i=bn(t.path),a=IDBKeyRange.bound([i],[m1(i)],!1,!0);let l=0;return Os(e).te({index:eE,ee:!0,range:a},([c,d],p,g)=>{c!==0&&(l++,g.done())}).next(()=>l>0)}Rt(e,t){return Cl(e).get(t).next(i=>i?rh(i):null)}}function Cl(n){return Xt(n,nu)}function IA(n){return Xt(n,uo)}function Os(n){return Xt(n,iu)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="LruGarbageCollector",JU=1048576;function AA([n,e],[t,i]){const a=Re(n,t);return a===0?Re(e,i):a}class ZU{constructor(e){this.cr=e,this.buffer=new tt(AA),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();AA(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){te(bA,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sa(t)?te(bA,"Ignoring IndexedDB error during garbage collection: ",t):await ra(t)}await this.Ir(3e5)})}}class e6{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Fn.le);const i=new ZU(t);return this.Er.forEachTarget(e,a=>i.Pr(a.sequenceNumber)).next(()=>this.Er.Ar(e,a=>i.Pr(a))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Er.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(wA)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wA):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let i,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,c=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(i=v,d=Date.now(),this.removeTargets(e,i,t))).next(v=>(l=v,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(v=>(g=Date.now(),Dl()<=Ue.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${v} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:v})))}}function VC(n,e){return new e6(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e,t){this.db=e,this.garbageCollector=VC(this,t)}dr(e){const t=this.Vr(e);return this.db.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}Vr(e){let t=0;return this.Ar(e,i=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ar(e,t){return this.mr(e,(i,a)=>t(a))}addReference(e,t,i){return Hf(e,i)}removeReference(e,t,i){return Hf(e,i)}removeTargets(e,t,i){return this.db.getTargetCache().removeTargets(e,t,i)}markPotentiallyOrphaned(e,t){return Hf(e,t)}gr(e,t){return function(a,l){let c=!1;return xC(a).ne(d=>NC(a,d,l).next(p=>(p&&(c=!0),z.resolve(!p)))).next(()=>c)}(e,t)}removeOrphanedDocuments(e,t){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.mr(e,(c,d)=>{if(d<=t){const p=this.gr(e,c).next(g=>{if(!g)return l++,i.getEntry(e,c).next(()=>(i.removeEntry(c,_e.min()),Os(e).delete(function(v){return[0,bn(v.path)]}(c))))});a.push(p)}}).next(()=>z.waitFor(a)).next(()=>i.apply(e)).next(()=>l)}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,t){return Hf(e,t)}mr(e,t){const i=Os(e);let a,l=Fn.le;return i.te({index:eE},([c,d],{path:p,sequenceNumber:g})=>{c===0?(l!==Fn.le&&t(new he(rr(a)),l),l=g,a=p):l=Fn.le}).next(()=>{l!==Fn.le&&t(new he(rr(a)),l)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Hf(n,e){return Os(n).put(function(i,a){return{targetId:0,path:bn(i.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.changes=new Wr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?z.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,i){return Ha(e).put(i)}removeEntry(e,t,i){return Ha(e).delete(function(l,c){const d=l.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],Lp(c),d[d.length-1]]}(t,i))}updateMetadata(e,t){return this.getMetadata(e).next(i=>(i.byteSize+=t,this.pr(e,i)))}getEntry(e,t){let i=ht.newInvalidDocument(t);return Ha(e).te({index:ap,range:IDBKeyRange.only(Yc(t))},(a,l)=>{i=this.yr(t,l)}).next(()=>i)}wr(e,t){let i={size:0,document:ht.newInvalidDocument(t)};return Ha(e).te({index:ap,range:IDBKeyRange.only(Yc(t))},(a,l)=>{i={document:this.yr(t,l),size:Bp(l)}}).next(()=>i)}getEntries(e,t){let i=jn();return this.br(e,t,(a,l)=>{const c=this.yr(a,l);i=i.insert(a,c)}).next(()=>i)}Sr(e,t){let i=jn(),a=new ut(he.comparator);return this.br(e,t,(l,c)=>{const d=this.yr(l,c);i=i.insert(l,d),a=a.insert(l,Bp(c))}).next(()=>({documents:i,Dr:a}))}br(e,t,i){if(t.isEmpty())return z.resolve();let a=new tt(CA);t.forEach(p=>a=a.add(p));const l=IDBKeyRange.bound(Yc(a.first()),Yc(a.last())),c=a.getIterator();let d=c.getNext();return Ha(e).te({index:ap,range:l},(p,g,y)=>{const v=he.fromSegments([...g.prefixPath,g.collectionGroup,g.documentId]);for(;d&&CA(d,v)<0;)i(d,null),d=c.getNext();d&&d.isEqual(v)&&(i(d,g),d=c.hasNext()?c.getNext():null),d?y.H(Yc(d)):y.done()}).next(()=>{for(;d;)i(d,null),d=c.hasNext()?c.getNext():null})}getDocumentsMatchingQuery(e,t,i,a,l){const c=t.path,d=[c.popLast().toArray(),c.lastSegment(),Lp(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],p=[c.popLast().toArray(),c.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ha(e).J(IDBKeyRange.bound(d,p,!0)).next(g=>{l==null||l.incrementDocumentReadCount(g.length);let y=jn();for(const v of g){const w=this.yr(he.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(id(t,w)||a.has(w.key))&&(y=y.insert(w.key,w))}return y})}getAllFromCollectionGroup(e,t,i,a){let l=jn();const c=RA(t,i),d=RA(t,ri.max());return Ha(e).te({index:I1,range:IDBKeyRange.bound(c,d,!0)},(p,g,y)=>{const v=this.yr(he.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);l=l.insert(v.key,v),l.size===a&&y.done()}).next(()=>l)}newChangeBuffer(e){return new i6(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return SA(e).get(By).next(t=>(ge(!!t,20021),t))}pr(e,t){return SA(e).put(By,t)}yr(e,t){if(t){const i=FU(this.serializer,t);if(!(i.isNoDocument()&&i.version.isEqual(_e.min())))return i}return ht.newInvalidDocument(e)}}function MC(n){return new n6(n)}class i6 extends kC{constructor(e,t){super(),this.vr=e,this.trackRemovals=t,this.Cr=new Wr(i=>i.toString(),(i,a)=>i.isEqual(a))}applyChanges(e){const t=[];let i=0,a=new tt((l,c)=>Re(l.canonicalString(),c.canonicalString()));return this.changes.forEach((l,c)=>{const d=this.Cr.get(l);if(t.push(this.vr.removeEntry(e,l,d.readTime)),c.isValidDocument()){const p=cA(this.vr.serializer,c);a=a.add(l.path.popLast());const g=Bp(p);i+=g-d.size,t.push(this.vr.addEntry(e,l,p))}else if(i-=d.size,this.trackRemovals){const p=cA(this.vr.serializer,c.convertToNoDocument(_e.min()));t.push(this.vr.addEntry(e,l,p))}}),a.forEach(l=>{t.push(this.vr.indexManager.addToCollectionParentIndex(e,l))}),t.push(this.vr.updateMetadata(e,i)),z.waitFor(t)}getFromCache(e,t){return this.vr.wr(e,t).next(i=>(this.Cr.set(t,{size:i.size,readTime:i.document.readTime}),i.document))}getAllFromCache(e,t){return this.vr.Sr(e,t).next(({documents:i,Dr:a})=>(a.forEach((l,c)=>{this.Cr.set(l,{size:c,readTime:i.get(l).readTime})}),i))}}function SA(n){return Xt(n,Ph)}function Ha(n){return Xt(n,Pp)}function Yc(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function RA(n,e){const t=e.documentKey.path.toArray();return[n,Lp(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function CA(n,e){const t=n.path.toArray(),i=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<i.length-2;++l)if(a=Re(t[l],i[l]),a)return a;return a=Re(t.length,i.length),a||(a=Re(t[t.length-2],i[i.length-2]),a||Re(t[t.length-1],i[i.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(i!==null&&gh(i.mutation,a,qn.empty(),vt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const a=sr();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,i).next(l=>{let c=nh();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=sr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const a=[];return i.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,a){let l=jn();const c=mh(),d=function(){return mh()}();return t.forEach((p,g)=>{const y=i.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Xr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),gh(y.mutation,g,y.mutation.getFieldMask(),vt.now())):c.set(g.key,qn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var v;return d.set(g,new r6(y,(v=c.get(g))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const i=mh();let a=new ut((c,d)=>c-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let y=i.get(p)||qn.empty();y=d.applyToLocalView(g,y),i.set(p,y);const v=(a.get(d.batchId)||Pe()).add(p);a=a.insert(d.batchId,v)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,v=eC();y.forEach(w=>{if(!l.has(w)){const C=oC(t.get(w),i.get(w));C!==null&&v.set(w,C),l=l.add(w)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,v))}return z.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,a){return function(c){return he.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):z.resolve(sr());let d=eu,p=l;return c.next(g=>z.forEach(g,(y,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),l.get(y)?z.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{p=p.insert(y,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Pe())).next(y=>({batchId:d,changes:Z1(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(i=>{let a=nh();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let c=nh();return this.indexManager.getCollectionParents(e,l).next(d=>z.forEach(d,p=>{const g=function(v,w){return new Yr(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(y=>{y.forEach((v,w)=>{c=c.insert(v,w)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a))).next(c=>{l.forEach((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,ht.newInvalidDocument(y)))});let d=nh();return c.forEach((p,g)=>{const y=l.get(p);y!==void 0&&gh(y.mutation,g,qn.empty(),vt.now()),id(t,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return z.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:kt(a.createTime)}}(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(a){return{name:a.name,query:gE(a.bundledQuery),readTime:kt(a.readTime)}}(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(){this.overlays=new ut(he.comparator),this.Or=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const i=sr();return z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((a,l)=>{this.St(e,t,l)}),z.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.Or.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Or.delete(i)),z.resolve()}getOverlaysForCollection(e,t,i){const a=sr(),l=t.length+1,c=new he(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return z.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new ut((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let y=l.get(g.largestBatchId);y===null&&(y=sr(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=sr(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return z.resolve(d)}St(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.Or.get(a.largestBatchId).delete(i.key);this.Or.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new fE(t,i));let l=this.Or.get(t);l===void 0&&(l=Pe(),this.Or.set(t,l)),this.Or.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.Nr=new tt(sn.Br),this.Lr=new tt(sn.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const i=new sn(e,t);this.Nr=this.Nr.add(i),this.Lr=this.Lr.add(i)}qr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Qr(new sn(e,t))}$r(e,t){e.forEach(i=>this.removeReference(i,t))}Ur(e){const t=new he(new Be([])),i=new sn(t,e),a=new sn(t,e+1),l=[];return this.Lr.forEachInRange([i,a],c=>{this.Qr(c),l.push(c.key)}),l}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new he(new Be([])),i=new sn(t,e),a=new sn(t,e+1);let l=Pe();return this.Lr.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new sn(e,0),i=this.Nr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class sn{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return he.comparator(e.key,t.key)||Re(e.Gr,t.Gr)}static kr(e,t){return Re(e.Gr,t.Gr)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new tt(sn.Br)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new hE(l,t,i,a);this.mutationQueue.push(c);for(const d of a)this.zr=this.zr.add(new sn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return z.resolve(c)}lookupMutationBatch(e,t){return z.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.Hr(i),l=a<0?0:a;return z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Fs:this.Jn-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new sn(t,0),a=new sn(t,Number.POSITIVE_INFINITY),l=[];return this.zr.forEachInRange([i,a],c=>{const d=this.jr(c.Gr);l.push(d)}),z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new tt(Re);return t.forEach(a=>{const l=new sn(a,0),c=new sn(a,Number.POSITIVE_INFINITY);this.zr.forEachInRange([l,c],d=>{i=i.add(d.Gr)})}),z.resolve(this.Jr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;he.isDocumentKey(l)||(l=l.child(""));const c=new sn(new he(l),0);let d=new tt(Re);return this.zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Gr)),!0)},c),z.resolve(this.Jr(d))}Jr(e){const t=[];return e.forEach(i=>{const a=this.jr(i);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ge(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.zr;return z.forEach(t.mutations,a=>{const l=new sn(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.zr=i})}Xn(e){}containsKey(e,t){const i=new sn(t,0),a=this.zr.firstAfterOrEqual(i);return z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(e){this.Zr=e,this.docs=function(){return new ut(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,c=this.Zr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return z.resolve(i?i.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let i=jn();return t.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():ht.newInvalidDocument(a))}),z.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=jn();const c=t.path,d=new he(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||Jv(_1(y),i)<=0||(a.has(y.key)||id(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return z.resolve(l)}getAllFromCollectionGroup(e,t,i,a){pe(9500)}Xr(e,t){return z.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new c6(this)}getSize(e){return z.resolve(this.size)}}class c6 extends kC{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?t.push(this.vr.addEntry(e,a)):this.vr.removeEntry(i)}),z.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(e){this.persistence=e,this.ei=new Wr(t=>mo(t),td),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.ti=0,this.ni=new vE,this.targetCount=0,this.ri=Eo.rr()}forEachTarget(e,t){return this.ei.forEach((i,a)=>t(a)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ti&&(this.ti=t),z.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new Eo(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.ar(t),z.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.ei.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.ei.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),z.waitFor(l).next(()=>a)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const i=this.ei.get(t)||null;return z.resolve(i)}addMatchingKeys(e,t,i){return this.ni.qr(t,i),z.resolve()}removeMatchingKeys(e,t,i){this.ni.$r(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),z.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ni.Wr(t);return z.resolve(i)}containsKey(e,t){return z.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t){this.ii={},this.overlays={},this.si=new Fn(0),this.oi=!1,this.oi=!0,this._i=new o6,this.referenceDelegate=e(this),this.ai=new h6(this),this.indexManager=new YU,this.remoteDocumentCache=function(a){return new u6(a)}(i=>this.referenceDelegate.ui(i)),this.serializer=new AC(t),this.ci=new s6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new a6,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ii[e.toKey()];return i||(i=new l6(t,this.referenceDelegate),this.ii[e.toKey()]=i),i}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,i){te("MemoryPersistence","Starting transaction:",e);const a=new d6(this.si.next());return this.referenceDelegate.li(),i(a).next(l=>this.referenceDelegate.hi(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Pi(e,t){return z.or(Object.values(this.ii).map(i=>()=>i.containsKey(e,t)))}}class d6 extends v1{constructor(e){super(),this.currentSequenceNumber=e}}class Am{constructor(e){this.persistence=e,this.Ti=new vE,this.Ii=null}static Ei(e){return new Am(e)}get di(){if(this.Ii)return this.Ii;throw pe(60996)}addReference(e,t,i){return this.Ti.addReference(i,t),this.di.delete(i.toString()),z.resolve()}removeReference(e,t,i){return this.Ti.removeReference(i,t),this.di.add(i.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),z.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(a=>this.di.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.di.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.di,i=>{const a=he.fromPath(i);return this.Ai(e,a).next(l=>{l||t.removeEntry(a,_e.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return z.or([()=>z.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class zp{constructor(e,t){this.persistence=e,this.Ri=new Wr(i=>bn(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=VC(this,t)}static Ei(e,t){return new zp(e,t)}li(){}hi(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}Vr(e){let t=0;return this.Ar(e,i=>{t++}).next(()=>t)}Ar(e,t){return z.forEach(this.Ri,(i,a)=>this.gr(e,i,a).next(l=>l?z.resolve():t(a)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.Xr(e,c=>this.gr(e,c,t).next(d=>{d||(i++,l.removeEntry(c,_e.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.Ri.set(i,e.currentSequenceNumber),z.resolve()}removeReference(e,t,i){return this.Ri.set(i,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),z.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lp(e.data.value)),t}gr(e,t,i){return z.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.Ri.get(t);return z.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(e){this.serializer=e}q(e,t,i,a){const l=new pm("createOrUpgrade",t);i<1&&a>=1&&(function(p){p.createObjectStore(ed)}(e),function(p){p.createObjectStore(Dh,{keyPath:DL}),p.createObjectStore(Di,{keyPath:zb,autoIncrement:!0}).createIndex(no,Fb,{unique:!0}),p.createObjectStore(tu)}(e),DA(e),function(p){p.createObjectStore(Qa)}(e));let c=z.resolve();return i<3&&a>=3&&(i!==0&&(function(p){p.deleteObjectStore(iu),p.deleteObjectStore(nu),p.deleteObjectStore(uo)}(e),DA(e)),c=c.next(()=>function(p){const g=p.store(uo),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:_e.min().toTimestamp(),targetCount:0};return g.put(Np,y)}(l))),i<4&&a>=4&&(i!==0&&(c=c.next(()=>function(p,g){return g.store(Di).J().next(v=>{p.deleteObjectStore(Di),p.createObjectStore(Di,{keyPath:zb,autoIncrement:!0}).createIndex(no,Fb,{unique:!0});const w=g.store(Di),C=v.map(L=>w.put(L));return z.waitFor(C)})}(e,l))),c=c.next(()=>{(function(p){p.createObjectStore(ru,{keyPath:UL})})(e)})),i<5&&a>=5&&(c=c.next(()=>this.Vi(l))),i<6&&a>=6&&(c=c.next(()=>(function(p){p.createObjectStore(Ph)}(e),this.mi(l)))),i<7&&a>=7&&(c=c.next(()=>this.fi(l))),i<8&&a>=8&&(c=c.next(()=>this.gi(e,l))),i<9&&a>=9&&(c=c.next(()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)})),i<10&&a>=10&&(c=c.next(()=>this.pi(l))),i<11&&a>=11&&(c=c.next(()=>{(function(p){p.createObjectStore(mm,{keyPath:BL})})(e),function(p){p.createObjectStore(gm,{keyPath:zL})}(e)})),i<12&&a>=12&&(c=c.next(()=>{(function(p){const g=p.createObjectStore(_m,{keyPath:KL});g.createIndex(Fy,QL,{unique:!1}),g.createIndex(R1,YL,{unique:!1})})(e)})),i<13&&a>=13&&(c=c.next(()=>function(p){const g=p.createObjectStore(Pp,{keyPath:NL});g.createIndex(ap,xL),g.createIndex(I1,OL)}(e)).next(()=>this.yi(e,l)).next(()=>e.deleteObjectStore(Qa))),i<14&&a>=14&&(c=c.next(()=>this.wi(e,l))),i<15&&a>=15&&(c=c.next(()=>function(p){p.createObjectStore(tE,{keyPath:FL,autoIncrement:!0}).createIndex(zy,qL,{unique:!1}),p.createObjectStore(xp,{keyPath:jL}).createIndex(A1,GL,{unique:!1}),p.createObjectStore(Op,{keyPath:HL}).createIndex(S1,$L,{unique:!1})}(e))),i<16&&a>=16&&(c=c.next(()=>{t.objectStore(xp).clear()}).next(()=>{t.objectStore(Op).clear()})),i<17&&a>=17&&(c=c.next(()=>{(function(p){p.createObjectStore(nE,{keyPath:WL})})(e)})),c}mi(e){let t=0;return e.store(Qa).te((i,a)=>{t+=Bp(a)}).next(()=>{const i={byteSize:t};return e.store(Ph).put(By,i)})}Vi(e){const t=e.store(Dh),i=e.store(Di);return t.J().next(a=>z.forEach(a,l=>{const c=IDBKeyRange.bound([l.userId,Fs],[l.userId,l.lastAcknowledgedBatchId]);return i.J(no,c).next(d=>z.forEach(d,p=>{ge(p.userId===l.userId,18650,"Cannot process batch from unexpected user",{batchId:p.batchId});const g=Wa(this.serializer,p);return PC(e,l.userId,g).next(()=>{})}))}))}fi(e){const t=e.store(iu),i=e.store(Qa);return e.store(uo).get(Np).next(a=>{const l=[];return i.te((c,d)=>{const p=new Be(c),g=function(v){return[0,bn(v)]}(p);l.push(t.get(g).next(y=>y?z.resolve():(v=>t.put({targetId:0,path:bn(v),sequenceNumber:a.highestListenSequenceNumber}))(p)))}).next(()=>z.waitFor(l))})}gi(e,t){e.createObjectStore(Nh,{keyPath:LL});const i=t.store(Nh),a=new yE,l=c=>{if(a.add(c)){const d=c.lastSegment(),p=c.popLast();return i.put({collectionId:d,parent:bn(p)})}};return t.store(Qa).te({ee:!0},(c,d)=>{const p=new Be(c);return l(p.popLast())}).next(()=>t.store(tu).te({ee:!0},([c,d,p],g)=>{const y=rr(d);return l(y.popLast())}))}pi(e){const t=e.store(nu);return t.te((i,a)=>{const l=rh(a),c=SC(this.serializer,l);return t.put(c)})}yi(e,t){const i=t.store(Qa),a=[];return i.te((l,c)=>{const d=t.store(Pp),p=function(v){return v.document?new he(Be.fromString(v.document.name).popFirst(5)):v.noDocument?he.fromSegments(v.noDocument.path):v.unknownDocument?he.fromSegments(v.unknownDocument.path):pe(36783)}(c).path.toArray(),g={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};a.push(d.put(g))}).next(()=>z.waitFor(a))}wi(e,t){const i=t.store(Di),a=MC(this.serializer),l=new EE(Am.Ei,this.serializer.wt);return i.J().next(c=>{const d=new Map;return c.forEach(p=>{var g;let y=(g=d.get(p.userId))!==null&&g!==void 0?g:Pe();Wa(this.serializer,p).keys().forEach(v=>y=y.add(v)),d.set(p.userId,y)}),z.forEach(d,(p,g)=>{const y=new on(g),v=Im.bt(this.serializer,y),w=l.getIndexManager(y),C=bm.bt(y,this.serializer,w,l.referenceDelegate);return new LC(a,C,v,w).recalculateAndSaveOverlaysForDocumentKeys(new qy(t,Fn.le),p).next()})})}}function DA(n){n.createObjectStore(iu,{keyPath:kL}).createIndex(eE,ML,{unique:!0}),n.createObjectStore(nu,{keyPath:"targetId"}).createIndex(b1,VL,{unique:!0}),n.createObjectStore(uo)}const Ps="IndexedDbPersistence",uy=18e5,cy=5e3,hy="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",UC="main";class TE{constructor(e,t,i,a,l,c,d,p,g,y,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=i,this.bi=l,this.window=c,this.document=d,this.Si=g,this.Di=y,this.Ci=v,this.si=null,this.oi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fi=null,this.inForeground=!1,this.Mi=null,this.xi=null,this.Oi=Number.NEGATIVE_INFINITY,this.Ni=w=>Promise.resolve(),!TE.C())throw new ee($.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new t6(this,a),this.Bi=t+UC,this.serializer=new AC(p),this.Li=new ar(this.Bi,this.Ci,new f6(this.serializer)),this._i=new jU,this.ai=new XU(this.referenceDelegate,this.serializer),this.remoteDocumentCache=MC(this.serializer),this.ci=new qU,this.window&&this.window.localStorage?this.ki=this.window.localStorage:(this.ki=null,y===!1&&Vt(Ps,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.qi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ee($.FAILED_PRECONDITION,hy);return this.Qi(),this.$i(),this.Ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ai.getHighestSequenceNumber(e))}).then(e=>{this.si=new Fn(e,this.Si)}).then(()=>{this.oi=!0}).catch(e=>(this.Li&&this.Li.close(),Promise.reject(e)))}Ki(e){return this.Ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Li.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.bi.enqueueAndForget(async()=>{this.started&&await this.qi()}))}qi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>$f(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Wi(e).next(t=>{t||(this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)))})}).next(()=>this.Gi(e)).next(t=>this.isPrimary&&!t?this.zi(e).next(()=>!1):!!t&&this.ji(e).next(()=>!0))).catch(e=>{if(sa(e))return te(Ps,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return te(Ps,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.bi.enqueueRetryable(()=>this.Ni(e)),this.isPrimary=e})}Wi(e){return Wc(e).get(Il).next(t=>z.resolve(this.Hi(t)))}Ji(e){return $f(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.Zi(this.Oi,uy)){this.Oi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const i=Xt(t,ru);return i.J().next(a=>{const l=this.Xi(a,uy),c=a.filter(d=>l.indexOf(d)===-1);return z.forEach(c,d=>i.delete(d.clientId)).next(()=>c)})}).catch(()=>[]);if(this.ki)for(const t of e)this.ki.removeItem(this.es(t.clientId))}}Ui(){this.xi=this.bi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.qi().then(()=>this.Yi()).then(()=>this.Ui()))}Hi(e){return!!e&&e.ownerId===this.clientId}Gi(e){return this.Di?z.resolve(!0):Wc(e).get(Il).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,cy)&&!this.ts(t.ownerId)){if(this.Hi(t)&&this.networkEnabled)return!0;if(!this.Hi(t)){if(!t.allowTabSynchronization)throw new ee($.FAILED_PRECONDITION,hy);return!1}}return!(!this.networkEnabled||!this.inForeground)||$f(e).J().next(i=>this.Xi(i,cy).find(a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(l||c&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&te(Ps,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.oi=!1,this.ns(),this.xi&&(this.xi.cancel(),this.xi=null),this.rs(),this.ss(),await this.Li.runTransaction("shutdown","readwrite",[ed,ru],e=>{const t=new qy(e,Fn.le);return this.zi(t).next(()=>this.Ji(t))}),this.Li.close(),this._s()}Xi(e,t){return e.filter(i=>this.Zi(i.updateTimeMs,t)&&!this.ts(i.clientId))}us(){return this.runTransaction("getActiveClients","readonly",e=>$f(e).J().next(t=>this.Xi(t,uy).map(i=>i.clientId)))}get started(){return this.oi}getGlobalsCache(){return this._i}getMutationQueue(e,t){return bm.bt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new WU(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return Im.bt(this.serializer,e)}getBundleCache(){return this.ci}runTransaction(e,t,i){te(Ps,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=function(p){return p===17?ZL:p===16?JL:p===15?iE:p===14?P1:p===13?D1:p===12?XL:p===11?C1:void pe(60245)}(this.Ci);let c;return this.Li.runTransaction(e,a,l,d=>(c=new qy(d,this.si?this.si.next():Fn.le),t==="readwrite-primary"?this.Wi(c).next(p=>!!p||this.Gi(c)).next(p=>{if(!p)throw Vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)),new ee($.FAILED_PRECONDITION,y1);return i(c)}).next(p=>this.ji(c).next(()=>p)):this.cs(c).next(()=>i(c)))).then(d=>(c.raiseOnCommittedEvent(),d))}cs(e){return Wc(e).get(Il).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,cy)&&!this.ts(t.ownerId)&&!this.Hi(t)&&!(this.Di||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ee($.FAILED_PRECONDITION,hy)})}ji(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Wc(e).put(Il,t)}static C(){return ar.C()}zi(e){const t=Wc(e);return t.get(Il).next(i=>this.Hi(i)?(te(Ps,"Releasing primary lease."),t.delete(Il)):z.resolve())}Zi(e,t){const i=Date.now();return!(e<i-t)&&(!(e>i)||(Vt(`Detected an update time that is in the future: ${e} > ${i}`),!1))}Qi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Mi=()=>{this.bi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.qi()))},this.document.addEventListener("visibilitychange",this.Mi),this.inForeground=this.document.visibilityState==="visible")}rs(){this.Mi&&(this.document.removeEventListener("visibilitychange",this.Mi),this.Mi=null)}$i(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Fi=()=>{this.ns();const t=/(?:Version|Mobile)\/1[456]/;KS()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.bi.enterRestrictedMode(!0),this.bi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Fi))}ss(){this.Fi&&(this.window.removeEventListener("pagehide",this.Fi),this.Fi=null)}ts(e){var t;try{const i=((t=this.ki)===null||t===void 0?void 0:t.getItem(this.es(e)))!==null;return te(Ps,`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return Vt(Ps,"Failed to get zombied client id.",i),!1}}ns(){if(this.ki)try{this.ki.setItem(this.es(this.clientId),String(Date.now()))}catch(e){Vt("Failed to set zombie client id.",e)}}_s(){if(this.ki)try{this.ki.removeItem(this.es(this.clientId))}catch{}}es(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Wc(n){return Xt(n,ed)}function $f(n){return Xt(n,ru)}function wE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.ls=i,this.hs=a}static Ps(e,t){let i=Pe(),a=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new IE(e,t.fromCache,i,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return KS()?8:E1(It())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.Rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Vs(e,t,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new p6;return this.fs(e,t,c).next(d=>{if(l.result=d,this.Is)return this.gs(e,t,c,d.size)})}).next(()=>l.result)}gs(e,t,i,a){return i.documentReadCount<this.Es?(Dl()<=Ue.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Pl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),z.resolve()):(Dl()<=Ue.DEBUG&&te("QueryEngine","Query:",Pl(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.ds*a?(Dl()<=Ue.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Pl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(t))):z.resolve())}Rs(e,t){if(eA(t))return z.resolve(null);let i=On(t);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Mp(t,null,"F"),i=On(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Pe(...l);return this.As.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const g=this.ps(t,d);return this.ys(t,g,c,p.readTime)?this.Rs(e,Mp(t,null,"F")):this.ws(e,g,t,p)}))})))}Vs(e,t,i,a){return eA(t)||a.isEqual(_e.min())?z.resolve(null):this.As.getDocuments(e,i).next(l=>{const c=this.ps(t,l);return this.ys(t,c,i,a)?z.resolve(null):(Dl()<=Ue.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Pl(t)),this.ws(e,c,t,g1(a,eu)).next(d=>d))})}ps(e,t){let i=new tt(X1(e));return t.forEach((a,l)=>{id(e,l)&&(i=i.add(l))}),i}ys(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}fs(e,t,i){return Dl()<=Ue.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Pl(t)),this.As.getDocumentsMatchingQuery(e,t,ri.min(),i)}ws(e,t,i,a){return this.As.getDocumentsMatchingQuery(e,i,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="LocalStore",m6=3e8;class g6{constructor(e,t,i,a){this.persistence=e,this.bs=t,this.serializer=a,this.Ss=new ut(Re),this.Ds=new Wr(l=>mo(l),td),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(i)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LC(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function zC(n,e,t,i){return new g6(n,e,t,i)}async function FC(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,t.Fs(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Pe();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(i,p).next(g=>({Ms:g,removedBatchIds:c,addedBatchIds:d}))})})}function _6(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=t.Cs.newChangeBuffer({trackRemovals:!0});return function(d,p,g,y){const v=g.batch,w=v.keys();let C=z.resolve();return w.forEach(L=>{C=C.next(()=>y.getEntry(p,L)).next(j=>{const U=g.docVersions.get(L);ge(U!==null,48541),j.version.compareTo(U)<0&&(v.applyToRemoteDocument(j,g),j.isValidDocument()&&(j.setReadTime(g.commitVersion),y.addEntry(j)))})}),C.next(()=>d.mutationQueue.removeMutationBatch(p,v))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Pe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,a))})}function qC(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function y6(n,e){const t=de(n),i=e.snapshotVersion;let a=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Cs.newChangeBuffer({trackRemovals:!0});a=t.Ss;const d=[];e.targetChanges.forEach((y,v)=>{const w=a.get(v);if(!w)return;d.push(t.ai.removeMatchingKeys(l,y.removedDocuments,v).next(()=>t.ai.addMatchingKeys(l,y.addedDocuments,v)));let C=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(v)!==null?C=C.withResumeToken(Ct.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):y.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(y.resumeToken,i)),a=a.insert(v,C),function(j,U,ie){return j.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=m6?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0}(w,C,y)&&d.push(t.ai.updateTargetData(l,C))});let p=jn(),g=Pe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(jC(l,c,e.documentUpdates).next(y=>{p=y.xs,g=y.Os})),!i.isEqual(_e.min())){const y=t.ai.getLastRemoteSnapshotVersion(l).next(v=>t.ai.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(y)}return z.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.Ss=a,l))}function jC(n,e,t){let i=Pe(),a=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=jn();return t.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(_e.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):te(bE,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{xs:c,Os:a}})}function v6(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Fs),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function hu(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return t.ai.getTargetData(i,e).next(l=>l?(a=l,z.resolve(a)):t.ai.allocateTargetId(i).next(c=>(a=new zr(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.ai.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=t.Ss.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(i.targetId,i),t.Ds.set(e,i.targetId)),i})}async function du(n,e,t){const i=de(n),a=i.Ss.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!sa(c))throw c;te(bE,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ss=i.Ss.remove(e),i.Ds.delete(a.target)}function Fp(n,e,t){const i=de(n);let a=_e.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,y){const v=de(p),w=v.Ds.get(y);return w!==void 0?z.resolve(v.Ss.get(w)):v.ai.getTargetData(g,y)}(i,c,On(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.ai.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.bs.getDocumentsMatchingQuery(c,e,t?a:_e.min(),t?l:Pe())).next(d=>($C(i,W1(e),d),{documents:d,Ns:l})))}function GC(n,e){const t=de(n),i=de(t.ai),a=t.Ss.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",l=>i.Rt(l,e).next(c=>c?c.target:null))}function HC(n,e){const t=de(n),i=t.vs.get(e)||_e.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.Cs.getAllFromCollectionGroup(a,e,g1(i,eu),Number.MAX_SAFE_INTEGER)).then(a=>($C(t,e,a),a))}function $C(n,e,t){let i=n.vs.get(e)||_e.min();t.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.vs.set(e,i)}async function E6(n,e,t,i){const a=de(n);let l=Pe(),c=jn();for(const g of t){const y=e.Bs(g.metadata.name);g.document&&(l=l.add(y));const v=e.Ls(g);v.setReadTime(e.ks(g.metadata.readTime)),c=c.insert(y,v)}const d=a.Cs.newChangeBuffer({trackRemovals:!0}),p=await hu(a,function(y){return On(Au(Be.fromString(`__bundle__/docs/${y}`)))}(i));return a.persistence.runTransaction("Apply bundle documents","readwrite",g=>jC(g,d,c).next(y=>(d.apply(g),y)).next(y=>a.ai.removeMatchingKeysForTargetId(g,p.targetId).next(()=>a.ai.addMatchingKeys(g,l,p.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(g,y.xs,y.Os)).next(()=>y.xs)))}async function T6(n,e,t=Pe()){const i=await hu(n,On(gE(e.bundledQuery))),a=de(n);return a.persistence.runTransaction("Save named query","readwrite",l=>{const c=kt(e.readTime);if(i.snapshotVersion.compareTo(c)>=0)return a.ci.saveNamedQuery(l,e);const d=i.withResumeToken(Ct.EMPTY_BYTE_STRING,c);return a.Ss=a.Ss.insert(d.targetId,d),a.ai.updateTargetData(l,d).next(()=>a.ai.removeMatchingKeysForTargetId(l,i.targetId)).next(()=>a.ai.addMatchingKeys(l,t,i.targetId)).next(()=>a.ci.saveNamedQuery(l,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="firestore_clients";function PA(n,e){return`${KC}_${n}_${e}`}const QC="firestore_mutations";function NA(n,e,t){let i=`${QC}_${n}_${t}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}const YC="firestore_targets";function dy(n,e){return`${YC}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="SharedClientState";class qp{constructor(e,t,i,a){this.user=e,this.batchId=t,this.state=i,this.error=a}static qs(e,t,i){const a=JSON.parse(i);let l,c=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return c&&a.error&&(c=typeof a.error.message=="string"&&typeof a.error.code=="string",c&&(l=new ee(a.error.code,a.error.message))),c?new qp(e,t,a.state,l):(Vt(Ji,`Failed to parse mutation state for ID '${t}': ${i}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _h{constructor(e,t,i){this.targetId=e,this.state=t,this.error=i}static qs(e,t){const i=JSON.parse(t);let a,l=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return l&&i.error&&(l=typeof i.error.message=="string"&&typeof i.error.code=="string",l&&(a=new ee(i.error.code,i.error.message))),l?new _h(e,i.state,a):(Vt(Ji,`Failed to parse target state for ID '${e}': ${t}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class jp{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static qs(e,t){const i=JSON.parse(t);let a=typeof i=="object"&&i.activeTargetIds instanceof Array,l=lE();for(let c=0;a&&c<i.activeTargetIds.length;++c)a=T1(i.activeTargetIds[c]),l=l.add(i.activeTargetIds[c]);return a?new jp(e,l):(Vt(Ji,`Failed to parse client data for instance '${e}': ${t}`),null)}}class AE{constructor(e,t){this.clientId=e,this.onlineState=t}static qs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new AE(t.clientId,t.onlineState):(Vt(Ji,`Failed to parse online state: ${e}`),null)}}class iv{constructor(){this.activeTargetIds=lE()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fy{constructor(e,t,i,a,l){this.window=e,this.bi=t,this.persistenceKey=i,this.Ks=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ws=this.Gs.bind(this),this.zs=new ut(Re),this.started=!1,this.js=[];const c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.Hs=PA(this.persistenceKey,this.Ks),this.Js=function(p){return`firestore_sequence_number_${p}`}(this.persistenceKey),this.zs=this.zs.insert(this.Ks,new iv),this.Ys=new RegExp(`^${KC}_${c}_([^_]*)$`),this.Zs=new RegExp(`^${QC}_${c}_(\\d+)(?:_(.*))?$`),this.Xs=new RegExp(`^${YC}_${c}_(\\d+)$`),this.eo=function(p){return`firestore_online_state_${p}`}(this.persistenceKey),this.no=function(p){return`firestore_bundle_loaded_v2_${p}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ws)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.us();for(const i of e){if(i===this.Ks)continue;const a=this.getItem(PA(this.persistenceKey,i));if(a){const l=jp.qs(i,a);l&&(this.zs=this.zs.insert(l.clientId,l))}}this.ro();const t=this.storage.getItem(this.eo);if(t){const i=this.io(t);i&&this.so(i)}for(const i of this.js)this.Gs(i);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Js,JSON.stringify(e))}getAllActiveQueryTargets(){return this.oo(this.zs)}isActiveQueryTarget(e){let t=!1;return this.zs.forEach((i,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this._o(e,"pending")}updateMutationState(e,t,i){this._o(e,t,i),this.ao(e)}addLocalQueryTarget(e,t=!0){let i="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(dy(this.persistenceKey,e));if(a){const l=_h.qs(e,a);l&&(i=l.state)}}return t&&this.uo.$s(e),this.ro(),i}removeLocalQueryTarget(e){this.uo.Us(e),this.ro()}isLocalQueryTarget(e){return this.uo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(dy(this.persistenceKey,e))}updateQueryState(e,t,i){this.co(e,t,i)}handleUserChange(e,t,i){t.forEach(a=>{this.ao(a)}),this.currentUser=e,i.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.lo(e)}notifyBundleLoaded(e){this.ho(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ws),this.removeItem(this.Hs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return te(Ji,"READ",e,t),t}setItem(e,t){te(Ji,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){te(Ji,"REMOVE",e),this.storage.removeItem(e)}Gs(e){const t=e;if(t.storageArea===this.storage){if(te(Ji,"EVENT",t.key,t.newValue),t.key===this.Hs)return void Vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.bi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const i=this.Po(t.key);return this.To(i,null)}{const i=this.Io(t.key,t.newValue);if(i)return this.To(i.clientId,i)}}else if(this.Zs.test(t.key)){if(t.newValue!==null){const i=this.Eo(t.key,t.newValue);if(i)return this.Ao(i)}}else if(this.Xs.test(t.key)){if(t.newValue!==null){const i=this.Ro(t.key,t.newValue);if(i)return this.Vo(i)}}else if(t.key===this.eo){if(t.newValue!==null){const i=this.io(t.newValue);if(i)return this.so(i)}}else if(t.key===this.Js){const i=function(l){let c=Fn.le;if(l!=null)try{const d=JSON.parse(l);ge(typeof d=="number",30636,{mo:l}),c=d}catch(d){Vt(Ji,"Failed to read sequence number from WebStorage",d)}return c}(t.newValue);i!==Fn.le&&this.sequenceNumberHandler(i)}else if(t.key===this.no){const i=this.fo(t.newValue);await Promise.all(i.map(a=>this.syncEngine.po(a)))}}}else this.js.push(t)})}}get uo(){return this.zs.get(this.Ks)}ro(){this.setItem(this.Hs,this.uo.Qs())}_o(e,t,i){const a=new qp(this.currentUser,e,t,i),l=NA(this.persistenceKey,this.currentUser,e);this.setItem(l,a.Qs())}ao(e){const t=NA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}lo(e){const t={clientId:this.Ks,onlineState:e};this.storage.setItem(this.eo,JSON.stringify(t))}co(e,t,i){const a=dy(this.persistenceKey,e),l=new _h(e,t,i);this.setItem(a,l.Qs())}ho(e){const t=JSON.stringify(Array.from(e));this.setItem(this.no,t)}Po(e){const t=this.Ys.exec(e);return t?t[1]:null}Io(e,t){const i=this.Po(e);return jp.qs(i,t)}Eo(e,t){const i=this.Zs.exec(e),a=Number(i[1]),l=i[2]!==void 0?i[2]:null;return qp.qs(new on(l),a,t)}Ro(e,t){const i=this.Xs.exec(e),a=Number(i[1]);return _h.qs(a,t)}io(e){return AE.qs(e)}fo(e){return JSON.parse(e)}async Ao(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.yo(e.batchId,e.state,e.error);te(Ji,`Ignoring mutation for non-active user ${e.user.uid}`)}Vo(e){return this.syncEngine.wo(e.targetId,e.state,e.error)}To(e,t){const i=t?this.zs.insert(e,t):this.zs.remove(e),a=this.oo(this.zs),l=this.oo(i),c=[],d=[];return l.forEach(p=>{a.has(p)||c.push(p)}),a.forEach(p=>{l.has(p)||d.push(p)}),this.syncEngine.bo(c,d).then(()=>{this.zs=i})}so(e){this.zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}oo(e){let t=lE();return e.forEach((i,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class WC{constructor(){this.So=new iv,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,i){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new iv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="ConnectivityMonitor";class OA{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){te(xA,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){te(xA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf=null;function rv(){return Kf===null?Kf=function(){return 268435456+Math.round(2147483648*Math.random())}():Kf++,"0x"+Kf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="RestConnection",I6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class b6{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${i}/databases/${a}`,this.qo=this.databaseId.database===jy?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Qo(e,t,i,a,l){const c=rv(),d=this.$o(e,t.toUriEncodedString());te(py,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(p,a,l);const{host:g}=new URL(d),y=Hh(g);return this.Ko(e,d,p,i,y).then(v=>(te(py,`Received RPC '${e}' ${c}: `,v),v),v=>{throw cr(py,`RPC '${e}' ${c} failed with error: `,v,"url: ",d,"request:",i),v})}Wo(e,t,i,a,l,c){return this.Qo(e,t,i,a,l)}Uo(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}$o(e,t){const i=I6[e];return`${this.Lo}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="WebChannelConnection";class S6 extends b6{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,i,a,l){const c=rv();return new Promise((d,p)=>{const g=new o1;g.setWithCredentials(!0),g.listenOnce(l1.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case ip.NO_ERROR:const v=g.getResponseJson();te(wn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(v)),d(v);break;case ip.TIMEOUT:te(wn,`RPC '${e}' ${c} timed out`),p(new ee($.DEADLINE_EXCEEDED,"Request time out"));break;case ip.HTTP_ERROR:const w=g.getStatus();if(te(wn,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const L=C==null?void 0:C.error;if(L&&L.status&&L.message){const j=function(ie){const ne=ie.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ne)>=0?ne:$.UNKNOWN}(L.status);p(new ee(j,L.message))}else p(new ee($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ee($.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{s_:e,streamId:c,o_:g.getLastErrorCode(),__:g.getLastError()})}}finally{te(wn,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);te(wn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,i,15)})}a_(e,t,i){const a=rv(),l=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=h1(),d=c1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Uo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const y=l.join("");te(wn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const v=c.createWebChannel(y,p);let w=!1,C=!1;const L=new A6({Go:U=>{C?te(wn,`Not sending because RPC '${e}' stream ${a} is closed:`,U):(w||(te(wn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),te(wn,`RPC '${e}' stream ${a} sending:`,U),v.send(U))},zo:()=>v.close()}),j=(U,ie,ne)=>{U.listen(ie,X=>{try{ne(X)}catch(fe){setTimeout(()=>{throw fe},0)}})};return j(v,th.EventType.OPEN,()=>{C||(te(wn,`RPC '${e}' stream ${a} transport opened.`),L.t_())}),j(v,th.EventType.CLOSE,()=>{C||(C=!0,te(wn,`RPC '${e}' stream ${a} transport closed`),L.r_())}),j(v,th.EventType.ERROR,U=>{C||(C=!0,cr(wn,`RPC '${e}' stream ${a} transport errored. Name:`,U.name,"Message:",U.message),L.r_(new ee($.UNAVAILABLE,"The operation could not be completed")))}),j(v,th.EventType.MESSAGE,U=>{var ie;if(!C){const ne=U.data[0];ge(!!ne,16349);const X=ne,fe=(X==null?void 0:X.error)||((ie=X[0])===null||ie===void 0?void 0:ie.error);if(fe){te(wn,`RPC '${e}' stream ${a} received error:`,fe);const ae=fe.status;let ce=function(D){const O=Ft[D];if(O!==void 0)return cC(O)}(ae),S=fe.message;ce===void 0&&(ce=$.INTERNAL,S="Unknown error status: "+ae+" with message "+fe.message),C=!0,L.r_(new ee(ce,S)),v.close()}else te(wn,`RPC '${e}' stream ${a} received:`,ne),L.i_(ne)}}),j(d,u1.STAT_EVENT,U=>{U.stat===My.PROXY?te(wn,`RPC '${e}' stream ${a} detected buffering proxy`):U.stat===My.NOPROXY&&te(wn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{L.n_()},0),L}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(){return typeof window<"u"?window:null}function dp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n){return new NU(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,t,i=1e3,a=1.5,l=6e4){this.bi=e,this.timerId=t,this.u_=i,this.c_=a,this.l_=l,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),i=Math.max(0,Date.now()-this.T_),a=Math.max(0,t-i);a>0&&te("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,a,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="PersistentStream";class JC{constructor(e,t,i,a,l,c,d,p){this.bi=e,this.R_=i,this.V_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new SE(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.m_===t&&this.B_(i,a)},i=>{e(()=>{const a=new ee($.UNKNOWN,"Fetching auth token failed: "+i.message);return this.L_(a)})})}B_(e,t){const i=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{i(()=>this.listener.jo())}),this.stream.Jo(()=>{i(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(a=>{i(()=>this.L_(a))}),this.stream.onMessage(a=>{i(()=>++this.p_==1?this.q_(a):this.onNext(a))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return te(VA,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(te(VA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R6 extends JC{constructor(e,t,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=VU(this.serializer,e),i=function(l){if(!("targetChange"in l))return _e.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?_e.min():c.readTime?kt(c.readTime):_e.min()}(e);return this.listener.Q_(t,i)}U_(e){const t={};t.database=Jy(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=Vp(p)?{documents:vC(l,p)}:{query:EC(l,p).gt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=fC(l,c.resumeToken);const g=Wy(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(_e.min())>0){d.readTime=cu(l,c.snapshotVersion.toTimestamp());const g=Wy(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=MU(this.serializer,e);i&&(t.labels=i),this.F_(t)}K_(e){const t={};t.database=Jy(this.serializer),t.removeTarget=e,this.F_(t)}}class C6 extends JC{constructor(e,t,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return ge(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){ge(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=kU(e.writeResults,e.commitTime),i=kt(e.commitTime);return this.listener.j_(i,t)}H_(){const e={};e.database=Jy(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Lh(this.serializer,i))};this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D6{}class P6 extends D6{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.J_=!1}Y_(){if(this.J_)throw new ee($.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,i,a){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Qo(e,Xy(t,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee($.UNKNOWN,l.toString())})}Wo(e,t,i,a,l){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Wo(e,Xy(t,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ee($.UNKNOWN,c.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class N6{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Vt(t),this.ea=!1):te("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="RemoteStore";class x6{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=l,this.ca.vo(c=>{i.enqueueAndForget(async()=>{oa(this)&&(te(To,"Restarting streams for network reachability change."),await async function(p){const g=de(p);g.aa.add(4),await Cu(g),g.la.set("Unknown"),g.aa.delete(4),await ld(g)}(this))})}),this.la=new N6(i,a)}}async function ld(n){if(oa(n))for(const e of n.ua)await e(!0)}async function Cu(n){for(const e of n.ua)await e(!1)}function Sm(n,e){const t=de(n);t._a.has(e.targetId)||(t._a.set(e.targetId,e),DE(t)?CE(t):Pu(t).b_()&&RE(t,e))}function fu(n,e){const t=de(n),i=Pu(t);t._a.delete(e),i.b_()&&ZC(t,e),t._a.size===0&&(i.b_()?i.v_():oa(t)&&t.la.set("Unknown"))}function RE(n,e){if(n.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pu(n).U_(e)}function ZC(n,e){n.ha.Ke(e),Pu(n).K_(e)}function CE(n){n.ha=new RU({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n._a.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Pu(n).start(),n.la.ta()}function DE(n){return oa(n)&&!Pu(n).w_()&&n._a.size>0}function oa(n){return de(n).aa.size===0}function eD(n){n.ha=void 0}async function O6(n){n.la.set("Online")}async function V6(n){n._a.forEach((e,t)=>{RE(n,e)})}async function k6(n,e){eD(n),DE(n)?(n.la.ia(e),CE(n)):n.la.set("Unknown")}async function M6(n,e,t){if(n.la.set("Online"),e instanceof dC&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a._a.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a._a.delete(d),a.ha.removeTarget(d))}(n,e)}catch(i){te(To,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Gp(n,i)}else if(e instanceof hp?n.ha.Xe(e):e instanceof hC?n.ha.ot(e):n.ha.nt(e),!t.isEqual(_e.min()))try{const i=await qC(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.ha.It(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l._a.get(g);y&&l._a.set(g,y.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const y=l._a.get(p);if(!y)return;l._a.set(p,y.withResumeToken(Ct.EMPTY_BYTE_STRING,y.snapshotVersion)),ZC(l,p);const v=new zr(y.target,p,g,y.sequenceNumber);RE(l,v)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){te(To,"Failed to raise snapshot:",i),await Gp(n,i)}}async function Gp(n,e,t){if(!sa(e))throw e;n.aa.add(1),await Cu(n),n.la.set("Offline"),t||(t=()=>qC(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{te(To,"Retrying IndexedDB access"),await t(),n.aa.delete(1),await ld(n)})}function tD(n,e){return e().catch(t=>Gp(n,t,e))}async function Du(n){const e=de(n),t=Js(e);let i=e.oa.length>0?e.oa[e.oa.length-1].batchId:Fs;for(;L6(e);)try{const a=await v6(e.localStore,i);if(a===null){e.oa.length===0&&t.v_();break}i=a.batchId,U6(e,a)}catch(a){await Gp(e,a)}nD(e)&&iD(e)}function L6(n){return oa(n)&&n.oa.length<10}function U6(n,e){n.oa.push(e);const t=Js(n);t.b_()&&t.W_&&t.G_(e.mutations)}function nD(n){return oa(n)&&!Js(n).w_()&&n.oa.length>0}function iD(n){Js(n).start()}async function B6(n){Js(n).H_()}async function z6(n){const e=Js(n);for(const t of n.oa)e.G_(t.mutations)}async function F6(n,e,t){const i=n.oa.shift(),a=dE.from(i,e,t);await tD(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Du(n)}async function q6(n,e){e&&Js(n).W_&&await async function(i,a){if(function(c){return uC(c)&&c!==$.ABORTED}(a.code)){const l=i.oa.shift();Js(i).D_(),await tD(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Du(i)}}(n,e),nD(n)&&iD(n)}async function kA(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),te(To,"RemoteStore received new credentials");const i=oa(t);t.aa.add(3),await Cu(t),i&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await ld(t)}async function sv(n,e){const t=de(n);e?(t.aa.delete(2),await ld(t)):e||(t.aa.add(2),await Cu(t),t.la.set("Unknown"))}function Pu(n){return n.Pa||(n.Pa=function(t,i,a){const l=de(t);return l.Y_(),new R6(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{jo:O6.bind(null,n),Jo:V6.bind(null,n),Zo:k6.bind(null,n),Q_:M6.bind(null,n)}),n.ua.push(async e=>{e?(n.Pa.D_(),DE(n)?CE(n):n.la.set("Unknown")):(await n.Pa.stop(),eD(n))})),n.Pa}function Js(n){return n.Ta||(n.Ta=function(t,i,a){const l=de(t);return l.Y_(),new C6(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:B6.bind(null,n),Zo:q6.bind(null,n),z_:z6.bind(null,n),j_:F6.bind(null,n)}),n.ua.push(async e=>{e?(n.Ta.D_(),await Du(n)):(await n.Ta.stop(),n.oa.length>0&&(te(To,`Stopping write stream with ${n.oa.length} pending writes`),n.oa=[]))})),n.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const c=Date.now()+i,d=new PE(e,t,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nu(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),sa(n))return new ee($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{static emptySet(e){return new ql(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||he.comparator(t.key,i.key):(t,i)=>he.comparator(t.key,i.key),this.keyedMap=nh(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ql)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new ql;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.Ia=new ut(he.comparator)}track(e){const t=e.doc.key,i=this.Ia.get(t);i?e.type!==0&&i.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&i.type!==1?this.Ia=this.Ia.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Ia=this.Ia.remove(t):e.type===1&&i.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):pe(63341,{Vt:e,Ea:i}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,i)=>{e.push(i)}),e}}class pu{constructor(e,t,i,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new pu(e,t,ql.emptySet(t),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j6{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class G6{constructor(){this.queries=LA(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,i){const a=de(t),l=a.queries;a.queries=LA(),l.forEach((c,d)=>{for(const p of d.Ra)p.onError(i)})})(this,new ee($.ABORTED,"Firestore shutting down"))}}function LA(){return new Wr(n=>Y1(n),nd)}async function NE(n,e){const t=de(n);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.Va()&&e.ma()&&(i=2):(l=new j6,i=e.ma()?0:1);try{switch(i){case 0:l.Aa=await t.onListen(a,!0);break;case 1:l.Aa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=Nu(c,`Initialization of query '${Pl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Ra.push(e),e.ga(t.onlineState),l.Aa&&e.pa(l.Aa)&&OE(t)}async function xE(n,e){const t=de(n),i=e.query;let a=3;const l=t.queries.get(i);if(l){const c=l.Ra.indexOf(e);c>=0&&(l.Ra.splice(c,1),l.Ra.length===0?a=e.ma()?0:1:!l.Va()&&e.ma()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function H6(n,e){const t=de(n);let i=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Ra)d.pa(a)&&(i=!0);c.Aa=a}}i&&OE(t)}function $6(n,e,t){const i=de(n),a=i.queries.get(e);if(a)for(const l of a.Ra)l.onError(t);i.queries.delete(e)}function OE(n){n.fa.forEach(e=>{e.next()})}var av,UA;(UA=av||(av={})).ya="default",UA.Cache="cache";class VE{constructor(e,t,i){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=i||{}}pa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new pu(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const i=t!=="Offline";return(!this.options.Fa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=pu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==av.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K6{constructor(e,t){this.Ma=e,this.byteLength=t}xa(){return"metadata"in this.Ma}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.serializer=e}Bs(e){return or(this.serializer,e)}Ls(e){return e.metadata.exists?yC(this.serializer,e.document,!1):ht.newNoDocument(this.Bs(e.metadata.name),this.ks(e.metadata.readTime))}ks(e){return kt(e)}}class Q6{constructor(e,t,i){this.Oa=e,this.localStore=t,this.serializer=i,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=rD(e)}Na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ma.namedQuery)this.queries.push(e.Ma.namedQuery);else if(e.Ma.documentMetadata){this.documents.push({metadata:e.Ma.documentMetadata}),e.Ma.documentMetadata.exists||++t;const i=Be.fromString(e.Ma.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.Ma.document&&(this.documents[this.documents.length-1].document=e.Ma.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ba(e){const t=new Map,i=new BA(this.serializer);for(const a of e)if(a.metadata.queries){const l=i.Bs(a.metadata.name);for(const c of a.metadata.queries){const d=(t.get(c)||Pe()).add(l);t.set(c,d)}}return t}async complete(){const e=await E6(this.localStore,new BA(this.serializer),this.documents,this.Oa.id),t=this.Ba(this.documents);for(const i of this.queries)await T6(this.localStore,i,t.get(i.name));return this.progress.taskState="Success",{progress:this.progress,La:this.collectionGroups,ka:e}}}function rD(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.key=e}}class aD{constructor(e){this.key=e}}class oD{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Pe(),this.mutatedKeys=Pe(),this.Ua=X1(e),this.Ka=new ql(this.Ua)}get Wa(){return this.qa}Ga(e,t){const i=t?t.za:new MA,a=t?t.Ka:this.Ka;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,v)=>{const w=a.get(y),C=id(this.query,v)?v:null,L=!!w&&this.mutatedKeys.has(w.key),j=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let U=!1;w&&C?w.data.isEqual(C.data)?L!==j&&(i.track({type:3,doc:C}),U=!0):this.ja(w,C)||(i.track({type:2,doc:C}),U=!0,(p&&this.Ua(C,p)>0||g&&this.Ua(C,g)<0)&&(d=!0)):!w&&C?(i.track({type:0,doc:C}),U=!0):w&&!C&&(i.track({type:1,doc:w}),U=!0,(p||g)&&(d=!0)),U&&(C?(c=c.add(C),l=j?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),i.track({type:1,doc:y})}return{Ka:c,za:i,ys:d,mutatedKeys:l}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const c=e.za.da();c.sort((y,v)=>function(C,L){const j=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Vt:U})}};return j(C)-j(L)}(y.type,v.type)||this.Ua(y.doc,v.doc)),this.Ha(i),a=a!=null&&a;const d=t&&!a?this.Ja():[],p=this.$a.size===0&&this.current&&!a?1:0,g=p!==this.Qa;return this.Qa=p,c.length!==0||g?{snapshot:new pu(this.query,e.Ka,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ya:d}:{Ya:d}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new MA,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Pe(),this.Ka.forEach(i=>{this.Za(i.key)&&(this.$a=this.$a.add(i.key))});const t=[];return e.forEach(i=>{this.$a.has(i)||t.push(new aD(i))}),this.$a.forEach(i=>{e.has(i)||t.push(new sD(i))}),t}Xa(e){this.qa=e.Ns,this.$a=Pe();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return pu.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const la="SyncEngine";class Y6{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class W6{constructor(e){this.key=e,this.tu=!1}}class X6{constructor(e,t,i,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.nu={},this.ru=new Wr(d=>Y1(d),nd),this.iu=new Map,this.su=new Set,this.ou=new ut(he.comparator),this._u=new Map,this.au=new vE,this.uu={},this.cu=new Map,this.lu=Eo.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function J6(n,e,t=!0){const i=Rm(n);let a;const l=i.ru.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.eu()):a=await lD(i,e,t,!0),a}async function Z6(n,e){const t=Rm(n);await lD(t,e,!0,!1)}async function lD(n,e,t,i){const a=await hu(n.localStore,On(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await kE(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&Sm(n.remoteStore,a),d}async function kE(n,e,t,i,a){n.Pu=(v,w,C)=>async function(j,U,ie,ne){let X=U.view.Ga(ie);X.ys&&(X=await Fp(j.localStore,U.query,!1).then(({documents:S})=>U.view.Ga(S,X)));const fe=ne&&ne.targetChanges.get(U.targetId),ae=ne&&ne.targetMismatches.get(U.targetId)!=null,ce=U.view.applyChanges(X,j.isPrimaryClient,fe,ae);return ov(j,U.targetId,ce.Ya),ce.snapshot}(n,v,w,C);const l=await Fp(n.localStore,e,!0),c=new oD(e,l.Ns),d=c.Ga(l.documents),p=ad.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);ov(n,t,g.Ya);const y=new Y6(e,t,c);return n.ru.set(e,y),n.iu.has(t)?n.iu.get(t).push(e):n.iu.set(t,[e]),g.snapshot}async function e3(n,e,t){const i=de(n),a=i.ru.get(e),l=i.iu.get(a.targetId);if(l.length>1)return i.iu.set(a.targetId,l.filter(c=>!nd(c,e))),void i.ru.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await du(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),t&&fu(i.remoteStore,a.targetId),mu(i,a.targetId)}).catch(ra)):(mu(i,a.targetId),await du(i.localStore,a.targetId,!0))}async function t3(n,e){const t=de(n),i=t.ru.get(e),a=t.iu.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),fu(t.remoteStore,i.targetId))}async function n3(n,e,t){const i=BE(n);try{const a=await function(c,d){const p=de(c),g=vt.now(),y=d.reduce((C,L)=>C.add(L.key),Pe());let v,w;return p.persistence.runTransaction("Locally write mutations","readwrite",C=>{let L=jn(),j=Pe();return p.Cs.getEntries(C,y).next(U=>{L=U,L.forEach((ie,ne)=>{ne.isValidDocument()||(j=j.add(ie))})}).next(()=>p.localDocuments.getOverlayedDocuments(C,L)).next(U=>{v=U;const ie=[];for(const ne of d){const X=bU(ne,v.get(ne.key).overlayedDocument);X!=null&&ie.push(new Xr(ne.key,X,z1(X.value.mapValue),yt.exists(!0)))}return p.mutationQueue.addMutationBatch(C,g,ie,d)}).next(U=>{w=U;const ie=U.applyToLocalDocumentSet(v,j);return p.documentOverlayCache.saveOverlays(C,U.batchId,ie)})}).then(()=>({batchId:w.batchId,changes:Z1(v)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.uu[c.currentUser.toKey()];g||(g=new ut(Re)),g=g.insert(d,p),c.uu[c.currentUser.toKey()]=g}(i,a.batchId,t),await Jr(i,a.changes),await Du(i.remoteStore)}catch(a){const l=Nu(a,"Failed to persist write");t.reject(l)}}async function uD(n,e){const t=de(n);try{const i=await y6(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t._u.get(l);c&&(ge(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.tu=!0:a.modifiedDocuments.size>0?ge(c.tu,14607):a.removedDocuments.size>0&&(ge(c.tu,42227),c.tu=!1))}),await Jr(t,i,e)}catch(i){await ra(i)}}function zA(n,e,t){const i=de(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.ru.forEach((l,c)=>{const d=c.view.ga(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=de(c);p.onlineState=d;let g=!1;p.queries.forEach((y,v)=>{for(const w of v.Ra)w.ga(d)&&(g=!0)}),g&&OE(p)}(i.eventManager,e),a.length&&i.nu.Q_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function i3(n,e,t){const i=de(n);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i._u.get(e),l=a&&a.key;if(l){let c=new ut(he.comparator);c=c.insert(l,ht.newNoDocument(l,_e.min()));const d=Pe().add(l),p=new sd(_e.min(),new Map,new ut(Re),c,d);await uD(i,p),i.ou=i.ou.remove(l),i._u.delete(e),UE(i)}else await du(i.localStore,e,!1).then(()=>mu(i,e,t)).catch(ra)}async function r3(n,e){const t=de(n),i=e.batch.batchId;try{const a=await _6(t.localStore,e);LE(t,i,null),ME(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Jr(t,a)}catch(a){await ra(a)}}async function s3(n,e,t){const i=de(n);try{const a=await function(c,d){const p=de(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next(v=>(ge(v!==null,37113),y=v.keys(),p.mutationQueue.removeMutationBatch(g,v))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(i.localStore,e);LE(i,e,t),ME(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Jr(i,a)}catch(a){await ra(a)}}async function a3(n,e){const t=de(n);oa(t.remoteStore)||te(la,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await function(c){const d=de(c);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",p=>d.mutationQueue.getHighestUnacknowledgedBatchId(p))}(t.localStore);if(i===Fs)return void e.resolve();const a=t.cu.get(i)||[];a.push(e),t.cu.set(i,a)}catch(i){const a=Nu(i,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function ME(n,e){(n.cu.get(e)||[]).forEach(t=>{t.resolve()}),n.cu.delete(e)}function LE(n,e,t){const i=de(n);let a=i.uu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.uu[i.currentUser.toKey()]=a}}function mu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.iu.get(e))n.ru.delete(i),t&&n.nu.Tu(i,t);n.iu.delete(e),n.isPrimaryClient&&n.au.Ur(e).forEach(i=>{n.au.containsKey(i)||cD(n,i)})}function cD(n,e){n.su.delete(e.path.canonicalString());const t=n.ou.get(e);t!==null&&(fu(n.remoteStore,t),n.ou=n.ou.remove(e),n._u.delete(t),UE(n))}function ov(n,e,t){for(const i of t)i instanceof sD?(n.au.addReference(i.key,e),o3(n,i)):i instanceof aD?(te(la,"Document no longer in limbo: "+i.key),n.au.removeReference(i.key,e),n.au.containsKey(i.key)||cD(n,i.key)):pe(19791,{Iu:i})}function o3(n,e){const t=e.key,i=t.path.canonicalString();n.ou.get(t)||n.su.has(i)||(te(la,"New document in limbo: "+t),n.su.add(i),UE(n))}function UE(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const e=n.su.values().next().value;n.su.delete(e);const t=new he(Be.fromString(e)),i=n.lu.next();n._u.set(i,new W6(t)),n.ou=n.ou.insert(t,i),Sm(n.remoteStore,new zr(On(Au(t.path)),i,"TargetPurposeLimboResolution",Fn.le))}}async function Jr(n,e,t){const i=de(n),a=[],l=[],c=[];i.ru.isEmpty()||(i.ru.forEach((d,p)=>{c.push(i.Pu(p,e,t).then(g=>{var y;if((g||t)&&i.isPrimaryClient){const v=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){a.push(g);const v=IE.Ps(p.targetId,g);l.push(v)}}))}),await Promise.all(c),i.nu.Q_(a),await async function(p,g){const y=de(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>z.forEach(g,w=>z.forEach(w.ls,C=>y.persistence.referenceDelegate.addReference(v,w.targetId,C)).next(()=>z.forEach(w.hs,C=>y.persistence.referenceDelegate.removeReference(v,w.targetId,C)))))}catch(v){if(!sa(v))throw v;te(bE,"Failed to update sequence numbers: "+v)}for(const v of g){const w=v.targetId;if(!v.fromCache){const C=y.Ss.get(w),L=C.snapshotVersion,j=C.withLastLimboFreeSnapshotVersion(L);y.Ss=y.Ss.insert(w,j)}}}(i.localStore,l))}async function l3(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){te(la,"User change. New user:",e.toKey());const i=await FC(t.localStore,e);t.currentUser=e,function(l,c){l.cu.forEach(d=>{d.forEach(p=>{p.reject(new ee($.CANCELLED,c))})}),l.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Jr(t,i.Ms)}}function u3(n,e){const t=de(n),i=t._u.get(e);if(i&&i.tu)return Pe().add(i.key);{let a=Pe();const l=t.iu.get(e);if(!l)return a;for(const c of l){const d=t.ru.get(c);a=a.unionWith(d.view.Wa)}return a}}async function c3(n,e){const t=de(n),i=await Fp(t.localStore,e.query,!0),a=e.view.Xa(i);return t.isPrimaryClient&&ov(t,e.targetId,a.Ya),a}async function h3(n,e){const t=de(n);return HC(t.localStore,e).then(i=>Jr(t,i))}async function d3(n,e,t,i){const a=de(n),l=await function(d,p){const g=de(d),y=de(g.mutationQueue);return g.persistence.runTransaction("Lookup mutation documents","readonly",v=>y.Hn(v,p).next(w=>w?g.localDocuments.getDocuments(v,w):z.resolve(null)))}(a.localStore,e);l!==null?(t==="pending"?await Du(a.remoteStore):t==="acknowledged"||t==="rejected"?(LE(a,e,i||null),ME(a,e),function(d,p){de(de(d).mutationQueue).Xn(p)}(a.localStore,e)):pe(6720,"Unknown batchState",{Eu:t}),await Jr(a,l)):te(la,"Cannot apply mutation batch with id: "+e)}async function f3(n,e){const t=de(n);if(Rm(t),BE(t),e===!0&&t.hu!==!0){const i=t.sharedClientState.getAllActiveQueryTargets(),a=await FA(t,i.toArray());t.hu=!0,await sv(t.remoteStore,!0);for(const l of a)Sm(t.remoteStore,l)}else if(e===!1&&t.hu!==!1){const i=[];let a=Promise.resolve();t.iu.forEach((l,c)=>{t.sharedClientState.isLocalQueryTarget(c)?i.push(c):a=a.then(()=>(mu(t,c),du(t.localStore,c,!0))),fu(t.remoteStore,c)}),await a,await FA(t,i),function(c){const d=de(c);d._u.forEach((p,g)=>{fu(d.remoteStore,g)}),d.au.Kr(),d._u=new Map,d.ou=new ut(he.comparator)}(t),t.hu=!1,await sv(t.remoteStore,!1)}}async function FA(n,e,t){const i=de(n),a=[],l=[];for(const c of e){let d;const p=i.iu.get(c);if(p&&p.length!==0){d=await hu(i.localStore,On(p[0]));for(const g of p){const y=i.ru.get(g),v=await c3(i,y);v.snapshot&&l.push(v.snapshot)}}else{const g=await GC(i.localStore,c);d=await hu(i.localStore,g),await kE(i,hD(g),c,!1,d.resumeToken)}a.push(d)}return i.nu.Q_(l),a}function hD(n){return Q1(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function p3(n){return function(t){return de(de(t).persistence).us()}(de(n).localStore)}async function m3(n,e,t,i){const a=de(n);if(a.hu)return void te(la,"Ignoring unexpected query state notification.");const l=a.iu.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const c=await HC(a.localStore,W1(l[0])),d=sd.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ct.EMPTY_BYTE_STRING);await Jr(a,c,d);break}case"rejected":await du(a.localStore,e,!0),mu(a,e,i);break;default:pe(64155,t)}}async function g3(n,e,t){const i=Rm(n);if(i.hu){for(const a of e){if(i.iu.has(a)&&i.sharedClientState.isActiveQueryTarget(a)){te(la,"Adding an already active target "+a);continue}const l=await GC(i.localStore,a),c=await hu(i.localStore,l);await kE(i,hD(l),c.targetId,!1,c.resumeToken),Sm(i.remoteStore,c)}for(const a of t)i.iu.has(a)&&await du(i.localStore,a,!1).then(()=>{fu(i.remoteStore,a),mu(i,a)}).catch(ra)}}function Rm(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=uD.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=u3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=i3.bind(null,e),e.nu.Q_=H6.bind(null,e.eventManager),e.nu.Tu=$6.bind(null,e.eventManager),e}function BE(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=r3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=s3.bind(null,e),e}function _3(n,e,t){const i=de(n);(async function(l,c,d){try{const p=await c.getMetadata();if(await function(C,L){const j=de(C),U=kt(L.createTime);return j.persistence.runTransaction("hasNewerBundle","readonly",ie=>j.ci.getBundleMetadata(ie,L.id)).then(ie=>!!ie&&ie.createTime.compareTo(U)>=0)}(l.localStore,p))return await c.close(),d._completeWith(function(C){return{taskState:"Success",documentsLoaded:C.totalDocuments,bytesLoaded:C.totalBytes,totalDocuments:C.totalDocuments,totalBytes:C.totalBytes}}(p)),Promise.resolve(new Set);d._updateProgress(rD(p));const g=new Q6(p,l.localStore,c.serializer);let y=await c.du();for(;y;){const w=await g.Na(y);w&&d._updateProgress(w),y=await c.du()}const v=await g.complete();return await Jr(l,v.ka,void 0),await function(C,L){const j=de(C);return j.persistence.runTransaction("Save bundle","readwrite",U=>j.ci.saveBundleMetadata(U,L))}(l.localStore,p),d._completeWith(v.progress),Promise.resolve(v.La)}catch(p){return cr(la,`Loading bundle failed with ${p}`),d._failWith(p),Promise.resolve(new Set)}})(i,e,t).then(a=>{i.sharedClientState.notifyBundleLoaded(a)})}class Uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=od(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return zC(this.persistence,new BC,e.initialUser,this.serializer)}Ru(e){return new EE(Am.Ei,this.serializer)}Au(e){return new WC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uh.provider={build:()=>new Uh};class y3 extends Uh{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){ge(this.persistence.referenceDelegate instanceof zp,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new OC(i,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new EE(i=>zp.Ei(i,t),this.serializer)}}class dD extends Uh{constructor(e,t,i){super(),this.gu=e,this.cacheSizeBytes=t,this.forceOwnership=i,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.gu.initialize(this,e),await BE(this.gu.syncEngine),await Du(this.gu.remoteStore),await this.persistence.Ki(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Vu(e){return zC(this.persistence,new BC,e.initialUser,this.serializer)}mu(e,t){const i=this.persistence.referenceDelegate.garbageCollector;return new OC(i,e.asyncQueue,t)}fu(e,t){const i=new RL(t,this.persistence);return new SL(e.asyncQueue,i)}Ru(e){const t=wE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new TE(this.synchronizeTabs,t,e.clientId,i,e.asyncQueue,XC(),dp(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Au(e){return new WC}}class v3 extends dD{constructor(e,t){super(e,t,!1),this.gu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.gu.syncEngine;this.sharedClientState instanceof fy&&(this.sharedClientState.syncEngine={yo:d3.bind(null,t),wo:m3.bind(null,t),bo:g3.bind(null,t),us:p3.bind(null,t),po:h3.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ki(async i=>{await f3(this.gu.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())})}Au(e){const t=XC();if(!fy.C(t))throw new ee($.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=wE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new fy(t,e.asyncQueue,i,e.clientId,e.initialUser)}}class Bh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>zA(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=l3.bind(null,this.syncEngine),await sv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new G6}()}createDatastore(e){const t=od(e.databaseInfo.databaseId),i=function(l){return new S6(l)}(e.databaseInfo);return function(l,c,d,p){return new P6(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,a,l,c,d){return new x6(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>zA(this.syncEngine,t,0),function(){return OA.C()?new OA:new w6}())}createSyncEngine(e,t){return function(a,l,c,d,p,g,y){const v=new X6(a,l,c,d,p,g);return y&&(v.hu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=de(a);te(To,"RemoteStore shutting down."),l.aa.add(5),await Cu(l),l.ca.shutdown(),l.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Bh.provider={build:()=>new Bh};function qA(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const i={value:n.slice(t,t+e),done:!1};return t+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{constructor(e,t){this.wu=e,this.serializer=t,this.metadata=new gn,this.buffer=new Uint8Array,this.bu=function(){return new TextDecoder("utf-8")}(),this.Su().then(i=>{i&&i.xa()?this.metadata.resolve(i.Ma.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.Ma)}`))},i=>this.metadata.reject(i))}close(){return this.wu.cancel()}async getMetadata(){return this.metadata.promise}async du(){return await this.getMetadata(),this.Su()}async Su(){const e=await this.Du();if(e===null)return null;const t=this.bu.decode(e),i=Number(t);isNaN(i)&&this.vu(`length string (${t}) is not valid number`);const a=await this.Cu(i);return new K6(JSON.parse(a),e.length+i)}Fu(){return this.buffer.findIndex(e=>e===123)}async Du(){for(;this.Fu()<0&&!await this.Mu(););if(this.buffer.length===0)return null;const e=this.Fu();e<0&&this.vu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cu(e){for(;this.buffer.length<e;)await this.Mu()&&this.vu("Reached the end of bundle when more is expected.");const t=this.bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}vu(e){throw this.wu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Mu(){const e=await this.wu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T3{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ee($.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,l){const c=de(a),d={documents:l.map(v=>Mh(c.serializer,v))},p=await c.Wo("BatchGetDocuments",c.serializer.databaseId,Be.emptyPath(),d,l.length),g=new Map;p.forEach(v=>{const w=OU(c.serializer,v);g.set(w.key.toString(),w)});const y=[];return l.forEach(v=>{const w=g.get(v.toString());ge(!!w,55234,{key:v}),y.push(w)}),y}(this.datastore,e);return t.forEach(i=>this.recordVersion(i)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ru(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,i)=>{const a=he.fromPath(i);this.mutations.push(new cE(a,this.precondition(a)))}),await async function(i,a){const l=de(i),c={writes:a.map(d=>Lh(l.serializer,d))};await l.Qo("Commit",l.serializer.databaseId,Be.emptyPath(),c)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw pe(50498,{xu:e.constructor.name});t=_e.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new ee($.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(_e.min())?yt.exists(!1):yt.updateTime(t):yt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(_e.min()))throw new ee($.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return yt.updateTime(t)}return yt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(e,t,i,a,l){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=a,this.deferred=l,this.Ou=i.maxAttempts,this.y_=new SE(this.asyncQueue,"transaction_retry")}Nu(){this.Ou-=1,this.Bu()}Bu(){this.y_.E_(async()=>{const e=new T3(this.datastore),t=this.Lu(e);t&&t.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(a=>{this.ku(a)}))}).catch(i=>{this.ku(i)})})}Lu(e){try{const t=this.updateFunction(e);return!Zh(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ku(e){this.Ou>0&&this.qu(e)?(this.Ou-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bu(),Promise.resolve()))):this.deferred.reject(e)}qu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!uC(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="FirestoreClient";class I3{constructor(e,t,i,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=on.UNAUTHENTICATED,this.clientId=p1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{te(Zs,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(te(Zs,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Nu(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function my(n,e){n.asyncQueue.verifyOperationInProgress(),te(Zs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async a=>{i.isEqual(a)||(await FC(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function jA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zE(n);te(Zs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>kA(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,a)=>kA(e.remoteStore,a)),n._onlineComponents=e}async function zE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){te(Zs,"Using user provided OfflineComponentProvider");try{await my(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;cr("Error using user provided cache. Falling back to memory cache: "+t),await my(n,new Uh)}}else te(Zs,"Using default OfflineComponentProvider"),await my(n,new y3(void 0));return n._offlineComponents}async function Dm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(te(Zs,"Using user provided OnlineComponentProvider"),await jA(n,n._uninitializedComponentsProvider._online)):(te(Zs,"Using default OnlineComponentProvider"),await jA(n,new Bh))),n._onlineComponents}function fD(n){return zE(n).then(e=>e.persistence)}function FE(n){return zE(n).then(e=>e.localStore)}function pD(n){return Dm(n).then(e=>e.remoteStore)}function qE(n){return Dm(n).then(e=>e.syncEngine)}function b3(n){return Dm(n).then(e=>e.datastore)}async function gu(n){const e=await Dm(n),t=e.eventManager;return t.onListen=J6.bind(null,e.syncEngine),t.onUnlisten=e3.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Z6.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=t3.bind(null,e.syncEngine),t}function A3(n){return n.asyncQueue.enqueue(async()=>{const e=await fD(n),t=await pD(n);return e.setNetworkEnabled(!0),function(a){const l=de(a);return l.aa.delete(0),ld(l)}(t)})}function S3(n){return n.asyncQueue.enqueue(async()=>{const e=await fD(n),t=await pD(n);return e.setNetworkEnabled(!1),async function(a){const l=de(a);l.aa.add(0),await Cu(l),l.la.set("Offline")}(t)})}function R3(n,e){const t=new gn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,l,c){try{const d=await function(g,y){const v=de(g);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,y))}(a,l);d.isFoundDocument()?c.resolve(d):d.isNoDocument()?c.resolve(null):c.reject(new ee($.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const p=Nu(d,`Failed to get document '${l} from cache`);c.reject(p)}}(await FE(n),e,t)),t.promise}function mD(n,e,t={}){const i=new gn;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new Cm({next:w=>{y.yu(),c.enqueueAndForget(()=>xE(l,v));const C=w.docs.has(d);!C&&w.fromCache?g.reject(new ee($.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&w.fromCache&&p&&p.source==="server"?g.reject(new ee($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),v=new VE(Au(d.path),y,{includeMetadataChanges:!0,Fa:!0});return NE(l,v)}(await gu(n),n.asyncQueue,e,t,i)),i.promise}function C3(n,e){const t=new gn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,l,c){try{const d=await Fp(a,l,!0),p=new oD(l,d.Ns),g=p.Ga(d.documents),y=p.applyChanges(g,!1);c.resolve(y.snapshot)}catch(d){const p=Nu(d,`Failed to execute query '${l} against cache`);c.reject(p)}}(await FE(n),e,t)),t.promise}function gD(n,e,t={}){const i=new gn;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new Cm({next:w=>{y.yu(),c.enqueueAndForget(()=>xE(l,v)),w.fromCache&&p.source==="server"?g.reject(new ee($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),v=new VE(d,y,{includeMetadataChanges:!0,Fa:!0});return NE(l,v)}(await gu(n),n.asyncQueue,e,t,i)),i.promise}function D3(n,e){const t=new Cm(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,l){de(a).fa.add(l),l.next()}(await gu(n),t)),()=>{t.yu(),n.asyncQueue.enqueueAndForget(async()=>function(a,l){de(a).fa.delete(l)}(await gu(n),t))}}function P3(n,e,t,i){const a=function(c,d){let p;return p=typeof c=="string"?Xv().encode(c):c,function(y,v){return new E3(y,v)}(function(y,v){if(y instanceof Uint8Array)return qA(y,v);if(y instanceof ArrayBuffer)return qA(new Uint8Array(y),v);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(p),d)}(t,od(e));n.asyncQueue.enqueueAndForget(async()=>{_3(await qE(n),a,i)})}function N3(n,e){return n.asyncQueue.enqueue(async()=>function(i,a){const l=de(i);return l.persistence.runTransaction("Get named query","readonly",c=>l.ci.getNamedQuery(c,a))}(await FE(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n,e,t){if(!t)throw new ee($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yD(n,e,t,i){if(e===!0&&i===!0)throw new ee($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function HA(n){if(!he.isDocumentKey(n))throw new ee($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $A(n){if(he.isDocumentKey(n))throw new ee($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":pe(12329,{type:typeof n})}function Ke(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pm(n);throw new ee($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function vD(n,e){if(e<=0)throw new ee($.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED="firestore.googleapis.com",KA=!0;class QA{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ee($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ED,this.ssl=KA}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:KA;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=DC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<JU)throw new ee($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_D((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ud{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new QA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new QA(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new mL;switch(i.type){case"firstParty":return new vL(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ee($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,wv("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=GA.get(t);i&&(te("ComponentProvider","Removing Datastore"),GA.delete(t),i.terminate())}(this),Promise.resolve()}}function x3(n,e,t,i={}){var a;n=Ke(n,ud);const l=Hh(e),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;c.host!==ED&&c.host!==p&&cr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:i});if(!js(g,d)&&(n._setSettings(g),l&&(jS(`https://${p}`),wv("Firestore",!0)),i.mockUserToken)){let y,v;if(typeof i.mockUserToken=="string")y=i.mockUserToken,v=on.MOCK_USER;else{y=xO(i.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new ee($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new on(w)}n._authCredentials=new gL(new f1(y,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn=class TD{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new TD(this.firestore,e,this._query)}},wt=class wD{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wD(this.firestore,e,this._key)}},qs=class ID extends Vn{constructor(e,t,i){super(e,t,Au(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new he(e))}withConverter(e){return new ID(this.firestore,e,this._path)}};function bD(n,e,...t){if(n=Ie(n),jE("collection","path",e),n instanceof ud){const i=Be.fromString(e,...t);return $A(i),new qs(n,null,i)}{if(!(n instanceof wt||n instanceof qs))throw new ee($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Be.fromString(e,...t));return $A(i),new qs(n.firestore,null,i)}}function O3(n,e){if(n=Ke(n,ud),jE("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new ee($.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Vn(n,null,function(i){return new Yr(Be.emptyPath(),i)}(e))}function Hp(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=p1.newId()),jE("doc","path",e),n instanceof ud){const i=Be.fromString(e,...t);return HA(i),new wt(n,null,new he(i))}{if(!(n instanceof wt||n instanceof qs))throw new ee($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Be.fromString(e,...t));return HA(i),new wt(n.firestore,n instanceof qs?n.converter:null,new he(i))}}function AD(n,e){return n=Ie(n),e=Ie(e),(n instanceof wt||n instanceof qs)&&(e instanceof wt||e instanceof qs)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function SD(n,e){return n=Ie(n),e=Ie(e),n instanceof Vn&&e instanceof Vn&&n.firestore===e.firestore&&nd(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="AsyncQueue";class WA{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new SE(this,"async_queue_retry"),this.ju=()=>{const i=dp();i&&te(YA,"Visibility state changed to "+i.visibilityState),this.y_.A_()},this.Hu=e;const t=dp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=dp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new gn;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!sa(e))throw e;te(YA,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(i=>{throw this.Ku=i,this.Wu=!1,Vt("INTERNAL UNHANDLED ERROR: ",XA(i)),i}).then(i=>(this.Wu=!1,i))));return this.Hu=t,t}enqueueAfterDelay(e,t,i){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const a=PE.createAndSchedule(this,e,t,i,l=>this.Xu(l));return this.Uu.push(a),a}Ju(){this.Ku&&pe(47125,{ec:XA(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function XA(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1}(n,["next","error","complete"])}class V3{constructor(){this._progressObserver={},this._taskCompletionResolver=new gn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,i){this._progressObserver={next:e,error:t,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k3=-1;let Mt=class extends ud{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new WA,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new WA(e),this._firestoreClient=void 0,await e}}};function An(n){if(n._terminated)throw new ee($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||RD(n),n._firestoreClient}function RD(n){var e,t,i;const a=n._freezeSettings(),l=function(d,p,g,y){return new nU(d,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,_D(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new I3(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}function M3(n,e){cr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return CD(n,Bh.provider,{build:i=>new dD(i,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function L3(n){cr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();CD(n,Bh.provider,{build:t=>new v3(t,e.cacheSizeBytes)})}function CD(n,e,t){if((n=Ke(n,Mt))._firestoreClient||n._terminated)throw new ee($.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new ee($.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},RD(n)}function U3(n){if(n._initialized&&!n._terminated)throw new ee($.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new gn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(i){if(!ar.C())return Promise.resolve();const a=i+UC;await ar.delete(a)}(wE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function B3(n){return function(t){const i=new gn;return t.asyncQueue.enqueueAndForget(async()=>a3(await qE(t),i)),i.promise}(An(n=Ke(n,Mt)))}function z3(n){return A3(An(n=Ke(n,Mt)))}function F3(n){return S3(An(n=Ke(n,Mt)))}function q3(n,e){const t=An(n=Ke(n,Mt)),i=new V3;return P3(t,n._databaseId,e,i),i}function j3(n,e){return N3(An(n=Ke(n,Mt)),e).then(t=>t?new Vn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dr(Ct.fromBase64String(e))}catch(t){throw new ee($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dr(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G3=/^__.*__$/;class H3{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Su(e,this.data,t,this.fieldTransforms)}}class DD{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Xr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function PD(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{oc:n})}}class xm{constructor(e,t,i,a,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this._c(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new xm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:i,cc:!1});return a.lc(e),a}hc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:i,cc:!1});return a._c(),a}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return $p(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(PD(this.oc)&&G3.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class $3{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||od(e)}dc(e,t,i,a=!1){return new xm({oc:e,methodName:t,Ec:i,path:_t.emptyPath(),cc:!1,Ic:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function So(n){const e=n._freezeSettings(),t=od(n._databaseId);return new $3(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Om(n,e,t,i,a,l={}){const c=n.dc(l.merge||l.mergeFields?2:0,e,t,a);XE("Data must be an object, but it was:",c,i);const d=OD(i,c);let p,g;if(l.merge)p=new qn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const v of l.mergeFields){const w=uv(e,v,t);if(!c.contains(w))throw new ee($.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);kD(y,w)||y.push(w)}p=new qn(y),g=c.fieldTransforms.filter(v=>p.covers(v.field))}else p=null,g=c.fieldTransforms;return new H3(new mn(d),p,g)}class cd extends Ao{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cd}}function ND(n,e,t){return new xm({oc:3,Ec:e.settings.Ec,methodName:n._methodName,cc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class HE extends Ao{_toFieldTransform(e){return new rd(e.path,new lu)}isEqual(e){return e instanceof HE}}class $E extends Ao{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=ND(this,e,!0),i=this.Ac.map(l=>Ro(l,t)),a=new go(i);return new rd(e.path,a)}isEqual(e){return e instanceof $E&&js(this.Ac,e.Ac)}}class KE extends Ao{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=ND(this,e,!0),i=this.Ac.map(l=>Ro(l,t)),a=new _o(i);return new rd(e.path,a)}isEqual(e){return e instanceof KE&&js(this.Ac,e.Ac)}}class QE extends Ao{constructor(e,t){super(e),this.Rc=t}_toFieldTransform(e){const t=new uu(e.serializer,nC(e.serializer,this.Rc));return new rd(e.path,t)}isEqual(e){return e instanceof QE&&this.Rc===e.Rc}}function YE(n,e,t,i){const a=n.dc(1,e,t);XE("Data must be an object, but it was:",a,i);const l=[],c=mn.empty();aa(i,(p,g)=>{const y=JE(e,p,t);g=Ie(g);const v=a.hc(y);if(g instanceof cd)l.push(y);else{const w=Ro(g,v);w!=null&&(l.push(y),c.set(y,w))}});const d=new qn(l);return new DD(c,d,a.fieldTransforms)}function WE(n,e,t,i,a,l){const c=n.dc(1,e,t),d=[uv(e,i,t)],p=[a];if(l.length%2!=0)throw new ee($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(uv(e,l[w])),p.push(l[w+1]);const g=[],y=mn.empty();for(let w=d.length-1;w>=0;--w)if(!kD(g,d[w])){const C=d[w];let L=p[w];L=Ie(L);const j=c.hc(C);if(L instanceof cd)g.push(C);else{const U=Ro(L,j);U!=null&&(g.push(C),y.set(C,U))}}const v=new qn(g);return new DD(y,v,c.fieldTransforms)}function xD(n,e,t,i=!1){return Ro(t,n.dc(i?4:3,e))}function Ro(n,e){if(VD(n=Ie(n)))return XE("Unsupported field value:",e,n),OD(n,e);if(n instanceof Ao)return function(i,a){if(!PD(a.oc))throw a.Tc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Tc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=Ro(d,a.Pc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,a){if((i=Ie(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return nC(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=vt.fromDate(i);return{timestampValue:cu(a.serializer,l)}}if(i instanceof vt){const l=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:cu(a.serializer,l)}}if(i instanceof Nm)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof dr)return{bytesValue:fC(a.serializer,i._byteString)};if(i instanceof wt){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Tc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:mE(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof GE)return function(c,d){return{mapValue:{fields:{[rE]:{stringValue:sE},[su]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Tc("VectorValues must only contain numeric values.");return uE(d.serializer,g)})}}}}}}(i,a);throw a.Tc(`Unsupported field value: ${Pm(i)}`)}(n,e)}function OD(n,e){const t={};return N1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):aa(n,(i,a)=>{const l=Ro(a,e.uc(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function VD(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof Nm||n instanceof dr||n instanceof wt||n instanceof Ao||n instanceof GE)}function XE(n,e,t){if(!VD(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const i=Pm(t);throw i==="an object"?e.Tc(n+" a custom object"):e.Tc(n+" "+i)}}function uv(n,e,t){if((e=Ie(e))instanceof ea)return e._internalPath;if(typeof e=="string")return JE(n,e);throw $p("Field path arguments must be of type string or ",n,!1,void 0,t)}const K3=new RegExp("[~\\*/\\[\\]]");function JE(n,e,t){if(e.search(K3)>=0)throw $p(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ea(...e.split("."))._internalPath}catch{throw $p(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $p(n,e,t,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new ee($.INVALID_ARGUMENT,d+n+p)}function kD(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Q3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Q3 extends zh{data(){return super.data()}}function Vm(n,e){return typeof e=="string"?JE(n,e):e instanceof ea?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ZE{}class hd extends ZE{}function Ns(n,e,...t){let i=[];e instanceof ZE&&i.push(e),i=i.concat(t),function(l){const c=l.filter(p=>p instanceof eT).length,d=l.filter(p=>p instanceof km).length;if(c>1||c>0&&d>0)throw new ee($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)n=a._apply(n);return n}class km extends hd{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new km(e,t,i)}_apply(e){const t=this._parse(e);return UD(e._query,t),new Vn(e.firestore,e.converter,Yy(e._query,t))}_parse(e){const t=So(e.firestore);return function(l,c,d,p,g,y,v){let w;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ee($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){ZA(v,y);const L=[];for(const j of v)L.push(JA(p,l,j));w={arrayValue:{values:L}}}else w=JA(p,l,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||ZA(v,y),w=xD(d,c,v,y==="in"||y==="not-in");return ze.create(g,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Y3(n,e,t){const i=e,a=Vm("where",n);return km._create(a,i,t)}class eT extends ZE{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new eT(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:et.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)UD(c,p),c=Yy(c,p)}(e._query,t),new Vn(e.firestore,e.converter,Yy(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tT extends hd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new tT(e,t)}_apply(e){const t=function(a,l,c){if(a.startAt!==null)throw new ee($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ee($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kh(l,c)}(e._query,this._field,this._direction);return new Vn(e.firestore,e.converter,function(a,l){const c=a.explicitOrderBy.concat([l]);return new Yr(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function W3(n,e="asc"){const t=e,i=Vm("orderBy",n);return tT._create(i,t)}class Mm extends hd{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Mm(e,t,i)}_apply(e){return new Vn(e.firestore,e.converter,Mp(e._query,this._limit,this._limitType))}}function X3(n){return vD("limit",n),Mm._create("limit",n,"F")}function J3(n){return vD("limitToLast",n),Mm._create("limitToLast",n,"L")}class Lm extends hd{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Lm(e,t,i)}_apply(e){const t=LD(e,this.type,this._docOrFields,this._inclusive);return new Vn(e.firestore,e.converter,function(a,l){return new Yr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)}(e._query,t))}}function Z3(...n){return Lm._create("startAt",n,!0)}function e9(...n){return Lm._create("startAfter",n,!1)}class Um extends hd{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Um(e,t,i)}_apply(e){const t=LD(e,this.type,this._docOrFields,this._inclusive);return new Vn(e.firestore,e.converter,function(a,l){return new Yr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)}(e._query,t))}}function t9(...n){return Um._create("endBefore",n,!1)}function n9(...n){return Um._create("endAt",n,!0)}function LD(n,e,t,i){if(t[0]=Ie(t[0]),t[0]instanceof zh)return function(l,c,d,p,g){if(!p)throw new ee($.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const y=[];for(const v of Fl(l))if(v.field.isKeyField())y.push(po(c,p.key));else{const w=p.data.field(v.field);if(ym(w))throw new ee($.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const C=v.field.canonicalString();throw new ee($.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${C}' (used as the orderBy) does not exist.`)}y.push(w)}return new Xs(y,g)}(n._query,n.firestore._databaseId,e,t[0]._document,i);{const a=So(n.firestore);return function(c,d,p,g,y,v){const w=c.explicitOrderBy;if(y.length>w.length)throw new ee($.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const C=[];for(let L=0;L<y.length;L++){const j=y[L];if(w[L].field.isKeyField()){if(typeof j!="string")throw new ee($.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof j}`);if(!oE(c)&&j.indexOf("/")!==-1)throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${j}' contains a slash.`);const U=c.path.child(Be.fromString(j));if(!he.isDocumentKey(U))throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${U}' is not because it contains an odd number of segments.`);const ie=new he(U);C.push(po(d,ie))}else{const U=xD(p,g,j);C.push(U)}}return new Xs(C,v)}(n._query,n.firestore._databaseId,a,e,t,i)}}function JA(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new ee($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oE(e)&&t.indexOf("/")!==-1)throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Be.fromString(t));if(!he.isDocumentKey(i))throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return po(n,new he(i))}if(t instanceof wt)return po(n,t._key);throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pm(t)}.`)}function ZA(n,e){if(!Array.isArray(n)||n.length===0)throw new ee($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function UD(n,e){const t=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ee($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class nT{convertValue(e,t="none"){switch(Ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return aa(e,(a,l)=>{i[a]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,a;const l=(a=(i=(t=e.fields)===null||t===void 0?void 0:t[su].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.map(c=>mt(c.doubleValue));return new GE(l)}convertGeoPoint(e){return new Nm(mt(e.latitude),mt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=vm(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(xh(e));default:return null}}convertTimestamp(e){const t=Gr(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Be.fromString(e);ge(bC(i),9688,{name:e});const a=new Qs(i.get(1),i.get(3)),l=new he(i.popFirst(5));return a.isEqual(t)||Vt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class i9 extends nT{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let $r=class extends zh{constructor(e,t,i,a,l,c){super(e,t,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Vm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}},yh=class extends $r{data(e={}){return super.data(e)}},ta=class{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new io(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new yh(this._firestore,this._userDataWriter,i.key,i,new io(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new yh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new io(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new yh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new io(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:r9(d.type),doc:p,oldIndex:g,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function r9(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:n})}}function BD(n,e){return n instanceof $r&&e instanceof $r?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ta&&e instanceof ta&&n._firestore===e._firestore&&SD(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s9(n){n=Ke(n,wt);const e=Ke(n.firestore,Mt);return mD(An(e),n._key).then(t=>iT(e,n,t))}class Co extends nT{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}function a9(n){n=Ke(n,wt);const e=Ke(n.firestore,Mt),t=An(e),i=new Co(e);return R3(t,n._key).then(a=>new $r(e,i,n._key,a,new io(a!==null&&a.hasLocalMutations,!0),n.converter))}function o9(n){n=Ke(n,wt);const e=Ke(n.firestore,Mt);return mD(An(e),n._key,{source:"server"}).then(t=>iT(e,n,t))}function l9(n){n=Ke(n,Vn);const e=Ke(n.firestore,Mt),t=An(e),i=new Co(e);return MD(n._query),gD(t,n._query).then(a=>new ta(e,i,n,a))}function u9(n){n=Ke(n,Vn);const e=Ke(n.firestore,Mt),t=An(e),i=new Co(e);return C3(t,n._query).then(a=>new ta(e,i,n,a))}function c9(n){n=Ke(n,Vn);const e=Ke(n.firestore,Mt),t=An(e),i=new Co(e);return gD(t,n._query,{source:"server"}).then(a=>new ta(e,i,n,a))}function eS(n,e,t){n=Ke(n,wt);const i=Ke(n.firestore,Mt),a=Bm(n.converter,e,t);return dd(i,[Om(So(i),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,yt.none())])}function tS(n,e,t,...i){n=Ke(n,wt);const a=Ke(n.firestore,Mt),l=So(a);let c;return c=typeof(e=Ie(e))=="string"||e instanceof ea?WE(l,"updateDoc",n._key,e,t,i):YE(l,"updateDoc",n._key,e),dd(a,[c.toMutation(n._key,yt.exists(!0))])}function h9(n){return dd(Ke(n.firestore,Mt),[new Ru(n._key,yt.none())])}function d9(n,e){const t=Ke(n.firestore,Mt),i=Hp(n),a=Bm(n.converter,e);return dd(t,[Om(So(n.firestore),"addDoc",i._key,a,n.converter!==null,{}).toMutation(i._key,yt.exists(!1))]).then(()=>i)}function zD(n,...e){var t,i,a;n=Ie(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||lv(e[c])||(l=e[c],c++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(lv(e[c])){const v=e[c];e[c]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[c+1]=(i=v.error)===null||i===void 0?void 0:i.bind(v),e[c+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let p,g,y;if(n instanceof wt)g=Ke(n.firestore,Mt),y=Au(n._key.path),p={next:v=>{e[c]&&e[c](iT(g,n,v))},error:e[c+1],complete:e[c+2]};else{const v=Ke(n,Vn);g=Ke(v.firestore,Mt),y=v._query;const w=new Co(g);p={next:C=>{e[c]&&e[c](new ta(g,w,v,C))},error:e[c+1],complete:e[c+2]},MD(n._query)}return function(w,C,L,j){const U=new Cm(j),ie=new VE(C,U,L);return w.asyncQueue.enqueueAndForget(async()=>NE(await gu(w),ie)),()=>{U.yu(),w.asyncQueue.enqueueAndForget(async()=>xE(await gu(w),ie))}}(An(g),y,d,p)}function f9(n,e){return D3(An(n=Ke(n,Mt)),lv(e)?e:{next:e})}function dd(n,e){return function(i,a){const l=new gn;return i.asyncQueue.enqueueAndForget(async()=>n3(await qE(i),a,l)),l.promise}(An(n),e)}function iT(n,e,t){const i=t.docs.get(e._key),a=new Co(n);return new $r(n,a,e._key,i,new io(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p9={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m9=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=So(e)}set(e,t,i){this._verifyNotCommitted();const a=Ls(e,this._firestore),l=Bm(a.converter,t,i),c=Om(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,i);return this._mutations.push(c.toMutation(a._key,yt.none())),this}update(e,t,i,...a){this._verifyNotCommitted();const l=Ls(e,this._firestore);let c;return c=typeof(t=Ie(t))=="string"||t instanceof ea?WE(this._dataReader,"WriteBatch.update",l._key,t,i,a):YE(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,yt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ls(e,this._firestore);return this._mutations=this._mutations.concat(new Ru(t._key,yt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Ls(n,e){if((n=Ie(n)).firestore!==e)throw new ee($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g9{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=So(e)}get(e){const t=Ls(e,this._firestore),i=new i9(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return pe(24041);const l=a[0];if(l.isFoundDocument())return new zh(this._firestore,i,l.key,l,t.converter);if(l.isNoDocument())return new zh(this._firestore,i,t._key,null,t.converter);throw pe(18433,{doc:l})})}set(e,t,i){const a=Ls(e,this._firestore),l=Bm(a.converter,t,i),c=Om(this._dataReader,"Transaction.set",a._key,l,a.converter!==null,i);return this._transaction.set(a._key,c),this}update(e,t,i,...a){const l=Ls(e,this._firestore);let c;return c=typeof(t=Ie(t))=="string"||t instanceof ea?WE(this._dataReader,"Transaction.update",l._key,t,i,a):YE(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,c),this}delete(e){const t=Ls(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _9=class extends g9{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ls(e,this._firestore),i=new Co(this._firestore);return super.get(e).then(a=>new $r(this._firestore,i,t._key,a._document,new io(!1,!1),t.converter))}};function y9(n,e,t){n=Ke(n,Mt);const i=Object.assign(Object.assign({},p9),t);return function(l){if(l.maxAttempts<1)throw new ee($.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(l,c,d){const p=new gn;return l.asyncQueue.enqueueAndForget(async()=>{const g=await b3(l);new w3(l.asyncQueue,g,d,c,p).Nu()}),p.promise}(An(n),a=>e(new _9(n,a)),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v9(){return new cd("deleteField")}function E9(){return new HE("serverTimestamp")}function T9(...n){return new $E("arrayUnion",n)}function w9(...n){return new KE("arrayRemove",n)}function I9(n){return new QE("increment",n)}(function(e,t=!0){(function(a){bu=a})(na),$s(new lr("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Mt(new _L(i.getProvider("auth-internal")),new EL(c,i.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ee($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),xi(Nb,xb,e),xi(Nb,xb,"esm2017")})();const b9="@firebase/firestore-compat",A9="0.3.49";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new ee("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){if(typeof Uint8Array>"u")throw new ee("unimplemented","Uint8Arrays are not available in this environment.")}function iS(){if(!eU())throw new ee("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Fh{constructor(e){this._delegate=e}static fromBase64String(e){return iS(),new Fh(dr.fromBase64String(e))}static fromUint8Array(e){return nS(),new Fh(dr.fromUint8Array(e))}toBase64(){return iS(),this._delegate.toBase64()}toUint8Array(){return nS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n){return S9(n,["next","error","complete"])}function S9(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R9{enableIndexedDbPersistence(e,t){return M3(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return L3(e._delegate)}clearIndexedDbPersistence(e){return U3(e._delegate)}}class FD{constructor(e,t,i){this._delegate=t,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Qs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&cr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,i={}){x3(this._delegate,e,t,i)}enableNetwork(){return z3(this._delegate)}disableNetwork(){return F3(this._delegate)}enablePersistence(e){let t=!1,i=!1;return e&&(t=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,yD("synchronizeTabs",t,"experimentalForceOwningTab",i)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return B3(this._delegate)}onSnapshotsInSync(e){return f9(this._delegate,e)}get app(){if(!this._appCompat)throw new ee("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new _u(this,bD(this._delegate,e))}catch(t){throw Nn(t,"collection()","Firestore.collection()")}}doc(e){try{return new vi(this,Hp(this._delegate,e))}catch(t){throw Nn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Pn(this,O3(this._delegate,e))}catch(t){throw Nn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return y9(this._delegate,t=>e(new qD(this,t)))}batch(){return An(this._delegate),new jD(new m9(this._delegate,e=>dd(this._delegate,e)))}loadBundle(e){return q3(this._delegate,e)}namedQuery(e){return j3(this._delegate,e).then(t=>t?new Pn(this,t):null)}}class zm extends nT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fh(new dr(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return vi.forKey(t,this.firestore,null)}}function C9(n){fL(n)}class qD{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new zm(e)}get(e){const t=ro(e);return this._delegate.get(t).then(i=>new qh(this._firestore,new $r(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,t.converter)))}set(e,t,i){const a=ro(e);return i?(rT("Transaction.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=ro(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=ro(e);return this._delegate.delete(t),this}}class jD{constructor(e){this._delegate=e}set(e,t,i){const a=ro(e);return i?(rT("WriteBatch.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=ro(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=ro(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class wo{constructor(e,t,i){this._firestore=e,this._userDataWriter=t,this._delegate=i}fromFirestore(e,t){const i=new yh(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new jh(this._firestore,i),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const i=wo.INSTANCES;let a=i.get(e);a||(a=new WeakMap,i.set(e,a));let l=a.get(t);return l||(l=new wo(e,new zm(e),t),a.set(t,l)),l}}wo.INSTANCES=new WeakMap;class vi{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new zm(e)}static forPath(e,t,i){if(e.length%2!==0)throw new ee("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new vi(t,new wt(t._delegate,i,new he(e)))}static forKey(e,t,i){return new vi(t,new wt(t._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new _u(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new _u(this.firestore,bD(this._delegate,e))}catch(t){throw Nn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ie(e),e instanceof wt?AD(this._delegate,e):!1}set(e,t){t=rT("DocumentReference.set",t);try{return t?eS(this._delegate,e,t):eS(this._delegate,e)}catch(i){throw Nn(i,"setDoc()","DocumentReference.set()")}}update(e,t,...i){try{return arguments.length===1?tS(this._delegate,e):tS(this._delegate,e,t,...i)}catch(a){throw Nn(a,"updateDoc()","DocumentReference.update()")}}delete(){return h9(this._delegate)}onSnapshot(...e){const t=GD(e),i=HD(e,a=>new qh(this.firestore,new $r(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return zD(this._delegate,t,i)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=a9(this._delegate):(e==null?void 0:e.source)==="server"?t=o9(this._delegate):t=s9(this._delegate),t.then(i=>new qh(this.firestore,new $r(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new vi(this.firestore,e?this._delegate.withConverter(wo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Nn(n,e,t){return n.message=n.message.replace(e,t),n}function GD(n){for(const e of n)if(typeof e=="object"&&!cv(e))return e;return{}}function HD(n,e){var t,i;let a;return cv(n[0])?a=n[0]:cv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:l=>{a.next&&a.next(e(l))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(i=a.complete)===null||i===void 0?void 0:i.bind(a)}}class qh{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new vi(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return BD(this._delegate,e._delegate)}}class jh extends qh{data(e){const t=this._delegate.data(e);return this._delegate._converter||pL(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class Pn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new zm(e)}where(e,t,i){try{return new Pn(this.firestore,Ns(this._delegate,Y3(e,t,i)))}catch(a){throw Nn(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Pn(this.firestore,Ns(this._delegate,W3(e,t)))}catch(i){throw Nn(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Pn(this.firestore,Ns(this._delegate,X3(e)))}catch(t){throw Nn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Pn(this.firestore,Ns(this._delegate,J3(e)))}catch(t){throw Nn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Pn(this.firestore,Ns(this._delegate,Z3(...e)))}catch(t){throw Nn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Pn(this.firestore,Ns(this._delegate,e9(...e)))}catch(t){throw Nn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Pn(this.firestore,Ns(this._delegate,t9(...e)))}catch(t){throw Nn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Pn(this.firestore,Ns(this._delegate,n9(...e)))}catch(t){throw Nn(t,"endAt()","Query.endAt()")}}isEqual(e){return SD(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=u9(this._delegate):(e==null?void 0:e.source)==="server"?t=c9(this._delegate):t=l9(this._delegate),t.then(i=>new hv(this.firestore,new ta(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const t=GD(e),i=HD(e,a=>new hv(this.firestore,new ta(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return zD(this._delegate,t,i)}withConverter(e){return new Pn(this.firestore,e?this._delegate.withConverter(wo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class D9{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new jh(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class hv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Pn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new jh(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new D9(this._firestore,t))}forEach(e,t){this._delegate.forEach(i=>{e.call(t,new jh(this._firestore,i))})}isEqual(e){return BD(this._delegate,e._delegate)}}class _u extends Pn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new vi(this.firestore,e):null}doc(e){try{return e===void 0?new vi(this.firestore,Hp(this._delegate)):new vi(this.firestore,Hp(this._delegate,e))}catch(t){throw Nn(t,"doc()","CollectionReference.doc()")}}add(e){return d9(this._delegate,e).then(t=>new vi(this.firestore,t))}isEqual(e){return AD(this._delegate,e._delegate)}withConverter(e){return new _u(this.firestore,e?this._delegate.withConverter(wo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ro(n){return Ke(n,wt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(...e){this._delegate=new ea(...e)}static documentId(){return new sT(_t.keyField().canonicalString())}isEqual(e){return e=Ie(e),e instanceof ea?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{static serverTimestamp(){const e=E9();return e._methodName="FieldValue.serverTimestamp",new Za(e)}static delete(){const e=v9();return e._methodName="FieldValue.delete",new Za(e)}static arrayUnion(...e){const t=T9(...e);return t._methodName="FieldValue.arrayUnion",new Za(t)}static arrayRemove(...e){const t=w9(...e);return t._methodName="FieldValue.arrayRemove",new Za(t)}static increment(e){const t=I9(e);return t._methodName="FieldValue.increment",new Za(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P9={Firestore:FD,GeoPoint:Nm,Timestamp:vt,Blob:Fh,Transaction:qD,WriteBatch:jD,DocumentReference:vi,DocumentSnapshot:qh,Query:Pn,QueryDocumentSnapshot:jh,QuerySnapshot:hv,CollectionReference:_u,FieldPath:sT,FieldValue:Za,setLogLevel:C9,CACHE_SIZE_UNLIMITED:k3};function N9(n,e){n.INTERNAL.registerComponent(new lr("firestore-compat",t=>{const i=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(i,a)},"PUBLIC").setServiceProps(Object.assign({},P9)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x9(n){N9(n,(e,t)=>new FD(e,t,new R9)),n.registerVersion(b9,A9)}x9(Eu);const O9={apiKey:"AIzaSyAQkNySFiDExrUdIEuxAIfEMYYyZmsbTlg",authDomain:"toon-chat-a8794.firebaseapp.com",projectId:"toon-chat-a8794",storageBucket:"toon-chat-a8794.firebasestorage.app",messagingSenderId:"304902859990",appId:"1:304902859990:web:aba297d2e41161ebf66d77",measurementId:"G-T1H2429HBG"},V9=Eu.initializeApp(O9);V9.firestore();Ae.svg`
  position: relative; 
`;Ae.image`
  position: absolute;
  z-index: 2;
  x: 28%;
  y: 0%
`;Ae.image`
  position: absolute;
  z-index: 1;
  x: 32%;
  y: 10%;
`;Ae.image`
  position: absolute;
  z-index: 1;
  x: 10%;
  y: 18%;
`;Ae.image`
  position: absolute;
  z-index: 2;
  y: 41%;
`;const $D=Te.createContext(),k9=()=>Te.useContext($D),M9=({children:n})=>{const[e,t]=Te.useState([]);Te.useEffect(()=>{t([{id:1,name:"홍길동"},{id:2,name:"사용자"}])},[]);const[i,a]=Te.useState(null);return Te.useEffect(()=>{e.length>0&&!i&&a(e[0])},[e]),ot.jsx($D.Provider,{value:{userListData:e,nowuser:i,setUser:a},children:n})},KD=Ae.div`
border: 4px #444444 solid;
width: 80%;
margin-left: 8px;
margin-right: 8px;
border-radius: 4px;
display: flex;
flex-direction: column;
padding: 8px 20px 0 20px;
overflow: hidden;
`;Ae(KD)`
align-items: end;
margin-left: auto;
`;Ae(KD)`
align-items: start;
margin-right: auto;
`;Ae.div`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;

`;Ae.div`
  background: white;
  border: 2px solid #444;
  padding: 20px 40px;
  border-radius: 4px;
  font-size: 12px;

`;Ae.div`
  position: absolute;
  bottom: -5px;
  left: ${n=>n.isright?"70%":"30%"};
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 1px;
  transform: rotate(-45deg);
  border-left: 2px solid #444444;
  border-bottom: 2px solid #444444;
  z-index: 1;
`;Ae.div`
  position: absolute;
  left: -40%;
  top: -40%;
  height: 200%; 
  width: 200%;
`;Ae.div`
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
`;Ae.img`
  top: ${n=>n.$top}%;
  left: ${n=>n.$left}%;
  transform: rotate(${n=>n.$rotate}deg) scale(${n=>n.$scale});
  width: ${n=>n.$baseSize||60}px;
  opacity: 0.9;
  pointer-events: none;
  position: absolute;
`;Ae.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;const L9=Te.createContext(),U9=({children:n})=>{const[e,t]=Te.useState([]);return ot.jsx(L9.Provider,{value:{nowChat:e,setChat:t},children:n})};Ae.div`
`;Ae.div`
border: 4px #444444 solid;
width: 80%;
margin-left: 8px;
margin-right: 8px;
border-radius: 4px;
display: flex;
flex-direction: column;
padding: 8px 20px 0 20px;
overflow: hidden;
align-items: end;
margin-left: auto;
`;Ae.div`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;

`;Ae.div`
  background: white;
  border: 2px solid #444;
  padding: 20px 40px;
  border-radius: 4px;
  font-size: 12px;

`;Ae.div`
  position: absolute;
  bottom: -5px;
  left:  "70%"};
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 1px;
  transform: rotate(-45deg);
  border-left: 2px solid #444444;
  border-bottom: 2px solid #444444;
  z-index: 1;
`;Ae.div`
  position: absolute;
  left: -40%;
  top: -40%;
  height: 200%; 
  width: 200%;
`;Ae.div`
  position: relative;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;Ae.img`
  top: ${n=>n.$top}%;
  left: ${n=>n.$left}%;
  transform: rotate(${n=>n.$rotate}deg) scale(${n=>n.$scale});
  width: ${n=>n.$baseSize||60}px;
  opacity: 0.9;
  pointer-events: none;
  position: absolute;
`;Ae.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;Ae.div`
  width: 32px;
  height: 32px;
  border: solid 4px #444444;
  background: #FF9F05;
  position: absolute;
  cursor: pointer;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;Ae.div`
  height: 320px;
  position: relative;
`;Ae.div`
  position: absolute;  // 또는 원하는 색
  outline: 1px #444444 solid;
  transform-origin: left center;
  overflow: hidden;
`;Ae.div`
  position: relative;
  width: 100%;
  height: 100%;
`;Ae.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  bottom: 0;
  margin: 0 20px;
  padding: 20px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 1px rgba(153, 153, 153, 30%);
  background-color: #ffffff;

  scrollbar-width: none;        
  -ms-overflow-style: none;  
  
  &:-webkit-scrollbar {
    display: none;
  }
`;Ae.div`
position: absolute;
bottom: 0;
width: 375px;
height: 80px;
background-color: #ffffff;
border-top: #444444 solid 2px;
color: #333333;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
box-sizing: border-box;
gap : 12px;

& > img{
height: 40px;
width: 40px;
border-radius: 20px;
border: 2px #444444 solid;
}

& > button{
height: 40px;
width: 40px;
border-radius: 20px;
background-color: var(--main-color);
color: #ffffff;
font-size: 20px;
font-weight: 700;
border: 2px #444444 solid;
}
`;Ae.input`
resize: none;
background-color: #f8f8f8;
height: 40px;
border-radius: 4px;
border: 2px #444444 solid;
width: 232px;
color: #222222;
`;Ae.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: #f0f0f0;
  overflow: hidden;
`;Ae.img`
  position: absolute;
  top: ${n=>n.$top}%;
  left: ${n=>n.$left}%;
  transform: rotate(${n=>n.$rotate}deg) scale(${n=>n.$scale});
  width: ${n=>n.$baseSize||40}px;
  opacity: 0.9;
  pointer-events: none;
`;Ae.div`
top: 116px;
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
`;const B9=Ae.div`
  width: 108px;
  height: 32px;
  background-color: #FAFAFA;
  border: 2px #444444 solid;
  border-radius: 2px;
  font-weight: 700;
  color: #444444;
  font-size: 17px;
  line-height: 26px;
`,z9=Ae.div`
  position: relative;
  top: -16px;
  right: calc(-100% + 128px);
  width: 110px;
  height: 34px;
  border-radius: 2px;
  background-color: #444444;
  outline: 2px solid #444444;
  padding-right: 3px;
`;function rS(n){return ot.jsx(z9,{children:ot.jsx(B9,{children:n.title})})}Ae.div`
top: 116px;
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
`;const F9=Ae.div`
height: 80px;
background-color: #FFCD71;
`,q9=Ae.div`
margin-top: 44px;
height: 104px;

background-color: #FFF5E1;
`,j9=Ae.div`
margin-top: 52px;
height: 534px;

background-color: #FFF5E1;
`,G9=Ae.div`
  
`,H9=Ae.div`
  
`;function $9(n){return ot.jsxs(TO,{children:[ot.jsx(F9,{}),ot.jsxs(q9,{children:[ot.jsx(rS,{title:"모든 친구들"}),ot.jsx(G9,{})]}),ot.jsxs(j9,{children:[ot.jsx(rS,{title:"받은 대화함"}),ot.jsx(H9,{})]})]})}const K9=Ae.div`
display: flex;
gap : 40px;
align-items: center;
justify-content: center;
height: 100vh;
`;function Q9(n){const{userListData:e,nowuser:t,setUser:i}=k9(),a=e.map(l=>ot.jsx("li",{onClick:()=>{i(l)},children:l.name},l.id));return ot.jsxs(K9,{children:[ot.jsxs("ul",{children:[ot.jsxs("p",{children:["현재 유저 : ",t==null?void 0:t.name]}),a]}),ot.jsx(px,{children:ot.jsx(mS,{index:!0,element:ot.jsx($9,{})})})]})}const Y9=({children:n})=>ot.jsx(M9,{children:ot.jsx(U9,{children:n})});function W9(){return ot.jsx(_x,{children:ot.jsx(Y9,{children:ot.jsx(Q9,{})})})}DN.createRoot(document.getElementById("root")).render(ot.jsx(Te.StrictMode,{children:ot.jsx(W9,{})}));
