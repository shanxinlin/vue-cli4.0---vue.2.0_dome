<!--
 * @Author: shanxinlin
 * @Date: 2021-02-05 11:52:44
 * @LastEditTime: 2021-02-07 18:01:14
 * @LastEditors: shanxinlin
 * @Description: 
 * @FilePath: \ISALESCMMUI\packages\portal-cmm\src\components\componentsDemo\echartModule\echartBarModule.vue
 * @
-->
<template>
  <div id="wrap">
    <div ref="echarts" :style="{'height': height, 'width': width}"></div>
    <!-- <div :id="echarts" :style="{height: '300px'}"></div> -->
    <!-- html页面可以用id的方式 -->
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  props: {
    // echart 高度
    height: {
      type: String,
      default: '300px'
    },
    // echart 宽度
    width: {
      type: String,
      default: '800px'
    },
    //x轴标题名
    xAxisdata: {
      type: Array,
      default: () => []
    },
    //纵坐标标题
    ytitle: {
      type: String,
      default: 'Y轴'
		},
		//纵坐标标题
    xtitle: {
      type: String,
      default: 'X轴'
		},
    //标志名
    legendtextarr: {
      type: Array,
      default: () => []
    },
    /**
     * @description: 对应每个标志名的数据
		 * @example:'[[11, 33, 23, 56, 11, 33, 23, 56],[11, 33, 23, 56, 11, 33, 23, 56]]'
     * @param {*} Array<(Array<Number | String>)>
     */
    listscore: {
      type: Array,
      default: () => []
    },
    // 所有配置项，可参考echart官网配置即可  官网地址：http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/option.html
    setOption: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine();
    });
  },
  methods: {
    drawLine() {
      let that = this,
        myChart;
      // 基于准备好的dom，初始化echarts实例
      if (!this.myChart) {
        myChart = echarts.init(this.$refs.echarts, null, { renderer: 'canvas' }); //这种方法可以不需要标签id
        // myChart = echarts.init(document.getElementById("echarts"),null,{renderer:'svg'})
      }
      // 所有配置项
      let option = {
        //标题设置
        title: {
          show: false, //是否显示标题
          text: '', //大标题
          // subtext: '纯属虚构',  //小标题
          left: '20%',
          top: '0',
          textStyle: {
            color: '#999', //文字颜色
            fontStyle: 'normal', //字体风格,'normal','italic','oblique'
            fontWeight: 'bold', //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontFamily: 'sans-serif', //字体系列
            fontSize: 14 //字体大小
          },
          ...this.setOption.title
        },
        //标识设置
        legend: {
          // icon: 'square', //标识样式
          show: true, //是否显示标识
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 10,
          data: this.legendtextarr,
          left: 'center',
          top: '0',
          width: '100%',
          textStyle: {
            color: '#999',
            fontSize: '12'
          },
          ...this.setOption.legend
        },
        //hover提示设置
        tooltip: {
          show: true, //是否显示hover提示
          trigger: 'axis',
          triggerOn: 'click',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter(params) {
            //重写hover提示
            // console.log(params[0])
            that.$emit('barclick', params[0]);
            var htmlStr = '<div style="z-index:20">';
            htmlStr += params[0].name + '<br/>'; //x轴的名称
            for (var i = 0; i < params.length; i++) {
              var color = params[i].color; //图例颜色
              //为了保证和原来的效果一样，这里实现了一个点的效果
              htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>';
              //添加一个汉字，这里你可以格式你的数字或者自定义文本内容
              htmlStr += params[i].seriesName + '：' + params[i].value + that.ytitle + '<br/>';
            }
            //添加以外的提示
            // if(that.echartData.listHtml){
            //     let _html =  that.echartData.listHtml;
            //     let arrindexa = _html[params[0].dataIndex]
            //     for(let i=0; i<arrindexa.length; i++){
            //         htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:#eee;"></span>';
            //         htmlStr += arrindexa[i].name + '：'+arrindexa[i].bfb + '' + '<br/>';
            //     }
            // }
            htmlStr += '</div>';
            return htmlStr;
          },
          ...this.setOption.tooltip
				},
				//柱形图块的颜色(多个柱形图可多个添加)
        color: ['#1890ff', '#F83656', '#8470FF', '#FFB55D'], 
        //x轴滚动条设置
        dataZoom: [
          {
            type: 'slider', //inside 滚动条区域缩放 slider图形缩放
            show: true, //是否显示滚动条
            backgroundColor: '#eee', // 滚动条背景色
            showDataShadow: false, //是否显示数据阴影可以简单地反应数据走势
            showDetail: false,  //即拖拽时候是否显示详细数值信息
            zoomLock: true, // 锁定滚动条 不缩放
            fillerColor: '#999', // 选中范围的填充颜色
            handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
            handleColor: '#999', // h滑动图标的颜色
            handleStyle: { // h滑块图标隐藏
              opacity: 0
            },
            startValue: 0, // 数据窗口范围的起始数值
            endValue: 3,  // 数据窗口范围的结束数值
						height: 8,   // 滚动条高度
						bottom: 0,
            ...this.setOption.dataZoom
          }
        ],
				//图形位置设置
        grid: {
          top: '50', //距上边距
          left: '50', //距离左边距
          right: '50', //距离右边距
          bottom: '50', //距离下边距
          ...this.setOption.grid
        },
				//X轴设置
        xAxis: {
					show: true,
					name: this.xtitle || '',
          axisTick: { show: true },
          type: 'category',
          splitLine: { show: false }, //去除网格线
          data: this.xAxisdata || [],
          axisLabel: {
            // interval: 0,   //横向信息全部显示
            textStyle: {
              color: '#9e9e9e', //坐标轴字的颜色
              fontSize: 10
            }
          },
          axisLine: {
            show: true,
            //设置坐标轴字体颜色和宽度
            lineStyle: {
              color: '#999',
              width: 1
            }
          },
          ...this.setOption.xAxis
        },
				//Y轴设置
        yAxis: {
          type: 'value',
          name: this.ytitle,
          offset: 0,
          axisTick: {
            // 隐藏刻度
            show: false
          },
          splitLine: {
            // 改变样式
            lineStyle: {
              color: '#dbdbdb' // 修改网格线颜色
            }
          },
          axisLine: {
            //设置坐标轴字体颜色和宽度
            show: true,
            lineStyle: {
              color: '#999',
							width: 1
						}
          },
          axisLabel: {
            interval: 'auto', //间隔显示
            rotate: 0, //字体倾斜
            show: true,
            textStyle: {
              color: '#9e9e9e',
              fontSize: 10 //坐标轴字的颜色
            },
            //y轴加单位
            // formatter: '{value}',
            formatter: function(value) {
              if (value >= 10000 && value < 10000000) {
                value = value / 10000 + '万';
              } else if (value >= 10000000) {
                value = value / 10000000 + '千万';
              }
              return value;
            }
          },
          ...this.setOption.yAxis
				},
				//多组数据
        series: [] 
      };
      var series = [];
      for (var i = 0; i < this.legendtextarr.length; i++) {
        series.push({
          name: this.legendtextarr[i],
          type: 'bar',
          data: this.listscore[i] || [],
          smooth: true,
          itemStyle: {
            //顶部字体设置
            normal: {
              // color:'pink',
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'bold',
                  color: 'skyblue'
                }
              }
            }
          },
          stack: false, //是否为叠状柱形图
          barCategoryGap: '80%' //类目内的柱形之间的间距
          // barGap:100,
          // barWidth : 30,//柱图宽度
          // barMaxWidth: 40,//最大宽度
        });
      }
      option.series = series;
      myChart.setOption(option, true);
      //每一个echarts图形自适应页面
      window.addEventListener('resize', function() {
        myChart.resize();
      });

      // myChart.on('click', function (params) {  //点击事件
      // 	console.log(params);
      // });
    }
  }
};
</script>
