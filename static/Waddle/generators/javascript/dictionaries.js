Blockly.JavaScript['dict_pair'] = function (block) {
    var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    return '{' + key + ':' + value + '}';
}