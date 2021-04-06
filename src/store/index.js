import Vue from "vue";
import Vuex from "vuex";
import age from "./age";
import user from "./user";

Vue.use(Vuex);

// vuex状态持久化插件 https://github.com/robinvdvleuten/vuex-persistedstate
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  //非模块写法
  state: {
    self: false,
    token: 'sxl'
  },
  mutations: {
    selfFn(state, n) {
      state.self = n;
    }
  },
  actions: {
    acFn(context, txt) {
      context.commit("selfFn", txt);
    }
  },
  //模块写法
  modules: {
    age,
    user
  },
  plugins: [createPersistedState()]
});
