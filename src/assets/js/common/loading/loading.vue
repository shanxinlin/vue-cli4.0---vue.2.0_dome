<template>
  <div v-show="visible" class="loading-wrap">
    <ul class="loading-box">
      加载中...
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>
<style lang="less" scoped>
.loading-wrap {
  position: absolute;
  z-index: 2000;
  background-color: hsla(0, 0%, 100%, 0.9);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
}
.loading-box {
  top: 50%;
  width: 100%;
  text-align: center;
  position: absolute;
  transform: translateY(-50%);
}
</style>
