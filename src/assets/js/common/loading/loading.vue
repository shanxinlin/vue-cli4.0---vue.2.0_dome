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
  width: 100%;
  height: 100%;
  background: #eee;
  padding: 20px;
}
.loading-box {
}
</style>