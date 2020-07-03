<template>
  <Submenu :name="data.name">
    <template slot="title">
      <Icon type="ios-paper" />{{ data.title }}
    </template>
    <template v-for="item in data.children">
      <menu-child
        v-if="item.children && item.children.length !== 0"
        :data="item"
        :key="item.name"
      >
      </menu-child>
      <menu-item
        v-else
        :key="item.name"
        :name="item.name"
        :to="root + item.name"
      >
        <Icon :type="item.icon" />
        <span>{{ item.title }}</span>
      </menu-item>
    </template>
  </Submenu>

  <!-- <Submenu v-if="item.children" :key="item.title" :name="item.name">
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
      </MenuItem> -->
</template>

<script>
export default {
  name: "menuChild",
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    root: {
      type: String,
      default: ""
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped></style>
