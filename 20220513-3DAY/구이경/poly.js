//토글 버튼 및 메뉴 객체 생성
const toglebtn = document.querySelector(".navbar_toglebtn");
const menu = document.querySelector(".navbar_menu");

// 이벤트 리스너 생성
toglebtn.addEventListener("click",()=>{
    menu.classList.toggle('active');

});
