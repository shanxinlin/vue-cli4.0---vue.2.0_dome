<template>
  <div class="home">
    <template>
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </template>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-loading="loading">
      <div>loadingasdasdfasdfasdfadsf</div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
// 埋点
export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      lookTimeStart: "",
      lookTimeEnd: "",
      loading: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = true
    }, 3000)
  },
  methods: {
    // 埋点
    mradius() {
      this.lookTimeStart = new Date().getTime();
      console.log("进入时间", this.lookTimeStart);
    },
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  },
  beforeRouteEnter: function(to, from, next) {
    next(vm => {
      vm.mradius();
    });
  },
  beforeRouteLeave: function(to, from, next) {
    this.lookTimeEnd = new Date().getTime();
    console.log("退出时间", this.lookTimeEnd);
    console.log("退出时间", this.lookTimeEnd - this.lookTimeStart);
    let that = this;
    setTimeout(function() {
      console.log("异步", that.lookTimeEnd - that.lookTimeStart);
    }, 2000);
    next();
  }
};
</script>
