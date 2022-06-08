Blockly.Blocks['dict_pair'] = {
    init: function () {
        this.appendValueInput("key")
            .setCheck(null)
            .appendField("键");
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("值");
        this.setInputsInline(true);
        this.setOutput(true,'dict_pair');
        this.setColour(BlockColors["dict"]);
        this.setTooltip("生成一个键值对");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dict_set'] = {
    init: function () {
        this.appendValueInput("key")
            .setCheck(null)
            .appendField("键");
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("值");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(BlockColors["dict"]);
        this.setTooltip("设置一个键值对");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dict_get'] = {  
    init: function () {
        this.appendDummyInput()
            .appendField("获取键")
        this.appendValueInput("key")
            .setCheck(null)
            .appendField("键");
        this.appendDummyInput()
            .appendField("的值");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(BlockColors["dict"]);
        this.setTooltip("获取一个键值对");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dict_del'] = {
    init: function () {
        this.appendValueInput("dict")
            .setCheck(null)
            .appendField("删除字典");
        this.appendValueInput("key")
            .setCheck(null)
            .appendField("键")
        this.appendDummyInput()
            .appendField("的值");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(BlockColors["dict"]);
        this.setTooltip("删除一个键值对");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dict_clear'] = {
    init: function () {
        this.appendValueInput("dict")
            .setCheck(null)
            .appendField("清空字典");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(BlockColors["dict"]);
        this.setTooltip("清空字典");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dict_len'] = {
    init: function () {
        this.appendValueInput("dict")
            .setCheck(null)
            .appendField("字典");
        this.appendDummyInput()
            .appendField("的长度");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(BlockColors["dict"]);
        this.setTooltip("获取字典的长度");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dict_keys'] = { 
    init: function () {
        this.appendValueInput("dict")
            .setCheck(null)
            .appendField("字典");
        this.appendDummyInput()
            .appendField("的所有键");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(BlockColors["dict"]);
        this.setTooltip("获取字典的键");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dict_values'] = {
    init: function () {
        this.appendValueInput("dict")
            .setCheck(null)
            .appendField("字典");
        this.appendDummyInput()
            .appendField("的所有值");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(BlockColors["dict"]);
        this.setTooltip("获取字典的值");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dict_has_key'] = {
    init: function () {
        this.appendValueInput("dict")
            .setCheck(null)
            .appendField("字典");
        this.appendValueInput("key")
            .setCheck(null)
            .appendField("键");
        this.appendDummyInput()
            .appendField("是否存在");
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(BlockColors["dict"]);
        this.setTooltip("判断字典是否存在某个键");
        this.setHelpUrl("");
    }
};