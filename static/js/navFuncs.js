`let craft = function () {
    workspace.clear();
    /* 加载初始积木 */
    Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    alert('这里放一个向导');
}`

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
    get_num += 1;
    if (get_num >= 5) {
        if(getCookie('help-egg')==false){
            document.cookie = "help-egg=true";
            swal("获得成就：需要帮助的训练师")
        }
        window.open("./static/Waddle/eastegg/aiwidget.html")
        get_num = -999;
    }
}

