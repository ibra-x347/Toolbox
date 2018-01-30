<template>
  <div>
    <virtual-scroll-list
      ref="scrollList"
      :cols="cols"
      :actions="actions"
      :items="messages"
      :date="from"
      :mode="mode"
      :viewConfig="viewConfig"
      :colsConfigurator="'toolbar'"
      :i18n="i18n"
      :filter="filter"
      :theme="theme"
      :title="'Logs'"
      @change:filter="filterChangeHandler"
      @change:pagination-prev="paginationPrevChangeHandler"
      @change:pagination-next="paginationNextChangeHandler"
      @change:date="dateChangeHandler"
      @change:date-prev="datePrevChangeHandler"
      @change:date-next="dateNextChangeHandler"
      @change:mode="modeChange"
      @update:cols="updateColsHandler"
    >
      <logs-list-item slot="items" slot-scope="{item, index, actions, cols, etcVisible, actionsVisible, itemHeight, rowWidth}"
          :item="item"
          :key="index"
          :index="index"
          :actions="actions"
          :cols="cols"
          :itemHeight="itemHeight"
          :rowWidth="rowWidth"
          :etcVisible="etcVisible"
          :actionsVisible="actionsVisible"
          @action="actionHandler"
          @item-click="viewMessagesHandler"
      />
    </virtual-scroll-list>
  </div>
</template>

<script>
  import { VirtualScrollList, logsModule } from 'qvirtualscroll'
  import Vue from 'vue'
  import LogsListItem from './LogsListItem.vue'
  import { date, LocalStorage } from 'quasar-framework'
  import filterMessages from '../../mixins/filterMessages'

  export default {
    props: [
      'mode',
      'item',
      'limit',
      'originPattern',
      'config'
    ],
    data () {
      return {
        theme: this.config.theme,
        i18n: {
          'Messages not found': 'Log entries not found'
        },
        viewConfig: this.config.viewConfig,
        actions: this.config.actions,
        moduleName: this.config.vuexModuleName
      }
    },
    computed: {
      messages: {
        get () {
          let messages = this.$store.state[this.moduleName].messages
          this.i18n.from = messages.length ? `Previous batch until ${date.formatDate(messages[0].timestamp * 1000, 'HH:mm:ss')}` : 'Prev'
          this.i18n.to = messages.length ? `Next batch from ${date.formatDate(messages[messages.length - 1].timestamp * 1000, 'HH:mm:ss')}` : 'Next'
          return this.filter && this.mode === 1 ? this.filterMessages(this.filter, messages) : messages
        },
        set (val) {
          this.$store.commit(`${this.moduleName}/setMessages`, val)
        }
      },
      origin: {
        async set (val) {
          await this.$store.dispatch(`${this.moduleName}/unsubscribePooling`)/* remove subscription for previous active entity */
          this.$store.commit(`${this.moduleName}/setOrigin`, val)
          this.$store.commit(`${this.moduleName}/clearMessages`)
          this.$store.commit(`${this.moduleName}/setCols`, this.config.cols)
          if (this.mode === 0) {
            await this.$store.dispatch(`${this.moduleName}/initTime`)
            await this.$store.dispatch(`${this.moduleName}/get`)
          }
          else if (this.mode === 1) {
            this.$store.dispatch(`${this.moduleName}/pollingGet`)
          }
        },
        get () {
          return this.$store.state[this.moduleName].origin
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
      from: {
        get () {
          return this.$store.state[this.moduleName].from
        },
        set (val) {
          val ? this.$store.commit(`${this.moduleName}/setFrom`, val) : this.$store.commit(`${this.moduleName}/setFrom`, 0)
        }
      },
      to: {
        get () {
          return this.$store.state[this.moduleName].to
        },
        set (val) {
          val ? this.$store.commit(`${this.moduleName}/setTo`, val) : this.$store.commit(`${this.moduleName}/setTo`, 0)
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
          val ? this.$store.commit(`${this.moduleName}/setLimit`, val) : this.$store.commit(`${this.moduleName}/setLimit`, 1000)
        }
      },
      originByPattern () {
        return this.originPattern.replace(/\/:(\w*)(\/)?/g, (match, p1, p2) => {
          return `/${this.item[p1]}${p2 || ''}`
        })
      }
    },
    methods: {
      resetParams () {
        this.$refs.scrollList.resetParams()
      },
      filterChangeHandler (val) {
        if (this.filter !== val) {
          this.filter = val
          if (this.mode === 0) {
            this.$store.commit(`${this.moduleName}/clearMessages`)
            this.$store.dispatch(`${this.moduleName}/get`)
          }
        }
      },
      modeChange (val) {
        val = +val
        this.$store.commit(`${this.moduleName}/clearMessages`)
        this.$store.commit(`${this.moduleName}/setMode`, val)
        switch (val) {
          case 0: {
            if (this.origin) {
              this.$store.dispatch(`${this.moduleName}/initTime`) // if need init time by last messages
                .then(() => {
                  this.$store.dispatch(`${this.moduleName}/get`)
                })
            }
            break
          }
          case 1: {
            if (this.origin) {
              this.$store.dispatch(`${this.moduleName}/pollingGet`)
            }
            break
          }
        }
        LocalStorage.set('Toolbox-mode', val)
      },
      updateColsHandler (cols) {
        this.cols = cols
      },
      dateChangeHandler (date) {
        this.$store.dispatch(`${this.moduleName}/get`, {name: 'setDate', payload: date})
      },
      datePrevChangeHandler () {
        this.$store.dispatch(`${this.moduleName}/get`, {name: 'datePrev'})
      },
      dateNextChangeHandler () {
        this.$store.dispatch(`${this.moduleName}/get`, {name: 'dateNext'})
      },
      paginationPrevChangeHandler () {
        let timestamp = 0
        timestamp = this.messages.length ? this.messages[0].timestamp * 1000 : 0
        this.$store.dispatch(`${this.moduleName}/get`, {name: 'paginationPrev', payload: timestamp})
      },
      paginationNextChangeHandler () {
        let timestamp = 0
        timestamp = this.messages.length ? this.messages[this.messages.length - 1].timestamp * 1000 : 0
        this.$store.dispatch(`${this.moduleName}/get`, {name: 'paginationNext', payload: timestamp})
      },
      actionHandler ({index, type, content}) {
        switch (type) {
          case 'view': {
            this.viewMessagesHandler({index, content})
            break
          }
        }
      },
      viewMessagesHandler ({index, content}) {
        this.$emit('view-log-message', content)
      }
    },
    watch: {
      item (val) {
        this.origin = this.originByPattern
      },
      mode (mode) {
        this.modeChange(mode)
      },
      limit (limit) {
        this.currentLimit = limit
      }
    },
    async created () {
      if (!this.$store.state[this.moduleName]) {
        this.$store.registerModule(this.moduleName, logsModule(this.$store, Vue, LocalStorage, this.moduleName))
      }
      else {
        this.$store.commit(`${this.moduleName}/clear`)
      }
      this.currentLimit = this.limit
      if (this.item) {
        this.$store.commit(`${this.moduleName}/setOrigin`, this.originByPattern)
        this.$store.commit(`${this.moduleName}/setCols`, this.config.cols)
      }
      if (this.$store.state[this.moduleName].mode === null) {
        this.modeChange(this.mode)
      }
    },
    destroyed () {
      this.$store.commit(`${this.moduleName}/clear`)
    },
    mixins: [filterMessages],
    components: { VirtualScrollList, LogsListItem }
  }
</script>

<style>
</style>