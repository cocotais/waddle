import { javascriptGenerator } from "blockly/javascript";

javascriptGenerator.forBlock["axios_import"] = function () {
  var code = `const axios = require('axios');\n`;
  return code;
};

javascriptGenerator.forBlock["axios_send"] = function (block) {
  var value_axios_url = javascriptGenerator.valueToCode(block, "axios_url", javascriptGenerator.ORDER_ATOMIC);
  var dropdown_axios_method = block.getFieldValue("axios_method");
  var statements_axios_config = javascriptGenerator.statementToCode(block, "axios_config");
  var statements_axios_response = javascriptGenerator.statementToCode(block, "axios_response");
  var statements_axios_error = javascriptGenerator.statementToCode(block, "axios_error");
  var code = `axios({
  method: '${dropdown_axios_method}',
  url: ${value_axios_url},
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
  var code = `${dropdown_axios_config_item_valueinput_input_type}: ${value_axios_config_item_valueinput_input},
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
${statements_axios_config_item_statementinput}},
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

javascriptGenerator["axios_response_all"] = function (block) {
  var code = "response";
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator["axios_response_items"] = function (block) {
  var dropdown_axios_response_item = block.getFieldValue("axios_response_item");
  var code = `response.${dropdown_axios_response_item}`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator["axios_error_all"] = function (block) {
  var code = "error";
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator["axios_error_items"] = function (block) {
  var dropdown_axios_error_item = block.getFieldValue("axios_error_item");
  var code = `error.${dropdown_axios_error_item}`;
  return [code, javascriptGenerator.ORDER_NONE];
};
