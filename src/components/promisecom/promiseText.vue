<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    }
  },
  mounted() {
    let FN = new Promise(resolve => {
      setTimeout(function() {
        console.log('3:   ')
        resolve(2);
      }, 1000);
    });
    console.log('1:  ', FN)
    FN.then((res) => {
      console.log('5:   ', res)
    })

    function Promise(fn) {
      console.log('0:    ', fn)
      var value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调
      this.then = function(onFulfilled) {
        console.log('2:   ', onFulfilled)
        callbacks.push(onFulfilled);
      };
      function resolve(value) {
        console.log('4:   ', value)
        callbacks.forEach(function(callback) {
          callback(value);
        });
        console.log('6:', value)
      }
      fn(resolve)
      console.log('0.5:  ')
    }
  },
  methods: {
  }
}
</script>
