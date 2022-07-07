Blockly.JavaScript['vw_defTypes'] = function (block) {
    // var statements_types = Blockly.JavaScript.statementToCode(block, 'types');
    var text_type = block.getFieldValue('type');
    var text_icon = block.getFieldValue('icon');
    var text_title = block.getFieldValue('title');
    var text_version = block.getFieldValue('version');
    var number_width = block.getFieldValue('width'); // 减少了waddle使用者的工作量，自动生成长宽的代码
    var number_height = block.getFieldValue('height');
    window.myicon = text_icon;
    window.mytitle = text_title;
    // var dropdown_isglobalwidget = block.getFieldValue('isGlobalWidget');
    // 可见控件必须非全局
    var code = `
const types = {
  isInvisibleWidget: false,
  type: "${text_type}",
  icon: "${text_icon}",
  title: "${text_title}",
  version: "${text_version}",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: ${number_width},
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: ${number_height},
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__size',
      label: '',
      valueType: 'number',
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ['__height', '__width'],
        },
        getter: {
          keys: ['__height', '__width'],
        },
      },
    },
  ],
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

Blockly.JavaScript['vw_setprop'] = function (block) {
  var text_name = block.getFieldValue('name');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `this.setProps({ '${text_name}': ${value_value} });\n`;
  return code;
};