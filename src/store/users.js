const saveLS = data => localStorage.setItem("users", JSON.stringify(data));
export default {
  state: {
    users: []
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    addUser(state, payload) {
      state.users.push(payload);
      saveLS(state.users);
    },
    clearUsers(state) {
      state.users = [];
      saveLS(state.users);
    },
    deleteUser(state, payload) {
      const index = state.users.map(e => e.id).indexOf(payload.id);
      state.users.splice(index, 1);
      saveLS(state.users);
    }
  },
  actions: {
    getUsers({ commit }) {
      const users = localStorage.getItem("users");
      commit("setUsers", JSON.parse(users || "[]"));
    },
    addUser({ commit }, payload) {
      commit("addUser", payload);
    },
    clearUsers({ commit }) {
      commit("clearUsers");
    },
    deleteUser({ commit }, payload) {
      confirm(
        `Вы действительно хотите удалить "${payload.name} ${payload.firstName}" \n Удаление не обратимо!`
      ) && commit("deleteUser", payload);
    }
  },
  getters: {
    allUsers(state) {
      return state.users;
    }
  }
};
