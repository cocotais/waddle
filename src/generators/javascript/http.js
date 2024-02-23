import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["http_import"] = function (block) {
  var code = "const http = require('http');\n";
  return code;
};

javascriptGenerator.forBlock["http_get"] = function (block) {
  var mode = block.getFieldValue("MODE");
  var ok = javascriptGenerator.statementToCode(block, "OK");
  var error = javascriptGenerator.statementToCode(block, "ERROR");
  var url = javascriptGenerator.valueToCode(block, "URL", javascriptGenerator.ORDER_ATOMIC) || "''";
  var code = `http.${mode}(${url},{},{},
   (response) => {
        if (response.data) {
          try {
            ${ok}
          } catch (e) {
            ${error}
          }
        }
      }
    );
`;
  return code;
};

javascriptGenerator.forBlock["http_response"] = function () {
  return ["response", javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["http_responsedropdown"] = function (block) {
  var dropdown_mode = block.getFieldValue("MODE");
  var code = `response.${dropdown_mode}`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["http_error"] = function () {
  return ["e", javascriptGenerator.ORDER_NONE];
};
