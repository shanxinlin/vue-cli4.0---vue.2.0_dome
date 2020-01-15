<template>
  <div>
    <div class="Jshares">
      <h3>分享组件</h3>
      <div
        class="boxerwei"
        v-for="(item, index) in hideShareWays"
        :key="index"
        @click="Jshare(item)"
      >
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#' + imgicon[index]"></use>
        </svg>
        {{ item }}
      </div>
    </div>
    <div>
      <div class="boxerwei" @click="imgerwei()">
        生成canvas图
      </div>
      <canvas class="canvasDome"></canvas>
    </div>
  </div>
</template>
<script>
import QRCode from "qrcode"; //二维码生成器
export default {
  data() {
    return {
      hideShareWays: [
        "qzone",
        "sina",
        "yixin",
        "qq",
        "renren",
        "douban",
        "tieba",
        "kaixin"
      ],
      imgicon: [
        "icon-QQkongjian",
        "icon-weibo",
        "icon-yixin",
        "icon-QQ",
        "icon-renren",
        "icon-douban",
        "icon-icon_baidulogo",
        "icon-kaixinwang"
      ],
      comparme: {
        url: "https://www.baidu.com",
        title: "老单的分享"
      },
      windowSize: "" //新窗口大小
    };
  },
  created() {
    //设置新开窗口的样式、定位
    let _ustr = [];
    _ustr[0] = "height=505,width=615,top=" + 280 / 2;
    _ustr[1] = "left=" + 550 / 2;
    _ustr[2] = "toolbar=no, menubar=no, scrollbars=no,";
    _ustr[2] += "resizable=yes,location=no, status=no";

    this.windowSize = _ustr.join(",");
  },
  methods: {
    Jshare(shareName) {
      switch (shareName) {
        case "qzone":
          this.shareQzone();
          break;
        case "sina":
          this.shareSina();
          break;
        case "yixin":
          this.shareYixin();
          break;
        case "qq":
          this.shareQQ();
          break;
        case "renren":
          this.shareRenren();
          break;
        case "douban":
          this.shareDouban();
          break;
        case "tieba":
          this.shareToTieba();
          break;
        case "kaixin":
          this.shareToKaixin();
          break;
        default:
          console.log("class name no match");
      }
    },
    shareQzone() {
      //qq空间分享
      let _param = {
        ...this.comparme
      };
      let url = `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?${this.fnarr(
        _param
      ).join("&")}`;
      this.imgerwei(url);
      // window.open(url, "Qzone");
    },
    shareSina() {
      //新浪分享
      let _param = {
        ...this.comparme
      };
      let url = `http://service.weibo.com/share/share.php?${this.fnarr(
        _param
      ).join("&")}`;
      this.imgerwei(url);
      // window.open(url, "Sina");
    },
    shareQQ() {
      //qq好友分享
      let _param = {
        ...this.comparme
      };
      let url = `http://connect.qq.com/widget/shareqq/index.html?${this.fnarr(
        _param
      ).join("&")}`;
      this.imgerwei(url);
      // window.open(url, "QQ");
    },
    shareYixin() {
      //易信分享
      let _param = {
        ...this.comparme
      };
      let url = `http://open.yixin.im/share?${this.fnarr(_param).join("&")}`;
      this.imgerwei(url);
      // window.open(url, "Yixin");
    },
    shareRenren() {
      //人人网分享
      let _param = {
        ...this.comparme
      };
      let url = `http://widget.renren.com/dialog/share?${this.fnarr(
        _param
      ).join("&")}`;
      window.open(url, "Renren");
    },
    shareDouban() {
      //豆瓣分享
      let _param = {
        ...this.comparme
      };
      let url = `http://shuo.douban.com/!service/share?${this.fnarr(
        _param
      ).join("&")}`;
      window.open(url, "Douban");
    },
    shareToTieba() {
      //百度贴吧分享
      let _param = {
        ...this.comparme
      };
      let url = `http://tieba.baidu.com/f/commit/share/openShareApi?${this.fnarr(
        _param
      ).join("&")}`;
      window.open(url, "Tieba");
    },
    shareToKaixin() {
      //开心网分享
      let _param = {
        ...this.comparme
      };
      let url = `http://www.kaixin001.com/rest/records.php?${this.fnarr(
        _param
      ).join("&")}`;
      window.open(url, "Kaixin");
    },

    fnarr(obj) {
      //地址栏传参遍历
      let arr = [];
      for (let tmp in obj) {
        arr.push(tmp + "=" + encodeURIComponent(obj[tmp] || ""));
      }
      return arr;
    },
    imgerwei(url = "https://www.baidu.com") {
      let Canvas = document.getElementsByClassName("canvasDome")[0];
      QRCode.toCanvas(Canvas, url, function(err, canvas) {
        if (err) throw err;
        console.log(canvas);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.Jshares {
  overflow: hidden;
}
.Jshares > div {
  float: left;
  margin: 10px;
  display: flex;
}
.boxerwei {
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: green;
  }
  svg {
    font-size: 18px;
  }
}
.canvasDome {
  height: 170px !important;
  width: 170px !important;
}
</style>
