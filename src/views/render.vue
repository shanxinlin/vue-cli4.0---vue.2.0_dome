<template>
  <div>
    <div>什么是render</div>
    <renderAcom tag="ul" />
    <renderBcom></renderBcom>
  </div>
</template>
<script>
import renderAcom from '@/components/rendercom/renderAcom.vue'
import renderBcom from '@/components/rendercom/renderBcom.vue'
export default {
  components: {
    renderAcom,
    renderBcom
  }
}
</script>
