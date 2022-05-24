import View from "./View.js";

const tag = "[SearchResultView]";

// View를 기반으로 새로운 SearchResultView를 만든다
const SearchResultView = Object.create(View);

// SearchResultView setting
SearchResultView.setup = function(element){
    this.init(element);
    this.searchRstEl = element.querySelector("#search-result");
    return this;
}

// render란 component를 html로 바꾸어 브라우저에 나타나게 하는 것
// 데이터가 없을 경우와 있을 경우에 대한 처리
SearchResultView.render=function(data=[]){
    console.log(tag, 'render', data);
    this.element.innerHTML=data.length ? this.getSearchResultsHtml(data): "검색결과가 없습니다.";
}

// 검색결과 존재 시 html tag가 들어간다.
SearchResultView.getSearchResultsHtml=function(data){
    console.log(tag, 'getSearchResultsHtml ', data);
    return data.reduce((html, item) => {
        html+=this.getSearchItemHtml(item);
        console.log(html);
        return html
    }, '<ul>')+'</ul>';
}

SearchResultView.getSearchItemHtml=function(item){
    return`<li>
        <img src=${item.image}>
        <p>${item.name}</p>
    </li>`;
}

export default SearchResultView;