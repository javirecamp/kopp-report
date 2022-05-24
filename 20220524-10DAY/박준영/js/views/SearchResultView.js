// View Connection
import View from './View.js';

// SearchResultView 태그 설정
const tag = "[SearchResultView]";

// SearchResultView에 View 객체 생성
const SearchResultView = Object.create(View);

// View를 SearchResultView로 설정
SearchResultView.setup = function (element) {
    this.init(element);
    this.searchRstEl = element.querySelector("#search-result");
    return this;
}

// 입력 데이터가 없는 경우 처리하는 과정
SearchResultView.render = function (data = []) {
    console.log(tag, 'render', data);
    this.element.innerHTML
        = data.length ? this.getSearchResultsHtml(data) : "검색결과가 없습니다.";
}

// 입력 데이터가 있는 경우 html주소에 입력값 
SearchResultView.getSearchResultsHtml = function (data) {
    console.log(tag, 'getSearchResultsHtml ', data);
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item);
        console.log(html);
        return html
    }, '<ul>') + '</ul>';
}

SearchResultView.getSearchItemHtml = function (item) {
    return `<li>
        <img src=${item.image}>
        <p>${item.name}</p>
     </li>`;
}


export default SearchResultView;


