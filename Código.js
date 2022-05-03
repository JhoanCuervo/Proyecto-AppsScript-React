const doGet = () => HtmlService.createTemplateFromFile('view/index').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
const include = (ruta) => HtmlService.createHtmlOutputFromFile(ruta).getContent();
