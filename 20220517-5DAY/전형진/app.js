
const getLottoNums = () => {
    let lottoNums = []; // 로또을 담을 배열 생성
    while(lottoNums.length < 6){ // 배열에 6개의 숫자가 찰 때까지 반복
        let num = parseInt(Math.random() * 45) +1; // 1~45 숫자 중 랜덤으로 한 숫자 생성
        if(lottoNums.indexOf(num) == -1){ // 중복확인 lottoNums 배열안에 중복된 숫자가 없는 경우 -1 을 반환함
            lottoNums.push(num)
        }
    }
    lottoNums.sort(function(a,b){ // 추출된 로또 번호를 오름차순으로 정렬
        return a-b // a-b의 값이 음수면 a가 앞으로 b가 뒤로, 양수면 b가 앞으로 a가 뒤로 이동
    }
        );
    return lottoNums // 6개의 숫자를 모두 담은 배열을 리턴
}

document.addEventListener('DOMContentLoaded',()=>{
    let doc = document.getElementById("start");
    doc.innerHTML = getLottoNums(); // 리턴 받은 값을 html에 넣어줌
   });