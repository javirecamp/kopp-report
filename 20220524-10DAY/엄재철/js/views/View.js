// 유저인터페이스 부분
// 로직구현하는 부분이 아님

const tag = "[View]";

export default{
    // element가 null이 아닐때 return
    init(element){
        if(!element) throw element;
        this.element = element;
        return this;
    },
    // 매개변수2개에 이벤트 명, 처리할 함수를 담아 리턴
    on(event, handler){
        this.element.addEventListener(event,handler);
        return this;
    },
    // on과 비슷한 역할을 하며 변수에 담은 값을 동기처리
    emit(event, data){
        const evt = new CustomEvent(event, {detail:data});
        this.element.dispatchEvent(evt);
        return this;
    },

    // 숨기는 기능을 하는 것
    hide(){
        this.element.style.display = 'none';
    },
    // 보이는 기능을 하는 것
    show(){
        this.element.style.display = '';
    }
}