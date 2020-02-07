<template>
  <div class="body">
    <!--內容狀態欄-->
    <div class="opctionBar">
      <svg-icon name="ic-vcoin" width="20" height="20"></svg-icon>
      <div class="money">999,999,999,999</div>
      <div class="sortIcon">
        <svg-icon
          v-if="!isSort"
          name="ic-setting"
          width="20"
          height="29"
        ></svg-icon>
        <svg-icon
          v-if="isSort"
          name="ic-setting-h"
          width="20"
          height="29"
        ></svg-icon>
      </div>
    </div>
    <!--內容列-->
    <div class="cell">
      <div v-for="(e, i) in 12" :key="i">
        <VHistoryCell :obj="obj"></VHistoryCell>
      </div>
    </div>

    <!--提示窗-->
    <!--提示窗 遮罩-->
    <div class="cover coverBg"></div>
    <!--提示窗 內容‘-->
    <div class="cover coverConetnt">
      <div class="title">记录筛选</div>
      <div class="width-70pa">
        <div class="content">V币类型</div>
        <div class="line"></div>
        <div class="sortItems">
          <button class="sortItem">增加</button>
          <!--已選擇-->
          <div class="selected">
            <div class="sortItemSeleced">減少</div>
            <div class="icon">
              <svg-icon name="ic-check" width="14" height="14"></svg-icon>
            </div>
          </div>
        </div>
        <div class="content">时间范围</div>
        <div class="line"></div>
        <div class="sortItems">
          <button class="sortItem">一周</button>
          <button class="sortItem">一个月</button>
          <button class="sortItem">三个月</button>
          <button class="sortItem">六个月</button>
        </div>
      </div>
      <div class="line"></div>
      <div class="button text-weight-500">筛选</div>
      <div class="line"></div>
      <div class="button text-weight-300">重置</div>
      <div class="line"></div>
      <div class="button text-weight-300">取消</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VHistoryCell from '@/components/VHistoryCell/index.vue'
import { VHistoryInfoObj } from '@/types/vhistory'

@Component({
  components: {
    VHistoryCell,
  },
})
export default class VHistory extends Vue {
  // 是否有篩選條件 改變icon
  private isSort = false

  private obj: VHistoryInfoObj = {
    iconName: '每日',
    taskTitle: '每日登陸',
    taskContent: '每日登录 2019-08-30',
    timeText: '2019-08-30 01:03',
    money: '30',
    cost: '+',
  }
}
</script>
<style lang="scss" scoped>
.body {
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cell {
  overflow-y: scroll;
}

.opctionBar {
  display: flex;
  flex-direction: row;
  margin-top: 9px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
}

.opctionBar .money {
  font-family: STHeitiTC;
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f3806f;
  margin-left: 5px;
}

.width-70pa {
  width: 70%;
}

.text-weight-300 {
  font-weight: 300;
}

.text-weight-500 {
  font-weight: 500;
}

.opctionBar .sortIcon {
  position: absolute;
  right: 15px;
}

.coverBg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

.coverConetnt {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 21.25rem;
  height: auto;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.coverConetnt .line {
  height: 1px;
  background-color: #f3806f;
  width: 100%;
}

.coverConetnt .button {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: STHeitiTC;
  font-size: 1.25rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f3806f;
  width: 100%;
}

.coverConetnt .title {
  font-family: STHeitiTC;
  font-size: 1.5625rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f3806f;
  margin-top: 15px;
  margin-bottom: 20px;
}

.coverConetnt .content {
  font-family: STHeitiTC;
  font-size: 1.125rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a5a5a5;
  margin-bottom: 5px;
}

.coverConetnt .sortItems {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.coverConetnt .sortItem {
  width: 45%;
  height: 2.1875rem;
  border-radius: 0.5rem;
  background-color: #dfdfdf;
  border: 0;
  outline: none;
  font-family: STHeitiTC;
  font-size: 0.9375rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #595959;
  margin-bottom: 10px;
}

.coverConetnt .selected {
  width: 45%;
  height: 2.1875rem;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 0;
  background: linear-gradient(to bottom, #fb6f9d, #f3806f);
  padding: 1px 1px;
  margin-bottom: 10px;
  position: relative;
}

.selected .icon {
  position: absolute;
  right: 4px;
  top: 0;
}

.coverConetnt .sortItemSeleced {
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover {
  display: none;
}
</style>
