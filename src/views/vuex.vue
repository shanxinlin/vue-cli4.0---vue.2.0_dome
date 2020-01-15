<template>
  <div id="app">
    <p>all:{{ $store.state.age }}</p>
    <p>state:{{ name }} {{ age }}</p>
    <p>getters(共享/缓存/并计算):{{ getStateCount }}</p>
    <p>
      <el-button type="primary" circle @click="addFun(10)">+</el-button>
      <el-button type="primary" circle @click="reductionFun(10)">-</el-button>
      <span>{{ num }}</span>
    </p>
  </div>
</template>

<script>
// this.$store.commit('toShowLoginDialog', true);
// this.$store.dispatch('toShowLoginDialog',false)
// 主要区别是：
// dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch('mutations方法名',值)
// commit：同步操作，写法：this.$store.commit('mutations方法名',值)
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.state.user.name = "oo";
    console.log(this.$store.state.user);
  },
  computed: {
    ...mapState("age", ["name", "age", "num"]),
    ...mapGetters("age", { getStateCount: "getStateCount" })
    // ...mapGetters('age', ['getStateCount'])
  },
  mounted() {
    //非模块改变获取state值
    this.loginStatus("2");
    console.log(this.$store.state.user.userInfo);
    //模块改变获取state值
    this.$store.commit("selfFn", true);
	console.log(this.$store.state.self);
	//异步模块改变获取state值
	this.$store.dispatch("acFn", false);
	console.log(this.$store.state.self);
  },
  methods: {
    ...mapMutations("age", ["add", "reduction"]),
    ...mapMutations("user", ["loginStatus"]),
    ...mapActions("age", ["addFun", "reductionFun"])
  }
};
</script>

<style></style>
