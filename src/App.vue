<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/newaddress">NewAddress</router-link>|
      <router-link to="/profile">profile</router-link>|
      <router-link to="/Recharge">Recharge</router-link>|
      <router-link to="/share">Share</router-link>|
      <router-link to="/vip-description">vip-Description</router-link>|
      <router-link to="/v-coin-description">v-coin-Description</router-link>|
      <router-link to="/ChangeCode">ChangeCode</router-link>|
      <router-link to="/store">Store</router-link>|
      <router-link to="/register">Register</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/video-info">Video-Info</router-link>|
      <router-link to="/currentTask">CurrentTask</router-link>|
      <router-link to="/changeVip">ChangeVIP</router-link>|
      <router-link to="/vHistory">vHistory</router-link>|
      <router-link to="/search">Search</router-link>|
    </div>
    <router-view class="flex" name="header" />
    <router-view class="flex" />
    <router-view class="flex" name="footer" />
  </div>
</template>

<style lang="scss">



#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
