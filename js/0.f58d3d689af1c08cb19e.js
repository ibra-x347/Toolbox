webpackJsonp([0],{"0AGo":function(t,e,i){var s=i("RZBc");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("rjj0").default)("4d55b52f",s,!0,{})},"1otV":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.modal-tabs .q-tabs {\n  height: 100%;\n}\n.modal-tabs .q-tabs .q-tabs-panes {\n  height: 100%;\n  overflow: auto;\n}\n",""])},"4KTB":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.header__main-toolbar {\n  padding: 1px 12px;\n}\n",""])},"7YgM":function(t,e){t.exports={name:"ToolboX",version:"0.9.2",description:"ToolboX",productName:"ToolboX",cordovaId:"org.cordova.quasar.app",author:"Sergei Buntsevich <sebu@gurtam.com>",private:!0,scripts:{lint:"eslint --ext .js,.vue src",dev:'node ./build.js "dev -m pwa" "flespi"',build:'node ./build.js "build -m pwa" "flespi"',dev_local:'node ./build.js "dev -m pwa" "local"',deploy:"npm run build && rm -rf deploy && mkdir deploy && cp -R dist/pwa-mat/* misc CNAME LICENSE package.json deploy && cp README.md deploy/README.md && node_modules/git-directory-deploy/bin/git-directory-deploy.sh -ddeploy -bgh-pages -rhttps://git.gurtam.net/flespi/frontend/toolbox.git && rm -rf deploy && git push github gh-pages"},dependencies:{"flespi-io-js":"git+https://github.com/flespi-software/flespi-io-js.git",leaflet:"^1.3.1",qvirtualscroll:"git+https://github.com/flespi-software/QVirtualScroll.git",shelljs:"^0.8.1","vue-clipboard2":"0.0.8","vue-draggable-resizable":"^1.7.1","vue-i18n":"^7.3.3"},devDependencies:{"babel-eslint":"^8.2.3",eslint:"^4.19.1","eslint-config-standard":"^11.0.0","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^2.0.0","eslint-plugin-import":"^2.11.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.7.0","eslint-plugin-standard":"^3.0.1","eslint-plugin-vue":"^4.5.0","git-directory-deploy":"^1.5.1","quasar-cli":"^0.15.14"},engines:{node:">= 8.9.0",npm:">= 5.6.0"},browserslist:["> 1%","last 2 versions","not ie <= 10"]}},NImw:function(t,e,i){var s=i("Qf7r");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("rjj0").default)("1749cdf6",s,!0,{})},OuQc:function(t,e,i){var s=i("4KTB");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("rjj0").default)("4dc8760c",s,!0,{})},Qf7r:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.no-top-bottom-margin {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n.image-bin {\n  max-width: 265px;\n}\n",""])},RZBc:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.margin-left {\n  margin-left: 16px;\n}\n",""])},b1Jt:function(t,e,i){var s=i("1otV");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("rjj0").default)("1510a43c",s,!0,{})},yoYR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),a=i.n(s),r=i("Dd8w"),o=i.n(r),n=i("fZjL"),l=i.n(n),c=i("7109"),u=i("DEN3"),d=i.n(u),p=i("NYxO"),h=i("7YgM"),m=i.n(h),b={props:["object"],data:function(){return{search:""}},computed:{filteredObject:function(){var t=this;return l()(this.object).reduce(function(e,i){return-1!==i.indexOf(t.search)&&(e[i]=t.object[i]),e},{})}}},f=i("XyMi");var g=function(t){i("NImw")},v=Object(f.a)(b,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("q-item",[i("q-item-side",{attrs:{left:""}},[i("q-icon",{attrs:{color:"white",size:"1.8rem",name:"mdi-view-list"}})],1),t._v(" "),i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-white",attrs:{label:""}},[t._v("Message")])],1),t._v(" "),i("q-item-side",{attrs:{right:""}},[i("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{color:"white",name:"mdi-close",size:"1.8rem"},nativeOn:{click:function(e){t.$emit("close")}}})],1)],1),t._v(" "),i("q-item",[i("q-item-main",[i("q-input",{staticClass:"no-top-bottom-margin",attrs:{type:"text",inverted:"",color:"none","float-label":"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),i("q-list",{attrs:{separator:"","no-border":""}},[Object.keys(t.object).length&&Object.keys(t.filteredObject).length?t._e():i("q-item",[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-center text-white",attrs:{label:""}},[t._v("Message is empty")]),t._v(" "),Object.keys(t.object).length?t._e():i("q-item-tile",{staticClass:"ellipsis text-center text-white",attrs:{sublabel:""}},[t._v("Message has not fields")]),t._v(" "),!Object.keys(t.filteredObject).length&&this.search?i("q-item-tile",{staticClass:"ellipsis text-center text-white",attrs:{sublabel:""}},[t._v("Nothing found on your search")]):t._e()],1)],1),t._v(" "),t._l(Object.keys(t.filteredObject),function(e){return Object.keys(t.filteredObject).length?i("q-item",{key:e},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-white",attrs:{label:""}},[t._v(t._s(e)),i("q-tooltip",[t._v(t._s(e))])],1),t._v(" "),-1===e.indexOf("image.bin.")?i("q-item-tile",{staticClass:"ellipsis text-white",attrs:{sublabel:""}},[t._v(t._s(t.filteredObject[e])),i("q-tooltip",[t._v(t._s(t.filteredObject[e]))])],1):i("q-item-tile",{attrs:{sublabel:""}},[i("img",{staticClass:"image-bin",attrs:{src:"data:image/"+e.split(".")[2]+";base64, "+t.filteredObject[e],alt:e}})])],1)],1):t._e()})],2)],1)},[],!1,g,null,null).exports,y={props:["config","inverted"],data:function(){return{tabModel:""}},computed:{hasData:function(){var t=this;return l()(this.config).reduce(function(e,i){return t.config[i].data&&(e=!0),e},!1)}},methods:{open:function(){this.$refs.modal.show()},openHandler:function(){var t=this,e=0,i=l()(this.config).some(function(i,s){return e=s,!!t.config[i].data});this.tabModel=i?l()(this.config)[e]:l()(this.config)[0]?l()(this.config)[e]:""}}};var _=function(t){i("b1Jt")},w=Object(f.a)(y,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-modal",{ref:"modal",attrs:{"content-css":{maxWidth:"100vw",maxHeight:"100vh",width:"700px",height:"700px",padding:"50px 0"},"content-classes":{"bg-dark":void 0!==t.inverted,"modal-tabs":!0}},on:{show:t.openHandler,hide:function(e){t.tabModel=""}}},[i("q-modal-layout",[i("q-toolbar",{staticStyle:{"justify-content":"flex-end"},attrs:{slot:"footer",color:"dark"},slot:"footer"},[i("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.modal.hide()}}},[t._v("Close")])],1),t._v(" "),t.hasData?t._e():i("div",{staticClass:"text-center",class:{"text-white":void 0!==t.inverted},staticStyle:{"font-size":"2rem","margin-top":"50px"}},[t._v("No additional data available")]),t._v(" "),t.hasData?i("q-tabs",{attrs:{color:"dark","no-pane-border":""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[t._l(t.config,function(e,s){return e.data?[i("q-tab",{key:"tab-"+s,attrs:{slot:"title",name:s,label:e.title},slot:"title"}),t._v(" "),i("q-tab-pane",{key:"tab-pane-"+s,attrs:{name:s}},[e.wrapper&&"object"==typeof e.wrapper?i(e.wrapper,{tag:"component",attrs:{data:e.data,inverted:t.inverted}}):t._e(),t._v(" "),e.wrapper&&"string"==typeof e.wrapper?i(e.wrapper,{tag:"component",class:{"text-white":void 0!==t.inverted}},[t._v(t._s(e.data))]):t._e(),t._v(" "),e.wrapper?t._e():i("div",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(e.data))])],1)]:t._e()})],2):t._e()],1)],1)},[],!1,_,null,null).exports,q={name:"json-tree",props:{data:[Object,Array],inverted:!0},data:function(){for(var t=[],e=0,i=l()(this.data).length;e<i;e++)t.push(!0);return{showObj:t}},computed:{theme:function(){return void 0!==this.inverted?{label:"text-pink-4",typeString:"text-red-3",typeNumberOrBool:"text-blue-3",typeEmpty:"text-grey-5"}:{label:"text-pink-8",typeString:"text-red-6",typeNumberOrBool:"text-blue-6",typeEmpty:"text-grey-6"}}},methods:{toggle:function(t){this.showObj[t]=!this.showObj[t],this.showObj.splice(t,1,this.showObj[t])}}};var x=function(t){i("0AGo")},$=Object(f.a)(q,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(t.data.constructor===Array?"[":"{"))]),t._v(" "),t._l(t.data,function(e,s,a){return i("div",{key:s+"-"+a,staticClass:"margin-left"},[e&&"object"==typeof e?i("div",[i("div",{staticClass:"cursor-pointer",on:{click:function(e){t.toggle(t.data.constructor===Array?s:a)}}},[t.showObj[t.data.constructor===Array?s:a]?i("q-icon",{staticStyle:{"vertical-align":"baseline"},attrs:{color:void 0!==t.inverted?"white":"dark",name:"mdi-menu-down"}}):i("q-icon",{staticStyle:{"vertical-align":"baseline"},attrs:{color:void 0!==t.inverted?"white":"dark",name:"mdi-menu-right"}}),t._v(" "),i("span",{class:[t.theme.label]},[t._v(t._s(s))]),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(" : "+t._s(t.data.constructor===Array?"Array ["+e.length+"]":"Object"))])],1),t._v(" "),t.showObj[t.data.constructor===Array?s:a]?i("json-tree",{staticClass:"margin-left",attrs:{data:e,inverted:t.inverted}}):t._e()],1):i("div",[i("span",{class:[t.theme.label]},[t._v(t._s(s))]),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(" : ")]),t._v(" "),i("span",{class:(r={},r[t.theme.typeNumberOrBool]="number"==typeof e||"boolean"==typeof e,r[t.theme.typeString]="string"==typeof e,r[t.theme.typeEmpty]=void 0===e||null===e,r)},[t._v(t._s(JSON.stringify(e)))])])]);var r}),t._v(" "),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(t.data.constructor===Array?"]":"}"))])],2)},[],!1,x,null,null).exports,k={data:function(){return{version:m.a.version,currentMessage:{},currentData:{},sides:{left:!1,right:!1},currentLimit:1e3,rawConfig:{},config:d.a,tabModel:"",isVisibleToolbar:!0,loadingFlag:!1,isTabsVisible:!0,tabsByGroup:l()(d.a),isNeedSelect:!0}},computed:o()({},Object(p.c)({token:function(t){return t.token},isCustomer:function(t){return t.isCustomer},isLoading:function(t){return t.isLoading}}),{configByEntity:function(){return this.config[this.tabModel]},limit:{get:function(){return this.currentLimit},set:function(t){var e=this;t<100?(this.$q.notify({type:"negative",message:"Please set the count to more than 100.",timeout:1500}),this.currentLimit=100):t>2e3&&this.currentLimit<=2e3?this.$q.notify({color:"amber-9",icon:"warning",timeout:1e4,message:"You are setting the row count to more than 2000. This can affect your browser performance. Do you want to continue?",position:"top-right",actions:[{label:"Agree",handler:function(){e.currentLimit=t}},{label:"Abort",handler:this.settingsClickHandler}]}):this.currentLimit=t}},logMessageConfig:function(){var t={item_data:{title:"item data",wrapper:$,data:this.currentData.item_data},http_data:{title:"http data",wrapper:$,data:this.currentData.http_data},properties:{title:"properties",wrapper:$,data:this.currentData.properties},pending:{title:"pending",wrapper:$,data:this.currentData.pending},current:{title:this.currentData.name+" [upd:"+c.P.formatDate(1e3*this.currentData.updated,"HH:mm:ss")+"]",wrapper:$,data:this.currentData.current}},e=l()(t).reduce(function(e,i){return e||!!t[i].data},!1);return e?t:e}}),methods:o()({},Object(p.b)(["setToken","clearToken"]),{exitHandler:function(){this.clearToken(),this.$router.push("/login")},onResizeWindow:function(t){t.width>767?this.isTabsVisible=!0:this.isTabsVisible=!1},viewDataHandler:function(t){var e=this;this.currentMessage=JSON.parse(a()(t)),setTimeout(function(){e.sides.right=!0},20)},hideRight:function(){this.sides.right=!1,this.currentMessage={}},hideRightHandler:function(){this.hideRight(),this.$refs.main.unselect()},confirmExitHandler:function(){var t=this;this.$q.dialog({title:"Confirm",message:"Do you really want to exit?",cancel:!0,ok:!0}).then(function(){t.exitHandler()}).catch(function(){})},settingsHandler:function(){var t=this;this.$q.dialog({title:"Settings",message:"Page row count",prompt:{model:this.limit,type:"number"},ok:!0,cancel:!0}).then(function(e){t.limit=e}).catch(function(){})},viewLogMessagesHandler:function(t){this.currentData=JSON.parse(a()(t)),this.logMessageConfig?(this.rawConfig=this.logMessageConfig,this.$refs.rawViewer.open()):this.$q.notify({message:"No additional data available",timeout:1500})},disableLoading:Object(c.Q)(function(t){t.loadingFlag=!1},200)}),watch:{token:function(t){t||this.$router.push("/login")},$route:function(t){if(this.$route.params.group){var e=this.$route.params.group.split(",").reduce(function(t,e){if(["hub","storage","mqtt","platform"].includes(e))switch(e){case"hub":t.push("channels"),t.push("devices"),t.push("streams"),t.push("modems");break;case"storage":t.push("containers"),t.push("abques"),t.push("cdns");break;case"mqtt":case"platform":t.push("mqtt")}return t},[]);e.length&&(this.tabsByGroup=e)}t.params.token?(this.isNeedSelect=!this.$route.params.noselect,this.isVisibleToolbar=!t.params.fullscreen,this.setToken(t.params.token),t.params.id&&t.params.type?l()(d.a).includes(t.params.type)?(this.tabModel=this.$route.params.type,this.$router.push("/"+t.params.type+"/"+t.params.id)):(this.tabModel="platform",this.$router.push("/platform")):(this.tabModel=this.tabsByGroup[0],this.$router.push("/"+this.tabsByGroup[0]))):this.token?"/"===t.path?(this.tabModel=this.tabsByGroup[0],this.$router.push("/"+this.tabsByGroup[0])):this.$route.meta.moduleName?(this.tabModel=this.$route.meta.moduleName,this.$router.push("/"+this.$route.meta.moduleName+(this.$route.params.id?"/"+this.$route.params.id:""))):this.$router.push(this.$route.path):this.$router.push("/login"),this.$refs.layout&&this.hideRight()},isLoading:function(t){t?this.loadingFlag=t:this.disableLoading(this)}},created:function(){var t=this.$q.localStorage.get.item("X-Flespi-Token");if(this.$route.params.group){var e=this.$route.params.group.split(",").reduce(function(t,e){if(["hub","storage","mqtt","platform"].includes(e))switch(e){case"hub":t.push("channels"),t.push("devices"),t.push("streams"),t.push("modems");break;case"storage":t.push("containers"),t.push("abques"),t.push("cdns");break;case"mqtt":t.push("mqtt");break;case"platform":t.push("platform")}return t},[]);e.length&&(this.tabsByGroup=e)}this.$route.params.token?(this.isNeedSelect=!this.$route.params.noselect,this.isVisibleToolbar=!this.$route.params.fullscreen,this.setToken(this.$route.params.token),this.$route.params.id&&this.$route.params.type?l()(d.a).includes(this.$route.params.type)?(this.tabModel=this.$route.params.type,this.$router.push("/"+this.$route.params.type+"/"+this.$route.params.id)):(this.tabModel="platform",this.$router.push("/platform")):(this.tabModel=this.tabsByGroup[0],this.$router.push("/"+this.tabsByGroup[0]))):this.token||t?(t&&this.setToken(t),"/"===this.$route.path?(this.tabModel=this.tabsByGroup[0],this.$router.push("/"+this.tabsByGroup[0])):this.$route.meta.moduleName?(this.tabModel=this.$route.meta.moduleName,this.$router.push("/"+this.$route.meta.moduleName+(this.$route.params.id?"/"+this.$route.params.id:""))):this.$router.push(this.$route.path)):this.$router.push("/login")},components:{ObjectViewer:v,RawViewer:w}};var j=function(t){i("OuQc")},O=Object(f.a)(k,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tabModel?i("div",[i("q-layout",{ref:"layout",attrs:{view:"hHh LpR lFf"}},[t.isVisibleToolbar?i("q-layout-header",[i("q-toolbar",{staticClass:"header__main-toolbar",attrs:{color:"dark"}},[i("q-toolbar-title",{style:{minWidth:t.$q.platform.is.mobile?"60px":"210px"}},[i("img",{staticStyle:{height:"30px"},attrs:{src:t.$q.platform.is.mobile?"statics/toolbox_mobile.png":"statics/toolbox50.png",alt:"Track it!"}}),t._v(" "),i("sup",{staticClass:"gt-sm"},[t._v(t._s(t.version))])]),t._v(" "),i("q-window-resize-observable",{on:{resize:t.onResizeWindow}}),t._v(" "),t.$q.platform.is.desktop&&t.isTabsVisible?i("q-tabs",{style:{maxWidth:"calc(100% - 270px)"},attrs:{color:"dark"},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},t._l(t.tabsByGroup,function(e,s){return i("q-route-tab",{key:s,attrs:{slot:"title",name:""+e,label:t.config[e].label,hide:"label",to:"/"+e},slot:"title"})})):t._e(),t._v(" "),t.$q.platform.is.mobile||t.$q.platform.is.desktop&&!t.isTabsVisible?i("q-btn",{staticStyle:{display:"flex","flex-wrap":"nowrap",width:"50%"},attrs:{flat:""}},[t.configByEntity?i("q-item",{staticStyle:{"padding-left":"0","padding-right":"0"}},[i("q-item-side",{staticStyle:{"min-width":"20px"},attrs:{icon:t.configByEntity.icon,color:"white"}}),t._v(" "),i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",attrs:{label:""}},[t._v(t._s(t.configByEntity.label))])],1),t._v(" "),i("q-item-side",{staticStyle:{"min-width":"20px","margin-left":"10px"},attrs:{right:"",icon:"mdi-menu-down",color:"white"}})],1):t._e(),t._v(" "),i("q-popover",{ref:"popoverTab",attrs:{fit:""}},[i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},t._l(t.tabsByGroup,function(e,s){return i("q-item",{key:s,attrs:{to:"/"+e}},[i("q-item",{staticStyle:{padding:"0"},on:{click:function(i){t.tabModel=e,t.$refs.popoverTab.close()}}},[i("q-item-side",{attrs:{icon:t.config[e].icon}}),t._v(" "),i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v(t._s(e))])],1)],1)],1)}))],1)],1):t._e(),t._v(" "),i("q-btn",{attrs:{small:"",flat:"",round:"",icon:"mdi-settings"},on:{click:t.settingsHandler}}),t._v(" "),i("q-btn",{staticClass:"within-iframe-hide",attrs:{small:"",flat:"",round:"",icon:"mdi-exit-to-app"},on:{click:t.confirmExitHandler}})],1)],1):t._e(),t._v(" "),i("q-layout-drawer",{attrs:{side:"right","no-swipe-open":"","no-swipe-close":"","content-class":{"bg-dark":!0}},model:{value:t.sides.right,callback:function(e){t.$set(t.sides,"right",e)},expression:"sides.right"}},[Object.keys(t.currentMessage).length?i("object-viewer",{attrs:{object:t.currentMessage},on:{close:t.hideRightHandler}}):t._e()],1),t._v(" "),i("q-page-container",{style:{background:"#333"}},[i("q-page",[i("raw-viewer",{ref:"rawViewer",attrs:{config:t.rawConfig,inverted:""}}),t._v(" "),t.configByEntity?i("router-view",{ref:"main",attrs:{limit:t.limit,isCustomer:t.isCustomer,isLoading:t.loadingFlag,isVisibleToolbar:t.isVisibleToolbar,isNeedSelect:t.isNeedSelect,config:t.configByEntity},on:{"view-data":t.viewDataHandler,"view-data-hide":function(e){t.sides.right=!1,t.currentMessage={}},"view-log-message":t.viewLogMessagesHandler}}):t._e()],1)],1)],1),t._v(" "),i("q-inner-loading",{staticStyle:{"z-index":"2001"},attrs:{visible:t.loadingFlag,dark:""}},[i("q-spinner-gears",{attrs:{size:"100px",color:"white"}})],1)],1):t._e()},[],!1,j,null,null);e.default=O.exports}});