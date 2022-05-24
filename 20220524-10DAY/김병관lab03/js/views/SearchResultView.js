// SearchResultView 를 만든다. 
import View from './View.js';

const tag = "[SearchResultView]";

// View를 copy해와야 한다.
const SearchResultView = Object.create(View);
// SearchResultView가 View도 가지고 있다.

// SearchResultView.setup을 한다.
// const setup = function(){}
// const obj.f = function(){{}
// obj.f();
// const people;
// people.setupt = function(){ this.name = "IU"}
SearchResultView.setup = function(element){
    this.init(element);
    this.searchRstEl = element.querySelector("#search-result");
    return this;
}

// 데이터가 없을 경우와 있을경우에 대한 처리
SearchResultView.render = function(data = []){
    console.log(tag, 'render', data);
    this.element.innerHTML 
      = data.length ? this.getSearchResultsHtml(data):"검색결과가 없습니다.";
}

// 검색결과가 존재한다면, html tag가 들어가게 될예정
SearchResultView.getSearchResultsHtml = function(data){
    console.log(tag, 'getSearchResultsHtml ',data);
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item);
        console.log(html);
        return html
    }, '<ul>')+'</ul>';
}

SearchResultView.getSearchItemHtml = function(item){
    return`<li>
        <img src=${item.image}>
        <p>${item.name}</p>
     </li>`;
}


export default SearchResultView;


