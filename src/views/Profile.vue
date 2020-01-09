<template>
  <div class="body">
    <!-- 個人資訊-->
    <div class="infoBackGroundIMG">
      <!--背景遮罩-->
      <div class="cover-panel">
        <div class="row">
          <div class="column">
            <div class="pictrueWithName">
              <div class="picture"></div>
              <div class="text" style="color:#ffffff">9487</div>
            </div>
          </div>
          <div class="column" style="flex-grow:2">
            <div class="text" style="text-align: left;">
              <svg-icon name="ic-vcoin" width="15" height="15"></svg-icon>
              999,999,999
              <div class="icon">
                <svg-icon name="ic-refresh" width="15" height="15"></svg-icon>
              </div>
            </div>
            <div class="text" style="text-align: left;">
              <svg-icon name="ic-vvip" width="15" height="15"></svg-icon>
              999,999,999
            </div>
            <div class="text" style="text-align: left;">
              <span style="color:#ffffff;">会员到期时间</span>
              2099年12年25日
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div v-for="(e, i) in 9" :key="i">
      <ProfileRow :ProfileInfoObj="objs[i]"></ProfileRow>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ProfileRow from '@/components/ProfileRow/index.vue'
import HeaderBar from '../components/HeaderBar/index.vue'
import { IProfileInfoObj } from '@/types/profile'

@Component({
  components: {
    ProfileRow,
  },
})
export default class Profile extends Vue {
  private objs: Array<IProfileInfoObj> = [
    {
      preImg: require('@/icons/svg/ic-acount.svg'),
      title: '帐户',
      subtitle: '9487@gmail.com',
      icon: false,
      link: '' /** 需要轉跳的頁面 */,
    },
    {
      preImg: require('@/icons/svg/ic-exchang.svg'),
      title: '兑换码',
      subtitle: '',
      icon: true,
      link: 'ChangeCode' /** 需要轉跳的頁面 */,
    },
    {
      preImg: require('@/icons/svg/ic-card.svg'),
      title: '充值',
      subtitle: '',
      icon: true,
      link: 'Recharge' /** 需要轉跳的頁面 */,
    },
    {
      preImg: require('@/icons/svg/ic-ropaganda.svg'),
      title: '推广',
      subtitle: '',
      icon: true,
      link: 'share' /** 需要轉跳的頁面 */,
    },
    {
      preImg: require('@/icons/svg/ic-vcoinqa.svg'),
      title: 'V币说明',
      subtitle: '',
      icon: true,
      link: 'v-coin-description' /** 需要轉跳的頁面 */,
    },
    {
      preImg: require('@/icons/svg/ic-vipqa.svg'),
      title: 'VIP说明',
      subtitle: '',
      icon: true,
      link: 'vip-description' /** 需要轉跳的頁面 */,
    },
    {
      preImg: require('@/icons/svg/ic-website.svg'),
      title: '最新地址',
      subtitle: '',
      icon: true,
      link: 'newaddress' /** 需要轉跳的頁面 */,
    },
    {
      preImg: require('@/icons/svg/ic-aboutv-2.svg'),
      title: '关于V2',
      subtitle: '',
      icon: true,
      link: 'about' /** 需要轉跳的頁面 */,
    },
    {
      preImg: require('@/icons/svg/ic-logout.svg'),
      title: '退出',
      subtitle: '',
      icon: true,
      link: '' /** 需要轉跳的頁面 */,
    },
  ]
}
</script>

<style scoped lang="scss">
// 背景
.body {
  height: 100%;
  background-color: #f9f9f9;
}
// 個人資料背景圖片
.infoBackGroundIMG {
  height: 6.125rem;
  width: 100%;
  max-height: 6.125rem;
  background-image: url('../assets/bg-profile.jpg');
  background-size: 100% 6.125rem;
  background-position-x: center;
}
// 個人資料背景圖片 遮罩
.cover-panel {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 100%;
  flex: 1;
}

.icon {
  float: right;
  margin-right: 12px;
}
// 個人資料 照片與名稱
.pictrueWithName {
  width: 3.75rem;
  margin-left: 40px;
}

// 個人資料 照片
.picture {
  width: 3.75rem;
  height: 3.75rem;
  background-color: red;
  border-radius: 50%;
  text-align: center;
}

.text-align-left {
  text-align: left;
}

// 文字
.text {
  font-family: STHeitiTC;
  font-size: 0.9375rem;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f3806f;
}
</style>
