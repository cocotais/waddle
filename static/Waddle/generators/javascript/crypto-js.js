Blockly.JavaScript["crypto_import"] = function (block) {
  return `var CryptoJS = require("crypto-js");\n`;
};

Blockly.JavaScript["crypto_md5"] = function (block) {
  var value_str = Blockly.JavaScript.valueToCode(
    block,
    "STR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `CryptoJS.MD5(${value_str})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
