
const HELP_URL = "https://www.yuque.com/coco-central/widget/widgetguide";

Blockly.Blocks['ivw_defTypes'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("不可见控件");
		this.appendStatementInput("types")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
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
			.appendField("是全局控件")
			.appendField(new Blockly.FieldCheckbox("TRUE"), "isGlobalWidget");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("isGlobalWidget属性，是否为全局控件");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['ivw_properties'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("属性");
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
			.appendField("方法");
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
			.appendField("事件");
		this.appendStatementInput("events")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#5574F8");
		this.setTooltip("定义事件方法");
		this.setHelpUrl(HELP_URL);
	}
};
