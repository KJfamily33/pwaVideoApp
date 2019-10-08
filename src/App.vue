<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/videoList">Video</router-link> |
      <router-link to="/loginAndRegistered">LoginAndRegistered</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <router-view class="flex" name="header"/>
    <router-view class="flex" />
    <router-view class="flex" name="footer"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;

  .flex {
    flex: 1 1 auto;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0;
}
</style>
