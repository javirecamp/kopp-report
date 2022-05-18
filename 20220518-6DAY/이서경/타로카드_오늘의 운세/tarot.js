export function tarotCard(){
    // 타로카드 이미지명 배열에 담아 선언
    let tarotCard = ["death.jpg", "wheel.jpg", "empress.jpg", "hanged.jpg", "temper.jpg", "lover.jpg", "chariot.jpg", "hier.jpg", "sun.jpg", "moon.jpg", "world.jpg"];

    //각 타로카드의 자리 수를 랜덤하게 바꿈(shuffle)
    let tmp = 0;
    let j = 0; 
    for(let i = 0; i <tarotCard.length; i++){
        j=Math.floor((Math.random()*10)+1);
        tmp = tarotCard[i];
        tarotCard[i]=tarotCard[j];
        tarotCard[j]=tmp;
    }

    //innerHTML에 들어갈 문구 for문을 이용해 선언
    let tarotLine = [];
    for(let i = 0; i < tarotCard.length;i++){
        tarotLine[i]=`<figure> <img src = "${tarotCard[i]}"></figure>\n`
    };
return tarotLine;
};