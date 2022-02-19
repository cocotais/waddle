function customContextMenuFn(options) {
	var option = {
	enabled: true,
	text: "Custom option",
	callback: function() {
	console.log('Custom context menu option called');
	}
};

