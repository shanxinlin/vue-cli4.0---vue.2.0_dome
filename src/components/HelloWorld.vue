<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>
		<div class="content">
			<div class="center">中</div>
			<div class="left">左</div>
			<div class="right">右</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: {
			type:String,
			default:'',
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
.content{
	display: flex;
	font-size: 16px;
}
.left{
	width:200px;
	order: 0;
	background:aquamarine;
}
.center{
	order: 1;
	flex-grow: 1;
	background:rgb(188, 103, 214);
}
.right{
	width:100px;
	order: 2;
	background:rgb(9, 167, 80);
}
</style>
