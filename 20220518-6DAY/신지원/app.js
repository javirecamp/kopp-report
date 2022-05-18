
document.addEventListener('DOMContentLoaded', ()=>{
    // 배너창
    alert("포커카드입니다!");
    
    // shape와 num을 합칠 poker배열
    let poker = [];
    // 포커모양선언
    let shape = [ 'S', 'H', 'D', 'C' ];
    // 포커 카드 종류 선언
    let num = [ 'A', '2', '3', '4' , '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
    // 모양과 카드 종류 합치고 poke배열에 집어넣기
    for(let i=0; i<shape.length; i++){
        for(let j=0; j<num.length; j++){
            let pokercode = shape[i].concat(num[j]);
            poker.push(pokercode);
        }
    }

    //랜덤으로 출력할 배열 선언
    let randompoker = [];

    // 중복을 제거하고 랜덤으로 출력
    for(let k=0; k<poker.length; k++){
        let Index = Math.floor(Math.random() * poker.length);
        // 중복값이 없으면 삽입
        if(!randompoker.includes(poker[Index])){
            randompoker.push(poker[Index]);
        }
        // 중복값 있으면 다시 
        else{
            k--;
        }
    }
    
    // 값 load
    let doc = document.getElementById("start");
    doc.innerHTML = randompoker;
})



