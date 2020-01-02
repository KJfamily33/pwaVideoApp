<template>
  <div class="header">
    <div class="control-bar">
      <div class="pull-left">
        <div v-if="showBackBtn" class="go-back">
          <svg-icon
            name="ic-back"
            width="24"
            height="24"
            color="#FFF"
          ></svg-icon>
        </div>
      </div>
      <div class="center">
        <div v-if="!showVideoTitle" class="logo">
          <svg-icon
            name="ic-v-2-logo"
            width="80"
            height="18"
            color="#FFF"
          ></svg-icon>
        </div>
        <div v-if="!showVideoTitle" class="path-name">影片列表</div>
        <div v-if="showVideoTitle" class="title">
          文字測試文字測試文字測試文字測試文字測試
        </div>
      </div>
      <div class="pull-right">
        <div v-if="showQuestionBtn" class="question">
          <svg-icon
            name="question-circle-o"
            width="24"
            height="24"
            color="#FFF"
          ></svg-icon>
        </div>
        <div v-if="showPromotionBtn" class="promotion">
          <svg-icon
            name="ic-promotion"
            width="24"
            height="24"
            color="#FFF"
          ></svg-icon>
        </div>
        <div v-if="showShareBtn" class="share">
          <svg-icon
            name="ic-share"
            width="24"
            height="24"
            color="#FFF"
          ></svg-icon>
        </div>
      </div>
    </div>
    <div class="nav-bar"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class HeaderBar extends Vue {
  private showVideoTitle = false
  private showBackBtn = false
  private showShareBtn = false
  private showQuestionBtn = false
  private showPromotionBtn = false
}
</script>
<style lang="scss" scoped>
.header {
  width: 100vw;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12);
  background-color: rgb(255, 0, 118);
  opacity: 0.9;
  min-height: 3.25rem;
  max-height: 4.5rem;

  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .control-bar {
    width: 100%;
    flex: 1 1;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .center {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 0 0 60%;
      padding: 0 0.5rem;
      overflow: hidden;

      .path-name {
        color: white;
        font-size: 15px;
        padding: 0 0.5rem;
      }
      .title {
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: white;
      }
    }
    .pull-left {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex: 0 0 20%;
      padding-left: 1rem;
      overflow: hidden;
    }
    .pull-right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      flex: 0 0 20%;
      padding-right: 1rem;
      overflow: hidden;

      > div {
        padding-left: 0.3rem;
      }
    }
  }

  .nav-bar {
  }
}
</style>
