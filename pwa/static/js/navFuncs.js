`let craft = function () {
    workspace.clear();
    /* 加载初始积木 */
    Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    alert('这里放一个向导');
}`;

let js_save = function () {
    let code_data = Blockly.JavaScript.workspaceToCode(workspace).replaceAll('&#60', '<').replaceAll('&#62', '>');
    let blob = new Blob([code_data], { type: 'text/plain;charset=utf-8' });
    let url = URL.createObjectURL(blob);
    let downa = document.getElementById('downa');
    downa.href = url;
    let name = mytitle;
    if (name == '') {
        name = '我的控件';
    }
    if (Blockly.JavaScript.workspaceToCode(workspace).indexOf('isInvisibleWidget: true') == -1) {
        downa.download = name + '.jsx';
    } else {
        downa.download = name + '.js';
    }
    downa.click();
    URL.revokeObjectURL(url);
};

let format_data = function (text, js) {
    return `<root><head><waddleversion>0</waddleversion><dataversion>0</dataversion></head><body><blocks>${text}</blocks><js>${js}</js></body></root>`;
};

let save = function () {
    let code_xml = Blockly.Xml.workspaceToDom(workspace);
    let code_data = Blockly.Xml.domToText(code_xml);
    let js_data = Blockly.JavaScript.workspaceToCode(workspace);
    let xml_data = format_data(code_data, js_data);
    let blob = new Blob([xml_data], { type: 'text/plain;charset=utf-8' });
    let url = URL.createObjectURL(blob);
    let downa = document.getElementById('downa');
    downa.href = url;
    let name = mytitle;
    if (name == '') {
        name = '我的控件';
    }
    downa.download = name + '.waddle';
    downa.click();
    URL.revokeObjectURL(url);
};

let openfile = function () {
    var input = document.createElement('input');
    input.setAttribute('id', 'file');
    input.setAttribute('type', 'file');
    input.setAttribute('name', 'file');
    input.setAttribute('style', 'visibility:hidden');
    input.setAttribute('accept', '.waddle');
    document.body.appendChild(input);
    input.click();
    input.onchange = event => {
        let file = event.target.files[0];
        let file_reader = new FileReader();
        file_reader.onload = () => {
            var fc = file_reader.result;
            let parser = new DOMParser();
            let xml = parser.parseFromString(fc, 'text/xml');
            let blocks = xml.getElementsByTagName('body')[0].getElementsByTagName('blocks')[0].getElementsByTagName('xml')[0];
            workspace.clear();
            Blockly.Xml.domToWorkspace(blocks, workspace);
        };
        file_reader.readAsText(file, 'UTF-8');
    };
};

let upload = function (waddle) {
    var request = new XMLHttpRequest();
    request.open('get', waddle);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let parser = new DOMParser();
            let xml = parser.parseFromString(request.responseText, 'text/xml');
            let blocks = xml.getElementsByTagName('body')[0].getElementsByTagName('blocks')[0].getElementsByTagName('xml')[0];
            workspace.clear();
            Blockly.Xml.domToWorkspace(blocks, workspace);
        }
    };
};

var get_num = 0;
let count = function () {
    get_num += 1;
    if (get_num >= 5) {
        if (getCookie('help-egg') == false) {
            document.cookie = 'help-egg=true';
            swal('获得成就：需要帮助的训练师');
        }
        window.open('./static/Waddle/eastegg/aiwidget.html');
        get_num = -999;
    }
};

var isclick = false;


let dropdown_show = function () {
    document.getElementById('navmenu').style.top = '15px';
    document.getElementById('navmenu').style.marginLeft = '70px';
    if (document.getElementsByClassName('dropdown-menu')[0].className == 'dropdown-menu show') {
        document.getElementsByClassName('dropdown-menu')[0].className = 'dropdown-menu';
        setTimeout(() => {
            isclick = false;
        }, 100)

    }
    else {
        document.getElementsByClassName('dropdown-menu')[0].className = 'dropdown-menu show';
        setTimeout(() => {
            isclick = true;
        }, 100)

    }
};

document.onclick = function () {
    if (isclick == true) {
        document.getElementsByClassName('dropdown-menu')[0].className = 'dropdown-menu';
        isclick = false;
    }
}

// 原本的“关于”对话框的显示分离到此
function show_about(){
    aboutus.style.display = "block";
    document.getElementsByClassName("aboutus-content")[0].className = "aboutus-content show";
    document.getElementsByClassName("aboutus")[0].className = "aboutus show";
    document.getElementsByClassName("groundglass")[0].className = "groundglass show";
}

function show_newsth(){
    newsth.style.display = "block";
    document.getElementsByClassName("newsth-content")[0].className = "newsth-content show";
    document.getElementsByClassName("newsth")[0].className = "newsth show";
    document.getElementsByClassName("groundglass")[0].className = "groundglass show";
}