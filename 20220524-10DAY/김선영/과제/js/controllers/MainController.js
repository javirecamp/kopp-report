
//Controllers : 사용자의 입력 처리와 흐름 제어 담당. 화면과 Model과 View를 연결시켜주는 역할

import FormView from "../views/FormView.js";  //데이터를 가져옴. 끝에 js를 잘 써야 함.  
import SearchResultView from "../views/SearchResultView.js";  //데이터를 가져옴. 끝에 js를 잘 써야 함. 
import SearchMenu from "../models/SearchMenu.js"; //데이터를 가져옴. 끝에 js를 잘 써야 함. 

const tag = "[MainController]" //개발할때 디버깅 용으로 사용하는 태그




//가져온 데이터를 써먹을 때 
export default{
    init(){  //init을 쓰는 이유: 1) 가독성 측면 2) 전역객체 보호를 위해 init()를 쓴다. (가장 기본적인 셋팅)
        console.log(tag,"init()");
        FormView.setup(document.querySelector('form'))
        .on('@submit', e=> this.onSubmit(e.detail.input)) //@submit형태는 외워야 함. this에 on submit이라는 이벤트를 전달한다. 이벤트 안에 detail안에 input이라는 값을 넣음. 
        .on('@reset', e => this.resetForm()); //@reset' 형태는 외워야 함. 

        //searchResultview 셋업할 때 #search-result 엘리먼트를 셋팅해준다.
        SearchResultView.setup(document.querySelector("#search-result")) //index.html안에 입력한 #search-result랑 연관되어 있음. index.html에서 안써주면 실행이 안됨!!
    },

    //검색이 실행될 메소드를 구현한다.
    search(query){ //searchmenu라는 메뉴를 검색할 때. SearchMainMenu안에서 적은 list(query)를 가져와서 검색함. 
        console.log(tag, "search()", query);

        //서치 결과를 처리할 메소드를 하나 더 호출을 한다.
        //SearchMenu 모델을 매핑시킨다.
        SearchMenu.list(query).then(data => { //list라는 api를 집어넣으면 쿼리가 들어감. (list안에 쿼리가 들어가있음)

            this.onSearchResult(data); //위의 defult객체 안에 property
            // this를 쓰는 이유: 객체 안에 프로퍼티나 메소드를 가리키는 것이 this인데 안에 선언한 것들을 접근하기 위해 this를 씀. 
            // then을 쓰는 이유: search라는 쿼리가 들어오면 프로퍼티가 돼서 then을 쓸 수 있다.

        });
    },

    onSubmit(input){ //input이라는 넘어온 데이터는 여기서 출력을 한다. 
        console.log(tag, 'onSubmit()' + input); //input은 콘솔창에 나와야 함.
        //검색을 하고 엔터를 쳤을 경우니까 onSubmit이 일어났을 때 검색하는 메소드가 호출되면 된다.
        this.search(input);
    },
    
    //검색창에다가 입력을 받은 후 취소할 때(x 버튼을 누를 때 사용하는 메소드) 
    resetForm(){
        console.log(tag, "onResetForm()");

    },

    //ResultView에 데이터를 랜더링을 해준다.
    onSearchResult(data){
        SearchResultView.render(data); //맨 위에서 import를 한거라서 this가 없음.
    }
}
