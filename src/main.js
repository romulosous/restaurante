import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import "es6-promise/auto";
import store from "./store";
import "./assets/css/global.css";

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
