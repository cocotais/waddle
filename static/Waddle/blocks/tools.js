Blockly.Blocks['tools_clip'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldTextInput('标签'), 'tag');
        this.appendStatementInput('codes').setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('工具.积木夹子：方便积木分段，折叠；顶部注释积木夹子标签');
        this.setHelpUrl('');
        this.setColour(BlockColors['loop']);
    }
};

Blockly.Blocks['tools_only_run'] = {
    init: function () {
        this.appendValueInput('codes').setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('工具.仅运行：用于运行有返回值的积木');
        this.setHelpUrl('');
        this.setColour(BlockColors['loop']);
    }
};

Blockly.Blocks['tools_exegesis'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldTextInput('注释'), 'exegesis');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('工具.注释：用于插入单行注释');
        this.setHelpUrl('');
        this.setColour(BlockColors['loop']);
    }
};

