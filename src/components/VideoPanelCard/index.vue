<template>
  <a class="video-card" href="">
    <div class="photo-panel">
      <div class="preview-card-link">
        <div>
          <div class="aspect-panel">
            <div class="aspect__spacer"></div>
            <div class="preview-card-panel">
              <img src="holder.js/100px100py?auto=yes&text=16:9" alt="" />
            </div>
          </div>
        </div>
        <div class="preview-card-info">
          <div class="time-box">{{ videoInfoObj.time }}</div>
        </div>
      </div>
    </div>
    <div class="context-panel">
      <div class="title">{{ videoInfoObj.title }}</div>
      <div class="info">
        <span class="">
          <svg-icon name="ic-time" width="17" height="15"></svg-icon>
          {{ videoInfoObj.uploadDate }}
        </span>
        <span class="">
          <svg-icon name="ic-view" width="21" height="17"></svg-icon>
          {{ videoInfoObj.count }}
        </span>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Holder from 'holderjs'
import { IVideoInfoObj } from '@/types/video'

@Component

export default class VideoPanelCard extends Vue {
  @Prop({
    default:{
      preImg: '',
      time: '99:99:99',
      title: '无标题',
      uploadDate: '1小时前',
      count: 0,
    }
  }) private videoInfoObj!: IVideoInfoObj


  mounted() {
    const img = document.querySelectorAll('.preview-card-panel img') as unknown as HTMLElement
    if (!this.videoInfoObj.preImg || this.videoInfoObj.preImg === '') {
      Holder.run({
        images: img,
      })
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
  border-radius: 0.28571429rem;
  -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
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
    padding: 0.5rem 0.7rem;
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
