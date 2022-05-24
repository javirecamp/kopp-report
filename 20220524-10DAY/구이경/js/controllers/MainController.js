//FormView를 가져와서 setup 메소드로 셋팅을 한다.
import FormView from "../views/FormView.js";
import SearchResultView from "../views/SearchResultView.js";

//searchMenu을 가져온다.
import SearchMenu from "../models/SearchMenu.js";



const tag = "[MainController]";  //콘솔 창에서 현재 js 파일의 위치를 파악할 수 있는 용도이다.



// 외부에서 접근할 수 있도록 export
export default {  //default 객체 생성 및 export
    
    //1. init: 가장 기본적인 셋팅을 위한 init() 함수 적용
    init(){ 
        //index.html이 app.js를 부르고 app.js가 controllers/MainController.js를 부른다.
        // 다 로드 된 후에 불리도록
        console.log(tag,"init()");   //html 파일 실행하면 콘솔창에 제일 먼저 뜬다.
        FormView.setup(document.querySelector('form'))
              .on('@submit',e=>this.onSubmit(e.detail.input))
              .on('@reset',e => this.resetForm());
        // searchresultview를 셋업할 때 #search-result 엘리먼트를 셋팅해준다.
        SearchResultView.setup(document.querySelector('#search-result'))
    },
    

    //2. onSubmit: 검색을 하고 엔터를 쳤을 경우의 메소드
    onSubmit(input){
        console.log(tag,'onSubmit()',input);
        // 검색하는 메소드가 호출되면 된다.
        //매개변수로 들어온 input 값을 가지고 현 객채의 search 메소드로 이동
        this.search(input);

    },
    

    //3. search: 검색이 실행될 메소드
    search(query){
        console.log(tag,"search()",query);
        //SearchMenu 모델을 매핑시킨다.
        SearchMenu.list(query).then(data =>{
            //서치 결과를 처리할 메소드를 하나 더 호출을 한다
            this.onSearchResult(data);
            
        });
    },


    //4. resetForm: reset 이벤트가 일어날 때 처리될 메소드
    resetForm(){
        console.log(tag, "onResetForm()");

    },

    //5. onSearchResult: ResultView에 데이터를 랜더링 해주는 메소드
    onSearchResult(data){
        SearchResultView.render(data);

    }
}





