Blockly.JavaScript["antd_import"] = function (block) {
  var code = "const antd = require('antd-mobile');\n";
  return code;
};

Blockly.JavaScript["antd_button"] = function(block){
  var statements_con = (
    Blockly.JavaScript.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    Blockly.JavaScript.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement(antd.Button, {${statements_pro}}, [${statements_con}]),\n`;
  return code
}

Blockly.JavaScript["antd_auto_center"] = function(block){
  var statements_con = (
    Blockly.JavaScript.statementToCode(block, "CON") || ""
  ).trim();
  var code = `React.createElement(antd.AutoCenter, null, [${statements_con}]),\n`;
  return code
}

Blockly.JavaScript["antd_divider"] = function(block){
  var statements_con = (
    Blockly.JavaScript.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    Blockly.JavaScript.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement(antd.Divider, {${statements_pro}}, [${statements_con}]),\n`;
  return code
}