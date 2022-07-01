Blockly.JavaScript['qrcode_import'] = function (block) {
    var code = "var qrcode = require('qrcode');\n";
    return code;
};

Blockly.JavaScript['qrcode_tocanvas'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var value_canva = Blockly.JavaScript.valueToCode(block, 'CANVA', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = `qrcode.toCanvas(${value_canva},${value_text}, function (error) {
${statements_name}
})`;
    return code;
};

Blockly.JavaScript['qrcode_err'] = function (block) {
    var code = 'error';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['qrcode_tocanvas_c'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = `qrode.toCanvas(${value_text},function (error, canvas) {
${statements_name}  
})`;
    return code;
};

Blockly.JavaScript['qrcode_canvas'] = function (block) {
    var code = 'canvas';
    return [code, Blockly.JavaScript.ORDER_NONE];
};
