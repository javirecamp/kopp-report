// SearchResultview를 만든다.
import View from "./View.js";

const tag = "[SearchResultView]";

// View를 copy
const SearchResultView = Object.create(View);


// SearchResultView.setup을한다.
// const setup  = function(){}
// const obj.f = function(){}
// obj.f();
// const people;
// people.setup = function() { this.name = "IU" }
SearchResultView.setup = function (element) {
    // SearchResultView 를 생성해주고,
    this.init(element);
    // 서치 결과를 입력할 div를 가져온다.
    this.SearchRstEl = element.querySelector("#search-result");
    // 해당 값을 가지고 활용할 수 있도록 한다.
    return this;
}

// 데이터가 없을 경우와 있을 경우에 대한 처리
SearchResultView.render = function(data = []){
    console.log(tag, "render", data);
    // 데이터가 있을 경우 해당 데이터의 검색결과를 리턴, 그렇지 않을 경우 결과가 없음을 리턴
    this.element.innerHTML = data.length ? this.getSearchResultHtml(data):"검색결과가 없습니다.";
}

SearchResultView.getSearchResultHtml = function (data) {
    console.log(tag, "getSearchResultHtml", data);

    //검색 결과를 html string으로 만들어 리턴해준다.
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item);
        return html;
    }, '<ul>') + '</ul>';
}

SearchResultView.getSearchItemHtml = function(item){
    // 한 검색 결과의 html string을 반환
    return `<li>
        <img src=${item.image}>
        <p>${item.name}</p>
    </li>`;

}

export default SearchResultView;