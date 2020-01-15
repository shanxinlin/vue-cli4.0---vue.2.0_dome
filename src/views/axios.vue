<template>
  <div class="axios">
    axios
  </div>
</template>
<script>
export default {
  name: "Address",
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
        console.log(res);
      });
    }
  }
};
</script>
<style lang="less" scoped></style>
