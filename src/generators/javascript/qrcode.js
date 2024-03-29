import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["qrcode_import"] = function () {
  var code = "const qrcode = require('qrcode');\n";
  return code;
};

javascriptGenerator.forBlock["qrcode_tocanvas"] = function (block) {
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_ATOMIC);
  var value_canva = javascriptGenerator.valueToCode(block, "CANVA", javascriptGenerator.ORDER_ATOMIC);
  var statements_name = javascriptGenerator.statementToCode(block, "NAME");
  var code = `qrcode.toCanvas(${value_canva},${value_text}, function (error) {
${statements_name}
})`;
  return code;
};

javascriptGenerator.forBlock["qrcode_err"] = function () {
  var code = "error";
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["qrcode_tocanvas_c"] = function (block) {
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_ATOMIC);
  var statements_name = javascriptGenerator.statementToCode(block, "NAME");
  var code = `qrode.toCanvas(${value_text},function (error, canvas) {
${statements_name}  
})`;
  return code;
};

javascriptGenerator.forBlock["qrcode_canvas"] = function () {
  var code = "canvas";
  return [code, javascriptGenerator.ORDER_NONE];
};
