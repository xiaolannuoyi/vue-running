<template>
  <Menu
    theme="dark"
    width="200px"
    :active-name="$route.params.codename"
    :open-names="opennames"
  >
    <template v-for="item in menuList">
      <menu-child
        v-if="item.children && item.children.length !== 0"
        :key="item.title"
        :data="item"
        :root="root"
        :iconList="iconList"
      ></menu-child>
      <MenuItem
        v-else
        :key="item.title"
        :name="item.name"
        :to="root + encodeURIComponent(item.name)"
      >
        <i :class="iconList[item.name]" />
        {{ item.title }}
      </MenuItem>
    </template>
  </Menu>
</template>
<script>
import menuChild from "./menuChild";

export default {
  name: "runMenu",
  components: { menuChild },
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
  computed: {
    //自动展开
    opennames() {
      let arr = this.$route.params.codename.split("/");
      let result = [];
      arr.reduce((pre, cur, index) => {
        let temp = index ? pre + cur + "/" : cur + "/";
        result.push(temp);
        return temp;
      }, "");
      result.pop();
      // console.warn(result);
      return result;
    }
  }
};
</script>
