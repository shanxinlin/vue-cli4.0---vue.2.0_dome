<template>
  <div>
    <button @click="namClick()">{{ value }}</button>
  </div>
</template>

<script>
export default {
  name: "A",
  //   model: {
  //     prop: "value",
  //     event: "changeb",
  //   },
  props: ['value'],
  inject: ['kuaji'],
  data() {
    return {
      num: 1,
    };
  },
  watch: {
    value(val) {
      console.log(val);
      this.value = val;
    },
  },
  mounted() {
    console.log('跨级通信：', this.kuaji)
    console.log('获取父级数据', this.$parent);
  },
  methods: {
    namClick() {
      this.num += 2;
      this.$emit("input", this.num);
    },
  },
};
</script>
