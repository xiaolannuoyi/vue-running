<template>
  <!-- 菜单 -->
  <div
    v-click-outside="onClickOutside"
    class="runside"
    :style="{
      left: showMenu ? '0px' : '-200px',
      animation: animation
    }"
  >
    <run-menu class="runmenu"></run-menu>
    <div class="menubtn" @click="openMenu">
      <i
        :class="[showMenu ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right']"
      ></i>
    </div>
  </div>
</template>
<script>
import runMenu from "@/components/menu/index";

export default {
  name: "runSidebar",
  data() {
    return {
      showMenu: false,
      animationA: "fade-open .5s ease-in-out",
      animationB: "fade-hide .5s ease-in-out",
      animation: ""
      //   showMenu ? animationA : animationB
      //   showMenu ? animationA : animationB
      // left: "-200px" //-200 关, 0 开。
    };
  },
  components: { runMenu },
  watch: {
    showMenu(val) {
      this.animation = !val ? this.animationA : this.animationB;
    }
  },
  methods: {
    openMenu() {
      this.showMenu = !this.showMenu;
    },
    onClickOutside() {
      if (this.showMenu) {
        this.showMenu = !this.showMenu;
      }
    }
  }
};
</script>
<style lang="less">
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
