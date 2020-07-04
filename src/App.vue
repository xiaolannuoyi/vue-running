<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="sideMenu"></router-view>
  </div>
</template>
<script></script>
<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #515a6e;
  background-color: #fff;
}
</style>
