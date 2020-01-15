<template>
  <div>
    <h3>视频/音频</h3>
    <!-- 多种视频格式 -->
    <!-- <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm"> -->
    <!-- <source src="https://vjs.zencdn.net/v/oceans.ogv" type="video/ogg"> -->
    <div class="hello">
      <div class="test_two_box">
        <video v-for="(item,index) in list" :key="index" :id="'myVideo'+item.id" class="video-js">
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          id: 0,
          pic: ""
        },
        {
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          id: 1,
          pic: ""
        }
      ]
    };
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      this.list.map(v => {
        //初始化视频方法
        this.$video("myVideo" + v.id, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "800px",
          //设置视频播放器的显示高度（以像素为单位）
          height: "400px"
        });
      });
    }
  },
  beforeDestroy: function() {
    this.list.map(v => {
        this.$video("myVideo"+v.id).dispose();
    });
  }
  //   beforeRouteLeave(to, form, next) {
  //     // alert("页面离开之前的事件")
  //     next();
  //   }
};
</script>

<style scoped>
</style>

