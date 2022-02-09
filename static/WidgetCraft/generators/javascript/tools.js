
Blockly.JavaScript['tools_blocksClip'] = function (block) {
    var statements_codes = Blockly.JavaScript.statementToCode(block, 'codes');
    var code = statements_codes;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
