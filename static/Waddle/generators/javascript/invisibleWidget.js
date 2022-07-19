var del_indentation = function (code) {
    codelist = code.split('\n');
    newcode = '';
    codelist.forEach(item => {
        newcode += item.slice(2);
        newcode += '\n';
    });
    return newcode;
};

Blockly.JavaScript['ivw_defTypes'] = function (block) {
    // var statements_types = Blockly.JavaScript.statementToCode(block, 'types');
    var text_type = block.getFieldValue('type');
    var text_icon = block.getFieldValue('icon');
    var text_title = block.getFieldValue('title');
    var text_version = block.getFieldValue('version');
    var dropdown_isglobalwidget = block.getFieldValue('isGlobalWidget');
    window.myicon = text_icon;
    window.mytitle = text_title;
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

// Blockly.JavaScript['ivw_itemType'] = function (block) {
//     var text_type = block.getFieldValue('type');
//     var code = `type: "${text_type}",\n`;
//     return code;
// };

// Blockly.JavaScript['ivw_itemIcon'] = function (block) {
//     var text_icon = block.getFieldValue('icon');
//     var code = `icon: "${text_icon}",\n`;
//     return code;
// };

// Blockly.JavaScript['ivw_itemTitle'] = function (block) {
//     var text_title = block.getFieldValue('title');
//     var code = `title: "${text_title}",\n`;
//     return code;
// };

// Blockly.JavaScript['ivw_itemVersion'] = function (block) {
//     var text_version = block.getFieldValue('version');
//     var code = `version: "${text_version}",\n`;
//     return code;
// };

// Blockly.JavaScript['ivw_itemIsGlobalWidget'] = function (block) {
//     var dropdown_isglobalwidget = block.getFieldValue('isGlobalWidget');
//     var code = `isGlobalWidget: ${dropdown_isglobalwidget},\n`;
//     return code;
// };

Blockly.JavaScript['ivw_addProperty'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    //var statements_other = Blockly.JavaScript.statementToCode(block, 'other'); 弃用，改用配置表的方式，即value_config
    var text_valueType = block.getFieldValue('valueType');
    var value_defaultValue = Blockly.JavaScript.valueToCode(block, 'defaultValue', Blockly.JavaScript.ORDER_ATOMIC);
    var value_config = Blockly.JavaScript.valueToCode(block, 'config', 999); // 最高优先级，即不加括号

    var valueType = '';
    var multilineString = false;
    if (text_valueType === "any") {
        valueType = "['string','number','boolean','array','object',]";
    }
    else if (text_valueType === "multilineString") {
        multilineString = true;
        valueType = "'string'";
    }
    else {
        valueType = "'" + text_valueType + "'";
    }

    if (value_defaultValue == '') {
        switch (text_valueType) {
            case 'multilineString':
                value_defaultValue = '""';
                break;
            case 'string':
                value_defaultValue = '""';
                break;
            case 'number':
                value_defaultValue = 0;
                break;
            case 'boolean':
                value_defaultValue = true;
                break;
            case 'color':
                value_defaultValue = '"#6e4ff4"';
                break;
            case 'object':
                value_defaultValue = '""';
                break;
            case 'object':
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

Blockly.JavaScript['ivw_getproperty'] = function (block) {
    var text_key = block.getFieldValue('KEY');
    var code = `this.${text_key}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ivw_getparam'] = function (block) {
    var code = block.getFieldValue('KEY');
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, 0];
};

Blockly.JavaScript['ivw_addMethod'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var text_valueType = block.getFieldValue('valueType');
    var statements_params = Blockly.JavaScript.statementToCode(block, 'params');
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    // var statements_other = Blockly.JavaScript.statementToCode(block, 'other'); 弃用，改用配置表的方式，即value_config
    var value_config = Blockly.JavaScript.valueToCode(block, 'config', 999); // 最高优先级，即不加括号
    var params = '';
    if (statements_params) {
        eval('[' + statements_params + ']').forEach(value => {
            params = params.concat(value.key + ',');
        });
    }
    var code = `
types['methods'].push({
    key: '${text_key}',
    label: '${text_label}',
    params: [${statements_params}],
    ${text_valueType === 'noReturn' ? '' : 'valueType: ' + text_valueType + ','}
    ${value_config}
})
Widget.prototype.${text_key} = function (${params}) {
    ${statements_code}
}`;
    return code;
};

Blockly.JavaScript['ivw_addParams'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var text_valueType = block.getFieldValue('valueType');
    var value_defaultValue = Blockly.JavaScript.valueToCode(block, 'defaultValue', Blockly.JavaScript.ORDER_ATOMIC);
    // var statements_other = Blockly.JavaScript.statementToCode(block, 'other');

    if (value_defaultValue == '') {
        switch (text_valueType) {
            case 'multilineString':
                value_defaultValue = '""';
                break;
            case 'string':
                value_defaultValue = '""';
                break;
            case 'number':
                value_defaultValue = 0;
                break;
            case 'boolean':
                value_defaultValue = true;
                break;
            case 'color':
                value_defaultValue = '"#6e4ff4"';
                break;
            case 'object':
                value_defaultValue = '""';
                break;
            case 'object':
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
        valueType: ${text_valueType},${text_valueType === "'multilineString'" ? "\n    checkType: 'string'," : ''}
        defaultValue: ${value_defaultValue},
    },`;
    return code;
};

Blockly.JavaScript['ivw_addEventParams'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var text_valueType = block.getFieldValue('valueType');
    var code = `
    {
        key: '${text_key}',
        label: '${text_label}',
        valueType: ${text_valueType},
    },`;
    return code;
};

Blockly.JavaScript['ivw_addDropdownParams'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var statements_dropdownItems = Blockly.JavaScript.statementToCode(block, 'dropdownItems');
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

// Blockly.JavaScript['ivw_option_icon'] = function (block) {
//     var text_name = block.getFieldValue('NAME');
//     var value_icon = Blockly.JavaScript.valueToCode(block, 'ICON', Blockly.JavaScript.ORDER_ATOMIC);

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

// Blockly.JavaScript['ivw_option_color'] = function (block) {
//     var text_name = block.getFieldValue('NAME');
//     var value_icon = Blockly.JavaScript.valueToCode(block, 'ICON', Blockly.JavaScript.ORDER_ATOMIC);
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

Blockly.JavaScript['ivw_addDropdownItem'] = function (block) {
    var text_label = block.getFieldValue('label');
    var code = `
{ label: '${text_label}', value: '${text_label}', },
`;
    return code;
};

Blockly.JavaScript['ivw_addEvent'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var statements_params = Blockly.JavaScript.statementToCode(block, 'params');
    var value_config = Blockly.JavaScript.valueToCode(block, 'config', 999); // 最高优先级，即不加括号
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

Blockly.JavaScript['vw_addEvent'] = function (block) {
    var text_key = block.getFieldValue('key');
    var text_label = block.getFieldValue('label');
    var statements_params = Blockly.JavaScript.statementToCode(block, 'params');
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    var value_config = Blockly.JavaScript.valueToCode(block, 'config', 999); // 最高优先级，即不加括号
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

Blockly.JavaScript['ivw_methodReturn'] = function (block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `return ${value_value};`;
    return code;
};

Blockly.JavaScript['ivw_emit'] = function (block) {
    var value_event = block.getFieldValue('event');
    var statements_parameters = Blockly.JavaScript.statementToCode(block, 'parameters');
    var code = `this.emit("${value_event}"${statements_parameters});`;
    return code;
};

Blockly.JavaScript['ivw_emitParameter'] = function (block) {
    var value_parameter = Blockly.JavaScript.valueToCode(block, 'parameter', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `, ${value_parameter}`;
    return code;
};

attris = {
    key: '名称',
    valueType: '值类型',
    label: '标签',
    labelAfter: '尾标签',
    defaultValue: '默认值'
};

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
    var code = `this.${text_props_name}=props.${text_props_name};\n`;
    return code;
};


Blockly.JavaScript['ivw_config'] = function (block) {
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
    var text_icon = block.getFieldValue('icon');
    var checkbox_generateblock = block.getFieldValue('generateBlock') === 'TRUE';
    var checkbox_inputsinline = block.getFieldValue('inputsInline') === 'TRUE';
    var number_space = block.getFieldValue('space');
    var code = `\
blockOptions: {
    color: ${value_color},
    icon: '${text_icon}',
    generateBlock: ${checkbox_generateblock},
    inputsInline: ${checkbox_inputsinline},
    space: ${number_space},
},`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ivw_setprop'] = function (block) {
    var text_name = block.getFieldValue('name');
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `this.${text_name} = ${value_value};\n`;
    return code;
};

Blockly.JavaScript['ivw_addFunction'] = function (block) {
    var functionName = block.getFieldValue('functionName');
    var statements_params = Blockly.JavaScript.statementToCode(block, 'params');
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    var code = `
Widget.prototype.${functionName} = function (${statements_params}) {
    ${statements_code}
}`;
    return code;
};

Blockly.JavaScript['ivw_addFunctionParam'] = function (block) {
    var paramName = block.getFieldValue('paramName');
    var code = paramName + ', ';
    return code;
};
