import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";javascriptGenerator["pedometer_import"] = function (block) {
  var code = "const pedometer = require('pedometer');\n";
  return code;
};