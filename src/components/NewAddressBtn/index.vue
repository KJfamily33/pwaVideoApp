<template>
  <div class="button">
    <div class="buttoninfo">
      <svg-icon name="ic-web" width="15" height="15"></svg-icon>
      <span class="text" style="font-size: 13px;">01</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.button {
  width: 9.375rem;
  height: 2.1875rem;
  border-radius: 17.3125rem;
  background-image: linear-gradient(126deg, #f3806f, #f8758d);
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.625rem;
  margin-left: 0.625rem;
  margin-bottom: 0.9375rem;
}

.buttoninfo {
  color: white;
}

.buttoninfo span {
  margin-left: 0.3125rem;
}

.text {
  font-family: STHeitiTC;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}
</style>
