// 공통 기능을 구현한 View import한다.
import View from "./View.js";

// FormView인지를 알 수 있는 태그 구성
const tag = "[FormView]";

// View 객체를 가져와서 카피해서 새로운 FormView를 만든다.
const FormView = Object.create(View);

// Form으로 선언된 것들을 셋팅하는 작업
FormView.setup = function (element) {
    // 맨처음 초기 함수를 실행시켜준다.
    this.init(element);
    // 검색창과 리셋버튼 객체를 가져온다.
    this.inputElement = element.querySelector('[type=text]');
    this.resetElement = element.querySelector('[type=reset]');
    // 3-1 검색어에 글을 작성하면 발생할 이벤트 바인딩
    this.bindEvents();
    // x 버튼을 보이거나 안보이게 하는 메소드
    this.showResetBtn(false);
    return this;
}

// bindEvents 메소드 구현
FormView.bindEvents = function() {
    // submit을 호출하면 자동으로 훅 넘어가기 때문에
    // 데이터를 전달받지 못하고 진행이 된다. 그래서 e.preventDefault()를 해줘서
    // 자동으로 훅 넘어가지 않게 막아주고 진행을 해야 원하는데로 동작을 한다.
    // 값을 같이 가져갈 수 있도록 잠시 submit을 잡아주는 역할?
    this.on("submit", e => e.preventDefault());
    // 키를 입력했을 때 처리하는 이벤트 연결
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    // x버튼(취소) 클릭했을 때 처리
    this.resetElement.addEventListener("click", e => this.onClickReset());
}

// bindEvents에서 구현한 onKeyup 발생시 처리될 메소드
FormView.onKeyup = function(e) {
    // 키를 입력했을 때 처리하는 이벤트 연결
    // 엔터키를 누를 때 처리할 부분 구현
    // 엔터키를 셋팅한다.
    const enter = 13;
    // 검색창의 길이가 0일 경우 false, 1이상일 경우 true이다.
    this.showResetBtn(this.inputElement.value.length);

    // keyCode가 13이면, 처리
    if (e.keyCode !== enter) return;
    
    // enter를 쳤을 때 처리하는 액션 @submit
    this.emit('@submit', {input: this.inputElement.value});
}

FormView.showResetBtn = function(show=true){
    // show가 true일 경우 block(보임), false 일 경우 안보임
    this.resetElement.style.display = show ? 'block' : 'none';
}

// FormView의 onClickReset 메소드를 구현
FormView.onClickReset = function() {
    this.emit("@reset"); // 리셋 이벤트를 처리해줌
    this.showResetBtn(false); // 리셋 후 버튼을 안보이게 해준다.
}

// 외부에서 사용할 수 있도록 export default 처리
export default FormView;