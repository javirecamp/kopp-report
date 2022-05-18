function Poker() {
    let nums = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // 카드의 숫자 배열을 만들어준다.
    let shapes = ["C", "D", "H", "S"]; // 카드의 문양 배열을 만들어준다
    let arr = [];
    for(let i = 0; i < shapes.length; i++){
        for(let j = 0; j < nums.length; j++) {
            const num = nums[j];
            const shape = shapes[i];
            arr.push(shape +num);
        }
    }
    return arr;
}

function Shuffle(arr) {
   arr.sort(() => Math.random() - 0.5); 
// Math.random()이 무작위로 0 ~ 1 사이에 난수를 생성
// 이 때, Math.random() - 0.5를 하게 되면 무작위로 음수와 양수를 반환한다.
// 양수와 음수로 인한 값에 따라 sort를 하게되어 무작위로 순서가 뒤섞인다.   
}

const arr = Poker();
Shuffle(arr);
console.log(arr);