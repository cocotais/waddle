import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";javascriptGenerator['permissions_get'] = function (block) {
    var dropdown_gettype = block.getFieldValue('GETTYPE');
    var dropdown_type = block.getFieldValue('TYPE');
    switch (dropdown_gettype) {
        case 'THIS':
            var code = `var ${dropdown_type} = this.${dropdown_type};\n`;
            break;
    }
    return code;
};

javascriptGenerator['permissions_getall'] = function(){
    return `var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;`;
}

javascriptGenerator['permissions_document'] = function (block) {
    var code = 'document';
    return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator['permissions_window'] = function (block) {
    var code = 'window';
    return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator['permissions_navigator'] = function (block) {
    var code = 'navigator';
    return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator['permissions_history'] = function (block) {
    var code = 'history';
    return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator['permissions_call'] = function (block) {
    var dropdown_type = block.getFieldValue('TYPE');
    var text_code = block.getFieldValue('CODE');
    var code = `${dropdown_type}.${text_code};\n`;
    return code;
};

javascriptGenerator['permissions_call_return'] = function (block) {
    var dropdown_type = block.getFieldValue('TYPE');
    var text_code = block.getFieldValue('CODE');
    var code = `${dropdown_type}.${text_code}`;
    return [code, javascriptGenerator.ORDER_NONE];
};
