// 토글 버튼을 가져오는 객체
const toggleBtn = document.querySelector(".navbar_toggle-btn");
// 메뉴를 가져오는 객체
const menu = document.querySelector(".navbar_menu");
// 개인목록을 가져오는 객체
const private = document.querySelector(".navbar_private");

// 이벤트를 사용하려면 객체를 만들고 객체에 이벤트 리스너를 붙여야한다.
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  private.classList.toggle("active");
});
