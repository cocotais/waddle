import Blockly from "blockly";
//ooooooooo@^ ... @OooO\.]]/@oo@@@@@oO@ ... @@^****
//oooooooOOO^ ... @OooO@@@OoooooOOOooO^ ...=@@^****
//ooooooOOoO@  .. @@Oooooo@OoO@OoooOOO^ ...@O@\****
//OOOOOOOOOO@` .. @OOOOoooOoooO@@@Ooo@^.../@OO@***,
//OOOOOOOOOOO\ .. @OoooooooooooooO@OO@^..=@OOO@*,O[
//OOOOOOOOOOO@`.. @OOO@@@@@@@@@@@@@@O@^..@OOOO@**,]
//@@@@@OOOOOOO\ ,//`               .[\@`/@OOO@@^,[*
//@@@@@@@@@OOO@/.                      .\@O@Oo@^O@o
//@@@@@@OOOO@/ =@@`                    .. =@OO@^***
//@@OOOOOOO@`  ,[[      =^            =@@^ .@O@\*,]
//@O@OOOOO@` ......    ,/  =\  .@           .@O\[,*
//@O@OOOO@^          [[.[O/[,@@@`    ....... =@,[[*
//@O@O\OO@^                                  =@O@@o
//@@@@@@@@`                                  =@@@@o
//O@OO,\`O^                                  @O*`/\
//\O@/[`/@@^        /@]]                    /O=O/OO
//****`=OO@@@`..../@o/ooO@.           ....,@/,,[[[*
//],`****,`\`\@@@@O/o\ooO@............,]@@/]`]]]]]]
//OO@O\*^*`**]O\./@oO@Oo@@]]]]/O@@@@@@OOOOOOOOOOOOO
//OOO\/*,]]ooOO@OOOO@@@@/........    =@[[[[[`******
//,]oOOOO@@@@O/\@@OOO@@`           @[\@O@\******`**
//@@/[[`******=@Oo@O@@^            @@O@@@@O@@[O//\@
//*****]=O,O^*O@O@@@O@            .@@@@@OO@@@@\@O`/
//*****\o^[***,O@@@/[@@@@@@@@@@@@@@[[@@@O@@@/,`,*[`
//**************]/OOO@^  =@OO@` ./@OOOOO@/*********
//                 于勤保佑 无bug

//使用的是axios图标中的颜色
Blockly.Blocks["axios_import"] = {
  init: function () {
    this.appendDummyInput().appendField("引入axios");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["axios_responsedropdown"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("响应内容的")
      .appendField(
        new Blockly.FieldDropdown([
          ["完整内容", "all"],
          ["数据", "data"],
          ["响应头", "headers"],
          ["HTTP状态码", "status"],
          ["HTTP状态信息", "statusText"],
        ]),
        "MODE"
      );
    this.setOutput(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["axios_error"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("错误的")
      .appendField(
        new Blockly.FieldDropdown([
          ["完整内容（返回错误）", "error.response"],
          ["响应状态码", "error.response.status"],
          ["信息", "error.response.data"],
          ["完整内容（请求无响应）", "error.request"],
          ["客户端信息", "error.message"],
          ["配置", "error.config"],
        ]),
        "axios_error_type"
      );
    this.setOutput(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["axios_getpost"] = {
  init: function () {
    this.appendValueInput("URL")
      .setCheck("String")
      .appendField("使用axios")
      .appendField(
        new Blockly.FieldDropdown([
          ["get", "get"],
          ["post", "post"],
          ["put", "put"],
          ["delete", "delete"],
        ]),
        "MODE"
      )
      .appendField("链接");
    this.appendValueInput("PARAMS").setCheck(null).appendField("请求参数");
    this.appendValueInput("HEAD").setCheck(null).appendField("请求头");
    this.appendValueInput("BODY").setCheck(null).appendField("请求体");
    this.appendStatementInput("OK").setCheck(null).appendField("当返回结果时");
    this.appendStatementInput("error_response").setCheck(null).appendField("当返回错误时");
    this.appendStatementInput("error_request").setCheck(null).appendField("当请求无响应时");
    this.appendStatementInput("error_other").setCheck(null).appendField("当客户端错误时");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
/*
Blockly.Blocks["axios_timeout"] = {
  init: function () {
    this.appendValueInput("NUM").setCheck("Number").appendField("超时限制");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["axios_maxcontentlength"] = {
  init: function () {
    this.appendValueInput("NUM").setCheck("Number").appendField("响应内容最大尺寸");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["axios_maxcontentlength"] = {
  init: function () {
    this.appendValueInput("NUM").setCheck("Number").appendField("最大重定向次数");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["axios_withcredentials"] = {
  init: function () {
    this.appendDummyInput().appendField("跨域请求是否携带凭证").appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["axios_headers"] = {
  init: function () {
    this.appendValueInput("NUM").setCheck("dict").appendField("自定义请求头");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["axios_data"] = {
  init: function () {
    this.appendValueInput("NUM").setCheck(null).appendField("请求数据");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
*/
