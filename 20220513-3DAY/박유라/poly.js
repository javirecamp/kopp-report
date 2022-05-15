
// 토글 버튼 객체를 가져오는 것(객체)
const togleBtn = document.querySelector(".navbar_togleBtn");
// 메뉴를 가져오는 것(객체)
const menu = document.querySelector(".navbar_menu");
// 아이콘을 가져오는 것(객체)
const join = document.querySelector(".navbar_join");

// 이벤트를 사용하려면 객체를 만들고 이벤트 리스너를 붙여야 사용이 가능함
//리스너 = 자바스크립트

togleBtn.addEventListener("click", ()=>{
    menu.classList.toggle('active');
    join.classList.toggle('active');
})
