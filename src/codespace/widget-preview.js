export function preview_render(code) {
  document.querySelector("#widgetPreview").contentWindow.run(code);
  document.querySelector("#widgetPreview").contentWindow.start();
}
