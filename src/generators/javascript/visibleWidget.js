import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";javascriptGenerator['vw_defTypes'] = function (block) {
  // var statements_types = javascriptGenerator.statementToCode(block, 'types');
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

javascriptGenerator['vw_defWidget'] = function (block) {
  var statements_constructor = javascriptGenerator.statementToCode(block, 'constructor');
  var statements_render = javascriptGenerator.statementToCode(block, 'render');
  var code = `
class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
  ${statements_constructor}
  }
  render() {
  ${statements_render}
  }
}
`;

  return code;
};

javascriptGenerator['vw_returnrender'] = function (block) {
  var statements_html = javascriptGenerator.statementToCode(block, 'HTML');
  if (statements_html.length > 0) {
    statements_html = statements_html.substring(0, statements_html.length - 2); // 去除最后一个多余的逗号
  } else if (statements_html.length == 0) {
    statements_html = "React.createElement('p',{style:{color:'red'}},'Waddle提醒您，你还没有设置渲染积木')";
  }
  var code = `\
return(
  ${statements_html}
);\n`;
  window.yuzifu = statements_html;
  return code;
};

javascriptGenerator['vw_setprop'] = function (block) {
  var text_name = block.getFieldValue('name');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `this.setProps({ '${text_name}': ${value_value} });\n`;
  return code;
};