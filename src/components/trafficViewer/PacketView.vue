<template>
  <div class="traffic-viewer__packets q-pa-sm" v-if="packets && packets.length">
    <div v-for="(batch, index) in batches" :key="index" style="min-width: 820px;">
      <div class="packets__separator" :style="{backgroundColor: bgDataColors[batch.type]}" v-if="batches[index - 1]"></div>
      <div class="packet__header text-center" :style="{backgroundColor: bgDataColors[batch.type]}">
        <span class="rounded-borders text-white full-height">
          <q-icon size="1rem" :color="eventsColors[batch.type]" :name="eventIcons[batch.type]" style="vertical-align: text-bottom;"/>
          <span class="text-uppercase text-white">{{eventsDesc[batch.type]}}</span>
          (
          <span class="text-white" :class="{'q-mr-sm': batch.size}" style="font-size: .8rem">{{date.formatDate(batch.timestamp * 1000, 'DD/MM/YYYY HH:mm:ss')}}</span>
          <span v-if="batch.size" class="q-mr-sm text-white" style="font-size: .8rem">size: {{batch.size}}B</span>
          <small
            v-if="batch.transport"
            class="rounded-borders q-px-xs text-white"
            :class="{'bg-blue': batch.transport === 'tcp', 'bg-purple-9': batch.transport === 'udp'}"
            style="vertical-align: middle;"
          >
            {{batch.transport}}
          </small>
          )
        </span>
      </div>
      <hex-viewer
        :style="{backgroundColor: bgDataColors[batch.type]}"
        v-if="batch.data"
        :hex="batch.data"
        :view="view"
      />
      <div class="packets__separator" :style="{backgroundColor: bgDataColors[batch.type]}" v-if="batches[index + 1]"></div>
      <div class="packets__missing" v-if="getNeedMissing(index)">
        <div class="missing__up"></div>
        <div class="missing__down"></div>
      </div>
    </div>
  </div>
  <div v-else style="text-align: center; color: #9e9e9e; font-size: 3rem; padding-top: 40px;" >Select packets</div>
</template>

<script>
import HexViewer from '../HexViewer'
import convertMixin from '../../mixins/convert'
import { date } from 'quasar'
export default {
  props: ['packets', 'view'],
  data () {
    return {
      date,
      eventsColors: {
        0: 'green',
        1: 'red',
        2: 'purple',
        130: 'purple',
        3: 'yellow',
        131: 'yellow'
      },
      eventsDesc: {
        0: 'Connect',
        1: 'Disconnect',
        2: 'Data recieved',
        130: 'Data recieved',
        3: 'Data sent',
        131: 'Data sent'
      },
      eventIcons: {
        0: 'mdi-lan-connect',
        1: 'mdi-lan-disconnect',
        2: 'mdi-arrow-right-thick',
        130: 'mdi-arrow-right-thick',
        3: 'mdi-arrow-left-thick',
        131: 'mdi-arrow-left-thick'
      },
      bgDataColors: {
        0: 'rgba(76, 175, 80, 0.4)',
        1: 'rgba(244, 67, 54, 0.4)',
        2: 'rgba(156, 39, 176, 0.4)',
        130: 'rgba(156, 39, 176, 0.4)',
        3: 'rgba(255, 235, 59, 0.4)',
        131: 'rgba(255, 235, 59, 0.4)'
      }
    }
  },
  computed: {
    batches () {
      if (!this.packets || !this.packets.length) { return [] }
      return this.packets.reduce((batches, packet, index) => {
        const batch = { ...packet }
        batch.data = this.base64ToHex(packet.data)
        batch.index = [batch.index]
        batch.transport = (batch.type === 0 || batch.type === 1) ? '' : (batch.type >= 128) ? 'udp' : 'tcp'
        if (batch.data) {
          batch.size = Math.floor(batch.data.length / 2)
        }
        const prevBatch = batches[batches.length - 1]
        if (prevBatch && prevBatch.type === batch.type && batch.type === 2 && prevBatch.conn === batch.conn && prevBatch.index[prevBatch.index.length - 1] + 1 === batch.index[0]) {
          prevBatch.data += batch.data
          prevBatch.size += batch.size
          prevBatch.index = [...prevBatch.index, ...batch.index]
        } else {
          batches.push(batch)
        }
        return batches
      }, [])
    }
  },
  methods: {
    getNeedMissing (batchIndex) {
      const current = this.batches[batchIndex]
      const nextBatch = this.batches[batchIndex + 1]
      return nextBatch && current.index[current.index.length - 1] + 1 < nextBatch.index[0]
    }
  },
  mixins: [convertMixin],
  components: { HexViewer }
}
</script>
<style lang="stylus">
  .packets__separator
    position relative
    left 50%
    width 3px
    height 15px
  .packets__missing
    .missing__up
      &:after
        background linear-gradient(-45deg, $yellow-9 5px, transparent 0), linear-gradient(45deg, $yellow-9 5px, transparent 0)
        background-position left-bottom
        background-repeat repeat-x
        background-size 10px 10px
        content: " "
        display block
        bottom 0px
        left 0px
        width 100%
        height 10px
    .missing__down
      margin-top -7px
      &:after
        background linear-gradient(-45deg, $grey-9 5px, transparent 0), linear-gradient(45deg, $grey-9 5px, transparent 0)
        background-position left-bottom
        background-repeat repeat-x
        background-size 10px 10px
        content " "
        display block
        bottom 0px
        left 0px
        width 100%
        height 10px
</style>
