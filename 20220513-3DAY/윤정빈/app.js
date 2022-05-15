// toggleBtn 객체를 가져온다
const toggleBtn = document.querySelector(".navbar_toggleBtn");
// menu를 가져오는 객체
const menu = document.querySelector(".navbar_menu");
// icon을 가져오는 객체
const icons = document.querySelector(".navbar_icons");

// 이벤트를 사용하기 위한 객체를 만들고 이벤트 리스너 실행
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
