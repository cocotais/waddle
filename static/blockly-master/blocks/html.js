Blockly.Blocks['html_element'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("标签")
            .appendField(new Blockly.FieldTextInput("p"), "TAG")
            .appendField("内容")
            .appendField(new Blockly.FieldTextInput("你好，世界！"), "INNER");
        this.setOutput(true, "Html");
        this.setColour(60);
        this.setTooltip("一个html元素。");
        this.setHelpUrl("https://www.runoob.com/html/html-intro.html");
    }
};

Blockly.Blocks['html_element_ich'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("标签")
            .appendField(new Blockly.FieldTextInput("p"), "TAG");
        this.appendValueInput("INNER")
            .setCheck("Html")
            .appendField("内容");
        this.setOutput(true, "Html");
        this.setColour(60);
        this.setTooltip("一个html元素，但它的内容可以是HTML元素！！");
        this.setHelpUrl("https://www.runoob.com/html/html-intro.html");
    }
};