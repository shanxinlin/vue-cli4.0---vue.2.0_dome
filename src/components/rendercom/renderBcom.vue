
<script>
import renderText from '@/components/rendercom/renderText.vue'
export default {
  render(createElement) {
    return createElement(renderText, {
      props: {
        msg: '哈默'
      }
    })
  }
}
</script>
