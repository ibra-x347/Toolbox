(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1d85ebbb"],{"33b4":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("q-resize-observer",{on:{resize:e.onResize}}),i("q-toolbar",{staticClass:"justify-between q-py-none bg-grey-9"},[i("div",{staticStyle:{"max-width":"75%"}},[i("q-btn",{staticClass:"q-mr-sm",class:{"q-px-none":e.$q.platform.is.mobile},attrs:{icon:"mdi-arrow-left",flat:"",color:"white"},on:{click:e.goBack}}),i("div",{staticClass:"q-mr-sm",staticStyle:{display:"inline-flex"},style:{maxWidth:e.$q.platform.is.mobile?"35%":"50%"}},[i("q-select",{ref:"itemDeviceSelect",staticClass:"items__select",class:{"items__select--no-selected":!e.active},attrs:{value:e.active,options:e.filteredDevices,filled:"",label:e.active?"Device":"SELECT DEVICE",dark:"","hide-bottom-space":"",dense:"",color:"white",disable:!e.isNeedSelect||!0,"virtual-scroll-item-size":48,"virtual-scroll-slice-size":6,"virtual-scroll-sticky-size-start":48,"popup-content-class":"items__popup","popup-content-style":{height:48*(e.filteredDevices.length>6?6:e.filteredDevices.length)+48+(e.filteredDevices.length?0:34)+"px"}},on:{filter:e.filterSelectItems},scopedSlots:e._u([{key:"no-option",fn:function(){return[i("div",{staticStyle:{"min-height":"77px"}},[i("q-input",{staticClass:"q-ma-xs",attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemDeviceSelect.filter(t)}},model:{value:e.deviceFilter,callback:function(t){e.deviceFilter=t},expression:"deviceFilter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1),i("div",{staticClass:"text-center"},[e._v("No results")])],1)]},proxy:!0},{key:"selected-item",fn:function(t){return[i("q-item",e._g(e._b({staticClass:"q-pa-none",staticStyle:{"min-height":"20px","margin-top":"2px","max-width":"100%"}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-none text-white",attrs:{header:""}},[e._v(e._s(e.selectedDevice.name||"<noname>"))]),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-white ellipsis",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(e.selectedDevice.configuration&&e.selectedDevice.configuration.ident?e.selectedDevice.configuration.ident:"<no ident>"))])])],1),i("q-item-section",{staticClass:"text-white",attrs:{side:""}},[e.selectedDevice.deleted?i("q-item-label",{staticClass:"q-pa-none text-right"},[i("small",{staticClass:"cheap-modifier"},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right"},[i("small",[e._v("#"+e._s(e.selectedDevice.id))])])],1)],1)]}},{key:"option",fn:function(t){return[i("q-item",e._g(e._b({staticClass:"q-pa-xs",class:{"text-grey-8":t.opt.deleted},attrs:{clickable:""},on:{click:function(i){e.active=t.opt.id,e.$emit("view-data-hide")}}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-xs",attrs:{header:""}},[e._v(e._s(t.opt.name||"<noname>"))]),i("q-item-label",{staticClass:"q-pa-none q-mt-none",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(t.opt.configuration&&t.opt.configuration.ident?t.opt.configuration.ident:"<no ident>"))])])],1),i("q-item-section",{attrs:{side:""}},[t.opt.deleted?i("q-item-label",{staticClass:"q-pa-xs text-right"},[i("small",{staticClass:"cheap-modifier cheap-modifier--item"},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right"},[i("small",[e._v("#"+e._s(t.opt.id))])])],1)],1)]}}])},[i("div",{staticClass:"bg-dark q-pa-xs select__filter",attrs:{slot:"before-options"},slot:"before-options"},[i("q-input",{attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemDeviceSelect.filter(t)}},model:{value:e.deviceFilter,callback:function(t){e.deviceFilter=t},expression:"deviceFilter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1)],1),i("q-icon",{attrs:{slot:"prepend",name:"mdi-developer-board",color:"white"},slot:"prepend"})],1)],1),i("div",{staticStyle:{display:"inline-flex"},style:{maxWidth:e.$q.platform.is.mobile?"35%":"50%"}},[i("q-select",{ref:"itemCalcSelect",staticClass:"items__select",class:{"items__select--no-selected":!e.activeCalcId},attrs:{value:e.activeCalcId,options:e.filteredCalcs,filled:"",clearable:"",label:e.activeCalcId?"Calc":"SELECT CALC",dark:"","hide-bottom-space":"",dense:"",color:"white","virtual-scroll-item-size":48,"virtual-scroll-slice-size":6,"virtual-scroll-sticky-size-start":48,"popup-content-class":"items__popup","popup-content-style":{height:48*(e.filteredCalcs.length>6?6:e.filteredCalcs.length)+48+(e.filteredCalcs.length?0:34)+"px"}},on:{clear:function(t){e.clearActiveCalc(),e.$emit("view-data-hide")},filter:e.filterSelectItems},scopedSlots:e._u([{key:"no-option",fn:function(){return[i("div",{staticStyle:{"min-height":"77px"}},[i("q-input",{staticClass:"q-ma-xs",attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemCalcSelect.filter(t)}},model:{value:e.calcFilter,callback:function(t){e.calcFilter=t},expression:"calcFilter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1),i("div",{staticClass:"text-center"},[e._v("No results")])],1)]},proxy:!0},{key:"selected-item",fn:function(t){return[i("q-item",e._g(e._b({staticClass:"q-pa-none",staticStyle:{"min-height":"20px","margin-top":"2px","max-width":"100%"}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-none text-white",attrs:{header:""}},[e._v(e._s(e.selectedCalc.name||"<noname>"))])],1),i("q-item-section",{staticClass:"text-white",attrs:{side:""}},[e.selectedCalc.deleted?i("q-item-label",{staticClass:"q-pa-none text-right"},[i("small",{staticClass:"cheap-modifier"},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right"},[i("small",[e._v("#"+e._s(e.selectedCalc.id))])])],1)],1)]}},{key:"option",fn:function(t){return[i("q-item",e._g(e._b({staticClass:"q-pa-xs",class:{"text-grey-8":t.opt.deleted},attrs:{clickable:""},on:{click:function(i){e.setActiveCalc(t.opt.id),e.$emit("view-data-hide")}}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-xs",attrs:{header:""}},[e._v(e._s(t.opt.name||"<noname>"))])],1),i("q-item-section",{attrs:{side:""}},[t.opt.deleted?i("q-item-label",{staticClass:"q-pa-xs text-right"},[i("small",{staticClass:"cheap-modifier cheap-modifier--item"},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right"},[i("small",[e._v("#"+e._s(t.opt.id))])])],1)],1)]}}])},[i("div",{staticClass:"bg-dark q-pa-xs select__filter",attrs:{slot:"before-options"},slot:"before-options"},[i("q-input",{attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemCalcSelect.filter(t)}},model:{value:e.calcFilter,callback:function(t){e.calcFilter=t},expression:"calcFilter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1)],1),i("q-icon",{attrs:{slot:"prepend",name:"mdi-calculator-variant",color:"white"},slot:"prepend"})],1)],1)],1)]),+e.size[1]&&e.active?i("div",[e.activeCalcId&&e.isInit?i("intervals",{ref:"intervals",style:{minHeight:"calc("+e.size[1]+"vh - "+(+e.size[0]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative",maxWidth:e.mapMinimizedOptions.value&&e.mapMinimizedOptions.type&&"top"===e.mapMinimizedOptions.type?"66%":""},attrs:{mode:e.mode,activeId:e.activeCalcId,item:e.selectedCalc,activeDeviceId:e.active,isEnabled:!!+e.size[1],limit:0,config:e.config.intervals},on:{"view-data":e.viewDataHandler,"on-map":e.onMapHandler}}):e.activeCalcId?e._e():i("div",{staticClass:"text-grey text-center q-pt-lg",staticStyle:{"font-size":"2.5rem"},style:{minHeight:"calc("+e.size[1]+"vh - "+(+e.size[0]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"}},[e._v("\n      Select calc\n    ")])],1):e._e(),e.active&&e.activeCalcId&&e.hasRouteIntervals&&e.$q.platform.is.desktop&&e.isVisibleMap?i("map-frame",{ref:"map",attrs:{device:e.selectedDevice,siblingHeight:e.siblingHeight},on:{"map:close":function(t){e.isVisibleMap=!1},"map:minimize":e.mapMinimizeHandler}}):e._e()],1)},n=[],a=(i("8e6e"),i("8a81"),i("456d"),i("c5f6"),i("55dd"),i("7f7f"),i("ac6a"),i("cadf"),i("06db"),i("8615"),i("c47a")),o=i.n(a),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("virtual-scroll-list",{ref:"scrollList",attrs:{cols:e.cols,actions:e.actions,items:e.messages,dateRange:[e.begin,e.end],viewConfig:e.viewConfig,colsConfigurator:"toolbar",mode:0,i18n:e.i18n,filter:e.filter,theme:e.theme,title:"Intervals"},on:{"change:filter":e.filterChangeHandler,"change:date-range":e.dateRangeChangeHandler,"update:cols":e.updateColsHandler},scopedSlots:e._u([{key:"items",fn:function(t){var s=t.item,n=t.index,a=t.actions,o=t.cols,c=t.etcVisible,r=t.actionsVisible,l=t.itemHeight,m=t.rowWidth;return i("messages-list-item",{key:""+JSON.stringify(s)+n,attrs:{item:s,index:n,actions:a,cols:o,itemHeight:l,rowWidth:m,etcVisible:c,actionsVisible:r,selected:e.selected.includes(n)},on:{action:e.actionHandler,"item-click":e.viewMessagesHandler}})}}])})],1)},r=[],l=i("967e"),m=i.n(l),d=(i("96cf"),i("de45")),h=i("2b0e"),u=i("bd4c"),p=i("ef95"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px"}},[e.item["__connectionStatus"]||e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",color:"#000",fontWeight:"bold",backgroundColor:e.item["x-flespi-filter-prev"]?"#819002":"#ccb300",overflow:"hidden"}},[i("span",{staticClass:"text-uppercase text-white",staticStyle:{padding:"0 5px"}},[e._v(e._s(e.item["x-flespi-filter-next"]?'Next results will be filtered by: "'+e.item["x-flespi-filter-next"]+'"':'Filter removed: "'+e.item["x-flespi-filter-prev"]+'"'))])]):i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",border:"solid 1px #000",color:"#000",fontWeight:"bold",backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0",backgroundImage:"url(./statics/police.png)",overflow:"hidden",opacity:".7"},attrs:{title:e.date.formatDate(1e3*e.item.timestamp,"DD/MM/YYYY HH:mm:ss")}},e._l(Array(10),(function(t){return i("span",{key:t,staticClass:"text-uppercase",staticStyle:{padding:"0 5px","margin-left":"150px"},style:{backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0"}},[e._v("\n    "+e._s(e.item["__connectionStatus"])+"\n  ")])})),0):i("div",{staticClass:"cursor-pointer",class:[e.item.__status?"missed-items":""],style:{height:e.itemHeight+"px",width:e.rowWidth+"px",backgroundColor:e.selected?"rgba(255,255,255,0.7)":"",color:e.selected?"#333":"",borderBottom:e.item.delimiter?"solid 1px #f40":""},on:{click:function(t){return e.itemClickHandler(e.index,e.clearItem)}}},[e.actionsVisible?i("span",{staticClass:"list__item item_actions"},e._l(e.actions,(function(t,s){return i("q-icon",{key:s,staticClass:"cursor-pointer on-left",class:t.classes,attrs:{name:t.icon},nativeOn:{click:function(i){return i.stopPropagation(),e.clickHandler(e.index,t.type,e.item)}}},[i("q-tooltip",[e._v(e._s(t.label))])],1)})),1):e._e(),e._l(e.cols,(function(t,s){var n;return i("span",{key:t.name+s,staticClass:"list__item",class:(n={},n["item_"+s]=!0,n),style:{color:e.item["x-flespi-filter-fields"]&&e.item["x-flespi-filter-fields"].includes(t.name)?"#4caf50":""},attrs:{title:e.values[t.name].value}},[e._v("\n    "+e._s(e.values[t.name].value)+"\n  ")])})),e.etcVisible?i("span",{staticClass:"list__item item_etc"},[e._v("\n    "+e._s(e.values.etc.value||"*Empty*")+"\n  ")]):e._e()],2)])},v=[],g=(i("4917"),i("8993")),b=i.n(g),x=(i("28a5"),{props:["item","index","actions","cols","itemHeight","etcVisible","rowWidth","actionsVisible","selected"],data:function(){return{date:u["b"]}},computed:{values:function(){var e=this,t={};return t=this.cols.length?this.cols.reduce((function(e,t,i,s){return e[t.name]={value:null},t.type&&(e[t.name].type=t.type),i===s.length-1&&(e.etc={value:""}),e}),{}):{etc:{value:""}},Object.keys(this.item).forEach((function(i){if(-1!==i.indexOf("#")){var s=i.split("#"),n=s[0],a=s[1];if(t[n]){if(t[n].value){if("object"!==b()(t[n].value)){var c=t[n].value;t[n].value=o()({},a-1,c)}}else t[n].value={};t[n].value[a]=JSON.stringify(e.item[i])}else t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}else if(t[i]){var r=e.item[i];(i.match(/timestamp$/)||"begin"===i||"end"===i)&&(r=u["b"].formatDate(1e3*r,"DD/MM/YYYY HH:mm:ss")),-1!==i.indexOf("image.bin.")&&(r="<binary image>"),t[i].value="string"===typeof r?r:JSON.stringify(r)}else-1!==i.indexOf("image.bin.")?t.etc.value+="".concat(i,": <binary image>"):t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")})),Object.keys(t).forEach((function(e){if("object"===b()(t[e].value)&&t[e].value)if(t[e].value instanceof Array){var i=t[e].value.reduce((function(e,t,i,s){return e+=t,i!==s.length-1&&(e+=", "),e}),"");t[e].value=i}else if(t[e].value instanceof Object){var s=Object.keys(t[e].value).reduce((function(i,s,n,a){return i+="".concat(s,": ").concat(t[e].value[s]),n!==a.length-1&&(i+=", "),i}),"");t[e].value=s}})),t},clearItem:function(){var e=this;return Object.keys(this.item).reduce((function(t,i){return t[i]=e.item[i],t}),{})}},methods:{clickHandler:function(e,t,i){this.$emit("action",{index:e,type:t,content:i})},itemClickHandler:function(e,t){this.$emit("item-click",{index:e,content:t})}}}),w=x,C=(i("e439"),i("2877")),$=Object(C["a"])(w,f,v,!1,null,null,null),y=$.exports,z={props:["item","activeId","activeDeviceId","limit","config"],data:function(){return{theme:this.config.theme,i18n:{},viewConfig:this.config.viewConfig,moduleName:this.config.vuexModuleName}},computed:{actions:function(){var e=this.config.actions,t=[e[0]],i=this.getRouteFields();return i&&i.length&&this.$q.platform.is.desktop&&(t=e),t},messages:{get:function(){var e=this.$store.state[this.moduleName].messages;return e=Object.values(e),this.setTranslate(e),e.sort((function(e,t){return e.begin-t.begin})),this.normalizeSelected(e),e},set:function(e){this.$store.commit("".concat(this.moduleName,"/setMessages"),e)}},active:{get:function(){return this.$store.state[this.moduleName].active},set:function(e){return m.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling")));case 2:return this.$store.commit("".concat(this.moduleName,"/setActive"),e),this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/getCols"),this.item.counters),t.next=7,m.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/initTime")));case 7:return t.next=9,m.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/get")));case 9:this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 10:case"end":return t.stop()}}),null,this)}},activeDevice:{get:function(){return this.$store.state[this.moduleName].activeDevice},set:function(e){return m.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling")));case 2:return this.$store.commit("".concat(this.moduleName,"/setActiveDevice"),e),this.$store.commit("".concat(this.moduleName,"/clearMessages")),t.next=6,m.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/initTime")));case 6:return t.next=8,m.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/get")));case 8:this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 9:case"end":return t.stop()}}),null,this)}},cols:{get:function(){return this.$store.state[this.moduleName].cols},set:function(e){this.$store.commit("".concat(this.moduleName,"/updateCols"),e)}},filter:{get:function(){return this.$store.state[this.moduleName].filter},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFilter"),e):this.$store.commit("".concat(this.moduleName,"/setFilter"),"")}},begin:{get:function(){return this.$store.state[this.moduleName].begin},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setBegin"),e):this.$store.commit("".concat(this.moduleName,"/setBegin"),0)}},end:{get:function(){return this.$store.state[this.moduleName].end},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setEnd"),e):this.$store.commit("".concat(this.moduleName,"/setEnd"),0)}},reverse:{get:function(){return this.$store.state[this.moduleName].reverse||!1},set:function(e){this.$store.commit("".concat(this.moduleName,"/setReverse"),e)}},currentLimit:{get:function(){return this.$store.state[this.moduleName].limit},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setLimit"),e):this.$store.commit("".concat(this.moduleName,"/setLimit"),0)}},selected:{get:function(){var e=this.$store.state[this.moduleName].selected;return e&&!e.length&&this.$emit("view-data",null),e},set:function(e){this.$store.commit("".concat(this.moduleName,"/setSelected"),e)}},routesFileds:function(){return this.getRouteFields()}},methods:{resetParams:function(){this.$refs.scrollList.resetParams()},filterChangeHandler:function(e){this.filter!==e&&(this.filter=e,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/get")))},getRouteFields:function(){return this.item.counters&&this.item.counters.filter((function(e){return"route"===e.type}))},setTranslate:function(e){this.i18n.from=e.length?"Previous batch until ".concat(u["b"].formatDate(1e3*e[0].timestamp,"HH:mm:ss")):"Prev",this.i18n.to=e.length?"Next batch from ".concat(u["b"].formatDate(1e3*e[e.length-1].timestamp,"HH:mm:ss")):"Next"},updateColsHandler:function(e){this.cols=e},dateRangeChangeHandler:function(e){var t=e[0],i=e[1];if(this.begin===t&&this.end===i)return!1;this.begin=t,this.end=i,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/get"))},actionHandler:function(e){var t=e.index,i=e.type,s=e.content;switch(i){case"view":this.viewMessagesHandler({index:t,content:s});break;case"map":this.onMapHandler({index:t,content:s});break;case"copy":this.copyMessageHandler({index:t,content:s});break}},viewMessagesHandler:function(e){var t=e.index,i=e.content;this.selected=[t],this.$emit("view-data",i)},onMapHandler:function(e){var t=this,i=(e.index,e.content),s=Object.keys(i).reduce((function(e,s){return t.routesFileds.filter((function(e){return e.name===s})).length&&e.push(i[s]),e}),[]);this.$emit("on-map",s)},copyMessageHandler:function(e){var t=this,i=(e.index,e.content);this.$copyText(JSON.stringify(i)).then((function(e){t.$q.notify({type:"positive",icon:"content_copy",message:"Message copied",timeout:1e3})}),(function(e){t.$q.notify({type:"negative",icon:"content_copy",message:"Error coping messages",timeout:1e3})}))},unselect:function(){this.selected.length&&(this.selected=[])},normalizeSelected:function(e){if(this.selected&&this.selected.length){var t=this.selected[0],i=e[t];this.viewMessagesHandler({index:t,content:i})}}},watch:{activeId:function(e){this.active=e},activeDeviceId:function(e){this.activeDevice=e},limit:function(e){this.currentLimit=e}},created:function(){var e=this;this.$store.state[this.moduleName]?this.$store.commit("".concat(this.moduleName,"/clear")):this.$store.registerModule(this.moduleName,Object(d["e"])({Vue:h["default"],LocalStorage:this.$q.localStorage,name:this.moduleName,errorHandler:function(t){e.$store.commit("reqFailed",t)},filterHandler:this.filterMessages})),this.currentLimit=this.limit,this.activeId&&(this.$store.commit("".concat(this.moduleName,"/setActive"),this.activeId),this.$store.dispatch("".concat(this.moduleName,"/getCols"),this.item.counters)),this.activeDeviceId&&this.$store.commit("".concat(this.moduleName,"/setActiveDevice"),this.activeDeviceId),this.$store.dispatch("".concat(this.moduleName,"/initTime")).then((function(){e.$store.dispatch("".concat(e.moduleName,"/get")),e.$store.dispatch("".concat(e.moduleName,"/pollingGet"))})),this.offlineHandler=h["default"].connector.socket.on("offline",(function(){e.$store.commit("".concat(e.moduleName,"/setOffline"),1===e.mode)})),this.connectHandler=h["default"].connector.socket.on("connect",(function(){e.$store.state[e.moduleName].offline&&e.$store.commit("".concat(e.moduleName,"/setReconnected"),1===e.mode)}))},beforeDestroy:function(){void 0!==this.offlineHandler&&h["default"].connector.socket.off("offline",this.offlineHandler),void 0!==this.connectHandler&&h["default"].connector.socket.off("connect",this.connectHandler),this.$store.commit("".concat(this.moduleName,"/clear"))},mixins:[p["a"]],components:{VirtualScrollList:d["a"],MessagesListItem:y}},M=z,_=Object(C["a"])(M,c,r,!1,null,null,null),q=_.exports,H=i("2f62"),k=i("286e"),N=function(){var e,t=this,i=t.$createElement,s=t._self._c||i;return s("vue-draggable-resizable",{ref:"dragResize",staticClass:"map-component__wrapper",class:[t.isMapMinimized||t.isMapMaximized?"map-component--minimized":""],style:t.wrapperStyles,attrs:{active:!0,x:t.startX,y:t.startY,w:t.width,h:t.height,minw:100,minh:100,parent:!0},on:{resizing:t.mapResizeHandler,dragging:t.draggingHandler}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMapMinimized&&!t.isMapMaximized,expression:"!isMapMinimized && !isMapMaximized"}],staticClass:"map-container__header",staticStyle:{"padding-right":"1px","padding-top":"3px"},style:{height:t.headerMapHeight+"px"}},[s("q-icon",{staticClass:"float-right cursor-pointer",attrs:{name:"mdi-close",color:"white"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.closeMapHandler(e)}}}),s("q-icon",{staticClass:"float-right cursor-pointer",attrs:{name:t.isMapMaximized?"mdi-fullscreen-exit":"mdi-fullscreen",color:"white"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.maximizeHandler(e)}}}),0!==t.siblingHeight?s("q-icon",{staticClass:"float-right cursor-pointer",attrs:{name:"mdi-arrow-bottom-right",color:"white"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.minimizeHandler("bottom")}}}):t._e(),100!==t.siblingHeight?s("q-icon",{staticClass:"float-right cursor-pointer",class:(e={},e["height"+t.siblingHeight]=!0,e),attrs:{name:"mdi-arrow-top-right",color:"white"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.minimizeHandler("top")}}}):t._e()],1),s("div",{staticClass:"relative-position",style:t.mapStyles,attrs:{id:"map"}},[s("iframe",{ref:"frame",staticClass:"absolute-top-left absolute-bottom-right",staticStyle:{width:"100%",height:"100%"},attrs:{src:t.link,frameborder:"0"}})]),t.isMapMinimized||t.isMapMaximized?s("div",{staticClass:"map-component__custom-controls"},[s("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{name:"mdi-close",size:"30px",color:"grey-9"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.closeMapHandler(e)}}}),t.isMapMinimized?s("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{name:"mdi-window-restore",size:"30px",color:"grey-9"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.restoreHandler(e)}}}):t._e(),t.isMapMaximized?s("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{name:t.isMapMaximized?"mdi-fullscreen-exit":"mdi-fullscreen",size:"30px",color:"grey-9"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.maximizeHandler(e)}}}):t._e()],1):t._e()])},I=[],D=i("851c"),O=i.n(D),S={name:"map-frame",props:["device","siblingHeight"],data:function(){return{link:"https://flespi.io/mapview",height:520,width:500,prevWidth:0,prevHeight:0,headerMapHeight:20,startX:50,startY:50,isMapMinimized:!1,isMapMaximized:!1,minimizeTo:"",winWidth:0,winHeight:0,lastCommand:null}},computed:{mapStyles:function(){var e={};return this.device&&(e.width="".concat(this.width,"px"),e.height="".concat(this.height-(this.isMapMinimized||this.isMapMaximized?0:this.headerMapHeight),"px")),e},wrapperStyles:function(){var e={};return this.device&&(e={width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),position:"absolute",backgroundColor:"#666"}),e}},methods:{closeMapHandler:function(){this.$emit("map:close"),this.isMapMinimized&&(this.$emit("map:minimize",{value:!1}),this.minimizeTo="",this.isMapMinimized=!1),this.isMapMaximized&&(this.isMapMaximized=!1)},maximizeHandler:function(){this.isMapMaximized?(this.width=this.prevWidth,this.height=this.prevHeight,this.isMapMaximized=!1):(this.prevWidth=this.width,this.prevHeight=this.height,this.maximize())},minimizeHandler:function(e){this.$emit("map:minimize",{type:e,value:!0}),this.prevWidth=this.width,this.prevHeight=this.height,this.isMapMinimized=!0,this.minimizeTo=e,this.isMapMaximized&&(this.isMapMaximized=!1)},restoreHandler:function(){this.$emit("map:minimize",{value:!0}),this.isMapMinimized=!1,this.minimizeTo="",this.$refs.dragResize.left=50,this.$refs.dragResize.top=50},minimize:function(e){var t=this,i=parseInt(this.$el.parentNode.clientWidth,10),s=parseInt(this.$el.parentNode.clientHeight,10);switch(this.width=.34*i,this.height=(s-50)*((this.siblingHeight||100)/100),e){case"bottom":this.$nextTick((function(){t.$refs.dragResize.left=.66*i,t.$refs.dragResize.top=s-t.height}));break;case"top":this.$nextTick((function(){t.$refs.dragResize.left=.66*i,t.$refs.dragResize.top=50}))}},maximize:function(){var e=this,t=parseInt(this.$el.parentNode.clientWidth,10)-1,i=parseInt(this.$el.parentNode.clientHeight,10)-4;this.width=t,this.height=i,this.$nextTick((function(){e.$refs.dragResize.left=0,e.$refs.dragResize.top=0})),this.isMapMinimized&&(this.$emit("map:minimize",{value:!1}),this.minimizeTo="",this.isMapMinimized=!1),this.isMapMaximized=!0},mapResizeHandler:function(e,t,i,s){this.width=i,this.height=s},onWindowResize:function(e){if(this.isMapMinimized)this.minimizeHandler(this.minimizeTo),this.minimize(this.minimizeTo);else if(this.isMapMaximized)this.maximize();else{if(this.winWidth>e.width){var t=this.$refs.dragResize.left,i=this.winWidth-e.width;t+this.width>=this.winWidth-30&&(t&&(t-=i,t<0&&(i=-1*t,t=0),this.$refs.dragResize.left=t),0===t&&(this.$refs.dragResize.width-=i,this.width-=i,this.width<100&&(this.$refs.dragResize.width=100,this.width=100)))}if(this.winHeight>e.height){var s=this.$refs.dragResize.top,n=this.winHeight-e.height;s+this.height>=this.winHeight-30&&(s&&(s-=n,s<0&&(n=-1*s,s=0),this.$refs.dragResize.top=s),0===s&&(this.$refs.dragResize.height-=n,this.height-=n,this.height<100&&(this.$refs.dragResize.height=100,this.height=100)))}this.winHeight=document.documentElement.clientHeight,this.winWidth=document.documentElement.clientWidth}},draggingHandler:function(){this.isMapMinimized&&(this.$emit("map:minimize",{value:!1}),this.minimizeTo="",this.isMapMinimized=!1),this.isMapMaximized&&(this.isMapMaximized=!1)},addMarker:function(e){},addRoute:function(e){this.lastCommand='MapView|cmd:{"addgroutes": ['.concat(JSON.stringify(e),'], "clear": "all"}'),this.sendCommand(this.lastCommand)},addRoutes:function(e){this.lastCommand='MapView|cmd:{"addgroutes": '.concat(JSON.stringify(e),', "clear": "all"}'),this.sendCommand(this.lastCommand)},clear:function(){this.lastCommand=null,this.sendCommand('MapView|cmd:{"clear": "all"}')},sendCommand:function(e){this.$refs.frame&&e&&this.$refs.frame.contentWindow.postMessage(e,"*")}},mounted:function(){this.winHeight=document.documentElement.clientHeight,this.winWidth=document.documentElement.clientWidth},created:function(){var e=this;window.addEventListener("message",(function(t){'MapView|state:{"ready": true}'===t.data&&e.sendCommand(e.lastCommand)}))},watch:{minimizeTo:function(e){e?this.minimize(e):(this.width=this.prevWidth,this.height=this.prevHeight)},"$q.screen.width":{immediate:!0,handler:function(e){this.onWindowResize({height:this.$q.screen.height,width:e})}},"$q.screen.height":{immediate:!0,handler:function(e){this.onWindowResize({width:this.$q.screen.width,height:e})}}},components:{VueDraggableResizable:O.a}},E=S,R=(i("a38c"),Object(C["a"])(E,N,I,!1,null,null,null)),T=R.exports;function W(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function F(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?W(i,!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):W(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var V={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config"],mixins:[k["a"]],data:function(){return{calcFilter:"",deviceFilter:"",mode:1,active:null,activeCalcId:null,ratio:0,isInit:!1,isVisibleMap:!1,siblingHeight:0,mapMinimizedOptions:{},activeViewedMessage:null}},computed:F({},Object(H["d"])({tokenType:function(e){return e.tokenInfo&&e.tokenInfo.access?e.tokenInfo.access.type:-1},devicesCollection:function(e){return e.items||{}},devices:function(e){return Object.values(e.items||{})},tasksCollection:function(e){return e["addition.tasks"]||{}},tasks:function(e){var t=Object.values(e["addition.tasks"]||{});return t},calcsCollection:function(e){return e["addition.calcs"]||{}},calcs:function(e){return Object.values(e["addition.calcs"]||{})},selectedDevice:function(e){return e.items[this.active]||{}},selectedCalc:function(e){return e["addition.calcs"]&&e["addition.calcs"][this.activeCalcId]?e["addition.calcs"][this.activeCalcId]:{}}}),{filteredDevices:function(){var e=this.devices;return e},filteredCalcs:function(){var e=this,t=this.calcs;return t=t.filter((function(t){return e.tasks.some((function(i){return e.active===i.device_id&&t.id===i.calc_id}))})),this.isInit&&this.active&&this.activeCalcId&&!this.tasks.filter((function(t){return t.device_id===e.active&&t.calc_id===e.activeCalcId})).length&&this.$nextTick((function(){e.clearActiveCalc()})),this.filterItems(t,this.calcFilter.toLowerCase())},size:function(){return[this.ratio,100-this.ratio]},hasRouteIntervals:function(){return!0}}),methods:{filterItems:function(e,t){var i=t?e.filter((function(e){return e&&"undefined"!==typeof e.name&&null!==e.name&&e.name.toLowerCase().indexOf(t)>=0||e&&"undefined"!==typeof e.id&&null!==e.id&&(e.id+"").indexOf(t)>=0})):e;return i.sort((function(e,t){if(!e.name)return-1;if(!t.name)return 1;var i=e.name.toLowerCase(),s=t.name.toLowerCase();return i<s?-1:1})),i},filterSelectItems:function(e,t){t()},viewDataHandler:function(e){e&&this.$emit("view-data",e)},onMapHandler:function(e){var t=this;if(!this.isVisibleMap)return this.openMapHandler(),this.$nextTick((function(){t.$refs.map.addRoutes(e)})),!1;this.$refs.map&&this.isVisibleMap&&this.$refs.map.addRoutes(e)},unselect:function(){this.$refs.intervals.unselect()},setActive:function(e){this.active=e},setActiveCalc:function(e){this.activeCalcId=e},clearActive:function(){this.setActive(null)},clearActiveCalc:function(){this.setActiveCalc(null)},goBack:function(){this.$router.push("/devices/".concat(this.active)).catch((function(e){return e}))},init:function(){var e=this.$route.params&&this.$route.params.id?Number(this.$route.params.id):null,t=this.$route.params&&this.$route.params.calcId?Number(this.$route.params.calcId):null;this.isInit=!0,e&&(this.setActive(e),t&&this.calcsCollection[t]&&(this.activeCalcId=t))},mapMinimizeHandler:function(e){this.mapMinimizedOptions=e,"bottom"===e.type?this.siblingHeight=this.size[1]:"top"===e.type?this.siblingHeight=this.size[0]:this.siblingHeight=0},openMapHandler:function(){this.isVisibleMap=!this.isVisibleMap},onResize:function(){this.$refs.map&&this.$refs.map.onWindowResize({width:window.innerWidth,height:window.innerHeight})}},watch:{ratio:function(e){var t=this;this.$nextTick((function(){+t.size[0]&&t.active&&t.$emit("view-data-hide"),+t.size[1]&&t.active&&t.activeCalcId&&t.$refs.intervals.resetParams()}))},$route:function(e){if(e.params&&e.params.id&&Number(e.params.id)===this.active&&e.params.calcId&&this.activeCalcId===Number(e.params.calcId))return!1;if(e.params&&e.params.id){var t=Number(e.params.id);if(this.devicesCollection[t]){t!==this.active&&this.setActive(t);var i=Number(e.params.calcId);e.params&&e.params.calcId&&this.calcsCollection[i]&&(this.activeCalcId=i)}else this.isInit&&this.clearActive()}else e.params&&!e.params.id&&this.clearActive()},active:function(e,t){e?this.$router.push("/devices/".concat(e,"/calc/").concat(this.activeCalcId||"null","/intervals")).catch((function(e){return e})):this.$router.push("/devices").catch((function(e){return e}))},activeCalcId:function(e){e&&this.$router.push("/devices/".concat(this.active,"/calc/").concat(e,"/intervals")).catch((function(e){return e}))}},components:{intervals:q,MapFrame:T}},j=V,P=(i("e28f"),Object(C["a"])(j,s,n,!1,null,null,null));t["default"]=P.exports},4526:function(e,t,i){},"6df1":function(e,t,i){},a38c:function(e,t,i){"use strict";var s=i("4526"),n=i.n(s);n.a},cb1a:function(e,t,i){},e28f:function(e,t,i){"use strict";var s=i("cb1a"),n=i.n(s);n.a},e439:function(e,t,i){"use strict";var s=i("6df1"),n=i.n(s);n.a}}]);