Blockly.JavaScript["js_run"] = function (block) {
    var code = block.getFieldValue("CODE")+'\n';
    return code
}

Blockly.JavaScript["js_usestrict"] = function (block) {
    let code = '"use strict";\n';
    return code;
}

Blockly.JavaScript["js_bitwise"] = function (block) {
    var value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', Blockly.JavaScript.ORDER_NONE) || "0";
    var value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', Blockly.JavaScript.ORDER_NONE) || "0";
    var operation_type = block.getFieldValue('TYPE');
    let code = value1 + " " + operation_type + " " + value2;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_comparisons"] = function (block) {
    var value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', Blockly.JavaScript.ORDER_NONE) || "0";
    var value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', Blockly.JavaScript.ORDER_NONE) || "0";
    var comparisons_type = block.getFieldValue('TYPE');
    let code = value1 + " " + comparisons_type + " " + value2;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_time"] = function (block) {
    var code = block.getFieldValue('TYPE');
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_popup_alert"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "null";
    var code = `alert(${text});\n`;
    return code;
}

Blockly.JavaScript["js_popup_confirm"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "null";
    var code = `confirm(${text});`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_popup_prompt"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "null";
    var code = `prompt(${text})\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_json_parse"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = `JSON.parse(${text})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_json_stringify"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = `JSON.stringify(${text})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_json_access"] = function (block) {
    var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_NONE) || '""';
    var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || '{}';
    var code = `${object}[${key}]`
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_window_screen"] = function (block) {
    var code = block.getFieldValue("TYPE");
    return [code, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['js_window_avail_screen'] = function (block) {
    var code = block.getFieldValue("TYPE");
    return [code, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['js_window_depth'] = function (block) {
    var code = `screen.colorDepth`;
    return [code, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['js_window_pixeldepth'] = function (block) {
    var code = `screen.pixelDepth`;
    return [code, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['js_navigator_online'] = function (block) {
    var code = `navigator.onLine`;
    return [code, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['js_navigator_language'] = function (block) {
    var code = `navigator.language`;
    return [code, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['js_navigator_platform'] = function (block) {
    var code = `navigator.platform`;
    return [code, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['js_math_constant'] = function (block) {
    var code = block.getFieldValue("TYPE");
    return [code, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript["js_console_clean"] = function (block) {
    var code = `console.clean();\n`;
    return code;
}

Blockly.JavaScript["js_console_count"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = `console.count(${text});\n`
    return code
}

Blockly.JavaScript["js_console_error"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = `console.error(${text});\n`;
    return code;
}

Blockly.JavaScript["js_console_warn"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = `console.warn(${text});\n`
    return code;
}

Blockly.JavaScript["js_console_log"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = `console.log(${text});\n`;
    return code;
}

Blockly.JavaScript["js_console_time"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = `console.time(${text});\n`;
    return code;
}

Blockly.JavaScript["js_console_timeend"] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = `console.timeEnd(${text});\n`;
    return code;
}

Blockly.JavaScript['js_base64'] = function (block) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE);
    if (dropdown_type == "BM") {
        return `btoa(encodeURI(${value_text}))`
    } else {
        return `decodeURI(atob(${value_text}))`
    }
};

Blockly.JavaScript['js_ln'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var code = `Math.log(${value_name})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["js_uri"] = function (block) {
    var mode = block.getFieldValue("MODE")
    var str = Blockly.JavaScript.valueToCode(block, "URI", Blockly.JavaScript.ORDER_NONE) || '""'
    var code = `${mode}(${str})`
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_replace"] = function (block) {
    var str = Blockly.JavaScript.valueToCode(block, "STR", Blockly.JavaScript.ORDER_NONE) || '""'
    var str1 = Blockly.JavaScript.valueToCode(block, "STR1", Blockly.JavaScript.ORDER_NONE) || '""'
    var str2 = Blockly.JavaScript.valueToCode(block, "STR2", Blockly.JavaScript.ORDER_NONE) || '""'
    var code = `(${str}).replace(${str1},${str2})`
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_powerandlower"] = function (block) {
    var mode = block.getFieldValue("MODE")
    var str = Blockly.JavaScript.valueToCode(block, "STR", Blockly.JavaScript.ORDER_NONE) || '""'
    var code = `(${str}).${mode}`
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['js_with'] = function (block) {
    var str1 = Blockly.JavaScript.valueToCode(block, 'STR1', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    var str2 = Blockly.JavaScript.valueToCode(block, 'STR2', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    var mode = block.getFieldValue('MODE');
    var code = `${str1}.${mode}(${str2})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["js_pad"] = function (block) {
    var str1 = Blockly.JavaScript.valueToCode(block, 'STR1', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    var str2 = Blockly.JavaScript.valueToCode(block, 'STR2', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    var length = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    var mode = block.getFieldValue('MODE');
    var code = `${str1}.${mode}(${length},${str2})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript["js_escape"] = function (block) {
    var str = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    var mode = block.getFieldValue('MODE');
    var code = `${mode}(${str})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['js_base'] = function (block) {
    var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC);
    var number_base = block.getFieldValue('BASE');
    // TODO: Assemble JavaScript into code variable.
    var code = `(${value_num}).toString(${number_base})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['js_str_index'] = function (block) {
    var value_str1 = Blockly.JavaScript.valueToCode(block, 'STR1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_str2 = Blockly.JavaScript.valueToCode(block, 'STR2', Blockly.JavaScript.ORDER_ATOMIC);
    var operation_type = block.getFieldValue('TYPE');
    var code = `(${value_str1}).${operation_type}${value_str2})`
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['js_array_sort'] = function (block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || "[]";
    return `${value_array}.sort();\n`;
};

Blockly.JavaScript['js_array_reverse'] = function (block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || "[]";
    return `${value_array}.reverse();\n`;
};

Blockly.JavaScript['js_array_join'] = function (block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC) || "[]";
    var value_str = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_array}.join(${value_str})`;
};