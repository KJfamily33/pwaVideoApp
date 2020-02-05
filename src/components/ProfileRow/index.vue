<template>
  <div class="size">
    <a v-if="ProfileInfoObj.title == '帐户'" class="column">
      <!-- <svg-icon name="ic-acount" width="22" height="22" class="icon"></svg-icon> -->
      <img :src="ProfileInfoObj.preImg">
      <div class="text" style="margin-left:15px">{{ ProfileInfoObj.title }}</div>
      <div class="text" style="margin-left:5px">{{ profileMail }}</div>
      <a href v-if="ProfileInfoObj.icon == true">
        <svg-icon name="ic-forward" width="6" height="10" class="ic_forward"></svg-icon>
      </a>
    </a>
    <a v-else-if="ProfileInfoObj.title == '充值'" :href="webLink + '?tk=' + token + '&uid=' + uid" class="column">
      <!-- <svg-icon name="ic-acount" width="22" height="22" class="icon"></svg-icon> -->
      <img :src="ProfileInfoObj.preImg">
      <div class="text" style="margin-left:15px">{{ ProfileInfoObj.title }}</div>
      <div class="text" style="margin-left:5px">{{ ProfileInfoObj.subtitle }}</div>
      <a href v-if="ProfileInfoObj.icon == true">
        <svg-icon name="ic-forward" width="6" height="10" class="ic_forward"></svg-icon>
      </a>
    </a>
    <a v-else :href="ProfileInfoObj.link" class="column">
      <!-- <svg-icon name="ic-acount" width="22" height="22" class="icon"></svg-icon> -->
      <img :src="ProfileInfoObj.preImg">
      <div class="text" style="margin-left:15px">{{ ProfileInfoObj.title }}</div>
      <div class="text" style="margin-left:5px">{{ ProfileInfoObj.subtitle }}</div>
      <a href v-if="ProfileInfoObj.icon == true">
        <svg-icon name="ic-forward" width="6" height="10" class="ic_forward"></svg-icon>
      </a>
    </a>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IProfileInfoObj } from "@/types/profile";

@Component
export default class ProfileRow extends Vue {
  @Prop() private ProfileInfoObj!: IProfileInfoObj;
  @Prop() private profileMail!: string;
  @Prop() private webLink!: string;
  @Prop() private token!: string;
  @Prop() private uid!: string;
}
</script>
<style scoped lang="scss">
.size {
  width: 100%;
  height: 45px;
  background-color: #ffffff;
  margin-top: 2px;
  margin-bottom: 2px;
}

.column {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
}

.text {
  font-family: STHeitiTC;
  font-size: 15px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f3806f;
}

.icon {
  color: linear-gradient(to bottom, #fa709b, #f38070);
}

.ic_forward {
  position: absolute;
  right: 15px;
  color: #f3806f;
}
</style>
