<template>
  <div class="body">
    <!--廣告-->
    <div class="ad"></div>
    <!--廣告選擇icon-->
    <div class="row margin-top-5 margin-bottom-12 width-50">
      <div class="column">
        <div class="page-seleted"></div>
      </div>
      <div class="column">
        <div class="page-unSeleted"></div>
      </div>
      <div class="column">
        <div class="page-unSeleted"></div>
      </div>
    </div>
    <!--精品推荐-->
    <div class="text flex-center width-915pa text-color-f3806f">
      <svg-icon name="ic-like" width="20" height="20"></svg-icon>
      <span class="margin-left-5">精品推荐</span>
    </div>
    <!--線-->
    <div class="line margin-top-7 margin-bottom-10 margin-left-right-20"></div>
    <!--AppIcon-->
    <div class="row width-89pa">
      <div v-for="(e, i) in appList" :key="i">
        <StroeApp v-if="e.position == 0" :appList="e"></StroeApp>
      </div>
    </div>
    <!--ADBanner-->
    <div class="ad-banner margin-bottom-10"></div>
    <!--全部應用-->
    <div class="text flex-center width-915pa text-color-f3806f">
      <svg-icon name="ic-app" width="20" height="20"></svg-icon>
      <span class="margin-left-5">全部应用</span>
    </div>
    <!--線-->
    <div class="line margin-top-7 margin-bottom-10 margin-left-right-20"></div>
    <!--AppIcon-->
    <div class="column width-89pa">
      <div class="width-100pa" v-for="(e, i) in appList" :key="i">
        <StroeApplication v-if="e.position == 1" :appList="e"></StroeApplication>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StroeApp from '@/components/StoreApp/index.vue'
import StroeApplication from '@/components/StoreApplication/index.vue'
import { getGetall } from '@/api/apps'

@Component({
  components: {
    StroeApp,
    StroeApplication,
  },
})
export default class Store extends Vue {
  private appList: any = []
  mounted() {
    const _this = this
    _this.getAppList()
  }
  getAppList() {
    const _this = this
    getGetall().then(res => {
      _this.appList = res.data.data.apps
      // console.log(_this.appList)
    }).catch(e=>{
      console.log(e)
    })
  }    
}
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
// AD
.ad {
  height: 11.25rem;
  width: 100%;
  background-color: red;
}

// 排版

.width-50 {
  width: 3.125rem;
}

.width-100pa {
  width: 100%;
}

// 線寬
.width-915pa {
  width: 91.5%;
}

// 內容寬度
.width-89pa {
  width: 89%;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.margin-top-5 {
  margin-top: 5px;
}

.margin-bottom-12 {
  margin-bottom: 12px;
}

.margin-top-7 {
  margin-top: 7px;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-right-5 {
  margin-right: 5px;
}

.margin-left-5 {
  margin-left: 5px;
}

.margin-left-right-20 {
  margin-left: 20px;
  margin-right: 20px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}

//page
.page-seleted {
  width: 0.625rem;
  height: 0.625rem;
  background-color: #f3806f;
  border-radius: 50%;
}

.page-unSeleted {
  width: 0.625rem;
  height: 0.625rem;
  background-color: rgba(243, 128, 111, 0.25);
  border-radius: 50%;
}

// 文字
.text {
  font-family: STHeitiTC;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}

.text-color-f3806f {
  color: #f3806f;
}

// 線
.line {
  width: 92%;
  height: 0.0625rem;
  background-color: #f3806f;
  display: flex;
}

//ad banner
.ad-banner {
  width: 95%;
  height: 3.625rem;
  border-radius: 0.25rem;
  background-color: red;
}
</style>
