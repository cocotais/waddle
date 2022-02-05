Blockly.Blocks['ivw_invisiblewidgettypes'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("不可见控件类型");
    this.appendDummyInput()
        .appendField("类型")
        .appendField(new Blockly.FieldTextInput("MY_WIDGET"), "type")
        .appendField("图标")
        .appendField(new Blockly.FieldTextInput("链接"), "icon");
    this.appendDummyInput()
        .appendField("标题")
        .appendField(new Blockly.FieldTextInput("我的控件"), "title")
        .appendField("是全局控件")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "isGlobalWidget");
    this.appendValueInput("properties")
        .setCheck(["property", "Array"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("属性");
    this.appendValueInput("methods")
        .setCheck(["method", "Array"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("方法");
    this.appendValueInput("event")
        .setCheck(["event", "Array"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("事件");
    this.setPreviousStatement(true, null);
    this.setColour(30);
 this.setTooltip("定义不可见控件类型");
 this.setHelpUrl("https://www.yuque.com/appcraft/widget/widgetguide#zrig2");
  }
};

Blockly.Blocks['ivw_invisiblewidgetclass'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("不可见控件实体");
    this.appendStatementInput("constructor")
        .setCheck(null)
        .appendField("构造函数");
    this.appendValueInput("functions")
        .setCheck(null)
        .appendField("函数列表（函数名需与类型定义一致）");
    this.setPreviousStatement(true, null);
    this.setColour(60);
 this.setTooltip("定义不可见控件实体（属性初始化自动完成），函数列表中函数名需与类型定义一致");
 this.setHelpUrl("https://www.yuque.com/appcraft/widget/widgetguide#zrig2");
  }
};

Blockly.Blocks['ivw_invisiblewidget'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("不可见控件");
    this.appendStatementInput("invisibleWidgetTypes")
        .setCheck(null)
        .appendField("类型");
    this.appendStatementInput("invisibleWidgetClass")
        .setCheck(null)
        .appendField("实体");
    this.setColour(0);
 this.setTooltip("定义不可见控件");
 this.setHelpUrl("https://www.yuque.com/appcraft/widget/widgetguide#zrig2");
  }
};