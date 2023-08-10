import Blockly from "blockly";Blockly.Blocks["js_run"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("代码")
      .appendField(new Blockly.FieldTextInput("console.log(233);"), "CODE");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip(
      "自己设定js代码。需要加分号，不需要加换行符。(感谢青PG5p提出意见！)"
    );
    this.setHelpUrl("https://www.w3school.com.cn/js/index.asp");
  },
};

Blockly.Blocks["js_run2"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("代码")
      .appendField(new Blockly.FieldTextInput("console.log(233)"), "CODE");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip(
      "自己设定js代码。需要加分号，不需要加换行符。(感谢青PG5p提出意见！)"
    );
    this.setHelpUrl("https://www.w3school.com.cn/js/index.asp");
  },
};

Blockly.Blocks["js_run_join"] = {
  init: function () {
    this.appendDummyInput().appendField("拼接代码");
    this.appendValueInput("CODE1");
    this.appendValueInput("CODE2");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip("拼接自定义的代码");
    this.setHelpUrl("https://www.w3school.com.cn/js/index.asp");
  },
};

Blockly.Blocks["js_usestrict"] = {
  init: function () {
    this.appendDummyInput().appendField("使用严格模式");
    this.setColour("#77d657");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("在js代码里使用严格模式。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_strict.asp");
  },
};

Blockly.Blocks["js_bitwise"] = {
  init: function () {
    this.appendDummyInput().appendField("位运算");
    this.appendValueInput("VALUE1").setCheck("Number");
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["和", "&"],
        ["或", "|"],
        ["异或", "^"],
        ["零填充左位移", "<<"],
        ["有符号右位移", ">>"],
        ["零填充右位移", ">>>"],
      ]),
      "TYPE"
    );
    this.appendValueInput("VALUE2").setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#feae8a");
    this.setTooltip("位运算。返回二进制数。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_bitwise.asp");
  },
};

Blockly.Blocks["js_comparisons"] = {
  init: function () {
    this.appendDummyInput().appendField("比较");
    this.appendValueInput("VALUE1").setCheck(null);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["等于", "=="],
        ["值相等并且类型相等", "==="],
        ["不相等", "!="],
        ["值不相等或类型不相等", "!=="],
        ["大于", ">"],
        ["小于", "<"],
        ["大于或等于", ">="],
        ["小于或等于", "<="],
      ]),
      "TYPE"
    );
    this.appendValueInput("VALUE2").setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour("#feae8a");
    this.setTooltip("比较。返回布尔值。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_comparisons.asp");
  },
};

Blockly.Blocks["js_time"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("获取现在")
      .appendField(
        new Blockly.FieldDropdown([
          ["时间戳", "new Date().getTime()"],
          ["年份", "new Date().getFullYear()"],
          ["月份", "new Date().getMonth()"],
          ["日", "new Date().getDate()"],
          ["小时", "new Date().getHours()"],
          ["分钟", "new Date().getMinutes()"],
          ["秒数", "new Date().getSeconds()"],
          ["毫秒数", "new Date().getMilliseconds()"],
          ["星期", "new Date().getDay()"],
        ]),
        "TYPE"
      );
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip(
      "获取现在的时间。(月份返回0到11间的数，星期返回0到6之间的数。)"
    );
    this.setHelpUrl("https://www.w3school.com.cn/js/js_date_methods.asp");
  },
};

Blockly.Blocks["js_popup_alert"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("弹出警告框，内容");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("弹出一个警告框。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_popup.asp");
  },
};

Blockly.Blocks["js_popup_confirm"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("弹出确认框并获取选择状态，内容");
    this.setOutput(true, "Boolean");
    this.setColour("#77d657");
    this.setTooltip("弹出一个确认框。返回布尔值");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_popup.asp");
  },
};

Blockly.Blocks["js_popup_prompt"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("弹出输入框并获取输入，内容");
    this.setOutput(true, "String");
    this.setColour("#77d657");
    this.setTooltip("弹出一个输入框。返回输入内容。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_popup.asp");
  },
};

Blockly.Blocks["js_json_parse"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck("String").appendField("将json文本");
    this.appendDummyInput().appendField("解析为对象");
    this.setInputsInline(true);
    this.setOutput(true, "Object");
    this.setColour("#77d657");
    this.setTooltip("解析json字符串为对象。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_json_parse.asp");
  },
};

Blockly.Blocks["js_json_stringify"] = {
  init: function () {
    this.appendValueInput("OBJECT")
      .setCheck("Object")
      .appendField("将json对象");
    this.appendDummyInput().appendField("转为文本");
    this.setOutput(true, "String");
    this.setColour("#77d657");
    this.setTooltip("将对象转为json字符串。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_json_stringify.asp");
  },
};

Blockly.Blocks["js_json_access"] = {
  init: function () {
    this.appendValueInput("OBJECT")
      .setCheck("Object")
      .appendField("获取json对象");
    this.appendValueInput("KEY").setCheck("String").appendField("属性为");
    this.appendDummyInput().appendField("的值");
    this.setOutput(true, null);
    this.setColour("#77d657");
    this.setTooltip("获取对象的键的值");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_json_objects.asp");
  },
};

Blockly.Blocks["js_window_screen"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("获取屏幕")
      .appendField(
        new Blockly.FieldDropdown([
          ["宽度", "screen.width"],
          ["高度", "screen.height"],
        ]),
        "TYPE"
      );
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip("获取屏幕的长或宽。单位为像素，返回数字。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_window.asp");
  },
};

Blockly.Blocks["js_window_avail_screen"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("获取屏幕可用")
      .appendField(
        new Blockly.FieldDropdown([
          ["宽度", "screen.availWidth"],
          ["高度", "screen.availHeight"],
        ]),
        "TYPE"
      );
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip(
      "获取屏幕可用的长或宽，减去诸如窗口工具条之类的界面特征。单位为像素，返回数字。"
    );
    this.setHelpUrl("https://www.w3school.com.cn/js/js_window.asp");
  },
};

Blockly.Blocks["js_window_depth"] = {
  init: function () {
    this.appendDummyInput().appendField("获取屏幕色深");
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip("获取屏幕色深。返回用于显示一种颜色的比特数。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_window_screen.asp");
  },
};

Blockly.Blocks["js_window_pixeldepth"] = {
  init: function () {
    this.appendDummyInput().appendField("获取屏幕像素深度");
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip(
      "屏幕的像素深度。返回字符串。对于现代计算机，颜色深度和像素深度是相等的。"
    );
    this.setHelpUrl("https://www.w3school.com.cn/js/js_window_screen.asp");
  },
};

Blockly.Blocks["js_navigator_online"] = {
  init: function () {
    this.appendDummyInput().appendField("是否有网络？");
    this.setOutput(true, "Boolean");
    this.setColour("#77d657");
    this.setTooltip("判断用户是否有网络。返回布尔值。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_window_screen.asp");
  },
};

Blockly.Blocks["js_navigator_language"] = {
  init: function () {
    this.appendDummyInput().appendField("获取浏览器语言");
    this.setOutput(true, "String");
    this.setColour("#77d657");
    this.setTooltip("用户的浏览器语言。返回字符串。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_window_screen.asp");
  },
};

Blockly.Blocks["js_navigator_platform"] = {
  init: function () {
    this.appendDummyInput().appendField("获取操作系统");
    this.setOutput(true, "String");
    this.setColour("#77d657");
    this.setTooltip("用户的操作系统。返回字符串。");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_window_navigator.asp");
  },
};

Blockly.Blocks["js_math_constant"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("数学常量")
      .appendField(
        new Blockly.FieldDropdown([
          ["e", "Math.E"],
          ["π", "Math.PI"],
          ["2的平方根", "Math.SQRT2"],
          ["0.5的平方根", "Math.SQRT1_2"],
          ["2的自然对数", "Math.LN2"],
          ["10的自然对数", "Math.LN10"],
        ]),
        "TYPE"
      );
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip("数学常量。返回数字");
    this.setHelpUrl("https://www.w3school.com.cn/js/js_math.asp");
  },
};

Blockly.Blocks["js_console_clean"] = {
  init: function () {
    this.appendDummyInput().appendField("清空控制台");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("清除当前控制台的所有输出，将光标回置到第一行。");
    this.setHelpUrl(
      "https://www.runoob.com/w3cnote/javascript-console-object.html"
    );
  },
};

Blockly.Blocks["js_console_count"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck("String").appendField("控制台计数");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("用于计数，输出它被调用了多少次。");
    this.setHelpUrl(
      "https://www.runoob.com/w3cnote/javascript-console-object.html"
    );
  },
};

Blockly.Blocks["js_console_error"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck("String").appendField("控制台报错");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip(
      "输出信息时，在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈。"
    );
    this.setHelpUrl(
      "https://www.runoob.com/w3cnote/javascript-console-object.html"
    );
  },
};

Blockly.Blocks["js_console_warn"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck("String").appendField("控制台警告");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("输出警告信息。");
    this.setHelpUrl(
      "https://www.runoob.com/w3cnote/javascript-console-object.html"
    );
  },
};

Blockly.Blocks["js_console_log"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck("String").appendField("控制台输出");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("输出信息。（不建议使用太多）");
    this.setHelpUrl(
      "https://www.runoob.com/w3cnote/javascript-console-object.html"
    );
  },
};

Blockly.Blocks["js_console_time"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("控制台计时开始");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("计时开始！");
    this.setHelpUrl(
      "https://www.runoob.com/w3cnote/javascript-console-object.html"
    );
  },
};

Blockly.Blocks["js_console_timeend"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("控制台计时结束");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("计时结束，并在控制台输出时间。");
    this.setHelpUrl(
      "https://www.runoob.com/w3cnote/javascript-console-object.html"
    );
  },
};

Blockly.Blocks["js_base64"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Base64转换")
      .appendField(
        new Blockly.FieldDropdown([
          ["编码", "BM"],
          ["解码", "JM"],
        ]),
        "TYPE"
      );
    this.appendValueInput("TEXT").setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#feae8a");
    this.setTooltip("进行base64转换");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["js_ln"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck("Number").appendField("ln");
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip("进行ln运算");
    this.setHelpUrl("https://www.w3cschool.cn/wkjavascript/8ct21o9o.html");
  },
};

Blockly.Blocks["js_uri"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("URI")
      .appendField(
        new Blockly.FieldDropdown([
          ["编码", "encodeURI"],
          ["解码", "decodeURI"],
        ]),
        "MODE"
      );
    this.setColour("#feae8a");
    this.appendValueInput("URI")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setTooltip("对uri进行编解码。");
    this.setHelpUrl("https://www.w3school.com.cn/jsref/jsref_encodeuri.asp");
  },
};

Blockly.Blocks["js_replace"] = {
  init: function () {
    this.appendDummyInput().appendField("字符串替换");
    this.appendValueInput("STR")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("把");
    this.appendValueInput("STR1")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("中的")
      .appendField(new Blockly.FieldDropdown([["第一个","replace"], ["所有","replaceAll"]]), "MODE");
    this.appendValueInput("STR2")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("替换为");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#feae8a");
    this.setTooltip("替换原字符串里的所有关键词内容。");
    this.setHelpUrl("https://www.w3school.com.cn/jsref/jsref_replace.asp");
  },
};

Blockly.Blocks["js_powerandlower"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("字母")
      .appendField(
        new Blockly.FieldDropdown([
          ["转大写", "toUpperCase()"],
          ["转小写", "toLowerCase()"],
        ]),
        "MODE"
      );
    this.appendValueInput("STR")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#feae8a");
    this.setTooltip("将字符串里的字母转为大写或小写");
    this.setHelpUrl("https://www.w3school.com.cn/jsref/jsref_toLowerCase.asp");
  },
};

Blockly.Blocks["js_with"] = {
  init: function () {
    this.appendValueInput("STR1")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput().appendField("是否以");
    this.appendValueInput("STR2")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["开头", "startsWith"],
        ["结束", "endsWith"],
      ]),
      "MODE"
    );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour("#feae8a");
    this.setTooltip("判断字符串是否以子字符串开头/结尾");
    this.setHelpUrl("https://www.runoob.com/jsref/jsref-startswith.html");
  },
};

Blockly.Blocks["js_trim"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.setOutput(true, "String");
    this.setColour("#feae8a");
    this.setTooltip("去掉字符串首尾空格");
    this.setHelpUrl("https://www.runoob.com/jsref/jsref-trim.html");
  },
};

Blockly.Blocks["js_repeat"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput().appendField("重复");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput().appendField("次");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#feae8a");
    this.setTooltip("将字符串重复");
    this.setHelpUrl("https://www.runoob.com/jsref/jsref-repeat.html");
  },
};

Blockly.Blocks["js_pad"] = {
  init: function () {
    this.appendValueInput("STR1")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput()
      .appendField("补全")
      .appendField(
        new Blockly.FieldDropdown([
          ["开头", "padStart"],
          ["结尾", "padEnd"],
        ]),
        "MODE"
      );
    this.appendValueInput("NUM")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("到长度为");
    this.appendDummyInput().appendField("，补全符为");
    this.appendValueInput("STR2")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE);
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#feae8a");
    this.setTooltip("将字符串重复");
    this.setHelpUrl(
      "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart"
    );
  },
};

Blockly.Blocks["js_escape"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("非ASCII字符");
    this.appendDummyInput()
      .appendField("Unicode")
      .appendField(
        new Blockly.FieldDropdown([
          ["编码", "escape"],
          ["解码", "unescape"],
        ]),
        "MODE"
      );
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#feae8a");
    this.setTooltip("ASCII之外的所有字符编解码");
    this.setHelpUrl("https://www.w3school.com.cn/jsref/jsref_escape.asp");
  },
};

Blockly.Blocks["js_base"] = {
  init: function () {
    this.appendValueInput("NUM")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("数字");
    this.appendDummyInput()
      .appendField("转进制")
      .appendField(new Blockly.FieldNumber(2, 2, 32), "BASE");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#feae8a");
    this.setTooltip("将数字转为2~32位的数字。");
    this.setHelpUrl("https://www.runoob.com/jsref/jsref-tostring-number.html");
  },
};

Blockly.Blocks["js_str_index"] = {
  init: function () {
    this.appendValueInput("STR1").setCheck("String").appendField("匹配字符串");
    this.appendValueInput("STR2").setCheck("String").appendField("中的");
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["第一次", "indexOf("],
          ["最后一次", "lastIndexOf("],
        ]),
        "TYPE"
      )
      .appendField("出现的位置");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["js_array_sort"] = {
  init: function () {
    this.appendValueInput("ARRAY").setCheck("Array").appendField("排序列表");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["js_array_reverse"] = {
  init: function () {
    this.appendValueInput("ARRAY").setCheck("Array").appendField("翻转列表");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["js_array_join"] = {
  init: function () {
    this.appendValueInput("ARRAY")
      .setCheck("Array")
      .appendField("连接列表为字符串");
    this.appendValueInput("STR").setCheck("String").appendField("分隔符为");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["js_function_value"] = {
  init: function () {
    this.appendDummyInput().appendField("定义函数");
    this.appendStatementInput("P").setCheck(null).appendField("参数");
    this.appendStatementInput("C").setCheck(null).appendField("执行代码");
    this.setOutput(true, null);
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["js_function_run"] = {
  init: function () {
    this.appendDummyInput().appendField("运行函数");
    this.appendValueInput("V").setCheck(null);
    this.appendStatementInput("P").setCheck(null).appendField("参数");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["js_function_param_define"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("定义参数名")
      .appendField(new Blockly.FieldTextInput("name"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["js_function_param"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("传入参数值");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["js_settimeout"] = {
  init: function () {
    this.appendValueInput("F").setCheck(null).appendField("运行函数");
    this.appendValueInput("T").setCheck(null).appendField("于");
    this.appendDummyInput().appendField("毫秒后");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["js_settimeout2"] = {
  init: function () {
    this.appendValueInput("F").setCheck(null).appendField("运行函数");
    this.appendValueInput("T").setCheck(null).appendField("于");
    this.appendDummyInput().appendField("毫秒后");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["js_setinterval"] = {
  init: function () {
    this.appendValueInput("F").setCheck(null).appendField("运行函数");
    this.appendValueInput("T").setCheck(null).appendField("每隔");
    this.appendDummyInput().appendField("毫秒");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["js_setinterval2"] = {
  init: function () {
    this.appendValueInput("F").setCheck(null).appendField("运行函数");
    this.appendValueInput("T").setCheck(null).appendField("每隔");
    this.appendDummyInput().appendField("毫秒");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["js_location"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("获取当前界面")
      .appendField(
        new Blockly.FieldDropdown([
          ["URL", "href"],
          ["URL路径名", "pathname"],
          ["主机域名", "hostname"],
          ["主机端口", "port"],
        ]),
        "NAME"
      );
    this.setOutput(true, null);
    this.setColour("#77d657");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
