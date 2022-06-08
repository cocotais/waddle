Blockly.Blocks['dict_pair'] = {
    init: function () {
        this.appendValueInput("key")
            .setCheck(null)
            .appendField("键");
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("值");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(BlockColors["dict"]);
        this.setTooltip("生成一个键值对");
        this.setHelpUrl("");
    }
};