<template>
  <q-page>
    <q-resize-observer @resize="onResize" />
    <q-toolbar class="justify-between q-py-none bg-grey-9">
      <div style="max-width: 75%;">
        <q-btn icon="mdi-arrow-left" @click="goBack" flat class="q-mr-sm" :class="{'q-px-none': $q.platform.is.mobile}" color="white"/>
        <!-- device selector -->
        <div :style="{maxWidth: $q.platform.is.mobile ? '35%' : '40%'}" style="display: inline-flex" class="q-mr-sm">
          <q-select
            ref="itemDeviceSelect"
            class="items__select"
            :class="{'items__select--no-selected': !active}"
            :value="active"
            :options="filteredDevices"
            filled
            :label="active ? 'Device' : 'SELECT DEVICE'"
            dark hide-bottom-space dense color="white"
            :disable="!isNeedSelect || true"
            :hide-dropdown-icon="!isNeedSelect || true"
            :virtual-scroll-item-size="48"
            :virtual-scroll-slice-size="6"
            :virtual-scroll-sticky-size-start="48"
            popup-content-class="items__popup"
            :popup-content-style="{height: `${((filteredDevices.length > 6 ? 6 : filteredDevices.length) * 48) + 48 + (filteredDevices.length ? 0 : 34)}px`}"
            @filter="filterDevicesSelectItems"
          >
            <div slot="before-options" class="bg-dark q-pa-xs select__filter">
              <q-input v-model="deviceFilter" outlined hide-bottom-space rounded dense color="white" dark placeholder="Filter" autofocus @input="filter => $refs.itemDeviceSelect.filter(filter)">
                <q-icon slot="prepend" name="mdi-magnify" color="white" />
              </q-input>
            </div>
            <q-icon slot="prepend" name="mdi-developer-board" color="white" v-if="$q.platform.is.desktop"/>
            <template v-slot:no-option>
              <div style="min-height: 77px;">
                <q-input v-model="deviceFilter" @input="filter => $refs.itemDeviceSelect.filter(filter)" outlined hide-bottom-space rounded dense color="white" dark placeholder="Filter" class="q-ma-xs" autofocus>
                  <q-icon slot="prepend" name="mdi-magnify" color="white" />
                </q-input>
                <div class="text-center">No results</div>
              </div>
            </template>
            <template v-slot:selected-item="scope">
              <q-item
                v-bind="scope.itemProps"
                v-on="scope.itemEvents"
                class="q-pa-none"
                style="min-height: 20px; margin-top: 2px; max-width: 100%"
              >
                <q-item-section>
                  <q-item-label header class="ellipsis overflow-hidden q-pa-none text-white">{{selectedDevice.name || '&lt;noname&gt;'}}</q-item-label>
                  <q-item-label class="q-pa-none q-mt-none text-white ellipsis" caption style="line-height: 0.75rem!important; margin-top: 1px;"><small>{{selectedDevice.configuration && selectedDevice.configuration.ident ? selectedDevice.configuration.ident : `&lt;no ident&gt;`}}</small></q-item-label>
                </q-item-section>
                <q-item-section class="text-white" side>
                  <q-item-label v-if="selectedDevice.deleted" class="q-pa-none text-right"><small class="cheap-modifier">DELETED</small></q-item-label>
                  <q-item-label class="q-pa-none q-mt-none text-right"><small>#{{selectedDevice.id}}</small></q-item-label>
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:option="scope">
              <q-item
                v-bind="scope.itemProps"
                @click="active = scope.opt.id, $emit('view-data-hide')"
                v-on="scope.itemEvents"
                :class="{'text-grey-8': scope.opt.deleted}"
                class="q-pa-xs"
                clickable
              >
                <q-item-section>
                  <q-item-label header class="ellipsis overflow-hidden q-pa-xs">{{scope.opt.name || '&lt;noname&gt;'}}</q-item-label>
                  <q-item-label class="q-pa-none q-mt-none" caption style="line-height: 0.75rem!important; margin-top: 1px;"><small>{{scope.opt.configuration && scope.opt.configuration.ident ? scope.opt.configuration.ident : `&lt;no ident&gt;`}}</small></q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label v-if="scope.opt.deleted" class="q-pa-xs text-right"><small class="cheap-modifier cheap-modifier--item" :class="{'cheap-modifier--mobile': $q.platform.is.mobile}">DELETED</small></q-item-label>
                  <q-item-label class="q-pa-none q-mt-none text-right" :class="{'q-pr-xs': $q.platform.is.mobile}"><small>#{{scope.opt.id}}</small></q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <!-- device selector -->
        <div :style="{maxWidth: $q.platform.is.mobile ? '35%' : '40%'}" style="display: inline-flex">
          <q-select
            ref="itemCalcSelect"
            class="items__select"
            :class="{'items__select--no-selected': !activeCalcId}"
            :value="activeCalcId"
            :options="filteredCalcs"
            filled
            clearable
            @clear="clearActiveCalc(), $emit('view-data-hide')"
            :label="activeCalcId ? 'Calc' : 'SELECT CALC'"
            dark hide-bottom-space dense color="white"
            :virtual-scroll-item-size="48"
            :virtual-scroll-slice-size="6"
            :virtual-scroll-sticky-size-start="48"
            popup-content-class="items__popup"
            :popup-content-style="{height: `${((filteredCalcs.length > 6 ? 6 : filteredCalcs.length) * 48) + 48 + (filteredCalcs.length ? 0 : 34)}px`}"
            @filter="filterCalcsSelectItems"
          >
            <div slot="before-options" class="bg-dark q-pa-xs select__filter">
              <q-input v-model="calcFilter" outlined hide-bottom-space rounded dense color="white" dark placeholder="Filter" @input="filter => $refs.itemCalcSelect.filter(filter)" autofocus>
                <q-icon slot="prepend" name="mdi-magnify" color="white" />
              </q-input>
            </div>
            <q-icon slot="prepend" name="mdi-calculator-variant" color="white" v-if="$q.platform.is.desktop"/>
            <template v-slot:no-option>
              <div style="min-height: 77px;">
                <q-input v-model="calcFilter" @input="filter => $refs.itemCalcSelect.filter(filter)" outlined hide-bottom-space rounded dense color="white" dark placeholder="Filter" class="q-ma-xs" autofocus>
                  <q-icon slot="prepend" name="mdi-magnify" color="white" />
                </q-input>
                <div class="text-center">No results</div>
              </div>
            </template>
            <template v-slot:selected-item="scope">
              <q-item
                v-if="selectedCalc"
                v-bind="scope.itemProps"
                v-on="scope.itemEvents"
                class="q-pa-none"
                style="min-height: 20px; margin-top: 2px; max-width: 100%"
              >
                <q-item-section>
                  <q-item-label header class="ellipsis overflow-hidden q-pa-none text-white">{{selectedCalc.name || '&lt;noname&gt;'}}</q-item-label>
                </q-item-section>
                <q-item-section class="text-white" side>
                  <q-item-label v-if="selectedCalc.deleted" class="q-pa-none text-right"><small class="cheap-modifier">DELETED</small></q-item-label>
                  <q-item-label class="q-pa-none q-mt-none text-right"><small>#{{selectedCalc.id}}</small></q-item-label>
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:option="scope">
              <q-item
                v-bind="scope.itemProps"
                @click="setActiveCalc(scope.opt.id), $emit('view-data-hide')"
                v-on="scope.itemEvents"
                :class="{'text-grey-8': scope.opt.deleted}"
                class="q-pa-xs"
                clickable
              >
                <q-item-section>
                  <q-item-label header class="ellipsis overflow-hidden q-pa-xs">{{scope.opt.name || '&lt;noname&gt;'}}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label v-if="scope.opt.deleted" class="q-pa-xs text-right"><small class="cheap-modifier cheap-modifier--item" :class="{'cheap-modifier--mobile': $q.platform.is.mobile}">DELETED</small></q-item-label>
                  <q-item-label class="q-pa-none q-mt-none text-right" :class="{'q-pr-xs': $q.platform.is.mobile}"><small>#{{scope.opt.id}}</small></q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
    </q-toolbar>
    <div v-if="+size[1] && active">
      <intervals
        ref="intervals"
        @view-data="viewDataHandler"
        @on-map="onMapHandler"
        @in-messages="(interval) => viewedInterval = interval"
        @change:date-range="range => { dateRange = range, viewedInterval = null }"
        :activeId="activeCalcId"
        :item="selectedCalc"
        :activeDeviceId="active"
        :isEnabled="!!+size[1]"
        :limit="0"
        :config="config.intervals"
        v-if="activeCalcId && isInit"
        :style="{height: `calc(${size[1]}vh - ${+size[0] ? isVisibleToolbar ? '50px' : '25px' : isVisibleToolbar ? '100px' : '50px'})`, position: 'relative', maxWidth: mapMinimizedOptions.value && mapMinimizedOptions.type && mapMinimizedOptions.type === 'top' ? '66%' : ''}"
      />
      <div v-else-if="!activeCalcId" class="text-grey text-center q-pt-lg" style="font-size: 2.5rem;" :style="{minHeight: `calc(${size[1]}vh - ${+size[0] ? isVisibleToolbar ? '50px' : '25px' : isVisibleToolbar ? '100px' : '50px'})`, position: 'relative'}">
        Select calc
      </div>
      <messages
        ref="messages"
        @view-data="viewDataMessageHandler"
        :item="selectedDevice"
        :intervalModuleName="config.intervals.devicesMessages.vuexModuleName"
        :interval="viewedInterval"
        :dateRange="dateRange"
        :activeId="active"
        :limit="limit"
        v-if="activeCalcId && isInit && +size[1]"
        :style="[{height: `calc(${size[1]}vh - ${+size[0] ? isVisibleToolbar ? '50px' : '25px' : isVisibleToolbar ? '100px' : '50px'})`, position: 'relative'}, {maxWidth: mapMinimizedOptions.value && mapMinimizedOptions.type && mapMinimizedOptions.type === 'messages' ? '66%' : ''}]"
        :config="messagesConfig"
      />
    </div>
    <map-frame
      ref="map"
      v-if="active && activeCalcId && hasRouteIntervals && $q.platform.is.desktop && isVisibleMap"
      :device="selectedDevice"
      :siblingHeight="siblingHeight"
      @map:close="isVisibleMap = false"
      @map:minimize="mapMinimizeHandler"
    />
  </q-page>
</template>

<script>
import intervals from '../../components/intervals/Index.vue'
import messages from '../../components/intervals/DevicesMessages.vue'
import { mapState, mapActions } from 'vuex'
import init from '../../mixins/entitiesInit'
import MapFrame from '../../components/MapFrame'

export default {
  props: [
    'limit',
    'isLoading',
    'isVisibleToolbar',
    'isNeedSelect',
    'config'
  ],
  mixins: [init],
  data () {
    return {
      calcFilter: '',
      deviceFilter: '',
      active: null,
      activeCalcId: null,
      ratio: 50,
      isInit: false,
      isItemsInit: false,
      isVisibleMap: false,
      siblingHeight: 0,
      mapMinimizedOptions: {},
      activeViewedMessage: null,
      messagesConfig: this.config.intervals.devicesMessages,
      viewedInterval: null,
      dateRange: [0, 0]
    }
  },
  computed: {
    ...mapState({
      tokenType (state) { return state.tokenInfo && state.tokenInfo.access ? state.tokenInfo.access.type : -1 },
      devicesCollection (state) {
        return state.devices || {}
      },
      tasksCollection (state) {
        return state.tasks || {}
      },
      calcsCollection (state) {
        return state.calcs || {}
      }
    }),
    devices () {
      return Object.values(this.devicesCollection)
    },
    tasks () {
      const tasks = Object.values(this.tasksCollection)
      return tasks
    },
    calcs () {
      return Object.values(this.calcsCollection)
    },
    selectedDevice () {
      return this.devicesCollection[this.active] || {}
    },
    selectedCalc () {
      return this.calcsCollection[this.activeCalcId] ? this.calcsCollection[this.activeCalcId] : {}
    },
    filteredDevices () {
      const devices = this.devices
      // let devicesIdsByTasks = this.tasks.map(task => task.device_id)
      // devices = devices.filter(device => devicesIdsByTasks.includes(device.id))
      // if (this.active) {
      //   devices = devices.filter(item => this.tasks.some(task => this.active === task.calc_id && item.id === task.device_id))
      // }
      return devices // this.filterItems(devices, this.deviceFilter.toLowerCase())
    },
    filteredCalcs () {
      let calcs = this.calcs
      calcs = calcs.filter(item => this.tasks.some(task => this.active === task.device_id && item.id === task.calc_id))
      if (this.isInit && this.active && this.activeCalcId && !this.tasks.filter(task => task.device_id === this.active && task.calc_id === this.activeCalcId).length) {
        this.$nextTick(() => { this.clearActiveCalc() })
      }
      return this.filterItems(calcs, this.calcFilter.toLowerCase())
    },
    size () {
      return [this.ratio, 100 - this.ratio]
    },
    hasRouteIntervals () { return true }
  },
  methods: {
    filterItems (items, filter) {
      const filteredItems = filter ? items.filter(item => {
        return (
          item &&
          typeof item.name !== 'undefined' &&
          item.name !== null &&
          item.name.toLowerCase().indexOf(filter) >= 0
        ) ||
        (
          item &&
          typeof item.id !== 'undefined' &&
          item.id !== null &&
          (item.id + '').indexOf(filter) >= 0
        )
      }) : items
      filteredItems.sort((l, r) => {
        if (!l.name) { return -1 }
        if (!r.name) { return 1 }
        const lName = l.name.toLowerCase()
        const rName = r.name.toLowerCase()
        if (lName < rName) {
          return -1
        } else if (lName > rName) {
          return 1
        }
        return 1
      })
      return filteredItems
    },
    ...mapActions(['getDeleted']),
    filterDevicesSelectItems (filter, update) {
      if (this.isItemsInit) {
        update()
        return
      }
      this.itemsLoad('devices', update, this.active, () => { this.isItemsInit = true })
    },
    filterCalcsSelectItems (filter, update) {
      update()
    },
    viewDataHandler (content) {
      if (content) {
        this.$refs.messages.unselect()
        this.$emit('view-data', content)
      }
    },
    viewDataMessageHandler (content) {
      if (content) {
        if (!this.viewedInterval) {
          this.$refs.intervals.unselect()
        }
        this.$emit('view-data', content)
      }
    },
    onMapHandler (routes) {
      if (!this.isVisibleMap) {
        this.openMapHandler()
        this.$nextTick(() => {
          this.$refs.map.addRoutes(routes)
        })
        return false
      }
      if (this.$refs.map && this.isVisibleMap) {
        this.$refs.map.addRoutes(routes)
      }
    },
    unselect () {
      this.$refs.intervals.unselect()
      this.$refs.messages.unselect()
      this.viewedInterval = null
    },
    setActive (id) {
      this.active = id
    },
    setActiveCalc (id) {
      this.activeCalcId = id
    },
    clearActive () {
      this.setActive(null)
    },
    clearActiveCalc () {
      this.setActiveCalc(null)
    },
    goBack () {
      this.$router.push(`/devices/${this.active}`).catch(err => err)
    },
    init () {
      const deviceIdFromRoute = this.$route.params && this.$route.params.id ? Number(this.$route.params.id) : null,
        calcIdFromRoute = this.$route.params && this.$route.params.calcId ? Number(this.$route.params.calcId) : null
      this.isInit = true
      if (deviceIdFromRoute) {
        this.setActive(deviceIdFromRoute)
        if (calcIdFromRoute && this.calcsCollection[calcIdFromRoute]) {
          this.activeCalcId = calcIdFromRoute
        }
      }
      this.$emit('inited')
    },
    mapMinimizeHandler (options) {
      this.mapMinimizedOptions = options
      if (options.type === 'bottom') {
        this.siblingHeight = this.size[1]
      } else if (options.type === 'top') {
        this.siblingHeight = this.size[0]
      } else { this.siblingHeight = 0 }
    },
    openMapHandler () {
      this.isVisibleMap = !this.isVisibleMap
    },
    onResize () {
      this.$refs.map && this.$refs.map.onWindowResize({ width: window.innerWidth, height: window.innerHeight })
    }
  },
  watch: {
    ratio (val) {
      this.$nextTick(() => {
        if (+this.size[0] && this.active) {
          // this.$refs.logs.resetParams()
          this.$emit('view-data-hide')
        }
        if (+this.size[1] && this.active && this.activeCalcId) {
          this.$refs.intervals.resetParams()
        }
      })
    },
    $route (route) {
      if (
        route.params && route.params.id && Number(route.params.id) === this.active &&
        route.params.calcId && this.activeCalcId === Number(route.params.calcId)
      ) { return false }
      if (route.params && route.params.id) {
        const deviceId = Number(route.params.id)
        if (this.devicesCollection[deviceId]) {
          if (deviceId !== this.active) {
            this.setActive(deviceId)
          }
          const calcId = Number(route.params.calcId)
          if (route.params && route.params.calcId && this.calcsCollection[calcId]) {
            this.activeCalcId = calcId
          }
        } else if (this.isInit) {
          this.clearActive()
        }
      } else if (route.params && !route.params.id) {
        this.clearActive()
      }
    },
    active (id, old) {
      if (id) {
        this.$router.push(`/devices/${id}/calc/${this.activeCalcId || 'null'}/intervals`).catch(err => err)
      } else {
        this.$router.push('/devices').catch(err => err)
      }
    },
    activeCalcId (activeCalcId) {
      if (activeCalcId) {
        this.$router.push(`/devices/${this.active}/calc/${activeCalcId}/intervals`).catch(err => err)
      }
    }
  },
  components: { intervals, messages, MapFrame }
}
</script>
<style lang="stylus">
  .middle-modificator
    position absolute
    left calc(50% - 71px)
  .items__select
    max-width 100%
    &--no-selected
      width 180px
      .q-field__marginal
        height auto!important
    .q-field__marginal
      height 48px
  .items__popup
    .select__filter
      position sticky
      top 0
      z-index 1
    .select__get-deleted
      position sticky
      bottom 0
      z-index 1
  .items__filter
    min-width 250px
    border 1px solid $grey-9
    border-radius 3px
  .cheap-modifier
    font-size .6rem
    font-weight bolder
    border-radius 3px
    background-color #90a4ae
    color white
    padding 0 2px
    width 45px
    position absolute
    top -10px
    right 0px
    &--item
      top 5px
    &--mobile
      right 7px
  .deleted-action
    width 100%
    color #eee
    background-color #999
    font-size .7rem
    padding-top 0
    padding-bottom 0
</style>
