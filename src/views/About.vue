<template>
  <div class="background">
    <div class="cover-panel">
      <div class="content">
        <svg-icon class="applogo" name="ic-applogo" width="60" height="60"></svg-icon>
        <p class="text" style="color: #f3806f; ">V2视频</p>
         <p class="text" style="color: #f3806f; ">目前版本：V 1.0.0</p>
         <p class="text" style="color: #f3806f; ">客服QQ：2416199918</p>
         <p class="text" style="color: #f3806f; ">客服邮箱：thev2porn@gmail.com</p>
         <p class="text bottomtext" >Copyright 2019 V2视频</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background {
  height: 100%;
  background-image: url("../assets/bg-about.jpg");
  background-size: cover;
  background-position-x: center;
}
.cover-panel {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.content{
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.applogo {
  margin-top: 130px;


}

.text {
  font-family: STHeitiTC;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}

.bottomtext {
  color: #ffffff;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
