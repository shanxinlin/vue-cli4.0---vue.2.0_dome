<template>
  <div>
    <router-link to="/axios/axiosA">axiosA</router-link>
    <router-link to="/axios/axiosB">axiosB</router-link>
    <div>
      <div v-for="(item, index) in list" :key="index">{{item.title}}</div>
      <button @click="page++, pageFn()">家页数</button>
      <button @click="page_size ++, pageFn()">改变最大页数</button>
    </div>
    <div class="child">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import ceshi from '@/request/ports/ports.js'
export default {
  name: "Address",
  data() {
    return {
      list: [],
      page: 1,
      page_size: 10
    }
  },
  created() {
    console.log('11111111')
    // console.log(ceshi.ceshi.toutiao)
    // this.getAxios(ceshi.ceshi.toutiao).then(res => {
    //   console.log('----------', res)
    // })

    // console.log(this.$allApi.ceshi1)

    this.pageFn()

  },
  methods: {
    pageFn() {
      this.$allApi.ceshi1({
        type: 'guonei',
        page: this.page,
        page_size: this.page_size,
        key: '6e4c76fbfcf3ef53d39489c375a63cd3'
      }).then(res => {
        this.list = res.data.result.data
        console.log(this.list)
      })
    }
  }
};
</script>
<style lang="less" scoped>
a {
  margin: 5px;
}
</style>
