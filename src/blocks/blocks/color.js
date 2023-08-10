import Blockly from "blockly"; //颜色来自color.js图标
Blockly.Blocks["color_import"] = {
  init: function () {
    this.appendDummyInput().appendField("引入color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2bc9a7");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["color_strobj"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck(null).appendField("从字符串");
    this.appendDummyInput().appendField("建立Color对象");
    this.setOutput(true, null);
    this.setColour("#2bc9a7");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["color_get"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck(null).appendField("获取Color对象");
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["红色通道", "getRed()"],
          ["蓝色通道", "getBlue()"],
          ["绿色通道", "getGreen()"],
        ]),
        "TYPE"
      )
      .appendField("的值");
    this.setOutput(true, null);
    this.setColour("#2bc9a7");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["color_gethue"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck(null).appendField("获取Color对象");
    this.appendDummyInput().appendField("色相(HUE)的值");
    this.setOutput(true, null);
    this.setColour("#2bc9a7");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["color_getsaturation"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck(null).appendField("获取Color对象");
    this.appendDummyInput().appendField("饱和度的值");
    this.setOutput(true, null);
    this.setColour("#2bc9a7");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
