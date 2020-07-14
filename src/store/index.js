import Vue from "vue";
import Vuex from "vuex";
import boardTask from "./modules/boardTask";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { boardTask, user }
});
