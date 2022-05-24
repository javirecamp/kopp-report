//1. 공통기능을 구현한 (같은 폴더에 있는) View.js를 import
import View from "./View.js";

//2. 참조위치를 확인할 수 있는 FormView 태그 구성
const tag = "[FormView]";

//3. View 객체를 새롭게 create해서 새로운 FormView 생성
const FormView=Object.create(View);

//4. Form으로 선언된 것들을 셋팅하는 작업
FormView.setup = function(element){
    this.init(element);
    this.inputElement = element.querySelector('[type=text]');
    this.resetElement = element.querySelector('[type=reset]');
    // 검색어에 글을 작성하면 발생할 이벤트 바인딩
    this.bindEvents();
    //리셋 버튼(x)을 보이거나 안보이게 하는 메소드
    this.showResetBtn(false);
    return this;
}

//5. bindEvent 메소드 구현
FormView.bindEvents = function(){
    // submit을 호출하면 자동으로 데이터가 훅 넘어가기 때문에 데이터를 전달받지 모하고 진행이 된다.
    // 그래서 e.preventDefault 를 해줘서 자동으로 넘어가지 않게 막아주고 ㅣㄴ행을 해야 원한대로 동작을 하낟.
    // 키를 이력했을 때 처리하는 이벤트 연결
    this.on("submit",e=>e.preventDefault());
    //키를 입력했을 때 처리하는 이벤트 연결
    this.inputElemet.addEventListener('keyup',e=>this.onKeyup(e));
    // x버튼(리셋 버튼) 클릭했을 때 처리
    this.resetElement.addEventListener("click",e=>this.onClickReset());
}

//6. bindEvent에서 구현한 onKeyup 발생시 처리될 메소드
//onKeyup: 사용자가 글자를 입력 했을 때
FormView.onKeyup = function(e){
    //엔터키를 누를 때 처리할 부분 구현
    //엔터키를 셋팅한다.
    //엔터키는 숫자 13을 의미하낟.
    const enter = 13;

    this.showResetBtn(this.inputElemet.value.length);
    
    //keyCode가 13가 아니면 돌아가고 13이면, 아래 구문 처리
    if(e.keyCode!== enter) return;
    //@submit: enter를 쳤을 때 처리하는 액션
    this.emit('@submit',{input:this.inputElemet.value});
}

//7. x버튼을 보여주는지 감출지 결정하는 메소드
FormView.showResetBtn = function(show=true){ //show=true는 버튼을 보이게 하라는 의미
    this.resetElement.style.display = show? 'block':'none';
}

//8. FormView의 onClickReset 메소드: x 버튼을 누르면 모든 글자가 리셋된다. 
FormView.onClickReset = function(){
    this.emit('@reset'); //리셋 이벤트를 처리해준다.
    this.showResetBtn(false); //false: 리셋 후 다시 버튼을 안보이게 해준다.
}


//9. export: 외부에서도 사용할 수 있도록 export default 처리를 해준다.
export default FormView;

