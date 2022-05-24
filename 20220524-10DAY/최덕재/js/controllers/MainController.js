// FormView를 가져와서 setup메소드로 셋팅을 한다.
import FormView from "../views/FormView.js";

import SearchResultView from "../views/SearchResultView.js";

import SearchMenu from "../models/SearchMenu.js";

// console.log로 볼 때, 출처를 밝히기 위해 이름을 지어준다.
const tag= "[MainController]";

// 외부에서 접근할 수 있도록 export
// 그안에 가장 기본적인 셋팅을 위한 init()함수 적용
export default{
    // 초기화를 시켜주기 위해 init 사용
    init(){
        console.log(tag, "init()");
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.resetForm());

        // SearchResultView 셋업할때 #search-result 엘리먼트를 셋팅해준다.
        SearchResultView.setup(document.querySelector("#search-result"));
    },

    //  submit했을 때 input내용을 search로 보낸다?
    onSubmit(input){
        console.log(tag, 'onSubmit()', input);
        // 검색을 하고 엔터를 쳤을 경우니까 onSubmit이 일어났을 때
        // 검색하는 메소드가 호출하면 된다.
        this.search(input);
    },

    // 검색이 실행 될 메소드를 구현한다.
    search(query){
        console.log(tag, "search()", query);
        // 서치 결과를 처리할 메소드를 하나 더 호출한다.
        this.onSearchResult([]);

        // SearchMenu 모델을 매핑시킨다.
        SearchMenu.list(query).then(data => {
            this.onSearchResult(data);
        });
    },

    // ResultView에 데이터를 렌더링 해준다.
    onSearchResult(data){
        SearchResultView.render(data);
    },

    // reset 이벤트가 일어날 때 처리될 메소드
    resetForm(){
        console.log(tag, "onResetForm()");
    }
}