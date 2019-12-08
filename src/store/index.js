import Vue from "vue";
import Vuex from "vuex";

import users from "./users";
import meetings from "./meetings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { users, meetings }
});
