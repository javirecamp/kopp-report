document.addEventListener('DOMContentLoaded', ()=>{
    
    let doc = document.getElementById("poker");
    doc.innerHTML = "두둥!!";

    // 4가지 모양만 있는 리스트
    let shape = ['S','H','D','C'];
    // 13가지 숫자만 있는 리스트
    let num = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
    // 모양과 숫자를 조합한 것들을 모아 두기 위해 빈 리스트 생성
    let card = [];
    // 랜덤한 순서로 있을 결과를 담을 빈 리스트
    let result1 = [];
    let result2 = [];
    let result3 = [];
    let result4 = [];

    // 모양과 숫자들을 조합
    for(let i = 0; i < shape.length; i++){
        for(let j = 0; j < num.length; j++){
            card.push(shape[i] + num[j]);
        }
    }
    
    // 랜덤한 숫자를 집어 넣을 빈 리스트 생성
    const number = [];

    // 0~51까지의 숫자를 중복없이 랜덤하게 리스트에 push
    for(let i = 0; i < 52; i++){
        let rannum = parseInt(Math.random() * 52, 10);
        if(number.includes(rannum)){
            i--;
        }else{
            number.push(rannum);
        }
    }

    // 빈 결과 리스트에 조합한 결과를 랜덤하게 넣어 준다.
    for(let i = 0; i < number.length; i++){
        if(i<13){
            result1.push(card[number[i]]);
        }else if(i<26){
            result2.push(card[number[i]]);
        }else if(i<39){
            result3.push(card[number[i]]);
        }else{
            result4.push(card[number[i]]);
        }
    }
    
    document.getElementById("card1").innerHTML = result1;
    document.getElementById("card2").innerHTML = result2;
    document.getElementById("card3").innerHTML = result3;
    document.getElementById("card4").innerHTML = result4;
})