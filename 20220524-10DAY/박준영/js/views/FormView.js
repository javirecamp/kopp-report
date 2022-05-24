// View Connection
import View from "./View.js";

// FormView 태그 설정
const tag = "[FormView]";

// FormView에 View객체 생성
const FormView = Object.create(View);

// View로 생성된 객체를 FormView로 설정
FormView.setup = function (element) {
    this.init(element);
    this.inputElement = element.querySelector('[type=text]');
    this.resetElement = element.querySelector('[type=reset]');
    // 글 작성시 이벤트 바인딩
    this.bindEvents();
    // x버튼을 누르면 입력창 초기화
    this.showResetBtn(false);
    return this;
}

// 이벤트 바인딩 함수
FormView.bindEvents = function () {
    // submit을 호출하면 자동으로 훅~ 넘어가기 때문에 
    // 데이터를 전달받지 못하고 진행이 된다. 그래서 e.preventDefault()를 해줘서 
    // 자동으로 훅~ 넘어가지 않게 막아주고 진행을 해야 원한대로 동작을 한다.    
    this.on("submit", e => e.preventDefault());
    // 키를 입력했을때 처리하는 이벤트 연결
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    // x버튼(취소버튼) 클릭했을때 처리
    this.resetElement.addEventListener('click', e => this.onClickReset());
}

// bindEvent에서 구현한 onKeyup 발생시 처리될 메소드
FormView.onKeyup = function (e) {
    // 엔터키를 누를때 처리할 부분 구현 
    // 엔터키를 셋팅한다. 
    const enter = 13;
    this.showResetBtn(this.inputElement.value.length);//길이가 있을경우에 x버튼 보이게
    // keyCode가 13이면, 처리
    if (e.keyCode !== enter) return;
    // enter를 쳤을 처리하는 액션 @submit
    this.emit('@submit', { input: this.inputElement.value });
}

FormView.showResetBtn = function (show = true) {
    this.resetElement.style.display = show ? 'block' : 'none';
}

// FormView의 onClickRest 메소드를 구현
FormView.onClickReset = function () {
    this.emit('@reset'); // 리셋 이벤트를 처리해준다.
    this.showResetBtn(false); // 리셋후 버튼을 안보이게 해준다.
}


// 외부에서 사용할 수 있도록 export default 처리
export default FormView;
