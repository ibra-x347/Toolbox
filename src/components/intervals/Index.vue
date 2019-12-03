<template>
  <div>
    <virtual-scroll-list
      ref="scrollList"
      :cols="cols"
      :actions="actions"
      :items="messages"
      :dateRange="[begin, end]"
      :viewConfig="viewConfig"
      :colsConfigurator="'toolbar'"
      :mode="0"
      :i18n="i18n"
      :filter="filter"
      :theme="theme"
      :title="'Intervals'"
      @change:filter="filterChangeHandler"
      @change:date-range="dateRangeChangeHandler"
      @update:cols="updateColsHandler"
    >
      <messages-list-item slot="items" slot-scope="{item, index, actions, cols, etcVisible, actionsVisible, itemHeight, rowWidth}"
         :item="item"
         :key="`${JSON.stringify(item)}${index}`"
         :index="index"
         :actions="actions"
         :cols="cols"
         :itemHeight="itemHeight"
         :rowWidth="rowWidth"
         :etcVisible="etcVisible"
         :actionsVisible="actionsVisible"
         :selected="selected.includes(index)"
         @action="actionHandler"
         @item-click="viewMessagesHandler"
      />
    </virtual-scroll-list>
  </div>
</template>

<script>
import { VirtualScrollList, intervalsModule } from 'qvirtualscroll'
import Vue from 'vue'
import { date, copyToClipboard } from 'quasar'
import filterMessages from '../../mixins/filterMessages'
import MessagesListItem from './MessagesListItem.vue'

export default {
  props: [
    'item',
    'activeId',
    'activeDeviceId',
    'limit',
    'config'
  ],
  data () {
    return {
      theme: this.config.theme,
      i18n: {},
      viewConfig: this.config.viewConfig,
      moduleName: this.config.vuexModuleName
    }
  },
  computed: {
    actions () {
      let initActions = this.config.actions,
        actions = [initActions[0]],
        routeFields = this.getRouteFields()
      if (routeFields && routeFields.length && this.$q.platform.is.desktop) {
        actions = initActions
      }
      return actions
    },
    messages: {
      get () {
        let messages = this.$store.state[this.moduleName].messages
        messages = Object.values(messages)
        this.setTranslate(messages)
        messages.sort((a, b) => {
          return a.begin - b.begin
        })
        this.normalizeSelected(messages)
        return messages
      },
      set (val) {
        this.$store.commit(`${this.moduleName}/setMessages`, val)
      }
    },
    active: {
      get () {
        return this.$store.state[this.moduleName].active
      },
      async set (val) {
        await this.$store.dispatch(`${this.moduleName}/unsubscribePooling`)/* remove subscription for previous active device */
        this.$store.commit(`${this.moduleName}/setActive`, val)
        this.$store.commit(`${this.moduleName}/clearMessages`)
        this.$store.dispatch(`${this.moduleName}/getCols`, this.item.counters)
        await this.$store.dispatch(`${this.moduleName}/initTime`)
        await this.$store.dispatch(`${this.moduleName}/get`)
        this.$store.dispatch(`${this.moduleName}/pollingGet`)
      }
    },
    activeDevice: {
      get () {
        return this.$store.state[this.moduleName].activeDevice
      },
      async set (id) {
        await this.$store.dispatch(`${this.moduleName}/unsubscribePooling`)/* remove subscription for previous active device */
        this.$store.commit(`${this.moduleName}/setActiveDevice`, id)
        this.$store.commit(`${this.moduleName}/clearMessages`)
        await this.$store.dispatch(`${this.moduleName}/initTime`)
        await this.$store.dispatch(`${this.moduleName}/get`)
        this.$store.dispatch(`${this.moduleName}/pollingGet`)
      }
    },
    cols: {
      get () {
        return this.$store.state[this.moduleName].cols
      },
      set (val) {
        this.$store.commit(`${this.moduleName}/updateCols`, val)
      }
    },
    filter: {
      get () {
        return this.$store.state[this.moduleName].filter
      },
      set (val) {
        val ? this.$store.commit(`${this.moduleName}/setFilter`, val) : this.$store.commit(`${this.moduleName}/setFilter`, '')
      }
    },
    begin: {
      get () {
        return this.$store.state[this.moduleName].begin
      },
      set (val) {
        val ? this.$store.commit(`${this.moduleName}/setBegin`, val) : this.$store.commit(`${this.moduleName}/setBegin`, 0)
      }
    },
    end: {
      get () {
        return this.$store.state[this.moduleName].end
      },
      set (val) {
        val ? this.$store.commit(`${this.moduleName}/setEnd`, val) : this.$store.commit(`${this.moduleName}/setEnd`, 0)
      }
    },
    reverse: {
      get () {
        return this.$store.state[this.moduleName].reverse || false
      },
      set (val) {
        this.$store.commit(`${this.moduleName}/setReverse`, val)
      }
    },
    currentLimit: {
      get () {
        return this.$store.state[this.moduleName].limit
      },
      set (val) {
        val ? this.$store.commit(`${this.moduleName}/setLimit`, val) : this.$store.commit(`${this.moduleName}/setLimit`, 0)
      }
    },
    selected: {
      get () {
        let selected = this.$store.state[this.moduleName].selected
        if (selected && !selected.length) {
          this.$emit('view-data', null)
        }
        return selected
      },
      set (val) {
        this.$store.commit(`${this.moduleName}/setSelected`, val)
      }
    },
    routesFileds () {
      return this.getRouteFields()
    }
  },
  methods: {
    resetParams () {
      this.$refs.scrollList.resetParams()
    },
    filterChangeHandler (val) {
      if (this.filter !== val) {
        this.filter = val
        this.$store.commit(`${this.moduleName}/clearMessages`)
        this.$store.dispatch(`${this.moduleName}/get`)
      }
    },
    getRouteFields () {
      return this.item.counters && this.item.counters.filter((counter) => {
        return counter.type === 'route'
      })
    },
    setTranslate (messages) {
      this.i18n.from = messages.length ? `Previous batch until ${date.formatDate(messages[0].timestamp * 1000, 'HH:mm:ss')}` : 'Prev'
      this.i18n.to = messages.length ? `Next batch from ${date.formatDate(messages[messages.length - 1].timestamp * 1000, 'HH:mm:ss')}` : 'Next'
    },
    updateColsHandler (cols) {
      this.cols = cols
    },
    dateRangeChangeHandler (range) {
      let begin = range[0],
        end = range[1]
      if (this.begin === begin && this.end === end) { return false }
      this.begin = begin
      this.end = end
      this.$store.commit(`${this.moduleName}/clearMessages`)
      this.$store.dispatch(`${this.moduleName}/get`)
    },
    actionHandler ({ index, type, content }) {
      switch (type) {
        case 'view': {
          this.viewMessagesHandler({ index, content })
          break
        }
        case 'map': {
          this.onMapHandler({ index, content })
          break
        }
        case 'copy': {
          this.copyMessageHandler({ index, content })
          break
        }
      }
    },
    viewMessagesHandler ({ index, content }) {
      this.selected = [index]
      this.$emit('view-data', content)
    },
    onMapHandler ({ index, content }) {
      let routes = Object.keys(content).reduce((routes, fieldName) => {
        if (this.routesFileds.filter(field => field.name === fieldName).length) {
          routes.push(content[fieldName])
        }
        return routes
      }, [])
      this.$emit('on-map', routes)
    },
    copyMessageHandler ({ index, content }) {
      copyToClipboard(JSON.stringify(content)).then((e) => {
        this.$q.notify({
          type: 'positive',
          icon: 'content_copy',
          message: `Message copied`,
          timeout: 1000
        })
      }, (e) => {
        this.$q.notify({
          type: 'negative',
          icon: 'content_copy',
          message: `Error coping messages`,
          timeout: 1000
        })
      })
    },
    unselect () {
      if (this.selected.length) {
        this.selected = []
      }
    },
    normalizeSelected (messages) {
      if (this.selected && this.selected.length) {
        let selectedIndex = this.selected[0]
        let message = messages[selectedIndex]
        this.viewMessagesHandler({ index: selectedIndex, content: message })
      }
    }
  },
  watch: {
    activeId (val) {
      this.active = val
    },
    activeDeviceId (id) {
      this.activeDevice = id
    },
    limit (limit) {
      this.currentLimit = limit
    }
  },
  created () {
    if (!this.$store.state[this.moduleName]) {
      this.$store.registerModule(this.moduleName, intervalsModule({ Vue, LocalStorage: this.$q.localStorage, name: this.moduleName, errorHandler: (err) => { this.$store.commit('reqFailed', err) }, filterHandler: this.filterMessages }))
    } else {
      this.$store.commit(`${this.moduleName}/clear`)
    }
    this.currentLimit = this.limit
    if (this.activeId) {
      this.$store.commit(`${this.moduleName}/setActive`, this.activeId)
      this.$store.dispatch(`${this.moduleName}/getCols`, this.item.counters)
    }
    if (this.activeDeviceId) {
      this.$store.commit(`${this.moduleName}/setActiveDevice`, this.activeDeviceId)
    }
    this.$store.dispatch(`${this.moduleName}/initTime`)
      .then(() => {
        this.$store.dispatch(`${this.moduleName}/get`)
        this.$store.dispatch(`${this.moduleName}/pollingGet`)
      })
    this.offlineHandler = Vue.connector.socket.on('offline', () => {
      this.$store.commit(`${this.moduleName}/setOffline`, this.mode === 1)
    })
    this.connectHandler = Vue.connector.socket.on('connect', () => {
      if (this.$store.state[this.moduleName].offline) {
        this.$store.commit(`${this.moduleName}/setReconnected`, this.mode === 1)
      }
    })
  },
  beforeDestroy () {
    this.offlineHandler !== undefined && Vue.connector.socket.off('offline', this.offlineHandler)
    this.connectHandler !== undefined && Vue.connector.socket.off('connect', this.connectHandler)
    this.$store.commit(`${this.moduleName}/clear`)
  },
  mixins: [filterMessages],
  components: { VirtualScrollList, MessagesListItem }
}
</script>