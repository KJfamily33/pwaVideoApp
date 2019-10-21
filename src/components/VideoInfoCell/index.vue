<template>
	    <!--影片-->
    <div class="videoCell width-95pa margin-bottom-10 row">
      <div class="column flex-1">
        <div class="videoCellPicture">
          <div class="videoTime text text-color-ffffff text-12-500 padding-left-right-4">
            99:99:99
          </div>
        </div>
      </div>
      <div class="column flex-center-end flex-2 padding-right-4">
        <div
          class="text text-color-000000 text-14-500 flex-1 flex-center text-ellipsis"
        >样子很帅的华裔小哥和漂亮女朋友样子很帅的华裔小哥和漂亮女朋友样子很帅的华裔小哥和漂亮女朋友样子很帅的华裔小哥和漂亮女朋友</div>
        <div class="column flex-around-end flex-2">
          <div class="row flex-center" style="float:right">
            <svg-icon name="ic-view" width="20" height="13"></svg-icon>
            <div class="text text-color-a5a5a5 text-12-300 margin-left-5">1734次观看</div>
          </div>
          <div class="row flex-center" style="float:right">
            <svg-icon name="ic-time" width="13" height="13"></svg-icon>
            <div class="text text-color-a5a5a5 text-12-300 margin-left-5">18小时前</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    @Component({
        components: {

        },
    })
    export default class VideoInfoCell extends Vue {

    }
</script>



<style lang="scss" scoped>
// 影片
.videoCell {
  height: 5rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;

}

.videoCellPicture {
 position:relative;
  width: 8.125rem;
  height: 100%;
  border-radius: 0.25rem;
  background-color: red;
}

.videoTime {
  width: auto;
  height: 1.5rem;
  border-radius: 0.25rem;
  background-image: linear-gradient(
    114deg,
    rgba(249, 117, 141, 0.5),
    rgba(246, 98, 76, 0.51)
  );
  position:absolute;
    bottom:0;
    right:0;

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

</style>
