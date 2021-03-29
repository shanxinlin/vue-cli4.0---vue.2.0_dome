<template>
  <div>

    <button @click="outFn">组件切换</button>
    <button @click="age++">age加一传值{{age}}</button>
    <keep-alive>
      <component :is="keepAliveCom" :age="age"></component>
    </keep-alive>
  </div>
</template>
<script>
export default {
  components: {
    keepAliveComOne: () => import('@/components/keepAliveCom/keepAliveComOne.vue'),
    keepAliveComTow: () => import('@/components/keepAliveCom/keepAliveComTow.vue')
  },
  data() {
    return {
      keepAliveCom: 'keepAliveComOne',
      age: 18
    }
  },
  methods:{
    outFn(){
      if(this.keepAliveCom === 'keepAliveComOne'){
        this.keepAliveCom = 'keepAliveComTow'
      }else {
        this.keepAliveCom = 'keepAliveComOne'
      }
    }
  }
}
</script>
