(()=>{var __webpack_modules__={10:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval("Promise.all(/* import() */[__webpack_require__.e(316), __webpack_require__.e(927), __webpack_require__.e(217), __webpack_require__.e(535), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 77));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbWljcm8tc25ha2UvcGx1Z2luLWZydWl0Ly4vaW5kZXguanM/NGE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQoJy4vYm9vdHN0cmFwJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n")},537:(e,_,r)=>{"use strict";var a=new Error;e.exports=new Promise(((e,_)=>{if("undefined"!=typeof engine)return e();r.l("https://firstwhack.github.io/a-game-of-micro-frontends/store/remoteEntry.js",(r=>{if("undefined"!=typeof engine)return e();var t=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading script failed.\n("+t+": "+i+")",a.name="ScriptExternalLoadError",a.type=t,a.request=i,_(a)}),"engine")})).then((()=>engine))}},__webpack_module_cache__={},leafPrototypes,getProto,inProgress,dataWebpackPrefix,chunkMapping,idToExternalAndNameMapping;function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(_,{a:_}),_},getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,_){if(1&_&&(e=this(e)),8&_)return e;if("object"==typeof e&&e){if(4&_&&e.__esModule)return e;if(16&_&&"function"==typeof e.then)return e}var r=Object.create(null);__webpack_require__.r(r);var a={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var t=2&_&&e;"object"==typeof t&&!~leafPrototypes.indexOf(t);t=getProto(t))Object.getOwnPropertyNames(t).forEach((_=>a[_]=()=>e[_]));return a.default=()=>e,__webpack_require__.d(r,a),r},__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((_,r)=>(__webpack_require__.f[r](e,_),_)),[])),__webpack_require__.u=e=>e+".js",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),inProgress={},dataWebpackPrefix="@micro-snake/plugin-fruit:",__webpack_require__.l=(e,_,r,a)=>{if(inProgress[e])inProgress[e].push(_);else{var t,i;if(void 0!==r)for(var n=document.getElementsByTagName("script"),u=0;u<n.length;u++){var o=n[u];if(o.getAttribute("src")==e||o.getAttribute("data-webpack")==dataWebpackPrefix+r){t=o;break}}t||(i=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,__webpack_require__.nc&&t.setAttribute("nonce",__webpack_require__.nc),t.setAttribute("data-webpack",dataWebpackPrefix+r),t.src=e),inProgress[e]=[_];var p=(_,r)=>{t.onerror=t.onload=null,clearTimeout(c);var a=inProgress[e];if(delete inProgress[e],t.parentNode&&t.parentNode.removeChild(t),a&&a.forEach((e=>e(r))),_)return _(r)},c=setTimeout(p.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=p.bind(null,t.onerror),t.onload=p.bind(null,t.onload),i&&document.head.appendChild(t)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),chunkMapping={700:[700]},idToExternalAndNameMapping={700:["default","./Store",537]},__webpack_require__.f.remotes=(e,_)=>{__webpack_require__.o(chunkMapping,e)&&chunkMapping[e].forEach((e=>{var r=__webpack_require__.R;r||(r=[]);var a=idToExternalAndNameMapping[e];if(!(r.indexOf(a)>=0)){if(r.push(a),a.p)return _.push(a.p);var t=_=>{_||(_=new Error("Container missing")),"string"==typeof _.message&&(_.message+='\nwhile loading "'+a[1]+'" from '+a[2]),__webpack_require__.m[e]=()=>{throw _},a.p=0},i=(e,r,i,n,u,o)=>{try{var p=e(r,i);if(!p||!p.then)return u(p,n,o);var c=p.then((e=>u(e,n)),t);if(!o)return c;_.push(a.p=c)}catch(e){t(e)}},n=(e,_,t)=>i(_.get,a[1],r,0,u,t),u=_=>{a.p=1,__webpack_require__.m[e]=e=>{e.exports=_()}};i(__webpack_require__,a[2],0,0,((e,_,r)=>e?i(__webpack_require__.I,a[0],0,e,n,r):t()),1)}}))},(()=>{__webpack_require__.S={};var e={},_={};__webpack_require__.I=(r,a)=>{a||(a=[]);var t=_[r];if(t||(t=_[r]={}),!(a.indexOf(t)>=0)){if(a.push(t),e[r])return e[r];__webpack_require__.o(__webpack_require__.S,r)||(__webpack_require__.S[r]={});var i=__webpack_require__.S[r],n="@micro-snake/plugin-fruit",u=(e,_,r,a)=>{var t=i[e]=i[e]||{},u=t[_];(!u||!u.loaded&&(!a!=!u.eager?a:n>u.from))&&(t[_]={get:r,from:n,eager:!!a})},o=[];return"default"===r&&(u("konva","8.3.4",(()=>Promise.all([__webpack_require__.e(276),__webpack_require__.e(969)]).then((()=>()=>__webpack_require__(969))))),u("mobx-react","7.2.1",(()=>Promise.all([__webpack_require__.e(316),__webpack_require__.e(925),__webpack_require__.e(927),__webpack_require__.e(217)]).then((()=>()=>__webpack_require__(925))))),u("mobx","6.3.13",(()=>__webpack_require__.e(75).then((()=>()=>__webpack_require__(75))))),u("react-konva","17.0.2-5",(()=>Promise.all([__webpack_require__.e(276),__webpack_require__.e(83),__webpack_require__.e(927),__webpack_require__.e(565)]).then((()=>()=>__webpack_require__(83))))),u("react","17.0.2",(()=>__webpack_require__.e(784).then((()=>()=>__webpack_require__(784))))),(e=>{var _=e=>{return _="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(_);var _};try{var t=__webpack_require__(537);if(!t)return;var i=e=>e&&e.init&&e.init(__webpack_require__.S[r],a);if(t.then)return o.push(t.then(i,_));var n=i(t);n&&n.then&&o.push(n.catch(_))}catch(e){_(e)}})()),o.length?e[r]=Promise.all(o).then((()=>e[r]=1)):e[r]=1}}})(),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var _=__webpack_require__.g.document;if(!e&&_&&(_.currentScript&&(e=_.currentScript.src),!e)){var r=_.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e=e=>{var _=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?_(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,_(r[2]))),r[3]&&(a.push([]),a.push.apply(a,_(r[3]))),a},_=e=>{var r=e[0],a="";if(1===e.length)return"*";if(r+.5){a+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var t=1,i=1;i<e.length;i++)t--,a+="u"==(typeof(u=e[i]))[0]?"-":(t>0?".":"")+(t=2,u);return a}var n=[];for(i=1;i<e.length;i++){var u=e[i];n.push(0===u?"not("+o()+")":1===u?"("+o()+" || "+o()+")":2===u?n.pop()+" "+n.pop():_(u))}return o();function o(){return n.pop().replace(/^\((.+)\)$/,"$1")}},r=(_,a)=>{if(0 in _){a=e(a);var t=_[0],i=t<0;i&&(t=-t-1);for(var n=0,u=1,o=!0;;u++,n++){var p,c,b=u<_.length?(typeof _[u])[0]:"";if(n>=a.length||"o"==(c=(typeof(p=a[n]))[0]))return!o||("u"==b?u>t&&!i:""==b!=i);if("u"==c){if(!o||"u"!=b)return!1}else if(o)if(b==c)if(u<=t){if(p!=_[u])return!1}else{if(i?p>_[u]:p<_[u])return!1;p!=_[u]&&(o=!1)}else if("s"!=b&&"n"!=b){if(i||u<=t)return!1;o=!1,u--}else{if(u<=t||c<b!=i)return!1;o=!1}else"s"!=b&&"n"!=b&&(o=!1,u--)}}var l=[],s=l.pop.bind(l);for(n=1;n<_.length;n++){var k=_[n];l.push(1==k?s()|s():2==k?s()&s():k?r(k,a):!s())}return!!s()},a=(_,r)=>{var a=_[r];return Object.keys(a).reduce(((_,r)=>!_||!a[_].loaded&&((_,r)=>{_=e(_),r=e(r);for(var a=0;;){if(a>=_.length)return a<r.length&&"u"!=(typeof r[a])[0];var t=_[a],i=(typeof t)[0];if(a>=r.length)return"u"==i;var n=r[a],u=(typeof n)[0];if(i!=u)return"o"==i&&"n"==u||"s"==u||"u"==i;if("o"!=i&&"u"!=i&&t!=n)return t<n;a++}})(_,r)?r:_),0)},t=(e,t,n,u)=>{var o=a(e,n);return r(u,o)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,a,t)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+_(t)+")")(e,n,o,u)),i(e[n][o])},i=e=>(e.loaded=1,e.get()),n=(e=>function(_,r,a,t){var i=__webpack_require__.I(_);return i&&i.then?i.then(e.bind(e,_,__webpack_require__.S[_],r,a,t)):e(_,__webpack_require__.S[_],r,a,t)})(((e,_,r,a,i)=>_&&__webpack_require__.o(_,r)?t(_,0,r,a):i())),u={},o={927:()=>n("default","react",[1,17,0,2],(()=>__webpack_require__.e(784).then((()=>()=>__webpack_require__(784))))),217:()=>n("default","mobx",[1,6,3,13],(()=>__webpack_require__.e(75).then((()=>()=>__webpack_require__(75))))),189:()=>n("default","mobx-react",[1,7,2,1],(()=>Promise.all([__webpack_require__.e(316),__webpack_require__.e(925)]).then((()=>()=>__webpack_require__(925))))),641:()=>n("default","react-konva",[1,17,0,2,,5],(()=>Promise.all([__webpack_require__.e(276),__webpack_require__.e(83),__webpack_require__.e(565)]).then((()=>()=>__webpack_require__(83))))),565:()=>n("default","konva",[1,8,3,4],(()=>__webpack_require__.e(969).then((()=>()=>__webpack_require__(969)))))},p={217:[217],535:[189,641],565:[565],927:[927]};__webpack_require__.f.consumes=(e,_)=>{__webpack_require__.o(p,e)&&p[e].forEach((e=>{if(__webpack_require__.o(u,e))return _.push(u[e]);var r=_=>{u[e]=0,__webpack_require__.m[e]=r=>{delete __webpack_require__.c[e],r.exports=_()}},a=_=>{delete u[e],__webpack_require__.m[e]=r=>{throw delete __webpack_require__.c[e],_}};try{var t=o[e]();t.then?_.push(u[e]=t.then(r).catch(a)):r(t)}catch(e){a(e)}}))}})(),(()=>{var e={179:0};__webpack_require__.f.j=(_,r)=>{var a=__webpack_require__.o(e,_)?e[_]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(217|535|565|700|927)$/.test(_))e[_]=0;else{var t=new Promise(((r,t)=>a=e[_]=[r,t]));r.push(a[2]=t);var i=__webpack_require__.p+__webpack_require__.u(_),n=new Error;__webpack_require__.l(i,(r=>{if(__webpack_require__.o(e,_)&&(0!==(a=e[_])&&(e[_]=void 0),a)){var t=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;n.message="Loading chunk "+_+" failed.\n("+t+": "+i+")",n.name="ChunkLoadError",n.type=t,n.request=i,a[1](n)}}),"chunk-"+_,_)}};var _=(_,r)=>{var a,t,[i,n,u]=r,o=0;if(i.some((_=>0!==e[_]))){for(a in n)__webpack_require__.o(n,a)&&(__webpack_require__.m[a]=n[a]);u&&u(__webpack_require__)}for(_&&_(r);o<i.length;o++)t=i[o],__webpack_require__.o(e,t)&&e[t]&&e[t][0](),e[t]=0},r=self.webpackChunk_micro_snake_plugin_fruit=self.webpackChunk_micro_snake_plugin_fruit||[];r.forEach(_.bind(null,0)),r.push=_.bind(null,r.push.bind(r))})();var __webpack_exports__=__webpack_require__(10)})();