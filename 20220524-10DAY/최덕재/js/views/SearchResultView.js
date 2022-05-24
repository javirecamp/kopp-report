import View from "./View.js";

const tag = "[SearchResultView]";

// View를 copy해온다
const SearchResultView = Object.create(View);

// SearchResultView.setup을 한다.
SearchResultView.setup = function(element){
    this.init(element);
    this.searchRstEl = element.querySelector("#search-result");
    return this;
}

// 데이터가 없을 경우와 있을 경우에 대한 처리
SearchResultView.render = function(data = []){
    console.log(tag, 'render', data);
    this.element.innerHTML = data.length ? this.getSearchResultsHtml(data) : "검색결과가 없습니다.";
}

// 검색결과가 존재한다면, html tag가 들어가게 될 예정
SearchResultView.getSearchResultsHtml = function(data){
    console.log(tag, 'getSearchResultsHtml ', data);
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item);
        return html;
    }, `<ul>`) + `</ul>`;
}

SearchResultView.getSearchItemHtml = function(item){
    return `<figure  style="display: inline-block">
        <img src=${item.image}>
        <figcaption>${item.name}</figcaption>
    </figure>`;
}


// 외부에서 사용할 수 있도록 export default 처리
export default SearchResultView;