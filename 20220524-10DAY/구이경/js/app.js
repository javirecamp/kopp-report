//1.Import: 외부스크립트 또는 외부 모듈의 export 된 함수, 객체를 가져오는데 사용
//1-1)MainController와 연결을 한다.
import MainController from "./controllers/MainController.js";

//2. DOMContentLoaded 이벤트: index.html 문서가 완전히 불러오면 발생
// 2-1)html문서가 다 불러와지만 화살표 함수 이후 코드가 실행된다.
document.addEventListener("DOMContentLoaded",()=>{
    //console.log("app.js");

    //2-2)html 페이지가 실행되면 MainController의 init() 함수가 실행된다.
    MainController.init();
});
