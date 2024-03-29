import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["color_import"] = function () {
  var code = "const color = require('color');\n";
  return code;
};

javascriptGenerator.forBlock["color_strobj"] = function (block) {
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_ATOMIC);
  var code = `Color(${value_text})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["color_get"] = function (block) {
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue("TYPE");
  var code = `${value_text}.${dropdown_type}`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["color_gethue"] = function (block) {
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_text}.getHue()`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["color_getsaturation"] = function (block) {
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_text}.getSaturation()`;
  return [code, javascriptGenerator.ORDER_NONE];
};
