function cardBuilder() {
  const values = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const shapes = ['Spade', 'Heart', 'Diamond', 'Clover'];

  const cards = [];

  for (let s = 0; s < shapes.length; s++) {
    for (let v = 0; v < values.length; v++) {
      let value = values[v];
      let shape = shapes[s];

      cards.push(value + '+' + shape);
    }
  }

  function shake(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  shake(cards);

  return cards;
}

document.addEventListener('DOMContentLoaded', () => {
  let doc = document.querySelector('#poker');
  doc.innerHTML = cardBuilder();
});
