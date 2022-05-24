import View from "./View.js";

// FormView인지 알 수 있는 태그
const tag = "[FormView]";

// View 객체를 기반으로 새로운 FormView 만든다. 
const FormView = Object.create(View);

// 기본 세팅 작업
FormView.setup=function(element){
    this.init(element);
    this.inputElement=element.querySelector('[type=text]');
    this.resetElement=element.querySelector('[type=reset]');
    // 글 작성 시 이벤트 바인딩
    this.bindEvents();

    // 취소버튼을 보이거나 안보이게 하는 메소드
    this.showResetBtn(false);
    return this;
}

// 이벤트 바인딩을 함수로 구현
FormView.bindEvents=function(){
// 데이터를 전달받지 못하고 진행되는 상황을 막기 위해 e.preventDefault()를 사용한다
this.on("submit", e => e.preventDefault());
// keyup은 키 입력 후 발생되는 이벤트이다. 참고로 keydown()은 키 입력 시 발생하는 이벤트, keypress는 키 입력시 발생하지만 enter, tab등 특수키에는 발생하지 않는다.
this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
// 취소버튼 시 이벤트 처리
this.resetElement.addEventListener('click', e => this.onClickReset());
}

// onKeyup시 처리할 메소드
FormView.onKeyup=function(e){
    // 엔터키를 누를 때 처리할 부분
    const enter = 13;
    this.showResetBtn(this.inputElement.value.length);
    // keyCode가 13이면 처리
    if(e.keyCode !==enter) return;
    this.emit('@submit', {input: this.inputElement.value});
}

FormView.showResetBtn=function(show=true){
    this.resetElement.style.display=show?'block':'none';
}

// onClickReset 메소드 구현
FormView.onClickReset=function(){
    // reset 이벤트 처리 후 리셋 버튼을 안보이게 해줌
    this.emit('@reset');
    this.showResetBtn(false);
}

// 외부에서 이용할 수 있도록 아래와 같이 처리
export default FormView;