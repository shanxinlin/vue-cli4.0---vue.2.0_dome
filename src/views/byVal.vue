<template>
  <div>
    <h3>传值的方式</h3>
    <br />
    <br />
    <br />
    <div>{{ Name }}</div>
    <Acom v-model="Name"></Acom>
  </div>
</template>

<script>
import Acom from '@/components/byValcom/A.vue'
export default {
  name: "byVal",
  components:{
      Acom
  },
  data() {
    return {
      Name: 1,
    };
  },
  beforeCreate() {
    console.log("父：beforeCreate");
  },
  created() {
    console.log("父：created");
  },
  beforeMount() {
    console.log("父：beforeMount");
  },
  mounted() {
    console.log("父：mounted");
  },
  methods: {
    namFn() {},
  },
};
</script>