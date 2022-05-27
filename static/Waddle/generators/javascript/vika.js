Blockly.JavaScript["vika_import"] = function (block) {
  var code = "var vika = require('@vikadata/vika').default;\n";
  return code;
};

Blockly.JavaScript["vika_auth_simple"] = function (block) {
  var value_token = Blockly.JavaScript.valueToCode(
    block,
    "token",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `vika.auth({token:${value_token}});\n`;
  return code;
};

Blockly.JavaScript["vika_auth"] = function (block) {
  var value_token = Blockly.JavaScript.valueToCode(
    block,
    "token",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_fieldkey = Blockly.JavaScript.valueToCode(
    block,
    "fieldKey",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_requesttimeout = Blockly.JavaScript.valueToCode(
    block,
    "requestTimeout",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_host = Blockly.JavaScript.valueToCode(
    block,
    "host",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `vika.auth({
  token: ${value_token},
  fieldKey: ${value_fieldkey},
  requestTimeout: ${value_requesttimeout},
  host: ${value_host},
});`;
  return code;
};

Blockly.JavaScript["vika_all_simple"] = function (block) {
  var value_id = Blockly.JavaScript.valueToCode(
    block,
    "id",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_then = Blockly.JavaScript.statementToCode(block, "then");
  var code = `vika.datasheet(${value_id})
  .all({})
  .then(response => {
${statements_then}
});`;
  return code;
};
Blockly.JavaScript["vika_all"] = function (block) {
  var value_sid = Blockly.JavaScript.valueToCode(
    block,
    "sid",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_id = Blockly.JavaScript.valueToCode(
    block,
    "id",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_sort = Blockly.JavaScript.valueToCode(
    block,
    "sort",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_recordids = Blockly.JavaScript.valueToCode(
    block,
    "recordids",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_fields = Blockly.JavaScript.valueToCode(
    block,
    "fields",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_formula = Blockly.JavaScript.valueToCode(
    block,
    "formula",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_maxrecords = Blockly.JavaScript.valueToCode(
    block,
    "maxRecords",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var dropdown_cellformat = block.getFieldValue("cellFormat");
  var value_fieldkey = Blockly.JavaScript.valueToCode(
    block,
    "fieldKey",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_then = Blockly.JavaScript.statementToCode(block, "then");
  // TODO: Assemble JavaScript into code variable.
  var code = `Vika.datasheet(${value_sid})
  .all({
    viewId: ${value_id},
    sort: ${value_sort},
    recordIds: ${value_recordids},
    fields: ${value_fields},
    filterByFormula: ${value_formula},
    maxRecords: ${value_maxrecords},
    cellFormat: ${dropdown_cellformat},
    fieldKey: ${value_fieldkey},})
  .then(response => {
  ${statements_then}
});
`;
  return code;
};

Blockly.JavaScript["vika_response_success"] = function (block) {
  var code = "response.success";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["vika_response_code"] = function (block) {
  var code = "response.code";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["vika_response_message"] = function (block) {
  var code = "response.message";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["vika_response_data"] = function (block) {
  var code = "response.data";
  return [code, Blockly.JavaScript.ORDER_NONE];
};