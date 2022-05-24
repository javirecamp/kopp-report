// SearchMenu, FormView, SearchResultView를 임포트한다.

import SearchMenu from "../models/SearchMenu.js";
import FormView from "../views/FormView.js";
import SearchResultView from "../views/SearchResultView.js";

// module "D:/Frontend/DAY10/lab1001/js/models/SearchMenu.js";


const tag = "[MainController]"

// 외부에서 접근할 수 있도록 export
// 그 안에 가장 기본적인 세팅을 위한 init()함수 적용
export default{
    init(){
        console.log(tag, "init()");
        FormView.setup(document.querySelector('form')).on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset', e => this.resetForm()); //submit과 reset을 위한 구문을 만들어준다.

        SearchResultView.setup(document.querySelector('#search-result')) //index.html에 있는 search-result 클래스와의 연동
    },

    search(query){
        console.log(tag, "search()", query);
        this.onSearchResult([]);
        SearchMenu.list(query).then(data => {
            this.onSearchResult(data);
        }) // query를 검색하여 데이터를 onSearchResult로 보낸다.
    },
    onSubmit(input){
        console.log(tag, 'onSubmit()', input);
        this.search(input); //위에서 정의한 onSubmit를 실행시키기 위한 구문 생성
    },

    resetForm(){
        console.log(tag, "onResetForm()") //마찬가지로 위에서 정의한 resetform을 실행시키기 위한 구문 생성
    },

    onSearchResult(data){
        SearchResultView.render(data);
    } // 데이터와 렌더링한다.
}