Blockly.Blocks['dict_pair'] = {
    init: function () {
        this.appendValueInput('key').setCheck(null).appendField('键');
        this.appendValueInput('value').setCheck(null).appendField('值');
        this.setInputsInline(true);
        this.setOutput(true, 'dict_pair');
        this.setColour(BlockColors['dict']);
        this.setTooltip('生成一个键值对');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['dict_set'] = {
    init: function () {
        this.appendValueInput('dict').setCheck('Dict').appendField('设置字典');
        this.appendValueInput('key').setCheck(null).appendField('键');
        this.appendValueInput('value').setCheck(null).appendField('的值为');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(BlockColors['dict']);
        this.setTooltip('设置一个键值对');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['dict_get'] = {
    init: function () {
        this.appendValueInput('dict').setCheck('Dict').appendField('获取字典');
        this.appendValueInput('key').setCheck(null).appendField('键');
        this.appendDummyInput().appendField('的值');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(BlockColors['dict']);
        this.setTooltip('获取一个键值对');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['dict_del'] = {
    init: function () {
        this.appendValueInput('dict').setCheck('Dict').appendField('(Bug)删除字典');
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ['键为', '_key'],
                ['所有项', 'all']
            ]),
            'type'
        );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // this.setColour(BlockColors["dict"]);
        this.setColour('#ff0000');
        this.setTooltip('删除一个键值对');
        this.setHelpUrl('');
    },
    onchange: function (event) {
        if (this.getFieldValue('type') == '_key') {
            if (!this.getInput('key')) {
                this.appendValueInput('key').setCheck(null);
                this.appendDummyInput('t').appendField('的值');
            }
        } else {
            if (this.getInput('key')) {
                this.removeInput('key');
                this.removeInput('t');
            }
        }
    }
};

Blockly.Blocks['dict_data'] = {
    init: function () {
        this.appendValueInput('dict').setCheck('Dict').appendField('字典');
        // dorpdown for length or keys or values
        this.appendDummyInput()
            .appendField('的')
            .appendField(
                new Blockly.FieldDropdown([
                    ['项数', 'length'],
                    ['所有键', 'keys'],
                    ['所有值', 'values']
                ]),
                'type'
            );
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(BlockColors['dict']);
        this.setTooltip('获取字典的长度、键或值');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['dict_has_key'] = {
    init: function () {
        this.appendValueInput('dict').setCheck('Dict').appendField('字典');
        this.appendValueInput('key').setCheck(null).appendField('键');
        this.appendDummyInput().appendField('是否存在');
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(BlockColors['dict']);
        this.setTooltip('判断字典是否存在某个键');
        this.setHelpUrl('');
    }
};
