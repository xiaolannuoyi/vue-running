import Vue from "vue";
import VueRouter from "vue-router";
import vueRunning from "../views/vueRunning.vue";
import sideMenu from "@/components/layout/sidebar";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/template"
  },
  {
    path: "/:codename",
    name: "vueRunning",
    components: {
      default: vueRunning,
      sideMenu
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  base: "vue-running", //process.env.BASE_URL
  routes
});
export default router;
