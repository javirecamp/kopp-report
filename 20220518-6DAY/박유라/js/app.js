
// 필요한 자료 세팅
const SETTING = {
    nums : ["A", "2", "3", "4", "5","6", "7", "8", "9", "10", "J", "Q", "K"],
    shapes: ["♥", "♠", "♣", "◆"],
    maxNum:52
}

// nums와 shapes를 하나로 합쳐서 52개 경우의 수가 나오도록 함
function cardGame() {
    
    const cards=[];
    const {nums, shapes} = SETTING;
    
    for(let n = 0; n <nums.length; n++) {
        for(let s = 0; s<shapes.length; s++) {
            const num = nums[n];
            const shape = shapes[s];
            cards.push(shape + num);
        }
    }
    
    // random으로 카드를 섞어서 정렬
    function shuffle(array) {
         array.sort(() => Math.random() - 0.5); 
    }
    
    shuffle(cards);
    
    // 콘솔에 출력되도록 함
    console.log(cards);

    return cards;
}

// 함수 호출
// cardGame();

document.addEventListener('DOMContentLoaded', ()=> {
    let doc = document.querySelector("#poker");
    doc.innerHTML = cardGame();
});
