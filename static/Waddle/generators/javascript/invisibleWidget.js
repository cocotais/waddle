
Blockly.JavaScript['ivw_defTypes'] = function (block) {
	var statements_types = Blockly.JavaScript.statementToCode(block, 'types');
	var code = `

const types = {
  isInvisibleWidget: true,
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
	var text_version = block.getFieldValue('version');
	var code = `version: "${text_version}",\n`;
	return code;
};

Blockly.JavaScript['ivw_itemIsGlobalWidget'] = function (block) {
	var dropdown_isglobalwidget = block.getFieldValue('isGlobalWidget');
	var code = `isGlobalWidget: ${dropdown_isglobalwidget},\n`;
	return code;
};

Blockly.JavaScript['ivw_properties'] = function (block) {
	var text_key = block.getFieldValue('key');
	var text_label = block.getFieldValue('label');
	var statements_properties = Blockly.JavaScript.statementToCode(block, 'properties');
	console.log(statements_properties)
	var code = `
properties: [
	key: ${text_key},
	label: ${text_label},
	${statements_properties}
],
`;
	return code;
};

Blockly.JavaScript['ivw_propertieItem'] = function (block) {
	var statements_propertieItem = Blockly.JavaScript.statementToCode(block, 'propertieItem');
	var code = `
{
${statements_propertieItem}
},

`;
	return code;
};

Blockly.JavaScript['ivw_methods'] = function (block) {
	var statements_methods = Blockly.JavaScript.statementToCode(block, 'methods');
	var code = `
methods: [
	${statements_methods}
],

`;
	return code;
};

Blockly.JavaScript['ivw_methodItem'] = function (block) {
	var statements_methodItem = Blockly.JavaScript.statementToCode(block, 'methodItem');
	var code = `
{
${statements_methodItem}
},

`;
	return code;
};

Blockly.JavaScript['ivw_parameters'] = function (block) {
	var statements_parameters = Blockly.JavaScript.statementToCode(block, 'parameters');
	console.log(statements_parameters)
	var code = `
params: [
	${statements_parameters}
],
`;
	return code;
};

Blockly.JavaScript['ivw_parameteItem'] = function (block) {
	var statements_parameteItem = Blockly.JavaScript.statementToCode(block, 'parameteItem');
	var code = `
{
${statements_parameteItem}
},

`;
	return code;
};

Blockly.JavaScript['ivw_events'] = function (block) {
	var statements_events = Blockly.JavaScript.statementToCode(block, 'events');
	var code = `
events: [
	${statements_events}
],

`;
	return code;
};

Blockly.JavaScript['ivw_eventItem'] = function (block) {
	var statements_eventItem = Blockly.JavaScript.statementToCode(block, 'eventItem');
	var code = `
{
${statements_eventItem}
},

`;
	return code;
};

Blockly.JavaScript['ivw_emit'] = function (block) {
	var value_event = Blockly.JavaScript.valueToCode(block, 'event', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_parameters = Blockly.JavaScript.statementToCode(block, 'parameters');
	var code = `this.emit('${value_event}'${statements_parameters})`;
	return code;
};

Blockly.JavaScript['ivw_emitParameter'] = function (block) {
	var value_parameter = Blockly.JavaScript.valueToCode(block, 'parameter', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `, ${value_parameter}`;
	return code;
};

attris = {
	'key':'名称',
	'valueType':'值类型',
	'label':'标签',
	'labelAfter':'尾标签',
	'defaultValue':'默认值',
}


for (const key in attris) {
	if (Object.hasOwnProperty.call(attris, key)) {
		const attri = attris[key];
		Blockly.JavaScript['ivwAttri_' + key] = function (block) {
			var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
			var code = `${key}: ${value_value},\n`;
			return code;
		};
	}
}

Blockly.JavaScript['ivwAttri_custom'] = function (block) {
	var text_key = block.getFieldValue('key');
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `${text_key}: ${value_value},\n`;
	return code;
};

Blockly.JavaScript['ivw_export'] = function (block) {
	var code = `
exports.types = types;
exports.widget = Widget;

`;
	return code;
};

Blockly.JavaScript['ivw_defWidget'] = function (block) {
	var statements_constructor = Blockly.JavaScript.statementToCode(block, 'constructor');
	var statements_functions = Blockly.JavaScript.statementToCode(block, 'functions');
	var code = `

class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
		${statements_constructor}
	}
	${statements_functions}
}

`;
	return code;
};