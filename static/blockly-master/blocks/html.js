Blockly.Blocks['html_noa_tag_comment'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("注释")
            .appendField(new Blockly.FieldTextInput("内容"), "TEXT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("HTML注释。");
        this.setHelpUrl("https://www.runoob.com/tags/tag-comment.html");
    }
};

Blockly.Blocks['html_text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("HTML文本")
            .appendField(new Blockly.FieldTextInput("内容"), "TEXT");
        this.setColour(315);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);

        this.setTooltip("一个用于放入HTML标签的文本。");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['html_noa_tag_a'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('a');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义锚。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_abbr'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('abbr');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义缩写。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_address'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('address');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文档作者或拥有者的联系信息。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_area'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('area');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义图像映射内部的区域。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_article'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('article');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文章。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_aside'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('aside');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义页面内容之外的内容。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_audio'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('audio');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义声音内容。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_b'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('b');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义粗体字。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_base'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('base');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义页面中所有链接的默认地址或默认目标。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_bdi'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('bdi');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文本的文本方向，使其脱离其周围文本的方向设置。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_bdo'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('bdo');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文字方向。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_blockquote'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('blockquote');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义长的引用。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_body'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('body');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文档的主体。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_br'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('br');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义简单的折行。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_button'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('button');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义按钮 (push button)。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_canvas'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('canvas');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义图形。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_caption'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('caption');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义表格标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_cite'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('cite');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义引用(citation)。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_code'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('code');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义计算机代码文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_col'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('col');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义表格中一个或多个列的属性值。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_colgroup'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('colgroup');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义表格中供格式化的列组。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_data'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('data');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('添加给定内容的机器可读翻译。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_datalist'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('datalist');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义下拉列表。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_dd'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('dd');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义定义列表中项目的描述。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_del'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('del');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义被删除文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_details'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('details');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义元素的细节。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_div'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('div');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文档中的节。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_dfn'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('dfn');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义定义项目。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_dialog'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('dialog');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义对话框或窗口。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_dl'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('dl');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义定义列表。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_dt'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('dt');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义定义列表中的项目。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_em'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('em');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义强调文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_embed'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('embed');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义外部交互内容或插件。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_fieldset'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('fieldset');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义围绕表单中元素的边框。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_figcaption'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('figcaption');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义 figure 元素的标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_figure'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('figure');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义媒介内容的分组，以及它们的标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_footer'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('footer');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义 section 或 page 的页脚。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_form'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('form');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义供用户输入的 HTML 表单。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_h1'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('h1');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义1级标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_h2'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('h2');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义2级标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_h3'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('h3');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义3级标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_h4'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('h4');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义4级标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_h5'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('h5');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义5级标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_h6'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('h6');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义6级标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_head'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('head');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义关于文档的信息。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_header'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('header');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义 section 或 page 的页眉。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_hr'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('hr');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义水平线。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_html'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('html');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义 HTML 文档。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_i'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('i');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义斜体字。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_iframe'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('iframe');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义内联框架。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_img'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('img');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义图像。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_input'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('input');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义输入控件。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_ins'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('ins');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义被插入文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_isindex'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('isindex');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义与文档相关的可搜索索引。不赞成使用。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_kbd'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('kbd');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义键盘文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_keygen'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('keygen');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义生成密钥。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_label'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('label');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义 input 元素的标注。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_legend'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('legend');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义 fieldset 元素的标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_li'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('li');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义列表的项目。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_link'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('link');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文档与外部资源的关系。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_main'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('main');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文档的主要内容。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_map'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('map');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义图像映射。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_mark'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('mark');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义有记号的文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_menu'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('menu');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义命令的列表或菜单。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_menuitem'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('menuitem');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义用户可以从弹出菜单调用的命令/菜单项目。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_meta'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('meta');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义关于 HTML 文档的元信息。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_meter'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('meter');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义预定义范围内的度量。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_nav'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('nav');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义导航链接。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_noscript'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('noscript');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义针对不支持客户端脚本的用户的替代内容。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_object'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('object');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义内嵌对象。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_ol'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('ol');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义有序列表。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_optgroup'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('optgroup');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义选择列表中相关选项的组合。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_option'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('option');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义选择列表中的选项。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_output'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('output');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义输出的一些类型。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_p'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('p');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义段落。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_param'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('param');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义对象的参数。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_pre'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('pre');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义预格式文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_progress'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('progress');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义任何类型的任务的进度。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_q'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('q');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义短的引用。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_rp'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('rp');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义若浏览器不支持 ruby 元素显示的内容。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_rt'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('rt');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义 ruby 注释的解释。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_ruby'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('ruby');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义 ruby 注释。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_s'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('s');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义加删除线的文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_samp'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('samp');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义计算机代码样本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_script'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('script');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义客户端脚本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_section'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('section');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义 section。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_select'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('select');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义选择列表（下拉列表）。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_small'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('small');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义小号文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_source'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('source');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义媒介源。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_span'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('span');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文档中的节。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_strong'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('strong');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义强调文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_style'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('style');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文档的样式信息。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_sub'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('sub');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义下标文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_summary'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('summary');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('为 <detail');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_sup'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('sup');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义上标文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_svg'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('svg');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义 SVG 图形的容器。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_table'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('table');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义表格。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_tbody'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('tbody');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义表格中的主体内容。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_td'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('td');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义表格中的单元。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_template'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('template');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义用作容纳页面加载时隐藏内容的容器。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_textarea'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('textarea');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义多行的文本输入控件。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_tfoot'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('tfoot');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义表格中的表注内容（脚注）。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_th'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('th');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义表格中的表头单元格。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_thead'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('thead');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义表格中的表头内容。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_time'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('time');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义日期/时间。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_title'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('title');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文档的标题。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_tr'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('tr');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义表格中的行。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_track'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('track');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义用在媒体播放器中的文本轨道。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_u'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('u');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义下划线文本。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_ul'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('ul');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义无序列表。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_var'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('var');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义文本的变量部分。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_video'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('video');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义视频。');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['html_noa_tag_wbr'] = {
    init: function () {
        this.appendStatementInput('INNER')
            .setCheck(null)
            .appendField('wbr');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip('定义可能的换行符');
        this.setHelpUrl('');
    }
};

