// 토글 버튼 객체를 가져오는 객체
const togleBtn=document.querySelector(".navbar_togleBtn")
// 메뉴를 가져오는 객체
const menu=document.querySelector(".navbar_menu")
// 아이콘을 가져오는 객체

togleBtn.addEventListener("click", ()=>{
    menu.classList.toggle('active');
});