<template>
  <div>
    <button @click="byArr[0] = '0'">改变传参</button>
    <div>1.改变数组数据变化：{{byArr}}</div>
    <button @click="byArrObj[0].obj = '0'">改变传参</button>
    <div>2.改变数组数据变化：{{byArrObj}}</div>
    <div>
      <div>3.改变数组数据变化：</div>
      <div v-for="(item, index) in valnewArr" :key="index" @click="changeFn(item)">{{item.age}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    valArr: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      num: 1,
      byArr: ['1', '2', '3'],
      byArrObj: [{ obj: '1' }],
      valnewArr: []
    };
  },
  watch: {

  },
  created() {
    this.valnewArr = this.comDeepClone(this.valArr)
    console.log(this.valnewArr, this.valArr);
  },
  mounted() {

  },
  methods: {
    changeFn(item) {
      item.age = 100
      console.log(this.valnewArr, this.valArr);
    }
  },
};
</script>
