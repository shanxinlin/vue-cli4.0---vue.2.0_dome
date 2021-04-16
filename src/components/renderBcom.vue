
<script>
import renderText from '@/components/renderText.vue'
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
