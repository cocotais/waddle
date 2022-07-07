Blockly.JavaScript['crypto_import'] = function (block) {
    return `var CryptoJS = require("crypto-js");\n`;
};

Blockly.JavaScript['crypto_md5'] = function (block) {
    var value_str = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `CryptoJS.MD5(${value_str})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['crypto_sha1'] = function (block) {
    var value_str = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `CryptoJS.SHA1(${value_str})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['crypto_md5_s'] = function (block) {
    var value_str = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `CryptoJS.MD5(${value_str}).toString()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['crypto_sha1_s'] = function (block) {
    var value_str = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `CryptoJS.SHA1(${value_str}).toString()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['crypto_tostr'] = function (block) {
    var value_str = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `(${value_str}).toString()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['crypto_sha256'] = function (block) {
    var value_str = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `CryptoJS.SHA256(${value_str})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['crypto_sha256_s'] = function (block) {
    var value_str = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `CryptoJS.SHA256(${value_str}).toString()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
