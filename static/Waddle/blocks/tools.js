
Blockly.Blocks['tools_clip'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldTextInput("标签"), "tag");
		this.appendStatementInput("codes")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip("工具.积木夹子：方便积木分段，折叠；顶部注释积木夹子标签");
		this.setHelpUrl("");
		this.setColour("#0E7D65");
	}
};

Blockly.Blocks['tools_only_run'] = {
	init: function () {
		this.appendValueInput("codes")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip("工具.仅运行：用于运行有返回值的积木");
		this.setHelpUrl("");
		this.setColour("#0E7D65");
	}
};

Blockly.Blocks['tools_exegesis'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldTextInput("注释"), "exegesis");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip("工具.注释：用于插入单行注释");
		this.setHelpUrl("");
		this.setColour("#0E7D65");
	}
};

Blockly.Blocks['tools_dict'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("字典{");
		this.appendStatementInput("items")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("}");
		this.setOutput(true, null);
		this.setTooltip("工具.字典：创建字典");
		this.setHelpUrl("");
		this.setColour("#0E7D65");
	}
};

Blockly.Blocks['tools_list'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("列表[");
		this.appendStatementInput("items")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("]");
		this.setOutput(true, null);
		this.setTooltip("工具.列表：创建列表");
		this.setHelpUrl("");
		this.setColour("#0E7D65");
	}
};

Blockly.Blocks['tools_dictItem'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("字典项");
		this.appendValueInput("key")
			.appendField("键")
			.setCheck(null);
		this.appendValueInput("value")
			.appendField("值")
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip("工具.字典项：为字典添加项，自行添加字符串框");
		this.setHelpUrl("");
		this.setColour("#0E7D65");
	}
};

Blockly.Blocks['tools_listItem'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("列表项");
		this.appendValueInput("value")
			.appendField("值")
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip("工具.列表项：为列表添加项，自行添加字符串框");
		this.setHelpUrl("");
		this.setColour("#0E7D65");
	}
};