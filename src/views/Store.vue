<template>
  <div class="body">
    <div>
      <AdBanner :adBanner="adTitle" :height="200" :isFork="true"></AdBanner>
    </div>
    <div class="section">
      <div class="recommend">
        <svg-icon name="ic-like" width="20" height="20"></svg-icon>
        <span class="margin-left-5">精品推荐</span>
      </div>
      <!--線-->
      <div class="line"></div>
      <!--AppIcon-->
      <div class="app-icon">
        <div v-for="(e, i) in appList" :key="i">
          <StroeApp v-if="e.position == 0" :appList="e"></StroeApp>
        </div>
      </div>
    </div>
    <AdBanner :adBanner="adTitleBottom" :height="200" :isFork="true"></AdBanner>    
    <div class="section">
      <div class="all">
        <svg-icon name="ic-app" width="20" height="20"></svg-icon>
        <span class="margin-left-5">全部应用</span>
      </div>
      <!--線-->
      <div class="line"></div>
      <!--AppIcon-->
      <div>
        <div v-for="(e, i) in appList" :key="i">
          <StroeApplication v-if="e.position == 1" :appList="e"></StroeApplication>
        </div>                            
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StroeApp from '@/components/StoreApp/index.vue'
import StroeApplication from '@/components/StoreApplication/index.vue'
import AdBanner from '@/components/AdBanner/index.vue'
import { getGetall } from '@/api/apps'
import { AdvModule } from '@/store/modules/adv'

@Component({
  components: {
    StroeApp,
    StroeApplication,
    AdBanner
  },
})
export default class Store extends Vue {
  private appList: any = []
  private adTitle = 'applicationAppCenterTop'
  private adTitleBottom = 'applicationAppCenterMiddle'
  private adbottom = 'bottomSuspension'
  private isFork = Boolean
  mounted() {
    const _this = this
    _this.getAppList()
  }
  getAppList() {
    const _this = this
    getGetall().then(res => {
      _this.appList = res.data.data.apps
      console.log(_this.appList)
    }).catch(e=>{
      console.log(e)
    })
  }    
}
</script>

<style lang="scss" scoped>
.body {
  padding-bottom: 100px;
}

.section {
  margin-right: 3%;
  margin-left: 3%;
  margin-top: 10px;
}

.recommend {
  display: flex;
  align-items: center;
  padding-bottom: 7px;
  color: #f3806f;
}

.app-icon {
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
}

.all {
  display: flex;
  align-items: center;
  padding-bottom: 7px; 
  color: #f3806f;
}

.line {
  height: 0.0625rem;
  background-color: #f3806f;
}

.margin-left-5 {
  margin-left: 5px;
}
</style>
