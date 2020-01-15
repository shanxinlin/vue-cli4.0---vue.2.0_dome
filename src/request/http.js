"use strict";
import axios from "axios";
// import VueAxios from "vue-axios";
import QS from "qs"; // 引入qs模块，用来序列化post类型的数据
import store from "@/store/index"; // 先导入vuex,因为我们要使用到里面的状态对象
import Router from "vue-router";

let localhost = location.origin;
// 环境的切换
if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = localhost;
} else if (process.env.NODE_ENV == "debug") {
  axios.defaults.baseURL = localhost;
} else if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = localhost;
}

const Axios = axios.create({
  // config里面有这个transformRquest， 这个选项会在发送参数前进行处理。 这时候我们通过Qs.stringify转换为表单查询参数
  // transformRequest: [
  //   function(data) {
  //     data = QS.stringify(data);
  //     console.log(data);
  //     return data;
  //   }
  // ],
  baseURL: axios.defaults.baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded" //post请求头的设置
    // "Content-Security-Policy": "upgrade-insecure-requests",
    // "Content-Type": "application/json"
  },
  withCredentials: true //表示跨域请求时是否需要使用凭证
});
Axios.defaults.timeout = 10000; //请求超时

// 添加请求拦截器
Axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.state.user.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// 添加响应拦截器
Axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          Router.replace({
            path: "/login",
            query: {
              redirect: Router.currentRoute.fullPath
            }
          });
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          alert("登录过期，请重新登录");
          // 清除token
          localStorage.removeItem("token");
          store.commit("loginSuccess", null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            Router.replace({
              path: "/login",
              query: {
                redirect: Router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;
        // 404请求不存在
        case 404:
          alert("网络请求不存在");
          break;
        // 其他错误，直接抛出错误提示
        default:
          alert(error.response.data.message);
      }
      return Promise.reject(error.response);
    }
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    Axios({
      method: "get",
      url: url,
      params: params
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    Axios({
      method: "post",
      url: url,
      headers: { "Content-Type": "aplication/json" },
      data: data
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    Axios({
      method: "patch",
      url: url,
      data: data
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    Axios({
      method: "put",
      url: url,
      data: data
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * 封装表单请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function pForm(url, data) {
  return new Promise((resolve, reject) => {
    Axios({
      method: "post",
      url: url,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: data,
      transformRequest: [
        function(data) {
          console.log(data);
          data = QS.stringify(data);
          return data;
        }
      ]
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default {
  install(Vue) {
    Vue.prototype.getAxios = (url, params) => get(url, params);
    Vue.prototype.postJson = (url, params) => post(url, params);
    Vue.prototype.patchJson = (url, params) => patch(url, params);
    Vue.prototype.putJson = (url, params) => put(url, params);
    Vue.prototype.postForm = (url, params) => pForm(url, params);
  }
};
