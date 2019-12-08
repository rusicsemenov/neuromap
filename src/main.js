import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import persistentState from "vue-persistent-state";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const initialState = { users: [], meetings: [] };
Vue.use(persistentState, initialState);

window.addEventListener("storage", function(e) {
  if (e.key === "users") store.dispatch("getUsers");
  if (e.key === "meetings") store.dispatch("getMeetings");
});

Vue.filter("toDayTime", function(value) {
  if (!value) return;
  return new Date(value).toLocaleString("ru-RU");
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
