// 콘솔에 출력할때 어느 위치인지 확인할 수 있도록 설정
const tag = "[View]";

// 다른 곳에서 View.js에 있는 아래 기능들을 사용하기 위해서 export 해준다,
export default{
    // 인자로 넘겨 받은 엘리먼트를 그대로 넘겨 주는 메소드
    init(element){
        if(!element) throw element;
        this.element = element;
        return this;
    },
    // 넘겨받은 이벤트(서브밋,리셋등)와 이러한 이벤트가 발생했을 시 일어나는 기능을 반환함
    on(event, handler){
        this.element.addEventListener(event,handler);
        return this;
    },
    //  인자로 넘겨받은 이벤트를 실행하는 메소드
    // 이벤트 + 데이터를 반환
    emit(event,data){
        //CustomEvent라는 생성자를 이벤트와 데이터를 담아서 evt에 저장
        const evt = new CustomEvent(event,{detail:data});
        // 이벤트 객체를 생성했으면 dispatchEvent를 호출해 설정한 이벤트 실행
        this.element.dispatchEvent(evt);
        return this
    },
    // 지정된 엘리먼트를 화면에서 숨김
    hide(){
        this.element.style.display = 'none';
    },
    // 지정된 엘리먼트를 화면에 표시
    show(){
        this.element.style.display = '';
    }
}