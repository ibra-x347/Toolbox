(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["06339daf"],{8116:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[e.active?[i("q-toolbar",{staticClass:"justify-between",attrs:{color:"dark"}},[i("q-item",{staticClass:"no-padding",staticStyle:{"max-width":"50%"},style:{cursor:e.isNeedSelect?"":"default!important"}},[i("q-item-main",[e.selectedItem.configuration&&e.selectedItem.configuration.protocol?i("q-tooltip",[i("small",[e._v(e._s(e.selectedItem.configuration.protocol))])]):e._e(),i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:"140px"},attrs:{label:""}},[e._v(e._s(e.selectedItem.name||"<noname>"))]),e.selectedItem.configuration&&e.selectedItem.configuration.uri?i("q-item-tile",{staticStyle:{"font-size":"0.8rem"},attrs:{sublabel:""}},[e._v(e._s(e.selectedItem.configuration.uri))]):e._e()],1),i("q-item-side",{staticClass:"text-right"},[i("q-item-tile",{staticClass:"text-center",staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white"}},[e.selectedItem.deleted?i("div",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),e._v("#"+e._s(e.selectedItem.id.toString()))]),e.isNeedSelect?i("q-item-tile",{staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white",size:"2rem",icon:"mdi-menu-down"}}):e._e()],1),e.isNeedSelect?i("q-popover",{ref:"popoverActive",attrs:{fit:""}},[i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},[i("VirtualList",{attrs:{size:76,remain:e.items.length>6?6:e.items.length}},e._l(e.items,function(t,s){return i("q-item",{key:s,staticClass:"cursor-pointer",class:{"text-grey-8":t.deleted},attrs:{highlight:""},nativeOn:{click:function(i){e.active=t.id,e.$refs.popoverActive.hide(),e.$emit("view-data-hide")}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",attrs:{label:""}},[e._v(e._s(t.name||"<noname>"))]),t.configuration&&t.configuration.protocol?i("q-item-tile",{attrs:{sublabel:""}},[i("small",[e._v(e._s(t.configuration.protocol||"<no protocol>"))])]):e._e(),t.configuration&&t.configuration.uri?i("q-item-tile",{attrs:{sublabel:""}},[i("small",[e._v(e._s(t.configuration.uri||"<no uri>"))])]):e._e()],1),i("q-item-side",{staticClass:"text-center"},[t.deleted?i("q-item-tile",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),i("q-item-tile",[i("small",[e._v("#"+e._s(t.id.toString()))])])],1)],1)}))],1),e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:e.getDeletedHandler}},[e._v("see deleted")]):e._e()],1):e._e()],1),e.selectedItem.deleted?e._e():i("q-btn",{staticClass:"on-left",attrs:{flat:"",color:"white",icon:e.modeModel?"playlist_play":"history",rounded:e.$q.platform.is.mobile},on:{click:function(t){e.modeModel=!e.modeModel}}},[i("q-tooltip",[e._v("Mode (Real-time/History)")]),e._v("\n        "+e._s(e.$q.platform.is.mobile?"":e.modeModel?"Real-time":"History")+"\n        "),e.newMessagesCount?i("q-chip",{staticClass:"cursor-pointer q-ml-sm",attrs:{small:"",square:"",color:"red"}},[e._v(e._s(e.newMessagesCount))]):e._e()],1),i("div",[e.modeModel&&!e.isEmptyMessages?i("q-icon",{staticClass:"cursor-pointer pull-right",attrs:{size:"1.5rem",color:"white",name:"mdi-playlist-remove"},nativeOn:{click:function(t){return e.clearHandler(t)}}},[i("q-tooltip",[e._v("Clear all panes")])],1):e._e()],1)],1),i("logs",{ref:"logs",style:{minHeight:"calc(100vh - "+(e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},attrs:{mode:e.mode,item:e.selectedItem,limit:e.limit,originPattern:"gw/streams/:id",isEnabled:!0,config:e.config.logs},on:{"view-log-message":e.viewLogMessagesHandler}}),e.selectedItem.deleted?i("div",{staticClass:"text-center",staticStyle:{"font-size":"1.5rem","margin-top":"30px",color:"white"}},[e._v("Nothing to show by stream «"+e._s(e.selectedItem.name)+"» "),i("div",{staticStyle:{"font-size":"0.9rem"}},[e._v("or you haven`t access")])]):e._e()]:i("div",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","font-size":"1.5rem"}},[i("div",{staticClass:"text-grey-3",staticStyle:{"margin-top":"50px"}},[e.items.length?i("q-btn",{staticStyle:{display:"flex","flex-wrap":"nowrap","margin-top":"20px"},attrs:{flat:"","icon-right":"mdi-menu-down"}},[e._v("\n        Select stream\n        "),i("q-popover",{ref:"popoverNotActive",attrs:{fit:""}},[i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},[i("VirtualList",{attrs:{size:76,remain:e.items.length>6?6:e.items.length}},e._l(e.items,function(t,s){return e.items.length?i("q-item",{key:s,staticClass:"cursor-pointer",class:{"text-grey-8":t.deleted},attrs:{highlight:""},nativeOn:{click:function(i){e.active=t.id,e.$refs.popoverNotActive.hide()}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:e.$q.platform.is.mobile?"":"140px"},attrs:{label:""}},[e._v(e._s(t.name||"<noname>")),e.$q.platform.is.desktop?i("q-tooltip",[e._v(e._s(t.name))]):e._e()],1),t.configuration?i("q-item-tile",{attrs:{sublabel:""}},[i("small",[e._v(e._s(t.configuration.protocol||"<no protocol>"))])]):e._e(),t.configuration?i("q-item-tile",{attrs:{sublabel:""}},[i("small",[e._v(e._s(t.configuration.uri||"<no uri>"))])]):e._e()],1),i("q-item-side",{staticClass:"text-center"},[t.deleted?i("q-item-tile",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),i("q-item-tile",[i("small",[e._v("#"+e._s(t.id.toString()))])])],1)],1):e._e()}))],1),e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:e.getDeletedHandler}},[e._v("see deleted")]):e._e()],1)],1):e._e(),e.items.length?e._e():i("div",[e._v(e._s(e.isLoading?"Fetching data..":"Streams not found"))])],1)])],2)},a=[],o=(i("96cf"),i("c973")),n=i.n(o),l=(i("c5f6"),i("3156")),r=i.n(l),c=i("2ce0"),m=i("2f62"),d=i("95ff"),u=i.n(d),f={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config"],data:function(){return{mode:1,active:null,isInit:!1,needShowGetDeletedAction:!0}},computed:r()({},Object(m["d"])({newMessagesCount:function(e){return e[this.config.logs.vuexModuleName]?e[this.config.logs.vuexModuleName].newMessagesCount:0},isEmptyMessages:function(e){return!!e[this.config.logs.vuexModuleName]&&!e[this.config.logs.vuexModuleName].messages.length},tokenType:function(e){return e.tokenInfo.access?e.tokenInfo.access.type:-1}}),{items:function(){return this.$store.state.items},selectedItem:function(){var e=this;return this.items.filter(function(t){return t.id===e.active})[0]||{}},modeModel:{get:function(){return!!this.mode},set:function(e){var t=Date.now();this.date=e?0:t-t%864e5,this.mode=Number(e),this.$emit("view-data-hide")}}}),methods:r()({},Object(m["b"])(["getDeleted"]),{viewDataHandler:function(e){this.$emit("view-data",e)},viewLogMessagesHandler:function(e){this.$emit("view-log-message",e)},clearHandler:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you really want to clear all data from the panes?",ok:!0,cancel:!0}).then(function(){e.$store.commit("".concat(e.config.logs.vuexModuleName,"/clearMessages"))}).catch(function(){})},getDeletedHandler:function(){var e=n()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDeleted("streams");case 2:this.needShowGetDeletedAction=!1;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),created:function(){var e=this,t=this.$q.localStorage.get.item("streams");this.$store.dispatch("getItems","streams").then(function(){e.isInit=!0,e.$route.params&&e.$route.params.id?e.items.filter(function(t){return t.id===Number(e.$route.params.id)}).length?e.active=Number(e.$route.params.id):e.active=null:t&&e.items.filter(function(e){return e.id===t}).length&&(e.active=t),e.selectedItem.deleted&&(e.mode=0)})},destroyed:function(){this.$store.dispatch("unsubscribeItems","streams"),this.$store.commit("clearItems")},watch:{$route:function(e){e.params&&e.params.id?this.items.filter(function(t){return t.id===Number(e.params.id)}).length?this.active=Number(e.params.id):this.isInit&&(this.active=null):e.params&&!e.params.id&&(this.active=null)},active:function(e){var t=this.items.filter(function(t){return t.id===e})[0]||{};e?(this.$q.localStorage.set("streams",e),this.$router.push("/streams/".concat(e))):this.$router.push("/streams"),t.deleted&&(this.mode=0)}},components:{logs:c["a"],VirtualList:u.a}},p=f,g=(i("c0f4"),i("2877")),h=Object(g["a"])(p,s,a,!1,null,null,null);h.options.__file="Streams.vue";t["default"]=h.exports},a661:function(e,t,i){},c0f4:function(e,t,i){"use strict";var s=i("a661"),a=i.n(s);a.a}}]);