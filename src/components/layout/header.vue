<template>
  <div class="header">
    <div class="title">
      <img src="@/assets/logo.png" width="24" height="24" alt />
      <span>
        <slot name="title">vue-running</slot>
      </span>
    </div>
    <div class="operation">
      <slot name="operation"></slot>
    </div>

    <div class="help">
      <Button
        type="text"
        to="https://github.com/xiaolannuoyi/vue-running"
        target="_blank"
      >
        <Icon type="logo-github" class="btn-icon" />
      </Button>

      <Button type="text" @click="showHelp = true">
        <Icon type="md-help-circle" class="btn-icon" />
      </Button>
    </div>

    <Modal v-model="showHelp" title="帮助" :footer-hide="true">
      <p slot="header">
        <Icon type="md-help-circle" class="help-icon" />
        <span class="help-title">帮助</span>
      </p>
      <Tag type="dot" color="blue">当前 iView 版本为 4.2.0</Tag>
      <el-tag>当前 Element 版本为 2.13.2</el-tag>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "runHeader",
  data() {
    return {
      showHelp: false
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
.header {
  position: fixed;
  top: 0;
  z-index: 1000;

  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 0 40px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  margin-bottom: 1px;
  box-sizing: border-box;
  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
    width: 140px;
    height: 100%;
    vertical-align: middle;
    text-align: left;
    cursor: default;
    span {
      padding-left: 8px;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .operation {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    font-size: 14px;
  }
  .help {
    width: 104px;
    flex-shrink: 0;
  }
  .btn-icon {
    font-size: 20px;
    color: #1296db;
  }
}
.help-icon {
  font-size: 20px;
  color: #1296db;
  margin-right: 10px;
}
.help-title {
  color: #1296db;
}
</style>
