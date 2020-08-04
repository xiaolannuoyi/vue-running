<template>
  <div>
    <el-input
      placeholder="请输入内容"
      v-model="input3"
      class="input-with-select"
    >
      <el-select slot="prepend" v-model="select" placeholder="请选择">
        <el-option
          v-for="(value, key) in selectLsit"
          :label="key"
          :value="key"
          :key="key"
        ></el-option>
      </el-select>
      <el-input
        slot="prepend"
        placeholder="请输入内容"
        v-model="selectLsit[select]"
        class="prepend-input"
        disabled
      ></el-input>

      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: "http",
      path: "",
      input3: "123",
      selectLsit: {
        ssh: "ssh://1111111111111",
        http: "http://1111111111111"
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="less">
.input-with-select {
  .el-select .el-input {
    width: 200px;
  }
  .el-input-group__prepend {
    background-color: #fff;
  }
  .el-input-group__prepend {
    padding-right: 0;
  }
  .prepend-input {
    width: 300px;
    margin-left: 20px;
  }
  .prepend-input .el-input__inner {
    border-bottom: none;
    border-right: none;
    border-top: none;
    height: 38px;
  }
}
</style>

;
