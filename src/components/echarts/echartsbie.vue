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
			//标题名
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
			//对应的数据
			type: Array,
			default: () => []
		},
		height: {
			//图表的高度
			type: String,
			default: '300'
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
					text: '某站点用户访问来源', //大标题
					subtext: '纯属虚构', //小标题
					x: 'left',
					textStyle: {
						color: '#999', //文字颜色
						fontStyle: 'normal', //字体风格,'normal','italic','oblique'
						fontWeight: 'bold', //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
						fontFamily: 'sans-serif', //字体系列
						fontSize: 14 //字体大小
					}
				},
				tooltip: {
					show: this.hovershow, //是否显示hover提示
					trigger: 'item',
					formatter: '{a} <br/>{b} : {c} ({d}%)'
				},
				stillShowZeroSum: false,
				color: ['#24DAB0', '#1A88FB', '#8470FF', '#CD5C5C', '#00CED1', '#9ACD32', '#FFC0CB', '#5cadff', '#19be6b', '#ff9900', '#2db7f5', '#ed4014'],
				legend: {
					//标志设置
					orient: 'vertical', //vertical horizontal
					icon: 'circle',
					show: this.legendshow, //是否显示标识
					// itemWidth: 10,
					// itemHeight: 30,
					// itemGap: 10, // 每项之间的间隔
					data: this.xAxisdata,
					right: 'right',
					textStyle: {
						color: '#999',
						fontSize: '12'
					}
				},
				series: [
					{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: this.listscore,
						label: {
							normal: {
								show: true,
								formatter: '{b}' + '\n' + '{c}' + '({d}%)'
							}
						},
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(128, 128, 128, 0.5)'
							}
						}
					}
				]
			};
			myChart.setOption(option, true);
			//每一个echarts图形自适应页面
			window.addEventListener('resize', function() {
				myChart.resize();
			});

			myChart.on('click', function(params) {
				//点击事件
				// console.log(params);
				that.$emit('bieclick', params);
			});

			myChart.on('mouseover', function(params) {
				//移动事件
				// console.log(params);
				that.$emit('biemouseover', params);
			});
		}
	}
};
</script>
