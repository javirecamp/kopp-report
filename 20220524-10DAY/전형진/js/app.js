// index.js가 참조하는 js 파일

// Maincontroller를 임포트 하여 MainController안에 있는 기능을 사용할 수 있다.
import MainController from "./controllers/MainController.js"

// html이 로드되는 순간 MainController의 init 함수가 실행이 된다.
document.addEventListener("DOMContentLoaded",()=>{
    
    // console.log("app.js");
    
    MainController.init();

});

