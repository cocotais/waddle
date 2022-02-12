Blockly.JavaScript['html_element'] = function(block){
    var tag = block.getFieldValue('TAG');
    var inner = block.getFieldValue('INNER');
    let code = `<${tag}>${inner}</${tag}>`
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['html_element_ich'] = function(block){
    var tag = block.getFieldValue('TAG');
    var inner = Blockly.JavaScript.valueToCode(block, 'INNER', Blockly.JavaScript.ORDER_NONE) || "";
    let code = `<${tag}>${inner}</${tag}>`
    return [code, Blockly.JavaScript.ORDER_NONE];
}