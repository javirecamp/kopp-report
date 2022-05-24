
// 콘솔에 출력할 때 어느 위치인지 확인할 수 있도록 설정
const tag = "[View]";

export default
{
    // elemetn가 들엉면 그대로 세팅하는 메소드
    init(element){
        if(!element) throw element;
        this.element = element;
        return this;
    },
    // 이벤트와 이벤트가 처리될 핸들러를 묶어준다.
    on(event, handler){
        this.element.addEventListener(event,handler);
        return this;
    },

    // 이벤트를 호출해주는 역할을 하는 메소드 구현
    // 이벤트 + 데이터 담아서 출력
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
