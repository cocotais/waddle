Blockly.Blocks['what_waddle1'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage('https://waddle.coco-central.cn/static/img/logo.svg', 100, 100, { alt: '*', flipRtl: 'FALSE' }));
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('Waddle卡1');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('集齐5种可获');
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('得空气一份');
        this.setInputsInline(false);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//嘿嘿，我只做了一个
