<template>
	<div class="container-water-fall">
		<div>
			<button @click="switchCol('5')">5列</button>
			<button @click="switchCol('8')">8列</button>
			<button @click="switchCol('10')">10列</button>
			col: {{col}} //默认显示3列
		</div>

		<waterfall :col="col" :width="itemWidth" :gutterWidth="gutterWidth" :data="data" @loadmore="loadmore" @scroll="scroll">
			<template>
				<div class="cell-item" v-for="(item, index) in data" :key="index">
					<img v-if="item.img" :src="item.img" alt="加载错误" />
					<!-- lazy-src 懒加载 -->
					<!-- <img v-if="item.img" :lazy-src="item.img" alt="加载错误"  />  -->
					<div class="item-body">
						<div class="item-desc">{{ index }}</div>
						<div class="item-footer">
							<div class="avatar" :style="item.style"></div>
							<div class="name">4444</div>
							<div class="like"></div>
						</div>
					</div>
				</div>
			</template>
		</waterfall>
	</div>
</template>

<!--  注意:
  1.gutterWidth需要与width一起使用才会生效，否则会进行自适应宽度(使用rem布局时，需先计算出自适应后的宽度再传值)
  2.使用了waterfall的组件不允许使用scoped,否则样式会有问题
  3.懒加载需要用lazy-src替换<img>的src属性 -->
<script>
export default {
	data() {
		return {
			data: [
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/4de1c5cc-0168-4604-a268-ce9eb1cfe33c.png?x-oss-process=style/small'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/4de1c5cc-0168-4604-a268-ce9eb1cfe33c.png?x-oss-process=style/small'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				},
				{
					style: { background: 'rgba(21,174,103,.5)' },
					width: 360,
					height: 400,
					img: 'http://posts-pic.oss-cn-beijing.aliyuncs.com/3153d631-a65a-4ffa-a4e2-ec0e8d77423b.jpeg?x-oss-process=style/hd'
				}
			],
			col: 3 //默认显示列数
		};
	},
	mounted() {
		// this.$waterfall.forceUpdate()   //forceUpdate
	},
	computed: {
		itemWidth() {
			return 60 * 0.5 * (document.documentElement.clientWidth / 375); //#rem布局 计算宽度
		},
		gutterWidth() {
			return 9 * 0.5 * (document.documentElement.clientWidth / 375); //#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
		}
	},
	methods: {
		scroll(scrollData) {
			console.log(scrollData);
		},
		switchCol(col) {
			this.col = col * 1;
			// console.log(this.col*1);
		},
		loadmore() {
			//滚动到底部触发
			console.log('到底部了');
			this.data = this.data.concat(this.data);
		}
	}
};
</script>
<style>
.container-water-fall {
	margin: 0 16px;
}
.cell-item img {
	width: 100%;
}
</style>
