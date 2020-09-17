<template>
  <div class="header" id="header">
    <div class="title">
      <img src="@/assets/logo.png" width="24" height="24" alt />
      <span>
        <slot name="title">vue-running</slot>
      </span>
    </div>
    <div class="operation">
      <slot name="operation"></slot>

      <Button
        type="text"
        v-show="$route.path !== '/pages/messageBoard'"
        @click="$router.push('/pages/messageBoard')"
      >
        <Icon type="md-clipboard" class="btn-icon" />
        <span>留言板</span>
      </Button>
      <Tooltip placement="bottom" theme="light">
        <div slot="content" class="busuanzi">
          <Button type="text">
            <Icon type="md-glasses" class="btn-icon" />
            <!-- 本站总访问量 -->
            <span id="busuanzi_value_site_pv"></span>
          </Button>
          <br />
          <Button type="text">
            <Icon type="md-contacts" class="btn-icon" />
            <!-- 本站访客数 -->
            <span id="busuanzi_value_site_uv"></span>
          </Button>
          <br />
          <Button type="text">
            <Icon type="md-book" class="btn-icon" />
            <!-- 本文总阅读量 -->
            <span id="busuanzi_value_page_pv"></span>
          </Button>
          <br />
          <Button type="text" size="small">
            <span>
              由 <a href="http://busuanzi.ibruce.info/">不蒜子</a> 统计
            </span>
          </Button>
        </div>
        <Button type="text">
          <Icon type="md-pulse" class="btn-icon" />
          <span
            id="/vue-running/"
            class="leancloud_visitors"
            data-flag-title="vue-running"
          >
            <i class="leancloud-visitors-count"></i>
          </span>
        </Button>
      </Tooltip>

      <!-- <span id="busuanzi_container_site_pv" style="display:none">
        本站总访问量
        <span id="busuanzi_value_site_pv"></span>次
        <span class="post-meta-divider">|</span>
      </span>
      <span id="busuanzi_container_site_uv" style="display:none">
        本站访客数
        <span id="busuanzi_value_site_uv"></span>人
      </span>
      
      <Icon type="md-contacts" /> <span id="busuanzi_value_site_uv"></span>
       <span id="busuanzi_value_site_uv"></span> -->
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
let script;
import Valine from "valine";

export default {
  name: "runHeader",
  data() {
    return {
      showHelp: false
    };
  },
  methods: {},
  mounted() {
    script = require("busuanzi.pure.js");
    script.fetch();
    new Valine({
      el: "#vcomment",
      appId: "du4lzvLtr3I3ApJhLqJigKwF-MdYXbMMI",
      appKey: "lvIU21x5tjL80eQf2j8cKevL",
      visitor: true, // 阅读量统计
      avatar: "wavatar"
    });
  }
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
.busuanzi {
  font-family: monospace;
  span {
    display: inline-block;
    margin-left: 5px;
  }
}
</style>
