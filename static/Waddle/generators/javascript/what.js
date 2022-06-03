Blockly.JavaScript["what_waddle1"] = function (block) {
  return Math.trunc(new Date().getTime() / 1000) % 2 == 1
    ? '"Waddle - 让Coco没有难做的控件"'
    : '"新年快乐(?)"';
};
Blockly.JavaScript["what_waddle2"] = function (block) {
  return Math.trunc(new Date().getTime() / 1000) % 2 == 1
    ? '"Waddle - 让Coco没有难做的控件"'
    : '"新年快乐(?)"';
};
Blockly.JavaScript["what_waddle3"] = function (block) {
  return Math.trunc(new Date().getTime() / 1000) % 2 == 1
    ? '"Waddle - 让Coco没有难做的控件"'
    : '"新年快乐(?)"';
};
Blockly.JavaScript["what_waddle4"] = function (block) {
  return Math.trunc(new Date().getTime() / 1000) % 2 == 1
    ? '"Waddle - 让Coco没有难做的控件"'
    : '"新年快乐(?)"';
};
Blockly.JavaScript["what_waddle5"] = function (block) {
  return Math.trunc(new Date().getTime() / 1000) % 2 == 1
    ? '"Waddle - 让Coco没有难做的控件"'
    : '"新年快乐(?)"';
};
//Waddle下井字棋
Blockly.Blocks["game_tictactoe_board1"] = {
  init: function () {
    this.appendDummyInput().appendField("=====井字棋=====");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["game_tictactoe_board2"] = {
  init: function () {
    this.appendValueInput("1")
      .setCheck("tpieces")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.appendValueInput("2")
      .setCheck("tpieces")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("3")
      .setCheck("tpieces")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["game_tictactoe_board3"] = {
  init: function () {
    this.appendValueInput("1")
      .setCheck("tpieces")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.appendValueInput("2")
      .setCheck("tpieces")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("3")
      .setCheck("tpieces")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["game_tictactoe_x"] = {
  init: function () {
    this.appendDummyInput().appendField("X");
    this.setOutput(true, "tpieces");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["game_tictactoe_o"] = {
  init: function () {
    this.appendDummyInput().appendField("O");
    this.setOutput(true, "tpieces");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["what_waddlerp"]=function(){return '"rp++;"\n'}