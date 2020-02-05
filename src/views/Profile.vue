<template>
  <div class="body">
    <!-- 個人資訊-->
    <div class="infoBackGroundIMG">
      <!--背景遮罩-->
      <div class="cover-panel">
        <div class="row" style="">
          <div class="column" style="max-width: 22%;">
            <div class="pictrueWithName">
              <div class="picture">
                <img :src="profile.headFile" alt="" />
              </div>
            </div>
          </div>
          <div class="column" style="flex-grow:2">
            <div class="v-coin text">
              <div class="v-flex">
                <svg-icon name="ic-vcoin" width="15" height="15"></svg-icon>
                <span class="margin-left-5">{{ profile.v2Coin }}</span>
              </div>
              <div class="icon">
                <svg-icon
                  name="ic-refresh"
                  width="15"
                  height="15"
                  @click="getRefresh"
                ></svg-icon>
              </div>
            </div>
            <div class="v-flex text">
              <svg-icon name="ic-vvip" width="15" height="15"></svg-icon>
              <span v-if="profile.vip === 0" class="margin-left-5"
                >一般会员</span
              >
              <span v-if="profile.vip === 1" class="margin-left-5"
                >VIP会员</span
              >
            </div>
            <div
              v-if="profile.endTime !== ''"
              class="text"
              style="text-align: left;"
            >
              <span style="color:#ffffff;">会员到期时间:</span>
              <div>
                <span>{{ profile.endTime }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="column text-align-left"
          style="color: #ffffff; font-size: 12px; margin-top: 15px;"
        >
          <div>邮箱: {{ profile.email }}</div>
          <div>帐号: {{ profile.name }}</div>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div v-for="(e, i) in 9" :key="i">
      <ProfileRow
        :ProfileInfoObj="objs[i]"
        :profileMail="profileMail"
        :webLink="webLink"
        :token="token"
        :uid="uid"
      ></ProfileRow>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ProfileRow from '@/components/ProfileRow/index.vue'
import HeaderBar from '../components/HeaderBar/index.vue'
import { IProfileInfoObj } from '@/types/profile'
import { getPayCenter } from '@/api/webview'
import { getMember } from '@/api/profile'
import { UserModule } from '@/store/modules/user'

@Component({
  components: {
    ProfileRow,
  },
})
export default class Profile extends Vue {
  private objs: Array<IProfileInfoObj> = [
    // {
    //   preImg: require('@/icons/svg/ic-exchang.svg'),
    //   title: '兑换码',
    //   subtitle: '',
    //   icon: true,
    //   link: 'ChangeCode' /** 需要轉跳的頁面 */,
    // },
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
  private profile = ''
  private profileMail = ''
  private webLink = ''
  private token = UserModule.token
  private uid = UserModule.userId

  mounted() {
    const _this = this
    _this.getMemberProfile()
    _this.getWebView()
  }

  getMemberProfile() {
    const _this = this
    let params = {
      userId: UserModule.userId,
    }
    getMember(params)
      .then(res => {
        _this.profile = res.data.data.user
        _this.profileMail = res.data.data.user.email
      })
      .catch(e => {
        console.log(e)
      })
  }

  getWebView() {
    const _this = this
    let requestInfo = {
      type: 0,
    }
    getPayCenter(requestInfo)
      .then(res => {
        _this.webLink = res.data.data.url
      })
      .catch(e => {
        console.log(e)
      })
  }

  getRefresh() {
    window.location.reload()
  }
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
  width: 100%;
  background-image: url('../assets/bg-profile.jpg');
  background-size: cover;
  background-position-x: center;
}
// 個人資料背景圖片 遮罩
.cover-panel {
  height: 100%;
  width: 100%;
  padding: 12px 18px;
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

.v-coin {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-flex {
  display: flex;
  align-items: center;
}

.margin-left-5 {
  margin-left: 5px;
}
// 個人資料 照片與名稱
.pictrueWithName {
  width: 3.75rem;
}

// 個人資料 照片
.picture {
  width: 3.75rem;
  height: 3.75rem;
  // background-color: red;
  // border-radius: 50%;
  text-align: center;
  img {
    width: 100%;
    border-radius: 50%;
  }
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
