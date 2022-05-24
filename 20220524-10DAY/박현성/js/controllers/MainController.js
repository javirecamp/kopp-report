// Controler: Model과 View 사이의 접착제 역활을 하며, 보통 이벤트를 통해 갱신된 데이터를 Model에 적용하고 그 결과를 View에 반영 시킨다. 

// model, view import
import FormView from "../views/FormView.js";
import SearchResultView from "../views/SearchResultView.js";
import SearchMenu from "../models/SearchMenu.js";

//  tag : 현재의 위치 확인 가능
const tag = "[MainController]";

// 외부에서 접근할 수 있도록 export
export default{
    // 초기 셋팅
    init(){
        // 콘솔로 확인
       console.log(tag,"init()");
        // submit과 reset 이벤트를 FormView에 셋팅
        FormView.setup(document.querySelector('form')).on('@submit',e=>this.onSubmit(e.detail.input))
        .on('@reset', e => this.resetForm());

        // SearchResultView 셋업할 때 id가 search-result 엘리먼트를 셋팅
        SearchResultView.setup(document.querySelector('#search-result'));
    },
    // 검색이 실행될 메소드이며 검색 결과를 처리할 메소드를 호출
    search(query){
        console.log(tag,'search()',query);
        SearchMenu.list(query).then(data =>{
            
            this.onSearchResult(data);
        });
       
    },

    // onSubmit이 일어났을 때 검색하는 메소드가 호출
    onSubmit(input){
        console.log(tag,'onSubmit()',input);
        this.search(input);
    },

    // reset 이벤트가 일어날 때 콘솔로 확인 가능
    resetForm(){
        console.log(tag,"onResetForm()");
    },

    // ResultView에 데이터를 넘겨준다.
    onSearchResult(data){
        SearchResultView.render(data);
    }



}