<template>
  <div class="">
    <div id="dplayer"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import '@/styles/DPlayer.min.css'

import Hls from 'hls.js'
import DPlayer from 'dplayer'

@Component({
  components: {},
})
export default class DPlayerTest extends Vue {
  mounted() {
    console.log('hello?')
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      video: {
        url:
          'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8',
        type: 'customHls',
        customType: {
          customHls: function(video, player) {
            const hls = new Hls()
            hls.loadSource(video.src)
            hls.attachMedia(video)
          },
        },
      },
    })
    console.log(dp.plugins.hls)
  }
}
</script>
