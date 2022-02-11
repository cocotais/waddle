
CustomRenderer = function (name) {
    CustomRenderer.superClass_.constructor.call(this, name);
};
Blockly.utils.object.inherits(CustomRenderer,
    Blockly.blockRendering.Renderer);

CustomConstantsProvider = function () {
    // Set up all of the constants from the base provider.
    CustomConstantsProvider.superClass_.constructor.call(this);

    // Override a few properties.
    /**
     * The width of the notch used for previous and next connections.
     * @type {number}
     * @override
     */
    this.NOTCH_WIDTH = 0;

    /**
     * The height of the notch used for previous and next connections.
     * @type {number}
     * @override
     */
    this.NOTCH_HEIGHT = 0;

    /**
     * Rounded corner radius.
     * @type {number}
     * @override
     */
    this.CORNER_RADIUS = 8;
    
    this.FIELD_DROPDOWN_COLOURED_DIV = true;
};

Blockly.utils.object.inherits(CustomConstantsProvider,
    Blockly.blockRendering.ConstantProvider);

CustomRenderer.prototype.makeConstants_ = function () {
    return new CustomConstantsProvider();
};



Blockly.blockRendering.register('custom_renderer', CustomRenderer);
