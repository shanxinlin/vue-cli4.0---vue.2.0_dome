<template>
  <div>
    <div>
      方法一：
      <input
        class="file"
        name="file"
        type="file"
        accept="image/png,image/gif,image/jpeg"
        @change="update"
      />
    </div>
    <div>
      方法二base64：
      <input
        ref="photoref"
        class="file"
        name="file"
        type="file"
        multiple
        accept="image/png,image/gif,image/jpeg"
        @change="Photograph"
      />
      <img :src="base64ImgData" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base64ImgData: "",
    };
  },
  methods: {
    update(e) {
      let file = e.target.files[0];
      let param = new FormData(); //创建form对象
      param.append("file", file); //通过append向form对象添加数据
      console.log(param.get("file")); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: { "Content-Type": "multipart/form-data" }, //这里是重点，需要和后台沟通好请求头，Content-Type不一定是这个值
      }; //添加请求头
      //   this.axios
      //     .post("http://127.0.0.1:8081/upload", param, config)
      //     .then((response) => {
      //       console.log(response.data);
      //     });
    },
    /**
     * 获取用户拍照的图片信息
     */
    async Photograph(e) {
        console.log(this.$refs.photoref.files)
      // 获取用户拍照的图片名字，显示到页面上
      let fileName = this.$refs.photoref.files[0].name;
      // 获取图片base64 代码，并存放到 base64ImgData 中
      this.base64ImgData = await this.FileReader(this.$refs.photoref.files[0]);
    },
    /**
     * 返回用户拍照图片的base64
     */
    FileReader(FileInfo) {
      // FileReader 方法参考地址：https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
      let reader = new FileReader();
      // readAsDataURL 方法参考地址：https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readAsDataURL
      reader.readAsDataURL(FileInfo);
      console.log(reader);
      // 监听读取操作结束
      /* eslint-disable */
      return new Promise(
        (resolve) => (reader.onloadend = () => resolve(reader.result))
      );
    },
  },
};
</script>