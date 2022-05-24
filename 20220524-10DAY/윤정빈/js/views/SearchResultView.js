/* SearchResultView 생성 */

// 공통 기능을 구현한 View.js import하기
import View from './View.js';

const tag = "[SearchResultView]";

// View를 copy 해옴 = SearchResultView가 View도 가지고 있음
const SearchResultView = Object.create(View);

// SearchResultView.setup을 한다.
// const setup = function(){}
// const obj.f = function(){{}
// obj.f();
// const people;
// people.setupt = function(){ this.name = "IU"}
SearchResultView.setup = function(element){
    this.init(element);
    // 해당 클래스의 searchRstEl 변수에게 search-result id값 참조/접근을 허용
    this.searchRstEl = element.querySelector("#search-result");
    return this;
}

// 데이터가 없을 경우와 있을경우에 대한 처리
SearchResultView.render = function(data = []){
    console.log(tag, 'render', data);

    // data가 비어있을 경우 "검색결과X", data값이 존재하면 결과 조회하기
    this.element.innerHTML 
      = data.length ? this.getSearchResultsHtml(data):"검색결과가 없습니다.";
}

// 검색결과가 존재한다면, html tag가 들어가게 될 예정
SearchResultView.getSearchResultsHtml = function(data){
    console.log(tag, 'getSearchResultsHtml ',data);
    
    // 맨 앞에도 return 꼭 써주기
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item);
        console.log(html);
        return html
    }, '<ul>')+'</ul>';
}

SearchResultView.getSearchItemHtml = function(item){
    // 앞에 return + `여기에 필요한 이미지, 변수값 작성`
    return `<li>
        <img src=${item.image}>
        <p>${item.name}</p>
     </li>`;
}

// 외부에서 SearchResultView 참조할 수 있도록 export default 해줌
export default SearchResultView;
