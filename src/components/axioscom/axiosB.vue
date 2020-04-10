<template>
  <div class="axiosB">
    <div class="content">
      <div
        class="list"
        v-for="(item, index) in list"
        :key="index"
        @click="href(item)"
      >
        <div class="img">{{ item.source }}</div>
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import API from "@/request/ports/ports.js"
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
        pno: 1,
        ps: 20,
        dtype: "json",
        key: "2ac1d0f8750fdc2c818dc1117a7fc7ad"
      },
      list: [],
      scrollH: document.getElementsByClassName("contentR")[0],
      isLoading: false
    };
  },
  created() {
    this.onLoad();
  },
  mounted() {
    this.scrollH.addEventListener("scroll", this.scroll);
  },
  methods: {
    onLoad() {
      this.isLoading = true;
      this.getAxios(API.sign.weixin, this.obj).then(res => {
        if (res.data.error_code == 0) {
          if (res.data.result.list && res.data.result.list.length > 0) {
            this.list = res.data.result.list.concat(this.list)
          }else{
            return;
          }
          this.isLoading = false;
        } else {
          alert(res.data.reason);
        }
      });
    },
    href(item) {
      window.open(item.url);
    },
    scroll() {
      // console.log(
      //   this.getScrollTop(this.scrollH),
      //   this.getInnerHeight(this.scrollH),
      //   this.getOffsetHeight(this.scrollH)
      // );
      let bottomOfWindow =
        this.getOffsetHeight(this.scrollH) -
          this.getScrollTop(this.scrollH) -
          this.getInnerHeight(this.scrollH) <=
        100;
      if (bottomOfWindow && this.isLoading == false) {
        this.obj.pno++;
        this.onLoad();
      }
    }
  },
  beforeDestroy(){
    this.scrollH.removeEventListener("scroll", this.scroll);
  }
};
</script>
<style lang="less" scoped>
.content {
  overflow: hidden;
  .list {
    display: flex;
    margin: 20px;
    align-items: center;
    margin: 33px 10px;
    .img {
      width: 200px;
      overflow: hidden;
    }
    .title {
      cursor: pointer;
      text-align: left;
      flex: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      transition: 0.5s all;
      &:hover {
        color: rgb(11, 192, 108);
        transform: translateX(10px);
      }
    }
  }
}
</style>
