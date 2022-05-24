import View from './View.js';

const tag = "[SearchResultView]";

// Object 형태로 View를 가지고 온다
const SearchResultView = Object.create(View);

// 검색 결과를 보여주는 요소에 담아 리턴
SearchResultView.setup = function(element){
    this.init(element);
    this.searchRstEl = element.querySelector("#search-result");
    return this;
}

// 렌더할 데이터가 없으면 검색결과가 없습니다. 출력
// length > 0 일때는 데이터가 존재하니까 getSearchResultsHtml 으로 출력처리
SearchResultView.render = function(data = []){
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
// 검색 결과가 존재하면 img 태그에 SearchMenu에 지정한 값으로 바인딩 처리
SearchResultView.getSearchItemHtml = function(item){
    return`<li>
        <img src=${item.image}>
        <p>${item.name}</p>
     </li>`;
}

// 외부에서 사용하기 위해 export 선언
export default SearchResultView;