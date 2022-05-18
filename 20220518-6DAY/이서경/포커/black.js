// 함수 export
export function cardShuffle(){

    // 하트(H), 클로버(C), 다이아몬드(D), 스페이드(S) 
    let shape = ["H", "C", "D", "S"];
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"];
    let card = [];
    
    // 위에 선언된 배열을 조합하여 52장의 카드 생성
    for(let i = 0; i < shape.length; i++){
        for(let j = 0; j < number.length; j++){
            card.push(shape[i]+number[j]);    
        }
    };
    
    //각 카드의 자리 수를 랜덤하게 바꿈(shuffle)
    let tmp = 0;
    let j = 0; 
    for(let i = 0; i <card.length; i++){
        j=Math.floor((Math.random()*51))+1;
        tmp = card[i];
        card[i]=card[j];
        card[j]=tmp;
    }
    
    return card;
};

// console.log(cardShuffle());


