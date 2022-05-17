document.addEventListener('DOMContentLoaded', ()=>{
    alert('로또 번호를 확인합니다.');

    let doc = document.getElementById("lotto");
    doc.innerHTML = "이번주 로또 번호는!?!";

    // 로또 번호를 하나씩 담을 리스트 생성
    let lottonum = [];
    // 6개의 숫자를 받기 위해 for문으로 6번 반복
    for(let i = 0; i < 6; i++){
        // 랜덤한 숫자(Math.random)를 받고 그 숫자를 정수로 받기(parseInt)
        let num = parseInt(Math.random() * 44) + 1;
        // 중복제거
        // 랜덤한 숫자가 리스트에 이미 들어가 있으면(includes) 횟수를 줄이고 넘어간다.
        if(lottonum.includes(num)){
            i--;
        }else{
            lottonum.push(num);     // 중복되지 않는 값이 나오면 리스트에 추가(push)
        }
    }
    
    // id가 lottonum인 곳에 로또 번호 리스트를 입력한다.
    let lotto = document.getElementById("lottonum");
    lotto.innerHTML = lottonum;
})
