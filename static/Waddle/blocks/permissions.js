Blockly.Blocks['permissions_get'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('获取权限')
            .appendField(new Blockly.FieldDropdown([['使用this方法获取', 'THIS']]), 'GETTYPE')
            .appendField('获取')
            .appendField(
                new Blockly.FieldDropdown([
                    ['文档(document)', 'document'],
                    ['窗口(window)', 'window'],
                    ['浏览器(navigator)', 'navigator'],
                    ['历史记录(history)', 'history']
                ]),
                'TYPE'
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['permissions_window'] = {
    init: function () {
        this.appendDummyInput().appendField('窗口(window)');
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['permissions_document'] = {
    init: function () {
        this.appendDummyInput().appendField('文档(document)');
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['permissions_navigator'] = {
    init: function () {
        this.appendDummyInput().appendField('浏览器(navigator)');
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['permissions_history'] = {
    init: function () {
        this.appendDummyInput().appendField('历史记录(history)');
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
