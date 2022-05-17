
document.addEventListener('DOMContentLoaded', ()=>{

    let doc = document.getElementById('Lotte');

    function Lotte() {
        let lotto = [];
        while(lotto.length < 6) {
          let temp = Math.floor(Math.random() * 45) + 1;
          // 특정요소를 포함하고 있는지 식별(includes)
          if(!lotto.includes(temp)) {
              //랜덤으로 뽑은 숫자를 배열에 집어넣음(push)
            lotto.push(temp);
          };
        };
        return lotto;
      };
    doc.innerHTML = Lotte();

});