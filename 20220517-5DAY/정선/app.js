// document 로드시 이벤트 실행 함수
document.addEventListener("DOMContentLoaded", () => {
    // 로또 번호가 작성될 위치
    let lotto = document.querySelector("#lotto");
    // 로또 번호를 저장할 배열 선언
    let list = new Array(6);

    // 배열에 로또 번호 저장
    for(let i=0; i<list.length; i++){
        let num = Math.floor((Math.random()*45) + 1);
        if(!list.includes(num)){
            list[i] = num;
        }  else {
            i--;
        }
    }
    
    // 저장된 로또 번호 화면에 뿌려주기
    lotto.innerHTML = list;
})