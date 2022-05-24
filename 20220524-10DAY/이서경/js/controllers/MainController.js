import FormView from "../views/FormView.js";
import SearchResultView from "../views/SearchResultView.js";
import SearchMenu from "../models/SearchMenu.js";

const tag = "[MainController]";

// 외부에서 접근할 수 있도록 export하고 그 안에는 기본 세팅을 해준다.
export default{
    init(){
        console.log(tag, "init()");
        FormView.setup(document.querySelector('form'))
        .on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset', e => this.resetForm());

        // SearchResultView 셋업할때 #search-result 엘리먼트를 셋팅해준다.
        SearchResultView.setup(document.querySelector('#search-result'))
    },

    // 검색 실행 메소드
    search(query){
        console.log(tag, "search()", query);
        // SearchMenu 모델 사용
        SearchMenu.list(query).then(data =>{
            // 검색결과 처리 메소드 호출
            this.onSearchResult(data);
        });
    },
    onSubmit(input){
        console.log(tag, 'onSubmit()' + input);     
        // 검색을 하고 엔터를 쳤을 경우니까 onSubmit이 일어났을때 검색하는 메소드 호출
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