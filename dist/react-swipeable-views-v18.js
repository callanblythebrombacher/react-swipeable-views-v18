!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define("react-swipeable-views-v18",["react"],e):"object"==typeof exports?exports["react-swipeable-views-v18"]=e(require("react")):n["react-swipeable-views-v18"]=e(n.React)}("undefined"!=typeof self?self:this,(n=>(()=>{"use strict";var e={658:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'.swipeable-container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    cursor: grab;\n}\n\n.swipeable-container:active {\n    cursor: grabbing;\n}\n\n.slider-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n.slide {\n    flex-shrink: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.pagination {\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n}\n\n.dot {\n    width: 12px;\n    height: 12px;\n    margin: 0 4px;\n    border-radius: 50%;\n    background-color: #ccc;\n    cursor: pointer;\n}\n\n.dot.active {\n    background-color: #333;\n}\n\n.buttons-container{\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n}\n\n.buttons-container > button {\n    margin: 0 10px;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    background-color: #ccc;\n    cursor: pointer;\n}\n.buttons-container > button:hover {\n    transition-duration: 0.1s;\n    background-color: #3A3A3A;\n}\n\n.buttons-container > .button:after {\n    content: "";\n    display: block;\n    position: absolute;\n    border-radius: 4em;\n    left: 0;\n    top:0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    transition: all 0.5s;\n    box-shadow: 0 0 10px 40px white;\n}\n\n.buttons-container > .button:active:after {\n    box-shadow: 0 0 0 0 white;\n    position: absolute;\n    border-radius: 4em;\n    left: 0;\n    top:0;\n    opacity: 1;\n    transition: 0s;\n}\n\n.buttons-container > .button:active {\n    top: 1px;\n}\n\n.buttons-container > button:active {\n\n}\n.buttons-container > button:disabled{\n    background-color: #000000 !important;\n    cursor: not-allowed !important;\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var u=n[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var f=t(d),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var v=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var u=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=u}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},787:e=>{e.exports=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.nc=void 0;var o={};return(()=>{r.r(o),r.d(o,{SwipeableViews:()=>x});var n=r(787),e=r.n(n),t=r(379),a=r.n(t),i=r(795),c=r.n(i),u=r(569),s=r.n(u),l=r(565),d=r.n(l),f=r(216),p=r.n(f),v=r(589),b=r.n(v),h=r(658),m={};function y(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,c=[],u=!0,s=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=a.call(t)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(n){s=!0,o=n}finally{try{if(!u&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(n,e)||function(n,e){if(n){if("string"==typeof n)return w(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}m.styleTagTransform=b(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=p(),a()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var g=(0,n.forwardRef)((function(t,r){var o=y((0,n.useState)(0),2),a=o[0],i=o[1],c=y((0,n.useState)(0),2),u=c[0],s=c[1],l=y((0,n.useState)(t.autoSwipe),2),d=l[0],f=l[1],p=(0,n.useRef)(null),v=t.swipeThreshold||50,b=function(){var n=a+1;n>=e().Children.count(t.children)&&t.loop?i(0):n<e().Children.count(t.children)&&i(n)},h=function(){var n=a-1;n<0&&(n=e().Children.count(t.children)-1),i(n)},m=function(){p.current&&(p.current.style.transform="translateX(-".concat(100*a,"%)"))},w=function(){return d&&setTimeout((function(){b()}),t.autoSwipeInterval),null};e().useEffect((function(){a<=e().Children.count(t.children)&&w()}),[a]),(0,n.useImperativeHandle)(r,(function(){return{swipeForward:b,swipeBackward:h,resetPosition:m}})),(0,n.useEffect)((function(){var n=null;return t.autoSwipe&&(n=w()),function(){!function(n){n&&clearInterval(n)}(n)}}),[t.autoSwipe]);var g,x,S,C,j=function(n,t,r){return e().createElement("button",{onClick:n,disabled:t},r)};return e().createElement("div",{className:"swipeable-container",onMouseDown:function(n){s(n.clientX),f(!1)},onMouseMove:function(n){if(0!==u){var e=n.clientX-u;p.current&&(p.current.style.transform="translateX(calc(-".concat(100*a,"% + ").concat(e,"px))"))}},onMouseUp:function(n){var e=n.clientX-u;e>v?b():e<-v?h():m(),s(0)},onMouseLeave:function(){m(),s(0),f(!0)}},e().createElement("div",{className:"slider-container",style:{transform:"translateX(-".concat(100*a,"%)"),transition:"transform 0.3s ease"},ref:p},e().Children.map(t.children,(function(n,t){return e().createElement("div",{key:t,className:"slide"},n)}))),e().createElement("div",{className:"pagination"},e().Children.map(t.children,(function(n,t){return e().createElement("button",{key:t,className:"dot ".concat(t===a?"active":""),onClick:function(){return i(t)}})}))),(g=t.backButtonProps,x=t.forwardButtonProps,S=g&&!t.hideBackButton?j((function(){f(!1),h()}),0===a,g.text):null,C=x&&!t.hideForwardButton?j((function(){f(!1),b()}),a===e().Children.count(t.children)-1,x.text):null,e().createElement("div",{className:"buttons-container"},S,C)))}));g.displayName="SwipeableViews";const x=g})(),o})()));