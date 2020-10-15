export default `
<template>
<div>
  <!-- 禁用时显示 提示文字-->
  <el-tooltip
    class="item"
    effect="dark"
    :disabled="!disabled1"
    content="Top Left 提示文字"
    placement="top-start"
  >
    <span class="wrapper el-button">
      <el-button size="mini" type="primary" :disabled="disabled1">
        禁用时显示 提示文字
      </el-button>
    </span>
  </el-tooltip>
  <!-- 非禁用时不显示-->
  <el-tooltip
    class="item"
    effect="dark"
    :disabled="!disabled2"
    content="Top Left 提示文字"
    placement="top-start"
  >
    <span class="wrapper el-button">
      <el-button size="mini" type="primary" :disabled="disabled2">
        非禁用时不显示
      </el-button>
    </span>
  </el-tooltip>
</div>
</template>
<script>
export default {
  data() {
    return {
      disabled1: true,
      disabled2: false
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style>
.wrapper.el-button {
  display: inline-block;
  padding: 0;
  margin: 0;
  border: none;
}
</style>
`;
