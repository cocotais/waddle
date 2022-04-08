
const HELP_URL = "https://www.yuque.com/coco-central/widget/widgetguide";

Blockly.Blocks['ivw_defTypes'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("创建不可见控件");
		this.appendDummyInput()
			.appendField("类型名")
			.appendField(new Blockly.FieldTextInput("MY_WIDGET"), "type")
			.appendField("图标")
			.appendField(new Blockly.FieldTextInput("https://waddle.coco-central.cn/static/img/logo.svg"), "icon");
		// 五个参数分两行输入
		this.appendDummyInput()
			.appendField("名称")
			.appendField(new Blockly.FieldTextInput("我的控件"), "title")
			.appendField("版本")
			.appendField(new Blockly.FieldTextInput("1.0.0"), "version")
			.appendField("类型")
			.appendField(new Blockly.FieldDropdown([["全局控件", "true"], ["屏幕控件", "false"]]), "isGlobalWidget");
		// this.appendStatementInput("types")
		// 	.setCheck(null); //弃用
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#8647F3");
		this.setTooltip("定义不可见控件类型，在添加积木中添加积木");
		this.setHelpUrl(HELP_URL);
	}
};

// Blockly.Blocks['ivw_itemType'] = {
// 	init: function () {
// 		this.appendDummyInput()
// 			.appendField("控件类型名")
// 			.appendField(new Blockly.FieldTextInput("MY_WIDGET"), "type");
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour("#5574F8");
// 		this.setTooltip("type属性，控件类型，必须唯一");
// 		this.setHelpUrl(HELP_URL);
// 	}
// };

// Blockly.Blocks['ivw_itemIcon'] = {
// 	init: function () {
// 		this.appendDummyInput()
// 			.appendField("控件图标")
// 			.appendField(new Blockly.FieldTextInput("https://waddle.coco-central.cn/static/img/logo.svg"), "icon");
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour("#5574F8");
// 		this.setTooltip("icon属性，控件图标，url");
// 		this.setHelpUrl(HELP_URL);
// 	}
// };

// Blockly.Blocks['ivw_itemTitle'] = {
// 	init: function () {
// 		this.appendDummyInput()
// 			.appendField("控件名称")
// 			.appendField(new Blockly.FieldTextInput("我的控件"), "title");
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour("#5574F8");
// 		this.setTooltip("title属性，显示出来的名称");
// 		this.setHelpUrl(HELP_URL);
// 	}
// };

// Blockly.Blocks['ivw_itemVersion'] = {
// 	init: function () {
// 		this.appendDummyInput()
// 			.appendField("控件版本")
// 			.appendField(new Blockly.FieldTextInput("1.0.0"), "version");
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour("#5574F8");
// 		this.setTooltip("version属性，版本号x.y.z");
// 		this.setHelpUrl(HELP_URL);
// 	}
// };

// Blockly.Blocks['ivw_itemIsGlobalWidget'] = {
// 	init: function () {
// 		this.appendDummyInput()
// 			.appendField("控件类型")
// 			.appendField(new Blockly.FieldDropdown([["全局控件", "true"], ["屏幕控件", "false"]]), "isGlobalWidget");
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour("#5574F8");
// 		this.setTooltip("isGlobalWidget属性，是否为全局控件");
// 		this.setHelpUrl(HELP_URL);
// 	}
// };

Blockly.Blocks['ivw_addProperty'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("新建属性积木")
			.appendField("变量名")
			.appendField(new Blockly.FieldTextInput("propertyName"), "key")
			.appendField("属性名")
			.appendField(new Blockly.FieldTextInput("属性1"), "label");
		this.appendStatementInput("other")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#e76cea");
		this.setTooltip("定义一个属性积木\n变量名是内部代码调用的名称（建议英文）\n标签是CoCo积木上显示的名称\n实在没理解就导入到CoCo看一下效果\n不可以动态添加！！！");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_addMethod'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("新建方法积木")
			.appendField("函数名")
			.appendField(new Blockly.FieldTextInput("methodName"), "key")
			.appendField("方法名")
			.appendField(new Blockly.FieldTextInput("方法1"), "label");
		// this.appendDummyInput()
		// 	.appendField("积木选项")
		// this.appendStatementInput("other")
		// 	.setCheck(null);
		this.appendDummyInput()
			.appendField("代码参数")
		this.appendStatementInput("params")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("执行代码")
		this.appendStatementInput("code")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#ffbb55");
		this.setTooltip("定义一个方法积木\n函数名是内部代码调用的名称（建议英文）\n标签是CoCo积木上显示的名称\n实在没导入到CoCo理解就看一下效果\n不可以动态添加！！！");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_addParams'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("添加参数")
			.appendField("参数")
			.appendField(new Blockly.FieldTextInput("paramName"), "key")
			.appendField("标签")
			.appendField(new Blockly.FieldTextInput("参数名"), "label");
		this.appendDummyInput()
			.appendField("积木选项")
		this.appendStatementInput("other")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#3CA9FF");
		this.setTooltip("定义控件用于方法的参数");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_addEvent'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("新建积木")
			.appendField("当")
			.appendField(new Blockly.FieldTextInput("发生什么"), "label")
			.appendField("时")
			.appendField("事件内部名")
			.appendField(new Blockly.FieldTextInput("eventName"), "key");
		this.appendDummyInput()
			.appendField("参数")
		this.appendStatementInput("params")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("积木选项")
		this.appendStatementInput("other")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#608fee");
		this.setTooltip("定义一个事件积木\n事件名是内部代码调用的名称（建议英文）\n标签是CoCo积木上显示的名称\n实在没理解就导入到CoCo看一下效果\n不可以动态添加！！！");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_methodReturn'] = {
	init: function () {
		this.appendValueInput("value")
			.setCheck(null)
			.appendField("返回");
		this.setPreviousStatement(true, null);
		this.setNextStatement(false, null);
		this.setColour("5574F8");
		this.setTooltip("触发事件并传参（可选，请用事件传参积木）");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_emit'] = {
	init: function () {
		this.appendValueInput("event")
			.setCheck(null)
			.appendField("触发事件");
		this.appendStatementInput("parameters")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("5574F8");
		this.setTooltip("触发事件并传参（可选，请用事件传参积木）");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_emitParameter'] = {
	init: function () {
		this.appendValueInput("parameter")
			.setCheck(null)
			.appendField("事件传参");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("5574F8");
		this.setTooltip("传参（可选）");
		this.setHelpUrl(HELP_URL);
	}
};

attris = {
	'key': '名称',
	'valueType': '值类型',
	'label': '标签',
	'labelAfter': '尾标签',
	'defaultValue': '默认值',
}


for (const key in attris) {
	if (Object.hasOwnProperty.call(attris, key)) {
		const attri = attris[key];
		Blockly.Blocks['ivwAttri_' + key] = {
			init: function () {
				this.appendValueInput("value")
					.setCheck(null)
					.appendField(new Blockly.FieldLabelSerializable(attri), "blockLabel");
				this.setPreviousStatement(true, null);
				this.setNextStatement(true, null);
				this.setColour("#5574F8");
				this.setTooltip(`${key}，${attri}`);
				this.setHelpUrl(HELP_URL);
			}
		};
	}
}

Blockly.Blocks['ivwAttri_custom'] = {
	init: function () {
		this.appendValueInput("value")
			.setCheck(null)
			.appendField("自定义属性")
			.appendField(new Blockly.FieldTextInput("label"), "key");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("自定义属性");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_export'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("导出控件");
		this.setPreviousStatement(true, null);
		this.setNextStatement(false, null);
		this.setColour("#5574F8");
		this.setTooltip("导出控件，一般为最后一行代码，这是必要的，不然没法在coco中使用");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_defWidget'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("不可见控件积木代码");
		this.appendDummyInput()
			.appendField("构造器");
		this.appendStatementInput("constructor")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#8647F3");
		this.setTooltip("定义不可见控件实体，构造器里放初始化属性（懂js的随意）");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_propsinit'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("传入属性")
			.appendField("从")
			.appendField(new Blockly.FieldTextInput("prop"), "props_name")
			.appendField("到")
			.appendField(new Blockly.FieldTextInput("default"), "this_name");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("传入属性(this.xxx=props.xxx)");
		this.setHelpUrl(HELP_URL);
	}
};