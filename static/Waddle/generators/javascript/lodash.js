Blockly.JavaScript['lodash_import'] = function () {
    var code = `const lodash = require('lodash');\n`;
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

Blockly.JavaScript['lodash_differenceby'] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "[]";
    var mode = block.getFieldValue("ITERATEE")
    let code = `lodash.differenceBy(${array}, ${value}, ${mode})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['lodash_differencewithdropdown'] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "[]";
    var mode = block.getFieldValue("COMPARATOR")
    let code = `lodash.differenceWith(${array}, ${value}, ${mode})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['lodash_differencewith'] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "[]";
    var mode = block.getFieldValue("COMPARATOR")
    let code = `lodash.differenceWith(${array}, ${value}, ${mode})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['lodash_drop'] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "0";
    let code = `lodash.drop(${array}, ${value})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['lodash_dropright'] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "0";
    let code = `lodash.dropRight(${array}, ${value})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['lodash_dropwhiledropdown'] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var pre = block.getFieldValue('PRE');
    let code = `lodash.dropWhile(${array}, ${pre})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['lodash_droprightwhiledropdown'] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var pre = block.getFieldValue('PRE');
    let code = `lodash.dropRightWhile(${array}, ${pre})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['lodash_dropwhile'] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var pre = block.getFieldValue('PRE');
    let code = `lodash.dropWhile(${array}, ${pre})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['lodash_droprightwhile'] = function (block) {
    var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || "[]";
    var pre = block.getFieldValue('PRE');
    let code = `lodash.dropRightWhile(${array}, ${pre})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}