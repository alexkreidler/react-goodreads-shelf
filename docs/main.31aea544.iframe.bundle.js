(self.webpackChunkreact_goodreads_shelf=self.webpackChunkreact_goodreads_shelf||[]).push([[179],{"./dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.global-this.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.array.sort.js"),__webpack_require__("./node_modules/core-js/modules/es.string.search.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.string.link.js"),function(){var e={666:function _(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function c(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=x(i,r);if(l){if(l===m)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=s(e,t,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",m={};function v(){}function y(){}function L(){}var g={};c(g,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(T([])));w&&w!==r&&n.call(w,a)&&(g=w);var M=L.prototype=v.prototype=Object.create(g);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,i,l){var c=s(e[o],e,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function x(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,x(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function T(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:t,done:!0}}return y.prototype=L,c(M,"constructor",L),c(L,"constructor",y),y.displayName=c(L,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,L):(e.__proto__=L,c(e,l,"GeneratorFunction")),e.prototype=Object.create(M),e},e.awrap=function(e){return{__await:e}},E(k.prototype),c(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(M),c(M,l,"Generator"),c(M,a,(function(){return this})),c(M,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,_.prototype={constructor:_,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function abrupt(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function complete(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function finish(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function _catch(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};!function(){"use strict";r.r(n),r.d(n,{GoodreadsBookshelf:function GoodreadsBookshelf(){return w},default:function _default(){return M}});var e=__webpack_require__("./node_modules/react/index.js"),t=r.n(e),o=r(666),a=r.n(o),i=function i(e){var t=new URL("https://www.goodreads.com/review/list/".concat(e.userId));return t.searchParams.set("per_page",String(e.limit||10)),t.searchParams.set("shelf",e.shelf||"read"),t.searchParams.set("sort",e.sort||"date_read"),t.searchParams.set("order",e.order||"d"),e.search&&t.searchParams.set("search[query]",e.search),new URL("https://cors.kylekarpack.workers.dev/corsproxy/?apiurl=".concat(encodeURIComponent(t.toString())))},l=function l(e,t,r){var n,o,a,i,l,c,u,s,f,d=null===(n=null==e?void 0:e.querySelector("td.field.isbn .value"))||void 0===n||null===(o=n.textContent)||void 0===o?void 0:o.trim(),h=null!==(f=null===(a=null==e?void 0:e.querySelector("td.field.title a"))||void 0===a?void 0:a.getAttribute("title"))&&void 0!==f?f:"",p=null===(i=null==e?void 0:e.querySelector("td.field.author .value"))||void 0===i||null===(l=i.textContent)||void 0===l?void 0:l.trim(),m=null===(u=null===(c=null==e?void 0:e.querySelector("td.field.cover img"))||void 0===c?void 0:c.getAttribute("src"))||void 0===u?void 0:u.replace(/\._(S[Y|X]\d+_?){1,2}_/i,"._SX".concat(1.5*r,"_")),v=null===(s=null==e?void 0:e.querySelector("td.field.cover a"))||void 0===s?void 0:s.getAttribute("href");return{id:"".concat(d,"_").concat(t),isbn:d,title:h,author:p,imageUrl:m,link:"https://www.goodreads.com/".concat(v)}},c=function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:150,n=(new DOMParser).parseFromString(e,"text/html").querySelectorAll("#booksBody .bookalike");return"number"!=typeof r&&(r=100),Array.from(n).slice(0,t).map((function(e,t){return l(e,t,r)}))},u=function u(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u)};function s(e,t){(null==t||t>e.length)&&(t=e.length),t=0;for(var r=new Array(t);t<t;t++)r[t]=e[t];return r}function f(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}u.parseXmlStringToObject=function(e){var t=u.parse(e);return u.xmlToJson(t)},u.parse=function(e){return(new DOMParser).parseFromString(e,"text/xml")},u.xmlToJson=function(e){var t={};if(3===e.nodeType&&(t=e.nodeValue),e.hasChildNodes())for(var r=0;r<e.childNodes.length;r++){var n=e.childNodes.item(r),o=n.nodeName;if(void 0===t[o])t[o]=u.xmlToJson(n);else{if(void 0===t[o].push){var a=t[o];t[o]=[],t[o].push(a)}t[o].push(u.xmlToJson(n))}}for(var i in t)"string"==typeof t[i]["#text"]?t[i]=t[i]["#text"]:"string"==typeof t[i].text?t[i]=t[i].text:(delete t[i].text,delete t[i]["#text"]);for(var l in t){var c=t[l],s=Object.keys(c);"object"==typeof c&&1===s.length&&Array.isArray(c[s[0]])&&(t[l]=c[s[0]])}return t};var h=function h(){return t().createElement("div",null,t().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"100%"},viewBox:"0 0 170 250"},t().createElement("path",{style:{fill:"#ffffff",stroke:"none"},d:"M0 0L0 240L170 240L170 0L0 0z"}),t().createElement("path",{style:{fill:"#000000",stroke:"none"},d:"M82 61L83 62L82 61z"}),t().createElement("path",{style:{fill:"#808080",stroke:"none"},d:"M93 145C79.6257 141.205 63.417 138.566 51.0401 132.235C46.9518 130.144 41.5316 121.554 47.3179 118.068C50.6475 116.062 56.6487 119.038 60 120L80 125.579C83.4433 126.56 87.3543 128.206 90.9961 127.812C95.0859 127.369 97.4951 123.882 100 120.999C105.227 114.984 110.546 109.055 115.729 103C121.144 96.673 126.701 90.4409 131.981 84C134.072 81.4479 137.039 77.7432 134.957 74.3032C133.56 71.995 130.402 71.472 128 70.885C122.364 69.5077 116.654 68.419 111 67.1188C104.688 65.6674 98.3344 64.3539 92 63C89.2014 62.4019 85.8624 61.1288 83 61.9159C76.588 63.679 71.3975 72.3808 67.0355 77C63.9636 80.253 61.0812 83.6855 58.0748 87C47.4655 98.6969 26.6977 117.282 38.9699 134.907C42.2427 139.607 47.7809 141.351 53 142.975C62.2818 145.863 71.6555 148.463 81 151.141C85.2587 152.362 91.5271 155.739 95.9105 153.731C99.4375 152.115 102.007 147.89 104.414 145C109.434 138.971 114.602 133.068 119.576 127C126.295 118.802 135.654 111.058 135.454 100C135.402 97.0889 136.725 92.9476 133.685 91.0471C129.481 88.4187 126.946 93.731 126.329 97.0008C122.619 116.665 101.124 127.263 93 145z"}),t().createElement("path",{style:{fill:"#000000",stroke:"none"},d:"M85 61L86 62L85 61M112 67L113 68L112 67M117 68L118 69L117 68M72 71L73 72L72 71z"}),t().createElement("path",{style:{fill:"#555555",stroke:"none"},d:"M80 78L81 79L80 78z"}),t().createElement("path",{style:{fill:"#ffffff",stroke:"none"},d:"M77 84C83.6869 85.3802 90.3853 87.037 97 88.7315C103.67 90.4403 109.474 92.3156 113 85C105.981 83.9673 98.9214 81.7562 92 80.1157C85.4991 78.5749 80.3963 76.9541 77 84z"}),t().createElement("path",{style:{fill:"#000000",stroke:"none"},d:"M110 89L111 90L110 89M54 91L55 92L54 91z"}),t().createElement("path",{style:{fill:"#aaaaaa",stroke:"none"},d:"M122 108L123 109L122 108z"}),t().createElement("path",{style:{fill:"#000000",stroke:"none"},d:"M121 109L122 110L121 109M37 112L38 113L37 112M116 115L117 116L116 115z"}),t().createElement("path",{style:{fill:"#555555",stroke:"none"},d:"M103 116L104 117L103 116M46 117L47 118L46 117M45 118L46 119L45 118z"}),t().createElement("path",{style:{fill:"#000000",stroke:"none"},d:"M124 120L125 121L124 120M69 122L70 123L69 122M37 132L38 133L37 132M50 132L51 133L50 132M42 138L43 139L42 138M109 138L110 139L109 138z"}),t().createElement("path",{style:{fill:"#555555",stroke:"none"},d:"M87 143L88 144L87 143z"}),t().createElement("path",{style:{fill:"#000000",stroke:"none"},d:"M99 150L100 151L99 150M82 151L83 152L82 151z"})))};function p(e,t){(null==t||t>e.length)&&(t=e.length),t=0;for(var r=new Array(t);t<t;t++)r[t]=e[t];return r}var m={textAlign:"left",marginBottom:"1vw"},v={width:"100%"},y=function y(r){var n,a=r.book,i=(2,function(e){if(Array.isArray(e))return e}(n=(0,e.useState)({error:!1}))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),2!==a.length);i=!0);}catch(e){l=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw n}}return a}}(n)||function(e,t){if(e){if("string"==typeof e)return p(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,2)}}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],c=i[1];return a?t().createElement("div",{style:m,title:a.title},t().createElement("a",{href:a.link,target:"_blank"},l.error?t().createElement("div",{"data-testid":"placeholder"},t().createElement(h,null)):t().createElement("img",{alt:a.title,style:v,src:a.imageUrl,onError:function onError(){return c({error:!0})}}))):null},L=function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:150;return{display:"grid",gridTemplateColumns:"repeat(auto-fill, ".concat(e,"px)"),justifyContent:"space-around",alignItems:"center",gridColumnGap:"0.5rem",gridRowGap:"0.5rem"}},g=function g(e){var r=e.books,n=e.bookWidth;return t().createElement("div",{style:L(n)},r.map((function(e){return t().createElement(y,{key:e.id,book:e})})))},b=function b(){return t().createElement("div",{style:{textAlign:"center"}},t().createElement("svg",{width:50,height:50,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},t().createElement("path",{d:"M20 25h60v50H20z",fill:"#fdfdfd",stroke:"#85a2b6"}),t().createElement("path",{d:"M50 25l9.421-3.43v56.86L50 75",fill:"#fdfdfd",stroke:"#85a2b6"},t().createElement("animate",{attributeName:"d",calcMode:"linear",values:"M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75",keyTimes:"0;0.5;0.501;1",dur:1.6,begin:"0s",repeatCount:"indefinite"}),t().createElement("animate",{attributeName:"opacity",calcMode:"linear",values:"1;1;0;0",keyTimes:"0;0.5;0.5001;1",dur:1.6,begin:"0s",repeatCount:"indefinite"})),t().createElement("path",{d:"M50 25h30v50H50",fill:"#fdfdfd",stroke:"#85a2b6"},t().createElement("animate",{attributeName:"d",calcMode:"linear",values:"M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75",keyTimes:"0;0.5;0.501;1",dur:1.6,begin:"-0.2656s",repeatCount:"indefinite"}),t().createElement("animate",{attributeName:"opacity",calcMode:"linear",values:"1;1;0;0",keyTimes:"0;0.5;0.5001;1",dur:1.6,begin:"-0.2656s",repeatCount:"indefinite"})),t().createElement("path",{d:"M50 25h30v50H50",fill:"#fdfdfd",stroke:"#85a2b6"},t().createElement("animate",{attributeName:"d",calcMode:"linear",values:"M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75",keyTimes:"0;0.5;0.501;1",dur:1.6,begin:"-0.528s",repeatCount:"indefinite"}),t().createElement("animate",{attributeName:"opacity",calcMode:"linear",values:"1;1;0;0",keyTimes:"0;0.5;0.5001;1",dur:1.6,begin:"-0.528s",repeatCount:"indefinite"})),t().createElement("path",{d:"M50 25l-10.379-3.27v56.54L50 75",fill:"#fdfdfd",stroke:"#85a2b6"},t().createElement("animate",{attributeName:"d",calcMode:"linear",values:"M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75",keyTimes:"0;0.499;0.5;1",dur:1.6,begin:"-0.528s",repeatCount:"indefinite"}),t().createElement("animate",{attributeName:"opacity",calcMode:"linear",values:"0;0;1;1",keyTimes:"0;0.4999;0.5;1",dur:1.6,begin:"-0.528s",repeatCount:"indefinite"})),t().createElement("path",{d:"M50 25l-.539-4.91v59.82L50 75",fill:"#fdfdfd",stroke:"#85a2b6"},t().createElement("animate",{attributeName:"d",calcMode:"linear",values:"M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75",keyTimes:"0;0.499;0.5;1",dur:1.6,begin:"-0.2656s",repeatCount:"indefinite"}),t().createElement("animate",{attributeName:"opacity",calcMode:"linear",values:"0;0;1;1",keyTimes:"0;0.4999;0.5;1",dur:1.6,begin:"-0.2656s",repeatCount:"indefinite"})),t().createElement("path",{d:"M50 25H20v50h30",fill:"#fdfdfd",stroke:"#85a2b6"},t().createElement("animate",{attributeName:"d",calcMode:"linear",values:"M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75",keyTimes:"0;0.499;0.5;1",dur:1.6,begin:"0s",repeatCount:"indefinite"}),t().createElement("animate",{attributeName:"opacity",calcMode:"linear",values:"0;0;1;1",keyTimes:"0;0.4999;0.5;1",dur:1.6,begin:"0s",repeatCount:"indefinite"}))))},w=function w(r){var n=function(t){var r=t.userId,n=t.limit,o=t.order,l=t.search,u=t.shelf,s=t.sort,h=t.width,p=d((0,e.useState)([]),2),m=p[0],v=p[1],y=d((0,e.useState)(!1),2),L=y[0],g=y[1],b=d((0,e.useState)(null),2),w=b[0],M=b[1],E=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){f(a,n,o,i,l,"next",e)}function l(e){f(e,n,o,i,l,"throw",e)}i(void 0)}))}}(a().mark((function e(){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),M(null),r=i(t),e.next=6,fetch(r.toString());case 6:return o=e.sent,e.next=9,o.text();case 9:v(c(e.sent,n,h)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),M(e.t0);case 17:return e.prev=17,g(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})));return(0,e.useEffect)((function(){r&&E()}),[r,n,o,l,u,s]),{books:m,loading:L,error:w}}(r),o=n.books,l=n.loading,u=n.error;return t().createElement("div",{className:"goodreads-shelf"},l?t().createElement(b,null):t().createElement(g,{books:o,bookWidth:r.width}),u&&t().createElement("div",null,"Sorry, we couldn't load books right now"))},M=w}();var o=exports;for(var a in n)o[a]=n[a];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})}()},"./generated-stories-entry.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$")],module,!1)},"./stories/0-GoodreadsBookshelf.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Story:()=>Story});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _dist_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/index.js"),_dist_index__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_dist_index__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React from "react";\nimport GoodreadsBookshelf from "../dist/index";\n\nconst sorts = [\n  "title",\n  "author",\n  "cover",\n  "rating",\n  "year_pub",\n  "date_pub",\n  "date_pub_edition",\n  "date_started",\n  "date_read",\n  "date_updated",\n  "date_added",\n  "recommender",\n  "avg_rating",\n  "num_ratings",\n  "review",\n  "read_count",\n  "votes",\n  "random",\n  "comments",\n  "notes",\n  "isbn",\n  "isbn13",\n  "asin",\n  "num_pages",\n  "format",\n  "position",\n  "shelves",\n  "owned",\n  "date_purchased",\n  "purchase_location",\n  "condition"\n];\n\nconst shelves = ["read", "currently-reading", "to-read"];\n\nexport default {\n  title: "GoodreadsBookshelf",\n  component: GoodreadsBookshelf,\n  argTypes: {\n    userId: {\n      name: "User ID",\n      defaultValue: "63515611",\n      control: {\n        type: "text"\n      }\n    },\n    width: {\n      name: "Book Width",\n      defaultValue: 100,\n      control: {\n        type: "number",\n        min: 25,\n        max: 250\n      }\n    },\n    // details: {\n    // \tname: "Details",\n    // \tdefaultValue: false,\n    // \tcontrol: {\n    // \t\ttype: "boolean",\n    // \t},\n    // },\n    limit: {\n      name: "Number of Books",\n      defaultValue: 12,\n      control: {\n        type: "number",\n        min: 1,\n        max: 50\n      }\n    },\n    shelf: {\n      name: "Shelf Name",\n      defaultValue: "read",\n      control: {\n        type: "select",\n        options: shelves\n      }\n    },\n    sort: {\n      name: "Sort Field",\n      defaultValue: "date_read",\n      control: {\n        type: "select",\n        options: sorts\n      }\n    },\n    order: {\n      name: "Order",\n      defaultValue: "d",\n      control: {\n        type: "inline-radio",\n        options: ["a", "d"]\n      }\n    },\n    search: {\n      name: "Search Text",\n      defaultValue: "",\n      control: {\n        type: "text"\n      }\n    }\n  }\n};\n\nexport const Story = (args) => <GoodreadsBookshelf {...args} />;\n',locationsMap:{story:{startLoc:{col:21,line:110},endLoc:{col:63,line:110},startBody:{col:21,line:110},endBody:{col:63,line:110}}}}},title:"GoodreadsBookshelf",component:_dist_index__WEBPACK_IMPORTED_MODULE_2___default(),argTypes:{userId:{name:"User ID",defaultValue:"63515611",control:{type:"text"}},width:{name:"Book Width",defaultValue:100,control:{type:"number",min:25,max:250}},limit:{name:"Number of Books",defaultValue:12,control:{type:"number",min:1,max:50}},shelf:{name:"Shelf Name",defaultValue:"read",control:{type:"select",options:["read","currently-reading","to-read"]}},sort:{name:"Sort Field",defaultValue:"date_read",control:{type:"select",options:["title","author","cover","rating","year_pub","date_pub","date_pub_edition","date_started","date_read","date_updated","date_added","recommender","avg_rating","num_ratings","review","read_count","votes","random","comments","notes","isbn","isbn13","asin","num_pages","format","position","shelves","owned","date_purchased","purchase_location","condition"]}},order:{name:"Order",defaultValue:"d",control:{type:"inline-radio",options:["a","d"]}},search:{name:"Search Text",defaultValue:"",control:{type:"text"}}}};var Story=function Story(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dist_index__WEBPACK_IMPORTED_MODULE_2___default(),Object.assign({},args))};Story.displayName="Story",Story.__docgenInfo={description:"",methods:[],displayName:"Story"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-GoodreadsBookshelf.stories.js"]={name:"Story",docgenInfo:Story.__docgenInfo,path:"stories/0-GoodreadsBookshelf.stories.js"})},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./0-GoodreadsBookshelf.stories.js":"./stories/0-GoodreadsBookshelf.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$"},"?4f7e":()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[339],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js"))));__webpack_require__.O()}]);