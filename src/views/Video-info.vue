<template>
  <div class="body">
    <!--播放器-->
    <div class="video"></div>
    <!--縮圖-->
    <div class="updown">
      <div class="updownContent flex-center margin-right-10" @click="updown">
        <div class="text text-14-500 text-color-f3806f">缩图与标签</div>
        <svg-icon id="ic-down" class="margin-left-5 ic-down" name="ic-down" width="10" height="6"></svg-icon>
        <svg-icon id="ic-up" class="margin-left-5 ic-up" name="ic-up" width="10" height="6"></svg-icon>
      </div>
    </div>
    <!--縮圖內容-->
    <div class="scroll">
      <div class="canscroll">
        <!--縮圖-->
        <div class="picture margin-left-right-3 margin-top-10" @click="showPicture"></div>
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
    <!--猜你喜歡-->
    <div class="width-95pa row margin-bottom-5">
      <svg-icon name="ic-like" width="20" height="20"></svg-icon>
      <div class="margin-left-5 text text-color-f3806f text-16-500">猜您喜欢</div>
    </div>
    <!--線-->
    <div class="line width-95pa margin-bottom-10"></div>
    <!--影片-->
    <div class="flex-center" v-for="(e, i) in 6" :key="i">
      <VideoInfoCell></VideoInfoCell>
    </div>
    <!--放大縮圖-->
    <div class="cover coverBG" @click="closeCover"></div>
    <div class="cover coverContent column flex-center">
      <div class="coverPicture">
        <div class="coverLeftButtom">
          <svg-icon class="margin-left-5" name="ic-left" width="30" height="30"></svg-icon>
        </div>
        <div class="coverRightButtom">
          <svg-icon class="margin-right-5" name="ic-right" width="30" height="30"></svg-icon>
        </div>
      </div>
      <div class="row">
        <div class="coverPictrueSelected margin-top-10 margin-left-right-2point5"></div>
        <div class="coverPictrueSelect margin-top-10 margin-left-right-2point5"></div>
        <div class="coverPictrueSelect margin-top-10 margin-left-right-2point5"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VideoInfoCell from "@/components/VideoInfoCell/index.vue";

@Component({
  components: {
    VideoInfoCell
  }
})
export default class VideoInfo extends Vue {
  // 點擊放大縮圖背景
  closeCover() {
    let cover = document.getElementsByClassName("cover") as HTMLCollectionOf<
      HTMLDivElement
    >;
    for (let i = 0; i < cover.length; i++) {
      cover[i].style.display = "none";
    }
  }

  // 點擊縮圖
  showPicture() {
    let cover = document.getElementsByClassName("cover") as HTMLCollectionOf<
      HTMLDivElement
    >;
    for (let i = 0; i < cover.length; i++) {
      cover[i].style.display = "flex";
    }
  }

  // 縮圖與標籤 展開與縮起
  updown() {
    let scroll = document.getElementsByClassName("scroll") as HTMLCollectionOf<
      HTMLDivElement
    >;
    let icUp = document.getElementById("ic-up") as HTMLElement;
    let icDown = document.getElementById("ic-down") as HTMLElement;

    for (let i = 0; i < scroll.length; i++) {
      if (scroll[i].style.display === "flex") {
        // 縮起
        scroll[i].style.display = "none";
        icDown.style.display = "block";
        icUp.style.display = "none";
      } else {
        // 展開
        scroll[i].style.display = "flex";
        icDown.style.display = "none";
        icUp.style.display = "block";
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

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}

.width-95pa {
  width: 95%;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center-end {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.flex-around-end {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.margin-right-10 {
  margin-right: 10px;
}

.margin-right-5 {
  margin-right: 5px;
}

.margin-left-5 {
  margin-left: 5px;
}

.margin-left-right-3 {
  margin-left: 3px;
  margin-right: 3px;
}
.margin-left-right-2point5 {
  margin-left: 2.5px;
  margin-right: 2.5px;
}

.margin-top-10 {
  margin-top: 10px;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-bottom-5 {
  margin-bottom: 5px;
}

.padding-left-right-10 {
  padding-left: 10px;
  padding-right: 10px;
}

.padding-left-right-4 {
  padding-left: 4px;
  padding-right: 4px;
}

.padding-right-4 {
  padding-right: 4px;
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

.text-12-300 {
  font-size: 0.75rem;
  font-weight: 300;
}

.text-12-500 {
  font-size: 0.75rem;
  font-weight: 500;
}

.text-16-500 {
  font-size: 1rem;
  font-weight: 500;
}

.text-color-f3806f {
  color: #f3806f;
}

.text-color-000000 {
  color: #000000;
}

.text-color-ffffff {
  color: #ffffff;
}

.text-color-a5a5a5 {
  columns: #a5a5a5;
}

.text-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text {
  font-family: STHeitiTC;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  line-height: 24px;
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

// 線
.line {
  height: 0.0625rem;
  background-color: #f3806f;
}

.coverBG {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

.coverContent {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.coverPicture {
  padding-top: 66.66%;
  width: 100%;
  background-color: red;
}

.coverLeftButtom {
  position: fixed;
  left: 0%;
  top: 50%;
  transform: translate(0%, -50%);
}

.coverRightButtom {
  position: fixed;
  right: 0%;
  top: 50%;
  transform: translate(0%, -50%);
}

.coverPictrueSelected {
  width: 0.625rem;
  height: 0.625rem;
  background-color: #f3806f;
  border-radius: 50%;
}

.coverPictrueSelect {
  width: 0.625rem;
  height: 0.625rem;
  background-color: rgba(243, 128, 111, 0.25);
  border-radius: 50%;
}

.cover {
  display: none;
}
</style>
