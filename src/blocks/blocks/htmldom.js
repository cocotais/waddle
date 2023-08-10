//使用的是w3c图标中的颜色
import Blockly from "blockly";
Blockly.Blocks['htmldom_document'] = {
    init: function () {
        this.appendDummyInput().appendField('文档');
        this.setOutput(true, 'Node');
        this.setColour("#a073ff");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_getelementbyid'] = {
    init: function () {
        this.appendValueInput('NODE').setCheck('Node').appendField('从');
        this.appendValueInput('ID').setCheck(null).appendField('获取编号为');
        this.appendDummyInput().appendField('的元素');
        this.setOutput(true, 'Node');
        this.setColour("#a073ff");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_getelementbyclass'] = {
    init: function () {
        this.appendValueInput('NODE').setCheck('Node').appendField('从');
        this.appendValueInput('CLASS').setCheck(null).appendField('获取类为');
        this.appendDummyInput().appendField('的元素列表');
        this.setOutput(true, 'Array');
        this.setColour("#a073ff");
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
        this.setColour("#a073ff");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['htmldom_appendchild'] = {
    init: function () {
        this.appendValueInput('VAL1').setCheck(null).appendField('将');
        this.appendValueInput('VAL2').setCheck(null).appendField('添加到');
        this.appendDummyInput().appendField('的子元素的末尾');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#a073ff");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
