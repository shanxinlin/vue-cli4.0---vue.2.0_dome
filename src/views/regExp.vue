<template>
	<div class="regE">
		{{ name }}
		<div class="Reg0"></div>
	</div>
</template>
<script>
// 字面量 var 变量名 = /表达式/模式修饰符
// 构造函数 var 变量名 = new RegExp('表达式','模式修饰符')
export default {
	data() {
		return {
			name: 'RegExp正则'
		};
	},
	created() {
		let str = '我们得快点撒地方,睡了(里面的吊打)对对对';
		console.log(str.replace(/\(.*?\)/g,''))
		console.log(str.replace(/\(.*/g,''))
		console.log(str.replace(/.*?\)/g,''))
	},
	mounted() {
		// this.Reg0();   //search方法
		// this.Reg1();   //replace方法
		// this.Reg2();   //test方法
		// this.Reg3();     //exec方法
		this.Reg4();     //match方法
		// this.repeatedly();  //校验数字的表达式
		// this.characters();  //校验字符的表达式
	},
	methods: {
		Reg0() {
			let str = 'Visit w3cschool';
			let n = str.search(/i/i);
			console.log('search字符串方法,返回起始位置:', n);
		},
		Reg1() {
			let str = 'Visit Microsoft!';
			let res = str.replace(/o/gi, 'O');
			console.log('replace一些字符替换另一些字符:', res);

			let exchange = str.replace(/(\w+)\s*(\w+)/, '$2 $1');
			console.log('replace单词交换顺序', exchange);

			let name = '"9", "b"';
			let mark = name.replace(/"([^"]*)"/g, "'$1'");
			console.log('把所有的花引号替换为直引号', mark);

			let initial = 'aaa bbb ccc';
			let inchange = initial.replace(/\b\w+\b/g, function(word) {
				return word.substring(0, 1).toUpperCase() + word.substring(1);
			});
			console.log('符串中所有单词的首字母都转换为大写', inchange);
		},
		Reg2() {
			let eshow = /e/.test('The best things in life are free!');
			console.log('test字符串中含有匹配的文本true/false', eshow);
		},
		Reg3() {
			let text = /e/i.exec('THE best things in life are free!');
			console.log('exec检索字符串中的正则表达式的匹配,返回数组', text);
		},
		Reg4() {
			let patt1 = 'ab(c12c3)def'.match(/[0-9]+/g);
			let patt2 = 'ab(c12c3)def'.match(/\(.*?\)+/g);
			console.log('match找到一个或多个正则表达式的匹配,返回数组', patt1);
			console.log('match去除括号里的字符串,返回数组', patt2);
		},
		repeatedly() {
			console.log('匹配数字', /^[0-9]+$/.test('123'));
			console.log('n位的数字', /^\d{1}$/.test(2));
			console.log('至少n位的数字', /^\d{3,}$/.test(1234));
			console.log('m-n位的数字', /^\d{3,6}$/.test(123456));
			console.log('零和非零开头的数字', /^(0|[1-9][0-9]*)$/.test(10000000));
			console.log('非零开头的最多带两位小数的数字', /^([1-9][0-9]*)+(.[0-9]{1,2})?$/.test(10.01));
			console.log('带1-2位小数的正数或负数', /^-?[0-9]+(.[0-9]{1,2})?$/.test(-140.11));
			console.log('带1-2位小数的正数或负数', /^-?\d+(.\d{1,2})?$/.test(10.1));
			console.log('正数、负数、和小数', /^(-|\+)?\d+(.\d)?$/.test(-12.0));
			console.log('有两位小数的正实数', /^[0-9]+(.[0-9]{2})?$/.test(12.11));
			console.log('有1~3位小数的正实数', /^[0-9]+(.[0-9]{1,3})?$/.test(10.22));
			console.log('非零的正整数', /^[1-9]\d*$/.test(12)); //^[1-9]\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\+?[1-9][0-9]*$
			console.log('非零的负整数', /^-[1-9][0-9]*$/.test(-123)); //^-[1-9]\d*$
			console.log('非负整数', /^\d*$/.test(0)); //^[1-9]\d*$
			console.log('非正整数', /^-[1-9]\d*|0$/.test(-1)); //^((-\d+)|(0+))$
			console.log('非负浮点数', /^\d+(.\d+)?$/.test(0)); //^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$
			console.log('非正浮点数', /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/.test(-0.1)); //^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$
			console.log('正浮点数', /^([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/.test(0.1)); //^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
			console.log('负浮点数：', /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/.test(-0.002)); //^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
		},
		characters() {
			let text = '单aaaa1111bbbb2222大哥';
			let textNum = text.replace(/\d/g, '');
			let textLetter = text.replace(/[A-Z]+/gi, '');
			let textName = text.replace(/[^\u4e00-\u9fff]/g, ''); //取出除了中文的匹配项替换
			console.log('汉字', textNum, textLetter, textName);
		}
	}
};
</script>

<style lang="less" scoped></style>
