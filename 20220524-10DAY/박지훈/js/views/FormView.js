// 공통 기능을 구현한 View를 import
import View from "./View.js"

// FormView인지를 알 수 있는 태그 구성
const tag = "[FormView]";

// View 객체를 가져와서 카피해서 새로운 FormView를 만든다.
const FormView = Object.create(View);

// Form으로 선언된 것들을 세팅하는 작업
FormView.setup = function(element){
    this.init(element);
    this.inputElement = element.querySelector('[type=text]');
    this.resetElement = element.querySelector('[type=reset]');
    // 검색어에 글을 작성하면 발생하는 이벤트 바인딩
    this.bindEvents();
    this.showResetBtn(false);
    return this;
}

// bindEvent 메소드 구현
FormView.bindEvents = function(){
    this.on("submit", e => e.preventDefault());
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e)); //글자를 집어넣는 방식의 인풋을 만들어준다
    this.resetElement.addEventListener('click', e => this.onClickReset()); //클릭했을 때 리셋이 되는 방식을 만들어준다.

}



// bindEvent에서 구현한 onKeyup 발생시 처리 될 메소드
FormView.onKeyup = function(e){
    const enter = 13;
    this.showResetBtn(this.inputElement.value.length);
    // keyCode가 13이면 처리
    if(e.keyCode !== enter) return;
    this.emit('@submit', {input : this.inputElement.value});
    return this;


}


FormView.showResetBtn = function(show=true){
    this.resetElement.style.display = show? 'block' : 'none'; //아무 명령어도 치지 않았을 때 X버튼이 보이지 않게 설정.
}

FormView.onClickReset = function(){
    this.emit('@reset');
    this.showResetBtn(false); //버튼을 클릭했을 때 다시 검색어 창이 빌 수 있도록 reset을 시켜준다.
}
// 외부에서 사용할 수 있도록 export default 처리
export default FormView;