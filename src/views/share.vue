<template>
  <div class="share">
    分享
    <br />
    <div class="left">
      <div class="boxerwei" @click="img0">生成canvas图</div>
      <canvas class="canvas"></canvas>
    </div>
    <div class="left">
      <div class="boxerwei" @click="img1">生成base64url</div>
      <div class="canvasbase" v-if="baseimg">
        <img :src="baseimg" alt="" />
      </div>
    </div>
    <div class="left">
      <div class="boxerwei" @click="img2">weibo分享</div>
      <div id="canvasone"></div>
    </div>

    <br />
    <div class="clear">
      <Jshare></Jshare>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";  //二维码生成器
import Jshare from "@/components/shares";
export default {
  components: {
    Jshare
  },
  data() {
    return {
      baseimg: ""
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    img0() {
      let Canvas = document.getElementsByClassName("canvas")[0];
      QRCode.toCanvas(Canvas, "https://www.baidu.com", function(err, canvas) {
        if (err) throw err;
        console.log(canvas);
      });
    },
    img1() {
      let that = this;
      QRCode.toDataURL("https://www.baidu.com", function(err, url) {
        if (err) throw err;
        console.log(url);
        that.baseimg = url;
      });
    },
    img2() {
      let title = "sxl的新浪分享";
      let url = "https://www.baidu.com";
      let sharesinastring = `http://v.t.sina.com.cn/share/share.php?title=${title}&url=${url}&content=utf-8&sourceUrl=${url}`;
      //  let sharesinastring='http://v.t.sina.com.cn/share/share.php?&appkey='+appkey+'&title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='picurl;
      window.open(sharesinastring, "newwindow", "width=800,height=500");
    }
  }
};
</script>

<style lang="less" scoped>
.left {
  float: left;
  margin: 20px;
  width: 130px;
  text-align: center;
}
.boxerwei {
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: green;
  }
}
.canvas {
  width: 100%;
}
.clear{
  clear:both;
}
</style>
