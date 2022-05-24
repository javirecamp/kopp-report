//console에 출력할 때 어느 위치인지 확인할 수 있도록 tag (필수는 아니지만 알아보기 편하게)
const tag = "[View]";

export default{
    // element가 들어오면 그대로 세팅하는 메소드
    init(element){
        if(!element) new element;
        this.element = element;
        return this;
    },
    // 이벤트와 이벤트를 처리하는 핸들러를 묶기
    on(event, handler){
        this.element.addEventListener(event,handler);
        return this;
    },
    //이벤트를 다른쪽으로 전달하고 싶을 경우
    //이벤트 + 데이터를 담아서 출력
    emit(event, data){
        //custoomevemt 자체 사용자 지정 이벤트를 만드는 데 사용
        const evt = new CustomEvent(event, {detail:data});

        //이벤트를 반드시 '실행’시켜줘야 한다: dispatchEvent 
        this.element.dispatchEvent(evt);
        return this;
    },
    //숨기는 기능
    hide(){
        this.element.style.display = 'none';
    },
    //보이는 역할
    show(){
        this.element.style.display='';
    }
}