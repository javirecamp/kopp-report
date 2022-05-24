// 콘솔 출력 시 위치 확인
const tag = "[View]"

// 디폴트 설정으로 element가 들어올 경우 어떻게 할지를 정한다
export default{
    init(element){
        // element가 들어오지 않는 경우 예외처리
        if(!element) throw element;
        this.element=element;
        return this;
    },

    // 이벤트를 binding할 때 on 함수를 사용한다.
    // handler는 발생되는 이벤트에 응답해서 실행되는 코드이다.
    on(event, handler){
        this.element.addEventListener(event,handler);
        return this;
    },

    // 이벤트를 다른쪽으로 전달하고 싶을 경우 emit() 메소드를 사용한다.
    // 구체적으로 이벤트를 호출해주는 역할을 수행하며 이벤트와 데이터를 담아 출력해준다.
    emit(event, data){
        // CustomEvent는 직접 만든 이벤트를 의미한다.
        const evt = new CustomEvent(event, {detail:data});
        this.element.dispatchEvent(evt);
        return this;
    },

    // 숨기는 기능
    hide(){
        this.element.style.display = 'none';
    },

    // 보이는 기능
    show(){
        this.element.style.display='';
    }

}