// Views import
import View from "./View.js";

//  tag : 현재의 위치 확인 가능
const tag = "[FormView]";

// View 생성 후 FormView에 담는다
const FormView = Object.create(View);

// Form으로 선언된 것들을 셋팅
FormView.setup = function(element){
    // 초기메소드
    this.init(element);
    // type이 text
    this.inputElement = element.querySelector('[type=text]');
    // type이 reset
    this.resetElement = element.querySelector('[type=reset]');
    // 3-1 검색어에 글을 작성하면 발생할 이벤트 호출
    this.bindEvents();

    // x 버튼을 보이거나 안보이게 하는 메소드 호출
    this.showResetbtn(false);
    return this;
}

//bindEvents 메소드 선언
FormView.bindEvents = function(){
    
    //submit 일 때 처리하는 이벤트
    this.on("submit", e => e.preventDefault());
    // keyup 발생시 처리하는 이벤트
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    // x버튼(취소버튼) 클릭했을 때 처리하는 이벤트
    this.resetElement.addEventListener('click', e => this.onClickReset(e));
   
}


// bindEvent에서 구현한 onKeyup 발생시 처리될 메소드
FormView.onKeyup = function(e){
    // 엔터키를 눌렀을 때
    // 엔터키 13
    const enter = 13;
    this.showResetbtn(this.inputElement.value.length);
    // keyCode가 13이면, 처리
    if(e.keyCode !== enter) return
    // enter를 쳤을 때 처리하는 액선 @submit
    this.emit('@submit',{input:this.inputElement.value});

}

FormView.showResetbtn = function(show=true){
    this.resetElement.style.display = show ? 'block' : 'none';

}

// FormView의 onClickReset 메소드 구현
FormView.onClickReset = function () {
    this.emit('@reset'); // 리셋 이벤트를 처리해준다.
    this.showResetbtn(false); // 리셋 후 버튼을 안보이게 해준다.
}

// FormView를 외부에서 사용할 수 있도록 한다.
export default FormView;