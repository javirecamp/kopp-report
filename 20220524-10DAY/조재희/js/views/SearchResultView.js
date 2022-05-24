//SearchResultView 를 만든다.
import View from './View.js';

const tag = "[SearchResultView]" // tag를 만들어서 위치를 앞려 준다. 




//View를 copy해 와야 한다. 

const SearchResultView = Object.create(View); // 실질적으로 상속 같은 역할을 하더라. 
// 그래서 copy해서 View에 있는 메소드도 쓰더라. 



// SearchResultView.setup을 한다. 
// const setup = function(){}
// const obj.f = function(){}
// obj.f(); 이렇게도 부를 수 있다. 
// const people;
// poeple.setup = function(){this.name = "IU"}

SearchResultView.setup = function(element){
    this.init(element);
    this.searchResultView=element.querySelector("#search-result");
    return this;
}


//데이터가 없을 경우와 있을 경우에 대한 처리 
SearchResultView.render = function(data = []){
    console.log(tag,'render',data);
    this.element.innerHTML=data.length?this.getSearchResultsHtml(data):"검색결과가 없습니다.";
}


//검색 결과가 존재한다면, html tag가 들어가게 될 예정 
SearchResultView.getSearchResultsHtml = function(data){
    console.log(tag, 'getSearchResultsHtml',data);
    return data.reduce((html,item)=>{
        html += this.getSearchItemHtml(item);
        return html
    },'<ul>')+'</ul>';
}

SearchResultView.getSearchItemHtml = function(item){
    return `<li>
        <img src=${item.image}>
        <p>${item.name}</p>
    </li>`;
}



export default SearchResultView; 
//앞에서 하던 거는 싹다 묶어서 export 했기 때문에 export를 위에다 썼음.