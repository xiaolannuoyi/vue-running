export default `
<template>
  <!--  element upload 只传一张图片样式,和表单一起提交  -->
  <div>
    <el-link
    href="https://blog.csdn.net/qq_31126175/article/details/102745994"
    type="primary"
    target="_blank"
    >
      文章地址：element upload 只传一张图片样式,和表单一起提交
    </el-link>

    <!-- 代码开始 -->
    <el-upload
          action=""
          :class="{ disabled: uploadDisabled }"
          list-type="picture-card"
          :limit="limitcount"
          :on-change="handleChange"
          :on-remove="handleRemove"
          :auto-upload="false"
          accept="image/*"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadDisabled: false,
      limitcount: 1
    };
  },
  methods: {
    handleChange(file, fileList) {
      this.uploadDisabled = fileList.length >= this.limitcount;
      console.log("this.uploadDisabled", this.uploadDisabled);
    },
    handleRemove(file, fileList) {
      this.uploadDisabled = fileList.length >= this.limitcount;
      console.log("this.uploadDisabled", this.uploadDisabled);
    }
  }
};
</script>

<style>
.disabled .el-upload--picture-card {
  display: none;
}
</style>

`;
