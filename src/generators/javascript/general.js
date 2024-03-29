import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator.forBlock["ivw_defTypes"] = function (block) {
  var statements_types = javascriptGenerator.statementToCode(block, "types");
  var code = `

const types = {
	${statements_types}
}

`;
  return code;
};

javascriptGenerator.forBlock["ivw_itemType"] = function (block) {
  var text_type = block.getFieldValue("type");
  var code = `type: "${text_type}",\n`;
  return code;
};

javascriptGenerator.forBlock["ivw_itemIcon"] = function (block) {
  var text_icon = block.getFieldValue("icon");
  var code = `icon: "${text_icon}",\n`;
  return code;
};

javascriptGenerator.forBlock["ivw_itemTitle"] = function (block) {
  var text_title = block.getFieldValue("title");
  var code = `title: "${text_title}",\n`;
  return code;
};

javascriptGenerator.forBlock["ivw_itemVersion"] = function (block) {
  var text_title = block.getFieldValue("version");
  var code = `version: "${text_title}",\n`;
  return code;
};

javascriptGenerator.forBlock["ivw_itemIsGlobalWidget"] = function (block) {
  var checkbox_name = block.getFieldValue("isGlobalWidget") === "TRUE";
  var code = `isGlobalWidget: ${checkbox_name},\n`;
  return code;
};

javascriptGenerator.forBlock["ivw_properties"] = function (block) {
  var statements_properties = javascriptGenerator.statementToCode(block, "properties");
  var code = `

	properties: [
	${statements_properties}
]

`;
  return code;
};

javascriptGenerator.forBlock["ivw_methods"] = function (block) {
  var statements_methods = javascriptGenerator.statementToCode(block, "methods");
  var code = `

methods: [
	${statements_methods}
]

`;
  return code;
};

javascriptGenerator.forBlock["ivw_events"] = function (block) {
  var statements_events = javascriptGenerator.statementToCode(block, "events");
  var code = `

events: [
	${statements_events}
]

`;
  return code;
};
