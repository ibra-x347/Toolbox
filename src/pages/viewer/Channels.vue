<template>
  <q-page>
    <template  v-if="!active">
      <div class="text-center" style="display: flex; justify-content: center; font-size: 1.5rem">
        <div class="text-grey-3" style="margin-top: 50px">
          <q-btn flat style="display: flex; flex-wrap: nowrap; margin-top: 20px" icon-right="mdi-menu-down" v-if="items.length">
            Select channel
            <q-popover fit ref="popoverNotActive">
              <q-list link separator class="scroll">
                <VirtualList
                  :size="76"
                  :remain="items.length > 6 ? 6 : items.length"
                >
                  <q-item
                    v-for="(item, index) in items"
                    :key="index"
                    @click.native="active = item.id, $refs.popoverNotActive.hide()"
                    class="cursor-pointer"
                    :class="{'text-grey-8': item.deleted}"
                    highlight
                  >
                    <q-item-main>
                      <q-item-tile label class="ellipsis overflow-hidden" :style="{maxWidth: $q.platform.is.mobile ? '' : '140px'}">{{item.name || '&lt;noname&gt;'}}<q-tooltip v-if="$q.platform.is.desktop">{{item.name}}</q-tooltip></q-item-tile>
                      <q-item-tile sublabel><small>{{protocols[item.protocol_id] || '&lt;no protocol&gt;'}}</small></q-item-tile>
                      <q-item-tile sublabel><small>{{item.uri || '&lt;no uri&gt;'}}</small></q-item-tile>
                    </q-item-main>
                    <q-item-side class="text-center">
                      <q-item-tile v-if="item.deleted" class="cheap-modifier"><small>DELETED</small></q-item-tile>
                      <q-item-tile><small>#{{item.id.toString()}}</small></q-item-tile>
                    </q-item-side>
                  </q-item>
                </VirtualList>
              </q-list>
              <q-btn icon="mdi-download" class="deleted-action" @click="getDeletedHandler" v-if="needShowGetDeletedAction && tokenType === 1">see deleted</q-btn>
            </q-popover>
          </q-btn>
          <div v-if="!items.length">{{isLoading ? 'Fetching data..' : 'Channels not found'}}</div>
        </div>
      </div>
    </template>
    <template v-else>
      <q-toolbar color="dark" class="justify-between">
        <q-item class="no-padding" :style="{cursor: isNeedSelect ? '' : 'default!important'}">
          <q-item-main>
            <q-tooltip><small>protocol: {{protocols[selectedItem.protocol_id] || selectedItem.protocol_id}}</small></q-tooltip>
            <q-item-tile label class="ellipsis overflow-hidden" :style="{maxWidth: '140px'}">{{selectedItem.name || '&lt;noname&gt;'}}</q-item-tile>
            <q-item-tile sublabel style="font-size: 0.8rem">{{selectedItem.uri}}</q-item-tile>
          </q-item-main>
          <q-item-side class="text-right">
            <q-item-tile style="display: inline-block" stamp color="white" class="text-center"><div v-if="selectedItem.deleted" class="cheap-modifier"><small>DELETED</small></div>#{{selectedItem.id.toString()}}</q-item-tile>
            <q-item-tile v-if="isNeedSelect" style="display: inline-block" stamp color="white" size="2rem" icon="mdi-menu-down" />
          </q-item-side>
          <q-popover fit ref="popoverActive" v-if="isNeedSelect">
            <q-list link separator class="scroll">
              <VirtualList
                :size="76"
                :remain="items.length > 6 ? 6 : items.length"
              >
                <q-item
                  v-for="(item, index) in items"
                  :key="index"
                  @click.native="active = item.id, $refs.popoverActive.hide(), $emit('view-data-hide')"
                  class="cursor-pointer"
                  :class="{'text-grey-8': item.deleted}"
                  highlight
                >
                  <q-item-main>
                    <q-item-tile label class="ellipsis overflow-hidden">{{item.name || '&lt;noname&gt;'}}</q-item-tile>
                    <q-item-tile sublabel><small>{{protocols[item.protocol_id] || '&lt;no protocol&gt;'}}</small></q-item-tile>
                    <q-item-tile sublabel><small>{{item.uri || '&lt;no uri&gt;'}}</small></q-item-tile>
                  </q-item-main>
                  <q-item-side class="text-center">
                    <q-item-tile v-if="item.deleted" class="cheap-modifier"><small>DELETED</small></q-item-tile>
                    <q-item-tile><small>#{{item.id.toString()}}</small></q-item-tile>
                  </q-item-side>
                </q-item>
              </VirtualList>
            </q-list>
            <q-btn icon="mdi-download" class="deleted-action" @click="getDeletedHandler" v-if="needShowGetDeletedAction && tokenType === 1">see deleted</q-btn>
          </q-popover>
        </q-item>
        <q-btn v-if="!selectedItem.deleted" flat class="on-left" color="white" @click="modeModel = !modeModel" :icon="modeModel ? 'playlist_play' : 'history'" :rounded="$q.platform.is.mobile">
          {{$q.platform.is.mobile ? '' : modeModel ? 'Real-time' : 'History'}}
          <q-chip small square color="red" v-if="newMessagesCount" class="cursor-pointer q-ml-sm">{{newMessagesCount}}</q-chip>
          <q-tooltip>Mode (Real-time/History)</q-tooltip>
        </q-btn>
        <div>
          <q-icon size="1.5rem" class="on-left cursor-pointer pull-right" v-if="modeModel && !isEmptyMessages" color="white" name="mdi-playlist-remove" @click.native="clearHandler">
            <q-tooltip>Clear all panes</q-tooltip>
          </q-icon>
          <q-icon v-if="!selectedItem.deleted" size="1.5rem" class="cursor-pointer pull-right" name="mdi-format-align-middle">
            <q-tooltip>Section ratio</q-tooltip>
            <q-popover ref="ratioPopover">
              <q-item style="width: 25rem; height: 100px" class="bg-dark">
                <q-item-side class="text-center">
                  <q-item-tile color="grey-6">Logs</q-item-tile>
                </q-item-side>
                <q-item-main>
                  <q-item-tile label class="ellipsis overflow-hidden" color="white">Ratio</q-item-tile>
                  <q-item-tile sublabel>
                    <q-slider
                      v-model="ratio"
                      color="grey-6"
                      :min="0"
                      :max="100"
                      :step="25"
                      label
                      snap
                    />
                  </q-item-tile>
                </q-item-main>
                <q-item-side class="text-center" right>
                  <q-item-tile color="grey-6">Messages</q-item-tile>
                </q-item-side>
              </q-item>
            </q-popover>
          </q-icon>
        </div>
      </q-toolbar>
      <logs
        ref="logs"
        :mode="mode"
        :item="selectedItem"
        :limit="limit"
        :isEnabled="!!+size[0]"
        originPattern="gw/channels/:id"
        :config="config.logs"
        v-if="+size[0]"
        :style="{minHeight: `calc(${size[0]}vh - ${+size[1] ? isVisibleToolbar ? '50px' : '25px' : isVisibleToolbar ? '100px' : '50px'})`, position: 'relative'}"
        @view-log-message="viewLogMessagesHandler"
      />
      <messages
        ref="messages"
        @view-data="viewDataHandler"
        :mode="mode"
        :activeId="active"
        :isEnabled="!!+size[1]"
        :limit="limit"
        :config="config.messages"
        v-if="+size[1]"
        :style="{minHeight: `calc(${size[1]}vh - ${+size[0] ? isVisibleToolbar ? '50px' : '25px' : isVisibleToolbar ? '100px' : '50px'})`, position: 'relative'}"
      />
      <div class="text-center" style="font-size: 1.5rem; margin-top: 30px; color: white" v-if="selectedItem.deleted">Nothing to show by channel &#171;{{selectedItem.name}}&#187; <div style="font-size: 0.9rem">or you haven`t access</div></div>
    </template>
  </q-page>
</template>

<script>
import logs from '../../components/logs/Index.vue'
import messages from '../../components/messages/channels/Index.vue'
import { mapState, mapActions } from 'vuex'
import VirtualList from 'vue-virtual-scroll-list'

export default {
  props: [
    'limit',
    'isLoading',
    'isVisibleToolbar',
    'isNeedSelect',
    'config'
  ],
  data () {
    return {
      mode: 1,
      active: null,
      ratio: 50,
      isInit: false,
      needShowGetDeletedAction: true
    }
  },
  computed: {
    ...mapState({
      newMessagesCount (state) {
        let messagesCount = this.config.messages && state[this.config.messages.vuexModuleName] ? state[this.config.messages.vuexModuleName].newMessagesCount : 0,
          logsCount = this.config.logs && state[this.config.logs.vuexModuleName] ? state[this.config.logs.vuexModuleName].newMessagesCount : 0
        return messagesCount + logsCount
      },
      isEmptyMessages (state) {
        let hasntMessages = this.config.messages && state[this.config.messages.vuexModuleName] && !state[this.config.messages.vuexModuleName].messages.length && this.ratio !== 100,
          hasntLogs = this.config.logs && state[this.config.logs.vuexModuleName] && state[this.config.logs.vuexModuleName].messages && !state[this.config.logs.vuexModuleName].messages.length && this.ratio !== 0
        return hasntMessages && hasntLogs
      },
      tokenType (state) { return state.tokenInfo.access ? state.tokenInfo.access.type : -1 },
      protocols (state) { return state.protocols },
      items (state) { return state.items }
    }),
    size () {
      return [this.ratio, 100 - this.ratio]
    },
    selectedItem () {
      return this.items.filter(item => item.id === this.active)[0] || {}
    },
    modeModel: {
      get () {
        return !!this.mode
      },
      set (val) {
        let now = Date.now()
        this.date = val ? 0 : now - (now % 86400000)
        this.mode = Number(val)
        this.$emit('view-data-hide')
      }
    }
  },
  methods: {
    ...mapActions(['getDeleted']),
    viewDataHandler (content) {
      this.$emit('view-data', content[content.length - 1])
    },
    viewLogMessagesHandler (content) {
      this.$emit('view-log-message', content)
    },
    unselect () {
      this.$refs.messages.unselect()
    },
    clearHandler () {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Do you really want to clear all data from the panes?',
        ok: true,
        cancel: true
      }).then(() => {
        this.$store.commit(`${this.config.messages.vuexModuleName}/clearMessages`)
        this.$store.commit(`${this.config.logs.vuexModuleName}/clearMessages`)
      })
        .catch(() => {})
    },
    async getDeletedHandler () {
      await this.getDeleted('channels')
      this.needShowGetDeletedAction = false
    }
  },
  created () {
    let activeFromLocaleStorage = this.$q.localStorage.get.item('channels')
    this.$store.dispatch('getItems', 'channels')
      .then(() => {
        this.isInit = true
        if (this.$route.params && this.$route.params.id) {
          if (this.items.filter(item => item.id === Number(this.$route.params.id)).length) {
            this.active = Number(this.$route.params.id)
          } else {
            this.active = null
          }
        } else if (activeFromLocaleStorage && this.items.filter(item => item.id === activeFromLocaleStorage).length) {
          this.active = activeFromLocaleStorage
        }
        // deleted item logic
        if (this.selectedItem.deleted) {
          this.mode = 0
          this.ratio = 100
        }
      })
  },
  destroyed () {
    this.$store.dispatch('unsubscribeItems', 'channels')
    this.$store.commit('clearItems')
  },
  watch: {
    ratio (val) {
      this.$nextTick(() => {
        if (+this.size[0] && this.active) {
          this.$refs.logs.resetParams()
          this.$emit('view-data-hide')
        }
        if (+this.size[1] && this.active) {
          this.$refs.messages.resetParams()
        }
      })
    },
    $route (route) {
      if (route.params && route.params.id) {
        if (this.items.filter(item => item.id === Number(route.params.id)).length) {
          this.active = Number(route.params.id)
        } else if (this.isInit) {
          this.active = null
        }
      } else if (route.params && !route.params.id) {
        this.active = null
      }
    },
    active (val) {
      let currentItem = this.items.filter(item => item.id === val)[0] || {}
      if (val) {
        this.$q.localStorage.set('channels', val)
        this.$router.push(`/channels/${val}`)
      } else {
        this.$router.push('/channels')
      }
      if (currentItem.deleted) {
        this.ratio = 100
        this.mode = 0
      } else {
        this.ratio = currentItem.deleted ? 100 : 50
      }
    }
  },
  components: { logs, messages, VirtualList }
}
</script>
<style>
  .no-top-bottom-margin {
    margin-bottom: 0;
    margin-top: 0;
  }
  .cheap-modifier {
    font-size: .7rem;
    font-weight: bolder;
    border-radius: 3px;
    background-color: #90a4ae;
    color: white;
    padding: 0 3px;
    margin-bottom: 3px;
  }
  .deleted-action {
    width: 100%;
    color: #999;
    background-color: #eee;
    font-size: .7rem;
    padding-top: 0;
    padding-bottom: 0
  }
</style>