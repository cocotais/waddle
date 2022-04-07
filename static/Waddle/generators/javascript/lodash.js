Blockly.JavaScript['lodash_import'] = function () {
    var code = `const lodash = require('lodash');`;
    return code;
};

Blockly.JavaScript["lodash_chunk"] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var size = Blockly.JavaScript.valueToCode(block, 'SIZE', Blockly.JavaScript.ORDER_NONE) || "1";
    let code = `lodash.chunk(${array}, ${size})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["lodash_compact"] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    let code = `lodash.compact(${array})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["lodash_concat"] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "1";
    let code = `lodash.concat(${array}, ${value})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["lodash_difference"] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "[]";
    let code = `lodash.difference(${array}, ${value})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['lodash_differencebydropdown'] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "[]";
    var mode = block.getFieldValue("ITERATEE")
    let code = `lodash.differenceBy(${array}, ${value}, ${mode})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}