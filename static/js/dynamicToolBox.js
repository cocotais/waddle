//动态工具箱
function utilsFlyoutCallback(workspace) {
    var textList = [
        `<button text="实验性功能提示" callbackKey="betawarning">
		</button>`,
        `<block type="utils_import">
		</block>`,
        `<block type="utils_isnative">
		</block>`
    ]
    var gameList = [
        `
		<block type="game_tictactoe_board1">
			<comment pinned="true" h="80" w="160">一个井字棋棋盘！
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
		</block>`,
        `<block type="game_tictactoe_o">
		</block>`,
        `<block type="game_tictactoe_x">
		</block>`,
        `
		<block type="game_idiom_paper">
			<comment pinned="true" h="80" w="160">猜成语
一个人把另外三个字填上，空下一个字，另一人去猜
			</comment>
		</block>`,
        `<block type="game_chinese_chess_chessboard1">
    <next>
      <block type="game_chinese_chess_chessboard2">
        <value name="1">
          <block type="game_chinese_chess_black">
            <field name="NAME">車</field>
          </block>
        </value>
        <value name="2">
          <block type="game_chinese_chess_black">
            <field name="NAME">馬</field>
          </block>
        </value>
        <value name="3">
          <block type="game_chinese_chess_black">
            <field name="NAME">象</field>
          </block>
        </value>
        <value name="4">
          <block type="game_chinese_chess_black">
            <field name="NAME">士</field>
          </block>
        </value>
        <value name="5">
          <block type="game_chinese_chess_black">
            <field name="NAME">將</field>
          </block>
        </value>
        <value name="6">
          <block type="game_chinese_chess_black">
            <field name="NAME">士</field>
          </block>
        </value>
        <value name="7">
          <block type="game_chinese_chess_black">
            <field name="NAME">象</field>
          </block>
        </value>
        <value name="8">
          <block type="game_chinese_chess_black">
            <field name="NAME">馬</field>
          </block>
        </value>
        <value name="9">
          <block type="game_chinese_chess_black">
            <field name="NAME">車</field>
          </block>
        </value>
        <next>
          <block type="game_chinese_chess_chessboard2">
            <next>
              <block type="game_chinese_chess_chessboard2">
                <value name="2">
                  <block type="game_chinese_chess_black">
                    <field name="NAME">炮</field>
                  </block>
                </value>
                <value name="8">
                  <block type="game_chinese_chess_black">
                    <field name="NAME">炮</field>
                  </block>
                </value>
                <next>
                  <block type="game_chinese_chess_chessboard2">
                    <value name="1">
                      <block type="game_chinese_chess_black">
                        <field name="NAME">卒</field>
                      </block>
                    </value>
                    <value name="3">
                      <block type="game_chinese_chess_black">
                        <field name="NAME">卒</field>
                      </block>
                    </value>
                    <value name="5">
                      <block type="game_chinese_chess_black">
                        <field name="NAME">卒</field>
                      </block>
                    </value>
                    <value name="7">
                      <block type="game_chinese_chess_black">
                        <field name="NAME">卒</field>
                      </block>
                    </value>
                    <value name="9">
                      <block type="game_chinese_chess_black">
                        <field name="NAME">卒</field>
                      </block>
                    </value>
                    <next>
                      <block type="game_chinese_chess_chessboard2">
                        <next>
                          <block type="game_chinese_chess_chessboard4">
                            <next>
                              <block type="game_chinese_chess_chessboard2">
                                <next>
                                  <block type="game_chinese_chess_chessboard2">
                                    <value name="1">
                                      <block type="game_chinese_chess_red">
                                        <field name="NAME">兵</field>
                                      </block>
                                    </value>
                                    <value name="3">
                                      <block type="game_chinese_chess_red">
                                        <field name="NAME">兵</field>
                                      </block>
                                    </value>
                                    <value name="5">
                                      <block type="game_chinese_chess_red">
                                        <field name="NAME">兵</field>
                                      </block>
                                    </value>
                                    <value name="7">
                                      <block type="game_chinese_chess_red">
                                        <field name="NAME">兵</field>
                                      </block>
                                    </value>
                                    <value name="9">
                                      <block type="game_chinese_chess_red">
                                        <field name="NAME">兵</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="game_chinese_chess_chessboard2">
                                        <value name="2">
                                          <block type="game_chinese_chess_red">
                                            <field name="NAME">炮</field>
                                          </block>
                                        </value>
                                        <value name="8">
                                          <block type="game_chinese_chess_red">
                                            <field name="NAME">炮</field>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="game_chinese_chess_chessboard2">
                                            <next>
                                              <block type="game_chinese_chess_chessboard3">
                                                <value name="1">
                                                  <block type="game_chinese_chess_red">
                                                    <field name="NAME">車</field>
                                                  </block>
                                                </value>
                                                <value name="2">
                                                  <block type="game_chinese_chess_red">
                                                    <field name="NAME">馬</field>
                                                  </block>
                                                </value>
                                                <value name="3">
                                                  <block type="game_chinese_chess_red">
                                                    <field name="NAME">相</field>
                                                  </block>
                                                </value>
                                                <value name="4">
                                                  <block type="game_chinese_chess_red">
                                                    <field name="NAME">仕</field>
                                                  </block>
                                                </value>
                                                <value name="5">
                                                  <block type="game_chinese_chess_red">
                                                    <field name="NAME">帥</field>
                                                  </block>
                                                </value>
                                                <value name="6">
                                                  <block type="game_chinese_chess_red">
                                                    <field name="NAME">仕</field>
                                                  </block>
                                                </value>
                                                <value name="7">
                                                  <block type="game_chinese_chess_red">
                                                    <field name="NAME">相</field>
                                                  </block>
                                                </value>
                                                <value name="8">
                                                  <block type="game_chinese_chess_red">
                                                    <field name="NAME">馬</field>
                                                  </block>
                                                </value>
                                                <value name="9">
                                                  <block type="game_chinese_chess_red">
                                                    <field name="NAME">車</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>`,
        `<block type="game_weiqi_chessborad1">
    <next>
      <block type="game_weiqi_chessborad3">
        <next>
          <block type="game_weiqi_chessborad3">
            <next>
              <block type="game_weiqi_chessborad3">
                <next>
                  <block type="game_weiqi_chessborad3">
                    <next>
                      <block type="game_weiqi_chessborad3">
                        <next>
                          <block type="game_weiqi_chessborad3">
                            <next>
                              <block type="game_weiqi_chessborad3">
                                <next>
                                  <block type="game_weiqi_chessborad3">
                                    <next>
                                      <block type="game_weiqi_chessborad3">
                                        <next>
                                          <block type="game_weiqi_chessborad3">
                                            <next>
                                              <block type="game_weiqi_chessborad3">
                                                <next>
                                                  <block type="game_weiqi_chessborad3">
                                                    <next>
                                                      <block type="game_weiqi_chessborad3">
                                                        <next>
                                                          <block type="game_weiqi_chessborad3">
                                                            <next>
                                                              <block type="game_weiqi_chessborad3">
                                                                <next>
                                                                  <block type="game_weiqi_chessborad3">
                                                                    <next>
                                                                      <block type="game_weiqi_chessborad3">
                                                                        <next>
                                                                          <block type="game_weiqi_chessborad3">
                                                                            <next>
                                                                              <block type="game_weiqi_chessborad2"></block>
                                                                            </next>
                                                                          </block>
                                                                        </next>
                                                                      </block>
                                                                    </next>
                                                                  </block>
                                                                </next>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>`,
        `<block type="game_weiqi_black"></block>`,
        `<block type="game_weiqi_white"></block>`,
        `<block type="game_count"></block>`
    ];
    var xmlList = []
    for (var i = 0; i < textList.length; i++) {
        let block = Blockly.Xml.textToDom(textList[i]);
        xmlList.push(block);
    }
    console.log(window.mytitle)
    if (window.mytitle == "game") {
        for (var i = 0; i < gameList.length; i++) {
            let block = Blockly.Xml.textToDom(gameList[i]);
            xmlList.push(block);
        }
    }
    return xmlList;
};
function coloursFlyoutCallback(workspace) {
    var xmlList = [];
    var blockList = [
        `<block type="colour_picker">
		</block>`, `
		<block type="colour_random">
		</block>`, `
		<block type="colour_rgb">
			<value name="RED">
				<shadow type="math_number">
					<field name="TEXT">100</field>
				</shadow>
			</value>
			<value name="GREEN">
				<shadow type="math_number">
					<field name="TEXT">50</field>
				</shadow>
			</value>
			<value name="BLUE">
				<shadow type="math_number">
					<field name="TEXT">0</field>
				</shadow>
			</value>
		</block>`, `
		<block type="colour_blend">
			<value name="COLOUR1">
				<shadow type="colour_picker">
					<field name="TEXT">#ff0000</field>
				</shadow>
			</value>
			<value name="COLOUR2">
				<shadow type="colour_picker">
					<field name="TEXT">#3333ff</field>
				</shadow>
			</value>
			<value name="RATIO">
				<shadow type="math_number">
					<field name="TEXT">0.5</field>
				</shadow>
			</value>
		</block>`
    ]
    var cardList = [
        `<block type="what_waddle1">
		</block>`, `
		<block type="what_waddle2">
		</block>`, `
		<block type="what_waddle3">
		</block>`, `
		<block type="what_waddle4">
		</block>`, `
		<block type="what_waddle5">
		</block>`, `
		<block type="what_waddlerp">
		</block>`
    ]
    for (var i = 0; i < blockList.length; i++) {
        var block = Blockly.Xml.textToDom(blockList[i]);
        xmlList.push(block);
    }
    if (mytitle == "card") {
        for (var i = 0; i < cardList.length; i++) {
            var block = Blockly.Xml.textToDom(cardList[i]);
            xmlList.push(block);
        }
    }
    return xmlList;
};