<template>
  <div class="home">
    <!-- 头部 -->
    <run-header>
      <!-- 标题 -->
      <template #title>vue-running</template>

      <!-- 操作 -->
      <template #operation>
        <Button type="text" @click="run">
          <Icon type="md-play" class="btn-icon" />
          <span>运行</span>
        </Button>
        <Button type="text" @click="reset">
          <Icon type="md-refresh" class="btn-icon" />
          <span>重置</span>
        </Button>
        <Button type="text" @click="copyhandle($event)">
          <Icon type="md-copy" class="btn-icon" />
          <span>复制</span>
        </Button>
        <Button type="text" @click="$router.push('/pages/home')">
          <Icon type="md-bookmark" class="btn-icon" />
          <span>vue-pages</span>
        </Button>
      </template>
    </run-header>

    <div class="demo-split">
      <Split v-model="split">
        <div slot="left" class="demo-split-pane">
          <!-- 代码 -->
          <codemirror
            class="left-box"
            ref="mycodemirror"
            v-model="code"
            :options="cmOptions"
            @ready="onCmReady"
          ></codemirror>
        </div>
        <div slot="right" class="demo-split-pane">
          <!-- 展示 -->
          <run-code
            class="right-box"
            v-if="runCodeHash"
            :code="code"
            ref="runcode"
          ></run-code>
        </div>
      </Split>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import runHeader from "@/components/layout/header";
import runCode from "@/components/runCode/runCode";
//code模版
import { codeList } from "@/components/codeList/index";
//vue-codemirror相关
import { codemirror } from "vue-codemirror";
import "@/components/codeMirror/index.js";
import "@/components/codeMirror/myCodeMirror.css";

import clip from "@/utils/clipboard.js";

export default {
  name: "vueRunning",
  components: {
    runHeader,
    runCode,
    codemirror
  },
  data() {
    return {
      split: 0.5,
      initcode: "",
      code: "",
      cmOptions: {
        mode: "htmlmixed",
        lineNumbers: true, //行号
        // scrollbarStyle: "simple",
        autoCloseBrackets: true, //自动补全括号
        matchBrackets: true, //匹配括号
        showCursorWhenSelecting: true, //select显示光标
        autoCloseTags: true,
        tabSize: 2,
        foldGutter: true, //可折叠的块
        gutters: [
          "CodeMirror-linenumbers",
          "CodeMirror-foldgutter",
          "CodeMirror-lint-markers"
        ],
        autofocus: true,
        styleActiveLine: true,
        hintOptions: {
          completeSingle: false
        },
        keyMap: "sublime",
        extraKeys: {
          "Ctrl-Q": "autocomplete"
        }
      },
      runCodeHash: true
    };
  },
  methods: {
    copyhandle(event) {
      clip(this.code, event);
    },
    run() {
      this.$refs.runcode.destroyCode();
      this.$refs.runcode.renderCode();
      this.$Message.success("已运行");
    },
    reset() {
      this.$refs.runcode.destroyCode();
      this.code = this.initcode;
      this.$nextTick(() => {
        this.$refs.runcode.renderCode();
        this.$Message.success("已重置");
      });
    },
    onCmReady(cm) {
      cm.on("keypress", () => {
        cm.showHint();
      });
    }
  },
  watch: {
    $route: {
      handler(val) {
        let name = val.params.codename.replace("%2F", "/");
        this.code = this.initcode = codeList[name] || "";
        this.runCodeHash = false;
        this.$nextTick(() => {
          this.runCodeHash = true;
        });
      },
      immediate: true
    }
  },
  created() {
    //解决嵌套使用codemirror时，点击才会显示的问题。
    setTimeout(() => {
      this.$refs.mycodemirror.codemirror.refresh();
    }, 1);
  }
};
</script>
<style scoped>
.demo-split {
  position: absolute;
  top: 50px;
  height: calc(100% - 50px);
  width: 100%;
}
.demo-split-pane {
  padding: 10px;
  height: 100%;
  overflow: auto;
}

.code {
  white-space: pre-wrap;
}
.btn-icon {
  font-size: 20px;
  color: #1296db;
}
</style>
