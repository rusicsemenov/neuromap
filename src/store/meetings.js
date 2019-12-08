const saveLS = data => localStorage.setItem("meetings", JSON.stringify(data));
export default {
  state: {
    meetings: []
  },
  mutations: {
    setMeetings(state, payload) {
      state.meetings = payload;
    },
    addMeeting(state, payload) {
      state.meetings.push(payload);
      saveLS(state.meetings);
    },
    clearMeetings(state) {
      state.meetings = [];
      saveLS(state.meetings);
    },
    deleteMeeting(state, payload) {
      const index = state.meetings.indexOf(payload);
      state.meetings.splice(index, 1);
      saveLS(state.meetings);
    }
  },
  actions: {
    getMeetings({ commit }) {
      const meetings = localStorage.getItem("meetings");
      commit("setMeetings", JSON.parse(meetings || "[]"));
    },
    addMeeting({ commit }, payload) {
      commit("addMeeting", payload);
    },
    clearMeetings({ commit }) {
      commit("clearMeetings");
    },
    deleteMeeting({ commit }, payload) {
      confirm(
        `Вы действительно хотите удалить "${payload.name} ${payload.firstName}" \n Удаление не обратимо!`
      ) && commit("deleteMeeting", payload);
    }
  },
  getters: {
    allMeetings(state) {
      return state.meetings.sort((a, b) => {
        return a.dateTimeStart - b.dateTimeStart;
      });
    },
    someMeetings(state) {
      const now = new Date().getTime();
      return state.meetings
        .filter(e => e.dateTimeFinish > now)
        .sort((a, b) => {
          return a.dateTimeStart - b.dateTimeStart;
        })
        .splice(0, 3);
    }
  }
};
