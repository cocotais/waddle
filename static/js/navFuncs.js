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
    let name = Blockly.JavaScript.workspaceToCode(workspace).substring(Blockly.JavaScript.workspaceToCode(workspace).indexOf('"', Blockly.JavaScript.workspaceToCode(workspace).indexOf('title')) + 1, Blockly.JavaScript.workspaceToCode(workspace).indexOf('",', Blockly.JavaScript.workspaceToCode(workspace).indexOf('title')));
    if (name == '') {
        name = "我的控件"
    }
    downa.download = name + ".js";
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
    let name = Blockly.JavaScript.workspaceToCode(workspace).substring(Blockly.JavaScript.workspaceToCode(workspace).indexOf('"', Blockly.JavaScript.workspaceToCode(workspace).indexOf('title')) + 1, Blockly.JavaScript.workspaceToCode(workspace).indexOf('",', Blockly.JavaScript.workspaceToCode(workspace).indexOf('title')));
    if (name == '') {
        name = "我的控件"
    }
    downa.download = name + ".waddle";
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

let upload = function (waddle) {
    var request = new XMLHttpRequest();
    request.open("get", waddle);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let parser = new DOMParser();
            let xml = parser.parseFromString(request.responseText, 'text/xml');
            let blocks = xml.getElementsByTagName("body")[0].getElementsByTagName("blocks")[0].getElementsByTagName("xml")[0]
            workspace.clear();
            Blockly.Xml.domToWorkspace(blocks, workspace);
        }
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
        if (getCookie('help-egg') == false) {
            document.cookie = "help-egg=true";
            swal("获得成就：需要帮助的训练师")
        }
        window.open("./static/Waddle/eastegg/aiwidget.html")
        get_num = -999;
    }
}

let fix_bug = function () {
    try {
        if (document.getElementsByClassName('dropdown-menu show')[0].dataBsToggle == 'none') {
            document.getElementsByClassName('dropdown')[0].style.backgroundColor = '';
        }
        else {
            if (getCookie('mode') == 'dark') {
                document.getElementsByClassName('dropdown')[0].style.backgroundColor = '#666666';
            }
            else {
                document.getElementsByClassName('dropdown')[0].style.backgroundColor = '#5439ce';
            }
        }
    }
    catch (err) {
        document.getElementsByClassName('dropdown')[0].style.backgroundColor = '';
    }
}
