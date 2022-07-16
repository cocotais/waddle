var BlockColors = {
	"loop": "#68cdff",
	"math": "#feae8a",
	"procedure": "#f88767",
	"function": "#77d657",
	"varible": "#ffbb55",
	"list": "#f9cc37",
	"dict": "#2bc9a7",
	"colour": "#2bc9a7",
	"dom": "#a073ff",
	"lodash": "#608fee",
	"axios": "#5a29e4",
	"utils": "#14b390",
	"crypto": "#5574f8",
	"vika": "#f88767",
	"qrcode": "#c367f9",
	"permission": "#a073ff"
}



WaddleTheme = Blockly.Theme.defineTheme('WaddleTheme', {
	'base': Blockly.Themes.Classic,
	'blockStyles': {
		loop_blocks: { colourPrimary: BlockColors["loop"] },
		math_blocks: { colourPrimary: BlockColors["math"] },
		text_blocks: { colourPrimary: BlockColors["math"] },
		procedure_blocks: { colourPrimary: BlockColors["procedure"] },
		function_blocks: { colourPrimary: BlockColors["function"] },
		variable_blocks: { colourPrimary: BlockColors["varible"] },
		list_blocks: { colourPrimary: BlockColors["list"] },
		colour_blocks: { colourPrimary: BlockColors["colour"] },
		dom_blocks: { colourPrimary: BlockColors["dom"] },
		lodash_blocks: { colourPrimary: BlockColors["lodash"] },
		axios_blocks: { colourPrimary: BlockColors["axios"] },
		utils_blocks: { colour_blocks: BlockColors["utils"] },
		crypto_blocks: { colourPrimary: BlockColors["crypto"] },
		vika_blocks: { colourPrimary: BlockColors["vika"] },
		qrcode_blocks: { colourPrimary: BlockColors["qrcode"] },
		permission_blocks: { colourPrimary: BlockColors["permission"] }
	},
	'componentStyles': {
		workspaceBackgroundColour: "#fafafa",
		toolboxBackgroundColour: "var(--toolbox-color)",
		flyoutBackgroundColour: "#f2f2f2cc",
	}
});

DarkTheme = Blockly.Theme.defineTheme('DarkTheme', {
	'base': Blockly.Themes.Classic,
	'blockStyles': {
		loop_blocks: { colourPrimary: BlockColors["loop"] },
		math_blocks: { colourPrimary: BlockColors["math"] },
		text_blocks: { colourPrimary: BlockColors["math"] },
		procedure_blocks: { colourPrimary: BlockColors["procedure"] },
		function_blocks: { colourPrimary: BlockColors["function"] },
		variable_blocks: { colourPrimary: BlockColors["varible"] },
		list_blocks: { colourPrimary: BlockColors["list"] },
		colour_blocks: { colourPrimary: BlockColors["colour"] },
		dom_blocks: { colourPrimary: BlockColors["dom"] },
		lodash_blocks: { colourPrimary: BlockColors["lodash"] },
		axios_blocks: { colourPrimary: BlockColors["axios"] },
		utils_blocks: { colour_blocks: BlockColors["utils"] },
		crypto_blocks: { colourPrimary: BlockColors["crypto"] },
		vika_blocks: { colourPrimary: BlockColors["vika"] },
		qrcode_blocks: { colourPrimary: BlockColors["qrcode"] },
		permission_blocks: { colourPrimary: BlockColors["permission"] }
	},
	'componentStyles': {
		workspaceBackgroundColour: "#2e2e2e",
		toolboxBackgroundColour: "var(--toolbox-color)",
		flyoutBackgroundColour: "#f2f2f2cc",
	}
});