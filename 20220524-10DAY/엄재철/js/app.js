// MainController 의 init 함수를 호출한다.
// Controller는 대부분의 사용자의 반응에 맞춰 이벤트를 실행시키는 부분
import MainController from "./controllers/MainController.js";

document.addEventListener("DOMContentLoaded",() =>{
    MainController.init();
});