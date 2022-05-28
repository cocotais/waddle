Blockly.Blocks["color_import"] = {
  init: function () {
    this.appendDummyInput().appendField("引入color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
