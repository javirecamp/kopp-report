// 콘솔에 출력할 때 어느 위치인지 확인할 수 있도록 설정
const tag = "[View]";

export default {
    // element가 들어오면 그대로 셋팅하는 메소드
    init(element) {
        if(!element) throw element;
        this.element = element;
        return this;
    },
    
    // 이벤트와 이벤트가 처리될 핸들러를 묶어준다.
    on(event, handler) {
        this.element.addEventListener(event, handler);
        return this;
    },

    // 이벤트를 호출해주는 역할을 하는 메소드를 구현
    // 이벤트 + 데이터를 담아서 출력해준다. 
    // emit 함수 : 강제로 이벤트 발생 신호를 보냄 , 데이터와 매칭해서 이벤트를 진행시키려고 함
    emit(event, data) {
        const evt = new CustomEvent(event, {detail:data});
        this.element.dispatchEvent(evt); // dispatch 이벤트를 중간에서 가로채서 가지고 있는 상태
        return this;
    },

    // 숨기는 기능을 하는 것
    hide(){
        this.element.style.display = 'none';
    }, 

    // 보이는 기능을 하는 것
    show() {
        this.element.style.display ='';
    }

}