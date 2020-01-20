<template>
  <div class="body column">
    <div class="adBanner margin-top-10" @click="goToShare">
      <img src="@/assets/test/task-banner.jpg" alt="">
    </div>
      <ad-banner :adBanner="adBanner" :isFork="true"></ad-banner>
    <!--每日任務-->
    <div v-for="(e, i) in promote" :key="i">
      <TaskCell :taskCellObj="e"></TaskCell>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IconTextWithLine from '@/components/IconTextWithLine/index.vue'
import TaskCell from '@/components/TaskCell/index.vue'
import { WebSocketModule } from '@/store/modules/webScoket'
import { getUserId } from '@/utils/cookies'
import AdBanner from '@/components/AdBanner/index.vue'

@Component({
  components: {
    IconTextWithLine,
    TaskCell,
    AdBanner
  },
})
export default class CurrentTask extends Vue {
  private promote: [] = []
  private adBanner = 'mobileAppPromote'
  private isFork = Boolean

  mounted() {
    console.log('進')

    const _this = this
    const userId = Number.parseInt(getUserId() || '0')
    const ws = WebSocketModule.webSocket
    const requestInfo = {
      type: 'getTaskList',
      data: {
        key: 'PWA-KEY',
        user_id: userId,
      },
    }
    ws.send(JSON.stringify(requestInfo))
    ws.onmessage = function(res: any) {
      const resJson = JSON.parse(res.data)
      if (resJson.status) {
        const status = resJson.status
        const data = resJson.data

        _this.$set(_this, 'promote', data.category.promote)
        console.log(data.category.promote)
      }
    }
  }
  goToShare() {
    this.$router.push("/share");
  }
}
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  background-color: #f9f9f9;
  padding-bottom: 100px;
}

.adBanner {
  height: 3.625rem;
  border-radius: 0.25rem;
  img {
    width: 100%;
  }
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
  justify-content: center;
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

.mb-12 {
  margin-bottom: 12%;
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
