<template>
  <div class="header">
    <div class="title">
      <img src="@/assets/logo.png" width="40" height="40" alt />
      <span>vue-running</span>
    </div>
    <div class="operation">
      <Button type="text" @click="clickhandle('run')">
        <Icon type="ios-play-outline" class="btn-icon" />
        <span>运行</span>
      </Button>
      <Button type="text" @click="clickhandle('reset')">
        <Icon type="ios-refresh" class="btn-icon" />
        <span>重置</span>
      </Button>
    </div>
    <div class="help">
      <Tooltip placement="bottom-end">
        <div slot="content">
          <p>当前 iView 版本为 4.2.0</p>
          <p>当前 Element 版本为 2.13.2</p>
          <p>可运行.vue 文件</p>
        </div>
        <Button type="text">
          <Icon type="ios-help-circle-outline" class="btn-icon" />
        </Button>
      </Tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "runHeader",
  data() {
    return {};
  },
  methods: {
    clickhandle(type) {
      this.$emit(type);
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">
.header {
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
    width: 200px;
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
    width: 20px;
  }
  .btn-icon {
    font-size: 20px;
    color: #1296db;
  }
}
</style>