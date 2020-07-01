<template>
  <div id="app">
    <router-view :key="+new Date()" />
    <div
      v-click-outside="onClickOutside"
      class="runside"
      :style="{
        left: show ? '-200px' : '0px',
        animation: show ? animationA : animationB
      }"
    >
      <run-menu class="runmenu"></run-menu>
      <div class="menubtn" @click="openMenu">
        <i
          :class="[show ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left']"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
import runMenu from "@/components/menu/index";
export default {
  name: "runHeader",
  data() {
    return {
      showMenu: false,
      animationA: "fade-open .8s ease-in-out",
      animationB: "fade-hide .8s ease-in-out",
      show: false
      // left: "-200px" //-200 关, 0 开。
    };
  },
  components: { runMenu },
  methods: {
    openMenu() {
      this.show = !this.show;
    },
    onClickOutside() {
      if (!this.show) {
        this.show = !this.show;
      }
    }
  },
  mounted() {}
};
</script>
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
.runside {
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: 999;
  .runmenu {
    width: 200px;
    height: 100vh;
  }
  .menubtn {
    position: absolute;
    top: calc(50% - 60px);
    left: 200px;
    height: 80px;
    line-height: 80px;
    font-size: 40px;
    background-color: #515a6e;
    color: #fff;
    width: 40px;
    border-radius: 0 10px 10px 0;
    &:hover {
      color: #1296db;
      cursor: pointer;
    }
  }
}

@keyframes fade-open {
  0% {
    left: 0px;
  }
  100% {
    left: -200px;
  }
}
@keyframes fade-hide {
  0% {
    left: -200px;
  }
  100% {
    left: 0px;
  }
}
</style>
