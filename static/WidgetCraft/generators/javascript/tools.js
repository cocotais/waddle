
Blockly.JavaScript['tools_blocks_clip'] = function (block) {
    var value_exegesis = Blockly.JavaScript.valueToCode(block, 'exegesis', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_codes = Blockly.JavaScript.statementToCode(block, 'codes');
    var code = value_exegesis + statements_codes;
    return code + '\n';
};


Blockly.JavaScript['tools_only_run'] = function (block) {
    var value_codes = Blockly.JavaScript.valueToCode(block, 'codes', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_codes;
    return code + ';\n';
};

Blockly.JavaScript['tools_exegesis'] = function(block) {
    var text_exegesis = block.getFieldValue('exegesis');
    var code = '// ' + text_exegesis + '\n'
    return [code, 0];
  };
