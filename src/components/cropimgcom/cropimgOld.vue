<template>
  <div id="demo">
    <!-- 遮罩层 -->
    <!-- <div id="bg_box" v-show="panel"></div>   -->
    <div class="tccontent" v-show="panel">
      <div class="container">
        <div class="img-container">
          <img id="image" :src="url" alt="Picture" />
        </div>
        <div class="margin-t20">
          <button @click="raduis">旋转</button>
          <button @click="replacement">重置</button>
          <button class="fr" @click="commit">确定</button>
          <button class="fr" @click="cancel">取消</button>
        </div>
      </div>
      <div class="square previewImg"></div>
    </div>
    <div>
      <div class="float-l">
        <input
          type="file"
          id="change"
          ref="change"
          accept="image"
          @change="change"
        />
        <label class="inputlabel" for="change">+</label>
      </div>
      <div class="show float-l float-l20">
        <div
          class="picture"
          :style="'backgroundImage:url(' + headerImage + ')'"
        ></div>
        <div class="clear-x" @click="clearImg()">×</div>
      </div>
    </div>
  </div>
</template>


<script>
import Cropper from "cropperjs";
export default {
  props: {
    apifile: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      headerImage: "",
      picValue: "",
      cropper: "",
      croppable: false,
      panel: false,
      imgshow: false,
      url: "",
    };
  },
  mounted() {
    //初始化这个裁剪框
    var self = this;
    var image = document.getElementById("image");
    this.cropper = new Cropper(image, {
      viewMode: 1,
      aspectRatio: 300 / 122, //设置剪裁容器的比例
      preview: ".previewImg", // 预览视图
      viewMode: 1, //如果将viewMode设置为0，裁剪框可以在画布外展开，而值为1,2或3将裁剪框限制为画布的大小
      dragMode: "move", //'crop':创建一个新的裁剪框'move':移动画布
      background: true, //是否在容器上显示网格背景
      zoomable: true, //是否允许放大缩小图片
      autoCrop: true, //是否自动显示裁剪框
      autoCropArea: 0.6, //0.8(图像的80%)
      cropBoxResizable: true, //启用通过拖动调整裁剪框的大小
      rotatable: true, //可旋转
      ready: function () {
        //选择完图片后自动执行,“准备”事件的捷径
        self.croppable = true;
        // this.cropper.move(1, -1).rotate(45).scale(1, -1);
      },
    });
  },
  methods: {
    raduis() {
      this.cropper.rotate(45);
    },
    replacement() {
      this.cropper.reset(); //重置
    },
    //取消上传
    cancel() {
      this.panel = false;
      // obj.outerHTML=obj.outerHTML;
      this.$refs.change.setAttribute("type", "file");
    },
    // 删除上传的图片
    clearImg() {
      this.imgshow = false;
      this.headerImage = "";
    },
    //创建url路径
    getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // window.webkitURL和window.URL是一样的，window.URL标准定义
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // window.webkitURL是webkit内核的实现（一般手机上就是使用这个）
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    //input框change事件，获取到上传的文件
    change(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      let type = files[0].type; //文件的类型，判断是否是图片
      let size = files[0].size; //文件的大小，判断图片的大小
      let imgurl = this.$refs.change.value;
      if (!/\.(jpg|png)$/.test(imgurl)) {
        this.$message.error("图片类型必须是jpg,png中的一种");
        return false;
      }
      if (size > 5242880) {
        this.$message.error("请选择5M以内的图片！");
        return false;
      }
      this.picValue = files[0];
      this.url = this.getObjectURL(this.picValue);
      console.log(this.url);
      //每次替换图片要重新得到新的url
      if (this.cropper) {
        this.cropper.replace(this.url);
      }
      this.$refs.change.setAttribute("type", "text");
      this.panel = true;
    },
    //确定提交
    commit() {
      this.panel = false;
      // this.imgshow = true;  //显示裁切后的图片
      let croppedCanvas, roundedCanvas, Blob, files;
      if (!this.croppable) {
        return;
      }
      this.$refs.change.setAttribute("type", "file");
      // Crop
      croppedCanvas = this.cropper.getCroppedCanvas();
      // Round
      roundedCanvas = this.getRoundedCanvas(croppedCanvas);
      this.headerImage = roundedCanvas.toDataURL();
      Blob = this.dataURLtoBlob(this.headerImage);
      files = new window.File([Blob], this.picValue.name, {
        type: this.picValue.type,
      });
      console.log(files); //裁切后的file对象，传到后台的参数
      this.headerImage = URL.createObjectURL(files);
      console.log(this.headerImage);
      //上传图片
      let formData = new FormData();
      formData.append("imageFile", files);
      formData.append("name", "imageFile");
      let param = {};
      if (process.env.NODE_ENV == "development") {
        param.url = this.baseUrl + this.apifile;
      } else {
        param.url = this.apifile;
      }

      param.data = formData;
      param.method = "POST";
      console.log(param, param.data.get("imageFile"));
      //   this.asyncAjaxPostImg(param)
      //     .then((res) => {
      //       console.log(res);
      //       this.$emit("postImg", res);
      //       //loading框关闭
      //       notification({
      //         title: "成功",
      //         message: `上传成功`,
      //         type: "success",
      //       });
      //     })
      //     .catch((err) => {});
    },
    //canvas画图
    getRoundedCanvas(sourceCanvas) {
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      var width = sourceCanvas.width;
      var height = sourceCanvas.height;
      canvas.width = width;
      canvas.height = height;
      context.imageSmoothingEnabled = true;
      context.drawImage(sourceCanvas, 0, 0, width, height);
      context.globalCompositeOperation = "destination-in";
      context.beginPath();
      //绘制圆形
      // context.arc(width / 2,height / 2,Math.min(width, height) / 2,0,2 * Math.PI,true);
      context.fill();

      return canvas;
    },
    // dataurl 转 Blob
    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
  },
};
</script> 
  
<style scoped>
.inputlabel {
  width: 100px;
  height: 100px;
  display: block;
  background: #e8e8e8;
  line-height: 100px;
  font-size: 35px;
  text-align: center;
  color: #999;
  font-weight: 200;
}
.square {
  width: 120px;
  height: 120px;
  overflow: hidden;
  margin: 6px;
  margin-top: 0px;
  border: 1px solid #c5c5c5;
}
.img-container {
  /* display: flex; */
  max-height: 400px;
  min-height: 400px;
}
.float-l {
  float: left;
}
.float-l20 {
  margin-left: 10px;
}
.margin-t20 {
  margin-top: 20px;
}
#change {
  display: none;
}
#bg_box {
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
#demo #button,
#demo #cancel {
  right: 10px;
  top: 10px;
  width: 80px;
  height: 40px;
  border: none;
  /* border-radius: 5px; */
  background: white;
}
#demo #cancel {
  left: 10px;
}
#demo .show {
  width: 100px;
  height: 100px;
  /* border-radius: 50%; */
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  position: relative;
}
.clear-x {
  position: absolute;
  top: -10px;
  right: -9px;
  border: 1px solid #999;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #fff;
  border-radius: 50%;
  color: #999;
  box-sizing: border-box;
}
.clear-x:hover {
  color: #000;
  border: 1px solid #999;
  cursor: pointer;
}
#demo .picture {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.tccontent {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  background: #fff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  display: flex;
  z-index: 99;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
#demo .container {
  width: 500px;
}
#demo #image {
  max-width: 100%;
}
</style>
<style lang="less">
#demo {
  .cropper-view-box,
  .cropper-face {
    /* border-radius: 50%; */
  }
  .cropper-container {
    font-size: 0;
    line-height: 0;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    direction: ltr;
    -ms-touch-action: none;
    touch-action: none;
  }
  .cropper-container img {
    display: block;
    min-width: 0 !important;
    max-width: none !important;
    min-height: 0 !important;
    max-height: none !important;
    width: 50%;
    height: 100%;
    image-orientation: 0deg;
  }
  .cropper-wrap-box,
  .cropper-canvas,
  .cropper-drag-box,
  .cropper-crop-box,
  .cropper-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .cropper-wrap-box {
    overflow: hidden;
  }
  .cropper-drag-box {
    opacity: 0;
    background-color: #fff;
  }
  .cropper-modal {
    opacity: 0.5;
    background-color: #000;
  }
  .cropper-view-box {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: 1px solid #39f;
    outline-color: rgba(51, 153, 255, 0.75);
  }
  .cropper-dashed {
    position: absolute;
    display: block;
    opacity: 0.5;
    border: 0 dashed #eee;
  }
  .cropper-dashed.dashed-h {
    top: 33.33333%;
    left: 0;
    width: 100%;
    height: 33.33333%;
    border-top-width: 1px;
    border-bottom-width: 1px;
  }
  .cropper-dashed.dashed-v {
    top: 0;
    left: 33.33333%;
    width: 33.33333%;
    height: 100%;
    border-right-width: 1px;
    border-left-width: 1px;
  }
  .cropper-center {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    height: 0;
    opacity: 0.75;
  }
  .cropper-center:before,
  .cropper-center:after {
    position: absolute;
    display: block;
    content: " ";
    background-color: #eee;
  }
  .cropper-center:before {
    top: 0;
    left: -3px;
    width: 7px;
    height: 1px;
  }
  .cropper-center:after {
    top: -3px;
    left: 0;
    width: 1px;
    height: 7px;
  }
  .cropper-face,
  .cropper-line,
  .cropper-point {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }
  .cropper-face {
    top: 0;
    left: 0;
    background-color: #fff;
  }
  .cropper-line {
    background-color: #39f;
  }
  .cropper-line.line-e {
    top: 0;
    right: -3px;
    width: 5px;
    cursor: e-resize;
  }
  .cropper-line.line-n {
    top: -3px;
    left: 0;
    height: 5px;
    cursor: n-resize;
  }
  .cropper-line.line-w {
    top: 0;
    left: -3px;
    width: 5px;
    cursor: w-resize;
  }
  .cropper-line.line-s {
    bottom: -3px;
    left: 0;
    height: 5px;
    cursor: s-resize;
  }
  .cropper-point {
    width: 5px;
    height: 5px;
    opacity: 0.75;
    background-color: #39f;
  }
  .cropper-point.point-e {
    top: 50%;
    right: -3px;
    margin-top: -3px;
    cursor: e-resize;
  }
  .cropper-point.point-n {
    top: -3px;
    left: 50%;
    margin-left: -3px;
    cursor: n-resize;
  }
  .cropper-point.point-w {
    top: 50%;
    left: -3px;
    margin-top: -3px;
    cursor: w-resize;
  }
  .cropper-point.point-s {
    bottom: -3px;
    left: 50%;
    margin-left: -3px;
    cursor: s-resize;
  }
  .cropper-point.point-ne {
    top: -3px;
    right: -3px;
    cursor: ne-resize;
  }
  .cropper-point.point-nw {
    top: -3px;
    left: -3px;
    cursor: nw-resize;
  }
  .cropper-point.point-sw {
    bottom: -3px;
    left: -3px;
    cursor: sw-resize;
  }
  .cropper-point.point-se {
    right: -3px;
    bottom: -3px;
    width: 20px;
    height: 20px;
    cursor: se-resize;
    opacity: 1;
  }
  @media (min-width: 768px) {
    .cropper-point.point-se {
      width: 15px;
      height: 15px;
    }
  }
  @media (min-width: 992px) {
    .cropper-point.point-se {
      width: 10px;
      height: 10px;
    }
  }
  @media (min-width: 1200px) {
    .cropper-point.point-se {
      width: 5px;
      height: 5px;
      opacity: 0.75;
    }
  }
  .cropper-point.point-se:before {
    position: absolute;
    right: -50%;
    bottom: -50%;
    display: block;
    width: 200%;
    height: 200%;
    content: " ";
    opacity: 0;
    background-color: #39f;
  }
  .cropper-invisible {
    opacity: 0;
  }
  .cropper-bg {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");
  }
  .cropper-hide {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
  }
  .cropper-hidden {
    display: none !important;
  }
  .cropper-move {
    cursor: move;
  }
  .cropper-crop {
    cursor: crosshair;
  }
  .cropper-disabled .cropper-drag-box,
  .cropper-disabled .cropper-face,
  .cropper-disabled .cropper-line,
  .cropper-disabled .cropper-point {
    cursor: not-allowed;
  }
}
</style>