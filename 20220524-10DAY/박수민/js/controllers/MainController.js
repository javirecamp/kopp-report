// FormView, SearchResultView, SearchMenu를 가져오기
import FormView from "../views/FormView.js";
import SearchResultView from "../views/SearchResultView.js";
import SearchMenu from "../models/SearchMenu.js";

const tag ="[MainController]";

// 외부에서 사용할 수 있도록 export default
export default{
    init(){
        console.log(tag, "init()");
        FormView.setup(document.querySelector('form'))
        .on('@submit',e => this.onSubmit(e.detail.input))
        .on('@reset', e => this.resetForm());

        SearchResultView.setup(document.querySelector('#search-result')); 
    },

    search(query){
        console.log(tag, "search()", query);
        //서치 결과를 처리할 메소드 하나 더 호출
        this.onSearchResult([]);
        SearchMenu.list(query).then(data => {
            this.onSearchResult(data);
        })
    },
    
    onSubmit(input){
        console.log(tag, 'onSubmit()', input);
        //검색하고 엔터 치고 onSubmit이 일어났을 때 검색하는 메소드가 호출
        this.search(input);
    },

    resetForm(){
        console.log(tag, "onResetForm()");
    },

    onSearchResult(data){
        SearchResultView.render(data);
    }
}