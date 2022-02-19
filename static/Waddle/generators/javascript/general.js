
Blockly.JavaScript['ivw_defTypes'] = function (block) {
	var statements_types = Blockly.JavaScript.statementToCode(block, 'types');
	var code = `

const types = {
	${statements_types}
}

`;
	return code;
};

Blockly.JavaScript['ivw_itemType'] = function (block) {
	var text_type = block.getFieldValue('type');
	var code = `type: "${text_type}",\n`;
	return code;
};

Blockly.JavaScript['ivw_itemIcon'] = function (block) {
	var text_icon = block.getFieldValue('icon');
	var code = `icon: "${text_icon}",\n`;
	return code;
};

Blockly.JavaScript['ivw_itemTitle'] = function (block) {
	var text_title = block.getFieldValue('title');
	var code = `title: "${text_title}",\n`;
	return code;
};

Blockly.JavaScript['ivw_itemVersion'] = function (block) {
	var text_title = block.getFieldValue('version');
	var code = `version: "${text_title}",\n`;
	return code;
};

Blockly.JavaScript['ivw_itemIsGlobalWidget'] = function (block) {
	var checkbox_name = block.getFieldValue('isGlobalWidget') === 'TRUE';
	var code = `isGlobalWidget: ${checkbox_name},\n`;
	return code;
};

Blockly.JavaScript['ivw_properties'] = function (block) {
	var statements_properties = Blockly.JavaScript.statementToCode(block, 'properties');
	var code = `

	properties: [
	${statements_properties}
]

`;
	return code;
};

Blockly.JavaScript['ivw_methods'] = function (block) {
	var statements_methods = Blockly.JavaScript.statementToCode(block, 'methods');
	var code = `

methods: [
	${statements_methods}
]

`;
	return code;
};

Blockly.JavaScript['ivw_events'] = function (block) {
	var statements_events = Blockly.JavaScript.statementToCode(block, 'events');
	var code = `

events: [
	${statements_events}
]

`;
	return code;
};
