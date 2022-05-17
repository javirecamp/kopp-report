
document.addEventListener('DOMContentLoaded', ()=>{
    // 배너창
    alert("로또를 시작합니다!");
    
    //로또배열
    let lotto = [];
    //6개를 뽑기 위한 길이 지정
    let length = 6;
    //반복문
    for(let i=0;i<length;i++){
        //Math.random범위가 0~1이다.
        //정수가 나오도록 floor사용
        let num = Math.floor(Math.random() * 44) + 1;
        for(let j in lotto){
            if(num == lotto[j]){
                num = Math.floor(Math.random() * 44) + 1;
        }
    }
        // 최종으로 집어넣기
        lotto.push(num);
    }

    // 값 load
    let doc = document.getElementById("start");
    doc.innerHTML = lotto;
})