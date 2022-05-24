//1. View.js import
import View from './View.js';

//2. SearchResultView 태그 생성
const tag = "[SearchResultView]";

//3. View 객체 copy
const SearchResultView = Object.create(View);
//SearchResultView가 View도 가지고 있다.


//4. SearchResultView.setup .
SearchResultView.setup = function(element){
    this.init(element);
    this.SearchRstEl = element.querySelector("#search-result"); //index.html 파일에서 만든 id
}


//5. render: 데이터가 없을 경우와 있을 경우에 대한 처리
SearchResultView.render = function(data=[]){
    console.log(tag,'render',data);

    //데이타가 있을 경우에는 getSearchResultsHTML 메소드를 실행하고 없으면 "  "문장 실행
    this.element.innerHTML = data.length?this.getSearchResultsHTML(data):"검색결과가 없습니다";
}

//8. getSearchResultsHTML: render에서 넘어옴, 검색결과가 존재한다면, html tag가 들어가게 될 예정
SearchResultView.getSearchResultsHTML = function(data){
    console.log(tag,'getSearchResultsHtml ',data);
    return data.reduce((html,item)=>{
        html += this.getSearchItemHtml(item);
        return html
    },'<ul>')+'</ul>';
}

//9. getSearchItemHtml: item 목록(사진/이름명)을 보여줌
SearchResultView.getSearchItemHtml=function(item){
    return `<li>
        <img src =${item.image}>
        <p>${item.name}</p>
    </li>`;
}

//10. 외부에서도 사용할 수 있도록 export 함
export default SearchResultView;