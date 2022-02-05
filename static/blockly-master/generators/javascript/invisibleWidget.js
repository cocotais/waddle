Blockly.JavaScript['ivw_invisiblewidgettypes'] = function(block) {
  var text_type = block.getFieldValue('type');
  var text_icon = block.getFieldValue('icon');
  var text_title = block.getFieldValue('title');
  var checkbox_isglobalwidget = block.getFieldValue('isGlobalWidget') === 'TRUE';
  var value_properties = Blockly.JavaScript.valueToCode(block, 'properties', Blockly.JavaScript.ORDER_ATOMIC);
  var value_methods = Blockly.JavaScript.valueToCode(block, 'methods', Blockly.JavaScript.ORDER_ATOMIC);
  var value_event = Blockly.JavaScript.valueToCode(block, 'event', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['ivw_invisiblewidgetclass'] = function(block) {
  var statements_constructor = Blockly.JavaScript.statementToCode(block, 'constructor');
  var value_functions = Blockly.JavaScript.valueToCode(block, 'functions', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['ivw_invisiblewidget'] = function(block) {
  var statements_invisiblewidgettypes = Blockly.JavaScript.statementToCode(block, 'invisibleWidgetTypes');
  var statements_invisiblewidgetclass = Blockly.JavaScript.statementToCode(block, 'invisibleWidgetClass');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};