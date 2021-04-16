
<script>
export default {
  props: {
    tag: String
  },
  data() {
    return {
      people: ['clearlove', 'viper', 'meikou']
    }
  },
  render(createElement) {
    return createElement(this.tag, {}, this.people.map(name => createElement('li', {
      attrs: { class: 'text' },
      on: {
        click: () => {
          console.log(name)
        }
      }
    }, `非组件：${name}`)))
  }
}
</script>
