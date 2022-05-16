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

Blockly.JavaScript["crypto_sha1"] = function (block) {
  var value_str = Blockly.JavaScript.valueToCode(
    block,
    "STR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `CryptoJS.SHA1(${value_str})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_tostr"] = function (block) {
  var value_str = Blockly.JavaScript.valueToCode(
    block,
    "STR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `(${value_str}).toString()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
