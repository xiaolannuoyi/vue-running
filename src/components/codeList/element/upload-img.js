export default `
<template>
  <div>
    <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
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
