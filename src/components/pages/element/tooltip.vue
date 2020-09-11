<template>
  <!-- element Tooltip背景颜色样式修改 -->
  <div>
    <el-link
      href="https://blog.csdn.net/qq_31126175/article/details/84570677"
      type="primary"
      target="_blank"
    >
      文章地址：element Tooltip背景颜色样式修改
    </el-link>
    <br />
    <!-- 代码开始 -->

    <el-tooltip content="Top center" placement="top" popper-class="atooltip">
      <el-button>Pink</el-button>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style>
.atooltip.el-tooltip__popper[x-placement^="top"] .popper__arrow {
  border-top-color: pink !important;
}
.atooltip.el-tooltip__popper[x-placement^="top"] .popper__arrow:after {
  border-top-color: pink !important;
}
.atooltip {
  background: pink !important;
}
</style>
