Blockly.JavaScript['dict_pair'] = function (block) {
    var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    return '{' + key + ':' + value + '}';
}

Blockly.JavaScript['dict_set'] = function (block) {
    var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    return 'dict.set(' + key + ',' + value + ');\n';
}

Blockly.JavaScript['dict_get'] = function (block) {
    var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    return 'dict.get(' + key + ')';
}

Blockly.JavaScript['dict_del'] = function (block) {
    var dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
    var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    return dict + '.del(' + key + ');\n';
}

Blockly.JavaScript['dict_clear'] = function (block) {
    var dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
    return dict + '.clear();\n';
}

Blockly.JavaScript['dict_len'] = function (block) {
    var dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
    return 'Object.keys(' + dict + ').length';
}

Blockly.JavaScript['dict_keys'] = function (block) {
    var dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
    return 'Object.keys(' + dict + ')';
}

Blockly.JavaScript['dict_values'] = function (block) {
    var dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
    return 'Object.values(' + dict + ')';
}

Blockly.JavaScript['dict_has_key'] = function (block) {
    var dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
    var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    return '(' + key + ' in ' + dict + ')';
}