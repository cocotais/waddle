Blockly.Blocks['js_usestrict'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("使用严格模式");
        this.setColour(180);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("在js代码里使用严格模式。");
        this.setHelpUrl("https://www.w3school.com.cn/js/js_strict.asp");
    }
};

Blockly.Blocks['js_bitwise'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("位运算");
        this.appendValueInput("VALUE1")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["和", "&"], ["或", "|"], ["异或", "^"], ["零填充左位移", "<<"], ["有符号右位移", ">>"], ["零填充右位", "移>>>"]]), "TYPE");
        this.appendValueInput("VALUE2")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(180);
        this.setTooltip("位运算。返回二进制数。");
        this.setHelpUrl("https://www.w3school.com.cn/js/js_bitwise.asp");
    }
};

Blockly.Blocks['js_comparisons'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("比较");
        this.appendValueInput("VALUE1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["等于", "=="], ["值相等并且类型相等", "==="], ["不相等", "!="], ["值不相等或类型不相等", "!=="], ["大于", ">"], ["小于", "<"], ["大于或等于", ">="], ["小于或等于", "<="]]), "TYPE");
        this.appendValueInput("VALUE2")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(180);
        this.setTooltip("比较。返回布尔值。");
        this.setHelpUrl("https://www.w3school.com.cn/js/js_comparisons.asp");
    }
};

Blockly.Blocks['js_time'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取现在")
            .appendField(new Blockly.FieldDropdown([["时间戳", "new Date().getTime()"], ["年份", "new Date().getFullYear()"], ["月份", "new Date().getMonth()"], ["日", "new Date().getDate()"], ["小时", "new Date().getHours()"], ["分钟", "new Date().getMinutes()"], ["秒数", "new Date().getSeconds()"], ["毫秒数", "new Date().getMilliseconds()"], ["星期", "new Date().getDay()"]]), "TYPE");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(180);
        this.setTooltip("获取现在的时间。(月份返回0到11间的数，星期返回0到6之间的数。)");
        this.setHelpUrl("https://www.w3school.com.cn/js/js_date_methods.asp");
    }
};

Blockly.Blocks['js_popup_alert'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("弹出警告框，内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("弹出一个警告框。");
        this.setHelpUrl("https://www.w3school.com.cn/js/js_popup.asp");
    }
};

Blockly.Blocks['js_popup_confirm'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("弹出确认框并获取选择状态，内容");
        this.setOutput(true, "Boolean");
        this.setColour(180);
        this.setTooltip("弹出一个确认框。返回布尔值");
        this.setHelpUrl("https://www.w3school.com.cn/js/js_popup.asp");
    }
};

Blockly.Blocks['js_popup_prompt'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("弹出输入框并获取输入，内容");
        this.setOutput(true, "String");
        this.setColour(180);
        this.setTooltip("弹出一个输入框。返回输入内容。");
        this.setHelpUrl("https://www.w3school.com.cn/js/js_popup.asp");
    }
};

Blockly.Blocks['js_json_parse'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("解析json字符串");
        this.setInputsInline(false);
        this.setOutput(true, "Object");
        this.setColour(165);
        this.setTooltip("解析json字符串为对象。");
        this.setHelpUrl("https://www.w3school.com.cn/js/js_json_parse.asp");
    }
};

Blockly.Blocks['js_json_stringify'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck("Object")
            .appendField("将对象");
        this.appendDummyInput()
            .appendField("转为字符串");
        this.setOutput(true, "String");
        this.setColour(165);
        this.setTooltip("将对象转为json字符串。");
        this.setHelpUrl("https://www.w3school.com.cn/js/js_json_stringify.asp");
    }
};

Blockly.Blocks['js_json_access'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck("Object")
            .appendField("获取对象");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("的键");
        this.appendDummyInput()
            .appendField("的值")
        this.setOutput(true, null);
        this.setColour(165);
        this.setTooltip("获取对象的键的值");
        this.setHelpUrl("https://www.w3school.com.cn/js/js_json_objects.asp");
    }
};