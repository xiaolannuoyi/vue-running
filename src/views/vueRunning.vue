<template>
  <div class="home">
    <run-header @run="run" @reset="reset" @help="help"></run-header>
    <div class="demo-split">
      <Split v-model="split">
        <div slot="left" class="demo-split-pane code">{{code}}</div>
        <div slot="right" class="demo-split-pane">
          <run-code :code="code"></run-code>
        </div>
      </Split>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import runHeader from "@/components/header";
import runCode from "@/components/runCode";
import code from "@/components/codeTemplate.js";
export default {
  name: "Home",
  components: {
    runHeader,
    runCode
  },
  data() {
    return {
      split: 0.5,
      code: code
    };
  },
  methods: {
    run() {
      console.log("run");
    },
    reset() {
      console.log("reset");
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
}
.code {
  white-space: pre-wrap;
}
</style>
