<template>
  <div class="axios">
    axios
    <div class="content">
      <div class="list" v-for="(item, index) in list" :key="index">
        <div class="img"><img :src="item.thumbnail_pic_s" alt=""></div>
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Address",
  data(){
    return{
      list:[]
    }
  },
  created() {
    this.onLoad();
  },
  methods: {
    // 获取数据
    onLoad() {
      // 调用api接口，并且提供了两个参数
      this.getAxios("/toutiao/index",{
        type: "",
        key: "6e4c76fbfcf3ef53d39489c375a63cd3"
      }).then(res => {
        let List = res.data.result.data
        console.log(List);
        this.list = List
      });
    }
  }
};
</script>
<style lang="less" scoped>
.content{
  overflow: hidden;
  .list{
        float: left;
    margin: 20px;
    width: 200px;
    .img{
      width:100%;
      img{
        max-width: 100%;
    max-height: 100%;
      }
    }
  }
}
</style>
