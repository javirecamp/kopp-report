 //52장의 포커 값을 가지는 pockergroup 생성
 function pockergroup() {
    //포커에 사용되는 숫자 넣어주기
    const nums = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    //포커에 사용되는 모양 넣어주기
    const shapes = ["♥","◆","♠","♣"];
    //cards라는 빈 배열에 값 넣어주기
    const cards = [];
    //nums 어레이와 shapes 어레이를 결합하여 cards 어레이에 값 넣기
    for(let i =0; i< shapes.length; i++){
        for(let j =0; j< nums.length; j++){
            const num = nums[j];
            const shape = shapes[i];
            //숫자와 모양을 연결해서 넣어주기
            cards.push(num + shape);
        }
    }
    //랜덤으로 배열 값을 보여주기 위하여 shuffle 사용
    function shuffle(array) { 
        array.sort(() => Math.random() - 0.5); //배열의 요소 순서가 무작위로 변경되게 함
    }

    shuffle(cards);
    console.log(cards);
    return cards;
    
}
pockergroup();

document.addEventListener('DOMContentLoaded',()=>{
    let doc = document.querySelector("#poker");
    doc.innerHTML = pockergroup();
});










  
