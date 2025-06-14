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

/*
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
*/

Blockly.Blocks['axios_send'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("使用axios向")
      .appendField(new Blockly.FieldTextInput("url"), "axios_url")
      .appendField("发送")
      .appendField(new Blockly.FieldDropdown([["get", "get"], ["post", "post"], ["put", "put"], ["delete", "delete"], ["head", "head"], ["options", "options"], ["patch", "patch"], ["purge", "purge"], ["link", "link"], ["unlink", "unlink"]]), "axios_method")
      .appendField("请求");
    this.appendStatementInput("axios_config")
      .setCheck("axios_config_item")
      .appendField("请求配置");
    this.appendStatementInput("axios_response")
      .setCheck(null)
      .appendField("当返回结果时");
    this.appendStatementInput("axios_error")
      .setCheck(null)
      .appendField("当发生错误时");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['axios_config_item_valueinput'] = {
  init: function () {
    this.appendValueInput("axios_config_item_valueinput_input")
      .setCheck(null)
      .appendField(new Blockly.FieldDropdown([["baseURL", "baseURL"], ["allowAbsoluteUrls", "allowAbsoluteUrls"], ["transformRequest", "transformRequest"], ["transformResponse", "transformResponse"], ["headers", "headers"], ["params", "params"], ["paramsSerializer", "paramsSerializer"], ["data", "data"], ["timeout", "timeout"], ["timeoutErrorMessage", "timeoutErrorMessage"], ["withCredentials", "withCredentials"], ["adapter", "adapter"], ["auth", "auth"], ["responseType", "responseType"], ["responseEncoding", "responseEncoding"], ["xsrfCookieName", "xsrfCookieName"], ["xsrfHeaderName", "xsrfHeaderName"], ["maxContentLength", "maxContentLength"], ["maxBodyLength", "maxBodyLength"], ["maxRedirects", "maxRedirects"], ["maxRate", "maxRate"], ["socketPath", "socketPath"], ["transport", "transport"], ["httpAgent", "httpAgent"], ["httpsAgent", "httpsAgent"], ["proxy", "proxy"], ["cancelToken", "cancelToken"], ["decompress", "decompress"], ["transitional", "transitional"], ["signal", "signal"], ["insecureHTTPParser", "insecureHTTPParser"], ["env", "env"], ["formSerializer", "formSerializer"], ["family", "family"], ["fetchOptions", "fetchOptions"]]), "axios_config_item_valueinput_input_type");
    this.setPreviousStatement(true, "axios_config_item");
    this.setNextStatement(true, "axios_config_item");
    this.setColour("#5a29e4");
    this.setTooltip("axios的请求配置的条目");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['axios_config_item_statementinput'] = {
  init: function () {
    this.appendStatementInput("axios_config_item_statementinput")
      .setCheck(null)
      .appendField(new Blockly.FieldDropdown([["onUploadProgress", "onUploadProgress"], ["onDownloadProgress", "onDownloadProgress"], ["validateStatus", "validateStatus"], ["beforeRedirect", "beforeRedirect"], ["lookup", "lookup"], ["withXSRFToken", "withXSRFToken"]]), "axios_config_item_statementinput_input_type");
    this.setPreviousStatement(true, "axios_config_item");
    this.setNextStatement(true, "axios_config_item");
    this.setColour("#5a29e4");
    this.setTooltip("axios的请求配置的条目");
    this.setHelpUrl("");
  }
};

/*Blockly.Blocks["axios_getpost"] = {
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
};*/
