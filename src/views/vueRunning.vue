<template>
  <div class="home">
    <!-- 头部 -->
    <run-header @run="run" @reset="reset" @help="help"></run-header>
    <div class="demo-split">
      <Split v-model="split">
        <div slot="left" class="demo-split-pane">
          <!-- 代码 -->
          <codemirror v-model="code" :options="cmOptions"></codemirror>
        </div>
        <div slot="right" class="demo-split-pane">
          <!-- 展示 -->
          <run-code :code="code" ref='runcode'></run-code>
        </div>
      </Split>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import runHeader from "@/components/header";
import runCode from "@/components/runCode";
//code模版
import code from "@/components/codeMirror/codeTemplate.js";
//vue-codemirror相关
import { codemirror } from 'vue-codemirror'
import '@/components/codeMirror/index.js'
import '@/components/codeMirror/myCodeMirror.css'

export default {
  name: "Home",
  components: {
    runHeader,
    runCode,
    codemirror
  },
  data() {
    return {
      split: 0.5,
      code: code,
      cmOptions: {
        mode: 'htmlmixed',
        lineNumbers: true,//行号
        // scrollbarStyle: "simple",
        autoCloseBrackets: true,//自动括号
        matchBrackets: true,//匹配括号
        showCursorWhenSelecting: true,//select显示光标
        autoCloseTags: true,
        tabSize: 2,
        foldGutter: true,//可折叠的块
        gutters: [
          'CodeMirror-linenumbers',
          'CodeMirror-foldgutter',
          'CodeMirror-lint-markers'
        ],
        autofocus: true,
        styleActiveLine: true
      },
    };
  },
  methods: {
    run() {
      console.log("run");
       this.$refs.runcode.destroyCode();
       this.$refs.runcode.renderCode();
    },
    reset() {
      console.log("reset");
      this.code = code;
      this.$refs.runcode.destroyCode();
      this.$refs.runcode.renderCode();
    },
    help() {
      console.log("help");
    }
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
