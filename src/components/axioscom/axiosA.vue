<template>
  <div class="axios">
    <div class="content">
      <div
        class="list"
        v-for="(item, index) in list"
        :key="index"
        @click="href(item)"
      >
        <div class="img"><img :src="item.thumbnail_pic_s" alt="" /></div>
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "axiosA",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    // 获取数据
    onLoad() {
      // 调用api接口，并且提供了两个参数
      this.getAxios("/api/toutiao/index", {
        type: "",
        key: "6e4c76fbfcf3ef53d39489c375a63cd3"
      }).then(res => {
        if (res.data.error_code == 0) {
          let List = res.data.result.data;
          this.list = List;
        } else {
          alert(res.data.reason);
        }
      });
    },
    href(item) {
      window.open(item.url);
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  overflow: hidden;
  .list {
    float: left;
    margin: 20px;
    width: 200px;
    cursor: pointer;
    .img {
      width: 100%;
      height: 150px;
      overflow: hidden;
      img {
        max-width: 100%;
        max-height: 100%;
        transition: all 0.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .title {
      margin-top: 10px;
      height: 36px;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      &:hover {
        color: rgb(11, 192, 108);
      }
    }
  }
}
</style>
