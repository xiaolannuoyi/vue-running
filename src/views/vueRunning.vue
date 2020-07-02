<template>
  <div class="home">
    <!-- 头部 -->
    <run-header @run="run" @reset="reset"></run-header>
    <div class="demo-split">
      <Split v-model="split">
        <!-- 代码 -->
        <codemirror
          slot="left"
          class="demo-split-pane"
          ref="mycodemirror"
          v-model="code"
          :options="cmOptions"
          @ready="onCmReady"
        ></codemirror>
        <!-- 展示 -->
        <div slot="right" class="demo-split-pane">
          <run-code v-if="runCodeHash" :code="code" ref="runcode"></run-code>
        </div>
      </Split>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import runHeader from "@/components/runCode/header";
import runCode from "@/components/runCode/runCode";
//code模版
import { codeList } from "@/components/codeList/index";
//vue-codemirror相关
import { codemirror } from "vue-codemirror";
import "@/components/codeMirror/index.js";
import "@/components/codeMirror/myCodeMirror.css";

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
    run() {
      this.$refs.runcode.destroyCode();
      this.$refs.runcode.renderCode();
    },
    reset() {
      this.$refs.runcode.destroyCode();
      this.code = this.initcode;
      this.$nextTick(() => {
        this.$refs.runcode.renderCode();
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
        let name = val.params.codename;
        this.code = this.initcode = codeList[name];
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
<style>
.demo-split {
  height: calc(100vh - 51px);
}
.demo-split-pane {
  padding: 10px;
  height: 100%;
}
.code {
  white-space: pre-wrap;
}
</style>
