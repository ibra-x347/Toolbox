(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0a37bb42"],{"013f":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-page window-height window-width bg-light column items-center no-wrap"},[t.$q.platform.is.mobile?t._e():o("a",{attrs:{href:"https://github.com/flespi-software/Toolbox/",target:"_blank"}},[o("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0",width:"149px",height:"149px"},attrs:{src:i("11ea"),alt:"Fork me on GitHub"}})]),t._m(0),t.$route.params.token?o("div",[o("div",{staticClass:"login-card shadow-4 bg-white column items-center justify-center no-wrap"},[o("q-progress",{staticStyle:{width:"100%",height:"45px"},attrs:{indeterminate:"",color:"positive"}})],1)]):o("div",[o("div",{staticClass:"login-card shadow-4 bg-white column items-center justify-center no-wrap"},[o("p",{staticClass:"text-center"},[t._v("Swiss knife to view and analyze flespi data")]),o("div",{staticClass:"row full-width"},[o("div",{staticClass:"col-12 text-center"},[o("iframe",{staticStyle:{width:"100%",height:"96px"},attrs:{src:t.$flespiServer+"/frame/index.html#fff;666;40",frameborder:"0"}})])])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-back flex items-center justify-center"},[i("div",{staticClass:"login-code flex items-center justify-center"})])}],s=i("3156"),a=i.n(s),r=i("2f62"),c={data:function(){return{token:"",icons:{facebook:"mdi-facebook-box",google:"mdi-google-plus-box",live:"mdi-windows",github:"mdi-github-box",email:"mdi-at"}}},computed:{model:{get:function(){return this.token},set:function(t){this.token=t}}},methods:a()({},Object(r["c"])(["setToken"]),{logIn:function(){var t=this;this.setToken(this.token),this.$store.dispatch("getTokenInfo",this.token).then(function(){t.$nextTick(function(){t.$route.params&&t.$route.params.goto?t.$router.push(t.$route.params.goto):t.$router.push("/")})})},autoLogin:function(){var t=this;this.setToken(this.$route.params.token),this.$store.dispatch("getTokenInfo",this.token).then(function(){setTimeout(function(){t.$router.push("/")},1e3)})},checkHasToken:function(){var t=this,e=this.$q.cookies.get("X-Flespi-Token"),i=this.$q.localStorage.get.item("X-Flespi-Token");this.$route.params&&this.$route.params.token?this.autoLogin():i?(this.token=i,this.logIn()):e&&this.$q.dialog({title:"Confirm",message:"Do you want log in by token ".concat(e,"."),cancel:!0,ok:!0}).then(function(i){t.token=e,t.logIn()}).catch(function(){})}}),watch:{$route:function(t){t.params&&t.params.token&&this.autoLogin()}},created:function(){var t=this,e=function e(i){"string"===typeof i.data&&~i.data.indexOf("FlespiToken")&&(t.token=i.data,t.logIn(),window.removeEventListener("message",e))};window.addEventListener("message",e),this.checkHasToken()}},l=c,h=(i("1139"),i("2877")),u=Object(h["a"])(l,o,n,!1,null,null,null);u.options.__file="Login.vue";e["default"]=u.exports},1139:function(t,e,i){"use strict";var o=i("33c9"),n=i.n(o);n.a},"11ea":function(t,e,i){t.exports=i.p+"img/right-graphite@2x.f2e09a97.png"},"33c9":function(t,e,i){}}]);