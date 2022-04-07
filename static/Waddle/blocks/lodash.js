Blockly.Blocks['lodash_import'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("引入lodash");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_chunk'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将");
        this.appendValueInput("SIZE")
            .setCheck("Array")
            .appendField("转为二维数组，每组大小为");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_compact'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用loadsh将");
        this.appendDummyInput()
            .appendField("中的假值删除");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_concat'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用loadsh将数组");
        this.appendValueInput("VALUE")
            .setCheck("Array")
            .appendField("和");
        this.appendDummyInput()
            .appendField("连接为数组");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_difference'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用loadsh将数组");
        this.appendValueInput("VALUE")
            .setCheck("Array")
            .appendField("中的");
        this.appendDummyInput()
            .appendField("过滤掉");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_differencebydropdown'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用loadsh将数组");
        this.appendDummyInput()
            .appendField("中的每一个值")
            .appendField(new Blockly.FieldDropdown([["获取绝对值", "Math.abs"], ["获取小于或等于它的整数", "Math.floor"], ["获取大于或等于它的整数", "Math.ceil"], ["获取算术平方根", "Math.sqrt"], ["获取立方根", "Math.ceil"], ["去掉小数部分", "Math.trunc"]]), "ITERATEE");
        this.appendValueInput("VALUE")
            .setCheck("Array")
            .appendField("后，将转换后的结果中的");
        this.appendDummyInput()
            .appendField("过滤掉");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};