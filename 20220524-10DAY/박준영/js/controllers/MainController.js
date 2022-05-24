// FormView Connection
import FormView from "../views/FormView.js";
// SearchResultView Connection
import SearchResultView from "../views/SearchResultView.js";
// SearchMenu Connection
import SearchMenu from "../models/SearchMenu.js";

// 태그 설정
const tag = "[MainController]";

// 외부에서 사용하기 위하여 export
export default {
    // 초기화
    init() {
        // init()출력 -> 위치 확인
        console.log(tag, "init()");
        // FormView 설정
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.resetForm());

        // SearchResultView 셋업할때 #search-result 엘리먼트를 셋팅해준다.
        SearchResultView.setup(document.querySelector('#search-result'))
    },

    // 검색 메소드
    search(query) {
        // search()출력 -> 위치 확인
        console.log(tag, "search()", query);
        // 검색결과 재대로 처리되면 onSearchResult함수 호출
        SearchMenu.list(query).then(data => {
            this.onSearchResult(data);
        });
    },

    // 제출을 할 경우 입력된 문장을 리스트에서 검색하는 함수
    onSubmit(input) {
        console.log(tag, 'onSubmit()' + input);
        this.search(input);
    },

    // reset 이벤트가 일어날때 처리될 메소드
    resetForm() {
        console.log(tag, "onResetForm()");
    },

    // ResultView에 데이터를 랜더링을 해준다.
    onSearchResult(data) {
        SearchResultView.render(data);
    }

}





