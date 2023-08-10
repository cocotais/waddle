import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";javascriptGenerator['color_import'] = function (block) {
    var code = "const color = require('color');\n";
    return code;
};

javascriptGenerator['color_strobj'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `Color(${value_text})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['color_get'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `${value_text}.${dropdown_type}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['color_gethue'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_text}.getHue()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['color_getsaturation'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_text}.getSaturation()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
