// 공통 기능을 구현한 View import 한다. 
import View from "./View.js";

const tag = "[FormView]";

const FormView = Object.create(View);

// form 태그 내 있는 input, button 셋팅
FormView.setup = function(element){
    this.init(element);
    this.inputElement = element.querySelector('[type=text]');
    this.resetElement = element.querySelector('[type=reset]');
    
    // 각각 input, button 에 이벤트 설정
    this.bindEvents();
    this.showResetBtn(false);
    return this;
}

FormView.bindEvents = function(){
    // submit을 했을때 페이지 이동처리를 막아줌(사용자가 기대했던 부분을 동작하게)
    // 뜻하지 않는 결과를 보일수 있기때문에
    this.on("submit", e=> e.preventDefault());
    // 키를 입력했을때 처리하는 이벤트 연결
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    // x버튼(취소버튼) 클릭했을때 처리
    this.resetElement.addEventListener('click', e => this.onClickReset());
}

// 교수님, onkeyPressDown도 쓸수있지않나요??
FormView.onKeyup = function(e){
    // 엔터키가 13이여서 변수에 상수로 담아주고
    const enter = 13;
    //길이가 있을경우에 x버튼 보이게
    this.showResetBtn(this.inputElement.value.length);
    
    // enter 값이 아니면 중단 아니면 submit 이벤트 발생
    if(e.keyCode !== enter) return;
    this.emit('@submit', {input: this.inputElement.value});
}

// 리셋버튼을 매개변수에 따라 다르게 처리
FormView.showResetBtn = function(show=true){
    this.resetElement.style.display = show?'block':'none';
}

// FormView의 onClickRest 메소드를 구현
FormView.onClickReset = function(){
    this.emit('@reset');
    this.showResetBtn(false);
}


// 외부에서 사용할 수 있도록 export default 처리
export default FormView;