Blockly.Blocks['ivw_invisiblewidget'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("不可见控件");
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
            .appendField("（对应的函数也写这，仅限积木编辑器）方法");
        this.appendValueInput("event")
            .setCheck(["event", "Array"])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("事件");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("不可见控件实体");
        this.appendStatementInput("constructor")
            .setCheck(null)
            .appendField("构造器");
        this.appendValueInput("functionsList")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("函数列表（方法的对应函数写到类型定义中）");
        this.setColour(0);
        this.setTooltip("定义不可见控件");
        this.setHelpUrl("https://www.yuque.com/coco-central/widget/widgetguide#zrig2");
    }
};