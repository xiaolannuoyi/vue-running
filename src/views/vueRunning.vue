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
        <run-code slot="right" class="demo-split-pane" :code="code" ref="runcode"></run-code>
      </Split>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import runHeader from "@/components/header";
import runCode from "@/components/runCode";
//code模版
import codeTemplate from "@/components/codeMirror/codeTemplate.js";
//vue-codemirror相关
import { codemirror } from "vue-codemirror";
import "@/components/codeMirror/index.js";
import "@/components/codeMirror/myCodeMirror.css";

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
      code: codeTemplate,
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
      }
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
      this.code = codeTemplate;
      this.$refs.runcode.destroyCode();
      this.$refs.runcode.renderCode();
    },
    onCmReady(cm) {
      cm.on("keypress", () => {
        console.log("keypress");
        cm.showHint();
      });
    }
  },
  mounted() {
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
