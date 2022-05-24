// MainContoller와 연결을 한다.
import MainContoller from "./controllers/MainController.js";

document.addEventListener("DOMContentLoaded", () => {
    // 화면이 맨처음 로드 될 때, 실행된다.
    console.log("app.js");
    MainContoller.init();
});