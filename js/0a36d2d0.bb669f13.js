(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0a36d2d0"],{"013f":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-page window-height window-width bg-light column items-center no-wrap"},[!t.$q.platform.is.mobile||t.$q.platform.within.iframe?n("a",{attrs:{href:"https://github.com/flespi-software/Toolbox/",target:"_blank"}},[n("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0",width:"149px",height:"149px"},attrs:{src:o("11ea"),alt:"Fork me on GitHub"}})]):t._e(),t._m(0),t.$route.params.token?n("div",[n("div",{staticClass:"login-card shadow-4 bg-white column items-center justify-center no-wrap"},[n("q-progress",{staticStyle:{width:"100%",height:"45px"},attrs:{indeterminate:"",color:"green-6"}})],1)]):n("div",[!t.canLogin||t.$q.platform.within.iframe?n("div",{staticClass:"login-card shadow-4 bg-white column items-center justify-center no-wrap"},[n("div",{staticClass:"row full-width"},[n("div",{staticClass:"col-12 text-center text-red text-bold"},[n("big",[t._v("Token has been expired or revoked")])],1)])]):n("div",{staticClass:"login-card shadow-4 bg-white column items-center justify-center no-wrap"},[n("p",{staticClass:"text-center"},[t._v("Swiss knife to view and analyze flespi data")]),n("div",{staticClass:"row full-width"},[n("div",{staticClass:"col-12 text-center"},[n("q-btn",{attrs:{icon:"mdi-account-circle",color:"red-7",rounded:"",label:"login / register",size:"lg"},on:{click:function(e){return t.openWindow(t.$flespiServer+"/login/#/providers")}}})],1)])])])])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-back flex items-center justify-center"},[o("div",{staticClass:"login-code flex items-center justify-center"})])}],r=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("c47a")),s=o.n(r),c=o("2b0e"),a=o("2f62");function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function d(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(o,!0).forEach((function(e){s()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var u={data:function(){return{token:"",icons:{facebook:"mdi-facebook-box",google:"mdi-google-plus-box",live:"mdi-windows",github:"mdi-github-box",email:"mdi-at"},canLogin:!0}},computed:{model:{get:function(){return this.token},set:function(t){this.token=t}},tokenInfo:function(){return this.$store.state.tokenInfo}},methods:d({},Object(a["c"])(["setToken"]),{goto:function(t){var e=this;if(this.tokenInfo)this.$router.push(t).catch((function(t){return t}));else{var o,n,i=function(){e.$router.push(t).catch((function(t){return t})),o&&c["default"].connector.socket.on("connect",o),n&&c["default"].connector.socket.on("error",n)};o=c["default"].connector.socket.on("connect",i),n=c["default"].connector.socket.on("error",i)}},logIn:function(){var t=this;this.setToken(this.token),this.$nextTick((function(){t.$route.params&&t.$route.params.goto?t.goto(t.$route.params.goto):t.goto("/")}))},autoLogin:function(){this.setToken(this.$route.params.token),this.goto("/")},checkHasToken:function(){var t=this.$q.sessionStorage.getItem("toolbox-token");this.$route.params&&this.$route.params.token?this.autoLogin():t&&(this.token=t,this.logIn())},openWindow:function(t,e){e=e||"auth";var o=500,n=600,i=void 0!==window.screenLeft?window.screenLeft:screen.left,r=void 0!==window.screenTop?window.screenTop:screen.top,s=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,c=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,a=s/2-o/2+i,l=c/2-n/2+r,d=window.open(t,e,"toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes, width="+o+", height="+n+", top="+l+", left="+a);window.focus&&d.focus()}}),watch:{$route:function(t){t.params&&t.params.token&&this.autoLogin()}},created:function(){var t=this,e=this.$q.sessionStorage.getItem("toolbox-session-settings");e&&(this.canLogin=e.isVisibleToolbar);var o=function e(o){"string"===typeof o.data&&~o.data.indexOf("FlespiToken")&&(t.token=o.data,t.logIn(),window.removeEventListener("message",e))};window.addEventListener("message",o),this.checkHasToken()}},h=u,f=(o("1139"),o("2877")),g=Object(f["a"])(h,n,i,!1,null,null,null);e["default"]=g.exports},1139:function(t,e,o){"use strict";var n=o("13df"),i=o.n(n);i.a},"11ea":function(t,e,o){t.exports=o.p+"img/right-graphite@2x.f2e09a97.png"},"13df":function(t,e,o){}}]);