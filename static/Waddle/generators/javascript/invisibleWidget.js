var del_indentation = function (code) {
	codelist = code.split("\n")
	newcode = ""
	codelist.forEach(item => {
		newcode += item.slice(2)
		newcode += "\n"
	});
	return newcode
}

Blockly.JavaScript['ivw_defTypes'] = function (block) {
	var statements_types = Blockly.JavaScript.statementToCode(block, 'types');
	var code = `
const types = {
  isInvisibleWidget: true,
  properties: [],
  methods: [],
  events: [],
${statements_types}};
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

Blockly.JavaScript['ivw_addProperty'] = function (block) {
	var text_key = block.getFieldValue('key');
	var text_label = block.getFieldValue('label');
	var statements_other = Blockly.JavaScript.statementToCode(block, 'other');
	var code = `
types['properties'].push({
  key: '${text_key}',
  label: '${text_label}',
${statements_other}
})
`;
	return code;
};

Blockly.JavaScript['ivw_addMethod'] = function (block) {
	var text_key = block.getFieldValue('key');
	var text_label = block.getFieldValue('label');
	var statements_params = Blockly.JavaScript.statementToCode(block, 'params');
	var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
	// var statements_other = Blockly.JavaScript.statementToCode(block, 'other');
	var params = '';
	if (statements_params) {
		eval('['+statements_params+']').forEach((value) => {
			params = params.concat(value.key + ',');
		});
	};
	var code = `
types['methods'].push({
  key: '${text_key}',
  label: '${text_label}',
  params: [
  ${statements_params}
  ],
})
Widget.prototype.${text_key} = function (${params}) {
  ${statements_code};
}
`;
	return code;
};

Blockly.JavaScript['ivw_addParams'] = function (block) {
	var text_key = block.getFieldValue('key');
	var text_label = block.getFieldValue('label');
	var statements_other = Blockly.JavaScript.statementToCode(block, 'other');
	var code = `
{
  key: '${text_key}',
  label: '${text_label}',
${statements_other}
},

`;
	return code;
};

Blockly.JavaScript['ivw_addEvent'] = function (block) {
	var text_key = block.getFieldValue('key');
	var text_label = block.getFieldValue('label');
	var statements_params = Blockly.JavaScript.statementToCode(block, 'params');
	var statements_other = Blockly.JavaScript.statementToCode(block, 'other');
	var code = `
types['events'].push({
  key: '${text_key}',
  label: '${text_label}',
  params: [
    ${statements_params}
  ],
${statements_other}
})
`;
	return code;
};

Blockly.JavaScript['ivw_methodReturn'] = function (block) {
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `return ${value_value};`;
	return code;
};

Blockly.JavaScript['ivw_emit'] = function (block) {
	var value_event = Blockly.JavaScript.valueToCode(block, 'event', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_parameters = Blockly.JavaScript.statementToCode(block, 'parameters');
	var code = `this.emit(${value_event}${statements_parameters});`;
	return code;
};

Blockly.JavaScript['ivw_emitParameter'] = function (block) {
	var value_parameter = Blockly.JavaScript.valueToCode(block, 'parameter', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `, ${value_parameter}`;
	return code;
};

attris = {
	'key': '名称',
	'valueType': '值类型',
	'label': '标签',
	'labelAfter': '尾标签',
	'defaultValue': '默认值',
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

Blockly.JavaScript['ivw_propsinit'] = function (block) {
	var text_props_name = block.getFieldValue('props_name');
	var text_this_name = block.getFieldValue('this_name');
	var code = `this.${text_this_name}=props.${text_props_name}`;
	return code;
};