// Views import
import View from "./View.js";

const tag = "[SearchResultView]"

// View를 생성후 복사하여 SearchResultView만든다.
const SearchResultView = Object.create(View)


// search-result id를 가진 요소를 담는다
SearchResultView.setup = function(element){
    this.init(element);
    this.searchRsEl = element.querySelector("#search-result")
    return this;
}

// 데이터가 없을 경우와 있을 경우에 대한 처리를 삼항 연산자를 통해 한다.
SearchResultView.render = function(data = []){
    console.log(tag, 'render', data);
    this.element.innerHTML = data.length? this.getSearchResultsHtml(data) : "검색결과가 없습니다.";
    
}

// 검색결과가 존재한다면, html에 나타내는 메소드
SearchResultView.getSearchResultsHtml = function(data){
    console.log(tag, 'getSearchResultsHtml', data);
    return data.reduce((html, item) =>{
        html += this.getSearchItemHtml(item);
        return html;
    }, `<ul>`)+`</ul>`;
}

// 검색 결과후 모델에 있는 데이터가 출력되게 하는 메소드
SearchResultView.getSearchItemHtml = function(item){
    return `<li>
        <img src=${item.image}>
        <p>${item.name}</p>
    </li>`;
    
}


// SearchResultView를 외부에서 사용할 수 있도록 한다.
export default SearchResultView;