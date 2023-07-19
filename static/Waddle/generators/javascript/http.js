Blockly.JavaScript["http_import"] = function (block) {
  var code = "const http = require('http');\n";
  return code;
};

Blockly.JavaScript["http_get"] = function (block) {
  var value_url = Blockly.JavaScript.valueToCode(
    block,
    "URL",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `http.get(${value_url})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};