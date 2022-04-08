Blockly.JavaScript['utils_import'] = function (block) {
    var code = `const utils = require('utils');\n`;
    return code;
};

Blockly.JavaScript['utils_isnative'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'utils.isNative()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};