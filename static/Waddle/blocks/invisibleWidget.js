
const HELP_URL = "https://www.yuque.com/appcraft/widget/widgetguide";

Blockly.Blocks['ivw_defTypes'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("不可见控件");
		this.appendStatementInput("types")
			.setCheck(null);
		this.setNextStatement(true, null);
		this.setColour("#8647F3");
		this.setTooltip("定义不可见控件类型");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_itemType'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("类型名")
			.appendField(new Blockly.FieldTextInput("MY_WIDGET"), "type");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("type属性，控件类型，必须唯一");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_itemIcon'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("图标")
			.appendField(new Blockly.FieldTextInput("https://gitee.com/coco-ag/coco-widgetcraft/raw/dev/static/img/logo.png"), "icon");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("icon属性，控件图标，url");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_itemTitle'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("名称")
			.appendField(new Blockly.FieldTextInput("我的控件"), "title");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("title属性，显示出来的名称");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_itemVersion'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("版本")
			.appendField(new Blockly.FieldTextInput("1.0.0"), "version");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("version属性，版本号x.y.z");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_itemIsGlobalWidget'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("控件类型")
			.appendField(new Blockly.FieldDropdown([["全局控件", "true"], ["屏幕控件", "false"]]), "isGlobalWidget");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("isGlobalWidget属性，是否为全局控件");
		this.setHelpUrl("https://www.yuque.com/appcraft/widget/widgetguide");
	}
};

Blockly.Blocks['ivw_properties'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("属性列表");
		this.appendStatementInput("properties")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("定义控件属性");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_methods'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("方法列表");
		this.appendStatementInput("methods")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("定义控件方法");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_events'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("事件列表");
		this.appendStatementInput("events")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("定义事件方法");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_propertieItem'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("定义属性");
		this.appendStatementInput("propertieItem")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("定义一个属性，放在属性列表里");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_methodItem'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("定义方法");
		this.appendStatementInput("methodItem")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("定义一个方法，放在方法列表里");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_eventItem'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("事件列表");
		this.appendStatementInput("eventItem")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("定义一个事件，放在事件列表里");
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
		this.setTooltip(HELP_URL);
		this.setHelpUrl("触发事件并传参（可选，请用事件传参积木）");
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
		this.setTooltip(HELP_URL);
		this.setHelpUrl("传参（可选）");
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
