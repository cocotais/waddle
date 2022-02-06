Blockly.JavaScript["js_usestrict"] = function(block){
    let code = '"use strict";\n';
    return code;
}

Blockly.JavaScript["js_bitwise"] = function(block){
    var value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', Blockly.JavaScript.ORDER_NONE) || "0";
    var value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', Blockly.JavaScript.ORDER_NONE) || "0";
    var operation_type = block.getFieldValue('TYPE');
    let code = value1 + " " + operation_type + " " + value2;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_comparisons"] = function(block){
    var value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', Blockly.JavaScript.ORDER_NONE) || "0";
    var value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', Blockly.JavaScript.ORDER_NONE) || "0";
    var comparisons_type = block.getFieldValue('TYPE');
    let code = value1 + " " + comparisons_type + " " + value2;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_time"] = function(block){
    var code = block.getFieldValue('TYPE');
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_popup_alert"] = function(block){
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "null";
    var code = `alert(${text});\n`;
    return code;
}

Blockly.JavaScript["js_popup_confirm"] = function(block){
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "null";
    var code = `confirm(${text});`;
    return code;
}

Blockly.JavaScript["js_popup_prompt"] = function(block){
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "null";
    var code = `prompt(${text})\n`;
    return code;
}

Blockly.JavaScript["js_json_parse"] = function(block){
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = `JSON.parse(${text})`;
    return [code,Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_json_stringify"] = function(block){
    var text = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = `JSON.stringify(${text})`;
    return [code,Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_json_access"] = function(block){
    var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_NONE) || '""';
    var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || '{}';
    var code = `${object}[${key}]`
    return code;
}