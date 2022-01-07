import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axiosApi from "@/request/http.js" //注册全局api事件
import vuePlugin from "@/assets/js/vuePlugin.js" //全局公用方法
import 'lib-flexible/flexible' // html设置font-size
import './plugins/element.js'  //饿了么框架
import './plugins/iview.js'    //iview框架
import './plugins/swiper.js'   //swiper插件
import './plugins/waterfall.js'   //waterfall瀑布流插件
import './plugins/video.js'   //video插件
// import './plugins/vueQuillEditor.js'   //vue-quill-editor富文本插件
import './plugins/vuescroll'  //滚动条插件

import './assets/css/reset.css'  // 重置样式
import './assets/css/common.css'  // 公共样式

// import 'wowjs/css/libs/animate.css'
import 'animate.css'  //动画样式

Vue.use(axiosApi)
Vue.use(vuePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

  // ; (function(win) {
  //   var tid;
  //   function refreshRem() {
  //     let designSize = 1920; // 设计图尺寸
  //     let html = document.documentElement;
  //     let wW = html.clientWidth;// 窗口宽度
  //     let rem = wW * 100 / designSize;
  //     document.documentElement.style.fontSize = rem + 'px';
  //   }
  //   win.addEventListener('resize', function() {
  //     clearTimeout(tid);
  //     tid = setTimeout(refreshRem, 300);
  //   }, false);
  //   win.addEventListener('pageshow', function(e) {
  //     if (e.persisted) {
  //       clearTimeout(tid);
  //       tid = setTimeout(refreshRem, 300);
  //     }
  //   }, false);

  //   refreshRem();

  // })(window);

