const init_card_game = function () {
  const types = ["S", "H", "C", "D"];
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
  const cards = [];

  for (let i = 0; i < types.length; i ++) {
      for (let j = 0; j < numbers.length; j ++) {
          cards.push(types[i].concat(numbers[j]));
      }
  }

  shuffle(cards);
  document.write("랜덤 카드 출력 : " + cards);
};

const shuffle = function(array) {
    array.sort(() => Math.random() - 0.5);
}
