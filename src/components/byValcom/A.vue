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
  props: {
    value: "",
  },
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
  methods: {
    namClick() {
      this.num += 2;
      this.$emit("input", this.num);
    },
  },
};
</script>