export default `
<template>
  <!--  elementui input focus取消占位  -->
  <div>
    <el-link
      href="https://blog.csdn.net/qq_31126175/article/details/102832939"
      type="primary"
      target="_blank"
    >
      文章地址：elementui input focus取消占位
    </el-link>
    <!-- 代码开始 -->

    <el-form :model="form">
      <el-form-item label="用户名：">
        <el-input
          v-model="form.username"
          id="username"
          :placeholder="usernameplaceholder"
          @focus="focushandle"
          @blur="blurhandle"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input
          v-model="form.password"
          type="password"
          id="password"
          :placeholder="passwordplaceholder"
          @focus="focushandle"
          @blur="blurhandle"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      usernameplaceholder: "请输入用户名",
      passwordplaceholder: "请输入密码"
    };
  },
  methods: {
    focushandle(event) {
      event.target.placeholder = "";
    },
    blurhandle(event) {
      if (event.target.value == "") {
        event.target.placeholder = this[event.target.id + "placeholder"];
      }
    }
  },
  mounted() {}
};
</script>
<style></style>

`;
