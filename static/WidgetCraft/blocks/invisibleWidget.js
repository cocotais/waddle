
Blockly.Blocks['ivw_defTypes'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("定义不可见控件类型");
        this.appendStatementInput("types")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("定义不可见控件类型");
        this.setHelpUrl("https://www.yuque.com/appcraft/widget/widgetguide");
    }
};
