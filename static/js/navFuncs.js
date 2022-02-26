let craft = function () {
    workspace.clear();
    /* 加载初始积木 */
    Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    alert('这里放一个向导');
}

let js_save = function () {
    let code_data = Blockly.JavaScript.workspaceToCode(workspace);
    let blob = new Blob([code_data], { type: "text/plain;charset=utf-8" });
    let url = URL.createObjectURL(blob);
    let downa = document.getElementById("downa");
    downa.href = url;
    downa.download = "CocoWidget.js";
    downa.click();
    URL.revokeObjectURL(url);
}

let format_data = function (text, js) {
    return `<root><head><waddleversion>0</waddleversion><dataversion>0</dataversion></head><body><blocks>${text}</blocks><js>${js}</js></body></root>`
}

let save = function () {
    let code_xml = Blockly.Xml.workspaceToDom(workspace);
    let code_data = Blockly.Xml.domToText(code_xml);
    let js_data = Blockly.JavaScript.workspaceToCode(workspace);
    let xml_data = format_data(code_data, js_data)
    let blob = new Blob([xml_data], { type: "text/plain;charset=utf-8" });
    let url = URL.createObjectURL(blob);
    let downa = document.getElementById("downa");
    downa.href = url;
    downa.download = "CocoWidget.waddle";
    downa.click();
    URL.revokeObjectURL(url);
}

let loadXML = function (xmlString) {
    var xmlDoc = null;
    //判断浏览器的类型
    //支持IE浏览器 
    if (!window.DOMParser && window.ActiveXObject) { //window.DOMParser 判断是否是非ie浏览器
        var xmlDomVersions = ['MSXML.2.DOMDocument.6.0', 'MSXML.2.DOMDocument.3.0', 'Microsoft.XMLDOM'];
        for (var i = 0; i < xmlDomVersions.length; i++) {
            try {
                xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                xmlDoc.async = false;
                xmlDoc.loadXML(xmlString); //loadXML方法载入xml字符串
                break;
            } catch (e) {
            }
        }
    }
    //支持Mozilla浏览器
    else if (window.DOMParser && document.implementation && document.implementation.createDocument) {
        try {
            /* DOMParser 对象解析 XML 文本并返回一个 XML Document 对象。
             * 要使用 DOMParser，使用不带参数的构造函数来实例化它，然后调用其 parseFromString() 方法
             * parseFromString(text, contentType) 参数text:要解析的 XML 标记 参数contentType文本的内容类型
             * 可能是 "text/xml" 、"application/xml" 或 "application/xhtml+xml" 中的一个。注意，不支持 "text/html"。
             */
            domParser = new DOMParser();
            xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
        } catch (e) {
        }
    }
    else {
        return null;
    }
    return xmlDoc;
}

let openfile = function () {
    var input = document.createElement('input')
    input.setAttribute('id', 'file');
    input.setAttribute('type', 'file');
    input.setAttribute('name', 'file');
    input.setAttribute("style", 'visibility:hidden');
    input.setAttribute("accept", '.waddle');
    document.body.appendChild(input);
    input.click();
    input.onchange = event => {
        let file = event.target.files[0];
        let file_reader = new FileReader();
        file_reader.onload = () => {
            var fc = file_reader.result;
            let parser = new DOMParser();
            let xml = parser.parseFromString(fc, 'text/xml');
            let blocks = xml.getElementsByTagName("body")[0].getElementsByTagName("blocks")[0].getElementsByTagName("xml")[0]
            workspace.clear();
            Blockly.Xml.domToWorkspace(blocks, workspace);
        };
        file_reader.readAsText(file, 'UTF-8');
    }
}

/* let switch_table = function () {
    var code = document.getElementById("code")
    code.style.display = "none";
    var table = document.getElementById("table")
    table.style.display = "inline";
    var switch_table = document.getElementById('switch_table');
    switch_table.className += ' active';
    var switch_code = document.getElementById('switch_code');
    switch_code.classList.remove("active");
}

let switch_code = function () {
    var code = document.getElementById("code")
    code.style.display = "inline";
    var table = document.getElementById("table")
    table.style.display = "none";
    var codeArea = document.getElementById("codeArea")
    codeArea.innerHTML = Blockly.JavaScript.workspaceToCode(workspace);
    var switch_code = document.getElementById('switch_code');
    switch_code.className += ' active';
    var switch_table = document.getElementById('switch_table');
    switch_table.classList.remove("active");
} */

var get_num = 0;
let count = function () {
    get_num++;
    if (get_num >= 5) {
        window.open("/static/Waddle/eastegg/aiwidget.html")
        get_num = -999;
    }
}

