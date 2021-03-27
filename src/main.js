import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import "leaflet/dist/leaflet.css";

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
