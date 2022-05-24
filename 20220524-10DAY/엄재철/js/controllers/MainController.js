import FormView from "../views/FormView.js";
import SearchResultView from "../views/SearchResultView.js";
import SearchMenu from "../models/SearchMenu.js";

const tag = "[MainController]";

export default{
    //초기 셋팅
    init(){
        // FormView.js, SearchResultView.js 에서 정의한 내용을 초기 셋팅
        // on을 통해 이벤트를 연결한다.
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.resetForm());

        SearchResultView.setup(document.querySelector('#search-result'))
    },

    // 검색 부분 메서드
    search(query){
        // SearchMenu.js 내 있는 list 맵핑
        SearchMenu.list(query).then(data => {
            // 서치 결과를 처리할 메소드를 하나 더 호출을 한다.
            this.onSearchResult(data);            
        });
    },

    onSubmit(input){
        // 검색 메서드 호출
        this.search(input);
    },

    // reset 이벤트가 일어날때 처리될 메소드
    resetForm(){
        console.log(tag, "onResetForm()");
    },

    // SearchResultView.js에 render 함수에서
    // 데이터를 뿌려준다.
    onSearchResult(data){
        SearchResultView.render(data);
    }

}
