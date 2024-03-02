import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["js_run"] = function (block) {
  var code = block.getFieldValue("CODE") || "console.log(233);";
  return code;
};

javascriptGenerator.forBlock["js_run2"] = function (block) {
  var code = block.getFieldValue("CODE") || "console.log(233)";
  return [code, 0]; // 最高优先级，避免增加无用括号
};

javascriptGenerator.forBlock["js_run_join"] = function (block) {
  var code =
    javascriptGenerator.valueToCode(block, "CODE1", javascriptGenerator.ORDER_NONE) +
    javascriptGenerator.valueToCode(block, "CODE2", javascriptGenerator.ORDER_NONE);
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_usestrict"] = function () {
  let code = '"use strict";\n';
  return code;
};

javascriptGenerator.forBlock["js_bitwise"] = function (block) {
  var value1 = javascriptGenerator.valueToCode(block, "VALUE1", javascriptGenerator.ORDER_NONE) || "0";
  var value2 = javascriptGenerator.valueToCode(block, "VALUE2", javascriptGenerator.ORDER_NONE) || "0";
  var operation_type = block.getFieldValue("TYPE");
  let code = value1 + " " + operation_type + " " + value2;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_comparisons"] = function (block) {
  var value1 = javascriptGenerator.valueToCode(block, "VALUE1", javascriptGenerator.ORDER_NONE) || "0";
  var value2 = javascriptGenerator.valueToCode(block, "VALUE2", javascriptGenerator.ORDER_NONE) || "0";
  var comparisons_type = block.getFieldValue("TYPE");
  let code = value1 + " " + comparisons_type + " " + value2;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_time"] = function (block) {
  var code = block.getFieldValue("TYPE");
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_popup_alert"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || "null";
  var code = `alert(${text});\n`;
  return code;
};

javascriptGenerator.forBlock["js_popup_confirm"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || "null";
  var code = `confirm(${text});`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_popup_prompt"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || "null";
  var code = `prompt(${text})\n`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_json_parse"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || '""';
  var code = `JSON.parse(${text})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_json_stringify"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "OBJECT", javascriptGenerator.ORDER_NONE) || '""';
  var code = `JSON.stringify(${text})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_json_access"] = function (block) {
  var key = javascriptGenerator.valueToCode(block, "KEY", javascriptGenerator.ORDER_NONE) || '""';
  var object = javascriptGenerator.valueToCode(block, "OBJECT", javascriptGenerator.ORDER_NONE) || "{}";
  var code = `${object}[${key}]`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_window_screen"] = function (block) {
  var code = `${block.getFieldValue("TYPE")}`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_window_avail_screen"] = function (block) {
  var code = `${block.getFieldValue("TYPE")}`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_window_depth"] = function () {
  var code = `screen.colorDepth`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_window_pixeldepth"] = function () {
  var code = `screen.pixelDepth`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_navigator_online"] = function () {
  var code = `navigator.onLine`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_navigator_language"] = function () {
  var code = `navigator.language`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_navigator_platform"] = function () {
  var code = `navigator.platform`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_math_constant"] = function (block) {
  var code = block.getFieldValue("TYPE");
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_console_clean"] = function () {
  var code = `console.clear();\n`;
  return code;
};

javascriptGenerator.forBlock["js_console_count"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || '""';
  var code = `console.count(${text});\n`;
  return code;
};

javascriptGenerator.forBlock["js_console_error"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || '""';
  var code = `console.error(${text});\n`;
  return code;
};

javascriptGenerator.forBlock["js_console_warn"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || '""';
  var code = `console.warn(${text});\n`;
  return code;
};

javascriptGenerator.forBlock["js_console_log"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || '""';
  var code = `console.log(${text});\n`;
  return code;
};

javascriptGenerator.forBlock["js_console_time"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || '""';
  var code = `console.time(${text});\n`;
  return code;
};

javascriptGenerator.forBlock["js_console_timeend"] = function (block) {
  var text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || '""';
  var code = `console.timeEnd(${text});\n`;
  return code;
};

javascriptGenerator.forBlock["js_base64"] = function (block) {
  var dropdown_type = block.getFieldValue("TYPE");
  var value_text = javascriptGenerator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE);
  if (dropdown_type == "BM") {
    return [`btoa(encodeURI(${value_text}))`, javascriptGenerator.ORDER_NONE];
  } else {
    return [`decodeURI(atob(${value_text}))`, javascriptGenerator.ORDER_NONE];
  }
};

javascriptGenerator.forBlock["js_ln"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_NONE);
  var code = `Math.log(${value_name})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_uri"] = function (block) {
  var mode = block.getFieldValue("MODE");
  var str = javascriptGenerator.valueToCode(block, "URI", javascriptGenerator.ORDER_NONE) || '""';
  var code = `${mode}(${str})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_replace"] = function (block) {
  var str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_NONE) || '""';
  var str1 = javascriptGenerator.valueToCode(block, "STR1", javascriptGenerator.ORDER_NONE) || '""';
  var mode = block.getFieldValue("MODE");
  var str2 = javascriptGenerator.valueToCode(block, "STR2", javascriptGenerator.ORDER_NONE) || '""';
  var code = `${str}.${mode}(${str1},${str2})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_powerandlower"] = function (block) {
  var mode = block.getFieldValue("MODE");
  var str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_NONE) || '""';
  var code = `(${str}).${mode}`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_with"] = function (block) {
  var str1 = javascriptGenerator.valueToCode(block, "STR1", javascriptGenerator.ORDER_ATOMIC) || '""';
  var str2 = javascriptGenerator.valueToCode(block, "STR2", javascriptGenerator.ORDER_ATOMIC) || '""';
  var mode = block.getFieldValue("MODE");
  var code = `${str1}.${mode}(${str2})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_pad"] = function (block) {
  var str1 = javascriptGenerator.valueToCode(block, "STR1", javascriptGenerator.ORDER_ATOMIC) || '""';
  var str2 = javascriptGenerator.valueToCode(block, "STR2", javascriptGenerator.ORDER_ATOMIC) || '""';
  var length = javascriptGenerator.valueToCode(block, "NUM", javascriptGenerator.ORDER_ATOMIC) || '""';
  var mode = block.getFieldValue("MODE");
  var code = `${str1}.${mode}(${length},${str2})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_escape"] = function (block) {
  var str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_ATOMIC) || '""';
  var mode = block.getFieldValue("MODE");
  var code = `${mode}(${str})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_base"] = function (block) {
  var value_num = javascriptGenerator.valueToCode(block, "NUM", javascriptGenerator.ORDER_ATOMIC);
  var number_base = block.getFieldValue("BASE");
  var code = `(${value_num}).toString(${number_base})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_str_index"] = function (block) {
  var value_str1 = javascriptGenerator.valueToCode(block, "STR1", javascriptGenerator.ORDER_ATOMIC);
  var value_str2 = javascriptGenerator.valueToCode(block, "STR2", javascriptGenerator.ORDER_ATOMIC);
  var operation_type = block.getFieldValue("TYPE");
  var code = `(${value_str1}).${operation_type}${value_str2})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_array_sort"] = function (block) {
  var value_array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_ATOMIC) || "[]";
  return `${value_array}.sort();\n`;
};

javascriptGenerator.forBlock["js_array_reverse"] = function (block) {
  var value_array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_ATOMIC) || "[]";
  return `${value_array}.reverse();\n`;
};

javascriptGenerator.forBlock["js_array_join"] = function (block) {
  var value_array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_ATOMIC) || "[]";
  var value_str = javascriptGenerator.valueToCode(block, "STR", javascriptGenerator.ORDER_ATOMIC);
  return `${value_array}.join(${value_str})`;
};
javascriptGenerator.forBlock["js_function_value"] = function (block) {
  var statements_p = javascriptGenerator.statementToCode(block, "P");
  var statements_c = javascriptGenerator.statementToCode(block, "C");
  var code = `((${statements_p.trim().trim(",")})=>{${statements_c}})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["js_function_run"] = function (block) {
  var value_v = javascriptGenerator.valueToCode(block, "V", javascriptGenerator.ORDER_ATOMIC);
  var statements_p = javascriptGenerator.statementToCode(block, "P");
  var code = `${value_v}(${statements_p.trim().trim(",")});\n`;
  return code;
};

javascriptGenerator.forBlock["js_function_param"] = function (block) {
  var value_name = javascriptGenerator.valueToCode(block, "NAME", javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_name},`;
  return code;
};

javascriptGenerator.forBlock["js_function_param_define"] = function (block) {
  var value_name = block.getFieldValue("NAME");
  var code = `${value_name},`;
  return code;
};
javascriptGenerator.forBlock["js_settimeout"] = function (block) {
  var value_f = javascriptGenerator.valueToCode(block, "F", javascriptGenerator.ORDER_ATOMIC);
  var value_t = javascriptGenerator.valueToCode(block, "T", javascriptGenerator.ORDER_ATOMIC);
  var code = `setTimeout(${value_f},${value_t});\n`;
  return code;
};
javascriptGenerator.forBlock["js_settimeout2"] = function (block) {
  var value_f = javascriptGenerator.valueToCode(block, "F", javascriptGenerator.ORDER_NONE);
  var value_t = javascriptGenerator.valueToCode(block, "T", javascriptGenerator.ORDER_NONE);
  var code = `setTimeout(${value_f},${value_t})`;
  return [code, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator.forBlock["js_setinterval"] = function (block) {
  var value_f = javascriptGenerator.valueToCode(block, "F", javascriptGenerator.ORDER_ATOMIC);
  var value_t = javascriptGenerator.valueToCode(block, "T", javascriptGenerator.ORDER_ATOMIC);
  var code = `setInterval(${value_f},${value_t});\n`;
  return code;
};
javascriptGenerator.forBlock["js_setinterval2"] = function (block) {
  var value_f = javascriptGenerator.valueToCode(block, "F", javascriptGenerator.ORDER_NONE);
  var value_t = javascriptGenerator.valueToCode(block, "T", javascriptGenerator.ORDER_NONE);
  var code = `setInterval(${value_f},${value_t})`;
  return [code, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator.forBlock["js_location"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  var code = `window.location.${dropdown_name}`;
  return [code, javascriptGenerator.ORDER_NONE];
};
