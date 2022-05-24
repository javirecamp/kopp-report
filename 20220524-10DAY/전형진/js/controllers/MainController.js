// FormView를 임포트 하여 FormView의 기능을 사용할 수 있다.
import FormView from "../views/FormView.js";
// SearchResultView를 임포트 하여 SearchResultView의 기능을 사용할 수 있다.
import SearchResultView from "../views/SearchResultView.js"
// SearchMenu를 임포트 하여 SearchMenu의 기능을 사용할 수 있다.
import SearchMenu from "../models/SearchMenu.js";

const tag = "[MainController]";

//익스포트를 해줘야 다른 곳에서 MainConstroller의 기능을 사용할 수 있다.
export default{
    // FormView와 SearchResultView에 필요한 데이터나 인자들을 셋업 해줌
    init(){
       console.log(tag,"init()");
        // FormView setup 함수에 form 태그와 submit,reset 이벤트와 핸들러를 넘겨줌
        FormView.setup(document.querySelector('form')).on('@submit',e=>this.onSubmit(e.detail.input))
        .on('@reset', e => this.resetForm());
        //SearchResultView setup 함수에 search-result 아이디를 가진 요소를 넘겨줌
        SearchResultView.setup(document.querySelector('#search-result'));

    },

    // form 태그에 있는 값을 제출 했을 때 나타나는 일들
    onSubmit(input){
        console.log(tag,'onSubmit()',input);
        // search 함수에 input 인자를 넘겨줘서 실행함.
        this.search(input);
        
    },
    // onSubmit에 있는 search 함수의 기능들
    search(query){
        console.log(tag,'search()',query);
        
        // SearchMenu에 있는 리스트 함수에 query를 넘겨서 실행
        SearchMenu.list(query).then(data => {
            //  SearchMenu에 있는 data를 onSearchResult에 넘겨서 onSearchResult 실행
            this.onSearchResult(data);
            
        }) 
    },

    //reset 이벤트가 일어나면 발생하는 일 콘솔점 로그가 크롬 개발자 도구에 찍힘
    resetForm(){
        console.log(tag,"onResetForm()");
    },
    // search함수에 있는 onSearchResult가 발생하면 일어나는 일
    onSearchResult(data){
        // SearchResultVie의 render 함수에 data를 넘겨서 실행해라 
        SearchResultView.render(data);
    }
}


















