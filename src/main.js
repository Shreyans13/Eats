import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import STORAGE from "./api/storage";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
// Vue.axios.defaults.baseURL = "https://b38a-103-112-21-234.ngrok.io";
STORAGE.clearALL();

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
