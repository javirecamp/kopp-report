// MainController와 연결을 한다.
import MainController from "./controllers/MainController.js";

// 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생하는 이벤트
// MainController를 초기화시킨다.
document.addEventListener("DOMContentLoaded", () => {
    // console.log("app.js");
    MainController.init();
});