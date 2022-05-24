//./View.js에서 import 
import View from "./View.js";

//[FormView] 태그 구성
const tag = "[FormView]";

//View 객체를 가져와서 카피해서 새로운 fromView를 만든다.
const FormView = Object.create(View);

//메소드나 프로포티를 접근할 때는 다 this를 쓴다고 보면 됌.

//form으로 선언된 것들을 셋팅하는 작업 
FormView.setup = function(element){
    this.init(element); //this init으로 세팅이 됌. 
    this.inputElement = element.querySelector('[type=text]'); //input타입은 얘를 가져옴.
    this.resetElement = element.querySelector('[type=reset]'); 
    //3-1 검색어에 글을 작성하면 발생할 이벤트 바인딩
    this.bindEvents();
    this.showResetBtn(false);
    return this;
    //여기서 가리키는 this는 formview라고 보면 된다. this 안쓰면 에러 뜸. this 꼭 써야 동작이 된다.
}

//bindEvent 메소드 구현 
FormView.bindEvents = function(){
    //submit을 호출하면 자동으로 훅 너멍가기 때문에 데이터를 전달받지 못하고 진행이 된다.
    //따라서 e.preventDefault()를 해줘서 
    //자동으로 혹 넘어가지 않게 막아주고 진행을 해야 원한대로 동작이 된다.
    //키를 입력했을 때 처리하는 이벤트 연결
    this.on("submit", e => e.preventDefault());
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    //취소 버튼(클릭했을 때 처리하는 부분)
    this.resetElement.addEventListener('click', e => this.onClickReset());
}
//이벤트리스너는 기존 함수 실행과 다르게, "조건이 충족되면" 함수를 실행시켜주는 도구!!!
// 즉, 원래 함수 실행은 "이름();" 붙이면 끝이었지만 이건 무조건적인 실행을 의미하고
// 이벤트리스너의 실행은 가령 "클릭 시" 함수 실행하고 싶을 때 등등에 사용하는 거!!

//bindEvent에서 구현한 onkeyup 발생시 처리될 메소드
FormView.onKeyup = function(e){ //텍스트를 입력했을 때 길이가 존재하면 true, 길이가 존재하지 않으면 false
    //엔터키를 누를 때 처리할 부분 구현
    //엔터키를 셋팅한다.
    const enter = 13;
    //들어오는 Keycode가 13이면, 처리
    this.showResetBtn (this.inputElement.value.length); //들어갈value가 길이가 있으면 true, 없으면 false 리턴
    if(e.keyCode !== enter) return;
    //enter를 쳤을 때 처리하는 액션 @submit
    this.emit('@submit', {input : this.inputElement.value});//@submit 이벤트가 일어났을 때 데이터를 매칭 시킨후 객체를 던진다.
    //emit은 호출한다는 뜻. {input .....}라는 객체를 들고 간다는 뜻.
}
FormView.showResetBtn = function(show=true){ //값을 show라고 받으면 
    this.resetElement.style.display = show? 'block':'none';
}

//FormView의 onClickReset 메소드를 구현
FormView.onClickReset = function(){
    this.emit('@reset'); //리셋 이벤트를 처리해준다.
    this.showResetBtn(false); //리셋 후 버튼을 안보이게 해준다.
}

//외부에서 사용할 수 있도록 export default 처리
export default FormView;





