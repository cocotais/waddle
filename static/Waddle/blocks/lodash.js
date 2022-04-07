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
        this.setInputsInline(true);
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

Blockly.Blocks['lodash_differenceby'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用loadsh将数组");
        this.appendDummyInput()
            .appendField("中的每一个值调用")
            .appendField(new Blockly.FieldTextInput("Math.abs"), "ITERATEE");
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

Blockly.Blocks['lodash_differencewithdropdown'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用loadsh将数组");
        this.appendValueInput("VALUE")
            .setCheck("Array")
            .appendField("与");
        this.appendDummyInput()
            .appendField("中的每一项依次对比，当")
            .appendField(new Blockly.FieldDropdown([["相等", "lodash.isEqual"]]), "COMPARATOR")
            .appendField("时过滤掉");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_differencewith'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用loadsh将数组");
        this.appendValueInput("VALUE")
            .setCheck("Array")
            .appendField("与");
        this.appendDummyInput()
            .appendField("中的每一项依次对比，当运算符")
            .appendField(new Blockly.FieldTextInput("lodash.isEqual"), "COMPARATOR")
            .appendField("成立时过滤掉");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_drop'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用loadsh将数组");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("前");
        this.appendDummyInput()
            .appendField("位删除");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_dropright'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用loadsh将数组");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("后");
        this.appendDummyInput()
            .appendField("位删除");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_dropwhiledropdown'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将数组从前向后寻找，当某项");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["为假", "function(a){return !!a}"], ["为真", "function(a){return !a}"], ["大于0", "function(a){return a>0}"], ["小于0", "function(a){return a<0}"]]), "PRE")
            .appendField("时将其和前面的元素删除");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_droprightwhiledropdown'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将数组从后向前寻找，当某项");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["为假", "function(a){return !!a}"], ["为真", "function(a){return !a}"], ["大于0", "function(a){return a<=0}"], ["小于0", "function(a){return a>=0}"]]), "PRE")
            .appendField("时将其和后面的元素删除");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_dropwhile'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将数组从前向后寻找，当某项");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("function(value){return !!value}"), "PRE")
            .appendField("返回假值时将其和前面的元素删除");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_droprightwhile'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将数组从后向前寻找，当某项");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("function(value){return !!value}"), "PRE")
            .appendField("返回假值时将其和后面的元素删除");
        this.setOutput(true, "Array");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_fill'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将数组");
        this.appendValueInput("NUM1")
            .setCheck("Number")
            .appendField("的从");
        this.appendValueInput("NUM2")
            .setCheck("Number")
            .appendField("到项的值");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("替换为");
        this.setOutput(true, "Array");
        this.setInputsInline(true);
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_findindexdropdown'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将数组从前向后寻找，当某项");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["为假", "function(a){return !a}"], ["为真", "function(a){return !!a}"], ["大于0", "function(a){return a>0}"], ["小于0", "function(a){return a<0}"]]), "PRE")
            .appendField("时的索引(获取找到的第一项)");
        this.setOutput(true, "Number");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['lodash_findlastindexdropdown'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将数组从前向后寻找，当某项");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["为假", "function(a){return !a}"], ["为真", "function(a){return !!a}"], ["大于0", "function(a){return a>0}"], ["小于0", "function(a){return a<0}"]]), "PRE")
            .appendField("时的索引(获取找到的最后一项)");
        this.setOutput(true, "Number");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['lodash_findindex'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将数组从前向后寻找，当某项");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("function(value){return !!value}"), "PRE")
            .appendField("时的索引(获取找到的第一项)");
        this.setOutput(true, "Number");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['lodash_findlastindex'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将数组从前向后寻找，当某项");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("function(value){return !!value}"), "PRE")
            .appendField("时的索引(获取找到的最后一项)");
        this.setOutput(true, "Number");
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['lodash_first'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash获取数组");
        this.appendDummyInput()
            .appendField("的第一个元素");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_flatten'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将");
        this.appendDummyInput()
            .appendField("减少一层嵌套深度");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lodash_flattendeep'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField("使用lodash将");
        this.appendDummyInput()
            .appendField("递归到一维数组");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};