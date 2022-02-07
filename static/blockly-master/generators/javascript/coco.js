Blockly.JavaScript['coco_emit'] = function (block) {
    var text_eventname = block.getFieldValue('eventName');
    var value_parameters = Blockly.JavaScript.valueToCode(block, 'parameters', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    value_parameters = value_parameters.substring(1, value_parameters.length - 1)
    var code = `this.emit('${text_eventname}'${'' === value_parameters ? '' : ',' + value_parameters});`;
    return code;
};

Blockly.JavaScript['coco_property'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var dropdown_valuetype = block.getFieldValue('valueType');
    var text_default = block.getFieldValue('default');
    // TODO: Assemble JavaScript into code variable.
    var code = `
{
    "key": "${text_key}",
    "label": "${text_label}",
    "valueType": "${dropdown_valuetype}",
    "defaultValue": "${text_default}"
}
`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coco_method'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var value_params = Blockly.JavaScript.valueToCode(block, 'params', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_function_1 = Blockly.JavaScript.statementToCode(block, 'function_1');
    // TODO: Assemble JavaScript into code variable.
    var json = JSON.parse(value_params)
    var func_params = ''
    json.forEach(element => {
        console.log(element)
        func_params = func_params.concat(element?element['key'] + ',':'')
    });
    var code = `
{
    "key": "${text_key}",
    "label": "${text_label}",
    "params": ${value_params}
}
----#不怎么华丽的分割线#----
${text_key} (${'' === func_params ? '' :func_params.substring(0,func_params.length-1)}) {
    ${statements_function_1}
}
----#不怎么华丽的分割线#----
`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coco_method_return'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var dropdown_valuetype = block.getFieldValue('valueType');
    var value_params = Blockly.JavaScript.valueToCode(block, 'params', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_function_1 = Blockly.JavaScript.statementToCode(block, 'function_1');
    // TODO: Assemble JavaScript into code variable.
    var json = JSON.parse(value_params)
    var func_params = ''
    json.forEach(element => {
        console.log(element)
        func_params = func_params.concat(element?element['key'] + ',':'')
    });
    var code = `
{
    "key": "${text_key}",
    "label": "${text_label}",
    "valueType": "${dropdown_valuetype}",
    "params": ${value_params}
}
----#不怎么华丽的分割线#----
${text_key} (${'' === func_params ? '' :func_params.substring(0,func_params.length-1)}) {
    ${statements_function_1}
}
----#不怎么华丽的分割线#----
`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coco_method_parameter'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var text_labelafter = block.getFieldValue('labelAfter');
    var dropdown_valuetype = block.getFieldValue('valueType');
    var text_default = block.getFieldValue('default');
    // TODO: Assemble JavaScript into code variable.
    var code = `
{
    "key": "${text_key}",
    "label": "${text_label}",
    "labelAfter": "${text_labelafter}",
    "valueType": "${dropdown_valuetype}",
    "defaultValue": "${text_default}"
}
`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coco_event'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var value_params = Blockly.JavaScript.valueToCode(block, 'params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
{
    "key": "${text_key}",
    "label": "${text_label}",
    "params": ${value_params}
}
`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coco_event_parameter'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var dropdown_valuetype = block.getFieldValue('valueType');
    // TODO: Assemble JavaScript into code variable.
    var code = `
{
    "key": "${text_key}",
    "label": "${text_label}",
    "valueType": "${dropdown_valuetype}",
}
`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coco_return'] = function (block) {
    var value_parameters = Blockly.JavaScript.valueToCode(block, 'parameters', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `return ${value_parameters};\n`;
    return code;
};