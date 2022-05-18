document.addEventListener("DOMContentLoaded", () => {
  let doc = document.getElementById("start");

  let lotto = [];
  let i;

  for (i = 0; i < 6; i++) {
    let num = parseInt(Math.floor(Math.random() * 45)) + 1;
    if (lotto.indexOf(num) < 0) {
      lotto[i] = num + " ";
    }
  }

  doc.innerHTML = `당첨 번호 : ${lotto}`;
});
