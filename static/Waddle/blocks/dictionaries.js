Blockly.Blocks['dict_pair'] = {
    init: function () {
        this.appendValueInput('key').setCheck(null).appendField('键');
        this.appendValueInput('value').setCheck(null).appendField('值');
        this.setInputsInline(true);
        this.setOutput(true, 'dict_pair');
        this.setColour(BlockColors['dict']);
        this.setTooltip('生成一个键值对');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['dict_set'] = {
    init: function () {
        this.appendValueInput('dict').setCheck('Dict').appendField('设置字典');
        this.appendValueInput('key').setCheck(null).appendField('键');
        this.appendValueInput('value').setCheck(null).appendField('的值为');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(BlockColors['dict']);
        this.setTooltip('设置一个键值对');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['dict_get'] = {
    init: function () {
        this.appendValueInput('dict').setCheck(null).appendField('获取字典');
        this.appendValueInput('key').setCheck(null).appendField('键');
        this.appendDummyInput().appendField('的值');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(BlockColors['dict']);
        this.setTooltip('获取一个键值对');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['dict_del'] = {
    init: function () {
        this.appendValueInput('dict').setCheck('Dict').appendField('删除字典');
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
                ['键为', '_key'],
                ['所有项', 'all']
            ]),
            'type'
        );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // this.setColour(BlockColors["dict"]);
        this.setColour(BlockColors['dict']);
        this.setTooltip('删除一个键值对');
        this.setHelpUrl('');
        this.appendValueInput('key').setCheck(null);
        this.appendDummyInput('t').appendField('的值');
    },
    onchange: function (event) {
        if (this.getFieldValue('type') == '_key') {
            if (!this.getInput('key')) {
                this.appendValueInput('key').setCheck(null);
                this.appendDummyInput('t').appendField('的值');
            }
        } else {
            if (this.getInput('key')) {
                this.removeInput('key');
                this.removeInput('t');
            }
        }
    }
};

Blockly.Blocks['dict_data'] = {
    init: function () {
        this.appendValueInput('dict').setCheck('Dict').appendField('字典');
        // dorpdown for length or keys or values
        this.appendDummyInput()
            .appendField('的')
            .appendField(
                new Blockly.FieldDropdown([
                    ['项数', 'length'],
                    ['所有键', 'keys'],
                    ['所有值', 'values']
                ]),
                'type'
            );
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(BlockColors['dict']);
        this.setTooltip('获取字典的长度、键或值');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['dict_has_key'] = {
    init: function () {
        this.appendValueInput('dict').setCheck('Dict').appendField('字典');
        this.appendValueInput('key').setCheck(null).appendField('键');
        this.appendDummyInput().appendField('是否存在');
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(BlockColors['dict']);
        this.setTooltip('判断字典是否存在某个键');
        this.setHelpUrl('');
    }
};

Blockly.Blocks.dict_create_with = {
	init: function () {
		this.setHelpUrl();
		this.setColour(BlockColors['dict']);
		this.setInputsInline(true);
		this.itemCount_ = 3;
		this.updateShape_();
		this.setOutput(!0, "Dict");
		this.setMutator(new Blockly.Mutator(["dict_create_with_item"]));
		this.setTooltip(Blockly.Msg.DICT_CREATE_WITH_TOOLTIP)
	},
	mutationToDom: function () {
		var a = document.createElement("mutation");
		a.setAttribute("items", this.itemCount_);
		return a
	},
	domToMutation: function (a) {
		this.itemCount_ = parseInt(a.getAttribute("items"), 10);
		this.updateShape_()
	},
	decompose: function (a) {
		var b = a.newBlock("dict_create_with_container");
		b.initSvg();
		for (var c = b.getInput("STACK").connection, d = 0; d < this.itemCount_; d++) {
			var e = a.newBlock("dict_create_with_item");
			e.initSvg();
			c.connect(e.previousConnection);
			c = e.nextConnection
		}
		return b
	},
	compose: function (a) {
		var b = a.getInputTargetBlock("STACK");
		for (a = []; b;) a.push(b.valueConnection_),
			b = b.nextConnection && b.nextConnection.targetBlock();
		for (b = 0; b < this.itemCount_; b++) {
			var c = this.getInput("ADD" + b).connection.targetConnection;
			c && -1 == a.indexOf(c) && c.disconnect()
		}
		this.itemCount_ = a.length;
		this.updateShape_();
		for (b = 0; b < this.itemCount_; b++) Blockly.Mutator.reconnect(a[b], this, "ADD" + b)
	},
	saveConnections: function (a) {
		a = a.getInputTargetBlock("STACK");
		for (var b = 0; a;) {
			var c = this.getInput("ADD" + b);
			a.valueConnection_ = c && c.connection.targetConnection;
			b++;
			a = a.nextConnection && a.nextConnection.targetBlock()
		}
	},
	updateShape_: function () {
		this.itemCount_ && this.getInput("EMPTY") ? this.removeInput("EMPTY") : this.itemCount_ || this.getInput("EMPTY") || this.appendDummyInput("EMPTY").appendField(Blockly.Msg.DICT_CREATE_EMPTY_TITLE);
		for (var a = 0; a < this.itemCount_; a++) if (!this.getInput("ADD" + a)) {
			var b = this.appendValueInput("ADD" + a).setCheck('dict_pair');
			0 == a && b.appendField(Blockly.Msg.DICT_CREATE_WITH_INPUT_WITH)
		}
		for (; this.getInput("ADD" + a);) this.removeInput("ADD" + a),
			a++
	}
};
Blockly.Blocks.dict_create_with_item = {
	init: function () {
		this.setColour(BlockColors['dict']);
		this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
		this.setTooltip(Blockly.Msg.DICT_CREATE_WITH_ITEM_TOOLTIP);
		this.contextMenu = !1
	}
};
Blockly.Blocks.dict_create_with_container = {
	init: function () {
		this.setColour(BlockColors['dict']);
		this.appendDummyInput().appendField(Blockly.Msg.DICT_CREATE_WITH_CONTAINER_TITLE_ADD);
		this.appendStatementInput("STACK");
		this.setTooltip(Blockly.Msg.DICT_CREATE_WITH_CONTAINER_TOOLTIP);
		this.contextMenu = !1
	}
};