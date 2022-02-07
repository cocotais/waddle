# 不可见控件

## 1 不可见控件
搭配CoCo积木盒下的积木使用
类型、图标、标题、是全局控件
对应代码：
<details>
    <summary>点击展开代码块</summary>
    <pre><code>
/*
* 嘿，欢迎使用CoCoMake制作控件
* 本工具由MathCalculus（QQ：2504556268）、中子星000（QQ：2422481178）制作
*/

const TYPE = 'MY_WIDGET';
const WIDGET_ICON = '链接';
const TITLE = '我的控件';

const types = {
	type: TYPE,
	icon: WIDGET_ICON,
	title: TITLE,
	// version: '1.0.0',
	// platforms: ['android', 'ios', 'web'],
	isInvisibleWidget: true,
	isGlobalWidget: true,
	docs: {
		url: 'https://coco.codemao.cn'
	},
	properties: [],
	methods: [],
	events: []
};

class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
	}
}

console.log('* 嘿，欢迎使用CoCoMake制作控件');
console.log('* 本工具由MathCalculus（QQ：2504556268）、中子星000（QQ：2422481178）制作');

exports.types = types;
exports.widget = Widget;
    </code></pre>
</details>
