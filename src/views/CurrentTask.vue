<template>
  <div class="body column">
    <div
      class="adBanner margin-top-10 margin-bottom-12 margin-left-6 margin-right-6"
    ></div>
    <!--每日任務-->
    <IconTextWithLine></IconTextWithLine>
    <div v-for="(e, i) in 3" :key="i">
      <TaskCell></TaskCell>
    </div>
    <!--每週任務-->
    <IconTextWithLine></IconTextWithLine>
    <div v-for="(e, i) in 1" :key="i">
      <TaskCell></TaskCell>
    </div>
    <!--每月任務-->
    <IconTextWithLine></IconTextWithLine>
    <div v-for="(e, i) in 1" :key="i">
      <TaskCell></TaskCell>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IconTextWithLine from '@/components/IconTextWithLine/index.vue'
import TaskCell from '@/components/TaskCell/index.vue'

@Component({
  components: {
    IconTextWithLine,
    TaskCell,
  },
})
export default class CurrentTask extends Vue {}
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  background-color: #f9f9f9;
}

.adBanner {
  height: 3.625rem;
  border-radius: 0.25rem;
  background-color: red;
}

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
  height: auto;
  background-color: #ffffff;
}

.taskButtom {
  width: 4.375rem;
  height: 2.1875rem; // 有5/5 時 需換成 auto
  border-radius: 17.03125rem;
  background-image: linear-gradient(147deg, #f3806f 22%, #f8758d 84%);
  outline: none;
  border: 0px;
}

.background-color-d8d8d8 {
  background-color: #d8d8d8;
  background-image: none;
}
</style>
