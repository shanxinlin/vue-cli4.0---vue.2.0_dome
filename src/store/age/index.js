const state = {
  age: 10,
  name: "GN",
  num: 0
};

const getters = {
  //类似vue的computed
  getStateCount(state) {
    return state.num + 2;
  }
};

const mutations = {
  add(state, n) {
    state.num = state.num + n;
  },
  reduction(state, n) {
    state.num = state.num - n;
  },
  addMu(v, k) {
    return v + k;
  }
};

const actions = {
  //注册actions,类似vue里的methods
  addFun(context, n) {
    context.commit("add", n);
  },
  reductionFun(context, n) {
    context.commit("reduction", n);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
