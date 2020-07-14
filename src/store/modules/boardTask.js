import api from "../../api";
import mutations from "../mutations";

export default {
  namespaced: true,
  state: {
    boardTask: []
  },
  mutations: {
    [mutations.SET_BOARD_TASK](state, boardTask) {
      state.boardTask = boardTask;
    }
  },
  actions: {
    getAll({ commit }) {
      return api.BoardTask.getAll().then(res => {
        const { data } = res.data;
        commit(mutations.SET_BOARD_TASK, data);
        return data;
      });
    }
  },
  getters: {
    getBoardTask: state => state.boardTask
  }
};
