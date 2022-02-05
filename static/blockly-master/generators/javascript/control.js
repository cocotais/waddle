/* goog.module('Blockly.JavaScript.control');
goog.require('Blockly.JavaScript');
goog.require('Blockly');
const JavaScript = goog.require('Blockly.JavaScript');
 */
JavaScript["control_invisible_craft"] = function(block) {
    let name = block.getFieldValue('NAME');
    let content = block.getFieldValue('CONTENT');
    let code = "const "+name+" = "+content+";";
    return [code, JavaScript.ORDER_FUNCTION_CALL];
};