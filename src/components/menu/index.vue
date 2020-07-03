<template>
  <Menu theme="dark" width="200px" :active-name="$route.params.pathMatch">
    <template v-for="item in menuList">
      <menu-child
        v-if="item.children && item.children.length !== 0"
        :key="item.title"
        :data="item"
        :root="root"
      ></menu-child>
      <MenuItem
        v-else
        :key="item.title"
        :name="item.name"
        :to="root + item.name"
      >
        <Icon type="ios-people" />{{ item.title }}
      </MenuItem>
    </template>
  </Menu>
</template>
<script>
import { menuList } from "@/components/codeList/index.js";
import menuChild from "./menuChild";

export default {
  name: "runMenu",
  components: { menuChild },
  data() {
    return {
      menuList: menuList,
      root: "/code/" //路由前缀
    };
  },
  watch: {
    $route() {
      console.warn(this.$route);
    }
  },
  mounted() {
    console.warn(this.$route);
  }
};
</script>
