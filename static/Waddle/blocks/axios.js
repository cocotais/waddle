Blockly.Blocks['axios_import'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("引入axios");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#d66e1e');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['axios_getpost_simple'] = {
    init: function () {
        this.appendValueInput("URL")
            .setCheck("String")
            .appendField("使用axios")
            .appendField(new Blockly.FieldDropdown([["get", "get"], ["post", "post"], ["put", "put"], ["delete", "delete"]]), "MODE")
            .appendField("链接");
        this.appendStatementInput("OK")
            .setCheck(null)
            .appendField("当请求完成时");
        this.appendStatementInput("ERROR")
            .setCheck(null)
            .appendField("当请求失败时");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#d66e1e');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['axios_response'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("响应内容");
        this.setOutput(true, null);
        this.setColour('#d66e1e');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['axios_responsedropdown'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("响应内容的")
            .appendField(new Blockly.FieldDropdown([["信息", "data"], ["响应头", "headers"], ["HTTP状态码", "status"], ["HTTP状态信息", "statusText"]]), "MODE");
        this.setOutput(true, null);
        this.setColour('#d66e1e');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['axios_error'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取错误");
        this.setOutput(true, null);
        this.setColour('#d66e1e');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['axios_getpost'] = {
    init: function () {
        this.appendValueInput("URL")
            .setCheck("String")
            .appendField("使用axios")
            .appendField(new Blockly.FieldDropdown([["get", "get"], ["post", "post"], ["put", "put"], ["delete", "delete"]]), "MODE")
            .appendField("链接");
        this.appendStatementInput("PAR")
            .setCheck(null)
            .appendField("请求配置");
        this.appendStatementInput("OK")
            .setCheck(null)
            .appendField("当请求完成时");
        this.appendStatementInput("error")
            .setCheck(null)
            .appendField("当请求失败时");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#d66e1e');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['axios_timeout'] = {
    init: function () {
        this.appendValueInput("NUM")
            .setCheck("Number")
            .appendField("超时限制");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#d66e1e');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['axios_maxcontentlength'] = {
    init: function () {
        this.appendValueInput("NUM")
            .setCheck("Number")
            .appendField("响应内容最大尺寸");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#d66e1e');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['axios_maxcontentlength'] = {
    init: function () {
        this.appendValueInput("NUM")
            .setCheck("Number")
            .appendField("最大重定向次数");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#d66e1e');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
