<template>
  <Submenu :name="data.name">
    <template slot="title">
      <i :class="iconList[data.name]" />
      {{ data.title }}
    </template>
    <template v-for="item in data.children">
      <menu-child
        v-if="item.children && item.children.length !== 0"
        :data="item"
        :key="item.name"
        :root="root"
        :iconList="iconList"
      >
      </menu-child>
      <menu-item
        v-else
        :key="item.name"
        :name="item.name"
        :to="root + encodeURIComponent(item.name)"
      >
        <i :class="iconList[item.name]" />
        <span>{{ item.title }}</span>
      </menu-item>
    </template>
  </Submenu>
</template>

<script>
export default {
  name: "menuChild",
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    iconList: {
      type: Object
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
