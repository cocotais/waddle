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
        this.setOutput(true, 'Node');
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_getelementbyclass'] = {
    init: function () {
        this.appendValueInput('NODE').setCheck('Node').appendField('从');
        this.appendValueInput('CLASS').setCheck(null).appendField('获取class为');
        this.appendDummyInput().appendField('的元素列表');
        this.setOutput(true, 'Array');
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_getelementbytagname'] = {
    init: function () {
        this.appendValueInput('NODE').setCheck('Node').appendField('从');
        this.appendValueInput('TAGNAME').setCheck(null).appendField('获取标签名为');
        this.appendDummyInput().appendField('的元素列表');
        this.setOutput(true, 'Array');
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
