Blockly.Blocks["what_waddle1"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(
        new Blockly.FieldImage(
          "./static/img/logo.svg",
          100,
          100,
          { alt: "*", flipRtl: "FALSE" }
        )
      );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Waddle卡1");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("集齐5种可获");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("得空气一份");
    this.setInputsInline(false);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
//嘿嘿，我只做了一个
Blockly.Blocks["game_tictactoe_board1"] = function () {
  return "";
};
Blockly.Blocks["game_tictactoe_board2"] = function () {
  return "";
};
Blockly.Blocks["game_tictactoe_board3"] = function () {
  return "";
};
Blockly.Blocks["game_tictactoe_o"] = function () {
  return "";
};
Blockly.Blocks["game_tictactoe_x"] = function () {
  return "";
};
/*function load_game() {
  let str = `
	<category name="游戏" css-icon="iconfont waddle-example">
		<block type="game_tictactoe_board1">
			<comment pinned="true" h="80" w="160">
				一个井字棋棋盘！
				拖动棋子到空位下棋！
			</comment>
			<next>
				<block type="game_tictactoe_board2">
					<next>
						<block type="game_tictactoe_board2">
							<next>
								<block type="game_tictactoe_board3">
								</block>
							</next>
						</block>
					</next>
				</block>
			</next>
		</block>
		<block type="game_tictactoe_o">
		</block>
		<block type="game_tictactoe_x">
		</block>
	</category>
    `;
  let parser = new DOMParser();
  let xmlDom = parser.parseFromString(str, "text/xml");
    document.getElementById("toolbox").appendChild(xmlDom);
    document.getElementById("toolbox").innerHTML=document.getElementById("toolbox").innerHTML+str
}
*/
