Blockly.Blocks['coco_emit'] = {
  init: function() {
    this.appendValueInput("parameters")
        .setCheck("Array")
        .appendField("触发事件")
        .appendField(new Blockly.FieldTextInput("事件名称"), "eventName")
        .appendField("参数（可选）");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("触发事件，并传参（可选）");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['coco_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("属性")
        .appendField(new Blockly.FieldTextInput("属性名"), "key")
        .appendField("标签")
        .appendField(new Blockly.FieldTextInput("标签"), "label")
        .appendField("值类型")
        .appendField(new Blockly.FieldDropdown([["字符串","string"], ["数字","number"], ["布尔","boolean"], ["颜色","color"]]), "valueType")
        .appendField("默认值")
        .appendField(new Blockly.FieldTextInput("默认值"), "default");
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("定义属性，放在列表里使用");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['coco_method'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("方法")
        .appendField(new Blockly.FieldTextInput("方法名"), "key")
        .appendField("标签")
        .appendField(new Blockly.FieldTextInput("标签"), "label");
    this.appendValueInput("params")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("参数");
    this.appendStatementInput("function_1")
        .setCheck(null)
        .appendField("函数");
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("定义参数，放在列表里使用");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['coco_method_return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("方法")
        .appendField(new Blockly.FieldTextInput("方法名"), "key")
        .appendField("标签")
        .appendField(new Blockly.FieldTextInput("标签"), "label")
        .appendField("返回值类型")
        .appendField(new Blockly.FieldDropdown([["字符串","string"], ["数字","number"], ["布尔","boolean"], ["颜色","color"]]), "valueType");
    this.appendValueInput("params")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("参数");
    this.appendStatementInput("function_1")
        .setCheck(null)
        .appendField("函数（应返回）");
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("定义参数，放在列表里使用");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['coco_method_parameter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("参数于方法")
        .appendField(new Blockly.FieldTextInput("参数名"), "key")
        .appendField("标签")
        .appendField(new Blockly.FieldTextInput("标签"), "label")
        .appendField("尾标签")
        .appendField(new Blockly.FieldTextInput("尾标签"), "labelAfter")
        .appendField("值类型")
        .appendField(new Blockly.FieldDropdown([["字符串","string"], ["数字","number"], ["布尔","boolean"], ["颜色","color"]]), "valueType")
        .appendField("默认值")
        .appendField(new Blockly.FieldTextInput("默认值"), "default");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("定义用于方法的参数，放在列表里使用");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['coco_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("事件")
        .appendField(new Blockly.FieldTextInput("事件名"), "key")
        .appendField("标签")
        .appendField(new Blockly.FieldTextInput("标签"), "label");
    this.appendValueInput("params")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("参数");
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("定义参数，放在列表里使用");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['coco_event_parameter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("参数于事件")
        .appendField(new Blockly.FieldTextInput("参数名"), "key")
        .appendField("标签")
        .appendField(new Blockly.FieldTextInput("标签"), "label")
        .appendField("值类型")
        .appendField(new Blockly.FieldDropdown([["字符串","string"], ["数字","number"], ["布尔","boolean"], ["颜色","color"]]), "valueType");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("定义用于事件的参数，放在列表里使用");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['coco_return'] = {
  init: function() {
    this.appendValueInput("parameters")
        .setCheck(null)
        .appendField("返回");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(120);
 this.setTooltip("返回，参数可选");
 this.setHelpUrl("");
  }
};