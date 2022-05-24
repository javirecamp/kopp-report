// FormView를 가져와서 setup메소드로 셋팅을 한다.
// 즉, FormView.js 파일에 존재하는 view.js 파일을 객체로 정의한 FormView객체를 이용하기 위해 FormView.js파일을 import한다. 이때, FormView 객체를 통해 View.js파일에 존재하는 모든 것을 불러올 수 있다.
import FormView from "../views/FormView.js";
import SearchResultView from "../views/SearchResultView.js";
// searchMenu을 가져온다.
import SearchMenu from "../models/SearchMenu.js";

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
        // 리스너를 붙여주는 on함수는 View.js에 정의됐지만, View.js의 모든 것은 FormView 객체에 정의 됐으므로, FormView객체에 .on 메소드를 지정하여 리스너를 할당해줄 수 있다.

        // SearchResultView 셋업할때 #search-result 엘리먼트를 셋팅해준다.
        SearchResultView.setup(document.querySelector('#search-result'))
        // View.js 파일의 모든것을 저장하고 있는 객체 SearchResultView는 setup라는 메소드를 갖고 있다.
    },

    // 검색이 실행될 메소드를 구현한다.
    search(query){
        console.log(tag, "search()", query);
        // SearchMenu 모델을 매핑시킨다.
        SearchMenu.list(query).then(data => {
            // 서치 결과를 처리할 메소드를 하나 더 호출을 한다.
            this.onSearchResult(data);            
        });
    },

    onSubmit(input){
        console.log(tag, 'onSubmit()' + input);     
        // 검색을 하고 엔터를 쳤을 경우니까 onSubmit이 일어났을때
        // 검색하는 메소드가 호출되면 된다.
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





