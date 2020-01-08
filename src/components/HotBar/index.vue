<template>
  <div class="hotbar">
    <div class="section" v-for="(type, indx) in typeList" :key="indx">
      <div class="hotlist">
        <div class="most">
          <span>最多人看的<span class="most-type">{{ type.typeName }}</span></span>
        </div>
        <div class="filter">
          <a v-if="isDaily" href="" class="filter-btn-active" @click.prevent="">每日</a>
          <a v-else href="" class="filter-btn" @click.prevent="checkDaily">每日</a>
          <a v-if="isWeekly" href="" class="filter-btn-active" @click.prevent="">每周</a>
          <a v-else href="" class="filter-btn" @click.prevent="checkWeekly">每周</a>
          <a v-if="isMonthly" href="" class="filter-btn-active" @click.prevent="">每月</a>
          <a v-else href="" class="filter-btn" @click.prevent="checkMonthly">每月</a>
        </div>
      </div>
      <HotVideoCard :hotList="type.weekly"></HotVideoCard>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HotVideoCard from '@/components/HotVideoCard/index.vue'

@Component({
  components: {
    HotVideoCard
  },
})
export default class HotBar extends Vue {
  @Prop() private typeList!: any
  private typeDate = []
  private isDaily = false
  private isWeekly = true
  private isMonthly = false

  mounted() {
    const vm = this
  }
  checkDaily() {
    const vm = this
    vm.isDaily = true
    vm.isWeekly = false
    vm.isMonthly = false
  }
  checkWeekly() {
    const vm = this
    vm.isDaily = false
    vm.isWeekly = true
    vm.isMonthly = false    
  }
  checkMonthly() {
    const vm = this
    vm.isDaily = false
    vm.isWeekly = false
    vm.isMonthly = true  
  }
}
</script>

<style lang="scss" scoped>
.hotbar {
  background-color: #fff;
  padding: 20px 10px;
  margin-bottom: 100px;
  .section {
    padding: 20px 10px;
    border-bottom: 3px solid #DDDDDD;
    .hotlist {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      .most {
        .most-type {
          font-size: 20px;
          font-weight: bold;
          color: #A42D00;
          margin-left: 3px;
        }
      }
      .filter {
        .filter-btn-active {
          background-color: #FF0088;
          color: #fff;
          font-size: 20px;
          border-radius: 20px;
          padding: 5px;
          margin: 0 5px;
        }
        .filter-btn {
          background-color: #AAAAAA;
          color: #fff;
          font-size: 16px;
          border-radius: 20px;
          padding: 6px;
          margin: 0 5px;
        }
      }
    }
  }
}
</style>