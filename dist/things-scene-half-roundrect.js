!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=scene},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0);var u={ondragmove:function(e,t,r){r.controls;var n=r.model,o=n.left,u=(n.top,n.width),c=n.height,a=(r.transcoordP2S(e.x,e.y).x-o)/(u/2)*100;a=i(a,u,c),r.set({round:a})}};function i(e,t,r){var n=t>r?r/t*100:100;return e>=n?e=n:e<=0&&(e=0),e}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Rect),n(t,[{key:"_draw",value:function(e){var t=this.model,r=t.round,n=t.top,o=t.left,u=t.width,c=t.height;if(e.beginPath(),(r=i(r,u,c))>0){var a=r/100*(u/2);e.moveTo(o+a,n),e.lineTo(o+u-a,n),e.quadraticCurveTo(o+u,n,o+u,n+a),e.lineTo(o+u,n+c),e.lineTo(o,n+c),e.lineTo(o,n+a),e.quadraticCurveTo(o,n,o+a,n)}else e.rect(o,n,u,c);this.drawFill(e),this.drawStroke(e)}},{key:"controls",get:function(){var e=this.model,t=e.left,r=e.top,n=e.width,o=e.round,c=e.height;return[{x:t+n/2*((o=void 0==o?0:i(o,n,c))/100),y:r,handler:u}]}}]),t}();t.default=c,o.Component.register("half-roundrect",c)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);Object.defineProperty(t,"HalfRoundrect",{enumerable:!0,get:function(){return(e=n,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,t,r){e.exports=r(2)}]);
//# sourceMappingURL=things-scene-half-roundrect.js.map