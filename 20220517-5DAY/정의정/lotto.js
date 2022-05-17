document.addEventListener('DOMContentLoaded', ()=>{
    alert('오늘의 로또 번호는?');
   
    let doc=document.getElementById("start");

    let lotto = []; //로또배열생성


    for(let i=0; i<6; i++) {
        //로또 배열 길이는 6

        let num = Math.floor(Math.random()*44)+1;
        // Math.floor() : 소수점 이하를 버림 (정수만들기)
        // Math.random()*44만 하면 0~44 사이의 랜덤숫자이므로 +1
        
        //중복제거 if문
        for(let j in lotto) {
            if(num==lotto[j]){
                num = Math.floor(Math.random()*44)+1;
            }
        }

        lotto.push(num);
    }

    //로또번호를 화면에 뿌려주기
    doc.innerHTML = lotto;
});