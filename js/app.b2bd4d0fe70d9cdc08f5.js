webpackJsonp([14],{"+nwc":function(e,t){},"/daW":function(e,t){},0:function(e,t,n){e.exports=n("nplA")},"3Puz":function(e,t){},"4Th3":function(e,t){},"7YgM":function(e,t){e.exports={name:"ToolboX",version:"0.9.20",description:"ToolboX",productName:"ToolboX",cordovaId:"org.cordova.quasar.app",author:"Sergei Buntsevich <sebu@gurtam.com>",private:!0,scripts:{lint:"eslint --ext .js,.vue src",dev:'node ./build.js "dev -m pwa" "flespi"',build:'node ./build.js "build -m pwa" "flespi"',dev_local:'node ./build.js "dev -m pwa" "local"',deploy:"npm run build && rm -rf deploy && mkdir deploy && cp -R dist/pwa-mat/* misc CNAME LICENSE package.json deploy && cp README.md deploy/README.md && node_modules/git-directory-deploy/bin/git-directory-deploy.sh -ddeploy -bgh-pages -rhttps://git.gurtam.net/flespi/frontend/toolbox.git && rm -rf deploy && git push github gh-pages"},dependencies:{"flespi-io-js":"git+https://github.com/flespi-software/flespi-io-js.git",leaflet:"^1.3.3",qvirtualscroll:"git+https://github.com/flespi-software/QVirtualScroll.git",shelljs:"^0.8.2","vue-clipboard2":"0.0.8","vue-draggable-resizable":"^1.7.1","vue-i18n":"^7.8.1","vue-virtual-scroll-list":"^1.2.7"},devDependencies:{"babel-eslint":"^8.2.6",eslint:"^4.19.1","eslint-config-standard":"^11.0.0","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-import":"^2.13.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.8.0","eslint-plugin-standard":"^3.1.0","eslint-plugin-vue":"^4.7.0","git-directory-deploy":"^1.5.1","quasar-cli":"^0.15.20"},engines:{node:">= 8.9.0",npm:">= 5.6.0"},browserslist:["> 1%","last 2 versions","not ie <= 10"]}},BwlH:function(e,t){},DEN3:function(e,t){e.exports={platform:{label:"Platform",icon:"icon-flespi2-01",isDrawable:!0,logs:{vuexModuleName:"platformLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"host",width:150,display:!0,description:"Connected device's address (source) or IP address from which HTTP request was received (host)"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},channels:{label:"Channels",icon:"merge_type",acl:["protocols","channels"],isDrawable:!0,logs:{vuexModuleName:"channelsLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:400,display:!0,description:"Log event code and description"},{name:"ident",width:150,display:!0,description:"Connected device's identification string"},{name:"msgs",title:"messages",width:85,display:!0,description:"Number of messages received"},{name:"recv",title:"received",width:85,display:!0,description:"Number of bytes received"},{name:"send",title:"sent",width:85,display:!0,description:"Number of bytes sent"},{name:"host",width:150,display:!0,description:"Connected device's address (source) or IP address from which HTTP request was received (host)"},{name:"duration",width:85,display:!0,description:"Connection duration in seconds"},{name:"transport",width:85,display:!0,description:"Connected device's transport: tcp, udp, http etc"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}},messages:{vuexModuleName:"channelsMessages",actions:[{icon:"mdi-content-copy",label:"copy",classes:"",type:"copy"}],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right",needShowDate:!1},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},devices:{label:"Devices",icon:"mdi-developer-board",acl:["devices"],isDrawable:!0,logs:{vuexModuleName:"devicesLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:400,display:!0,description:"Log event code and description"},{name:"name",title:"setting",width:80,display:!0,description:"Setting name"},{name:"ident",width:150,display:!0,description:"Connected device's identification string"},{name:"msgs",title:"messages",width:85,display:!0,description:"Number of messages received"},{name:"recv",title:"received",width:85,display:!0,description:"Number of bytes received"},{name:"send",title:"sent",width:85,display:!0,description:"Number of bytes sent"},{name:"source",width:150,display:!0,description:"Connected device's address"},{name:"host",width:150,display:!0,description:"IP address from which HTTP request was received"},{name:"duration",width:85,display:!0,description:"Connection duration in seconds"},{name:"transport",width:85,display:!0,description:"Connected device's transport: tcp, udp, http etc"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}},messages:{vuexModuleName:"devicesMessages",actions:[{icon:"mdi-content-copy",label:"copy",classes:"",type:"copy"}],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},streams:{label:"Streams",icon:"mdi-call-split",acl:["streams"],isDrawable:!0,logs:{vuexModuleName:"streamsLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"messages",width:100,display:!0,description:"Number of messages has sent"},{name:"host",width:150,display:!0,description:"IP address from which HTTP request was received"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},modems:{label:"Modems",icon:"router",acl:["modems"],isDrawable:!0,logs:{vuexModuleName:"modemsLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"address",width:100,display:!0,description:"SMS source address or SMS destination address"},{name:"type",width:100,display:!0,description:"hex or text"},{name:"text",width:150,display:!0,description:"textual SMS contents"},{name:"hex",width:150,display:!0,description:"hex representation of binary SMS contents"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},containers:{label:"Containers",icon:"featured_play_list",acl:["containers"],isDrawable:!0,logs:{vuexModuleName:"containersLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"host",width:80,display:!0,description:"IP address from which HTTP request was received"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},abques:{label:"Abques",icon:"reorder",acl:["abques"],isDrawable:!0,logs:{vuexModuleName:"abquesLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"host",width:80,display:!0,description:"IP address from which HTTP request was received"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},mqtt:{label:"MQTT",icon:"mdi-access-point-network",acl:["mqtt"],isDrawable:!0,logs:{vuexModuleName:"mqttLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"client_id",width:150,display:!0,description:"session client id"},{name:"published",width:80,display:!0,description:"amount of messages published by session"},{name:"received",width:80,display:!0,description:"amount of messages received by session"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},cdns:{label:"CDNS",icon:"mdi-harddisk",acl:["cdns"],isDrawable:!0,logs:{vuexModuleName:"cdnsLogs",cols:[{name:"timestamp",width:165,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"host",width:150,display:!0,description:"IP address from which HTTP request was received"},{name:"mime",width:80,display:!0,description:"mime type of file"},{name:"name",width:250,display:!0,description:"name of file"},{name:"size",width:80,display:!0,description:""}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}}}},JsEP:function(e,t){},N12Q:function(e,t){},R58i:function(e,t){},VOGp:function(e,t,n){e.exports=n.p+"img/toolbox.1da4d62.png"},"k+C4":function(e,t,n){var o={"./abques/Index":["tTYa",12],"./cdns/Index":["XKIo",11],"./channels/Index":["dJK8",3],"./channels/messages/Index":["rO7b",4],"./containers/Index":["VXJc",10],"./devices/Index":["NEZ1",2],"./devices/messages/Index":["q0Qa",5],"./logs/Index":["mlKh",13],"./modems/Index":["jVoy",9],"./mqtt/Index":["yAXA",8],"./platform/Index":["Gm73",7],"./streams/Index":["0uPY",6]};function i(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}i.keys=function(){return Object.keys(o)},i.id="k+C4",e.exports=i},nplA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),i=n.n(o),s=(n("30VO"),n("/5sW")),r=n("7109");s.default.use(r.R,{components:{QLayout:r.q,QLayoutHeader:r.s,QLayoutDrawer:r.r,QPageContainer:r.y,QPage:r.x,QToolbar:r.L,QToolbarTitle:r.M,QBtn:r.e,QIcon:r.j,QList:r.t,QListHeader:r.u,QItem:r.m,QItemMain:r.n,QItemSide:r.o,QItemTile:r.p,QInput:r.l,QProgress:r.A,QWindowResizeObservable:r.O,QResizeObservable:r.B,QTabs:r.J,QTab:r.H,QTabPane:r.I,QRouteTab:r.C,QPopover:r.z,QInnerLoading:r.k,QSpinnerGears:r.G,QModal:r.v,QModalLayout:r.w,QTooltip:r.N,QSelect:r.E,QChip:r.g,QResizeObservable:r.B,QSlider:r.F,QToggle:r.K,QDatetime:r.h,QSearch:r.D,QSlider:r.F,QField:r.i,QCheckbox:r.f},plugins:{Notify:r.d,Cookies:r.a,Dialog:r.b,LocalStorage:r.c}});n("L4dm"),n("hAPP"),n("59Iv"),n("3Puz"),n("N12Q");var a={name:"offline",data:function(){return{intervalId:0}},created:function(){var e=this;this.intervalId=setInterval(function(){e.$store.dispatch("checkConnection")},5e3)}},d=n("XyMi");var c=function(e){n("4Th3")},l={name:"App",components:{Offline:Object(d.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$store.state.offline||e.$store.state.socketOffline?n("div",{staticClass:"offline-page window-height window-width bg-light column items-center no-wrap"},[n("div",{staticClass:"offline-back"},[n("div",{staticClass:"offline-code"}),e._v(" "),n("div",{staticClass:"offline-line"},e._l(Array(20),function(t){return n("span",{key:t},[e._v("offline")])}))])]):e._e()},[],!1,c,null,null).exports}};var u=function(e){n("/daW")},p=Object(d.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view"),this._v(" "),t("offline")],1)},[],!1,u,null,null).exports,m=n("/ocq"),f=n("Gu7T"),h=n.n(f),g=n("fZjL"),v=n.n(g),w=n("DEN3"),b=n.n(w);var y,k=[{path:"/",component:function(){return n.e(0).then(n.bind(null,"yoYR"))},children:[].concat(h()((y=b.a,v()(y).reduce(function(e,t){return e.push({path:t,component:function(){return n("k+C4")("./"+t+"/Index")},meta:{moduleName:t}}),e.push({path:t+"/:id",component:function(){return n("k+C4")("./"+t+"/Index")},meta:{moduleName:t}}),e},[]))),[{path:"view/:type/:id",name:"module",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}}])},{path:"/token/:token/type/:type/id/:id",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}},{path:"/token/:token/group/:group",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}},{path:"/token/:token/type/:type/id/:id/fullscreen/:fullscreen",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}},{path:"/token/:token/type/:type/id/:id/fullscreen/:fullscreen/noselect/:noselect",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}},{path:"/login",component:function(){return n.e(1).then(n.bind(null,"P7ry"))},name:"simpleLogin"},{path:"/login/:token",component:function(){return n.e(1).then(n.bind(null,"P7ry"))}}];s.default.use(m.a);var S,x,I,C,L,T=new m.a({mode:"hash",base:"/",scrollBehavior:function(){return{y:0}},routes:k}),P=n("mvHQ"),M=n.n(P),Q=n("NYxO"),_=n("woOf"),E=n.n(_),D=n("Xxa5"),q=n.n(D),N=n("exGp"),F=n.n(N),O=(S=F()(q.a.mark(function e(t,n){var o,i,r,a,d,c=t.state,l=t.commit;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=44;break}o="",i={},e.t0=n,e.next="devices"===e.t0?5:"channels"===e.t0?8:"streams"===e.t0?11:"modems"===e.t0?14:"containers"===e.t0?17:"abques"===e.t0?20:"cdns"===e.t0?23:26;break;case 5:return o="/gw/devices/all",i={fields:"id,name,ident"},e.abrupt("break",26);case 8:return o="/gw/channels/all",i={fields:"id,name,uri,protocol_name"},e.abrupt("break",26);case 11:return o="/gw/streams/all",i={fields:"id,name,configuration"},e.abrupt("break",26);case 14:return o="/gw/modems/all",i={fields:"id,name,configuration"},e.abrupt("break",26);case 17:return o="/storage/containers/all",i={fields:"id,name"},e.abrupt("break",26);case 20:return o="/storage/abques/all",i={fields:"id,name"},e.abrupt("break",26);case 23:return o="/storage/cdns/all",i={fields:"id,name"},e.abrupt("break",26);case 26:if(!c.token){e.next=44;break}return e.prev=27,void 0!==c.isLoading&&(c.isLoading=!0),e.next=31,s.default.connector.http.get(o,{params:i});case 31:r=e.sent,a=r.data,r.errors&&r.errors.forEach(function(e){l("addError",e.reason)}),d=a.result,l("setItems",d),void 0!==c.isLoading&&(c.isLoading=!1),e.next=44;break;case 39:e.prev=39,e.t1=e.catch(27),l("reqFailed",e.t1),l("setItems",[]),void 0!==c.isLoading&&(c.isLoading=!1);case 44:case"end":return e.stop()}},e,this,[[27,39]])})),function(e,t){return S.apply(this,arguments)}),j=(x=F()(q.a.mark(function e(t,n){var o,i,a,d,c,l=t.state,u=t.commit;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=41;break}o={fields:"item_data",count:2e3,reverse:!0},e.t0=n,e.next="devices"===e.t0?5:"channels"===e.t0?7:"streams"===e.t0?9:"modems"===e.t0?11:"containers"===e.t0?13:"abques"===e.t0?15:"cdns"===e.t0?17:19;break;case 5:return o=E()(o,{filter:"event_origin=gw/devices/*,event_code=3"}),e.abrupt("break",19);case 7:return o=E()(o,{filter:"event_origin=gw/channels/*,event_code=3"}),e.abrupt("break",19);case 9:return o=E()(o,{filter:"event_origin=gw/streams/*,event_code=3"}),e.abrupt("break",19);case 11:return o=E()(o,{filter:"event_origin=gw/modems/*,event_code=3"}),e.abrupt("break",19);case 13:return o=E()(o,{filter:"event_origin=storage/containers/*,event_code=3"}),e.abrupt("break",19);case 15:return o=E()(o,{filter:"event_origin=storage/abques/*,event_code=3"}),e.abrupt("break",19);case 17:return o=E()(o,{filter:"event_origin=storage/cdns/*,event_code=3"}),e.abrupt("break",19);case 19:if(!l.token){e.next=41;break}if(e.prev=20,void 0!==l.isLoading&&(l.isLoading=!0),i=[],1!==l.tokenInfo.access.type){e.next=30;break}return e.next=26,s.default.connector.platform.getCustomerLogs({data:M()(o)});case 26:a=e.sent,(d=a.data).errors&&d.errors.forEach(function(e){u("addError",e.reason)}),i=d.result&&d.result.length?d.result.reverse():[];case 30:i.length||r.d.create({message:"Deleted "+n+" was not found.",timeout:1e3}),c=[].concat(h()(l.items),h()(i.map(function(e){var t=e.item_data;return t.deleted=!0,t}))),u("setItems",c),void 0!==l.isLoading&&(l.isLoading=!1),e.next=41;break;case 36:e.prev=36,e.t1=e.catch(20),u("reqFailed",e.t1),u("setItems",[]),void 0!==l.isLoading&&(l.isLoading=!1);case 41:case"end":return e.stop()}},e,this,[[20,36]])})),function(e,t){return x.apply(this,arguments)}),A={getItems:O,checkConnection:(I=F()(q.a.mark(function e(t){var n=t.state,o=t.commit;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.default.connector.http.external.get("./statics/icons/favicon-16x16.png?_="+(new Date).getTime());case 3:200===e.sent.status&&n.offline&&o("setOfflineFlag",!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n.offline||o("setOfflineFlag",!0);case 11:case"end":return e.stop()}},e,this,[[0,7]])})),function(e){return I.apply(this,arguments)}),getTokenInfo:(C=F()(q.a.mark(function e(t,n){var o,i,r,a=t.state,d=t.commit;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.default.connector.auth.getInfo();case 3:(o=e.sent).data&&o.data.errors&&o.data.errors.forEach(function(e){d("addError",e.reason)}),i=o.data.result[0],d("setTokenInfo",i),e.t0=i.access.type,e.next=0===e.t0?10:1===e.t0?12:2===e.t0?13:17;break;case 10:return s.default.set(a.config.platform,"isDrawable",!1),e.abrupt("break",17);case 12:return e.abrupt("break",17);case 13:return s.default.set(a.config.platform,"isDrawable",!1),r=i.access.acl.reduce(function(e,t){if("gw"===t.uri)return t.methods.includes("GET")?[].concat(h()(e),["channels","devices","streams","modems","protocols"]):e;if("storage"===t.uri)return t.methods.includes("GET")?[].concat(h()(e),["containers","abques","cdns"]):e;var n=t.uri.split("/")[1]||t.uri.split("/")[0];return!e.includes(n)&&(!t.methods||t.methods&&t.methods.includes("GET"))&&e.push(n),e},[]),v()(a.config).forEach(function(e){var t=a.config[e];if(!t.acl)return!1;t.acl.reduce(function(e,t){return e&&r.includes(t)},!0)||(a.config[e].isDrawable=!1)}),e.abrupt("break",17);case 17:e.next=24;break;case 19:e.prev=19,e.t1=e.catch(0),d("setToken",""),d("reqFailed",e.t1);case 24:case"end":return e.stop()}},e,this,[[0,19]])})),function(e,t){return C.apply(this,arguments)}),getLoginProviders:(L=F()(q.a.mark(function e(t){var n,o,i=t.commit;t.state;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.default.connector.http.auth.oauth.providers.get();case 3:n=e.sent,(o=n.data.result[0]).email=s.default.connector.httpConfig.server+(s.default.connector.httpConfig.port?":"+s.default.connector.httpConfig.port:"")+"/#/login/",i("setLoginProviders",o),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),i("reqFailed",e.t0);case 13:case"end":return e.stop()}},e,this,[[0,9]])})),function(e){return L.apply(this,arguments)}),getDeleted:j};function R(e,t){s.default.set(e,"offline",t)}function X(e){var t=r.a.get("X-Flespi-Token"),n=r.c.get.item("X-Flespi-Token");t&&n&&t===n&&r.a.remove("X-Flespi-Token"),r.c.remove("X-Flespi-Token"),s.default.connector.token="",s.default.set(e,"token",""),G(e),H(e,b.a)}function H(e,t){s.default.set(e,"config",t)}function V(e,t){r.d.create({type:"negative",icon:"warning",message:""+t,timeout:1e3}),e.newNotificationCounter++,e.errors.push(t)}function Y(e){e.errors=[]}function G(e){e.tokenInfo={}}var z={reqStart:function(e){},setItems:function(e,t){s.default.set(e,"items",t)},reqFailed:function(e,t){if(t.response&&t.response.status)switch(t.response.status){case 0:R(e,!0),s.default.set(e,"token","");break;case 401:X(e);break;default:t.response.data&&t.response.data.errors&&t.response.data.errors.length&&t.response.data.errors.forEach(function(t){V(e,t.reason)})}else V(e,t.message)},setToken:function(e,t){var n=t.replace("FlespiToken ","");if(n===e.token)return!1;t&&n.match(/^[a-z0-9]+$/i)?r.c.set("X-Flespi-Token",n):(n="",X(e)),s.default.connector.token="FlespiToken "+n,s.default.set(e,"token",n),Y(e)},clearToken:X,setOfflineFlag:R,clearItems:function(e){s.default.set(e,"items",[])},setConfig:H,addError:V,clearErrors:Y,setTokenInfo:function(e,t){s.default.set(e,"tokenInfo",t)},clearTokenInfo:G,setSocketOffline:function(e,t){s.default.set(e,"socketOffline",t)},clearNotificationCounter:function(e){e.newNotificationCounter=0},setLoginProviders:function(e,t){s.default.set(e,"providers",t)}};s.default.use(Q.a);var B={providers:{},token:"",items:[],offline:!1,socketOffline:!1,isLoading:!1,config:JSON.parse(M()(b.a)),errors:[],tokenInfo:{},newNotificationCounter:0},J=new Q.a.Store({state:B,actions:A,mutations:z}),$=n("TXmL"),K={en:{failed:"Action failed",success:"Action was successful"}},W=n("LarL"),Z=n.n(W),U=n("7YgM"),ee={socketConfig:{clientId:"toolbox-"+U.version+"-"+Math.random().toString(16).substr(2,8),mqttSettings:{protocolVersion:5}}};-1===window.location.host.indexOf("localhost:9004")&&-1===window.location.host.indexOf("localhost:9005")&&-1===window.location.host.indexOf("localhost:7004")||(ee={httpConfig:{server:"https://localhost",port:9005},socketConfig:{server:"wss://localhost:9017",clientId:"toolbox-"+U.version+"-dev-"+Math.random().toString(16).substr(2,8),mqttSettings:{protocolVersion:5}}});var te=n("wvfG"),ne=n.n(te),oe=(n("BwlH"),n("v5o6")),ie=n.n(oe);s.default.config.productionTip=!1;var se=i()({el:"#q-app",router:T,store:J},p),re=[];re.push(function(e){var t=e.app;e.Vue.use($.a),t.i18n=new $.a({locale:"en",fallbackLocale:"en",messages:K})}),re.push(function(e){var t=e.Vue,n=e.store;t.config.productionTip=!1,t.use(Z.a,ee),t.connector.socket.on("error",function(e){n.commit("reqFailed",e)}),window&&window.addEventListener("beforeunload",function(){t.connector.socket.close(!0)})}),re.push(function(e){e.Vue.use(ne.a)}),re.push(function(){}),re.forEach(function(e){return e({app:se,router:T,store:J,Vue:s.default})}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){ie.a.attach(document.body)},!1),new s.default(se)}},[0]);