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
    // submit을 호출하면 자동으로 훅~ 넘어가기 때문에 
    // 데이터를 전달받지 못하고 진행이 된다. 그래서 e.preventDefault()를 해줘서 
    // 자동으로 훅~ 넘어가지 않게 막아주고 진행을 해야 원한대로 동작을 한다.    
    this.on("submit", e=> e.preventDefault());
    // 키를 입력했을때 처리하는 이벤트 연결
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    // x버튼(취소버튼) 클릭했을때 처리
    this.resetElement.addEventListener('click', e => this.onClickReset());
}

// bindEvent에서 구현한 onKeyup 발생시 처리될 메소드
FormView.onKeyup = function(e){
    // 엔터키를 누를때 처리할 부분 구현 
    // 엔터키를 셋팅한다. 
    const enter = 13;
    this.showResetBtn(this.inputElement.value.length);//길이가 있을경우에 x버튼 보이게
    // keyCode가 13이면, 처리
    if(e.keyCode !== enter) return;
    // enter를 쳤을 처리하는 액션 @submit
    this.emit('@submit', {input: this.inputElement.value});
}

FormView.showResetBtn = function(show=true){
    this.resetElement.style.display = show?'block':'none';
}

// FormView의 onClickRest 메소드를 구현
FormView.onClickReset = function(){
    this.emit('@reset'); // 리셋 이벤트를 처리해준다.
    this.showResetBtn(false); // 리셋후 버튼을 안보이게 해준다.
}


// 외부에서 사용할 수 있도록 export default 처리
export default FormView;
