<template>
  <div id="app">
    <div class="topheader">
      @vue/cli4.0---vue.2.0_dome
    </div>
    <div class="bodybox">
      <div class="routeList">
        <vue-scroll style="height:100%">
          <div class="list_l">
            <router-link to="/">Home</router-link>
            <router-link to="/About">About</router-link>
            <router-link to="/vuex">vuex</router-link>
            <router-link to="/Echart">Echart</router-link>
            <router-link to="/waterfall">waterfall</router-link>
            <router-link to="/video">video</router-link>
            <router-link to="/quillEditor">富文本</router-link>
            <router-link to="/upFile">upFile</router-link>
            <router-link to="/MaiTrack">MaiTrack埋点</router-link>
            <router-link to="/Promise">Promise同步异步</router-link>
            <router-link to="/share">分享</router-link>
            <router-link to="/regExp">RegExp正则</router-link>
            <router-link to="/Animate">Animate动画</router-link>
            <router-link to="/axios">axios接口模拟</router-link>
            <router-link to="/amap">amap地图模拟</router-link>
            <router-link to="/linkage">层级联动</router-link>
          </div>
        </vue-scroll>
      </div>
      <div class="contentR">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#app a {
  font-size: 15px;
  text-decoration: underline;
}
.router-link-exact-active.router-link-active {
  color: red;
}
.bodybox {
  height: 100%;
  padding-top: 50px;
  max-width: 1200px;
  margin: auto;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
<style lang="less" scoped>
.routeList {
  width: 240px;
  position: fixed;
  top: 50px;
  bottom: 0;
  border-right: 1px solid #eee;
  // overflow: scroll;
  .list_l a {
    display: block;
    line-height: 26px;
  }
}
.contentR {
  margin: 0px 0 0 240px;
  height: 100%;
  overflow: scroll;
}
.topheader {
  position: fixed;
  top: 0px;
  background: white;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  border-bottom: 1px solid #eee;
  z-index: 10;
}
</style>
