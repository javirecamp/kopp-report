document.addEventListener('DOMContentLoaded', () => {
    alert('로또 번호 추첨 !');
    let doc = document.getElementById("lotto"); //lotto라는 얘를 가져옴
    function lotto2(){
    let lotto_list = []; //배열 생성 
    for (let i = 0; i < 6; i++) { //6개 공간 생성
        let number = Math.floor(Math.random() * 45) + 1; //랜덤 함수 사용 
        if (!lotto_list.includes(number)) {
            lotto_list.push(number);
        } else {
            i--; //중복된 값이 있으면 제거한다
        }

    }
    return lotto_list;
}
    doc.innerHTML = lotto2(); //함수 호출 
});
