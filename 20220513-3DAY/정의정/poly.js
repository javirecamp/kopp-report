const togle = document.querySelector(".sangdan_togle");
const menu = document.querySelector(".sangdan_menu");
const button = document.querySelector(".button");
// 개체들을 불러옴

//click을 했을 때 menu list를 동적으로 움직이게 설정해줌
togle.addEventListener("click", ()=>{
    menu.classList.toggle('active');
    // button.buttonList.toggle('active');
})
