(this["webpackJsonpreact-study"]=this["webpackJsonpreact-study"]||[]).push([[3],{176:function(n,e,t){"use strict";t.d(e,"a",(function(){return g}));var i,a=t(0),c=t(15),r=t(16).b.div(i||(i=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n  position: absolute;\n  z-index: 20000;\n  width: 100%;\n  top: 5px;\n  .icon {\n    color: #fff;\n    font-size: 20px;\n  }\n  .left {\n    width: 50px;\n    text-align: center;\n  }\n  .title {\n    color: #fff;\n    flex: 1;\n    text-align: center;\n  }\n  .right {\n    width: 50px;\n    text-align: center;\n  }\n"]))),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},o=t(14),l=function(n,e){return a.createElement(o.a,Object.assign({},n,{ref:e,icon:s}))};l.displayName="LeftOutlined";var p=a.forwardRef(l),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},f=function(n,e){return a.createElement(o.a,Object.assign({},n,{ref:e,icon:u}))};f.displayName="MoreOutlined";var d=a.forwardRef(f),b=t(3);function g(n){var e=function(){return n.title?Object(b.jsx)("div",{className:"title",children:n.title}):Object(b.jsx)("div",{className:"title"})};return Object(b.jsxs)(r,{children:[Object(b.jsx)(p,{className:"icon left",onClick:function(){window.history.back()}}),Object(b.jsx)(e,{}),Object(b.jsx)(d,{className:"icon right"})]})}},177:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var i=t(4);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function c(n,e){var t=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){Object(i.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},n);return Array.isArray(e)&&e.forEach((function(n){delete t[n]})),t}},180:function(n,e,t){"use strict";t.r(e);var i,a,c,r,s=t(33),o=t(51),l=t(0),p=t(15),u=t(16),f=u.b.div(i||(i=Object(p.a)(["\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  .bg-pic {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    filter: blur(15px);\n    background: url(",") no-repeat;\n    background-size: 100% 100%;\n    background-position: 60%;\n  }\n  .info-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    &__title {\n      color: #fff;\n      font-size: 38px;\n      font-family: '\u6977\u4f53';\n      font-weight: 600;\n    }\n    &__detail {\n      color: #fff;\n      font-size: 14px;\n      margin-top: 10px;\n      font-weight: 600;\n      font-family: '\u6977\u4f53';\n    }\n  }\n"])),(function(n){return n.picUrl})),d=u.b.div(a||(a=Object(p.a)(["\n  position: absolute;\n  z-index: 200;\n  display: flex;\n  width: 100%;\n  padding: 0 20px;\n  margin-top: 10px;\n  .info-pic {\n    min-width: 120px;\n    height: 120px;\n    background: url(",") no-repeat;\n    background-size: 100% 100%;\n    border-radius: 15px;\n  }\n  .sheet-info {\n    color: #fff;\n    margin-left: 20px;\n    line-height: 22px;\n  }\n"])),(function(n){return n.picUrl})),b=u.b.ul(c||(c=Object(p.a)(["\n  margin-top: 5px;\n  background-color: #fff;\n  .list-item {\n    display: flex;\n    align-items: center;\n    color: #000;\n    height: 55px;\n    margin-top: 5px;\n    &__rank {\n      width: 40px;\n      color: #999;\n      text-align: center;\n      font-size: 17px;\n    }\n    &__detail {\n      flex: 1;\n      padding: 6px 0;\n      &__title {\n        font-size: 17px;\n      }\n      &__artiset {\n        font-size: 12px;\n        margin-top: 5px;\n        color: #888;\n      }\n    }\n    &__mv {\n      width: 80px;\n      text-align: center;\n      color: #888;\n      cursor: pointer;\n    }\n  }\n"]))),g=u.b.div(r||(r=Object(p.a)(["\n  margin-top: 10px;\n  cursor: pointer;\n  a {\n    display: block;\n    align-items: center;\n    height: 40px;\n    display: flex;\n    color: #000;\n  }\n  .btn-icon {\n    margin-left: 10px;\n    .icon {\n      font-size: 22px;\n    }\n  }\n  .detail {\n    font-weight: 600;\n    margin-left: 10px;\n  }\n  .num {\n    margin-left: 5px;\n  }\n"]))),j=t(29),m=t(175),x=t(3);function h(n){return Object(x.jsx)(b,{children:n.playList.map((function(e,t){return Object(x.jsx)(j.b,{to:"/song/"+e.id,children:Object(x.jsxs)("li",{className:"list-item",onClick:function(){return function(e){window.sessionStorage.setItem("CURRENT_PLAYER",JSON.stringify(e)),n.onClick(e)}(e)},children:[Object(x.jsx)("div",{className:"list-item__rank",children:t+1}),Object(x.jsxs)("div",{className:"list-item__detail",children:[Object(x.jsx)("p",{className:"list-item__detail__title",children:e.title}),Object(x.jsx)("p",{className:"list-item__detail__artiset",children:e.artiset})]}),Object(x.jsx)("div",{className:"list-item__mv",children:Object(x.jsx)(m.a,{})})]})},e.id+t)}))})}var O=t(176);function y(n){return Object(x.jsx)(g,{className:"play-button",onClick:function(){n.onClick()},children:Object(x.jsxs)(j.b,{to:n.url||"/song",children:[Object(x.jsx)("div",{className:"btn-icon",children:Object(x.jsx)("svg",{className:"icon","aria-hidden":"true",children:Object(x.jsx)("use",{xlinkHref:"#icon-bofang"})})}),Object(x.jsx)("span",{className:"detail",children:"\u64ad\u653e\u5168\u90e8"}),Object(x.jsx)("span",{className:"num",children:"(10)"})]})})}var v=t(96),N=t(23),S=t.n(N),w=t(35),k=t(41),_=t(32);var E=t(2),C=t(4),P=t(9),z=t(10),L=t(12),U=t(13),I=t(7),J=t.n(I),A=t(177),D=t(89),R=t.n(D),M=t(46),B=l.isValidElement;function T(n,e){return function(n,e,t){return B(n)?l.cloneElement(n,"function"===typeof t?t(n.props||{}):t):e}(n,n,e)}var V=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]])}return t},Y=(function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t]}("small","default","large"),null);var H=function(n){Object(L.a)(t,n);var e=Object(U.a)(t);function t(n){var i;Object(P.a)(this,t),(i=e.call(this,n)).debouncifyUpdateSpinning=function(n){var e=(n||i.props).delay;e&&(i.cancelExistingSpin(),i.updateSpinning=R()(i.originalUpdateSpinning,e))},i.updateSpinning=function(){var n=i.props.spinning;i.state.spinning!==n&&i.setState({spinning:n})},i.renderSpin=function(n){var e,t=n.getPrefixCls,a=n.direction,c=i.props,r=c.prefixCls,s=c.className,o=c.size,p=c.tip,u=c.wrapperClassName,f=c.style,d=V(c,["prefixCls","className","size","tip","wrapperClassName","style"]),b=i.state.spinning,g=t("spin",r),j=J()(g,(e={},Object(C.a)(e,"".concat(g,"-sm"),"small"===o),Object(C.a)(e,"".concat(g,"-lg"),"large"===o),Object(C.a)(e,"".concat(g,"-spinning"),b),Object(C.a)(e,"".concat(g,"-show-text"),!!p),Object(C.a)(e,"".concat(g,"-rtl"),"rtl"===a),e),s),m=Object(A.a)(d,["spinning","delay","indicator"]),x=l.createElement("div",Object(E.a)({},m,{style:f,className:j}),function(n,e){var t=e.indicator,i="".concat(n,"-dot");return null===t?null:B(t)?T(t,{className:J()(t.props.className,i)}):B(Y)?T(Y,{className:J()(Y.props.className,i)}):l.createElement("span",{className:J()(i,"".concat(n,"-dot-spin"))},l.createElement("i",{className:"".concat(n,"-dot-item")}),l.createElement("i",{className:"".concat(n,"-dot-item")}),l.createElement("i",{className:"".concat(n,"-dot-item")}),l.createElement("i",{className:"".concat(n,"-dot-item")}))}(g,i.props),p?l.createElement("div",{className:"".concat(g,"-text")},p):null);if(i.isNestedPattern()){var h=J()("".concat(g,"-container"),Object(C.a)({},"".concat(g,"-blur"),b));return l.createElement("div",Object(E.a)({},m,{className:J()("".concat(g,"-nested-loading"),u)}),b&&l.createElement("div",{key:"loading"},x),l.createElement("div",{className:h,key:"container"},i.props.children))}return x};var a=n.spinning,c=function(n,e){return!!n&&!!e&&!isNaN(Number(e))}(a,n.delay);return i.state={spinning:a&&!c},i.originalUpdateSpinning=i.updateSpinning,i.debouncifyUpdateSpinning(n),i}return Object(z.a)(t,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return l.createElement(M.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(n){Y=n}}]),t}(l.Component);H.defaultProps={spinning:!0,size:"default",wrapperClassName:""};var W=H;e.default=Object(s.b)((function(n){return{currentSong:n.getIn(["playState","currentSong"]),currentPlayList:n.getIn(["playState","currentPlayList"]),currentSheet:n.getIn(["sheet","currentSheet"])}}),(function(n){return{changeCurrentSong:function(e){n(Object(o.a)(e))},setCurrentList:function(e){n(Object(o.b)(e))}}}))((function(n){var e=function(n){var e=Object(l.useState)([]),t=Object(k.a)(e,2),i=t[0],a=t[1],c=Object(l.useState)(!0),r=Object(k.a)(c,2),s=r[0],o=r[1],p=n.setCurrentList,u=n.changeCurrentSong,f=n.currentSheet,d=function(){var n=Object(w.a)(S.a.mark((function n(){var e;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(e=f.toJS().path)&&_.b.get(e).then((function(n){o(!1),n.data.songInfo&&a(n.data.songInfo),window.sessionStorage.setItem("PLAY_LIST",JSON.stringify(n.data.songInfo))}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(l.useEffect)((function(){d()}),[]),{playList:i,fnClickPlayAll:function(){p(i),u(i[0])},isLoading:s}}(n),t=e.playList,i=e.fnClickPlayAll,a=e.isLoading,c=n.currentSheet;return Object(x.jsxs)("div",{children:[Object(x.jsx)(O.a,{}),Object(x.jsxs)(f,{picUrl:c.toJS().src,children:[Object(x.jsx)("div",{className:"bg-pic"}),Object(x.jsxs)(d,{picUrl:c.toJS().src,children:[Object(x.jsx)("div",{className:"info-pic"}),Object(x.jsxs)("div",{className:"sheet-info",children:['"',c.toJS().title,'"']})]})]}),Object(x.jsxs)(W,{tip:"Loading\u2026",spinning:a,children:[Object(x.jsx)(y,{onClick:i,url:t&&t[0]&&t[0].url}),Object(x.jsx)(h,{playList:t,onClick:n.changeCurrentSong}),Object(x.jsx)(v.a,{})]})]})}))}}]);
//# sourceMappingURL=3.a0066e1e.chunk.js.map