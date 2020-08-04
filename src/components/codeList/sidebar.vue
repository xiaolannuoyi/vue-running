<template>
  <!-- 菜单 -->
  <sidebar :menuList="menuList" :iconList="iconList" :root="root"></sidebar>
</template>
<script>
import sidebar from "@/components/layout/sidebar";
import { menuList, iconList } from "./index.js";

export default {
  data() {
    return {
      showMenu: false,
      menuList: menuList,
      iconList: iconList,
      root: "/runningcode/" //路由前缀
    };
  },
  watch: {
    $route: {
      handler() {
        this.showMenu = false;
      }
    }
  },
  components: { sidebar }
};
</script>
