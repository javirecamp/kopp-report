// SearchResultView 생성
import View from "./View.js";

const tag = "[SearchResultView]";

//View copy
const SearchResultView = Object.create(View);

// SerachResultView.setup 하기
SearchResultView.setup = function(element){
    this.init(element);
    this.searchRstEl = element.querySelector("#search-result");
    return this;
}

//데이터가 없을 경우와 있을 경우에 대한 처리
SearchResultView.render = function(data=[]){
    console.log(tag, 'render', data);
    this.element.innerHTML = data.length?this.getSerachResultshtml(data):"검색결과가 없습니다";
}

//검색 결과가 존재한다면 html tag가 들어가게 될 예정
SearchResultView.getSerachResultshtml = function(data){
    console.log(tag, 'getSearchResultsHtml', data);
    return data.reduce((html,item) =>{
        html += this.getSerachItemHtml(item);
        return html
    }, `<ul>`) + `</ul>`;
}

SearchResultView.getSerachItemHtml = function(item){
    return `<li>
        <img src=${item.image}>
        <p>${item.name}</p>
    </li>`;
}

export default SearchResultView;