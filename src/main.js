import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


Vue.use(ElementUI);
Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
