//토글 버튼 객체를 가져오는 객체
const toggleBtn = document.querySelector(".navbar_toggleBtn");
//메뉴를 가져오는 객체
const menu = document.querySelector(".navbar_menu");
//아이콘을 가져오는 객체
const icons = document.querySelector(".navbar_icons");

//이벤트를 사용하려면 객체를 만들고 이벤트 리스너를 붙여야 사용이 가능하다.

toggleBtn.addEventListener("click", ()=>{
menu.classList.toggle('active');
icons.classList.toggle('active');

})
// 뒤로가기 버튼 활성화
back.addEventListener(() => {
    window.history.back();
})

//로그인 버튼 누르면 새창 열기
login.addEventListener(() => {
    location.href='./index.html';
})