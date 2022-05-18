function getRandomNum(maxNum) {
    // 0 ~ maxNum까지에서 random 값 반환
    return Math.floor(Math.random() * maxNum);
}


function shuffleDeck(){
    // 0~51까지 순서대로의 값을 가진 deck
    let baseDeck = [];
    for (let i = 0; i < 52; i++) {
        baseDeck.push(i);
    }

    // 랜덤 나온 index값에 해당하는 숫자를 잘라다 cardcase 배열에 인풋
    // splice(num1, num2) : num1번째 숫자부터 num2번째 숫자까지
    let cardcase = [];
    while (baseDeck.length > 0) {
        cardcase.push(baseDeck.splice(getRandomNum(baseDeck.length), 1)[0]);
    }
    
    return cardcase;
}
// console.log(shuffleDeck());


// .button이 클릭되면 insertCardcaseHTML 함수 실행
// document.querySelector(".button").onclick = 
function insertCardcaseHTML(deck){
    // 모양 이름 리스트
    let shapeList = ["spades", "hearts", "diamonds","clubs"];

    // 카드들이 들어갈 부모 div를 가져옴
    const container = document.querySelector("#deck");
    // 이전에 들어가 있는 자식 div를 삭제함
    container.innerHTML = "";

    // 셔플된 카드들을 하나씩 부모 div에 삽입한다.
    deck.forEach(card => {
        // 몫은 모양
        // 나머지는 숫자
        let shape = Math.floor(card / 13);
        let number = card % 13;

        // 새로은 자식 div를 생성
        const newElement = document.createElement("DIV");
        // 새로운 div에 card라는 class를 추가
        newElement.classList.add("card");
        // 새로운 div에 id 할당
        newElement.id = `${shapeList[shape]}${number}`;
        // 새로운 div에 style로 이미지 삽입
        let str = "background-image: url(./img/";
        if (number == 0) {
            str += `king`;
        } else if (number == 1) {
            str += `ace`;
        } else if (number == 11) {
            str += `jack`;
        } else if (number == 12) {
            str += `queen`;
        } else {
            str += `${number}`;
        }
        str += `_of_${shapeList[shape]}.png);`;
        
        newElement.style = str;

        // 새로운 div를 부모 div(#deck)에 추가
        container.appendChild(newElement);
    });

    // 애니메이션 효과를 주기위해 
    // 시간차를 두고 animation-fade class 추가
    setTimeout(function () {
        document.querySelectorAll(".card").forEach(element => {
            element.classList.add("animation-fade");
        });
    }, 30);
    
}

