// 공통 기능을 구현한 View import 한다.
import View from "./View.js";

// 디버깅을 위한 tag 변수 생성
const tag = "[FormView]";

// view 객체를 가져와서 카피해서 새로운 FormView 객체 생성
const FormView = Object.create(View);

// Form으로 선언된 것들을 셋팅하는 작업
FormView.setup = function(element) {  // FormView에 setup이라는 메소드 생성
                        // document.querySelector("Form");
    
    this.form = document.querySelector("form");
    this.init(element); // view에 있는 init메소드를 element파라미터를 통해 실행
    this.inputElement = element.querySelector('[type=text]'); // text타입 input태그
    this.resetElement = element.querySelector('[type=reset]'); // reset타입 button태그 생성

    // 3-1 검색어에 글을 작성하면 발생할 이벤트 바인딩
    this.bindEvents();
    // x버튼(취소버튼)을 보이거나 안보이게 하는 메소드
    this.showResetBtn(false);
    return this;
}

// bindEvent 메소드 구현
FormView.bindEvents = function() {
    // submit을 호출하면 자동으로 훅 넘어가기 때문에 데이터를 전달받지 못하고 진행이 된다. 
    // 그래서 e.preventDefault()를 해줘서 자동으로 훅 넘어가지 않게 막아죽 진행을 해야 원하는 대로 동작을 한다.
    this.on("submit",  e => e.preventDefault());
    // 키를 입력했을 때 처리하는 이벤트(keyup) 작성 시 이벤트 핸들러 발생
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    // x버튼(취소버튼) 클릭했을 때 처리
    this.resetElement.addEventListener('click', e => this.onClickReset());
}

// bindEvent에서 구현한 onKeyup 발생시 처리될 메소드
// onKeyup함수는 input엘리먼트 벨류값이 있으면 true, 없으면 false
FormView.onKeyup = function(e) {
    // 엔터키를 누를 때 처리할 부분 구현
    // 엔터는 코드번호로 13번이라 변수로 지정
    const enter = 13;
    this.showResetBtn(this.inputElement.value.length); // 길이가 있을 경우에 x버튼 보이게
    // 키 코드가 엔터가 아닌 경우 return값을 주어 그냥 지나침
    if(e.keyCode !== enter) return;
    // 드렇지 않은 경우 FromView의 emit메소드를 이용하여 메인 컨트롤러에 값을 알려주는 역할
    // enter를 쳤을 때 처리하는 액션 이벤트 @submit  데이터 {input: this.inputElement.value}
    this.emit('@submit', {input: this.inputElement.value});
}

// reset button 숨기고 보이는 기능 메소드 구현
FormView.showResetBtn = function(show=true){
    this.resetElement.style.display = show? 'block' :'none';
}

// FormView의 onClickRest 메소드를 구현
FormView.onClickReset = function() {
    this.emit('@reset'); // 리셋 이벤트 처리
    this.showResetBtn(false); // 리셋 후 버튼을 안보이게(false), true: 버튼 보임
}


// 외부에서 사용할 수 있도록 export default 처리
export default FormView;
