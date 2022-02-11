
Blockly.JavaScript['ivw_defTypes'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'types');
    var code = `

const types = {
    ${statements_name}
}

`;
    return code;
};

Blockly.JavaScript['ivw_itemType'] = function (block) {
    var text_type = block.getFieldValue('type');
    var code = `type: "${text_type}",\n`;
    return code;
};
