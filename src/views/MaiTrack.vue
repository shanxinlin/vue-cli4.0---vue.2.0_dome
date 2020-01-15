<template>
	<div class="MaiTrack">
		<!-- 页面行为埋点（track-view为v-track全局注册的组件） -->
		<!-- <track-view v-track:18015></track-view>
		<track-view v-track:18015.watch="{ result }"></track-view>
		<track-view v-track:18015.watch.delay="{ result }"></track-view>
		<track-view v-if="result" v-track:18015></track-view> -->
		
		<!-- 事件行为埋点（DOM） -->
		<div v-track:18015.click="handleClick">发斯蒂芬</div>
		<div class="track-button" v-track:18016.click="{ handleClickWithParam, item }">click me</div>
		<!-- <div v-track:18015.click="{ handleClick, item, index }"></div> -->
		<!-- <div v-track:18015.click.async="{ handleSearch, rest }"></div> -->
		<!-- <div v-track:18015.click.delay="handleClick"></div> -->
		
		<!-- 事件行为埋点（组件） -->
		<!-- <cmp v-track:18015.click="handleClick"></cmp>
		<cmp v-track:18015.[自定义事件名]="handleSearch"></cmp>
		<cmp v-track:18015.[自定义事件名].delay="handleSearch"></cmp>
		<cmp v-track:18015.[自定义事件名].async="{ handleSearch, rest }"></cmp> -->
		
		<!-- 区域展现埋点（block 可以是 DOM 或者组件） -->
		<!-- <block v-track:18015.show></block>
		<block v-track:18015.show.once></block>
		<block v-track:18015.show.custom="{ ref: 'scroll' }"></block>
		<block v-track:18015.show.custom.once="{ ref: 'scroll' }"></block> -->
	</div>
</template>

<script>

// 埋点
export default {
	name: 'MaiTrack',
	components: {
		
	},
	data() {
		return {
			item: {
			  id: Date.now().toString(36)
			},
			index: 0,
			rest: null
		};
	},
	mounted() {
		// console.log(this.VTrack)
	},
	methods: {
		handleClick() {
		  this.$message.success("事件执行成功");
		},
		handleNativeEvent() {
		  this.$message.success("组件原生事件执行成功");
		},
		handleClickWithParam(item, { target }) {
			console.log(JSON.stringify(item),target)
		  this.$message.success(
		    `事件执行成功，参数为${JSON.stringify(item)}--${target}`
		  );
		},
		handleClickDelay() {
		  this.index++;
		},
		async handleClickAsync() {
		  const response = await new Promise(resolve => {
		    setTimeout(() => {
		      resolve({ data: "success" });
		    }, 300);
		  });
		
		  if (this.rest === response.data) {
		    this.$message.success(
		      "异步事件返回成功，但返回结果和上一次相等，埋点不会上报"
		    );
		  } else {
		    this.rest = response.data;
		    this.$message.success("异步事件返回成功");
		  }
		}
	}
};
</script>
