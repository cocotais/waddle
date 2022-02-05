Blockly.JavaScript["js_usestrict"] = function(block){
    let code = '"use strict";'
    return code
}

Blockly.JavaScript["js_bitwise"] = function(block){
    var value1 = block.getFieldValue('VALUE1');
    var value2 = block.getFieldValue('VALUE2');
    var operation_type = block.getFieldValue('TYPE');
    let code = value1 + " " + operation_type + " " + value2;
    return code;
}

Blockly.JavaScript["js_comparisons"] = function(block){
    var value1 = block.getFieldValue('VALUE1');
    var value2 = block.getFieldValue('VALUE2');
    var comparisons_type = block.getFieldValue('TYPE');
    let code = value1 + " " + comparisons_type + " " + value2
    return code;
}

Blockly.JavaScript["js_time"] = function(block){
    var code = block.getFieldValue('TYPE');
    return code;
}

Blockly.JavaScript["js_popup_alert"] = function(block){
    var text = block.getFieldValue('TEXT');
    var code = 'alert("'+text+'");';
    return code;
}

Blockly.JavaScript["js_popup_confirm"] = function(block){
    var text = block.getFieldValue('TEXT');
    var code = 'confirm("'+text+'")';
    return code;
}

Blockly.JavaScript["js_popup_prompt"] = function(block){
    var text = block.getFieldValue('TEXT');
    var code = 'prompt("'+text+'")';
    return code;
}