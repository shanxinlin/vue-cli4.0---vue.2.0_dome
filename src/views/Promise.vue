<template>
  <div class="Promise">
    <h3>Promise</h3>
    <div>
      Promise.race: <promiseImg/>
    </div>
    <div>
      Promise手写: <promiseText/>
    </div>
  </div>
</template>

<script>
import promiseImg from "@/components/promisecom/promiseImg"
import promiseText from "@/components/promisecom/promiseText"
export default {
  name: "Promise",
  data() {
    return {};
  },
  components:{
    promiseImg,
    promiseText
  },
  created() {
    // let arrpro = [];
    // for (let i = 0; i < 3; i++) {
    //   arrpro.push(this.fn1(i));
    // }
    // Promise.all(arrpro)
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  mounted() {
    // this.fnAll();     // async、await 与 Promise 同步的使用方法
  },
  methods: {
    async fnAll() {
      let fn0 = await this.fn0();
      let fn1 = await this.fn1(10);
      let fn2 = await this.fn2(10);
      setTimeout(function() {
        console.log(fn0, fn1, fn2, "all");
      }, 1000);
    },
    fn0() {
      return new Promise(() => {
        // console.log(0);
        throw new Error("rejected");
      }).catch(() => {
        return "fn0错误";
      });
    },
    fn1(num) {
      return new Promise(resolve => {
        setTimeout(function() {
          console.log(1);
          resolve(1 * num);
        }, 2000);
      });
    },
    fn2(num) {
      return new Promise(resolve => {
        setTimeout(function() {
          console.log(2);
          resolve(2 * num);
        }, 1000);
      });
    }
  }
};
</script>
