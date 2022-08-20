//实验性功能
//这个插件是界面插件，不是作品插件

class WaddleAPI{
    constructor(){}
    getCodeViewerState(){
        /** 
        * 获取代码预览框是否显示状态
        * @return {bool} 是否显示
        */
        return document.querySelector("#myModal").style.display=="block"
    }
    getTheme(){
        /** 
        * 获取界面主题
        * @return {string} Dark或Light
        */
       return window.theme
        //return getComputedStyle(document.documentElement).getPropertyValue('--common-background')=='#333033'?'dark':'light'
    }
    getScale(){
        /** 
        * 获取界面缩放尺寸
        * @return {number}
        */
        return window.myscale
    }
    getWidgetIcon(){
        /** 
        * 获取控件图标链接
        * @return {string}
        */
        return window.myicon
    }
    getWidgetTitle(){
        /** 
        * 获取控件标题
        * @return {string}
        */
        return window.mytitle
    }
    getWidgetisInvisible(){
        /** 
        * 获取控件是否为可见控件
        * @return {string}
        */
        return isVisibleWidget()
    }
    getWidgetWaddleData(){
        /** 
        * 获取控件的Waddle文件(字符串形式)
        * @return {string}
        */
        let code_xml = Blockly.Xml.workspaceToDom(workspace);
        let code_data = Blockly.Xml.domToText(code_xml);
        let js_data = Blockly.JavaScript.workspaceToCode(workspace);
        return `<root><head><waddleversion>0</waddleversion><dataversion>0</dataversion></head><body><blocks>${code_data}</blocks><js>${js_data}</js></body></root>`;
    }
    getWidgetJSData(){
        /** 
        * 获取控件的JavaScript代码
        * @return {string}
        */
       return Blockly.JavaScript.workspaceToCode(workspace);
    }
    switchCodeViewerState(){
        /** 
        * 切换代码预览框显示状态
        * @return {void}
        */
        window.switch_code()
    }
    switchTheme(){
        /** 
        * 切换界面主题
        * @return {void}
        */
        window.switch_theme()
    }
    alert(text){
        /** 
        * 弹出提示框
        * @param {string} text 弹出内容
        * @return {void}
        */
        window.swal(text)
    }
}
var waddle = new WaddleAPI()
window.extensions = []
class WaddleExtensionLoader{
    constructor(code){
        this.loadSucceed=true
        try{
            var exports={}
            eval(code)
        }catch(e){
            this.error(e)
        }
        if(!exports.extension){this.error("未找到exports.extension")}
        console.log(exports)
        if(this.loadSucceed){
            try{
                console.log(this.loadSucceed)
                this.extensionClass = new exports.extension();
                this.extensionVersion = 0;
                this.extensionName = this.extensionClass.name;
                this.extensionTitle = this.extensionClass.title;
                this.extensionVersion = this.extensionClass.version;
                this.extensionVersionName = this.extensionClass.versionName;
                this.extensionClass.main()
            }catch(e){
                this.error(e)
            }
        }   
    }
    error(msg){
        window.swal(`导入失败！${msg}`)
        this.loadSucceed=false
    }
}

function addExtension(code){
    window.extensions.push(new WaddleExtensionLoader(code))
}
function openExtension(){
  var input = document.createElement("input");
  input.setAttribute("id", "file");
  input.setAttribute("type", "file");
  input.setAttribute("name", "file");
  input.setAttribute("style", "visibility:hidden");
  input.setAttribute("accept", ".js");
  document.body.appendChild(input);
  input.click();
  input.onchange = (event) => {
    let file = event.target.files[0];
    let file_reader = new FileReader();
    file_reader.onload = () => {
      var fc = file_reader.result;
      addExtension(fc)
    };
    file_reader.readAsText(file, "UTF-8");
  };
}
function triggerOnThemeSwitch(){
    window.extensions.forEach(element => {
        try{
            if(element.extensionClass.onThemeSwitch){
                element.onThemeSwitch()
            }
        }catch(e){
            swal(`插件发生错误:${e}`)
        }  
    });
}

/*
示例插件：
class MyExtension{
    constructor(){
        this.name="MyWaddleExtension"
        this.title="Waddle插件"
        this.version=1;
        this.versionName="0.0.1";
    }
    main(){
        alert("这是我的Waddle插件!")
    }
    onThemeSwitch(){
        alert("主题切换了")
        alert(waddle.getTheme())
    }
}
exports.extension = MyExtension
*/