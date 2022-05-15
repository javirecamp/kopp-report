// 자바 스크립트 작성
//토글 버튼을 가져오는 객체
const togleBtn = document.querySelector(".navbar_togleBtn");
//메뉴를 가져오는 객체
const menu = document.querySelector(".navbar_menu");
//아이콘을 가져오는 객체
const icons = document.querySelector(".navbar_icons");

//이벤트를 사용하려면 객체를 만들고 이벤트 리스너를 붙어야 사용 가능
togleBtn.addEventListener("click", ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');

});
