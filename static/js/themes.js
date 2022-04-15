var theme = getCookie('mode')
var date = new Date();
if ((date.getMonth() == 2 && date.getDate() == 21) || (date.getFullYear() == 2022 && date.getMonth() == 2 && date.getDate() == 27) || (date.getMonth() == 11 && date.getDate() == 13)) {
    var rip = document.createElement('style');
    rip.innerText = 'html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(100%);}';
    document.body.appendChild(rip);
}
document.getElementById("table").style.height = (document.body.clientHeight - 52)
document.getElementById("toolbox").style.height = (document.body.clientHeight - 52)
Blockly.svgResize(workspace);
var dark_url = "./static/Waddle/custom_category_dark.js"
var light_url = "./static/Waddle/custom_category.js"
if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari，旧版IE代码已删除
    xmlhttp = new XMLHttpRequest();
}
else {
    swal('你就别用了吧！你这浏览器不行啊！换一个或升级，谢谢！')
}
xmlhttp.open("GET", dark_url, false);
xmlhttp.send();
dark = xmlhttp.responseText;
xmlhttp.open("GET", light_url, false);
xmlhttp.send();
light = xmlhttp.responseText;
var sty = document.createElement('style');
var to_dark = function () {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#525252"
    workspace.setTheme(DarkTheme);
    document.getElementById("moon-solid_3_").setAttribute('d', 'M37.246,131.693,32.052,103,3.313,97.817a4.016,4.016,0,0,1-2.59-6.243l16.65-23.955L.722,43.429a3.85,3.85,0,0,1,2.59-6l28.75-5.185,4.951-28.7A4.026,4.026,0,0,1,43.267.955L67.5,17.578,91.491.721a4.025,4.025,0,0,1,6.254,2.586L102.94,32l28.739,5.185a4.016,4.016,0,0,1,2.59,6.243l-16.65,23.955,16.663,24.19a4.02,4.02,0,0,1-2.6,6.245L102.941,103l-5.194,28.69a4.025,4.025,0,0,1-6.254,2.586l-24-16.622-24,16.623a4.021,4.021,0,0,1-6.254-2.586Zm-3.26-64.075A33.512,33.512,0,1,0,67.5,34.164,33.468,33.468,0,0,0,33.986,67.619ZM47,67.5A20.5,20.5,0,1,1,67.5,88,20.5,20.5,0,0,1,47,67.5Z');
    document.getElementById("moon-solid_3_").setAttribute('transform', 'translate(0 0)')
    document.getElementById("theme").setAttribute('width', '25.92')
    document.getElementById("theme").setAttribute('height', '25.92')
    sty.innerText = '.blocklyTreeLabel { color: #fff; padding: 3px 0; } .blocklyTreeRowContentContainer { padding: 5px 0; } /* Adds padding around the group of categories and separators. */ .blocklyToolboxContents { padding: .3em; } /* Adds space between the categories, rounds the corners and adds space around the label. */ .blocklyTreeRow { /*display: flex;*/ height: 32px; align-items: center; justify-content: space-between; padding: 0; cursor: pointer; border-radius: 5px; /*background-color: #525252;*/ margin: 0 6px 4px; font-size: 12px; } .custom_renderer-renderer.WaddleTheme-theme .blocklySelected>.blocklyPath { stroke: #2e2e2e; stroke-width: 3px; } .mask { position: absolute; top: 0; background: #333; /* 黑色背景 */ z-index: -2; /* 使遮罩层位于背景容器层下方，背景容器模糊带消失 */ } .mbl { background: #000; filter: alpha(Opacity=60); -moz-opacity: 0.5; opacity: 0.5 } .blocklyTreeSeparator { border-bottom: #00000000; } /* Stacks the icon on top of the label. */ .blocklyTreeRowContentContainer { display: flex; flex-direction: column; align-items: center; } .blocklyTreeRow { height: initial; } ; .customIcon { padding: 10; }.copy{background: #525252;}.copy:hover{background: #666666;}.close{border: 13px solid #525252;}.close:hover,.clos:focus{border: 13px solid #666666;}.swal-content__input,.swal-icon--success:after,.swal-icon--success::before,.swal-icon--success__hide-corners{background-color: #666666;color: white;}.swal-title,.swal-text{color:rgb(255,255,255)}.swal-footer{background-color: #525252;border-top: 1px solid #484848;}.swal-modal{background-color: #666666}.nav-item:hover{background-color: #666666;}.close:hover{color:#d9d9d9}.card{background:#666666;border: rgb(255, 255, 255) 0.2em solid;}.aboutus-close{color:#fff;}.newsth-close{color:#fff;}.sord{color:#fff;}';
    document.body.appendChild(sty);
    $('.aboutus-content').css("cssText","background: linear-gradient(rgba(82, 82, 82, 0.65), rgba(0, 0, 0, 0.45)), url('./static/img/background.svg') no-repeat 0% 20%/ cover");
    //document.getElementsByClassName("modal-header")[0].style.backgroundColor = "#525252"
    document.getElementsByClassName("modal-content")[0].style.borderTopColor = 'rgb(82, 82, 82)'
    document.getElementsByClassName("newsth-header")[0].style.backgroundColor = "#525252"
    document.getElementsByClassName("aboutus-header")[0].style.backgroundColor = "#525252"
    document.getElementsByClassName("newsth-content")[0].style.backgroundColor = "#666666"
    document.getElementsByClassName("aboutus-logo")[0].style.color = "#fff"
    document.getElementsByClassName("newsth-logo")[0].style.color = "#fff"
    eval(dark)
    document.cookie = "mode=dark";
    document.getElementById("pwa-color").setAttribute('content', '#525252')

    document.documentElement.style.setProperty("--common-background", "#3e3e3e");    document.documentElement.style.setProperty("--common-color", "#d7dae0");
    document.documentElement.style.setProperty("--quote-color", "#abb2bf");
    document.documentElement.style.setProperty("--keyword-color", "#c678dd");
    document.documentElement.style.setProperty("--variable-color", "#d19a66");
    document.documentElement.style.setProperty("--string-color", "#98c379");
    document.documentElement.style.setProperty("--literal-color", "#d19a66");
    document.documentElement.style.setProperty("--title-color", "#61afef");
    document.documentElement.style.setProperty("--attribute-color", "#e06c75");
    document.documentElement.style.setProperty("--formula-color", "#eee");
    document.documentElement.style.setProperty("--selector-color", "#9b703f");
    document.documentElement.style.setProperty("--addition-color", "#baeeba");
    document.documentElement.style.setProperty("--deletion-color", "#ffc8bd");

}
$('.cls-1').animate({ 'stroke-dashoffset': '150px' }, 10);
var to_light = function () {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#6d50f0"
    workspace.setTheme(WaddleTheme);
    document.getElementById("moon-solid_3_").setAttribute('d', "M32,98A65.973,65.973,0,0,1,97.941,32a79.615,79.615,0,0,1,12.051,1.1,3.1,3.1,0,0,1,.966,5.728,51.7,51.7,0,0,0,35.216,95.734,3.1,3.1,0,0,1,2.979,4.994A65.919,65.919,0,0,1,32,98Z");
    document.getElementById("moon-solid_3_").setAttribute('transform', 'translate(-32 -32)')
    document.getElementById("theme").setAttribute('width', '22.627776')
    document.getElementById("theme").setAttribute('height', '25.344')
    sty.innerText = '.blocklyTreeLabel { color: #525252; padding: 3px 0; } .blocklyTreeRowContentContainer { padding: 5px 0; } /* Adds padding around the group of categories and separators. */ .blocklyToolboxContents { padding: .3em; } /* Adds space between the categories, rounds the corners and adds space around the label. */ .blocklyTreeRow { /*display: flex;*/ height: 32px; align-items: center; justify-content: space-between; padding: 0; cursor: pointer; border-radius: 5px; margin: 0 6px 4px; font-size: 12px; /*background-color: white;*/ } .blocklyToolboxDiv { background-color: rgb(255, 255, 255); } ; .custom_renderer-renderer.WaddleTheme-theme .blocklySelected>.blocklyPath { stroke: #FFFFDD; stroke-width: 3px; } .mask { position: absolute; top: 0; background: #333; /* 黑色背景 */ z-index: -2; /* 使遮罩层位于背景容器层下方，背景容器模糊带消失 */ } .mbl { background: #000; filter: alpha(Opacity=60); -moz-opacity: 0.5; opacity: 0.5 } .blocklyTreeSeparator { border-bottom: #00000000; } /* Stacks the icon on top of the label. */ .blocklyTreeRowContentContainer { display: flex; flex-direction: column; align-items: center; } .blocklyTreeRow { height: initial; } .blocklyFlyoutButton { fill: #6d50f0; } .blocklyFlyoutButton:hover { fill: #5439ce; } .blocklyTreeRow:not(.blocklyTreeSelected):hover { background-color: #DCDCDC; }.close{border: 13px solid #6d50f0;}.close:hover,.clos:focus{border: 13px solid #5439ce;}.nav-item:hover{background-color: #5439ce;}.close:hover{color:#000000}.card{background:#fff;border: rgb(180, 180, 180) 0.2em solid;}.aboutus-close{color:#6d50f0;}.newsth-close{color:#6d50f0;}.sord{color:#6d50f0;}';
    document.body.appendChild(sty);
    //document.getElementsByClassName("modal-header")[0].style.backgroundColor = "#6d50f0"
    $('.aboutus-content').css("cssText", "background: linear-gradient(rgba(245, 248, 250, 0.15), rgba(109, 80, 240, 0.95)), url('./static/img/background.svg') no-repeat 0% 20%/ cover");
    document.getElementsByClassName("modal-content")[0].style.borderTopColor = 'rgb(109, 80, 240)'
    document.getElementsByClassName("newsth-header")[0].style.backgroundColor = "#F5F8FA"
    document.getElementsByClassName("aboutus-header")[0].style.backgroundColor = "#F5F8FA"
    document.getElementsByClassName("newsth-content")[0].style.backgroundColor = "#fff"
    document.getElementsByClassName("aboutus-logo")[0].style.color = "#6d50f0"
    document.getElementsByClassName("newsth-logo")[0].style.color = "#6d50f0"
    document.getElementById("pwa-color").setAttribute('content', '#6d50f0')
    eval(light)
    document.cookie = "mode=light";

    document.documentElement.style.setProperty("--common-background", "#fff");
    document.documentElement.style.setProperty("--common-color", "#000");
    document.documentElement.style.setProperty("--quote-color", "#800");
    document.documentElement.style.setProperty("--keyword-color", "#008");
    document.documentElement.style.setProperty("--variable-color", "#660");
    document.documentElement.style.setProperty("--string-color", "#080");
    document.documentElement.style.setProperty("--literal-color", "#066");
    document.documentElement.style.setProperty("--title-color", "#606");
    document.documentElement.style.setProperty("--attribute-color", "#000");
    document.documentElement.style.setProperty("--formula-color", "#eee");
    document.documentElement.style.setProperty("--selector-color", "#9b703f");
    document.documentElement.style.setProperty("--addition-color", "#baeeba");
    document.documentElement.style.setProperty("--deletion-color", "#ffc8bd");
}
var theme_conut = 0;
var switch_theme = function () {
    if (theme == "light") {
        to_dark()
        theme = "dark"
    } else {
        to_light()
        theme = "light"
    }
    theme_conut++;
    setTimeout(1000, function () { theme_conut = 0; });
    if (theme_conut >= 50) {
        if (getCookie('theme-egg') == false) {
            document.cookie = "theme-egg=true";
            swal("获得成就：主题爱好者");
        }
        window.open("./static/Waddle/eastegg/vscode/index.html")
        theme_conut = -999;
    }
}
window.onresize = function () {
    document.getElementById("table").style.height = (document.body.clientHeight - 52)
    document.getElementById("toolbox").style.height = (document.body.clientHeight - 52)
    Blockly.svgResize(workspace);
}
$('.cls-1').animate({ 'stroke-dashoffset': '100px' }, 10);
if (theme == "dark") {
    to_dark()
} else {
    if (theme == "light") {
        to_light()
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            to_dark()
        }
        else{
            to_light()
        }
    }
}
hljs.initHighlightingOnLoad();
if ($(window).width() < 818) {
    logo.src = "./static/img/logo.svg";
    document.getElementsByClassName("modal")[0].style.width = "100vw"
}
else {
    logo.src = "./static/img/waddle.svg";
    document.getElementsByClassName("modal")[0].style.width = "400px"
}

