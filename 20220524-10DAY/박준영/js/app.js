// MainController Connection
import MainController from "./controllers/MainController.js";

// 브라우저가 HTML을 모두 읽고 DOM트리가 완성되면 실행
document.addEventListener("DOMContentLoaded", () => {
    // 메인컨트롤러 실행
    MainController.init();
});