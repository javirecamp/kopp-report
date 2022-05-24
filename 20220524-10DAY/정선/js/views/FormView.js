// 공통 기능을 구현한 View import 한다.
import View from "./View.js";

// FormView인지 알 수 있는 태그 구성
const tag = "[FormView]";

// View 객체를 가져와서 카피해서 새로운 FormView를 만든다.
const FormView = Object.create(View);

// Form 으로 선언된 것들을 셋팅하는 작업
FormView.setup = function(element){
    this.init(element); // view에 있는 init 메소드를 element 파라미터를 통해 실행한다
    this.inputElement = element.querySelector('[type=text]');   // text 타입인 input 태그
    this.resetelement = element.querySelector('[type=reset]');  // reset 타입인 button 태그
    // 3-1 검색어에 글을 작성하면 발생할 이벤트 바인딩
    this.bindEvents();  // input 태그에 이벤트 리스너를 발생시킨다.
    // x버튼(취소버튼)을 보이거나 안보이게 하는 메소드
    this.showRestBtn(false);
    return this; 
}

// bindEvent 메소드 구현
FormView.bindEvents = function(){
    // submit을 호출하면 자동으로 훅~ 넘어가기 때문에
    // 데이터를 전달받지 못하고 진행이 된다. 그래서 e.preventDefault()를 해줘서
    // 자동으로 훅~ 넘어가지 않게 막아주고 진행을 해야 원한대로 동작을 한다.
    this.on("submit", e => e.preventDefault());
    // 키를 입력했을 때 처리하는 이벤트 연결
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    // x버튼(취소버튼) 클릭했을 때 처리
    this.inputElement.addEventListener('click', e => this.onClickReset());
}

// bindEvent에서 구현한 onKeyup 발생시 처리될 메소드
FormView.onKeyup = function(e){
    // 엔터키를 누를 때 처리할 부분 구현
    // 엔터키를 셋팅한다.
    const enter = 13;
    this.showRestBtn(this.inputElement.value.length);
    // keyCode가 13이면, 처리
    if(e.keyCode !== enter) return;
    // emit : 이벤트를 발생시키는 함수 
    this.emit('@submit', {input: this.inputElement.value});
}

// 버튼이 show 값에 따라 보이게, 보이지 않게 함
FormView.showRestBtn = function (show=true) {
    this.resetelement.display = show? 'block':'none';
}

// FormView의 onClickReset 메소드를 구현
FormView.onClickReset = function () {
    this.emit('@Reset');    // 리셋 이벤트를 처리해준다.
    this.showRestBtn(false);    // 리셋후 버튼을 안보이게 해준다.
}

// 외부에서 사용할 수 있도록 export default 처리
export default FormView;