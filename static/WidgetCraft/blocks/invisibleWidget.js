
const HELP_URL = "https://www.yuque.com/appcraft/widget/widgetguide";

Blockly.Blocks['ivw_defTypes'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("定义不可见控件类型");
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
        this.setTooltip("type属性");
        this.setHelpUrl(HELP_URL);
    }
};
