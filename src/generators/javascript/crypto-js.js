import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["crypto_import"] = function () {
  return `var CryptoJS = require("crypto-js");\n`;
};

javascriptGenerator.forBlock["crypto_md5"] = function (block) {
  var value_str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.MD5(${value_str})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_sha1"] = function (block) {
  var value_str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.SHA1(${value_str})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_md5_s"] = function (block) {
  var value_str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.MD5(${value_str}).toString()`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_sha1_s"] = function (block) {
  var value_str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.SHA1(${value_str}).toString()`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_tostr"] = function (block) {
  var value_str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_ATOMIC);
  var code = `(${value_str}).toString()`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_sha256"] = function (block) {
  var value_str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.SHA256(${value_str})`;
  return [code, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator.forBlock["crypto_sha256_s"] = function (block) {
  var value_str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.SHA256(${value_str}).toString()`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_aes_encrypt"] = function (block) {
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_ATOMIC);
  var value_code = javascriptGenerator.valueToCode(block, "CODE", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.AES.encrypt(${value_text}, ${value_code})`;
  return [code, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator.forBlock["crypto_aes_decrypt"] = function (block) {
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_ATOMIC);
  var value_code = javascriptGenerator.valueToCode(block, "CODE", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.AES.decrypt(${value_text}, ${value_code})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_des_encrypt"] = function (block) {
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_ATOMIC);
  var value_code = javascriptGenerator.valueToCode(block, "CODE", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.DES.encrypt(${value_text}, ${value_code})`;
  return [code, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator.forBlock["crypto_des_decrypt"] = function (block) {
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_ATOMIC);
  var value_code = javascriptGenerator.valueToCode(block, "CODE", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.DES.decrypt(${value_text}, ${value_code})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_hmacmd5str"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var value_w = javascriptGenerator.valueToCode(block, "W", javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacMD5(${value_name}, ${value_w}).toString()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_hmacsha1str"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var value_w = javascriptGenerator.valueToCode(block, "W", javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA1(${value_name}, ${value_w}).toString()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_hmacsha256str"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var value_w = javascriptGenerator.valueToCode(block, "W", javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA256(${value_name}, ${value_w}).toString()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_hmacsha512str"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var value_w = javascriptGenerator.valueToCode(block, "W", javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA512(${value_name}, ${value_w}).toString()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_hmacmd5"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var value_w = javascriptGenerator.valueToCode(block, "W", javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacMD5(${value_name}, ${value_w})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_hmacsha1"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var value_w = javascriptGenerator.valueToCode(block, "W", javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA1(${value_name}, ${value_w})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_hmacsha256str"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var value_w = javascriptGenerator.valueToCode(block, "W", javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA256(${value_name}, ${value_w})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator.forBlock["crypto_hmacsha512"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var value_w = javascriptGenerator.valueToCode(block, "W", javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA512(${value_name}, ${value_w})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_encbase64parse"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.enc.Base64.parse(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_encbase64stringify"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.enc.Base64.stringify(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_enclatin1parse"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.enc.Latin1.parse(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_enclatin1stringify"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.enc.Latin1.stringify(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator.forBlock["crypto_enchexparse"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.enc.Hex.parse(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_enchexstringify"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.enc.Hex.stringify(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_encutf8parse"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.enc.Utf8.parse(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_encutf8stringify"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.enc.Utf8.stringify(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_encutf16parse"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.enc.Utf16.parse(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_encutf16stringify"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `CryptoJS.enc.Utf16.stringify(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["crypto_createuuid"] = function () {
  var code = `crypto.randomUUID()`;
  return [code, javascriptGenerator.ORDER_NONE];
};
