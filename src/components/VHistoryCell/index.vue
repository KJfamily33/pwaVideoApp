<template>
	<div class="cell row padding-left-13 padding-right-13">
      <div class="column flex-1 flex-justify-center flex-align-center">
        <div class="icon text">{{ obj.iconName }}</div>
      </div>
      <div class="column flex-4 sec">
        <div class="title">{{ obj.taskTitle }}</div>
        <div class="titleContent">{{ obj.taskContent }}</div>
      </div>
      <div class="column flex-3 sec ">
        <div class="thirdTitle">{{ obj.timeText }}</div>
        <div class="thirdContent">{{ obj.cost }}<span class="thirdContentNumber">{{ obj.money }}</span> V币</div>
      </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    import { VHistoryInfoObj } from '@/types/vhistory'

    @Component({
        components: {

        },
    })
    export default class VHistoryCell extends Vue {
      @Prop() private obj!:VHistoryInfoObj

    }
</script>
<style lang="scss" scoped>
.cell {
  width: 100%;
  height: auto;
  background-color: #ffffff;
  margin-bottom: 5px;
}

// 排版

.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}

.flex-align-center {
  align-items: center;
}

.flex-justify-center {
  justify-content: center;
}

.flex-1 {
  flex: 1;
}

.flex-4 {
  flex: 4;
}
.flex-3 {
  flex: 3;
}

.padding-left-13 {
  padding-left: 13px;
}

.padding-right-13 {
  padding-right: 13px;
}

// text
.text {
  font-family: STHeitiTC;
  font-size: 1.0625rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: STHeitiTC;
  font-size: 0.9375rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  text-align: left;
  padding-left: 10px;
}

.titleContent {
  font-family: STHeitiTC;
  font-size: 0.75rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #555550;
  text-align: left;
  padding-left: 10px;
}

.thirdTitle {
font-family: STHeitiTC;
 font-size: 0.75rem;
 font-weight: 300;
 font-stretch: normal;
 font-style: normal;
 line-height: normal;
 letter-spacing: normal;
 color: #000000;
text-align: left;
}

.thirdContent {
   font-family: STHeitiTC;
   font-size: 0.8125rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #555550;
  text-align: left;
}

.thirdContentNumber {
    font-weight: 500;
  color: #ff821c;
}

// icon
.icon {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to bottom, #fb6f9c, #f3806f);
  border-radius: 50%;
}

.sec {
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
