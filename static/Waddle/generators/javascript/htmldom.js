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
