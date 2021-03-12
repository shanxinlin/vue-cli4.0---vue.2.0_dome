<!--
 * @Author: shanxinlin
 * @Date: 2021-02-24 10:12:08
 * @LastEditTime: 2021-03-12 17:08:47
 * @LastEditors: shanxinlin
 * @Description: 
 * @FilePath: \vue-cli4.0---vue.2.0_dome\src\components\cropimgcom\cropimg.vue
 * @
-->
<template>
  <div class="cropContent">
    <input type="file" @change="change" />
    <div class="contentImg">
      <div class="container">
        <div class="imgContainer">
          <img ref="cropImg" :src="imgUrl" />
        </div>
        <div class="btnCrop">
          <button @click="raduis()">旋转</button>
          <button @click="replacement()">重置</button>
          <button @click="cropCommit()">确定</button>
          <button @click="cancel()">取消</button>
        </div>
      </div>
      <div class="previewRgiht previewImg"></div>
    </div>
  </div>
</template>

<script>
// 安装：
// "yarn add vue-cropperjs"  or  "npm i cropperjs -S"
// 引用
import Cropper from "cropperjs";
export default {
  data() {
    return {
      cropper: "",
      fileObj: {},
      imgUrl: "",
      imgName: "",
    };
  },
  mounted() {
    this.initCropper();
  },
  methods: {
    initCropper() {
      let imageHTML = this.$refs.cropImg;
      this.cropper = new Cropper(imageHTML, {
        viewMode: 1,
        aspectRatio: 300 / 122, //设置剪裁容器的比例
        preview: ".previewImg", // 预览视图
        viewMode: 1, //如果将viewMode设置为0，裁剪框可以在画布外展开，而值为1,2或3将裁剪框限制为画布的大小
        dragMode: "move", //'crop':创建一个新的裁剪框'move':移动画布
        background: true, //是否在容器上显示网格背景
        zoomable: true, //是否允许放大缩小图片
        autoCrop: true, //是否自动显示裁剪框
        autoCropArea: 0.6, //0.8(图像的80%)
        cropBoxResizable: false, //启用通过拖动调整裁剪框的大小
        rotatable: true, //可旋转
        zoomOnTouch: false, // 启用通过拖动触摸缩放图像
        ready: function() {
          // 选择完图片后自动执行,“准备”事件的捷径
          // this.cropper.move(1, -1).rotate(45).scale(1, -1);
        },
      });
    },
    // 旋转
    raduis() {
      this.cropper.rotate(45);
    },
    //重置
    replacement() {
      this.cropper.reset();
    },
    //取消
    cancel() {
    },
    change(event) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      let type = files[0].name;
      let size = files[0].size;
      //文件的类型，判断是否是图片
      if (!/\.(jpg|jpeg|png)$/i.test(type)) {
        alert("图片类型必须是jpg,png中的一种");
        return false;
      }
      //文件的大小，判断图片的大小
      if (size > 5242880) {
        alert("请选择5M以内的图片！");
        return false;
      }
      this.fileObj = files[0];
      // 或者用 new FileReader() 读取文件
      this.imgUrl = this.getObjectURL(this.fileObj);
      // 更换图像的src并重建裁剪器
      if (this.cropper) {
        this.cropper.replace(this.imgUrl, false);
      }
      this.imgName = files.name;
    },
    //创建url路径
    getObjectURL(fileObj) {
      let url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(fileObj);
      } else if (window.URL != undefined) {
        // window.webkitURL和window.URL是一样的，window.URL标准定义
        url = window.URL.createObjectURL(fileObj);
      } else if (window.webkitURL != undefined) {
        // window.webkitURL是webkit内核的实现（一般手机上就是使用这个）
        url = window.webkitURL.createObjectURL(fileObj);
      }
      return url;
    },
    // 确认裁切
    cropCommit() {
      let croppedCanvas, roundedCanvas, _BLOB, _FILES;
      // 裁切
      croppedCanvas = this.cropper.getCroppedCanvas();
      // 截取
      // roundedCanvas = this.getRoundedCanvas(croppedCanvas);
      // 转换成base64
      let headerImage = croppedCanvas.toDataURL();
      // base64 转 blob
      _BLOB = this.dataURLtoBlob(headerImage);
      // 裁切后的file对象 (new window.File 此方法IE不支持)
      // _FILES = new window.File([_BLOB], this.fileObj.name, {
      //   type: this.fileObj.type,
      // });
      // 转换成本地blob的image路径
      let blobImage = this.getObjectURL(_BLOB.file);
      //上传图片
      let formData = new FormData();
      formData.append("file", _BLOB.file, _BLOB.name);
      console.log(formData, _BLOB)
      // axios请求
    },
    //canvas画图
    getRoundedCanvas(sourceCanvas) {
      let canvas = document.createElement("canvas");
      let context = canvas.getContext("2d");
      let width = sourceCanvas.width;
      let height = sourceCanvas.height;
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
    dataURLtoBlob(dataurl, filename = 'file') {
      let arr = dataurl.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let bstr = atob(arr[1]), n = bstr.length;
      let u8arr = new Uint8Array(n);
      let suffix = mime.split('/')[1];
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      let theBlob = new Blob([u8arr], { type: mime });
      theBlob.lastModifiedDate = new Date();
      theBlob.name = `${filename}.${suffix}`
      return {
        file: theBlob,
        name: `${filename}.${suffix}`
      }
    }
  },
};
</script>
<style scoped lang="less">
.cropContent {
  .contentImg {
    border: solid #e4e4e4 1px;
    display: flex;
    .previewRgiht {
      width: 120px;
      height: 120px;
      overflow: hidden;
      margin-left: 10px;
      margin-top: 5px;
      // border: 1px solid #c5c5c5;
    }
  }
  .container {
    width: calc(100% - 140px);
    .imgContainer {
      max-height: 400px;
      min-height: 400px;
    }
    .btnCrop {
      margin: 10px;
    }
  }
}
</style>
<style lang="less">
.cropContent {
  .cropper-view-box,
  .cropper-face {
    // border-radius: 50%;
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
    content: ' ';
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
    content: ' ';
    opacity: 0;
    background-color: #39f;
  }
  .cropper-invisible {
    opacity: 0;
  }
  .cropper-bg {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
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

<!--
配置属性：
// aspectRatio: 16 / 9,//裁剪框的宽高比
// viewMode: 1,//定义cropper的视图模式
// dragMode: "move",//定义cropper的拖拽模式‘crop’: 可以产生一个新的裁剪框 ‘move’: 只可以移动裁剪框 ‘none’: 什么也不处理
// preview: ".yulan",//添加额外的元素(容器)以供预览
// modal: true,//显示图片上方的黑色遮盖层
// guides: false,//显示在裁剪框上方的虚线
// background: false,//显示容器的网格背景。（就是后面的马赛克）
// autoCrop: true, //是否自动显示裁剪框 默认：true
// autoCropArea: "0.6",//定义自动裁剪面积大小和图片进行对比 默认：0.8；
// movable: true,//是否允许可以移动后面的图片 默认：true
// rotatable: true,//是否允许旋转图像 默认：true
// scalable: true,//是否允许缩放图像 默认：true
// zoomable: true,//是否允许放大图像 默认：true
// zoomOnTouch: true,//是否可以通过拖动触摸来放大图像 默认：true
// zoomOnWheel: true,//是否可以通过移动鼠标来放大图像 默认：true
// wheelZoomRatio: "0.1",//用鼠标移动图像时，定义缩放比例
// cropBoxMovable: false,//是否通过拖拽来移动剪裁框 默认：true 
// cropBoxResizable: false,//是否通过拖动来调整剪裁框的大小 默认：true
// toggleDragModeOnDblclick: true,//当点击两次时可以在“crop”和“move”之间切换拖拽模式 默认：true
// responsive: true,//在调整窗口大小的时候重新渲染cropper 默认：true
// restore: true,//在调整窗口大小后恢复裁剪的区域 默认：true
// minContainerWidth: "200",//容器的最小宽度 默认：200；
// minContainerHeight: "100",//容器的最小高度 默认：100；
// minCanvasWidth: "0",//canvas的最小宽度 默认：0
// minCanvasHeight: "0",//canvas的最小高度 默认：0
// minCropBoxWidth: "0",//裁剪层的最小宽度 默认：0
// minCropBoxHeight: "0",//裁剪层的最小高度 默认：0

方法集合：
crop() 手动显示裁剪框
reset()—-将图像和裁剪框重置为初始状态
clear()—清除裁切框
replace(url)—替换图像的src并重新构建cropper
enable()—解锁，锁定的裁切框（与disable相对应）
disable()—锁定的裁切框（裁切框不可移动）（与enable相对应）
destroy()—销毁cropper并从图像中删除整个cropper。
move(offsetX[, offsetY])—使用相对偏移量移动图像(裁切框不移动)。
moveTo(x[, y])—-将画布(图像包装器)移动到一个绝对点
zoom(ratio)—放大图片，并使用相对比例。（裁切框不变化）
zoomTo(ratio)—-将画布(图像包装器)放大到一个绝对比例
rotate(degree)—旋转图像以一定的角度
rotateTo(degree)—旋转图像到固定的角度
scale(scaleX[, scaleY])—-翻转图像
scaleX(scaleX)—-缩放图像的横坐标
scaleY(scaleY)—-缩放图像的纵坐标
getData([rounded])—-输出最终裁剪的区域位置和大小数据(根据原始图像的自然大小）
setData(data)—用新数据改变裁切区域的位置和大小(以原始图像为基础)
getContainerData()—输出container 容器大小数据
getImageData()—-输出图像image位置、大小和其他相关数据
getCanvasData()—输出画布Canvas(图像包装器)位置和大小数据
setCanvasData(data)—：使用数据更改画布Canvas(图像包装器)位置和大小
getCropBoxData()—输出剪切框的位置和大小数据
setCropBoxData(data)—–改变剪切框的位置和大小数据
getCroppedCanvas([options])—画一张剪裁的图片。如果没有剪裁，则返回一个绘制整个画布
setAspectRatio(aspectRatio)—改变裁切框的宽高比
setDragMode([mode])—-设置拖拽模式（就是鼠标显示的是十字还是那种带箭头的十字

-->
