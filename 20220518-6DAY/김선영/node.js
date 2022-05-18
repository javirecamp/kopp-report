
    

function playingcard() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",]; //13개 카드 문자 나오기 
    const shapes = ["Hearts", "Diamonds", "Spades", "Clubs"]; //4개 카드 모양 나오기
    const cards = []; //카드 조합 공간 생성 
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < shapes.length; j++) {
            const value = values[i];
            const shape = shapes[j];
            cards.push(value + shape);
        }
    }
    return cards;
}
const cards = playingcard(); 


//shuffle 랜덤 함수 사용 
function shuffle(cards) {
    cards.sort(() => Math.random() - 0.5);
}
// Math.random() 이 0에서 1 사이의 값임.
//따라서 0.5를 빼면 양수나 음수가 나옴.
// const cards2=playingcard();

shuffle(cards);
console.log(cards);
// document.querySelector(".card").innerHTML = card;
document.querySelector(".card").innerHTML = cards;


