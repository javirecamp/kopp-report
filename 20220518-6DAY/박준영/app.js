document.addEventListener('DOMContentLoaded', () => {
    alert("포커는 친구들하고만!!");
});

// 포커카드 객체
const pokerCard = {
    // 카드모양
    shapeOfPokercard: ["Spade", "Clover", "Heart", "Diamond"],
    // 카드숫자
    numberOfPokercard: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K']
};

// 포커카드 조합하는 함수
function combinePokercard() {
    // 조합 결과 카드배열
    let resultCardArr = [];
    // 카드모양을 뽑을 인덱스 번호
    let shapeOfIndexNumber;
    // 카드숫자를 뽑을 인덱스 번호
    let numberOfIndexNumber;
    // 뽑은 모양과 숫자를 조합해 만든 카드
    let generatedCard;
    
    // 52가지 조합을 뽑을 때까지 반복
    while (resultCardArr.length != 52) {
        // 난수 생성
        shapeOfIndexNumber = Math.floor(Math.random() * pokerCard.shapeOfPokercard.length);
        numberOfIndexNumber = Math.floor(Math.random() * pokerCard.numberOfPokercard.length);
        // 생성된 난수에 해당하는 인덱스 번호의 값을 조합하여 카드생성
        generatedCard = pokerCard.shapeOfPokercard[shapeOfIndexNumber] + pokerCard.numberOfPokercard[numberOfIndexNumber];

        // 카드가 배열에 존재하지 않는다면 push를 통해 추가
        if (!resultCardArr.includes(generatedCard)) {
            resultCardArr.push(generatedCard);
        }
    }
    // 조합 결과 카드배열 반환
    return resultCardArr;
};
// 함수호출
const pokerNumber = document.querySelector("#pokerNumber");
pokerNumber.innerHTML = combinePokercard();
