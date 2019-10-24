<template>
  <div
    class="login-registered-panel flex-align-center flex-justify-center"
    :style="{backgroundImage: 'url('+require('../../assets/'+obj.bgLink+'.jpg')+')'}"
  >
    <!--第一-->
    <div v-if="obj.index ===1" class="column flex-align-center flex-justify-end">
      <div class="text text-size-40 text-weight-300 text-color-f3806f">{{ obj.firstText }}</div>
      <div
        class="margin-bottom-105 text text-color-ffffff text-size-26 text-weight-300"
      >{{ obj.secText }}</div>
    </div>
    <!--第二-->
    <div
      v-if="obj.index ===2"
      class="column flex-align-start flex-justify-end margin-left-15 margin-right-47"
    >
      <div class="row flex-justify-center flex-align-center">
        <svg-icon :name="obj.icon" width="38" height="38"></svg-icon>
        <div
          class="margin-left-5 text text-size-40 text-weight-300 text-color-f3806f text-align-left"
        >{{ obj.firstText }}</div>
      </div>
      <div
        class="text text-color-ffffff text-size-22 text-weight-300 text-align-left"
      >{{ obj.secText }}</div>
      <div
        class="margin-bottom-105 text text-color-dddddd text-size-26 text-weight-300 text-align-left"
      >{{ obj.thirdText }}</div>
    </div>
    <!--第三-->
    <div
      v-if="obj.index ===3"
      class="column flex-align-end flex-justify-end margin-right-15 margin-left-47"
    >
      <div class="row flex-direction-row-re flex-justify-center flex-align-center">
        <svg-icon :name="obj.icon" width="38" height="38"></svg-icon>
        <div
          class="margin-right-5 text text-size-40 text-weight-300 text-color-f3806f text-align-right"
        >{{ obj.firstText }}</div>
      </div>
      <div
        class="text text-color-ffffff text-size-22 text-weight-300 text-align-right"
      >{{ obj.secText }}</div>
      <div
        class="margin-bottom-105 text text-color-dddddd text-size-26 text-weight-300 text-align-right"
      >{{ obj.thirdText }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ChangeVIPObj } from "@/types/changeVip";

@Component
export default class ChangeVIPPicture extends Vue {
  @Prop() private obj!: ChangeVIPObj;
}
</script>

<style lang="scss" scoped>
.login-registered-panel {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position-x: center;
  display: inline-flex;
}

// 排版

.row {
  display: flex;
  flex-direction: row;
}

.flex-direction-row-re {
  flex-direction: row-reverse;
}

.column {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.flex-justify-end {
  justify-content: flex-end;
}

.flex-justify-center {
  justify-content: center;
}

.flex-align-center {
  align-items: center;
}

.flex-align-start {
  align-items: flex-start;
}

.flex-align-end {
  align-items: flex-end;
}

.margin-bottom-105 {
  margin-bottom: 105px;
}

.margin-left-15 {
  margin-left: 15px;
}

.margin-left-47 {
  margin-left: 47px;
}

.margin-left-5 {
  margin-left: 5px;
}

.margin-right-5 {
  margin-right: 5px;
}

.margin-right-47 {
  margin-right: 47px;
}

.margin-right-15 {
  margin-right: 15px;
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

.text-align-right {
  text-align: right;
}

.text-size-26 {
  font-size: 1.625rem;
}

.text-size-22 {
  font-size: 1.375rem;
}

.text-size-40 {
  font-size: 2.5rem;
}

.text-weight-300 {
  font-weight: 300;
}

.text-color-ffffff {
  color: #ffffff;
}

.text-color-f3806f {
  color: #f3806f;
}

.text-color-dddddd {
  color: #dddddd;
}
</style>
