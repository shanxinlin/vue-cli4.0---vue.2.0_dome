<template>
  <div class="animate">
    <div class="mt-20">
      <h3>引入animated</h3>
      <button @click="animatedShow = !animatedShow">Toggle animated</button>
      <transition
        name="custom-classes-transition"
        :duration="{ enter: 600, leave: 3000 }"
        enter-active-class="animated jackInTheBox"
        leave-active-class="animated hinge"
      >
        <p v-if="animatedShow" class="c-eee bg-25172140 w100 h100 m-auto">
          hello
        </p>
      </transition>
    </div>
    <div class="mt-20">
      <h3>放大</h3>
      <button @click="bigShow = !bigShow">toggle big</button>
      <transition name="big">
        <p v-if="bigShow" class="c-eee bg-25172140 w100 h100 m-auto">
          放大
        </p>
      </transition>
    </div>
    <div class="mt-20">
      <h3>左侧边栏</h3>
      <button @click="leftShow = !leftShow">toggle left</button>
      <transition name="left">
        <p v-if="leftShow" class="c-eee bg-25172140 w100 h100">
          左侧边栏
        </p>
      </transition>
    </div>
    <div class="mt-20">
      <h3>右侧边栏</h3>
      <button @click="rightShow = !rightShow">toggle right</button>
      <transition name="right">
        <div v-if="rightShow" class="overhidden">
          <p class="c-eee bg-25172140 w100 h100 fr">
            右侧边栏
          </p>
        </div>
      </transition>
    </div>
    <div class="mt-20">
      <h3>隐现过渡</h3>
      <transition name="fade" mode="out-in">
        <!-- in-out -->
        <button v-if="fadeShow" @click="fadeShow = !fadeShow" key="in">
          toggle fade-in
        </button>
        <button v-else @click="fadeShow = !fadeShow" key="out">
          toggle fade-out
        </button>
      </transition>
    </div>
    <div
      class="c-eee bg-666 mt-20 wow fadeInLeft"
      data-wow-duration="1s"
      data-wow-delay="0s"
    >
      wow
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  data() {
    return {
      animatedShow: true,
      bigShow: true,
      leftShow: true,
      rightShow: true,
      fadeShow: true
    };
  },
  mounted() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true
    });
    wow.init();
  }
};
</script>
<style lang="less" scoped>
// 放大
.big-enter-active {
  animation: big-in 0.5s;
}
.big-leave-active {
  animation: big-in 0.5s reverse;
}
@keyframes big-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

//左侧
.left-enter-active {
  animation: left-in 0.3s;
}
.left-leave-active {
  animation: left-in 0.3s reverse;
}
@keyframes left-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

//右侧
.right-enter-active {
  animation: right-in 0.3s;
}
.right-leave-active {
  animation: right-in 0.3s reverse;
}
@keyframes right-in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
