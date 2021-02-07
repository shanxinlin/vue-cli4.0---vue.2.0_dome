<template>
	<div class="Echart">
		<button @click="btnchange">改变数据</button>
		<div>
			<EchartsBar
				:xAxisdata="['年龄', '数学', '语文', '体育', '英语', '政治', '历史', '地理']"
          			:legendtextarr="['男孩','女孩']"
          			:listscore="[[11, 323, 23, 566, 111, 33, 223, 25],[11, 323, 23, 366, 111, 33, 223, 25]]"
			></EchartsBar>
		</div>
		<div>
			<EchartsBie
				:xAxisdata="['录入意向供应商', '招标/询比价前准备', '技术打分', '商务定价', '合同']"
				:legendtextarr="['个数']"
				:listscore="[
					{ value: 335, name: '录入意向供应商' },
					{ value: 310, name: '招标/询比价前准备' },
					{ value: 234, name: '技术打分' },
					{ value: 135, name: '商务定价' },
					{ value: 135, name: '合同' }
				]"
				:legendshow="false"
			></EchartsBie>
		</div>
	</div>
</template>

<script>
import EchartsBar from '@/components/echarts/echartsbar'; //柱状图组件
import EchartsBie from '@/components/echarts/echartsbie' //饼状图组件
export default {
	name: 'home',
	components: {
		EchartsBar,EchartsBie
	},
	data(){
		return{
			barListscore:[[11, 33, 23, 56, 11, 33, 23, 5]],
		}
	},
	mounted() {},
	methods:{
		btnchange(){
			this.barListscore = [[110, 330, 23, 56, 11, 33, 23, 5]]
		}
	}
	
};
</script>
