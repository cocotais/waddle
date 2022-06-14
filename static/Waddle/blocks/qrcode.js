Blockly.Blocks["qrcode_import"] = {
  init: function () {
    this.appendDummyInput().appendField("引入qrcode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(BlockColors["qrcode"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["qrcode_tocanvas"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck(null).appendField("将文本");
    this.appendValueInput("CANVA")
      .setCheck(null)
      .appendField("转为二维码画到画布");
    this.appendDummyInput().appendField("上，完成后触发");
    this.appendStatementInput("NAME").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(BlockColors["qrcode"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["qrcode_err"] = {
  init: function () {
    this.appendDummyInput().appendField("错误信息");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(BlockColors["qrcode"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["qrcode_tocanvas_c"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck(null).appendField("将文本");
    this.appendDummyInput().appendField("转为二维码，完成后触发");
    this.appendStatementInput("NAME").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(BlockColors["qrcode"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["qrcode_canvas"] = {
  init: function () {
    this.appendDummyInput().appendField("返回canvas对象");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(BlockColors["qrcode"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
