<template>
  <div>
    <input type="file" @change="uploadImg" />
    <div
      style="
        width: 750px;
        height: 500px;
        margin: 20px;
        border: dashed #cacaca 1px;
        text-align: center;
      "
    >
      <img :src="cropperImg" style="max-width: 100%" ref="img" />
    </div>
  </div>
</template>

<script>
import Cropper from "cropperjs";
export default {
  name: "ImgCropper",
  data() {
    return {
      cropperImg: "",
      cropper: "",
      imgName: "",
    };
  },
  mounted() {
    this.initCropper();
  },
  methods: {
    initCropper() {
      let cropper = new Cropper(this.$refs.img, {
        viewMode: 1,
        aspectRatio: 16 / 9,
      });
      this.cropper = cropper;
    },
    uploadImg(event) {
      const file = event.target.files[0];
      this.cropperImg = URL.createObjectURL(file);
      this.imgName = file.name;
    },
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
}
</style>