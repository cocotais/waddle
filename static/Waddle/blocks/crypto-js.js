//使用的是crypto图标中的颜色

Blockly.Blocks["crypto_import"] = {
  init: function () {
    this.appendDummyInput().appendField("引入crypto-js");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(BlockColors["crypto"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_md5"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto生成哈希MD5");
    this.appendDummyInput("").appendField("的对象");
    this.setOutput(true, null);
    this.setColour(BlockColors["crypto"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_sha1"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto哈希SHA-1");
    this.appendDummyInput("").appendField("的对象");
    this.setOutput(true, null);
    this.setColour(BlockColors["crypto"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_md5_s"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto生成哈希MD5");
    this.appendDummyInput("").appendField("的字符串");
    this.setOutput(true, null);
    this.setColour(BlockColors["crypto"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_sha1_s"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto哈希SHA-1");
    this.appendDummyInput("").appendField("的字符串");
    this.setOutput(true, null);
    this.setColour(BlockColors["crypto"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_tostr"] = {
  init: function () {
    this.appendValueInput("STR").setCheck(null);
    this.appendDummyInput().appendField("到字符串");
    this.setOutput(true, "String");
    this.setColour(BlockColors["crypto"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
//用甚莫颜色好？
