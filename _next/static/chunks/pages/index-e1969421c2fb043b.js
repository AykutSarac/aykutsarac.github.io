(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},7942:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(4957),s=n(9898),l=n(639);var u={};function c(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),d=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):s||a}}),[o,e.href,e.as]),f=d.href,p=d.as,m=e.children,h=e.replace,y=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var b=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,w=l.useIntersection({rootMargin:"200px"}),x=r(w,2),_=x[0],j=x[1],O=a.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);a.default.useEffect((function(){var e=j&&n&&i.isLocalURL(f),t="undefined"!==typeof g?g:o&&o.locale,r=u[f+"%"+p+(t?"%"+t:"")];e&&!r&&c(o,f,p,{locale:t})}),[p,f,j,g,n,o]);var k={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:s}))}(e,o,f,p,h,y,v,g)},onMouseEnter:function(e){i.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c(o,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof g?g:o&&o.locale,C=o&&o.isLocaleDomain&&i.getDomainLocale(p,P,o&&o.locales,o&&o.domainLocales);k.href=C||i.addBasePath(i.addLocale(p,P,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},639:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=o.useRef(),u=o.useState(!1),c=r(u,2),d=c[0],f=c[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return o.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[p,d]};var o=n(7294),a=n(6286),i="undefined"!==typeof IntersectionObserver;var s=new Map},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},3579:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a(a({},r),e));var o=r=a(a({},r),t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return n(o);r.loadableGenerated&&delete(r=a(a({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(n,r);delete r.ssr}return n(r)};s(n(7294));var i=s(n(3668));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},2717:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(a=n(1585))&&a.__esModule?a:{default:a},l=n(8e3),u=n(5850),c=n(5646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,u=p.length;l<u;l++){var c=p[l];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var d=o.props[c],f=r[c]||new Set;"name"===c&&i||!f.has(d)?(f.add(d),r[c]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,n=i.useContext(l.AmpStateContext),r=i.useContext(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:c.isInAmpMode(n)},t)};t.default=h},3982:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},3668:function(e,t,n){"use strict";var r=n(4575),o=n(3913),a=n(9713);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,d=(c=n(7294))&&c.__esModule?c:{default:c},f=n(7161),p=n(3982);var m=[],h=[],y=!1;function v(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var g=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function b(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=d.default.lazy(n.loader));var r=null;function o(){if(!r){var t=new g(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!y&&"function"===typeof n.webpack&&!n.suspense){var a=n.webpack();h.push((function(e){var t,n=l(a);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=n.suspense?function(e,t){return d.default.createElement(n.lazy,s(s({},e),{},{ref:t}))}:function(e,t){o();var a=d.default.useContext(p.LoadableContext),i=f.useSubscription(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return!n.suspense&&o()},i.displayName="LoadableComponent",d.default.forwardRef(i)}(v,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){w(m).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return y=!0,t()};w(h,e).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var x=b;t.default=x},1585:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),s=n(8585),l=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(c.Component);t.default=d},2824:function(e,t,n){"use strict";n(7294);var r=n(7379),o=n(5893),a=r.ZP.div.withConfig({displayName:"Container__StyledContainer",componentId:"sc-g0riw6-0"})(["width:100%;overflow:hidden;padding:16px 0;"]);t.Z=function(e){var t=e.children,n=e.className;return(0,o.jsx)(a,{className:n,children:t})}},7987:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(2824),o=(n(7294),n(7379)),a=n(1664),i=n(9583),s=n(5893),l=o.ZP.div.withConfig({displayName:"ContactItems__StyledContactWrapper",componentId:"sc-o2ihi2-0"})(["display:flex;width:100%;align-items:center;gap:16px;@media only screen and (min-width:768px){margin:0 auto;width:75%;}"]),u=o.ZP.a.withConfig({displayName:"ContactItems__StyledContactItem",componentId:"sc-o2ihi2-1"})(["color:",";opacity:0.5;"],(function(e){return e.theme.lightblue})),c=function(e){var t=e.children,n=e.href;return(0,s.jsx)(a.default,{href:n,passHref:!0,children:(0,s.jsx)(u,{target:"_blank",rel:"noopener",children:t})})},d=function(){return(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{href:"https://github.com/AykutSarac",children:(0,s.jsx)(i.hJX,{})}),(0,s.jsx)(c,{href:"https://aykutsarac.medium.com/",children:(0,s.jsx)(i.Vlo,{})}),(0,s.jsx)(c,{href:"https://twitter.com/aykutsarach",children:(0,s.jsx)(i.fWC,{})}),(0,s.jsx)(c,{href:"https://www.linkedin.com/in/aykutsarac/",children:(0,s.jsx)(i.ltd,{})})]})},f=(0,o.ZP)(r.Z).withConfig({displayName:"Contact__StyledContainer",componentId:"sc-n5t0o4-0"})(["display:flex;flex-direction:column;gap:10px;padding:16px 32px 32px;background:",";font-size:28px;margin:80px auto 0;"],(function(e){return e.theme.transparent})),p=o.ZP.span.withConfig({displayName:"Contact__StyledTitle",componentId:"sc-n5t0o4-1"})(["color:",";opacity:0.5;font-size:14px;margin:16px 0 0;@media only screen and (min-width:768px){margin:16px auto 0;width:75%;}"],(function(e){return e.theme.lightblue})),m=function(e){var t=e.className;return(0,s.jsxs)(f,{className:t,children:[(0,s.jsx)(p,{children:"Find Me @"}),(0,s.jsx)(d,{})]})}},3266:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return P}});n(7294);var r=n(9008),o=n(5152),a=n(2824),i=n(7379),s=n(5893),l=(0,i.ZP)(a.Z).withConfig({displayName:"Introduction__StyledContainer",componentId:"sc-x427uf-0"})(["text-align:center;margin-top:50px;opacity:1;transition:opacity 1s;padding:32px;@media only screen and (min-width:768px){grid-area:c;width:75%;margin:0 auto;}"]),u=function(){return(0,s.jsx)(l,{children:"I'm a passionate software developer who derives pleasure from solving problems, a self-learner with the ability to adapt new environments quickly and pleased in gaining new experiences while developing robust code for next-generation applications."})},c=n(7987),d=(0,i.F4)(["0%{opacity:0;transform:translateY(-100%);}100%{opacity:1;}"]),f=i.ZP.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1fljk97-0"})(['@media only screen and (min-width:1024px){display:grid;grid-template-areas:"a b" "c d";grid-template-rows:1fr;grid-template-columns:4fr 2fr;width:75%;margin:80px auto 20px;padding:0 32px;}']),p=i.ZP.h1.withConfig({displayName:"Header__StyledHeading",componentId:"sc-1fljk97-1"})(["position:relative;color:",';margin:10px 0 0;width:fit-content;::before{position:absolute;content:"Hi, I\'m Aykut"; left: 0; transform: translate(1px, 1px); color: ',"; }"],(function(e){return e.theme.mainColor}),(function(e){return e.theme.main})),m=i.ZP.h2.withConfig({displayName:"Header__StyledSubHeading",componentId:"sc-1fljk97-2"})(["position:relative;color:",";margin:10px 0 0;opacity:0;animation:",' 1.5s 0.5s forwards;::before{position:absolute;bottom:0;left:0;border-radius:20px;content:"";height:30px;width:100%;transform:translateY(100%);background-image:url("underline.svg");background-repeat:no-repeat;}'],(function(e){return e.theme.mainColor}),d),h=i.ZP.div.withConfig({displayName:"Header__StyledImageWrapper",componentId:"sc-1fljk97-3"})(["position:relative;margin:30px auto;width:120px;height:120px;@media only screen and (min-width:768px){grid-area:b;width:180px;height:180px;}"]),y=i.ZP.img.withConfig({displayName:"Header__StyledImage",componentId:"sc-1fljk97-4"})(["width:100%;height:100%;border-radius:50%;object-fit:cover;"]),v=i.ZP.div.withConfig({displayName:"Header__StyledProfileSection",componentId:"sc-1fljk97-5"})(["grid-area:a;display:flex;justify-content:center;align-items:center;text-align:center;flex-direction:column;"]),g=(0,i.ZP)(c.default).withConfig({displayName:"Header__StyledContact",componentId:"sc-1fljk97-6"})(["position:relative;margin:0 auto;width:100%;justify-content:center;align-items:center;text-align:center;padding:32px 0;overflow:visible;background:none;& > div{justify-content:center;}@media only screen and (min-width:768px){padding:16px 0;}"]),b=function(){return(0,s.jsxs)(f,{children:[(0,s.jsx)(h,{children:(0,s.jsx)(y,{src:"/avatar.png",alt:"aykut"})}),(0,s.jsxs)(v,{children:[(0,s.jsx)(p,{children:"Hi, I'm Aykut"}),(0,s.jsx)(m,{children:"Software Engineer."})]}),(0,s.jsx)(u,{}),(0,s.jsx)(g,{})]})},w=(0,o.default)((function(){return n.e(990).then(n.bind(n,2990))}),{loadableGenerated:{webpack:function(){return[2990]},modules:["index.tsx -> containers/Blog"]}}),x=(0,o.default)((function(){return n.e(230).then(n.bind(n,8230))}),{loadableGenerated:{webpack:function(){return[8230]},modules:["index.tsx -> containers/Projects"]}}),_=(0,o.default)((function(){return Promise.all([n.e(415),n.e(909)]).then(n.bind(n,4909))}),{loadableGenerated:{webpack:function(){return[4909]},modules:["index.tsx -> containers/Skills"]}}),j=(0,o.default)((function(){return Promise.resolve().then(n.bind(n,7987))}),{loadableGenerated:{webpack:function(){return[7987]},modules:["index.tsx -> containers/Contact"]}}),O=(0,i.ZP)(a.Z).withConfig({displayName:"pages__StyledContainer",componentId:"sc-1hdegcc-0"})(["padding:60px 0 0;"]),k=!0,P=function(e){var t=e.repos,n=e.blogPosts;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"Aykut Sara\xe7"}),(0,s.jsx)("meta",{name:"description",content:"I'm a passionate software developer who derives pleasure from solving problems, a self-learner with the ability to adapt new environments quickly and pleased in gaining new experiences while developing robust code for next-generation applications."}),(0,s.jsx)("meta",{name:"image",content:"https://aykutsarac.github.io/favicon.ico"}),(0,s.jsx)("meta",{itemProp:"name",content:"Aykut Sara\xe7"}),(0,s.jsx)("meta",{itemProp:"description",content:"I'm a passionate software developer who derives pleasure from solving problems, a self-learner with the ability to adapt new environments quickly and pleased in gaining new experiences while developing robust code for next-generation applications."}),(0,s.jsx)("meta",{itemProp:"image",content:"https://aykutsarac.github.io/favicon.ico"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,s.jsx)("meta",{name:"twitter:title",content:"Aykut Sara\xe7"}),(0,s.jsx)("meta",{name:"twitter:description",content:"I'm a passionate software developer who derives pleasure from solving problems, a self-learner with the ability to adapt new environments quickly and pleased in gaining new experiences while developing robust code for next-generation applications."}),(0,s.jsx)("meta",{name:"og:title",content:"Aykut Sara\xe7"}),(0,s.jsx)("meta",{name:"og:description",content:"I'm a passionate software developer who derives pleasure from solving problems, a self-learner with the ability to adapt new environments quickly and pleased in gaining new experiences while developing robust code for next-generation applications."}),(0,s.jsx)("meta",{name:"og:type",content:"website"})]}),(0,s.jsxs)(O,{children:[(0,s.jsx)(b,{}),(0,s.jsx)(x,{repos:t}),(0,s.jsx)(_,{}),(0,s.jsx)(w,{posts:n}),(0,s.jsx)(j,{})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3266)}])},5152:function(e,t,n){e.exports=n(3579)},9008:function(e,t,n){e.exports=n(2717)},1664:function(e,t,n){e.exports=n(7942)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(c,i({attr:i({},e.attr)},t),l(e.child))}}function c(e){var t=function(t){var n,o=e.attr,a=e.size,l=e.title,u=s(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}},function(e){e.O(0,[774,445,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);