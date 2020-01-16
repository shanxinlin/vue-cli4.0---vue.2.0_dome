<template>
  <div>
    <router-link to="/axios/axiosA">axiosA</router-link>
    <router-link to="/axios/axiosB">axiosB</router-link>
    <div class="child">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "Address"
};
</script>
<style lang="less" scoped>
  a{
    margin:5px;
  }
</style>
