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

const axios_config_types = {
  url: "String",
  method: null,
  baseURL: "String",
  allowAbsoluteUrls: "Boolean",
  transformRequest: null,
  transformResponse: null,
  headers: null,
  params: null,
  paramsSerializer: null,
  data: null,
  timeout: null,
  timeoutErrorMessage: "String",
  withCredentials: "Boolean",
  adapter: null,
  auth: null,
  responseType: null,
  responseEncoding: null,
  xsrfCookieName: "String",
  xsrfHeaderName: "String",
  maxContentLength: "Number",
  validateStatus: null,
  maxBodyLength: "Number",
  maxRedirects: "Number",
  maxRate: null,
  beforeRedirect: null,
  socketPath: "String",
  transport: null,
  httpAgent: null,
  httpsAgent: null,
  proxy: null,
  cancelToken: null,
  decompress: "Boolean",
  transitional: null,
  signal: null,
  insecureHTTPParser: "Boolean",
  env: null,
  formSerializer: null,
  family: null,
  lookup: null,
  withXSRFToken: null,
  fetchOptions: null,
};

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

Blockly.Blocks["axios_send"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("使用axios向")
      .appendField(new Blockly.FieldTextInput("url"), "axios_url")
      .appendField("发送")
      .appendField(
        new Blockly.FieldDropdown([
          ["get", "get"],
          ["post", "post"],
          ["put", "put"],
          ["delete", "delete"],
          ["head", "head"],
          ["options", "options"],
          ["patch", "patch"],
          ["purge", "purge"],
          ["link", "link"],
          ["unlink", "unlink"],
        ]),
        "axios_method"
      )
      .appendField("请求");
    this.appendStatementInput("axios_config").setCheck("axios_config_item").appendField("请求配置");
    this.appendStatementInput("axios_response").setCheck(null).appendField("当返回结果时");
    this.appendStatementInput("axios_error").setCheck(null).appendField("当发生错误时");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["axios_config_item_valueinput"] = {
  init: function () {
    this.appendValueInput("axios_config_item_valueinput_input")
      .setCheck(axios_config_types[this.getFieldValue("axios_config_item_valueinput_input_type")])
      .appendField("非函数类配置")
      .appendField(
        new Blockly.FieldDropdown([
          ["baseURL", "baseURL"],
          ["allowAbsoluteUrls", "allowAbsoluteUrls"],
          ["transformRequest", "transformRequest"],
          ["transformResponse", "transformResponse"],
          ["headers", "headers"],
          ["params", "params"],
          ["paramsSerializer", "paramsSerializer"],
          ["data", "data"],
          ["timeout", "timeout"],
          ["timeoutErrorMessage", "timeoutErrorMessage"],
          ["withCredentials", "withCredentials"],
          ["adapter", "adapter"],
          ["auth", "auth"],
          ["responseType", "responseType"],
          ["responseEncoding", "responseEncoding"],
          ["xsrfCookieName", "xsrfCookieName"],
          ["xsrfHeaderName", "xsrfHeaderName"],
          ["maxContentLength", "maxContentLength"],
          ["maxBodyLength", "maxBodyLength"],
          ["maxRedirects", "maxRedirects"],
          ["maxRate", "maxRate"],
          ["socketPath", "socketPath"],
          ["transport", "transport"],
          ["httpAgent", "httpAgent"],
          ["httpsAgent", "httpsAgent"],
          ["proxy", "proxy"],
          ["cancelToken", "cancelToken"],
          ["decompress", "decompress"],
          ["transitional", "transitional"],
          ["signal", "signal"],
          ["insecureHTTPParser", "insecureHTTPParser"],
          ["env", "env"],
          ["formSerializer", "formSerializer"],
          ["family", "family"],
          ["fetchOptions", "fetchOptions"],
        ]),
        "axios_config_item_valueinput_input_type"
      )
      .appendField(": ");
    this.setPreviousStatement(true, "axios_config_item");
    this.setNextStatement(true, "axios_config_item");
    this.setColour("#5a29e4");
    this.setTooltip("axios的请求配置的条目");
    this.setHelpUrl("");
  },
  onchange: function (event) {
    // 忽略非自身变更或初始化事件
    if (!event || event.type !== Blockly.Events.CHANGE || event.blockId !== this.id || event.element !== "field") {
      return;
    }

    // 当类型下拉菜单变化时
    if (event.name === "axios_config_item_valueinput_input_type") {
      const type = this.getFieldValue("axios_config_item_valueinput_input_type");
      let checkType = axios_config_types[type];

      // 更新输入连接的类型检查
      const input = this.getInput("axios_config_item_valueinput_input");
      if (input) {
        input.connection.setCheck(checkType);

        // 断开不匹配的连接
        if (input.connection.targetConnection && !input.connection.checkType_(input.connection.targetConnection)) {
          input.connection.disconnect();
        }

        // 强制刷新渲染
        this.render();
      }
    }
  },
};

Blockly.Blocks["axios_config_item_statementinput"] = {
  init: function () {
    this.appendStatementInput("axios_config_item_statementinput")
      .setCheck(null)
      .appendField("函数类配置")
      .appendField(
        new Blockly.FieldDropdown([
          ["onUploadProgress", "onUploadProgress"],
          ["onDownloadProgress", "onDownloadProgress"],
          ["validateStatus", "validateStatus"],
          ["beforeRedirect", "beforeRedirect"],
          ["lookup", "lookup"],
          ["withXSRFToken", "withXSRFToken"],
        ]),
        "axios_config_item_statementinput_input_type"
      )
      .appendField(": ");
    this.setPreviousStatement(true, "axios_config_item");
    this.setNextStatement(true, "axios_config_item");
    this.setColour("#5a29e4");
    this.setTooltip("axios的请求配置的条目");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["axios_error_todo"] = {
  init: function () {
    this.appendDummyInput().appendField("错误类型");
    this.appendStatementInput("error_response").setCheck(null).appendField("返回了异常HTTP状态码");
    this.appendStatementInput("error_request").setCheck(null).appendField("请求无响应");
    this.appendStatementInput("error_other").setCheck(null).appendField("axios客户端发生错误");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5a29e4");
    this.setTooltip("");
    this.setHelpUrl("");
  },
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
