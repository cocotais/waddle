import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["pedometer_import"] = function () {
  var code = "const pedometer = require('pedometer');\n";
  return code;
};
