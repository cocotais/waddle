Blockly.JavaScript["color_import"] = function (block) {
  var code = "var color = require('color');\n";
  return code;
};

Blockly.JavaScript['color_strobj'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `Color(${value_text})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_get'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  var code = `${value_text}.${dropdown_type}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_gethue'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${value_text}.getHue()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_getsaturation'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${value_text}.getSaturation()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};