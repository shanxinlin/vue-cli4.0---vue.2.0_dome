//vue 扩展方法
export default {
  install(Vue) {
    //对象清空
    Vue.prototype.resetForms = obj => {
      for (let key in obj) {
        obj[key] = "";
      }
      return obj;
    };

    //获取滚动条当前的位置
    Vue.prototype.getScrollTop = (scrollH = document.documentElement) => {
      return scrollH.scrollTop || 0;
    };

    //获取当前可视范围的高度
    Vue.prototype.getInnerHeight = (windowH = document.body) => {
      return windowH.clientHeight || 0;
    };

    //获取文档完整的高度
    Vue.prototype.getOffsetHeight = (offsetH = document.body) => {
      return offsetH.scrollHeight || 0;
    };

    //数字转百分比保留n小数
    Vue.prototype.percent = (point, n) => {
      //point数值 n保留几位小数(都为number)
      return Math.round(point * 100 * Math.pow(10, n)) / Math.pow(10, n) + "%";
    };

    //数字保留n小数
    Vue.prototype.decimals = (num, n) => {
      //num数值 n保留几位小数(都为number)
      return Math.round(num * Math.pow(10, n)) / Math.pow(10, n);
    };

    // 毫秒转换时间对象
    Vue.prototype.getFormatterTime = (ms, type) => {
      //毫秒数  日期格式类型type：YYYY-MM-DD hh:mm:ss  YYYY-MM-DD  obj
      function number(num) {
        return num >= 10 ? num : "0" + num;
      }
      let date = new Date(ms);
      let obj = {
        Y: date.getFullYear(),
        M: number(date.getMonth() + 1),
        D: number(date.getDate()),
        h: number(date.getHours()),
        m: number(date.getMinutes()),
        s: number(date.getSeconds())
      };
      if (type == "YYYY-MM-DD hh:mm:ss") {
        return `${obj.Y}-${obj.M}-${obj.D} ${obj.h}:${obj.m}:${obj.s}`;
      } else if (type == "YYYY-MM-DD") {
        return `${obj.Y}-${obj.M}-${obj.D}`;
      } else if (type == "obj") {
        return obj;
      } else {
        return `${obj.Y}-${obj.M}-${obj.D}`;
      }
    };

    // 获取当前时间
    Vue.prototype.getFormathms = () => {
      function number(num) {
        return num >= 10 ? num : "0" + num;
      }
      let date = new Date();
      let obj = {
        Y: date.getFullYear(),
        M: number(date.getMonth() + 1),
        D: number(date.getDate()),
        h: number(date.getHours()),
        m: number(date.getMinutes()),
        s: number(date.getSeconds())
      };
      return obj;
    };

    //禁止页面滑动
    Vue.prototype.stopScroll = function() {
      var mo = function(e) {
        false;
      };
      document.body.style.cssText =
        "overflow: hidden;position: fixed;width: 100%;height: 100%;";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    };
    //取消滚动限制
    Vue.prototype.moveScroll = function() {
      var mo = function(e) {
        false;
      };
      document.body.style.cssText = "overflow: '';position: ''"; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    };

    /**
     * 获取字符串汉字字节数 1个汉字=3个字节
     */
    Vue.prototype.getChineseBytes = function(text) {
      let chinese = text.match(/[\u4e00-\u9fa5]/g);
      chinese = chinese ? chinese.length : 0;
      return chinese * 3;
    };

    /**
     * 获取字符串字母数字字节数 1个汉字=3个字节
     */
    Vue.prototype.getLetterBytes = function(text) {
      let letterAndNumber = text.match(/[^\u4e00-\u9fa5]/g);
      letterAndNumber = letterAndNumber ? letterAndNumber.length : 0;
      return letterAndNumber;
    };

    /**
     * 计算字符串字节数 1个汉字=3个字节；1个英文字母或数字=1个字节
     */
    Vue.prototype.getBytes = function(text) {
      let chinese = text.match(/[\u4e00-\u9fa5]/g);
      let letterAndNumber = text.match(/[^\u4e00-\u9fa5]/g);
      chinese = chinese ? chinese.length : 0;
      letterAndNumber = letterAndNumber ? letterAndNumber.length : 0;
      return chinese * 3 + letterAndNumber;
    };

    /**
     * URI反序列化
     */
    Vue.prototype.decode = function(text) {
      if (!text) return "";
      text = text.replace(/%(?![0-9a-zA-z]{2})/g, "%25");
      return decodeURIComponent(text);
    };

    /**
     * URI反序列化
     */
    Vue.prototype.backToPosition = function(backPosition, interval) {
      const start = window.pageYOffset;
      let i = 0;
      interval = setInterval(() => {
        const next = Math.floor(easeInOutQuad(10 * i, start, -start, 500));
        if (next <= backPosition) {
          window.scrollTo(0, backPosition);
          clearInterval(interval);
        } else {
          window.scrollTo(0, next);
        }
        i++;
      }, 5);
    };

    /**
     * @description: 定义一个深拷贝函数
     * @param {any} target
     * @return {any}
     */
    Vue.prototype.comDeepClone = (target) => {
      function deepcloenFn(target) {
        let result
        if (typeof target === 'object') {
          if (Array.isArray(target)) {
            result = []
            for (const i in target) {
              result.push(deepcloenFn(target[i]))
            }
          } else if (target === null) {
            result = null
          } else if (target.constructor === RegExp) {
            result = target
          } else {
            result = {}
            for (const i in target) {
              result[i] = deepcloenFn(target[i])
            }
          }
        } else {
          result = target
        }
        return result
      }
      return deepcloenFn(target)
    }
  }
};
