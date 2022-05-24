// 아래에 3가지 파일을 import 해옴 -> export default (setup 함수로 기본 세팅)
// 2Views : FormView, SearchResultView
// 1Model : SearchMenu 
import FormView from "../views/FormView.js";
import SearchResultView from "../views/SearchResultView.js";
import SearchMenu from "../models/SearchMenu.js";

// log 기록용 tag 설정
const tag = "[MainController]";

// 외부에서 접근할 수 있도록 export 
// 그안에 가장 기본적인 셋팅을 위한 init()함수 적용
// {} []
export default{
    init(){
        console.log(tag, "init()");
        FormView.setup(document.querySelector('form'))
            .on('@submit', e=> this.onSubmit(e.detail.input))
            .on('@reset', e  => this.resetForm());

        // SearchResultView 셋업할때 #search-result 엘리먼트를 셋팅해준다.
        SearchResultView.setup(document.querySelector('#search-result'))
    },

    // 검색이 실행될 메소드
    search(query){
        console.log(tag, "search()", query);
        // SearchMenu 모델을 매핑시킴
        SearchMenu.list(query).then(data => {
            // 서치 결과를 처리할 메소드를 1개 더 호출
            this.onSearchResult(data);            
        });
    },

    onSubmit(input){
        console.log(tag, 'onSubmit()' + input);   
        // onSubmit() : 검색하는 메소드가 호출되면 된다. (검색 실행)
        this.search(input);
    },

    // reset 이벤트가 일어날때 처리될 메소드
    resetForm(){
        console.log(tag, "onResetForm()");
    },

    // ResultView에 데이터를 랜더링을 해준다.
    onSearchResult(data){
        SearchResultView.render(data);
    }

}