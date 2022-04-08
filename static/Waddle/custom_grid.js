
var path = document.createElement("path");
path.setAttribute('stroke-width', '2px');
path.setAttribute('d', 'M 120 0 L 0 0 0 120');
path.setAttribute('stroke', '#DBEAFF');
path.setAttribute('stroke-opacity', '0.8');

options = {
	spacing: 20,
	length: 3,
	colour: '#ccc',
	snap: true
}

CustomGrid = new Blockly.Grid(path, options);
