<template>
  <Menu theme="dark" width="200px">
    <template v-for="item in menuList">
      <Submenu v-if="item.children" :key="item.title" :name="item.title">
        <template slot="title">
          <Icon type="ios-paper" />{{ item.title }}
        </template>
        <MenuItem
          v-for="child in item.children"
          :key="child.title"
          :name="item.title + child.title"
          :to="child.path"
          >{{ child.title }}
        </MenuItem>
      </Submenu>
      <MenuItem v-else :key="item.title" :name="item.title" :to="item.path">
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
  }
};
</script>
