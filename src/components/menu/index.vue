<template>
  <Menu theme="dark" width="200px" :active-name="$route.params.codename">
    <template v-for="item in menuList">
      <Submenu v-if="item.children" :key="item.title" :name="item.name">
        <template slot="title">
          <Icon type="ios-paper" />{{ item.title }}
        </template>
        <MenuItem
          v-for="child in item.children"
          :key="child.title"
          :name="child.name"
          :to="child.path"
          >{{ child.title }}
        </MenuItem>
      </Submenu>
      <MenuItem v-else :key="item.title" :name="item.name" :to="item.path">
        <Icon type="ios-people" />{{ item.title }}
      </MenuItem>
    </template>
  </Menu>
</template>
<script>
import { menuList } from "@/components/codeList/index.js";
export default {
  name: "runMenu",
  data() {
    return {
      menuList: menuList
    };
  },
  watch: {
    $route() {
      console.warn(this.$route.params.codename);
    }
  },
  mounted() {
    console.warn(this.$route.params.codename);
  }
};
</script>
