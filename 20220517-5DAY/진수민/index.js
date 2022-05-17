function generate_lotto() {
  let lotto = [];
  for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * 44) + 1;
    for (let j in lotto) {
      if (number === lotto[j]) {
        number = Math.floor(Math.random() * 44) + 1;
      }
    }
    lotto.push(number);
  }
  lotto.sort(function (a, b) {
    return a - b;
  });
  document.write("로또 번호 : " + lotto);
}
