import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["antd_import"] = function (block) {
  var code = "const antd = require('antd-mobile');\n";
  return code;
};

javascriptGenerator.forBlock["antd_button"] = function (block) {
  var statements_con = (javascriptGenerator.statementToCode(block, "CON") || "").trim();
  var statements_pro = javascriptGenerator.statementToCode(block, "PRO") || "";
  var code = `React.createElement(antd.Button, {${statements_pro}}, [${statements_con}]),\n`;
  return code;
};

javascriptGenerator.forBlock["antd_auto_center"] = function (block) {
  var statements_con = (javascriptGenerator.statementToCode(block, "CON") || "").trim();
  var code = `React.createElement(antd.AutoCenter, null, [${statements_con}]),\n`;
  return code;
};

javascriptGenerator.forBlock["antd_divider"] = function (block) {
  var statements_con = (javascriptGenerator.statementToCode(block, "CON") || "").trim();
  var statements_pro = javascriptGenerator.statementToCode(block, "PRO") || "";
  var code = `React.createElement(antd.Divider, {${statements_pro}}, [${statements_con}]),\n`;
  return code;
};
