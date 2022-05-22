document.addEventListener('DOMContentLoaded', ()=>{
    alert("로또 번호 추첨!");
    function lotto() {
        let arr = []; // 로또를 만들기 위한 빈 리스트 생성
        for(let i = 0; i < 6; i++) {
            arr[i] = Math.floor(Math.random() * 45) + 1; // 6개의 숫자를 1 ~ 45의 랜덤으로 뽑는다
            for(let j = 0; j < i; j++){
                if(arr[j] == arr[i]) {
                    i--; //앞에 나온 수와 뒤에 나온 수의 중복을 제거해준다.
                }
            }
        }
        return arr.sort((a, b) => a - b); //위 조건을 만족하는 arr의 배열을 정렬한다.
    }

    let doc = document.getElementById("start"); //index.html에서 정의해준 div id="start"를 받아옴
    doc.innerHTML = lotto(); // 내부실행
})

