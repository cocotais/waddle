Blockly.JavaScript['dict_pair'] = function (block) {
    var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    return ['{' + key + ':' + value + '}', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['dict_set'] = function (block) {
    var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    return 'dict.set(' + key + ',' + value + ');\n';
};

Blockly.JavaScript['dict_get'] = function (block) {
    var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
    return dict + '.get(' + key + ')';
};

Blockly.JavaScript['dict_del'] = function (block) {
    var dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
    if (block.getFieldValue('type') == 'all') {
        return dict + '.clear();\n';
    } else {
        var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
        return 'delete ' + dict + '[' + key + '];\n';
    }
};

Blockly.JavaScript['dict_data'] = function (block) {
    var dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
    if (block.getFieldValue('type') == 'length') {
        return 'Object.keys(' + dict + ').length';
    } else if (block.getFieldValue('type') == 'keys') {
        return dict + '.keys()';
    } else if (block.getFieldValue('type') == 'values') {
        return dict + '.values()';
    }
};

Blockly.JavaScript['dict_has_key'] = function (block) {
    var dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
    var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    return '(' + key + ' in ' + dict + ')';
};

Blockly.JavaScript.dict_create_with = function (a) {
    var b = [];
    for(var  c = 0; c < a.itemCount_; c++) {
        var d = Blockly.JavaScript.valueToCode(a, 'ADD' + c, Blockly.JavaScript.ORDER_COMMA) || 'null';
        b.push(d)
    }
    return ['{' + b.join(', ') + '}', Blockly.JavaScript.ORDER_ATOMIC];
};