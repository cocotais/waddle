import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["tools_clip"] = function (block) {
  var text_tag = block.getFieldValue("tag");
  var statements_codes = javascriptGenerator.statementToCode(block, "codes");
  var code = "// " + text_tag + "\n" + statements_codes;
  return code + "\n";
};

javascriptGenerator.forBlock["tools_only_run"] = function (block) {
  var value_codes = javascriptGenerator.valueToCode(block, "codes", javascriptGenerator.ORDER_ATOMIC);
  var code = value_codes;
  return code + ";\n";
};

javascriptGenerator.forBlock["tools_exegesis"] = function (block) {
  var text_exegesis = block.getFieldValue("exegesis");
  var code = "// " + text_exegesis + "\n";
  return code;
};

javascriptGenerator.forBlock["tools_dict"] = function (block) {
  var statements_items = javascriptGenerator.statementToCode(block, "items");
  var code = "{" + statements_items + "}";
  return [code, 0];
};

javascriptGenerator.forBlock["tools_list"] = function (block) {
  var statements_items = javascriptGenerator.statementToCode(block, "items");
  var code = "[" + statements_items + "]";
  return [code, 0];
};

javascriptGenerator.forBlock["tools_dictItem"] = function (block) {
  var value_key = javascriptGenerator.valueToCode(block, "key", javascriptGenerator.ORDER_ATOMIC);
  var value_value = javascriptGenerator.valueToCode(block, "value", javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_key}: ${value_value},\n`;
  return code;
};

javascriptGenerator.forBlock["tools_listItem"] = function (block) {
  var value_value = javascriptGenerator.valueToCode(block, "value", javascriptGenerator.ORDER_ATOMIC);
  var code = `$${value_value},\n`;
  return code;
};
