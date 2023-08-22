import Blockly from "blockly";
Blockly.Blocks["vw_defTypes"] = {
  init: function () {
    this.appendDummyInput().appendField("创建可见控件");
    this.appendDummyInput()
      .appendField("类型名")
      .appendField(new Blockly.FieldTextInput("MY_WIDGET"), "type")
      .appendField("图标")
      .appendField(new Blockly.FieldTextInput("https://public.coco-central.cn/waddle/2/waddle2.svg"), "icon");
    // 五个参数分两行输入
    this.appendDummyInput()
      .appendField("名称")
      .appendField(new Blockly.FieldTextInput("我的控件"), "title")
      .appendField("版本")
      .appendField(new Blockly.FieldTextInput("1.0.0"), "version");
    this.appendDummyInput()
      .appendField("默认宽度")
      .appendField(new Blockly.FieldNumber(200), "width")
      .appendField("默认高度")
      .appendField(new Blockly.FieldNumber(150), "height");
    // .appendField("类型")
    // .appendField(new Blockly.FieldDropdown([["功能控件", "true"], ["界面控件", "false"]]), "isGlobalWidget");
    // 可见控件必须非全局
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00c79f");
    this.setTooltip("定义可见控件类型，在添加积木中添加积木");
  },
};

Blockly.Blocks["vw_defWidget"] = {
  init: function () {
    this.appendDummyInput().appendField("可见控件积木代码");
    this.appendDummyInput().appendField("控件初始化");
    this.appendStatementInput("constructor").setCheck(null);
    this.appendDummyInput().appendField("渲染方法");
    this.appendStatementInput("render").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00c79f");
    this.setTooltip("定义可见控件实体，控件初始化里放初始化属性（懂js的随意）");
  },
};

Blockly.Blocks["vw_returnrender"] = {
  init: function () {
    this.appendStatementInput("HTML").setCheck(null).appendField("渲染返回HTML代码");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00c79f");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["vw_setprop"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .appendField("设置 控件属性")
      .appendField(new Blockly.FieldTextInput("prop"), "name")
      .appendField("的值为");
    this.appendDummyInput().appendField("并重渲染");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e76cea");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
