import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["axios_import"] = function () {
  var code = `const axios = require('axios');\n`;
  return code;
};

javascriptGenerator.forBlock["axios_getpost_simple"] = function (block) {
  var mode = block.getFieldValue("MODE");
  var ok = javascriptGenerator.statementToCode(block, "OK");
  var error = javascriptGenerator.statementToCode(block, "ERROR");
  var url = javascriptGenerator.valueToCode(block, "URL", javascriptGenerator.ORDER_ATOMIC) || "''";
  var code = `axios.${mode}(${url})
  .then((response) => {
  ${ok}
  })
  .catch((error) => {
  ${error}
  });
`;
  return code;
};

javascriptGenerator.forBlock["axios_response"] = function () {
  return ["response", javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["axios_responsedropdown"] = function (block) {
  var dropdown_mode = block.getFieldValue("MODE");
  var code = `response.${dropdown_mode}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["axios_error"] = function () {
  return ["error", javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["axios_getpost"] = function (block) {
  var dropdown_mode = block.getFieldValue('MODE');
  var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
  var value_head = Blockly.JavaScript.valueToCode(block, 'HEAD', Blockly.JavaScript.ORDER_ATOMIC) || ''
  var value_body = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC) || ''
  if (value_body != '') {
    const params = new URLSearchParams();
    for (const key in value_body) {
      if (data.hasOwnProperty(key)) {
        params.append(key, value_body[key]);
      }
    }
    var value_body = params.toString();
  }

  var statements_ok = Blockly.JavaScript.statementToCode(block, 'OK');
  var statements_error = Blockly.JavaScript.statementToCode(block, 'error');
  var code = `
axios({
  method:'${dropdown_mode}',
  url:'${value_url}?${value_body}'
  `+ value_head == '' ? '' : `
  headers:{
    ${value_head}
  }
  `+ `
})
.then((response)=>{
  ${statements_ok}
})
.catch((error)=>{
  ${statements_error}
})
`;
  return code;
};
/*
javascriptGenerator.forBlock["axios_timeout"] = function (block) {
  var value_num = javascriptGenerator.valueToCode(block, "NUM", javascriptGenerator.ORDER_ATOMIC) || "0";
  var code = `timeout: ${value_num},\n`;
  return code;
};

javascriptGenerator.forBlock["axios_maxcontentlength"] = function (block) {
  var value_num = javascriptGenerator.valueToCode(block, "NUM", javascriptGenerator.ORDER_ATOMIC) || "0";
  var code = `maxContentLength: ${value_num},\n`;
  return code;
};

javascriptGenerator.forBlock["axios_data"] = function (block) {
  var value_num = javascriptGenerator.valueToCode(block, "NUM", javascriptGenerator.ORDER_ATOMIC) || "0";
  var code = `data: ${value_num},\n`;
  return code;
};

javascriptGenerator.forBlock["axios_withcredentials"] = function (block) {
  var checkbox_name = block.getFieldValue("NAME") === "TRUE";
  var code = `withCredentials: ${checkbox_name},\n`;
  return code;
};
*/