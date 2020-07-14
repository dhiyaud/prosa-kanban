import api from "../../api";
import mutations from "../mutations";

export default {
  namespaced: true,
  state: {
    user: []
  },
  mutations: {
    [mutations.SET_USER](state, user) {
      state.user = user;
    }
  },
  actions: {
    getAll({ commit }) {
      return api.User.getAll().then(res => {
        const { data } = res.data;
        commit(mutations.SET_USER, data);
        return data;
      });
    }
  },
  getters: {
    getUser: state => state.user
  }
};
