// View.js에 있는 기능들을 사용하기 위해 임포트
import View from "./View.js";

// FormView인지를 알 수 있는 태그 구성
const tag = "[FormView]";

// view에 있는 기능을 그대로 FormView에 옮김 -> 이렇게 하면 this.(뷰에 있는 기능)으로 작성할 수 있음
const FormView = Object.create(View);

// Form 태그에 있는 요소들을 셋팅하고 가져오는 작업
FormView.setup = function(element){
    this.init(element);
    // html에 있는 type이 텍스트인 요소를 가져옴
    this.inputElement = element.querySelector('[type=text]');
    // html에 있는 type이 reset인 요소를 가져옴
    this.resetElement = element.querySelector('[type=reset]');
    // 바인트이벤트 함수를 실행함 -> from 태그에 있는 요소들의 이벤트를 실행
    this.bindEvents();

    // showResetbtn 함수에 false라는 인자를 넘겨서 실행 -> x 버튼 사라짐
    this.showResetbtn(false);
    return this;
}

//bindEvents 메소드 구현
FormView.bindEvents = function(){
    // submit 이벤트가 발생하면 submit 이벤트가 갖고 있는 기본값들을(새로고침) 막아줌
    this.on("submit", e => e.preventDefault());
    // input태그에 키업이라는 이벤트가 발생하면 onKeyup이라는 함수를 실행
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    // x 표시 버튼을 클릭하면 onClickReset이라는 함수 실행
    this.resetElement.addEventListener('click', e => this.onClickReset());
}

// onClickReset 함수가 갖고 있는 기능
FormView.onClickReset = function () {
    this.emit('@reset'); //  reset 이라는 이벤트를 실행한다.
    this.showResetbtn(false); // 리셋 후  showResetbtn 함수를 false라는 인자를 넘겨서 실행.
}


// onKeyup 함수가 갖고 있는 기능들
FormView.onKeyup = function(e){
    // 엔터키를 누를때 처리할 부분 구현
    // 엔터키를 셋팅한다.
    const enter = 13;
    // showResetbtn 이라는 함수에 input태그에 있는 값의 길이를 인자로 넘겨서 실행 -> 0이면 false 그외 true
    this.showResetbtn(this.inputElement.value.length);
    // 엔터가 아니면 계속 진행
    if(e.keyCode !== enter) return
    // enter를 쳤을 경우 submit이라는 이벤트를 실행하고 input 요소에 있는 값을 input이라는 곳에 담아서 emit 실행
    this.emit('@submit',{input:this.inputElement.value});
    
}

// 리셋 버튼을 보여줄지 말지 정하는 함수
FormView.showResetbtn = function(show=true){
    // show라는 값이 true면 보여주고 false면 보여지 않음. 맨 처음에는 true로 설정
    this.resetElement.style.display = show ? 'block' : 'none';

}


// 외부에서 사용할 수 있도록 export default 처리
export default FormView;
