Blockly.Blocks['vw_defTypes'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("创建可见控件");
		this.appendDummyInput()
			.appendField("类型名")
			.appendField(new Blockly.FieldTextInput("MY_WIDGET"), "type")
			.appendField("图标")
			.appendField(new Blockly.FieldTextInput("./static/img/logo.svg"), "icon");
		// 五个参数分两行输入
		this.appendDummyInput()
			.appendField("名称")
			.appendField(new Blockly.FieldTextInput("我的控件"), "title")
			.appendField("版本")
			.appendField(new Blockly.FieldTextInput("1.0.0"), "version")
			// .appendField("类型")
			// .appendField(new Blockly.FieldDropdown([["全局控件", "true"], ["屏幕控件", "false"]]), "isGlobalWidget");
			// 可见控件必须非全局
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#00c79f");
		this.setTooltip("定义可见控件类型，在添加积木中添加积木");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['vw_defWidget'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("可见控件积木代码");
		this.appendDummyInput()
			.appendField("构造器");
		this.appendStatementInput("constructor")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("渲染方法");
		this.appendStatementInput("render")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#00c79f");
		this.setTooltip("定义可见控件实体，构造器里放初始化属性（懂js的随意）");
		this.setHelpUrl(HELP_URL);
	}
};

Blockly.Blocks['vw_returnrender'] = {
	init: function () {
		this.appendStatementInput("HTML")
			.setCheck(null)
			.appendField("渲染返回HTML代码");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#00c79f");
		this.setTooltip("");
		this.setHelpUrl("");
	}
};