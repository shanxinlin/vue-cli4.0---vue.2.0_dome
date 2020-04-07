"use strict";

// const os = require("os");
// let localhost = "";
// try {
//   const network = os.networkInterfaces();
//   localhost = network[Object.keys(network)[0]][1].address;
// } catch (e) {
//   localhost = "localhost";
// }

module.exports = {
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: false, //是否自动弹出浏览器页面
    host: "localhost",
    port: "9000",
    https: false, //是否使用https协议
    hotOnly: true, //是否开启热更新
    proxy: {
      "/api": {
        target: "http://v.juhe.cn", //API服务器的地址
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  publicPath: '',
  configureWebpack: {
    externals: {
      'AMap': 'AMap' // 高德地图配置
    }
  }
};

// publicPath: "/",
//   outputDir: "dist",
//   lintOnSave: true,
//   runtimeCompiler: true,
//   devServer: {
//     open: false,
//     host: localhost,
//     port: 9000,
//     https: false,
//     hotOnly: false,
//     proxy: {
//       "/toutiao": {
//         target: "http://v.juhe.cn", //要访问的跨域的域名
//         //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
//         changeOrigin: true,
//         ws: true, // 是否启用websockets
//         secure: false, // 使用的是http协议则设置为false，https协议则设置为true
//         pathRewrite: {
//           "^/toutiao": "/toutiao"
//         }
//       }
//     }
//   }



// devServer: {
//   port: port,
//   open: true,
//   overlay: {
//       warnings: false,
//       errors: true
//   },
//   proxy: {
//       // change xxx-api/login => mock/login
//       // detail: https://cli.vuejs.org/config/#devserver-proxy
//       [process.env.VUE_APP_BASE_API]: {
//           target: `http://127.0.0.1:${port}/mock`,
//           target: 'http://10.39.140.249:8005', // 开发环境
//           changeOrigin: true,
//           pathRewrite: {
//               ['^' + process.env.VUE_APP_BASE_API]: '/prod-api'
//           }
//       }
//   },
//   after: require('./mock/mock-server.js')
// },