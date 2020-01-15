<template>
	<div class="about">
		<h1 @click="shu()">swiper</h1>
		<div>
			<swiper :options="swiperOption">
				<swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">我是第{{ item }}个轮播图</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
				<!-- 分页 -->
				<div class="swiper-button-prev" slot="button-prev"></div>
				<!-- 箭头左 -->
				<div class="swiper-button-next" slot="button-next"></div>
				<!-- 箭头右 -->
			</swiper>
		</div>
	</div>
</template>
<script>
export default {
	name: 'About',
	data() {
		return {
			slide: [1, 2, 3, 4, 5],
			//设置属性
			swiperOption: {
				//显示分页
				pagination: {
					el: '.swiper-pagination',
					clickable: true //允许分页点击跳转
				},
				//设置点击箭头
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				slidesPerView: 1, //这个表示父盒子的宽度放下几个子盒子slide
				spaceBetween: 20, //表示子盒子与子盒子之间的距离（slide之间的距离）
				initialSlide: 0, //设定初始化时slide的索引
				// autoplay: {
				// 	//自动轮播
				// 	delay: 500,
				// 	stopOnLastSlide: false,
				// 	disableOnInteraction: false // 触摸滑动后是否继续轮播 
				// },
				observer:true,//修改swiper自己或子元素时，自动初始化swiper 
				observeParents:true,//修改swiper的父元素时，自动初始化swiper 
				// onSlideChangeEnd: function(swiper){ 
				// 		swiper.update(); //swiper更新
				// } ,
				loop: true, //开启无限循环
				//开启鼠标滚轮控制Swiper切换
				mousewheel: true,
				on: {
					slideChangeTransitionStart: function() {
						console.log(this.realIndex + 1); //获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
					}
				}
			}
		};
	},
	created() {
		// this.swiperOption.autoplay = this.slide.length != 1
		// 		? {
		// 				//控制只有一张图片的时候不自动轮播
		// 				delay: 500,
		// 				stopOnLastSlide: false,
		// 				disableOnInteraction: false
		// 		  }
		// 		: false;
	},
	methods: {
		shu() {
			this.swiperOption.initialSlide++
		}
	}
};
</script>
<style>
.swiper-slide {
	width: 50%;
	height: 200px;
	line-height: 200px;
	font-size: 50px;
	text-align: center;
	background-color: rosybrown;
}
</style>
