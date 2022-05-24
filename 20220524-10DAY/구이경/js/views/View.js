//1. 콘솔에 출력할 때 어느위치인지 확인할 수 있도록 태그 사용
const tag="[View]";

//2. 외부에서도 사용할 수 있도록 export 설정
export default{
    //3. init: element가 들어오면 그대로 셋팅하는 메소드
    init(element){
        if(!element) throw element;
        this.element = element;
        return this;
    },

    //4. 이벤트와 이벤트가 처리될 핸들러를 묶어준다.
    on(event,handler){
        this.element.addEventListener(event,handler);
        return this;
    },

    //3. emit: 이벤트를 호출해주는 메소드
    //이벤트 + 데이터를 담아서 출력해준다.
    emit(event,data){
        const evt = new CustomEvent(event,{detail:data});
        this.element.dispatchEvent(evt);
        return this;
    },
    //4. hide: 숨기는 기능을 하는 메소드
    hide(){
        this.element.style.display='none';
    },

    //5. show: 보이는 기능을 하는 메소드
    show(){
        this.element.style.display='';
    }
}
