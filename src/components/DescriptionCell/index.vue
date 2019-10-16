<template>
  <div class="descriptioncell">
    <div class="title margin-bottom-5" @click="show('one')">
      <div class="column">
        <svg-icon name="ic-like" width="22" height="22"></svg-icon>
      </div>
      <div class="column column-flex-4 flex-align-start">
        <div class="text">123</div>
      </div>
      <div class="column">
        <svg-icon id="oneDown" name="ic-down" width="10" height="6" class="downicon"></svg-icon>
        <svg-icon id="oneUp" name="ic-up" width="10" height="6" class="upicon"></svg-icon>
      </div>
    </div>
    <div id="one" class="one margin-top-5 margin-bottom-10 text-content">456</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IDescriptionObj } from "@/types/description";

@Component({
  components: {}
})
export default class DescriptionCell extends Vue {
  // 外接
  @Prop() private DescriptionObj!: IDescriptionObj;

  // function
  show(id: string) {
    var content = document.getElementById(id) as HTMLDivElement;
    var iconDown = document.getElementById(id + "Down") as HTMLElement;
    var iconUp = document.getElementById(id + "Up") as HTMLElement;
    if (content.style.display === "none") {
      // 顯示內容
      content.style.display = "block";
      // 更改icon
      iconDown.style.display = "none";
      iconUp.style.display = "inline-block";
    } else {
      // 隱藏內容
      content.style.display = "none";
      // 更改icon
      iconDown.style.display = "inline-block";
      iconUp.style.display = "none";
    }
  }
}
</script>


<style lang="scss" scoped>
.descriptioncell {
  width: 95%;
  height: 2.1875rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
// 標題
.title {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

// 等分
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.column-flex-4 {
  flex: 4;
}

// 位置
.flex-align-start {
  align-items: flex-start;
}

// 間距
.margin-top-bottom-10 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.margin-top-5 {
  margin-top: 5px;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-bottom-5 {
  margin-bottom: 5px;
}

.margin-left-15 {
  margin-bottom: 15px;
}

// 展開項目
.one {
  display: none;
  width: 80%;
  height: auto;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
// 上下箭頭
.upicon {
  display: none;
}

.downicon {
  display: inline-block;
}

// 文字
.text {
  font-family: STHeitiTC;
  font-size: 0.9375rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f3806f;
}

.text-content {
  font-family: STHeitiTC;
  font-size: 0.75rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #a5a5a5;
  text-align: left;
}
</style>
