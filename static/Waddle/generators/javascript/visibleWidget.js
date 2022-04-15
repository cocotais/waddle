Blockly.JavaScript['vw_defTypes'] = function (block) {
	// var statements_types = Blockly.JavaScript.statementToCode(block, 'types');
	var text_type = block.getFieldValue('type');
	var text_icon = block.getFieldValue('icon');
	var text_title = block.getFieldValue('title');
	var text_version = block.getFieldValue('version');
	var dropdown_isglobalwidget = block.getFieldValue('isGlobalWidget');
	var code = `
const types = {
  isInvisibleWidget: false,
  type: "${text_type}",
  icon: "${text_icon}",
  title: "${text_title}",
  version: "${text_version}",
  isGlobalWidget: ${dropdown_isglobalwidget},
  properties: [],
  methods: [],
  events: [],
};
`;
	return code;
};

Blockly.JavaScript['vw_defWidget'] = function (block) {
	var statements_constructor = Blockly.JavaScript.statementToCode(block, 'constructor');
	var statements_render = Blockly.JavaScript.statementToCode(block, 'render');
	var code = `
class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
  ${statements_constructor}
  }
  render() {
  ${statements_render}
  }
}
`;
	return code;
};

Blockly.JavaScript['vw_returnrender'] = function (block) {
	var statements_html = Blockly.JavaScript.statementToCode(block, 'HTML');
	var code = `return(
  ${statements_html}
);\n`;
	return code;
};
