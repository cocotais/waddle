
let craft = function () {
    workspace.clear();
    /* 加载初始积木 */
    Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    alert('这里放一个向导');
}

let save = function () {
    let code_xml = Blockly.Xml.workspaceToDom(workspace);
    let code_data = Blockly.Xml.domToText(code_xml);
    let blob = new Blob([code_data], { type: "text/plain;charset=utf-8" });
    let url = URL.createObjectURL(blob);
    let downa = document.getElementById("downa");
    downa.href = url;
    downa.click();
    URL.revokeObjectURL(url);
}

let openfile = function () {
    var input = document.createElement('input')
    input.setAttribute('id', 'file');
    input.setAttribute('type', 'file');
    input.setAttribute('name', 'file');
    input.setAttribute("style", 'visibility:hidden');
    input.setAttribute("accept", '.js,.jsx,.waddle');
    document.body.appendChild(input);
    input.click();
    input.onchange = event => {
        let file = event.target.files[0];
        let file_reader = new FileReader();
        file_reader.onload = () => {
            let fc = file_reader.result;
            let parser = new DOMParser();
            let xml = parser.parseFromString(fc, 'text/xml');
            let blocks = xml.getElementsByTagName('xml')[0];
            workspace.clear();
            Blockly.Xml.domToWorkspace(blocks, workspace);
        };
        file_reader.readAsText(file, 'UTF-8');
    }
}

let switch_table = function () {
    var code = document.getElementById("code")
    code.style.display = "none";
    var table = document.getElementById("table")
    table.style.display = "inline";

    $('.switch_table').addClass('active');
    $('.switch_code').removeClass('active');
}

let switch_code = function () {
    var code = document.getElementById("code")
    code.style.display = "inline";
    var table = document.getElementById("table")
    table.style.display = "none";
    var codeArea = document.getElementById("codeArea")
    codeArea.innerHTML = Blockly.JavaScript.workspaceToCode(workspace);

    $('.switch_table').removeClass('active');
    $('.switch_code').addClass('active');

}

var get_num = 0;
let count = function () {
    get_num++;
    if (get_num >= 5) {
        window.open("{{static_url('Waddle/aiwidget.html')}}")
        get_num = -999;
    }
}