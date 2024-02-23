import { javascriptGenerator } from "blockly/javascript";

javascriptGenerator.forBlock["ivw_defTypes"] = function (block) {
  // var statements_types = javascriptGenerator.statementToCode(block, 'types');
  var text_type = block.getFieldValue("type");
  var text_icon = block.getFieldValue("icon");
  var text_title = block.getFieldValue("title");
  var text_version = block.getFieldValue("version");
  var dropdown_isglobalwidget = block.getFieldValue("isGlobalWidget");
  window.myicon = text_icon;
  window.mytitle = text_title;
  window.mytype = "js";
  var code = `
const types = {
    isInvisibleWidget: true,
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

// javascriptGenerator.forBlock['ivw_itemType'] = function (block) {
//     var text_type = block.getFieldValue('type');
//     var code = `type: "${text_type}",\n`;
//     return code;
// };

// javascriptGenerator.forBlock['ivw_itemIcon'] = function (block) {
//     var text_icon = block.getFieldValue('icon');
//     var code = `icon: "${text_icon}",\n`;
//     return code;
// };

// javascriptGenerator.forBlock['ivw_itemTitle'] = function (block) {
//     var text_title = block.getFieldValue('title');
//     var code = `title: "${text_title}",\n`;
//     return code;
// };

// javascriptGenerator.forBlock['ivw_itemVersion'] = function (block) {
//     var text_version = block.getFieldValue('version');
//     var code = `version: "${text_version}",\n`;
//     return code;
// };

// javascriptGenerator.forBlock['ivw_itemIsGlobalWidget'] = function (block) {
//     var dropdown_isglobalwidget = block.getFieldValue('isGlobalWidget');
//     var code = `isGlobalWidget: ${dropdown_isglobalwidget},\n`;
//     return code;
// };

javascriptGenerator.forBlock["ivw_addProperty"] = function (block) {
  var text_key = block.getFieldValue("key");
  var text_label = block.getFieldValue("label");
  //var statements_other = javascriptGenerator.statementToCode(block, 'other'); 弃用，改用配置表的方式，即value_config
  var text_valueType = block.getFieldValue("valueType");
  var value_defaultValue = javascriptGenerator.valueToCode(block, "defaultValue", javascriptGenerator.ORDER_ATOMIC);
  var value_config = javascriptGenerator.valueToCode(block, "config", 999); // 最高优先级，即不加括号

  var valueType = "";
  var multilineString = false;
  if (text_valueType === "any") {
    valueType = "['string','number','boolean','array','object',]";
  } else if (text_valueType === "multilineString") {
    multilineString = true;
    valueType = "'string'";
  } else {
    valueType = "'" + text_valueType + "'";
  }

  if (value_defaultValue == "") {
    switch (text_valueType) {
      case "multilineString":
        value_defaultValue = '""';
        break;
      case "string":
        value_defaultValue = '""';
        break;
      case "number":
        value_defaultValue = 0;
        break;
      case "boolean":
        value_defaultValue = true;
        break;
      case "color":
        value_defaultValue = '"#6e4ff4"';
        break;
      case "object":
        value_defaultValue = '""';
        break;
      default:
        value_defaultValue = '""';
        break;
    }
  }

  var code = `
types['properties'].push({
    key: '${text_key}',
    label: '${text_label}',
    valueType: ${valueType},${multilineString ? "\n    editorType: 'TextArea'," : ""}
    defaultValue: ${value_defaultValue},
    ${value_config}
})
`;
  return code;
};

javascriptGenerator.forBlock["ivw_getproperty"] = function (block) {
  var text_key = block.getFieldValue("KEY");
  var code = `this.${text_key}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["ivw_getparam"] = function (block) {
  var code = block.getFieldValue("KEY");
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 0];
};

javascriptGenerator.forBlock["ivw_addMethod"] = function (block) {
  var text_key = block.getFieldValue("key");
  var text_label = block.getFieldValue("label");
  var text_valueType = block.getFieldValue("valueType");
  var statements_params = javascriptGenerator.statementToCode(block, "params");
  var statements_code = javascriptGenerator.statementToCode(block, "code");
  // var statements_other = javascriptGenerator.statementToCode(block, 'other'); 弃用，改用配置表的方式，即value_config
  var value_config = javascriptGenerator.valueToCode(block, "config", 999); // 最高优先级，即不加括号
  var params = "";
  if (statements_params) {
    eval("[" + statements_params + "]").forEach((value) => {
      params = params.concat(value.key + ",");
    });
  }
  var code = `
types['methods'].push({
    key: '${text_key}',
    label: '${text_label}',
    params: [${statements_params}],
    ${text_valueType === "noReturn" ? "" : "valueType: " + text_valueType + ","}
    ${value_config}
})
Widget.prototype.${text_key} = function (${params}) {
    ${statements_code}
}`;
  return code;
};

javascriptGenerator.forBlock["ivw_addParams"] = function (block) {
  var text_key = block.getFieldValue("key");
  var text_label = block.getFieldValue("label");
  var text_valueType = block.getFieldValue("valueType");
  var value_defaultValue = javascriptGenerator.valueToCode(block, "defaultValue", javascriptGenerator.ORDER_ATOMIC);
  // var statements_other = javascriptGenerator.statementToCode(block, 'other');

  if (value_defaultValue == "") {
    switch (text_valueType) {
      case "multilineString":
        value_defaultValue = '""';
        break;
      case "string":
        value_defaultValue = '""';
        break;
      case "number":
        value_defaultValue = 0;
        break;
      case "boolean":
        value_defaultValue = true;
        break;
      case "color":
        value_defaultValue = '"#6e4ff4"';
        break;
      case "object":
        value_defaultValue = '""';
        break;
      default:
        value_defaultValue = '""';
        break;
    }
  }

  var code = `
    {
        key: '${text_key}',
        label: '${text_label}',
        valueType: ${text_valueType},${text_valueType === "'multilineString'" ? "\n    checkType: 'string'," : ""}
        defaultValue: ${value_defaultValue},
    },`;
  return code;
};

javascriptGenerator.forBlock["ivw_addEventParams"] = function (block) {
  var text_key = block.getFieldValue("key");
  var text_label = block.getFieldValue("label");
  var text_valueType = block.getFieldValue("valueType");
  var code = `
    {
        key: '${text_key}',
        label: '${text_label}',
        valueType: ${text_valueType},
    },`;
  return code;
};

javascriptGenerator.forBlock["ivw_addDropdownParams"] = function (block) {
  var text_key = block.getFieldValue("key");
  var text_label = block.getFieldValue("label");
  var statements_dropdownItems = javascriptGenerator.statementToCode(block, "dropdownItems");
  var code = `
    {
        key: '${text_key}',
        label: '${text_label}',
        valueType: 'string',
        dropdown: [${statements_dropdownItems}],
    },

`;
  return code;
};

// javascriptGenerator.forBlock['ivw_option_icon'] = function (block) {
//     var text_name = block.getFieldValue('NAME');
//     var value_icon = javascriptGenerator.valueToCode(block, 'ICON', javascriptGenerator.ORDER_ATOMIC);

//     var code = `
// types['methods'].forEach(element => {
//   if(element.key=="${text_name}"){
// 	if(!element.blockOptions)element.blockOptions={};
//     element.blockOptions.icon=${value_icon};
//   }
// });
// types['events'].forEach(element => {
//   if(element.key=="${text_name}"){
// 	if(!element.blockOptions)element.blockOptions={};
//     element.blockOptions.icon=${value_icon};
//   }
// });
// types['properties'].forEach(element => {
//   if(element.key=="${text_name}"){
// 	if(!element.blockOptions)element.blockOptions={};
// 	element.blockOptions.icon=${value_icon};
//   }
// });
// `;
//     return code;
// };

// javascriptGenerator.forBlock['ivw_option_color'] = function (block) {
//     var text_name = block.getFieldValue('NAME');
//     var value_icon = javascriptGenerator.valueToCode(block, 'ICON', javascriptGenerator.ORDER_ATOMIC);
//     var code = `
// types['methods'].forEach(element => {
//   if(element.key=="${text_name}"){
// 	if(!element.blockOptions)element.blockOptions={};
//     element.blockOptions.color=${value_icon};
//   }
// });
// types['events'].forEach(element => {
//   if(element.key=="${text_name}"){
// 	if(!element.blockOptions)element.blockOptions={};
//     element.blockOptions.color=${value_icon};
//   }
// });
// types['properties'].forEach(element => {
//   if(element.key=="${text_name}"){
// 	if(!element.blockOptions)element.blockOptions={};
// 	element.blockOptions.color=${value_icon};
//   }
// });
// `;
//     return code;
// };

javascriptGenerator.forBlock["ivw_addDropdownItem"] = function (block) {
  var text_label = block.getFieldValue("label");
  var code = `
{ label: '${text_label}', value: '${text_label}', },
`;
  return code;
};

javascriptGenerator.forBlock["ivw_addEvent"] = function (block) {
  var text_key = block.getFieldValue("key");
  var text_label = block.getFieldValue("label");
  var statements_params = javascriptGenerator.statementToCode(block, "params");
  var value_config = javascriptGenerator.valueToCode(block, "config", 999); // 最高优先级，即不加括号
  var code = `
types['events'].push({
    key: '${text_key}',
    label: '${text_label}',
    params: [${statements_params}],
    ${value_config}
})
`;
  return code;
};

javascriptGenerator.forBlock["vw_addEvent"] = function (block) {
  var text_key = block.getFieldValue("key");
  var text_label = block.getFieldValue("label");
  var statements_params = javascriptGenerator.statementToCode(block, "params");
  var statements_code = javascriptGenerator.statementToCode(block, "code");
  var value_config = javascriptGenerator.valueToCode(block, "config", 999); // 最高优先级，即不加括号
  var code = `
types['events'].push({
    key: '${text_key}',
    label: '${text_label}',
    params: [${statements_params}],
    ${value_config}
})
Widget.prototype.${text_key} = function (event) {
    ${statements_code}
}
`;
  return code;
};

javascriptGenerator.forBlock["ivw_methodReturn"] = function (block) {
  var value_value = javascriptGenerator.valueToCode(block, "value", javascriptGenerator.ORDER_ATOMIC);
  var code = `return ${value_value};`;
  return code;
};

javascriptGenerator.forBlock["ivw_emit"] = function (block) {
  var value_event = block.getFieldValue("event");
  var statements_parameters = javascriptGenerator.statementToCode(block, "parameters");
  var code = `this.emit("${value_event}"${statements_parameters});`;
  return code;
};

javascriptGenerator.forBlock["ivw_emitParameter"] = function (block) {
  var value_parameter = javascriptGenerator.valueToCode(block, "parameter", javascriptGenerator.ORDER_ATOMIC);
  var code = `, ${value_parameter}`;
  return code;
};

let attris = {
  key: "名称",
  valueType: "值类型",
  label: "标签",
  labelAfter: "尾标签",
  defaultValue: "默认值",
};

for (const key in attris) {
  if (Object.hasOwnProperty.call(attris, key)) {
    javascriptGenerator.forBlock["ivwAttri_" + key] = function (block) {
      var value_value = javascriptGenerator.valueToCode(block, "value", javascriptGenerator.ORDER_ATOMIC);
      var code = `${key}: ${value_value},\n`;
      return code;
    };
  }
}

javascriptGenerator.forBlock["ivwAttri_custom"] = function (block) {
  var text_key = block.getFieldValue("key");
  var value_value = javascriptGenerator.valueToCode(block, "value", javascriptGenerator.ORDER_ATOMIC);
  var code = `${text_key}: ${value_value},\n`;
  return code;
};

javascriptGenerator.forBlock["ivw_export"] = function () {
  var code = `
exports.types = types;
exports.widget = Widget;
`;
  return code;
};

javascriptGenerator.forBlock["ivw_defWidget"] = function (block) {
  var statements_constructor = javascriptGenerator.statementToCode(block, "constructor");
  var statements_functions = javascriptGenerator.statementToCode(block, "functions");
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

javascriptGenerator.forBlock["ivw_propsinit"] = function (block) {
  var text_props_name = block.getFieldValue("props_name");
  var code = `this.${text_props_name}=props.${text_props_name};\n`;
  return code;
};

javascriptGenerator.forBlock["ivw_config"] = function (block) {
  var value_color = javascriptGenerator.valueToCode(block, "color", javascriptGenerator.ORDER_ATOMIC);
  var text_icon = block.getFieldValue("icon");
  var checkbox_generateblock = block.getFieldValue("generateBlock") === "TRUE";
  var checkbox_inputsinline = block.getFieldValue("inputsInline") === "TRUE";
  var number_space = block.getFieldValue("space");
  var code = `\
blockOptions: {
    color: ${value_color},
    icon: '${text_icon}',
    generateBlock: ${checkbox_generateblock},
    inputsInline: ${checkbox_inputsinline},
    space: ${number_space},
},`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["ivw_setprop"] = function (block) {
  var text_name = block.getFieldValue("name");
  var value_value = javascriptGenerator.valueToCode(block, "value", javascriptGenerator.ORDER_ATOMIC);
  var code = `this.${text_name} = ${value_value};\n`;
  return code;
};

javascriptGenerator.forBlock["ivw_addFunction"] = function (block) {
  var functionName = block.getFieldValue("functionName");
  var statements_params = javascriptGenerator.statementToCode(block, "params");
  var statements_code = javascriptGenerator.statementToCode(block, "code");
  var code = `
Widget.prototype.${functionName} = function (${statements_params}) {
    ${statements_code}
}`;
  return code;
};

javascriptGenerator.forBlock["ivw_addFunctionParam"] = function (block) {
  var paramName = block.getFieldValue("paramName");
  var code = paramName + ", ";
  return code;
};

javascriptGenerator.forBlock["widget_config"] = function (block) {
  var text_name = block.getFieldValue("NAME");
  var dropdown_s = block.getFieldValue("S");
  var code = `types.docs={url:"${text_name}"};
types.platforms=${dropdown_s}`;
  return code;
};
