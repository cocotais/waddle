Blockly.JavaScript['ivw_invisiblewidget'] = function (block) {
	var text_type = block.getFieldValue('type');
	var text_icon = block.getFieldValue('icon');
	var text_title = block.getFieldValue('title');
	var checkbox_isglobalwidget = block.getFieldValue('isGlobalWidget') === 'TRUE';
	var value_properties = Blockly.JavaScript.valueToCode(block, 'properties', Blockly.JavaScript.ORDER_ATOMIC);
	var value_methods = Blockly.JavaScript.valueToCode(block, 'methods', Blockly.JavaScript.ORDER_ATOMIC);
	var value_event = Blockly.JavaScript.valueToCode(block, 'event', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_constructor = Blockly.JavaScript.statementToCode(block, 'constructor');
	var value_functionslist = Blockly.JavaScript.valueToCode(block, 'functionsList', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var templist = value_methods.split('----#不怎么华丽的分割线#----')
	console.log(templist)
	var methods = ''
	var functions = ''
	for (let i = 0; i < templist.length - 1; i++) { // 这个-1不要去掉，谢谢
		if (i % 2 == 0) {
			methods = methods.concat(templist[i])
		} else {
			functions = functions.concat(templist[i])
		}

	}
	// if (methods.length >= 1) {
	// 	methods[methods.length-1] = methods[methods.length-1].concat(']')
	// }
	console.log(String(methods))
	var code =
		`
/*
* 嘿，欢迎使用 WidgetCraft 制作控件
* 本工具基于Blockly开发，由 中子星000（QQ：2422481178）主理制作、MathCalculus（QQ：2504556268）协助制作、Epeiuss（QQ：2822603942）与海藻酸钠（QQ：3409473369）监制
* 欢迎各位进入开源仓库参与建设：https://gitee.com/coco-ag/coco-widgetcraft/
* 建议或特性反馈链接：https://www.yuque.com/forms/share/21daa75d-9aac-4887-8eb9-77dd20e658ec
*/

const TYPE = '${text_type}';
const WIDGET_ICON = '${text_icon}';
const TITLE = '${text_title}';

const types = {
	'type': TYPE,
	'icon': WIDGET_ICON,
	'title': TITLE,
	// 'version': '1.0.0',
	// 'platforms': ['android', 'ios', 'web'],
	'isInvisibleWidget': true,
	'isGlobalWidget': ${checkbox_isglobalwidget},
	'docs': {
		'url': 'https://coco.codemao.cn'
	},
	'properties': ${value_properties},
	'methods': ${methods},
	'events': ${value_event}
};

class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
		${statements_constructor}
	}
	
	${functions}
	/*
	${value_functionslist}
	*/
}

console.log('* 嘿，欢迎使用CoCoMake制作控件');
console.log('* 本工具由MathCalculus（QQ：2504556268）、中子星000（QQ：2422481178）制作');

exports.types = types;
exports.widget = Widget;






`
		;
	return code;
};