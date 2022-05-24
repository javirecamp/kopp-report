// MainConroller와 연결을 한다.
import MainController from "./controllers/MainController.js";

// 문서객체가 로드가 된 후에 이벤트발생
document.addEventListener("DOMContentLoaded",() =>{
    // console.log("app.js");
    // MainController 설정 초기화
    MainController.init();
});