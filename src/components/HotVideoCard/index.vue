<template>
  <div>
    <transition-group name="fade" class="video-list">
      <div class="video-card" v-for="(hot, indx) in hotList" :key="indx">
        <a class="video-item" href="" @click.prevent="test(hot)">
          <img :src="imgUrl" alt="" />
        </a>
        <div class="watch-item">
          <div class="watch">
            <span class="watch-text">观看</span>
            <span>{{ hot.playCount }}</span>
          </div>
          <span class="length">片长{{ hot.duration | formatSecond }}</span>
        </div>
        <span class="title">{{ hot.title }}</span>
      </div>
    </transition-group>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'ComponentName',
  filters: {
    // title_display(val: any) {
    //   return val.length > 20 ? val.substr(0,25): val;
    // },
    formatSecond(secs: any) {
      var hr = Math.floor(secs / 3600)
      var min = Math.floor((secs - hr * 3600) / 60)
      var sec = parseInt(secs - hr * 3600 - min * 60)

      while (min.length < 2) {
        min = '0' + min
      }
      while (sec.length < 2) {
        sec = '0' + min
      }
      if (hr) hr += ':'
      return hr + min + ':' + sec
    },
  },
})
export default class HotVideoCard extends Vue {
  @Prop() private hotList!: any
  private imgUrl = require('@/assets/test/1.jpg')

  private test(data) {
    console.log(data)
    const videoIdEncrypt =
      data.isTranscoded === 0 ? data.idEncrypt : data.transcodeEncrypt
    this.$router.push({
      name: '/video-info',
      params: { videoIdEncrypt: videoIdEncrypt },
    })
  }
}
</script>

<style lang="scss" scoped>
.video-list::-webkit-scrollbar {
  display: none;
}

.video-list {
  display: flex;
  overflow-x: scroll;
  width: 100vw;
  .video-card {
    padding-right: 15px;
    width: 70vw;
    min-width: 70vw;

    .video-item {
      img {
        width: 100%;
        border-radius: 0.8rem;

        -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        box-shadow: 0 2px 6px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        -webkit-transition: -webkit-box-shadow 0.1s ease,
          -webkit-transform 0.1s ease;
        transition: -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
        transition: box-shadow 0.1s ease, transform 0.1s ease;
      }
    }
    .watch-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .watch {
        color: #ff0088;
        font-weight: bold;
        .watch-text {
          margin: 0 5px;
        }
      }
      .length {
        font-size: 12px;
        font-weight: bold;
        color: #2c3e50;
      }
    }
    .title {
      font-weight: bold;
      color: #2c3e50;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-align: start;
      padding: 0 5px;
      font-size: 17px;
      margin-top: 5px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
