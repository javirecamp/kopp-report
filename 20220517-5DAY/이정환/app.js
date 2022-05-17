document.addEventListener('DOMContentLoaded', () => {
  let doc = document.getElementById('start');

  let lotto = [];
  while (lotto.length < 6) {
    let number = parseInt(Math.random() * 45 + 1);
    if (lotto.indexOf(number) == -1) {
      lotto.push(number);
    }
  }

  lotto.sort(function (a, b) {
    return a - b;
  });

  doc.innerHTML = `이번주 로또는 ${lotto} (으)로 사세요!`;
});
