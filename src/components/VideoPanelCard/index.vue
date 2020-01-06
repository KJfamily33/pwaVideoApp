<template>
  <a class="video-card">
    <div class="photo-panel" @click="clickCard(videoInfoObj, 0)">
      <div class="preview-card-link">
        <div>
          <div class="aspect-panel">
            <div class="aspect__spacer"></div>
            <div class="preview-card-panel">
              <video
                v-if="isPlay && videoInfoObj.randomVideoHref != ''"
                autoplay
                loop="loop"
                muted
                :src="videoInfoObj.randomVideoHref"
              ></video>
              <img :src="videoInfoObj.originHref" alt />
            </div>
          </div>
        </div>
        <div class="preview-card-info">
          <div class="time-box">{{ getTime() }}</div>
        </div>
      </div>
    </div>
    <div class="context-panel" @click="clickCard(videoInfoObj, 1)">
      <div class="title">{{ videoInfoObj.title }}</div>
      <div class="info">
        <span class>
          <svg-icon name="ic-time" width="17" height="15"></svg-icon>
          {{ getDate() }}
        </span>
        <span class>
          <svg-icon name="ic-view" width="21" height="17"></svg-icon>
          {{ videoInfoObj.playCount }}
        </span>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import Holder from 'holderjs'

@Component
export default class VideoPanelCard extends Vue {
  @Prop() videoInfoObj: any

  isPlay = false

  mounted() {

  }

  getTime() {
    let pad = function(num: string | number, size: number) {
      return ('000' + num).slice(size * -1)
    }
    let time: any = parseFloat(this.videoInfoObj.duration).toFixed(3)
    let hours = Math.floor(time / 60 / 60)
    let minutes = Math.floor(time / 60) % 60
    let seconds = Math.floor(time - minutes * 60)

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2)
  }

  getDate() {
    let dateBegin = new Date(this.videoInfoObj.releasedAt.replace(/-/g, '/')) //将-转化为/，使用new Date

    let dateEnd = new Date() //获取当前时间
    let dateDiff = dateEnd.getTime() - dateBegin.getTime() //时间差的毫秒数
    let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)) //计算出相差天数
    let leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
    //计算相差分钟数
    let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
    //计算相差秒数
    let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000)

    if (dayDiff != 0) {
      return dayDiff + '天前'
    } else if (hours != 0) {
      return hours + '小时前'
    } else {
      return minutes + '分钟前'
    }
  }

  clickCard(data, index) {
    switch (index) {
      case 0:
        if (this.isPlay === true) {
          const videoIdEncrypt =
            data.isTranscoded === 0 ? data.idEncrypt : data.transcodeEncrypt
          this.$router.push({
            name: '/video-info',
            params: { videoIdEncrypt: videoIdEncrypt },
          })
        } else {
          this.isPlay = true
          this.$emit('startVideo', this.videoInfoObj.itemIndex)
        }

        break

      default:
        this.$router.push({ name: '/video-info', params: { data } })
        break
    }
  }
}
</script>

<style scoped lang="scss">
.video-card {
  max-width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  border-radius: 0.8rem;
  -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  box-shadow: 0 2px 6px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  -webkit-transition: -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  z-index: 0;

  .photo-panel {
    position: relative;

    .aspect-panel {
      .aspect__spacer {
        /*padding-bottom: 42.85%;*/
        padding-bottom: 56.25%;
      }
      .preview-card-panel {
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        position: absolute;

        img {
          height: 100%;
          width: 100%;

          border-top-left-radius: 0.8rem;
          border-top-right-radius: 0.8rem;
        }

        video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }

    .preview-card-info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .time-box {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        position: absolute;
        right: 0;
        bottom: 0;

        font-size: 12px;
        font-weight: 500;

        width: 55px;
        height: 24px;
        border-top-left-radius: 4px;
        background-image: linear-gradient(
          11deg,
          rgba(249, 117, 141, 0.5),
          rgba(246, 98, 76, 0.51)
        );
      }
    }
  }

  .context-panel {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    border: none;
    border-top: 1px solid rgba(34, 36, 38, 0.1);
    background: 0 0;
    margin: 0;
    padding: 0.3rem 0.8rem;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 0.95rem;
    border-radius: 0;
    height: 3.25rem;
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑',
      Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .title {
      font-weight: 500;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-align: start;
      text-overflow: ellipsis;
      width: 100%;
      font-size: 18px;
    }

    .info {
      font-size: 12px;
      font-weight: 300;
      color: #a5a5a5;
      display: flex;
      flex-direction: row;

      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: 25px;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
