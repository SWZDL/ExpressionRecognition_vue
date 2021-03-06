import Vue from "vue";
import "./plugins/http";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
