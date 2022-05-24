// 1. MainController와 연결을 한다.
import MainController from "./controllers/MainController.js";

// dom이 로드될 때 MainController의 초기화 함수를 호출한다.
document.addEventListener("DOMContentLoaded", () => {
    // console.log("app.js");
    MainController.init();
})