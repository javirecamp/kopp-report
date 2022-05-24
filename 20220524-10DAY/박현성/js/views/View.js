//  tag : 현재의 위치 확인 가능
const tag = "[View]";
// Views.js 는 다른 뷰들이 상속받을 js로써, 기본 기능이 구현
export default{
    // 초기 메소드
    init(element){
        if(!element) throw element;
        this.element = element;
        return this;
    },
    // 이벤트와 이벤트가 처리될 핸들러를 묶어 리턴
    on(event, handler){
        this.element.addEventListener(event, handler);
        return this;
    },
    // 숨김
    hide(){
        this.element.style.display = 'none';
    },
    // 보이는 기능
    show(){
        this.element.style.display = '';
    },
    emit(event, data){
        const evt = new CustomEvent(event, {detail:data});
        this.element.dispatchEvent(evt);
        return this;
    }
}