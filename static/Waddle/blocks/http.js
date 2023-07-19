Blockly.Blocks["http_import"] = {
  init: function () {
    this.appendDummyInput().appendField("引入http");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3d92ef");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["http_get"] = {
  init: function () {
    this.appendValueInput("URL")
      .setCheck(null)
      .appendField("使用http 发送GET请求 链接");
    this.setInputsInline(true);
    this.setOutput(false,null);
    this.setColour("#3d92ef");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};