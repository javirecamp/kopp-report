// 공통 기능을 구현한 view import
import View from "./View.js";

// FormView인지를 알 수 있는 태그 구성
const tag = "[FormView]";


// 지정된 프로토타입 객체(View) 및 속성(property)을 갖는 새 객체만들기
const FormView = Object.create(View);

// Form으로 선언된 것들을 세팅
FormView.setup = function(element){
    this.init(element);
    this.inputElement = element.querySelector('[type=text]');
    this.resetElement = element.querySelector('[type=reset]');
    // 검색어에 글을 작성하면 발생할 이벤트를 바인딩해주기
    this.bindEvents();
    // 취소버튼을 보이거나 안보이게 하는 메소드
    this.showResetBtn(false);
    return this;

}

// bindevent 구현
FormView.bindEvents = function(){
    // 키를 입력했을 때 처리하는 이벤트 연결
    // 새로 실행하지 않게 하고싶을 경우 preventDefault 사용
    this.on("submit", e => e.preventDefault());
    //onKeyup: 키를 눌렀다가 땠을 때
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    //취소버튼 클릭했을 때 처리
    this.resetElement.addEventListener('click', e => this.onClickReset());

}
// bindEvent에서 구현한 onKeyup 발생시 처리될 메소드
FormView.onKeyup = function(e){
    //enter keycode가 13
    const enter = 13;
    this.showResetBtn(this.inputElement.value.length);
    //keycode가 13이면 처리
    if(e.keyCode !== enter) return;
    //enter를 쳤을 때 처리
    this.emit('@submit', {input: this.inputElement.value});

}

FormView.showResetBtn = function(show=true){
    this.resetElement.style.display = show? 'block':'none';
}

//FormView의 onClickReset 메소드 구현
FormView.onClickReset = function(){
    this.emit('@reset'); //리셋 이벤트 처리
    this.showResetBtn(false); //리셋 후 버튼 사라지게
}

//외부에서 사용할 수 있도록 export default 처리
//export default가 되어야지만 import가 가능
export default FormView;
