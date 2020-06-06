<template>
  <div class="home">
    <run-header></run-header>
    <div class="demo-split">
    <Split v-model="split">
      <div slot="left" class="demo-split-pane">
        {{code}}
      </div>
      <div slot="right" class="demo-split-pane">
        {{code}}
      </div>
    </Split>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import runHeader from "@/components/header";
export default {
  name: "Home",
  components: {
    runHeader
  },
  data() {
    return {
      split: 0.5,
      code:'---'
    };
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
</style>
