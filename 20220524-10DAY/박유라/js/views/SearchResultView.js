// SearchResultView를 만든다.
import View from './View.js'

const tag = "[SearchResultView]";

// View를 copy 해와야 한다.
const SearchResultView = Object.create(View);
// SearchResultView가 view도 가지고 있다.

// SearchResultView.setup을 한다.
// const setup = fuction(){}
// const obj.f = fuction(){}
// obj.f();
// const people;
// people.setup = fuction(){this.name ="IU"}
SearchResultView.setup = function(element) {
    this.init(element);
    this.searchRstEl = element.querySelector("#search-result");
    return this;
}

// 데이터가 없을 경우와 있을 경우에 대한 처리
SearchResultView.render = function(data = []) {
    // 결과창을 나타 낼 div태그에 innerHTML로써 결과를 입력해낸다.
    console.log(tag, 'render', data);
    this.element.innerHTML = data.length?this.getSearchResultHtml(data):"검색 결과가 없습니다."
}

// 검색결과가 존재한다면, html tag가 들어가게 될 예정
SearchResultView.getSearchResultHtml = function(data){
    console.log(tag, 'getSearchResultHtml', data);
    // HTML코드를 출력하기 위해서 data.reduce를 사용
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item);
        return html
    }, `<ul>`) + `</ul>`;
}

// 얻은 데이터를 반환하여 출력
SearchResultView.getSearchItemHtml = function(item) {
    return `<li>
        <img src=${item.image}>
        <p>${item.name} </p>
    </li>`
}

// 외부에서 사용할 수 있도록 export default 처리
export default SearchResultView;