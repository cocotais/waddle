Blockly.Blocks['crypto_import'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("引入crypto-js");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3492ff');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
