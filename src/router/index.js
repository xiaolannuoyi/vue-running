import Vue from "vue";
import VueRouter from "vue-router";
import vueRunning from "@/views/vueRunning.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/runningcode/template"
  },
  //代码running页
  {
    path: "/runningcode/:codename",
    name: "vueRunning",
    components: {
      default: vueRunning,
      sideMenu: () => import("@/components/codeList/sidebar.vue")
    }
  },
  //其他代码展示页
  {
    path: "/pages/:codename",
    name: "pages",
    components: {
      default: () => import("@/components/pages/index.vue"),
      sideMenu: () => import("@/components/pages/sidebar.vue")
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  base: "vue-running", //process.env.BASE_URL
  routes
});
export default router;
