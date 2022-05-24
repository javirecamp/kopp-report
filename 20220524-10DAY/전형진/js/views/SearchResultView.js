// View를 임포트해서 view.js에 있는 기능을 사용할 수 있음
import View from "./View.js";

const tag = "[SearchResultView]"

// View에 있는 기능을 SearchResultVie에 복붙한다
const SearchResultView = Object.create(View)

// SearchResultView에서 담당할 기능들을 위해 필요한 작업들을 해준다.
SearchResultView.setup = function(element){
    // setup 함수가 메인컨트롤러에서 넘겨 받은 요소를 init 해줌
    this.init(element);
    // search-result라는 아이디를 가진 요소를 searchRsEl에 담음
    this.searchRsEl = element.querySelector("#search-result");
    return this;
}
//SearchResultView의 render라는 함수의 기능을 정의
SearchResultView.render = function(data = []){
    console.log(tag,'render',data);
    // render 라는 함수가 받은 데이터의 길이가 참이면 getSearchResultHtml(data) 함수를 실행하고 그렇지 않으면 검색결과가 없습니다.
    // 를 element(search-result)에 표시함
    this.element.innerHTML = data.length?this.getSearchResultHtml(data):"검색결과가 없습니다."
}

// render가 넘겨받은 데이터의 길이가 0보다 크면 실행되는 getSearchResultHtml 함수 기능 명세
SearchResultView.getSearchResultHtml = function(data){
    console.log(tag,'getSearchResultHtml',data);
    // 인자로 넘겨 받은 data를 html이라는 변수에 getSearchItemhtml(item) 함수에서 반환된 값을 누적해서 저장함
    return data.reduce((html,item)=>{
        html += this.getSearchItemhtml(item);
        return html;
    }, `<ul>`)+`</ul>`;
}

// 위에 있는 html 변수에 저장될 값들을 알려줌
SearchResultView.getSearchItemhtml = function(item){
    // 인자로 넘겨받은 item의 image와 name을 반환함
    return `<li> <img src=${item.image}> <p>${item.name}</p> </li>`;
}

// SearchResultVie의 기능을 외부에서 사용할 수 있게 export해줌
export default SearchResultView;