// 1. 为了创建自定义类别，先创建自定义类别，继承自Blockly.ToolboxCategory
class CustomCategory extends Blockly.ToolboxCategory {
	// 自定义类别创造函数
	// categoryDef: 类别定义的信息
	// toolbox: 表示类别的父级toolbox
	// opt_parent: 可选参数，表示其父类别
	constructor(categoryDef, toolbox, opt_parent) {
		super(categoryDef, toolbox, opt_parent);
	}
	// 覆盖原方法
	addColourBorder_(colour) {
		var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
		labelDom.style.color = '';
	}
	// 覆盖原方法
	setSelected(isSelected) {
		// 使用getElementsByClassName选中类别对应的span元素
		var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
		if (isSelected) {
			// 选中的类别背景色设置为原本的颜色
			this.rowDiv_.style.backgroundColor = "#E9EEF2";
			// 选中的类别文本设置为白色
			labelDom.style.color = '#525252';
		} else {
			// 未选中的类别背景色设置为白色
			this.rowDiv_.style.backgroundColor = '';
			// 未选中的类别文本设置为原本的颜色
			labelDom.style.color = '';
		}
		// This is used for accessibility purposes.
		Blockly.utils.aria.setState(/** @type {!Element} */(this.htmlDiv_),
			Blockly.utils.aria.State.SELECTED, isSelected);
	}
}

// 2. 自定义类别需要向Blockly注册，告知自定义类别的存在，不然会无法识别新建的类
Blockly.registry.register(
	Blockly.registry.Type.TOOLBOX_ITEM,
	Blockly.ToolboxCategory.registrationName,
	CustomCategory, true);
