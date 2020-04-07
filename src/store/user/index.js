const state = {
  name: "orange",
  age: 15,
  token: "",
  userInfo: "1"
};
const mutations = {
  loginStatus: (state, data) => {
    state.userInfo = data;
    sessionStorage.setItem("userInfo", JSON.stringify(data));
  },
  //存储token方法
  //设置token等于外部传递进来的值
  setToken(state, token) {
    state.token = token;
    localStorage.token = token; //同步存储token至localStorage
  },
  //获取token方法
  //判断是否有token,如果没有重新赋值，返回给state的token
  getToken(state) {
    if (!state.token) {
      state.token = localStorage.getItem('token')
    }
    return state.token
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
