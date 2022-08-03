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
document.getElementById("logo1").style.width = document.getElementsByClassName('blocklyToolboxDiv')[0].clientWidth + 'px';
Blockly.svgResize(workspace);
var sty = document.createElement('style');
var to_dark = function () {
	workspace.setTheme(DarkTheme);
	document.getElementById('widgetPreview').style.color = '#fff';
	document.getElementById('widgetPreview').style.backgroundColor = '#333033';
	document.getElementsByClassName('theme-sun')[0].style.display = 'block';
	document.getElementsByClassName('theme-moon')[0].style.display = 'none';
	document.getElementsByClassName('modal-content')[0].style.borderTopColor = 'rgb(82, 82, 82)';
	document.getElementsByClassName('newsth-header')[0].style.backgroundColor = 'var(--main-color)';
	document.getElementsByClassName('aboutus-header')[0].style.backgroundColor = 'var(--main-color)';
	document.getElementsByClassName('newsth-content')[0].style.backgroundColor = 'var(--nd-main-color)';
	document.getElementsByClassName('aboutus-logo')[0].style.color = '#fff';
	document.getElementsByClassName('newsth-logo')[0].style.color = '#fff';
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
	document.documentElement.style.setProperty('--card-border-color', '#ffffff');
	document.documentElement.style.setProperty('--close-color', '#fff');
	document.documentElement.style.setProperty('--toolbox-color', '#373737');
	document.documentElement.style.setProperty('--swal-color', '#525252');

	document.documentElement.style.setProperty('--funcs-bg-color', '#000000dd');
	document.documentElement.style.setProperty('--funcs-color', '#FFFFFF');
	document.documentElement.style.setProperty('--funcs-hover-color', '#aaaaaa');
	document.documentElement.style.setProperty('--show-code-color', '#876CFF');
	document.documentElement.style.setProperty('--show-hover-code-color', '#6d50f0');
	document.documentElement.style.setProperty('--aboutus-background', '#666666');
	document.documentElement.style.setProperty('--arrow-color', '#fff');
	document.documentElement.style.setProperty('--arrow-background', '#525252');
	document.documentElement.style.setProperty('--arrow-hover-background', '#666666');

	document.documentElement.style.setProperty('--settings-button-color', 'rgba(59, 59, 59, 1)');
	document.documentElement.style.setProperty('--settings-button-background', 'rgba(164, 164, 164, 1)');
	document.documentElement.style.setProperty('--settings-button-set-color', 'rgba(255, 255, 255, 1)');
	document.documentElement.style.setProperty('--settings-button-set-background', 'rgba(59, 59, 59, 1)');
	document.getElementById('about-img').src = "./static/img/logo/logo-white-full.svg"
};
var to_light = function () {
	workspace.setTheme(WaddleTheme);
	document.getElementById('widgetPreview').style.backgroundColor = '#ffffff';
	document.getElementById('widgetPreview').style.color = '#000';
	document.getElementsByClassName('theme-sun')[0].style.display = 'none';
	document.getElementsByClassName('theme-moon')[0].style.display = 'block';
	document.getElementsByClassName('modal-content')[0].style.borderTopColor = 'rgb(109, 80, 240)';
	document.getElementsByClassName('newsth-header')[0].style.backgroundColor = '#F5F8FA';
	document.getElementsByClassName('aboutus-header')[0].style.backgroundColor = '#F5F8FA';
	document.getElementsByClassName('newsth-content')[0].style.backgroundColor = '#fff';
	document.getElementsByClassName('aboutus-logo')[0].style.color = 'var(--main-color)';
	document.getElementsByClassName('newsth-logo')[0].style.color = 'var(--main-color)';
	document.getElementById('pwa-color').setAttribute('content', '#6d50f0');
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
	document.documentElement.style.setProperty('--card-border-color', '#b4b4b4');
	document.documentElement.style.setProperty('--close-color', '#6d50f0');
	document.documentElement.style.setProperty('--toolbox-color', '#FFFFFF');
	document.documentElement.style.setProperty('--swal-color', '#ffffff');

	document.documentElement.style.setProperty('--funcs-bg-color', '#ffffffdd');
	document.documentElement.style.setProperty('--funcs-color', '#707070');
	document.documentElement.style.setProperty('--funcs-hover-color', '#505050');
	document.documentElement.style.setProperty('--show-code-color', '#876CFF');
	document.documentElement.style.setProperty('--show-hover-code-color', '#6d50f0');
	document.documentElement.style.setProperty('--line-color', '#9C89FF');
	document.documentElement.style.setProperty('--aboutus-background', '#ffffff');
	document.documentElement.style.setProperty('--arrow-color', '#6d50f0');
	document.documentElement.style.setProperty('--arrow-background', '#efebff');
	document.documentElement.style.setProperty('--arrow-hover-background', '#d7cff7');
	document.getElementById('about-img').src = "./static/img/logo/logo-purple-full.png.svg"


	document.documentElement.style.setProperty('--settings-button-color', 'rgba(105, 85, 231, 0.8)');
	document.documentElement.style.setProperty('--settings-button-background', 'rgba(105, 85, 231, 0.1)');
	document.documentElement.style.setProperty('--settings-button-set-color', '#fff');
	document.documentElement.style.setProperty('--settings-button-set-background', 'rgba(105, 85, 231, 0.7)');

};
var theme_conut = 0;


const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
themeMedia.addListener(e => {
	if (!getCookie('mode')) {
		if (e.matches) {
			to_light();
			theme = 'light';
		} else {
			to_dark();
			theme = 'dark';
		}
	}
});

var switch_theme = function () {
	if (theme == 'light') {
		to_dark();
		theme = 'dark';
		var d = new Date();
		d.setTime(d.getTime() + (3/*天数*/ * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = 'mode=dark;expires=' + expires;
		document.getElementById('pwa-color').setAttribute('content', '#525252');
	} else {
		to_light();
		theme = 'light';
		var d = new Date();
		d.setTime(d.getTime() + (3/*天数*/ * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = 'mode=light;expires=' + expires;
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
	document.getElementsByClassName("modal-content")[0].style.height = window.innerHeight + 'px';
	document.getElementById("logo1").style.width = document.getElementsByClassName('blocklyToolboxDiv')[0].clientWidth + 'px';
	Blockly.svgResize(workspace);
};
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
	document.getElementsByClassName("modal-close")[0].style.display = "block"
} else {
	document.getElementsByClassName('modal')[0].style.width = '400px';
	document.getElementsByClassName("modal-close")[0].style.display = "none"
	if (modal.style.display == 'none' || modal.style.display == '') {
		document.getElementById('blocklyDiv').style.width = '100vw';
		document.getElementById('toolbox').style.width = '100vw';
	} else {
		document.getElementById('blocklyDiv').style.width = 'calc(100vw - 400px)';
		document.getElementById('toolbox').style.width = 'calc(100vw - 400px)';
	}
}

document.getElementsByClassName("copy")[0].style.top = (window.innerHeight - 110) + 'px';
document.getElementsByClassName("modal-close")[0].style.top = (window.innerHeight - 110) + 'px';
