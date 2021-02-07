<style lang="less" scoped></style>

<template>
	<div id="wrap">
		<div ref="echarts" :style="{ height: height + 'px' }"></div>
		<!-- <div :id="echarts" :style="{height: '300px'}"></div> -->
		<!-- html页面可以用id的方式 -->
	</div>
</template>
<script>
import echarts from 'echarts';
export default {
	// props:["echartData"],
	props: {
		xAxisdata: {
			//x轴标题名
			type: Array,
			default: () => []
		},
		legendshow: {
			//是否显示标志
			type: Boolean,
			default: true
		},
		legendtextarr: {
			//标志名
			type: Array,
			default: () => []
		},
		listscore: {
			//对应的数据  '[[11, 33, 23, 56, 11, 33, 23, 56],[11, 33, 23, 56, 11, 33, 23, 56]]'
			type: Array,
			default: () => []
		},
		height: {
			//图表的高度
			type: String,
			default: '300'
		},
		barCategoryGap: {
			//类目内的柱形之间的间距
			type: String,
			default: '80%'
		},
		ytitle: {
			//纵坐标标题
			type: String,
			default: ''
		},
		hovershow: {
			//是否显示hover提示
			type: Boolean,
			default: true
		}
	},
	data() {
		return {};
	},
	mounted() {
		const that = this;
		that.$nextTick(() => {
			that.drawLine();
		});
	},
	computed: {
		// echarts() {  //每次获取不同的id
		//     return 'echarts' + Math.random()*100000
		// }
	},
	watch: {
		listscore: {
			//监听父组件传过来的值的
			//             immediate: true,
			//             deep: true,
			handler(newVal) {
				this.$nextTick(() => {
					this.listscore = newVal;
					this.drawLine();
				});
			}
		}
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
			// 绘制柱状图、折线图表
			let option = {
				title: {
					//标题设置
					show: true, //是否显示标题
					text: '', //大标题
					// subtext: '纯属虚构',  //小标题
					left: '30',
					top: '10',
					textStyle: {
						color: '#ccc', //文字颜色
						fontStyle: 'normal', //字体风格,'normal','italic','oblique'
						fontWeight: 'bold', //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
						fontFamily: 'sans-serif', //字体系列
						fontSize: 14 //字体大小
					}
				},
				series: [], //多组数据
				legend: {
					//标识设置
					// icon: 'square', //标识样式
					show: this.legendshow, //是否显示标识
					itemWidth: 12,
					itemHeight: 12,
					itemGap: 10,
					data: this.legendtextarr,
					left: 'center',
					bottom: '0',
					width: '100%',
					textStyle: {
						color: '#999',
						fontSize: '12'
					}
				},
				tooltip: {
					//hover提示设置
					show: this.hovershow, //是否显示hover提示
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
					}
				},
				color: ['#24DAB0', '#F83656', '#8470FF', '#FFB55D'], //柱形图块的颜色(多个柱形图可多个添加)
				dataZoom: [
					//x轴滚动条设置
					{
						show: false, //是否显示滚动条
						realtime: false, //是否禁止左右滑动
						// startValue: 0, //窗口固定
						// endValue: 4,  //显示4组数据
						type: 'slider', //inside 滚动条区域缩放 slider图形缩放
						zoomOnMouseWheel: true, //鼠标滚轮是否能触发平移
						preventDefaultMouseMove: false //是否阻止 mousemove 事件的默认行为。
					}
				],
				grid: {
					//图形位置设置
					top: '10%', //距上边距
					left: '3%', //距离左边距
					right: '0%', //距离右边距
					bottom: '15%', //距离下边距
					borderWidth: '0' //去除边框线
				},
				calculable: true,
				xAxis: [
					{
						//X轴设置
						show: true,
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
							show: false,
							//设置坐标轴字体颜色和宽度
							lineStyle: {
								color: '#9e9e9e',
								width: 1
							}
						}
					}
				],
				yAxis: [
					{
						//Y轴设置
						show: true,
						type: 'value',
						name: this.ytitle,
						offset: 0,
						axisTick: {
							//隐藏刻度
							show: false
						},
						splitLine: {
							show: true, // 网格线是否显示
							//  改变样式
							lineStyle: {
								color: '#dbdbdb' // 修改网格线颜色
							}
						},
						axisLine: {
							//设置坐标轴字体颜色和宽度
							show: true,
							lineStyle: {
								color: '#9e9e9e',
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
						}
					}
				]
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
					barCategoryGap: this.barCategoryGap //类目内的柱形之间的间距
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

			// myChart.on('click', function (params) {  //点击事件1
			// 	console.log(params);
			// });
		}
	}
};
</script>
