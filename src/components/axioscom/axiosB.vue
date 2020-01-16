<template>
  <div class="axiosB">
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
  name: "axios",
  data() {
    return {
      obj: {
        // sort: "desc",
        // page: 1,
        // pagesize: 10,
        // time: 1418816972,
        // key: "6f99202416fba33c2a1a8f9825dcb4e2"
        pno:1,
        ps:20,
        dtype:"json",
        key:"2ac1d0f8750fdc2c818dc1117a7fc7ad"
      },
      list: []
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      this.getAxios("/api/weixin/query", this.obj).then(res => {
        console.log(res.data)
        if (res.data.error_code == 0) {
          this.list = res.data.result.list || [];
        } else {
          alert(res.data.reason);
        }
      });
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