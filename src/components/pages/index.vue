<template>
  <div>
    <run-header>
      <!-- 标题 -->
      <template #title>vue-pages</template>
      <!-- 操作 -->
      <template #operation>
        <Button type="text" @click="$router.push('/')">
          <Icon type="md-bookmark" class="btn-icon" />
          <span>vue-running</span>
        </Button>
      </template>
    </run-header>

    <component
      :is="activeTem"
      style="padding:20px"
      class="page-component"
    ></component>
  </div>
</template>

<script>
import { modules } from "./index.js";
import runHeader from "@/components/layout/header";

export default {
  components: { ...modules, runHeader },
  computed: {
    activeTem() {
      return this.$route.params.codename.replace("%2F", "-");
    }
  }
};
</script>
<style scoped>
.btn-icon {
  font-size: 20px;
  color: #1296db;
}
.page-component {
  position: absolute;
  top: 50px;
  height: calc(100% - 50px);
  width: 100%;
}
</style>
