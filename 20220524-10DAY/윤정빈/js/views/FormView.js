// 공통 기능을 구현한 View import 한다. 
import View from "./View.js";

// FormView인지를 알 수 있는 태그 구성 
const tag = "[FormView]";

// View 객체를 가져와서 카피해서 새로운 FormView를 만든다.
const FormView = Object.create(View);

// Form 으로 선언된 것들을 셋팅하는 작업
FormView.setup = function(element){
    this.init(element);
    this.inputElement = element.querySelector('[type=text]');
    this.resetElement = element.querySelector('[type=reset]');
    // 3-1 검색어에 글을 작성하면 발생할 이벤트 바인딩
    this.bindEvents();
    // x버튼(취소버튼)을 보이거나 안보이게 하는 메소드
    this.showResetBtn(false);
    return this;
}

// bindEvent 메소드 구현
FormView.bindEvents = function(){
    // submit 호출 시 자동으로 넘어가므로 data를 전달받지 못하고 진행됨
    // -> e.preventDefault() : 자동으로 넘어가는 것을 막아주고 원하는 부분들이 동작하도록 함
    this.on("submit", e=> e.preventDefault());
    // 키를 입력했을 때 처리하는 이벤트 연결
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    // x버튼(취소버튼) 클릭했을때 처리
    this.resetElement.addEventListener('click', e => this.onClickReset());
}

// bindEvent에서 구현한 onKeyup 발생시 처리될 메소드
FormView.onKeyup = function(e){
    // 엔터키를 누를때 처리할 부분 구현 
    const enter = 13;
    this.showResetBtn(this.inputElement.value.length);//길이가 있을 경우에 x버튼 보이게
    // 엔터 치면 keyCode = 13 되면서 처리
    if(e.keyCode !== enter) return;
    // enter를 쳤을 때 처리하는 액션 @submit
    this.emit('@submit', {input: this.inputElement.value});
}

// reset 버튼에 대한 기능 : 화면에 숨길지 말지
FormView.showResetBtn = function(show=true){
    this.resetElement.style.display = show?'block':'none';
}

// FormView의 onClickRest 메소드를 구현
FormView.onClickReset = function(){
    this.emit('@reset'); // reset 이벤트 처리
    this.showResetBtn(false); // reset 후 버튼을 숨김 처리
}


// 외부에서 사용할 수 있도록 export default 처리
export default FormView;