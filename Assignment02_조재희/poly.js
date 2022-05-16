// 토글 버튼 객체를 가져오는 녀석
const togleBtn=document.querySelector(".navibar_togleBtn");
// 메뉴를 가져오는 녀석(객체)
const menu=document.querySelector(".navibar_menu");
// 아이콘을 가져오는 녀석(객체)
const icons=document.querySelector(".navibar_icons");

// 이벤트를 사용하려면 객체를 만들고 이벤트 리스너를 붙여야 사용의 가능하다.

togleBtn.addEventListener("click",()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});