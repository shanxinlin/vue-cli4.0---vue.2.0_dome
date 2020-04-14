<template>
  <div>
    <div>
      <ul class="select-options">
        <li>
          <label>选择品牌</label>
          <el-select
            v-model="brand"
            @change="
              (type = null),
                (name = null),
                (ram = null),
                (color = null),
                (imei = null)
            "
          >
            <el-option
              v-for="(item, index) in product"
              :value="item.value"
              :label="item.label"
              :key="index"
              >{{ item.label }}</el-option
            >
          </el-select>
        </li>
        <li>
          <label>产品类型</label>
          <el-select
            v-model="type"
            @change="(name = null), (ram = null), (color = null), (imei = null)"
          >
            <el-option
              v-for="(item, index) in typeArray"
              :value="item.value"
              :label="item.label"
              :key="index"
              >{{ item.label }}</el-option
            >
          </el-select>
        </li>
        <li>
          <label>产品名称</label>
          <el-select
            v-model="name"
            @change="(ram = null), (color = null), (imei = null)"
          >
            <el-option
              v-for="(item, index) in nameArray"
              :value="item.value"
              :key="index"
              :label="item.label"
              >{{ item.label }}</el-option
            >
          </el-select>
        </li>
        <!-- <li>
          <label
            ><span><i>内</i><i>存</i></span></label
          >
          <select v-model="ram" @change="(color = null), (imei = null)">
            <option disabled="disabled" :value="null">请选择</option>
            <option v-for="(item, index) in ramArray" :value="index" :key="index">{{
              item.ram
            }}</option>
          </select>
        </li>
        <li>
          <label
            ><span><i>颜</i><i>色</i></span></label
          >
          <select v-model="color" @change="imei = null">
            <option disabled="disabled" :value="null">请选择</option>
            <option v-for="(item, index) in colorArray" :value="index" :key="index">{{
              item
            }}</option>
          </select>
        </li>
        <li v-show="imeiShow">
          <label @click="showImeiTip">IMEI码</label>
          <input type="text" v-model="imei" />
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imei: "",
      imeiMaskShow: false,
      cameraShow: false,
      brand: null,
      type: null,
      name: null,
      ram: null,
      color: null,
      error: null,
      submitFlag: true,
      product: [
        {
          label: "Apple",
          value: "0",
          children: [
            {
              label: "iPhone",
              value: "0",
              children: [
                {
                  label: "iPhone XS",
                  value: "0"
                }
              ]
            },
            {
              label: "iPad",
              value: "1",
              children: [
                {
                  label: "IPad Air 无线局域网机型",
                  value: "0"
                }
              ]
            }
          ]
        },
        {
          label: "Apple Beats",
          value: "1",
          children: [
            {
              label: "Beats 耳机",
              value: "0",
              children: [
                {
                  label: "Beats 头戴式耳机",
                  value: "0"
                }
              ]
            },
            {
              label: "Beats 音响",
              valueL: "1",
              children: [
                {
                  label: "Beats Pill+ 便携式蓝牙无线音箱",
                  value: "0"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    typeArray() {
      return this.brand !== null ? this.product[this.brand].children : null;
    },
    nameArray() {
      return this.type !== null ? this.typeArray[this.type].children : null;
    }
    // ramArray: function() {
    //   return this.name !== null && this.nameArray.length
    //     ? this.nameArray[this.name].ram
    //     : null;
    // },
    // colorArray: function() {
    //   return this.ram !== null && this.ramArray.length
    //     ? this.ramArray[this.ram].color
    //     : null;
    // },
    // imeiShow: function() {
    //   return this.brand === 0 && this.type === 0 ? true : false;
    // },
    // check: function() {
    //   this.error = null;
    //   switch (true) {
    //     case this.brand === null:
    //       this.error = "品牌";
    //       break;
    //     case this.type === null:
    //       this.error = "产品类型";
    //       break;
    //     case this.name === null:
    //       this.error = "产品名称";
    //       break;
    //     case this.ram === null:
    //       this.error = "内存";
    //       break;
    //     case this.color === null:
    //       this.error = "颜色";
    //       break;
    //     case this.imeiShow && !this.imei:
    //       this.error = "IMEI";
    //       break;
    //   }
    //   return this.error;
    // }
  },
  methods: {
    // showImeiTip: function() {
    //   this.imeiMaskShow = true;
    // },
    // closeImeiTip: function() {
    //   this.imeiMaskShow = false;
    // },
    // cancleCamera: function() {
    //   this.cameraShow = false;
    // },
    // useCamera: function() {
    //   this.cameraShow = true;
    // },
    // mergeObj: function(target, source) {
    //   for (var obj in source) {
    //     target[obj] = source[obj];
    //   }
    //   return target;
    // },
    // submit: function(callback) {
    //   if (this.check) {
    //     alert("请填写" + this.error + "信息");
    //     return false;
    //   }
    //   var data = {
    //     brand: this.product[this.brand].brand,
    //     type: this.typeArray[this.type].type,
    //     name: this.nameArray[this.name].name,
    //     memory: this.ramArray[this.ram].ram,
    //     color: this.colorArray[this.color]
    //   };
    //   data = this.imei ? this.mergeObj(data, { IMEI: this.imei }) : data;
    //   var that = this;
    //   alert("所选商品信息为:" + JSON.stringify(data));
    // if(that.submitFlag) {
    //     that.submitFlag = false
    //     $.ajax({
    //         url: path + 'abc/info',
    //         type: 'post',
    //         contentType: 'application/json;charset=utf-8',
    //         dataType: 'json',
    //         data:  JSON.stringify({'extendInfo':JSON.stringify(data)}),
    //         success: function (res) {
    //             if(res.status === 'SUCCESS') {
    //                 that.submitFlag = true;
    //                 callback && callback();
    //             } else {
    //                 alert.showWindowFun('录入信息失败')
    //             }
    //         },
    //         error: function (error) {
    //             that.submitFlag = true
    //             alert.showWindowFun('请求失败')
    //         }
    //     })
    //     that.submitFlag = false
    // }
    // }
  }
};
</script>
