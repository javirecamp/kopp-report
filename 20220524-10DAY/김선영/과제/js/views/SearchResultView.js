//SearchResultView를 만든다.
import View from './View.js';

const tag = "[SearchResultView]"; //어느 위치에 있는 지 확인

//View를 copy해와야 한다.
const SearchResultView = Object.create(View);
//자바스크립트는 완벽한 객체지향처럼 변수를 넣는게 아니라, 필요할 때 
//element를 넣는 케이스가 많다. 
//SearchResultView가 View도 가지고 있다.

//SearchResultView.setup을 한다.
//const setup = function(){}
//const obj.f = function(){}
//obj.f(); 
//const people;
//people.setup = function(){this.name = "IU"}
SearchResultView.setup = function(element){
    this.init(element);
    this.searchRstEl = element.querySelector("#search-result");
    //여기에 있는 this는 SearchResultView를 말함. 상속은 아님. 
    return this;
}

//데이터가 없을 경우와 있을 경우에 대한 처리
SearchResultView.render = function(data = []) {
    console.log(tag, 'render', data);
    this.element.innerHTML
     = data.length? this.getSearchResultsHtml(data): //검색 결과가 존재하면  
    "검색결과가 없습니다.";

}

//검색결과가 존재한다면, html tag가 들어감. 위에 getSearchResultsHtml(data)랑 한쌍임.
SearchResultView.getSearchResultsHtml =function(data){
    console.log(tag, 'getSearchResultHtml ',data);
    return data.reduce((html, item)=> {
        html +=this.getSearchitemHtml(item);  //밑에 getSearchitemHtml이랑 한쌍임. 
        return html
    }, `<ul>`) + `</ul>`;//있으면 리턴을 해줌. 
}

SearchResultView.getSearchitemHtml=function(item){ //item을 추가하기 위한 메소드를 만듦. 지금 있는 item에 image라는 속성과 name이라는 속성을 찾아 가져온 후, 화면에다가 이미지 url과 p 태그의 텍스트를 화면에다가 뿌려줌.
    //return하고 밑으로 내리면 한 문장이 끝나게 됌. 그래서 템플릿 리터널을 넣어서 동적으로 데이터를 처리하게 됌. ""로 하게 되면 + 입력하고 번거로우니까 데이터를 붙여서 손쉽게 처리하기 위해 템플릿 리터널을 쓴 것.
     return `<li>
    <img src= ${item.image}>
    <p>${item.name}</p> 
    </li>`;
}

export default SearchResultView;
