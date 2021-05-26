<template>
  <div class="home">
    <template>
      <el-button type="text">点击打开 Message Box</el-button>
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
    this.loading = true
    setTimeout(() => {
      this.loading = false
    })

    // es6
    class obj {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      toString() {
        return this.x + this.y
      }
    };
    class Point extends obj {
      constructor(x, y, z) {
        super(x, y);
        this.z = z
      }
      toString() {
        return super.toString() + this.z
      }
    }

    let Obj = new Point(1, 2, 3)
  },
  methods: {

  }
};
</script>
