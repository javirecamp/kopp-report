// SearchResultView 를 만든다.
import View from "./View.js";

const tag = "{SearchResultView}";

// View를 copy해와야 한다.
const SearchResultView = Object.create(View);
// SearchResultView가 View도 가지고 있고,

// SearchResultView.setup을 한다.
SearchResultView.setup = function(element){
    this.init(element);
    this.searchRstEl = element.querySelector("#search-result");
    return this;
}

// 데이터가 없을 경우와 있을 경우에 대한 처리
SearchResultView.render = function(data = []){
    console.log(tag, 'render', data);
    // 결과창을 나타낼 div 태그에 innerHTML로 결과를 입력한다.
    this.element.innerHTML = data.length? this.getSearchResultsHtml(data):"검색결과가 없습니다.";
}

// 검색결과가 존재한다면, html tag가 들어가게 될 예정
SearchResultView.getSearchResultsHtml = function (data) {
    console.log(tag, 'getSearchResultHtml', data);
    // reduce 함수는 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환 
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item);
        // html에 결과를 더해줌
        return html;
    }, `<ul>`)+`</ul>`;
}

// 검색한 결과를 화면에 출력하는 함수
SearchResultView.getSearchItemHtml = function(item){
    return `<li>
        <img src=${item.image}>
        <p>${item.name}</p>
    </li>`;
}

export default SearchResultView;