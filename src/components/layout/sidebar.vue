<template>
  <!-- 菜单 -->
  <div>
    <div class="menubtn open" @click="showMenu = true">
      <i class="el-icon-d-arrow-right"></i>
    </div>

    <Drawer
      placement="left"
      :closable="false"
      v-model="showMenu"
      width="230"
      class-name="drawer"
    >
      <div class="runmenu-box">
        <run-menu
          class="runmenu"
          :menuList="menuList"
          :iconList="iconList"
          :root="root"
        ></run-menu>
      </div>
      <div class="menubtn close" @click="showMenu = false">
        <i class="el-icon-d-arrow-left"></i>
      </div>
    </Drawer>
  </div>
</template>
<script>
import runMenu from "@/components/menu/index";

export default {
  name: "runSidebar",
  data() {
    return {
      showMenu: false
    };
  },
  props: {
    menuList: {
      //菜单
      type: Array
    },
    iconList: {
      //icon
      type: Object
    },
    root: {
      //前缀
      type: String
    }
  },
  watch: {
    $route: {
      handler() {
        this.showMenu = false;
      }
    }
  },
  components: { runMenu }
};
</script>
<style lang="less">
.menubtn {
  z-index: 999;
  position: absolute;
  top: calc(50% - 30px);
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  background-color: #515a6e;
  color: #fff;
  width: 30px;
  border-radius: 0 10px 10px 0;
  &:hover {
    color: #1296db;
    cursor: pointer;
  }
}
.open {
  left: 0;
}
.close {
  left: 200px;
}
.runmenu {
  min-height: 100vh;
}
.runmenu-box {
  height: 100vh;
  width: 200px;
  overflow: auto;
}
.drawer {
  .ivu-drawer-body {
    padding: 0;
    overflow: hidden;
  }
  .ivu-drawer-content {
    background-color: transparent;
    box-shadow: none;
  }
}
</style>
