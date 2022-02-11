
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

Blockly.JavaScript['ivw_itemIcon'] = function (block) {
    var text_icon = block.getFieldValue('icon');
    var code = `icon: "${text_icon}",\n`;
    return code;
};

Blockly.JavaScript['ivw_itemTitle'] = function (block) {
    var text_title = block.getFieldValue('title');
    var code = `title: "${text_title}",\n`;
    return code;
};

Blockly.JavaScript['ivw_itemVersion'] = function (block) {
    var text_title = block.getFieldValue('version');
    var code = `version: "${text_title}",\n`;
    return code;
};

Blockly.JavaScript['ivw_itemIsGlobalWidget'] = function (block) {
    var checkbox_name = block.getFieldValue('isGlobalWidget') === 'TRUE';
    var code = `isGlobalWidget: ${checkbox_name},\n`;
    return code;
};
