import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "lib-flexible";
// 初始化reset.css
import "@/assets/css/common/reset.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
