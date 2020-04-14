<template>
  <div>
      层及联动
      <threeLink ref="threeLink"></threeLink><el-button @click="btn()">获取层级数据</el-button>
  </div>
</template>

<script>
import threeLink from "@/components/linkagecom/threeLinkage.vue"
export default {
    components:{
        threeLink
    },
    methods:{
        btn(){
            console.log(this.$refs.threeLink.brand)
        }
    }
}
</script>