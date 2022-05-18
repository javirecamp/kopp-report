function showCard(){
//  배열 생성
array = ["A","J","K","Q"];

// 2~13 배열안에 추가
for (let index = 2; index <= 10; index++) {
    array.push(index);
}

// 카드 모양 배열 생성 
shape = ["♠","♡","♢","♣"];

// 모양배열의 원소와 숫자배열의 원소가 합쳐져 카드가 만들어질 빈 배열 선언
card=[];

// 이중 for문을 사용해서 카드 원소 생성
for(let i=0; i<array.length; i++){
    for(let j=0; j<shape.length; j++){
        let str1=array[i];
        let str2=shape[j];
        // 빈 카드 배열에 모양 + 숫자를 한 문자열로 만들어 푸시
        card.push(str2+str1);
    }
}

// 무작위로 배열을 섞어주는 함수
function shuffle(card) {
    /**
     * array.sort(a, b) : a < b이면 -> -1 리턴, a = b -> 0 리턴, a > b ->  1리턴의 결과를 만든다.
     * 
     * Math.random() - 0.5 의 경우 음수 양수의 값만 가진다.
     * 배열의 원소의 수 만큼  card.sort(() => Math.random() - 0.5); 가 실행되며
     * 랜덤하게 오름차순정렬, 내림차순정렬을 하게된다.
     */
    card.sort(() => Math.random() - 0.5);
}

// card 배열을 무작위로 섞는다
shuffle(card);

console.log(card.length);
console.log(card);

// 카드 배열을 html에 표시
document.querySelector(".card").innerHTML = card;
}

