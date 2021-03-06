import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axiosApi from "@/request/http.js" //注册全局api事件
import vuePlugin from "@/assets/js/vuePlugin.js" //全局公用方法
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
  if(to.meta.requireAuth){
    if( store.state.token ){
      next()
    }else {
      next('/login')
    }
  }else {
    next()
  }
})
