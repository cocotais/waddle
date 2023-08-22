import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["htmldom_document"] = function (block) {
  var code = "document";
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["html_getelementbyid"] = function (block) {
  var value_node = javascriptGenerator.valueToCode(block, "NODE", javascriptGenerator.ORDER_ATOMIC) || "document";
  var value_id = javascriptGenerator.valueToCode(block, "ID", javascriptGenerator.ORDER_ATOMIC) || "''";
  var code = `${value_node}.getElementById(${value_id})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["html_getelementbyclass"] = function (block) {
  var value_node = javascriptGenerator.valueToCode(block, "NODE", javascriptGenerator.ORDER_ATOMIC) || "document";
  var value_id = javascriptGenerator.valueToCode(block, "CLASS", javascriptGenerator.ORDER_ATOMIC) || "''";
  var code = `${value_node}.getElementByClass(${value_id})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["html_getelementbytagname"] = function (block) {
  var value_node = javascriptGenerator.valueToCode(block, "NODE", javascriptGenerator.ORDER_ATOMIC) || "document";
  var value_id = javascriptGenerator.valueToCode(block, "TAGNAME", javascriptGenerator.ORDER_ATOMIC) || "''";
  var code = `${value_node}.getElementByTagName(${value_id})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["htmldom_appendchild"] = function (block) {
  var value_val1 = javascriptGenerator.valueToCode(block, "VAL1", javascriptGenerator.ORDER_ATOMIC);
  var value_val2 = javascriptGenerator.valueToCode(block, "VAL2", javascriptGenerator.ORDER_ATOMIC) || "document";
  var code = `${value_val2}.appendChild(${value_val1});\n`;
  return code;
};
