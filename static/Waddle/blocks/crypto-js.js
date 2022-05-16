Blockly.Blocks["crypto_import"] = {
  init: function () {
    this.appendDummyInput().appendField("引入crypto-js");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0682f5");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_md5"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto哈希MD5");
    this.setOutput(true, null);
    this.setColour("#0682f5");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//用甚莫颜色好？