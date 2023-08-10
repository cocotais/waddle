import Blockly from "blockly";//用的vika图标中的颜色

Blockly.Blocks['vika_import'] = {
    init: function () {
        this.appendDummyInput().appendField('引入vika');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#f88767");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['vika_auth_simple'] = {
    init: function () {
        this.appendDummyInput().appendField('使用vika身份验证');
        this.appendValueInput('token').setCheck('String').appendField('API Token');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#f88767");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['vika_auth'] = {
    init: function () {
        this.appendDummyInput().appendField('使用vika身份验证');
        this.appendValueInput('token').setCheck('String').appendField('API Token');
        this.appendValueInput('fieldKey').setCheck('String').appendField('全局指定field和key');
        this.appendValueInput('requestTimeout').setCheck('String').appendField('超时限制');
        this.appendValueInput('host').setCheck('String').appendField('目标服务器地址');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#f88767");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['vika_all_simple'] = {
    init: function () {
        this.appendDummyInput().appendField('使用vika加载表');
        this.appendValueInput('id').setCheck('String').appendField('表ID');
        this.appendStatementInput('then').setCheck(null).appendField('当获得请求时');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#f88767");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['vika_all'] = {
    init: function () {
        this.appendDummyInput().appendField('使用vika加载表');
        this.appendValueInput('sid').setCheck('String').appendField('表ID');
        this.appendValueInput('id').setCheck('String').appendField('视图ID');
        this.appendValueInput('sort').setCheck('Array').appendField('排序');
        this.appendValueInput('recordids').setCheck('Array').appendField('recordId列表');
        this.appendValueInput('fields').setCheck('Array').appendField('返回字段列表');
        this.appendValueInput('formula').setCheck('Array').appendField('筛选公式');
        this.appendValueInput('maxRecords').setCheck('Number').appendField('返回最大量');
        this.appendDummyInput()
            .appendField('单元格值类型')
            .appendField(
                new Blockly.FieldDropdown([
                    ['JSON', 'json'],
                    ['字符串', 'string']
                ]),
                'cellFormat'
            );
        this.appendValueInput('fieldKey').setCheck('Array').appendField('指定field和key');
        this.appendStatementInput('then').setCheck(null).appendField('当获得请求时');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#f88767");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//古有鹅蛋积木，今有平板积木

Blockly.Blocks['vika_response_success'] = {
    init: function () {
        this.appendDummyInput().appendField('请求是否成功?');
        this.setOutput(true, 'Boolean');
        this.setColour("#f88767");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['vika_response_code'] = {
    init: function () {
        this.appendDummyInput().appendField('请求返回码');
        this.setOutput(true, 'Number');
        this.setColour("#f88767");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['vika_response_message'] = {
    init: function () {
        this.appendDummyInput().appendField('请求返回消息');
        this.setOutput(true, 'String');
        this.setColour("#f88767");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['vika_response_data'] = {
    init: function () {
        this.appendDummyInput().appendField('请求返回数据');
        this.setOutput(true, 'String');
        this.setColour("#f88767");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['vika_sort'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('排序配置')
            .appendField(
                new Blockly.FieldDropdown([
                    ['正序', 'asc'],
                    ['倒序', 'desc']
                ]),
                'sort'
            );
        this.appendValueInput('id').setCheck(null).appendField('列名称或ID');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("#f88767");
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
