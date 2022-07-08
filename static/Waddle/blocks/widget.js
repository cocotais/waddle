Blockly.Blocks['widget_widgetlog'] = {
    init: function () {
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("在CoCo控制台输出日志");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(75);
        this.setTooltip("需要在构造器或者方法函数内使用！！！");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['widget_widgetwarn'] = {
    init: function () {
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("在CoCo控制台输出警告");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(75);
        this.setTooltip("需要在构造器或者方法函数内使用！！！");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['widget_widgeterror'] = {
    init: function () {
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("在CoCo控制台输出错误");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(75);
        this.setTooltip("需要在构造器或者方法函数内使用！！！");
        this.setHelpUrl("");
    }
};