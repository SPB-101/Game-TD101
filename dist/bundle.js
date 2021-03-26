(()=>{"use strict";var n={424:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(645),i=e.n(o)()((function(n){return n[1]}));i.push([n.id,"/*****************************************************************************/\n/* Reset\n/*****************************************************************************/\nhtml,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}body{line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}ins{background-color:#ff9;color:#000;text-decoration:none}mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}\n\n\n/*****************************************************************************/\n/* Global\n/*****************************************************************************/\n\ncanvas {\n    width: 100%;\n    height: 100%;\n    background-color: #85ADE6;\n}\n\na {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    color: #00F;\n    cursor: pointer;\n    text-decoration: none;\n    user-select: none;\n}\n\nbody {\n    -moz-box-shadow: 0 0 10px #000;\n    -webkit-box-shadow: 0 0 10px #000;\n    box-shadow: 0 0 10px #000;\n    display: inline-block;\n    margin: 10px;\n}\nbody, kbd {\n    font: 12px \"Droid Sans Mono\", monospace;\n}\n\ndt {\n    clear: left;\n    float: left;\n    width: 50px;\n}\ndd {\n    float: left;\n}\n\nh2, h3 {\n    font-weight: normal;\n}\nh2 {\n    margin-bottom: 10px;\n}\nh3 {\n    text-align: center;\n}\n\np {\n    margin-bottom: 30px;\n}\n\nul {\n    list-style: none;\n}\n\n#pages > * {\n    background-color: #FFF;\n    display: none;\n    position: absolute;\n}\n\n\n/*****************************************************************************/\n/* Start page\n/*****************************************************************************/\n#pages-start {\n    display: block;\n    height: 450px;\n    padding: 50px;\n    width: 700px;\n}\n\n#pages-start-maps {\n    float: left;\n}\n#pages-start-maps > a {\n    display: block;\n    margin-bottom: 20px;\n    text-align: center;\n}\n#pages-start-maps > a > img {\n    -moz-box-shadow: 0 0 5px #000;\n    -webkit-box-shadow: 0 0 5px #000;\n    box-shadow: 0 0 5px #000;\n    display: block;\n    height: 50px;\n    width: 80px;\n}\n\n#pages-start-info {\n    float: right;\n    height: 450px;\n    text-align: justify;\n    width: 350px;\n}\n#pages-start-links {\n    bottom: 5px;\n    position: absolute;\n}\n\n\n/*****************************************************************************/\n/* Overlay page\n/*****************************************************************************/\n#pages-overlay {\n    height: 550px;\n    opacity: 0.3;\n    width: 800px;\n}\n\n\n/*****************************************************************************/\n/* Scores page\n/*****************************************************************************/\n#pages-scores {\n    height: 550px;\n    width: 800px;\n    z-index: 1;\n}\n\n#pages-scores > h3, #pages-scores > ul {\n    display: inline-block;\n    margin: 5px 0;\n    padding: 0 10px;\n    vertical-align: top;\n    width: 245px; /* should be 246px? */\n}\n\n#pages-scores > :nth-child(3n+2) {\n    border: solid #DDD;\n    border-width: 0 1px;\n    margin: 5px -7px;\n}\n\n#pages-scores > ul {\n    font-size: 10px;\n}\n\n#pages-scores > ul > li > a {\n    -o-text-overflow: ellipsis;\n    display: inline-block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    vertical-align: top;\n    width: 90px;\n}\n\n#pages-scores-back {\n    left: 10px;\n    position: absolute;\n    top: 5px;\n}\n\n#pages-scores-twitter-backtrack {\n    height: 434px;\n}\n\n#pages-scores-local-backtrack {\n    height: 70px;\n}\n\n\n/*****************************************************************************/\n/* Control panel\n/*****************************************************************************/\n#control {\n    background-color: #DDD;\n    font-size: 10px;\n    height: 44px;\n    margin-top: 5px;\n    padding: 4px 6px 2px 6px;\n    width: 788px;\n}\n\n#control-left {\n    float: left;\n}\n#control-manage, #control-score {\n    display: none;\n}\n\n#control-turrets > a {\n    float: left;\n    text-align: center;\n    width: 90px;\n    display: block;\n}\n\n#control-manage > a, #control-manage-stats {\n    border: 1px solid #00F;\n    float: left;\n    height: 30px;\n    margin: 5px;\n    text-align: center;\n    width: 75px;\n}\n#control-manage-stats {\n    border-color: #000;\n}\n\n#control-score {\n    position: relative;\n}\n\n#control-right {\n    float: right;\n}\n\n#control-right-1, #control-right-2, #control-right-3 {\n    float: left;\n}\n\n#control-timer {\n    background-color: #F00;\n    display: block;\n    height: 20px;\n    margin-bottom: 2px;\n    width: 20px;\n}\n\n#control-fast {\n    background-color: #85ADE6;\n    display: block;\n    height: 20px;\n    width: 20px;\n}\n\n#control-right-2 {\n    border: solid #CCC;\n    border-width: 0 1px;\n    margin: 0 10px;\n    min-width: 60px;\n    padding: 0 10px;\n}\n",""]);const r=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},548:(n,t,e)=>{e.r(t),e.d(t,{default:()=>a});var o=e(379),i=e.n(o),r=e(424);i()(r.Z,{insert:"head",singleton:!1});const a=r.Z.locals||{}},379:(n,t,e)=>{var o,i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),r=[];function a(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},o=[],i=0;i<n.length;i++){var s=n[i],l=t.base?s[0]+t.base:s[0],c=e[l]||0,d="".concat(l," ").concat(c);e[l]=c+1;var p=a(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:d,updater:g(u,t),references:1}),o.push(d)}return o}function l(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,d=(c=[],function(n,t){return c[n]=t,c.filter(Boolean).join("\n")});function p(n,t,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(t,i);else{var r=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(r,a[t]):n.appendChild(r)}}function u(n,t,e){var o=e.css,i=e.media,r=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var h=null,f=0;function g(n,t){var e,o,i;if(t.singleton){var r=f++;e=h||(h=l(t)),o=p.bind(null,e,r,!1),i=p.bind(null,e,r,!0)}else e=l(t),o=u.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var i=a(e[o]);r[i].references--}for(var l=s(n,t),c=0;c<e.length;c++){var d=a(e[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}e=l}}}},221:(n,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;var e=function(){function n(){this.ticks=0,this._ticks=0,this._tick=0,this.ticker=-1,this.paused=!1,this.wave=0,this._wave=0,this.creeps=[],this.hp=1,this.hpinc=1.3}return n.prototype.tick=function(){if(this.ticks-this._ticks==60){var n=Math.round(6e4/(Date.now()-this._tick));this._tick=Date.now(),this.fpsListener(n),this._ticks=this.ticks}this.ticks++,this._wave+1200===this.ticks&&(console.log("wave => ",this._wave),this._wave=this.ticks)},n.prototype.start=function(){this._ticks=this.ticks,this._tick=Date.now(),this.paused=!1,this.ticker=window.setInterval(this.tick.bind(this),1e3/60),this.tick()},n.prototype.pause=function(){this.paused=!0,window.clearInterval(this.ticker)},n.prototype.end=function(){},n}();t.Game=e},262:(n,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PanelController=void 0;var e=function(){function n(){this.controlPause=document.querySelector("#control-pause"),this.fpsInfo=document.querySelector("#control-fps")}return n.prototype.init=function(n){var t=this;this.controlPause.onclick=function(){return t.controlPause.textContent=n.paused?(n.start(),"Pause"):(n.pause(),"Start")},n.fpsListener=function(n){t.fpsInfo.textContent=n.toString()}},n}();t.PanelController=e}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{e(548);var n=e(262),t=e(221),o=(document.querySelector("canvas").getContext("2d"),new t.Game);(new n.PanelController).init(o)})()})();