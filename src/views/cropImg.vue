<template>
  <div>
    <div style="height:250px;">
      <h3>之前图片裁切</h3>
      <cropimgOld></cropimgOld>
    </div>
    <div>
      <h3>最新图片裁切</h3>
      <cropImg></cropImg>
    </div>
  </div>
</template>
<script>
import cropimgOld from "@/components/cropimgcom/cropimgOld.vue";
import cropImg from "@/components/cropimgcom/cropimg.vue";
export default {
  components: {
    cropimgOld,
    cropImg,
  },
  data() {
    return {};
  },
};
</script>