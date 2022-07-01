Blockly.Blocks['what_waddle1'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage('https://waddle.coco-central.cn/static/img/logo/logo-white.svg', 100, 100, { alt: '*', flipRtl: 'FALSE' }));
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('Waddle卡1');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('集齐5种可获');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('得空气一份');
        this.setInputsInline(false);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['what_waddle2'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage('https://waddle.coco-central.cn/static/img/logo/logo-white.svg', 100, 100, { alt: '*', flipRtl: 'FALSE' }));
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('Waddle卡2');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('集齐5种可获');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('得空气一份');
        this.setInputsInline(false);
        this.setColour('#3b5bdb');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['what_waddle3'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage('https://waddle.coco-central.cn/static/img/logo/logo-white.svg', 100, 100, { alt: '*', flipRtl: 'FALSE' }));
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('Waddle卡3');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('集齐5种可获');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('得空气一份');
        this.setInputsInline(false);
        this.setColour('#087f5b');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['what_waddle4'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage('https://waddle.coco-central.cn/static/img/logo/logo-white.svg', 100, 100, { alt: '*', flipRtl: 'FALSE' }));
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('Waddle卡4');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('集齐5种可获');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('得空气一份');
        this.setInputsInline(false);
        this.setColour('#e67700');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['what_waddle5'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage('https://waddle.coco-central.cn/static/img/logo/logo-white.svg', 100, 100, { alt: '*', flipRtl: 'FALSE' }));
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('Waddle卡5');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('集齐5种可获');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('得空气一份');
        this.setInputsInline(false);
        this.setColour('#c92a2a');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['what_waddlerp'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage('https://waddle.coco-central.cn/static/img/logo/logo-white.svg', 100, 100, { alt: '*', flipRtl: 'FALSE' }));
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('人品卡');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('持有此卡可');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('使rp++');
        this.setInputsInline(false);
        this.setColour('#d9d9d9');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//做完了，只放一个
Blockly.JavaScript['game_tictactoe_board1'] = function () {
    return '';
};
Blockly.JavaScript['game_tictactoe_board2'] = function () {
    return '';
};
Blockly.JavaScript['game_tictactoe_board3'] = function () {
    return '';
};
Blockly.JavaScript['game_tictactoe_o'] = function () {
    return '';
};
Blockly.JavaScript['game_tictactoe_x'] = function () {
    return '';
};
Blockly.Blocks['game_idiom_paper'] = {
    init: function () {
        this.appendDummyInput().appendField('猜成语').appendField(new Blockly.FieldTextInput('字'), '1').appendField(new Blockly.FieldTextInput('字'), '2').appendField(new Blockly.FieldTextInput('字'), '3').appendField(new Blockly.FieldTextInput('字'), '4');
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.JavaScript['game_idiom_paper'] = function () {
    return '';
};
/*function load_game() {
  let str = `
	<category name="游戏" css-icon="waddle-object">
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

Blockly.Blocks['game_chinese_chess_chessboard1'] = {
    init: function () {
        this.appendDummyInput().appendField('======象棋======');
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['game_chinese_chess_chessboard2'] = {
    init: function () {
        this.appendValueInput('1').setCheck(null);
        this.appendValueInput('2').setCheck(null);
        this.appendValueInput('3').setCheck(null);
        this.appendValueInput('4').setCheck(null);
        this.appendValueInput('5').setCheck(null);
        this.appendValueInput('6').setCheck(null);
        this.appendValueInput('7').setCheck(null);
        this.appendValueInput('8').setCheck(null);
        this.appendValueInput('9').setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['game_chinese_chess_chessboard3'] = {
    init: function () {
        this.appendValueInput('1').setCheck(null);
        this.appendValueInput('2').setCheck(null);
        this.appendValueInput('3').setCheck(null);
        this.appendValueInput('4').setCheck(null);
        this.appendValueInput('5').setCheck(null);
        this.appendValueInput('6').setCheck(null);
        this.appendValueInput('7').setCheck(null);
        this.appendValueInput('8').setCheck(null);
        this.appendValueInput('9').setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['game_chinese_chess_black'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldTextInput(''), 'NAME');
        this.setOutput(true, null);
        this.setColour('#25332c');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['game_chinese_chess_red'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldTextInput(''), 'NAME');
        this.setOutput(true, null);
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['game_chinese_chess_chessboard4'] = {
    init: function () {
        this.appendDummyInput().appendField('=========楚河  漢界=========');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.JavaScript['game_chinese_chess_chessboard1'] = function () {
    return '';
};
Blockly.JavaScript['game_chinese_chess_chessboard2'] = function () {
    return '';
};
Blockly.JavaScript['game_chinese_chess_chessboard3'] = function () {
    return '';
};
Blockly.JavaScript['game_chinese_chess_chessboard4'] = function () {
    return '';
};

Blockly.JavaScript['game_chinese_chess_black'] = function () {
    return '';
};

Blockly.JavaScript['game_chinese_chess_red'] = function () {
    return '';
};
Blockly.Blocks['game_weiqi_chessborad3'] = {
    init: function () {
        this.appendValueInput('1').setCheck(null);
        this.appendValueInput('2').setCheck(null);
        this.appendValueInput('3').setCheck(null);
        this.appendValueInput('4').setCheck(null);
        this.appendValueInput('5').setCheck(null);
        this.appendValueInput('6').setCheck(null);
        this.appendValueInput('7').setCheck(null);
        this.appendValueInput('8').setCheck(null);
        this.appendValueInput('9').setCheck(null);
        this.appendValueInput('10').setCheck(null);
        this.appendValueInput('11').setCheck(null);
        this.appendValueInput('12').setCheck(null);
        this.appendValueInput('13').setCheck(null);
        this.appendValueInput('14').setCheck(null);
        this.appendValueInput('15').setCheck(null);
        this.appendValueInput('16').setCheck(null);
        this.appendValueInput('17').setCheck(null);
        this.appendValueInput('18').setCheck(null);
        this.appendValueInput('19').setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['game_weiqi_chessborad2'] = {
    init: function () {
        this.appendValueInput('1').setCheck(null);
        this.appendValueInput('2').setCheck(null);
        this.appendValueInput('3').setCheck(null);
        this.appendValueInput('4').setCheck(null);
        this.appendValueInput('5').setCheck(null);
        this.appendValueInput('6').setCheck(null);
        this.appendValueInput('7').setCheck(null);
        this.appendValueInput('8').setCheck(null);
        this.appendValueInput('9').setCheck(null);
        this.appendValueInput('10').setCheck(null);
        this.appendValueInput('11').setCheck(null);
        this.appendValueInput('12').setCheck(null);
        this.appendValueInput('13').setCheck(null);
        this.appendValueInput('14').setCheck(null);
        this.appendValueInput('15').setCheck(null);
        this.appendValueInput('16').setCheck(null);
        this.appendValueInput('17').setCheck(null);
        this.appendValueInput('18').setCheck(null);
        this.appendValueInput('19').setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['game_weiqi_chessborad1'] = {
    init: function () {
        this.appendDummyInput().appendField('===============围棋===============');
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['game_weiqi_black'] = {
    init: function () {
        this.setOutput(true, null);
        this.setColour('#000');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.Blocks['game_weiqi_white'] = {
    init: function () {
        this.setOutput(true, null);
        this.setColour('#fff');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.JavaScript['game_weiqi_black'] = function () {
    return '';
};

Blockly.JavaScript['game_weiqi_white'] = function () {
    return '';
};

Blockly.JavaScript['game_weiqi_chessborad1'] = function () {
    return '';
};

Blockly.JavaScript['game_weiqi_chessborad2'] = function () {
    return '';
};
Blockly.JavaScript['game_weiqi_chessborad1'] = function () {
    return '';
};
Blockly.JavaScript['game_weiqi_chessborad3'] = function () {
    return '';
};
Blockly.Blocks['game_count'] = {
    init: function () {
        this.appendDummyInput().appendField(' = 计数器 =');
        this.appendDummyInput().appendField('黑').appendField(new Blockly.FieldTextInput('0'), 'b').appendField('白').appendField(new Blockly.FieldTextInput('0'), 'w');
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
Blockly.JavaScript['game_count'] = function () {
    return '';
};
