<template>
  <div>
    <h3>1.传值的方式</h3>
    <br />
    <div>{{ Name }}</div>
    <Acom v-model="Name"></Acom>
    <button @click="fangdou()">防抖</button>
    <button @click="fangdou2()">防抖</button>
    <button @click="jieliu()">节流</button>
    <br>
    <br>
    <br>
    <h3>2.传值的的变化</h3>
    <div v-for="(item,index) in valArr" :key="index">{{item.age}}</div>
    <children :valArr.sync='valArr'></children>
  </div>
</template>

<script>
import Acom from '@/components/byValcom/A.vue'
export default {
  name: "byVal",
  components: {
    Acom,
    children: () => import('@/components/byValcom/children')
  },
  provide: {
    kuaji: 'demo'
  },
  data() {
    return {
      Name: 1,
      time: null,
      timmer: null,
      JLTime: false,
      last: 0,
      valArr: [
        { name: '1', age: 18 },
        { name: '2', age: 19 },
        { name: '3', age: 20 }
      ]
    };
  },
  mounted() {
    console.log('获取子组件数据', this.$children)
  },
  methods: {
    fangdou() {
      this.time && clearTimeout(this.time);
      this.time = setTimeout(() => {
        console.log('防抖')
      }, 1000)
    },
    fangdou2() {
      this.JLTime = !this.timmer
      if (this.timmer) {
        clearTimeout(this.timmer)
      }
      this.timmer = setTimeout(() => {
        this.timmer = null
      }, 1000)
      if (this.JLTime) {
        console.log('防抖2')
      }
    },
    jieliu() {
      var now = Date.now()
      if (now - this.last > 1000) {
        console.log('节流')
        this.last = now
      }
    }
  },
};
</script>
