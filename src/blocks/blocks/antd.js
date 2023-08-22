import Blockly from "blockly";
Blockly.Blocks["antd_import"] = {
  init: function () {
    this.appendDummyInput().appendField("引入antdesign-mobile");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("antd");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["antd_button"] = {
  init: function () {
    this.appendStatementInput("CON").setCheck(null).appendField("新建antdesign按钮");
    this.appendStatementInput("PRO").setCheck(null).appendField("属性");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("antd");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["antd_auto_center"] = {
  init: function () {
    this.appendStatementInput("CON").setCheck(null).appendField("新建自动居中 内容");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("antd");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["antd_divider"] = {
  init: function () {
    this.appendStatementInput("CON").setCheck(null).appendField("新建分割线 内容");
    this.appendStatementInput("PRO").setCheck(null).appendField("属性");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("antd");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
