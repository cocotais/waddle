
Blockly.JavaScript['tools_blocks_clip'] = function (block) {
    var text_tag = block.getFieldValue('tag');
    var statements_codes = Blockly.JavaScript.statementToCode(block, 'codes');
    var code = '// ' + text_tag + '\n' + statements_codes;
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
    return code;
  };
