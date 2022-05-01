var theme = getCookie('mode');
var date = new Date();
if ((date.getMonth() == 2 && date.getDate() == 21) || (date.getFullYear() == 2022 && date.getMonth() == 2 && date.getDate() == 27) || (date.getMonth() == 11 && date.getDate() == 13)) {
	var rip = document.createElement('style');
	rip.innerText = 'html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(100%);}';
	document.body.appendChild(rip);
}
document.getElementById('table').style.height = window.innerHeight + 'px';
document.getElementById('toolbox').style.height = window.innerHeight + 'px';
document.getElementById("blocklyDiv").style.height = window.innerHeight + 'px';
document.getElementsByClassName("modal")[0].style.height = window.innerHeight + 'px';
Blockly.svgResize(workspace);
var dark_url = './static/Waddle/custom_category_dark.js';
var light_url = './static/Waddle/custom_category.js';
if (window.XMLHttpRequest) {
	// code for IE7+, Firefox, Chrome, Opera, Safari，旧版IE代码已删除
	xmlhttp = new XMLHttpRequest();
} else {
	swal('你就别用了吧！你这浏览器不行啊！换一个或升级，谢谢！');
}
xmlhttp.open('GET', dark_url, false);
xmlhttp.send();
dark = xmlhttp.responseText;
xmlhttp.open('GET', light_url, false);
xmlhttp.send();
light = xmlhttp.responseText;
var sty = document.createElement('style');
var to_dark = function () {
	workspace.setTheme(DarkTheme);
	document.getElementById('widgetPreview').style.color = '#fff';
	document.getElementById('widgetPreview').style.backgroundColor = '#333033';
	$('.aboutus-content').css('cssText', "background: linear-gradient(rgba(82, 82, 82, 0.65), rgba(0, 0, 0, 0.45)), url('./static/img/background.svg') no-repeat 0% 20%/ cover");
	//document.getElementsByClassName("modal-header")[0].style.backgroundColor = "var(--main-color)"
	document.getElementsByClassName('modal-content')[0].style.borderTopColor = 'rgb(82, 82, 82)';
	document.getElementsByClassName('newsth-header')[0].style.backgroundColor = 'var(--main-color)';
	document.getElementsByClassName('aboutus-header')[0].style.backgroundColor = 'var(--main-color)';
	document.getElementsByClassName('newsth-content')[0].style.backgroundColor = 'var(--nd-main-color)';
	document.getElementsByClassName('aboutus-logo')[0].style.color = '#fff';
	document.getElementsByClassName('newsth-logo')[0].style.color = '#fff';
	eval(dark);
	document.cookie = 'mode=dark';
	document.getElementById('pwa-color').setAttribute('content', '#525252');

	document.documentElement.style.setProperty('--common-background', '#333033');
	document.documentElement.style.setProperty('--common-color', '#d7dae0');
	document.documentElement.style.setProperty('--quote-color', '#abb2bf');
	document.documentElement.style.setProperty('--keyword-color', '#c678dd');
	document.documentElement.style.setProperty('--variable-color', '#d19a66');
	document.documentElement.style.setProperty('--string-color', '#98c379');
	document.documentElement.style.setProperty('--literal-color', '#d19a66');
	document.documentElement.style.setProperty('--title-color', '#61afef');
	document.documentElement.style.setProperty('--attribute-color', '#e06c75');
	document.documentElement.style.setProperty('--formula-color', '#eeeeee');
	document.documentElement.style.setProperty('--selector-color', '#9b703f');
	document.documentElement.style.setProperty('--addition-color', '#baeeba');
	document.documentElement.style.setProperty('--deletion-color', '#ffc8bd');

	document.documentElement.style.setProperty('--main-color', '#525252');
	document.documentElement.style.setProperty('--swal-opposite-color', '#fff');
	document.documentElement.style.setProperty('--nd-main-color', '#666666');
	document.documentElement.style.setProperty('--flyout-color', '#202020');
	document.documentElement.style.setProperty('--tree-label-color', '#ffffff');
	document.documentElement.style.setProperty('--renderer-color', '#2e2e2e');
	document.documentElement.style.setProperty('--card-border-color', '#b4b4b4');
	document.documentElement.style.setProperty('--card-border-color', '#ffffff');
	document.documentElement.style.setProperty('--toolbox-color', 'rgb(61,61,61)');
	document.documentElement.style.setProperty('--swal-color', '#525252');
};
$('.cls-1').animate({ 'stroke-dashoffset': '150px' }, 10);
var to_light = function () {
	workspace.setTheme(WaddleTheme);
	document.getElementById('widgetPreview').style.backgroundColor = '#ffffff';
	document.getElementById('widgetPreview').style.color = '#000';
	$('.aboutus-content').css('cssText', "background: linear-gradient(rgba(245, 248, 250, 0.15), rgba(109, 80, 240, 0.95)), url('./static/img/background.svg') no-repeat 0% 20%/ cover");
	document.getElementsByClassName('modal-content')[0].style.borderTopColor = 'rgb(109, 80, 240)';
	document.getElementsByClassName('newsth-header')[0].style.backgroundColor = '#F5F8FA';
	document.getElementsByClassName('aboutus-header')[0].style.backgroundColor = '#F5F8FA';
	document.getElementsByClassName('newsth-content')[0].style.backgroundColor = '#fff';
	document.getElementsByClassName('aboutus-logo')[0].style.color = 'var(--main-color)';
	document.getElementsByClassName('newsth-logo')[0].style.color = 'var(--main-color)';
	document.getElementById('pwa-color').setAttribute('content', '#6d50f0');
	eval(light);
	document.cookie = 'mode=light';

	document.documentElement.style.setProperty('--common-background', '#fff');
	document.documentElement.style.setProperty('--common-color', '#000');
	document.documentElement.style.setProperty('--quote-color', '#800');
	document.documentElement.style.setProperty('--keyword-color', '#008');
	document.documentElement.style.setProperty('--variable-color', '#660');
	document.documentElement.style.setProperty('--string-color', '#080');
	document.documentElement.style.setProperty('--literal-color', '#066');
	document.documentElement.style.setProperty('--title-color', '#606');
	document.documentElement.style.setProperty('--attribute-color', '#000');
	document.documentElement.style.setProperty('--formula-color', '#eee');
	document.documentElement.style.setProperty('--selector-color', '#9b703f');
	document.documentElement.style.setProperty('--addition-color', '#baeeba');
	document.documentElement.style.setProperty('--deletion-color', '#ffc8bd');
	document.documentElement.style.setProperty('--main-color', '#6d50f0');
	document.documentElement.style.setProperty('--nd-main-color', '#5439ce');
	document.documentElement.style.setProperty('--swal-opposite-color', '#525252');
	document.documentElement.style.setProperty('--flyout-color', '#ffffff');
	document.documentElement.style.setProperty('--tree-label-color', '#525252');
	document.documentElement.style.setProperty('--renderer-color', '#ffffdd');
	document.documentElement.style.setProperty('--card-border-color', '#ffffff');
	document.documentElement.style.setProperty('--close-color', '#6d50f0');
	document.documentElement.style.setProperty('--toolbox-color', 'rgb(255,255,250)');
	document.documentElement.style.setProperty('--swal-color', '#ffffff');
};
var theme_conut = 0;
var switch_theme = function () {
	if (theme == 'light') {
		to_dark();
		theme = 'dark';
	} else {
		to_light();
		theme = 'light';
	}
	theme_conut++;
	setTimeout(1000, function () {
		theme_conut = 0;
	});
	if (theme_conut >= 50) {
		if (getCookie('theme-egg') == false) {
			document.cookie = 'theme-egg=true';
			swal('获得成就：主题爱好者');
		}
		window.open('./static/Waddle/eastegg/vscode/index.html');
		theme_conut = -999;
	}
};
window.onresize = function () {
    document.getElementById('table').style.height = window.innerHeight + 'px';
    document.getElementById('toolbox').style.height = window.innerHeight + 'px';
    document.getElementById("blocklyDiv").style.height = window.innerHeight + 'px';
	document.getElementsByClassName("modal")[0].style.height = window.innerHeight + 'px';
    Blockly.svgResize(workspace);
};
$('.cls-1').animate({ 'stroke-dashoffset': '100px' }, 10);
if (theme == 'dark') {
	to_dark();
} else {
	if (theme == 'light') {
		to_light();
	} else {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			to_dark();
		} else {
			to_light();
		}
	}
}
hljs.initHighlightingOnLoad();
if ($(window).width() < 818) {
    document.getElementsByClassName('modal')[0].style.width = '100vw';
    document.getElementById('blocklyDiv').style.width = '100vw';
    document.getElementById('toolbox').style.width = '100vw';
} else {
    document.getElementsByClassName('modal')[0].style.width = '400px';
    if (modal.style.display == 'none' || modal.style.display == '') {
        document.getElementById('blocklyDiv').style.width = '100vw';
        document.getElementById('toolbox').style.width = '100vw';
    } else {
        document.getElementById('blocklyDiv').style.width = 'calc(100vw - 400px)';
        document.getElementById('toolbox').style.width = 'calc(100vw - 400px)';
    }
}
