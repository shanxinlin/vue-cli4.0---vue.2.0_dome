import Vue from 'vue'
import Loading from './loading.vue'

const LoadMoudle = Vue.extend(Loading)  // 创建构造器

const toggleLoading = (el, binding) => {
  if (binding.value) {
    Vue.nextTick(() => {
      // 控制loading组件显示
      el.instance.visible = true
      // 插入到目标元素
      insertDom(el, el, binding)
    })
  } else {
    el.instance.visible = false
  }
}

const insertDom = (parent, el) => {
  parent.appendChild(el.html)
}

export default {
  bind: function(el, binding) {  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    const instance = new LoadMoudle({  // 创建 instance 实例
      el: document.createElement('div'),
      data() { }
    })
    console.log(el, instance)
    el.instance = instance
    el.html = instance.$el 
    el.loadStyle = {}
    console.log(el)
    binding.value && toggleLoading(el, binding)
  },
  update: function(el, binding) {
    if (binding.oldValue !== binding.value) {
      toggleLoading(el, binding)
    }
  },
  unbind: function(el, binding) {  // 只调用一次，指令与元素解绑时调用。
    el.instance && el.instance.$destroy()
  }
}
