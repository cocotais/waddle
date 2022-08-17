function preview_render(code) {
    exports = { types: null, widget: null };//用于导出获取控件
    //运行控件
    Function(// 采用CoCo内运行方法
        'VisibleWidget=class {constructor() { };setProps() { };widgetLog() { };widgetWarn() { };widgetError() { };emit() { }}',
        'window=void 0',
        'document={getElementById:function (e) {return e ? document.querySelector("#".concat(I.a, " #").concat(e)) : null}}',
        'history=void 0',
        `navigator={userAgent:"${navigator.userAgent}"}`,
        'localStorage=void 0',
        'top=void 0',
        'self=void 0',
        'parent=void 0',
        'frames=void 0',
        'opener=void 0',
        'fetch=void 0',
        'XMLHttpRequest=void 0',
        'location=void 0',
        'open=void 0',
        'alert=void 0',
        'confirm=void 0',
        'prompt=void 0',
        'print=void 0',
        'sessionStorage=void 0',
        'postMessage=void 0',
        'eval=function () {console.error("eval is not implemented")}',
        code)();

    let properties = {};
    exports.types.properties.forEach(element => {
        properties[element.key] = element.defaultValue;
    });//获取每个属性的初始值，下一步创建实例时传入

    let previewWidget = new exports.widget(properties);//创建一个控件实例

    // 设置预览框大小为控件默认大小
    let widgetPreviewDom = document.getElementById("widgetPreview");
    widgetPreviewDom.style.width = previewWidget.__width + 'px';
    widgetPreviewDom.style.height = previewWidget.__height + 'px';

    ReactDOM.render(
        previewWidget.render(),//渲染
        document.getElementById(widgetPreviewDom)
    );
}