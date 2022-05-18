
// 52장의 카드의 순서를 랜덤으로 생성하는 함수
const makeCard = ()=>{
    let shape = ['♥︎','♠︎','♣︎','♦︎'] // 카드 모양 배열 생성
    let number = ['A',1,2,3,4,5,6,7,8,9,'K','Q','J']; // 카드 번호 배열 생성
    const card = new Set(); // 생성된 카드를 넣을 Set 생성 -- 중복을 제거 하기 위함
    while(card.size < 52){ // card의 사이즈가 52가 될 때까지 반복
        const shapIndex = parseInt(Math.random()*4)+1; // shape 배열의 인덱스 번호를 랜덤으로 생성(1~4)
        const numberIndex = parseInt(Math.random()*13)+1; // number 배열의 인덱스 번호를 랜덤으로 생성 (1~13)
        card.add(shape[shapIndex-1]+number[numberIndex-1]); // 랜덤으로 선택된 모양+숫자를 card에 삽입
    }
    return Array.from(card); 
}

const separateCard = () => { // 생성된 52장의 카드를 13장씩 4개의 라인으로 분리하기 위한 함수
    const card = makeCard();
    let sepCard = ''; // 각 라인에 담겨진 13장의 카드를 합치기 위한 변수
    const line1 = [] // 라인1에 담을 카드 배열 생성
    const line2 = [] // 라인2에 담을 카드 배열 생성
    const line3 = [] // 라인3에 담을 카드 배열 생성
    const line4 = [] // 라인4에 담을 카드 배열 생성
    for(let i=0; i < 52; i++){
        if(i < 13){ // 13장 씩 각라인에 넣음
            line1.push(card[i]);
        }else if(13<=i && i < 26){
            line2.push(card[i])
        }else if(26<=i&& i<39){
            line3.push(card[i])
        }else{
            line4.push(card[i])
        }
    }
    // sepCard에 각라인을 div태그에 넣어 합침
    sepCard = `<div class="line1">${line1}</div>`+`<div class="line2">${line2}</div>`+`<div class="line3">${line3}</div>`+`<div class="line4">${line4}</div>`;
    return sepCard;
}


document.addEventListener('DOMContentLoaded',()=>{
    let start =document.querySelector('#start');
    start.innerHTML = separateCard(); // DOM이 생성되자마자 생성된 52장의 카드를 4개의 라인으로 보여줌
  
    let shuffle = document.querySelector('#shuffle');
    
    shuffle.addEventListener("click",()=>{
       start.innerHTML = separateCard(); // 카드섞기 버튼을 누를 때 마다 52장의 카드를 순서를 바꿔가면서 4개의 라인으로 보여줌
    });
})
