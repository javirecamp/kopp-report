function Card() {
    // 13개의 카드 입력값과 그림배열 4개, 그리고 섞은배열을 선언
    const CardNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const CardPic = ["H", "D", "S", "C"];
    const Cardcase = [];

    // CardPic의 그림 1개당 13개씩 섞은배열에 push
    for (let s = 0; s < CardPic.length; s++) {
        for (let v = 0; v < CardNum.length; v++) {
            const value = CardNum[v];
            const suit = CardPic[s];
            Cardcase.push(suit+value);
        }
    }
    // random 함수에서 0를 반환하면 정렬을 하지않기때문에 0.5를 빼주면 양수 또는 음수여서
    // 항상 랜덤으로 섞을수있다.
    Cardcase.sort(() => Math.random() - 0.5);
    return Cardcase;
};
console.log(Card());