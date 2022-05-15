// 토글버튼 객체 가져오기
const togleBtn = document.querySelector(".navbar_togleBtn");
// 메뉴 가져오기(객체)
const menu = document.querySelector(".navbar_menu");
// 아이콘 가져오기(객체)
const icons = document.querySelector(".navbar_icons");

// 이벤트를 사용하기 위해서는 객체를 생성한 후에 이벤트 리스너를 붙어야 사용이 가능하다
togleBtn.addEventListener("click", ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});