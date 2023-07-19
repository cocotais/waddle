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
      .setCheck("String")
      .appendField("使用http")
      .appendField(
        new Blockly.FieldDropdown([
          ["get", "get"],
          ["post", "post"],
        ]),
        "MODE"
      )
      .appendField("链接");
    this.appendStatementInput("OK").setCheck(null).appendField("当请求完成时");
    this.appendStatementInput("ERROR")
      .setCheck(null)
      .appendField("当请求失败时");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3d92ef");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["http_response"] = {
  init: function () {
    this.appendDummyInput().appendField("响应内容");
    this.setOutput(true, null);
    this.setColour("#3d92ef");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["http_responsedropdown"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("响应内容的")
      .appendField(
        new Blockly.FieldDropdown([
          ["信息", "data"],
          ["响应头", "headers"],
          ["HTTP状态码", "status"],
          ["HTTP状态信息", "statusText"],
        ]),
        "MODE"
      );
    this.setOutput(true, null);
    this.setColour("#3d92ef");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["http_error"] = {
  init: function () {
    this.appendDummyInput().appendField("获取错误");
    this.setOutput(true, null);
    this.setColour("#3d92ef");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};