Blockly.Blocks['control_invisible_craft'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("创建不可见控件");
        this.appendValueInput("NAME")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("名称");
        this.appendValueInput("CONTENT")
            .setCheck("String")
            .appendField("内容");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['control_invisible'] = {
    init: function () {
        this.appendValueInput("TYPE_NAME")
            .setCheck(["String", "Number"])
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("名称");
        this.appendValueInput("ICON_URL")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("图标");
        this.appendValueInput("TITLE")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("标题");
        this.appendValueInput("PROPERTIES")
            .setCheck("Array")
            .appendField("属性");
        this.appendValueInput("METHODS")
            .setCheck("Array")
            .appendField("方法");
        this.appendValueInput("EVENTS")
            .setCheck("Array")
            .appendField("事件");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("一个不可见自定义控件对象");
        this.setHelpUrl("https://www.yuque.com/appcraft/widget/widgetguide");
    }
};

Blockly.Blocks['control_propertie'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("属性");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("键");
        this.appendValueInput("LABEL")
            .setCheck("String")
            .appendField("内容");
        this.appendValueInput("VALUETYPE")
            .setCheck("String")
            .appendField("输入类型");
        this.appendValueInput("DEFAULTVALUE")
            .setCheck(["Boolean", "String", "Number"])
            .appendField("默认值");
        this.setOutput(true, null);
        this.setColour(114);
        this.setTooltip("一个属性");
        this.setHelpUrl("https://www.yuque.com/appcraft/widget/widgetguide");
    }
};

Blockly.Blocks['control_method_noreturn'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("方法_无返回值");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("键");
        this.appendValueInput("LABEL")
            .setCheck("String")
            .appendField("内容");
        this.appendValueInput("PARAMS")
            .setCheck("Array")
            .appendField("参数");
        this.setOutput(true, null);
        this.setColour(114);
        this.setTooltip("一个方法");
        this.setHelpUrl("https://www.yuque.com/appcraft/widget/widgetguide");
    }
};

Blockly.Blocks['control_method_return'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("方法_有返回值");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("键");
        this.appendValueInput("LABEL")
            .setCheck("String")
            .appendField("内容");
        this.appendValueInput("PARAMS")
            .setCheck("Array")
            .appendField("参数");
        this.appendValueInput("VALUETYPE")
            .setCheck("String")
            .appendField("值类型");
        this.setOutput(true, null);
        this.setColour(114);
        this.setTooltip("一个方法");
        this.setHelpUrl("https://www.yuque.com/appcraft/widget/widgetguide");
    }
};

Blockly.Blocks['control_event'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("事件");
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("键");
        this.appendValueInput("LABEL")
            .setCheck("String")
            .appendField("内容");
        this.appendValueInput("PRARMS")
            .setCheck("Array")
            .appendField("参数");
        this.setOutput(true, null);
        this.setColour(114);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['control_method_param'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("方法参数");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("键");
        this.appendValueInput("LABEL")
            .setCheck("String")
            .appendField("内容");
        this.appendValueInput("VALUETYPE")
            .setCheck("String")
            .appendField("输入类型");
        this.appendValueInput("DEFAULTVALUE")
            .setCheck(["Boolean", "String", "Number"])
            .appendField("默认值");
        this.setOutput(true, null);
        this.setColour(114);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['control_event_param'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("事件参数");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("键");
        this.appendValueInput("LABEL")
            .setCheck("String")
            .appendField("内容");
        this.appendValueInput("VALUETYPE")
            .setCheck("String")
            .appendField("输出类型");
        this.setOutput(true, null);
        this.setColour(114);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['control_invisible_extends'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("定义控件实体");
        this.appendStatementInput("CONSTRUCTOR")
            .setCheck(null)
            .appendField("初始化");
        this.appendStatementInput("FUN")
            .setCheck(null)
            .appendField("函数");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['control_invisible_super'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("继承控件");
        this.setColour(114);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['control_craft_this'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("设置自己的");
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("为");
        this.setColour(114);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['control_this'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("自己的");
        this.setOutput(true, null);
        this.setColour(114);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['control_invisible_function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("定义控件方法");
        this.appendValueInput("PARAMS")
            .setCheck("Array")
            .appendField("传入参数");
        this.appendStatementInput("FUNCTION")
            .setCheck(null)
            .appendField("方法内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(114);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

