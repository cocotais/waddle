import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";javascriptGenerator['vika_import'] = function (block) {
    var code = "const vika = require('@vikadata/vika').default;\n";
    return code;
};

javascriptGenerator['vika_auth_simple'] = function (block) {
    var value_token = javascriptGenerator.valueToCode(block, 'token', javascriptGenerator.ORDER_ATOMIC);
    var code = `vika.auth({token:${value_token}});\n`;
    return code;
};

javascriptGenerator['vika_auth'] = function (block) {
    var value_token = javascriptGenerator.valueToCode(block, 'token', javascriptGenerator.ORDER_ATOMIC);
    var value_fieldkey = javascriptGenerator.valueToCode(block, 'fieldKey', javascriptGenerator.ORDER_ATOMIC);
    var value_requesttimeout = javascriptGenerator.valueToCode(block, 'requestTimeout', javascriptGenerator.ORDER_ATOMIC);
    var value_host = javascriptGenerator.valueToCode(block, 'host', javascriptGenerator.ORDER_ATOMIC);
    var code = `vika.auth({
  token: ${value_token},
  fieldKey: ${value_fieldkey},
  requestTimeout: ${value_requesttimeout},
  host: ${value_host},
});`;
    return code;
};

javascriptGenerator['vika_all_simple'] = function (block) {
    var value_id = javascriptGenerator.valueToCode(block, 'id', javascriptGenerator.ORDER_ATOMIC);
    var statements_then = javascriptGenerator.statementToCode(block, 'then');
    var code = `vika.datasheet(${value_id})
  .all({})
  .then(response => {
${statements_then}
});`;
    return code;
};
javascriptGenerator['vika_all'] = function (block) {
    var value_sid = javascriptGenerator.valueToCode(block, 'sid', javascriptGenerator.ORDER_ATOMIC);
    var value_id = javascriptGenerator.valueToCode(block, 'id', javascriptGenerator.ORDER_ATOMIC);
    var value_sort = javascriptGenerator.valueToCode(block, 'sort', javascriptGenerator.ORDER_ATOMIC);
    var value_recordids = javascriptGenerator.valueToCode(block, 'recordids', javascriptGenerator.ORDER_ATOMIC);
    var value_fields = javascriptGenerator.valueToCode(block, 'fields', javascriptGenerator.ORDER_ATOMIC);
    var value_formula = javascriptGenerator.valueToCode(block, 'formula', javascriptGenerator.ORDER_ATOMIC);
    var value_maxrecords = javascriptGenerator.valueToCode(block, 'maxRecords', javascriptGenerator.ORDER_ATOMIC);
    var dropdown_cellformat = block.getFieldValue('cellFormat');
    var value_fieldkey = javascriptGenerator.valueToCode(block, 'fieldKey', javascriptGenerator.ORDER_ATOMIC);
    var statements_then = javascriptGenerator.statementToCode(block, 'then');
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

javascriptGenerator['vika_response_success'] = function (block) {
    var code = 'response.success';
    return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator['vika_response_code'] = function (block) {
    var code = 'response.code';
    return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator['vika_response_message'] = function (block) {
    var code = 'response.message';
    return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator['vika_response_data'] = function (block) {
    var code = 'response.data';
    return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator['vika_sort'] = function (block) {
    var dropdown_sort = block.getFieldValue('sort');
    var value_id = javascriptGenerator.valueToCode(block, 'id', javascriptGenerator.ORDER_ATOMIC);
    var code = `{${value_id}:${dropdown_sort}}`;
    return [code, javascriptGenerator.ORDER_NONE];
};
