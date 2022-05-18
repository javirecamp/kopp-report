// 함수 호출
deckOfCards();

function deckOfCards() {
  // 모양 4가지를 담은 배열1
  const shape = ["S", "H", "D", "C"];
  // 숫자 13가지를 담은 배열2
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ];

  //   최종 카드 set을 담을 배열
  const cardCase = [];

  //   두 배열 1, 2 에 담긴 요소들을 1개씩 조합하여 총 52개 요소를 저장
  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      cardCase.push(shape[i].concat(numbers[j]));
    }
  }

  //   카드 섞기
  shuffle(cardCase);
  //   최종 출력
  console.log(cardCase);
}

// Math.random : 0 < x < 1
function shuffle(cards) {
  cards.sort(() => Math.random() - 0.5);
}
