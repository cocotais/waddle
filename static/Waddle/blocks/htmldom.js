Blockly.Blocks['htmldom_document'] = {
    init: function () {
        this.appendDummyInput().appendField('文档');
        this.setOutput(true, 'Node');
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_getelementbyid'] = {
    init: function () {
        this.appendValueInput('NODE').setCheck('Node').appendField('从');
        this.appendValueInput('ID').setCheck(null).appendField('获取id为');
        this.appendDummyInput().appendField('的元素');
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
