import { javascriptGenerator } from "blockly/javascript";

javascriptGenerator.forBlock["axios_import"] = function () {
  var code = `const axios = require('axios');\n`;
  return code;
};

javascriptGenerator.forBlock["axios_send"] = function (block) {
  var text_axios_url = block.getFieldValue("axios_url");
  var dropdown_axios_method = block.getFieldValue("axios_method");
  var statements_axios_config = javascriptGenerator.statementToCode(block, "axios_config");
  var statements_axios_response = javascriptGenerator.statementToCode(block, "axios_response");
  var statements_axios_error = javascriptGenerator.statementToCode(block, "axios_error");
  var code = `axios({
  method: '${dropdown_axios_method}',
  url: '${text_axios_url}',
${statements_axios_config}})
.then((response)=>{
${statements_axios_response}})
.catch((error)=>{
${statements_axios_error}})
`;
  return code;
};

javascriptGenerator.forBlock["axios_config_item_valueinput"] = function (block) {
  var dropdown_axios_config_item_valueinput_input_type = block.getFieldValue("axios_config_item_valueinput_input_type");
  var value_axios_config_item_valueinput_input = javascriptGenerator.valueToCode(
    block,
    "axios_config_item_valueinput_input",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `${dropdown_axios_config_item_valueinput_input_type}: ${value_axios_config_item_valueinput_input}
`;
  return code;
};

javascriptGenerator.forBlock["axios_config_item_statementinput"] = function (block) {
  var dropdown_axios_config_item_statementinput_input_type = block.getFieldValue(
    "axios_config_item_statementinput_input_type"
  );
  var statements_axios_config_item_statementinput = javascriptGenerator.statementToCode(
    block,
    "axios_config_item_statementinput"
  );
  var code = `${dropdown_axios_config_item_statementinput_input_type}: ()=>{
${statements_axios_config_item_statementinput}}
`;
  return code;
};

javascriptGenerator.forBlock["axios_error_todo"] = function (block) {
  var statements_error_response = javascriptGenerator.statementToCode(block, "error_response");
  var statements_error_request = javascriptGenerator.statementToCode(block, "error_request");
  var statements_error_other = javascriptGenerator.statementToCode(block, "error_other");
  var code = `if (error.response) {
${statements_error_response}} else if (error.request) {
${statements_error_request}} else {
${statements_error_other}}
`;
  return code;
};

/*javascriptGenerator.forBlock["axios_getpost"] = function (block) {
  var dropdown_mode = block.getFieldValue("MODE");
  var value_url = javascriptGenerator.valueToCode(block, "URL", javascriptGenerator.ORDER_ATOMIC) || "''";
  var value_params = javascriptGenerator.valueToCode(block, "PARAMS", javascriptGenerator.ORDER_ATOMIC) || "";
  var value_head = javascriptGenerator.valueToCode(block, "HEAD", javascriptGenerator.ORDER_ATOMIC) || "";
  var value_body = javascriptGenerator.valueToCode(block, "BODY", javascriptGenerator.ORDER_ATOMIC) || "";
  var statements_ok = javascriptGenerator.statementToCode(block, "OK");
  var statements_error_response = javascriptGenerator.statementToCode(block, "error_response");
  var statements_error_request = javascriptGenerator.statementToCode(block, "error_request");
  var statements_error_other = javascriptGenerator.statementToCode(block, "error_other");
  var code =
    `
axios({
  method:'${dropdown_mode}',
  url:${value_url},
  ` +
    (value_head == ""
      ? ""
      : `headers:${value_head},
  `) +
    (value_params == ""
      ? ""
      : `params:${value_params},
  `) +
    (value_body == ""
      ? ""
      : `body:${value_body},
  `) +
    `
})
.then((response)=>{
  ${statements_ok}
})
.catch((error)=>{
  if (error.response) {
    ${statements_error_response}
  } else if (error.request) {
    ${statements_error_request}
  } else {
    ${statements_error_other}
  }
})
`;
  return code;
};*/
