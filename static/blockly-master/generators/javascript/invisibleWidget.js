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
    var code = 
`
/*
* 嘿，欢迎使用CoCoMake制作控件
* 本工具由MathCalculus（QQ：2504556268）、中子星000（QQ：2422481178）制作
*/

const TYPE = '${text_type}';
const WIDGET_ICON = '${text_icon}';
const TITLE = '${text_title}';

const types = {
	type: TYPE,
	icon: WIDGET_ICON,
	title: TITLE,
	// version: '1.0.0',
	// platforms: ['android', 'ios', 'web'],
	isInvisibleWidget: true,
	isGlobalWidget: ${checkbox_isglobalwidget},
	docs: {
		url: 'https://coco.codemao.cn'
	},
	properties: ${value_properties},
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






`
    ;
    return code;
};