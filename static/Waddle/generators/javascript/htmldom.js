Blockly.JavaScript['htmldom_document'] = function (block) {
    var code = 'document';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['html_getelementbyid'] = function (block) {
    var value_node = Blockly.JavaScript.valueToCode(block, 'NODE', Blockly.JavaScript.ORDER_ATOMIC) || 'document';
    var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) || "''";
    var code = `${value_node}.getElementById(${value_id})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['html_getelementbyclass'] = function (block) {
    var value_node = Blockly.JavaScript.valueToCode(block, 'NODE', Blockly.JavaScript.ORDER_ATOMIC) || 'document';
    var value_id = Blockly.JavaScript.valueToCode(block, 'CLASS', Blockly.JavaScript.ORDER_ATOMIC) || "''";
    var code = `${value_node}.getElementByClass(${value_id})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['html_getelementbytagname'] = function (block) {
    var value_node = Blockly.JavaScript.valueToCode(block, 'NODE', Blockly.JavaScript.ORDER_ATOMIC) || 'document';
    var value_id = Blockly.JavaScript.valueToCode(block, 'TAGNAME', Blockly.JavaScript.ORDER_ATOMIC) || "''";
    var code = `${value_node}.getElementByTagName(${value_id})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
