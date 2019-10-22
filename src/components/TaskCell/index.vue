<template>
  <!--每日任務Cell-->
  <div class="taskCell row flex-center-center margin-bottom-5">
    <!--icon-->
    <div class="column flex-1 flex-align-end">
      <svg-icon name="ic-tasklist" width="28" height="33"></svg-icon>
    </div>
    <!--任務文字與內容-->
    <div class="column flex-4 flex-align-start margin-left-10 margin-top-10 margin-bottom-10">
      <div class="column text-word-break">
        <div
          class="text text-size-13 text-weight-500 text-color-000000 text-align-left text-overflow-ellipsis"
        >123123123123123123123123123123123123123123</div>
        <div
          class="text text-size-11 text-weight-300 text-color-555550 text-align-left text-overflow-ellipsis"
        >123123123123123123123123123123123123123123</div>
        <div class="text text-size-10 text-weight-300 text-color-555550 text-align-left">
          獎勵
          <span class="text-color-ff821c text-weight-500">30</span> V币
        </div>
      </div>
    </div>
    <!--任務提示-->
    <div v-if="showThird" class="column flex-2 flex-center-center">
      <div class="column text-word-break">
        <!--第一行-->
        <div
          v-if="(showThird || showThirdOneRow) && !showThirdTwoRow"
          class="text text-size-11 text-weight-300 text-color-555550 text-align-left"
        >
          可領
          <span class="text-color-ff821c">1</span> 次
        </div>
        <!--第二行-->
        <div
          v-if="showThird && !showThirdOneRow"
          class="text text-size-11 text-weight-300 text-color-555550 text-align-left"
        >
          已領
          <span class="text-color-ff821c">1</span> 次
        </div>
        <!--領取獎勵-->
        <div v-if="showThirdTwoRow" class="column flex-2 flex-center-center">
          <button
            id="button"
            class="taskThirdButtom text text-color-ffffff text-size-11 text-weight-300"
          >领取奖励</button>
        </div>
        <!--第三行-->
        <div
          v-if="showThird && !showThirdOneRow && !showThirdTwoRow"
          class="text text-size-11 text-weight-300 text-color-555550 text-align-left"
        >
          总累计
          <span class="text-color-ff821c">100000</span>
        </div>
      </div>
    </div>
    <!--按鈕-->
    <div class="column flex-2 flex-center-center">
      <button
        v-if="showCountBotton"
        class="taskButtom text text-color-ffffff text-size-13 text-weight-300"
        style="height:auto"
      >
        <span id="buttonCount" class="text text-size-9 text-weight-normal">
          5/5
          <br />
        </span>领取奖励
      </button>
      <button
        v-if="!showCountBotton"
        id="button"
        class="taskButtom text text-color-ffffff text-size-13 text-weight-300"
      >领取奖励</button>
    </div>

    <!--完成任務-->
    <div v-if="isFinish" class="coverView"></div>
    <div v-if="isFinish" class="coverConetnt text text-size-16 text-weight-500 text-color-ffffff">
      <svg-icon name="group-5" width="112" height="50"></svg-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class TaskCell extends Vue {
  // 呈現第三列 & 三行不含按鈕
  private showThird = true;
  // 有計數的按鈕
  private showCountBotton = false;
  // 呈現第三列一行
  private showThirdOneRow = false;
  // 呈現第三列兩行含按鈕
  private showThirdTwoRow = false;
  // 完成任務
  private isFinish = false;
}
</script>


<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}

.flex-center-center {
  flex-direction: center;
  align-items: center;
}

.flex-align-end {
  align-items: flex-end;
}

.flex-align-start {
  align-items: flex-start;
}

// 排版

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.flex-3 {
  flex: 3;
}

.flex-4 {
  flex: 4;
}

.margin-left-6 {
  margin-left: 6px;
}

.margin-left-5 {
  margin-left: 5px;
}

.margin-right-6 {
  margin-right: 6px;
}

.margin-top-10 {
  margin-top: 10px;
}

.margin-bottom-12 {
  margin-bottom: 12px;
}

.margin-bottom-5 {
  margin-bottom: 5px;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-left-10 {
  margin-left: 10px;
}

// 文字

.text {
  font-family: STHeitiTC;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}

.text-overflow-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-align-left {
  text-align: left;
}

.text-word-break {
  word-break: break-all;
}

.text-color-f3806f {
  color: #f3806f;
}

.text-color-ff821c {
  color: #ff821c;
}

.text-color-000000 {
  color: #000000;
}

.text-color-555550 {
  color: #555550;
}

.text-color-ffffff {
  color: #ffffff;
}

.text-size-16 {
  font-size: 1rem;
}

.text-size-13 {
  font-size: 0.8125rem;
}

.text-size-11 {
  font-size: 0.6875rem;
}

.text-size-10 {
  font-size: 0.625rem;
}

.text-size-9 {
  font-size: 0.5625rem;
}

.text-weight-normal {
  font-weight: normal;
}

.text-weight-500 {
  font-weight: 500;
}

.text-weight-300 {
  font-weight: 300;
}

// 線
.line {
  height: 0.0625rem;
  background-color: #f3806f;
}

//Cell
.taskCell {
  height: 4.0625rem;
  background-color: #ffffff;
}

.taskButtom {
  width: 4.375rem;
  height: 2.1875rem;
  border-radius: 17.03125rem;
  background-color: #d8d8d8;
  outline: none;
  border: 0px;
}

.taskThirdButtom {
  height: auto;
  border-radius: 0.6875rem;
  background-image: linear-gradient(135deg, #f3806f 29%, #f8758d 78%);
  outline: none;
  border: 0px;
}

.background-Liner {
  background-image: linear-gradient(147deg, #f3806f 22%, #f8758d 84%);
}

.coverView {
  position: absolute;
  height: 4.0625rem;
  width: 100%;
  background-color: black;
  opacity: 0.5;
}

.coverConetnt {
  position: absolute;
  width: 100%
}
</style>
