<template>
  <div class="body">
    <!--播放器-->
    <div class="video"></div>
    <!--縮圖-->
    <div class="updown">
      <div class="updownContent flex-center margin-right-10" @click="updown">
        <div class="text text-14-500 text-color-f3806f">缩图与标签</div>
        <svg-icon class="margin-left-5 ic-down" name="ic-down" width="10" height="6"></svg-icon>
        <svg-icon class="margin-left-5 ic-up" name="ic-up" width="10" height="6"></svg-icon>
      </div>
    </div>
    <!--縮圖內容-->
    <div class="scroll">
      <div class="canscroll">
        <!--縮圖-->
        <div class="picture margin-left-right-3 margin-top-10"></div>
        <div class="picture margin-left-right-3 margin-top-10"></div>
        <div class="picture margin-left-right-3 margin-top-10"></div>
        <div class="picture margin-left-right-3 margin-top-10"></div>
        <div class="picture margin-left-right-3 margin-top-10"></div>
        <div class="picture margin-left-right-3 margin-top-10"></div>
      </div>
    </div>
    <div class="scroll">
      <!--標籤-->
      <div class="canscroll">
        <div class="scrolltext margin-left-right-3 margin-bottom-10 padding-left-right-10">234</div>
        <div class="scrolltext margin-left-right-3 margin-bottom-10 padding-left-right-10">aasdf234</div>
        <div class="scrolltext margin-left-right-3 margin-bottom-10 padding-left-right-10">23fasdf4</div>
        <div class="scrolltext margin-left-right-3 margin-bottom-10 padding-left-right-10">2f34</div>
        <div
          class="scrolltext margin-left-right-3 margin-bottom-10 padding-left-right-10"
        >23fffffasdfasdfasdf4</div>
        <div
          class="scrolltext margin-left-right-3 margin-bottom-10 padding-left-right-10"
        >234asdfasdf</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class VideoInfo extends Vue {
  updown() {
    let scroll = document.getElementsByClassName("scroll") as HTMLCollectionOf<
      HTMLDivElement
    >;
    let icUp = document.getElementsByClassName("ic-up") as HTMLCollectionOf<
      HTMLElement
    >;
    let icDown = document.getElementsByClassName("ic-down") as HTMLCollectionOf<
      HTMLElement
    >;

    for (let i = 0; i < scroll.length; i++) {
      if (scroll[i].style.display === "flex") {
        scroll[i].style.display = "none";
      } else {
        scroll[i].style.display = "flex";
      }
    }

    for (let j = 0 ; j < icUp.length ; j++) {

      if (icUp[j].style.display === "block") {
        icUp[j].style.display = "none";
      } else {
        icUp[j].style.display = "block";
      }
    }

    for (let k = 0 ; k < icDown.length ; k++) {
       if (icDown[k].style.display === "block") {
 icDown[k].style.display = "none";
      } else {
           icDown[k].style.display = "block";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video {
  padding-top: 66.66%;
  width: 100%;
  background-color: red;
}

// 排版
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.margin-right-10 {
  margin-right: 10px;
}

.margin-left-5 {
  margin-left: 5px;
}

.margin-left-right-3 {
  margin-left: 3px;
  margin-right: 3px;
}

.margin-top-10 {
  margin-top: 10px;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.padding-left-right-10 {
  padding-left: 10px;
  padding-right: 10px;
}

// 縮圖
.updown {
  height: 2.1875rem;
  width: 100%;
}

.updownContent {
  height: 2.1875rem;
  width: auto;
  float: right;
}

// 文字

.text-14-500 {
  font-size: 0.875rem;
  font-weight: 500;
}

.text-color-f3806f {
  color: #f3806f;
}

.text {
  font-family: STHeitiTC;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}

// 縮圖內容
.ic-up {
  display: none;
}

.ic-down {
  display: block;
}

.scroll {
  width: 100%;
  display: none;
}
.canscroll {
  height: auto;
  overflow-x: scroll;
  white-space: nowrap;
}

.picture {
  width: 5.625rem;
  height: 3.75rem;
  border-radius: 0.25rem;
  background-color: red;
  display: inline-block;
}

.scrolltext {
  width: auto;
  height: 1.3125rem;
  border-radius: 0.6875rem;
  background-image: linear-gradient(143deg, #f3806f 24%, #f8758d 82%);
  display: inline-block;
}
</style>
