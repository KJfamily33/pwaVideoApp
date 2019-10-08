<template>
  <div class="infobackground">
    <div class="cover-panel">
      <div class="column" style="margin-left: 2.5rem;">
        <div class="picture"></div>
        <div class="text" style="font-size:0.8125rem; color:#ffffff;">9487</div>
        <div
          class="column"
          style="align-items: flex-start;    margin-top: 1.25rem;
             margin-bottom: 0.8125rem;"
        >
          <div class="row">
            <svg-icon name="ic-vcoin" width="15" height="15"></svg-icon>
              <span class="text" style="color: #f3806f;margin-left:0.3125rem;">999,999,999</span>

          </div>

          <div class="row">
            <svg-icon name="ic-vip" width="15" height="15" style="object-fit: contain;"></svg-icon>
            <span class="text" style="color: #f3806f;margin-left:0.3125rem;">普通会员</span>
          </div>
          <span class="text">
            <span style="color: #ffffff">会员到期时间</span>
            <span style="color: #f3806f;">2099年12年25日</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


     <style scoped lang="scss">
.infobackground {
  max-height: 6.125rem;
  background-image: url("../assets/bg-profile.jpg");
  background-size: 100% 6.125rem;
  background-position-x: center;
}

.cover-panel {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.column {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.picture {
  width: 3.75rem;
  height: 3.75rem;
  background-color: red;
  border-radius: 50%;
}

.row {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-left: 0.3125rem;
  margin-right: 0.3125rem;
}

.text {
  font-family: STHeitiTC;
  font-size: 0.9375rem;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}
</style>
