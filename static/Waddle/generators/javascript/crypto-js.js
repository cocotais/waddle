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

Blockly.JavaScript["crypto_md5_s"] = function (block) {
  var value_str = Blockly.JavaScript.valueToCode(
    block,
    "STR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `CryptoJS.MD5(${value_str}).toString()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_sha1_s"] = function (block) {
  var value_str = Blockly.JavaScript.valueToCode(
    block,
    "STR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `CryptoJS.SHA1(${value_str}).toString()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_tostr"] = function (block) {
  var value_str = Blockly.JavaScript.valueToCode(
    block,
    "STR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `(${value_str}).toString()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_sha256"] = function (block) {
  var value_str = Blockly.JavaScript.valueToCode(
    block,
    "STR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `CryptoJS.SHA256(${value_str})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript["crypto_sha256_s"] = function (block) {
  var value_str = Blockly.JavaScript.valueToCode(
    block,
    "STR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `CryptoJS.SHA256(${value_str}).toString()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_aes_encrypt"] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(
    block,
    "TEXT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_code = Blockly.JavaScript.valueToCode(
    block,
    "CODE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `CryptoJS.AES.encrypt(${value_text}, ${value_code})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript["crypto_aes_decrypt"] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(
    block,
    "TEXT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_code = Blockly.JavaScript.valueToCode(
    block,
    "CODE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `CryptoJS.AES.decrypt(${value_text}, ${value_code})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_hmacmd5str"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_w = Blockly.JavaScript.valueToCode(
    block,
    "W",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacMD5(${value_name}, ${value_w}).toString()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_hmacsha1str"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_w = Blockly.JavaScript.valueToCode(
    block,
    "W",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA1(${value_name}, ${value_w}).toString()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_hmacsha256str"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_w = Blockly.JavaScript.valueToCode(
    block,
    "W",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA256(${value_name}, ${value_w}).toString()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_hmacsha512str"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_w = Blockly.JavaScript.valueToCode(
    block,
    "W",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA512(${value_name}, ${value_w}).toString()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_hmacmd5"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_w = Blockly.JavaScript.valueToCode(
    block,
    "W",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacMD5(${value_name}, ${value_w})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_hmacsha1"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_w = Blockly.JavaScript.valueToCode(
    block,
    "W",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA1(${value_name}, ${value_w})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_hmacsha256str"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_w = Blockly.JavaScript.valueToCode(
    block,
    "W",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA256(${value_name}, ${value_w})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript["crypto_hmacsha512"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_w = Blockly.JavaScript.valueToCode(
    block,
    "W",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `CryptoJS.HmacSHA512(${value_name}, ${value_w})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_encbase64parse"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `CryptoJS.enc.Base64.parse(${value_name})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_encbase64stringify"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `CryptoJS.enc.Base64.stringify(${value_name})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["crypto_enclatin1parse"] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(
      block,
      "NAME",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `CryptoJS.enc.Latin1.parse(${value_name})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };